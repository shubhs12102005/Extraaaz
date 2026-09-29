const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

// Find where gS is defined
const gSIdx = content.indexOf('gS=');
console.log('gS at', gSIdx);
// Let's look before gS
console.log('Before gS:');
console.log(content.slice(Math.max(0, gSIdx - 3500), gSIdx));
