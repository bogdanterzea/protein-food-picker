/* =========================================================================
 * PROTEIN ATLAS SIBIU — DERIVED METRICS
 *
 * Every number the UI ranks, sorts or colours by is computed HERE, once,
 * at boot. Nothing downstream is allowed to invent its own scoring.
 *
 * The scoring philosophy, in one paragraph:
 *   "High protein" is not one number. A whey isolate wins on purity but
 *   loses on satiety and cost. Dry lentils win on cost but lose on the fact
 *   that you have to cook them for 25 minutes and they weigh 2.3x more
 *   once cooked. Rotisserie chicken wins on effort but loses on price.
 *   So we compute SIX independent axes, show all six as bars, and only
 *   then collapse them into one tier letter — with the weights written
 *   down in the open so you can disagree with them.
 *
 * Attaches to window.PF.compute
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});

  /* The same clamp the formatters use. format.js is loaded first (index.html
   * and tools/test-compute.js both order it that way), so this is a binding,
   * not a second implementation — there used to be a private copy here that
   * had to be kept in step with fmt.clamp by hand. */
  const clamp = PF.fmt.clamp;

  /* =======================================================================
   * CALIBRATION CONSTANTS
   * Change these and the whole atlas re-ranks. They are the opinions.
   * ==================================================================== */
  const CAL = {
    /* A food hits a full protein bar at this many grams per 100 g.
     * 30 g/100 g is roughly cooked chicken breast / hard cheese / tuna.
     * Powders (70–90 g) sail past it and simply cap at 100. */
    proteinFullBar: 30,

    /* Share of calories from protein for a full purity bar.
     * 80% is about egg white, whey isolate, plain cod. Nothing beats it
     * in the real world, so 80 is the practical ceiling. */
    purityFullBar: 80,

    /* Cost calibration, RON per 100 g of pure protein.
     * ~2.5 RON/100 g protein  = dry legumes, milk powder, eggs on offer.
     * ~80  RON/100 g protein  = restaurant food, pharmacy supplements.
     * Mapped on a log scale because the distribution is heavily skewed. */
    costBest: 2.5,
    costWorst: 80,

    /* Time calibration for the speed bar. */
    timeFullBar: 0,
    timeZeroBar: 75,

    /* Tier cutoffs on the composite score. */
    tiers: [
      { letter: 'S', min: 80 },
      { letter: 'A', min: 68 },
      { letter: 'B', min: 56 },
      { letter: 'C', min: 44 },
      { letter: 'D', min: 30 },
      { letter: 'E', min: -Infinity }
    ],

    /* Composite weights. Must sum to 1. */
    weights: {
      proteinAmount: 0.28, // grams per 100 g
      purity:        0.24, // share of calories from protein
      value:         0.15, // RON per 100 g protein
      convenience:   0.13, // authored
      satiety:       0.10, // authored
      taste:         0.10  // authored
    }
  };

  /* =======================================================================
   * PROTEIN QUALITY
   *
   * A nutrition label counts protein by measuring nitrogen. That is not the
   * same as protein your body can build with. Two corrections matter enough
   * to change a ranking:
   *
   *   1. Collagen and gelatin contain ZERO tryptophan. Their DIAAS is
   *      effectively 0 for muscle protein synthesis, yet a collagen powder
   *      declares 90 g of "protein" per 100 g and would otherwise sail to
   *      the top of this atlas. It must not. This is the single most
   *      important correction in the whole scoring system.
   *   2. Most single plant sources are limited in one essential amino acid
   *      (lysine in grains, methionine in legumes), so their usable protein
   *      is somewhat below the label number. In a mixed diet this mostly
   *      washes out, so the penalty is mild — and sources that ARE complete
   *      (soy, quinoa, hemp, amaranth, buckwheat) carry the
   *      `complete-protein` tag and take no penalty at all.
   *
   * The multiplier scales the two protein axes, so it changes the score
   * without pretending the grams on the label are different.
   * ==================================================================== */
  const QUALITY_BY_CATEGORY = {
    'dairy-eggs': 1.08,          // egg and dairy protein are the reference
    'fresh-meat': 1.05,
    'fish-seafood': 1.05,
    'deli-processed': 1.0,       // often extended with water, starch, collagen
    'supplements-snacks': 1.0,   // whey is excellent, plant blends less so
    'plant-protein': 0.88,       // lifted to 1.0 by the complete-protein tag
    'ready-meals': 0.95,
    'bakery-drinks-sweets': 0.92
  };

  /* What one gram of collagen protein is worth next to one gram of egg. */
  const COLLAGEN_FACTOR = 0.25;

  /* Products that ARE collagen: a supplement, a jelly, an aspic, a piftie. */
  const COLLAGEN_RE = /colagen|collagen|gelatin|piftie|r[ăa]cituri|aspic/i;

  /* Cuts that are structurally collagen even though nothing in the name says
   * so: tripe, tendon, pork rind. Their nitrogen is real and the label counts
   * it as protein, but it is the same unusable protein as a gelatin sachet,
   * and canned tripe soup was scoring as if it were beef.
   *
   * Tested against the name with parenthesised notes REMOVED. A parenthesis in
   * this dataset is a clarification, not the identity of the product: "Piept de
   * porc (panceta, cu șorici)" is a pork belly that happens to carry rind, and
   * penalising the whole cut for the note would repeat, in reverse, the very
   * mistake this correction exists to fix. */
  const COLLAGEN_CUT_RE = /burt[ăa]|tripe|tendon|[șs]orici/i;
  const PARENTHETICAL_RE = /\([^)]*\)/g;

  /**
   * Fraction of the declared protein that is collagen, 0–1.
   *
   * An explicit `collagenShare` on the entry always wins. It is the only way
   * to describe a MIXED product, and no amount of regex refining can replace
   * it: a whey-and-gelatin jelly declares 8.5 g of protein of which about 2.8 g
   * is gelatin. Matching the word "gelatină" would write the whole entry down
   * to 0.25 and bury a genuinely decent protein dessert.
   */
  function collagenShareOf(f) {
    if (typeof f.collagenShare === 'number' && Number.isFinite(f.collagenShare)) {
      return clamp(f.collagenShare, 0, 1);
    }
    const haystack = (f.id || '') + ' ' + (f.name || '') + ' ' + (f.nameRo || '');
    if (COLLAGEN_RE.test(haystack)) return 1;
    if (COLLAGEN_CUT_RE.test(haystack.replace(PARENTHETICAL_RE, ' '))) return 1;
    return 0;
  }

  function proteinQuality(f) {
    /* The factor the NON-collagen part of the protein deserves. */
    let base = QUALITY_BY_CATEGORY[f.category];
    if (base === undefined) base = 1.0;
    if (f.category === 'plant-protein' && (f.tags || []).indexOf('complete-protein') !== -1) {
      base = 1.0;
    }

    const share = collagenShareOf(f);
    if (share <= 0) {
      return { factor: base, reason: base < 1 ? 'incomplete' : 'complete', collagenShare: 0 };
    }

    /* Weighted average of the two protein pools. A share of 1 reproduces the
     * flat 0.25 exactly, so nothing moves for the entries that carry no field.
     *
     * `reason` stays 'collagen' for ANY share above zero: the dossier warning,
     * the "no collagen" filter and the exclusion from the protein leaderboards
     * all key off this string, and a product with gelatin in it should keep
     * saying so even when only a third of its protein is gelatin. */
    return {
      factor: share * COLLAGEN_FACTOR + (1 - share) * base,
      reason: 'collagen',
      collagenShare: share
    };
  }

  /* =======================================================================
   * ATWATER ENERGY CHECK
   * kcal should be reconstructible from the macros. When it isn't, the
   * label (or our transcription of it) is suspect and we flag the entry
   * rather than silently ranking on a bad number.
   * ==================================================================== */
  /* How far the reconstructed energy may sit from the declared one before we
   * stop trusting the entry. ±18% is the figure written down in
   * docs/METHODOLOGY.md; it absorbs label rounding, polyols and the fibre
   * factor without absorbing a transcription slip. */
  const ENERGY_MISMATCH_TOLERANCE = 0.18;

  function atwaterKcal(n) {
    return (
      (n.protein || 0) * 4 +
      (n.carbs || 0) * 4 +
      (n.fat || 0) * 9 +
      (n.fiber || 0) * 2
    );
  }

  /**
   * Relative gap between the reconstructed and the declared energy.
   *
   * Null when there is no declared kcal to compare against — there is no
   * such thing as a 0%-off or a 100%-off match with a missing denominator.
   * It used to return the literal 1, i.e. "off by 100%", which the flag
   * check happened to suppress but which every other reader saw as a real
   * measurement of a label we never read.
   */
  function energyDelta(n) {
    if (!n.kcal) return null;
    return (atwaterKcal(n) - n.kcal) / n.kcal;
  }

  /* =======================================================================
   * PRICE UNCERTAINTY
   *
   * NOT ONE PRICE IN THIS DATABASE IS VERIFIED.
   *
   * They were assembled as plausible 2026 estimates, calibrated against
   * realistic ranges — not read off a shelf and not pulled from an API.
   * There is no public price API for Romanian grocery retail; the only open
   * one (Open Prices / Open Food Facts) holds 84 price points for the whole
   * country, almost none of them protein foods.
   *
   * So the app must never render a price as if it were exact. Every price
   * carries a band, and the UI prints `≈` and the range. A row that is ever
   * genuinely verified sets `verified: true` on the store entry, and then its
   * band collapses to zero and the `≈` disappears.
   *
   * The band is per sales channel, because the uncertainty differs:
   *   chains publish prices and run promo cycles → a good estimate lands
   *   within about a fifth; a market stall or a restaurant has no printed
   *   price at all, so the spread is wider.
   * ==================================================================== */
  const PRICE_BAND_DEFAULT = 0.20;
  const PRICE_BAND = {
    'Piața Cibin': 0.30,
    'Măcelărie locală': 0.30,
    'Pescărie': 0.30,
    'Restaurant Sibiu': 0.30,
    'Farmacie': 0.25
  };

  function priceBandFor(storeName) {
    return PRICE_BAND[storeName] !== undefined ? PRICE_BAND[storeName] : PRICE_BAND_DEFAULT;
  }

  /* =======================================================================
   * PRICE NORMALISATION
   * A store entry gives a pack price and a pack weight. From that we get
   * the only cost number that actually matters: what 100 g of protein costs.
   * ==================================================================== */
  function priceForStore(store, per100g) {
    if (!store || !store.priceRon || !store.packGrams) return null;
    const proteinInPack = (per100g.protein || 0) * (store.packGrams / 100);
    if (proteinInPack <= 0) return null;
    const verified = store.verified === true;
    return {
      name: store.name,
      pricePerKg: (store.priceRon / store.packGrams) * 1000,
      pricePer100g: (store.priceRon / store.packGrams) * 100,
      proteinPerRon: proteinInPack / store.priceRon,
      ronPer100gProtein: (store.priceRon / proteinInPack) * 100,
      packPrice: store.priceRon,
      packGrams: store.packGrams,
      verified: verified,
      band: verified ? 0 : priceBandFor(store.name),
      priceDate: store.priceDate || null,
      priceSource: store.priceSource || null
    };
  }

  /* =======================================================================
   * THE SIX AXES
   * ==================================================================== */

  /** Axis 1 — how much protein is in the stuff. */
  function proteinBar(protein) {
    return clamp((protein / CAL.proteinFullBar) * 100, 0, 100);
  }

  /** Axis 2 — how little else comes along for the ride. */
  function purityBar(purityPct) {
    return clamp((purityPct / CAL.purityFullBar) * 100, 0, 100);
  }

  /* What an axis scores when we have no data for it. Dead centre, so a gap in
   * our research neither rewards nor punishes the product — a 0 would bury
   * every unpriced entry and a 100 would float it to the top. */
  const UNKNOWN_BAR = 50;

  /* The speed bar never reaches 0: a 4-hour braise is still food you can
   * cook, and an empty bar reads as "impossible" next to a full one. */
  const SPEED_BAR_FLOOR = 3;

  /** Axis 3 — what it costs you. Log scale: the spread is enormous. */
  function valueBar(ronPer100gProtein) {
    if (!ronPer100gProtein || ronPer100gProtein <= 0) return UNKNOWN_BAR;
    const lo = Math.log(CAL.costBest);
    const hi = Math.log(CAL.costWorst);
    const x = Math.log(clamp(ronPer100gProtein, CAL.costBest, CAL.costWorst));
    return clamp(100 * (1 - (x - lo) / (hi - lo)), 0, 100);
  }

  /** Axis 4 — how fast it gets into you. */
  function speedBar(timeMin) {
    return clamp(
      100 * (1 - (timeMin - CAL.timeFullBar) / (CAL.timeZeroBar - CAL.timeFullBar)),
      SPEED_BAR_FLOOR,
      100
    );
  }

  /** Axis 5 — how lean it is (share of calories NOT from fat). */
  function leannessBar(fat, kcal) {
    if (!kcal) return UNKNOWN_BAR;
    const fatPct = ((fat || 0) * 9) / kcal;
    return clamp(100 * (1 - fatPct), 0, 100);
  }

  /* =======================================================================
   * TIER
   * ==================================================================== */
  function tierFor(score) {
    for (let i = 0; i < CAL.tiers.length; i++) {
      if (score >= CAL.tiers[i].min) return CAL.tiers[i].letter;
    }
    return 'E';
  }

  /* =======================================================================
   * DIET / TAG DERIVATION
   * A few tags are objectively derivable from the numbers, so we derive
   * them instead of trusting eight different agents to agree.
   * ==================================================================== */
  /* Thresholds for the tags we derive rather than trust.
   *
   * The nutrition ones follow the EU nutrition-claim regulation (1924/2006)
   * where it defines a claim, so the badge means the same thing it means on a
   * shelf: "high protein" is ≥20% of energy from protein, "low fat" ≤3 g/100 g,
   * "high fibre" ≥6 g/100 g. The rest are this atlas's own house rules, set
   * against the distribution of the 500-odd entries:
   *   - 15 / 25 g per 100 g split the field into "worth counting" and "this is
   *     what you buy the product for";
   *   - 40% of energy from protein is roughly the top third of the atlas;
   *   - 1.5 g salt per 100 g is the point where one portion is a third of the
   *     WHO daily limit;
   *   - 6 lei per 100 g of protein is where dry legumes, eggs and milk sit,
   *     and it is about a fifth of the median entry. */
  const TAG_PROTEIN_VERY_HIGH = 25;   // g per 100 g
  const TAG_PROTEIN_HIGH = 15;        // g per 100 g
  const TAG_PURITY_DENSE = 40;        // % of energy from protein
  const TAG_LOW_FAT_MAX = 3;          // g per 100 g
  const TAG_LOW_CARB_MAX = 5;         // g per 100 g
  const TAG_HIGH_FIBER_MIN = 6;       // g per 100 g
  const TAG_HIGH_SALT_MIN = 1.5;      // g per 100 g
  const TAG_CHEAP_MAX = 6;            // RON per 100 g protein

  function derivedTags(f, d) {
    /* Same tolerance for a missing nutrition block as enrich() itself: a
     * half-written entry must degrade to zeros, not take the whole boot down. */
    const n = f.per100g || {};
    const t = [];
    if (d.protein100 >= TAG_PROTEIN_VERY_HIGH) t.push('very-high-protein');
    else if (d.protein100 >= TAG_PROTEIN_HIGH) t.push('high-protein');
    if (d.purityPct >= TAG_PURITY_DENSE) t.push('protein-dense');
    if ((n.fat || 0) <= TAG_LOW_FAT_MAX) t.push('low-fat');
    if ((n.carbs || 0) <= TAG_LOW_CARB_MAX) t.push('low-carb');
    if ((n.fiber || 0) >= TAG_HIGH_FIBER_MIN) t.push('high-fiber');
    if ((n.salt || 0) >= TAG_HIGH_SALT_MIN) t.push('high-sodium');
    if (f.timeMin === 0) t.push('no-cook');
    if (d.ronPer100gProtein && d.ronPer100gProtein <= TAG_CHEAP_MAX) t.push('cheap-protein');
    return t;
  }

  /* =======================================================================
   * SEARCH INDEX
   * ==================================================================== */
  function buildSearchBlob(f) {
    const parts = [
      f.name,
      f.nameRo,
      f.brand,
      f.subcategory,
      f.category,
      (f.tags || []).join(' '),
      (f.stores || []).map(s => s.name).join(' '),
      f.taste && f.taste.profile,
      f.cooking && f.cooking.method,
      (f.pairings || []).join(' ')
    ];
    return PF.fmt.normalize(parts.filter(Boolean).join(' '));
  }

  /* =======================================================================
   * MAIN ENRICHMENT
   * ==================================================================== */
  function enrich(f) {
    const n = f.per100g || {};
    const d = {};

    /* --- raw nutrition ------------------------------------------------ */
    d.protein100 = n.protein || 0;
    d.kcal100 = n.kcal || 0;
    d.carbs100 = n.carbs || 0;
    d.fat100 = n.fat || 0;
    d.fiber100 = n.fiber || 0;

    /* --- energy shares (the four macro slots, in fixed order) --------- */
    const kcalFromProtein = d.protein100 * 4;
    const kcalFromCarbs = d.carbs100 * 4;
    const kcalFromFat = d.fat100 * 9;
    const kcalFromFiber = d.fiber100 * 2;
    const kcalSum = kcalFromProtein + kcalFromCarbs + kcalFromFat + kcalFromFiber || 1;

    d.energyShare = {
      protein: (kcalFromProtein / kcalSum) * 100,
      carbs: (kcalFromCarbs / kcalSum) * 100,
      fat: (kcalFromFat / kcalSum) * 100,
      fiber: (kcalFromFiber / kcalSum) * 100
    };

    /* Purity is measured against the DECLARED kcal, not the reconstructed
     * one, because that is what a shopper reads off the label. */
    d.purityPct = d.kcal100 ? (kcalFromProtein / d.kcal100) * 100 : d.energyShare.protein;
    d.purityPct = clamp(d.purityPct, 0, 100);

    d.proteinPer100kcal = d.kcal100 ? (d.protein100 / d.kcal100) * 100 : 0;

    /* --- per serving --------------------------------------------------- */
    const sg = (f.serving && f.serving.grams) || 100;
    d.servingGrams = sg;
    d.perServing = {
      kcal: (d.kcal100 * sg) / 100,
      protein: (d.protein100 * sg) / 100,
      carbs: (d.carbs100 * sg) / 100,
      fat: (d.fat100 * sg) / 100,
      fiber: (d.fiber100 * sg) / 100,
      sugars: ((n.sugars || 0) * sg) / 100,
      satFat: ((n.satFat || 0) * sg) / 100,
      salt: ((n.salt || 0) * sg) / 100
    };

    /* --- price --------------------------------------------------------- */
    const priced = (f.stores || [])
      .map(s => priceForStore(s, n))
      .filter(Boolean)
      .sort((a, b) => a.ronPer100gProtein - b.ronPer100gProtein);

    d.prices = priced;
    d.bestPrice = priced[0] || null;
    d.ronPer100gProtein = d.bestPrice ? d.bestPrice.ronPer100gProtein : null;
    /* Everything the UI needs to render the number honestly. */
    d.priceVerified = d.bestPrice ? d.bestPrice.verified : false;
    d.priceBand = d.bestPrice ? d.bestPrice.band : null;
    d.ronPer100gProteinLo = d.bestPrice ? d.ronPer100gProtein * (1 - d.bestPrice.band) : null;
    d.ronPer100gProteinHi = d.bestPrice ? d.ronPer100gProtein * (1 + d.bestPrice.band) : null;
    d.proteinPerRon = d.bestPrice ? d.bestPrice.proteinPerRon : null;
    d.pricePerKg = d.bestPrice ? d.bestPrice.pricePerKg : null;
    d.costPerServing = d.bestPrice ? (d.bestPrice.pricePer100g * sg) / 100 : null;

    /* --- protein quality ------------------------------------------------ */
    const q = proteinQuality(f);
    d.quality = q.factor;
    d.qualityReason = q.reason;
    d.collagenShare = q.collagenShare;

    /* --- the six axes -------------------------------------------------- */
    const authored = f.stats || {};
    d.bars = {
      /* The two protein axes are scaled by usable-protein quality, so a
       * collagen powder cannot out-rank a chicken breast on nitrogen alone.
       * The gram counts shown to the user are never altered. */
      protein: clamp(proteinBar(d.protein100) * q.factor, 0, 100),
      purity: clamp(purityBar(d.purityPct) * q.factor, 0, 100),
      proteinRaw: proteinBar(d.protein100),
      purityRaw: purityBar(d.purityPct),
      value: valueBar(d.ronPer100gProtein),
      speed: speedBar(f.timeMin || 0),
      leanness: leannessBar(d.fat100, d.kcal100),
      taste: clamp(authored.taste || 0, 0, 100),
      satiety: clamp(authored.satiety || 0, 0, 100),
      convenience: clamp(authored.convenience || 0, 0, 100),
      versatility: clamp(authored.versatility || 0, 0, 100)
    };

    /* --- composite ----------------------------------------------------- */
    const w = CAL.weights;
    d.score =
      d.bars.protein * w.proteinAmount +
      d.bars.purity * w.purity +
      d.bars.value * w.value +
      d.bars.convenience * w.convenience +
      d.bars.satiety * w.satiety +
      d.bars.taste * w.taste;
    d.score = clamp(d.score, 0, 100);
    d.tier = tierFor(d.score);

    /* --- availability --------------------------------------------------- */
    d.storeCount = (f.stores || []).length;
    d.alwaysAvailable = (f.stores || []).some(s => s.availability === 'always');
    d.onlineOnly =
      d.storeCount > 0 && (f.stores || []).every(s => s.name === 'Online RO');

    /* --- data quality --------------------------------------------------- */
    const delta = energyDelta(n);
    d.energyDelta = delta;
    d.flags = [];
    if (delta !== null && Math.abs(delta) > ENERGY_MISMATCH_TOLERANCE && d.kcal100 > 0) {
      d.flags.push('energy-mismatch');
    }
    if ((n.sugars || 0) > (n.carbs || 0) + 0.01) d.flags.push('sugars-gt-carbs');
    if ((n.satFat || 0) > (n.fat || 0) + 0.01) d.flags.push('satfat-gt-fat');
    if (!d.bestPrice) d.flags.push('no-price');
    if (q.reason === 'collagen') d.flags.push('collagen-protein');

    /* --- tags ------------------------------------------------------------ */
    const all = new Set(f.tags || []);
    derivedTags(f, d).forEach(t => all.add(t));
    d.allTags = Array.from(all);

    /* --- search ---------------------------------------------------------- */
    d.search = buildSearchBlob(f);

    /* --- timing best slot ------------------------------------------------ */
    const timing = f.timing || {};
    let bestSlot = null;
    let bestVal = -1;
    Object.keys(timing).forEach(k => {
      if (timing[k] > bestVal) {
        bestVal = timing[k];
        bestSlot = k;
      }
    });
    d.bestSlot = bestSlot;
    d.timingScore = timing;

    return d;
  }

  /* =======================================================================
   * COLLECTION-LEVEL STATISTICS
   * ==================================================================== */
  /* Flags that describe our coverage or our scoring, not the data itself. */
  const NON_DATA_FLAGS = ['no-price', 'collagen-protein'];

  function summarize(foods) {
    const s = {
      count: foods.length,
      categories: {},
      stores: {},
      tags: {},
      tiers: { S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 },
      readyToEat: 0,
      maxProtein: 0,
      maxProteinItem: null,
      cheapest: null,
      avgProtein: 0,
      flagged: []
    };

    let proteinSum = 0;

    foods.forEach(f => {
      const d = f._d;
      s.categories[f.category] = (s.categories[f.category] || 0) + 1;
      s.tiers[d.tier] = (s.tiers[d.tier] || 0) + 1;
      proteinSum += d.protein100;

      if (f.timeMin === 0) s.readyToEat++;

      if (d.protein100 > s.maxProtein) {
        s.maxProtein = d.protein100;
        s.maxProteinItem = f;
      }

      if (
        d.ronPer100gProtein &&
        (!s.cheapest || d.ronPer100gProtein < s.cheapest._d.ronPer100gProtein)
      ) {
        s.cheapest = f;
      }

      (f.stores || []).forEach(st => {
        s.stores[st.name] = (s.stores[st.name] || 0) + 1;
      });

      d.allTags.forEach(t => {
        s.tags[t] = (s.tags[t] || 0) + 1;
      });

      /* Two flags are not transcription errors: `no-price` is a gap in our
       * research and `collagen-protein` is a deliberate scoring correction.
       * Filter them OUT of the report instead of skipping the whole entry —
       * an item that has no price AND a broken label must still be reported. */
      const dataFlags = d.flags.filter(x => NON_DATA_FLAGS.indexOf(x) === -1);
      if (dataFlags.length) {
        s.flagged.push({ id: f.id, name: f.nameRo || f.name, flags: dataFlags });
      }
    });

    s.avgProtein = foods.length ? proteinSum / foods.length : 0;
    s.storeList = Object.keys(s.stores).sort((a, b) => s.stores[b] - s.stores[a]);
    return s;
  }

  /* =======================================================================
   * DAILY PROTEIN TARGET
   * Evidence-anchored ranges, expressed per kg of bodyweight.
   * ==================================================================== */
  const GOALS = {
    sedentary:  { min: 0.8,  rec: 1.0, max: 1.2, key: 'sedentary' },
    active:     { min: 1.2,  rec: 1.4, max: 1.6, key: 'active' },
    muscle:     { min: 1.6,  rec: 1.8, max: 2.2, key: 'muscle' },
    cutting:    { min: 1.8,  rec: 2.2, max: 2.7, key: 'cutting' },
    senior:     { min: 1.2,  rec: 1.5, max: 1.8, key: 'senior' }
  };

  /* Used when the visitor has not typed a weight yet, so the calculator can
   * show a worked example instead of an empty form. Close to the adult mean
   * in Romania; the slider overwrites it on first touch. */
  const DEFAULT_WEIGHT_KG = 75;

  /* The slider's ends. Below 30 kg this is a child and the per-kg ranges below
   * do not apply; above 250 kg the arithmetic is fine but the advice is not. */
  const MIN_WEIGHT_KG = 30;
  const MAX_WEIGHT_KG = 250;

  /* Muscle protein synthesis is a threshold process, not a linear one. A meal
   * needs roughly 2.5-3 g of leucine to switch mTORC1 on, which is about
   * 25-30 g of good-quality protein; below that the meal contributes far less
   * than its grams suggest. Past ~40 g the extra protein is still used, but it
   * adds no further signal, so one enormous meal is worth less than three
   * ordinary ones.
   *
   * That is why the day is split by AIMING at a per-meal size instead of
   * always dividing by four: at a 200 g target, four meals would be 50 g each
   * (signal wasted), and at 75 g they would be 19 g each (threshold missed).
   * Aiming at ~35 g keeps every meal inside the window that actually works. */
  const AIM_PER_MEAL_G = 35;
  const MIN_MEALS = 3;
  const MAX_MEALS = 6;

  function proteinTarget(weightKg, goalKey) {
    const goal = GOALS[goalKey] || GOALS.muscle;
    const w = clamp(weightKg || DEFAULT_WEIGHT_KG, MIN_WEIGHT_KG, MAX_WEIGHT_KG);
    const target = Math.round(w * goal.rec);
    const meals = clamp(Math.round(target / AIM_PER_MEAL_G), MIN_MEALS, MAX_MEALS);
    return {
      min: Math.round(w * goal.min),
      target: target,
      max: Math.round(w * goal.max),
      meals: meals,
      perMeal: Math.round(target / meals),
      goal: goal.key
    };
  }

  /* =======================================================================
   * SIMILARITY — used for "related items" in the dossier
   * ==================================================================== */
  /* Points the five signals can contribute, out of a nominal 100. Shelf
   * position (category + subcategory) is worth half of it because "related"
   * on a dossier means "the next thing you would reach for", and the protein
   * figure carries the rest — two 25 g/100 g products are alternatives even
   * when one is fish and one is cheese. The decay rates (1.5 points per gram
   * of protein, 1 point per 12 kcal) are set so a product stops counting as
   * similar at roughly 17 g or 180 kcal of distance. */
  const SIM = {
    sameCategory: 30,
    sameSubcategory: 20,
    proteinMax: 25,
    proteinDecayPerGram: 1.5,
    kcalMax: 15,
    kcalPerPoint: 12,
    sharedTagsMax: 20,
    perSharedTag: 3,
    sameEffort: 6,
    effortTolerance: 1
  };

  function similarity(a, b) {
    if (a.id === b.id) return -1;
    let score = 0;
    if (a.category === b.category) score += SIM.sameCategory;
    if (a.subcategory === b.subcategory) score += SIM.sameSubcategory;

    const pDiff = Math.abs(a._d.protein100 - b._d.protein100);
    score += Math.max(0, SIM.proteinMax - pDiff * SIM.proteinDecayPerGram);

    const kDiff = Math.abs(a._d.kcal100 - b._d.kcal100);
    score += Math.max(0, SIM.kcalMax - kDiff / SIM.kcalPerPoint);

    const tagsA = new Set(a._d.allTags);
    let shared = 0;
    b._d.allTags.forEach(t => {
      if (tagsA.has(t)) shared++;
    });
    score += Math.min(SIM.sharedTagsMax, shared * SIM.perSharedTag);

    /* An entry with no authored `effort` yields NaN here, and NaN <= 1 is
     * false, so it simply misses the bonus instead of poisoning the score. */
    if (Math.abs(a.effort - b.effort) <= SIM.effortTolerance) score += SIM.sameEffort;
    return score;
  }

  function findSimilar(food, all, n) {
    return all
      .map(f => ({ f: f, s: similarity(food, f) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, n || 6)
      .map(x => x.f);
  }

  /* =======================================================================
   * "BETTER THAN THIS" — find a strictly superior alternative
   * ==================================================================== */
  /* An upgrade has to be a visible step up, not a rounding difference: 15%
   * more protein is where the two numbers stop looking like the same product.
   * The 5 minutes of slack keep an otherwise clear win from being rejected
   * over a difference nobody notices while cooking. */
  const UPGRADE_PROTEIN_RATIO = 1.15;
  const UPGRADE_EXTRA_MINUTES = 5;

  function findUpgrade(food, all) {
    const cands = all.filter(
      f =>
        f.id !== food.id &&
        f._d.protein100 > food._d.protein100 * UPGRADE_PROTEIN_RATIO &&
        f._d.purityPct > food._d.purityPct &&
        f.timeMin <= food.timeMin + UPGRADE_EXTRA_MINUTES
    );
    if (!cands.length) return null;
    cands.sort((a, b) => b._d.score - a._d.score);
    return cands[0];
  }

  PF.compute = {
    CAL: CAL,
    GOALS: GOALS,
    proteinQuality: proteinQuality,
    QUALITY_BY_CATEGORY: QUALITY_BY_CATEGORY,
    enrich: enrich,
    summarize: summarize,
    proteinTarget: proteinTarget,
    tierFor: tierFor,
    atwaterKcal: atwaterKcal,
    findSimilar: findSimilar,
    findUpgrade: findUpgrade,
    priceForStore: priceForStore,
    priceBandFor: priceBandFor,
    PRICE_BAND_DEFAULT: PRICE_BAND_DEFAULT
  };
})();
