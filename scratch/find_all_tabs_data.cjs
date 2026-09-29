const fs = require('fs');
const path = require('path');

function searchDir(dir, terms) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        searchDir(full, terms);
      }
    } else if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.cjs') || f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      for (const term of terms) {
        if (content.includes(term)) {
          console.log(`Matched "${term}" in ${full}`);
          const idx = content.indexOf(term);
          console.log(content.slice(Math.max(0, idx - 200), idx + 1000));
        }
      }
    }
  }
}

console.log('Searching for industry tabs and business operation tabs...');
searchDir('scratch', ['Hotels · Resorts', 'Kirana · Supermarket', 'Textile · Engineering', 'Hospitals · Clinics', 'Water · Gas']);
