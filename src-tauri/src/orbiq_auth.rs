use std::collections::HashMap;
use std::env;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Mutex, OnceLock};

use chrono::Utc;
use lettre::message::header::ContentType;
use lettre::message::{Mailbox, MultiPart, SinglePart};
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use reqwest::blocking::Client;
use serde_json::Value;

use crate::storage::unix_epoch_now;

const OTP_EXPIRE_SECONDS: u64 = 10 * 60;
const OTP_RETRY_SECONDS: u32 = 30;
const ORBIQ_LOGO_SVG: &str = include_str!("../../Orbiq.svg");

static ORBIQ_VERIFICATION_STORE: OnceLock<Mutex<HashMap<String, PendingVerification>>> =
    OnceLock::new();
static ORBIQ_VERIFICATION_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Debug, Clone)]
pub struct EmailVerificationStart {
    pub session_id: String,
    pub expires_at_epoch: u64,
    pub retry_after_seconds: u32,
}

#[derive(Debug, Clone)]
struct PendingVerification {
    session_id: String,
    code: String,
    expires_at_epoch: u64,
}

#[derive(Debug, Clone)]
struct SmtpConfig {
    host: String,
    port: u16,
    from: String,
    username: Option<String>,
    password: Option<String>,
}

#[derive(Debug, Clone)]
struct EmailDeliveryContext {
    device: String,
    sent_at_utc: String,
    ip: String,
    region: String,
}

fn verification_store() -> &'static Mutex<HashMap<String, PendingVerification>> {
    ORBIQ_VERIFICATION_STORE.get_or_init(|| Mutex::new(HashMap::new()))
}

fn normalize_email(value: &str) -> String {
    value.trim().to_lowercase()
}

fn is_valid_email(value: &str) -> bool {
    let trimmed = value.trim();
    if trimmed.is_empty() {
        return false;
    }
    let Some((left, right)) = trimmed.split_once('@') else {
        return false;
    };
    if left.trim().is_empty() || right.trim().is_empty() {
        return false;
    }
    right.contains('.')
}

fn next_session_id() -> String {
    let suffix = ORBIQ_VERIFICATION_COUNTER.fetch_add(1, Ordering::Relaxed);
    format!("orbiq-otp-{}-{}", unix_epoch_now(), suffix)
}

fn compute_code() -> String {
    let seed = ORBIQ_VERIFICATION_COUNTER.fetch_add(1, Ordering::Relaxed) ^ unix_epoch_now();
    let number = seed.wrapping_mul(1_664_525).wrapping_add(1_013_904_223) % 1_000_000;
    format!("{:06}", number)
}

fn smtp_config_from_env() -> SmtpConfig {
    let host = env::var("ORBIQ_SMTP_HOST")
        .unwrap_or_else(|_| "127.0.0.1".to_string())
        .trim()
        .to_string();
    let port = env::var("ORBIQ_SMTP_PORT")
        .ok()
        .and_then(|value| value.trim().parse::<u16>().ok())
        .unwrap_or(1025);
    let from = env::var("ORBIQ_SMTP_FROM")
        .unwrap_or_else(|_| "Orbiq Launcher <no-reply@orbiq.local>".to_string())
        .trim()
        .to_string();
    let username = env::var("ORBIQ_SMTP_USERNAME")
        .ok()
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    let password = env::var("ORBIQ_SMTP_PASSWORD")
        .ok()
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());
    SmtpConfig {
        host,
        port,
        from,
        username,
        password,
    }
}

fn html_escape(value: &str) -> String {
    value
        .replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
        .replace('\'', "&#39;")
}

fn orbiq_logo_html() -> String {
    let svg = ORBIQ_LOGO_SVG
        .replace("width=\"500\"", "width=\"28\"")
        .replace("height=\"500\"", "height=\"28\"");
    format!("<div class=\"logo-box\">{}</div>", svg)
}

fn email_style_block() -> &'static str {
    r#"<style>
      :root {
        color-scheme: dark light;
      }
      body {
        margin: 0;
        padding: 24px;
        background: #000;
        color: #efefef;
        font-family: "Segoe UI", Arial, sans-serif;
      }
      .card {
        max-width: 560px;
        margin: 0 auto;
        background: #0a0a0a;
        border: 1px solid #242424;
        border-radius: 14px;
        overflow: hidden;
      }
      .header {
        padding: 16px 18px;
        border-bottom: 1px solid #1f1f1f;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .title {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        letter-spacing: .2px;
      }
      .logo-box {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        padding: 20px;
      }
      .muted {
        color: #b9b9b9;
      }
      .dim {
        color: #8e8e8e;
      }
      .panel {
        margin: 14px 0;
        padding: 12px 14px;
        background: #050505;
        border: 1px solid #2b2b2b;
        border-radius: 10px;
      }
      .code {
        font-size: 30px;
        letter-spacing: 8px;
        font-weight: 800;
        color: #fff;
        text-align: center;
      }
      .cta-row {
        margin-top: 14px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .btn {
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
        color: #fff !important;
        border: 1px solid #3a3a3a;
        background: #111;
        border-radius: 8px;
        padding: 8px 12px;
        display: inline-block;
      }
      .btn.primary {
        border-color: #ffffff66;
        background: #fff;
        color: #000 !important;
      }
      .footer {
        margin-top: 14px;
        padding-top: 10px;
        border-top: 1px solid #1f1f1f;
        font-size: 12px;
        color: #8e8e8e;
      }
      .footer a {
        color: #d8d8d8;
      }
      @media (prefers-color-scheme: light) {
        body {
          background: #f3f3f3;
          color: #121212;
        }
        .card {
          background: #fff;
          border-color: #d8d8d8;
        }
        .header {
          border-bottom-color: #e2e2e2;
        }
        .title {
          color: #111;
        }
        .logo-box {
          background: #111;
          border-color: #111;
        }
        .panel {
          background: #f8f8f8;
          border-color: #dddddd;
        }
        .code {
          color: #111;
        }
        .muted {
          color: #444;
        }
        .dim {
          color: #666;
        }
        .btn {
          border-color: #d1d1d1;
          background: #f2f2f2;
          color: #111 !important;
        }
        .btn.primary {
          background: #111;
          color: #fff !important;
          border-color: #111;
        }
        .footer {
          border-top-color: #e1e1e1;
          color: #666;
        }
        .footer a {
          color: #222;
        }
      }
    </style>"#
}

fn resolve_device_label() -> String {
    let host = env::var("COMPUTERNAME")
        .ok()
        .or_else(|| env::var("HOSTNAME").ok())
        .unwrap_or_else(|| "unknown-host".to_string());
    format!("{} / {} / {}", env::consts::OS, env::consts::ARCH, host)
}

fn resolve_ip_region() -> (String, String) {
    let client = match Client::builder()
        .timeout(std::time::Duration::from_secs(3))
        .build()
    {
        Ok(client) => client,
        Err(_) => return ("unavailable".to_string(), "unavailable".to_string()),
    };

    let response = match client.get("https://ipapi.co/json/").send() {
        Ok(response) => response,
        Err(_) => return ("unavailable".to_string(), "unavailable".to_string()),
    };

    let payload = match response.json::<Value>() {
        Ok(value) => value,
        Err(_) => return ("unavailable".to_string(), "unavailable".to_string()),
    };

    let ip = payload
        .get("ip")
        .and_then(Value::as_str)
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .unwrap_or("unavailable")
        .to_string();
    let city = payload
        .get("city")
        .and_then(Value::as_str)
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .unwrap_or("");
    let country = payload
        .get("country_name")
        .and_then(Value::as_str)
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .unwrap_or("");
    let region = if city.is_empty() && country.is_empty() {
        "unavailable".to_string()
    } else if city.is_empty() {
        country.to_string()
    } else if country.is_empty() {
        city.to_string()
    } else {
        format!("{}, {}", city, country)
    };
    (ip, region)
}

fn resolve_delivery_context() -> EmailDeliveryContext {
    let sent_at_utc = Utc::now().format("%Y-%m-%d %H:%M:%S UTC").to_string();
    let (ip, region) = resolve_ip_region();
    EmailDeliveryContext {
        device: resolve_device_label(),
        sent_at_utc,
        ip,
        region,
    }
}

fn render_context_panel(context: &EmailDeliveryContext) -> String {
    format!(
        "<div class=\"panel\"><div style=\"font-size:11px;color:#8f8f8f;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px\">Request Details</div><div class=\"muted\" style=\"font-size:12px;line-height:1.7\"><div><strong>Device:</strong> {}</div><div><strong>Time:</strong> {}</div><div><strong>IP:</strong> {}</div><div><strong>Region:</strong> {}</div></div></div>",
        html_escape(&context.device),
        html_escape(&context.sent_at_utc),
        html_escape(&context.ip),
        html_escape(&context.region)
    )
}

fn send_html_email(
    target_email: &str,
    subject: &str,
    text_body: String,
    html_body: String,
) -> Result<(), String> {
    let config = smtp_config_from_env();
    let from_mailbox = config
        .from
        .parse::<Mailbox>()
        .map_err(|err| format!("invalid ORBIQ_SMTP_FROM mailbox: {}", err))?;
    let to_mailbox = target_email
        .parse::<Mailbox>()
        .map_err(|err| format!("invalid target email address: {}", err))?;

    let email = Message::builder()
        .from(from_mailbox)
        .to(to_mailbox)
        .subject(subject)
        .multipart(
            MultiPart::alternative()
                .singlepart(
                    SinglePart::builder()
                        .header(ContentType::TEXT_PLAIN)
                        .body(text_body),
                )
                .singlepart(
                    SinglePart::builder()
                        .header(ContentType::TEXT_HTML)
                        .body(html_body),
                ),
        )
        .map_err(|err| format!("failed to build email message: {}", err))?;

    let mut builder = SmtpTransport::builder_dangerous(config.host.as_str()).port(config.port);
    if let (Some(username), Some(password)) = (config.username, config.password) {
        builder = builder.credentials(Credentials::new(username, password));
    }
    let transport = builder.build();
    transport
        .send(&email)
        .map_err(|err| format!("failed to send email: {}", err))?;

    Ok(())
}

fn send_otp_email(target_email: &str, code: &str, expires_at_epoch: u64) -> Result<(), String> {
    let ttl_minutes = (expires_at_epoch.saturating_sub(unix_epoch_now()) / 60).max(1);
    let code_safe = html_escape(code);
    let logo = orbiq_logo_html();
    let context = resolve_delivery_context();
    let context_panel = render_context_panel(&context);
    let copy_code_link = format!("orbiq://verify?code={}", code_safe);
    let open_orbiq_link = "orbiq://open".to_string();
    let text_body = format!(
        "Your Orbiq verification code is: {}\nThis code expires in {} minutes.\nOpen app and autofill with this link: {}\nDevice: {}\nTime: {}\nIP: {}\nRegion: {}\nIf you did not request this, ignore this email.",
        code,
        ttl_minutes,
        copy_code_link,
        context.device,
        context.sent_at_utc,
        context.ip,
        context.region
    );
    let html_body = format!(
        r#"<!doctype html>
<html>
  <head>{}</head>
  <body>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="card">
      <tr>
        <td class="header">
            {}
            <div class="title">Orbiq Verification</div>
        </td>
      </tr>
      <tr>
        <td class="content">
          <p class="muted" style="margin:0 0 12px 0;font-size:14px;">Use this code to finish creating your Orbiq account.</p>
          <div class="panel" style="text-align:center;">
            <div class="code">{}</div>
          </div>
          <div class="cta-row">
            <a class="btn primary" href="{}">Copy Code</a>
            <a class="btn" href="{}">Open Orbiq</a>
          </div>
          <p class="muted" style="margin:10px 0 6px 0;font-size:13px;">Expires in <strong>{} minutes</strong>.</p>
          <p class="dim" style="margin:0;font-size:12px;">If app deep link fails, use the 6-digit code manually.</p>
          {}
          <div class="footer">
            If this wasn't you, ignore this email.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>"#,
        email_style_block(),
        logo,
        code_safe,
        copy_code_link,
        open_orbiq_link,
        ttl_minutes,
        context_panel
    );
    send_html_email(
        target_email,
        "Orbiq verification code",
        text_body,
        html_body,
    )
}

pub fn send_orbiq_welcome_email(
    email: &str,
    username: Option<&str>,
    display_name: Option<&str>,
) -> Result<(), String> {
    let target_email = normalize_email(email);
    if !is_valid_email(&target_email) {
        return Err("valid email is required".to_string());
    }

    let username_value = username
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .unwrap_or("player.orbiq");
    let display_name_value = display_name
        .map(|value| value.trim())
        .filter(|value| !value.is_empty())
        .unwrap_or("Player");
    let username_safe = html_escape(username_value);
    let display_name_safe = html_escape(display_name_value);
    let logo = orbiq_logo_html();
    let context = resolve_delivery_context();
    let context_panel = render_context_panel(&context);
    let open_orbiq_link = "orbiq://open".to_string();
    let ms_link = "orbiq://link-microsoft".to_string();

    let text_body = format!(
        "Hi {},\n\nWelcome to Orbiq.\nYour account: {}\n\nYou can now launch with Orbiq and link Microsoft anytime from Accounts.\nDevice: {}\nTime: {}\nIP: {}\nRegion: {}\n\n- Orbiq Launcher",
        display_name_value,
        username_value,
        context.device,
        context.sent_at_utc,
        context.ip,
        context.region
    );
    let html_body = format!(
        r#"<!doctype html>
<html>
  <head>{}</head>
  <body>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="card">
      <tr>
        <td class="header">
            {}
            <div class="title">Welcome to Orbiq</div>
        </td>
      </tr>
      <tr>
        <td class="content">
          <p class="muted" style="margin:0 0 12px 0;font-size:14px;">Hi {}, your account is ready.</p>
          <div class="panel">
            <div style="font-size:11px;color:#8f8f8f;text-transform:uppercase;letter-spacing:1px;">Orbiq ID</div>
            <div style="margin-top:4px;font-size:16px;font-weight:700;color:inherit;">{}</div>
          </div>
          <div class="cta-row">
            <a class="btn primary" href="{}">Open Orbiq</a>
            <a class="btn" href="{}">Link Microsoft</a>
          </div>
          <p class="muted" style="margin:10px 0 8px 0;font-size:13px;">You can launch now and link Microsoft anytime from Accounts.</p>
          {}
          <div class="footer">
            If this wasn't you, secure your mailbox and reset your Orbiq password.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>"#,
        email_style_block(),
        logo,
        display_name_safe,
        username_safe,
        open_orbiq_link,
        ms_link,
        context_panel
    );
    send_html_email(&target_email, "Welcome to Orbiq", text_body, html_body)
}

pub fn start_orbiq_email_verification(email: &str) -> Result<EmailVerificationStart, String> {
    let normalized_email = normalize_email(email);
    if !is_valid_email(&normalized_email) {
        return Err("valid email is required".to_string());
    }

    let session_id = next_session_id();
    let code = compute_code();
    let expires_at_epoch = unix_epoch_now().saturating_add(OTP_EXPIRE_SECONDS);

    send_otp_email(&normalized_email, &code, expires_at_epoch)?;

    let mut map = verification_store()
        .lock()
        .map_err(|_| "verification session lock poisoned".to_string())?;
    map.insert(
        normalized_email,
        PendingVerification {
            session_id: session_id.clone(),
            code,
            expires_at_epoch,
        },
    );

    Ok(EmailVerificationStart {
        session_id,
        expires_at_epoch,
        retry_after_seconds: OTP_RETRY_SECONDS,
    })
}

pub fn verify_orbiq_email_code(email: &str, session_id: &str, code: &str) -> Result<(), String> {
    let normalized_email = normalize_email(email);
    if !is_valid_email(&normalized_email) {
        return Err("valid email is required".to_string());
    }

    let normalized_session = session_id.trim();
    if normalized_session.is_empty() {
        return Err("verification session id is required".to_string());
    }
    let normalized_code = code.trim();
    if normalized_code.len() != 6 || !normalized_code.chars().all(|ch| ch.is_ascii_digit()) {
        return Err("verification code must be 6 digits".to_string());
    }

    let mut map = verification_store()
        .lock()
        .map_err(|_| "verification session lock poisoned".to_string())?;
    let Some(pending) = map.get(&normalized_email).cloned() else {
        return Err("verification session not found; request a new code".to_string());
    };

    if pending.session_id != normalized_session {
        return Err("verification session is invalid; request a new code".to_string());
    }
    if unix_epoch_now() > pending.expires_at_epoch {
        map.remove(&normalized_email);
        return Err("verification code expired; request a new code".to_string());
    }
    if pending.code != normalized_code {
        return Err("verification code is incorrect".to_string());
    }

    map.remove(&normalized_email);
    Ok(())
}
