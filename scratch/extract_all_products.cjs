const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

function extractComponent(name, nextName, outPath) {
  const start = js.indexOf(`,${name}=`);
  const end = js.indexOf(`,${nextName}=`, start);
  console.log(`${name} start: ${start}, end: ${end}, len: ${end - start}`);
  if (start !== -1 && end !== -1) {
    fs.writeFileSync(outPath, js.substring(start, end));
    console.log(`Saved ${name} to ${outPath}`);
  }
}

extractComponent('vk', 'Ik', 'scratch/vk_component.js');
extractComponent('Ik', 'Fk', 'scratch/Ik_component.js');
extractComponent('Fk', 'Zk', 'scratch/Fk_component.js');
extractComponent('Zk', 'aC', 'scratch/Zk_component.js');
