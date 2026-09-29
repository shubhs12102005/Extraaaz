const fs = require('fs');

console.log('Inspecting oM, cM, dM:');
const om = fs.readFileSync('scratch/oM_component.js', 'utf8');
const cm = fs.readFileSync('scratch/cM_component.js', 'utf8');
const dm = fs.readFileSync('scratch/dM_component.js', 'utf8');

console.log('oM length:', om.length);
console.log('cM length:', cm.length);
console.log('dM length:', dm.length);

// Let's see the main heading and structure of oM
console.log('oM headings:');
const omHeadings = [...om.matchAll(/e\.jsx\(\"h[123]\",\{[^}]*children:\"([^\"]+)\"/g)].map(m => m[1]);
console.log(omHeadings.slice(0, 10));

console.log('dM headings:');
const dmHeadings = [...dm.matchAll(/e\.jsx\(\"h[123]\",\{[^}]*children:\"([^\"]+)\"/g)].map(m => m[1]);
console.log(dmHeadings.slice(0, 10));
