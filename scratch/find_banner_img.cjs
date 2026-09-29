const fs = require('fs');
const js = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

const p = js.indexOf('Take Your Restaurant Management Anywhere');
if (p !== -1) {
  console.log(js.substring(p, p + 1500));
}
