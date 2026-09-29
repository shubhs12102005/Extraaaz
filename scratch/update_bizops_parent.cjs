const fs = require('fs');
let code = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', 'utf8');

const target1 = 'style={{"width": "960px", "height": "600px", "transformOrigin": "top left"}}';
const replacement1 = 'style={{"width": "960px", "height": "600px", "transformOrigin": "top left", "transform": "scale(tan(atan2(100cqw, 960px)))"}}';

const count1 = (code.match(new RegExp(target1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log('Target 1 matches:', count1);

code = code.replaceAll(target1, replacement1);

const target2 = 'style={{"aspectRatio": "960 / 600"}}';
const replacement2 = 'style={{"aspectRatio": "960 / 600", "containerType": "inline-size"}}';

const count2 = (code.match(new RegExp(target2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log('Target 2 matches:', count2);

code = code.replaceAll(target2, replacement2);

fs.writeFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', code);
console.log('Successfully updated BusinessOperations.jsx');
