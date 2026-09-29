const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IP = '91.108.106.215';
const HOST = 'www.extraaaz.com';

function collectAssets() {
  const assets = new Set();

  // Search live_pages
  const pagesDir = path.join(__dirname, 'live_pages');
  if (fs.existsSync(pagesDir)) {
    for (const file of fs.readdirSync(pagesDir)) {
      if (!file.endsWith('.html')) continue;
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
      
      // Match image src/href/url
      for (const m of content.matchAll(/(?:src|href|content)=["'](\/(?:images|brand|clients|products|industries|assets|icons)[^"']+)["']/g)) {
        assets.add(m[1]);
      }
      for (const m of content.matchAll(/["'](\/(?:images|brand|clients|products|industries|assets|icons)[^"']+\.(?:webp|png|jpg|jpeg|svg|ico|gif))["']/g)) {
        assets.add(m[1]);
      }
      for (const m of content.matchAll(/url\(["']?(\/(?:images|brand|clients|products|industries|assets|icons)[^"')]+)["']?\)/g)) {
        assets.add(m[1]);
      }
    }
  }

  // Search chunks
  const chunksDir = path.join(__dirname, 'chunks');
  if (fs.existsSync(chunksDir)) {
    for (const file of fs.readdirSync(chunksDir)) {
      if (!file.endsWith('.js') && !file.endsWith('.css')) continue;
      const content = fs.readFileSync(path.join(chunksDir, file), 'utf8');
      for (const m of content.matchAll(/["'](\/(?:images|brand|clients|products|industries|assets|icons)[^"']+\.(?:webp|png|jpg|jpeg|svg|ico|gif))["']/g)) {
        assets.add(m[1]);
      }
      for (const m of content.matchAll(/url\(["']?(\/(?:images|brand|clients|products|industries|assets|icons)[^"')]+)["']?\)/g)) {
        assets.add(m[1]);
      }
    }
  }

  return [...assets];
}

const assets = collectAssets();
console.log(`Found ${assets.length} unique asset paths to download.`);

const publicDir = path.join(__dirname, '..', 'public');

let success = 0;
let failed = 0;

for (const assetPath of assets) {
  const cleanPath = assetPath.split('?')[0];
  const localDest = path.join(publicDir, cleanPath.replace(/^\//, ''));
  const localDir = path.dirname(localDest);

  if (!fs.existsSync(localDir)) {
    fs.mkdirSync(localDir, { recursive: true });
  }

  if (fs.existsSync(localDest) && fs.statSync(localDest).size > 500) {
    console.log(`[SKIP] Already exists: ${cleanPath} (${fs.statSync(localDest).size} B)`);
    success++;
    continue;
  }

  const url = `https://${HOST}${cleanPath}`;
  try {
    const cmd = `curl.exe -k -s --resolve "${HOST}:443:${IP}" -H "User-Agent: Mozilla/5.0" "${url}" -o "${localDest}"`;
    execSync(cmd, { stdio: 'pipe' });
    const size = fs.existsSync(localDest) ? fs.statSync(localDest).size : 0;
    if (size > 300) {
      console.log(`[OK] Downloaded ${cleanPath} (${size} B)`);
      success++;
    } else {
      console.log(`[WARN] File too small (${size} B): ${cleanPath}`);
      failed++;
    }
  } catch (err) {
    console.error(`[ERR] Failed to download ${cleanPath}:`, err.message);
    failed++;
  }
}

console.log(`Finished: ${success} succeeded, ${failed} failed.`);
