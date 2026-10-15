#!/usr/bin/env node
/* =========================================================================
 * PROTEIN ATLAS SIBIU — POARTA DE INTEGRITATE
 *
 * O singură comandă care spune dacă proiectul e sănătos:
 *     node tools/check.js
 *
 * Rulează asta după ORICE modificare. Iese cu cod 1 dacă ceva e rupt, deci
 * poate fi folosită și ca hook de commit.
 *
 * Verifică:
 *   1. sintaxa fiecărui fișier JS
 *   2. acoladele fiecărui fișier CSS
 *   3. încărcarea datelor + id-uri unice + câmpuri obligatorii
 *   4. enrich() pe toate produsele, fără excepții
 *   5. coerența nutrițională (Atwater, zaharuri ≤ carbo, saturate ≤ grăsimi)
 *   6. vocabularele controlate (magazine, etichete, enum-uri)
 *   7. rețetele: fiecare ingredient se rezolvă, macro-urile sunt finite
 *   8. onestitatea prețurilor (fără provenență inventată, fără preț brut în UI)
 *   9. paritatea dicționarului RO/EN
 * ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
let failures = 0;
let warnings = 0;

function ok(name, detail) {
  console.log('  \x1b[32m✓\x1b[0m ' + name + (detail ? '  \x1b[2m' + detail + '\x1b[0m' : ''));
}
function fail(name, detail) {
  failures++;
  console.log('  \x1b[31m✗\x1b[0m ' + name + (detail ? '  ' + detail : ''));
}
function warn(name, detail) {
  warnings++;
  console.log('  \x1b[33m!\x1b[0m ' + name + (detail ? '  \x1b[2m' + detail + '\x1b[0m' : ''));
}
function section(t) { console.log('\n\x1b[1m' + t + '\x1b[0m'); }

function walk(dir, ext, out) {
  out = out || [];
  if (!fs.existsSync(dir)) return out;
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, ext, out);
    else if (f.endsWith(ext)) out.push(p);
  });
  return out;
}

/* ---------------------------------------------------------------- 1. JS -- */
section('1. Sintaxă JavaScript');
const jsFiles = [
  ...walk(path.join(ROOT, 'js'), '.js'),
  ...walk(path.join(ROOT, 'tools'), '.js')
].sort();
let jsBad = 0;
jsFiles.forEach(f => {
  try {
    execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' });
  } catch (e) {
    jsBad++;
    fail('nu parsează: ' + path.relative(ROOT, f), String(e.stderr).split('\n')[1] || '');
  }
});
if (!jsBad) ok(jsFiles.length + ' fișiere JS parsează');

/* --------------------------------------------------------------- 2. CSS -- */
section('2. Acolade CSS');
const cssFiles = walk(path.join(ROOT, 'css'), '.css').sort();
let cssBad = 0;
cssFiles.forEach(f => {
  const s = fs.readFileSync(f, 'utf8');
  const open = (s.match(/\{/g) || []).length;
  const close = (s.match(/\}/g) || []).length;
  if (open !== close) { cssBad++; fail('acolade dezechilibrate: ' + path.basename(f), `{${open} }${close}`); }
});
if (!cssBad) ok(cssFiles.length + ' fișiere CSS echilibrate');

/* -------------------------------------------------------------- 3. DATE -- */
section('3. Încărcarea datelor');
global.window = { location: { hash: '', pathname: '/' }, history: { replaceState() {} }, addEventListener() {} };
global.document = { documentElement: { setAttribute() {}, style: { setProperty() {} } }, addEventListener() {} };

const DATA = ['00-stores', '01-dairy-eggs', '02-fresh-meat', '03-deli-processed',
  '04-fish-seafood', '05-plant-protein', '06-supplements-snacks',
  '07-ready-meals', '08-bakery-drinks-sweets', '09-recipes',
  '10-dessert-pantry', '11-desserts-nobake', '12-desserts-baked',
  '13-desserts-fast', '14-dessert-reference', '15-desserts-light', '16-desserts-light-fruit',
  '17-desserts-protein-classics'];
try {
  DATA.forEach(f => require(path.join(ROOT, 'js/data', f + '.js')));
  ['format', 'i18n', 'compute', 'storage'].forEach(f => require(path.join(ROOT, 'js/utils', f + '.js')));
  ok('date + utilitare încărcate');
} catch (e) {
  fail('încărcarea a eșuat', e.message);
  process.exit(1);
}

const PF = global.window.PF;
const RAW = global.window.PF_FOODS || [];
const STORES = global.window.PF_STORES || [];
const RECIPES = global.window.PF_RECIPES || [];
const PANTRY = global.window.PF_PANTRY || {};
const DESSERTS = global.window.PF_DESSERTS || [];
const DPANTRY = global.window.PF_DESSERT_PANTRY || {};
const DREF = global.window.PF_DESSERT_REF || [];

const ids = new Set();
const dupes = [];
const missing = [];
RAW.forEach(f => {
  if (!f.id || !f.per100g || typeof f.per100g.protein !== 'number') missing.push(f && f.id);
  if (ids.has(f.id)) dupes.push(f.id);
  ids.add(f.id);
});
if (dupes.length) fail('id-uri duplicate', dupes.slice(0, 5).join(', ')); else ok('id-uri unice', RAW.length + ' produse');
if (missing.length) fail('câmpuri obligatorii lipsă', missing.slice(0, 5).join(', ')); else ok('câmpuri obligatorii prezente');

/* ------------------------------------------------------------ 4. ENRICH -- */
section('4. Metrici derivate');
let enrichErrors = [];
RAW.forEach(f => {
  f.unit = f.unit === 'ml' ? 'ml' : 'g';
  f.tags = f.tags || []; f.stores = f.stores || []; f.timing = f.timing || {};
  f.diet = f.diet || {}; f.taste = f.taste || {};
  f.cooking = f.cooking || { method: 'none', steps: [], equipment: [] };
  f.serving = f.serving || { grams: 100, label: '100 ' + f.unit };
  try {
    f._d = PF.compute.enrich(f);
    ['score', 'protein100', 'purityPct'].forEach(k => {
      if (!Number.isFinite(f._d[k])) enrichErrors.push(f.id + '.' + k);
    });
  } catch (e) { enrichErrors.push(f.id + ': ' + e.message); }
});
if (enrichErrors.length) fail('enrich a eșuat', enrichErrors.slice(0, 5).join(' | '));
else ok('enrich pe ' + RAW.length + ' produse, toate valorile finite');

/* -------------------------------------------------------- 5. NUTRITIONAL -- */
section('5. Coerență nutrițională');
const bad = { sugars: [], satFat: [], atwater: [], negative: [] };
RAW.forEach(f => {
  const n = f.per100g;
  if ((n.sugars || 0) > (n.carbs || 0) + 0.01) bad.sugars.push(f.id);
  if ((n.satFat || 0) > (n.fat || 0) + 0.01) bad.satFat.push(f.id);
  ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'salt'].forEach(k => {
    if (typeof n[k] === 'number' && n[k] < 0) bad.negative.push(f.id + '.' + k);
  });
  if (n.kcal > 0) {
    const pred = PF.compute.atwaterKcal(n);
    if (Math.abs(pred - n.kcal) / n.kcal > 0.18) bad.atwater.push(f.id);
  }
});
bad.sugars.length ? fail('zaharuri > carbohidrați', bad.sugars.slice(0, 4).join(', ')) : ok('zaharuri ≤ carbohidrați');
bad.satFat.length ? fail('saturate > grăsimi', bad.satFat.slice(0, 4).join(', ')) : ok('saturate ≤ grăsimi');
bad.negative.length ? fail('valori negative', bad.negative.slice(0, 4).join(', ')) : ok('fără valori negative');
bad.atwater.length ? warn('kcal vs Atwater peste ±18%', bad.atwater.length + ' produse: ' + bad.atwater.slice(0, 4).join(', '))
                   : ok('kcal coerente cu macro-urile (±18%)');

/* ------------------------------------------------------- 6. VOCABULARE -- */
section('6. Vocabulare controlate');
const storeNames = new Set(STORES.map(s => s.name));
const badStores = new Set();
const METHODS_OK = new Set(['none', 'reheat', 'boil', 'pan', 'grill', 'oven', 'airfryer',
  'slow', 'pressure', 'blend', 'assemble', 'soak', 'fry', 'steam']);
const AVAIL_OK = new Set(['always', 'usual', 'seasonal', 'occasional', 'online']);
const CONF_OK = new Set(['high', 'medium', 'low']);
const badMethod = [], badAvail = [], badConf = [];
RAW.forEach(f => {
  (f.stores || []).forEach(s => {
    if (!storeNames.has(s.name)) badStores.add(s.name);
    if (s.availability && !AVAIL_OK.has(s.availability)) badAvail.push(f.id + ':' + s.availability);
  });
  if (f.cooking && f.cooking.method && !METHODS_OK.has(f.cooking.method)) badMethod.push(f.id + ':' + f.cooking.method);
  if (!CONF_OK.has(f.dataConfidence)) badConf.push(f.id + ':' + f.dataConfidence);
});
badStores.size ? fail('magazine necunoscute', [...badStores].join(', ')) : ok('toate magazinele sunt în registru');
badMethod.length ? fail('metode de gătit invalide', badMethod.slice(0, 4).join(', ')) : ok('metode de gătit valide');
badAvail.length ? fail('disponibilitate invalidă', badAvail.slice(0, 4).join(', ')) : ok('disponibilitate validă');
badConf.length ? fail('dataConfidence invalid', badConf.slice(0, 4).join(', ')) : ok('dataConfidence valid');

/* --------------------------------------------------------- 7. DIETE ------ */
section('7. Coerența dietelor');
const ANIMAL = new Set(['fresh-meat', 'deli-processed', 'fish-seafood']);
const veganMeat = RAW.filter(f => f.diet && f.diet.vegan && ANIMAL.has(f.category));
const vegMeat = RAW.filter(f => f.diet && f.diet.vegetarian && ANIMAL.has(f.category));
const veganNotVeg = RAW.filter(f => f.diet && f.diet.vegan && f.diet.vegetarian === false);
veganMeat.length ? fail('carne/pește marcat vegan', veganMeat.slice(0, 4).map(f => f.id).join(', ')) : ok('nimic animal nu e marcat vegan');
vegMeat.length ? fail('carne/pește marcat vegetarian', vegMeat.slice(0, 4).map(f => f.id).join(', ')) : ok('nimic animal nu e marcat vegetarian');
veganNotVeg.length ? fail('vegan dar nu vegetarian', veganNotVeg.slice(0, 4).map(f => f.id).join(', ')) : ok('vegan implică vegetarian');

/* ------------------------------------------------------- 8. REȚETE ------- */
section('8. Rețete');
if (!RECIPES.length) warn('nicio rețetă încărcată');
else {
  const badRef = [];
  RECIPES.forEach(r => (r.ing || []).forEach(i => {
    if (i.id && !ids.has(i.id)) badRef.push(r.id + ' → ' + i.id);
    if (i.p && !PANTRY[i.p]) badRef.push(r.id + ' → cămara:' + i.p);
  }));
  badRef.length ? fail('ingrediente nerezolvate', badRef.slice(0, 5).join(' | '))
                : ok(RECIPES.length + ' rețete, toate ingredientele se rezolvă');

  const rIds = new Set(); const rDup = [];
  RECIPES.forEach(r => { if (rIds.has(r.id)) rDup.push(r.id); rIds.add(r.id); });
  rDup.length ? fail('id-uri de rețetă duplicate', rDup.join(', ')) : ok('id-uri de rețetă unice');

  const noSteps = RECIPES.filter(r => !(r.steps || []).length && r.method !== 'nocook');
  noSteps.length ? warn('rețete fără pași', noSteps.map(r => r.id).join(', ')) : ok('toate rețetele au pași');
}

/* ------------------------------------------------- 9. ONESTITATEA PREȚULUI */
section('9. Onestitatea prețurilor');
const FAKE = /observa[țt]ie|pia[țt]a cibin|\braft\b|vitrin|tejghea|tarab|magazin sibiu/i;
const HONEST = /neconfirmat/i;
const fakeClaims = [];
RAW.forEach(f => (f.sources || []).forEach(s => {
  if (FAKE.test(s) && !HONEST.test(s)) fakeClaims.push(f.id + ': ' + s);
}));
fakeClaims.length ? fail('provenență inventată (observație fizică)', fakeClaims.slice(0, 4).join(' | '))
                  : ok('nicio revendicare de observație în magazin');

const verified = RAW.filter(f => (f.stores || []).some(s => s.verified === true));
ok('prețuri marcate confirmat: ' + verified.length, verified.length ? '' : '(niciunul — corect, nu avem sursă)');

/* prețuri afișate fără marcaj de estimare */
const compFiles = walk(path.join(ROOT, 'js/components'), '.js').concat([path.join(ROOT, 'js/app.js')]);
const rawPrice = [];
compFiles.forEach(f => {
  const s = fs.readFileSync(f, 'utf8');
  s.split('\n').forEach((line, i) => {
    if (/fmt\.ron(Short)?\(/.test(line) && !/ronApprox|ronRange/.test(line)) {
      rawPrice.push(path.basename(f) + ':' + (i + 1));
    }
  });
});
rawPrice.length ? fail('preț afișat fără ≈', rawPrice.join(', '))
                : ok('toate prețurile trec prin formatorul de estimare');

/* ------------------------------------------------------- 8c. DESERTURI -- */
section('8c. Deserturi cheat');

if (!DESSERTS.length) {
  warn('niciun desert încărcat', 'js/data/1*-desserts-*.js');
} else {
  const FAMILY_OK = new Set(['no-bake', 'baked', 'frozen', 'drink', 'mug', 'batch']);
  const CRAVING_OK = new Set(['ciocolata', 'cremos', 'crocant', 'fructat',
    'patiserie', 'inghetata', 'caramel']);
  const DIFF_OK = new Set(['usor', 'mediu', 'greu']);
  const LINE_OK = new Set(['light', 'protein']);
  const CONF2_OK = new Set(['high', 'medium', 'low']);
  /* Macros belong to the ingredients, never to the recipe. A recipe that
   * declares its own kcal can drift away from what it actually contains,
   * which is the one thing this project refuses to allow. */
  const FORBIDDEN = ['kcal', 'protein', 'carbs', 'fat', 'sugars', 'fiber'];

  const dIds = new Set();
  const dupes2 = [], badVocab = [], unresolved = [], handTyped = [],
        noVs = [], shortSteps = [], polyolNoWarn = [];
  const atlasIds = new Set(RAW.map(f => f.id));

  DESSERTS.forEach(function (d) {
    if (dIds.has(d.id)) dupes2.push(d.id);
    dIds.add(d.id);
    if (!/^ds-/.test(d.id || '')) badVocab.push((d.id || '?') + ': prefix');

    if (!FAMILY_OK.has(d.family)) badVocab.push(d.id + ':family=' + d.family);
    if (!CRAVING_OK.has(d.craving)) badVocab.push(d.id + ':craving=' + d.craving);
    if (d.line !== undefined && !LINE_OK.has(d.line)) badVocab.push(d.id + ':line=' + d.line);
    if (d.difficulty && !DIFF_OK.has(d.difficulty)) badVocab.push(d.id + ':difficulty=' + d.difficulty);
    if (d.dataConfidence && !CONF2_OK.has(d.dataConfidence)) badVocab.push(d.id + ':conf=' + d.dataConfidence);

    FORBIDDEN.forEach(k => { if (typeof d[k] === 'number') handTyped.push(d.id + '.' + k); });

    if (!d.vs || !d.vs.name || !d.vsSource) noVs.push(d.id);
    if (!d.steps || d.steps.length < 3) shortSteps.push(d.id);

    (d.ing || []).forEach(function (i) {
      if (i.id && !atlasIds.has(i.id)) unresolved.push(d.id + ' -> atlas:' + i.id);
      if (i.p && !DPANTRY[i.p]) unresolved.push(d.id + ' -> cămară:' + i.p);
    });

    /* Polyols per serving, computed the same way the page computes them. */
    let polyol = 0;
    (d.ing || []).forEach(function (i) {
      const src = i.p ? DPANTRY[i.p] : null;
      if (src && src.polyol) polyol += (src.polyol * (i.g || 0)) / 100;
    });
    polyol = polyol / Math.max(1, d.servings || 1);
    if (polyol >= 15 && !(d.warnings || []).length) {
      polyolNoWarn.push(d.id + ' (' + Math.round(polyol) + ' g)');
    }
  });

  /* No non-sugar sweeteners, anywhere. The user asked for it outright, and a
   * pantry key is the only way one could slip back in — so the gate reads the
   * pantry itself, not just the recipes. */
  const NSS = /eritritol|erythritol|xilitol|xylitol|stevi|sucraloz|aspartam|maltitol|sorbitol|ciclamat|zaharin/i;
  const nssKeys = Object.keys(DPANTRY).filter(k => NSS.test(k) || NSS.test(DPANTRY[k].name || '') || DPANTRY[k].sweet);
  const nssUses = [];
  DESSERTS.forEach(d => (d.ing || []).forEach(i => { if (i.p && NSS.test(i.p)) nssUses.push(d.id + ' -> ' + i.p); }));
  nssKeys.length || nssUses.length
    ? fail('îndulcitori fără zahăr în cămară sau în rețete', nssKeys.concat(nssUses).slice(0, 4).join(', '))
    : ok('niciun îndulcitor fără zahăr — dulcele vine din fructe, miere sau zahăr');

  dupes2.length ? fail('id-uri de desert duplicate', dupes2.slice(0, 4).join(', '))
                : ok(DESSERTS.length + ' deserturi, id-uri unice');
  badVocab.length ? fail('vocabular în afara schemei', badVocab.slice(0, 4).join(', '))
                  : ok('familii, pofte și dificultăți valide');
  unresolved.length ? fail('ingrediente care nu se rezolvă', unresolved.slice(0, 4).join(', '))
                    : ok('toate ingredientele se rezolvă la atlas sau cămară');
  handTyped.length ? fail('macro-uri scrise de mână în rețetă', handTyped.slice(0, 4).join(', '))
                   : ok('niciun macro scris de mână — toate se calculează');
  noVs.length ? fail('deserturi fără comparație', noVs.slice(0, 4).join(', '))
              : ok('fiecare desert declară ce înlocuiește');
  shortSteps.length ? fail('sub 3 pași', shortSteps.slice(0, 4).join(', '))
                    : ok('toate au cel puțin 3 pași');
  polyolNoWarn.length ? fail('polioli mari fără avertisment', polyolNoWarn.slice(0, 4).join(', '))
                      : ok('poliolii peste prag sunt avertizați');

  /* Quality targets from the schema: reported, not enforced — the schema
   * allows exceptions when they are justified in `tips`. */
  /* Each line has its own bar. A 60-kcal jelly is not a failed protein
   * dessert, and a 300-kcal cheesecake is not a failed light one — so the
   * protein floor applies to the protein line only, and the calorie ceiling
   * is 350 there and 150 on the light line. */
  const lowP = [], heavy = [], heavyLight = [];
  DESSERTS.forEach(function (d) {
    const isLight = d.line === 'light';
    let p = 0, collagen = 0, kcal = 0;
    (d.ing || []).forEach(function (i) {
      const food = i.id ? RAW.filter(f => f.id === i.id)[0] : null;
      const src = food ? food.per100g : DPANTRY[i.p];
      if (!src) return;
      const grams = ((src.protein || 0) * (i.g || 0)) / 100;
      p += grams;
      kcal += ((src.kcal || 0) * (i.g || 0)) / 100;
      /* Gelatine protein counts on a label and builds nothing — no tryptophan.
       * Measuring the threshold against declared protein would let a recipe
       * clear 15 g on paper and miss it in the body, which is precisely the
       * kind of quiet lie the rest of this gate exists to prevent. */
      const isCollagen = food
        ? (food._d && food._d.qualityReason === 'collagen')
        : /gelatin|colagen/i.test((src.name || ''));
      if (isCollagen) collagen += grams;
    });
    const n = Math.max(1, d.servings || 1);
    const usable = (p - collagen) / n;
    if (!isLight && usable < 15) {
      lowP.push(d.id + ' (' + usable.toFixed(1) + ' g utilizabil' +
        (collagen > 0 ? ', din ' + (p / n).toFixed(1) + ' declarat' : '') + ')');
    }
    if (isLight) {
      if (kcal / n > 150) heavyLight.push(d.id + ' (' + Math.round(kcal / n) + ' kcal)');
    } else if (kcal / n > 350) {
      heavy.push(d.id + ' (' + Math.round(kcal / n) + ' kcal)');
    }
  });
  lowP.length ? warn('sub 15 g proteină pe porție', lowP.length + ': ' + lowP.slice(0, 3).join(', '))
              : ok('toate cele proteice peste 15 g proteină UTILIZABILĂ pe porție');
  heavy.length ? warn('peste 350 kcal pe porție', heavy.length + ': ' + heavy.slice(0, 3).join(', '))
               : ok('toate cele proteice sub 350 kcal pe porție');
  const lightN = DESSERTS.filter(d => d.line === 'light').length;
  if (lightN) {
    heavyLight.length
      ? warn('ușoare peste 150 kcal pe porție', heavyLight.length + ': ' + heavyLight.slice(0, 3).join(', '))
      : ok(lightN + ' deserturi ușoare, toate sub 150 kcal pe porție');
  }

  /* Cămara e o paletă pentru rețete viitoare, nu o listă care trebuie
   * consumată integral — dar dacă nimeni nu se uită, cheile nefolosite se
   * adună tăcut, exact ca datele despre magazine care n-au ajuns niciodată
   * pe ecran. Deci se numără, cu voce tare. */
  const usedKeys = new Set();
  DESSERTS.forEach(d => (d.ing || []).forEach(i => { if (i.p) usedKeys.add(i.p); }));
  const idleKeys = Object.keys(DPANTRY).filter(k => !usedKeys.has(k));
  idleKeys.length
    ? warn('chei de cămară nefolosite de nicio rețetă',
        idleKeys.length + ' din ' + Object.keys(DPANTRY).length + ': ' + idleKeys.slice(0, 6).join(', '))
    : ok('fiecare cheie de cămară e folosită');
}

/* Referința de deserturi „reale": aceleași verificări de coerență ca atlasul. */
if (DREF.length) {
  const refBad = [], refSug = [];
  DREF.forEach(function (r) {
    const n = r.per || {};
    if ((n.sugars || 0) > (n.carbs || 0) + 0.01) refSug.push(r.id);
    if (n.kcal > 0) {
      const pred = (n.protein || 0) * 4 + (n.carbs || 0) * 4 + (n.fat || 0) * 9;
      if (Math.abs(pred - n.kcal) / n.kcal > 0.15) refBad.push(r.id);
    }
  });
  refSug.length ? fail('referință: zaharuri > carbohidrați', refSug.slice(0, 4).join(', '))
                : ok('referință: zaharuri ≤ carbohidrați', DREF.length + ' dulciuri');
  refBad.length ? warn('referință: kcal vs Atwater peste ±15%', refBad.length + ': ' + refBad.slice(0, 3).join(', '))
                : ok('referință: kcal coerente cu macro-urile');
}

/* ----------------------------------------------------------- 8a. PWA --- */
section('8a. Instalare și offline');
const crypto = require('crypto');
const swPath = path.join(ROOT, 'sw.js');
const manPath = path.join(ROOT, 'manifest.webmanifest');

if (!fs.existsSync(swPath) || !fs.existsSync(manPath)) {
  fail('sw.js sau manifest.webmanifest lipsesc', 'rulează node tools/build-sw.js');
} else {
  const idxSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  /* Recompute exactly what tools/build-sw.js would, and compare. A stale
   * service worker is worse than none: it serves an old app from cache with
   * no sign that it is old. */
  /* Ask the generator rather than mirroring it. Every previous version of
   * this block reimplemented the file list, and every time the two drifted
   * the gate cried "stale worker" forever. */
  let expect = null, all = [];
  try {
    const out = execFileSync(process.execPath,
      [path.join(ROOT, 'tools/build-sw.js'), '--print-version'], { encoding: 'utf8' });
    const parsed = JSON.parse(out);
    expect = parsed.version;
    all = parsed.files;
  } catch (e) {
    fail('nu am putut interoga build-sw.js', e.message.split('\n')[0]);
  }

  const swSrc = fs.readFileSync(swPath, 'utf8');

  swSrc.indexOf("pf-atlas-" + expect) !== -1
    ? ok('service worker la zi', expect + ' · ' + all.length + ' fișiere')
    : fail('service worker învechit', 'rulează node tools/build-sw.js');

  const notCached = all.filter(a => a !== './' && swSrc.indexOf('"' + a + '"') === -1);
  notCached.length ? fail('fișiere neincluse în precache', notCached.slice(0, 4).join(', '))
                   : ok('tot ce încarcă paginile e în precache', all.length + ' fișiere');

  const man = JSON.parse(fs.readFileSync(manPath, 'utf8'));
  const need = ['name', 'short_name', 'start_url', 'display', 'icons'];
  const gaps = need.filter(k => !man[k]);
  const sizes = (man.icons || []).map(i => i.sizes);
  if (gaps.length) fail('manifest incomplet', gaps.join(', '));
  else if (sizes.indexOf('192x192') === -1 || sizes.indexOf('512x512') === -1) {
    fail('manifest fără iconițele cerute de Chrome', '192x192 și 512x512');
  } else if (!(man.icons || []).some(i => i.purpose === 'maskable')) {
    warn('manifest fără iconiță maskable', 'Android o va decupa pătrat');
  } else ok('manifest instalabil', man.icons.length + ' iconițe');

  /* The app must keep working from file://, where service workers are banned. */
  /^\s*if \(location\.protocol === 'file:'\) return;/m.test(idxSrc)
    ? ok('înregistrarea e sărită pe file://')
    : fail('lipsește garda pentru file://', 'aplicația trebuie să meargă și fără server');
}

/* --------------------------------------------------- 8b. DOCUMENTAȚIE --- */
section('8b. Documentația generată');
/* Fiecare .md trebuie să aibă perechea .html generată, iar aceasta nu are
 * voie să fie mai veche decât sursa — altfel cititorul vede o versiune
 * învechită fără niciun semn că e învechită. */
const mdFiles = walk(path.join(ROOT, 'docs'), '.md')
  .concat(fs.existsSync(path.join(ROOT, 'README.md')) ? [path.join(ROOT, 'README.md')] : []);
const missingHtml = [];
const staleHtml = [];
mdFiles.forEach(md => {
  const html = md.replace(/\.md$/, '.html');
  if (!fs.existsSync(html)) { missingHtml.push(path.relative(ROOT, md)); return; }
  if (fs.statSync(md).mtimeMs > fs.statSync(html).mtimeMs + 1000) {
    staleHtml.push(path.relative(ROOT, md));
  }
});
missingHtml.length
  ? fail('documente fără pagină HTML', missingHtml.slice(0, 4).join(', ') + ' — rulează node tools/build-docs.js')
  : ok(mdFiles.length + ' documente au pagină HTML');
staleHtml.length
  ? fail('pagini HTML învechite', staleHtml.slice(0, 4).join(', ') + ' — rulează node tools/build-docs.js')
  : ok('paginile generate sunt la zi');

/* Nicio legătură din aplicație nu are voie să trimită la Markdown brut. */
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const rawMdLinks = idx.match(/href="[^"]*\.md"/g) || [];
rawMdLinks.length ? fail('legături către Markdown brut în index.html', rawMdLinks.join(', '))
                  : ok('nicio legătură către Markdown brut');

/* ------------------------------------------------- 9a. GHID MAGAZINE ---- */
section('9a. Ghidul magazinelor');
/* Every `kind` in the store registry needs a Romanian label in the guide,
 * otherwise the card prints the raw slug ("cash-and-carry"). */
const guideSrc = fs.readFileSync(path.join(ROOT, 'js/components/stores.js'), 'utf8');
const kindBlock = guideSrc.slice(guideSrc.indexOf('const KIND_LABEL'), guideSrc.indexOf('let sort'));
const unlabelled = [...new Set(STORES.map(s => s.kind).filter(Boolean))]
  .filter(k => kindBlock.indexOf("'" + k + "'") === -1 && !new RegExp('\\b' + k + ':').test(kindBlock));
unlabelled.length ? fail('tip de magazin fără etichetă', unlabelled.join(', '))
                  : ok('toate tipurile de magazin au etichetă');

/* ------------------------------------------------- 9b. INJECTARE ÎN DOM -- */
section('9b. Siguranța injectării în DOM');
/* Emoji-urile se pun direct în innerHTML fără escapare, deci trebuie să fie
 * cu adevărat emoji — nu text arbitrar care ar putea conține markup. */
const badEmoji = [];
/* Not just products and recipes: cooking methods and stores carry emoji into
 * innerHTML too, and that gap let PF_METHODS through unchecked for a while. */
const METHODS = global.window.PF_METHODS || {};
const emojiBearing = RAW.concat(RECIPES).concat(DESSERTS).concat(STORES)
  .concat(Object.keys(METHODS).map(k => Object.assign({ id: 'method:' + k }, METHODS[k])));
emojiBearing.forEach(f => {
  const e = f.emoji;
  if (e === undefined) return;
  if (typeof e !== 'string' || [...e].length > 3 || /[<>&"'\\]/.test(e)) {
    badEmoji.push((f.id || '?') + ': ' + JSON.stringify(e));
  }
});
badEmoji.length ? fail('câmp emoji nesigur sau prea lung', badEmoji.slice(0, 5).join(', '))
                : ok('emoji sigure', emojiBearing.length + ' intrări: produse, rețete, magazine, metode');

/* ------------------------------------------------------------ 10. I18N --- */
section('10. Dicționar RO/EN');
try {
  const src = fs.readFileSync(path.join(ROOT, 'js/utils/i18n.js'), 'utf8');
  const roBlock = src.slice(src.indexOf('ro: {'), src.indexOf('en: {'));
  const enBlock = src.slice(src.indexOf('en: {'));
  const keys = b => new Set((b.match(/'[a-zA-Z][\w.]*':/g) || []).map(k => k.slice(1, -2)));
  const ro = keys(roBlock), en = keys(enBlock);
  const missingEn = [...ro].filter(k => !en.has(k));
  const missingRo = [...en].filter(k => !ro.has(k));
  if (missingEn.length) fail('chei fără traducere EN', missingEn.slice(0, 6).join(', '));
  if (missingRo.length) fail('chei fără traducere RO', missingRo.slice(0, 6).join(', '));
  if (!missingEn.length && !missingRo.length) ok('paritate completă', ro.size + ' chei');
} catch (e) { warn('nu am putut verifica i18n', e.message); }

/* ------------------------------------------------------------- REZUMAT --- */
console.log('\n' + '─'.repeat(60));
if (failures) {
  console.log(`\x1b[31m✗ ${failures} probleme\x1b[0m` + (warnings ? `, \x1b[33m${warnings} avertismente\x1b[0m` : ''));
  process.exit(1);
}
console.log(`\x1b[32m✓ totul e în regulă\x1b[0m` + (warnings ? `, \x1b[33m${warnings} avertismente\x1b[0m` : ''));
