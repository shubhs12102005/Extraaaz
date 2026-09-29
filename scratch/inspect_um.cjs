const fs = require('fs');
const js = fs.readFileSync('scratch/uM_component.js', 'utf8');

console.log('uM length:', js.length);
console.log('uM snippet:');
console.log(js.substring(0, 2500));
