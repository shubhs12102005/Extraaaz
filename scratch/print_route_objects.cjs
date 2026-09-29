const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Find where children: [ ... ] is defined inside router
const idx = js.indexOf('path:"products"');
if (idx !== -1) {
  console.log('Snippet around products route:');
  console.log(js.substring(idx - 200, idx + 2500));
}
