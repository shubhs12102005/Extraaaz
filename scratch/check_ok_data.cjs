const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Find where ok is defined and what variables it references
const okIdx = js.indexOf(',ok=');
const okChunk = js.substring(okIdx - 15000, okIdx + 20000);

// Find variable definitions like const lk= or const rk= or const Qs=
console.log('Searching around ok...');
const vars = ['rk', 'lk', 'Qs', 'ak', 'ik'];
vars.forEach(v => {
  const p = okChunk.indexOf(`${v}=[`);
  if (p !== -1) {
    console.log(`Found ${v}:`);
    console.log(okChunk.substring(p, p + 1500));
    console.log('-------------------------');
  }
});
