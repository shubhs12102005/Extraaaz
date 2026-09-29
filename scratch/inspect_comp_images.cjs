const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function inspectImages(componentName) {
  const p = js.indexOf(`,${componentName}=`);
  if (p === -1) {
    console.log(`Component ${componentName} not found`);
    return;
  }
  const chunk = js.substring(p, p + 50000);
  const re = /src:([a-zA-Z0-9_$]+|"[^"]+")/g;
  let match;
  console.log(`=== Images in ${componentName} ===`);
  while ((match = re.exec(chunk)) !== null) {
    const val = match[1];
    if (val.startsWith('"')) {
      console.log(`Direct src: ${val}`);
    } else {
      // Find where variable was assigned
      const vMatch = js.match(new RegExp(`${val}\\s*=\\s*"([^"]+)"`));
      if (vMatch) {
        console.log(`Var ${val} -> ${vMatch[1]}`);
      } else {
        console.log(`Var ${val} -> (could not resolve)`);
      }
    }
  }
}

const comps = process.argv.slice(2);
comps.forEach(inspectImages);
