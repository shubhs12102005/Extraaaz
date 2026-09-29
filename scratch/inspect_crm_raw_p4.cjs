const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const crmRaw = fs.readFileSync(path.join(scratchDir, 'CRMHRMSSolutions_raw.js'), 'utf8');

console.log('Snippet 4:\n', crmRaw.slice(8500, 13500));
