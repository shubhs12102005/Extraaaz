const fs = require('fs');
const code = fs.readFileSync('scratch/full_navbar.js', 'utf8');

// Let's print the entire component structure
console.log(code.slice(0, 3000));
console.log('\n--- PART 2 ---');
console.log(code.slice(3000, 6000));
console.log('\n--- PART 3 ---');
console.log(code.slice(6000, 9000));
console.log('\n--- PART 4 ---');
console.log(code.slice(9000, 12000));
