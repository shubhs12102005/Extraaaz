const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const emarkRaw = fs.readFileSync(path.join(scratchDir, 'Emark_raw.js'), 'utf8');

console.log('Emark snippet 1:\n', emarkRaw.slice(0, 2000));
