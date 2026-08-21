/* =========================================================================
 * PROTEIN ATLAS SIBIU — UI ATOMS
 * Pure functions that return HTML strings for the videogame HUD pieces:
 * stat bars, tier badges, pip meters, macro strips, store pills, timing.
 * Attaches to window.PF.ui
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  /* Store colour lookup, built once from the store registry. */
  let STORE_COLORS = null;
  function storeColor(name) {
    if (!STORE_COLORS) {
      STORE_COLORS = {};
      (window.PF_STORES || []).forEach(s => {
        STORE_COLORS[s.name] = s.color;
      });
    }
    return STORE_COLORS[name] || 'var(--text-4)';
  }

  /* =======================================================================
   * STAT BAR
   * ==================================================================== */
  /**
   * @param {object} o
   *   label   - display text
   *   value   - 0..100
   *   color   - css colour (var() ok)
   *   size    - '' | 'lg' | 'xs'
   *   suffix  - text after the number (default none)
   *   tip     - tooltip text
   *   display - override the printed number (e.g. "23 g")
   */
  function statBar(o) {
    const v = fmt.clamp(o.value || 0, 0, 100);
    const cls = ['pf-stat'];
    if (o.size) cls.push('pf-stat--' + o.size);
    const tip = o.tip ? ' data-tip="' + fmt.esc(o.tip) + '"' : '';
    const shown = o.display !== undefined ? o.display : Math.round(v);
    return (
      '<div class="' + cls.join(' ') + '" style="--v:' + v.toFixed(1) +
      ';--c:' + (o.color || 'var(--accent)') + '"' + tip + '>' +
      '<span class="pf-stat__label">' + fmt.esc(o.label) + '</span>' +
      '<span class="pf-stat__track"><span class="pf-stat__fill"></span></span>' +
      '<span class="pf-stat__val">' + fmt.esc(String(shown)) + '</span>' +
      '</div>'
    );
  }

  /** The standard six-bar block shown on a card. */
  function statBlock(food, opts) {
    const d = food._d;
    const o = opts || {};
    const size = o.size || '';
    const rows = [
      { k: 'protein', v: d.bars.protein, c: 'var(--stat-protein)', disp: fmt.num(d.protein100, 1) + 'g' },
      { k: 'purity', v: d.bars.purity, c: 'var(--stat-leanness)', disp: Math.round(d.purityPct) + '%' },
      { k: 'value', v: d.bars.value, c: 'var(--stat-value)', disp: d.ronPer100gProtein ? fmt.num(d.ronPer100gProtein, 1) : '—' },
      { k: 'convenience', v: d.bars.convenience, c: 'var(--stat-convenience)' },
      { k: 'taste', v: d.bars.taste, c: 'var(--stat-taste)' },
      { k: 'satiety', v: d.bars.satiety, c: 'var(--stat-satiety)' }
    ];
    if (o.extended) {
      rows.push({ k: 'versatility', v: d.bars.versatility, c: 'var(--stat-versatility)' });
      rows.push({ k: 'speed', v: d.bars.speed, c: 'var(--stat-speed)', disp: fmt.minutes(food.timeMin, PF.i18n.lang()) });
      rows.push({ k: 'leanness', v: d.bars.leanness, c: 'var(--stat-leanness)' });
    }
    return (
      '<div class="pf-statlist">' +
      rows
        .map(r =>
          statBar({
            label: t('stat.' + r.k),
            value: r.v,
            color: r.c,
            size: size,
            tip: t('stat.' + r.k + '.tip'),
            display: r.disp
          })
        )
        .join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * TIER BADGE
   * ==================================================================== */
  function tier(letter, opts) {
    const o = opts || {};
    const cls = ['pf-tier'];
    if (o.size) cls.push('pf-tier--' + o.size);
    const sub = o.sub ? '<span class="pf-tier__sub">' + fmt.esc(o.sub) + '</span>' : '';
    const tip = o.tip ? ' data-tip="' + fmt.esc(o.tip) + '"' : '';
    return (
      '<div class="' + cls.join(' ') + '" data-tier="' + fmt.esc(letter) + '"' + tip + '>' +
      fmt.esc(letter) + sub + '</div>'
    );
  }

  /* =======================================================================
   * PIP METER (0..5)
   * ==================================================================== */
  function pips(value, max, color, round) {
    const m = max || 5;
    const v = fmt.clamp(Math.round(value || 0), 0, m);
    let out = '<span class="pf-pips' + (round ? ' pf-pips--round' : '') +
      '" style="--c:' + (color || 'var(--accent)') + '">';
    for (let i = 1; i <= m; i++) {
      out += '<span class="pf-pip' + (i <= v ? ' is-on' : '') + '"></span>';
    }
    return out + '</span>';
  }

  /* =======================================================================
   * MACRO BAR — share of calories, fixed order: protein, carbs, fat, fiber
   * ==================================================================== */
  function macroBar(food, opts) {
    const o = opts || {};
    const e = food._d.energyShare;
    /* Same trap the legend fell into: four independent Math.round calls on
     * shares of one whole. The bar is rendered right next to macroLegend on
     * every card, so an independently-rounded tooltip could say "Proteină ·
     * 34%" while the legend one line below said 35% for the same product.
     * The WIDTHS stay exact — that is geometry, and the segments have to fill
     * the track — but every number spoken aloud comes from roundShares. */
    const shown = PF.charts.roundShares(e);
    const segs = [
      { k: 'protein', v: e.protein, pct: shown.protein, label: 'P' },
      { k: 'carbs', v: e.carbs, pct: shown.carbs, label: 'C' },
      { k: 'fat', v: e.fat, pct: shown.fat, label: 'G' },
      { k: 'fiber', v: e.fiber, pct: shown.fiber, label: 'F' }
    ].filter(s => s.v > 0.5);

    const tall = o.tall ? ' pf-macrobar--tall' : '';
    return (
      '<div class="pf-macrobar' + tall + '" role="img" aria-label="' +
      fmt.esc(segs.map(s => t('card.' + s.k) + ' ' + s.pct + '%').join(', ')) + '">' +
      segs
        .map(
          s =>
            '<span class="pf-macrobar__seg pf-macrobar__seg--' + s.k +
            '" style="width:' + s.v.toFixed(1) + '%" data-tip="' +
            fmt.esc(t('card.' + s.k) + ' · ' + s.pct + '% din calorii') + '">' +
            (o.tall && s.v > 11 ? s.label : '') +
            '</span>'
        )
        .join('') +
      '</div>'
    );
  }

  /** Legend for the macro bar — always rendered next to it. */
  function macroLegend(food) {
    const d = food._d;
    /* Rounding the four shares independently printed 99% or 101% on 125 of
     * the 512 products. `energyShare` sums to exactly 100, so the fix belongs
     * to the display: largest-remainder rounding, shared with the donut so
     * the ring, its tooltips and this legend can never disagree. */
    const pct = PF.charts.roundShares(d.energyShare);
    const rows = [
      { k: 'protein', g: d.protein100, pct: pct.protein, c: 'var(--macro-protein)' },
      { k: 'carbs', g: d.carbs100, pct: pct.carbs, c: 'var(--macro-carbs)' },
      { k: 'fat', g: d.fat100, pct: pct.fat, c: 'var(--macro-fat)' },
      { k: 'fiber', g: d.fiber100, pct: pct.fiber, c: 'var(--macro-fiber)' }
    ];
    return (
      '<div class="pf-donut__legend">' +
      rows
        .map(
          r =>
            '<div class="pf-legend-row">' +
            '<span class="pf-legend-row__swatch" style="--c:' + r.c + '"></span>' +
            '<span class="pf-legend-row__name">' + t('card.' + r.k) + '</span>' +
            '<span class="pf-legend-row__g">' + fmt.g(r.g) + '</span>' +
            '<span class="pf-legend-row__pct">' + r.pct + '%</span>' +
            '</div>'
        )
        .join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * STAT GRID — the `pf-macros` tile row
   *
   * A row of "big number over small label" tiles. It started life as the
   * macro strip on a card, but modal.js and tray.js were each hand-writing
   * the same six <div>s for numbers that are not macros at all (cooking
   * time, lei/kg, effort), reusing the macro colour classes purely as a
   * palette. Four hand-rolled copies had already drifted apart, so the
   * markup lives here once and the callers pass data.
   *
   * cells: [{ v, k, cls }] — v is the number, k the caption, cls the colour
   *        slot ('protein' | 'carbs' | 'fat' | 'fiber' | 'salt' | 'kcal').
   * opts:  { six: boolean, style: string }
   *
   * Both v and k are escaped: a caller must never have to remember to.
   * ==================================================================== */
  function statGrid(cells, opts) {
    const o = opts || {};
    return (
      '<div class="pf-macros' + (o.six ? ' pf-macros--6' : '') + '"' +
      (o.style ? ' style="' + fmt.esc(o.style) + '"' : '') + '>' +
      cells
        .map(
          c =>
            '<div class="pf-macro pf-macro--' + c.cls + '">' +
            '<span class="pf-macro__v">' + fmt.esc(String(c.v)) + '</span>' +
            '<span class="pf-macro__k">' + fmt.esc(c.k) + '</span>' +
            '</div>'
        )
        .join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * MACRO NUMBER STRIP — the stat grid filled with the four (or six) macros
   * ==================================================================== */
  function macroStrip(n, opts) {
    const o = opts || {};
    const cells = [
      { k: 'protein', v: fmt.num(n.protein, 1), cls: 'protein' },
      { k: 'carbs', v: fmt.num(n.carbs, 1), cls: 'carbs' },
      { k: 'fat', v: fmt.num(n.fat, 1), cls: 'fat' },
      { k: 'kcal', v: Math.round(n.kcal), cls: 'kcal' }
    ];
    if (o.six) {
      cells.push({ k: 'fiber', v: fmt.num(n.fiber, 1), cls: 'fiber' });
      cells.push({ k: 'salt', v: fmt.num(n.salt, 2), cls: 'salt' });
    }
    return statGrid(
      cells.map(c => ({ v: c.v, k: t('card.' + c.k), cls: c.cls })),
      { six: o.six }
    );
  }

  /* =======================================================================
   * EFFORT & TIME CHIPS
   * ==================================================================== */
  function effortChip(effort) {
    let flames = '';
    for (let i = 0; i < 5; i++) {
      flames += '<span class="pf-effort__flame' + (i < effort ? ' is-on' : '') + '">🔥</span>';
    }
    return (
      '<span class="pf-effort" data-tip="' + fmt.esc(t('effort.' + effort)) + '">' +
      '<span class="pf-effort__flames">' + flames + '</span>' +
      '</span>'
    );
  }

  function timeChip(timeMin, activeMin) {
    const bucket = fmt.timeBucket(timeMin);
    const cls =
      bucket === 'instant' ? ' pf-time--instant' :
      bucket === 'quick' ? ' pf-time--quick' :
      bucket === 'slow' ? ' pf-time--slow' : '';
    const tip =
      activeMin !== undefined && activeMin !== timeMin
        ? 'Total ' + fmt.minutes(timeMin, PF.i18n.lang()) +
          ', din care activ ' + fmt.minutes(activeMin, PF.i18n.lang())
        : '';
    return (
      '<span class="pf-time' + cls + '"' + (tip ? ' data-tip="' + fmt.esc(tip) + '"' : '') + '>' +
      '⏱ ' + fmt.minutes(timeMin, PF.i18n.lang()) +
      '</span>'
    );
  }

  /* =======================================================================
   * STORE PILLS
   * ==================================================================== */
  function storePill(store, opts) {
    const o = opts || {};
    const muted = store.availability === 'occasional' || store.availability === 'seasonal';
    return (
      '<span class="pf-store-pill' + (muted ? ' pf-store-pill--muted' : '') +
      '" style="--store-color:' + storeColor(store.name) + '"' +
      (o.tip !== false && store.aisle
        ? ' data-tip="' + fmt.esc(store.aisle) + '"'
        : '') +
      '>' + fmt.esc(store.name) + '</span>'
    );
  }

  function storePills(stores, max) {
    const list = stores || [];
    const limit = max || 4;
    let out = list.slice(0, limit).map(s => storePill(s)).join('');
    if (list.length > limit) {
      out +=
        '<span class="pf-store-pill" style="--store-color:var(--text-4)">+' +
        (list.length - limit) + '</span>';
    }
    return '<span class="pf-card__stores">' + out + '</span>';
  }

  /* =======================================================================
   * TIMING GRID
   * ==================================================================== */
  function timingGrid(food, nowSlot) {
    const timing = food.timing || {};
    return (
      '<div class="pf-timing">' +
      PF.i18n.SLOTS.map(function (slot) {
        const v = timing[slot.key] || 0;
        const isNow = nowSlot === slot.key;
        return (
          '<div class="pf-timing__slot' + (isNow ? ' is-now' : '') +
          '" data-score="' + v + '" data-tip="' +
          fmt.esc(PF.i18n.slotName(slot.key) + ' · ' + v + '/5') + '">' +
          '<span class="pf-timing__icon">' + fmt.esc(slot.emoji) + '</span>' +
          '<span class="pf-timing__name">' + fmt.esc(PF.i18n.slotName(slot.key)) + '</span>' +
          '<span class="pf-timing__bar" style="--v:' + v + '"><span></span></span>' +
          '</div>'
        );
      }).join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * PURITY METER
   * ==================================================================== */
  function purityMeter(pct) {
    return (
      '<div class="pf-purity" data-tip="' + fmt.esc(t('stat.purity.tip')) + '">' +
      '<span class="pf-purity__track"><span class="pf-purity__marker" style="--v:' +
      fmt.clamp(pct, 0, 100).toFixed(1) + '"></span></span>' +
      '<span class="pf-purity__label">' + Math.round(pct) + '%</span>' +
      '</div>'
    );
  }

  /* =======================================================================
   * SCORE ORB
   * ==================================================================== */
  function orb(value, label, color, size) {
    const r = size === 'lg' ? 40 : 25;
    const c = 2 * Math.PI * r;
    const off = c * (1 - fmt.clamp(value, 0, 100) / 100);
    const box = size === 'lg' ? 92 : 58;
    return (
      '<div class="pf-orb' + (size === 'lg' ? ' pf-orb--lg' : '') +
      '" style="--c:' + (color || 'var(--accent)') + '">' +
      '<svg viewBox="0 0 ' + box + ' ' + box + '" aria-hidden="true">' +
      '<circle class="pf-orb__track" cx="' + box / 2 + '" cy="' + box / 2 + '" r="' + r + '"/>' +
      '<circle class="pf-orb__ring" cx="' + box / 2 + '" cy="' + box / 2 + '" r="' + r +
      '" stroke-dasharray="' + c.toFixed(2) + '" stroke-dashoffset="' + off.toFixed(2) + '"/>' +
      '</svg>' +
      '<span class="pf-orb__value">' + Math.round(value) + '</span>' +
      (label ? '<span class="pf-orb__unit">' + fmt.esc(label) + '</span>' : '') +
      '</div>'
    );
  }

  /* =======================================================================
   * TAGS
   * ==================================================================== */
  function tagChips(tags, max) {
    const list = tags || [];
    const limit = max || 5;
    const hot = { 'very-high-protein': 1, 'protein-dense': 1, 'cheap-protein': 1, 'ready-to-eat': 1 };
    const warn = { 'high-sodium': 1, processed: 1, premium: 1, 'high-kcal': 1 };
    /* Show the informative tags first, not whatever happened to be listed first. */
    const sorted = list.slice().sort(function (a, b) {
      const ra = hot[a] ? 0 : warn[a] ? 2 : 1;
      const rb = hot[b] ? 0 : warn[b] ? 2 : 1;
      return ra - rb;
    });
    return (
      '<div class="pf-card__tags">' +
      sorted
        .slice(0, limit)
        .map(function (tg) {
          const cls = hot[tg] ? ' pf-tag--hot' : warn[tg] ? ' pf-tag--warn' : '';
          return '<span class="pf-tag' + cls + '">' + fmt.esc(PF.i18n.tagName(tg)) + '</span>';
        })
        .join('') +
      '</div>'
    );
  }

  /**
   * A plain row of free-text tags — equipment, pairings, and so on.
   *
   * Unlike `tagChips`, nothing here is looked up in the dictionary: the
   * strings are already the label. Returns '' for an empty list so a caller
   * can hand it straight to `block()` and have the heading disappear too.
   */
  function tagList(items) {
    const list = items || [];
    if (!list.length) return '';
    return (
      '<div class="pf-card__tags">' +
      list.map(x => '<span class="pf-tag">' + fmt.esc(x) + '</span>').join('') +
      '</div>'
    );
  }

  function dietChips(diet) {
    if (!diet) return '';
    const on = Object.keys(diet).filter(k => diet[k] && k !== 'porkFree' && k !== 'halal');
    if (!on.length) return '';
    return (
      '<div class="pf-card__tags">' +
      on
        .map(k => '<span class="pf-tag pf-tag--diet">' + fmt.esc(PF.i18n.dietName(k)) + '</span>')
        .join('') +
      '</div>'
    );
  }

  /* =======================================================================
   * PROTEIN QUALITY NOTE
   * The label counts nitrogen; the body counts usable amino acids. Where
   * those two disagree enough to change a decision, say so out loud.
   * ==================================================================== */
  function qualityNote(food) {
    const d = food._d;
    if (d.qualityReason === 'collagen') {
      /* The factor used to be a flat 0.25 and was written into this string.
       * Since `collagenShare` landed, a partly gelatinous product gets a
       * weighted factor (0.699 for the protein jelly), and the hardcoded
       * 0,25 contradicted the quality bar rendered right next to it. Read
       * the real number instead — it reads correctly at 0,25 and at 0,699. */
      const share = Math.round((d.collagenShare || 1) * 100);
      const factor = fmt.num(d.quality, 2).replace('.', ',');
      return {
        level: 'bad',
        short: 'Proteină incompletă',
        text:
          'Colagenul și gelatina nu conțin triptofan și au o valoare biologică ' +
          'aproape nulă pentru sinteza musculară. Gramele de pe etichetă sunt ' +
          'reale ca azot, dar NU le pune la socoteală în ținta zilnică de ' +
          'proteină. ' +
          (share < 100
            ? 'Aici doar ' + share + '% din proteină e gelatină, așa că scorul ' +
              'din atlas ajustează'
            : 'Scorul din atlas ajustează') +
          ' proteina cu un factor de ' + factor +
          ' (' + Math.round(d.quality * 100) + '% din gramele declarate) ' +
          'tocmai din acest motiv.'
      };
    }
    if (d.quality < 1) {
      return {
        level: 'warn',
        short: 'Aminoacizi limitanți',
        text:
          'Sursă vegetală incompletă — îi lipsește parțial un aminoacid ' +
          'esențial (lizina la cereale, metionina la leguminoase). Într-o ' +
          'dietă variată se compensează singură: combină leguminoase cu ' +
          'cereale în aceeași zi și problema dispare. Scorul e ajustat cu ' +
          'un factor de ' + String(d.quality).replace('.', ',') + '.'
      };
    }
    return null;
  }

  function qualityBadge(food) {
    const note = qualityNote(food);
    if (!note || note.level !== 'bad') return '';
    return (
      '<span class="pf-tag pf-tag--warn" data-tip="' + fmt.esc(note.text) + '">⚠ ' +
      fmt.esc(note.short) + '</span>'
    );
  }

  /* =======================================================================
   * BARE APPROXIMATE NUMBER
   *
   * A price in a column that already says "lei/100g P" must not repeat the
   * unit, so `fmt.ronApprox` is the wrong tool — but it still has to carry
   * the `≈`, because no price in this atlas was ever read off a shelf.
   * Seven call sites in three files were spelling out
   * `(verified ? '' : '≈') + fmt.num(v, 1)`, and two of them had dropped
   * the `≈`. One function, so the marker cannot be forgotten again.
   *
   * A missing price is an em dash, never "≈ —".
   * ==================================================================== */
  function approxNum(value, verified, decimals) {
    if (!value || !Number.isFinite(value)) return '—';
    /* `fixed`, not `num`: the two callers that put this in a table (the atlas
     * Tabel view and the modal store table) right-align it in a tabular column,
     * where a dropped trailing zero moves the decimal point out of line. */
    return (verified ? '' : '≈') + fmt.fixed(value, decimals === undefined ? 1 : decimals);
  }

  /* =======================================================================
   * FOOD EMOJI
   *
   * The ONE place a data-supplied emoji reaches innerHTML unescaped.
   *
   * It cannot be escaped: `fmt.esc` would turn a perfectly good 🍽️ into
   * itself but a stray quote into `&#39;`, and the field is meant to be a
   * glyph, not markup. What makes that safe is `tools/check.js` section 9b,
   * which refuses any `emoji` field on a food or a recipe that is longer
   * than three code points or contains < > & " ' \. Six files were each
   * inlining `(f.emoji || '🍽️')`, so the guarantee was spread over ten
   * call sites; now there is one to audit.
   *
   * Note the fallbacks used to disagree — cards fell back to the category
   * emoji, the shopping list to an empty string, everybody else to 🍽️.
   * Pass `fallback` where that difference is deliberate.
   * ==================================================================== */
  const EMOJI_FALLBACK = '🍽️';

  function foodEmoji(food, fallback) {
    const e = food && food.emoji;
    if (typeof e === 'string' && e) return e;
    return fallback === undefined ? EMOJI_FALLBACK : fallback;
  }

  /* =======================================================================
   * EMPTY STATE
   *
   * "Nothing to show" was written out longhand in boards, compare, recipes
   * and the tray — six copies, three of which had quietly lost the
   * explanatory line, which is the only part that tells you what to do next.
   * ==================================================================== */
  function emptyState(o) {
    return (
      '<div class="pf-empty"' + (o.style ? ' style="' + fmt.esc(o.style) + '"' : '') + '>' +
      '<span class="pf-empty__icon">' + (o.icon || '∅') + '</span>' +
      '<span class="pf-empty__title">' + fmt.esc(o.title) + '</span>' +
      (o.text ? '<span class="pf-empty__text">' + fmt.esc(o.text) + '</span>' : '') +
      /* `action` is raw markup on purpose — it is a button the caller built. */
      (o.action || '') +
      '</div>'
    );
  }

  /* =======================================================================
   * TITLED BLOCK — the dossier/section wrapper
   *
   * Lived in modal.js while recipes.js hand-wrote the same two elements
   * seven times. Returns nothing for an empty body, so a caller can build
   * the body conditionally without also guarding the heading.
   * ==================================================================== */
  function block(title, bodyHtml, badge) {
    if (!bodyHtml) return '';
    return (
      '<section class="pf-block">' +
      '<div class="pf-block__head">' + fmt.esc(title) +
      (badge ? '<span class="pf-badge">' + fmt.esc(badge) + '</span>' : '') +
      '</div>' +
      '<div class="pf-block__body">' + bodyHtml + '</div>' +
      '</section>'
    );
  }

  /* =======================================================================
   * AVAILABILITY DOT
   * ==================================================================== */
  const AVAIL_LABEL = {
    always: { ro: 'Mereu', en: 'Always' },
    usual: { ro: 'De obicei', en: 'Usually' },
    seasonal: { ro: 'Sezonier', en: 'Seasonal' },
    occasional: { ro: 'Ocazional', en: 'Occasional' },
    online: { ro: 'Online', en: 'Online' }
  };

  function availability(a) {
    const l = AVAIL_LABEL[a] || AVAIL_LABEL.usual;
    return (
      '<span class="pf-avail" data-a="' + fmt.esc(a) + '">' +
      fmt.esc(l[PF.i18n.lang()] || l.ro) + '</span>'
    );
  }

  PF.ui = {
    statBar: statBar,
    statBlock: statBlock,
    tier: tier,
    pips: pips,
    macroBar: macroBar,
    macroLegend: macroLegend,
    macroStrip: macroStrip,
    statGrid: statGrid,
    emptyState: emptyState,
    block: block,
    foodEmoji: foodEmoji,
    approxNum: approxNum,
    effortChip: effortChip,
    timeChip: timeChip,
    storePill: storePill,
    storePills: storePills,
    storeColor: storeColor,
    timingGrid: timingGrid,
    purityMeter: purityMeter,
    orb: orb,
    tagChips: tagChips,
    tagList: tagList,
    dietChips: dietChips,
    qualityNote: qualityNote,
    qualityBadge: qualityBadge,
    availability: availability
  };
})();
