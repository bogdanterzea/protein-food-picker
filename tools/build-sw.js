#!/usr/bin/env node
/* =========================================================================
 * PROTEIN ATLAS SIBIU — GENERATOR DE SERVICE WORKER
 *
 * De ce există:
 *   Aplicația se folosește în magazin, cu telefonul, unde semnalul e prost
 *   sau lipsește. Datele sunt deja locale — 39.000 de linii de JS static —
 *   dar fără service worker browserul tot cere fiecare fișier de la rețea.
 *
 *   Fișierul ăsta citește ce încarcă efectiv `index.html` și scrie `sw.js`
 *   cu lista de precache. Lista NU se întreține de mână: dacă cineva adaugă
 *   o foaie de stil și uită să regenereze, `tools/check.js` pică.
 *
 *   Numele cache-ului conține un hash al conținutului tuturor fișierelor,
 *   deci o schimbare de conținut invalidează automat cache-ul vechi. Fără
 *   hash ar trebui să ții minte să incrementezi o versiune, iar asta se uită.
 *
 *   node tools/build-sw.js
 * ========================================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

/* Everything index.html pulls in, in the order it pulls it. */
const assets = [];
const re = /(?:href|src)="((?:css|js)\/[^"]+)"/g;
let m;
while ((m = re.exec(html))) if (assets.indexOf(m[1]) === -1) assets.push(m[1]);

const extra = ['./', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];

const all = extra.concat(assets);

/* Version = hash of the actual bytes, so content changes bust the cache. */
const hash = crypto.createHash('sha256');
all.forEach(a => {
  const p = path.join(ROOT, a === './' ? 'index.html' : a);
  if (fs.existsSync(p) && fs.statSync(p).isFile()) hash.update(fs.readFileSync(p));
});
const VERSION = hash.digest('hex').slice(0, 12);

const missing = all.filter(a => a !== './' && !fs.existsSync(path.join(ROOT, a)));
if (missing.length) {
  console.error('Fișiere referite dar inexistente:', missing.join(', '));
  process.exit(1);
}

const sw = `/* =========================================================================
 * PROTEIN ATLAS SIBIU — SERVICE WORKER
 *
 * GENERAT de tools/build-sw.js. Nu edita fișierul ăsta — modifică
 * generatorul sau index.html și rulează din nou:  node tools/build-sw.js
 *
 * Strategia: cache-first pentru tot. Fiecare fișier din aplicație e static
 * și versionat prin numele cache-ului, deci nu există „conținut proaspăt"
 * care s-ar putea învechi între două versiuni. Aplicația nu face niciun
 * request de rețea în afara propriilor fișiere.
 * ========================================================================= */
'use strict';

const CACHE = 'pf-atlas-${VERSION}';

const PRECACHE = ${JSON.stringify(all, null, 2).replace(/\n/g, '\n')};

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      /* Individually, so one 404 does not abort the whole install and leave
       * the user with no offline copy at all. */
      .then(c => Promise.all(PRECACHE.map(u => c.add(u).catch(function (err) {
        console.warn('[sw] nu am putut pune în cache', u, err);
      }))))
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith('pf-atlas-') && k !== CACHE)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        /* Cache what we fetched, so a page reached later still works offline
         * next time. Opaque and error responses are not worth storing. */
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(function () {
        /* Offline and not cached: a navigation still gets the app shell. */
        if (req.mode === 'navigate') return caches.match('index.html');
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});

/* The page asks for this when the user accepts a pending update. */
self.addEventListener('message', function (event) {
  if (event.data === 'skip-waiting') self.skipWaiting();
});
`;

fs.writeFileSync(path.join(ROOT, 'sw.js'), sw);
console.log('sw.js generat · versiune ' + VERSION + ' · ' + all.length + ' fișiere în precache');
