/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI „CHEAT"
 * File: js/components/desserts.js
 *
 * Motorul paginii `deserturi.html`.
 *
 * IDEEA CENTRALĂ
 *
 * Un desert proteic nu e mâncare sănătoasă. E o variantă care rezolvă aceeași
 * poftă la un cost nutrițional diferit. Singurul mod onest de a spune asta e
 * să pui cifrele una lângă alta: ce mănânci de obicei, ce mănânci în schimb.
 *
 * De aceea fiecare rețetă declară `vs` — desertul real pe care îl înlocuiește,
 * cu macro-urile lui — iar pagina nu afișează niciodată o rețetă fără
 * comparația ei. Dacă varianta proteică nu e mai bună, se vede.
 *
 * Ca peste tot în proiect, macro-urile NU sunt scrise de mână. Se calculează
 * din ingrediente, care trimit fie la un produs real din atlas (`id`), fie la
 * cămara de deserturi (`p`). O rețetă nu poate să mintă despre ce conține,
 * pentru că nu ea deține cifrele.
 * ========================================================================= */
(function () {
  'use strict';

  const PF = window.PF;
  const fmt = PF.fmt;

  let ALL = [];

  const FAMILY = {
    'no-bake': { ro: 'Fără coacere', emoji: '🥣', desc: 'Se amestecă și se răcește. Zero căldură.' },
    baked:     { ro: 'La cuptor',    emoji: '🔥', desc: 'Cuptor sau air fryer.' },
    frozen:    { ro: 'La congelator', emoji: '🧊', desc: 'Înghețată, batoane, bombe.' },
    drink:     { ro: 'De băut',      emoji: '🥤', desc: 'Shake, ciocolată caldă, smoothie.' },
    mug:       { ro: 'La cană',      emoji: '☕', desc: 'O cană, microunde, sub 5 minute.' },
    batch:     { ro: 'Pentru toată săptămâna', emoji: '📦', desc: 'Se face o dată, ține zile.' }
  };

  const CRAVING = {
    ciocolata:  { ro: 'Ciocolată',  emoji: '🍫' },
    cremos:     { ro: 'Cremos',     emoji: '🍮' },
    crocant:    { ro: 'Crocant',    emoji: '🍪' },
    fructat:    { ro: 'Fructat',    emoji: '🍓' },
    patiserie:  { ro: 'Patiserie',  emoji: '🥐' },
    inghetata:  { ro: 'Înghețată',  emoji: '🍦' },
    caramel:    { ro: 'Caramel',    emoji: '🍯' }
  };

  /* =======================================================================
   * REZOLVAREA INGREDIENTELOR
   * ==================================================================== */

  /**
   * Turns one `ing` entry into a row with real numbers behind it.
   * Returns null for an ingredient that resolves to nothing — the integrity
   * gate rejects those, so seeing one at runtime means data landed unchecked.
   */
  function resolveOne(i) {
    const g = i.g || 0;
    const k = g / 100;

    if (i.id) {
      const f = PF.data.byId[i.id];
      if (!f) return null;
      const n = f.per100g || {};
      /* Use what enrich() already published rather than re-deriving a price
       * here — a second copy of the pricing rules would drift the moment
       * compute.js changes how it handles ml, drained weight or pack size. */
      const price = f._d ? f._d.pricePerKg : null;
      return {
        kind: 'atlas',
        ref: f,
        name: f.nameRo || f.name,
        grams: g,
        free: !!i.free,
        kcal: (n.kcal || 0) * k,
        protein: (n.protein || 0) * k,
        carbs: (n.carbs || 0) * k,
        sugars: (n.sugars || 0) * k,
        fat: (n.fat || 0) * k,
        fiber: (n.fiber || 0) * k,
        polyol: (n.polyols || 0) * k,
        /* Gelatine and collagen carry protein that the body cannot use to
         * build anything — no tryptophan. The atlas already knows which
         * products those are; the dessert page must not quietly re-credit it. */
        collagen: !!(f._d && f._d.qualityReason === 'collagen'),
        ron: price ? (price / 1000) * g : null
      };
    }

    const p = (window.PF_DESSERT_PANTRY || {})[i.p];
    if (!p) return null;
    return {
      kind: 'pantry',
      ref: p,
      name: p.name,
      grams: g,
      free: !!i.free || !!p.free,
      kcal: (p.kcal || 0) * k,
      protein: (p.protein || 0) * k,
      carbs: (p.carbs || 0) * k,
      sugars: (p.sugars || 0) * k,
      fat: (p.fat || 0) * k,
      fiber: (p.fiber || 0) * k,
      polyol: (p.polyol || 0) * k,
      collagen: /gelatin|colagen/i.test(p.name),
      ron: p.ronKg ? (p.ronKg / 1000) * g : null
    };
  }

  /* =======================================================================
   * SCORUL DE „CHEAT"
   *
   * Cât de bun e schimbul, exprimat ca un singur număr — dar unul pe care îl
   * poți desface în componente, pentru că modalul le arată pe toate trei.
   *
   * Se compară PORȚIE cu PORȚIE, nu la 100 g. Psihologic asta contează: un
   * desert înlocuiește un desert, nu o cantitate abstractă.
   *
   * Ponderile spun ce urmărește proiectul: proteina cel mai mult (0,40) —
   * e motivul pentru care exiști aici; zahărul apoi (0,35) — e partea de
   * „cheat"; caloriile la urmă (0,25), pentru că un desert la fel de caloric
   * dar plin de proteină e tot un schimb bun.
   *
   * Autenticitatea nu se adună, se ÎNMULȚEȘTE. Un desert pe care nu-l mănânci
   * cu plăcere nu e un înlocuitor, indiferent ce scrie pe etichetă — dar nici
   * nu anulează complet un profil nutrițional bun, de unde plafonul de 0,6.
   * ==================================================================== */
  const FULL_KCAL_SAVED = 250;
  const FULL_SUGAR_SAVED = 25;
  const FULL_PROTEIN_GAINED = 20;
  const W = { protein: 0.40, sugar: 0.35, kcal: 0.25 };
  const AUTHENTICITY_FLOOR = 0.6;

  function cheatScore(per, vs, authenticity) {
    if (!vs) return null;

    const dKcal = (vs.kcal || 0) - per.kcal;
    const dSugar = (vs.sugars || 0) - per.sugars;
    const dProtein = per.protein - (vs.protein || 0);

    const clamp1 = v => Math.max(-1, Math.min(1, v));
    const k = clamp1(dKcal / FULL_KCAL_SAVED);
    const s = clamp1(dSugar / FULL_SUGAR_SAVED);
    const p = clamp1(dProtein / FULL_PROTEIN_GAINED);

    const raw = W.protein * p + W.sugar * s + W.kcal * k;   /* -1 .. 1 */
    const base = ((raw + 1) / 2) * 100;
    const auth = AUTHENTICITY_FLOOR +
      (1 - AUTHENTICITY_FLOOR) * (Math.max(0, Math.min(100, authenticity || 50)) / 100);

    return {
      score: Math.round(base * auth),
      dKcal: Math.round(dKcal),
      dSugar: Math.round(dSugar * 10) / 10,
      dProtein: Math.round(dProtein * 10) / 10,
      parts: { protein: p, sugar: s, kcal: k },
      authFactor: auth
    };
  }

  /* =======================================================================
   * ENRICH
   * ==================================================================== */
  function enrich(d) {
    const items = (d.ing || []).map(resolveOne).filter(Boolean);
    const missing = (d.ing || []).length - items.length;
    const servings = Math.max(1, d.servings || 1);

    const tot = { kcal: 0, protein: 0, carbs: 0, sugars: 0, fat: 0, fiber: 0, polyol: 0, ron: 0 };
    let collagenProtein = 0;
    let anyPriceMissing = false;

    items.forEach(function (it) {
      tot.kcal += it.kcal; tot.protein += it.protein; tot.carbs += it.carbs;
      tot.sugars += it.sugars; tot.fat += it.fat; tot.fiber += it.fiber;
      tot.polyol += it.polyol;
      if (it.collagen) collagenProtein += it.protein;
      if (it.free) return;
      if (it.ron === null) anyPriceMissing = true; else tot.ron += it.ron;
    });

    const per = {};
    Object.keys(tot).forEach(k => { per[k] = tot[k] / servings; });

    /* Protein the body can actually build with. Collagen counts on the label
     * and not here — the same correction the atlas applies to its rankings. */
    const usableProtein = (tot.protein - collagenProtein) / servings;

    const grams = items.reduce((s, i) => s + i.grams, 0) / servings;
    const proteinKcal = per.protein * 4;
    const purity = per.kcal > 0 ? (proteinKcal / per.kcal) * 100 : 0;

    const cheat = cheatScore(per, d.vs, d.taste && d.taste.authenticity);

    return {
      items: items,
      missing: missing,
      total: tot,
      perServing: per,
      servingGrams: Math.round(grams),
      usableProtein: usableProtein,
      collagenShare: tot.protein > 0 ? collagenProtein / tot.protein : 0,
      purityPct: purity,
      ronPerServing: anyPriceMissing ? null : tot.ron / servings,
      priceIncomplete: anyPriceMissing,
      cheat: cheat,
      /* Everything the honesty panel needs, computed rather than declared. */
      flags: {
        highPolyol: per.polyol >= 15,
        highSugar: per.sugars >= 25,
        collagen: collagenProtein > 0,
        lowProtein: per.protein < 15,
        heavy: per.kcal > 350
      }
    };
  }


  /* =======================================================================
   * STARE ȘI FILTRARE
   *
   * Deliberat mult mai simplă decât rail-ul atlasului. Aici nu cauți printre
   * 503 produse cu 26 de fațete — ai o poftă, ai un timp disponibil, atât.
   * ==================================================================== */
  const state = { craving: 'all', family: 'all', maxTime: 0, sort: 'cheat' };

  const TIME_STOPS = [
    { v: 0, ro: 'Oricât' },
    { v: 5, ro: 'Sub 5 min' },
    { v: 15, ro: 'Sub 15 min' },
    { v: 40, ro: 'Sub 40 min' }
  ];

  const SORTS = {
    cheat:   { ro: 'Cel mai bun schimb', get: d => (d._e.cheat ? d._e.cheat.score : 0) },
    protein: { ro: 'Cea mai multă proteină', get: d => d._e.perServing.protein },
    quick:   { ro: 'Cel mai rapid', get: d => -(d.time ? d.time.active : 999) },
    light:   { ro: 'Cele mai puține calorii', get: d => -d._e.perServing.kcal },
    sugar:   { ro: 'Cel mai puțin zahăr', get: d => -d._e.perServing.sugars }
  };

  /** Active time is what people actually budget for; chilling is not work. */
  function activeTime(d) {
    return d.time ? (d.time.active || d.time.total || 0) : 0;
  }

  function matches(d) {
    if (state.craving !== 'all' && d.craving !== state.craving) return false;
    if (state.family !== 'all' && d.family !== state.family) return false;
    if (state.maxTime && activeTime(d) > state.maxTime) return false;
    return true;
  }

  function visible() {
    const get = (SORTS[state.sort] || SORTS.cheat).get;
    return ALL.filter(matches).sort(function (a, b) { return get(b) - get(a); });
  }

  /* =======================================================================
   * COMPARAȚIA — piesa centrală a paginii
   *
   * Două bare pe aceeași scară, ca lungimea să însemne ceva. Scara e maximul
   * dintre cele două valori, nu o constantă: la 40 kcal diferență barele
   * trebuie să arate aproape la fel, pentru că ASTA e adevărul.
   * ==================================================================== */
  function versusRow(label, ours, theirs, unit, moreIsBetter) {
    const max = Math.max(ours, theirs, 0.001);
    const oursPct = (ours / max) * 100;
    const theirsPct = (theirs / max) * 100;
    const win = moreIsBetter ? ours > theirs : ours < theirs;

    return (
      '<div class="pf-vs__row">' +
      '<span class="pf-vs__label">' + fmt.esc(label) + '</span>' +
      '<span class="pf-vs__bars">' +
      '<span class="pf-vs__bar pf-vs__bar--ours' + (win ? ' is-win' : '') + '">' +
      '<i style="width:' + oursPct.toFixed(1) + '%"></i>' +
      '<b>' + fmt.num(ours, ours < 10 ? 1 : 0) + unit + '</b></span>' +
      '<span class="pf-vs__bar pf-vs__bar--theirs">' +
      '<i style="width:' + theirsPct.toFixed(1) + '%"></i>' +
      '<b>' + fmt.num(theirs, theirs < 10 ? 1 : 0) + unit + '</b></span>' +
      '</span></div>'
    );
  }

  function versus(d) {
    const e = d._e;
    if (!d.vs || !e.cheat) return '';
    const per = e.perServing;
    return (
      '<div class="pf-vs">' +
      '<div class="pf-vs__head">' +
      '<span class="pf-vs__mine">Varianta asta</span>' +
      '<span class="pf-vs__theirs">' + fmt.esc(d.vs.name) + '</span>' +
      '</div>' +
      versusRow('Proteină', per.protein, d.vs.protein || 0, ' g', true) +
      versusRow('Zahăr', per.sugars, d.vs.sugars || 0, ' g', false) +
      versusRow('Calorii', per.kcal, d.vs.kcal || 0, '', false) +
      '</div>'
    );
  }

  /* =======================================================================
   * PANOUL DE ONESTITATE
   *
   * Nu e o listă de avertismente ascunsă în subsol. Un desert „fără zahăr" cu
   * 30 g de polioli e o problemă, iar cine îl face merită s-o afle înainte,
   * nu după.
   * ==================================================================== */
  function honesty(d) {
    const e = d._e;
    const f = e.flags;
    const out = [];

    if (f.highPolyol) {
      out.push({ k: 'warn', t: Math.round(e.perServing.polyol) +
        ' g polioli pe porție — peste ~15 g mulți oameni au probleme digestive' });
    }
    if (f.highSugar) {
      out.push({ k: 'warn', t: Math.round(e.perServing.sugars) +
        ' g zahăr pe porție. E un desert cu zahăr, doar unul cu proteină în el' });
    }
    if (f.collagen) {
      out.push({ k: 'bad', t: Math.round(e.collagenShare * 100) +
        '% din proteină vine din gelatină — nu se pune la ținta zilnică' });
    }
    if (f.lowProtein) {
      out.push({ k: 'warn', t: 'Sub 15 g proteină pe porție — e mai aproape de un desert obișnuit' });
    }
    if (d.sweetener && d.sweetener.kind === 'xilitol') {
      out.push({ k: 'bad', t: 'Conține xilitol — toxic pentru câini chiar și în cantități mici' });
    }
    (d.warnings || []).forEach(w => out.push({ k: 'info', t: w }));

    if (!out.length) return '';
    return '<ul class="pf-honesty">' + out.map(function (o) {
      return '<li class="pf-honesty__i pf-honesty__i--' + o.k + '">' + fmt.esc(o.t) + '</li>';
    }).join('') + '</ul>';
  }

  /* =======================================================================
   * CARD
   * ==================================================================== */
  function card(d) {
    const e = d._e;
    const per = e.perServing;
    const fam = FAMILY[d.family] || { ro: d.family, emoji: '🍰' };
    const cr = CRAVING[d.craving] || { ro: d.craving, emoji: '' };
    const sc = e.cheat ? e.cheat.score : null;
    const band = sc === null ? '' : sc >= 75 ? ' is-great' : sc >= 55 ? ' is-good' : ' is-meh';

    return (
      '<article class="pf-dcard" data-dessert="' + fmt.esc(d.id) + '" tabindex="0">' +

      '<header class="pf-dcard__head">' +
      '<span class="pf-dcard__icon">' + fmt.esc(d.emoji || '🍰') + '</span>' +
      '<span class="pf-grow">' +
      '<h3 class="pf-dcard__name">' + fmt.esc(d.name) + '</h3>' +
      '<span class="pf-dcard__meta">' +
      '<span class="pf-badge pf-badge--accent">' + fam.emoji + ' ' + fmt.esc(fam.ro) + '</span>' +
      '<span class="pf-badge">' + cr.emoji + ' ' + fmt.esc(cr.ro) + '</span>' +
      '<span class="pf-badge">' + activeTime(d) + ' min activ</span>' +
      '</span></span>' +
      (sc !== null
        ? '<span class="pf-dscore' + band + '" title="Cât de bun e schimbul față de desertul real">' +
          '<b>' + sc + '</b><span>schimb</span></span>'
        : '') +
      '</header>' +

      '<div class="pf-dcard__hero">' +
      '<span class="pf-dcard__protein"><b>' + Math.round(per.protein) +
      '</b><span>g proteină<br>pe porție</span></span>' +
      '<span class="pf-dcard__nums">' +
      '<span><b>' + Math.round(per.kcal) + '</b> kcal</span>' +
      '<span><b>' + fmt.num(per.sugars, 1) + '</b> g zahăr</span>' +
      /* Polyols get the same billing as sugar. The 15 g threshold is reached
       * by stacking three ordinary ingredients, without anyone deciding to
       * use "a lot of sweetener" — so the number has to be on the card, not
       * only in a warning that fires after the fact. */
      (per.polyol >= 2
        ? '<span><b>' + fmt.num(per.polyol, 1) + '</b> g polioli</span>'
        : '') +
      '<span><b>' + Math.round(e.servingGrams) + '</b> g porția</span>' +
      /* When part of the protein is gelatine, the headline number above is
       * the label's number, not the body's. Both belong on the card. */
      (e.collagenShare > 0.02
        ? '<span class="pf-dcard__usable"><b>' + fmt.num(e.usableProtein, 1) +
          '</b> g proteină utilizabilă</span>'
        : '') +
      '</span>' +
      '</div>' +

      versus(d) +
      honesty(d) +

      '<footer class="pf-dcard__foot">' +
      '<span class="pf-muted">' +
      (e.ronPerServing !== null
        ? fmt.ronApprox(e.ronPerServing, { decimals: 2 }) + ' / porție'
        : 'preț incomplet') +
      '</span>' +
      '<button class="pf-btn pf-btn--sm" data-dessert-open="' + fmt.esc(d.id) + '">Rețeta</button>' +
      '</footer>' +
      '</article>'
    );
  }


  /* =======================================================================
   * VIZUALIZAREA
   * ==================================================================== */
  function chip(attr, value, label, count, on) {
    return '<button class="pf-chip' + (on ? ' is-on' : '') + '" data-' + attr +
      '="' + fmt.esc(String(value)) + '">' + label +
      (count !== null ? '<span class="pf-chip__n">' + count + '</span>' : '') + '</button>';
  }

  function countIf(patch) {
    const before = {};
    Object.keys(patch).forEach(k => { before[k] = state[k]; state[k] = patch[k]; });
    const n = ALL.filter(matches).length;
    Object.keys(before).forEach(k => { state[k] = before[k]; });
    return n;
  }


  /* =======================================================================
   * „CU CE TE LUPȚI" — registrul dulciurilor reale
   *
   * `js/data/14-dessert-reference.js` conține 40 de dulciuri pe care oamenii
   * chiar le mănâncă în România, cu macro-urile lor. Fără secțiunea asta ar
   * fi date moarte: folosite doar ca număr mic și gri într-o bară de
   * comparație, niciodată consultabile direct.
   *
   * Iar întrebarea „cât zahăr are de fapt un ecler" e una pe care oamenii o
   * pun, și la care merită un răspuns fără morală atașată.
   * ==================================================================== */
  const REF_CAT = {
    baton: 'Batoane', ciocolata: 'Ciocolată', cofetarie: 'Cofetărie',
    patiserie: 'Patiserie', inghetata: 'Înghețată', raft: 'Raft de magazin',
    lant: 'Lanțuri'
  };

  /* Short in the cell, full sentence in the tooltip. The long version made
   * the confidence column wider than the numbers people came to read. */
  const CONF_LABEL = { high: 'producător', medium: 'tipic', low: 'estimare' };
  const CONF_FULL = {
    high: 'Valori din tabelul nutrițional al producătorului.',
    medium: 'Valori tipice pentru rețeta clasică — variază între producători.',
    low: 'Estimare. Variază enorm de la un loc la altul; ia-o ca ordin de mărime.'
  };

  let refOpen = false;
  let refSort = 'sugars';

  /** Desserts here that aim at this particular real one. */
  function targeting(ref) {
    const n = fmt.normalize(ref.name).split(/[\s,(]+/)[0];
    if (!n || n.length < 4) return [];
    return ALL.filter(d => d.vs && fmt.normalize(d.vs.name).indexOf(n) !== -1);
  }

  function refRow(r) {
    const per = r.per || {};
    const hits = targeting(r);
    return (
      '<tr>' +
      '<th>' + fmt.esc(r.name) +
      '<span class="pf-refrow__serv">' + fmt.esc((r.serving && r.serving.label) || '') + '</span>' +
      '</th>' +
      '<td class="num">' + Math.round(per.kcal || 0) + '</td>' +
      '<td class="num">' + fmt.num(per.protein || 0, 1) + '</td>' +
      '<td class="num pf-refrow__sugar">' + fmt.num(per.sugars || 0, 1) + '</td>' +
      '<td class="num">' + fmt.num(per.fat || 0, 1) + '</td>' +
      '<td><span class="pf-badge pf-conf pf-conf--' + fmt.esc(r.confidence || 'low') + '" title="' +
      fmt.esc((CONF_FULL[r.confidence] || '') + (r.source ? ' Sursă: ' + r.source : '')) + '">' +
      fmt.esc(CONF_LABEL[r.confidence] || r.confidence || '') + '</span></td>' +
      '<td>' + (hits.length
        ? '<button class="pf-link" data-dessert-open="' + fmt.esc(hits[0].id) + '">' +
          hits.length + (hits.length === 1 ? ' variantă' : ' variante') + '</button>'
        : '<span class="pf-muted">—</span>') + '</td>' +
      '</tr>'
    );
  }

  function referenceSection() {
    const REF = window.PF_DESSERT_REF || [];
    if (!REF.length) return '';

    const sorters = {
      sugars: (a, b) => (b.per.sugars || 0) - (a.per.sugars || 0),
      kcal:   (a, b) => (b.per.kcal || 0) - (a.per.kcal || 0),
      protein:(a, b) => (b.per.protein || 0) - (a.per.protein || 0),
      name:   (a, b) => a.name.localeCompare(b.name, 'ro')
    };
    const rows = REF.slice().sort(sorters[refSort] || sorters.sugars);

    const worst = rows[0];
    const covered = REF.filter(r => targeting(r).length).length;

    const tab = (k, label) =>
      '<button class="pf-chip' + (refSort === k ? ' is-on' : '') +
      '" data-dref-sort="' + k + '">' + label + '</button>';

    return (
      '<section class="pf-panel pf-refpanel' + (refOpen ? ' is-open' : '') + '">' +
      '<button class="pf-refpanel__head" data-dref-toggle aria-expanded="' +
      (refOpen ? 'true' : 'false') + '" aria-controls="pf-refbody">' +
      '<span class="pf-refpanel__icon">🍫</span>' +
      '<span class="pf-refpanel__title">Cu ce te lupți</span>' +
      '<span class="pf-refpanel__sum">' + REF.length +
      ' dulciuri reale, cu cifrele lor · cel mai mult zahăr: ' +
      fmt.esc(worst.name.split(',')[0]) + ', ' + Math.round(worst.per.sugars) + ' g pe porție' +
      '</span>' +
      '<span class="pf-refpanel__chev">' + (refOpen ? '▾' : '▸') + '</span>' +
      '</button>' +
      (refOpen
        ? '<div class="pf-refpanel__body" id="pf-refbody">' +
          '<p class="pf-muted" style="font-size:var(--fs-xs);margin-bottom:var(--sp-3)">' +
          'Fără morală: sunt doar cifrele. ' + covered + ' din ' + REF.length +
          ' au o variantă proteică în pagina asta. Coloana de încredere spune ' +
          'cât de sigure sunt valorile — un baton ambalat are tabel nutrițional, ' +
          'un papanaș de cofetărie nu.</p>' +
          '<div class="pf-chips" style="margin-bottom:var(--sp-3)">' +
          tab('sugars', 'După zahăr') + tab('kcal', 'După calorii') +
          tab('protein', 'După proteină') + tab('name', 'Alfabetic') +
          '</div>' +
          '<div class="pf-block__body"><table class="pf-nutri pf-reftable">' +
          '<thead><tr><th>Dulcele</th><th class="num">kcal</th><th class="num">Prot.</th>' +
          '<th class="num">Zahăr</th><th class="num">Grăs.</th><th>Încredere</th>' +
          '<th>Variante</th></tr></thead><tbody>' +
          rows.map(refRow).join('') +
          '</tbody></table></div></div>'
        : '') +
      '</section>'
    );
  }

  function render(container) {
    if (!ALL.length) {
      container.innerHTML =
        '<div class="pf-empty"><span class="pf-empty__icon">🍰</span>' +
        '<span class="pf-empty__title">Niciun desert încărcat</span></div>';
      return;
    }

    const cravingChips =
      chip('dcraving', 'all', 'Orice poftă', countIf({ craving: 'all' }), state.craving === 'all') +
      Object.keys(CRAVING).map(function (k) {
        const n = countIf({ craving: k });
        return n ? chip('dcraving', k, CRAVING[k].emoji + ' ' + fmt.esc(CRAVING[k].ro), n,
          state.craving === k) : '';
      }).join('');

    const familyChips =
      chip('dfamily', 'all', 'Toate', countIf({ family: 'all' }), state.family === 'all') +
      Object.keys(FAMILY).map(function (k) {
        const n = countIf({ family: k });
        return n ? chip('dfamily', k, FAMILY[k].emoji + ' ' + fmt.esc(FAMILY[k].ro), n,
          state.family === k) : '';
      }).join('');

    const timeChips = TIME_STOPS.map(function (t) {
      return chip('dtime', t.v, fmt.esc(t.ro), countIf({ maxTime: t.v }), state.maxTime === t.v);
    }).join('');

    const sortOptions = Object.keys(SORTS).map(function (k) {
      return '<option value="' + k + '"' + (state.sort === k ? ' selected' : '') + '>' +
        fmt.esc(SORTS[k].ro) + '</option>';
    }).join('');

    const list = visible();
    const famNote = state.family !== 'all' && FAMILY[state.family]
      ? '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
        fmt.esc(FAMILY[state.family].desc) + '</p>'
      : '';

    container.innerHTML =
      '<section class="pf-panel" style="margin-bottom:var(--sp-4)">' +
      '<div class="pf-panel__body">' +
      '<div class="pf-eyebrow">Ce poftă ai?</div>' +
      '<div class="pf-chips" style="margin:var(--sp-2) 0 var(--sp-4)">' + cravingChips + '</div>' +
      '<div class="pf-eyebrow">Cum îl faci</div>' +
      '<div class="pf-chips" style="margin:var(--sp-2) 0">' + familyChips + '</div>' + famNote +
      '<div class="pf-eyebrow" style="margin-top:var(--sp-4)">Cât timp ai</div>' +
      '<div class="pf-chips" style="margin-top:var(--sp-2)">' + timeChips + '</div>' +
      '</div></section>' +

      '<div class="pf-dbar">' +
      '<span class="pf-dbar__count"><b>' + list.length + '</b> / ' + ALL.length + ' deserturi</span>' +
      '<span class="pf-grow"></span>' +
      '<span class="pf-select pf-select--sm"><select id="pf-dsort" aria-label="Ordonează">' +
      sortOptions + '</select></span>' +
      '</div>' +

      (list.length
        ? '<div class="pf-grid">' + list.map(card).join('') + '</div>'
        : '<div class="pf-empty"><span class="pf-empty__icon">🍰</span>' +
          '<span class="pf-empty__title">Nimic cu filtrele astea</span>' +
          '<button class="pf-btn pf-btn--sm" data-dcraving="all">Arată tot</button></div>') +

      referenceSection();
  }

  /* =======================================================================
   * MODALUL CU REȚETA
   * ==================================================================== */
  let dlg = null;

  function ingredientRows(e) {
    return e.items.map(function (it) {
      const name = it.kind === 'atlas'
        ? '<a class="pf-link" href="index.html#food=' + fmt.esc(it.ref.id) + '" target="_blank" rel="noopener">' +
          fmt.esc(it.name) + '</a>'
        : fmt.esc(it.name);
      return '<tr><th>' + name +
        (it.free ? ' <span class="pf-muted" style="font-size:var(--fs-3xs)">(după gust)</span>' : '') +
        '</th><td class="num">' + Math.round(it.grams) + ' g</td>' +
        '<td class="num">' + fmt.num(it.protein, 1) + ' g</td>' +
        '<td class="num">' + Math.round(it.kcal) + '</td></tr>';
    }).join('');
  }

  function scoreBreakdown(d) {
    const c = d._e.cheat;
    if (!c) return '';
    const row = (label, delta, unit, good) =>
      '<tr><th>' + label + '</th><td class="num ' + (good ? 'is-good' : 'is-bad') + '">' +
      (delta > 0 ? '+' : '') + fmt.num(delta, Math.abs(delta) < 10 ? 1 : 0) + unit + '</td></tr>';

    return (
      '<table class="pf-nutri">' +
      row('Proteină câștigată', c.dProtein, ' g', c.dProtein > 0) +
      row('Zahăr economisit', c.dSugar, ' g', c.dSugar > 0) +
      row('Calorii economisite', c.dKcal, '', c.dKcal > 0) +
      '<tr><th>Cât de aproape e de original</th><td class="num">' +
      Math.round((d.taste && d.taste.authenticity) || 50) + ' / 100</td></tr>' +
      '</table>' +
      '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
      'Scorul de schimb cântărește proteina câștigată (40%), zahărul economisit (35%) și ' +
      'caloriile economisite (25%), apoi înmulțește totul cu cât de aproape e de desertul ' +
      'real. Un desert pe care nu-l mănânci cu plăcere nu înlocuiește nimic.</p>'
    );
  }

  function block(title, body) {
    return '<section class="pf-block"><h4 class="pf-block__title">' + fmt.esc(title) +
      '</h4><div class="pf-block__body">' + body + '</div></section>';
  }

  function list(items, cls) {
    if (!items || !items.length) return '';
    return '<ul class="pf-bullets' + (cls ? ' ' + cls : '') + '">' +
      items.map(x => '<li>' + fmt.esc(typeof x === 'string' ? x : x.text) + '</li>').join('') + '</ul>';
  }

  function dialogHtml(d) {
    const e = d._e;
    const per = e.perServing;
    const fam = FAMILY[d.family] || { ro: d.family, emoji: '🍰' };

    const steps = '<ol class="pf-steps">' +
      (d.steps || []).map(x => '<li>' + fmt.esc(x) + '</li>').join('') + '</ol>';

    const swaps = (d.swaps || []).length
      ? '<dl class="pf-swaps">' + d.swaps.map(sw =>
          '<dt>' + fmt.esc(sw.label) + '</dt><dd>' + fmt.esc(sw.text) + '</dd>').join('') + '</dl>'
      : '';

    const nutri =
      '<table class="pf-nutri">' +
      '<tr><th>Proteină</th><td class="num">' + fmt.num(per.protein, 1) + ' g</td></tr>' +
      (e.collagenShare > 0
        ? '<tr><th>din care utilizabilă</th><td class="num">' + fmt.num(e.usableProtein, 1) + ' g</td></tr>'
        : '') +
      '<tr><th>Calorii</th><td class="num">' + Math.round(per.kcal) + '</td></tr>' +
      '<tr><th>Carbohidrați</th><td class="num">' + fmt.num(per.carbs, 1) + ' g</td></tr>' +
      '<tr><th>din care zaharuri</th><td class="num">' + fmt.num(per.sugars, 1) + ' g</td></tr>' +
      (per.polyol > 0.5
        ? '<tr><th>din care polioli</th><td class="num">' + fmt.num(per.polyol, 1) + ' g</td></tr>' : '') +
      '<tr><th>Grăsimi</th><td class="num">' + fmt.num(per.fat, 1) + ' g</td></tr>' +
      '<tr><th>Fibre</th><td class="num">' + fmt.num(per.fiber, 1) + ' g</td></tr>' +
      '<tr><th>% din calorii din proteină</th><td class="num">' + Math.round(e.purityPct) + '%</td></tr>' +
      '</table>';

    const timing = d.time
      ? (d.time.active || 0) + ' min de muncă' +
        (d.time.chill ? ' + ' + d.time.chill + ' min de așteptare' : '') +
        (d.time.total ? ' · ' + d.time.total + ' min în total' : '')
      : '';

    return (
      '<div class="pf-modal__head">' +
      '<span class="pf-modal__icon">' + fmt.esc(d.emoji || '🍰') + '</span>' +
      '<div><h2 id="pf-dessert-title" class="pf-modal__title">' + fmt.esc(d.name) + '</h2>' +
      '<p class="pf-modal__sub">' + fam.emoji + ' ' + fmt.esc(fam.ro) + ' · ' +
      fmt.esc(timing) + ' · ' + d.servings + ' porții</p></div>' +
      '<button class="pf-modal__close" data-dessert-close aria-label="Închide">✕</button>' +
      '</div>' +

      '<div class="pf-modal__body">' +
      versus(d) +
      honesty(d) +
      block('Ingrediente',
        '<table class="pf-nutri"><thead><tr><th>Ingredient</th><th class="num">Cantitate</th>' +
        '<th class="num">Proteină</th><th class="num">kcal</th></tr></thead><tbody>' +
        ingredientRows(e) + '</tbody></table>' +
        '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
        'Pentru ' + d.servings + ' porții. Produsele subliniate se deschid în atlas.</p>') +
      block('Cum se face', steps) +
      (d.tips && d.tips.length ? block('Ce contează', list(d.tips)) : '') +
      (swaps ? block('Variante', swaps) : '') +
      block('Pe porție', nutri) +
      block('De ce e un schimb bun', scoreBreakdown(d)) +
      (d.storage ? block('Cum se păstrează', '<p>' + fmt.esc(d.storage) + '</p>') : '') +
      '</div>'
    );
  }

  function ensureDialog() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.className = 'pf-modal';
    dlg.setAttribute('aria-labelledby', 'pf-dessert-title');
    document.body.appendChild(dlg);
    dlg.addEventListener('mousedown', function (ev) { if (ev.target === dlg) dlg.close(); });
    dlg.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-dessert-close]')) dlg.close();
    });
    return dlg;
  }

  function open(id) {
    const d = ALL.filter(x => x.id === id)[0];
    if (!d) return;
    ensureDialog();
    dlg.innerHTML = dialogHtml(d);
    if (!dlg.open) dlg.showModal();
    const body = dlg.querySelector('.pf-modal__body');
    if (body) body.scrollTop = 0;
  }

  function boot() {
    ALL = (window.PF_DESSERTS || []).map(function (d) {
      const copy = Object.assign({}, d);
      copy._e = enrich(d);
      return copy;
    });
    PF.data.desserts = ALL;
    return ALL.length;
  }


  /* =======================================================================
   * PORNIREA PAGINII
   *
   * Pagina asta e separată de atlas intenționat. Atlasul răspunde la „ce
   * cumpăr"; asta răspunde la „e 22:00 și vreau ceva dulce". Sunt două stări
   * mintale diferite și n-au ce căuta în aceeași bară de file — mai ales că
   * bara aia deja derulează orizontal pe telefon la șapte file.
   *
   * Datele atlasului se încarcă totuși integral, pentru că ingredientele
   * trimit la produse reale din el. Service worker-ul le are deja în cache,
   * iar parsarea lor costă ~11 ms.
   * ==================================================================== */
  function repaint() {
    const host = document.getElementById('pf-desserts');
    if (!host) return;
    const y = window.scrollY;
    render(host);
    window.scrollTo(0, y);
  }

  function wire() {
    document.addEventListener('click', function (ev) {
      const t = ev.target;
      if (!t || !t.closest) return;

      const openBtn = t.closest('[data-dessert-open]');
      if (openBtn) { open(openBtn.getAttribute('data-dessert-open')); return; }

      if (t.closest('[data-dref-toggle]')) { refOpen = !refOpen; repaint(); return; }
      const rs = t.closest('[data-dref-sort]');
      if (rs) { refSort = rs.getAttribute('data-dref-sort'); repaint(); return; }

      const cr = t.closest('[data-dcraving]');
      if (cr) { state.craving = cr.getAttribute('data-dcraving'); repaint(); return; }

      const fa = t.closest('[data-dfamily]');
      if (fa) { state.family = fa.getAttribute('data-dfamily'); repaint(); return; }

      const ti = t.closest('[data-dtime]');
      if (ti) { state.maxTime = Number(ti.getAttribute('data-dtime')); repaint(); return; }

      /* A click anywhere on the card opens it, except on the controls that
       * already did something — otherwise the whole card is a dead zone. */
      const card = t.closest('[data-dessert]');
      if (card && !t.closest('a,button')) { open(card.getAttribute('data-dessert')); }
    });

    document.addEventListener('change', function (ev) {
      if (ev.target && ev.target.id === 'pf-dsort') {
        state.sort = ev.target.value;
        repaint();
      }
    });

    document.addEventListener('keydown', function (ev) {
      const card = document.activeElement;
      if ((ev.key === 'Enter' || ev.key === ' ') && card && card.hasAttribute &&
          card.hasAttribute('data-dessert')) {
        ev.preventDefault();
        open(card.getAttribute('data-dessert'));
      }
    });
  }

  function mount() {
    /* The atlas products must be enriched before dessert ingredients can read
     * their macros — same pipeline the main app runs at boot. */
    const foods = window.PF_FOODS || [];
    PF.data = PF.data || {};
    PF.data.foods = foods;
    PF.data.byId = {};
    foods.forEach(function (f) {
      f.unit = f.unit === 'ml' ? 'ml' : 'g';
      f.tags = f.tags || []; f.stores = f.stores || []; f.timing = f.timing || {};
      f.diet = f.diet || {}; f.taste = f.taste || {};
      f.cooking = f.cooking || { method: 'none', steps: [], equipment: [] };
      f.serving = f.serving || { grams: 100, label: '100 ' + f.unit };
      f._d = PF.compute.enrich(f);
      PF.data.byId[f.id] = f;
    });

    const n = boot();
    wire();
    repaint();

    const count = document.getElementById('pf-dessert-count');
    if (count) count.textContent = n;
    return n;
  }

  PF.desserts = {
    boot: boot,
    mount: mount,
    repaint: repaint,
    render: render,
    open: open,
    card: card,
    visible: visible,
    state: state,
    enrich: enrich,
    cheatScore: cheatScore,
    all: function () { return ALL; },
    FAMILY: FAMILY,
    CRAVING: CRAVING
  };
})();
