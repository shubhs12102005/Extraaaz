const fs = require('fs');
const path = require('path');
const { cleanHtmlToJsx } = require('./clean_html_to_jsx.cjs');

const pageMappings = [
  { html: 'home.html', dest: 'src/pages/HOME/Home.jsx', name: 'Home' },
  { html: 'products.html', dest: 'src/pages/PRODUCTS/Products.jsx', name: 'Products' },
  { html: 'products_logistics-os.html', dest: 'src/pages/PRODUCTS/LOGISTICS-OS/LogisticsOS.jsx', name: 'LogisticsOS' },
  { html: 'products_restaurant-os.html', dest: 'src/pages/PRODUCTS/RESTAURANT-OS/RestaurantOS.jsx', name: 'RestaurantOS' },
  { html: 'products_retail-os.html', dest: 'src/pages/PRODUCTS/RETAIL-OS/RetailOS.jsx', name: 'RetailOS' },
  { html: 'products_manufacturing-os.html', dest: 'src/pages/PRODUCTS/MANUFACTURING-OS/ManufacturingOS.jsx', name: 'ManufacturingOS' },
  { html: 'products_healthcare-os.html', dest: 'src/pages/PRODUCTS/HEALTHCARE-OS/HealthcareOS.jsx', name: 'HealthcareOS' },
  { html: 'products_business-operations.html', dest: 'src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations.jsx', name: 'BusinessOperations' },
  { html: 'industries_transport.html', dest: 'src/pages/INDUSTRIES/Transport.jsx', name: 'Transport' },
  { html: 'industries_restaurant.html', dest: 'src/pages/INDUSTRIES/Restaurant.jsx', name: 'Restaurant' },
  { html: 'industries_retail.html', dest: 'src/pages/INDUSTRIES/Retail.jsx', name: 'Retail' },
  { html: 'industries_manufacturing.html', dest: 'src/pages/INDUSTRIES/Manufacturing.jsx', name: 'Manufacturing' },
  { html: 'industries_healthcare.html', dest: 'src/pages/INDUSTRIES/Healthcare.jsx', name: 'Healthcare' },
  { html: 'industries_hospitality.html', dest: 'src/pages/INDUSTRIES/Hospitality.jsx', name: 'Hospitality' },
  { html: 'industries_utilities.html', dest: 'src/pages/INDUSTRIES/Utilities.jsx', name: 'Utilities' },
  { html: 'solutions.html', dest: 'src/pages/SOLUTIONS/Solutions.jsx', name: 'Solutions' },
  { html: 'about.html', dest: 'src/pages/COMPANY/About.jsx', name: 'About' },
  { html: 'case-studies.html', dest: 'src/pages/COMPANY/Clients.jsx', name: 'Clients' },
  { html: 'security.html', dest: 'src/pages/COMPANY/Security.jsx', name: 'Security' },
  { html: 'partners.html', dest: 'src/pages/COMPANY/Partners.jsx', name: 'Partners' },
  { html: 'contact.html', dest: 'src/pages/COMPANY/Contact.jsx', name: 'Contact' },
  { html: 'privacy.html', dest: 'src/pages/LEGAL/Privacy.jsx', name: 'Privacy' },
  { html: 'terms.html', dest: 'src/pages/LEGAL/Terms.jsx', name: 'Terms' }
];

const livePagesDir = path.join(__dirname, 'live_pages');

for (const p of pageMappings) {
  const htmlFile = path.join(livePagesDir, p.html);
  if (!fs.existsSync(htmlFile)) {
    console.warn(`File not found: ${htmlFile}`);
    continue;
  }
  const rawHtml = fs.readFileSync(htmlFile, 'utf8');
  const jsxCode = cleanHtmlToJsx(rawHtml, p.name);
  
  const destPath = path.join(__dirname, '..', p.dest);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, jsxCode);
  console.log(`Generated: ${p.dest} (${jsxCode.length} bytes)`);
}
