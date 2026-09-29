const fs = require('fs');
const path = require('path');

function searchAll(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist' && f !== 'scratch') {
        searchAll(full);
      }
    } else {
      if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.json') || f.endsWith('.md') || f.endsWith('.html') || f.endsWith('.css')) {
        const content = fs.readFileSync(full, 'utf8');
        const matches = [...content.matchAll(/extraaaz/gi)];
        if (matches.length > 0) {
          console.log(`\n--- ${full} (${matches.length} matches) ---`);
          matches.slice(0, 5).forEach(m => {
            const idx = m.index;
            console.log(content.substring(Math.max(0, idx - 40), idx + 80).replace(/\n/g, ' '));
          });
        }
      }
    }
  }
}

searchAll('.');
