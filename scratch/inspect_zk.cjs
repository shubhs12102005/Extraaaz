const fs = require('fs');
const js = fs.readFileSync('scratch/Zk_component.js', 'utf8');

console.log('Zk length:', js.length);
console.log('Zk snippet:');
console.log(js.substring(0, 2000));
