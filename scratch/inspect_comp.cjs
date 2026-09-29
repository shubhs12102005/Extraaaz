const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Function to find function definition like function ok( or var ok= or const ok= or ok=
function inspectComponent(name) {
  const patterns = [
    new RegExp(`function ${name}\\s*\\(`, 'g'),
    new RegExp(`const ${name}\\s*=\\s*\\(`, 'g'),
    new RegExp(`var ${name}\\s*=\\s*\\(`, 'g'),
    new RegExp(`${name}\\s*=\\s*\\(`, 'g')
  ];
  for (const p of patterns) {
    const match = p.exec(js);
    if (match) {
      console.log(`=== Found ${name} at index ${match.index} ===`);
      console.log(js.substring(match.index, match.index + 3000));
      return;
    }
  }
  console.log(`=== Could not find definition for ${name} ===`);
}

const args = process.argv.slice(2);
args.forEach(inspectComponent);
