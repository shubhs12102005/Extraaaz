const fs = require('fs');
const js = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

const p = js.indexOf('u(103)');
if (p !== -1) {
  console.log(js.substring(p, p + 2500));
}
