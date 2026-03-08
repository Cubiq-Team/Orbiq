# Orbiq Launcher V1 Execution Plan

## Goal
- Keep current UI and animations unchanged.
- Make launcher lightweight, fast, and production-stable.
- Ship Windows-first desktop build with reliable persistence and process control.

## Scope Lock (V1)
- In scope:
  - Instance list/create/rename/config save
  - Launch/kill flow
  - Persistent state across restarts
  - Basic deployment list flow
  - Offline profile support (existing mock profile model)
- Out of scope (V2 unless prioritized):
  - Full Microsoft OAuth flow
  - Full real Minecraft provisioning/downloader
  - Auto Java install manager

## Architecture (Locked)
- `src-tauri/src/commands.rs`
  - Tauri invoke boundary only.
- `src-tauri/src/domain.rs`
  - API/domain DTOs and serde compatibility parsing.
- `src-tauri/src/storage.rs`
  - Runtime state, disk persistence, schema versioning, migration scaffolding.
- `src-tauri/src/services.rs`
  - Shared service helpers (normalization, process refresh).

## Milestones
1. Phase A: Foundation Hardening (completed)
- [x] Split backend into layered modules.
- [x] Add persistence with app-data path.
- [x] Add schema versioning + legacy migration scaffold.
- [x] Add automated tests for migration and state roundtrip.

2. Phase B: Runtime Reliability
- [x] Add process-state event stream (`starting`, `running`, `stopped`, `failed`).
- [x] Persist crash/exit metadata per instance.
- [x] Add safer state write fallback (`.bak` recovery on corrupted file).

3. Phase C: Real Provisioning Core
- [x] Introduce download service abstraction.
- [x] Implement manifest/assets/libraries download pipeline with checksum.
- [x] Add resumable/retry policy and bounded concurrency.

4. Phase D: Java + Launch Builder
- [x] Detect system Java and validate minimum version.
- [x] Add per-instance Java path override.
- [x] Build robust JVM/game arg composer and validation.

5. Phase E: Auth and Profile Expansion
- [x] Keep offline profile path stable.
- [x] Add Microsoft Device Code login flow and secure token storage.
- [x] Token refresh and logout cleanup.

6. Phase F: QA + Release
- [x] Add integration smoke tests (create -> launch -> kill -> restart).
- [x] Prepare release checklist and changelog.
- [x] Build and verify MSI + NSIS installer artifacts.

## Acceptance Criteria (V1)
- App restart does not lose instances/config/deployments.
- Invalid state file is handled without crash (fallback + error reporting).
- Launch and kill commands are deterministic and recover after process exits.
- All backend tests pass in CI-equivalent local run.
- `npm run tauri:build` produces installable artifacts successfully.

## Commands
- Backend tests: `npm run test:backend`
- Type/syntax check (frontend script): `node --check src/web/scripts/app.js`
- Full build: `npm run tauri:build`
