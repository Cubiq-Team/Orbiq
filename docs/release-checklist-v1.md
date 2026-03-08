# Orbiq Launcher V1 Release Checklist

## Release Target
- Version: `0.1.0`
- Date: `2026-03-08`
- Platform: `Windows x64`

## Pre-Release Gates
- [ ] Confirm `docs/launcher-v1-plan.md` Phases A-F are complete.
- [ ] Verify no debug-only flags are enabled in production config.
- [ ] Verify app icon, product name, and bundle identifiers are correct.

## QA Smoke Flow
- [ ] Create instance.
- [ ] Launch instance (provision + launch path).
- [ ] Kill instance.
- [ ] Restart launcher and confirm instance/runtime metadata persisted.
- [ ] Create offline profile and launch with it.
- [ ] Microsoft device-code login completes and profile appears.
- [ ] Microsoft logout removes token/profile cleanly.

## Automated Verification
- [ ] `cargo check --manifest-path src-tauri/Cargo.toml`
- [ ] `cargo test --manifest-path src-tauri/Cargo.toml`
- [ ] `node --check src/web/scripts/app.js`
- [ ] `npm run tauri:build`

## Installer Verification
- [ ] MSI produced:
  - `src-tauri/target/release/bundle/msi/Orbiq_0.1.0_x64_en-US.msi`
- [ ] NSIS produced:
  - `src-tauri/target/release/bundle/nsis/Orbiq_0.1.0_x64-setup.exe`
- [ ] Fresh install works.
- [ ] Upgrade install works over previous local build.
- [ ] Uninstall removes app binaries cleanly.

## Release Notes
- [ ] Update `CHANGELOG.md` for `0.1.0`.
- [ ] Publish known limitations and V2 scope notes.
