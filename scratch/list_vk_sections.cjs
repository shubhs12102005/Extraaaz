const fs = require('fs');
const js = fs.readFileSync('scratch/vk_component.js', 'utf8');

// Find all section tags in vk
const sectionMatches = [...js.matchAll(/e\.jsx\(\"section\",\{className:\"([^\"]+)\"/g)].map(m => m[1]);
console.log('Sections in vk:', sectionMatches);
