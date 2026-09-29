const fs = require('fs');
const path = require('path');
const scratchDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b64fd122-e400-4065-af30-ab3e59609a36\\scratch';

for (const name of ['BharatPOS_raw.js', 'ExtraaazPOS_raw.js', 'Emark_raw.js', 'POSSolutions_raw.js']) {
  const filePath = path.join(scratchDir, name);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\n=== ${name} (len: ${content.length}) ===`);
    console.log(content.slice(0, 500));
  }
}
