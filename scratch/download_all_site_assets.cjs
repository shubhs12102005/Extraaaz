process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const path = require('path');

async function downloadAll() {
  const pagesDir = path.join(__dirname, 'live_pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

  const scripts = new Set();
  const stylesheets = new Set();
  const images = new Set();

  for (const f of files) {
    const html = fs.readFileSync(path.join(pagesDir, f), 'utf8');
    
    // Scripts
    for (const m of html.matchAll(/src=["'](\/_next\/static\/[^"']+\.js)["']/g)) {
      scripts.add(m[1]);
    }
    // Stylesheets
    for (const m of html.matchAll(/href=["'](\/_next\/static\/[^"']+\.css)["']/g)) {
      stylesheets.add(m[1]);
    }
    // Images
    for (const m of html.matchAll(/(?:src|href)=["'](\/(?:images|assets|brand|icons)[^"']+)["']/g)) {
      images.add(m[1]);
    }
    for (const m of html.matchAll(/["'](\/images\/[^"']+\.(?:webp|png|jpg|jpeg|svg|gif|ico))["']/g)) {
      images.add(m[1]);
    }
  }

  console.log(`Found ${scripts.size} scripts, ${stylesheets.size} stylesheets, ${images.size} image references.`);

  // Download chunks
  const chunksDir = path.join(__dirname, 'chunks');
  if (!fs.existsSync(chunksDir)) fs.mkdirSync(chunksDir, { recursive: true });

  for (const s of [...scripts, ...stylesheets]) {
    const dest = path.join(chunksDir, path.basename(s));
    if (!fs.existsSync(dest)) {
      try {
        const res = await fetch(`https://www.extraaaz.com${s}`);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          fs.writeFileSync(dest, Buffer.from(buf));
          console.log(`Downloaded chunk: ${path.basename(s)}`);
        }
      } catch (err) {
        console.error(`Failed ${s}:`, err.message);
      }
    }
  }

  // Download images directly into public/ folder
  const publicDir = path.join(__dirname, '..', 'public');
  for (const img of images) {
    const cleanImg = img.split('?')[0];
    const dest = path.join(publicDir, cleanImg.replace(/^\//, ''));
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (!fs.existsSync(dest) || fs.statSync(dest).size < 100) {
      try {
        const res = await fetch(`https://www.extraaaz.com${img}`);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          fs.writeFileSync(dest, Buffer.from(buf));
          console.log(`Downloaded asset: ${cleanImg} (${buf.byteLength} bytes)`);
        } else {
          console.log(`HTTP ${res.status} for ${img}`);
        }
      } catch (err) {
        console.error(`Failed ${img}:`, err.message);
      }
    }
  }

  console.log('All downloads completed!');
}

downloadAll();
