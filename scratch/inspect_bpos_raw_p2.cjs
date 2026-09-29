const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bposRaw = fs.readFileSync(path.join(scratchDir, 'BharatPOS_raw.js'), 'utf8');

console.log('BPOS snippet 2:\n', bposRaw.slice(2000, 5000));
