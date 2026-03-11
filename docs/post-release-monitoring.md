# Post-Release Monitoring

## Purpose

Stable channel publish-ийн дараа auth/provision/launch/install failure-уудыг автоматаар тоолж хянана.

## Local Run

```bash
npm run monitor:post-release
```

Optional:

```bash
node scripts/post-release-monitor.js --input tauri_live.log --input tauri_dev.log --max-auth 3 --max-launch 2
```

## Output

- JSON report: `reports/post-release-monitor.json`
- Key metrics:
- `authFailures`
- `provisionFailures`
- `launchFailures`
- `installFailures`
- `topCodes`

## CI Automation

- Workflow: `.github/workflows/post-release-monitor.yml`
- Trigger:
- every 6 hours
- manual (`workflow_dispatch`)

## Operational Checklist

1. If `AUTH_RELINK_REQUIRED` spikes:
- verify Microsoft refresh/relink flow.
2. If `PROVISION_*` spikes:
- verify runtime/loader endpoints and mirrors.
3. If `LAUNCH_*` spikes:
- inspect diagnostics bundle from affected users.
4. If `INSTALL_*` spikes:
- verify provider download URLs and file targets.
