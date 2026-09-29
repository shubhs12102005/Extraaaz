const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

function extractJsonLike(startStr, endStr) {
  const p1 = js.indexOf(startStr);
  if (p1 === -1) return '';
  const p2 = js.indexOf(endStr, p1);
  return js.substring(p1, p2);
}

fs.writeFileSync('scratch/cfg_im.txt', extractJsonLike('IM={', 'BM={'));
fs.writeFileSync('scratch/cfg_bm.txt', extractJsonLike('BM={', 'PM={'));
fs.writeFileSync('scratch/cfg_pm.txt', extractJsonLike('PM={', 'DM={'));
fs.writeFileSync('scratch/cfg_dm.txt', extractJsonLike('DM={', 'FM={'));
fs.writeFileSync('scratch/cfg_fm.txt', extractJsonLike('FM={', ',GM='));

console.log('Saved all 5 config text files');
