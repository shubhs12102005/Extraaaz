const fs = require('fs');

const sec2 = fs.readFileSync('scratch/bizops_section_2.jsx', 'utf8');

// Find where buttons are
const btnStart = sec2.indexOf('<button');
const btnEnd = sec2.lastIndexOf('</button>') + 9;
console.log('Buttons section length:', btnEnd - btnStart);

// Preview section
const prevSection = sec2.substring(btnEnd);
console.log('Preview section length:', prevSection.length);
console.log('Preview section start:\n', prevSection.slice(0, 1000));
console.log('Preview section end:\n', prevSection.slice(-1000));
