const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const start = js.indexOf(',ok=');
const end = js.indexOf(',vk=', start);
console.log('ok length:', end - start);
fs.writeFileSync('scratch/ok_component_exact.js', js.substring(start, end));
console.log('Written ok component to scratch/ok_component_exact.js');
