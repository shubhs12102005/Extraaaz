const fs = require('fs');

let content = fs.readFileSync('src/pages/HOME/Home.jsx', 'utf8');

// 1. Add import
if (!content.includes('HomeIndustriesSection')) {
  content = content.replace(
    "import React from 'react';",
    "import React from 'react';\nimport HomeIndustriesSection from './HomeIndustriesSection';"
  );
}

// 2. Find the industry section
const pos = content.indexOf('Built around your industry');
if (pos === -1) {
  console.error('Could not find Built around your industry');
  process.exit(1);
}

const start = content.lastIndexOf('<section', pos);
const end = content.indexOf('</section>', pos) + 10;

console.log('Replacing Home industry section from', start, 'to', end);
const before = content.slice(0, start);
const after = content.slice(end);

content = before + '<HomeIndustriesSection />' + after;

fs.writeFileSync('src/pages/HOME/Home.jsx', content);
console.log('Successfully updated Home.jsx with HomeIndustriesSection!');
