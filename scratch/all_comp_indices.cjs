const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

const comps = [
  { name: 'SPOS', start: 'ok=' },
  { name: 'BharatPOS', start: 'vk=' },
  { name: 'ExtraaazPOS', start: 'Ik=' },
  { name: 'Emark', start: 'Fk=' },
  { name: 'POSSolutions', start: 'Zk=' },
  { name: 'POSSolutionsIndia', start: 'aC=' },
  { name: 'EcommerceSolutions', start: 'XC=' },
  { name: 'Ecommerce', start: 'QC=' },
  { name: 'ThankYou', start: 'JC=' },
  { name: 'CRMHRMS', start: 'lM=' },
  { name: 'BharatBill', start: 'oM=' },
  { name: 'BharatBillSimple', start: 'cM=' },
  { name: 'BharatBillERP', start: 'dM=' },
  { name: 'Hyderabad', start: 'fM=' },
  { name: 'Blog', start: 'hC=' },
  { name: 'BlogDetail', start: 'gC=' },
  { name: 'ContactUs', start: 'NC=' },
  { name: 'Career', start: 'TC=' },
  { name: 'Partner', start: 'RC=' },
  { name: 'PrivacyPolicy', start: 'VC=' },
  { name: 'TermsConditions', start: 'HC=' },
  { name: 'ReturnPolicy', start: 'UC=' },
  { name: 'LeadershipMessages', start: 'g4=' },
  { name: 'Press', start: 'uM=' },
  { name: 'Resources', start: 'gM=' },
  { name: 'WhyExtraaaz', start: 'bM=' }
];

comps.forEach((c) => {
  const idx = content.indexOf(c.start);
  console.log(`${c.name.padEnd(20)}: index ${idx}`);
});
