const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

const targets = [
  { name: 'About (ek)', start: ',ek=' },
  { name: 'Leadership (g4)', start: ',g4=' },
  { name: 'Contact (NC)', start: ',NC=' },
  { name: 'Career (TC)', start: ',TC=' },
  { name: 'Franchise/Partner (RC)', start: ',RC=' },
  { name: 'Privacy (VC)', start: ',VC=' },
  { name: 'Terms (HC)', start: ',HC=' },
  { name: 'Return (UC)', start: ',UC=' },
  { name: 'Press (uM)', start: ',uM=' },
  { name: 'Resources (gM)', start: ',gM=' },
  { name: 'WhyExtraaaz (bM)', start: ',bM=' },
  { name: 'Blog (hC)', start: ',hC=' },
  { name: 'BlogDetail (gC)', start: ',gC=' },
  { name: 'ThankYou (JC)', start: ',JC=' },
  { name: 'BillingLanding (SM)', start: 'function SM(' }
];

targets.forEach(t => {
  const p = js.indexOf(t.start);
  if (p !== -1) {
    console.log(`=== ${t.name} at ${p} ===`);
    console.log(js.substring(p, p + 400));
  } else {
    console.log(`Could not find ${t.name}`);
  }
});
