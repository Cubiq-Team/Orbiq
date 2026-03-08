use std::cmp::Ordering;
use std::collections::{HashMap, HashSet};
use std::fs::{self, File, OpenOptions};
use std::io::{Cursor, Read};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::thread;
use std::time::Duration;

use rayon::prelude::*;
use reqwest::blocking::Client;
use reqwest::header::{HeaderMap, HeaderValue, RANGE, USER_AGENT};
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use sha1::{Digest, Sha1};

use crate::java_runtime::get_java_runtime_info as detect_java_runtime_info;

const VERSION_MANIFEST_INDEX_URL: &str =
    "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";
const FABRIC_GAME_INDEX_URL: &str = "https://meta.fabricmc.net/v2/versions/game";
const FABRIC_LOADER_INDEX_URL: &str = "https://meta.fabricmc.net/v2/versions/loader/{mc}";
const FABRIC_PROFILE_URL: &str =
    "https://meta.fabricmc.net/v2/versions/loader/{mc}/{loader}/profile/json";
const QUILT_GAME_INDEX_URL: &str = "https://meta.quiltmc.org/v3/versions/game";
const QUILT_LOADER_INDEX_URL: &str = "https://meta.quiltmc.org/v3/versions/loader/{mc}";
const QUILT_PROFILE_URL: &str =
    "https://meta.quiltmc.org/v3/versions/loader/{mc}/{loader}/profile/json";
const FORGE_PROMOTIONS_URL: &str =
    "https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json";
const FORGE_MAVEN_METADATA_URL: &str =
    "https://maven.minecraftforge.net/net/minecraftforge/forge/maven-metadata.xml";
const FORGE_INSTALLER_URL: &str =
    "https://maven.minecraftforge.net/net/minecraftforge/forge/{mc}-{forge}/forge-{mc}-{forge}-installer.jar";
const NEOFORGE_MAVEN_METADATA_URL: &str =
    "https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml";
const NEOFORGE_INSTALLER_URL: &str = "https://maven.neoforged.net/releases/net/neoforged/neoforge/{neo}/neoforge-{neo}-installer.jar";
const ASSET_OBJECTS_BASE_URL: &str = "https://resources.download.minecraft.net";
const DEFAULT_RETRIES: u8 = 3;
const DEFAULT_CONCURRENCY: usize = 4;

#[derive(Debug, Clone)]
pub(crate) struct ProvisionStats {
    pub(crate) downloaded_files: u32,
    pub(crate) skipped_files: u32,
    pub(crate) libraries_downloaded: u32,
    pub(crate) assets_downloaded: u32,
}

#[derive(Debug, Clone)]
pub(crate) struct ProvisionOutcome {
    pub(crate) stats: ProvisionStats,
    pub(crate) launch_args: Vec<String>,
    pub(crate) launch_version_id: String,
    pub(crate) working_dir: String,
}

#[derive(Debug, Clone)]
pub(crate) struct ProvisionProgressUpdate {
    pub(crate) phase: String,
    pub(crate) message: String,
    pub(crate) completed: Option<u32>,
    pub(crate) total: Option<u32>,
}

#[derive(Debug, Clone)]
pub(crate) struct LaunchAuthContext {
    pub(crate) player_name: String,
    pub(crate) player_uuid: String,
    pub(crate) access_token: String,
    pub(crate) xuid: Option<String>,
    pub(crate) user_type: String,
}

#[derive(Debug, Clone, Copy)]
enum DownloadOutcome {
    Downloaded,
    Skipped,
}

#[derive(Debug, Clone)]
struct DownloadJob {
    url: String,
    destination: PathBuf,
    expected_sha1: Option<String>,
}

#[derive(Debug, Deserialize)]
struct VersionManifestIndex {
    versions: Vec<VersionManifestEntry>,
}

#[derive(Debug, Deserialize)]
struct VersionManifestEntry {
    id: String,
    url: String,
    sha1: Option<String>,
    #[serde(rename = "type")]
    kind: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct VersionDetails {
    downloads: VersionDownloads,
    asset_index: AssetIndexRef,
    libraries: Vec<VersionLibrary>,
}

#[derive(Debug, Deserialize)]
struct VersionDownloads {
    client: DownloadDescriptor,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct AssetIndexRef {
    id: String,
    url: String,
    sha1: Option<String>,
}

#[derive(Debug, Deserialize)]
struct VersionLibrary {
    downloads: Option<VersionLibraryDownloads>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct VersionLibraryDownloads {
    artifact: Option<DownloadDescriptor>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct DownloadDescriptor {
    url: String,
    sha1: Option<String>,
    path: Option<String>,
}

#[derive(Debug, Deserialize)]
struct AssetIndex {
    objects: HashMap<String, AssetIndexObject>,
}

#[derive(Debug, Deserialize)]
struct AssetIndexObject {
    hash: String,
}

#[derive(Debug, Deserialize)]
struct LoaderChannelInfo {
    loader: LoaderInfo,
}

#[derive(Debug, Deserialize)]
struct LoaderInfo {
    version: String,
}

#[derive(Debug, Deserialize)]
struct LoaderGameVersionInfo {
    #[serde(default, alias = "game")]
    version: String,
    #[serde(default)]
    stable: Option<bool>,
    #[serde(default, rename = "type")]
    channel: Option<String>,
}

#[derive(Debug, Deserialize)]
struct ForgePromotions {
    promos: HashMap<String, String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct LaunchVersionProfile {
    id: String,
    #[serde(default)]
    inherits_from: Option<String>,
    #[serde(default)]
    main_class: Option<String>,
    #[serde(default)]
    minecraft_arguments: Option<String>,
    #[serde(default)]
    arguments: Option<LaunchArguments>,
    #[serde(default)]
    libraries: Vec<LaunchVersionLibrary>,
    #[serde(default)]
    assets: Option<String>,
    #[serde(default)]
    asset_index: Option<LaunchAssetIndexRef>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct LaunchAssetIndexRef {
    id: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct LaunchVersionLibrary {
    #[serde(default)]
    name: Option<String>,
    #[serde(default)]
    url: Option<String>,
    #[serde(default)]
    downloads: Option<VersionLibraryDownloads>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct LaunchArguments {
    #[serde(default)]
    game: Vec<LaunchArgument>,
    #[serde(default)]
    jvm: Vec<LaunchArgument>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(untagged)]
enum LaunchArgument {
    Text(String),
    Conditional(ConditionalLaunchArgument),
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct ConditionalLaunchArgument {
    value: serde_json::Value,
    #[serde(default)]
    rules: Vec<LaunchRule>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct LaunchRule {
    action: String,
    #[serde(default)]
    os: Option<LaunchRuleOs>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
struct LaunchRuleOs {
    #[serde(default)]
    name: Option<String>,
}

#[derive(Clone)]
struct HttpDownloadService {
    client: Client,
}

impl HttpDownloadService {
    fn new() -> Result<Self, String> {
        let mut headers = HeaderMap::new();
        headers.insert(USER_AGENT, HeaderValue::from_static("orbiq-launcher/0.1"));
        let client = Client::builder()
            .default_headers(headers)
            .connect_timeout(Duration::from_secs(20))
            .timeout(Duration::from_secs(180))
            .build()
            .map_err(|err| format!("failed to initialize http client: {}", err))?;
        Ok(Self { client })
    }

    fn get_json<T: DeserializeOwned>(&self, url: &str) -> Result<T, String> {
        let response = self
            .client
            .get(url)
            .send()
            .map_err(|err| format!("request failed for '{}': {}", url, err))?;
        let response = response
            .error_for_status()
            .map_err(|err| format!("request returned error for '{}': {}", url, err))?;
        response
            .json::<T>()
            .map_err(|err| format!("failed to parse json from '{}': {}", url, err))
    }

    fn get_text(&self, url: &str) -> Result<String, String> {
        let response = self
            .client
            .get(url)
            .send()
            .map_err(|err| format!("request failed for '{}': {}", url, err))?;
        let response = response
            .error_for_status()
            .map_err(|err| format!("request returned error for '{}': {}", url, err))?;
        response
            .text()
            .map_err(|err| format!("failed to read text from '{}': {}", url, err))
    }

    fn get_bytes(&self, url: &str) -> Result<Vec<u8>, String> {
        let response = self
            .client
            .get(url)
            .send()
            .map_err(|err| format!("request failed for '{}': {}", url, err))?;
        let response = response
            .error_for_status()
            .map_err(|err| format!("request returned error for '{}': {}", url, err))?;
        response
            .bytes()
            .map(|bytes| bytes.to_vec())
            .map_err(|err| format!("failed to read bytes from '{}': {}", url, err))
    }

    fn download_with_retry(
        &self,
        url: &str,
        destination: &Path,
        expected_sha1: Option<&str>,
        force_redownload: bool,
        retries: u8,
    ) -> Result<DownloadOutcome, String> {
        if force_redownload {
            fs::remove_file(destination).ok();
            fs::remove_file(part_path_for(destination)).ok();
        }

        if destination.exists() {
            if let Some(expected) = expected_sha1 {
                if file_sha1(destination)?
                    .eq_ignore_ascii_case(expected.trim().to_ascii_lowercase().as_str())
                {
                    return Ok(DownloadOutcome::Skipped);
                }
                fs::remove_file(destination)
                    .map_err(|err| format!("failed to reset invalid destination file: {}", err))?;
            } else {
                return Ok(DownloadOutcome::Skipped);
            }
        }

        for attempt in 0..=retries {
            match self.download_once(url, destination, expected_sha1) {
                Ok(result) => return Ok(result),
                Err(err) if attempt < retries => {
                    let backoff_ms = 200_u64.saturating_mul((attempt as u64) + 1);
                    thread::sleep(Duration::from_millis(backoff_ms));
                    if attempt + 1 == retries {
                        fs::remove_file(part_path_for(destination)).ok();
                    }
                    let _ = err;
                }
                Err(err) => return Err(err),
            }
        }

        Err("download failed after retries".to_string())
    }

    fn download_once(
        &self,
        url: &str,
        destination: &Path,
        expected_sha1: Option<&str>,
    ) -> Result<DownloadOutcome, String> {
        let parent = destination
            .parent()
            .ok_or_else(|| "invalid destination path".to_string())?;
        fs::create_dir_all(parent)
            .map_err(|err| format!("failed to create destination directory: {}", err))?;

        let part_path = part_path_for(destination);
        let existing_len = fs::metadata(&part_path).map(|meta| meta.len()).unwrap_or(0);

        let mut request = self.client.get(url);
        if existing_len > 0 {
            request = request.header(RANGE, format!("bytes={}-", existing_len));
        }

        let mut response = request
            .send()
            .map_err(|err| format!("request failed for '{}': {}", url, err))?;

        let status = response.status();
        if status.as_u16() == 416 {
            fs::remove_file(&part_path).ok();
            response = self
                .client
                .get(url)
                .send()
                .map_err(|err| format!("retry request failed for '{}': {}", url, err))?;
        }

        let status = response.status();
        if !status.is_success() {
            return Err(format!("download failed for '{}': status {}", url, status));
        }

        let should_append = existing_len > 0 && status.as_u16() == 206;
        let mut file = if should_append {
            OpenOptions::new()
                .append(true)
                .open(&part_path)
                .map_err(|err| format!("failed to open partial file for append: {}", err))?
        } else {
            File::create(&part_path)
                .map_err(|err| format!("failed to open partial file for write: {}", err))?
        };

        response
            .copy_to(&mut file)
            .map_err(|err| format!("failed to write response body: {}", err))?;

        if let Some(expected) = expected_sha1 {
            let actual = file_sha1(&part_path)?;
            if !actual.eq_ignore_ascii_case(expected.trim()) {
                fs::remove_file(&part_path).ok();
                return Err(format!(
                    "checksum mismatch for '{}': expected {}, got {}",
                    destination.display(),
                    expected,
                    actual
                ));
            }
        }

        if destination.exists() {
            fs::remove_file(destination)
                .map_err(|err| format!("failed to replace existing destination file: {}", err))?;
        }
        fs::rename(&part_path, destination)
            .map_err(|err| format!("failed to finalize downloaded file: {}", err))?;
        Ok(DownloadOutcome::Downloaded)
    }
}

fn part_path_for(path: &Path) -> PathBuf {
    path.with_extension("part")
}

fn file_sha1(path: &Path) -> Result<String, String> {
    let mut file = File::open(path).map_err(|err| {
        format!(
            "failed to open file for checksum '{}': {}",
            path.display(),
            err
        )
    })?;
    let mut hasher = Sha1::new();
    let mut buffer = [0_u8; 8192];

    loop {
        let read = file.read(&mut buffer).map_err(|err| {
            format!(
                "failed to read file for checksum '{}': {}",
                path.display(),
                err
            )
        })?;
        if read == 0 {
            break;
        }
        hasher.update(&buffer[..read]);
    }

    Ok(format!("{:x}", hasher.finalize()))
}

fn asset_object_destination(runtime_root: &Path, hash: &str) -> Option<PathBuf> {
    if hash.len() < 2 {
        return None;
    }
    let prefix = &hash[0..2];
    Some(
        runtime_root
            .join("assets")
            .join("objects")
            .join(prefix)
            .join(hash),
    )
}

fn build_library_jobs(runtime_root: &Path, libraries: &[VersionLibrary]) -> Vec<DownloadJob> {
    libraries
        .iter()
        .filter_map(|library| library.downloads.as_ref())
        .filter_map(|downloads| downloads.artifact.as_ref())
        .filter_map(|artifact| {
            artifact.path.as_ref().map(|path| DownloadJob {
                url: artifact.url.clone(),
                destination: runtime_root.join("libraries").join(path),
                expected_sha1: artifact.sha1.clone(),
            })
        })
        .collect()
}

fn build_asset_jobs(runtime_root: &Path, asset_index: &AssetIndex) -> Vec<DownloadJob> {
    asset_index
        .objects
        .values()
        .filter_map(|object| {
            asset_object_destination(runtime_root, &object.hash).map(|destination| {
                let prefix = &object.hash[0..2];
                DownloadJob {
                    url: format!("{}/{}/{}", ASSET_OBJECTS_BASE_URL, prefix, object.hash),
                    destination,
                    expected_sha1: Some(object.hash.clone()),
                }
            })
        })
        .collect()
}

fn emit_progress<F>(
    on_progress: &mut F,
    phase: &str,
    message: &str,
    completed: Option<u32>,
    total: Option<u32>,
) where
    F: FnMut(ProvisionProgressUpdate),
{
    on_progress(ProvisionProgressUpdate {
        phase: phase.to_string(),
        message: message.to_string(),
        completed,
        total,
    });
}

fn run_download_jobs<F>(
    service: &HttpDownloadService,
    jobs: &[DownloadJob],
    force_redownload: bool,
    retries: u8,
    concurrency: usize,
    phase: &str,
    on_progress: &mut F,
) -> Result<(u32, u32), String>
where
    F: FnMut(ProvisionProgressUpdate),
{
    if jobs.is_empty() {
        emit_progress(on_progress, phase, "No files to download", Some(0), Some(0));
        return Ok((0, 0));
    }

    let pool = rayon::ThreadPoolBuilder::new()
        .num_threads(concurrency.max(1))
        .build()
        .map_err(|err| format!("failed to build download thread pool: {}", err))?;

    let mut downloaded = 0_u32;
    let mut skipped = 0_u32;
    let mut failures = Vec::new();
    let total_jobs = jobs.len() as u32;
    let batch_size = (concurrency.max(1) * 8).max(8);
    let mut processed = 0_u32;

    emit_progress(
        on_progress,
        phase,
        "Starting downloads...",
        Some(processed),
        Some(total_jobs),
    );

    for chunk in jobs.chunks(batch_size) {
        let chunk_results = pool.install(|| {
            chunk
                .par_iter()
                .map(|job| {
                    service
                        .download_with_retry(
                            &job.url,
                            &job.destination,
                            job.expected_sha1.as_deref(),
                            force_redownload,
                            retries,
                        )
                        .map_err(|err| format!("{}: {}", job.destination.display(), err))
                })
                .collect::<Vec<_>>()
        });

        for result in chunk_results {
            match result {
                Ok(DownloadOutcome::Downloaded) => downloaded += 1,
                Ok(DownloadOutcome::Skipped) => skipped += 1,
                Err(err) => failures.push(err),
            }
        }

        processed = processed.saturating_add(chunk.len() as u32).min(total_jobs);
        emit_progress(
            on_progress,
            phase,
            "Downloading...",
            Some(processed),
            Some(total_jobs),
        );
    }

    if !failures.is_empty() {
        let sample = failures.into_iter().take(3).collect::<Vec<_>>().join("; ");
        return Err(format!("one or more downloads failed: {}", sample));
    }

    Ok((downloaded, skipped))
}

fn load_json_from_file<T: DeserializeOwned>(path: &Path) -> Result<T, String> {
    let content = fs::read_to_string(path)
        .map_err(|err| format!("failed to read json file '{}': {}", path.display(), err))?;
    serde_json::from_str(&content)
        .map_err(|err| format!("failed to parse json file '{}': {}", path.display(), err))
}

fn normalize_loader(value: &str) -> String {
    let normalized = value.trim().to_ascii_lowercase();
    if normalized.is_empty() {
        "vanilla".to_string()
    } else {
        normalized
    }
}

fn parse_release_version_parts(value: &str) -> Option<Vec<u32>> {
    let mut parts = Vec::new();
    for item in value.trim().split('.') {
        if item.is_empty() || !item.chars().all(|ch| ch.is_ascii_digit()) {
            return None;
        }
        parts.push(item.parse::<u32>().ok()?);
    }
    if parts.is_empty() {
        None
    } else {
        Some(parts)
    }
}

fn compare_release_parts(left: &[u32], right: &[u32]) -> Ordering {
    let max_len = left.len().max(right.len());
    for index in 0..max_len {
        let l = left.get(index).copied().unwrap_or(0);
        let r = right.get(index).copied().unwrap_or(0);
        match l.cmp(&r) {
            Ordering::Equal => continue,
            non_eq => return non_eq,
        }
    }
    Ordering::Equal
}

fn parse_neoforge_release_parts(value: &str) -> Option<Vec<u32>> {
    let core = value.trim().split('-').next()?.trim();
    parse_release_version_parts(core)
}

fn rank_mc_versions_for_fallback(
    requested_version: &str,
    versions: &[String],
    max_count: usize,
) -> Vec<String> {
    if versions.is_empty() {
        return Vec::new();
    }

    let mut dedup = HashSet::<String>::new();
    let mut parsed = versions
        .iter()
        .filter_map(|version| {
            let clean = version.trim();
            if clean.is_empty() || !dedup.insert(clean.to_string()) {
                return None;
            }
            parse_release_version_parts(clean).map(|parts| (clean.to_string(), parts))
        })
        .collect::<Vec<_>>();

    parsed.sort_by(|left, right| compare_release_parts(&right.1, &left.1));

    let requested = match parse_release_version_parts(requested_version) {
        Some(parts) => parts,
        None => {
            return parsed
                .into_iter()
                .map(|(version, _)| version)
                .take(max_count.max(1))
                .collect();
        }
    };

    let mut same_minor_older = Vec::new();
    let mut same_minor_newer = Vec::new();
    let mut older = Vec::new();
    let mut newer = Vec::new();
    let req_major = requested.get(0).copied().unwrap_or(0);
    let req_minor = requested.get(1).copied().unwrap_or(0);

    for (version, parts) in parsed {
        let major = parts.get(0).copied().unwrap_or(0);
        let minor = parts.get(1).copied().unwrap_or(0);
        let cmp = compare_release_parts(&parts, &requested);
        if major == req_major && minor == req_minor {
            if cmp == Ordering::Greater {
                same_minor_newer.push(version);
            } else {
                same_minor_older.push(version);
            }
        } else if cmp == Ordering::Greater {
            newer.push(version);
        } else {
            older.push(version);
        }
    }

    same_minor_older
        .into_iter()
        .chain(same_minor_newer)
        .chain(older)
        .chain(newer)
        .take(max_count.max(1))
        .collect()
}

fn is_release_game_version(entry: &LoaderGameVersionInfo) -> bool {
    if entry.stable == Some(false) {
        return false;
    }
    if let Some(channel) = entry.channel.as_ref() {
        let normalized = channel.trim().to_ascii_lowercase();
        if !normalized.is_empty() && normalized != "release" {
            return false;
        }
    }
    true
}

pub(crate) fn list_minecraft_versions(
    include_snapshots: bool,
    limit: Option<usize>,
) -> Result<Vec<String>, String> {
    let service = HttpDownloadService::new()?;
    let manifest: VersionManifestIndex = service.get_json(VERSION_MANIFEST_INDEX_URL)?;
    let max_items = limit.unwrap_or(250).max(1);
    let mut seen = HashSet::<String>::new();
    let mut versions = Vec::new();

    for entry in manifest.versions {
        let is_snapshot = entry
            .kind
            .as_ref()
            .map(|kind| kind.trim().eq_ignore_ascii_case("snapshot"))
            .unwrap_or(false);
        if !include_snapshots && is_snapshot {
            continue;
        }
        let id = entry.id.trim();
        if id.is_empty() || !seen.insert(id.to_string()) {
            continue;
        }
        versions.push(id.to_string());
        if versions.len() >= max_items {
            break;
        }
    }

    if versions.is_empty() {
        return Err("no Minecraft versions returned from official manifest".to_string());
    }

    Ok(versions)
}

fn sort_unique_release_versions(values: Vec<String>, limit: usize) -> Vec<String> {
    let mut seen = HashSet::<String>::new();
    let mut parsed = values
        .into_iter()
        .filter_map(|value| {
            let clean = value.trim().to_string();
            if clean.is_empty() || !seen.insert(clean.clone()) {
                return None;
            }
            parse_release_version_parts(&clean).map(|parts| (clean, parts))
        })
        .collect::<Vec<_>>();
    parsed.sort_by(|left, right| compare_release_parts(&right.1, &left.1));
    parsed
        .into_iter()
        .map(|(value, _)| value)
        .take(limit.max(1))
        .collect()
}

fn unique_non_empty_limit(values: Vec<String>, limit: usize) -> Vec<String> {
    let mut seen = HashSet::<String>::new();
    values
        .into_iter()
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
        .filter(|item| seen.insert(item.clone()))
        .take(limit.max(1))
        .collect()
}

fn list_fabric_supported_versions(
    service: &HttpDownloadService,
    include_snapshots: bool,
    limit: usize,
) -> Result<Vec<String>, String> {
    let game_versions: Vec<LoaderGameVersionInfo> = service.get_json(FABRIC_GAME_INDEX_URL)?;
    let versions = game_versions
        .into_iter()
        .filter(|item| include_snapshots || is_release_game_version(item))
        .map(|item| item.version.trim().to_string())
        .collect::<Vec<_>>();
    Ok(sort_unique_release_versions(versions, limit))
}

fn list_quilt_supported_versions(
    service: &HttpDownloadService,
    include_snapshots: bool,
    limit: usize,
) -> Result<Vec<String>, String> {
    let game_versions: Vec<LoaderGameVersionInfo> = service.get_json(QUILT_GAME_INDEX_URL)?;
    let versions = game_versions
        .into_iter()
        .filter(|item| include_snapshots || is_release_game_version(item))
        .map(|item| item.version.trim().to_string())
        .collect::<Vec<_>>();
    Ok(sort_unique_release_versions(versions, limit))
}

pub(crate) fn list_loader_supported_versions(
    loader: &str,
    include_snapshots: bool,
    limit: Option<usize>,
) -> Result<Vec<String>, String> {
    let max_items = limit.unwrap_or(250).max(1);
    let normalized = normalize_loader(loader);
    if normalized == "vanilla" {
        return list_minecraft_versions(include_snapshots, Some(max_items));
    }

    let service = HttpDownloadService::new()?;
    let mut versions = match normalized.as_str() {
        "fabric" => list_fabric_supported_versions(&service, include_snapshots, max_items)?,
        "quilt" => list_quilt_supported_versions(&service, include_snapshots, max_items)?,
        "forge" => {
            let promotions: ForgePromotions = service.get_json(FORGE_PROMOTIONS_URL)?;
            let rows = collect_forge_game_versions(&promotions);
            sort_unique_release_versions(rows, max_items)
        }
        "neoforge" => {
            let metadata = service.get_text(NEOFORGE_MAVEN_METADATA_URL)?;
            let neo_versions = collect_maven_versions_from_metadata(&metadata);
            let mapped = neo_versions
                .into_iter()
                .filter_map(|neo| {
                    let parts = parse_neoforge_release_parts(&neo)?;
                    if parts.len() < 2 {
                        return None;
                    }
                    Some(format!("1.{}.{}", parts[0], parts[1]))
                })
                .collect::<Vec<_>>();
            sort_unique_release_versions(mapped, max_items)
        }
        other => return Err(format!("unsupported loader '{}'", other)),
    };

    if versions.is_empty() {
        versions = list_minecraft_versions(false, Some(max_items)).unwrap_or_default();
    }
    if versions.is_empty() {
        return Err(format!(
            "no supported versions were found for loader '{}'",
            normalized
        ));
    }
    versions.truncate(max_items);
    Ok(versions)
}

fn list_fabric_loader_versions(
    service: &HttpDownloadService,
    game_version: &str,
    limit: usize,
) -> Result<Vec<String>, String> {
    let index_url = FABRIC_LOADER_INDEX_URL.replace("{mc}", game_version.trim());
    let channels: Vec<LoaderChannelInfo> = service.get_json(&index_url)?;
    let versions = channels
        .into_iter()
        .map(|item| item.loader.version.trim().to_string())
        .collect::<Vec<_>>();
    Ok(unique_non_empty_limit(versions, limit))
}

fn list_quilt_loader_versions(
    service: &HttpDownloadService,
    game_version: &str,
    limit: usize,
) -> Result<Vec<String>, String> {
    let index_url = QUILT_LOADER_INDEX_URL.replace("{mc}", game_version.trim());
    let channels: Vec<LoaderChannelInfo> = service.get_json(&index_url)?;
    let versions = channels
        .into_iter()
        .map(|item| item.loader.version.trim().to_string())
        .collect::<Vec<_>>();
    Ok(unique_non_empty_limit(versions, limit))
}

fn list_forge_loader_versions(
    service: &HttpDownloadService,
    game_version: &str,
    limit: usize,
) -> Result<Vec<String>, String> {
    let target = game_version.trim();
    if target.is_empty() {
        return Err("minecraft game version is required".to_string());
    }

    let promotions: ForgePromotions = service.get_json(FORGE_PROMOTIONS_URL)?;
    let mut values = Vec::<String>::new();
    for key in [
        format!("{}-latest", target),
        format!("{}-recommended", target),
    ] {
        if let Some(value) = promotions.promos.get(&key) {
            let clean = value.trim().to_string();
            if !clean.is_empty() {
                values.push(clean);
            }
        }
    }

    let metadata = service.get_text(FORGE_MAVEN_METADATA_URL)?;
    let builds = collect_maven_versions_from_metadata(&metadata)
        .into_iter()
        .filter_map(|value| {
            value
                .strip_prefix(&(target.to_string() + "-"))
                .map(str::to_string)
        })
        .collect::<Vec<_>>();
    values.extend(builds);

    let unique_values = unique_non_empty_limit(values, limit.saturating_mul(3));
    let mut parsed = unique_values
        .clone()
        .into_iter()
        .filter_map(|value| parse_release_version_parts(&value).map(|parts| (value, parts)))
        .collect::<Vec<_>>();
    if parsed.is_empty() {
        return Ok(unique_non_empty_limit(unique_values, limit));
    }
    parsed.sort_by(|left, right| compare_release_parts(&right.1, &left.1));

    let rows = parsed
        .into_iter()
        .map(|(value, _)| value)
        .take(limit.max(1))
        .collect::<Vec<_>>();
    Ok(rows)
}

fn list_neoforge_loader_versions(
    service: &HttpDownloadService,
    game_version: &str,
    limit: usize,
) -> Result<Vec<String>, String> {
    let metadata = service.get_text(NEOFORGE_MAVEN_METADATA_URL)?;
    let all_versions = collect_maven_versions_from_metadata(&metadata);
    if all_versions.is_empty() {
        return Err("NeoForge metadata did not contain installable versions".to_string());
    }

    let requested = parse_release_version_parts(game_version.trim())
        .ok_or_else(|| format!("invalid minecraft version '{}'", game_version.trim()))?;
    if requested.len() < 3 || requested[0] != 1 {
        return Err(format!(
            "unsupported minecraft version '{}' for NeoForge",
            game_version.trim()
        ));
    }
    let target_minor = requested[1];
    let target_patch = requested[2];

    let mut compatible = all_versions
        .iter()
        .filter_map(|version| {
            let parts = parse_neoforge_release_parts(version)?;
            if parts.len() < 2 {
                return None;
            }
            if parts[0] != target_minor || parts[1] != target_patch {
                return None;
            }
            Some((version.to_string(), parts))
        })
        .collect::<Vec<_>>();
    compatible.sort_by(|left, right| compare_release_parts(&right.1, &left.1));

    if compatible.is_empty() {
        let ranked = rank_neoforge_versions_for_game_version(game_version, &all_versions, limit);
        return Ok(unique_non_empty_limit(ranked, limit));
    }

    Ok(compatible
        .into_iter()
        .map(|(value, _)| value)
        .take(limit.max(1))
        .collect())
}

pub(crate) fn list_loader_versions(
    loader: &str,
    game_version: &str,
    limit: Option<usize>,
) -> Result<Vec<String>, String> {
    let max_items = limit.unwrap_or(250).max(1);
    let normalized = normalize_loader(loader);
    if normalized == "vanilla" {
        return Ok(Vec::new());
    }
    let game = game_version.trim();
    if game.is_empty() {
        return Err("minecraft game version is required".to_string());
    }

    let service = HttpDownloadService::new()?;
    let versions = match normalized.as_str() {
        "fabric" => list_fabric_loader_versions(&service, game, max_items)?,
        "quilt" => list_quilt_loader_versions(&service, game, max_items)?,
        "forge" => list_forge_loader_versions(&service, game, max_items)?,
        "neoforge" => list_neoforge_loader_versions(&service, game, max_items)?,
        other => return Err(format!("unsupported loader '{}'", other)),
    };
    Ok(versions)
}

fn parse_maven_coordinate_path(coordinate: &str) -> Option<String> {
    let mut ext = "jar".to_string();
    let mut base = coordinate.trim().to_string();
    if let Some((left, right)) = coordinate.split_once('@') {
        base = left.trim().to_string();
        let candidate = right.trim();
        if !candidate.is_empty() {
            ext = candidate.to_string();
        }
    }

    let parts = base.split(':').map(|item| item.trim()).collect::<Vec<_>>();
    if parts.len() < 3 {
        return None;
    }
    let group = parts[0].replace('.', "/");
    let artifact = parts[1];
    let version = parts[2];
    let classifier = if parts.len() > 3 && !parts[3].is_empty() {
        format!("-{}", parts[3])
    } else {
        String::new()
    };

    Some(format!(
        "{}/{}/{}/{}-{}{}.{}",
        group, artifact, version, artifact, version, classifier, ext
    ))
}

fn library_identity_key(library: &LaunchVersionLibrary) -> String {
    if let Some(name) = library.name.as_ref() {
        let parts = name.split(':').map(|item| item.trim()).collect::<Vec<_>>();
        if parts.len() >= 2 {
            let group = parts[0];
            let artifact = parts[1];
            if !group.is_empty() && !artifact.is_empty() {
                let classifier = if parts.len() >= 4 {
                    parts[3]
                        .split_once('@')
                        .map(|(left, _)| left.trim())
                        .unwrap_or(parts[3])
                } else {
                    ""
                };
                if classifier.is_empty() {
                    return format!("{}:{}", group, artifact);
                }
                return format!("{}:{}:{}", group, artifact, classifier);
            }
        }
    }

    library
        .downloads
        .as_ref()
        .and_then(|item| item.artifact.as_ref())
        .and_then(|item| item.path.as_ref())
        .map(|item| item.replace('\\', "/"))
        .filter(|item| !item.trim().is_empty())
        .or_else(|| {
            library
                .name
                .as_ref()
                .map(|item| item.trim().to_string())
                .filter(|item| !item.is_empty())
        })
        .or_else(|| {
            library
                .downloads
                .as_ref()
                .and_then(|item| item.artifact.as_ref())
                .map(|item| item.url.trim().to_string())
                .filter(|item| !item.is_empty())
        })
        .unwrap_or_else(|| "lib-unknown".to_string())
}

fn library_base_url(library: &LaunchVersionLibrary) -> String {
    let base_url = library
        .url
        .as_ref()
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| "https://libraries.minecraft.net/".to_string());
    if base_url.ends_with('/') {
        base_url
    } else {
        format!("{}/", base_url)
    }
}

fn build_library_job_from_launch_library(
    runtime_root: &Path,
    library: &LaunchVersionLibrary,
) -> Option<DownloadJob> {
    if let Some(downloads) = library.downloads.as_ref() {
        if let Some(artifact) = downloads.artifact.as_ref() {
            if let Some(path) = artifact.path.as_ref() {
                let relative = path.trim().trim_start_matches('/').to_string();
                if relative.is_empty() {
                    return None;
                }
                let direct_url = artifact.url.trim();
                let url = if !direct_url.is_empty() {
                    direct_url.to_string()
                } else {
                    format!("{}{}", library_base_url(library), relative)
                };
                return Some(DownloadJob {
                    url,
                    destination: runtime_root.join("libraries").join(relative),
                    expected_sha1: artifact.sha1.clone(),
                });
            }
        }
    }

    let coordinate = library.name.as_ref()?;
    let relative = parse_maven_coordinate_path(coordinate)?;
    let base = library_base_url(library);
    Some(DownloadJob {
        url: format!("{}{}", base, relative),
        destination: runtime_root.join("libraries").join(relative),
        expected_sha1: None,
    })
}

fn build_loader_library_jobs(
    runtime_root: &Path,
    libraries: &[LaunchVersionLibrary],
) -> Vec<DownloadJob> {
    libraries
        .iter()
        .filter_map(|library| build_library_job_from_launch_library(runtime_root, library))
        .collect()
}

fn write_profile_json(
    runtime_root: &Path,
    profile: &LaunchVersionProfile,
) -> Result<PathBuf, String> {
    let profile_dir = runtime_root.join("versions").join(&profile.id);
    fs::create_dir_all(&profile_dir).map_err(|err| {
        format!(
            "failed to create profile directory '{}': {}",
            profile_dir.display(),
            err
        )
    })?;
    let profile_path = profile_dir.join(format!("{}.json", profile.id));
    let serialized = serde_json::to_string_pretty(profile)
        .map_err(|err| format!("failed to serialize launch profile json: {}", err))?;
    fs::write(&profile_path, serialized).map_err(|err| {
        format!(
            "failed to write launch profile '{}': {}",
            profile_path.display(),
            err
        )
    })?;
    Ok(profile_path)
}

fn extract_zip_text_entry(bytes: &[u8], expected_name: &str) -> Result<String, String> {
    let reader = Cursor::new(bytes);
    let mut archive = zip::ZipArchive::new(reader)
        .map_err(|err| format!("failed to open installer archive: {}", err))?;
    for index in 0..archive.len() {
        let mut entry = archive
            .by_index(index)
            .map_err(|err| format!("failed to read installer entry: {}", err))?;
        let name = entry.name().to_string();
        if name.eq_ignore_ascii_case(expected_name) || name.ends_with(expected_name) {
            let mut body = String::new();
            entry
                .read_to_string(&mut body)
                .map_err(|err| format!("failed to read '{}': {}", name, err))?;
            return Ok(body);
        }
    }
    Err(format!(
        "installer archive does not contain '{}'",
        expected_name
    ))
}

fn normalize_forge_coordinate(version: &str, inherits_from: Option<&str>) -> Option<String> {
    let value = version.trim();
    if value.is_empty() {
        return None;
    }
    if value.contains('-') {
        return Some(value.to_string());
    }
    let parent = inherits_from.unwrap_or("").trim();
    if parent.is_empty() {
        return Some(value.to_string());
    }
    Some(format!("{}-{}", parent, value))
}

fn detect_forge_installer_coordinate(profile: &LaunchVersionProfile) -> Option<String> {
    let profile_id = profile.id.trim();
    if !profile_id.is_empty() {
        if let Some((mc_version, forge_version)) = profile_id.split_once("-forge-") {
            let mc = mc_version.trim();
            let forge = forge_version.trim();
            if !mc.is_empty() && !forge.is_empty() {
                return Some(format!("{}-{}", mc, forge));
            }
        }
        if let Some(id_tail) = profile_id.strip_prefix("forge-") {
            if let Some(coord) =
                normalize_forge_coordinate(id_tail, profile.inherits_from.as_deref())
            {
                return Some(coord);
            }
        }
    }

    for library in &profile.libraries {
        if let Some(name) = library.name.as_ref() {
            let parts = name.split(':').map(|item| item.trim()).collect::<Vec<_>>();
            if parts.len() >= 3 && parts[0] == "net.minecraftforge" && parts[1] == "forge" {
                if let Some(coord) =
                    normalize_forge_coordinate(parts[2], profile.inherits_from.as_deref())
                {
                    return Some(coord);
                }
            }
        }

        let relative = library
            .downloads
            .as_ref()
            .and_then(|item| item.artifact.as_ref())
            .and_then(|item| item.path.as_ref())
            .map(|item| item.replace('\\', "/"));
        if let Some(path) = relative {
            let segments = path.split('/').collect::<Vec<_>>();
            if segments.len() >= 4
                && segments[0] == "net"
                && segments[1] == "minecraftforge"
                && segments[2] == "forge"
            {
                let candidate = segments[3].trim();
                if !candidate.is_empty() {
                    return Some(candidate.to_string());
                }
            }
        }
    }
    None
}

#[derive(Debug, Clone)]
struct ForgeGeneratedTarget {
    destination: PathBuf,
    expected_sha1: Option<String>,
}

fn parse_launch_argument_value(items: &[String], key: &str) -> Option<String> {
    if items.len() < 2 {
        return None;
    }
    for index in 0..items.len().saturating_sub(1) {
        if items[index] == key {
            let value = items[index + 1].trim();
            if !value.is_empty() {
                return Some(value.to_string());
            }
        }
    }
    None
}

fn parse_forge_mcp_runtime_id(profile: &LaunchVersionProfile) -> Option<String> {
    let game_args = profile
        .arguments
        .as_ref()
        .map(|arguments| evaluate_launch_arguments(&arguments.game))
        .unwrap_or_default();
    let mcp = parse_launch_argument_value(&game_args, "--fml.mcpVersion")?;
    let mc_version = parse_launch_argument_value(&game_args, "--fml.mcVersion")
        .or_else(|| profile.inherits_from.clone())
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty())?;
    if mcp.contains('-') {
        return Some(mcp);
    }
    Some(format!("{}-{}", mc_version, mcp))
}

fn forge_generated_targets(
    runtime_root: &Path,
    profile: &LaunchVersionProfile,
) -> Vec<ForgeGeneratedTarget> {
    let mut targets = Vec::<ForgeGeneratedTarget>::new();
    let mut seen = HashSet::<String>::new();

    for library in &profile.libraries {
        let artifact = match library
            .downloads
            .as_ref()
            .and_then(|item| item.artifact.as_ref())
        {
            Some(value) => value,
            None => continue,
        };
        let relative = artifact
            .path
            .as_deref()
            .map(|value| value.trim().trim_start_matches('/').replace('\\', "/"))
            .unwrap_or_default();
        if relative.is_empty() {
            continue;
        }
        let direct_url = artifact.url.trim();
        if !direct_url.is_empty() {
            continue;
        }
        if !seen.insert(relative.clone()) {
            continue;
        }
        targets.push(ForgeGeneratedTarget {
            destination: runtime_root.join("libraries").join(relative),
            expected_sha1: artifact.sha1.clone(),
        });
    }

    if let Some(mcp_runtime_id) = parse_forge_mcp_runtime_id(profile) {
        let client_relative_prefix = format!("net/minecraft/client/{}", mcp_runtime_id);
        let generated_relatives = [
            format!(
                "{}/client-{}-srg.jar",
                client_relative_prefix, mcp_runtime_id
            ),
            format!(
                "{}/client-{}-extra.jar",
                client_relative_prefix, mcp_runtime_id
            ),
        ];
        for relative in generated_relatives {
            if !seen.insert(relative.clone()) {
                continue;
            }
            targets.push(ForgeGeneratedTarget {
                destination: runtime_root.join("libraries").join(relative),
                expected_sha1: None,
            });
        }
    }

    targets
}

fn forge_generated_target_ready(target: &ForgeGeneratedTarget) -> bool {
    if !target.destination.exists() {
        return false;
    }
    if let Some(expected) = target.expected_sha1.as_deref() {
        return file_sha1(&target.destination)
            .map(|actual| actual.eq_ignore_ascii_case(expected))
            .unwrap_or(false);
    }
    true
}

fn ensure_forge_launcher_profiles_file(runtime_root: &Path) -> Result<(), String> {
    let profiles_path = runtime_root.join("launcher_profiles.json");
    if profiles_path.exists() {
        return Ok(());
    }
    fs::write(&profiles_path, "{}").map_err(|err| {
        format!(
            "failed to create forge launcher profile file '{}': {}",
            profiles_path.display(),
            err
        )
    })
}

fn tail_text(text: &str, max_chars: usize) -> String {
    if text.chars().count() <= max_chars {
        return text.to_string();
    }
    let mut tail = text.chars().rev().take(max_chars).collect::<Vec<_>>();
    tail.reverse();
    tail.into_iter().collect()
}

fn run_forge_client_installer(
    service: &HttpDownloadService,
    runtime_root: &Path,
    profile: &LaunchVersionProfile,
) -> Result<(), String> {
    let coordinate = detect_forge_installer_coordinate(profile).ok_or_else(|| {
        format!(
            "could not resolve forge installer coordinate from profile id '{}' (inheritsFrom='{}')",
            profile.id,
            profile.inherits_from.as_deref().unwrap_or("")
        )
    })?;
    let installer_url = format!(
        "https://maven.minecraftforge.net/net/minecraftforge/forge/{coord}/forge-{coord}-installer.jar",
        coord = coordinate
    );

    let installers_dir = runtime_root.join("installers").join("forge");
    fs::create_dir_all(&installers_dir).map_err(|err| {
        format!(
            "failed to create forge installer cache directory '{}': {}",
            installers_dir.display(),
            err
        )
    })?;
    let installer_path = installers_dir.join(format!("forge-{}-installer.jar", coordinate));
    if !installer_path.exists() {
        let bytes = service.get_bytes(&installer_url)?;
        fs::write(&installer_path, bytes).map_err(|err| {
            format!(
                "failed to cache forge installer '{}': {}",
                installer_path.display(),
                err
            )
        })?;
    }

    ensure_forge_launcher_profiles_file(runtime_root)?;

    let java_path = detect_java_runtime_info(17)
        .default_path
        .unwrap_or_else(|| "java".to_string());
    let output = Command::new(&java_path)
        .arg("-jar")
        .arg(&installer_path)
        .arg("--installClient")
        .arg(runtime_root)
        .current_dir(runtime_root)
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .output()
        .map_err(|err| {
            format!(
                "failed to run forge installer with '{}': {}",
                java_path, err
            )
        })?;

    if !output.status.success() {
        let stdout_tail = tail_text(&String::from_utf8_lossy(&output.stdout), 4000);
        let stderr_tail = tail_text(&String::from_utf8_lossy(&output.stderr), 4000);
        return Err(format!(
            "forge installer failed for coordinate {} (status {:?}). stdout: {} stderr: {}",
            coordinate,
            output.status.code(),
            stdout_tail,
            stderr_tail
        ));
    }

    Ok(())
}

fn library_relative_from_destination(destination: &Path) -> Option<String> {
    let mut parts = Vec::new();
    let mut inside_libraries = false;
    for comp in destination.components() {
        let piece = comp.as_os_str().to_string_lossy().to_string();
        if inside_libraries {
            parts.push(piece);
            continue;
        }
        if piece.eq_ignore_ascii_case("libraries") {
            inside_libraries = true;
        }
    }
    if !inside_libraries || parts.is_empty() {
        return None;
    }
    Some(parts.join("/"))
}

fn extract_forge_embedded_libraries(
    service: &HttpDownloadService,
    runtime_root: &Path,
    profile: &LaunchVersionProfile,
    _force_redownload: bool,
) -> Result<(u32, u32), String> {
    let coordinate = detect_forge_installer_coordinate(profile).ok_or_else(|| {
        format!(
            "could not resolve forge installer coordinate from profile id '{}' (inheritsFrom='{}')",
            profile.id,
            profile.inherits_from.as_deref().unwrap_or("")
        )
    })?;
    let installer_url = format!(
        "https://maven.minecraftforge.net/net/minecraftforge/forge/{coord}/forge-{coord}-installer.jar",
        coord = coordinate
    );
    let installer_bytes = service.get_bytes(&installer_url)?;
    let reader = Cursor::new(installer_bytes);
    let mut archive = zip::ZipArchive::new(reader)
        .map_err(|err| format!("failed to open forge installer archive: {}", err))?;

    let mut extracted = 0_u32;
    let skipped = 0_u32;

    for index in 0..archive.len() {
        let mut entry = archive
            .by_index(index)
            .map_err(|err| format!("failed to read forge installer entry: {}", err))?;
        let name = entry.name().replace('\\', "/");
        let marker = match name.find("maven/") {
            Some(pos) => pos,
            None => continue,
        };
        let relative = &name[(marker + "maven/".len())..];
        if relative.trim().is_empty() || relative.ends_with('/') {
            continue;
        }
        if relative.trim().is_empty() {
            continue;
        }
        let destination = runtime_root.join("libraries").join(relative);
        if let Some(parent) = destination.parent() {
            fs::create_dir_all(parent).map_err(|err| {
                format!(
                    "failed to create forge library parent '{}': {}",
                    parent.display(),
                    err
                )
            })?;
        }
        if destination.exists() {
            fs::remove_file(&destination).ok();
        }
        let mut output = File::create(&destination).map_err(|err| {
            format!(
                "failed to create forge embedded library '{}': {}",
                destination.display(),
                err
            )
        })?;
        std::io::copy(&mut entry, &mut output)
            .map_err(|err| format!("failed to extract forge embedded library: {}", err))?;
        extracted = extracted.saturating_add(1);
    }

    Ok((extracted, skipped))
}

fn normalize_requested_loader_version(value: Option<&str>) -> Option<String> {
    value
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
}

fn resolve_fabric_profile_for_game_version(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    let index_url = FABRIC_LOADER_INDEX_URL.replace("{mc}", game_version);
    let channels: Vec<LoaderChannelInfo> = service.get_json(&index_url)?;
    let selected_loader = if let Some(requested) =
        normalize_requested_loader_version(requested_loader_version)
    {
        if channels
            .iter()
            .any(|item| item.loader.version.trim() == requested)
        {
            requested
        } else {
            return Err(format!(
                "Fabric loader {} is not available for minecraft {}",
                requested, game_version
            ));
        }
    } else {
        channels
            .iter()
            .find(|item| !item.loader.version.trim().is_empty())
            .ok_or_else(|| format!("no Fabric loaders available for minecraft {}", game_version))?
            .loader
            .version
            .trim()
            .to_string()
    };
    let profile_url = FABRIC_PROFILE_URL
        .replace("{mc}", game_version)
        .replace("{loader}", &selected_loader);
    service.get_json::<LaunchVersionProfile>(&profile_url)
}

fn resolve_fabric_profile(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    if normalize_requested_loader_version(requested_loader_version).is_some() {
        return resolve_fabric_profile_for_game_version(
            service,
            game_version,
            requested_loader_version,
        );
    }

    let exact = resolve_fabric_profile_for_game_version(service, game_version, None);
    if let Ok(profile) = exact {
        return Ok(profile);
    }
    let mut last_error = exact
        .err()
        .unwrap_or_else(|| format!("no Fabric loaders available for minecraft {}", game_version));

    let game_versions: Vec<LoaderGameVersionInfo> = match service.get_json(FABRIC_GAME_INDEX_URL) {
        Ok(rows) => rows,
        Err(_) => return Err(last_error),
    };
    let available_versions = game_versions
        .into_iter()
        .filter(is_release_game_version)
        .map(|item| item.version.trim().to_string())
        .filter(|item| !item.is_empty())
        .collect::<Vec<_>>();
    let fallback_candidates = rank_mc_versions_for_fallback(game_version, &available_versions, 32);

    for candidate in fallback_candidates {
        if candidate.eq_ignore_ascii_case(game_version) {
            continue;
        }
        match resolve_fabric_profile_for_game_version(service, &candidate, None) {
            Ok(profile) => return Ok(profile),
            Err(err) => last_error = err,
        }
    }

    Err(last_error)
}

fn resolve_quilt_profile_for_game_version(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    let index_url = QUILT_LOADER_INDEX_URL.replace("{mc}", game_version);
    let channels: Vec<LoaderChannelInfo> = service.get_json(&index_url)?;
    let selected_loader = if let Some(requested) =
        normalize_requested_loader_version(requested_loader_version)
    {
        if channels
            .iter()
            .any(|item| item.loader.version.trim() == requested)
        {
            requested
        } else {
            return Err(format!(
                "Quilt loader {} is not available for minecraft {}",
                requested, game_version
            ));
        }
    } else {
        channels
            .iter()
            .find(|item| !item.loader.version.trim().is_empty())
            .ok_or_else(|| format!("no Quilt loaders available for minecraft {}", game_version))?
            .loader
            .version
            .trim()
            .to_string()
    };
    let profile_url = QUILT_PROFILE_URL
        .replace("{mc}", game_version)
        .replace("{loader}", &selected_loader);
    service.get_json::<LaunchVersionProfile>(&profile_url)
}

fn resolve_quilt_profile(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    if normalize_requested_loader_version(requested_loader_version).is_some() {
        return resolve_quilt_profile_for_game_version(
            service,
            game_version,
            requested_loader_version,
        );
    }

    let exact = resolve_quilt_profile_for_game_version(service, game_version, None);
    if let Ok(profile) = exact {
        return Ok(profile);
    }
    let mut last_error = exact
        .err()
        .unwrap_or_else(|| format!("no Quilt loaders available for minecraft {}", game_version));

    let game_versions: Vec<LoaderGameVersionInfo> = match service.get_json(QUILT_GAME_INDEX_URL) {
        Ok(rows) => rows,
        Err(_) => return Err(last_error),
    };
    let available_versions = game_versions
        .into_iter()
        .filter(is_release_game_version)
        .map(|item| item.version.trim().to_string())
        .filter(|item| !item.is_empty())
        .collect::<Vec<_>>();
    let fallback_candidates = rank_mc_versions_for_fallback(game_version, &available_versions, 32);

    for candidate in fallback_candidates {
        if candidate.eq_ignore_ascii_case(game_version) {
            continue;
        }
        match resolve_quilt_profile_for_game_version(service, &candidate, None) {
            Ok(profile) => return Ok(profile),
            Err(err) => last_error = err,
        }
    }

    Err(last_error)
}

fn resolve_forge_profile_for_game_version(
    service: &HttpDownloadService,
    promotions: &ForgePromotions,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    let forge_version =
        if let Some(requested) = normalize_requested_loader_version(requested_loader_version) {
            let prefix = format!("{}-", game_version.trim());
            if let Some(value) = requested.strip_prefix(&prefix) {
                value.trim().to_string()
            } else if let Some((left, right)) = requested.split_once('-') {
                let left_clean = left.trim();
                let right_clean = right.trim();
                if left_clean == game_version.trim() && !right_clean.is_empty() {
                    right_clean.to_string()
                } else {
                    requested
                }
            } else {
                requested
            }
        } else {
            let recommended_key = format!("{}-recommended", game_version);
            let latest_key = format!("{}-latest", game_version);
            promotions
                .promos
                .get(&recommended_key)
                .or_else(|| promotions.promos.get(&latest_key))
                .cloned()
                .ok_or_else(|| format!("no Forge version found for minecraft {}", game_version))?
        };
    let installer_url = FORGE_INSTALLER_URL
        .replace("{mc}", game_version)
        .replace("{forge}", &forge_version);
    let installer_bytes = service.get_bytes(&installer_url)?;
    let version_json = extract_zip_text_entry(&installer_bytes, "version.json")?;
    serde_json::from_str::<LaunchVersionProfile>(&version_json)
        .map_err(|err| format!("failed to parse Forge version profile: {}", err))
}

fn collect_forge_game_versions(promotions: &ForgePromotions) -> Vec<String> {
    let mut seen = HashSet::<String>::new();
    let mut collected = Vec::new();
    for key in promotions.promos.keys() {
        let base = if let Some(prefix) = key.strip_suffix("-recommended") {
            prefix
        } else if let Some(prefix) = key.strip_suffix("-latest") {
            prefix
        } else {
            continue;
        };
        let normalized = base.trim();
        if normalized.is_empty() || !seen.insert(normalized.to_string()) {
            continue;
        }
        collected.push(normalized.to_string());
    }
    collected
}

fn resolve_forge_profile(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    let promotions: ForgePromotions = service.get_json(FORGE_PROMOTIONS_URL)?;
    if normalize_requested_loader_version(requested_loader_version).is_some() {
        return resolve_forge_profile_for_game_version(
            service,
            &promotions,
            game_version,
            requested_loader_version,
        );
    }
    let available_versions = collect_forge_game_versions(&promotions);
    let ranked_versions = rank_mc_versions_for_fallback(game_version, &available_versions, 32);

    let mut tried = HashSet::<String>::new();
    let mut candidates = Vec::new();
    candidates.push(game_version.trim().to_string());
    candidates.extend(ranked_versions);
    let mut last_error = format!("no Forge version found for minecraft {}", game_version);

    for candidate in candidates {
        if candidate.is_empty() || !tried.insert(candidate.clone()) {
            continue;
        }
        match resolve_forge_profile_for_game_version(service, &promotions, &candidate, None) {
            Ok(profile) => return Ok(profile),
            Err(err) => last_error = err,
        }
    }
    Err(last_error)
}

fn collect_maven_versions_from_metadata(metadata_xml: &str) -> Vec<String> {
    let mut versions = Vec::<String>::new();
    let mut seen = HashSet::<String>::new();
    let mut cursor = 0usize;
    let start_tag = "<version>";
    let end_tag = "</version>";
    while let Some(start_rel) = metadata_xml[cursor..].find(start_tag) {
        let start = cursor + start_rel + start_tag.len();
        if let Some(end_rel) = metadata_xml[start..].find(end_tag) {
            let end = start + end_rel;
            let value = metadata_xml[start..end].trim();
            if !value.is_empty()
                && !value.to_ascii_lowercase().contains("snapshot")
                && seen.insert(value.to_string())
            {
                versions.push(value.to_string());
            }
            cursor = end + end_tag.len();
        } else {
            break;
        }
    }
    versions
}

fn rank_neoforge_versions_for_game_version(
    game_version: &str,
    versions: &[String],
    max_count: usize,
) -> Vec<String> {
    if versions.is_empty() {
        return Vec::new();
    }

    let mut parsed = versions
        .iter()
        .filter_map(|version| {
            parse_neoforge_release_parts(version).map(|parts| (version.to_string(), parts))
        })
        .collect::<Vec<_>>();

    parsed.sort_by(|left, right| compare_release_parts(&right.1, &left.1));

    let requested = match parse_release_version_parts(game_version) {
        Some(parts) if parts.get(0).copied() == Some(1) && parts.len() >= 2 => parts,
        _ => {
            return parsed
                .into_iter()
                .map(|(version, _)| version)
                .take(max_count.max(1))
                .collect();
        }
    };

    let target_minor = requested.get(1).copied().unwrap_or(0);
    let target_patch = requested.get(2).copied().unwrap_or(0);
    let mut same_minor_older = Vec::new();
    let mut same_minor_newer = Vec::new();
    let mut older_minor = Vec::new();
    let mut newer_minor = Vec::new();

    for (version, parts) in parsed {
        let minor = parts.get(0).copied().unwrap_or(0);
        let patch = parts.get(1).copied().unwrap_or(0);
        if minor == target_minor {
            if patch <= target_patch {
                same_minor_older.push(version);
            } else {
                same_minor_newer.push(version);
            }
        } else if minor < target_minor {
            older_minor.push(version);
        } else {
            newer_minor.push(version);
        }
    }

    same_minor_older
        .into_iter()
        .chain(same_minor_newer)
        .chain(older_minor)
        .chain(newer_minor)
        .take(max_count.max(1))
        .collect()
}

fn resolve_neoforge_profile_for_version(
    service: &HttpDownloadService,
    neo_version: &str,
) -> Result<LaunchVersionProfile, String> {
    let installer_url = NEOFORGE_INSTALLER_URL.replace("{neo}", neo_version);
    let installer_bytes = service.get_bytes(&installer_url)?;
    let version_json = extract_zip_text_entry(&installer_bytes, "version.json")?;
    serde_json::from_str::<LaunchVersionProfile>(&version_json)
        .map_err(|err| format!("failed to parse NeoForge version profile: {}", err))
}

fn resolve_neoforge_profile(
    service: &HttpDownloadService,
    game_version: &str,
    requested_loader_version: Option<&str>,
) -> Result<LaunchVersionProfile, String> {
    if let Some(requested) = normalize_requested_loader_version(requested_loader_version) {
        if let (Some(mc_parts), Some(neo_parts)) = (
            parse_release_version_parts(game_version.trim()),
            parse_neoforge_release_parts(&requested),
        ) {
            if mc_parts.len() >= 3
                && mc_parts[0] == 1
                && neo_parts.len() >= 2
                && (neo_parts[0] != mc_parts[1] || neo_parts[1] != mc_parts[2])
            {
                return Err(format!(
                    "NeoForge version {} is not compatible with minecraft {}",
                    requested, game_version
                ));
            }
        }
        return resolve_neoforge_profile_for_version(service, &requested);
    }

    let metadata = service.get_text(NEOFORGE_MAVEN_METADATA_URL)?;
    let available_versions = collect_maven_versions_from_metadata(&metadata);
    if available_versions.is_empty() {
        return Err("NeoForge metadata did not contain installable versions".to_string());
    }
    let candidates = rank_neoforge_versions_for_game_version(game_version, &available_versions, 40);
    let mut last_error = format!("no NeoForge version found for minecraft {}", game_version);

    for candidate in candidates {
        match resolve_neoforge_profile_for_version(service, &candidate) {
            Ok(profile) => return Ok(profile),
            Err(err) => last_error = err,
        }
    }

    Err(last_error)
}

fn resolve_loader_profile(
    service: &HttpDownloadService,
    loader: &str,
    game_version: &str,
    loader_version: Option<&str>,
) -> Result<Option<LaunchVersionProfile>, String> {
    match normalize_loader(loader).as_str() {
        "vanilla" => Ok(None),
        "fabric" => resolve_fabric_profile(service, game_version, loader_version).map(Some),
        "quilt" => resolve_quilt_profile(service, game_version, loader_version).map(Some),
        "forge" => resolve_forge_profile(service, game_version, loader_version).map(Some),
        "neoforge" => resolve_neoforge_profile(service, game_version, loader_version).map(Some),
        other => Err(format!("unsupported loader '{}'", other)),
    }
}

fn evaluate_rule_applies(rule: &LaunchRule) -> bool {
    if let Some(os) = rule.os.as_ref() {
        if let Some(name) = os.name.as_ref() {
            let expected = name.trim().to_ascii_lowercase();
            #[cfg(target_os = "windows")]
            let current = "windows";
            #[cfg(target_os = "linux")]
            let current = "linux";
            #[cfg(target_os = "macos")]
            let current = "osx";
            if expected != current {
                return false;
            }
        }
    }
    true
}

fn should_use_conditional_arg(rules: &[LaunchRule]) -> bool {
    if rules.is_empty() {
        return true;
    }
    let mut allowed = false;
    for rule in rules {
        if !evaluate_rule_applies(rule) {
            continue;
        }
        let action = rule.action.trim().to_ascii_lowercase();
        allowed = action == "allow";
    }
    allowed
}

fn flatten_conditional_values(value: &serde_json::Value) -> Vec<String> {
    match value {
        serde_json::Value::String(text) => vec![text.clone()],
        serde_json::Value::Array(items) => items
            .iter()
            .filter_map(|item| item.as_str().map(|text| text.to_string()))
            .collect(),
        _ => Vec::new(),
    }
}

fn evaluate_launch_arguments(items: &[LaunchArgument]) -> Vec<String> {
    let mut resolved = Vec::new();
    for item in items {
        match item {
            LaunchArgument::Text(value) => resolved.push(value.clone()),
            LaunchArgument::Conditional(value) => {
                if !should_use_conditional_arg(&value.rules) {
                    continue;
                }
                resolved.extend(flatten_conditional_values(&value.value));
            }
        }
    }
    resolved
}

fn load_profile_from_runtime(
    runtime_root: &Path,
    version_id: &str,
) -> Result<LaunchVersionProfile, String> {
    let path = runtime_root
        .join("versions")
        .join(version_id)
        .join(format!("{}.json", version_id));
    load_json_from_file::<LaunchVersionProfile>(&path)
}

fn load_profile_chain(
    runtime_root: &Path,
    version_id: &str,
) -> Result<Vec<LaunchVersionProfile>, String> {
    let mut chain = Vec::new();
    let mut current = version_id.to_string();
    let mut guard = 0usize;

    loop {
        guard += 1;
        if guard > 16 {
            return Err("version inheritance depth exceeded".to_string());
        }
        let profile = load_profile_from_runtime(runtime_root, &current)?;
        let parent = profile.inherits_from.clone();
        chain.push(profile);
        if let Some(parent_id) = parent {
            current = parent_id;
            continue;
        }
        break;
    }

    chain.reverse();
    Ok(chain)
}

fn replace_launch_tokens(raw: &str, replacements: &HashMap<&str, String>) -> String {
    let mut value = raw.to_string();
    for (token, replacement) in replacements {
        let pattern = format!("${{{}}}", token);
        value = value.replace(&pattern, replacement);
    }
    value
}

fn split_legacy_arguments(value: &str) -> Vec<String> {
    value
        .split_whitespace()
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
        .collect()
}

fn default_game_args(version_id: &str, assets_index: &str) -> Vec<String> {
    vec![
        "--username".to_string(),
        "${auth_player_name}".to_string(),
        "--version".to_string(),
        version_id.to_string(),
        "--gameDir".to_string(),
        "${game_directory}".to_string(),
        "--assetsDir".to_string(),
        "${assets_root}".to_string(),
        "--assetIndex".to_string(),
        assets_index.to_string(),
        "--accessToken".to_string(),
        "${auth_access_token}".to_string(),
        "--userType".to_string(),
        "${user_type}".to_string(),
        "--versionType".to_string(),
        "${version_type}".to_string(),
    ]
}

fn build_launch_args_for_profile(
    runtime_root: &Path,
    version_id: &str,
    auth_context: Option<&LaunchAuthContext>,
) -> Result<Vec<String>, String> {
    let chain = load_profile_chain(runtime_root, version_id)?;
    let merged_id = chain
        .last()
        .map(|item| item.id.clone())
        .unwrap_or_else(|| version_id.to_string());

    let mut main_class = None::<String>;
    let mut assets_name = None::<String>;
    let mut legacy_args = None::<String>;
    let mut jvm_args = Vec::<String>::new();
    let mut game_args = Vec::<String>::new();
    let mut libraries = Vec::<LaunchVersionLibrary>::new();
    let mut library_indices = HashMap::<String, usize>::new();
    let mut classpath_entries = Vec::<String>::new();

    for profile in &chain {
        if let Some(value) = profile.main_class.as_ref() {
            main_class = Some(value.clone());
        }
        if let Some(value) = profile
            .asset_index
            .as_ref()
            .map(|item| item.id.clone())
            .or_else(|| profile.assets.clone())
        {
            assets_name = Some(value);
        }
        if let Some(value) = profile.minecraft_arguments.as_ref() {
            legacy_args = Some(value.clone());
        }
        if let Some(arguments) = profile.arguments.as_ref() {
            jvm_args.extend(evaluate_launch_arguments(&arguments.jvm));
            game_args.extend(evaluate_launch_arguments(&arguments.game));
        }
        for library in &profile.libraries {
            let key = library_identity_key(library);
            if let Some(index) = library_indices.get(&key).copied() {
                libraries[index] = library.clone();
            } else {
                library_indices.insert(key, libraries.len());
                libraries.push(library.clone());
            }
        }
    }

    for profile in &chain {
        let jar_path = runtime_root
            .join("versions")
            .join(&profile.id)
            .join(format!("{}.jar", profile.id));
        if jar_path.exists() {
            classpath_entries.push(jar_path.to_string_lossy().to_string());
        }
    }

    for library in &libraries {
        if let Some(job) = build_library_job_from_launch_library(runtime_root, library) {
            classpath_entries.push(job.destination.to_string_lossy().to_string());
        }
    }
    let mut seen_classpath = HashSet::<String>::new();
    classpath_entries.retain(|entry| seen_classpath.insert(entry.clone()));

    let classpath_separator = if cfg!(target_os = "windows") {
        ";"
    } else {
        ":"
    };
    let classpath = classpath_entries.join(classpath_separator);
    let assets = assets_name.unwrap_or_else(|| "legacy".to_string());
    let game_dir = runtime_root.join("game").join(version_id);
    let natives_dir = runtime_root.join("natives").join(version_id);
    fs::create_dir_all(&game_dir).ok();
    fs::create_dir_all(&natives_dir).ok();

    let mut replacements = HashMap::new();
    replacements.insert(
        "natives_directory",
        natives_dir.to_string_lossy().to_string(),
    );
    replacements.insert("launcher_name", "orbiq".to_string());
    replacements.insert("launcher_version", "2.2.0".to_string());
    replacements.insert("classpath", classpath.clone());
    replacements.insert("classpath_separator", classpath_separator.to_string());
    replacements.insert(
        "library_directory",
        runtime_root.join("libraries").to_string_lossy().to_string(),
    );
    replacements.insert("version_name", merged_id.clone());
    replacements.insert(
        "assets_root",
        runtime_root.join("assets").to_string_lossy().to_string(),
    );
    replacements.insert("assets_index_name", assets.clone());
    let auth_player_name = auth_context
        .map(|item| item.player_name.trim().to_string())
        .filter(|item| !item.is_empty())
        .unwrap_or_else(|| "Player".to_string());
    let auth_uuid = auth_context
        .map(|item| item.player_uuid.replace('-', "").trim().to_string())
        .filter(|item| item.len() == 32)
        .unwrap_or_else(|| "00000000000000000000000000000000".to_string());
    let auth_access_token = auth_context
        .map(|item| item.access_token.trim().to_string())
        .filter(|item| !item.is_empty())
        .unwrap_or_else(|| "0".to_string());
    let auth_xuid = auth_context
        .and_then(|item| item.xuid.as_ref().map(|value| value.trim().to_string()))
        .filter(|item| !item.is_empty())
        .unwrap_or_else(|| "0".to_string());
    let auth_user_type = auth_context
        .map(|item| item.user_type.trim().to_string())
        .filter(|item| !item.is_empty())
        .unwrap_or_else(|| "legacy".to_string());

    replacements.insert("auth_player_name", auth_player_name);
    replacements.insert("auth_uuid", auth_uuid);
    replacements.insert("auth_access_token", auth_access_token.clone());
    replacements.insert("auth_session", auth_access_token);
    replacements.insert("auth_xuid", auth_xuid);
    replacements.insert("clientid", "0".to_string());
    replacements.insert("client_id", "0".to_string());
    replacements.insert("user_properties", "{}".to_string());
    replacements.insert("profile_properties", "{}".to_string());
    replacements.insert("user_type", auth_user_type);
    replacements.insert("version_type", "release".to_string());
    replacements.insert("game_directory", game_dir.to_string_lossy().to_string());
    replacements.insert("resolution_width", "1280".to_string());
    replacements.insert("resolution_height", "720".to_string());
    replacements.insert("quickPlayPath", "".to_string());
    replacements.insert("quickPlaySingleplayer", "".to_string());
    replacements.insert("quickPlayMultiplayer", "".to_string());
    replacements.insert("quickPlayRealms", "".to_string());

    let mut resolved_jvm = jvm_args
        .iter()
        .map(|item| replace_launch_tokens(item, &replacements))
        .collect::<Vec<_>>();
    let mut resolved_game = if !game_args.is_empty() {
        game_args
            .iter()
            .map(|item| replace_launch_tokens(item, &replacements))
            .collect::<Vec<_>>()
    } else if let Some(legacy) = legacy_args.as_ref() {
        split_legacy_arguments(legacy)
            .iter()
            .map(|item| replace_launch_tokens(item, &replacements))
            .collect::<Vec<_>>()
    } else {
        default_game_args(&merged_id, &assets)
            .iter()
            .map(|item| replace_launch_tokens(item, &replacements))
            .collect::<Vec<_>>()
    };

    if !resolved_jvm.iter().any(|item| item.starts_with("-Xms")) {
        resolved_jvm.insert(0, "-Xms1G".to_string());
    }
    if !resolved_jvm.iter().any(|item| item.starts_with("-Xmx")) {
        let insert_at = if resolved_jvm.is_empty() { 0 } else { 1 };
        resolved_jvm.insert(insert_at, "-Xmx2G".to_string());
    }
    if !resolved_jvm
        .iter()
        .any(|item| item == "-cp" || item == "-classpath")
    {
        resolved_jvm.push("-cp".to_string());
        resolved_jvm.push(classpath);
    }

    if !resolved_game.iter().any(|item| item == "--gameDir") {
        resolved_game.push("--gameDir".to_string());
        resolved_game.push(game_dir.to_string_lossy().to_string());
    }

    let main = main_class.ok_or_else(|| {
        format!(
            "launch profile '{}' is missing mainClass; provisioning is incomplete",
            merged_id
        )
    })?;

    let mut final_args = Vec::new();
    final_args.extend(resolved_jvm);
    final_args.push(main);
    final_args.append(&mut resolved_game);
    Ok(final_args)
}

fn combine_stats(base: ProvisionStats, extra: ProvisionStats) -> ProvisionStats {
    ProvisionStats {
        downloaded_files: base.downloaded_files.saturating_add(extra.downloaded_files),
        skipped_files: base.skipped_files.saturating_add(extra.skipped_files),
        libraries_downloaded: base
            .libraries_downloaded
            .saturating_add(extra.libraries_downloaded),
        assets_downloaded: base
            .assets_downloaded
            .saturating_add(extra.assets_downloaded),
    }
}

fn provision_loader_profile_with_progress<F>(
    runtime_root: &Path,
    loader: &str,
    game_version: &str,
    loader_version: Option<&str>,
    force_redownload: bool,
    max_concurrency: Option<u8>,
    on_progress: &mut F,
) -> Result<(Option<String>, ProvisionStats), String>
where
    F: FnMut(ProvisionProgressUpdate),
{
    let normalized_loader = normalize_loader(loader);
    if normalized_loader == "vanilla" {
        return Ok((
            None,
            ProvisionStats {
                downloaded_files: 0,
                skipped_files: 0,
                libraries_downloaded: 0,
                assets_downloaded: 0,
            },
        ));
    }

    let concurrency = usize::from(max_concurrency.unwrap_or(DEFAULT_CONCURRENCY as u8)).max(1);
    let service = HttpDownloadService::new()?;
    emit_progress(
        on_progress,
        "loader_manifest",
        &format!("Resolving {} loader metadata...", normalized_loader),
        None,
        None,
    );
    let profile =
        resolve_loader_profile(&service, &normalized_loader, game_version, loader_version)?
            .ok_or_else(|| format!("loader '{}' is not supported", normalized_loader))?;
    write_profile_json(runtime_root, &profile)?;

    let mut base_stats = ProvisionStats {
        downloaded_files: 0,
        skipped_files: 0,
        libraries_downloaded: 0,
        assets_downloaded: 0,
    };
    if let Some(parent_version) = profile.inherits_from.clone() {
        let parent = parent_version.trim().to_string();
        if !parent.is_empty() && !parent.eq_ignore_ascii_case(game_version) {
            emit_progress(
                on_progress,
                "loader_parent",
                &format!(
                    "{} loader targets Minecraft {}; preparing parent runtime...",
                    normalized_loader, parent
                ),
                None,
                None,
            );
            base_stats = provision_instance_runtime_with_progress(
                runtime_root,
                &parent,
                force_redownload,
                max_concurrency,
                |update| {
                    emit_progress(
                        on_progress,
                        &format!("loader_base_{}", update.phase),
                        &update.message,
                        update.completed,
                        update.total,
                    );
                },
            )?;
        }
    }

    let mut embedded_stats = ProvisionStats {
        downloaded_files: 0,
        skipped_files: 0,
        libraries_downloaded: 0,
        assets_downloaded: 0,
    };
    let mut forge_generated_relative = HashSet::<String>::new();
    if normalized_loader == "forge" {
        emit_progress(
            on_progress,
            "loader_installer",
            "Extracting Forge embedded libraries...",
            None,
            None,
        );
        let (extracted, skipped) =
            extract_forge_embedded_libraries(&service, runtime_root, &profile, force_redownload)?;
        embedded_stats = ProvisionStats {
            downloaded_files: extracted,
            skipped_files: skipped,
            libraries_downloaded: extracted,
            assets_downloaded: 0,
        };

        // Forge relies on installer processors to generate patched runtime jars
        // (for example forge-*-client.jar and client-*-srg.jar). Run the installer
        // when those artifacts are missing before normal library download flow.
        let generated_targets = forge_generated_targets(runtime_root, &profile);
        forge_generated_relative = generated_targets
            .iter()
            .filter_map(|target| library_relative_from_destination(&target.destination))
            .collect::<HashSet<_>>();
        let missing_generated = generated_targets
            .iter()
            .filter(|target| !forge_generated_target_ready(target))
            .map(|target| target.destination.to_string_lossy().to_string())
            .collect::<Vec<_>>();
        if !missing_generated.is_empty() {
            emit_progress(
                on_progress,
                "loader_installer",
                "Running Forge installer processors...",
                None,
                None,
            );
            run_forge_client_installer(&service, runtime_root, &profile)?;

            let missing_after = generated_targets
                .iter()
                .filter(|target| !forge_generated_target_ready(target))
                .map(|target| target.destination.to_string_lossy().to_string())
                .collect::<Vec<_>>();
            if !missing_after.is_empty() {
                let preview = missing_after
                    .into_iter()
                    .take(3)
                    .collect::<Vec<_>>()
                    .join(", ");
                return Err(format!(
                    "forge installer did not generate required artifacts: {}",
                    preview
                ));
            }
        }
    }

    let mut jobs = build_loader_library_jobs(runtime_root, &profile.libraries);
    let mut synthesized_stats = ProvisionStats {
        downloaded_files: 0,
        skipped_files: 0,
        libraries_downloaded: 0,
        assets_downloaded: 0,
    };
    if normalized_loader == "forge" {
        let mut missing_core = Vec::new();
        let mut filtered = Vec::new();
        for job in jobs {
            let relative = library_relative_from_destination(&job.destination);
            if let Some(path) = relative.as_ref() {
                if forge_generated_relative.contains(path) {
                    if job.destination.exists() {
                        synthesized_stats.skipped_files =
                            synthesized_stats.skipped_files.saturating_add(1);
                    } else {
                        missing_core.push(job.destination.to_string_lossy().to_string());
                    }
                    continue;
                }
            }
            if job.destination.exists() {
                continue;
            }
            let is_forge_core = relative
                .as_ref()
                .map(|path| path.starts_with("net/minecraftforge/forge/"))
                .unwrap_or(false);
            if is_forge_core {
                missing_core.push(job.destination.to_string_lossy().to_string());
                continue;
            }
            filtered.push(job);
        }
        if !missing_core.is_empty() {
            let preview = missing_core
                .into_iter()
                .take(3)
                .collect::<Vec<_>>()
                .join(", ");
            return Err(format!(
                "forge installer did not provide required forge libraries: {}",
                preview
            ));
        }
        jobs = filtered;
    }
    emit_progress(
        on_progress,
        "loader_libraries",
        &format!("Downloading {} loader libraries...", normalized_loader),
        Some(0),
        Some(jobs.len() as u32),
    );
    let (downloaded, skipped) = run_download_jobs(
        &service,
        &jobs,
        force_redownload && normalized_loader != "forge",
        DEFAULT_RETRIES,
        concurrency,
        "loader_libraries",
        on_progress,
    )?;

    let fetched_loader_stats = ProvisionStats {
        downloaded_files: downloaded,
        skipped_files: skipped,
        libraries_downloaded: downloaded,
        assets_downloaded: 0,
    };
    let loader_stats = combine_stats(
        combine_stats(embedded_stats, synthesized_stats),
        fetched_loader_stats,
    );

    Ok((Some(profile.id), combine_stats(base_stats, loader_stats)))
}

pub(crate) fn provision_instance_runtime_with_progress<F>(
    runtime_root: &Path,
    version: &str,
    force_redownload: bool,
    max_concurrency: Option<u8>,
    mut on_progress: F,
) -> Result<ProvisionStats, String>
where
    F: FnMut(ProvisionProgressUpdate),
{
    let concurrency = usize::from(max_concurrency.unwrap_or(DEFAULT_CONCURRENCY as u8)).max(1);
    let service = HttpDownloadService::new()?;

    emit_progress(
        &mut on_progress,
        "init",
        "Preparing runtime directories...",
        None,
        None,
    );

    fs::create_dir_all(runtime_root).map_err(|err| {
        format!(
            "failed to create runtime root '{}': {}",
            runtime_root.display(),
            err
        )
    })?;

    emit_progress(
        &mut on_progress,
        "manifest",
        "Fetching version manifest index...",
        Some(0),
        Some(1),
    );
    let manifest_index: VersionManifestIndex = service.get_json(VERSION_MANIFEST_INDEX_URL)?;
    emit_progress(
        &mut on_progress,
        "manifest",
        "Version manifest ready",
        Some(1),
        Some(1),
    );

    let version_entry = manifest_index
        .versions
        .into_iter()
        .find(|entry| entry.id == version)
        .ok_or_else(|| {
            format!(
                "minecraft version '{}' not found in official manifest",
                version
            )
        })?;

    let version_dir = runtime_root.join("versions").join(version);
    let version_json_path = version_dir.join(format!("{}.json", version));
    let version_jar_path = version_dir.join(format!("{}.jar", version));
    let assets_indexes_dir = runtime_root.join("assets").join("indexes");

    let mut downloaded_files = 0_u32;
    let mut skipped_files = 0_u32;

    emit_progress(
        &mut on_progress,
        "version_json",
        "Downloading version metadata...",
        Some(0),
        Some(1),
    );
    match service.download_with_retry(
        &version_entry.url,
        &version_json_path,
        version_entry.sha1.as_deref(),
        force_redownload,
        DEFAULT_RETRIES,
    )? {
        DownloadOutcome::Downloaded => downloaded_files += 1,
        DownloadOutcome::Skipped => skipped_files += 1,
    }
    emit_progress(
        &mut on_progress,
        "version_json",
        "Version metadata ready",
        Some(1),
        Some(1),
    );

    let version_details: VersionDetails = load_json_from_file(&version_json_path)?;
    emit_progress(
        &mut on_progress,
        "client",
        "Downloading client jar...",
        Some(0),
        Some(1),
    );
    match service.download_with_retry(
        &version_details.downloads.client.url,
        &version_jar_path,
        version_details.downloads.client.sha1.as_deref(),
        force_redownload,
        DEFAULT_RETRIES,
    )? {
        DownloadOutcome::Downloaded => downloaded_files += 1,
        DownloadOutcome::Skipped => skipped_files += 1,
    }
    emit_progress(
        &mut on_progress,
        "client",
        "Client jar ready",
        Some(1),
        Some(1),
    );

    let asset_index_path =
        assets_indexes_dir.join(format!("{}.json", version_details.asset_index.id));
    emit_progress(
        &mut on_progress,
        "asset_index",
        "Downloading asset index...",
        Some(0),
        Some(1),
    );
    match service.download_with_retry(
        &version_details.asset_index.url,
        &asset_index_path,
        version_details.asset_index.sha1.as_deref(),
        force_redownload,
        DEFAULT_RETRIES,
    )? {
        DownloadOutcome::Downloaded => downloaded_files += 1,
        DownloadOutcome::Skipped => skipped_files += 1,
    }
    emit_progress(
        &mut on_progress,
        "asset_index",
        "Asset index ready",
        Some(1),
        Some(1),
    );

    let asset_index: AssetIndex = load_json_from_file(&asset_index_path)?;
    let library_jobs = build_library_jobs(runtime_root, &version_details.libraries);
    let asset_jobs = build_asset_jobs(runtime_root, &asset_index);

    emit_progress(
        &mut on_progress,
        "libraries",
        "Resolving libraries...",
        Some(0),
        Some(library_jobs.len() as u32),
    );
    let (libraries_downloaded, libraries_skipped) = run_download_jobs(
        &service,
        &library_jobs,
        force_redownload,
        DEFAULT_RETRIES,
        concurrency,
        "libraries",
        &mut on_progress,
    )?;
    emit_progress(
        &mut on_progress,
        "assets",
        "Resolving assets...",
        Some(0),
        Some(asset_jobs.len() as u32),
    );
    let (assets_downloaded, assets_skipped) = run_download_jobs(
        &service,
        &asset_jobs,
        force_redownload,
        DEFAULT_RETRIES,
        concurrency,
        "assets",
        &mut on_progress,
    )?;

    downloaded_files += libraries_downloaded + assets_downloaded;
    skipped_files += libraries_skipped + assets_skipped;

    emit_progress(
        &mut on_progress,
        "done",
        "Provisioning complete",
        Some(downloaded_files + skipped_files),
        Some(downloaded_files + skipped_files),
    );

    Ok(ProvisionStats {
        downloaded_files,
        skipped_files,
        libraries_downloaded,
        assets_downloaded,
    })
}

pub(crate) fn provision_instance_runtime_for_loader_with_progress<F>(
    runtime_root: &Path,
    loader: &str,
    version: &str,
    loader_version: Option<&str>,
    auth_context: Option<LaunchAuthContext>,
    force_redownload: bool,
    max_concurrency: Option<u8>,
    mut on_progress: F,
) -> Result<ProvisionOutcome, String>
where
    F: FnMut(ProvisionProgressUpdate),
{
    let base_stats = provision_instance_runtime_with_progress(
        runtime_root,
        version,
        force_redownload,
        max_concurrency,
        |update| on_progress(update),
    )?;

    let (launch_version_override, loader_stats) = provision_loader_profile_with_progress(
        runtime_root,
        loader,
        version,
        loader_version,
        force_redownload,
        max_concurrency,
        &mut on_progress,
    )?;

    let launch_version_id = launch_version_override.unwrap_or_else(|| version.to_string());
    let launch_args =
        build_launch_args_for_profile(runtime_root, &launch_version_id, auth_context.as_ref())?;
    let working_dir = runtime_root
        .join("game")
        .join(&launch_version_id)
        .to_string_lossy()
        .to_string();

    Ok(ProvisionOutcome {
        stats: combine_stats(base_stats, loader_stats),
        launch_args,
        launch_version_id,
        working_dir,
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::java_runtime::get_java_runtime_info as detect_java_runtime_info;
    use crate::launch_builder::{compose_launch_plan, LaunchComposeInput};
    use std::process::{Command, Stdio};
    use std::thread;
    use std::time::{Duration, Instant};

    #[test]
    fn asset_object_destination_uses_hash_prefix() {
        let root = PathBuf::from("C:/runtime");
        let hash = "abcdef0123456789";
        let path = asset_object_destination(&root, hash).expect("expected destination path");
        assert!(path.ends_with(Path::new("assets").join("objects").join("ab").join(hash)));
    }

    #[test]
    fn file_sha1_matches_known_value() {
        let path = std::env::temp_dir().join(format!(
            "orbiq_sha1_test_{}_{}.txt",
            std::process::id(),
            crate::storage::unix_epoch_now()
        ));
        fs::write(&path, "abc").expect("failed to write test file");
        let digest = file_sha1(&path).expect("failed to compute sha1");
        fs::remove_file(&path).ok();
        assert_eq!(digest, "a9993e364706816aba3e25717850c26c9cd0d89d");
    }

    fn runtime_root_for_smoke() -> Result<PathBuf, String> {
        let app_data = std::env::var("APPDATA")
            .map_err(|_| "APPDATA env is not set; cannot run smoke launch test".to_string())?;
        let root = PathBuf::from(app_data)
            .join("com.orbiq.launcher")
            .join("runtime");
        fs::create_dir_all(&root).map_err(|err| {
            format!(
                "failed to create runtime root for smoke test '{}': {}",
                root.display(),
                err
            )
        })?;
        Ok(root)
    }

    fn launch_probe(plan: crate::launch_builder::LaunchPlan) -> Result<(), String> {
        fn tail_text(text: &str, max_chars: usize) -> String {
            if text.chars().count() <= max_chars {
                return text.to_string();
            }
            let mut tail = text.chars().rev().take(max_chars).collect::<Vec<_>>();
            tail.reverse();
            tail.into_iter().collect()
        }

        let mut command = Command::new(&plan.executable);
        if !plan.args.is_empty() {
            command.args(&plan.args);
        }
        if let Some(dir) = plan.working_dir.as_ref() {
            command.current_dir(dir);
        }
        command.stdin(Stdio::null());
        command.stdout(Stdio::piped());
        command.stderr(Stdio::piped());

        let mut child = command
            .spawn()
            .map_err(|err| format!("failed to spawn launch process: {}", err))?;
        let started = Instant::now();
        let min_alive = Duration::from_secs(10);
        let max_wait = Duration::from_secs(40);

        loop {
            match child.try_wait() {
                Ok(Some(status)) => {
                    let output = child
                        .wait_with_output()
                        .map_err(|err| format!("failed reading launch output: {}", err))?;
                    let stdout_tail = tail_text(&String::from_utf8_lossy(&output.stdout), 3000);
                    let stderr_tail = tail_text(&String::from_utf8_lossy(&output.stderr), 3000);
                    return Err(format!(
                        "process exited too early after {:?} with status {:?}. stdout: {} stderr: {}",
                        started.elapsed(),
                        status.code(),
                        stdout_tail,
                        stderr_tail
                    ));
                }
                Ok(None) => {}
                Err(err) => return Err(format!("failed to check process status: {}", err)),
            }

            if started.elapsed() >= min_alive {
                let _ = child.kill();
                let _ = child.wait();
                return Ok(());
            }
            if started.elapsed() >= max_wait {
                let _ = child.kill();
                let _ = child.wait();
                return Err("process did not stabilize within launch timeout".to_string());
            }
            thread::sleep(Duration::from_millis(500));
        }
    }

    #[test]
    #[ignore]
    fn smoke_launch_each_loader() {
        let game_version =
            std::env::var("ORBIQ_SMOKE_MC_VERSION").unwrap_or_else(|_| "1.21.4".to_string());
        let runtime_root = runtime_root_for_smoke().expect("runtime root");
        let java_path = detect_java_runtime_info(17)
            .default_path
            .expect("java 17+ runtime must be available for smoke launch test");

        let loaders = ["fabric", "quilt", "forge", "neoforge"];
        for loader in loaders {
            eprintln!(
                "[smoke] resolving {} for minecraft {}",
                loader, game_version
            );
            let versions = list_loader_versions(loader, &game_version, Some(20))
                .unwrap_or_else(|err| panic!("{} list_loader_versions failed: {}", loader, err));
            let selected_loader_version = versions
                .first()
                .cloned()
                .unwrap_or_else(|| panic!("no versions returned for loader '{}'", loader));
            eprintln!(
                "[smoke] {} selected loader version {}",
                loader, selected_loader_version
            );

            let outcome = provision_instance_runtime_for_loader_with_progress(
                &runtime_root,
                loader,
                &game_version,
                Some(selected_loader_version.as_str()),
                None,
                false,
                Some(4),
                |_update| {},
            )
            .unwrap_or_else(|err| panic!("{} provision failed: {}", loader, err));

            let plan = compose_launch_plan(LaunchComposeInput {
                executable: Some(java_path.clone()),
                args: outcome.launch_args,
                working_dir: Some(outcome.working_dir),
                version: outcome.launch_version_id,
                runtime_root: runtime_root.clone(),
                default_java_path: Some(java_path.clone()),
            })
            .unwrap_or_else(|err| panic!("{} compose launch plan failed: {}", loader, err));

            launch_probe(plan)
                .unwrap_or_else(|err| panic!("{} launch probe failed: {}", loader, err));
            eprintln!("[smoke] {} launch ok", loader);
        }
    }
}
