const fs = require('fs');

let content = fs.readFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', 'utf8');

// 1. Add import
if (!content.includes('BusinessOperationsExplore')) {
  content = content.replace(
    "import React from 'react';",
    "import React from 'react';\nimport BusinessOperationsExplore from './BusinessOperationsExplore';"
  );
}

// 2. Find section 2
const sec2Start = content.indexOf('id="explore"');
const start = content.lastIndexOf('<section', sec2Start);
const end = content.indexOf('</section>', sec2Start) + 10;

console.log('Replacing section 2 from', start, 'to', end);
const before = content.slice(0, start);
const after = content.slice(end);

content = before + '<BusinessOperationsExplore />' + after;

fs.writeFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', content);
console.log('Successfully updated BusinessOperations.jsx with BusinessOperationsExplore!');
