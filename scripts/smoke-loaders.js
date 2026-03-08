const https = require('https');
const http = require('http');
const { URL } = require('url');

function requestRaw(urlText, options = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlText);
    const transport = url.protocol === 'http:' ? http : https;
    const request = transport.request(
      url,
      {
        method: options.method || 'GET',
        headers: {
          'user-agent': 'orbiq-loader-smoke/1.0',
          ...options.headers,
        },
      },
      (response) => {
        const statusCode = response.statusCode || 0;
        const location = response.headers.location;
        if (statusCode >= 300 && statusCode < 400 && location) {
          if (redirectCount >= 6) {
            reject(new Error('too many redirects for ' + urlText));
            return;
          }
          const next = new URL(location, url).toString();
          response.resume();
          requestRaw(next, options, redirectCount + 1).then(resolve).catch(reject);
          return;
        }

        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => {
          resolve({
            statusCode,
            headers: response.headers,
            body: Buffer.concat(chunks),
          });
        });
      }
    );
    request.on('error', reject);
    request.end();
  });
}

async function requestText(url, options) {
  const response = await requestRaw(url, options);
  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error('HTTP ' + response.statusCode + ' for ' + url);
  }
  return response.body.toString('utf8');
}

async function requestJson(url, options) {
  const text = await requestText(url, options);
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('invalid JSON from ' + url + ': ' + error.message);
  }
}

async function requestHeadOk(url) {
  let response = await requestRaw(url, { method: 'HEAD' });
  if (response.statusCode === 405 || response.statusCode === 501) {
    response = await requestRaw(url, { method: 'GET' });
  }
  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error('HTTP ' + response.statusCode + ' for ' + url);
  }
}

function neoforgePrefixFromGameVersion(gameVersion) {
  const parts = String(gameVersion || '').trim().split('.');
  if (parts.length < 3 || parts[0] !== '1') {
    throw new Error('unsupported minecraft version format: ' + gameVersion);
  }
  return parts[1] + '.' + parts[2] + '.';
}

function findLatestNeoforgeVersion(metadataXml, prefix) {
  const matches = [];
  const regex = /<version>([^<]+)<\/version>/g;
  let match;
  while ((match = regex.exec(metadataXml)) !== null) {
    const version = String(match[1] || '').trim();
    if (version.startsWith(prefix) && !version.includes('snapshot')) {
      matches.push(version);
    }
  }
  return matches.length ? matches[matches.length - 1] : null;
}

async function run() {
  const gameVersion = process.argv[2] || '1.21.4';
  const rows = [];

  const manifestIndex = await requestJson(
    'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json'
  );
  const vanillaVersion = Array.isArray(manifestIndex.versions)
    ? manifestIndex.versions.find((item) => item && item.id === gameVersion)
    : null;
  if (!vanillaVersion || !vanillaVersion.url) {
    throw new Error('vanilla version not found: ' + gameVersion);
  }
  const vanillaDetails = await requestJson(vanillaVersion.url);
  if (!vanillaDetails.downloads || !vanillaDetails.downloads.client) {
    throw new Error('vanilla version metadata is missing client download');
  }
  rows.push({
    loader: 'vanilla',
    resolved: gameVersion,
    note: 'manifest + client metadata ok',
  });

  const fabricLoaders = await requestJson(
    'https://meta.fabricmc.net/v2/versions/loader/' + encodeURIComponent(gameVersion)
  );
  const fabricLoader =
    Array.isArray(fabricLoaders) && fabricLoaders[0] && fabricLoaders[0].loader
      ? fabricLoaders[0].loader.version
      : null;
  if (!fabricLoader) {
    throw new Error('fabric loader not found for ' + gameVersion);
  }
  const fabricProfile = await requestJson(
    'https://meta.fabricmc.net/v2/versions/loader/' +
      encodeURIComponent(gameVersion) +
      '/' +
      encodeURIComponent(fabricLoader) +
      '/profile/json'
  );
  if (!fabricProfile.id || !fabricProfile.mainClass) {
    throw new Error('fabric profile is missing id/mainClass');
  }
  rows.push({
    loader: 'fabric',
    resolved: fabricLoader,
    note: String(fabricProfile.id),
  });

  const quiltLoaders = await requestJson(
    'https://meta.quiltmc.org/v3/versions/loader/' + encodeURIComponent(gameVersion)
  );
  const quiltLoader =
    Array.isArray(quiltLoaders) && quiltLoaders[0] && quiltLoaders[0].loader
      ? quiltLoaders[0].loader.version
      : null;
  if (!quiltLoader) {
    throw new Error('quilt loader not found for ' + gameVersion);
  }
  const quiltProfile = await requestJson(
    'https://meta.quiltmc.org/v3/versions/loader/' +
      encodeURIComponent(gameVersion) +
      '/' +
      encodeURIComponent(quiltLoader) +
      '/profile/json'
  );
  if (!quiltProfile.id || !quiltProfile.mainClass) {
    throw new Error('quilt profile is missing id/mainClass');
  }
  rows.push({
    loader: 'quilt',
    resolved: quiltLoader,
    note: String(quiltProfile.id),
  });

  const forgePromotions = await requestJson(
    'https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json'
  );
  const recommendedKey = gameVersion + '-recommended';
  const latestKey = gameVersion + '-latest';
  const forgeVersion =
    forgePromotions &&
    forgePromotions.promos &&
    (forgePromotions.promos[recommendedKey] || forgePromotions.promos[latestKey]);
  if (!forgeVersion) {
    throw new Error('forge version not found for ' + gameVersion);
  }
  const forgeInstallerUrl =
    'https://maven.minecraftforge.net/net/minecraftforge/forge/' +
    encodeURIComponent(gameVersion + '-' + forgeVersion) +
    '/forge-' +
    encodeURIComponent(gameVersion + '-' + forgeVersion) +
    '-installer.jar';
  await requestHeadOk(forgeInstallerUrl);
  rows.push({
    loader: 'forge',
    resolved: forgeVersion,
    note: 'installer reachable',
  });

  const neoMetadata = await requestText(
    'https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml'
  );
  const neoPrefix = neoforgePrefixFromGameVersion(gameVersion);
  const neoVersion = findLatestNeoforgeVersion(neoMetadata, neoPrefix);
  if (!neoVersion) {
    throw new Error('neoforge version not found for prefix ' + neoPrefix);
  }
  const neoInstallerUrl =
    'https://maven.neoforged.net/releases/net/neoforged/neoforge/' +
    encodeURIComponent(neoVersion) +
    '/neoforge-' +
    encodeURIComponent(neoVersion) +
    '-installer.jar';
  await requestHeadOk(neoInstallerUrl);
  rows.push({
    loader: 'neoforge',
    resolved: neoVersion,
    note: 'installer reachable',
  });

  console.log('Loader smoke check ok for Minecraft ' + gameVersion);
  for (const row of rows) {
    console.log(
      '- ' +
        row.loader.padEnd(9, ' ') +
        ' -> ' +
        row.resolved +
        ' (' +
        row.note +
        ')'
    );
  }
}

run().catch((error) => {
  console.error('Loader smoke check failed:', error.message);
  process.exit(1);
});
