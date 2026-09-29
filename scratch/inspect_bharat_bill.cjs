const fs = require('fs');

['scratch/oM_component.js', 'scratch/cM_component.js', 'scratch/dM_component.js', 'scratch/fM_component.js'].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  console.log(`=== ${file} (len: ${code.length}) ===`);
  const titleMatch = code.match(/title",\{children:"([^"]+)"\}/);
  if (titleMatch) console.log('Title:', titleMatch[1]);
  const descMatch = code.match(/name:"description",content:"([^"]+)"/);
  if (descMatch) console.log('Desc:', descMatch[1]);
});
