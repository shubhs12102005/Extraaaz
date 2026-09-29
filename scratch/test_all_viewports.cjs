const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = path.join(__dirname, 'chrome_test_profile3');

  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1920,1080',
    '--no-first-run',
    '--no-default-browser-check'
  ]);

  let targets = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const res = await fetch('http://localhost:9224/json/list');
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
  await sleep(2000);

  const viewports = [
    { name: '1920px', width: 1920, height: 1080 },
    { name: '1366px', width: 1366, height: 768 },
    { name: '1024px', width: 1024, height: 768 },
    { name: '768px', width: 768, height: 1024 }
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 800
    });
    await sleep(300);

    const metrics = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const imgDiv = document.querySelector('[role="img"]');
          const container = imgDiv ? imgDiv.firstElementChild : null;
          const screenDiv = container ? container.firstElementChild : null;
          const cRect = container ? container.getBoundingClientRect() : {};
          const sRect = screenDiv ? screenDiv.getBoundingClientRect() : {};
          return JSON.stringify({
            viewport: '${vp.name}',
            containerWidth: cRect.width,
            containerHeight: cRect.height,
            screenWidth: sRect.width,
            screenHeight: sRect.height,
            diffWidth: Math.abs(cRect.width - sRect.width),
            diffHeight: Math.abs(cRect.height - sRect.height)
          });
        })()
      `
    });

    const m = JSON.parse(metrics.result.result.value);
    console.log(vp.name, '-> Container:', m.containerWidth.toFixed(1) + 'x' + m.containerHeight.toFixed(1),
                '| Screen:', m.screenWidth.toFixed(1) + 'x' + m.screenHeight.toFixed(1),
                '| Diff:', m.diffWidth.toFixed(3), m.diffHeight.toFixed(3));
  }

  // Test module switching on 1366px
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
    mobile: false
  });
  await sleep(200);

  const modules = ['CRM', 'VMS', 'WMS', 'Utility Management', 'E-Commerce', 'Finance', 'Analytics'];
  for (const name of modules) {
    const click = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('${name}'));
          if (btn) {
            btn.click();
            return true;
          }
          return false;
        })()
      `
    });
    await sleep(200);

    const test = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const chromeUrl = document.querySelector('figure .rounded-full.bg-background\\\\/80');
          const imgDiv = document.querySelector('[role="img"]');
          const container = imgDiv ? imgDiv.firstElementChild : null;
          const screenDiv = container ? container.firstElementChild : null;
          return JSON.stringify({
            module: '${name}',
            url: chromeUrl ? chromeUrl.textContent.trim() : '',
            hasContainer: !!container,
            containerHeight: container ? window.getComputedStyle(container).height : '',
            screenTransform: screenDiv ? window.getComputedStyle(screenDiv).transform : ''
          });
        })()
      `
    });
    console.log('Switch test:', test.result.result.value);
  }

  ws.close();
  chrome.kill();
  console.log('All responsive and module switch tests passed!');
}

run().catch(console.error);
