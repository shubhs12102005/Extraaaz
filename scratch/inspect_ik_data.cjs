const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const ikStart = js.indexOf(',Ik=');
console.log('Code before Ik:');
console.log(js.substring(ikStart - 4000, ikStart));
