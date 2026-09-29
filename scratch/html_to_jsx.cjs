const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let jsx = html;

  // Remove HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  // Replace class= with className=
  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');

  // Convert SVG and HTML kebab-case attributes to camelCase
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
    'alignment-baseline': 'alignmentBaseline',
    'baseline-shift': 'baselineShift',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'color-profile': 'colorProfile',
    'color-rendering': 'colorRendering',
    'dominant-baseline': 'dominantBaseline',
    'enable-background': 'enableBackground',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-size-adjust': 'fontSizeAdjust',
    'font-stretch': 'fontStretch',
    'font-style': 'fontStyle',
    'font-variant': 'fontVariant',
    'font-weight': 'fontWeight',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    'image-rendering': 'imageRendering',
    'letter-spacing': 'letterSpacing',
    'lighting-color': 'lightingColor',
    'marker-end': 'markerEnd',
    'marker-mid': 'markerMid',
    'marker-start': 'markerStart',
    'overline-position': 'overlinePosition',
    'overline-thickness': 'overlineThickness',
    'paint-order': 'paintOrder',
    'panose-1': 'panose1',
    'pointer-events': 'pointerEvents',
    'rendering-intent': 'renderingIntent',
    'shape-rendering': 'shapeRendering',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'strikethrough-position': 'strikethroughPosition',
    'strikethrough-thickness': 'strikethroughThickness',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'text-rendering': 'textRendering',
    'underline-position': 'underlinePosition',
    'underline-thickness': 'underlineThickness',
    'unicode-bidi': 'unicodeBidi',
    'word-spacing': 'wordSpacing',
    'writing-mode': 'writingMode',
    'tabindex': 'tabIndex',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'srcset': 'srcSet',
    'charset': 'charSet'
  };

  for (const [kebab, camel] of Object.entries(attrMap)) {
    const reg = new RegExp(`\\b${kebab}=`, 'g');
    jsx = jsx.replace(reg, `${camel}=`);
  }

  // Convert inline style strings style="..." to style={{...}}
  jsx = jsx.replace(/\bstyle="([^"]*)"/g, (match, styleStr) => {
    const styles = styleStr.split(';').filter(s => s.trim().length > 0);
    const objProps = styles.map(s => {
      const colIdx = s.indexOf(':');
      if (colIdx === -1) return '';
      const rawKey = s.slice(0, colIdx).trim();
      const rawVal = s.slice(colIdx + 1).trim();
      // camelCase rawKey
      const key = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `"${key}": ${JSON.stringify(rawVal)}`;
    }).filter(Boolean);
    return `style={{${objProps.join(', ')}}}`;
  });

  // Self-close void tags: <img ...>, <input ...>, <br>, <hr>
  jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Convert internal <a> tags with href="/..." to <Link to="/...">
  jsx = jsx.replace(/<a\s+([^>]*?)href="(\/[^"]*?)"([^>]*?)>/gi, (match, before, href, after) => {
    return `<Link ${before}to="${href}"${after}>`;
  });
  jsx = jsx.replace(/<\/a>/gi, '</Link>');

  return jsx;
}

module.exports = { htmlToJsx };
