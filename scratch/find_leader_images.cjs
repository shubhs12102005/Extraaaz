const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bundle = fs.readFileSync(path.join(scratchDir, 'full_bundle.js'), 'utf8');

const mYS = bundle.match(/YS\s*=\s*"([^"]+)"/);
const m$S = bundle.match(/\$S\s*=\s*"([^"]+)"/);

console.log('YS:', mYS ? mYS[1] : 'not found');
console.log('$S:', m$S ? m$S[1] : 'not found');
