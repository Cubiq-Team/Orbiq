use std::collections::HashMap;
use std::env;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Mutex, OnceLock};
use std::time::Duration;

use base64::{engine::general_purpose::URL_SAFE_NO_PAD, Engine as _};
use keyring::Entry;
use rand::rngs::OsRng;
use rand::RngCore;
use reqwest::blocking::Client;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use sha2::{Digest, Sha256};

use crate::domain::{MicrosoftDeviceCodeStartResponse, MicrosoftOAuthStartResponse};
use crate::storage::unix_epoch_now;

const MICROSOFT_AUTHORITY_BASE: &str = "https://login.microsoftonline.com";
const XBOX_USER_AUTH_ENDPOINT: &str = "https://user.auth.xboxlive.com/user/authenticate";
const XBOX_XSTS_AUTH_ENDPOINT: &str = "https://xsts.auth.xboxlive.com/xsts/authorize";
const MINECRAFT_LOGIN_WITH_XBOX_ENDPOINT: &str =
    "https://api.minecraftservices.com/authentication/login_with_xbox";
const MINECRAFT_PROFILE_ENDPOINT: &str = "https://api.minecraftservices.com/minecraft/profile";
const KEYRING_SERVICE: &str = "orbiq.launcher.microsoft";
const CLIENT_ID_ENV: &str = "ORBIQ_MS_CLIENT_ID";
const REDIRECT_URI_ENV: &str = "ORBIQ_MS_REDIRECT_URI";
const TENANT_ENV: &str = "ORBIQ_MS_TENANT";
const DEFAULT_CLIENT_ID: &str = "04b07795-8ddb-461a-bbee-02f9e1bf7b46";
const DEFAULT_REDIRECT_URI: &str = "orbiq://auth-callback";
const DEFAULT_TENANT: &str = "common";
const DEFAULT_SCOPES: [&str; 5] = [
    "XboxLive.signin",
    "XboxLive.offline_access",
    "offline_access",
    "openid",
    "profile",
];
const BLOCKED_FIRST_PARTY_CLIENT_IDS: [&str; 3] =
    [DEFAULT_CLIENT_ID, "00000000402b5328", "000000004c12ae6f"];
const OAUTH_SESSION_TTL_SECONDS: u64 = 10 * 60;
const OAUTH_CODE_REPLAY_WINDOW_SECONDS: u64 = 15 * 60;
const CLOCK_SKEW_PAST_SECONDS: u64 = 120;
const CLOCK_SKEW_FUTURE_SECONDS: u64 = 300;

static DEVICE_CODE_SESSIONS: OnceLock<Mutex<HashMap<String, DeviceCodeSession>>> = OnceLock::new();
static OAUTH_SESSIONS: OnceLock<Mutex<HashMap<String, MicrosoftOAuthSession>>> = OnceLock::new();
static USED_OAUTH_CODES: OnceLock<Mutex<HashMap<String, u64>>> = OnceLock::new();
static SESSION_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Debug, Clone)]
pub struct MicrosoftIdentity {
    pub account_id: String,
    pub display_name: String,
    pub email: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MicrosoftTokenRecord {
    pub access_token: String,
    pub refresh_token: Option<String>,
    pub token_type: Option<String>,
    pub scope: String,
    pub expires_at_epoch: Option<u64>,
    pub client_id: String,
}

#[derive(Debug, Clone)]
pub struct MinecraftLaunchIdentity {
    pub player_name: String,
    pub player_uuid: String,
    pub access_token: String,
    pub xuid: Option<String>,
}

#[derive(Debug, Clone)]
pub enum DeviceCodePollOutcome {
    Pending {
        next_poll_after_seconds: u32,
    },
    Authorized {
        identity: MicrosoftIdentity,
        token: MicrosoftTokenRecord,
    },
    Denied {
        reason: String,
    },
    Expired {
        reason: String,
    },
}

#[derive(Debug, Clone)]
struct DeviceCodeSession {
    device_code: String,
    client_id: String,
    scope: String,
    interval_seconds: u32,
    expires_at_epoch: u64,
}

#[derive(Debug, Clone)]
struct MicrosoftOAuthSession {
    client_id: String,
    scope: String,
    redirect_uri: String,
    code_verifier: String,
    nonce: String,
    expires_at_epoch: u64,
}

#[derive(Debug, Deserialize)]
struct DeviceCodeApiResponse {
    #[serde(alias = "deviceCode")]
    device_code: String,
    #[serde(alias = "userCode")]
    user_code: String,
    #[serde(alias = "verificationUri")]
    verification_uri: String,
    #[serde(alias = "verificationUriComplete")]
    verification_uri_complete: Option<String>,
    #[serde(alias = "expiresIn")]
    expires_in: u32,
    interval: Option<u32>,
    message: String,
}

#[derive(Debug, Deserialize)]
struct TokenSuccessResponse {
    access_token: String,
    refresh_token: Option<String>,
    token_type: Option<String>,
    expires_in: Option<u32>,
    scope: Option<String>,
    id_token: Option<String>,
}

#[derive(Debug, Deserialize)]
struct TokenErrorResponse {
    error: String,
    error_description: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "PascalCase")]
struct XboxAuthResponse {
    token: String,
    display_claims: Option<XboxDisplayClaims>,
}

#[derive(Debug, Deserialize)]
struct XboxDisplayClaims {
    #[serde(default)]
    xui: Vec<XboxUserClaims>,
}

#[derive(Debug, Deserialize)]
struct XboxUserClaims {
    uhs: Option<String>,
    xid: Option<String>,
}

#[derive(Debug, Deserialize)]
struct MinecraftLoginResponse {
    access_token: String,
}

#[derive(Debug, Deserialize)]
struct MinecraftProfileResponse {
    id: String,
    name: String,
}

fn sessions() -> &'static Mutex<HashMap<String, DeviceCodeSession>> {
    DEVICE_CODE_SESSIONS.get_or_init(|| Mutex::new(HashMap::new()))
}

fn oauth_sessions() -> &'static Mutex<HashMap<String, MicrosoftOAuthSession>> {
    OAUTH_SESSIONS.get_or_init(|| Mutex::new(HashMap::new()))
}

fn used_oauth_codes() -> &'static Mutex<HashMap<String, u64>> {
    USED_OAUTH_CODES.get_or_init(|| Mutex::new(HashMap::new()))
}

fn oauth_code_fingerprint(code: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(code.trim().as_bytes());
    format!("{:x}", hasher.finalize())
}

fn mark_oauth_code_used(code: &str) -> Result<(), String> {
    let now = unix_epoch_now();
    let min_valid_epoch = now.saturating_sub(OAUTH_CODE_REPLAY_WINDOW_SECONDS);
    let fingerprint = oauth_code_fingerprint(code);
    let mut map = used_oauth_codes()
        .lock()
        .map_err(|_| "oauth used-code lock poisoned".to_string())?;
    map.retain(|_, epoch| *epoch >= min_valid_epoch);
    map.insert(fingerprint, now);
    Ok(())
}

fn ensure_oauth_code_not_replayed(code: &str) -> Result<(), String> {
    let now = unix_epoch_now();
    let min_valid_epoch = now.saturating_sub(OAUTH_CODE_REPLAY_WINDOW_SECONDS);
    let fingerprint = oauth_code_fingerprint(code);
    let mut map = used_oauth_codes()
        .lock()
        .map_err(|_| "oauth used-code lock poisoned".to_string())?;
    map.retain(|_, epoch| *epoch >= min_valid_epoch);
    if map.contains_key(&fingerprint) {
        return Err("oauth authorization code was already used; start sign-in again".to_string());
    }
    Ok(())
}

fn build_http_client() -> Result<Client, String> {
    Client::builder()
        .timeout(Duration::from_secs(20))
        .build()
        .map_err(|err| format!("failed to build HTTP client: {}", err))
}

fn parse_error_body(status: reqwest::StatusCode, body: &str) -> String {
    if let Ok(err) = serde_json::from_str::<TokenErrorResponse>(body) {
        if let Some(desc) = err.error_description {
            return format!("{} ({}): {}", err.error, status.as_u16(), desc);
        }
        return format!("{} ({})", err.error, status.as_u16());
    }

    let trimmed = body.trim();
    if trimmed.is_empty() {
        format!("http {} with empty response body", status.as_u16())
    } else {
        format!("http {}: {}", status.as_u16(), trimmed)
    }
}

fn resolve_client_id(override_client_id: Option<String>) -> String {
    let from_request = override_client_id.unwrap_or_default().trim().to_string();
    if !from_request.is_empty() {
        return from_request;
    }

    let from_env = env::var(CLIENT_ID_ENV)
        .unwrap_or_default()
        .trim()
        .to_string();
    if !from_env.is_empty() {
        return from_env;
    }

    String::new()
}

fn resolve_scope(scopes: Option<Vec<String>>) -> String {
    match scopes {
        Some(values) => {
            let filtered = values
                .into_iter()
                .map(|item| item.trim().to_string())
                .filter(|item| !item.is_empty())
                .collect::<Vec<_>>();
            if filtered.is_empty() {
                DEFAULT_SCOPES.join(" ")
            } else {
                filtered.join(" ")
            }
        }
        None => DEFAULT_SCOPES.join(" "),
    }
}

fn resolve_tenant() -> String {
    let tenant = env::var(TENANT_ENV)
        .unwrap_or_default()
        .trim()
        .trim_matches('/')
        .to_string();
    if tenant.is_empty() {
        DEFAULT_TENANT.to_string()
    } else {
        tenant
    }
}

fn build_microsoft_oauth_endpoint(endpoint: &str) -> String {
    let tenant = resolve_tenant();
    format!(
        "{}/{}/oauth2/v2.0/{}",
        MICROSOFT_AUTHORITY_BASE, tenant, endpoint
    )
}

fn ensure_oauth_client_id_allowed(client_id: &str) -> Result<(), String> {
    if client_id.trim().is_empty() {
        return Err(
            "Microsoft OAuth requires ORBIQ_MS_CLIENT_ID. Set it in .env and restart launcher."
                .to_string(),
        );
    }
    if !is_guid_client_id(client_id) {
        return Err(
            "ORBIQ_MS_CLIENT_ID must be your Azure Application (client) ID in GUID format."
                .to_string(),
        );
    }
    if BLOCKED_FIRST_PARTY_CLIENT_IDS
        .iter()
        .any(|blocked| blocked.eq_ignore_ascii_case(client_id.trim()))
    {
        return Err(
            "Microsoft OAuth requires your own Azure App Client ID. Set ORBIQ_MS_CLIENT_ID \
             (and optionally ORBIQ_MS_REDIRECT_URI=orbiq://auth-callback) and try again."
                .to_string(),
        );
    }
    Ok(())
}

fn ensure_device_client_id_allowed(client_id: &str) -> Result<(), String> {
    if client_id.trim().is_empty() {
        return Err(
            "Microsoft sign-in requires ORBIQ_MS_CLIENT_ID. Set it in .env and restart launcher."
                .to_string(),
        );
    }
    if !is_guid_client_id(client_id) {
        return Err(
            "ORBIQ_MS_CLIENT_ID must be your Azure Application (client) ID in GUID format."
                .to_string(),
        );
    }
    if BLOCKED_FIRST_PARTY_CLIENT_IDS
        .iter()
        .any(|blocked| blocked.eq_ignore_ascii_case(client_id.trim()))
    {
        return Err(
            "First-party Microsoft client IDs are not allowed for this launcher. \
             Configure your own ORBIQ_MS_CLIENT_ID in .env."
                .to_string(),
        );
    }
    Ok(())
}

fn resolve_redirect_uri(override_redirect_uri: Option<String>) -> String {
    let from_request = override_redirect_uri.unwrap_or_default().trim().to_string();
    if !from_request.is_empty() {
        return from_request;
    }

    let from_env = env::var(REDIRECT_URI_ENV)
        .unwrap_or_default()
        .trim()
        .to_string();
    if !from_env.is_empty() {
        return from_env;
    }

    DEFAULT_REDIRECT_URI.to_string()
}

fn is_guid_client_id(client_id: &str) -> bool {
    let value = client_id.trim().as_bytes();
    if value.len() != 36 {
        return false;
    }
    for (index, byte) in value.iter().enumerate() {
        let separator_index = index == 8 || index == 13 || index == 18 || index == 23;
        if separator_index {
            if *byte != b'-' {
                return false;
            }
            continue;
        }
        if !byte.is_ascii_hexdigit() {
            return false;
        }
    }
    true
}

fn random_token_urlsafe(bytes_len: usize) -> String {
    let mut bytes = vec![0u8; bytes_len];
    OsRng.fill_bytes(&mut bytes);
    URL_SAFE_NO_PAD.encode(bytes)
}

fn generate_pkce_verifier(len: usize) -> String {
    let alphabet = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    let target_len = len.clamp(43, 128);
    let mut out = String::with_capacity(target_len);
    let mut random = vec![0u8; target_len];
    OsRng.fill_bytes(&mut random);
    for byte in random {
        let index = (byte as usize) % alphabet.len();
        out.push(alphabet[index] as char);
    }
    out
}

fn pkce_code_challenge(verifier: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(verifier.as_bytes());
    let digest = hasher.finalize();
    URL_SAFE_NO_PAD.encode(digest)
}

fn next_session_id() -> String {
    let suffix = SESSION_COUNTER.fetch_add(1, Ordering::Relaxed);
    format!("msdc-{}-{}", unix_epoch_now(), suffix)
}

fn remove_session(session_id: &str) {
    if let Ok(mut map) = sessions().lock() {
        map.remove(session_id);
    }
}

fn consume_oauth_session(state: &str) -> Result<MicrosoftOAuthSession, String> {
    let mut map = oauth_sessions()
        .lock()
        .map_err(|_| "oauth session lock poisoned".to_string())?;
    let session = map.remove(state).ok_or_else(|| {
        "oauth session not found; please start Microsoft sign-in again".to_string()
    })?;
    if unix_epoch_now() >= session.expires_at_epoch {
        return Err("oauth session expired; please start Microsoft sign-in again".to_string());
    }
    Ok(session)
}

fn parse_token_error(body: &str) -> TokenErrorResponse {
    serde_json::from_str::<TokenErrorResponse>(body).unwrap_or(TokenErrorResponse {
        error: "unknown_error".to_string(),
        error_description: Some(body.trim().to_string()),
    })
}

fn parse_identity(id_token: Option<&str>) -> MicrosoftIdentity {
    let Some(raw_token) = id_token else {
        return MicrosoftIdentity {
            account_id: "microsoft-user".to_string(),
            display_name: "Microsoft User".to_string(),
            email: None,
        };
    };

    let payload = raw_token.split('.').nth(1).unwrap_or_default();
    let decoded = decode_base64url(payload).unwrap_or_default();
    let claims = serde_json::from_slice::<Value>(&decoded).unwrap_or(Value::Null);

    let preferred_username = claims
        .get("preferred_username")
        .and_then(Value::as_str)
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    let email = claims
        .get("email")
        .and_then(Value::as_str)
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    let name = claims
        .get("name")
        .and_then(Value::as_str)
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());

    let account_id = claims
        .get("oid")
        .and_then(Value::as_str)
        .or_else(|| claims.get("sub").and_then(Value::as_str))
        .or_else(|| preferred_username.as_deref())
        .or_else(|| email.as_deref())
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .unwrap_or("microsoft-user")
        .to_string();

    let display_name = name
        .or_else(|| preferred_username.clone())
        .or_else(|| email.clone())
        .unwrap_or_else(|| "Microsoft User".to_string());

    MicrosoftIdentity {
        account_id,
        display_name,
        email: preferred_username.or(email),
    }
}

fn parse_id_token_claims(raw_token: &str) -> Result<Value, String> {
    let payload = raw_token.split('.').nth(1).unwrap_or_default();
    if payload.trim().is_empty() {
        return Err("id token payload is missing".to_string());
    }
    let decoded = decode_base64url(payload)
        .ok_or_else(|| "id token payload is invalid base64url".to_string())?;
    serde_json::from_slice::<Value>(&decoded)
        .map_err(|err| format!("failed to parse id token claims: {}", err))
}

fn claim_i64(claims: &Value, key: &str) -> Option<i64> {
    let value = claims.get(key)?;
    if let Some(num) = value.as_i64() {
        return Some(num);
    }
    value
        .as_str()
        .and_then(|text| text.trim().parse::<i64>().ok())
}

fn claim_string<'a>(claims: &'a Value, key: &str) -> Option<&'a str> {
    claims.get(key).and_then(Value::as_str).map(str::trim)
}

fn validate_oauth_id_token(
    session: &MicrosoftOAuthSession,
    id_token: Option<&str>,
) -> Result<(), String> {
    let raw = id_token
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .ok_or_else(|| "oauth response did not include id_token".to_string())?;
    let claims = parse_id_token_claims(raw)?;
    let now = unix_epoch_now() as i64;

    let nonce = claim_string(&claims, "nonce").unwrap_or_default();
    if nonce.is_empty() || nonce != session.nonce {
        return Err("oauth id token nonce mismatch; sign-in was not accepted".to_string());
    }

    if let Some(aud_value) = claims.get("aud") {
        let valid_aud = if let Some(aud) = aud_value.as_str() {
            aud.trim().eq_ignore_ascii_case(session.client_id.as_str())
        } else if let Some(list) = aud_value.as_array() {
            list.iter().any(|item| {
                item.as_str()
                    .map(|value| {
                        value
                            .trim()
                            .eq_ignore_ascii_case(session.client_id.as_str())
                    })
                    .unwrap_or(false)
            })
        } else {
            false
        };
        if !valid_aud {
            return Err("oauth id token audience mismatch".to_string());
        }
    }

    if let Some(exp) = claim_i64(&claims, "exp") {
        if exp < now.saturating_sub(CLOCK_SKEW_PAST_SECONDS as i64) {
            return Err("oauth id token is expired; start sign-in again".to_string());
        }
    }
    if let Some(nbf) = claim_i64(&claims, "nbf") {
        if nbf > now.saturating_add(CLOCK_SKEW_FUTURE_SECONDS as i64) {
            return Err("oauth id token is not valid yet; check system clock".to_string());
        }
    }
    if let Some(iat) = claim_i64(&claims, "iat") {
        if iat > now.saturating_add(CLOCK_SKEW_FUTURE_SECONDS as i64) {
            return Err(
                "oauth id token issued-at is in the future; check system clock".to_string(),
            );
        }
    }

    Ok(())
}

fn parse_service_error(status: reqwest::StatusCode, body: &str) -> String {
    let parsed = serde_json::from_str::<Value>(body).ok();
    if let Some(json) = parsed {
        let code = json
            .get("error")
            .and_then(Value::as_str)
            .or_else(|| json.get("code").and_then(Value::as_str))
            .unwrap_or("error");
        let message = json
            .get("error_description")
            .and_then(Value::as_str)
            .or_else(|| json.get("errorMessage").and_then(Value::as_str))
            .or_else(|| json.get("message").and_then(Value::as_str))
            .or_else(|| json.get("Message").and_then(Value::as_str))
            .unwrap_or("");
        let xerr = json
            .get("XErr")
            .and_then(Value::as_i64)
            .map(|value| value.to_string());
        if !message.is_empty() {
            if let Some(xerr_value) = xerr {
                return format!(
                    "{} ({}): {} [XErr={}]",
                    code,
                    status.as_u16(),
                    message,
                    xerr_value
                );
            }
            return format!("{} ({}): {}", code, status.as_u16(), message);
        }
        if let Some(xerr_value) = xerr {
            return format!("{} ({}) [XErr={}]", code, status.as_u16(), xerr_value);
        }
    }
    parse_error_body(status, body)
}

fn is_invalid_app_registration_error(message: &str) -> bool {
    let lower = message.to_ascii_lowercase();
    lower.contains("invalid app registration") || lower.contains("aka.ms/appreginfo")
}

fn invalid_app_registration_guidance(client_id_hint: Option<&str>) -> String {
    let mut message =
        "Minecraft Services rejected this Azure App ID (403 Invalid app registration). \
This is a Microsoft/Mojang app-registration approval issue. Submit your app for review: \
https://aka.ms/mce-reviewappid"
            .to_string();
    if let Some(client_id) = client_id_hint {
        let trimmed = client_id.trim();
        if !trimmed.is_empty() {
            message.push_str(&format!(" (client_id={})", trimmed));
        }
    }
    message
}

fn is_refreshable_minecraft_auth_error(message: &str) -> bool {
    let lower = message.to_ascii_lowercase();
    if is_invalid_app_registration_error(message) {
        return false;
    }
    lower.contains("unauthorized")
        || lower.contains("invalid token")
        || lower.contains("token expired")
        || lower.contains("expired_token")
        || lower.contains("access denied")
        || lower.contains("invalid_grant")
}

fn xbox_user_authenticate(
    ms_access_token: &str,
) -> Result<(String, String, Option<String>), String> {
    let client = build_http_client()?;
    let response = client
        .post(XBOX_USER_AUTH_ENDPOINT)
        .header("x-xbl-contract-version", "1")
        .json(&json!({
            "Properties": {
                "AuthMethod": "RPS",
                "SiteName": "user.auth.xboxlive.com",
                "RpsTicket": format!("d={}", ms_access_token),
            },
            "RelyingParty": "http://auth.xboxlive.com",
            "TokenType": "JWT"
        }))
        .send()
        .map_err(|err| format!("failed to authenticate with Xbox Live: {}", err))?;
    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Xbox Live authentication response: {}", err))?;
    if !status.is_success() {
        return Err(format!(
            "xbox live authentication failed: {}",
            parse_service_error(status, &body)
        ));
    }

    let parsed = serde_json::from_str::<XboxAuthResponse>(&body)
        .map_err(|err| format!("failed to parse Xbox Live authentication response: {}", err))?;
    let user_claim = parsed
        .display_claims
        .as_ref()
        .and_then(|claims| claims.xui.first());
    let user_hash = user_claim
        .and_then(|claim| claim.uhs.as_ref())
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty())
        .ok_or_else(|| "xbox live response missing user hash".to_string())?;
    let xuid = user_claim
        .and_then(|claim| claim.xid.as_ref())
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    Ok((parsed.token, user_hash, xuid))
}

fn xbox_xsts_authorize(user_token: &str) -> Result<(String, String, Option<String>), String> {
    let client = build_http_client()?;
    let response = client
        .post(XBOX_XSTS_AUTH_ENDPOINT)
        .header("x-xbl-contract-version", "1")
        .json(&json!({
            "Properties": {
                "SandboxId": "RETAIL",
                "UserTokens": [user_token],
            },
            "RelyingParty": "rp://api.minecraftservices.com/",
            "TokenType": "JWT"
        }))
        .send()
        .map_err(|err| format!("failed to authorize Xbox XSTS token: {}", err))?;
    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Xbox XSTS response: {}", err))?;
    if !status.is_success() {
        return Err(format!(
            "xbox xsts authorization failed: {}",
            parse_service_error(status, &body)
        ));
    }

    let parsed = serde_json::from_str::<XboxAuthResponse>(&body)
        .map_err(|err| format!("failed to parse Xbox XSTS response: {}", err))?;
    let user_claim = parsed
        .display_claims
        .as_ref()
        .and_then(|claims| claims.xui.first());
    let user_hash = user_claim
        .and_then(|claim| claim.uhs.as_ref())
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty())
        .ok_or_else(|| "xbox xsts response missing user hash".to_string())?;
    let xuid = user_claim
        .and_then(|claim| claim.xid.as_ref())
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    Ok((parsed.token, user_hash, xuid))
}

fn minecraft_login_with_xbox(identity_token: &str) -> Result<String, String> {
    let client = build_http_client()?;
    let response = client
        .post(MINECRAFT_LOGIN_WITH_XBOX_ENDPOINT)
        .json(&json!({
            "identityToken": identity_token
        }))
        .send()
        .map_err(|err| format!("failed to authenticate with Minecraft services: {}", err))?;
    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Minecraft authentication response: {}", err))?;
    if !status.is_success() {
        return Err(format!(
            "minecraft services authentication failed: {}",
            parse_service_error(status, &body)
        ));
    }

    let parsed = serde_json::from_str::<MinecraftLoginResponse>(&body)
        .map_err(|err| format!("failed to parse Minecraft authentication response: {}", err))?;
    let token = parsed.access_token.trim().to_string();
    if token.is_empty() {
        return Err("minecraft services returned empty access token".to_string());
    }
    Ok(token)
}

fn fetch_minecraft_profile(mc_access_token: &str) -> Result<MinecraftProfileResponse, String> {
    let client = build_http_client()?;
    let response = client
        .get(MINECRAFT_PROFILE_ENDPOINT)
        .bearer_auth(mc_access_token)
        .send()
        .map_err(|err| format!("failed to request Minecraft profile: {}", err))?;
    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Minecraft profile response: {}", err))?;
    if !status.is_success() {
        if status == reqwest::StatusCode::NOT_FOUND {
            return Err(
                "minecraft profile not found; this Microsoft account likely does not own Minecraft: Java Edition"
                    .to_string(),
            );
        }
        if status == reqwest::StatusCode::UNAUTHORIZED {
            return Err(
                "minecraft profile request was unauthorized; please sign in again".to_string(),
            );
        }
        return Err(format!(
            "minecraft profile request failed: {}",
            parse_service_error(status, &body)
        ));
    }
    serde_json::from_str::<MinecraftProfileResponse>(&body)
        .map_err(|err| format!("failed to parse Minecraft profile response: {}", err))
}

fn resolve_minecraft_launch_identity_from_access_token(
    microsoft_access_token: &str,
    client_id_hint: Option<&str>,
) -> Result<MinecraftLaunchIdentity, String> {
    let access_token = microsoft_access_token.trim();
    if access_token.is_empty() {
        return Err("microsoft access token is missing".to_string());
    }

    let (xbl_token, _xbl_user_hash, xbl_xuid) = xbox_user_authenticate(access_token)?;
    let (xsts_token, xsts_user_hash, xsts_xuid) = xbox_xsts_authorize(&xbl_token)?;
    let identity_token = format!("XBL3.0 x={};{}", xsts_user_hash, xsts_token);
    let minecraft_access_token = match minecraft_login_with_xbox(&identity_token) {
        Ok(token) => token,
        Err(err) => {
            if is_invalid_app_registration_error(&err) {
                return Err(invalid_app_registration_guidance(client_id_hint));
            }
            return Err(err);
        }
    };
    let minecraft_profile = fetch_minecraft_profile(&minecraft_access_token)?;

    let player_name = minecraft_profile.name.trim().to_string();
    if player_name.is_empty() {
        return Err("minecraft profile name is empty".to_string());
    }
    let player_uuid = minecraft_profile.id.replace('-', "").trim().to_string();
    if player_uuid.len() != 32 {
        return Err("minecraft profile id is invalid".to_string());
    }

    Ok(MinecraftLaunchIdentity {
        player_name,
        player_uuid,
        access_token: minecraft_access_token,
        xuid: xsts_xuid.or(xbl_xuid),
    })
}

pub fn resolve_minecraft_launch_identity_from_ms_token(
    microsoft_access_token: &str,
    client_id_hint: Option<&str>,
) -> Result<MinecraftLaunchIdentity, String> {
    resolve_minecraft_launch_identity_from_access_token(microsoft_access_token, client_id_hint)
}

pub fn resolve_minecraft_launch_identity(
    profile_id: &str,
) -> Result<MinecraftLaunchIdentity, String> {
    let profile_key = profile_id.trim();
    if profile_key.is_empty() {
        return Err("profile id is required".to_string());
    }

    let mut microsoft_token = load_microsoft_token(profile_key)?
        .ok_or_else(|| "microsoft token is missing; please sign in again".to_string())?;
    let now = unix_epoch_now();
    if microsoft_token
        .expires_at_epoch
        .map(|value| value <= now.saturating_add(60))
        .unwrap_or(false)
    {
        microsoft_token = refresh_microsoft_token(profile_key)?;
    }

    let primary = resolve_minecraft_launch_identity_from_access_token(
        &microsoft_token.access_token,
        Some(microsoft_token.client_id.as_str()),
    );
    match primary {
        Ok(identity) => Ok(identity),
        Err(err) => {
            if !is_refreshable_minecraft_auth_error(&err) {
                return Err(err);
            }
            let refreshed = refresh_microsoft_token(profile_key)?;
            resolve_minecraft_launch_identity_from_access_token(
                &refreshed.access_token,
                Some(refreshed.client_id.as_str()),
            )
        }
    }
}

fn decode_base64url(input: &str) -> Option<Vec<u8>> {
    if input.is_empty() {
        return Some(Vec::new());
    }

    let mut normalized = input
        .chars()
        .filter(|ch| !ch.is_whitespace())
        .map(|ch| match ch {
            '-' => '+',
            '_' => '/',
            other => other,
        })
        .collect::<String>();

    let rem = normalized.len() % 4;
    if rem == 1 {
        return None;
    }
    if rem > 0 {
        normalized.push_str(&"=".repeat(4 - rem));
    }

    let mut out = Vec::with_capacity(normalized.len() * 3 / 4);
    let bytes = normalized.as_bytes();
    let mut i = 0usize;

    while i < bytes.len() {
        let a = decode_base64_char(bytes[i])?;
        let b = decode_base64_char(bytes[i + 1])?;

        let c_raw = bytes[i + 2];
        let d_raw = bytes[i + 3];
        let c_pad = c_raw == b'=';
        let d_pad = d_raw == b'=';

        let c = if c_pad { 0 } else { decode_base64_char(c_raw)? };
        let d = if d_pad { 0 } else { decode_base64_char(d_raw)? };

        out.push((a << 2) | (b >> 4));
        if !c_pad {
            out.push(((b & 0x0F) << 4) | (c >> 2));
        }
        if !d_pad {
            out.push(((c & 0x03) << 6) | d);
        }

        i += 4;
    }

    Some(out)
}

fn decode_base64_char(ch: u8) -> Option<u8> {
    match ch {
        b'A'..=b'Z' => Some(ch - b'A'),
        b'a'..=b'z' => Some(ch - b'a' + 26),
        b'0'..=b'9' => Some(ch - b'0' + 52),
        b'+' => Some(62),
        b'/' => Some(63),
        _ => None,
    }
}

pub fn start_microsoft_oauth_login(
    client_id: Option<String>,
    scopes: Option<Vec<String>>,
    redirect_uri: Option<String>,
) -> Result<MicrosoftOAuthStartResponse, String> {
    let resolved_client_id = resolve_client_id(client_id);
    ensure_oauth_client_id_allowed(&resolved_client_id)?;
    let scope = resolve_scope(scopes);
    let resolved_redirect_uri = resolve_redirect_uri(redirect_uri);
    let state = random_token_urlsafe(24);
    let nonce = random_token_urlsafe(24);
    let code_verifier = generate_pkce_verifier(64);
    let code_challenge = pkce_code_challenge(&code_verifier);
    let expires_at_epoch = unix_epoch_now().saturating_add(OAUTH_SESSION_TTL_SECONDS);

    {
        let mut map = oauth_sessions()
            .lock()
            .map_err(|_| "oauth session lock poisoned".to_string())?;
        map.insert(
            state.clone(),
            MicrosoftOAuthSession {
                client_id: resolved_client_id.clone(),
                scope: scope.clone(),
                redirect_uri: resolved_redirect_uri.clone(),
                code_verifier,
                nonce: nonce.clone(),
                expires_at_epoch,
            },
        );
    }

    let authorization_endpoint = build_microsoft_oauth_endpoint("authorize");
    let mut authorization_url = reqwest::Url::parse(authorization_endpoint.as_str())
        .map_err(|err| format!("failed to construct Microsoft authorize URL: {}", err))?;
    authorization_url
        .query_pairs_mut()
        .append_pair("client_id", resolved_client_id.as_str())
        .append_pair("response_type", "code")
        .append_pair("redirect_uri", resolved_redirect_uri.as_str())
        .append_pair("response_mode", "query")
        .append_pair("scope", scope.as_str())
        .append_pair("code_challenge", code_challenge.as_str())
        .append_pair("code_challenge_method", "S256")
        .append_pair("nonce", nonce.as_str())
        .append_pair("state", state.as_str());

    Ok(MicrosoftOAuthStartResponse {
        authorization_url: authorization_url.to_string(),
        state,
        expires_at_epoch,
    })
}

pub fn complete_microsoft_oauth_login(
    state: &str,
    code: &str,
) -> Result<(MicrosoftIdentity, MicrosoftTokenRecord), String> {
    let oauth_state = state.trim();
    if oauth_state.is_empty() {
        return Err("oauth state is required".to_string());
    }
    let authorization_code = code.trim();
    if authorization_code.is_empty() {
        return Err("oauth code is required".to_string());
    }
    ensure_oauth_code_not_replayed(authorization_code)?;

    let session = consume_oauth_session(oauth_state)?;
    let client = build_http_client()?;
    let token_endpoint = build_microsoft_oauth_endpoint("token");
    let response = client
        .post(token_endpoint.as_str())
        .form(&[
            ("grant_type", "authorization_code"),
            ("client_id", session.client_id.as_str()),
            ("code", authorization_code),
            ("redirect_uri", session.redirect_uri.as_str()),
            ("code_verifier", session.code_verifier.as_str()),
            ("scope", session.scope.as_str()),
        ])
        .send()
        .map_err(|err| format!("failed to exchange Microsoft oauth code: {}", err))?;

    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Microsoft oauth token response: {}", err))?;
    if !status.is_success() {
        return Err(format!(
            "microsoft oauth token exchange failed: {}",
            parse_error_body(status, &body)
        ));
    }

    let payload = serde_json::from_str::<TokenSuccessResponse>(&body)
        .map_err(|err| format!("failed to parse Microsoft oauth token response: {}", err))?;
    validate_oauth_id_token(&session, payload.id_token.as_deref())?;
    let expires_at_epoch = payload
        .expires_in
        .map(|seconds| unix_epoch_now().saturating_add(seconds as u64));
    let identity = parse_identity(payload.id_token.as_deref());
    let token = MicrosoftTokenRecord {
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
        token_type: payload.token_type,
        scope: payload.scope.unwrap_or(session.scope),
        expires_at_epoch,
        client_id: session.client_id,
    };
    mark_oauth_code_used(authorization_code)?;
    Ok((identity, token))
}

pub fn start_device_code_login(
    client_id: Option<String>,
    scopes: Option<Vec<String>>,
) -> Result<MicrosoftDeviceCodeStartResponse, String> {
    let client_id = resolve_client_id(client_id);
    ensure_device_client_id_allowed(&client_id)?;
    let scope = resolve_scope(scopes);
    let tenant = resolve_tenant();
    let client = build_http_client()?;
    let device_code_endpoint = build_microsoft_oauth_endpoint("devicecode");

    let response = client
        .post(device_code_endpoint.as_str())
        .form(&[("client_id", client_id.as_str()), ("scope", scope.as_str())])
        .send()
        .map_err(|err| format!("failed to request Microsoft device code: {}", err))?;

    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Microsoft device code response: {}", err))?;

    if !status.is_success() {
        return Err(parse_error_body(status, &body));
    }

    let payload = serde_json::from_str::<DeviceCodeApiResponse>(&body)
        .map_err(|err| format!("failed to parse Microsoft device code response: {}", err))?;

    let session_id = next_session_id();
    let interval_seconds = payload.interval.unwrap_or(5).max(1);
    let expires_at_epoch = unix_epoch_now().saturating_add(payload.expires_in as u64);

    {
        let mut map = sessions()
            .lock()
            .map_err(|_| "auth session lock poisoned".to_string())?;
        map.insert(
            session_id.clone(),
            DeviceCodeSession {
                device_code: payload.device_code.clone(),
                client_id: client_id.clone(),
                scope,
                interval_seconds,
                expires_at_epoch,
            },
        );
    }

    Ok(MicrosoftDeviceCodeStartResponse {
        session_id,
        verification_uri: payload.verification_uri,
        verification_uri_complete: payload.verification_uri_complete,
        user_code: payload.user_code,
        message: payload.message,
        interval_seconds,
        expires_at_epoch,
        client_id: Some(client_id),
        tenant: Some(tenant),
    })
}

pub fn poll_device_code_login_once(session_id: &str) -> Result<DeviceCodePollOutcome, String> {
    let session = {
        let map = sessions()
            .lock()
            .map_err(|_| "auth session lock poisoned".to_string())?;
        map.get(session_id)
            .cloned()
            .ok_or_else(|| "auth session not found".to_string())?
    };

    if unix_epoch_now() >= session.expires_at_epoch {
        remove_session(session_id);
        return Ok(DeviceCodePollOutcome::Expired {
            reason: "device code expired".to_string(),
        });
    }

    let client = build_http_client()?;
    let token_endpoint = build_microsoft_oauth_endpoint("token");
    let response = client
        .post(token_endpoint.as_str())
        .form(&[
            ("grant_type", "urn:ietf:params:oauth:grant-type:device_code"),
            ("client_id", session.client_id.as_str()),
            ("device_code", session.device_code.as_str()),
        ])
        .send()
        .map_err(|err| format!("failed to poll Microsoft token endpoint: {}", err))?;

    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Microsoft token response: {}", err))?;

    if status.is_success() {
        let payload = serde_json::from_str::<TokenSuccessResponse>(&body)
            .map_err(|err| format!("failed to parse Microsoft token response: {}", err))?;
        remove_session(session_id);

        let expires_at_epoch = payload
            .expires_in
            .map(|seconds| unix_epoch_now().saturating_add(seconds as u64));
        let identity = parse_identity(payload.id_token.as_deref());
        let token = MicrosoftTokenRecord {
            access_token: payload.access_token,
            refresh_token: payload.refresh_token,
            token_type: payload.token_type,
            scope: payload.scope.unwrap_or(session.scope),
            expires_at_epoch,
            client_id: session.client_id,
        };
        return Ok(DeviceCodePollOutcome::Authorized { identity, token });
    }

    let parsed_error = parse_token_error(&body);
    let error_code = parsed_error.error.to_lowercase();

    match error_code.as_str() {
        "authorization_pending" => Ok(DeviceCodePollOutcome::Pending {
            next_poll_after_seconds: session.interval_seconds,
        }),
        "slow_down" => {
            let next_interval = session.interval_seconds.saturating_add(5);
            if let Ok(mut map) = sessions().lock() {
                if let Some(current) = map.get_mut(session_id) {
                    current.interval_seconds = next_interval;
                }
            }
            Ok(DeviceCodePollOutcome::Pending {
                next_poll_after_seconds: next_interval,
            })
        }
        "authorization_declined" | "access_denied" => {
            remove_session(session_id);
            Ok(DeviceCodePollOutcome::Denied {
                reason: parsed_error
                    .error_description
                    .unwrap_or_else(|| "authorization declined".to_string()),
            })
        }
        "expired_token" | "bad_verification_code" => {
            remove_session(session_id);
            Ok(DeviceCodePollOutcome::Expired {
                reason: parsed_error
                    .error_description
                    .unwrap_or_else(|| "device code expired".to_string()),
            })
        }
        _ => Err(format!(
            "microsoft device code poll failed: {}",
            parse_error_body(status, &body)
        )),
    }
}

fn keyring_entry(profile_id: &str) -> Result<Entry, String> {
    Entry::new(KEYRING_SERVICE, profile_id)
        .map_err(|err| format!("failed to initialize keyring entry: {}", err))
}

pub fn store_microsoft_token(profile_id: &str, token: &MicrosoftTokenRecord) -> Result<(), String> {
    let entry = keyring_entry(profile_id)?;
    let payload = serde_json::to_string(token)
        .map_err(|err| format!("failed to serialize token payload: {}", err))?;
    entry
        .set_password(&payload)
        .map_err(|err| format!("failed to save token in keyring: {}", err))
}

pub fn load_microsoft_token(profile_id: &str) -> Result<Option<MicrosoftTokenRecord>, String> {
    let entry = keyring_entry(profile_id)?;
    match entry.get_password() {
        Ok(value) => serde_json::from_str::<MicrosoftTokenRecord>(&value)
            .map(Some)
            .map_err(|err| format!("failed to parse token from keyring: {}", err)),
        Err(keyring::Error::NoEntry) => Ok(None),
        Err(err) => Err(format!("failed to read token from keyring: {}", err)),
    }
}

pub fn clear_microsoft_token(profile_id: &str) -> Result<(), String> {
    let entry = keyring_entry(profile_id)?;
    match entry.delete_credential() {
        Ok(()) | Err(keyring::Error::NoEntry) => Ok(()),
        Err(err) => Err(format!("failed to clear token from keyring: {}", err)),
    }
}

pub fn refresh_microsoft_token(profile_id: &str) -> Result<MicrosoftTokenRecord, String> {
    let existing = load_microsoft_token(profile_id)?
        .ok_or_else(|| "token not found for profile".to_string())?;
    let refresh_token = existing
        .refresh_token
        .clone()
        .ok_or_else(|| "refresh token is missing for this profile".to_string())?;

    let client = build_http_client()?;
    let token_endpoint = build_microsoft_oauth_endpoint("token");
    let response = client
        .post(token_endpoint.as_str())
        .form(&[
            ("grant_type", "refresh_token"),
            ("client_id", existing.client_id.as_str()),
            ("refresh_token", refresh_token.as_str()),
            ("scope", existing.scope.as_str()),
        ])
        .send()
        .map_err(|err| format!("failed to refresh Microsoft token: {}", err))?;

    let status = response.status();
    let body = response
        .text()
        .map_err(|err| format!("failed to read Microsoft refresh response: {}", err))?;

    if !status.is_success() {
        return Err(parse_error_body(status, &body));
    }

    let parsed = serde_json::from_str::<TokenSuccessResponse>(&body)
        .map_err(|err| format!("failed to parse Microsoft refresh response: {}", err))?;

    let refreshed = MicrosoftTokenRecord {
        access_token: parsed.access_token,
        refresh_token: parsed.refresh_token.or(existing.refresh_token),
        token_type: parsed.token_type.or(existing.token_type),
        scope: parsed.scope.unwrap_or(existing.scope),
        expires_at_epoch: parsed
            .expires_in
            .map(|seconds| unix_epoch_now().saturating_add(seconds as u64))
            .or(existing.expires_at_epoch),
        client_id: existing.client_id,
    };

    store_microsoft_token(profile_id, &refreshed)?;
    Ok(refreshed)
}

#[cfg(test)]
mod tests {
    use base64::{engine::general_purpose::URL_SAFE_NO_PAD, Engine as _};
    use serde_json::json;
    use std::thread;

    use super::{
        consume_oauth_session, decode_base64url, ensure_oauth_code_not_replayed,
        mark_oauth_code_used, oauth_sessions, parse_identity, unix_epoch_now,
        validate_oauth_id_token, MicrosoftOAuthSession,
    };

    #[test]
    fn decode_base64url_handles_paddingless_payload() {
        let value = decode_base64url("eyJmb28iOiJiYXIifQ").expect("expected payload");
        let text = String::from_utf8(value).expect("utf8");
        assert_eq!(text, r#"{"foo":"bar"}"#);
    }

    #[test]
    fn parse_identity_reads_common_claims() {
        let id_token = "x.eyJvaWQiOiJhYmMtMTIzIiwibmFtZSI6IkRyZWFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZHJlYW1Ab3V0bG9vay5jb20ifQ.x";
        let identity = parse_identity(Some(id_token));

        assert_eq!(identity.account_id, "abc-123");
        assert_eq!(identity.display_name, "Dream");
        assert_eq!(identity.email.as_deref(), Some("dream@outlook.com"));
    }

    #[test]
    fn validate_oauth_id_token_checks_nonce_and_audience() {
        let now = unix_epoch_now() as i64;
        let claims = json!({
            "nonce": "nonce-123",
            "aud": "client-123",
            "exp": now + 600,
            "iat": now - 5
        });
        let payload = URL_SAFE_NO_PAD.encode(claims.to_string().as_bytes());
        let token = format!("x.{}.y", payload);

        let session = MicrosoftOAuthSession {
            client_id: "client-123".to_string(),
            scope: "openid profile".to_string(),
            redirect_uri: "orbiq://auth-callback".to_string(),
            code_verifier: "verifier".to_string(),
            nonce: "nonce-123".to_string(),
            expires_at_epoch: unix_epoch_now() + 600,
        };

        assert!(validate_oauth_id_token(&session, Some(token.as_str())).is_ok());
    }

    #[test]
    fn validate_oauth_id_token_rejects_nonce_mismatch() {
        let now = unix_epoch_now() as i64;
        let claims = json!({
            "nonce": "nonce-abc",
            "aud": "client-xyz",
            "exp": now + 600,
            "iat": now
        });
        let payload = URL_SAFE_NO_PAD.encode(claims.to_string().as_bytes());
        let token = format!("x.{}.y", payload);
        let session = MicrosoftOAuthSession {
            client_id: "client-xyz".to_string(),
            scope: "openid profile".to_string(),
            redirect_uri: "orbiq://auth-callback".to_string(),
            code_verifier: "verifier".to_string(),
            nonce: "nonce-wrong".to_string(),
            expires_at_epoch: unix_epoch_now() + 600,
        };

        let err = validate_oauth_id_token(&session, Some(token.as_str()))
            .expect_err("expected nonce mismatch");
        assert!(err.to_ascii_lowercase().contains("nonce"));
    }

    #[test]
    fn oauth_code_replay_guard_blocks_reuse() {
        let code = format!("test-code-{}-{}", std::process::id(), unix_epoch_now());
        ensure_oauth_code_not_replayed(&code).expect("first usage should be allowed");
        mark_oauth_code_used(&code).expect("mark should succeed");
        let err = ensure_oauth_code_not_replayed(&code).expect_err("replay should be blocked");
        assert!(err.to_ascii_lowercase().contains("already used"));
    }

    #[test]
    fn oauth_session_consume_allows_only_single_winner_under_race() {
        let state = format!("race-state-{}-{}", std::process::id(), unix_epoch_now());
        let session = MicrosoftOAuthSession {
            client_id: "client-race".to_string(),
            scope: "openid profile".to_string(),
            redirect_uri: "orbiq://auth-callback".to_string(),
            code_verifier: "verifier-race".to_string(),
            nonce: "nonce-race".to_string(),
            expires_at_epoch: unix_epoch_now() + 60,
        };

        {
            let mut map = oauth_sessions().lock().expect("oauth lock");
            map.insert(state.clone(), session);
        }

        let mut handles = Vec::new();
        for _ in 0..8 {
            let state_clone = state.clone();
            handles.push(thread::spawn(move || {
                consume_oauth_session(&state_clone).is_ok()
            }));
        }

        let mut success_count = 0usize;
        for handle in handles {
            if handle.join().expect("thread join") {
                success_count += 1;
            }
        }

        assert_eq!(
            success_count, 1,
            "exactly one thread should consume the oauth session"
        );
    }

    #[test]
    fn oauth_session_consume_rejects_expired_session() {
        let state = format!("expired-state-{}-{}", std::process::id(), unix_epoch_now());
        {
            let mut map = oauth_sessions().lock().expect("oauth lock");
            map.insert(
                state.clone(),
                MicrosoftOAuthSession {
                    client_id: "client-expired".to_string(),
                    scope: "openid profile".to_string(),
                    redirect_uri: "orbiq://auth-callback".to_string(),
                    code_verifier: "verifier-expired".to_string(),
                    nonce: "nonce-expired".to_string(),
                    expires_at_epoch: unix_epoch_now().saturating_sub(5),
                },
            );
        }

        let err = consume_oauth_session(&state).expect_err("expired session must fail");
        assert!(err.to_ascii_lowercase().contains("expired"));
    }
}
