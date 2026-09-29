const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const pcIdx = content.indexOf('Pc=[');
console.log('Pc=[ at', pcIdx);
const endIdx = content.indexOf('],cc=4;');
console.log('end at', endIdx);
const pcCode = content.slice(pcIdx, endIdx + 1);
fs.writeFileSync('scratch/products_array.js', pcCode);
console.log('Saved products array, length:', pcCode.length);
