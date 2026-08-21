/* =========================================================================
 * PROTEIN ATLAS SIBIU — LEADERBOARDS
 * Ten ranked answers to the ten questions people actually ask.
 * Every board respects the active filters, so a board is always
 * "the best X *that I can currently see*".
 * Attaches to window.PF.boards
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  /* Every visible string on a board is a dictionary key derived from the
   * board's own key: `board.<key>` is the title, `board.<key>.unit` the small
   * unit next to it, `board.<key>.desc` the paragraph under the header. Only
   * the product rows stay Romanian — those are data, not interface. */
  const title = b => t('board.' + b.key);
  const unit = b => t('board.' + b.key + '.unit');
  const desc = b => t('board.' + b.key + '.desc');

  /* Boards that answer "what is the best protein source" must exclude
   * collagen and gelatin. Their labels declare 85–90 g of protein and up to
   * 100% of calories from protein, so on raw numbers they win every one of
   * those boards — while being nutritionally useless for the purpose people
   * read these rankings for. They stay in the atlas, findable and fully
   * documented; they are just not allowed to top a leaderboard. */
  const usableProtein = f => f._d.qualityReason !== 'collagen';

  /* Each board: how to rank, how to print the value, and who qualifies.
   * Titles, units and descriptions live in the dictionary under the board key. */
  const BOARDS = [
    {
      key: 'protein',
      icon: '🥇',
      color: 'var(--macro-protein)',
      value: f => f._d.protein100,
      display: f => fmt.dec(f._d.protein100, 1) + ' g',
      filter: usableProtein
    },
    {
      key: 'purity',
      icon: '💎',
      color: 'var(--stat-leanness)',
      value: f => f._d.purityPct,
      display: f => Math.round(f._d.purityPct) + '%',
      filter: f => usableProtein(f) && f._d.protein100 >= 8
    },
    {
      key: 'value',
      icon: '💰',
      color: 'var(--stat-value)',
      value: f => f._d.ronPer100gProtein,
      asc: true,
      display: f =>
        PF.ui.approxNum(f._d.ronPer100gProtein, f._d.priceVerified, 1) +
        ' ' + t('misc.currency'),
      filter: f => usableProtein(f) && f._d.ronPer100gProtein !== null && f._d.protein100 >= 5
    },
    {
      key: 'serving',
      icon: '🍽️',
      color: 'var(--macro-protein)',
      value: f => f._d.perServing.protein,
      display: f => fmt.dec(f._d.perServing.protein, 1) + ' g',
      filter: usableProtein
    },
    {
      key: 'instant',
      icon: '⚡',
      color: 'var(--stat-convenience)',
      value: f => f._d.protein100,
      display: f => fmt.dec(f._d.protein100, 1) + ' g',
      filter: f => usableProtein(f) && f.timeMin === 0 && f.effort === 0
    },
    {
      key: 'lowkcal',
      icon: '🪶',
      color: 'var(--stat-leanness)',
      value: f => f._d.proteinPer100kcal,
      display: f => fmt.dec(f._d.proteinPer100kcal, 1) + ' g',
      filter: f => usableProtein(f) && f._d.protein100 >= 8
    },
    {
      key: 'taste',
      icon: '😋',
      color: 'var(--stat-taste)',
      value: f => f._d.bars.taste,
      display: f => Math.round(f._d.bars.taste) + '/100',
      filter: f => usableProtein(f) && f._d.protein100 >= 12
    },
    {
      key: 'satiety',
      icon: '🛑',
      color: 'var(--stat-satiety)',
      value: f => f._d.bars.satiety,
      display: f => Math.round(f._d.bars.satiety) + '/100'
    },
    {
      key: 'lean',
      icon: '🥩',
      color: 'var(--stat-leanness)',
      value: f => f._d.bars.leanness,
      display: f => Math.round(f._d.bars.leanness) + '%',
      filter: f => usableProtein(f) && f._d.protein100 >= 12
    },
    {
      key: 'local',
      icon: '🏛️',
      color: 'var(--tier-s)',
      value: f => f._d.protein100,
      display: f => fmt.dec(f._d.protein100, 1) + ' g',
      filter: f =>
        (f.tags || []).indexOf('local-sibiu') !== -1 ||
        (f.stores || []).some(s => s.name === 'Piața Cibin' || s.name === 'Măcelărie locală')
    }
  ];

  function rank(foods, board, limit) {
    let pool = foods;
    if (board.filter) pool = pool.filter(board.filter);
    pool = pool.filter(f => {
      const v = board.value(f);
      return v !== null && v !== undefined && !Number.isNaN(v);
    });
    pool.sort(function (a, b) {
      const va = board.value(a);
      const vb = board.value(b);
      return board.asc ? va - vb : vb - va;
    });
    return pool.slice(0, limit || 12);
  }

  function renderBoard(foods, board, limit) {
    const list = rank(foods, board, limit);
    if (!list.length) return '';

    const rows = list
      .map(function (f, i) {
        return (
          '<button class="pf-board__row" data-id="' + fmt.esc(f.id) + '">' +
          '<span class="pf-board__rank">' + (i + 1) + '</span>' +
          '<span class="pf-board__emoji">' + PF.ui.foodEmoji(f) + '</span>' +
          '<span class="pf-board__name">' + fmt.esc(f.nameRo || f.name) +
          (f.brand && f.brand !== 'generic'
            ? ' <span class="pf-muted" style="font-size:var(--fs-3xs)">' + fmt.esc(f.brand) + '</span>'
            : '') +
          '</span>' +
          '<span class="pf-board__val" style="--c:' + board.color + '">' +
          fmt.esc(board.display(f)) + '</span>' +
          '</button>'
        );
      })
      .join('');

    return (
      '<section class="pf-board">' +
      '<header class="pf-board__head" style="--c:' + board.color + '">' +
      '<span class="pf-board__icon">' + board.icon + '</span>' +
      '<span class="pf-board__title">' + fmt.esc(title(board)) + '</span>' +
      '<span class="pf-board__unit">' + fmt.esc(unit(board)) + '</span>' +
      '</header>' +
      '<p class="pf-muted" style="font-size:var(--fs-3xs);padding:var(--sp-2) var(--sp-4) 0;line-height:1.45">' +
      fmt.esc(desc(board)) + '</p>' +
      '<div class="pf-board__list">' + rows + '</div>' +
      '</section>'
    );
  }

  function render(container, foods) {
    if (!foods.length) {
      container.innerHTML = PF.ui.emptyState({
        icon: '🏆',
        title: t('res.none'),
        text: t('res.noneHelp')
      });
      return;
    }

    const boards = BOARDS.map(b => renderBoard(foods, b, 12)).filter(Boolean).join('');

    /* A distribution strip at the top gives a sense of the whole set. */
    const proteins = foods.map(f => f._d.protein100);
    const histo =
      '<section class="pf-panel" style="margin-bottom:var(--sp-4)">' +
      '<div class="pf-panel__head"><span class="pf-panel__title">' +
      fmt.esc(t('board.histo') + ' · ' + foods.length + ' ' + t('misc.products')) +
      '</span></div>' +
      '<div class="pf-panel__body">' +
      PF.charts.histogram(proteins, 26, Math.max.apply(null, proteins)) +
      '<div class="pf-range__scale" style="margin-top:6px"><span>0 g</span><span>' +
      Math.round(Math.max.apply(null, proteins)) + ' g / 100 g</span></div>' +
      '</div></section>';

    container.innerHTML = histo + '<div class="pf-boards">' + boards + '</div>';
  }

  PF.boards = {
    BOARDS: BOARDS,
    rank: rank,
    render: render,
    renderBoard: renderBoard
  };
})();
