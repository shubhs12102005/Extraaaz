const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const vkStart = js.indexOf(',vk=');
// Look at text before vk= to see its data arrays
console.log('Code before vk:');
console.log(js.substring(vkStart - 4000, vkStart));

console.log('Code inside vk:');
console.log(js.substring(vkStart, vkStart + 2500));
