const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const careerRaw = fs.readFileSync(path.join(scratchDir, 'career_raw.js'), 'utf8');

const posRC = careerRaw.indexOf('RC=');
console.log('RC snippet:\n', careerRaw.slice(posRC, posRC + 2500));
