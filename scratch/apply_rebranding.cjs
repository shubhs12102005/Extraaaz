const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Specific high-priority multi-word phrases first
  content = content.replace(/Extraaaz Innovative Tech Solutions Pvt\. Ltd\./g, 'Silgate Solutions');
  content = content.replace(/Extraaaz Innovative Tech Solutions/g, 'Silgate Solutions');
  content = content.replace(/Extraaaz Business OS/g, 'Silgate Solutions');
  content = content.replace(/Extraaaz Operating System/g, 'Silgate Solutions');
  content = content.replace(/Extraaaz Business Operations/g, 'Silgate Business Operations');
  content = content.replace(/Extraaaz Logistics OS/g, 'Silgate Logistics OS');
  content = content.replace(/Extraaaz Restaurant OS/g, 'Silgate Restaurant OS');
  content = content.replace(/Extraaaz Retail OS/g, 'Silgate Retail OS');
  content = content.replace(/Extraaaz Manufacturing OS/g, 'Silgate Manufacturing OS');
  content = content.replace(/Extraaaz Healthcare OS/g, 'Silgate Healthcare OS');
  content = content.replace(/Extraaaz Ecosystem/g, 'Silgate Solutions');
  content = content.replace(/The Extraaaz Business OS/g, 'Silgate Solutions');
  content = content.replace(/What Extraaaz gives/g, 'What Silgate Solutions gives');
  content = content.replace(/How Extraaaz shows/g, 'How Silgate Solutions shows');
  content = content.replace(/How Extraaaz Runs/g, 'How Silgate Solutions Runs');
  content = content.replace(/With Extraaaz/g, 'With Silgate Solutions');
  content = content.replace(/About Extraaaz/g, 'About Silgate Solutions');
  content = content.replace(/Extraaaz POS/g, 'Silgate POS');
  content = content.replace(/Extraaaz Warehouse Manager/g, 'Silgate Warehouse Manager');
  content = content.replace(/Extraaaz Team/g, 'Silgate Team');
  content = content.replace(/Extraaaz Culture Team/g, 'Silgate Culture Team');

  // Specific addresses and contacts
  content = content.replace(/Office No\. 204, Building No\. 6, Sector 3, Millennium Business Park \(MBP\), MIDC Industrial Area, Mahape, Navi Mumbai, Maharashtra 400710/g, 'Road Number 8, SG Barve Rd, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604');
  content = content.replace(/Office No\. 204, Building No\. 6, Sector 3, Millennium Business Park \(MBP\), MIDC Industrial Area, Mahape/g, 'Road Number 8, SG Barve Rd, Wagle Estate, Padwal Nagar');
  content = content.replace(/Navi Mumbai, Maharashtra 400710/g, 'Thane West, Maharashtra 400604');
  content = content.replace(/Read Number 8, SG Barde Rd/g, 'Road Number 8, SG Barve Rd');
  content = content.replace(/\+919307473969/g, '+918108810916');
  content = content.replace(/\+91 93074 73969/g, '+91 81088 10916');
  content = content.replace(/07709040699/g, '+918108810916');
  content = content.replace(/\+91 77090 40699/g, '+91 81088 10916');
  content = content.replace(/info@extraaaz\.com/g, 'manoj@silgatehiring.com');

  // Domains & URLs
  content = content.replace(/app\.extraaaz\.com/g, 'app.silgate.com');
  content = content.replace(/https:\/\/www\.extraaaz\.com/g, 'https://www.silgate.com');
  content = content.replace(/https:\/\/extraaaz\.com/g, 'https://www.silgate.com');
  content = content.replace(/www\.extraaaz\.com/g, 'www.silgate.com');
  content = content.replace(/extraaaz\.com/g, 'silgate.com');
  content = content.replace(/@extraaaz/g, '@silgatesolutions');
  content = content.replace(/linkedin\.com\/company\/extraaaz/g, 'linkedin.com/company/silgate-solutions');
  content = content.replace(/instagram\.com\/extraaaz_official/g, 'instagram.com/silgatesolutions');
  content = content.replace(/facebook\.com\/Extraaaz/g, 'facebook.com/SilgateSolutions');
  content = content.replace(/twitter\.com\/extraaaz/g, 'twitter.com/silgatesolutions');

  // Image paths
  content = content.replace(/extraaaz-industry-([a-z-]+)-hero\.webp/g, 'silgate-industry-$1-hero.webp');
  content = content.replace(/extraaaz-([a-z-]+)-hero\.webp/g, 'silgate-$1-hero.webp');
  content = content.replace(/extraaaz-logistics-os-dashboard\.webp/g, 'silgate-logistics-os-dashboard.webp');
  content = content.replace(/extraaaz-logistics-os-industry\.webp/g, 'silgate-logistics-os-industry.webp');
  content = content.replace(/extraaazPos\.webp/g, 'silgatePos.webp');
  content = content.replace(/extraaaz-pos/g, 'silgate-pos');
  content = content.replace(/\/images\/brand\/extraaaz-logo\.webp/g, '/silgate-logo-latest.png');
  content = content.replace(/\/images\/brand\/extraaaz-logo\.png/g, '/silgate-logo-latest.png');

  // General casing replacements
  content = content.replace(/EXTRAAAZ/g, 'SILGATE SOLUTIONS');
  content = content.replace(/Extraaaz/g, 'Silgate Solutions');
  content = content.replace(/extraaaz/g, 'silgate');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist' && f !== 'scratch') {
        walkDir(full);
      }
    } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.json') || f.endsWith('.html') || f.endsWith('.md') || f.endsWith('.css')) {
      replaceInFile(full);
    }
  }
}

// Update package.json name specifically
const pkgPath = 'package.json';
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = 'silgate-solutions';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('Updated package.json');
}

// Update README.md
const readmePath = 'README.md';
const readmeContent = `# Silgate Solutions Website

Official website for Silgate Solutions built with React, Vite, and Tailwind CSS.

## Features
- **Modern UI & Design System**: Responsive, high-performance interface with dark/light themes.
- **Interactive Business Operations**: Live module previews for CRM, VMS, WMS, Utility Management, E-Commerce, Finance, and Analytics.
- **Industry Solutions**: Dedicated workflows and solutions for Transport & Logistics, Restaurants & Cafés, Retail, Manufacturing, Healthcare, Hospitality, and Utilities.
- **Complete Suite**: Company, solutions, case studies, security, partners, and contact workflows.

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Production Build

\`\`\`bash
npm run build
npm run preview
\`\`\`
`;
fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('Updated README.md');

// Run walk
walkDir('src');
walkDir('public');
replaceInFile('index.html');

console.log('Rebranding script completed!');
