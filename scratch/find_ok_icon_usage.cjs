const fs = require('fs');
const js = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

['_a', 'ne', 'e4', 'Ai', 'nc'].forEach(tag => {
  let idx = 0;
  while ((idx = js.indexOf(tag, idx)) !== -1) {
    console.log(`Snippet around ${tag} at ${idx}:`);
    console.log(js.substring(idx - 20, idx + 100));
    idx += tag.length + 1;
    break;
  }
});
