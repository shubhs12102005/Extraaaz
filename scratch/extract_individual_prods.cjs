const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const prods = {
  SPOS: 'ok=',
  BharatPOS: 'vk=',
  ExtraaazPOS: 'Ik=',
  Emark: 'Fk='
};

for (const [name, pattern] of Object.entries(prods)) {
  const idx = content.indexOf(pattern);
  console.log(`${name} (${pattern}) at ${idx}`);
  if (idx !== -1) {
    const snippet = content.slice(idx, idx + 8000);
    fs.writeFileSync(`scratch/prod_${name}.js`, snippet);
    console.log(`Saved scratch/prod_${name}.js (${snippet.length} bytes)`);
  }
}
