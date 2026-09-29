const fs = require('fs');

const content = fs.readFileSync('scratch/chunks/1blzojerqrlmb.js', 'utf8');

const idx = content.indexOf('ez({className:e})');
console.log(content.slice(idx, idx + 4500));
