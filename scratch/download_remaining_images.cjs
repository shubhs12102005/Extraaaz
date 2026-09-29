const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IP = '91.108.106.215';
const HOST = 'www.extraaaz.com';
const pagesDir = path.join(__dirname, 'live_pages');
const publicDir = path.join(__dirname, '..', 'public');

// Find case-studies page
if (!fs.existsSync(path.join(pagesDir, 'case-studies.html'))) {
  console.log('Downloading case-studies.html...');
  execSync(`curl.exe -k -s --resolve "${HOST}:443:${IP}" -H "User-Agent: Mozilla/5.0" "https://${HOST}/case-studies/" -o "${path.join(pagesDir, 'case-studies.html')}"`);
}

const allImgs = new Set();
for (const file of fs.readdirSync(pagesDir)) {
  if (!file.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  for (const m of content.matchAll(/(?:src|href|content)=["'](\/(?:images|brand|clients|products|industries|assets|icons)[^"']+)["']/g)) {
    allImgs.add(m[1].split('?')[0]);
  }
}

for (const img of allImgs) {
  if (img.startsWith('/products/') || img.startsWith('/industries/')) continue;
  const dest = path.join(publicDir, img.replace(/^\//, ''));
  if (!fs.existsSync(dest) || fs.statSync(dest).size < 100) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      execSync(`curl.exe -k -s --resolve "${HOST}:443:${IP}" -H "User-Agent: Mozilla/5.0" "https://${HOST}${img}" -o "${dest}"`);
      const sz = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
      console.log(`Fetched ${img} (${sz} bytes)`);
    } catch (e) {
      console.error('Failed to fetch', img);
    }
  }
}
console.log('Completed checking all images!');
