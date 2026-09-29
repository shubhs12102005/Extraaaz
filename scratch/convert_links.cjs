const fs = require('fs');

function convertLinks(html) {
  const tokenRegex = /(<a\b[^>]*>|<\/a>)/gi;
  let lastIndex = 0;
  let match;
  let result = '';
  const stack = [];

  while ((match = tokenRegex.exec(html)) !== null) {
    result += html.slice(lastIndex, match.index);
    const tag = match[0];
    lastIndex = tokenRegex.lastIndex;

    if (tag.toLowerCase().startsWith('</a')) {
      const type = stack.pop();
      if (type === 'link') {
        result += '</Link>';
      } else {
        result += '</a>';
      }
    } else {
      // Opening <a> tag
      const hrefMatch = tag.match(/\bhref="([^"]*)"/i);
      const href = hrefMatch ? hrefMatch[1] : '';
      const isInternal = href.startsWith('/') && !href.startsWith('//') && !href.endsWith('.webp') && !href.endsWith('.png') && !href.endsWith('.svg') && !href.endsWith('.jpg') && !href.endsWith('.ico');
      
      if (isInternal) {
        stack.push('link');
        const linkTag = tag.replace(/^<a\b/i, '<Link').replace(/\bhref="/i, 'to="');
        result += linkTag;
      } else {
        stack.push('a');
        result += tag;
      }
    }
  }

  result += html.slice(lastIndex);
  return result;
}

module.exports = { convertLinks };
