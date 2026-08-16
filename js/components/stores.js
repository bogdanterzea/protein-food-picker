/* =========================================================================
 * PROTEIN ATLAS SIBIU — STORE GUIDE
 * File: js/components/stores.js
 *
 * WHY THIS EXISTS
 *
 * `js/data/00-stores.js` describes 18 Sibiu retailers in real detail —
 * strengths, weaknesses, price level, opening hours, Sunday trading, loyalty
 * schemes, what each one is actually good for. Until this file, none of it
 * reached the screen: the app read only `name` and `color`, and every other
 * researched field was dead weight in the bundle.
 *
 * The atlas answers "what should I buy". This answers "where should I go".
 *
 * Everything numeric here is derived from the atlas at render time — how many
 * products each store carries, its cheapest protein, its best-value product.
 * Nothing is hand-typed, so the guide cannot drift away from the data.
 * ========================================================================= */
(function () {
  'use strict';

  const PF = window.PF;
  const fmt = PF.fmt;

  /* Keys must match `kind` in js/data/00-stores.js exactly — the twelve
   * values used there, no more. An unmapped kind falls through to the raw
   * slug, which is how the missing 'cash-and-carry' first showed up. */
  const KIND_LABEL = {
    discounter: 'Discounter',
    hypermarket: 'Hipermarket',
    supermarket: 'Supermarket',
    'cash-and-carry': 'Cash & carry',
    proximity: 'Magazin de proximitate',
    market: 'Piață',
    butcher: 'Măcelărie',
    fishmonger: 'Pescărie',
    pharmacy: 'Farmacie',
    online: 'Online',
    sports: 'Magazin sportiv',
    foodservice: 'Raion cald / fast-food'
  };

  let sort = 'price';   /* price | range | name */

  /**
   * Everything the atlas knows about one retailer.
   *
   * A product counts as "carried" if it lists this store, and its price at
   * this store is what gets compared — not the cheapest price anywhere.
   */
  let statsCache = null;   /* cleared on every render, see render() */

  function stats(store) {
    if (statsCache && statsCache[store.name]) return statsCache[store.name];
    const out = computeStats(store);
    if (statsCache) statsCache[store.name] = out;
    return out;
  }

  function computeStats(store) {
    let count = 0;
    let best = null;      /* cheapest protein sold here */
    let bestPer100 = Infinity;
    const cats = {};

    PF.data.foods.forEach(function (f) {
      const line = (f.stores || []).filter(s => s.name === store.name)[0];
      if (!line) return;
      count++;
      cats[f.category] = (cats[f.category] || 0) + 1;

      /* Price per 100 g of protein, using THIS store's price. Collagen is
       * excluded for the same reason it is excluded from the leaderboards:
       * it would win on price while being an incomplete protein. */
      if (f._d && f._d.qualityReason === 'collagen') return;
      const p = f.per100g && f.per100g.protein;
      if (!line.priceRon || !line.packGrams || !p) return;
      const per100 = (line.priceRon / (line.packGrams * p / 100)) * 100;
      if (Number.isFinite(per100) && per100 < bestPer100) {
        bestPer100 = per100;
        best = f;
      }
    });

    return {
      count: count,
      best: best,
      bestPer100: best ? bestPer100 : null,
      topCats: Object.keys(cats).sort((a, b) => cats[b] - cats[a]).slice(0, 3)
    };
  }

  /**
   * Price index bar. 100 is the Sibiu average, so the useful range is roughly
   * 80–130 — a bar anchored at zero would squash every store into the same
   * sliver. Anchored at 100 instead, so cheap reads left and dear reads right.
   */
  function priceBar(idx) {
    if (typeof idx !== 'number') return '';
    const lo = 70, hi = 140;
    const clamp = Math.max(lo, Math.min(hi, idx));
    const mid = ((100 - lo) / (hi - lo)) * 100;
    const pos = ((clamp - lo) / (hi - lo)) * 100;
    const cheap = idx < 100;
    const left = cheap ? pos : mid;
    const width = Math.abs(pos - mid);

    return '<div class="pf-sprice">' +
      '<span class="pf-sprice__lbl">Preț</span>' +
      '<div class="pf-sprice__track">' +
      '<i class="pf-sprice__fill' + (cheap ? ' is-cheap' : ' is-dear') + '" style="left:' +
      left.toFixed(1) + '%;width:' + Math.max(width, 1.2).toFixed(1) + '%"></i>' +
      '<b class="pf-sprice__mid" style="left:' + mid.toFixed(1) + '%"></b>' +
      '</div>' +
      '<span class="pf-sprice__val">' + idx +
      '<span class="pf-muted"> / 100</span></span>' +
      '</div>';
  }

  function card(store) {
    const s = stats(store);
    const kind = KIND_LABEL[store.kind] || store.kind || '';

    const facts = [
      store.hoursTypical ? '🕒 ' + fmt.esc(store.hoursTypical) : null,
      store.openSunday === true ? '📅 Deschis duminica'
        : store.openSunday === false ? '📅 Închis duminica' : null,
      store.onlineOrder ? '💻 Comandă online' : null,
      store.loyalty ? '🎫 ' + fmt.esc(store.loyalty) : null
    ].filter(Boolean);

    const lists =
      (store.strengths && store.strengths.length
        ? '<div class="pf-sgood"><div class="pf-eyebrow">Bun la</div><ul>' +
          store.strengths.map(x => '<li>' + fmt.esc(x) + '</li>').join('') +
          '</ul></div>'
        : '') +
      (store.weaknesses && store.weaknesses.length
        ? '<div class="pf-sbad"><div class="pf-eyebrow">Slab la</div><ul>' +
          store.weaknesses.map(x => '<li>' + fmt.esc(x) + '</li>').join('') +
          '</ul></div>'
        : '');

    const cats = (store.bestFor || s.topCats).map(function (c) {
      return '<span class="pf-badge">' + PF.i18n.catEmoji(c) + ' ' +
        fmt.esc(PF.i18n.catName(c)) + '</span>';
    }).join('');

    return (
      '<article class="pf-store" style="--store-color:' + fmt.esc(store.color || '#888') + '">' +
      '<header class="pf-store__head">' +
      '<span class="pf-store__mark">' + fmt.esc(store.emoji || '🏬') + '</span>' +
      '<span class="pf-grow">' +
      '<h3 class="pf-store__name">' + fmt.esc(store.name) + '</h3>' +
      '<span class="pf-store__kind">' + fmt.esc(kind) +
      (s.count ? ' · ' + s.count + ' produse în atlas' : '') + '</span>' +
      '</span>' +
      (s.count
        ? '<button class="pf-btn pf-btn--sm" data-store-filter="' + fmt.esc(store.name) +
          '">Vezi produsele</button>'
        : '') +
      '</header>' +

      (store.sibiuNote
        ? '<p class="pf-store__note">' + fmt.esc(store.sibiuNote) + '</p>' : '') +

      priceBar(store.priceIndex) +

      (facts.length
        ? '<div class="pf-store__facts">' +
          facts.map(f => '<span>' + f + '</span>').join('') + '</div>'
        : '') +

      (s.best
        ? '<div class="pf-store__best">' +
          '<span class="pf-eyebrow">Cea mai ieftină proteină de aici</span>' +
          '<button class="pf-link" data-goto-food="' + fmt.esc(s.best.id) + '">' +
          fmt.esc(s.best.nameRo || s.best.name) + '</button>' +
          '<span class="pf-store__bestval">' +
          fmt.ronApprox(s.bestPer100, { decimals: 2 }) + ' / 100 g proteină</span>' +
          '</div>'
        : '') +

      (lists ? '<div class="pf-store__lists">' + lists + '</div>' : '') +
      (cats ? '<div class="pf-store__cats">' + cats + '</div>' : '') +
      '</article>'
    );
  }

  function render() {
    const all = (PF.data.stores || []).slice();
    if (!all.length) return '';

    /* One pass over 504 products per store is enough; without this, sorting
     * and then rendering walks the whole atlas twice per store. */
    statsCache = {};

    const counts = {};
    all.forEach(s => { counts[s.name] = stats(s).count; });

    all.sort(function (a, b) {
      if (sort === 'name') return a.name.localeCompare(b.name, 'ro');
      if (sort === 'range') return counts[b.name] - counts[a.name];
      /* price: cheapest first, stores without an index last */
      const ai = typeof a.priceIndex === 'number' ? a.priceIndex : 999;
      const bi = typeof b.priceIndex === 'number' ? b.priceIndex : 999;
      return ai - bi;
    });

    const tab = (key, label) =>
      '<button class="pf-chip' + (sort === key ? ' is-on' : '') +
      '" data-store-sort="' + key + '">' + label + '</button>';

    return (
      '<section class="pf-panel"><div class="pf-panel__body">' +
      '<div class="pf-eyebrow">Unde cumperi</div>' +
      '<p class="pf-lede" style="margin:var(--sp-2) 0 var(--sp-3)">' +
      'Cele ' + all.length + ' locuri din Sibiu la care se referă atlasul. ' +
      'Indicele de preț e relativ: 100 e media orașului, sub 100 e mai ieftin. ' +
      'Numărul de produse și cea mai ieftină proteină se calculează din atlas, ' +
      'nu sunt scrise de mână.</p>' +
      '<div class="pf-chips">' +
      tab('price', 'După preț') + tab('range', 'După sortiment') + tab('name', 'Alfabetic') +
      '</div>' +
      '<div class="pf-stores">' + all.map(card).join('') + '</div>' +
      '</div></section>'
    );
  }

  /* Delegated, because the chart view re-renders itself wholesale. */
  document.addEventListener('click', function (e) {
    const t = e.target && e.target.closest ? e.target : null;
    if (!t) return;

    const sortBtn = t.closest('[data-store-sort]');
    if (sortBtn) {
      sort = sortBtn.getAttribute('data-store-sort');
      PF.app.repaint();
      return;
    }

    const filter = t.closest('[data-store-filter]');
    if (filter) {
      const name = filter.getAttribute('data-store-filter');
      PF.filters.reset();
      PF.filters.toggleFacet('stores', name);
      PF.app.setView('grid');
      PF.app.refresh();
      PF.app.toast('Filtrat: ' + name, 'ok');
      window.scrollTo(0, 0);
    }
  });

  PF.stores = { render: render, stats: stats };
})();
