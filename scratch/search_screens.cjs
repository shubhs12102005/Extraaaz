const fs = require('fs');
const path = require('path');

function searchAll(dir, query) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') searchAll(full, query);
    } else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.cjs')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(query)) {
        console.log(`Found "${query}" in ${full}`);
        const idx = content.indexOf(query);
        console.log(content.slice(Math.max(0, idx - 100), idx + 400));
      }
    }
  }
}

searchAll('scratch', '— VMS');
searchAll('scratch', '— WMS');
searchAll('scratch', 'VMS screen');
searchAll('scratch', 'WMS screen');
