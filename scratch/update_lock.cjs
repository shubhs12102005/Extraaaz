const fs = require('fs');
let lock = fs.readFileSync('package-lock.json', 'utf8');
lock = lock.replace(/"name": "extraaaz"/g, '"name": "silgate-solutions"');
fs.writeFileSync('package-lock.json', lock, 'utf8');
console.log('package-lock.json updated');
