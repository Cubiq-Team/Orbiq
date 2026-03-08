# Orbiq Email OTP with Docker

This launcher now sends Orbiq verification codes through SMTP using backend commands:

- `start_orbiq_email_verification`
- `verify_orbiq_email_code`

## 1) Start local SMTP (Mailpit)

```powershell
docker compose -f docker-compose.mailpit.yml up -d
```

Mail UI:

- http://localhost:8025

SMTP endpoint:

- host: `127.0.0.1`
- port: `1025`

## 2) Set SMTP env vars (PowerShell)

Run in the same terminal before `npm run tauri:dev`:

```powershell
$env:ORBIQ_SMTP_HOST="127.0.0.1"
$env:ORBIQ_SMTP_PORT="1025"
$env:ORBIQ_SMTP_FROM="Orbiq Launcher <no-reply@orbiq.local>"
```

If your SMTP requires auth:

```powershell
$env:ORBIQ_SMTP_USERNAME="your_user"
$env:ORBIQ_SMTP_PASSWORD="your_password"
```

## 3) Run launcher

```powershell
npm run tauri:dev
```

Create account flow:

1. Fill account fields.
2. Click `Send Code`.
3. Open Mailpit inbox and copy the 6-digit code.
4. Verify and finish (optionally link Microsoft).
