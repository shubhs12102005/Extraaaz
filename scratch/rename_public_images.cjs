const fs = require('fs');
const path = require('path');

const renames = [
  ['public/images/industries/healthcare/extraaaz-industry-healthcare-hero.webp', 'public/images/industries/healthcare/silgate-industry-healthcare-hero.webp'],
  ['public/images/industries/hospitality/extraaaz-industry-hospitality-hero.webp', 'public/images/industries/hospitality/silgate-industry-hospitality-hero.webp'],
  ['public/images/industries/manufacturing/extraaaz-industry-manufacturing-hero.webp', 'public/images/industries/manufacturing/silgate-industry-manufacturing-hero.webp'],
  ['public/images/industries/restaurant/extraaaz-industry-restaurant-hero.webp', 'public/images/industries/restaurant/silgate-industry-restaurant-hero.webp'],
  ['public/images/industries/retail/extraaaz-industry-retail-hero.webp', 'public/images/industries/retail/silgate-industry-retail-hero.webp'],
  ['public/images/industries/transport/extraaaz-industry-transport-hero.webp', 'public/images/industries/transport/silgate-industry-transport-hero.webp'],
  ['public/images/industries/utilities/extraaaz-industry-utilities-hero.webp', 'public/images/industries/utilities/silgate-industry-utilities-hero.webp'],
  ['public/images/products/business-operations/extraaaz-business-operations-hero.webp', 'public/images/products/business-operations/silgate-business-operations-hero.webp'],
  ['public/images/products/healthcare-os/extraaaz-healthcare-os-hero.webp', 'public/images/products/healthcare-os/silgate-healthcare-os-hero.webp'],
  ['public/images/products/logistics-os/extraaaz-logistics-os-hero.webp', 'public/images/products/logistics-os/silgate-logistics-os-hero.webp'],
  ['public/images/products/logistics-os/extraaaz-logistics-os-dashboard.webp', 'public/images/products/logistics-os/silgate-logistics-os-dashboard.webp'],
  ['public/images/products/logistics-os/extraaaz-logistics-os-industry.webp', 'public/images/products/logistics-os/silgate-logistics-os-industry.webp'],
  ['public/images/products/manufacturing-os/extraaaz-manufacturing-os-hero.webp', 'public/images/products/manufacturing-os/silgate-manufacturing-os-hero.webp'],
  ['public/images/products/restaurant-os/extraaaz-restaurant-os-hero.webp', 'public/images/products/restaurant-os/silgate-restaurant-os-hero.webp'],
  ['public/images/products/retail-os/extraaaz-retail-os-hero.webp', 'public/images/products/retail-os/silgate-retail-os-hero.webp'],
  ['public/images/products/extraaazPos.webp', 'public/images/products/silgatePos.webp'],
  ['public/images/brand/extraaaz-logo.webp', 'public/images/brand/silgate-logo.webp']
];

for (const [src, dest] of renames) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    // Also remove the old file so no extraaaz filenames exist
    fs.unlinkSync(src);
    console.log(`Renamed: ${src} -> ${dest}`);
  }
}

// Replace brand logo with silgate logo
if (fs.existsSync('public/silgate-logo-latest.png') && fs.existsSync('public/images/brand/silgate-logo.webp')) {
  fs.copyFileSync('public/silgate-logo-latest.png', 'public/images/brand/silgate-logo.webp');
}

// Remove public/extraaaz-icon.png if exists
if (fs.existsSync('public/extraaaz-icon.png')) {
  fs.unlinkSync('public/extraaaz-icon.png');
}

// Remove scrape dump files from public/ that contain extraaaz in their body
const publicSubdirs = ['industries', 'products'];
for (const sub of publicSubdirs) {
  const dir = path.join('public', sub);
  if (fs.existsSync(dir)) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory() && e.name.endsWith('_')) {
        fs.unlinkSync(path.join(dir, e.name));
        console.log(`Cleaned scrap file: ${path.join(dir, e.name)}`);
      }
    }
  }
}

// Clean public/products/business-operations/#... if exists
const bizOpsPublicDir = path.join('public', 'products', 'business-operations');
if (fs.existsSync(bizOpsPublicDir)) {
  const entries = fs.readdirSync(bizOpsPublicDir);
  for (const e of entries) {
    if (e.startsWith('#')) {
      fs.unlinkSync(path.join(bizOpsPublicDir, e));
      console.log(`Cleaned scrap file: ${path.join(bizOpsPublicDir, e)}`);
    }
  }
}
// Clean other #explore files
['healthcare-os', 'logistics-os', 'manufacturing-os', 'restaurant-os', 'retail-os'].forEach(p => {
  const pDir = path.join('public', 'products', p);
  if (fs.existsSync(pDir)) {
    const entries = fs.readdirSync(pDir);
    for (const e of entries) {
      if (e.startsWith('#')) {
        fs.unlinkSync(path.join(pDir, e));
        console.log(`Cleaned scrap file: ${path.join(pDir, e)}`);
      }
    }
  }
});

// Clean public/assets/ extraaaz files
const pubAssets = path.join('public', 'assets');
if (fs.existsSync(pubAssets)) {
  const entries = fs.readdirSync(pubAssets);
  for (const e of entries) {
    if (e.toLowerCase().includes('extraaaz')) {
      fs.unlinkSync(path.join(pubAssets, e));
      console.log(`Cleaned unused public asset: ${e}`);
    }
  }
}

// Clean src/assets/ extraaaz files
const srcAssets = path.join('src', 'assets');
if (fs.existsSync(srcAssets)) {
  const entries = fs.readdirSync(srcAssets);
  for (const e of entries) {
    if (e.toLowerCase().includes('extraaaz')) {
      fs.unlinkSync(path.join(srcAssets, e));
      console.log(`Cleaned unused src asset: ${e}`);
    }
  }
}
if (fs.existsSync('src/assets/images/common/extraaaz-logo.webp')) {
  fs.unlinkSync('src/assets/images/common/extraaaz-logo.webp');
}
if (fs.existsSync('src/assets/images/products/extraaazPos.webp')) {
  fs.unlinkSync('src/assets/images/products/extraaazPos.webp');
}
if (fs.existsSync('src/assets/logos/extraaaz-logo.webp')) {
  fs.unlinkSync('src/assets/logos/extraaaz-logo.webp');
}

console.log('Public images and asset files cleaned and renamed!');
