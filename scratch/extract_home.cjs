const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const qSIdx = content.indexOf('qS=');
let nextCompIdx = content.indexOf('eM=', qSIdx);
if (nextCompIdx === -1) nextCompIdx = content.indexOf('h5.createRoot', qSIdx);
const homeCode = content.slice(qSIdx, qSIdx + 30000);
fs.writeFileSync('scratch/home_code.js', homeCode);
console.log('Saved home code, length:', homeCode.length);
