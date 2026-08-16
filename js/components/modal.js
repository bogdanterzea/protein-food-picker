/* =========================================================================
 * PROTEIN ATLAS SIBIU — THE DOSSIER
 * Full detail view for one food, in six tabs.
 * Attaches to window.PF.modal
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const ui = PF.ui;
  const t = k => PF.i18n.t(k);

  let dlg = null;
  let currentFood = null;
  let currentList = [];
  let servingMode = 'per100'; // 'per100' | 'serving'

  /* =======================================================================
   * SMALL BUILDERS
   * ==================================================================== */

  /* Median of a numeric list. Medians, not means, because a handful of
   * protein isolates at 90 g would drag every category average upwards and
   * make an ordinary yoghurt look worse than it is. */
  function median(vals) {
    const v = vals.filter(x => typeof x === 'number' && isFinite(x)).sort((a, b) => a - b);
    if (!v.length) return 0;
    const m = Math.floor(v.length / 2);
    return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
  }

  /* Category medians, computed once per category. The atlas is static after
   * load, so a plain object cache needs no invalidation. */
  const catStatsCache = {};
  function categoryStats(category) {
    if (catStatsCache[category]) return catStatsCache[category];
    const peers = PF.data.foods.filter(f => f.category === category);
    const s = {
      count: peers.length,
      protein: median(peers.map(f => f._d.protein100)),
      purity: median(peers.map(f => f._d.purityPct)),
      kcal: median(peers.map(f => f._d.kcal100)),
      price: median(peers.map(f => f._d.ronPer100gProtein).filter(v => v))
    };
    catStatsCache[category] = s;
    return s;
  }

  /* Short forms of the confidence levels. The full sentence lives in
   * i18n and is kept for the tooltip; in the footer it wrapped to three
   * lines on a phone and cost more height than the buttons next to it. */
  const CONF_SHORT = {
    high: 'de pe etichetă',
    medium: 'valori tipice',
    low: 'estimare'
  };

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

  function bullets(list, variant) {
    if (!list || !list.length) return '';
    return (
      '<ul class="pf-bullets' + (variant ? ' pf-bullets--' + variant : '') + '">' +
      list.map(x => '<li><span>' + fmt.esc(x) + '</span></li>').join('') +
      '</ul>'
    );
  }

  /* A slim, loud strip for `dataConfidence: 'low'`. 78 of the 512 entries are
   * estimates rather than transcribed labels, and until now the only sign of
   * that was one line of grey text in the footer, in the same style whether
   * the numbers came off a package or out of a guess. */
  function lowConfidenceStrip(food) {
    if (food.dataConfidence !== 'low') return '';
    const src = (food.sources || []).join(' · ');
    return (
      '<div class="pf-lowconf">' +
      '<span class="pf-lowconf__mark">⚠️</span>' +
      '<span><b>Cifre estimate, nu citite de pe etichetă.</b> ' +
      'Valorile de mai jos sunt tipice pentru acest tip de produs, nu ale unui ' +
      'ambalaj anume. Bune ca să compari, nesigure ca să numeri exact.' +
      (src ? '<span class="pf-lowconf__src">Bazat pe: ' + fmt.esc(src) + '</span>' : '') +
      '</span></div>'
    );
  }

  /* ui.js hardcodes "un factor de 0,25" in its collagen note. That was true
   * when every gelatinous entry got the flat penalty, but compute.js now
   * blends the two protein pools through `collagenShare`, so a part-gelatin
   * product lands somewhere in between — b-jeleu-proteic sits at 0,699. The
   * quality bar directly beneath the sentence renders the real number, so the
   * two contradicted each other on the same screen. Rewrite the tail from
   * `d.quality`; ui.js belongs to another agent. Idempotent: once that note
   * becomes dynamic this substitutes the same value back in.
   *
   * Also names the collagen share, which is what explains an in-between
   * factor to someone reading "70%" under a collagen warning. */
  function qualityText(note, d) {
    const real = String(Math.round(d.quality * 1000) / 1000).replace('.', ',');
    let text = note.text.replace(
      /Scorul(?: din atlas)? e ajustat cu un factor de [0-9]+(?:[.,][0-9]+)?/,
      'Scorul din atlas e ajustat cu un factor de ' + real
    );
    if (d.collagenShare > 0 && d.collagenShare < 1) {
      text += ' Aici doar ~' + Math.round(d.collagenShare * 100) +
        '% din proteină e colagen, de aceea penalizarea e parțială.';
    }
    return text;
  }

  /* One "this product vs. its category" row. `betterIsHigher` drives the
   * colour; pass null when neither direction is a win. */
  function deltaRow(label, mine, med, unit, decimals, betterIsHigher) {
    if (!med || !isFinite(mine)) return '';
    const pct = ((mine - med) / med) * 100;
    const near = Math.abs(pct) < 5;
    const cls = near ? 'is-near' : (betterIsHigher === null ? 'is-flat'
      : ((betterIsHigher ? pct > 0 : pct < 0) ? 'is-good' : 'is-bad'));
    return (
      '<tr>' +
      '<th>' + fmt.esc(label) + '</th>' +
      '<td>' + fmt.num(mine, decimals) + (unit ? ' ' + unit : '') + '</td>' +
      '<td class="pf-delta ' + cls + '">' +
      (near ? '≈ ca media'
            : (pct > 0 ? '▲ +' : '▼ −') + Math.round(Math.abs(pct)) + '%') +
      '</td>' +
      '<td class="pf-nutri__pct">' + fmt.num(med, decimals) + '</td>' +
      '</tr>'
    );
  }

  /* =======================================================================
   * TAB 1 — OVERVIEW
   * ==================================================================== */
  function paneOverview(food) {
    const d = food._d;

    const left =
      block(
        t('sec.stats'),
        ui.statBlock(food, { size: 'lg', extended: true }) +
        '<div class="pf-rule pf-rule--tight"></div>' +
        '<div class="pf-row pf-row--between">' +
        '<span class="pf-eyebrow">Scor general</span>' +
        ui.orb(d.score, 'scor', 'var(--accent)') +
        '</div>'
      ) +
      block(t('sec.energy'), PF.charts.donut(food));

    const upgrade = PF.compute.findUpgrade(food, PF.data.foods);
    const qNote = ui.qualityNote(food);

    const qualityBlock = qNote
      ? '<section class="pf-block" style="border-color:' +
        (qNote.level === 'bad' ? 'color-mix(in srgb, var(--bad) 40%, transparent)'
                               : 'color-mix(in srgb, var(--warn) 34%, transparent)') + '">' +
        '<div class="pf-block__head" style="color:var(--' + qNote.level + ')">' +
        (qNote.level === 'bad' ? '⛔ ' : '⚠️ ') + fmt.esc(qNote.short) +
        '<span class="pf-badge">calitatea proteinei</span></div>' +
        '<div class="pf-block__body"><p>' + fmt.esc(qualityText(qNote, food._d)) + '</p>' +
        ui.statBar({
          label: 'Calitate',
          value: food._d.quality * 100,
          color: qNote.level === 'bad' ? 'var(--bad)' : 'var(--warn)',
          size: 'lg',
          display: String(Math.round(food._d.quality * 100)) + '%',
          tip: 'Factorul de calitate cu care sunt scalate barele de proteină și puritate.'
        }) +
        '</div></section>'
      : '';

    const right =
      qualityBlock +
      block(
        'Profil',
        '<div class="pf-radar-wrap">' + PF.charts.radar(food, { size: 300 }) + '</div>'
      ) +
      (food.sibiuNote
        ? block('Nota de Sibiu', '<p>' + fmt.esc(food.sibiuNote) + '</p>')
        : '') +
      (food.tips && food.tips.length ? block(t('sec.tips'), bullets(food.tips, 'tips')) : '') +
      (food.warnings && food.warnings.length
        ? block(t('sec.warnings'), bullets(food.warnings, 'warn'))
        : '') +
      (upgrade
        ? block(
            t('sec.upgrade'),
            '<button class="pf-similar__item" data-goto="' + fmt.esc(upgrade.id) + '">' +
            '<span class="pf-similar__emoji">' + (upgrade.emoji || '🍽️') + '</span>' +
            '<span class="pf-similar__txt">' +
            '<span class="pf-similar__name">' + fmt.esc(upgrade.nameRo || upgrade.name) + '</span>' +
            '<span class="pf-similar__p">' + fmt.num(upgrade._d.protein100, 1) + ' g / 100 g · ' +
            Math.round(upgrade._d.purityPct) + '%</span>' +
            '</span></button>' +
            '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-2)">' +
            'Mai multă proteină, mai pură, în cel mult același timp de preparare.</p>'
          )
        : '');

    const similar = PF.compute.findSimilar(food, PF.data.foods, 6);
    const similarHtml = similar.length
      ? block(
          t('sec.similar'),
          '<div class="pf-similar">' +
          similar
            .map(
              f =>
                '<button class="pf-similar__item" data-goto="' + fmt.esc(f.id) + '">' +
                '<span class="pf-similar__emoji">' + (f.emoji || '🍽️') + '</span>' +
                '<span class="pf-similar__txt">' +
                '<span class="pf-similar__name">' + fmt.esc(f.nameRo || f.name) + '</span>' +
                '<span class="pf-similar__p">' + fmt.num(f._d.protein100, 1) + ' g/100 g</span>' +
                '</span></button>'
            )
            .join('') +
          '</div>'
        )
      : '';

    return (
      lowConfidenceStrip(food) +
      '<div class="pf-dossier"><div>' + left + '</div><div>' + right + '</div></div>' +
      similarHtml
    );
  }

  /* =======================================================================
   * TAB 2 — NUTRITION
   * ==================================================================== */
  function nutriRow(label, value, unit, cls, colorVar, pctOfKcal) {
    return (
      '<tr class="' + (cls || '') + '">' +
      '<th>' + (colorVar ? '<span class="pf-nutri__swatch" style="--c:' + colorVar + '"></span>' : '') +
      fmt.esc(label) + '</th>' +
      '<td>' + fmt.esc(value) + (unit ? ' ' + unit : '') + '</td>' +
      '<td class="pf-nutri__pct">' + (pctOfKcal !== undefined ? Math.round(pctOfKcal) + '%' : '') + '</td>' +
      '</tr>'
    );
  }

  function paneNutrition(food) {
    const d = food._d;
    const per100 = food.per100g;
    const perServ = d.perServing;
    const useServing = servingMode === 'serving';
    const n = useServing ? perServ : per100;
    const basis = useServing
      ? (food.serving && food.serving.label) || d.servingGrams + ' ' + food.unit
      : '100 ' + food.unit;

    const e = d.energyShare;

    const table =
      '<table class="pf-nutri">' +
      nutriRow('Energie', Math.round(n.kcal), 'kcal', 'is-major', 'var(--macro-kcal)') +
      nutriRow(t('card.protein'), fmt.num(n.protein, 1), 'g', 'is-major', 'var(--macro-protein)', e.protein) +
      nutriRow(t('card.carbs'), fmt.num(n.carbs, 1), 'g', 'is-major', 'var(--macro-carbs)', e.carbs) +
      nutriRow('din care ' + t('card.sugars').toLowerCase(), fmt.num(n.sugars, 1), 'g', 'is-sub') +
      nutriRow(t('card.fat'), fmt.num(n.fat, 1), 'g', 'is-major', 'var(--macro-fat)', e.fat) +
      nutriRow('din care saturate', fmt.num(n.satFat, 1), 'g', 'is-sub') +
      nutriRow(t('card.fiber'), fmt.num(n.fiber, 1), 'g', '', 'var(--macro-fiber)', e.fiber) +
      nutriRow(t('card.salt'), fmt.num(n.salt, 2), 'g', 'is-divider') +
      '</table>';

    /* --- derived headline numbers --- */
    const derived =
      '<div class="pf-macros pf-macros--6" style="margin-top:var(--sp-3)">' +
      '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' +
      Math.round(d.purityPct) + '%</span><span class="pf-macro__k">din kcal</span></div>' +
      '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' +
      fmt.num(d.proteinPer100kcal, 1) + '</span><span class="pf-macro__k">g/100kcal</span></div>' +
      '<div class="pf-macro pf-macro--kcal"><span class="pf-macro__v">' +
      Math.round(d.kcal100) + '</span><span class="pf-macro__k">kcal/100' + food.unit + '</span></div>' +
      '<div class="pf-macro pf-macro--fat"><span class="pf-macro__v">' +
      Math.round(d.bars.leanness) + '</span><span class="pf-macro__k">slăbiciune</span></div>' +
      '<div class="pf-macro pf-macro--carbs"><span class="pf-macro__v">' +
      (d.ronPer100gProtein ? fmt.num(d.ronPer100gProtein, 1) : '—') +
      '</span><span class="pf-macro__k">lei/100g P</span></div>' +
      '<div class="pf-macro pf-macro--fiber"><span class="pf-macro__v">' +
      (d.proteinPerRon ? fmt.num(d.proteinPerRon, 1) : '—') +
      '</span><span class="pf-macro__k">g P / leu</span></div>' +
      '</div>';

    /* --- micronutrients --- */
    let micros = '';
    if (food.micros) {
      const M = {
        calciumMg: ['Calciu', 'mg', 1000],
        ironMg: ['Fier', 'mg', 14],
        zincMg: ['Zinc', 'mg', 10],
        b12Ug: ['Vitamina B12', 'µg', 2.5],
        vitDUg: ['Vitamina D', 'µg', 5],
        omega3Mg: ['Omega-3', 'mg', 250],
        potassiumMg: ['Potasiu', 'mg', 2000],
        cholesterolMg: ['Colesterol', 'mg', null]
      };
      const rows = Object.keys(M)
        .filter(k => food.micros[k] !== undefined && food.micros[k] !== null)
        .map(function (k) {
          const meta = M[k];
          const val = food.micros[k];
          const scaled = useServing ? (val * d.servingGrams) / 100 : val;
          const nrv = meta[2] ? Math.round((scaled / meta[2]) * 100) : null;
          return (
            '<tr><th>' + meta[0] + '</th><td>' + fmt.num(scaled, 1) + ' ' + meta[1] +
            '</td><td class="pf-nutri__pct">' + (nrv !== null ? nrv + '% VNR' : '') + '</td></tr>'
          );
        });
      if (rows.length) {
        micros = block(t('sec.micros'), '<table class="pf-nutri">' + rows.join('') + '</table>');
      }
    }

    /* --- data quality note --- */
    let quality = '';
    if (d.flags.indexOf('energy-mismatch') !== -1) {
      quality =
        '<p class="pf-muted" style="font-size:var(--fs-2xs)">⚠️ Caloriile declarate diferă cu ' +
        Math.abs(Math.round(d.energyDelta * 100)) + '% față de calculul Atwater ' +
        '(proteină×4 + carbo×4 + grăsimi×9 + fibre×2 = ' +
        Math.round(PF.compute.atwaterKcal(per100)) + ' kcal). ' +
        'Poate fi rotunjire de etichetă, polioli, sau o eroare de transcriere.</p>';
    }

    /* --- how this compares with the rest of its category ---------------- */
    const cs = categoryStats(food.category);
    const catName = PF.i18n.catName(food.category);
    const compare = block(
      'Față de restul categoriei',
      '<table class="pf-nutri pf-nutri--cmp">' +
      '<thead><tr><th>' + fmt.esc(catName) + '</th><th>acesta</th>' +
      '<th>diferența</th><th class="pf-nutri__pct">mediana</th></tr></thead>' +
      deltaRow(t('card.protein') + ' / 100 ' + food.unit, d.protein100, cs.protein, 'g', 1, true) +
      deltaRow('Proteină din kcal', d.purityPct, cs.purity, '%', 0, true) +
      deltaRow('Calorii / 100 ' + food.unit, d.kcal100, cs.kcal, '', 0, false) +
      (d.ronPer100gProtein
        ? deltaRow('Lei / 100 g proteină', d.ronPer100gProtein, cs.price, '', 1, false)
        : '') +
      '</table>' +
      '<p class="pf-muted" style="font-size:var(--fs-2xs);line-height:1.5">' +
      'Comparat cu mediana celor ' + cs.count + ' produse din categorie. Mediana, nu ' +
      'media: câteva izolate proteice ar trage media în sus și ar face orice ' +
      'aliment obișnuit să pară slab.</p>',
      cs.count + ' produse'
    );

    /* The scatter has a 620px design floor (below that its axis labels shrink
     * to 4px), and a dossier column is only ~470px wide even at 1440. Given
     * its own full-width row it renders 1:1 instead of always needing a swipe. */
    const mapBlock = block(
      'Unde stă pe hartă · ' + catName,
      '<p class="pf-muted" style="font-size:var(--fs-2xs)">Poziția acestui produs față de ' +
      'restul categoriei, pe axa proteină/calorii.</p>' +
      PF.charts.scatter(
        PF.data.foods.filter(f => f.category === food.category),
        { width: 620, height: 340 }
      )
    );

    return (
      lowConfidenceStrip(food) +
      '<div class="pf-servingbar">' +
      '<span class="pf-servingbar__label">Valori pentru</span>' +
      '<div class="pf-seg" data-serving-switch>' +
      '<button class="pf-seg__btn' + (!useServing ? ' is-active' : '') +
      '" data-serving="per100">100 ' + food.unit + '</button>' +
      '<button class="pf-seg__btn' + (useServing ? ' is-active' : '') +
      '" data-serving="serving">' +
      fmt.esc(fmt.truncate((food.serving && food.serving.label) || 'porție', 26)) + '</button>' +
      '</div>' +
      '<span class="pf-servingbar__out">' + fmt.num(n.protein, 1) + ' g proteină</span>' +
      '</div>' +
      '<div class="pf-dossier">' +
      '<div>' + block('Tabel nutrițional · ' + basis, table + derived + quality) + micros + '</div>' +
      '<div>' + block(t('sec.energy'), PF.charts.donut(food)) + compare + '</div>' +
      '</div>' +
      mapBlock
    );
  }

  /* =======================================================================
   * TAB 3 — COOKING
   * ==================================================================== */
  const METHOD_LABEL = {
    none: 'Fără preparare', reheat: 'Doar încălzit', boil: 'Fiert', pan: 'La tigaie',
    grill: 'La grătar', oven: 'La cuptor', airfryer: 'Air fryer', slow: 'Gătit lent',
    pressure: 'Sub presiune', blend: 'La blender', assemble: 'Doar asamblat',
    soak: 'Înmuiat', fry: 'Prăjit', steam: 'La abur'
  };

  function paneCooking(food) {
    const c = food.cooking || {};
    const steps = c.steps || [];

    const timeCard =
      '<div class="pf-macros">' +
      '<div class="pf-macro pf-macro--kcal"><span class="pf-macro__v">' +
      fmt.minutes(food.timeMin, PF.i18n.lang()) + '</span><span class="pf-macro__k">total</span></div>' +
      '<div class="pf-macro pf-macro--carbs"><span class="pf-macro__v">' +
      fmt.minutes(food.activeTimeMin, PF.i18n.lang()) + '</span><span class="pf-macro__k">activ</span></div>' +
      '<div class="pf-macro pf-macro--fat"><span class="pf-macro__v">' + food.effort +
      '/5</span><span class="pf-macro__k">efort</span></div>' +
      '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' +
      fmt.esc(METHOD_LABEL[c.method] || c.method || '—') +
      '</span><span class="pf-macro__k">metodă</span></div>' +
      '</div>';

    const stepsHtml = steps.length
      ? '<ol class="pf-steps">' + steps.map(s => '<li><span>' + fmt.esc(s) + '</span></li>').join('') + '</ol>'
      : '<p class="pf-muted">Nu necesită nicio preparare. Deschizi și mănânci.</p>';

    const equip =
      c.equipment && c.equipment.length && c.equipment[0] !== '—'
        ? block(t('sec.equipment'),
            '<div class="pf-card__tags">' +
            c.equipment.map(e => '<span class="pf-tag">' + fmt.esc(e) + '</span>').join('') +
            '</div>')
        : '';

    /* Meals that actually use this product — the bridge from ingredient to dinner. */
    const meals = (PF.recipes && PF.recipes.forFood) ? PF.recipes.forFood(food.id) : [];
    const mealsBlock = meals.length
      ? block('Ce gătești din el · ' + meals.length + (meals.length === 1 ? ' masă' : ' mese'),
          '<div class="pf-recipe-links">' +
          meals.map(function (r) {
            const m = (window.PF_METHODS || {})[r.method] || { ro: r.method, emoji: '🍽️' };
            return '<button class="pf-recipe-link" data-recipe-open="' + fmt.esc(r.id) + '">' +
              '<span style="font-size:18px">' + r.emoji + '</span>' +
              '<span class="pf-recipe-link__name">' + fmt.esc(r.name) +
              '<small>' + m.emoji + ' ' + fmt.esc(m.ro) + ' · ' +
              fmt.minutes(r.timeMin, 'ro') + ' · ' + r.servings + ' porții</small></span>' +
              '<span class="pf-recipe-link__p">' + Math.round(r._r.perServing.protein) + ' g</span>' +
              '</button>';
          }).join('') + '</div>')
      : '';

    return (
      '<div class="pf-dossier">' +
      '<div>' +
      mealsBlock +
      block('Timp și efort', timeCard + (c.yieldNote ? '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-2)">📏 ' + fmt.esc(c.yieldNote) + '</p>' : '')) +
      block(t('sec.steps'), stepsHtml) +
      equip +
      '</div>' +
      '<div>' +
      (food.pairings && food.pairings.length
        ? block(t('sec.pairings'),
            '<div class="pf-card__tags">' +
            food.pairings.map(p => '<span class="pf-tag">' + fmt.esc(p) + '</span>').join('') +
            '</div>')
        : '') +
      block(t('sec.storage'),
        '<p>' + fmt.esc(food.storage || '—') + '</p>' +
        (food.shelfLife ? '<p class="pf-muted" style="font-size:var(--fs-2xs)">⏳ ' + fmt.esc(food.shelfLife) + '</p>' : '')) +
      (food.tips && food.tips.length ? block(t('sec.tips'), bullets(food.tips, 'tips')) : '') +
      '</div>' +
      '</div>'
    );
  }

  /* =======================================================================
   * TAB 4 — TASTE
   * ==================================================================== */
  function tasteAxis(key, value, label) {
    return (
      '<div class="pf-taste__axis" data-axis="' + key + '">' +
      '<span>' + fmt.esc(label) + '</span>' +
      ui.pips(value, 5, 'var(--c)') +
      '</div>'
    );
  }

  function paneTaste(food) {
    const ta = food.taste || {};
    const axes =
      '<div class="pf-taste">' +
      tasteAxis('intensity', ta.intensity, 'Intensitate') +
      tasteAxis('sweetness', ta.sweetness, 'Dulce') +
      tasteAxis('saltiness', ta.saltiness, 'Sărat') +
      tasteAxis('umami', ta.umami, 'Umami') +
      tasteAxis('richness', ta.richness, 'Bogăție / grăsime') +
      '</div>';

    return (
      '<div class="pf-dossier">' +
      '<div>' +
      block(t('sec.tasteProfile'),
        '<p style="font-size:var(--fs-md);color:var(--text-1);line-height:1.5">' +
        fmt.esc(ta.profile || '—') + '</p>' +
        '<div class="pf-rule pf-rule--tight"></div>' + axes) +
      block('Textură', '<p>' + fmt.esc(ta.texture || '—') + '</p>') +
      (ta.notes ? block('Verdict onest', '<p>' + fmt.esc(ta.notes) + '</p>') : '') +
      '</div>' +
      '<div>' +
      block('Scorul de gust',
        '<div class="pf-row" style="gap:var(--sp-4)">' +
        ui.orb(food._d.bars.taste, 'gust', 'var(--stat-taste)', 'lg') +
        '<p class="pf-muted" style="font-size:var(--fs-2xs)">Cât de plăcut e de mâncat ' +
        '<em>simplu</em>, fără sosuri care să-l salveze. Un piept de pui fiert are un ' +
        'scor mic și asta e în regulă — îl mănânci pentru proteină, nu pentru plăcere.</p>' +
        '</div>' +
        '<div class="pf-rule pf-rule--tight"></div>' +
        ui.statBar({ label: t('stat.satiety'), value: food._d.bars.satiety, color: 'var(--stat-satiety)', size: 'lg' }) +
        ui.statBar({ label: t('stat.versatility'), value: food._d.bars.versatility, color: 'var(--stat-versatility)', size: 'lg' })) +
      (food.pairings && food.pairings.length
        ? block(t('sec.pairings'), bullets(food.pairings, 'pair'))
        : '') +
      '</div>' +
      '</div>'
    );
  }

  /* =======================================================================
   * TAB 5 — WHERE TO BUY
   * ==================================================================== */
  function paneBuy(food) {
    const d = food._d;
    const stores = food.stores || [];

    /* Cheapest protein first. The question this table answers is "where do I
     * buy this", and the answer is an ordering — reading it off an arbitrary
     * authoring order meant comparing five numbers by eye every time. */
    const priced = stores
      .map(s => ({ s: s, p: PF.compute.priceForStore(s, food.per100g) }))
      .sort(function (a, b) {
        const av = a.p ? a.p.ronPer100gProtein : Infinity;
        const bv = b.p ? b.p.ronPer100gProtein : Infinity;
        return av - bv;
      });
    const cheapest = priced.length && priced[0].p ? priced[0].p.ronPer100gProtein : null;

    const rows = priced
      .map(function (row, i) {
        const s = row.s;
        const p = row.p;
        const isBest = i === 0 && !!p;
        /* What the shopper actually loses by picking this shelf instead. */
        const over = p && cheapest && !isBest
          ? Math.round(((p.ronPer100gProtein - cheapest) / cheapest) * 100) : 0;
        return (
          '<tr>' +
          '<td><b style="color:' + ui.storeColor(s.name) + '">' + fmt.esc(s.name) + '</b>' +
          (isBest ? ' <span class="pf-badge pf-badge--accent">cel mai bun</span>' : '') +
          (s.aisle ? '<span class="pf-stores-table__note">📍 ' + fmt.esc(s.aisle) + '</span>' : '') +
          (s.note ? '<span class="pf-stores-table__note">' + fmt.esc(s.note) + '</span>' : '') +
          '</td>' +
          '<td>' + ui.availability(s.availability) + '</td>' +
          '<td class="num">' + (s.priceRon
            ? fmt.ronApprox(s.priceRon, { verified: s.verified === true }) : '—') +
          (s.packLabel ? '<span class="pf-stores-table__note">' + fmt.esc(s.packLabel) + '</span>' : '') +
          '</td>' +
          '<td class="num pf-col--kg">' + (p ? (p.verified ? '' : '≈') + fmt.num(p.pricePerKg, 0) + ' lei/kg' : '—') + '</td>' +
          '<td class="num">' + (p ? (p.verified ? '' : '≈') + fmt.num(p.ronPer100gProtein, 1) : '—') +
          (over >= 3 ? '<span class="pf-stores-table__note">+' + over + '%</span>' : '') +
          '</td>' +
          '</tr>'
        );
      })
      .join('');

    const table =
      '<table class="pf-stores-table">' +
      '<thead><tr><th>Magazin</th><th>Disp.</th><th class="num">Preț</th>' +
      '<th class="num pf-col--kg">lei/kg</th><th class="num">lei/100g P</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table>' +
      '<p class="pf-muted" style="font-size:var(--fs-2xs)">Sortat după lei / 100 g ' +
      'proteină — rândul de sus e cea mai ieftină proteină, nu cel mai mic preț pe raft.</p>';

    /* Store-level context pulled from the registry. */
    const registry = window.PF_STORES || [];
    const seenStore = {};
    const notes = stores
      .map(s => registry.filter(r => r.name === s.name)[0])
      .filter(function (r) {
        /* A product can list the same chain twice (two pack formats); the
         * shop description only needs saying once. */
        if (!r || seenStore[r.name]) return false;
        seenStore[r.name] = true;
        return true;
      })
      .slice(0, 3)
      .map(
        r =>
          '<div style="margin-bottom:var(--sp-3)">' +
          '<b style="color:' + r.color + '">' + fmt.esc(r.name) + '</b>' +
          '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:2px">' +
          fmt.esc(r.sibiuNote) + '</p></div>'
      )
      .join('');

    return (
      '<div class="pf-dossier">' +
      '<div>' +
      block(t('sec.stores'), table +
        (d.priceVerified ? '' :
          '<p class="pf-muted" style="font-size:var(--fs-2xs);line-height:1.5;margin-top:var(--sp-2)">' +
          '⚠️ <b>Prețurile sunt estimări, nu prețuri de raft.</b> Niciunul nu a fost ' +
          'citit dintr-un magazin și nu există un API public de prețuri pentru retailul ' +
          'alimentar din România. Marja folosită aici este de ±' +
          Math.round((d.priceBand || 0.2) * 100) + '%. Folosește-le ca să compari produse ' +
          'între ele, nu ca să-ți faci bugetul.</p>')) +
      (food.sibiuNote ? block('Nota de Sibiu', '<p>' + fmt.esc(food.sibiuNote) + '</p>') : '') +
      '</div>' +
      '<div>' +
      block('Cost real',
        '<div class="pf-macros">' +
        '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' +
        (d.ronPer100gProtein ? (d.priceVerified ? '' : '≈') + fmt.num(d.ronPer100gProtein, 1) : '—') +
        '</span><span class="pf-macro__k">lei/100g P</span></div>' +
        '<div class="pf-macro pf-macro--carbs"><span class="pf-macro__v">' +
        (d.proteinPerRon ? fmt.num(d.proteinPerRon, 1) : '—') +
        '</span><span class="pf-macro__k">g P / leu</span></div>' +
        '<div class="pf-macro pf-macro--kcal"><span class="pf-macro__v">' +
        (d.costPerServing ? (d.priceVerified ? '' : '≈') + fmt.num(d.costPerServing, 2) : '—') +
        '</span><span class="pf-macro__k">lei/porție</span></div>' +
        '<div class="pf-macro pf-macro--fat"><span class="pf-macro__v">' +
        (d.pricePerKg ? (d.priceVerified ? '' : '≈') + Math.round(d.pricePerKg) : '—') +
        '</span><span class="pf-macro__k">lei/kg</span></div>' +
        '</div>' +
        '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-2)">' +
        'Interval realist: ' + fmt.ronRange(d.ronPer100gProtein, d.ronPer100gProteinLo,
          d.ronPer100gProteinHi, { verified: d.priceVerified }) + ' la 100 g de proteină.</p>' +
        ui.statBar({ label: t('stat.value'), value: d.bars.value, color: 'var(--stat-value)', size: 'lg', tip: t('stat.value.tip') })) +
      (notes ? block('Despre magazine', notes) : '') +
      '</div>' +
      '</div>'
    );
  }

  /* =======================================================================
   * TAB 6 — TIMING
   * ==================================================================== */
  function paneTiming(food) {
    const nowSlot = PF.i18n.slotForHour(new Date().getHours());
    const timing = food.timing || {};

    const ranked = PF.i18n.SLOTS.slice()
      .sort((a, b) => (timing[b.key] || 0) - (timing[a.key] || 0));

    const list = ranked
      .map(function (s) {
        const v = timing[s.key] || 0;
        return (
          '<div class="pf-row" style="gap:var(--sp-3);padding:var(--sp-2) 0;border-bottom:1px solid var(--border)">' +
          '<span style="font-size:18px">' + s.emoji + '</span>' +
          '<span class="pf-grow">' + fmt.esc(PF.i18n.slotName(s.key)) +
          (s.key === nowSlot ? ' <span class="pf-badge pf-badge--accent">acum</span>' : '') +
          '</span>' +
          ui.pips(v, 5, v >= 4 ? 'var(--ok)' : v >= 2 ? 'var(--warn)' : 'var(--text-4)') +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="pf-dossier">' +
      '<div>' +
      block('Când merită mâncat', ui.timingGrid(food, nowSlot) +
        (food.timingNote
          ? '<p style="margin-top:var(--sp-3)">' + fmt.esc(food.timingNote) + '</p>'
          : '')) +
      block('Ordinea momentelor', list) +
      '</div>' +
      '<div>' +
      block('De ce contează',
        '<p class="pf-muted" style="font-size:var(--fs-sm);line-height:1.6">' +
        'Distribuția proteinei pe parcursul zilei contează mai mult decât ora exactă: ' +
        'aproximativ 0,4 g/kg la fiecare masă, în 3–5 mese, e mai eficient decât o ' +
        'singură masă uriașă. Proteinele cu digestie lentă (cazeină, brânză de vaci, ' +
        'skyr, carne întreagă) sunt mai potrivite seara; cele rapide (zer, albuș, ' +
        'lactate lichide) după antrenament.</p>') +
      block('Sațietate',
        ui.statBar({ label: t('stat.satiety'), value: food._d.bars.satiety, color: 'var(--stat-satiety)', size: 'lg' }) +
        ui.statBar({ label: t('stat.speed'), value: food._d.bars.speed, color: 'var(--stat-speed)', size: 'lg', display: fmt.minutes(food.timeMin, PF.i18n.lang()) })) +
      '</div>' +
      '</div>'
    );
  }

  /* =======================================================================
   * SHELL
   * ==================================================================== */
  const TABS = [
    { key: 'overview', label: 'tab.overview', render: paneOverview },
    { key: 'nutrition', label: 'tab.nutrition', render: paneNutrition },
    { key: 'cooking', label: 'tab.cooking', render: paneCooking },
    { key: 'taste', label: 'tab.taste', render: paneTaste },
    { key: 'buy', label: 'tab.buy', render: paneBuy },
    { key: 'timing', label: 'tab.timing', render: paneTiming }
  ];

  let activeTab = 'overview';

  function confidenceLabel(c) {
    return t('misc.confidence.' + c, c);
  }

  const tabId = k => 'pf-tab-' + k;
  const paneId = k => 'pf-pane-' + k;

  function renderShell(food) {
    const d = food._d;
    const idx = currentList.indexOf(food);

    return (
      '<div class="pf-modal__head" data-cat="' + fmt.esc(food.category) + '">' +
      '<button class="pf-modal__close" data-act="close" aria-label="' + t('misc.close') + '">✕</button>' +
      '<span class="pf-modal__icon">' + (food.emoji || '🍽️') + '</span>' +
      '<div class="pf-modal__titles">' +
      '<h2 class="pf-modal__title" id="pf-modal-title">' + fmt.esc(food.nameRo || food.name) + '</h2>' +
      '<div class="pf-modal__subtitle">' +
      (food.brand && food.brand !== 'generic' ? '<b>' + fmt.esc(food.brand) + '</b> · ' : '') +
      fmt.esc(food.name) + ' · ' + fmt.esc(PF.i18n.catName(food.category)) +
      '</div>' +
      '<div class="pf-modal__badges">' +
      '<span class="pf-badge pf-badge--accent">' + fmt.num(d.protein100, 1) + ' g proteină / 100 ' + food.unit + '</span>' +
      '<span class="pf-badge">' + Math.round(d.kcal100) + ' kcal</span>' +
      '<span class="pf-badge">' + Math.round(d.purityPct) + '% din calorii</span>' +
      (d.ronPer100gProtein ? '<span class="pf-badge">' +
        (d.priceVerified ? '' : '≈ ') + fmt.num(d.ronPer100gProtein, 1) +
        ' lei / 100 g proteină</span>' : '') +
      '<span class="pf-badge">' + fmt.minutes(food.timeMin, PF.i18n.lang()) + '</span>' +
      '</div>' +
      '</div>' +
      '<div class="pf-modal__headright">' +
      ui.tier(d.tier, { size: 'lg', tip: PF.card.tierTip(food) }) +
      '</div>' +
      '</div>' +

      /* The six labels never fit a phone, so the strip scrolls. The wrapper
       * exists purely to hang the edge fades on something that does NOT
       * scroll with the content. */
      '<div class="pf-modal__tabsbar" data-fade="none">' +
      '<nav class="pf-modal__tabs" role="tablist" aria-label="Secțiunile dosarului">' +
      TABS.map(function (tb) {
        const on = tb.key === activeTab;
        return '<button class="pf-modal__tab' + (on ? ' is-active' : '') +
          '" id="' + tabId(tb.key) + '" data-tab="' + tb.key + '" role="tab"' +
          ' aria-selected="' + (on ? 'true' : 'false') + '"' +
          ' aria-controls="' + paneId(tb.key) + '"' +
          /* Roving tabindex: Tab reaches the strip once, arrows move inside. */
          ' tabindex="' + (on ? '0' : '-1') + '">' + t(tb.label) + '</button>';
      }).join('') +
      '</nav>' +
      '</div>' +

      '<div class="pf-modal__body" id="pf-modal-body">' +
      TABS.map(function (tb) {
        const on = tb.key === activeTab;
        return '<div class="pf-modal__pane' + (on ? ' is-active' : '') +
          '" id="' + paneId(tb.key) + '" data-pane="' + tb.key + '" role="tabpanel"' +
          ' aria-labelledby="' + tabId(tb.key) + '" tabindex="0"' +
          (on ? '' : ' hidden') + '>' +
          (on ? tb.render(food) : '') +
          '</div>';
      }).join('') +
      '</div>' +

      '<div class="pf-modal__foot">' +
      '<span class="pf-confidence' + (food.dataConfidence === 'low' ? ' pf-confidence--loud' : '') +
      '" data-c="' + fmt.esc(food.dataConfidence) + '" ' +
      'data-tip="' + fmt.esc(t('misc.confidence') + ': ' + confidenceLabel(food.dataConfidence) +
        ((food.sources || []).length ? ' — ' + (food.sources || []).join(' · ') : '')) + '">' +
      (food.dataConfidence === 'low' ? '⚠️ ' : '◆ ') +
      'date: ' + fmt.esc(CONF_SHORT[food.dataConfidence] || food.dataConfidence) + '</span>' +
      '<span class="pf-spacer"></span>' +
      '<div class="pf-modal__nav">' +
      '<button class="pf-btn pf-btn--sm" data-act="prev" aria-label="' + t('misc.prev') + '"' +
      (idx <= 0 ? ' disabled' : '') + '>‹<span class="pf-modal__lbl"> ' + t('misc.prev') + '</span></button>' +
      '<button class="pf-btn pf-btn--sm" data-act="next" aria-label="' + t('misc.next') + '"' +
      (idx < 0 || idx >= currentList.length - 1 ? ' disabled' : '') +
      '><span class="pf-modal__lbl">' + t('misc.next') + ' </span>›</button>' +
      '</div>' +
      '<button class="pf-btn pf-btn--sm" data-act="copy" aria-label="Copiază datele" ' +
      'data-tip="Copiază fișa în clipboard, ca text">⧉<span class="pf-modal__lbl"> Copiază</span></button>' +
      '<button class="pf-btn pf-btn--sm pf-btn--primary" data-act="add">+ ' + t('card.add') + '</button>' +
      '</div>'
    );
  }

  /* =======================================================================
   * BEHAVIOUR
   * ==================================================================== */
  function ensureDialog() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.className = 'pf-modal';
    dlg.setAttribute('aria-labelledby', 'pf-modal-title');
    document.body.appendChild(dlg);

    dlg.addEventListener('click', onClick);
    dlg.addEventListener('keydown', onKeydown);
    /* `close` fires however it was dismissed — Escape, the ✕, or the
     * backdrop — whereas `cancel` only covers Escape, which left the tab
     * selection inconsistent between the three exits. */
    dlg.addEventListener('close', function () {
      activeTab = 'overview';
      unlockPage();
    });
    /* Click on the backdrop closes. */
    dlg.addEventListener('mousedown', function (ev) {
      if (ev.target === dlg) dlg.close();
    });
    return dlg;
  }

  /* =======================================================================
   * PAGE SCROLL LOCK
   * `showModal()` makes the page inert but does not stop it scrolling, so a
   * wheel or a swipe over the backdrop moved the grid behind the dossier and
   * lost the reader's place. The rail already parks `overflow` on <body>, so
   * this uses <html> instead of fighting it for the same inline style.
   * ==================================================================== */
  function lockPage() {
    document.documentElement.classList.add('pf-scroll-locked');
  }

  function unlockPage() {
    document.documentElement.classList.remove('pf-scroll-locked');
  }

  function paint() {
    dlg.innerHTML = renderShell(currentFood);
    const nav = dlg.querySelector('.pf-modal__tabs');
    if (nav) nav.addEventListener('scroll', updateTabFades, { passive: true });
    updateTabFades();
  }

  /* Tell the reader there are tabs past the edge. Six labels need ~490px and
   * a 360px phone gives the strip 328px, so two of them sat off-screen with
   * nothing to suggest they existed. */
  function updateTabFades() {
    const nav = dlg && dlg.querySelector('.pf-modal__tabs');
    const bar = dlg && dlg.querySelector('.pf-modal__tabsbar');
    if (!nav || !bar) return;
    const max = nav.scrollWidth - nav.clientWidth;
    if (max <= 2) return bar.setAttribute('data-fade', 'none');
    const left = nav.scrollLeft > 2;
    const right = nav.scrollLeft < max - 2;
    bar.setAttribute('data-fade', left && right ? 'both' : left ? 'left' : 'right');
  }

  function switchTab(key, focusTab) {
    activeTab = key;
    const body = dlg.querySelector('#pf-modal-body');
    dlg.querySelectorAll('.pf-modal__tab').forEach(function (b) {
      const on = b.getAttribute('data-tab') === key;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      if (on) {
        /* Keeps the selected tab reachable on the scrolling strip. */
        if (b.scrollIntoView) b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        if (focusTab) b.focus();
      }
    });
    dlg.querySelectorAll('.pf-modal__pane').forEach(function (p) {
      const on = p.getAttribute('data-pane') === key;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
      if (on && !p.innerHTML.trim()) {
        const tab = TABS.filter(x => x.key === key)[0];
        p.innerHTML = tab.render(currentFood);
      }
    });
    if (body) body.scrollTop = 0;
    updateTabFades();
  }

  /* =======================================================================
   * KEYBOARD — the WAI-ARIA tabs pattern
   * Arrows move between tabs (wrapping), Home/End jump to the ends. The
   * events are stopped here because app.js binds the same arrows on
   * `document` to page through products, which used to hijack every press
   * and blow away the focused tab.
   * ==================================================================== */
  const ARROW_STEP = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 };

  function onKeydown(ev) {
    const tabBtn = ev.target.closest && ev.target.closest('.pf-modal__tab');
    if (!tabBtn) return;
    const keys = TABS.map(x => x.key);
    const i = keys.indexOf(tabBtn.getAttribute('data-tab'));
    if (i < 0) return;

    let next = -1;
    if (ARROW_STEP[ev.key] !== undefined) {
      next = (i + ARROW_STEP[ev.key] + keys.length) % keys.length;
    } else if (ev.key === 'Home') {
      next = 0;
    } else if (ev.key === 'End') {
      next = keys.length - 1;
    } else {
      return;
    }

    ev.preventDefault();
    ev.stopPropagation();
    switchTab(keys[next], true);
  }

  function onClick(ev) {
    const tabBtn = ev.target.closest('[data-tab]');
    if (tabBtn) {
      switchTab(tabBtn.getAttribute('data-tab'));
      return;
    }

    const servingBtn = ev.target.closest('[data-serving]');
    if (servingBtn) {
      servingMode = servingBtn.getAttribute('data-serving');
      const pane = dlg.querySelector('[data-pane="nutrition"]');
      if (pane) pane.innerHTML = paneNutrition(currentFood);
      return;
    }

    const ro = ev.target.closest('[data-recipe-open]');
    if (ro) {
      dlg.close();
      PF.recipes.open(ro.getAttribute('data-recipe-open'));
      return;
    }

    const goto = ev.target.closest('[data-goto]');
    if (goto) {
      const f = PF.data.byId[goto.getAttribute('data-goto')];
      if (f) open(f, currentList);
      return;
    }

    const act = ev.target.closest('[data-act]');
    if (!act) return;
    const a = act.getAttribute('data-act');

    if (a === 'close') dlg.close();
    else if (a === 'add') PF.app.addToTray(currentFood.id);
    else if (a === 'copy') copyData();
    else if (a === 'prev' || a === 'next') {
      const i = currentList.indexOf(currentFood);
      const nx = a === 'prev' ? i - 1 : i + 1;
      if (currentList[nx]) open(currentList[nx], currentList);
    }
  }

  /* What someone actually pastes into a shopping list or a chat: name, the
   * numbers that decide, where it is cheapest, and — because half the atlas
   * is estimated — how much to trust it. */
  function copyText(f) {
    const d = f._d;
    const branded = f.brand && f.brand !== 'generic' ? ' — ' + f.brand : '';
    const lines = [
      (f.nameRo || f.name) + branded,
      'Rang ' + d.tier + ' · ' + Math.round(d.purityPct) + '% din calorii din proteină',
      'La 100 ' + f.unit + ': ' + fmt.num(d.protein100, 1) + ' g proteină, ' +
        fmt.num(d.carbs100, 1) + ' g carbohidrați, ' + fmt.num(d.fat100, 1) + ' g grăsimi, ' +
        Math.round(d.kcal100) + ' kcal',
      'Porție: ' + ((f.serving && f.serving.label) || d.servingGrams + ' ' + f.unit) +
        ' → ' + fmt.num(d.perServing.protein, 1) + ' g proteină, ' +
        Math.round(d.perServing.kcal) + ' kcal'
    ];

    if (d.qualityReason === 'collagen') {
      lines.push('ATENȚIE: proteina e colagen — incompletă, nu o socoti la aportul zilnic.');
    } else if (d.quality < 1) {
      lines.push('Sursă vegetală incompletă — combin-o cu o cereală sau o leguminoasă.');
    }

    lines.push(
      d.bestPrice
        ? 'Preț (ESTIMARE, nu preț de raft): ' +
          fmt.ronApprox(d.bestPrice.packPrice, { verified: d.priceVerified }) +
          ' la ' + d.bestPrice.name + ' → ' +
          fmt.ronRange(d.ronPer100gProtein, d.ronPer100gProteinLo,
                       d.ronPer100gProteinHi, { verified: d.priceVerified }) +
          ' / 100 g proteină'
        : 'Preț: necunoscut',
      'Timp: ' + fmt.minutes(f.timeMin, 'ro') + ' · efort ' + f.effort + '/5',
      /* Cheapest shelf first, same order as the "Unde cumperi" tab. */
      'Găsești la: ' + (d.prices.length
        ? d.prices.map(p => p.name).concat(
            (f.stores || []).filter(s => !d.prices.some(p => p.name === s.name)).map(s => s.name)
          ).join(', ')
        : (f.stores || []).map(s => s.name).join(', ')),
      'Încredere în date: ' + confidenceLabel(f.dataConfidence) +
        ((f.sources || []).length ? ' (' + (f.sources || []).join('; ') + ')' : ''),
      '— Atlasul Proteinelor Sibiu'
    );
    return lines.join('\n');
  }

  function copyData() {
    const text = copyText(currentFood);
    const okToast = () => PF.app.toast(t('misc.copied'), 'ok');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(okToast, function () {
        if (!legacyCopy(text)) PF.app.toast('Nu am putut copia', 'bad');
        else okToast();
      });
    } else if (legacyCopy(text)) {
      okToast();
    } else {
      PF.app.toast('Clipboard indisponibil', 'warn');
    }
  }

  /* The atlas is meant to run from a file:// path with no server, where the
   * async Clipboard API is often refused outright. execCommand still works
   * there, so the button does its job instead of apologising. */
  function legacyCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
      /* Inside a modal <dialog> only descendants can hold selection. */
      (dlg && dlg.open ? dlg : document.body).appendChild(ta);
      ta.select();
      const done = document.execCommand('copy');
      ta.remove();
      return done;
    } catch (e) {
      return false;
    }
  }

  function open(food, list) {
    ensureDialog();
    /* Remember which control had focus so a repaint (prev/next, a jump to a
     * similar item) can hand it back — otherwise focus fell to <body> and the
     * next keystroke went nowhere. */
    const wasIn = dlg.open && dlg.contains(document.activeElement)
      ? document.activeElement.getAttribute('data-act') : null;

    currentFood = food;
    currentList = list || PF.data.foods;
    servingMode = 'per100';
    paint();
    if (!dlg.open) {
      dlg.showModal();
      lockPage();
      /* showModal() lands on the ✕, which announces "Închide" before the
       * title. The selected tab is both a better first stop and the place
       * the arrow keys work from. */
      const tab = dlg.querySelector('.pf-modal__tab.is-active');
      if (tab) tab.focus();
    } else if (wasIn) {
      const again = dlg.querySelector('[data-act="' + wasIn + '"]:not([disabled])');
      (again || dlg.querySelector('.pf-modal__tab.is-active') || dlg).focus();
    }
    const body = dlg.querySelector('#pf-modal-body');
    if (body) body.scrollTop = 0;
    try {
      PF.store.set('lastViewed', food.id);
    } catch (e) {
      /* ignore */
    }
  }

  function close() {
    if (dlg && dlg.open) dlg.close();
  }

  function isOpen() {
    return !!(dlg && dlg.open);
  }

  PF.modal = {
    open: open,
    close: close,
    isOpen: isOpen,
    TABS: TABS
  };
})();
