# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] - 2026-03-08

### Added
- Layered Tauri backend modules (`commands`, `domain`, `storage`, `services`).
- Persistent launcher state with schema versioning, migration path, and `.bak` fallback.
- Instance lifecycle events (`starting`, `running`, `stopped`, `failed`).
- Exit metadata persistence per instance.
- Provisioning pipeline for manifests, libraries, assets, checksum validation, retries, and resumable downloads.
- Java runtime detection and per-instance Java path override support.
- Launch plan composer with JVM/game argument validation.
- Offline profile commands (`create`, `set active`, `remove`) for stable local profile flow.
- Microsoft device-code login flow.
- Secure token storage using OS keyring.
- Token refresh and Microsoft logout cleanup commands.
- Frontend hookup for profile-backed launch picker, offline profile creation, and Microsoft device-code polling.
- Release checklist document for V1 packaging and validation.

### Changed
- Backend command surface expanded to cover auth/profile lifecycle end-to-end.
- Profile model extended with optional account metadata and token-expiry tracking.

### Verified
- Backend tests passing (`cargo test`).
- Frontend script syntax check passing (`node --check`).
- Windows bundles generated successfully (MSI + NSIS).
