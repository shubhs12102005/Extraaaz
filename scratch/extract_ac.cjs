const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const aCIdx = content.indexOf('aC=');
const nextIdx = content.indexOf('XC=', aCIdx);
console.log('aC component length:', nextIdx - aCIdx);
fs.writeFileSync('scratch/pos_solutions_india.js', content.slice(aCIdx, nextIdx));
