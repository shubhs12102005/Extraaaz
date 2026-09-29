const fs = require('fs');
const js = fs.readFileSync('scratch/industry_configs.js', 'utf8');

// Find all configs in the file
function getSnippet(varName) {
  const p = js.indexOf(`${varName}={`);
  if (p === -1) {
    console.log(`Could not find ${varName}`);
    return null;
  }
  // Find where it ends (usually at next config or component)
  const nextP = js.indexOf('};', p);
  const chunk = js.substring(p, nextP !== -1 ? nextP + 2 : p + 4000);
  console.log(`=== ${varName} ===`);
  console.log(chunk.substring(0, 500));
  return chunk;
}

getSnippet('IM'); // Logistics
getSnippet('BM'); // Transport
getSnippet('PM'); // Retail & Distribution
getSnippet('DM'); // Courier & Shipping
getSnippet('FM'); // Healthcare & Pharmacy
