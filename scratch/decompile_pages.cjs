const fs = require('fs');
const content = fs.readFileSync('scratch/live_full.js', 'utf8');

function findDef(name) {
  // Try finding name=
  const patterns = [
    new RegExp(`(?:var|const|function|let)\\s+${name}\\s*=`),
    new RegExp(`${name}=\\(`),
    new RegExp(`function\\s+${name}\\s*\\(`),
    new RegExp(`${name}=\\{`),
    new RegExp(`${name}=e\\.jsx`),
    new RegExp(`${name}=e\\.jsxs`),
  ];
  for (const p of patterns) {
    const m = p.exec(content);
    if (m) {
      const idx = m.index;
      return {
        matched: m[0],
        index: idx,
        snippet: content.slice(Math.max(0, idx - 50), idx + 2500)
      };
    }
  }
  return null;
}

const comps = {
  Home: 'qS',
  Products: 'eM',
  About: 'ek',
  SPOS: 'ok',
  BharatPOS: 'vk',
  ExtraaazPOS: 'Ik',
  Emark: 'Fk',
  POSSolutions: 'Zk',
  POSSolutionsIndia: 'aC',
  CRMHRMS: 'lM',
  EcommerceSolutions: 'XC',
  Ecommerce: 'QC',
  BharatBill: 'oM',
  BharatBillERP: 'dM',
  BharatBillSimple: 'cM',
  Hyderabad: 'fM',
  Manufacturing: 'EM',
  Logistics: 'OM',
  Transport: 'VM',
  RetailDistribution: 'LM',
  CourierShipping: 'HM',
  HealthcarePharmacy: 'GM',
  Blog: 'hC',
  BlogDetail: 'gC',
  ContactUs: 'NC',
  Career: 'TC',
  Partner: 'RC',
  PrivacyPolicy: 'VC',
  TermsConditions: 'HC',
  ReturnPolicy: 'UC',
  LeadershipMessages: 'g4',
  Press: 'uM',
  Resources: 'gM',
  WhyExtraaaz: 'bM',
  BillingLanding: 'SM',
  ThankYou: 'JC'
};

for (const [name, id] of Object.entries(comps)) {
  const def = findDef(id);
  if (def) {
    console.log(`=== ${name} (${id}) ===`);
    console.log(def.snippet.slice(0, 500) + '...\n');
  } else {
    console.log(`=== ${name} (${id}) NOT FOUND ===\n`);
  }
}
