const fs = require('fs');
const js = fs.readFileSync('scratch/vk_component.js', 'utf8');

// Find pricing or other sections in vk
const p = js.indexOf('pricing-section');
if (p !== -1) {
  console.log('pricing section in vk:');
  console.log(js.substring(p, p + 2500));
}
