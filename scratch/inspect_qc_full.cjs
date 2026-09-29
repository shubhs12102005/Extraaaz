const fs = require('fs');
const js = fs.readFileSync('scratch/QC_component.js', 'utf8');

console.log('QC length:', js.length);
console.log('QC snippet:');
console.log(js.substring(0, 2000));
