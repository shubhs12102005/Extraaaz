const fs = require('fs');
const js = fs.readFileSync('scratch/vk_component.js', 'utf8');

const p = js.indexOf('₹4,999');
if (p !== -1) {
  console.log(js.substring(p, p + 2500));
}
