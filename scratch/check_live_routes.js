const fs = require('fs');
const path = require('path');

const urls = [
  "/",
  "/products/",
  "/products/logistics-os/",
  "/products/restaurant-os/",
  "/products/retail-os/",
  "/products/manufacturing-os/",
  "/products/healthcare-os/",
  "/products/business-operations/",
  "/industries/",
  "/industries/transport/",
  "/industries/restaurant/",
  "/industries/retail/",
  "/industries/manufacturing/",
  "/industries/healthcare/",
  "/industries/hospitality/",
  "/industries/utilities/",
  "/solutions/",
  "/about/",
  "/ecosystem/",
  "/clients/",
  "/security/",
  "/partners/",
  "/contact/",
  "/privacy/",
  "/terms/"
];

async function checkUrls() {
  const results = [];
  const outDir = path.join(__dirname, 'live_pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const u of urls) {
    try {
      const fullUrl = `https://www.extraaaz.com${u}`;
      const res = await fetch(fullUrl, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
      });
      const html = await res.text();
      const status = res.status;
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'No Title';
      
      const safeName = u === '/' ? 'home' : u.replace(/^\/|\/$/g, '').replace(/\//g, '_');
      fs.writeFileSync(path.join(outDir, `${safeName}.html`), html);

      results.push({ url: u, status, title, length: html.length });
      console.log(`[${status}] ${u} - "${title}" (${html.length} bytes)`);
    } catch(e) {
      console.error(`ERR ${u}:`, e.message);
    }
  }

  fs.writeFileSync(path.join(outDir, 'audit_summary.json'), JSON.stringify(results, null, 2));
  console.log(`Finished auditing ${results.length} URLs!`);
}

checkUrls();
