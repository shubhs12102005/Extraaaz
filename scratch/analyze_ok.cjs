const fs = require('fs');
const js = fs.readFileSync('scratch/ok_component_exact.js', 'utf8');

// Find all section tags and their classes
const sectionRe = /className:"([^"]*(?:section|container|hero|feature|pricing|testimonial|faq)[^"]*)"/g;
let m;
const classes = new Set();
while ((m = sectionRe.exec(js)) !== null) {
  classes.add(m[1]);
}
console.log('ClassNames in ok:', Array.from(classes));
