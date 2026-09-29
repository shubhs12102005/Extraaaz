const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Find G7= (Navbar)
let g7Idx = content.indexOf('G7=');
console.log('G7= at:', g7Idx);
if (g7Idx !== -1) {
  // Let's print around G7
  console.log('--- NAVBAR COMPONENT (G7) ---');
  console.log(content.slice(g7Idx - 100, g7Idx + 4500));
}

// Find Q7= (Footer)
let q7Idx = content.indexOf('Q7=');
console.log('Q7= at:', q7Idx);
if (q7Idx !== -1) {
  console.log('--- FOOTER COMPONENT (Q7) ---');
  console.log(content.slice(q7Idx - 100, q7Idx + 4500));
}
