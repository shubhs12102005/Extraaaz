const fs = require('fs');

function inspectComp(filename) {
  const code = fs.readFileSync(filename, 'utf8');
  console.log(`=== ${filename} ===`);
  const sections = [...code.matchAll(/className:\"([^\"]*(?:section|page|hero|overview|features|pricing|comparison|testimonials|faq|cta)[^\"]*)\"/g)].map(m => m[1]);
  console.log('Unique section class patterns:', [...new Set(sections)]);
  const titles = [...code.matchAll(/e\.jsx\(\"h[123]\",\{[^}]*children:\"([^\"]+)\"/g)].map(m => m[1]);
  console.log('Headings:', titles.slice(0, 8));
}

['scratch/vk_component.js', 'scratch/Ik_component.js', 'scratch/Fk_component.js', 'scratch/Zk_component.js'].forEach(inspectComp);
