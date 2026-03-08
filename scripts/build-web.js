const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'src', 'web');
const distDir = path.join(projectRoot, 'dist');

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Missing web source directory: ${sourceDir}`);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });
fs.cpSync(sourceDir, distDir, { recursive: true });

console.log(`Copied web assets from ${sourceDir} to ${distDir}`);
