const fs = require('fs');
const code = fs.readFileSync('scratch/home_code.js', 'utf8');

// Find headings h1, h2, h3 or sections
const h2Regex = /e\.jsx(?:s)?\((?:m\.)?["']h2["'],\{[^}]*children:([^}]+)\}/g;
let m;
console.log('--- H2 HEADINGS IN HOME ---');
while ((m = h2Regex.exec(code)) !== null) {
  console.log(m[1].slice(0, 150));
}

// Also check all strings in home
const strRegex = /["']([A-Z][a-zA-Z0-9\s—,.\?!'&-]{4,80})["']/g;
const titles = new Set();
while ((m = strRegex.exec(code)) !== null) {
  titles.add(m[1]);
}
console.log('\n--- SIGNIFICANT STRINGS IN HOME ---');
for (const t of Array.from(titles)) {
  if (t.length > 10 && !t.includes('class') && !t.includes('gradient')) {
    console.log('-', t);
  }
}
