const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const blIdx = content.indexOf('Bl=');
console.log('Bl= at', blIdx);
if (blIdx !== -1) {
  console.log(content.slice(blIdx, blIdx + 1500));
}

// Find configs for EM, OM, VM, LM, HM, GM
const ind = ['EM=', 'OM=', 'VM=', 'LM=', 'HM=', 'GM='];
ind.forEach(k => {
  const idx = content.indexOf(k);
  console.log(`${k} at ${idx}`);
  if (idx !== -1) {
    console.log(content.slice(Math.max(0, idx - 400), idx + 100));
  }
});
