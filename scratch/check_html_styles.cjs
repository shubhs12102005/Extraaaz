const fs = require('fs');
const html = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');
const regex = /style="([^"]*960px[^"]*)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[1]);
}
