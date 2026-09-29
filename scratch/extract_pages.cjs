const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function findDefinition(name) {
  const targets = [
    `const ${name}=`,
    `let ${name}=`,
    `var ${name}=`,
    `function ${name}(`,
    `,${name}=(`
  ];
  for (const t of targets) {
    let pos = 0;
    while ((pos = js.indexOf(t, pos)) !== -1) {
      console.log(`Found ${name} using "${t}" at ${pos}`);
      console.log(js.substring(pos, pos + 800));
      console.log('-----------------------------------------');
      return pos;
    }
  }
  // Try regex for name=
  let idx = 0;
  while ((idx = js.indexOf(`${name}=`, idx)) !== -1) {
    console.log(`Candidate ${name}= at ${idx}:`);
    console.log(js.substring(idx - 20, idx + 200));
    idx += name.length + 1;
    if (idx > 5000000) break;
  }
}

const names = process.argv.slice(2);
names.forEach(n => findDefinition(n));
