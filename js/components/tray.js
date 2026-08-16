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
      fmt.ronShort(tot.cost) + '</b><span>' + t('tray.cost') + '</span></div>' +
      '<button class="pf-iconbtn" data-act="toggle-tray" aria-label="' +
      (isOpen ? 'Închide' : 'Deschide') + '">' + (isOpen ? '▾' : '▴') + '</button>' +
      '</div>' +
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
      (tot.unknownCost
        ? '<p class="pf-muted" style="font-size:var(--fs-3xs)">⚠️ ' + tot.unknownCost +
          ' produse fără preț cunoscut — costul total e subestimat.</p>'
        : '') +
      '<div class="pf-row" style="gap:var(--sp-2);margin-top:var(--sp-2)">' +
      '<button class="pf-btn pf-btn--sm" data-act="tray-export">📋 ' + t('tray.export') + '</button>' +
      '<button class="pf-btn pf-btn--sm" data-act="tray-shop">🛒 Listă</button>' +
      '<button class="pf-btn pf-btn--sm pf-btn--danger" data-act="tray-clear">' + t('tray.clear') + '</button>' +
      '</div>' +
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
          '<span class="pf-shop__cost">' + fmt.ronShort(g.cost) + '</span>' +
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
                (it.cost ? ' · ' + fmt.ronShort(it.cost) : '') + '</span>' +
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
      fmt.num(tot.protein, 0) + ' g proteină · ' + fmt.ronShort(tot.cost) + '</span>' +
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
    const lines = ['ATLASUL PROTEINELOR SIBIU — masa mea', ''];

    shoppingList().forEach(function (g) {
      lines.push('── ' + g.name + ' ──');
      g.items.forEach(function (it) {
        lines.push(
          '  • ' + (it.food.nameRo || it.food.name) +
          ' — ' + fmt.num(it.grams, 0) + ' ' + it.food.unit +
          ' (' + fmt.num(it.food._d.perServing.protein * it.servings, 1) + ' g proteină' +
          (it.cost ? ', ' + fmt.ron(it.cost) : '') + ')'
        );
      });
      lines.push('  Subtotal: ' + fmt.ron(g.cost));
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
    lines.push('Cost estimat: ' + fmt.ron(tot.cost));

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
      }
    });

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
    const peek = getComputedStyle(document.documentElement)
      .getPropertyValue('--tray-peek').trim() || '58px';
    document.documentElement.style.setProperty(
      '--tray-h',
      empty && !open ? '0px' : peek
    );
    render();

    /* --tray-h is only the page's bottom padding. Toasts need the tray's
     * ACTUAL height, otherwise they render on top of the open panel. */
    const lift = empty && !open
      ? '0px'
      : (open ? Math.round(el.getBoundingClientRect().height) + 'px' : peek);
    document.documentElement.style.setProperty('--tray-lift', lift);
  }

  function openTray() { setOpen(true); }

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
    items: function () { return items; },
    shoppingList: shoppingList,
    renderShoppingView: renderShoppingView,
    exportText: exportText,
    setOpen: setOpen,
    open: openTray,
    isOpen: function () { return isOpen; }
  };
})();
