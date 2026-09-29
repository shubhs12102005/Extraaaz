const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = path.join(__dirname, 'chrome_test_profile');

  // Spawn headless Chrome
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1366,900',
    '--no-first-run',
    '--no-default-browser-check'
  ]);

  console.log('Spawned Chrome with PID:', chrome.pid);

  // Wait for remote debugging to be ready
  let targets = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const res = await fetch('http://localhost:9222/json/list');
      targets = await res.json();
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  if (!targets || targets.length === 0) {
    console.error('Could not connect to Chrome remote debugging');
    chrome.kill();
    return;
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const wsUrl = pageTarget.webSocketDebuggerUrl;
  console.log('Connecting to WebSocket:', wsUrl);

  const ws = new WebSocket(wsUrl);

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
  console.log('WebSocket connected!');

  await send('Page.enable');
  await send('DOM.enable');

  // Navigate to page
  console.log('Navigating to http://localhost:5175/products/business-operations/#crm ...');
  await send('Page.navigate', { url: 'http://localhost:5175/products/business-operations/#crm' });
  await sleep(2500);

  // Evaluate layout and scroll to explore section
  const evalResult = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `
      (() => {
        const el = document.getElementById('explore');
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
        const imgDiv = document.querySelector('[role="img"]');
        const container = imgDiv ? imgDiv.firstElementChild : null;
        const screenDiv = container ? container.firstElementChild : null;

        const info = {
          exploreFound: !!el,
          containerRect: container ? container.getBoundingClientRect() : null,
          screenRect: screenDiv ? screenDiv.getBoundingClientRect() : null,
          containerComputed: container ? {
            width: window.getComputedStyle(container).width,
            height: window.getComputedStyle(container).height,
            aspectRatio: window.getComputedStyle(container).aspectRatio,
            overflow: window.getComputedStyle(container).overflow
          } : null,
          screenComputed: screenDiv ? {
            width: window.getComputedStyle(screenDiv).width,
            height: window.getComputedStyle(screenDiv).height,
            transform: window.getComputedStyle(screenDiv).transform
          } : null
        };
        return JSON.stringify(info);
      })()
    `
  });

  console.log('Layout Evaluation for CRM:');
  const val = evalResult.result?.result?.value ?? evalResult.result?.value;
  console.log(val ? JSON.stringify(JSON.parse(val), null, 2) : evalResult);

  // Take screenshot of CRM preview
  const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(__dirname, 'crm_explore_screenshot.png'), Buffer.from(screenshotRes.result.data, 'base64'));
  console.log('Saved scratch/crm_explore_screenshot.png');

  // Test module switching
  const modules = ['vms', 'wms', 'utility', 'ecommerce', 'finance', 'analytics'];
  for (const mod of modules) {
    const clickRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('${mod.toUpperCase()}') || b.textContent.toLowerCase().includes('${mod}'));
          if (btn) {
            btn.click();
            return 'clicked';
          }
          return 'not found';
        })()
      `
    });
    await sleep(400);

    const checkRes = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const imgDiv = document.querySelector('[role="img"]');
          const container = imgDiv ? imgDiv.firstElementChild : null;
          const screenDiv = container ? container.firstElementChild : null;
          return JSON.stringify({
            module: '${mod}',
            containerHeight: container ? window.getComputedStyle(container).height : null,
            screenTransform: screenDiv ? window.getComputedStyle(screenDiv).transform : null
          });
        })()
      `
    });
    const checkVal = checkRes.result?.result?.value ?? checkRes.result?.value;
    console.log('Module check:', checkVal);
  }

  // Switch back to CRM and capture final screenshot
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('CRM'));
        if (btn) btn.click();
      })()
    `
  });
  await sleep(400);

  const finalScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(__dirname, 'final_crm_screenshot.png'), Buffer.from(finalScreenshot.result.data, 'base64'));
  console.log('Saved scratch/final_crm_screenshot.png');

  ws.close();
  chrome.kill();
  console.log('Test completed successfully!');
}

run().catch(console.error);
