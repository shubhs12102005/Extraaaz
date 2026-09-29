const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = path.join(__dirname, 'chrome_test_profile2');

  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,1050',
    '--no-first-run',
    '--no-default-browser-check'
  ]);

  let targets = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const res = await fetch('http://localhost:9223/json/list');
      targets = await res.json();
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let idCounter = 1;
  const callbacks = new Map();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const cb = callbacks.get(data.id);
      callbacks.delete(data.id);
      cb(data);
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const id = idCounter++;
      callbacks.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('DOM.enable');

  await send('Page.navigate', { url: 'http://localhost:5175/products/business-operations/#crm' });
  await sleep(2500);

  // Scroll explore section preview into center view
  await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `
      (() => {
        const figures = document.querySelectorAll('figure');
        const preview = figures[1] || figures[0];
        if (preview) {
          preview.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      })()
    `
  });
  await sleep(600);

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const outPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\b48cd90b-2fb6-4a8b-a24d-e1bbc50c9056\\bizops_preview_fixed.png';
  fs.writeFileSync(outPath, Buffer.from(shot.result.data, 'base64'));
  console.log('Saved artifact screenshot to:', outPath);

  ws.close();
  chrome.kill();
}

run().catch(console.error);
