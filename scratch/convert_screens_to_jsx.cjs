const fs = require('fs');

const screens = JSON.parse(fs.readFileSync('scratch/bizops_screens_raw.json', 'utf8'));

function htmlToJsx(html) {
  let jsx = html;
  // Replace attributes
  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bstroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');
  jsx = jsx.replace(/\bclip-rule="/g, 'clipRule="');
  jsx = jsx.replace(/\bfill-rule="/g, 'fillRule="');
  jsx = jsx.replace(/\bstroke-dasharray="/g, 'strokeDasharray="');
  jsx = jsx.replace(/\bstop-color="/g, 'stopColor="');
  jsx = jsx.replace(/\bstop-opacity="/g, 'stopOpacity="');
  jsx = jsx.replace(/\bstyle="([^"]*)"/g, (match, styleStr) => {
    const styleObj = {};
    styleStr.split(';').forEach(rule => {
      const parts = rule.split(':');
      if (parts.length >= 2) {
        let key = parts[0].trim();
        let val = parts.slice(1).join(':').trim();
        // convert kebab-case key to camelCase
        key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        styleObj[key] = val;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  // Replace HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  // Replace self-closing tags
  jsx = jsx.replace(/<(input|img|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
  
  // Rebrand
  jsx = jsx.replace(/EXTRAAAZ/g, 'SILGATE');
  jsx = jsx.replace(/Extraaaz/g, 'Silgate Solutions');
  jsx = jsx.replace(/extraaaz/g, 'silgate');
  jsx = jsx.replace(/app\.extraaaz\.com/g, 'app.silgate.com');

  return jsx;
}

const converted = {};
for (const [key, val] of Object.entries(screens)) {
  converted[key] = htmlToJsx(val.innerHtml);
}

fs.writeFileSync('scratch/bizops_screens_jsx.json', JSON.stringify(converted, null, 2));
console.log('Converted all 7 screens to JSX successfully!');
