#!/usr/bin/env node
/* =========================================================================
 * PROTEIN ATLAS SIBIU — VERIFICATOR DE PREȚURI
 *
 * De ce există:
 *   Niciun preț din atlas nu e verificat. Sunt estimări pentru 2026 și sunt
 *   marcate ca atare peste tot în interfață (`≈` și o marjă de ±20–30%).
 *   Fișierul ăsta e singura cale prin care un preț poate fi promovat la
 *   „confirmat”.
 *
 * De ce nu e în aplicație:
 *   Aplicația funcționează complet offline și nu face niciun request de
 *   rețea. Verificarea e un pas separat, rulat manual, care scrie rezultatul
 *   înapoi în datele statice.
 *
 * Sursa:
 *   Open Prices (Open Food Facts) — https://prices.openfoodfacts.org
 *   Singurul API public și deschis de prețuri care acoperă România.
 *   Realitatea din august 2026: 84 de prețuri în RON în toată baza, aproape
 *   toate dulciuri și băuturi dintr-un singur magazin din Sibiu, în 2024.
 *   Suprapunerea cu un atlas de proteine e practic zero — dar baza e
 *   colaborativă și crește, așa că uneltea rămâne utilă.
 *
 * Folosire:
 *   node tools/verify-prices.js              # raportează potrivirile
 *   node tools/verify-prices.js --json out.json
 *
 * Ce face cu o potrivire:
 *   NU scrie automat în datele de produs. Tipărește exact linia pe care
 *   trebuie s-o pui în `stores[]`, cu `verified: true`, data și sursa.
 *   Confirmarea unui preț rămâne o decizie umană.
 * ========================================================================= */
'use strict';

const path = require('path');
const PROJECT = path.resolve(__dirname, '..');

/* ---- încarcă datele statice în același fel în care o face browserul ---- */
global.window = { location: { hash: '' } };
global.document = { documentElement: { setAttribute() {}, style: { setProperty() {} } } };

[
  'js/data/00-stores.js',
  'js/data/01-dairy-eggs.js', 'js/data/02-fresh-meat.js',
  'js/data/03-deli-processed.js', 'js/data/04-fish-seafood.js',
  'js/data/05-plant-protein.js', 'js/data/06-supplements-snacks.js',
  'js/data/07-ready-meals.js', 'js/data/08-bakery-drinks-sweets.js',
  'js/utils/format.js'
].forEach(f => require(path.join(PROJECT, f)));

const FOODS = global.window.PF_FOODS;
const fmt = global.window.PF.fmt;

const API = 'https://prices.openfoodfacts.org/api/v1/prices';

/* ---- normalizare pentru potrivire de nume ------------------------------ */
function norm(s) {
  return fmt.normalize(String(s || ''))
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Cuvinte prea generice ca să însemne o potrivire. */
const STOP = new Set([
  'de', 'cu', 'la', 'si', 'in', 'din', 'g', 'kg', 'ml', 'l', 'bio', 'produs',
  'natural', 'clasic', 'proaspat', 'proaspata', 'the', 'and'
]);

function tokens(s) {
  return norm(s).split(' ').filter(w => w.length > 2 && !STOP.has(w));
}

/** Jaccard pe cuvinte semnificative — suficient pentru o triere. */
function similarity(a, b) {
  const A = new Set(tokens(a));
  const B = new Set(tokens(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  A.forEach(w => { if (B.has(w)) inter++; });
  return inter / new Set([...A, ...B]).size;
}

async function fetchRoPrices() {
  const out = [];
  let page = 1;
  for (;;) {
    const url = `${API}?currency=RON&size=100&page=${page}`;
    const res = await fetch(url, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`Open Prices a răspuns ${res.status}`);
    const data = await res.json();
    const items = data.items || [];
    out.push(...items);
    if (out.length >= (data.total || 0) || !items.length || page > 40) break;
    page++;
  }
  return out;
}

function describe(p) {
  const prod = p.product || {};
  const loc = p.location || {};
  return {
    name: prod.product_name || prod.code || '(fără nume)',
    barcode: prod.code || null,
    price: p.price,
    store: loc.osm_name || '?',
    city: loc.osm_address_city || '?',
    date: p.date || null
  };
}

(async function main() {
  const wantJson = process.argv.indexOf('--json');
  console.log('Interoghez Open Prices pentru prețuri în RON…\n');

  let prices;
  try {
    prices = await fetchRoPrices();
  } catch (e) {
    console.error('Nu am putut contacta Open Prices:', e.message);
    console.error('Verificarea are nevoie de internet. Aplicația NU are.');
    process.exit(1);
  }

  const rows = prices.map(describe).filter(r => r.name !== '(fără nume)');
  console.log(`Prețuri RON disponibile: ${prices.length} (cu nume de produs: ${rows.length})`);

  const byStore = {};
  rows.forEach(r => { byStore[r.store] = (byStore[r.store] || 0) + 1; });
  console.log('Magazine:', Object.entries(byStore)
    .sort((a, b) => b[1] - a[1]).slice(0, 8)
    .map(([k, v]) => `${k}:${v}`).join(', '));

  /* ---- potrivire cu atlasul ---- */
  const THRESHOLD = 0.34;
  const matches = [];
  FOODS.forEach(food => {
    const label = (food.nameRo || food.name) + ' ' + (food.brand === 'generic' ? '' : food.brand);
    let best = null;
    rows.forEach(r => {
      const score = similarity(label, r.name);
      if (score >= THRESHOLD && (!best || score > best.score)) best = { score, row: r };
    });
    if (best) matches.push({ food, ...best });
  });

  console.log(`\nPotriviri peste pragul de ${THRESHOLD}: ${matches.length}\n`);

  if (!matches.length) {
    console.log('Nicio potrivire. Asta e rezultatul așteptat astăzi: baza Open Prices');
    console.log('pentru România conține în principal dulciuri, snackuri și băuturi.');
    console.log('Prețurile din atlas rămân estimări marcate cu ≈.');
  }

  matches
    .sort((a, b) => b.score - a.score)
    .forEach(m => {
      const r = m.row;
      console.log(`  ${(m.score * 100).toFixed(0)}%  ${m.food.id}`);
      console.log(`        atlas : ${m.food.nameRo || m.food.name}`);
      console.log(`        sursă : ${r.name} — ${r.price} RON @ ${r.store}, ${r.city}, ${r.date}`);
      console.log('        → dacă e același produs, pune în stores[]:');
      console.log(`          { name: '${r.store}', priceRon: ${r.price}, verified: true,`);
      console.log(`            priceDate: '${r.date}', priceSource: 'Open Prices / OFF' }`);
      console.log('');
    });

  if (wantJson !== -1 && process.argv[wantJson + 1]) {
    require('fs').writeFileSync(
      process.argv[wantJson + 1],
      JSON.stringify({ fetched: prices.length, matches: matches.map(m => ({
        foodId: m.food.id, score: m.score, source: m.row
      })) }, null, 2)
    );
    console.log('Scris în', process.argv[wantJson + 1]);
  }

  console.log('\nNimic nu a fost modificat automat. Confirmarea unui preț e o decizie umană.');
})();
