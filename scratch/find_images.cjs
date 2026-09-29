const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function findVar(name) {
  const p = js.indexOf(name + '="');
  if (p !== -1) {
    console.log(name, js.substring(p, p + 60));
  } else {
    console.log(name, 'not found with ="');
    const p2 = js.indexOf(name + '=');
    if (p2 !== -1) {
      console.log(name, js.substring(p2, p2 + 60));
    }
  }
}

['ik', 'nk', 'tk'].forEach(findVar);
