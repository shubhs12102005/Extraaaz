const fs = require('fs');
const code = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', 'utf8');
const regex = /style={{"width": "960px", "height": "600px", "transformOrigin": "top left"}}/g;
const count = (code.match(regex) || []).length;
console.log('Count of unscaled preview divs in BusinessOperations.jsx:', count);
