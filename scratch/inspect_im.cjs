const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

const p = js.indexOf('IM=');
if (p !== -1) {
  console.log('IM definition:');
  console.log(js.substring(p, p + 3000));
}
