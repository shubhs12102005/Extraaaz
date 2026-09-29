const fs = require('fs');
const html = fs.readFileSync('scratch/live_pages/products_business-operations.html', 'utf8');
const p = html.indexOf('id="explore"');
const slice = html.slice(p, p + 8000);
const buttons = slice.match(/<button[^>]*>[\s\S]*?<\/button>/g) || [];
console.log('Buttons count in explore:', buttons.length);
buttons.forEach((b, i) => {
  const m = b.match(/<span[^>]*class="[^"]*font-semibold[^"]*"[^>]*>([^<]+)<\/span>/);
  console.log(i + 1, m ? m[1] : 'unknown');
});
