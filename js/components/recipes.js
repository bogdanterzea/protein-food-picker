/* =========================================================================
 * PROTEIN ATLAS SIBIU — MESE COMPLETE
 *
 * Turns the recipe definitions into real numbers by resolving every
 * ingredient against the 505-food atlas (or the pantry) and summing.
 * Nothing here is hand-typed nutrition: change a product's label and every
 * meal that uses it updates.
 *
 * Attaches to window.PF.recipes
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  /* Shared with modal.js — both render the same titled sections. */
  const block = PF.ui.block;
  const tagList = PF.ui.tagList;

  let ALL = [];
  let dlg = null;
  let currentRecipe = null;
  let activeMethod = 'all';
  let activeBase = 'all';

  const BASE_LABEL = {
    pui: 'Pui', curcan: 'Curcan', porc: 'Porc', vita: 'Vită',
    peste: 'Pește', oua: 'Ouă', lactate: 'Lactate',
    leguminoase: 'Leguminoase', tofu: 'Tofu & soia'
  };

  const MEAL_LABEL = {
    'mic-dejun': 'Mic dejun', pranz: 'Prânz', cina: 'Cină', gustare: 'Gustare'
  };

  /* =======================================================================
   * "CE AM ÎN FRIGIDER"
   *
   * Atlasul răspunde la "ce să cumpăr". Asta răspunde la întrebarea de la
   * 19:00: "am chestiile astea în casă — ce pot găti ACUM?"
   *
   * Bifezi ingredientele pe care le ai, iar fiecare masă îți arată câte
   * ingrediente ai din câte are nevoie și exact ce-ți lipsește. Se poate
   * ordona după cât de aproape ești de a putea găti.
   *
   * Cheia unui ingredient: 'a:<id-produs>' pentru atlas, 'p:<cheie>' pentru
   * cămară. Se ține în localStorage, ca restul stării personale.
   * ==================================================================== */
  let fridge = new Set();
  let fridgeMode = false;   /* true = ordonează după ce poți găti acum */
  let fridgeOpen = false;
  const fridgeExpanded = new Set();   /* groups showing their full ingredient list */

  /* Ingredients per group before the "+N altele" cut. Chosen so the open panel
   * stays near one phone screen per group — with 83 ingredients across 43
   * meals, showing everything turns the panel into a 2400px wall of chips. */
  const GROUP_CAP = 12;

  function ingKey(i) {
    return i.id ? 'a:' + i.id : 'p:' + i.p;
  }

  function ingLabel(i) {
    if (i.id) {
      const f = PF.data.byId[i.id];
      return f ? (f.nameRo || f.name) : i.id;
    }
    const p = (window.PF_PANTRY || {})[i.p];
    return p ? p.name : i.p;
  }

  /** Ingredients you would obviously never track — salt, pepper, herbs. */
  function isStaple(i) {
    return !!i.free;
  }

  function loadFridge() {
    fridge = PF.store.getSet('fridge');
    fridgeMode = PF.store.get('fridgeMode', false) === true;
  }

  function saveFridge() {
    PF.store.saveSet('fridge', fridge);
    PF.store.set('fridgeMode', fridgeMode);
  }

  /** How much of a recipe you already have at home. */
  function coverage(r) {
    const need = (r.ing || []).filter(i => !isStaple(i));
    const missing = need.filter(i => !fridge.has(ingKey(i)));
    return {
      total: need.length,
      have: need.length - missing.length,
      missing: missing,
      ratio: need.length ? (need.length - missing.length) / need.length : 0,
      complete: missing.length === 0 && need.length > 0
    };
  }

  /** Every distinct ingredient used across all meals, most-used first. */
  function ingredientIndex() {
    const map = new Map();
    ALL.forEach(r => (r.ing || []).forEach(i => {
      if (isStaple(i)) return;
      const k = ingKey(i);
      if (!map.has(k)) {
        map.set(k, { key: k, label: ingLabel(i), uses: 0, group: groupOf(i) });
      }
      map.get(k).uses++;
    }));
    return [...map.values()].sort((a, b) => b.uses - a.uses || a.label.localeCompare(b.label, 'ro'));
  }

  const GROUP_ORDER = ['Proteină', 'Garnitură & cereale', 'Legume & fructe', 'Cămară'];

  function groupOf(i) {
    if (i.p) {
      const veg = ['cartofi', 'cartofi-dulci', 'ceapa', 'usturoi', 'rosii', 'rosii-cutie',
        'ardei', 'morcov', 'dovlecel', 'vinete', 'varza', 'castraveti', 'salata', 'lamaie'];
      const carb = ['orez-alb', 'bulgur', 'cuscus', 'malai', 'faina', 'pesmet'];
      if (veg.indexOf(i.p) !== -1) return 'Legume & fructe';
      if (carb.indexOf(i.p) !== -1) return 'Garnitură & cereale';
      return 'Cămară';
    }

    const f = PF.data.byId[i.id];
    if (!f) return 'Cămară';

    /* Group by what the ingredient actually contributes, not by which atlas
     * file it lives in. Broccoli and spinach are filed under plant-protein
     * because that is where vegetables sit in the atlas — but with 2–3 g of
     * protein per 100 g nobody shops for them as a protein. */
    const p = (f.per100g && f.per100g.protein) || 0;
    const name = fmt.normalize(f.nameRo || f.name || '');

    if (/paste|orez|ovaz|bulgur|cuscus|quinoa|hrisca|amarant|malai|faina|pesmet|lipie|tortilla|chifl|paine|covrig/.test(name)) {
      return 'Garnitură & cereale';
    }
    /* Protein beats shelf position. Skimmed milk powder is 36 g of protein but
     * lives in the baking aisle, so its atlas category would file it under
     * grains — which is where nobody would look for it. */
    if (p >= 15) return 'Proteină';
    if (p < 5) return f.category === 'plant-protein' ? 'Legume & fructe' : 'Cămară';
    if (f.category === 'bakery-drinks-sweets') return 'Garnitură & cereale';
    if (['fresh-meat', 'fish-seafood', 'deli-processed', 'dairy-eggs', 'plant-protein',
      'ready-meals', 'supplements-snacks'].indexOf(f.category) !== -1) return 'Proteină';
    return 'Cămară';
  }

  function renderFridge() {
    const index = ingredientIndex();
    const groups = {};
    index.forEach(it => { (groups[it.group] = groups[it.group] || []).push(it); });

    const cookable = ALL.filter(r => coverage(r).complete).length;
    const almost = ALL.filter(r => { const c = coverage(r); return !c.complete && c.missing.length <= 2; }).length;

    /* When nothing is cookable yet — the normal state after ticking a handful
     * of things — "0 mese gata" is a dead end. Name the closest meal instead,
     * so the collapsed line always tells you what to do next. */
    let closest = null;
    if (fridge.size && !cookable && !almost) {
      ALL.forEach(function (r) {
        const c = coverage(r);
        if (c.have && (!closest || c.missing.length < closest.c.missing.length)) closest = { r: r, c: c };
      });
    }

    const body = GROUP_ORDER.filter(g => groups[g]).map(function (g) {
      const all = groups[g];
      const open = fridgeExpanded.has(g);

      /* Anything already ticked stays visible even if it falls past the cut —
       * otherwise unticking something you just ticked means hunting for it. */
      const shown = open ? all : all.filter(function (it, idx) {
        return idx < GROUP_CAP || fridge.has(it.key);
      });
      const hidden = all.length - shown.length;

      return '<div class="pf-fridge__group">' +
        '<div class="pf-eyebrow">' + fmt.esc(g) +
        '<span class="pf-fridge__count">' + all.length + '</span></div>' +
        '<div class="pf-chips">' +
        shown.map(function (it) {
          return '<button class="pf-chip' + (fridge.has(it.key) ? ' is-on' : '') +
            '" data-fridge="' + fmt.esc(it.key) + '" aria-pressed="' +
            (fridge.has(it.key) ? 'true' : 'false') + '">' +
            fmt.esc(it.label) + '<span class="pf-chip__n">' + it.uses + '</span></button>';
        }).join('') +
        (hidden > 0 || open
          ? '<button class="pf-chip pf-chip--ghost" data-fridge-more="' + fmt.esc(g) + '">' +
            (open ? '− arată mai puține' : '+ încă ' + hidden) + '</button>'
          : '') +
        '</div></div>';
    }).join('');

    return '<section class="pf-fridge' + (fridgeOpen ? ' is-open' : '') + '">' +
      '<button class="pf-fridge__head" data-fridge-toggle aria-expanded="' +
      (fridgeOpen ? 'true' : 'false') + '" aria-controls="pf-fridge-body">' +
      '<span class="pf-fridge__icon">🧊</span>' +
      '<span class="pf-fridge__title">Ce am în frigider' +
      (fridge.size ? '<span class="pf-badge pf-badge--accent">' + fridge.size + ' bifate</span>' : '') +
      '</span>' +
      '<span class="pf-fridge__summary">' +
      (!fridge.size
        ? 'Bifează ce ai în casă și îți arăt ce poți găti acum'
        : closest
          ? 'Cel mai aproape: <b>' + fmt.esc(closest.r.name) + '</b> — îți lipsesc ' +
            closest.c.missing.length
          : '<b>' + cookable + '</b> gata de gătit · <b>' + almost + '</b> la 1–2 ingrediente') +
      '</span>' +
      '<span class="pf-fridge__chev">' + (fridgeOpen ? '▾' : '▸') + '</span>' +
      '</button>' +
      (fridgeOpen
        ? '<div class="pf-fridge__body" id="pf-fridge-body">' + body +
          '<div class="pf-row" style="gap:var(--sp-2);margin-top:var(--sp-3);flex-wrap:wrap">' +
          '<label class="pf-toggle"><input type="checkbox" data-fridge-mode' +
          (fridgeMode ? ' checked' : '') + '><span class="pf-toggle__track"></span>' +
          '<span class="pf-toggle__label">Ordonează după ce pot găti acum</span></label>' +
          '<span class="pf-grow"></span>' +
          (fridge.size ? '<button class="pf-btn pf-btn--sm pf-btn--danger" data-fridge-clear>Golește frigiderul</button>' : '') +
          '</div></div>'
        : '') +
      '</section>';
  }

  /* =======================================================================
   * RESOLVE + COMPUTE
   * ==================================================================== */
  function resolve(ing) {
    if (ing.id) {
      const f = PF.data.byId[ing.id];
      if (!f) return null;
      return {
        kind: 'atlas',
        food: f,
        name: f.nameRo || f.name,
        grams: ing.g,
        per100: f.per100g,
        /* Cost uses the cheapest shelf price we found for that product. */
        cost: f._d.bestPrice ? (f._d.bestPrice.pricePer100g * ing.g) / 100 : null
      };
    }
    const p = (window.PF_PANTRY || {})[ing.p];
    if (!p) return null;
    return {
      kind: 'pantry',
      name: p.name,
      grams: ing.g,
      per100: p,
      free: !!ing.free,
      cost: p.ronKg !== undefined ? (p.ronKg * ing.g) / 1000 : null
    };
  }

  function enrich(r) {
    const items = r.ing.map(resolve).filter(Boolean);
    const tot = { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, salt: 0 };
    let cost = 0;
    let unpriced = 0;

    items.forEach(function (it) {
      const k = it.grams / 100;
      /* Spices contribute nothing worth counting; they are listed for the
       * shopping list, not for the macros. */
      if (!it.free) {
        tot.kcal += (it.per100.kcal || 0) * k;
        tot.protein += (it.per100.protein || 0) * k;
        tot.carbs += (it.per100.carbs || 0) * k;
        tot.fat += (it.per100.fat || 0) * k;
        tot.fiber += (it.per100.fiber || 0) * k;
        tot.salt += (it.per100.salt || 0) * k;
      }
      if (it.cost !== null && it.cost !== undefined) cost += it.cost;
      else unpriced++;
    });

    const s = r.servings || 1;
    const per = {
      kcal: tot.kcal / s, protein: tot.protein / s, carbs: tot.carbs / s,
      fat: tot.fat / s, fiber: tot.fiber / s, salt: tot.salt / s
    };

    const kcalFromP = per.protein * 4;
    const purity = per.kcal ? fmt.clamp((kcalFromP / per.kcal) * 100, 0, 100) : 0;

    return {
      items: items,
      total: tot,
      perServing: per,
      purityPct: purity,
      cost: cost,
      costPerServing: cost / s,
      unpricedCount: unpriced,
      /* Same shape the food cards use, so the shared UI atoms just work. */
      energyShare: (function () {
        const p = per.protein * 4, c = per.carbs * 4, f = per.fat * 9, fb = per.fiber * 2;
        const sum = p + c + f + fb || 1;
        return { protein: (p / sum) * 100, carbs: (c / sum) * 100, fat: (f / sum) * 100, fiber: (fb / sum) * 100 };
      })(),
      ronPer100gProtein: tot.protein > 0 ? (cost / tot.protein) * 100 : null
    };
  }

  function boot() {
    ALL = (window.PF_RECIPES || []).map(function (r) {
      const copy = Object.assign({}, r);
      copy._r = enrich(r);
      return copy;
    });
    PF.data.recipes = ALL;
    loadFridge();
    return ALL.length;
  }

  /** Recipes that use a given food — powers the "what do I cook with it" block. */
  function forFood(foodId) {
    const primary = (PF.data.aliases && PF.data.aliases[foodId]) || foodId;
    return ALL.filter(function (r) {
      return r.ing.some(function (i) {
        if (!i.id) return false;
        const resolved = (PF.data.aliases && PF.data.aliases[i.id]) || i.id;
        return resolved === primary || i.id === foodId;
      });
    });
  }

  /* =======================================================================
   * CARD
   * ==================================================================== */
  function card(r) {
    const m = (window.PF_METHODS || {})[r.method] || { ro: r.method, emoji: '🍽️' };
    const c = r._r;
    const per = c.perServing;

    /* Only speak about the fridge once the user has actually filled it in —
     * "0 din 6 ingrediente" on every card would be noise, not information. */
    let cov = '';
    if (fridge.size) {
      const v = coverage(r);
      cov = '<div class="pf-rcard__cov' + (v.complete ? ' is-full' : v.missing.length <= 2 ? ' is-close' : '') + '">' +
        '<span class="pf-rcard__covbar"><i style="width:' + Math.round(v.ratio * 100) + '%"></i></span>' +
        '<span class="pf-rcard__covtxt">' +
        (v.complete
          ? '✓ Ai tot ce trebuie'
          : 'Ai ' + v.have + '/' + v.total + ' · lipsesc: ' +
            fmt.esc(v.missing.slice(0, 3).map(function (i) {
              return fmt.truncate(ingLabel(i), 26);
            }).join(', ')) +
            (v.missing.length > 3 ? ' +' + (v.missing.length - 3) : '')) +
        '</span></div>';
    }

    return (
      '<article class="pf-rcard" data-recipe="' + fmt.esc(r.id) + '" tabindex="0">' +
      '<header class="pf-rcard__head">' +
      '<span class="pf-rcard__icon">' + fmt.esc(r.emoji || '🍽️') + '</span>' +
      '<span class="pf-rcard__id">' +
      '<h3 class="pf-rcard__name">' + fmt.esc(r.name) + '</h3>' +
      '<span class="pf-rcard__meta">' +
      '<span class="pf-badge pf-badge--accent">' + fmt.esc(m.emoji) + ' ' + fmt.esc(m.ro) + '</span>' +
      '<span class="pf-badge">' + fmt.esc(MEAL_LABEL[r.mealType] || r.mealType) + '</span>' +
      '<span class="pf-badge">' + r.servings + ' porții</span>' +
      '</span></span>' +
      '</header>' +

      cov +
      '<div class="pf-rcard__hero">' +
      '<span class="pf-rcard__protein"><b>' + Math.round(per.protein) + '</b><span>g proteină<br>pe porție</span></span>' +
      '<span class="pf-rcard__bars">' +
      '<div class="pf-macrobar">' +
      ['protein', 'carbs', 'fat', 'fiber'].filter(k => c.energyShare[k] > 0.5).map(k =>
        '<span class="pf-macrobar__seg pf-macrobar__seg--' + k + '" style="width:' +
        c.energyShare[k].toFixed(1) + '%"></span>').join('') +
      '</div>' +
      '<div class="pf-rcard__line"><span>' + Math.round(per.kcal) + ' kcal · ' +
      Math.round(c.purityPct) + '% din calorii</span><b>' +
      fmt.ronApprox(c.costPerServing, { short: true }) + ' / porție</b></div>' +
      '</span></div>' +

      PF.ui.macroStrip({
        protein: per.protein, carbs: per.carbs, fat: per.fat, kcal: per.kcal
      }) +

      '<div class="pf-rcard__foot">' +
      '<span class="pf-time' + (r.timeMin <= 20 ? ' pf-time--quick' : '') + '">⏱ ' +
      fmt.minutes(r.timeMin, 'ro') + '</span>' +
      '<span class="pf-muted" style="font-size:var(--fs-2xs)">din care ' +
      fmt.minutes(r.activeTimeMin, 'ro') + ' activ</span>' +
      PF.ui.effortChip(r.effort) +
      '<button class="pf-btn pf-btn--sm pf-btn--primary" data-recipe-open="' + fmt.esc(r.id) + '">Rețeta</button>' +
      '</div>' +
      '</article>'
    );
  }

  /* =======================================================================
   * THE VIEW
   * ==================================================================== */
  function render(container) {
    if (!ALL.length) {
      container.innerHTML = PF.ui.emptyState({
        icon: '🍳',
        title: 'Nicio rețetă încărcată',
        text: 'Fișierul cu rețete nu s-a încărcat. Reîncarcă pagina.'
      });
      return;
    }

    const methods = window.PF_METHODS || {};
    const methodCounts = {};
    const baseCounts = {};
    ALL.forEach(function (r) {
      methodCounts[r.method] = (methodCounts[r.method] || 0) + 1;
      baseCounts[r.base] = (baseCounts[r.base] || 0) + 1;
    });

    const list = ALL.filter(function (r) {
      return (activeMethod === 'all' || r.method === activeMethod) &&
             (activeBase === 'all' || r.base === activeBase);
    }).sort(function (a, b) {
      if (fridgeMode && fridge.size) {
        const d = coverage(b).ratio - coverage(a).ratio;
        if (Math.abs(d) > 0.001) return d;
      }
      return b._r.perServing.protein - a._r.perServing.protein;
    });

    const methodChips =
      '<button class="pf-chip' + (activeMethod === 'all' ? ' is-on' : '') + '" data-rmethod="all">Toate metodele<span class="pf-chip__n">' + ALL.length + '</span></button>' +
      Object.keys(methods).filter(k => methodCounts[k]).map(function (k) {
        return '<button class="pf-chip' + (activeMethod === k ? ' is-on' : '') +
          '" data-rmethod="' + fmt.esc(k) + '">' + fmt.esc(methods[k].emoji) + ' ' + fmt.esc(methods[k].ro) +
          '<span class="pf-chip__n">' + methodCounts[k] + '</span></button>';
      }).join('');

    const baseChips =
      '<button class="pf-chip' + (activeBase === 'all' ? ' is-on' : '') + '" data-rbase="all">Toate</button>' +
      Object.keys(baseCounts).map(function (k) {
        return '<button class="pf-chip' + (activeBase === k ? ' is-on' : '') +
          '" data-rbase="' + fmt.esc(k) + '">' + fmt.esc(BASE_LABEL[k] || k) +
          '<span class="pf-chip__n">' + baseCounts[k] + '</span></button>';
      }).join('');

    const methodNote = activeMethod !== 'all' && methods[activeMethod]
      ? '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
        fmt.esc(methods[activeMethod].desc) + '</p>'
      : '';

    container.innerHTML =
      '<section class="pf-panel" style="margin-bottom:var(--sp-4)">' +
      '<div class="pf-panel__body">' +
      '<div class="pf-eyebrow">Cum îl gătesc</div>' +
      '<p class="pf-lede" style="margin:var(--sp-2) 0 var(--sp-4)">' +
      'Mese întregi, nu ingrediente: proteina, garnitura și legumele în aceeași rețetă, ' +
      'cu metoda pe care o alegi tu. Toate valorile sunt calculate din produsele reale ' +
      'din atlas — nu sunt scrise de mână.</p>' +
      '<div class="pf-eyebrow" style="margin-bottom:var(--sp-2)">Metoda</div>' +
      '<div class="pf-chips">' + methodChips + '</div>' + methodNote +
      '<div class="pf-eyebrow" style="margin:var(--sp-4) 0 var(--sp-2)">Ingredientul principal</div>' +
      '<div class="pf-chips">' + baseChips + '</div>' +
      '</div></section>' +
      renderFridge() +
      (list.length
        ? '<div class="pf-grid">' + list.map(card).join('') + '</div>'
        : PF.ui.emptyState({
            icon: '🍳',
            title: 'Nicio rețetă cu filtrele astea',
            text: 'Combinația de metodă și ingredient principal nu prinde nicio rețetă.',
            action: '<button class="pf-btn pf-btn--sm" data-rmethod="all">Arată tot</button>'
          }));
  }

  /* =======================================================================
   * THE RECIPE DIALOG
   * ==================================================================== */
  function ingredientRow(it) {
    const isAtlas = it.kind === 'atlas';
    const k = it.grams / 100;
    return (
      '<tr>' +
      '<th>' + (isAtlas
        ? '<button class="pf-link" data-goto-food="' + fmt.esc(it.food.id) + '">' + fmt.esc(it.name) + '</button>'
        : fmt.esc(it.name)) +
        (it.free ? ' <span class="pf-muted" style="font-size:var(--fs-3xs)">(după gust)</span>' : '') +
      '</th>' +
      '<td class="num">' + fmt.num(it.grams, 0) + ' g</td>' +
      '<td class="num">' + (it.free ? '—' : fmt.num((it.per100.protein || 0) * k, 1) + ' g') + '</td>' +
      '<td class="num">' + (it.free ? '—' : Math.round((it.per100.kcal || 0) * k)) + '</td>' +
      '<td class="num">' + (it.cost !== null && it.cost !== undefined ? fmt.ronApprox(it.cost, { short: true }) : '—') + '</td>' +
      '</tr>'
    );
  }

  function dialogHtml(r) {
    const c = r._r;
    const per = c.perServing;
    const m = (window.PF_METHODS || {})[r.method] || { ro: r.method, emoji: '🍽️' };

    const macroFood = {
      _d: {
        energyShare: c.energyShare,
        protein100: per.protein, carbs100: per.carbs, fat100: per.fat, fiber100: per.fiber,
        purityPct: c.purityPct
      }
    };

    return (
      '<div class="pf-modal__head" data-cat="fresh-meat">' +
      '<button class="pf-modal__close" data-recipe-close aria-label="Închide">✕</button>' +
      '<span class="pf-modal__icon">' + PF.ui.foodEmoji(r) + '</span>' +
      '<div class="pf-modal__titles">' +
      '<h2 class="pf-modal__title" id="pf-recipe-title">' + fmt.esc(r.name) + '</h2>' +
      '<div class="pf-modal__subtitle">' + fmt.esc(m.emoji) + ' ' + fmt.esc(m.ro) + ' · ' +
      fmt.esc(MEAL_LABEL[r.mealType] || r.mealType) + ' · ' + r.servings + ' porții</div>' +
      '<div class="pf-modal__badges">' +
      '<span class="pf-badge pf-badge--accent">' + Math.round(per.protein) + ' g proteină / porție</span>' +
      '<span class="pf-badge">' + Math.round(per.kcal) + ' kcal</span>' +
      '<span class="pf-badge">' + Math.round(c.purityPct) + '% din calorii</span>' +
      '<span class="pf-badge">' + fmt.ronApprox(c.costPerServing, { short: true }) + ' / porție</span>' +
      '<span class="pf-badge">' + fmt.minutes(r.timeMin, 'ro') + '</span>' +
      '</div></div>' +
      '</div>' +

      '<div class="pf-modal__body">' +
      '<div class="pf-dossier">' +

      '<div>' +
      block('Ingrediente · ' + r.servings + ' porții',
        '<table class="pf-stores-table"><thead><tr>' +
        '<th>Ingredient</th><th class="num">Cant.</th><th class="num">Proteină</th><th class="num">kcal</th><th class="num">Cost</th>' +
        '</tr></thead><tbody>' + c.items.map(ingredientRow).join('') +
        '<tr><th><b>Total</b></th><td class="num"><b>' + fmt.num(c.items.reduce((a, i) => a + i.grams, 0), 0) + ' g</b></td>' +
        '<td class="num"><b>' + fmt.num(c.total.protein, 0) + ' g</b></td>' +
        '<td class="num"><b>' + Math.round(c.total.kcal) + '</b></td>' +
        '<td class="num"><b>' + fmt.ronApprox(c.cost, { short: true }) + '</b></td></tr>' +
        '</tbody></table>' +
        '<p class="pf-muted" style="font-size:var(--fs-3xs);line-height:1.5">' +
        '≈ Costurile sunt estimări (±20–30%), nu prețuri de raft.' +
        (c.unpricedCount ? ' ' + c.unpricedCount + ' ingrediente nu au niciun preț.' : '') + '</p>') +

      block('Cum se face',
        '<ol class="pf-steps">' + r.steps.map(s => '<li><span>' + fmt.esc(s) + '</span></li>').join('') + '</ol>') +

      block('De ce ai nevoie', tagList(r.equipment)) +
      '</div>' +

      '<div>' +
      block('Pe porție',
        PF.ui.macroStrip({ protein: per.protein, carbs: per.carbs, fat: per.fat, kcal: per.kcal, fiber: per.fiber, salt: per.salt }, { six: true }) +
        '<div class="pf-rule pf-rule--tight"></div>' +
        PF.ui.macroBar(macroFood, { tall: true }) +
        '<div class="pf-macrolegend" style="margin-top:var(--sp-2)">' +
        '<span class="pf-macrolegend__item"><span class="pf-macrolegend__swatch" style="--c:var(--macro-protein)"></span>Proteină</span>' +
        '<span class="pf-macrolegend__item"><span class="pf-macrolegend__swatch" style="--c:var(--macro-carbs)"></span>Carbo</span>' +
        '<span class="pf-macrolegend__item"><span class="pf-macrolegend__swatch" style="--c:var(--macro-fat)"></span>Grăsimi</span>' +
        '<span class="pf-macrolegend__item"><span class="pf-macrolegend__swatch" style="--c:var(--macro-fiber)"></span>Fibre</span>' +
        '</div>' +
        '<div class="pf-rule pf-rule--tight"></div>' +
        PF.ui.statBar({ label: 'Timp total', value: fmt.clamp(100 - r.timeMin, 5, 100), color: 'var(--stat-speed)', size: 'lg', display: fmt.minutes(r.timeMin, 'ro') }) +
        PF.ui.statBar({ label: 'Efort', value: 100 - r.effort * 20, color: 'var(--stat-convenience)', size: 'lg', display: r.effort + '/5' }) +
        PF.ui.statBar({ label: 'Puritate', value: c.purityPct / 0.8, color: 'var(--stat-leanness)', size: 'lg', display: Math.round(c.purityPct) + '%' })) +

      block('De ce merită', r.why ? '<p>' + fmt.esc(r.why) + '</p>' : '') +

      block('Sfaturi', r.tips && r.tips.length
        ? '<ul class="pf-bullets pf-bullets--tips">' +
          r.tips.map(t => '<li><span>' + fmt.esc(t) + '</span></li>').join('') + '</ul>'
        : '') +

      block('Variante', r.swaps && r.swaps.length
        ? r.swaps.map(s => '<div style="margin-bottom:var(--sp-3)"><b style="color:var(--text-1)">' +
            fmt.esc(s.label) + '</b><p class="pf-muted" style="font-size:var(--fs-sm);margin-top:2px">' +
            fmt.esc(s.text) + '</p></div>').join('')
        : '') +
      '</div>' +

      '</div></div>' +

      '<div class="pf-modal__foot">' +
      '<span class="pf-muted" style="font-size:var(--fs-2xs)">Macro-urile sunt calculate din produsele din atlas. Prețurile sunt estimări, nu prețuri de raft.</span>' +
      '<span class="pf-spacer"></span>' +
      '<button class="pf-btn pf-btn--sm" data-recipe-shop="' + fmt.esc(r.id) + '">+ Adaugă ingredientele la masă</button>' +
      /* Only offered once the fridge knows something — otherwise "what's
       * missing" is the entire recipe and the button is a worse duplicate
       * of the one beside it. */
      (fridge.size && !coverage(r).complete
        ? '<button class="pf-btn pf-btn--sm pf-btn--primary" data-recipe-shop-missing="' + fmt.esc(r.id) +
          '">🛒 Doar ce îmi lipsește (' + coverage(r).missing.length + ')</button>'
        : '') +
      '<button class="pf-btn pf-btn--sm" data-recipe-close>Închide</button>' +
      '</div>'
    );
  }

  function ensureDialog() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.className = 'pf-modal';
    dlg.setAttribute('aria-labelledby', 'pf-recipe-title');
    document.body.appendChild(dlg);
    dlg.addEventListener('mousedown', function (ev) { if (ev.target === dlg) dlg.close(); });
    dlg.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-recipe-close]')) { dlg.close(); return; }
      const shop = ev.target.closest('[data-recipe-shop]');
      if (shop) { addToTray(shop.getAttribute('data-recipe-shop')); return; }
      const miss = ev.target.closest('[data-recipe-shop-missing]');
      if (miss) { addMissingToTray(miss.getAttribute('data-recipe-shop-missing')); return; }
      const goto = ev.target.closest('[data-goto-food]');
      if (goto) {
        const f = PF.data.byId[goto.getAttribute('data-goto-food')];
        if (f) { dlg.close(); PF.modal.open(f, PF.data.foods); }
      }
    });
    return dlg;
  }

  function open(id) {
    const r = ALL.filter(x => x.id === id)[0];
    if (!r) return;
    currentRecipe = r;
    ensureDialog();
    dlg.innerHTML = dialogHtml(r);
    if (!dlg.open) dlg.showModal();
    const body = dlg.querySelector('.pf-modal__body');
    if (body) body.scrollTop = 0;
  }

  /** Put every atlas ingredient of a recipe into the meal tray. */
  function addToTray(id) {
    const r = ALL.filter(x => x.id === id)[0];
    if (!r) return;
    let added = 0;
    r._r.items.forEach(function (it) {
      if (it.kind !== 'atlas') return;
      const servingG = it.food._d.servingGrams || 100;
      PF.tray.add(it.food.id, Math.round((it.grams / servingG) * 10) / 10);
      added++;
    });
    PF.app.toast(added + ' ingrediente adăugate la masă', 'ok');
  }

  /**
   * Add only the ingredients you do NOT already have to the meal tray.
   *
   * This is the payoff of the fridge: the tray becomes an actual shopping
   * list — what you still need to buy for this meal — instead of a copy of
   * the whole recipe, half of which is already in your kitchen.
   */
  function addMissingToTray(id) {
    const r = ALL.filter(x => x.id === id)[0];
    if (!r) return;
    const need = new Set(coverage(r).missing.map(ingKey));
    let added = 0, skipped = 0;
    r._r.items.forEach(function (it) {
      if (it.kind !== 'atlas') { return; }
      if (!need.has('a:' + it.food.id)) { skipped++; return; }
      const servingG = it.food._d.servingGrams || 100;
      PF.tray.add(it.food.id, Math.round((it.grams / servingG) * 10) / 10);
      added++;
    });
    PF.app.toast(added
      ? added + ' de cumpărat adăugate' + (skipped ? ' · ' + skipped + ' le ai deja' : '')
      : 'Ai deja tot ce se poate adăuga din atlas', added ? 'ok' : 'info');
  }

  /* =======================================================================
   * EVENTS
   *
   * Delegated on document because the recipes view re-renders itself wholesale;
   * anything bound to a node inside it would die on the next repaint.
   * ==================================================================== */
  /**
   * Repaint the view without losing the user's place.
   *
   * Ticking ten ingredients in a row means ten full repaints. Without this the
   * page would jump to the top and the keyboard focus would be destroyed on
   * every single tick.
   */
  function repaintFridge(refocus) {
    const y = window.scrollY;
    PF.app.repaint();
    window.scrollTo(0, y);
    if (refocus) {
      const el = document.querySelector('[data-fridge="' + window.CSS.escape(refocus) + '"]');
      if (el) el.focus();
    }
  }

  document.addEventListener('click', function (e) {
    const t = e.target.closest ? e.target : e.target.parentNode;
    if (!t || !t.closest) return;

    const head = t.closest('[data-fridge-toggle]');
    if (head) { fridgeOpen = !fridgeOpen; repaintFridge(); return; }

    const more = t.closest('[data-fridge-more]');
    if (more) {
      const g = more.getAttribute('data-fridge-more');
      fridgeExpanded.has(g) ? fridgeExpanded.delete(g) : fridgeExpanded.add(g);
      repaintFridge();
      return;
    }

    const chip = t.closest('[data-fridge]');
    if (chip) {
      const k = chip.getAttribute('data-fridge');
      fridge.has(k) ? fridge.delete(k) : fridge.add(k);
      saveFridge();
      repaintFridge(k);
      return;
    }

    if (t.closest('[data-fridge-clear]')) {
      fridge.clear(); saveFridge(); repaintFridge();
    }
  });

  document.addEventListener('change', function (e) {
    if (e.target && e.target.matches && e.target.matches('[data-fridge-mode]')) {
      fridgeMode = e.target.checked;
      saveFridge();
      repaintFridge();
    }
  });

  PF.recipes = {
    boot: boot,
    coverage: coverage,
    enrich: enrich,
    render: render,
    open: open,
    card: card,
    forFood: forFood,
    addToTray: addToTray,
    addMissingToTray: addMissingToTray,
    all: function () { return ALL; },
    setMethod: function (m) { activeMethod = m; },
    setBase: function (b) { activeBase = b; },
    BASE_LABEL: BASE_LABEL
  };
})();
