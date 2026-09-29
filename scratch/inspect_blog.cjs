const fs = require('fs');

console.log('=== hC (Blog) snippet ===');
const hc = fs.readFileSync('scratch/hC_component.js', 'utf8');
console.log(hc.substring(0, 1500));

console.log('=== gC (BlogDetail) snippet ===');
const gc = fs.readFileSync('scratch/gC_component.js', 'utf8');
console.log(gc.substring(0, 1500));
