const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');

// Search for Products mega menu text in home.html
console.log('Includes "Extraaaz Business OS":', html.includes('Extraaaz Business OS'));
console.log('Includes "FLAGSHIP OPERATING SYSTEMS":', html.includes('FLAGSHIP OPERATING SYSTEMS'));
console.log('Includes "Logistics OS":', html.includes('Logistics OS'));
console.log('Includes "CRM":', html.includes('CRM'));
console.log('Includes "Transport & Logistics":', html.includes('Transport & Logistics'));
console.log('Includes "Unify operations":', html.includes('Unify operations'));
console.log('Includes "About":', html.includes('About'));

// Find all script tags in home.html
const scripts = [...html.matchAll(/src=["'](\/_next\/static\/chunks\/[^"']+)["']/g)].map(m => m[1]);
console.log('Scripts:', scripts);
