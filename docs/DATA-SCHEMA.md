# PROTEIN ATLAS SIBIU — DATA SCHEMA (v1)

**This file is the contract.** Every data file in `js/data/` must follow it exactly.
The web app reads these fields by name. A missing or misspelled field = a broken card.

---

## 1. File format

Every data file is **plain browser JavaScript** (NOT an ES module — the site must work
from `file://` with no build step and no server). Wrap everything in an IIFE that
appends to a global array:

```js
/* =========================================================================
 * PROTEIN ATLAS SIBIU — <CATEGORY TITLE>
 * File: js/data/NN-slug.js
 * Items: <count>
 * Category slug: <category-slug>
 * ID prefix: <x->
 * Last researched: 2026-08
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    { /* ...entry 1... */ },
    { /* ...entry 2... */ },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
```

Keep the literal line `    // ---INSERT-NEW-ITEMS-ABOVE---` in the file. It is the
anchor you use to append further batches with the Edit tool, so you never have to
rewrite the whole file.

### Hard rules

- Must be **valid JavaScript**. If it does not parse, the whole site breaks.
- Numbers are **plain numbers**, never strings. `protein: 21.5` not `protein: "21.5"`.
- No `NaN`, no `null` for numbers — use `0` when genuinely zero, and omit an optional
  object only if the schema says it is optional.
- UTF-8, Romanian diacritics welcome (ă â î ș ț), exactly one emoji in `emoji`.
- Do not use backticks inside strings. Use single quotes for strings; escape
  internal apostrophes (`'Kaufland\'s'`) or just use double quotes for that string.
- Every `id` must be globally unique. Use your assigned prefix.

---

## 2. The entry schema

```js
{
  // ---- IDENTITY -------------------------------------------------------
  id: 'd-skyr-natural-milbona',   // kebab-case, unique, starts with your prefix
  name: 'Skyr, Plain',            // English common name
  nameRo: 'Skyr natural',         // the name as printed on the Romanian shelf label
  brand: 'Milbona (Lidl)',        // brand + retailer in parens; 'generic' if unbranded
  category: 'dairy-eggs',         // YOUR fixed category slug — identical in every entry
  subcategory: 'Iaurturi & brânzeturi proaspete',  // Romanian, free text, reused across similar items
  emoji: '🥛',                    // exactly ONE emoji, used as the card icon
  unit: 'g',                      // 'g' for solids, 'ml' for liquids. per100g is per 100 of this unit.

  // ---- WHERE TO BUY IT IN SIBIU --------------------------------------
  stores: [
    {
      name: 'Lidl',               // see controlled store list below
      availability: 'always',     // 'always' | 'usual' | 'seasonal' | 'occasional' | 'online'
      aisle: 'Raft lactate, lângă iaurturile grecești',  // Romanian, where to physically look
      priceRon: 5.99,             // pack price in RON, 2026 estimate. 0 if truly unknown.
      packGrams: 450,             // NUMBER of grams (or ml) in that pack. Required if priceRon > 0.
      packLabel: 'caserolă 450 g',// human label for the pack
      note: ''                    // optional short note, '' if none
    }
    // 1–5 store entries. List the CHEAPEST / most reliable first.
  ],
  sibiuNote: 'Toate cele 4 magazine Lidl din Sibiu îl au...',  // Sibiu-specific practical tip

  // ---- NUTRITION (per 100 g or 100 ml of the product AS SOLD) ---------
  per100g: {
    kcal: 63,        // kilocalories
    protein: 11,     // g
    carbs: 4,        // g (total carbohydrate, EU style = excluding fiber)
    sugars: 4,       // g, must be <= carbs
    fat: 0.2,        // g
    satFat: 0.1,     // g, must be <= fat
    fiber: 0,        // g
    salt: 0.1        // g of salt (NOT sodium). salt = sodium * 2.5
  },

  // Optional but valuable — include when meaningful, else omit the whole object:
  micros: {
    calciumMg: 150,     // omit any line you do not know
    ironMg: 0.1,
    zincMg: 0.6,
    b12Ug: 0.4,
    vitDUg: 0,
    omega3Mg: 0,
    potassiumMg: 150,
    cholesterolMg: 5
  },

  // ---- PORTION --------------------------------------------------------
  serving: {
    grams: 200,                    // a realistic single portion, in the same unit as above
    label: '1 caserolă mică (200 g)'  // Romanian
  },

  // ---- EFFORT & TIME --------------------------------------------------
  effort: 0,          // integer 0–5. 0 = deschizi și mănânci. 1 = încălzit/amestecat.
                      // 2 = o tigaie, <10 min. 3 = gătit real, 15–30 min.
                      // 4 = mai multe etape / 30–60 min. 5 = proiect, >60 min sau marinare.
  timeMin: 0,         // TOTAL minutes from fridge to mouth (including passive cooking/oven)
  activeTimeMin: 0,   // minutes your hands are actually busy
  cooking: {
    method: 'none',   // 'none' | 'reheat' | 'boil' | 'pan' | 'grill' | 'oven' | 'airfryer'
                      // | 'slow' | 'pressure' | 'blend' | 'assemble' | 'soak' | 'fry' | 'steam'
    difficulty: 'none',  // 'none' | 'trivial' | 'easy' | 'medium' | 'hard'
    equipment: ['—'],    // Romanian, e.g. ['tigaie', 'lingură']
    steps: [             // Romanian imperative steps. 0 steps if ready-to-eat, else 2–8 steps.
      'Scoate din frigider.',
      'Mănâncă.'
    ],
    yieldNote: ''        // e.g. '1 kg crud = ~700 g gătit'. '' if not relevant.
  },

  // ---- TASTE ----------------------------------------------------------
  taste: {
    profile: 'Acrișor, dens, cremos, aproape fără dulceață',  // Romanian, one sentence
    intensity: 3,    // 0–5 how loud the flavour is
    sweetness: 1,    // 0–5
    saltiness: 1,    // 0–5
    umami: 1,        // 0–5
    richness: 2,     // 0–5 fattiness / mouth-coating
    texture: 'Foarte dens, cremos, ușor granulat',            // Romanian
    notes: 'Fără topping e sec; cu miere și nuci devine desert.'  // Romanian, honest opinion
  },

  // ---- GAME STAT BARS (0–100, YOU author these four) -------------------
  // The app COMPUTES the protein bar, the value bar and the leanness bar itself.
  // You only author the four subjective ones. Be a harsh, honest critic —
  // if everything is 90 the bars are useless. Use the whole 10–100 range.
  stats: {
    taste: 62,         // how much a normal person enjoys eating it plain
    satiety: 88,       // how long it kills hunger per calorie
    convenience: 100,  // 100 = zero effort, always in stock, portable
    versatility: 74    // how many different meals it can slot into
  },

  // ---- WHEN TO EAT IT (0–5 suitability for each slot) -----------------
  timing: {
    breakfast: 5,
    preWorkout: 3,
    postWorkout: 5,
    lunch: 4,
    snack: 5,
    dinner: 4,
    beforeBed: 5
  },
  timingNote: 'Cazeina din skyr se digeră lent — foarte bun înainte de culcare.', // Romanian, 1 line

  // ---- CLASSIFICATION -------------------------------------------------
  tags: ['ready-to-eat', 'high-protein', 'low-fat', 'budget', 'meal-prep'],  // controlled list below
  diet: {
    vegan: false,
    vegetarian: true,
    glutenFree: true,
    lactoseFree: false,
    keto: false,
    halal: true,
    porkFree: true
  },

  // ---- PRACTICAL ------------------------------------------------------
  pairings: ['Fulgi de ovăz', 'Miere', 'Nuci', 'Fructe de pădure congelate'],  // 2–6 Romanian items
  tips: [            // 2–5 genuinely useful, non-obvious Romanian tips
    'Amestecă cu o lingură de cacao și îndulcitor: devine desert cu 22 g proteină.',
    'Verifică data — Lidl reduce cu 30% în ultima zi.'
  ],
  warnings: [],      // Romanian. Allergens, mercury, sodium, purine, cost traps. [] if none.
  storage: 'Frigider 2–6 °C, se consumă în 3 zile după deschidere.',  // Romanian
  shelfLife: '~3 săptămâni sigilat',                                   // Romanian

  // ---- META -----------------------------------------------------------
  dataConfidence: 'high',   // 'high' = read off a real label / official site
                            // 'medium' = brand varies, values are typical for the type
                            // 'low' = estimate (restaurant food, deli counter, etc.)
  sources: ['Eticheta Milbona Skyr', 'lidl.ro']   // 1–3 short strings
}
```

---

## 3. Controlled vocabularies

### `stores[].name` — use these exact strings

`Lidl`, `Kaufland`, `Carrefour`, `Carrefour Market`, `Profi`, `Penny`, `Mega Image`,
`Auchan`, `Selgros`, `Metro`, `La Doi Pași`, `Decathlon`, `Farmacie`, `Piața Cibin`,
`Măcelărie locală`, `Pescărie`, `Online RO`, `Restaurant Sibiu`

If a product is only realistically obtainable online (Ostrovit, Myprotein, etc.) use
`Online RO` and put the shop name in `note`.

### `tags[]` — use only these slugs

**Convenience:** `ready-to-eat`, `grab-and-go`, `microwave`, `no-cook`, `meal-prep`,
`portable`, `shelf-stable`, `frozen`, `batch-cook`

**Nutrition:** `high-protein` (≥15 g/100 g), `very-high-protein` (≥25 g/100 g),
`protein-dense` (≥40 % of kcal from protein), `low-fat`, `low-carb`, `high-fiber`,
`low-kcal`, `high-kcal`, `omega3`, `iron-rich`, `calcium-rich`, `b12`, `complete-protein`,
`slow-digesting`, `fast-digesting`, `high-sodium`, `processed`, `whole-food`

**Money:** `budget`, `cheap-protein`, `mid-price`, `premium`, `bulk-buy`

**Use case:** `breakfast`, `post-workout`, `pre-workout`, `night-snack`, `office-lunch`,
`bulking`, `cutting`, `kid-friendly`, `hangover`, `summer`, `winter`

**Culture:** `romanian-classic`, `local-sibiu`, `imported`

### `category` slugs (one per file, do not invent others)

`dairy-eggs`, `fresh-meat`, `deli-processed`, `fish-seafood`, `plant-protein`,
`supplements-snacks`, `ready-meals`, `bakery-drinks-sweets`

---

## 4. Quality bar — read this twice

1. **Real products, real shelves.** Every branded item must plausibly exist in a Lidl,
   Kaufland, Carrefour, Profi, Penny, Mega Image, Auchan, Selgros or Metro in Romania
   in 2025–2026. When unsure whether a brand/product is sold in Romania, **web-search it**
   before including it. If you cannot confirm, either drop it or set
   `dataConfidence: 'medium'` and use the generic type name instead of a fake SKU.
2. **Never invent a nutrition label.** If you are not confident of the exact numbers,
   use well-established generic values for that food type (USDA/CIQUAL-style) and set
   `dataConfidence` to `'medium'`. Internal consistency is checked by the app:
   `kcal ≈ protein*4 + carbs*4 + fat*9 + fiber*2` (±15 %). Entries that fail this
   badly will be flagged, so sanity-check your arithmetic.
3. **`sugars ≤ carbs`** and **`satFat ≤ fat`**. Always.
4. **Prices** are 2026 Sibiu estimates in RON. Reasonable ranges: chicken breast
   ~30–40 RON/kg, eggs ~1.2–1.8 RON each, Greek yogurt ~4–9 RON/pot, canned tuna
   ~7–14 RON/tin, whey ~150–320 RON/kg. Don't produce absurd numbers.
5. **Diversity beats duplication.** Ten near-identical Greek yogurts is a waste. One
   per meaningfully different product (different brand tier, fat level, or format) is fine.
6. **Be honest in `stats` and `taste`.** Liver is a protein monster with a taste score
   of 25. Plain chicken breast is boring: taste 45. Say so.
7. **Romanian for user-facing prose** (`aisle`, `steps`, `tips`, `taste.*`, `storage`,
   `warnings`, `pairings`, `subcategory`, `sibiuNote`, `timingNote`). English for
   `name`, tags, enums and slugs.

---

## 5. Companion documentation

Each data file has a sibling markdown file in `docs/categories/<category-slug>.md`,
250–450 lines, containing:

- A short intro on why this category matters for protein.
- **Buying guide for Sibiu** — which store wins for what, when to go, what to avoid.
- **Top 10 picks** table (name | protein/100 g | kcal | RON/kg | protein per RON | verdict).
- **Traps & marketing lies** in this category.
- 4–8 **recipes / preparation protocols** with timings, in Romanian.
- **Storage & food-safety** notes.
- A **price-per-gram-of-protein** ranking table.
- Sources / how the data was gathered, and known uncertainty.

Write it in Romanian with English technical terms where natural.
