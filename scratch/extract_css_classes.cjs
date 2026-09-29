const fs = require('fs');
const css = fs.readFileSync('C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/23/content.md', 'utf8');

const classNames = ['.header', '.navbar-links', '.link', '.dropdown', '.mobile-dropdown', '.brand-accent-text', '.brand-accent-15', '.footer-section'];

for (const cls of classNames) {
  let idx = 0;
  while ((idx = css.indexOf(cls, idx)) !== null) {
    if (idx === -1) break;
    console.log(`Found ${cls} at ${idx}:`);
    console.log(css.slice(idx, idx + 200));
    idx += cls.length;
    break;
  }
}
