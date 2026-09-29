const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const eposRaw = fs.readFileSync(path.join(scratchDir, 'ExtraaazPOS_raw.js'), 'utf8');

console.log('EPOS raw len:', eposRaw.length);
console.log('EPOS snippet 1:\n', eposRaw.slice(0, 2000));
