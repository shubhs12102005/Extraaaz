const fs = require('fs');

const content = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');

// Look for occurrences of "VMS" or "Visitor check-in"
let idx = 0;
while ((idx = content.indexOf('Visitor check-in', idx)) !== -1) {
  console.log('Visitor check-in at:', idx);
  console.log(content.slice(Math.max(0, idx - 100), idx + 400));
  idx += 16;
}

// Check for "Product Preview"
idx = 0;
while ((idx = content.indexOf('Product Preview', idx)) !== -1) {
  console.log('Product Preview at:', idx);
  console.log(content.slice(Math.max(0, idx - 100), idx + 400));
  idx += 15;
}
