const fs = require('fs');

const screens = JSON.parse(fs.readFileSync('scratch/bizops_screens_raw.json', 'utf8'));

// Let's inspect the JSX structure for each module screen
for (const [key, val] of Object.entries(screens)) {
  console.log(`Key: ${key}`);
  // Replace EXTRAAAZ with SILGATE SOLUTIONS in innerHtml
  let html = val.innerHtml;
  html = html.replace(/EXTRAAAZ/g, 'SILGATE SOLUTIONS');
  html = html.replace(/Extraaaz/g, 'Silgate Solutions');
  html = html.replace(/extraaaz/g, 'silgate');
  html = html.replace(/app\.extraaaz\.com/g, 'app.silgate.com');
  console.log(`Key ${key} cleaned length: ${html.length}`);
}
