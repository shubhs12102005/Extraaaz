const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

// Let's create src/data/industryConfigs.js with the authentic data for all 6 industries.
// Let's inspect IM, BM, PM, DM, FM, and EM.

function extractObj(startPattern, endPattern) {
  const p1 = js.indexOf(startPattern);
  if (p1 === -1) return '';
  const p2 = js.indexOf(endPattern, p1);
  return js.substring(p1, p2 !== -1 ? p2 : p1 + 5000);
}

console.log('IM:');
console.log(extractObj('IM={', 'BM={').substring(0, 1000));
console.log('BM:');
console.log(extractObj('BM={', 'PM={').substring(0, 1000));
console.log('PM:');
console.log(extractObj('PM={', 'DM={').substring(0, 1000));
console.log('DM:');
console.log(extractObj('DM={', 'FM={').substring(0, 1000));
console.log('FM:');
console.log(extractObj('FM={', ',GM=').substring(0, 1000));
