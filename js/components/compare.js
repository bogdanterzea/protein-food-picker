/* =========================================================================
 * PROTEIN ATLAS SIBIU — SIDE-BY-SIDE COMPARISON
 * Up to 5 foods, every metric on one row, best value highlighted.
 * Attaches to window.PF.compare
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  const MAX = 5;
  let ids = [];
  /* When on, rows where every product shows the same thing are folded away so
   * only the actual differences are left on screen. */
  let diffOnly = false;

  /* =======================================================================
   * VALUE READERS
   *
   * A missing field and a declared 0 are NOT the same thing. `x || 0` used to
   * collapse them, which handed the "least sugar" crown to whichever product
   * simply failed to declare its sugars. These readers return null for
   * "not declared" so the row skips that product entirely.
   * ==================================================================== */

  /** A per-100 g nutrient, or null when the product does not declare it. */
  function n100(f, key) {
    const v = f.per100g ? f.per100g[key] : undefined;
    return typeof v === 'number' && !Number.isNaN(v) ? v : null;
  }

  /** Any plain numeric field, or null when absent. */
  function numOr(v) {
    return typeof v === 'number' && !Number.isNaN(v) ? v : null;
  }

  /** Formatter for a nutrient in grams that may be undeclared. */
  function grams(decimals) {
    return v => (v === null ? '—' : fmt.num(v, decimals) + ' g');
  }

  function load() {
    const saved = PF.store.get('compare', []);
    ids = (Array.isArray(saved) ? saved : []).filter(id => PF.data.byId[id]).slice(0, MAX);
  }

  function persist() {
    PF.store.set('compare', ids);
  }

  function has(id) {
    return ids.indexOf(id) !== -1;
  }

  function set() {
    return new Set(ids);
  }

  function toggle(id) {
    const i = ids.indexOf(id);
    if (i !== -1) {
      ids.splice(i, 1);
    } else {
      if (ids.length >= MAX) return { ok: false, reason: 'full' };
      ids.push(id);
    }
    persist();
    return { ok: true, added: i === -1 };
  }

  function clear() {
    ids = [];
    persist();
  }

  function count() {
    return ids.length;
  }

  /* =======================================================================
   * ROW DEFINITIONS
   * `better` says which direction wins: 'high' | 'low' | null (no winner)
   * ==================================================================== */
  const ROWS = [
    { group: 'Nutriție la 100 g' },
    { label: 'Proteină', get: f => f._d.protein100, fmt: v => fmt.num(v, 1) + ' g', better: 'high' },
    { label: '% din calorii', get: f => f._d.purityPct, fmt: v => Math.round(v) + '%', better: 'high' },
    { label: 'g proteină / 100 kcal', get: f => f._d.proteinPer100kcal, fmt: v => fmt.num(v, 1), better: 'high' },
    { label: 'Calorii', get: f => f._d.kcal100, fmt: v => Math.round(v) + ' kcal', better: 'low' },
    { label: 'Carbohidrați', get: f => f._d.carbs100, fmt: v => fmt.num(v, 1) + ' g', better: null },
    { label: 'din care zaharuri', get: f => n100(f, 'sugars'), fmt: grams(1), better: 'low' },
    { label: 'Grăsimi', get: f => f._d.fat100, fmt: v => fmt.num(v, 1) + ' g', better: null },
    { label: 'din care saturate', get: f => n100(f, 'satFat'), fmt: grams(1), better: 'low' },
    { label: 'Fibre', get: f => f._d.fiber100, fmt: v => fmt.num(v, 1) + ' g', better: 'high' },
    { label: 'Sare', get: f => n100(f, 'salt'), fmt: grams(2), better: 'low' },

    { group: 'Porție reală' },
    { label: 'Mărimea porției', get: f => f._d.servingGrams, fmt: (v, f) => (f.serving && f.serving.label) || v + ' ' + f.unit, better: null, text: true },
    { label: 'Proteină / porție', get: f => f._d.perServing.protein, fmt: v => fmt.num(v, 1) + ' g', better: 'high' },
    { label: 'Calorii / porție', get: f => f._d.perServing.kcal, fmt: v => Math.round(v) + ' kcal', better: 'low' },

    { group: 'Bani' },
    { label: 'lei / 100 g proteină (est.)', get: f => f._d.ronPer100gProtein, fmt: (v, f) => (v ? fmt.ronApprox(v, { short: true, verified: f._d.priceVerified }) : '—'), better: 'low' },
    { label: 'g proteină / leu', get: f => f._d.proteinPerRon, fmt: v => (v ? fmt.num(v, 1) + ' g' : '—'), better: 'high' },
    { label: 'lei / kg (est.)', get: f => f._d.pricePerKg, fmt: (v, f) => (v ? fmt.ronApprox(v, { short: true, verified: f._d.priceVerified }) : '—'), better: 'low' },
    { label: 'Cost / porție (est.)', get: f => f._d.costPerServing, fmt: (v, f) => (v ? fmt.ronApprox(v, { verified: f._d.priceVerified }) : '—'), better: 'low' },

    { group: 'Efort' },
    { label: 'Timp total', get: f => numOr(f.timeMin), fmt: v => (v === null ? '—' : fmt.minutes(v, PF.i18n.lang())), better: 'low' },
    { label: 'Timp activ', get: f => numOr(f.activeTimeMin), fmt: v => (v === null ? '—' : fmt.minutes(v, PF.i18n.lang())), better: 'low' },
    { label: 'Efort', get: f => numOr(f.effort), fmt: v => (v === null ? '—' : v + '/5'), better: 'low' },

    { group: 'Scoruri' },
    { label: 'Rang', get: f => f._d.score, fmt: (v, f) => f._d.tier + ' (' + Math.round(v) + ')', better: 'high' },
    { label: t('stat.taste'), get: f => f._d.bars.taste, fmt: v => Math.round(v), better: 'high' },
    { label: t('stat.satiety'), get: f => f._d.bars.satiety, fmt: v => Math.round(v), better: 'high' },
    { label: t('stat.convenience'), get: f => f._d.bars.convenience, fmt: v => Math.round(v), better: 'high' },
    { label: t('stat.versatility'), get: f => f._d.bars.versatility, fmt: v => Math.round(v), better: 'high' },
    { label: t('stat.leanness'), get: f => f._d.bars.leanness, fmt: v => Math.round(v) + '%', better: 'high' },

    { group: 'Practic' },
    { label: 'Magazine', get: f => (f.stores || []).length, fmt: (v, f) => (f.stores || []).map(s => s.name).join(', '), better: null, text: true },
    { label: 'Cel mai bun moment', get: f => 0, fmt: (v, f) => (f._d.bestSlot ? PF.i18n.slotName(f._d.bestSlot) : '—'), better: null, text: true },
    { label: 'Încredere date', get: f => 0, fmt: (v, f) => t('misc.confidence.' + f.dataConfidence), better: null, text: true }
  ];

  /* =======================================================================
   * RENDER
   * ==================================================================== */
  function render(container) {
    load();
    const foods = ids.map(id => PF.data.byId[id]).filter(Boolean);

    if (foods.length < 2) {
      container.innerHTML =
        '<div class="pf-empty">' +
        '<span class="pf-empty__icon">⇄</span>' +
        '<span class="pf-empty__title">Alege cel puțin două produse</span>' +
        '<span class="pf-empty__text">Apasă butonul ⇄ pe orice card ca să-l adaugi ' +
        'la comparație. Poți compara până la ' + MAX + ' produse simultan — util când ' +
        'nu te decizi între trei iaurturi care arată identic pe raft.</span>' +
        (foods.length === 1
          ? '<button class="pf-btn pf-btn--sm" data-act="clear-compare">Golește comparația</button>'
          : '') +
        '</div>';
      return;
    }

    /* --- headers --- */
    const heads = foods
      .map(function (f) {
        return (
          '<th><div class="pf-compare__head">' +
          '<span class="pf-card__icon">' + (f.emoji || '🍽️') + '</span>' +
          PF.ui.tier(f._d.tier, { size: 'sm' }) +
          '<span class="pf-compare__name">' + fmt.esc(f.nameRo || f.name) + '</span>' +
          '<button class="pf-compare__remove" data-uncompare="' + fmt.esc(f.id) + '">✕ scoate</button>' +
          '</div></th>'
        );
      })
      .join('');

    /* --- body ---
     * Built as a list first so identical rows can be dropped together with a
     * group heading that would otherwise be left standing over nothing. */
    const entries = ROWS.map(function (r) {
      if (r.group) return { group: r.group };

      const values = foods.map(r.get);
      const shown = foods.map((f, i) => String(r.fmt(values[i], f)));
      const crown = crownIndexes(values, r.better);
      const same = shown.every(s => s === shown[0]);

      const html =
        '<tr><th>' + fmt.esc(r.label) + '</th>' +
        foods
          .map(function (f, i) {
            const cls = i === crown.best ? ' class="is-best"'
              : i === crown.worst ? ' class="is-worst"' : '';
            return '<td' + cls + '>' + fmt.esc(shown[i]) + '</td>';
          })
          .join('') +
        '</tr>';

      return { html: html, same: same };
    });

    const identical = entries.filter(e => e.same).length;
    const keep = diffOnly ? entries.filter(e => e.group || !e.same) : entries;

    /* Drop a group heading with nothing left under it. */
    const body = keep
      .filter(function (e, i, arr) {
        if (!e.group) return true;
        const next = arr[i + 1];
        return !!next && !next.group;
      })
      .map(function (e) {
        if (e.group) {
          return (
            '<tr><th colspan="' + (foods.length + 1) + '" style="background:var(--bg-inset);' +
            'color:var(--text-3);letter-spacing:var(--tracking-caps)">' +
            fmt.esc(e.group) + '</th></tr>'
          );
        }
        return e.html;
      })
      .join('');

    /* --- macro bars row, rendered as HTML not text --- */
    const barsRow =
      '<tr><th>Distribuția caloriilor</th>' +
      foods.map(f => '<td>' + PF.ui.macroBar(f, { tall: true }) + '</td>').join('') +
      '</tr>';

    const statsRow =
      '<tr><th>Statistici</th>' +
      foods.map(f => '<td>' + PF.ui.statBlock(f, { size: 'xs' }) + '</td>').join('') +
      '</tr>';

    container.innerHTML =
      '<div class="pf-row pf-row--wrap" style="margin-bottom:var(--sp-4)">' +
      '<span class="pf-resultbar__count"><em>' + foods.length + '</em> produse comparate</span>' +
      '<span class="pf-grow"></span>' +
      '<button class="pf-btn pf-btn--sm' + (diffOnly ? ' pf-btn--primary' : '') +
      '" data-act="cmp-diff" aria-pressed="' + (diffOnly ? 'true' : 'false') + '">' +
      (diffOnly ? '👁️ Arată tot' : '🔍 Doar diferențele') +
      (identical ? ' <span class="pf-badge">' + identical + '</span>' : '') +
      '</button>' +
      '<button class="pf-btn pf-btn--sm pf-btn--danger" data-act="clear-compare">Golește</button>' +
      '</div>' +
      '<div class="pf-compare"><table>' +
      '<thead><tr><th style="min-width:150px"></th>' + heads + '</tr></thead>' +
      '<tbody>' + barsRow + statsRow + body + '</tbody>' +
      '</table></div>' +
      '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-3)">' +
      'Verde = cea mai bună valoare de pe rând, dar numai când e a unui singur produs: ' +
      'la egalitate nu câștigă nimeni. Rândurile fără câștigător (carbohidrați, grăsimi) ' +
      'sunt cele unde „mai mult” sau „mai puțin” depinde de ce urmărești. „—” înseamnă ' +
      'că produsul nu declară valoarea, deci nu intră în concurs.' +
      (diffOnly && identical
        ? ' <b>' + identical + ' rânduri identice sunt ascunse.</b>'
        : '') +
      '</p>';

    bind(container);
  }

  /**
   * Which cell gets the crown, if any.
   *
   * Three rules, all of them things the old code got wrong:
   *   - a row with no direction (`better: null`) never crowns anybody;
   *   - a value the product does not declare (null) does not compete, so a
   *     blank cell can never win a "less is better" row;
   *   - a tie for the best value crowns nobody — highlighting one of two
   *     equal numbers is a lie about which one is better.
   */
  function crownIndexes(values, better) {
    const out = { best: -1, worst: -1 };
    if (!better) return out;

    const valid = values
      .map((v, i) => ({ v: v, i: i }))
      .filter(x => typeof x.v === 'number' && !Number.isNaN(x.v));
    if (valid.length < 2) return out;

    valid.sort((a, b) => (better === 'high' ? b.v - a.v : a.v - b.v));
    const bestVal = valid[0].v;
    const worstVal = valid[valid.length - 1].v;
    if (bestVal === worstVal) return out; /* everyone equal — no winner */

    const bestTied = valid.filter(x => x.v === bestVal);
    const worstTied = valid.filter(x => x.v === worstVal);
    if (bestTied.length === 1) out.best = bestTied[0].i;
    if (worstTied.length === 1) out.worst = worstTied[0].i;
    return out;
  }

  /* One delegated listener per container, installed once. */
  function bind(container) {
    if (container.__pfCompareBound) return;
    container.__pfCompareBound = true;
    container.addEventListener('click', function (ev) {
      const btn = ev.target.closest('[data-act="cmp-diff"]');
      if (!btn) return;
      diffOnly = !diffOnly;
      render(container);
    });
  }

  PF.compare = {
    MAX: MAX,
    load: load,
    has: has,
    set: set,
    toggle: toggle,
    clear: clear,
    count: count,
    ids: function () { return ids.slice(); },
    render: render,
    ROWS: ROWS,
    crownIndexes: crownIndexes,
    diffOnly: function (v) {
      if (v !== undefined) diffOnly = !!v;
      return diffOnly;
    }
  };
})();
