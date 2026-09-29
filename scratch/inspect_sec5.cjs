const fs = require('fs');

const html = fs.readFileSync('scratch/live_pages/home.html', 'utf8');

const sec5Idx = html.indexOf('Purpose-built systems for the way the work actually runs.');
if (sec5Idx !== -1) {
  console.log(html.slice(sec5Idx - 200, sec5Idx + 2500));
}
