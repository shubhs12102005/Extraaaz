const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');
const pos = html.indexOf('id="explore"');
const end = html.indexOf('</section>', pos);
const sectionHtml = html.slice(pos, end);

console.log('Explore section HTML snippet after figure:');
const figEnd = sectionHtml.indexOf('</figure>');
console.log(sectionHtml.slice(figEnd, figEnd + 1500));
