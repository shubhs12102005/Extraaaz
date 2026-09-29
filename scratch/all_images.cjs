const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Find all matches ending in png, jpg, jpeg, webp, svg
const regex = /["']([^"']+\.(png|jpg|jpeg|webp|svg))["']/g;
const matches = new Set();
let m;
while ((m = regex.exec(content)) !== null) {
  matches.add(m[1]);
}
console.log('All image-like strings in bundle:');
console.log(Array.from(matches));
