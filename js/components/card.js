/* =========================================================================
 * PROTEIN ATLAS SIBIU — FOOD CARD
 * Renders one food as an RPG item card.
 * Attaches to window.PF.card
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const ui = PF.ui;
  const t = k => PF.i18n.t(k);

  /* Tier explanation shown on the badge tooltip. */
  function tierTip(food) {
    const d = food._d;
    return (
      'Rang ' + d.tier + ' · scor ' + Math.round(d.score) + '/100. ' +
      'Calculat din: cantitate de proteină (28%), puritate (24%), preț (15%), ' +
      'comoditate (13%), sațietate (10%), gust (10%).'
    );
  }

  /**
   * @param {object} food   enriched food object
   * @param {object} state  { query, favourites:Set, compare:Set, tray:Map, index }
   */
  function render(food, state) {
    const d = food._d;
    const s = state || {};
    const q = s.query || '';
    const isFav = s.favourites && s.favourites.has(food.id);
    const isCmp = s.compare && s.compare.has(food.id);
    const unitLabel = food.unit === 'ml' ? t('card.per100ml') : t('card.per100');

    /* ---- corner flag: at most one, most interesting wins ------------- */
    let flag = '';
    if ((food.tags || []).indexOf('local-sibiu') !== -1) {
      flag = '<span class="pf-card__flag pf-card__flag--local">' + t('card.local') + '</span>';
    } else if (d.ronPer100gProtein && d.ronPer100gProtein <= 5) {
      flag = '<span class="pf-card__flag pf-card__flag--cheap">' + t('card.cheapest') + '</span>';
    } else if (food.timeMin === 0 && d.protein100 >= 18) {
      flag = '<span class="pf-card__flag">' + t('card.ready') + '</span>';
    }

    /* ---- price line --------------------------------------------------- */
    let priceLine = '';
    if (d.ronPer100gProtein) {
      priceLine =
        '<span class="pf-card__price" data-tip="' +
        fmt.esc(
          'Cel mai bun preț găsit: ' + fmt.ron(d.bestPrice.packPrice) + ' / ' +
          d.bestPrice.packGrams + ' ' + food.unit + ' la ' + d.bestPrice.name +
          ' → ' + fmt.ron(d.ronPer100gProtein) + ' pentru 100 g de proteină pură.'
        ) + '">' +
        fmt.ronShort(d.ronPer100gProtein) + ' /100g P</span>';
    }

    /* ---- serving readout ---------------------------------------------- */
    const servingLine =
      '<div class="pf-card__heroline">' +
      '<span>' + fmt.esc(food.serving && food.serving.label ? fmt.truncate(food.serving.label, 30) : t('card.perServing')) + '</span>' +
      '<b>' + fmt.num(d.perServing.protein, 1) + ' g · ' + Math.round(d.perServing.kcal) + ' kcal</b>' +
      '</div>';

    /* Replay the entrance stagger only when the LIST changed. Toggling a
     * favourite re-renders the grid too, and re-animating 60 cards for that
     * is over a second of full-screen thrash for a one-button change. */
    const enter = s.animate === false ? '' : ' pf-card--enter';

    return (
      '<article class="pf-card' + enter + (isCmp ? ' is-selected' : '') +
      '" data-cat="' + fmt.esc(food.category) + '" data-id="' + fmt.esc(food.id) +
      '" style="--i:' + (s.index || 0) + '" tabindex="0" ' +
      /* Deliberately NOT role="button": the card contains four real buttons,
       * and a button may not have interactive descendants — AT would flatten
       * the card and hide Details/Add/Favourite/Compare from browse mode. */
      'aria-label="' + fmt.esc((food.nameRo || food.name) + ', ' + fmt.num(d.protein100, 1) + ' grame proteină la 100 grame') + '">' +

      flag +

      /* ---------- header ---------- */
      '<header class="pf-card__head">' +
      '<span class="pf-card__icon">' + (food.emoji || PF.i18n.catEmoji(food.category)) + '</span>' +
      '<span class="pf-card__id">' +
      '<h3 class="pf-card__name">' + fmt.highlight(food.nameRo || food.name, q) + '</h3>' +
      '<span class="pf-card__brand">' +
      (food.brand && food.brand !== 'generic'
        ? '<b>' + fmt.highlight(food.brand, q) + '</b><span class="pf-card__sep">·</span>'
        : '') +
      fmt.esc(food.subcategory || PF.i18n.catName(food.category)) +
      '</span>' +
      '</span>' +
      ui.tier(d.tier, { tip: tierTip(food) }) +
      '</header>' +

      /* ---------- protein headline ---------- */
      '<div class="pf-card__hero">' +
      '<span class="pf-card__protein">' +
      '<b>' + fmt.num(d.protein100, d.protein100 >= 10 ? 0 : 1) + '</b>' +
      '<span>g<br>' + fmt.esc(unitLabel) + '</span>' +
      '</span>' +
      '<span class="pf-card__herobars">' +
      ui.macroBar(food) +
      servingLine +
      '</span>' +
      '</div>' +

      /* ---------- macro numbers ---------- */
      ui.macroStrip(food.per100g) +

      /* ---------- stat bars ---------- */
      ui.statBlock(food) +

      /* ---------- tags (quality warning first, it changes the decision) ---------- */
      (ui.qualityBadge(food)
        ? '<div class="pf-card__tags">' + ui.qualityBadge(food) + '</div>'
        : '') +
      ui.tagChips(d.allTags, 4) +

      /* ---------- meta ---------- */
      '<div class="pf-card__meta">' +
      ui.effortChip(food.effort) +
      ui.timeChip(food.timeMin, food.activeTimeMin) +
      priceLine +
      '</div>' +
      ui.storePills(food.stores, 4) +

      /* ---------- actions ---------- */
      '<footer class="pf-card__foot">' +
      '<button class="pf-btn pf-btn--sm" data-act="open">' + t('card.details') + '</button>' +
      '<button class="pf-btn pf-btn--sm pf-btn--primary" data-act="add">+ ' + t('card.add') + '</button>' +
      '<button class="pf-card__fav' + (isFav ? ' is-on' : '') +
      '" data-act="fav" aria-pressed="' + (isFav ? 'true' : 'false') +
      '" title="' + t('card.fav') + '">★</button>' +
      '<button class="pf-card__fav pf-card__cmp' + (isCmp ? ' is-on' : '') +
      '" data-act="cmp" aria-pressed="' + (isCmp ? 'true' : 'false') +
      '" title="' + t('card.compare') + '">⇄</button>' +
      '</footer>' +

      '</article>'
    );
  }

  /* =======================================================================
   * TABLE ROW — the dense alternative view
   * ==================================================================== */
  function row(food, state) {
    const d = food._d;
    const q = (state && state.query) || '';
    return (
      '<tr data-id="' + fmt.esc(food.id) + '">' +
      '<td><div class="pf-td-name">' +
      '<span>' + (food.emoji || '🍽️') + '</span>' +
      '<span><b>' + fmt.highlight(food.nameRo || food.name, q) + '</b>' +
      '<small>' + fmt.esc(food.brand !== 'generic' ? food.brand : PF.i18n.catName(food.category)) +
      '</small></span></div></td>' +
      '<td>' + PF.ui.tier(d.tier, { size: 'sm' }) + '</td>' +
      '<td class="num">' + fmt.num(d.protein100, 1) + '</td>' +
      '<td class="pf-td-bar">' + PF.charts.rankBar(d.protein100, 90, 'var(--macro-protein)', '') + '</td>' +
      '<td class="num">' + Math.round(d.purityPct) + '%</td>' +
      '<td class="num">' + Math.round(d.kcal100) + '</td>' +
      '<td class="num">' + fmt.num(d.carbs100, 1) + '</td>' +
      '<td class="num">' + fmt.num(d.fat100, 1) + '</td>' +
      '<td class="num">' + fmt.num(d.perServing.protein, 1) + '</td>' +
      '<td class="num">' + (d.ronPer100gProtein ? fmt.num(d.ronPer100gProtein, 1) : '—') + '</td>' +
      '<td class="num">' + fmt.minutes(food.timeMin, PF.i18n.lang()) + '</td>' +
      '<td class="num">' + Math.round(d.score) + '</td>' +
      '</tr>'
    );
  }

  const TABLE_COLUMNS = [
    { key: 'name', label: 'Produs', sort: 'name' },
    { key: 'tier', label: 'Rang', sort: 'score' },
    { key: 'protein', label: 'Prot/100', sort: 'protein' },
    { key: 'bar', label: '', sort: 'protein' },
    { key: 'purity', label: '% kcal', sort: 'purity' },
    { key: 'kcal', label: 'kcal', sort: 'kcal' },
    { key: 'carbs', label: 'Carb', sort: 'carbs' },
    { key: 'fat', label: 'Grăs', sort: 'fat' },
    { key: 'serving', label: 'Prot/porție', sort: 'proteinServing' },
    { key: 'cost', label: 'lei/100gP', sort: 'value' },
    { key: 'time', label: 'Timp', sort: 'time' },
    { key: 'score', label: 'Scor', sort: 'score' }
  ];

  PF.card = {
    render: render,
    row: row,
    TABLE_COLUMNS: TABLE_COLUMNS,
    tierTip: tierTip
  };
})();
