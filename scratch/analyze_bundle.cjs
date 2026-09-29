const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Search for route definitions
// React Router v6/v7 usually has route objects or JSX like {path:"...", element:...}
const regexes = [
  /path:\s*["']([^"']+)["']/g,
  /path:\s*`([^`]+)`/g,
  /to:\s*["']([^"']+)["']/g,
  /href:\s*["']([^"']+)["']/g,
];

const paths = new Set();
for (const re of regexes) {
  let m;
  while ((m = re.exec(content)) !== null) {
    if (m[1].startsWith('/') || m[1].endsWith('.php')) {
      paths.add(m[1]);
    }
  }
}

console.log('--- ALL URLS / PATHS DISCOVERED IN LIVE BUNDLE ---');
const sortedPaths = Array.from(paths).sort();
console.log(JSON.stringify(sortedPaths, null, 2));

// Search for navigation items and dropdown text
const navKeywords = ['Products', 'Solutions', 'Industries', 'About', 'Contact', 'Franchise', 'Resources', 'Blog'];
console.log('\n--- SEARCHING FOR NAVBAR / NAV ITEMS ---');
// Let's find occurrences of navigation arrays
