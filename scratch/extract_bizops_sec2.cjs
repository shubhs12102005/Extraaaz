const fs = require('fs');

const content = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', 'utf8');

const sec2Start = content.indexOf('id="explore"');
const start = content.lastIndexOf('<section', sec2Start);
const end = content.indexOf('</section>', sec2Start) + 10;

console.log('Section 2 length:', end - start);
fs.writeFileSync('scratch/bizops_section_2.jsx', content.substring(start, end));
console.log('Saved to scratch/bizops_section_2.jsx');
