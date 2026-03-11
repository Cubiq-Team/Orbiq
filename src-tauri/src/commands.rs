use std::collections::BTreeSet;
use std::fs;
use std::io::{BufRead, BufReader};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::Duration;

use serde_json::json;
use tauri::{AppHandle, Emitter, Manager, State};

use crate::auth::{
    clear_microsoft_token, complete_microsoft_oauth_login, poll_device_code_login_once,
    refresh_microsoft_token, resolve_minecraft_launch_identity,
    resolve_minecraft_launch_identity_from_ms_token, start_device_code_login,
    start_microsoft_oauth_login, store_microsoft_token, DeviceCodePollOutcome, MicrosoftIdentity,
    MicrosoftTokenRecord,
};
use crate::domain::{
    CheckInstanceFileEntry, CheckInstanceFilesRequest, CheckInstanceFilesResponse,
    CompleteMicrosoftOAuthLoginRequest, CompleteMicrosoftOAuthLoginResponse, CreateInstanceRequest,
    CreateOfflineProfileRequest, DebugBundleRequest, DebugBundleResult, DeleteInstanceRequest,
    DeleteInstanceResponse, DeployServerRequest, DeployServerResponse, DuplicateInstanceRequest,
    GetInstanceInfoRequest, InstallBrowseItemRequest, InstallBrowseItemResponse,
    InstanceInfoResponse, InstanceLifecycleEvent, InstanceRecord, JavaRuntimeInfoResponse,
    KillInstanceRequest, KillInstanceResponse, LaunchInstanceRequest, LaunchInstanceResponse,
    ListInstanceFilesRequest, ListInstanceFilesResponse, LogoutMicrosoftProfileRequest,
    LogoutMicrosoftProfileResponse, MicrosoftDeviceCodeStartRequest,
    MicrosoftDeviceCodeStartResponse, MicrosoftOAuthStartRequest, MicrosoftOAuthStartResponse,
    OpenExternalUrlRequest, OpenExternalUrlResponse, OpenInstanceDirectoryRequest,
    OpenInstanceDirectoryResponse, PollMicrosoftDeviceCodeRequest, PollMicrosoftDeviceCodeResponse,
    PreflightInstanceLaunchRequest, PreflightInstanceLaunchResponse, PreflightIssue, ProfileRecord,
    ProvisionInstanceRequest, ProvisionInstanceResponse, ProvisionProgressEvent,
    RefreshMicrosoftTokenRequest, RefreshMicrosoftTokenResponse, RemoveInstanceFileRequest,
    RemoveInstanceFileResponse, RemoveProfileRequest, RemoveProfileResponse, RenameInstanceRequest,
    SendOrbiqWelcomeEmailRequest, SendOrbiqWelcomeEmailResponse, SetActiveProfileRequest,
    StartOrbiqEmailVerificationRequest, StartOrbiqEmailVerificationResponse,
    UpdateLaunchConfigRequest, VerifyOrbiqEmailCodeRequest, VerifyOrbiqEmailCodeResponse,
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
    provision_instance_runtime_for_loader_with_progress, LaunchAuthContext,
    ProvisionProgressUpdate,
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
const MAX_LOG_FILES_IN_BUNDLE: usize = 12;
const MAX_LOG_LINES_PER_FILE: usize = 240;
const MAX_LOG_BYTES_PER_FILE: usize = 256 * 1024;

fn error_with_code(code: &str, message: impl AsRef<str>) -> String {
    let msg = message.as_ref().trim();
    if msg.starts_with('[') && msg.contains(']') {
        msg.to_string()
    } else {
        format!("[{}] {}", code.trim(), msg)
    }
}

fn map_error_code<T>(code: &str, result: Result<T, String>) -> Result<T, String> {
    result.map_err(|err| error_with_code(code, err))
}

fn normalize_loader_name(value: &str) -> String {
    let normalized = value.trim().to_ascii_lowercase();
    if normalized.is_empty() {
        "vanilla".to_string()
    } else {
        normalized
    }
}

fn list_regular_file_names(dir: &Path) -> Vec<String> {
    let entries = match fs::read_dir(dir) {
        Ok(value) => value,
        Err(_) => return Vec::new(),
    };
    let mut rows = entries
        .filter_map(|entry| entry.ok())
        .filter(|entry| {
            entry
                .file_type()
                .map(|kind| kind.is_file())
                .unwrap_or(false)
        })
        .filter_map(|entry| {
            entry
                .file_name()
                .to_str()
                .map(|name| name.trim().to_string())
        })
        .filter(|name| !name.is_empty())
        .collect::<Vec<_>>();
    rows.sort_by(|a, b| a.to_ascii_lowercase().cmp(&b.to_ascii_lowercase()));
    rows
}

fn file_has_extension(path: &str, expected: &str) -> bool {
    Path::new(path)
        .extension()
        .and_then(|ext| ext.to_str())
        .map(|ext| ext.eq_ignore_ascii_case(expected))
        .unwrap_or(false)
}

fn has_name_token(files: &[String], token: &str) -> bool {
    let needle = token.trim().to_ascii_lowercase();
    if needle.is_empty() {
        return false;
    }
    files
        .iter()
        .any(|item| item.to_ascii_lowercase().contains(needle.as_str()))
}

fn blocking_issue(
    code: &str,
    message: impl AsRef<str>,
    fixable: bool,
    action: Option<&str>,
) -> PreflightIssue {
    PreflightIssue {
        severity: "blocking".to_string(),
        code: code.to_string(),
        message: message.as_ref().to_string(),
        fixable,
        action: action.map(|value| value.to_string()),
    }
}

fn warning_issue(code: &str, message: impl AsRef<str>, action: Option<&str>) -> PreflightIssue {
    PreflightIssue {
        severity: "warning".to_string(),
        code: code.to_string(),
        message: message.as_ref().to_string(),
        fixable: false,
        action: action.map(|value| value.to_string()),
    }
}

fn classify_launch_identity_error(message: impl AsRef<str>) -> String {
    let raw = message.as_ref().trim();
    let lower = raw.to_ascii_lowercase();
    if lower.contains("minecraft profile not found")
        || lower.contains("does not own minecraft")
        || lower.contains("java edition")
    {
        return error_with_code(
            "AUTH_ENTITLEMENT_MISSING",
            "This Microsoft account does not own Minecraft: Java Edition.",
        );
    }
    if lower.contains("invalid app registration")
        || lower.contains("aka.ms/mce-reviewappid")
        || lower.contains("aka.ms/appreginfo")
    {
        return error_with_code("AUTH_APP_REGISTRATION_INVALID", raw);
    }
    if lower.contains("token not found for profile")
        || lower.contains("refresh token is missing")
        || lower.contains("microsoft token is missing")
        || lower.contains("please sign in again")
        || lower.contains("invalid_grant")
    {
        return error_with_code(
            "AUTH_RELINK_REQUIRED",
            "Microsoft account relink is required. Please link Microsoft again.",
        );
    }
    if lower.contains("check system clock")
        || lower.contains("issued-at is in the future")
        || lower.contains("not valid yet")
    {
        return error_with_code("AUTH_CLOCK_SKEW", raw);
    }
    error_with_code("AUTH_LAUNCH_IDENTITY_FAILED", raw)
}

fn read_log_tail(path: &Path, max_lines: usize, max_bytes: usize) -> Result<Vec<String>, String> {
    let file = fs::File::open(path)
        .map_err(|err| format!("failed to open log file '{}': {}", path.display(), err))?;
    let reader = BufReader::new(file);
    let mut ring = std::collections::VecDeque::<String>::new();
    let mut total_bytes = 0usize;

    for line in reader.lines() {
        let line = match line {
            Ok(value) => value,
            Err(_) => continue,
        };
        let size = line.len();
        ring.push_back(line);
        total_bytes = total_bytes.saturating_add(size);
        while ring.len() > max_lines {
            if let Some(front) = ring.pop_front() {
                total_bytes = total_bytes.saturating_sub(front.len());
            }
        }
        while total_bytes > max_bytes && !ring.is_empty() {
            if let Some(front) = ring.pop_front() {
                total_bytes = total_bytes.saturating_sub(front.len());
            }
        }
    }

    Ok(ring.into_iter().collect())
}

fn collect_log_candidates(base_dirs: &[PathBuf]) -> Vec<PathBuf> {
    let mut files = Vec::<PathBuf>::new();
    let mut seen = BTreeSet::<String>::new();
    for dir in base_dirs {
        let read_dir = match fs::read_dir(dir) {
            Ok(value) => value,
            Err(_) => continue,
        };
        for entry in read_dir.flatten() {
            let path = entry.path();
            if !path.is_file() {
                continue;
            }
            let ext = path
                .extension()
                .and_then(|value| value.to_str())
                .unwrap_or_default();
            if !ext.eq_ignore_ascii_case("log") && !ext.eq_ignore_ascii_case("txt") {
                continue;
            }
            let key = path.to_string_lossy().to_string();
            if seen.insert(key) {
                files.push(path);
            }
        }
    }
    files.sort_by(|a, b| {
        let a_meta = fs::metadata(a).and_then(|m| m.modified()).ok();
        let b_meta = fs::metadata(b).and_then(|m| m.modified()).ok();
        b_meta.cmp(&a_meta)
    });
    files.truncate(MAX_LOG_FILES_IN_BUNDLE);
    files
}

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

fn sanitize_instance_icon_key(value: &str) -> Option<String> {
    let normalized = value
        .trim()
        .to_ascii_lowercase()
        .chars()
        .filter_map(|ch| {
            if ch.is_ascii_lowercase() || ch.is_ascii_digit() || ch == '_' {
                Some(ch)
            } else if ch == '-' || ch == ' ' {
                Some('_')
            } else {
                None
            }
        })
        .collect::<String>();

    if normalized.is_empty() {
        None
    } else {
        Some(normalized)
    }
}

fn sanitize_instance_banner_key(value: &str) -> Option<String> {
    let normalized = value
        .trim()
        .to_ascii_lowercase()
        .chars()
        .filter_map(|ch| {
            if ch.is_ascii_lowercase() || ch.is_ascii_digit() || ch == '_' {
                Some(ch)
            } else if ch == '-' || ch == ' ' {
                Some('_')
            } else {
                None
            }
        })
        .collect::<String>();

    if normalized.is_empty() {
        None
    } else {
        Some(normalized)
    }
}

fn parse_heap_flag_mb(arg: &str, prefix: &str) -> Option<u32> {
    let raw = arg.strip_prefix(prefix)?.trim();
    if raw.is_empty() {
        return None;
    }

    let (num_part, unit) = match raw.chars().last() {
        Some(ch) if ch.is_ascii_alphabetic() => (&raw[..raw.len().saturating_sub(1)], Some(ch)),
        _ => (raw, None),
    };
    let value = num_part.trim().parse::<u64>().ok()?;
    if value == 0 {
        return None;
    }

    let mb = match unit.map(|ch| ch.to_ascii_lowercase()) {
        Some('g') => value.saturating_mul(1024),
        Some('m') | None => value,
        Some('k') => value / 1024,
        _ => return None,
    };
    if mb == 0 || mb > u64::from(u32::MAX) {
        return None;
    }
    Some(mb as u32)
}

fn extract_heap_bounds_mb(args: &[String]) -> (Option<u32>, Option<u32>) {
    let mut min_mb = None;
    let mut max_mb = None;
    for arg in args {
        if min_mb.is_none() {
            min_mb = parse_heap_flag_mb(arg, "-Xms");
        }
        if max_mb.is_none() {
            max_mb = parse_heap_flag_mb(arg, "-Xmx");
        }
        if min_mb.is_some() && max_mb.is_some() {
            break;
        }
    }
    (min_mb, max_mb)
}

fn count_mod_files(mods_dir: &std::path::Path) -> u32 {
    let read_dir = match std::fs::read_dir(mods_dir) {
        Ok(value) => value,
        Err(_) => return 0,
    };
    read_dir
        .filter_map(|entry| entry.ok())
        .filter(|entry| {
            entry
                .file_type()
                .map(|kind| kind.is_file())
                .unwrap_or(false)
        })
        .filter(|entry| {
            entry
                .path()
                .extension()
                .and_then(|ext| ext.to_str())
                .map(|ext| ext.eq_ignore_ascii_case("jar"))
                .unwrap_or(false)
        })
        .count() as u32
}

fn count_world_dirs(saves_dir: &std::path::Path) -> u32 {
    let read_dir = match std::fs::read_dir(saves_dir) {
        Ok(value) => value,
        Err(_) => return 0,
    };
    read_dir
        .filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_type().map(|kind| kind.is_dir()).unwrap_or(false))
        .count() as u32
}

fn eq_path_case_insensitive(left: &str, right: &str) -> bool {
    #[cfg(target_os = "windows")]
    {
        left.eq_ignore_ascii_case(right)
    }
    #[cfg(not(target_os = "windows"))]
    {
        left == right
    }
}

fn resolve_java_version_for_path(path: &str, info: &JavaRuntimeInfoResponse) -> Option<String> {
    let normalized = path.trim();
    if normalized.is_empty() {
        return None;
    }
    info.candidates
        .iter()
        .find(|candidate| eq_path_case_insensitive(&candidate.path, normalized))
        .and_then(|candidate| candidate.version.clone())
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
        "mods" => ("mods".to_string(), base.join("mods")),
        "worlds" | "saves" => ("saves".to_string(), base.join("saves")),
        "screenshots" | "shots" => ("screenshots".to_string(), base.join("screenshots")),
        "logs" => ("logs".to_string(), base.join("logs")),
        "resourcepacks" | "packs" => ("resourcepacks".to_string(), base.join("resourcepacks")),
        "shaderpacks" | "shaders" => ("shaderpacks".to_string(), base.join("shaderpacks")),
        "modpacks" | "modpack" => ("modpacks".to_string(), base.join("modpacks")),
        _ => ("root".to_string(), base),
    }
}

fn resolve_requested_instance_directory(
    request: &OpenInstanceDirectoryRequest,
    state: &State<AppState>,
    app: &AppHandle,
) -> Result<(String, String, std::path::PathBuf), String> {
    let runtime = runtime_lock(state)?;
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let instance = runtime
        .instances
        .iter()
        .find(|item| item.name.eq_ignore_ascii_case(instance_name))
        .cloned()
        .ok_or_else(|| format!("instance '{}' not found", instance_name))?;

    let base_dir = resolve_instance_base_dir(app, &instance)?;
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

    Ok((instance.name, target, directory))
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

fn open_directory_in_terminal(path: &std::path::Path) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        let working_dir = format!("cd /d \"{}\"", path.display());
        let mut cmd = Command::new("cmd");
        cmd.arg("/C")
            .arg("start")
            .arg("cmd")
            .arg("/K")
            .arg(working_dir);
        return cmd
            .spawn()
            .map(|_| ())
            .map_err(|err| format!("failed to open terminal '{}': {}", path.display(), err));
    }

    #[cfg(target_os = "macos")]
    {
        let mut cmd = Command::new("open");
        cmd.arg("-a").arg("Terminal").arg(path);
        return cmd
            .spawn()
            .map(|_| ())
            .map_err(|err| format!("failed to open terminal '{}': {}", path.display(), err));
    }

    #[cfg(all(unix, not(target_os = "macos")))]
    {
        let path_text = path.display().to_string();
        let attempts: Vec<(&str, Vec<String>)> = vec![
            (
                "x-terminal-emulator",
                vec!["--working-directory".to_string(), path_text.clone()],
            ),
            (
                "gnome-terminal",
                vec![format!("--working-directory={}", path_text)],
            ),
            ("konsole", vec!["--workdir".to_string(), path_text.clone()]),
            (
                "xfce4-terminal",
                vec!["--working-directory".to_string(), path_text.clone()],
            ),
            (
                "alacritty",
                vec!["--working-directory".to_string(), path_text.clone()],
            ),
            ("kitty", vec!["--directory".to_string(), path_text.clone()]),
        ];

        for (program, args) in attempts {
            let mut cmd = Command::new(program);
            for arg in args {
                cmd.arg(arg);
            }
            if cmd.spawn().is_ok() {
                return Ok(());
            }
        }
        return Err(format!(
            "failed to open terminal '{}': no supported terminal command was found",
            path.display()
        ));
    }
}

fn open_url_in_os(url: &str) -> Result<(), String> {
    let value = url.trim();
    if value.is_empty() {
        return Err("url is required".to_string());
    }
    if !(value.starts_with("https://") || value.starts_with("http://")) {
        return Err("only http(s) urls are allowed".to_string());
    }

    #[cfg(target_os = "windows")]
    let mut cmd = {
        // Use Windows URL handler directly; avoids cmd.exe parsing query params like `&scope=...`.
        let mut cmd = Command::new("rundll32");
        cmd.arg("url.dll,FileProtocolHandler").arg(value);
        cmd
    };

    #[cfg(target_os = "macos")]
    let mut cmd = {
        let mut cmd = Command::new("open");
        cmd.arg(value);
        cmd
    };

    #[cfg(all(unix, not(target_os = "macos")))]
    let mut cmd = {
        let mut cmd = Command::new("xdg-open");
        cmd.arg(value);
        cmd
    };

    cmd.spawn()
        .map(|_| ())
        .map_err(|err| format!("failed to open url '{}': {}", value, err))
}

fn sanitize_download_file_name(value: &str) -> Option<String> {
    let normalized = value.trim().replace('\\', "/");
    let leaf = normalized
        .rsplit('/')
        .next()
        .map(|part| part.trim())
        .unwrap_or("");
    if leaf.is_empty() {
        return None;
    }

    let mut cleaned = leaf
        .chars()
        .map(|ch| match ch {
            '<' | '>' | ':' | '"' | '/' | '\\' | '|' | '?' | '*' => '_',
            _ if ch.is_control() => '_',
            _ => ch,
        })
        .collect::<String>();

    cleaned = cleaned.trim().trim_matches('.').trim().to_string();
    while cleaned.ends_with('.') || cleaned.ends_with(' ') {
        cleaned.pop();
    }
    while cleaned.starts_with('.') || cleaned.starts_with(' ') {
        cleaned.remove(0);
    }
    if cleaned.is_empty() {
        return None;
    }
    if cleaned.len() > 180 {
        cleaned.truncate(180);
    }
    Some(cleaned)
}

fn default_download_file_name(target: &str) -> String {
    match target {
        "mods" => "mod.jar".to_string(),
        "resourcepacks" => "resourcepack.zip".to_string(),
        "shaderpacks" => "shaderpack.zip".to_string(),
        "modpacks" => "modpack.mrpack".to_string(),
        _ => "download.bin".to_string(),
    }
}

fn ensure_download_extension(file_name: String, target: &str) -> String {
    let has_ext = std::path::Path::new(&file_name)
        .extension()
        .and_then(|ext| ext.to_str())
        .map(|ext| !ext.trim().is_empty())
        .unwrap_or(false);
    if has_ext {
        return file_name;
    }

    let ext = match target {
        "mods" => "jar",
        "resourcepacks" | "shaderpacks" => "zip",
        "modpacks" => "mrpack",
        _ => "bin",
    };
    format!("{}.{}", file_name, ext)
}

fn infer_file_name_from_url(url: &str) -> Option<String> {
    let parsed = reqwest::Url::parse(url).ok()?;
    let mut segments = parsed.path_segments()?;
    let leaf = segments.next_back()?;
    sanitize_download_file_name(leaf)
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
        let identity = resolve_minecraft_launch_identity(&profile.id)
            .map_err(classify_launch_identity_error)?;
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
pub fn get_instance_info(
    request: GetInstanceInfoRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<InstanceInfoResponse, String> {
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let instance = {
        let mut runtime = runtime_lock(&state)?;
        let transitions = refresh_processes(&mut runtime);
        if !transitions.is_empty() {
            apply_terminal_metadata(&mut runtime, &transitions);
            persist_runtime(&state, &runtime)?;
            emit_terminal_transitions(&app, &transitions);
        }
        runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(target_name))
            .cloned()
            .ok_or_else(|| format!("instance '{}' not found", target_name))?
    };

    let (mods_count, worlds_count) = match resolve_instance_base_dir(&app, &instance) {
        Ok(base_dir) => (
            count_mod_files(&base_dir.join("mods")),
            count_world_dirs(&base_dir.join("saves")),
        ),
        Err(_) => (0, 0),
    };

    let (memory_min_mb, memory_max_mb) = extract_heap_bounds_mb(&instance.args);
    let java_info = detect_java_runtime_info(17);
    let java_path = instance
        .executable
        .as_ref()
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty())
        .or_else(|| java_info.default_path.clone())
        .or_else(|| Some("java".to_string()));
    let java_version = java_path
        .as_deref()
        .and_then(|value| resolve_java_version_for_path(value, &java_info));

    Ok(InstanceInfoResponse {
        instance_name: instance.name,
        java_path,
        java_version,
        memory_min_mb,
        memory_max_mb,
        mods_count,
        worlds_count,
    })
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

fn persist_microsoft_profile_from_login(
    state: &State<AppState>,
    identity: MicrosoftIdentity,
    token: MicrosoftTokenRecord,
) -> Result<ProfileRecord, String> {
    let minecraft_identity = resolve_minecraft_launch_identity_from_ms_token(
        &token.access_token,
        Some(&token.client_id),
    )
    .map_err(classify_launch_identity_error)?;
    let profile_display_name = if minecraft_identity.player_name.trim().is_empty() {
        identity.display_name.clone()
    } else {
        minecraft_identity.player_name.clone()
    };

    let mut runtime = runtime_lock(state)?;

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
    persist_runtime(state, &runtime)?;
    Ok(selected_profile)
}

#[tauri::command]
pub fn start_microsoft_device_code_login(
    request: MicrosoftDeviceCodeStartRequest,
) -> Result<MicrosoftDeviceCodeStartResponse, String> {
    map_error_code(
        "AUTH_DEVICE_CODE_START_FAILED",
        start_device_code_login(request.client_id, request.scopes),
    )
}

#[tauri::command]
pub fn start_microsoft_oauth_login_command(
    request: MicrosoftOAuthStartRequest,
) -> Result<MicrosoftOAuthStartResponse, String> {
    map_error_code(
        "AUTH_OAUTH_START_FAILED",
        start_microsoft_oauth_login(request.client_id, request.scopes, request.redirect_uri),
    )
}

#[tauri::command]
pub fn complete_microsoft_oauth_login_command(
    request: CompleteMicrosoftOAuthLoginRequest,
    state: State<AppState>,
) -> Result<CompleteMicrosoftOAuthLoginResponse, String> {
    let (identity, token) = map_error_code(
        "AUTH_OAUTH_COMPLETE_FAILED",
        complete_microsoft_oauth_login(&request.state, &request.code),
    )?;
    let profile = map_error_code(
        "AUTH_PROFILE_PERSIST_FAILED",
        persist_microsoft_profile_from_login(&state, identity, token),
    )?;
    Ok(CompleteMicrosoftOAuthLoginResponse {
        status: "authorized".to_string(),
        profile,
    })
}

#[tauri::command]
pub fn poll_microsoft_device_code_login(
    request: PollMicrosoftDeviceCodeRequest,
    state: State<AppState>,
) -> Result<PollMicrosoftDeviceCodeResponse, String> {
    let session_id = request.session_id.trim();
    if session_id.is_empty() {
        return Err(error_with_code(
            "AUTH_DEVICE_CODE_SESSION_REQUIRED",
            "session id is required",
        ));
    }

    match map_error_code(
        "AUTH_DEVICE_CODE_POLL_FAILED",
        poll_device_code_login_once(session_id),
    )? {
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
            let selected_profile = map_error_code(
                "AUTH_PROFILE_PERSIST_FAILED",
                persist_microsoft_profile_from_login(&state, identity, token),
            )?;

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
        return Err(error_with_code(
            "AUTH_PROFILE_ID_REQUIRED",
            "profile id is required",
        ));
    }

    let refreshed = map_error_code("AUTH_REFRESH_FAILED", refresh_microsoft_token(profile_id))?;

    let mut runtime =
        runtime_lock(&state).map_err(|err| error_with_code("AUTH_STATE_LOCK_FAILED", err))?;
    let index = runtime
        .profiles
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| {
            error_with_code(
                "AUTH_PROFILE_NOT_FOUND",
                format!("profile '{}' not found", profile_id),
            )
        })?;
    if runtime.profiles[index].profile_type != "microsoft" {
        return Err(error_with_code(
            "AUTH_PROFILE_TYPE_INVALID",
            "profile is not a Microsoft profile",
        ));
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
        return Err(error_with_code(
            "AUTH_PROFILE_ID_REQUIRED",
            "profile id is required",
        ));
    }

    let mut runtime =
        runtime_lock(&state).map_err(|err| error_with_code("AUTH_STATE_LOCK_FAILED", err))?;
    let index = runtime
        .profiles
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| {
            error_with_code(
                "AUTH_PROFILE_NOT_FOUND",
                format!("profile '{}' not found", profile_id),
            )
        })?;

    if runtime.profiles[index].profile_type != "microsoft" {
        return Err(error_with_code(
            "AUTH_PROFILE_TYPE_INVALID",
            "profile is not a Microsoft profile",
        ));
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
    let icon_key = request
        .icon_key
        .as_deref()
        .and_then(sanitize_instance_icon_key);
    let banner_key = request
        .banner_key
        .as_deref()
        .and_then(sanitize_instance_banner_key);

    let created = InstanceRecord {
        id,
        name: name.to_string(),
        icon_key,
        banner_key,
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
    if request.icon_key.is_some() {
        runtime.instances[index].icon_key = request
            .icon_key
            .as_deref()
            .and_then(sanitize_instance_icon_key);
    }
    if request.banner_key.is_some() {
        runtime.instances[index].banner_key = request
            .banner_key
            .as_deref()
            .and_then(sanitize_instance_banner_key);
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
    let (instance_name, target, directory) =
        resolve_requested_instance_directory(&request, &state, &app)?;

    open_directory_in_os(&directory)?;

    Ok(OpenInstanceDirectoryResponse {
        instance_name,
        target,
        path: directory.display().to_string(),
        status: "opened".to_string(),
    })
}

#[tauri::command]
pub fn resolve_instance_directory(
    request: OpenInstanceDirectoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<OpenInstanceDirectoryResponse, String> {
    let (instance_name, target, directory) =
        resolve_requested_instance_directory(&request, &state, &app)?;
    Ok(OpenInstanceDirectoryResponse {
        instance_name,
        target,
        path: directory.display().to_string(),
        status: "resolved".to_string(),
    })
}

#[tauri::command]
pub fn open_instance_directory_in_terminal(
    request: OpenInstanceDirectoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<OpenInstanceDirectoryResponse, String> {
    let (instance_name, target, directory) =
        resolve_requested_instance_directory(&request, &state, &app)?;
    open_directory_in_terminal(&directory)?;
    Ok(OpenInstanceDirectoryResponse {
        instance_name,
        target,
        path: directory.display().to_string(),
        status: "opened_terminal".to_string(),
    })
}

#[tauri::command]
pub fn open_external_url(
    request: OpenExternalUrlRequest,
) -> Result<OpenExternalUrlResponse, String> {
    let url = request.url.trim();
    if url.is_empty() {
        return Err("url is required".to_string());
    }

    open_url_in_os(url)?;
    Ok(OpenExternalUrlResponse {
        url: url.to_string(),
        status: "opened".to_string(),
    })
}

#[tauri::command]
pub fn install_browse_item(
    request: InstallBrowseItemRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<InstallBrowseItemResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err(error_with_code(
            "INSTALL_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }

    let url = request.url.trim();
    if url.is_empty() {
        return Err(error_with_code(
            "INSTALL_URL_REQUIRED",
            "download url is required",
        ));
    }
    if !(url.starts_with("https://") || url.starts_with("http://")) {
        return Err(error_with_code(
            "INSTALL_URL_INVALID",
            "only http(s) urls are allowed",
        ));
    }

    let target_value = request
        .target
        .as_deref()
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .unwrap_or("mods");

    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: Some(target_value.to_string()),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) = map_error_code(
        "INSTALL_TARGET_RESOLVE_FAILED",
        resolve_requested_instance_directory(&resolve_request, &state, &app),
    )?;

    let base_file_name = request
        .file_name
        .as_deref()
        .and_then(sanitize_download_file_name)
        .or_else(|| infer_file_name_from_url(url))
        .unwrap_or_else(|| default_download_file_name(&resolved_target));
    let file_name = ensure_download_extension(base_file_name, &resolved_target);

    let destination = directory.join(&file_name);
    let overwrite = request.overwrite.unwrap_or(false);
    let if_exists = request
        .if_exists
        .as_deref()
        .map(|value| value.trim().to_ascii_lowercase())
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| {
            if overwrite {
                "overwrite".to_string()
            } else {
                "error".to_string()
            }
        });
    if destination.exists() {
        match if_exists.as_str() {
            "skip" | "keep" => {
                return Ok(InstallBrowseItemResponse {
                    instance_name: resolved_instance_name,
                    target: resolved_target,
                    file_name,
                    path: destination.display().to_string(),
                    bytes_written: 0,
                    status: "skipped_exists".to_string(),
                });
            }
            "overwrite" | "replace" => {}
            _ => {
                return Err(error_with_code(
                    "INSTALL_FILE_EXISTS",
                    format!(
                        "target file already exists: {} (set ifExists=skip or ifExists=overwrite)",
                        destination.display()
                    ),
                ));
            }
        }
    }

    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(300))
        .build()
        .map_err(|err| error_with_code("INSTALL_HTTP_CLIENT_FAILED", err.to_string()))?;
    let mut response = client
        .get(url)
        .send()
        .map_err(|err| error_with_code("INSTALL_DOWNLOAD_REQUEST_FAILED", err.to_string()))?;
    if !response.status().is_success() {
        return Err(error_with_code(
            "INSTALL_DOWNLOAD_FAILED",
            format!(
                "download failed with status {} for '{}'",
                response.status(),
                url
            ),
        ));
    }

    std::fs::create_dir_all(&directory).map_err(|err| {
        format!(
            "failed to prepare install directory '{}': {}",
            directory.display(),
            err
        )
    })?;

    let temp_path = destination.with_extension("orbiq-part");
    let mut temp_file = std::fs::File::create(&temp_path).map_err(|err| {
        format!(
            "failed to create temp file '{}': {}",
            temp_path.display(),
            err
        )
    })?;
    let bytes_written = std::io::copy(&mut response, &mut temp_file)
        .map_err(|err| format!("failed to write downloaded file: {}", err))?;
    temp_file
        .sync_all()
        .map_err(|err| format!("failed to flush downloaded file: {}", err))?;

    if destination.exists() {
        std::fs::remove_file(&destination).map_err(|err| {
            format!(
                "failed to replace existing file '{}': {}",
                destination.display(),
                err
            )
        })?;
    }
    std::fs::rename(&temp_path, &destination).map_err(|err| {
        format!(
            "failed to finalize install '{}': {}",
            destination.display(),
            err
        )
    })?;

    Ok(InstallBrowseItemResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        file_name,
        path: destination.display().to_string(),
        bytes_written,
        status: "installed".to_string(),
    })
}

#[tauri::command]
pub fn remove_instance_file(
    request: RemoveInstanceFileRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<RemoveInstanceFileResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }
    let file_name = sanitize_download_file_name(&request.file_name)
        .ok_or_else(|| "file name is required".to_string())?;
    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: request.target.clone(),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) =
        resolve_requested_instance_directory(&resolve_request, &state, &app)?;
    let path = directory.join(&file_name);
    if !path.exists() {
        return Ok(RemoveInstanceFileResponse {
            instance_name: resolved_instance_name,
            target: resolved_target,
            file_name,
            path: path.display().to_string(),
            status: "not_found".to_string(),
        });
    }
    if !path.is_file() {
        return Err(format!("path is not a file: {}", path.display()));
    }
    std::fs::remove_file(&path)
        .map_err(|err| format!("failed to remove file '{}': {}", path.display(), err))?;
    Ok(RemoveInstanceFileResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        file_name,
        path: path.display().to_string(),
        status: "removed".to_string(),
    })
}

#[tauri::command]
pub fn check_instance_files(
    request: CheckInstanceFilesRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<CheckInstanceFilesResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: request.target.clone(),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) =
        resolve_requested_instance_directory(&resolve_request, &state, &app)?;

    let mut files = Vec::new();
    for raw_name in request.file_names {
        let Some(file_name) = sanitize_download_file_name(&raw_name) else {
            continue;
        };
        let exists = directory.join(&file_name).is_file();
        files.push(CheckInstanceFileEntry { file_name, exists });
    }

    Ok(CheckInstanceFilesResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        files,
    })
}

#[tauri::command]
pub fn list_instance_files(
    request: ListInstanceFilesRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<ListInstanceFilesResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: request.target.clone(),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) =
        resolve_requested_instance_directory(&resolve_request, &state, &app)?;

    let mut files = Vec::new();
    let entries = std::fs::read_dir(&directory).map_err(|err| {
        format!(
            "failed to read directory '{}': {}",
            directory.display(),
            err
        )
    })?;
    for entry in entries {
        let item = match entry {
            Ok(value) => value,
            Err(_) => continue,
        };
        let path = item.path();
        if !path.is_file() {
            continue;
        }
        let Some(name_os) = path.file_name() else {
            continue;
        };
        let Some(name) = name_os.to_str() else {
            continue;
        };
        let cleaned = name.trim();
        if cleaned.is_empty() {
            continue;
        }
        files.push(cleaned.to_string());
    }
    files.sort_by(|a, b| a.to_ascii_lowercase().cmp(&b.to_ascii_lowercase()));
    files.dedup_by(|a, b| a.eq_ignore_ascii_case(b));

    Ok(ListInstanceFilesResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        files,
    })
}

#[tauri::command]
pub fn preflight_instance_launch(
    request: PreflightInstanceLaunchRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<PreflightInstanceLaunchResponse, String> {
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err(error_with_code(
            "LAUNCH_PREFLIGHT_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }

    let (instance, profile_exists) = {
        let runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("LAUNCH_PREFLIGHT_STATE_LOCK_FAILED", err))?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(target_name))
            .cloned()
            .ok_or_else(|| {
                error_with_code(
                    "LAUNCH_PREFLIGHT_INSTANCE_NOT_FOUND",
                    format!("instance '{}' not found", target_name),
                )
            })?;

        let profile_exists = resolve_launch_profile(
            &runtime,
            request.profile_id.as_deref(),
            request.profile_name.as_deref(),
        )
        .is_ok();

        (instance, profile_exists)
    };

    let mut issues = Vec::<PreflightIssue>::new();
    if !profile_exists {
        issues.push(blocking_issue(
            "PREFLIGHT_PROFILE_NOT_FOUND",
            "Selected profile is missing. Choose another profile before launch.",
            false,
            Some("Open profile selector and choose a valid account"),
        ));
    }

    let normalized_loader = normalize_loader_name(&instance.loader);
    let instance_version = instance.version.trim().to_string();
    let base_dir = resolve_instance_base_dir(&app, &instance).map_err(|err| {
        error_with_code(
            "LAUNCH_PREFLIGHT_INSTANCE_DIR_FAILED",
            format!(
                "failed to resolve instance directory for '{}': {}",
                instance.name, err
            ),
        )
    })?;

    if normalized_loader != "vanilla" && !instance_version.is_empty() {
        match fetch_loader_supported_versions(&normalized_loader, false, Some(600)) {
            Ok(versions) => {
                let supported = versions
                    .iter()
                    .any(|value| value.eq_ignore_ascii_case(instance_version.as_str()));
                if !supported {
                    issues.push(blocking_issue(
                        "PREFLIGHT_UNSUPPORTED_LOADER_VERSION",
                        format!(
                            "{} does not support Minecraft {}",
                            instance.loader, instance_version
                        ),
                        false,
                        Some("Change Minecraft version or loader"),
                    ));
                }
            }
            Err(err) => issues.push(warning_issue(
                "PREFLIGHT_SUPPORTED_VERSION_LOOKUP_FAILED",
                format!("Could not verify loader support matrix: {}", err),
                Some("Check your internet connection and retry"),
            )),
        }
    }

    if normalized_loader != "vanilla" && !instance_version.is_empty() {
        if let Some(selected_loader_version) = instance
            .loader_version
            .as_deref()
            .map(|value| value.trim())
            .filter(|value| !value.is_empty())
        {
            match fetch_loader_versions(&normalized_loader, &instance_version, Some(200)) {
                Ok(versions) => {
                    if !versions
                        .iter()
                        .any(|value| value.eq_ignore_ascii_case(selected_loader_version))
                    {
                        issues.push(blocking_issue(
                            "PREFLIGHT_LOADER_VERSION_MISMATCH",
                            format!(
                                "Loader version {} is not valid for Minecraft {} ({})",
                                selected_loader_version, instance_version, instance.loader
                            ),
                            false,
                            Some("Pick a valid loader version from the instance editor"),
                        ));
                    }
                }
                Err(err) => issues.push(warning_issue(
                    "PREFLIGHT_LOADER_VERSION_LOOKUP_FAILED",
                    format!("Could not validate selected loader version: {}", err),
                    Some("Retry after network is stable"),
                )),
            }
        }
    }

    let mods_dir = base_dir.join("mods");
    let shaderpacks_dir = base_dir.join("shaderpacks");
    let mod_files = list_regular_file_names(&mods_dir);
    let shaderpack_files = list_regular_file_names(&shaderpacks_dir);
    let shaderpack_archives = shaderpack_files
        .iter()
        .filter(|name| file_has_extension(name, "zip"))
        .cloned()
        .collect::<Vec<_>>();
    let invalid_mod_files = mod_files
        .iter()
        .filter(|name| !file_has_extension(name, "jar"))
        .cloned()
        .collect::<Vec<_>>();
    if !invalid_mod_files.is_empty() {
        issues.push(warning_issue(
            "PREFLIGHT_INVALID_MOD_FILE",
            format!(
                "Found {} non-jar file(s) in mods folder",
                invalid_mod_files.len()
            ),
            Some("Move non-mod files out of mods folder"),
        ));
    }
    let invalid_shaderpack_files = shaderpack_files
        .iter()
        .filter(|name| !file_has_extension(name, "zip"))
        .cloned()
        .collect::<Vec<_>>();
    if !invalid_shaderpack_files.is_empty() {
        issues.push(warning_issue(
            "PREFLIGHT_INVALID_SHADERPACK_FILE",
            format!(
                "Found {} non-zip file(s) in shaderpacks folder",
                invalid_shaderpack_files.len()
            ),
            Some("Keep only .zip shaderpacks in shaderpacks folder"),
        ));
    }

    let has_iris = has_name_token(&mod_files, "iris");
    let has_sodium = has_name_token(&mod_files, "sodium");
    let has_oculus = has_name_token(&mod_files, "oculus");
    let has_optifine = has_name_token(&mod_files, "optifine");

    if has_iris && !has_sodium {
        issues.push(blocking_issue(
            "PREFLIGHT_IRIS_NEEDS_SODIUM",
            "Iris requires Sodium (0.8.x) but Sodium is missing.",
            true,
            Some("Install Sodium compatible with your Minecraft version"),
        ));
    }
    if has_optifine && has_sodium {
        issues.push(blocking_issue(
            "PREFLIGHT_INCOMPATIBLE_MOD_PAIR",
            "OptiFine and Sodium are installed together and are usually incompatible.",
            false,
            Some("Remove OptiFine or remove Sodium"),
        ));
    }

    if !shaderpack_archives.is_empty() {
        match normalized_loader.as_str() {
            "fabric" | "quilt" if !has_iris => issues.push(blocking_issue(
                "PREFLIGHT_SHADER_RUNTIME_MISSING",
                "Shaderpacks detected, but Iris is missing for Fabric/Quilt.",
                true,
                Some("Install Iris before launching shaders"),
            )),
            "forge" | "neoforge" if !has_oculus => issues.push(blocking_issue(
                "PREFLIGHT_SHADER_RUNTIME_MISSING",
                "Shaderpacks detected, but Oculus is missing for Forge/NeoForge.",
                true,
                Some("Install Oculus (or equivalent shader runtime)"),
            )),
            "vanilla" => issues.push(warning_issue(
                "PREFLIGHT_SHADERPACK_WITH_VANILLA",
                "Shaderpacks are present, but Vanilla loader cannot use them directly.",
                Some("Switch to Fabric/Forge loader and install a shader runtime"),
            )),
            _ => {}
        }
    }

    let likely_mismatch_count = match normalized_loader.as_str() {
        "fabric" | "quilt" => mod_files
            .iter()
            .filter(|name| {
                let lower = name.to_ascii_lowercase();
                lower.contains("forge")
                    && !lower.contains("fabric")
                    && !lower.contains("quilt")
                    && file_has_extension(name, "jar")
            })
            .count(),
        "forge" | "neoforge" => mod_files
            .iter()
            .filter(|name| {
                let lower = name.to_ascii_lowercase();
                lower.contains("fabric") && file_has_extension(name, "jar")
            })
            .count(),
        _ => 0,
    };
    if likely_mismatch_count > 0 {
        issues.push(blocking_issue(
            "PREFLIGHT_LOADER_MISMATCH_MODS",
            format!(
                "Found {} mod file(s) that likely target another loader.",
                likely_mismatch_count
            ),
            false,
            Some("Remove mismatched mods or switch loader"),
        ));
    }

    let blocking_count = issues
        .iter()
        .filter(|issue| issue.severity.eq_ignore_ascii_case("blocking"))
        .count() as u32;
    let warning_count = issues
        .iter()
        .filter(|issue| issue.severity.eq_ignore_ascii_case("warning"))
        .count() as u32;

    Ok(PreflightInstanceLaunchResponse {
        instance_name: instance.name,
        loader: instance.loader,
        version: instance.version,
        blocking_count,
        warning_count,
        issues,
    })
}

#[tauri::command]
pub fn export_debug_bundle(
    request: DebugBundleRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<DebugBundleResult, String> {
    let now = unix_epoch_now();
    let include_logs = request.include_logs.unwrap_or(true);
    let selected_name = request
        .instance_name
        .as_deref()
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .map(|value| value.to_string());

    let (
        runtime_instances,
        runtime_profiles,
        runtime_deployments,
        runtime_processes,
        selected_instance,
    ) = {
        let runtime =
            runtime_lock(&state).map_err(|err| error_with_code("DIAG_STATE_LOCK_FAILED", err))?;
        let selected_instance = selected_name
            .as_deref()
            .and_then(|name| {
                runtime
                    .instances
                    .iter()
                    .find(|item| item.name.eq_ignore_ascii_case(name))
            })
            .cloned();

        if selected_name.is_some() && selected_instance.is_none() {
            return Err(error_with_code(
                "DIAG_INSTANCE_NOT_FOUND",
                format!(
                    "instance '{}' not found",
                    selected_name.as_deref().unwrap_or_default()
                ),
            ));
        }

        (
            runtime.instances.clone(),
            runtime.profiles.clone(),
            runtime.deployments.clone(),
            runtime.processes.keys().cloned().collect::<Vec<_>>(),
            selected_instance,
        )
    };

    let app_data_dir = app
        .path()
        .app_data_dir()
        .map_err(|err| error_with_code("DIAG_APP_DATA_DIR_FAILED", err.to_string()))?;
    let diagnostics_dir = app_data_dir.join("diagnostics");
    fs::create_dir_all(&diagnostics_dir).map_err(|err| {
        error_with_code(
            "DIAG_CREATE_DIR_FAILED",
            format!(
                "failed to create diagnostics directory '{}': {}",
                diagnostics_dir.display(),
                err
            ),
        )
    })?;

    let java_info = detect_java_runtime_info(17);
    let mut log_dirs = Vec::<PathBuf>::new();
    if include_logs {
        if let Ok(app_log_dir) = app.path().app_log_dir() {
            log_dirs.push(app_log_dir);
        }
        log_dirs.push(app_data_dir.join("logs"));
        if let Some(instance) = selected_instance.as_ref() {
            if let Ok(base_dir) = resolve_instance_base_dir(&app, instance) {
                log_dirs.push(base_dir.join("logs"));
            }
        }
    }

    let log_entries = if include_logs {
        collect_log_candidates(&log_dirs)
            .into_iter()
            .map(|path| {
                let lines = read_log_tail(&path, MAX_LOG_LINES_PER_FILE, MAX_LOG_BYTES_PER_FILE)
                    .unwrap_or_default();
                json!({
                    "path": path.display().to_string(),
                    "lineCount": lines.len(),
                    "tail": lines,
                })
            })
            .collect::<Vec<_>>()
    } else {
        Vec::new()
    };

    let payload = json!({
        "createdAt": now,
        "selectedInstance": selected_instance,
        "runtimeSnapshot": {
            "instanceCount": runtime_instances.len(),
            "profileCount": runtime_profiles.len(),
            "deploymentCount": runtime_deployments.len(),
            "processes": runtime_processes,
            "instances": runtime_instances,
            "profiles": runtime_profiles,
            "deployments": runtime_deployments,
        },
        "environment": {
            "os": std::env::consts::OS,
            "arch": std::env::consts::ARCH,
            "family": std::env::consts::FAMILY,
            "currentDir": std::env::current_dir().ok().map(|path| path.display().to_string()),
        },
        "java": java_info,
        "logs": log_entries,
    });

    let bundle_path = diagnostics_dir.join(format!("debug_bundle_{}.json", now));
    let encoded = serde_json::to_string_pretty(&payload)
        .map_err(|err| error_with_code("DIAG_SERIALIZE_FAILED", err.to_string()))?;
    fs::write(&bundle_path, encoded).map_err(|err| {
        error_with_code(
            "DIAG_WRITE_FAILED",
            format!(
                "failed to write debug bundle '{}': {}",
                bundle_path.display(),
                err
            ),
        )
    })?;
    let size = fs::metadata(&bundle_path)
        .map_err(|err| error_with_code("DIAG_METADATA_FAILED", err.to_string()))?
        .len();

    Ok(DebugBundleResult {
        path: bundle_path.display().to_string(),
        size,
        created_at: now,
    })
}

#[tauri::command]
pub fn launch_instance(
    request: LaunchInstanceRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<LaunchInstanceResponse, String> {
    let mut runtime =
        runtime_lock(&state).map_err(|err| error_with_code("LAUNCH_STATE_LOCK_FAILED", err))?;
    let transitions = refresh_processes(&mut runtime);
    if !transitions.is_empty() {
        apply_terminal_metadata(&mut runtime, &transitions);
        persist_runtime(&state, &runtime)
            .map_err(|err| error_with_code("LAUNCH_STATE_PERSIST_FAILED", err))?;
        emit_terminal_transitions(&app, &transitions);
    }

    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err(error_with_code(
            "LAUNCH_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }

    let index = runtime
        .instances
        .iter()
        .position(|item| item.name.eq_ignore_ascii_case(target_name))
        .ok_or_else(|| {
            error_with_code(
                "LAUNCH_INSTANCE_NOT_FOUND",
                format!("instance '{}' not found", target_name),
            )
        })?;

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
        .map_err(|err| error_with_code("LAUNCH_APP_DATA_DIR_FAILED", err.to_string()))?
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
        error_with_code("LAUNCH_PLAN_BUILD_FAILED", err)
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
        error_with_code("LAUNCH_SPAWN_FAILED", message)
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

    persist_runtime(&state, &runtime)
        .map_err(|err| error_with_code("LAUNCH_STATE_PERSIST_FAILED", err))?;
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
        return Err(error_with_code(
            "PROVISION_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }
    if requested_version.is_empty() {
        return Err(error_with_code(
            "PROVISION_VERSION_REQUIRED",
            "version is required",
        ));
    }

    let (instance_name, instance_loader, instance_loader_version, selected_profile) = {
        let runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("PROVISION_STATE_LOCK_FAILED", err))?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(requested_name))
            .ok_or_else(|| {
                error_with_code(
                    "PROVISION_INSTANCE_NOT_FOUND",
                    format!("instance '{}' not found", requested_name),
                )
            })?;
        let selected_profile = map_error_code(
            "PROVISION_PROFILE_RESOLVE_FAILED",
            resolve_launch_profile(
                &runtime,
                request.profile_id.as_deref(),
                request.profile_name.as_deref(),
            ),
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
        .map_err(|err| error_with_code("PROVISION_APP_DATA_DIR_FAILED", err.to_string()))?
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
        let auth_context_for_task = map_error_code(
            "AUTH_RESOLVE_LAUNCH_IDENTITY_FAILED",
            build_launch_auth_context(&selected_profile_for_task),
        )?;
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
    .map_err(|err| error_with_code("PROVISION_TASK_JOIN_FAILED", err.to_string()))?;

    let outcome = match outcome {
        Ok(value) => value,
        Err(err) => {
            emit_provision_event(&app, &instance_name, "failed", "failed", &err, None, None);
            return Err(error_with_code("PROVISION_RUNTIME_FAILED", err));
        }
    };

    {
        let mut runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("PROVISION_STATE_LOCK_FAILED", err))?;
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
        persist_runtime(&state, &runtime)
            .map_err(|err| error_with_code("PROVISION_STATE_PERSIST_FAILED", err))?;
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

#[cfg(test)]
mod tests {
    use super::{
        classify_launch_identity_error, error_with_code, file_has_extension, has_name_token,
    };

    #[test]
    fn error_with_code_wraps_plain_messages() {
        let value = error_with_code("LAUNCH_FAILED", "failed to spawn process");
        assert_eq!(value, "[LAUNCH_FAILED] failed to spawn process");
    }

    #[test]
    fn error_with_code_does_not_double_wrap() {
        let value = error_with_code("LAUNCH_FAILED", "[AUTH_FAILED] token expired");
        assert_eq!(value, "[AUTH_FAILED] token expired");
    }

    #[test]
    fn name_token_match_is_case_insensitive() {
        let files = vec![
            "Iris-fabric-1.0.jar".to_string(),
            "SODIUM-0.8.2.jar".to_string(),
        ];
        assert!(has_name_token(&files, "iris"));
        assert!(has_name_token(&files, "sodium"));
        assert!(!has_name_token(&files, "optifine"));
    }

    #[test]
    fn extension_check_is_case_insensitive() {
        assert!(file_has_extension("mod.JAR", "jar"));
        assert!(file_has_extension("shader.zip", "ZIP"));
        assert!(!file_has_extension("readme.txt", "jar"));
    }

    #[test]
    fn classify_launch_identity_error_maps_relink() {
        let mapped = classify_launch_identity_error("token not found for profile");
        assert!(mapped.contains("[AUTH_RELINK_REQUIRED]"));
    }

    #[test]
    fn classify_launch_identity_error_maps_entitlement() {
        let mapped = classify_launch_identity_error(
            "minecraft profile not found; this Microsoft account likely does not own Minecraft: Java Edition",
        );
        assert!(mapped.contains("[AUTH_ENTITLEMENT_MISSING]"));
    }

    #[test]
    fn classify_launch_identity_error_maps_app_registration() {
        let mapped = classify_launch_identity_error(
            "Minecraft Services rejected this Azure App ID (403 Invalid app registration). https://aka.ms/mce-reviewappid",
        );
        assert!(mapped.contains("[AUTH_APP_REGISTRATION_INVALID]"));
    }
}
