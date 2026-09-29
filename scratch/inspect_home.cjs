const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const qSIdx = content.indexOf('qS=');
console.log('qS= at:', qSIdx);
if (qSIdx !== -1) {
  // Let's print around qS
  const snippet = content.slice(qSIdx, qSIdx + 5000);
  console.log(snippet);
}
