const fs = require('fs');

const content = fs.readFileSync('scratch/chunks/1blzojerqrlmb.js', 'utf8');

const idx = content.indexOf('Flagship Operating Systems');
console.log(content.slice(Math.max(0, idx - 400), idx + 3500));
