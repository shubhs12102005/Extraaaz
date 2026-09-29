const fs = require('fs');
const js = fs.readFileSync('scratch/live_full.js', 'utf8');

// Find all routes in router creation
const routerIndex = js.indexOf('createBrowserRouter');
if (routerIndex !== -1) {
  console.log('createBrowserRouter snippet:');
  console.log(js.substring(routerIndex - 200, routerIndex + 3000));
} else {
  // search for path:
  const re = /path:\s*"([^"]+)",\s*element:\s*([a-zA-Z0-9_$]+)/g;
  let match;
  while ((match = re.exec(js)) !== null) {
    console.log(`Path: ${match[1]} -> Element: ${match[2]}`);
  }
}
