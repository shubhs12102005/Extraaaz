const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const p = js.indexOf(',EM=');
console.log('EM start:', p);
// Extract from EM to end of GM
const gmEnd = js.indexOf(';h5.createRoot', p);
console.log('GM end:', gmEnd);

fs.writeFileSync('scratch/industry_configs.js', js.substring(p - 15000, gmEnd));
console.log('Saved industry configs, length:', gmEnd - (p - 15000));
