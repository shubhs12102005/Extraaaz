const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

let q7Idx = content.indexOf('Q7=');
let nextCompIdx = content.indexOf('x4=', q7Idx);
if (nextCompIdx === -1) nextCompIdx = content.indexOf('nS=', q7Idx);
fs.writeFileSync('scratch/full_footer.js', content.slice(q7Idx, nextCompIdx));
console.log('Saved full footer, length:', nextCompIdx - q7Idx);
