const fs = require('fs');
const screens = JSON.parse(fs.readFileSync('scratch/bizops_screens_jsx.json', 'utf8'));

Object.keys(screens).forEach(k => {
  const s = screens[k];
  const startTagEnd = s.indexOf('>') + 1;
  const lastTagStart = s.lastIndexOf('</div>');
  const inner = s.slice(startTagEnd, lastTagStart);
  console.log(k, 'starts with:', inner.slice(0, 50), 'ends with:', inner.slice(-30));
});
