const fs = require('fs');
const css = fs.readFileSync('C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/23/content.md', 'utf8');

// Look for non-standard tailwind classes
console.log('CSS length:', css.length);
// Print the end of the CSS file where custom rules usually live
console.log('Last 2000 chars of CSS:');
console.log(css.slice(-2000));
