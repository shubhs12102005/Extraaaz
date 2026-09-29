const fs = require('fs');
const path = require('path');
const code = fs.readFileSync('scratch/home_code.js', 'utf8');

const markers = [
  669,
  5377,
  6520,
  9250,
  12740,
  14459,
  16444,
  18505,
  19034,
  25380,
  26209,
  code.length
];

const outDir = path.join(__dirname, 'home_sections');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (let i = 0; i < markers.length - 1; i++) {
  const sec = code.slice(markers[i], markers[i + 1]);
  fs.writeFileSync(path.join(outDir, `section_${i + 1}.js`), sec);
  console.log(`Saved section_${i + 1}.js (${sec.length} bytes)`);
}
