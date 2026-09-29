const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

const hbIdx = content.indexOf('hb=');
console.log('hb= at:', hbIdx);
if (hbIdx !== -1) {
  console.log(content.slice(hbIdx - 50, hbIdx + 200));
}

const mwIdx = content.indexOf('mw=');
console.log('mw= at:', mwIdx);
if (mwIdx !== -1) {
  console.log(content.slice(mwIdx - 50, mwIdx + 200));
}
