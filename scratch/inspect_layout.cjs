const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Find nS definition (the layout component)
const nSIdx = content.indexOf('nS=');
console.log('nS= at:', nSIdx);
if (nSIdx !== -1) {
  console.log(content.slice(nSIdx - 200, nSIdx + 1500));
}
