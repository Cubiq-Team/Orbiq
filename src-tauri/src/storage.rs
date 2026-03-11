use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Child;
use std::sync::{Mutex, MutexGuard};
use std::time::{SystemTime, UNIX_EPOCH};

use serde::{Deserialize, Serialize};
use tauri::State;

use crate::domain::{InstanceRecord, ProfileRecord};

const CURRENT_SCHEMA_VERSION: u32 = 2;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub(crate) struct DeploymentRecord {
    pub(crate) id: String,
    pub(crate) name: String,
    pub(crate) host: String,
    pub(crate) port: u16,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct PersistentState {
    schema_version: u32,
    instances: Vec<InstanceRecord>,
    profiles: Vec<ProfileRecord>,
    deployments: Vec<DeploymentRecord>,
    next_instance_id: u32,
    next_deployment_id: u32,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
struct LegacyPersistentState {
    instances: Vec<InstanceRecord>,
    profiles: Vec<ProfileRecord>,
    deployments: Vec<DeploymentRecord>,
    next_instance_id: u32,
    next_deployment_id: u32,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(untagged)]
enum PersistentDiskState {
    Current(PersistentState),
    Legacy(LegacyPersistentState),
}

pub(crate) struct ProcessHandle {
    pub(crate) child: Child,
}

pub(crate) struct RuntimeState {
    pub(crate) instances: Vec<InstanceRecord>,
    pub(crate) profiles: Vec<ProfileRecord>,
    pub(crate) deployments: Vec<DeploymentRecord>,
    pub(crate) processes: HashMap<String, ProcessHandle>,
    pub(crate) next_instance_id: u32,
    pub(crate) next_deployment_id: u32,
}

impl RuntimeState {
    fn default_instances() -> Vec<InstanceRecord> {
        Vec::new()
    }

    fn default_profiles() -> Vec<ProfileRecord> {
        vec![ProfileRecord {
            id: "profile-offline-player".to_string(),
            name: "Player".to_string(),
            profile_type: "offline".to_string(),
            active: true,
            account_id: None,
            email: None,
            access_token_expires_at_epoch: None,
            last_authenticated_at_epoch: None,
        }]
    }

    pub(crate) fn with_defaults() -> Self {
        Self {
            instances: Self::default_instances(),
            profiles: Self::default_profiles(),
            deployments: Vec::new(),
            processes: HashMap::new(),
            next_instance_id: 1,
            next_deployment_id: 1,
        }
    }

    fn to_persistent(&self) -> PersistentState {
        PersistentState {
            schema_version: CURRENT_SCHEMA_VERSION,
            instances: self.instances.clone(),
            profiles: self.profiles.clone(),
            deployments: self.deployments.clone(),
            next_instance_id: self.next_instance_id,
            next_deployment_id: self.next_deployment_id,
        }
    }

    fn from_persistent(data: PersistentState) -> Self {
        let mut instances = data.instances;
        for instance in &mut instances {
            // Process handles are not restored across app restarts.
            instance.running = false;
        }

        Self {
            instances,
            profiles: if data.profiles.is_empty() {
                Self::default_profiles()
            } else {
                data.profiles
            },
            deployments: data.deployments,
            processes: HashMap::new(),
            next_instance_id: data.next_instance_id.max(1),
            next_deployment_id: data.next_deployment_id.max(1),
        }
    }
}

pub struct AppState {
    pub(crate) runtime: Mutex<RuntimeState>,
    store_path: PathBuf,
}

impl AppState {
    pub fn new_with_store_path(store_path: PathBuf) -> Self {
        let runtime =
            load_runtime_from_disk(&store_path).unwrap_or_else(|_| RuntimeState::with_defaults());
        Self {
            runtime: Mutex::new(runtime),
            store_path,
        }
    }

    fn persist(&self, runtime: &RuntimeState) -> Result<(), String> {
        let payload = runtime.to_persistent();
        let content = serde_json::to_string_pretty(&payload)
            .map_err(|err| format!("failed to serialize state: {}", err))?;

        let parent = self
            .store_path
            .parent()
            .ok_or_else(|| "invalid store path".to_string())?;
        fs::create_dir_all(parent)
            .map_err(|err| format!("failed to create state directory: {}", err))?;

        let temp_path = self.store_path.with_extension("tmp");
        fs::write(&temp_path, content)
            .map_err(|err| format!("failed to write temp state file: {}", err))?;

        let backup_path = backup_path_for(&self.store_path);
        if self.store_path.exists() {
            fs::copy(&self.store_path, &backup_path)
                .map_err(|err| format!("failed to create state backup file: {}", err))?;
        }

        if self.store_path.exists() {
            fs::remove_file(&self.store_path)
                .map_err(|err| format!("failed to replace old state file: {}", err))?;
        }

        fs::rename(&temp_path, &self.store_path)
            .map_err(|err| format!("failed to finalize state file: {}", err))?;

        Ok(())
    }
}

impl Default for AppState {
    fn default() -> Self {
        Self::new_with_store_path(PathBuf::from("orbiq_state.json"))
    }
}

fn migrate_to_current(mut data: PersistentState) -> Result<PersistentState, String> {
    if data.schema_version == 0 {
        data.schema_version = 1;
    }

    while data.schema_version < CURRENT_SCHEMA_VERSION {
        data = match data.schema_version {
            1 => {
                // v1 -> v2 reserved migration step (structure unchanged for now).
                PersistentState {
                    schema_version: 2,
                    ..data
                }
            }
            unknown => {
                return Err(format!(
                    "unsupported state schema version {} (current {})",
                    unknown, CURRENT_SCHEMA_VERSION
                ));
            }
        };
    }

    if data.schema_version > CURRENT_SCHEMA_VERSION {
        return Err(format!(
            "state schema version {} is newer than supported {}",
            data.schema_version, CURRENT_SCHEMA_VERSION
        ));
    }

    Ok(data)
}

fn parse_runtime_from_content(content: &str) -> Result<RuntimeState, String> {
    let parsed: PersistentDiskState = serde_json::from_str(content)
        .map_err(|err| format!("failed to parse state file: {}", err))?;

    let state = match parsed {
        PersistentDiskState::Current(current) => migrate_to_current(current)?,
        PersistentDiskState::Legacy(legacy) => migrate_to_current(PersistentState {
            schema_version: 1,
            instances: legacy.instances,
            profiles: legacy.profiles,
            deployments: legacy.deployments,
            next_instance_id: legacy.next_instance_id,
            next_deployment_id: legacy.next_deployment_id,
        })?,
    };

    Ok(RuntimeState::from_persistent(state))
}

fn backup_path_for(path: &Path) -> PathBuf {
    path.with_extension("bak")
}

fn load_runtime_from_path(path: &Path) -> Result<RuntimeState, String> {
    let content =
        fs::read_to_string(path).map_err(|err| format!("failed to read state file: {}", err))?;
    parse_runtime_from_content(&content)
}

fn load_runtime_from_disk(path: &Path) -> Result<RuntimeState, String> {
    if !path.exists() {
        return Ok(RuntimeState::with_defaults());
    }

    match load_runtime_from_path(path) {
        Ok(runtime) => Ok(runtime),
        Err(primary_err) => {
            let backup_path = backup_path_for(path);
            if !backup_path.exists() {
                return Err(primary_err);
            }

            load_runtime_from_path(&backup_path).map_err(|backup_err| {
                format!(
                    "{}; fallback backup load failed: {}",
                    primary_err, backup_err
                )
            })
        }
    }
}

pub(crate) fn runtime_lock<'a>(
    state: &'a State<AppState>,
) -> Result<MutexGuard<'a, RuntimeState>, String> {
    state
        .runtime
        .lock()
        .map_err(|_| "state lock poisoned".to_string())
}

pub(crate) fn persist_runtime(
    state: &State<AppState>,
    runtime: &RuntimeState,
) -> Result<(), String> {
    state.persist(runtime)
}

pub(crate) fn unix_epoch_now() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_secs())
        .unwrap_or(0)
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::env;

    fn unique_state_path(suffix: &str) -> PathBuf {
        env::temp_dir().join(format!(
            "orbiq_state_test_{}_{}_{}.json",
            std::process::id(),
            unix_epoch_now(),
            suffix
        ))
    }

    #[test]
    fn load_runtime_from_disk_parses_legacy_last_played_strings() {
        let store_path = unique_state_path("legacy");
        let content = r#"{
  "instances": [
    {
      "id": "inst-legacy",
      "name": "Legacy",
      "loader": "vanilla",
      "version": "1.21.4",
      "running": false,
      "playtimeMinutes": 10,
      "lastPlayed": "3 days ago",
      "executable": null,
      "args": [],
      "workingDir": null
    }
  ],
  "profiles": [],
  "deployments": [],
  "nextInstanceId": 2,
  "nextDeploymentId": 1
}"#;

        fs::write(&store_path, content).expect("failed to write test state file");
        let runtime = load_runtime_from_disk(&store_path).expect("failed to load runtime");
        fs::remove_file(&store_path).ok();

        assert_eq!(runtime.instances.len(), 1);
        assert!(runtime.instances[0].last_played.is_some());
    }

    #[test]
    fn load_runtime_from_disk_supports_v1_schema_migration() {
        let store_path = unique_state_path("v1");
        let content = r#"{
  "schemaVersion": 1,
  "instances": [],
  "profiles": [],
  "deployments": [],
  "nextInstanceId": 2,
  "nextDeploymentId": 3
}"#;

        fs::write(&store_path, content).expect("failed to write test state file");
        let runtime = load_runtime_from_disk(&store_path).expect("failed to load runtime");
        fs::remove_file(&store_path).ok();

        assert_eq!(runtime.next_instance_id, 2);
        assert_eq!(runtime.next_deployment_id, 3);
    }

    #[test]
    fn app_state_persist_roundtrip_keeps_data_and_resets_running_flag() {
        let store_path = unique_state_path("roundtrip");
        let state = AppState::new_with_store_path(store_path.clone());
        let expected_last_played = 1_700_000_000_u64;

        {
            let mut runtime = state.runtime.lock().expect("state lock poisoned");
            runtime.instances = vec![InstanceRecord {
                id: "inst-rt-1".to_string(),
                name: "Roundtrip".to_string(),
                icon_key: None,
                banner_key: None,
                loader: "fabric".to_string(),
                loader_version: Some("0.16.10".to_string()),
                version: "1.20.1".to_string(),
                running: true,
                playtime_minutes: 222,
                last_played: Some(expected_last_played),
                executable: Some("java".to_string()),
                args: vec!["-Xmx2G".to_string()],
                working_dir: Some("C:/Games/Minecraft".to_string()),
                last_exit_state: Some("crashed".to_string()),
                last_exit_code: Some(1),
                last_exit_reason: Some("example crash".to_string()),
                last_exit_at_epoch: Some(1_700_000_100_u64),
            }];
            runtime.profiles = vec![ProfileRecord {
                id: "profile-1".to_string(),
                name: "Test".to_string(),
                profile_type: "offline".to_string(),
                active: true,
                account_id: None,
                email: None,
                access_token_expires_at_epoch: None,
                last_authenticated_at_epoch: None,
            }];
            runtime.deployments = vec![DeploymentRecord {
                id: "deploy-1".to_string(),
                name: "Server".to_string(),
                host: "This Computer".to_string(),
                port: 25565,
            }];
            runtime.next_instance_id = 10;
            runtime.next_deployment_id = 3;
            state.persist(&runtime).expect("failed to persist state");
        }

        let reloaded = AppState::new_with_store_path(store_path.clone());
        let runtime = reloaded.runtime.lock().expect("state lock poisoned");
        let instance = runtime
            .instances
            .first()
            .expect("missing reloaded instance");

        assert_eq!(runtime.instances.len(), 1);
        assert_eq!(runtime.profiles.len(), 1);
        assert_eq!(runtime.deployments.len(), 1);
        assert_eq!(runtime.next_instance_id, 10);
        assert_eq!(runtime.next_deployment_id, 3);
        assert_eq!(instance.name, "Roundtrip");
        assert_eq!(instance.last_played, Some(expected_last_played));
        assert_eq!(instance.executable.as_deref(), Some("java"));
        assert_eq!(instance.args, vec!["-Xmx2G".to_string()]);
        assert_eq!(instance.working_dir.as_deref(), Some("C:/Games/Minecraft"));
        assert_eq!(instance.last_exit_state.as_deref(), Some("crashed"));
        assert_eq!(instance.last_exit_code, Some(1));
        assert_eq!(instance.last_exit_reason.as_deref(), Some("example crash"));
        assert_eq!(instance.last_exit_at_epoch, Some(1_700_000_100_u64));
        assert!(!instance.running, "running must reset after restart");

        fs::remove_file(&store_path).ok();
        fs::remove_file(backup_path_for(&store_path)).ok();
    }

    #[test]
    fn load_runtime_from_disk_falls_back_to_backup_when_primary_is_corrupt() {
        let store_path = unique_state_path("backup-fallback");
        let backup_path = backup_path_for(&store_path);

        let valid_content = r#"{
  "schemaVersion": 2,
  "instances": [
    {
      "id": "inst-ok",
      "name": "Recovered",
      "loader": "vanilla",
      "version": "1.21.4",
      "running": false,
      "playtimeMinutes": 7,
      "lastPlayed": 1700000000,
      "executable": null,
      "args": [],
      "workingDir": null
    }
  ],
  "profiles": [],
  "deployments": [],
  "nextInstanceId": 5,
  "nextDeploymentId": 2
}"#;

        fs::write(&store_path, "{not-valid-json").expect("failed to write corrupt state file");
        fs::write(&backup_path, valid_content).expect("failed to write backup state file");

        let runtime = load_runtime_from_disk(&store_path).expect("failed to recover from backup");
        assert_eq!(runtime.instances.len(), 1);
        assert_eq!(runtime.instances[0].name, "Recovered");
        assert_eq!(runtime.next_instance_id, 5);

        fs::remove_file(&store_path).ok();
        fs::remove_file(&backup_path).ok();
    }

    #[test]
    fn smoke_create_launch_kill_restart_roundtrip() {
        let store_path = unique_state_path("smoke-flow");
        let state = AppState::new_with_store_path(store_path.clone());

        let launch_epoch = 1_710_000_000_u64;
        let kill_epoch = 1_710_000_120_u64;

        {
            let mut runtime = state.runtime.lock().expect("state lock poisoned");
            runtime.instances.clear();
            runtime.profiles = vec![ProfileRecord {
                id: "profile-offline-smoke".to_string(),
                name: "SmokePlayer".to_string(),
                profile_type: "offline".to_string(),
                active: true,
                account_id: None,
                email: None,
                access_token_expires_at_epoch: None,
                last_authenticated_at_epoch: None,
            }];
            runtime.next_instance_id = 2;
            runtime.next_deployment_id = 1;

            // create
            runtime.instances.push(InstanceRecord {
                id: "inst-1".to_string(),
                name: "Smoke Instance".to_string(),
                icon_key: None,
                banner_key: None,
                loader: "vanilla".to_string(),
                loader_version: None,
                version: "1.21.4".to_string(),
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
            });

            // launch
            runtime.instances[0].running = true;
            runtime.instances[0].last_played = Some(launch_epoch);
            runtime.instances[0].last_exit_state = None;
            runtime.instances[0].last_exit_code = None;
            runtime.instances[0].last_exit_reason = None;
            runtime.instances[0].last_exit_at_epoch = None;

            // kill
            runtime.instances[0].running = false;
            runtime.instances[0].last_exit_state = Some("killed".to_string());
            runtime.instances[0].last_exit_reason = Some("terminated by user".to_string());
            runtime.instances[0].last_exit_at_epoch = Some(kill_epoch);

            state
                .persist(&runtime)
                .expect("failed to persist smoke state");
        }

        // restart
        let reloaded = AppState::new_with_store_path(store_path.clone());
        let runtime = reloaded.runtime.lock().expect("state lock poisoned");
        let instance = runtime.instances.first().expect("missing smoke instance");

        assert_eq!(runtime.instances.len(), 1);
        assert_eq!(runtime.profiles.len(), 1);
        assert_eq!(instance.name, "Smoke Instance");
        assert_eq!(instance.last_played, Some(launch_epoch));
        assert_eq!(instance.last_exit_state.as_deref(), Some("killed"));
        assert_eq!(
            instance.last_exit_reason.as_deref(),
            Some("terminated by user")
        );
        assert_eq!(instance.last_exit_at_epoch, Some(kill_epoch));
        assert!(!instance.running, "running must reset after restart");

        fs::remove_file(&store_path).ok();
        fs::remove_file(backup_path_for(&store_path)).ok();
    }
}
