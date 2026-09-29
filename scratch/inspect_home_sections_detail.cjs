const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  const main = mainMatch[1];
  const sections = [...main.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
  console.log(`Found ${sections.length} sections in home.html:`);
  sections.forEach((s, idx) => {
    const heading = s[1].match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/i);
    const hText = heading ? heading[1].replace(/<[^>]+>/g, '').trim() : 'No heading';
    console.log(`Section ${idx + 1}: length ${s[0].length}, heading: "${hText}"`);
  });
}
