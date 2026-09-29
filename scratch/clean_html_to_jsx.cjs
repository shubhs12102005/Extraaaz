const fs = require('fs');
const path = require('path');
const { convertLinks } = require('./convert_links.cjs');

function cleanHtmlToJsx(html, pageName) {
  let content = html;

  // Extract <main>...</main>
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    content = mainMatch[1];
  }

  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');

  // Replace class= with className=
  content = content.replace(/\bclass="/g, 'className="');
  content = content.replace(/\bfor="/g, 'htmlFor="');

  // Convert SVG attributes
  const attrMap = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-opacity': 'strokeOpacity',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'stroke-miterlimit': 'strokeMiterlimit',
    'vector-effect': 'vectorEffect',
    'shape-rendering': 'shapeRendering',
    'text-anchor': 'textAnchor',
    'tabindex': 'tabIndex',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'srcset': 'srcSet',
    'charset': 'charSet'
  };

  for (const [kebab, camel] of Object.entries(attrMap)) {
    const reg = new RegExp(`\\b${kebab}=`, 'g');
    content = content.replace(reg, `${camel}=`);
  }

  // Remove opacity:0 and transform from inline styles that were set by SSR Framer Motion
  content = content.replace(/style="([^"]*)"/g, (match, styleStr) => {
    let cleanStyle = styleStr
      .replace(/opacity\s*:\s*0\s*;?/g, '')
      .replace(/transform\s*:\s*translateY\([^)]+\)\s*;?/g, '')
      .replace(/transform\s*:\s*scale\([^)]+\)\s*;?/g, '');

    const styles = cleanStyle.split(';').map(s => s.trim()).filter(Boolean);
    if (styles.length === 0) return '';

    const objProps = styles.map(s => {
      const colIdx = s.indexOf(':');
      if (colIdx === -1) return '';
      const rawKey = s.slice(0, colIdx).trim();
      const rawVal = s.slice(colIdx + 1).trim();
      const key = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `"${key}": ${JSON.stringify(rawVal)}`;
    }).filter(Boolean);

    if (objProps.length === 0) return '';
    return `style={{${objProps.join(', ')}}}`;
  });

  // Self-close void elements
  content = content.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Accurately convert internal <a> to <Link> using stack
  content = convertLinks(content);

  return `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${pageName}() {
  return (
    <div className="min-h-full">
      ${content}
    </div>
  );
}
`;
}

module.exports = { cleanHtmlToJsx };
