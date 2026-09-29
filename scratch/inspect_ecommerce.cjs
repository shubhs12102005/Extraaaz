const fs = require('fs');

console.log('=== XC snippet ===');
const xc = fs.readFileSync('scratch/XC_component.js', 'utf8');
console.log(xc.substring(0, 1500));

console.log('=== QC snippet ===');
const qc = fs.readFileSync('scratch/QC_component.js', 'utf8');
console.log(qc.substring(0, 1500));
