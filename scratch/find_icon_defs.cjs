const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function searchDef(name) {
  const p1 = js.indexOf(`,${name}=`);
  const p2 = js.indexOf(`const ${name}=`);
  const p3 = js.indexOf(`let ${name}=`);
  const p4 = js.indexOf(`var ${name}=`);
  const idx = Math.max(p1, p2, p3, p4);
  console.log(`Def for ${name}:`);
  if (idx !== -1) {
    console.log(js.substring(idx - 20, idx + 120));
  } else {
    // regex
    const m = js.match(new RegExp(`[\\s,;]${name}\\s*=\\s*[^,;]+`));
    if (m) console.log('Regex match:', m[0]);
    else console.log('None found');
  }
}

['_a', 'ne', 'e4', 'Ai'].forEach(searchDef);
