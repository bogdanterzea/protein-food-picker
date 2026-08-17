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
  '07-ready-meals', '08-bakery-drinks-sweets', '09-recipes'];
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
RAW.concat(RECIPES).forEach(f => {
  const e = f.emoji;
  if (e === undefined) return;
  if (typeof e !== 'string' || [...e].length > 3 || /[<>&"'\\]/.test(e)) {
    badEmoji.push((f.id || '?') + ': ' + JSON.stringify(e));
  }
});
badEmoji.length ? fail('câmp emoji nesigur sau prea lung', badEmoji.slice(0, 5).join(', '))
                : ok('toate emoji-urile sunt sigure pentru injectare');

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
