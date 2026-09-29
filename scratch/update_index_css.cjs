const fs = require('fs');
const path = require('path');

const chunkCss = fs.readFileSync('scratch/chunks/1dhdg--45-gjv.css', 'utf8');

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');\n\n`;

// Additional helper animations or overrides if needed
const additionalCss = `
/* Custom scrollbar and smooth behavior */
html {
  scroll-behavior: smooth;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
body {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  color: rgb(17 17 17);
  background-color: rgb(255 255 255);
}
`;

fs.writeFileSync('src/index.css', fontImport + chunkCss + '\n' + additionalCss);
console.log('Updated src/index.css successfully! Size:', fs.statSync('src/index.css').size);
