const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const aCIdx = 732687;
console.log('Before aC (data arrays):');
console.log(content.slice(aCIdx - 15000, aCIdx));
fs.writeFileSync('scratch/ac_data.js', content.slice(aCIdx - 15000, aCIdx));
