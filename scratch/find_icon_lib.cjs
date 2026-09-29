const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const p = js.indexOf('FaStar');
const p2 = js.indexOf('lucide');
const p3 = js.indexOf('createLucideIcon');
const p4 = js.indexOf('react-icons');
console.log('FaStar:', p, 'lucide:', p2, 'createLucideIcon:', p3, 'react-icons:', p4);
