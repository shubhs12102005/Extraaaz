const fs = require('fs');
const code = fs.readFileSync('scratch/home_code.js', 'utf8');

// Find the 11 sections in homeCode
// We can locate them by looking for the section backgrounds:
// 1. radial-gradient(ellipse 80% 55% at 50% -5%, #ede9fe 0%, ${Sn} 65%)
// 2. className:"py-20",style:{background:kn}
// 3. className:"py-24",style:{background:Sn}
// 4. className:"py-24 overflow-hidden",style:{background:kn}
// 5. className:"py-24",style:{background:Sn}
// 6. className:"py-24",style:{background:kn}
// 7. className:"py-24",style:{background:Sn}
// 8. className:"py-24",style:{background:kn}
// 9. className:"py-24",style:{background:Sn}
// 10. style:{background:kn}
// 11. radial-gradient(ellipse 90% 65% at 50% 50%, #fef9ee 0%, ${Sn} 75%)

// Let's dump all text and subcomponents in each section
const indices = [];
const markers = [
  'radial-gradient(ellipse 80% 55%',
  'className:"py-20",style:{background:kn}',
  'className:"py-24",style:{background:Sn}',
  'className:"py-24 overflow-hidden",style:{background:kn}',
  'className:"py-24",style:{background:Sn}',
  'className:"py-24",style:{background:kn}',
  'className:"py-24",style:{background:Sn}',
  'className:"py-24",style:{background:kn}',
  'className:"py-24",style:{background:Sn}',
  'style:{background:kn}',
  'radial-gradient(ellipse 90% 65%'
];

let lastIdx = 0;
markers.forEach((m, i) => {
  const idx = code.indexOf(m, lastIdx);
  console.log(`Marker ${i + 1} (${m.slice(0, 30)}): found at ${idx}`);
  if (idx !== -1) {
    indices.push(idx);
    lastIdx = idx + m.length;
  }
});
