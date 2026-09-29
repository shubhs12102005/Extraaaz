const fs = require('fs');
const js = fs.readFileSync('scratch/NC_component.js', 'utf8');

console.log('NC snippet:');
console.log(js.substring(0, 2500));
