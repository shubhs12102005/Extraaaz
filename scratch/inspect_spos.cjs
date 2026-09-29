const fs = require('fs');
const code = fs.readFileSync('scratch/spos_full.js', 'utf8');

const secRegex = /<section|className:[\"']([^\"']*-section[^\"']*)[\"']/g;
let m;
while ((m = secRegex.exec(code)) !== null) {
  console.log('Section class:', m[1]);
}

const h2Regex = /e\.jsx(?:s)?\(["']h2["'],\{[^}]*children:([^}]+)\}/g;
console.log('\nH2s:');
while ((m = h2Regex.exec(code)) !== null) {
  console.log('-', m[1].slice(0, 100));
}
