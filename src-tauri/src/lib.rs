mod auth;
mod commands;
mod domain;
mod java_runtime;
mod launch_builder;
mod orbiq_auth;
mod provisioning;
mod services;
mod storage;

use std::io::Write;
use std::time::Duration;

use storage::{persist_runtime, unix_epoch_now, AppState};
use tauri::Manager;
use tauri_plugin_deep_link::DeepLinkExt;

fn stop_stop_on_close_deployments(app: &tauri::AppHandle) {
    let Some(state) = app.try_state::<AppState>() else {
        return;
    };
    let mut runtime = match state.runtime.lock() {
        Ok(value) => value,
        Err(_) => return,
    };
    let target_ids = runtime
        .deployments
        .iter()
        .filter(|item| item.running && item.runtime_mode == "stop_on_close")
        .map(|item| item.id.clone())
        .collect::<Vec<_>>();
    if target_ids.is_empty() {
        return;
    }

    let now = unix_epoch_now();
    let mut changed = false;
    for deployment_id in target_ids {
        let mut handle = match runtime.deployment_processes.remove(&deployment_id) {
            Some(value) => value,
            None => continue,
        };
        if let Some(stdin) = handle.stdin.as_mut() {
            let _ = stdin.write_all(b"stop\n");
            let _ = stdin.flush();
        }
        let mut exited = false;
        for _ in 0..16 {
            match handle.child.try_wait() {
                Ok(Some(_)) => {
                    exited = true;
                    break;
                }
                Ok(None) => std::thread::sleep(Duration::from_millis(200)),
                Err(_) => break,
            }
        }
        if !exited {
            let _ = handle.child.kill();
            let _ = handle.child.wait();
        }
        if let Some(item) = runtime
            .deployments
            .iter_mut()
            .find(|row| row.id == deployment_id)
        {
            item.running = false;
            item.players_online = 0;
            item.status = "stopped_on_close".to_string();
            item.last_stopped_at_epoch = Some(now);
            item.idle_deadline_epoch = None;
            item.warning_started_at_epoch = None;
            changed = true;
        }
    }

    if changed {
        let _ = persist_runtime(&state, &runtime);
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let _ = dotenvy::dotenv_override();

    let app = tauri::Builder::default()
        .on_page_load(|window, payload| {
            if cfg!(debug_assertions) && payload.url().as_str() == "about:blank" {
                let _ = window.eval("window.location.replace('http://127.0.0.1:1420/');");
            }
        })
        .plugin(tauri_plugin_single_instance::init(|app, _argv, _cwd| {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.set_focus();
            }
        }))
        .plugin(tauri_plugin_deep_link::init())
        .setup(|app| {
            let app_data_dir = app.path().app_data_dir()?;
            let store_path = app_data_dir.join("orbiq_state.json");
            app.manage(AppState::new_with_store_path(store_path));

            if let Err(err) = app.deep_link().register_all() {
                log::warn!("deep-link registration skipped: {}", err);
            }

            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            commands::list_instances,
            commands::get_instance_info,
            commands::get_profiles,
            commands::get_java_runtime_info,
            commands::create_instance,
            commands::list_minecraft_versions,
            commands::list_loader_supported_versions,
            commands::list_loader_versions,
            commands::duplicate_instance,
            commands::rename_instance,
            commands::delete_instance,
            commands::update_instance_launch_config,
            commands::open_instance_directory,
            commands::resolve_instance_directory,
            commands::open_instance_directory_in_terminal,
            commands::open_external_url,
            commands::update_minecraft_skin,
            commands::get_minecraft_skin_status,
            commands::rollback_minecraft_skin,
            commands::install_browse_item,
            commands::remove_instance_file,
            commands::set_instance_file_enabled,
            commands::check_instance_files,
            commands::list_instance_files,
            commands::list_instance_directory_entries,
            commands::list_instance_worlds,
            commands::get_instance_world_details,
            commands::resolve_item_texture,
            commands::list_world_players,
            commands::get_world_player_inventory,
            commands::preflight_instance_launch,
            commands::export_debug_bundle,
            commands::create_offline_profile,
            commands::set_active_profile,
            commands::remove_profile,
            commands::start_microsoft_device_code_login,
            commands::poll_microsoft_device_code_login,
            commands::start_microsoft_oauth_login_command,
            commands::complete_microsoft_oauth_login_command,
            commands::refresh_microsoft_profile_token,
            commands::logout_microsoft_profile,
            commands::start_orbiq_email_verification,
            commands::verify_orbiq_email_code,
            commands::send_orbiq_welcome_email,
            commands::launch_instance,
            commands::kill_instance,
            commands::provision_instance,
            commands::analyze_server_host,
            commands::deploy_server,
            commands::list_deployments,
            commands::start_deployment,
            commands::stop_deployment,
            commands::restart_deployment,
            commands::regenerate_deployment_join_code,
            commands::cancel_deployment_shutdown,
            commands::set_deployment_players,
            commands::resolve_join_code,
            commands::open_deployment_directory,
            commands::open_deployment_terminal
        ])
        .build(tauri::generate_context!())
        .expect("error while building tauri application");

    app.run(|app_handle, event| {
        if let tauri::RunEvent::ExitRequested { .. } = event {
            stop_stop_on_close_deployments(app_handle);
        }
    });
}
