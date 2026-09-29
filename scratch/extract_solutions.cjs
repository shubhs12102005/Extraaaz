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

extractTarget(',XC=', ',QC=', 'scratch/XC_component.js');
extractTarget(',QC=', ',JC=', 'scratch/QC_component.js');
extractTarget(',JC=', 'const lM=', 'scratch/JC_component.js');
extractTarget('const lM=', ',oM=', 'scratch/lM_component.js');
extractTarget(',oM=', ',cM=', 'scratch/oM_component.js');
extractTarget(',cM=', ',dM=', 'scratch/cM_component.js');
extractTarget(',dM=', ',uM=', 'scratch/dM_component.js');
extractTarget(',fM=', ',gM=', 'scratch/fM_component.js');
