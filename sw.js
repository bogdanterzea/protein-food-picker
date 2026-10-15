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

const CACHE = 'pf-atlas-e87147a9f70d';

const PRECACHE = [
  "./",
  "index.html",
  "deserturi.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "docs/BUDGET.html",
  "docs/CHANGELOG.html",
  "docs/CHARTS.html",
  "docs/DATA-SCHEMA.html",
  "docs/DESSERT-LIGHT.html",
  "docs/DESSERT-SCHEMA.html",
  "docs/DESSERT-SCIENCE.html",
  "docs/DESSERT-SHOPPING.html",
  "docs/MEAL-TIMING.html",
  "docs/METHODOLOGY.html",
  "docs/PROTEIN-GUIDE.html",
  "docs/ROADMAP.html",
  "docs/STORES-SIBIU.html",
  "docs/index.html",
  "docs/categories/bakery-drinks-sweets.html",
  "docs/categories/dairy-eggs.html",
  "docs/categories/deli-processed.html",
  "docs/categories/fish-seafood.html",
  "docs/categories/fresh-meat.html",
  "docs/categories/plant-protein.html",
  "docs/categories/ready-meals.html",
  "docs/categories/supplements-snacks.html",
  "README.html",
  "css/00-reset.css",
  "css/01-tokens.css",
  "css/15-docs.css",
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
  "js/app.js",
  "css/16-desserts.css",
  "js/data/10-dessert-pantry.js",
  "js/data/11-desserts-nobake.js",
  "js/data/12-desserts-baked.js",
  "js/data/13-desserts-fast.js",
  "js/data/14-dessert-reference.js",
  "js/data/15-desserts-light.js",
  "js/data/16-desserts-light-fruit.js",
  "js/data/17-desserts-protein-classics.js",
  "js/components/desserts.js"
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
        /* Offline and not cached. Handing back the app shell here was worse
         * than handing back nothing: at a /docs/ URL the shell's relative
         * paths resolve against /docs/, so the reader got a blank page that
         * still claimed to be the atlas. Only the app's own routes get the
         * shell; anything else says plainly that it is not available. */
        const inDocs = url.pathname.indexOf('/docs/') !== -1;
        if (req.mode === 'navigate' && !inDocs) {
          return caches.match('index.html');
        }
        if (req.mode === 'navigate') {
          return new Response(
            '<!doctype html><meta charset="utf-8">' +
            '<title>Indisponibil offline</title>' +
            '<body style="font:16px/1.6 system-ui;padding:2rem;max-width:34rem;' +
            'margin:auto;background:#05070d;color:#c8d3e4">' +
            '<h1 style="font-size:1.3rem">Pagina asta nu e în cache</h1>' +
            '<p>Documentul nu a fost descărcat înainte să dispară rețeaua. ' +
            'Atlasul funcționează în continuare offline.</p>' +
            '<p><a style="color:#1ec99f" href="/index.html">← Înapoi la atlas</a></p>',
            { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});

/* The page asks for this when the user accepts a pending update. */
self.addEventListener('message', function (event) {
  if (event.data === 'skip-waiting') self.skipWaiting();
});
