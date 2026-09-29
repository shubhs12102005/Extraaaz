const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const ikStart = js.indexOf(',Ik=');
const chunk = js.substring(ikStart - 8000, ikStart);
let p = 0;
while ((p = chunk.indexOf('price:', p)) !== -1) {
  console.log(chunk.substring(p - 80, p + 200));
  p += 6;
}
