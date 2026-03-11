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
pub struct DeployServerRequest {
    pub name: String,
    pub version: String,
    pub server_type: String,
    pub ram_gb: u8,
    pub host: String,
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
