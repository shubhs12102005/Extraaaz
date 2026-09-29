const fs = require('fs');

function checkPricing(file) {
  const code = fs.readFileSync(file, 'utf8');
  console.log(`=== Pricing in ${file} ===`);
  const matches = [...code.matchAll(/(?:₹|price|Pricing|Rs\.)/gi)];
  console.log(`Found ${matches.length} price references`);
  matches.slice(0, 5).forEach(m => {
    const idx = m.index;
    console.log(code.substring(idx - 20, idx + 80));
  });
}

checkPricing('scratch/Ik_component.js');
checkPricing('scratch/Fk_component.js');
