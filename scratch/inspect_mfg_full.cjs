const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

const p = js.indexOf(',EM=');
console.log('Snippet before EM:');
console.log(js.substring(p - 3000, p));
