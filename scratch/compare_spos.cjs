const fs = require('fs');

const localSPOS = fs.readFileSync('src/pages/PRODUCTS/SPOS.jsx', 'utf8');
const liveOk = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

console.log('localSPOS length:', localSPOS.length);
console.log('liveOk length:', liveOk.length);

// Check key differences in strings or images
const testStrings = [
  '/images/products/SPOS_5.webp',
  '/images/products/SPOS_11.webp',
  'sposplus-dashboard.webp',
  'Rs. 6000.00',
  'Rs. 4999.00',
  'Spice Garden Restaurant',
  'Easiest Restaurant Management Software'
];

testStrings.forEach(s => {
  console.log(`"${s}" in local:`, localSPOS.includes(s), `in live:`, liveOk.includes(s));
});
