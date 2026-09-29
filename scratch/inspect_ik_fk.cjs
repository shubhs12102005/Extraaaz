const fs = require('fs');

function inspectIkAndFk() {
  const ik = fs.readFileSync('scratch/Ik_component.js', 'utf8');
  console.log('=== Ik details ===');
  console.log('Title/Hero:');
  console.log(ik.substring(0, 1500));

  const fk = fs.readFileSync('scratch/Fk_component.js', 'utf8');
  console.log('=== Fk details ===');
  console.log('Title/Hero:');
  console.log(fk.substring(0, 1500));
}

inspectIkAndFk();
