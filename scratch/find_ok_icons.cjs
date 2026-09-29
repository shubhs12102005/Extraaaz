const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const okRaw = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

// Find all capitalized or 2-letter components like e.jsx(XX,{
const compRe = /e\.jsxs?\(([A-Za-z0-9_$]+),\{/g;
let m;
const comps = new Set();
while ((m = compRe.exec(okRaw)) !== null) {
  comps.add(m[1]);
}
console.log('Components in ok:', Array.from(comps));

// Find what each one resolves to in live_full.js
Array.from(comps).forEach(c => {
  if (['e', 'm', 'Ne', 'k'].includes(c)) return;
  // search for c= or function c
  const p = js.indexOf(`${c}=`);
  if (p !== -1) {
    console.log(`${c} ->`, js.substring(p, p + 100));
  } else {
    console.log(`${c} not found with =`);
  }
});
