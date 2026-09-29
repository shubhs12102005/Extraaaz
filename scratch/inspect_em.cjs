const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

const p = js.indexOf(',EM=');
if (p !== -1) {
  console.log('EM code:');
  console.log(js.substring(p, p + 2500));
}
