const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IP = '91.108.106.215';
const HOST = 'www.extraaaz.com';
const chunksDir = path.join(__dirname, 'chunks');

const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
for (const f of files) {
  const dest = path.join(chunksDir, f);
  const url = `https://${HOST}/_next/static/chunks/${f}`;
  try {
    execSync(`curl.exe -k -s --resolve "${HOST}:443:${IP}" -H "User-Agent: Mozilla/5.0" "${url}" -o "${dest}"`);
    console.log(`Downloaded ${f}: ${fs.statSync(dest).size} bytes`);
  } catch (e) {
    console.error(`Failed ${f}:`, e.message);
  }
}
