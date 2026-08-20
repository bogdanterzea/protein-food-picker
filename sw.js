/* =========================================================================
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

const CACHE = 'pf-atlas-483e423e6750';

const PRECACHE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "css/00-reset.css",
  "css/01-tokens.css",
  "css/02-base.css",
  "css/03-layout.css",
  "css/04-controls.css",
  "css/05-statbars.css",
  "css/06-cards.css",
  "css/07-modal.css",
  "css/08-panels.css",
  "css/09-charts.css",
  "css/10-animations.css",
  "css/11-responsive.css",
  "css/13-fridge.css",
  "css/14-stores.css",
  "css/12-print.css",
  "js/data/00-stores.js",
  "js/data/01-dairy-eggs.js",
  "js/data/02-fresh-meat.js",
  "js/data/03-deli-processed.js",
  "js/data/04-fish-seafood.js",
  "js/data/05-plant-protein.js",
  "js/data/06-supplements-snacks.js",
  "js/data/07-ready-meals.js",
  "js/data/08-bakery-drinks-sweets.js",
  "js/data/09-recipes.js",
  "js/utils/format.js",
  "js/utils/i18n.js",
  "js/utils/compute.js",
  "js/utils/storage.js",
  "js/components/tooltip.js",
  "js/components/ui.js",
  "js/components/charts.js",
  "js/components/card.js",
  "js/components/modal.js",
  "js/components/filters.js",
  "js/components/tray.js",
  "js/components/recipes.js",
  "js/components/stores.js",
  "js/components/boards.js",
  "js/components/compare.js",
  "js/app.js"
];

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
