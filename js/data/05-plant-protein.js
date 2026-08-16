/* =========================================================================
 * PROTEIN ATLAS SIBIU — PLANT PROTEIN (leguminoase, soia, cereale, nuci, semințe)
 * File: js/data/05-plant-protein.js
 * Items: 72
 * Category slug: plant-protein
 * ID prefix: v-
 * Last researched: 2026-08
 *
 * NOTĂ CRITICĂ DE CITIRE: toate valorile per100g sunt PER PRODUS AȘA CUM SE VINDE.
 * Pentru leguminoase și cereale uscate asta înseamnă CRUDE. 100 g linte uscată
 * (25 g proteină) devine ~230 g linte fiartă (~9 g proteină / 100 g fiartă).
 * Vezi cooking.yieldNote la fiecare intrare uscată.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'v-linte-rosie-uscata',
      name: 'Red Split Lentils, Dry',
      nameRo: 'Linte roșie decorticată, uscată',
      brand: 'generic / Sano Vita / K-Classic (Kaufland)',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🫘',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele cu vrac, tarabele cu cereale și leguminoase din capătul dinspre Fabricii', priceRon: 16, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cel mai bun preț pe kg din tot orașul; cere să vezi boabele, să nu fie prăfoase.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale/paste, lângă orez și cuscus', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft K-Classic leguminoase, jos', priceRon: 9.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Piața Cibin bate supermarketul cu ~40% la kilogram. Mergi marți–joi dimineața; sâmbăta prețul la vrac urcă și cozile sunt mari.',
      per100g: { kcal: 340, protein: 24, carbs: 52, sugars: 2, fat: 1.5, satFat: 0.2, fiber: 9, salt: 0.02 },
      micros: { ironMg: 7.5, zincMg: 3.3, potassiumMg: 710, calciumMg: 48, b12Ug: 0, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈185 g fiartă, o porție de fel principal)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală', 'sită', 'lingură'],
        steps: [
          'Clătește lintea sub jet rece până apa iese limpede (2 min).',
          'Pune 1 parte linte la 2,5 părți apă rece, fără sare.',
          'Fierbe la foc mic 12–15 minute, ia spuma cu polonicul.',
          'Sarea și acidul (lămâie, roșii) se pun DUPĂ ce s-a înmuiat.',
          'Se destramă în ciorbă sau se pasează în supă-cremă.'
        ],
        yieldNote: '100 g linte roșie uscată → ~230 g fiartă. Proteina scade de la 24 g/100 g la ~9 g/100 g gătit.'
      },
      taste: {
        profile: 'Dulceag-pământos, blând, aproape fără amăreală; se topește complet la fiert',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Se destramă total — devine piure natural, nu rămâne bob',
        notes: 'Fără chimion, usturoi și un strop de acid e fadă. Cu ele e una dintre cele mai bune supe ieftine din lume.'
      },
      stats: { taste: 58, satiety: 86, convenience: 46, versatility: 82 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 3 },
      timingNote: 'Fibra + amidonul rezistent o fac lentă la digestie — prânz sau cină, nu pre-antrenament direct.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook', 'slow-digesting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Orez brun', 'Chimion & coriandru măcinat', 'Lămâie', 'Ceapă călită', 'Spanac', 'Iaurt grecesc'],
      tips: [
        'CAPCANA #1 DIN TOATĂ BAZA DE DATE: 24 g proteină/100 g e valoarea CRUDĂ. După fierbere ai ~9 g/100 g. Cântărește uscat, nu fiert.',
        'Nu are nevoie de înmuiere — e singura leguminoasă care se face în 15 minute din pungă.',
        'Nu pune sare la început: întârzie înmuierea cu 5–10 minute la lintea veche.',
        'Combinată cu orez sau pâine în aceeași masă devine proteină completă (lintea e săracă în metionină, cerealele în lizină).'
      ],
      warnings: ['Poate produce balonare la cei neobișnuiți — crește porția gradual pe 2 săptămâni.'],
      storage: 'Borcan etanș, loc uscat și întunecat. Bug-urile de făină intră în pungile deschise.',
      shelfLife: '2 ani sigilată; după 1 an fierbe mai greu',
      dataConfidence: 'high',
      sources: ['USDA FoodData Central, lentils raw', 'Eticheta K-Classic linte roșie', 'sanovita.ro']
    },

    {
      id: 'v-linte-verde-uscata',
      name: 'Green & Brown Lentils, Dry',
      nameRo: 'Linte verde / brună, uscată',
      brand: 'generic / Sun Food / Carrefour',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🟢',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele de vrac cu leguminoase', priceRon: 17, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft leguminoase uscate, lângă fasole', priceRon: 10.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk / horeca, saci de 5 kg', priceRon: 68, packGrams: 5000, packLabel: 'sac 5 kg', note: 'Cel mai ieftin pe kg dacă gătești în serie.' }
      ],
      sibiuNote: 'La Selgros Șelimbăr sacul de 5 kg coboară sub 14 lei/kg — merită dacă ai borcane și faci batch cooking lunar.',
      per100g: { kcal: 335, protein: 25, carbs: 47, sugars: 2, fat: 1.5, satFat: 0.2, fiber: 12, salt: 0.02 },
      micros: { ironMg: 7.5, zincMg: 3.3, potassiumMg: 680, calciumMg: 35, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈190 g fiartă)' },
      effort: 2,
      timeMin: 35,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală', 'sită'],
        steps: [
          'Clătește și alege pietricelele (lintea de vrac are, cea la pungă rar).',
          'Fierbe în apă rece, 1:3, fără sare, 25–30 minute.',
          'Gustă un bob: trebuie moale, dar să-și țină forma.',
          'Scurge și condimentează cu oțet de mere sau muștar — acidul o scoate din fadență.'
        ],
        yieldNote: '100 g linte verde uscată → ~230 g fiartă (~9,5 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Mai pământoasă și mai piperată decât cea roșie, cu o notă de nucă',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Bobul rămâne întreg și ușor ferm — bună la salate',
        notes: 'E lintea de salată, nu de supă. Dacă o fierbi până se face piure ai greșit sortimentul.'
      },
      stats: { taste: 60, satiety: 88, convenience: 40, versatility: 80 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Indice glicemic mic — ține de foame 4–5 ore, ideală la prânzul de birou în salată rece.',
      tags: ['very-high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook', 'meal-prep'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ceapă roșie', 'Roșii cherry', 'Ulei de măsline & oțet', 'Pătrunjel', 'Brânză feta', 'Nuci prăjite'],
      tips: [
        'Nu are nevoie de înmuiere peste noapte, dar 1 oră în apă caldă taie 10 minute de fiert.',
        'Fierbe 500 g odată, scurge, ține 4 zile la frigider — e baza a 5 prânzuri.',
        'Cântărește uscat. 25 g proteină/100 g devine ~9,5 g/100 g după fierbere.',
        'O foaie de dafin și o bucată de alge kombu în apa de fiert reduc balonarea vizibil.'
      ],
      warnings: ['Lintea de vrac poate conține pietricele — clătește și verifică, un molar rupt costă mai mult decât punga.'],
      storage: 'Borcan etanș, cămară uscată.',
      shelfLife: '2 ani; peste 18 luni fierbe cu 10 minute mai mult',
      dataConfidence: 'high',
      sources: ['USDA FoodData Central, lentils raw', 'CIQUAL lentilles sèches']
    },

    {
      id: 'v-linte-beluga-uscata',
      name: 'Beluga Black Lentils, Dry',
      nameRo: 'Linte neagră beluga, uscată',
      brand: 'generic / Sun Food / bio',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '⚫',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio / K-Bio, lângă quinoa', priceRon: 14.9, packGrams: 400, packLabel: 'pungă 400 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 16.9, packGrams: 400, packLabel: 'pungă 400 g', note: 'Nu e mereu pe stoc.' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online (Vegis, Naturalia)', priceRon: 22, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'În Sibiu o găsești sigur la Kaufland Șelimbăr și la Carrefour din Promenada; magazinele bio mici din centru o au dar la preț dublu.',
      per100g: { kcal: 340, protein: 26, carbs: 47, sugars: 2, fat: 1.6, satFat: 0.2, fiber: 12, salt: 0.02 },
      micros: { ironMg: 8, zincMg: 3.4, potassiumMg: 700, calciumMg: 40, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈185 g fiartă)' },
      effort: 2,
      timeMin: 30,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală', 'sită'],
        steps: [
          'Clătește 30 de secunde — lasă apă violet-închisă, e normal (antociani).',
          'Fierbe 1:3 în apă rece, 20–25 minute, fără sare.',
          'Scurge imediat, altfel continuă să se înmoaie în apa fierbinte.',
          'Condimentează cald cu ulei de măsline și oțet balsamic.'
        ],
        yieldNote: '100 g beluga uscată → ~225 g fiartă (~10 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Cea mai bogată linte: pământoasă, ușor dulce, cu final de ciupercă',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 3,
        richness: 2,
        texture: 'Bob mic, lucios, care pocnește ușor sub dinte — nu se destramă niciodată',
        notes: 'Singura linte pe care o mănânc simplă cu ulei și sare. Merită diferența de preț când vrei să impresionezi.'
      },
      stats: { taste: 72, satiety: 88, convenience: 38, versatility: 70 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Ca toate lintea, digestie lentă — o cină care nu te lasă flămând la 23:00.',
      tags: ['very-high-protein', 'high-fiber', 'cheap-protein', 'shelf-stable', 'whole-food', 'iron-rich', 'meal-prep', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Somon', 'Sfeclă roșie coaptă', 'Capere', 'Cremă de hrean', 'Rucola'],
      tips: [
        'Se numește beluga pentru că arată ca icrele negre — folosește-o unde se vede, nu în ciorbă.',
        'Antocianii se pierd dacă o fierbi prea mult; 22 de minute e maximul.',
        'Cântărește uscat: 26 g/100 g crud → ~10 g/100 g fiert.',
        'E cu ~50% mai scumpă decât lintea verde și dă exact aceeași proteină — cumpăr-o pentru textură, nu pentru macro.'
      ],
      warnings: [],
      storage: 'Borcan etanș, ferit de lumină (lumina decolorează boabele).',
      shelfLife: '2 ani',
      dataConfidence: 'medium',
      sources: ['USDA lentils raw (proxy)', 'Etichete Sun Food / K-Bio']
    },

    {
      id: 'v-naut-uscat',
      name: 'Chickpeas, Dry',
      nameRo: 'Năut uscat',
      brand: 'generic / Sun Food / K-Classic (Kaufland)',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🟡',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele de vrac, alături de fasole', priceRon: 15, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cere năut cu bob mare (kabuli) — se face mai cremos.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft leguminoase, lângă linte', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'K-Classic, raft leguminoase', priceRon: 9.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Nautul de la Piața Cibin e cel mai ieftin din Sibiu (15–17 lei/kg) și de obicei mai proaspăt decât cel de la raft, care poate sta un an.',
      per100g: { kcal: 364, protein: 20, carbs: 51, sugars: 5, fat: 6, satFat: 0.6, fiber: 12, salt: 0.05 },
      micros: { ironMg: 6.2, zincMg: 3.4, potassiumMg: 875, calciumMg: 105, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscat (≈190 g fiert)' },
      effort: 3,
      timeMin: 780,
      activeTimeMin: 10,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['castron mare', 'oală', 'sită'],
        steps: [
          'Înmoaie 12 ore în apă rece cu 1/2 linguriță bicarbonat la litru (înmoaie coaja).',
          'Aruncă apa de înmuiere — ea conține oligozaharidele care dau gaze.',
          'Fierbe în apă proaspătă 50–70 minute (sau 18 minute la oala sub presiune).',
          'Sare doar în ultimele 10 minute.',
          'Pentru humus, fierbe încă 15 minute peste punctul de moale — trebuie să se strivească între degete.'
        ],
        yieldNote: '100 g năut uscat → ~240 g fiert. Proteina: 20 g/100 g crud → ~8,9 g/100 g fiert.'
      },
      taste: {
        profile: 'Nucos, ușor dulce, cu textură făinoasă-cremoasă când e bine fiert',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Ferm la exterior, făinos la interior; devine cremos abia după 60 de minute',
        notes: 'Nautul prost fiert e nisipos și dezamăgitor. Diferența dintre un humus bun și unul rău e 15 minute de fiert în plus.'
      },
      stats: { taste: 66, satiety: 90, convenience: 25, versatility: 88 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Foarte sățios per calorie; masa de prânz cu năut ține până seara fără gustare.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Tahini', 'Lămâie', 'Usturoi', 'Boia afumată', 'Spanac', 'Chimion'],
      tips: [
        'Bicarbonatul la înmuiere (nu la fiert) scade timpul de fierbere cu 20 de minute și dă humus mătăsos.',
        'Apa de fierbere / din conservă (aquafaba) bate ca albușul — 3 linguri = 1 albuș în rețete vegane.',
        '20 g proteină/100 g e valoarea uscată. Fiert ajungi la ~9 g/100 g — un castron de 250 g fiert = ~22 g proteină.',
        'Fierbe 1 kg odată și congelează în pungi de 250 g; se dezgheață în 10 minute și e mai ieftin de 4x decât conserva.'
      ],
      warnings: ['Necesită înmuiere — nu e o soluție de seara la 19:00 dacă nu ai planificat.'],
      storage: 'Borcan etanș, cămară.',
      shelfLife: '2–3 ani, dar nautul vechi de peste 2 ani nu se mai înmoaie niciodată complet',
      dataConfidence: 'high',
      sources: ['USDA chickpeas raw', 'Eticheta K-Classic năut']
    },

    {
      id: 'v-fasole-alba-uscata',
      name: 'White Beans, Dry',
      nameRo: 'Fasole albă boabe, uscată',
      brand: 'generic / Sun Food',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🤍',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Vrac, tarabele de leguminoase; vara și fasole nouă de la producători din zona Ocna Sibiului', priceRon: 14, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Fasolea nouă (recoltă de toamnă) fierbe în jumătate din timp.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft leguminoase', priceRon: 7.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft conserve & uscate', priceRon: 8.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Toamna (octombrie–noiembrie) în Piața Cibin apare fasole de recoltă nouă de la producători locali — fierbe în 45 de minute în loc de 90 și are gust net mai bun.',
      per100g: { kcal: 333, protein: 21, carbs: 45, sugars: 2.5, fat: 1.5, satFat: 0.3, fiber: 15, salt: 0.02 },
      micros: { ironMg: 6.5, zincMg: 3.7, potassiumMg: 1300, calciumMg: 240, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈180 g fiartă)' },
      effort: 3,
      timeMin: 840,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['castron', 'oală', 'sită'],
        steps: [
          'Înmoaie 12 ore în apă rece, schimbând apa o dată.',
          'Aruncă apa, pune apă nouă, fierbe 10 minute la clocot mare, aruncă din nou apa (trucul clasic anti-balonare din bucătăria ardelenească).',
          'Fierbe încă 60–80 de minute în apă nouă cu o foaie de dafin.',
          'Sare abia la final.',
          'Pentru fasole bătută: pasează caldă cu ceapă călită în ulei și boia.'
        ],
        yieldNote: '100 g fasole albă uscată → ~230 g fiartă (~8 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Blândă, ușor dulceagă, cu textură untoasă când e bine fiartă',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Cremoasă la interior, coaja fină; se pasează perfect',
        notes: 'Baza fasolei bătute și a iahniei — două dintre cele mai bune mese ieftine cu proteină din bucătăria românească.'
      },
      stats: { taste: 64, satiety: 92, convenience: 22, versatility: 78 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Cea mai sățioasă leguminoasă din listă per calorie; nu o mânca chiar înainte de culcare dacă ești sensibil la balonare.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ceapă călită', 'Boia dulce', 'Cimbru', 'Usturoi', 'Roșii', 'Mărar'],
      tips: [
        'Dubla fierbere (aruncă prima apă după 10 minute) elimină ~80% din oligozaharidele care dau gaze.',
        'Fasolea de peste 2 ani nu se mai face moale niciodată, oricât ai fierbe — cumpără din recolta anului.',
        '21 g proteină/100 g e crud. Fasolea bătută are ~7 g/100 g pentru că ai adăugat și ulei și apă.',
        'Un castron de iahnie de 350 g are ~25 g proteină și costă sub 3 lei — nu există proteină mai ieftină în România.'
      ],
      warnings: ['Nu consuma fasolea insuficient fiartă — lectinele (fitohemaglutinina) provoacă greață. Minim 60 de minute de clocot real.'],
      storage: 'Borcan etanș, loc răcoros și uscat.',
      shelfLife: '2 ani realist, deși teoretic ține mai mult',
      dataConfidence: 'high',
      sources: ['USDA white beans raw', 'CIQUAL haricots blancs secs']
    },

    {
      id: 'v-fasole-rosie-uscata',
      name: 'Red Kidney Beans, Dry',
      nameRo: 'Fasole roșie (kidney), uscată',
      brand: 'generic / Sun Food',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🔴',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Vrac leguminoase', priceRon: 16, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft leguminoase uscate', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft leguminoase', priceRon: 10.5, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Se găsește peste tot, dar în Piața Cibin poți cumpăra 300 g dacă vrei să testezi o rețetă fără să te angajezi la o pungă întreagă.',
      per100g: { kcal: 337, protein: 22.5, carbs: 46, sugars: 2.2, fat: 1.1, satFat: 0.2, fiber: 15, salt: 0.02 },
      micros: { ironMg: 8.2, zincMg: 2.8, potassiumMg: 1400, calciumMg: 143, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈180 g fiartă)' },
      effort: 3,
      timeMin: 840,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['castron', 'oală'],
        steps: [
          'Înmoaie obligatoriu 12 ore. Fasolea roșie are cel mai mare conținut de lectine din listă.',
          'Aruncă apa de înmuiere.',
          'Fierbe minim 10 minute la clocot puternic, apoi 50–70 minute la foc mediu.',
          'Sare la final.',
          'Se combină perfect cu ardei, chimen și boia afumată (chili sin carne).'
        ],
        yieldNote: '100 g fasole roșie uscată → ~230 g fiartă (~8,7 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Pământoasă, robustă, cu coajă groasă și interior făinos-dulceag',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Bob mare, ferm, cu coajă vizibilă — nu se destramă în tocănițe',
        notes: 'E fasolea care rezistă la 2 ore de fiert în sos fără să se facă terci. Ideală pentru chili.'
      },
      stats: { taste: 62, satiety: 92, convenience: 22, versatility: 76 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Digestie foarte lentă — masa de prânz cu chili te ține 5–6 ore.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Porumb dulce', 'Chimen', 'Boia afumată', 'Ardei roșu', 'Orez brun', 'Avocado'],
      tips: [
        'NU o găti la slow cooker fără fierbere prealabilă la clocot: 80 °C activează lectinele în loc să le distrugă.',
        'Fasole roșie + orez brun = profil complet de aminoacizi, clasicul cuplu al bucătăriilor sărace din toată lumea.',
        '22,5 g/100 g crud → ~8,7 g/100 g fiert. O conservă scursă de 240 g are ~17 g proteină.',
        'Congelează porționat după fierbere; textura rezistă mai bine la congelare decât cea a lintei.'
      ],
      warnings: ['Fasolea roșie crudă sau prost fiartă e toxică (fitohemaglutinină). 10 minute clocot violent, obligatoriu.'],
      storage: 'Borcan etanș.',
      shelfLife: '2 ani',
      dataConfidence: 'high',
      sources: ['USDA kidney beans raw', 'FDA Bad Bug Book — phytohaemagglutinin']
    },

    {
      id: 'v-fasole-neagra-uscata',
      name: 'Black Beans, Dry',
      nameRo: 'Fasole neagră, uscată',
      brand: 'generic / Sun Food',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🖤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft leguminoase / raft internațional', priceRon: 11.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft produse mexicane / bio', priceRon: 13.5, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online', priceRon: 18, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Mai greu de găsit uscată în Sibiu decât la conservă. Kaufland Șelimbăr o are aproape mereu; în rest mizează pe conservă.',
      per100g: { kcal: 341, protein: 21.6, carbs: 47, sugars: 2.1, fat: 1.4, satFat: 0.35, fiber: 15.5, salt: 0.02 },
      micros: { ironMg: 5, zincMg: 3.6, potassiumMg: 1480, calciumMg: 123, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈180 g fiartă)' },
      effort: 3,
      timeMin: 800,
      activeTimeMin: 12,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['castron', 'oală'],
        steps: [
          'Înmoaie 8–12 ore.',
          'Aruncă apa, fierbe 60–75 de minute cu o ceapă tăiată în două și o foaie de dafin.',
          'Sare în ultimele 10 minute.',
          'Păstrează 100 ml din lichidul de fierbere: e negru, gelatinos și leagă orice sos.'
        ],
        yieldNote: '100 g fasole neagră uscată → ~230 g fiartă (~8,7 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Cea mai dulce și mai catifelată dintre fasoli, cu note de ciocolată neagră',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 3,
        richness: 2,
        texture: 'Bob mediu, coajă subțire, interior mătăsos',
        notes: 'Chiar bună simplă, cu lime și coriandru. Se strecoară și în brownies fără să o simtă nimeni.'
      },
      stats: { taste: 70, satiety: 90, convenience: 24, versatility: 80 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 3, dinner: 5, beforeBed: 2 },
      timingNote: 'Bogată în amidon rezistent — hrănește microbiomul și menține glicemia plată ore întregi.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'bulk-buy', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lime', 'Coriandru verde', 'Ardei iute', 'Orez', 'Avocado', 'Porumb'],
      tips: [
        'Fasolea neagră are cel mai mare conținut de antociani dintre leguminoase — apa de fierbere e neagră, nu o arunca dacă faci sos.',
        'Fasole neagră + orez = combinația clasică cu profil complet de aminoacizi.',
        'Cântărește uscat: 21,6 g/100 g crud, ~8,7 g/100 g fiert.',
        'Se congelează excepțional de bine în propriul lichid; textura rămâne intactă 3 luni.'
      ],
      warnings: ['Ca la toate fasolele: fierbere completă obligatorie.'],
      storage: 'Borcan etanș.',
      shelfLife: '2 ani',
      dataConfidence: 'high',
      sources: ['USDA black beans raw']
    },

    {
      id: 'v-mazare-despicata-uscata',
      name: 'Split Peas (Green & Yellow), Dry',
      nameRo: 'Mazăre despicată uscată (verde & galbenă)',
      brand: 'generic / K-Classic (Kaufland)',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🟩',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Vrac leguminoase', priceRon: 11, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cea mai ieftină leguminoasă din piață.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft leguminoase', priceRon: 6.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft cereale & leguminoase', priceRon: 6.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Sub 13 lei/kg la Lidl, ~11 lei/kg în piață: mazărea despicată e cel mai ieftin gram de proteină pe care îl poți cumpăra în Sibiu.',
      per100g: { kcal: 341, protein: 24.5, carbs: 45, sugars: 8, fat: 1.2, satFat: 0.2, fiber: 15, salt: 0.04 },
      micros: { ironMg: 4.4, zincMg: 3.5, potassiumMg: 980, calciumMg: 55, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscată (≈185 g fiartă)' },
      effort: 2,
      timeMin: 45,
      activeTimeMin: 8,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală', 'blender vertical (opțional)'],
        steps: [
          'Clătește; nu are nevoie de înmuiere.',
          'Fierbe 1:3 în apă rece, 35–45 de minute, amestecând ocazional (se lipește).',
          'Se destramă natural în piure gros.',
          'Pentru un piure de mazăre de post: pasează cu ulei de floarea-soarelui, sare și ceapă crudă deasupra.'
        ],
        yieldNote: '100 g mazăre despicată uscată → ~230 g fiartă (~9 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Dulceagă, moale, cu gust de mazăre concentrat și o notă de fum dacă o rumenești',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Piure gros, catifelat, care se întărește la rece ca o pastă',
        notes: 'Piureul de mazăre (fără carne) e un fel de post românesc clasic, cu 20+ g proteină pe porție și cost sub 2 lei.'
      },
      stats: { taste: 60, satiety: 90, convenience: 42, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Foarte sățioasă și foarte ieftină — masa de prânz de bază când bugetul e strâns.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'batch-cook', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ceapă crudă', 'Ulei de floarea-soarelui', 'Cimbru', 'Morcov', 'Usturoi prăjit', 'Pâine integrală'],
      tips: [
        'Se lipește de fundul oalei mai ușor decât orice altă leguminoasă — folosește o oală cu fund gros și amestecă.',
        'Amestecă piureul de mazăre cu 30 g granule de soia hidratate: ajungi la 30+ g proteină pe porție la cost aproape zero.',
        '24,5 g proteină/100 g e valoarea uscată; fiartă ai ~9 g/100 g.',
        'Mazărea galbenă e mai dulce, cea verde mai ierboasă — la macro sunt identice.'
      ],
      warnings: [],
      storage: 'Borcan etanș.',
      shelfLife: '18–24 luni',
      dataConfidence: 'high',
      sources: ['USDA split peas raw', 'CIQUAL pois cassés secs']
    },

    {
      id: 'v-bob-uscat',
      name: 'Fava Beans (Broad Beans), Dry',
      nameRo: 'Bob uscat',
      brand: 'generic',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🫛',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Tarabele de vrac; primăvara și bob verde proaspăt în păstăi', priceRon: 18, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Se găsește neregulat — întreabă la tarabele mari de leguminoase.' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio / orientale online', priceRon: 22, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Deseori sub numele arab foul / ful medames.' },
        { name: 'Metro', availability: 'occasional', aisle: 'Raft internațional / orientale', priceRon: 24, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' }
      ],
      sibiuNote: 'Cea mai greu de găsit leguminoasă din listă în Sibiu. Dacă o vezi în Piața Cibin, ia 2 kg — poate lipsi luni întregi.',
      per100g: { kcal: 341, protein: 26, carbs: 42, sugars: 5.7, fat: 1.5, satFat: 0.25, fiber: 25, salt: 0.03 },
      micros: { ironMg: 6.7, zincMg: 3.1, potassiumMg: 1060, calciumMg: 103, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscat (≈180 g fiert)' },
      effort: 4,
      timeMin: 900,
      activeTimeMin: 25,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['castron mare', 'oală', 'sită'],
        steps: [
          'Înmoaie 24 de ore (da, 24) schimbând apa de 2 ori.',
          'Dacă e bob cu coajă, decojește boabele după înmuiere — coaja e amară și tare.',
          'Fierbe 60–90 de minute până se face cremos.',
          'Zdrobește parțial, condimentează cu chimion, usturoi, lămâie și ulei de măsline (ful medames).'
        ],
        yieldNote: '100 g bob uscat → ~225 g fiert (~11 g proteină/100 g fiert — cel mai bogat rezultat gătit dintre leguminoase).'
      },
      taste: {
        profile: 'Puternic, ușor amărui, foarte pământos — cea mai intensă leguminoasă',
        intensity: 4,
        sweetness: 1,
        saltiness: 0,
        umami: 3,
        richness: 2,
        texture: 'Făinos și dens, aproape ca o cartof-piure gros',
        notes: 'Nu e pentru toată lumea. Cu multă lămâie și ulei bun devine un mic dejun egiptean excelent; simplu e greoi.'
      },
      stats: { taste: 52, satiety: 94, convenience: 15, versatility: 55 },
      timing: { breakfast: 4, preWorkout: 1, postWorkout: 2, lunch: 5, snack: 1, dinner: 4, beforeBed: 1 },
      timingNote: 'În Egipt e mic dejun; cu 25 g fibră/100 g te ține până seara, dar e greu la cină.',
      tags: ['very-high-protein', 'high-fiber', 'cheap-protein', 'shelf-stable', 'whole-food', 'iron-rich', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lămâie', 'Chimion', 'Ulei de măsline', 'Ou fiert', 'Roșii', 'Pâine pita'],
      tips: [
        'E singura leguminoasă din listă care depășește 10 g proteină/100 g DUPĂ fierbere.',
        '25 g fibră la 100 g uscat — crește porția foarte lent sau vei regreta.',
        'Cumpără bob decojit (split fava) dacă îl găsești: sare peste 24 de ore de înmuiere și 20 de minute de decojit.',
        'Bobul proaspăt de primăvară din Piața Cibin e alt aliment: doar ~7 g proteină/100 g, dar delicios călit cu usturoi.'
      ],
      warnings: ['FAVISM: persoanele cu deficit de G6PD (mai frecvent la mediteraneeni) pot face hemoliză severă după consum de bob. Dacă nu știi statusul tău G6PD și ai istoric familial de anemie hemolitică, evită.'],
      storage: 'Borcan etanș, ferit de umezeală.',
      shelfLife: '2 ani',
      dataConfidence: 'medium',
      sources: ['USDA fava beans raw', 'CIQUAL fèves sèches']
    },

    {
      id: 'v-soia-boabe-uscata',
      name: 'Soybeans, Dry',
      nameRo: 'Soia boabe, uscată',
      brand: 'generic / bio',
      category: 'plant-protein',
      subcategory: 'Leguminoase uscate',
      emoji: '🌱',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online (Vegis, Solaris, Naturalia)', priceRon: 16, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Caută soia non-OMG certificată.' },
        { name: 'Piața Cibin', availability: 'occasional', aisle: 'Tarabe de vrac, rar', priceRon: 14, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio', priceRon: 15.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Soia boabe e nișă în Sibiu — realist o comanzi online. Alternativele procesate (tofu, granule) sunt peste tot.',
      per100g: { kcal: 446, protein: 36, carbs: 21, sugars: 7, fat: 20, satFat: 2.9, fiber: 9, salt: 0.01 },
      micros: { ironMg: 15.7, zincMg: 4.9, potassiumMg: 1800, calciumMg: 277, omega3Mg: 1400, cholesterolMg: 0 },
      serving: { grams: 60, label: '60 g uscată (≈140 g fiartă)' },
      effort: 4,
      timeMin: 960,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['castron mare', 'oală sub presiune (recomandat)'],
        steps: [
          'Înmoaie 12–16 ore la frigider (la temperatura camerei fermentează).',
          'Aruncă apa și clătește bine.',
          'Fierbe 2,5–3 ore la oală normală SAU 35–40 de minute la oala sub presiune.',
          'Ia spuma abundentă din primele 15 minute.',
          'Se folosește în tocănițe, se prăjește crocant la cuptor sau se transformă în lapte de soia.'
        ],
        yieldNote: '100 g soia uscată → ~220 g fiartă (~16 g proteină/100 g fiartă — record absolut).'
      },
      taste: {
        profile: 'Gras, nucos, cu o notă de fasole verde crudă care persistă dacă nu e bine fiartă',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 3,
        richness: 3,
        texture: 'Bob ferm, ușor cauciucat chiar și bine fiert — nu devine niciodată cremos ca năutul',
        notes: 'Sincer: e cea mai puțin plăcută leguminoasă de mâncat simplă. Motivul pentru care omenirea a inventat tofu.'
      },
      stats: { taste: 40, satiety: 92, convenience: 12, versatility: 66 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 4, lunch: 4, snack: 2, dinner: 4, beforeBed: 2 },
      timingNote: 'Singura proteină vegetală completă din secțiunea de leguminoase — utilă post-antrenament dacă nu consumi lactate.',
      tags: ['very-high-protein', 'protein-dense', 'complete-protein', 'high-fiber', 'cheap-protein', 'shelf-stable', 'whole-food', 'iron-rich', 'calcium-rich', 'omega3', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Ghimbir', 'Ulei de susan', 'Morcov', 'Alge kombu'],
      tips: [
        'Are scor PDCAAS ~0,9–1,0: singura leguminoasă cu profil complet de aminoacizi, la nivel de proteină animală.',
        'Oala sub presiune transformă un proiect de 3 ore într-unul de 40 de minute — merită investiția dacă gătești soia des.',
        'Prăjită la cuptor 40 min la 180 °C cu sare devine o gustare crocantă cu 36 g proteină/100 g.',
        '36 g/100 g crud → ~16 g/100 g fiert. Chiar și fiartă bate orice altă leguminoasă.'
      ],
      warnings: ['Conține inhibitori de tripsină care se distrug doar prin fierbere completă — nu consuma soia insuficient gătită.', 'Alergen major (soia).'],
      storage: 'Borcan etanș, ferit de căldură (grăsimea râncezește).',
      shelfLife: '12–18 luni (mai scurt decât alte leguminoase din cauza grăsimii)',
      dataConfidence: 'high',
      sources: ['USDA soybeans mature raw', 'CIQUAL graines de soja']
    },

    {
      id: 'v-linte-rosie-fiarta',
      name: 'Red Lentils, Cooked',
      nameRo: 'Linte roșie fiartă (gata gătită)',
      brand: 'generic (preparat în casă)',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🍲',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Cumperi lintea uscată la vrac și o fierbi acasă', priceRon: 16, packGrams: 1000, packLabel: 'vrac 1 kg uscată → ~2,3 kg fiartă', note: 'Costul real al lintei fierte: ~7 lei/kg.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft leguminoase (uscată)', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g uscată → ~1,15 kg fiartă', note: '' }
      ],
      sibiuNote: 'Nu se vinde gata fiartă în Sibiu — această intrare există exact ca să vezi negru pe alb cât scade proteina după fierbere.',
      per100g: { kcal: 116, protein: 9, carbs: 17, sugars: 1.5, fat: 0.4, satFat: 0.1, fiber: 4, salt: 0.3 },
      micros: { ironMg: 3.3, zincMg: 1.3, potassiumMg: 370, calciumMg: 19, cholesterolMg: 0 },
      serving: { grams: 250, label: '1 castron (250 g fiartă) = ~22 g proteină' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală', 'sită'],
        steps: [
          'Clătește 80 g linte roșie uscată.',
          'Fierbe cu 200 ml apă, 13 minute.',
          'Sare, piper, o linguriță de chimion, zeamă de lămâie.',
          'Obții ~185 g linte fiartă cu ~17 g proteină.'
        ],
        yieldNote: '100 g uscată → 230 g fiartă. Aici se vede clar: 24 g proteină devine 9 g la aceeași sută de grame.'
      },
      taste: {
        profile: 'Blândă, cremoasă, ușor dulce — practic un piure',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Piure fin, aproape supă groasă',
        notes: 'Gustul depinde 90% de condimente. Lintea fiartă simplă e neutră până la plictisitor.'
      },
      stats: { taste: 55, satiety: 84, convenience: 55, versatility: 80 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Deja hidratată — mai ușor de digerat decât leguminoasa uscată gătită repede.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'whole-food', 'meal-prep', 'batch-cook', 'low-fat', 'iron-rich'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Orez', 'Iaurt', 'Ceapă prăjită', 'Spanac', 'Lămâie'],
      tips: [
        'ASTA E LECȚIA: 9 g proteină/100 g fiartă, nu 24. Aplicațiile de tracking greșesc constant aici.',
        'Ca să iei 30 g proteină ai nevoie de ~330 g linte fiartă — un castron plin, nu o garnitură.',
        'Ține 4 zile la frigider și se congelează bine în porții de 200 g.',
        'Dacă o cântărești fiartă și o treci în aplicație ca uscată, îți supraestimezi proteina de 2,6 ori.'
      ],
      warnings: [],
      storage: 'Frigider, recipient închis, 4 zile. Congelator 3 luni.',
      shelfLife: '4 zile la frigider',
      dataConfidence: 'high',
      sources: ['USDA lentils cooked boiled', 'Calcul propriu al randamentului 1:2,3']
    },

    {
      id: 'v-naut-fiert-casa',
      name: 'Chickpeas, Home-Cooked',
      nameRo: 'Năut fiert în casă',
      brand: 'generic (preparat în casă)',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Năut uscat la vrac, fiert acasă', priceRon: 15, packGrams: 1000, packLabel: 'vrac 1 kg uscat → ~2,4 kg fiert', note: 'Costul nautului fiert în casă: ~6,3 lei/kg vs ~14 lei/kg la conservă.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft leguminoase (uscat)', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g uscat', note: '' }
      ],
      sibiuNote: 'Un kilogram de năut uscat din Piața Cibin (15 lei) înlocuiește 10 conserve (≈60 lei). Diferența plătește oala sub presiune în două luni.',
      per100g: { kcal: 164, protein: 8.9, carbs: 22, sugars: 4, fat: 2.6, satFat: 0.3, fiber: 7.6, salt: 0.2 },
      micros: { ironMg: 2.9, zincMg: 1.5, potassiumMg: 290, calciumMg: 49, cholesterolMg: 0 },
      serving: { grams: 250, label: '1 castron (250 g fiert) = ~22 g proteină' },
      effort: 3,
      timeMin: 780,
      activeTimeMin: 12,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['castron', 'oală sub presiune sau oală obișnuită'],
        steps: [
          'Înmoaie 500 g năut 12 ore cu 1 linguriță bicarbonat.',
          'Clătește, fierbe 55 de minute (sau 18 la presiune).',
          'Scurge, păstrează 200 ml aquafaba.',
          'Împarte în 5 pungi de ~240 g și congelează 4 dintre ele.'
        ],
        yieldNote: '100 g năut uscat → ~240 g fiert. 20 g proteină/100 g crud → 8,9 g/100 g fiert.'
      },
      taste: {
        profile: 'Nucos și dulceag, mai gustos decât cel din conservă pentru că nu stă în saramură',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 2,
        richness: 2,
        texture: 'Cremos la interior, coaja se desprinde ușor',
        notes: 'Nautul fiert în casă bate conserva la gust cu o marjă mare. Conserva are un gust metalic-sărat pe care nu îl scoți complet nici la clătire.'
      },
      stats: { taste: 70, satiety: 88, convenience: 35, versatility: 90 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 4, dinner: 5, beforeBed: 3 },
      timingNote: 'Excelent la prânz; o mână de năut copt e cea mai bună gustare crocantă cu proteină din listă.',
      tags: ['cheap-protein', 'budget', 'high-fiber', 'whole-food', 'meal-prep', 'batch-cook', 'iron-rich'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Tahini', 'Lămâie', 'Boia afumată', 'Ulei de măsline', 'Pătrunjel', 'Ceapă roșie'],
      tips: [
        'Năut fiert + 200 °C cuptor 30 min + boia = gustare crocantă cu 9 g proteină/100 g și 1,6 lei porția.',
        'Congelează-l în lichidul lui: rămâne cremos, nu se usucă.',
        '8,9 g proteină/100 g fiert. Ca să iei 25 g îți trebuie ~280 g — mai mult decât crezi.',
        'Aquafaba congelată în forme de gheață = albuș vegan la îndemână oricând.'
      ],
      warnings: [],
      storage: 'Frigider 4 zile în lichidul propriu; congelator 3 luni.',
      shelfLife: '4 zile la frigider',
      dataConfidence: 'high',
      sources: ['USDA chickpeas cooked boiled', 'Calcul randament 1:2,4']
    },

    {
      id: 'v-naut-conserva-bonduelle',
      name: 'Canned Chickpeas',
      nameRo: 'Năut boabe la conservă',
      brand: 'Bonduelle',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve legume, lângă porumb și mazăre', priceRon: 5.49, packGrams: 400, packLabel: 'conservă 400 g (240 g scurs)', note: 'K-Classic e cu ~2 lei mai ieftin la aceeași calitate.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft conserve', priceRon: 5.29, packGrams: 400, packLabel: 'conservă 400 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft conserve legume', priceRon: 7.49, packGrams: 400, packLabel: 'conservă 400 g Bonduelle', note: 'Brandul Bonduelle costă mai mult; boabele sunt ceva mai ferme.' }
      ],
      sibiuNote: 'Toate hipermarketurile din Sibiu au minim 3 variante. Verifică gramajul SCURS de pe etichetă (240 g), nu cel brut (400 g) — de acolo vine confuzia la calculul proteinei.',
      per100g: { kcal: 145, protein: 7.5, carbs: 18, sugars: 1.5, fat: 2.6, satFat: 0.3, fiber: 6, salt: 0.6 },
      micros: { ironMg: 2.1, zincMg: 1.2, potassiumMg: 240, calciumMg: 45, cholesterolMg: 0 },
      serving: { grams: 240, label: '1 conservă scursă (240 g) = ~18 g proteină' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['deschizător', 'sită'],
        steps: [
          'Deschide, scurge într-o sită.',
          'Clătește 20 de secunde sub jet rece — scoate ~40% din sodiu și gustul metalic.'
        ],
        yieldNote: 'Conservă 400 g brut = ~240 g năut scurs = ~18 g proteină.'
      },
      taste: {
        profile: 'Blând, ușor sărat, cu o notă metalică de conservă care se atenuează la clătire',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 2,
        texture: 'Moale, uneori prea moale — boabele se strivesc ușor',
        notes: 'Nu bate nautul fiert în casă la gust, dar diferența dintre 2 minute și 13 ore de efort e greu de argumentat într-o marți seara.'
      },
      stats: { taste: 62, satiety: 82, convenience: 96, versatility: 90 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 4, dinner: 5, beforeBed: 3 },
      timingNote: 'Soluția de urgență pentru o cină cu proteină în 5 minute când nu ai gătit nimic.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'high-fiber', 'cheap-protein', 'budget', 'office-lunch', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ton la conservă', 'Roșii cherry', 'Ceapă roșie', 'Ulei de măsline', 'Lămâie', 'Tahini'],
      tips: [
        'Doar 7,5 g proteină/100 g — o conservă întreagă scursă abia ajunge la 18 g. Nu e o sursă densă, e o sursă comodă.',
        'Păstrează lichidul (aquafaba): 3 linguri bătute înlocuiesc un albuș în mousse sau maioneză vegană.',
        'Costul: ~23 lei/kg năut scurs, față de ~6,3 lei/kg dacă îl fierbi din uscat. Plătești 3,7x pentru comoditate.',
        'Clătește întotdeauna: reduce sarea de la 0,6 g la ~0,35 g/100 g.'
      ],
      warnings: ['Sarea adăugată e semnificativă la conservele necalătite — atenție dacă urmărești sodiul.'],
      storage: 'Cămară până la deschidere; după deschidere transferă în recipient de sticlă, 3 zile la frigider.',
      shelfLife: '2–3 ani sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta Bonduelle năut', 'bonduelle.ro']
    },

    {
      id: 'v-fasole-rosie-conserva',
      name: 'Canned Red Kidney Beans',
      nameRo: 'Fasole roșie boabe la conservă',
      brand: 'K-Classic (Kaufland)',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve legume, K-Classic', priceRon: 4.99, packGrams: 400, packLabel: 'conservă 400 g (240 g scurs)', note: 'Cea mai ieftină variantă din Sibiu.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft conserve', priceRon: 5.29, packGrams: 400, packLabel: 'conservă 400 g', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Raft conserve', priceRon: 5.49, packGrams: 400, packLabel: 'conservă 400 g', note: '' }
      ],
      sibiuNote: 'Kaufland Șelimbăr are constant fasole roșie K-Classic sub 5 lei conserva; la promoțiile de weekend coboară spre 4,2 lei.',
      per100g: { kcal: 105, protein: 7, carbs: 14, sugars: 1.5, fat: 0.5, satFat: 0.1, fiber: 6.5, salt: 0.7 },
      micros: { ironMg: 2.2, zincMg: 1, potassiumMg: 400, calciumMg: 50, cholesterolMg: 0 },
      serving: { grams: 240, label: '1 conservă scursă (240 g) = ~17 g proteină' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['deschizător', 'sită'],
        steps: [
          'Scurge și clătește bine — lichidul roz e tulbure și are gust de tablă.',
          'Se poate mânca direct sau încălzi 3 minute în sos de roșii.'
        ],
        yieldNote: 'Conservă 400 g = ~240 g fasole scursă = ~17 g proteină.'
      },
      taste: {
        profile: 'Pământoasă, sărată, cu coajă moale; mult mai blândă decât fasolea fiartă în casă',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 1,
        texture: 'Bob moale cu coajă care se desface; ușor apoasă',
        notes: 'Perfectă în chili și salate mexicane, unde condimentele acoperă tot. Simplă e mediocră.'
      },
      stats: { taste: 55, satiety: 84, convenience: 96, versatility: 82 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 2 },
      timingNote: 'Cea mai rapidă cale spre o masă vegetariană cu 20 g proteină în 8 minute.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'high-fiber', 'cheap-protein', 'budget', 'low-fat', 'processed', 'office-lunch'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Porumb dulce', 'Roșii cuburi', 'Chimen', 'Ardei iute', 'Orez', 'Avocado'],
      tips: [
        'Fasolea din conservă e deja fiartă complet — nu există riscul de lectine, spre deosebire de cea uscată prost gătită.',
        'Amestecă o conservă scursă cu 100 g granule de soia hidratate: chili vegan cu 45 g proteină pentru 8 lei.',
        'Clătirea scade sarea cu ~40% și scapă de gustul de conservă.',
        '7 g proteină/100 g — respectabil pentru ceva ce nu necesită nicio gătire.'
      ],
      warnings: [],
      storage: 'Cămară; după deschidere, borcan de sticlă la frigider, 3 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'high',
      sources: ['Eticheta K-Classic fasole roșie', 'kaufland.ro']
    },

    {
      id: 'v-fasole-alba-conserva',
      name: 'Canned White Beans',
      nameRo: 'Fasole albă boabe la conservă',
      brand: 'Sun Food',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Profi', availability: 'always', aisle: 'Raft conserve legume', priceRon: 5.19, packGrams: 400, packLabel: 'conservă 400 g (250 g scurs)', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft conserve', priceRon: 4.79, packGrams: 400, packLabel: 'conservă 400 g', note: '' },
        { name: 'Mega Image', availability: 'always', aisle: 'Raft conserve legume', priceRon: 6.5, packGrams: 400, packLabel: 'conservă 400 g', note: 'Mega e sistematic mai scump la conserve.' }
      ],
      sibiuNote: 'Sun Food e brand românesc prezent în aproape toate magazinele din Sibiu, inclusiv la Profi-urile mici din cartiere (Vasile Aaron, Hipodrom).',
      per100g: { kcal: 100, protein: 6.5, carbs: 13.5, sugars: 1.2, fat: 0.5, satFat: 0.1, fiber: 6, salt: 0.8 },
      micros: { ironMg: 2, zincMg: 1, potassiumMg: 380, calciumMg: 60, cholesterolMg: 0 },
      serving: { grams: 250, label: '1 conservă scursă (250 g) = ~16 g proteină' },
      effort: 1,
      timeMin: 10,
      activeTimeMin: 6,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['blender vertical', 'tigaie'],
        steps: [
          'Scurge și clătește fasolea.',
          'Călește o ceapă mare tocată în 2 linguri ulei, 6 minute.',
          'Pasează fasolea cu ceapa, sare, piper și 50 ml apă caldă.',
          'Deasupra: ceapă roșie crudă și boia — ai fasole bătută în 10 minute.'
        ],
        yieldNote: 'Conservă 400 g = ~250 g fasole scursă = ~16 g proteină.'
      },
      taste: {
        profile: 'Blândă, dulceagă, ușor sărată; cea mai neutră conservă din raft',
        intensity: 2,
        sweetness: 2,
        saltiness: 2,
        umami: 1,
        richness: 1,
        texture: 'Moale, se pasează instant în cremă',
        notes: 'Fasolea bătută din conservă e la 90% din calitatea celei tradiționale, cu 5% din efort. Un compromis excelent.'
      },
      stats: { taste: 58, satiety: 84, convenience: 92, versatility: 78 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 4, dinner: 5, beforeBed: 3 },
      timingNote: 'Fasolea bătută rece pe pâine integrală e o gustare de seară cu 12–15 g proteină.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-fiber', 'cheap-protein', 'budget', 'low-fat', 'processed', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ceapă călită', 'Boia dulce', 'Usturoi', 'Mărar', 'Pâine de secară', 'Murături'],
      tips: [
        'Atenție la conservele de fasole ÎN SOS TOMAT: au zahăr adăugat și doar ~4,5 g proteină/100 g.',
        'Adaugă 2 linguri de drojdie inactivă în fasolea bătută: +3 g proteină și gust de brânză.',
        'Clătește: sarea din lichid ajunge la 0,8 g/100 g, printre cele mai mari din categorie.',
        'Costul proteinei: ~29 lei/kg proteină — de 4x mai scump decât fasolea uscată, dar tot mai ieftin decât carnea.'
      ],
      warnings: ['Verifică lista de ingrediente: unele variante conțin zahăr și amidon modificat.'],
      storage: 'Cămară; deschisă, la frigider în borcan, 3 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'medium',
      sources: ['Etichete Sun Food / K-Classic fasole albă', 'Valori tipice pentru fasole albă în conservă']
    },

    {
      id: 'v-fasole-neagra-conserva',
      name: 'Canned Black Beans',
      nameRo: 'Fasole neagră la conservă',
      brand: 'Carrefour',
      category: 'plant-protein',
      subcategory: 'Leguminoase gătite & conservă',
      emoji: '🥫',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft internațional / mexican, lângă tortilla', priceRon: 6.99, packGrams: 400, packLabel: 'conservă 400 g (240 g scurs)', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft conserve legume', priceRon: 6.49, packGrams: 400, packLabel: 'conservă 400 g', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Raft internațional', priceRon: 7.5, packGrams: 400, packLabel: 'conservă 400 g', note: '' }
      ],
      sibiuNote: 'Carrefour Promenada are cel mai stabil stoc de fasole neagră din oraș; Lidl o aduce doar în săptămânile tematice mexicane.',
      per100g: { kcal: 108, protein: 7.2, carbs: 14, sugars: 0.8, fat: 0.5, satFat: 0.1, fiber: 7, salt: 0.65 },
      micros: { ironMg: 1.8, zincMg: 1.1, potassiumMg: 355, calciumMg: 45, cholesterolMg: 0 },
      serving: { grams: 240, label: '1 conservă scursă (240 g) = ~17 g proteină' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 5,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie', 'lingură de lemn'],
        steps: [
          'Scurge și clătește.',
          'Călește 1 cățel de usturoi tocat în ulei, 30 de secunde.',
          'Adaugă fasolea, 50 ml apă, chimen și zeamă de lime.',
          'Strivește o treime cu furculița — obții textură cremoasă în 3 minute.'
        ],
        yieldNote: 'Conservă 400 g = ~240 g fasole scursă = ~17 g proteină.'
      },
      taste: {
        profile: 'Dulceagă, catifelată, cu note de ciocolată; cea mai gustoasă conservă de leguminoase',
        intensity: 3,
        sweetness: 3,
        saltiness: 2,
        umami: 3,
        richness: 2,
        texture: 'Bob moale cu coajă subțire; se face cremă ușor',
        notes: 'Singura conservă de fasole pe care o mănânc cu lingura direct din bol. Cu lime și coriandru e chiar bună.'
      },
      stats: { taste: 68, satiety: 84, convenience: 92, versatility: 84 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 4, dinner: 5, beforeBed: 2 },
      timingNote: 'Cu un ou ochi deasupra devine un mic dejun cu 22 g proteină în 8 minute.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-fiber', 'cheap-protein', 'budget', 'low-fat', 'processed', 'office-lunch'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lime', 'Coriandru verde', 'Tortilla de porumb', 'Avocado', 'Ceapă roșie', 'Iaurt grecesc'],
      tips: [
        'Cea mai bună fasole la conservă pentru consum direct, fără rețetă.',
        'Amestecată cu orez brun completează profilul de aminoacizi într-o singură farfurie.',
        '7,2 g proteină/100 g — o conservă = cam cât un ou și jumătate ca proteină, dar cu 7 g fibră.',
        'Se congelează după deschidere, spre deosebire de multe conserve: textura rezistă.'
      ],
      warnings: [],
      storage: 'Cămară; deschisă la frigider 3 zile.',
      shelfLife: '3 ani sigilată',
      dataConfidence: 'medium',
      sources: ['Etichete Carrefour / K-Classic', 'USDA black beans canned']
    },

    {
      id: 'v-tofu-natur-vemondo',
      name: 'Plain Tofu',
      nameRo: 'Tofu natur',
      brand: 'Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '⬜',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat vegan Vemondo, lângă iaurturile vegetale', priceRon: 12.99, packGrams: 400, packLabel: 'pachet 400 g (2 x 200 g)', note: 'Cel mai bun raport preț/kg pentru tofu în România.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft K-take it veggie, zona refrigerată', priceRon: 11.99, packGrams: 300, packLabel: 'pachet 300 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft bio refrigerat', priceRon: 14.9, packGrams: 300, packLabel: 'pachet 300 g', note: '' }
      ],
      sibiuNote: 'Toate cele 4 magazine Lidl din Sibiu au tofu Vemondo permanent, în raftul refrigerat de lângă hummus. Se epuizează vinerea seara.',
      per100g: { kcal: 125, protein: 12.5, carbs: 1.2, sugars: 0.5, fat: 7.5, satFat: 1.2, fiber: 1, salt: 0.02 },
      micros: { calciumMg: 350, ironMg: 2.7, zincMg: 1.6, potassiumMg: 120, omega3Mg: 350, cholesterolMg: 0 },
      serving: { grams: 150, label: '1 bloc mic (150 g) = ~19 g proteină' },
      effort: 2,
      timeMin: 25,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['prosop de bucătărie', 'tigaie antiaderentă', 'spatulă'],
        steps: [
          'Scoate din pachet, șterge și presează 15 minute sub o farfurie cu greutate (o conservă merge).',
          'Taie cuburi de 2 cm și tăvălește-le prin 1 lingură amidon de porumb.',
          'Prăjește în tigaie încinsă cu 1 lingură ulei, 3 minute pe fiecare parte, fără să le miști prea des.',
          'Stinge cu sos de soia în ultimele 30 de secunde.'
        ],
        yieldNote: 'Presarea scoate ~15% din greutate ca apă: 400 g tofu → ~340 g presat, cu proteina concentrată la ~14,5 g/100 g.'
      },
      taste: {
        profile: 'Practic neutru — ușor dulceag, cu o notă de lapte de soia fiert',
        intensity: 1,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Fermă și elastică crudă; crocantă la exterior și cremoasă la interior când e bine prăjită',
        notes: 'Onest: tofu natur nepresat, aruncat direct în tigaie, e un dezastru moale și fad. Presat și bine rumenit e alt aliment. Diferența e integral în tehnică.'
      },
      stats: { taste: 48, satiety: 76, convenience: 60, versatility: 92 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Proteină completă cu digestie medie — funcționează la orice masă, inclusiv ca scrambled la micul dejun.',
      tags: ['high-protein', 'complete-protein', 'calcium-rich', 'whole-food', 'meal-prep', 'mid-price', 'low-carb'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Ghimbir', 'Ulei de susan', 'Ardei', 'Broccoli', 'Orez'],
      tips: [
        'PRESEAZĂ-L. 15 minute sub greutate schimbă complet rezultatul; e cel mai important pas din toată rețeta.',
        'Amidonul de porumb înainte de prăjire e trucul care dă crustă fără friteuză.',
        'Tofu are ~12,5 g proteină/100 g — sub tofu-ul afumat (13–16 g) și mult sub tempeh (19 g).',
        'Congelat și dezghețat, tofu devine buretos și absoarbe marinada de 3 ori mai bine. Trucul cel mai subestimat.'
      ],
      warnings: ['Alergen: soia.'],
      storage: 'Frigider 2–6 °C. După deschidere, acoperă-l cu apă rece într-un recipient și schimbă apa zilnic — ține 4 zile.',
      shelfLife: '3–4 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Vemondo Tofu natur', 'lidl.ro', 'openfoodfacts.org']
    },

    {
      id: 'v-tofu-afumat-vemondo',
      name: 'Smoked Tofu',
      nameRo: 'Tofu afumat',
      brand: 'Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🟫',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo', priceRon: 12.49, packGrams: 180, packLabel: 'pachet 180 g', note: 'Scump pe kg (~69 lei/kg) — dar se mănâncă direct, fără gătire.' },
        { name: 'Kaufland', availability: 'always', aisle: 'K-take it veggie, refrigerat', priceRon: 11.99, packGrams: 175, packLabel: 'pachet 175 g bio', note: '' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft bio/vegan refrigerat', priceRon: 15.9, packGrams: 200, packLabel: 'pachet 200 g', note: '' }
      ],
      sibiuNote: 'Tofu afumat e produsul de intrare perfect pentru cine n-a mâncat niciodată tofu: se taie și se mănâncă rece, ca un salam. Lidl-ul din Piața Cluj îl are constant.',
      per100g: { kcal: 134, protein: 13, carbs: 2.4, sugars: 0.5, fat: 8, satFat: 1.3, fiber: 1, salt: 1.2 },
      micros: { calciumMg: 300, ironMg: 2.5, zincMg: 1.5, potassiumMg: 130, cholesterolMg: 0 },
      serving: { grams: 90, label: '1/2 pachet (90 g) = ~12 g proteină' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['cuțit'],
        steps: [
          'Scoate din vid, taie felii subțiri.',
          'Mănâncă rece în sandviș sau salată — e deja gătit și afumat.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Afumat pronunțat, sărat, cu note de nucă și un fond dulceag de soia',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Dens și ferm, se taie ca o brânză tare; ușor cauciucat',
        notes: 'Cel mai bun tofu pentru începători. Are gust propriu, nu doar potențial. Rumenit 2 minute în tigaie devine și mai bun.'
      },
      stats: { taste: 72, satiety: 78, convenience: 94, versatility: 84 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 5, dinner: 5, beforeBed: 4 },
      timingNote: 'Gustare rece cu 13 g proteină/100 g, fără gătit — util la birou sau în drumeție.',
      tags: ['ready-to-eat', 'high-protein', 'complete-protein', 'grab-and-go', 'portable', 'calcium-rich', 'no-cook', 'office-lunch', 'premium'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine de secară', 'Muștar', 'Castraveți murați', 'Roșii', 'Rucola', 'Avocado'],
      tips: [
        'Se mănâncă direct din pachet — nu trebuie gătit, e deja tratat termic.',
        'Tăiat julien și călit 2 minute înlocuiește bacon-ul într-o carbonara vegană.',
        '1,2 g sare/100 g — de 60 de ori mai mult decât tofu-ul natur. Contează dacă mănânci pachetul întreg.',
        'La 69 lei/kg e cel mai scump tofu din raft; cumpără-l pentru comoditate, nu pentru economie.'
      ],
      warnings: ['Alergen: soia.', 'Conținut de sare notabil (1,2 g/100 g).'],
      storage: 'Frigider; după deschidere consumă în 3 zile.',
      shelfLife: '4–6 săptămâni sigilat (ambalat în vid)',
      dataConfidence: 'high',
      sources: ['Eticheta Vemondo Tofu afumat (134 kcal, 13 g proteină)', 'openfoodfacts.org 4056489067740']
    },

    {
      id: 'v-tofu-bio-ktakeitveggie',
      name: 'Organic Firm Smoked Tofu',
      nameRo: 'Tofu bio afumat, tare',
      brand: 'K-take it veggie (Kaufland)',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🟤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat K-take it veggie, lângă produsele bio', priceRon: 11.99, packGrams: 175, packLabel: 'pachet 175 g', note: 'Bio certificat, soia non-OMG.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Același raft, varianta natur', priceRon: 10.99, packGrams: 200, packLabel: 'pachet 200 g natur', note: '' }
      ],
      sibiuNote: 'Kaufland Șelimbăr și Kaufland Vasile Aaron au gama K-take it veggie completă; magazinele mai mici o au parțial.',
      per100g: { kcal: 145, protein: 16, carbs: 1.5, sugars: 0.5, fat: 8.5, satFat: 1.4, fiber: 1.5, salt: 1.4 },
      micros: { calciumMg: 320, ironMg: 3, zincMg: 1.7, potassiumMg: 150, cholesterolMg: 0 },
      serving: { grams: 88, label: '1/2 pachet (88 g) = ~14 g proteină' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 6,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie', 'cuțit'],
        steps: [
          'Taie cuburi sau felii groase de 1 cm.',
          'Prăjește 3 minute pe parte în tigaie uscată sau cu puțin ulei.',
          'Nu mai are nevoie de sare — are deja 1,4 g/100 g.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Afumat intens, sărat, cu textură mai densă decât tofu-ul standard',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Foarte fermă, aproape ca o brânză de burduf; nu se sfărâmă la prăjit',
        notes: 'Cel mai bogat în proteină dintre tofurile de raft din România (16 g/100 g). Merită diferența de preț față de Vemondo.'
      },
      stats: { taste: 74, satiety: 80, convenience: 88, versatility: 82 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 5, dinner: 5, beforeBed: 4 },
      timingNote: 'Densitate de proteină mare per calorie — bun în faza de cutting.',
      tags: ['high-protein', 'complete-protein', 'ready-to-eat', 'calcium-rich', 'portable', 'whole-food', 'cutting', 'premium'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Varză călită', 'Cartofi la cuptor', 'Muștar Dijon', 'Salată verde', 'Orez brun'],
      tips: [
        '16 g proteină/100 g: cel mai dens tofu din supermarketurile românești.',
        'La 68 lei/kg costul proteinei e ~430 lei/kg proteină — de 25 de ori mai scump decât lintea. Comoditatea are preț.',
        'Prăjit fără ulei în tigaie de fontă capătă crustă mai bună decât în ulei.',
        'Bio aici înseamnă soia non-OMG, nu neapărat mai multă proteină — Vemondo standard e la 12,5 g.'
      ],
      warnings: ['Alergen: soia.', '1,4 g sare/100 g — nu adăuga sare în rețetă.'],
      storage: 'Frigider 2–6 °C; deschis, 3 zile.',
      shelfLife: '4–8 săptămâni sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro — gama K-take it veggie', 'Valori tipice tofu afumat bio']
    },

    {
      id: 'v-tempeh',
      name: 'Tempeh',
      nameRo: 'Tempeh (soia fermentată)',
      brand: 'generic / import',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🟨',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'Magazine vegane online (Vegis, Veggie Shop)', priceRon: 22, packGrams: 200, packLabel: 'bloc 200 g refrigerat/congelat', note: 'Comandă cu livrare refrigerată sau congelată.' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft K-take it veggie, apare intermitent', priceRon: 19.9, packGrams: 200, packLabel: 'bloc 200 g', note: '' },
        { name: 'Metro', availability: 'occasional', aisle: 'Raft asiatic refrigerat', priceRon: 21, packGrams: 200, packLabel: 'bloc 200 g', note: 'Necesită card Metro.' }
      ],
      sibiuNote: 'Cel mai greu de găsit produs din soia în Sibiu. Realist: comandă online 3–4 blocuri odată și congelează-le, rezistă 6 luni.',
      per100g: { kcal: 200, protein: 19, carbs: 8, sugars: 1.5, fat: 11, satFat: 2.2, fiber: 5, salt: 0.02 },
      micros: { calciumMg: 110, ironMg: 2.7, zincMg: 1.1, potassiumMg: 410, b12Ug: 0.1, cholesterolMg: 0 },
      serving: { grams: 100, label: '1/2 bloc (100 g) = 19 g proteină' },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'cuțit'],
        steps: [
          'Taie felii de 5 mm.',
          'Opțional: aburește 8 minute înainte — reduce amăreala caracteristică.',
          'Prăjește 4 minute pe parte în ulei, la foc mediu.',
          'Glazurează cu sos de soia, sirop de arțar și usturoi în ultimul minut.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Nucos, fermentat, cu o amăreală discretă și note de ciupercă',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 3,
        texture: 'Granulat și ferm — se simt boabele întregi de soia legate de miceliu',
        notes: 'Are personalitate reală, spre deosebire de tofu. Amăreala deranjează pe unii — aburirea prealabilă o rezolvă în mare parte.'
      },
      stats: { taste: 64, satiety: 86, convenience: 40, versatility: 76 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Fermentarea îmbunătățește digestibilitatea — cea mai ușor de digerat formă de soia întreagă.',
      tags: ['high-protein', 'complete-protein', 'whole-food', 'high-fiber', 'premium', 'meal-prep', 'imported'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Sirop de arțar', 'Usturoi', 'Varză murată', 'Orez brun', 'Ghimbir'],
      tips: [
        '19 g proteină/100 g — cea mai densă formă de soia întreagă disponibilă gata de gătit.',
        'Fermentarea descompune parțial fitații și oligozaharidele: mult mai puține gaze decât la fasole.',
        'Se congelează perfect; taie-l felii înainte de congelare ca să folosești câte ai nevoie.',
        'Marinada nu pătrunde ca la tofu (structura e densă) — mizează pe glazură la final, nu pe marinare lungă.'
      ],
      warnings: ['Alergen: soia.', 'Petele negre de pe suprafață sunt spori normali de Rhizopus, nu mucegai stricat — dar mirosul de amoniac înseamnă că s-a alterat.'],
      storage: 'Frigider 5–7 zile; congelator 6 luni.',
      shelfLife: '2–3 săptămâni refrigerat sigilat',
      dataConfidence: 'medium',
      sources: ['USDA tempeh', 'Etichete producători import UE']
    },

    {
      id: 'v-granule-soia',
      name: 'Textured Soy Protein (TVP), Dry',
      nameRo: 'Granule de soia (proteină texturată), uscate',
      brand: 'Sano Vita / Solaris',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft bio / Sano Vita, lângă tărâțe și semințe', priceRon: 6.99, packGrams: 200, packLabel: 'pungă 200 g', note: 'Cel mai bun preț pe gram de proteină din întreaga bază de date.' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft sănătate / Sano Vita', priceRon: 7.49, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'sanovita.ro, magazine bio', priceRon: 26, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'La kilogram e imbatabil: ~52 lei/kg proteină.' }
      ],
      sibiuNote: 'Se găsește la Kaufland și Profi în Sibiu, în raftul Sano Vita. Puțină lume o cumpără, așa că nu se epuizează niciodată.',
      per100g: { kcal: 340, protein: 50, carbs: 22, sugars: 8, fat: 1.5, satFat: 0.3, fiber: 12, salt: 0.1 },
      micros: { ironMg: 9, zincMg: 3, potassiumMg: 2000, calciumMg: 240, cholesterolMg: 0 },
      serving: { grams: 30, label: '30 g uscate (≈90 g hidratate) = 15 g proteină' },
      effort: 1,
      timeMin: 12,
      activeTimeMin: 4,
      cooking: {
        method: 'soak',
        difficulty: 'trivial',
        equipment: ['castron', 'sită'],
        steps: [
          'Pune granulele într-un castron și toarnă peste ele apă clocotită sau supă de legume fierbinte (1 parte granule : 2,5 părți lichid).',
          'Lasă 10 minute — absorb tot lichidul.',
          'Stoarce ușor dacă vrei textură mai fermă.',
          'Folosește exact ca pe carnea tocată: în sos bolognese, chili, sarmale de post, ardei umpluți.'
        ],
        yieldNote: '100 g granule uscate → ~280–300 g hidratate. 50 g proteină/100 g uscat devine ~17 g/100 g hidratat.'
      },
      taste: {
        profile: 'Aproape neutru cu o notă de cereale prăjite; ia complet gustul lichidului în care se hidratează',
        intensity: 1,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Uscat e ca niște fulgi de carton; hidratat imită surprinzător de bine carnea tocată',
        notes: 'Hidratat în apă simplă e trist. Hidratat în supă de legume cu boia și usturoi e greu de deosebit de carne tocată într-un bolognese.'
      },
      stats: { taste: 45, satiety: 84, convenience: 78, versatility: 86 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Proteină completă, foarte slabă în grăsime — excelentă post-antrenament în perioada de definire.',
      tags: ['very-high-protein', 'protein-dense', 'complete-protein', 'cheap-protein', 'budget', 'shelf-stable', 'low-fat', 'bulk-buy', 'processed', 'cutting', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de roșii', 'Boia afumată', 'Usturoi', 'Ceapă', 'Cimbru', 'Sos de soia'],
      tips: [
        'CEA MAI IEFTINĂ PROTEINĂ DIN ROMÂNIA: la 26 lei/kg cu 50 g proteină/100 g, iese ~52 lei per kilogram de proteină pură. Pieptul de pui e la ~150 lei/kg proteină.',
        'Hidratează-le ÎN SUPĂ, nu în apă. Aici se câștigă sau se pierde felul de mâncare.',
        'Amestecă 50/50 cu carne tocată reală: nimeni nu observă, costul scade la jumătate, proteina rămâne.',
        '50 g/100 g e valoarea uscată. Hidratate ai ~17 g/100 g — tot foarte bine.'
      ],
      warnings: ['Alergen: soia.', 'Produs procesat (extrudat din făină de soia degresată) — nu e un aliment integral, dar profilul nutrițional e excelent.'],
      storage: 'Pungă închisă etanș, cămară uscată.',
      shelfLife: '12–18 luni',
      dataConfidence: 'high',
      sources: ['Eticheta Sano Vita granule de soia', 'sanovita.ro', 'USDA textured vegetable protein']
    },

    {
      id: 'v-lapte-soia-alpro',
      name: 'Soy Drink, Unsweetened',
      nameRo: 'Băutură de soia neîndulcită',
      brand: 'Alpro',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🥤',
      unit: 'ml',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft băuturi vegetale (nerefrigerat), Vemondo și Alpro', priceRon: 9.99, packGrams: 1000, packLabel: 'cutie 1 L', note: 'Vemondo (marca Lidl) e la ~7,5 lei/L cu profil aproape identic.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft băuturi vegetale', priceRon: 12.99, packGrams: 1000, packLabel: 'cutie 1 L Alpro', note: '' },
        { name: 'Mega Image', availability: 'always', aisle: 'Raft lactate alternative', priceRon: 14.5, packGrams: 1000, packLabel: 'cutie 1 L', note: '' }
      ],
      sibiuNote: 'În Sibiu, Vemondo de la Lidl e cea mai ieftină băutură de soia (~7,5 lei/L) și are aceiași 3,3 g proteină/100 ml ca Alpro.',
      per100g: { kcal: 33, protein: 3.3, carbs: 0.5, sugars: 0.2, fat: 1.8, satFat: 0.3, fiber: 0.6, salt: 0.09 },
      micros: { calciumMg: 120, vitDUg: 0.75, b12Ug: 0.38, potassiumMg: 150, cholesterolMg: 0 },
      serving: { grams: 250, label: '1 pahar (250 ml) = ~8 g proteină' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['pahar'],
        steps: [
          'Agită bine cutia — proteina se depune la fund.',
          'Toarnă și bea, sau folosește în cafea, terci și shake-uri.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Ușor fasoliu, cremos, cu final ierbos; fără zahăr e clar mai puțin plăcut decât varianta îndulcită',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Corp mediu, mai gros decât laptele de migdale, mai subțire decât laptele de vacă integral',
        notes: 'Singura băutură vegetală cu proteină comparabilă cu laptele de vacă. Cea de migdale are 0,5 g/100 ml, cea de ovăz 1 g — sunt apă cu aromă din perspectiva proteinei.'
      },
      stats: { taste: 55, satiety: 48, convenience: 96, versatility: 88 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 4, lunch: 3, snack: 4, dinner: 2, beforeBed: 4 },
      timingNote: 'Cu 8 g proteină pe pahar e un adaos util la micul dejun, nu o sursă principală.',
      tags: ['ready-to-eat', 'complete-protein', 'calcium-rich', 'b12', 'shelf-stable', 'low-kcal', 'grab-and-go', 'breakfast', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Fulgi de ovăz', 'Cacao', 'Banană', 'Cafea', 'Proteină pudră', 'Semințe de chia'],
      tips: [
        'Verifică să fie fortifiată cu calciu și B12 — variantele bio adesea NU sunt, ceea ce le face inferioare nutrițional.',
        'Băutura de soia e singura alternativă vegetală cu proteină de calitatea laptelui de vacă (3,3 vs 3,4 g/100 ml).',
        'Nu confunda cu băutura de ovăz sau migdale: acelea au 0,5–1 g proteină/100 ml, practic zero.',
        'Se taie în cafea foarte fierbinte sau acidă — folosește varianta barista dacă îți pasă.'
      ],
      warnings: ['Alergen: soia.', 'Variantele îndulcite au 2,5–3 g zahăr/100 ml — citește eticheta.'],
      storage: 'Cămară până la deschidere; după deschidere, frigider, 4–5 zile.',
      shelfLife: '6–9 luni sigilată (UHT)',
      dataConfidence: 'high',
      sources: ['Eticheta Alpro Soya Unsweetened', 'alpro.com', 'lidl.ro Vemondo']
    },

    {
      id: 'v-iaurt-soia-alpro',
      name: 'Soy Yogurt, Plain',
      nameRo: 'Iaurt de soia natur',
      brand: 'Alpro / Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo, lângă iaurturile clasice', priceRon: 8.99, packGrams: 400, packLabel: 'caserolă 400 g Vemondo', note: 'Jumătate din prețul Alpro, aceeași proteină.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft lactate alternative', priceRon: 14.99, packGrams: 500, packLabel: 'caserolă 500 g Alpro', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio / vegan refrigerat', priceRon: 15.9, packGrams: 500, packLabel: 'caserolă 500 g', note: '' }
      ],
      sibiuNote: 'Vemondo de la Lidl e cea mai bună afacere din Sibiu la iaurt vegetal; Alpro se găsește peste tot dar la preț dublu pe kg.',
      per100g: { kcal: 50, protein: 4, carbs: 2.4, sugars: 2.1, fat: 2.3, satFat: 0.4, fiber: 0.6, salt: 0.1 },
      micros: { calciumMg: 120, vitDUg: 0.75, b12Ug: 0.38, potassiumMg: 170, cholesterolMg: 0 },
      serving: { grams: 200, label: '1 bol (200 g) = 8 g proteină' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Amestecă (se separă zerul deasupra).',
          'Mănâncă simplu sau cu fructe și semințe.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Acrișor moderat, cu fond de soia și o textură ușor granulată',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Mai lichid și mai granulat decât iaurtul de vacă; nu are cremozitatea iaurtului grecesc',
        notes: 'Onest: e clar inferior iaurtului grecesc și la gust, și la proteină (4 vs 10 g). Are sens doar dacă eviți lactatele.'
      },
      stats: { taste: 52, satiety: 58, convenience: 96, versatility: 72 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Micul dejun sau gustarea; 8 g proteină pe bol nu îl califică drept masă de sine stătătoare.',
      tags: ['ready-to-eat', 'complete-protein', 'calcium-rich', 'b12', 'low-kcal', 'grab-and-go', 'breakfast', 'no-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Fructe de pădure congelate', 'Nuci', 'Semințe de in măcinate', 'Fulgi de ovăz', 'Unt de arahide'],
      tips: [
        '4 g proteină/100 g față de 10 g la iaurtul grecesc: dacă nu ai motiv să eviți lactatele, iaurtul grecesc câștigă clar.',
        'Adaugă 15 g proteină pudră sau 20 g unt de arahide ca să ajungi la un raport decent.',
        'Variantele cu fructe au 10–12 g zahăr/100 g. Cumpără natur și pune fructe tu.',
        'Se poate strecura peste noapte prin tifon și devine cremă groasă tip labneh vegan.'
      ],
      warnings: ['Alergen: soia.', 'Variantele aromate conțin mult zahăr adăugat.'],
      storage: 'Frigider 2–6 °C; 4 zile după deschidere.',
      shelfLife: '3–5 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Alpro Soya natur', 'lidl.ro Vemondo iaurt de soia']
    },

    {
      id: 'v-edamame-congelat',
      name: 'Edamame, Frozen',
      nameRo: 'Edamame (boabe de soia verde) congelate',
      brand: 'generic import',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🫛',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'occasional', aisle: 'Congelator, săptămânile tematice asiatice', priceRon: 12.99, packGrams: 400, packLabel: 'pungă 400 g', note: 'Apare de 3–4 ori pe an; cumpără 2–3 pungi când îl vezi.' },
        { name: 'Metro', availability: 'usual', aisle: 'Congelator, raft asiatic', priceRon: 24, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Necesită card Metro.' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Congelator legume', priceRon: 15.9, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Nu e produs de bază în Sibiu. Selgros și Metro Șelimbăr sunt cele mai sigure surse; la Lidl doar în campanii.',
      per100g: { kcal: 121, protein: 11, carbs: 6, sugars: 2, fat: 5, satFat: 0.6, fiber: 5, salt: 0.01 },
      micros: { ironMg: 2.3, zincMg: 1.4, potassiumMg: 480, calciumMg: 63, omega3Mg: 300, cholesterolMg: 0 },
      serving: { grams: 150, label: '1 bol (150 g boabe) = ~16 g proteină' },
      effort: 1,
      timeMin: 7,
      activeTimeMin: 3,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală', 'sită'],
        steps: [
          'Aruncă edamame congelate direct în apă clocotită cu sare.',
          'Fierbe 4–5 minute.',
          'Scurge, presară sare grunjoasă.',
          'Dacă sunt în păstăi: strivești păstaia cu dinții și tragi boabele — păstaia nu se mănâncă.'
        ],
        yieldNote: '1 kg edamame în păstăi → ~450 g boabe comestibile. Cumpără decojite dacă poți.'
      },
      taste: {
        profile: 'Dulce, ierbos, proaspăt — cel mai plăcut gust din toată familia soia',
        intensity: 2,
        sweetness: 3,
        saltiness: 2,
        umami: 2,
        richness: 2,
        texture: 'Bob ferm care pocnește, cu miez cremos',
        notes: 'Singurul produs din soia pe care oamenii îl mănâncă din plăcere, nu din principiu. Cu sare grunjoasă e o gustare excelentă.'
      },
      stats: { taste: 78, satiety: 76, convenience: 74, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 4, lunch: 4, snack: 5, dinner: 4, beforeBed: 3 },
      timingNote: 'Gustare de seară cu 11 g proteină/100 g și doar 121 kcal — excelent raport.',
      tags: ['high-protein', 'complete-protein', 'frozen', 'high-fiber', 'low-kcal', 'cutting', 'omega3', 'imported', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sare grunjoasă', 'Ulei de susan', 'Chili flakes', 'Lime', 'Orez', 'Sos de soia'],
      tips: [
        'Cumpără varianta DECOJITĂ (shelled) dacă o găsești: la cea în păstăi plătești ~55% coajă necomestibilă.',
        '11 g proteină la 121 kcal — cea mai bună densitate proteică dintre legumele congelate din raft.',
        'Nu le fierbe peste 5 minute: se fac făinoase și pierd dulceața.',
        'Congelate și date apoi prin blender cu usturoi și lămâie devin un humus verde cu mai multă proteină decât cel de năut.'
      ],
      warnings: ['Alergen: soia.', 'Păstăile NU se mănâncă — sunt fibroase și indigeste.'],
      storage: 'Congelator -18 °C.',
      shelfLife: '18 luni în congelator',
      dataConfidence: 'high',
      sources: ['USDA edamame frozen prepared', 'Etichete import UE']
    },

    {
      id: 'v-miso',
      name: 'Miso Paste',
      nameRo: 'Pastă miso (soia fermentată)',
      brand: 'generic import (Hikari, Yutaka)',
      category: 'plant-protein',
      subcategory: 'Soia & derivate',
      emoji: '🍜',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'Magazine asiatice online', priceRon: 32, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft asiatic', priceRon: 29, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft internațional / săptămâna asiatică', priceRon: 24.9, packGrams: 300, packLabel: 'borcan 300 g', note: '' }
      ],
      sibiuNote: 'Nu e sursă de proteină, e un condiment. Îl treci aici pentru că mulți îl cred proteic — nu mănânci niciodată 100 g de miso.',
      per100g: { kcal: 199, protein: 12, carbs: 21, sugars: 6, fat: 6, satFat: 1.1, fiber: 5, salt: 12 },
      micros: { ironMg: 2.5, zincMg: 2.6, potassiumMg: 210, calciumMg: 57, cholesterolMg: 0 },
      serving: { grams: 15, label: '1 lingură (15 g) = 1,8 g proteină și 1,8 g SARE' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 3,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['bol mic', 'tel'],
        steps: [
          'Dizolvă 1 lingură de miso în puțină apă caldă (NU clocotită — distruge probioticele și aroma).',
          'Adaugă în supă la final, după oprirea focului.',
          'Nu mai săra felul de mâncare.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Extrem de sărat, umami intens, cu note de caramel și fermentație',
        intensity: 5,
        sweetness: 2,
        saltiness: 5,
        umami: 5,
        richness: 3,
        texture: 'Pastă densă, ușor granulată',
        notes: 'O jumătate de linguriță transformă orice supă fadă. Dar 12 g sare la 100 g înseamnă că e sare cu aromă, nu aliment.'
      },
      stats: { taste: 68, satiety: 20, convenience: 84, versatility: 70 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 1, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Condiment, nu sursă de proteină — nu îl număra în macro.',
      tags: ['high-sodium', 'shelf-stable', 'processed', 'imported', 'premium'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Tofu', 'Alge wakame', 'Ceapă verde', 'Vinete la cuptor', 'Tahini'],
      tips: [
        'CAPCANĂ: 12 g proteină/100 g pare bine, dar porția reală e 15 g. Iei 1,8 g proteină și 1,8 g sare.',
        'Miso alb (shiro) e dulce și blând, cel roșu (aka) e intens și mult mai sărat.',
        'Miso + tahini + apă = sos umami universal pentru legume la cuptor.',
        'Multe variante conțin orz sau grâu — nu e automat fără gluten.'
      ],
      warnings: ['Foarte bogat în sare (12 g/100 g). Nu e potrivit pentru dietele cu restricție de sodiu.', 'Alergen: soia; adesea și gluten.'],
      storage: 'Frigider după deschidere; sarea îl conservă practic la nesfârșit.',
      shelfLife: '1 an după deschidere la frigider',
      dataConfidence: 'medium',
      sources: ['USDA miso', 'Etichete import Hikari/Yutaka']
    },

    {
      id: 'v-seitan',
      name: 'Seitan (Wheat Gluten Protein)',
      nameRo: 'Seitan (proteină din gluten de grâu)',
      brand: 'generic / de casă',
      category: 'plant-protein',
      subcategory: 'Seitan & gluten',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'Magazine vegane online', priceRon: 24, packGrams: 250, packLabel: 'pachet 250 g refrigerat', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft K-take it veggie refrigerat', priceRon: 19.9, packGrams: 200, packLabel: 'pachet 200 g', note: 'Apare intermitent.' },
        { name: 'Metro', availability: 'occasional', aisle: 'Raft vegan refrigerat', priceRon: 22, packGrams: 250, packLabel: 'pachet 250 g', note: '' }
      ],
      sibiuNote: 'Practic nu se vinde gata făcut în Sibiu în mod fiabil. Alternativa reală: cumperi gluten vital (25 lei/500 g) și îl faci acasă în 40 de minute — iese la ~18 lei/kg de seitan.',
      per100g: { kcal: 145, protein: 24, carbs: 8, sugars: 0.5, fat: 1.5, satFat: 0.3, fiber: 1, salt: 1.4 },
      micros: { ironMg: 1.8, zincMg: 0.9, potassiumMg: 100, calciumMg: 40, cholesterolMg: 0 },
      serving: { grams: 120, label: '1 porție (120 g) = ~29 g proteină' },
      effort: 3,
      timeMin: 55,
      activeTimeMin: 20,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['bol', 'oală mare', 'folie de aluminiu sau tifon'],
        steps: [
          'Amestecă 150 g gluten vital cu 1 linguriță boia, usturoi granulat, 2 linguri drojdie inactivă.',
          'Adaugă 130 ml supă rece de legume și 1 lingură sos de soia; frământă 3 minute — devine elastic ca aluatul.',
          'Odihnește 10 minute, apoi rulează strâns în folie de aluminiu.',
          'Fierbe la foc mic (NU clocot — face găuri) 45 de minute.',
          'Răcește, feliază și rumenește în tigaie înainte de servire.'
        ],
        yieldNote: '150 g gluten vital + lichid → ~400 g seitan fiert. Proteina: 75 g/100 g gluten → ~24 g/100 g seitan.'
      },
      taste: {
        profile: 'Sărat, savuros, cu gust de bulion; textura domină experiența',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 4,
        richness: 1,
        texture: 'Fibroasă și elastică — cea mai apropiată imitație de carne din listă, aproape ca pieptul de pui destrămat',
        notes: 'Cel mai bun surogat de carne ca textură, de departe. Dar dacă îl fierbi la clocot iese buretos și cauciucat.'
      },
      stats: { taste: 66, satiety: 80, convenience: 30, versatility: 80 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: '24 g proteină la 145 kcal — cel mai bun raport proteină/calorie dintre alternativele la carne.',
      tags: ['high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'cutting', 'meal-prep', 'batch-cook', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Ardei', 'Ciuperci', 'Usturoi', 'Muștar', 'Pâine'],
      tips: [
        'ATENȚIE: seitanul e gluten pur. Total interzis în boala celiacă și sensibilitate la gluten.',
        'Proteina din gluten e incompletă (foarte săracă în lizină) — servește-l cu leguminoase sau adaugă năut în compoziție.',
        'Nu-l fierbe la clocot. 85–90 °C, apă care abia tremură, 45 de minute.',
        'Făcut în casă costă ~18 lei/kg. Cumpărat gata: 90–100 lei/kg. Diferența e 40 de minute din care 20 pasive.'
      ],
      warnings: ['GLUTEN PUR — absolut contraindicat în boala celiacă.', 'Proteină incompletă: deficit sever de lizină. Nu baza toată aportul pe seitan.'],
      storage: 'Frigider 5 zile în lichidul de fierbere; congelator 3 luni.',
      shelfLife: '5–7 zile refrigerat',
      dataConfidence: 'medium',
      sources: ['USDA seitan / wheat gluten cooked', 'Calcul din rețetă standard 150 g gluten vital']
    },

    {
      id: 'v-gluten-grau-vital',
      name: 'Vital Wheat Gluten',
      nameRo: 'Gluten de grâu vital (făină de gluten)',
      brand: 'generic / bio',
      category: 'plant-protein',
      subcategory: 'Seitan & gluten',
      emoji: '💪',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online (Vegis, Solaris, eMAG)', priceRon: 25, packGrams: 500, packLabel: 'pungă 500 g', note: 'Cea mai densă proteină din întreaga bază de date: 75 g/100 g.' },
        { name: 'Metro', availability: 'occasional', aisle: 'Raft brutărie profesională / ingrediente panificație', priceRon: 45, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio / făinuri speciale', priceRon: 27, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Cel mai realist e comanda online. O pungă de 500 g face ~1,3 kg de seitan, adică proteina a 8 mese, pentru 25 de lei.',
      per100g: { kcal: 370, protein: 75, carbs: 14, sugars: 0.5, fat: 1.9, satFat: 0.3, fiber: 0.6, salt: 0.07 },
      micros: { ironMg: 5.2, zincMg: 2.6, potassiumMg: 100, calciumMg: 142, cholesterolMg: 0 },
      serving: { grams: 40, label: '40 g pudră (devine ~110 g seitan) = 30 g proteină' },
      effort: 3,
      timeMin: 55,
      activeTimeMin: 20,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['bol', 'oală', 'folie de aluminiu'],
        steps: [
          'Amestecă glutenul cu condimente uscate (boia, usturoi, drojdie inactivă).',
          'Adaugă lichid rece, frământă 3–5 minute până devine elastic.',
          'Odihnește 10 minute (relaxează glutenul, textura iese mai bună).',
          'Fierbe înfășurat, la foc mic, 45 de minute — sau gătește la abur 40 de minute pentru textură mai densă.'
        ],
        yieldNote: '100 g gluten vital + lichid → ~270 g seitan gata. 75 g proteină/100 g pudră → ~24 g/100 g produs finit.'
      },
      taste: {
        profile: 'Făinos, fad, aproape fără gust în stare de pudră',
        intensity: 1,
        sweetness: 0,
        saltiness: 0,
        umami: 0,
        richness: 0,
        texture: 'Pudră fină care se transformă instantaneu în aluat elastic la contactul cu apa',
        notes: 'Ca ingredient e neutru. Tot gustul vine din ce pui tu în el. Nu îl mânca niciodată necopt/nefiert.'
      },
      stats: { taste: 25, satiety: 82, convenience: 30, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 4, snack: 1, dinner: 4, beforeBed: 2 },
      timingNote: 'Ingredient de bază, nu produs finit — se numără în macro după transformarea în seitan.',
      tags: ['very-high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'shelf-stable', 'bulk-buy', 'processed', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Drojdie inactivă', 'Boia afumată', 'Sos de soia', 'Usturoi granulat', 'Făină de năut'],
      tips: [
        '75 g proteină/100 g: cea mai concentrată sursă alimentară (nesuplimentară) din toată baza de date.',
        'Adaugă 1 lingură de gluten vital în aluatul de pâine integrală: crește volumul și adaugă proteină.',
        'Amestecă 3 părți gluten cu 1 parte făină de năut: compensezi deficitul de lizină și obții un profil aproape complet.',
        'Costul proteinei: ~67 lei/kg proteină pură. Doar granulele de soia sunt mai ieftine.'
      ],
      warnings: ['GLUTEN PUR — contraindicat absolut în boala celiacă și în sensibilitatea non-celiacă la gluten.', 'Nu se consumă crud.'],
      storage: 'Recipient etanș, loc uscat. Absoarbe umezeala din aer și se aglomerează.',
      shelfLife: '12 luni',
      dataConfidence: 'high',
      sources: ['USDA vital wheat gluten', 'Etichete producători UE']
    },

    {
      id: 'v-burger-vegan-vemondo',
      name: 'Vegan Burger Patty',
      nameRo: 'Burger vegan (chiftea vegetală tip burger)',
      brand: 'Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🍔',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo, lângă mezelurile vegane', priceRon: 13.99, packGrams: 226, packLabel: 'pachet 226 g (2 burgeri)', note: 'Se găsește și congelat în unele magazine.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'K-take it veggie refrigerat', priceRon: 15.99, packGrams: 220, packLabel: 'pachet 220 g (2 buc)', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft Carrefour Veggie', priceRon: 16.9, packGrams: 220, packLabel: 'pachet 220 g', note: '' }
      ],
      sibiuNote: 'Vemondo e cea mai ieftină gamă vegană din Sibiu. Verifică eticheta: unele variante Vemondo conțin brânză și sunt doar vegetariene, nu vegane.',
      per100g: { kcal: 210, protein: 17, carbs: 6, sugars: 1, fat: 13, satFat: 5, fiber: 3, salt: 1.2 },
      micros: { ironMg: 4, zincMg: 1.8, potassiumMg: 300, b12Ug: 1.5, cholesterolMg: 0 },
      serving: { grams: 113, label: '1 burger (113 g) = ~19 g proteină' },
      effort: 1,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Încinge tigaia cu 1 linguriță de ulei.',
          'Prăjește 4 minute pe fiecare parte, fără să apeși pe burger.',
          'Lasă 1 minut înainte de servire — se leagă mai bine.'
        ],
        yieldNote: 'Pierde ~10% din greutate la prăjire (apă), nu grăsime ca la carne.'
      },
      taste: {
        profile: 'Savuros, condimentat, cu umami de drojdie și o notă vegetală clară în fundal',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Mai moale și mai omogen decât un burger de vită; se sfărâmă dacă îl întorci prea devreme',
        notes: 'În chiflă, cu sos și legume, e complet acceptabil. Simplu pe farfurie se vede clar că nu e carne.'
      },
      stats: { taste: 62, satiety: 70, convenience: 82, versatility: 58 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Masă rapidă cu 19 g proteină; grăsimea saturată din uleiul de cocos îl face mai greu decât pare.',
      tags: ['high-protein', 'frozen', 'processed', 'mid-price', 'post-workout', 'high-sodium', 'b12'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Chiflă integrală', 'Muștar', 'Ceapă roșie', 'Roșii', 'Salată verde', 'Avocado'],
      tips: [
        '5 g grăsime saturată/100 g — din ulei de cocos, nu din carne. Nu e automat mai sănătos decât vita slabă.',
        '1,2 g sare/100 g: un burger întreg îți dă ~1,4 g sare, aproape un sfert din maximul zilnic.',
        'Fortificat cu B12 în majoritatea variantelor — util dacă ești vegan.',
        'Ca proteină pe leu e slab (~2,7 g proteină/leu). Granulele de soia îți dau 19 g proteină/leu.'
      ],
      warnings: ['Produs ultraprocesat — bun ocazional, nu ca bază zilnică.', 'Verifică alergenii: majoritatea conțin gluten și soia.'],
      storage: 'Frigider 2–6 °C; congelabil 3 luni.',
      shelfLife: '2–3 săptămâni refrigerat',
      dataConfidence: 'medium',
      sources: ['lidl.ro gama Vemondo', 'openfoodfacts.org vegan juicy burger Vemondo']
    },

    {
      id: 'v-crenvursti-vegani-vemondo',
      name: 'Vegan Hot Dogs',
      nameRo: 'Crenvurști vegani',
      brand: 'Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🌭',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo', priceRon: 9.99, packGrams: 200, packLabel: 'pachet 200 g (4 buc)', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'K-take it veggie refrigerat', priceRon: 11.99, packGrams: 200, packLabel: 'pachet 200 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft vegan refrigerat', priceRon: 13.5, packGrams: 200, packLabel: 'pachet 200 g', note: '' }
      ],
      sibiuNote: 'Crenvurștii vegani Vemondo sunt cel mai vândut produs vegan din Lidl. La 10 lei pachetul rămân o opțiune rezonabilă pentru o cină rapidă.',
      per100g: { kcal: 215, protein: 15, carbs: 4, sugars: 1, fat: 15, satFat: 1.5, fiber: 3, salt: 1.9 },
      micros: { ironMg: 3, zincMg: 1.4, potassiumMg: 250, b12Ug: 1.2, cholesterolMg: 0 },
      serving: { grams: 100, label: '2 crenvurști (100 g) = 15 g proteină' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 4,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie sau oală'],
        steps: [
          'Încălzește 3–4 minute în apă fierbinte (nu clocotită) SAU rumenește 3 minute în tigaie.',
          'Nu-i fierbe tare: crapă.',
          'Servește cu muștar și hrean.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Fumuriu, sărat, condimentat — surprinzător de aproape de crenvurștii clasici de pui',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Elastică, uniformă, cu pocnetul clasic al membranei',
        notes: 'Dintre alternativele la mezeluri, ăsta e cel mai convingător. Un copil nu observă diferența într-un hot dog.'
      },
      stats: { taste: 68, satiety: 62, convenience: 92, versatility: 60 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 4, dinner: 4, beforeBed: 2 },
      timingNote: 'Convenabil, dar cu 1,9 g sare/100 g nu e o alegere de zi cu zi.',
      tags: ['high-protein', 'ready-to-eat', 'processed', 'high-sodium', 'kid-friendly', 'mid-price', 'b12', 'high-kcal'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Muștar', 'Hrean', 'Chiflă', 'Varză murată', 'Cartofi la cuptor'],
      tips: [
        '1,9 g sare/100 g — printre cele mai sărate produse din categorie. Un pachet întreg = 3,8 g sare.',
        '15 g proteină la 215 kcal e mediocru: 63% din calorii vin din grăsime.',
        'Tăiați rondele și rumeniți în tigaie: cresc gustul mult față de simpla încălzire în apă.',
        'Comparativ, tofu-ul afumat are aproape aceeași proteină la 134 kcal și 1,2 g sare.'
      ],
      warnings: ['Ultraprocesat, bogat în sare și grăsime.', 'Conține gluten și/sau soia — verifică eticheta.'],
      storage: 'Frigider; după deschidere 3 zile.',
      shelfLife: '3–4 săptămâni sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro gama Vemondo', 'Valori tipice crenvurști vegani UE']
    },

    {
      id: 'v-snitel-vegan-vemondo',
      name: 'Vegan Schnitzel',
      nameRo: 'Șnițele vegane pane',
      brand: 'Vemondo (Lidl)',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo / congelator', priceRon: 12.99, packGrams: 270, packLabel: 'pachet 270 g (2 buc)', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'K-take it veggie', priceRon: 14.99, packGrams: 250, packLabel: 'pachet 250 g', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Congelator vegan', priceRon: 16.9, packGrams: 250, packLabel: 'pachet 250 g', note: '' }
      ],
      sibiuNote: 'Cea mai bună variantă pentru cine face tranziția de la carne: e pane, e crocant, are gust familiar românesc.',
      per100g: { kcal: 230, protein: 13, carbs: 17, sugars: 1.5, fat: 12, satFat: 1.3, fiber: 3, salt: 1.4 },
      micros: { ironMg: 2.5, zincMg: 1.2, potassiumMg: 230, b12Ug: 0.8, cholesterolMg: 0 },
      serving: { grams: 135, label: '1 șnițel (135 g) = ~18 g proteină' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 5,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Preîncălzește cuptorul la 200 °C.',
          'Așază șnițelele pe hârtie de copt, fără ulei suplimentar.',
          'Coace 15–18 minute, întorcând o dată.',
          'La airfryer: 180 °C, 12 minute.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Crocant afară, moale înăuntru, cu gust de condimente și pesmet prăjit',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Crustă crocantă convingătoare; interiorul e mai spongios decât carnea',
        notes: 'Cu cartofi și salată e o cină perfect onorabilă. Dar 17 g carbohidrați/100 g vin aproape integral din panure.'
      },
      stats: { taste: 66, satiety: 66, convenience: 80, versatility: 50 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 1 },
      timingNote: 'Masă de prânz sau cină; nu e o sursă densă de proteină per calorie.',
      tags: ['high-protein', 'frozen', 'processed', 'kid-friendly', 'mid-price', 'high-kcal', 'high-sodium'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Cartofi la cuptor', 'Salată de varză', 'Muștar', 'Lămâie', 'Sos de usturoi'],
      tips: [
        'La cuptor sau airfryer, nu în ulei: economisești 100+ kcal pe porție și crusta iese la fel.',
        '13 g proteină/100 g cu 12 g grăsime — raportul e mediocru. Nu e un produs pentru cutting.',
        'Panure = gluten. Nu e o opțiune fără gluten, spre deosebire de tofu.',
        'Costul proteinei: ~370 lei/kg proteină. Aproape la fel de scump ca somonul.'
      ],
      warnings: ['Ultraprocesat.', 'Conține gluten (panure) și de obicei soia.'],
      storage: 'Frigider sau congelator conform ambalajului.',
      shelfLife: '2–3 săptămâni refrigerat / 12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro gama Vemondo', 'Valori tipice șnițel vegan pane']
    },

    {
      id: 'v-garden-gourmet-burger',
      name: 'Sensational Burger',
      nameRo: 'Burger vegetal Sensational',
      brand: 'Garden Gourmet (Nestlé)',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🍔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat vegan, lângă mezeluri', priceRon: 24.99, packGrams: 226, packLabel: 'pachet 226 g (2 burgeri)', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft vegan refrigerat', priceRon: 26.9, packGrams: 226, packLabel: 'pachet 226 g', note: '' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft vegan', priceRon: 27.9, packGrams: 226, packLabel: 'pachet 226 g', note: '' }
      ],
      sibiuNote: 'Garden Gourmet e distribuit de Nestlé România și se găsește constant la Kaufland Șelimbăr și Carrefour Promenada.',
      per100g: { kcal: 230, protein: 17, carbs: 7, sugars: 1, fat: 14, satFat: 5.5, fiber: 4, salt: 1.3 },
      micros: { ironMg: 4.2, zincMg: 2, potassiumMg: 320, b12Ug: 1.5, cholesterolMg: 0 },
      serving: { grams: 113, label: '1 burger (113 g) = ~19 g proteină' },
      effort: 1,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Prăjește direct din frigider, 4 minute pe parte, la foc mediu-mare.',
          'Nu apăsa cu spatula.',
          'Odihnește 1 minut înainte de a-l pune în chiflă.'
        ],
        yieldNote: 'Pierde ~12% din greutate la prăjire.'
      },
      taste: {
        profile: 'Puternic savuros, cu umami de sfeclă și drojdie; sângerează vizual ca burgerul de vită',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 5,
        richness: 4,
        texture: 'Granulată și fibroasă, foarte apropiată de tocătura de vită',
        notes: 'Cel mai convingător burger vegetal accesibil în România. Diferența față de Vemondo se simte la textură și la aromă, nu la macro.'
      },
      stats: { taste: 76, satiety: 70, convenience: 82, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină de weekend; grăsimea saturată din ulei de cocos îl face lent la digestie.',
      tags: ['high-protein', 'processed', 'premium', 'b12', 'iron-rich', 'high-kcal', 'high-sodium', 'imported'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Chiflă brioche', 'Cheddar vegan', 'Ceapă caramelizată', 'Murături', 'Sos burger'],
      tips: [
        'Fortificat cu fier și B12 — cele două micronutriente critice pentru vegani.',
        'La 110 lei/kg e de 2 ori mai scump decât carnea tocată de vită și de 8 ori mai scump decât lintea la aceeași proteină.',
        'Fără gluten (spre deosebire de multe alternative) — util pentru celiaci vegani.',
        '5,5 g grăsime saturată/100 g: mai mult decât un burger de vită 10% grăsime. Marketingul de sănătate e exagerat.'
      ],
      warnings: ['Ultraprocesat.', 'Alergen: soia (proteină de soia texturată).', 'Grăsime saturată ridicată din ulei de cocos.'],
      storage: 'Frigider 2–6 °C.',
      shelfLife: '2–3 săptămâni refrigerat',
      dataConfidence: 'medium',
      sources: ['gardengourmet.ro', 'Eticheta Sensational Burger UE']
    },

    {
      id: 'v-beyond-burger',
      name: 'Beyond Burger',
      nameRo: 'Burger vegetal Beyond Meat',
      brand: 'Beyond Meat',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🟥',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft vegan refrigerat sau congelator', priceRon: 34.99, packGrams: 226, packLabel: 'pachet 226 g (2 burgeri)', note: 'Cel mai scump produs din categorie.' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Raft vegan', priceRon: 37.9, packGrams: 226, packLabel: 'pachet 226 g', note: '' },
        { name: 'Auchan', availability: 'occasional', aisle: 'Raft vegan / congelator', priceRon: 35.9, packGrams: 226, packLabel: 'pachet 226 g', note: '' }
      ],
      sibiuNote: 'În Sibiu îl găsești realist doar la Carrefour Promenada. E un produs de curiozitate, nu de coș săptămânal.',
      per100g: { kcal: 250, protein: 18, carbs: 5, sugars: 0, fat: 18, satFat: 5.5, fiber: 2, salt: 1.4 },
      micros: { ironMg: 4.5, zincMg: 2.2, potassiumMg: 350, b12Ug: 1.2, cholesterolMg: 0 },
      serving: { grams: 113, label: '1 burger (113 g) = ~20 g proteină' },
      effort: 1,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'grill',
        difficulty: 'trivial',
        equipment: ['grătar sau tigaie grill'],
        steps: [
          'Nu-l găti congelat — dezgheață complet la frigider.',
          'Grătar sau tigaie foarte încinsă, 3–4 minute pe parte.',
          'Interiorul trebuie să ajungă la 74 °C.'
        ],
        yieldNote: 'Pierde ~15% din greutate la grătar.'
      },
      taste: {
        profile: 'Foarte carnos, cu grăsime de cocos care se topește și imită sucul de vită',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Cea mai apropiată de vită dintre toate: fibroasă, suculentă, cu pocnet la exterior',
        notes: 'Tehnic impresionant. Dar la 155 lei/kg plătești pentru inginerie alimentară, nu pentru nutriție.'
      },
      stats: { taste: 78, satiety: 68, convenience: 78, versatility: 50 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Produs de ocazie — prea gras și prea scump pentru consum frecvent.',
      tags: ['high-protein', 'processed', 'premium', 'b12', 'iron-rich', 'high-kcal', 'high-sodium', 'imported', 'frozen'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Chiflă brioche', 'Ceapă caramelizată', 'Murături', 'Muștar', 'Cheddar vegan'],
      tips: [
        '155 lei/kg produs, ~860 lei/kg proteină. Granulele de soia dau aceeași proteină la 52 lei/kg. Raportul e 16:1.',
        '18 g grăsime/100 g — mai gras decât o ceafă de porc. Nu e un aliment dietetic.',
        'Proteina vine din mazăre: profil bun de lizină, dar mai sărac în metionină decât soia.',
        'Fără gluten și fără soia — singura alternativă premium potrivită pentru cine e alergic la ambele.'
      ],
      warnings: ['Ultraprocesat, foarte gras și scump.', 'Grăsime saturată 5,5 g/100 g din ulei de cocos.'],
      storage: 'Frigider; se poate congela dacă a fost cumpărat refrigerat.',
      shelfLife: '10–14 zile refrigerat',
      dataConfidence: 'medium',
      sources: ['beyondmeat.com eticheta UE', 'carrefour.ro']
    },

    {
      id: 'v-falafel-congelat',
      name: 'Falafel, Frozen',
      nameRo: 'Falafel congelat (chiftele de năut)',
      brand: 'generic / K-take it veggie / Vemondo',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🧆',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'usual', aisle: 'Congelator, lângă produsele vegetariene', priceRon: 13.99, packGrams: 300, packLabel: 'pungă 300 g (10–12 buc)', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Congelator / raft refrigerat K-take it veggie', priceRon: 14.99, packGrams: 300, packLabel: 'pungă 300 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Congelator horeca', priceRon: 38, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cel mai bun preț pe kg.' }
      ],
      sibiuNote: 'Se găsește și proaspăt la câteva localuri cu shaorma din centrul Sibiului, dar cel congelat de la Kaufland e mai ieftin și mai puțin gras dacă îl faci la cuptor.',
      per100g: { kcal: 270, protein: 11, carbs: 25, sugars: 2, fat: 13, satFat: 1.5, fiber: 7, salt: 1.3 },
      micros: { ironMg: 3.4, zincMg: 1.5, potassiumMg: 480, calciumMg: 60, cholesterolMg: 0 },
      serving: { grams: 120, label: '4 bucăți (120 g) = ~13 g proteină' },
      effort: 1,
      timeMin: 22,
      activeTimeMin: 4,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Preîncălzește la 200 °C.',
          'Așază falafelul congelat pe hârtie de copt, pulverizează puțin ulei.',
          'Coace 18–20 de minute, întorcând la jumătate.',
          'Airfryer: 190 °C, 12 minute — iese mai crocant.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Condimentat cu chimion și coriandru, ierbos de la pătrunjel, crocant afară',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Crustă crocantă, interior sfărâmicios și uscat dacă e supracopt',
        notes: 'Bun, dar uscat fără sos. Tahini sau iaurt cu usturoi nu sunt opționale, sunt obligatorii.'
      },
      stats: { taste: 70, satiety: 68, convenience: 84, versatility: 66 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 4, dinner: 5, beforeBed: 2 },
      timingNote: 'Prânz sau cină; 11 g proteină/100 g nu îl fac o sursă densă, dar e sățios prin fibră.',
      tags: ['frozen', 'high-fiber', 'processed', 'mid-price', 'office-lunch', 'high-sodium', 'high-kcal'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Tahini', 'Lipie', 'Salată de roșii', 'Ceapă roșie', 'Iaurt cu usturoi', 'Murături'],
      tips: [
        'La cuptor în loc de prăjit: scazi de la ~330 kcal/100 g la 270 kcal/100 g.',
        'Doar 11 g proteină/100 g — falafelul e mai mult carbohidrat și grăsime decât proteină.',
        'Falafelul de casă din năut înmuiat (NU fiert!) e mult mai bun: năutul fiert face compoziția să se destrame la prăjit.',
        'Combinat cu lipie de grâu completează profilul de aminoacizi (năut + cereale).'
      ],
      warnings: ['Prăjit în ulei abundent depășește 330 kcal/100 g.', 'Multe variante conțin gluten (pesmet, făină de grâu).'],
      storage: 'Congelator -18 °C; nu recongela.',
      shelfLife: '12 luni congelat',
      dataConfidence: 'medium',
      sources: ['Etichete K-take it veggie / Vemondo falafel', 'USDA falafel']
    },

    {
      id: 'v-chiftele-vegetale',
      name: 'Vegetable & Grain Patties',
      nameRo: 'Chiftele vegetale (legume & cereale)',
      brand: 'K-take it veggie (Kaufland) / Carrefour Veggie',
      category: 'plant-protein',
      subcategory: 'Alternative vegetale la carne',
      emoji: '🥙',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat K-take it veggie', priceRon: 11.99, packGrams: 400, packLabel: 'caserolă 400 g', note: 'Variante cu dovleac-quinoa sau dovlecel-bulgur.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft Carrefour Veggie refrigerat', priceRon: 12.9, packGrams: 400, packLabel: 'caserolă 400 g', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft Vemondo refrigerat', priceRon: 9.99, packGrams: 400, packLabel: 'caserolă 400 g', note: 'Cel mai ieftin din categorie.' }
      ],
      sibiuNote: 'Onest: sunt cel mai slab produs din categoria vegană ca proteină. Le treci în listă ca să știi să NU te bazezi pe ele.',
      per100g: { kcal: 195, protein: 8, carbs: 20, sugars: 2.5, fat: 9, satFat: 1, fiber: 5, salt: 1.2 },
      micros: { ironMg: 1.8, zincMg: 0.9, potassiumMg: 300, cholesterolMg: 0 },
      serving: { grams: 120, label: '3 chiftele (120 g) = ~10 g proteină' },
      effort: 1,
      timeMin: 15,
      activeTimeMin: 5,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Cuptor 190 °C, 12–15 minute.',
          'Sau tigaie, 3 minute pe parte.',
          'Servește cu sos de iaurt sau muștar.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Dulceag de la legume, cu note de cereale și condimente mediteraneene',
        intensity: 3,
        sweetness: 3,
        saltiness: 3,
        umami: 2,
        richness: 2,
        texture: 'Moale și umedă, se sfărâmă ușor; fără crocanța falafelului',
        notes: 'Bune ca garnitură, nu ca sursă de proteină. 8 g/100 g e sub un iaurt grecesc.'
      },
      stats: { taste: 60, satiety: 58, convenience: 86, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: 'Garnitură vegetală, nu masă proteică — adaugă tofu sau leguminoase lângă.',
      tags: ['processed', 'mid-price', 'high-sodium', 'kid-friendly', 'high-fiber'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de iaurt', 'Salată verde', 'Cartofi la cuptor', 'Humus', 'Lipie'],
      tips: [
        'CAPCANA MARKETINGULUI: ambalajul verde și eticheta vegană nu înseamnă proteină. 8 g/100 g e puțin.',
        'Compară cu burgerul vegan (17 g) sau tofu-ul afumat (13 g) din același raft — diferența e mare.',
        'Costul proteinei: ~375 lei/kg proteină. Prost raport.',
        'Bune ca legumă condimentată lângă o sursă reală de proteină, nu în locul ei.'
      ],
      warnings: ['Conținut redus de proteină în raport cu percepția produsului.', 'Conțin gluten în majoritatea variantelor.'],
      storage: 'Frigider 2–6 °C.',
      shelfLife: '10–14 zile refrigerat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro K-take it veggie', 'Valori tipice chiftele vegetale UE']
    },

    {
      id: 'v-fulgi-ovaz-mari',
      name: 'Rolled Oats (Jumbo)',
      nameRo: 'Fulgi de ovăz integrali (fulgi mari)',
      brand: 'Crownfield (Lidl) / K-Classic / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale mic dejun, Crownfield', priceRon: 4.99, packGrams: 500, packLabel: 'pungă 500 g', note: 'Cel mai ieftin din Sibiu; 1 kg la ~8,99 lei în promoție.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale, K-Classic', priceRon: 5.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele de vrac', priceRon: 9, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' }
      ],
      sibiuNote: 'La ~9–10 lei kilogramul, ovăzul e a doua cea mai ieftină sursă de proteină din Sibiu după mazărea despicată și granulele de soia.',
      per100g: { kcal: 372, protein: 13.5, carbs: 58, sugars: 1, fat: 7, satFat: 1.2, fiber: 10, salt: 0.02 },
      micros: { ironMg: 4.7, zincMg: 4, potassiumMg: 430, calciumMg: 54, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscat (un castron de terci) = ~11 g proteină' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 3,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală mică sau bol de microunde'],
        steps: [
          'Pune 80 g fulgi cu 240 ml lapte sau apă.',
          'Fierbe 5–7 minute amestecând (fulgii mari au nevoie de mai mult decât cei instant).',
          'Ia de pe foc, adaugă un praf de sare — schimbă complet gustul.',
          'Pentru overnight oats: amestecă 1:1 cu iaurt și lasă la frigider peste noapte, fără gătit.'
        ],
        yieldNote: '100 g fulgi uscați → ~300 g terci gătit. 13,5 g proteină/100 g uscat devine ~4,5 g/100 g terci.'
      },
      taste: {
        profile: 'Cerealier, ușor nucos, cu dulceață discretă; mult mai texturat decât ovăzul instant',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Fulgi întregi care rămân distincți în terci — mestecabil, nu papă',
        notes: 'Ovăzul mare face terci cu textură; cel instant face pastă. Diferența de gust e mai mare decât cea de preț.'
      },
      stats: { taste: 62, satiety: 88, convenience: 74, versatility: 86 },
      timing: { breakfast: 5, preWorkout: 5, postWorkout: 4, lunch: 3, snack: 4, dinner: 2, beforeBed: 3 },
      timingNote: 'Betaglucanii dau eliberare lentă de energie — cel mai bun carbohidrat pre-antrenament din listă.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'breakfast', 'pre-workout', 'slow-digesting', 'iron-rich'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Unt de arahide', 'Banană', 'Semințe de chia', 'Scorțișoară', 'Proteină pudră'],
      tips: [
        '13,5 g proteină/100 g e mai mult decât crede lumea — ovăzul e a doua cereală după grâul dur ca proteină.',
        'Proteina din ovăz e relativ săracă în lizină: combină-l cu lapte, iaurt sau semințe de cânepă.',
        'Ovăz + 30 g proteină pudră + 15 g unt de arahide = mic dejun cu 45 g proteină pentru sub 6 lei.',
        'Nu e fără gluten decât dacă scrie explicit pe pungă — contaminare încrucișată în moară.'
      ],
      warnings: ['Contaminare încrucișată cu gluten frecventă — celiacii au nevoie de ovăz certificat.'],
      storage: 'Recipient etanș; grăsimea din ovăz râncezește dacă stă la căldură.',
      shelfLife: '12 luni; după deschidere consumă în 3 luni',
      dataConfidence: 'high',
      sources: ['USDA oats raw', 'Eticheta Crownfield fulgi de ovăz']
    },

    {
      id: 'v-fulgi-ovaz-instant',
      name: 'Instant Oats',
      nameRo: 'Fulgi de ovăz instant (mărunți)',
      brand: 'Crownfield (Lidl) / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale mic dejun', priceRon: 5.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft cereale', priceRon: 6.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale', priceRon: 5.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Diferența de preț față de fulgii mari e sub 1 leu; alege în funcție de textură, nu de buget.',
      per100g: { kcal: 375, protein: 12.5, carbs: 61, sugars: 1.2, fat: 7, satFat: 1.2, fiber: 8.5, salt: 0.02 },
      micros: { ironMg: 4.3, zincMg: 3.6, potassiumMg: 400, calciumMg: 50, cholesterolMg: 0 },
      serving: { grams: 60, label: '60 g (1 plic sau 6 linguri) = ~7,5 g proteină' },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['bol', 'microunde sau ibric'],
        steps: [
          'Toarnă apă sau lapte fierbinte peste fulgi.',
          'Amestecă, așteaptă 2 minute.',
          'Gata — nu necesită fierbere.'
        ],
        yieldNote: '100 g fulgi instant → ~320 g terci (absorb mai mult lichid decât fulgii mari).'
      },
      taste: {
        profile: 'Blând, ușor dulceag, fără personalitate; textura domină negativ',
        intensity: 1,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Cremos până la pastos — nu se simt fulgi individuali',
        notes: 'Practic pentru birou, mediocru ca experiență. Plicurile aromate cu zahăr sunt o capcană separată.'
      },
      stats: { taste: 50, satiety: 78, convenience: 92, versatility: 80 },
      timing: { breakfast: 5, preWorkout: 4, postWorkout: 4, lunch: 3, snack: 4, dinner: 2, beforeBed: 3 },
      timingNote: 'Indice glicemic mai mare decât la fulgii mari — mai bun aproape de antrenament decât la 3 ore înainte.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'shelf-stable', 'breakfast', 'office-lunch', 'microwave', 'fast-digesting'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Lapte', 'Miere', 'Fructe uscate', 'Proteină pudră', 'Cacao'],
      tips: [
        'CAPCANĂ: plicurile instant AROMATE (cu ciocolată, cu fructe) au 25–30 g zahăr/100 g și doar 8–9 g proteină.',
        'Cumpără fulgi instant SIMPLI și adaugă tu ce vrei — jumătate din preț și zero zahăr.',
        'Diferența de macro față de fulgii mari e minimă (12,5 vs 13,5 g proteină); diferența e la indicele glicemic și textură.',
        'Amestecă 40 g fulgi instant în shake-ul post-antrenament: se dizolvă complet, spre deosebire de fulgii mari.'
      ],
      warnings: ['Variantele aromate au mult zahăr adăugat.', 'Contaminare cu gluten posibilă.'],
      storage: 'Recipient etanș.',
      shelfLife: '12 luni',
      dataConfidence: 'high',
      sources: ['USDA oats instant plain', 'Eticheta Crownfield']
    },

    {
      id: 'v-tarate-ovaz',
      name: 'Oat Bran',
      nameRo: 'Tărâțe de ovăz',
      brand: 'Sano Vita / Solaris',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🟤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft Sano Vita / produse dietetice', priceRon: 8.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft sănătate', priceRon: 9.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio / dietetic', priceRon: 9.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Sano Vita e brand românesc și cel mai accesibil în Sibiu; se găsește în aproape orice magazin cu raft dietetic.',
      per100g: { kcal: 350, protein: 17, carbs: 48, sugars: 1, fat: 7, satFat: 1.3, fiber: 15, salt: 0.02 },
      micros: { ironMg: 5.4, zincMg: 3.1, potassiumMg: 566, calciumMg: 58, cholesterolMg: 0 },
      serving: { grams: 40, label: '40 g (4 linguri) = ~7 g proteină și 6 g fibră' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Amestecă în iaurt, terci, shake sau aluat.',
          'Bea multă apă — 15 g fibră/100 g fără lichid suficient dă constipație, nu o rezolvă.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pământos, ușor amărui, cu textură de rumeguș fin dacă e consumat uscat',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Granulată și absorbantă; se umflă instantaneu în lichid',
        notes: 'Nu e un aliment plăcut de sine stătător. E un aditiv funcțional care crește fibra și proteina oricărei mese.'
      },
      stats: { taste: 40, satiety: 90, convenience: 90, versatility: 70 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 3, dinner: 3, beforeBed: 3 },
      timingNote: 'Betaglucanii încetinesc golirea gastrică — cea mai sățioasă lingură din bucătărie.',
      tags: ['high-protein', 'high-fiber', 'cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'breakfast', 'slow-digesting', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Fulgi de ovăz', 'Semințe de in', 'Mere rase', 'Scorțișoară'],
      tips: [
        '17 g proteină/100 g — mai mult decât fulgii de ovăz, pentru că tărâța concentrează stratul exterior al bobului.',
        'Betaglucanii din tărâța de ovăz au efect dovedit de scădere a colesterolului LDL la 3 g/zi (≈40 g tărâțe).',
        'Crește doza gradual: de la 1 lingură la 4 în 2 săptămâni, altfel balonare garantată.',
        'Amestecată în chiftele sau burgeri de linte, absoarbe umezeala și le leagă mai bine decât pesmetul.'
      ],
      warnings: ['Necesită hidratare adecvată.', 'Poate reduce absorbția unor medicamente — ia-le la 2 ore distanță.'],
      storage: 'Recipient etanș, ferit de căldură (râncezește mai repede decât fulgii).',
      shelfLife: '6–9 luni după deschidere',
      dataConfidence: 'medium',
      sources: ['Eticheta Sano Vita tărâțe de ovăz', 'USDA oat bran']
    },

    {
      id: 'v-quinoa',
      name: 'Quinoa, Dry',
      nameRo: 'Quinoa uscată',
      brand: 'Sano Vita / K-Bio / Vemondo',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale/bio, lângă bulgur și cuscus', priceRon: 11.99, packGrams: 500, packLabel: 'pungă 500 g', note: 'Cel mai bun preț pe kg din Sibiu.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft bio K-Bio', priceRon: 16.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio', priceRon: 19.9, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Lidl are cea mai ieftină quinoa din Sibiu (~24 lei/kg); în magazinele bio din centru ajunge la 45–60 lei/kg pentru exact același produs.',
      per100g: { kcal: 368, protein: 14, carbs: 58, sugars: 2, fat: 6, satFat: 0.7, fiber: 7, salt: 0.02 },
      micros: { ironMg: 4.6, zincMg: 3.1, potassiumMg: 563, calciumMg: 47, omega3Mg: 300, cholesterolMg: 0 },
      serving: { grams: 70, label: '70 g uscată (≈200 g fiartă) = ~10 g proteină' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['sită fină', 'oală cu capac'],
        steps: [
          'Clătește OBLIGATORIU 1 minut în sită fină — saponina de pe coajă e amară și săpunoasă.',
          'Pune 1 parte quinoa la 2 părți apă cu sare.',
          'Fierbe acoperit 15 minute la foc mic, apoi lasă 5 minute cu capacul pus, fără foc.',
          'Afânează cu furculița — trebuie să vezi germenul ca un inel alb desprins.'
        ],
        yieldNote: '100 g quinoa uscată → ~290 g fiartă. 14 g proteină/100 g uscat → ~4,8 g/100 g fiart.'
      },
      taste: {
        profile: 'Nucos, ușor ierbos, cu o amăreală fină care rămâne dacă nu ai clătit-o',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Boabe mici care pocnesc ușor; nu se lipesc dacă e fiartă corect',
        notes: 'Quinoa neclătită are gust de săpun. E cea mai frecventă greșeală și cel mai frecvent motiv pentru care oamenii spun că nu le place.'
      },
      stats: { taste: 66, satiety: 80, convenience: 52, versatility: 84 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Carbohidrat complet cu proteină decentă — bază bună pentru masa post-antrenament.',
      tags: ['high-fiber', 'complete-protein', 'whole-food', 'meal-prep', 'mid-price', 'iron-rich', 'batch-cook', 'imported'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Avocado', 'Roșii cherry', 'Feta', 'Lămâie', 'Năut', 'Pătrunjel'],
      tips: [
        'Una dintre puținele surse vegetale cu profil COMPLET de aminoacizi (alături de soia, hrișcă, amarant, cânepă).',
        'CLĂTEȘTE-O. Un minut sub jet rezolvă amăreala pentru totdeauna.',
        '14 g/100 g uscată e o valoare bună pentru o cereală, dar fiartă ajunge la ~4,8 g/100 g — nu e o sursă principală de proteină.',
        'Prăjită 2 minute uscat în oală înainte de fierbere capătă gust de alună.'
      ],
      warnings: ['Saponina neclătită e amară și poate irita stomacul.'],
      storage: 'Borcan etanș.',
      shelfLife: '18–24 luni',
      dataConfidence: 'high',
      sources: ['USDA quinoa raw', 'Eticheta Vemondo quinoa']
    },

    {
      id: 'v-hrisca',
      name: 'Buckwheat, Dry',
      nameRo: 'Hrișcă uscată (crudă sau prăjită)',
      brand: 'Sano Vita / Solaris / generic',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🔺',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale, lângă orez și bulgur', priceRon: 8.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft cereale', priceRon: 7.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Tarabele de vrac', priceRon: 15, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' }
      ],
      sibiuNote: 'Hrișca prăjită (kasha, boabe maronii) are gust mult mai puternic decât cea crudă (verde-gălbuie). În Sibiu se vinde predominant cea prăjită.',
      per100g: { kcal: 343, protein: 13.2, carbs: 61, sugars: 1, fat: 3.4, satFat: 0.7, fiber: 10, salt: 0.01 },
      micros: { ironMg: 2.2, zincMg: 2.4, potassiumMg: 460, calciumMg: 18, cholesterolMg: 0 },
      serving: { grams: 70, label: '70 g uscată (≈200 g fiartă) = ~9 g proteină' },
      effort: 2,
      timeMin: 18,
      activeTimeMin: 4,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală cu capac'],
        steps: [
          'Clătește boabele.',
          '1 parte hrișcă la 2 părți apă cu sare.',
          'Fierbe acoperit 12–15 minute la foc mic.',
          'Lasă 5 minute cu capacul pus, apoi afânează cu furculița.'
        ],
        yieldNote: '100 g hrișcă uscată → ~280 g fiartă (~4,7 g proteină/100 g fiartă).'
      },
      taste: {
        profile: 'Puternic pământos, prăjit, aproape ca ceaiul negru afumat; polarizant',
        intensity: 4,
        sweetness: 1,
        saltiness: 0,
        umami: 3,
        richness: 2,
        texture: 'Boabe triunghiulare moi, ușor lipicioase; se pot face terci',
        notes: 'Ori o iubești, ori o urăști. Cu ceapă călită, ciuperci și mărar e una dintre cele mai bune garnituri din Europa de Est.'
      },
      stats: { taste: 58, satiety: 82, convenience: 55, versatility: 68 },
      timing: { breakfast: 3, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Indice glicemic mic pentru o cereală — carbohidrat cu eliberare lentă.',
      tags: ['complete-protein', 'high-fiber', 'cheap-protein', 'budget', 'whole-food', 'shelf-stable', 'meal-prep'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ciuperci', 'Ceapă călită', 'Mărar', 'Iaurt', 'Ou', 'Unt'],
      tips: [
        'Nu e grâu — hrișca e o pseudocereală înrudită cu măcrișul, complet fără gluten.',
        'Profil complet de aminoacizi, cu lizină neobișnuit de multă pentru o cereală.',
        'Hrișca verde (nepărjită) e mult mai blândă la gust și se poate încolți.',
        '13,2 g/100 g crudă → ~4,7 g/100 g fiartă. Ca la orice cereală, apa diluează.'
      ],
      warnings: ['Alergie la hrișcă există și poate fi severă (mai frecventă în Asia).'],
      storage: 'Borcan etanș.',
      shelfLife: '12 luni (cea prăjită râncezește mai repede)',
      dataConfidence: 'high',
      sources: ['USDA buckwheat raw', 'CIQUAL sarrasin']
    },

    {
      id: 'v-orez-brun',
      name: 'Brown Rice, Dry',
      nameRo: 'Orez brun (integral), uscat',
      brand: 'generic / K-Classic / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🍚',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft orez și paste', priceRon: 6.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft orez', priceRon: 11.99, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cel mai bun preț pe kg.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk', priceRon: 52, packGrams: 5000, packLabel: 'sac 5 kg', note: '' }
      ],
      sibiuNote: 'Orezul brun e ieftin peste tot în Sibiu. Nu e o sursă de proteină, e un carbohidrat care completează aminoacizii leguminoaselor.',
      per100g: { kcal: 360, protein: 7.5, carbs: 72, sugars: 0.9, fat: 2.7, satFat: 0.6, fiber: 3.5, salt: 0.01 },
      micros: { ironMg: 1.5, zincMg: 2, potassiumMg: 250, calciumMg: 23, cholesterolMg: 0 },
      serving: { grams: 75, label: '75 g uscat (≈200 g fiert) = ~5,6 g proteină' },
      effort: 2,
      timeMin: 40,
      activeTimeMin: 4,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală cu capac'],
        steps: [
          'Clătește orezul de 2 ori.',
          '1 parte orez la 2,2 părți apă cu sare.',
          'Fierbe acoperit 30–35 de minute la foc mic (mult mai mult decât orezul alb).',
          'Lasă 10 minute cu capacul pus înainte de a-l afâna.'
        ],
        yieldNote: '100 g orez brun uscat → ~270 g fiert (~2,8 g proteină/100 g fiert).'
      },
      taste: {
        profile: 'Nucos, cu gust de tărâțe; mult mai pronunțat decât orezul alb',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Bob ferm, ușor mestecos; nu devine niciodată moale-cremos',
        notes: 'Onest: e o garnitură bună, dar nu o sursă de proteină. 2,8 g/100 g fiert e practic zero în context.'
      },
      stats: { taste: 55, satiety: 72, convenience: 45, versatility: 88 },
      timing: { breakfast: 2, preWorkout: 5, postWorkout: 5, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Carbohidrat de bază; combinat cu leguminoase completează profilul de aminoacizi.',
      tags: ['cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'bulk-buy', 'meal-prep', 'batch-cook', 'high-fiber'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Fasole neagră', 'Linte', 'Tofu', 'Legume la wok', 'Sos de soia'],
      tips: [
        'Orez + leguminoase = proteină completă. Orezul aduce metionina, leguminoasele aduc lizina.',
        'Doar 7,5 g proteină/100 g uscat, 2,8 g/100 g fiert — nu îl trece în calcul ca sursă proteică.',
        'Conține mai mult arsenic decât orezul alb (se acumulează în tărâțe) — clătește bine și fierbe în multă apă pe care o arunci.',
        'Se congelează excelent porționat; 3 minute la microunde și e ca proaspăt.'
      ],
      warnings: ['Orezul integral acumulează arsenic anorganic. Variază sursele de carbohidrați dacă îl mănânci zilnic.'],
      storage: 'Borcan etanș; uleiul din tărâțe râncezește în ~1 an.',
      shelfLife: '12 luni (mai scurt decât orezul alb)',
      dataConfidence: 'high',
      sources: ['USDA brown rice long-grain raw', 'EFSA — arsenic în orez']
    },

    {
      id: 'v-bulgur',
      name: 'Bulgur, Dry',
      nameRo: 'Bulgur uscat',
      brand: 'generic / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🟨',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, lângă cuscus', priceRon: 5.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale', priceRon: 6.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft internațional / turcesc', priceRon: 22, packGrams: 2500, packLabel: 'pungă 2,5 kg', note: '' }
      ],
      sibiuNote: 'Bulgurul e printre cele mai ieftine cereale din Sibiu și se face în 12 minute fără atenție — cea mai bună garnitură rapidă din raft.',
      per100g: { kcal: 342, protein: 12.3, carbs: 64, sugars: 0.4, fat: 1.3, satFat: 0.2, fiber: 12, salt: 0.02 },
      micros: { ironMg: 2.5, zincMg: 1.9, potassiumMg: 410, calciumMg: 35, cholesterolMg: 0 },
      serving: { grams: 70, label: '70 g uscat (≈190 g fiert) = ~8,6 g proteină' },
      effort: 1,
      timeMin: 15,
      activeTimeMin: 3,
      cooking: {
        method: 'soak',
        difficulty: 'trivial',
        equipment: ['bol cu capac sau oală'],
        steps: [
          'Pune 1 parte bulgur la 1,8 părți apă clocotită cu sare.',
          'Acoperă și lasă 12 minute — nu trebuie foc deloc.',
          'Afânează cu furculița, adaugă ulei de măsline și lămâie.',
          'Pentru tabbouleh: amestecă cu pătrunjel tocat mărunt, roșii și mentă.'
        ],
        yieldNote: '100 g bulgur uscat → ~270 g hidratat (~4,5 g proteină/100 g gata).'
      },
      taste: {
        profile: 'Nucos, cu gust clar de grâu prăjit; mai interesant decât orezul',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Granulat și afânat, nu se lipește; textură mai interesantă decât cuscusul',
        notes: 'Cea mai subestimată garnitură din raftul românesc. Ieftină, rapidă, cu 12 g fibră.'
      },
      stats: { taste: 64, satiety: 82, convenience: 82, versatility: 80 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Indice glicemic mic pentru un produs din grâu — bun ca bază de prânz.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'meal-prep', 'office-lunch', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pătrunjel', 'Roșii', 'Lămâie', 'Năut', 'Mentă', 'Iaurt'],
      tips: [
        '12 g fibră/100 g — de 3,5 ori mai mult decât orezul brun.',
        'Nu necesită fierbere: apă clocotită și 12 minute sub capac. Perfect pentru birou dacă ai un fierbător.',
        'Bulgur fin (nr. 1) pentru chiftele și tabbouleh; bulgur grosier (nr. 3) pentru garnitură.',
        'Bulgur + năut la aceeași masă = profil complet de aminoacizi.'
      ],
      warnings: ['Conține gluten (e grâu).'],
      storage: 'Borcan etanș.',
      shelfLife: '18–24 luni',
      dataConfidence: 'high',
      sources: ['USDA bulgur dry', 'CIQUAL boulgour cru']
    },

    {
      id: 'v-cuscus',
      name: 'Couscous, Dry',
      nameRo: 'Cuscus uscat',
      brand: 'generic / K-Classic',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🟡',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft cereale, lângă bulgur', priceRon: 5.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale K-Classic', priceRon: 5.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft paste & cereale', priceRon: 6.49, packGrams: 500, packLabel: 'pungă 500 g', note: '' }
      ],
      sibiuNote: 'Cea mai rapidă garnitură din tot raftul: 5 minute sub capac, fără foc. Util când ajungi acasă la 21:00.',
      per100g: { kcal: 376, protein: 12.8, carbs: 72, sugars: 0.6, fat: 0.6, satFat: 0.1, fiber: 5, salt: 0.02 },
      micros: { ironMg: 1.1, zincMg: 0.8, potassiumMg: 166, calciumMg: 24, cholesterolMg: 0 },
      serving: { grams: 70, label: '70 g uscat (≈180 g hidratat) = ~9 g proteină' },
      effort: 1,
      timeMin: 7,
      activeTimeMin: 3,
      cooking: {
        method: 'soak',
        difficulty: 'trivial',
        equipment: ['bol cu capac'],
        steps: [
          'Pune cuscusul într-un bol, toarnă peste el apă clocotită 1:1,3 cu sare și 1 linguriță ulei.',
          'Acoperă cu o farfurie și lasă 5 minute.',
          'Afânează cu furculița — dacă nu îl afânezi, rămâne un bulgăre.'
        ],
        yieldNote: '100 g cuscus uscat → ~260 g hidratat (~5 g proteină/100 g gata).'
      },
      taste: {
        profile: 'Foarte blând, ușor dulceag, aproape neutru',
        intensity: 1,
        sweetness: 2,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Granule fine și pufoase; se aglomerează dacă nu e afânat imediat',
        notes: 'Cuscusul e paste măcinate, nu cereală integrală. Fibra e la jumătate față de bulgur și indicele glicemic e mai mare.'
      },
      stats: { taste: 56, satiety: 62, convenience: 92, versatility: 78 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Se digeră repede — mai potrivit în jurul antrenamentului decât la o cină lungă.',
      tags: ['cheap-protein', 'budget', 'shelf-stable', 'office-lunch', 'fast-digesting', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Legume la cuptor', 'Năut', 'Stafide', 'Migdale', 'Harissa', 'Lămâie'],
      tips: [
        'Cuscusul integral (dacă îl găsești) are 8 g fibră/100 g față de 5 g la cel alb.',
        'Nu e o cereală întreagă: e griș de grâu dur aglomerat, deci practic paste.',
        'Bulgurul îl bate la fibră (12 vs 5 g) și la indice glicemic, la același preț.',
        'Hidratează-l în supă de legume în loc de apă: singura modificare care contează la gust.'
      ],
      warnings: ['Conține gluten.', 'Indice glicemic mai mare decât bulgurul sau orezul brun.'],
      storage: 'Borcan etanș.',
      shelfLife: '24 luni',
      dataConfidence: 'high',
      sources: ['USDA couscous dry', 'CIQUAL semoule de blé']
    },

    {
      id: 'v-amarant',
      name: 'Amaranth, Dry',
      nameRo: 'Amarant uscat',
      brand: 'Sano Vita / bio',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🟠',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio K-Bio, lângă quinoa', priceRon: 17.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'sanovita.ro, magazine bio', priceRon: 19, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 21.9, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Nișă în Sibiu. Merită căutat pentru un singur motiv: e una dintre cele cinci surse vegetale cu profil complet de aminoacizi.',
      per100g: { kcal: 371, protein: 14, carbs: 58, sugars: 1.7, fat: 7, satFat: 1.5, fiber: 7, salt: 0.02 },
      micros: { ironMg: 7.6, zincMg: 2.9, potassiumMg: 508, calciumMg: 159, cholesterolMg: 0 },
      serving: { grams: 60, label: '60 g uscat (≈160 g fiert) = ~8,4 g proteină' },
      effort: 2,
      timeMin: 25,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală cu capac'],
        steps: [
          '1 parte amarant la 2,5 părți apă cu sare.',
          'Fierbe acoperit 20 de minute la foc mic, amestecând ocazional (se lipește).',
          'Rezultă un terci lipicios — asta e textura lui normală, nu ai greșit.',
          'Alternativ: pufează-l în oală uscată foarte încinsă, câte 1 lingură odată, ca floricelele.'
        ],
        yieldNote: '100 g amarant uscat → ~270 g fiert (~5,2 g proteină/100 g fiert).'
      },
      taste: {
        profile: 'Pământos, ușor piperat, cu o notă minerală distinctă',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Lipicioasă și mucilaginoasă fiert; crocantă și aerată dacă e pufeat',
        notes: 'Fiert singur e neplăcut de lipicios. Pufeat e delicios peste iaurt. Amestecat 1:3 cu quinoa e cel mai bun compromis.'
      },
      stats: { taste: 48, satiety: 82, convenience: 45, versatility: 58 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 4, lunch: 4, snack: 3, dinner: 4, beforeBed: 3 },
      timingNote: 'Bogat în calciu și fier — util în dietele fără lactate.',
      tags: ['complete-protein', 'high-fiber', 'whole-food', 'iron-rich', 'calcium-rich', 'premium', 'shelf-stable'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Quinoa', 'Iaurt', 'Miere', 'Nucă de cocos', 'Legume la cuptor'],
      tips: [
        '159 mg calciu/100 g — mai mult decât orice altă cereală și cât laptele, pentru vegani e relevant.',
        'Proteină completă, cu lizină multă — rar la o cereală.',
        'Pufează-l în oală uscată: 1 lingură odată, capac, 20 de secunde. Devine cereal crocant fără zahăr.',
        'Amestecă-l 1:3 cu orez sau quinoa; singur textura descurajează majoritatea oamenilor.'
      ],
      warnings: [],
      storage: 'Borcan etanș, ferit de căldură.',
      shelfLife: '12 luni',
      dataConfidence: 'medium',
      sources: ['USDA amaranth grain uncooked', 'Etichete Sano Vita / bio']
    },

    {
      id: 'v-orz-arpacas',
      name: 'Pearl Barley, Dry',
      nameRo: 'Arpacaș (orz perlat), uscat',
      brand: 'generic / K-Classic',
      category: 'plant-protein',
      subcategory: 'Cereale & pseudocereale',
      emoji: '🌾',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft cereale, lângă griș și mălai', priceRon: 4.49, packGrams: 500, packLabel: 'pungă 500 g', note: 'Una dintre cele mai ieftine cereale din magazin.' },
        { name: 'Profi', availability: 'always', aisle: 'Raft cereale', priceRon: 4.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Tarabe de vrac', priceRon: 8, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' }
      ],
      sibiuNote: 'Arpacașul e ingredientul clasic al ciorbelor ardelenești și costă sub 9 lei/kg — cea mai ieftină cereală din Sibiu.',
      per100g: { kcal: 352, protein: 9.9, carbs: 62, sugars: 0.8, fat: 1.2, satFat: 0.25, fiber: 15.6, salt: 0.01 },
      micros: { ironMg: 2.5, zincMg: 2, potassiumMg: 280, calciumMg: 29, cholesterolMg: 0 },
      serving: { grams: 70, label: '70 g uscat (≈200 g fiert) = ~7 g proteină' },
      effort: 2,
      timeMin: 45,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală'],
        steps: [
          'Clătește arpacașul.',
          'Fierbe în multă apă cu sare 35–45 de minute.',
          'Scurge sau lasă lichidul dacă faci supă (leagă frumos).',
          'Pentru risotto de orz: căleste cu ceapă și adaugă supă treptat, 40 de minute.'
        ],
        yieldNote: '100 g arpacaș uscat → ~290 g fiert (~3,4 g proteină/100 g fiert).'
      },
      taste: {
        profile: 'Blând, ușor dulceag, cu textură mestecată plăcută',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Bob rotund, elastic, ușor cauciucat — rămâne ferm chiar și fiert mult',
        notes: 'Leagă supele mai bine decât orice altă cereală. Risottoul de orz e mai bun decât cel de orez și de 5 ori mai ieftin.'
      },
      stats: { taste: 58, satiety: 88, convenience: 42, versatility: 66 },
      timing: { breakfast: 2, preWorkout: 4, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 3 },
      timingNote: 'Betaglucanii îl fac foarte sățios — o ciorbă cu arpacaș ține de foame ore întregi.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'romanian-classic', 'batch-cook', 'winter'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ciuperci', 'Ceapă', 'Morcov', 'Cimbru', 'Pătrunjel', 'Fasole'],
      tips: [
        '15,6 g fibră/100 g — cel mai bogat în fibră dintre toate cerealele din listă.',
        'Doar 9,9 g proteină/100 g — e o cereală de fibră și de sațietate, nu de proteină.',
        'Orzul decorticat (nu perlat) are mai multă fibră și mai multe minerale, dar fierbe 90 de minute.',
        'Fierbe 500 g odată și congelează — se dezgheață perfect în ciorbă.'
      ],
      warnings: ['Conține gluten.'],
      storage: 'Borcan etanș.',
      shelfLife: '18 luni',
      dataConfidence: 'high',
      sources: ['USDA barley pearled raw', 'CIQUAL orge perlé']
    },

    {
      id: 'v-paste-integrale',
      name: 'Whole Wheat Pasta',
      nameRo: 'Paste integrale',
      brand: 'Barilla Integrale / K-Classic / Combino (Lidl)',
      category: 'plant-protein',
      subcategory: 'Paste & făinuri',
      emoji: '🍝',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft paste, Combino', priceRon: 4.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft paste', priceRon: 5.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft paste, Barilla', priceRon: 9.9, packGrams: 500, packLabel: 'cutie 500 g Barilla', note: 'Barilla e mai scump, dar ține al dente mai bine.' }
      ],
      sibiuNote: 'Pastele integrale costă cu 1–2 lei mai mult decât cele albe și aduc +4 g proteină și +6 g fibră la 100 g. Cel mai bun upgrade de 1 leu din supermarket.',
      per100g: { kcal: 348, protein: 13.5, carbs: 62, sugars: 3, fat: 2.5, satFat: 0.5, fiber: 9, salt: 0.02 },
      micros: { ironMg: 3.6, zincMg: 2.4, potassiumMg: 310, calciumMg: 34, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscate (≈190 g fierte) = ~11 g proteină' },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală mare', 'strecurătoare'],
        steps: [
          'Fierbe 1 litru de apă la 100 g paste, cu 7 g sare.',
          'Fierbe 1 minut mai puțin decât scrie pe pungă.',
          'Păstrează 100 ml din apa de fierbere pentru sos.',
          'Termină pastele în tigaia cu sos, 1 minut — nu turna sos peste paste scurse.'
        ],
        yieldNote: '100 g paste uscate → ~240 g fierte (~5,6 g proteină/100 g fierte).'
      },
      taste: {
        profile: 'Cerealier, nucos, cu o ușoară amăreală de tărâțe',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 1,
        texture: 'Mai aspră și mai puțin elastică decât pastele albe; iartă mai greu supra-fierberea',
        notes: 'Textura e clar inferioară pastelor albe de calitate. Dar diferența nutrițională e reală și sosul acoperă mult.'
      },
      stats: { taste: 58, satiety: 78, convenience: 70, versatility: 88 },
      timing: { breakfast: 1, preWorkout: 5, postWorkout: 4, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Carbohidrat cu eliberare mai lentă decât pastele albe — bun cu 2–3 ore înainte de antrenament.',
      tags: ['high-fiber', 'cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'pre-workout', 'batch-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: false, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de roșii', 'Linte', 'Broccoli', 'Usturoi', 'Drojdie inactivă', 'Ulei de măsline'],
      tips: [
        '13,5 g proteină/100 g uscate — mai mult decât crede lumea, dar fierte ajung la 5,6 g/100 g.',
        'Verifică ingredientele: unele paste "integrale" sunt făină albă cu tărâțe adăugate.',
        'Combină pastele cu linte sau fasole în sos: completezi aminoacizii și dublezi proteina farfuriei.',
        'Nu clăti niciodată pastele — amidonul de la suprafață e ce leagă sosul.'
      ],
      warnings: ['Conțin gluten.'],
      storage: 'Cămară, pungă închisă.',
      shelfLife: '2–3 ani',
      dataConfidence: 'high',
      sources: ['USDA whole wheat pasta dry', 'Eticheta Barilla Integrale']
    },

    {
      id: 'v-paste-linte-rosie',
      name: 'Red Lentil Pasta',
      nameRo: 'Paste din făină de linte roșie',
      brand: 'Barilla Legume / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Paste & făinuri',
      emoji: '🟥',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'always', aisle: 'Raft paste, secțiunea fără gluten / Barilla Legume', priceRon: 14.9, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft paste speciale / bio', priceRon: 13.99, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Lidl', availability: 'occasional', aisle: 'Raft Vemondo / săptămâni tematice', priceRon: 11.99, packGrams: 250, packLabel: 'pungă 250 g', note: 'Cel mai bun preț când apar.' }
      ],
      sibiuNote: 'La ~60 lei/kg sunt scumpe, dar 25 g proteină/100 g le face cel mai ușor mod de a transforma o farfurie de paste într-o masă proteică.',
      per100g: { kcal: 345, protein: 25, carbs: 50, sugars: 2.5, fat: 2.5, satFat: 0.5, fiber: 7, salt: 0.05 },
      micros: { ironMg: 6.5, zincMg: 3, potassiumMg: 700, calciumMg: 50, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscate (≈180 g fierte) = 20 g proteină' },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală mare', 'strecurătoare'],
        steps: [
          'Fierbe în MULTĂ apă cu sare — pastele de leguminoase lasă foarte mult amidon.',
          'Respectă exact timpul de pe cutie (7–8 minute): trec de la al dente la terci în 90 de secunde.',
          'Clătește-le scurt cu apă caldă dacă apa a devenit foarte cleioasă (excepția de la regula "nu clăti pastele").',
          'Servește imediat — reci se lipesc într-un bloc.'
        ],
        yieldNote: '100 g paste de linte uscate → ~230 g fierte (~11 g proteină/100 g fierte — dublu față de pastele de grâu).'
      },
      taste: {
        profile: 'Gust clar de linte, dulceag-pământos; nu încearcă să pară grâu',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Mai moale și mai fragilă decât pastele de grâu; se rupe ușor',
        notes: 'Onest: nu sunt paste bune, sunt paste utile. Textura e sub cea a pastelor de grâu, dar 25 g proteină compensează.'
      },
      stats: { taste: 58, satiety: 86, convenience: 68, versatility: 70 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'O farfurie normală ajunge la 20 g proteină — cea mai simplă cină vegetariană proteică.',
      tags: ['very-high-protein', 'high-fiber', 'shelf-stable', 'premium', 'iron-rich', 'post-workout', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de roșii', 'Busuioc', 'Ulei de măsline', 'Broccoli', 'Drojdie inactivă', 'Ricotta'],
      tips: [
        '25 g proteină/100 g — de aproape 2 ori cât pastele integrale, la aceeași porție.',
        'Fără gluten, deci una dintre puținele opțiuni proteice pentru celiaci.',
        'Nu le lăsa nesupravegheate: trec de la perfect la terci în mai puțin de 2 minute.',
        'Costul proteinei: ~240 lei/kg proteină. Scump față de lintea uscată (~65 lei/kg), dar ieftin față de carne premium.'
      ],
      warnings: ['Se sfărâmă la reîncălzire — nu sunt bune pentru meal prep.'],
      storage: 'Cămară.',
      shelfLife: '18–24 luni',
      dataConfidence: 'high',
      sources: ['Eticheta Barilla Penne din făină de linte roșie (25 g proteină/100 g)', 'barilla.com']
    },

    {
      id: 'v-paste-naut',
      name: 'Chickpea Pasta',
      nameRo: 'Paste din făină de năut',
      brand: 'Barilla Legume / import bio',
      category: 'plant-protein',
      subcategory: 'Paste & făinuri',
      emoji: '🟨',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft paste fără gluten / Barilla Legume', priceRon: 14.5, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio / paste speciale', priceRon: 15.9, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online', priceRon: 17, packGrams: 250, packLabel: 'cutie 250 g', note: '' }
      ],
      sibiuNote: 'Mai rare decât cele de linte în Sibiu. Carrefour Promenada e cea mai sigură sursă.',
      per100g: { kcal: 340, protein: 20, carbs: 52, sugars: 3, fat: 5, satFat: 0.6, fiber: 10, salt: 0.05 },
      micros: { ironMg: 5, zincMg: 2.8, potassiumMg: 620, calciumMg: 70, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscate (≈180 g fierte) = 16 g proteină' },
      effort: 2,
      timeMin: 13,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală mare', 'strecurătoare'],
        steps: [
          'Multă apă cu sare, la clocot puternic.',
          'Fierbe 8–9 minute, gustând de la minutul 7.',
          'Scurge și amestecă imediat cu sos — nu le lăsa să stea.',
          'Un strop de ulei de măsline previne lipirea.'
        ],
        yieldNote: '100 g paste de năut uscate → ~225 g fierte (~9 g proteină/100 g fierte).'
      },
      taste: {
        profile: 'Nucos, cu gust distinct de năut și o ușoară textură făinoasă',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 2,
        texture: 'Mai fermă decât pastele de linte; rezistă ceva mai bine la supra-fierbere',
        notes: 'Textural sunt cele mai bune paste de leguminoase. Gustul de năut e mai puternic decât se așteaptă majoritatea.'
      },
      stats: { taste: 60, satiety: 86, convenience: 68, versatility: 72 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: '10 g fibră/100 g le face foarte sățioase — porție mai mică, aceeași sațietate.',
      tags: ['high-protein', 'high-fiber', 'shelf-stable', 'premium', 'iron-rich', 'post-workout', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Sos de roșii cu usturoi', 'Spanac', 'Lămâie', 'Tahini', 'Măsline', 'Feta'],
      tips: [
        '20 g proteină + 10 g fibră/100 g — cea mai echilibrată paste de leguminoase.',
        'Fără gluten; verifică totuși eticheta pentru contaminare încrucișată dacă ești celiac.',
        'Rezistă mai bine decât cele de linte la reîncălzire, dar tot nu sunt ideale pentru meal prep.',
        'La ~58 lei/kg costul proteinei e ~290 lei/kg — plătești pentru comoditate, nu pentru economie.'
      ],
      warnings: ['Fibra mare poate cauza disconfort dacă nu ești obișnuit cu leguminoase.'],
      storage: 'Cămară.',
      shelfLife: '18–24 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Barilla Legume / import bio', 'Valori tipice paste de năut UE']
    },

    {
      id: 'v-paste-mazare',
      name: 'Green Pea Pasta',
      nameRo: 'Paste din făină de mazăre verde',
      brand: 'Vemondo (Lidl) / import',
      category: 'plant-protein',
      subcategory: 'Paste & făinuri',
      emoji: '🟩',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'occasional', aisle: 'Raft Vemondo / campanii vegane', priceRon: 11.99, packGrams: 250, packLabel: 'pungă 250 g', note: 'Apar în campaniile Vemondo, nu permanent.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft paste fără gluten', priceRon: 15.9, packGrams: 250, packLabel: 'cutie 250 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online', priceRon: 18, packGrams: 250, packLabel: 'cutie 250 g', note: '' }
      ],
      sibiuNote: 'Cele mai greu de găsit dintre pastele de leguminoase în Sibiu. Când apar la Lidl, merită luate 3–4 pungi.',
      per100g: { kcal: 340, protein: 23, carbs: 48, sugars: 3, fat: 3, satFat: 0.5, fiber: 10, salt: 0.05 },
      micros: { ironMg: 5.5, zincMg: 2.6, potassiumMg: 600, calciumMg: 45, cholesterolMg: 0 },
      serving: { grams: 80, label: '80 g uscate (≈180 g fierte) = ~18 g proteină' },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 6,
      cooking: {
        method: 'boil',
        difficulty: 'easy',
        equipment: ['oală mare', 'strecurătoare'],
        steps: [
          'Multă apă cu sare.',
          'Fierbe 7–8 minute; gustă din minutul 6.',
          'Scurge repede și amestecă cu sos.',
          'Merg foarte bine cu sosuri pe bază de smântână vegetală și mazăre verde.'
        ],
        yieldNote: '100 g paste de mazăre uscate → ~225 g fierte (~10 g proteină/100 g fierte).'
      },
      taste: {
        profile: 'Dulceag, ierbos, cu gust clar de mazăre uscată',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Ușor granuloasă și mai fragilă; culoarea verde-gri surprinde vizual',
        notes: 'Gustul de mazăre e mai insistent decât cel de linte. Cu sos roșu puternic funcționează; cu sos delicat, mazărea domină.'
      },
      stats: { taste: 54, satiety: 86, convenience: 62, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Proteina din mazăre e bogată în lizină și BCAA — bună post-antrenament.',
      tags: ['high-protein', 'high-fiber', 'shelf-stable', 'premium', 'post-workout', 'cutting'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pesto', 'Roșii uscate', 'Spanac', 'Ciuperci', 'Lămâie', 'Nucă'],
      tips: [
        '23 g proteină/100 g cu profil bogat în lizină — complementare cu pastele de grâu.',
        'Fără gluten și fără soia — utile pentru alergii multiple.',
        'Gustul de mazăre e puternic: alege sosuri intense (arrabbiata, pesto), nu unturi delicate.',
        'Verifică compoziția: unele "paste de mazăre" sunt de fapt grâu cu 20% făină de mazăre.'
      ],
      warnings: ['Unele mărci amestecă făina de mazăre cu grâu — citește ingredientele dacă ai nevoie de fără gluten.'],
      storage: 'Cămară.',
      shelfLife: '18 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Vemondo / import UE paste de mazăre']
    },

    {
      id: 'v-taitei-konjac',
      name: 'Konjac Noodles (Shirataki)',
      nameRo: 'Tăiței de konjac (shirataki)',
      brand: 'generic import',
      category: 'plant-protein',
      subcategory: 'Paste & făinuri',
      emoji: '🍜',
      unit: 'g',
      stores: [
        { name: 'Carrefour', availability: 'usual', aisle: 'Raft dietetic / asiatic', priceRon: 12.9, packGrams: 270, packLabel: 'pungă 270 g (200 g scurs)', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft dietetic / săptămâna asiatică', priceRon: 11.99, packGrams: 270, packLabel: 'pungă 270 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine dietetice online', priceRon: 10, packGrams: 270, packLabel: 'pungă 270 g', note: '' }
      ],
      sibiuNote: 'Îl treci în listă ca AVERTISMENT, nu ca recomandare: e vândut în raftul dietetic lângă produsele proteice, dar are practic zero proteină.',
      per100g: { kcal: 8, protein: 0.2, carbs: 0.5, sugars: 0, fat: 0, satFat: 0, fiber: 3, salt: 0.05 },
      serving: { grams: 200, label: '1 pungă scursă (200 g) = 0,4 g proteină' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 5,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['strecurătoare', 'tigaie'],
        steps: [
          'Scurge și clătește 2 minute sub jet — mirosul de pește din lichid e normal, dar trebuie eliminat.',
          'Opărește 2 minute în apă clocotită.',
          'Prăjește în tigaie uscată 3 minute pentru a evapora apa — altfel rămân apoși.',
          'Adaugă la sos deja făcut, nu invers.'
        ],
        yieldNote: 'Pungă 270 g brut = ~200 g tăiței scurși.'
      },
      taste: {
        profile: 'Practic fără gust; textura e tot ce oferă',
        intensity: 0,
        sweetness: 0,
        saltiness: 0,
        umami: 0,
        richness: 0,
        texture: 'Gelatinoasă și cauciucată, foarte diferită de pastele reale',
        notes: 'Sincer: nu sunt paste, sunt fibră hidratată în formă de tăiței. Ca sațietate la volum funcționează; ca aliment sunt goale.'
      },
      stats: { taste: 25, satiety: 55, convenience: 76, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 1, lunch: 3, snack: 2, dinner: 3, beforeBed: 3 },
      timingNote: 'Umple stomacul fără calorii — util în deficit caloric agresiv, inutil ca proteină.',
      tags: ['low-kcal', 'low-carb', 'high-fiber', 'cutting', 'ready-to-eat', 'processed', 'imported'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Sos de soia', 'Ulei de susan', 'Tofu', 'Ghimbir', 'Ceapă verde', 'Ou'],
      tips: [
        'CONTRAST DELIBERAT: 0,2 g proteină/100 g. E cel mai sărac aliment din întreaga bază de date.',
        'Nu îl folosi ca înlocuitor de paste dacă urmărești proteina — folosește pastele de linte.',
        'Are sens exact într-un caz: vrei volum de mâncare la 8 kcal/100 g, în timpul unui deficit agresiv.',
        'Glucomananul absoarbe apă în stomac — bea lichid suficient sau ai disconfort.'
      ],
      warnings: ['Aproape zero valoare nutrițională. Nu este o sursă de proteină.', 'Glucomananul poate provoca obstrucție esofagiană dacă e consumat fără lichid suficient.'],
      storage: 'Cămară până la deschidere (ambalat în lichid); după deschidere, frigider 2 zile.',
      shelfLife: '12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete import shirataki UE', 'USDA konjac noodles']
    },

    {
      id: 'v-arahide-crude',
      name: 'Raw Peanuts',
      nameRo: 'Arahide crude, decojite',
      brand: 'generic / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu semințe și fructe uscate', priceRon: 30, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cel mai ieftin gram de proteină din categoria nuci.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft fructe uscate & semințe', priceRon: 8.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk', priceRon: 62, packGrams: 2500, packLabel: 'sac 2,5 kg', note: '' }
      ],
      sibiuNote: 'Piața Cibin la ~30 lei/kg: arahidele sunt de departe cele mai ieftine nuci din Sibiu și au cea mai multă proteină din grupă (26 g/100 g).',
      per100g: { kcal: 567, protein: 26, carbs: 12, sugars: 4.5, fat: 49, satFat: 7, fiber: 8.5, salt: 0.02 },
      micros: { ironMg: 4.6, zincMg: 3.3, potassiumMg: 705, calciumMg: 92, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = ~8 g proteină, 170 kcal' },
      effort: 1,
      timeMin: 15,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă'],
        steps: [
          'Împrăștie într-un singur strat pe tavă.',
          'Coace la 160 °C, 12–15 minute, amestecând o dată.',
          'Se rumenesc și după ce le scoți — nu le lăsa până se închid complet la culoare.',
          'Lasă-le să se răcească complet: devin crocante abia la rece.'
        ],
        yieldNote: 'Pierd ~5% din greutate la prăjire (apă), deci proteina se concentrează ușor.'
      },
      taste: {
        profile: 'Crude: fasoliu, lăptos, fără crocanță. Prăjite: dulci, nucoase, intense',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 4,
        texture: 'Crude sunt moi și cauciucate; prăjite devin crocante și sfărâmicioase',
        notes: 'Arahidele crude sunt clar inferioare celor prăjite. 12 minute la cuptor le transformă complet și costă zero.'
      },
      stats: { taste: 70, satiety: 76, convenience: 82, versatility: 74 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Densitate calorică mare — o mână e o gustare, două sunt o masă.',
      tags: ['very-high-protein', 'high-kcal', 'cheap-protein', 'budget', 'bulk-buy', 'shelf-stable', 'whole-food', 'portable', 'high-fiber'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Ciocolată neagră', 'Sos de soia', 'Chili', 'Lime', 'Orez', 'Legume la wok'],
      tips: [
        'Arahidele nu sunt nuci, sunt leguminoase — de aceea au 26 g proteină/100 g, cel mai mult din raftul de nuci.',
        'La 30 lei/kg costul proteinei e ~115 lei/kg — cea mai ieftină proteină "de gustare" din Sibiu.',
        'Cumpără-le crude și prăjește-le tu: economisești ~40% față de cele prăjite ambalate și controlezi sarea.',
        'Arahide + orez sau pâine = profil complet; arahidele au multă lizină pentru o "nucă".'
      ],
      warnings: ['ALERGEN MAJOR — alergia la arahide poate fi fatală.', 'Risc de aflatoxine dacă sunt depozitate umed. Nu cumpăra arahide cu miros de mucegai sau gust amar.'],
      storage: 'Recipient etanș, loc răcoros și USCAT (umezeala favorizează aflatoxinele).',
      shelfLife: '6–9 luni crude; 3 luni după prăjire',
      dataConfidence: 'high',
      sources: ['USDA peanuts raw', 'CIQUAL arachide']
    },

    {
      id: 'v-arahide-prajite-sarate',
      name: 'Roasted Salted Peanuts',
      nameRo: 'Arahide prăjite și sărate',
      brand: 'generic / Alesto (Lidl) / K-Classic',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft snacks / Alesto', priceRon: 6.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft snacks', priceRon: 7.49, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft snacks lângă case', priceRon: 4.5, packGrams: 100, packLabel: 'pungă 100 g', note: 'Format mic, preț pe kg mult mai mare.' }
      ],
      sibiuNote: 'Găsești arahide sărate la orice colț de stradă în Sibiu. Problema nu e disponibilitatea, e că 200 g dispar într-o seară fără să simți.',
      per100g: { kcal: 587, protein: 24, carbs: 14, sugars: 4, fat: 50, satFat: 7.5, fiber: 8, salt: 1.5 },
      micros: { ironMg: 2.3, zincMg: 3.3, potassiumMg: 650, calciumMg: 54, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = ~7 g proteină, 176 kcal, 0,45 g sare' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [
          'Deschide punga.',
          'Pune 30 g într-un bol și PUNE PUNGA DEOPARTE — altfel mănânci 200 g.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Sărat, prăjit, ușor dulceag; combinația de sare și grăsime e proiectată să nu te poți opri',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 3,
        richness: 4,
        texture: 'Crocante, uleioase, care se sfărâmă plăcut',
        notes: 'Cea mai bună gustare cu proteină per leu din România. Și cea mai ușor de mâncat în exces din toată baza de date.'
      },
      stats: { taste: 84, satiety: 62, convenience: 100, versatility: 45 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 2, lunch: 2, snack: 5, dinner: 1, beforeBed: 3 },
      timingNote: 'Gustare rapidă cu proteină; controlul porției e singura problemă reală.',
      tags: ['high-protein', 'high-kcal', 'high-sodium', 'ready-to-eat', 'grab-and-go', 'portable', 'cheap-protein', 'budget', 'shelf-stable', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Bere fără alcool', 'Ciocolată neagră', 'Fructe uscate', 'Iaurt grecesc'],
      tips: [
        'CAPCANA PORȚIEI: o pungă de 200 g are 1.174 kcal și 3 g sare. Nimeni nu mănâncă doar 30 g dintr-o pungă deschisă.',
        '24 g proteină/100 g e excelent, dar vin la pachet cu 50 g grăsime.',
        'Varianta nesărată există la Lidl (Alesto) și e la fel de gustoasă după prima săptămână de obișnuință.',
        'Cumpără pungi mici de 100 g dacă știi că nu te poți opri — plătești mai mult pe kg dar mănânci mai puțin.'
      ],
      warnings: ['ALERGEN MAJOR — arahide.', '1,5 g sare/100 g: o pungă de 200 g depășește jumătate din maximul zilnic recomandat de sare.', 'Densitate calorică foarte mare (587 kcal/100 g).'],
      storage: 'Pungă închisă cu clemă; se moaie în 2 zile dacă rămâne deschisă.',
      shelfLife: '6 luni sigilat, 2 săptămâni după deschidere (calitate)',
      dataConfidence: 'high',
      sources: ['USDA peanuts dry-roasted salted', 'Eticheta Alesto arahide sărate']
    },

    {
      id: 'v-migdale',
      name: 'Almonds',
      nameRo: 'Migdale crude',
      brand: 'Alesto (Lidl) / K-Classic / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🌰',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Alesto, fructe uscate & nuci', priceRon: 17.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk / nuci', priceRon: 82, packGrams: 1000, packLabel: 'pungă 1 kg', note: 'Cel mai bun preț pe kg din Sibiu.' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu fructe uscate', priceRon: 90, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' }
      ],
      sibiuNote: 'Migdalele sunt scumpe peste tot (~85–95 lei/kg). Selgros Șelimbăr are cel mai bun preț dacă cumperi kilogramul.',
      per100g: { kcal: 579, protein: 21, carbs: 9, sugars: 4.4, fat: 50, satFat: 3.8, fiber: 12.5, salt: 0.01 },
      micros: { calciumMg: 269, ironMg: 3.7, zincMg: 3.1, potassiumMg: 733, cholesterolMg: 0 },
      serving: { grams: 28, label: '1 mână (28 g, ~23 migdale) = ~6 g proteină, 162 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [
          'Se mănâncă direct.',
          'Opțional: prăjește 10 minute la 160 °C — crește dramatic aroma.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Dulceag, lăptos, cu o amăreală fină de la coajă',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 4,
        texture: 'Foarte crocante și dense; necesită mestecat serios',
        notes: 'Cel mai sățios snack din categorie datorită texturii dure — mesteci mult, mănânci mai puțin.'
      },
      stats: { taste: 76, satiety: 78, convenience: 96, versatility: 78 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 2, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Grăsimile mononesaturate încetinesc digestia — gustare bună înainte de culcare cu iaurt.',
      tags: ['high-protein', 'high-kcal', 'calcium-rich', 'high-fiber', 'ready-to-eat', 'portable', 'grab-and-go', 'shelf-stable', 'whole-food', 'premium'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Ciocolată neagră', 'Curmale', 'Fulgi de ovăz', 'Brânză'],
      tips: [
        '269 mg calciu/100 g — cea mai bogată nucă în calciu, relevant pentru vegani.',
        'Studiile arată că ~20% din caloriile migdalelor întregi nu se absorb (peretele celular rezistă digestiei). Migdalele măcinate sau untul de migdale nu au acest avantaj.',
        '21 g proteină/100 g e bine, dar la 579 kcal/100 g nu sunt o sursă eficientă de proteină, ci o gustare cu proteină.',
        'Prăjite 10 minute la 160 °C câștigă enorm în aromă; se răcesc și devin crocante abia după.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.', 'Densitate calorică mare — cântărește porția, nu o estima.'],
      storage: 'Recipient etanș, ferit de lumină și căldură; la frigider ține de 2 ori mai mult.',
      shelfLife: '9–12 luni',
      dataConfidence: 'high',
      sources: ['USDA almonds raw', 'Eticheta Alesto migdale']
    },

    {
      id: 'v-caju',
      name: 'Cashews',
      nameRo: 'Caju (anacard)',
      brand: 'Alesto (Lidl) / K-Classic / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Alesto', priceRon: 19.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk', priceRon: 88, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu fructe uscate', priceRon: 95, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' }
      ],
      sibiuNote: 'Caju e cel mai scump raport preț/proteină din raftul de nuci: 18 g proteină la ~90 lei/kg. Îl cumperi pentru cremozitate, nu pentru macro.',
      per100g: { kcal: 553, protein: 18, carbs: 27, sugars: 6, fat: 44, satFat: 8, fiber: 3.3, salt: 0.03 },
      micros: { ironMg: 6.7, zincMg: 5.8, potassiumMg: 660, calciumMg: 37, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = ~5,4 g proteină, 166 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [
          'Se mănâncă direct.',
          'Pentru sos: înmoaie 2 ore în apă fierbinte, apoi blender cu apă, lămâie și sare — iese cremă tip smântână.'
        ],
        yieldNote: '100 g caju înmuiate + 120 ml apă → ~220 g cremă vegetală.'
      },
      taste: {
        profile: 'Dulce, untos, foarte blând — cea mai puțin agresivă nucă',
        intensity: 2,
        sweetness: 4,
        saltiness: 0,
        umami: 1,
        richness: 5,
        texture: 'Moale și cremoasă, se topește în gură; cea mai puțin crocantă nucă',
        notes: 'Cel mai bun ingredient pentru sosuri și creme vegane. Ca gustare e periculos de ușor de mâncat în cantitate.'
      },
      stats: { taste: 82, satiety: 64, convenience: 96, versatility: 80 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 2, lunch: 2, snack: 5, dinner: 2, beforeBed: 3 },
      timingNote: 'Cel mai bogat în carbohidrați dintre nuci (27 g/100 g) — mai puțin potrivit pentru keto.',
      tags: ['high-protein', 'high-kcal', 'ready-to-eat', 'portable', 'grab-and-go', 'shelf-stable', 'premium', 'iron-rich'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Curry', 'Lapte de cocos', 'Ciocolată', 'Drojdie inactivă', 'Lămâie', 'Orez'],
      tips: [
        'Caju înmuiat + drojdie inactivă + lămâie = cel mai bun "sos de brânză" vegan, cu 8 g proteină/100 g.',
        'Doar 3,3 g fibră/100 g — cea mai săracă în fibră dintre nuci, deci și cea mai puțin sățioasă.',
        '5,8 mg zinc/100 g — cea mai bună sursă vegetală de zinc din listă, relevant pentru vegani.',
        'Nu există caju cu adevărat crud în comerț: coaja conține urushiol (ca iedera otrăvitoare) și se tratează termic obligatoriu.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.', 'Cea mai densă în carbohidrați dintre nuci.'],
      storage: 'Recipient etanș, la răcoare.',
      shelfLife: '6–9 luni',
      dataConfidence: 'high',
      sources: ['USDA cashew nuts raw', 'Eticheta Alesto caju']
    },

    {
      id: 'v-nuci',
      name: 'Walnuts',
      nameRo: 'Nuci (miez de nucă)',
      brand: 'local / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🌰',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu miez de nucă, toamna direct de la producători din Mărginimea Sibiului', priceRon: 80, packGrams: 1000, packLabel: 'vrac 1 kg miez', note: 'Toamna (oct–nov) prețul scade spre 65–70 lei/kg pentru nuca nouă.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft fructe uscate', priceRon: 21.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft Alesto', priceRon: 19.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' }
      ],
      sibiuNote: 'Nuca românească din Piața Cibin, cumpărată toamna în coajă și spartă acasă, e cea mai proaspătă și cea mai ieftină variantă. Miezul din pungă e adesea deja rânced.',
      per100g: { kcal: 654, protein: 15, carbs: 7, sugars: 2.6, fat: 65, satFat: 6.1, fiber: 6.7, salt: 0.01 },
      micros: { omega3Mg: 9080, ironMg: 2.9, zincMg: 3.1, potassiumMg: 441, calciumMg: 98, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g, ~7 jumătăți) = 4,5 g proteină, 196 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [
          'Se mănâncă direct.',
          'Prăjite 8 minute la 160 °C pierd o parte din amăreală.'
        ],
        yieldNote: '1 kg nuci în coajă → ~400–450 g miez.'
      },
      taste: {
        profile: 'Bogat, ușor amărui de la pielița miezului, cu final uleios',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 5,
        texture: 'Fragedă și uleioasă, se sfărâmă ușor',
        notes: 'Nuca rânced are gust de vopsea și e frecventă în comerț. Miezul proaspăt e dulce, nu doar amar.'
      },
      stats: { taste: 72, satiety: 70, convenience: 92, versatility: 76 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Cea mai bogată sursă vegetală de omega-3 ALA — o mână pe zi acoperă necesarul.',
      tags: ['high-protein', 'omega3', 'high-kcal', 'ready-to-eat', 'portable', 'shelf-stable', 'whole-food', 'local-sibiu', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Miere', 'Brânză', 'Mere', 'Iaurt', 'Salată verde', 'Paste'],
      tips: [
        '9 g omega-3 ALA la 100 g — de departe cea mai bogată sursă vegetală. 30 g/zi acoperă necesarul complet.',
        'Doar 15 g proteină/100 g la 654 kcal — cea mai slabă densitate proteică din categoria nuci. O mănânci pentru omega-3, nu pentru proteină.',
        'Miroase nuca înainte de a o cumpăra: dacă are miros de ulei vechi sau vopsea, e râncedă. Foarte frecvent la miezul din vrac.',
        'Păstrează miezul la congelator — uleiul foarte nesaturat râncezește în săptămâni la temperatura camerei.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.', 'Râncezește rapid — verifică mirosul la fiecare cumpărare.'],
      storage: 'Congelator sau frigider, în recipient etanș. La temperatura camerei: maxim 1 lună.',
      shelfLife: '3 luni la temperatura camerei, 12 luni la congelator',
      dataConfidence: 'high',
      sources: ['USDA walnuts English raw', 'CIQUAL noix']
    },

    {
      id: 'v-alune-padure',
      name: 'Hazelnuts',
      nameRo: 'Alune de pădure',
      brand: 'Alesto (Lidl) / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🌰',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Alesto', priceRon: 21.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Tarabe cu fructe uscate; toamna și alune românești', priceRon: 75, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft fructe uscate', priceRon: 23.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' }
      ],
      sibiuNote: 'Alunele de pădure cresc și în zona Sibiului; toamna apar în Piața Cibin de la culegători locali, mult mai aromate decât cele de import.',
      per100g: { kcal: 628, protein: 15, carbs: 7, sugars: 4.3, fat: 61, satFat: 4.5, fiber: 9.7, salt: 0.01 },
      micros: { ironMg: 4.7, zincMg: 2.5, potassiumMg: 680, calciumMg: 114, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = 4,5 g proteină, 188 kcal' },
      effort: 1,
      timeMin: 12,
      activeTimeMin: 4,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă', 'prosop de bucătărie'],
        steps: [
          'Coace 10 minute la 170 °C.',
          'Pune-le calde într-un prosop și freacă-le energic — pielițele amare se desprind singure.',
          'Lasă să se răcească complet.'
        ],
        yieldNote: 'Pierd ~10% din greutate la prăjire și decojire.'
      },
      taste: {
        profile: 'Dulce, intens aromat, cu note de caramel după prăjire',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 4,
        texture: 'Foarte crocante, dense, cu pieliță ușor amară dacă nu sunt prăjite',
        notes: 'Cea mai aromată nucă din raft după prăjire. Crude sunt banale; prăjite sunt excepționale.'
      },
      stats: { taste: 80, satiety: 72, convenience: 90, versatility: 68 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 2, lunch: 2, snack: 5, dinner: 1, beforeBed: 3 },
      timingNote: 'Gustare densă caloric — 30 g e porția, nu 100 g.',
      tags: ['high-protein', 'high-kcal', 'ready-to-eat', 'portable', 'shelf-stable', 'whole-food', 'premium', 'high-fiber', 'iron-rich'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Ciocolată neagră', 'Cafea', 'Iaurt', 'Pere', 'Miere'],
      tips: [
        '15 g proteină/100 g la 628 kcal — ca și nuca, e o gustare cu grăsimi bune, nu o sursă de proteină.',
        'Prăjirea și frecarea pielițelor schimbă complet gustul; 12 minute de efort pentru un rezultat de altă categorie.',
        'Cea mai bogată în vitamina E dintre nuci — 15 mg/100 g, peste necesarul zilnic într-o mână.',
        'Măcinate cu cacao și curmale fac o cremă tip Nutella cu 8 g proteină/100 g și fără zahăr adăugat.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.'],
      storage: 'Recipient etanș, la răcoare.',
      shelfLife: '9–12 luni în coajă, 6 luni decojite',
      dataConfidence: 'high',
      sources: ['USDA hazelnuts raw', 'CIQUAL noisette']
    },

    {
      id: 'v-fistic',
      name: 'Pistachios',
      nameRo: 'Fistic',
      brand: 'Alesto (Lidl) / K-Classic',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🟢',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Alesto, fistic în coajă sărat', priceRon: 24.99, packGrams: 200, packLabel: 'pungă 200 g în coajă', note: 'În coajă: ~50% e coajă necomestibilă.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft snacks & fructe uscate', priceRon: 26.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Culoar bulk', priceRon: 115, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' }
      ],
      sibiuNote: 'Fisticul e cea mai proteică nucă adevărată (20 g/100 g miez) dar și cea mai scumpă. Atenție: prețul de pe raft e pentru produsul CU coajă.',
      per100g: { kcal: 560, protein: 20, carbs: 18, sugars: 7.7, fat: 45, satFat: 5.5, fiber: 10.3, salt: 0.01 },
      micros: { ironMg: 3.9, zincMg: 2.2, potassiumMg: 1025, calciumMg: 105, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână miez (30 g) = 6 g proteină, 168 kcal' },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 5,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [
          'Desfă cojile — efortul e parte din controlul porției.',
          'Se mănâncă direct.'
        ],
        yieldNote: '100 g fistic în coajă → ~50 g miez comestibil.'
      },
      taste: {
        profile: 'Dulceag, ușor rășinos, cu o aromă florală distinctă',
        intensity: 3,
        sweetness: 3,
        saltiness: 3,
        umami: 2,
        richness: 4,
        texture: 'Crocant dar mai moale decât migdala; miez fraged',
        notes: 'Cea mai bună nucă ca gust din întreaga listă. Faptul că trebuie desfăcută încetinește consumul, ceea ce e un avantaj real.'
      },
      stats: { taste: 88, satiety: 74, convenience: 70, versatility: 60 },
      timing: { breakfast: 3, preWorkout: 3, postWorkout: 3, lunch: 2, snack: 5, dinner: 2, beforeBed: 3 },
      timingNote: 'Cel mai bun raport proteină/calorie dintre nuci și cel mai bogat în potasiu.',
      tags: ['high-protein', 'high-kcal', 'high-fiber', 'ready-to-eat', 'portable', 'shelf-stable', 'premium', 'imported'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Iaurt grecesc', 'Miere', 'Ciocolată albă', 'Caise uscate', 'Salate'],
      tips: [
        '20 g proteină/100 g miez: cea mai proteică nucă adevărată (arahidele sunt leguminoase).',
        'Cumpărat în coajă, plătești dublu pe gram de miez — dar mănânci automat mai puțin, ceea ce poate fi util.',
        '1025 mg potasiu/100 g — mai mult decât banana la aceeași greutate, de 3 ori.',
        'Fisticul sărat are ~0,6 g sare/100 g. Cel nesărat e mai scump și mai greu de găsit în Sibiu.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.', 'Fisticul mucegăit poate conține aflatoxine — nu consuma bucăți cu pete închise sau gust amar-chimic.'],
      storage: 'Recipient etanș, la răcoare.',
      shelfLife: '6–9 luni',
      dataConfidence: 'high',
      sources: ['USDA pistachio nuts raw', 'Eticheta Alesto fistic']
    },

    {
      id: 'v-seminte-dovleac',
      name: 'Pumpkin Seeds',
      nameRo: 'Semințe de dovleac decojite',
      brand: 'generic / vrac / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🎃',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu semințe; toamna semințe locale din Mărginime', priceRon: 55, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cel mai bun preț din Sibiu.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft semințe & fructe uscate', priceRon: 12.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft Alesto / semințe', priceRon: 11.99, packGrams: 200, packLabel: 'pungă 200 g', note: '' }
      ],
      sibiuNote: 'Semințele de dovleac din Piața Cibin, toamna, sunt locale și mult mai proaspete. 55 lei/kg pentru 30 g proteină/100 g e un raport excelent.',
      per100g: { kcal: 559, protein: 30, carbs: 11, sugars: 1.4, fat: 49, satFat: 8.7, fiber: 6, salt: 0.02 },
      micros: { ironMg: 8.8, zincMg: 7.8, potassiumMg: 809, calciumMg: 46, omega3Mg: 180, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = 9 g proteină, 168 kcal' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 3,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie uscată'],
        steps: [
          'Pune semințele în tigaie uscată, la foc mediu.',
          'Prăjește 3–5 minute, amestecând — vor începe să pocnească și să se umfle.',
          'Scoate-le imediat din tigaie (continuă să se ardă în tigaia fierbinte).',
          'Sare, boia sau sos de soia cât sunt calde.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Nucos, verde-vegetal, cu o dulceață discretă; prăjite capătă note de popcorn',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 3,
        texture: 'Plate și mestecabile crude; crocante și fragede prăjite',
        notes: 'Cel mai bun raport proteină/preț dintre toate semințele și nucile. Subestimate masiv în România.'
      },
      stats: { taste: 74, satiety: 76, convenience: 88, versatility: 82 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 5, dinner: 3, beforeBed: 4 },
      timingNote: 'Bogate în magneziu și triptofan — o mână seara ajută somnul.',
      tags: ['very-high-protein', 'high-kcal', 'iron-rich', 'ready-to-eat', 'portable', 'shelf-stable', 'whole-food', 'cheap-protein', 'local-sibiu'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Salate', 'Supă-cremă', 'Iaurt', 'Pâine', 'Pesto', 'Ovăz'],
      tips: [
        '30 g proteină/100 g — cel mai proteic aliment din secțiunea nuci & semințe.',
        '7,8 mg zinc/100 g: cea mai bună sursă vegetală de zinc, esențială în dietele fără carne.',
        '8,8 mg fier/100 g — combină cu ceva bogat în vitamina C ca să absorbi fierul non-hem.',
        'Prăjite în tigaie uscată 4 minute devin de 3 ori mai bune și costă zero în plus.'
      ],
      warnings: ['Densitate calorică mare (559 kcal/100 g).'],
      storage: 'Recipient etanș, la răcoare; râncezesc în ~4 luni la căldură.',
      shelfLife: '6–9 luni',
      dataConfidence: 'high',
      sources: ['USDA pumpkin seeds hulled raw', 'CIQUAL graines de courge']
    },

    {
      id: 'v-seminte-floarea-soarelui',
      name: 'Sunflower Seeds',
      nameRo: 'Semințe de floarea-soarelui decojite',
      brand: 'generic / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🌻',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu semințe, vrac', priceRon: 20, packGrams: 1000, packLabel: 'vrac 1 kg', note: 'Cea mai ieftină sursă de proteină din categoria semințe.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft semințe / panificație', priceRon: 6.99, packGrams: 250, packLabel: 'pungă 250 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft semințe', priceRon: 6.49, packGrams: 250, packLabel: 'pungă 250 g', note: '' }
      ],
      sibiuNote: 'La 20 lei/kg în Piața Cibin, semințele de floarea-soarelui decojite sunt de 3 ori mai ieftine decât cele de dovleac la proteină aproape egală (21 vs 30 g).',
      per100g: { kcal: 584, protein: 21, carbs: 12, sugars: 2.6, fat: 51, satFat: 4.5, fiber: 8.6, salt: 0.02 },
      micros: { ironMg: 5.2, zincMg: 5, potassiumMg: 645, calciumMg: 78, cholesterolMg: 0 },
      serving: { grams: 30, label: '1 mână (30 g) = 6,3 g proteină, 175 kcal' },
      effort: 1,
      timeMin: 7,
      activeTimeMin: 3,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie uscată'],
        steps: [
          'Prăjește în tigaie uscată 3–4 minute, la foc mediu, amestecând constant.',
          'Se ard foarte repede — nu le lăsa nesupravegheate.',
          'Scoate-le din tigaie imediat.'
        ],
        yieldNote: '100 g semințe în coajă → ~45 g miez decojit.'
      },
      taste: {
        profile: 'Nucos, ușor uleios, cu o urmă de amăreală',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 3,
        texture: 'Mici și mestecabile; prăjite devin crocante',
        notes: 'Cea mai banală sămânță ca gust, dar imbatabilă ca preț. Adaugă textură oriunde fără să domine.'
      },
      stats: { taste: 62, satiety: 72, convenience: 90, versatility: 84 },
      timing: { breakfast: 4, preWorkout: 3, postWorkout: 2, lunch: 3, snack: 5, dinner: 3, beforeBed: 3 },
      timingNote: 'Gustare ieftină și densă caloric — porție de 30 g, nu mai mult.',
      tags: ['high-protein', 'high-kcal', 'cheap-protein', 'budget', 'bulk-buy', 'ready-to-eat', 'shelf-stable', 'whole-food', 'iron-rich', 'romanian-classic'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Salate', 'Pâine de casă', 'Iaurt', 'Ovăz', 'Supe-cremă'],
      tips: [
        '21 g proteină/100 g la 20 lei/kg = ~95 lei/kg proteină. Cea mai ieftină proteină din categoria nuci & semințe.',
        'Măcinate cu apă, lămâie și usturoi fac o pastă tartinabilă tip humus, la o fracțiune din prețul tahiniului.',
        'Cumpără decojite: coaja înseamnă 55% greutate necomestibilă și ore de decojit.',
        'Se moaie repede după deschidere; ține-le în borcan cu capac, nu în pungă.'
      ],
      warnings: ['Densitate calorică mare.'],
      storage: 'Borcan etanș, la răcoare; râncezesc în 3–4 luni la căldură.',
      shelfLife: '6 luni',
      dataConfidence: 'high',
      sources: ['USDA sunflower seed kernels dried', 'CIQUAL graines de tournesol']
    },

    {
      id: 'v-seminte-in',
      name: 'Flaxseed',
      nameRo: 'Semințe de in',
      brand: 'Sano Vita / Solaris / vrac',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🟤',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft Sano Vita / semințe', priceRon: 9.99, packGrams: 500, packLabel: 'pungă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabele cu semințe', priceRon: 16, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Raft sănătate', priceRon: 8.99, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Ieftine peste tot în Sibiu. Cumpără-le ÎNTREGI și macină-le acasă în râșnița de cafea — cele măcinate din comerț sunt deja oxidate.',
      per100g: { kcal: 534, protein: 18, carbs: 1.6, sugars: 1.6, fat: 42, satFat: 3.7, fiber: 27, salt: 0.03 },
      micros: { omega3Mg: 22800, ironMg: 5.7, zincMg: 4.3, potassiumMg: 813, calciumMg: 255, cholesterolMg: 0 },
      serving: { grams: 15, label: '1 lingură măcinată (15 g) = 2,7 g proteină, 3,4 g omega-3' },
      effort: 1,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['râșniță de cafea sau blender'],
        steps: [
          'Macină semințele imediat înainte de consum — întregi trec nedigerate prin intestin.',
          'Amestecă în iaurt, terci, smoothie sau aluat.',
          'Pentru ou vegan: 1 lingură in măcinat + 3 linguri apă, așteaptă 10 minute până se gelifică.'
        ],
        yieldNote: '1 lingură in măcinat + 3 linguri apă = înlocuitorul unui ou în copt.'
      },
      taste: {
        profile: 'Nucos, ușor amărui, cu o notă uleioasă care devine neplăcută dacă e râncedă',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 1,
        richness: 3,
        texture: 'Întregi sunt tari și lucioase; măcinate sunt o pudră grasă care se gelifică în lichid',
        notes: 'Nu are gust suficient de puternic ca să deranjeze în ceva. Utilitatea e la omega-3 și fibră, nu la gust.'
      },
      stats: { taste: 48, satiety: 84, convenience: 74, versatility: 76 },
      timing: { breakfast: 5, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 3, dinner: 3, beforeBed: 3 },
      timingNote: 'Cel mai bun adaos zilnic pentru omega-3 și tranzit intestinal.',
      tags: ['omega3', 'high-fiber', 'high-protein', 'cheap-protein', 'budget', 'shelf-stable', 'whole-food', 'calcium-rich', 'breakfast'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Iaurt', 'Ovăz', 'Smoothie', 'Pâine de casă', 'Salate'],
      tips: [
        '22,8 g omega-3 ALA la 100 g — de 2,5 ori mai mult decât nucile, cea mai concentrată sursă vegetală.',
        'MACINĂ-LE. Semințele întregi trec intacte prin sistemul digestiv — nu absorbi practic nimic.',
        '27 g fibră/100 g, cea mai mare valoare din întreaga bază de date. Crește doza gradual.',
        'Măcinate se oxidează în câteva zile: macină cantitatea pentru o săptămână și ține-o la frigider.'
      ],
      warnings: ['Consumul mare (peste 5 linguri/zi) de in crud poate elibera cantități de cianură din linamarină — realist nu e o problemă la 1–2 linguri.', 'Fibra mare necesită hidratare.'],
      storage: 'Întregi: borcan la răcoare, 12 luni. Măcinate: frigider, maxim 2 săptămâni.',
      shelfLife: '12 luni întregi; 2 săptămâni măcinate',
      dataConfidence: 'high',
      sources: ['USDA flaxseed', 'CIQUAL graines de lin']
    },

    {
      id: 'v-seminte-chia',
      name: 'Chia Seeds',
      nameRo: 'Semințe de chia',
      brand: 'Sano Vita / Vemondo / bio',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '⚫',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Vemondo / semințe', priceRon: 12.99, packGrams: 300, packLabel: 'pungă 300 g', note: 'Cel mai bun preț din Sibiu.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft bio / Sano Vita', priceRon: 15.99, packGrams: 300, packLabel: 'pungă 300 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio', priceRon: 18.9, packGrams: 300, packLabel: 'pungă 300 g', note: '' }
      ],
      sibiuNote: 'Chia e printre cele mai supraevaluate alimente de pe raft. E bună, dar inul are mai mult omega-3 la un sfert din preț.',
      per100g: { kcal: 486, protein: 17, carbs: 8, sugars: 0, fat: 31, satFat: 3.3, fiber: 34, salt: 0.04 },
      micros: { omega3Mg: 17800, calciumMg: 631, ironMg: 7.7, zincMg: 4.6, potassiumMg: 407, cholesterolMg: 0 },
      serving: { grams: 20, label: '2 linguri (20 g) = 3,4 g proteină, 6,8 g fibră' },
      effort: 1,
      timeMin: 240,
      activeTimeMin: 3,
      cooking: {
        method: 'soak',
        difficulty: 'trivial',
        equipment: ['borcan cu capac'],
        steps: [
          'Amestecă 20 g chia cu 150 ml lapte vegetal sau iaurt.',
          'Amestecă din nou după 5 minute (altfel se formează cocoloașe).',
          'Lasă 4 ore sau peste noapte la frigider.',
          'Adaugă fructe și unt de arahide înainte de servire.'
        ],
        yieldNote: '20 g chia + 150 ml lichid → ~170 g pudding.'
      },
      taste: {
        profile: 'Practic fără gust; ușor nucos dacă e prăjită',
        intensity: 1,
        sweetness: 0,
        saltiness: 0,
        umami: 0,
        richness: 1,
        texture: 'Uscate sunt nisipoase; hidratate devin gelatinoase, ca icrele de tapioca',
        notes: 'Textura gelatinoasă îi împarte pe oameni în două tabere. Nu are gust, deci tot ce contează e textura și ce pui alături.'
      },
      stats: { taste: 46, satiety: 82, convenience: 62, versatility: 70 },
      timing: { breakfast: 5, preWorkout: 2, postWorkout: 2, lunch: 3, snack: 4, dinner: 2, beforeBed: 4 },
      timingNote: 'Puddingul de chia preparat seara e un mic dejun gata dimineața.',
      tags: ['omega3', 'high-fiber', 'high-protein', 'calcium-rich', 'iron-rich', 'shelf-stable', 'whole-food', 'premium', 'breakfast'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Lapte de soia', 'Fructe de pădure', 'Unt de arahide', 'Cacao', 'Banană', 'Miere'],
      tips: [
        '631 mg calciu/100 g — de 5 ori mai mult decât laptele la aceeași greutate. Cea mai bună sursă vegetală de calciu din listă.',
        '34 g fibră/100 g — cel mai fibros aliment din bază după in.',
        'Realitate incomodă: semințele de in au 22,8 g omega-3 vs 17,8 la chia și costă 16 lei/kg vs 43 lei/kg.',
        'Amestecă de două ori (la 0 și la 5 minute) ca să nu obții cocoloașe uscate în mijlocul puddingului.'
      ],
      warnings: ['Consumate uscate cu lichid insuficient se pot umfla în esofag — hidratează-le mereu înainte.'],
      storage: 'Borcan etanș; foarte stabile datorită antioxidanților naturali.',
      shelfLife: '18–24 luni',
      dataConfidence: 'high',
      sources: ['USDA chia seeds dried', 'Eticheta Vemondo chia']
    },

    {
      id: 'v-canepa-decorticata',
      name: 'Hulled Hemp Seeds',
      nameRo: 'Semințe de cânepă decorticate',
      brand: 'Canah / Sano Vita / bio',
      category: 'plant-protein',
      subcategory: 'Nuci & semințe',
      emoji: '🌿',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio, produse Canah (brand românesc)', priceRon: 29.99, packGrams: 250, packLabel: 'pungă 250 g', note: 'Canah e producător român din Oradea.' },
        { name: 'Online RO', availability: 'always', aisle: 'canah.ro, magazine bio', priceRon: 95, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 32.9, packGrams: 250, packLabel: 'pungă 250 g', note: '' }
      ],
      sibiuNote: 'Cânepa decorticată e produsă în România (Canah, Oradea) și e una dintre puținele surse vegetale cu proteină completă. Scumpă, dar locală.',
      per100g: { kcal: 553, protein: 32, carbs: 5, sugars: 1.5, fat: 48, satFat: 4.6, fiber: 4, salt: 0.01 },
      micros: { omega3Mg: 9300, ironMg: 8, zincMg: 9.9, potassiumMg: 1200, calciumMg: 70, cholesterolMg: 0 },
      serving: { grams: 30, label: '3 linguri (30 g) = 9,6 g proteină' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Presară direct peste salate, iaurt, terci sau supe.',
          'Nu le găti — căldura distruge acizii grași delicați.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Nucos, cremos, cu note de floarea-soarelui și pin',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 4,
        texture: 'Moi și cremoase, se topesc în gură — fără crocanță',
        notes: 'Cea mai plăcută sămânță de mâncat simplă. Se strecoară peste orice fără să deranjeze pe nimeni.'
      },
      stats: { taste: 72, satiety: 74, convenience: 96, versatility: 86 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 4, lunch: 4, snack: 4, dinner: 4, beforeBed: 3 },
      timingNote: 'Proteină completă crudă — utilă la orice masă, mai ales în dietele vegane.',
      tags: ['very-high-protein', 'complete-protein', 'omega3', 'high-kcal', 'iron-rich', 'ready-to-eat', 'whole-food', 'premium', 'no-cook'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Salate', 'Iaurt', 'Smoothie', 'Avocado', 'Pâine', 'Supe-cremă'],
      tips: [
        '32 g proteină/100 g și profil COMPLET de aminoacizi — una dintre cele 5 surse vegetale complete din listă.',
        '9,9 mg zinc/100 g — cea mai bogată sursă vegetală de zinc din întreaga bază de date.',
        'Raport omega-6:omega-3 de ~3:1, considerat aproape ideal.',
        'Nu le prăji și nu le coace: uleiurile foarte nesaturate se degradează la peste 160 °C.'
      ],
      warnings: ['Nu conțin THC în cantități relevante — sunt semințe alimentare, nu psihoactive.', 'Râncezesc rapid.'],
      storage: 'Frigider după deschidere, obligatoriu.',
      shelfLife: '12 luni sigilate; 3 luni la frigider după deschidere',
      dataConfidence: 'high',
      sources: ['USDA hemp seeds hulled', 'canah.ro eticheta produs']
    },

    {
      id: 'v-unt-arahide-sanovita',
      name: 'Peanut Butter, Creamy',
      nameRo: 'Unt de arahide cremos',
      brand: 'Sano Vita',
      category: 'plant-protein',
      subcategory: 'Unturi & paste tartinabile',
      emoji: '🥜',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft Sano Vita / paste tartinabile', priceRon: 21.99, packGrams: 350, packLabel: 'borcan 350 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Raft dulcețuri & paste tartinabile', priceRon: 22.99, packGrams: 350, packLabel: 'borcan 350 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft mic dejun', priceRon: 23.9, packGrams: 350, packLabel: 'borcan 350 g', note: '' }
      ],
      sibiuNote: 'Sano Vita e brand românesc, disponibil în aproape orice magazin din Sibiu. Verifică pe etichetă dacă are zahăr și ulei de palmier adăugate.',
      per100g: { kcal: 585, protein: 25, carbs: 12, sugars: 6, fat: 48, satFat: 8, fiber: 6, salt: 0.6 },
      micros: { ironMg: 2, zincMg: 2.8, potassiumMg: 650, calciumMg: 50, cholesterolMg: 0 },
      serving: { grams: 20, label: '1 lingură (20 g) = 5 g proteină, 117 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Amestecă în borcan dacă s-a separat uleiul.',
          'Întinde pe pâine sau amestecă în terci / shake.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Dulce-sărat, intens de arahide, cu textură untoasă',
        intensity: 4,
        sweetness: 3,
        saltiness: 2,
        umami: 3,
        richness: 5,
        texture: 'Cremoasă și lipicioasă, se lipește de cerul gurii',
        notes: 'Unul dintre puținele alimente sănătoase pe care oamenii le mănâncă cu lingura direct din borcan. Aceasta e și problema.'
      },
      stats: { taste: 88, satiety: 72, convenience: 98, versatility: 82 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'O lingură în terciul de ovăz adaugă 5 g proteină și sațietate reală.',
      tags: ['very-high-protein', 'high-kcal', 'ready-to-eat', 'shelf-stable', 'breakfast', 'bulking', 'processed', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine integrală', 'Banană', 'Ovăz', 'Iaurt', 'Ciocolată neagră', 'Mere'],
      tips: [
        'CITEȘTE ETICHETA: varianta "creamy" are adesea zahăr și ulei vegetal. Varianta 100% arahide are 27 g proteină și zero zahăr.',
        '585 kcal/100 g — o lingură plină (20 g) e 117 kcal. Doi oameni din trei subestimează cât iau.',
        'Cântărește-l, nu-l estima. Diferența dintre "o lingură" și "o lingură plină" e 60 de kcal.',
        'Amestecat cu sos de soia, lime și usturoi devine sos satay — 5 minute, zero gătit.'
      ],
      warnings: ['ALERGEN MAJOR: arahide.', 'Variantele cu zahăr și ulei de palmier au grăsime saturată mult mai mare.'],
      storage: 'Cămară; la frigider se întărește și e greu de întins.',
      shelfLife: '12 luni sigilat; 3 luni după deschidere',
      dataConfidence: 'high',
      sources: ['Eticheta Sano Vita unt de arahide (570–585 kcal, 25 g proteină)', 'sanovita.ro']
    },

    {
      id: 'v-unt-arahide-100',
      name: 'Peanut Butter, 100% Peanuts',
      nameRo: 'Unt de arahide 100% arahide (fără zahăr)',
      brand: 'Vemondo (Lidl) / Ostrovit',
      category: 'plant-protein',
      subcategory: 'Unturi & paste tartinabile',
      emoji: '🫙',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft Vemondo / mic dejun', priceRon: 21.99, packGrams: 500, packLabel: 'borcan 500 g', note: 'Cel mai bun raport preț/proteină din categorie: 44 lei/kg.' },
        { name: 'Online RO', availability: 'always', aisle: 'Ostrovit prin eMAG / magazine fitness', priceRon: 32, packGrams: 1000, packLabel: 'borcan 1 kg', note: 'Ostrovit e cel mai ieftin pe kg dacă comanzi.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio / sport', priceRon: 26.99, packGrams: 500, packLabel: 'borcan 500 g', note: '' }
      ],
      sibiuNote: 'Untul de arahide 100% de la Lidl (Vemondo) e cel mai bun raport calitate/preț din Sibiu: un singur ingredient, 44 lei/kg.',
      per100g: { kcal: 600, protein: 27, carbs: 10, sugars: 5, fat: 50, satFat: 8, fiber: 7, salt: 0.03 },
      micros: { ironMg: 2.2, zincMg: 3, potassiumMg: 700, calciumMg: 50, cholesterolMg: 0 },
      serving: { grams: 20, label: '1 lingură (20 g) = 5,4 g proteină, 120 kcal' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['cuțit sau lingură'],
        steps: [
          'Amestecă bine — uleiul se separă mereu la produsele 100% arahide, e semn bun.',
          'Ține borcanul cu capul în jos câteva ore înainte de prima deschidere: uleiul se redistribuie singur.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pur de arahide, fără dulceață; mai intens și mai puțin plăcut la prima gustare decât variantele cu zahăr',
        intensity: 4,
        sweetness: 1,
        saltiness: 0,
        umami: 3,
        richness: 5,
        texture: 'Mai lichidă și mai granulată decât untul cu emulsifianți; se separă',
        notes: 'Prima săptămână pare fad față de varianta cu zahăr. După două săptămâni, cel cu zahăr pare artificial de dulce.'
      },
      stats: { taste: 78, satiety: 76, convenience: 92, versatility: 84 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 3, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Digestie lentă din cauza grăsimii — sațietate lungă, dar nu e o gustare pre-antrenament bună.',
      tags: ['very-high-protein', 'high-kcal', 'whole-food', 'ready-to-eat', 'shelf-stable', 'budget', 'bulking', 'breakfast'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Pâine integrală', 'Banană', 'Ovăz', 'Curmale', 'Sos de soia', 'Morcov'],
      tips: [
        'Un singur ingredient: arahide. Fără zahăr, fără ulei de palmier, fără sare — 27 g proteină/100 g.',
        'Separarea uleiului e semnul că NU conține emulsifianți. Untul care nu se separă e cel procesat.',
        'La 44 lei/kg cu 27 g proteină, costul proteinei e ~163 lei/kg — decent pentru un aliment cu grăsime.',
        'Nu îl ține la frigider: se întărește ca piatra. Cămara e locul potrivit.'
      ],
      warnings: ['ALERGEN MAJOR: arahide.', '600 kcal/100 g — un borcan de 500 g are 3.000 kcal.'],
      storage: 'Cămară, capac bine închis.',
      shelfLife: '12 luni sigilat; 3–4 luni după deschidere',
      dataConfidence: 'high',
      sources: ['Eticheta Vemondo 100% peanut butter', 'ostrovit.com']
    },

    {
      id: 'v-unt-migdale',
      name: 'Almond Butter',
      nameRo: 'Unt de migdale',
      brand: 'Ostrovit / bio import',
      category: 'plant-protein',
      subcategory: 'Unturi & paste tartinabile',
      emoji: '🫙',
      unit: 'g',
      stores: [
        { name: 'Online RO', availability: 'always', aisle: 'eMAG, magazine fitness și bio', priceRon: 45, packGrams: 500, packLabel: 'borcan 500 g Ostrovit', note: 'Cel mai bun preț pe kg.' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio', priceRon: 34.99, packGrams: 200, packLabel: 'borcan 200 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio / mic dejun', priceRon: 39.9, packGrams: 200, packLabel: 'borcan 200 g', note: '' }
      ],
      sibiuNote: 'Rar în magazinele fizice din Sibiu și de 2 ori mai scump decât untul de arahide, cu mai puțină proteină. Cumpără-l doar dacă ai alergie la arahide.',
      per100g: { kcal: 614, protein: 21, carbs: 10, sugars: 4, fat: 55, satFat: 4.2, fiber: 10, salt: 0.02 },
      micros: { calciumMg: 270, ironMg: 3.5, zincMg: 3.1, potassiumMg: 750, cholesterolMg: 0 },
      serving: { grams: 20, label: '1 lingură (20 g) = 4,2 g proteină, 123 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Amestecă pentru a reîncorpora uleiul.',
          'Întinde sau amestecă în terci și smoothie.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Delicat, dulceag, mai puțin intens decât untul de arahide',
        intensity: 3,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 5,
        texture: 'Mai granulată decât untul de arahide; mai puțin lipicioasă',
        notes: 'Mai elegant, mai scump, mai puțin satisfăcător. Untul de arahide câștigă la aproape orice criteriu în afară de calciu.'
      },
      stats: { taste: 74, satiety: 72, convenience: 92, versatility: 76 },
      timing: { breakfast: 5, preWorkout: 3, postWorkout: 2, lunch: 3, snack: 5, dinner: 2, beforeBed: 4 },
      timingNote: 'Alternativă pentru cei alergici la arahide; profil nutrițional bun dar preț mare.',
      tags: ['high-protein', 'high-kcal', 'calcium-rich', 'high-fiber', 'ready-to-eat', 'shelf-stable', 'premium', 'whole-food'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Mere', 'Ovăz', 'Cacao', 'Iaurt', 'Pâine de secară', 'Curmale'],
      tips: [
        '21 g proteină/100 g față de 27 la untul de arahide, la un preț dublu. Alege-l doar dacă ai motiv.',
        '270 mg calciu/100 g — util pentru vegani, cea mai bogată pastă tartinabilă în calciu.',
        'Varianta cu migdale nedecojite are mai multă fibră și antioxidanți decât cea albă.',
        'Se poate face acasă: 300 g migdale prăjite + blender puternic + 12 minute răbdare.'
      ],
      warnings: ['Alergen: fructe cu coajă lemnoasă.', 'Foarte dens caloric.'],
      storage: 'Cămară, capac închis.',
      shelfLife: '12 luni sigilat; 3 luni după deschidere',
      dataConfidence: 'medium',
      sources: ['USDA almond butter', 'ostrovit.com eticheta produs']
    },

    {
      id: 'v-tahini',
      name: 'Tahini (Sesame Paste)',
      nameRo: 'Tahini (pastă de susan)',
      brand: 'generic import / Sano Vita',
      category: 'plant-protein',
      subcategory: 'Unturi & paste tartinabile',
      emoji: '🫙',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft internațional / bio, lângă humus', priceRon: 21.99, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft bio / oriental', priceRon: 24.9, packGrams: 300, packLabel: 'borcan 300 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Raft oriental', priceRon: 42, packGrams: 800, packLabel: 'borcan 800 g', note: 'Cel mai bun preț pe kg.' }
      ],
      sibiuNote: 'Tahiniul e ingredientul care transformă nautul fiert în humus adevărat. Fără el, humusul e doar piure de năut.',
      per100g: { kcal: 595, protein: 17, carbs: 10, sugars: 0.5, fat: 54, satFat: 7.6, fiber: 9, salt: 0.05 },
      micros: { calciumMg: 426, ironMg: 8.9, zincMg: 4.6, potassiumMg: 414, cholesterolMg: 0 },
      serving: { grams: 20, label: '1 lingură (20 g) = 3,4 g proteină, 119 kcal' },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['bol', 'tel'],
        steps: [
          'Amestecă bine în borcan — se separă puternic.',
          'Pentru sos: 2 linguri tahini + 2 linguri apă RECE + zeamă de lămâie + usturoi + sare.',
          'La contactul cu apa se va "tăia" și se va îngroșa brusc — continuă să amesteci și adaugă apă până redevine cremos.'
        ],
        yieldNote: '2 linguri tahini + 3 linguri apă → ~80 g sos.'
      },
      taste: {
        profile: 'Amărui-nucos, intens, cu final ușor astringent',
        intensity: 4,
        sweetness: 0,
        saltiness: 0,
        umami: 3,
        richness: 5,
        texture: 'Fluidă și uleioasă în borcan; se îngroașă brusc la contactul cu apa',
        notes: 'Amăreala e caracteristică, nu un defect. Tahiniul de calitate slabă e însă foarte amar — cel din susan decojit e mai blând.'
      },
      stats: { taste: 62, satiety: 68, convenience: 88, versatility: 80 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: 'Ingredient, nu masă — adaugă calciu și grăsimi bune peste orice.',
      tags: ['high-protein', 'high-kcal', 'calcium-rich', 'iron-rich', 'ready-to-eat', 'shelf-stable', 'whole-food', 'mid-price'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Năut', 'Lămâie', 'Usturoi', 'Legume la cuptor', 'Falafel', 'Iaurt'],
      tips: [
        '426 mg calciu/100 g — cea mai bogată pastă tartinabilă în calciu, esențială în dietele vegane.',
        '8,9 mg fier/100 g, printre cele mai mari valori din întreaga bază de date.',
        'Adaugă apă RECE, nu caldă, la sos: emulsia iese mai stabilă.',
        'Tahiniul din susan nedecojit e mai amar dar are de 3 ori mai mult calciu.'
      ],
      warnings: ['Alergen: susan (alergen major declarabil în UE).', 'Foarte dens caloric.'],
      storage: 'Cămară sau frigider; la frigider se separă mai puțin dar se întărește.',
      shelfLife: '12–18 luni sigilat; 6 luni după deschidere',
      dataConfidence: 'high',
      sources: ['USDA sesame butter tahini', 'Etichete import UE']
    },

    {
      id: 'v-humus-gata',
      name: 'Hummus, Ready-Made',
      nameRo: 'Humus gata preparat',
      brand: 'Vemondo (Lidl) / K-take it veggie / Sun Food',
      category: 'plant-protein',
      subcategory: 'Unturi & paste tartinabile',
      emoji: '🥣',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft refrigerat Vemondo, lângă tofu', priceRon: 8.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft refrigerat K-take it veggie', priceRon: 9.99, packGrams: 200, packLabel: 'caserolă 200 g', note: '' },
        { name: 'Mega Image', availability: 'always', aisle: 'Raft refrigerat delicatese', priceRon: 12.9, packGrams: 200, packLabel: 'caserolă 200 g', note: '' }
      ],
      sibiuNote: 'Humusul gata din Sibiu costă ~45–50 lei/kg. Făcut acasă din năut uscat: ~12 lei/kg. Diferența e 15 minute de blender.',
      per100g: { kcal: 230, protein: 7, carbs: 12, sugars: 1, fat: 16, satFat: 2, fiber: 5, salt: 1.1 },
      micros: { ironMg: 2.4, zincMg: 1.3, potassiumMg: 230, calciumMg: 55, cholesterolMg: 0 },
      serving: { grams: 100, label: '1/2 caserolă (100 g) = 7 g proteină, 230 kcal' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Deschide și mănâncă cu legume crude sau pâine.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Cremos, acrișor de la lămâie, cu usturoi și o notă de tahini',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 4,
        texture: 'Cremoasă și densă; variantele ieftine sunt mai granulate',
        notes: 'Bun, dar mai gras și mai puțin proteic decât pare. 16 g grăsime/100 g e mai mult decât se așteaptă majoritatea.'
      },
      stats: { taste: 78, satiety: 66, convenience: 98, versatility: 78 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 2, lunch: 4, snack: 5, dinner: 3, beforeBed: 3 },
      timingNote: 'Gustare bună cu legume crude, dar nu o sursă principală de proteină.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'high-kcal', 'processed', 'office-lunch', 'mid-price', 'high-sodium'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Morcov crud', 'Castraveți', 'Lipie', 'Ardei gras', 'Măsline', 'Roșii cherry'],
      tips: [
        'CAPCANĂ: doar 7 g proteină/100 g și 16 g grăsime. Humusul e o gustare grasă, nu o sursă de proteină.',
        'Făcut acasă cu mai puțin ulei ajungi la 9 g proteină și 9 g grăsime la 100 g.',
        'Variantele "cu ardei copt" sau "cu sfeclă" au și mai puțină proteină — mai multă legumă, mai puțin năut.',
        'Rețeta rapidă: 1 conservă năut scurs + 2 linguri tahini + 1 lămâie + 1 usturoi + 4 linguri apă rece, blender 2 minute.'
      ],
      warnings: ['Alergen: susan (tahini).', 'Grăsime ridicată în raport cu percepția de aliment sănătos.'],
      storage: 'Frigider 2–6 °C; 3 zile după deschidere.',
      shelfLife: '2–3 săptămâni sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete Vemondo / K-take it veggie humus', 'USDA hummus commercial']
    },

    {
      id: 'v-spirulina',
      name: 'Spirulina Powder',
      nameRo: 'Spirulină pudră',
      brand: 'Solaris / Herbagetica / bio',
      category: 'plant-protein',
      subcategory: 'Boostere de proteină',
      emoji: '🟩',
      unit: 'g',
      stores: [
        { name: 'Farmacie', availability: 'always', aisle: 'Raft suplimente naturiste, Catena / Dona / Help Net din centrul Sibiului', priceRon: 35, packGrams: 100, packLabel: 'pungă/borcan 100 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine bio online', priceRon: 28, packGrams: 100, packLabel: 'pungă 100 g', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Raft bio / superalimente', priceRon: 39.9, packGrams: 100, packLabel: 'borcan 100 g', note: '' }
      ],
      sibiuNote: 'Se găsește în orice farmacie din Sibiu. Realitatea: nimeni nu mănâncă 100 g de spirulină, deci cele 57 g proteină/100 g nu contează practic.',
      per100g: { kcal: 375, protein: 57, carbs: 18, sugars: 3, fat: 7.7, satFat: 2.6, fiber: 4, salt: 2.6 },
      micros: { ironMg: 28, zincMg: 2, potassiumMg: 1360, calciumMg: 120, b12Ug: 0, cholesterolMg: 0 },
      serving: { grams: 5, label: '1 linguriță (5 g) = 2,9 g proteină' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'blend',
        difficulty: 'trivial',
        equipment: ['blender sau shaker'],
        steps: [
          'Amestecă 5 g în smoothie cu fructe puternic aromate (banană, ananas, mango).',
          'Nu o amesteca în apă simplă decât dacă vrei să regreți.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Puternic marin, de alge și lac, cu final amărui persistent',
        intensity: 5,
        sweetness: 0,
        saltiness: 3,
        umami: 4,
        richness: 1,
        texture: 'Pudră fină care colorează totul în verde-negru',
        notes: 'Onest: are gust de acvariu. Chiar și în smoothie se simte. Nu există mod plăcut de a o consuma.'
      },
      stats: { taste: 18, satiety: 30, convenience: 80, versatility: 30 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 2, lunch: 2, snack: 2, dinner: 1, beforeBed: 1 },
      timingNote: 'Supliment de micronutrienți, nu sursă de proteină — porția reală e 5 g.',
      tags: ['very-high-protein', 'protein-dense', 'iron-rich', 'premium', 'shelf-stable', 'processed'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Banană', 'Ananas', 'Mango', 'Lime', 'Lapte de cocos'],
      tips: [
        'CAPCANA CEA MAI MARE DIN CATEGORIE: 57 g proteină/100 g sună spectaculos, dar porția e 5 g. Iei 2,9 g proteină pentru 35 lei/100 g.',
        'Costul proteinei: ~610 lei/kg proteină. Granulele de soia sunt la 52 lei/kg. De 12 ori mai scump.',
        'B12-ul din spirulină e pseudo-B12, biologic INACTIV la om. Nu te baza pe ea pentru B12.',
        'Are sens ca sursă de fier (28 mg/100 g) și fitonutrienți, nu ca proteină.'
      ],
      warnings: ['Contraindicată în fenilcetonurie (conține fenilalanină).', 'Poate fi contaminată cu microcistine dacă provine din surse necontrolate — cumpără doar branduri cu analize.', 'B12-ul din spirulină NU este biodisponibil.'],
      storage: 'Recipient etanș, ferit de lumină.',
      shelfLife: '18–24 luni',
      dataConfidence: 'medium',
      sources: ['USDA spirulina dried', 'Etichete Solaris / Herbagetica']
    },

    {
      id: 'v-drojdie-inactiva',
      name: 'Nutritional Yeast',
      nameRo: 'Drojdie inactivă (fulgi nutritivi)',
      brand: 'Sano Vita / Solaris / bio import',
      category: 'plant-protein',
      subcategory: 'Boostere de proteină',
      emoji: '🧀',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft bio / vegan, lângă condimente', priceRon: 17.99, packGrams: 100, packLabel: 'pungă 100 g', note: '' },
        { name: 'Online RO', availability: 'always', aisle: 'Magazine vegane online', priceRon: 45, packGrams: 300, packLabel: 'pungă 300 g', note: 'Mai ieftin pe gram.' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Raft bio', priceRon: 21.9, packGrams: 100, packLabel: 'pungă 100 g', note: '' }
      ],
      sibiuNote: 'Cel mai util condiment din bucătăria vegană. În Sibiu îl găsești la Kaufland Șelimbăr în raftul bio și la magazinele naturiste din centru.',
      per100g: { kcal: 345, protein: 45, carbs: 15, sugars: 1, fat: 4, satFat: 0.7, fiber: 22, salt: 0.15 },
      micros: { b12Ug: 40, ironMg: 5, zincMg: 8, potassiumMg: 2000, calciumMg: 30, cholesterolMg: 0 },
      serving: { grams: 10, label: '2 linguri (10 g) = 4,5 g proteină și B12 pentru toată ziua' },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['lingură'],
        steps: [
          'Presară peste paste, popcorn, supe, cartofi la cuptor sau salate.',
          'Amestecă în sosuri pentru gust de brânză.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Umami puternic, cu note clare de parmezan și nucă',
        intensity: 4,
        sweetness: 0,
        saltiness: 1,
        umami: 5,
        richness: 2,
        texture: 'Fulgi ușori care se dizolvă instantaneu în lichid cald',
        notes: 'Chiar are gust de brânză. E singurul produs vegan care își respectă promisiunea de aromă fără compromisuri.'
      },
      stats: { taste: 72, satiety: 40, convenience: 94, versatility: 84 },
      timing: { breakfast: 3, preWorkout: 2, postWorkout: 3, lunch: 4, snack: 3, dinner: 4, beforeBed: 2 },
      timingNote: 'Condiment cu bonus nutrițional; sursa vegetală practică de B12 dacă e fortificată.',
      tags: ['very-high-protein', 'protein-dense', 'b12', 'high-fiber', 'low-fat', 'shelf-stable', 'ready-to-eat', 'whole-food'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Paste', 'Popcorn', 'Cartofi la cuptor', 'Supă-cremă', 'Tofu', 'Salate'],
      tips: [
        'VERIFICĂ dacă e FORTIFIATĂ cu B12 — nu toate sunt. Cea fortificată acoperă necesarul zilnic dintr-o lingură.',
        '45 g proteină/100 g, dar porția reală e 10 g: 4,5 g proteină. E un condiment, nu o sursă.',
        'Amestecată cu caju înmuiat și lămâie face cel mai convingător sos de brânză vegan.',
        '2 linguri peste popcorn transformă o gustare goală într-una cu gust de brânză și 4,5 g proteină.'
      ],
      warnings: ['Nu e potrivită pentru cei cu intoleranță la drojdie sau candidoză activă.', 'Verifică fortificarea cu B12 — variantele bio adesea NU sunt fortificate.'],
      storage: 'Recipient etanș, ferit de umezeală și lumină.',
      shelfLife: '18–24 luni',
      dataConfidence: 'medium',
      sources: ['Etichete Sano Vita / import UE', 'USDA nutritional yeast']
    },

    {
      id: 'v-broccoli',
      name: 'Broccoli',
      nameRo: 'Broccoli proaspăt',
      brand: 'generic',
      category: 'plant-protein',
      subcategory: 'Legume cu proteină (contrast)',
      emoji: '🥦',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft legume proaspete', priceRon: 12.99, packGrams: 1000, packLabel: '1 kg vrac', note: '' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Tarabele de legume, vara și toamna de la producători locali', priceRon: 10, packGrams: 1000, packLabel: '1 kg', note: 'Vara e mai ieftin și mult mai proaspăt.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft legume / congelator', priceRon: 6.99, packGrams: 750, packLabel: 'pungă 750 g congelat', note: 'Congelat e mai ieftin și la fel de nutritiv.' }
      ],
      sibiuNote: 'Broccoli congelat de la Lidl (~9 lei/kg) e mai ieftin, mai constant și nutrițional echivalent cu cel proaspăt din februarie.',
      per100g: { kcal: 34, protein: 2.8, carbs: 4, sugars: 1.7, fat: 0.4, satFat: 0.05, fiber: 2.6, salt: 0.08 },
      micros: { calciumMg: 47, ironMg: 0.7, zincMg: 0.4, potassiumMg: 316, cholesterolMg: 0 },
      serving: { grams: 200, label: '1 porție mare (200 g) = 5,6 g proteină, 68 kcal' },
      effort: 1,
      timeMin: 8,
      activeTimeMin: 4,
      cooking: {
        method: 'steam',
        difficulty: 'trivial',
        equipment: ['oală cu sită de abur'],
        steps: [
          'Taie în buchețele egale.',
          'Aburește 5–6 minute — trebuie să rămână verde intens și ușor crocant.',
          'Sare, ulei de măsline, lămâie.',
          'La cuptor 200 °C, 18 minute, iese mult mai gustos decât aburit.'
        ],
        yieldNote: '1 kg broccoli întreg → ~700 g buchețele curățate.'
      },
      taste: {
        profile: 'Vegetal, ușor amărui și sulfuros; la cuptor devine dulce și nucos',
        intensity: 3,
        sweetness: 2,
        saltiness: 0,
        umami: 2,
        richness: 0,
        texture: 'Crocant dacă e gătit corect; moale și tern dacă e fiert prea mult',
        notes: 'Broccoli fiert 15 minute e unul dintre motivele pentru care oamenii cred că nu le plac legumele. La cuptor e alt aliment.'
      },
      stats: { taste: 58, satiety: 68, convenience: 62, versatility: 82 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 3, dinner: 5, beforeBed: 4 },
      timingNote: 'Volum mare la calorii mici — umple farfuria fără să afecteze deficitul caloric.',
      tags: ['low-kcal', 'high-fiber', 'whole-food', 'cutting', 'calcium-rich', 'budget', 'frozen'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Usturoi', 'Ulei de măsline', 'Lămâie', 'Migdale', 'Tofu', 'Sos de soia'],
      tips: [
        'ONESTITATE: 2,8 g proteină/100 g. Un kilogram de broccoli are cât 4 ouă. NU e o sursă de proteină.',
        'DAR: are ~33% din calorii din proteină, un procent excelent. Problema e că are doar 34 kcal/100 g.',
        'Mitul "broccoli are mai multă proteină decât carnea de vită" compară proteina per CALORIE, nu per gram. E adevărat tehnic și inutil practic.',
        'Aburit 5 minute păstrează sulforafanul; fiert în apă pierzi jumătate din compușii utili în apa de fierbere.'
      ],
      warnings: ['Nu este o sursă practică de proteină — inclus pentru context și pentru volum în dietă.'],
      storage: 'Frigider, sertarul de legume, 5–7 zile; congelat 12 luni.',
      shelfLife: '5–7 zile proaspăt',
      dataConfidence: 'high',
      sources: ['USDA broccoli raw', 'CIQUAL brocoli cru']
    },

    {
      id: 'v-spanac',
      name: 'Spinach',
      nameRo: 'Spanac (proaspăt sau congelat)',
      brand: 'generic',
      category: 'plant-protein',
      subcategory: 'Legume cu proteină (contrast)',
      emoji: '🥬',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Congelator legume, spanac tocat', priceRon: 6.99, packGrams: 450, packLabel: 'pungă 450 g congelat', note: 'Cel mai practic format.' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Tarabele de verdețuri, primăvara (aprilie–mai) de la producători locali', priceRon: 8, packGrams: 500, packLabel: 'legătură ~500 g', note: 'Spanac de primăvară, foarte fraged.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft salate ambalate / congelator', priceRon: 8.99, packGrams: 200, packLabel: 'pungă 200 g baby spanac', note: '' }
      ],
      sibiuNote: 'Primăvara, spanacul din Piața Cibin de la producătorii din Mărginime e excelent. Restul anului: congelat, care e mai concentrat și mai ieftin.',
      per100g: { kcal: 23, protein: 2.9, carbs: 1.4, sugars: 0.4, fat: 0.4, satFat: 0.06, fiber: 2.2, salt: 0.2 },
      micros: { ironMg: 2.7, calciumMg: 99, zincMg: 0.5, potassiumMg: 558, cholesterolMg: 0 },
      serving: { grams: 200, label: '1 porție (200 g crud, ~60 g gătit) = 5,8 g proteină' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 4,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie mare'],
        steps: [
          'Călește usturoiul tocat 30 de secunde în ulei.',
          'Adaugă spanacul în tigaia încinsă — pare enorm, se reduce la o cincime.',
          'Amestecă 2 minute până se ofilește complet.',
          'Scurge lichidul, sare, piper, nucșoară.'
        ],
        yieldNote: '500 g spanac proaspăt → ~100 g gătit. Reducerea de 5:1 e cea mai dramatică din toată baza de date.'
      },
      taste: {
        profile: 'Mineral, ușor metalic și astringent de la oxalați; dulceag când e foarte proaspăt',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 0,
        texture: 'Crud e fraged și crocant; gătit devine moale și ușor mucilaginos',
        notes: 'Senzația de "scrâșnet pe dinți" vine de la oxalați. Cu puțină grăsime și acid dispare aproape complet.'
      },
      stats: { taste: 55, satiety: 52, convenience: 74, versatility: 86 },
      timing: { breakfast: 4, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 4 },
      timingNote: 'Volum mare, calorii aproape zero — bază pentru salate și mâncăruri în deficit.',
      tags: ['low-kcal', 'iron-rich', 'whole-food', 'cutting', 'budget', 'frozen', 'high-fiber'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Usturoi', 'Nucșoară', 'Ou', 'Ricotta', 'Linte', 'Lămâie'],
      tips: [
        'ONESTITATE: 2,9 g proteină/100 g. Popeye a mințit o generație întreagă.',
        'Fierul din spanac (2,7 mg/100 g) e non-hem și blocat parțial de oxalați — absorbția reală e sub 5%. Adaugă vitamina C.',
        '500 g spanac crud se reduc la 100 g gătit: dacă o rețetă cere 200 g spanac gătit, cumperi 1 kg.',
        'Spanacul congelat e deja blanșat și concentrat: 100 g congelat ≈ 400 g proaspăt, la un sfert din preț.'
      ],
      warnings: ['Bogat în oxalați — persoanele cu litiază renală oxalică ar trebui să îl limiteze.', 'Nu este o sursă practică de proteină.'],
      storage: 'Frigider 3–4 zile proaspăt; congelator 12 luni.',
      shelfLife: '3–4 zile proaspăt',
      dataConfidence: 'high',
      sources: ['USDA spinach raw', 'CIQUAL épinard cru']
    },

    {
      id: 'v-mazare-verde-congelata',
      name: 'Frozen Green Peas',
      nameRo: 'Mazăre verde congelată',
      brand: 'generic / K-Classic / Freshona (Lidl)',
      category: 'plant-protein',
      subcategory: 'Legume cu proteină (contrast)',
      emoji: '🟢',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Congelator legume, Freshona', priceRon: 5.99, packGrams: 450, packLabel: 'pungă 450 g', note: 'Cea mai bună proteină pe leu din raftul de legume.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Congelator legume', priceRon: 6.49, packGrams: 450, packLabel: 'pungă 450 g', note: '' },
        { name: 'Profi', availability: 'always', aisle: 'Congelator', priceRon: 6.99, packGrams: 400, packLabel: 'pungă 400 g', note: '' }
      ],
      sibiuNote: 'Mazărea verde congelată e cea mai proteică legumă din congelatorul oricărui magazin din Sibiu, la sub 14 lei/kg.',
      per100g: { kcal: 81, protein: 5.4, carbs: 10, sugars: 4, fat: 0.4, satFat: 0.1, fiber: 5, salt: 0.02 },
      micros: { ironMg: 1.5, zincMg: 1.2, potassiumMg: 244, calciumMg: 25, cholesterolMg: 0 },
      serving: { grams: 200, label: '1 porție (200 g) = 10,8 g proteină, 162 kcal' },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 3,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală', 'sită'],
        steps: [
          'Aruncă mazărea congelată direct în apă clocotită cu sare.',
          'Fierbe 3–4 minute — NU mai mult, altfel se face făinoasă și pierde culoarea.',
          'Scurge imediat.',
          'Cu unt, mentă și sare e o garnitură excelentă în 6 minute.'
        ],
        yieldNote: 'Nu pierde greutate — absoarbe puțină apă.'
      },
      taste: {
        profile: 'Dulce, proaspăt, ierbos; surprinzător de bună pentru un produs congelat',
        intensity: 2,
        sweetness: 4,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Boabe ferme care pocnesc; se fac făinoase dacă sunt fierte prea mult',
        notes: 'Mazărea congelată e adesea mai dulce decât cea "proaspătă" din magazin, pentru că se congelează la câteva ore de la recoltare.'
      },
      stats: { taste: 74, satiety: 74, convenience: 88, versatility: 84 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 4, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Cea mai proteică legumă obișnuită — 10,8 g proteină la o porție de 200 g.',
      tags: ['frozen', 'high-fiber', 'low-kcal', 'cheap-protein', 'budget', 'whole-food', 'cutting', 'kid-friendly'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: false, halal: true, porkFree: true },
      pairings: ['Mentă', 'Unt', 'Ceapă verde', 'Orez', 'Ou', 'Somon'],
      tips: [
        '5,4 g proteină/100 g — de aproape 2 ori cât broccoli și cea mai bună legumă comună ca proteină.',
        'Pasată cu mentă, usturoi și ulei de măsline devine o cremă tartinabilă cu mai multă proteină decât humusul.',
        'La 13 lei/kg costul proteinei e ~245 lei/kg — nu ieftin, dar e o legumă, nu o leguminoasă uscată.',
        'Nu o dezgheța înainte: aruncă-o direct în apa clocotită sau în tigaie.'
      ],
      warnings: [],
      storage: 'Congelator -18 °C; nu recongela după dezghețare.',
      shelfLife: '18–24 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA peas green frozen', 'Eticheta Freshona mazăre']
    },

    {
      id: 'v-ciuperci-champignon',
      name: 'White Mushrooms',
      nameRo: 'Ciuperci champignon',
      brand: 'generic / local',
      category: 'plant-protein',
      subcategory: 'Legume cu proteină (contrast)',
      emoji: '🍄',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft legume proaspete, caserole', priceRon: 9.99, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Tarabe de legume; toamna și ciuperci de pădure locale', priceRon: 16, packGrams: 1000, packLabel: 'vrac 1 kg', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft legume', priceRon: 8.99, packGrams: 500, packLabel: 'caserolă 500 g', note: '' }
      ],
      sibiuNote: 'Toamna, în Piața Cibin apar ciuperci de pădure culese în Mărginimea Sibiului (hribi, gălbiori) — mult mai aromate, dar cu aceeași proteină modestă.',
      per100g: { kcal: 22, protein: 3.1, carbs: 1.5, sugars: 1, fat: 0.3, satFat: 0.05, fiber: 1, salt: 0.01 },
      micros: { potassiumMg: 318, ironMg: 0.5, zincMg: 0.5, calciumMg: 3, vitDUg: 0.2, cholesterolMg: 0 },
      serving: { grams: 200, label: '1 porție (200 g crude, ~90 g gătite) = 6,2 g proteină' },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie mare'],
        steps: [
          'Curăță cu o cârpă umedă, nu le spăla sub jet (absorb apă ca un burete).',
          'Taie felii groase.',
          'Tigaie FOARTE încinsă, fără să le aglomerezi — altfel fierb în loc să se rumenească.',
          'Nu pune sare până nu s-au rumenit: sarea scoate apa.',
          'Usturoi și pătrunjel în ultimul minut.'
        ],
        yieldNote: '500 g ciuperci crude → ~200 g gătite. Pierd 60% din greutate (apă).'
      },
      taste: {
        profile: 'Umami puternic, pământos, cu note de nucă după rumenire',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 5,
        richness: 1,
        texture: 'Cauciucată crudă; cărnoasă și suculentă rumenită corect; apoasă și tristă dacă e aglomerată în tigaie',
        notes: 'Cel mai bun umami vegetal accesibil. Nu sunt proteină, dar fac orice fel de mâncare vegetală să pară mai substanțial.'
      },
      stats: { taste: 72, satiety: 58, convenience: 60, versatility: 88 },
      timing: { breakfast: 4, preWorkout: 1, postWorkout: 2, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Aliment de volum și de aromă, nu de proteină.',
      tags: ['low-kcal', 'whole-food', 'cutting', 'budget', 'local-sibiu'],
      diet: { vegan: true, vegetarian: true, glutenFree: true, lactoseFree: true, keto: true, halal: true, porkFree: true },
      pairings: ['Usturoi', 'Pătrunjel', 'Cimbru', 'Smântână', 'Orz arpacaș', 'Hrișcă'],
      tips: [
        'ONESTITATE: 3,1 g proteină/100 g crude. După gătit, la 90 g rămase, iei ~6 g proteină dintr-o caserolă de 200 g.',
        'Lăsate 30 de minute la soare direct, ciupercile sintetizează vitamina D2 — de la 0,2 la peste 10 µg/100 g.',
        'NU LE AGLOMERA în tigaie. Aici se decide dacă ies rumenite sau fierte în apa lor.',
        'Sunt ingredientul care dă senzația de "carne" mâncărurilor vegetale, prin glutamat natural, nu prin proteină.'
      ],
      warnings: ['Nu sunt o sursă de proteină — incluse pentru context.', 'Ciupercile de pădure culese personal necesită identificare de specialist.'],
      storage: 'Frigider, în pungă de hârtie (nu plastic — transpiră), 4–5 zile.',
      shelfLife: '4–5 zile',
      dataConfidence: 'high',
      sources: ['USDA mushrooms white raw', 'CIQUAL champignon de Paris']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
