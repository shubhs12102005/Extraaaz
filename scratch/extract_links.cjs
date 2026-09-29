const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');
const links = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
const internal = [...new Set(links)].filter(l => l.startsWith('/') && !l.startsWith('//') && !l.startsWith('/_next') && !l.endsWith('.ico') && !l.endsWith('.svg') && !l.endsWith('.png') && !l.endsWith('.webp') && !l.endsWith('.woff2'));
console.log('Internal links on homepage:', internal.sort());

const companyMatch = html.match(/Company[\s\S]{1,2000}/);
if (companyMatch) {
  console.log('\nNear Company:\n', companyMatch[0].slice(0, 500));
}
