const fs = require('fs');
const path = require('path');

function searchJSX(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) searchJSX(full);
    else if (f.endsWith('.jsx')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('Built around your industry')) {
        console.log('Built around your industry in:', full);
      }
      if (content.includes('aria-pressed')) {
        console.log('aria-pressed in:', full);
      }
      if (content.includes('Modules in daily use')) {
        console.log('Modules in daily use in:', full);
      }
    }
  }
}

searchJSX('src');
