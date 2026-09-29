const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'live_pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

for (const f of files) {
  const content = fs.readFileSync(path.join(pagesDir, f), 'utf8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[1];
    // Extract sections or h1, h2
    const headings = [...mainHtml.matchAll(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`\n=== PAGE: ${f} (${mainHtml.length} chars) ===`);
    console.log('HEADINGS (first 8):', headings.slice(0, 8));
  }
}
