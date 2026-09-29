const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const posRaw = fs.readFileSync(path.join(scratchDir, 'POSSolutions_raw.js'), 'utf8');

console.log('POS raw len:', posRaw.length);
console.log('POS snippet 1:\n', posRaw.slice(0, 1500));
