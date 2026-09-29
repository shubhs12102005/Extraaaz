const fs = require('fs');
const code = fs.readFileSync('scratch/pos_solutions_india.js', 'utf8');

// Title and meta
const titleMatch = code.match(/<title>([^<]+)<\/title>|children:["']([^"']*(?:POS|Billing|Software)[^"']*)["']/);
console.log('Title match:', titleMatch ? titleMatch[0] : null);

// Headings
const h2Matches = [...code.matchAll(/e\.jsx(?:s)?\(["']h[1-3]["'],\{[^}]*children:([^}]+)\}/g)];
console.log('Headings found:');
h2Matches.slice(0, 15).forEach(m => console.log('-', m[1].slice(0, 100)));

// Section classes
const secClasses = [...code.matchAll(/className:["']([^"']*section[^"']*)["']/g)];
console.log('\nSections:');
secClasses.forEach(s => console.log('*', s[1]));
