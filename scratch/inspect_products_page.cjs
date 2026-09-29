const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const emIdx = content.indexOf('eM=');
console.log('eM= at:', emIdx);
if (emIdx !== -1) {
  const snippet = content.slice(emIdx, emIdx + 5000);
  fs.writeFileSync('scratch/products_page_code.js', snippet);
  console.log('Saved products page code, length:', snippet.length);
}
