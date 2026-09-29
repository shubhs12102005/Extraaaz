const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') search(full);
    } else {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/extraaaz/gi);
      if (matches) {
        console.log(`${full}: ${matches.length} matches`);
      }
    }
  }
}

search('src');
search('public');
search('index.html');
search('README.md');
search('package.json');
