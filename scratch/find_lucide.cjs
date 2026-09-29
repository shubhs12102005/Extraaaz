const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

['Check', 'Star', 'ChevronDown', 'Phone', 'ArrowRight'].forEach(name => {
  const p = js.indexOf(`"${name}"`);
  if (p !== -1) {
    console.log(`"${name}" at ${p}:`, js.substring(p - 30, p + 100));
  }
});
