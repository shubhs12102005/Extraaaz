const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function extractBetween(startPattern, endPattern) {
  const startIdx = typeof startPattern === 'number' ? startPattern : js.indexOf(startPattern);
  if (startIdx === -1) {
    console.log('Start not found:', startPattern);
    return;
  }
  const endIdx = js.indexOf(endPattern, startIdx);
  if (endIdx === -1) {
    console.log('End not found after:', startIdx);
    return;
  }
  return js.substring(startIdx, endIdx);
}

// ok starts around 562656
console.log('ok snippet:');
console.log(js.substring(562656, 562656 + 4000));
