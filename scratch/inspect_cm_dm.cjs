const fs = require('fs');

console.log('=== cM snippet ===');
const cm = fs.readFileSync('scratch/cM_component.js', 'utf8');
console.log(cm.substring(0, 1500));

console.log('=== dM snippet ===');
const dm = fs.readFileSync('scratch/dM_component.js', 'utf8');
console.log(dm.substring(0, 1500));
