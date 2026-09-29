const fs = require('fs');
const js = fs.readFileSync('scratch/TC_component.js', 'utf8');

console.log('TC snippet:');
console.log(js.substring(0, 2000));
