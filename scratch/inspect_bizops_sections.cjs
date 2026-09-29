const fs = require('fs');

const content = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', 'utf8');

const sectionMatches = [...content.matchAll(/<section([^>]*)>/g)];
console.log('Sections count:', sectionMatches.length);
sectionMatches.forEach((m, i) => {
  console.log(`Section ${i+1}: ${m[1]}`);
});
