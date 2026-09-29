const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const aCIdx = content.indexOf('aC=');
// Search for the end of aC
// Usually ends with return e.jsxs(e.Fragment, ... )};
let openBraces = 0;
let started = false;
let endIdx = aCIdx;

for (let i = aCIdx; i < content.length; i++) {
  if (content[i] === '{') {
    openBraces++;
    started = true;
  } else if (content[i] === '}') {
    openBraces--;
    if (started && openBraces === 0) {
      endIdx = i + 1;
      break;
    }
  }
}

console.log('aC starts at:', aCIdx, 'ends at:', endIdx, 'length:', endIdx - aCIdx);
fs.writeFileSync('scratch/pos_solutions_india_exact.js', content.slice(aCIdx, endIdx));
console.log('Saved exact aC code');
