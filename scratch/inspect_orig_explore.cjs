const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');
const pos = html.indexOf('id="explore"');
const end = html.indexOf('</section>', pos);
console.log('Explore section start to 4000:');
console.log(html.slice(pos, pos + 4000));
