const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const images = [
  "/assets/BharatPos-OUnJO5mA.webp",
  "/assets/CSO-CxIK4MsJ.jpg",
  "/assets/director-DhzbMZhg.jpg",
  "/assets/emark-CTo3mZhr.webp",
  "/assets/extraaaz-home-1-BlJU5fAk.webp",
  "/assets/extraaaz-logo-CkdK0JKg.webp",
  "/assets/extraaaz-logo-white-DIqhPNzv.webp",
  "/assets/extraaazPos-nl3tFm2c.webp",
  "/assets/hiring-DutSfvIo.png",
  "/assets/sposplus-DnXh90nZ.webp",
  "/images/Coaching%20Management.png",
  "/images/Gym%20Management.png",
  "/images/Warehouse%20manager.png",
  "/images/Water%20Delivery%20App.png",
  "/images/bharatbill3.png",
  "/images/bharatbillerp.png",
  "/images/blogs/blog-1.webp",
  "/images/blogs/blog-2.webp",
  "/images/blogs/blog-3.webp",
  "/images/blogs/blog-4.webp",
  "/images/blogs/blog-5.webp",
  "/images/blogs/blog-6.webp",
  "/images/blogs/blog-7.webp",
  "/images/blogs/blog-8.webp",
  "/images/clinic%20management.png",
  "/images/products/Housing%20Society%20Management.jpg",
  "/images/products/Kindergarten%20Management.png",
  "/images/products/SPOS_11.webp",
  "/images/products/SPOS_5.webp",
  "/images/products/bharatpos.webp",
  "/images/products/emark.webp",
  "/images/products/extraaazPos.webp",
  "/images/products/mobile-printer.png",
  "/images/products/sposplus-dashboard.webp",
  "/images/products/sposplus.webp",
  "/images/sparkle.png"
];

for (const imgUrl of images) {
  const decodedPath = decodeURIComponent(imgUrl);
  const localDest = path.join(__dirname, '..', 'public', decodedPath.startsWith('/') ? decodedPath.slice(1) : decodedPath);
  const dir = path.dirname(localDest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(localDest) && fs.statSync(localDest).size > 1000) {
    console.log(`Already exists: ${decodedPath} (${fs.statSync(localDest).size} bytes)`);
    continue;
  }

  const fullUrl = `https://www.extraaaz.com${imgUrl}`;
  try {
    console.log(`Downloading ${fullUrl} -> ${localDest}`);
    execSync(`curl.exe -k -s --resolve www.extraaaz.com:443:91.108.106.215 "${fullUrl}" -o "${localDest}"`);
    const size = fs.existsSync(localDest) ? fs.statSync(localDest).size : 0;
    console.log(`Saved: ${decodedPath} (${size} bytes)`);
  } catch (err) {
    console.error(`Failed to download ${fullUrl}:`, err.message);
  }
}
