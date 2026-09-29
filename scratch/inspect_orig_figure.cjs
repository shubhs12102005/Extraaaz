const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');
const pos = html.indexOf('id="explore"');
const prevPos = html.indexOf('<figure', pos);
console.log(html.slice(prevPos, prevPos + 4000));
