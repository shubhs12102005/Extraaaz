const fs = require('fs');
const js = fs.readFileSync('scratch/oM_component.js', 'utf8');

console.log('oM sections:');
const sectionMatches = [...js.matchAll(/e\.jsxs?\(\"section\",\{className:\"([^\"]+)\"/g)].map(m => m[1]);
console.log('Sections in oM:', sectionMatches);

console.log('oM snippet (first 3000 chars):');
console.log(js.substring(0, 3000));
