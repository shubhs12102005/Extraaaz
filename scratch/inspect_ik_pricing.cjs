const fs = require('fs');
const js = fs.readFileSync('scratch/Ik_component.js', 'utf8');

const p = js.indexOf('pricing');
if (p !== -1) {
  console.log(js.substring(p - 50, p + 2500));
} else {
  // search for ₹ or price
  const p2 = js.indexOf('₹');
  console.log('₹ in Ik:', p2);
  if (p2 !== -1) {
    console.log(js.substring(p2 - 50, p2 + 1000));
  }
}
