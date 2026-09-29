const fs = require('fs');

for (let i = 2; i <= 11; i++) {
  const content = fs.readFileSync(`scratch/home_sections/section_${i}.js`, 'utf8');
  console.log(`\n================== SECTION ${i} ==================`);
  console.log(content.slice(0, 1500));
}
