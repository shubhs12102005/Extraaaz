const fs = require('fs');
const path = require('path');

const chunksDir = path.join(__dirname, 'chunks');
const files = fs.readdirSync(chunksDir);

for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  if (content.includes('Visitor check-in') || content.includes('Storefront, cart')) {
    console.log(`Found Business Operations explore in chunk: ${f}`);
    const idx = content.indexOf('Visitor check-in');
    console.log(content.slice(Math.max(0, idx - 400), idx + 2500));
  }
}
