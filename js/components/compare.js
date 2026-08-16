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
    { label: 'din care zaharuri', get: f => f.per100g.sugars || 0, fmt: v => fmt.num(v, 1) + ' g', better: 'low' },
    { label: 'Grăsimi', get: f => f._d.fat100, fmt: v => fmt.num(v, 1) + ' g', better: null },
    { label: 'din care saturate', get: f => f.per100g.satFat || 0, fmt: v => fmt.num(v, 1) + ' g', better: 'low' },
    { label: 'Fibre', get: f => f._d.fiber100, fmt: v => fmt.num(v, 1) + ' g', better: 'high' },
    { label: 'Sare', get: f => f.per100g.salt || 0, fmt: v => fmt.num(v, 2) + ' g', better: 'low' },

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
    { label: 'Timp total', get: f => f.timeMin, fmt: v => fmt.minutes(v, PF.i18n.lang()), better: 'low' },
    { label: 'Timp activ', get: f => f.activeTimeMin, fmt: v => fmt.minutes(v, PF.i18n.lang()), better: 'low' },
    { label: 'Efort', get: f => f.effort, fmt: v => v + '/5', better: 'low' },

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

    /* --- body --- */
    const body = ROWS
      .map(function (r) {
        if (r.group) {
          return (
            '<tr><th colspan="' + (foods.length + 1) + '" style="background:var(--bg-inset);' +
            'color:var(--text-3);letter-spacing:var(--tracking-caps)">' +
            fmt.esc(r.group) + '</th></tr>'
          );
        }

        const values = foods.map(r.get);
        let bestIdx = -1;
        let worstIdx = -1;
        if (r.better) {
          const valid = values
            .map((v, i) => ({ v: v, i: i }))
            .filter(x => x.v !== null && x.v !== undefined && !Number.isNaN(x.v));
          if (valid.length > 1) {
            valid.sort((a, b) => (r.better === 'high' ? b.v - a.v : a.v - b.v));
            /* Only crown a winner when there is a real gap. */
            if (valid[0].v !== valid[valid.length - 1].v) {
              bestIdx = valid[0].i;
              worstIdx = valid[valid.length - 1].i;
            }
          }
        }

        return (
          '<tr><th>' + fmt.esc(r.label) + '</th>' +
          foods
            .map(function (f, i) {
              const cls = i === bestIdx ? ' class="is-best"' : i === worstIdx ? ' class="is-worst"' : '';
              const shown = r.fmt(values[i], f);
              return '<td' + cls + '>' + fmt.esc(String(shown)) + '</td>';
            })
            .join('') +
          '</tr>'
        );
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
      '<div class="pf-row pf-row--between" style="margin-bottom:var(--sp-4)">' +
      '<span class="pf-resultbar__count"><em>' + foods.length + '</em> produse comparate</span>' +
      '<button class="pf-btn pf-btn--sm pf-btn--danger" data-act="clear-compare">Golește</button>' +
      '</div>' +
      '<div class="pf-compare"><table>' +
      '<thead><tr><th style="min-width:150px"></th>' + heads + '</tr></thead>' +
      '<tbody>' + barsRow + statsRow + body + '</tbody>' +
      '</table></div>' +
      '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-3)">' +
      'Verde = cea mai bună valoare de pe rând. Rândurile fără câștigător (carbohidrați, ' +
      'grăsimi) sunt cele unde „mai mult” sau „mai puțin” depinde de ce urmărești.</p>';
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
    ROWS: ROWS
  };
})();
