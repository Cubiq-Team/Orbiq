mod auth;
mod commands;
mod domain;
mod java_runtime;
mod launch_builder;
mod orbiq_auth;
mod provisioning;
mod services;
mod storage;

use storage::AppState;
use tauri::Manager;
use tauri_plugin_deep_link::DeepLinkExt;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
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
            commands::create_offline_profile,
            commands::set_active_profile,
            commands::remove_profile,
            commands::start_microsoft_device_code_login,
            commands::poll_microsoft_device_code_login,
            commands::refresh_microsoft_profile_token,
            commands::logout_microsoft_profile,
            commands::start_orbiq_email_verification,
            commands::verify_orbiq_email_code,
            commands::send_orbiq_welcome_email,
            commands::launch_instance,
            commands::kill_instance,
            commands::provision_instance,
            commands::deploy_server,
            commands::list_deployments
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
