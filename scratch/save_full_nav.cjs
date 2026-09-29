const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

let g7Idx = content.indexOf('G7=');
let nextCompIdx = content.indexOf('Q7=', g7Idx);
console.log('Distance from G7 to Q7:', nextCompIdx - g7Idx);
fs.writeFileSync('scratch/full_navbar.js', content.slice(g7Idx, nextCompIdx));
console.log('Saved full navbar');
