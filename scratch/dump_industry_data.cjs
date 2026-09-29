const fs = require('fs');
const path = require('path');

const chunkFile = path.join(__dirname, 'chunks', '3efcas6dme4v8.js');
const content = fs.readFileSync(chunkFile, 'utf8');

const idx45020 = content.indexOf('45020,');
if (idx45020 !== -1) {
  console.log('Found 45020:');
  const slice = content.slice(idx45020, idx45020 + 8000);
  console.log(slice);
}
