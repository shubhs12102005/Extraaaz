process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const path = require('path');

async function downloadChunks() {
  const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');
  const scripts = [...html.matchAll(/src=["'](\/_next\/static\/chunks\/[^"']+)["']/g)].map(m => m[1]);
  const cssList = [...html.matchAll(/href=["'](\/_next\/static\/chunks\/[^"']+\.css)["']/g)].map(m => m[1]);

  const outDir = path.join(__dirname, 'chunks');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const s of [...new Set([...scripts, ...cssList])]) {
    const filename = path.basename(s);
    const dest = path.join(outDir, filename);
    if (!fs.existsSync(dest)) {
      console.log('Downloading', s);
      const res = await fetch(`https://www.extraaaz.com${s}`);
      const buf = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buf));
    }
  }

  // Also download the CSS files and inspect
  console.log('Done downloading chunks!');
}

downloadChunks();
