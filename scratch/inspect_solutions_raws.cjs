const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';

for (const name of ['CRMHRMSSolutions_raw.js', 'EcommerceSolutions_full.js', 'BharatBill_full.js', 'POSSolutionsIndia_full.js']) {
  const filePath = path.join(scratchDir, name);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\n=== ${name} (len: ${content.length}) ===`);
    console.log(content.slice(0, 500));
  }
}
