const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const solutions = [
  { name: 'POSSolutions', tag: 'Zk=' },
  { name: 'POSSolutionsIndia', tag: 'aC=' },
  { name: 'CRMHRMSSolutions', tag: 'lM=' },
  { name: 'EcommerceSolutions', tag: 'XC=' },
  { name: 'Ecommerce', tag: 'QC=' },
  { name: 'BharatBill', tag: 'oM=' },
  { name: 'BharatBillSimple', tag: 'cM=' },
  { name: 'BharatBillERP', tag: 'dM=' },
  { name: 'Hyderabad', tag: 'fM=' }
];

solutions.forEach(s => {
  const idx = content.indexOf(s.tag);
  console.log(`\n================== ${s.name} (${s.tag}) at ${idx} ==================`);
  if (idx !== -1) {
    console.log(content.slice(idx, idx + 1000));
  }
});
