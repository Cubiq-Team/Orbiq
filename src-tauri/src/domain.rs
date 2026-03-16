use std::time::{SystemTime, UNIX_EPOCH};

use serde::{Deserialize, Deserializer, Serialize};

#[derive(Debug, Clone, Deserialize)]
#[serde(untagged)]
enum LastPlayedCompat {
    Epoch(u64),
    Text(String),
}

fn unix_epoch_now() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_secs())
        .unwrap_or(0)
}

pub(crate) fn parse_last_played_text(value: &str) -> Option<u64> {
    let normalized = value.trim().to_lowercase();
    if normalized.is_empty() || normalized == "never" {
        return None;
    }

    if normalized == "just now" {
        return Some(unix_epoch_now());
    }

    if let Ok(epoch) = normalized.parse::<u64>() {
        return Some(epoch);
    }

    if let Some(prefix) = normalized.strip_suffix(" day ago") {
        if let Ok(days) = prefix.trim().parse::<u64>() {
            return Some(unix_epoch_now().saturating_sub(days.saturating_mul(24 * 60 * 60)));
        }
    }

    if let Some(prefix) = normalized.strip_suffix(" days ago") {
        if let Ok(days) = prefix.trim().parse::<u64>() {
            return Some(unix_epoch_now().saturating_sub(days.saturating_mul(24 * 60 * 60)));
        }
    }

    if let Some(prefix) = normalized.strip_suffix(" week ago") {
        if let Ok(weeks) = prefix.trim().parse::<u64>() {
            return Some(unix_epoch_now().saturating_sub(weeks.saturating_mul(7 * 24 * 60 * 60)));
        }
    }

    if let Some(prefix) = normalized.strip_suffix(" weeks ago") {
        if let Ok(weeks) = prefix.trim().parse::<u64>() {
            return Some(unix_epoch_now().saturating_sub(weeks.saturating_mul(7 * 24 * 60 * 60)));
        }
    }

    None
}

fn deserialize_last_played<'de, D>(deserializer: D) -> Result<Option<u64>, D::Error>
where
    D: Deserializer<'de>,
{
    let raw = Option::<LastPlayedCompat>::deserialize(deserializer)?;
    Ok(raw.and_then(|item| match item {
        LastPlayedCompat::Epoch(value) => Some(value),
        LastPlayedCompat::Text(value) => parse_last_played_text(&value),
    }))
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceRecord {
    pub id: String,
    pub name: String,
    #[serde(default)]
    pub icon_key: Option<String>,
    #[serde(default)]
    pub banner_key: Option<String>,
    pub loader: String,
    #[serde(default)]
    pub loader_version: Option<String>,
    pub version: String,
    pub running: bool,
    pub playtime_minutes: u32,
    #[serde(default, deserialize_with = "deserialize_last_played")]
    pub last_played: Option<u64>,
    pub executable: Option<String>,
    pub args: Vec<String>,
    pub working_dir: Option<String>,
    pub last_exit_state: Option<String>,
    pub last_exit_code: Option<i32>,
    pub last_exit_reason: Option<String>,
    pub last_exit_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ProfileRecord {
    pub id: String,
    pub name: String,
    pub profile_type: String,
    pub active: bool,
    #[serde(default)]
    pub account_id: Option<String>,
    #[serde(default)]
    pub email: Option<String>,
    #[serde(default)]
    pub access_token_expires_at_epoch: Option<u64>,
    #[serde(default)]
    pub last_authenticated_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LaunchInstanceResponse {
    pub instance_name: String,
    pub profile_name: Option<String>,
    pub status: String,
    pub started_at_epoch: u64,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct KillInstanceResponse {
    pub instance_name: String,
    pub status: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DeployServerResponse {
    pub deployment_id: String,
    pub name: String,
    pub status: String,
    pub host: String,
    pub port: u16,
    pub version: String,
    pub server_type: String,
    pub ram_gb: u8,
    pub running: bool,
    pub players_online: u16,
    pub max_players: u16,
    pub join_code: String,
    pub runtime_mode: String,
    pub idle_shutdown_enabled: bool,
    pub idle_shutdown_minutes: u16,
    pub idle_shutdown_seconds_remaining: Option<u64>,
    pub shutdown_warning_active: bool,
    pub shutdown_warning_seconds_remaining: Option<u64>,
    pub local_address: String,
    pub lan_address: Option<String>,
    pub public_address: Option<String>,
    pub public_subdomain: Option<String>,
    pub last_started_at_epoch: Option<u64>,
    pub last_stopped_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceLifecycleEvent {
    pub instance_name: String,
    pub state: String,
    pub source: String,
    pub timestamp_epoch: u64,
    pub exit_code: Option<i32>,
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LaunchInstanceRequest {
    pub instance_name: String,
    pub profile_name: Option<String>,
    pub executable: Option<String>,
    pub args: Option<Vec<String>>,
    pub working_dir: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct KillInstanceRequest {
    pub instance_name: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateInstanceRequest {
    pub name: String,
    pub loader: String,
    pub version: String,
    #[serde(default)]
    pub icon_key: Option<String>,
    #[serde(default)]
    pub banner_key: Option<String>,
    #[serde(default)]
    pub loader_version: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RenameInstanceRequest {
    pub old_name: String,
    pub new_name: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeleteInstanceRequest {
    pub instance_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DeleteInstanceResponse {
    pub instance_name: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateLaunchConfigRequest {
    pub instance_name: String,
    pub executable: Option<String>,
    pub args: Option<Vec<String>>,
    pub working_dir: Option<String>,
    #[serde(default)]
    pub icon_key: Option<String>,
    #[serde(default)]
    pub banner_key: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetInstanceInfoRequest {
    pub instance_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceInfoResponse {
    pub instance_name: String,
    pub java_path: Option<String>,
    pub java_version: Option<String>,
    pub memory_min_mb: Option<u32>,
    pub memory_max_mb: Option<u32>,
    pub mods_count: u32,
    pub worlds_count: u32,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DuplicateInstanceRequest {
    pub source_name: String,
    pub new_name: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenInstanceDirectoryRequest {
    pub instance_name: String,
    pub target: Option<String>,
    pub ensure_exists: Option<bool>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenInstanceDirectoryResponse {
    pub instance_name: String,
    pub target: String,
    pub path: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenExternalUrlRequest {
    pub url: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenExternalUrlResponse {
    pub url: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateMinecraftSkinRequest {
    pub profile_id: String,
    pub image_base64: String,
    #[serde(default)]
    pub variant: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateMinecraftSkinResponse {
    pub profile_id: String,
    pub variant: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetMinecraftSkinStatusRequest {
    pub profile_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MinecraftSkinHistoryEntry {
    pub url: String,
    pub variant: String,
    pub captured_at_epoch: u64,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct GetMinecraftSkinStatusResponse {
    pub profile_id: String,
    pub player_name: String,
    pub skin_url: Option<String>,
    pub cape_url: Option<String>,
    pub variant: Option<String>,
    pub history: Vec<MinecraftSkinHistoryEntry>,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RollbackMinecraftSkinRequest {
    pub profile_id: String,
    #[serde(default)]
    pub history_index: Option<usize>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RollbackMinecraftSkinResponse {
    pub profile_id: String,
    pub player_name: String,
    pub skin_url: String,
    pub variant: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallBrowseItemRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
    pub url: String,
    #[serde(default)]
    pub file_name: Option<String>,
    #[serde(default)]
    pub if_exists: Option<String>,
    pub overwrite: Option<bool>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallBrowseItemResponse {
    pub instance_name: String,
    pub target: String,
    pub file_name: String,
    pub path: String,
    pub bytes_written: u64,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveInstanceFileRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
    pub file_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveInstanceFileResponse {
    pub instance_name: String,
    pub target: String,
    pub file_name: String,
    pub path: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetInstanceFileEnabledRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
    pub file_name: String,
    pub enabled: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SetInstanceFileEnabledResponse {
    pub instance_name: String,
    pub target: String,
    pub file_name: String,
    pub path: String,
    pub status: String,
    pub enabled: bool,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CheckInstanceFilesRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
    #[serde(default)]
    pub file_names: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CheckInstanceFileEntry {
    pub file_name: String,
    pub exists: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CheckInstanceFilesResponse {
    pub instance_name: String,
    pub target: String,
    pub files: Vec<CheckInstanceFileEntry>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceFilesRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceFilesResponse {
    pub instance_name: String,
    pub target: String,
    pub files: Vec<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceDirectoryEntriesRequest {
    pub instance_name: String,
    #[serde(default)]
    pub target: Option<String>,
    #[serde(default)]
    pub include_files: Option<bool>,
    #[serde(default)]
    pub include_directories: Option<bool>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceDirectoryEntry {
    pub name: String,
    pub is_directory: bool,
    pub size_bytes: u64,
    pub modified_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceDirectoryEntriesResponse {
    pub instance_name: String,
    pub target: String,
    pub path: String,
    pub entries: Vec<InstanceDirectoryEntry>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceWorldsRequest {
    pub instance_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceWorldSummary {
    pub world_name: String,
    pub display_name: Option<String>,
    pub path: String,
    pub size_bytes: u64,
    pub last_played_epoch: Option<u64>,
    pub game_mode: Option<String>,
    pub difficulty: Option<String>,
    pub seed: Option<String>,
    pub playtime_minutes: Option<u64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ListInstanceWorldsResponse {
    pub instance_name: String,
    pub worlds_root: String,
    pub running: bool,
    pub worlds: Vec<InstanceWorldSummary>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetInstanceWorldDetailsRequest {
    pub instance_name: String,
    pub world_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstanceWorldDetailsResponse {
    pub instance_name: String,
    pub world_name: String,
    pub path: String,
    pub running: bool,
    pub level_name: Option<String>,
    pub size_bytes: u64,
    pub last_played_epoch: Option<u64>,
    pub game_mode: Option<String>,
    pub difficulty: Option<String>,
    pub seed: Option<String>,
    pub playtime_minutes: Option<u64>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ListWorldPlayersRequest {
    pub instance_name: String,
    pub world_name: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct WorldPlayerSummary {
    pub player_uuid: String,
    pub path: String,
    pub modified_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ListWorldPlayersResponse {
    pub instance_name: String,
    pub world_name: String,
    pub running: bool,
    pub players: Vec<WorldPlayerSummary>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetWorldPlayerInventoryRequest {
    pub instance_name: String,
    pub world_name: String,
    pub player_uuid: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct WorldInventoryItem {
    pub slot: i32,
    pub item_id: String,
    pub display_name: String,
    pub count: u32,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct WorldPlayerInventoryResponse {
    pub instance_name: String,
    pub world_name: String,
    pub player_uuid: String,
    pub running: bool,
    pub health: Option<f32>,
    pub food_level: Option<i32>,
    pub xp_level: Option<i32>,
    pub position: Option<Vec<f64>>,
    pub hotbar: Vec<WorldInventoryItem>,
    pub inventory: Vec<WorldInventoryItem>,
    pub armor: Vec<WorldInventoryItem>,
    pub offhand: Vec<WorldInventoryItem>,
    pub ender_chest: Vec<WorldInventoryItem>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ResolveItemTextureRequest {
    pub item_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ResolveItemTextureResponse {
    pub item_id: String,
    pub data_uri: Option<String>,
    pub from_cache: bool,
    pub source_url: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeployServerRequest {
    pub name: String,
    pub version: String,
    pub server_type: String,
    pub ram_gb: u8,
    pub host: String,
    #[serde(default)]
    pub port: Option<u16>,
    #[serde(default)]
    pub max_players: Option<u16>,
    #[serde(default)]
    pub motd: Option<String>,
    #[serde(default)]
    pub runtime_mode: Option<String>,
    #[serde(default)]
    pub idle_shutdown_enabled: Option<bool>,
    #[serde(default)]
    pub idle_shutdown_minutes: Option<u16>,
    #[serde(default)]
    pub public_subdomain: Option<String>,
    #[serde(default)]
    pub public_address: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ServerRecommendation {
    pub server_type: String,
    pub ram_gb: u8,
    pub players: String,
    pub plugins: String,
    pub mods: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct AnalyzePcResponse {
    pub cpu_cores: u16,
    pub total_ram_gb: u16,
    pub disk_total_gb: u64,
    pub disk_free_gb: u64,
    pub java_detected: bool,
    pub java_version: Option<String>,
    pub recommended: ServerRecommendation,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeploymentControlRequest {
    pub deployment_id: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetDeploymentPlayersRequest {
    pub deployment_id: String,
    pub players_online: u16,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ResolveJoinCodeRequest {
    pub join_code: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ResolveJoinCodeResponse {
    pub deployment_id: String,
    pub name: String,
    pub host: String,
    pub port: u16,
    pub local_address: String,
    pub lan_address: Option<String>,
    pub public_address: Option<String>,
    pub public_subdomain: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenDeploymentDirectoryRequest {
    pub deployment_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct OpenDeploymentDirectoryResponse {
    pub deployment_id: String,
    pub path: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateOfflineProfileRequest {
    pub name: String,
    pub set_active: Option<bool>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetActiveProfileRequest {
    pub profile_id: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveProfileRequest {
    pub profile_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveProfileResponse {
    pub profile_id: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MicrosoftDeviceCodeStartRequest {
    pub client_id: Option<String>,
    pub scopes: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct MicrosoftDeviceCodeStartResponse {
    pub session_id: String,
    pub verification_uri: String,
    pub verification_uri_complete: Option<String>,
    pub user_code: String,
    pub message: String,
    pub interval_seconds: u32,
    pub expires_at_epoch: u64,
    #[serde(default)]
    pub client_id: Option<String>,
    #[serde(default)]
    pub tenant: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MicrosoftOAuthStartRequest {
    pub client_id: Option<String>,
    pub scopes: Option<Vec<String>>,
    pub redirect_uri: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct MicrosoftOAuthStartResponse {
    pub authorization_url: String,
    pub state: String,
    pub expires_at_epoch: u64,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CompleteMicrosoftOAuthLoginRequest {
    pub state: String,
    pub code: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CompleteMicrosoftOAuthLoginResponse {
    pub status: String,
    pub profile: ProfileRecord,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PollMicrosoftDeviceCodeRequest {
    pub session_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PollMicrosoftDeviceCodeResponse {
    pub status: String,
    pub profile: Option<ProfileRecord>,
    pub reason: Option<String>,
    pub next_poll_after_seconds: Option<u32>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RefreshMicrosoftTokenRequest {
    pub profile_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RefreshMicrosoftTokenResponse {
    pub profile_id: String,
    pub status: String,
    pub expires_at_epoch: Option<u64>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogoutMicrosoftProfileRequest {
    pub profile_id: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LogoutMicrosoftProfileResponse {
    pub profile_id: String,
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StartOrbiqEmailVerificationRequest {
    pub email: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct StartOrbiqEmailVerificationResponse {
    pub status: String,
    pub session_id: String,
    pub expires_at_epoch: u64,
    pub retry_after_seconds: u32,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VerifyOrbiqEmailCodeRequest {
    pub email: String,
    pub session_id: String,
    pub code: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct VerifyOrbiqEmailCodeResponse {
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SendOrbiqWelcomeEmailRequest {
    pub email: String,
    pub username: Option<String>,
    pub display_name: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SendOrbiqWelcomeEmailResponse {
    pub status: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ProvisionInstanceRequest {
    pub instance_name: String,
    pub version: String,
    #[serde(default)]
    pub profile_id: Option<String>,
    #[serde(default)]
    pub profile_name: Option<String>,
    pub force_redownload: Option<bool>,
    pub max_concurrency: Option<u8>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PreflightInstanceLaunchRequest {
    pub instance_name: String,
    #[serde(default)]
    pub profile_id: Option<String>,
    #[serde(default)]
    pub profile_name: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PreflightIssue {
    pub severity: String,
    pub code: String,
    pub message: String,
    pub fixable: bool,
    pub action: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PreflightInstanceLaunchResponse {
    pub instance_name: String,
    pub loader: String,
    pub version: String,
    pub blocking_count: u32,
    pub warning_count: u32,
    pub issues: Vec<PreflightIssue>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DebugBundleRequest {
    #[serde(default)]
    pub instance_name: Option<String>,
    #[serde(default)]
    pub include_logs: Option<bool>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DebugBundleResult {
    pub path: String,
    pub size: u64,
    pub created_at: u64,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ProvisionInstanceResponse {
    pub instance_name: String,
    pub version: String,
    pub status: String,
    pub downloaded_files: u32,
    pub skipped_files: u32,
    pub libraries_downloaded: u32,
    pub assets_downloaded: u32,
    pub runtime_root: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ProvisionProgressEvent {
    pub instance_name: String,
    pub state: String,
    pub phase: String,
    pub message: String,
    pub completed: Option<u32>,
    pub total: Option<u32>,
    pub timestamp_epoch: u64,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct JavaRuntimeCandidate {
    pub path: String,
    pub version: Option<String>,
    pub major: Option<u32>,
    pub source: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct JavaRuntimeInfoResponse {
    pub minimum_major: u32,
    pub default_path: Option<String>,
    pub candidates: Vec<JavaRuntimeCandidate>,
}

#[cfg(test)]
mod tests {
    use super::parse_last_played_text;

    #[test]
    fn parse_last_played_text_supports_legacy_values() {
        let now = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .expect("clock error")
            .as_secs();

        let just_now = parse_last_played_text("Just now").expect("expected timestamp");
        assert!(just_now <= now + 1);

        let three_days_ago = parse_last_played_text("3 days ago").expect("expected timestamp");
        let diff_days = now.saturating_sub(three_days_ago);
        assert!(diff_days >= 3 * 24 * 60 * 60 - 5);

        assert_eq!(parse_last_played_text("never"), None);
        assert_eq!(parse_last_played_text(""), None);
    }
}
