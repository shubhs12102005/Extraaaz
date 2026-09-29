const fs = require('fs');
const d = JSON.parse(fs.readFileSync('scratch/bizops_screens_jsx.json'));
Object.keys(d).forEach(k => {
  const prefix = d[k].slice(0, 180);
  console.log(k, '-->', prefix);
});
