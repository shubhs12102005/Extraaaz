const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const posRaw = fs.readFileSync(path.join(scratchDir, 'POSSolutions_raw.js'), 'utf8');

console.log('POS snippet 2:\n', posRaw.slice(1500, 4500));
