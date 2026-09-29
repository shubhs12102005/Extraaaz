const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Find where react-icons or lucide icons are imported
// In bundle, react-icons are typically functions that return SVG with GenIcon or similar
const genIconIdx = js.indexOf('GenIcon');
console.log('GenIcon present?', genIconIdx !== -1);
if (genIconIdx !== -1) {
  console.log(js.substring(genIconIdx - 200, genIconIdx + 300));
}
