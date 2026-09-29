const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bundle = fs.readFileSync(path.join(scratchDir, 'full_bundle.js'), 'utf8');

const posG4 = bundle.indexOf('g4=');
// find end of g4: search for next top-level const or component
let end = bundle.indexOf(';', posG4 + 2000);
console.log('g4 full:\n', bundle.slice(posG4, posG4 + 3500));
