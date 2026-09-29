const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';
const bundle = fs.readFileSync(path.join(scratchDir, 'full_bundle.js'), 'utf8');

const pKS = bundle.match(/KS\s*=\s*(\[[\s\S]*?\]);/);
if (pKS) console.log('KS:', pKS[1]);

const pXS = bundle.match(/XS\s*=\s*(\[[\s\S]*?\]);/);
if (pXS) console.log('XS:', pXS[1].slice(0, 500));

const pQS = bundle.match(/QS\s*=\s*(\[[\s\S]*?\]);/);
if (pQS) console.log('QS:', pQS[1]);

const pJS = bundle.match(/JS\s*=\s*(\[[\s\S]*?\]);/);
if (pJS) console.log('JS:', pJS[1]);

const posG4 = bundle.indexOf('g4=');
if (posG4 !== -1) {
  console.log('g4 snippet:', bundle.slice(posG4, posG4 + 600));
}
