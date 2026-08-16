#!/usr/bin/env node
/* =========================================================================
 * PROTEIN ATLAS SIBIU — UNIT TESTS FOR THE MATH AND THE FORMATTERS
 *
 *     node tools/test-compute.js
 *
 * No dependencies, no framework. Exits 1 if anything fails.
 *
 * What it guards:
 *   - enrich() must never throw and never emit a non-finite number, however
 *     broken the entry it is handed (this runs on 500+ hand-written records)
 *   - the calibration constants must keep matching docs/METHODOLOGY.md —
 *     the document is a promise to the reader, so a weight change that is
 *     not also a doc change is a bug
 *   - format helpers are the last stop before the screen: a "NaN h" or a
 *     mark tag landing inside an HTML entity is a visible defect
 * ========================================================================= */
'use strict';

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

/* -----------------------------------------------------------------------
 * BROWSER STUBS
 * The modules under test are plain browser IIFEs that attach to window.
 * localStorage is deliberately absent so storage.js falls back to memory.
 * -------------------------------------------------------------------- */
const location = { hash: '', pathname: '/index.html' };
const history = {
  calls: [],
  replaceState(state, title, url) {
    history.calls.push(url);
    location.hash = url && url.charAt(0) === '#' ? url : '';
  }
};
global.window = { location: location, history: history, addEventListener() {} };
global.document = {
  documentElement: { setAttribute() {}, style: { setProperty() {} } },
  addEventListener() {}
};

require(path.join(ROOT, 'js/utils/format.js'));
require(path.join(ROOT, 'js/utils/compute.js'));
require(path.join(ROOT, 'js/utils/storage.js'));

const PF = global.window.PF;
const C = PF.compute;
const F = PF.fmt;
const ST = PF.store;

/* -----------------------------------------------------------------------
 * TINY TEST HARNESS
 * -------------------------------------------------------------------- */
let passed = 0;
let failed = 0;
let current = null;
const failures = [];

function t(name, fn) {
  current = { name: name, errs: [] };
  try {
    fn();
  } catch (e) {
    current.errs.push('threw: ' + (e && e.message ? e.message : String(e)));
  }
  if (current.errs.length) {
    failed++;
    failures.push(current);
  } else {
    passed++;
  }
  current = null;
}

function bad(msg) {
  current.errs.push(msg);
}

function eq(actual, expected, label) {
  if (actual !== expected) {
    bad((label ? label + ': ' : '') + 'expected ' + JSON.stringify(expected) +
      ', got ' + JSON.stringify(actual));
  }
}

function near(actual, expected, eps, label) {
  const e = eps === undefined ? 1e-9 : eps;
  if (!(Math.abs(actual - expected) <= e)) {
    bad((label ? label + ': ' : '') + 'expected ' + expected + ' ±' + e +
      ', got ' + actual);
  }
}

function ok(cond, label) {
  if (!cond) bad(label || 'expected truthy');
}

function inRange(v, lo, hi, label) {
  if (!(typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi)) {
    bad((label || 'value') + ': expected ' + lo + '..' + hi + ', got ' + v);
  }
}

function noThrow(fn, label) {
  try {
    return fn();
  } catch (e) {
    bad((label || 'call') + ' threw: ' + e.message);
    return undefined;
  }
}

function section(title) {
  sections.push({ title: title, at: passed + failed });
}
const sections = [];

/* -----------------------------------------------------------------------
 * FIXTURES
 * -------------------------------------------------------------------- */
function food(over) {
  const f = Object.assign(
    {
      id: 'test-item',
      name: 'Test Item',
      nameRo: 'Produs test',
      category: 'dairy-eggs',
      subcategory: 'test',
      unit: 'g',
      timeMin: 0,
      effort: 1,
      per100g: {},
      stores: [],
      tags: [],
      stats: {},
      timing: {}
    },
    over || {}
  );
  f._d = C.enrich(f);
  return f;
}

/** A store row that makes ronPer100gProtein come out exactly at `ron`. */
function storeAt(ron, name) {
  return { name: name || 'Kaufland', priceRon: ron, packGrams: 100 };
}

/* =======================================================================
 * 1. CALIBRATION vs docs/METHODOLOGY.md
 * ==================================================================== */
section('1. Calibration matches the methodology document');

t('composite weights sum to exactly 1', function () {
  const w = C.CAL.weights;
  const sum = w.proteinAmount + w.purity + w.value + w.convenience + w.satiety + w.taste;
  eq(sum, 1, 'sum');
});

t('weights match the documented table', function () {
  const w = C.CAL.weights;
  eq(w.proteinAmount, 0.28, 'protein');
  eq(w.purity, 0.24, 'purity');
  eq(w.value, 0.15, 'value');
  eq(w.convenience, 0.13, 'convenience');
  eq(w.satiety, 0.1, 'satiety');
  eq(w.taste, 0.1, 'taste');
});

t('protein + purity carry more than half the score', function () {
  const w = C.CAL.weights;
  near(w.proteinAmount + w.purity, 0.52, 1e-12);
});

t('bar calibration constants match the document', function () {
  eq(C.CAL.proteinFullBar, 30, 'proteinFullBar');
  eq(C.CAL.purityFullBar, 80, 'purityFullBar');
  eq(C.CAL.costBest, 2.5, 'costBest');
  eq(C.CAL.costWorst, 80, 'costWorst');
  eq(C.CAL.timeFullBar, 0, 'timeFullBar');
  eq(C.CAL.timeZeroBar, 75, 'timeZeroBar');
});

t('tier cutoffs match the document (80/68/56/44/30)', function () {
  const mins = C.CAL.tiers.map(x => x.letter + ':' + x.min);
  eq(mins.join(' '), 'S:80 A:68 B:56 C:44 D:30 E:-Infinity');
});

t('quality factors match the document table', function () {
  const q = C.QUALITY_BY_CATEGORY;
  eq(q['dairy-eggs'], 1.08, 'dairy-eggs');
  eq(q['fresh-meat'], 1.05, 'fresh-meat');
  eq(q['fish-seafood'], 1.05, 'fish-seafood');
  eq(q['deli-processed'], 1.0, 'deli-processed');
  eq(q['supplements-snacks'], 1.0, 'supplements-snacks');
  eq(q['plant-protein'], 0.88, 'plant-protein');
  eq(q['ready-meals'], 0.95, 'ready-meals');
  eq(q['bakery-drinks-sweets'], 0.92, 'bakery-drinks-sweets');
});

t('price bands are 20% by chain, 30% market/restaurant, 25% pharmacy', function () {
  eq(C.PRICE_BAND_DEFAULT, 0.2, 'default');
  eq(C.priceBandFor('Kaufland'), 0.2, 'chain');
  eq(C.priceBandFor('Piața Cibin'), 0.3, 'market');
  eq(C.priceBandFor('Restaurant Sibiu'), 0.3, 'restaurant');
  eq(C.priceBandFor('Măcelărie locală'), 0.3, 'butcher');
  eq(C.priceBandFor('Pescărie'), 0.3, 'fishmonger');
  eq(C.priceBandFor('Farmacie'), 0.25, 'pharmacy');
  eq(C.priceBandFor('Magazin inexistent'), 0.2, 'unknown store');
});

/* =======================================================================
 * 2. enrich() — EDGE CASES
 * ==================================================================== */
section('2. enrich() on degenerate entries');

t('enrich({}) does not throw and returns finite core numbers', function () {
  const d = noThrow(() => C.enrich({}), 'enrich({})');
  if (!d) return;
  ok(Number.isFinite(d.score), 'score finite');
  ok(Number.isFinite(d.protein100), 'protein100 finite');
  ok(Number.isFinite(d.purityPct), 'purityPct finite');
  eq(d.protein100, 0, 'protein100');
  eq(d.tier, 'E', 'tier');
});

t('enrich() with a null-ish per100g still produces every bar', function () {
  const d = C.enrich({ id: 'x', per100g: null, category: 'ready-meals' });
  Object.keys(d.bars).forEach(k => inRange(d.bars[k], 0, 100, 'bars.' + k));
});

t('protein 0 → empty protein bar, zero purity, no price', function () {
  const d = food({ per100g: { protein: 0, kcal: 120, carbs: 25, fat: 2 },
    stores: [storeAt(10)] })._d;
  eq(d.protein100, 0, 'protein100');
  eq(d.purityPct, 0, 'purityPct');
  eq(d.bars.protein, 0, 'bars.protein');
  eq(d.bestPrice, null, 'bestPrice (no protein → cost per protein undefined)');
  ok(d.flags.indexOf('no-price') !== -1, 'no-price flag');
});

t('kcal 0 → purity falls back to the macro split, no energy-mismatch flag', function () {
  const d = food({ per100g: { protein: 20, kcal: 0 } })._d;
  eq(d.kcal100, 0, 'kcal100');
  eq(d.purityPct, 100, 'purityPct from macro split');
  eq(d.proteinPer100kcal, 0, 'proteinPer100kcal');
  ok(d.flags.indexOf('energy-mismatch') === -1, 'no energy-mismatch on kcal 0');
  ok(Number.isFinite(d.score), 'score finite');
});

t('protein 0 and kcal 0 → everything zero, nothing NaN', function () {
  const d = food({ per100g: { protein: 0, kcal: 0 } })._d;
  eq(d.purityPct, 0, 'purityPct');
  eq(d.energyShare.protein, 0, 'energyShare.protein');
  ok(Number.isFinite(d.score), 'score');
  ok(Number.isFinite(d.perServing.kcal), 'perServing.kcal');
});

t('no stores → neutral value bar, null price fields, no-price flag', function () {
  const d = food({ per100g: { protein: 25, kcal: 150 } })._d;
  eq(d.prices.length, 0, 'prices');
  eq(d.bestPrice, null, 'bestPrice');
  eq(d.ronPer100gProtein, null, 'ronPer100gProtein');
  eq(d.ronPer100gProteinLo, null, 'lo');
  eq(d.ronPer100gProteinHi, null, 'hi');
  eq(d.costPerServing, null, 'costPerServing');
  eq(d.priceVerified, false, 'priceVerified');
  eq(d.bars.value, 50, 'value bar neutral');
  ok(d.flags.indexOf('no-price') !== -1, 'no-price flag');
});

t('store without priceRon is ignored', function () {
  const d = food({ per100g: { protein: 25 }, stores: [{ name: 'Lidl', packGrams: 500 }] })._d;
  eq(d.prices.length, 0, 'prices');
  eq(d.storeCount, 1, 'storeCount still counts the row');
});

t('packGrams 0 → no price, not a division by zero', function () {
  const d = food({ per100g: { protein: 25 },
    stores: [{ name: 'Lidl', priceRon: 20, packGrams: 0 }] })._d;
  eq(d.prices.length, 0, 'prices');
  eq(d.ronPer100gProtein, null, 'ronPer100gProtein');
  ok(d.flags.indexOf('no-price') !== -1, 'no-price flag');
});

t('missing macro fields default to 0 rather than NaN', function () {
  const d = food({ per100g: { protein: 12 } })._d;
  eq(d.carbs100, 0, 'carbs');
  eq(d.fat100, 0, 'fat');
  eq(d.fiber100, 0, 'fiber');
  eq(d.perServing.sugars, 0, 'sugars');
  eq(d.perServing.satFat, 0, 'satFat');
  eq(d.perServing.salt, 0, 'salt');
});

t("unit 'ml' entries are scored on the same per-100 basis", function () {
  const d = food({
    unit: 'ml',
    per100g: { protein: 3.4, kcal: 46, carbs: 4.8, fat: 1.5 },
    serving: { grams: 250, label: '250 ml' },
    stores: [{ name: 'Kaufland', priceRon: 6.5, packGrams: 1000 }]
  })._d;
  near(d.perServing.protein, 8.5, 1e-9, 'protein per 250 ml');
  near(d.ronPer100gProtein, (6.5 / 34) * 100, 1e-9, 'ron per 100 g protein');
  ok(Number.isFinite(d.score), 'score');
});

t('serving defaults to 100 g when absent or zero', function () {
  const a = food({ per100g: { protein: 20, kcal: 100 } })._d;
  eq(a.servingGrams, 100, 'absent');
  const b = food({ per100g: { protein: 20, kcal: 100 }, serving: { grams: 0 } })._d;
  eq(b.servingGrams, 100, 'zero');
});

t('serving scaling is linear', function () {
  const d = food({ per100g: { protein: 20, kcal: 100, carbs: 5, fat: 1, fiber: 2, sugars: 3, satFat: 0.5, salt: 1 },
    serving: { grams: 150 } })._d;
  near(d.perServing.protein, 30, 1e-9, 'protein');
  near(d.perServing.kcal, 150, 1e-9, 'kcal');
  near(d.perServing.salt, 1.5, 1e-9, 'salt');
});

t('energy shares sum to 100 when any macro is present', function () {
  const d = food({ per100g: { protein: 10, carbs: 20, fat: 5, fiber: 3, kcal: 200 } })._d;
  const s = d.energyShare;
  near(s.protein + s.carbs + s.fat + s.fiber, 100, 1e-9, 'sum');
  inRange(s.protein, 0, 100, 'protein share');
});

/* =======================================================================
 * 3. purityPct BOUNDS
 * ==================================================================== */
section('3. purityPct never leaves 0..100');

t('purity of a lean protein is the label ratio', function () {
  const d = food({ per100g: { protein: 20, kcal: 100 } })._d;
  eq(d.purityPct, 80, 'purityPct');
});

t('purity cannot exceed 100 even when the label is impossible', function () {
  const d = food({ per100g: { protein: 30, kcal: 50 } })._d; // would be 240%
  eq(d.purityPct, 100, 'clamped high');
  inRange(d.bars.purityRaw, 0, 100, 'purityRaw bar');
});

t('purity cannot go negative on a negative protein value', function () {
  const d = food({ per100g: { protein: -5, kcal: 100 } })._d;
  eq(d.purityPct, 0, 'clamped low');
  eq(d.bars.purity, 0, 'purity bar');
  inRange(d.bars.protein, 0, 100, 'protein bar');
});

t('purity stays in bounds across a sweep of protein/kcal pairs', function () {
  for (let p = 0; p <= 100; p += 5) {
    for (let k = 0; k <= 900; k += 50) {
      const d = C.enrich({ per100g: { protein: p, kcal: k } });
      inRange(d.purityPct, 0, 100, 'p=' + p + ' k=' + k);
      inRange(d.score, 0, 100, 'score p=' + p + ' k=' + k);
    }
  }
});

t('every bar stays inside 0..100 for a powder-grade entry', function () {
  const d = food({ category: 'supplements-snacks',
    per100g: { protein: 90, kcal: 370, carbs: 1, fat: 1 },
    stats: { taste: 100, satiety: 100, convenience: 100, versatility: 100 },
    stores: [storeAt(2)] })._d;
  Object.keys(d.bars).forEach(k => inRange(d.bars[k], 0, 100, 'bars.' + k));
  inRange(d.score, 0, 100, 'score');
});

/* =======================================================================
 * 4. valueBar — LOG SCALE (exercised through enrich)
 * ==================================================================== */
section('4. valueBar log scale');

/** protein 100 g/100 g + 100 g pack ⇒ ronPer100gProtein === packPrice. */
function valueBarAt(ronPer100gProtein) {
  return food({ per100g: { protein: 100, kcal: 400 },
    stores: [storeAt(ronPer100gProtein)] })._d.bars.value;
}

t('2.5 lei / 100 g protein fills the bar', function () {
  near(valueBarAt(2.5), 100, 1e-9);
});

t('80 lei / 100 g protein empties the bar', function () {
  near(valueBarAt(80), 0, 1e-9);
});

t('the geometric mean of the endpoints sits at 50', function () {
  near(valueBarAt(Math.sqrt(2.5 * 80)), 50, 1e-9); // ≈14.14 lei
});

t('a quarter and three quarters of the log span land where expected', function () {
  const lo = Math.log(2.5), hi = Math.log(80);
  near(valueBarAt(Math.exp(lo + (hi - lo) * 0.25)), 75, 1e-9, '25% along');
  near(valueBarAt(Math.exp(lo + (hi - lo) * 0.75)), 25, 1e-9, '75% along');
});

t('the scale is logarithmic, not linear', function () {
  const mid = valueBarAt((2.5 + 80) / 2); // linear midpoint, 41.25 lei
  ok(mid < 20, 'linear midpoint must be far below 50, got ' + mid);
});

t('cheaper than the best anchor still caps at 100, dearer floors at 0', function () {
  near(valueBarAt(0.5), 100, 1e-9, 'below costBest');
  near(valueBarAt(2000), 0, 1e-9, 'above costWorst');
});

t('unknown price is neutral (50), never a zero', function () {
  eq(valueBarAt(0), 50, 'zero price treated as unknown');
  eq(food({ per100g: { protein: 100 } })._d.bars.value, 50, 'no store');
});

t('the value bar decreases monotonically with cost', function () {
  let prev = 101;
  [2.5, 4, 8, 15, 30, 60, 80].forEach(function (p) {
    const v = valueBarAt(p);
    ok(v < prev, 'not decreasing at ' + p + ' lei (' + v + ' vs ' + prev + ')');
    prev = v;
  });
});

/* =======================================================================
 * 5. proteinQuality
 * ==================================================================== */
section('5. proteinQuality');

t('collagen is caught by id, name or Romanian name', function () {
  eq(C.proteinQuality({ id: 's-collagen-x', category: 'supplements-snacks' }).factor, 0.25, 'id');
  eq(C.proteinQuality({ name: 'Collagen Peptides' }).factor, 0.25, 'name');
  eq(C.proteinQuality({ nameRo: 'Colagen hidrolizat' }).factor, 0.25, 'nameRo');
});

t('gelatin, piftie, răcituri and aspic are collagen too', function () {
  ['Gelatina pudra', 'Piftie de porc', 'Răcituri de casă', 'Racituri de casa', 'Aspic']
    .forEach(function (n) {
      const q = C.proteinQuality({ nameRo: n, category: 'deli-processed' });
      eq(q.factor, 0.25, n);
      eq(q.reason, 'collagen', n + ' reason');
    });
});

t('collagen overrides a generous category factor', function () {
  const q = C.proteinQuality({ nameRo: 'Colagen din lapte', category: 'dairy-eggs' });
  eq(q.factor, 0.25);
});

t('plant protein is 0.88 and reported as incomplete', function () {
  const q = C.proteinQuality({ nameRo: 'Linte verde', category: 'plant-protein' });
  eq(q.factor, 0.88, 'factor');
  eq(q.reason, 'incomplete', 'reason');
});

t('the complete-protein tag lifts plant protein to 1.0', function () {
  const q = C.proteinQuality({ nameRo: 'Tofu', category: 'plant-protein', tags: ['vegan', 'complete-protein'] });
  eq(q.factor, 1.0, 'factor');
  eq(q.reason, 'complete', 'reason');
});

t('dairy and eggs get the 1.08 reference bonus', function () {
  eq(C.proteinQuality({ nameRo: 'Ouă', category: 'dairy-eggs' }).factor, 1.08);
});

t('an unknown category is neutral, not punished', function () {
  const q = C.proteinQuality({ nameRo: 'Ceva', category: 'no-such-category' });
  eq(q.factor, 1.0, 'factor');
  eq(q.reason, 'complete', 'reason');
});

t('complete-protein on a non-plant category changes nothing', function () {
  eq(C.proteinQuality({ nameRo: 'Vită', category: 'fresh-meat', tags: ['complete-protein'] }).factor, 1.05);
});

t('quality scales both protein axes and nothing else', function () {
  const plain = food({ category: 'supplements-snacks',
    per100g: { protein: 90, kcal: 360 }, nameRo: 'Izolat de zer' })._d;
  const coll = food({ category: 'supplements-snacks',
    per100g: { protein: 90, kcal: 360 }, nameRo: 'Colagen hidrolizat', id: 's-colagen' })._d;
  eq(coll.protein100, plain.protein100, 'grams on the card are untouched');
  eq(coll.bars.proteinRaw, plain.bars.proteinRaw, 'raw bar untouched');
  ok(coll.bars.protein < plain.bars.protein, 'adjusted protein bar drops');
  ok(coll.bars.purity < plain.bars.purity, 'adjusted purity bar drops');
  ok(coll.score < plain.score, 'score drops');
  ok(coll.flags.indexOf('collagen-protein') !== -1, 'collagen flag raised');
});

t('collagen-rich cuts are caught even when the name never says collagen', function () {
  ['Ciorbă de burtă la conservă', 'Canned Tripe Soup', 'Tendon de vită', 'Șorici de porc crud', 'Sorici de porc']
    .forEach(function (n) {
      const q = C.proteinQuality({ nameRo: n, category: 'ready-meals' });
      eq(q.factor, 0.25, n);
      eq(q.reason, 'collagen', n + ' reason');
    });
});

t('a parenthesised note about rind does not condemn the whole cut', function () {
  // "Piept de porc (panceta, cu șorici)" is a pork belly carrying rind, not rind.
  const q = C.proteinQuality({ nameRo: 'Piept de porc (panceta, cu șorici)', category: 'fresh-meat' });
  eq(q.factor, 1.05, 'factor');
  eq(q.reason, 'complete', 'reason');
  eq(C.proteinQuality({ nameRo: 'Ceafă de porc (cu tendon)', category: 'fresh-meat' }).factor, 1.05,
    'parenthesised tendon');
});

t('collagenShare 1 reproduces the old flat 0.25 exactly', function () {
  const q = C.proteinQuality({ nameRo: 'Ceva neutru', category: 'dairy-eggs', collagenShare: 1 });
  eq(q.factor, 0.25, 'factor');
  eq(q.reason, 'collagen', 'reason');
  eq(q.collagenShare, 1, 'share');
});

t('collagenShare 0 yields the plain category factor', function () {
  eq(C.proteinQuality({ nameRo: 'Iaurt', category: 'dairy-eggs', collagenShare: 0 }).factor, 1.08, 'dairy');
  eq(C.proteinQuality({ nameRo: 'Linte', category: 'plant-protein', collagenShare: 0 }).factor, 0.88, 'plant');
});

t('collagenShare 0 overrides the name match — the field always wins', function () {
  const q = C.proteinQuality({ nameRo: 'Colagen marin', category: 'supplements-snacks', collagenShare: 0 });
  eq(q.factor, 1.0, 'factor');
  eq(q.reason, 'complete', 'reason');
});

t('a mixed product lands strictly between the two pools', function () {
  // b-jeleu-proteic: gelatin + whey, bakery category (0.92 base)
  const q = C.proteinQuality({ nameRo: 'Jeleu proteic (gelatină cu proteină)',
    category: 'bakery-drinks-sweets', collagenShare: 0.33 });
  near(q.factor, 0.33 * 0.25 + 0.67 * 0.92, 1e-12, 'weighted average');
  ok(q.factor > 0.25, 'above pure collagen');
  ok(q.factor < 0.92, 'below pure whey');
  eq(q.reason, 'collagen', 'still warns about collagen');
  eq(q.collagenShare, 0.33, 'share exposed');
});

t('the quality factor moves monotonically with the share', function () {
  let prev = Infinity;
  [0, 0.1, 0.33, 0.5, 0.9, 1].forEach(function (share) {
    const f = C.proteinQuality({ nameRo: 'X', category: 'bakery-drinks-sweets', collagenShare: share }).factor;
    ok(f < prev, 'not decreasing at share ' + share);
    inRange(f, 0.25, 0.92, 'share ' + share);
    prev = f;
  });
});

t('an out-of-range or broken collagenShare is clamped, not trusted', function () {
  eq(C.proteinQuality({ nameRo: 'X', category: 'dairy-eggs', collagenShare: 5 }).factor, 0.25, 'above 1');
  eq(C.proteinQuality({ nameRo: 'X', category: 'dairy-eggs', collagenShare: -3 }).factor, 1.08, 'below 0');
  eq(C.proteinQuality({ nameRo: 'X', category: 'dairy-eggs', collagenShare: NaN }).factor, 1.08, 'NaN falls back');
  eq(C.proteinQuality({ nameRo: 'X', category: 'dairy-eggs', collagenShare: '0.5' }).factor, 1.08, 'string ignored');
});

t('omitting collagenShare changes nothing for an ordinary entry', function () {
  const withField = food({ id: 'w', category: 'dairy-eggs', per100g: { protein: 20, kcal: 100 },
    stats: { taste: 50, satiety: 50, convenience: 50 }, collagenShare: 0 })._d;
  const without = food({ id: 'o', category: 'dairy-eggs', per100g: { protein: 20, kcal: 100 },
    stats: { taste: 50, satiety: 50, convenience: 50 } })._d;
  eq(withField.score, without.score, 'identical score');
  eq(withField.quality, without.quality, 'identical quality');
  eq(withField.tier, without.tier, 'identical tier');
});

t('enrich exposes the share it used', function () {
  eq(food({ per100g: { protein: 20, kcal: 100 } })._d.collagenShare, 0, 'plain entry');
  eq(food({ nameRo: 'Colagen', per100g: { protein: 20, kcal: 100 } })._d.collagenShare, 1, 'name match');
  eq(food({ per100g: { protein: 20, kcal: 100 }, collagenShare: 0.4 })._d.collagenShare, 0.4, 'explicit');
});

t('a partly-collagen product scores above a fully-collagen one', function () {
  const base = { category: 'bakery-drinks-sweets', per100g: { protein: 8.5, kcal: 40 },
    stats: { taste: 70, satiety: 40, convenience: 30 }, stores: [storeAt(40)] };
  const full = food(Object.assign({ id: 'full', nameRo: 'Jeleu cu gelatină' }, base))._d;
  const part = food(Object.assign({ id: 'part', nameRo: 'Jeleu cu gelatină', collagenShare: 0.33 }, base))._d;
  ok(part.score > full.score, 'partial scores higher');
  eq(part.qualityReason, 'collagen', 'still flagged as collagen');
  ok(part.flags.indexOf('collagen-protein') !== -1, 'still carries the flag');
});

t('collagen cannot reach the top tiers', function () {
  const coll = food({ category: 'supplements-snacks', id: 's-colagen',
    nameRo: 'Colagen pudră', per100g: { protein: 90, kcal: 360 },
    stats: { taste: 60, satiety: 30, convenience: 90 }, stores: [storeAt(20)] })._d;
  ok('SAB'.indexOf(coll.tier) === -1, 'tier must not be S/A/B, got ' + coll.tier);
});

/* =======================================================================
 * 6. tierFor — EXACT THRESHOLDS
 * ==================================================================== */
section('6. tierFor at the thresholds');

t('S starts exactly at 80', function () {
  eq(C.tierFor(80), 'S', '80');
  eq(C.tierFor(79.99), 'A', '79.99');
  eq(C.tierFor(100), 'S', '100');
});

t('A starts exactly at 68', function () {
  eq(C.tierFor(68), 'A', '68');
  eq(C.tierFor(67.99), 'B', '67.99');
});

t('B starts exactly at 56', function () {
  eq(C.tierFor(56), 'B', '56');
  eq(C.tierFor(55.99), 'C', '55.99');
});

t('C starts exactly at 44', function () {
  eq(C.tierFor(44), 'C', '44');
  eq(C.tierFor(43.99), 'D', '43.99');
});

t('D starts exactly at 30, everything under is E', function () {
  eq(C.tierFor(30), 'D', '30');
  eq(C.tierFor(29.99), 'E', '29.99');
  eq(C.tierFor(0), 'E', '0');
  eq(C.tierFor(-10), 'E', 'negative');
});

t('tier ordering is monotonic across the whole range', function () {
  const rank = { S: 6, A: 5, B: 4, C: 3, D: 2, E: 1 };
  let prev = 0;
  for (let s = 0; s <= 100; s += 0.5) {
    const r = rank[C.tierFor(s)];
    ok(r >= prev, 'tier went backwards at ' + s);
    prev = r;
  }
});

/* =======================================================================
 * 7. proteinTarget
 * ==================================================================== */
section('7. proteinTarget');

t('every goal is defined with min ≤ rec ≤ max', function () {
  Object.keys(C.GOALS).forEach(function (k) {
    const g = C.GOALS[k];
    ok(g.min <= g.rec, k + ': min ≤ rec');
    ok(g.rec <= g.max, k + ': rec ≤ max');
    eq(g.key, k, k + ': key matches');
  });
});

t('the five documented goals exist', function () {
  eq(Object.keys(C.GOALS).sort().join(','), 'active,cutting,muscle,sedentary,senior');
});

t('80 kg on the muscle goal', function () {
  const r = C.proteinTarget(80, 'muscle');
  eq(r.min, 128, 'min');
  eq(r.target, 144, 'target');
  eq(r.max, 176, 'max');
  eq(r.perMeal, 36, 'perMeal');
  eq(r.goal, 'muscle', 'goal');
});

t('30 kg is the low clamp, every goal stays positive', function () {
  Object.keys(C.GOALS).forEach(function (k) {
    const r = C.proteinTarget(30, k);
    ok(r.min > 0 && r.target > 0 && r.max > 0 && r.perMeal > 0, k + ': positive');
    ok(r.min <= r.target && r.target <= r.max, k + ': ordered');
  });
  eq(C.proteinTarget(30, 'sedentary').target, 30, 'sedentary 30 kg');
  eq(C.proteinTarget(10, 'sedentary').target, 30, 'below 30 kg clamps up to 30');
});

t('250 kg is the high clamp', function () {
  eq(C.proteinTarget(250, 'cutting').target, 550, 'cutting 250 kg');
  eq(C.proteinTarget(400, 'cutting').target, 550, 'above 250 kg clamps down');
  eq(C.proteinTarget(1e9, 'sedentary').target, 250, 'absurd weight clamps');
});

t('missing weight falls back to 75 kg', function () {
  eq(C.proteinTarget(undefined, 'muscle').target, 135, 'undefined');
  eq(C.proteinTarget(0, 'muscle').target, 135, 'zero');
  eq(C.proteinTarget(null, 'muscle').target, 135, 'null');
});

t('an unknown goal falls back to muscle', function () {
  eq(C.proteinTarget(80, 'nonsense').goal, 'muscle', 'goal key');
  eq(C.proteinTarget(80, 'nonsense').target, C.proteinTarget(80, 'muscle').target, 'target');
  eq(C.proteinTarget(80).goal, 'muscle', 'no goal given');
});

t('every goal returns whole grams', function () {
  Object.keys(C.GOALS).forEach(function (k) {
    [30, 62.5, 77, 113.7, 250].forEach(function (w) {
      const r = C.proteinTarget(w, k);
      ['min', 'target', 'max', 'perMeal'].forEach(function (f) {
        eq(r[f] % 1, 0, k + ' @' + w + ' ' + f + ' must be an integer');
      });
    });
  });
});

t('targets rise with weight and with training intent', function () {
  ok(C.proteinTarget(60, 'muscle').target < C.proteinTarget(90, 'muscle').target, 'weight');
  ok(C.proteinTarget(80, 'sedentary').target < C.proteinTarget(80, 'active').target, 'sedentary<active');
  ok(C.proteinTarget(80, 'active').target < C.proteinTarget(80, 'muscle').target, 'active<muscle');
  ok(C.proteinTarget(80, 'muscle').target < C.proteinTarget(80, 'cutting').target, 'muscle<cutting');
});

/* =======================================================================
 * 8. atwaterKcal / energyDelta
 * ==================================================================== */
section('8. Atwater energy check');

t('atwaterKcal applies 4/4/9/2', function () {
  eq(C.atwaterKcal({ protein: 10, carbs: 10, fat: 10, fiber: 10 }), 190);
  eq(C.atwaterKcal({ protein: 25 }), 100, 'protein only');
  eq(C.atwaterKcal({}), 0, 'empty');
});

t('atwaterKcal treats missing macros as zero, never NaN', function () {
  const v = C.atwaterKcal({ protein: 20, carbs: undefined, fat: null });
  eq(v, 80);
});

t('a label that reconstructs exactly has zero delta', function () {
  const d = food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 165 } })._d;
  near(d.energyDelta, 0, 1e-12, 'delta');
  ok(d.flags.indexOf('energy-mismatch') === -1, 'no flag');
});

t('a label off by more than 18% is flagged', function () {
  const d = food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 100 } })._d;
  near(d.energyDelta, 0.65, 1e-12, 'delta');
  ok(d.flags.indexOf('energy-mismatch') !== -1, 'flag raised');
});

t('the flag threshold is ±18% and is symmetric', function () {
  // predicted 165 kcal; declared 200 → −17.5% (under), declared 140 → +17.9%
  ok(food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 200 } })._d.flags.indexOf('energy-mismatch') === -1,
    '−17.5% must pass');
  ok(food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 140 } })._d.flags.indexOf('energy-mismatch') === -1,
    '+17.9% must pass');
  ok(food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 130 } })._d.flags.indexOf('energy-mismatch') !== -1,
    '+26.9% must fail');
  ok(food({ per100g: { protein: 20, carbs: 10, fat: 5, kcal: 220 } })._d.flags.indexOf('energy-mismatch') !== -1,
    '−25% must fail');
});

t('sugars > carbs and satFat > fat raise their own flags', function () {
  const d = food({ per100g: { protein: 5, carbs: 10, sugars: 12, fat: 3, satFat: 5, kcal: 87 } })._d;
  ok(d.flags.indexOf('sugars-gt-carbs') !== -1, 'sugars flag');
  ok(d.flags.indexOf('satfat-gt-fat') !== -1, 'satfat flag');
});

t('rounding noise of 0.01 does not raise a flag', function () {
  const d = food({ per100g: { protein: 5, carbs: 10, sugars: 10.01, fat: 3, satFat: 3.01, kcal: 87 } })._d;
  ok(d.flags.indexOf('sugars-gt-carbs') === -1, 'sugars');
  ok(d.flags.indexOf('satfat-gt-fat') === -1, 'satfat');
});

/* =======================================================================
 * 9. PRICE NORMALISATION
 * ==================================================================== */
section('9. Prices');

t('priceForStore computes the four cost views', function () {
  const p = C.priceForStore({ name: 'Kaufland', priceRon: 30, packGrams: 500 }, { protein: 20 });
  eq(p.pricePerKg, 60, 'pricePerKg');
  eq(p.pricePer100g, 6, 'pricePer100g');
  near(p.proteinPerRon, 100 / 30, 1e-12, 'proteinPerRon');
  eq(p.ronPer100gProtein, 30, 'ronPer100gProtein');
  eq(p.band, 0.2, 'band');
  eq(p.verified, false, 'verified');
});

t('priceForStore returns null on missing inputs', function () {
  eq(C.priceForStore(null, { protein: 20 }), null, 'no store');
  eq(C.priceForStore({ name: 'X', packGrams: 100 }, { protein: 20 }), null, 'no price');
  eq(C.priceForStore({ name: 'X', priceRon: 10 }, { protein: 20 }), null, 'no packGrams');
  eq(C.priceForStore({ name: 'X', priceRon: 10, packGrams: 0 }, { protein: 20 }), null, 'zero packGrams');
  eq(C.priceForStore({ name: 'X', priceRon: 10, packGrams: 100 }, { protein: 0 }), null, 'no protein');
  eq(C.priceForStore({ name: 'X', priceRon: 10, packGrams: 100 }, {}), null, 'empty nutrition');
});

t('a verified price collapses its band to zero', function () {
  const p = C.priceForStore({ name: 'Piața Cibin', priceRon: 30, packGrams: 500, verified: true }, { protein: 20 });
  eq(p.band, 0, 'band');
  eq(p.verified, true, 'verified');
});

t('the cheapest protein wins, not the cheapest pack', function () {
  const d = food({
    per100g: { protein: 20, kcal: 100 },
    stores: [
      { name: 'Kaufland', priceRon: 10, packGrams: 200 },  // 25 lei/100 g protein
      { name: 'Lidl', priceRon: 18, packGrams: 1000 },     // 9 lei/100 g protein
      { name: 'Profi', priceRon: 12, packGrams: 300 }      // 20 lei/100 g protein
    ]
  })._d;
  eq(d.prices.length, 3, 'all priced');
  eq(d.bestPrice.name, 'Lidl', 'best store');
  eq(d.ronPer100gProtein, 9, 'best cost');
  eq(d.prices[0].name, 'Lidl', 'sorted ascending');
  eq(d.prices[2].name, 'Kaufland', 'sorted ascending');
});

t('the uncertainty band widens around the estimate', function () {
  const d = food({ per100g: { protein: 20 }, stores: [{ name: 'Piața Cibin', priceRon: 20, packGrams: 100 }] })._d;
  eq(d.priceBand, 0.3, 'band');
  near(d.ronPer100gProteinLo, 70, 1e-9, 'lo');
  near(d.ronPer100gProteinHi, 130, 1e-9, 'hi');
  ok(d.ronPer100gProteinLo < d.ronPer100gProtein, 'lo below');
  ok(d.ronPer100gProteinHi > d.ronPer100gProtein, 'hi above');
});

t('cost per serving follows the serving size', function () {
  const d = food({ per100g: { protein: 20 }, serving: { grams: 250 },
    stores: [{ name: 'Kaufland', priceRon: 8, packGrams: 1000 }] })._d;
  near(d.costPerServing, 2, 1e-9);
});

t('availability flags read the store rows', function () {
  const d = food({ per100g: { protein: 20 },
    stores: [{ name: 'Kaufland', availability: 'usual' }, { name: 'Lidl', availability: 'always' }] })._d;
  eq(d.storeCount, 2, 'count');
  eq(d.alwaysAvailable, true, 'alwaysAvailable');
  eq(d.onlineOnly, false, 'onlineOnly');
  eq(food({ per100g: { protein: 20 }, stores: [{ name: 'Online RO' }] })._d.onlineOnly, true, 'online only');
  eq(food({ per100g: { protein: 20 } })._d.onlineOnly, false, 'no stores is not online-only');
});

/* =======================================================================
 * 10. DERIVED TAGS AND SEARCH BLOB
 * ==================================================================== */
section('10. Derived tags');

t('protein tags trip at 15 and 25 g', function () {
  eq(food({ per100g: { protein: 25, kcal: 200 } })._d.allTags.indexOf('very-high-protein') !== -1, true, '25 g');
  eq(food({ per100g: { protein: 24.9, kcal: 200 } })._d.allTags.indexOf('very-high-protein') !== -1, false, '24.9 g');
  eq(food({ per100g: { protein: 15, kcal: 200 } })._d.allTags.indexOf('high-protein') !== -1, true, '15 g');
  eq(food({ per100g: { protein: 14.9, kcal: 200 } })._d.allTags.indexOf('high-protein') !== -1, false, '14.9 g');
});

t('cheap-protein needs a price at or below 6 lei / 100 g protein', function () {
  const cheap = food({ per100g: { protein: 100 }, stores: [storeAt(6)] })._d;
  const dear = food({ per100g: { protein: 100 }, stores: [storeAt(6.1)] })._d;
  ok(cheap.allTags.indexOf('cheap-protein') !== -1, 'at 6 lei');
  ok(dear.allTags.indexOf('cheap-protein') === -1, 'at 6.1 lei');
  ok(food({ per100g: { protein: 100 } })._d.allTags.indexOf('cheap-protein') === -1, 'unknown price is not cheap');
});

t('no-cook is derived from timeMin === 0 only', function () {
  ok(food({ timeMin: 0 })._d.allTags.indexOf('no-cook') !== -1, 'timeMin 0');
  ok(food({ timeMin: 1 })._d.allTags.indexOf('no-cook') === -1, 'timeMin 1');
});

t('authored tags survive alongside derived ones', function () {
  const d = food({ tags: ['vegan', 'high-protein'], per100g: { protein: 30, kcal: 120 } })._d;
  ok(d.allTags.indexOf('vegan') !== -1, 'authored kept');
  ok(d.allTags.indexOf('very-high-protein') !== -1, 'derived added');
  eq(d.allTags.filter(x => x === 'high-protein').length, 1, 'no duplicates');
});

t('the search blob is normalised and skips empty fields', function () {
  const d = food({ nameRo: 'Brânză de burduf', brand: null, tags: ['vegan'],
    stores: [{ name: 'Piața Cibin' }] })._d;
  eq(d.search, d.search.toLowerCase(), 'lowercased');
  ok(d.search.indexOf('branza') !== -1, 'diacritics folded');
  ok(d.search.indexOf('piata cibin') !== -1, 'store names indexed');
  ok(d.search.indexOf('null') === -1, 'no null leaked in');
});

t('the best timing slot is the highest scoring one', function () {
  eq(food({ timing: { breakfast: 3, lunch: 9, dinner: 5 } })._d.bestSlot, 'lunch', 'picks max');
  eq(food({ timing: {} })._d.bestSlot, null, 'no timing');
});

/* =======================================================================
 * 11. summarize()
 * ==================================================================== */
section('11. summarize()');

t('summarize on an empty list does not divide by zero', function () {
  const s = noThrow(() => C.summarize([]), 'summarize([])');
  if (!s) return;
  eq(s.count, 0, 'count');
  eq(s.avgProtein, 0, 'avgProtein');
  eq(s.cheapest, null, 'cheapest');
  eq(s.maxProteinItem, null, 'maxProteinItem');
});

t('summarize aggregates protein, price and tiers', function () {
  const a = food({ id: 'a', per100g: { protein: 30, kcal: 150 }, stores: [storeAt(10)] });
  const b = food({ id: 'b', per100g: { protein: 10, kcal: 150 }, stores: [storeAt(40)] });
  const s = C.summarize([a, b]);
  eq(s.count, 2, 'count');
  eq(s.avgProtein, 20, 'avgProtein');
  eq(s.maxProteinItem.id, 'a', 'maxProteinItem');
  eq(s.cheapest.id, 'a', 'cheapest');
  eq(s.categories['dairy-eggs'], 2, 'categories');
  eq(s.stores.Kaufland, 2, 'store counts');
  ok(s.storeList.indexOf('Kaufland') !== -1, 'storeList');
});

t('summarize only reports genuine data-quality problems', function () {
  const clean = food({ id: 'clean', per100g: { protein: 20, carbs: 10, fat: 5, kcal: 165 } });
  const noPrice = food({ id: 'nop', per100g: { protein: 20, carbs: 10, fat: 5, kcal: 165 } });
  const collagen = food({ id: 'c-colagen', nameRo: 'Colagen', per100g: { protein: 90, carbs: 0, fat: 0, kcal: 360 } });
  const broken = food({ id: 'broken', per100g: { protein: 20, carbs: 10, fat: 5, kcal: 100 } });
  const s = C.summarize([clean, noPrice, collagen, broken]);
  const ids = s.flagged.map(x => x.id);
  ok(ids.indexOf('nop') === -1, 'a missing price is not a data-quality problem');
  ok(ids.indexOf('c-colagen') === -1, 'a quality correction is not a data-quality problem');
  ok(ids.indexOf('broken') !== -1, 'a broken label is reported');
});

/* =======================================================================
 * 12. findSimilar / findUpgrade
 * ==================================================================== */
section('12. findSimilar / findUpgrade');

const simBase = food({ id: 'base', category: 'dairy-eggs', subcategory: 'iaurt',
  per100g: { protein: 10, kcal: 60 }, timeMin: 0, effort: 1, tags: ['racoritor'] });
const simTwin = food({ id: 'twin', category: 'dairy-eggs', subcategory: 'iaurt',
  per100g: { protein: 10.5, kcal: 65 }, timeMin: 0, effort: 1, tags: ['racoritor'] });
const simFar = food({ id: 'far', category: 'fresh-meat', subcategory: 'vita',
  per100g: { protein: 26, kcal: 250 }, timeMin: 20, effort: 4 });
const simPool = [simBase, simTwin, simFar];

t('findSimilar never returns the item itself', function () {
  const r = C.findSimilar(simBase, simPool, 6);
  eq(r.filter(x => x.id === 'base').length, 0, 'self excluded');
  ok(r.length > 0, 'still finds neighbours');
});

t('findSimilar ranks the near twin first', function () {
  eq(C.findSimilar(simBase, simPool, 6)[0].id, 'twin');
});

t('findSimilar survives an empty or self-only list', function () {
  eq(noThrow(() => C.findSimilar(simBase, [], 6), 'empty').length, 0, 'empty list');
  eq(noThrow(() => C.findSimilar(simBase, [simBase], 6), 'self only').length, 0, 'self only');
});

t('findSimilar honours the count limit and defaults to 6', function () {
  const many = [];
  for (let i = 0; i < 20; i++) {
    many.push(food({ id: 'm' + i, category: 'dairy-eggs', subcategory: 'iaurt',
      per100g: { protein: 10 + i * 0.1, kcal: 60 } }));
  }
  eq(C.findSimilar(simBase, many, 3).length, 3, 'limit 3');
  eq(C.findSimilar(simBase, many).length, 6, 'default 6');
});

t('findSimilar tolerates entries without an effort value', function () {
  const noEffort = food({ id: 'noeff', category: 'dairy-eggs', subcategory: 'iaurt',
    per100g: { protein: 10, kcal: 60 }, effort: undefined });
  const r = noThrow(() => C.findSimilar(simBase, [noEffort], 6), 'no effort');
  eq(r.length, 1, 'still matched');
});

t('findUpgrade returns null when nothing is strictly better', function () {
  eq(C.findUpgrade(simBase, []), null, 'empty list');
  eq(C.findUpgrade(simBase, [simBase]), null, 'self only');
  eq(C.findUpgrade(simFar, simPool), null, 'nothing beats the leader');
});

t('findUpgrade needs 15% more protein AND more purity AND no big time cost', function () {
  const base = food({ id: 'u-base', per100g: { protein: 20, kcal: 100 }, timeMin: 10 });
  const better = food({ id: 'u-better', per100g: { protein: 30, kcal: 120 }, timeMin: 10 });
  const onlyABitMore = food({ id: 'u-bit', per100g: { protein: 22, kcal: 88 }, timeMin: 10 });
  const notPurer = food({ id: 'u-fat', per100g: { protein: 30, kcal: 400 }, timeMin: 10 });
  const tooSlow = food({ id: 'u-slow', per100g: { protein: 30, kcal: 120 }, timeMin: 40 });
  const all = [base, better, onlyABitMore, notPurer, tooSlow];
  const up = C.findUpgrade(base, all);
  ok(up !== null, 'found an upgrade');
  if (up) eq(up.id, 'u-better', 'the right upgrade');
  eq(C.findUpgrade(base, [base, onlyABitMore]), null, 'under +15% protein rejected');
  eq(C.findUpgrade(base, [base, notPurer]), null, 'lower purity rejected');
  eq(C.findUpgrade(base, [base, tooSlow]), null, 'slower than +5 min rejected');
});

t('findUpgrade picks the highest scoring candidate', function () {
  const base = food({ id: 'p-base', per100g: { protein: 20, kcal: 100 }, timeMin: 0 });
  const good = food({ id: 'p-good', per100g: { protein: 30, kcal: 120 }, timeMin: 0,
    stats: { taste: 20, satiety: 20, convenience: 20 } });
  const best = food({ id: 'p-best', per100g: { protein: 30, kcal: 120 }, timeMin: 0,
    stats: { taste: 90, satiety: 90, convenience: 90 } });
  const up = C.findUpgrade(base, [base, good, best]);
  if (up) eq(up.id, 'p-best');
  else bad('no upgrade found');
});

/* =======================================================================
 * 13. fmt.num
 * ==================================================================== */
section('13. fmt.num');

t('num drops trailing zeros', function () {
  eq(F.num(21.0), '21', '21.0');
  eq(F.num(21.5, 1), '21.5', '21.5');
  eq(F.num(21.53, 1), '21.5', 'round down');
  eq(F.num(21.55, 1), '21.6', 'round up');
  eq(F.num(0), '0', 'zero');
});

t('num honours the decimals argument', function () {
  eq(F.num(1234.567, 2), '1234.57', '2 decimals');
  eq(F.num(1234.567, 0), '1235', '0 decimals');
  eq(F.num(0.04, 2), '0.04', 'small with 2 decimals');
});

t('a small non-zero value never collapses to a bare 0', function () {
  eq(F.num(0.04), '<0.1', '0.04');
  eq(F.num(0.001), '<0.1', '0.001');
  eq(F.num(0.05), '0.1', '0.05 rounds up instead');
});

t('num never renders a negative zero', function () {
  eq(F.num(-0.04, 1), '0', '-0.04');
  eq(F.num(-0.0), '0', '-0');
});

t('num returns an em dash for empty values', function () {
  eq(F.num(null), '—', 'null');
  eq(F.num(undefined), '—', 'undefined');
  eq(F.num(NaN), '—', 'NaN');
});

t('num never prints Infinity or NaN on screen', function () {
  eq(F.num(Infinity), '—', 'Infinity');
  eq(F.num(-Infinity), '—', '-Infinity');
  eq(F.num(1 / 0, 2), '—', 'division by zero');
  eq(F.num('nu e număr'), '—', 'non-numeric string');
});

t('int and kcal are protected the same way', function () {
  eq(F.int(null), '—', 'null');
  eq(F.int(NaN), '—', 'NaN');
  eq(F.int(Infinity), '—', 'Infinity');
  eq(F.int(1240.6), (1241).toLocaleString('ro-RO'), 'rounds and groups');
  eq(F.kcal(Infinity), '— kcal', 'kcal of a broken number');
  eq(F.pct(42), '42%', 'pct');
  eq(F.g(21.04), '21 g', 'g');
});

/* =======================================================================
 * 14. fmt.minutes
 * ==================================================================== */
section('14. fmt.minutes');

t('0 minutes is instant', function () {
  eq(F.minutes(0), 'instant', 'ro');
  eq(F.minutes(0, 'en'), 'instant', 'en');
});

t('under an hour stays in minutes', function () {
  eq(F.minutes(1), '1 min', '1');
  eq(F.minutes(59), '59 min', '59');
});

t('exactly an hour drops the minutes', function () {
  eq(F.minutes(60), '1 h', '60');
  eq(F.minutes(120), '2 h', '120');
});

t('hours and minutes are combined', function () {
  eq(F.minutes(61), '1 h 1 min', '61');
  eq(F.minutes(95), '1 h 35 min', '95');
  eq(F.minutes(1439), '23 h 59 min', '1439');
});

t('a full day reads as 24 h', function () {
  eq(F.minutes(1440), '24 h');
});

t('a missing time is an em dash, never "NaN h"', function () {
  eq(F.minutes(undefined), '—', 'undefined');
  eq(F.minutes(null), '—', 'null');
  eq(F.minutes(NaN), '—', 'NaN');
});

t('timeBucket colours the chip', function () {
  eq(F.timeBucket(0), 'instant', '0');
  eq(F.timeBucket(10), 'quick', '10');
  eq(F.timeBucket(11), 'medium', '11');
  eq(F.timeBucket(30), 'medium', '30');
  eq(F.timeBucket(31), 'slow', '31');
});

/* =======================================================================
 * 15. MONEY
 * ==================================================================== */
section('15. fmt.ron / ronApprox / ronRange');

t('Romanian prices use a decimal comma', function () {
  F.setLocale('ro');
  eq(F.ron(12.49), '12,49 lei', 'ro-RO');
  F.setLocale('en');
  eq(F.ron(12.49), '12.49 lei', 'en-GB');
  F.setLocale('ro');
});

t('ron has no value to show for zero or empty input', function () {
  eq(F.ron(0), '—', '0');
  eq(F.ron(null), '—', 'null');
  eq(F.ron(undefined), '—', 'undefined');
  eq(F.ron(NaN), '—', 'NaN');
});

t('ronShort tightens as the number grows', function () {
  eq(F.ronShort(4.5), '4,50 lei', 'under 10');
  eq(F.ronShort(45.5), '45,5 lei', 'under 100');
  eq(F.ronShort(145.4), '145 lei', 'over 100');
  eq(F.ronShort(0), '—', 'zero');
});

t('an unverified price always carries the ≈ marker', function () {
  eq(F.ronApprox(12.49), '≈ 12,49 lei', 'default');
  eq(F.ronApprox(12.49, { short: true }), '≈ 12,5 lei', 'short form still marked');
  eq(F.ronApprox(0), '—', 'zero');
});

t('only a verified price may look exact', function () {
  eq(F.ronApprox(12.49, { verified: true }), '12,49 lei');
});

t('ronRange prints the honest spread', function () {
  eq(F.ronRange(30, 24, 36), '≈ 30 lei (24–36)');
});

t('ronRange keeps one decimal under 10 lei, in the local separator', function () {
  eq(F.ronRange(5.4, 4.3, 6.5), '≈ 5,4 lei (4,3–6,5)', 'ro-RO');
  F.setLocale('en');
  eq(F.ronRange(5.4, 4.3, 6.5), '≈ 5.4 lei (4.3–6.5)', 'en-GB');
  F.setLocale('ro');
});

t('ronRange falls back when the band is unknown', function () {
  eq(F.ronRange(30, null, null), '≈ 30,00 lei', 'no bounds');
  eq(F.ronRange(30, undefined, undefined), '≈ 30,00 lei', 'undefined bounds');
  eq(F.ronRange(null, 1, 2), '—', 'no value');
});

t('a verified price drops both the ≈ and the range', function () {
  eq(F.ronRange(30, 24, 36, { verified: true }), '30,00 lei');
});

/* =======================================================================
 * 16. fmt.normalize
 * ==================================================================== */
section('16. fmt.normalize');

t('Romanian diacritics fold to ASCII', function () {
  eq(F.normalize('Brânză'), 'branza', 'â ă');
  eq(F.normalize('Șuncă'), 'sunca', 'ș');
  eq(F.normalize('Țelină'), 'telina', 'ț');
  eq(F.normalize('Ouă fierte'), 'oua fierte', 'phrase');
});

t('both the comma-below and cedilla forms of ș/ț fold', function () {
  eq(F.normalize('şuncă'), 'sunca', 'cedilla s');
  eq(F.normalize('ţelină'), 'telina', 'cedilla t');
  eq(F.normalize('ȘUNCĂ'), 'sunca', 'uppercase comma-below');
  eq(F.normalize('ŞUNCĂ'), 'sunca', 'uppercase cedilla');
});

t('normalize preserves string length — highlight() depends on it', function () {
  ['Brânză de burduf', 'ȘUNCĂ ȚĂRĂNEASCĂ', 'Pui à la grecque', 'Crème fraîche',
   'Jalapeño', 'ŒUF', 'İstanbul', 'ǅungla', 'Straße', 'ﬁle', 'ĂÎÂȘȚăîâșț', 'ABC 123 %&'
  ].forEach(function (s) {
    eq(F.normalize(s).length, s.length, JSON.stringify(s));
  });
});

t('normalize is idempotent', function () {
  const s = 'Brânză Șuncă Țelină';
  eq(F.normalize(F.normalize(s)), F.normalize(s));
});

t('normalize accepts non-strings without throwing', function () {
  eq(noThrow(() => F.normalize(123), 'number'), '123', 'number');
  eq(noThrow(() => F.normalize(''), 'empty'), '', 'empty');
});

/* =======================================================================
 * 17. fmt.esc / fmt.highlight
 * ==================================================================== */
section('17. fmt.esc / fmt.highlight');

t('esc neutralises every markup character', function () {
  eq(F.esc('<b>&"\'</b>'), '&lt;b&gt;&amp;&quot;&#39;&lt;/b&gt;');
  eq(F.esc(null), '', 'null');
  eq(F.esc(undefined), '', 'undefined');
});

t('highlight wraps the match', function () {
  eq(F.highlight('Brânză de vaci', 'branza'), '<mark>Brânză</mark> de vaci');
});

t('highlight matches without diacritics, in both directions', function () {
  eq(F.highlight('Branza de vaci', 'brânză'), '<mark>Branza</mark> de vaci', 'query has diacritics');
  eq(F.highlight('Șuncă de Praga', 'sunca'), '<mark>Șuncă</mark> de Praga', 'text has diacritics');
});

t('highlight marks every occurrence', function () {
  eq(F.highlight('ou ou ou', 'ou'), '<mark>ou</mark> <mark>ou</mark> <mark>ou</mark>');
});

t('highlight is case insensitive but preserves the original case', function () {
  eq(F.highlight('Piept de PUI', 'pui'), 'Piept de <mark>PUI</mark>');
});

t('a mark can never land inside an HTML entity', function () {
  eq(F.highlight('Sare & piper', 'amp'), 'Sare &amp; piper', '"amp" must not match the entity');
  eq(F.highlight('Sare & piper', 'quot'), 'Sare &amp; piper', '"quot" must not match');
  eq(F.highlight('a < b', 'lt'), 'a &lt; b', '"lt" must not match');
});

t('highlight escapes the matched slice as well', function () {
  eq(F.highlight('A&B mix', 'a&b'), '<mark>A&amp;B</mark> mix');
  eq(F.highlight('<script> pui', 'pui'), '&lt;script&gt; <mark>pui</mark>');
});

t('queries under two characters are ignored', function () {
  eq(F.highlight('Ou fiert', 'o'), 'Ou fiert', 'single char');
  eq(F.highlight('Ou fiert', ' '), 'Ou fiert', 'whitespace');
  eq(F.highlight('Ou fiert', ''), 'Ou fiert', 'empty');
  eq(F.highlight('Ou fiert', null), 'Ou fiert', 'null');
});

t('highlight handles missing text', function () {
  eq(F.highlight(null, 'pui'), '', 'null');
  eq(F.highlight(undefined, 'pui'), '', 'undefined');
  eq(F.highlight('', 'pui'), '', 'empty');
});

t('a query longer than the text yields no match', function () {
  eq(F.highlight('Ou', 'ou fiert cu sare'), 'Ou');
});

t('the highlighted text still reads as the original', function () {
  const raw = 'Brânză & <telemea> de oaie';
  const out = F.highlight(raw, 'telemea');
  const plain = out
    .replace(/<\/?mark>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
  eq(plain, raw, 'round trip');
  eq((out.match(/<mark>/g) || []).length, (out.match(/<\/mark>/g) || []).length, 'balanced tags');
});

/* =======================================================================
 * 18. fmt.plural AND FRIENDS
 * ==================================================================== */
section('18. fmt.plural, titleize, truncate');

t('Romanian plural: 1 singular, 2–19 plain plural, 20+ takes "de"', function () {
  eq(F.plural(1, 'produs', 'produse'), '1 produs', '1');
  eq(F.plural(2, 'produs', 'produse'), '2 produse', '2');
  eq(F.plural(19, 'produs', 'produse'), '19 produse', '19');
  eq(F.plural(20, 'produs', 'produse'), '20 de produse', '20');
  eq(F.plural(21, 'produs', 'produse'), '21 de produse', '21');
  eq(F.plural(0, 'produs', 'produse'), '0 produse', '0');
});

t('the "de" rule follows the last two digits', function () {
  eq(F.plural(100, 'produs', 'produse'), '100 de produse', '100');
  eq(F.plural(101, 'produs', 'produse'), '101 produse', '101');
  eq(F.plural(119, 'produs', 'produse'), '119 produse', '119');
  eq(F.plural(120, 'produs', 'produse'), '120 de produse', '120');
  eq(F.plural(505, 'produs', 'produse'), '505 produse', '505');
});

t('plural accepts a separate "many" form', function () {
  eq(F.plural(30, 'oră', 'ore', 'ore'), '30 de ore');
  eq(F.plural(3, 'oră', 'ore', 'ore'), '3 ore');
});

t('titleize turns a slug into a label', function () {
  eq(F.titleize('ready-to-eat'), 'Ready To Eat', 'dashes');
  eq(F.titleize('plant_protein'), 'Plant Protein', 'underscores');
  eq(F.titleize('branza'), 'Branza', 'single word');
});

t('truncate cuts at a word boundary and adds an ellipsis', function () {
  eq(F.truncate('abc', 10), 'abc', 'short enough');
  eq(F.truncate('', 10), '', 'empty');
  eq(F.truncate(null, 10), '', 'null');
  const out = F.truncate('Brânză de burduf de Sibiu maturată', 20);
  ok(out.length <= 21, 'length ' + out.length);
  ok(out.slice(-1) === '…', 'ends with ellipsis');
});

t('clamp and scale behave', function () {
  eq(F.clamp(5, 0, 10), 5, 'inside');
  eq(F.clamp(-5, 0, 10), 0, 'below');
  eq(F.clamp(50, 0, 10), 10, 'above');
  eq(F.scale(5, 0, 10, 0, 100), 50, 'midpoint');
  eq(F.scale(-1, 0, 10, 0, 100), 0, 'clamped low');
  eq(F.scale(11, 0, 10, 0, 100), 100, 'clamped high');
  eq(F.scale(5, 3, 3, 7, 9), 7, 'zero-width input range');
});

/* =======================================================================
 * 19. PF.store — URL HASH STATE (no DOM needed)
 * ==================================================================== */
section('19. PF.store.readHash / writeHash');

t('an empty hash means no state', function () {
  location.hash = '';
  eq(ST.readHash(), null, 'empty');
  location.hash = '#';
  eq(ST.readHash(), null, 'bare #');
});

t('readHash types values: numbers, booleans, lists, strings', function () {
  location.hash = '#cat=dairy-eggs&min=20&fav=true&hide=false&tags=vegan,keto&view=grid';
  const s = ST.readHash();
  eq(s.cat, 'dairy-eggs', 'string');
  eq(s.min, 20, 'number');
  eq(s.fav, true, 'true');
  eq(s.hide, false, 'false');
  eq(Array.isArray(s.tags), true, 'list is an array');
  eq(s.tags.join(','), 'vegan,keto', 'list values');
  eq(s.view, 'grid', 'plain string');
});

t('a numeric search query stays a string', function () {
  location.hash = '#q=100&min=100';
  const s = ST.readHash();
  eq(s.q, '100', 'q stays text');
  eq(s.min, 100, 'other keys become numbers');
});

t('readHash survives junk instead of throwing', function () {
  location.hash = '#%%%&&&=';
  const s = noThrow(() => ST.readHash(), 'junk hash');
  ok(s === null || typeof s === 'object', 'returned something usable');
});

t('readHash decodes percent-encoded Romanian text', function () {
  location.hash = '#q=' + encodeURIComponent('brânză');
  eq(ST.readHash().q, 'brânză');
});

/* =======================================================================
 * ASYNC TAIL — writeHash is debounced
 * ==================================================================== */
function asyncTests() {
  return new Promise(function (resolve) {
    history.calls.length = 0;
    location.hash = '';
    ST.writeHash({ cat: 'dairy-eggs', min: 20, fav: true, tags: ['vegan', 'keto'],
      empty: '', off: false, nothing: null, none: [] });
    setTimeout(function () {
      t('writeHash is debounced, then writes once', function () {
        eq(history.calls.length, 1, 'exactly one replaceState');
      });
      t('writeHash drops empty, false and null values', function () {
        const url = history.calls[0] || '';
        ok(url.indexOf('empty=') === -1, 'empty string dropped');
        ok(url.indexOf('off=') === -1, 'false dropped');
        ok(url.indexOf('nothing=') === -1, 'null dropped');
        ok(url.indexOf('none=') === -1, 'empty array dropped');
      });
      t('writeHash → readHash round trips', function () {
        const s = ST.readHash();
        if (!s) return bad('readHash returned null after writeHash');
        eq(s.cat, 'dairy-eggs', 'cat');
        eq(s.min, 20, 'min');
        eq(s.fav, true, 'fav');
        eq(s.tags.join(','), 'vegan,keto', 'tags');
      });

      history.calls.length = 0;
      ST.writeHash({ a: 1 });
      ST.writeHash({ a: 2 });
      ST.writeHash({});
      setTimeout(function () {
        t('rapid writeHash calls collapse into the last one', function () {
          eq(history.calls.length, 1, 'one write');
          eq(history.calls[0], '/index.html', 'empty state falls back to the path');
        });
        resolve();
      }, 260);
    }, 260);
  });
}

/* =======================================================================
 * REPORT
 * ==================================================================== */
function report() {
  const total = passed + failed;
  console.log('\n\x1b[1mtools/test-compute.js\x1b[0m');
  sections.forEach(function (s, i) {
    const end = i + 1 < sections.length ? sections[i + 1].at : total;
    console.log('  \x1b[2m' + String(end - s.at).padStart(3) + ' teste\x1b[0m  ' + s.title);
  });
  if (failures.length) {
    console.log('');
    failures.forEach(function (f) {
      console.log('  \x1b[31m✗ ' + f.name + '\x1b[0m');
      f.errs.forEach(e => console.log('      ' + e));
    });
  }
  console.log('\n' + '─'.repeat(60));
  if (failed) {
    console.log('\x1b[31m✗ ' + failed + ' din ' + total + ' teste au picat\x1b[0m');
    process.exit(1);
  }
  console.log('\x1b[32m✓ ' + passed + ' teste, toate trec\x1b[0m');
}

asyncTests().then(report);
