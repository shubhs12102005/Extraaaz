const fs = require('fs');

const content = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');

const regex = /aria-label="Open the ([^"]+) screen" class="border-border block border-b" href="([^"]+)"><div class="\[container-type:inline-size\] relative w-full overflow-hidden bg-slate-50" style="aspect-ratio:960 \/ 600">(.*?)<\/div><\/a>/g;

let match;
const screens = {};
while ((match = regex.exec(content)) !== null) {
  const name = match[1];
  const href = match[2];
  const innerHtml = match[3];
  screens[name] = { href, innerHtml };
  console.log(`Extracted screen for: ${name}, length: ${innerHtml.length}`);
}

// Also check the CRM screen from explore if not in regex
console.log('Total extracted:', Object.keys(screens));

fs.writeFileSync('scratch/bizops_screens_raw.json', JSON.stringify(screens, null, 2));
