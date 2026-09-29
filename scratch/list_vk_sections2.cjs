const fs = require('fs');
const js = fs.readFileSync('scratch/vk_component.js', 'utf8');

const sectionMatches = [...js.matchAll(/e\.jsxs?\(\"section\",\{className:\"([^\"]+)\"/g)].map(m => m[1]);
console.log('All sections in vk:', sectionMatches);
