const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

let g7Idx = content.indexOf('G7=');
fs.writeFileSync('scratch/navbar_code.js', content.slice(g7Idx, g7Idx + 8000));
console.log('Saved navbar code to scratch/navbar_code.js, length:', 8000);
