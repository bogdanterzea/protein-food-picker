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

    return (
      '<article class="pf-rcard" data-recipe="' + fmt.esc(r.id) + '" tabindex="0">' +
      '<header class="pf-rcard__head">' +
      '<span class="pf-rcard__icon">' + r.emoji + '</span>' +
      '<span class="pf-rcard__id">' +
      '<h3 class="pf-rcard__name">' + fmt.esc(r.name) + '</h3>' +
      '<span class="pf-rcard__meta">' +
      '<span class="pf-badge pf-badge--accent">' + m.emoji + ' ' + fmt.esc(m.ro) + '</span>' +
      '<span class="pf-badge">' + fmt.esc(MEAL_LABEL[r.mealType] || r.mealType) + '</span>' +
      '<span class="pf-badge">' + r.servings + ' porții</span>' +
      '</span></span>' +
      '</header>' +

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
      fmt.ronShort(c.costPerServing) + ' / porție</b></div>' +
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
      container.innerHTML = '<div class="pf-empty"><span class="pf-empty__icon">🍳</span>' +
        '<span class="pf-empty__title">Nicio rețetă încărcată</span></div>';
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
    }).sort(function (a, b) { return b._r.perServing.protein - a._r.perServing.protein; });

    const methodChips =
      '<button class="pf-chip' + (activeMethod === 'all' ? ' is-on' : '') + '" data-rmethod="all">Toate metodele<span class="pf-chip__n">' + ALL.length + '</span></button>' +
      Object.keys(methods).filter(k => methodCounts[k]).map(function (k) {
        return '<button class="pf-chip' + (activeMethod === k ? ' is-on' : '') +
          '" data-rmethod="' + k + '">' + methods[k].emoji + ' ' + fmt.esc(methods[k].ro) +
          '<span class="pf-chip__n">' + methodCounts[k] + '</span></button>';
      }).join('');

    const baseChips =
      '<button class="pf-chip' + (activeBase === 'all' ? ' is-on' : '') + '" data-rbase="all">Toate</button>' +
      Object.keys(baseCounts).map(function (k) {
        return '<button class="pf-chip' + (activeBase === k ? ' is-on' : '') +
          '" data-rbase="' + k + '">' + fmt.esc(BASE_LABEL[k] || k) +
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
      (list.length
        ? '<div class="pf-grid">' + list.map(card).join('') + '</div>'
        : '<div class="pf-empty"><span class="pf-empty__icon">🍳</span>' +
          '<span class="pf-empty__title">Nicio rețetă cu filtrele astea</span>' +
          '<button class="pf-btn pf-btn--sm" data-rmethod="all">Arată tot</button></div>');
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
      '<td class="num">' + (it.cost !== null && it.cost !== undefined ? fmt.ronShort(it.cost) : '—') + '</td>' +
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
      '<span class="pf-modal__icon">' + r.emoji + '</span>' +
      '<div class="pf-modal__titles">' +
      '<h2 class="pf-modal__title" id="pf-recipe-title">' + fmt.esc(r.name) + '</h2>' +
      '<div class="pf-modal__subtitle">' + m.emoji + ' ' + fmt.esc(m.ro) + ' · ' +
      fmt.esc(MEAL_LABEL[r.mealType] || r.mealType) + ' · ' + r.servings + ' porții</div>' +
      '<div class="pf-modal__badges">' +
      '<span class="pf-badge pf-badge--accent">' + Math.round(per.protein) + ' g proteină / porție</span>' +
      '<span class="pf-badge">' + Math.round(per.kcal) + ' kcal</span>' +
      '<span class="pf-badge">' + Math.round(c.purityPct) + '% din calorii</span>' +
      '<span class="pf-badge">' + fmt.ronShort(c.costPerServing) + ' / porție</span>' +
      '<span class="pf-badge">' + fmt.minutes(r.timeMin, 'ro') + '</span>' +
      '</div></div>' +
      '</div>' +

      '<div class="pf-modal__body">' +
      '<div class="pf-dossier">' +

      '<div>' +
      '<section class="pf-block"><div class="pf-block__head">Ingrediente · ' + r.servings + ' porții</div>' +
      '<div class="pf-block__body">' +
      '<table class="pf-stores-table"><thead><tr>' +
      '<th>Ingredient</th><th class="num">Cant.</th><th class="num">Proteină</th><th class="num">kcal</th><th class="num">Cost</th>' +
      '</tr></thead><tbody>' + c.items.map(ingredientRow).join('') +
      '<tr><th><b>Total</b></th><td class="num"><b>' + fmt.num(c.items.reduce((a, i) => a + i.grams, 0), 0) + ' g</b></td>' +
      '<td class="num"><b>' + fmt.num(c.total.protein, 0) + ' g</b></td>' +
      '<td class="num"><b>' + Math.round(c.total.kcal) + '</b></td>' +
      '<td class="num"><b>' + fmt.ronShort(c.cost) + '</b></td></tr>' +
      '</tbody></table>' +
      (c.unpricedCount ? '<p class="pf-muted" style="font-size:var(--fs-3xs)">⚠️ ' + c.unpricedCount +
        ' ingrediente fără preț cunoscut — costul e subestimat.</p>' : '') +
      '</div></section>' +

      '<section class="pf-block"><div class="pf-block__head">Cum se face</div>' +
      '<div class="pf-block__body">' +
      '<ol class="pf-steps">' + r.steps.map(s => '<li><span>' + fmt.esc(s) + '</span></li>').join('') + '</ol>' +
      '</div></section>' +

      (r.equipment && r.equipment.length
        ? '<section class="pf-block"><div class="pf-block__head">De ce ai nevoie</div>' +
          '<div class="pf-block__body"><div class="pf-card__tags">' +
          r.equipment.map(e => '<span class="pf-tag">' + fmt.esc(e) + '</span>').join('') +
          '</div></div></section>'
        : '') +
      '</div>' +

      '<div>' +
      '<section class="pf-block"><div class="pf-block__head">Pe porție</div>' +
      '<div class="pf-block__body">' +
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
      PF.ui.statBar({ label: 'Puritate', value: c.purityPct / 0.8, color: 'var(--stat-leanness)', size: 'lg', display: Math.round(c.purityPct) + '%' }) +
      '</div></section>' +

      (r.why ? '<section class="pf-block"><div class="pf-block__head">De ce merită</div>' +
        '<div class="pf-block__body"><p>' + fmt.esc(r.why) + '</p></div></section>' : '') +

      (r.tips && r.tips.length
        ? '<section class="pf-block"><div class="pf-block__head">Sfaturi</div>' +
          '<div class="pf-block__body"><ul class="pf-bullets pf-bullets--tips">' +
          r.tips.map(t => '<li><span>' + fmt.esc(t) + '</span></li>').join('') +
          '</ul></div></section>'
        : '') +

      (r.swaps && r.swaps.length
        ? '<section class="pf-block"><div class="pf-block__head">Variante</div>' +
          '<div class="pf-block__body">' +
          r.swaps.map(s => '<div style="margin-bottom:var(--sp-3)"><b style="color:var(--text-1)">' +
            fmt.esc(s.label) + '</b><p class="pf-muted" style="font-size:var(--fs-sm);margin-top:2px">' +
            fmt.esc(s.text) + '</p></div>').join('') +
          '</div></section>'
        : '') +
      '</div>' +

      '</div></div>' +

      '<div class="pf-modal__foot">' +
      '<span class="pf-muted" style="font-size:var(--fs-2xs)">Valorile sunt calculate din produsele din atlas, pentru cantitățile de mai sus.</span>' +
      '<span class="pf-spacer"></span>' +
      '<button class="pf-btn pf-btn--sm" data-recipe-shop="' + fmt.esc(r.id) + '">+ Adaugă ingredientele la masă</button>' +
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

  PF.recipes = {
    boot: boot,
    enrich: enrich,
    render: render,
    open: open,
    card: card,
    forFood: forFood,
    addToTray: addToTray,
    all: function () { return ALL; },
    setMethod: function (m) { activeMethod = m; },
    setBase: function (b) { activeBase = b; },
    BASE_LABEL: BASE_LABEL
  };
})();
