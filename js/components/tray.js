/* =========================================================================
 * PROTEIN ATLAS SIBIU — MEAL TRAY & SHOPPING LIST
 *
 * The tray holds foods with a serving count. It shows running macro totals
 * against your daily protein target, the running cost, and it generates a
 * shopping list grouped by the store where each item is cheapest.
 *
 * Attaches to window.PF.tray
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  /** id -> servings (float) */
  let items = {};
  let el = null;
  let isOpen = false;
  let onChange = function () {};
  /** Name typed into the save-meal box; survives the re-render the typing causes. */
  let pendingName = '';
  const MEALS_MAX = 12;

  /* =======================================================================
   * MODEL
   * ==================================================================== */
  function load() {
    const saved = PF.store.get('tray', {});
    items = saved && typeof saved === 'object' ? saved : {};
    /* Drop ids that no longer exist in the data. */
    Object.keys(items).forEach(function (id) {
      if (!PF.data.byId[id]) delete items[id];
    });
  }

  function persist() {
    PF.store.set('tray', items);
  }

  function add(id, servings) {
    const f = PF.data.byId[id];
    if (!f) return;
    items[id] = (items[id] || 0) + (servings || 1);
    persist();
    setOpen(isOpen);
    onChange();
  }

  function setQty(id, servings) {
    const q = Math.max(0, Number(servings) || 0);
    if (q === 0) delete items[id];
    else items[id] = q;
    persist();
    setOpen(isOpen);
    onChange();
  }

  function remove(id) {
    delete items[id];
    persist();
    setOpen(isOpen);
    onChange();
  }

  function clear() {
    items = {};
    persist();
    setOpen(false);
    onChange();
  }

  function count() {
    return Object.keys(items).length;
  }

  function has(id) {
    return !!items[id];
  }

  /* =======================================================================
   * TOTALS
   * ==================================================================== */
  function totals() {
    const out = {
      protein: 0, carbs: 0, fat: 0, fiber: 0, kcal: 0,
      salt: 0, sugars: 0, satFat: 0, cost: 0, grams: 0, unknownCost: 0
    };
    Object.keys(items).forEach(function (id) {
      const f = PF.data.byId[id];
      if (!f) return;
      const q = items[id];
      const ps = f._d.perServing;
      out.protein += ps.protein * q;
      out.carbs += ps.carbs * q;
      out.fat += ps.fat * q;
      out.fiber += ps.fiber * q;
      out.kcal += ps.kcal * q;
      out.salt += ps.salt * q;
      out.sugars += ps.sugars * q;
      out.satFat += ps.satFat * q;
      out.grams += f._d.servingGrams * q;
      if (f._d.costPerServing) out.cost += f._d.costPerServing * q;
      else out.unknownCost++;
    });
    return out;
  }

  /* =======================================================================
   * SAVED MEALS
   *
   * One tray was never enough: breakfast, gym day and shopping-for-the-week
   * are different meals you want to come back to. Each saved meal is just the
   * id -> servings map plus a name.
   * ==================================================================== */
  function meals() {
    const saved = PF.store.get('meals', []);
    return Array.isArray(saved) ? saved.filter(m => m && m.items) : [];
  }

  function mealStats(map) {
    let protein = 0, cost = 0, n = 0;
    Object.keys(map || {}).forEach(function (id) {
      const f = PF.data.byId[id];
      if (!f) return;
      n++;
      protein += f._d.perServing.protein * map[id];
      if (f._d.costPerServing) cost += f._d.costPerServing * map[id];
    });
    return { protein: protein, cost: cost, count: n };
  }

  function saveMeal(name) {
    if (!count()) return null;
    const list = meals();
    const clean = String(name || '').trim().slice(0, 40) ||
      'Masa ' + new Date().toLocaleDateString('ro-RO');
    /* Saving under an existing name overwrites it instead of piling up. */
    const i = list.findIndex(m => m.name === clean);
    const entry = {
      id: 'm' + Date.now().toString(36),
      name: clean,
      items: Object.assign({}, items),
      ts: Date.now()
    };
    if (i !== -1) { entry.id = list[i].id; list[i] = entry; }
    else list.unshift(entry);
    PF.store.set('meals', list.slice(0, MEALS_MAX));
    return entry;
  }

  function loadMeal(mealId) {
    const m = meals().filter(x => x.id === mealId)[0];
    if (!m) return false;
    items = {};
    Object.keys(m.items).forEach(function (id) {
      if (PF.data.byId[id]) items[id] = m.items[id];
    });
    pendingName = m.name;
    persist();
    setOpen(true);
    onChange();
    return true;
  }

  function deleteMeal(mealId) {
    PF.store.set('meals', meals().filter(m => m.id !== mealId));
  }

  /* =======================================================================
   * WHAT IS STILL MISSING
   *
   * "Mai ai 38 g" is a number. "Încă 2 ouă și ai ajuns" is an instruction.
   * Whole servings only — half a can of tuna is not a plan.
   * ==================================================================== */
  function gapSuggestions(remaining, limit) {
    const max = limit || 3;
    if (!(remaining > 0.5)) return [];

    const seen = {};
    const out = [];

    function consider(f, fromTray) {
      if (!f || seen[f.id]) return;
      const per = f._d.perServing.protein;
      if (!(per > 0)) return;
      const n = Math.ceil(remaining / per);
      /* More than four extra servings is not advice, it is a shopping list. */
      if (n < 1 || n > 4) return;
      seen[f.id] = true;
      out.push({
        food: f,
        servings: n,
        protein: per * n,
        cost: f._d.costPerServing ? f._d.costPerServing * n : null,
        /* what you already planned to eat first, then the fewest servings,
         * then the better-ranked product */
        rank: (fromTray ? 0 : 1000) + n * 100 - (f._d.score || 0)
      });
    }

    Object.keys(items).forEach(id => consider(PF.data.byId[id], true));
    (PF.data.foods || [])
      .filter(f => f._d && f._d.perServing.protein >= remaining / 4 && f.effort <= 2)
      .sort((a, b) => b._d.score - a._d.score)
      .slice(0, 60)
      .forEach(f => consider(f, false));

    return out.sort((a, b) => a.rank - b.rank).slice(0, max);
  }

  /* =======================================================================
   * SHOPPING LIST — grouped by cheapest store
   * ==================================================================== */
  function shoppingList() {
    const byStore = {};
    Object.keys(items).forEach(function (id) {
      const f = PF.data.byId[id];
      if (!f) return;
      const store = f._d.bestPrice
        ? f._d.bestPrice.name
        : (f.stores && f.stores[0] ? f.stores[0].name : 'Necunoscut');
      if (!byStore[store]) byStore[store] = { name: store, items: [], cost: 0 };

      const q = items[id];
      const grams = f._d.servingGrams * q;
      const cost = f._d.costPerServing ? f._d.costPerServing * q : 0;
      byStore[store].items.push({
        id: id,
        food: f,
        servings: q,
        grams: grams,
        cost: cost
      });
      byStore[store].cost += cost;
    });

    return Object.keys(byStore)
      .map(k => byStore[k])
      .sort((a, b) => b.items.length - a.items.length);
  }

  /* =======================================================================
   * RENDER
   * ==================================================================== */
  function progressRow(label, value, target, color, unit) {
    const pct = target > 0 ? (value / target) * 100 : 0;
    const over = pct > 100;
    return (
      '<div class="pf-progress__row' + (over ? ' is-over' : '') + '">' +
      '<div class="pf-progress__head"><span>' + fmt.esc(label) + '</span>' +
      '<span><b>' + fmt.num(value, 0) + '</b> / ' + fmt.num(target, 0) + ' ' + (unit || '') +
      ' · ' + Math.round(pct) + '%</span></div>' +
      '<div class="pf-progress__track" style="--c:' + color + '">' +
      '<div class="pf-progress__fill" style="--v:' + fmt.clamp(pct, 0, 100).toFixed(1) + '"></div>' +
      '<div class="pf-progress__over"></div>' +
      '</div></div>'
    );
  }

  /** The gap to the protein target, spelled out in whole servings you can add. */
  function gapPanel(protein, target) {
    const remaining = target - protein;
    if (remaining <= 0.5) {
      return (
        '<p class="pf-gap pf-gap--done">✅ Ținta de ' + fmt.num(target, 0) +
        ' g e atinsă' + (remaining < -0.5 ? ' (+' + fmt.num(-remaining, 0) + ' g peste)' : '') +
        '.</p>'
      );
    }

    const picks = gapSuggestions(remaining, 3);
    const head =
      '<p class="pf-gap__head">Îți mai lipsesc <b>' + fmt.num(remaining, 0) +
      ' g</b> de proteină.' + (picks.length ? ' Ajungi la țintă cu:' : '') + '</p>';

    if (!picks.length) return '<div class="pf-gap">' + head + '</div>';

    const chips = picks
      .map(function (p) {
        return (
          '<button class="pf-gap__pick" data-act="gap-add" data-gap-id="' + fmt.esc(p.food.id) +
          '" data-gap-n="' + p.servings + '" title="Adaugă la masă">' +
          '<span class="pf-gap__emoji">' + (p.food.emoji || '🍽️') + '</span>' +
          '<span class="pf-gap__txt"><b>încă ' + p.servings + ' × ' +
          fmt.esc(p.food.nameRo || p.food.name) + '</b>' +
          '<small>+' + fmt.num(p.protein, 0) + ' g proteină' +
          (p.cost ? ' · ' + fmt.ronApprox(p.cost, { short: true }) : '') + '</small></span>' +
          '<span class="pf-gap__plus">+</span>' +
          '</button>'
        );
      })
      .join('');

    return '<div class="pf-gap">' + head + '<div class="pf-gap__picks">' + chips + '</div></div>';
  }

  /** Save the current tray under a name, and bring an older one back. */
  function mealsPanel() {
    const list = meals();
    const rows = list
      .map(function (m) {
        const s = mealStats(m.items);
        return (
          '<li class="pf-meal">' +
          '<button class="pf-meal__load" data-act="meal-load" data-meal="' + fmt.esc(m.id) + '">' +
          '<b>' + fmt.esc(m.name) + '</b>' +
          '<small>' + s.count + ' produse · ' + fmt.num(s.protein, 0) + ' g P' +
          (s.cost ? ' · ' + fmt.ronApprox(s.cost, { short: true }) : '') + '</small>' +
          '</button>' +
          '<button class="pf-iconbtn" data-act="meal-del" data-meal="' + fmt.esc(m.id) +
          '" aria-label="Șterge masa ' + fmt.esc(m.name) + '">✕</button>' +
          '</li>'
        );
      })
      .join('');

    return (
      '<div class="pf-meals">' +
      '<div class="pf-eyebrow">Mese salvate</div>' +
      '<div class="pf-meals__save">' +
      '<input type="text" class="pf-input" data-act="meal-name" maxlength="40" ' +
      'placeholder="Nume (ex. Mic dejun)" value="' + fmt.esc(pendingName) + '">' +
      '<button class="pf-btn pf-btn--sm" data-act="meal-save">💾 Salvează</button>' +
      '</div>' +
      (rows
        ? '<ul class="pf-meals__list">' + rows + '</ul>'
        : '<p class="pf-muted" style="font-size:var(--fs-3xs)">Nicio masă salvată încă. ' +
          'Salvezi masa curentă și o aduci înapoi oricând — se păstrează în browserul tău.</p>') +
      '</div>'
    );
  }

  function render() {
    if (!el) return;
    const list = Object.keys(items);
    const tot = totals();
    const target = PF.app.getTarget();

    /* --- handle --- */
    const handle =
      '<div class="pf-tray__handle" data-act="toggle-tray" aria-hidden="true">' +
      '<span class="pf-tray__grip"></span>' +
      '<span class="pf-tray__title">🍽️ ' + t('tray.title') +
      '<span class="pf-tray__badge">' + list.length + '</span></span>' +
      '<div class="pf-tray__totals">' +
      '<div class="pf-tray__total" style="--c:var(--macro-protein)"><b>' +
      fmt.num(tot.protein, 0) + ' g</b><span>' + t('card.protein') + '</span></div>' +
      '<div class="pf-tray__total" style="--c:var(--macro-kcal)"><b>' +
      fmt.num(tot.kcal, 0) + '</b><span>kcal</span></div>' +
      '<div class="pf-tray__total" style="--c:var(--macro-carbs)"><b>' +
      fmt.num(tot.carbs, 0) + ' g</b><span>' + t('card.carbs') + '</span></div>' +
      '<div class="pf-tray__total" style="--c:var(--macro-fat)"><b>' +
      fmt.num(tot.fat, 0) + ' g</b><span>' + t('card.fat') + '</span></div>' +
      '<div class="pf-tray__total" style="--c:var(--stat-value)"><b>' +
      fmt.ronApprox(tot.cost, { short: true }) + '</b><span>' + t('tray.cost') + '</span></div>' +
      '</div>' +
      /* The toggle lives OUTSIDE the totals strip: on a phone that strip
       * scrolls horizontally, and a button inside it scrolled off-screen. */
      '<button class="pf-iconbtn pf-tray__toggle" data-act="toggle-tray" aria-label="' +
      (isOpen ? 'Închide masa' : 'Deschide masa') + '" aria-expanded="' +
      (isOpen ? 'true' : 'false') + '">' + (isOpen ? '▾' : '▴') + '</button>' +
      '</div>';

    if (!list.length) {
      el.innerHTML =
        handle +
        '<div class="pf-tray__body"><div class="pf-empty" style="grid-column:1/-1">' +
        '<span class="pf-empty__icon">🛒</span>' +
        '<span class="pf-empty__title">' + t('tray.empty') + '</span>' +
        '<span class="pf-empty__text">Apasă „+ ' + t('card.add') +
        '” pe orice card ca să compui o masă și să vezi cât ai adunat din ținta zilnică.</span>' +
        '</div></div>';
      return;
    }

    /* --- items --- */
    const rows = list
      .map(function (id) {
        const f = PF.data.byId[id];
        if (!f) return '';
        const q = items[id];
        const ps = f._d.perServing;
        return (
          '<div class="pf-trayitem" data-id="' + fmt.esc(id) + '">' +
          '<span class="pf-trayitem__emoji">' + (f.emoji || '🍽️') + '</span>' +
          '<span class="pf-trayitem__name">' +
          '<b>' + fmt.esc(f.nameRo || f.name) + '</b>' +
          '<small>' + fmt.esc((f.serving && f.serving.label) || f._d.servingGrams + ' ' + f.unit) +
          ' × ' + fmt.num(q, 1) + ' = ' + fmt.num(f._d.servingGrams * q, 0) + ' ' + f.unit + '</small>' +
          '</span>' +
          '<span class="pf-trayitem__macros">' +
          '<span style="color:var(--macro-protein)">' + fmt.num(ps.protein * q, 1) + '<i>P</i></span>' +
          '<span style="color:var(--macro-carbs)">' + fmt.num(ps.carbs * q, 1) + '<i>C</i></span>' +
          '<span style="color:var(--macro-fat)">' + fmt.num(ps.fat * q, 1) + '<i>G</i></span>' +
          '<span style="color:var(--macro-kcal)">' + fmt.num(ps.kcal * q, 0) + '<i>kcal</i></span>' +
          '</span>' +
          '<span class="pf-stepper">' +
          '<button data-act="dec" aria-label="Mai puțin">−</button>' +
          '<input type="number" min="0" step="0.5" value="' + q + '" data-act="qty" aria-label="Porții">' +
          '<button data-act="inc" aria-label="Mai mult">+</button>' +
          '</span>' +
          '<button class="pf-iconbtn" data-act="rm" aria-label="Șterge">✕</button>' +
          '</div>'
        );
      })
      .join('');

    /* --- progress --- */
    const kcalTarget = PF.app.getKcalTarget();
    const progress =
      '<div class="pf-progress">' +
      '<div class="pf-eyebrow">' + t('tray.target') + '</div>' +
      progressRow(t('card.protein'), tot.protein, target.target, 'var(--macro-protein)', 'g') +
      progressRow('Calorii', tot.kcal, kcalTarget, 'var(--macro-kcal)', 'kcal') +
      gapPanel(tot.protein, target.target) +
      '<div class="pf-rule pf-rule--tight"></div>' +
      '<div class="pf-macros pf-macros--6">' +
      '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' + fmt.num(tot.protein, 0) +
      '</span><span class="pf-macro__k">' + t('card.protein') + '</span></div>' +
      '<div class="pf-macro pf-macro--carbs"><span class="pf-macro__v">' + fmt.num(tot.carbs, 0) +
      '</span><span class="pf-macro__k">' + t('card.carbs') + '</span></div>' +
      '<div class="pf-macro pf-macro--fat"><span class="pf-macro__v">' + fmt.num(tot.fat, 0) +
      '</span><span class="pf-macro__k">' + t('card.fat') + '</span></div>' +
      '<div class="pf-macro pf-macro--fiber"><span class="pf-macro__v">' + fmt.num(tot.fiber, 0) +
      '</span><span class="pf-macro__k">' + t('card.fiber') + '</span></div>' +
      '<div class="pf-macro pf-macro--salt"><span class="pf-macro__v">' + fmt.num(tot.salt, 1) +
      '</span><span class="pf-macro__k">' + t('card.salt') + '</span></div>' +
      '<div class="pf-macro pf-macro--kcal"><span class="pf-macro__v">' + fmt.num(tot.kcal, 0) +
      '</span><span class="pf-macro__k">kcal</span></div>' +
      '</div>' +
      '<p class="pf-muted" style="font-size:var(--fs-3xs);line-height:1.5">' +
      '≈ Costul e o estimare (±20–30%), nu un preț de raft.' +
      (tot.unknownCost ? ' ' + tot.unknownCost + ' produse nu au niciun preț, deci totalul e și subestimat.' : '') +
      '</p>' +
      '<div class="pf-row pf-row--wrap" style="gap:var(--sp-2);margin-top:var(--sp-2)">' +
      '<button class="pf-btn pf-btn--sm" data-act="tray-export">📋 ' + t('tray.export') + '</button>' +
      '<button class="pf-btn pf-btn--sm" data-act="tray-shop">🛒 Listă</button>' +
      '<button class="pf-btn pf-btn--sm pf-btn--danger" data-act="tray-clear">' + t('tray.clear') + '</button>' +
      '</div>' +
      mealsPanel() +
      '</div>';

    el.innerHTML =
      handle +
      '<div class="pf-tray__body">' +
      '<div class="pf-tray__items">' + rows + '</div>' +
      progress +
      '</div>';
  }

  /* =======================================================================
   * SHOPPING LIST VIEW (rendered into the main stage)
   * ==================================================================== */
  function renderShoppingView(container) {
    const groups = shoppingList();
    if (!groups.length) {
      container.innerHTML =
        '<div class="pf-empty"><span class="pf-empty__icon">🛒</span>' +
        '<span class="pf-empty__title">Lista de cumpărături e goală</span>' +
        '<span class="pf-empty__text">Adaugă produse la masă și ele apar aici, grupate ' +
        'după magazinul unde proteina lor e cea mai ieftină.</span></div>';
      return;
    }

    const checked = PF.store.getSet('shopChecked');

    const html = groups
      .map(function (g) {
        const color = PF.ui.storeColor(g.name);
        return (
          '<section class="pf-shop__store">' +
          '<header class="pf-shop__head" style="--store-color:' + color + '">' +
          '<span class="pf-shop__name">' + fmt.esc(g.name) + '</span>' +
          '<span class="pf-badge">' + g.items.length + '</span>' +
          '<span class="pf-shop__cost">' + fmt.ronApprox(g.cost, { short: true }) + '</span>' +
          '</header>' +
          '<ul class="pf-shop__list">' +
          g.items
            .map(function (it) {
              const done = checked.has(it.id);
              return (
                '<li class="pf-shop__item' + (done ? ' is-done' : '') + '">' +
                '<input type="checkbox" data-shop-check="' + fmt.esc(it.id) + '"' +
                (done ? ' checked' : '') + '>' +
                '<span>' + (it.food.emoji || '') + ' ' + fmt.esc(it.food.nameRo || it.food.name) + '</span>' +
                '<span class="pf-shop__qty">' + fmt.num(it.grams, 0) + ' ' + it.food.unit +
                (it.cost ? ' · ' + fmt.ronApprox(it.cost, { short: true }) : '') + '</span>' +
                '</li>'
              );
            })
            .join('') +
          '</ul>' +
          '</section>'
        );
      })
      .join('');

    const tot = totals();
    container.innerHTML =
      '<div class="pf-resultbar" style="margin-bottom:var(--sp-4)">' +
      '<span class="pf-resultbar__count"><em>' + Object.keys(items).length + '</em> produse · ' +
      fmt.num(tot.protein, 0) + ' g proteină · ' + fmt.ronApprox(tot.cost, { short: true }) + '</span>' +
      '<span class="pf-grow"></span>' +
      '<button class="pf-btn pf-btn--sm" data-act="print">🖨️ ' + t('tray.print') + '</button>' +
      '<button class="pf-btn pf-btn--sm" data-act="tray-export">📋 ' + t('tray.export') + '</button>' +
      '</div>' +
      '<div class="pf-shop">' + html + '</div>';
  }

  /* =======================================================================
   * EXPORT
   * ==================================================================== */
  function exportText() {
    const tot = totals();
    const target = PF.app.getTarget();
    const lines = [
      'ATLASUL PROTEINELOR SIBIU — ' + (pendingName.trim() || 'masa mea'),
      new Date().toLocaleDateString('ro-RO') + ' · ' + count() + ' produse',
      ''
    ];

    shoppingList().forEach(function (g) {
      lines.push('── ' + g.name + ' ──');
      g.items.forEach(function (it) {
        /* The serving count is what you actually buy; grams alone made the
         * list unusable at the shelf when a portion was not 100 g. */
        lines.push(
          '  [ ] ' + (it.food.nameRo || it.food.name) +
          ' — ' + fmt.num(it.servings, 2) + ' × ' +
          ((it.food.serving && it.food.serving.label) ||
            it.food._d.servingGrams + ' ' + it.food.unit) +
          ' = ' + fmt.num(it.grams, 0) + ' ' + it.food.unit +
          ' (' + fmt.num(it.food._d.perServing.protein * it.servings, 1) + ' g proteină' +
          (it.cost ? ', ' + fmt.ronApprox(it.cost) : ', pret necunoscut') + ')'
        );
      });
      lines.push('  Subtotal: ' + fmt.ronApprox(g.cost));
      lines.push('');
    });

    lines.push('── TOTAL ──');
    lines.push('Proteină: ' + fmt.num(tot.protein, 1) + ' g  (ținta zilnică: ' + target.target + ' g → ' +
      Math.round((tot.protein / target.target) * 100) + '%)');
    lines.push('Carbohidrați: ' + fmt.num(tot.carbs, 1) + ' g');
    lines.push('Grăsimi: ' + fmt.num(tot.fat, 1) + ' g');
    lines.push('Fibre: ' + fmt.num(tot.fiber, 1) + ' g');
    lines.push('Sare: ' + fmt.num(tot.salt, 2) + ' g');
    lines.push('Calorii: ' + fmt.num(tot.kcal, 0) + ' kcal');
    lines.push('Cost estimat: ' + fmt.ronApprox(tot.cost));

    const gap = target.target - tot.protein;
    if (gap > 0.5) {
      lines.push('');
      lines.push('Iti mai lipsesc ' + fmt.num(gap, 0) + ' g de proteina. Ajungi la tinta cu:');
      gapSuggestions(gap, 3).forEach(function (p) {
        lines.push('  - inca ' + p.servings + ' x ' + (p.food.nameRo || p.food.name) +
          ' (+' + fmt.num(p.protein, 0) + ' g)');
      });
    } else {
      lines.push('');
      lines.push('Tinta de ' + target.target + ' g proteina este atinsa.');
    }

    if (tot.unknownCost) {
      lines.push('');
      lines.push(tot.unknownCost + ' produse nu au niciun pret, deci totalul de mai sus ' +
        'este SUBESTIMAT.');
    }

    lines.push('');
    lines.push('NOTA: preturile sunt ESTIMARI (+/-20-30%), nu preturi de raft.');
    lines.push('Niciun pret din acest atlas nu a fost verificat intr-un magazin.');

    return lines.join('\n');
  }

  /* =======================================================================
   * MOUNT
   * ==================================================================== */
  function mount(node, changeCb) {
    el = node;
    onChange = changeCb || function () {};
    load();
    render();

    el.addEventListener('click', function (ev) {
      const act = ev.target.closest('[data-act]');
      if (!act) return;
      const a = act.getAttribute('data-act');
      const row = ev.target.closest('[data-id]');
      const id = row ? row.getAttribute('data-id') : null;

      if (a === 'toggle-tray') {
        setOpen(!isOpen);
      } else if (a === 'inc' && id) {
        setQty(id, (items[id] || 0) + 0.5);
      } else if (a === 'dec' && id) {
        setQty(id, (items[id] || 0) - 0.5);
      } else if (a === 'rm' && id) {
        remove(id);
      } else if (a === 'tray-clear') {
        clear();
      } else if (a === 'gap-add') {
        add(act.getAttribute('data-gap-id'), Number(act.getAttribute('data-gap-n')) || 1);
      } else if (a === 'meal-save') {
        const box = el.querySelector('[data-act="meal-name"]');
        if (box) pendingName = box.value;
        saveMeal(pendingName);
        render();
      } else if (a === 'meal-load') {
        loadMeal(act.getAttribute('data-meal'));
      } else if (a === 'meal-del') {
        deleteMeal(act.getAttribute('data-meal'));
        render();
      }
    });

    /* Every keystroke would otherwise be wiped by the next full re-render. */
    el.addEventListener('input', function (ev) {
      const box = ev.target.closest('[data-act="meal-name"]');
      if (box) pendingName = box.value;
    });

    /* A width change can rewrap the handle, so re-measure the peek. */
    window.addEventListener('resize', function () { setOpen(isOpen); });

    el.addEventListener('change', function (ev) {
      const inp = ev.target.closest('[data-act="qty"]');
      if (!inp) return;
      const row = ev.target.closest('[data-id]');
      if (!row) return;
      /* A number input reports '' for unparseable text, and Number('') is 0,
       * which used to DELETE the food. Reject bad input and restore instead. */
      const raw = String(inp.value).trim();
      const n = Number(raw);
      if (raw === '' || Number.isNaN(n) || n < 0) {
        render();
        return;
      }
      setQty(row.getAttribute('data-id'), n);
    });
  }

  /**
   * The tray has three postures:
   *   hidden — nothing in it, fully off-screen, page gets no bottom padding
   *   peeking — handle visible with the running totals (the default)
   *   open — full panel with items and progress
   * `--tray-h` tells the layout how much bottom padding the page needs so
   * nothing important hides behind it.
   */
  function setOpen(open) {
    isOpen = open;
    if (!el) return;
    const empty = count() === 0;
    el.classList.toggle('is-open', open && !empty);
    el.classList.toggle('is-hidden', empty && !open);
    render();

    /* Measure the handle instead of trusting a hard-coded peek height.
     * The handle's content changes (the running cost gained a `≈`, totals
     * gain digits), and any fixed value eventually becomes too short — which
     * pushes the totals the handle exists to show below the fold. */
    const handle = el.querySelector('.pf-tray__handle');
    const measured = handle ? Math.ceil(handle.getBoundingClientRect().height) : 0;
    const peek = Math.max(measured, 52) + 'px';
    document.documentElement.style.setProperty('--tray-peek', peek);
    document.documentElement.style.setProperty(
      '--tray-h',
      empty && !open ? '0px' : peek
    );

    /* --tray-h is only the page's bottom padding. Toasts need the tray's
     * ACTUAL height, otherwise they render on top of the open panel. */
    const lift = empty && !open
      ? '0px'
      : (open ? Math.round(el.getBoundingClientRect().height) + 'px' : peek);
    /* keep it in sync when the window changes width */
    document.documentElement.style.setProperty('--tray-lift', lift);
  }

  PF.tray = {
    mount: mount,
    add: add,
    remove: remove,
    setQty: setQty,
    clear: clear,
    count: count,
    has: has,
    totals: totals,
    render: render,
    items: function () { return Object.assign({}, items); },
    shoppingList: shoppingList,
    renderShoppingView: renderShoppingView,
    exportText: exportText,
    setOpen: setOpen,
    isOpen: function () { return isOpen; },
    /* saved meals */
    meals: meals,
    saveMeal: saveMeal,
    loadMeal: loadMeal,
    deleteMeal: deleteMeal,
    gapSuggestions: gapSuggestions
  };
})();
