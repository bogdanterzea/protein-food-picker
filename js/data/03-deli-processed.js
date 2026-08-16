/* =========================================================================
 * PROTEIN ATLAS SIBIU — MEZELURI, CHARCUTERIE, CONSERVE DE CARNE & RAFT CALD
 * File: js/data/03-deli-processed.js
 * Items: 64
 * Category slug: deli-processed
 * ID prefix: p-
 * Last researched: 2026-08
 *
 * NOTĂ DE CATEGORIE: aici trăiesc atât eroii („piept de pui la grătar feliat”,
 * 33 g proteină/100 g), cât și capcanele („parizer”, 11 g proteină și 19 g
 * grăsime). Fiecare intrare conține sarea reală/100 g și, unde e declarat,
 * procentul de carne. Nu am înfrumusețat nimic.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'p-sunca-piept-pui-cristim',
      name: 'Chicken Breast Ham, Sliced',
      nameRo: 'Șuncă din piept de pui, feliată',
      brand: 'Cris-Tim (Matinal)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft frigorific mezeluri feliate, lângă Caroli', priceRon: 8.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Cel mai des la promoție 2+1' },
        { name: 'Carrefour', availability: 'always', aisle: 'Mezeluri feliate, culoarul frigorific central', priceRon: 8.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Vitrină mezeluri, raftul de sus', priceRon: 9.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Mai scump, dar Profi e la colț' },
        { name: 'Auchan', availability: 'usual', aisle: 'Mezeluri feliate', priceRon: 8.79, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Kaufland Șos. Alba Iulia și Kaufland Vasile Aaron au constant raftul plin; la Profi din centru se termină vinerea după-amiaza.',
      per100g: { kcal: 104, protein: 21.5, carbs: 1.4, sugars: 0.1, fat: 1.3, satFat: 0.6, fiber: 0, salt: 1.86 },
      micros: { ironMg: 0.5, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 300, cholesterolMg: 50 },
      serving: { grams: 100, label: '1 plic întreg (100 g), 4–5 felii' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat-fin, gust discret de pui fiert, fără afumătură agresivă',
        intensity: 2, sweetness: 0, saltiness: 3, umami: 2, richness: 1,
        texture: 'Felii subțiri, ușor umede, elastice — se rup dacă tragi de ele',
        notes: 'E cel mai bun raport proteină/gust din tot raftul de mezeluri ieftine. Simplă e cam plată; cu muștar sau castravete murat devine bună.'
      },
      stats: { taste: 58, satiety: 66, convenience: 100, versatility: 82 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 4, snack: 5, dinner: 3, beforeBed: 3 },
      timingNote: 'Perfectă la micul dejun sau ca snack de birou — 21 g proteină la 104 kcal.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'high-sodium', 'processed', 'portable', 'breakfast', 'office-lunch', 'mid-price', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Pâine integrală', 'Muștar Dijon', 'Castraveți murați', 'Brânză cottage', 'Roșii cherry'],
      tips: [
        'Declarația spune 90% piept de pui — e printre cele mai mari procente de carne din raftul de mezeluri românești. Verifică pe plic, formula se schimbă.',
        'Un plic de 100 g = 21 g proteină la ~8,5 lei. Pieptul de pui crud de la Kaufland îți dă aceeași proteină cu 3 lei, dar trebuie gătit — plătești comoditatea.',
        'Nu o lăsa deschisă în frigider mai mult de 2 zile: se usucă la margini și capătă gust metalic.'
      ],
      warnings: [
        '1,86 g sare/100 g — un plic întreg îți dă ~31% din limita zilnică OMS (6 g/zi).',
        'Conține nitrit de sodiu (E250). Carnea procesată e clasificată IARC grupa 1 — recomandarea e sub ~50 g/zi în medie.'
      ],
      storage: 'Frigider 0–4 °C. După deschidere, consumă în 2 zile; ține feliile în plicul original, nu pe farfurie descoperită.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'high',
      sources: ['cristim.ro fișă produs', 'eatntrack.ro']
    },

    {
      id: 'p-sunca-curcan-caroli',
      name: 'Turkey Ham, Sliced',
      nameRo: 'Șuncă de curcan, feliată',
      brand: 'Caroli (Gustos)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Mezeluri feliate, secțiunea Caroli', priceRon: 7.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft mezeluri feliate', priceRon: 8.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Vitrină frigorifică mezeluri', priceRon: 7.79, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Sortiment mai mic, dar preț bun' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Mezeluri feliate', priceRon: 9.29, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Cel mai scump din oraș' }
      ],
      sibiuNote: 'Penny de pe Calea Poplăcii și cel din Ștrand au constant prețul cel mai mic pe șuncă de curcan din Sibiu.',
      per100g: { kcal: 109, protein: 18.5, carbs: 2, sugars: 0.8, fat: 3, satFat: 1, fiber: 0, salt: 2 },
      micros: { ironMg: 0.7, zincMg: 1.2, b12Ug: 0.5, potassiumMg: 280, cholesterolMg: 55 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Mai sărată și mai „de mezel” decât cea de pui, cu note de condimente',
        intensity: 3, sweetness: 1, saltiness: 4, umami: 2, richness: 2,
        texture: 'Felii mai groase, mai compacte, ușor gumate',
        notes: 'Bună în sandvișuri, dar simplă e sărată. Curcanul aici e ingredient de marketing — procentul de carne e mai mic decât la varianta de pui a Cris-Tim.'
      },
      stats: { taste: 55, satiety: 62, convenience: 100, versatility: 78 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 4, snack: 4, dinner: 3, beforeBed: 2 },
      timingNote: 'Snack rapid, dar sarea o face mai puțin potrivită seara dacă ții la retenția de apă.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'high-sodium', 'processed', 'portable', 'breakfast', 'office-lunch', 'budget'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Pâine de secară', 'Ardei gras', 'Iaurt grecesc cu usturoi', 'Ou fiert'],
      tips: [
        '„Șuncă de curcan” nu înseamnă 100% curcan: multe rețete au 55–70% carne, restul apă, amidon și proteină de soia. Citește lista de ingrediente, nu numele.',
        'Dacă vezi „proteine vegetale” în primele 5 ingrediente, pune-o înapoi — plătești soia la preț de curcan.',
        'La 2 g sare/100 g, nu combina cu brânză telemea în același sandviș, ajungi la 4 g sare dintr-o masă.'
      ],
      warnings: [
        '2 g sare/100 g — un plic = o treime din limita zilnică.',
        'Conține nitriți (E250) și, frecvent, proteine de soia — atenție la alergia la soia.'
      ],
      storage: 'Frigider 0–4 °C, 2–3 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'medium',
      sources: ['caroli.ro portofoliu', 'Etichete raft Kaufland Sibiu']
    },

    {
      id: 'p-sunca-praga-porc',
      name: 'Prague Ham',
      nameRo: 'Șuncă Praga',
      brand: 'Cris-Tim / Aldis (variantă generică)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj + variantă feliată ambalată', priceRon: 14.5, packGrams: 200, packLabel: 'caserolă feliată 200 g', note: 'La vitrină o tai cât vrei' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 7.6, packGrams: 100, packLabel: '100 g la vitrină', note: '~76 lei/kg' },
        { name: 'Profi', availability: 'usual', aisle: 'Mezeluri ambalate', priceRon: 8.2, packGrams: 100, packLabel: 'plic 100 g', note: '' }
      ],
      sibiuNote: 'La vitrina Kaufland din Shopping City ceri „un sfert de Praga, felii subțiri” — e cea mai bună variantă preț/calitate față de plicurile ambalate.',
      per100g: { kcal: 165, protein: 16, carbs: 1.5, sugars: 0.7, fat: 10.5, satFat: 4, fiber: 0, salt: 2.2 },
      micros: { ironMg: 0.8, zincMg: 1.6, b12Ug: 0.7, potassiumMg: 290, cholesterolMg: 60 },
      serving: { grams: 80, label: '3–4 felii (80 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulceag-afumat, gras, cu marginea caramelizată — gustul clasic de șuncă românească',
        intensity: 4, sweetness: 2, saltiness: 4, umami: 3, richness: 4,
        texture: 'Fragedă, cu vinișoare de grăsime care se topesc pe limbă',
        notes: 'Mult mai gustoasă decât șuncă de pui, dar 10,5 g grăsime/100 g. Nu e un aliment „proteic”, e un aliment de plăcere cu proteină decentă.'
      },
      stats: { taste: 78, satiety: 58, convenience: 96, versatility: 80 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 3, beforeBed: 2 },
      timingNote: 'Ca gust e superioară, dar ca profil macro e la jumătatea drumului spre bacon.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'high-sodium', 'processed', 'romanian-classic', 'breakfast', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ouă ochiuri', 'Cașcaval', 'Muștar', 'Pâine de casă', 'Roșii'],
      tips: [
        'Cere-o la vitrină, nu ambalată: la gramaj plătești 70–80 lei/kg, iar plicurile de 100 g te duc la 85–95 lei/kg pentru același produs.',
        'Prăjită 30 de secunde în tigaie fără ulei își scoate grăsimea și devine crocantă — bună peste ouă.',
        'Nu confunda cu „specialitate tip Praga”: cuvântul „tip” înseamnă adesea sub 50% carne.'
      ],
      warnings: [
        '2,2 g sare/100 g — mai sărată decât media raftului.',
        'Carne procesată de porc cu nitriți; ține consumul cumulat de mezeluri sub ~50 g/zi.'
      ],
      storage: 'Frigider 0–4 °C. Feliată la vitrină, se consumă în 3 zile.',
      shelfLife: '3 zile de la feliere / ~25 zile în ambalaj vidat',
      dataConfidence: 'medium',
      sources: ['Etichete vitrină Kaufland Sibiu', 'cristim.ro']
    },

    {
      id: 'p-sunca-presata-elit',
      name: 'Pressed Pork Ham',
      nameRo: 'Șuncă presată de porc',
      brand: 'Elit',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🥓',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 6.9, packGrams: 100, packLabel: '100 g la vitrină', note: '~69 lei/kg' },
        { name: 'Selgros', availability: 'usual', aisle: 'Raft mezeluri, batoane întregi', priceRon: 58, packGrams: 1000, packLabel: 'baton ~1 kg', note: 'Cel mai ieftin pe kg din oraș' },
        { name: 'Auchan', availability: 'usual', aisle: 'Vitrină mezeluri', priceRon: 7.4, packGrams: 100, packLabel: '100 g la vitrină', note: '' }
      ],
      sibiuNote: 'Selgros de pe Șos. Alba Iulia vinde batonul întreg — merită dacă ai congelator și feliezi tu; ies 40+ sandvișuri.',
      per100g: { kcal: 187, protein: 14.5, carbs: 2, sugars: 0.9, fat: 13.5, satFat: 5, fiber: 0, salt: 2.1 },
      micros: { ironMg: 0.9, zincMg: 1.7, b12Ug: 0.8, potassiumMg: 270, cholesterolMg: 62 },
      serving: { grams: 80, label: '3 felii groase (80 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, cu gust puternic de porc afumat și textură de mozaic',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 3, richness: 4,
        texture: 'Bucăți de carne presate, cu gelatină între ele — se desface în felii',
        notes: 'Gustoasă, dar raportul proteină/grăsime e prost: aproape 1:1. E mezel de plăcere, nu de dietă.'
      },
      stats: { taste: 72, satiety: 55, convenience: 95, versatility: 70 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Grăsimea încetinește digestia — ok la prânz, prost ca post-workout.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-sodium', 'processed', 'romanian-classic', 'budget', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar cu hrean', 'Ceapă roșie', 'Pâine neagră', 'Gogoșari în oțet'],
      tips: [
        'Uită-te la secțiune: dacă vezi bucăți mari de mușchi, e șuncă presată reală. Dacă e pastă omogenă cu puncte, e emulsie mascată.',
        'Cere feliile mai groase (3–4 mm) — subțire se rupe și pierde textura.',
        'Nu e o alegere de „cutting”: 13,5 g grăsime la doar 14,5 g proteină. Ia pastramă de curcan dacă numeri caloriile.'
      ],
      warnings: [
        'Raport proteină:grăsime aproape 1:1 — ~65% din calorii vin din grăsime.',
        '2,1 g sare/100 g; conține nitriți.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile feliată.',
      shelfLife: '~30 zile baton vidat',
      dataConfidence: 'medium',
      sources: ['elit.ro', 'Etichete vitrină Kaufland Sibiu']
    },

    {
      id: 'p-sunca-pui-pikok-lidl',
      name: 'Chicken Ham, Sliced (Lidl Own Brand)',
      nameRo: 'Șuncă de pui feliată',
      brand: 'Pikok (Lidl)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft frigorific mezeluri, imediat după lactate', priceRon: 6.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Cel mai ieftin plic de șuncă de pui din Sibiu' }
      ],
      sibiuNote: 'Toate cele 5 magazine Lidl din Sibiu (Turnișor, Vasile Aaron, Șelimbăr, Calea Cisnădiei, Piața Cluj) au Pikok permanent — e marca proprie, nu dispare din stoc.',
      per100g: { kcal: 112, protein: 17.5, carbs: 2.5, sugars: 1, fat: 3.5, satFat: 1.2, fiber: 0, salt: 1.9 },
      micros: { ironMg: 0.5, zincMg: 0.9, b12Ug: 0.3, potassiumMg: 260, cholesterolMg: 48 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Neutru, ușor sărat, gust de pui diluat',
        intensity: 2, sweetness: 1, saltiness: 3, umami: 2, richness: 1,
        texture: 'Felii subțiri, moi, ușor apoase',
        notes: 'Nu e spectaculoasă, dar face treaba la 6,5 lei. Se simte apa adăugată — feliile lasă umezeală în ambalaj.'
      },
      stats: { taste: 48, satiety: 60, convenience: 100, versatility: 76 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 4, snack: 4, dinner: 3, beforeBed: 2 },
      timingNote: 'Cel mai ieftin mod de a pune 17 g proteină într-un sandviș de dimineață.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'high-sodium', 'processed', 'budget', 'cheap-protein', 'breakfast', 'portable'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Pâine toast integrală', 'Muștar', 'Salată verde', 'Brânză light'],
      tips: [
        'Cumpără 3 plicuri odată — la 6,49 lei ai proteina la ~37 lei/100 g proteină, printre cele mai bune din raftul de mezeluri.',
        'Scurge lichidul din plic înainte de a pune feliile pe pâine, altfel îmbibi pâinea.',
        'Verifică ultima zi de valabilitate: Lidl Sibiu reduce mezelurile cu 30–50% în ziua expirării, la raftul galben de lângă casă.'
      ],
      warnings: [
        'Conține apă adăugată și amidon — proteina reală e mai mică decât la Cris-Tim Matinal.',
        '1,9 g sare/100 g; nitrit de sodiu în listă.'
      ],
      storage: 'Frigider 0–4 °C, 2 zile după deschidere.',
      shelfLife: '~18 zile sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro sortiment Pikok', 'Etichete raft Lidl Sibiu']
    },

    {
      id: 'p-sunca-k-classic-kaufland',
      name: 'Pork Ham, Sliced (Kaufland Own Brand)',
      nameRo: 'Șuncă de porc feliată',
      brand: 'K-Classic (Kaufland)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🥪',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft mezeluri feliate, zona mărcilor proprii', priceRon: 6.99, packGrams: 150, packLabel: 'caserolă 150 g', note: 'Gramaj mai mare decât plicurile de 100 g' }
      ],
      sibiuNote: 'Kaufland Sibiu are 3 magazine (Șos. Alba Iulia, Vasile Aaron, Shopping City) — K-Classic e identică în toate, la același preț.',
      per100g: { kcal: 131, protein: 15, carbs: 2.5, sugars: 1.1, fat: 6.8, satFat: 2.5, fiber: 0, salt: 2.1 },
      micros: { ironMg: 0.7, zincMg: 1.4, b12Ug: 0.6, potassiumMg: 280, cholesterolMg: 55 },
      serving: { grams: 75, label: 'jumătate de caserolă (75 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Standard de supermarket: sărat, ușor dulceag, fără personalitate',
        intensity: 2, sweetness: 2, saltiness: 3, umami: 2, richness: 2,
        texture: 'Felii uniforme, ușor elastice',
        notes: 'Face exact ce trebuie într-un sandviș și nimic mai mult. Caserola de 150 g e formatul potrivit pentru 2 persoane.'
      },
      stats: { taste: 52, satiety: 58, convenience: 100, versatility: 80 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 2, lunch: 4, snack: 4, dinner: 3, beforeBed: 2 },
      timingNote: 'Bun la micul dejun; grăsimea moderată o face mai săturătoare decât șuncă de pui.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'high-sodium', 'processed', 'budget', 'breakfast', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine toast', 'Cașcaval', 'Muștar', 'Castraveți'],
      tips: [
        '46 lei/kg — e cel mai ieftin mezel decent pe kilogram din Sibiu, dar și cel cu cel mai mult adaos de apă.',
        'Caserola resigilabilă ține feliile mai bine decât plicul: 4 zile în loc de 2.',
        'Dacă te uiți doar la proteină/leu, mai bine ia Pikok de pui: 17,5 g vs 15 g și jumătate din grăsime.'
      ],
      warnings: [
        '2,1 g sare/100 g.',
        'Conține nitriți, dextroză și stabilizatori — marcă proprie ieftină, formulă cu apă adăugată.'
      ],
      storage: 'Frigider 0–4 °C, caserola resigilată 3–4 zile.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro K-Classic', 'Etichete raft Kaufland Sibiu']
    },

    {
      id: 'p-sunca-1fresh-cristim',
      name: 'Clean-Label Chicken Ham',
      nameRo: 'Șuncă de pui fără E-uri (1Fresh)',
      brand: 'Cris-Tim (1Fresh)',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🌿',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Mezeluri feliate, zona premium/bio', priceRon: 12.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Gama 1Fresh, ambalaj verde' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Mezeluri feliate, raftul de sus', priceRon: 12.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Mezeluri premium', priceRon: 13.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Se găsește sigur la Carrefour din Shopping City Sibiu; la magazinele mici de cartier rar ajunge, fiind marfă cu rulaj lent.',
      per100g: { kcal: 113, protein: 19.5, carbs: 1, sugars: 0.5, fat: 3.5, satFat: 1.2, fiber: 0, salt: 1.6 },
      micros: { ironMg: 0.5, zincMg: 0.9, b12Ug: 0.3, potassiumMg: 310, cholesterolMg: 50 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Curat, gust real de pui fiert, mai puțin sărat decât mezelul standard',
        intensity: 2, sweetness: 0, saltiness: 2, umami: 2, richness: 1,
        texture: 'Mai fermă și mai uscată decât șunca obișnuită — se simte lipsa apei adăugate',
        notes: 'Culoarea e gri-bej, nu roz: asta pentru că nu are nitriți. Arată mai puțin apetisant și e mai bună. Prețul e dublu.'
      },
      stats: { taste: 60, satiety: 68, convenience: 96, versatility: 78 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 4, snack: 5, dinner: 3, beforeBed: 3 },
      timingNote: 'Cea mai „curată” șuncă de pe raft — varianta de zi cu zi dacă mănânci mezeluri des.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'premium', 'breakfast', 'portable', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Avocado', 'Pâine cu semințe', 'Roșii cherry', 'Iaurt grecesc cu mărar'],
      tips: [
        'Fără nitriți înseamnă termen de valabilitate mai scurt și culoare cenușie. Nu e stricată — așa arată carnea fiartă fără E250.',
        'Dacă mănânci mezeluri de 4–5 ori pe săptămână, diferența de preț (4 lei/plic) e cea mai ieftină asigurare pe care o poți plăti.',
        'Se usucă repede: ține plicul închis etanș și consumă în 2 zile.'
      ],
      warnings: [
        'Chiar și fără nitriți adăugați, rămâne carne procesată și sărată (1,6 g sare/100 g).',
        'Preț dublu față de șunca standard — nu e o alegere de buget.'
      ],
      storage: 'Frigider 0–4 °C, maxim 2 zile după deschidere.',
      shelfLife: '~12–14 zile sigilat (mai scurt decât mezelul cu nitriți)',
      dataConfidence: 'medium',
      sources: ['cristim.ro gama 1Fresh', 'carrefour.ro']
    },

    {
      id: 'p-jambon-copt-carrefour-classic',
      name: 'Roast Ham, Sliced',
      nameRo: 'Jambon copt feliat',
      brand: 'Carrefour Classic',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Mezeluri feliate, marcă proprie', priceRon: 9.49, packGrams: 150, packLabel: 'caserolă 150 g', note: '' },
        { name: 'Carrefour Market', availability: 'usual', aisle: 'Raft frigorific mezeluri', priceRon: 9.99, packGrams: 150, packLabel: 'caserolă 150 g', note: '' }
      ],
      sibiuNote: 'Carrefour Market din centrul Sibiului (str. Nicolae Bălcescu) are gama Classic, dar cu 5–8% mai scump decât hipermarketul din Shopping City.',
      per100g: { kcal: 121, protein: 18, carbs: 1, sugars: 0.6, fat: 5, satFat: 1.8, fiber: 0, salt: 2 },
      micros: { ironMg: 0.8, zincMg: 1.5, b12Ug: 0.7, potassiumMg: 300, cholesterolMg: 55 },
      serving: { grams: 75, label: '3 felii (75 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Gust de pulpă coaptă, ușor afumat, cu margine rumenită',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 3, richness: 2,
        texture: 'Fibră de mușchi vizibilă, se rupe pe fir — nu e emulsie',
        notes: 'Se vede că e carne întreagă, nu pastă. Cel mai bun compromis gust/proteină între mărcile proprii.'
      },
      stats: { taste: 68, satiety: 66, convenience: 98, versatility: 84 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 5, snack: 4, dinner: 4, beforeBed: 2 },
      timingNote: '18 g proteină la 121 kcal — sandvișul de prânz clasic.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'high-sodium', 'processed', 'mid-price', 'office-lunch', 'breakfast'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine ciabatta', 'Muștar de Dijon', 'Rucola', 'Brânză Emmentaler'],
      tips: [
        'Caută pe etichetă „carne de porc 85%” sau mai mult — jamboanele bune declară procentul; cele proaste nu-l declară deloc.',
        'Feliile mai groase se pot prăji 1 minut și devin baza unui mic dejun englezesc rapid.',
        'Caserola de 150 g e mai bună la preț/kg (63 lei/kg) decât plicurile de 100 g de la branduri.'
      ],
      warnings: [
        '2 g sare/100 g.',
        'Nitriți prezenți; carne procesată — IARC grupa 1.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'medium',
      sources: ['carrefour.ro', 'Etichete raft Carrefour Sibiu']
    },

    {
      id: 'p-sunca-salonta-porc',
      name: 'Pork Ham (Salonta)',
      nameRo: 'Șuncă de porc Salonta',
      brand: 'Salonta',
      category: 'deli-processed',
      subcategory: 'Șuncă & specialități fierte',
      emoji: '🐷',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Vitrină mezeluri, secțiunea Salonta', priceRon: 7.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 7.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'La Doi Pași', availability: 'occasional', aisle: 'Frigider mezeluri', priceRon: 8.5, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Prețul de magazin de proximitate' }
      ],
      sibiuNote: 'Salonta e brandul „de cartier” — îl găsești în magazinele mici La Doi Pași din Hipodrom și Terezian când nu ajungi la hipermarket.',
      per100g: { kcal: 147, protein: 15.5, carbs: 2, sugars: 0.8, fat: 8.5, satFat: 3.2, fiber: 0, salt: 2.2 },
      micros: { ironMg: 0.8, zincMg: 1.5, b12Ug: 0.7, potassiumMg: 270, cholesterolMg: 58 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat pronunțat, sărat, gust tradițional românesc de mezel',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 3, richness: 3,
        texture: 'Compactă, ușor gumată',
        notes: 'Gust bun, dar formula are apă și amidon. Proteina de 15,5 g e sub media categoriei.'
      },
      stats: { taste: 62, satiety: 56, convenience: 98, versatility: 74 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 3, beforeBed: 2 },
      timingNote: 'Mezel de sandviș, nu de plan nutrițional.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'high-sodium', 'processed', 'budget', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine albă', 'Ceapă verde', 'Roșii', 'Telemea'],
      tips: [
        'Verifică dacă are amidon/gluten în listă — variantele ieftine Salonta îl au frecvent, deci nu e sigură pentru celiaci.',
        'La Doi Pași adaugă 10–15% peste prețul Penny; dacă poți aștepta, cumpără de la Penny.',
        'La 15,5 g proteină și 8,5 g grăsime, e o alegere mediocră — vezi Pikok pui sau Cris-Tim Matinal pentru același ban.'
      ],
      warnings: [
        'Poate conține gluten (amidon din grâu) — citește eticheta dacă ai intoleranță.',
        '2,2 g sare/100 g; nitriți.'
      ],
      storage: 'Frigider 0–4 °C, 2 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'low',
      sources: ['Etichete raft Penny Sibiu', 'Estimare tip produs']
    },

    {
      id: 'p-piept-pui-gratar-cristim',
      name: 'Grilled Chicken Breast, Sliced',
      nameRo: 'Piept de pui la grătar, feliat',
      brand: 'Cris-Tim',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🔥',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Mezeluri feliate, raftul cu produse „fitness”', priceRon: 11.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Uneori și format 200 g' },
        { name: 'Carrefour', availability: 'always', aisle: 'Mezeluri feliate premium', priceRon: 12.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Mezeluri feliate', priceRon: 19.99, packGrams: 200, packLabel: 'caserolă 200 g', note: 'Formatul mare, mai ieftin pe kg' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 13.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Eroul absolut al raftului de mezeluri din Sibiu. Kaufland Shopping City îl are aproape mereu; dacă lipsește, Carrefour de la etaj îl are sigur.',
      per100g: { kcal: 162, protein: 33, carbs: 0.4, sugars: 0.2, fat: 3, satFat: 0.9, fiber: 0, salt: 1.5 },
      micros: { ironMg: 0.6, zincMg: 1.1, b12Ug: 0.4, potassiumMg: 380, cholesterolMg: 85 },
      serving: { grams: 100, label: '1 plic (100 g) = 33 g proteină' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Gust real de pui fript, cu note de grătar și condimente, deloc „de mezel”',
        intensity: 3, sweetness: 0, saltiness: 3, umami: 3, richness: 1,
        texture: 'Felii groase, fibroase, se rup pe fir ca pieptul gătit acasă',
        notes: 'Singurul produs din raftul de mezeluri cu peste 30 g proteină și sub 4 g grăsime. Dacă ai un singur produs de cumpărat din această categorie, acesta e.'
      },
      stats: { taste: 72, satiety: 88, convenience: 100, versatility: 92 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 5, snack: 5, dinner: 5, beforeBed: 4 },
      timingNote: 'Post-workout perfect: 33 g proteină, aproape zero grăsime, digestie rapidă, zero gătit.',
      tags: ['ready-to-eat', 'grab-and-go', 'very-high-protein', 'protein-dense', 'low-fat', 'low-carb', 'processed', 'portable', 'post-workout', 'cutting', 'office-lunch', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Salată verde', 'Orez fiert', 'Iaurt grecesc cu usturoi', 'Lipie integrală', 'Roșii cherry'],
      tips: [
        '33 g proteină/100 g la ~12 lei înseamnă ~36 lei per 100 g proteină — mai scump decât pieptul crud (~12 lei), dar imbatabil când n-ai timp să gătești.',
        'Ține un plic în ghiozdan/geantă: rezistă 3–4 ore la temperatura camerei nedeschis și rezolvă masa ratată.',
        'Taie feliile fâșii și pune-le peste o salată — devine masă completă în 2 minute.',
        'Verifică formatul de 200 g: iese cu 15–20% mai ieftin pe kilogram decât plicul de 100 g.'
      ],
      warnings: [
        '1,5 g sare/100 g — mai puțin decât media mezelurilor, dar tot semnificativ dacă mănânci 200 g.',
        'Rămâne carne tratată termic și ambalată cu conservanți; nu înlocuiește complet carnea proaspătă.'
      ],
      storage: 'Frigider 0–4 °C. După deschidere maxim 2 zile — se usucă și devine sfărâmicios.',
      shelfLife: '~20 zile sigilat',
      dataConfidence: 'high',
      sources: ['cristim.ro fișă produs', 'eatntrack.ro']
    },

    {
      id: 'p-piept-curcan-gratar-feliat',
      name: 'Grilled Turkey Breast, Sliced',
      nameRo: 'Piept de curcan la grătar, feliat',
      brand: 'Caroli / Aldis (variantă generică)',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Mezeluri feliate, raftul cu produse slabe', priceRon: 10.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Mezeluri feliate', priceRon: 11.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Mezeluri premium', priceRon: 11.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Mai greu de găsit decât varianta de pui; Auchan din Shopping City are cel mai variat raft de curcan din Sibiu.',
      per100g: { kcal: 134, protein: 24, carbs: 1.5, sugars: 0.5, fat: 3.5, satFat: 1.1, fiber: 0, salt: 1.8 },
      micros: { ironMg: 1, zincMg: 1.8, b12Ug: 0.9, potassiumMg: 340, cholesterolMg: 70 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Mai intens decât puiul, ușor dulceag, cu aromă de fum',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 3, richness: 1,
        texture: 'Fibroasă, mai uscată decât pieptul de pui',
        notes: 'Solid din punct de vedere nutrițional, ceva mai sec la gust. Merge obligatoriu cu un sos.'
      },
      stats: { taste: 64, satiety: 82, convenience: 100, versatility: 86 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 5, lunch: 5, snack: 5, dinner: 4, beforeBed: 3 },
      timingNote: 'Alternativă la pieptul de pui feliat, cu ceva mai mult fier și zinc.',
      tags: ['ready-to-eat', 'grab-and-go', 'very-high-protein', 'low-fat', 'low-carb', 'processed', 'portable', 'post-workout', 'cutting', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Muștar cu miere', 'Salată de varză', 'Lipie', 'Hummus'],
      tips: [
        'Curcanul are mai mult fier și zinc decât puiul — util dacă nu mănânci carne roșie.',
        'Nu confunda „piept de curcan la grătar” cu „specialitate din curcan” — a doua are 55–65% carne și dublu de grăsime.',
        'Feliile groase se încălzesc 20 de secunde în tigaie și își recapătă suculența.'
      ],
      warnings: [
        '1,8 g sare/100 g.',
        'Formule variază mult între producători — verifică proteina pe eticheta exactă.'
      ],
      storage: 'Frigider 0–4 °C, 2 zile după deschidere.',
      shelfLife: '~20 zile sigilat',
      dataConfidence: 'medium',
      sources: ['caroli.ro', 'Etichete raft Sibiu']
    },

    {
      id: 'p-pastrama-curcan-caroli',
      name: 'Turkey Pastrami',
      nameRo: 'Pastramă din piept de curcan',
      brand: 'Caroli / Penes (variantă generică)',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Mezeluri feliate, lângă șuncile de curcan', priceRon: 9.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Mezeluri feliate', priceRon: 10.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Vitrină mezeluri', priceRon: 9.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 10.29, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Cel mai bun compromis proteină/preț/gust din raftul de mezeluri slabe din Sibiu — se găsește practic în orice magazin.',
      per100g: { kcal: 121, protein: 22, carbs: 2.5, sugars: 1, fat: 2.5, satFat: 0.8, fiber: 0, salt: 2 },
      micros: { ironMg: 1, zincMg: 1.7, b12Ug: 0.8, potassiumMg: 330, cholesterolMg: 65 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Condimentată cu piper și coriandru, ușor picantă, afumată',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 3, richness: 1,
        texture: 'Felii subțiri, fibroase, cu crustă de condimente pe margine',
        notes: 'Are mult mai multă personalitate decât șunca. Crusta de piper face diferența — de-asta se mănâncă și simplă.'
      },
      stats: { taste: 74, satiety: 78, convenience: 100, versatility: 84 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 5, dinner: 4, beforeBed: 3 },
      timingNote: '22 g proteină la 121 kcal — cel mai bun snack sărat din raftul frigorific.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'low-carb', 'high-sodium', 'processed', 'portable', 'cutting', 'office-lunch', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Ou fiert', 'Castraveți murați', 'Pâine de secară', 'Brânză cottage', 'Ardei iute'],
      tips: [
        'Dacă vrei doar unul singur din tot raftul și nu găsești piept de pui la grătar, ăsta e. 22 g proteină, 2,5 g grăsime.',
        'Rulează 2 felii în jurul unui băț de castravete: snack de 10 secunde cu 5 g proteină.',
        'Atenție la variantele cu „pastramă tip curcan” — 2 lei mai ieftine, cu 6 g mai puțină proteină.'
      ],
      warnings: [
        '2 g sare/100 g — un plic întreg = o treime din limita zilnică.',
        'Conține nitriți; e carne procesată.'
      ],
      storage: 'Frigider 0–4 °C, 2 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'medium',
      sources: ['calo.ro fișă pastramă curcan', 'Etichete raft Sibiu']
    },

    {
      id: 'p-pastrama-pui-elit',
      name: 'Chicken Pastrami',
      nameRo: 'Pastramă de pui',
      brand: 'Elit',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj + plicuri feliate', priceRon: 8.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Raft mezeluri, batoane', priceRon: 62, packGrams: 1000, packLabel: 'baton ~1 kg', note: 'Cel mai bun preț/kg dacă feliezi singur' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft mezeluri feliate', priceRon: 9.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Elit e producător ardelean (Cluj) — se găsește bine în Sibiu, mai ales la vitrina Kaufland de pe Șos. Alba Iulia.',
      per100g: { kcal: 117, protein: 21, carbs: 1.5, sugars: 0.6, fat: 3, satFat: 1, fiber: 0, salt: 2.1 },
      micros: { ironMg: 0.6, zincMg: 1, b12Ug: 0.4, potassiumMg: 310, cholesterolMg: 60 },
      serving: { grams: 100, label: '1 plic (100 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumată, condimentată cu boia și usturoi, mai blândă decât cea de curcan',
        intensity: 3, sweetness: 1, saltiness: 4, umami: 3, richness: 1,
        texture: 'Felii suple, ușor umede',
        notes: 'Bună, ieftină, previzibilă. Nu are crusta de piper care face pastrama de curcan interesantă.'
      },
      stats: { taste: 66, satiety: 74, convenience: 100, versatility: 84 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 5, dinner: 4, beforeBed: 3 },
      timingNote: 'Opțiune slabă și ieftină pentru sandvișul de dimineață sau salata de prânz.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-protein', 'low-fat', 'high-sodium', 'processed', 'budget', 'cheap-protein', 'office-lunch', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Muștar', 'Roșii', 'Pâine integrală', 'Salată verde', 'Iaurt cu usturoi'],
      tips: [
        'Batonul întreg de la Selgros iese la 62 lei/kg față de ~90 lei/kg în plicuri — dacă ai o feliatoare sau un cuțit bun, economisești 30%.',
        'Se congelează bine feliată, cu hârtie între felii; scoți exact cât îți trebuie.',
        'La 2,1 g sare, nu o mai săra suplimentar în salată.'
      ],
      warnings: [
        '2,1 g sare/100 g.',
        'Conține nitriți și, în unele loturi, amidon — verifică eticheta dacă eviți glutenul.'
      ],
      storage: 'Frigider 0–4 °C, 2–3 zile după deschidere.',
      shelfLife: '~21 zile sigilat / 45 zile baton vidat',
      dataConfidence: 'medium',
      sources: ['elit.ro', 'Etichete raft Kaufland Sibiu']
    },

    {
      id: 'p-pastrama-vita',
      name: 'Beef Pastrami',
      nameRo: 'Pastramă de vită',
      brand: 'generic (vitrină / Măcelărie locală)',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Vitrină mezeluri la gramaj', priceRon: 13.5, packGrams: 100, packLabel: '100 g la vitrină', note: '~135 lei/kg' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'Vitrină specialități, Piața Cibin', priceRon: 12, packGrams: 100, packLabel: '100 g la gramaj', note: 'Calitate variabilă, gust mai bun' },
        { name: 'Selgros', availability: 'occasional', aisle: 'Raft delicatese', priceRon: 14.9, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'La Piața Cibin, tarabele de mezeluri din hala mare au pastramă de vită mai bună și mai ieftină decât hipermarketurile — cere să guști înainte.',
      per100g: { kcal: 140, protein: 21.8, carbs: 0.5, sugars: 0.2, fat: 5.8, satFat: 2.4, fiber: 0, salt: 2.3 },
      micros: { ironMg: 2.6, zincMg: 4.2, b12Ug: 2.2, potassiumMg: 320, cholesterolMg: 68 },
      serving: { grams: 80, label: '4–5 felii subțiri (80 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Intens, sărat, cu gust profund de vită și crustă de piper negru',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 5, richness: 2,
        texture: 'Fermă, se taie subțire, ușor elastică; mestecatul cere efort',
        notes: 'Cel mai bun gust din toată categoria de mezeluri slabe. Fierul și B12 sunt un bonus real față de pui/curcan.'
      },
      stats: { taste: 82, satiety: 80, convenience: 90, versatility: 78 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 5, dinner: 4, beforeBed: 3 },
      timingNote: 'Fier hemic + B12 + 22 g proteină — util dacă ai analize slabe la fier.',
      tags: ['ready-to-eat', 'high-protein', 'low-fat', 'low-carb', 'iron-rich', 'b12', 'high-sodium', 'processed', 'premium', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Muștar cu hrean', 'Pâine de secară', 'Castraveți murați', 'Ceapă roșie', 'Cașcaval afumat'],
      tips: [
        'Cere-o tăiată foarte subțire (1 mm) — groasă e greu de mestecat și pare uscată.',
        'Are de 4 ori mai mult fier decât pastrama de pui; e cel mai bun mezel pentru cei cu feritină mică.',
        'Prețul de 130–140 lei/kg o face un lux — cumpără 100 g și folosește-o ca „ingredient de gust”, nu ca sursă principală de proteină.'
      ],
      warnings: [
        '2,3 g sare/100 g — printre cele mai sărate din categoria slabă.',
        'Carne roșie procesată: dublu motiv (IARC grupa 1 pentru procesare, grupa 2A pentru carne roșie) să nu depășești ~50 g/zi.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile de la feliere.',
      shelfLife: '3 zile feliată la vitrină',
      dataConfidence: 'medium',
      sources: ['calo.ro pastramă de vită', 'Observație vitrine Sibiu']
    },

    {
      id: 'p-pastrama-oaie',
      name: 'Mutton Pastrami',
      nameRo: 'Pastramă de oaie',
      brand: 'generic (Piața Cibin / raft sezonier)',
      category: 'deli-processed',
      subcategory: 'Pastramă & piept la grătar',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Hala de carne, tarabele cu produse de oaie', priceRon: 9.5, packGrams: 100, packLabel: '100 g la gramaj', note: 'Vârf de sezon toamna, în jurul Sf. Dumitru' },
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Vitrină mezeluri, sezon toamnă', priceRon: 11.9, packGrams: 100, packLabel: '100 g la vitrină', note: '' },
        { name: 'Auchan', availability: 'seasonal', aisle: 'Raft specialități tradiționale', priceRon: 12.9, packGrams: 100, packLabel: 'ambalat vidat 100 g', note: '' }
      ],
      sibiuNote: 'Sibiul e zonă de oierit (Mărginimea Sibiului, Jina, Poiana Sibiului) — pastrama de oaie de la Piața Cibin toamna e produs local autentic, nu import.',
      per100g: { kcal: 174, protein: 16.7, carbs: 1.1, sugars: 0.3, fat: 11.4, satFat: 5.2, fiber: 0, salt: 2.6 },
      micros: { ironMg: 2, zincMg: 3.5, b12Ug: 2.4, potassiumMg: 290, cholesterolMg: 75 },
      serving: { grams: 100, label: 'o porție (100 g)' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 4,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie'],
        steps: [
          'Taie pastrama în bucăți de 1–2 cm.',
          'Pune-o în tigaia fierbinte, fără ulei — are grăsimea ei.',
          'Rumenește 3–4 minute pe fiecare parte.',
          'Servește imediat, cu mămăligă sau ceapă.'
        ],
        yieldNote: '100 g cruda = ~80 g după prăjire'
      },
      taste: {
        profile: 'Foarte intens, sărat, cu gustul specific de oaie pe care ori îl iubești, ori îl urăști',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 4, richness: 4,
        texture: 'Fermă, fibroasă, cu grăsime care se topește la căldură',
        notes: 'Nu e un aliment „de fitness”. E o tradiție culinară cu 11 g grăsime și 2,6 g sare. Delicioasă, dar de sărbătoare.'
      },
      stats: { taste: 70, satiety: 72, convenience: 55, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Masă de seară de toamnă cu mămăligă — nu produs de zi cu zi.',
      tags: ['high-protein', 'high-sodium', 'processed', 'iron-rich', 'b12', 'romanian-classic', 'local-sibiu', 'winter', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Mămăligă', 'Ceapă roșie', 'Brânză de burduf', 'Murături', 'Vin roșu'],
      tips: [
        'Dacă e prea sărată, ține-o 30 de minute în apă rece înainte de a o prăji — pierde 20–30% din sare.',
        'Cere de la tarabă „pastramă de berbecuț” dacă vrei gust mai blând; cea de oaie bătrână e foarte puternică.',
        'Se congelează perfect: cumpără toamna, mănânci iarna.'
      ],
      warnings: [
        '2,6 g sare/100 g — cea mai sărată intrare din categorie. O porție de 100 g = 43% din limita zilnică.',
        'Grăsime saturată ridicată (5,2 g/100 g).',
        'La tarabă, calitatea și igiena variază — cumpără doar de la producători cu vitrină frigorifică.'
      ],
      storage: 'Frigider 0–4 °C, 4–5 zile. Congelator 3 luni.',
      shelfLife: '~7 zile la vitrină / 3 luni congelată',
      dataConfidence: 'medium',
      sources: ['calo.ro pastramă de oaie', 'Observație Piața Cibin Sibiu']
    },

    {
      id: 'p-ceafa-afumata-porc',
      name: 'Smoked Pork Neck',
      nameRo: 'Ceafă afumată de porc, feliată',
      brand: 'Aldis / Meda (variantă generică)',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '💨',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină afumături, lângă ciolan și costiță', priceRon: 6.5, packGrams: 100, packLabel: '100 g la gramaj', note: '~65 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrină afumături', priceRon: 6.9, packGrams: 100, packLabel: '100 g la gramaj', note: '' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'Piața Cibin, hala de carne', priceRon: 6, packGrams: 100, packLabel: '100 g', note: 'Afumătură reală cu lemn, nu aromă lichidă' }
      ],
      sibiuNote: 'Măcelăriile din Piața Cibin afumă cu lemn de fag; diferența de gust față de „aromă de fum” din supermarket e uriașă la același preț.',
      per100g: { kcal: 212, protein: 20, carbs: 0.5, sugars: 0.2, fat: 14.5, satFat: 5.5, fiber: 0, salt: 2.8 },
      micros: { ironMg: 1, zincMg: 2.2, b12Ug: 0.8, potassiumMg: 300, cholesterolMg: 70 },
      serving: { grams: 80, label: '2–3 felii (80 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat puternic, sărat, gras, cu vinișoare de grăsime care dau suculență',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 4, richness: 4,
        texture: 'Fermă, cu marmorare vizibilă; se taie ușor felii subțiri',
        notes: 'Gust excelent, dar 2,8 g sare și 14,5 g grăsime. E ingredient de aromatizare, nu sursă de proteină.'
      },
      stats: { taste: 80, satiety: 66, convenience: 88, versatility: 74 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Bun ca aromă în fasole sau omletă; prost ca aliment principal.',
      tags: ['ready-to-eat', 'high-protein', 'high-sodium', 'high-kcal', 'processed', 'romanian-classic', 'budget', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Fasole bătută', 'Ouă', 'Varză călită', 'Mămăligă', 'Muștar'],
      tips: [
        'Folosește 30–40 g ca aromatizant într-o mâncare de fasole sau varză, în loc de 150 g ca fel principal — obții tot gustul cu o treime din sare.',
        'Nu adăuga sare în mâncarea în care pui ceafă afumată; are 2,8 g sare/100 g și sărează singură vasul.',
        'Marginea uscată se taie și se pune în ciorbă pentru gust.'
      ],
      warnings: [
        '2,8 g sare/100 g — foarte ridicată.',
        'Afumarea intensă produce hidrocarburi aromatice policiclice; consum ocazional, nu zilnic.',
        'Carne procesată de porc, IARC grupa 1.'
      ],
      storage: 'Frigider 0–4 °C, 5–7 zile. Se poate congela.',
      shelfLife: '~10 zile la vitrină',
      dataConfidence: 'low',
      sources: ['Etichete vitrină Kaufland Sibiu', 'Valori tipice CIQUAL pentru ceafă afumată']
    },

    {
      id: 'p-salam-sibiu-igp',
      name: 'Salam de Sibiu (PGI Dry Salami)',
      nameRo: 'Salam de Sibiu IGP',
      brand: 'Salsi / Agricola / Casa Gustului',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🏅',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft mezeluri crud-uscate, batoane întregi + feliat', priceRon: 13.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '~140 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft delicatese, batoane suspendate', priceRon: 44, packGrams: 300, packLabel: 'baton 300 g', note: 'Baton întreg, ~147 lei/kg' },
        { name: 'Auchan', availability: 'always', aisle: 'Raft mezeluri tradiționale', priceRon: 14.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Raft delicatese, batoane', priceRon: 128, packGrams: 1000, packLabel: 'baton ~1 kg', note: 'Cel mai bun preț/kg' }
      ],
      sibiuNote: 'Ironia locală: Salamul de Sibiu NU se produce în Sibiu. IGP-ul îl leagă istoric de Sinaia (fabrica lui Filippo Dozzi, 1910) — numele vine de la faptul că se expedia prin Sibiu. Verifică pe etichetă unde e produs efectiv.',
      per100g: { kcal: 479, protein: 27, carbs: 0.5, sugars: 0.3, fat: 41, satFat: 15, fiber: 0, salt: 4 },
      micros: { ironMg: 1.5, zincMg: 3, b12Ug: 1.2, potassiumMg: 380, cholesterolMg: 90 },
      serving: { grams: 30, label: '5–6 felii subțiri (30 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Complex, sărat, ușor acrișor de la fermentație, cu note de mucegai nobil și piper',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 5, richness: 5,
        texture: 'Fermă, uscată, cu bucăți de slănină albă vizibile; se topește pe limbă',
        notes: 'Unul dintre cele mai bune produse alimentare românești. Dar: 41 g grăsime și 4 g sare la 100 g. E delicatesă, nu proteină de zi cu zi.'
      },
      stats: { taste: 92, satiety: 62, convenience: 96, versatility: 62 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Delicatesă de aperitiv, 30 g o dată. La 100 g ai deja 479 kcal și 4 g sare.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'premium', 'romanian-classic', 'local-sibiu', 'portable'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine de casă', 'Măsline', 'Vin roșu', 'Brânză maturată', 'Muștar'],
      tips: [
        'Uită-te după sigla IGP roșu-galben pe ambalaj. Fără ea e „salam tip Sibiu” — altă rețetă, alt preț, alt gust.',
        'Mucegaiul alb de pe exterior e nobil (Penicillium nalgiovense) și e parte din produs; nu-l confunda cu mucegai verde/negru, care înseamnă alterare.',
        'Batonul întreg de la Selgros iese la 128 lei/kg față de 140–145 lei/kg feliat; se păstrează luni de zile la rece și uscat.',
        'Ca sursă de proteină e ineficient: 27 g proteină vine la pachet cu 41 g grăsime. Nu-l socoti în „proteina zilei”.'
      ],
      warnings: [
        '4 g sare/100 g — două treimi din limita zilnică într-un pumn de felii.',
        '41 g grăsime/100 g, din care 15 g saturate.',
        'Produs crud-uscat: nu e recomandat femeilor însărcinate (risc de listerioză/toxoplasmoză).',
        'Carne procesată, IARC grupa 1.'
      ],
      storage: 'Loc răcoros și uscat (10–15 °C) pentru baton întreg. Feliat: frigider, 5 zile.',
      shelfLife: '3–6 luni baton întreg, ~20 zile plic feliat',
      dataConfidence: 'high',
      sources: ['Eticheta Salam de Sibiu IGP', 'eatntrack.ro Casa Gustului', 'Caiet de sarcini IGP']
    },

    {
      id: 'p-salam-sibiu-camara-noastra-lidl',
      name: 'Sibiu-Style Dry Salami (Lidl)',
      nameRo: 'Salam de Sibiu, feliat',
      brand: 'Cămara Noastră (Lidl)',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🔪',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft frigorific mezeluri, gama Cămara Noastră', priceRon: 10.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: 'Cu ~25% mai ieftin decât IGP-ul de brand' }
      ],
      sibiuNote: 'Alternativa de buget la salamul IGP; toate Lidl-urile din Sibiu îl au permanent, spre deosebire de batoanele IGP care apar în valuri.',
      per100g: { kcal: 475, protein: 23.4, carbs: 1.9, sugars: 0.9, fat: 41.5, satFat: 15.5, fiber: 0, salt: 3.8 },
      micros: { ironMg: 1.4, zincMg: 2.8, b12Ug: 1.1, potassiumMg: 360, cholesterolMg: 88 },
      serving: { grams: 30, label: '5 felii (30 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, gras, cu fermentație mai puțin complexă decât originalul IGP',
        intensity: 4, sweetness: 0, saltiness: 5, umami: 4, richness: 5,
        texture: 'Fermă, ușor mai moale decât IGP-ul, cu bucăți de slănină',
        notes: 'Diferența față de IGP e reală, dar nu enormă. Dacă îl mănânci în sandviș, n-o simți; ca aperitiv pe platou, se vede.'
      },
      stats: { taste: 78, satiety: 58, convenience: 100, versatility: 60 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Aperitiv sau accent pe sandviș. Nu e o sursă de proteină rațională.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'budget', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine cu maia', 'Castraveți murați', 'Cașcaval', 'Măsline'],
      tips: [
        '23,4 g proteină vine cu 41,5 g grăsime — 79% din calorii sunt din grăsime. E mâncare de plăcere, punct.',
        'Pentru un platou de aperitiv, combină 30 g din ăsta cu 70 g pastramă de curcan: gustul rămâne, media macro se îmbunătățește mult.',
        'Plicul deschis se usucă în 3 zile; înfășoară feliile în hârtie de copt, nu în folie.'
      ],
      warnings: [
        '3,8 g sare/100 g.',
        '475 kcal/100 g — un plic întreg e aproape un sfert din necesarul zilnic caloric.',
        'Produs crud-uscat: nerecomandat în sarcină.'
      ],
      storage: 'Frigider 0–7 °C, 5 zile după deschidere.',
      shelfLife: '~25 zile sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Cămara Noastră (Lidl)', 'calo.ro']
    },

    {
      id: 'p-salam-victoria',
      name: 'Salam Victoria (Semi-Dry Salami)',
      nameRo: 'Salam Victoria',
      brand: 'Aldis / Cris-Tim',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🎖️',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj + feliat ambalat', priceRon: 5.9, packGrams: 100, packLabel: '100 g la vitrină', note: '~59 lei/kg' },
        { name: 'Penny', availability: 'always', aisle: 'Raft mezeluri', priceRon: 6.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 6.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Salamul de sandviș implicit al României. Se găsește în absolut fiecare magazin din Sibiu, inclusiv la benzinării.',
      per100g: { kcal: 379, protein: 20, carbs: 1.5, sugars: 0.7, fat: 32.5, satFat: 12, fiber: 0, salt: 3.2 },
      micros: { ironMg: 1.2, zincMg: 2.4, b12Ug: 1, potassiumMg: 330, cholesterolMg: 80 },
      serving: { grams: 50, label: '5–6 felii (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, gras, cu aromă de usturoi și piper — gustul copilăriei românești',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 3, richness: 5,
        texture: 'Semi-uscat, ușor unsuros, cu puncte de grăsime',
        notes: 'Nostalgic și ieftin. Nutrițional e slab: 32 g grăsime la 20 g proteină. Un „sandviș cu salam” e 70% grăsime.'
      },
      stats: { taste: 70, satiety: 52, convenience: 100, versatility: 62 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 2, beforeBed: 1 },
      timingNote: 'Rezolvă foamea, nu obiectivele. 100 g = 379 kcal, majoritatea din grăsime.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'processed', 'budget', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine albă', 'Roșii', 'Ceapă', 'Muștar', 'Ardei gras'],
      tips: [
        'Dacă mănânci salam Victoria zilnic la sandviș, înlocuiește-l cu pastramă de curcan: aceeași convenabilitate, +2 g proteină, -30 g grăsime, -250 kcal la 100 g.',
        'Multe rețete conțin amidon/gluten — nu e sigur pentru celiaci.',
        'Feliile prăjite 30 de secunde își scot mult din grăsime în tigaie — o scădere reală de ~5 g grăsime la 100 g.'
      ],
      warnings: [
        '3,2 g sare/100 g.',
        '77% din calorii vin din grăsime.',
        'Poate conține gluten, proteină de soia și derivate de lapte în funcție de rețetă.'
      ],
      storage: 'Frigider 0–7 °C, 5 zile după deschidere.',
      shelfLife: '~30 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete raft Kaufland Sibiu', 'Valori tipice salam semi-uscat românesc']
    },

    {
      id: 'p-ghiudem-aldis',
      name: 'Ghiudem (Dobrujan Dry Beef/Lamb Sausage)',
      nameRo: 'Ghiudem',
      brand: 'Aldis',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🌶️',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft mezeluri crud-uscate, lângă babic', priceRon: 12.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft delicatese tradiționale', priceRon: 13.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Raft specialități', priceRon: 13.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' }
      ],
      sibiuNote: 'Nu e produs sibian (e dobrogean), dar se găsește constant la Kaufland Shopping City. Cel mai bun raport proteină/grăsime din tot raftul crud-uscat.',
      per100g: { kcal: 320, protein: 32.3, carbs: 0.8, sugars: 0.3, fat: 20.9, satFat: 8, fiber: 0, salt: 4.2 },
      micros: { ironMg: 3, zincMg: 5, b12Ug: 2.5, potassiumMg: 400, cholesterolMg: 85 },
      serving: { grams: 40, label: '6–8 felii subțiri (40 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Foarte intens: usturoi, chimen, ardei iute, gust puternic de vită/oaie uscată',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 5, richness: 3,
        texture: 'Uscat, tare, turtit; se taie foarte subțire și e greu de mestecat',
        notes: 'Surpriza categoriei: 32 g proteină/100 g, mai mult decât orice mezel crud-uscat. Sarea de 4,2 g e prețul plătit.'
      },
      stats: { taste: 76, satiety: 78, convenience: 94, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 4, dinner: 3, beforeBed: 1 },
      timingNote: 'Snack de călătorie cu densitate proteică mare, dar sarea limitează porția la 30–40 g.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'high-sodium', 'low-carb', 'iron-rich', 'b12', 'processed', 'portable', 'premium', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Pâine de casă', 'Ceapă roșie', 'Bere', 'Măsline', 'Roșii uscate'],
      tips: [
        '32 g proteină/100 g — dacă vrei un mezel crud-uscat, ghiudemul bate salamul de Sibiu la proteină cu 5 g și îl bate la grăsime cu 20 g.',
        'Se ține luni întregi într-un sertar rece; e cel mai bun mezel de rucsac pentru drumeție în Munții Cindrel.',
        'Taie-l oblic și foarte subțire — tăiat gros e ca guma.'
      ],
      warnings: [
        '4,2 g sare/100 g — cea mai sărată intrare din tot fișierul. 40 g = 28% din limita zilnică.',
        'Produs crud-uscat: nerecomandat în sarcină.',
        'Frecvent conține și carne de oaie/vită amestecată — verifică eticheta dacă eviți un anumit tip de carne.'
      ],
      storage: 'Loc răcoros și uscat, sau frigider. Rezistă foarte bine.',
      shelfLife: '2–4 luni',
      dataConfidence: 'medium',
      sources: ['klorii.ro Ghiudem-Babic Aldis', 'Etichete raft Sibiu']
    },

    {
      id: 'p-babic',
      name: 'Babic (Spicy Dry Beef Sausage)',
      nameRo: 'Babic',
      brand: 'Aldis / producători dobrogeni',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🥵',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft mezeluri crud-uscate', priceRon: 13.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft delicatese', priceRon: 14.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de specialități dobrogene', priceRon: 65, packGrams: 500, packLabel: 'baton 500 g', note: 'Produs artizanal, gust net superior' }
      ],
      sibiuNote: 'Ruda mai iute a ghiudemului. La Sibiu îl găsești lângă ghiudem, dar rulajul e mic — verifică termenul.',
      per100g: { kcal: 340, protein: 30, carbs: 1, sugars: 0.4, fat: 24, satFat: 9, fiber: 0, salt: 4 },
      micros: { ironMg: 3.2, zincMg: 5.2, b12Ug: 2.6, potassiumMg: 390, cholesterolMg: 88 },
      serving: { grams: 40, label: '6 felii (40 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Iute-picant, cu ardei roșu, chimen și usturoi; arde plăcut',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 5, richness: 3,
        texture: 'Tare, uscat, elastic; se taie greu, se mestecă mult',
        notes: 'Dacă suporți iuțeala, e cel mai satisfăcător mezel din raft. Un pumn de felii îți omoară pofta de dulce.'
      },
      stats: { taste: 74, satiety: 80, convenience: 92, versatility: 48 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 4, dinner: 3, beforeBed: 1 },
      timingNote: 'Snack sărat-iute; sarea îl scoate din discuție ca aliment zilnic.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'high-sodium', 'low-carb', 'iron-rich', 'processed', 'portable', 'premium'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Bere rece', 'Pâine de casă', 'Brânză telemea', 'Roșii', 'Ceapă verde'],
      tips: [
        'Babicul autentic e turtit (presat între scânduri), nu rotund. Dacă e rotund, e „tip babic”.',
        'Ține-l în hârtie, nu în plastic — în plastic transpiră și mucegăiește.',
        'Iuțeala scade dacă îl ții 10 minute la temperatura camerei înainte de servire.'
      ],
      warnings: [
        '4 g sare/100 g.',
        'Iute — evită dacă ai reflux sau gastrită.',
        'Crud-uscat: nerecomandat în sarcină.'
      ],
      storage: 'Loc răcoros și uscat, în hârtie. Frigider după feliere.',
      shelfLife: '2–4 luni baton',
      dataConfidence: 'medium',
      sources: ['lalexandru.ro fișă babic', 'Etichete raft Sibiu']
    },

    {
      id: 'p-cabanos-uscat',
      name: 'Cabanos (Thin Dry Sausage)',
      nameRo: 'Cabanos uscat',
      brand: 'Cris-Tim / Aldis / Pikok (Lidl)',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🌭',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft mezeluri, gama Pikok', priceRon: 8.99, packGrams: 120, packLabel: 'pungă 120 g', note: 'Cel mai ieftin din oraș' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft mezeluri uscate, lângă casă', priceRon: 9.99, packGrams: 100, packLabel: 'pungă 100 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 9.49, packGrams: 100, packLabel: 'pungă 100 g', note: '' }
      ],
      sibiuNote: 'Snackul de mașină clasic. Lidl are cel mai bun preț; se găsește și la benzinăriile de pe centura Sibiului, dar cu 60% mai scump.',
      per100g: { kcal: 419, protein: 25, carbs: 1, sugars: 0.5, fat: 35, satFat: 13, fiber: 0, salt: 3.5 },
      micros: { ironMg: 1.4, zincMg: 2.6, b12Ug: 1.1, potassiumMg: 350, cholesterolMg: 85 },
      serving: { grams: 50, label: '2 batoane (50 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat, sărat, cu piper și usturoi; gras la mestecat',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 4, richness: 5,
        texture: 'Batoane subțiri, elastice, ușor unsuroase',
        notes: 'Ușor de mâncat prea mult. O pungă de 120 g = 500 kcal și 4,2 g sare. Nu e „snack proteic”, e snack gras.'
      },
      stats: { taste: 76, satiety: 58, convenience: 100, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 1, lunch: 2, snack: 3, dinner: 2, beforeBed: 1 },
      timingNote: 'Snack de drum. Rația onestă e 1–2 batoane, nu punga.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'portable', 'budget'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar', 'Bere', 'Cașcaval', 'Măsline'],
      tips: [
        'Compară cu beef jerky: cabanosul are 25 g proteină și 35 g grăsime; jerky-ul are 33 g proteină și 5 g grăsime. Diferența e uriașă la aceeași convenabilitate.',
        'Dacă e la 3,5 g sare/100 g, o pungă întreagă îți dă 4,2 g sare — 70% din limita zilnică.',
        'Verifică lista: variantele ieftine conțin amidon și proteină de soia; cele bune au doar carne, sare, condimente și culturi starter.'
      ],
      warnings: [
        '3,5 g sare/100 g și 35 g grăsime.',
        'Poate conține gluten (amidon din grâu).',
        'Punga se golește singură — porționează-o.'
      ],
      storage: 'Loc răcoros, uscat. După deschidere, frigider, 7 zile.',
      shelfLife: '~45 zile sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro gama Pikok', 'Etichete raft Sibiu']
    },

    {
      id: 'p-carnati-uscati-casa',
      name: 'Homestyle Dry Smoked Sausage',
      nameRo: 'Cârnați uscați de casă, afumați',
      brand: 'generic (Măcelărie locală / Piața Cibin)',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🏡',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Hala de carne, tarabele cu afumături', priceRon: 8.5, packGrams: 100, packLabel: '100 g la gramaj', note: '~85 lei/kg, producători din zona Sibiului' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'Vitrină afumături', priceRon: 9, packGrams: 100, packLabel: '100 g', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft mezeluri tradiționale', priceRon: 10.5, packGrams: 100, packLabel: 'ambalat 100 g', note: 'Versiune industrială' }
      ],
      sibiuNote: 'Piața Cibin, hala mare, sâmbătă dimineața: producătorii din Mărginime aduc cârnați afumați cu lemn. Cere să vezi secțiunea — trebuie să aibă carne, nu pastă.',
      per100g: { kcal: 398, protein: 22, carbs: 1, sugars: 0.4, fat: 34, satFat: 13, fiber: 0, salt: 3 },
      micros: { ironMg: 1.5, zincMg: 2.8, b12Ug: 1.2, potassiumMg: 340, cholesterolMg: 82 },
      serving: { grams: 60, label: 'o bucată (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat cu lemn, usturoi puternic, gust rustic de porc',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 4, richness: 5,
        texture: 'Zbârcit, tare la exterior, gras la interior',
        notes: 'Autentic și foarte gustos, dar variabil: doi producători diferiți dau două produse complet diferite. Grăsimea poate ajunge la 40 g.'
      },
      stats: { taste: 82, satiety: 60, convenience: 82, versatility: 58 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Aperitiv sau ingredient în fasole; nu-l socoti ca proteină planificată.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'processed', 'romanian-classic', 'local-sibiu', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Fasole bătută', 'Mămăligă', 'Murături', 'Ceapă', 'Țuică'],
      tips: [
        'Cere să tai un capăt înainte să cumperi: dacă interiorul e roz-uniform ca pasta, e mezel industrial, nu cârnat de casă.',
        'Valorile nutriționale sunt estimate — producătorii din piață nu au etichetă. Grăsimea poate varia între 28 și 42 g/100 g.',
        'Se congelează perfect. Cumpără 1 kg iarna, ai pentru 3 luni.'
      ],
      warnings: [
        'Fără etichetă nutrițională la tarabă — toate cifrele sunt estimări.',
        '~3 g sare/100 g și grăsime foarte ridicată.',
        'Verifică igiena tarabei; produsele artizanale nu trec prin controlul de proces al fabricilor.'
      ],
      storage: 'Loc răcoros și uscat sau frigider. Congelator 3–4 luni.',
      shelfLife: '~30 zile la rece',
      dataConfidence: 'low',
      sources: ['Observație Piața Cibin Sibiu', 'Valori tipice cârnat crud-uscat de porc']
    },

    {
      id: 'p-prosciutto-crudo',
      name: 'Prosciutto Crudo',
      nameRo: 'Jambon crud (prosciutto crudo)',
      brand: 'Casa Modena / Citterio / Carrefour Selection',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🇮🇹',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft delicatese internaționale, lângă mozzarella', priceRon: 13.99, packGrams: 80, packLabel: 'plic feliat 80 g', note: '~175 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft antipasti / delicatese', priceRon: 14.99, packGrams: 80, packLabel: 'plic feliat 80 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft delicatese', priceRon: 15.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft charcuterie import', priceRon: 145, packGrams: 1000, packLabel: 'bucată ~1 kg', note: 'Doar cu card Metro' }
      ],
      sibiuNote: 'Kaufland Shopping City are cel mai bun raport preț/calitate la prosciutto în Sibiu; Mega Image are variante mai scumpe fără să fie mai bune.',
      per100g: { kcal: 245, protein: 28, carbs: 0.5, sugars: 0.2, fat: 14.5, satFat: 5, fiber: 0, salt: 4.5 },
      micros: { ironMg: 1.2, zincMg: 2.5, b12Ug: 0.9, potassiumMg: 480, cholesterolMg: 70 },
      serving: { grams: 40, label: '4 felii subțiri (40 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat-dulceag, cu umami profund și note de nucă; se topește în gură',
        intensity: 4, sweetness: 1, saltiness: 5, umami: 5, richness: 4,
        texture: 'Felii translucide, moi, cu marginea de grăsime albă și dulce',
        notes: 'Cel mai elegant produs din categorie. 28 g proteină/100 g e chiar bun — problema e sarea de 4,5 g.'
      },
      stats: { taste: 88, satiety: 70, convenience: 96, versatility: 78 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 4, dinner: 4, beforeBed: 1 },
      timingNote: 'Delicatesă. 40 g e porția rezonabilă; peste asta e prea multă sare.',
      tags: ['ready-to-eat', 'very-high-protein', 'low-carb', 'high-sodium', 'processed', 'premium', 'imported', 'portable'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pepene galben', 'Mozzarella', 'Rucola', 'Grisine', 'Smochine'],
      tips: [
        'Scoate-l din frigider cu 15 minute înainte: la temperatura camerei aroma e de două ori mai intensă.',
        'Cu 4,5 g sare/100 g e cel mai sărat mezel din raft. Compensează: mănâncă-l cu pepene sau roșii, nu cu brânză sărată.',
        'Prosciutto crudo (uscat) vs prosciutto cotto (fiert): al doilea are jumătate din proteină și jumătate din sare. Nu le confunda pe raft.'
      ],
      warnings: [
        '4,5 g sare/100 g — 40 g acoperă 30% din limita zilnică.',
        'Carne crudă maturată: nerecomandată femeilor însărcinate și imunodeprimaților.',
        'Preț de 150–180 lei/kg — cel mai scump mezel din categorie.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere; ține feliile în hârtia originală.',
      shelfLife: '~40 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete raft Kaufland Sibiu', 'Valori tipice prosciutto crudo']
    },

    {
      id: 'p-chorizo',
      name: 'Chorizo',
      nameRo: 'Chorizo (cârnat spaniol uscat)',
      brand: 'Campofrio / Carrefour Selection',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🇪🇸',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft delicatese internaționale', priceRon: 12.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft antipasti', priceRon: 13.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft delicatese', priceRon: 24.99, packGrams: 200, packLabel: 'baton 200 g', note: 'Batonul e mai ieftin pe kg' }
      ],
      sibiuNote: 'Campofrio e distribuit larg în România; Carrefour Sibiu îl are constant, Lidl doar în campaniile spaniole (de obicei primăvara).',
      per100g: { kcal: 455, protein: 24, carbs: 2, sugars: 1, fat: 39, satFat: 15, fiber: 0, salt: 3.6 },
      micros: { ironMg: 1.6, zincMg: 3, b12Ug: 1.3, potassiumMg: 400, cholesterolMg: 92 },
      serving: { grams: 40, label: '6–8 felii (40 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Boia afumată dominantă (pimentón), sărat, ușor iute, foarte aromat',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 5, richness: 5,
        texture: 'Fermă, grasă, cu grăsime portocalie care se topește',
        notes: 'Ca ingredient e imbatabil — 30 g de chorizo transformă o tigaie de ouă sau orez. Ca mâncare de sine stătătoare e 77% grăsime.'
      },
      stats: { taste: 86, satiety: 60, convenience: 94, versatility: 82 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Ingredient de aromă, nu sursă de proteină.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'imported', 'premium'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ouă', 'Orez', 'Năut', 'Cartofi', 'Brânză manchego'],
      tips: [
        'Prăjit 2 minute lasă o grăsime portocalie extraordinară — gătește ouăle sau orezul în ea și nu mai adăuga ulei.',
        '30 g de chorizo într-o omletă cu 4 ouă dă gust maxim la un cost caloric mic per porție.',
        'Chorizo „picante” e cu ardei iute; „dulce” e cu boia dulce. Ambele au aceleași macro.'
      ],
      warnings: [
        '39 g grăsime/100 g, 15 g saturate.',
        '3,6 g sare/100 g.',
        'Crud-uscat: nerecomandat în sarcină.'
      ],
      storage: 'Frigider după deschidere, 7 zile. Batonul întreg se ține la loc răcoros.',
      shelfLife: '~60 zile baton sigilat',
      dataConfidence: 'medium',
      sources: ['campofrio.es fișă produs', 'Etichete raft Carrefour Sibiu']
    },

    {
      id: 'p-salam-unguresc-pick',
      name: 'Hungarian Winter Salami',
      nameRo: 'Salam unguresc (téliszalámi)',
      brand: 'Pick Szeged',
      category: 'deli-processed',
      subcategory: 'Mezeluri crud-uscate',
      emoji: '🇭🇺',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft mezeluri premium, lângă salamul de Sibiu', priceRon: 16.99, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft delicatese', priceRon: 17.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft charcuterie', priceRon: 155, packGrams: 1000, packLabel: 'baton ~1 kg', note: 'Doar cu card Metro' }
      ],
      sibiuNote: 'Kaufland (lanț german cu logistică maghiară) are cea mai bună disponibilitate la Pick în Sibiu; Auchan din Shopping City îl are aproape mereu.',
      per100g: { kcal: 470, protein: 22, carbs: 1, sugars: 0.5, fat: 42, satFat: 16, fiber: 0, salt: 3.8 },
      micros: { ironMg: 1.5, zincMg: 2.9, b12Ug: 1.2, potassiumMg: 370, cholesterolMg: 90 },
      serving: { grams: 30, label: '5 felii subțiri (30 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Fin, aromat, cu piper alb și mucegai nobil; mai blând decât salamul de Sibiu',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 5, richness: 5,
        texture: 'Foarte fină, omogenă, cu grăsime perfect dispersată',
        notes: 'Rivalul direct al salamului de Sibiu, cu textură ceva mai fină. Aceleași probleme: 42 g grăsime, 3,8 g sare.'
      },
      stats: { taste: 90, satiety: 58, convenience: 96, versatility: 60 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Delicatesă de platou, 30 g o dată.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'premium', 'imported'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine de secară', 'Muștar', 'Gogoșari', 'Brânză', 'Vin roșu'],
      tips: [
        'La 170 lei/kg e cel mai scump salam din raft. Gustul e superior, dar nu cu 30% față de Salamul de Sibiu IGP.',
        'Se ține în hârtie la 10–14 °C; în frigider, grăsimea se întărește și își pierde aroma.',
        'Ca proteină/leu e ultimul din categorie: ~77 lei per 100 g proteină.'
      ],
      warnings: [
        '42 g grăsime/100 g — cel mai gras salam din listă.',
        '3,8 g sare/100 g.',
        'Crud-uscat: nerecomandat în sarcină.'
      ],
      storage: 'Loc răcoros și uscat pentru baton; frigider după feliere, 5 zile.',
      shelfLife: '4–6 luni baton întreg',
      dataConfidence: 'medium',
      sources: ['pick.hu fișă produs', 'Etichete raft Kaufland Sibiu']
    },

    {
      id: 'p-kaizer-elit',
      name: 'Kaizer (Smoked Cured Pork Belly)',
      nameRo: 'Kaizer afumat',
      brand: 'Elit',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '🥓',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină afumături, lângă bacon', priceRon: 5.9, packGrams: 100, packLabel: '100 g la gramaj', note: '~59 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft afumături vidate', priceRon: 12.9, packGrams: 200, packLabel: 'bucată vidată 200 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 6.9, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Kaizerul e ingredientul standard pentru fasole, varză și ouă în bucătăria ardelenească — se găsește în orice magazin din Sibiu.',
      per100g: { kcal: 192, protein: 15.6, carbs: 1, sugars: 0.4, fat: 14, satFat: 5.3, fiber: 0, salt: 2.7 },
      micros: { ironMg: 0.8, zincMg: 1.8, b12Ug: 0.7, potassiumMg: 280, cholesterolMg: 62 },
      serving: { grams: 50, label: '2 felii (50 g)' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 3,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie'],
        steps: [
          'Taie kaizerul cuburi sau felii de 5 mm.',
          'Pune-l în tigaia rece, pornește focul mediu.',
          'Rumenește 4–5 minute, până lasă grăsimea și devine crocant.'
        ],
        yieldNote: '100 g crud = ~65 g prăjit (pierde grăsime și apă)'
      },
      taste: {
        profile: 'Afumat intens, sărat, cu straturi alternante de carne și slănină',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 4, richness: 5,
        texture: 'Straturi vizibile; moale crud, crocant prăjit',
        notes: 'Excelent ca aromatizant. 15,6 g proteină la 14 g grăsime — mai bun decât baconul, dar tot un aliment gras.'
      },
      stats: { taste: 82, satiety: 62, convenience: 76, versatility: 80 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Ingredient, nu masă. 30–50 g dau aromă unei porții întregi.',
      tags: ['high-protein', 'high-sodium', 'high-kcal', 'low-carb', 'processed', 'romanian-classic', 'budget', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Fasole', 'Varză călită', 'Ouă', 'Cartofi', 'Mămăligă'],
      tips: [
        'Prăjește-l primul în tigaie și gătește tot restul în grăsimea lui — economisești uleiul și câștigi aromă.',
        'Grăsimea topită se strecoară și se ține la frigider; e un „untură aromată” excelent pentru cartofi.',
        'Kaizerul e mai slab decât slănina (15,6 g proteină vs 9 g) — dacă alegi între ele pentru gătit, ia kaizer.'
      ],
      warnings: [
        '2,7 g sare/100 g.',
        'Carne procesată afumată; consum ocazional.',
        'Nu-l socoti sursă de proteină: 66% din calorii vin din grăsime.'
      ],
      storage: 'Frigider 0–4 °C, 7 zile. Congelator 3 luni.',
      shelfLife: '~20 zile vidat',
      dataConfidence: 'high',
      sources: ['eatntrack.ro Kaizer vid Elit', 'elit.ro']
    },

    {
      id: 'p-bacon-feliat-elit',
      name: 'Streaky Bacon, Sliced',
      nameRo: 'Bacon feliat',
      brand: 'Elit',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '🍳',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft frigorific, secțiunea bacon', priceRon: 9.99, packGrams: 150, packLabel: 'caserolă feliată 150 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bacon și afumături', priceRon: 10.49, packGrams: 150, packLabel: 'caserolă 150 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft mezeluri', priceRon: 9.49, packGrams: 150, packLabel: 'caserolă 150 g', note: '' }
      ],
      sibiuNote: 'Baconul feliat e produsul cel mai des la promoție în Sibiu — verifică revista Kaufland de miercuri, apare aproape lunar la -30%.',
      per100g: { kcal: 375, protein: 14, carbs: 1, sugars: 0.5, fat: 35, satFat: 13, fiber: 0, salt: 2.9 },
      micros: { ironMg: 0.7, zincMg: 1.6, b12Ug: 0.6, potassiumMg: 250, cholesterolMg: 68 },
      serving: { grams: 40, label: '3 felii (40 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 4,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie', 'hârtie absorbantă'],
        steps: [
          'Pune feliile în tigaia rece, fără ulei.',
          'Pornește focul mediu — grăsimea se topește lent și feliile devin crocante uniform.',
          'Prăjește 4–6 minute, întorcând o dată.',
          'Scurge pe hârtie absorbantă.'
        ],
        yieldNote: '100 g crud = ~45 g prăjit crocant'
      },
      taste: {
        profile: 'Afumat, sărat, dulceag la margine, cu explozie de umami',
        intensity: 5, sweetness: 1, saltiness: 5, umami: 5, richness: 5,
        texture: 'Crocant când e bine prăjit, altfel moale și cauciucat',
        notes: 'Delicios și fără apărare nutrițională: 35 g grăsime la 14 g proteină. E condiment, nu proteină.'
      },
      stats: { taste: 88, satiety: 50, convenience: 72, versatility: 84 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Ca sursă de proteină e o glumă; ca sursă de gust e cel mai eficient produs din raft.',
      tags: ['high-kcal', 'high-sodium', 'low-carb', 'processed', 'breakfast', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ouă', 'Avocado', 'Salată', 'Roșii', 'Pâine prăjită'],
      tips: [
        'Începe cu tigaia RECE: grăsimea se topește treptat și feliile ies crocante, nu arse pe margini și crude la mijloc.',
        '3 felii (40 g) = 150 kcal și 5,6 g proteină. Dacă vrei proteină de la micul dejun, ouăle sau pieptul de pui feliat sunt de 4 ori mai eficiente.',
        'La cuptor, pe hârtie de copt, 200 °C, 12 minute: iese perfect uniform și fără stropi.'
      ],
      warnings: [
        '35 g grăsime/100 g — doar 15% din calorii vin din proteină.',
        '2,9 g sare/100 g.',
        'Prăjirea la temperatură mare produce nitrozamine; nu-l arde.'
      ],
      storage: 'Frigider 0–4 °C, 5 zile după deschidere. Se congelează bine.',
      shelfLife: '~20 zile sigilat',
      dataConfidence: 'high',
      sources: ['calo.ro Bacon felii Elit', 'elit.ro']
    },

    {
      id: 'p-bacon-pikok-lidl',
      name: 'Smoked Back Bacon (Lidl)',
      nameRo: 'Bacon afumat feliat',
      brand: 'Pikok (Lidl)',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '🐽',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft frigorific mezeluri, gama Pikok', priceRon: 8.49, packGrams: 200, packLabel: 'caserolă 200 g', note: 'Cel mai bun preț/kg din Sibiu la bacon' }
      ],
      sibiuNote: 'Formatul de 200 g de la Lidl e cel mai economic bacon din oraș (~42 lei/kg) — cu 25% sub Kaufland.',
      per100g: { kcal: 242, protein: 18, carbs: 1, sugars: 0.5, fat: 18.5, satFat: 7, fiber: 0, salt: 2.6 },
      micros: { ironMg: 0.8, zincMg: 1.9, b12Ug: 0.7, potassiumMg: 300, cholesterolMg: 60 },
      serving: { grams: 50, label: '3–4 felii (50 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 4,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie'],
        steps: [
          'Pune feliile în tigaia rece.',
          'Foc mediu, 4–5 minute, întorcând o dată.',
          'Scoate când marginile sunt aurii.'
        ],
        yieldNote: '100 g crud = ~60 g prăjit'
      },
      taste: {
        profile: 'Afumat moderat, sărat, mai puțin gras decât baconul striat clasic',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 4, richness: 3,
        texture: 'Felii mai cărnoase, cu bandă de grăsime pe o margine',
        notes: 'Varianta „back bacon” — mai multă carne, mai puțină grăsime. La 18 g proteină e chiar decent pentru un bacon.'
      },
      stats: { taste: 78, satiety: 62, convenience: 74, versatility: 82 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Cel mai rezonabil bacon nutrițional: 18 g proteină la 242 kcal.',
      tags: ['high-protein', 'high-sodium', 'low-carb', 'processed', 'budget', 'cheap-protein', 'breakfast'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ouă', 'Roșii coapte', 'Ciuperci', 'Pâine integrală', 'Fasole'],
      tips: [
        'Dacă vrei bacon dar nu vrei 35 g grăsime, „back bacon” (cu bandă de carne) e alegerea; baconul striat e practic slănină feliată.',
        'Caserola de 200 g se împarte în 4 porții și se congelează cu hârtie între felii.',
        'Ține minte: e tot carne procesată. Nu e o strategie de proteină, e un compromis între gust și decență nutrițională.'
      ],
      warnings: [
        '2,6 g sare/100 g.',
        'Nitriți prezenți; carne procesată IARC grupa 1.'
      ],
      storage: 'Frigider 0–4 °C, 5 zile după deschidere.',
      shelfLife: '~18 zile sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro gama Pikok', 'eatntrack.ro Bacon afumat Pikok']
    },

    {
      id: 'p-slanina-afumata',
      name: 'Smoked Pork Fatback',
      nameRo: 'Slănină afumată',
      brand: 'generic (Piața Cibin / Kaufland)',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '⚠️',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Hala de carne, tarabele cu afumături', priceRon: 3.5, packGrams: 100, packLabel: '100 g la gramaj', note: '~35 lei/kg' },
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină afumături', priceRon: 4.5, packGrams: 100, packLabel: '100 g la gramaj', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Raft afumături, bucăți mari', priceRon: 38, packGrams: 1000, packLabel: 'bucată ~1 kg', note: '' }
      ],
      sibiuNote: 'Inclusă aici ca reper negativ: e cel mai ieftin produs din vitrina de mezeluri din Sibiu și cel mai slab din punct de vedere proteic.',
      per100g: { kcal: 621, protein: 9, carbs: 0, sugars: 0, fat: 65, satFat: 25, fiber: 0, salt: 2.5 },
      micros: { ironMg: 0.4, zincMg: 0.7, b12Ug: 0.4, potassiumMg: 150, cholesterolMg: 70 },
      serving: { grams: 25, label: '2 felii subțiri (25 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat puternic, sărat, gras — se topește în gură',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 3, richness: 5,
        texture: 'Grăsime pură cu un strat subțire de șorici; alunecoasă',
        notes: 'Gust bun cu ceapă și pâine, dar 65 g grăsime la 9 g proteină. E cel mai prost raport din întreaga bază de date.'
      },
      stats: { taste: 58, satiety: 44, convenience: 90, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 0, lunch: 1, snack: 1, dinner: 1, beforeBed: 0 },
      timingNote: 'Practic nu are rost într-un plan cu obiectiv proteic. E aici ca să știi ce eviți.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'low-carb', 'processed', 'budget', 'romanian-classic', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ceapă', 'Pâine de casă', 'Ardei iute', 'Usturoi'],
      tips: [
        '9 g proteină la 621 kcal — pentru 30 g de proteină din slănină ai mânca 2.070 kcal. Este cel mai ineficient „mezel proteic” posibil.',
        'Ca sursă de grăsime pentru gătit e ok și ieftină, dar nu confunda „ieftin pe kilogram” cu „ieftin pe gram de proteină”.',
        'Dacă îți place gustul, ia kaizer în loc: aceeași aromă, dublu proteină, jumătate grăsime.'
      ],
      warnings: [
        '65 g grăsime/100 g, din care 25 g saturate — 94% din calorii vin din grăsime.',
        '2,5 g sare/100 g.',
        'Nu e o sursă de proteină. E inclusă strict ca punct de comparație.'
      ],
      storage: 'Frigider sau loc răcoros; rezistă săptămâni.',
      shelfLife: '~30 zile la rece',
      dataConfidence: 'medium',
      sources: ['Valori tipice CIQUAL slănină afumată', 'Observație Piața Cibin']
    },

    {
      id: 'p-muschi-file-afumat',
      name: 'Smoked Pork Loin (Lean)',
      nameRo: 'Mușchi file afumat',
      brand: 'Cris-Tim / Elit / Meda',
      category: 'deli-processed',
      subcategory: 'Afumături & slănină',
      emoji: '🎯',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină afumături, lângă ceafă', priceRon: 9.9, packGrams: 100, packLabel: '100 g la gramaj', note: '~99 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft afumături vidate', priceRon: 10.49, packGrams: 100, packLabel: 'plic feliat 100 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Vitrină mezeluri', priceRon: 10.9, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Cel mai subestimat produs din vitrina de afumături: are aproape profilul unei pastrame, dar toată lumea trece pe lângă el spre kaizer.',
      per100g: { kcal: 147, protein: 24, carbs: 0.5, sugars: 0.2, fat: 5.5, satFat: 2, fiber: 0, salt: 2.6 },
      micros: { ironMg: 0.9, zincMg: 2.1, b12Ug: 0.8, potassiumMg: 360, cholesterolMg: 65 },
      serving: { grams: 80, label: '4 felii (80 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat curat, sărat, cu gust concentrat de mușchi de porc',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 4, richness: 2,
        texture: 'Fermă, uscată, se taie foarte subțire',
        notes: 'Dacă vrei gust de afumătură fără să înghiți 35 g grăsime, ăsta e răspunsul: 24 g proteină, 5,5 g grăsime.'
      },
      stats: { taste: 76, satiety: 80, convenience: 92, versatility: 82 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 4, dinner: 4, beforeBed: 3 },
      timingNote: 'Alternativa slabă la kaizer și bacon, cu gust aproape la fel de bun.',
      tags: ['ready-to-eat', 'high-protein', 'low-carb', 'high-sodium', 'processed', 'romanian-classic', 'mid-price', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ouă', 'Muștar', 'Castraveți murați', 'Pâine neagră', 'Salată'],
      tips: [
        'Compară pe raft: mușchi file are 24 g proteină / 5,5 g grăsime, kaizerul are 15,6 / 14. Același preț de vitrină, produs complet diferit.',
        'Rulat cu brânză cottage și mărar face un aperitiv cu 20 g proteină și sub 150 kcal.',
        'Fiind slab, se usucă repede — ține-l vidat sau înfășurat strâns.'
      ],
      warnings: [
        '2,6 g sare/100 g.',
        'Carne procesată afumată — nitriți prezenți.'
      ],
      storage: 'Frigider 0–4 °C, 5 zile de la feliere.',
      shelfLife: '~25 zile vidat',
      dataConfidence: 'medium',
      sources: ['Etichete vitrină Kaufland Sibiu', 'cristim.ro']
    },

    {
      id: 'p-parizer-pui-cristim',
      name: 'Chicken Bologna (Parizer)',
      nameRo: 'Parizer de pui',
      brand: 'Cris-Tim',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🚫',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 3.2, packGrams: 100, packLabel: '100 g la vitrină', note: '~32 lei/kg' },
        { name: 'Penny', availability: 'always', aisle: 'Raft mezeluri', priceRon: 5.99, packGrams: 200, packLabel: 'baton 200 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft mezeluri', priceRon: 3.5, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Inclus ca reper negativ. E cel mai ieftin mezel din Sibiu și, din păcate, cel mai cumpărat.',
      per100g: { kcal: 237, protein: 11.1, carbs: 5.1, sugars: 1.5, fat: 19.1, satFat: 7, fiber: 0, salt: 2.4 },
      micros: { ironMg: 0.6, zincMg: 1, b12Ug: 0.4, potassiumMg: 200, cholesterolMg: 55 },
      serving: { grams: 60, label: '3 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Moale, sărat, dulceag, cu aromă artificială de carne',
        intensity: 2, sweetness: 2, saltiness: 4, umami: 2, richness: 4,
        texture: 'Pastă omogenă, elastică, ușor spongioasă',
        notes: 'Gustul copilăriei pentru mulți, dar nutrițional e o capcană: doar 11 g proteină și 19 g grăsime. Costă puțin pe kilogram, mult pe gram de proteină.'
      },
      stats: { taste: 46, satiety: 38, convenience: 100, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 0, lunch: 2, snack: 2, dinner: 1, beforeBed: 1 },
      timingNote: 'Nu are loc într-un plan cu obiectiv proteic. E aici ca să înțelegi ce eviți.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-sodium', 'processed', 'budget', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine albă', 'Muștar', 'Castraveți murați'],
      tips: [
        'CAPCANA CENTRALĂ A CATEGORIEI: parizerul e ieftin pe kilogram (32 lei), dar la 11 g proteină costă ~29 lei per 100 g proteină — mai scump decât pieptul de pui crud (~12 lei) și cu 19 g grăsime pe deasupra.',
        'Numele „de pui” nu spune procentul. Rețetele tipice au 40–55% carne, restul fiind apă, grăsime, amidon și proteine vegetale.',
        'Dacă ai buget mic și vrei proteină: 100 g piept de pui crud costă 3,5 lei și îți dă 23 g proteină. Același preț ca parizerul, dublu proteina, o zecime grăsimea.'
      ],
      warnings: [
        'Doar 11 g proteină/100 g; 72% din calorii vin din grăsime.',
        'Conține frecvent amidon (gluten), proteine din lapte și soia, polifosfați, nitriți, potențiatori de aromă.',
        '2,4 g sare/100 g.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~14 zile',
      dataConfidence: 'high',
      sources: ['klorii.ro Parizer pui Cris-Tim', 'cristim.ro']
    },

    {
      id: 'p-parizer-porc-ieftin',
      name: 'Cheap Pork Bologna',
      nameRo: 'Parizer de porc, marcă ieftină',
      brand: 'generic (marcă proprie / discount)',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🥴',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft mezeluri, zona discount', priceRon: 5.49, packGrams: 250, packLabel: 'baton 250 g', note: '~22 lei/kg' },
        { name: 'Profi', availability: 'always', aisle: 'Raft mezeluri', priceRon: 2.6, packGrams: 100, packLabel: '100 g la vitrină', note: '' },
        { name: 'La Doi Pași', availability: 'usual', aisle: 'Frigider mezeluri', priceRon: 3.2, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Cel mai ieftin mezel pe kilogram din oraș. Și cel mai scump pe gram de proteină reală.',
      per100g: { kcal: 269, protein: 9.5, carbs: 6, sugars: 2, fat: 23, satFat: 9, fiber: 0, salt: 2.6 },
      micros: { ironMg: 0.6, zincMg: 1, b12Ug: 0.4, potassiumMg: 180, cholesterolMg: 55 },
      serving: { grams: 60, label: '3 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, dulceag, cu gust puternic de aditivi și grăsime',
        intensity: 3, sweetness: 3, saltiness: 4, umami: 2, richness: 5,
        texture: 'Spongioasă, elastică, lasă film gras pe cerul gurii',
        notes: 'Nu are nimic de recomandat. Îl includem pentru contrast: dacă înțelegi de ce e prost, înțelegi toată categoria.'
      },
      stats: { taste: 34, satiety: 34, convenience: 100, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 0, lunch: 1, snack: 1, dinner: 1, beforeBed: 0 },
      timingNote: 'Niciodată, dacă ai o alternativă.',
      tags: ['ready-to-eat', 'high-sodium', 'high-kcal', 'processed', 'budget'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: false, porkFree: false },
      pairings: ['Pâine albă', 'Muștar'],
      tips: [
        'Regula simplă de raft: dacă eticheta NU declară procentul de carne, procentul e mic. Producătorii care au 85% carne îl scriu cu litere mari.',
        'Ordinea ingredientelor e ordinea cantității. Dacă „apă” e pe locul 2, plătești apă la preț de carne.',
        'La 9,5 g proteină și 23 g grăsime, e mai aproape de o margarină cu aromă de carne decât de un aliment proteic.'
      ],
      warnings: [
        'Sub 10 g proteină/100 g — cel mai slab profil proteic din categorie.',
        'Conține uzual: apă, slănină, amidon, proteine de soia și lapte, polifosfați (E450–452), nitriți (E250), glutamat (E621), carmin (E120).',
        '2,6 g sare/100 g.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile.',
      shelfLife: '~14 zile',
      dataConfidence: 'low',
      sources: ['Etichete raft discount Sibiu', 'Valori tipice parizer economic']
    },

    {
      id: 'p-crenvursti-ieftini',
      name: 'Cheap Hot Dog Sausages',
      nameRo: 'Crenvurști ieftini (economici)',
      brand: 'generic (marcă proprie discount)',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '❌',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft frigorific crenvurști', priceRon: 6.99, packGrams: 400, packLabel: 'pungă 400 g', note: '~17 lei/kg' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft frigorific, gama economică', priceRon: 7.49, packGrams: 400, packLabel: 'pungă 400 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft mezeluri', priceRon: 7.99, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Îi găsești în orice magazin din Sibiu la sub 20 lei/kg. Prețul te păcălește: e cel mai prost raport proteină/leu din categorie.',
      per100g: { kcal: 254, protein: 10, carbs: 4, sugars: 1.5, fat: 22, satFat: 8.5, fiber: 0, salt: 2.3 },
      micros: { ironMg: 0.7, zincMg: 1.1, b12Ug: 0.5, potassiumMg: 190, cholesterolMg: 58 },
      serving: { grams: 100, label: '2 crenvurști (100 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 2,
      cooking: {
        method: 'boil', difficulty: 'trivial', equipment: ['crăticioară'],
        steps: [
          'Pune apa la fiert.',
          'Oprește focul când fierbe și bagă crenvurștii 5 minute în apa fierbinte (nu la clocot, crapă).',
          'Scoate și servește.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Sărat, moale, cu aromă artificială de fum; gust „de cantină”',
        intensity: 2, sweetness: 2, saltiness: 4, umami: 2, richness: 4,
        texture: 'Spongioasă, apoasă, cu membrană cauciucată',
        notes: 'Se mănâncă repede și nu satură. Conținut de carne frecvent sub 50%, restul fiind apă, grăsime și amidon.'
      },
      stats: { taste: 40, satiety: 36, convenience: 92, versatility: 58 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 0, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Mâncare de avarie, nu de plan.',
      tags: ['microwave', 'high-sodium', 'processed', 'budget', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: false, porkFree: false },
      pairings: ['Muștar', 'Chiflă', 'Ketchup', 'Castraveți murați'],
      tips: [
        'Regula de raft pentru crenvurști: caută „conținut de carne” pe etichetă. Sub 60% = ieftin din motive care se văd în cifre.',
        'O pungă de 400 g la 7 lei pare o afacere — dar dă doar 40 g proteină totală. 400 g piept de pui crud costă 14 lei și dă 92 g proteină.',
        'Nu-i fierbe la clocot: crapă și pierd și mai mult din conținut în apă.'
      ],
      warnings: [
        '10 g proteină/100 g; 78% din calorii din grăsime.',
        'Conțin frecvent carne separată mecanic, amidon, proteine vegetale, polifosfați și nitriți.',
        '2,3 g sare/100 g.',
        'Carne procesată, IARC grupa 1 — consum limitat, mai ales la copii.'
      ],
      storage: 'Frigider 0–4 °C; după deschidere, 3 zile în apă rece schimbată zilnic sau ambalaj închis.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'low',
      sources: ['Etichete raft discount Sibiu', 'Valori tipice crenvurști economici']
    },

    {
      id: 'p-crenvursti-piept-pui-cristim',
      name: 'Chicken Breast Frankfurters (Premium)',
      nameRo: 'Crenvurști cu piept de pui',
      brand: 'Cris-Tim',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🌭',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft frigorific crenvurști, zona premium', priceRon: 14.99, packGrams: 300, packLabel: 'pungă 300 g', note: '~50 lei/kg' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft crenvurști', priceRon: 15.49, packGrams: 300, packLabel: 'pungă 300 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft frigorific', priceRon: 15.99, packGrams: 300, packLabel: 'pungă 300 g', note: '' }
      ],
      sibiuNote: 'Diferența față de crenvurștii de 17 lei/kg e reală: 50% piept de pui declarat, față de sub 50% carne totală la cei ieftini.',
      per100g: { kcal: 221, protein: 14.8, carbs: 8.9, sugars: 1.8, fat: 14, satFat: 4.5, fiber: 0, salt: 2 },
      micros: { ironMg: 0.6, zincMg: 1.1, b12Ug: 0.4, potassiumMg: 250, cholesterolMg: 55 },
      serving: { grams: 100, label: '2 crenvurști (100 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 2,
      cooking: {
        method: 'boil', difficulty: 'trivial', equipment: ['crăticioară'],
        steps: [
          'Fierbe apa, oprește focul.',
          'Bagă crenvurștii 5 minute în apa fierbinte.',
          'Scoate și servește cu muștar.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Curat, cu gust real de pui, mai puțin sărat decât media',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 3, richness: 3,
        texture: 'Mai fermă și mai cărnoasă decât crenvurștii ieftini',
        notes: 'Cel mai bun crenvurst de pe raftul românesc din punct de vedere nutrițional. Tot are 14 g grăsime și 8,9 g carbohidrați — nu e un aliment „curat”.'
      },
      stats: { taste: 66, satiety: 52, convenience: 90, versatility: 66 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Compromisul decent dacă mănânci crenvurști: 15 g proteină în loc de 10.',
      tags: ['microwave', 'high-sodium', 'processed', 'mid-price', 'kid-friendly', 'ready-to-eat'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Muștar', 'Chiflă integrală', 'Castraveți murați', 'Salată de varză'],
      tips: [
        'Uită-te după „piept de pui 50%” pe față. E singurul crenvurst din raft care declară cifra explicit.',
        'Cei 8,9 g carbohidrați vin din amidon și sirop de glucoză — de-asta au textura moale. Nu e o eroare de etichetă.',
        'Chiar și așa: 100 g îți dau 15 g proteină la 221 kcal. Un plic de piept de pui feliat îți dă 33 g la 162 kcal, la preț similar.'
      ],
      warnings: [
        '2 g sare/100 g.',
        '57% din calorii vin din grăsime.',
        'Conține amidon și, uzual, proteine din lapte — nu e fără gluten sau fără lactoză.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'high',
      sources: ['eatntrack.ro Crenvurști cu piept de pui Cris-Tim', 'cristim.ro']
    },

    {
      id: 'p-crenvursti-vienezi-premium',
      name: 'Vienna Sausages (High Meat Content)',
      nameRo: 'Crenvurști vienezi cu conținut ridicat de carne',
      brand: 'Caroli / Campofrio',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🇦🇹',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Raft crenvurști premium', priceRon: 13.99, packGrams: 250, packLabel: 'pungă 250 g', note: '~56 lei/kg' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft frigorific crenvurști', priceRon: 13.49, packGrams: 250, packLabel: 'pungă 250 g', note: '' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft crenvurști', priceRon: 14.99, packGrams: 250, packLabel: 'pungă 250 g', note: '' }
      ],
      sibiuNote: 'Varianta „de weekend” pentru hot dog. Se găsește peste tot în Sibiu, dar merită doar la promoție.',
      per100g: { kcal: 252, protein: 15, carbs: 2, sugars: 1, fat: 20.5, satFat: 8, fiber: 0, salt: 2.2 },
      micros: { ironMg: 0.9, zincMg: 1.6, b12Ug: 0.7, potassiumMg: 260, cholesterolMg: 62 },
      serving: { grams: 100, label: '2 crenvurști (100 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 2,
      cooking: {
        method: 'boil', difficulty: 'trivial', equipment: ['crăticioară'],
        steps: ['Încălzește apa fără să clocotească.', 'Ține crenvurștii 5–6 minute.', 'Servește imediat.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Afumat fin, sărat, cu pocnet la mușcătură dacă au membrană naturală',
        intensity: 3, sweetness: 1, saltiness: 4, umami: 4, richness: 4,
        texture: 'Fermă, cu membrană care pocnește; mult superioară crenvurștilor ieftini',
        notes: 'Gustul e clar mai bun. Nutrițional, 20,5 g grăsime la 15 g proteină îl trimite tot în zona „plăcere”.'
      },
      stats: { taste: 76, satiety: 52, convenience: 88, versatility: 68 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Weekend food. 100 g = 252 kcal, din care 73% grăsime.',
      tags: ['ready-to-eat', 'microwave', 'high-sodium', 'high-kcal', 'processed', 'mid-price', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar de Dijon', 'Chiflă', 'Varză murată', 'Cartofi la cuptor'],
      tips: [
        'Membrana naturală („cu maț natural”) e semnul unui produs mai bun — pocnește la mușcătură.',
        'Nu-i tăia în cruce înainte de fierbere; pierzi grăsimea și aroma în apă și rămâne o cârpă.',
        'Compară eticheta: „conținut de carne 85%” la Caroli premium vs „carne de porc și pasăre” fără procent la variantele ieftine.'
      ],
      warnings: [
        '2,2 g sare/100 g.',
        '20,5 g grăsime/100 g — 73% din calorii.',
        'Carne procesată; nitriți.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~25 zile sigilat',
      dataConfidence: 'medium',
      sources: ['caroli.ro', 'Etichete raft Carrefour Sibiu']
    },

    {
      id: 'p-crenvursti-curcan-fox',
      name: 'Turkey Frankfurters',
      nameRo: 'Crenvurști de curcan',
      brand: 'Fox / Aldis',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft frigorific crenvurști', priceRon: 11.99, packGrams: 300, packLabel: 'pungă 300 g', note: '~40 lei/kg' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft crenvurști', priceRon: 11.49, packGrams: 300, packLabel: 'pungă 300 g', note: '' },
        { name: 'Profi', availability: 'occasional', aisle: 'Raft mezeluri', priceRon: 12.49, packGrams: 300, packLabel: 'pungă 300 g', note: '' }
      ],
      sibiuNote: 'Alegerea potrivită dacă nu mănânci porc; disponibilitate mai slabă decât variantele clasice, verifică raftul de sus.',
      per100g: { kcal: 190, protein: 14, carbs: 3, sugars: 1, fat: 13.5, satFat: 4.2, fiber: 0, salt: 2.1 },
      micros: { ironMg: 1, zincMg: 1.5, b12Ug: 0.6, potassiumMg: 270, cholesterolMg: 58 },
      serving: { grams: 100, label: '2 crenvurști (100 g)' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 2,
      cooking: {
        method: 'boil', difficulty: 'trivial', equipment: ['crăticioară'],
        steps: ['Încălzește apa până aproape de fierbere.', 'Ține crenvurștii 5 minute.', 'Scoate și servește.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Blând, ușor dulceag, mai puțin gras la gust decât cei de porc',
        intensity: 2, sweetness: 2, saltiness: 3, umami: 2, richness: 3,
        texture: 'Mai fermă și mai uscată decât cei de porc',
        notes: 'Cel mai slab crenvurst din raft ca grăsime (13,5 g). Gustul e mai sărac, dar profilul e mai bun.'
      },
      stats: { taste: 56, satiety: 50, convenience: 90, versatility: 64 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Varianta cea mai puțin proastă din familia crenvurștilor.',
      tags: ['ready-to-eat', 'microwave', 'high-sodium', 'processed', 'mid-price', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: true, porkFree: true },
      pairings: ['Muștar', 'Chiflă integrală', 'Salată verde', 'Roșii'],
      tips: [
        '„De curcan” nu garantează procentul de carne — verifică lista, unele variante au tot carne separată mecanic.',
        'Cu 13,5 g grăsime sunt cei mai slabi crenvurști de pe raft, dar tot 64% din calorii vin din grăsime.',
        'Se rumenesc bine în airfryer 6 minute la 180 °C și devin mult mai gustoși decât fierți.'
      ],
      warnings: [
        '2,1 g sare/100 g.',
        'Conțin frecvent amidon și proteine adăugate.',
        'Carne procesată IARC grupa 1.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~21 zile sigilat',
      dataConfidence: 'low',
      sources: ['Etichete raft Kaufland Sibiu', 'Valori tipice crenvurști de curcan']
    },

    {
      id: 'p-hot-dog-frankfurter-premium',
      name: 'Premium Hot Dog Frankfurters',
      nameRo: 'Hot dog frankfurter premium',
      brand: 'Campofrio / Cris-Tim Selecție',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🍽️',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Raft crenvurști premium, gramaj mare', priceRon: 17.99, packGrams: 300, packLabel: 'pungă 300 g (6 buc. mari)', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft frigorific', priceRon: 18.49, packGrams: 300, packLabel: 'pungă 300 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft horeca', priceRon: 52, packGrams: 1000, packLabel: 'pachet 1 kg', note: 'Doar cu card Metro' }
      ],
      sibiuNote: 'Formatul lung, de hot dog american. Metro (Șos. Alba Iulia) are pachetul de 1 kg la 52 lei — cel mai bun preț dacă faci hot dogs pentru o gașcă.',
      per100g: { kcal: 285, protein: 13, carbs: 2, sugars: 1, fat: 25, satFat: 10, fiber: 0, salt: 2.4 },
      micros: { ironMg: 1, zincMg: 1.8, b12Ug: 0.8, potassiumMg: 250, cholesterolMg: 65 },
      serving: { grams: 100, label: '2 bucăți (100 g)' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 4,
      cooking: {
        method: 'grill', difficulty: 'trivial', equipment: ['tigaie grill'],
        steps: [
          'Crestează ușor pe lungime.',
          'Pune-i pe tigaia grill încinsă, 3 minute pe fiecare parte.',
          'Servește în chiflă cu muștar și ceapă.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Afumat pronunțat, sărat, gras, cu pocnet la mușcătură',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 4, richness: 5,
        texture: 'Fermă, suculentă, cu membrană tare',
        notes: 'Excelent ca hot dog. Nutrițional e ultimul loc din familie: 25 g grăsime la 13 g proteină.'
      },
      stats: { taste: 82, satiety: 50, convenience: 82, versatility: 58 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Mâncare de plăcere, nu de plan.',
      tags: ['high-kcal', 'high-sodium', 'processed', 'mid-price', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Chiflă hot dog', 'Muștar', 'Ceapă crocantă', 'Varză murată', 'Ketchup'],
      tips: [
        'Gustul mai bun vine din mai multă grăsime, nu din mai multă carne. Asta e regula generală a categoriei.',
        'Pe grătar, nu în apă: prăjirea scoate 3–4 g grăsime la 100 g și dă textură mult mai bună.',
        'Un hot dog complet (crenvurst + chiflă + sosuri) e ~450 kcal și 15 g proteină. Un plic de piept de pui feliat e 162 kcal și 33 g.'
      ],
      warnings: [
        '25 g grăsime/100 g, 79% din calorii.',
        '2,4 g sare/100 g.',
        'Carne procesată; grătarul intens adaugă HAP-uri.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere.',
      shelfLife: '~25 zile sigilat',
      dataConfidence: 'low',
      sources: ['Etichete raft Carrefour Sibiu', 'Valori tipice frankfurter premium']
    },

    {
      id: 'p-toba',
      name: 'Head Cheese (Tobă)',
      nameRo: 'Tobă',
      brand: 'generic (Piața Cibin / Kaufland)',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🫙',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 4.9, packGrams: 100, packLabel: '100 g la vitrină', note: '~49 lei/kg' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Hala de carne, iarna (perioada Crăciunului)', priceRon: 4.5, packGrams: 100, packLabel: '100 g', note: 'Producție artizanală, decembrie–ianuarie' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrină mezeluri', priceRon: 5.4, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Produs de iarnă. La Piața Cibin, în decembrie, apar tobele de casă din tăierea porcului — gust incomparabil, dar fără etichetă nutrițională.',
      per100g: { kcal: 253, protein: 15, carbs: 1, sugars: 0.3, fat: 21, satFat: 8, fiber: 0, salt: 2 },
      micros: { ironMg: 1.4, zincMg: 2, b12Ug: 0.9, potassiumMg: 200, cholesterolMg: 110 },
      serving: { grams: 80, label: '2 felii (80 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, gelatinos, cu usturoi și piper; gust puternic de porc',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 4, richness: 5,
        texture: 'Mozaic de bucăți de carne și organe prinse în aspic; se topește',
        notes: 'Iubit sau detestat. Proteina de 15 g e diluată de 21 g grăsime și mult colagen (care nu e proteină completă).'
      },
      stats: { taste: 55, satiety: 54, convenience: 92, versatility: 40 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Tradiție de iarnă, nu strategie nutrițională.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'processed', 'romanian-classic', 'budget', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ceapă roșie', 'Muștar', 'Pâine de casă', 'Murături', 'Hrean'],
      tips: [
        'O bună parte din „proteina” din tobă e colagen din șorici și cartilaje — nu are profil complet de aminoacizi esențiali. 15 g pe etichetă valorează mai puțin decât 15 g din piept de pui.',
        'Colesterolul e ridicat (~110 mg/100 g) pentru că include organe.',
        'Toba de casă din decembrie e mult mai bună la gust, dar valorile pot varia enorm (grăsime între 15 și 30 g).'
      ],
      warnings: [
        'Conține organe — colesterol ridicat.',
        '2 g sare/100 g și 21 g grăsime.',
        'Produsele artizanale de piață nu au etichetă și nu trec prin controlul de proces al fabricilor.'
      ],
      storage: 'Frigider 0–4 °C, 3–4 zile. Nu se congelează bine (aspicul se separă).',
      shelfLife: '~7 zile',
      dataConfidence: 'low',
      sources: ['Etichete vitrină Kaufland Sibiu', 'Valori tipice tobă de porc']
    },

    {
      id: 'p-lebarvurst',
      name: 'Liver Sausage (Lebăr)',
      nameRo: 'Lebărvurst (lebăr)',
      brand: 'Cris-Tim / Aldis / marcă proprie',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 3.8, packGrams: 100, packLabel: '100 g la vitrină', note: '~38 lei/kg' },
        { name: 'Penny', availability: 'always', aisle: 'Raft mezeluri', priceRon: 6.99, packGrams: 200, packLabel: 'baton 200 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft mezeluri', priceRon: 4.2, packGrams: 100, packLabel: '100 g', note: '' }
      ],
      sibiuNote: 'Cel mai ieftin mezel „de întins pe pâine” din Sibiu. Popular la micul dejun, dar cu profil nutrițional slab.',
      per100g: { kcal: 321, protein: 12, carbs: 3, sugars: 1, fat: 29, satFat: 11, fiber: 0, salt: 1.9 },
      micros: { ironMg: 5, zincMg: 2.2, b12Ug: 8, potassiumMg: 200, cholesterolMg: 150 },
      serving: { grams: 50, label: '2 linguri, întins pe pâine (50 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['cuțit'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cremos, sărat, cu gust puternic de ficat și ceapă',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 4, richness: 5,
        texture: 'Pastă fină, untoasă, se întinde ușor',
        notes: 'Are un lucru bun: fierul și B12 (din ficat) sunt reale și consistente. Restul — 29 g grăsime la 12 g proteină — nu.'
      },
      stats: { taste: 60, satiety: 46, convenience: 96, versatility: 45 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 0, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Un mezel de mic dejun cu micronutrienți buni și macro slabe.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'iron-rich', 'b12', 'processed', 'budget', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine prăjită', 'Ceapă verde', 'Castraveți murați', 'Muștar'],
      tips: [
        'Singurul argument real pentru lebăr: 5 mg fier și ~8 µg B12 la 100 g. Dacă ai anemie, 50 g acoperă necesarul zilnic de B12 de câteva ori.',
        'Ficatul acumulează vitamina A — nu mânca zilnic cantități mari, mai ales în sarcină.',
        'Ca proteină e prost: 12 g la 321 kcal. Folosește-l ca „supliment de fier cu gust bun”, nu ca sursă de proteină.'
      ],
      warnings: [
        'Colesterol ~150 mg/100 g și 29 g grăsime.',
        'Vitamina A din ficat — evită consumul mare în sarcină.',
        'Conține frecvent amidon, proteine din lapte și soia.',
        '1,9 g sare/100 g.'
      ],
      storage: 'Frigider 0–4 °C, 3 zile după deschidere; se oxidează la suprafață (devine gri).',
      shelfLife: '~14 zile',
      dataConfidence: 'medium',
      sources: ['Etichete vitrină Kaufland Sibiu', 'Valori tipice lebărvurst']
    },

    {
      id: 'p-salam-vara',
      name: 'Summer Salami',
      nameRo: 'Salam de vară',
      brand: 'Aldis / Salonta / marcă proprie',
      category: 'deli-processed',
      subcategory: 'Emulsii & mezeluri ieftine',
      emoji: '☀️',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrină mezeluri la gramaj', priceRon: 4.6, packGrams: 100, packLabel: '100 g la vitrină', note: '~46 lei/kg' },
        { name: 'Penny', availability: 'always', aisle: 'Raft mezeluri feliate', priceRon: 5.99, packGrams: 150, packLabel: 'caserolă 150 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft mezeluri', priceRon: 5.2, packGrams: 100, packLabel: 'plic 100 g', note: '' }
      ],
      sibiuNote: 'Mezelul „standard” de sandviș din România. Ieftin, omniprezent, mediocru.',
      per100g: { kcal: 325, protein: 14, carbs: 2, sugars: 0.8, fat: 29, satFat: 11, fiber: 0, salt: 2.8 },
      micros: { ironMg: 1.1, zincMg: 2, b12Ug: 0.9, potassiumMg: 280, cholesterolMg: 72 },
      serving: { grams: 60, label: '4 felii (60 g)' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat, afumat ușor, cu boabe de piper și grăsime vizibilă',
        intensity: 3, sweetness: 1, saltiness: 4, umami: 3, richness: 5,
        texture: 'Semi-fermă, cu puncte albe de slănină',
        notes: 'Nici bun, nici rău la gust. Nutrițional e slab: 29 g grăsime la 14 g proteină, adică 80% din calorii din grăsime.'
      },
      stats: { taste: 58, satiety: 48, convenience: 100, versatility: 62 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 1, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Alternativa proastă la pastramă, la același raft.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-kcal', 'high-sodium', 'processed', 'budget', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine albă', 'Roșii', 'Ceapă', 'Muștar', 'Cașcaval'],
      tips: [
        'Test rapid de raft: dacă un mezel are peste 25 g grăsime și sub 20 g proteină, nu e o alegere proteică — indiferent cum se numește.',
        'Aceleași 5 lei la vitrina Kaufland îți cumpără 100 g de pastramă de pui (21 g proteină, 3 g grăsime) în loc de salam de vară (14 g proteină, 29 g grăsime).',
        'Verifică lista: multe variante au proteine de soia și amidon în primele 5 ingrediente.'
      ],
      warnings: [
        '2,8 g sare/100 g.',
        '80% din calorii vin din grăsime.',
        'Poate conține gluten, soia și lapte.'
      ],
      storage: 'Frigider 0–4 °C, 4 zile.',
      shelfLife: '~25 zile sigilat',
      dataConfidence: 'low',
      sources: ['Etichete vitrină Kaufland Sibiu', 'Valori tipice salam de vară']
    },

    {
      id: 'p-scandia-sibiu-porc-suc-propriu',
      name: 'Canned Pork in Own Juices',
      nameRo: 'Carne de porc în suc propriu',
      brand: 'Scandia Sibiu',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🏭',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve de carne, culoarul cu conserve', priceRon: 16.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft conserve carne', priceRon: 17.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft conserve', priceRon: 16.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Auchan', availability: 'always', aisle: 'Raft conserve carne', priceRon: 17.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'PRODUS SIBIAN AUTENTIC. Scandia Food are fabrica în Sibiu — e singurul producător mare de conserve de carne din oraș. Cumpărând asta, cumperi local, la propriu.',
      per100g: { kcal: 166, protein: 17.5, carbs: 0, sugars: 0, fat: 10.7, satFat: 3.7, fiber: 0, salt: 1.5 },
      micros: { ironMg: 1.2, zincMg: 2.5, b12Ug: 0.9, potassiumMg: 300, cholesterolMg: 62 },
      serving: { grams: 150, label: 'jumătate de conservă (150 g)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'tigaie sau microunde'],
        steps: [
          'Deschide conserva și scurge excesul de gelatină dacă vrei.',
          'Încălzește 2–3 minute în tigaie sau 90 de secunde la microunde.',
          'Servește cu mămăligă, cartofi sau fasole.'
        ],
        yieldNote: 'Conserva de 300 g conține ~250 g carne + gelatină'
      },
      taste: {
        profile: 'Sărat moderat, cu gust curat de porc fiert; gelatina dă untuozitate',
        intensity: 3, sweetness: 0, saltiness: 3, umami: 4, richness: 4,
        texture: 'Bucăți de carne fragede care se destramă, prinse în gelatină',
        notes: 'Surprinzător de bună pentru o conservă. Sarea de 1,5 g e sub media mezelurilor — un plus real.'
      },
      stats: { taste: 64, satiety: 76, convenience: 92, versatility: 84 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Masă completă de urgență: 300 g = 52 g proteină și 500 kcal, fără frigider.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'high-protein', 'low-carb', 'processed', 'local-sibiu', 'romanian-classic', 'meal-prep', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Mămăligă', 'Fasole boabe', 'Cartofi', 'Murături', 'Ceapă'],
      tips: [
        'Ține 2 conserve în dulap ca plan de rezervă: nu au nevoie de frigider, țin 3 ani și îți dau 52 g proteină în 4 minute.',
        'Scurge gelatina și prăjește carnea 3 minute în tigaie — se rumenește și gustul urcă masiv.',
        'Sarea (1,5 g/100 g) e mai mică decât la aproape orice mezel feliat. E una dintre puținele surse de carne procesată cu sare rezonabilă.'
      ],
      warnings: [
        '1,5 g sare/100 g — o conservă întreagă = 4,5 g sare, adică 75% din limita zilnică.',
        '10,7 g grăsime/100 g — 58% din calorii.',
        'Verifică să nu fie conserva bombată sau lovită.'
      ],
      storage: 'Loc uscat, temperatura camerei. După deschidere, transferă în recipient de sticlă, frigider, 2 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'high',
      sources: ['shop.scandia.ro fișă produs', 'carrefour.ro']
    },

    {
      id: 'p-scandia-sibiu-vita-suc-propriu',
      name: 'Canned Beef in Own Juices',
      nameRo: 'Carne de vită în suc propriu',
      brand: 'Scandia Sibiu',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🐮',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve de carne', priceRon: 19.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft conserve carne', priceRon: 20.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft conserve', priceRon: 19.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'Tot de la fabrica Scandia din Sibiu. Varianta halal-compatibilă și porkFree a conservei clasice.',
      per100g: { kcal: 189, protein: 16.6, carbs: 0, sugars: 0, fat: 13.6, satFat: 5.1, fiber: 0, salt: 1.5 },
      micros: { ironMg: 2.4, zincMg: 4, b12Ug: 2, potassiumMg: 290, cholesterolMg: 68 },
      serving: { grams: 150, label: 'jumătate de conservă (150 g)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'tigaie'],
        steps: [
          'Deschide conserva, scurge gelatina.',
          'Încălzește 3 minute în tigaie, la foc mediu.',
          'Servește cu garnitură.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Gust profund de vită fiartă îndelung, sărat moderat',
        intensity: 4, sweetness: 0, saltiness: 3, umami: 5, richness: 4,
        texture: 'Fibre de vită care se destramă la furculiță',
        notes: 'Mai gustoasă decât varianta de porc și cu 2 mg fier în plus, dar și cu 3 g grăsime în plus.'
      },
      stats: { taste: 68, satiety: 76, convenience: 92, versatility: 86 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Bază excelentă pentru o mâncare rapidă cu fasole sau legume.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'high-protein', 'low-carb', 'iron-rich', 'b12', 'processed', 'local-sibiu', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Fasole boabe', 'Mămăligă', 'Orez', 'Legume la tigaie', 'Hrean'],
      tips: [
        'Destramă carnea cu furculița și amestec-o cu fasole din conservă: masă de 700 kcal, 55 g proteină, în 6 minute, fără frigider.',
        'Fierul hemic (2,4 mg/100 g) e absorbit mult mai bine decât cel din legume.',
        'La 20 lei conserva, iese ~40 lei per 100 g proteină — nu e ieftin, dar e proteină completă care nu expiră.'
      ],
      warnings: [
        '1,5 g sare/100 g; conserva întreagă = 4,5 g sare.',
        '13,6 g grăsime/100 g.',
        'Carne roșie procesată — nu zilnic.'
      ],
      storage: 'Loc uscat. După deschidere, frigider în recipient închis, 2 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'high',
      sources: ['shop.scandia.ro fișă produs', 'carrefour.ro']
    },

    {
      id: 'p-bucegi-carne-porc',
      name: 'Bucegi Canned Pork (65% Meat)',
      nameRo: 'Bucegi carne de porc, 65% carne',
      brand: 'Bucegi (Scandia Sibiu)',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '⛰️',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft conserve de carne', priceRon: 11.49, packGrams: 300, packLabel: 'conservă 300 g', note: 'Varianta economică a Scandia' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve', priceRon: 11.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft conserve', priceRon: 12.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'Brandul Bucegi aparține tot Scandia Sibiu — e linia de buget. 65% carne declarat, față de ~85% la Scandia Sibiu.',
      per100g: { kcal: 199, protein: 14.4, carbs: 3.4, sugars: 0.8, fat: 14.2, satFat: 4.9, fiber: 0, salt: 1.7 },
      micros: { ironMg: 1, zincMg: 2, b12Ug: 0.7, potassiumMg: 260, cholesterolMg: 58 },
      serving: { grams: 150, label: 'jumătate de conservă (150 g)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'tigaie'],
        steps: ['Deschide conserva.', 'Încălzește 3 minute în tigaie sau 90 s la microunde.', 'Servește.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Sărat, gras, cu gust mai difuz decât varianta Scandia Sibiu',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 3, richness: 4,
        texture: 'Bucăți mai mici de carne, mai multă gelatină și grăsime',
        notes: 'Se vede diferența de 20 de puncte procentuale de carne: mai puțină proteină, mai multă grăsime, gust mai plat. Dar și 5 lei mai ieftină.'
      },
      stats: { taste: 54, satiety: 66, convenience: 92, versatility: 78 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Rezerva de dulap ieftină; mai puțină proteină per leu decât varianta Scandia Sibiu.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'processed', 'budget', 'local-sibiu', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Mămăligă', 'Cartofi', 'Fasole', 'Muștar', 'Murături'],
      tips: [
        'Compară pe raft: Bucegi = 65% carne, 14,4 g proteină, 12 lei. Scandia Sibiu = 17,5 g proteină, 17 lei. Pe gram de proteină, Scandia Sibiu e chiar mai ieftin.',
        'Cei 3,4 g carbohidrați vin din amidon adăugat — semnul clasic al liniei de buget.',
        'Bună pentru cămara de urgență, unde prețul absolut contează mai mult decât densitatea proteică.'
      ],
      warnings: [
        '1,7 g sare/100 g.',
        'Conține amidon; verifică eticheta pentru gluten.',
        '64% din calorii vin din grăsime.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile, în recipient închis.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'high',
      sources: ['shop.scandia.ro Bucegi 65% carne', 'Etichete raft Sibiu']
    },

    {
      id: 'p-bucegi-carne-pasare',
      name: 'Bucegi Canned Poultry (65% Meat)',
      nameRo: 'Bucegi carne de pasăre, 65% carne',
      brand: 'Bucegi (Scandia Sibiu)',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Raft conserve de carne', priceRon: 10.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve', priceRon: 11.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft conserve carne', priceRon: 11.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'Varianta fără porc a conservei Bucegi, tot de la Scandia Sibiu.',
      per100g: { kcal: 185, protein: 14, carbs: 3.4, sugars: 0.8, fat: 12.8, satFat: 4, fiber: 0, salt: 1.7 },
      micros: { ironMg: 1, zincMg: 1.5, b12Ug: 0.5, potassiumMg: 250, cholesterolMg: 60 },
      serving: { grams: 150, label: 'jumătate de conservă (150 g)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'tigaie'],
        steps: ['Deschide conserva.', 'Încălzește 3 minute.', 'Servește cu garnitură.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Mai blând decât varianta de porc, ușor fad, sărat moderat',
        intensity: 2, sweetness: 1, saltiness: 3, umami: 3, richness: 3,
        texture: 'Carne de pasăre destrămată, cu gelatină',
        notes: 'Are nevoie de condimente. Simplă e plictisitoare, dar ca bază pentru o tocăniță rapidă e ok.'
      },
      stats: { taste: 50, satiety: 64, convenience: 92, versatility: 80 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Rezervă de cămară pentru cei care nu mănâncă porc.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'processed', 'budget', 'local-sibiu'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Orez', 'Mazăre', 'Boia', 'Ceapă călită', 'Mămăligă'],
      tips: [
        'Adaugă boia, usturoi și puțină pastă de roșii: în 6 minute devine o tocăniță decentă.',
        '„Carne de pasăre” înseamnă frecvent amestec de pui și curcan, inclusiv părți grase — nu piept.',
        'Ține conserve din astea în mașină/rucsac pentru drumeții: nu au nevoie de frigider.'
      ],
      warnings: [
        '1,7 g sare/100 g.',
        'Conține amidon adăugat.',
        '62% din calorii vin din grăsime.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'high',
      sources: ['shop.scandia.ro Bucegi carne pasăre 65%', 'Etichete raft Sibiu']
    },

    {
      id: 'p-conserva-pui-suc-propriu',
      name: 'Canned Chicken in Own Juices',
      nameRo: 'Carne de pui în suc propriu',
      brand: 'Scandia Sibiu / Sadu',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🐤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve de carne', priceRon: 15.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft conserve carne', priceRon: 16.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Raft conserve', priceRon: 16.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'Cea mai slabă conservă de carne de pe raftul din Sibiu — 20 g proteină și doar 7 g grăsime.',
      per100g: { kcal: 145, protein: 20, carbs: 0.5, sugars: 0.2, fat: 7, satFat: 2.2, fiber: 0, salt: 1.4 },
      micros: { ironMg: 0.8, zincMg: 1.4, b12Ug: 0.4, potassiumMg: 300, cholesterolMg: 65 },
      serving: { grams: 150, label: 'jumătate de conservă (150 g)' },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'tigaie'],
        steps: ['Deschide și scurge sucul.', 'Rumenește 3 minute în tigaie.', 'Servește peste orez sau salată.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Blând, ușor sărat, gust de pui fiert',
        intensity: 2, sweetness: 0, saltiness: 3, umami: 3, richness: 2,
        texture: 'Fibre de pui care se destramă, ușor umede',
        notes: 'Fadă simplă, dar e cea mai bună conservă din raft ca profil: 20 g proteină, 7 g grăsime, 1,4 g sare.'
      },
      stats: { taste: 52, satiety: 78, convenience: 92, versatility: 88 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Cel mai apropiat lucru de piept de pui gătit, dintr-o cutie care nu expiră.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'high-protein', 'low-carb', 'processed', 'meal-prep', 'local-sibiu', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Orez', 'Salată de varză', 'Maioneză light', 'Muștar', 'Porumb dulce'],
      tips: [
        'Amestecată cu iaurt grecesc, muștar și ceapă verde devine o salată de pui cu 25 g proteină în 3 minute.',
        'Scurge tot sucul: acolo stă cea mai mare parte din sare.',
        'Ține una la birou pentru zilele când nu apuci să iei prânz.'
      ],
      warnings: [
        '1,4 g sare/100 g — o conservă întreagă = 4,2 g sare.',
        'Textura e mai moale decât pieptul gătit proaspăt; unora nu le place.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile în recipient închis.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'medium',
      sources: ['scandia.ro conserve carne', 'Etichete raft Sibiu']
    },

    {
      id: 'p-pate-ardealul-porc',
      name: 'Pork Liver Pâté',
      nameRo: 'Pate de ficat de porc',
      brand: 'Ardealul (Scandia Sibiu)',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🍞',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve, secțiunea pate', priceRon: 3.49, packGrams: 100, packLabel: 'conservă 100 g', note: 'Cel mai vândut pate din România' },
        { name: 'Penny', availability: 'always', aisle: 'Raft conserve', priceRon: 3.29, packGrams: 100, packLabel: 'conservă 100 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft conserve', priceRon: 3.69, packGrams: 100, packLabel: 'conservă 100 g', note: '' },
        { name: 'Auchan', availability: 'always', aisle: 'Raft conserve carne', priceRon: 3.59, packGrams: 100, packLabel: 'conservă 100 g', note: '' }
      ],
      sibiuNote: 'Produs de Scandia Food în Sibiu — încă un produs local pe care nu-l asociezi cu orașul. Se găsește în absolut orice magazin.',
      per100g: { kcal: 215, protein: 10.8, carbs: 4, sugars: 1.3, fat: 17, satFat: 5.9, fiber: 1.3, salt: 1.4 },
      micros: { ironMg: 4, zincMg: 1.8, b12Ug: 6, potassiumMg: 190, cholesterolMg: 130 },
      serving: { grams: 50, label: 'jumătate de conservă, întins pe pâine (50 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['deschizător de conserve', 'cuțit'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Cremos, sărat, cu gust discret de ficat și note de ceapă',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 3, richness: 5,
        texture: 'Pastă fină, untoasă, se întinde perfect',
        notes: 'Ieftin, gustos, comod — și cu doar 10,8 g proteină la 17 g grăsime. Ficatul e 20% din rețetă; restul e apă, slănină, organe, proteină de soia și amidon de cartofi.'
      },
      stats: { taste: 62, satiety: 44, convenience: 100, versatility: 48 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 0, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Un mic dejun de 3 lei, dar nu un mic dejun proteic.',
      tags: ['shelf-stable', 'ready-to-eat', 'high-kcal', 'iron-rich', 'b12', 'processed', 'budget', 'romanian-classic', 'local-sibiu'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Pâine prăjită', 'Castraveți murați', 'Ceapă verde', 'Roșii', 'Muștar'],
      tips: [
        'CAPCANA PATE-ULUI: „pate de ficat” nu înseamnă ficat. Rețeta Ardealul declară ficat de porc 20% — restul e apă, slănină, organe, proteină din soia și amidon.',
        'La 10,8 g proteină și 215 kcal, două conserve (o masă) îți dau 21 g proteină și 430 kcal. Un plic de piept de pui feliat: 33 g proteină și 162 kcal, la 12 lei.',
        'Punctul lui forte real e fierul (~4 mg) și B12 (~6 µg) la 100 g.',
        'Există și variante „premium” cu 30–40% ficat, la 6–8 lei — merită diferența dacă îți place gustul de ficat.'
      ],
      warnings: [
        '71% din calorii vin din grăsime.',
        'Colesterol ridicat (~130 mg/100 g); vitamina A din ficat — nu în cantități mari în sarcină.',
        'Conține amidon și proteine vegetale; verifică pentru gluten și soia.',
        '1,4 g sare/100 g.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile, acoperit (se oxidează și devine gri).',
      shelfLife: '2 ani sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Ardealul pate de porc', 'scandia.ro']
    },

    {
      id: 'p-pate-ficat-pui-sadu',
      name: 'Chicken Liver Pâté',
      nameRo: 'Pate de ficat de pui',
      brand: 'Sadu (Scandia Sibiu)',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🥄',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve, secțiunea pate', priceRon: 3.29, packGrams: 100, packLabel: 'conservă 100 g', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Raft conserve', priceRon: 2.99, packGrams: 100, packLabel: 'conservă 100 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft conserve carne', priceRon: 3.49, packGrams: 100, packLabel: 'conservă 100 g', note: '' }
      ],
      sibiuNote: 'Sadu e brandul de buget al Scandia Sibiu, numit după râul Sadu din județul Sibiu. Local, ieftin, modest nutrițional.',
      per100g: { kcal: 191, protein: 9.6, carbs: 3.6, sugars: 1, fat: 15.2, satFat: 5.3, fiber: 0.9, salt: 1.5 },
      micros: { ironMg: 3.5, zincMg: 1.5, b12Ug: 5, potassiumMg: 180, cholesterolMg: 120 },
      serving: { grams: 50, label: 'jumătate de conservă (50 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['deschizător de conserve', 'cuțit'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Mai blând decât pate-ul de porc, ușor dulceag',
        intensity: 2, sweetness: 2, saltiness: 3, umami: 2, richness: 4,
        texture: 'Pastă foarte fină, moale, uneori apoasă',
        notes: 'Cel mai ieftin produs cu „carne” din raft, la 3 lei. Și unul dintre cele mai slabe proteic: 9,6 g/100 g.'
      },
      stats: { taste: 52, satiety: 40, convenience: 100, versatility: 44 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 0, lunch: 2, snack: 2, dinner: 2, beforeBed: 1 },
      timingNote: 'Rezolvă foamea la 3 lei; nu rezolvă necesarul de proteină.',
      tags: ['shelf-stable', 'ready-to-eat', 'iron-rich', 'b12', 'processed', 'budget', 'romanian-classic', 'local-sibiu'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Pâine', 'Ceapă', 'Castraveți murați', 'Ardei gras'],
      tips: [
        'La 3 lei/100 g cu 9,6 g proteină, costă ~31 lei per 100 g proteină — mai scump decât pieptul de pui crud și de 4 ori mai gras.',
        'Merită doar pentru fier și B12 sau ca alimente de rezervă în cămară.',
        'Deschisă, se oxidează în câteva ore și face crustă gri; acoper-o cu folie direct pe suprafață.'
      ],
      warnings: [
        'Sub 10 g proteină/100 g.',
        '72% din calorii din grăsime; colesterol ~120 mg/100 g.',
        'Conține amidon și proteine vegetale.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile.',
      shelfLife: '2 ani sigilată',
      dataConfidence: 'high',
      sources: ['shop.scandia.ro Sadu pate', 'Etichete raft Sibiu']
    },

    {
      id: 'p-corned-beef',
      name: 'Corned Beef',
      nameRo: 'Corned beef (carne de vită sărată, conservă)',
      brand: 'Exeter / marcă proprie import',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft conserve, zona produse import', priceRon: 18.99, packGrams: 340, packLabel: 'conservă 340 g', note: 'Apare în campaniile britanice/internaționale' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft conserve horeca', priceRon: 17.49, packGrams: 340, packLabel: 'conservă 340 g', note: 'Doar cu card Metro' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine online de produse import', priceRon: 22, packGrams: 340, packLabel: 'conservă 340 g', note: 'Plus transport' }
      ],
      sibiuNote: 'Nu e produs românesc curent — apare la Kaufland doar în săptămânile tematice. Merită luat când îl vezi: 24 g proteină la conservă cu 3 ani termen.',
      per100g: { kcal: 220, protein: 24, carbs: 0.5, sugars: 0.2, fat: 13.5, satFat: 6, fiber: 0, salt: 2.1 },
      micros: { ironMg: 2.2, zincMg: 4.5, b12Ug: 1.8, potassiumMg: 140, cholesterolMg: 75 },
      serving: { grams: 100, label: 'o treime de conservă (100 g)' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 3,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie', 'furculiță'],
        steps: [
          'Răcește conserva 30 min în frigider — se taie mult mai ușor.',
          'Scoate blocul și taie-l felii sau destramă-l.',
          'Rumenește în tigaie 3–4 minute până face crustă.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Foarte sărat, intens de vită, cu textură fibroasă unică',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 5, richness: 4,
        texture: 'Bloc compact de fibre de vită, se destramă la furculiță',
        notes: 'Gust puternic pe care ori îl adori, ori nu. Cea mai densă proteic conservă de carne pe care o poți găsi în România.'
      },
      stats: { taste: 66, satiety: 82, convenience: 90, versatility: 78 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: '24 g proteină/100 g dintr-o conservă care nu are nevoie de frigider — cel mai bun raport din raftul de conserve.',
      tags: ['shelf-stable', 'ready-to-eat', 'high-protein', 'low-carb', 'high-sodium', 'iron-rich', 'processed', 'imported', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi prăjiți', 'Ouă', 'Ceapă călită', 'Pâine prăjită', 'Muștar'],
      tips: [
        'Corned beef hash: destramă 150 g peste cartofi cuburi rumeniți, adaugă un ou ochi. 40 g proteină, 15 minute.',
        'Răcește conserva înainte de deschidere — blocul iese întreg în loc să se sfărâme.',
        'Sarea de 2,1 g/100 g e reală. Nu mai săra nimic în farfurie.'
      ],
      warnings: [
        '2,1 g sare/100 g.',
        'Carne roșie procesată — nu ca aliment zilnic.',
        'Disponibilitate neregulată în România.'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 3 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'medium',
      sources: ['Etichete conserve import Kaufland', 'Valori tipice corned beef']
    },

    {
      id: 'p-tocana-vita-conserva',
      name: 'Canned Beef Stew / Goulash',
      nameRo: 'Tocană / gulaș de vită la conservă',
      brand: 'Scandia Sibiu / Bucegi',
      category: 'deli-processed',
      subcategory: 'Conserve de carne & pate',
      emoji: '🍲',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve, mâncăruri gătite', priceRon: 12.99, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft conserve', priceRon: 12.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft conserve', priceRon: 13.49, packGrams: 300, packLabel: 'conservă 300 g', note: '' }
      ],
      sibiuNote: 'Mâncare completă la conservă, produsă tot la Sibiu. Bună de rucsac pentru drumeții în Făgăraș sau Cindrel.',
      per100g: { kcal: 136, protein: 10, carbs: 5, sugars: 1.5, fat: 8.5, satFat: 3.2, fiber: 0.8, salt: 1.2 },
      micros: { ironMg: 1.4, zincMg: 2, b12Ug: 1, potassiumMg: 230, cholesterolMg: 40 },
      serving: { grams: 300, label: '1 conservă întreagă (300 g) = o masă' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat', difficulty: 'trivial', equipment: ['deschizător de conserve', 'crăticioară'],
        steps: ['Golește conserva în crăticioară.', 'Încălzește 4 minute, amestecând.', 'Servește cu pâine sau mămăligă.'],
        yieldNote: ''
      },
      taste: {
        profile: 'Sos de roșii cu boia, bucăți de vită și legume; sărat moderat',
        intensity: 3, sweetness: 1, saltiness: 3, umami: 4, richness: 3,
        texture: 'Sos gros cu bucăți de carne fragede și legume moi',
        notes: 'Bună la gust pentru o conservă, dar diluată: 10 g proteină la 100 g. O conservă întreagă = doar 30 g proteină.'
      },
      stats: { taste: 60, satiety: 70, convenience: 94, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Masă completă de urgență, 300 g = 30 g proteină și 408 kcal.',
      tags: ['shelf-stable', 'ready-to-eat', 'microwave', 'processed', 'budget', 'local-sibiu', 'portable', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Mămăligă', 'Pâine de casă', 'Murături', 'Smântână', 'Orez'],
      tips: [
        'Adaugă o conservă de fasole albă scursă: proteina urcă de la 30 g la ~48 g pe masă, la +4 lei.',
        'Conserva de mâncare gătită are mereu mai puțină proteină decât conserva de carne simplă — plătești sos și legume.',
        'Excelentă pentru drumeție: nu are nevoie de frigider și se mănâncă și rece la nevoie.'
      ],
      warnings: [
        '1,2 g sare/100 g, dar porția e mare: o conservă = 3,6 g sare.',
        'Conține amidon/făină pentru îngroșare — verifică pentru gluten.',
        'Densitate proteică mică (10 g/100 g).'
      ],
      storage: 'Loc uscat. După deschidere, frigider, 2 zile.',
      shelfLife: '2–3 ani sigilată',
      dataConfidence: 'low',
      sources: ['scandia.ro mâncăruri gătite', 'Valori tipice conservă tocană de vită']
    },

    {
      id: 'p-beef-jerky-lidl',
      name: 'Beef Jerky',
      nameRo: 'Beef jerky (carne de vită uscată)',
      brand: 'Lidl / Jack Link\'s',
      category: 'deli-processed',
      subcategory: 'Jerky & snack proteic din carne',
      emoji: '💪',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'occasional', aisle: 'Raft snacks, lângă casă sau în insula de promoții', priceRon: 12.99, packGrams: 50, packLabel: 'pungă 50 g', note: 'Apare în campanii; nu e sortiment permanent' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft snacks sărate / zona proteine', priceRon: 17.99, packGrams: 60, packLabel: 'pungă 60 g', note: 'Jack Link\'s, mai scump' },
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de nutriție sportivă și dryfood.ro', priceRon: 25, packGrams: 100, packLabel: 'pungă 100 g', note: 'Cel mai bun preț/kg dacă iei 3+' }
      ],
      sibiuNote: 'La Lidl Sibiu apare în valuri, de obicei în campaniile americane. Când îl vezi, ia 3 pungi — dispare în 3 zile.',
      per100g: { kcal: 245, protein: 33, carbs: 19, sugars: 15, fat: 3, satFat: 1.2, fiber: 0.5, salt: 4 },
      micros: { ironMg: 3.5, zincMg: 6, b12Ug: 2.2, potassiumMg: 450, cholesterolMg: 60 },
      serving: { grams: 50, label: '1 pungă (50 g)' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Dulce-sărat-afumat, cu sos de soia și zahăr; foarte intens',
        intensity: 5, sweetness: 3, saltiness: 5, umami: 5, richness: 1,
        texture: 'Fâșii uscate, tari, care se mestecă mult — sațietate din efortul de mestecat',
        notes: 'Cel mai bun snack proteic din carne care există: 33 g proteină la 3 g grăsime. Prețul (250–350 lei/kg) și sarea (4 g) sunt problemele.'
      },
      stats: { taste: 78, satiety: 84, convenience: 100, versatility: 45 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 3, lunch: 3, snack: 5, dinner: 2, beforeBed: 2 },
      timingNote: 'Snack de birou/drum imbatabil: 16 g proteină la 120 kcal per pungă de 50 g.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'very-high-protein', 'protein-dense', 'low-fat', 'high-sodium', 'iron-rich', 'processed', 'portable', 'premium', 'cutting', 'imported'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Apă multă', 'Nuci', 'Măr', 'Cafea neagră'],
      tips: [
        'Cei 19 g carbohidrați vin din marinada cu zahăr și sos de soia. Variantele „original” au mai mult zahăr decât cele „peppered”.',
        'Bea apă: 4 g sare la 100 g e enorm. O pungă de 50 g = 2 g sare, o treime din limita zilnică.',
        'Ține o pungă în geantă. E singurul snack care îți dă 16 g proteină, nu are nevoie de frigider și nu se strivește.',
        'La 250 lei/kg costă ~76 lei per 100 g proteină — de 6 ori mai scump decât pieptul de pui crud. Plătești portabilitatea.'
      ],
      warnings: [
        '4 g sare/100 g — cea mai sărată categorie din listă alături de ghiudem.',
        'Zahăr adăugat semnificativ (15 g/100 g) în variantele clasice.',
        'Carne roșie procesată; poate conține gluten (sos de soia cu grâu).'
      ],
      storage: 'Loc uscat, temperatura camerei. După deschidere, 5–7 zile în pungă închisă.',
      shelfLife: '6–12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['fatsecret.com Lidl Beef Jerky', 'Etichete Jack Link\'s']
    },

    {
      id: 'p-biltong',
      name: 'Biltong',
      nameRo: 'Biltong (vită uscată, fără zahăr)',
      brand: 'Import / producători RO online',
      category: 'deli-processed',
      subcategory: 'Jerky & snack proteic din carne',
      emoji: '🇿🇦',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de nutriție sportivă și specialități', priceRon: 45, packGrams: 100, packLabel: 'pungă 100 g', note: 'Nu se găsește pe rafturile din Sibiu; doar online' },
        { name: 'Decathlon', availability: 'occasional', aisle: 'Raft nutriție sportivă', priceRon: 22, packGrams: 40, packLabel: 'pungă 40 g', note: 'Sortiment neregulat' }
      ],
      sibiuNote: 'Nu îl găsești fizic în Sibiu decât întâmplător. Comandă online și ai livrare în 2 zile — merită pentru profilul nutrițional.',
      per100g: { kcal: 300, protein: 55, carbs: 2, sugars: 1, fat: 8, satFat: 3.2, fiber: 0, salt: 3.5 },
      micros: { ironMg: 5, zincMg: 8, b12Ug: 3, potassiumMg: 600, cholesterolMg: 90 },
      serving: { grams: 40, label: 'un pumn (40 g) = 22 g proteină' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat-acrișor (de la oțet), cu coriandru și piper negru; gust pur de vită',
        intensity: 5, sweetness: 0, saltiness: 5, umami: 5, richness: 2,
        texture: 'Bucăți uscate, dar mai moi decât jerky-ul; se sfărâmă între dinți',
        notes: 'Cel mai dens proteic aliment din carne din toată baza de date: 55 g proteină/100 g. Fără zahăr, spre deosebire de jerky.'
      },
      stats: { taste: 74, satiety: 88, convenience: 100, versatility: 40 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 4, lunch: 3, snack: 5, dinner: 2, beforeBed: 3 },
      timingNote: 'Densitate proteică maximă: 40 g de biltong = 22 g proteină la 120 kcal.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'very-high-protein', 'protein-dense', 'low-carb', 'low-fat', 'high-sodium', 'iron-rich', 'portable', 'premium', 'cutting', 'imported'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Apă', 'Brânză maturată', 'Măsline', 'Nuci'],
      tips: [
        'Biltong vs jerky: biltong e uscat cu oțet și sare, fără zahăr și fără fum — 55 g proteină și 2 g carbohidrați, față de 33 g și 19 g la jerky.',
        'La 450 lei/kg costă ~82 lei per 100 g proteină — cel mai scump mod de a cumpăra proteină din carne. Îl iei pentru portabilitate, nu pentru buget.',
        'Cumpără bucăți întregi și taie tu: e mai ieftin și rămâne mai fraged.'
      ],
      warnings: [
        '3,5 g sare/100 g.',
        'Preț foarte mare; produs de nișă, nu de aprovizionare curentă.',
        'Carne roșie; nu e o strategie de zi cu zi.'
      ],
      storage: 'Loc uscat și răcoros, în pungă care respiră (nu etanș — face mucegai).',
      shelfLife: '2–4 săptămâni după deschidere',
      dataConfidence: 'medium',
      sources: ['Etichete producători biltong', 'Valori tipice biltong slab']
    },

    {
      id: 'p-chicken-jerky',
      name: 'Chicken Jerky / Protein Meat Snack',
      nameRo: 'Jerky din piept de pui / snack proteic din carne',
      brand: 'Nutrend / Carpathian Jerky (RO)',
      category: 'deli-processed',
      subcategory: 'Jerky & snack proteic din carne',
      emoji: '🎒',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'online', aisle: 'Magazine de nutriție sportivă (nutrend.ro, carpathianjerky.com)', priceRon: 18, packGrams: 50, packLabel: 'pungă 50 g', note: 'Producător românesc pentru Carpathian Jerky' },
        { name: 'Decathlon', availability: 'occasional', aisle: 'Raft nutriție sportivă, lângă batoane proteice', priceRon: 19.9, packGrams: 50, packLabel: 'pungă 50 g', note: 'Decathlon Shopping City Sibiu' }
      ],
      sibiuNote: 'Decathlon din Shopping City Sibiu are ocazional snacks din carne la raftul de nutriție; altfel, doar comandă online.',
      per100g: { kcal: 215, protein: 40, carbs: 8, sugars: 6, fat: 2.5, satFat: 0.8, fiber: 0, salt: 3.2 },
      micros: { ironMg: 1.5, zincMg: 2.5, b12Ug: 0.8, potassiumMg: 500, cholesterolMg: 95 },
      serving: { grams: 50, label: '1 pungă (50 g) = 20 g proteină' },
      effort: 0,
      timeMin: 0,
      activeTimeMin: 0,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Sărat-dulceag, cu marinadă asiatică sau condimente afumate',
        intensity: 4, sweetness: 2, saltiness: 5, umami: 4, richness: 1,
        texture: 'Fâșii subțiri, tari, foarte uscate',
        notes: 'Cel mai bun raport proteină/calorii din tot fișierul: 40 g proteină la 215 kcal. Sarea și prețul îl țin în zona de snack ocazional.'
      },
      stats: { taste: 68, satiety: 86, convenience: 100, versatility: 38 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 4, lunch: 3, snack: 5, dinner: 2, beforeBed: 3 },
      timingNote: 'Snack pre/post antrenament portabil, fără frigider și fără grăsime.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'very-high-protein', 'protein-dense', 'low-fat', 'high-sodium', 'portable', 'premium', 'cutting', 'post-workout'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Apă', 'Banană', 'Nuci', 'Iaurt grecesc'],
      tips: [
        'Carpathian Jerky e producător românesc — comanda ajunge în Sibiu în 1–2 zile și e mai ieftină decât importurile.',
        '40 g proteină la 100 g, dar prețul de 360 lei/kg îl face ~90 lei per 100 g proteină. E snack de convenabilitate, nu de buget.',
        'Verifică sarea pe etichetă: variază între 2,5 și 4,5 g/100 g în funcție de marinadă.'
      ],
      warnings: [
        '~3,2 g sare/100 g.',
        'Marinadele conțin frecvent sos de soia (gluten) și zahăr.',
        'Preț foarte mare pe kilogram.'
      ],
      storage: 'Loc uscat, temperatura camerei; după deschidere consumă în câteva zile.',
      shelfLife: '6–9 luni sigilat',
      dataConfidence: 'low',
      sources: ['carpathianjerky.com', 'nutrend.ro', 'Valori tipice chicken jerky']
    },

    {
      id: 'p-pui-rotisor-kaufland',
      name: 'Rotisserie Chicken (Kaufland Grill)',
      nameRo: 'Pui la rotisor',
      brand: 'Kaufland Grill',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Standul Kaufland Grill, lângă intrare sau la panificație', priceRon: 27, packGrams: 900, packLabel: '1 pui întreg (~900 g gătit)', note: 'Program tipic 10:00–20:00; se termină seara' }
      ],
      sibiuNote: 'Kaufland Șos. Alba Iulia și Shopping City au grătarul zilnic. Cel mai bun moment: 11:30–12:30, când iese prima tură. După 19:00 rămâne doar ce s-a uscat pe rotisor.',
      per100g: { kcal: 219, protein: 25, carbs: 0.5, sugars: 0.2, fat: 13, satFat: 3.8, fiber: 0, salt: 1.4 },
      micros: { ironMg: 1, zincMg: 1.8, b12Ug: 0.5, potassiumMg: 280, cholesterolMg: 95 },
      serving: { grams: 250, label: 'un sfert de pui (250 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['cuțit'], steps: [], yieldNote: 'Un pui de ~900 g gătit dă ~500–550 g carne fără oase și piele' },
      taste: {
        profile: 'Sărat, condimentat cu boia și usturoi, cu pielea crocantă și carnea suculentă',
        intensity: 4, sweetness: 0, saltiness: 3, umami: 4, richness: 4,
        texture: 'Piele crocantă peste carne fragedă; pieptul se poate usca',
        notes: 'Cea mai bună afacere din tot fișierul: 27 lei pentru ~130 g proteină totală. Nimic altceva nu se apropie.'
      },
      stats: { taste: 84, satiety: 82, convenience: 92, versatility: 90 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'O masă completă gata, plus resturi pentru a doua zi.',
      tags: ['ready-to-eat', 'high-protein', 'low-carb', 'budget', 'cheap-protein', 'meal-prep', 'batch-cook', 'post-workout', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi la cuptor', 'Salată de varză', 'Mujdei de usturoi', 'Orez', 'Murături'],
      tips: [
        'MATEMATICA: 27 lei pentru ~550 g carne = ~130 g proteină. Costă ~21 lei per 100 g proteină — printre cele mai ieftine surse de proteină gătită din Sibiu.',
        'Dă pielea jos și proteina/100 g urcă la ~31 g iar grăsimea scade la ~4 g. Pielea are aproape toată grăsimea.',
        'Carcasa nu se aruncă: fierbe-o 1 oră cu ceapă și morcov și ai 1,5 l de supă de pui gratis.',
        'Cumpără-l la 12:00, nu la 19:00. Puiul stat 6 ore pe rotisor e uscat și sărat.',
        'Valorile sunt ESTIMATE — Kaufland Grill nu afișează etichetă nutrițională. Marinada și sarea variază de la magazin la magazin.'
      ],
      warnings: [
        'Fără etichetă nutrițională — cifrele sunt estimări bazate pe pui rotisat standard.',
        'Sarea din marinadă poate ajunge la 1,5–2 g/100 g; poate fi mai mare decât estimarea.',
        'Se răcește repede — mănâncă-l în 2 ore sau bagă-l imediat la frigider (regula 2 ore la temperatura camerei).'
      ],
      storage: 'Dezosează-l cald și pune carnea la frigider în 2 ore. Se ține 3 zile la 0–4 °C.',
      shelfLife: '3 zile la frigider, dezosat',
      dataConfidence: 'low',
      sources: ['kaufland.ro Kaufland Grill', 'Estimare nutrițională pui rotisat standard']
    },

    {
      id: 'p-pui-rotisor-carrefour',
      name: 'Rotisserie Chicken (Carrefour Hot Counter)',
      nameRo: 'Pui rotisat de la raftul cald',
      brand: 'Carrefour',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🔆',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Raft cald, lângă brutărie', priceRon: 32, packGrams: 900, packLabel: '1 pui întreg (~900 g gătit)', note: 'Ambalat în pungă termică' },
        { name: 'Auchan', availability: 'always', aisle: 'Raft cald / rotiserie', priceRon: 30, packGrams: 900, packLabel: '1 pui întreg', note: '' },
        { name: 'Penny', availability: 'occasional', aisle: 'Vitrină caldă la intrare', priceRon: 26, packGrams: 850, packLabel: '1 pui întreg', note: 'Doar în magazinele mari' }
      ],
      sibiuNote: 'Carrefour din Shopping City are rotiseria lângă brutărie; puiul iese în ture, la 11:00, 14:00 și 17:00. Întreabă vânzătorul când e următoarea tură.',
      per100g: { kcal: 219, protein: 25, carbs: 0.5, sugars: 0.2, fat: 13, satFat: 3.8, fiber: 0, salt: 1.5 },
      micros: { ironMg: 1, zincMg: 1.8, b12Ug: 0.5, potassiumMg: 280, cholesterolMg: 95 },
      serving: { grams: 250, label: 'un sfert de pui (250 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['cuțit'], steps: [], yieldNote: '~900 g gătit = ~520 g carne curată' },
      taste: {
        profile: 'Condimentat mai puternic decât la Kaufland, uneori cu marinadă dulceagă',
        intensity: 4, sweetness: 1, saltiness: 4, umami: 4, richness: 4,
        texture: 'Piele crocantă, carne fragedă la pulpe, mai uscată la piept',
        notes: 'Practic același produs ca la Kaufland, cu 5 lei mai scump. Diferența e marinada, care variază de la magazin la magazin.'
      },
      stats: { taste: 82, satiety: 82, convenience: 90, versatility: 90 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Masă gata pentru 2 persoane, plus resturi.',
      tags: ['ready-to-eat', 'high-protein', 'low-carb', 'budget', 'cheap-protein', 'meal-prep', 'batch-cook', 'post-workout'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi', 'Salată verde', 'Mujdei', 'Pâine', 'Legume la grătar'],
      tips: [
        'Compară prețurile în Sibiu: Penny ~26 lei, Kaufland ~27 lei, Auchan ~30 lei, Carrefour ~32 lei. Puiul e cam același.',
        'Cere-l din tura proaspătă. Puiul care stă în vitrina caldă peste 3 ore pierde apă și devine sfoară.',
        'Dezosat imediat și porționat în cutii, îți dă 3 mese de prânz cu ~35 g proteină fiecare.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valorile sunt estimări.',
        'Marinadele pot conține zahăr, gluten (sos de soia) și potențiatori de aromă; întreabă la raft dacă ai alergii.',
        'Riscul principal e temperatura: nu-l lăsa peste 2 ore în mașină.'
      ],
      storage: 'Frigider în 2 ore de la cumpărare, dezosat. 3 zile la 0–4 °C.',
      shelfLife: '3 zile dezosat la frigider',
      dataConfidence: 'low',
      sources: ['Observație raft cald Carrefour Sibiu', 'Estimare nutrițională pui rotisat']
    },

    {
      id: 'p-aripioare-raft-cald',
      name: 'Ready Cooked Chicken Wings (Hot Counter)',
      nameRo: 'Aripioare de pui gata prăjite',
      brand: 'Kaufland / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrina caldă, lângă rotisor', priceRon: 12, packGrams: 300, packLabel: 'caserolă ~300 g', note: '~40 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 13.5, packGrams: 300, packLabel: 'caserolă ~300 g', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Rotiserie', priceRon: 13, packGrams: 300, packLabel: 'caserolă ~300 g', note: '' }
      ],
      sibiuNote: 'Aripioarele sunt cel mai des epuizate produs de la raftul cald din Sibiu — după 18:00 rar mai găsești.',
      per100g: { kcal: 262, protein: 24, carbs: 2, sugars: 0.8, fat: 17.5, satFat: 5, fiber: 0, salt: 1.6 },
      micros: { ironMg: 1.1, zincMg: 1.9, b12Ug: 0.4, potassiumMg: 250, cholesterolMg: 110 },
      serving: { grams: 200, label: '5–6 aripioare (200 g cu os)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '300 g cu os = ~180 g carne comestibilă' },
      taste: {
        profile: 'Sărat, condimentat cu boia și usturoi, cu piele rumenită',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 4, richness: 5,
        texture: 'Piele crocantă când sunt proaspete, moale și cleioasă când au stat',
        notes: 'Gust bun, dar atenție la calcul: 300 g de aripioare cu os înseamnă doar ~180 g carne, adică ~43 g proteină.'
      },
      stats: { taste: 80, satiety: 66, convenience: 94, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Rezolvă cina, dar cu multă grăsime din piele.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'low-carb', 'mid-price', 'post-workout'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de usturoi', 'Salată de varză', 'Cartofi', 'Lămâie', 'Bere'],
      tips: [
        'CAPCANA OSULUI: prețul pe kilogram e mic (40 lei/kg), dar 40% din greutate e os. Real, plătești ~67 lei/kg de carne.',
        'Comparativ, pieptul de pui la rotisor sau puiul întreg îți dau mult mai multă carne per leu.',
        'Reîncălzite 6 minute în airfryer la 190 °C își recapătă crocanta aproape complet.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valorile sunt estimări.',
        'Grăsimea din piele face 60% din calorii.',
        'Verifică să fie calde, nu călduțe: zona de 20–50 °C e cea în care se înmulțesc bacteriile.'
      ],
      storage: 'Frigider în 2 ore. 2 zile la 0–4 °C.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['Observație raft cald Kaufland Sibiu', 'Estimare nutrițională aripioare rotisate']
    },

    {
      id: 'p-pulpe-pui-rotisate',
      name: 'Roasted Chicken Legs (Hot Counter)',
      nameRo: 'Pulpe de pui rotisate',
      brand: 'Kaufland / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🍠',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrina caldă, lângă rotisor', priceRon: 14, packGrams: 400, packLabel: 'caserolă 2 pulpe (~400 g)', note: '~35 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 15.5, packGrams: 400, packLabel: 'caserolă ~400 g', note: '' },
        { name: 'Penny', availability: 'occasional', aisle: 'Vitrină caldă', priceRon: 13.5, packGrams: 400, packLabel: 'caserolă ~400 g', note: '' }
      ],
      sibiuNote: 'Alternativa la puiul întreg dacă ești singur: 2 pulpe rezolvă cina și prânzul de mâine, fără să rămâi cu o carcasă.',
      per100g: { kcal: 229, protein: 24, carbs: 0.5, sugars: 0.2, fat: 14.5, satFat: 4.2, fiber: 0, salt: 1.4 },
      micros: { ironMg: 1.2, zincMg: 2.2, b12Ug: 0.6, potassiumMg: 270, cholesterolMg: 105 },
      serving: { grams: 200, label: '1 pulpă (200 g cu os)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '400 g cu os = ~290 g carne comestibilă' },
      taste: {
        profile: 'Suculent, condimentat, cu piele rumenită și carne închisă la culoare',
        intensity: 4, sweetness: 0, saltiness: 3, umami: 4, richness: 4,
        texture: 'Carne moale care se desprinde de pe os, piele crocantă',
        notes: 'Carnea de pulpă e mai suculentă decât pieptul și rezistă mai bine la statul în vitrina caldă.'
      },
      stats: { taste: 82, satiety: 78, convenience: 94, versatility: 76 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină completă cumpărată în drum spre casă.',
      tags: ['ready-to-eat', 'high-protein', 'low-carb', 'budget', 'cheap-protein', 'post-workout', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi la cuptor', 'Salată verde', 'Murături', 'Mujdei', 'Orez'],
      tips: [
        'Pulpa rezistă mai bine în vitrina caldă decât pieptul — dacă ajungi seara, ia pulpe, nu piept.',
        'Fără piele, proteina urcă la ~28 g și grăsimea scade la ~7 g/100 g.',
        'Osul e ~27% din greutate. Calculează: 400 g caserolă = ~290 g carne = ~70 g proteină, la 14 lei. Excelent raport.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        'Grăsimea din piele; scoate pielea dacă numeri caloriile.',
        'Regula 2 ore: la frigider imediat ce ajungi acasă.'
      ],
      storage: 'Frigider 0–4 °C, 2 zile. Dezosat, 3 zile.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['Observație raft cald Kaufland Sibiu', 'Estimare nutrițională pulpă de pui rotisată']
    },

    {
      id: 'p-ceafa-gratar-raft-cald',
      name: 'Grilled Pork Neck (Hot Counter)',
      nameRo: 'Ceafă de porc la grătar, gata preparată',
      brand: 'Kaufland Grill / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Standul Kaufland Grill', priceRon: 18, packGrams: 200, packLabel: '1 bucată (~200 g)', note: '~90 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 19.9, packGrams: 200, packLabel: '1 bucată (~200 g)', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Rotiserie / grătar', priceRon: 19.5, packGrams: 200, packLabel: '1 bucată', note: '' }
      ],
      sibiuNote: 'Kaufland Grill din Sibiu funcționează tot anul, dar în sezonul cald (mai–septembrie) sortimentul e mult mai bogat.',
      per100g: { kcal: 287, protein: 24, carbs: 0.5, sugars: 0.2, fat: 21, satFat: 7.5, fiber: 0, salt: 1.6 },
      micros: { ironMg: 1.1, zincMg: 2.6, b12Ug: 0.9, potassiumMg: 320, cholesterolMg: 85 },
      serving: { grams: 200, label: '1 bucată (200 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Grătar clasic: afumat, sărat, cu marginile caramelizate și grăsime topită',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 5, richness: 5,
        texture: 'Suculentă, cu vinișoare de grăsime; se taie ușor',
        notes: 'Foarte gustoasă, dar 21 g grăsime la 24 g proteină. La 90 lei/kg e și scumpă pentru ce oferă.'
      },
      stats: { taste: 86, satiety: 74, convenience: 92, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 1 },
      timingNote: 'Prânz sau cină de weekend; prea grasă pentru zilnic.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'low-carb', 'mid-price', 'summer', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Mujdei de usturoi', 'Cartofi prăjiți', 'Murături', 'Salată de roșii', 'Muștar'],
      tips: [
        'La 90 lei/kg, e de 3 ori mai scumpă decât ceafa crudă din măcelărie (~30 lei/kg). Plătești grătarul, nu carnea.',
        'Dacă vrei carne gătită la raftul cald și te interesează proteina, puiul rotisat e de 3 ori mai eficient pe leu.',
        'Cere bucata din mijloc, nu de la margine — cele de la margine stau cel mai mult și se usucă.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        '21 g grăsime/100 g; 66% din calorii.',
        'Grătarul intens produce HAP-uri și amine heterociclice — evită bucățile arse.'
      ],
      storage: 'Frigider în 2 ore, 2 zile la 0–4 °C.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['kaufland.ro Kaufland Grill', 'Estimare nutrițională ceafă la grătar']
    },

    {
      id: 'p-mici-gata-preparati',
      name: 'Ready-Grilled Mici (Mititei)',
      nameRo: 'Mici gata prăjiți',
      brand: 'Kaufland Grill / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🇷🇴',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Standul Kaufland Grill', priceRon: 4.5, packGrams: 70, packLabel: '1 mic (~70 g)', note: 'Meniu 4 mici + garnitură ~40 lei' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 5, packGrams: 70, packLabel: '1 mic', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Grătar / rotiserie', priceRon: 4.9, packGrams: 70, packLabel: '1 mic', note: '' }
      ],
      sibiuNote: 'Micii de la Kaufland Grill sunt instituție locală. În sezon, la Kaufland Șos. Alba Iulia se face coadă la prânz.',
      per100g: { kcal: 292, protein: 16, carbs: 2, sugars: 0.5, fat: 24.5, satFat: 9.5, fiber: 0, salt: 1.9 },
      micros: { ironMg: 1.8, zincMg: 3.2, b12Ug: 1.4, potassiumMg: 280, cholesterolMg: 70 },
      serving: { grams: 210, label: '3 mici (210 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Usturoi, cimbru, piper și bicarbonat — gustul de grătar românesc',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 5, richness: 5,
        texture: 'Elastică, spongioasă, suculentă când sunt calzi; cauciucată când s-au răcit',
        notes: 'Delicioși și complet nerecomandabili nutrițional: 24,5 g grăsime la 16 g proteină. 3 mici = 615 kcal și 34 g grăsime.'
      },
      stats: { taste: 88, satiety: 60, convenience: 92, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Mâncare de plăcere de weekend, nu de plan.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'processed', 'romanian-classic', 'summer', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar', 'Pâine', 'Bere', 'Murături', 'Ceapă'],
      tips: [
        'Raportul e brutal: 3 mici (210 g) îți dau 34 g proteină, dar și 51 g grăsime și 615 kcal. Un sfert de pui rotisat: 60 g proteină, 32 g grăsime, 550 kcal.',
        'Compoziția tipică e vită + porc + oaie, cu 20–30% grăsime adăugată — grăsimea e ceea ce îi face buni.',
        'Dacă vrei să-i mănânci, mănâncă-i și nu te mai gândi la macro. Doar nu te păcăli că e „proteină”.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        '75% din calorii vin din grăsime.',
        'Conțin bicarbonat de sodiu și, uzual, carne separată mecanic; posibil gluten.',
        'Carne procesată grătită la temperatură mare.'
      ],
      storage: 'Se mănâncă imediat. Reîncălziți sunt mult mai slabi.',
      shelfLife: 'Aceeași zi',
      dataConfidence: 'low',
      sources: ['kaufland.ro Kaufland Grill', 'Estimare nutrițională mici']
    },

    {
      id: 'p-snitel-pui-raft-cald',
      name: 'Breaded Chicken Schnitzel (Hot Counter)',
      nameRo: 'Șnițel de pui pane, gata preparat',
      brand: 'Kaufland / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🍤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrina caldă', priceRon: 11, packGrams: 150, packLabel: '1 bucată (~150 g)', note: '~73 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 12, packGrams: 150, packLabel: '1 bucată', note: '' },
        { name: 'Profi', availability: 'occasional', aisle: 'Vitrină caldă la magazinele mari', priceRon: 11.5, packGrams: 150, packLabel: '1 bucată', note: '' }
      ],
      sibiuNote: 'Cel mai popular produs de la vitrina caldă din Sibiu după pui. Se termină la 13:00 și la 18:00.',
      per100g: { kcal: 258, protein: 17, carbs: 16, sugars: 1, fat: 14, satFat: 3.5, fiber: 1, salt: 1.5 },
      micros: { ironMg: 1, zincMg: 1.2, b12Ug: 0.3, potassiumMg: 250, cholesterolMg: 75 },
      serving: { grams: 150, label: '1 șnițel (150 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Crustă de pesmet sărată, carne de pui moale la interior',
        intensity: 3, sweetness: 0, saltiness: 3, umami: 3, richness: 4,
        texture: 'Crocant la exterior când e proaspăt; moale și uleios după 2 ore',
        notes: 'Panéul absoarbe uleiul și diluează proteina: 17 g/100 g față de 31 g la pieptul simplu. Plătești pesmet la preț de carne.'
      },
      stats: { taste: 74, satiety: 62, convenience: 92, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Prânz rapid decent, dar o treime din greutate e pesmet.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'mid-price', 'kid-friendly', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: false, porkFree: true },
      pairings: ['Lămâie', 'Cartofi', 'Salată de varză', 'Muștar', 'Sos de usturoi'],
      tips: [
        'CAPCANA PANÉULUI: un șnițel de 150 g conține ~110 g carne și ~40 g pesmet+ulei. Îți dă 25 g proteină la 390 kcal.',
        'Aceleași 11 lei la Kaufland Grill îți cumpără aproape jumătate de pui rotisat: ~55 g proteină.',
        'Reîncălzit în airfryer 5 minute la 190 °C redevine crocant; la microunde devine o cârpă.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        'Conține gluten (pesmet) și frecvent ou și lapte.',
        'Uleiul din friteuza de magazin poate fi refolosit intens — calitatea grăsimii e necunoscută.'
      ],
      storage: 'Frigider în 2 ore, 2 zile.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['Observație vitrină caldă Kaufland Sibiu', 'Estimare nutrițională șnițel de pui pane']
    },

    {
      id: 'p-chiftele-raft-cald',
      name: 'Ready Meatballs (Hot Counter)',
      nameRo: 'Chiftele / perișoare gata prăjite',
      brand: 'Kaufland / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🟤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Vitrina caldă', priceRon: 10, packGrams: 250, packLabel: 'caserolă ~250 g (5–6 buc.)', note: '~40 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 11, packGrams: 250, packLabel: 'caserolă ~250 g', note: '' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Raft cald', priceRon: 12, packGrams: 250, packLabel: 'caserolă ~250 g', note: '' }
      ],
      sibiuNote: 'Chiftelele de la raftul cald sunt cea mai variabilă marfă din magazin: unele zile sunt bune, altele sunt uscate. Nu există etichetă.',
      per100g: { kcal: 253, protein: 15, carbs: 10, sugars: 1, fat: 17, satFat: 5.5, fiber: 1, salt: 1.6 },
      micros: { ironMg: 1.5, zincMg: 2.2, b12Ug: 0.9, potassiumMg: 260, cholesterolMg: 78 },
      serving: { grams: 150, label: '3 chiftele (150 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Condimentate cu usturoi și mărar, prăjite, cu crustă',
        intensity: 3, sweetness: 0, saltiness: 3, umami: 3, richness: 4,
        texture: 'Compactă, uneori sfărâmicioasă din cauza pâinii înmuiate',
        notes: 'Rețeta clasică are pâine sau cartof în compoziție — de-asta 10 g carbohidrați. Proteina de 15 g e diluată.'
      },
      stats: { taste: 68, satiety: 60, convenience: 92, versatility: 66 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Prânz rapid; densitate proteică modestă.',
      tags: ['ready-to-eat', 'high-kcal', 'processed', 'mid-price', 'kid-friendly', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: false, porkFree: false },
      pairings: ['Muștar', 'Piure de cartofi', 'Salată de varză', 'Sos de roșii', 'Murături'],
      tips: [
        'Chiftelele conțin pâine, cartof sau griș — de-asta au 10 g carbohidrați și doar 15 g proteină. Nu sunt „carne”.',
        'La 40 lei/kg par ieftine, dar pe gram de proteină costă ~27 lei/100 g proteină — mai mult decât puiul rotisat.',
        'Reîncălzite în airfryer 6 minute la 180 °C sunt mult mai bune decât la microunde.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate; compoziția variază de la zi la zi.',
        'Conțin gluten, ou și posibil lapte.',
        'Prăjite în ulei de calitate necunoscută.'
      ],
      storage: 'Frigider în 2 ore, 2 zile.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['Observație vitrină caldă Sibiu', 'Estimare nutrițională chiftele de porc/pui']
    },

    {
      id: 'p-cordon-bleu-raft-cald',
      name: 'Cordon Bleu (Hot Counter)',
      nameRo: 'Cordon bleu gata preparat',
      brand: 'Kaufland / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🧀',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Vitrina caldă', priceRon: 14, packGrams: 180, packLabel: '1 bucată (~180 g)', note: '~78 lei/kg' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 15, packGrams: 180, packLabel: '1 bucată', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Rotiserie', priceRon: 15.5, packGrams: 180, packLabel: '1 bucată', note: '' }
      ],
      sibiuNote: 'Apare mai rar decât șnițelul; verifică vitrina caldă la Kaufland Shopping City în jurul prânzului.',
      per100g: { kcal: 264, protein: 16, carbs: 15, sugars: 1, fat: 15.5, satFat: 6, fiber: 1, salt: 1.7 },
      micros: { ironMg: 0.9, zincMg: 1.6, b12Ug: 0.5, potassiumMg: 240, cholesterolMg: 72, calciumMg: 90 },
      serving: { grams: 180, label: '1 bucată (180 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Crustă crocantă, cu șuncă și cașcaval topit la interior',
        intensity: 4, sweetness: 0, saltiness: 4, umami: 4, richness: 5,
        texture: 'Crocant afară, moale și filant la mijloc când e cald',
        notes: 'Foarte gustos cald. După o oră în vitrină, cașcavalul se întărește și devine un șnițel cu ceva ciudat înăuntru.'
      },
      stats: { taste: 78, satiety: 64, convenience: 90, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Prânz de plăcere; proteina e diluată de pesmet.',
      tags: ['ready-to-eat', 'high-kcal', 'processed', 'mid-price', 'kid-friendly', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: false, keto: false, halal: false, porkFree: false },
      pairings: ['Cartofi prăjiți', 'Salată verde', 'Lămâie', 'Sos de usturoi'],
      tips: [
        'O bucată de 180 g = 29 g proteină și 475 kcal. Un plic de piept de pui feliat + o salată: 33 g proteină și 200 kcal.',
        'Cere-l din tura proaspătă; cordon bleu răcit e mult mai slab decât șnițelul răcit.',
        'Conține atât șuncă (nitriți), cât și pesmet (gluten) și cașcaval (lactoză) — cel mai „încărcat” produs alergenic de la raftul cald.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        'Conține gluten, lactoză, ou și carne procesată (șuncă).',
        '53% din calorii vin din grăsime.'
      ],
      storage: 'Frigider în 2 ore, 2 zile.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['Observație vitrină caldă Sibiu', 'Estimare nutrițională cordon bleu']
    },

    {
      id: 'p-carnati-gratar-raft-cald',
      name: 'Grilled Sausages (Hot Counter)',
      nameRo: 'Cârnați la grătar, gata preparați',
      brand: 'Kaufland Grill / Carrefour raft cald',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🔥',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Standul Kaufland Grill', priceRon: 9, packGrams: 120, packLabel: '1 cârnat (~120 g)', note: 'Thüringer, bratwurst sau cârnat de casă' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft cald', priceRon: 10, packGrams: 120, packLabel: '1 cârnat', note: '' },
        { name: 'Auchan', availability: 'usual', aisle: 'Grătar', priceRon: 9.9, packGrams: 120, packLabel: '1 cârnat', note: '' }
      ],
      sibiuNote: 'Thüringer-ul de la Kaufland Grill e clasicul de weekend în Sibiu. Bun, dar cu 28 g grăsime la 100 g.',
      per100g: { kcal: 320, protein: 15, carbs: 2, sugars: 0.5, fat: 28, satFat: 10.5, fiber: 0, salt: 2 },
      micros: { ironMg: 1.2, zincMg: 2.2, b12Ug: 1, potassiumMg: 260, cholesterolMg: 72 },
      serving: { grams: 120, label: '1 cârnat (120 g)' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: { method: 'none', difficulty: 'none', equipment: ['—'], steps: [], yieldNote: '' },
      taste: {
        profile: 'Afumat, condimentat cu maghiran și piper, cu membrană crocantă',
        intensity: 5, sweetness: 0, saltiness: 4, umami: 5, richness: 5,
        texture: 'Membrană care pocnește, interior suculent și gras',
        notes: 'Excelent la gust, catastrofal la macro: 28 g grăsime la 15 g proteină. 79% din calorii sunt grăsime.'
      },
      stats: { taste: 86, satiety: 56, convenience: 92, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 2, dinner: 3, beforeBed: 1 },
      timingNote: 'Plăcere de weekend. Nu se încadrează într-un plan proteic.',
      tags: ['ready-to-eat', 'high-kcal', 'high-sodium', 'processed', 'summer', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar', 'Chiflă', 'Varză murată', 'Cartofi prăjiți', 'Bere'],
      tips: [
        'Un cârnat de 120 g = 384 kcal și 18 g proteină. Un sfert de pui rotisat = 550 kcal și 60 g proteină, la același preț.',
        'Dacă tot îl iei, mănâncă-l cu varză murată în loc de cartofi prăjiți — salvezi 300 kcal.',
        'Membrana crocantă e semn că e proaspăt de pe grătar; dacă e moale, a stat.'
      ],
      warnings: [
        'Fără etichetă nutrițională — valori estimate.',
        '28 g grăsime/100 g; ~2 g sare.',
        'Carne procesată grătită intens.'
      ],
      storage: 'Se mănâncă imediat; la frigider maxim 2 zile.',
      shelfLife: '2 zile la frigider',
      dataConfidence: 'low',
      sources: ['kaufland.ro Kaufland Grill', 'Estimare nutrițională cârnat la grătar']
    },

    {
      id: 'p-burger-patty-gata',
      name: 'Ready-Cooked Beef Burger Patty',
      nameRo: 'Chiftea de burger gata preparată',
      brand: 'Kaufland raft cald / Cris-Tim raft frigorific',
      category: 'deli-processed',
      subcategory: 'Raft cald & rotiserie',
      emoji: '🍔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Vitrina caldă / raft frigorific produse gata gătite', priceRon: 13.99, packGrams: 250, packLabel: 'caserolă 2 chiftele (250 g)', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft frigorific produse gata preparate', priceRon: 14.99, packGrams: 250, packLabel: 'caserolă 250 g', note: '' },
        { name: 'Lidl', availability: 'occasional', aisle: 'Raft frigorific, campanii burger', priceRon: 12.99, packGrams: 250, packLabel: 'caserolă 250 g', note: 'Apare în campaniile de vară' }
      ],
      sibiuNote: 'Produsul „burger gata” apare mai ales vara. Verifică raftul frigorific cu preparate gata gătite, nu vitrina caldă.',
      per100g: { kcal: 251, protein: 18, carbs: 3, sugars: 0.8, fat: 18.5, satFat: 7.5, fiber: 0.5, salt: 1.5 },
      micros: { ironMg: 2.2, zincMg: 4, b12Ug: 1.8, potassiumMg: 300, cholesterolMg: 70 },
      serving: { grams: 125, label: '1 chiftea (125 g)' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 3,
      cooking: {
        method: 'pan', difficulty: 'trivial', equipment: ['tigaie'],
        steps: [
          'Încălzește tigaia la foc mediu-mare.',
          'Pune chiftelele 2 minute pe fiecare parte, doar ca să se rumenească din nou.',
          'Servește în chiflă sau simplu, cu salată.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Gust de vită la grătar, sărat, cu crustă rumenită',
        intensity: 4, sweetness: 0, saltiness: 3, umami: 5, richness: 4,
        texture: 'Fermă, ușor sfărâmicioasă; reîncălzită se usucă rapid',
        notes: 'Decent ca profil: 18 g proteină la 18,5 g grăsime. Nu excelent, dar mult mai bun decât micii sau cârnații.'
      },
      stats: { taste: 70, satiety: 68, convenience: 88, versatility: 74 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Cină rapidă cu fier și B12 din vită.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'low-carb', 'iron-rich', 'b12', 'processed', 'mid-price', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Chiflă integrală', 'Salată verde', 'Roșii', 'Muștar', 'Ceapă roșie'],
      tips: [
        'Verifică lista de ingrediente: variantele bune au 90%+ carne de vită; cele slabe au pesmet, ceapă deshidratată și proteine vegetale.',
        'Nu o reîncălzi la microunde: se usucă. 2 minute în tigaie fierbinte sunt suficiente.',
        'Ca sursă de fier hemic e mai bună decât aproape orice mezel: ~2,2 mg/100 g.'
      ],
      warnings: [
        'Poate conține gluten (pesmet) și proteine adăugate.',
        '66% din calorii vin din grăsime.',
        'Carne roșie — nu zilnic.'
      ],
      storage: 'Frigider 0–4 °C, 2–3 zile. Se congelează bine.',
      shelfLife: '~7 zile sigilat la frigider',
      dataConfidence: 'low',
      sources: ['Observație raft Kaufland Sibiu', 'Estimare nutrițională burger de vită gătit']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
