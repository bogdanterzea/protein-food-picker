#!/usr/bin/env node
/* Builds throw-away load-order variants of index.html under tools/, so the
 * cost of "16 CSS files + 26 sync scripts" can be measured instead of guessed.
 * Nothing outside tools/ is written.
 *
 *   node tools/gen-perf-variants.js
 *
 * Variants
 *   perf-v1-cssbundle.html  1 CSS file, JS unchanged
 *   perf-v2-jsbundle.html   CSS unchanged, 1 JS file
 *   perf-v3-both.html       1 CSS + 1 JS
 *   perf-v4-defer.html      1 CSS + 1 deferred JS
 *   perf-v5-cssinline.html  CSS inlined in <style>, 1 deferred JS
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOOLS = path.join(ROOT, 'tools');
const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const cssFiles = [...src.matchAll(/<link rel="stylesheet" href="(css\/[^"]+)">/g)].map(m => m[1]);
const jsFiles = [...src.matchAll(/<script src="(js\/[^"]+)"><\/script>/g)].map(m => m[1]);
if (!cssFiles.length || !jsFiles.length) throw new Error('nu am gasit link/script in index.html');

const cssBundle = cssFiles.map(f =>
  '/* ' + f + ' */\n' + fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
const jsBundle = jsFiles.map(f =>
  '/* ' + f + ' */\n' + fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n;\n');

fs.writeFileSync(path.join(TOOLS, 'perf-bundle.css'), cssBundle);
fs.writeFileSync(path.join(TOOLS, 'perf-bundle.js'), jsBundle);

const CSS_BLOCK_RE = /<link rel="stylesheet" href="css\/[^"]+">\n?/g;
const JS_BLOCK_RE = /<script src="js\/[^"]+"><\/script>\n?/g;

function base(html) {
  return html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<base href="../">');
}
function collapse(html, re, replacement) {
  let first = true;
  return html.replace(re, () => {
    if (first) { first = false; return replacement + '\n'; }
    return '';
  });
}

const oneCss = '<link rel="stylesheet" href="tools/perf-bundle.css">';
const oneJs = '<script src="tools/perf-bundle.js"></script>';
const oneJsDefer = '<script defer src="tools/perf-bundle.js"></script>';

const v1 = collapse(base(src), CSS_BLOCK_RE, oneCss);
const v2 = collapse(base(src), JS_BLOCK_RE, oneJs);
const v3 = collapse(collapse(base(src), CSS_BLOCK_RE, oneCss), JS_BLOCK_RE, oneJs);
const v4 = collapse(collapse(base(src), CSS_BLOCK_RE, oneCss), JS_BLOCK_RE, oneJsDefer);
const v5 = collapse(collapse(base(src), CSS_BLOCK_RE, '<style>' + cssBundle + '</style>'), JS_BLOCK_RE, oneJsDefer);

const w = (n, c) => fs.writeFileSync(path.join(TOOLS, n), c);
w('perf-v1-cssbundle.html', v1);
w('perf-v2-jsbundle.html', v2);
w('perf-v3-both.html', v3);
w('perf-v4-defer.html', v4);
w('perf-v5-cssinline.html', v5);

console.log('CSS: ' + cssFiles.length + ' fisiere, ' + (cssBundle.length / 1024).toFixed(0) + ' KB');
console.log('JS : ' + jsFiles.length + ' fisiere, ' + (jsBundle.length / 1024).toFixed(0) + ' KB');
console.log('scrise 5 variante in tools/');
