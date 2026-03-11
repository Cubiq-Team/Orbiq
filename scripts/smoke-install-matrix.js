const https = require('https');
const http = require('http');
const { URL } = require('url');

function requestRaw(urlText, options = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlText);
    const transport = url.protocol === 'http:' ? http : https;
    const req = transport.request(
      url,
      {
        method: options.method || 'GET',
        headers: {
          'user-agent': 'orbiq-install-matrix/1.0',
          accept: 'application/json',
          ...options.headers,
        },
      },
      (res) => {
        const status = res.statusCode || 0;
        const location = res.headers.location;
        if (status >= 300 && status < 400 && location) {
          if (redirectCount >= 6) {
            reject(new Error('too many redirects for ' + urlText));
            return;
          }
          const next = new URL(location, url).toString();
          res.resume();
          requestRaw(next, options, redirectCount + 1).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          resolve({
            status,
            body: Buffer.concat(chunks).toString('utf8'),
          });
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

async function requestJson(urlText) {
  const res = await requestRaw(urlText);
  if (res.status < 200 || res.status >= 300) {
    throw new Error('HTTP ' + res.status + ' for ' + urlText);
  }
  try {
    return JSON.parse(res.body);
  } catch (err) {
    throw new Error('invalid JSON for ' + urlText + ': ' + err.message);
  }
}

function pickPrimaryModrinthFile(version) {
  const files = Array.isArray(version && version.files) ? version.files : [];
  if (!files.length) return null;
  return files.find((row) => row && row.primary) || files[0] || null;
}

async function smokeModrinth(projectType) {
  const params = new URLSearchParams();
  params.set('limit', '12');
  params.set('index', 'downloads');
  params.set('facets', `[["project_type:${projectType}"]]`);
  const payload = await requestJson('https://api.modrinth.com/v2/search?' + params.toString());
  const hits = Array.isArray(payload && payload.hits) ? payload.hits : [];
  const item = hits.find((row) => row && row.project_id);
  if (!item) throw new Error('no results');
  const projectId = String(item.project_id);
  const versions = await requestJson('https://api.modrinth.com/v2/project/' + encodeURIComponent(projectId) + '/version');
  const list = Array.isArray(versions) ? versions : [];
  if (!list.length) throw new Error('no versions');
  const version = list[0];
  const file = pickPrimaryModrinthFile(version);
  if (!file || !file.url) throw new Error('no downloadable file');
  const deps = Array.isArray(version.dependencies)
    ? version.dependencies.filter((dep) => String(dep && dep.dependency_type || '').toLowerCase() === 'required')
    : [];
  return {
    title: String(item.title || projectId),
    artifact: String(file.filename || ''),
    requiredDeps: deps.length,
  };
}

function mapClassId(tab) {
  if (tab === 'mods') return '6';
  if (tab === 'modpacks') return '4471';
  if (tab === 'resourcepacks') return '12';
  if (tab === 'shaders') return '6552';
  return '6';
}

async function smokeCurseforge(tab) {
  const params = new URLSearchParams();
  params.set('gameId', '432');
  params.set('classId', mapClassId(tab));
  params.set('pageSize', '12');
  params.set('sortField', '2');
  params.set('sortOrder', 'desc');
  const payload = await requestJson('https://api.curse.tools/v1/cf/mods/search?' + params.toString());
  const rows = Array.isArray(payload && payload.data) ? payload.data : [];
  const item = rows.find((row) => Number(row && row.id) > 0);
  if (!item) throw new Error('no results');
  const modId = Number(item.id);
  const filesPayload = await requestJson('https://api.curse.tools/v1/cf/mods/' + String(modId) + '/files?pageSize=25&index=0');
  const files = Array.isArray(filesPayload && filesPayload.data) ? filesPayload.data : [];
  const file = files.find((row) => row && row.downloadUrl);
  if (!file) throw new Error('no downloadable file');
  const deps = Array.isArray(file.dependencies)
    ? file.dependencies.filter((dep) => Number(dep && dep.relationType) === 3)
    : [];
  return {
    title: String(item.name || modId),
    artifact: String(file.fileName || file.displayName || ''),
    requiredDeps: deps.length,
  };
}

async function run() {
  const matrix = [
    { provider: 'modrinth', tab: 'mods' },
    { provider: 'modrinth', tab: 'modpacks' },
    { provider: 'modrinth', tab: 'resourcepacks' },
    { provider: 'modrinth', tab: 'shaders' },
    { provider: 'curseforge', tab: 'mods' },
    { provider: 'curseforge', tab: 'modpacks' },
    { provider: 'curseforge', tab: 'resourcepacks' },
    { provider: 'curseforge', tab: 'shaders' },
  ];

  const rows = [];
  for (const entry of matrix) {
    const started = Date.now();
    try {
      const result = entry.provider === 'modrinth'
        ? await smokeModrinth(entry.tab === 'mods' ? 'mod' : entry.tab === 'modpacks' ? 'modpack' : entry.tab === 'resourcepacks' ? 'resourcepack' : 'shader')
        : await smokeCurseforge(entry.tab);
      rows.push({
        provider: entry.provider,
        tab: entry.tab,
        status: 'ok',
        ms: Date.now() - started,
        detail: result.title + ' | ' + result.artifact + ' | deps=' + result.requiredDeps,
      });
    } catch (err) {
      rows.push({
        provider: entry.provider,
        tab: entry.tab,
        status: 'fail',
        ms: Date.now() - started,
        detail: err && err.message ? err.message : 'unknown error',
      });
    }
  }

  console.log('Install matrix smoke');
  rows.forEach((row) => {
    console.log(
      '- ' +
        row.provider.padEnd(10, ' ') +
        ' ' +
        row.tab.padEnd(13, ' ') +
        ' ' +
        row.status.toUpperCase().padEnd(5, ' ') +
        ' ' +
        String(row.ms).padStart(4, ' ') +
        'ms  ' +
        row.detail
    );
  });

  const failed = rows.filter((row) => row.status !== 'ok');
  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

run().catch((err) => {
  console.error('Install matrix smoke failed:', err && err.message ? err.message : err);
  process.exit(1);
});

