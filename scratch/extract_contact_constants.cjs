const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bundle = fs.readFileSync(path.join(scratchDir, 'full_bundle.js'), 'utf8');

const pwC = bundle.match(/wC\s*=\s*(\[[\s\S]*?\]);/);
if (pwC) console.log('wC:', pwC[1]);

const pjC = bundle.match(/jC\s*=\s*(\[[\s\S]*?\]);/);
if (pjC) console.log('jC:', pjC[1]);
