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

  /* Două linii, două întrebări diferite. Linia proteică întreabă „cât câștig
   * față de desertul real"; linia ușoară întreabă „cât de puțin mă costă pofta".
   * Un desert de 70 kcal din gelatină și fructe ar pica orice test proteic,
   * iar un cheesecake de 300 kcal cu 30 g de proteină ar pica orice test de
   * calorii — de aceea fiecare linie are scorul ei, nu un scor comun. */
  const LINES = {
    light: {
      ro: 'Ușoare', emoji: '🍃', hash: 'usoare',
      lede: 'Sub ~150 kcal pe porție. Ou, gelatină, fructe, lactate slabe — dulce din fructe și miere, mult volum.'
    },
    protein: {
      ro: 'Proteice', emoji: '💪', hash: 'proteice',
      lede: 'Minimum 15 g de proteină pe porție. Deserturile clasice, refăcute pe skyr, brânză, albuș și proteină de soia — fără zer și fără cazeină.'
    }
  };
  const lineOf = d => (d.line === 'light' ? 'light' : 'protein');

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
        addedSugar: 0,
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
      key: i.p,
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
      addedSugar: p.freeSugar ? (p.sugars || 0) * k : 0,
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
   * SCORUL LINIEI UȘOARE
   *
   * Aici proteina nu e motivul pentru care exiști. Desertul ușor câștigă când
   * costă puțin pentru aceeași poftă, așa că ponderile se mută:
   *
   *   calorii economisite, relativ la original ........ 0,30
   *   zahăr ADĂUGAT economisit ........................ 0,30
   *   densitate energetică (kcal/g) ................... 0,20
   *   proteină (gelatina contează pe jumătate) ........ 0,10
   *   fibre ........................................... 0,10
   *
   * Nicio rețetă nu folosește îndulcitori fără zahăr (eritritol, xilitol,
   * stevie, sucraloză) — e o regulă a proiectului, păzită de tools/check.js.
   * Dulcele vine din miere, fructe, curmale sau zahăr, iar tot ce nu e fruct
   * întreg se numără la zahărul adăugat. De aceea zahărul adăugat cântărește
   * cât caloriile.
   *
   * Zahărul ADĂUGAT, nu cel total. OMS numără ca „zahăr liber" zahărul,
   * mierea, siropurile și sucurile — nu zahărul din fructul întreg sau
   * lactoza. Un scor care penalizează un măr copt pentru zahărul mărului ar
   * fi exact pe dos. Zahărul total rămâne totuși pe card, cu cifra lui.
   *
   * Densitatea energetică e axa pe care lucrează studiile lui Rolls: sub
   * ~0,6 kcal/g (fructe, compot, spumă) mănânci un bol întreg pentru
   * caloriile unei felii mici. Peste 2 kcal/g nu mai primește nimic.
   *
   * Gelatina ia jumătate din credit: proteina ei nu construiește nimic
   * (zero triptofan), dar sătură — Veldhorst 2009 a măsurat ~20% mai puțin
   * mâncat la prânz după un mic dejun cu gelatină.
   *
   * Autenticitatea se înmulțește la fel ca la linia proteică, cu același
   * plafon de 0,6 — altfel benzile de culoare (75 / 55) ar însemna altceva
   * pe fiecare filă și un jeleu de 60 kcal ar ieși „slab" doar pentru că nu
   * e o prăjitură. Poliolii — doar din produsele de atlas care îi au pe
   * etichetă, ca ciocolata proteică — scad la final, în puncte:
   * 0 · ≤10 g −2 · ≤20 g −6 · peste −15.
   * ==================================================================== */
  const LIGHT_KCAL_CAP = 150;
  const LIGHT_W = { kcal: 0.30, sugar: 0.30, density: 0.20, protein: 0.10, fiber: 0.10 };

  function lightScore(per, grams, vs, authenticity, extra) {
    if (!vs) return null;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    const dKcal = (vs.kcal || 0) - per.kcal;
    /* The real dessert's sugar is almost all added — a cofetărie cake's
     * lactose is a rounding error next to its syrup. */
    const vsAdded = vs.sugars || 0;
    const density = grams > 0 ? per.kcal / grams : 4;
    const completeProtein = per.protein - 0.5 * (extra.collagenProtein || 0);

    const parts = {
      kcal: vs.kcal > 0 ? clamp(dKcal / vs.kcal, 0, 1) : 0,
      sugar: vsAdded > 0 ? clamp((vsAdded - per.addedSugar) / vsAdded, 0, 1) : 1,
      density: clamp((2.0 - density) / 1.4, 0, 1),
      protein: clamp(completeProtein / 15, 0, 1),
      fiber: clamp(per.fiber / 5, 0, 1)
    };
    const base = Object.keys(LIGHT_W).reduce((sum, k) => sum + LIGHT_W[k] * parts[k], 0);
    const auth = AUTHENTICITY_FLOOR + (1 - AUTHENTICITY_FLOOR) * (clamp(authenticity || 50, 0, 100) / 100);
    const polyolPenalty = per.polyol <= 0.5 ? 0 : per.polyol <= 10 ? 2 : per.polyol <= 20 ? 6 : 15;

    return {
      score: Math.max(0, Math.round(base * auth * 100 - polyolPenalty)),
      dKcal: Math.round(dKcal),
      dSugar: Math.round((vsAdded - per.addedSugar) * 10) / 10,
      dProtein: Math.round((per.protein - (vs.protein || 0)) * 10) / 10,
      density: Math.round(density * 100) / 100,
      polyolPenalty: polyolPenalty,
      parts: parts,
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

    const tot = { kcal: 0, protein: 0, carbs: 0, sugars: 0, addedSugar: 0, fat: 0, fiber: 0, polyol: 0, ron: 0 };
    let collagenProtein = 0;
    let anyPriceMissing = false;

    items.forEach(function (it) {
      tot.kcal += it.kcal; tot.protein += it.protein; tot.carbs += it.carbs;
      tot.sugars += it.sugars; tot.fat += it.fat; tot.fiber += it.fiber;
      tot.polyol += it.polyol; tot.addedSugar += it.addedSugar;
      if (it.collagen) collagenProtein += it.protein;
      if (it.free) return;
      if (it.ron === null) anyPriceMissing = true; else tot.ron += it.ron;
    });

    const per = {};
    Object.keys(tot).forEach(k => { per[k] = tot[k] / servings; });

    /* Protein the body can actually build with. Collagen counts on the label
     * and not here — the same correction the atlas applies to its rankings. */
    const usableProtein = (tot.protein - collagenProtein) / servings;

    /* Ingredient weight is the right serving weight for almost everything
     * here — except where the oven takes the water out. 360 g of apple come
     * out as 50 g of chips; dividing kcal by 184 g per serving would make them
     * look four times lighter per bite than they are. `yieldG` is the finished
     * weight of the whole batch, declared only where it differs. */
    const grams = (d.yieldG > 0 ? d.yieldG : items.reduce((s, i) => s + i.grams, 0)) / servings;
    const proteinKcal = per.protein * 4;
    const purity = per.kcal > 0 ? (proteinKcal / per.kcal) * 100 : 0;

    const isLight = lineOf(d) === 'light';
    const cheat = isLight
      ? lightScore(per, grams, d.vs, d.taste && d.taste.authenticity,
          { collagenProtein: collagenProtein / servings })
      : cheatScore(per, d.vs, d.taste && d.taste.authenticity);

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
        lowProtein: !isLight && per.protein < 15,
        heavy: per.kcal > (isLight ? LIGHT_KCAL_CAP : 350),
        /* A 30-kcal "dessert" of 40 g wins every ratio and satisfies nobody. */
        tinyPortion: isLight && grams < 60 && per.kcal < 50
      }
    };
  }


  /* =======================================================================
   * STARE ȘI FILTRARE
   *
   * Deliberat mult mai simplă decât rail-ul atlasului. Aici nu cauți printre
   * 503 produse cu 26 de fațete — ai o poftă, ai un timp disponibil, atât.
   * ==================================================================== */
  const state = { line: 'light', craving: 'all', family: 'all', maxTime: 0, sort: 'cheat', seasonal: false };

  /* `season` lists the months a recipe's fruit is cheap and good in Sibiu.
   * Recipes without it are year-round — frozen fruit, milk, eggs — and are
   * never "out of season", so they never get the badge either. */
  const MONTHS_RO = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie',
    'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
  const thisMonth = () => new Date().getMonth() + 1;
  const inSeason = d => !!(d.season && d.season.indexOf(thisMonth()) !== -1);

  const TIME_STOPS = [
    { v: 0, ro: 'Oricât' },
    { v: 5, ro: 'Sub 5 min' },
    { v: 15, ro: 'Sub 15 min' },
    { v: 40, ro: 'Sub 40 min' }
  ];

  /* `lines` says where a sort makes sense. "Most protein" on a list of
   * 60-kcal jellies ranks gelatine first — true and useless. */
  const SORTS = {
    cheat:   { ro: 'Cel mai bun schimb', get: d => (d._e.cheat ? d._e.cheat.score : 0) },
    protein: { ro: 'Cea mai multă proteină', get: d => d._e.perServing.protein, lines: ['protein'] },
    quick:   { ro: 'Cel mai rapid', get: d => -(d.time ? d.time.active : 999) },
    light:   { ro: 'Cele mai puține calorii', get: d => -d._e.perServing.kcal },
    volume:  { ro: 'Cea mai mare porție la calorie', lines: ['light'],
               get: d => (d._e.perServing.kcal > 0 ? d._e.servingGrams / d._e.perServing.kcal : 0) },
    sugar:   { ro: 'Cel mai puțin zahăr', get: d => -d._e.perServing.sugars }
  };
  const sortFits = k => !SORTS[k].lines || SORTS[k].lines.indexOf(state.line) !== -1;

  /** Active time is what people actually budget for; chilling is not work. */
  function activeTime(d) {
    return d.time ? (d.time.active || d.time.total || 0) : 0;
  }

  function matches(d) {
    if (lineOf(d) !== state.line) return false;
    if (state.craving !== 'all' && d.craving !== state.craving) return false;
    if (state.family !== 'all' && d.family !== state.family) return false;
    if (state.maxTime && activeTime(d) > state.maxTime) return false;
    if (state.seasonal && !inSeason(d)) return false;
    return true;
  }

  function visible() {
    const get = (SORTS[state.sort] && sortFits(state.sort) ? SORTS[state.sort] : SORTS.cheat).get;
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

    /* One precision for the pair. Chosen per value, a bar reading 8.5 sat
     * beside one reading 24 — and the pair exists to be compared. */
    const dp = Math.max(ours, theirs) < 10 ? 1 : 0;
    return (
      '<div class="pf-vs__row">' +
      '<span class="pf-vs__label">' + fmt.esc(label) + '</span>' +
      '<span class="pf-vs__bars">' +
      '<span class="pf-vs__bar pf-vs__bar--ours' + (win ? ' is-win' : '') + '">' +
      '<i style="width:' + oursPct.toFixed(1) + '%"></i>' +
      '<b>' + fmt.dec(ours, dp) + unit + '</b></span>' +
      '<span class="pf-vs__bar pf-vs__bar--theirs">' +
      '<i style="width:' + theirsPct.toFixed(1) + '%"></i>' +
      '<b>' + fmt.dec(theirs, dp) + unit + '</b></span>' +
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
      /* The light line leads with what it is for. Protein moves to the end
       * there and fat takes its middle slot: a 70-kcal jelly "losing" on
       * protein to a cheesecake is true, and also beside the point. */
      (lineOf(d) === 'light'
        ? versusRow('Calorii', per.kcal, d.vs.kcal || 0, '', false) +
          versusRow('Zahăr adăugat', per.addedSugar, d.vs.sugars || 0, ' g', false) +
          versusRow('Grăsimi', per.fat, d.vs.fat || 0, ' g', false)
        : versusRow('Proteină', per.protein, d.vs.protein || 0, ' g', true) +
          versusRow('Zahăr', per.sugars, d.vs.sugars || 0, ' g', false) +
          versusRow('Calorii', per.kcal, d.vs.kcal || 0, '', false)) +
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
    const light = lineOf(d) === 'light';

    if (f.highPolyol) {
      out.push({ k: 'warn', t: Math.round(e.perServing.polyol) +
        ' g polioli pe porție — peste ~15 g mulți oameni au probleme digestive' });
    }
    if (f.highSugar) {
      out.push({ k: 'warn', t: Math.round(e.perServing.sugars) +
        ' g zahăr pe porție. E un desert cu zahăr, doar unul cu proteină în el' });
    }
    /* On the protein line, gelatine protein is a broken promise. On the light
     * line nobody was promised protein: there it is a footnote, not an alarm. */
    if (f.collagen && light) {
      out.push({ k: 'info', t: Math.round(e.collagenShare * 100) +
        '% din proteină e gelatină — ajută la sațietate, nu se pune la ținta zilnică' });
    } else if (f.collagen) {
      out.push({ k: 'bad', t: Math.round(e.collagenShare * 100) +
        '% din proteină vine din gelatină — nu se pune la ținta zilnică' });
    }
    if (f.lowProtein) {
      out.push({ k: 'warn', t: 'Sub 15 g proteină pe porție — e mai aproape de un desert obișnuit' });
    }
    if (f.tinyPortion) {
      out.push({ k: 'warn', t: 'Porție mică: ' + e.servingGrams + ' g. Cifrele arată bine pentru că e puțin, ' +
        'nu pentru că e ușor' });
    }
    if (f.heavy && lineOf(d) === 'light') {
      out.push({ k: 'warn', t: Math.round(e.perServing.kcal) + ' kcal pe porție — peste ținta de ' +
        LIGHT_KCAL_CAP + ' a secțiunii ușoare' });
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
    const light = lineOf(d) === 'light';

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
      (inSeason(d) ? '<span class="pf-badge pf-badge--season">🍂 în sezon</span>' : '') +
      '</span></span>' +
      (sc !== null
        ? '<span class="pf-dscore' + band + '" title="Cât de bun e schimbul față de desertul real">' +
          '<b>' + sc + '</b><span>schimb</span></span>'
        : '') +
      '</header>' +

      '<div class="pf-dcard__hero">' +
      (light
        ? '<span class="pf-dcard__protein pf-dcard__protein--kcal"><b>' + Math.round(per.kcal) +
          '</b><span>kcal<br>pe porție</span></span>' +
          '<span class="pf-dcard__nums">' +
          /* Total and added side by side: an apple's sugar is still sugar,
           * and hiding it behind "0 g added" would be the same trick the
           * "fără zahăr adăugat" labels play. */
          '<span><b>' + fmt.dec(per.sugars, 1) + '</b> g zahăr' +
          (per.sugars >= 1 ? ' (<b>' + fmt.dec(per.addedSugar, 1) + '</b> adăugat)' : '') + '</span>' +
          '<span><b>' + fmt.dec(per.protein, 1) + '</b> g proteină</span>' +
          (per.fiber >= 1 ? '<span><b>' + fmt.dec(per.fiber, 1) + '</b> g fibre</span>' : '')
        : '<span class="pf-dcard__protein"><b>' + Math.round(per.protein) +
          '</b><span>g proteină<br>pe porție</span></span>' +
          '<span class="pf-dcard__nums">' +
          '<span><b>' + Math.round(per.kcal) + '</b> kcal</span>' +
          '<span><b>' + fmt.dec(per.sugars, 1) + '</b> g zahăr</span>') +
      /* Polyols get the same billing as sugar. The 15 g threshold is reached
       * by stacking three ordinary ingredients, without anyone deciding to
       * use "a lot of sweetener" — so the number has to be on the card, not
       * only in a warning that fires after the fact. */
      (per.polyol >= 2
        ? '<span><b>' + fmt.dec(per.polyol, 1) + '</b> g polioli</span>'
        : '') +
      '<span><b>' + Math.round(e.servingGrams) + '</b> g porția</span>' +
      /* When part of the protein is gelatine, the headline number above is
       * the label's number, not the body's. Both belong on the card. */
      (e.collagenShare > 0.02
        ? '<span class="pf-dcard__usable"><b>' + fmt.dec(e.usableProtein, 1) +
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
      '<td class="num">' + fmt.decFixed(per.protein || 0, 1) + '</td>' +
      '<td class="num pf-refrow__sugar">' + fmt.decFixed(per.sugars || 0, 1) + '</td>' +
      '<td class="num">' + fmt.decFixed(per.fat || 0, 1) + '</td>' +
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
          ' au o variantă în pagina asta, ușoară sau proteică. Coloana de încredere spune ' +
          'cât de sigure sunt valorile — un baton ambalat are tabel nutrițional, ' +
          'un papanaș de cofetărie nu.</p>' +
          '<div class="pf-chips" style="margin-bottom:var(--sp-3)">' +
          tab('sugars', 'După zahăr') + tab('kcal', 'După calorii') +
          tab('protein', 'După proteină') + tab('name', 'Alfabetic') +
          '</div>' +
          '<div class="pf-reftable-wrap"><table class="pf-nutri pf-reftable">' +
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

    const nSeason = countIf({ seasonal: true });
    const seasonChip = nSeason
      ? chip('dseason', state.seasonal ? '0' : '1', '🍂 De sezon în ' + MONTHS_RO[thisMonth() - 1],
          nSeason, state.seasonal)
      : '';

    const sortOptions = Object.keys(SORTS).filter(sortFits).map(function (k) {
      return '<option value="' + k + '"' + (state.sort === k ? ' selected' : '') + '>' +
        fmt.esc(SORTS[k].ro) + '</option>';
    }).join('');

    /* The two lines are the first decision on the page, so they are tabs,
     * not a ninth chip lost among the cravings. Counts are the raw size of
     * each line — the filters below apply inside a line, not across. */
    const lineTabs = Object.keys(LINES).map(function (k) {
      const L = LINES[k];
      const n = ALL.filter(d => lineOf(d) === k).length;
      const on = state.line === k;
      return '<button class="pf-dline' + (on ? ' is-on' : '') + '" role="tab" aria-selected="' +
        on + '" data-dline="' + k + '">' +
        '<span class="pf-dline__top"><span class="pf-dline__emoji">' + L.emoji + '</span>' +
        '<b>' + fmt.esc(L.ro) + '</b><span class="pf-chip__n">' + n + '</span></span>' +
        '<span class="pf-dline__lede">' + fmt.esc(L.lede) + '</span></button>';
    }).join('');
    const lineTotal = ALL.filter(d => lineOf(d) === state.line).length;

    const list = visible();
    const famNote = state.family !== 'all' && FAMILY[state.family]
      ? '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
        fmt.esc(FAMILY[state.family].desc) + '</p>'
      : '';

    container.innerHTML =
      '<div class="pf-dlines" role="tablist" aria-label="Felul de desert">' + lineTabs + '</div>' +
      '<section class="pf-panel" style="margin-bottom:var(--sp-4)">' +
      '<div class="pf-panel__body">' +
      '<div class="pf-eyebrow">Ce poftă ai?</div>' +
      '<div class="pf-chips" style="margin:var(--sp-2) 0 var(--sp-4)">' + cravingChips + '</div>' +
      '<div class="pf-eyebrow">Cum îl faci</div>' +
      '<div class="pf-chips" style="margin:var(--sp-2) 0">' + familyChips + '</div>' + famNote +
      '<div class="pf-eyebrow" style="margin-top:var(--sp-4)">Cât timp ai</div>' +
      '<div class="pf-chips" style="margin-top:var(--sp-2)">' + timeChips + seasonChip + '</div>' +
      '</div></section>' +

      '<div class="pf-dbar">' +
      '<span class="pf-dbar__count"><b>' + list.length + '</b> / ' + lineTotal + ' deserturi ' +
      fmt.esc(LINES[state.line].ro.toLowerCase()) + '</span>' +
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
        '<td class="num">' + fmt.decFixed(it.protein, 1) + ' g</td>' +
        '<td class="num">' + Math.round(it.kcal) + '</td></tr>';
    }).join('');
  }

  function scoreBreakdown(d) {
    const c = d._e.cheat;
    if (!c) return '';
    /* Precision per quantity, not per value. It used to be
     * `Math.abs(delta) < 10 ? 1 : 0`, so the SAME quantity printed 6,2 for one
     * dessert and 24 for the next. Grams take one decimal so the two gram rows
     * align with each other; calories take none, because a calorie count is a
     * whole number everywhere else in the app and "162,0 kcal" claims a
     * precision the figure does not have. */
    const row = (label, delta, unit, good, dp) =>
      '<tr><th>' + label + '</th><td class="num ' + (good ? 'is-good' : 'is-bad') + '">' +
      (delta > 0 ? '+' : '') + fmt.decFixed(delta, dp) + unit + '</td></tr>';

    if (lineOf(d) === 'light') {
      const per = d._e.perServing;
      return (
        '<table class="pf-nutri">' +
        row('Calorii economisite', c.dKcal, '', c.dKcal > 0, 0) +
        row('Zahăr adăugat economisit', c.dSugar, ' g', c.dSugar > 0, 1) +
        '<tr><th>Densitate energetică</th><td class="num ' + (c.density <= 1.0 ? 'is-good' : '') + '">' +
        fmt.decFixed(c.density, 2) + ' kcal/g</td></tr>' +
        '<tr><th>Proteină · fibre</th><td class="num">' + fmt.decFixed(per.protein, 1) + ' g · ' +
        fmt.decFixed(per.fiber, 1) + ' g</td></tr>' +
        (c.polyolPenalty > 0
          ? '<tr><th>Penalizare polioli (' + fmt.decFixed(per.polyol, 1) + ' g)</th>' +
            '<td class="num is-bad">−' + c.polyolPenalty + ' puncte</td></tr>'
          : '') +
        '<tr><th>Cât de aproape e de original</th><td class="num">' +
        Math.round((d.taste && d.taste.authenticity) || 50) + ' / 100</td></tr>' +
        '</table>' +
        '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
        'Scorul ușor cântărește caloriile economisite (30%), zahărul adăugat economisit (30%), ' +
        'densitatea energetică — câte calorii are un gram (20%) —, proteina (10%, gelatina pe ' +
        'jumătate) și fibrele (10%), apoi se înmulțește cu cât de aproape e de desertul real. ' +
        'Mierea, siropul și zahărul se socotesc adăugate; zahărul din fructul întreg și lactoza ' +
        'nu, după definiția OMS.</p>'
      );
    }

    return (
      '<table class="pf-nutri">' +
      row('Proteină câștigată', c.dProtein, ' g', c.dProtein > 0, 1) +
      row('Zahăr economisit', c.dSugar, ' g', c.dSugar > 0, 1) +
      row('Calorii economisite', c.dKcal, '', c.dKcal > 0, 0) +
      '<tr><th>Cât de aproape e de original</th><td class="num">' +
      Math.round((d.taste && d.taste.authenticity) || 50) + ' / 100</td></tr>' +
      '</table>' +
      '<p class="pf-muted" style="font-size:var(--fs-xs);margin-top:var(--sp-2)">' +
      'Scorul de schimb cântărește proteina câștigată (40%), zahărul economisit (35%) și ' +
      'caloriile economisite (25%), apoi înmulțește totul cu cât de aproape e de desertul ' +
      'real. Un desert pe care nu-l mănânci cu plăcere nu înlocuiește nimic.</p>'
    );
  }

  /* `pf-block__head` — not `pf-block__title`. The shared block in ui.js styles
   * its heading with that class, and ui.js is not loaded on this page, so this
   * page hand-rolls the markup. Naming the class anything else leaves the
   * heading with no rule at all: no inset strip, no caps, and no left padding
   * to match `.pf-block__body`, so the title hangs 16px left of its own
   * content. An h4 is safe here — the reset zeroes heading margins and makes
   * size and weight inherit, so the class supplies the whole treatment. */
  function block(title, body) {
    return '<section class="pf-block"><h4 class="pf-block__head">' + fmt.esc(title) +
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
      '<tr><th>Proteină</th><td class="num">' + fmt.decFixed(per.protein, 1) + ' g</td></tr>' +
      (e.collagenShare > 0
        ? '<tr><th>din care utilizabilă</th><td class="num">' + fmt.decFixed(e.usableProtein, 1) + ' g</td></tr>'
        : '') +
      '<tr><th>Calorii</th><td class="num">' + Math.round(per.kcal) + '</td></tr>' +
      '<tr><th>Carbohidrați</th><td class="num">' + fmt.decFixed(per.carbs, 1) + ' g</td></tr>' +
      '<tr><th>din care zaharuri</th><td class="num">' + fmt.decFixed(per.sugars, 1) + ' g</td></tr>' +
      '<tr><th>din care adăugate</th><td class="num">' + fmt.decFixed(per.addedSugar, 1) + ' g</td></tr>' +
      (per.polyol > 0.5
        ? '<tr><th>din care polioli</th><td class="num">' + fmt.decFixed(per.polyol, 1) + ' g</td></tr>' : '') +
      '<tr><th>Grăsimi</th><td class="num">' + fmt.decFixed(per.fat, 1) + ' g</td></tr>' +
      '<tr><th>Fibre</th><td class="num">' + fmt.decFixed(per.fiber, 1) + ' g</td></tr>' +
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
      '<p class="pf-modal__subtitle">' + LINES[lineOf(d)].emoji + ' ' + fmt.esc(LINES[lineOf(d)].ro) +
      ' · ' + fam.emoji + ' ' + fmt.esc(fam.ro) + ' · ' +
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
      (d.tips && d.tips.length ? block('Ce contează', list(d.tips, 'pf-bullets--tips')) : '') +
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

  /* The line lives in the hash so a link can open straight onto it —
   * deserturi.html#usoare — and Back returns to the line you came from.
   * Filters reset on a switch: a "crocant" filter carried into a list that
   * has no crunchy desserts shows an empty page and no reason why. */
  function lineFromHash() {
    const h = (location.hash || '').replace('#', '');
    const hit = Object.keys(LINES).filter(k => LINES[k].hash === h)[0];
    return hit || null;
  }

  function setLine(k, push) {
    if (!LINES[k] || k === state.line) return;
    state.line = k;
    state.craving = 'all';
    state.family = 'all';
    state.seasonal = false;
    if (!sortFits(state.sort)) state.sort = 'cheat';
    if (push) {
      try { history.replaceState(null, '', '#' + LINES[k].hash); } catch (e) { /* file:// */ }
    }
    repaint();
  }

  function wire() {
    window.addEventListener('hashchange', function () {
      const k = lineFromHash();
      if (k) setLine(k, false);
    });

    document.addEventListener('click', function (ev) {
      const t = ev.target;
      if (!t || !t.closest) return;

      const openBtn = t.closest('[data-dessert-open]');
      if (openBtn) { open(openBtn.getAttribute('data-dessert-open')); return; }

      const ln = t.closest('[data-dline]');
      if (ln) { setLine(ln.getAttribute('data-dline'), true); return; }

      if (t.closest('[data-dref-toggle]')) { refOpen = !refOpen; repaint(); return; }
      const rs = t.closest('[data-dref-sort]');
      if (rs) { refSort = rs.getAttribute('data-dref-sort'); repaint(); return; }

      const cr = t.closest('[data-dcraving]');
      if (cr) { state.craving = cr.getAttribute('data-dcraving'); repaint(); return; }

      const fa = t.closest('[data-dfamily]');
      if (fa) { state.family = fa.getAttribute('data-dfamily'); repaint(); return; }

      const se = t.closest('[data-dseason]');
      if (se) { state.seasonal = se.getAttribute('data-dseason') === '1'; repaint(); return; }

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
    state.line = lineFromHash() || 'light';
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
    lightScore: lightScore,
    all: function () { return ALL; },
    LINES: LINES,
    FAMILY: FAMILY,
    CRAVING: CRAVING
  };
})();
