const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const cgIdx = content.indexOf('cg=');
console.log('cg= at:', cgIdx);
if (cgIdx !== -1) {
  console.log(content.slice(cgIdx - 50, cgIdx + 200));
}
