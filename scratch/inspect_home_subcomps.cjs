const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const subcomps = ['DS=', 'gS=', 'hS=', 'ti='];
for (const s of subcomps) {
  const idx = content.indexOf(s);
  console.log(`\n================== ${s} at ${idx} ==================`);
  if (idx !== -1) {
    console.log(content.slice(idx, idx + 2500));
  }
}
