/* =========================================================================
 * PROTEIN ATLAS SIBIU — FILTER ENGINE + RAIL UI
 *
 * One place owns the filter state, one place applies it, one place renders
 * the controls. Everything else reads the result.
 *
 * Attaches to window.PF.filters
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  /* =======================================================================
   * DEFAULT STATE
   * ==================================================================== */
  const DEFAULTS = {
    q: '',
    cats: [],
    stores: [],
    diets: [],
    slots: [],
    tags: [],
    tiers: [],
    minProtein: 0,
    minPurity: 0,
    maxKcal: 900,
    maxCarbs: 100,
    maxFat: 100,
    maxTime: 1e6,   /* "no limit" — see TIME_STOPS below */
    maxEffort: 5,
    maxCost: 100,
    readyOnly: false,
    favOnly: false,
    pricedOnly: false,
    hideOnline: false,
    sort: 'score',
    dir: 'desc',
    view: 'grid'
  };

  let state = Object.assign({}, DEFAULTS);
  let onChange = function () {};

  /* The tags actually worth exposing as filter chips — the full controlled
   * vocabulary is ~50 slugs, which is a wall. These are the useful ones. */
  const FEATURED_TAGS = [
    'ready-to-eat', 'no-cook', 'grab-and-go', 'meal-prep', 'portable',
    'very-high-protein', 'protein-dense', 'low-fat', 'low-carb', 'high-fiber',
    'low-kcal', 'omega3', 'complete-protein', 'slow-digesting', 'whole-food',
    'cheap-protein', 'budget', 'premium', 'high-sodium', 'processed',
    'frozen', 'shelf-stable', 'local-sibiu', 'romanian-classic', 'bulk-buy'
  ];

  /* Preparation time is wildly non-linear: most foods land between 0 and 30
   * minutes, but dry beans need an overnight soak (~14 h) and a dry-cured
   * ham is a two-day project. A linear 0–240 slider would both bunch every
   * real choice into the first centimetre AND silently hide the slow foods.
   * So the slider walks these stops instead, and its top stop means
   * "no limit" so nothing is ever hidden by a filter the user never touched. */
  const TIME_STOPS = [0, 5, 10, 15, 20, 30, 45, 60, 90, 120, 180, 240, 480, 1440, 1e6];

  function timeStopLabel(v) {
    if (v >= 1e6) return 'orice';
    if (v === 0) return 'instant';
    return '≤ ' + fmt.minutes(v, PF.i18n.lang());
  }

  function nearestTimeStopIndex(v) {
    let best = TIME_STOPS.length - 1;
    let bestDiff = Infinity;
    TIME_STOPS.forEach(function (s, i) {
      const diff = Math.abs(s - v);
      if (diff < bestDiff) { bestDiff = diff; best = i; }
    });
    return best;
  }

  const SORTS = [
    { key: 'score', label: 'sort.score', get: f => f._d.score },
    { key: 'protein', label: 'sort.protein', get: f => f._d.protein100 },
    { key: 'purity', label: 'sort.purity', get: f => f._d.purityPct },
    { key: 'proteinServing', label: 'sort.proteinServing', get: f => f._d.perServing.protein },
    { key: 'value', label: 'sort.value', get: f => (f._d.ronPer100gProtein === null ? Infinity : f._d.ronPer100gProtein), asc: true },
    { key: 'kcal', label: 'sort.kcal', get: f => f._d.kcal100, asc: true },
    { key: 'time', label: 'sort.time', get: f => f.timeMin, asc: true },
    { key: 'taste', label: 'sort.taste', get: f => f._d.bars.taste },
    { key: 'satiety', label: 'sort.satiety', get: f => f._d.bars.satiety },
    { key: 'name', label: 'sort.name', get: f => f.nameRo || f.name, asc: true, text: true }
  ];

  /* extra sort keys used by the table header, not offered in the dropdown */
  const EXTRA_SORTS = {
    carbs: { get: f => f._d.carbs100, asc: true },
    fat: { get: f => f._d.fat100, asc: true }
  };

  /* =======================================================================
   * APPLY
   * ==================================================================== */
  function matches(f, favourites) {
    const d = f._d;

    /* text */
    if (state.q) {
      const nq = fmt.normalize(state.q).trim();
      if (nq && d.search.indexOf(nq) === -1) return false;
    }

    /* facets */
    if (state.cats.length && state.cats.indexOf(f.category) === -1) return false;
    if (state.tiers.length && state.tiers.indexOf(d.tier) === -1) return false;

    if (state.stores.length) {
      const names = (f.stores || []).map(s => s.name);
      let hit = false;
      for (let i = 0; i < state.stores.length; i++) {
        if (names.indexOf(state.stores[i]) !== -1) { hit = true; break; }
      }
      if (!hit) return false;
    }

    /* diets are AND — "vegan AND gluten free" must both hold */
    for (let i = 0; i < state.diets.length; i++) {
      if (!f.diet || !f.diet[state.diets[i]]) return false;
    }

    /* timing slots — OR, and the slot must be a genuine recommendation (>=3) */
    if (state.slots.length) {
      let hit = false;
      for (let i = 0; i < state.slots.length; i++) {
        if ((f.timing || {})[state.slots[i]] >= 3) { hit = true; break; }
      }
      if (!hit) return false;
    }

    /* tags — AND, so stacking chips narrows meaningfully */
    for (let i = 0; i < state.tags.length; i++) {
      if (d.allTags.indexOf(state.tags[i]) === -1) return false;
    }

    /* numeric */
    if (d.protein100 < state.minProtein) return false;
    if (d.purityPct < state.minPurity) return false;
    if (d.kcal100 > state.maxKcal) return false;
    if (d.carbs100 > state.maxCarbs) return false;
    if (d.fat100 > state.maxFat) return false;
    if (f.timeMin > state.maxTime) return false;
    if (f.effort > state.maxEffort) return false;
    if (state.maxCost < DEFAULTS.maxCost) {
      if (d.ronPer100gProtein === null || d.ronPer100gProtein > state.maxCost) return false;
    }

    /* booleans */
    if (state.readyOnly && f.timeMin > 0) return false;
    if (state.pricedOnly && !d.bestPrice) return false;
    if (state.hideOnline && d.onlineOnly) return false;
    if (state.favOnly && !(favourites && favourites.has(f.id))) return false;

    return true;
  }

  function apply(foods, favourites) {
    const out = foods.filter(f => matches(f, favourites));
    return sort(out);
  }

  function sort(list) {
    const def = SORTS.filter(s => s.key === state.sort)[0];
    const extra = EXTRA_SORTS[state.sort];
    const getter = def ? def.get : extra ? extra.get : SORTS[0].get;
    const isText = def && def.text;
    const naturalAsc = def ? !!def.asc : extra ? !!extra.asc : false;

    /* `dir` is relative to the sort's natural direction: 'desc' means
     * "the best first", which for a cost sort is ascending. */
    const flip = state.dir === 'asc' ? -1 : 1;
    const mult = (naturalAsc ? 1 : -1) * flip;

    return list.slice().sort(function (a, b) {
      const va = getter(a);
      const vb = getter(b);
      if (isText) return String(va).localeCompare(String(vb), 'ro') * mult;
      if (va === vb) return (b._d.score - a._d.score);
      return (va - vb) * mult;
    });
  }

  /* =======================================================================
   * FACET COUNTS — how many items each chip would yield
   * We compute counts against the state with that facet cleared, so a chip
   * never shows "0" just because it is the one you already picked.
   * ==================================================================== */
  function facetCounts(foods, favourites, facet) {
    const saved = state[facet];
    state[facet] = [];
    const pool = foods.filter(f => matches(f, favourites));
    state[facet] = saved;

    const counts = {};
    pool.forEach(function (f) {
      if (facet === 'cats') counts[f.category] = (counts[f.category] || 0) + 1;
      else if (facet === 'tiers') counts[f._d.tier] = (counts[f._d.tier] || 0) + 1;
      else if (facet === 'stores') {
        const seen = {};
        (f.stores || []).forEach(function (s) {
          if (!seen[s.name]) { seen[s.name] = 1; counts[s.name] = (counts[s.name] || 0) + 1; }
        });
      } else if (facet === 'tags') {
        f._d.allTags.forEach(tg => { counts[tg] = (counts[tg] || 0) + 1; });
      } else if (facet === 'diets') {
        Object.keys(f.diet || {}).forEach(k => {
          if (f.diet[k]) counts[k] = (counts[k] || 0) + 1;
        });
      } else if (facet === 'slots') {
        Object.keys(f.timing || {}).forEach(k => {
          if (f.timing[k] >= 3) counts[k] = (counts[k] || 0) + 1;
        });
      }
    });
    return counts;
  }

  /* =======================================================================
   * RAIL RENDERING
   * ==================================================================== */
  function chip(opts) {
    return (
      '<button class="pf-chip' + (opts.on ? ' is-on' : '') + '" ' +
      'data-facet="' + opts.facet + '" data-value="' + fmt.esc(opts.value) + '"' +
      (opts.color ? ' style="--chip-color:' + opts.color + '"' : '') +
      (opts.count === 0 ? ' disabled' : '') +
      ' aria-pressed="' + (opts.on ? 'true' : 'false') + '">' +
      (opts.color ? '<span class="pf-chip__dot"></span>' : '') +
      fmt.esc(opts.label) +
      (opts.count !== undefined ? '<span class="pf-chip__n">' + opts.count + '</span>' : '') +
      '</button>'
    );
  }

  function group(title, bodyHtml, activeCount, open) {
    return (
      '<details class="pf-rail__group"' + (open ? ' open' : '') + '>' +
      '<summary class="pf-rail__summary">' + fmt.esc(title) +
      '<span class="pf-rail__count" data-empty="' + (activeCount ? 'false' : 'true') + '">' +
      activeCount + '</span></summary>' +
      '<div class="pf-rail__body">' + bodyHtml + '</div>' +
      '</details>'
    );
  }

  function range(opts) {
    const fill = ((opts.value - opts.min) / (opts.max - opts.min)) * 100;
    return (
      '<div class="pf-range">' +
      '<div class="pf-range__head">' +
      '<span class="pf-range__label">' + fmt.esc(opts.label) + '</span>' +
      '<span class="pf-range__value">' + fmt.esc(opts.display) + '</span>' +
      '</div>' +
      '<input type="range" data-num="' + opts.key + '"' +
      (opts.scale ? ' data-scale="' + opts.scale + '"' : '') +
      ' min="' + opts.min + '" max="' + opts.max +
      '" step="' + (opts.step || 1) + '" value="' + opts.value +
      '" style="--fill:' + fill.toFixed(1) + '%" aria-label="' + fmt.esc(opts.label) + '">' +
      '<div class="pf-range__scale"><span>' + fmt.esc(opts.minLabel || String(opts.min)) +
      '</span><span>' + fmt.esc(opts.maxLabel || String(opts.max)) + '</span></div>' +
      '</div>'
    );
  }

  function toggle(key, label, count) {
    return (
      '<label class="pf-toggle">' +
      '<input type="checkbox" data-bool="' + key + '"' + (state[key] ? ' checked' : '') + '>' +
      '<span class="pf-toggle__track"></span>' +
      '<span class="pf-toggle__label">' + fmt.esc(label) + '</span>' +
      (count !== undefined ? '<span class="pf-toggle__n">' + count + '</span>' : '') +
      '</label>'
    );
  }

  function renderRail(el, foods, favourites) {
    const catCounts = facetCounts(foods, favourites, 'cats');
    const storeCounts = facetCounts(foods, favourites, 'stores');
    const tagCounts = facetCounts(foods, favourites, 'tags');
    const dietCounts = facetCounts(foods, favourites, 'diets');
    const slotCounts = facetCounts(foods, favourites, 'slots');
    const tierCounts = facetCounts(foods, favourites, 'tiers');

    /* --- categories --- */
    const cats = Object.keys(PF.i18n.CATEGORIES)
      .map(slug =>
        chip({
          facet: 'cats',
          value: slug,
          label: PF.i18n.catEmoji(slug) + ' ' + PF.i18n.catName(slug),
          on: state.cats.indexOf(slug) !== -1,
          count: catCounts[slug] || 0,
          color: 'var(--cat-' + slug + ')'
        })
      )
      .join('');

    /* --- stores, ordered by how much they actually stock --- */
    const storeNames = (window.PF_STORES || [])
      .map(s => s.name)
      .filter(n => storeCounts[n] || state.stores.indexOf(n) !== -1)
      .sort((a, b) => (storeCounts[b] || 0) - (storeCounts[a] || 0));

    const stores = storeNames
      .map(n =>
        chip({
          facet: 'stores',
          value: n,
          label: n,
          on: state.stores.indexOf(n) !== -1,
          count: storeCounts[n] || 0,
          color: PF.ui.storeColor(n)
        })
      )
      .join('');

    /* --- tiers --- */
    const tiers = ['S', 'A', 'B', 'C', 'D', 'E']
      .map(l =>
        chip({
          facet: 'tiers',
          value: l,
          label: 'Rang ' + l,
          on: state.tiers.indexOf(l) !== -1,
          count: tierCounts[l] || 0,
          color: 'var(--tier-' + l.toLowerCase() + ')'
        })
      )
      .join('');

    /* --- diets --- */
    const diets = Object.keys(PF.i18n.DIETS)
      .map(k =>
        chip({
          facet: 'diets',
          value: k,
          label: PF.i18n.DIETS[k].emoji + ' ' + PF.i18n.dietName(k),
          on: state.diets.indexOf(k) !== -1,
          count: dietCounts[k] || 0
        })
      )
      .join('');

    /* --- timing --- */
    const slots = PF.i18n.SLOTS.map(s =>
      chip({
        facet: 'slots',
        value: s.key,
        label: s.emoji + ' ' + PF.i18n.slotName(s.key),
        on: state.slots.indexOf(s.key) !== -1,
        count: slotCounts[s.key] || 0
      })
    ).join('');

    /* --- tags --- */
    const tags = FEATURED_TAGS.filter(tg => tagCounts[tg] || state.tags.indexOf(tg) !== -1)
      .map(tg =>
        chip({
          facet: 'tags',
          value: tg,
          label: PF.i18n.tagName(tg),
          on: state.tags.indexOf(tg) !== -1,
          count: tagCounts[tg] || 0
        })
      )
      .join('');

    /* --- numeric ranges --- */
    const nutrition =
      range({
        key: 'minProtein', label: t('filter.minProtein'), min: 0, max: 60, value: state.minProtein,
        display: rangeDisplay('minProtein'), minLabel: '0 g', maxLabel: '60 g+'
      }) +
      range({
        key: 'minPurity', label: t('filter.minPurity'), min: 0, max: 80, value: state.minPurity,
        display: rangeDisplay('minPurity'), minLabel: '0%', maxLabel: '80%'
      }) +
      range({
        key: 'maxKcal', label: t('filter.maxKcal'), min: 40, max: 900, step: 10, value: state.maxKcal,
        display: rangeDisplay('maxKcal'), minLabel: '40', maxLabel: 'orice'
      }) +
      range({
        key: 'maxCarbs', label: t('filter.maxCarbs'), min: 0, max: 100, value: state.maxCarbs,
        display: rangeDisplay('maxCarbs'), minLabel: '0 g', maxLabel: 'orice'
      }) +
      range({
        key: 'maxFat', label: t('filter.maxFat'), min: 0, max: 100, value: state.maxFat,
        display: rangeDisplay('maxFat'), minLabel: '0 g', maxLabel: 'orice'
      });

    const effort =
      range({
        key: 'maxTime',
        label: t('filter.maxTime'),
        min: 0,
        max: TIME_STOPS.length - 1,
        value: nearestTimeStopIndex(state.maxTime),
        scale: 'time',
        display: rangeDisplay('maxTime'),
        minLabel: 'instant',
        maxLabel: 'orice'
      }) +
      range({
        key: 'maxEffort', label: t('filter.maxEffort'), min: 0, max: 5, value: state.maxEffort,
        display: rangeDisplay('maxEffort'), minLabel: '0', maxLabel: '5'
      }) +
      toggle('readyOnly', t('filter.readyOnly'));

    const price =
      range({
        key: 'maxCost', label: t('filter.maxCost'), min: 1, max: 100, value: state.maxCost,
        display: rangeDisplay('maxCost'),
        minLabel: '1 leu', maxLabel: 'orice'
      }) +
      toggle('pricedOnly', t('filter.pricedOnly')) +
      toggle('hideOnline', t('filter.hideOnline'));

    const html =
      '<div class="pf-row pf-row--between" style="margin-bottom:var(--sp-3)">' +
      '<span class="pf-eyebrow">' + t('filter.title') + '</span>' +
      '<button class="pf-btn pf-btn--sm pf-btn--ghost" data-act="reset-filters">' +
      t('filter.reset') + '</button>' +
      '</div>' +
      group(t('filter.category'), '<div class="pf-chips">' + cats + '</div>', state.cats.length, true) +
      group(t('filter.nutrition'), nutrition, countNumeric(['minProtein', 'minPurity', 'maxKcal', 'maxCarbs', 'maxFat']), true) +
      group(t('filter.effort'), effort, countNumeric(['maxTime', 'maxEffort']) + (state.readyOnly ? 1 : 0), false) +
      group(t('filter.store'), '<div class="pf-chips">' + stores + '</div>', state.stores.length, false) +
      group(t('filter.price'), price, countNumeric(['maxCost']) + (state.pricedOnly ? 1 : 0) + (state.hideOnline ? 1 : 0), false) +
      group(t('filter.timing'), '<div class="pf-chips">' + slots + '</div>', state.slots.length, false) +
      group(t('filter.diet'), '<div class="pf-chips">' + diets + '</div>', state.diets.length, false) +
      group(t('filter.tier'), '<div class="pf-chips">' + tiers + '</div>', state.tiers.length, false) +
      group(t('filter.tags'), '<div class="pf-chips">' + tags + '</div>', state.tags.length, false) +
      group('Personal', toggle('favOnly', t('filter.favOnly')), state.favOnly ? 1 : 0, false);

    /* Preserve which <details> are open across re-renders. */
    const openSet = {};
    el.querySelectorAll('details').forEach(function (d, i) {
      openSet[i] = d.open;
    });

    el.innerHTML = html;

    el.querySelectorAll('details').forEach(function (d, i) {
      if (openSet[i] !== undefined) d.open = openSet[i];
    });
  }

  function countNumeric(keys) {
    let n = 0;
    keys.forEach(function (k) {
      if (state[k] !== DEFAULTS[k]) n++;
    });
    return n;
  }

  /* =======================================================================
   * ACTIVE FILTER PILLS
   * ==================================================================== */
  function activePills() {
    const out = [];

    const push = (facet, value, label) =>
      out.push(
        '<span class="pf-chip-active">' + fmt.esc(label) +
        '<button data-clear-facet="' + facet + '" data-clear-value="' + fmt.esc(value) +
        '" aria-label="Elimină filtrul">✕</button></span>'
      );

    state.cats.forEach(c => push('cats', c, PF.i18n.catName(c)));
    state.stores.forEach(s => push('stores', s, s));
    state.diets.forEach(d => push('diets', d, PF.i18n.dietName(d)));
    state.slots.forEach(s => push('slots', s, PF.i18n.slotName(s)));
    state.tags.forEach(tg => push('tags', tg, PF.i18n.tagName(tg)));
    state.tiers.forEach(l => push('tiers', l, 'Rang ' + l));

    const numLabels = {
      minProtein: v => '≥ ' + v + ' g proteină',
      minPurity: v => '≥ ' + v + '% din calorii',
      maxKcal: v => '≤ ' + v + ' kcal',
      maxCarbs: v => '≤ ' + v + ' g carbo',
      maxFat: v => '≤ ' + v + ' g grăsimi',
      maxTime: v => timeStopLabel(v),
      maxEffort: v => 'efort ≤ ' + v,
      maxCost: v => '≤ ' + v + ' lei/100g P'
    };
    Object.keys(numLabels).forEach(function (k) {
      if (state[k] !== DEFAULTS[k]) push('num', k, numLabels[k](state[k]));
    });

    const boolLabels = {
      readyOnly: t('filter.readyOnly'),
      favOnly: t('filter.favOnly'),
      pricedOnly: t('filter.pricedOnly'),
      hideOnline: t('filter.hideOnline')
    };
    Object.keys(boolLabels).forEach(function (k) {
      if (state[k]) push('bool', k, boolLabels[k]);
    });

    if (state.q) push('q', '', '„' + fmt.truncate(state.q, 24) + '”');

    return out.join('');
  }

  /* =======================================================================
   * MUTATION API
   * ==================================================================== */
  function toggleFacet(facet, value) {
    const arr = state[facet];
    const i = arr.indexOf(value);
    if (i === -1) arr.push(value);
    else arr.splice(i, 1);
    onChange();
  }

  /**
   * The printed value beside a slider. Lives here so the rail markup and the
   * live-drag readout can never disagree.
   */
  function rangeDisplay(key) {
    switch (key) {
      case 'minProtein': return '≥ ' + state.minProtein + ' g';
      case 'minPurity':  return '≥ ' + state.minPurity + '%';
      case 'maxKcal':    return '≤ ' + state.maxKcal;
      case 'maxCarbs':   return '≤ ' + state.maxCarbs + ' g';
      case 'maxFat':     return '≤ ' + state.maxFat + ' g';
      case 'maxTime':    return timeStopLabel(state.maxTime);
      case 'maxEffort':  return t('effort.' + state.maxEffort);
      case 'maxCost':    return state.maxCost >= DEFAULTS.maxCost ? 'orice' : '≤ ' + state.maxCost + ' lei';
      default:           return '';
    }
  }

  function setNum(key, value) {
    /* The time slider reports a stop index, not minutes. */
    if (key === 'maxTime') {
      const idx = Math.round(Number(value));
      state.maxTime = TIME_STOPS[fmt.clamp(idx, 0, TIME_STOPS.length - 1)];
    } else {
      state[key] = Number(value);
    }
    onChange();
  }

  function setBool(key, value) {
    state[key] = !!value;
    onChange();
  }

  function setQuery(q) {
    state.q = q;
    onChange();
  }

  function setSort(key) {
    if (state.sort === key) state.dir = state.dir === 'desc' ? 'asc' : 'desc';
    else {
      state.sort = key;
      state.dir = 'desc';
    }
    onChange();
  }

  function clearFacet(facet, value) {
    if (facet === 'num') state[value] = DEFAULTS[value];
    else if (facet === 'bool') state[value] = false;
    else if (facet === 'q') state.q = '';
    else {
      const i = state[facet].indexOf(value);
      if (i !== -1) state[facet].splice(i, 1);
    }
    onChange();
  }

  function reset(keepView) {
    const view = state.view;
    state = Object.assign({}, DEFAULTS, {
      cats: [], stores: [], diets: [], slots: [], tags: [], tiers: []
    });
    if (keepView) state.view = view;
    onChange();
  }

  function isDefault() {
    return (
      !state.q &&
      !state.cats.length && !state.stores.length && !state.diets.length &&
      !state.slots.length && !state.tags.length && !state.tiers.length &&
      countNumeric(['minProtein', 'minPurity', 'maxKcal', 'maxCarbs', 'maxFat', 'maxTime', 'maxEffort', 'maxCost']) === 0 &&
      !state.readyOnly && !state.favOnly && !state.pricedOnly && !state.hideOnline
    );
  }

  function serialize() {
    const out = {};
    Object.keys(state).forEach(function (k) {
      const v = state[k];
      const dflt = DEFAULTS[k];
      if (Array.isArray(v)) { if (v.length) out[k] = v; }
      else if (v !== dflt) out[k] = v;
    });
    return out;
  }

  function hydrate(obj) {
    if (!obj) return;
    Object.keys(DEFAULTS).forEach(function (k) {
      if (obj[k] === undefined) return;
      if (Array.isArray(DEFAULTS[k])) {
        state[k] = Array.isArray(obj[k]) ? obj[k] : [String(obj[k])];
      } else if (typeof DEFAULTS[k] === 'number') {
        const n = Number(obj[k]);
        if (!Number.isNaN(n)) state[k] = n;
      } else if (typeof DEFAULTS[k] === 'boolean') {
        state[k] = obj[k] === true || obj[k] === 'true';
      } else {
        state[k] = String(obj[k]);
      }
    });
  }

  PF.filters = {
    DEFAULTS: DEFAULTS,
    SORTS: SORTS,
    FEATURED_TAGS: FEATURED_TAGS,
    TIME_STOPS: TIME_STOPS,
    timeStopLabel: timeStopLabel,
    rangeDisplay: rangeDisplay,
    get state() { return state; },
    setOnChange: function (fn) { onChange = fn; },
    apply: apply,
    sort: sort,
    matches: matches,
    renderRail: renderRail,
    activePills: activePills,
    toggleFacet: toggleFacet,
    setNum: setNum,
    setBool: setBool,
    setQuery: setQuery,
    setSort: setSort,
    clearFacet: clearFacet,
    reset: reset,
    isDefault: isDefault,
    serialize: serialize,
    hydrate: hydrate,
    facetCounts: facetCounts
  };
})();
