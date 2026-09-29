const fs = require('fs');
const path = require('path');

console.log('=== RUNNING COMPREHENSIVE VERIFICATION ===\n');

let allPassed = true;

// 1. Verify images on disk for Industries
const industryImages = [
  'public/images/industries/transport/silgate-industry-transport-hero.webp',
  'public/images/industries/restaurant/silgate-industry-restaurant-hero.webp',
  'public/images/industries/retail/silgate-industry-retail-hero.webp',
  'public/images/industries/manufacturing/silgate-industry-manufacturing-hero.webp',
  'public/images/industries/healthcare/silgate-industry-healthcare-hero.webp',
  'public/images/industries/hospitality/silgate-industry-hospitality-hero.webp',
  'public/images/industries/utilities/silgate-industry-utilities-hero.webp'
];

console.log('1. Checking Industry hero images:');
industryImages.forEach(img => {
  const exists = fs.existsSync(img);
  console.log(`  [${exists ? 'PASS' : 'FAIL'}] ${img}`);
  if (!exists) allPassed = false;
});

// 2. Check Business Operations Explore component
console.log('\n2. Checking BusinessOperationsExplore component:');
const bizOpsCode = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperationsExplore.jsx', 'utf8');
const bizModules = ['crm', 'vms', 'wms', 'utility', 'ecommerce', 'finance', 'analytics'];
bizModules.forEach(id => {
  const hasId = bizOpsCode.includes(`id: "${id}"`);
  console.log(`  [${hasId ? 'PASS' : 'FAIL'}] Business Module: ${id}`);
  if (!hasId) allPassed = false;
});

// 3. Check Home Industries Section component
console.log('\n3. Checking HomeIndustriesSection component:');
const indCode = fs.readFileSync('src/pages/HOME/HomeIndustriesSection.jsx', 'utf8');
const indModules = ['transport', 'restaurant', 'retail', 'manufacturing', 'healthcare', 'hospitality', 'utilities'];
indModules.forEach(id => {
  const hasId = indCode.includes(`id: '${id}'`);
  console.log(`  [${hasId ? 'PASS' : 'FAIL'}] Industry: ${id}`);
  if (!hasId) allPassed = false;
});

// 4. Check Silgate Contact Info
console.log('\n4. Checking Silgate Contact Info:');
const footerCode = fs.readFileSync('src/components/Footer/Footer.jsx', 'utf8');
const hasAddress = footerCode.includes('Road Number 8, SG Barve Rd, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604');
const hasEmail = footerCode.includes('manoj@silgatehiring.com');
const hasPhone = footerCode.includes('+91 81088 10916');
console.log(`  [${hasAddress ? 'PASS' : 'FAIL'}] Headquarters Address in Footer`);
console.log(`  [${hasEmail ? 'PASS' : 'FAIL'}] Email in Footer`);
console.log(`  [${hasPhone ? 'PASS' : 'FAIL'}] Phone in Footer`);
if (!hasAddress || !hasEmail || !hasPhone) allPassed = false;

// 5. Check Global Search for "extraaaz"
console.log('\n5. Searching for any "extraaaz" occurrences in src, public, index.html, README.md, package.json:');
let extraaazCount = 0;
function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'dist' && e.name !== 'scratch') {
        scan(full);
      }
    } else {
      if (/\.(jsx|js|html|json|md|css|svg)$/i.test(e.name)) {
        const text = fs.readFileSync(full, 'utf8');
        const matches = text.match(/extraaaz/gi);
        if (matches) {
          extraaazCount += matches.length;
          console.log(`  [FAIL] ${full} has ${matches.length} matches:`);
          matches.forEach(m => console.log('    ...', text.substring(Math.max(0, m.index - 25), m.index + 45).replace(/\n/g, ' ')));
        }
      }
    }
  }
}
scan('src');
scan('public');
scan('.');
console.log(`  Total extraaaz occurrences found: ${extraaazCount}`);
if (extraaazCount > 0) allPassed = false;

console.log('\n=============================================');
console.log(allPassed ? 'ALL VERIFICATION CHECKS PASSED PERFECTLY!' : 'SOME CHECKS FAILED!');
console.log('=============================================');
