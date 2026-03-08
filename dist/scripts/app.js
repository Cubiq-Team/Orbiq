
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// MODAL DEFINITIONS
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function selectedInstanceNameForModal() {
  const selected = getSelectedInstanceName();
  return selected || 'Instance';
}

function selectedInstanceDetailsForModal() {
  const name = selectedInstanceNameForModal();
  const details = (typeof INSTANCE_DATA === 'object' && INSTANCE_DATA && INSTANCE_DATA[name]) || null;
  const loader = normalizeLoader(details && details.loader ? details.loader : 'vanilla');
  const version = (details && details.version ? String(details.version) : 'unknown').trim();
  return { name, loader, version };
}

function buildInstanceShareLink() {
  const context = selectedInstanceDetailsForModal();
  const nameSlug = context.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'instance';
  const versionSlug = context.version.replace(/[^0-9a-z]+/gi, '').toLowerCase() || 'unknown';
  const token = Math.random().toString(36).slice(2, 8);
  return `orbiq://share/${nameSlug}_${context.loader}_${versionSlug}_${token}`;
}

function buildDuplicateInstanceName() {
  const sourceName = selectedInstanceNameForModal();
  const used = new Set(
    Object.keys((typeof INSTANCE_DATA === 'object' && INSTANCE_DATA) || {}).map((item) =>
      String(item).toLowerCase()
    )
  );
  let candidate = sourceName + ' (copy)';
  let suffix = 2;
  while (used.has(candidate.toLowerCase())) {
    candidate = sourceName + ' (copy ' + suffix + ')';
    suffix += 1;
  }
  return candidate;
}

function normalizeMojibakeText(value) {
  if (typeof value !== 'string' || value.length === 0) return value;
  let text = value;

  text = text
    .replace(/\u00ef\u00bf\u00bd/g, '')
    .replace(/\uFFFD/g, '')
    .replace(/\u00c2(?=[\u00a0\u00b7])/g, '')
    .replace(/[\u0080-\u009f]/g, '')
    .replace(/\u00b8/g, '')
    .replace(/\uFE0F/g, '')
    .replace(/\u00A0/g, ' ')
    .replace(/\u2026/g, '...')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00b7/g, ' - ')
    .replace(/\s\?["']/g, ' - ')
    .replace(/\?{2,}/g, '...')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const token = text.trim();
  if (/^(?:YO|Y"|Y<|Y>|YZ|YT,|sT|s|~|Y-|Y)$/.test(token)) return '';
  if (/^[A-Z~<>",.'?-]{1,4}$/.test(token) && !/^(OK|ON|OFF|FPS|GB|MB|RAM|CPU)$/.test(token)) return '';

  return text;
}

function sanitizeMojibakeDom(root) {
  if (!root) return;

  const textNodes = [];
  if (root.nodeType === Node.TEXT_NODE) {
    textNodes.push(root);
  } else if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let current = walker.nextNode();
    while (current) {
      textNodes.push(current);
      current = walker.nextNode();
    }
  }

  for (const node of textNodes) {
    const parentTag = node.parentElement ? node.parentElement.tagName : '';
    if (parentTag === 'SCRIPT' || parentTag === 'STYLE') continue;
    const next = normalizeMojibakeText(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  const elements = [];
  if (root.nodeType === Node.ELEMENT_NODE) {
    elements.push(root);
    elements.push(...root.querySelectorAll('*'));
  } else if (root.nodeType === Node.DOCUMENT_NODE && root.documentElement) {
    elements.push(root.documentElement);
    elements.push(...root.documentElement.querySelectorAll('*'));
  } else if (root.parentElement) {
    elements.push(root.parentElement);
  }

  for (const el of elements) {
    for (const attr of ['placeholder', 'title', 'aria-label']) {
      if (!el.hasAttribute(attr)) continue;
      const before = el.getAttribute(attr);
      const after = normalizeMojibakeText(before);
      if (after !== before) el.setAttribute(attr, after);
    }
  }
}

let mojibakeObserver = null;
function installMojibakeSanitizer() {
  if (mojibakeObserver || typeof MutationObserver !== 'function' || !document.body) return;
  mojibakeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData' && mutation.target) {
        sanitizeMojibakeDom(mutation.target);
      }
      if (mutation.type === 'attributes' && mutation.target) {
        sanitizeMojibakeDom(mutation.target);
      }
      for (const node of mutation.addedNodes) {
        sanitizeMojibakeDom(node);
      }
    }
  });
  mojibakeObserver.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['placeholder', 'title', 'aria-label']
  });
}

const MODALS = {

  'orbiq-accounts': () => `
    <div class="mh">
      <div class="brand-logo" style="width:18px;height:18px;border-radius:4px;flex-shrink:0;padding:2px;box-sizing:border-box;background:#fff;color:#111;display:flex;align-items:center;justify-content:center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="100%" height="100%"><path fill="currentColor" d="M 192.214844 200.441406 C 157.855469 212.945312 126.144531 222.195312 103.179688 226.886719 C 82.046875 231.1875 68.328125 231.652344 66.722656 227.242188 C 65.171875 222.988281 75.167969 214.964844 92.863281 205.195312 C 94.625 204.21875 95.625 202.261719 95.351562 200.269531 C 95.347656 200.234375 95.339844 200.199219 95.335938 200.167969 C 94.886719 196.851562 91.339844 194.929688 88.335938 196.402344 C 42.695312 218.757812 14.417969 239.167969 18.125 249.359375 C 21.925781 259.792969 58.359375 256.875 109.644531 243.871094 C 111.503906 243.398438 113.476562 244.046875 114.671875 245.550781 C 138.878906 276.074219 180.777344 289.191406 219.402344 275.132812 C 268.214844 257.367188 279.625 221.777344 280.753906 195.453125 C 281.40625 180.277344 276.433594 169.785156 192.214844 200.441406 Z"/><path fill="currentColor" d="M 357.019531 126.011719 C 353.140625 115.359375 315.296875 118.621094 262.375 132.300781 C 238.5 100.003906 195.394531 85.796875 155.742188 100.230469 C 114.808594 115.128906 100.574219 143.695312 96.171875 167.042969 C 93.109375 183.289062 95.65625 197.835938 180.082031 167.105469 C 213.90625 154.796875 245.15625 145.648438 268.03125 140.894531 C 289.765625 136.371094 303.945312 135.816406 305.578125 140.304688 C 307.007812 144.242188 298.5625 151.398438 283.269531 160.199219 C 279.882812 162.148438 278.171875 166.0625 278.925781 169.898438 C 278.9375 169.960938 278.949219 170.023438 278.960938 170.082031 C 280.105469 175.980469 286.621094 179.09375 291.992188 176.402344 C 334.574219 155.058594 360.582031 135.800781 357.019531 126.011719 Z"/></svg></div>
      <span class="mh-title">Orbiq Account</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb" style="padding:12px 14px">
      <div class="orbiq-acct-card">
        <div class="orbiq-acct-header">
          <div class="orbiq-acct-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="100%" height="100%"><path fill="currentColor" d="M 192.214844 200.441406 C 157.855469 212.945312 126.144531 222.195312 103.179688 226.886719 C 82.046875 231.1875 68.328125 231.652344 66.722656 227.242188 C 65.171875 222.988281 75.167969 214.964844 92.863281 205.195312 C 94.625 204.21875 95.625 202.261719 95.351562 200.269531 C 95.347656 200.234375 95.339844 200.199219 95.335938 200.167969 C 94.886719 196.851562 91.339844 194.929688 88.335938 196.402344 C 42.695312 218.757812 14.417969 239.167969 18.125 249.359375 C 21.925781 259.792969 58.359375 256.875 109.644531 243.871094 C 111.503906 243.398438 113.476562 244.046875 114.671875 245.550781 C 138.878906 276.074219 180.777344 289.191406 219.402344 275.132812 C 268.214844 257.367188 279.625 221.777344 280.753906 195.453125 C 281.40625 180.277344 276.433594 169.785156 192.214844 200.441406 Z"/><path fill="currentColor" d="M 357.019531 126.011719 C 353.140625 115.359375 315.296875 118.621094 262.375 132.300781 C 238.5 100.003906 195.394531 85.796875 155.742188 100.230469 C 114.808594 115.128906 100.574219 143.695312 96.171875 167.042969 C 93.109375 183.289062 95.65625 197.835938 180.082031 167.105469 C 213.90625 154.796875 245.15625 145.648438 268.03125 140.894531 C 289.765625 136.371094 303.945312 135.816406 305.578125 140.304688 C 307.007812 144.242188 298.5625 151.398438 283.269531 160.199219 C 279.882812 162.148438 278.171875 166.0625 278.925781 169.898438 C 278.9375 169.960938 278.949219 170.023438 278.960938 170.082031 C 280.105469 175.980469 286.621094 179.09375 291.992188 176.402344 C 334.574219 155.058594 360.582031 135.800781 357.019531 126.011719 Z"/></svg></div>
          <div class="orbiq-acct-info">
            <div class="orbiq-acct-name">Dream</div>
            <div class="orbiq-acct-email">dream@orbiq.app</div>
          </div>
          <div class="orbiq-acct-badge">
            <div style="width:5px;height:5px;border-radius:50%;background:var(--green)"></div>
            Signed in
          </div>
        </div>
        <div class="orbiq-acct-meta">
          <div class="orbiq-acct-meta-row">
            <span>Orbiq ID</span>
            <span class="orbiq-acct-id">ORQ-0000-0000</span>
          </div>
          <div class="orbiq-acct-meta-row">
            <span>Plan</span>
            <span class="orbiq-acct-plan">Free</span>
          </div>
        </div>
        <div class="linked-list">
          <div class="linked-section-label">Linked Accounts</div>
          <div class="ms-linked-row" onclick="openModal('ms-linked-detail')">
            <div class="ms-linked-icon ms-brand">
              <div class="ms-grid" style="width:14px;height:14px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
            </div>
            <div style="width:28px;height:28px;border-radius:5px;overflow:hidden;flex-shrink:0;image-rendering:pixelated;background:var(--s3)">
              <img src="https://mc-heads.net/avatar/Dream/32" style="width:100%;image-rendering:pixelated" onerror="this.style.display='none'">
            </div>
            <div style="flex:1">
              <div class="ms-linked-name">Dream</div>
              <div class="ms-linked-meta">dream@outlook.com Â· Official license</div>
            </div>
            <div class="ms-linked-type microsoft">
              <i data-lucide="check-circle" width="10" height="10"></i>
              Microsoft
            </div>
          </div>
          <div class="ms-linked-row" onclick="openModal('offline-profile-detail')">
            <div class="ms-linked-icon offline-brand" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user-round" width="14" height="14" style="color:var(--t3)"></i></div>
            <div style="width:28px;height:28px;border-radius:5px;overflow:hidden;flex-shrink:0;background:var(--s3);border:1px solid var(--b2);display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="15" height="15" style="color:var(--t3)"></i></div>
            <div style="flex:1">
              <div class="ms-linked-name">Batbold</div>
              <div class="ms-linked-meta">Offline profile Â· Cracked servers only</div>
            </div>
            <div class="ms-linked-type active-profile">
              <div style="width:5px;height:5px;border-radius:50%;background:currentColor"></div>
              Active
            </div>
          </div>
          <div class="ms-linked-row" onclick="openModal('offline-profile-detail')">
            <div class="ms-linked-icon offline-brand" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user-round" width="14" height="14" style="color:var(--t3)"></i></div>
            <div style="width:28px;height:28px;border-radius:5px;overflow:hidden;flex-shrink:0;background:var(--s3);border:1px solid var(--b2);display:flex;align-items:center;justify-content:center;"><i data-lucide="gamepad-2" width="14" height="14" style="color:var(--t3)"></i></div>
            <div style="flex:1">
              <div class="ms-linked-name">ProGamer</div>
              <div class="ms-linked-meta">Offline profile Â· Cracked servers only</div>
            </div>
            <div class="ms-linked-type offline">Offline</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
            <button class="add-linked-btn" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)">
              <div class="ms-grid" style="width:12px;height:12px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
              Link Microsoft
            </button>
            <button class="add-linked-btn" onclick="closeModal();setTimeout(()=>openModal('add-offline-profile'),200)">
              <i data-lucide="user-plus" width="12" height="12"></i>
              Add Profile
            </button>
          </div>
        </div>
      </div>
      <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-top:8px">
        <div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;font-family:var(--mono);color:var(--t4);margin-bottom:7px">How it works</div>
        <div style="display:flex;flex-direction:column;gap:5px">
          <div style="display:flex;gap:8px;align-items:flex-start">
            <div style="width:14px;height:14px;border-radius:3px;background:rgba(0,120,212,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px"><div class="ms-grid" style="width:8px;height:8px;"><div style="background:#f25022;border-radius:0.5px"></div><div style="background:#7fba00;border-radius:0.5px"></div><div style="background:#00a4ef;border-radius:0.5px"></div><div style="background:#ffb900;border-radius:0.5px"></div></div></div>
            <span style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.5">Microsoft Ã¯Â¿Â½?' Official servers + purchased license</span>
          </div>
          <div style="display:flex;gap:8px;align-items:flex-start">
            <div style="width:14px;height:14px;border-radius:3px;background:var(--s3);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px"><i data-lucide="user" width="9" height="9" style="color:var(--t3)"></i></div>
            <span style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.5">Offline profile Ã¯Â¿Â½?' Cracked servers, free to play</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-ghost" id="orbiq-auth-action-btn" onclick="onOrbiqAccountsAuthAction()">
        <i data-lucide="log-out" width="12" height="12"></i>Sign Out
      </button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'link-microsoft': () => `
    <div class="ms-banner">
      <div class="ms-grid"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
      <span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Link Microsoft Account</span>
    </div>
    <div class="mh">
      <i data-lucide="link" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Link Microsoft Account</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:12px;font-family:var(--mono);color:var(--t3);margin-bottom:14px;line-height:1.7">
          Linking your Microsoft account lets you play on <strong style="color:var(--t2)">official servers</strong> using your purchased Minecraft license.
        </div>
        <div style="width:80px;height:80px;background:var(--s2);border:1px solid var(--b2);border-radius:12px;margin:0 auto 14px;display:flex;align-items:center;justify-content:center"><i data-lucide="qr-code" width="48" height="48" style="color:var(--t3)"></i></div>
        <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4)">Scan QR code with your phone</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><div style="flex:1;height:1px;background:var(--b2)"></div><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">or</span><div style="flex:1;height:1px;background:var(--b2)"></div></div>
      <button class="btn-ms" onclick="startMicrosoftLoginFlow()">
        <div class="ms-grid" style="width:14px;height:14px;"><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div><div style="background:#fff;border-radius:1px"></div></div>
        Sign in with Microsoft
      </button>
      <div id="ms-device-status" style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:9px;text-align:center"></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`,

  'add-offline-profile': () => `
    <div class="mh">
      <i data-lucide="user-plus" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Add Offline Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="background:rgba(180,120,0,0.05);border:1px solid rgba(180,120,0,0.1);border-radius:8px;padding:9px 12px;margin-bottom:12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="info" width="13" height="13" style="color:var(--yellow);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#776600;line-height:1.6">Offline profiles can only join cracked servers. For official servers, link a Microsoft account.</span>
      </div>
      <div class="field">
        <div class="label">Username</div>
        <input class="input" id="offline-username" placeholder="e.g. Batbold" oninput="updateOfflineUUID(this.value)" value="">
      </div>
      <div class="field">
        <div class="label">Profile Icon</div>
        <div class="icon-grid">
          ${[['user','user'],['user-round','user-round'],['gamepad-2','gamepad-2'],['sword','sword'],['shield','shield'],['zap','zap'],['flame','flame'],['star','star'],['skull','skull'],['ghost','ghost']].map(([ic,name],i)=>`<div class="icon-cell${i===0?' sel':''}" onclick="selectIcon(this)" data-icon="${name}"><i data-lucide="${ic}" width="16" height="16" style="pointer-events:none"></i></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="label" style="margin-bottom:4px">UUID (auto-generated)</div>
        <div class="uuid-preview" id="offline-uuid-preview">Ã¯Â¿Â½?" enter a username Ã¯Â¿Â½?"</div>
      </div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="createOfflineProfileFromModal()">
        <i data-lucide="plus" width="12" height="12"></i>Add Profile
      </button>
    </div>`,

  'orbiq-login': () => `
    <div class="orbiq-login-header">
      <div class="orbiq-login-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="100%" height="100%"><path fill="currentColor" d="M 192.214844 200.441406 C 157.855469 212.945312 126.144531 222.195312 103.179688 226.886719 C 82.046875 231.1875 68.328125 231.652344 66.722656 227.242188 C 65.171875 222.988281 75.167969 214.964844 92.863281 205.195312 C 94.625 204.21875 95.625 202.261719 95.351562 200.269531 C 95.347656 200.234375 95.339844 200.199219 95.335938 200.167969 C 94.886719 196.851562 91.339844 194.929688 88.335938 196.402344 C 42.695312 218.757812 14.417969 239.167969 18.125 249.359375 C 21.925781 259.792969 58.359375 256.875 109.644531 243.871094 C 111.503906 243.398438 113.476562 244.046875 114.671875 245.550781 C 138.878906 276.074219 180.777344 289.191406 219.402344 275.132812 C 268.214844 257.367188 279.625 221.777344 280.753906 195.453125 C 281.40625 180.277344 276.433594 169.785156 192.214844 200.441406 Z"/><path fill="currentColor" d="M 357.019531 126.011719 C 353.140625 115.359375 315.296875 118.621094 262.375 132.300781 C 238.5 100.003906 195.394531 85.796875 155.742188 100.230469 C 114.808594 115.128906 100.574219 143.695312 96.171875 167.042969 C 93.109375 183.289062 95.65625 197.835938 180.082031 167.105469 C 213.90625 154.796875 245.15625 145.648438 268.03125 140.894531 C 289.765625 136.371094 303.945312 135.816406 305.578125 140.304688 C 307.007812 144.242188 298.5625 151.398438 283.269531 160.199219 C 279.882812 162.148438 278.171875 166.0625 278.925781 169.898438 C 278.9375 169.960938 278.949219 170.023438 278.960938 170.082031 C 280.105469 175.980469 286.621094 179.09375 291.992188 176.402344 C 334.574219 155.058594 360.582031 135.800781 357.019531 126.011719 Z"/></svg></div>
      <div class="orbiq-login-title">Sign in to Orbiq</div>
      <div class="orbiq-login-sub">Your account for everything Orbiq</div>
    </div>
    <div class="mb">
      <div class="field">
        <div class="label">Email</div>
        <input class="input" id="orbiq-login-email" type="email" placeholder="you@example.com" autocomplete="email">
      </div>
      <div class="field">
        <div class="label">Password</div>
        <div style="display:flex;gap:6px;align-items:center">
          <input class="input" id="orbiq-login-password" type="password" placeholder="........" autocomplete="current-password" style="flex:1">
          <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-login-password', this)">Show</button>
        </div>
      </div>
      <div style="text-align:right;margin-top:-6px;margin-bottom:12px">
        <span style="font-size:11px;font-family:var(--mono);color:var(--t3);cursor:pointer;text-decoration:underline">Forgot password?</span>
      </div>
      <button class="btn btn-primary" style="width:100%;height:36px;justify-content:center;font-size:13px" onclick="signInOrbiqFromModal()">
        Sign In
      </button>
      <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><div style="flex:1;height:1px;background:var(--b2)"></div><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">or</span><div style="flex:1;height:1px;background:var(--b2)"></div></div>
      <button style="width:100%;height:33px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;font-size:12px;font-family:var(--mono);color:var(--t3);cursor:pointer;transition:all 0.12s" onclick="createOrbiqAccountFromModal()" onmouseover="this.style.borderColor='var(--b3)'" onmouseout="this.style.borderColor='var(--b2)'">
        Create a free account
      </button>
      <div id="orbiq-login-status" style="margin-top:10px;font-size:11px;font-family:var(--mono);color:var(--t4);text-align:center"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>`,

  'orbiq-register': () => `
    <div class="mh">
      <div class="brand-logo" style="width:18px;height:18px;border-radius:4px;flex-shrink:0;padding:2px;box-sizing:border-box;background:#fff;color:#111;display:flex;align-items:center;justify-content:center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="100%" height="100%"><path fill="currentColor" d="M 192.214844 200.441406 C 157.855469 212.945312 126.144531 222.195312 103.179688 226.886719 C 82.046875 231.1875 68.328125 231.652344 66.722656 227.242188 C 65.171875 222.988281 75.167969 214.964844 92.863281 205.195312 C 94.625 204.21875 95.625 202.261719 95.351562 200.269531 C 95.347656 200.234375 95.339844 200.199219 95.335938 200.167969 C 94.886719 196.851562 91.339844 194.929688 88.335938 196.402344 C 42.695312 218.757812 14.417969 239.167969 18.125 249.359375 C 21.925781 259.792969 58.359375 256.875 109.644531 243.871094 C 111.503906 243.398438 113.476562 244.046875 114.671875 245.550781 C 138.878906 276.074219 180.777344 289.191406 219.402344 275.132812 C 268.214844 257.367188 279.625 221.777344 280.753906 195.453125 C 281.40625 180.277344 276.433594 169.785156 192.214844 200.441406 Z"/><path fill="currentColor" d="M 357.019531 126.011719 C 353.140625 115.359375 315.296875 118.621094 262.375 132.300781 C 238.5 100.003906 195.394531 85.796875 155.742188 100.230469 C 114.808594 115.128906 100.574219 143.695312 96.171875 167.042969 C 93.109375 183.289062 95.65625 197.835938 180.082031 167.105469 C 213.90625 154.796875 245.15625 145.648438 268.03125 140.894531 C 289.765625 136.371094 303.945312 135.816406 305.578125 140.304688 C 307.007812 144.242188 298.5625 151.398438 283.269531 160.199219 C 279.882812 162.148438 278.171875 166.0625 278.925781 169.898438 C 278.9375 169.960938 278.949219 170.023438 278.960938 170.082031 C 280.105469 175.980469 286.621094 179.09375 291.992188 176.402344 C 334.574219 155.058594 360.582031 135.800781 357.019531 126.011719 Z"/></svg></div>
      <span class="mh-title">Create Orbiq Account</span>
      <button class="mh-close" onclick="cancelOrbiqRegister()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb" style="padding:12px 14px">
      <div style="margin-bottom:10px;padding:10px 12px;border-radius:9px;background:linear-gradient(135deg,rgba(20,140,120,0.18),rgba(90,120,220,0.15));border:1px solid rgba(120,160,230,0.35)">
        <div style="font-size:11px;font-weight:700;color:var(--t1)">Orbiq Setup</div>
        <div style="font-size:10px;font-family:var(--mono);color:var(--t3);margin-top:2px">Secure your account in 3 steps</div>
      </div>
      <div id="orbiq-register-stepper" style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-bottom:10px"></div>
      <div id="orbiq-register-content" style="padding:10px;border:1px solid var(--b2);border-radius:9px;background:var(--s2)"></div>
      <div id="orbiq-register-status" style="margin-top:10px;font-size:11px;font-family:var(--mono);color:var(--t4);padding:8px 10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px"></div>
    </div>
    <div class="mf" id="orbiq-register-actions"></div>`,

  'orbiq-register-success': () => `
    <div class="mh">
      <i data-lucide="badge-check" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Setup Complete</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb" style="padding:14px">
      <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--b2);border-radius:10px;background:var(--s2);margin-bottom:10px">
        <div style="width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(61,140,74,0.22);color:var(--green)">
          <i data-lucide="check" width="18" height="18"></i>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--t1)">Your Orbiq account is ready</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4)">You can launch now or link Microsoft.</div>
        </div>
      </div>
      <div id="orbiq-success-summary" style="padding:10px 12px;border:1px solid var(--b2);border-radius:9px;background:var(--s2)"></div>
    </div>
    <div class="mf">
      <button class="btn btn-ghost" id="orbiq-success-link-btn" onclick="openLinkMicrosoftFromSuccess()"><i data-lucide="link" width="12" height="12"></i>Link Microsoft</button>
      <button class="btn btn-primary" id="orbiq-success-go-btn" onclick="goToLauncherHome()">Go to Launcher</button>
    </div>`,

  'ms-linked-detail': () => `
    <div class="ms-banner">
      <div class="ms-grid"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
      <span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Microsoft account</span>
    </div>
    <div class="mh">
      <i data-lucide="user" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Dream Ã¯Â¿Â½?" Microsoft</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="display:flex;gap:14px;align-items:center;padding:10px 0;margin-bottom:12px;border-bottom:1px solid var(--b1)">
        <div style="width:48px;height:48px;border-radius:9px;overflow:hidden;flex-shrink:0;image-rendering:pixelated;background:var(--s2)">
          <img src="https://mc-heads.net/avatar/Dream/64" style="width:100%;image-rendering:pixelated" onerror="this.style.display='none'">
        </div>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--t1)">Dream</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:2px">dream@outlook.com</div>
          <div style="margin-top:5px;display:inline-flex;align-items:center;gap:5px;background:rgba(0,120,212,0.12);border:1px solid rgba(0,120,212,0.2);border-radius:5px;padding:3px 8px;font-size:10px;font-family:var(--mono);color:#5599dd">
            <i data-lucide="check-circle" width="10" height="10"></i> Official license
          </div>
        </div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;overflow:hidden;margin-bottom:12px">
        <div class="info-row"><span class="info-key">Type</span><span class="info-val">Microsoft / Java Edition</span></div>
        <div class="info-row"><span class="info-key">Servers</span><span class="info-val">Official + Cracked</span></div>
        <div class="info-row"><span class="info-key">Token</span><span class="info-val dim">Refreshes automatically</span></div>
        <div class="info-row"><span class="info-key">Linked</span><span class="info-val">Mar 7, 2025</span></div>
      </div>
      <div style="background:rgba(30,60,30,0.3);border:1px solid rgba(61,140,74,0.2);border-radius:8px;padding:9px 12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="check-circle" width="13" height="13" style="color:var(--green);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#3a7a4a;line-height:1.5">This account can access Hypixel, official servers, and all Minecraft features.</span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-danger" onclick="closeModal();showToast('Ã¯Â¿Â½Y"-','Unlinked','Microsoft account removed')">
        <i data-lucide="unlink" width="12" height="12"></i>Unlink
      </button>
      <button class="btn btn-primary" onclick="closeModal()">Done</button>
    </div>`,

  'offline-profile-detail': () => `
    <div class="mh">
      <i data-lucide="user" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Batbold Ã¯Â¿Â½?" Offline Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="display:flex;gap:14px;align-items:center;padding:10px 0;margin-bottom:12px;border-bottom:1px solid var(--b1)">
        <div style="width:48px;height:48px;border-radius:9px;background:var(--s3);border:1px solid var(--b2);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i data-lucide="user" width="24" height="24" style="color:var(--t2)"></i></div>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--t1)">Batbold</div>
          <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:2px">Offline profile</div>
          <div style="margin-top:5px;display:inline-flex;align-items:center;gap:5px;background:rgba(61,140,74,0.12);border:1px solid rgba(61,140,74,0.2);border-radius:5px;padding:3px 8px;font-size:10px;font-family:var(--mono);color:var(--green)">
            <div style="width:5px;height:5px;border-radius:50%;background:currentColor"></div>Active profile
          </div>
        </div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;overflow:hidden;margin-bottom:12px">
        <div class="info-row"><span class="info-key">Type</span><span class="info-val">Offline / Cracked</span></div>
        <div class="info-row"><span class="info-key">Servers</span><span class="info-val">Cracked only</span></div>
        <div class="info-row"><span class="info-key">UUID</span><span class="info-val dim" style="font-size:9.5px">3f7a2b4c-1d8e-4f9aÃ¯Â¿Â½?Ã¯Â¿Â½</span></div>
        <div class="info-row"><span class="info-key">Created</span><span class="info-val">Jan 12, 2025</span></div>
      </div>
      <div style="background:rgba(180,120,0,0.05);border:1px solid rgba(180,120,0,0.12);border-radius:8px;padding:9px 12px;display:flex;gap:8px;align-items:flex-start">
        <i data-lucide="info" width="13" height="13" style="color:var(--yellow);flex-shrink:0;margin-top:1px"></i>
        <span style="font-size:11px;font-family:var(--mono);color:#776600;line-height:1.5">Want to play on Hypixel or official servers? <span style="color:var(--t2);text-decoration:underline;cursor:pointer" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)">Link a Microsoft account.</span></span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-danger" onclick="closeModal();showToast('Ã¯Â¿Â½Y-'Ã¯Â¸Â','Removed','Offline profile deleted')">
        <i data-lucide="trash-2" width="12" height="12"></i>Delete
      </button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½o.','Active','Batbold is now the active profile')">Set Active</button>
      </div>
    </div>`,

  'profile-select-launch': () => `
    <div class="mh">
      <i data-lucide="play" class="mh-icon" width="16" height="16"></i>
      <span class="mh-title">Launch Ã¯Â¿Â½?" Choose Profile</span>
      <button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button>
    </div>
    <div class="mb">
      <div style="font-size:11.5px;font-family:var(--mono);color:var(--t3);margin-bottom:14px;line-height:1.7">
        Select the profile to use when launching <strong style="color:var(--t1)">${escapeHtml(selectedInstanceNameForModal())}</strong>:
      </div>
      <div class="profile-select-list">
        <div class="profile-select-item selected ms-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar">
            <img src="https://mc-heads.net/avatar/Dream/64" onerror="this.parentNode.innerHTML='Ã¯Â¿Â½Y~Z'" style="width:100%;image-rendering:pixelated">
          </div>
          <div style="flex:1">
            <div class="ps-name">Dream</div>
            <div class="ps-desc">Microsoft Â· Official servers ï¿½o"</div>
          </div>
          <div class="ps-tag ms">
            <div class="ms-grid" style="width:10px;height:10px;margin-right:5px;display:inline-grid;gap:1px"><div style="background:#f25022;border-radius:0.5px"></div><div style="background:#7fba00;border-radius:0.5px"></div><div style="background:#00a4ef;border-radius:0.5px"></div><div style="background:#ffb900;border-radius:0.5px"></div></div>
            Microsoft
          </div>
        </div>
        <div class="profile-select-item offline-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="18" height="18" style="color:var(--t3)"></i></div>
          <div style="flex:1">
            <div class="ps-name">Batbold</div>
            <div class="ps-desc">Offline Â· Cracked servers only</div>
          </div>
          <div class="ps-tag off">Offline</div>
        </div>
        <div class="profile-select-item offline-type" onclick="selectLaunchProfile(this)">
          <div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="gamepad-2" width="18" height="18" style="color:var(--t3)"></i></div>
          <div style="flex:1">
            <div class="ps-name">ProGamer</div>
            <div class="ps-desc">Offline Â· Cracked servers only</div>
          </div>
          <div class="ps-tag off">Offline</div>
        </div>
      </div>
      <div style="margin-top:10px;padding:8px 11px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;display:flex;align-items:center;gap:7px">
        <i data-lucide="info" width="12" height="12" style="color:var(--t4);flex-shrink:0"></i>
        <span style="font-size:10.5px;font-family:var(--mono);color:var(--t4)">Microsoft profile required for Hypixel, Mineplex, and other official servers.</span>
      </div>
    </div>
    <div class="mf" style="justify-content:space-between">
      <button class="btn btn-ghost" onclick="closeModal();setTimeout(()=>openModal('orbiq-accounts'),200)">
        <i data-lucide="settings" width="12" height="12"></i>Manage
      </button>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="closeModal();doLaunchSequence()">
          <i data-lucide="play" width="12" height="12"></i>Launch
        </button>
      </div>
    </div>`,

  'add-instance': () => `
    <div class="mh"><i data-lucide="plus-square" class="mh-icon" width="16" height="16"></i><span class="mh-title">Add Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Name</div><input class="input" id="add-inst-name" value="My Instance" placeholder="Instance name"></div>
      <div class="field"><div class="label">Icon</div>
        <div class="icon-grid">
          ${[['package','package'],['sword','sword'],['leaf','leaf'],['flame','flame'],['mountain','mountain'],['waves','waves'],['settings','settings'],['sparkles','sparkles'],['castle','castle'],['globe','globe']].map(([ic],i)=>`<div class="icon-cell${i===0?' sel':''}" onclick="selectIcon(this)"><i data-lucide="${ic}" width="16" height="16" style="pointer-events:none"></i></div>`).join('')}
        </div>
      </div>
      <div class="field"><div class="label">Loader</div><select class="select" id="add-inst-loader"><option>Vanilla</option><option>Fabric</option><option>Forge</option><option>NeoForge</option><option>Quilt</option></select></div>
      <div class="field"><div class="label">Minecraft Version</div><select class="select" id="add-inst-version"><option>Loading versions...</option></select></div>
      <div class="field"><div class="label">Loader Version</div><select class="select" id="add-inst-loader-version"><option value="">Auto (latest)</option></select></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="createInstanceFromModal()">Create</button></div>`,

  'edit-instance': () => `
    <div class="mh"><i data-lucide="pencil" class="mh-icon" width="16" height="16"></i><span class="mh-title" id="edit-modal-title">Edit - Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Name</div><input class="input" id="edit-inst-name" value="" placeholder="Instance name"></div>
      <div class="field"><div class="label">Memory (GB)</div>
        <div style="margin:6px 0 4px"><input type="range" class="slider" min="1" max="16" value="4"></div>
        <div style="display:flex;justify-content:space-between"><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">1 GB</span><span style="font-size:10px;font-family:var(--mono);color:var(--t2)">4 GB</span><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">16 GB</span></div>
      </div>
      <div class="field"><div class="label">Java Args</div><input class="input" id="edit-java-args" value="-Xmx4G -XX:+UseG1GC"></div>
      <div class="field"><div class="label">Launch Executable</div><input class="input" id="edit-launch-exec" placeholder="e.g. java or C:\\Java\\bin\\java.exe"></div>
      <div class="field"><div class="label">Launch Arguments</div><input class="input" id="edit-launch-args" placeholder="e.g. -jar server.jar nogui"></div>
      <div class="field"><div class="label">Working Directory</div><input class="input" id="edit-launch-wd" placeholder="e.g. C:\\Minecraft\\Instances\\MyInstance"></div>
      <div class="field"><div class="label">JVM Preset</div>
        <div class="preset-grid">
          ${[['Ã¯Â¿Â½sÃ¯Â¿Â½','Vanilla','Balanced'],['Ã¯Â¿Â½YÃ¯Â¿Â½<Ã¯Â¸Â','Heavy','Max perf'],['Ã¯Â¿Â½Y"Ã¯Â¿Â½','Stream','Low RAM']].map(([e,n,d],i)=>`<div class="preset-card${i===0?' sel':''}" onclick="document.querySelectorAll('.preset-card').forEach(c=>c.classList.remove('sel'));this.classList.add('sel')"><div class="preset-icon">${e}</div><div class="preset-name">${n}</div><div class="preset-desc">${d}</div></div>`).join('')}
        </div>
      </div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Use global Java settings</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="saveEditInstanceModal()">Save</button></div>`,

  'delete-confirm': () => `
    <div class="mh"><i data-lucide="trash-2" class="mh-icon" width="16" height="16" style="color:var(--red)"></i><span class="mh-title" style="color:var(--red)">Delete Instance</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="warn-box danger"><i data-lucide="triangle-alert" width="16" height="16" style="color:var(--red);flex-shrink:0;margin-top:1px"></i><span class="warn-text" style="color:#774444">This will permanently delete <strong style="color:#aa5555" id="delete-instance-name">instance</strong> and all its data.</span></div>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">Also delete world saves</span></label>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">Also delete screenshots</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deleteSelectedInstanceFromModal()"><i data-lucide="trash-2" width="12" height="12"></i>Delete</button></div>`,

  'launch-progress': () => `
    <div class="mh"><i data-lucide="loader" class="mh-icon spin" width="16" height="16"></i><span class="mh-title">Launching ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Downloading assetsÃ¯Â¿Â½?Ã¯Â¿Â½</span><span style="font-size:11px;font-family:var(--mono);color:var(--t3)">68%</span></div><div class="prog-track"><div class="prog-fill" style="width:68%"></div></div></div>
      <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Libraries</span><span style="font-size:11px;font-family:var(--mono);color:var(--green)">Done Ã¯Â¿Â½o"</span></div><div class="prog-track"><div class="prog-fill" style="width:100%"></div></div></div>
      <div><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;font-family:var(--mono);color:var(--t2)">Java runtime</span><span style="font-size:11px;font-family:var(--mono);color:var(--green)">Done Ã¯Â¿Â½o"</span></div><div class="prog-track"><div class="prog-fill" style="width:100%"></div></div></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`,

  'manage-mods': () => `
    <div class="mh"><i data-lucide="puzzle" class="mh-icon" width="16" height="16"></i><span class="mh-title">Mods Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${[['Sodium','0.6.2',true],['Lithium','0.13.0',true],['Iris Shaders','1.8.0',true],['OptiFine','HD U I7',false],['Fabric API','0.108.0',true]].map(([n,v,on])=>`
      <div class="list-item"><div class="li-dot ${on?'on':''}"></div><span style="flex:1;font-size:12px;font-family:var(--mono);color:${on?'var(--t2)':'var(--t3)'}">${n}</span><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">${v}</span><button style="background:transparent;border:none;cursor:pointer;color:var(--t4);display:flex" onclick="this.closest('.list-item').remove()"><i data-lucide="x" width="11" height="11"></i></button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal();setTimeout(()=>openModal('download-mods'),200)"><i data-lucide="plus" width="12" height="12"></i>Add Mod</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'skin-manager': () => `
    <div class="mh"><i data-lucide="user" class="mh-icon" width="16" height="16"></i><span class="mh-title">Skin Ã¯Â¿Â½?" Dream</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb" style="display:flex;gap:14px;align-items:flex-start">
      <div style="width:60px;height:84px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden"><img src="https://mc-heads.net/body/Dream/64" style="height:82px;image-rendering:pixelated" onerror="this.style.display='none'"></div>
      <div style="flex:1">
        <div class="field"><div class="label">Model</div><select class="select"><option>Classic (Steve)</option><option>Slim (Alex)</option></select></div>
        <div class="field"><div class="label">Cape</div><select class="select"><option>None</option><option>Migrator Cape</option></select></div>
        <div class="dropzone" style="padding:10px"><i data-lucide="upload" width="16" height="16"></i><span style="font-size:10.5px;font-family:var(--mono)">Drop .png skin file</span></div>
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½Y'Ã¯Â¿Â½','Skin applied','Your skin has been updated')">Apply Skin</button></div>`,

  'accounts': () => `
    <div class="ms-banner"><div class="ms-grid"><div></div><div></div><div></div><div></div></div><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">Microsoft accounts</span></div>
    <div class="mh"><i data-lucide="users" class="mh-icon" width="16" height="16"></i><span class="mh-title">Accounts</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="list-item" style="padding:10px 0"><div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;background:var(--s2);image-rendering:pixelated"><img src="https://mc-heads.net/avatar/Dream/32" style="width:100%;image-rendering:pixelated"></div><div style="flex:1"><div style="font-size:12.5px;font-weight:700;color:var(--t1)">Dream</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t3)">dream@outlook.com</div></div><div style="padding:2px 8px;background:rgba(255,255,255,0.04);border:1px solid var(--b3);border-radius:4px;font-size:10px;font-family:var(--mono);color:var(--t3)">Active</div></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)"><i data-lucide="plus" width="12" height="12"></i>Add Account</button></div>`,

  'settings': () => `
    <div class="mh"><i data-lucide="settings" class="mh-icon" width="16" height="16"></i><span class="mh-title">Settings</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Java Path</div><input class="input" value="/usr/bin/java"></div>
      <div class="field"><div class="label">Default Memory</div><div style="margin:6px 0 4px"><input type="range" class="slider" min="1" max="16" value="4"></div></div>
      <div class="field"><div class="label">Theme</div><select class="select"><option>Dark</option><option>Light</option><option>System</option></select></div>
      <div class="field"><div class="label">Update Channel</div><select class="select"><option>Stable</option><option>Beta</option><option>Nightly</option></select></div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Auto-update launcher</span></label>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">Send anonymous analytics</span></label>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Close to tray on launch</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost">Reset Defaults</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½Y'Ã¯Â¿Â½','Settings saved','Global settings updated')">Save</button></div>`,

  'profiles': () => `
    <div class="mh"><i data-lucide="layers" class="mh-icon" width="16" height="16"></i><span class="mh-title">Profiles</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);margin-bottom:10px">Profiles let you switch between different Java/memory configurations instantly.</div>
      ${[['#3a5a3a','Gaming','High memory, max FPS',true],['#2a3a5a','Work','Balanced, battery saver',false],['#3a2a2a','Low-end PC','Minimal RAM, no shaders',false]].map(([c,n,d,sel])=>`
      <div class="profile-card${sel?' sel':''}" onclick="document.querySelectorAll('.profile-card').forEach(p=>p.classList.remove('sel'));this.classList.add('sel')">
        <div class="profile-card-dot" style="background:${c}"></div>
        <div><div class="profile-card-name">${n}</div><div class="profile-card-desc">${d}</div></div>
        ${sel?`<div style="margin-left:auto;font-size:10px;font-family:var(--mono);color:var(--t4)">Active</div>`:''}
      </div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost"><i data-lucide="plus" width="12" height="12"></i>New Profile</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½o.','Profile switched','Now using Gaming profile')">Apply</button></div>`,

  'export': () => `
    <div class="mh"><i data-lucide="package-open" class="mh-icon" width="16" height="16"></i><span class="mh-title">Export Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Format</div><select class="select"><option>Modrinth (.mrpack)</option><option>CurseForge (.zip)</option><option>MultiMC (.zip)</option></select></div>
      <div class="field"><div class="label">Version</div><input class="input" value="1.0.0"></div>
      <div class="field"><div class="label">Include</div>
        <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Mods</span></label>
        <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Config files</span></label>
        <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">World saves</span></label>
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Export</button></div>`,

  'share-link': () => `
    <div class="mh"><i data-lucide="share-2" class="mh-icon" width="16" height="16"></i><span class="mh-title">Share Instance Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="label" style="margin-bottom:6px">Share Link</div>
      <div class="share-link-box"><i data-lucide="link" width="13" height="13" style="color:var(--t4);flex-shrink:0"></i><span id="share-link-value">${escapeHtml(buildInstanceShareLink())}</span><button style="background:var(--s3);border:1px solid var(--b3);border-radius:5px;padding:2px 8px;font-size:10px;font-family:var(--mono);color:var(--t3);cursor:pointer;flex-shrink:0" onclick="copyShareLinkFromModal()">Copy</button></div>
      <div class="field" style="margin-top:12px"><div class="label">Expires</div><select class="select"><option>Never</option><option>24 hours</option><option>7 days</option></select></div>
      <label class="check-row" style="margin-top:8px"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Include mods &amp; configs</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="showToast('Ã¯Â¿Â½Y"-','Link shared','Share link generated')"><i data-lucide="share-2" width="12" height="12"></i>Generate New</button></div>`,

  'download-mods': () => `
    <div class="mh"><i data-lucide="search" class="mh-icon" width="16" height="16"></i><span class="mh-title">Download Mods</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" onclick="switchTab(this)">Modrinth</button><button class="tab" onclick="switchTab(this)">CurseForge</button></div>
      <div class="field" style="position:relative"><i data-lucide="search" width="12" height="12" style="position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--t4)"></i><input class="input" style="padding-left:28px" placeholder="Search modsÃ¯Â¿Â½?Ã¯Â¿Â½"></div>
      ${[['Ã¯Â¿Â½sÃ¯Â¿Â½','Sodium','Render engine rewrite',false],['Ã¯Â¿Â½YOÃ¯Â¿Â½','Lithium','Game logic optimization',true],['Ã¯Â¿Â½Y"?','Iris Shaders','Shader support',false],['Ã¯Â¿Â½Y"Ã¯Â¿Â½','Fabric API','Required library',false]].map(([e,n,d,added])=>`
      <div class="list-item"><div style="width:26px;height:26px;background:var(--s3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">${e}</div><div style="flex:1"><div style="font-size:12px;font-family:var(--mono);color:var(--t2)">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4)">${d}</div></div><button style="height:25px;padding:0 9px;border-radius:5px;border:1px solid ${added?'var(--b3)':'var(--b2)'};background:${added?'var(--s3)':'var(--s2)'};font-size:10.5px;font-family:var(--mono);color:${added?'var(--t3)':'var(--t2)'};cursor:pointer">${added?'Ã¯Â¿Â½o" Added':'+ Add'}</button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`,

  'install-modpack': () => `
    <div class="mh"><i data-lucide="layers" class="mh-icon" width="16" height="16"></i><span class="mh-title">Install Modpack</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="tabs"><button class="tab active" onclick="switchTab(this)">Modrinth</button><button class="tab" onclick="switchTab(this)">CurseForge</button><button class="tab" onclick="switchTab(this)">Local</button></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
        ${[['ï¿½YOï¿½','All the Mods 9','1.21.1 Â· Forge'],['ï¿½sTï¸','Create: Astral','1.20.1 Â· Fabric'],['ï¿½Yï¿½ï¿½','Better MC','1.21.4 Â· Fabric'],['ï¿½Y"ï¿½','Prominence II','1.20.1 Â· Forge'],['ï¿½YOï¿½','Roguelike Adv.','1.20.1 Â· Forge'],['ï¿½Y"ï¿½','Cobblemon','1.21.1 Â· Fabric']].map(([e,n,v])=>`
        <div style="background:var(--s2);border:1px solid var(--b2);border-radius:8px;padding:9px;cursor:pointer;transition:border-color 0.12s" onmouseenter="this.style.borderColor='var(--b3)'" onmouseleave="this.style.borderColor='var(--b2)'">
          <div style="font-size:20px;margin-bottom:5px">${e}</div>
          <div style="font-size:11.5px;font-family:var(--mono);color:var(--t2)">${n}</div>
          <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:2px">${v}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="download" width="12" height="12"></i>Install</button></div>`,

  'world-manager': () => `
    <div class="mh"><i data-lucide="globe" class="mh-icon" width="16" height="16"></i><span class="mh-title">Worlds - ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${[['globe-2','New World','Survival - 2d ago - 142 MB'],['mountain','Mountain Base','Creative - 5d ago - 88 MB'],['waves','Ocean World','Survival - 2w ago - 56 MB'],['flame','Volcano SMP','Hardcore - 1mo ago - 212 MB']].map(([icon,n,m])=>`
      <div class="world-row"><div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--t2);flex-shrink:0"><i data-lucide="${icon}" width="16" height="16"></i></div><div style="flex:1"><div style="font-size:12px;font-family:var(--mono);color:var(--t2)">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:1px">${m}</div></div><button style="background:transparent;border:none;cursor:pointer;color:var(--t4);padding:3px;display:flex" onclick="this.closest('.world-row').remove()"><i data-lucide="trash-2" width="12" height="12"></i></button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openSelectedInstanceFolder('saves')"><i data-lucide="folder-open" width="12" height="12"></i>Open Worlds</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'screenshots': () => `
    <div class="mh"><i data-lucide="camera" class="mh-icon" width="16" height="16"></i><span class="mh-title">Screenshots Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="ss-grid">
        ${Array(6).fill(0).map((_,i)=>`<div class="ss-cell" style="background-image:url('https://picsum.photos/seed/ss${i}/200/112');background-size:cover"></div>`).join('')}
      </div>
      <div style="font-size:11px;font-family:var(--mono);color:var(--t4);text-align:center">6 screenshots Â· 12 MB</div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="openSelectedInstanceFolder('screenshots')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'notes': () => `
    <div class="mh"><i data-lucide="notebook-pen" class="mh-icon" width="16" height="16"></i><span class="mh-title">Notes Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb"><textarea class="textarea" rows="6">- Sodium + Iris installed\n- BSL shaders look great\n- Need to update Lithium</textarea></div>
    <div class="mf"><button class="btn btn-ghost"><i data-lucide="trash-2" width="12" height="12"></i>Clear</button><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`,

  'duplicate': () => `
    <div class="mh"><i data-lucide="copy" class="mh-icon" width="16" height="16"></i><span class="mh-title">Duplicate Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">New Name</div><input class="input" id="duplicate-inst-name" value="${escapeHtml(buildDuplicateInstanceName())}"></div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Mods &amp; configs</span></label>
      <label class="check-row"><div class="check-box" onclick="toggleCheck(this)"></div><span class="check-label">World saves</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="duplicateSelectedInstanceFromModal()"><i data-lucide="copy" width="12" height="12"></i>Duplicate</button></div>`,

  'server-connect': () => `
    <div class="mh"><i data-lucide="plug" class="mh-icon" width="16" height="16"></i><span class="mh-title">Quick Connect</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Server Address</div><input class="input" value="mc.hypixel.net"></div>
      ${[['mc.hypixel.net','32ms',true],['play.cubecraft.net','88ms',true],['smp.myserver.net','offline',false]].map(([addr,ping,on])=>`<div class="srv-row"><div class="li-dot ${on?'on':'err'}"></div><span style="flex:1;font-size:12px;font-family:var(--mono);color:${on?'var(--t2)':'var(--t3)'}">${addr}</span><span style="font-size:10px;font-family:var(--mono);color:var(--t4)">${ping}</span></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary"><i data-lucide="play" width="12" height="12"></i>Launch &amp; Connect</button></div>`,

  'add-friend': () => `
    <div class="mh"><i data-lucide="user-plus" class="mh-icon" width="16" height="16"></i><span class="mh-title">Add Friend</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="field"><div class="label">Username</div><input class="input" placeholder="e.g. Technoblade2"></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½Y'Ã¯Â¿Â½','Request sent','Friend request sent!')"><i data-lucide="send" width="12" height="12"></i>Send Request</button></div>`,

  'shared-session': () => `
    <div class="mh"><i data-lucide="arrow-right-to-line" class="mh-icon" width="16" height="16"></i><span class="mh-title">Join Session</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:12px"><div style="font-size:24px">ï¿½YOï¿½</div><div><div style="font-size:13px;font-weight:700;color:var(--t1)">All the Mods 9</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t3)">Technoblade2 Â· 1.21.1 Â· Forge</div></div><div style="margin-left:auto;display:flex;align-items:center;gap:4px"><div class="li-dot on"></div><span style="font-size:10px;font-family:var(--mono);color:var(--green)">Online</span></div></div>
      <label class="check-row"><div class="check-box on" onclick="toggleCheck(this)"><i data-lucide="check" width="10" height="10" style="color:#000"></i></div><span class="check-label">Auto-sync mods</span></label>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();launchSequence()"><i data-lucide="play" width="12" height="12"></i>Join Session</button></div>`,

  'banner-picker': () => `
    <div class="mh"><i data-lucide="image" class="mh-icon" width="16" height="16"></i><span class="mh-title">Set Banner Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      <div class="ss-grid">
        ${Array(6).fill(0).map((_,i)=>`<div class="ss-cell" style="background-image:url('https://picsum.photos/seed/bn${i}/200/112');background-size:cover;" onclick="document.querySelectorAll('.ss-cell').forEach(c=>{c.style.borderColor='';c.style.boxShadow=''});this.style.borderColor='var(--b4)';this.style.boxShadow='0 0 0 2px rgba(255,255,255,0.12)'"></div>`).join('')}
      </div>
      <div class="dropzone" style="padding:10px;margin-top:8px"><i data-lucide="upload" width="14" height="14"></i><span style="font-size:10.5px;font-family:var(--mono)">Or upload custom image</span></div>
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Ã¯Â¿Â½Y-Ã¯Â¿Â½Ã¯Â¸Â','Banner updated','Instance card updated')">Apply</button></div>`,

  'move-group': () => `
    <div class="mh"><i data-lucide="folder-input" class="mh-icon" width="16" height="16"></i><span class="mh-title">Move Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${[['#3a3a3a','Ungrouped',true],['#2a4a2a','Survival Worlds',false],['#2a2a4a','Modded',false],['#4a2a2a','Testing',false]].map(([c,n,cur])=>`
      <div class="group-row${cur?' sel':''}" onclick="document.querySelectorAll('.group-row').forEach(r=>r.classList.remove('sel'));this.classList.add('sel')"><div style="width:9px;height:9px;border-radius:2px;background:${c};flex-shrink:0"></div><span style="flex:1;font-size:12px;font-family:var(--mono);color:${cur?'var(--t1)':'var(--t2)'}">${n}</span>${cur?`<span style="font-size:10px;font-family:var(--mono);color:var(--t4)">current</span>`:''}</div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary">Move</button></div>`,

  'backup': () => `
    <div class="mh"><i data-lucide="archive" class="mh-icon" width="16" height="16"></i><span class="mh-title">Backup Ã¯Â¿Â½?" ${escapeHtml(selectedInstanceNameForModal())}</span><button class="mh-close" onclick="closeModal()"><i data-lucide="x" width="14" height="14"></i></button></div>
    <div class="mb">
      ${[['backup_2025-03-01','234 MB','2 days ago'],['backup_2025-02-20','198 MB','2 weeks ago']].map(([n,s,d])=>`
      <div class="bk-row"><i data-lucide="hard-drive" width="15" height="15" style="color:var(--t4);flex-shrink:0"></i><div style="flex:1"><div style="font-size:12px;font-family:var(--mono);color:var(--t2)">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4)">${s} Â· ${d}</div></div><button style="background:transparent;border:none;cursor:pointer;color:var(--t4);display:flex" onclick="this.closest('.bk-row').remove()"><i data-lucide="trash-2" width="11" height="11"></i></button></div>`).join('')}
    </div>
    <div class="mf"><button class="btn btn-ghost" onclick="showToast('Ã¯Â¿Â½Y"Ã¯Â¿Â½','Backup created','Saved backup successfully')"><i data-lucide="plus" width="12" height="12"></i>New Backup</button><button class="btn btn-primary"><i data-lucide="rotate-ccw" width="12" height="12"></i>Restore</button></div>`,
};

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// INIT
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
const tauriInvoke = (() => {
  const coreInvoke = window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.invoke;
  const legacyInvoke = window.__TAURI__ && window.__TAURI__.invoke;
  const internalInvoke =
    window.__TAURI_INTERNALS__ &&
    typeof window.__TAURI_INTERNALS__.invoke === 'function'
      ? function invokeWithInternals(command, payload) {
          return window.__TAURI_INTERNALS__.invoke(command, payload || {});
        }
      : null;

  const fn =
    (typeof coreInvoke === 'function' && coreInvoke) ||
    (typeof legacyInvoke === 'function' && legacyInvoke) ||
    internalInvoke;

  if (typeof fn !== 'function') {
    console.warn('Tauri invoke API is not available; backend calls will fail');
    return function missingInvoke() {
      return Promise.reject(new Error('Tauri invoke API is not available'));
    };
  }
  return fn;
})();
const tauriListen = (() => {
  const eventListen = window.__TAURI__ && window.__TAURI__.event && window.__TAURI__.event.listen;
  if (typeof eventListen === 'function') return eventListen;
  const coreListen = window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.listen;
  if (typeof coreListen === 'function') return coreListen;
  console.warn('Tauri listen API not available; lifecycle/provision event stream disabled');
  return null;
})();
const PROVISION_EVENT_NAME = 'orbiq://provision-progress';
const DEEP_LINK_EVENT_NAME = 'deep-link://new-url';
let detachLifecycleListener = null;
let detachProvisionListener = null;
let detachDeepLinkListener = null;
let ACTIVE_PROVISION = null;
const LAUNCH_STARTUP_TIMEOUT_MS = 45000;
const LAUNCH_STARTUP_POLL_MS = 1200;
const LAUNCH_STABLE_POLLS = 3;
let JAVA_RUNTIME_INFO = { minimumMajor: 17, defaultPath: null, candidates: [] };
const ADD_INSTANCE_VERSION_CACHE = new Map();
const ADD_INSTANCE_LOADER_VERSION_CACHE = new Map();
let PROFILE_DATA = [];
const ORBIQ_ACCOUNT_STORE_KEY = 'orbiq.account.v1';
let ORBIQ_ACCOUNT_STATE = null;
let ORBIQ_REGISTER_STATE = null;
let ORBIQ_REGISTER_RESULT = null;
let PENDING_DEEP_LINK_OTP = '';
let MICROSOFT_AUTH_POLL = null;
let ACTIVE_PROFILE_DETAIL_ID = null;
const HANDLED_DEEP_LINKS = new Set();
const MAX_HANDLED_DEEP_LINKS = 24;

async function invokeBackend(command, payload) {
  try {
    const data = await tauriInvoke(command, payload || {});
    return { ok: true, data, error: null };
  } catch (err) {
    console.error('[backend] ' + command + ' failed', err);
    return { ok: false, data: null, error: String(err) };
  }
}

function rememberHandledDeepLink(url) {
  const normalized = String(url || '').trim();
  if (!normalized) return true;
  if (HANDLED_DEEP_LINKS.has(normalized)) return true;
  HANDLED_DEEP_LINKS.add(normalized);
  if (HANDLED_DEEP_LINKS.size > MAX_HANDLED_DEEP_LINKS) {
    const first = HANDLED_DEEP_LINKS.values().next();
    if (!first.done) HANDLED_DEEP_LINKS.delete(first.value);
  }
  return false;
}

function normalizeDeepLinkEntry(entry) {
  if (!entry) return '';
  if (typeof entry === 'string') return entry.trim();
  if (typeof entry === 'object') {
    if (typeof entry.url === 'string') return entry.url.trim();
    if (typeof entry.href === 'string') return entry.href.trim();
  }
  return String(entry || '').trim();
}

function extractDeepLinkUrls(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) {
    return payload
      .map(normalizeDeepLinkEntry)
      .filter((item) => item.length > 0);
  }
  if (typeof payload === 'string') {
    const trimmed = payload.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
      try {
        return extractDeepLinkUrls(JSON.parse(trimmed));
      } catch (_err) {
        return [trimmed];
      }
    }
    return [trimmed];
  }
  if (typeof payload === 'object') {
    return [normalizeDeepLinkEntry(payload)].filter((item) => item.length > 0);
  }
  return [];
}

function parseOrbiqDeepLink(rawUrl) {
  const value = String(rawUrl || '').trim();
  if (!value) return null;
  try {
    const parsed = new URL(value);
    if (String(parsed.protocol || '').toLowerCase() !== 'orbiq:') return null;
    const hostAction = String(parsed.hostname || '').trim().toLowerCase();
    const pathAction = String(parsed.pathname || '')
      .replace(/^\/+/, '')
      .split('/')[0]
      .trim()
      .toLowerCase();
    const action = hostAction || pathAction || 'open';
    const code = String(parsed.searchParams.get('code') || '').replace(/\D+/g, '').slice(0, 6);
    return { action, code, raw: value };
  } catch (_err) {
    return null;
  }
}

async function focusWindowForDeepLink() {
  const currentWindow = resolveCurrentTauriWindow();
  if (!currentWindow) return;
  try {
    if (typeof currentWindow.show === 'function') await currentWindow.show();
    if (typeof currentWindow.unminimize === 'function') await currentWindow.unminimize();
    if (typeof currentWindow.setFocus === 'function') await currentWindow.setFocus();
  } catch (err) {
    console.warn('failed to focus window from deep link', err);
  }
}

function applyPendingDeepLinkOtpIfAny() {
  const pending = String(PENDING_DEEP_LINK_OTP || '').replace(/\D+/g, '').slice(0, 6);
  if (pending.length !== 6) return false;
  const codeInput = document.getElementById('orbiq-reg-code');
  if (!codeInput) return false;
  codeInput.value = pending;
  codeInput.dispatchEvent(new Event('input', { bubbles: true }));
  if (typeof codeInput.focus === 'function') codeInput.focus();
  PENDING_DEEP_LINK_OTP = '';
  setOrbiqRegisterStatus('Code filled from email. Click Verify.', false);
  return true;
}

function applyOrbiqVerifyDeepLink(code) {
  const normalizedCode = String(code || '').replace(/\D+/g, '').slice(0, 6);
  if (normalizedCode.length !== 6) {
    showToast('!', 'Invalid code', 'Deep link code is missing or invalid');
    return;
  }

  PENDING_DEEP_LINK_OTP = normalizedCode;
  const state = getOrbiqRegisterState();
  if (state.verificationSessionId && state.email) {
    state.step = 2;
  }
  openModal('orbiq-register');
  setTimeout(() => {
    if (!applyPendingDeepLinkOtpIfAny()) {
      setOrbiqRegisterStatus(
        'Code received. Send a verification code from app first, then retry.',
        true
      );
    }
  }, 80);
}

async function handleOrbiqDeepLink(rawUrl) {
  const parsed = parseOrbiqDeepLink(rawUrl);
  if (!parsed) return;
  await focusWindowForDeepLink();
  setPage('launch');

  if (parsed.action === 'verify') {
    applyOrbiqVerifyDeepLink(parsed.code);
    return;
  }

  if (parsed.action === 'link-microsoft') {
    if (overlay && overlay.style.display !== 'none') closeModal();
    setTimeout(() => openModal('link-microsoft'), 120);
    return;
  }

  if (overlay && overlay.style.display !== 'none') closeModal();
}

async function processDeepLinkPayload(payload) {
  const urls = extractDeepLinkUrls(payload);
  for (const url of urls) {
    if (rememberHandledDeepLink(url)) continue;
    await handleOrbiqDeepLink(url);
  }
}

async function setupDeepLinkEventStream() {
  if (!tauriListen) return;
  if (typeof detachDeepLinkListener === 'function') return;
  try {
    detachDeepLinkListener = await tauriListen(DEEP_LINK_EVENT_NAME, (event) => {
      void processDeepLinkPayload(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach deep link listener', err);
  }
}

async function consumeInitialDeepLinkPayload() {
  try {
    const current = await tauriInvoke('plugin:deep-link|get_current', {});
    await processDeepLinkPayload(current);
  } catch (err) {
    console.warn('failed to read initial deep link payload', err);
  }
}

function formatBackendError(errorText, fallbackText) {
  const fallback = String(fallbackText || 'Backend request failed');
  const raw = String(errorText || '').trim();
  if (!raw) return fallback;
  const normalized = normalizeMojibakeText(raw).trim();
  if (!normalized) return fallback;
  return normalized.replace(/^Error:\s*/i, '').trim() || fallback;
}

function normalizeOrbiqEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizeOrbiqUsername(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  return raw
    .replace(/^@+/, '')
    .replace(/\.orbiq$/i, '')
    .replace(/[^a-z0-9_-]/g, '');
}

function ensureOrbiqUsername(value) {
  const label = normalizeOrbiqUsername(value);
  return label ? `${label}.orbiq` : '';
}

function getOrbiqUsernameLabel(value) {
  return normalizeOrbiqUsername(value);
}

function togglePasswordVisibility(inputId, triggerEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  if (triggerEl) {
    triggerEl.textContent = show ? 'Hide' : 'Show';
  }
}

function hashOrbiqPassword(password) {
  const input = String(password || '');
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function hashStableText(value) {
  const input = String(value || '');
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

function resolveOrbiqAccountId(account) {
  const existing = account && typeof account.accountId === 'string'
    ? account.accountId.trim().toUpperCase()
    : '';
  if (/^ORQ-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(existing)) return existing;

  const username = ensureOrbiqUsername((account && account.username) || '');
  const email = normalizeOrbiqEmail((account && account.email) || '');
  const created = Number((account && account.createdAtEpoch) || 0) || 0;
  const seed = [username, email, String(created)].join('|') || 'orbiq-local';
  const token = hashStableText(seed);
  return `ORQ-${token.slice(0, 4)}-${token.slice(4, 8)}`;
}

function loadOrbiqAccountState() {
  try {
    const raw = window.localStorage ? window.localStorage.getItem(ORBIQ_ACCOUNT_STORE_KEY) : null;
    if (!raw) {
      ORBIQ_ACCOUNT_STATE = null;
      return null;
    }
    const parsed = JSON.parse(raw);
    const email = normalizeOrbiqEmail(parsed && parsed.email);
    const passwordHash = String(parsed && parsed.passwordHash ? parsed.passwordHash : '').trim();
    if (!email || !passwordHash) {
      ORBIQ_ACCOUNT_STATE = null;
      return null;
    }
    const normalizedUsername = ensureOrbiqUsername((parsed && parsed.username) || '');
    const createdAtEpoch =
      Number((parsed && parsed.createdAtEpoch) || 0) || Math.floor(Date.now() / 1000);
    ORBIQ_ACCOUNT_STATE = {
      email,
      passwordHash,
      username: normalizedUsername,
      displayName: String((parsed && parsed.displayName) || '').trim(),
      plan: String((parsed && parsed.plan) || 'Free'),
      createdAtEpoch,
      lastLoginAtEpoch: parsed && parsed.lastLoginAtEpoch ? Number(parsed.lastLoginAtEpoch) : null,
      signedIn: !!(parsed && parsed.signedIn),
      microsoftLinked: !!(parsed && parsed.microsoftLinked),
      accountId: resolveOrbiqAccountId({
        accountId: parsed && parsed.accountId,
        username: normalizedUsername,
        email,
        createdAtEpoch,
      }),
    };
    return ORBIQ_ACCOUNT_STATE;
  } catch (err) {
    console.warn('[orbiq] failed to load account state', err);
    ORBIQ_ACCOUNT_STATE = null;
    return null;
  }
}

function persistOrbiqAccountState(nextState) {
  ORBIQ_ACCOUNT_STATE = nextState || null;
  try {
    if (!window.localStorage) return;
    if (!ORBIQ_ACCOUNT_STATE) {
      window.localStorage.removeItem(ORBIQ_ACCOUNT_STORE_KEY);
      return;
    }
    window.localStorage.setItem(ORBIQ_ACCOUNT_STORE_KEY, JSON.stringify(ORBIQ_ACCOUNT_STATE));
  } catch (err) {
    console.warn('[orbiq] failed to persist account state', err);
  }
}

function getOrbiqAccountState() {
  if (ORBIQ_ACCOUNT_STATE) return ORBIQ_ACCOUNT_STATE;
  return loadOrbiqAccountState();
}

function resolveCurrentTauriWindow() {
  const tauriRoot = window.__TAURI__ || {};
  const windowApi = tauriRoot.window || {};

  if (typeof windowApi.getCurrentWindow === 'function') {
    try {
      return windowApi.getCurrentWindow();
    } catch (err) {
      console.warn('[window] getCurrentWindow failed', err);
    }
  }

  if (typeof windowApi.getCurrent === 'function') {
    try {
      return windowApi.getCurrent();
    } catch (err) {
      console.warn('[window] getCurrent failed', err);
    }
  }

  if (windowApi.appWindow && typeof windowApi.appWindow === 'object') {
    return windowApi.appWindow;
  }

  return null;
}

async function runWindowCommand(methodName, invokeCommand) {
  const currentWindow = resolveCurrentTauriWindow();
  if (currentWindow && typeof currentWindow[methodName] === 'function') {
    try {
      await currentWindow[methodName]();
      return true;
    } catch (err) {
      console.warn('[window] method failed: ' + methodName, err);
    }
  }

  try {
    await tauriInvoke(invokeCommand, {});
    return true;
  } catch (errNoLabel) {
    try {
      await tauriInvoke(invokeCommand, { label: 'main' });
      return true;
    } catch (errWithLabel) {
      console.warn('[window] invoke failed: ' + invokeCommand, errNoLabel, errWithLabel);
    }
  }

  return false;
}

function initWindowControls() {
  const buttons = document.querySelectorAll('[data-window-action]');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const action = button.getAttribute('data-window-action');
      let ok = false;

      if (action === 'minimize') {
        ok = await runWindowCommand('minimize', 'plugin:window|minimize');
      } else if (action === 'maximize') {
        ok = await runWindowCommand('toggleMaximize', 'plugin:window|toggle_maximize');
      } else if (action === 'close') {
        ok = await runWindowCommand('close', 'plugin:window|close');
      }

      if (!ok) {
        showToast('!', 'Window controls', 'Failed to call window API');
      }
    });
  });
}

function isTitlebarInteractiveTarget(target) {
  if (!target || !(target instanceof Element)) return false;
  return !!target.closest(
    'button,input,select,textarea,a,[role="button"],.tb-btn,.wm-btn,.wm-btns,.search-wrap,.search-input,.auth-pill'
  );
}

function initTitlebarDrag() {
  const titlebar = document.querySelector('.titlebar');
  if (!titlebar) return;

  titlebar.addEventListener('mousedown', async (event) => {
    if (event.button !== 0) return;
    if (isTitlebarInteractiveTarget(event.target)) return;
    await runWindowCommand('startDragging', 'plugin:window|start_dragging');
  });
}

function getSelectedInstanceName() {
  const selectedCard = document.querySelector('.instance-card.selected');
  if (selectedCard && selectedCard.dataset && selectedCard.dataset.name) {
    return selectedCard.dataset.name;
  }
  const detailName = document.getElementById('detail-name');
  const value = detailName ? detailName.textContent.trim() : '';
  if (!value) return null;
  const exists = Array.from(document.querySelectorAll('.instance-card')).some((item) => {
    return String(item.dataset.name || '').trim().toLowerCase() === value.toLowerCase();
  });
  return exists ? value : null;
}

function selectInstanceByName(name) {
  const target = String(name || '').trim().toLowerCase();
  if (!target) return false;
  const card = Array.from(document.querySelectorAll('.instance-card')).find((item) => {
    const current = String(item.dataset.name || '').trim().toLowerCase();
    return current === target;
  });
  if (!card) return false;
  selectCard(card);
  return true;
}

function getSelectedLaunchProfileName() {
  const selected = document.querySelector('.profile-select-item.selected .ps-name');
  return selected ? selected.textContent.trim() : null;
}

function getSelectedLaunchProfileId() {
  const selected = document.querySelector('.profile-select-item.selected');
  if (!selected) return null;
  const value = String(selected.getAttribute('data-profile-id') || '').trim();
  return value || null;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function refreshProfilesFromBackend() {
  const res = await invokeBackend('get_profiles');
  if (res.ok && Array.isArray(res.data)) {
    PROFILE_DATA = res.data.map(normalizeProfileRecord);
    syncAuthPillFromProfiles();
    return true;
  }
  return false;
}

function normalizeProfileRecord(raw) {
  const source = raw && typeof raw === 'object' ? raw : {};
  return {
    id: String(source.id || '').trim(),
    name: String(source.name || 'Player').trim() || 'Player',
    profileType: String(source.profileType || source.profile_type || 'offline').toLowerCase(),
    active: !!source.active,
    accountId: source.accountId || source.account_id || null,
    email: source.email || null,
    accessTokenExpiresAtEpoch:
      source.accessTokenExpiresAtEpoch || source.access_token_expires_at_epoch || null,
    lastAuthenticatedAtEpoch:
      source.lastAuthenticatedAtEpoch || source.last_authenticated_at_epoch || null,
  };
}

function getRenderableProfiles() {
  return Array.isArray(PROFILE_DATA) ? PROFILE_DATA.map(normalizeProfileRecord) : [];
}

function profileLaunchItemMarkup(profile, selected) {
  const isMicrosoft = String(profile.profileType || '').toLowerCase() === 'microsoft';
  const safeName = escapeHtml(profile.name || 'Player');
  const itemClass = isMicrosoft ? 'ms-type' : 'offline-type';
  const avatarMarkup = isMicrosoft
    ? `<div class="ps-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(profile.name || 'Steve')}/64" onerror="this.parentNode.innerHTML='Ã¯Â¿Â½YT,'" style="width:100%;image-rendering:pixelated"></div>`
    : `<div class="ps-avatar offline-av" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="18" height="18" style="color:var(--t3)"></i></div>`;
  const desc = isMicrosoft ? 'Microsoft Â· Official servers' : 'Offline Â· Cracked servers only';
  const tag = isMicrosoft
    ? `<div class="ps-tag ms"><div class="ms-grid" style="width:10px;height:10px;margin-right:5px;display:inline-grid;gap:1px"><div style="background:#f25022;border-radius:0.5px"></div><div style="background:#7fba00;border-radius:0.5px"></div><div style="background:#00a4ef;border-radius:0.5px"></div><div style="background:#ffb900;border-radius:0.5px"></div></div>Microsoft</div>`
    : '<div class="ps-tag off">Offline</div>';
  return `
    <div class="profile-select-item ${itemClass}${selected ? ' selected' : ''}" onclick="selectLaunchProfile(this)" data-profile-id="${escapeHtml(profile.id || '')}">
      ${avatarMarkup}
      <div style="flex:1">
        <div class="ps-name">${safeName}</div>
        <div class="ps-desc">${desc}</div>
      </div>
      ${tag}
    </div>
  `;
}

function hydrateLaunchProfileModal() {
  const list = document.querySelector('.profile-select-list');
  if (!list) return;

  const profiles = getRenderableProfiles();
  const activeIndex = profiles.findIndex((item) => !!item.active);
  list.innerHTML = profiles
    .map((profile, index) => profileLaunchItemMarkup(profile, index === (activeIndex >= 0 ? activeIndex : 0)))
    .join('');

  const titleStrong = modalPop && modalPop.querySelector('.mb strong');
  if (titleStrong) titleStrong.textContent = getSelectedInstanceName() || 'Instance';
  lucide.createIcons();
}

function hashPseudoUuid(name) {
  const input = String(name || '').trim();
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (Math.imul(31, hash) + input.charCodeAt(i)) | 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `${hex}-xxxx-3xxx-yxxx-xxxxxxxxxxxx`;
}

function formatEpochDate(value) {
  const epoch = parseLastPlayedEpoch(value);
  if (!epoch) return 'Recently';
  return new Date(epoch * 1000).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function findProfileById(profileId) {
  const target = String(profileId || '').trim();
  if (!target) return null;
  const profiles = getRenderableProfiles();
  return profiles.find((item) => String(item.id || '').toLowerCase() === target.toLowerCase()) || null;
}

function syncAuthPillFromProfiles() {
  const profiles = getRenderableProfiles();
  const selected = profiles.find((item) => !!item.active) || profiles[0];
  if (!selected) return;

  const nameEl = document.querySelector('.auth-name');
  if (nameEl) {
    nameEl.textContent = selected.name + ' ';
    const badge = document.createElement('span');
    badge.className = 'orbiq-badge';
    badge.textContent = 'ORBIQ';
    nameEl.appendChild(badge);
  }

  const avatar = document.querySelector('.auth-avatar img');
  if (avatar) {
    avatar.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(selected.name || 'Steve') + '/32';
    avatar.onerror = function onAvatarError() {
      this.style.display = 'none';
    };
  }
}

function setOrbiqLoginStatus(message, isError) {
  const statusEl = document.getElementById('orbiq-login-status');
  if (!statusEl) return;
  statusEl.textContent = String(message || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
}

function hydrateOrbiqLoginModal() {
  const account = getOrbiqAccountState();
  const emailInput = document.getElementById('orbiq-login-email');
  if (emailInput && account && account.email) {
    emailInput.value = account.email;
  }
  if (!account) {
    setOrbiqLoginStatus('No local account yet. Create a free account first.', false);
    return;
  }
  if (account.signedIn) {
    setOrbiqLoginStatus('Already signed in as ' + account.email, false);
  } else {
    setOrbiqLoginStatus('Account found. Sign in to continue.', false);
  }
}

function onOrbiqAccountsAuthAction() {
  const account = getOrbiqAccountState();
  if (account && account.signedIn) {
    signOutOrbiqAccount();
    return;
  }
  closeModal();
  setTimeout(() => openModal('orbiq-login'), 180);
}

function signOutOrbiqAccount() {
  const account = getOrbiqAccountState();
  if (!account || !account.signedIn) {
    showToast('!', 'Already signed out', 'No active Orbiq session');
    return;
  }
  account.signedIn = false;
  persistOrbiqAccountState(account);
  closeModal();
  setTimeout(() => openModal('orbiq-login'), 180);
  showToast('OK', 'Signed out', 'Orbiq account session ended');
}

function signInOrbiqFromModal() {
  const emailInput = document.getElementById('orbiq-login-email');
  const passwordInput = document.getElementById('orbiq-login-password');
  const email = normalizeOrbiqEmail(emailInput ? emailInput.value : '');
  const password = String(passwordInput ? passwordInput.value : '');
  const account = getOrbiqAccountState();

  if (!email || !password) {
    setOrbiqLoginStatus('Email and password are required.', true);
    return;
  }
  if (!account) {
    setOrbiqLoginStatus('No Orbiq account found. Create one first.', true);
    return;
  }
  if (account.email !== email || account.passwordHash !== hashOrbiqPassword(password)) {
    setOrbiqLoginStatus('Invalid email or password.', true);
    return;
  }

  account.signedIn = true;
  account.lastLoginAtEpoch = Math.floor(Date.now() / 1000);
  persistOrbiqAccountState(account);
  closeModal();
  setTimeout(() => openModal('orbiq-accounts'), 180);
  showToast('OK', 'Signed in', 'Welcome back to Orbiq');
}

function createOrbiqAccountFromModal() {
  const loginEmailInput = document.getElementById('orbiq-login-email');
  const loginPasswordInput = document.getElementById('orbiq-login-password');
  ORBIQ_REGISTER_STATE = {
    step: 1,
    email: normalizeOrbiqEmail(loginEmailInput ? loginEmailInput.value : ''),
    username: '',
    displayName: '',
    passwordHash: '',
    rawPassword: loginPasswordInput ? String(loginPasswordInput.value || '') : '',
    verificationSessionId: '',
    codeExpiresAtEpoch: 0,
    verified: false,
    microsoftLinked: false,
  };
  openModal('orbiq-register');
}

function setOrbiqRegisterStatus(message, isError) {
  const statusEl = document.getElementById('orbiq-register-status');
  if (!statusEl) return;
  statusEl.textContent = String(message || '');
  statusEl.style.color = isError ? 'var(--red)' : 'var(--t4)';
  statusEl.style.borderColor = isError ? 'rgba(210,90,90,0.45)' : 'var(--b2)';
  statusEl.style.background = isError ? 'rgba(100,20,20,0.18)' : 'var(--s2)';
}

function renderOrbiqRegisterStepper(step) {
  const current = Math.min(3, Math.max(1, Number(step || 1)));
  const labels = ['Account', 'Verify', 'Link'];
  return labels
    .map((label, index) => {
      const value = index + 1;
      const done = value < current;
      const active = value === current;
      const bg = active ? 'var(--t2)' : (done ? 'rgba(60,160,90,0.25)' : 'var(--s2)');
      const border = active ? 'var(--t2)' : (done ? 'rgba(60,160,90,0.4)' : 'var(--b2)');
      const color = active ? '#000' : (done ? 'var(--green)' : 'var(--t4)');
      const shadow = active ? '0 0 0 1px rgba(255,255,255,0.1), 0 8px 18px rgba(0,0,0,0.22)' : 'none';
      const transform = active ? 'translateY(-1px)' : 'translateY(0)';
      return `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid ${border};border-radius:999px;background:${bg};color:${color};transition:all .22s ease;box-shadow:${shadow};transform:${transform}">
        <div style="width:14px;height:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;border:1px solid ${border}">${done ? 'OK' : value}</div>
        <span>${label}</span>
      </div>`;
    })
    .join('');
}

function setOrbiqRegisterBadge(id, ok, text) {
  const el = document.getElementById(id);
  if (!el) return;
  const safeText = String(text || (ok ? 'OK' : 'Check'));
  el.textContent = safeText;
  el.style.color = ok ? 'var(--green)' : '#d8b467';
  el.style.borderColor = ok ? 'rgba(61,140,74,0.35)' : 'rgba(216,180,103,0.4)';
  el.style.background = ok ? 'rgba(40,110,60,0.16)' : 'rgba(95,70,25,0.18)';
}

function computeOrbiqRegisterChecks(state, confirmPassword) {
  const existing = getOrbiqAccountState();
  const checks = {
    email: { ok: false, message: '' },
    username: { ok: false, message: '' },
    displayName: { ok: false, message: '' },
    password: { ok: false, message: '' },
    confirm: { ok: false, message: '' },
    allOk: false,
    firstError: '',
  };

  checks.email.ok =
    state.email.includes('@') &&
    !state.email.startsWith('@') &&
    !state.email.endsWith('@') &&
    (!existing || existing.email === state.email);
  checks.email.message = checks.email.ok ? 'OK' : (existing && existing.email !== state.email ? 'Device has different account' : 'Invalid');

  checks.username.ok = /^[a-z0-9_-]{3,24}$/.test(state.username);
  checks.username.message = checks.username.ok ? 'OK' : '3-24 chars';

  checks.displayName.ok = state.displayName.length >= 2 && state.displayName.length <= 24;
  checks.displayName.message = checks.displayName.ok ? 'OK' : '2-24 chars';

  checks.password.ok = state.rawPassword.length >= 6;
  checks.password.message = checks.password.ok ? 'Strong' : 'Min 6';

  checks.confirm.ok = !!state.rawPassword && state.rawPassword === confirmPassword;
  checks.confirm.message = checks.confirm.ok ? 'Match' : 'Mismatch';

  checks.firstError = !checks.email.ok
    ? 'Enter a valid email address.'
    : !checks.username.ok
      ? 'Orbiq username must be 3-24 chars (letters, numbers, _ or -).'
      : !checks.displayName.ok
        ? 'Display name must be 2-24 characters.'
        : !checks.password.ok
          ? 'Password must be at least 6 characters.'
          : !checks.confirm.ok
            ? 'Passwords do not match.'
            : '';
  checks.allOk = !checks.firstError;
  return checks;
}

function updateOrbiqRegisterPreview(state) {
  const accountEl = document.getElementById('orbiq-reg-preview-account');
  const emailEl = document.getElementById('orbiq-reg-preview-email');
  const avatarEl = document.getElementById('orbiq-reg-preview-avatar');
  const accountText = ensureOrbiqUsername(state.username) || 'yourname.orbiq';
  if (accountEl) accountEl.textContent = accountText;
  if (emailEl) emailEl.textContent = state.email || 'you@example.com';
  if (avatarEl) {
    avatarEl.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(state.displayName || state.username || 'Steve') + '/48';
    avatarEl.onerror = function onPreviewAvatarError() {
      this.style.opacity = '0.35';
    };
  }
}

function refreshOrbiqRegisterStepOneHints() {
  const state = getOrbiqRegisterState();
  if (Number(state.step || 1) !== 1) return;
  const confirm = readOrbiqRegisterStepOneInput(state);
  const checks = computeOrbiqRegisterChecks(state, confirm);
  setOrbiqRegisterBadge('orbiq-badge-email', checks.email.ok, checks.email.message);
  setOrbiqRegisterBadge('orbiq-badge-username', checks.username.ok, checks.username.message);
  setOrbiqRegisterBadge('orbiq-badge-display', checks.displayName.ok, checks.displayName.message);
  setOrbiqRegisterBadge('orbiq-badge-pass', checks.password.ok, checks.password.message);
  setOrbiqRegisterBadge('orbiq-badge-confirm', checks.confirm.ok, checks.confirm.message);
  updateOrbiqRegisterPreview(state);
}

function getOrbiqRegisterState() {
  if (!ORBIQ_REGISTER_STATE || typeof ORBIQ_REGISTER_STATE !== 'object') {
    ORBIQ_REGISTER_STATE = {
      step: 1,
      email: '',
      username: '',
      displayName: '',
      passwordHash: '',
      rawPassword: '',
      verificationSessionId: '',
      codeExpiresAtEpoch: 0,
      verified: false,
      microsoftLinked: false,
    };
  }
  return ORBIQ_REGISTER_STATE;
}

function renderOrbiqRegisterStepOne(state) {
  const email = escapeHtml(state.email || '');
  const username = escapeHtml(getOrbiqUsernameLabel(state.username || ''));
  const displayName = escapeHtml(state.displayName || '');
  const rawPassword = escapeHtml(state.rawPassword || '');
  return `
    <div style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--b2);border-radius:9px;background:rgba(255,255,255,0.015);margin-bottom:10px">
      <div style="width:36px;height:36px;border-radius:50%;overflow:hidden;background:var(--s3);border:1px solid var(--b2);flex-shrink:0">
        <img id="orbiq-reg-preview-avatar" src="https://mc-heads.net/avatar/Steve/48" style="width:100%;height:100%;image-rendering:pixelated">
      </div>
      <div style="min-width:0">
        <div id="orbiq-reg-preview-account" style="font-size:12px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">yourname.orbiq</div>
        <div id="orbiq-reg-preview-email" style="font-size:10px;font-family:var(--mono);color:var(--t4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">you@example.com</div>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Email</span><span id="orbiq-badge-email" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <input class="input" id="orbiq-reg-email" type="email" placeholder="you@example.com" autocomplete="email" value="${email}" oninput="refreshOrbiqRegisterStepOneHints()">
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Orbiq Username</span><span id="orbiq-badge-username" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-username" type="text" placeholder="dream" value="${username}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <div style="height:31px;display:flex;align-items:center;padding:0 10px;background:var(--s2);border:1px solid var(--b2);border-radius:7px;font-size:11px;font-family:var(--mono);color:var(--t3)">.orbiq</div>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Display Name</span><span id="orbiq-badge-display" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <input class="input" id="orbiq-reg-display-name" type="text" placeholder="Dream" value="${displayName}" oninput="refreshOrbiqRegisterStepOneHints()">
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Password</span><span id="orbiq-badge-pass" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-password" type="password" placeholder="At least 6 chars" autocomplete="new-password" value="${rawPassword}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-reg-password', this)">Show</button>
      </div>
    </div>
    <div class="field">
      <div class="label" style="display:flex;align-items:center;justify-content:space-between"><span>Confirm Password</span><span id="orbiq-badge-confirm" style="font-size:10px;font-family:var(--mono);padding:2px 6px;border:1px solid var(--b2);border-radius:999px;color:var(--t4);background:var(--s3)">Check</span></div>
      <div style="display:flex;gap:6px;align-items:center">
        <input class="input" id="orbiq-reg-confirm-password" type="password" placeholder="Repeat password" autocomplete="new-password" value="${rawPassword}" style="flex:1" oninput="refreshOrbiqRegisterStepOneHints()">
        <button type="button" class="btn btn-ghost" style="height:31px;padding:0 10px" onclick="togglePasswordVisibility('orbiq-reg-confirm-password', this)">Show</button>
      </div>
    </div>
  `;
}

function renderOrbiqRegisterStepTwo(state) {
  return `
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">
        We sent a 6-digit code to <strong style="color:var(--t2)">${escapeHtml(state.email)}</strong>.
      </div>
    </div>
    <div class="field">
      <div class="label">Verification Code</div>
      <input class="input" id="orbiq-reg-code" type="text" inputmode="numeric" maxlength="6" placeholder="123456" style="text-align:center;font-size:18px;letter-spacing:6px;font-family:var(--mono)">
      <div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:5px">Tip: check spam folder if code is delayed.</div>
    </div>
  `;
}

function renderOrbiqRegisterStepThree(state) {
  const hasMicrosoft = getRenderableProfiles().some((item) => item.profileType === 'microsoft');
  state.microsoftLinked = state.microsoftLinked || hasMicrosoft;
  const statusLabel = state.microsoftLinked ? 'Linked' : 'Not linked';
  const statusColor = state.microsoftLinked ? 'var(--green)' : 'var(--t4)';
  const readyAccount = ensureOrbiqUsername(state.username) || state.email;
  return `
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:11px;font-family:var(--mono);color:var(--t3);line-height:1.6">
        Account ready: <strong style="color:var(--t2)">${escapeHtml(readyAccount)}</strong><br>
        Email verified: <strong style="color:var(--green)">Yes</strong>
      </div>
    </div>
    <div style="padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:10px">
      <div style="font-size:10px;font-family:var(--mono);letter-spacing:1px;color:var(--t4);margin-bottom:6px">MICROSOFT BENEFITS</div>
      <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--t3)">
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="shield-check" width="12" height="12" style="color:var(--green)"></i>Official servers and secure auth</div>
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="shirt" width="12" height="12" style="color:var(--green)"></i>Skins and profile sync</div>
        <div style="display:flex;align-items:center;gap:6px"><i data-lucide="sparkles" width="12" height="12" style="color:var(--green)"></i>Smoother account switching</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--s2);border:1px solid var(--b2);border-radius:8px">
      <div>
        <div style="font-size:11px;font-family:var(--mono);color:var(--t3)">Microsoft Link</div>
        <div style="font-size:12px;color:${statusColor};margin-top:2px">${statusLabel}</div>
      </div>
      <button class="btn btn-ghost" style="height:30px" onclick="orbiqRegisterLinkMicrosoft()">
        <i data-lucide="link" width="12" height="12"></i>Link Microsoft
      </button>
    </div>
  `;
}

function hydrateOrbiqRegisterModal() {
  const state = getOrbiqRegisterState();
  state.step = Number(state.step || 1);
  if (state.step < 1 || state.step > 3) state.step = 1;

  const stepper = document.getElementById('orbiq-register-stepper');
  const content = document.getElementById('orbiq-register-content');
  const actions = document.getElementById('orbiq-register-actions');
  if (!stepper || !content || !actions) return;

  stepper.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">${renderOrbiqRegisterStepper(state.step)}</div>
    <div style="margin-top:6px;color:var(--t4)">Step ${state.step} of 3</div>
  `;

  if (state.step === 1) {
    content.innerHTML = renderOrbiqRegisterStepOne(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="cancelOrbiqRegister()">Cancel</button>
      <button class="btn btn-primary" onclick="orbiqRegisterSendCode()">Send Code</button>
    `;
    setOrbiqRegisterStatus('Fill all fields to continue.', false);
    refreshOrbiqRegisterStepOneHints();
  } else if (state.step === 2) {
    content.innerHTML = renderOrbiqRegisterStepTwo(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="orbiqRegisterPrevStep()">Back</button>
      <button class="btn btn-ghost" onclick="orbiqRegisterResendCode()">Resend</button>
      <button class="btn btn-primary" onclick="orbiqRegisterVerifyCode()">Verify</button>
    `;
    setOrbiqRegisterStatus('Check your email and enter the 6-digit code.', false);
    applyPendingDeepLinkOtpIfAny();
  } else {
    content.innerHTML = renderOrbiqRegisterStepThree(state);
    actions.innerHTML = `
      <button class="btn btn-ghost" onclick="orbiqRegisterPrevStep()">Back</button>
      <button class="btn btn-primary" onclick="finishOrbiqRegistration(true)">Skip and Finish</button>
    `;
    setOrbiqRegisterStatus('You can link Microsoft now or skip and finish.', false);
  }

  lucide.createIcons();
}

function cancelOrbiqRegister() {
  ORBIQ_REGISTER_STATE = null;
  closeModal();
}

function orbiqRegisterPrevStep() {
  const state = getOrbiqRegisterState();
  state.step = Math.max(1, Number(state.step || 1) - 1);
  hydrateOrbiqRegisterModal();
}

function readOrbiqRegisterStepOneInput(state) {
  state.email = normalizeOrbiqEmail(document.getElementById('orbiq-reg-email')?.value || '');
  state.username = normalizeOrbiqUsername(document.getElementById('orbiq-reg-username')?.value || '');
  state.displayName = String(document.getElementById('orbiq-reg-display-name')?.value || '').trim();
  state.rawPassword = String(document.getElementById('orbiq-reg-password')?.value || '');
  const confirm = String(document.getElementById('orbiq-reg-confirm-password')?.value || '');
  return confirm;
}

function validateOrbiqRegisterStepOne(state, confirmPassword) {
  const checks = computeOrbiqRegisterChecks(state, confirmPassword);
  return checks.firstError || '';
}

async function orbiqRegisterSendCode() {
  const state = getOrbiqRegisterState();
  const confirm = readOrbiqRegisterStepOneInput(state);
  const validationError = validateOrbiqRegisterStepOne(state, confirm);
  if (validationError) {
    setOrbiqRegisterStatus(validationError, true);
    return;
  }

  state.passwordHash = hashOrbiqPassword(state.rawPassword);
  const sendRes = await invokeBackend('start_orbiq_email_verification', {
    request: { email: state.email },
  });
  if (!sendRes.ok || !sendRes.data) {
    setOrbiqRegisterStatus(
      formatBackendError(sendRes.error, 'Could not send verification code.'),
      true
    );
    return;
  }
  state.verificationSessionId = String(sendRes.data.sessionId || '').trim();
  state.codeExpiresAtEpoch = Number(sendRes.data.expiresAtEpoch || 0) || 0;
  state.step = 2;
  hydrateOrbiqRegisterModal();
  setOrbiqRegisterStatus(`Verification code sent to ${state.email}.`, false);
  showToast('OTP', 'Code sent', 'Verification code has been issued');
}

async function orbiqRegisterResendCode() {
  const state = getOrbiqRegisterState();
  const resendRes = await invokeBackend('start_orbiq_email_verification', {
    request: { email: state.email },
  });
  if (!resendRes.ok || !resendRes.data) {
    setOrbiqRegisterStatus(
      formatBackendError(resendRes.error, 'Could not resend verification code.'),
      true
    );
    return;
  }
  state.verificationSessionId = String(resendRes.data.sessionId || '').trim();
  state.codeExpiresAtEpoch = Number(resendRes.data.expiresAtEpoch || 0) || 0;
  setOrbiqRegisterStatus('New code sent. Check your inbox.', false);
  showToast('OTP', 'Code resent', 'A new verification code was sent');
}

async function orbiqRegisterVerifyCode() {
  const state = getOrbiqRegisterState();
  const codeInput = document.getElementById('orbiq-reg-code');
  const code = String(codeInput ? codeInput.value : '').replace(/\D+/g, '');
  if (code.length !== 6) {
    setOrbiqRegisterStatus('Enter a valid 6-digit code.', true);
    return;
  }
  if (!state.verificationSessionId) {
    setOrbiqRegisterStatus('No code was generated. Go back and resend code.', true);
    return;
  }
  if (Math.floor(Date.now() / 1000) > Number(state.codeExpiresAtEpoch || 0)) {
    setOrbiqRegisterStatus('Verification code expired. Click Resend.', true);
    return;
  }
  const verifyRes = await invokeBackend('verify_orbiq_email_code', {
    request: {
      email: state.email,
      sessionId: state.verificationSessionId,
      code,
    },
  });
  if (!verifyRes.ok) {
    setOrbiqRegisterStatus(
      formatBackendError(verifyRes.error, 'Verification failed.'),
      true
    );
    return;
  }

  state.verified = true;
  state.step = 3;
  hydrateOrbiqRegisterModal();
  setOrbiqRegisterStatus('Email verified successfully.', false);
}

function buildOrbiqAccountFromRegisterState(state) {
  const existing = getOrbiqAccountState();
  const now = Math.floor(Date.now() / 1000);
  const username = ensureOrbiqUsername(state.username);
  const createdAtEpoch = existing && existing.createdAtEpoch ? existing.createdAtEpoch : now;
  return {
    email: state.email,
    username,
    displayName: state.displayName,
    passwordHash: state.passwordHash,
    plan: existing && existing.plan ? existing.plan : 'Free',
    createdAtEpoch,
    lastLoginAtEpoch: now,
    signedIn: true,
    microsoftLinked: !!state.microsoftLinked,
    accountId: resolveOrbiqAccountId({
      accountId: existing && existing.accountId,
      username,
      email: state.email,
      createdAtEpoch,
    }),
  };
}

async function finishOrbiqRegistration(skipMicrosoft) {
  const state = getOrbiqRegisterState();
  if (!state.verified) {
    setOrbiqRegisterStatus('Email verification is required.', true);
    return;
  }
  if (!state.passwordHash) {
    setOrbiqRegisterStatus('Password is missing. Go back and check fields.', true);
    return;
  }

  state.microsoftLinked =
    state.microsoftLinked || getRenderableProfiles().some((item) => item.profileType === 'microsoft');
  const accountPayload = buildOrbiqAccountFromRegisterState(state);
  persistOrbiqAccountState(accountPayload);

  const welcomeRes = await invokeBackend('send_orbiq_welcome_email', {
    request: {
      email: accountPayload.email,
      username: accountPayload.username,
      displayName: accountPayload.displayName,
    },
  });
  if (!welcomeRes.ok) {
    console.warn('[orbiq] welcome email failed', welcomeRes.error);
    showToast('!', 'Mail warning', 'Account created, but welcome email failed');
  }

  ORBIQ_REGISTER_RESULT = {
    email: accountPayload.email,
    username: accountPayload.username,
    accountId: accountPayload.accountId,
    microsoftLinked: !!state.microsoftLinked,
    requestedMicrosoftLink: !skipMicrosoft,
  };
  ORBIQ_REGISTER_STATE = null;

  closeModal();
  setTimeout(() => openModal('orbiq-register-success'), 180);
  showToast('OK', 'Account created', 'Setup complete');
}

async function orbiqRegisterLinkMicrosoft() {
  await finishOrbiqRegistration(false);
}

function hydrateOrbiqRegisterSuccessModal() {
  const summary = ORBIQ_REGISTER_RESULT || {};
  const summaryEl = document.getElementById('orbiq-success-summary');
  if (!summaryEl) return;
  const account = String(summary.accountId || summary.username || summary.email || 'player.orbiq');
  const email = String(summary.email || 'you@example.com');
  const linked = !!summary.microsoftLinked;
  summaryEl.innerHTML = `
    <div style="font-size:10px;font-family:var(--mono);letter-spacing:1px;color:var(--t4);margin-bottom:6px">ACCOUNT SUMMARY</div>
    <div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:4px"><span style="font-size:11px;color:var(--t4)">Orbiq ID</span><span style="font-size:11px;color:var(--t1);font-weight:700">${escapeHtml(account)}</span></div>
    <div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:4px"><span style="font-size:11px;color:var(--t4)">Email</span><span style="font-size:11px;color:var(--t3)">${escapeHtml(email)}</span></div>
    <div style="display:flex;justify-content:space-between;gap:10px"><span style="font-size:11px;color:var(--t4)">Microsoft</span><span style="font-size:11px;color:${linked ? 'var(--green)' : 'var(--t4)'}">${linked ? 'Linked' : 'Not linked'}</span></div>
  `;
  const linkBtn = document.getElementById('orbiq-success-link-btn');
  if (linkBtn && summary.requestedMicrosoftLink && !linked) {
    linkBtn.classList.remove('btn-ghost');
    linkBtn.classList.add('btn-primary');
    linkBtn.innerHTML = '<i data-lucide="link" width="12" height="12"></i>Link Microsoft Now';
  }
  lucide.createIcons();
}

function openLinkMicrosoftFromSuccess() {
  closeModal();
  setTimeout(() => openModal('link-microsoft'), 180);
}

function goToLauncherHome() {
  ORBIQ_REGISTER_RESULT = null;
  closeModal();
  setPage('launch');
}

function renderOrbiqAccountsList() {
  const wrap = modalPop ? modalPop.querySelector('.linked-list') : null;
  if (!wrap) return;

  const account = getOrbiqAccountState();
  const profiles = getRenderableProfiles();
  const active = profiles.find((item) => !!item.active) || profiles[0];
  const effectiveName = account && account.displayName
    ? account.displayName
    : (account && account.username
      ? getOrbiqUsernameLabel(account.username)
      : ((active && active.name) || 'Player'));
  const effectiveEmail = account && account.email
    ? account.email
    : (active && active.email ? active.email : 'No email');
  const effectivePlan = account && account.plan ? account.plan : 'Free';
  const effectiveId = resolveOrbiqAccountId({
    accountId: account && account.accountId,
    username: account && account.username,
    email: effectiveEmail,
    createdAtEpoch: account && account.createdAtEpoch,
  });

  const accountName = modalPop.querySelector('.orbiq-acct-name');
  if (accountName) {
    accountName.textContent = effectiveName;
  }

  const accountEmail = modalPop.querySelector('.orbiq-acct-email');
  if (accountEmail) {
    accountEmail.textContent = effectiveEmail;
  }

  const accountId = modalPop.querySelector('.orbiq-acct-id');
  if (accountId) {
    accountId.textContent = effectiveId;
  }

  const accountPlan = modalPop.querySelector('.orbiq-acct-plan');
  if (accountPlan) {
    accountPlan.textContent = effectivePlan;
  }

  const badge = modalPop.querySelector('.orbiq-acct-badge');
  if (badge) {
    badge.innerHTML = account && account.signedIn
      ? '<div style="width:5px;height:5px;border-radius:50%;background:var(--green)"></div>Signed in'
      : '<div style="width:5px;height:5px;border-radius:50%;background:var(--t4)"></div>Signed out';
  }

  const authAction = modalPop.querySelector('#orbiq-auth-action-btn');
  if (authAction) {
    authAction.innerHTML = account && account.signedIn
      ? '<i data-lucide="log-out" width="12" height="12"></i>Sign Out'
      : '<i data-lucide="log-in" width="12" height="12"></i>Sign In';
  }

  const rows = profiles.map((profile) => {
    const isMicrosoft = profile.profileType === 'microsoft';
    const isActive = !!profile.active;
    let typeClass = isMicrosoft ? 'microsoft' : 'offline';
    let typeText = isMicrosoft ? 'Microsoft' : 'Offline';
    if (isActive && isMicrosoft) {
      typeClass = 'active-microsoft';
      typeText = 'Active';
    } else if (isActive) {
      typeClass = 'active-profile';
      typeText = 'Active';
    }
    const meta = isMicrosoft
      ? `${profile.email || 'Microsoft account'} Â· Official license`
      : 'Offline profile Â· Cracked servers only';

    const iconLeft = isMicrosoft
      ? `<div class="ms-linked-icon ms-brand">
           <div class="ms-grid" style="width:14px;height:14px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
         </div>`
      : `<div class="ms-linked-icon offline-brand" style="display:flex;align-items:center;justify-content:center;"><i data-lucide="user-round" width="14" height="14" style="color:var(--t3)"></i></div>`;

    const avatar = isMicrosoft
      ? `<div style="width:28px;height:28px;border-radius:5px;overflow:hidden;flex-shrink:0;image-rendering:pixelated;background:var(--s3)">
           <img src="https://mc-heads.net/avatar/${encodeURIComponent(profile.name)}/32" style="width:100%;image-rendering:pixelated" onerror="this.style.display='none'">
         </div>`
      : `<div style="width:28px;height:28px;border-radius:5px;overflow:hidden;flex-shrink:0;background:var(--s3);border:1px solid var(--b2);display:flex;align-items:center;justify-content:center;"><i data-lucide="user" width="15" height="15" style="color:var(--t3)"></i></div>`;

    const typeIcon = isActive && isMicrosoft
      ? '<i data-lucide="sparkles" width="10" height="10"></i>'
      : (isActive
        ? '<div style="width:5px;height:5px;border-radius:50%;background:currentColor"></div>'
        : (isMicrosoft ? '<i data-lucide="check-circle" width="10" height="10"></i>' : ''));

    return `
      <div class="ms-linked-row${isActive ? ' active-account' : ''}" onclick="openProfileDetailById(decodeURIComponent('${encodeURIComponent(profile.id)}'))">
        ${iconLeft}
        ${avatar}
        <div style="flex:1">
          <div class="ms-linked-name">${escapeHtml(profile.name)}</div>
          <div class="ms-linked-meta">${escapeHtml(meta)}</div>
        </div>
        <div class="ms-linked-type ${typeClass}">
          ${typeIcon}
          ${typeText}
        </div>
      </div>
    `;
  }).join('');

  wrap.innerHTML = `
    <div class="linked-section-label">Linked Accounts</div>
    ${rows}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
      <button class="add-linked-btn" onclick="closeModal();setTimeout(()=>openModal('link-microsoft'),200)">
        <div class="ms-grid" style="width:12px;height:12px;"><div style="background:#f25022;border-radius:1px"></div><div style="background:#7fba00;border-radius:1px"></div><div style="background:#00a4ef;border-radius:1px"></div><div style="background:#ffb900;border-radius:1px"></div></div>
        Link Microsoft
      </button>
      <button class="add-linked-btn" onclick="closeModal();setTimeout(()=>openModal('add-offline-profile'),200)">
        <i data-lucide="user-plus" width="12" height="12"></i>
        Add Profile
      </button>
    </div>
  `;

  lucide.createIcons();
}

function hydrateMicrosoftDetailModal() {
  let profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) {
    profile = getRenderableProfiles().find((item) => item.profileType === 'microsoft') || null;
    if (profile) ACTIVE_PROFILE_DETAIL_ID = profile.id;
  }
  if (!profile) return;

  const title = modalPop.querySelector('.mh-title');
  if (title) title.textContent = profile.name + ' - Microsoft';

  const header = modalPop.querySelector('.mb > div');
  if (header) {
    const avatar = header.querySelector('img');
    if (avatar) avatar.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(profile.name) + '/64';
    const blocks = header.querySelectorAll('div > div');
    if (blocks && blocks.length >= 2) {
      blocks[0].textContent = profile.name;
      blocks[1].textContent = profile.email || 'Microsoft account';
    }
  }

  const linkedRow = modalPop.querySelectorAll('.info-row .info-val');
  if (linkedRow && linkedRow.length > 3) {
    linkedRow[3].textContent = formatEpochDate(profile.lastAuthenticatedAtEpoch);
  }

  const unlinkBtn = modalPop.querySelector('.mf .btn-danger');
  if (unlinkBtn) unlinkBtn.onclick = unlinkCurrentMicrosoftProfile;
}

function hydrateOfflineDetailModal() {
  let profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) {
    profile = getRenderableProfiles().find((item) => item.profileType !== 'microsoft') || null;
    if (profile) ACTIVE_PROFILE_DETAIL_ID = profile.id;
  }
  if (!profile) return;

  const title = modalPop.querySelector('.mh-title');
  if (title) title.textContent = profile.name + ' - Offline Profile';

  const header = modalPop.querySelector('.mb > div');
  if (header) {
    const blocks = header.querySelectorAll('div > div');
    if (blocks && blocks.length >= 1) {
      blocks[0].textContent = profile.name;
    }
    const badges = header.querySelectorAll('div[style*="inline-flex"]');
    if (badges && badges[0]) {
      badges[0].style.display = profile.active ? 'inline-flex' : 'none';
    }
  }

  const infoVals = modalPop.querySelectorAll('.info-row .info-val');
  if (infoVals && infoVals.length > 3) {
    infoVals[2].textContent = hashPseudoUuid(profile.name);
    infoVals[3].textContent = formatEpochDate(profile.lastAuthenticatedAtEpoch);
  }

  const deleteBtn = modalPop.querySelector('.mf .btn-danger');
  if (deleteBtn) deleteBtn.onclick = removeCurrentOfflineProfile;
  const setActiveBtn = modalPop.querySelector('.mf .btn-primary');
  if (setActiveBtn) {
    setActiveBtn.disabled = !!profile.active;
    setActiveBtn.textContent = profile.active ? 'Active' : 'Set Active';
    setActiveBtn.onclick = setCurrentProfileActive;
  }
}

async function hydrateOrbiqAccountsModal() {
  await refreshProfilesFromBackend();
  renderOrbiqAccountsList();
}

function openProfileDetailById(profileId) {
  const profile = findProfileById(profileId);
  if (!profile) return;
  ACTIVE_PROFILE_DETAIL_ID = profile.id;
  closeModal();
  setTimeout(() => openModal(profile.profileType === 'microsoft' ? 'ms-linked-detail' : 'offline-profile-detail'), 180);
}

async function setCurrentProfileActive() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;
  if (profile.active) {
    showToast('OK', 'Already active', profile.name + ' is already active');
    return;
  }

  const res = await invokeBackend('set_active_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Action failed', 'Could not set active profile');
    return;
  }
  await refreshProfilesFromBackend();

  hydrateOfflineDetailModal();
  showToast('OK', 'Active profile', profile.name + ' is now active');
}

async function removeCurrentOfflineProfile() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;

  const res = await invokeBackend('remove_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Remove failed', 'Could not remove this profile');
    return;
  }
  await refreshProfilesFromBackend();

  closeModal();
  setTimeout(() => openModal('orbiq-accounts'), 180);
  showToast('OK', 'Removed', profile.name + ' profile deleted');
}

async function unlinkCurrentMicrosoftProfile() {
  const profile = findProfileById(ACTIVE_PROFILE_DETAIL_ID);
  if (!profile) return;

  const res = await invokeBackend('logout_microsoft_profile', { request: { profileId: profile.id } });
  if (!res.ok) {
    showToast('!', 'Unlink failed', 'Could not remove Microsoft account');
    return;
  }
  await refreshProfilesFromBackend();

  closeModal();
  setTimeout(() => openModal('orbiq-accounts'), 180);
  showToast('OK', 'Unlinked', 'Microsoft account removed');
}

function getInstanceRuntimeConfig(instanceName) {
  if (!instanceName) return null;
  return INSTANCE_RUNTIME[instanceName] || null;
}

function parseArgsInput(text) {
  const src = String(text || '').trim();
  if (!src) return [];
  const out = [];
  let cur = '';
  let quote = null;
  let escaped = false;

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (escaped) {
      cur += ch;
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (quote) {
      if (ch === quote) {
        quote = null;
      } else {
        cur += ch;
      }
      continue;
    }

    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }

    if (/\s/.test(ch)) {
      if (cur.length > 0) {
        out.push(cur);
        cur = '';
      }
      continue;
    }

    cur += ch;
  }

  if (escaped) cur += '\\';
  if (cur.length > 0) {
    out.push(cur);
  }
  return out;
}

function stringifyArgs(args) {
  if (!Array.isArray(args) || args.length === 0) return '';
  return args.map((arg) => {
    const value = String(arg);
    if (value.length === 0) return '""';
    if (!/[\\\s"]/g.test(value)) return value;
    return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }).join(' ');
}

function populateEditInstanceModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    closeModal();
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const cfg = getInstanceRuntimeConfig(instanceName) || {};
  const titleEl = document.getElementById('edit-modal-title');
  const nameEl = document.getElementById('edit-inst-name');
  const execEl = document.getElementById('edit-launch-exec');
  const argsEl = document.getElementById('edit-launch-args');
  const wdEl = document.getElementById('edit-launch-wd');
  if (titleEl) titleEl.textContent = 'Edit - ' + instanceName;
  if (nameEl) nameEl.value = instanceName;
  if (execEl) execEl.value = cfg.executable || '';
  if (execEl) {
    if (cfg.executable) execEl.placeholder = 'e.g. java or C:\\Java\\bin\\java.exe';
    else if (JAVA_RUNTIME_INFO.defaultPath) execEl.placeholder = JAVA_RUNTIME_INFO.defaultPath;
    else execEl.placeholder = 'e.g. java or C:\\Java\\bin\\java.exe';
  }
  if (argsEl) argsEl.value = stringifyArgs(cfg.args);
  if (wdEl) wdEl.value = cfg.workingDir || '';
}

async function saveEditInstanceModal() {
  const oldName = getSelectedInstanceName();
  if (!oldName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const nameEl = document.getElementById('edit-inst-name');
  const execEl = document.getElementById('edit-launch-exec');
  const argsEl = document.getElementById('edit-launch-args');
  const wdEl = document.getElementById('edit-launch-wd');
  const newName = nameEl ? nameEl.value.trim() : oldName;

  if (!newName) {
    showToast('!', 'Missing name', 'Instance name is required');
    return;
  }

  const executableRaw = execEl ? execEl.value.trim() : '';
  const args = parseArgsInput(argsEl ? argsEl.value : '');
  const workingDirRaw = wdEl ? wdEl.value.trim() : '';

  if (newName !== oldName) {
    const renameRes = await invokeBackend('rename_instance', { request: { oldName, newName } });
    if (!renameRes.ok) {
      showToast('!', 'Rename failed', 'Could not rename this instance');
      return;
    }
  }

  const request = {
    instanceName: newName,
    executable: executableRaw || '',
    args,
    workingDir: workingDirRaw || '',
  };

  const res = await invokeBackend('update_instance_launch_config', { request });
  if (!res.ok) {
    showToast('!', 'Save failed', 'Could not save launch config');
    return;
  }

  if (oldName !== newName) {
    delete INSTANCE_RUNTIME[oldName];
  }
  INSTANCE_RUNTIME[newName] = {
    executable: executableRaw || null,
    args,
    workingDir: workingDirRaw || null,
  };

  closeModal();
  const refreshed = await refreshInstancesFromBackend(false);
  if (!refreshed) {
    showToast('!', 'Refresh failed', 'Could not refresh instance list');
    return;
  }
  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const updatedCard = cards.find((card) => card.dataset.name === newName);
  if (updatedCard) selectCard(updatedCard);
  showToast('OK', 'Saved', 'Launch config updated');
}

function hydrateDeleteConfirmModal() {
  const name = getSelectedInstanceName();
  const label = document.getElementById('delete-instance-name');
  if (label) label.textContent = name || 'this instance';
}

async function deleteSelectedInstanceFromModal() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const res = await invokeBackend('delete_instance', { request: { instanceName } });
  if (!res.ok) {
    showToast('!', 'Delete failed', 'Could not delete this instance');
    return;
  }

  closeModal();
  await refreshInstancesFromBackend(false);
  showToast('OK', 'Instance deleted', instanceName + ' removed');
}

async function bootstrapBackendState() {
  await setupLifecycleEventStream();
  await setupProvisionEventStream();
  await setupDeepLinkEventStream();
  await consumeInitialDeepLinkPayload();
  const javaRes = await invokeBackend('get_java_runtime_info', { minimumMajor: 17 });
  if (javaRes.ok && javaRes.data && typeof javaRes.data === 'object') {
    JAVA_RUNTIME_INFO = {
      minimumMajor: Number(javaRes.data.minimumMajor || 17),
      defaultPath: javaRes.data.defaultPath || null,
      candidates: Array.isArray(javaRes.data.candidates) ? javaRes.data.candidates : [],
    };
  }
  await refreshInstancesFromBackend(true);
  await Promise.allSettled([
    refreshProfilesFromBackend(),
    invokeBackend('list_deployments'),
  ]);
}

function applyInstanceLifecycleEvent(payload) {
  if (!payload || !payload.instanceName) return;
  const name = String(payload.instanceName);
  const state = String(payload.state || '').toLowerCase();
  const source = String(payload.source || '').toLowerCase();

  applyActiveLaunchLifecycleProgress(payload);

  const details = INSTANCE_DATA[name];
  if (!details) {
    if (state === 'failed') {
      const reason = payload.reason ? String(payload.reason) : 'Process failed';
      showToast('!', 'Launch failed', reason);
    }
    return;
  }

  if (state === 'starting' || state === 'running') {
    details.running = true;
    if (payload.timestampEpoch) {
      details.lastPlayedEpoch = parseLastPlayedEpoch(payload.timestampEpoch);
      details.last = formatLastPlayed(details.lastPlayedEpoch);
    }
    details.lastExitState = null;
    details.lastExitCode = null;
    details.lastExitReason = null;
    details.lastExitAtEpoch = null;
    details.exitStatus = 'Ã¯Â¿Â½?"';
  } else if (state === 'stopped' || state === 'failed') {
    details.running = false;

    if (state === 'stopped') {
      details.lastExitState = source === 'kill_request' ? 'killed' : 'exited';
    } else {
      details.lastExitState = payload.reason ? 'error' : 'crashed';
    }
    details.lastExitCode = typeof payload.exitCode === 'number' ? payload.exitCode : null;
    details.lastExitReason = payload.reason ? String(payload.reason) : null;
    details.lastExitAtEpoch = parseLastPlayedEpoch(payload.timestampEpoch);
    details.exitStatus = formatExitStatus(
      details.lastExitState,
      details.lastExitCode,
      details.lastExitReason,
      details.lastExitAtEpoch
    );
  }

  const selected = document.querySelector('.instance-card.selected');
  if (selected && selected.dataset.name === name) {
    selectCard(selected);
  }

  if (state === 'failed') {
    if (!ACTIVE_PROVISION || ACTIVE_PROVISION.instanceName !== name) {
      const reason = payload.reason ? String(payload.reason) : 'Process failed';
      showToast('!', 'Launch failed', reason);
    }
  }
}

async function setupLifecycleEventStream() {
  if (!tauriListen) return;
  if (typeof detachLifecycleListener === 'function') return;
  try {
    detachLifecycleListener = await tauriListen('orbiq://instance-lifecycle', (event) => {
      applyInstanceLifecycleEvent(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach lifecycle listener', err);
  }
}

function sleepMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clampProgress(value) {
  return Math.max(0, Math.min(100, Math.floor(Number(value) || 0)));
}

function setLaunchOverlayProgress(percent, label, force) {
  if (!ACTIVE_PROVISION || !ACTIVE_PROVISION.overlay) return;
  const current = Number.isFinite(ACTIVE_PROVISION.percent) ? ACTIVE_PROVISION.percent : 0;
  const next = force ? clampProgress(percent) : Math.max(current, clampProgress(percent));
  ACTIVE_PROVISION.percent = next;
  if (ACTIVE_PROVISION.fill) ACTIVE_PROVISION.fill.style.width = next + '%';
  if (ACTIVE_PROVISION.label && label) ACTIVE_PROVISION.label.textContent = label;
}

function inferProvisionProgressByPhase(phase, total, completed, currentPercent) {
  const current = Number.isFinite(currentPercent) ? currentPercent : 0;
  const boundedRatio = total && total > 0 && completed !== null
    ? Math.max(0, Math.min(1, completed / total))
    : null;

  if (phase === 'libraries') {
    return boundedRatio === null ? Math.max(current, 36) : 36 + Math.floor(boundedRatio * 30);
  }
  if (phase === 'loader_libraries') {
    return boundedRatio === null ? Math.max(current, 54) : 54 + Math.floor(boundedRatio * 20);
  }
  if (phase === 'assets') {
    return boundedRatio === null ? Math.max(current, 72) : 72 + Math.floor(boundedRatio * 18);
  }
  if (phase === 'done') return 90;

  const staticMap = {
    init: 8,
    manifest: 12,
    version_json: 18,
    client: 26,
    asset_index: 32,
    loader_manifest: 42,
    loader_base: 48,
    loader_installer: 52,
  };
  if (Object.prototype.hasOwnProperty.call(staticMap, phase)) {
    return Math.max(current, staticMap[phase]);
  }
  return Math.max(current, 10);
}

function lifecycleFailureMessage(payload) {
  if (payload && payload.reason) return String(payload.reason);
  if (payload && typeof payload.exitCode === 'number') {
    return 'Minecraft exited with code ' + payload.exitCode;
  }
  return 'Minecraft process exited during startup';
}

function applyActiveLaunchLifecycleProgress(payload) {
  if (!payload || !payload.instanceName || !ACTIVE_PROVISION) return;
  if (ACTIVE_PROVISION.instanceName !== String(payload.instanceName)) return;

  const state = String(payload.state || '').toLowerCase();
  ACTIVE_PROVISION.lastLifecyclePayload = payload;
  ACTIVE_PROVISION.lastLifecycleState = state;

  if (state === 'starting') {
    setLaunchOverlayProgress(94, 'Starting Minecraft process...', false);
    return;
  }
  if (state === 'running') {
    setLaunchOverlayProgress(97, 'Minecraft process started. Verifying...', false);
    return;
  }
  if (state === 'failed') {
    setLaunchOverlayProgress(100, lifecycleFailureMessage(payload), true);
    return;
  }
  if (state === 'stopped') {
    setLaunchOverlayProgress(99, 'Minecraft process stopped', false);
  }
}

function applyProvisionProgressEvent(payload) {
  if (!payload || !payload.instanceName || !ACTIVE_PROVISION) return;
  if (ACTIVE_PROVISION.instanceName !== String(payload.instanceName)) return;

  const state = String(payload.state || '').toLowerCase();
  const phase = String(payload.phase || '').toLowerCase();
  const total = typeof payload.total === 'number' ? payload.total : null;
  const completed = typeof payload.completed === 'number' ? payload.completed : null;

  if (state === 'failed') {
    setLaunchOverlayProgress(100, payload.message || 'Provision failed', true);
    return;
  }

  const percent = inferProvisionProgressByPhase(
    phase,
    total,
    completed,
    ACTIVE_PROVISION.percent || 0
  );
  setLaunchOverlayProgress(percent, payload.message || 'Provisioning...', false);
}

async function setupProvisionEventStream() {
  if (!tauriListen) return;
  if (typeof detachProvisionListener === 'function') return;
  try {
    detachProvisionListener = await tauriListen(PROVISION_EVENT_NAME, (event) => {
      applyProvisionProgressEvent(event ? event.payload : null);
    });
  } catch (err) {
    console.warn('failed to attach provisioning listener', err);
  }
}
function buildDynamicSections() {
  const fg = document.getElementById('featured-grid');
  if (fg) {
    fg.innerHTML = [['ï¿½YOï¿½','All the Mods 9','1.21.1 Â· Forge','2.4M ï¿½?"'],['ï¿½sTï¸','Create: Astral','1.20.1 Â· Fabric','1.1M ï¿½?"'],['ï¿½Yï¿½ï¿½','Better MC','1.21.4 Â· Fabric','890K ï¿½?"'],['ï¿½Y"ï¿½','Prominence II','1.20.1 Â· Forge','650K ï¿½?"']].map(([e,n,v,dl])=>`
      <div class="featured-card" onclick="openModal('install-modpack')">
        <div class="featured-thumb">${e}</div>
        <div class="featured-body"><div class="featured-name">${n}</div><div class="featured-meta">${v}</div><div class="featured-dl"><i data-lucide="download" width="9" height="9"></i>${dl}</div></div>
      </div>`).join('');
  }

  const nl = document.getElementById('news-list');
  if (nl) {
    nl.innerHTML = [
      {icon:'Ã¯Â¿Â½YZÃ¯Â¿Â½',src:'Minecraft',color:'#3d8c4a',title:'Minecraft 1.21.5 Ã¯Â¿Â½?" Spring Drop Released',desc:'New flower, leaf litter, and more biome variety.',date:'2 hours ago'},
      {icon:'Ã¯Â¿Â½YÃ¯Â¿Â½Ã¯Â¿Â½',src:'Fabric',color:'#aa7744',title:'Fabric Loader 0.17 now available',desc:'Major performance improvements and improved mod compatibility.',date:'1 day ago'},
      {icon:'Ã¯Â¿Â½sÃ¯Â¿Â½',src:'Sodium',color:'#4488cc',title:'Sodium 0.6.3 Ã¯Â¿Â½?" Memory leak fix',desc:'Critical fix for a memory leak affecting modded instances.',date:'2 days ago'},
    ].map(n=>`
    <div class="news-card"><div style="padding:12px">
      <div class="news-source"><div class="news-dot" style="background:${n.color}"></div>${n.src}</div>
      <div style="display:flex;align-items:flex-start;gap:10px"><div style="font-size:28px;flex-shrink:0">${n.icon}</div><div><div class="news-title">${n.title}</div><div class="news-desc">${n.desc}</div><div class="news-date">${n.date}</div></div></div>
    </div></div>`).join('');
  }

  const fc = document.getElementById('friends-content');
  if (fc) {
    fc.innerHTML = `
      <div class="section-title">Online Ã¯Â¿Â½?" 3 <div class="section-title-line"></div></div>
      ${[{name:'Technoblade2',status:'Playing All the Mods 9',color:'#dd5555',online:'game',canJoin:true},{name:'GoodTimesWithScar',status:'Playing Better MC',color:'#44aadd',online:'game',canJoin:false},{name:'Grian',status:'On Orbiq launcher',color:'#ddaa44',online:'on',canJoin:false}].map(f=>`
      <div class="friend-row"><div class="friend-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(f.name.replace(/\d+/,''))}/32" onerror="this.parentNode.style.background='${f.color}33'"></div><div class="online-dot ${f.online==='game'?'game':'on'}"></div><div style="flex:1"><div class="friend-name">${f.name}</div><div class="friend-status">${f.status}</div></div><div class="friend-actions">${f.canJoin?`<button class="friend-btn join" onclick="openModal('shared-session')"><i data-lucide="arrow-right" width="10" height="10"></i>Join</button>`:''}<button class="friend-btn"><i data-lucide="message-square" width="10" height="10"></i></button></div></div>`).join('')}
      <div class="section-title" style="margin-top:14px">Offline Ã¯Â¿Â½?" 2 <div class="section-title-line"></div></div>
      ${[{name:'Dream',status:'Last seen 2h ago'},{name:'GeorgeNotFound',status:'Last seen yesterday'}].map(f=>`<div class="friend-row" style="opacity:0.5"><div class="friend-avatar"><img src="https://mc-heads.net/avatar/${encodeURIComponent(f.name)}/32" onerror="this.parentNode.style.background='#333'"></div><div class="online-dot off"></div><div style="flex:1"><div class="friend-name">${f.name}</div><div class="friend-status">${f.status}</div></div></div>`).join('')}`;
  }

  // Server wizard
  const nav = document.getElementById('srv-nav-container');
  if (nav) {
    nav.innerHTML = [['server','1','Basic Info'],['box','2','Game Settings'],['puzzle','3','Mods & Plugins'],['cloud','4','Deploy']].map(([ic,n,label])=>`
      <div class="srv-step-nav" id="srv-nav-${n}" onclick="goSrvStep(${n})" style="display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:8px;cursor:pointer;transition:all 0.12s;${n==='1'?'background:var(--s3);color:var(--t1);':'color:var(--t3);'}">
        <div id="srv-num-${n}" style="width:20px;height:20px;border-radius:50%;background:${n==='1'?'var(--t2)':'var(--s4)'};border:1px solid ${n==='1'?'var(--b4)':'var(--b2)'};display:flex;align-items:center;justify-content:center;font-size:10px;font-family:var(--mono);color:${n==='1'?'#000':'var(--t4)'};flex-shrink:0;font-weight:700;">${n}</div>
        <span style="font-size:12px;font-weight:600;font-family:var(--sans);">${label}</span>
      </div>`).join('');
  }

  const rulesEl = document.getElementById('srv-rules');
  if (rulesEl) {
    rulesEl.innerHTML = [['PvP enabled',true],['Online mode (auth)',true],['Whitelist',false],['Command blocks',false],['Flight allowed',false]].map(([label,on])=>`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid var(--b1);" class="info-row">
        <span style="font-size:12px;font-family:var(--mono);color:var(--t2);">${label}</span>
        <div class="check-box ${on?'on':''}" onclick="toggleCheck(this)">${on?'<i data-lucide="check" width="10" height="10" style="color:#000"></i>':''}</div>
      </div>`).join('');
  }

  const sigGrid = document.getElementById('srv-icon-grid');
  if (sigGrid) sigGrid.innerHTML = [['castle','castle'],['sword','sword'],['globe','globe'],['flame','flame'],['waves','waves'],['settings','settings'],['sparkles','sparkles'],['leaf','leaf'],['mountain','mountain'],['gem','gem']].map(([ic,name],i)=>`<div class="icon-cell${i===0?' sel':''}" onclick="selectSrvIcon(this,'${name}')"><i data-lucide="${ic}" width="16" height="16" style="pointer-events:none;color:var(--t2)"></i></div>`).join('');
  lucide.createIcons();

  const spl = document.getElementById('srv-plugins-list');
  if (spl) {
    spl.innerHTML = [['Ã¯Â¿Â½Y"Ã¯Â¿Â½','EssentialsX','Core commands','Plugin','3.2M'],['Ã¯Â¿Â½YOÃ¯Â¿Â½','WorldEdit','In-game editor','Plugin','8.1M'],['Ã¯Â¿Â½Y>Ã¯Â¿Â½Ã¯Â¸Â','LuckPerms','Permissions','Plugin','5.4M'],['Ã¯Â¿Â½sÃ¯Â¿Â½','Spark','Performance profiler','Mod','1.8M']].map(([e,n,d,type,dl],i)=>`
      <div style="display:flex;align-items:center;gap:10px;padding:9px 11px;background:var(--s2);border:1px solid var(--b2);border-radius:8px;margin-bottom:5px;">
        <div style="font-size:20px;">${e}</div>
        <div style="flex:1;"><div style="font-size:12.5px;font-weight:700;color:var(--t1);">${n}</div><div style="font-size:10px;font-family:var(--mono);color:var(--t4);margin-top:1px;">${d} Â· <span style="color:var(--t3)">${dl} ï¿½?"</span></div></div>
        <span style="font-size:9.5px;font-family:var(--mono);padding:2px 7px;background:var(--s3);border:1px solid var(--b2);border-radius:4px;color:var(--t4);">${type}</span>
        <button class="srv-add-btn" id="srv-add-${i}" onclick="toggleSrvAdd(this,'${n}')" style="height:26px;padding:0 10px;border-radius:6px;border:1px solid var(--b2);background:var(--s3);font-size:10.5px;font-family:var(--mono);color:var(--t2);cursor:pointer;transition:all 0.12s;flex-shrink:0;">+ Add</button>
      </div>`).join('');
  }

  const hostOpts = document.getElementById('srv-host-opts');
  if (hostOpts) {
    hostOpts.innerHTML = [['Ã¯Â¿Â½Y-Ã¯Â¿Â½Ã¯Â¸Â','This Computer','Run locally Ã¯Â¿Â½?" free','local'],['Ã¯Â¿Â½~Ã¯Â¿Â½Ã¯Â¸Â','Orbiq Cloud','Managed hosting Ã¯Â¿Â½?" from $3/mo','cloud'],['Ã¯Â¿Â½YÃ¯Â¿Â½Ã¯Â¿Â½','Docker','Self-host with Docker','docker']].map(([e,n,d,val],i)=>`
      <div class="srv-host-card${i===0?' selected':''}" data-val="${val}" onclick="selectSrvHost(this)" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:${i===0?'var(--s3)':'var(--s2)'};border:1px solid ${i===0?'var(--b4)':'var(--b2)'};border-radius:9px;cursor:pointer;transition:all 0.12s;">
        <div style="font-size:22px;">${e}</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--t1);">${n}</div><div style="font-size:10.5px;font-family:var(--mono);color:var(--t4);margin-top:2px;">${d}</div></div>
        <div class="srv-radio" style="width:14px;height:14px;border-radius:50%;border:2px solid ${i===0?'var(--t2)':'var(--b3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i===0?'<div style="width:6px;height:6px;border-radius:50%;background:var(--t2);"></div>':''}</div>
      </div>`).join('');
  }

  const psl = document.getElementById('prev-steps-list');
  if (psl) {
    psl.innerHTML = ['Basic Info','Game Settings','Mods & Plugins','Deploy'].map((s,i)=>`
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;" id="prev-step-${i+1}">
        <div style="width:14px;height:14px;border-radius:50%;border:1px solid var(--b3);background:${i===0?'var(--t2)':'var(--s3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          ${i===0?'<i data-lucide="check" width="8" height="8" style="color:#000"></i>':''}
        </div>
        <span style="font-size:11px;font-family:var(--mono);color:${i===0?'var(--t2)':'var(--t4)'};">${s}</span>
      </div>`).join('');
  }
}

lucide.createIcons();
buildDynamicSections();
initWindowControls();
initTitlebarDrag();
initSelectContextMenus();
loadOrbiqAccountState();
bootstrapBackendState();
installMojibakeSanitizer();
sanitizeMojibakeDom(document);
lucide.createIcons();

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// PAGE SWITCHING
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function setPage(pageId, clickedItem) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + pageId);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('active'));
  if (clickedItem) clickedItem.classList.add('active');
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// MODAL LOGIC
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
const overlay  = document.getElementById('overlay');
const modalPop = document.getElementById('modal-popup');

function openModal(id) {
  const fn = MODALS[id];
  if (!fn) return;
  modalPop.innerHTML = fn();
  if (id === 'edit-instance') {
    populateEditInstanceModal();
  } else if (id === 'add-instance') {
    void hydrateAddInstanceModal();
  } else if (id === 'delete-confirm') {
    hydrateDeleteConfirmModal();
  } else if (id === 'profile-select-launch') {
    hydrateLaunchProfileModal();
  } else if (id === 'orbiq-accounts') {
    void hydrateOrbiqAccountsModal();
  } else if (id === 'orbiq-login') {
    hydrateOrbiqLoginModal();
  } else if (id === 'orbiq-register') {
    hydrateOrbiqRegisterModal();
  } else if (id === 'orbiq-register-success') {
    hydrateOrbiqRegisterSuccessModal();
  } else if (id === 'ms-linked-detail') {
    hydrateMicrosoftDetailModal();
  } else if (id === 'offline-profile-detail') {
    hydrateOfflineDetailModal();
  }
  overlay.style.display = 'flex';
  overlay.classList.remove('closing');
  sanitizeMojibakeDom(modalPop);
  lucide.createIcons();
}

async function hydrateAddInstanceModal() {
  const loaderSelect = document.getElementById('add-inst-loader');
  const versionSelect = document.getElementById('add-inst-version');
  const loaderVersionSelect = document.getElementById('add-inst-loader-version');
  const nameInput = document.getElementById('add-inst-name');
  if (!versionSelect || !loaderSelect || !loaderVersionSelect) return;

  if (nameInput) {
    const current = String(nameInput.value || '').trim();
    if (!current || /^my instance(?:\s+\d+)?$/i.test(current)) {
      nameInput.value = suggestNextInstanceName('My Instance');
    }
  }

  const applyVersionOptions = (versions, preferredValue) => {
    const finalVersions = Array.isArray(versions) ? versions : [];
    if (!finalVersions.length) {
      versionSelect.innerHTML = '<option value="">No versions available</option>';
      versionSelect.value = '';
      versionSelect.disabled = true;
      return;
    }
    versionSelect.innerHTML = finalVersions
      .map((version) => `<option>${escapeHtml(version)}</option>`)
      .join('');

    const preferred = String(preferredValue || '').trim();
    if (preferred && finalVersions.includes(preferred)) {
      versionSelect.value = preferred;
    } else if (finalVersions.length) {
      versionSelect.value = finalVersions[0];
    }
    versionSelect.disabled = false;
  };

  const applyLoaderVersionOptions = (loaderLabel, versions, preferredValue) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    if (normalizedLoader === 'vanilla') {
      loaderVersionSelect.innerHTML = '<option value="">Not required for Vanilla</option>';
      loaderVersionSelect.value = '';
      loaderVersionSelect.disabled = true;
      return;
    }

    const finalVersions = Array.isArray(versions) ? versions : [];
    loaderVersionSelect.innerHTML = '<option value="">Auto (latest)</option>' + finalVersions
      .map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
      .join('');

    const preferred = String(preferredValue || '').trim();
    if (preferred && finalVersions.includes(preferred)) {
      loaderVersionSelect.value = preferred;
    } else {
      loaderVersionSelect.value = '';
    }
    loaderVersionSelect.disabled = false;
  };

  const fetchLoaderVersions = async (loaderLabel, gameVersion, preferredLoaderVersion) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    const selectedGameVersion = String(gameVersion || '').trim();
    if (normalizedLoader === 'vanilla') {
      applyLoaderVersionOptions(loaderLabel, [], '');
      return;
    }
    if (!selectedGameVersion || /^loading versions/i.test(selectedGameVersion)) {
      loaderVersionSelect.disabled = true;
      loaderVersionSelect.innerHTML = '<option value="">Loading loader versions...</option>';
      return;
    }

    const cacheKey = (normalizedLoader || 'vanilla') + '|' + selectedGameVersion;
    if (ADD_INSTANCE_LOADER_VERSION_CACHE.has(cacheKey)) {
      applyLoaderVersionOptions(
        loaderLabel,
        ADD_INSTANCE_LOADER_VERSION_CACHE.get(cacheKey) || [],
        preferredLoaderVersion
      );
      return;
    }

    loaderVersionSelect.disabled = true;
    loaderVersionSelect.innerHTML = '<option value="">Loading loader versions...</option>';
    const res = await invokeBackend('list_loader_versions', {
      loader: normalizedLoader,
      gameVersion: selectedGameVersion,
      limit: 300,
    });
    const versions = res.ok && Array.isArray(res.data)
      ? res.data.map((item) => String(item || '').trim()).filter((item) => item.length > 0)
      : [];
    const unique = Array.from(new Set(versions));
    ADD_INSTANCE_LOADER_VERSION_CACHE.set(cacheKey, unique);
    applyLoaderVersionOptions(loaderLabel, unique, preferredLoaderVersion);
  };

  const fetchVersionsForLoader = async (
    loaderLabel,
    preferredMinecraftVersion,
    preferredLoaderVersion
  ) => {
    const normalizedLoader = normalizeLoader(loaderLabel);
    const cacheKey = normalizedLoader || 'vanilla';
    if (ADD_INSTANCE_VERSION_CACHE.has(cacheKey)) {
      const cachedVersions = ADD_INSTANCE_VERSION_CACHE.get(cacheKey) || [];
      applyVersionOptions(cachedVersions, preferredMinecraftVersion);
      await fetchLoaderVersions(loaderLabel, versionSelect.value, preferredLoaderVersion);
      return;
    }

    versionSelect.disabled = true;
    versionSelect.innerHTML = '<option>Loading versions...</option>';

    const res = await invokeBackend('list_loader_supported_versions', {
      loader: normalizedLoader,
      includeSnapshots: false,
      limit: 300,
    });
    const versions = res.ok && Array.isArray(res.data)
      ? res.data.map((item) => String(item || '').trim()).filter((item) => item.length > 0)
      : [];
    const unique = Array.from(new Set(versions));
    ADD_INSTANCE_VERSION_CACHE.set(cacheKey, unique);
    applyVersionOptions(unique, preferredMinecraftVersion);
    await fetchLoaderVersions(loaderLabel, versionSelect.value, preferredLoaderVersion);
  };

  loaderSelect.addEventListener('change', () => {
    const preferredMinecraftVersion = versionSelect.value;
    const preferredLoaderVersion = loaderVersionSelect.value;
    void fetchVersionsForLoader(
      loaderSelect.value,
      preferredMinecraftVersion,
      preferredLoaderVersion
    );
  });

  versionSelect.addEventListener('change', () => {
    void fetchLoaderVersions(loaderSelect.value, versionSelect.value, loaderVersionSelect.value);
  });

  void fetchVersionsForLoader(
    loaderSelect.value,
    versionSelect.value,
    loaderVersionSelect.value
  );
}

function collectExistingInstanceNames() {
  const names = new Set();
  document.querySelectorAll('.instance-card').forEach((card) => {
    const value = String(card.dataset && card.dataset.name ? card.dataset.name : '').trim();
    if (value) names.add(value.toLowerCase());
  });
  if (typeof INSTANCE_DATA === 'object' && INSTANCE_DATA) {
    Object.keys(INSTANCE_DATA).forEach((name) => {
      const value = String(name || '').trim();
      if (value) names.add(value.toLowerCase());
    });
  }
  return names;
}

function suggestNextInstanceName(baseName) {
  const base = String(baseName || 'My Instance').trim() || 'My Instance';
  const used = collectExistingInstanceNames();
  if (!used.has(base.toLowerCase())) return base;
  let index = 2;
  while (index < 1000) {
    const candidate = `${base} ${index}`;
    if (!used.has(candidate.toLowerCase())) return candidate;
    index += 1;
  }
  return `${base} ${Date.now()}`;
}

function closeModal() {
  if (MICROSOFT_AUTH_POLL) {
    clearInterval(MICROSOFT_AUTH_POLL);
    MICROSOFT_AUTH_POLL = null;
  }
  overlay.classList.add('closing');
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
    overlay.classList.remove('closing');
  }, { once: true });
}

function handleOverlayClick(e) {
  if (e.target === overlay) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.style.display !== 'none') closeModal();
});

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// TOAST SYSTEM
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½

async function createInstanceFromModal() {
  const nameEl = document.getElementById('add-inst-name');
  const versionEl = document.getElementById('add-inst-version');
  const loaderEl = document.getElementById('add-inst-loader');
  const loaderVersionEl = document.getElementById('add-inst-loader-version');
  const name = nameEl ? nameEl.value.trim() : '';
  const version = versionEl ? versionEl.value.trim() : '1.21.4';
  const loader = loaderEl ? loaderEl.value.trim() : 'Vanilla';
  const loaderVersionRaw = loaderVersionEl ? loaderVersionEl.value : '';
  const loaderVersion = String(loaderVersionRaw || '').trim();
  const normalizedLoader = normalizeLoader(loader);

  if (!name) {
    showToast('!', 'Missing name', 'Instance name is required');
    return;
  }
  if (!version || /^loading versions/i.test(version)) {
    showToast('!', 'Please wait', 'Version list is still loading');
    return;
  }
  if (
    versionEl &&
    versionEl.disabled &&
    versionEl.options &&
    versionEl.options.length > 0 &&
    /^no versions/i.test(String(versionEl.options[0].text || ''))
  ) {
    showToast('!', 'No versions', 'No Minecraft versions returned from API');
    return;
  }
  if (
    normalizedLoader !== 'vanilla' &&
    loaderVersionEl &&
    loaderVersionEl.disabled &&
    loaderVersionEl.options &&
    loaderVersionEl.options.length > 0 &&
    /^loading/i.test(String(loaderVersionEl.options[0].text || ''))
  ) {
    showToast('!', 'Please wait', 'Loader version list is still loading');
    return;
  }

  const request = { name, version, loader, loaderVersion: normalizedLoader === 'vanilla' ? null : (loaderVersion || null) };
  const res = await invokeBackend('create_instance', { request });
  if (!res.ok) {
    const reason = String(res.error || '').trim();
    if (/already exists/i.test(reason)) {
      const suggested = suggestNextInstanceName(name);
      if (nameEl) {
        nameEl.value = suggested;
        nameEl.focus();
        nameEl.select();
      }
      showToast('!', 'Name exists', 'Try: ' + suggested);
      return;
    }
    showToast('!', 'Create failed', reason || 'Backend rejected this instance');
    return;
  }

  closeModal();
  await refreshInstancesFromBackend(false);
  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const createdCard = cards.find((card) => card.dataset.name === name);
  if (createdCard) selectCard(createdCard);
  showToast('OK', 'Instance created', 'New instance added successfully');
}

async function duplicateSelectedInstanceFromModal() {
  const sourceName = getSelectedInstanceName();
  if (!sourceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const nameEl = document.getElementById('duplicate-inst-name');
  const newName = nameEl ? nameEl.value.trim() : '';
  if (!newName) {
    showToast('!', 'Missing name', 'Duplicate name is required');
    return;
  }

  const res = await invokeBackend('duplicate_instance', {
    request: {
      sourceName,
      newName,
    },
  });
  if (!res.ok) {
    showToast('!', 'Duplicate failed', 'Could not duplicate this instance');
    return;
  }

  closeModal();
  const refreshed = await refreshInstancesFromBackend(false);
  if (!refreshed) {
    showToast('!', 'Refresh failed', 'Instance was duplicated but list refresh failed');
    return;
  }
  selectInstanceByName(newName);
  showToast('OK', 'Duplicated', newName + ' created');
}

async function openSelectedInstanceFolder(target) {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }

  const res = await invokeBackend('open_instance_directory', {
    request: {
      instanceName,
      target: target || 'root',
      ensureExists: true,
    },
  });

  if (!res.ok) {
    showToast('!', 'Open folder failed', 'Could not open instance folder');
    return;
  }
}

async function copyShareLinkFromModal() {
  const valueEl = document.getElementById('share-link-value');
  const value = valueEl ? valueEl.textContent.trim() : '';
  if (!value) {
    showToast('!', 'Share link', 'Could not resolve share link');
    return;
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(value);
      showToast('OK', 'Copied', 'Share link copied to clipboard');
      return;
    } catch (err) {
      console.warn('[share-link] clipboard write failed', err);
    }
  }

  showToast('!', 'Clipboard unavailable', value);
}

async function createOfflineProfileFromModal() {
  const nameEl = document.getElementById('offline-username');
  const name = nameEl ? nameEl.value.trim() : '';
  if (!name) {
    showToast('!', 'Missing username', 'Please enter an offline username');
    return;
  }

  const res = await invokeBackend('create_offline_profile', {
    request: {
      name,
      setActive: false,
    },
  });
  if (!res.ok) {
    showToast('!', 'Create failed', 'Could not add this offline profile');
    return;
  }

  await refreshProfilesFromBackend();
  closeModal();
  showToast('OK', 'Profile added', name + ' is ready');
}

async function startMicrosoftLoginFlow() {
  const startRes = await invokeBackend('start_microsoft_device_code_login', {
    request: {},
  });
  if (!startRes.ok || !startRes.data) {
    showToast('!', 'Login failed', formatBackendError(startRes.error, 'Could not start Microsoft login flow'));
    return;
  }

  const info = startRes.data;
  const statusEl = document.getElementById('ms-device-status');
  if (statusEl) {
    statusEl.textContent = 'Enter code ' + info.userCode + ' and approve sign-in in your browser.';
  }

  const verificationUrl = info.verificationUriComplete || info.verificationUri;
  if (verificationUrl && typeof window.open === 'function') {
    window.open(verificationUrl, '_blank');
  }

  showToast('MS', 'Browser opened', 'Code: ' + info.userCode);

  if (MICROSOFT_AUTH_POLL) {
    clearInterval(MICROSOFT_AUTH_POLL);
    MICROSOFT_AUTH_POLL = null;
  }

  const pollOnce = async () => {
    const pollRes = await invokeBackend('poll_microsoft_device_code_login', {
      request: { sessionId: info.sessionId },
    });
    if (!pollRes.ok || !pollRes.data) {
      const reason = formatBackendError(pollRes.error, 'Login failed. Please try again.');
      if (statusEl) statusEl.textContent = reason;
      showToast('!', 'Login failed', reason);
      if (MICROSOFT_AUTH_POLL) {
        clearInterval(MICROSOFT_AUTH_POLL);
        MICROSOFT_AUTH_POLL = null;
      }
      return;
    }

    const payload = pollRes.data;
    const status = String(payload.status || '').toLowerCase();
    if (status === 'pending') {
      if (statusEl) statusEl.textContent = 'Waiting for Microsoft authorization...';
      return;
    }

    if (MICROSOFT_AUTH_POLL) {
      clearInterval(MICROSOFT_AUTH_POLL);
      MICROSOFT_AUTH_POLL = null;
    }

    if (status === 'authorized') {
      await refreshProfilesFromBackend();
      const orbiqAccount = getOrbiqAccountState();
      if (orbiqAccount) {
        orbiqAccount.microsoftLinked = true;
        persistOrbiqAccountState(orbiqAccount);
      }
      closeModal();
      const profileName = payload.profile && payload.profile.name ? payload.profile.name : 'Microsoft profile';
      showToast('OK', 'Account linked', profileName + ' connected successfully');
      return;
    }

    const reason = payload.reason ? String(payload.reason) : 'Authorization was not completed.';
    if (statusEl) statusEl.textContent = reason;
    showToast('!', 'Login stopped', reason);
  };

  await pollOnce();
  const intervalSeconds = Math.max(3, Number(info.intervalSeconds || 5));
  MICROSOFT_AUTH_POLL = setInterval(() => {
    void pollOnce();
  }, intervalSeconds * 1000);
}

function showToast(icon, title, msg) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  const normalizedIcon = normalizeMojibakeText(String(icon || '')).trim();
  const iconToken = /^[A-Za-z0-9+*!?.-]{1,3}$/.test(normalizedIcon) ? normalizedIcon : '';
  const safeIcon = escapeHtml(iconToken || '*');
  const safeTitle = escapeHtml(normalizeMojibakeText(String(title || '')));
  const safeMsg = escapeHtml(normalizeMojibakeText(String(msg || '')));
  t.className = 'toast';
  t.innerHTML = `<span style="font-size:16px">${safeIcon}</span><div><div style="font-size:11.5px;font-weight:700;color:var(--t1);margin-bottom:1px">${safeTitle}</div><div style="font-size:10.5px;color:var(--t3)">${safeMsg}</div></div>`;
  c.appendChild(t);
  sanitizeMojibakeDom(t);
  setTimeout(() => {
    t.classList.add('removing');
    t.addEventListener('animationend', () => t.remove(), {once:true});
  }, 3200);
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// LAUNCH SEQUENCE
// Bug fix: launchSequence now opens profile picker first.
// doLaunchSequence was missing `const fill` declaration Ã¯Â¿Â½?" fixed.
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
async function launchSequence() {
  await refreshProfilesFromBackend();
  openModal('profile-select-launch');
}

function openProvisionOverlay(instanceName, subtitle) {
  if (ACTIVE_PROVISION && ACTIVE_PROVISION.overlay) {
    ACTIVE_PROVISION.overlay.remove();
  }

  const ol = document.createElement('div');
  ol.className = 'launch-overlay';
  ol.innerHTML = `
    <div class="launch-icon" style="width:80px;height:80px;background:var(--s2);border:1px solid var(--b3);border-radius:18px;display:flex;align-items:center;justify-content:center;"><i data-lucide="download" width="40" height="40" style="color:var(--t2)"></i></div>
    <div class="launch-name">${instanceName}</div>
    <div class="launch-sub">${subtitle}</div>
    <div class="launch-prog"><div class="launch-prog-fill" id="pv-fill"></div></div>
    <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:4px" id="pv-label">Preparing runtime...</div>
    <button onclick="dismissProvisionOverlay(this)" style="margin-top:18px;background:transparent;border:1px solid var(--b3);border-radius:7px;padding:6px 16px;font-size:11px;font-family:var(--mono);color:var(--t3);cursor:pointer">Hide</button>
  `;
  document.body.appendChild(ol);
  lucide.createIcons();

  ACTIVE_PROVISION = {
    instanceName,
    overlay: ol,
    fill: ol.querySelector('#pv-fill'),
    label: ol.querySelector('#pv-label'),
    percent: 0,
    lastLifecycleState: null,
    lastLifecyclePayload: null,
  };

  setLaunchOverlayProgress(6, 'Preparing runtime...', true);
}
function dismissProvisionOverlay(btn) {
  const overlay = btn.closest('.launch-overlay');
  if (!overlay) return;
  if (ACTIVE_PROVISION && ACTIVE_PROVISION.overlay === overlay) {
    ACTIVE_PROVISION = null;
  }
  overlay.remove();
}

function finishProvisionOverlay(icon, title, message) {
  if (!ACTIVE_PROVISION || !ACTIVE_PROVISION.overlay) return;
  const overlay = ACTIVE_PROVISION.overlay;
  if (ACTIVE_PROVISION.fill) ACTIVE_PROVISION.fill.style.width = '100%';
  if (ACTIVE_PROVISION.label) ACTIVE_PROVISION.label.textContent = message;
  setTimeout(() => {
    overlay.classList.add('hiding');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
    ACTIVE_PROVISION = null;
    showToast(icon, title, message);
  }, 350);
}

function failProvisionOverlay(message, title) {
  if (!ACTIVE_PROVISION || !ACTIVE_PROVISION.overlay) return;
  setLaunchOverlayProgress(100, message, true);
  showToast('!', title || 'Launch failed', message);
  setTimeout(() => {
    if (ACTIVE_PROVISION && ACTIVE_PROVISION.overlay) {
      ACTIVE_PROVISION.overlay.classList.add('hiding');
      ACTIVE_PROVISION.overlay.addEventListener('animationend', () => ACTIVE_PROVISION && ACTIVE_PROVISION.overlay && ACTIVE_PROVISION.overlay.remove(), { once: true });
      ACTIVE_PROVISION = null;
    }
  }, 900);
}

function findInstanceRecordByName(rows, instanceName) {
  if (!Array.isArray(rows)) return null;
  const target = String(instanceName || '').trim().toLowerCase();
  if (!target) return null;
  return rows.find((item) => String(item && item.name ? item.name : '').trim().toLowerCase() === target) || null;
}

function formatLaunchExitMessage(instanceRow) {
  if (!instanceRow || typeof instanceRow !== 'object') {
    return 'Minecraft process exited during startup';
  }
  if (instanceRow.lastExitReason) return String(instanceRow.lastExitReason);
  if (typeof instanceRow.lastExitCode === 'number') {
    return 'Minecraft exited with code ' + instanceRow.lastExitCode;
  }
  if (instanceRow.lastExitState) {
    return 'Minecraft stopped: ' + String(instanceRow.lastExitState);
  }
  return 'Minecraft process exited during startup';
}

async function waitForLaunchStartup(instanceName) {
  let stableRunningCount = 0;
  const deadline = Date.now() + LAUNCH_STARTUP_TIMEOUT_MS;

  while (Date.now() < deadline) {
    if (!ACTIVE_PROVISION || ACTIVE_PROVISION.instanceName !== instanceName) {
      return { ok: false, error: 'Launch was canceled' };
    }

    if (ACTIVE_PROVISION.lastLifecycleState === 'failed') {
      return {
        ok: false,
        error: lifecycleFailureMessage(ACTIVE_PROVISION.lastLifecyclePayload),
      };
    }

    const listRes = await invokeBackend('list_instances');
    if (!listRes.ok || !Array.isArray(listRes.data)) {
      setLaunchOverlayProgress(96, 'Checking process state...', false);
      await sleepMs(LAUNCH_STARTUP_POLL_MS);
      continue;
    }

    const instanceRow = findInstanceRecordByName(listRes.data, instanceName);
    if (!instanceRow) {
      return { ok: false, error: 'Instance not found after launch' };
    }

    if (instanceRow.running) {
      stableRunningCount += 1;
      setLaunchOverlayProgress(
        96 + Math.min(4, stableRunningCount),
        stableRunningCount >= LAUNCH_STABLE_POLLS
          ? 'Minecraft is running'
          : 'Waiting for Minecraft window...',
        false
      );
      if (stableRunningCount >= LAUNCH_STABLE_POLLS) {
        return { ok: true };
      }
    } else {
      stableRunningCount = 0;
      if (instanceRow.lastExitState || instanceRow.lastExitReason || typeof instanceRow.lastExitCode === 'number') {
        return { ok: false, error: formatLaunchExitMessage(instanceRow) };
      }
      setLaunchOverlayProgress(95, 'Process started. Waiting for state...', false);
    }

    await sleepMs(LAUNCH_STARTUP_POLL_MS);
  }

  return { ok: false, error: 'Timed out while waiting for Minecraft to start' };
}
async function doLaunchSequence() {
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  const profileName = getSelectedLaunchProfileName();
  const profileId = getSelectedLaunchProfileId();
  const details = INSTANCE_DATA[instanceName];
  if (!details) {
    showToast('!', 'Missing instance', 'Please select a valid instance first');
    return;
  }

  openProvisionOverlay(instanceName, details.sub);
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  setLaunchOverlayProgress(8, 'Provisioning runtime files...', false);
  const provisionRes = await invokeBackend('provision_instance', {
    request: {
      instanceName,
      version: details.version,
      profileId,
      profileName,
      forceRedownload: false,
      maxConcurrency: 4,
    },
  });
  if (!provisionRes.ok) {
    failProvisionOverlay(String(provisionRes.error || 'Provision command failed'), 'Provision failed');
    return;
  }

  setLaunchOverlayProgress(91, 'Provision complete. Launching Minecraft...', false);
  await refreshInstancesFromBackend(true);
  const launchRequest = {
    instanceName,
    profileName,
    executable: '',
    args: null,
    workingDir: '',
  };
  const launchRes = await invokeBackend('launch_instance', { request: launchRequest });
  if (!launchRes.ok) {
    failProvisionOverlay(String(launchRes.error || 'Launch command failed'), 'Launch failed');
    await refreshInstancesFromBackend(true);
    return;
  }

  setLaunchOverlayProgress(95, 'Process created. Verifying startup...', false);
  const startupOutcome = await waitForLaunchStartup(instanceName);
  if (!startupOutcome.ok) {
    failProvisionOverlay(startupOutcome.error || 'Minecraft failed to start', 'Launch failed');
    await refreshInstancesFromBackend(true);
    return;
  }

  finishProvisionOverlay('OK', 'Game launched', instanceName + ' is now running');
  await refreshInstancesFromBackend(true);
}
function cancelLaunch(btn) {
  const ol = btn.closest('.launch-overlay');
  clearInterval(ol._interval);
  ol.classList.add('hiding');
  ol.addEventListener('animationend', () => ol.remove(), {once:true});
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// PROFILE SELECT
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function selectLaunchProfile(el) {
  document.querySelectorAll('.profile-select-item').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// OFFLINE UUID GENERATOR
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function updateOfflineUUID(name) {
  const el = document.getElementById('offline-uuid-preview');
  if (!el) return;
  if (!name) { el.textContent = 'Ã¯Â¿Â½?" enter a username Ã¯Â¿Â½?"'; return; }
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (Math.imul(31, hash) + name.charCodeAt(i)) | 0;
  const hex = Math.abs(hash).toString(16).padStart(8,'0');
  el.textContent = `OfflinePlayer:${name} Ã¯Â¿Â½?' ${hex}-xxxx-3xxx-yxxx-xxxxxxxxxxxx`;
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// CONTEXT MENU
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
const ctxMenu = document.getElementById('ctx-menu');
let activeSelectMenu = null;

function showCtxMenu(e, target) {
  e.preventDefault();
  e.stopPropagation();
  activeSelectMenu = null;
  ctxMenu.classList.remove('select-menu');
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  ctxMenu.style.minWidth = '170px';

  let selected = false;
  if (target && typeof target === 'object' && target.classList && target.classList.contains('instance-card')) {
    selectCard(target);
    selected = true;
  } else {
    const cardFromEvent = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('.instance-card')
      : null;
    if (cardFromEvent) {
      selectCard(cardFromEvent);
      selected = true;
    } else if (typeof target === 'string' && target.trim()) {
      selected = selectInstanceByName(target);
    }
  }

  if (!selected && !getSelectedInstanceName()) return;

  ctxMenu.innerHTML = `
    <div class="ctx-item" onclick="hideCtx();launchSequence()"><i data-lucide="play" width="12" height="12"></i>Launch</div>
    <div class="ctx-item" onclick="hideCtx();openModal('edit-instance')"><i data-lucide="pencil" width="12" height="12"></i>Edit</div>
    <div class="ctx-item" onclick="hideCtx();openSelectedInstanceFolder('root')"><i data-lucide="folder-open" width="12" height="12"></i>Open Folder</div>
    <div class="ctx-item" onclick="hideCtx();openModal('manage-mods')"><i data-lucide="puzzle" width="12" height="12"></i>Mods</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();openModal('duplicate')"><i data-lucide="copy" width="12" height="12"></i>Duplicate</div>
    <div class="ctx-item" onclick="hideCtx();openModal('export')"><i data-lucide="package-open" width="12" height="12"></i>Export</div>
    <div class="ctx-item" onclick="hideCtx();openModal('share-link')"><i data-lucide="share-2" width="12" height="12"></i>Share Link</div>
    <div class="ctx-item" onclick="hideCtx();openModal('banner-picker')"><i data-lucide="image" width="12" height="12"></i>Set Banner</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item" onclick="hideCtx();openModal('move-group')"><i data-lucide="folder-input" width="12" height="12"></i>Move to Group</div>
    <div class="ctx-item" onclick="hideCtx();openModal('server-connect')"><i data-lucide="plug" width="12" height="12"></i>Connect to Server</div>
    <div class="ctx-item" onclick="hideCtx();openModal('notes')"><i data-lucide="notebook-pen" width="12" height="12"></i>Notes</div>
    <div class="ctx-item" onclick="hideCtx();openModal('backup')"><i data-lucide="archive" width="12" height="12"></i>Backup</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger" onclick="hideCtx();openModal('delete-confirm')"><i data-lucide="trash-2" width="12" height="12"></i>Delete</div>
  `;
  ctxMenu.style.display = 'block';
  const x = Math.min(e.clientX, window.innerWidth - 185);
  const y = Math.min(e.clientY, window.innerHeight - ctxMenu.scrollHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top  = y + 'px';
  lucide.createIcons();
  setTimeout(() => document.addEventListener('click', hideCtx, {once:true}), 0);
}

function showSelectContextMenu(e, selectEl) {
  if (!selectEl || selectEl.disabled) return;
  e.preventDefault();
  e.stopPropagation();
  activeSelectMenu = selectEl;

  const options = Array.from(selectEl.options || []);
  if (options.length === 0) return;

  const groupedItems = [];
  let previousGroup = '';
  options.forEach((option, index) => {
    const rawLabel = String(option.textContent || option.label || option.value || '').trim();
    const groupMatch = rawLabel.match(/^(\d+)\.(\d+)(?:\.\d+)?$/);
    const currentGroup = groupMatch ? `${groupMatch[1]}.${groupMatch[2]}` : '';
    if (currentGroup && previousGroup && currentGroup !== previousGroup) {
      groupedItems.push('<div class="ctx-sep"></div>');
    }
    if (currentGroup) previousGroup = currentGroup;

    const selected = index === selectEl.selectedIndex ? ' selected' : '';
    const disabled = option.disabled ? ' disabled' : '';
    const label = escapeHtml(rawLabel);
    groupedItems.push(`<div class="ctx-item${selected}${disabled}" data-option-index="${index}" onclick="pickSelectMenuOption(${index})">${label}</div>`);
  });
  ctxMenu.innerHTML = groupedItems.join('');

  const rect = selectEl.getBoundingClientRect();
  ctxMenu.classList.add('select-menu');
  ctxMenu.style.display = 'block';
  ctxMenu.style.minWidth = Math.max(170, Math.floor(rect.width)) + 'px';
  const maxHeight = Math.max(180, window.innerHeight - 24);
  ctxMenu.style.maxHeight = maxHeight + 'px';
  ctxMenu.style.overflowY = 'auto';
  ctxMenu.style.overflowX = 'hidden';

  const menuHeight = Math.min(ctxMenu.scrollHeight, maxHeight);
  const x = Math.min(Math.max(8, Math.floor(rect.left)), window.innerWidth - Math.max(170, Math.floor(rect.width)) - 8);
  const y = Math.min(Math.floor(rect.bottom + 4), window.innerHeight - menuHeight - 8);
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  const selectedItem = ctxMenu.querySelector('.ctx-item.selected');
  if (selectedItem && typeof selectedItem.scrollIntoView === 'function') {
    selectedItem.scrollIntoView({ block: 'nearest' });
  }

  setTimeout(() => document.addEventListener('click', hideCtx, { once: true }), 0);
}

function pickSelectMenuOption(index) {
  if (!activeSelectMenu) return;
  const selectEl = activeSelectMenu;
  const option = selectEl.options && selectEl.options[index];
  if (!option || option.disabled) return;
  selectEl.selectedIndex = index;
  selectEl.dispatchEvent(new Event('input', { bubbles: true }));
  selectEl.dispatchEvent(new Event('change', { bubbles: true }));
  hideCtx();
}

function initSelectContextMenus() {
  document.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    const target = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('select')
      : null;
    if (!target) return;
    if (target.multiple || Number(target.size || 0) > 1) return;
    // Block the browser's native select popup so only custom ctx menu is shown.
    e.preventDefault();
  }, true);

  document.addEventListener('click', (e) => {
    if (e.button !== 0) return;
    const target = e.target && typeof e.target.closest === 'function'
      ? e.target.closest('select')
      : null;
    if (!target) return;
    if (target.multiple || Number(target.size || 0) > 1) return;
    showSelectContextMenu(e, target);
  }, true);
}

function hideCtx() {
  ctxMenu.style.display = 'none';
  ctxMenu.classList.remove('select-menu');
  ctxMenu.style.minWidth = '170px';
  ctxMenu.style.maxHeight = '';
  ctxMenu.style.overflowY = '';
  ctxMenu.style.overflowX = '';
  ctxMenu.scrollTop = 0;
  activeSelectMenu = null;
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// RUNNING STATE
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
let sessionSeconds = 720;
setInterval(() => {
  sessionSeconds++;
  const m = Math.floor(sessionSeconds / 60);
  const s = sessionSeconds % 60;
  const txt = m >= 60 ? `${Math.floor(m/60)}h ${m%60}m` : `${m}m ${String(s).padStart(2,'0')}s`;
  const el = document.getElementById('detail-session');
  if (el) el.textContent = `Session: ${txt}`;
  const cl = document.getElementById('card-playtime-live');
  if (cl) cl.textContent = m + 'm';
}, 1000);

function killInstance() {
  closeModal();
  const instanceName = getSelectedInstanceName();
  if (!instanceName) {
    showToast('!', 'Missing instance', 'Please select an instance first');
    return;
  }
  void invokeBackend('kill_instance', { request: { instanceName } });
  showToast('STOP','Game stopped', instanceName + ' session ended');
  void refreshInstancesFromBackend(true);
  document.querySelectorAll('.instance-card.running').forEach(c => c.classList.remove('running'));
  const rb = document.getElementById('detail-running-bar');
  if (rb) rb.classList.remove('visible');
  const lb = document.getElementById('launch-or-kill-btn');
  if (lb) {
    lb.className = 'det-btn det-btn-primary';
    lb.onclick = launchSequence;
    lb.innerHTML = '<i data-lucide="play" width="13" height="13"></i> Launch';
    lucide.createIcons();
  }
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// FILTER & SEARCH
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function setFilter(chip, type) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  INSTANCE_FILTER_TYPE = type || 'all';
  applyInstanceVisibility();
}

function filterByLoader(type) {
  if (type === 'vanilla') INSTANCE_FILTER_TYPE = 'vanilla';
  else if (type === 'modded') INSTANCE_FILTER_TYPE = 'modded';
  else INSTANCE_FILTER_TYPE = 'all';
  applyInstanceVisibility();
}

function filterInstancesByType(type) {
  INSTANCE_FILTER_TYPE = type || 'all';
  applyInstanceVisibility();
}

function shouldShowByFilter(card, filterType) {
  const loader = (card.dataset.loader || 'vanilla').toLowerCase();
  const running = card.classList.contains('running');
  const filter = String(filterType || 'all').toLowerCase();
  if (filter === 'all') return true;
  if (filter === 'running') return running;
  if (filter === 'modded') return loader === 'fabric' || loader === 'forge' || loader === 'neoforge' || loader === 'quilt';
  return loader === filter;
}

function applyInstanceVisibility() {
  const query = String(INSTANCE_SEARCH_QUERY || '').toLowerCase();
  document.querySelectorAll('.instance-card').forEach(card => {
    const name = String(card.dataset.name || '').toLowerCase();
    const showByFilter = shouldShowByFilter(card, INSTANCE_FILTER_TYPE);
    const showBySearch = !query || name.includes(query);
    const show = showByFilter && showBySearch;
    card.style.display = show ? '' : 'none';
  });
}

function filterInstances(q) {
  INSTANCE_SEARCH_QUERY = String(q || '').trim();
  applyInstanceVisibility();
}

function sortInstances(val, silent) {
  const grids = ['group-survival', 'group-modpacks']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const naturalCompare = (a, b) => String(a || '').localeCompare(String(b || ''), undefined, { numeric: true, sensitivity: 'base' });
  const parseVersion = (input) => String(input || '').split('.').map((part) => Number(part) || 0);
  const compareVersion = (a, b) => {
    const va = parseVersion(a);
    const vb = parseVersion(b);
    const maxLen = Math.max(va.length, vb.length);
    for (let i = 0; i < maxLen; i++) {
      const da = va[i] || 0;
      const db = vb[i] || 0;
      if (da !== db) return db - da;
    }
    return 0;
  };

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll('.instance-card'));
    cards.sort((left, right) => {
      const leftName = left.dataset.name || '';
      const rightName = right.dataset.name || '';
      if (val === 'recent') {
        const leftEpoch = (INSTANCE_DATA[leftName] && INSTANCE_DATA[leftName].lastPlayedEpoch) || 0;
        const rightEpoch = (INSTANCE_DATA[rightName] && INSTANCE_DATA[rightName].lastPlayedEpoch) || 0;
        return rightEpoch - leftEpoch || naturalCompare(leftName, rightName);
      }
      if (val === 'version') {
        const result = compareVersion(left.dataset.version, right.dataset.version);
        return result || naturalCompare(leftName, rightName);
      }
      if (val === 'playtime') {
        const leftPlaytime = Number(left.dataset.playtime || 0);
        const rightPlaytime = Number(right.dataset.playtime || 0);
        return rightPlaytime - leftPlaytime || naturalCompare(leftName, rightName);
      }
      return naturalCompare(leftName, rightName);
    });

    cards.forEach((card) => grid.appendChild(card));
  });

  if (!silent) {
    showToast('OK', 'Sorted', 'Instances sorted by ' + val);
  }
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// GROUP COLLAPSE
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function toggleGroup(header) {
  const chevron = header.querySelector('.group-chevron');
  const grid = header.nextElementSibling;
  const collapsed = chevron.classList.contains('collapsed');
  chevron.classList.toggle('collapsed', !collapsed);
  grid.style.display = collapsed ? '' : 'none';
}

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// DRAG & DROP
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
let draggedCard = null;
function dragStart(e) {
  draggedCard = e.currentTarget;
  draggedCard.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function dragOver(e) {
  e.preventDefault();
  const target = e.currentTarget;
  if (target !== draggedCard && target.classList.contains('instance-card')) {
    target.classList.add('drag-over');
  }
}
function dropCard(e) {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.remove('drag-over');
  if (draggedCard && target !== draggedCard && target.classList.contains('instance-card')) {
    const parent = target.parentNode;
    const cards  = [...parent.querySelectorAll('.instance-card')];
    const fromIdx = cards.indexOf(draggedCard);
    const toIdx   = cards.indexOf(target);
    if (fromIdx < toIdx) parent.insertBefore(draggedCard, target.nextSibling);
    else parent.insertBefore(draggedCard, target);
    draggedCard.classList.remove('dragging');
    draggedCard = null;
    showToast('Ã¯Â¿Â½?.Ã¯Â¸Â','Reordered','Instance order updated');
  }
}
document.addEventListener('dragend', () => {
  if (draggedCard) { draggedCard.classList.remove('dragging'); draggedCard = null; }
  document.querySelectorAll('.drag-over').forEach(c => c.classList.remove('drag-over'));
});

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// HELPERS
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
function toggleCheck(el) {
  const on = !el.classList.contains('on');
  el.classList.toggle('on', on);
  el.innerHTML = on ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : '';
  if (on) lucide.createIcons();
}

function selectIcon(el) {
  document.querySelectorAll('.icon-cell').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function switchTab(el) {
  el.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

let INSTANCE_DATA = {};
let INSTANCE_RUNTIME = {};
let INSTANCE_FILTER_TYPE = 'all';
let INSTANCE_SEARCH_QUERY = '';



function normalizeLoader(value) {
  return String(value || 'vanilla').trim().toLowerCase();
}

function loaderLabel(value) {
  const loader = normalizeLoader(value);
  if (!loader) return 'Vanilla';
  return loader.charAt(0).toUpperCase() + loader.slice(1);
}

function loaderDisplayLabel(loaderValue, loaderVersionValue) {
  const base = loaderLabel(loaderValue);
  const loader = normalizeLoader(loaderValue);
  const version = String(loaderVersionValue || '').trim();
  if (!version || loader === 'vanilla') return base;
  return base + ' ' + version;
}

function loaderIcon(value) {
  const loader = normalizeLoader(value);
  if (loader === 'fabric') return 'settings';
  if (loader === 'forge' || loader === 'neoforge') return 'globe';
  if (loader === 'quilt') return 'sparkles';
  return 'package';
}

function playtimeText(totalMinutes) {
  const minutes = Number(totalMinutes || 0);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours <= 0) return mins + 'm';
  return hours + 'h ' + mins + 'm';
}

function parseLastPlayedEpoch(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
    return Math.floor(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const lower = trimmed.toLowerCase();
    const now = Math.floor(Date.now() / 1000);
    if (lower === 'just now') return now;
    const rel = lower.match(/^(\d+)\s+(minute|hour|day|week)s?\s+ago$/);
    if (rel) {
      const amount = Number(rel[1]);
      const unit = rel[2];
      const unitSeconds = unit === 'minute' ? 60 : unit === 'hour' ? 3600 : unit === 'day' ? 86400 : 604800;
      return now - (amount * unitSeconds);
    }
    if (/^\d+$/.test(trimmed)) {
      const parsed = Number(trimmed);
      if (Number.isFinite(parsed) && parsed > 0) return Math.floor(parsed);
    }
    const parsedDate = Date.parse(trimmed);
    if (Number.isFinite(parsedDate) && parsedDate > 0) {
      return Math.floor(parsedDate / 1000);
    }
  }
  return null;
}

function formatLastPlayed(value) {
  const epoch = parseLastPlayedEpoch(value);
  if (!epoch) return 'Never';

  const now = Math.floor(Date.now() / 1000);
  let diff = now - epoch;
  if (!Number.isFinite(diff)) return 'Never';
  if (diff < 0) diff = 0;

  if (diff < 60) return 'Just now';

  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours === 1 ? '1 hour ago' : hours + ' hours ago';

  const days = Math.floor(hours / 24);
  if (days < 7) return days === 1 ? '1 day ago' : days + ' days ago';

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks === 1 ? '1 week ago' : weeks + ' weeks ago';

  return new Date(epoch * 1000).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatExitStatus(state, code, reason, atEpoch) {
  const normalized = String(state || '').trim().toLowerCase();
  if (!normalized) return 'Ã¯Â¿Â½?"';

  let label = 'Exited';
  if (normalized === 'killed') label = 'Killed';
  else if (normalized === 'crashed') label = 'Crashed';
  else if (normalized === 'error') label = 'Error';

  const parts = [];
  if (typeof code === 'number' && Number.isFinite(code)) {
    parts.push('code ' + code);
  }
  const lastAt = parseLastPlayedEpoch(atEpoch);
  if (lastAt) {
    parts.push(formatLastPlayed(lastAt));
  }
  if (normalized === 'error' && reason) {
    parts.push('check logs');
  }

  return parts.length > 0 ? label + ' Â· ' + parts.join(' Â· ') : label;
}

function instanceToDetailData(instance) {
  const loader = normalizeLoader(instance.loader);
  const loaderVersion = String(instance.loaderVersion || '').trim();
  const label = loaderLabel(loader);
  const loaderDisplay = loaderDisplayLabel(loader, loaderVersion);
  const version = String(instance.version || '').trim();
  const lastPlayedEpoch = parseLastPlayedEpoch(instance.lastPlayed);
  const lastExitAtEpoch = parseLastPlayedEpoch(instance.lastExitAtEpoch);
  const lastExitState = instance.lastExitState || null;
  const lastExitCode = typeof instance.lastExitCode === 'number' ? instance.lastExitCode : null;
  const lastExitReason = instance.lastExitReason ? String(instance.lastExitReason) : null;
  const sub = loader === 'vanilla'
    ? 'minecraft ' + version
    : 'minecraft ' + version + ' - ' + loaderDisplay;
  return {
    icon: loaderIcon(loader),
    badge: label.toUpperCase(),
    loader: loaderDisplay,
    loaderVersion,
    version,
    mods: '0 installed',
    lastPlayedEpoch,
    last: formatLastPlayed(lastPlayedEpoch),
    lastExitState,
    lastExitCode,
    lastExitReason,
    lastExitAtEpoch,
    exitStatus: formatExitStatus(lastExitState, lastExitCode, lastExitReason, lastExitAtEpoch),
    playtime: playtimeText(instance.playtimeMinutes),
    sub,
    running: !!instance.running,
  };
}

function instanceCardMarkup(instance) {
  const name = instance.name || 'Instance';
  const loader = normalizeLoader(instance.loader);
  const loaderVersion = String(instance.loaderVersion || '').trim();
  const version = String(instance.version || '').trim();
  const running = !!instance.running;
  const icon = loaderIcon(loader);
  const playtimeHours = Math.floor(Number(instance.playtimeMinutes || 0) / 60);
  const last = formatLastPlayed(instance.lastPlayed);
  const safeName = name.replace(/'/g, '&#39;');

  return `
    <div class="instance-card${running ? " running" : ""}"
         data-loader="${loader}" data-version="${version}" data-loader-version="${escapeHtml(loaderVersion)}" data-name="${safeName}" data-playtime="${playtimeHours}"
         onclick="selectCard(this)"
         draggable="true"
         ondragstart="dragStart(event)"
         ondragover="dragOver(event)"
         ondrop="dropCard(event)"
         oncontextmenu="showCtxMenu(event,this)">
      <div class="card-thumb">
        <div class="card-thumb-bg"></div>
        <div class="card-banner" style="background-image:url('https://picsum.photos/seed/${encodeURIComponent(name)}/300/100')"></div>
        ${running ? '<div class="running-badge"><div class="running-pulse"></div>Running</div>' : ''}
        <div class="card-icon"><i data-lucide="${icon}" width="32" height="32" style="color:var(--t2)"></i></div>
        <button class="card-play" onclick="event.stopPropagation();selectCard(this.closest('.instance-card'));${running ? "killInstance()" : "launchSequence()"}">
          ${running
            ? '<svg viewBox="0 0 10 10" fill="currentColor" width="10" height="10"><rect x="2" y="2" width="6" height="6" rx="1"/></svg>'
            : '<svg viewBox="0 0 10 10" fill="currentColor" width="10" height="10"><path d="M2 1.5L8.5 5 2 8.5V1.5z"/></svg>'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-name">${name}</div>
        <div class="card-meta"><span>${version}</span><span class="card-meta-dot"></span><span>${last}</span></div>
        <div class="card-tags"><span class="card-tag">${loaderDisplayLabel(loader, loaderVersion)}</span></div>
        <div class="card-playtime"><i data-lucide="clock" width="9" height="9"></i>${playtimeText(instance.playtimeMinutes)} total</div>
      </div>
    </div>`;
}

function updateInstanceCountLabels(survivalCount, modpackCount, totalCount) {
  const totalLabel = totalCount + (totalCount === 1 ? ' instance' : ' instances');
  const countBadge = document.getElementById('instance-count-badge');
  if (countBadge) countBadge.textContent = totalLabel;

  const firstSidebarBadge = document.querySelector('.sidebar .sb-badge');
  if (firstSidebarBadge) firstSidebarBadge.textContent = String(totalCount);

  const statusItems = Array.from(document.querySelectorAll('.statusbar .status-item'));
  const instanceStatus = statusItems.find((item) => /instance/i.test(item.textContent));
  if (instanceStatus) instanceStatus.textContent = totalLabel;

  const survivalGrid = document.getElementById('group-survival');
  const modpacksGrid = document.getElementById('group-modpacks');
  const survivalCountEl = survivalGrid && survivalGrid.previousElementSibling
    ? survivalGrid.previousElementSibling.querySelector('.group-count')
    : null;
  const modpackCountEl = modpacksGrid && modpacksGrid.previousElementSibling
    ? modpacksGrid.previousElementSibling.querySelector('.group-count')
    : null;
  if (survivalCountEl) survivalCountEl.textContent = survivalCount + (survivalCount === 1 ? ' instance' : ' instances');
  if (modpackCountEl) modpackCountEl.textContent = modpackCount + (modpackCount === 1 ? ' instance' : ' instances');
}

function createAddInstanceCard() {
  const card = document.createElement('div');
  card.className = 'add-card';
  card.onclick = () => openModal('add-instance');
  card.innerHTML = `
    <div class="add-card-icon"><i data-lucide="plus" width="13" height="13"></i></div>
    <span>Add Instance</span>
  `;
  return card;
}

function resetDetailPanelEmptyState() {
  const detailName = document.getElementById('detail-name');
  const detailSub = document.getElementById('detail-sub');
  const detailBadge = document.getElementById('detail-badge');
  const detailIcon = document.getElementById('detail-icon');
  const runningBar = document.getElementById('detail-running-bar');
  const launchBtn = document.getElementById('launch-or-kill-btn');
  const lastPlayed = document.getElementById('di-last');
  const lastExit = document.getElementById('di-exit');
  const loader = document.getElementById('di-loader');
  const version = document.getElementById('di-version');
  const mods = document.getElementById('di-mods');
  const playtime = document.getElementById('di-playtime');

  if (detailName) detailName.textContent = 'No instances';
  if (detailSub) detailSub.textContent = 'Create your first instance';
  if (detailBadge) detailBadge.textContent = 'EMPTY';
  if (detailIcon) detailIcon.innerHTML = '<i data-lucide="package" width="22" height="22" style="color:var(--t2)"></i>';
  if (runningBar) runningBar.classList.remove('visible');
  if (launchBtn) {
    launchBtn.className = 'det-btn det-btn-secondary';
    launchBtn.onclick = () => openModal('add-instance');
    launchBtn.innerHTML = '<i data-lucide="plus" width="13" height="13"></i> Create Instance';
  }
  if (loader) loader.textContent = '-';
  if (version) version.textContent = '-';
  if (mods) mods.textContent = '0 installed';
  if (playtime) playtime.textContent = '0m';
  if (lastPlayed) lastPlayed.textContent = 'Never';
  if (lastExit) {
    lastExit.textContent = '-';
    lastExit.removeAttribute('title');
  }
}

function renderInstancesFromBackend(instances, preserveSelection) {
  if (!Array.isArray(instances)) return;

  const selectedName = preserveSelection ? getSelectedInstanceName() : null;
  const survivalGrid = document.getElementById('group-survival');
  const modpacksGrid = document.getElementById('group-modpacks');
  if (!survivalGrid || !modpacksGrid) return;

  survivalGrid.innerHTML = '';
  modpacksGrid.innerHTML = '';

  INSTANCE_DATA = {};
  INSTANCE_RUNTIME = {};
  let survivalCount = 0;
  let modpackCount = 0;

  instances.forEach((instance) => {
    const details = instanceToDetailData(instance);
    INSTANCE_DATA[instance.name] = details;
    INSTANCE_RUNTIME[instance.name] = {
      executable: instance.executable || null,
      args: Array.isArray(instance.args) ? instance.args : [],
      workingDir: instance.workingDir || null,
    };

    const loader = normalizeLoader(instance.loader);
    const targetGrid = (loader === 'forge' || loader === 'neoforge' || loader === 'quilt') ? modpacksGrid : survivalGrid;
    if (targetGrid === modpacksGrid) modpackCount += 1;
    else survivalCount += 1;

    targetGrid.insertAdjacentHTML('beforeend', instanceCardMarkup(instance));
  });

  modpacksGrid.appendChild(createAddInstanceCard());
  updateInstanceCountLabels(survivalCount, modpackCount, instances.length);

  const cards = Array.from(document.querySelectorAll('.instance-card'));
  const preferred = selectedName ? cards.find((card) => card.dataset.name === selectedName) : null;
  const target = preferred || cards[0];
  if (target) selectCard(target);
  else resetDetailPanelEmptyState();

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect && sortSelect.value) {
    sortInstances(sortSelect.value, true);
  }
  applyInstanceVisibility();
  lucide.createIcons();
}

async function refreshInstancesFromBackend(preserveSelection) {
  const keepSelection = preserveSelection !== false;
  const res = await invokeBackend('list_instances');
  if (res.ok && Array.isArray(res.data)) {
    renderInstancesFromBackend(res.data, keepSelection);
    return true;
  }
  return false;
}
function selectCard(el) {
  document.querySelectorAll('.instance-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const name = el.dataset.name;
  const d = INSTANCE_DATA[name];
  if (!d) return;
  const lastText = formatLastPlayed(d.lastPlayedEpoch || d.last || null);
  const exitText = formatExitStatus(d.lastExitState, d.lastExitCode, d.lastExitReason, d.lastExitAtEpoch);
  d.last = lastText;
  d.exitStatus = exitText;
  document.getElementById('detail-name').textContent  = name;
  document.getElementById('detail-sub').textContent   = d.sub;
  document.getElementById('detail-badge').textContent = d.badge;
  const detailIcon = document.getElementById('detail-icon');
  if (detailIcon) { detailIcon.innerHTML = `<i data-lucide="${d.icon}" width="22" height="22" style="color:var(--t2)"></i>`; }
  document.getElementById('di-loader').textContent    = d.loader;
  document.getElementById('di-version').textContent   = d.version;
  document.getElementById('di-mods').textContent      = d.mods;
  document.getElementById('di-last').textContent      = lastText;
  const detailExit = document.getElementById('di-exit');
  if (detailExit) {
    detailExit.textContent = exitText;
    if (d.lastExitReason) detailExit.title = d.lastExitReason;
    else detailExit.removeAttribute('title');
  }
  document.getElementById('di-playtime').textContent  = d.playtime;
  const rb = document.getElementById('detail-running-bar');
  const lb = document.getElementById('launch-or-kill-btn');
  if (d.running) {
    rb.classList.add('visible');
    lb.className = 'det-btn det-btn-running';
    lb.onclick   = killInstance;
    lb.innerHTML = '<i data-lucide="zap-off" width="13" height="13"></i> Kill Game';
  } else {
    rb.classList.remove('visible');
    lb.className = 'det-btn det-btn-primary';
    lb.onclick   = launchSequence;
    lb.innerHTML = '<i data-lucide="play" width="13" height="13"></i> Launch';
  }
  lucide.createIcons();
}

function refreshLastPlayedLabels() {
  document.querySelectorAll('.instance-card').forEach((card) => {
    const name = card.dataset.name;
    const details = INSTANCE_DATA[name];
    if (!details) return;
    const lastText = formatLastPlayed(details.lastPlayedEpoch || details.last || null);
    details.last = lastText;
    const meta = card.querySelector('.card-meta');
    if (meta && meta.lastElementChild) {
      meta.lastElementChild.textContent = lastText;
    }
  });

  const selected = document.querySelector('.instance-card.selected');
  if (!selected) return;
  const selectedDetails = INSTANCE_DATA[selected.dataset.name];
  const detailLast = document.getElementById('di-last');
  const detailExit = document.getElementById('di-exit');
  if (selectedDetails && detailLast) {
    detailLast.textContent = formatLastPlayed(selectedDetails.lastPlayedEpoch || selectedDetails.last || null);
  }
  if (selectedDetails && detailExit) {
    const exitText = formatExitStatus(
      selectedDetails.lastExitState,
      selectedDetails.lastExitCode,
      selectedDetails.lastExitReason,
      selectedDetails.lastExitAtEpoch
    );
    selectedDetails.exitStatus = exitText;
    detailExit.textContent = exitText;
    if (selectedDetails.lastExitReason) detailExit.title = selectedDetails.lastExitReason;
    else detailExit.removeAttribute('title');
  }
}

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function updateClock() {
  const el = document.getElementById('statusbar-time');
  if (el) el.textContent = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}
updateClock();
setInterval(updateClock, 30000);
setInterval(refreshLastPlayedLabels, 60000);

// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
// SERVER WIZARD
// Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½Ã¯Â¿Â½.Ã¯Â¿Â½
let srvCurrentStep = 1;
const SRV_TOTAL = 4;
const srvTypeDescs = {
  vanilla: 'Vanilla Ã¯Â¿Â½?" Official Mojang server, no plugins or mods.',
  paper:   'Paper Ã¯Â¿Â½?" High-performance fork with plugin support.',
  fabric:  'Fabric Ã¯Â¿Â½?" Lightweight modding platform.',
  forge:   'Forge Ã¯Â¿Â½?" The original modding API.',
  purpur:  'Purpur Ã¯Â¿Â½?" Paper fork with extra customization.',
};
let srvAddedPlugins = [];

function goSrvStep(n) { srvCurrentStep = n; renderSrvStep(); }
function srvNext()    { if (srvCurrentStep < SRV_TOTAL) { srvCurrentStep++; renderSrvStep(); } }
function srvPrev()    { if (srvCurrentStep > 1)         { srvCurrentStep--; renderSrvStep(); } }

function renderSrvStep() {
  for (let i = 1; i <= SRV_TOTAL; i++) {
    const el = document.getElementById('srv-step-' + i);
    if (el) el.style.display = i === srvCurrentStep ? '' : 'none';
  }
  const bar = document.getElementById('srv-prog-bar');
  if (bar) bar.style.width = (srvCurrentStep / SRV_TOTAL * 100) + '%';
  const sl = document.getElementById('srv-step-label');
  if (sl) sl.textContent = srvCurrentStep;
  const nb = document.getElementById('srv-next-btn');
  if (nb) {
    if (srvCurrentStep === SRV_TOTAL) { nb.style.display = 'none'; }
    else { nb.style.display = ''; nb.innerHTML = 'Next <i data-lucide="chevron-right" width="12" height="12"></i>'; }
  }
  for (let i = 1; i <= SRV_TOTAL; i++) {
    const navEl = document.getElementById('srv-nav-' + i);
    const numEl = document.getElementById('srv-num-' + i);
    if (!navEl || !numEl) continue;
    const done   = i < srvCurrentStep;
    const active = i === srvCurrentStep;
    navEl.style.background = active ? 'var(--s3)' : '';
    navEl.style.color      = active ? 'var(--t1)' : 'var(--t3)';
    numEl.style.background = done ? 'var(--green)' : active ? 'var(--t2)' : 'var(--s4)';
    numEl.style.borderColor= done ? 'var(--green)' : active ? 'var(--b4)' : 'var(--b2)';
    numEl.style.color      = (done || active) ? '#000' : 'var(--t4)';
    numEl.innerHTML        = done ? '<i data-lucide="check" width="10" height="10" style="color:#000"></i>' : i;
    const ps = document.getElementById('prev-step-' + i);
    if (ps) {
      const circle = ps.querySelector('div');
      const txt    = ps.querySelector('span');
      if (done)        { circle.style.background = 'var(--green)'; circle.style.borderColor = 'var(--green)'; circle.innerHTML = '<i data-lucide="check" width="8" height="8" style="color:#000"></i>'; txt.style.color = 'var(--t2)'; }
      else if (active) { circle.style.background = 'var(--t2)';   circle.style.borderColor = 'var(--t2)';    circle.innerHTML = ''; txt.style.color = 'var(--t1)'; }
      else             { circle.style.background = 'var(--s3)';   circle.style.borderColor = 'var(--b3)';   circle.innerHTML = ''; txt.style.color = 'var(--t4)'; }
    }
  }
  if (srvCurrentStep === 4) {
    const n = document.getElementById('srv-name');
    const v = document.getElementById('srv-version');
    const t = document.getElementById('srv-type');
    const r = document.getElementById('srv-ram');
    const sn = document.getElementById('sum-name'); if (sn && n) sn.textContent = n.value || 'Ã¯Â¿Â½?"';
    const sv = document.getElementById('sum-version'); if (sv && v) sv.textContent = v.value;
    const st = document.getElementById('sum-type'); if (st && t) st.textContent = t.options[t.selectedIndex].text;
    const sr = document.getElementById('sum-ram'); if (sr && r) sr.textContent = r.value + ' GB';
  }
  lucide.createIcons();
}

function updateSrvType(val) {
  const desc = document.getElementById('srv-type-desc');
  if (desc) desc.textContent = srvTypeDescs[val] || '';
  const v  = document.getElementById('srv-version');
  const pt = document.getElementById('prev-type');
  if (pt && v) pt.textContent = val.charAt(0).toUpperCase() + val.slice(1) + ' Â· ' + v.value;
}

function onSrvNameInput(val) {
  const pn = document.getElementById('prev-name');
  if (pn) pn.textContent = val || 'My Server';
}

function onSrvVersionChange(val) {
  const t  = document.getElementById('srv-type');
  const pt = document.getElementById('prev-type');
  if (pt && t) pt.textContent = t.options[t.selectedIndex].text + ' Â· ' + val;
}

function selectSrvIcon(el, iconName) {
  document.querySelectorAll('#srv-icon-grid .icon-cell').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const preview = document.getElementById('srv-icon-preview');
  if (preview) preview.innerHTML = `<i data-lucide="${iconName}" width="28" height="28" style="color:var(--t2)"></i>`;
  const prevIcon = document.getElementById('prev-icon');
  if (prevIcon) prevIcon.innerHTML = `<i data-lucide="${iconName}" width="32" height="32" style="color:var(--t2)"></i>`;
  lucide.createIcons();
}

function selectSrvHost(card) {
  document.querySelectorAll('.srv-host-card').forEach(c => {
    c.style.background  = 'var(--s2)';
    c.style.borderColor = 'var(--b2)';
    c.classList.remove('selected');
    const r = c.querySelector('.srv-radio');
    if (r) { r.innerHTML = ''; r.style.borderColor = 'var(--b3)'; }
  });
  card.style.background  = 'var(--s3)';
  card.style.borderColor = 'var(--b4)';
  card.classList.add('selected');
  const r = card.querySelector('.srv-radio');
  if (r) { r.style.borderColor = 'var(--t2)'; r.innerHTML = '<div style="width:6px;height:6px;border-radius:50%;background:var(--t2);"></div>'; }
  const sumHost = document.getElementById('sum-host');
  // FIX: use a more reliable selector for the host name text
  const hostName = card.querySelector('div > div:first-child');
  if (sumHost && hostName) sumHost.textContent = hostName.textContent.trim();
}

function checkEula() {
  const box = document.getElementById('eula-box');
  const btn = document.getElementById('srv-launch-btn');
  if (!btn) return;
  const checked = box && box.classList.contains('on');
  btn.disabled        = !checked;
  btn.style.background = checked ? 'var(--t1)' : 'var(--t4)';
  btn.style.cursor    = checked ? 'pointer' : 'not-allowed';
}

function toggleSrvAdd(btn, name) {
  const added = btn.textContent.trim().startsWith('Ã¯Â¿Â½o"');
  if (!added) {
    btn.textContent     = 'Ã¯Â¿Â½o" Added';
    btn.style.borderColor = 'var(--b3)'; btn.style.color = 'var(--t3)';
    srvAddedPlugins.push(name);
  } else {
    btn.textContent     = '+ Add';
    btn.style.borderColor = 'var(--b2)'; btn.style.color = 'var(--t2)';
    srvAddedPlugins = srvAddedPlugins.filter(p => p !== name);
  }
  const pp = document.getElementById('prev-plugins');
  if (pp) pp.innerHTML = srvAddedPlugins.length ? srvAddedPlugins.map(p=>`<div style="margin-bottom:3px;">Ã¯Â¿Â½?Ã¯Â¿Â½ ${p}</div>`).join('') : 'None yet';
}

function startServerDeploy() {
  const name = (document.getElementById('srv-name') || {}).value || 'My Server';
  const versionEl = document.getElementById('srv-version');
  const typeEl = document.getElementById('srv-type');
  const ramEl = document.getElementById('srv-ram');
  const hostEl = document.querySelector('.srv-host-card.selected');
  const hostLabel = hostEl ? hostEl.querySelector('div > div:first-child') : null;
  const request = {
    name,
    version: versionEl ? versionEl.value : '1.21.4',
    serverType: typeEl ? typeEl.value : 'vanilla',
    ramGb: ramEl ? Number(ramEl.value) : 4,
    host: hostLabel ? hostLabel.textContent.trim() : 'This Computer'
  };
  void invokeBackend('deploy_server', { request });
  const ol = document.createElement('div');
  ol.className = 'launch-overlay';
  ol.innerHTML = `
    <div class="launch-icon" style="width:80px;height:80px;background:var(--s2);border:1px solid var(--b3);border-radius:18px;display:flex;align-items:center;justify-content:center;"><i data-lucide="server" width="40" height="40" style="color:var(--t2)"></i></div>
    <div class="launch-name">${name}</div>
    <div class="launch-sub">Deploying serverÃ¯Â¿Â½?Ã¯Â¿Â½</div>
    <div class="launch-prog"><div class="launch-prog-fill" id="dep-fill"></div></div>
    <div style="font-size:11px;font-family:var(--mono);color:var(--t4);margin-top:4px" id="dep-label">InitializingÃ¯Â¿Â½?Ã¯Â¿Â½</div>
  `;
  document.body.appendChild(ol);
  lucide.createIcons();
  // FIX: query fill and label from ol, not global scope
  const fill  = ol.querySelector('#dep-fill');
  const label = ol.querySelector('#dep-label');
  const steps = [[20,'Downloading server JARÃ¯Â¿Â½?Ã¯Â¿Â½'],[45,'Accepting EULAÃ¯Â¿Â½?Ã¯Â¿Â½'],[65,'Installing pluginsÃ¯Â¿Â½?Ã¯Â¿Â½'],[85,'Generating worldÃ¯Â¿Â½?Ã¯Â¿Â½'],[100,'Server ready!']];
  let i = 0;
  const iv = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(iv);
      setTimeout(() => {
        ol.classList.add('hiding');
        ol.addEventListener('animationend', () => ol.remove(), {once:true});
        showToast('Ã¯Â¿Â½Y-Ã¯Â¿Â½Ã¯Â¸Â','Server deployed!', name + ' is now running on :25565');
      }, 500);
      return;
    }
    fill.style.width  = steps[i][0] + '%';
    label.textContent = steps[i][1];
    i++;
  }, 700);
}
