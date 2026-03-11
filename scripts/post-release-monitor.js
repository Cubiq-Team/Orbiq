#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const out = {
    inputs: [],
    output: path.join('reports', 'post-release-monitor.json'),
    requireData: false,
    maxAuth: Number.POSITIVE_INFINITY,
    maxProvision: Number.POSITIVE_INFINITY,
    maxLaunch: Number.POSITIVE_INFINITY,
    maxInstall: Number.POSITIVE_INFINITY,
  };

  const items = argv.slice(2);
  for (let i = 0; i < items.length; i++) {
    const arg = String(items[i] || '');
    if (arg === '--input') {
      const value = String(items[i + 1] || '').trim();
      if (value) out.inputs.push(value);
      i += 1;
      continue;
    }
    if (arg === '--output') {
      const value = String(items[i + 1] || '').trim();
      if (value) out.output = value;
      i += 1;
      continue;
    }
    if (arg === '--require-data') {
      out.requireData = true;
      continue;
    }
    if (arg === '--max-auth') {
      const value = Number(items[i + 1]);
      if (Number.isFinite(value) && value >= 0) out.maxAuth = value;
      i += 1;
      continue;
    }
    if (arg === '--max-provision') {
      const value = Number(items[i + 1]);
      if (Number.isFinite(value) && value >= 0) out.maxProvision = value;
      i += 1;
      continue;
    }
    if (arg === '--max-launch') {
      const value = Number(items[i + 1]);
      if (Number.isFinite(value) && value >= 0) out.maxLaunch = value;
      i += 1;
      continue;
    }
    if (arg === '--max-install') {
      const value = Number(items[i + 1]);
      if (Number.isFinite(value) && value >= 0) out.maxInstall = value;
      i += 1;
      continue;
    }
  }

  return out;
}

function listRootLogFiles(root) {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.toLowerCase().endsWith('.log'))
    .map((name) => path.join(root, name));
}

function listAppDataLogFiles() {
  const appData = String(process.env.APPDATA || '').trim();
  if (!appData) return [];
  const logsDir = path.join(appData, 'com.orbiq.launcher', 'logs');
  if (!fs.existsSync(logsDir)) return [];
  const entries = fs.readdirSync(logsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(logsDir, entry.name))
    .filter((filePath) => filePath.toLowerCase().endsWith('.log') || filePath.toLowerCase().endsWith('.txt'));
}

function collectInputs(root, explicitInputs) {
  const dedup = new Set();
  const out = [];
  const pushPath = (value) => {
    const resolved = path.resolve(root, value);
    if (dedup.has(resolved)) return;
    dedup.add(resolved);
    out.push(resolved);
  };

  for (const input of explicitInputs) pushPath(input);
  if (explicitInputs.length === 0) {
    for (const item of listRootLogFiles(root)) pushPath(item);
    for (const item of listAppDataLogFiles()) pushPath(item);
  }
  return out.filter((filePath) => fs.existsSync(filePath));
}

function classifyLine(line) {
  const value = String(line || '');
  const lower = value.toLowerCase();
  const isBackendFailure = /\[backend\].*failed/.test(lower) || /\[[a-z0-9_]+\]\s+.*failed/.test(lower);
  if (!isBackendFailure) return null;

  if (lower.includes('auth_') || lower.includes('microsoft') || lower.includes('oauth')) {
    return 'auth';
  }
  if (lower.includes('provision_') || lower.includes('provision_instance')) {
    return 'provision';
  }
  if (lower.includes('launch_') || lower.includes('launch_instance') || lower.includes('minecraft failed to start')) {
    return 'launch';
  }
  if (lower.includes('install_') || lower.includes('install_browse_item')) {
    return 'install';
  }
  return 'other';
}

function extractErrorCode(line) {
  const match = String(line || '').match(/\[([A-Z]+_[A-Z0-9_]+)\]/);
  return match ? String(match[1] || '').trim() : '';
}

function monitorLogs(files) {
  const summary = {
    scannedFiles: files.length,
    linesRead: 0,
    backendFailures: 0,
    authFailures: 0,
    provisionFailures: 0,
    launchFailures: 0,
    installFailures: 0,
    otherFailures: 0,
    topCodes: [],
    sampleFailures: [],
  };
  const codeCounts = new Map();

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    summary.linesRead += lines.length;
    for (const rawLine of lines) {
      const line = String(rawLine || '').trim();
      if (!line) continue;
      const bucket = classifyLine(line);
      if (!bucket) continue;
      summary.backendFailures += 1;
      if (bucket === 'auth') summary.authFailures += 1;
      else if (bucket === 'provision') summary.provisionFailures += 1;
      else if (bucket === 'launch') summary.launchFailures += 1;
      else if (bucket === 'install') summary.installFailures += 1;
      else summary.otherFailures += 1;

      const code = extractErrorCode(line);
      if (code) codeCounts.set(code, (codeCounts.get(code) || 0) + 1);
      if (summary.sampleFailures.length < 25) {
        summary.sampleFailures.push({ bucket, line });
      }
    }
  }

  summary.topCodes = Array.from(codeCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([code, count]) => ({ code, count }));
  return summary;
}

function ensureDirForFile(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function applyThresholds(summary, args) {
  const violations = [];
  if (summary.authFailures > args.maxAuth) {
    violations.push('authFailures=' + summary.authFailures + ' > maxAuth=' + args.maxAuth);
  }
  if (summary.provisionFailures > args.maxProvision) {
    violations.push('provisionFailures=' + summary.provisionFailures + ' > maxProvision=' + args.maxProvision);
  }
  if (summary.launchFailures > args.maxLaunch) {
    violations.push('launchFailures=' + summary.launchFailures + ' > maxLaunch=' + args.maxLaunch);
  }
  if (summary.installFailures > args.maxInstall) {
    violations.push('installFailures=' + summary.installFailures + ' > maxInstall=' + args.maxInstall);
  }
  return violations;
}

function main() {
  const root = process.cwd();
  const args = parseArgs(process.argv);
  const inputs = collectInputs(root, args.inputs);

  if (inputs.length === 0) {
    const message = 'No log files found to monitor.';
    console.log(message);
    if (args.requireData) {
      console.error('Use --input <path> or run on machine with launcher logs.');
      process.exit(2);
    }
    const outputPathNoData = path.resolve(root, args.output);
    ensureDirForFile(outputPathNoData);
    fs.writeFileSync(
      outputPathNoData,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          status: 'no_data',
          message,
          scannedFiles: 0,
          files: [],
        },
        null,
        2
      )
    );
    return;
  }

  const summary = monitorLogs(inputs);
  const violations = applyThresholds(summary, args);
  const outputPath = path.resolve(root, args.output);
  ensureDirForFile(outputPath);

  const payload = {
    generatedAt: new Date().toISOString(),
    status: violations.length > 0 ? 'threshold_exceeded' : 'ok',
    files: inputs,
    thresholds: {
      maxAuth: args.maxAuth,
      maxProvision: args.maxProvision,
      maxLaunch: args.maxLaunch,
      maxInstall: args.maxInstall,
    },
    summary,
    violations,
  };
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));

  console.log('Post-release monitor summary');
  console.log('- Files:', summary.scannedFiles);
  console.log('- Backend failures:', summary.backendFailures);
  console.log('- Auth failures:', summary.authFailures);
  console.log('- Provision failures:', summary.provisionFailures);
  console.log('- Launch failures:', summary.launchFailures);
  console.log('- Install failures:', summary.installFailures);
  console.log('- Output:', outputPath);

  if (violations.length > 0) {
    console.error('Threshold violations:');
    for (const item of violations) console.error('- ' + item);
    process.exit(3);
  }
}

main();
