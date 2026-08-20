#!/usr/bin/env node
/* Generates tools/perf-boot.html — a byte-identical clone of index.html with
 * performance.mark() calls injected around every <script src>, plus timing
 * wrappers around the hot boot functions. Read-only w.r.t. the app: it never
 * touches index.html or anything under js/ or css/.
 *
 *   node tools/gen-perf-boot.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let out = src;

/* Resolve every relative css/ js/ href against the project root. */
out = out.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<base href="../">');

/* Mark around each <script src="..."> */
out = out.replace(/<script src="([^"]+)"><\/script>/g, (m, file) => {
  const k = file.replace(/^js\//, '');
  return '<script>performance.mark("S|' + k + '|a")</script>' + m +
         '<script>performance.mark("S|' + k + '|b")</script>';
});

/* Instrumentation injected immediately before js/app.js: wraps the functions
 * app.js calls during boot so we can attribute boot time to each. */
const WRAP = `<script>
(function(){
  window.__PFPERF = { enrich:{n:0,ms:0}, summarize:{n:0,ms:0}, cardRender:{n:0,ms:0},
                      filtersApply:{n:0,ms:0}, renderRail:{n:0,ms:0}, recipesBoot:{n:0,ms:0} };
  function wrap(objName, fn, bucket){
    var o = window.PF && window.PF[objName];
    if(!o || typeof o[fn] !== 'function') return;
    var orig = o[fn];
    o[fn] = function(){
      var t = performance.now();
      try { return orig.apply(this, arguments); }
      finally { var d = performance.now()-t; window.__PFPERF[bucket].n++; window.__PFPERF[bucket].ms += d; }
    };
  }
  wrap('compute','enrich','enrich');
  wrap('compute','summarize','summarize');
  wrap('card','render','cardRender');
  wrap('filters','apply','filtersApply');
  wrap('filters','renderRail','renderRail');
  wrap('recipes','boot','recipesBoot');
  document.addEventListener('DOMContentLoaded', function(){ performance.mark('BOOT|a'); });
})();
</script>
`;

const AFTER = `<script>
document.addEventListener('DOMContentLoaded', function(){
  performance.mark('BOOT|b');
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    performance.mark('BOOT|painted');
    window.__PFPERF.ready = true;
  });});
});
</script>
`;

const appTag = '<script>performance.mark("S|app.js|a")</script><script src="js/app.js"></script><script>performance.mark("S|app.js|b")</script>';
if (out.indexOf(appTag) === -1) throw new Error('nu am gasit tagul app.js dupa instrumentare');
out = out.replace(appTag, WRAP + appTag + AFTER);

fs.mkdirSync(path.join(ROOT, 'tools'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'tools', 'perf-boot.html'), out);
console.log('scris tools/perf-boot.html (' + out.length + ' octeti)');
