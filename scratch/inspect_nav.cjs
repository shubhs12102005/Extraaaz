const fs = require('fs');
const bundlePath = 'C:/Users/Dell/.gemini/antigravity-ide/brain/fe60a48a-90d6-45ec-886a-b7adc0bb1d68/.system_generated/steps/27/content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Find router definition
const routeMatch = content.match(/createBrowserRouter\(\[([\s\S]*?)\]\)/);
if (routeMatch) {
  console.log('--- FOUND createBrowserRouter ---');
  console.log(routeMatch[0].slice(0, 3000));
} else {
  // Let's search for Routes / Route in JSX or structure
  const idx = content.indexOf('RouterProvider');
  if (idx !== -1) {
    console.log('--- FOUND RouterProvider near: ---');
    console.log(content.slice(Math.max(0, idx - 500), idx + 1000));
  } else {
    const rIdx = content.indexOf('createBrowserRouter');
    console.log('createBrowserRouter idx:', rIdx);
  }
}

// Search for Navbar component code
// We know navbar has "Products", "Solutions", etc.
const navIdx = content.indexOf('"become-a-channel-partner.php"');
if (navIdx !== -1) {
  console.log('--- NEAR become-a-channel-partner.php ---');
  console.log(content.slice(Math.max(0, navIdx - 300), navIdx + 1000));
}
