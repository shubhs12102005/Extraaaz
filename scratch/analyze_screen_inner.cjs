const fs = require('fs');

const screens = JSON.parse(fs.readFileSync('scratch/bizops_screens_raw.json', 'utf8'));

for (const [key, val] of Object.entries(screens)) {
  console.log(`\n=== MODULE: ${key} ===`);
  console.log('href:', val.href);
  console.log('length:', val.innerHtml.length);
  // Let's see the main content area (after the header and sidebar)
  const mainIdx = val.innerHtml.indexOf('<div class="flex min-w-0 flex-1 flex-col">');
  if (mainIdx !== -1) {
    console.log('Main area snippet:\n', val.innerHtml.slice(mainIdx, mainIdx + 600));
  }
}
