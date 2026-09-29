const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

['pM=', 'mM=', 'hM=', 'xM='].forEach(target => {
  const p = js.indexOf(target);
  if (p !== -1) {
    console.log(`=== ${target} at ${p} ===`);
    console.log(js.substring(p, p + 800));
  }
});
