const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

const navIdx = content.indexOf('"become-a-channel-partner.php"');
console.log('--- ENTIRE ROUTES BLOCK ---');
console.log(content.slice(Math.max(0, navIdx - 2000), navIdx + 1200));
