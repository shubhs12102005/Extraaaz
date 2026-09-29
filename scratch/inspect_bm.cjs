const fs = require('fs');
const js = fs.readFileSync('scratch/bM_component.js', 'utf8');

console.log('bM snippet:');
console.log(js.substring(0, 2500));
