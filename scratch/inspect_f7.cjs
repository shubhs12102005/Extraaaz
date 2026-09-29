const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

const f7Idx = content.indexOf('F7=');
if (f7Idx !== -1) {
  console.log('F7 definition:');
  console.log(content.slice(f7Idx - 50, f7Idx + 300));
}
