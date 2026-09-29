const fs = require('fs');
const js = fs.readFileSync('scratch/Fk_component.js', 'utf8');

const p = js.indexOf('Ananya Roy');
if (p !== -1) {
  console.log(js.substring(p, p + 1500));
}
