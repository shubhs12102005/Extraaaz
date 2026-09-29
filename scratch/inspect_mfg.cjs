const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

// Find Rt (manufacturing data)
const p = js.indexOf('Rt=[');
if (p !== -1) {
  console.log('Rt (flow):', js.substring(p, p + 800));
}
// Find modules in EM
const pMod = js.indexOf('modules:[', js.indexOf(',EM='));
if (pMod !== -1) {
  console.log('EM modules:', js.substring(pMod, pMod + 1200));
}
// Find challenges in EM
const pChal = js.indexOf('challenges:[', js.indexOf(',EM='));
if (pChal !== -1) {
  console.log('EM challenges:', js.substring(pChal, pChal + 1200));
}
