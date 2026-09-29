const fs = require('fs');
const homeCode = fs.readFileSync('scratch/home_code.js', 'utf8');

// Let's find all section tags in homeCode
const sectionRegex = /e\.jsx(?:s)?\(["']section["'],\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g;
let m;
let count = 0;
while ((m = sectionRegex.exec(homeCode)) !== null) {
  count++;
  console.log(`--- SECTION ${count} ---`);
  console.log(m[0].slice(0, 300));
}
console.log('Total sections in homeCode:', count);
