const fs = require('fs');

// We have the raw JS bundle in scratch/live_full.js
// Let's create a converter that parses e.jsx and e.jsxs calls and outputs clean JSX or clean React code.
// Since React components can also directly use React.createElement or clean JSX:
// Let's test formatting ok component.

const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Let's see all dependencies of ok:
const okStart = js.indexOf(',ok=');
const okEnd = js.indexOf(',vk=', okStart);
const okRaw = js.substring(okStart, okEnd);

fs.writeFileSync('scratch/ok_raw.js', okRaw);
console.log('okRaw saved, size:', okRaw.length);
