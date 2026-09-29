const fs = require('fs');
const path = require('path');

function searchAll(dir, query) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') searchAll(full, query);
    } else if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(query)) {
        console.log(`Found "${query}" in ${full}`);
      }
    }
  }
}

searchAll('scratch', 'Sales Pipeline');
searchAll('src', 'Sales Pipeline');
