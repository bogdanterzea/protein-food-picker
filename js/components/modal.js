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
        '<div class="pf-block__body"><p>' + fmt.esc(qNote.text) + '</p>' +
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

    return (
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
      '<div>' + block(t('sec.energy'), PF.charts.donut(food)) +
      block('Unde stă pe hartă',
        '<p class="pf-muted" style="font-size:var(--fs-2xs)">Poziția acestui produs față de ' +
        'restul atlasului, pe axa proteină/calorii.</p>' +
        PF.charts.scatter(
          PF.data.foods.filter(f => f.category === food.category),
          { width: 620, height: 340 }
        )
      ) + '</div>' +
      '</div>'
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

    const rows = stores
      .map(function (s) {
        const p = PF.compute.priceForStore(s, food.per100g);
        const isBest = d.bestPrice && d.bestPrice.name === s.name &&
          p && Math.abs(p.ronPer100gProtein - d.bestPrice.ronPer100gProtein) < 0.001;
        return (
          '<tr>' +
          '<td><b style="color:' + ui.storeColor(s.name) + '">' + fmt.esc(s.name) + '</b>' +
          (isBest ? ' <span class="pf-badge pf-badge--accent">cel mai bun</span>' : '') +
          (s.aisle ? '<span class="pf-stores-table__note">📍 ' + fmt.esc(s.aisle) + '</span>' : '') +
          (s.note ? '<span class="pf-stores-table__note">' + fmt.esc(s.note) + '</span>' : '') +
          '</td>' +
          '<td>' + ui.availability(s.availability) + '</td>' +
          '<td class="num">' + (s.priceRon ? fmt.ron(s.priceRon) : '—') +
          (s.packLabel ? '<span class="pf-stores-table__note">' + fmt.esc(s.packLabel) + '</span>' : '') +
          '</td>' +
          '<td class="num">' + (p ? fmt.num(p.pricePerKg, 0) + ' lei/kg' : '—') + '</td>' +
          '<td class="num">' + (p ? fmt.num(p.ronPer100gProtein, 1) : '—') + '</td>' +
          '</tr>'
        );
      })
      .join('');

    const table =
      '<table class="pf-stores-table">' +
      '<thead><tr><th>Magazin</th><th>Disp.</th><th class="num">Preț</th>' +
      '<th class="num">lei/kg</th><th class="num">lei/100g P</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table>';

    /* Store-level context pulled from the registry. */
    const registry = window.PF_STORES || [];
    const notes = stores
      .map(s => registry.filter(r => r.name === s.name)[0])
      .filter(Boolean)
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
      block(t('sec.stores'), table) +
      (food.sibiuNote ? block('Nota de Sibiu', '<p>' + fmt.esc(food.sibiuNote) + '</p>') : '') +
      '</div>' +
      '<div>' +
      block('Cost real',
        '<div class="pf-macros">' +
        '<div class="pf-macro pf-macro--protein"><span class="pf-macro__v">' +
        (d.ronPer100gProtein ? fmt.num(d.ronPer100gProtein, 1) : '—') +
        '</span><span class="pf-macro__k">lei/100g P</span></div>' +
        '<div class="pf-macro pf-macro--carbs"><span class="pf-macro__v">' +
        (d.proteinPerRon ? fmt.num(d.proteinPerRon, 1) : '—') +
        '</span><span class="pf-macro__k">g P / leu</span></div>' +
        '<div class="pf-macro pf-macro--kcal"><span class="pf-macro__v">' +
        (d.costPerServing ? fmt.num(d.costPerServing, 2) : '—') +
        '</span><span class="pf-macro__k">lei/porție</span></div>' +
        '<div class="pf-macro pf-macro--fat"><span class="pf-macro__v">' +
        (d.pricePerKg ? Math.round(d.pricePerKg) : '—') +
        '</span><span class="pf-macro__k">lei/kg</span></div>' +
        '</div>' +
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
      (d.ronPer100gProtein ? '<span class="pf-badge">' + fmt.num(d.ronPer100gProtein, 1) + ' lei / 100 g proteină</span>' : '') +
      '<span class="pf-badge">' + fmt.minutes(food.timeMin, PF.i18n.lang()) + '</span>' +
      '</div>' +
      '</div>' +
      '<div class="pf-modal__headright">' +
      ui.tier(d.tier, { size: 'lg', tip: PF.card.tierTip(food) }) +
      '</div>' +
      '</div>' +

      '<nav class="pf-modal__tabs" role="tablist">' +
      TABS.map(
        tb =>
          '<button class="pf-modal__tab' + (tb.key === activeTab ? ' is-active' : '') +
          '" data-tab="' + tb.key + '" role="tab" aria-selected="' +
          (tb.key === activeTab ? 'true' : 'false') + '">' + t(tb.label) + '</button>'
      ).join('') +
      '</nav>' +

      '<div class="pf-modal__body" id="pf-modal-body">' +
      TABS.map(
        tb =>
          '<div class="pf-modal__pane' + (tb.key === activeTab ? ' is-active' : '') +
          '" data-pane="' + tb.key + '" role="tabpanel">' +
          (tb.key === activeTab ? tb.render(food) : '') +
          '</div>'
      ).join('') +
      '</div>' +

      '<div class="pf-modal__foot">' +
      '<span class="pf-confidence" data-c="' + fmt.esc(food.dataConfidence) + '" ' +
      'data-tip="' + fmt.esc((food.sources || []).join(' · ')) + '">' +
      '◆ ' + t('misc.confidence') + ': ' + fmt.esc(confidenceLabel(food.dataConfidence)) + '</span>' +
      '<span class="pf-spacer"></span>' +
      '<div class="pf-modal__nav">' +
      '<button class="pf-btn pf-btn--sm" data-act="prev"' + (idx <= 0 ? ' disabled' : '') + '>‹ ' + t('misc.prev') + '</button>' +
      '<button class="pf-btn pf-btn--sm" data-act="next"' +
      (idx < 0 || idx >= currentList.length - 1 ? ' disabled' : '') + '>' + t('misc.next') + ' ›</button>' +
      '</div>' +
      '<button class="pf-btn pf-btn--sm" data-act="copy">Copiază datele</button>' +
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
    /* `close` fires however it was dismissed — Escape, the ✕, or the
     * backdrop — whereas `cancel` only covers Escape, which left the tab
     * selection inconsistent between the three exits. */
    dlg.addEventListener('close', function () {
      activeTab = 'overview';
    });
    /* Click on the backdrop closes. */
    dlg.addEventListener('mousedown', function (ev) {
      if (ev.target === dlg) dlg.close();
    });
    return dlg;
  }

  function paint() {
    dlg.innerHTML = renderShell(currentFood);
  }

  function switchTab(key) {
    activeTab = key;
    const body = dlg.querySelector('#pf-modal-body');
    dlg.querySelectorAll('.pf-modal__tab').forEach(function (b) {
      const on = b.getAttribute('data-tab') === key;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    dlg.querySelectorAll('.pf-modal__pane').forEach(function (p) {
      const on = p.getAttribute('data-pane') === key;
      p.classList.toggle('is-active', on);
      if (on && !p.innerHTML.trim()) {
        const tab = TABS.filter(x => x.key === key)[0];
        p.innerHTML = tab.render(currentFood);
      }
    });
    if (body) body.scrollTop = 0;
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

  function copyData() {
    const f = currentFood;
    const d = f._d;
    const lines = [
      (f.nameRo || f.name) + (f.brand !== 'generic' ? ' — ' + f.brand : ''),
      'La 100 ' + f.unit + ': ' + fmt.num(d.protein100, 1) + ' g proteină, ' +
        fmt.num(d.carbs100, 1) + ' g carbo, ' + fmt.num(d.fat100, 1) + ' g grăsimi, ' +
        Math.round(d.kcal100) + ' kcal',
      Math.round(d.purityPct) + '% din calorii din proteină · rang ' + d.tier,
      'Porție: ' + ((f.serving && f.serving.label) || d.servingGrams + ' ' + f.unit) +
        ' → ' + fmt.num(d.perServing.protein, 1) + ' g proteină',
      d.bestPrice
        ? 'Preț: ' + fmt.ron(d.bestPrice.packPrice) + ' la ' + d.bestPrice.name +
          ' (' + fmt.num(d.ronPer100gProtein, 1) + ' lei / 100 g proteină)'
        : 'Preț: necunoscut',
      'Timp: ' + fmt.minutes(f.timeMin, 'ro') + ' · efort ' + f.effort + '/5',
      'Găsești la: ' + (f.stores || []).map(s => s.name).join(', ')
    ];
    const text = lines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => PF.app.toast(t('misc.copied'), 'ok'),
        () => PF.app.toast('Nu am putut copia', 'bad')
      );
    } else {
      PF.app.toast('Clipboard indisponibil', 'warn');
    }
  }

  function open(food, list) {
    ensureDialog();
    currentFood = food;
    currentList = list || PF.data.foods;
    servingMode = 'per100';
    paint();
    if (!dlg.open) dlg.showModal();
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
