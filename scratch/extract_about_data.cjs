const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bundle = fs.readFileSync(path.join(scratchDir, 'full_bundle.js'), 'utf8');

const pKS = bundle.match(/KS\s*=\s*(\[[\s\S]*?\]);/);
const pXS = bundle.match(/XS\s*=\s*(\[[\s\S]*?\]);/);
const pQS = bundle.match(/QS\s*=\s*(\[[\s\S]*?\]);/);
const pJS = bundle.match(/JS\s*=\s*(\[[\s\S]*?\]);/);

const posG4 = bundle.indexOf('g4=');
const g4Block = bundle.slice(posG4, posG4 + 4000);

fs.writeFileSync('scratch/about_extracted_full.js', JSON.stringify({
  KS: pKS ? pKS[1] : null,
  XS: pXS ? pXS[1] : null,
  QS: pQS ? pQS[1] : null,
  JS: pJS ? pJS[1] : null,
  g4: g4Block
}, null, 2));

console.log('Saved about_extracted_full.js');
