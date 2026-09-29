const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const contactRaw = fs.readFileSync(path.join(scratchDir, 'contact_raw.js'), 'utf8');

console.log('Snippet 3:\n', contactRaw.slice(3500, 6500));
