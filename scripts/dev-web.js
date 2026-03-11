const fs = require('fs');
const http = require('http');
const path = require('path');

const HOST = process.env.ORBIQ_DEV_HOST || '127.0.0.1';
const PORT = Number(process.env.ORBIQ_DEV_PORT || 1420);
const ROOT = path.resolve(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
};

function safeJoin(root, requestPath) {
  const clean = requestPath.replace(/^\/+/, '');
  const normalized = path.normalize(clean);
  const full = path.resolve(root, normalized);
  if (!full.startsWith(root)) return null;
  return full;
}

function sendNotFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Not Found');
}

function sendFile(res, filePath) {
  fs.stat(filePath, (statErr, stat) => {
    if (statErr || !stat.isFile()) {
      sendNotFound(res);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.statusCode = 200;
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store');
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      res.statusCode = 500;
      res.end('Read error');
    });
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${HOST}:${PORT}`);
  let requestPath = decodeURIComponent(url.pathname || '/');
  if (requestPath.endsWith('/')) requestPath += 'index.html';

  let target = safeJoin(ROOT, requestPath);
  if (!target) {
    sendNotFound(res);
    return;
  }

  fs.stat(target, (err, stat) => {
    if (!err && stat.isDirectory()) {
      target = path.join(target, 'index.html');
      sendFile(res, target);
      return;
    }
    if (!err && stat.isFile()) {
      sendFile(res, target);
      return;
    }

    // SPA fallback to index.html for unknown routes.
    sendFile(res, path.join(ROOT, 'index.html'));
  });
});

function keepProcessAlive() {
  setInterval(() => {}, 60 * 60 * 1000);
}

function verifyExistingServerAndReuse() {
  const req = http.get(
    {
      host: HOST,
      port: PORT,
      path: '/',
      timeout: 2000,
    },
    (res) => {
      const ok = Number(res.statusCode || 0) >= 200 && Number(res.statusCode || 0) < 500;
      res.resume();
      if (!ok) {
        console.error(`[dev-web] port ${PORT} is in use but server health check failed`);
        process.exit(1);
        return;
      }
      console.log(`[dev-web] reusing existing server at http://${HOST}:${PORT}`);
      keepProcessAlive();
    }
  );
  req.on('timeout', () => {
    req.destroy(new Error('timeout'));
  });
  req.on('error', () => {
    console.error(`[dev-web] port ${PORT} is in use but no healthy server was found`);
    process.exit(1);
  });
}

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    verifyExistingServerAndReuse();
    return;
  }
  console.error('[dev-web] server failed:', err);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`[dev-web] serving ${ROOT} at http://${HOST}:${PORT}`);
});
