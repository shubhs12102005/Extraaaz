const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  '/assets/director-DhzbMZhg.jpg',
  '/assets/CSO-CxIK4MsJ.jpg',
  '/images/products/mobile-printer.png',
  '/images/products/SPOS_5.webp',
  '/images/products/SPOS_11.webp',
  '/images/products/emark.webp',
  '/images/products/sparkle.webp'
];

async function download(urlPath) {
  const fullUrl = 'https://www.extraaaz.com' + urlPath;
  const localPath = path.join('public', urlPath);
  fs.mkdirSync(path.dirname(localPath), { recursive: true });

  return new Promise((resolve) => {
    const urlObj = new URL(fullUrl);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.extraaaz.com/'
      },
      rejectUnauthorized: false
    };

    https.get(options, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(localPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log('Downloaded (' + fs.statSync(localPath).size + ' bytes):', urlPath);
          resolve();
        });
      } else {
        console.log('Failed (' + res.statusCode + '):', fullUrl);
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error downloading:', fullUrl, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const a of assets) {
    await download(a);
  }
}

run();
