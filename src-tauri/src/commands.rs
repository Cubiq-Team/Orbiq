use std::process::{Command, Stdio};

use tauri::{AppHandle, Emitter, Manager, State};

use crate::auth::{
    clear_microsoft_token, poll_device_code_login_once, refresh_microsoft_token,
    resolve_minecraft_launch_identity, resolve_minecraft_launch_identity_from_ms_token,
    start_device_code_login, store_microsoft_token, DeviceCodePollOutcome,
};
use crate::domain::{
    CreateInstanceRequest, CreateOfflineProfileRequest, DeleteInstanceRequest,
    DeleteInstanceResponse, DeployServerRequest, DeployServerResponse, DuplicateInstanceRequest,
    InstanceLifecycleEvent, InstanceRecord, JavaRuntimeInfoResponse, KillInstanceRequest,
    KillInstanceResponse, LaunchInstanceRequest, LaunchInstanceResponse,
    LogoutMicrosoftProfileRequest, LogoutMicrosoftProfileResponse, MicrosoftDeviceCodeStartRequest,
    MicrosoftDeviceCodeStartResponse, OpenInstanceDirectoryRequest, OpenInstanceDirectoryResponse,
    PollMicrosoftDeviceCodeRequest, PollMicrosoftDeviceCodeResponse, ProfileRecord,
    ProvisionInstanceRequest, ProvisionInstanceResponse, ProvisionProgressEvent,
    RefreshMicrosoftTokenRequest, RefreshMicrosoftTokenResponse, RemoveProfileRequest,
    RemoveProfileResponse, RenameInstanceRequest, SetActiveProfileRequest,
    SendOrbiqWelcomeEmailRequest, SendOrbiqWelcomeEmailResponse, StartOrbiqEmailVerificationRequest,
    StartOrbiqEmailVerificationResponse, UpdateLaunchConfigRequest, VerifyOrbiqEmailCodeRequest,
    VerifyOrbiqEmailCodeResponse,
};
use crate::java_runtime::get_java_runtime_info as detect_java_runtime_info;
use crate::launch_builder::{compose_launch_plan, LaunchComposeInput, LaunchMode};
use crate::orbiq_auth::{
    send_orbiq_welcome_email as send_orbiq_welcome_email_internal,
    start_orbiq_email_verification as start_orbiq_email_verification_internal,
    verify_orbiq_email_code as verify_orbiq_email_code_internal,
};
use crate::provisioning::{
    list_loader_supported_versions as fetch_loader_supported_versions,
    list_loader_versions as fetch_loader_versions,
    list_minecraft_versions as fetch_minecraft_versions,
    provision_instance_runtime_for_loader_with_progress, LaunchAuthContext, ProvisionProgressUpdate,
};
use crate::services::{
    normalize_args, normalize_optional, refresh_processes, ProcessTerminalState, ProcessTransition,
};
use crate::storage::{
    persist_runtime, runtime_lock, unix_epoch_now, AppState, DeploymentRecord, ProcessHandle,
    RuntimeState,
};
use sha1::{Digest, Sha1};

const LIFECYCLE_EVENT_NAME: &str = "orbiq://instance-lifecycle";
const PROVISION_EVENT_NAME: &str = "orbiq://provision-progress";

fn emit_lifecycle_event(
    app: &AppHandle,
    instance_name: &str,
    state: &str,
    source: &str,
    exit_code: Option<i32>,
    reason: Option<String>,
) {
    let payload = InstanceLifecycleEvent {
        instance_name: instance_name.to_string(),
        state: state.to_string(),
        source: source.to_string(),
        timestamp_epoch: unix_epoch_now(),
        exit_code,
        reason,
    };
    let _ = app.emit(LIFECYCLE_EVENT_NAME, payload);
}

fn emit_terminal_transitions(app: &AppHandle, transitions: &[ProcessTransition]) {
    for transition in transitions {
        match transition.state {
            ProcessTerminalState::Stopped => emit_lifecycle_event(
                app,
                &transition.instance_name,
                "stopped",
                "process_exit",
                transition.exit_code,
                transition.reason.clone(),
            ),
            ProcessTerminalState::Failed => emit_lifecycle_event(
                app,
                &transition.instance_name,
                "failed",
                "process_exit",
                transition.exit_code,
                transition.reason.clone(),
            ),
        }
    }
}

fn emit_provision_event(
    app: &AppHandle,
    instance_name: &str,
    state: &str,
    phase: &str,
    message: &str,
    completed: Option<u32>,
    total: Option<u32>,
) {
    let payload = ProvisionProgressEvent {
        instance_name: instance_name.to_string(),
        state: state.to_string(),
        phase: phase.to_string(),
        message: message.to_string(),
        completed,
        total,
        timestamp_epoch: unix_epoch_now(),
    };
    let _ = app.emit(PROVISION_EVENT_NAME, payload);
}

fn apply_terminal_metadata(runtime: &mut RuntimeState, transitions: &[ProcessTransition]) {
    let now = unix_epoch_now();
    for transition in transitions {
        if let Some(instance) = runtime
            .instances
            .iter_mut()
            .find(|item| item.name == transition.instance_name)
        {
            match transition.state {
                ProcessTerminalState::Stopped => {
                    instance.last_exit_state = Some("exited".to_string());
                    instance.last_exit_code = transition.exit_code;
                    instance.last_exit_reason = transition.reason.clone();
                }
                ProcessTerminalState::Failed => {
                    instance.last_exit_state = Some(if transition.reason.is_some() {
                        "error".to_string()
                    } else {
                        "crashed".to_string()
                    });
                    instance.last_exit_code = transition.exit_code;
                    instance.last_exit_reason = transition.reason.clone();
                }
            }
            instance.last_exit_at_epoch = Some(now);
        }
    }
}

fn sanitize_profile_slug(value: &str) -> String {
    let slug = value
        .chars()
        .filter_map(|ch| {
            if ch.is_ascii_alphanumeric() {
                Some(ch.to_ascii_lowercase())
            } else if ch == '-' || ch == '_' || ch == '.' {
                Some(ch)
            } else {
                None
            }
        })
        .collect::<String>();

    if slug.is_empty() {
        "user".to_string()
    } else {
        slug
    }
}

fn sanitize_instance_dir_name(value: &str) -> String {
    let mut cleaned = value
        .trim()
        .chars()
        .map(|ch| match ch {
            '<' | '>' | ':' | '"' | '/' | '\\' | '|' | '?' | '*' => '_',
            _ if ch.is_control() => '_',
            _ => ch,
        })
        .collect::<String>();

    while cleaned.ends_with('.') || cleaned.ends_with(' ') {
        cleaned.pop();
    }

    if cleaned.is_empty() {
        "instance".to_string()
    } else {
        cleaned
    }
}

fn resolve_instance_base_dir(
    app: &AppHandle,
    instance: &InstanceRecord,
) -> Result<std::path::PathBuf, String> {
    let configured = instance
        .working_dir
        .as_ref()
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .map(std::path::PathBuf::from);

    if let Some(path) = configured {
        return Ok(path);
    }

    let app_data_dir = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?;
    Ok(app_data_dir
        .join("instances")
        .join(sanitize_instance_dir_name(&instance.name)))
}

fn resolve_instance_target_dir(
    base: std::path::PathBuf,
    target: Option<&str>,
) -> (String, std::path::PathBuf) {
    let normalized = target
        .map(|value| value.trim().to_ascii_lowercase())
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| "root".to_string());

    match normalized.as_str() {
        "worlds" | "saves" => ("saves".to_string(), base.join("saves")),
        "screenshots" | "shots" => ("screenshots".to_string(), base.join("screenshots")),
        _ => ("root".to_string(), base),
    }
}

fn open_directory_in_os(path: &std::path::Path) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    let mut cmd = {
        let mut cmd = Command::new("explorer");
        cmd.arg(path);
        cmd
    };

    #[cfg(target_os = "macos")]
    let mut cmd = {
        let mut cmd = Command::new("open");
        cmd.arg(path);
        cmd
    };

    #[cfg(all(unix, not(target_os = "macos")))]
    let mut cmd = {
        let mut cmd = Command::new("xdg-open");
        cmd.arg(path);
        cmd
    };

    cmd.spawn()
        .map(|_| ())
        .map_err(|err| format!("failed to open directory '{}': {}", path.display(), err))
}

fn select_fallback_active_profile(profiles: &mut [ProfileRecord]) {
    if profiles.is_empty() {
        return;
    }
    if profiles.iter().any(|item| item.active) {
        return;
    }
    if let Some(index) = profiles
        .iter()
        .position(|item| item.profile_type == "offline")
    {
        profiles[index].active = true;
    } else {
        profiles[0].active = true;
    }
}

fn set_only_active_profile(profiles: &mut [ProfileRecord], profile_id: &str) -> Option<usize> {
    let mut active_index = None;
    for (index, profile) in profiles.iter_mut().enumerate() {
        let is_target = profile.id.eq_ignore_ascii_case(profile_id);
        profile.active = is_target;
        if is_target {
            active_index = Some(index);
        }
    }
    active_index
}

fn resolve_launch_profile(
    runtime: &RuntimeState,
    requested_profile_id: Option<&str>,
    requested_profile_name: Option<&str>,
) -> Result<ProfileRecord, String> {
    let by_id = requested_profile_id
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .and_then(|value| {
            runtime
                .profiles
                .iter()
                .find(|profile| profile.id.eq_ignore_ascii_case(value))
        })
        .cloned();
    if let Some(profile) = by_id {
        return Ok(profile);
    }

    let by_name = requested_profile_name
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .and_then(|value| {
            runtime
                .profiles
                .iter()
                .find(|profile| profile.name.eq_ignore_ascii_case(value))
        })
        .cloned();
    if let Some(profile) = by_name {
        return Ok(profile);
    }

    runtime
        .profiles
        .iter()
        .find(|profile| profile.active)
        .or_else(|| runtime.profiles.first())
        .cloned()
        .ok_or_else(|| "no profiles are configured".to_string())
}

fn offline_uuid_from_name(name: &str) -> String {
    let mut hasher = Sha1::new();
    hasher.update(format!("OfflinePlayer:{}", name.trim()).as_bytes());
    let digest = format!("{:x}", hasher.finalize());
    digest.chars().take(32).collect()
}

fn build_launch_auth_context(profile: &ProfileRecord) -> Result<LaunchAuthContext, String> {
    let profile_name = profile.name.trim();
    if profile_name.is_empty() {
        return Err("selected profile has an empty name".to_string());
    }

    if profile.profile_type.eq_ignore_ascii_case("microsoft") {
        let identity = resolve_minecraft_launch_identity(&profile.id)?;
        return Ok(LaunchAuthContext {
            player_name: identity.player_name,
            player_uuid: identity.player_uuid,
            access_token: identity.access_token,
            xuid: identity.xuid,
            user_type: "msa".to_string(),
        });
    }

    Ok(LaunchAuthContext {
        player_name: profile_name.to_string(),
        player_uuid: offline_uuid_from_name(profile_name),
        access_token: "0".to_string(),
        xuid: None,
        user_type: "legacy".to_string(),
    })
}

#[tauri::command]
pub fn list_instances(
    state: State<AppState>,
    app: AppHandle,
) -> Result<Vec<InstanceRecord>, String> {
    let mut runtime = runtime_lock(&state)?;
    let transitions = refresh_processes(&mut runtime);
    if !transitions.is_empty() {
        apply_terminal_metadata(&mut runtime, &transitions);
        persist_runtime(&state, &runtime)?;
        emit_terminal_transitions(&app, &transitions);
    }
    Ok(runtime.instances.clone())
}

#[tauri::command]
pub fn get_profiles(state: State<AppState>) -> Result<Vec<ProfileRecord>, String> {
    let runtime = runtime_lock(&state)?;
    Ok(runtime.profiles.clone())
}

#[tauri::command]
pub fn create_offline_profile(
    request: CreateOfflineProfileRequest,
    state: State<AppState>,
) -> Result<ProfileRecord, String> {
    let name = request.name.trim();
    if name.is_empty() {
        return Err("profile name is required".to_string());
    }

    let mut runtime = runtime_lock(&state)?;
    if runtime
        .profiles
        .iter()
        .any(|item| item.name.eq_ignore_ascii_case(name))
    {
        return Err("profile with this name already exists".to_string());
    }

    let base_slug = sanitize_profile_slug(name);
    let mut suffix = 1u32;
    let mut profile_id = format!("profile-offline-{}", base_slug);
    while runtime
        .profiles
        .iter()
        .any(|item| item.id.eq_ignore_ascii_case(&profile_id))
    {
        suffix += 1;
        profile_id = format!("profile-offline-{}-{}", base_slug, suffix);
    }

    let should_activate = request.set_active.unwrap_or_else(|| {
        runtime.profiles.is_empty() || !runtime.profiles.iter().any(|item| item.active)
    });
    if should_activate {
        for profile in &mut runtime.profiles {
            profile.active = false;
        }
    }

    let created = ProfileRecord {
        id: profile_id,
        name: name.to_string(),
        profile_type: "offline".to_string(),
        active: should_activate,
        account_id: None,
        email: None,
        access_token_expires_at_epoch: None,
        last_authenticated_at_epoch: None,
    };
    runtime.profiles.push(created.clone());
    select_fallback_active_profile(&mut runtime.profiles);
    persist_runtime(&state, &runtime)?;
    Ok(created)
}

#[tauri::command]
pub fn set_active_profile(
    request: SetActiveProfileRequest,
    state: State<AppState>,
) -> Result<ProfileRecord, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err("profile id is required".to_string());
    }

    let mut runtime = runtime_lock(&state)?;
    let index = set_only_active_profile(&mut runtime.profiles, profile_id)
        .ok_or_else(|| format!("profile '{}' not found", profile_id))?;
    persist_runtime(&state, &runtime)?;
    Ok(runtime.profiles[index].clone())
}

#[tauri::command]
pub fn remove_profile(
    request: RemoveProfileRequest,
    state: State<AppState>,
) -> Result<RemoveProfileResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err("profile id is required".to_string());
    }

    let mut runtime = runtime_lock(&state)?;
    let index = runtime
        .profiles
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| format!("profile '{}' not found", profile_id))?;

    if runtime.profiles.len() <= 1 {
        return Err("at least one profile must remain".to_string());
    }

    let removed = runtime.profiles.remove(index);
    if removed.profile_type == "microsoft" {
        clear_microsoft_token(&removed.id)?;
    }

    if removed.active {
        select_fallback_active_profile(&mut runtime.profiles);
    }

    persist_runtime(&state, &runtime)?;
    Ok(RemoveProfileResponse {
        profile_id: removed.id,
        status: "removed".to_string(),
    })
}

#[tauri::command]
pub fn get_java_runtime_info(minimum_major: Option<u8>) -> Result<JavaRuntimeInfoResponse, String> {
    Ok(detect_java_runtime_info(minimum_major.unwrap_or(17)))
}

#[tauri::command]
pub fn start_microsoft_device_code_login(
    request: MicrosoftDeviceCodeStartRequest,
) -> Result<MicrosoftDeviceCodeStartResponse, String> {
    start_device_code_login(request.client_id, request.scopes)
}

#[tauri::command]
pub fn poll_microsoft_device_code_login(
    request: PollMicrosoftDeviceCodeRequest,
    state: State<AppState>,
) -> Result<PollMicrosoftDeviceCodeResponse, String> {
    let session_id = request.session_id.trim();
    if session_id.is_empty() {
        return Err("session id is required".to_string());
    }

    match poll_device_code_login_once(session_id)? {
        DeviceCodePollOutcome::Pending {
            next_poll_after_seconds,
        } => Ok(PollMicrosoftDeviceCodeResponse {
            status: "pending".to_string(),
            profile: None,
            reason: None,
            next_poll_after_seconds: Some(next_poll_after_seconds),
        }),
        DeviceCodePollOutcome::Denied { reason } => Ok(PollMicrosoftDeviceCodeResponse {
            status: "denied".to_string(),
            profile: None,
            reason: Some(reason),
            next_poll_after_seconds: None,
        }),
        DeviceCodePollOutcome::Expired { reason } => Ok(PollMicrosoftDeviceCodeResponse {
            status: "expired".to_string(),
            profile: None,
            reason: Some(reason),
            next_poll_after_seconds: None,
        }),
        DeviceCodePollOutcome::Authorized { identity, token } => {
            let minecraft_identity = resolve_minecraft_launch_identity_from_ms_token(
                &token.access_token,
            )
            .map_err(|err| format!("minecraft entitlement check failed: {}", err))?;
            let profile_display_name = if minecraft_identity.player_name.trim().is_empty() {
                identity.display_name.clone()
            } else {
                minecraft_identity.player_name.clone()
            };

            let mut runtime = runtime_lock(&state)?;

            let existing_index = runtime.profiles.iter().position(|item| {
                item.profile_type == "microsoft"
                    && item
                        .account_id
                        .as_deref()
                        .map(|value| value.eq_ignore_ascii_case(&identity.account_id))
                        .unwrap_or(false)
            });

            let profile_id = if let Some(index) = existing_index {
                runtime.profiles[index].id.clone()
            } else {
                let base = format!("profile-ms-{}", sanitize_profile_slug(&identity.account_id));
                let mut candidate = base.clone();
                let mut suffix = 2u32;
                while runtime
                    .profiles
                    .iter()
                    .any(|item| item.id.eq_ignore_ascii_case(&candidate))
                {
                    candidate = format!("{}-{}", base, suffix);
                    suffix += 1;
                }
                candidate
            };

            let now = unix_epoch_now();
            for profile in &mut runtime.profiles {
                profile.active = false;
            }

            let selected_profile = if let Some(index) = existing_index {
                let profile = &mut runtime.profiles[index];
                profile.name = profile_display_name.clone();
                profile.profile_type = "microsoft".to_string();
                profile.active = true;
                profile.account_id = Some(identity.account_id);
                profile.email = identity.email;
                profile.access_token_expires_at_epoch = token.expires_at_epoch;
                profile.last_authenticated_at_epoch = Some(now);
                profile.clone()
            } else {
                let created = ProfileRecord {
                    id: profile_id.clone(),
                    name: profile_display_name,
                    profile_type: "microsoft".to_string(),
                    active: true,
                    account_id: Some(identity.account_id),
                    email: identity.email,
                    access_token_expires_at_epoch: token.expires_at_epoch,
                    last_authenticated_at_epoch: Some(now),
                };
                runtime.profiles.push(created.clone());
                created
            };

            store_microsoft_token(&profile_id, &token)?;
            persist_runtime(&state, &runtime)?;

            Ok(PollMicrosoftDeviceCodeResponse {
                status: "authorized".to_string(),
                profile: Some(selected_profile),
                reason: None,
                next_poll_after_seconds: None,
            })
        }
    }
}

#[tauri::command]
pub fn refresh_microsoft_profile_token(
    request: RefreshMicrosoftTokenRequest,
    state: State<AppState>,
) -> Result<RefreshMicrosoftTokenResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err("profile id is required".to_string());
    }

    let refreshed = refresh_microsoft_token(profile_id)?;

    let mut runtime = runtime_lock(&state)?;
    let index = runtime
        .profiles
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| format!("profile '{}' not found", profile_id))?;
    if runtime.profiles[index].profile_type != "microsoft" {
        return Err("profile is not a Microsoft profile".to_string());
    }

    runtime.profiles[index].access_token_expires_at_epoch = refreshed.expires_at_epoch;
    runtime.profiles[index].last_authenticated_at_epoch = Some(unix_epoch_now());
    persist_runtime(&state, &runtime)?;

    Ok(RefreshMicrosoftTokenResponse {
        profile_id: runtime.profiles[index].id.clone(),
        status: "refreshed".to_string(),
        expires_at_epoch: refreshed.expires_at_epoch,
    })
}

#[tauri::command]
pub fn logout_microsoft_profile(
    request: LogoutMicrosoftProfileRequest,
    state: State<AppState>,
) -> Result<LogoutMicrosoftProfileResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err("profile id is required".to_string());
    }

    let mut runtime = runtime_lock(&state)?;
    let index = runtime
        .profiles
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| format!("profile '{}' not found", profile_id))?;

    if runtime.profiles[index].profile_type != "microsoft" {
        return Err("profile is not a Microsoft profile".to_string());
    }

    let removed = runtime.profiles.remove(index);
    clear_microsoft_token(&removed.id)?;
    if removed.active {
        select_fallback_active_profile(&mut runtime.profiles);
    }
    persist_runtime(&state, &runtime)?;

    Ok(LogoutMicrosoftProfileResponse {
        profile_id: removed.id,
        status: "logged_out".to_string(),
    })
}

#[tauri::command]
pub fn start_orbiq_email_verification(
    request: StartOrbiqEmailVerificationRequest,
) -> Result<StartOrbiqEmailVerificationResponse, String> {
    let outcome = start_orbiq_email_verification_internal(&request.email)?;
    Ok(StartOrbiqEmailVerificationResponse {
        status: "sent".to_string(),
        session_id: outcome.session_id,
        expires_at_epoch: outcome.expires_at_epoch,
        retry_after_seconds: outcome.retry_after_seconds,
    })
}

#[tauri::command]
pub fn verify_orbiq_email_code(
    request: VerifyOrbiqEmailCodeRequest,
) -> Result<VerifyOrbiqEmailCodeResponse, String> {
    verify_orbiq_email_code_internal(&request.email, &request.session_id, &request.code)?;
    Ok(VerifyOrbiqEmailCodeResponse {
        status: "verified".to_string(),
    })
}

#[tauri::command]
pub fn send_orbiq_welcome_email(
    request: SendOrbiqWelcomeEmailRequest,
) -> Result<SendOrbiqWelcomeEmailResponse, String> {
    send_orbiq_welcome_email_internal(
        &request.email,
        request.username.as_deref(),
        request.display_name.as_deref(),
    )?;
    Ok(SendOrbiqWelcomeEmailResponse {
        status: "sent".to_string(),
    })
}

#[tauri::command]
pub fn create_instance(
    request: CreateInstanceRequest,
    state: State<AppState>,
) -> Result<InstanceRecord, String> {
    let mut runtime = runtime_lock(&state)?;

    let name = request.name.trim();
    if name.is_empty() {
        return Err("instance name is required".to_string());
    }

    if runtime
        .instances
        .iter()
        .any(|instance| instance.name.eq_ignore_ascii_case(name))
    {
        return Err("instance with this name already exists".to_string());
    }

    let id = format!("inst-{}", runtime.next_instance_id);
    runtime.next_instance_id += 1;

    let loader = {
        let value = request.loader.trim().to_lowercase();
        if value.is_empty() {
            "vanilla".to_string()
        } else {
            value
        }
    };
    let is_vanilla_loader = loader == "vanilla";
    let loader_version = request
        .loader_version
        .as_deref()
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .map(|value| value.to_string());

    let created = InstanceRecord {
        id,
        name: name.to_string(),
        loader,
        loader_version: if is_vanilla_loader {
            None
        } else {
            loader_version
        },
        version: request.version.trim().to_string(),
        running: false,
        playtime_minutes: 0,
        last_played: None,
        executable: None,
        args: Vec::new(),
        working_dir: None,
        last_exit_state: None,
        last_exit_code: None,
        last_exit_reason: None,
        last_exit_at_epoch: None,
    };

    runtime.instances.push(created.clone());
    persist_runtime(&state, &runtime)?;
    Ok(created)
}

#[tauri::command]
pub fn duplicate_instance(
    request: DuplicateInstanceRequest,
    state: State<AppState>,
) -> Result<InstanceRecord, String> {
    let mut runtime = runtime_lock(&state)?;
    let source_name = request.source_name.trim();
    let new_name = request.new_name.trim();

    if source_name.is_empty() || new_name.is_empty() {
        return Err("both source_name and new_name are required".to_string());
    }

    let source = runtime
        .instances
        .iter()
        .find(|item| item.name.eq_ignore_ascii_case(source_name))
        .cloned()
        .ok_or_else(|| format!("instance '{}' not found", source_name))?;

    if runtime
        .instances
        .iter()
        .any(|item| item.name.eq_ignore_ascii_case(new_name))
    {
        return Err("instance with this name already exists".to_string());
    }

    let mut duplicated = source;
    duplicated.id = format!("inst-{}", runtime.next_instance_id);
    runtime.next_instance_id += 1;
    duplicated.name = new_name.to_string();
    duplicated.running = false;
    duplicated.last_played = None;
    duplicated.last_exit_state = None;
    duplicated.last_exit_code = None;
    duplicated.last_exit_reason = None;
    duplicated.last_exit_at_epoch = None;
    duplicated.working_dir = None;

    runtime.instances.push(duplicated.clone());
    persist_runtime(&state, &runtime)?;
    Ok(duplicated)
}

#[tauri::command]
pub fn rename_instance(
    request: RenameInstanceRequest,
    state: State<AppState>,
) -> Result<InstanceRecord, String> {
    let mut runtime = runtime_lock(&state)?;
    let old_name = request.old_name.trim();
    let new_name = request.new_name.trim();

    if old_name.is_empty() || new_name.is_empty() {
        return Err("both old_name and new_name are required".to_string());
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(old_name))
        .ok_or_else(|| format!("instance '{}' not found", old_name))?;

    if runtime
        .instances
        .iter()
        .enumerate()
        .any(|(i, item)| i != index && item.name.eq_ignore_ascii_case(new_name))
    {
        return Err("instance with this name already exists".to_string());
    }

    if !runtime.instances[index].name.eq_ignore_ascii_case(new_name) {
        let previous_key = runtime.instances[index].name.clone();
        let new_key = new_name.to_string();
        runtime.instances[index].name = new_key.clone();
        if let Some(handle) = runtime.processes.remove(&previous_key) {
            runtime.processes.insert(new_key, handle);
        }
    }

    persist_runtime(&state, &runtime)?;
    Ok(runtime.instances[index].clone())
}

#[tauri::command]
pub fn delete_instance(
    request: DeleteInstanceRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<DeleteInstanceResponse, String> {
    let mut runtime = runtime_lock(&state)?;
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(target_name))
        .ok_or_else(|| format!("instance '{}' not found", target_name))?;

    let removed_name = runtime.instances[index].name.clone();
    if let Some(mut handle) = runtime.processes.remove(&removed_name) {
        let _ = handle.child.kill();
        let _ = handle.child.wait();
    }
    runtime.instances.remove(index);

    persist_runtime(&state, &runtime)?;
    emit_lifecycle_event(&app, &removed_name, "stopped", "delete_request", None, None);
    Ok(DeleteInstanceResponse {
        instance_name: removed_name,
        status: "deleted".to_string(),
    })
}

#[tauri::command]
pub fn update_instance_launch_config(
    request: UpdateLaunchConfigRequest,
    state: State<AppState>,
) -> Result<InstanceRecord, String> {
    let mut runtime = runtime_lock(&state)?;
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(target_name))
        .ok_or_else(|| format!("instance '{}' not found", target_name))?;

    if request.executable.is_some() {
        runtime.instances[index].executable = normalize_optional(request.executable);
    }
    if request.working_dir.is_some() {
        runtime.instances[index].working_dir = normalize_optional(request.working_dir);
    }
    if let Some(values) = request.args {
        runtime.instances[index].args = normalize_args(values);
    }

    persist_runtime(&state, &runtime)?;
    Ok(runtime.instances[index].clone())
}

#[tauri::command]
pub fn open_instance_directory(
    request: OpenInstanceDirectoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<OpenInstanceDirectoryResponse, String> {
    let runtime = runtime_lock(&state)?;
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let instance = runtime
        .instances
        .iter()
        .find(|item| item.name.eq_ignore_ascii_case(instance_name))
        .ok_or_else(|| format!("instance '{}' not found", instance_name))?;

    let base_dir = resolve_instance_base_dir(&app, instance)?;
    let (target, directory) = resolve_instance_target_dir(base_dir, request.target.as_deref());

    if request.ensure_exists.unwrap_or(true) {
        std::fs::create_dir_all(&directory).map_err(|err| {
            format!(
                "failed to prepare instance directory '{}': {}",
                directory.display(),
                err
            )
        })?;
    }

    if !directory.exists() {
        return Err(format!(
            "instance directory does not exist: {}",
            directory.display()
        ));
    }

    open_directory_in_os(&directory)?;

    Ok(OpenInstanceDirectoryResponse {
        instance_name: instance.name.clone(),
        target,
        path: directory.display().to_string(),
        status: "opened".to_string(),
    })
}

#[tauri::command]
pub fn launch_instance(
    request: LaunchInstanceRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<LaunchInstanceResponse, String> {
    let mut runtime = runtime_lock(&state)?;
    let transitions = refresh_processes(&mut runtime);
    if !transitions.is_empty() {
        apply_terminal_metadata(&mut runtime, &transitions);
        persist_runtime(&state, &runtime)?;
        emit_terminal_transitions(&app, &transitions);
    }

    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(target_name))
        .ok_or_else(|| format!("instance '{}' not found", target_name))?;

    let instance_name = runtime.instances[index].name.clone();
    if runtime.processes.contains_key(&instance_name) {
        emit_lifecycle_event(
            &app,
            &instance_name,
            "running",
            "already_running",
            None,
            None,
        );
        return Ok(LaunchInstanceResponse {
            instance_name,
            profile_name: request.profile_name,
            status: "already_running".to_string(),
            started_at_epoch: unix_epoch_now(),
        });
    }

    let status = "running_external".to_string();
    let started_at_epoch = unix_epoch_now();

    let fallback_executable = runtime.instances[index].executable.clone();
    let fallback_args = runtime.instances[index].args.clone();
    let fallback_working_dir = runtime.instances[index].working_dir.clone();
    let instance_version = runtime.instances[index].version.clone();

    let executable = normalize_optional(request.executable).or(fallback_executable);
    let args = request.args.map(normalize_args).unwrap_or(fallback_args);
    let working_dir = normalize_optional(request.working_dir).or(fallback_working_dir);

    let runtime_root = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?
        .join("runtime");
    let launch_plan = compose_launch_plan(LaunchComposeInput {
        executable,
        args,
        working_dir,
        version: instance_version,
        runtime_root,
        default_java_path: detect_java_runtime_info(17).default_path,
    })
    .map_err(|err| {
        emit_lifecycle_event(
            &app,
            &instance_name,
            "failed",
            "launch_validation",
            None,
            Some(err.clone()),
        );
        err
    })?;

    let start_source = match launch_plan.mode {
        LaunchMode::ExternalJava => "external_java",
        LaunchMode::ExternalGeneric => "external",
    };
    emit_lifecycle_event(&app, &instance_name, "starting", start_source, None, None);

    let mut command = Command::new(&launch_plan.executable);

    if !launch_plan.args.is_empty() {
        command.args(&launch_plan.args);
    }

    if let Some(working_dir) = launch_plan.working_dir.as_ref() {
        command.current_dir(working_dir);
    }

    command.stdin(Stdio::null());
    command.stdout(Stdio::null());
    command.stderr(Stdio::null());

    let child = command.spawn().map_err(|err| {
        let message = format!("failed to spawn process: {}", err);
        emit_lifecycle_event(
            &app,
            &instance_name,
            "failed",
            "external",
            None,
            Some(message.clone()),
        );
        message
    })?;

    runtime
        .processes
        .insert(instance_name.clone(), ProcessHandle { child });

    runtime.instances[index].running = true;
    runtime.instances[index].last_played = Some(started_at_epoch);
    runtime.instances[index].last_exit_state = None;
    runtime.instances[index].last_exit_code = None;
    runtime.instances[index].last_exit_reason = None;
    runtime.instances[index].last_exit_at_epoch = None;

    persist_runtime(&state, &runtime)?;
    emit_lifecycle_event(&app, &instance_name, "running", start_source, None, None);
    Ok(LaunchInstanceResponse {
        instance_name,
        profile_name: request.profile_name,
        status,
        started_at_epoch,
    })
}

#[tauri::command]
pub fn kill_instance(
    request: KillInstanceRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<KillInstanceResponse, String> {
    let mut runtime = runtime_lock(&state)?;
    let transitions = refresh_processes(&mut runtime);
    if !transitions.is_empty() {
        apply_terminal_metadata(&mut runtime, &transitions);
        persist_runtime(&state, &runtime)?;
        emit_terminal_transitions(&app, &transitions);
    }

    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(target_name))
        .ok_or_else(|| format!("instance '{}' not found", target_name))?;

    let instance_name = runtime.instances[index].name.clone();

    let status = if let Some(mut handle) = runtime.processes.remove(&instance_name) {
        let _ = handle.child.kill();
        let _ = handle.child.wait();
        "stopped_external".to_string()
    } else {
        "stopped".to_string()
    };

    runtime.instances[index].running = false;
    runtime.instances[index].last_exit_state = Some("killed".to_string());
    runtime.instances[index].last_exit_code = None;
    runtime.instances[index].last_exit_reason = Some("terminated by user".to_string());
    runtime.instances[index].last_exit_at_epoch = Some(unix_epoch_now());

    persist_runtime(&state, &runtime)?;
    emit_lifecycle_event(&app, &instance_name, "stopped", "kill_request", None, None);
    Ok(KillInstanceResponse {
        instance_name,
        status,
    })
}

#[tauri::command]
pub fn deploy_server(
    request: DeployServerRequest,
    state: State<AppState>,
) -> Result<DeployServerResponse, String> {
    let mut runtime = runtime_lock(&state)?;
    let name = request.name.trim();
    if name.is_empty() {
        return Err("server name is required".to_string());
    }

    let deployment_id = format!("deploy-{}", runtime.next_deployment_id);
    let port = 25565u16.saturating_add((runtime.next_deployment_id - 1) as u16);
    runtime.next_deployment_id += 1;

    let deployment = DeploymentRecord {
        id: deployment_id.clone(),
        name: name.to_string(),
        host: request.host.trim().to_string(),
        port,
    };
    runtime.deployments.push(deployment);

    persist_runtime(&state, &runtime)?;
    Ok(DeployServerResponse {
        deployment_id,
        name: name.to_string(),
        status: format!(
            "deployed {} {} ({} GB RAM)",
            request.server_type.trim(),
            request.version.trim(),
            request.ram_gb
        ),
        host: request.host.trim().to_string(),
        port,
    })
}

#[tauri::command]
pub fn list_deployments(state: State<AppState>) -> Result<Vec<DeployServerResponse>, String> {
    let runtime = runtime_lock(&state)?;
    let rows = runtime
        .deployments
        .iter()
        .map(|item| DeployServerResponse {
            deployment_id: item.id.clone(),
            name: item.name.clone(),
            status: "running".to_string(),
            host: item.host.clone(),
            port: item.port,
        })
        .collect::<Vec<_>>();
    Ok(rows)
}

#[tauri::command]
pub fn list_minecraft_versions(
    include_snapshots: Option<bool>,
    limit: Option<u16>,
) -> Result<Vec<String>, String> {
    let include = include_snapshots.unwrap_or(false);
    let max = limit.map(|value| usize::from(value).clamp(1, 500));
    fetch_minecraft_versions(include, max)
}

#[tauri::command]
pub fn list_loader_supported_versions(
    loader: String,
    include_snapshots: Option<bool>,
    limit: Option<u16>,
) -> Result<Vec<String>, String> {
    let include = include_snapshots.unwrap_or(false);
    let max = limit.map(|value| usize::from(value).clamp(1, 500));
    fetch_loader_supported_versions(&loader, include, max)
}

#[tauri::command]
pub fn list_loader_versions(
    loader: String,
    game_version: String,
    limit: Option<u16>,
) -> Result<Vec<String>, String> {
    let max = limit.map(|value| usize::from(value).clamp(1, 500));
    fetch_loader_versions(&loader, &game_version, max)
}

#[tauri::command]
pub async fn provision_instance(
    request: ProvisionInstanceRequest,
    state: State<'_, AppState>,
    app: AppHandle,
) -> Result<ProvisionInstanceResponse, String> {
    let requested_name = request.instance_name.trim();
    let requested_version = request.version.trim();
    if requested_name.is_empty() {
        return Err("instance name is required".to_string());
    }
    if requested_version.is_empty() {
        return Err("version is required".to_string());
    }

    let (instance_name, instance_loader, instance_loader_version, selected_profile) = {
        let runtime = runtime_lock(&state)?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(requested_name))
            .ok_or_else(|| format!("instance '{}' not found", requested_name))?;
        let selected_profile = resolve_launch_profile(
            &runtime,
            request.profile_id.as_deref(),
            request.profile_name.as_deref(),
        )?;
        (
            instance.name.clone(),
            instance.loader.clone(),
            instance.loader_version.clone(),
            selected_profile,
        )
    };

    let runtime_root = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?
        .join("runtime");

    emit_provision_event(
        &app,
        &instance_name,
        "running",
        "init",
        "Provision started",
        None,
        None,
    );

    let app_for_progress = app.clone();
    let instance_for_progress = instance_name.clone();
    let runtime_root_for_task = runtime_root.clone();
    let loader_for_task = instance_loader.clone();
    let loader_version_for_task = instance_loader_version.clone();
    let selected_profile_for_task = selected_profile.clone();
    let version_for_task = requested_version.to_string();
    let force_redownload = request.force_redownload.unwrap_or(false);
    let max_concurrency = request.max_concurrency;

    let outcome = tauri::async_runtime::spawn_blocking(move || {
        let auth_context_for_task = build_launch_auth_context(&selected_profile_for_task)?;
        provision_instance_runtime_for_loader_with_progress(
            &runtime_root_for_task,
            &loader_for_task,
            &version_for_task,
            loader_version_for_task.as_deref(),
            Some(auth_context_for_task),
            force_redownload,
            max_concurrency,
            move |update: ProvisionProgressUpdate| {
                emit_provision_event(
                    &app_for_progress,
                    &instance_for_progress,
                    "running",
                    &update.phase,
                    &update.message,
                    update.completed,
                    update.total,
                );
            },
        )
    })
    .await
    .map_err(|err| format!("provision task failed to join: {}", err))?;

    let outcome = match outcome {
        Ok(value) => value,
        Err(err) => {
            emit_provision_event(&app, &instance_name, "failed", "failed", &err, None, None);
            return Err(err);
        }
    };

    {
        let mut runtime = runtime_lock(&state)?;
        if let Some(instance) = runtime
            .instances
            .iter_mut()
            .find(|item| item.name.eq_ignore_ascii_case(&instance_name))
        {
            instance.version = requested_version.to_string();
            instance.args = outcome.launch_args.clone();
            if instance.working_dir.is_none() {
                instance.working_dir = Some(outcome.working_dir.clone());
            }
            instance.last_exit_state = None;
            instance.last_exit_code = None;
            instance.last_exit_reason = None;
            instance.last_exit_at_epoch = None;
        }
        persist_runtime(&state, &runtime)?;
    }

    emit_provision_event(
        &app,
        &instance_name,
        "completed",
        "done",
        "Provision completed",
        Some(outcome.stats.downloaded_files + outcome.stats.skipped_files),
        Some(outcome.stats.downloaded_files + outcome.stats.skipped_files),
    );

    Ok(ProvisionInstanceResponse {
        instance_name,
        version: outcome.launch_version_id,
        status: format!("provisioned ({})", instance_loader),
        downloaded_files: outcome.stats.downloaded_files,
        skipped_files: outcome.stats.skipped_files,
        libraries_downloaded: outcome.stats.libraries_downloaded,
        assets_downloaded: outcome.stats.assets_downloaded,
        runtime_root: runtime_root.to_string_lossy().to_string(),
    })
}
