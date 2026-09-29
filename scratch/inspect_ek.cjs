const fs = require('fs');
const js = fs.readFileSync('scratch/ek_component.js', 'utf8');

console.log('ek snippet:');
console.log(js.substring(0, 2500));
