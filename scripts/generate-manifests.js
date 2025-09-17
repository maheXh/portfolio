// Generate images.json manifests for every gallery subfolder
// Usage (optional): node scripts/generate-manifests.js
// Windows PowerShell example:
//   node .\scripts\generate-manifests.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'gallery');
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  const dirs = [];
  for (const e of entries) {
    if (e.isDirectory()) dirs.push(path.join(dir, e.name));
    else files.push(path.join(dir, e.name));
  }
  return { files, dirs };
}

function rel(p) { return path.relative(ROOT, p).replace(/\\/g, '/'); }

function buildManifestFor(folder) {
  const { files } = walk(folder);
  const images = files
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .map(f => path.basename(f))
    .sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
  if (!images.length) return;
  const outPath = path.join(folder, 'images.json');
  fs.writeFileSync(outPath, JSON.stringify(images, null, 2));
  console.log('Wrote', rel(outPath));
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error('Missing gallery folder at', ROOT);
    process.exit(1);
  }
  const stack = [ROOT];
  while (stack.length) {
    const d = stack.pop();
    const { dirs } = walk(d);
    // write manifest for this folder if it contains images
    buildManifestFor(d);
    stack.push(...dirs);
  }
}

main();
