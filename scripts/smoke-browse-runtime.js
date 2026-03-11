const https = require('https');
const http = require('http');
const { URL } = require('url');

const PAGE_SIZE = 20;
const TABS = ['mods', 'modpacks', 'resourcepacks', 'shaders'];

function requestRaw(urlText, options = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlText);
    const transport = url.protocol === 'http:' ? http : https;
    const req = transport.request(
      url,
      {
        method: options.method || 'GET',
        headers: {
          'user-agent': 'orbiq-browse-smoke/1.0',
          accept: 'application/json,*/*',
          ...options.headers,
        },
      },
      (res) => {
        const status = res.statusCode || 0;
        const location = res.headers.location;
        if (status >= 300 && status < 400 && location) {
          if (redirectCount >= 8) {
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
  const res = await requestRaw(urlText, { method: 'GET', headers: { accept: 'application/json' } });
  if (res.status < 200 || res.status >= 300) {
    throw new Error('HTTP ' + res.status + ' for ' + urlText);
  }
  try {
    return JSON.parse(res.body);
  } catch (err) {
    throw new Error('invalid JSON for ' + urlText + ': ' + err.message);
  }
}

async function assertDownloadReachable(urlText) {
  const head = await requestRaw(urlText, { method: 'HEAD', headers: { accept: '*/*' } });
  if (head.status >= 200 && head.status < 400) return true;
  const ranged = await requestRaw(urlText, {
    method: 'GET',
    headers: {
      accept: '*/*',
      range: 'bytes=0-0',
    },
  });
  if (ranged.status >= 200 && ranged.status < 400) return true;
  throw new Error('download URL not reachable: HTTP ' + ranged.status);
}

function topTabToModrinthType(tab) {
  if (tab === 'mods') return 'mod';
  if (tab === 'modpacks') return 'modpack';
  if (tab === 'resourcepacks') return 'resourcepack';
  if (tab === 'shaders') return 'shader';
  return 'mod';
}

function topTabToCurseClassId(tab) {
  if (tab === 'mods') return '6';
  if (tab === 'modpacks') return '4471';
  if (tab === 'resourcepacks') return '12';
  if (tab === 'shaders') return '6552';
  return '6';
}

function topTabUsesLoader(tab) {
  return tab === 'mods' || tab === 'modpacks';
}

function loaderToCurseType(loader) {
  if (loader === 'forge') return 1;
  if (loader === 'fabric') return 4;
  if (loader === 'quilt') return 5;
  if (loader === 'neoforge') return 6;
  return 0;
}

function cleanVersions(values) {
  const out = [];
  const seen = new Set();
  for (const value of values || []) {
    const text = String(value || '').trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    out.push(text);
    if (out.length >= 50) break;
  }
  return out;
}

async function fetchModrinthSearch(tab, page, filters) {
  const params = new URLSearchParams();
  const facets = [['project_type:' + topTabToModrinthType(tab)]];
  const loader = String(filters && filters.loader ? filters.loader : 'any').trim().toLowerCase();
  const version = String(filters && filters.version ? filters.version : 'any').trim().toLowerCase();
  if (topTabUsesLoader(tab) && loader !== 'any') facets.push(['categories:' + loader]);
  if (version !== 'any') facets.push(['versions:' + version]);
  params.set('limit', String(PAGE_SIZE));
  params.set('offset', String((Math.max(1, page) - 1) * PAGE_SIZE));
  params.set('index', 'downloads');
  params.set('facets', JSON.stringify(facets));

  const payload = await requestJson('https://api.modrinth.com/v2/search?' + params.toString());
  const hits = Array.isArray(payload && payload.hits) ? payload.hits : [];
  const totalRows = Number(payload && (payload.total_hits || payload.total || payload.totalHits)) || 0;
  const items = hits.map((row) => ({
    id: String((row && row.project_id) || '').trim(),
    title: String((row && row.title) || '').trim(),
    versions: cleanVersions(row && row.versions),
  })).filter((row) => row.id);
  return { items, totalRows };
}

async function fetchCurseforgeSearch(tab, page, filters) {
  const params = new URLSearchParams();
  params.set('gameId', '432');
  params.set('classId', topTabToCurseClassId(tab));
  params.set('pageSize', String(PAGE_SIZE));
  params.set('index', String((Math.max(1, page) - 1) * PAGE_SIZE));
  params.set('sortField', '2');
  params.set('sortOrder', 'desc');

  const loader = String(filters && filters.loader ? filters.loader : 'any').trim().toLowerCase();
  const version = String(filters && filters.version ? filters.version : 'any').trim().toLowerCase();
  if (topTabUsesLoader(tab) && loader !== 'any') {
    const modLoaderType = loaderToCurseType(loader);
    if (modLoaderType > 0) params.set('modLoaderType', String(modLoaderType));
  }
  if (version !== 'any') params.set('gameVersion', version);

  const payload = await requestJson('https://api.curse.tools/v1/cf/mods/search?' + params.toString());
  const rows = Array.isArray(payload && payload.data) ? payload.data : [];
  const pagination = payload && payload.pagination && typeof payload.pagination === 'object' ? payload.pagination : {};
  const totalRows =
    Number(pagination.totalCount || pagination.resultCount || (payload && payload.totalCount) || (payload && payload.total)) || 0;
  const items = rows.map((row) => {
    const indexes = Array.isArray(row && row.latestFilesIndexes) ? row.latestFilesIndexes : [];
    const versions = cleanVersions(
      indexes
        .map((entry) => String((entry && entry.gameVersion) || '').trim())
        .filter((value) => /^\d+\.\d+(\.\d+)?$/.test(value))
    );
    return {
      id: String((row && row.id) || '').trim(),
      title: String((row && row.name) || '').trim(),
      versions,
    };
  }).filter((row) => row.id);
  return { items, totalRows };
}

function pickPrimaryModrinthFile(version) {
  const files = Array.isArray(version && version.files) ? version.files : [];
  if (!files.length) return null;
  return files.find((row) => row && row.primary) || files[0] || null;
}

async function verifyInstallableModrinth(projectId, loader, version) {
  const params = new URLSearchParams();
  if (loader && loader !== 'any') params.set('loaders', JSON.stringify([loader]));
  if (version && version !== 'any') params.set('game_versions', JSON.stringify([version]));
  const endpoint = 'https://api.modrinth.com/v2/project/' + encodeURIComponent(projectId) + '/version';
  const preferredUrl = endpoint + (params.toString() ? ('?' + params.toString()) : '');
  let versions = await requestJson(preferredUrl);
  versions = Array.isArray(versions) ? versions : [];
  if (!versions.length && params.toString()) {
    const fallback = await requestJson(endpoint);
    versions = Array.isArray(fallback) ? fallback : [];
  }
  if (!versions.length) throw new Error('no versions for install');
  const file = pickPrimaryModrinthFile(versions[0]);
  if (!file || !file.url) throw new Error('no downloadable artifact');
  await assertDownloadReachable(String(file.url));
  return String(file.filename || '');
}

async function verifyInstallableCurseforge(modId) {
  const payload = await requestJson(
    'https://api.curse.tools/v1/cf/mods/' + encodeURIComponent(String(modId)) + '/files?pageSize=25&index=0'
  );
  const files = Array.isArray(payload && payload.data) ? payload.data : [];
  const file = files.find((row) => row && row.downloadUrl);
  if (!file) throw new Error('no downloadable artifact');
  await assertDownloadReachable(String(file.downloadUrl));
  return String(file.fileName || file.displayName || '');
}

async function runProviderTabChecks(provider, tab) {
  const checks = [];
  const fetcher = provider === 'modrinth' ? fetchModrinthSearch : fetchCurseforgeSearch;

  const base = await fetcher(tab, 1, { loader: 'any', version: 'any' });
  if (!base.items.length) throw new Error('page1 returned no items');
  checks.push('load page1');

  if (Number(base.totalRows) > PAGE_SIZE) {
    const page2 = await fetcher(tab, 2, { loader: 'any', version: 'any' });
    if (!page2.items.length) throw new Error('page2 returned no items');
    checks.push('load page2');
  } else {
    checks.push('load page2 (skipped: <=20 total)');
  }

  let loader = 'any';
  if (topTabUsesLoader(tab)) {
    loader = 'fabric';
    const withLoader = await fetcher(tab, 1, { loader, version: 'any' });
    if (!withLoader.items.length) loader = 'any';
    checks.push('loader filter');
  } else {
    checks.push('loader filter (n/a)');
  }

  const versionCandidate =
    base.items.flatMap((row) => Array.isArray(row.versions) ? row.versions : []).find((value) => /^\d+\.\d+(\.\d+)?$/.test(String(value))) ||
    'any';
  if (versionCandidate !== 'any') {
    await fetcher(tab, 1, { loader, version: versionCandidate });
    checks.push('version filter');
  } else {
    checks.push('version filter (skipped: no version token)');
  }

  const first = base.items[0];
  if (!first) throw new Error('missing install candidate');
  if (provider === 'modrinth') {
    const artifact = await verifyInstallableModrinth(first.id, loader, versionCandidate);
    checks.push('install resolve (' + artifact + ')');
  } else {
    const artifact = await verifyInstallableCurseforge(first.id);
    checks.push('install resolve (' + artifact + ')');
  }

  return checks;
}

async function run() {
  const rows = [];
  for (const provider of ['modrinth', 'curseforge']) {
    for (const tab of TABS) {
      const started = Date.now();
      try {
        const checks = await runProviderTabChecks(provider, tab);
        rows.push({
          provider,
          tab,
          status: 'ok',
          ms: Date.now() - started,
          detail: checks.join(' -> '),
        });
      } catch (err) {
        rows.push({
          provider,
          tab,
          status: 'fail',
          ms: Date.now() - started,
          detail: err && err.message ? err.message : 'unknown error',
        });
      }
    }
  }

  console.log('Browse runtime smoke (tab/filter/page/install)');
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
  if (failed.length > 0) process.exitCode = 1;
}

run().catch((err) => {
  console.error('Browse runtime smoke failed:', err && err.message ? err.message : err);
  process.exit(1);
});
