const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function findExactAssign(id) {
  const re = new RegExp(`[,;\\s]${id}\\s*=\\s*([a-zA-Z0-9_$]+(?:\\([^)]*\\))?)`, 'g');
  let m;
  while ((m = re.exec(js)) !== null) {
    console.log(m[0]);
  }
}

['_a', 'e4', 'Ai', 'lk', 'rk', 'sk', 'tk', 'ak', 'ik', 'nk'].forEach(id => {
  console.log(`--- ${id} ---`);
  findExactAssign(id);
});
