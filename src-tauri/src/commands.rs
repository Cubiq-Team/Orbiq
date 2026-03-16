use std::collections::{BTreeSet, HashMap};
use std::fs;
use std::io::{BufRead, BufReader, Cursor, Read, Write};
use std::net::UdpSocket;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, UNIX_EPOCH};

use base64::{engine::general_purpose::STANDARD as BASE64_STANDARD, Engine as _};
use flate2::read::GzDecoder;
use fastnbt::from_reader;
use rand::Rng;
use serde::{de::DeserializeOwned, Deserialize, Serialize};
use serde_json::{json, Value};
use sysinfo::{Disks, System};
use tauri::{AppHandle, Emitter, Manager, State};

use crate::auth::{
    clear_microsoft_token, complete_microsoft_oauth_login, poll_device_code_login_once,
    load_microsoft_token, refresh_microsoft_token, resolve_minecraft_launch_identity,
    resolve_minecraft_launch_identity_from_ms_token, start_device_code_login,
    start_microsoft_oauth_login, store_microsoft_token, DeviceCodePollOutcome, MicrosoftIdentity,
    MicrosoftTokenRecord,
};
use crate::domain::{
    AnalyzePcResponse,
    CheckInstanceFileEntry, CheckInstanceFilesRequest, CheckInstanceFilesResponse,
    CompleteMicrosoftOAuthLoginRequest, CompleteMicrosoftOAuthLoginResponse, CreateInstanceRequest,
    CreateOfflineProfileRequest, DebugBundleRequest, DebugBundleResult, DeleteInstanceRequest,
    DeleteInstanceResponse, DeploymentControlRequest, DeployServerRequest, DeployServerResponse, DuplicateInstanceRequest,
    GetMinecraftSkinStatusRequest, GetMinecraftSkinStatusResponse,
    GetInstanceInfoRequest, GetInstanceWorldDetailsRequest, GetWorldPlayerInventoryRequest,
    InstallBrowseItemRequest, InstallBrowseItemResponse,
    InstanceDirectoryEntry, InstanceInfoResponse, InstanceLifecycleEvent, InstanceRecord,
    InstanceWorldDetailsResponse, InstanceWorldSummary, JavaRuntimeInfoResponse,
    KillInstanceRequest, KillInstanceResponse, LaunchInstanceRequest, LaunchInstanceResponse,
    ListInstanceDirectoryEntriesRequest, ListInstanceDirectoryEntriesResponse,
    ListInstanceFilesRequest, ListInstanceFilesResponse, ListInstanceWorldsRequest,
    ListInstanceWorldsResponse, ListWorldPlayersRequest, ListWorldPlayersResponse,
    LogoutMicrosoftProfileRequest, LogoutMicrosoftProfileResponse, MicrosoftDeviceCodeStartRequest,
    MicrosoftDeviceCodeStartResponse, MicrosoftOAuthStartRequest, MicrosoftOAuthStartResponse,
    OpenDeploymentDirectoryRequest, OpenDeploymentDirectoryResponse, OpenExternalUrlRequest,
    OpenExternalUrlResponse, OpenInstanceDirectoryRequest,
    OpenInstanceDirectoryResponse, PollMicrosoftDeviceCodeRequest, PollMicrosoftDeviceCodeResponse,
    PreflightInstanceLaunchRequest, PreflightInstanceLaunchResponse, PreflightIssue, ProfileRecord,
    ProvisionInstanceRequest, ProvisionInstanceResponse, ProvisionProgressEvent,
    RefreshMicrosoftTokenRequest, RefreshMicrosoftTokenResponse, RemoveInstanceFileRequest,
    RemoveInstanceFileResponse, RemoveProfileRequest, RemoveProfileResponse, RenameInstanceRequest,
    ResolveJoinCodeRequest, ResolveJoinCodeResponse, ServerRecommendation, SetDeploymentPlayersRequest,
    RollbackMinecraftSkinRequest, RollbackMinecraftSkinResponse,
    ResolveItemTextureRequest, ResolveItemTextureResponse,
    SendOrbiqWelcomeEmailRequest, SendOrbiqWelcomeEmailResponse, SetActiveProfileRequest,
    SetInstanceFileEnabledRequest, SetInstanceFileEnabledResponse,
    StartOrbiqEmailVerificationRequest, StartOrbiqEmailVerificationResponse,
    UpdateLaunchConfigRequest, UpdateMinecraftSkinRequest, UpdateMinecraftSkinResponse,
    MinecraftSkinHistoryEntry,
    VerifyOrbiqEmailCodeRequest, VerifyOrbiqEmailCodeResponse,
    WorldInventoryItem, WorldPlayerInventoryResponse, WorldPlayerSummary,
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
const MINECRAFT_PROFILE_ENDPOINT: &str = "https://api.minecraftservices.com/minecraft/profile";
const MINECRAFT_PROFILE_SKINS_ENDPOINT: &str = "https://api.minecraftservices.com/minecraft/profile/skins";
const SKIN_MAX_IMAGE_BYTES: usize = 2 * 1024 * 1024;
const SKIN_HISTORY_LIMIT: usize = 10;

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

fn parse_http_error_body(status: reqwest::StatusCode, body: &str) -> String {
    let trimmed = body.trim();
    if trimmed.is_empty() {
        return format!("http {} with empty response body", status.as_u16());
    }
    format!("http {}: {}", status.as_u16(), trimmed)
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

fn metadata_modified_at_epoch(metadata: &std::fs::Metadata) -> Option<u64> {
    metadata
        .modified()
        .ok()
        .and_then(|value| value.duration_since(UNIX_EPOCH).ok())
        .map(|value| value.as_secs())
}

#[derive(Debug, Deserialize, Default)]
#[serde(default)]
struct LevelDatRootNbt {
    #[serde(rename = "Data")]
    data: LevelDatDataNbt,
}

#[derive(Debug, Deserialize, Default)]
#[serde(default)]
struct LevelDatDataNbt {
    #[serde(rename = "LevelName")]
    level_name: Option<String>,
    #[serde(rename = "LastPlayed")]
    last_played_ms: Option<i64>,
    #[serde(rename = "GameType")]
    game_type: Option<i32>,
    #[serde(rename = "Difficulty")]
    difficulty: Option<i8>,
    #[serde(rename = "RandomSeed")]
    random_seed: Option<i64>,
    #[serde(rename = "Time")]
    time_ticks: Option<i64>,
    #[serde(rename = "WorldGenSettings")]
    world_gen_settings: Option<LevelDatWorldGenSettingsNbt>,
}

#[derive(Debug, Deserialize, Default)]
#[serde(default)]
struct LevelDatWorldGenSettingsNbt {
    seed: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Default)]
struct ParsedWorldMetadata {
    level_name: Option<String>,
    last_played_epoch: Option<u64>,
    game_mode: Option<String>,
    difficulty: Option<String>,
    seed: Option<String>,
    playtime_minutes: Option<u64>,
}

#[derive(Debug, Deserialize, Default)]
#[serde(default)]
struct PlayerDataRootNbt {
    #[serde(rename = "Inventory")]
    inventory: Vec<PlayerDataItemNbt>,
    #[serde(rename = "EnderItems")]
    ender_items: Vec<PlayerDataItemNbt>,
    #[serde(rename = "Pos")]
    pos: Vec<f64>,
    #[serde(rename = "Health")]
    health: Option<f32>,
    #[serde(rename = "foodLevel")]
    food_level: Option<i32>,
    #[serde(rename = "XpLevel")]
    xp_level: Option<i32>,
}

#[derive(Debug, Deserialize, Default)]
#[serde(default)]
struct PlayerDataItemNbt {
    #[serde(rename = "Slot")]
    slot: Option<i8>,
    id: Option<String>,
    #[serde(rename = "Count")]
    count: Option<i8>,
}

#[derive(Debug, Clone, Default)]
struct ParsedPlayerInventory {
    health: Option<f32>,
    food_level: Option<i32>,
    xp_level: Option<i32>,
    position: Option<Vec<f64>>,
    hotbar: Vec<WorldInventoryItem>,
    inventory: Vec<WorldInventoryItem>,
    armor: Vec<WorldInventoryItem>,
    offhand: Vec<WorldInventoryItem>,
    ender_chest: Vec<WorldInventoryItem>,
}

fn parse_nbt_file<T: DeserializeOwned>(path: &Path, label: &str) -> Result<T, String> {
    let raw_bytes = fs::read(path)
        .map_err(|err| format!("failed to read {} '{}': {}", label, path.display(), err))?;

    let mut decoded = Vec::new();
    let mut gzip_reader = GzDecoder::new(raw_bytes.as_slice());
    let parse_bytes = match gzip_reader.read_to_end(&mut decoded) {
        Ok(_) if !decoded.is_empty() => decoded.as_slice(),
        _ => raw_bytes.as_slice(),
    };

    let mut cursor = Cursor::new(parse_bytes);
    from_reader(&mut cursor).map_err(|err| format!("failed to parse {} nbt: {}", label, err))
}

fn map_game_mode(value: Option<i32>) -> Option<String> {
    match value {
        Some(0) => Some("Survival".to_string()),
        Some(1) => Some("Creative".to_string()),
        Some(2) => Some("Adventure".to_string()),
        Some(3) => Some("Spectator".to_string()),
        Some(other) => Some(format!("Unknown ({})", other)),
        None => None,
    }
}

fn map_difficulty(value: Option<i8>) -> Option<String> {
    match value {
        Some(0) => Some("Peaceful".to_string()),
        Some(1) => Some("Easy".to_string()),
        Some(2) => Some("Normal".to_string()),
        Some(3) => Some("Hard".to_string()),
        Some(other) => Some(format!("Unknown ({})", other)),
        None => None,
    }
}

fn seed_value_to_string(value: &serde_json::Value) -> Option<String> {
    match value {
        serde_json::Value::Number(num) => Some(num.to_string()),
        serde_json::Value::String(text) => {
            let cleaned = text.trim();
            if cleaned.is_empty() {
                None
            } else {
                Some(cleaned.to_string())
            }
        }
        _ => None,
    }
}

fn parse_world_level_dat(level_dat_path: &Path) -> Result<ParsedWorldMetadata, String> {
    let parsed: LevelDatRootNbt = parse_nbt_file(level_dat_path, "level.dat")?;
    let data = parsed.data;

    let last_played_epoch = data
        .last_played_ms
        .and_then(|value| if value > 0 { Some(value as u64 / 1000) } else { None });
    let playtime_minutes = data
        .time_ticks
        .and_then(|value| if value >= 0 { Some(value as u64 / 20 / 60) } else { None });
    let seed = data
        .world_gen_settings
        .as_ref()
        .and_then(|value| value.seed.as_ref())
        .and_then(seed_value_to_string)
        .or_else(|| data.random_seed.map(|value| value.to_string()));

    Ok(ParsedWorldMetadata {
        level_name: data.level_name.map(|value| value.trim().to_string()).filter(|value| !value.is_empty()),
        last_played_epoch,
        game_mode: map_game_mode(data.game_type),
        difficulty: map_difficulty(data.difficulty),
        seed,
        playtime_minutes,
    })
}

fn item_display_name(item_id: &str) -> String {
    let normalized = item_id
        .trim()
        .split(':')
        .next_back()
        .unwrap_or(item_id)
        .trim();
    if normalized.is_empty() {
        return "Unknown Item".to_string();
    }
    normalized
        .split('_')
        .filter(|part| !part.trim().is_empty())
        .map(|part| {
            let mut chars = part.chars();
            match chars.next() {
                Some(first) => first.to_ascii_uppercase().to_string() + chars.as_str(),
                None => String::new(),
            }
        })
        .collect::<Vec<_>>()
        .join(" ")
}

fn parse_player_item(entry: &PlayerDataItemNbt) -> Option<WorldInventoryItem> {
    let item_id = entry.id.as_ref().map(|value| value.trim()).filter(|value| !value.is_empty())?;
    let count_raw = entry.count.unwrap_or(1);
    let count = if count_raw <= 0 { 1 } else { count_raw as u32 };
    let slot = i32::from(entry.slot.unwrap_or(-1));
    Some(WorldInventoryItem {
        slot,
        item_id: item_id.to_string(),
        display_name: item_display_name(item_id),
        count,
    })
}

fn parse_player_inventory(player_dat_path: &Path) -> Result<ParsedPlayerInventory, String> {
    let parsed: PlayerDataRootNbt = parse_nbt_file(player_dat_path, "playerdata")?;
    let mut out = ParsedPlayerInventory {
        health: parsed.health,
        food_level: parsed.food_level,
        xp_level: parsed.xp_level,
        position: if parsed.pos.len() >= 3 {
            Some(vec![parsed.pos[0], parsed.pos[1], parsed.pos[2]])
        } else {
            None
        },
        ..Default::default()
    };

    for raw in &parsed.inventory {
        let Some(item) = parse_player_item(raw) else {
            continue;
        };
        match item.slot {
            0..=8 => out.hotbar.push(item),
            9..=35 => out.inventory.push(item),
            100..=103 => out.armor.push(item),
            40 | -106 => out.offhand.push(item),
            _ => out.inventory.push(item),
        }
    }

    for raw in &parsed.ender_items {
        let Some(item) = parse_player_item(raw) else {
            continue;
        };
        out.ender_chest.push(item);
    }

    out.hotbar.sort_by(|left, right| left.slot.cmp(&right.slot));
    out.inventory.sort_by(|left, right| left.slot.cmp(&right.slot));
    out.armor.sort_by(|left, right| right.slot.cmp(&left.slot));
    out.offhand.sort_by(|left, right| left.slot.cmp(&right.slot));
    out.ender_chest.sort_by(|left, right| left.slot.cmp(&right.slot));
    Ok(out)
}

fn directory_size_bytes(path: &Path) -> u64 {
    let mut total = 0u64;
    let mut stack = vec![path.to_path_buf()];
    while let Some(current) = stack.pop() {
        let entries = match fs::read_dir(&current) {
            Ok(value) => value,
            Err(_) => continue,
        };
        for entry in entries {
            let item = match entry {
                Ok(value) => value,
                Err(_) => continue,
            };
            let metadata = match item.metadata() {
                Ok(value) => value,
                Err(_) => continue,
            };
            if metadata.is_file() {
                total = total.saturating_add(metadata.len());
            } else if metadata.is_dir() {
                stack.push(item.path());
            }
        }
    }
    total
}

fn resolve_instance_world_directory(
    state: &State<AppState>,
    app: &AppHandle,
    instance_name: &str,
    world_name: &str,
) -> Result<(InstanceRecord, bool, PathBuf), String> {
    let (instance, running) = {
        let runtime = runtime_lock(state)?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(instance_name))
            .cloned()
            .ok_or_else(|| format!("instance '{}' not found", instance_name))?;
        let running = instance.running || runtime.processes.contains_key(&instance.name);
        (instance, running)
    };

    let base_dir = resolve_instance_base_dir(app, &instance)?;
    let worlds_root = base_dir.join("saves");
    fs::create_dir_all(&worlds_root).map_err(|err| {
        format!(
            "failed to prepare worlds directory '{}': {}",
            worlds_root.display(),
            err
        )
    })?;

    let target_world = world_name.trim();
    if target_world.is_empty() {
        return Err("world name is required".to_string());
    }
    let world_path = fs::read_dir(&worlds_root)
        .map_err(|err| {
            format!(
                "failed to read worlds directory '{}': {}",
                worlds_root.display(),
                err
            )
        })?
        .filter_map(|entry| entry.ok())
        .find_map(|entry| {
            let path = entry.path();
            let metadata = entry.metadata().ok()?;
            if !metadata.is_dir() {
                return None;
            }
            let name = path.file_name()?.to_str()?.trim().to_string();
            if name.is_empty() {
                return None;
            }
            if name.eq_ignore_ascii_case(target_world) {
                Some(path)
            } else {
                None
            }
        })
        .ok_or_else(|| {
            format!(
                "world '{}' was not found in '{}'",
                target_world,
                worlds_root.display()
            )
        })?;
    Ok((instance, running, world_path))
}

fn normalize_minecraft_texture_key(item_id: &str) -> Option<String> {
    let raw = item_id.trim().to_ascii_lowercase();
    if raw.is_empty() {
        return None;
    }

    let (namespace, path) = match raw.split_once(':') {
        Some((ns, key)) => (ns.trim(), key.trim()),
        None => ("minecraft", raw.as_str()),
    };
    if namespace != "minecraft" || path.is_empty() {
        return None;
    }

    let cleaned = path
        .chars()
        .filter(|ch| ch.is_ascii_lowercase() || ch.is_ascii_digit() || matches!(*ch, '_' | '-' | '/' | '.'))
        .collect::<String>();
    if cleaned.is_empty() {
        return None;
    }

    let invalid_segment = cleaned
        .split('/')
        .any(|segment| segment.is_empty() || segment == "." || segment == "..");
    if invalid_segment {
        return None;
    }

    Some(cleaned)
}

fn item_texture_cache_path(app: &AppHandle, texture_key: &str) -> Result<PathBuf, String> {
    let app_data_dir = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?;
    let mut cache_path = app_data_dir.join("cache").join("item-textures");
    for segment in texture_key.split('/') {
        cache_path = cache_path.join(segment);
    }
    cache_path.set_extension("png");
    Ok(cache_path)
}

fn item_texture_source_urls(texture_key: &str) -> Vec<String> {
    vec![
        format!(
            "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21.11/assets/minecraft/textures/item/{}.png",
            texture_key
        ),
        format!(
            "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21.11/assets/minecraft/textures/block/{}.png",
            texture_key
        ),
        format!(
            "https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.4/items/{}.png",
            texture_key
        ),
        format!(
            "https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.4/blocks/{}.png",
            texture_key
        ),
    ]
}

fn image_bytes_to_data_uri(bytes: &[u8]) -> Option<String> {
    if bytes.is_empty() {
        return None;
    }
    let encoded = BASE64_STANDARD.encode(bytes);
    Some(format!("data:image/png;base64,{}", encoded))
}

fn download_item_texture_bytes(urls: &[String]) -> Option<(Vec<u8>, String)> {
    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(15))
        .build()
        .ok()?;

    for url in urls {
        let response = match client.get(url).send() {
            Ok(value) => value,
            Err(_) => continue,
        };
        if !response.status().is_success() {
            continue;
        }
        let content_type = response
            .headers()
            .get(reqwest::header::CONTENT_TYPE)
            .and_then(|value| value.to_str().ok())
            .map(|value| value.to_ascii_lowercase())
            .unwrap_or_default();
        if !content_type.is_empty() && !content_type.starts_with("image/") {
            continue;
        }
        let bytes = match response.bytes() {
            Ok(value) => value.to_vec(),
            Err(_) => continue,
        };
        if bytes.len() < 8 || bytes.len() > (2 * 1024 * 1024) {
            continue;
        }
        return Some((bytes, url.clone()));
    }
    None
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

fn is_account_security_interrupt_error(message: &str) -> bool {
    let lower = message.to_ascii_lowercase();
    lower.contains("aadsts70000")
        || lower.contains("account security interrupt")
        || (lower.contains("collecting proof") && lower.contains("compromised"))
}

fn classify_launch_identity_error(message: impl AsRef<str>) -> String {
    let raw = message.as_ref().trim();
    let lower = raw.to_ascii_lowercase();
    if is_account_security_interrupt_error(raw) {
        return error_with_code(
            "AUTH_ACCOUNT_SECURITY_INTERRUPT",
            "Microsoft requires account security verification. Open https://account.live.com/Activity, complete verification, then link Microsoft again.",
        );
    }
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

fn is_relink_required_error(message: &str) -> bool {
    if is_account_security_interrupt_error(message) {
        return false;
    }
    let lower = message.to_ascii_lowercase();
    lower.contains("[auth_relink_required]")
        || lower.contains("auth_relink_required")
        || lower.contains("token not found for profile")
        || lower.contains("refresh token is missing")
        || lower.contains("microsoft token is missing")
        || lower.contains("please sign in again")
        || lower.contains("invalid_grant")
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

fn format_heap_flag_mb(prefix: &str, mb: u32) -> String {
    if mb % 1024 == 0 {
        format!("{}{}G", prefix, mb / 1024)
    } else {
        format!("{}{}M", prefix, mb)
    }
}

fn merge_heap_overrides_into_launch_args(
    args: &[String],
    min_mb: Option<u32>,
    max_mb: Option<u32>,
) -> Vec<String> {
    if min_mb.is_none() && max_mb.is_none() {
        return args.to_vec();
    }

    let min_override = min_mb.map(|value| format_heap_flag_mb("-Xms", value));
    let max_override = max_mb.map(|value| format_heap_flag_mb("-Xmx", value));
    let mut merged = Vec::with_capacity(args.len().saturating_add(2));
    let mut min_applied = false;
    let mut max_applied = false;

    for arg in args {
        if arg.starts_with("-Xms") {
            if let Some(flag) = min_override.as_ref() {
                merged.push(flag.clone());
                min_applied = true;
            } else {
                merged.push(arg.clone());
            }
            continue;
        }

        if arg.starts_with("-Xmx") {
            if let Some(flag) = max_override.as_ref() {
                merged.push(flag.clone());
                max_applied = true;
            } else {
                merged.push(arg.clone());
            }
            continue;
        }

        merged.push(arg.clone());
    }

    let mut prefix = Vec::new();
    if let Some(flag) = min_override {
        if !min_applied {
            prefix.push(flag);
        }
    }
    if let Some(flag) = max_override {
        if !max_applied {
            prefix.push(flag);
        }
    }
    if prefix.is_empty() {
        merged
    } else {
        prefix.extend(merged);
        prefix
    }
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

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum SkinVariantPreference {
    Auto,
    Classic,
    Slim,
}

fn normalize_skin_variant_preference(value: Option<&str>) -> Result<SkinVariantPreference, String> {
    let raw = value.unwrap_or("auto").trim().to_ascii_lowercase();
    if raw.is_empty() || raw == "auto" {
        return Ok(SkinVariantPreference::Auto);
    }
    if raw == "classic" || raw == "steve" {
        return Ok(SkinVariantPreference::Classic);
    }
    if raw == "slim" || raw == "alex" {
        return Ok(SkinVariantPreference::Slim);
    }
    Err("variant must be auto, classic, or slim".to_string())
}

fn normalize_skin_variant_label(value: &str) -> String {
    let raw = value.trim().to_ascii_lowercase();
    if raw == "slim" || raw == "alex" {
        "slim".to_string()
    } else {
        "classic".to_string()
    }
}

fn decode_skin_image_base64(value: &str) -> Result<Vec<u8>, String> {
    let raw = value.trim();
    if raw.is_empty() {
        return Err("skin image is required".to_string());
    }

    let payload = if let Some((_, suffix)) = raw.split_once(",") {
        suffix.trim()
    } else {
        raw
    };
    if payload.is_empty() {
        return Err("skin image payload is empty".to_string());
    }

    let bytes = BASE64_STANDARD
        .decode(payload.as_bytes())
        .map_err(|err| format!("invalid base64 image payload: {}", err))?;
    if bytes.len() < 8 {
        return Err("skin image is too small".to_string());
    }
    if bytes.len() > SKIN_MAX_IMAGE_BYTES {
        return Err("skin image is too large (max 2MB)".to_string());
    }

    const PNG_MAGIC: [u8; 8] = [0x89, b'P', b'N', b'G', 0x0D, 0x0A, 0x1A, 0x0A];
    if bytes[0..8] != PNG_MAGIC {
        return Err("skin image must be a PNG file".to_string());
    }

    Ok(bytes)
}

#[derive(Debug, Clone)]
struct DecodedSkinImage {
    width: u32,
    height: u32,
    rgba: Vec<u8>,
}

fn decode_png_rgba(bytes: &[u8]) -> Result<DecodedSkinImage, String> {
    let cursor = Cursor::new(bytes);
    let mut decoder = png::Decoder::new(cursor);
    decoder.set_transformations(png::Transformations::EXPAND | png::Transformations::STRIP_16);
    let mut reader = decoder
        .read_info()
        .map_err(|err| format!("invalid png header: {}", err))?;
    let mut out = vec![0u8; reader.output_buffer_size()];
    let info = reader
        .next_frame(&mut out)
        .map_err(|err| format!("invalid png data: {}", err))?;
    let source = &out[..info.buffer_size()];
    let pixel_count = (info.width as usize).saturating_mul(info.height as usize);
    if pixel_count == 0 {
        return Err("png image has no pixels".to_string());
    }

    let mut rgba = Vec::with_capacity(pixel_count * 4);
    match info.color_type {
        png::ColorType::Rgba => {
            rgba.extend_from_slice(source);
        }
        png::ColorType::Rgb => {
            for chunk in source.chunks_exact(3) {
                rgba.push(chunk[0]);
                rgba.push(chunk[1]);
                rgba.push(chunk[2]);
                rgba.push(255);
            }
        }
        png::ColorType::GrayscaleAlpha => {
            for chunk in source.chunks_exact(2) {
                rgba.push(chunk[0]);
                rgba.push(chunk[0]);
                rgba.push(chunk[0]);
                rgba.push(chunk[1]);
            }
        }
        png::ColorType::Grayscale => {
            for value in source {
                rgba.push(*value);
                rgba.push(*value);
                rgba.push(*value);
                rgba.push(255);
            }
        }
        png::ColorType::Indexed => {
            return Err("indexed png color mode is not supported for skins".to_string());
        }
    }

    if rgba.len() != pixel_count * 4 {
        return Err("decoded png pixel buffer is invalid".to_string());
    }
    Ok(DecodedSkinImage {
        width: info.width,
        height: info.height,
        rgba,
    })
}

fn validate_skin_dimensions(decoded: &DecodedSkinImage) -> Result<(), String> {
    if decoded.width != 64 {
        return Err("skin width must be 64px".to_string());
    }
    if decoded.height != 64 && decoded.height != 32 {
        return Err("skin height must be 64px or 32px".to_string());
    }
    Ok(())
}

fn read_alpha(decoded: &DecodedSkinImage, x: u32, y: u32) -> u8 {
    if x >= decoded.width || y >= decoded.height {
        return 0;
    }
    let pixel_index = (y as usize)
        .saturating_mul(decoded.width as usize)
        .saturating_add(x as usize);
    let offset = pixel_index.saturating_mul(4).saturating_add(3);
    decoded.rgba.get(offset).copied().unwrap_or(0)
}

fn detect_auto_skin_variant(decoded: &DecodedSkinImage) -> String {
    if decoded.height <= 32 {
        return "classic".to_string();
    }
    let markers = [
        (54, 20),
        (55, 20),
        (54, 31),
        (55, 31),
        (46, 52),
        (47, 52),
        (46, 63),
        (47, 63),
    ];
    let transparent = markers
        .iter()
        .filter(|(x, y)| read_alpha(decoded, *x, *y) == 0)
        .count();
    if transparent >= 6 {
        "slim".to_string()
    } else {
        "classic".to_string()
    }
}

fn resolve_upload_skin_variant(
    preference: SkinVariantPreference,
    decoded: &DecodedSkinImage,
) -> Result<String, String> {
    let auto = detect_auto_skin_variant(decoded);
    let result = match preference {
        SkinVariantPreference::Auto => auto,
        SkinVariantPreference::Classic => "classic".to_string(),
        SkinVariantPreference::Slim => "slim".to_string(),
    };
    if decoded.height == 32 && result == "slim" {
        return Err("64x32 skins cannot use slim variant".to_string());
    }
    Ok(result)
}

#[derive(Debug, Default, Deserialize)]
#[serde(default)]
struct MinecraftProfileSkinApiResponse {
    name: String,
    skins: Vec<MinecraftSkinApiEntry>,
    capes: Vec<MinecraftCapeApiEntry>,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default)]
struct MinecraftSkinApiEntry {
    state: String,
    url: String,
    variant: String,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(default)]
struct MinecraftCapeApiEntry {
    state: String,
    url: String,
}

#[derive(Debug, Default, Serialize, Deserialize)]
#[serde(default)]
struct SkinHistoryStore {
    profiles: HashMap<String, Vec<MinecraftSkinHistoryEntry>>,
}

fn sanitize_skin_history_profile_key(profile_id: &str) -> String {
    let mut out = String::new();
    for ch in profile_id.trim().chars() {
        if ch.is_ascii_alphanumeric() || ch == '-' || ch == '_' {
            out.push(ch.to_ascii_lowercase());
        } else {
            out.push('_');
        }
    }
    let cleaned = out.trim_matches('_');
    if cleaned.is_empty() {
        "default".to_string()
    } else {
        cleaned.to_string()
    }
}

fn skin_history_file_path(app: &AppHandle) -> Result<PathBuf, String> {
    let app_data_dir = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?;
    Ok(app_data_dir.join("skin").join("history.json"))
}

fn read_skin_history_store(app: &AppHandle) -> Result<SkinHistoryStore, String> {
    let path = skin_history_file_path(app)?;
    if !path.exists() {
        return Ok(SkinHistoryStore::default());
    }
    let raw = fs::read_to_string(&path)
        .map_err(|err| format!("failed to read skin history '{}': {}", path.display(), err))?;
    if raw.trim().is_empty() {
        return Ok(SkinHistoryStore::default());
    }
    serde_json::from_str::<SkinHistoryStore>(&raw)
        .map_err(|err| format!("failed to parse skin history '{}': {}", path.display(), err))
}

fn write_skin_history_store(app: &AppHandle, store: &SkinHistoryStore) -> Result<(), String> {
    let path = skin_history_file_path(app)?;
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)
            .map_err(|err| format!("failed to create skin history directory: {}", err))?;
    }
    let content = serde_json::to_string_pretty(store)
        .map_err(|err| format!("failed to serialize skin history: {}", err))?;
    let temp = path.with_extension("tmp");
    fs::write(&temp, content).map_err(|err| {
        format!(
            "failed to write skin history temp file '{}': {}",
            temp.display(),
            err
        )
    })?;
    if path.exists() {
        fs::remove_file(&path)
            .map_err(|err| format!("failed to replace skin history '{}': {}", path.display(), err))?;
    }
    fs::rename(&temp, &path)
        .map_err(|err| format!("failed to finalize skin history '{}': {}", path.display(), err))
}

fn get_skin_history_entries(
    app: &AppHandle,
    profile_id: &str,
) -> Result<Vec<MinecraftSkinHistoryEntry>, String> {
    let store = read_skin_history_store(app)?;
    let key = sanitize_skin_history_profile_key(profile_id);
    Ok(store.profiles.get(&key).cloned().unwrap_or_default())
}

fn push_skin_history_entry(
    app: &AppHandle,
    profile_id: &str,
    mut entry: MinecraftSkinHistoryEntry,
) -> Result<(), String> {
    let mut store = read_skin_history_store(app)?;
    let key = sanitize_skin_history_profile_key(profile_id);
    let rows = store.profiles.entry(key).or_default();
    entry.url = entry.url.trim().to_string();
    entry.variant = normalize_skin_variant_label(&entry.variant);
    if entry.url.is_empty() || !is_https_url(&entry.url) {
        return Ok(());
    }

    let is_duplicate = rows.iter().any(|existing| {
        existing.url.eq_ignore_ascii_case(&entry.url)
            && normalize_skin_variant_label(&existing.variant) == entry.variant
    });
    if is_duplicate {
        return Ok(());
    }
    rows.insert(0, entry);
    if rows.len() > SKIN_HISTORY_LIMIT {
        rows.truncate(SKIN_HISTORY_LIMIT);
    }
    write_skin_history_store(app, &store)
}

fn is_https_url(value: &str) -> bool {
    let trimmed = value.trim();
    if trimmed.is_empty() || trimmed.len() > 2048 {
        return false;
    }
    if !trimmed.starts_with("https://") {
        return false;
    }
    reqwest::Url::parse(trimmed).is_ok()
}

fn select_active_skin_entry(rows: &[MinecraftSkinApiEntry]) -> Option<MinecraftSkinApiEntry> {
    rows.iter()
        .find(|row| row.state.eq_ignore_ascii_case("active") && !row.url.trim().is_empty())
        .cloned()
        .or_else(|| rows.iter().find(|row| !row.url.trim().is_empty()).cloned())
}

fn select_active_cape_entry(rows: &[MinecraftCapeApiEntry]) -> Option<MinecraftCapeApiEntry> {
    rows.iter()
        .find(|row| row.state.eq_ignore_ascii_case("active") && !row.url.trim().is_empty())
        .cloned()
        .or_else(|| rows.iter().find(|row| !row.url.trim().is_empty()).cloned())
}

fn fetch_minecraft_profile_skin_snapshot(
    minecraft_access_token: &str,
) -> Result<(String, Option<String>, Option<String>, Option<String>), String> {
    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(20))
        .build()
        .map_err(|err| format!("failed to build HTTP client: {}", err))?;
    let response = client
        .get(MINECRAFT_PROFILE_ENDPOINT)
        .bearer_auth(minecraft_access_token)
        .send()
        .map_err(|err| format!("failed to fetch minecraft profile: {}", err))?;
    if !response.status().is_success() {
        let status = response.status();
        let body = response.text().unwrap_or_default();
        let reason = parse_http_error_body(status, &body);
        return Err(format!("minecraft profile request failed: {}", reason));
    }
    let parsed = response
        .json::<MinecraftProfileSkinApiResponse>()
        .map_err(|err| format!("failed to parse minecraft profile response: {}", err))?;
    let player_name = if parsed.name.trim().is_empty() {
        "Player".to_string()
    } else {
        parsed.name.trim().to_string()
    };
    let active = select_active_skin_entry(&parsed.skins);
    let skin_url = active.as_ref().map(|row| row.url.trim().to_string());
    let variant = active
        .as_ref()
        .map(|row| normalize_skin_variant_label(&row.variant));
    let active_cape = select_active_cape_entry(&parsed.capes);
    let cape_url = active_cape.as_ref().map(|row| row.url.trim().to_string());
    Ok((player_name, skin_url, variant, cape_url))
}

fn ensure_microsoft_profile_exists(profile_id: &str, state: &State<AppState>) -> Result<(), String> {
    let runtime = runtime_lock(state).map_err(|err| error_with_code("AUTH_STATE_LOCK_FAILED", err))?;
    let profile = runtime
        .profiles
        .iter()
        .find(|item| item.id.eq_ignore_ascii_case(profile_id))
        .ok_or_else(|| {
            error_with_code(
                "AUTH_PROFILE_NOT_FOUND",
                format!("profile '{}' not found", profile_id),
            )
        })?;
    if profile.profile_type != "microsoft" {
        return Err(error_with_code(
            "SKIN_PROFILE_TYPE_INVALID",
            "skin update requires a Microsoft profile",
        ));
    }
    Ok(())
}

fn touch_profile_auth_runtime(
    profile_id: &str,
    state: &State<AppState>,
    expires_at_epoch: Option<u64>,
) -> Result<(), String> {
    let mut runtime = runtime_lock(state).map_err(|err| error_with_code("AUTH_STATE_LOCK_FAILED", err))?;
    if let Some(profile) = runtime
        .profiles
        .iter_mut()
        .find(|item| item.id.eq_ignore_ascii_case(profile_id))
    {
        profile.last_authenticated_at_epoch = Some(unix_epoch_now());
        profile.access_token_expires_at_epoch = expires_at_epoch;
        persist_runtime(state, &runtime)?;
    }
    Ok(())
}

fn resolve_minecraft_identity_for_skin(
    profile_id: &str,
    state: &State<AppState>,
) -> Result<crate::auth::MinecraftLaunchIdentity, String> {
    ensure_microsoft_profile_exists(profile_id, state)?;
    let mut token = load_microsoft_token(profile_id)
        .map_err(|err| error_with_code("AUTH_TOKEN_READ_FAILED", err))?
        .ok_or_else(|| {
            error_with_code(
                "AUTH_RELINK_REQUIRED",
                "Microsoft token is missing. Link Microsoft again.",
            )
        })?;

    if token.expires_at_epoch.unwrap_or(0) <= unix_epoch_now().saturating_add(60) {
        token = match refresh_microsoft_token(profile_id) {
            Ok(value) => value,
            Err(err) => {
                if is_account_security_interrupt_error(&err) {
                    return Err(error_with_code(
                        "AUTH_ACCOUNT_SECURITY_INTERRUPT",
                        "Microsoft requires account security verification. Open https://account.live.com/Activity, complete verification, then link Microsoft again.",
                    ));
                }
                if err.to_ascii_lowercase().contains("invalid_grant") {
                    return Err(error_with_code(
                        "AUTH_RELINK_REQUIRED",
                        "Microsoft session expired or was revoked. Link Microsoft again.",
                    ));
                }
                return Err(error_with_code("AUTH_REFRESH_FAILED", err));
            }
        };
    }

    let launch_identity = resolve_minecraft_launch_identity_from_ms_token(
        &token.access_token,
        Some(token.client_id.as_str()),
    )
    .map_err(classify_launch_identity_error)?;
    touch_profile_auth_runtime(profile_id, state, token.expires_at_epoch)?;
    Ok(launch_identity)
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

fn build_launch_auth_context_with_fallback(
    selected_profile: &ProfileRecord,
    all_profiles: &[ProfileRecord],
) -> Result<(LaunchAuthContext, Option<String>), String> {
    let primary_result = build_launch_auth_context(selected_profile);
    if !selected_profile.profile_type.eq_ignore_ascii_case("microsoft") {
        return primary_result.map(|ctx| (ctx, None));
    }

    match primary_result {
        Ok(ctx) => Ok((ctx, None)),
        Err(primary_err) => {
            if !is_relink_required_error(&primary_err) {
                return Err(primary_err);
            }

            let mut fallback_non_relink_error: Option<String> = None;
            for candidate in all_profiles {
                if !candidate.profile_type.eq_ignore_ascii_case("microsoft") {
                    continue;
                }
                if candidate.id.eq_ignore_ascii_case(&selected_profile.id) {
                    continue;
                }
                match build_launch_auth_context(candidate) {
                    Ok(ctx) => return Ok((ctx, Some(candidate.id.clone()))),
                    Err(err) => {
                        if !is_relink_required_error(&err) && fallback_non_relink_error.is_none()
                        {
                            fallback_non_relink_error = Some(err);
                        }
                    }
                }
            }

            Err(fallback_non_relink_error.unwrap_or(primary_err))
        }
    }
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

    let refreshed = match refresh_microsoft_token(profile_id) {
        Ok(value) => value,
        Err(err) => {
            if is_account_security_interrupt_error(&err) {
                return Err(error_with_code(
                    "AUTH_ACCOUNT_SECURITY_INTERRUPT",
                    "Microsoft blocked sign-in for security verification. Open https://account.live.com/Activity, verify your account, then link Microsoft again.",
                ));
            }
            if err.to_ascii_lowercase().contains("invalid_grant") {
                return Err(error_with_code(
                    "AUTH_RELINK_REQUIRED",
                    "Microsoft session expired or was revoked. Link Microsoft again.",
                ));
            }
            return Err(error_with_code("AUTH_REFRESH_FAILED", err));
        }
    };

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
pub fn update_minecraft_skin(
    request: UpdateMinecraftSkinRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<UpdateMinecraftSkinResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err(error_with_code(
            "SKIN_PROFILE_REQUIRED",
            "profile id is required",
        ));
    }
    let variant_preference = normalize_skin_variant_preference(request.variant.as_deref())
        .map_err(|err| error_with_code("SKIN_VARIANT_INVALID", err))?;
    let image_bytes = decode_skin_image_base64(&request.image_base64)
        .map_err(|err| error_with_code("SKIN_IMAGE_INVALID", err))?;
    let decoded = decode_png_rgba(&image_bytes)
        .map_err(|err| error_with_code("SKIN_IMAGE_INVALID", err))?;
    validate_skin_dimensions(&decoded).map_err(|err| error_with_code("SKIN_IMAGE_INVALID", err))?;
    let variant = resolve_upload_skin_variant(variant_preference, &decoded)
        .map_err(|err| error_with_code("SKIN_VARIANT_INVALID", err))?;

    let launch_identity = resolve_minecraft_identity_for_skin(profile_id, &state)?;
    if let Ok((_, current_url, current_variant, _current_cape_url)) =
        fetch_minecraft_profile_skin_snapshot(&launch_identity.access_token)
    {
        if let Some(url) = current_url {
            let _ = push_skin_history_entry(
                &app,
                profile_id,
                MinecraftSkinHistoryEntry {
                    url,
                    variant: current_variant.unwrap_or_else(|| "classic".to_string()),
                    captured_at_epoch: unix_epoch_now(),
                },
            );
        }
    }

    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(35))
        .build()
        .map_err(|err| error_with_code("SKIN_HTTP_CLIENT_FAILED", err.to_string()))?;
    let file_part = reqwest::blocking::multipart::Part::bytes(image_bytes)
        .file_name("skin.png")
        .mime_str("image/png")
        .map_err(|err| error_with_code("SKIN_IMAGE_INVALID", err.to_string()))?;
    let form = reqwest::blocking::multipart::Form::new()
        .text("variant", variant.clone())
        .part("file", file_part);

    let response = client
        .post(MINECRAFT_PROFILE_SKINS_ENDPOINT)
        .bearer_auth(launch_identity.access_token)
        .multipart(form)
        .send()
        .map_err(|err| error_with_code("SKIN_UPLOAD_FAILED", format!("request failed: {}", err)))?;
    if !response.status().is_success() {
        let status = response.status().as_u16();
        let body = response.text().unwrap_or_default();
        let reason = if body.trim().is_empty() {
            format!("minecraft skin update failed with status {}", status)
        } else {
            format!("minecraft skin update failed ({}): {}", status, body.trim())
        };
        return Err(error_with_code("SKIN_UPLOAD_FAILED", reason));
    }

    Ok(UpdateMinecraftSkinResponse {
        profile_id: profile_id.to_string(),
        variant,
        status: "updated".to_string(),
    })
}

#[tauri::command]
pub fn get_minecraft_skin_status(
    request: GetMinecraftSkinStatusRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<GetMinecraftSkinStatusResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err(error_with_code(
            "SKIN_PROFILE_REQUIRED",
            "profile id is required",
        ));
    }
    let launch_identity = resolve_minecraft_identity_for_skin(profile_id, &state)?;
    let (player_name, skin_url, variant, cape_url) =
        fetch_minecraft_profile_skin_snapshot(&launch_identity.access_token)
        .map_err(|err| error_with_code("SKIN_PROFILE_FETCH_FAILED", err))?;
    let history = get_skin_history_entries(&app, profile_id)
        .map_err(|err| error_with_code("SKIN_HISTORY_READ_FAILED", err))?;

    Ok(GetMinecraftSkinStatusResponse {
        profile_id: profile_id.to_string(),
        player_name,
        skin_url,
        cape_url,
        variant,
        history,
        status: "ok".to_string(),
    })
}

#[tauri::command]
pub fn rollback_minecraft_skin(
    request: RollbackMinecraftSkinRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<RollbackMinecraftSkinResponse, String> {
    let profile_id = request.profile_id.trim();
    if profile_id.is_empty() {
        return Err(error_with_code(
            "SKIN_PROFILE_REQUIRED",
            "profile id is required",
        ));
    }
    let history = get_skin_history_entries(&app, profile_id)
        .map_err(|err| error_with_code("SKIN_HISTORY_READ_FAILED", err))?;
    if history.is_empty() {
        return Err(error_with_code(
            "SKIN_HISTORY_EMPTY",
            "no skin history available for rollback",
        ));
    }
    let index = request.history_index.unwrap_or(0);
    let selected = history
        .get(index)
        .cloned()
        .ok_or_else(|| error_with_code("SKIN_HISTORY_INVALID_INDEX", "history index is out of range"))?;
    if !is_https_url(&selected.url) {
        return Err(error_with_code(
            "SKIN_HISTORY_INVALID_URL",
            "history entry url is invalid",
        ));
    }
    let selected_variant = normalize_skin_variant_label(&selected.variant);
    let selected_url = selected.url.clone();

    let launch_identity = resolve_minecraft_identity_for_skin(profile_id, &state)?;
    let (player_name, current_url, current_variant, _current_cape_url) =
        fetch_minecraft_profile_skin_snapshot(&launch_identity.access_token)
        .map_err(|err| error_with_code("SKIN_PROFILE_FETCH_FAILED", err))?;
    if let Some(url) = current_url {
        let _ = push_skin_history_entry(
            &app,
            profile_id,
            MinecraftSkinHistoryEntry {
                url,
                variant: current_variant.unwrap_or_else(|| "classic".to_string()),
                captured_at_epoch: unix_epoch_now(),
            },
        );
    }

    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(35))
        .build()
        .map_err(|err| error_with_code("SKIN_HTTP_CLIENT_FAILED", err.to_string()))?;
    let response = client
        .post(MINECRAFT_PROFILE_SKINS_ENDPOINT)
        .bearer_auth(launch_identity.access_token)
        .json(&json!({
            "variant": selected_variant,
            "url": selected_url,
        }))
        .send()
        .map_err(|err| error_with_code("SKIN_ROLLBACK_FAILED", format!("request failed: {}", err)))?;
    if !response.status().is_success() {
        let status = response.status().as_u16();
        let body = response.text().unwrap_or_default();
        let reason = if body.trim().is_empty() {
            format!("minecraft skin rollback failed with status {}", status)
        } else {
            format!("minecraft skin rollback failed ({}): {}", status, body.trim())
        };
        return Err(error_with_code("SKIN_ROLLBACK_FAILED", reason));
    }

    Ok(RollbackMinecraftSkinResponse {
        profile_id: profile_id.to_string(),
        player_name,
        skin_url: selected_url,
        variant: selected_variant,
        status: "rolled_back".to_string(),
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
pub fn set_instance_file_enabled(
    request: SetInstanceFileEnabledRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<SetInstanceFileEnabledResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }
    let mut file_name = sanitize_download_file_name(&request.file_name)
        .ok_or_else(|| "file name is required".to_string())?;
    if file_name.to_ascii_lowercase().ends_with(".disabled") {
        let base = file_name[..file_name.len() - ".disabled".len()].trim();
        if base.is_empty() {
            return Err("file name is invalid".to_string());
        }
        file_name = base.to_string();
    }

    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: request.target.clone(),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) =
        resolve_requested_instance_directory(&resolve_request, &state, &app)?;

    let enabled_path = directory.join(&file_name);
    let disabled_file_name = format!("{}.disabled", file_name);
    let disabled_path = directory.join(&disabled_file_name);

    let (status, effective_enabled, effective_path) = if request.enabled {
        if enabled_path.exists() {
            ("already_enabled".to_string(), true, enabled_path.clone())
        } else if disabled_path.exists() {
            if !disabled_path.is_file() {
                return Err(format!("path is not a file: {}", disabled_path.display()));
            }
            std::fs::rename(&disabled_path, &enabled_path).map_err(|err| {
                format!(
                    "failed to enable file '{}': {}",
                    enabled_path.display(),
                    err
                )
            })?;
            ("enabled".to_string(), true, enabled_path.clone())
        } else {
            ("not_found".to_string(), true, enabled_path.clone())
        }
    } else if disabled_path.exists() {
        ("already_disabled".to_string(), false, disabled_path.clone())
    } else if enabled_path.exists() {
        if !enabled_path.is_file() {
            return Err(format!("path is not a file: {}", enabled_path.display()));
        }
        std::fs::rename(&enabled_path, &disabled_path).map_err(|err| {
            format!(
                "failed to disable file '{}': {}",
                enabled_path.display(),
                err
            )
        })?;
        ("disabled".to_string(), false, disabled_path.clone())
    } else {
        ("not_found".to_string(), false, disabled_path.clone())
    };

    Ok(SetInstanceFileEnabledResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        file_name,
        path: effective_path.display().to_string(),
        status,
        enabled: effective_enabled,
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
pub fn list_instance_directory_entries(
    request: ListInstanceDirectoryEntriesRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<ListInstanceDirectoryEntriesResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err("instance name is required".to_string());
    }

    let include_files = request.include_files.unwrap_or(true);
    let include_directories = request.include_directories.unwrap_or(true);
    if !include_files && !include_directories {
        return Ok(ListInstanceDirectoryEntriesResponse {
            instance_name: instance_name.to_string(),
            target: request
                .target
                .clone()
                .unwrap_or_else(|| "root".to_string()),
            path: String::new(),
            entries: Vec::new(),
        });
    }

    let resolve_request = OpenInstanceDirectoryRequest {
        instance_name: instance_name.to_string(),
        target: request.target.clone(),
        ensure_exists: Some(true),
    };
    let (resolved_instance_name, resolved_target, directory) =
        resolve_requested_instance_directory(&resolve_request, &state, &app)?;

    let mut entries = Vec::<InstanceDirectoryEntry>::new();
    let dir_entries = std::fs::read_dir(&directory).map_err(|err| {
        format!(
            "failed to read directory '{}': {}",
            directory.display(),
            err
        )
    })?;
    for entry in dir_entries {
        let item = match entry {
            Ok(value) => value,
            Err(_) => continue,
        };
        let path = item.path();
        let file_type = match item.file_type() {
            Ok(value) => value,
            Err(_) => continue,
        };
        let is_directory = file_type.is_dir();
        let is_file = file_type.is_file();
        if (is_directory && !include_directories) || (is_file && !include_files) {
            continue;
        }
        if !is_directory && !is_file {
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

        let metadata = match item.metadata() {
            Ok(value) => Some(value),
            Err(_) => None,
        };
        let size_bytes = metadata
            .as_ref()
            .map(|value| if is_file { value.len() } else { 0 })
            .unwrap_or(0);
        let modified_at_epoch = metadata
            .as_ref()
            .and_then(metadata_modified_at_epoch);

        entries.push(InstanceDirectoryEntry {
            name: cleaned.to_string(),
            is_directory,
            size_bytes,
            modified_at_epoch,
        });
    }

    entries.sort_by(|left, right| {
        match (left.is_directory, right.is_directory) {
            (true, false) => std::cmp::Ordering::Less,
            (false, true) => std::cmp::Ordering::Greater,
            _ => left
                .name
                .to_ascii_lowercase()
                .cmp(&right.name.to_ascii_lowercase()),
        }
    });
    entries.dedup_by(|left, right| {
        left.is_directory == right.is_directory && left.name.eq_ignore_ascii_case(&right.name)
    });

    Ok(ListInstanceDirectoryEntriesResponse {
        instance_name: resolved_instance_name,
        target: resolved_target,
        path: directory.display().to_string(),
        entries,
    })
}

#[tauri::command]
pub fn list_instance_worlds(
    request: ListInstanceWorldsRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<ListInstanceWorldsResponse, String> {
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }

    let (instance, running) = {
        let runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("WORLD_VIEWER_STATE_LOCK_FAILED", err))?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(target_name))
            .cloned()
            .ok_or_else(|| {
                error_with_code(
                    "WORLD_VIEWER_INSTANCE_NOT_FOUND",
                    format!("instance '{}' not found", target_name),
                )
            })?;
        let running = instance.running || runtime.processes.contains_key(&instance.name);
        (instance, running)
    };

    let base_dir = resolve_instance_base_dir(&app, &instance)
        .map_err(|err| error_with_code("WORLD_VIEWER_RESOLVE_BASE_DIR_FAILED", err))?;
    let worlds_root = base_dir.join("saves");
    fs::create_dir_all(&worlds_root).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_PREPARE_DIR_FAILED",
            format!(
                "failed to prepare worlds directory '{}': {}",
                worlds_root.display(),
                err
            ),
        )
    })?;

    if running {
        return Ok(ListInstanceWorldsResponse {
            instance_name: instance.name,
            worlds_root: worlds_root.display().to_string(),
            running: true,
            worlds: Vec::new(),
        });
    }

    let mut worlds = Vec::<InstanceWorldSummary>::new();
    let entries = fs::read_dir(&worlds_root).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_READ_DIR_FAILED",
            format!(
                "failed to read worlds directory '{}': {}",
                worlds_root.display(),
                err
            ),
        )
    })?;
    for entry in entries {
        let item = match entry {
            Ok(value) => value,
            Err(_) => continue,
        };
        let metadata = match item.metadata() {
            Ok(value) => value,
            Err(_) => continue,
        };
        if !metadata.is_dir() {
            continue;
        }
        let path = item.path();
        let Some(name_os) = path.file_name() else {
            continue;
        };
        let Some(name) = name_os.to_str() else {
            continue;
        };
        let world_name = name.trim();
        if world_name.is_empty() {
            continue;
        }
        let parsed = parse_world_level_dat(&path.join("level.dat")).ok();
        worlds.push(InstanceWorldSummary {
            world_name: world_name.to_string(),
            display_name: parsed.as_ref().and_then(|value| value.level_name.clone()),
            path: path.display().to_string(),
            size_bytes: directory_size_bytes(&path),
            last_played_epoch: parsed.as_ref().and_then(|value| value.last_played_epoch),
            game_mode: parsed.as_ref().and_then(|value| value.game_mode.clone()),
            difficulty: parsed.as_ref().and_then(|value| value.difficulty.clone()),
            seed: parsed.as_ref().and_then(|value| value.seed.clone()),
            playtime_minutes: parsed.as_ref().and_then(|value| value.playtime_minutes),
        });
    }

    worlds.sort_by(|left, right| {
        let left_last = left.last_played_epoch.unwrap_or(0);
        let right_last = right.last_played_epoch.unwrap_or(0);
        if left_last != right_last {
            return right_last.cmp(&left_last);
        }
        left.world_name
            .to_ascii_lowercase()
            .cmp(&right.world_name.to_ascii_lowercase())
    });
    worlds.dedup_by(|left, right| left.world_name.eq_ignore_ascii_case(&right.world_name));

    Ok(ListInstanceWorldsResponse {
        instance_name: instance.name,
        worlds_root: worlds_root.display().to_string(),
        running: false,
        worlds,
    })
}

#[tauri::command]
pub fn resolve_item_texture(
    request: ResolveItemTextureRequest,
    app: AppHandle,
) -> Result<ResolveItemTextureResponse, String> {
    let item_id = request.item_id.trim();
    if item_id.is_empty() {
        return Err(error_with_code(
            "ITEM_TEXTURE_ID_REQUIRED",
            "item id is required",
        ));
    }

    let Some(texture_key) = normalize_minecraft_texture_key(item_id) else {
        return Ok(ResolveItemTextureResponse {
            item_id: item_id.to_string(),
            data_uri: None,
            from_cache: false,
            source_url: None,
        });
    };

    let cache_path = item_texture_cache_path(&app, &texture_key).map_err(|err| {
        error_with_code("ITEM_TEXTURE_CACHE_PATH_FAILED", err)
    })?;

    if cache_path.is_file() {
        let bytes = fs::read(&cache_path).map_err(|err| {
            error_with_code(
                "ITEM_TEXTURE_CACHE_READ_FAILED",
                format!(
                    "failed to read cached texture '{}': {}",
                    cache_path.display(),
                    err
                ),
            )
        })?;
        return Ok(ResolveItemTextureResponse {
            item_id: item_id.to_string(),
            data_uri: image_bytes_to_data_uri(&bytes),
            from_cache: true,
            source_url: None,
        });
    }

    let urls = item_texture_source_urls(&texture_key);
    let Some((bytes, source_url)) = download_item_texture_bytes(&urls) else {
        return Ok(ResolveItemTextureResponse {
            item_id: item_id.to_string(),
            data_uri: None,
            from_cache: false,
            source_url: None,
        });
    };

    if let Some(parent) = cache_path.parent() {
        fs::create_dir_all(parent).map_err(|err| {
            error_with_code(
                "ITEM_TEXTURE_CACHE_PREPARE_FAILED",
                format!(
                    "failed to create texture cache directory '{}': {}",
                    parent.display(),
                    err
                ),
            )
        })?;
    }

    let temp_path = cache_path.with_extension("orbiq-part");
    fs::write(&temp_path, &bytes).map_err(|err| {
        error_with_code(
            "ITEM_TEXTURE_CACHE_WRITE_FAILED",
            format!("failed to write texture cache '{}': {}", temp_path.display(), err),
        )
    })?;
    if cache_path.exists() {
        let _ = fs::remove_file(&cache_path);
    }
    fs::rename(&temp_path, &cache_path).map_err(|err| {
        error_with_code(
            "ITEM_TEXTURE_CACHE_FINALIZE_FAILED",
            format!(
                "failed to finalize texture cache '{}': {}",
                cache_path.display(),
                err
            ),
        )
    })?;

    Ok(ResolveItemTextureResponse {
        item_id: item_id.to_string(),
        data_uri: image_bytes_to_data_uri(&bytes),
        from_cache: false,
        source_url: Some(source_url),
    })
}

#[tauri::command]
pub fn get_instance_world_details(
    request: GetInstanceWorldDetailsRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<InstanceWorldDetailsResponse, String> {
    let target_name = request.instance_name.trim();
    if target_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }
    let requested_world_name = request.world_name.trim();
    if requested_world_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_WORLD_REQUIRED",
            "world name is required",
        ));
    }

    let (instance, running) = {
        let runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("WORLD_VIEWER_STATE_LOCK_FAILED", err))?;
        let instance = runtime
            .instances
            .iter()
            .find(|item| item.name.eq_ignore_ascii_case(target_name))
            .cloned()
            .ok_or_else(|| {
                error_with_code(
                    "WORLD_VIEWER_INSTANCE_NOT_FOUND",
                    format!("instance '{}' not found", target_name),
                )
            })?;
        let running = instance.running || runtime.processes.contains_key(&instance.name);
        (instance, running)
    };

    if running {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_RUNNING",
            "Minecraft is running. Close the game before opening world details.",
        ));
    }

    let base_dir = resolve_instance_base_dir(&app, &instance)
        .map_err(|err| error_with_code("WORLD_VIEWER_RESOLVE_BASE_DIR_FAILED", err))?;
    let worlds_root = base_dir.join("saves");
    fs::create_dir_all(&worlds_root).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_PREPARE_DIR_FAILED",
            format!(
                "failed to prepare worlds directory '{}': {}",
                worlds_root.display(),
                err
            ),
        )
    })?;

    let world_dir = fs::read_dir(&worlds_root)
        .map_err(|err| {
            error_with_code(
                "WORLD_VIEWER_READ_DIR_FAILED",
                format!(
                    "failed to read worlds directory '{}': {}",
                    worlds_root.display(),
                    err
                ),
            )
        })?
        .filter_map(|entry| entry.ok())
        .find_map(|entry| {
            let path = entry.path();
            let metadata = entry.metadata().ok()?;
            if !metadata.is_dir() {
                return None;
            }
            let name = path.file_name()?.to_str()?.trim().to_string();
            if name.is_empty() {
                return None;
            }
            if name.eq_ignore_ascii_case(requested_world_name) {
                Some((name, path))
            } else {
                None
            }
        })
        .ok_or_else(|| {
            error_with_code(
                "WORLD_VIEWER_WORLD_NOT_FOUND",
                format!(
                    "world '{}' was not found in '{}'",
                    requested_world_name,
                    worlds_root.display()
                ),
            )
        })?;

    let (resolved_world_name, world_path) = world_dir;
    let parsed = parse_world_level_dat(&world_path.join("level.dat")).unwrap_or_default();

    Ok(InstanceWorldDetailsResponse {
        instance_name: instance.name,
        world_name: resolved_world_name.clone(),
        path: world_path.display().to_string(),
        running: false,
        level_name: parsed.level_name,
        size_bytes: directory_size_bytes(&world_path),
        last_played_epoch: parsed.last_played_epoch,
        game_mode: parsed.game_mode,
        difficulty: parsed.difficulty,
        seed: parsed.seed,
        playtime_minutes: parsed.playtime_minutes,
    })
}

#[tauri::command]
pub fn list_world_players(
    request: ListWorldPlayersRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<ListWorldPlayersResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }
    let world_name = request.world_name.trim();
    if world_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_WORLD_REQUIRED",
            "world name is required",
        ));
    }

    let (instance, running, world_path) = resolve_instance_world_directory(
        &state,
        &app,
        instance_name,
        world_name,
    )
    .map_err(|err| error_with_code("WORLD_VIEWER_WORLD_NOT_FOUND", err))?;

    if running {
        return Ok(ListWorldPlayersResponse {
            instance_name: instance.name,
            world_name: world_name.to_string(),
            running: true,
            players: Vec::new(),
        });
    }

    let playerdata_dir = world_path.join("playerdata");
    fs::create_dir_all(&playerdata_dir).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_PLAYERDATA_PREPARE_FAILED",
            format!(
                "failed to prepare playerdata directory '{}': {}",
                playerdata_dir.display(),
                err
            ),
        )
    })?;

    let mut players = Vec::<WorldPlayerSummary>::new();
    let entries = fs::read_dir(&playerdata_dir).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_PLAYERDATA_READ_FAILED",
            format!(
                "failed to read playerdata directory '{}': {}",
                playerdata_dir.display(),
                err
            ),
        )
    })?;
    for entry in entries {
        let item = match entry {
            Ok(value) => value,
            Err(_) => continue,
        };
        let path = item.path();
        let metadata = match item.metadata() {
            Ok(value) => value,
            Err(_) => continue,
        };
        if !metadata.is_file() {
            continue;
        }
        let Some(ext) = path.extension().and_then(|value| value.to_str()) else {
            continue;
        };
        if !ext.eq_ignore_ascii_case("dat") {
            continue;
        }
        let Some(stem) = path.file_stem().and_then(|value| value.to_str()) else {
            continue;
        };
        let player_uuid = stem.trim();
        if player_uuid.is_empty() {
            continue;
        }
        players.push(WorldPlayerSummary {
            player_uuid: player_uuid.to_string(),
            path: path.display().to_string(),
            modified_at_epoch: metadata_modified_at_epoch(&metadata),
        });
    }

    players.sort_by(|left, right| {
        let left_mod = left.modified_at_epoch.unwrap_or(0);
        let right_mod = right.modified_at_epoch.unwrap_or(0);
        if left_mod != right_mod {
            return right_mod.cmp(&left_mod);
        }
        left.player_uuid
            .to_ascii_lowercase()
            .cmp(&right.player_uuid.to_ascii_lowercase())
    });
    players.dedup_by(|left, right| left.player_uuid.eq_ignore_ascii_case(&right.player_uuid));

    Ok(ListWorldPlayersResponse {
        instance_name: instance.name,
        world_name: world_name.to_string(),
        running: false,
        players,
    })
}

#[tauri::command]
pub fn get_world_player_inventory(
    request: GetWorldPlayerInventoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<WorldPlayerInventoryResponse, String> {
    let instance_name = request.instance_name.trim();
    if instance_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_REQUIRED",
            "instance name is required",
        ));
    }
    let world_name = request.world_name.trim();
    if world_name.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_WORLD_REQUIRED",
            "world name is required",
        ));
    }
    let player_uuid = request.player_uuid.trim();
    if player_uuid.is_empty() {
        return Err(error_with_code(
            "WORLD_VIEWER_PLAYER_REQUIRED",
            "player uuid is required",
        ));
    }

    let (instance, running, world_path) = resolve_instance_world_directory(
        &state,
        &app,
        instance_name,
        world_name,
    )
    .map_err(|err| error_with_code("WORLD_VIEWER_WORLD_NOT_FOUND", err))?;

    if running {
        return Err(error_with_code(
            "WORLD_VIEWER_INSTANCE_RUNNING",
            "Minecraft is running. Close the game before reading player inventory.",
        ));
    }

    let player_dat_path = world_path
        .join("playerdata")
        .join(format!("{}.dat", player_uuid));
    if !player_dat_path.exists() {
        return Err(error_with_code(
            "WORLD_VIEWER_PLAYER_NOT_FOUND",
            format!(
                "player '{}' was not found in '{}'",
                player_uuid,
                player_dat_path.parent().map(|value| value.display().to_string()).unwrap_or_default()
            ),
        ));
    }

    let parsed = parse_player_inventory(&player_dat_path).map_err(|err| {
        error_with_code(
            "WORLD_VIEWER_PLAYERDATA_PARSE_FAILED",
            format!("failed to parse '{}': {}", player_dat_path.display(), err),
        )
    })?;

    Ok(WorldPlayerInventoryResponse {
        instance_name: instance.name,
        world_name: world_name.to_string(),
        player_uuid: player_uuid.to_string(),
        running: false,
        health: parsed.health,
        food_level: parsed.food_level,
        xp_level: parsed.xp_level,
        position: parsed.position,
        hotbar: parsed.hotbar,
        inventory: parsed.inventory,
        armor: parsed.armor,
        offhand: parsed.offhand,
        ender_chest: parsed.ender_chest,
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
        .insert(instance_name.clone(), ProcessHandle { child, stdin: None });

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
fn normalize_server_type(value: &str) -> String {
    let normalized = value.trim().to_ascii_lowercase();
    match normalized.as_str() {
        "paper" | "fabric" | "forge" | "vanilla" => normalized,
        "neoforge" => "forge".to_string(),
        _ => "vanilla".to_string(),
    }
}

fn normalize_server_runtime_mode(value: Option<&str>) -> String {
    let normalized = value
        .unwrap_or("stop_on_close")
        .trim()
        .to_ascii_lowercase();
    if normalized == "background" || normalized == "run_in_background" {
        "background".to_string()
    } else {
        "stop_on_close".to_string()
    }
}

fn sanitize_server_dir_name(name: &str) -> String {
    let mut output = String::with_capacity(name.len());
    for ch in name.trim().chars() {
        if ch.is_ascii_alphanumeric() || ch == '-' || ch == '_' {
            output.push(ch);
        } else if ch.is_whitespace() {
            output.push('_');
        }
    }
    let trimmed = output.trim_matches('_').to_string();
    if trimmed.is_empty() {
        "server".to_string()
    } else {
        trimmed.chars().take(64).collect()
    }
}

fn resolve_deployment_base_dir(app: &AppHandle, deployment: &DeploymentRecord) -> Result<PathBuf, String> {
    let app_data_dir = app
        .path()
        .app_data_dir()
        .map_err(|err| format!("failed to resolve app data dir: {}", err))?;
    let safe_name = sanitize_server_dir_name(&deployment.name);
    Ok(app_data_dir
        .join("servers")
        .join(format!("{}-{}", safe_name, deployment.id)))
}

fn detect_lan_ip() -> Option<String> {
    let socket = UdpSocket::bind("0.0.0.0:0").ok()?;
    if socket.connect("8.8.8.8:80").is_err() {
        return None;
    }
    let ip = socket.local_addr().ok()?.ip();
    if ip.is_loopback() {
        None
    } else {
        Some(ip.to_string())
    }
}

fn next_available_server_port(runtime: &RuntimeState) -> u16 {
    let mut candidate: u16 = 25565;
    loop {
        if !runtime.deployments.iter().any(|item| item.port == candidate) {
            return candidate;
        }
        if candidate == u16::MAX {
            return 25565;
        }
        candidate = candidate.saturating_add(1);
    }
}

fn generate_join_code() -> String {
    const CHARSET: &[u8] = b"ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let mut rng = rand::thread_rng();
    let mut code = String::with_capacity(6);
    for _ in 0..6 {
        let idx = rng.gen_range(0..CHARSET.len());
        code.push(CHARSET[idx] as char);
    }
    code
}

fn generate_unique_join_code(runtime: &RuntimeState, ignore_id: Option<&str>) -> String {
    for _ in 0..64 {
        let code = generate_join_code();
        let exists = runtime.deployments.iter().any(|item| {
            if let Some(skip) = ignore_id {
                if item.id == skip {
                    return false;
                }
            }
            item.join_code.eq_ignore_ascii_case(&code)
        });
        if !exists {
            return code;
        }
    }
    generate_join_code()
}

fn reset_deployment_shutdown_timers(record: &mut DeploymentRecord) {
    record.idle_deadline_epoch = None;
    record.warning_started_at_epoch = None;
}

fn arm_deployment_idle_timer(record: &mut DeploymentRecord, now: u64) {
    let minutes = u64::from(record.idle_shutdown_minutes.max(1));
    record.idle_deadline_epoch = Some(now.saturating_add(minutes.saturating_mul(60)));
    record.warning_started_at_epoch = None;
}

fn update_deployment_timers(record: &mut DeploymentRecord, now: u64) -> bool {
    let mut changed = false;

    if !record.running {
        if record.idle_deadline_epoch.is_some() || record.warning_started_at_epoch.is_some() {
            reset_deployment_shutdown_timers(record);
            changed = true;
        }
        return changed;
    }

    if !record.idle_shutdown_enabled || record.players_online > 0 {
        if record.idle_deadline_epoch.is_some() || record.warning_started_at_epoch.is_some() {
            reset_deployment_shutdown_timers(record);
            changed = true;
        }
        if record.status != "running" {
            record.status = "running".to_string();
            changed = true;
        }
        return changed;
    }

    if record.idle_deadline_epoch.is_none() {
        arm_deployment_idle_timer(record, now);
        record.status = "idle_armed".to_string();
        return true;
    }

    if let Some(started) = record.warning_started_at_epoch {
        let warning_seconds = u64::from(record.shutdown_warning_seconds.max(1));
        if now >= started.saturating_add(warning_seconds) {
            record.running = false;
            record.players_online = 0;
            record.status = "stopped_idle".to_string();
            record.last_stopped_at_epoch = Some(now);
            reset_deployment_shutdown_timers(record);
        } else if record.status != "shutdown_warning" {
            record.status = "shutdown_warning".to_string();
        }
        return true;
    }

    if let Some(deadline) = record.idle_deadline_epoch {
        if now >= deadline {
            record.warning_started_at_epoch = Some(now);
            record.status = "shutdown_warning".to_string();
            return true;
        }
        if record.status != "idle_armed" {
            record.status = "idle_armed".to_string();
            return true;
        }
    }

    changed
}

fn deployment_to_response(
    record: &DeploymentRecord,
    now: u64,
    lan_ip: Option<&str>,
) -> DeployServerResponse {
    let mut idle_remaining = None;
    let mut warning_active = false;
    let mut warning_remaining = None;

    if record.running && record.idle_shutdown_enabled && record.players_online == 0 {
        if let Some(started) = record.warning_started_at_epoch {
            warning_active = true;
            let warn_end = started.saturating_add(u64::from(record.shutdown_warning_seconds.max(1)));
            warning_remaining = Some(warn_end.saturating_sub(now));
        } else if let Some(deadline) = record.idle_deadline_epoch {
            idle_remaining = Some(deadline.saturating_sub(now));
        }
    }

    let local_address = format!("127.0.0.1:{}", record.port);
    let lan_address = lan_ip.map(|ip| format!("{}:{}", ip, record.port));

    DeployServerResponse {
        deployment_id: record.id.clone(),
        name: record.name.clone(),
        status: record.status.clone(),
        host: record.host.clone(),
        port: record.port,
        version: record.version.clone(),
        server_type: record.server_type.clone(),
        ram_gb: record.ram_gb,
        running: record.running,
        players_online: record.players_online,
        max_players: record.max_players,
        join_code: record.join_code.clone(),
        runtime_mode: record.runtime_mode.clone(),
        idle_shutdown_enabled: record.idle_shutdown_enabled,
        idle_shutdown_minutes: record.idle_shutdown_minutes,
        idle_shutdown_seconds_remaining: idle_remaining,
        shutdown_warning_active: warning_active,
        shutdown_warning_seconds_remaining: warning_remaining,
        local_address,
        lan_address,
        public_address: record.public_address.clone(),
        public_subdomain: record.public_subdomain.clone(),
        last_started_at_epoch: record.last_started_at_epoch,
        last_stopped_at_epoch: record.last_stopped_at_epoch,
    }
}

fn find_deployment_index(runtime: &RuntimeState, deployment_id: &str) -> Result<usize, String> {
    let target = deployment_id.trim();
    if target.is_empty() {
        return Err("deployment id is required".to_string());
    }
    runtime
        .deployments
        .iter()
        .position(|item| item.id.eq_ignore_ascii_case(target))
        .ok_or_else(|| format!("deployment '{}' not found", target))
}

#[derive(Debug, Clone)]
enum ServerStartTarget {
    Jar(PathBuf),
    ForgeScript(PathBuf),
}

fn build_http_client(timeout_secs: u64) -> Result<reqwest::blocking::Client, String> {
    reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(timeout_secs))
        .build()
        .map_err(|err| format!("failed to create http client: {}", err))
}

fn http_get_json(client: &reqwest::blocking::Client, url: &str) -> Result<Value, String> {
    let response = client
        .get(url)
        .send()
        .map_err(|err| format!("request failed for '{}': {}", url, err))?;
    let status = response.status();
    if !status.is_success() {
        let body = response.text().unwrap_or_default();
        return Err(format!(
            "request failed for '{}': {}",
            url,
            parse_http_error_body(status, &body)
        ));
    }
    response
        .json::<Value>()
        .map_err(|err| format!("failed to parse json from '{}': {}", url, err))
}

fn download_file(
    client: &reqwest::blocking::Client,
    url: &str,
    target: &Path,
) -> Result<(), String> {
    if let Some(parent) = target.parent() {
        fs::create_dir_all(parent)
            .map_err(|err| format!("failed to create directory '{}': {}", parent.display(), err))?;
    }
    let response = client
        .get(url)
        .send()
        .map_err(|err| format!("download failed for '{}': {}", url, err))?;
    let status = response.status();
    if !status.is_success() {
        let body = response.text().unwrap_or_default();
        return Err(format!(
            "download failed for '{}': {}",
            url,
            parse_http_error_body(status, &body)
        ));
    }
    let bytes = response
        .bytes()
        .map_err(|err| format!("failed to read download body for '{}': {}", url, err))?;
    fs::write(target, &bytes).map_err(|err| {
        format!(
            "failed to write download '{}': {}",
            target.display(),
            err
        )
    })?;
    Ok(())
}

fn ensure_vanilla_server_jar(
    client: &reqwest::blocking::Client,
    game_version: &str,
    deploy_dir: &Path,
) -> Result<PathBuf, String> {
    let jar_path = deploy_dir.join(format!("server-vanilla-{}.jar", game_version));
    if jar_path.exists() {
        return Ok(jar_path);
    }

    let manifest =
        http_get_json(client, "https://launchermeta.mojang.com/mc/game/version_manifest_v2.json")?;
    let versions = manifest
        .get("versions")
        .and_then(|value| value.as_array())
        .ok_or_else(|| "invalid Mojang version manifest".to_string())?;
    let meta_url = versions
        .iter()
        .find(|value| value.get("id").and_then(|id| id.as_str()) == Some(game_version))
        .and_then(|value| value.get("url").and_then(|url| url.as_str()))
        .ok_or_else(|| format!("minecraft version '{}' not found", game_version))?;
    let version_meta = http_get_json(client, meta_url)?;
    let server_url = version_meta
        .get("downloads")
        .and_then(|value| value.get("server"))
        .and_then(|value| value.get("url"))
        .and_then(|value| value.as_str())
        .ok_or_else(|| format!("server download url missing for version '{}'", game_version))?;

    download_file(client, server_url, &jar_path)?;
    Ok(jar_path)
}

fn ensure_paper_server_jar(
    client: &reqwest::blocking::Client,
    game_version: &str,
    deploy_dir: &Path,
) -> Result<PathBuf, String> {
    let builds_url = format!(
        "https://api.papermc.io/v2/projects/paper/versions/{}/builds",
        game_version
    );
    let payload = http_get_json(client, &builds_url)?;
    let builds = payload
        .get("builds")
        .and_then(|value| value.as_array())
        .ok_or_else(|| "invalid Paper builds response".to_string())?;
    let mut selected_build = None::<u64>;
    let mut selected_name = None::<String>;
    for entry in builds {
        let build_id = entry.get("build").and_then(|value| value.as_u64());
        let file_name = entry
            .get("downloads")
            .and_then(|value| value.get("application"))
            .and_then(|value| value.get("name"))
            .and_then(|value| value.as_str());
        if let (Some(build), Some(name)) = (build_id, file_name) {
            if selected_build.map(|value| build > value).unwrap_or(true) {
                selected_build = Some(build);
                selected_name = Some(name.to_string());
            }
        }
    }
    let build = selected_build
        .ok_or_else(|| format!("paper build not found for minecraft {}", game_version))?;
    let file_name = selected_name
        .ok_or_else(|| format!("paper download metadata missing for minecraft {}", game_version))?;
    let jar_path = deploy_dir.join(file_name.clone());
    if jar_path.exists() {
        return Ok(jar_path);
    }
    let download_url = format!(
        "https://api.papermc.io/v2/projects/paper/versions/{}/builds/{}/downloads/{}",
        game_version, build, file_name
    );
    download_file(client, &download_url, &jar_path)?;
    Ok(jar_path)
}

fn ensure_fabric_server_jar(
    client: &reqwest::blocking::Client,
    game_version: &str,
    deploy_dir: &Path,
) -> Result<PathBuf, String> {
    let loader_payload = http_get_json(client, "https://meta.fabricmc.net/v2/versions/loader")?;
    let installer_payload =
        http_get_json(client, "https://meta.fabricmc.net/v2/versions/installer")?;
    let loader = loader_payload
        .as_array()
        .and_then(|rows| rows.first())
        .and_then(|entry| entry.get("version"))
        .and_then(|value| value.as_str())
        .ok_or_else(|| "failed to resolve latest Fabric loader".to_string())?;
    let installer = installer_payload
        .as_array()
        .and_then(|rows| rows.first())
        .and_then(|entry| entry.get("version"))
        .and_then(|value| value.as_str())
        .ok_or_else(|| "failed to resolve latest Fabric installer".to_string())?;
    let jar_name = format!("server-fabric-{}-{}.jar", game_version, loader);
    let jar_path = deploy_dir.join(jar_name);
    if jar_path.exists() {
        return Ok(jar_path);
    }
    let url = format!(
        "https://meta.fabricmc.net/v2/versions/loader/{}/{}/{}/server/jar",
        game_version, loader, installer
    );
    download_file(client, &url, &jar_path)?;
    Ok(jar_path)
}

fn ensure_forge_script(
    client: &reqwest::blocking::Client,
    deployment: &DeploymentRecord,
    deploy_dir: &Path,
    java_bin: &str,
) -> Result<PathBuf, String> {
    let script = if cfg!(target_os = "windows") {
        deploy_dir.join("run.bat")
    } else {
        deploy_dir.join("run.sh")
    };
    if script.exists() {
        return Ok(script);
    }

    let promos =
        http_get_json(client, "https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json")?;
    let promos_obj = promos
        .get("promos")
        .and_then(|value| value.as_object())
        .ok_or_else(|| "invalid Forge promotions response".to_string())?;
    let latest_key = format!("{}-latest", deployment.version);
    let recommended_key = format!("{}-recommended", deployment.version);
    let forge_version = promos_obj
        .get(&latest_key)
        .or_else(|| promos_obj.get(&recommended_key))
        .and_then(|value| value.as_str())
        .ok_or_else(|| {
            format!(
                "forge installer version not found for minecraft {}",
                deployment.version
            )
        })?;
    let coordinate = format!("{}-{}", deployment.version, forge_version);
    let installer_name = format!("forge-{}-installer.jar", coordinate);
    let installer_path = deploy_dir.join(installer_name.clone());
    if !installer_path.exists() {
        let installer_url = format!(
            "https://maven.minecraftforge.net/net/minecraftforge/forge/{0}/forge-{0}-installer.jar",
            coordinate
        );
        download_file(client, &installer_url, &installer_path)?;
    }

    let mut cmd = Command::new(java_bin);
    cmd.current_dir(deploy_dir)
        .arg("-jar")
        .arg(installer_path.as_os_str())
        .arg("--installServer")
        .stdout(Stdio::null())
        .stderr(Stdio::null());
    let status = cmd
        .status()
        .map_err(|err| format!("failed to run forge installer: {}", err))?;
    if !status.success() {
        return Err(format!(
            "forge installer failed with exit code {:?}",
            status.code()
        ));
    }
    if !script.exists() {
        return Err("forge installer did not generate run script".to_string());
    }
    Ok(script)
}

fn resolve_server_java_binary() -> String {
    let info = detect_java_runtime_info(17);
    if let Some(path) = info.default_path {
        let normalized = path.trim().to_string();
        if !normalized.is_empty() {
            return normalized;
        }
    }
    for candidate in info.candidates {
        let normalized = candidate.path.trim().to_string();
        if !normalized.is_empty() {
            return normalized;
        }
    }
    "java".to_string()
}

fn ensure_server_start_target(
    deployment: &DeploymentRecord,
    deploy_dir: &Path,
) -> Result<ServerStartTarget, String> {
    let client = build_http_client(45)?;
    let java_bin = resolve_server_java_binary();
    let normalized = normalize_server_type(&deployment.server_type);
    match normalized.as_str() {
        "paper" => ensure_paper_server_jar(&client, &deployment.version, deploy_dir)
            .map(ServerStartTarget::Jar),
        "fabric" => ensure_fabric_server_jar(&client, &deployment.version, deploy_dir)
            .map(ServerStartTarget::Jar),
        "forge" => ensure_forge_script(&client, deployment, deploy_dir, &java_bin)
            .map(ServerStartTarget::ForgeScript),
        _ => ensure_vanilla_server_jar(&client, &deployment.version, deploy_dir)
            .map(ServerStartTarget::Jar),
    }
}

fn write_server_properties(deployment: &DeploymentRecord, deploy_dir: &Path) -> Result<(), String> {
    fs::create_dir_all(deploy_dir)
        .map_err(|err| format!("failed to create deploy dir '{}': {}", deploy_dir.display(), err))?;
    fs::write(deploy_dir.join("eula.txt"), "eula=true\n")
        .map_err(|err| format!("failed to write eula.txt: {}", err))?;
    let properties = format!(
        "server-port={}\nmax-players={}\nmotd={}\nonline-mode=true\n",
        deployment.port, deployment.max_players, deployment.motd
    );
    fs::write(deploy_dir.join("server.properties"), properties)
        .map_err(|err| format!("failed to write server.properties: {}", err))
}

fn spawn_deployment_process(
    deployment: &DeploymentRecord,
    deploy_dir: &Path,
) -> Result<ProcessHandle, String> {
    let java_bin = resolve_server_java_binary();
    let target = ensure_server_start_target(deployment, deploy_dir)?;

    let mut command = match target {
        ServerStartTarget::Jar(jar_path) => {
            let mut cmd = Command::new(&java_bin);
            cmd.arg("-Xms1G")
                .arg(format!("-Xmx{}G", deployment.ram_gb.max(1)))
                .arg("-jar")
                .arg(jar_path.as_os_str())
                .arg("nogui");
            cmd
        }
        ServerStartTarget::ForgeScript(script_path) => {
            #[cfg(target_os = "windows")]
            let cmd = {
                let mut cmd = Command::new("cmd");
                cmd.arg("/C").arg(script_path.as_os_str()).arg("nogui");
                cmd
            };
            #[cfg(not(target_os = "windows"))]
            let cmd = {
                let mut cmd = Command::new("sh");
                cmd.arg(script_path.as_os_str()).arg("nogui");
                cmd
            };
            cmd
        }
    };

    command
        .current_dir(deploy_dir)
        .stdin(Stdio::piped())
        .stdout(Stdio::null())
        .stderr(Stdio::null());

    let mut child = command
        .spawn()
        .map_err(|err| format!("failed to start server process: {}", err))?;
    let stdin = child.stdin.take();
    Ok(ProcessHandle { child, stdin })
}

fn refresh_deployment_processes(runtime: &mut RuntimeState) -> bool {
    let ids = runtime
        .deployment_processes
        .keys()
        .cloned()
        .collect::<Vec<_>>();
    if ids.is_empty() {
        return false;
    }
    let now = unix_epoch_now();
    let mut changed = false;
    for deployment_id in ids {
        let mut finished = false;
        let mut exit_code = None::<i32>;
        if let Some(handle) = runtime.deployment_processes.get_mut(&deployment_id) {
            match handle.child.try_wait() {
                Ok(Some(status)) => {
                    finished = true;
                    exit_code = status.code();
                }
                Ok(None) => {}
                Err(_) => {
                    finished = true;
                }
            }
        }
        if !finished {
            continue;
        }
        runtime.deployment_processes.remove(&deployment_id);
        if let Some(item) = runtime.deployments.iter_mut().find(|row| row.id == deployment_id) {
            item.running = false;
            item.players_online = 0;
            item.status = match exit_code {
                Some(code) => format!("stopped_exit_{}", code),
                None => "stopped".to_string(),
            };
            item.last_stopped_at_epoch = Some(now);
            reset_deployment_shutdown_timers(item);
            changed = true;
        }
    }
    changed
}

fn stop_deployment_process_internal(
    runtime: &mut RuntimeState,
    deployment_id: &str,
) -> Result<bool, String> {
    let mut handle = match runtime.deployment_processes.remove(deployment_id) {
        Some(value) => value,
        None => return Ok(false),
    };

    if let Some(stdin) = handle.stdin.as_mut() {
        let _ = stdin.write_all(b"stop\n");
        let _ = stdin.flush();
    }

    let mut exited = false;
    for _ in 0..24 {
        match handle.child.try_wait() {
            Ok(Some(_)) => {
                exited = true;
                break;
            }
            Ok(None) => std::thread::sleep(Duration::from_millis(250)),
            Err(_) => break,
        }
    }

    if !exited {
        let _ = handle.child.kill();
        let _ = handle.child.wait();
    }
    Ok(true)
}

fn memory_to_gb(memory: u64) -> u16 {
    let gb = if memory > (1024_u64 * 1024 * 1024 * 64) {
        memory / 1024 / 1024 / 1024
    } else {
        memory / 1024 / 1024
    };
    gb.clamp(1, u16::MAX as u64) as u16
}

#[tauri::command]
pub fn analyze_server_host() -> Result<AnalyzePcResponse, String> {
    let mut system = System::new_all();
    system.refresh_memory();
    let disks = Disks::new_with_refreshed_list();

    let cpu_cores = std::thread::available_parallelism()
        .map(|value| value.get() as u16)
        .unwrap_or(4);
    let total_ram_gb = memory_to_gb(system.total_memory());
    let disk_total_gb = disks
        .list()
        .iter()
        .map(|item| item.total_space() / 1024 / 1024 / 1024)
        .sum::<u64>();
    let disk_free_gb = disks
        .list()
        .iter()
        .map(|item| item.available_space() / 1024 / 1024 / 1024)
        .sum::<u64>();

    let java_info = detect_java_runtime_info(17);
    let java_detected = !java_info.candidates.is_empty() || java_info.default_path.is_some();
    let java_version = java_info
        .candidates
        .iter()
        .find_map(|item| item.version.clone());

    let recommended_ram = if total_ram_gb >= 24 {
        6
    } else if total_ram_gb >= 16 {
        4
    } else if total_ram_gb >= 8 {
        3
    } else {
        2
    };
    let (players, plugins, mods) = if recommended_ram >= 6 {
        (
            "10-16".to_string(),
            "40-80".to_string(),
            "60-120".to_string(),
        )
    } else if recommended_ram >= 4 {
        (
            "6-8".to_string(),
            "20-40".to_string(),
            "30-50".to_string(),
        )
    } else {
        ("2-4".to_string(), "5-15".to_string(), "10-20".to_string())
    };

    let recommended = ServerRecommendation {
        server_type: if cpu_cores >= 4 {
            "paper".to_string()
        } else {
            "vanilla".to_string()
        },
        ram_gb: recommended_ram,
        players,
        plugins,
        mods,
    };

    Ok(AnalyzePcResponse {
        cpu_cores,
        total_ram_gb,
        disk_total_gb,
        disk_free_gb,
        java_detected,
        java_version,
        recommended,
    })
}

#[tauri::command]
pub fn deploy_server(
    request: DeployServerRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let name = request.name.trim();
    if name.is_empty() {
        return Err("server name is required".to_string());
    }

    let version = request.version.trim();
    if version.is_empty() {
        return Err("server version is required".to_string());
    }

    let requested_port = request.port.unwrap_or(0);
    let port = if requested_port == 0 {
        next_available_server_port(&runtime)
    } else {
        requested_port
    };
    if runtime.deployments.iter().any(|item| item.port == port) {
        return Err(error_with_code(
            "SERVER_PORT_IN_USE",
            format!("port {} is already in use by another server", port),
        ));
    }

    let deployment_id = format!("deploy-{}", runtime.next_deployment_id);
    runtime.next_deployment_id += 1;
    let join_code = generate_unique_join_code(&runtime, None);
    let runtime_mode = normalize_server_runtime_mode(request.runtime_mode.as_deref());
    let max_players = request.max_players.unwrap_or(20).clamp(1, 200);
    let deployment = DeploymentRecord {
        id: deployment_id.clone(),
        name: name.to_string(),
        host: {
            let host = request.host.trim();
            if host.is_empty() {
                "This Computer".to_string()
            } else {
                host.to_string()
            }
        },
        server_type: normalize_server_type(&request.server_type),
        version: version.to_string(),
        ram_gb: request.ram_gb.clamp(1, 32),
        max_players,
        motd: request
            .motd
            .unwrap_or_else(|| "A Minecraft Server".to_string())
            .trim()
            .to_string(),
        port,
        running: false,
        players_online: 0,
        join_code,
        runtime_mode,
        idle_shutdown_enabled: request.idle_shutdown_enabled.unwrap_or(true),
        idle_shutdown_minutes: request.idle_shutdown_minutes.unwrap_or(10).clamp(1, 240),
        shutdown_warning_seconds: 60,
        idle_deadline_epoch: None,
        warning_started_at_epoch: None,
        last_started_at_epoch: None,
        last_stopped_at_epoch: None,
        public_subdomain: request
            .public_subdomain
            .map(|value| value.trim().to_string())
            .filter(|value| !value.is_empty()),
        public_address: request
            .public_address
            .map(|value| value.trim().to_string())
            .filter(|value| !value.is_empty()),
        status: "deploying".to_string(),
    };
    runtime.deployments.push(deployment);
    persist_runtime(&state, &runtime)?;
    drop(runtime);

    let start_result = start_deployment(
        DeploymentControlRequest {
            deployment_id: deployment_id.clone(),
        },
        state.clone(),
        app,
    );
    let deployment = match start_result {
        Ok(value) => value,
        Err(err) => {
            let mut runtime = runtime_lock(&state)?;
            if let Some(index) = runtime
                .deployments
                .iter()
                .position(|item| item.id == deployment_id)
            {
                runtime.deployments[index].running = false;
                runtime.deployments[index].status = "deploy_failed".to_string();
                runtime.deployments[index].last_stopped_at_epoch = Some(now);
            }
            persist_runtime(&state, &runtime)?;
            return Err(error_with_code("SERVER_DEPLOY_FAILED", err));
        }
    };
    Ok(deployment)
}

#[tauri::command]
pub fn list_deployments(state: State<AppState>) -> Result<Vec<DeployServerResponse>, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let mut changed = refresh_deployment_processes(&mut runtime);
    let mut idle_stop_ids = Vec::<String>::new();
    for item in &mut runtime.deployments {
        let was_running = item.running;
        if update_deployment_timers(item, now) {
            changed = true;
            if was_running && !item.running && item.status == "stopped_idle" {
                idle_stop_ids.push(item.id.clone());
            }
        }
    }
    for deployment_id in idle_stop_ids {
        if stop_deployment_process_internal(&mut runtime, &deployment_id)? {
            changed = true;
        }
    }
    if changed {
        persist_runtime(&state, &runtime)?;
    }
    let lan_ip = detect_lan_ip();
    let rows = runtime
        .deployments
        .iter()
        .map(|item| deployment_to_response(item, now, lan_ip.as_deref()))
        .collect::<Vec<_>>();
    Ok(rows)
}

#[tauri::command]
pub fn start_deployment(
    request: DeploymentControlRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let changed_by_refresh = refresh_deployment_processes(&mut runtime);
    if changed_by_refresh {
        persist_runtime(&state, &runtime)?;
    }
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    if runtime.deployment_processes.contains_key(&runtime.deployments[index].id) {
        let deployment = runtime.deployments[index].clone();
        let lan_ip = detect_lan_ip();
        return Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()));
    }

    let mut item = runtime.deployments[index].clone();
    item.running = true;
    item.status = "starting".to_string();
    item.last_started_at_epoch = Some(now);
    item.last_stopped_at_epoch = None;
    if item.idle_shutdown_enabled && item.players_online == 0 {
        arm_deployment_idle_timer(&mut item, now);
    } else {
        reset_deployment_shutdown_timers(&mut item);
    }

    let deploy_dir = resolve_deployment_base_dir(&app, &item)?;
    write_server_properties(&item, &deploy_dir)?;
    let handle = spawn_deployment_process(&item, &deploy_dir)?;

    runtime.deployment_processes.insert(item.id.clone(), handle);
    item.running = true;
    item.status = "running".to_string();
    item.last_started_at_epoch = Some(now);
    if item.idle_shutdown_enabled && item.players_online == 0 {
        arm_deployment_idle_timer(&mut item, now);
    } else {
        reset_deployment_shutdown_timers(&mut item);
    }
    let deployment = item.clone();
    runtime.deployments[index] = item;
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn stop_deployment(
    request: DeploymentControlRequest,
    state: State<AppState>,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let changed_by_refresh = refresh_deployment_processes(&mut runtime);
    if changed_by_refresh {
        persist_runtime(&state, &runtime)?;
    }
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let deployment_id = runtime.deployments[index].id.clone();
    let _ = stop_deployment_process_internal(&mut runtime, &deployment_id)?;
    let item = &mut runtime.deployments[index];
    item.running = false;
    item.players_online = 0;
    item.status = "stopped_manual".to_string();
    item.last_stopped_at_epoch = Some(now);
    reset_deployment_shutdown_timers(item);
    let deployment = item.clone();
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn restart_deployment(
    request: DeploymentControlRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let changed_by_refresh = refresh_deployment_processes(&mut runtime);
    if changed_by_refresh {
        persist_runtime(&state, &runtime)?;
    }
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let deployment_id = runtime.deployments[index].id.clone();
    let _ = stop_deployment_process_internal(&mut runtime, &deployment_id)?;
    let mut item = runtime.deployments[index].clone();
    item.running = true;
    item.status = "running".to_string();
    item.last_stopped_at_epoch = Some(now);
    item.last_started_at_epoch = Some(now);
    if item.idle_shutdown_enabled && item.players_online == 0 {
        arm_deployment_idle_timer(&mut item, now);
    } else {
        reset_deployment_shutdown_timers(&mut item);
    }
    let deploy_dir = resolve_deployment_base_dir(&app, &item)?;
    write_server_properties(&item, &deploy_dir)?;
    let handle = spawn_deployment_process(&item, &deploy_dir)?;
    runtime.deployment_processes.insert(item.id.clone(), handle);
    let deployment = item.clone();
    runtime.deployments[index] = item;
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn regenerate_deployment_join_code(
    request: DeploymentControlRequest,
    state: State<AppState>,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let new_code = generate_unique_join_code(&runtime, Some(runtime.deployments[index].id.as_str()));
    runtime.deployments[index].join_code = new_code;
    let deployment = runtime.deployments[index].clone();
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn cancel_deployment_shutdown(
    request: DeploymentControlRequest,
    state: State<AppState>,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let item = &mut runtime.deployments[index];
    if !item.running {
        return Err(error_with_code(
            "SERVER_NOT_RUNNING",
            "server is not running",
        ));
    }
    item.warning_started_at_epoch = None;
    item.idle_deadline_epoch = Some(
        now.saturating_add(u64::from(item.idle_shutdown_minutes.max(1)).saturating_mul(60)),
    );
    item.status = "running".to_string();
    let deployment = item.clone();
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn set_deployment_players(
    request: SetDeploymentPlayersRequest,
    state: State<AppState>,
) -> Result<DeployServerResponse, String> {
    let now = unix_epoch_now();
    let mut runtime = runtime_lock(&state)?;
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let item = &mut runtime.deployments[index];
    item.players_online = request.players_online.min(item.max_players);
    if item.players_online > 0 {
        reset_deployment_shutdown_timers(item);
        if item.running {
            item.status = "running".to_string();
        }
    } else if item.running && item.idle_shutdown_enabled {
        arm_deployment_idle_timer(item, now);
        item.status = "idle_armed".to_string();
    }
    let deployment = item.clone();
    persist_runtime(&state, &runtime)?;
    let lan_ip = detect_lan_ip();
    Ok(deployment_to_response(&deployment, now, lan_ip.as_deref()))
}

#[tauri::command]
pub fn resolve_join_code(
    request: ResolveJoinCodeRequest,
    state: State<AppState>,
) -> Result<ResolveJoinCodeResponse, String> {
    let runtime = runtime_lock(&state)?;
    let code = request.join_code.trim();
    if code.is_empty() {
        return Err("join code is required".to_string());
    }
    let deployment = runtime
        .deployments
        .iter()
        .find(|item| item.join_code.eq_ignore_ascii_case(code))
        .ok_or_else(|| error_with_code("SERVER_JOIN_CODE_NOT_FOUND", "join code not found"))?;
    let local_address = format!("127.0.0.1:{}", deployment.port);
    let lan_address = detect_lan_ip().map(|ip| format!("{}:{}", ip, deployment.port));
    Ok(ResolveJoinCodeResponse {
        deployment_id: deployment.id.clone(),
        name: deployment.name.clone(),
        host: deployment.host.clone(),
        port: deployment.port,
        local_address,
        lan_address,
        public_address: deployment.public_address.clone(),
        public_subdomain: deployment.public_subdomain.clone(),
    })
}

#[tauri::command]
pub fn open_deployment_directory(
    request: OpenDeploymentDirectoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<OpenDeploymentDirectoryResponse, String> {
    let runtime = runtime_lock(&state)?;
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let deployment = runtime.deployments[index].clone();
    drop(runtime);

    let dir = resolve_deployment_base_dir(&app, &deployment)?;
    fs::create_dir_all(&dir).map_err(|err| {
        format!(
            "failed to create deployment directory '{}': {}",
            dir.display(),
            err
        )
    })?;
    open_directory_in_os(&dir)?;
    Ok(OpenDeploymentDirectoryResponse {
        deployment_id: deployment.id,
        path: dir.display().to_string(),
        status: "opened".to_string(),
    })
}

#[tauri::command]
pub fn open_deployment_terminal(
    request: OpenDeploymentDirectoryRequest,
    state: State<AppState>,
    app: AppHandle,
) -> Result<OpenDeploymentDirectoryResponse, String> {
    let runtime = runtime_lock(&state)?;
    let index = find_deployment_index(&runtime, &request.deployment_id)?;
    let deployment = runtime.deployments[index].clone();
    drop(runtime);

    let dir = resolve_deployment_base_dir(&app, &deployment)?;
    fs::create_dir_all(&dir).map_err(|err| {
        format!(
            "failed to create deployment directory '{}': {}",
            dir.display(),
            err
        )
    })?;
    open_directory_in_terminal(&dir)?;
    Ok(OpenDeploymentDirectoryResponse {
        deployment_id: deployment.id,
        path: dir.display().to_string(),
        status: "opened_terminal".to_string(),
    })
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

    let (
        instance_name,
        instance_loader,
        instance_loader_version,
        selected_profile,
        available_profiles,
        user_memory_min_mb,
        user_memory_max_mb,
    ) = {
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
        let (memory_min_mb, memory_max_mb) = extract_heap_bounds_mb(&instance.args);
        (
            instance.name.clone(),
            instance.loader.clone(),
            instance.loader_version.clone(),
            selected_profile,
            runtime.profiles.clone(),
            memory_min_mb,
            memory_max_mb,
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
    let available_profiles_for_task = available_profiles.clone();
    let version_for_task = requested_version.to_string();
    let force_redownload = request.force_redownload.unwrap_or(false);
    let max_concurrency = request.max_concurrency;

    let outcome = tauri::async_runtime::spawn_blocking(move || {
        let (auth_context_for_task, fallback_profile_id) = map_error_code(
            "AUTH_RESOLVE_LAUNCH_IDENTITY_FAILED",
            build_launch_auth_context_with_fallback(
                &selected_profile_for_task,
                &available_profiles_for_task,
            ),
        )?;
        let outcome = provision_instance_runtime_for_loader_with_progress(
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
        )?;
        Ok::<_, String>((outcome, fallback_profile_id))
    })
    .await
    .map_err(|err| error_with_code("PROVISION_TASK_JOIN_FAILED", err.to_string()))?;

    let (outcome, fallback_profile_id) = match outcome {
        Ok(value) => value,
        Err(err) => {
            emit_provision_event(&app, &instance_name, "failed", "failed", &err, None, None);
            return Err(error_with_code("PROVISION_RUNTIME_FAILED", err));
        }
    };
    let merged_launch_args = merge_heap_overrides_into_launch_args(
        &outcome.launch_args,
        user_memory_min_mb,
        user_memory_max_mb,
    );

    {
        let mut runtime = runtime_lock(&state)
            .map_err(|err| error_with_code("PROVISION_STATE_LOCK_FAILED", err))?;
        if let Some(profile_id) = fallback_profile_id.as_deref() {
            let _ = set_only_active_profile(&mut runtime.profiles, profile_id);
        }
        if let Some(instance) = runtime
            .instances
            .iter_mut()
            .find(|item| item.name.eq_ignore_ascii_case(&instance_name))
        {
            instance.version = requested_version.to_string();
            instance.args = merged_launch_args.clone();
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
        classify_launch_identity_error, error_with_code, file_has_extension, format_heap_flag_mb,
        has_name_token, is_relink_required_error, merge_heap_overrides_into_launch_args,
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

    #[test]
    fn classify_launch_identity_error_maps_security_interrupt() {
        let mapped = classify_launch_identity_error(
            "invalid_grant (400): AADSTS70000: Account security interrupt for collecting proof, when user account is found as compromised",
        );
        assert!(mapped.contains("[AUTH_ACCOUNT_SECURITY_INTERRUPT]"));
    }

    #[test]
    fn relink_detector_matches_code_prefix() {
        assert!(is_relink_required_error(
            "[AUTH_RELINK_REQUIRED] Microsoft account relink is required"
        ));
    }

    #[test]
    fn relink_detector_ignores_other_auth_errors() {
        assert!(!is_relink_required_error(
            "[AUTH_APP_REGISTRATION_INVALID] invalid app registration",
        ));
    }

    #[test]
    fn relink_detector_ignores_security_interrupt() {
        assert!(!is_relink_required_error(
            "[AUTH_ACCOUNT_SECURITY_INTERRUPT] AADSTS70000 account security interrupt",
        ));
    }

    #[test]
    fn merge_heap_overrides_replaces_existing_bounds() {
        let args = vec![
            "-Xms1G".to_string(),
            "-Xmx2G".to_string(),
            "-Dfoo=bar".to_string(),
            "main.class".to_string(),
        ];
        let merged = merge_heap_overrides_into_launch_args(&args, Some(4096), Some(6144));
        assert!(merged.contains(&"-Xms4G".to_string()));
        assert!(merged.contains(&"-Xmx6G".to_string()));
        assert!(!merged.contains(&"-Xms1G".to_string()));
        assert!(!merged.contains(&"-Xmx2G".to_string()));
        assert!(merged.contains(&"-Dfoo=bar".to_string()));
    }

    #[test]
    fn merge_heap_overrides_preserves_missing_override_side() {
        let args = vec![
            "-Xms1G".to_string(),
            "-Xmx2G".to_string(),
            "main.class".to_string(),
        ];
        let merged = merge_heap_overrides_into_launch_args(&args, Some(3072), None);
        assert!(merged.contains(&"-Xms3G".to_string()));
        assert!(merged.contains(&"-Xmx2G".to_string()));
        assert!(!merged.contains(&"-Xms1G".to_string()));
    }

    #[test]
    fn merge_heap_overrides_inserts_when_missing() {
        let args = vec!["-Dfoo=bar".to_string(), "main.class".to_string()];
        let merged = merge_heap_overrides_into_launch_args(&args, None, Some(2048));
        assert_eq!(merged.first().cloned(), Some("-Xmx2G".to_string()));
        assert!(merged.contains(&"-Dfoo=bar".to_string()));
    }

    #[test]
    fn format_heap_flag_uses_gigabytes_when_divisible() {
        assert_eq!(format_heap_flag_mb("-Xmx", 2048), "-Xmx2G");
        assert_eq!(format_heap_flag_mb("-Xms", 2500), "-Xms2500M");
    }
}
