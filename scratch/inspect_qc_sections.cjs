const fs = require('fs');
const js = fs.readFileSync('scratch/QC_component.js', 'utf8');

console.log('QC sections:');
const sectionMatches = [...js.matchAll(/e\.jsxs?\(\"section\",\{className:\"([^\"]+)\"/g)].map(m => m[1]);
console.log('Sections in QC:', sectionMatches);

console.log('QC snippet:');
console.log(js.substring(1000, 3500));
