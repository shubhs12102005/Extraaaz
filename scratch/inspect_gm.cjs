const fs = require('fs');
const js = fs.readFileSync('scratch/gM_component.js', 'utf8');

console.log('gM snippet:');
console.log(js.substring(0, 2500));
