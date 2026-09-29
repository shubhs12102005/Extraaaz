const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const p = js.indexOf('function Bl(');
const p2 = js.indexOf(',Bl=');
const p3 = js.indexOf('const Bl=');
console.log('Bl indices:', p, p2, p3);
const idx = Math.max(p, p2, p3);
if (idx !== -1) {
  console.log(js.substring(idx, idx + 2500));
}
