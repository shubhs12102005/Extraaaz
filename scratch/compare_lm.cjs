const fs = require('fs');

const local = fs.readFileSync('src/pages/SOLUTIONS/CRMHRMSSolutions.jsx', 'utf8');
const live = fs.readFileSync('scratch/lM_component.js', 'utf8');

console.log('local length:', local.length);
console.log('live length:', live.length);

// Extract section classes from live lM
const liveSections = [...live.matchAll(/className:\"([^\"]*(?:section|container|hero|meta|crm|hrms|vms|tracking|features|cards|cta|form)[^\"]*)\"/g)].map(m => m[1]);
console.log('Live lM section classes:', [...new Set(liveSections)]);
