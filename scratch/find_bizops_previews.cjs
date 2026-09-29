const fs = require('fs');
const path = require('path');

const chunksDir = path.join(__dirname, 'chunks');
const files = fs.readdirSync(chunksDir);

for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  if (content.includes('app.extraaaz.com/business-operations')) {
    console.log(`Found address bar in chunk: ${f}`);
    let idx = 0;
    while ((idx = content.indexOf('app.extraaaz.com/business-operations', idx)) !== -1) {
      console.log('--- At index', idx);
      console.log(content.slice(Math.max(0, idx - 100), idx + 600));
      idx += 30;
    }
  }
}
