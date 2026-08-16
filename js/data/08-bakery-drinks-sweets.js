/* =========================================================================
 * PROTEIN ATLAS SIBIU — BAKERY, BREAKFAST, DRINKS, SWEETS & BOOSTERS
 * File: js/data/08-bakery-drinks-sweets.js
 * Items: 62
 * Category slug: bakery-drinks-sweets
 * ID prefix: b-
 * Last researched: 2026-08
 *
 * NOTĂ DE ONESTITATE: majoritatea acestei categorii NU e mâncare proteică.
 * Pâinea, sucurile, prăjiturile și granola sunt aici tocmai ca barele din
 * aplicație să spună adevărul. Vedetele reale sunt trei: laptele praf
 * degresat, albușul praf și hack-urile asamblate din josul fișierului.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'b-paine-proteica-lidl',
      name: 'High Protein Bread',
      nameRo: 'Pâine proteică (High Protein)',
      brand: 'Grande Panetteria / Lidl',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🍞',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Raft pâine feliată ambalată, lângă pâinea de secară', priceRon: 12.99, packGrams: 500, packLabel: 'pungă feliată 500 g', note: 'Uneori apare doar în campaniile High Protein' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft panificație ambalată, zona K-Classic/Grafschafter', priceRon: 14.49, packGrams: 500, packLabel: 'pungă feliată 500 g', note: 'Echivalentul german Eiweißbrot, importat' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine bio / freshful.ro', priceRon: 18.9, packGrams: 500, packLabel: 'pungă 500 g', note: 'Scump față de raft' }
      ],
      sibiuNote: 'Cel mai constant la Lidl de pe Șoseaua Alba Iulia și cel din Turnișor; se epuizează până la prânz în weekend. Dacă nu o găsești, pâinea de secară integrală e cel mai bun plan B.',
      per100g: { kcal: 251, protein: 20.4, carbs: 11, sugars: 1.4, fat: 11, satFat: 1.6, fiber: 8.5, salt: 1.1 },
      micros: { calciumMg: 80, ironMg: 3.2, zincMg: 2.4, potassiumMg: 320 },
      serving: { grams: 60, label: '2 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Dens, ușor amărui de soia și in, cu gust pronunțat de semințe',
        intensity: 3,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 3,
        texture: 'Foarte densă, umedă, se sfărâmă la felii subțiri',
        notes: 'Nu e pâine, e un cărămid nutritiv. Prăjită în toaster devine de două ori mai bună.'
      },
      stats: { taste: 55, satiety: 82, convenience: 88, versatility: 70 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 5, snack: 4, dinner: 4, beforeBed: 2 },
      timingNote: 'Ideală la micul dejun și la sandvișul de birou — fibra plus proteina țin 4 ore.',
      tags: ['ready-to-eat', 'high-protein', 'high-fiber', 'low-carb', 'portable', 'office-lunch', 'shelf-stable', 'processed', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Brânză de vaci degresată', 'Ou fiert', 'Șuncă de curcan', 'Humus', 'Avocado'],
      tips: [
        'Cele 11 g de grăsime/100 g vin din semințe de in și soia — e pâine proteică, nu pâine slabă. 2 felii = 150 kcal, nu 120.',
        'Se usucă repede: ține punga în congelator și scoate feliile una câte una direct în toaster.',
        'Cu 100 g brânză de vaci pe deasupra ajungi la 25 g proteină într-un singur sandviș.'
      ],
      warnings: ['Conține gluten, soia și susan.', 'Sarea de 1,1 g/100 g e mare — atenție dacă mănânci 6 felii pe zi.'],
      storage: 'Punga bine închisă, la temperatura camerei 4–5 zile; congelator până la 3 luni.',
      shelfLife: '~7–10 zile sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Lidl High Protein Brot', 'lidl.ro sortiment High Protein']
    },

    {
      id: 'b-paine-integrala-boromir',
      name: 'Wholemeal Bread',
      nameRo: 'Pâine integrală feliată',
      brand: 'Boromir',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Profi', availability: 'always', aisle: 'Raft pâine ambalată, la intrare', priceRon: 5.9, packGrams: 500, packLabel: 'pungă feliată 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Panificație ambalată, lângă brutăria proprie', priceRon: 5.49, packGrams: 500, packLabel: 'pungă feliată 500 g', note: 'Cel mai ieftin în Sibiu' },
        { name: 'Penny', availability: 'always', aisle: 'Raft pâine', priceRon: 5.79, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Panificație ambalată', priceRon: 6.29, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Boromir e peste tot în Sibiu — Profi din Vasile Aaron, Kaufland Alba Iulia, Penny din Ștrand. Pâinea de la brutăria Boromir de pe Calea Dumbrăvii e proaspătă, dar fără etichetă nutrițională.',
      per100g: { kcal: 249, protein: 11.4, carbs: 44, sugars: 2.5, fat: 1.5, satFat: 0.3, fiber: 7, salt: 1.2 },
      micros: { ironMg: 2.5, potassiumMg: 250, zincMg: 1.6 },
      serving: { grams: 60, label: '2 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Pâine de zi cu zi, ușor dulceagă, gust de grâu copt',
        intensity: 2,
        sweetness: 2,
        saltiness: 2,
        umami: 1,
        richness: 1,
        texture: 'Miez elastic, coajă subțire',
        notes: 'Bună, ieftină, familiară — dar 11 g proteină/100 g nu e „high protein", e doar pâine.'
      },
      stats: { taste: 68, satiety: 52, convenience: 95, versatility: 88 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 2, lunch: 4, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Vehicul de proteină, nu sursă de proteină — pune ceva serios pe ea.',
      tags: ['ready-to-eat', 'high-fiber', 'budget', 'shelf-stable', 'portable', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ou ochi', 'Brânză telemea', 'Pastă de arahide', 'Ton la conservă'],
      tips: [
        '„Integrală" înseamnă fibră, nu proteină. Diferența față de pâinea albă e ~2 g proteină la 100 g.',
        'Verifică ingredientele: multe pâini „negre" sunt pâine albă cu caramel colorant. Prima poziție trebuie să fie făină integrală.',
        'Feliile Boromir sunt de ~35 g, nu 25 g — două felii sunt deja 175 kcal.'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Punga închisă, temperatura camerei, 3–4 zile.',
      shelfLife: '~5 zile',
      dataConfidence: 'medium',
      sources: ['Eticheta Boromir pâine integrală', 'klorii.ro']
    },

    {
      id: 'b-paine-secara-integrala',
      name: 'Wholegrain Rye Bread',
      nameRo: 'Pâine de secară integrală feliată',
      brand: 'generic (Lidl / Mestemacher)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🥖',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft pâine ambalată lungă durată, lângă pumpernickel', priceRon: 8.99, packGrams: 500, packLabel: 'pungă feliată 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Panificație ambalată, raft de sus', priceRon: 9.99, packGrams: 500, packLabel: 'pungă 500 g', note: 'Mestemacher, mai scumpă dar densă' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft pâine specială', priceRon: 11.5, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Lidl are cel mai bun raport preț/calitate în Sibiu. La Mega Image din centru (Piața Mare) găsești variante germane, dar cu 30% mai scump.',
      per100g: { kcal: 208, protein: 8.5, carbs: 36, sugars: 2.6, fat: 1.6, satFat: 0.3, fiber: 8.5, salt: 1.1 },
      micros: { ironMg: 2.8, potassiumMg: 290 },
      serving: { grams: 60, label: '2 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Acrișoară de maia, cu gust intens de secară și o notă ușor amăruie',
        intensity: 4,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 1,
        texture: 'Densă, umedă, compactă',
        notes: 'Cea mai săturătoare pâine ieftină din raft, deși proteina e mediocră.'
      },
      stats: { taste: 62, satiety: 68, convenience: 92, versatility: 72 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 2, lunch: 4, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Index glicemic mai mic decât pâinea albă — bună dimineața, dacă ai tendința să te lovească foamea la 11.',
      tags: ['ready-to-eat', 'high-fiber', 'budget', 'shelf-stable', 'whole-food', 'portable'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Brânză de vaci', 'Somon afumat', 'Muștar', 'Ou fiert'],
      tips: [
        'Secara are mai puțină proteină decât grâul — o cumperi pentru fibră și sațietate, nu pentru macro.',
        'Se păstrează 2 săptămâni fără să se usuce, spre deosebire de pâinea albă.',
        'Feliile sunt subțiri (~25 g) — nu te păcăli că „ai mâncat doar două felii".'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Punga închisă, temperatura camerei; după deschidere 7–10 zile.',
      shelfLife: '~3–4 săptămâni sigilată',
      dataConfidence: 'medium',
      sources: ['Etichete Lidl / Mestemacher', 'CIQUAL — pain de seigle']
    },

    {
      id: 'b-paine-cu-seminte',
      name: 'Multiseed Bread',
      nameRo: 'Pâine cu semințe (multicereale)',
      brand: 'generic (brutării & retail)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🫓',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Brutăria proprie din fața casei de marcat', priceRon: 7.5, packGrams: 400, packLabel: 'franzelă 400 g', note: 'Proaspătă, se vinde la bucată' },
        { name: 'Lidl', availability: 'always', aisle: 'Brutăria din magazin', priceRon: 6.99, packGrams: 400, packLabel: 'franzelă 400 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Brutărie', priceRon: 8.49, packGrams: 450, packLabel: 'franzelă 450 g', note: '' }
      ],
      sibiuNote: 'Brutăria Kaufland de pe Șoseaua Alba Iulia coace lot nou pe la 16:00 — dacă mergi atunci, e caldă. Piața Cibin are și pâine cu semințe de la producători locali, dar fără etichetă.',
      per100g: { kcal: 268, protein: 10.5, carbs: 40, sugars: 3, fat: 6.5, satFat: 1, fiber: 6, salt: 1.2 },
      serving: { grams: 60, label: '2 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Aromată, cu note prăjite de floarea-soarelui și susan',
        intensity: 3,
        sweetness: 2,
        saltiness: 2,
        umami: 1,
        richness: 3,
        texture: 'Miez pufos cu semințe crocante',
        notes: 'Cea mai gustoasă pâine „sănătoasă" din raft. Dar semințele adaugă grăsime, nu proteină.'
      },
      stats: { taste: 78, satiety: 55, convenience: 90, versatility: 82 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 2, lunch: 4, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Bună la prânz cu proteină deasupra; seara e cam calorică pentru cât dă.',
      tags: ['ready-to-eat', 'high-fiber', 'budget', 'high-kcal', 'portable'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Brânză de burduf', 'Ou', 'Avocado', 'Ton'],
      tips: [
        'Capcana clasică: semințele arată „proteic" dar aduc +5 g grăsime și doar +1 g proteină față de pâinea simplă.',
        'La 268 kcal/100 g e cea mai calorică pâine obișnuită din raft — cântărește-o dacă ești în deficit.',
        'Dacă vrei semințe pentru proteină, mai bine 20 g semințe de dovleac separat (5 g proteină curată).'
      ],
      warnings: ['Conține gluten, susan; adesea și soia.'],
      storage: 'Temperatura camerei, 2–3 zile; se usucă repede fără ambalaj.',
      shelfLife: '~3 zile',
      dataConfidence: 'medium',
      sources: ['Etichete brutării retail RO', 'valori tipice pâine multicereale']
    },

    {
      id: 'b-pumpernickel',
      name: 'Pumpernickel',
      nameRo: 'Pumpernickel (pâine neagră germană)',
      brand: 'Mestemacher / Lidl',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🟫',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Raft pâine lungă durată, cutii mici dreptunghiulare', priceRon: 9.49, packGrams: 500, packLabel: 'pachet 500 g', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft produse germane / pâine specială', priceRon: 11.99, packGrams: 500, packLabel: 'pachet 500 g', note: 'Mestemacher original' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Raft internațional', priceRon: 13.5, packGrams: 500, packLabel: 'pachet 500 g', note: '' }
      ],
      sibiuNote: 'Sibiul are tradiție săsească, dar pumpernickel-ul e tot import. Lidl-ul din Turnișor și Kaufland Alba Iulia îl țin constant.',
      per100g: { kcal: 190, protein: 7.5, carbs: 33, sugars: 4, fat: 1.2, satFat: 0.2, fiber: 9, salt: 0.9 },
      micros: { ironMg: 2.9, potassiumMg: 350 },
      serving: { grams: 50, label: '2 felii subțiri (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Foarte închisă la culoare, dulce-afumată, aproape ca un desert de secară',
        intensity: 4,
        sweetness: 3,
        saltiness: 2,
        umami: 2,
        richness: 1,
        texture: 'Extrem de densă, lipicioasă, se taie ca un cozonac umed',
        notes: 'Fie o adori, fie nu o mai cumperi niciodată. Proteina e slabă, fibra e excelentă.'
      },
      stats: { taste: 48, satiety: 72, convenience: 95, versatility: 55 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 1, lunch: 3, snack: 3, dinner: 2, beforeBed: 1 },
      timingNote: 'Bună dimineața cu brânză; seara e prea densă.',
      tags: ['ready-to-eat', 'high-fiber', 'shelf-stable', 'portable', 'imported', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Brânză de vaci', 'Hering / macrou afumat', 'Muștar', 'Ou fiert'],
      tips: [
        '9 g fibră/100 g e cel mai bun scor din tot raftul de pâine — dar 7,5 g proteină e sub pâinea albă la unele branduri.',
        'Se ține luni întregi nedeschis: pachet de rezervă bun în dulap.',
        'Feliile subțiri (~25 g) sunt intenționate. Nu le mânca ca pe pâinea normală, sunt de 2x mai dense.'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Sigilat, temperatura camerei; după deschidere 5–7 zile în frigider.',
      shelfLife: '~6 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta Mestemacher Pumpernickel', 'CIQUAL']
    },

    {
      id: 'b-paine-alba-toast',
      name: 'White Toast Bread (honest contrast)',
      nameRo: 'Pâine albă toast feliată',
      brand: 'Vel Pitar',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🍞',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft pâine ambalată', priceRon: 5.49, packGrams: 500, packLabel: 'pungă toast 500 g', note: 'Cel mai ieftin' },
        { name: 'Profi', availability: 'always', aisle: 'Raft pâine', priceRon: 5.99, packGrams: 500, packLabel: 'pungă toast 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Panificație ambalată', priceRon: 5.79, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Există în absolut orice magazin din Sibiu, inclusiv La Doi Pași din cartiere. E aici ca reper de comparație, nu ca recomandare.',
      per100g: { kcal: 264, protein: 8.8, carbs: 51, sugars: 4, fat: 2.1, satFat: 0.5, fiber: 2.5, salt: 1.2 },
      serving: { grams: 50, label: '2 felii toast (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulceag, moale, fără personalitate — exact ce își doresc copiii',
        intensity: 1,
        sweetness: 3,
        saltiness: 2,
        umami: 0,
        richness: 1,
        texture: 'Pufoasă, spongioasă, se lipește de cerul gurii',
        notes: 'Nu e „rea", dar 2 felii = 130 kcal pentru 4,4 g proteină. Cel mai prost raport din categorie.'
      },
      stats: { taste: 70, satiety: 28, convenience: 100, versatility: 85 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 2, lunch: 2, snack: 1, dinner: 2, beforeBed: 1 },
      timingNote: 'Carbohidrat rapid — util doar pre-antrenament sau când ai nevoie de calorii ieftine.',
      tags: ['ready-to-eat', 'budget', 'shelf-stable', 'kid-friendly', 'processed', 'fast-digesting'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ou', 'Șuncă de curcan', 'Brânză topită', 'Gem'],
      tips: [
        'Contrastul de referință: pâinea proteică Lidl are 2,3x mai multă proteină la aceeași masă și mai puțini carbohidrați.',
        'Dacă tot o mănânci, dublează proteina de deasupra: 2 ouă și 60 g telemea transformă 4 g în 20 g.',
        'Sarea de 1,2 g/100 g e la fel de mare ca în pâinea „sănătoasă" — nu ai câștigat nimic.'
      ],
      warnings: ['Conține gluten.', 'Adesea conține și zahăr adăugat plus emulsifianți (E471, E481).'],
      storage: 'Punga închisă, 4–5 zile.',
      shelfLife: '~7 zile',
      dataConfidence: 'high',
      sources: ['Eticheta Vel Pitar pâine albă la tavă', 'calo.ro']
    },

    {
      id: 'b-lipie-integrala',
      name: 'Wholemeal Pita / Flatbread',
      nameRo: 'Lipie integrală / pita integrală',
      brand: 'generic (Lidl, Carrefour)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🫓',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lângă tortilla și wraps', priceRon: 6.99, packGrams: 320, packLabel: '4 lipii (320 g)', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Panificație ambalată / raft internațional', priceRon: 7.99, packGrams: 300, packLabel: '4 pita (300 g)', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Lângă tortilla', priceRon: 7.49, packGrams: 320, packLabel: '4 lipii (320 g)', note: '' }
      ],
      sibiuNote: 'Carrefour din Shopping City are cel mai bun sortiment de pita, inclusiv variante turcești. Lidl-ul e mai ieftin dar mai gros.',
      per100g: { kcal: 262, protein: 9.5, carbs: 46, sugars: 2.5, fat: 2.5, satFat: 0.5, fiber: 6, salt: 1.1 },
      serving: { grams: 80, label: '1 lipie (80 g)' },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['toaster sau tigaie uscată'],
        steps: [
          'Încălzește lipia 40 de secunde pe fiecare parte în tigaie uscată.',
          'Taie pe jumătate și deschide buzunarul cu un cuțit.',
          'Umple cu proteina aleasă.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Neutră, ușor prăjită, cu miros de făină caldă',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 1,
        texture: 'Moale, elastică, se rupe ușor dacă e rece',
        notes: 'Cel mai bun container pentru shaorma de casă. Proteina proprie e nesemnificativă.'
      },
      stats: { taste: 72, satiety: 45, convenience: 85, versatility: 90 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 3, lunch: 5, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Perfectă la prânz — buzunarul ține 150 g de carne fără să se rupă.',
      tags: ['ready-to-eat', 'high-fiber', 'budget', 'portable', 'office-lunch', 'shelf-stable'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Piept de pui la grătar', 'Tzatziki', 'Humus', 'Telemea', 'Salată'],
      tips: [
        'O lipie de 80 g = 210 kcal și doar 7,6 g proteină. Umplutura trebuie să facă toată munca.',
        'Se congelează perfect — pune-le separate cu hârtie de copt și scoate una la nevoie.',
        'Încălzită direct pe flacăra aragazului 10 secunde/parte se umflă și face buzunarul singură.'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Punga închisă 4–5 zile; congelator 2 luni.',
      shelfLife: '~7 zile',
      dataConfidence: 'medium',
      sources: ['Etichete Lidl / Carrefour pita integrală']
    },

    {
      id: 'b-tortilla-integrala',
      name: 'Wholemeal Tortilla Wraps',
      nameRo: 'Tortilla integrală (wraps)',
      brand: 'Rowan Hill (Lidl) / K-Classic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🌯',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft mexican / lângă sosuri salsa', priceRon: 7.99, packGrams: 370, packLabel: '6 tortilla (370 g)', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft internațional, zona mexicană', priceRon: 8.49, packGrams: 320, packLabel: '8 tortilla (320 g)', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft internațional', priceRon: 9.49, packGrams: 320, packLabel: '8 tortilla (320 g)', note: '' }
      ],
      sibiuNote: 'Lidl are cel mai constant stoc; Kaufland Alba Iulia are și variante XXL de 25 cm, utile la meal prep.',
      per100g: { kcal: 295, protein: 9, carbs: 48, sugars: 2.5, fat: 6.5, satFat: 2.5, fiber: 6, salt: 1.3 },
      serving: { grams: 62, label: '1 tortilla (62 g)' },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['tigaie sau microunde'],
        steps: [
          'Încălzește tortilla 20 de secunde în tigaie uscată sau 10 secunde la microunde.',
          'Pune umplutura pe treimea de jos.',
          'Îndoaie laturile și rulează strâns.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Aproape neutră, ușor gust de grâu prăjit',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 2,
        texture: 'Moale, flexibilă; crapă dacă o rulezi rece',
        notes: 'Ambalaj comestibil. Nimic mai mult, dar face treaba impecabil.'
      },
      stats: { taste: 66, satiety: 42, convenience: 92, versatility: 95 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 3, lunch: 5, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Regele pachetului de birou — se rulează seara și rezistă până la prânz.',
      tags: ['ready-to-eat', 'high-fiber', 'budget', 'portable', 'office-lunch', 'meal-prep', 'shelf-stable'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Piept de pui', 'Ton', 'Fasole roșie', 'Iaurt grecesc în loc de maioneză'],
      tips: [
        'Atenție la grăsime: 6,5 g/100 g vin din ulei de palmier — o tortilla = 4 g grăsime înainte de umplutură.',
        'Varianta proteică Lidl are 16 g proteină/100 g la aceleași calorii. Dacă o găsești, e strict mai bună.',
        'Rulează cu folie alimentară strânsă, taie oblic — nu se desface la muncă.'
      ],
      warnings: ['Conține gluten.', 'Multe mărci conțin ulei de palmier și E471.'],
      storage: 'Punga resigilată, temperatura camerei; frigider după deschidere pentru 10 zile.',
      shelfLife: '~2–3 luni sigilate',
      dataConfidence: 'medium',
      sources: ['Eticheta Rowan Hill tortilla', 'openfoodfacts.org']
    },

    {
      id: 'b-tortilla-proteica-lidl',
      name: 'High Protein Tortilla Wraps',
      nameRo: 'Tortilla proteică (High Protein Wraps)',
      brand: 'Rowan Hill (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🌯',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Raft mexican, lângă tortilla clasică — cutie cu banderolă „High Protein"', priceRon: 11.99, packGrams: 370, packLabel: '6 tortilla (370 g)', note: 'Parte din sortimentul High Protein' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de suplimente / freshful', priceRon: 17.9, packGrams: 370, packLabel: '6 tortilla', note: 'Doar dacă nu o găsești în raft' }
      ],
      sibiuNote: 'Apare în valuri la Lidl — verifică la cele patru magazine din Sibiu; cel din Calea Dumbrăvii primește de obicei primul.',
      per100g: { kcal: 293, protein: 16, carbs: 47.6, sugars: 2.7, fat: 3.8, satFat: 1.6, fiber: 6.5, salt: 1.4 },
      serving: { grams: 62, label: '1 tortilla (62 g)' },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['tigaie'],
        steps: [
          'Încălzește 20 de secunde pe fiecare parte în tigaie uscată.',
          'Umple și rulează.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Ușor mai grosier decât tortilla clasică, cu o notă de grâu integral',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 2,
        texture: 'Puțin mai rigidă, crapă mai ușor la rulare rece',
        notes: 'Rar când marketingul „proteic" chiar se ține de cuvânt: 16 g/100 g e aproape dublul tortillei normale.'
      },
      stats: { taste: 62, satiety: 58, convenience: 88, versatility: 92 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'La prânz, cu 120 g piept de pui, ajungi la 40 g proteină într-un singur wrap.',
      tags: ['ready-to-eat', 'high-protein', 'high-fiber', 'portable', 'office-lunch', 'meal-prep', 'shelf-stable', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Piept de pui', 'Curcan', 'Brânză cottage', 'Salsa', 'Iaurt grecesc'],
      tips: [
        'Proteina vine din gluten de grâu adăugat — bună cantitativ, dar incompletă în lizină. Combin-o cu lactate sau carne.',
        'La 11,99 lei/370 g plătești ~2 lei/tortilla pentru 10 g proteină — corect, dar nu ieftin.',
        'Încălzește-o obligatoriu: rece se rupe pe mijloc de fiecare dată.'
      ],
      warnings: ['Conține gluten — nepotrivită pentru celiaci sau sensibilitate la gluten.'],
      storage: 'Punga resigilată; frigider după deschidere.',
      shelfLife: '~2 luni sigilate',
      dataConfidence: 'high',
      sources: ['Eticheta Rowan Hill High Protein Tortilla', 'valorinutritionale.ro']
    },

    {
      id: 'b-chifle-proteice',
      name: 'Protein Rolls',
      nameRo: 'Chifle proteice',
      brand: 'generic (Lidl / Kaufland brutărie)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🥯',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'occasional', aisle: 'Brutăria din magazin, coșul cu chifle speciale', priceRon: 2.49, packGrams: 85, packLabel: '1 chiflă (85 g)', note: 'Se vând la bucată' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Brutăria proprie, raftul cu produse „fitness"', priceRon: 2.99, packGrams: 90, packLabel: '1 chiflă (90 g)', note: '' }
      ],
      sibiuNote: 'Apar neregulat. Kaufland Alba Iulia le are mai des decât Lidl. Dacă le găsești, ia 4 și congelează-le.',
      per100g: { kcal: 262, protein: 17, carbs: 20, sugars: 2, fat: 10, satFat: 1.5, fiber: 7, salt: 1.2 },
      serving: { grams: 85, label: '1 chiflă (85 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Gust puternic de semințe de in și soia, ușor amărui',
        intensity: 3,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 3,
        texture: 'Densă, umedă, cu crustă crocantă când e proaspătă',
        notes: 'Mult mai bună caldă. A doua zi devine cauciucată.'
      },
      stats: { taste: 58, satiety: 76, convenience: 82, versatility: 68 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 4, snack: 4, dinner: 3, beforeBed: 2 },
      timingNote: 'Micul dejun rapid: chiflă + 2 ouă = 28 g proteină în 6 minute.',
      tags: ['ready-to-eat', 'high-protein', 'high-fiber', 'low-carb', 'portable', 'breakfast', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ou ochi', 'Brânză de vaci', 'Șuncă de curcan', 'Muștar'],
      tips: [
        'Verifică eticheta la fiecare lot — „proteică" la brutărie nu e reglementat și variază între 12 și 20 g/100 g.',
        'Congelează-le și reîncălzește 5 minute la 180 °C: revin aproape complet.',
        'La 2,50 lei pentru 14 g proteină, e mai scumpă ca sursă decât ouăle, dar mult mai portabilă.'
      ],
      warnings: ['Conține gluten, soia, adesea susan.'],
      storage: 'Consumă în ziua cumpărării sau congelează imediat.',
      shelfLife: '1–2 zile proaspătă',
      dataConfidence: 'low',
      sources: ['Etichete brutării Lidl/Kaufland RO', 'valori tipice chiflă proteică']
    },

    {
      id: 'b-covrig-sibiu',
      name: 'Romanian Pretzel (honest contrast)',
      nameRo: 'Covrig cu sare / cu susan',
      brand: 'generic (covrigării Sibiu)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🥨',
      unit: 'g',
      stores: [
        { name: 'La Doi Pași', availability: 'always', aisle: 'Coșul de la casă', priceRon: 2.5, packGrams: 90, packLabel: '1 covrig (90 g)', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft panificație la intrare', priceRon: 2.2, packGrams: 85, packLabel: '1 covrig (85 g)', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Brutăria proprie', priceRon: 1.99, packGrams: 90, packLabel: '1 covrig (90 g)', note: 'Cel mai ieftin' }
      ],
      sibiuNote: 'Covrigăriile din Piața Mare și de pe Nicolae Bălcescu vând covrigi calzi toată ziua — 3–4 lei bucata. Sunt delicioși și sunt aici ca să vezi cât de puțin dau nutrițional.',
      per100g: { kcal: 320, protein: 9.5, carbs: 58, sugars: 3, fat: 5, satFat: 1.2, fiber: 3, salt: 2.2 },
      serving: { grams: 90, label: '1 covrig (90 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, cald, cu crustă lucioasă și miez pufos — comfort food pur',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 1,
        richness: 2,
        texture: 'Crocant afară, aerat înăuntru',
        notes: 'Delicios. Nutrițional inutil: 290 kcal pentru 8,5 g proteină și 2 g de sare.'
      },
      stats: { taste: 84, satiety: 25, convenience: 100, versatility: 30 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 1, lunch: 1, snack: 2, dinner: 1, beforeBed: 1 },
      timingNote: 'Gustare de plăcere, nu de macro. Dacă îl mănânci, mănâncă-l cald și fără vinovăție.',
      tags: ['ready-to-eat', 'grab-and-go', 'budget', 'portable', 'high-sodium', 'romanian-classic', 'local-sibiu'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt de băut', 'Cafea', 'Brânză de vaci (surprinzător de bun)'],
      tips: [
        'Un covrig are cât o jumătate de pâine albă în calorii, cu 2 g de sare pe deasupra. Nu e „gustare mică".',
        'Covrigul cu brânză de la covrigăriile locale sare la ~400 kcal și tot nu depășește 12 g proteină.',
        'Dacă îl vrei ca gustare reală, mănâncă-l cu 150 g iaurt grecesc — ajungi la 23 g proteină.'
      ],
      warnings: ['Conține gluten.', 'Sare foarte mare: 2 g/100 g, adică ~1/3 din doza zilnică într-un covrig.'],
      storage: 'Se mănâncă în aceeași zi; a doua zi e piatră.',
      shelfLife: 'Câteva ore',
      dataConfidence: 'low',
      sources: ['Valori tipice covrig RO', 'estimare covrigării Sibiu']
    },

    {
      id: 'b-crackers-integrali',
      name: 'Wholegrain Crackers',
      nameRo: 'Biscuiți / crackers integrali',
      brand: 'generic (Wasa, Dr. Körner, Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Pâine & produse de panificație',
      emoji: '🍘',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft biscuiți sărați / pâine crocantă', priceRon: 6.99, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft biscuiți, zona Wasa', priceRon: 9.99, packGrams: 275, packLabel: 'cutie Wasa 275 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft dietetic / biscuiți', priceRon: 8.49, packGrams: 250, packLabel: 'cutie 250 g', note: '' }
      ],
      sibiuNote: 'Toate hipermarketurile din Sibiu le au. Kaufland din Vasile Aaron are cel mai larg raft de pâine crocantă.',
      per100g: { kcal: 350, protein: 11, carbs: 62, sugars: 2, fat: 4.5, satFat: 0.8, fiber: 14, salt: 1.3 },
      serving: { grams: 30, label: '3 felii (30 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Uscat, cerealier, cu note prăjite de secară',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 1,
        richness: 1,
        texture: 'Foarte crocant, se sfărâmă',
        notes: 'Plictisitor singur, excelent ca suport pentru brânză de vaci sau humus.'
      },
      stats: { taste: 52, satiety: 48, convenience: 95, versatility: 75 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 2, lunch: 3, snack: 4, dinner: 2, beforeBed: 1 },
      timingNote: 'Bun ca bază pentru gustarea de la birou, mereu în sertar.',
      tags: ['ready-to-eat', 'high-fiber', 'shelf-stable', 'portable', 'office-lunch', 'budget'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Brânză de vaci', 'Humus', 'Ton', 'Pastă de arahide'],
      tips: [
        '14 g fibră/100 g — cel mai bun scor de fibră din categorie, dar porția reală e doar 30 g.',
        'Cumpără varianta fără ulei de palmier: sunt și crackers cu 15 g grăsime/100 g, complet alt produs.',
        'Se înmoaie în 2 zile după deschidere — ține-i într-o cutie etanșă.'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Cutie etanșă, loc uscat.',
      shelfLife: '~8 luni sigilate',
      dataConfidence: 'medium',
      sources: ['Eticheta Wasa Fibres', 'valori tipice crackers integrali']
    },

    {
      id: 'b-fulgi-ovaz',
      name: 'Rolled Oats',
      nameRo: 'Fulgi de ovăz integrali',
      brand: 'Crownfield (Lidl) / Sanovita',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, jos, pungi mari Crownfield', priceRon: 6.49, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cel mai bun preț din oraș' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale / mic dejun', priceRon: 7.49, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft cereale', priceRon: 6.99, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Raft cereale vrac, saci mari', priceRon: 24.9, packGrams: 5000, packLabel: 'sac 5 kg', note: 'Pentru cine mănâncă ovăz zilnic' }
      ],
      sibiuNote: 'Lidl-ul din Turnișor și cel de pe Șos. Alba Iulia au constant punga de 1 kg. La Selgros de pe Calea Șurii Mici găsești sacul de 5 kg — coboară prețul sub 5 lei/kg.',
      per100g: { kcal: 372, protein: 13.5, carbs: 58, sugars: 1.1, fat: 7, satFat: 1.3, fiber: 10, salt: 0.02 },
      micros: { ironMg: 4.2, zincMg: 3, potassiumMg: 360, calciumMg: 54 },
      serving: { grams: 60, label: '6 linguri rase (60 g uscat)' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['cratiță mică sau bol de microunde', 'lingură'],
        steps: [
          'Pune 60 g fulgi și 200 ml lapte sau apă într-o cratiță.',
          'Fierbe 3–4 minute la foc mic, amestecând.',
          'Ia de pe foc, adaugă proteina (albuș, lapte praf, whey) după ce s-a răcit un pic.'
        ],
        yieldNote: '60 g uscat = ~250 g terci gata'
      },
      taste: {
        profile: 'Neutru, cerealier, ușor nucos când e prăjit în prealabil',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 0,
        richness: 2,
        texture: 'Cremos-lipicios fiert, crocant crud',
        notes: 'Singur e trist. Cu lapte praf și cacao devine cea mai ieftină masă bună din Sibiu.'
      },
      stats: { taste: 55, satiety: 84, convenience: 78, versatility: 92 },
      timing: { breakfast: 5, preWorkout: 5, postWorkout: 4, lunch: 3, snack: 4, dinner: 2, beforeBed: 3 },
      timingNote: 'Cel mai bun pre-antrenament ieftin: carbohidrat lent plus 8 g proteină la porție.',
      tags: ['high-fiber', 'budget', 'cheap-protein', 'whole-food', 'shelf-stable', 'breakfast', 'bulk-buy', 'slow-digesting', 'meal-prep'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lapte praf degresat', 'Albuș lichid', 'Iaurt grecesc', 'Banană', 'Cacao neîndulcită'],
      tips: [
        'Cel mai bun hack din tot fișierul: 60 g ovăz + 200 ml albuș lichid fierte împreună = 30 g proteină pentru sub 5 lei.',
        'Fulgii mari (integrali) au același macro ca cei instant, dar sațietate mult mai bună — evită plicurile.',
        'Prăjește fulgii uscați 3 minute în tigaie înainte de fierbere: gustul se schimbă complet.',
        'La 6,49 lei/kg, ovăzul costă ~48 lei per 100 g proteină — dar proteina lui e incompletă, folosește-l ca bază, nu ca sursă.'
      ],
      warnings: ['Poate conține urme de gluten (contaminare la moară) — nu e sigur pentru celiaci decât dacă scrie „gluten free".'],
      storage: 'Recipient etanș, loc uscat și răcoros.',
      shelfLife: '~12 luni',
      dataConfidence: 'high',
      sources: ['Eticheta Crownfield fulgi de ovăz', 'USDA oats, rolled']
    },

    {
      id: 'b-terci-instant-plic',
      name: 'Instant Porridge Sachet',
      nameRo: 'Terci instant la plic (ovăz cu fructe)',
      brand: 'Nestlé Fitness / Dr. Oetker Vitalis',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🍚',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale, cutii cu plicuri individuale', priceRon: 13.99, packGrams: 350, packLabel: 'cutie 7 plicuri (350 g)', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft mic dejun', priceRon: 14.99, packGrams: 350, packLabel: 'cutie 7 plicuri', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft cereale', priceRon: 15.49, packGrams: 300, packLabel: 'cutie 6 plicuri', note: '' }
      ],
      sibiuNote: 'Util la birou — ține un plic în sertar și folosește aparatul de apă caldă. Toate Profi-urile din centru le au.',
      per100g: { kcal: 385, protein: 10, carbs: 66, sugars: 24, fat: 7, satFat: 2.5, fiber: 6, salt: 0.35 },
      serving: { grams: 50, label: '1 plic (50 g)' },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 1,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['cană', 'apă fierbinte'],
        steps: [
          'Golește plicul într-o cană.',
          'Toarnă 120 ml apă clocotită sau lapte fierbinte.',
          'Amestecă și lasă 2 minute.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Dulce, cu aromă artificială de fructe sau ciocolată',
        intensity: 3,
        sweetness: 4,
        saltiness: 1,
        umami: 0,
        richness: 2,
        texture: 'Fină, aproape pastă — fulgii sunt măcinați',
        notes: 'Comod, dar aproape jumătate din carbohidrați sunt zahăr adăugat.'
      },
      stats: { taste: 66, satiety: 42, convenience: 96, versatility: 45 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 2, lunch: 2, snack: 3, dinner: 1, beforeBed: 1 },
      timingNote: 'Bun ca back-up la birou, nu ca mic dejun de bază.',
      tags: ['ready-to-eat', 'grab-and-go', 'portable', 'shelf-stable', 'office-lunch', 'processed', 'mid-price', 'breakfast'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Lapte praf degresat', 'Whey neutru', 'Iaurt grecesc'],
      tips: [
        'Un plic de 50 g are 5 g proteină și 12 g zahăr. Adaugă 15 g lapte praf degresat: sari la 10,4 g proteină cu +53 kcal.',
        'Prepară-l cu lapte, nu cu apă — adaugi 7 g proteină gratuit.',
        'La 40 lei/kg plătești de 6 ori mai mult decât pe ovăzul simplu, pentru un produs mai slab.'
      ],
      warnings: ['Conține gluten și de obicei lapte praf; verifică alergenii.', 'Zahăr adăugat mare — 24 g/100 g.'],
      storage: 'Plicuri sigilate, loc uscat.',
      shelfLife: '~10 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Nestlé Fitness / Dr. Oetker Vitalis RO']
    },

    {
      id: 'b-musli-fara-zahar',
      name: 'No-Added-Sugar Muesli',
      nameRo: 'Musli fără zahăr adăugat',
      brand: 'Crownfield (Lidl) / Sanovita',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🥄',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, cutii Crownfield', priceRon: 11.99, packGrams: 750, packLabel: 'cutie 750 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale / bio', priceRon: 13.49, packGrams: 500, packLabel: 'cutie 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio Sanovita', priceRon: 12.9, packGrams: 500, packLabel: 'pungă 500 g', note: 'Sanovita, producător român' }
      ],
      sibiuNote: 'Sanovita e producător din Vâlcea, distribuit bine în Sibiu — găsești la Carrefour Shopping City și în magazinele bio din centru.',
      per100g: { kcal: 370, protein: 11, carbs: 56, sugars: 12, fat: 9, satFat: 1.5, fiber: 9, salt: 0.05 },
      micros: { ironMg: 3.5, potassiumMg: 400, zincMg: 2.4 },
      serving: { grams: 50, label: '1 bol mic (50 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['bol'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cerealier, cu dulceață naturală de la stafide și fructe uscate',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 0,
        richness: 2,
        texture: 'Crocant uscat, moale după 5 minute în lapte',
        notes: '„Fără zahăr adăugat" nu înseamnă fără zahăr — stafidele aduc 12 g/100 g.'
      },
      stats: { taste: 64, satiety: 58, convenience: 92, versatility: 62 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 2, lunch: 2, snack: 3, dinner: 1, beforeBed: 1 },
      timingNote: 'Mic dejun decent dacă îl faci cu iaurt grecesc, nu cu lapte.',
      tags: ['ready-to-eat', 'high-fiber', 'shelf-stable', 'breakfast', 'budget', 'whole-food'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Skyr', 'Lapte proteic', 'Semințe de dovleac'],
      tips: [
        'Porția reală e 50 g, nu bolul plin — bolul plin e 90 g și 330 kcal.',
        'Peste 200 g iaurt grecesc, aceleași 50 g de musli devin o masă de 26 g proteină.',
        'Citește gramajul de fructe uscate: peste 25% și e practic desert.'
      ],
      warnings: ['Conține gluten; adesea și nuci/alune.'],
      storage: 'Cutie etanșă, loc uscat.',
      shelfLife: '~10 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Crownfield musli', 'sanovita.ro']
    },

    {
      id: 'b-granola-clasica',
      name: 'Classic Honey Granola (honest contrast)',
      nameRo: 'Granola clasică cu miere',
      brand: 'Crownfield (Lidl) / Verival',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🍯',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, pungi cu fereastră transparentă', priceRon: 10.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale premium', priceRon: 15.99, packGrams: 400, packLabel: 'pungă 400 g', note: '' },
        { name: 'Mega Image', availability: 'always', aisle: 'Raft mic dejun', priceRon: 17.9, packGrams: 350, packLabel: 'pungă 350 g', note: 'Cel mai scump' }
      ],
      sibiuNote: 'Peste tot. E aici ca avertisment: granola e cel mai bine deghizat desert din supermarket.',
      per100g: { kcal: 460, protein: 8, carbs: 60, sugars: 22, fat: 19, satFat: 4, fiber: 6, salt: 0.1 },
      serving: { grams: 45, label: '1 porție mică (45 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['bol'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulce, caramelizat, cu note de miere și nucă de cocos prăjită',
        intensity: 4,
        sweetness: 5,
        saltiness: 0,
        umami: 0,
        richness: 4,
        texture: 'Bulgări crocanți care se sparg satisfăcător',
        notes: 'Extrem de gustoasă și extrem de calorică. 100 g = 460 kcal cu doar 8 g proteină.'
      },
      stats: { taste: 88, satiety: 30, convenience: 95, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 2, lunch: 1, snack: 2, dinner: 1, beforeBed: 1 },
      timingNote: 'Topping, nu masă. 2 linguri peste iaurt, nu un bol.',
      tags: ['ready-to-eat', 'high-kcal', 'shelf-stable', 'processed', 'breakfast', 'kid-friendly', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Skyr', 'Fructe de pădure'],
      tips: [
        'Capcana: arată „sănătos", dar are mai multe calorii pe gram decât înghețata și mai puțină proteină decât pâinea.',
        'Folosește-o ca 20 g topping peste 250 g skyr — obții crocantul cu 92 kcal, nu cu 460.',
        'Granola de casă din ovăz + albuș bătut costă 1/4 și are dublu proteină.'
      ],
      warnings: ['Conține gluten și adesea nuci.', 'Zahăr mare — 22 g/100 g, comparabil cu multe prăjituri.'],
      storage: 'Punga resigilată sau cutie etanșă.',
      shelfLife: '~8 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Crownfield granola', 'valori tipice granola cu miere']
    },

    {
      id: 'b-granola-proteica',
      name: 'Protein Granola',
      nameRo: 'Granola proteică',
      brand: 'Ostrovit / Nutrend (Online RO)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de suplimente — nutriland.ro, highenergy.ro', priceRon: 34.9, packGrams: 300, packLabel: 'pungă 300 g', note: 'Ostrovit Protein Granola' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft „fitness"/proteic, lângă batoane', priceRon: 24.99, packGrams: 250, packLabel: 'pungă 250 g', note: 'Apare în campanii' },
        { name: 'Decathlon', availability: 'usual', aisle: 'Raft nutriție sportivă', priceRon: 29.9, packGrams: 300, packLabel: 'pungă 300 g', note: 'Decathlon Shopping City Sibiu' }
      ],
      sibiuNote: 'Nu contați pe raftul de supermarket. Decathlon din Shopping City Sibiu are stoc mai constant decât Kaufland.',
      per100g: { kcal: 420, protein: 22, carbs: 42, sugars: 8, fat: 15, satFat: 3, fiber: 8, salt: 0.4 },
      serving: { grams: 45, label: '1 porție (45 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['bol'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Mai puțin dulce decât granola clasică, cu gust vizibil de proteină din soia',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 1,
        richness: 3,
        texture: 'Crocantă dar mai fărâmicioasă; bulgării se sparg în praf',
        notes: 'Chiar funcționează — 22 g proteină/100 g. Dar plătești 110 lei/kg.'
      },
      stats: { taste: 66, satiety: 68, convenience: 88, versatility: 60 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 4, lunch: 2, snack: 4, dinner: 1, beforeBed: 2 },
      timingNote: 'Mic dejun bun, dar tot ai nevoie de iaurt sub ea ca să treci de 30 g proteină.',
      tags: ['ready-to-eat', 'high-protein', 'high-fiber', 'high-kcal', 'shelf-stable', 'breakfast', 'premium', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Skyr', 'Iaurt grecesc', 'Lapte proteic', 'Fructe de pădure'],
      tips: [
        'Cost per 100 g proteină: ~530 lei. E de 10 ori mai scumpă decât laptele praf degresat pentru aceeași proteină.',
        'Dacă vrei efectul ieftin: 60 g ovăz + 20 g lapte praf + 15 g whey, amestecate uscat. Aceeași proteină, 1/5 din preț.',
        'Rămâne totuși mult mai bună decât granola clasică — dacă tot mănânci granola, mănânc-o pe asta.'
      ],
      warnings: ['Conține gluten și soia; verifică nucile.', 'Preț per proteină foarte slab.'],
      storage: 'Punga resigilată, loc uscat.',
      shelfLife: '~9 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Ostrovit Protein Granola', 'nutriland.ro']
    },

    {
      id: 'b-cereale-proteice',
      name: 'Protein Cereal Crunch',
      nameRo: 'Cereale proteice (protein crunch)',
      brand: 'Crownfield Protein (Lidl) / Nutrend',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'occasional', aisle: 'Raft cereale, cutii cu banderolă High Protein', priceRon: 14.99, packGrams: 375, packLabel: 'cutie 375 g', note: 'Doar în campaniile High Protein' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de suplimente', priceRon: 32.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft cereale, zona premium', priceRon: 19.99, packGrams: 400, packLabel: 'cutie 400 g', note: '' }
      ],
      sibiuNote: 'Cel mai bine e să prinzi campania Lidl — verifică broșura de luni. La Kaufland Alba Iulia apar sporadic.',
      per100g: { kcal: 380, protein: 25, carbs: 45, sugars: 8, fat: 8, satFat: 1.5, fiber: 7, salt: 0.5 },
      serving: { grams: 40, label: '1 porție (40 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['bol'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulceag-cerealier, cu un fundal ușor de proteină din soia',
        intensity: 3,
        sweetness: 3,
        saltiness: 1,
        umami: 0,
        richness: 2,
        texture: 'Bilute foarte crocante, rezistă bine în lapte',
        notes: 'Rezolvă problema „cereale la micul dejun" fără ca masa să fie doar zahăr.'
      },
      stats: { taste: 70, satiety: 66, convenience: 92, versatility: 55 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 4, lunch: 2, snack: 4, dinner: 1, beforeBed: 2 },
      timingNote: '40 g cu 250 ml lapte proteic = 10 + 20 g proteină, în 90 de secunde.',
      tags: ['ready-to-eat', 'very-high-protein', 'high-fiber', 'shelf-stable', 'breakfast', 'processed', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lapte proteic RTD', 'Skyr', 'Iaurt grecesc', 'Lapte 1,5%'],
      tips: [
        'Combinația câștigătoare: 40 g cereale proteice + 250 ml lapte proteic = 30 g proteină, 300 kcal.',
        'Proteina e de obicei din soia — completă, deci contează la fel de bine ca zerul.',
        'Porția de pe cutie e 30 g. Nimeni nu mănâncă 30 g. Calculează 45–50 g.'
      ],
      warnings: ['Conține gluten și soia.'],
      storage: 'Cutie etanșă, loc uscat.',
      shelfLife: '~9 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Crownfield Protein Crunchy', 'lidl.ro sortiment High Protein']
    },

    {
      id: 'b-cornflakes',
      name: 'Corn Flakes (honest contrast)',
      nameRo: 'Fulgi de porumb (corn flakes)',
      brand: 'Crownfield (Lidl) / Nestlé',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🌽',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, cutii mari galbene', priceRon: 5.99, packGrams: 500, packLabel: 'cutie 500 g', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft cereale', priceRon: 6.49, packGrams: 500, packLabel: 'cutie 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale', priceRon: 6.99, packGrams: 500, packLabel: 'cutie 500 g', note: '' }
      ],
      sibiuNote: 'Există în orice magazin. Aici doar ca reper — sunt aproape amidon pur.',
      per100g: { kcal: 378, protein: 7, carbs: 84, sugars: 8, fat: 0.9, satFat: 0.2, fiber: 3, salt: 1.1 },
      serving: { grams: 40, label: '1 bol mic (40 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['bol'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Ușor sărat-dulce, gust curat de porumb prăjit',
        intensity: 2,
        sweetness: 2,
        saltiness: 2,
        umami: 0,
        richness: 0,
        texture: 'Crocant 45 de secunde, apoi terci',
        notes: 'Nostalgic. Nutrițional, aproape zero: 40 g dau 2,8 g proteină.'
      },
      stats: { taste: 62, satiety: 20, convenience: 98, versatility: 40 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 3, lunch: 1, snack: 1, dinner: 1, beforeBed: 1 },
      timingNote: 'Carbohidrat rapid — util doar înainte sau imediat după antrenament, cu proteină lângă.',
      tags: ['ready-to-eat', 'budget', 'shelf-stable', 'kid-friendly', 'processed', 'fast-digesting', 'low-fat'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lapte proteic', 'Skyr', 'Whey în lapte'],
      tips: [
        'Sarea: 1,1 g/100 g, la fel ca pâinea. Cerealele „dulci" sunt și sărate.',
        'Dacă tot le mănânci, folosește 250 ml lapte proteic în loc de lapte normal: 4x proteina bolului.',
        'Indice glicemic ~81 — printre cele mai mari din supermarket.'
      ],
      warnings: ['Conțin malț de orz, deci gluten.'],
      storage: 'Cutie etanșă.',
      shelfLife: '~10 luni',
      dataConfidence: 'high',
      sources: ['Eticheta Crownfield Corn Flakes', 'USDA corn flakes']
    },

    {
      id: 'b-pancake-mix-proteic',
      name: 'Protein Pancake Mix',
      nameRo: 'Mix pentru clătite proteice',
      brand: 'Nutrend / Ostrovit (Online RO)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Mic dejun & cereale',
      emoji: '🥞',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, highenergy.ro, emag', priceRon: 45.9, packGrams: 750, packLabel: 'pungă 750 g', note: 'Nutrend Protein Pancake' },
        { name: 'Decathlon', availability: 'usual', aisle: 'Raft nutriție sportivă', priceRon: 39.9, packGrams: 500, packLabel: 'cutie 500 g', note: 'Decathlon Shopping City Sibiu' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft fitness', priceRon: 34.99, packGrams: 500, packLabel: 'cutie 500 g', note: '' }
      ],
      sibiuNote: 'Decathlon din Shopping City e cel mai de încredere punct fizic din Sibiu pentru mixuri proteice.',
      per100g: { kcal: 370, protein: 30, carbs: 40, sugars: 5, fat: 6, satFat: 1.2, fiber: 6, salt: 0.8 },
      serving: { grams: 60, label: '1 porție = 3 clătite (60 g mix)' },
      effort: 2,
      timeMin: 10,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie antiaderentă', 'bol', 'tel'],
        steps: [
          'Amestecă 60 g mix cu 120 ml apă sau lapte până obții un aluat gros.',
          'Lasă 2 minute să se hidrateze.',
          'Toarnă porții mici în tigaia încinsă, fără ulei sau cu un strop.',
          'Întoarce când apar bule la suprafață, încă 1 minut.'
        ],
        yieldNote: '60 g mix = 3 clătite medii'
      },
      taste: {
        profile: 'Dulceag-vanilat, cu un ușor gust de proteină la final',
        intensity: 3,
        sweetness: 3,
        saltiness: 1,
        umami: 0,
        richness: 2,
        texture: 'Mai dense și mai uscate decât clătitele normale',
        notes: 'Nu vor fi niciodată clătite de bunica, dar 18 g proteină la porție e serios.'
      },
      stats: { taste: 68, satiety: 72, convenience: 55, versatility: 58 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 3, snack: 3, dinner: 2, beforeBed: 2 },
      timingNote: 'Micul dejun de weekend care nu strică ziua — 18 g proteină în 10 minute.',
      tags: ['very-high-protein', 'high-fiber', 'shelf-stable', 'breakfast', 'post-workout', 'premium'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Fructe de pădure', 'Pastă de arahide', 'Sirop fără zahăr'],
      tips: [
        'Prepară-l cu albuș lichid în loc de apă: sari de la 18 la 28 g proteină pe porție.',
        'Focul mic e obligatoriu — proteina se arde mult mai repede decât făina.',
        'Alternativa de casă: 40 g ovăz măcinat + 30 g whey + 1 ou + 100 ml albuș. Același rezultat, jumătate de preț.'
      ],
      warnings: ['Conține gluten, lapte, adesea ou.'],
      storage: 'Punga resigilată, loc uscat.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Nutrend Protein Pancake', 'valori tipice mix proteic']
    },

    {
      id: 'b-lapte-proteic-rtd',
      name: 'High Protein Milk Drink',
      nameRo: 'Lapte proteic (High Protein Milk)',
      brand: 'Milbona (Lidl) / Zuzu Protein',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🥛',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate refrigerate, lângă iaurturile proteice', priceRon: 5.99, packGrams: 500, packLabel: 'sticlă 500 ml', note: 'Cel mai bun preț per gram de proteină din raftul rece' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft lactate, zona produse proteice', priceRon: 7.49, packGrams: 500, packLabel: 'sticlă 500 ml', note: 'Zuzu Protein / Pilos' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft lactate refrigerate', priceRon: 7.99, packGrams: 500, packLabel: 'sticlă 500 ml', note: '' },
        { name: 'Profi', availability: 'occasional', aisle: 'Raft lactate', priceRon: 8.49, packGrams: 500, packLabel: 'sticlă 500 ml', note: '' }
      ],
      sibiuNote: 'Lidl-ul de pe Calea Dumbrăvii are cel mai mare raft proteic din Sibiu. Zuzu Protein (Danone România) e mai ușor de găsit la Kaufland Alba Iulia.',
      per100g: { kcal: 51, protein: 8, carbs: 4.5, sugars: 4.5, fat: 0.5, satFat: 0.3, fiber: 0, salt: 0.15 },
      micros: { calciumMg: 160, b12Ug: 0.5, potassiumMg: 200 },
      serving: { grams: 500, label: '1 sticlă (500 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Lapte curat, ușor mai dulce și mai gros decât laptele normal',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Mai vâscos decât laptele, aproape ca un iaurt de băut subțire',
        notes: 'Cea mai puțin dureroasă cale de a bea 40 g proteină. Nu are gust de supliment.'
      },
      stats: { taste: 74, satiety: 62, convenience: 98, versatility: 78 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 3, snack: 5, dinner: 2, beforeBed: 5 },
      timingNote: 'Cazeina din el se digeră lent — excelent înainte de culcare sau ca gustare de la 16:00.',
      tags: ['ready-to-eat', 'grab-and-go', 'low-fat', 'protein-dense', 'portable', 'post-workout', 'night-snack', 'calcium-rich', 'b12', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Cereale proteice', 'Fulgi de ovăz', 'Cafea', 'Cacao'],
      tips: [
        'O sticlă de 500 ml = 40 g proteină pentru ~6 lei. Cost per 100 g proteină: ~15 lei. Bate orice baton proteic.',
        'Multe variante sunt și fără lactoză — verifică eticheta dacă ai probleme digestive.',
        'Folosește-l în loc de apă la fulgii de ovăz: micul dejun sare instant cu 25 g proteină.'
      ],
      warnings: ['Conține lactoză (unele variante nu).'],
      storage: 'Frigider 2–6 °C; după deschidere 2 zile.',
      shelfLife: '~3 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Milbona High Protein Milk Drink', 'lidl.ro']
    },

    {
      id: 'b-hipro-shake',
      name: 'HiPRO Protein Shake',
      nameRo: 'Shake proteic HiPRO',
      brand: 'HiPRO (Danone)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '💪',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft lactate refrigerate, zona produse proteice', priceRon: 9.99, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft lactate / băuturi refrigerate la casă', priceRon: 10.49, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Frigiderul de la casă', priceRon: 11.5, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' }
      ],
      sibiuNote: 'Carrefour din Shopping City și Kaufland Alba Iulia sunt cele mai sigure. În Sibiu apare și la benzinării OMV, dar la 14–15 lei.',
      per100g: { kcal: 34, protein: 7.6, carbs: 1.2, sugars: 1.2, fat: 0.1, satFat: 0.1, fiber: 0, salt: 0.15 },
      micros: { calciumMg: 150, b12Ug: 0.4 },
      serving: { grams: 330, label: '1 sticlă (330 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulce fără zahăr, aromă de vanilie/căpșuni/ciocolată, cu final ușor de îndulcitor',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 0,
        richness: 1,
        texture: 'Subțire, aproape ca laptele degresat, nu cremoasă',
        notes: '25 g proteină, 0 g grăsime, 110 kcal. Nutrițional impecabil, gustativ cam apos.'
      },
      stats: { taste: 66, satiety: 58, convenience: 100, versatility: 40 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 5, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Post-antrenament perfect: proteină din lapte, rece, în geantă, gata în 20 de secunde.',
      tags: ['ready-to-eat', 'grab-and-go', 'protein-dense', 'low-fat', 'low-carb', 'portable', 'post-workout', 'cutting', 'premium'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Banană', 'Cereale proteice', 'Covrig (dacă tot îl mănânci)'],
      tips: [
        '10 lei pentru 25 g proteină = 40 lei per 100 g proteină. Convenabil, dar de 2,5 ori mai scump ca laptele proteic Lidl.',
        'Fără lactoză, deci sigur pentru cei cu intoleranță.',
        'La sală, în geanta de sport, rezistă 3–4 ore fără frigider — dar nu-l lăsa în mașină vara.'
      ],
      warnings: ['Conține proteine din lapte — nu e vegan.', 'Îndulcitori (sucraloză/acesulfam K) — unii îi resimt digestiv.'],
      storage: 'Frigider; se bea imediat după deschidere.',
      shelfLife: '~1 lună sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta HiPRO Protein Drink', 'Danone HiPRO']
    },

    {
      id: 'b-nutrend-protein-drink',
      name: 'RTD Whey Protein Drink',
      nameRo: 'Băutură proteică gata preparată (whey RTD)',
      brand: 'Nutrend / Grenade',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🧃',
      unit: 'ml',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, highenergy.ro — bax de 8–12 sticle', priceRon: 89.9, packGrams: 2640, packLabel: 'bax 8 x 330 ml', note: 'Cel mai bun preț la bax' },
        { name: 'Decathlon', availability: 'usual', aisle: 'Raft nutriție sportivă, frigider la casă', priceRon: 13.9, packGrams: 330, packLabel: 'sticlă 330 ml', note: 'Decathlon Shopping City Sibiu' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft suplimente / frigider casă', priceRon: 14.9, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' }
      ],
      sibiuNote: 'În Sibiu, sălile mari (World Class, Sala Transilvania) vând Nutrend la recepție, dar cu 30% peste prețul online. Comandă bax.',
      per100g: { kcal: 42, protein: 7, carbs: 2.5, sugars: 1.5, fat: 0.5, satFat: 0.3, fiber: 0, salt: 0.15 },
      serving: { grams: 330, label: '1 sticlă (330 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Aromă puternică de ciocolată sau vanilie, dulceață de îndulcitor evidentă',
        intensity: 4,
        sweetness: 4,
        saltiness: 0,
        umami: 0,
        richness: 2,
        texture: 'Ușor gros, uneori cu senzație de praf nedizolvat pe limbă',
        notes: 'Gust clar de supliment. Îl bei pentru comoditate, nu pentru plăcere.'
      },
      stats: { taste: 58, satiety: 55, convenience: 96, versatility: 30 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 5, lunch: 2, snack: 4, dinner: 1, beforeBed: 3 },
      timingNote: 'Exclusiv post-antrenament sau când n-ai altă opțiune. Nu e masă.',
      tags: ['ready-to-eat', 'grab-and-go', 'protein-dense', 'low-fat', 'portable', 'post-workout', 'shelf-stable', 'premium', 'processed'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Banană', 'Baton proteic', 'Fulgi de ovăz'],
      tips: [
        'Compară onest: 23 g proteină la 13 lei = 56 lei per 100 g proteină. Un kg de whey pudră îți dă aceeași proteină la ~20 lei.',
        'Multe variante sunt shelf-stable (UHT) — poți ține 2 în birou fără frigider.',
        'Dacă bei zilnic, baxul online e obligatoriu; la bucată ești jefuit.'
      ],
      warnings: ['Conține lapte.', 'Preț per proteină slab față de pudră.'],
      storage: 'Loc răcoros; variantele UHT nu au nevoie de frigider până la deschidere.',
      shelfLife: '~6–9 luni (UHT)',
      dataConfidence: 'medium',
      sources: ['Etichete Nutrend / Grenade RTD', 'highenergy.ro']
    },

    {
      id: 'b-milkshake-proteic',
      name: 'Protein Milkshake',
      nameRo: 'Milkshake proteic',
      brand: 'Barebells / Nutramino',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🥤',
      unit: 'ml',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, nutramino.ro — bax 12 sticle', priceRon: 149, packGrams: 3960, packLabel: 'bax 12 x 330 ml', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft batoane proteice / frigider casă', priceRon: 15.9, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' },
        { name: 'Decathlon', availability: 'usual', aisle: 'Nutriție sportivă', priceRon: 14.9, packGrams: 330, packLabel: 'sticlă 330 ml', note: '' }
      ],
      sibiuNote: 'Barebells se găsește neregulat în Sibiu; Decathlon din Shopping City e cel mai constant. Restul e comandă online.',
      per100g: { kcal: 47, protein: 7.3, carbs: 3, sugars: 1.5, fat: 1, satFat: 0.6, fiber: 0.4, salt: 0.2 },
      serving: { grams: 330, label: '1 sticlă (330 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cremos, foarte aromat — caramel, cookies, ciocolată — cel mai bun gust din categoria RTD',
        intensity: 4,
        sweetness: 4,
        saltiness: 1,
        umami: 0,
        richness: 3,
        texture: 'Gros, catifelat, chiar seamănă cu un milkshake',
        notes: 'Singura băutură proteică pe care o bei din plăcere. Costă cât un prânz.'
      },
      stats: { taste: 84, satiety: 60, convenience: 98, versatility: 32 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 5, lunch: 2, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Înlocuitor de desert cu 24 g proteină — folosește-l ca să nu mănânci înghețată.',
      tags: ['ready-to-eat', 'grab-and-go', 'protein-dense', 'low-carb', 'portable', 'post-workout', 'cutting', 'premium', 'processed'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Cafea espresso (toarnă peste)', 'Fulgi de ovăz', 'Fructe congelate'],
      tips: [
        'Congelat parțial 90 de minute și amestecat cu furculița devine înghețată proteică decentă.',
        'La 15 lei bucata e produs de răsfăț, nu de rutină. Un shake de whey acasă costă 3 lei.',
        'Fără lactoză și fără zahăr adăugat — bun pentru cine are burta sensibilă.'
      ],
      warnings: ['Conține proteine din lapte.', 'Preț mare per gram de proteină.'],
      storage: 'Rece e mult mai bun; sigilat rezistă la temperatura camerei.',
      shelfLife: '~9 luni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Barebells Milkshake', 'nutriland.ro']
    },

    {
      id: 'b-protein-latte',
      name: 'Protein Latte (coffee with milk)',
      nameRo: 'Cafea cu lapte / protein latte',
      brand: 'generic (de casă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '☕',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate (lapte) + raft cafea', priceRon: 5.49, packGrams: 1000, packLabel: 'lapte 1 l, 1,5% grăsime', note: 'Baza costă sub 1 leu per cană' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft lactate', priceRon: 5.99, packGrams: 1000, packLabel: 'lapte 1 l', note: '' },
        { name: 'Restaurant Sibiu', availability: 'always', aisle: 'Cafenele din Piața Mică — Café Wien, Arhiva, Kombinat', priceRon: 16, packGrams: 300, packLabel: 'latte mare 300 ml', note: 'Prețul de cafenea în Sibiu, 2026' }
      ],
      sibiuNote: 'Cafenelele din Piața Mică fac latte cu 250–300 ml lapte, adică ~8 g proteină pentru 16 lei. Acasă, aceeași cană costă 1,5 lei.',
      per100g: { kcal: 30, protein: 2.3, carbs: 3.2, sugars: 3.2, fat: 1, satFat: 0.6, fiber: 0, salt: 0.05 },
      micros: { calciumMg: 95, b12Ug: 0.3 },
      serving: { grams: 300, label: '1 cană mare (300 ml)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 3,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['espressor sau ibric', 'cană', 'spumant de lapte (opțional)'],
        steps: [
          'Fă 50 ml de cafea tare.',
          'Încălzește 250 ml lapte fără să-l fierbi (60–65 °C).',
          'Toarnă laptele peste cafea.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Cremos, amărui-dulceag, aroma clasică de cafea cu lapte',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Catifelat dacă laptele e spumat',
        notes: 'Rar când o băutură plăcută are și un profil nutrițional onest.'
      },
      stats: { taste: 82, satiety: 34, convenience: 82, versatility: 45 },
      timing: { breakfast: 5, preWorkout: 5, postWorkout: 2, lunch: 3, snack: 4, dinner: 1, beforeBed: 0 },
      timingNote: 'Dimineața și pre-antrenament. Cofeina după 16:00 îți strică somnul, deci și recuperarea.',
      tags: ['ready-to-eat', 'budget', 'calcium-rich', 'b12', 'breakfast', 'pre-workout', 'low-kcal'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Whey vanilie', 'Lapte praf degresat', 'Scorțișoară', 'Cacao'],
      tips: [
        'HACK: adaugă 25 g whey vanilie în laptele rece, apoi toarnă cafeaua fierbinte peste — 27 g proteină, 190 kcal.',
        'Nu turna whey direct în lichid fierbinte: se brânzește. Întâi dizolvă în lapte rece.',
        'Un latte de cafenea cu sirop are 250–350 kcal și 8 g proteină. Al tău de acasă are 90 kcal și 7 g.'
      ],
      warnings: ['Conține lactoză.', 'Cafeaua de cafenea cu siropuri poate ajunge la 40 g zahăr.'],
      storage: 'Se bea imediat.',
      shelfLife: '—',
      dataConfidence: 'medium',
      sources: ['Calcul din eticheta lapte 1,5% + espresso', 'CIQUAL café au lait']
    },

    {
      id: 'b-ciocolata-calda-lapte',
      name: 'Hot Chocolate with Milk',
      nameRo: 'Ciocolată caldă cu lapte',
      brand: 'Nesquik / Dr. Oetker',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🍫',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cacao/băuturi instant, lângă cafea', priceRon: 16.99, packGrams: 400, packLabel: 'cutie 400 g pudră', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft cacao instant', priceRon: 12.99, packGrams: 400, packLabel: 'cutie 400 g pudră', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft cacao', priceRon: 17.9, packGrams: 400, packLabel: 'cutie 400 g', note: '' }
      ],
      sibiuNote: 'Iarna, în Piața Mare la târgul de Crăciun, ciocolata caldă costă 20 lei și are ~5 g proteină. Acasă, 2 lei.',
      per100g: { kcal: 88, protein: 3.3, carbs: 13, sugars: 12.5, fat: 2.6, satFat: 1.6, fiber: 0.5, salt: 0.1 },
      micros: { calciumMg: 110, b12Ug: 0.3 },
      serving: { grams: 250, label: '1 cană (250 ml)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 3,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['cratiță sau microunde', 'tel mic'],
        steps: [
          'Încălzește 250 ml lapte.',
          'Amestecă 4 lingurițe de pudră cu 2 linguri de lapte rece până se face pastă.',
          'Toarnă laptele fierbinte peste pastă și amestecă bine.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Dulce, cremos, cu aromă rotundă de cacao',
        intensity: 3,
        sweetness: 4,
        saltiness: 0,
        umami: 1,
        richness: 3,
        texture: 'Catifelată, ușor groasă',
        notes: 'Confort pur. Dar pudra din comerț e 75% zahăr — proteina vine doar din lapte.'
      },
      stats: { taste: 86, satiety: 32, convenience: 78, versatility: 35 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 2, lunch: 1, snack: 3, dinner: 1, beforeBed: 3 },
      timingNote: 'Seara, ca ritual — dar fă-o proteică, altfel sunt 220 kcal de zahăr cald.',
      tags: ['budget', 'winter', 'kid-friendly', 'calcium-rich', 'processed', 'ready-to-eat'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Whey ciocolată', 'Lapte praf degresat', 'Scorțișoară'],
      tips: [
        'HACK: folosește cacao neîndulcită (1 lingură) + 20 g lapte praf degresat + îndulcitor în loc de pudra din comerț. Sari de la 8 la 16 g proteină și tai 15 g de zahăr.',
        'Pudra Nesquik are ~75 g zahăr/100 g — practic bei zahăr aromat cu cacao.',
        'Cu lapte proteic în loc de lapte normal, cana ajunge la 22 g proteină.'
      ],
      warnings: ['Zahăr foarte mare în pudrele comerciale.', 'Conține lactoză.'],
      storage: 'Pudra: cutie închisă, loc uscat. Băutura se consumă imediat.',
      shelfLife: 'Pudra ~18 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Nesquik + lapte 1,5%', 'calcul propriu']
    },

    {
      id: 'b-kefir-de-baut',
      name: 'Drinking Kefir',
      nameRo: 'Chefir de băut',
      brand: 'Zuzu / Napolact / Covalact',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🍶',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft lactate, lângă iaurturile de băut', priceRon: 7.49, packGrams: 500, packLabel: 'sticlă 500 ml', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate refrigerate', priceRon: 6.49, packGrams: 500, packLabel: 'sticlă 500 ml', note: 'Pilos, cel mai ieftin' },
        { name: 'Profi', availability: 'always', aisle: 'Raft lactate', priceRon: 7.99, packGrams: 500, packLabel: 'sticlă 500 ml', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Tarabele cu lactate de la producători', priceRon: 10, packGrams: 1000, packLabel: 'sticlă 1 l', note: 'Chefir de casă, mai acru și mai gros' }
      ],
      sibiuNote: 'În Piața Cibin, sâmbătă dimineața, găsești chefir de la producători din Mărginimea Sibiului — mai gras, mai acru, fără etichetă.',
      per100g: { kcal: 55, protein: 3.3, carbs: 4, sugars: 4, fat: 2.8, satFat: 1.8, fiber: 0, salt: 0.1 },
      micros: { calciumMg: 120, b12Ug: 0.4, potassiumMg: 150 },
      serving: { grams: 250, label: '1 pahar mare (250 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Acrișor-efervescent, ușor drojdios, cu o urmă de sifon',
        intensity: 4,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Lichid, ușor granulos, cu bule fine',
        notes: 'Gust puternic care nu place tuturor. Probioticele sunt reale, proteina e modestă.'
      },
      stats: { taste: 52, satiety: 45, convenience: 94, versatility: 62 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 3, lunch: 3, snack: 4, dinner: 3, beforeBed: 4 },
      timingNote: 'Bun după antibiotice sau după o masă grea — dar nu-l socoti sursă serioasă de proteină.',
      tags: ['ready-to-eat', 'grab-and-go', 'budget', 'calcium-rich', 'b12', 'portable', 'hangover'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Mărar și sare (variantă sărată)', 'Fulgi de ovăz', 'Castraveți'],
      tips: [
        '3,3 g proteină/100 ml — la fel ca laptele. Nu e „superaliment proteic", e lapte fermentat.',
        'Un pahar de 250 ml = 8 g proteină. Dacă vrei 30 g din chefir, bei un litru.',
        'Amestecat cu 20 g lapte praf degresat devine o băutură de 15 g proteină la pahar.'
      ],
      warnings: ['Conține lactoză (parțial fermentată, deci mai tolerabilă).'],
      storage: 'Frigider 2–6 °C; agită înainte de consum.',
      shelfLife: '~2 săptămâni',
      dataConfidence: 'medium',
      sources: ['Eticheta Zuzu chefir', 'CIQUAL kéfir']
    },

    {
      id: 'b-ayran',
      name: 'Ayran (salted yogurt drink)',
      nameRo: 'Ayran (iaurt de băut sărat)',
      brand: 'Sek / Zuzu / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🥛',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft lactate, lângă iaurturile de băut', priceRon: 3.99, packGrams: 250, packLabel: 'pahar 250 ml', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft lactate / produse turcești', priceRon: 4.49, packGrams: 250, packLabel: 'pahar 250 ml', note: '' },
        { name: 'Restaurant Sibiu', availability: 'always', aisle: 'Shaormeriile din centru și din Ștrand', priceRon: 6, packGrams: 250, packLabel: 'pahar 250 ml', note: 'Vine automat cu shaorma' }
      ],
      sibiuNote: 'Cel mai ușor de găsit la shaormeriile din zona Piața Mare și Vasile Aaron. În supermarket, Kaufland Alba Iulia are raft turcesc mai mare.',
      per100g: { kcal: 38, protein: 2.5, carbs: 3, sugars: 3, fat: 1.7, satFat: 1.1, fiber: 0, salt: 0.6 },
      micros: { calciumMg: 95, b12Ug: 0.25 },
      serving: { grams: 250, label: '1 pahar (250 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat-acrișor, răcoritor, cu iaurt diluat evident',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 2,
        richness: 1,
        texture: 'Subțire, spumos la turnare',
        notes: 'Excelent lângă mâncare grasă. Ca sursă de proteină e slab: 6 g pe pahar.'
      },
      stats: { taste: 64, satiety: 30, convenience: 96, versatility: 38 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 3, dinner: 3, beforeBed: 2 },
      timingNote: 'Vara, cu mâncare sărată — reface și electroliții pierduți la transpirat.',
      tags: ['ready-to-eat', 'grab-and-go', 'budget', 'low-kcal', 'summer', 'portable', 'high-sodium'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Shaorma', 'Grătar', 'Salată de castraveți'],
      tips: [
        'Îl faci acasă în 30 de secunde: 150 g iaurt grecesc + 100 ml apă + un vârf de sare = 14 g proteină în loc de 6.',
        'Sarea de 0,6 g/100 ml se adună repede dacă bei două pahare.',
        'Varianta din comerț e iaurt diluat cu apă — plătești apa.'
      ],
      warnings: ['Conține lactoză.', 'Sare adăugată.'],
      storage: 'Frigider; agită înainte.',
      shelfLife: '~2 săptămâni',
      dataConfidence: 'medium',
      sources: ['Etichete ayran RO/TR', 'CIQUAL ayran']
    },

    {
      id: 'b-bautura-soia',
      name: 'Unsweetened Soy Drink',
      nameRo: 'Băutură de soia neîndulcită',
      brand: 'Vemondo (Lidl) / Alpro',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🫘',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft băuturi vegetale, cutii Vemondo', priceRon: 6.49, packGrams: 1000, packLabel: 'cutie 1 l', note: 'Cel mai ieftin din Sibiu' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft bio / băuturi vegetale', priceRon: 9.99, packGrams: 1000, packLabel: 'cutie 1 l Alpro', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft vegetal', priceRon: 10.49, packGrams: 1000, packLabel: 'cutie 1 l', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft băuturi vegetale', priceRon: 10.9, packGrams: 1000, packLabel: 'cutie 1 l', note: '' }
      ],
      sibiuNote: 'Vemondo de la Lidl e cea mai bună afacere din raftul vegetal sibian: 1 leu diferență față de laptele de vacă, aceeași proteină.',
      per100g: { kcal: 33, protein: 3.3, carbs: 0.5, sugars: 0.3, fat: 1.8, satFat: 0.3, fiber: 0.6, salt: 0.09 },
      micros: { calciumMg: 120, b12Ug: 0.38, vitDUg: 0.75 },
      serving: { grams: 250, label: '1 pahar (250 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Ușor fasoliu, cu final de nucă; neîndulcită e destul de seacă',
        intensity: 2,
        sweetness: 0,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Subțire, ușor cretoasă',
        notes: 'Singura băutură vegetală cu proteină comparabilă cu laptele. Migdale și ovăz au 0,5–1 g.'
      },
      stats: { taste: 48, satiety: 40, convenience: 95, versatility: 80 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 3, dinner: 2, beforeBed: 3 },
      timingNote: 'Singura alternativă vegetală care merită într-un shake — restul sunt apă aromată.',
      tags: ['ready-to-eat', 'budget', 'low-carb', 'low-kcal', 'shelf-stable', 'calcium-rich', 'b12', 'complete-protein', 'whole-food'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Fulgi de ovăz', 'Cafea', 'Proteină vegetală pudră', 'Cacao'],
      tips: [
        'Compară: soia 3,3 g proteină/100 ml, ovăz 1 g, migdale 0,5 g, orez 0,3 g. Diferența e uriașă.',
        'Cumpără varianta fortificată cu calciu și B12 — altfel pierzi tot avantajul laptelui.',
        'Proteina din soia e completă (are toți aminoacizii esențiali), spre deosebire de cea din ovăz sau orez.'
      ],
      warnings: ['Conține soia — alergen major.', 'Variantele „cu vanilie" au 6–8 g zahăr/100 ml.'],
      storage: 'Sigilată la temperatura camerei; după deschidere frigider 4–5 zile.',
      shelfLife: '~9 luni sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Vemondo băutură de soia', 'Alpro Soya Unsweetened']
    },

    {
      id: 'b-suc-portocale',
      name: 'Orange Juice (honest contrast)',
      nameRo: 'Suc de portocale 100%',
      brand: 'Santal / Cappy / Solevita (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🍊',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft sucuri, cutii Solevita', priceRon: 6.99, packGrams: 1000, packLabel: 'cutie 1 l', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft sucuri', priceRon: 7.49, packGrams: 1000, packLabel: 'cutie 1 l', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft sucuri', priceRon: 9.99, packGrams: 1000, packLabel: 'cutie 1 l Santal', note: '' }
      ],
      sibiuNote: 'Există peste tot. E în bază exclusiv ca să vezi negru pe alb ce înseamnă „calorii lichide".',
      per100g: { kcal: 45, protein: 0.7, carbs: 10, sugars: 9, fat: 0.2, satFat: 0, fiber: 0.2, salt: 0.01 },
      micros: { potassiumMg: 180 },
      serving: { grams: 250, label: '1 pahar (250 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulce-acrișor, aromă intensă de citrice',
        intensity: 4,
        sweetness: 5,
        saltiness: 0,
        umami: 0,
        richness: 0,
        texture: 'Lichid, uneori cu pulpă',
        notes: 'Delicios și complet inutil pentru proteină. 1 litru = 450 kcal și 7 g proteină.'
      },
      stats: { taste: 88, satiety: 12, convenience: 98, versatility: 30 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 2, lunch: 1, snack: 1, dinner: 1, beforeBed: 1 },
      timingNote: 'Doar ca zahăr rapid pre/intra-antrenament. În rest, mănâncă portocala.',
      tags: ['ready-to-eat', 'grab-and-go', 'budget', 'shelf-stable', 'fast-digesting', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['—'],
      tips: [
        'Cazul-școală de calorii lichide: 600 ml suc + o granolă mică = 600 kcal cu sub 10 g proteină, și îți este foame în 40 de minute.',
        'O portocală întreagă are 3 g fibră și te satură. 250 ml de suc sunt 3 portocale fără fibră.',
        '„Fără zahăr adăugat" e adevărat și irelevant: zahărul din fruct e tot zahăr.'
      ],
      warnings: ['9 g zahăr/100 ml — la fel ca o cola.'],
      storage: 'Sigilat la temperatura camerei; după deschidere frigider 3–4 zile.',
      shelfLife: '~9 luni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Solevita 100% portocale', 'USDA orange juice']
    },

    {
      id: 'b-bere-fara-alcool',
      name: 'Non-Alcoholic Beer (honest contrast)',
      nameRo: 'Bere fără alcool',
      brand: 'Ursus / Timișoreana / Erdinger Alkoholfrei',
      category: 'bakery-drinks-sweets',
      subcategory: 'Băuturi proteice & lactate lichide',
      emoji: '🍺',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft bere, secțiunea fără alcool', priceRon: 4.49, packGrams: 500, packLabel: 'doză 500 ml', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft bere', priceRon: 3.99, packGrams: 500, packLabel: 'doză 500 ml', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bere import', priceRon: 6.99, packGrams: 500, packLabel: 'sticlă 500 ml Erdinger', note: 'Varianta izotonică de grâu' }
      ],
      sibiuNote: 'Erdinger Alkoholfrei (cea „de recuperare") se găsește la Carrefour Shopping City și la Selgros. Restul e bere fără alcool obișnuită.',
      per100g: { kcal: 26, protein: 0.4, carbs: 5.5, sugars: 3, fat: 0, satFat: 0, fiber: 0, salt: 0.01 },
      micros: { potassiumMg: 50 },
      serving: { grams: 500, label: '1 doză (500 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Maltos, ușor dulceag, cu amăreală de hamei mai timidă decât la berea normală',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Efervescent, subțire',
        notes: 'Bună social, decent hidratantă, dar 2 g proteină la o doză întreagă.'
      },
      stats: { taste: 68, satiety: 18, convenience: 96, versatility: 20 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 3, lunch: 2, snack: 2, dinner: 3, beforeBed: 2 },
      timingNote: 'Post-antrenament e ok ca hidratare și carbohidrat, dar proteina trebuie să vină din altă parte.',
      tags: ['ready-to-eat', 'grab-and-go', 'budget', 'shelf-stable', 'low-kcal', 'summer'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Grătar', 'Brânzeturi', 'Nuci'],
      tips: [
        'Mitul „berea are proteine din malț" — o doză de 500 ml are 2 g. Un ou are 7.',
        'Erdinger Alkoholfrei chiar are polifenoli și electroliți studiați pentru recuperare, dar tot 0,4 g proteină/100 ml.',
        'Nu e „fără calorii": 130 kcal la doză, adică o felie și jumătate de pâine.'
      ],
      warnings: ['Conține gluten (malț de orz/grâu).', 'Poate conține până la 0,5% alcool — relevant pentru sarcină sau reguli religioase.'],
      storage: 'Loc răcoros; rece e mult mai bună.',
      shelfLife: '~9 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Ursus / Erdinger Alkoholfrei', 'valori tipice bere fără alcool']
    },

    {
      id: 'b-budinca-proteica',
      name: 'High Protein Pudding',
      nameRo: 'Budincă proteică (High Protein)',
      brand: 'Milbona (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍮',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate, zona High Protein cu banderolă albastră', priceRon: 4.49, packGrams: 200, packLabel: 'pahar 200 g', note: 'Cea cu frișcă e cea mai populară' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft lactate, deserturi proteice', priceRon: 5.49, packGrams: 200, packLabel: 'pahar 200 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft deserturi refrigerate', priceRon: 5.99, packGrams: 200, packLabel: 'pahar 200 g', note: '' }
      ],
      sibiuNote: 'Lidl-ul din Turnișor și cel de pe Șos. Alba Iulia au raft dedicat. Se golește vinerea după-amiaza.',
      per100g: { kcal: 82, protein: 10, carbs: 6, sugars: 5, fat: 1.8, satFat: 1.2, fiber: 0.4, salt: 0.15 },
      micros: { calciumMg: 180, b12Ug: 0.5 },
      serving: { grams: 200, label: '1 pahar (200 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulce, cremos, cu aromă rotundă de ciocolată sau vanilie',
        intensity: 3,
        sweetness: 4,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Fină, aerată, ușor gelatinoasă la fund',
        notes: 'Chiar are gust de desert. Cel mai bun raport plăcere/proteină din raftul rece.'
      },
      stats: { taste: 80, satiety: 62, convenience: 100, versatility: 35 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 4, lunch: 2, snack: 5, dinner: 2, beforeBed: 5 },
      timingNote: 'Desert de seară fără regrete: 20 g proteină, 165 kcal.',
      tags: ['ready-to-eat', 'grab-and-go', 'protein-dense', 'low-fat', 'portable', 'night-snack', 'cutting', 'calcium-rich', 'processed'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Fructe de pădure', 'Nuci tocate', 'Granola (2 linguri)'],
      tips: [
        'Un pahar = 20 g proteină la 4,49 lei → ~22 lei per 100 g proteină. Excelent pentru un desert.',
        'Verifică zahărul: unele arome au 8–9 g/100 g. Cele „cu frișcă" sunt mai grase, nu mai dulci.',
        'Congelată 2 ore și amestecată devine un mousse dens, aproape înghețată.'
      ],
      warnings: ['Conține lapte.', 'Îndulcitori — pot da balonare în cantitate mare.'],
      storage: 'Frigider 2–6 °C.',
      shelfLife: '~3–4 săptămâni sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Milbona Budincă High Protein', 'lidl.ro']
    },

    {
      id: 'b-inghetata-proteica',
      name: 'High Protein Ice Cream',
      nameRo: 'Înghețată proteică',
      brand: 'Gelatelli (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍨',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'seasonal', aisle: 'Congelator înghețată, cutii cu banderolă High Protein', priceRon: 13.99, packGrams: 350, packLabel: 'caserolă 350 ml', note: 'Mai ales primăvara–toamna' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Congelator deserturi', priceRon: 17.99, packGrams: 400, packLabel: 'caserolă 400 ml', note: '' },
        { name: 'Online RO', availability: 'online', aisle: 'freshful.ro / bringo', priceRon: 22, packGrams: 350, packLabel: 'caserolă 350 ml', note: 'Livrare cu gheață' }
      ],
      sibiuNote: 'Sezonieră la Lidl — vara dispare în câteva ore de la reaprovizionare. Verifică congelatorul de la Lidl Calea Dumbrăvii dimineața.',
      per100g: { kcal: 145, protein: 12, carbs: 18, sugars: 6, fat: 2.5, satFat: 1.6, fiber: 3, salt: 0.2 },
      micros: { calciumMg: 160 },
      serving: { grams: 175, label: '1/2 caserolă (175 g)' },
      effort: 0,
      timeMin: 5,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [],
        yieldNote: 'Lasă 5 minute afară din congelator — altfel e piatră.'
      },
      taste: {
        profile: 'Dulce moderat, cu aromă bună dar corp mai puțin gras decât înghețata clasică',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 0,
        richness: 2,
        texture: 'Mai tare și mai „cristalină" decât înghețata normală; se înmoaie greu',
        notes: 'Nu păcălește pe nimeni că e Häagen-Dazs, dar e un desert de 250 kcal cu 21 g proteină.'
      },
      stats: { taste: 72, satiety: 55, convenience: 88, versatility: 25 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 1, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Vara, seara — înlocuiește o caserolă de 900 kcal cu una de 500.',
      tags: ['ready-to-eat', 'frozen', 'low-fat', 'high-fiber', 'summer', 'night-snack', 'cutting', 'processed', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Fructe de pădure congelate', 'Pastă de arahide (1 linguriță)', 'Cafea espresso turnată peste'],
      tips: [
        'Fibra de 3 g/100 g vine din inulină sau polidextroză — la 350 g dintr-o dată poate produce balonare serioasă.',
        'Caserola întreagă = 500 kcal și 42 g proteină. Nu e mâncare „gratis", dar bate orice altă înghețată.',
        'Alternativa de casă: 400 g skyr + fructe congelate + miere, la blender. 1/3 din preț, macro similar.'
      ],
      warnings: ['Conține lapte.', 'Alcooli de zahăr / fibre funcționale — risc de disconfort digestiv la porții mari.'],
      storage: 'Congelator −18 °C; nu recongela după ce s-a topit.',
      shelfLife: '~12 luni în congelator',
      dataConfidence: 'high',
      sources: ['Eticheta Gelatelli High Protein', 'lidl.ro']
    },

    {
      id: 'b-ciocolata-proteica',
      name: 'Protein Chocolate Bar',
      nameRo: 'Ciocolată proteică',
      brand: 'Ostrovit / Barebells / Nutrend',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍫',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, highenergy.ro', priceRon: 24.9, packGrams: 100, packLabel: 'tabletă 100 g', note: '' },
        { name: 'Decathlon', availability: 'usual', aisle: 'Nutriție sportivă, lângă batoane', priceRon: 19.9, packGrams: 100, packLabel: 'tabletă 100 g', note: 'Decathlon Shopping City Sibiu' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft fitness / batoane proteice', priceRon: 22.99, packGrams: 100, packLabel: 'tabletă 100 g', note: '' }
      ],
      sibiuNote: 'Nu e produs de supermarket clasic în Sibiu. Decathlon și comanda online sunt variantele realiste.',
      per100g: { kcal: 450, protein: 30, carbs: 30, sugars: 3, fat: 24, satFat: 13, fiber: 12, salt: 0.5 },
      serving: { grams: 30, label: '3 pătrățele (30 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Ciocolată amăruie cu textură granulată de proteină și dulceață de maltitol',
        intensity: 4,
        sweetness: 3,
        saltiness: 1,
        umami: 0,
        richness: 4,
        texture: 'Se sfărâmă, nu se topește catifelat ca ciocolata adevărată',
        notes: 'Rezolvă pofta, dar nu se compară cu o ciocolată bună. Și e la fel de calorică.'
      },
      stats: { taste: 60, satiety: 58, convenience: 92, versatility: 30 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 3, lunch: 1, snack: 4, dinner: 1, beforeBed: 3 },
      timingNote: 'Gustare de poftă. Nu e sursă principală de proteină la 450 kcal/100 g.',
      tags: ['ready-to-eat', 'grab-and-go', 'very-high-protein', 'high-fiber', 'high-kcal', 'low-carb', 'portable', 'shelf-stable', 'premium', 'processed'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Cafea', 'Iaurt grecesc', 'Nuci'],
      tips: [
        'Capcana calorică: 30 g proteină/100 g sună bine, dar vin la pachet cu 24 g grăsime și 450 kcal.',
        'Maltitolul din multe variante e laxativ peste 40 g — nu mânca tableta întreagă.',
        'Pentru aceeași proteină, 200 g budincă proteică costă de 5 ori mai puțin și are 165 kcal.'
      ],
      warnings: ['Conține lapte, adesea soia și nuci.', 'Alcooli de zahăr (maltitol) — efect laxativ la doze mari.'],
      storage: 'Loc răcoros, sub 20 °C; vara se topește.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Ostrovit / Barebells protein chocolate']
    },

    {
      id: 'b-crema-branza-fructe',
      name: 'High Protein Fruit Cream Cheese',
      nameRo: 'Cremă de brânză proteică cu fructe',
      brand: 'Milbona / Pilos (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍓',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate, lângă budincile proteice', priceRon: 4.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft lactate, deserturi', priceRon: 5.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' }
      ],
      sibiuNote: 'Lidl are cel mai bun preț. La Kaufland Vasile Aaron găsești variante Exquisit similare.',
      per100g: { kcal: 105, protein: 10, carbs: 8, sugars: 6, fat: 3.5, satFat: 2.3, fiber: 0.5, salt: 0.3 },
      micros: { calciumMg: 140, b12Ug: 0.4 },
      serving: { grams: 200, label: '1 caserolă (200 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cremos-acrișor, cu strat de fructe dulci la bază',
        intensity: 3,
        sweetness: 3,
        saltiness: 1,
        umami: 1,
        richness: 3,
        texture: 'Densă, catifelată, aproape ca o cremă de tort',
        notes: 'Gust de desert de patiserie la 105 kcal/100 g. Din categoria „prea bun ca să fie adevărat", dar e.'
      },
      stats: { taste: 82, satiety: 66, convenience: 100, versatility: 42 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 2, snack: 5, dinner: 2, beforeBed: 5 },
      timingNote: 'Gustarea de la 16:00 sau desertul de seară — 20 g proteină, 210 kcal.',
      tags: ['ready-to-eat', 'grab-and-go', 'portable', 'night-snack', 'calcium-rich', 'cutting', 'processed'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine proteică', 'Crackers integrali', 'Fulgi de ovăz'],
      tips: [
        'Amestecă stratul de fructe cu crema înainte să mănânci — altfel primele linguri sunt sec, ultimele prea dulci.',
        'Merge și sărat: fără să pară, e o bază bună peste pâine proteică cu castraveți.',
        'La 5 lei pentru 20 g proteină, e cea mai bună afacere din raftul de deserturi.'
      ],
      warnings: ['Conține lapte.'],
      storage: 'Frigider 2–6 °C, consumă în 2 zile după deschidere.',
      shelfLife: '~3 săptămâni sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Milbona Cream Spread High Protein', 'eatntrack.ro']
    },

    {
      id: 'b-halva-floarea-soarelui',
      name: 'Sunflower Halva',
      nameRo: 'Halva de floarea-soarelui',
      brand: 'Feleacul / Boromir / Unirea',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🟤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft dulciuri tradiționale, lângă rahat și nuga', priceRon: 9.99, packGrams: 400, packLabel: 'baton 400 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft dulciuri', priceRon: 6.49, packGrams: 200, packLabel: 'pachet 200 g', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu dulciuri și semințe', priceRon: 22, packGrams: 1000, packLabel: 'la kg, tăiată din calup', note: 'Cea mai bună calitate' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft dulciuri românești', priceRon: 11.49, packGrams: 400, packLabel: 'baton 400 g', note: '' }
      ],
      sibiuNote: 'Piața Cibin are halva tăiată din calup, mult mai bună decât cea ambalată — se cumpără la gramaj de la tarabele din hala mare.',
      per100g: { kcal: 549, protein: 12.5, carbs: 32.6, sugars: 30, fat: 38.5, satFat: 4.5, fiber: 5, salt: 0.2 },
      micros: { ironMg: 3.8, zincMg: 3.2, potassiumMg: 480, calciumMg: 90 },
      serving: { grams: 30, label: '1 felie subțire (30 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['cuțit'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Intens dulce cu gust profund de semințe prăjite, ușor uleios',
        intensity: 5,
        sweetness: 5,
        saltiness: 0,
        umami: 1,
        richness: 5,
        texture: 'Fibroasă, se destramă în fire, se lipește de cerul gurii',
        notes: 'Surpriza categoriei: 12,5 g proteină/100 g, mai mult decât orice pâine. Dar și 550 kcal.'
      },
      stats: { taste: 78, satiety: 48, convenience: 94, versatility: 30 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 2, lunch: 1, snack: 3, dinner: 1, beforeBed: 2 },
      timingNote: 'Gustare energetică pentru drumeție sau munte — densitate calorică uriașă la volum mic.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-kcal', 'portable', 'shelf-stable', 'iron-rich', 'romanian-classic', 'budget', 'whole-food'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Cafea neagră', 'Pâine integrală'],
      tips: [
        'Menționează-o oricui zice că dulciurile n-au proteină: halvaua are mai multă proteină la 100 g decât pâinea albă, integrală sau covrigul.',
        'Dar: 30% zahăr și 38% grăsime. Porția onestă e 30 g (165 kcal, 3,7 g proteină), nu jumătate de baton.',
        'Cea „cu cacao" are aproape aceleași valori; cea cu adaos de glucoză ieftină e mai dulce și mai săracă în semințe — citește ingredientele.',
        'Excelentă la drumeții în Munții Cindrel: 200 kcal pe 35 g, nu se strică, nu se topește.'
      ],
      warnings: ['Foarte calorică — ușor de mâncat 300 kcal fără să observi.', 'Poate conține urme de susan și arahide.'],
      storage: 'Loc răcoros și uscat, ambalaj închis; uleiul se separă la căldură.',
      shelfLife: '~6 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Halva Feleacul', 'eatntrack.ro', 'klorii.ro']
    },

    {
      id: 'b-pasta-arahide-cacao',
      name: 'Chocolate Peanut Butter',
      nameRo: 'Pastă de arahide cu cacao',
      brand: 'Ostrovit / Nutbutter / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Raft dulcețuri și creme tartinabile', priceRon: 14.99, packGrams: 350, packLabel: 'borcan 350 g', note: 'Varianta simplă e mai des în stoc' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft creme tartinabile / bio', priceRon: 19.99, packGrams: 350, packLabel: 'borcan 350 g', note: '' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de suplimente', priceRon: 29.9, packGrams: 500, packLabel: 'borcan 500 g', note: 'Ostrovit, variante cu proteină adăugată' }
      ],
      sibiuNote: 'Kaufland Alba Iulia are cel mai larg raft de unt de arahide din Sibiu, inclusiv variante 100% arahide, fără zahăr.',
      per100g: { kcal: 570, protein: 24, carbs: 20, sugars: 8, fat: 45, satFat: 9, fiber: 7, salt: 0.4 },
      micros: { ironMg: 2.2, zincMg: 3, potassiumMg: 650 },
      serving: { grams: 20, label: '1 lingură rasă (20 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Bogat, nucos, cu cacao amăruie peste dulceața arahidelor',
        intensity: 5,
        sweetness: 3,
        saltiness: 2,
        umami: 2,
        richness: 5,
        texture: 'Densă, uleioasă, se lipește de lingură',
        notes: 'Periculos de bună. Borcanul dispare în trei zile dacă nu îl porționezi.'
      },
      stats: { taste: 90, satiety: 62, convenience: 92, versatility: 68 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 2, lunch: 2, snack: 4, dinner: 1, beforeBed: 3 },
      timingNote: 'O lingură peste ovăz sau iaurt. Nu mai mult — 114 kcal pe lingură.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'high-fiber', 'shelf-stable', 'whole-food', 'bulking', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine proteică', 'Fulgi de ovăz', 'Banană', 'Iaurt grecesc'],
      tips: [
        '24 g proteină/100 g pare grozav până calculezi: o lingură (20 g) = 4,8 g proteină și 114 kcal. Raportul e prost.',
        'Alege varianta cu 100% arahide, fără ulei de palmier și zahăr — verifică lista de ingrediente, are 2 rânduri.',
        'Cântărește. Serios. „O lingură" ochiometrică e de obicei 30 g, adică 170 kcal.'
      ],
      warnings: ['Alergen major: arahide.', 'Densitate calorică foarte mare — cel mai frecvent sabotor al deficitului caloric.'],
      storage: 'Loc răcoros; uleiul se separă, amestecă înainte de folosire.',
      shelfLife: '~12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete unt de arahide RO', 'USDA peanut butter']
    },

    {
      id: 'b-papanasi',
      name: 'Papanasi (Romanian cheese doughnuts)',
      nameRo: 'Papanași cu smântână și dulceață',
      brand: 'generic (restaurante Sibiu)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍩',
      unit: 'g',
      stores: [
        { name: 'Restaurant Sibiu', availability: 'always', aisle: 'Aproape orice restaurant tradițional din Piața Mică / Piața Mare', priceRon: 32, packGrams: 350, packLabel: '1 porție (2 papanași + smântână + dulceață)', note: 'Preț mediu Sibiu 2026' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Congelator produse semipreparate', priceRon: 17.99, packGrams: 400, packLabel: 'pungă congelată 400 g', note: 'Se prăjesc acasă' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu brânză — pentru varianta de casă', priceRon: 18, packGrams: 500, packLabel: 'brânză de vaci 500 g', note: 'Baza pentru papanași de casă' }
      ],
      sibiuNote: 'Restaurantele din Piața Mică (Crama Sibiul Vechi, Kulinarium) servesc porții de 350–400 g. E desert de sărbătoare, nu de rutină — dar brânza îi dă un profil proteic mai bun decât orice tort.',
      per100g: { kcal: 265, protein: 8, carbs: 28, sugars: 14, fat: 13, satFat: 6, fiber: 0.8, salt: 0.4 },
      micros: { calciumMg: 95, b12Ug: 0.4 },
      serving: { grams: 350, label: '1 porție de restaurant (350 g)' },
      effort: 3,
      timeMin: 40,
      activeTimeMin: 30,
      cooking: {
        method: 'fry',
        difficulty: 'medium',
        equipment: ['bol', 'tigaie adâncă', 'spumieră', 'prosop de hârtie'],
        steps: [
          'Amestecă 500 g brânză de vaci scursă cu 2 ouă, 100 g griș sau făină, coajă de lămâie și un praf de sare.',
          'Lasă compoziția 20 de minute la frigider.',
          'Formează 4 gogoși cu bilă mică deasupra.',
          'Prăjește în ulei încins la 170 °C, 3 minute pe fiecare parte.',
          'Scurge pe hârtie, servește cu smântână și dulceață de afine.'
        ],
        yieldNote: '500 g brânză = 4 papanași mari'
      },
      taste: {
        profile: 'Dulce-acrișor, cu brânză caldă în mijloc și dulceață de afine deasupra',
        intensity: 4,
        sweetness: 4,
        saltiness: 1,
        umami: 2,
        richness: 5,
        texture: 'Crocant afară, pufos-umed înăuntru, smântână rece deasupra',
        notes: 'Cel mai bun desert românesc. O porție de restaurant e ~900 kcal — mănâncă-i o dată pe lună, nu o dată pe zi.'
      },
      stats: { taste: 96, satiety: 55, convenience: 25, versatility: 20 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Desert de ocazie. Dacă îi mănânci, sari peste alt carbohidrat la masa aia.',
      tags: ['high-kcal', 'romanian-classic', 'local-sibiu', 'kid-friendly', 'winter'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Smântână grasă', 'Dulceață de afine', 'Cafea neagră'],
      tips: [
        'Varianta „fit": copți la airfryer 15 minute la 180 °C în loc de prăjiți, cu iaurt grecesc în loc de smântână. Cobori de la 900 la ~480 kcal și urci proteina la 35 g pe porție.',
        'Brânza de vaci degresată în loc de cea grasă schimbă complet macro-ul: +6 g proteină, −8 g grăsime la 100 g.',
        'O porție de restaurant are 28 g proteină — nu e o catastrofă nutrițională, e doar foarte calorică.'
      ],
      warnings: ['Conține gluten, lapte, ou.', 'Porția de restaurant depășește frecvent 900 kcal.'],
      storage: 'Se mănâncă imediat; reîncălziți sunt tare mai slabi.',
      shelfLife: '—',
      dataConfidence: 'low',
      sources: ['Rețetă tradițională + calcul din ingrediente', 'estimare restaurante Sibiu 2026']
    },

    {
      id: 'b-clatite-cu-branza',
      name: 'Pancakes with Sweet Cheese',
      nameRo: 'Clătite cu brânză dulce',
      brand: 'generic (de casă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🥞',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Ingrediente: raft lactate (brânză de vaci) + făină', priceRon: 12, packGrams: 800, packLabel: 'ingrediente pentru 8 clătite', note: 'Brânză 400 g + făină + ouă + lapte' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu lactate — brânză de vaci proaspătă', priceRon: 20, packGrams: 1000, packLabel: 'brânză de vaci 1 kg', note: 'Mult mai bună decât cea ambalată' },
        { name: 'Profi', availability: 'always', aisle: 'Congelator — clătite gata făcute', priceRon: 14.99, packGrams: 400, packLabel: 'pungă 400 g congelate', note: 'Varianta leneșă' }
      ],
      sibiuNote: 'Brânza de vaci de la tarabele din Piața Cibin (sâmbăta dimineața) e mai densă și mai puțin apoasă — clătitele ies mult mai bune.',
      per100g: { kcal: 205, protein: 8.5, carbs: 24, sugars: 10, fat: 8, satFat: 3.5, fiber: 0.6, salt: 0.3 },
      micros: { calciumMg: 100, b12Ug: 0.4 },
      serving: { grams: 250, label: '2 clătite umplute (250 g)' },
      effort: 3,
      timeMin: 35,
      activeTimeMin: 30,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie de clătite', 'bol', 'tel', 'polonic'],
        steps: [
          'Bate 3 ouă cu 300 ml lapte, 150 g făină și un praf de sare; lasă aluatul 15 minute.',
          'Coace clătite subțiri în tigaie unsă foarte puțin.',
          'Amestecă 400 g brânză de vaci cu 1 ou, îndulcitor, stafide și coajă de lămâie.',
          'Umple clătitele, rulează.',
          'Opțional: coace 10 minute la 180 °C cu puțină smântână deasupra.'
        ],
        yieldNote: 'Rețeta dă ~8 clătite umplute'
      },
      taste: {
        profile: 'Dulce blând, cu brânză proaspătă acrișoară și aromă de vanilie',
        intensity: 3,
        sweetness: 3,
        saltiness: 1,
        umami: 2,
        richness: 3,
        texture: 'Foaie moale și elastică, umplutură cremoasă-granulată',
        notes: 'Desertul copilăriei care se poate transforma ușor într-o masă proteică decentă.'
      },
      stats: { taste: 88, satiety: 62, convenience: 30, versatility: 45 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 3, dinner: 3, beforeBed: 2 },
      timingNote: 'Micul dejun de duminică — cu brânză degresată devine chiar o masă bună.',
      tags: ['romanian-classic', 'kid-friendly', 'batch-cook', 'meal-prep', 'budget'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Smântână', 'Iaurt grecesc', 'Dulceață fără zahăr', 'Scorțișoară'],
      tips: [
        'Upgrade proteic: folosește brânză de vaci degresată (0,5%) + 30 g lapte praf degresat în umplutură. Porția sare de la 21 la 32 g proteină.',
        'Aluatul cu jumătate lapte proteic în loc de lapte normal adaugă 8 g proteină pe rețetă, fără să schimbe gustul.',
        'Se congelează perfect umplute — scoți 2 dimineața și le încălzești 90 de secunde la microunde.'
      ],
      warnings: ['Conțin gluten, lapte, ou.'],
      storage: 'Frigider 3 zile; congelator 2 luni.',
      shelfLife: '3 zile la frigider',
      dataConfidence: 'medium',
      sources: ['Calcul din ingrediente (făină, ou, lapte, brânză de vaci)', 'CIQUAL crêpe']
    },

    {
      id: 'b-orez-cu-lapte',
      name: 'Rice Pudding',
      nameRo: 'Orez cu lapte',
      brand: 'generic (de casă) / Müller',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍚',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft lactate, deserturi refrigerate (Müller Reis)', priceRon: 5.49, packGrams: 200, packLabel: 'pahar 200 g', note: 'Varianta gata făcută' },
        { name: 'Lidl', availability: 'always', aisle: 'Ingrediente: orez cu bob rotund + lapte', priceRon: 8, packGrams: 1000, packLabel: 'ingrediente pentru 4 porții', note: 'De casă, mult mai ieftin' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft deserturi refrigerate', priceRon: 5.99, packGrams: 200, packLabel: 'pahar 200 g', note: '' }
      ],
      sibiuNote: 'Varianta de casă cu lapte proteic în loc de lapte normal e cel mai bun upgrade posibil — costă la fel și dublează proteina.',
      per100g: { kcal: 120, protein: 3.5, carbs: 20, sugars: 12, fat: 2.8, satFat: 1.7, fiber: 0.3, salt: 0.1 },
      micros: { calciumMg: 105, b12Ug: 0.3 },
      serving: { grams: 200, label: '1 pahar / bol mic (200 g)' },
      effort: 2,
      timeMin: 30,
      activeTimeMin: 10,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['cratiță cu fund gros', 'lingură de lemn'],
        steps: [
          'Pune 100 g orez cu bob rotund și 700 ml lapte într-o cratiță.',
          'Fierbe la foc mic 25 de minute, amestecând des ca să nu se prindă.',
          'Adaugă îndulcitor, vanilie și scorțișoară la final.',
          'Lasă să se răcească — se îngroașă mult.'
        ],
        yieldNote: '100 g orez + 700 ml lapte = ~800 g desert'
      },
      taste: {
        profile: 'Dulce blând, cremos, cu vanilie și scorțișoară',
        intensity: 2,
        sweetness: 4,
        saltiness: 0,
        umami: 1,
        richness: 3,
        texture: 'Cremoasă cu boabe moi care își păstrează forma',
        notes: 'Confort alimentar pur. Nutrițional e mediocru: 7 g proteină pe bol.'
      },
      stats: { taste: 82, satiety: 48, convenience: 55, versatility: 35 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 3, lunch: 2, snack: 3, dinner: 2, beforeBed: 3 },
      timingNote: 'Bun pre-antrenament pentru carbohidrat lent; slab ca sursă de proteină.',
      tags: ['budget', 'kid-friendly', 'batch-cook', 'meal-prep', 'winter', 'romanian-classic', 'calcium-rich'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Scorțișoară', 'Dulceață de vișine', 'Lapte praf degresat', 'Whey vanilie'],
      tips: [
        'HACK: fă-l cu lapte proteic (8 g/100 ml) în loc de lapte normal. Sari de la 3,5 la 7 g proteină/100 g, la același preț.',
        'După răcire, amestecă 20 g lapte praf degresat în bol — +7 g proteină, textura devine mai cremoasă.',
        'Variantele din comerț au 12–14 g zahăr/100 g. Al tău de casă poate avea 4.'
      ],
      warnings: ['Conține lactoză.', 'Variantele din comerț sunt foarte dulci.'],
      storage: 'Frigider, 3 zile.',
      shelfLife: '3 zile de casă',
      dataConfidence: 'medium',
      sources: ['Calcul din orez + lapte 1,5%', 'Eticheta Müller Reis']
    },

    {
      id: 'b-jeleu-proteic',
      name: 'Protein Jelly (gelatin + whey)',
      nameRo: 'Jeleu proteic (gelatină cu proteină)',
      brand: 'generic (de casă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍮',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft ingrediente pentru prăjituri — gelatină foi sau granule', priceRon: 3.49, packGrams: 20, packLabel: 'plic gelatină 20 g', note: 'Baza costă sub 4 lei' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft ingrediente cofetărie', priceRon: 2.99, packGrams: 20, packLabel: 'plic gelatină 20 g', note: '' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de suplimente — whey izolat', priceRon: 180, packGrams: 1000, packLabel: 'whey izolat 1 kg', note: 'Celălalt ingredient' }
      ],
      sibiuNote: 'Toate ingredientele sunt banale în Sibiu. E cel mai ieftin desert proteic pe care îl poți face: sub 2 lei porția.',
      per100g: { kcal: 40, protein: 8.5, carbs: 1, sugars: 0.5, fat: 0.2, satFat: 0.1, fiber: 0, salt: 0.1 },
      serving: { grams: 200, label: '1 bol (200 g)' },
      effort: 1,
      timeMin: 130,
      activeTimeMin: 8,
      cooking: {
        method: 'blend',
        difficulty: 'easy',
        equipment: ['cratiță mică', 'bol', 'tel', 'forme sau pahare'],
        steps: [
          'Hidratează 15 g gelatină în 100 ml apă rece, 5 minute.',
          'Încălzește 300 ml apă sau lapte fără să fiarbă și dizolvă gelatina.',
          'Lasă să se răcească sub 40 °C, apoi amestecă 30 g whey și îndulcitor.',
          'Toarnă în pahare și lasă 2 ore la frigider.'
        ],
        yieldNote: 'Rețeta dă ~450 g jeleu, 2 porții'
      },
      taste: {
        profile: 'Ușor dulce, curat, fără grăsime — gust de jeleu de fructe cu fundal lăptos',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 0,
        richness: 0,
        texture: 'Elastică, se taie cu lingura, se topește în gură',
        notes: 'Ciudat de satisfăcător pentru 80 kcal. Cel mai bun desert de cutting din tot fișierul.'
      },
      stats: { taste: 58, satiety: 55, convenience: 45, versatility: 40 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 1, snack: 5, dinner: 2, beforeBed: 5 },
      timingNote: 'Seara, în deficit caloric: 17 g proteină pentru 80 kcal e imbatabil.',
      tags: ['protein-dense', 'low-fat', 'low-carb', 'low-kcal', 'cutting', 'night-snack', 'meal-prep', 'budget', 'cheap-protein'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: false, keto: true, halal: false, porkFree: false },
      pairings: ['Fructe de pădure', 'Iaurt grecesc', 'Frișcă light'],
      tips: [
        'Adaugă whey DOAR după ce amestecul a coborât sub 40 °C — altfel proteina se coagulează în cocoloașe.',
        'Gelatina în sine e proteină (colagen), dar incompletă — nu o socoti la aportul zilnic. Whey-ul face treaba.',
        'Fă o tavă întreagă duminica, taie cuburi: gustare de 5 zile la 2 lei porția.'
      ],
      warnings: ['Gelatina e de obicei din porc sau vită — verifică sursa dacă ai restricții religioase.', 'Nu e vegetarian.'],
      storage: 'Frigider, acoperit, 4–5 zile.',
      shelfLife: '5 zile',
      dataConfidence: 'medium',
      sources: ['Calcul din gelatină + whey izolat', 'USDA gelatin']
    },

    {
      id: 'b-cheesecake',
      name: 'Cheesecake (honest contrast)',
      nameRo: 'Cheesecake / prăjitură cu brânză',
      brand: 'generic (cofetării Sibiu / congelate)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Dulciuri & deserturi',
      emoji: '🍰',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Congelator deserturi / vitrina de cofetărie', priceRon: 24.99, packGrams: 400, packLabel: 'tort congelat 400 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrina de cofetărie de la brutărie', priceRon: 9.99, packGrams: 120, packLabel: '1 felie (120 g)', note: '' },
        { name: 'Restaurant Sibiu', availability: 'always', aisle: 'Cafenelele din Piața Mică', priceRon: 22, packGrams: 130, packLabel: '1 felie (130 g)', note: '' }
      ],
      sibiuNote: 'Cofetăriile din centrul Sibiului fac felii de 130–150 g. E aici ca reper: „are brânză, deci are proteină" e o iluzie.',
      per100g: { kcal: 320, protein: 6, carbs: 28, sugars: 22, fat: 20, satFat: 12, fiber: 0.5, salt: 0.4 },
      micros: { calciumMg: 70 },
      serving: { grams: 120, label: '1 felie (120 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['furculiță'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Bogat, cremos, dulce-acrișor, cu blat de biscuiți unt',
        intensity: 4,
        sweetness: 5,
        saltiness: 1,
        umami: 1,
        richness: 5,
        texture: 'Catifelată, densă, cu bază fărâmicioasă',
        notes: 'Delicios. Dar „brânza" e cream cheese cu 60% grăsime — proteina rămâne la 6 g/100 g.'
      },
      stats: { taste: 92, satiety: 40, convenience: 90, versatility: 15 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 1, lunch: 1, snack: 2, dinner: 1, beforeBed: 1 },
      timingNote: 'Desert de plăcere. Nu-l raționaliza — mănâncă-l conștient și mergi mai departe.',
      tags: ['ready-to-eat', 'high-kcal', 'frozen', 'processed', 'premium'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Cafea neagră', 'Fructe de pădure'],
      tips: [
        'Contrastul dur: o felie de 120 g = 384 kcal și 7 g proteină. Un pahar de budincă proteică = 165 kcal și 20 g.',
        'Versiunea de casă cu 500 g brânză de vaci degresată + 2 ouă + îndulcitor + gelatină, fără blat: 12 g proteină/100 g la 110 kcal.',
        '„Cheesecake proteic" din cofetărie e aproape întotdeauna cheesecake normal cu nume nou — cere valorile.'
      ],
      warnings: ['Conține gluten, lapte, ou.', '12 g grăsimi saturate/100 g — mai mult decât într-o ciocolată cu lapte.'],
      storage: 'Frigider 2–3 zile; congelat până la 3 luni.',
      shelfLife: '2–3 zile la frigider',
      dataConfidence: 'medium',
      sources: ['Valori tipice cheesecake', 'USDA cheesecake commercially prepared']
    },

    {
      id: 'b-lapte-praf-degresat',
      name: 'Skimmed Milk Powder',
      nameRo: 'Lapte praf degresat',
      brand: 'Bucovina / Covalact / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '⭐',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft ingrediente pentru copt, lângă lapte condensat și praf de copt', priceRon: 24.99, packGrams: 500, packLabel: 'pungă 500 g', note: 'CEA MAI IEFTINĂ PROTEINĂ DIN MAGAZIN' },
        { name: 'Selgros', availability: 'always', aisle: 'Raft ingrediente HoReCa, saci de 1–5 kg', priceRon: 44.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cel mai bun preț per kg din Sibiu' },
        { name: 'Metro', availability: 'always', aisle: 'Raft ingrediente profesionale', priceRon: 42.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Necesită card Metro' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft cofetărie / bio', priceRon: 29.9, packGrams: 400, packLabel: 'cutie 400 g', note: 'Mai scump' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de ingrediente / apicole', priceRon: 39, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Uneori 38% proteină' }
      ],
      sibiuNote: 'Selgros de pe Calea Șurii Mici are punga de 1 kg la ~45 lei — asta înseamnă 360 g de proteină de calitate pentru mai puțin decât costă un baton proteic pe săptămână. Kaufland Alba Iulia îl ține pe raftul de cofetărie, nu la lactate; mulți nu-l găsesc din cauza asta.',
      per100g: { kcal: 354, protein: 36, carbs: 52, sugars: 52, fat: 1, satFat: 0.6, fiber: 0, salt: 1.2 },
      micros: { calciumMg: 1250, b12Ug: 4, potassiumMg: 1700, zincMg: 4, cholesterolMg: 20 },
      serving: { grams: 25, label: '2 linguri rase (25 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['lingură', 'shaker sau tel'],
        steps: [
          'Măsoară 25–30 g (2 linguri rase).',
          'Amestecă întâi cu puțin lichid rece până devine pastă, apoi diluează.',
          'Sau adaugă direct în iaurt, terci, clătite, ciocolată caldă.'
        ],
        yieldNote: '100 g pudră + 900 ml apă = 1 l de lapte degresat reconstituit'
      },
      taste: {
        profile: 'Lăptos-dulceag, curat, ușor caramelizat — gustul laptelui concentrat',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Pudră fină care face cocoloașe dacă o arunci în lichid cald',
        notes: 'Nu are nimic din gustul chimic al suplimentelor. E pur și simplu lapte fără apă și fără grăsime.'
      },
      stats: { taste: 62, satiety: 70, convenience: 92, versatility: 96 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 4, snack: 5, dinner: 4, beforeBed: 5 },
      timingNote: 'Se poate adăuga la orice, oricând. Cazeina din el încetinește digestia — foarte bun seara.',
      tags: ['very-high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'calcium-rich', 'b12', 'complete-protein', 'slow-digesting', 'meal-prep'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Fulgi de ovăz', 'Cacao neîndulcită', 'Cafea', 'Clătite', 'Orez cu lapte'],
      tips: [
        'CALCULUL CARE SCHIMBĂ TOTUL: 45 lei/kg ÷ 360 g proteină × 100 = ~12,5 lei per 100 g proteină. Whey-ul e la 20–30 lei. Pieptul de pui la ~16 lei. Batoanele proteice la 150 lei. Laptele praf degresat câștigă detașat.',
        'Proteina e completă (cazeină + zer, scor DIAAS ~1,1) — la fel de bună ca a suplimentelor, nu e „proteină de umplutură".',
        'Amestecă-l ÎNTÂI cu lichid rece. Aruncat în lapte cald face cocoloașe pe care nu le mai scoți.',
        '30 g în 250 g iaurt grecesc = +10,8 g proteină pentru 1,35 lei și 106 kcal. Nimic din supermarket nu bate asta.',
        'Are 52 g lactoză/100 g — dacă ești intolerant, e singurul lui defect real și e serios.'
      ],
      warnings: ['Conține lactoză în concentrație mare — NU e potrivit pentru intoleranți.', 'Nu confunda cu laptele praf integral (26 g grăsime) sau cu formula pentru sugari (mult mai scumpă și mai slabă proteic).'],
      storage: 'Recipient etanș, loc uscat și întunecos; absoarbe umiditatea și se aglomerează.',
      shelfLife: '~12–18 luni sigilat, 3 luni după deschidere',
      dataConfidence: 'high',
      sources: ['Eticheta Bucovina lapte praf degresat', 'USDA nonfat dry milk', 'bucovina-sa.ro']
    },

    {
      id: 'b-albus-praf',
      name: 'Egg White Powder',
      nameRo: 'Albuș de ou praf',
      brand: 'Ostrovit / Ovopan / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🥚',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, emag, magazine de cofetărie', priceRon: 89, packGrams: 500, packLabel: 'pungă 500 g', note: 'Cea mai bună variantă' },
        { name: 'Metro', availability: 'occasional', aisle: 'Raft ingrediente cofetărie profesională', priceRon: 95, packGrams: 500, packLabel: 'pungă 500 g', note: 'Necesită card Metro' },
        { name: 'Decathlon', availability: 'occasional', aisle: 'Nutriție sportivă', priceRon: 119, packGrams: 500, packLabel: 'cutie 500 g', note: '' }
      ],
      sibiuNote: 'Nu îl găsești în supermarketurile din Sibiu. Comandă online sau ia albuș lichid la cutie de la Kaufland (mai comod, dar necesită frigider).',
      per100g: { kcal: 380, protein: 82, carbs: 7, sugars: 6, fat: 0.5, satFat: 0.1, fiber: 0, salt: 3.5 },
      micros: { potassiumMg: 1100, b12Ug: 0.1 },
      serving: { grams: 15, label: '1 lingură (15 g) = ~2 albușuri' },
      effort: 1,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'blend',
        difficulty: 'easy',
        equipment: ['tel sau mixer', 'bol'],
        steps: [
          'Amestecă 15 g pudră cu 90 ml apă călduță.',
          'Bate cu telul până dispar cocoloașele; lasă 5 minute să se hidrateze.',
          'Folosește ca albuș lichid — în omletă, terci, clătite, bezele.'
        ],
        yieldNote: '15 g pudră + 90 ml apă = ~2 albușuri proaspete'
      },
      taste: {
        profile: 'Aproape neutru; ușor sulfuros dacă e prea concentrat',
        intensity: 1,
        sweetness: 0,
        saltiness: 2,
        umami: 1,
        richness: 0,
        texture: 'Pudră fină; hidratată devine identică cu albușul lichid',
        notes: 'Cel mai „curat" macro din tot fișierul: 82 g proteină, 0,5 g grăsime.'
      },
      stats: { taste: 35, satiety: 78, convenience: 70, versatility: 82 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 4, lunch: 4, snack: 4, dinner: 4, beforeBed: 4 },
      timingNote: 'Booster universal pentru orice masă gătită — nu se simte în terci sau clătite.',
      tags: ['very-high-protein', 'protein-dense', 'low-fat', 'low-carb', 'cheap-protein', 'shelf-stable', 'complete-protein', 'bulk-buy', 'cutting', 'meal-prep'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Fulgi de ovăz', 'Clătite proteice', 'Omletă', 'Cacao'],
      tips: [
        'Cost per 100 g proteină: 89 lei ÷ 410 g proteină × 100 = ~22 lei. Al doilea cel mai bun din categorie, după laptele praf.',
        'Singura proteină „completă" fără lactoză și fără grăsime — soluția pentru intoleranți care nu vor whey.',
        'Nu-l pune direct în lichid fierbinte: coagulează instant. Hidratează rece, apoi gătește.',
        'Sarea de 3,5 g/100 g pare mare, dar la 15 g pe porție înseamnă doar 0,5 g.'
      ],
      warnings: ['Alergen: ou.', 'Albușul crud reconstituit trebuie gătit — pudra e pasteurizată, dar textura crudă e neplăcută oricum.'],
      storage: 'Recipient etanș, loc uscat.',
      shelfLife: '~18 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Ostrovit Egg White Powder', 'USDA egg white, dried']
    },

    {
      id: 'b-gluten-grau-vital',
      name: 'Vital Wheat Gluten (seitan flour)',
      nameRo: 'Gluten de grâu vital (făină de seitan)',
      brand: 'generic (magazine bio / online)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'Magazine bio online, emag', priceRon: 34.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cea mai ieftină proteină pe gram din tot magazinul' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio / făinuri speciale', priceRon: 16.99, packGrams: 400, packLabel: 'pungă 400 g', note: 'Apare neregulat' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 19.99, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Magazinele bio din centrul Sibiului (zona Nicolae Bălcescu) îl au sporadic la gramaj. Online e mult mai sigur și mai ieftin.',
      per100g: { kcal: 370, protein: 75, carbs: 12, sugars: 0.5, fat: 1.5, satFat: 0.2, fiber: 2, salt: 0.1 },
      micros: { ironMg: 5, potassiumMg: 100 },
      serving: { grams: 50, label: '50 g pudră = ~120 g seitan gata' },
      effort: 3,
      timeMin: 45,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['bol', 'cratiță mare', 'folie de aluminiu'],
        steps: [
          'Amestecă 150 g gluten cu 20 g drojdie inactivă, condimente și 150 ml supă de legume.',
          'Frământă 3 minute până devine elastic ca o gumă.',
          'Formează un baton, învelește lejer în folie de aluminiu.',
          'Fierbe la foc mic 40 de minute în supă.',
          'Răcește, feliază, prăjește în tigaie înainte de servit.'
        ],
        yieldNote: '150 g gluten = ~400 g seitan gata'
      },
      taste: {
        profile: 'Neutru-cerealier crud; devine sărat-umami după fierbere în supă condimentată',
        intensity: 2,
        sweetness: 0,
        saltiness: 2,
        umami: 3,
        richness: 1,
        texture: 'Extrem de elastică, fibroasă — cea mai apropiată de carne dintre proteinele vegetale',
        notes: 'Preț absurd de bun. Dar e sărac în lizină, deci nu-l folosi ca singură sursă de proteină.'
      },
      stats: { taste: 45, satiety: 74, convenience: 30, versatility: 70 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Bază de prânz sau cină pentru vegetarieni — combină-l cu leguminoase ca să completezi aminoacizii.',
      tags: ['very-high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'batch-cook', 'meal-prep'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Drojdie inactivă', 'Usturoi', 'Fasole / linte (pentru lizină)'],
      tips: [
        'Cost per 100 g proteină: 34,90 lei ÷ 750 g proteină × 100 = ~4,7 lei. E cea mai ieftină proteină din întreaga bază de date.',
        'DAR: scorul DIAAS al glutenului e ~0,25–0,45 (foarte sărac în lizină). Nu îl socoti 1:1 cu carnea sau laptele.',
        'Adaugă 1 lingură în aluatul de pâine de casă: crește proteina și dă miez elastic, ca la brutărie.',
        'Absolut interzis pentru celiaci — e gluten pur, în concentrație maximă.'
      ],
      warnings: ['GLUTEN PUR — periculos pentru celiaci și sensibilitate la gluten.', 'Proteină incompletă (lizină scăzută) — nu o folosi ca sursă unică.'],
      storage: 'Recipient etanș, loc uscat.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['USDA vital wheat gluten', 'etichete produse bio RO']
    },

    {
      id: 'b-colagen-pudra',
      name: 'Collagen Peptides Powder',
      nameRo: 'Colagen hidrolizat pudră',
      brand: 'Ostrovit / Zenyth / Farmacie',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '💊',
      unit: 'g',
      stores: [
        { name: 'Farmacie', availability: 'always', aisle: 'Raft suplimente articulații — Catena, Dona, Help Net din Sibiu', priceRon: 119, packGrams: 300, packLabel: 'cutie 300 g', note: 'Cel mai scump loc' },
        { name: 'Online RO', availability: 'online', aisle: 'nutriland.ro, emag, iherb.ro', priceRon: 79, packGrams: 500, packLabel: 'pungă 500 g', note: 'Ostrovit, cel mai bun raport' },
        { name: 'Decathlon', availability: 'occasional', aisle: 'Nutriție sportivă', priceRon: 99, packGrams: 300, packLabel: 'cutie 300 g', note: '' }
      ],
      sibiuNote: 'Farmaciile din Sibiu îl vând la preț dublu față de online. Există și apă cu colagen la sticlă (Carrefour, ~9 lei/500 ml, 5 g colagen) — cel mai prost raport preț/proteină din tot fișierul.',
      per100g: { kcal: 350, protein: 88, carbs: 0, sugars: 0, fat: 0, satFat: 0, fiber: 0, salt: 0.3 },
      serving: { grams: 10, label: '1 măsură (10 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['lingură'],
        steps: [
          'Amestecă 10 g în cafea, apă sau iaurt.',
          'Se dizolvă și în lichid fierbinte, spre deosebire de whey.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Practic fără gust; o urmă foarte slabă de bulion la concentrații mari',
        intensity: 1,
        sweetness: 0,
        saltiness: 0,
        umami: 1,
        richness: 0,
        texture: 'Pudră fină, se dizolvă complet fără cocoloașe',
        notes: 'Marele avantaj practic: se dizolvă în cafea fierbinte fără să se brânzească.'
      },
      stats: { taste: 50, satiety: 30, convenience: 92, versatility: 65 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 3, dinner: 3, beforeBed: 3 },
      timingNote: 'Se ia oricând; pentru tendoane, studiile sugerează 30–60 min înainte de efort, cu vitamina C.',
      tags: ['very-high-protein', 'protein-dense', 'low-fat', 'low-carb', 'shelf-stable', 'premium', 'processed'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Cafea', 'Vitamina C', 'Iaurt', 'Supă'],
      tips: [
        'ONESTITATE: colagenul e proteină INCOMPLETĂ — nu are triptofan și e sărac în aminoacizi esențiali. Nu îl socoti la aportul zilnic de proteină pentru mușchi.',
        'Are sens pentru tendoane, ligamente și piele, nu pentru hipertrofie. Pentru mușchi, whey-ul sau laptele praf sunt net superioare și mai ieftine.',
        'Ia-l cu vitamina C — sinteza de colagen o cere obligatoriu.',
        'Apa cu colagen din raft (5 g la sticlă, 9 lei) costă ~180 lei per 100 g proteină incompletă. Evită.'
      ],
      warnings: ['Proteină incompletă — fără triptofan.', 'De origine bovină sau porcină; verifică sursa pentru restricții religioase.', 'Nu e vegetarian.'],
      storage: 'Recipient etanș, loc uscat.',
      shelfLife: '~24 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Ostrovit Collagen', 'USDA gelatin/collagen hydrolysate']
    },

    {
      id: 'b-drojdie-inactiva',
      name: 'Nutritional Yeast',
      nameRo: 'Drojdie inactivă (fulgi nutriționali)',
      brand: 'generic (magazine bio)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🧀',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'Magazine bio online, emag', priceRon: 29.9, packGrams: 250, packLabel: 'pungă 250 g', note: 'Verifică dacă e fortificată cu B12' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio / vegan', priceRon: 24.99, packGrams: 150, packLabel: 'cutie 150 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 27.9, packGrams: 150, packLabel: 'cutie 150 g', note: '' }
      ],
      sibiuNote: 'Magazinele bio din zona centrului (Nicolae Bălcescu, Piața Mică) o au constant la gramaj. În hipermarketuri apare doar la raftul vegan.',
      per100g: { kcal: 380, protein: 45, carbs: 20, sugars: 2, fat: 6, satFat: 1, fiber: 22, salt: 0.15 },
      micros: { b12Ug: 40, ironMg: 5, zincMg: 8, potassiumMg: 2000 },
      serving: { grams: 10, label: '2 linguri (10 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Intens umami, brânzos-nucos, ca un parmezan vegetal',
        intensity: 4,
        sweetness: 0,
        saltiness: 1,
        umami: 5,
        richness: 2,
        texture: 'Fulgi ușori care se topesc pe mâncarea caldă',
        notes: 'Cel mai bun truc de gust pentru mâncare vegană. 45 g proteină/100 g, dar porția e doar 10 g.'
      },
      stats: { taste: 68, satiety: 40, convenience: 90, versatility: 78 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Condiment, nu masă. Se presară la final, peste mâncarea caldă.',
      tags: ['very-high-protein', 'high-fiber', 'b12', 'iron-rich', 'shelf-stable', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Paste', 'Popcorn', 'Supă', 'Seitan', 'Cartofi copți'],
      tips: [
        'Nu e sursă de proteină — 10 g dau 4,5 g. E sursă de UMAMI și, dacă e fortificată, de B12 (o lingură acoperă doza zilnică).',
        'Verifică pe etichetă „fortificată cu B12" — nu toate sunt. Pentru vegani e diferența dintre util și inutil.',
        'Presărată peste popcorn cu puțin ulei de măsline: cea mai bună gustare sărată sub 150 kcal.'
      ],
      warnings: ['Conține purine — atenție la gută.', 'Nu confunda cu drojdia de bere activă (pentru copt).'],
      storage: 'Recipient etanș, ferit de lumină.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['USDA nutritional yeast', 'etichete produse bio RO']
    },

    {
      id: 'b-sos-de-soia',
      name: 'Soy Sauce',
      nameRo: 'Sos de soia',
      brand: 'Kikkoman / Vitasia (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🥢',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft asiatic Vitasia', priceRon: 7.99, packGrams: 250, packLabel: 'sticlă 250 ml', note: 'Cel mai ieftin' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft internațional / asiatic', priceRon: 15.99, packGrams: 250, packLabel: 'sticlă 250 ml Kikkoman', note: 'Calitate net superioară' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft asiatic', priceRon: 14.9, packGrams: 250, packLabel: 'sticlă 250 ml', note: '' }
      ],
      sibiuNote: 'Kaufland Alba Iulia are cel mai bun raft asiatic din Sibiu, inclusiv Kikkoman fermentat natural (nu hidrolizat chimic).',
      per100g: { kcal: 60, protein: 8, carbs: 6, sugars: 2, fat: 0.1, satFat: 0, fiber: 0.5, salt: 16.5 },
      micros: { potassiumMg: 210, ironMg: 1.5 },
      serving: { grams: 10, label: '2 lingurițe (10 ml)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat intens, umami adânc, ușor dulceag și fermentat',
        intensity: 5,
        sweetness: 1,
        saltiness: 5,
        umami: 5,
        richness: 1,
        texture: 'Lichid subțire, ușor sirupos',
        notes: 'Transformă pieptul de pui fiert în mâncare. Nutrițional e sare, nu proteină.'
      },
      stats: { taste: 72, satiety: 10, convenience: 96, versatility: 88 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Condiment de prânz și cină. Nu contează caloric, contează la sodiu.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-sodium', 'low-kcal', 'budget', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Piept de pui', 'Tofu', 'Orez', 'Ouă', 'Seitan'],
      tips: [
        'Cei 8 g proteină/100 ml sunt înșelători: nimeni nu bea 100 ml de sos de soia. 10 ml = 0,8 g proteină și 1,65 g sare.',
        'Varianta „low sodium" are cu 40% mai puțină sare și aproape același gust — merită diferența de preț.',
        'Sosul de soia clasic conține grâu (deci gluten). Tamari e alternativa fără gluten.'
      ],
      warnings: ['SARE FOARTE MARE: 16,5 g/100 ml. O lingură = 2,5 g sare, adică jumătate din doza zilnică recomandată.', 'Conține soia și de obicei grâu (gluten).'],
      storage: 'Loc răcoros; după deschidere, frigider pentru aromă mai bună.',
      shelfLife: '~24 luni',
      dataConfidence: 'high',
      sources: ['Eticheta Kikkoman', 'USDA soy sauce']
    },

    {
      id: 'b-tahini',
      name: 'Tahini (sesame paste)',
      nameRo: 'Tahini (pastă de susan)',
      brand: 'generic (Lidl, magazine orientale)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🫙',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Raft internațional / orientale, campanii tematice', priceRon: 14.99, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio / orientale', priceRon: 22.99, packGrams: 350, packLabel: 'borcan 350 g', note: '' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine bio / orientale', priceRon: 29.9, packGrams: 500, packLabel: 'borcan 500 g', note: '' }
      ],
      sibiuNote: 'Lidl îl aduce în campaniile grecești/orientale (de câteva ori pe an). Kaufland Alba Iulia îl are constant la raftul bio.',
      per100g: { kcal: 595, protein: 17, carbs: 10, sugars: 0.5, fat: 54, satFat: 7.6, fiber: 9, salt: 0.05 },
      micros: { calciumMg: 420, ironMg: 8.9, zincMg: 4.6, potassiumMg: 410 },
      serving: { grams: 15, label: '1 lingură (15 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Nucos-amărui, intens, cu gust profund de susan prăjit',
        intensity: 4,
        sweetness: 0,
        saltiness: 0,
        umami: 2,
        richness: 5,
        texture: 'Densă, uleioasă; se întărește la fundul borcanului',
        notes: 'Nu se mănâncă singur. E ingredient, nu produs. Extrem de bogat în calciu și fier.'
      },
      stats: { taste: 52, satiety: 55, convenience: 82, versatility: 72 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 2, dinner: 3, beforeBed: 2 },
      timingNote: 'Condiment gras — o lingură pe salată sau în humus, nu mai mult.',
      tags: ['high-protein', 'high-kcal', 'high-fiber', 'calcium-rich', 'iron-rich', 'shelf-stable', 'whole-food', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Humus', 'Salată de vinete', 'Lămâie și usturoi', 'Iaurt grecesc'],
      tips: [
        '17 g proteină/100 g sună bine, dar o lingură (15 g) dă 2,5 g proteină și 89 kcal. Raport slab.',
        'Sosul de tahini (2 linguri tahini + zeamă de lămâie + apă + usturoi) e cel mai bun dressing pentru salată cu pui.',
        'Cel mai mare aport de calciu din categorie: 420 mg/100 g, comparabil cu brânza.'
      ],
      warnings: ['Alergen: susan.', 'Foarte caloric — 595 kcal/100 g.'],
      storage: 'Loc răcoros; după deschidere, frigider. Amestecă înainte de folosire.',
      shelfLife: '~12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['USDA sesame butter, tahini', 'etichete Lidl']
    },

    {
      id: 'b-humus',
      name: 'Hummus',
      nameRo: 'Humus (pastă de năut)',
      brand: 'Eridanous (Lidl) / Kaufland',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🧆',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft lactate refrigerate, lângă tzatziki și olive', priceRon: 7.49, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat delicatese', priceRon: 8.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft refrigerat / salate', priceRon: 9.49, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft refrigerat', priceRon: 9.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' }
      ],
      sibiuNote: 'Lidl are cel mai bun preț și cea mai bună rețetă (Eridanous). Făcut acasă din năut la conservă costă 4 lei pentru 400 g.',
      per100g: { kcal: 170, protein: 7.5, carbs: 12, sugars: 1, fat: 9.5, satFat: 1.3, fiber: 5, salt: 1.1 },
      micros: { ironMg: 2.4, calciumMg: 60, potassiumMg: 280 },
      serving: { grams: 50, label: '3 linguri (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cremos, cu năut, tahini, usturoi și lămâie — sărat-acrișor echilibrat',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Pastă fină, catifelată',
        notes: 'Cea mai bună tartinabilă din raftul rece. Dar 7,5 g proteină/100 g nu e „bogat în proteine".'
      },
      stats: { taste: 80, satiety: 58, convenience: 96, versatility: 82 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 2, lunch: 4, snack: 4, dinner: 3, beforeBed: 2 },
      timingNote: 'Gustare de birou cu morcovi și crackers, sau bază de wrap.',
      tags: ['ready-to-eat', 'high-fiber', 'portable', 'office-lunch', 'whole-food', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lipie integrală', 'Morcovi', 'Crackers integrali', 'Ou fiert', 'Piept de pui'],
      tips: [
        'De casă: 1 conservă năut scurs (240 g) + 2 linguri tahini + lămâie + usturoi + 3 linguri apă. 4 lei pentru 350 g.',
        'Adaugă 2 linguri de iaurt grecesc în humusul de casă: mai cremos, mai puțină grăsime, +2 g proteină/100 g.',
        'Variantele „light" din comerț taie tahini-ul și devin practic piure de năut apos — verifică lista.'
      ],
      warnings: ['Conține susan (tahini).', 'Sare 1,1 g/100 g în variantele comerciale.'],
      storage: 'Frigider 2–6 °C; consumă în 3 zile după deschidere.',
      shelfLife: '~3 săptămâni sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta Eridanous humus', 'USDA hummus, commercial']
    },

    {
      id: 'b-tzatziki',
      name: 'Tzatziki',
      nameRo: 'Tzatziki (sos de iaurt cu castraveți)',
      brand: 'Eridanous (Lidl) / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🥒',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat, lângă humus și olive', priceRon: 7.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat delicatese', priceRon: 8.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft salate refrigerate', priceRon: 10.9, packGrams: 200, packLabel: 'caserolă 200 g', note: '' }
      ],
      sibiuNote: 'Eridanous de la Lidl e cel mai bun raport calitate/preț. Varianta de casă cu iaurt grecesc 0% e superioară nutrițional cu mult.',
      per100g: { kcal: 120, protein: 4.5, carbs: 4, sugars: 3, fat: 9, satFat: 5, fiber: 0.4, salt: 0.9 },
      micros: { calciumMg: 80, b12Ug: 0.2 },
      serving: { grams: 50, label: '3 linguri (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Răcoritor, acrișor, cu usturoi puternic și mărar',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Cremos cu bucăți crocante de castravete',
        notes: 'Gust excelent, dar din comerț e făcut cu iaurt gras — 9 g grăsime la 4,5 g proteină.'
      },
      stats: { taste: 82, satiety: 42, convenience: 96, versatility: 78 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: 'Sos de prânz și cină — merge cu orice carne la grătar.',
      tags: ['ready-to-eat', 'portable', 'summer', 'calcium-rich', 'low-carb', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: true, halal: true, porkFree: true },
      pairings: ['Pui la grătar', 'Lipie integrală', 'Legume crude', 'Cartofi copți'],
      tips: [
        'HACK de casă: 200 g iaurt grecesc 0% + 1 castravete ras și stors + 2 căței usturoi + mărar + sare. Rezultat: 9 g proteină/100 g și 60 kcal, în loc de 4,5 g și 120 kcal.',
        'Stoarce castravetele într-un tifon — altfel sosul devine apă în 2 ore.',
        'Din comerț e practic maioneză de iaurt: verifică dacă primul ingredient e iaurt sau ulei.'
      ],
      warnings: ['Conține lactoză.'],
      storage: 'Frigider 2–6 °C; 3 zile după deschidere.',
      shelfLife: '~2 săptămâni sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta Eridanous tzatziki', 'CIQUAL tzatziki']
    },

    {
      id: 'b-pesto-verde',
      name: 'Basil Pesto',
      nameRo: 'Pesto verde (busuioc)',
      brand: 'Barilla / Combino (Lidl)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🌿',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft italian Combino, lângă paste', priceRon: 8.99, packGrams: 190, packLabel: 'borcan 190 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft italian / sosuri paste', priceRon: 14.99, packGrams: 190, packLabel: 'borcan 190 g Barilla', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft sosuri paste', priceRon: 13.49, packGrams: 190, packLabel: 'borcan 190 g', note: '' }
      ],
      sibiuNote: 'Combino de la Lidl e onest ca gust la jumătate de preț față de Barilla. Pentru varianta bună, magazinele italiene mici din centru au pesto proaspăt.',
      per100g: { kcal: 460, protein: 6, carbs: 6, sugars: 2, fat: 46, satFat: 8, fiber: 2, salt: 2.2 },
      micros: { calciumMg: 180, ironMg: 1.5 },
      serving: { grams: 25, label: '1 lingură plină (25 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['lingură'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Intens de busuioc, cu parmezan sărat și usturoi',
        intensity: 5,
        sweetness: 0,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Pastă uleioasă, granulată',
        notes: 'Cel mai rapid mod de a face pieptul de pui interesant. Nutrițional e ulei aromat.'
      },
      stats: { taste: 84, satiety: 25, convenience: 94, versatility: 76 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'O lingură peste pui sau paste. Nu mai mult — 115 kcal pe lingură.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'shelf-stable', 'processed', 'mid-price'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: true, halal: true, porkFree: true },
      pairings: ['Piept de pui', 'Paste integrale', 'Roșii cherry', 'Mozzarella'],
      tips: [
        '46 g grăsime/100 g. O „lingură generoasă" de pesto poate adăuga 150 kcal fără să observi.',
        'Diluează cu 2 linguri de iaurt grecesc: obții același gust cu jumătate de calorii și +3 g proteină.',
        'Verifică ingredientele: multe pesto ieftine au ulei de floarea-soarelui și caju în loc de ulei de măsline și pin.'
      ],
      warnings: ['Conține lapte (parmezan) și adesea nuci/caju.', 'Sare 2,2 g/100 g.'],
      storage: 'Frigider după deschidere, acoperit cu un strat de ulei; 7 zile.',
      shelfLife: '~12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta Barilla Pesto Genovese', 'CIQUAL pesto']
    },

    {
      id: 'b-mustar',
      name: 'Mustard',
      nameRo: 'Muștar',
      brand: 'Univer / Develey / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🟡',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft sosuri și condimente', priceRon: 5.49, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft sosuri', priceRon: 4.99, packGrams: 300, packLabel: 'borcan 300 g', note: 'Cel mai ieftin' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft sosuri', priceRon: 6.49, packGrams: 300, packLabel: 'borcan 300 g', note: '' }
      ],
      sibiuNote: 'Peste tot. Cel mai bun condiment „gratuit" caloric din supermarket.',
      per100g: { kcal: 105, protein: 6, carbs: 6, sugars: 3, fat: 5, satFat: 0.4, fiber: 3, salt: 3.5 },
      micros: { calciumMg: 60, ironMg: 1.5 },
      serving: { grams: 10, label: '2 lingurițe (10 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Iute-acrișor, cu înțepătură în nas la varianta clasică',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 2,
        richness: 1,
        texture: 'Pastă fină sau cu boabe întregi',
        notes: 'Zece calorii pe linguriță, gust cât un sos întreg. Alegerea evidentă față de maioneză.'
      },
      stats: { taste: 66, satiety: 8, convenience: 98, versatility: 86 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Oricând ai nevoie să faci proteina slabă gustoasă fără calorii.',
      tags: ['ready-to-eat', 'low-kcal', 'low-carb', 'budget', 'shelf-stable', 'high-sodium', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Piept de pui', 'Ou fiert', 'Sandviș cu curcan', 'Marinade'],
      tips: [
        'Cel mai bun schimb caloric din supermarket: 1 lingură muștar = 10 kcal, 1 lingură maioneză = 100 kcal. Același rol.',
        'Marinadă în 30 de secunde: 2 linguri muștar + zeamă de lămâie + usturoi + boia. Peste piept de pui, 20 de minute.',
        'Muștarul „dulce" are 15–20 g zahăr/100 g. Cel clasic are 3.'
      ],
      warnings: ['SARE MARE: 3,5 g/100 g — dar porția e mică (10 g = 0,35 g sare).', 'Muștarul e alergen declarabil în UE.'],
      storage: 'Frigider după deschidere; rezistă luni.',
      shelfLife: '~18 luni sigilat',
      dataConfidence: 'medium',
      sources: ['USDA mustard, prepared', 'etichete RO']
    },

    {
      id: 'b-maioneza',
      name: 'Mayonnaise (honest contrast)',
      nameRo: 'Maioneză',
      brand: 'Hellmann\'s / Calve / generic',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🥄',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft sosuri', priceRon: 8.99, packGrams: 400, packLabel: 'borcan 400 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft sosuri', priceRon: 13.99, packGrams: 400, packLabel: 'borcan 400 g', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft sosuri', priceRon: 9.49, packGrams: 400, packLabel: 'borcan 400 g', note: '' }
      ],
      sibiuNote: 'Peste tot. E în bază exclusiv ca reper caloric: e cel mai eficient mod de a strica o masă proteică bună.',
      per100g: { kcal: 680, protein: 1, carbs: 2, sugars: 1.5, fat: 74, satFat: 6, fiber: 0, salt: 1.2 },
      micros: { cholesterolMg: 40 },
      serving: { grams: 15, label: '1 lingură (15 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Gras, cremos, ușor acrișor de la oțet și muștar',
        intensity: 3,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 5,
        texture: 'Onctuoasă, acoperă gura',
        notes: 'Face orice mai bun. Și orice mult mai caloric. 1 g proteină la 680 kcal.'
      },
      stats: { taste: 86, satiety: 15, convenience: 98, versatility: 70 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 1, lunch: 2, snack: 1, dinner: 2, beforeBed: 1 },
      timingNote: 'Fără rol nutrițional. Doar plăcere, cu preț caloric mare.',
      tags: ['ready-to-eat', 'high-kcal', 'shelf-stable', 'processed', 'budget'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Salată de boeuf', 'Cartofi', 'Ton'],
      tips: [
        'Înlocuirea clasică: iaurt grecesc 0% în loc de maioneză în salata de ton sau de pui. De la 680 la 60 kcal/100 g și de la 1 la 10 g proteină.',
        'Amestec 50/50 iaurt grecesc + maioneză: păstrezi gustul, tai jumătate din calorii. Compromisul care chiar ține.',
        '„Maioneza light" are 350 kcal/100 g — tot de 6 ori mai mult decât iaurtul grecesc.'
      ],
      warnings: ['Conține ou.', '74 g grăsime/100 g — cel mai caloric produs din tot fișierul.'],
      storage: 'Frigider după deschidere; 4–6 săptămâni.',
      shelfLife: '~9 luni sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Hellmann\'s', 'USDA mayonnaise']
    },

    {
      id: 'b-sriracha',
      name: 'Sriracha Chili Sauce',
      nameRo: 'Sos sriracha',
      brand: 'Vitasia (Lidl) / Flying Goose',
      category: 'bakery-drinks-sweets',
      subcategory: 'Condimente & boostere de proteină',
      emoji: '🌶',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft asiatic Vitasia', priceRon: 9.99, packGrams: 455, packLabel: 'sticlă 455 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft internațional', priceRon: 16.99, packGrams: 455, packLabel: 'sticlă 455 g', note: 'Flying Goose, mai iute' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft asiatic', priceRon: 15.9, packGrams: 455, packLabel: 'sticlă 455 g', note: '' }
      ],
      sibiuNote: 'Lidl-ul din Sibiu are Vitasia sriracha permanent, la jumătate din prețul mărcilor thailandeze.',
      per100g: { kcal: 93, protein: 1.9, carbs: 19, sugars: 15, fat: 0.9, satFat: 0.1, fiber: 1.5, salt: 6.2 },
      micros: { potassiumMg: 300 },
      serving: { grams: 10, label: '2 lingurițe (10 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Iute-dulceag, cu usturoi puternic și aciditate de oțet',
        intensity: 5,
        sweetness: 3,
        saltiness: 4,
        umami: 3,
        richness: 0,
        texture: 'Sos gros, lucios',
        notes: 'Salvează orice masă fadă de cutting. 9 kcal la o linguriță.'
      },
      stats: { taste: 78, satiety: 8, convenience: 98, versatility: 84 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Instrumentul principal împotriva plictiselii de piept de pui.',
      tags: ['ready-to-eat', 'low-kcal', 'low-fat', 'budget', 'shelf-stable', 'high-sodium', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ouă', 'Piept de pui', 'Orez', 'Iaurt grecesc (sos picant)', 'Ton'],
      tips: [
        'Sos picant proteic în 20 de secunde: 3 linguri iaurt grecesc + 1 linguriță sriracha. 60 kcal, 5 g proteină, gust de restaurant.',
        '15 g zahăr/100 g — dar la 10 g porție înseamnă 1,5 g. Irelevant.',
        'Sarea de 6,2 g/100 g e reală: dacă torni jumătate de sticlă pe săptămână, se adună.'
      ],
      warnings: ['Sare mare la 100 g, dar porția tipică e mică.', 'Iuțeală mare — atenție la reflux gastric.'],
      storage: 'Loc răcoros; după deschidere se poate ține și afară, dar frigiderul păstrează culoarea.',
      shelfLife: '~24 luni',
      dataConfidence: 'medium',
      sources: ['Eticheta Vitasia sriracha', 'USDA sriracha sauce']
    },

    {
      id: 'b-hack-iaurt-lapte-praf-cacao',
      name: 'HACK: Greek Yogurt + Milk Powder + Cocoa',
      nameRo: 'HACK: iaurt grecesc + lapte praf + cacao',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Iaurt grecesc — raft lactate; lapte praf — raft cofetărie; cacao — raft dulciuri', priceRon: 5.5, packGrams: 225, packLabel: 'ingrediente pentru 1 porție (225 g)', note: '200 g iaurt (3,2 lei) + 20 g lapte praf (1 leu) + 5 g cacao (0,4 lei)' },
        { name: 'Kaufland', availability: 'always', aisle: 'Aceleași trei rafturi', priceRon: 6.2, packGrams: 225, packLabel: 'ingrediente pentru 1 porție', note: '' }
      ],
      sibiuNote: 'Toate cele trei ingrediente sunt în orice Lidl sau Kaufland din Sibiu. Cumperi o dată punga de lapte praf și ai 20 de porții.',
      per100g: { kcal: 101, protein: 11.6, carbs: 8.5, sugars: 8, fat: 2.2, satFat: 1.4, fiber: 0.8, salt: 0.25 },
      micros: { calciumMg: 250, b12Ug: 0.8, potassiumMg: 380 },
      serving: { grams: 225, label: '1 bol întreg (225 g) = 26 g proteină' },
      effort: 1,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['bol', 'lingură'],
        steps: [
          'Pune 200 g iaurt grecesc 2% în bol.',
          'Presară 20 g lapte praf degresat și 5 g cacao neîndulcită deasupra.',
          'Amestecă energic 30 de secunde până dispar cocoloașele.',
          'Adaugă îndulcitor după gust.'
        ],
        yieldNote: '225 g total, 26 g proteină'
      },
      taste: {
        profile: 'Cremos, acrișor-cacao, ca o mousse de ciocolată densă și puțin acră',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 3,
        texture: 'Foarte densă și cremoasă — laptele praf o îngroașă vizibil',
        notes: 'Cel mai bun raport preț/proteină/gust din tot fișierul. 26 g proteină pentru 5,5 lei.'
      },
      stats: { taste: 76, satiety: 90, convenience: 88, versatility: 60 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 5, lunch: 3, snack: 5, dinner: 3, beforeBed: 5 },
      timingNote: 'Cazeină din iaurt plus cazeină din laptele praf: digestie lentă, ideal seara.',
      tags: ['no-cook', 'protein-dense', 'low-fat', 'cheap-protein', 'budget', 'calcium-rich', 'b12', 'complete-protein', 'slow-digesting', 'night-snack', 'post-workout'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Fructe de pădure congelate', 'Nuci', 'Scorțișoară', 'Fulgi de ovăz'],
      tips: [
        'MATEMATICA: 5,5 lei pentru 26 g proteină = ~21 lei per 100 g proteină, cu tot cu iaurt. Un baton proteic e la 150 lei.',
        'Presară laptele praf peste iaurt, nu invers, și amestecă imediat — altfel face cocoloașe.',
        'Cacao neîndulcită (Van Houten sau Dr. Oetker) are 20 g proteină/100 g și aproape zero zahăr. Nu folosi Nesquik.',
        'Cu iaurt grecesc 0% în loc de 2% cobori la 85 kcal/100 g fără să pierzi proteină.'
      ],
      warnings: ['Conține lactoză în cantitate mare (iaurt + lapte praf) — nu pentru intoleranți.'],
      storage: 'Se face pe loc; dacă îl prepari seara pentru dimineață, se îngroașă și mai mult.',
      shelfLife: '24 h la frigider',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: iaurt grecesc 2%, lapte praf degresat, cacao neîndulcită']
    },

    {
      id: 'b-hack-cafea-proteina',
      name: 'HACK: Protein Coffee',
      nameRo: 'HACK: cafea cu proteină (protein latte)',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '☕',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Lapte — raft lactate; cafea — raft cafea; whey — comandă online', priceRon: 5.8, packGrams: 275, packLabel: 'ingrediente pentru 1 cană (275 ml)', note: '200 ml lapte (1,1 lei) + 25 g whey (4,5 lei) + espresso' },
        { name: 'Online RO', availability: 'online', aisle: 'Whey pudră — nutriland.ro, highenergy.ro', priceRon: 180, packGrams: 1000, packLabel: 'whey 1 kg = 40 de cafele', note: '' }
      ],
      sibiuNote: 'Înlocuiește latte-ul de 16 lei din Piața Mică. Al tău are 27 g proteină și costă 5,8 lei.',
      per100g: { kcal: 70, protein: 9.8, carbs: 4.3, sugars: 3.5, fat: 1.6, satFat: 1, fiber: 0, salt: 0.2 },
      micros: { calciumMg: 190, b12Ug: 0.6 },
      serving: { grams: 275, label: '1 cană mare (275 ml) = 27 g proteină' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 3,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['shaker sau tel', 'espressor sau ibric', 'cană'],
        steps: [
          'Pune 25 g whey vanilie în shaker cu 200 ml lapte RECE și agită 15 secunde.',
          'Fă 50 ml espresso sau cafea tare.',
          'Toarnă cafeaua fierbinte peste amestecul rece, amestecând.',
          'Vara: toarnă totul peste gheață.'
        ],
        yieldNote: '275 ml, 27 g proteină'
      },
      taste: {
        profile: 'Cafea cu lapte dulceagă, cu aromă de vanilie și corp cremos',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Cremoasă, ușor spumoasă de la agitare',
        notes: 'Aproape imposibil de deosebit de un latte cu sirop, dar cu 27 g proteină.'
      },
      stats: { taste: 80, satiety: 68, convenience: 78, versatility: 45 },
      timing: { breakfast: 5, preWorkout: 5, postWorkout: 4, lunch: 3, snack: 4, dinner: 1, beforeBed: 0 },
      timingNote: 'Dimineața sau pre-antrenament. Cofeina după-amiaza îți fură somnul, deci și recuperarea.',
      tags: ['no-cook', 'protein-dense', 'low-fat', 'low-carb', 'breakfast', 'pre-workout', 'post-workout', 'calcium-rich', 'cheap-protein', 'cutting'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Gheață', 'Scorțișoară', 'Cacao', 'Îndulcitor lichid'],
      tips: [
        'REGULA DE AUR: whey-ul NU se pune în lichid fierbinte. Se coagulează instant în cocoloașe cauciucate. Întâi lapte rece, apoi cafea.',
        'Cu 30 g lapte praf degresat în loc de whey: 21 g proteină, cost 1,5 lei în loc de 5,8. Gust mai lăptos, mai puțin dulce.',
        'Un latte de cafenea din Sibiu costă 16 lei și are 8 g proteină. Al tău: 5,8 lei și 27 g. Diferența anuală: peste 3000 de lei.',
        'Varianta „iced": shaker cu gheață, lapte, whey și cafea rece — 20 de secunde, gata.'
      ],
      warnings: ['Conține lapte și lactoză.', 'Cofeina peste 400 mg/zi afectează somnul și recuperarea.'],
      storage: 'Se bea imediat; varianta rece rezistă 12 h la frigider.',
      shelfLife: '—',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: lapte 1,5%, whey concentrat 80%, espresso']
    },

    {
      id: 'b-hack-paine-proteica-branza-ou',
      name: 'HACK: Protein Bread + Cottage Cheese + Egg',
      nameRo: 'HACK: pâine proteică + brânză de vaci + ou',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '🍳',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Pâine proteică — raft pâine; brânză de vaci — raft lactate; ouă — raft ouă', priceRon: 7.2, packGrams: 215, packLabel: 'ingrediente pentru 1 porție (215 g)', note: '2 felii pâine (1,6 lei) + 100 g brânză (4 lei) + 1 ou (1,6 lei)' },
        { name: 'Kaufland', availability: 'always', aisle: 'Aceleași trei rafturi', priceRon: 7.9, packGrams: 215, packLabel: 'ingrediente pentru 1 porție', note: '' }
      ],
      sibiuNote: 'Dacă nu găsești pâine proteică la Lidl, folosește pâine de secară — pierzi 7 g proteină, dar rămâne o masă de 25 g.',
      per100g: { kcal: 140, protein: 14.9, carbs: 5, sugars: 1.5, fat: 5.8, satFat: 2, fiber: 2.2, salt: 0.6 },
      micros: { calciumMg: 130, ironMg: 2, b12Ug: 0.8, cholesterolMg: 190 },
      serving: { grams: 215, label: '1 farfurie (215 g) = 32 g proteină' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 4,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['cratiță mică', 'toaster', 'cuțit'],
        steps: [
          'Pune oul la fiert 8 minute (sau fă-l ochi în tigaie antiaderentă).',
          'Prăjește 2 felii de pâine proteică în toaster.',
          'Întinde 100 g brânză de vaci degresată pe felii.',
          'Taie oul deasupra, sare, piper, boia.'
        ],
        yieldNote: '215 g, 32 g proteină'
      },
      taste: {
        profile: 'Sărat-lăptos, cu pâine caldă crocantă și ou moale',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Contrast bun: crocant, cremos, moale',
        notes: 'Micul dejun sărat clasic, cu macro de shake proteic. 300 kcal, 32 g proteină.'
      },
      stats: { taste: 74, satiety: 92, convenience: 70, versatility: 55 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: 'Cel mai săturător mic dejun din fișier — fibra pâinii proteice plus cazeina din brânză țin 5 ore.',
      tags: ['protein-dense', 'high-fiber', 'low-carb', 'breakfast', 'office-lunch', 'cheap-protein', 'calcium-rich', 'b12', 'complete-protein', 'cutting'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Roșii', 'Castraveți', 'Muștar', 'Sriracha', 'Ridichi'],
      tips: [
        'Cost per 100 g proteină: 7,2 lei ÷ 32 g × 100 = ~22 lei. Și e o masă adevărată, nu o pudră.',
        'Brânza de vaci degresată (0,5%) are 13 g proteină/100 g. Cea „de casă" grasă are 9 g și 20 g grăsime — verifică.',
        'Fierbe 6 ouă duminica seara. Dimineața hack-ul se face în 3 minute în loc de 8.',
        'Cu 2 ouă în loc de 1: 39 g proteină, 380 kcal. Tot excelent.'
      ],
      warnings: ['Conține gluten, lapte, ou.'],
      storage: 'Se asamblează pe loc; brânza și oul fiert se pregătesc din timp.',
      shelfLife: '—',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: pâine proteică Lidl, brânză de vaci 0,5%, ou M']
    },

    {
      id: 'b-hack-tortilla-curcan-telemea',
      name: 'HACK: Tortilla + Turkey Ham + Telemea',
      nameRo: 'HACK: tortilla + șuncă de curcan + telemea',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '🌯',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Tortilla — raft mexican; șuncă de curcan — raft mezeluri; telemea — raft lactate', priceRon: 9.5, packGrams: 192, packLabel: 'ingrediente pentru 1 wrap (192 g)', note: '1 tortilla (2 lei) + 60 g curcan (4,5 lei) + 40 g telemea (3 lei)' },
        { name: 'Kaufland', availability: 'always', aisle: 'Aceleași trei rafturi', priceRon: 10.5, packGrams: 192, packLabel: 'ingrediente pentru 1 wrap', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Telemea de la producători locali', priceRon: 28, packGrams: 1000, packLabel: 'telemea de vacă, la kg', note: 'Mult mai bună decât cea ambalată' }
      ],
      sibiuNote: 'Telemeaua de la tarabele din Piața Cibin (sâmbăta) e mai puțin sărată și mai gustoasă. Ține-o în apă rece 30 de minute dacă e prea sărată.',
      per100g: { kcal: 186, protein: 14.4, carbs: 16.6, sugars: 2, fat: 6.7, satFat: 3.5, fiber: 1.5, salt: 1.6 },
      micros: { calciumMg: 180, b12Ug: 0.7, ironMg: 1.5 },
      serving: { grams: 192, label: '1 wrap întreg (192 g) = 28 g proteină' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 5,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['tigaie', 'cuțit', 'folie alimentară'],
        steps: [
          'Încălzește tortilla 20 de secunde pe fiecare parte în tigaie uscată.',
          'Pune șunca de curcan pe treimea de jos.',
          'Sfărâmă telemeaua deasupra, adaugă castraveți sau roșii.',
          'Rulează strâns, învelește în folie și taie oblic.'
        ],
        yieldNote: '192 g, 28 g proteină'
      },
      taste: {
        profile: 'Sărat, cu telemea acrișoară și curcan fumuriu, răcorit de legume',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Moale afară, cu brânză sfărâmicioasă și legume crocante',
        notes: 'Pachetul de birou perfect. Se face seara, rezistă până la prânz.'
      },
      stats: { taste: 84, satiety: 78, convenience: 82, versatility: 70 },
      timing: { breakfast: 4, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 4, dinner: 4, beforeBed: 2 },
      timingNote: 'Prânzul de birou care nu are nevoie de microunde și nu se strică în ghiozdan.',
      tags: ['no-cook', 'portable', 'office-lunch', 'meal-prep', 'grab-and-go', 'calcium-rich', 'b12', 'complete-protein', 'high-sodium'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Castraveți', 'Roșii cherry', 'Muștar', 'Salată verde', 'Iaurt grecesc cu usturoi'],
      tips: [
        'Cu tortilla proteică Lidl în loc de cea normală: 34 g proteină în loc de 28, la aceleași calorii.',
        'ATENȚIE la sare: telemea (2–3 g/100 g) + șuncă (2 g) + tortilla (1,3 g) = 3 g de sare pe wrap. Nu adăuga sare.',
        'Iaurt grecesc cu usturoi în loc de maioneză: +3 g proteină, −90 kcal.',
        'Cost per 100 g proteină: ~34 lei. Mai scump decât iaurtul cu lapte praf, dar e o masă sărată completă.'
      ],
      warnings: ['Conține gluten, lapte.', 'Sare mare: ~3 g pe porție, jumătate din doza zilnică.'],
      storage: 'Frigider, învelit în folie, 24 h.',
      shelfLife: '1 zi',
      dataConfidence: 'medium',
      sources: ['Calcul din etichete: tortilla integrală, șuncă de curcan, telemea de vacă']
    },

    {
      id: 'b-hack-ovaz-albus',
      name: 'HACK: Oats Cooked in Egg White',
      nameRo: 'HACK: terci de ovăz cu albuș',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '💪',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Ovăz — raft cereale; albuș lichid — raft ouă refrigerate sau raft lactate', priceRon: 6.4, packGrams: 510, packLabel: 'ingrediente pentru 1 porție mare (510 g)', note: '60 g ovăz (0,4 lei) + 200 ml albuș (5 lei) + 150 ml lapte (1 leu)' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Albuș lichid la cutie — raft ouă refrigerate', priceRon: 7.2, packGrams: 510, packLabel: 'ingrediente pentru 1 porție', note: 'Albușul la cutie apare neregulat' },
        { name: 'Metro', availability: 'always', aisle: 'Raft ouă lichide profesionale, bidoane 1 kg', priceRon: 22, packGrams: 1000, packLabel: 'albuș lichid 1 kg', note: 'Cel mai ieftin albuș din Sibiu' }
      ],
      sibiuNote: 'Albușul lichid la cutie e problema: Metro (card necesar) și uneori Kaufland Alba Iulia îl au. Alternativă: separă 6 albușuri din ouă normale — 4 lei și 4 minute.',
      per100g: { kcal: 77, protein: 6.9, carbs: 8.5, sugars: 1.6, fat: 1.3, satFat: 0.4, fiber: 1.2, salt: 0.35 },
      micros: { ironMg: 2.8, calciumMg: 90, potassiumMg: 380, zincMg: 1.9 },
      serving: { grams: 510, label: '1 bol mare (510 g) = 35 g proteină' },
      effort: 2,
      timeMin: 8,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['cratiță', 'tel sau furculiță'],
        steps: [
          'Fierbe 60 g fulgi de ovăz cu 150 ml lapte, 4 minute, amestecând.',
          'Ia cratița de pe foc și lasă 60 de secunde să scadă temperatura.',
          'Toarnă 200 ml albuș lichid în fir subțire, amestecând ENERGIC și continuu.',
          'Pune înapoi pe foc mic 90 de secunde, fără să oprești amestecatul.',
          'Adaugă scorțișoară, îndulcitor, cacao.'
        ],
        yieldNote: '60 g ovăz uscat + lichide = ~510 g terci'
      },
      taste: {
        profile: 'Neutru-cerealier, cremos, cu o notă foarte discretă de ou',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 1,
        richness: 1,
        texture: 'Foarte cremoasă și pufoasă — albușul o triplează în volum',
        notes: 'Un bol enorm de 400 kcal cu 35 g proteină. Cel mai săturător mic dejun posibil.'
      },
      stats: { taste: 62, satiety: 98, convenience: 55, versatility: 65 },
      timing: { breakfast: 5, preWorkout: 5, postWorkout: 5, lunch: 4, snack: 3, dinner: 3, beforeBed: 3 },
      timingNote: 'Micul dejun de referință pentru cine se antrenează: carbohidrat lent plus 35 g proteină completă.',
      tags: ['high-fiber', 'low-fat', 'cheap-protein', 'budget', 'complete-protein', 'slow-digesting', 'breakfast', 'pre-workout', 'post-workout', 'whole-food'],
      diet: { vegan: false, vegetarian: true, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Scorțișoară', 'Cacao neîndulcită', 'Fructe de pădure congelate', 'Pastă de arahide (1 linguriță)'],
      tips: [
        'TEHNICA E TOTUL: albușul se toarnă DUPĂ ce ai luat cratița de pe foc și se amestecă fără oprire. Altfel obții ovăz cu bucăți de omletă.',
        'Cost per 100 g proteină: 6,4 lei ÷ 35 g × 100 = ~18 lei. Cu albuș de la Metro coboară sub 13 lei.',
        'Volumul e argumentul real: 510 g de mâncare pentru 400 kcal. Nimic nu te satură mai mult pe calorie.',
        'Dacă nu găsești albuș lichid: 6 albușuri din ouă M dau exact 200 ml. Gălbenușurile se folosesc la o omletă altă dată.',
        'Cu 20 g lapte praf degresat adăugat la final: 42 g proteină, +71 kcal.'
      ],
      warnings: ['Conține ou și lactoză (dacă folosești lapte).', 'Ovăzul poate avea urme de gluten.'],
      storage: 'Se mănâncă pe loc; la frigider se întărește în cărămidă.',
      shelfLife: '24 h la frigider (se rehidratează cu puțin lapte)',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: fulgi de ovăz, albuș lichid pasteurizat, lapte 1,5%']
    },

    {
      id: 'b-hack-lapte-super-proteic',
      name: 'HACK: Super-Protein Milk',
      nameRo: 'HACK: lapte super-proteic (lapte + lapte praf)',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '🥛',
      unit: 'ml',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Lapte — raft lactate; lapte praf degresat — raft ingrediente cofetărie', priceRon: 2.9, packGrams: 280, packLabel: 'ingrediente pentru 1 pahar (280 ml)', note: '250 ml lapte (1,4 lei) + 30 g lapte praf (1,5 lei)' },
        { name: 'Selgros', availability: 'always', aisle: 'Lapte praf degresat 1 kg — raft ingrediente HoReCa', priceRon: 44.9, packGrams: 1000, packLabel: 'lapte praf 1 kg = 33 de pahare', note: 'Investiția care schimbă totul' }
      ],
      sibiuNote: 'Cel mai ieftin mod de a bea proteină în Sibiu. O pungă de 1 kg de la Selgros îți ajunge o lună.',
      per100g: { kcal: 79, protein: 6.9, carbs: 9.9, sugars: 9.9, fat: 1.45, satFat: 0.9, fiber: 0, salt: 0.35 },
      micros: { calciumMg: 490, b12Ug: 1.5, potassiumMg: 640 },
      serving: { grams: 280, label: '1 pahar mare (280 ml) = 19 g proteină' },
      effort: 1,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['shaker sau blender'],
        steps: [
          'Pune 30 g lapte praf degresat în shaker.',
          'Adaugă 50 ml lapte rece și agită până se face pastă fără cocoloașe.',
          'Completează cu restul de 200 ml lapte și agită încă 15 secunde.'
        ],
        yieldNote: '280 ml, 19 g proteină'
      },
      taste: {
        profile: 'Lapte concentrat, mai dulce și mai plin decât laptele obișnuit',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Mai gros decât laptele normal, aproape ca laptele condensat diluat',
        notes: 'Identic cu „laptele proteic" din raft, la o treime din preț.'
      },
      stats: { taste: 68, satiety: 60, convenience: 82, versatility: 88 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 3, snack: 5, dinner: 3, beforeBed: 5 },
      timingNote: 'Înainte de culcare — cazeina se digeră 6–7 ore.',
      tags: ['no-cook', 'low-fat', 'cheap-protein', 'budget', 'calcium-rich', 'b12', 'complete-protein', 'slow-digesting', 'night-snack', 'post-workout'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Cacao neîndulcită', 'Cafea', 'Cereale proteice', 'Fulgi de ovăz', 'Banană'],
      tips: [
        'COMPARAȚIA CARE CONTEAZĂ: laptele proteic din raft — 6 lei pentru 40 g proteină la 500 ml. Acesta — 5,2 lei pentru 38 g proteină la 560 ml. Aproape identic, dar poți face oricâte vrei din pungă.',
        'Cost per 100 g proteină: ~15 lei. Doar laptele praf simplu și glutenul vital sunt mai ieftine.',
        'Folosește-l ca bază pentru ORICE: cereale, terci, ciocolată caldă, smoothie. Peste tot unde ai pune lapte.',
        'Nu depăși 40 g lapte praf la 250 ml — devine prea dulce și prea gros de băut.'
      ],
      warnings: ['Lactoză foarte mare (lapte + lapte praf) — exclus pentru intoleranți.'],
      storage: 'Frigider, 24 h; agită înainte de consum.',
      shelfLife: '24 h preparat',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: lapte 1,5%, lapte praf degresat 36% proteină']
    },

    {
      id: 'b-hack-inghetata-skyr',
      name: 'HACK: Frozen Skyr Ice Cream',
      nameRo: 'HACK: înghețată de skyr cu fructe',
      brand: 'generic (asamblat acasă)',
      category: 'bakery-drinks-sweets',
      subcategory: 'Hack-uri proteice',
      emoji: '🍦',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Skyr — raft lactate; fructe congelate — congelator; miere — raft dulciuri', priceRon: 14.5, packGrams: 530, packLabel: 'ingrediente pentru 2–3 porții (530 g)', note: '400 g skyr (10 lei) + 100 g fructe congelate (3 lei) + 30 g miere (1,5 lei)' },
        { name: 'Kaufland', availability: 'always', aisle: 'Aceleași rafturi', priceRon: 16.5, packGrams: 530, packLabel: 'ingrediente pentru 2–3 porții', note: '' }
      ],
      sibiuNote: 'Fructele de pădure congelate de la Lidl (punga de 450 g, ~13 lei) sunt cea mai bună afacere din congelatoarele sibiene.',
      per100g: { kcal: 73, protein: 8.5, carbs: 7.7, sugars: 7.4, fat: 0.2, satFat: 0.1, fiber: 0.8, salt: 0.1 },
      micros: { calciumMg: 130, b12Ug: 0.4, potassiumMg: 180 },
      serving: { grams: 265, label: '1/2 din rețetă (265 g) = 22 g proteină' },
      effort: 1,
      timeMin: 95,
      activeTimeMin: 5,
      cooking: {
        method: 'blend',
        difficulty: 'easy',
        equipment: ['blender sau blender vertical', 'caserolă cu capac'],
        steps: [
          'Pune 400 g skyr natural, 100 g fructe congelate și 30 g miere în blender.',
          'Mixează 60 de secunde până devine cremos.',
          'Toarnă într-o caserolă și pune la congelator 90 de minute.',
          'Amestecă cu furculița la jumătatea timpului ca să nu facă cristale.'
        ],
        yieldNote: '530 g înghețată, 2–3 porții'
      },
      taste: {
        profile: 'Acrișor-dulce, cu fructe de pădure intense și corp lăptos',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 0,
        richness: 1,
        texture: 'Cremoasă dacă o mănânci în 2 ore; după o noapte devine piatră',
        notes: 'Bate înghețata proteică din comerț la preț și la proteină. Pierde la textură.'
      },
      stats: { taste: 78, satiety: 72, convenience: 50, versatility: 40 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 4, lunch: 2, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Desert de vară care nu strică deficitul: 195 kcal și 22 g proteină pe porție.',
      tags: ['frozen', 'protein-dense', 'low-fat', 'cheap-protein', 'summer', 'night-snack', 'cutting', 'calcium-rich', 'batch-cook'],
      diet: { vegan: false, vegetarian: true, glutenFree: true, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Fructe de pădure proaspete', 'Granola (1 lingură)', 'Cacao', 'Fistic tocat'],
      tips: [
        'NU o lăsa peste noapte în congelator fără să o scoți cu 20 de minute înainte — devine bloc de gheață.',
        'Cost: 14,5 lei pentru 45 g proteină și 530 g de înghețată. Caserola Gelatelli proteică: 14 lei pentru 42 g proteină și 350 g. Aproape egal, dar a ta n-are aditivi.',
        'Cu 20 g lapte praf degresat în blender: textura devine vizibil mai cremoasă și adaugi 7 g proteină.',
        'Miere în loc de îndulcitor pentru textură — zahărul real împiedică formarea cristalelor de gheață.'
      ],
      warnings: ['Conține lactoză.'],
      storage: 'Congelator, până la 2 săptămâni; scoate 15–20 min înainte de servire.',
      shelfLife: '~2 săptămâni în congelator',
      dataConfidence: 'high',
      sources: ['Calcul din etichete: skyr natural, fructe de pădure congelate, miere']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
