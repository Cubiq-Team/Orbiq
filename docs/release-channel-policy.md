# Orbiq Release Channel Policy

## Channels

1. `alpha`
- Fast iteration branch for internal validation.
- Can contain incomplete features.

2. `beta`
- Feature-complete candidate builds.
- Must pass all CI quality gates.

3. `stable`
- Production release for daily-driver users.
- Only promoted from `beta` after smoke verification.

## Promotion Rules

1. `alpha -> beta`
- Required:
- `npm run build:web`
- `npm run test:backend`
- `npm run test:loaders`
- `npm run test:browse`
- `npm run test:install-matrix`

2. `beta -> stable`
- Required:
- All CI gates green on release commit.
- Manual acceptance scenarios executed:
- Fabric + Iris without Sodium preflight catch and fix path.
- Expired Microsoft token refresh/relink clarity.
- Launch failure diagnostics export works.

## Publish Blockers

Any failed gate blocks publish automatically.

1. Build failure
2. Backend test failure
3. Loader smoke failure
4. Browse smoke failure
5. Install matrix smoke failure

## Rollback Checklist

1. Freeze new releases.
2. Re-publish last known good `stable` artifact.
3. Update changelog with rollback reason and impacted version.
4. Track incident in post-release checklist:
- auth failures
- provision failures
- launch failures

## Automation Hooks

1. Rollback readiness guard:
- `npm run release:rollback-check`

2. Post-release monitor:
- `npm run monitor:post-release`
- report artifact: `reports/post-release-monitor.json`
