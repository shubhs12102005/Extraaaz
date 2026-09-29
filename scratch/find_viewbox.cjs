const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

let idx = 0;
let count = 0;
while ((idx = js.indexOf('viewBox:', idx)) !== -1) {
  console.log('viewBox at', idx, js.substring(idx - 30, idx + 100));
  idx += 10;
  count++;
  if (count > 5) break;
}
