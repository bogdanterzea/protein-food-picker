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
    maxSalt: 1e6,   /* "no limit" — see SALT_STOPS below */
    maxTime: 1e6,   /* "no limit" — see TIME_STOPS below */
    maxEffort: 5,
    maxCost: 100,
    readyOnly: false,
    favOnly: false,
    pricedOnly: false,
    hideOnline: false,
    completeOnly: false,
    noCollagen: false,
    alwaysOnly: false,
    sort: 'score',
    dir: 'desc',
    view: 'grid'
  };

  /**
   * The arrays in DEFAULTS are templates, never the live value. A plain
   * Object.assign({}, DEFAULTS) aliases state.cats to DEFAULTS.cats, so the
   * first chip click pushes into DEFAULTS itself and the "default" state is
   * quietly wrong for the rest of the session.
   */
  function freshState() {
    const s = Object.assign({}, DEFAULTS);
    Object.keys(DEFAULTS).forEach(function (k) {
      if (Array.isArray(DEFAULTS[k])) s[k] = DEFAULTS[k].slice();
    });
    return s;
  }

  let state = freshState();
  let onChange = function () {};

  /* The shared RO/EN dictionary lives in i18n.js; these few strings belong to
   * this rail alone, so they carry their own translation instead. */
  function L(ro, en) {
    return PF.i18n.lang() === 'en' ? en : ro;
  }

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

  /* Salt has exactly the same shape of problem: roughly half the catalogue
   * sits under 0.5 g/100 g while cured meat and stock cubes run past 16 g.
   * A linear slider would spend nine tenths of its travel on a handful of
   * products, so this one walks stops too. */
  const SALT_STOPS = [0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 8, 1e6];

  /* Sliders whose <input> reports a stop INDEX rather than a real value.
   * setNum() and renderRail() both read this, so a stepped slider can never
   * be half-wired again. */
  const STOP_SCALES = { maxTime: TIME_STOPS, maxSalt: SALT_STOPS };

  function timeStopLabel(v) {
    if (v >= 1e6) return 'orice';
    if (v === 0) return 'instant';
    return '≤ ' + fmt.minutes(v, PF.i18n.lang());
  }

  function saltStopLabel(v) {
    if (v >= 1e6) return L('orice', 'any');
    const n = fmt.num(v, 2);
    /* Romanian writes 2,5 — not 2.5. */
    return '≤ ' + L(n.replace('.', ','), n) + ' g';
  }

  function nearestStopIndex(stops, v) {
    let best = stops.length - 1;
    let bestDiff = Infinity;
    stops.forEach(function (s, i) {
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

  const TIERS = ['S', 'A', 'B', 'C', 'D', 'E'];

  /* extra sort keys used by the table header, not offered in the dropdown */
  const EXTRA_SORTS = {
    carbs: { get: f => f._d.carbs100, asc: true },
    fat: { get: f => f._d.fat100, asc: true }
  };

  /* =======================================================================
   * SEARCH TERM
   * Normalising the query is not free and the query does not change while we
   * walk 512 products six times over (once per facet count). Memoise it.
   * ==================================================================== */
  let qMemo = { raw: null, norm: '' };

  function normQuery() {
    if (qMemo.raw !== state.q) {
      qMemo = { raw: state.q, norm: state.q ? fmt.normalize(state.q).trim() : '' };
    }
    return qMemo.norm;
  }

  /* =======================================================================
   * SEARCH RELEVANCE
   *
   * matches() only answers yes/no: does the query occur anywhere in the
   * search blob? That blob also carries tags, store names, taste notes and
   * suggested pairings — so "branza" genuinely matches Biltong (brânză is
   * one of its pairings) and "ton" genuinely matches Bil-ton-g. Correct as
   * a filter, useless as an order: ranked by score alone, the top result
   * for "branza" was a beef snack and for "linte" it was seitan flour.
   *
   * So whenever there IS a query we band results by WHERE the query landed,
   * and only sort inside a band. Field beats position beats wholeness:
   *
   *   90  the name is exactly the query
   *   80  the name starts with the query, ending on a word boundary
   *   70  the name starts with the query mid-word ("Tonic" for "ton")
   *   60  the query is a whole word inside the name
   *   50  brand, whole word
   *   40  subcategory, whole word
   *   30  category, whole word
   *   20  the name only contains the query as an interior fragment
   *   10  brand / subcategory / category, interior fragment
   *    0  matched nowhere but the rest of the blob
   *
   * The one deliberate departure from a strict "name > brand > subcategory"
   * order is band 20: an interior fragment of a name (Bil-TON-g, glu-TEN)
   * is the exact false positive this whole function exists to demote, so it
   * sits below a real word match on a brand or a subcategory. Everything
   * else follows the field order.
   *
   * The chosen sort still orders everything within one band, so "sort by
   * protein" keeps working — it simply can no longer float a pairing match
   * above a name match.
   * ==================================================================== */
  const REL = {
    NAME_EXACT: 90, NAME_PREFIX_WORD: 80, NAME_PREFIX: 70, NAME_WORD: 60,
    BRAND_WORD: 50, SUB_WORD: 40, CAT_WORD: 30,
    NAME_FRAGMENT: 20, OTHER_FRAGMENT: 10, BLOB: 0
  };

  /* fmt.normalize() folds every Romanian diacritic down to ASCII, so after
   * it runs a "word character" really is just [a-z0-9]. */
  const RE_WORD_CHAR = /[a-z0-9]/;

  function isWordChar(ch) {
    return ch !== undefined && RE_WORD_CHAR.test(ch);
  }

  /**
   * How well `nq` matches one field. 0 = not at all, 4 = the field IS the
   * query. The caller decides what a given quality is worth per field.
   */
  function matchQuality(text, nq) {
    if (!text) return 0;
    const hay = fmt.normalize(String(text));
    const at = hay.indexOf(nq);
    if (at === -1) return 0;
    const end = at + nq.length;
    const openBoundary = at === 0 || !isWordChar(hay.charAt(at - 1));
    const closeBoundary = end === hay.length || !isWordChar(hay.charAt(end));
    if (at === 0 && end === hay.length) return 4;      /* whole field */
    if (at === 0 && closeBoundary) return 3;           /* leading whole word */
    if (at === 0) return 2;                            /* leading fragment */
    if (openBoundary && closeBoundary) return 1;       /* interior whole word */
    return -1;                                         /* interior fragment */
  }

  function relevance(f, nq) {
    const nameQ = Math.max(matchQuality(f.nameRo, nq), matchQuality(f.name, nq));
    if (nameQ === 4) return REL.NAME_EXACT;
    if (nameQ === 3) return REL.NAME_PREFIX_WORD;
    if (nameQ === 2) return REL.NAME_PREFIX;
    if (nameQ === 1) return REL.NAME_WORD;

    const brandQ = matchQuality(f.brand, nq);
    if (brandQ > 0) return REL.BRAND_WORD;
    const subQ = matchQuality(f.subcategory, nq);
    if (subQ > 0) return REL.SUB_WORD;
    const catQ = Math.max(matchQuality(f.category, nq), matchQuality(PF.i18n.catName(f.category), nq));
    if (catQ > 0) return REL.CAT_WORD;

    if (nameQ === -1) return REL.NAME_FRAGMENT;
    if (brandQ === -1 || subQ === -1 || catQ === -1) return REL.OTHER_FRAGMENT;
    return REL.BLOB;
  }

  /* =======================================================================
   * APPLY
   * ==================================================================== */
  function matches(f, favourites) {
    const d = f._d;

    /* text */
    const nq = normQuery();
    if (nq && d.search.indexOf(nq) === -1) return false;

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
    if (((f.per100g || {}).salt || 0) > state.maxSalt) return false;
    if (f.timeMin > state.maxTime) return false;
    if (f.effort > state.maxEffort) return false;
    if (state.maxCost < DEFAULTS.maxCost) {
      if (d.ronPer100gProtein === null || d.ronPer100gProtein > state.maxCost) return false;
    }

    /* booleans */
    if (state.readyOnly && f.timeMin > 0) return false;
    if (state.pricedOnly && !d.bestPrice) return false;
    if (state.hideOnline && d.onlineOnly) return false;
    /* enrich() already scored the amino-acid profile: 'complete' means the
     * protein stands on its own, 'collagen' means it is glycine/proline
     * filler that does almost nothing for muscle. */
    if (state.completeOnly && d.qualityReason !== 'complete') return false;
    if (state.noCollagen && d.qualityReason === 'collagen') return false;
    if (state.alwaysOnly && !d.alwaysAvailable) return false;
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

    /* Relevance first, chosen sort second — but only when the user actually
     * typed something. With an empty box this is a no-op and the order is
     * exactly what it always was. Bands are precomputed: the comparator runs
     * O(n log n) times and relevance() reads four fields per call. */
    const nq = normQuery();
    let band = null;
    if (nq) {
      band = new Map();
      list.forEach(function (f) { band.set(f, relevance(f, nq)); });
    }

    return list.slice().sort(function (a, b) {
      if (band) {
        const rel = band.get(b) - band.get(a);
        if (rel) return rel;
      }
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

  /**
   * How many products a boolean toggle would leave, counted the same way the
   * chips are: with that one control cleared, everything else as it stands.
   * So the number beside a switch is exactly what flipping it will show.
   */
  function boolCount(foods, favourites, key) {
    const saved = state[key];
    state[key] = true;
    let n = 0;
    for (let i = 0; i < foods.length; i++) if (matches(foods[i], favourites)) n++;
    state[key] = saved;
    return n;
  }

  function renderRail(el, foods, favourites) {
    const catCounts = facetCounts(foods, favourites, 'cats');
    const storeCounts = facetCounts(foods, favourites, 'stores');
    const tagCounts = facetCounts(foods, favourites, 'tags');
    const dietCounts = facetCounts(foods, favourites, 'diets');
    const slotCounts = facetCounts(foods, favourites, 'slots');
    const tierCounts = facetCounts(foods, favourites, 'tiers');

    const completeCount = boolCount(foods, favourites, 'completeOnly');
    const noCollagenCount = boolCount(foods, favourites, 'noCollagen');
    const alwaysCount = boolCount(foods, favourites, 'alwaysOnly');
    const readyCount = boolCount(foods, favourites, 'readyOnly');
    const pricedCount = boolCount(foods, favourites, 'pricedOnly');
    const onlineCount = boolCount(foods, favourites, 'hideOnline');
    const favCount = boolCount(foods, favourites, 'favOnly');

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
    const tiers = TIERS
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
      }) +
      range({
        key: 'maxSalt',
        label: L('Sare maximă / 100 g', 'Max salt / 100 g'),
        min: 0,
        max: SALT_STOPS.length - 1,
        value: nearestStopIndex(SALT_STOPS, state.maxSalt),
        scale: 'salt',
        display: rangeDisplay('maxSalt'),
        minLabel: L('0,1 g', '0.1 g'),
        maxLabel: L('orice', 'any')
      }) +
      toggle('completeOnly', L('Doar proteină completă', 'Complete protein only'), completeCount) +
      toggle('noCollagen', L('Fără colagen / gelatină', 'No collagen or gelatine'), noCollagenCount);

    const effort =
      range({
        key: 'maxTime',
        label: t('filter.maxTime'),
        min: 0,
        max: TIME_STOPS.length - 1,
        value: nearestStopIndex(TIME_STOPS, state.maxTime),
        scale: 'time',
        display: rangeDisplay('maxTime'),
        minLabel: 'instant',
        maxLabel: 'orice'
      }) +
      range({
        key: 'maxEffort', label: t('filter.maxEffort'), min: 0, max: 5, value: state.maxEffort,
        display: rangeDisplay('maxEffort'), minLabel: '0', maxLabel: '5'
      }) +
      toggle('readyOnly', t('filter.readyOnly'), readyCount);

    const storeBody =
      '<div class="pf-chips">' + stores + '</div>' +
      toggle('alwaysOnly', L('Doar ce se găsește mereu', 'Always in stock only'), alwaysCount);

    /* Every product in the catalogue currently carries a price, so this
     * switch would filter nothing. Showing a dead control is worse than
     * showing none — but it stays visible if a shared link switched it on. */
    const pricedToggle = (pricedCount < foods.length || state.pricedOnly)
      ? toggle('pricedOnly', t('filter.pricedOnly'), pricedCount)
      : '';

    const price =
      range({
        key: 'maxCost', label: t('filter.maxCost'), min: 1, max: 100, value: state.maxCost,
        display: rangeDisplay('maxCost'),
        minLabel: '1 leu', maxLabel: 'orice'
      }) +
      pricedToggle +
      toggle('hideOnline', t('filter.hideOnline'), onlineCount);

    const html =
      '<div class="pf-row pf-row--between" style="margin-bottom:var(--sp-3)">' +
      '<span class="pf-eyebrow">' + t('filter.title') + '</span>' +
      '<button class="pf-btn pf-btn--sm pf-btn--ghost" data-act="reset-filters">' +
      t('filter.reset') + '</button>' +
      '</div>' +
      group(t('filter.category'), '<div class="pf-chips">' + cats + '</div>', state.cats.length, true) +
      group(t('filter.nutrition'), nutrition,
        countNumeric(['minProtein', 'minPurity', 'maxKcal', 'maxCarbs', 'maxFat', 'maxSalt']) +
        countBool(['completeOnly', 'noCollagen']), true) +
      group(t('filter.effort'), effort, countNumeric(['maxTime', 'maxEffort']) + countBool(['readyOnly']), false) +
      group(t('filter.store'), storeBody, state.stores.length + countBool(['alwaysOnly']), false) +
      group(t('filter.price'), price, countNumeric(['maxCost']) + countBool(['pricedOnly', 'hideOnline']), false) +
      group(t('filter.timing'), '<div class="pf-chips">' + slots + '</div>', state.slots.length, false) +
      group(t('filter.diet'), '<div class="pf-chips">' + diets + '</div>', state.diets.length, false) +
      group(t('filter.tier'), '<div class="pf-chips">' + tiers + '</div>', state.tiers.length, false) +
      group(t('filter.tags'), '<div class="pf-chips">' + tags + '</div>', state.tags.length, false) +
      group('Personal', toggle('favOnly', t('filter.favOnly'), favCount), countBool(['favOnly']), false);

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

  function countBool(keys) {
    let n = 0;
    keys.forEach(function (k) {
      if (state[k]) n++;
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
      maxSalt: v => '≤ ' + fmt.num(v, 2) + ' g ' + L('sare', 'salt'),
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
      hideOnline: t('filter.hideOnline'),
      completeOnly: L('Proteină completă', 'Complete protein'),
      noCollagen: L('Fără colagen', 'No collagen'),
      alwaysOnly: L('Mereu în stoc', 'Always in stock')
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

  /** '' unless the slider sits at the default "no ceiling" end. */
  function noLimit(key) {
    return state[key] >= DEFAULTS[key] ? L('orice', 'any') : '';
  }

  /**
   * The printed value beside a slider. Lives here so the rail markup and the
   * live-drag readout can never disagree.
   */
  function rangeDisplay(key) {
    switch (key) {
      /* A slider parked at its top stop is "no limit", and the scale under it
       * already says so. Printing "≤ 900" there read as a real ceiling the
       * user had chosen. */
      case 'minProtein': return '≥ ' + state.minProtein + ' g';
      case 'minPurity':  return '≥ ' + state.minPurity + '%';
      case 'maxKcal':    return noLimit('maxKcal') || '≤ ' + state.maxKcal;
      case 'maxCarbs':   return noLimit('maxCarbs') || '≤ ' + state.maxCarbs + ' g';
      case 'maxFat':     return noLimit('maxFat') || '≤ ' + state.maxFat + ' g';
      case 'maxSalt':    return saltStopLabel(state.maxSalt);
      case 'maxTime':    return timeStopLabel(state.maxTime);
      case 'maxEffort':  return t('effort.' + state.maxEffort);
      case 'maxCost':    return noLimit('maxCost') || '≤ ' + state.maxCost + ' lei';
      default:           return '';
    }
  }

  function setNum(key, value) {
    /* A stepped slider reports a stop INDEX, not a real value. */
    const stops = STOP_SCALES[key];
    if (stops) {
      const idx = Math.round(Number(value));
      state[key] = stops[fmt.clamp(idx, 0, stops.length - 1)];
    } else {
      const n = Number(value);
      if (!Number.isFinite(n)) return;
      state[key] = n;
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
    state = freshState();
    if (keepView) state.view = view;
    onChange();
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

  /**
   * The closed vocabularies. A URL is user-editable and outlives the data it
   * was made from, so anything not in these lists is dropped on the way in:
   * an unknown slug would otherwise produce an empty grid with an active
   * filter pill that explains nothing. `tags` and `stores` are deliberately
   * absent — their vocabularies are open-ended.
   */
  function vocabulary(key) {
    if (key === 'cats') return Object.keys(PF.i18n.CATEGORIES);
    if (key === 'diets') return Object.keys(PF.i18n.DIETS);
    if (key === 'slots') return PF.i18n.SLOTS.map(s => s.key);
    if (key === 'tiers') return TIERS;
    return null;
  }

  function hydrate(obj) {
    if (!obj) return;
    Object.keys(DEFAULTS).forEach(function (k) {
      if (obj[k] === undefined) return;
      if (Array.isArray(DEFAULTS[k])) {
        /* .slice()/.map() so we own the array — never the caller's. */
        let arr = (Array.isArray(obj[k]) ? obj[k] : [obj[k]]).map(String);
        const vocab = vocabulary(k);
        if (vocab) arr = arr.filter(v => vocab.indexOf(v) !== -1);
        state[k] = arr;
      } else if (typeof DEFAULTS[k] === 'number') {
        const n = Number(obj[k]);
        if (!Number.isFinite(n)) return;
        /* A stepped slider can only sit on a stop. Accepting maxTime=37 from
         * a hand-edited link left the readout saying "≤ 37 min" while the
         * thumb pointed at 45 — and the next drag jumped somewhere else. */
        const stops = STOP_SCALES[k];
        state[k] = stops ? stops[nearestStopIndex(stops, n)] : n;
      } else if (typeof DEFAULTS[k] === 'boolean') {
        state[k] = obj[k] === true || obj[k] === 'true';
      } else {
        state[k] = String(obj[k]);
      }
    });
    /* An unknown sort key would leave the whole list ordered by score while
     * the dropdown showed something else. */
    if (!SORTS.some(s => s.key === state.sort) && !EXTRA_SORTS[state.sort]) {
      state.sort = DEFAULTS.sort;
    }
    if (state.dir !== 'asc' && state.dir !== 'desc') state.dir = DEFAULTS.dir;
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
    serialize: serialize,
    hydrate: hydrate,
    facetCounts: facetCounts
  };
})();
