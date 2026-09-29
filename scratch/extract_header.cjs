const fs = require('fs');

const content = fs.readFileSync('scratch/chunks/1blzojerqrlmb.js', 'utf8');

const idx = content.indexOf('<header');
if (idx !== -1) {
  console.log(content.slice(idx - 200, idx + 1500));
} else {
  // search for "sticky top-0"
  const idx2 = content.indexOf('sticky top-0');
  console.log(content.slice(idx2 - 200, idx2 + 1500));
}
