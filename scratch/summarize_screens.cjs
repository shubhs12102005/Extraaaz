const fs = require('fs');

const screens = JSON.parse(fs.readFileSync('scratch/bizops_screens_raw.json', 'utf8'));

for (const [name, data] of Object.entries(screens)) {
  console.log(`\n=================== ${name} ===================`);
  // Find heading/title
  const titleMatch = data.innerHtml.match(/text-\[19px\][^>]*>([^<]+)<\/div>/);
  const subMatch = data.innerHtml.match(/text-\[12px\] text-slate-500">([^<]+)<\/div>/);
  console.log('Heading:', titleMatch ? titleMatch[1] : 'N/A');
  console.log('Subheading:', subMatch ? subMatch[1] : 'N/A');

  // Find cards/metrics
  const metricCards = [...data.innerHtml.matchAll(/text-\[11px\] font-medium text-slate-500">([^<]+)<\/div>[\s\S]*?text-\[21px\][^>]*>([^<]+)<\/div>/g)];
  console.log('Metrics:', metricCards.map(m => `${m[1]}: ${m[2]}`));
}
