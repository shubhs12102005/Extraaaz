const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const okStart = js.indexOf(',ok=');
const okChunk = js.substring(okStart, okStart + 3000);
console.log('Beginning of ok:');
console.log(okChunk);
