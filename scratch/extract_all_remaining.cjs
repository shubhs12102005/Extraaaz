const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function extractTarget(startStr, endStr, outPath) {
  const start = js.indexOf(startStr);
  const end = js.indexOf(endStr, start);
  console.log(`${startStr} -> ${endStr}: start=${start}, end=${end}, len=${end - start}`);
  if (start !== -1 && end !== -1) {
    fs.writeFileSync(outPath, js.substring(start, end));
    console.log(`Saved to ${outPath}`);
  }
}

extractTarget(',ek=', ',ok=', 'scratch/ek_component.js');
extractTarget(',g4=', ',ek=', 'scratch/g4_component.js');
extractTarget(',NC=', ',TC=', 'scratch/NC_component.js');
extractTarget(',TC=', ',RC=', 'scratch/TC_component.js');
extractTarget(',RC=', ',VC=', 'scratch/RC_component.js');
extractTarget(',VC=', ',HC=', 'scratch/VC_component.js');
extractTarget(',HC=', ',UC=', 'scratch/HC_component.js');
extractTarget(',UC=', ',XC=', 'scratch/UC_component.js');
extractTarget(',uM=', ',fM=', 'scratch/uM_component.js');
extractTarget(',gM=', ',bM=', 'scratch/gM_component.js');
extractTarget(',bM=', 'function SM(', 'scratch/bM_component.js');
extractTarget('function SM(', ',EM=', 'scratch/SM_component.js');
extractTarget(',hC=', ',gC=', 'scratch/hC_component.js');
extractTarget(',gC=', ',NC=', 'scratch/gC_component.js');
