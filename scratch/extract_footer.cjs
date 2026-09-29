const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');

const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  const footerEnd = html.indexOf('</footer>', footerIdx);
  console.log('FOOTER FOUND:');
  console.log(html.slice(footerIdx, footerEnd + 9));
} else {
  console.log('Footer not found in home.html');
}
