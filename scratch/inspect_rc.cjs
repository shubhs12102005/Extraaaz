const fs = require('fs');
const js = fs.readFileSync('scratch/RC_component.js', 'utf8');

console.log('RC length:', js.length);
console.log('RC snippet:');
console.log(js.substring(0, 2000));
