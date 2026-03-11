# Orbiq Launcher - 4 Week Daily Driver Roadmap

## Goal

UI concept-ийг хадгалж reliability-г production түвшинд хүргэх.

## Week 1 - Stability Baseline + Diagnostics

- [x] Structured backend error code foundation (`AUTH_*`, `PROVISION_*`, `INSTALL_*`, `LAUNCH_*`)
- [x] `export_debug_bundle` command
- [x] Diagnostics modal
- [x] Launch fail -> Diagnostics toast shortcut

## Week 2 - Dependency + Compatibility Preflight

- [x] `preflight_instance_launch` command
- [x] Rule checks:
- Loader/version support matrix check
- Loader-version mismatch check
- Iris/Sodium dependency check
- Shader runtime requirement check
- Loader mismatch mod detection
- [x] Frontend preflight modal (`Fix now` + `Continue anyway`)
- [x] Existing required-tracked install flow integrated with preflight fix attempt

## Week 3 - Auth + Session Hardening

- [x] OAuth command error mapping (actionable coded failures)
- [x] Additional nonce/clock-skew telemetry
- [x] Explicit relink-needed UI state split for entitlement/token failure branches
- [x] Expanded session race integration tests

## Week 4 - Release Discipline + Quality Gates

- [x] CI quality workflow (`.github/workflows/ci.yml`)
- [x] Channel policy document (`alpha -> beta -> stable`)
- [x] Changelog + rollback automation hooks
- [x] Post-release metrics dashboard automation

## Public Interface Changes

1. Backend commands:
- `preflight_instance_launch`
- `export_debug_bundle`

2. Domain types:
- `PreflightIssue`
- `PreflightInstanceLaunchResponse`
- `DebugBundleResult`

3. Frontend:
- Diagnostics modal actions
- Preflight gate before provision/launch
