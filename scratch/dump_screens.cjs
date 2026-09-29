const fs = require('fs');

const content = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');

const regex = /aria-label="Open the ([^"]+) screen"/g;
let match;
const screens = [];
while ((match = regex.exec(content)) !== null) {
  screens.push({ name: match[1], index: match.index });
}
console.log('Screens found:', screens);

// Let's dump each screen's structure
screens.forEach(s => {
  console.log(`\n=== Screen: ${s.name} ===`);
  const chunk = content.slice(s.index, s.index + 2500);
  console.log(chunk.slice(0, 1500));
});
