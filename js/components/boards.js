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

  /* Boards that answer "what is the best protein source" must exclude
   * collagen and gelatin. Their labels declare 85–90 g of protein and up to
   * 100% of calories from protein, so on raw numbers they win every one of
   * those boards — while being nutritionally useless for the purpose people
   * read these rankings for. They stay in the atlas, findable and fully
   * documented; they are just not allowed to top a leaderboard. */
  const usableProtein = f => f._d.qualityReason !== 'collagen';

  /* Each board: how to rank, how to print the value, and who qualifies. */
  const BOARDS = [
    {
      key: 'protein',
      icon: '🥇',
      title: 'board.protein',
      unit: 'g / 100 g',
      color: 'var(--macro-protein)',
      value: f => f._d.protein100,
      display: f => fmt.num(f._d.protein100, 1) + ' g',
      filter: usableProtein,
      desc: 'Cea mai mare concentrație de proteină pe 100 g, indiferent de preț sau de efort. '
        + 'Colagenul și gelatina sunt excluse — au cifre mari, dar proteină inutilizabilă.'
    },
    {
      key: 'purity',
      icon: '💎',
      title: 'board.purity',
      unit: '% din kcal',
      color: 'var(--stat-leanness)',
      value: f => f._d.purityPct,
      display: f => Math.round(f._d.purityPct) + '%',
      filter: f => usableProtein(f) && f._d.protein100 >= 8,
      desc: 'Ce procent din calorii vine din proteină. Filtrat la minim 8 g/100 g, ' +
        'altfel salata verde ar câștiga cu 0,9 g de proteină. Colagenul e exclus: ' +
        'ajunge la 100%, dar fără triptofan nu contează.'
    },
    {
      key: 'value',
      icon: '💰',
      title: 'board.value',
      unit: 'lei / 100 g P',
      color: 'var(--stat-value)',
      value: f => f._d.ronPer100gProtein,
      asc: true,
      display: f => fmt.num(f._d.ronPer100gProtein, 1) + ' lei',
      filter: f => usableProtein(f) && f._d.ronPer100gProtein !== null && f._d.protein100 >= 5,
      desc: 'Cât te costă 100 g de proteină pură. Aici se vede diferența brutală ' +
        'între leguminoase uscate și batoanele proteice.'
    },
    {
      key: 'serving',
      icon: '🍽️',
      title: 'board.serving',
      unit: 'g / porție',
      color: 'var(--macro-protein)',
      value: f => f._d.perServing.protein,
      display: f => fmt.num(f._d.perServing.protein, 1) + ' g',
      filter: usableProtein,
      desc: 'Proteina dintr-o porție realistă — nu din 100 g teoretice.'
    },
    {
      key: 'instant',
      icon: '⚡',
      title: 'board.instant',
      unit: 'g / 100 g',
      color: 'var(--stat-convenience)',
      value: f => f._d.protein100,
      display: f => fmt.num(f._d.protein100, 1) + ' g',
      filter: f => usableProtein(f) && f.timeMin === 0 && f.effort === 0,
      desc: 'Zero gătit, zero încălzit. Deschizi și mănânci.'
    },
    {
      key: 'lowkcal',
      icon: '🪶',
      title: 'board.lowkcal',
      unit: 'g P / 100 kcal',
      color: 'var(--stat-leanness)',
      value: f => f._d.proteinPer100kcal,
      display: f => fmt.num(f._d.proteinPer100kcal, 1) + ' g',
      filter: f => usableProtein(f) && f._d.protein100 >= 8,
      desc: 'Cea mai multă proteină pentru fiecare 100 de calorii. Regele deficitului caloric.'
    },
    {
      key: 'taste',
      icon: '😋',
      title: 'board.taste',
      unit: 'scor gust',
      color: 'var(--stat-taste)',
      value: f => f._d.bars.taste,
      display: f => Math.round(f._d.bars.taste) + '/100',
      filter: f => usableProtein(f) && f._d.protein100 >= 12,
      desc: 'Cele mai plăcute surse de proteină. Filtrate la minim 12 g/100 g, ' +
        'ca să nu câștige ciocolata.'
    },
    {
      key: 'satiety',
      icon: '🛑',
      title: 'board.satiety',
      unit: 'scor sațietate',
      color: 'var(--stat-satiety)',
      value: f => f._d.bars.satiety,
      display: f => Math.round(f._d.bars.satiety) + '/100',
      desc: 'Ce îți taie foamea cel mai mult, raportat la calorii.'
    },
    {
      key: 'lean',
      icon: '🥩',
      title: 'board.lean',
      unit: '% kcal fără grăsime',
      color: 'var(--stat-leanness)',
      value: f => f._d.bars.leanness,
      display: f => Math.round(f._d.bars.leanness) + '%',
      filter: f => usableProtein(f) && f._d.protein100 >= 12,
      desc: 'Cele mai slabe surse de proteină din atlas.'
    },
    {
      key: 'local',
      icon: '🏛️',
      title: 'board.local',
      unit: 'g / 100 g',
      color: 'var(--tier-s)',
      value: f => f._d.protein100,
      display: f => fmt.num(f._d.protein100, 1) + ' g',
      filter: f =>
        (f.tags || []).indexOf('local-sibiu') !== -1 ||
        (f.stores || []).some(s => s.name === 'Piața Cibin' || s.name === 'Măcelărie locală'),
      desc: 'Ce poți lua din Piața Cibin, de la măcelării și de la producătorii locali.'
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
          '<span class="pf-board__emoji">' + (f.emoji || '🍽️') + '</span>' +
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
      '<span class="pf-board__title">' + t(board.title) + '</span>' +
      '<span class="pf-board__unit">' + fmt.esc(board.unit) + '</span>' +
      '</header>' +
      '<p class="pf-muted" style="font-size:var(--fs-3xs);padding:var(--sp-2) var(--sp-4) 0;line-height:1.45">' +
      fmt.esc(board.desc) + '</p>' +
      '<div class="pf-board__list">' + rows + '</div>' +
      '</section>'
    );
  }

  function render(container, foods) {
    if (!foods.length) {
      container.innerHTML =
        '<div class="pf-empty"><span class="pf-empty__icon">🏆</span>' +
        '<span class="pf-empty__title">' + t('res.none') + '</span>' +
        '<span class="pf-empty__text">' + t('res.noneHelp') + '</span></div>';
      return;
    }

    const boards = BOARDS.map(b => renderBoard(foods, b, 12)).filter(Boolean).join('');

    /* A distribution strip at the top gives a sense of the whole set. */
    const proteins = foods.map(f => f._d.protein100);
    const histo =
      '<section class="pf-panel" style="margin-bottom:var(--sp-4)">' +
      '<div class="pf-panel__head"><span class="pf-panel__title">' +
      'Distribuția proteinei · ' + foods.length + ' produse</span></div>' +
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
