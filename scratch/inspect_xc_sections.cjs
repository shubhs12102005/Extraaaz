const fs = require('fs');
const js = fs.readFileSync('scratch/XC_component.js', 'utf8');

const sectionMatches = [...js.matchAll(/e\.jsxs?\(\"section\",\{className:\"([^\"]+)\"/g)].map(m => m[1]);
console.log('Sections in XC:', sectionMatches);

console.log('XC first 2000 chars:');
console.log(js.substring(0, 2000));
