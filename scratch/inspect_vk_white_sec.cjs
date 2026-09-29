const fs = require('fs');
const js = fs.readFileSync('scratch/vk_component.js', 'utf8');

const p = js.indexOf('py-24 bg-white');
if (p !== -1) {
  console.log(js.substring(p, p + 2000));
}
