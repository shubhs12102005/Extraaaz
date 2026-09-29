const fs = require('fs');
const code = fs.readFileSync('scratch/full_navbar.js', 'utf8');

// Find all JSX elements or strings
const matches = code.match(/["']([^"']{3,50})["']/g);
const unique = Array.from(new Set(matches));
console.log('Strings in navbar:');
console.log(unique.filter(s => !s.startsWith('"M') && !s.includes('calc')));
