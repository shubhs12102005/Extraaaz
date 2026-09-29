const fs = require('fs');
const path = require('path');

// Let's search all files in scratch/chunks/ for "Restaurants & Cafés" or "Hotels · Resorts" or "Water · Gas"
const chunksDir = path.join(__dirname, 'chunks');
if (fs.existsSync(chunksDir)) {
  const files = fs.readdirSync(chunksDir);
  console.log(`Searching in ${files.length} chunk files...`);
  
  for (const f of files) {
    if (!f.endsWith('.js')) continue;
    const content = fs.readFileSync(path.join(chunksDir, f), 'utf8');
    
    if (content.includes('Fine dine') || content.includes('Hotels') || content.includes('Kirana')) {
      console.log(`MATCH in chunk: ${f}`);
      // Find where
      const idx = content.indexOf('Fine dine');
      console.log(content.slice(Math.max(0, idx - 500), idx + 2000));
    }
  }
} else {
  console.log('chunks dir not found');
}
