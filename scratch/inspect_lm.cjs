const fs = require('fs');
const js = fs.readFileSync('scratch/lM_component.js', 'utf8');

console.log('lM length:', js.length);
console.log('lM snippet:');
console.log(js.substring(0, 2000));
