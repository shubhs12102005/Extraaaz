const fs = require('fs');
const js = fs.readFileSync('scratch/Fk_component.js', 'utf8');

const p = js.indexOf('Hk=[');
if (p !== -1) {
  console.log('Hk:', js.substring(p, p + 2500));
} else {
  // search for Hk
  const p2 = js.indexOf('Hk');
  console.log('Hk index:', p2);
  console.log(js.substring(p2 - 200, p2 + 2500));
}
