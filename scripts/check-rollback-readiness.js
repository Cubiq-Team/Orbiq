#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return null;
  }
}

function assertCheck(results, condition, passMessage, failMessage) {
  if (condition) {
    results.passed += 1;
    results.lines.push('PASS  ' + passMessage);
    return;
  }
  results.failed += 1;
  results.lines.push('FAIL  ' + failMessage);
}

function main() {
  const root = process.cwd();
  const results = { passed: 0, failed: 0, lines: [] };

  const packageJsonPath = path.join(root, 'package.json');
  const packageRaw = readText(packageJsonPath);
  let packageData = null;
  if (packageRaw) {
    try {
      packageData = JSON.parse(packageRaw);
    } catch (_err) {
      packageData = null;
    }
  }

  const scripts = packageData && packageData.scripts ? packageData.scripts : {};
  assertCheck(
    results,
    Boolean(packageData),
    'package.json loaded',
    'package.json is missing or invalid JSON'
  );
  assertCheck(
    results,
    typeof scripts['release:rollback-check'] === 'string',
    'release:rollback-check script exists',
    'release:rollback-check script is missing'
  );
  assertCheck(
    results,
    typeof scripts['monitor:post-release'] === 'string',
    'monitor:post-release script exists',
    'monitor:post-release script is missing'
  );

  const policyPath = path.join(root, 'docs', 'release-channel-policy.md');
  const policyText = readText(policyPath) || '';
  assertCheck(
    results,
    policyText.includes('## Rollback Checklist'),
    'release policy includes rollback checklist',
    'docs/release-channel-policy.md missing rollback checklist section'
  );

  const changelogPath = path.join(root, 'CHANGELOG.md');
  const changelogText = readText(changelogPath) || '';
  assertCheck(
    results,
    changelogText.includes('## [Unreleased]'),
    'changelog includes Unreleased section',
    'CHANGELOG.md missing [Unreleased] section'
  );

  const ciWorkflowPath = path.join(root, '.github', 'workflows', 'ci.yml');
  const ciWorkflowText = readText(ciWorkflowPath) || '';
  const requiredGateCommands = [
    'npm run build:web',
    'npm run test:backend',
    'npm run test:loaders',
    'npm run test:browse',
    'npm run test:install-matrix',
    'npm run release:rollback-check',
  ];
  for (const command of requiredGateCommands) {
    assertCheck(
      results,
      ciWorkflowText.includes(command),
      'CI includes gate: ' + command,
      'CI is missing gate: ' + command
    );
  }

  const monitoringWorkflowPath = path.join(root, '.github', 'workflows', 'post-release-monitor.yml');
  const monitoringWorkflowText = readText(monitoringWorkflowPath) || '';
  assertCheck(
    results,
    monitoringWorkflowText.includes('monitor:post-release'),
    'post-release monitoring workflow exists',
    'post-release monitoring workflow is missing or not wired to monitor:post-release'
  );

  const title = results.failed === 0
    ? 'Rollback readiness check passed'
    : 'Rollback readiness check failed';
  console.log(title);
  for (const line of results.lines) {
    console.log(line);
  }
  console.log('Summary: ' + results.passed + ' passed, ' + results.failed + ' failed');

  if (results.failed > 0) {
    process.exit(1);
  }
}

main();
