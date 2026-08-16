/* =========================================================================
 * PROTEIN ATLAS SIBIU — APPLICATION
 *
 * Boot sequence:
 *   1. collect the raw entries every data file appended to window.PF_FOODS
 *   2. validate + enrich each one (derived metrics live in compute.js)
 *   3. build indexes, render the shell, wire the events
 *
 * Attaches to window.PF.app and window.PF.data
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});
  const fmt = PF.fmt;
  const t = k => PF.i18n.t(k);

  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.prototype.slice.call(document.querySelectorAll(sel));

  /* =======================================================================
   * STATE
   * ==================================================================== */
  let favourites = new Set();
  let visible = [];
  let summary = null;
  let currentView = 'grid';
  let renderLimit = 60;
  const PAGE = 60;

  /* While a range slider is being dragged we must NOT rebuild the rail:
   * renderRail() replaces its innerHTML, which destroys the very <input>
   * holding pointer capture and kills the drag after one step. */
  let railFrozen = false;
  /* Card entrance animation should play when the list changes, not when you
   * tap a star — otherwise one tap replays a 1.2s stagger across the grid. */
  let animateCards = true;

  let profile = { weight: 80, goal: 'muscle' };

  /* =======================================================================
   * 1. DATA BOOT
   * ==================================================================== */

  /**
   * Eight independent research passes were run in parallel, one per category,
   * and their territories overlap at the edges: skimmed milk powder is both
   * a dairy product and a baking-aisle protein hack, tahini is both a seed
   * paste and a condiment. That produces a handful of genuine duplicates.
   *
   * Rather than throwing away the research, we merge them: the entry with
   * the richer store/price data wins, and the loser's store rows are folded
   * into it so nothing is lost. Aliases keep old ids linkable.
   */
  function dedupe(foods) {
    const groups = {};
    foods.forEach(function (f) {
      const key = PF.fmt.normalize(f.nameRo || f.name).replace(/[^a-z0-9]/g, '');
      (groups[key] = groups[key] || []).push(f);
    });

    const CONF_RANK = { high: 3, medium: 2, low: 1 };
    const keep = [];
    const aliases = {};
    let merged = 0;

    Object.keys(groups).forEach(function (key) {
      const g = groups[key];
      if (g.length === 1) {
        keep.push(g[0]);
        return;
      }

      /* Primary = most stores, then highest data confidence, then most tips. */
      g.sort(function (a, b) {
        const s = (b.stores || []).length - (a.stores || []).length;
        if (s) return s;
        const c = (CONF_RANK[b.dataConfidence] || 0) - (CONF_RANK[a.dataConfidence] || 0);
        if (c) return c;
        return (b.tips || []).length - (a.tips || []).length;
      });

      const primary = g[0];
      const seenStores = {};
      (primary.stores || []).forEach(s => { seenStores[s.name] = true; });

      g.slice(1).forEach(function (dup) {
        (dup.stores || []).forEach(function (s) {
          if (!seenStores[s.name]) {
            seenStores[s.name] = true;
            primary.stores.push(s);
          }
        });
        (dup.tags || []).forEach(function (tg) {
          if (primary.tags.indexOf(tg) === -1) primary.tags.push(tg);
        });
        aliases[dup.id] = primary.id;
        merged++;
      });

      primary._mergedFrom = g.slice(1).map(x => x.id);
      keep.push(primary);
    });

    return { foods: keep, aliases: aliases, merged: merged };
  }

  function bootData() {
    const raw = window.PF_FOODS || [];
    const foods = [];
    const byId = {};
    const rejected = [];

    raw.forEach(function (f) {
      /* Minimum viable entry: an id, a name and a protein number. */
      if (!f || !f.id || !f.per100g || typeof f.per100g.protein !== 'number') {
        rejected.push({ id: f && f.id, why: 'missing core fields' });
        return;
      }
      if (byId[f.id]) {
        rejected.push({ id: f.id, why: 'duplicate id' });
        return;
      }
      /* Defensive defaults so one sloppy entry can't crash a render. */
      f.unit = f.unit === 'ml' ? 'ml' : 'g';
      f.tags = f.tags || [];
      f.stores = f.stores || [];
      f.timing = f.timing || {};
      f.diet = f.diet || {};
      f.taste = f.taste || {};
      f.cooking = f.cooking || { method: 'none', steps: [], equipment: [] };
      f.serving = f.serving || { grams: 100, label: '100 ' + f.unit };
      f.effort = typeof f.effort === 'number' ? f.effort : 0;
      f.timeMin = typeof f.timeMin === 'number' ? f.timeMin : 0;
      f.activeTimeMin = typeof f.activeTimeMin === 'number' ? f.activeTimeMin : f.timeMin;
      f.dataConfidence = f.dataConfidence || 'medium';

      byId[f.id] = f;
      foods.push(f);
    });

    /* Merge cross-category duplicates BEFORE enriching, so the surviving
     * entry is scored with the full set of prices from both sources. */
    const dd = dedupe(foods);
    const finalFoods = dd.foods;
    const finalById = {};
    finalFoods.forEach(function (f) {
      f._d = PF.compute.enrich(f);
      finalById[f.id] = f;
    });
    /* Old ids still resolve, so shared links never break. */
    Object.keys(dd.aliases).forEach(function (oldId) {
      finalById[oldId] = finalById[dd.aliases[oldId]];
    });

    PF.data = {
      foods: finalFoods,
      byId: finalById,
      rejected: rejected,
      aliases: dd.aliases,
      stores: window.PF_STORES || []
    };

    if (dd.merged) {
      console.info('[Protein Atlas] merged ' + dd.merged +
        ' duplicate entries from overlapping categories');
    }

    summary = PF.compute.summarize(finalFoods);
    PF.data.summary = summary;

    if (rejected.length) {
      console.warn('[Protein Atlas] ' + rejected.length + ' entries rejected:', rejected);
    }
    if (summary.flagged.length) {
      console.info(
        '[Protein Atlas] ' + summary.flagged.length +
        ' entries have data-quality flags (visible in each dossier):',
        summary.flagged
      );
    }
    return finalFoods.length;
  }

  /* =======================================================================
   * 2. HERO
   * ==================================================================== */
  function renderHero() {
    const el = $('#pf-hero');
    if (!el) return;

    const target = getTarget();
    const goalOptions = Object.keys(PF.compute.GOALS)
      .map(
        k =>
          '<option value="' + k + '"' + (profile.goal === k ? ' selected' : '') + '>' +
          t('calc.goal.' + k) + '</option>'
      )
      .join('');

    el.innerHTML =
      '<div class="pf-hero__top">' +
      '<div class="pf-grow">' +
      '<div class="pf-eyebrow">' + PF.i18n.tf('hero.eyebrow', {
        n: summary.count,
        c: Object.keys(summary.categories).length,
        s: summary.storeList.length
      }) + '</div>' +
      '<h1 class="pf-hero__title">Atlasul <em>Proteinelor</em></h1>' +
      '<p class="pf-hero__sub">' + t('app.heroLead') + '</p>' +
      '<div class="pf-hero__stats">' +
      kpi('protein', fmt.num(summary.maxProtein, 0) + ' g', t('kpi.protein')) +
      kpi('ready', summary.readyToEat, t('kpi.ready')) +
      kpi('cheap',
        summary.cheapest ? fmt.num(summary.cheapest._d.ronPer100gProtein, 1) : '—',
        t('kpi.value')) +
      kpi('stores', summary.storeList.length, t('kpi.stores')) +
      kpi('cats', summary.tiers.S + summary.tiers.A, t('kpi.tier')) +
      '</div>' +
      '</div>' +

      '<div class="pf-calc">' +
      '<div class="pf-calc__title">🎯 ' + t('calc.title') + '</div>' +
      '<div class="pf-calc__row">' +
      '<label for="pf-weight">' + t('calc.weight') + '</label>' +
      '<input class="pf-input pf-input--num" type="number" id="pf-weight" min="30" max="250" ' +
      'value="' + profile.weight + '">' +
      '</div>' +
      '<div class="pf-calc__row">' +
      '<label for="pf-goal">' + t('calc.goal') + '</label>' +
      '<span class="pf-select pf-select--sm"><select id="pf-goal">' + goalOptions + '</select></span>' +
      '</div>' +
      '<div class="pf-calc__result">' +
      '<b>' + target.target + ' g</b>' +
      '<span>' + t('calc.perDay') + '</span>' +
      '<div class="pf-calc__split">' +
      '<div><b>' + target.min + '</b>min</div>' +
      '<div><b>' + target.target + '</b>' + t('calc.targetShort') + '</div>' +
      '<div><b>' + target.max + '</b>max</div>' +
      '<div><b>' + target.perMeal + '</b>' + t('calc.perMeal') + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function kpi(kind, value, label) {
    return (
      '<div class="pf-kpi pf-kpi--' + kind + '">' +
      '<span class="pf-kpi__v">' + fmt.esc(String(value)) + '</span>' +
      '<span class="pf-kpi__k">' + fmt.esc(label) + '</span>' +
      '</div>'
    );
  }

  /* =======================================================================
   * 3. ORACLE — "what do I eat right now?"
   * ==================================================================== */
  function renderOracle() {
    const el = $('#pf-oracle');
    if (!el) return;
    const hour = new Date().getHours();
    const slot = PF.i18n.slotForHour(hour);

    el.innerHTML =
      '<span class="pf-oracle__icon">🎲</span>' +
      '<div class="pf-oracle__txt">' +
      '<h3>' + t('oracle.title') + '</h3>' +
      '<p>' + t('oracle.sub') + '</p>' +
      '</div>' +
      '<span class="pf-oracle__slot">' + t('oracle.now') + ' ' +
      PF.i18n.slotName(slot).toLowerCase() + '</span>' +
      '<button class="pf-btn pf-btn--primary" data-act="oracle">' + t('oracle.btn') + '</button>';
  }

  function runOracle() {
    const hour = new Date().getHours();
    const slot = PF.i18n.slotForHour(hour);

    /* Candidates: currently visible, genuinely suited to this slot. */
    let pool = visible.filter(f => (f.timing || {})[slot] >= 4);
    if (pool.length < 3) pool = visible.filter(f => (f.timing || {})[slot] >= 3);
    if (!pool.length) pool = visible.slice();
    if (!pool.length) {
      toast('Nu am ce recomanda cu filtrele astea', 'warn');
      return;
    }

    /* Weight the draw toward higher-scoring items without being deterministic,
     * so pressing it twice gives a different but still sensible answer. */
    pool.sort((a, b) => b._d.score - a._d.score);
    const top = pool.slice(0, Math.max(5, Math.ceil(pool.length * 0.25)));
    const pick = top[Math.floor(Math.random() * top.length)];

    PF.modal.open(pick, visible);
    toast(
      'Pentru ' + PF.i18n.slotName(slot).toLowerCase() + ': ' + (pick.nameRo || pick.name),
      'ok'
    );
  }

  /* =======================================================================
   * 4. MAIN RENDER
   * ==================================================================== */
  function refresh(opts) {
    const o = opts || {};
    if (!o.keepPage) renderLimit = PAGE;
    animateCards = !o.keepPage;

    visible = PF.filters.apply(PF.data.foods, favourites);

    renderResultBar();
    if (!railFrozen) PF.filters.renderRail($('#pf-rail-body'), PF.data.foods, favourites);
    renderView();
    PF.tray.render();
    syncHash();
  }

  function renderResultBar() {
    const el = $('#pf-resultbar');
    if (!el) return;
    const pills = PF.filters.activePills();

    const st = PF.filters.state;
    let sortOptions = PF.filters.SORTS.map(
      s =>
        '<option value="' + s.key + '"' +
        (st.sort === s.key ? ' selected' : '') + '>' + t(s.label) + '</option>'
    ).join('');

    /* The table exposes two sorts (carbs, fat) that are deliberately absent
     * from the dropdown. Without an entry for them the <select> silently
     * falls back to showing option 0, misreporting the active sort. */
    if (!PF.filters.SORTS.some(s => s.key === st.sort)) {
      const col = PF.card.TABLE_COLUMNS.filter(c => c.sort === st.sort)[0];
      sortOptions +=
        '<option value="' + fmt.esc(st.sort) + '" selected>' +
        fmt.esc(col ? col.label : st.sort) + '</option>';
    }

    el.innerHTML =
      '<span class="pf-resultbar__count"><em>' + visible.length + '</em> / ' +
      PF.data.foods.length + ' ' + t('res.showing') + '</span>' +
      (pills ? '<span class="pf-activefilters">' + pills + '</span>' : '') +
      '<span class="pf-grow"></span>' +
      '<span class="pf-select pf-select--sm"><select id="pf-sort" aria-label="' +
      t('sort.label') + '">' + sortOptions + '</select></span>' +
      '<button class="pf-iconbtn" data-act="flip-dir" title="' + t('sort.flip') + '">' +
      (PF.filters.state.dir === 'desc' ? '↓' : '↑') + '</button>';
  }

  function renderView() {
    $$('.pf-view').forEach(v => v.classList.remove('is-active'));
    const pane = $('#pf-view-' + currentView);
    if (pane) pane.classList.add('is-active');

    $$('[data-view]').forEach(function (b) {
      const on = b.getAttribute('data-view') === currentView;
      b.classList.toggle('is-active', on);
      /* The tablist role promises this state; without it AT announces six
       * unrelated buttons and never says which view is showing. */
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    if (currentView === 'grid') renderGrid();
    else if (currentView === 'table') renderTable();
    else if (currentView === 'boards') PF.boards.render($('#pf-view-boards'), visible);
    else if (currentView === 'compare') PF.compare.render($('#pf-view-compare'));
    else if (currentView === 'chart') renderChart();
    else if (currentView === 'recipes') PF.recipes.render($('#pf-view-recipes'));
    else if (currentView === 'shop') PF.tray.renderShoppingView($('#pf-view-shop'));
  }

  function emptyState() {
    return (
      '<div class="pf-empty">' +
      '<span class="pf-empty__icon">🔍</span>' +
      '<span class="pf-empty__title">' + t('res.none') + '</span>' +
      '<span class="pf-empty__text">' + t('res.noneHelp') + '</span>' +
      '<button class="pf-btn pf-btn--primary" data-act="reset-filters">' +
      t('res.resetFilters') + '</button>' +
      '</div>'
    );
  }

  function renderGrid() {
    const el = $('#pf-view-grid');
    if (!el) return;
    if (!visible.length) {
      el.innerHTML = emptyState();
      return;
    }

    const slice = visible.slice(0, renderLimit);
    const cmpSet = PF.compare.set();
    const state = {
      query: PF.filters.state.q,
      favourites: favourites,
      compare: cmpSet,
      animate: animateCards
    };

    const cards = slice
      .map(function (f, i) {
        state.index = i % PAGE;
        return PF.card.render(f, state);
      })
      .join('');

    const more =
      visible.length > renderLimit
        ? '<div class="pf-text-center" style="grid-column:1/-1;padding:var(--sp-6)">' +
          '<button class="pf-btn pf-btn--lg" data-act="more">' +
          PF.i18n.tf('res.loadMore', { n: Math.min(PAGE, visible.length - renderLimit) }) + ' ' +
          '<span class="pf-muted">' +
          PF.i18n.tf('res.remaining', { n: visible.length - renderLimit }) +
          '</span></button>' +
          '</div>'
        : '';

    el.innerHTML = '<div class="pf-grid">' + cards + '</div>' + more;
  }

  function renderTable() {
    const el = $('#pf-view-table');
    if (!el) return;
    if (!visible.length) {
      el.innerHTML = emptyState();
      return;
    }

    const st = PF.filters.state;
    const head = PF.card.TABLE_COLUMNS.map(function (c) {
      const sorted = st.sort === c.sort ? ' data-sorted="' + (st.dir === 'asc' ? 'asc' : 'desc') + '"' : '';
      return '<th data-sort="' + c.sort + '"' + sorted + '>' + fmt.esc(c.label) + '</th>';
    }).join('');

    const rows = visible
      .slice(0, renderLimit)
      .map(f => PF.card.row(f, { query: st.q }))
      .join('');

    const more =
      visible.length > renderLimit
        ? '<div class="pf-text-center" style="padding:var(--sp-4)">' +
          '<button class="pf-btn" data-act="more">Încă ' + PAGE + ' rânduri</button></div>'
        : '';

    el.innerHTML =
      '<div class="pf-table-wrap"><table class="pf-table">' +
      '<thead><tr>' + head + '</tr></thead><tbody>' + rows + '</tbody></table></div>' + more;
  }

  function renderChart() {
    const el = $('#pf-view-chart');
    if (!el) return;
    if (!visible.length) {
      el.innerHTML = emptyState();
      return;
    }

    /* Table alternative for the scatter, capped so it stays usable. */
    const tableRows = visible
      .slice()
      .sort((a, b) => b._d.purityPct - a._d.purityPct)
      .slice(0, 40)
      .map(f => [
        f.nameRo || f.name,
        fmt.num(f._d.protein100, 1),
        Math.round(f._d.kcal100),
        Math.round(f._d.purityPct) + '%'
      ]);

    el.innerHTML =
      '<section class="pf-panel"><div class="pf-panel__body">' +
      PF.charts.scatter(visible, { width: 980, height: 500 }) +
      '<div class="pf-chart__toggle">' +
      '<button class="pf-btn pf-btn--sm" data-act="toggle-chart-table">' +
      t('misc.dataTable') + '</button></div>' +
      '<div id="pf-chart-table" hidden>' +
      PF.charts.chartTable(
        ['Produs', 'Proteină/100g', 'kcal/100g', '% din kcal'],
        tableRows
      ) +
      '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-2)">' +
      'Primele 40 din ' + visible.length + ' produse vizibile, ordonate după puritate.</p>' +
      '</div>' +
      '</div></section>' +
      '<section class="pf-panel pf-mt-4"><div class="pf-panel__head">' +
      '<span class="pf-panel__title">' + t('board.histo') + '</span></div>' +
      '<div class="pf-panel__body">' +
      PF.charts.histogram(visible.map(f => f._d.protein100), 30,
        Math.max.apply(null, visible.map(f => f._d.protein100))) +
      '</div></section>' +

      /* The store guide sits at the bottom of this view because the view
       * answers "where does everything sit" — and the last question that
       * follows from a landscape is "so where do I go to buy it". */
      '<div class="pf-mt-4">' + PF.stores.render() + '</div>';
  }

  /* =======================================================================
   * 5. TARGETS
   * ==================================================================== */
  function getTarget() {
    return PF.compute.proteinTarget(profile.weight, profile.goal);
  }

  function getKcalTarget() {
    /* A deliberately rough maintenance estimate: ~31 kcal/kg. It exists only
     * to give the calorie progress bar a denominator, and the UI says so. */
    return Math.round(profile.weight * 31);
  }

  /* =======================================================================
   * 6. TOASTS
   * ==================================================================== */
  function toast(message, kind) {
    const box = $('#pf-toasts');
    if (!box) return;
    const el = document.createElement('div');
    el.className = 'pf-toast pf-toast--' + (kind || 'ok');
    const icon = kind === 'bad' ? '⛔' : kind === 'warn' ? '⚠️' : '✅';
    el.innerHTML = '<span class="pf-toast__icon">' + icon + '</span><span>' +
      fmt.esc(message) + '</span>';
    box.appendChild(el);
    setTimeout(function () {
      el.classList.add('is-leaving');
      setTimeout(() => el.remove(), 260);
    }, 2600);
  }

  /* =======================================================================
   * 7. ACTIONS
   * ==================================================================== */
  function addToTray(id) {
    PF.tray.add(id, 1);
    const f = PF.data.byId[id];
    toast(
      (f ? (f.nameRo || f.name) : '') + ' — ' + t('misc.added') +
      ' (' + fmt.num(f._d.perServing.protein, 1) + ' g proteină)',
      'ok'
    );
  }

  function toggleFav(id) {
    if (favourites.has(id)) favourites.delete(id);
    else favourites.add(id);
    PF.store.set('favourites', Array.from(favourites));
    refresh({ keepPage: true });
  }

  function toggleCompare(id) {
    const res = PF.compare.toggle(id);
    if (!res.ok) {
      toast('Poți compara maximum ' + PF.compare.MAX + ' produse', 'warn');
      return;
    }
    refresh({ keepPage: true });
    if (res.added && PF.compare.count() === 2) {
      toast('Două produse în comparație — deschide fila „Comparație”', 'ok');
    }
  }

  function setView(v) {
    currentView = v;
    PF.filters.state.view = v;
    renderView();
    syncHash();
  }

  function syncHash() {
    const s = PF.filters.serialize();
    s.view = currentView === 'grid' ? '' : currentView;
    PF.store.writeHash(s);
  }

  /* =======================================================================
   * 8. THEME / LANGUAGE / DENSITY
   * ==================================================================== */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    PF.store.set('theme', theme);
    const btn = $('#pf-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  }

  function applyLang(l) {
    PF.i18n.setLang(l);
    PF.store.set('lang', l);
    const btn = $('#pf-lang');
    if (btn) btn.textContent = l === 'ro' ? 'RO' : 'EN';
    renderHero();
    renderOracle();
    renderStaticText();
    refresh();
  }

  function renderStaticText() {
    const search = $('#pf-search');
    if (search) search.placeholder = t('search.placeholder');
    $$('[data-view]').forEach(function (b) {
      const v = b.getAttribute('data-view');
      const label = b.querySelector('span');
      if (label) label.textContent = t('view.' + v);
    });
  }

  /* =======================================================================
   * 9. EVENTS
   * ==================================================================== */
  function wire() {
    /* ---- search ---- */
    const search = $('#pf-search');
    let searchTimer = null;
    search.addEventListener('input', function () {
      clearTimeout(searchTimer);
      const v = search.value;
      searchTimer = setTimeout(function () {
        PF.filters.setQuery(v);
      }, 130);
      const clear = $('#pf-search-clear');
      if (clear) clear.hidden = !v;
      const hint = $('#pf-search-hint');
      if (hint) hint.hidden = !!v;
    });

    /* ---- global click delegation ---- */
    document.addEventListener('click', function (ev) {
      /* recipe filters and cards */
      const rm = ev.target.closest('[data-rmethod]');
      if (rm) { PF.recipes.setMethod(rm.getAttribute('data-rmethod')); PF.recipes.render($('#pf-view-recipes')); return; }
      const rb = ev.target.closest('[data-rbase]');
      if (rb) { PF.recipes.setBase(rb.getAttribute('data-rbase')); PF.recipes.render($('#pf-view-recipes')); return; }
      const ro = ev.target.closest('[data-recipe-open]');
      if (ro) { PF.recipes.open(ro.getAttribute('data-recipe-open')); return; }
      const rcard = ev.target.closest('[data-recipe]');
      if (rcard && !ev.target.closest('button')) { PF.recipes.open(rcard.getAttribute('data-recipe')); return; }

      /* filter chips */
      const chip = ev.target.closest('[data-facet]');
      if (chip) {
        PF.filters.toggleFacet(chip.getAttribute('data-facet'), chip.getAttribute('data-value'));
        return;
      }

      /* active-filter pill removal */
      const clr = ev.target.closest('[data-clear-facet]');
      if (clr) {
        PF.filters.clearFacet(clr.getAttribute('data-clear-facet'), clr.getAttribute('data-clear-value'));
        if (clr.getAttribute('data-clear-facet') === 'q') search.value = '';
        return;
      }

      /* view switch */
      const viewBtn = ev.target.closest('[data-view]');
      if (viewBtn) {
        setView(viewBtn.getAttribute('data-view'));
        return;
      }

      /* table sorting */
      const th = ev.target.closest('th[data-sort]');
      if (th) {
        PF.filters.setSort(th.getAttribute('data-sort'));
        return;
      }

      /* leaderboard / table row → dossier */
      const boardRow = ev.target.closest('.pf-board__row, .pf-table tbody tr');
      if (boardRow && boardRow.getAttribute('data-id')) {
        const f = PF.data.byId[boardRow.getAttribute('data-id')];
        if (f) PF.modal.open(f, visible);
        return;
      }

      /* uncompare from the compare table */
      const unc = ev.target.closest('[data-uncompare]');
      if (unc) {
        toggleCompare(unc.getAttribute('data-uncompare'));
        return;
      }

      /* scatter dot */
      const dot = ev.target.closest('.pf-scatter__dot');
      if (dot) {
        const f = PF.data.byId[dot.getAttribute('data-id')];
        if (f) PF.modal.open(f, visible);
        return;
      }

      /* card actions */
      const card = ev.target.closest('.pf-card');
      const act = ev.target.closest('[data-act]');
      const action = act ? act.getAttribute('data-act') : null;

      if (card && !action) {
        const f = PF.data.byId[card.getAttribute('data-id')];
        if (f) PF.modal.open(f, visible);
        return;
      }

      if (!action) return;

      if (card) {
        const id = card.getAttribute('data-id');
        if (action === 'open') { PF.modal.open(PF.data.byId[id], visible); return; }
        if (action === 'add') { addToTray(id); return; }
        if (action === 'fav') { toggleFav(id); return; }
        if (action === 'cmp') { toggleCompare(id); return; }
      }

      switch (action) {
        case 'reset-filters':
          PF.filters.reset(true);
          search.value = '';
          toast('Filtre resetate', 'ok');
          break;
        case 'flip-dir':
          PF.filters.setSort(PF.filters.state.sort);
          break;
        case 'more':
          renderLimit += PAGE;
          renderView();
          break;
        case 'oracle':
          runOracle();
          break;
        case 'clear-compare':
          PF.compare.clear();
          refresh({ keepPage: true });
          break;
        case 'tray-export':
          exportTray();
          break;
        case 'tray-shop':
          setView('shop');
          PF.tray.setOpen(false);
          break;
        case 'print':
          window.print();
          break;
        case 'toggle-chart-table': {
          const tbl = $('#pf-chart-table');
          if (tbl) tbl.hidden = !tbl.hidden;
          break;
        }
        case 'toggle-rail':
          toggleRail();
          break;
        case 'help':
          openHelp();
          break;
        default:
          break;
      }
    });

    /* ---- keyboard on cards ---- */
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        const card = ev.target.closest && ev.target.closest('.pf-card');
        if (card && ev.target === card) {
          ev.preventDefault();
          const f = PF.data.byId[card.getAttribute('data-id')];
          if (f) PF.modal.open(f, visible);
        }
      }
    });

    /* ---- range + checkbox + select inputs ---- */
    document.addEventListener('input', function (ev) {
      const num = ev.target.closest('[data-num]');
      if (num) {
        num.style.setProperty(
          '--fill',
          (((num.value - num.min) / (num.max - num.min)) * 100).toFixed(1) + '%'
        );
        const key = num.getAttribute('data-num');
        railFrozen = true;
        PF.filters.setNum(key, num.value);
        railFrozen = false;
        /* The rail was not repainted, so update this slider's readout by hand. */
        const box = num.closest('.pf-range');
        const out = box && box.querySelector('.pf-range__value');
        if (out) out.textContent = PF.filters.rangeDisplay(key);
        return;
      }
      if (ev.target.id === 'pf-weight') {
        profile.weight = Number(ev.target.value) || 80;
        PF.store.set('profile', profile);
        updateTargetDisplay();
        PF.tray.render();
      }
    });

    document.addEventListener('change', function (ev) {
      /* Drag finished: now it is safe to rebuild the rail so facet counts
       * and the active-filter pills catch up. */
      const numDone = ev.target.closest('[data-num]');
      if (numDone) {
        PF.filters.renderRail($('#pf-rail-body'), PF.data.foods, favourites);
        return;
      }

      const bool = ev.target.closest('[data-bool]');
      if (bool) {
        PF.filters.setBool(bool.getAttribute('data-bool'), bool.checked);
        return;
      }
      if (ev.target.id === 'pf-sort') {
        PF.filters.state.sort = ev.target.value;
        PF.filters.state.dir = 'desc';
        refresh();
        return;
      }
      if (ev.target.id === 'pf-goal') {
        profile.goal = ev.target.value;
        PF.store.set('profile', profile);
        updateTargetDisplay();
        PF.tray.render();
        return;
      }
      const shop = ev.target.closest('[data-shop-check]');
      if (shop) {
        const id = shop.getAttribute('data-shop-check');
        PF.store.toggleInSet('shopChecked', id);
        shop.closest('.pf-shop__item').classList.toggle('is-done', shop.checked);
      }
    });

    /* ---- top bar buttons ---- */
    const themeBtn = $('#pf-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const langBtn = $('#pf-lang');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        applyLang(PF.i18n.lang() === 'ro' ? 'en' : 'ro');
      });
    }

    const clearBtn = $('#pf-search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        search.value = '';
        clearBtn.hidden = true;
        PF.filters.setQuery('');
        search.focus();
      });
    }

    const scrim = $('#pf-rail-scrim');
    if (scrim) scrim.addEventListener('click', () => toggleRail(false));

    /* ---- global shortcuts ---- */
    document.addEventListener('keydown', onShortcut);

    /* ---- hash navigation ---- */
    window.addEventListener('hashchange', function () {
      const h = PF.store.readHash();
      if (!h) return;
      PF.filters.hydrate(h);
      if (h.view) currentView = h.view;
      search.value = PF.filters.state.q || '';
      refresh();
    });
  }

  function updateTargetDisplay() {
    const target = getTarget();
    const box = $('.pf-calc__result');
    if (!box) return;
    box.innerHTML =
      '<b>' + target.target + ' g</b>' +
      '<span>' + t('calc.perDay') + '</span>' +
      '<div class="pf-calc__split">' +
      '<div><b>' + target.min + '</b>min</div>' +
      '<div><b>' + target.target + '</b>' + t('calc.targetShort') + '</div>' +
      '<div><b>' + target.max + '</b>max</div>' +
      '<div><b>' + target.perMeal + '</b>' + t('calc.perMeal') + '</div>' +
      '</div>';
    box.classList.remove('pf-flash');
    void box.offsetWidth;
    box.classList.add('pf-flash');
  }

  function exportTray() {
    if (!PF.tray.count()) {
      toast('Masa e goală', 'warn');
      return;
    }
    const text = PF.tray.exportText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => toast('Lista copiată în clipboard', 'ok'),
        () => fallbackExport(text)
      );
    } else {
      fallbackExport(text);
    }
  }

  function fallbackExport(text) {
    const w = window.open('', '_blank');
    if (w) {
      w.document.write('<pre style="font:14px/1.6 monospace;padding:20px">' +
        fmt.esc(text) + '</pre>');
      w.document.close();
    } else {
      toast('Nu am putut exporta', 'bad');
    }
  }

  /**
   * The closed drawer is merely translated off-screen, so its ~100 controls
   * would stay in the tab order and keyboard focus would vanish into nothing.
   * `inert` removes them from focus and from the accessibility tree.
   * Must run on boot and on resize too, not only when the drawer is toggled.
   */
  function syncRailInert() {
    const rail = $('#pf-rail');
    if (!rail) return;
    const offCanvas = window.matchMedia('(max-width: 920px)').matches;
    const open = rail.classList.contains('is-open');
    if (offCanvas && !open) rail.setAttribute('inert', '');
    else rail.removeAttribute('inert');
  }

  function toggleRail(force) {
    const rail = $('#pf-rail');
    const scrim = $('#pf-rail-scrim');
    const open = force === undefined ? !rail.classList.contains('is-open') : force;
    rail.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-on', open);

    syncRailInert();

    /* Stop the page scrolling underneath the open drawer. */
    document.body.style.overflow = open ? 'hidden' : '';

    const btn = $('.pf-railtoggle');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  /* =======================================================================
   * 10. SHORTCUTS
   * ==================================================================== */
  const SHORTCUTS = [
    { keys: ['/'], label: 'Caută' },
    { keys: ['Esc'], label: 'Închide fereastra / golește căutarea' },
    { keys: ['1', '…', '7'], label: 'Schimbă vizualizarea' },
    { keys: ['R'], label: 'Ce mănânc acum? (alege aleatoriu)' },
    { keys: ['T'], label: 'Temă deschisă / întunecată' },
    { keys: ['L'], label: 'Limbă RO / EN' },
    { keys: ['M'], label: 'Deschide / închide masa' },
    { keys: ['X'], label: 'Resetează filtrele' },
    { keys: ['←', '→'], label: 'Produsul anterior / următor (în fereastră)' },
    { keys: ['?'], label: 'Această listă' }
  ];

  function openHelp() {
    let dlg = $('#pf-help');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'pf-help';
      dlg.className = 'pf-help';
      dlg.innerHTML =
        '<div class="pf-panel__head"><span class="pf-panel__title">⌨️ ' +
        t('misc.shortcuts') + '</span>' +
        '<button class="pf-iconbtn" style="margin-left:auto" data-close>✕</button></div>' +
        '<div class="pf-help__body">' +
        SHORTCUTS.map(
          s =>
            '<div class="pf-help__row"><span>' + fmt.esc(s.label) + '</span>' +
            '<span class="pf-help__keys">' +
            s.keys.map(k => '<kbd>' + fmt.esc(k) + '</kbd>').join('') +
            '</span></div>'
        ).join('') +
        '<p class="pf-muted" style="font-size:var(--fs-2xs);margin-top:var(--sp-3)">' +
        'Datele sunt salvate local în browser: favorite, masa curentă, comparația, ' +
        'tema și profilul. Nimic nu pleacă de pe calculatorul tău.</p>' +
        '</div>';
      document.body.appendChild(dlg);
      dlg.addEventListener('click', function (ev) {
        if (ev.target.closest('[data-close]') || ev.target === dlg) dlg.close();
      });
    }
    dlg.showModal();
  }

  function onShortcut(ev) {
    const tag = (ev.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'select' || tag === 'textarea';

    if (ev.key === 'Escape') {
      if (PF.modal.isOpen()) return; /* dialog handles it */
      const rail = $('#pf-rail');
      if (rail && rail.classList.contains('is-open')) {
        toggleRail(false);
        return;
      }
      const s = $('#pf-search');
      if (s && s.value) {
        s.value = '';
        PF.filters.setQuery('');
      }
      return;
    }

    if (typing) {
      if (ev.key === 'Enter' && ev.target.id === 'pf-search') ev.target.blur();
      return;
    }

    /* Never steal a browser or OS chord — Cmd/Ctrl+1..6 switches browser tabs. */
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;

    /* The shortcuts sheet is its own dialog; keys must not act behind it. */
    const help = document.getElementById('pf-help');
    if (help && help.open) return;

    if (PF.modal.isOpen()) {
      if (ev.key === 'ArrowLeft' || ev.key === 'ArrowRight') {
        const btn = document.querySelector(
          '.pf-modal [data-act="' + (ev.key === 'ArrowLeft' ? 'prev' : 'next') + '"]'
        );
        if (btn && !btn.disabled) btn.click();
      }
      return;
    }

    const views = ['grid', 'table', 'boards', 'compare', 'chart', 'recipes', 'shop'];
    if (ev.key >= '1' && ev.key <= '7') {
      setView(views[Number(ev.key) - 1]);
      return;
    }

    switch (ev.key.toLowerCase()) {
      case '/':
        ev.preventDefault();
        $('#pf-search').focus();
        break;
      case 'r':
        runOracle();
        break;
      case 't':
        toggleTheme();
        break;
      case 'l':
        applyLang(PF.i18n.lang() === 'ro' ? 'en' : 'ro');
        break;
      case 'm':
        if (!PF.tray.count()) toast(t('tray.empty'), 'warn');
        else PF.tray.setOpen(!PF.tray.isOpen());
        break;
      case 'x':
        PF.filters.reset(true);
        $('#pf-search').value = '';
        break;
      case '?':
        openHelp();
        break;
      default:
        break;
    }
  }

  /* =======================================================================
   * 11. BOOT
   * ==================================================================== */
  function boot() {
    const t0 = performance.now ? performance.now() : Date.now();

    /* restore preferences before anything renders */
    applyTheme(PF.store.get('theme', 'dark'));
    PF.i18n.setLang(PF.store.get('lang', 'ro'));
    profile = Object.assign(profile, PF.store.get('profile', {}));
    favourites = PF.store.getSet('favourites');

    const n = bootData();
    if (!n) {
      $('#pf-view-grid').innerHTML =
        '<div class="pf-empty"><span class="pf-empty__icon">💥</span>' +
        '<span class="pf-empty__title">Nu s-au încărcat datele</span>' +
        '<span class="pf-empty__text">Fișierele din js/data/ nu au putut fi citite. ' +
        'Deschide consola pentru detalii.</span></div>';
      return;
    }

    PF.compare.load();
    const nRecipes = PF.recipes.boot();
    console.info('[Protein Atlas] ' + nRecipes + ' mese complete, macro-uri calculate din atlas');
    PF.filters.setOnChange(function () { refresh(); });

    /* hydrate from the URL so a shared link reproduces the exact view */
    const hash = PF.store.readHash();
    if (hash) {
      PF.filters.hydrate(hash);
      if (hash.view) currentView = hash.view;
      const s = $('#pf-search');
      if (s) s.value = PF.filters.state.q || '';
    }

    renderHero();
    renderOracle();
    renderStaticText();
    PF.tray.mount($('#pf-tray'), function () { refresh({ keepPage: true }); });
    wire();
    refresh();
    syncRailInert();
    window.addEventListener('resize', syncRailInert);

    const t1 = performance.now ? performance.now() : Date.now();
    console.info(
      '[Protein Atlas Sibiu] ' + n + ' produse · ' + PF.data.stores.length +
      ' magazine · boot ' + Math.round(t1 - t0) + ' ms'
    );

    /* First-visit nudge. */
    if (!PF.store.get('seen', false)) {
      PF.store.set('seen', true);
      setTimeout(function () {
        toast('Apasă ? pentru scurtături, sau „Alege pentru mine”', 'ok');
      }, 900);
    }
  }

  PF.app = {
    boot: boot,
    refresh: refresh,
    /* Re-render just the current view. Cheaper than refresh(): skips filtering
     * all 512 products and rebuilding the rail. For views that own their own
     * local state (the recipes fridge, for one) that work is pure waste. */
    repaint: renderView,
    toast: toast,
    addToTray: addToTray,
    toggleFav: toggleFav,
    toggleCompare: toggleCompare,
    getTarget: getTarget,
    getKcalTarget: getKcalTarget,
    setView: setView,
    runOracle: runOracle,
    openHelp: openHelp,
    get visible() { return visible; },
    get favourites() { return favourites; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
