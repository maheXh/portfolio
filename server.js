// Simple Express server that regenerates gallery/main/images.json on each request to /api/gallery/main
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const GALLERY_ROOT = path.join(__dirname, 'gallery');

app.use(express.static(__dirname));

function buildList(folder) {
  if (!fs.existsSync(folder)) return [];
  const files = fs.readdirSync(folder).filter(f => !f.startsWith('.') && fs.statSync(path.join(folder, f)).isFile());
  const validExt = ['.jpg','.jpeg','.png','.webp'];
  const images = files.filter(f => validExt.includes(path.extname(f).toLowerCase()));
  // numeric first
  const rx = /(\d+)(?=\.[^.]+$)/;
  images.sort((a,b)=>{
    const ma = a.match(rx); const mb = b.match(rx);
    if (ma && mb) return parseInt(ma[1]) - parseInt(mb[1]);
    if (ma && !mb) return -1;
    if (!ma && mb) return 1;
    return a.localeCompare(b);
  });
  return images;
}

function writeManifest(folder) {
  const list = buildList(folder);
  const outPath = path.join(folder, 'images.json');
  fs.writeFileSync(outPath, JSON.stringify(list, null, 2));
  return list;
}

app.get('/api/gallery/:name', (req,res) => {
  const name = req.params.name;
  const folder = path.join(GALLERY_ROOT, name);
  try {
    const list = writeManifest(folder);
    res.json({ folder: name, count: list.length, images: list });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
