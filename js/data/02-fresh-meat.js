/* =========================================================================
 * PROTEIN ATLAS SIBIU — CARNE PROASPĂTĂ CRUDĂ (MEAT & POULTRY)
 * File: js/data/02-fresh-meat.js
 * Items: 64
 * Category slug: fresh-meat
 * ID prefix: m-
 * Last researched: 2026-08
 *
 * Toate valorile nutriționale sunt pentru produsul AȘA CUM SE VINDE, adică
 * CRUD. La gătit carnea pierde 20–35% din masă (apă + grăsime topită), deci
 * proteina la 100 g CREȘTE cu ~35–45% după gătire. Vezi yieldNote la fiecare.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'm-piept-pui-dezosat',
      name: 'Chicken Breast, Boneless Skinless',
      nameRo: 'Piept de pui dezosat, fără piele',
      brand: 'K-Purland (Kaufland) / Fragedo Transavia',
      category: 'fresh-meat',
      subcategory: 'Pui — carne albă',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, vitrina refrigerată de pasăre — caserole de 2–5 kg', priceRon: 29.9, packGrams: 1000, packLabel: 'caserolă mare 2–5 kg', note: 'Cel mai mic preț/kg din Sibiu dacă iei caserola mare.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată, lângă pulpele de pui', priceRon: 32.9, packGrams: 1000, packLabel: 'tavă ~0,9–1,1 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie + raft autoservire K-Purland', priceRon: 33.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: 'Marți/miercuri apar reduceri de 20–25%.' },
        { name: 'Carrefour', availability: 'always', aisle: 'Raft carne proaspătă, zona pasăre', priceRon: 35.9, packGrams: 1000, packLabel: 'tavă ~0,8 kg', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Vitrină refrigerată mică, lângă mezeluri', priceRon: 18.95, packGrams: 500, packLabel: 'tavă 400–600 g', note: 'Cel mai scump, dar e la colț de bloc.' }
      ],
      sibiuNote: 'Selgros (Șoseaua Alba Iulia) și Metro (Șelimbăr) bat orice supermarket la piept de pui dacă iei 3–5 kg deodată: 6–8 lei/kg diferență față de Profi. Porționezi acasă în pungi de 400 g și congelezi — merită drumul o dată pe lună.',
      per100g: { kcal: 110, protein: 23, carbs: 0, sugars: 0, fat: 1.8, satFat: 0.5, fiber: 0, salt: 0.15 },
      micros: { ironMg: 0.4, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 350, cholesterolMg: 65 },
      serving: { grams: 180, label: '1 piept mediu (180 g crud)' },
      effort: 2,
      timeMin: 16,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie grill', 'clește', 'termometru de carne'],
        steps: [
          'Taie pieptul pe orizontală în două felii de ~1,5 cm, ca să se gătească uniform.',
          'Sare, piper, boia dulce și o linguriță de ulei direct pe carne (nu în tigaie).',
          'Încinge tigaia 2–3 minute pe foc mediu-mare, până sfârâie o picătură de apă.',
          'Prăjește 4 minute pe o parte fără să miști carnea, apoi 3–4 minute pe cealaltă.',
          'Verifică 74 °C în centru cu termometrul; dacă nu ai termometru, taie — sucul trebuie să fie limpede.',
          'Lasă 5 minute pe un tocător înainte să tai, altfel pierzi tot sucul.'
        ],
        yieldNote: '1 kg piept crud ≈ 700 g gătit; proteina urcă de la 23 g la ~32 g/100 g'
      },
      taste: {
        profile: 'Neutru, ușor dulceag, complet lipsit de personalitate fără condimente',
        intensity: 1,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Fibros, uscat dacă îl treci de 75 °C, suculent doar în fereastra 70–74 °C',
        notes: 'Sincer: fiert simplu e mâncare de spital. Are nevoie de marinadă, sos sau grătar bine încins ca să devină mâncare adevărată.'
      },
      stats: { taste: 45, satiety: 88, convenience: 55, versatility: 95 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Proteină rapidă și săracă în grăsime — ideal post-antrenament sau la prânz când vrei să nu te îngreuneze.',
      tags: ['low-fat', 'protein-dense', 'meal-prep', 'batch-cook', 'cheap-protein', 'whole-food', 'complete-protein', 'cutting', 'post-workout'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Orez basmati', 'Broccoli la abur', 'Iaurt grecesc cu usturoi', 'Salată de varză', 'Cartofi dulci'],
      tips: [
        'Valorile sunt pentru carne CRUDĂ. După gătire 100 g piept au ~32 g proteină, pentru că pierde apă.',
        'Saramură rapidă: 1 litru apă + 50 g sare, 30 de minute. Rămâne suculent chiar dacă îl treci puțin de 74 °C.',
        'Cumpără la Selgros caserola mare, porționează în pungi de 400 g și congelează — economisești ~150 lei/lună la 5 kg.',
        'Nu-l tăia imediat după tigaie: 5 minute de odihnă înseamnă cu 10% mai mult suc în carne.'
      ],
      warnings: [
        'Carnea de pui trebuie gătită la minimum 74 °C în centru — Campylobacter și Salmonella sunt reale.',
        'Nu spăla puiul crud la robinet: împrăștii bacterii pe 1 metru în jurul chiuvetei.',
        'Tocător separat pentru carne crudă, altfel contaminezi salata.'
      ],
      storage: 'Frigider 0–4 °C, pe raftul de jos, în tăviță ca să nu picure. Congelator −18 °C.',
      shelfLife: '2–3 zile în frigider de la cumpărare; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['Eticheta K-Purland Kaufland', 'transavia.ro', 'USDA SR Legacy 05062']
    },

    {
      id: 'm-piept-pui-fragedo-branded',
      name: 'Chicken Breast Fillet, Premium Brand',
      nameRo: 'Piept de pui dezosat Fragedo (Transavia)',
      brand: 'Fragedo (Transavia)',
      category: 'fresh-meat',
      subcategory: 'Pui — carne albă',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft autoservire pasăre, caserole albastre Fragedo', priceRon: 41.6, packGrams: 1000, packLabel: 'caserolă 450–900 g', note: 'Brand românesc, Alba Iulia — cel mai mare producător din RO.' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrina de pasăre refrigerată', priceRon: 42.9, packGrams: 900, packLabel: 'caserolă ~900 g', note: '' },
        { name: 'Mega Image', availability: 'usual', aisle: 'Raft carne, secțiunea pui', priceRon: 45.9, packGrams: 450, packLabel: 'caserolă 450 g', note: '' }
      ],
      sibiuNote: 'Transavia are fabrica la Oiejdea (Alba), la 70 km de Sibiu — carnea ajunge la raft în 24–36 h. Se vede: e mai fermă și miroase mai puțin decât marca albă. Diferența de 8 lei/kg față de generic e reală, dar nu obligatorie.',
      per100g: { kcal: 108, protein: 23.2, carbs: 0, sugars: 0, fat: 1.5, satFat: 0.4, fiber: 0, salt: 0.12 },
      micros: { ironMg: 0.4, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 355, cholesterolMg: 65 },
      serving: { grams: 180, label: '1 file mediu (180 g crud)' },
      effort: 2,
      timeMin: 16,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'clește'],
        steps: [
          'Scoate din caserolă și tamponează cu prosop de hârtie — carnea udă se fierbe, nu se rumenește.',
          'Condimentează cu sare, piper, usturoi granulat.',
          'Tigaie încinsă, 4 minute pe fiecare parte pentru felii de 1,5 cm.',
          'Odihnește 5 minute acoperit cu folie.'
        ],
        yieldNote: '1 kg crud ≈ 700–720 g gătit'
      },
      taste: {
        profile: 'Curat, ușor dulce, fără gustul acela de apă al pieptului ieftin',
        intensity: 2,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Fibre mai fine și mai ferme decât la marca albă, mai puțin apos',
        notes: 'Diferența față de genericul de 30 lei se simte la textură, nu la gust. Merită dacă îl faci la grătar simplu; nu merită dacă îl îneci în sos.'
      },
      stats: { taste: 52, satiety: 88, convenience: 58, versatility: 95 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Același profil ca pieptul generic — proteină slabă, digestie rapidă, bun oricând în afară de micul dejun clasic.',
      tags: ['low-fat', 'protein-dense', 'meal-prep', 'whole-food', 'mid-price', 'complete-protein', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Mămăligă', 'Salată de roșii cu ceapă', 'Cartofi la cuptor', 'Mujdei de usturoi'],
      tips: [
        'Verifică data de ambalare, nu doar expirarea: Fragedo pune ambele, iar diferența de 2 zile se simte.',
        'Caserolele de 450 g sunt cu 4–6 lei/kg mai scumpe decât cele de 900 g — ia mare și porționează.',
        'Valorile de mai sus sunt pentru carne crudă; gătit ajunge la ~32 g proteină/100 g.'
      ],
      warnings: ['74 °C în centru, obligatoriu.', 'Ambalajul în atmosferă modificată se umflă ușor la temperatură — dacă e bombat tare și miroase acru, aruncă-l.'],
      storage: 'Frigider 0–4 °C în ambalajul original până la deschidere.',
      shelfLife: '4–6 zile sigilat de la ambalare, 2 zile după deschidere',
      dataConfidence: 'high',
      sources: ['transavia.ro/fragedo', 'Eticheta Fragedo piept dezosat']
    },

    {
      id: 'm-pulpe-pui-dezosate',
      name: 'Chicken Thighs, Boneless Skinless',
      nameRo: 'Pulpe de pui dezosate, fără piele',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — carne roșie',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tavă lângă piept', priceRon: 26.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: 'Adesea în oferta săptămânii la 22–24 lei/kg.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 22.32, packGrams: 800, packLabel: 'tavă ~800 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole mari', priceRon: 49, packGrams: 2000, packLabel: 'caserolă 2 kg', note: 'Cel mai bun raport preț/proteină din tot raftul de pui.' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrina pasăre', priceRon: 26.91, packGrams: 900, packLabel: 'tavă ~900 g', note: '' }
      ],
      sibiuNote: 'Pulpa dezosată e secretul prost păzit al Sibiului: la Selgros costă cu 5–8 lei/kg mai puțin decât pieptul, are 18,5 g proteină și e imposibil de uscat. Dacă gătești pentru familie, e alegerea rațională.',
      per100g: { kcal: 145, protein: 18.5, carbs: 0, sugars: 0, fat: 8, satFat: 2.3, fiber: 0, salt: 0.16 },
      micros: { ironMg: 0.9, zincMg: 1.8, b12Ug: 0.6, potassiumMg: 290, cholesterolMg: 88 },
      serving: { grams: 200, label: '2 pulpe dezosate (200 g crud)' },
      effort: 2,
      timeMin: 22,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'clește'],
        steps: [
          'Tamponează carnea, sare, piper, boia afumată.',
          'Tigaie fierbinte cu o linguriță de ulei, pune pulpele cu partea netedă în jos.',
          'Prăjește 6–7 minute fără să miști, până se face crustă maro.',
          'Întoarce, mai lasă 5–6 minute, foc mediu.',
          'Ținta e 75–80 °C în centru — pulpa suportă temperaturi mai mari fără să se usuce.',
          'Odihnește 4 minute.'
        ],
        yieldNote: '1 kg pulpă crudă ≈ 720 g gătită'
      },
      taste: {
        profile: 'Cărnos, ușor gras, cu gust real de pui — opusul pieptului fad',
        intensity: 3,
        sweetness: 1,
        saltiness: 0,
        umami: 4,
        richness: 3,
        texture: 'Moale, ușor gelatinos, se desface în fâșii; iertător la supragătire',
        notes: 'Dacă ai crescut cu piept de pui uscat, prima pulpă dezosată bine rumenită e o revelație. 4,5 g proteină mai puțin la 100 g, dar de trei ori mai multă plăcere.'
      },
      stats: { taste: 78, satiety: 82, convenience: 55, versatility: 92 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Mai grasă decât pieptul, deci se digeră mai lent — mai bună la cină decât imediat post-antrenament.',
      tags: ['high-protein', 'meal-prep', 'batch-cook', 'cheap-protein', 'whole-food', 'iron-rich', 'complete-protein', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Orez cu unt', 'Cartofi noi la tigaie', 'Sos de roșii', 'Salată de castraveți', 'Mămăligă'],
      tips: [
        'Comparație cinstită: pieptul dă 23 g proteină la 33 lei/kg = 6,9 g/leu. Pulpa dezosată dă 18,5 g la 26 lei/kg = 7,1 g/leu. Pulpa câștigă.',
        'Pentru shaorma sau curry, pulpa e obligatorie — pieptul se face sfoară.',
        'Congelează în marinadă (iaurt + usturoi + boia): se marinează singură la decongelare.'
      ],
      warnings: ['74 °C minim, ca la tot puiul.', 'Are cu 4,5 g grăsime în plus față de piept — contează dacă ești pe deficit strict.'],
      storage: 'Frigider 0–4 °C, raftul de jos.',
      shelfLife: '2–3 zile în frigider; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05095', 'Eticheta Kaufland pulpe dezosate']
    },

    {
      id: 'm-pulpe-pui-superioare',
      name: 'Chicken Thighs, Bone-in Skin-on',
      nameRo: 'Pulpe superioare de pui, cu os și piele',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — carne roșie',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tăvi mari de pulpe', priceRon: 17.9, packGrams: 1000, packLabel: 'tavă ~1,2 kg', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 18.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Vitrina refrigerată de la intrare', priceRon: 17.5, packGrams: 1000, packLabel: 'tavă ~1 kg', note: 'Penny are frecvent 14,99 lei/kg în ofertă.' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne, măcelării din stânga', priceRon: 22, packGrams: 1000, packLabel: '1 kg la tarabă', note: 'Mai scump, dar poți alege bucată cu bucată.' }
      ],
      sibiuNote: 'La 17–18 lei/kg e cea mai ieftină carne de pui reală din Sibiu. Osul și pielea sunt ~28% din greutate, deci proteina utilă costă tot ~26 lei/kg — dar oasele îți dau supă gratis a doua zi.',
      per100g: { kcal: 210, protein: 17, carbs: 0, sugars: 0, fat: 15.5, satFat: 4.3, fiber: 0, salt: 0.15 },
      micros: { ironMg: 0.9, zincMg: 1.7, b12Ug: 0.5, potassiumMg: 250, cholesterolMg: 95 },
      serving: { grams: 250, label: '2 pulpe superioare (250 g crud, cu os)' },
      effort: 3,
      timeMin: 50,
      activeTimeMin: 10,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă de cuptor', 'hârtie de copt'],
        steps: [
          'Preîncălzește cuptorul la 200 °C.',
          'Usucă pielea cu prosop de hârtie, apoi sare generos și piper — pielea uscată = piele crocantă.',
          'Așază pulpele cu pielea în sus, fără să se atingă între ele, pe hârtie de copt.',
          'Coace 40–45 de minute fără să întorci.',
          'Ultimele 5 minute treci pe grill dacă vrei pielea sticloasă.',
          'Verifică 80 °C lângă os; pulpa cu os are nevoie de mai mult decât 74 °C ca să se desprindă frumos.',
          'Păstrează grăsimea scursă în tavă — e aur pentru cartofi.'
        ],
        yieldNote: '1 kg pulpe cu os ≈ 620 g carne gătită fără os'
      },
      taste: {
        profile: 'Bogat, sărat, cu pielea crocantă care face jumătate din plăcere',
        intensity: 4,
        sweetness: 1,
        saltiness: 2,
        umami: 4,
        richness: 4,
        texture: 'Carne moale care se desprinde de pe os, piele crocantă dacă e făcută corect',
        notes: 'Cea mai bună mâncare de pui raportat la lei cheltuiți. Dezavantajul: 15,5 g grăsime la 100 g, majoritatea în piele. Scoți pielea și rămâi cu ~8 g.'
      },
      stats: { taste: 84, satiety: 80, convenience: 40, versatility: 70 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Masă de seară copioasă; prea grasă și prea lentă ca să fie utilă în jurul antrenamentului.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'whole-food', 'batch-cook', 'winter', 'romanian-classic', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi la cuptor', 'Varză călită', 'Murături', 'Orez cu legume', 'Mujdei'],
      tips: [
        'Scoate pielea înainte de gătit și scazi caloriile de la 210 la ~145/100 g, cu proteina aproape neschimbată.',
        'Oasele rămase, plus un gât de pui, fac 2 litri de supă concentrată — pune-le la congelator într-o pungă până aduni destule.',
        'Nutriția e pentru carne crudă cu piele; carnea gătită fără piele ajunge la ~26 g proteină/100 g.'
      ],
      warnings: ['80 °C lângă os pentru carne cu os — 74 °C e minimul de siguranță, dar textura e proastă sub 78 °C.', 'Grăsimea din piele e majoritar mononesaturată, dar tot 15 g/100 g rămâne.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05091', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-pulpe-pui-inferioare',
      name: 'Chicken Drumsticks',
      nameRo: 'Pulpe inferioare de pui (ciocănele)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — carne roșie',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Penny', availability: 'always', aisle: 'Vitrina refrigerată', priceRon: 15.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie', priceRon: 16.5, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 16.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserolă 2,5 kg', priceRon: 36.25, packGrams: 2500, packLabel: 'caserolă 2,5 kg', note: 'Ideal pentru grătar cu prietenii.' }
      ],
      sibiuNote: 'Ciocănelele sunt carnea de petrecere din Sibiu: 15 lei/kg, se coc singure în tavă, nu le poți strica. La Selgros iei 2,5 kg cu 36 de lei și hrănești 6 oameni.',
      per100g: { kcal: 175, protein: 18, carbs: 0, sugars: 0, fat: 11.5, satFat: 3.2, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1, zincMg: 2.1, b12Ug: 0.5, potassiumMg: 250, cholesterolMg: 90 },
      serving: { grams: 280, label: '3 ciocănele (280 g crud, cu os)' },
      effort: 2,
      timeMin: 45,
      activeTimeMin: 8,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă de cuptor', 'bol pentru marinat'],
        steps: [
          'Amestecă într-un bol: 2 linguri ulei, 1 lingură boia dulce, usturoi granulat, sare, piper, 1 linguriță muștar.',
          'Rostogolește ciocănelele prin marinadă, minim 20 de minute (ideal 2 ore).',
          'Cuptor 200 °C, tavă cu hârtie de copt, 35–40 de minute.',
          'Întoarce o singură dată la jumătate.',
          'Verifică lângă os: 80 °C, iar sucul trebuie să fie limpede.'
        ],
        yieldNote: '1 kg ciocănele ≈ 550 g carne curată gătită (osul e ~30%)'
      },
      taste: {
        profile: 'Suculent, cu gust intens de pui, pielea se caramelizează frumos',
        intensity: 4,
        sweetness: 1,
        saltiness: 2,
        umami: 4,
        richness: 3,
        texture: 'Foarte moale lângă os, crocant la exterior',
        notes: 'Mâncare cu mâna, deci și un pic de bucurie. Dar raportul carne/os e prost dacă îți numeri gramele de proteină.'
      },
      stats: { taste: 82, satiety: 74, convenience: 42, versatility: 62 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină de weekend sau grătar; nu e o sursă eficientă de proteină pentru meal prep.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'whole-food', 'kid-friendly', 'summer', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi wedges', 'Salată coleslaw', 'Sos barbecue', 'Porumb la grătar'],
      tips: [
        'Crestează carnea până la os în 2–3 locuri: se gătește cu 8 minute mai repede și marinada intră în profunzime.',
        'Osul reprezintă ~30% din greutate — 1 kg cumpărat înseamnă doar ~550 g carne comestibilă.',
        'La airfryer: 200 °C, 22 de minute, scuturi la 12 minute. Rezultat mai bun decât la cuptor.'
      ],
      warnings: ['Carnea de lângă os rămâne roz chiar și gătită — verifică temperatura, nu culoarea.', 'Copii mici: scoate osul, se sparge în așchii.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05098', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-aripioare-pui',
      name: 'Chicken Wings',
      nameRo: 'Aripioare de pui',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — carne roșie',
      emoji: '🍗',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tavă lângă ciocănele', priceRon: 16.5, packGrams: 1000, packLabel: 'tavă ~1 kg', note: 'Frecvent 12,99 lei/kg în ofertă de weekend.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 16.11, packGrams: 900, packLabel: 'tavă ~900 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole mari', priceRon: 31, packGrams: 2000, packLabel: 'caserolă 2 kg', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Zona carne refrigerată, bax', priceRon: 74.5, packGrams: 5000, packLabel: 'bax 5 kg', note: 'Necesită card Metro.' }
      ],
      sibiuNote: 'Aripioarele sunt cel mai prost raport proteină/lei din tot raftul — 40% os și piele. Le cumperi pentru plăcere, nu pentru macro. La Metro, baxul de 5 kg la 15 lei/kg e clasicul pentru grătar în curte.',
      per100g: { kcal: 220, protein: 18.3, carbs: 0, sugars: 0, fat: 16.5, satFat: 4.6, fiber: 0, salt: 0.16 },
      micros: { ironMg: 0.8, zincMg: 1.5, b12Ug: 0.3, potassiumMg: 190, cholesterolMg: 92 },
      serving: { grams: 300, label: '6 aripioare (300 g crud, cu os)' },
      effort: 3,
      timeMin: 45,
      activeTimeMin: 12,
      cooking: {
        method: 'airfryer',
        difficulty: 'easy',
        equipment: ['airfryer sau tavă de cuptor', 'bol', 'praf de copt'],
        steps: [
          'Usucă aripile foarte bine cu prosop de hârtie — apa e dușmanul crocantului.',
          'Amestecă-le cu 1 linguriță praf de copt la 1 kg și sare. Praful de copt ridică pH-ul pielii și o face sticloasă.',
          'Airfryer 180 °C, 15 minute, apoi 200 °C încă 8–10 minute.',
          'La cuptor: 220 °C, 40 de minute pe grătar peste tavă, întorci o dată.',
          'Amestecă imediat cu sosul dorit (unt + sos iute, sau miere + soia) cât sunt fierbinți.'
        ],
        yieldNote: '1 kg aripi ≈ 480–520 g carne comestibilă gătită'
      },
      taste: {
        profile: 'Sărat, gras, cu piele crocantă — mâncarea perfectă de bere',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 5,
        texture: 'Crocant afară, gelatinos înăuntru din cauza cartilajelor',
        notes: 'Delicioase, dar nutrițional sunt aproape un aperitiv gras. 300 g de aripi crude îți dau doar ~40 g proteină și 50 g grăsime.'
      },
      stats: { taste: 88, satiety: 55, convenience: 35, versatility: 45 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 3, snack: 3, dinner: 4, beforeBed: 1 },
      timingNote: 'Mâncare de weekend și de socializat, nu de plan nutrițional.',
      tags: ['high-protein', 'budget', 'high-kcal', 'summer', 'romanian-classic', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de usturoi', 'Sos buffalo', 'Bastonașe de țelină', 'Bere', 'Cartofi prăjiți'],
      tips: [
        'Trucul cu praful de copt (1 linguriță/kg) e singura metodă de a obține piele crocantă fără friteuză.',
        'Separă aripa în drumette și flat înainte de gătit: se coc uniform și încap mai multe în airfryer.',
        'Vârful aripii (nu are carne) — pune-l în punga de supă, nu-l arunca.'
      ],
      warnings: ['Raport proteină/calorii slab: doar 33% din calorii vin din proteină.', 'Sosurile comerciale adaugă 5–15 g zahăr la porție.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05144', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-pui-intreg',
      name: 'Whole Chicken',
      nameRo: 'Pui întreg (griller)',
      brand: 'Fragedo (Transavia) / generic',
      category: 'fresh-meat',
      subcategory: 'Pui — întreg',
      emoji: '🐓',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată, pungi individuale', priceRon: 23.85, packGrams: 1500, packLabel: 'pui ~1,4–1,7 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie + raft autoservire', priceRon: 26.4, packGrams: 1600, packLabel: 'pui ~1,5–1,8 kg', note: '' },
        { name: 'Penny', availability: 'always', aisle: 'Vitrina refrigerată', priceRon: 23.25, packGrams: 1500, packLabel: 'pui ~1,5 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 23.84, packGrams: 1600, packLabel: 'pui ~1,6 kg', note: '' }
      ],
      sibiuNote: 'Puiul întreg la 15–16 lei/kg e cea mai eficientă achiziție de proteină din Sibiu dacă știi să-l tranșezi: două piepturi, două pulpe, aripi, plus carcasă pentru 2 litri de supă. Un pui de 1,6 kg = 25 lei = ~330 g proteină.',
      per100g: { kcal: 215, protein: 18, carbs: 0, sugars: 0, fat: 16, satFat: 4.5, fiber: 0, salt: 0.14 },
      micros: { ironMg: 0.9, zincMg: 1.5, b12Ug: 0.4, potassiumMg: 230, cholesterolMg: 85 },
      serving: { grams: 350, label: '1/4 de pui (350 g crud, cu os)' },
      effort: 3,
      timeMin: 95,
      activeTimeMin: 15,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă de cuptor', 'termometru de carne', 'sfoară de bucătărie'],
        steps: [
          'Scoate puiul din frigider cu 45 de minute înainte — carnea la temperatura camerei se coace uniform.',
          'Usucă-l complet, sare pe toată suprafața și în cavitate, 10 g sare la 1,5 kg.',
          'Bagă în cavitate o jumătate de lămâie, câțiva căței de usturoi și cimbru; leagă picioarele cu sfoară.',
          'Cuptor 200 °C, 60–70 de minute pentru un pui de 1,5–1,7 kg (regula: 40 min/kg + 20 min).',
          'Verifică în partea groasă a pulpei, lângă os: 80 °C. Pieptul trebuie să fie la 74 °C.',
          'Odihnește 15 minute acoperit lejer cu folie — obligatoriu, altfel curge tot sucul pe tocător.',
          'Tranșează și pune carcasa la fiert imediat, cu apă rece, morcov și ceapă, 90 de minute.'
        ],
        yieldNote: '1 pui de 1,6 kg crud ≈ 950 g carne gătită fără os + carcasă pentru 2 l supă'
      },
      taste: {
        profile: 'Gustul complet de pui: piept fad salvat de pulpe grase și piele rumenită',
        intensity: 4,
        sweetness: 1,
        saltiness: 2,
        umami: 4,
        richness: 4,
        texture: 'Contraste — piept ferm, pulpă moale, piele crocantă',
        notes: 'Un pui bine făcut la cuptor duminică rezolvă trei mese. Efortul de tranșare e real, dar odată învățat durează 6 minute.'
      },
      stats: { taste: 85, satiety: 82, convenience: 30, versatility: 88 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Masa principală de duminică, apoi resturile devin prânzuri de luni și marți.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'batch-cook', 'meal-prep', 'whole-food', 'romanian-classic', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi la cuptor', 'Sos de usturoi', 'Salată verde', 'Varză murată', 'Orez cu ficăței'],
      tips: [
        'Tranșează-l crud dacă vrei eficiență maximă: piept la congelator pentru meal prep, pulpe la tigaie, carcasa la supă.',
        'Nu arunca niciodată carcasa. 2 litri de supă concentrată valorează 15 lei și au ~20 g colagen.',
        'Pui de 1,6 kg la 16 lei/kg = 25,6 lei pentru ~950 g carne gătită. Sub 3 lei per 100 g de carne gătită — imbatabil.'
      ],
      warnings: [
        'Nu spăla puiul întreg — stropii ajung la 1 m distanță în chiuvetă.',
        'Umplutura din cavitate încetinește coacerea; nu umple compact cu orez sau pâine dacă nu prelungești timpul.',
        '74 °C la piept, 80 °C la pulpă.'
      ],
      storage: 'Frigider 0–4 °C, în tăviță. Carnea gătită se ține 3 zile.',
      shelfLife: '2–3 zile crud în frigider; 9 luni congelat întreg',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05006', 'transavia.ro', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-ficat-pui',
      name: 'Chicken Liver',
      nameRo: 'Ficat de pui',
      brand: 'Fragedo (Transavia) / generic',
      category: 'fresh-meat',
      subcategory: 'Pui — organe',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tăviță mică lângă pipote', priceRon: 7.45, packGrams: 500, packLabel: 'tăviță 400–500 g', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft carne refrigerată, jos', priceRon: 6.36, packGrams: 400, packLabel: 'tăviță 400 g', note: 'Nu e mereu pe raft.' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne, măcelării', priceRon: 18, packGrams: 1000, packLabel: '1 kg la tarabă', note: 'Mai proaspăt, culoare mai vie.' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 13.5, packGrams: 1000, packLabel: 'caserolă 1 kg', note: '' }
      ],
      sibiuNote: 'Cel mai ieftin multivitamin din Sibiu: 15 lei/kg pentru 17 g proteină, 9 mg fier și 16 µg B12 la 100 g. Problema nu e prețul, e că majoritatea oamenilor îl urăsc. La Piața Cibin cere ficat cumpărat dimineața — culoarea trebuie să fie roșu-maro lucios, nu gri.',
      per100g: { kcal: 116, protein: 17, carbs: 0.7, sugars: 0, fat: 4.8, satFat: 1.6, fiber: 0, salt: 0.18 },
      micros: { ironMg: 9, zincMg: 2.7, b12Ug: 16.6, vitDUg: 0.4, potassiumMg: 230, cholesterolMg: 345 },
      serving: { grams: 120, label: '1 porție mică (120 g crud)' },
      effort: 2,
      timeMin: 14,
      activeTimeMin: 12,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie', 'strecurătoare', 'lapte (opțional)'],
        steps: [
          'Curăță ficații de membrane și de canalele verzui-albe; taie bucățile mari în două.',
          'Opțional dar recomandat: ține-i 30 de minute în lapte sau apă rece — scade gustul metalic.',
          'Scurge-i foarte bine și tamponează. Ficatul ud stropește violent.',
          'Călește o ceapă tăiată solzișori în ulei, 5 minute, apoi scoate-o.',
          'Foc mare, pune ficații într-un singur strat, 2 minute pe o parte, 2 pe cealaltă.',
          'Adaugă ceapa înapoi, sare ABIA ACUM (sarea pusă devreme îi întărește), piper, o lingură de vin alb.',
          'Oprește focul cât interiorul e încă ușor roz — ficatul supragătit devine granulos ca nisipul.'
        ],
        yieldNote: '1 kg ficat crud ≈ 700 g gătit'
      },
      taste: {
        profile: 'Mineral, metalic, dulceag-amărui, cu o intensitate care nu iartă',
        intensity: 5,
        sweetness: 2,
        saltiness: 1,
        umami: 5,
        richness: 4,
        texture: 'Cremoasă și mătăsoasă dacă e făcută corect; nisipoasă și sfărâmicioasă dacă e supragătită',
        notes: 'Nu există mijloc: fie îl adori, fie te scutură. Cu multă ceapă caramelizată și un strop de oțet balsamic devine acceptabil chiar și pentru sceptici. Gust: 32/100 și e o notă generoasă.'
      },
      stats: { taste: 32, satiety: 78, convenience: 45, versatility: 40 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 1, dinner: 4, beforeBed: 2 },
      timingNote: 'O dată pe săptămână, maximum de două ori — vitamina A se acumulează în ficat.',
      tags: ['high-protein', 'iron-rich', 'b12', 'budget', 'cheap-protein', 'whole-food', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Ceapă caramelizată', 'Mămăligă', 'Muștar', 'Vin roșu sec', 'Pătrunjel verde'],
      tips: [
        '100 g de ficat de pui acoperă necesarul zilnic de B12 de 7 ori și pe cel de fier de aproape jumătate.',
        'Dacă mirosul te deranjează, taie-l bucăți mici și amestecă-l 1:4 în carnea tocată pentru chiftele — nu se simte.',
        'Ficatul se gătește în 4 minute totale. Peste 6 minute e ratat definitiv.'
      ],
      warnings: [
        'Vitamina A: ~3500 µg retinol la 100 g. Femeile însărcinate trebuie să evite ficatul complet.',
        'Colesterol 345 mg/100 g și purine ridicate — atenție dacă ai gută.',
        'Maximum 1–2 porții de 100–150 g pe săptămână pentru un adult sănătos.'
      ],
      storage: 'Frigider 0–2 °C, cel mai rece raft. Organele se strică cel mai repede.',
      shelfLife: '1–2 zile în frigider; 3 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05027', 'Eticheta Fragedo ficat de pui']
    },

    {
      id: 'm-inimi-pui',
      name: 'Chicken Hearts',
      nameRo: 'Inimi de pui',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — organe',
      emoji: '🫀',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, tăviță lângă ficat și pipote', priceRon: 8.95, packGrams: 500, packLabel: 'tăviță 400–500 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 16.5, packGrams: 1000, packLabel: 'caserolă 1 kg', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne', priceRon: 20, packGrams: 1000, packLabel: '1 kg', note: 'Se vând repede dimineața.' }
      ],
      sibiuNote: 'Inimile de pui sunt subestimate cronic: gust de carne roșie, textură de mușchi, 15,6 g proteină și zero din gustul metalic al ficatului. Le găsești constant la Kaufland Vasile Aaron și la Selgros.',
      per100g: { kcal: 150, protein: 15.6, carbs: 0.7, sugars: 0, fat: 9.3, satFat: 2.7, fiber: 0, salt: 0.2 },
      micros: { ironMg: 5.9, zincMg: 7.3, b12Ug: 7.3, potassiumMg: 176, cholesterolMg: 136 },
      serving: { grams: 150, label: '1 porție (150 g crud)' },
      effort: 2,
      timeMin: 25,
      activeTimeMin: 12,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie cu capac', 'cuțit'],
        steps: [
          'Taie vârful cu vasele de sânge și strânge ușor fiecare inimă ca să iasă cheagurile; clătește și scurge bine.',
          'Foc mare, tigaie cu puțin ulei, rumenește inimile 4–5 minute până se colorează.',
          'Adaugă ceapă tocată și usturoi, mai lasă 3 minute.',
          'Toarnă 100 ml apă sau vin, pune capacul, foc mic, 15 minute — inimile au nevoie de fierbere ca să se înmoaie.',
          'Sare, piper, o lingură de smântână sau bulion la final.'
        ],
        yieldNote: '1 kg inimi crude ≈ 680 g gătite'
      },
      taste: {
        profile: 'Cărnos, mineral, mai apropiat de vită decât de pui',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 5,
        richness: 3,
        texture: 'Elastică și ușor tare la mușcătură; devine fragedă doar după 15 minute de înăbușit',
        notes: 'Mult mai ușor de mâncat decât ficatul. Textura de gumă e singurul obstacol, iar înăbușitul lung o rezolvă.'
      },
      stats: { taste: 55, satiety: 76, convenience: 40, versatility: 48 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 1, dinner: 4, beforeBed: 2 },
      timingNote: 'Prânz sau cină; conținutul mare de zinc și fier o face utilă în perioade de antrenament greu.',
      tags: ['high-protein', 'iron-rich', 'b12', 'budget', 'cheap-protein', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Mămăligă', 'Ceapă', 'Smântână', 'Orez', 'Cimbru'],
      tips: [
        'Cel mai bogat aliment obișnuit în zinc din raft: 7,3 mg/100 g, mai mult decât carnea de vită.',
        'Se fac excelent la frigărui pe grătar, marinate în soia și usturoi 2 ore.',
        'Nu sări peste etapa de înăbușit — 5 minute la tigaie te lasă cu gumă de mestecat.'
      ],
      warnings: ['Colesterol 136 mg/100 g.', 'Organele conțin purine — moderație dacă ai gută.'],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '1–2 zile în frigider; 3 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05028', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-pipote-pui',
      name: 'Chicken Gizzards',
      nameRo: 'Pipote de pui',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — organe',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, tăviță lângă ficat', priceRon: 7.95, packGrams: 500, packLabel: 'tăviță 500 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 14.5, packGrams: 1000, packLabel: 'caserolă 1 kg', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne', priceRon: 18, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Pipotele sunt cea mai slabă carne ieftină din Sibiu: 17,7 g proteină și doar 2,1 g grăsime la 15 lei/kg. Nimeni nu le cumpără, deci sunt aproape mereu disponibile.',
      per100g: { kcal: 92, protein: 17.7, carbs: 0, sugars: 0, fat: 2.1, satFat: 0.6, fiber: 0, salt: 0.17 },
      micros: { ironMg: 2.5, zincMg: 3, b12Ug: 1.1, potassiumMg: 237, cholesterolMg: 240 },
      serving: { grams: 150, label: '1 porție (150 g crud)' },
      effort: 3,
      timeMin: 75,
      activeTimeMin: 15,
      cooking: {
        method: 'slow',
        difficulty: 'easy',
        equipment: ['oală cu capac', 'cuțit'],
        steps: [
          'Verifică fiecare pipotă: dacă a rămas membrana galbenă interioară, îndepărteaz-o (de obicei sunt curățate).',
          'Rumenește-le 5 minute în ulei cu o ceapă mare.',
          'Adaugă 2 morcovi, 2 foi de dafin, boabe de piper și apă cât să le acopere.',
          'Fierbe la foc mic, cu capac, 60 de minute. Sub 50 de minute rămân tari ca guma.',
          'Sare la final, plus bulion sau pastă de roșii dacă vrei o tocană.',
          'Ideal la oala sub presiune: 25 de minute și sunt fragede.'
        ],
        yieldNote: '1 kg pipote crude ≈ 620 g gătite (pierd mult prin fierbere lungă)'
      },
      taste: {
        profile: 'Discret, ușor mineral, fără gustul agresiv al ficatului',
        intensity: 2,
        sweetness: 0,
        saltiness: 1,
        umami: 3,
        richness: 1,
        texture: 'Tare și cauciucată dacă nu o fierbi 60 de minute; după, densă și plăcută la mestecat',
        notes: 'Nu e o delicatesă, dar e o proteină ieftină și extrem de slabă. Textura densă chiar place unora — e cea mai apropiată de un mușchi de lucru.'
      },
      stats: { taste: 42, satiety: 80, convenience: 25, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 1, dinner: 4, beforeBed: 2 },
      timingNote: 'Tocană de weekend care ține trei zile; proteină ieftină pentru cine gătește în serie.',
      tags: ['high-protein', 'low-fat', 'protein-dense', 'budget', 'cheap-protein', 'whole-food', 'iron-rich', 'batch-cook'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Mămăligă', 'Sos de roșii', 'Usturoi', 'Cartofi', 'Dafin'],
      tips: [
        'Cel mai bun raport proteină/calorii din tot raftul de carne: 77% din calorii vin din proteină.',
        'Oala sub presiune reduce timpul de la 60 la 25 de minute.',
        'La 15 lei/kg cu 17,7 g proteină înseamnă 11,8 g proteină per leu — bate pieptul de pui de 1,7 ori.'
      ],
      warnings: ['Colesterol relativ ridicat (240 mg/100 g).', 'Necesită fierbere lungă — nu e mâncare de 15 minute.'],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '1–2 zile în frigider; 4 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05029', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-gat-pui',
      name: 'Chicken Necks',
      nameRo: 'Gât de pui',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — organe',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie, la cerere sau tăviță mică', priceRon: 9.9, packGrams: 1000, packLabel: '1 kg', note: 'Nu e mereu ambalat; întreabă la carmangerie.' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne, măcelării de pasăre', priceRon: 10, packGrams: 1000, packLabel: '1 kg la tarabă', note: 'Cel mai sigur loc din Sibiu unde găsești gâturi.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, caserolă', priceRon: 8.9, packGrams: 1000, packLabel: 'caserolă 1 kg', note: '' }
      ],
      sibiuNote: 'Gâturile de pui sunt ingredientul secret al supei românești bune — colagen, gelatină, gust. La 10 lei/kg sunt cea mai ieftină carne din Sibiu, dar 60% e os și piele. Le cumperi pentru zeamă, nu pentru macro.',
      per100g: { kcal: 250, protein: 14.5, carbs: 0, sugars: 0, fat: 22, satFat: 6, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1.2, zincMg: 2.4, b12Ug: 0.4, potassiumMg: 150, cholesterolMg: 110 },
      serving: { grams: 200, label: '4–5 gâturi (200 g crud, cu os)' },
      effort: 3,
      timeMin: 120,
      activeTimeMin: 10,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală mare', 'spumieră'],
        steps: [
          'Pune gâturile în apă RECE, 3 litri la 1 kg. Apa rece extrage colagenul; apa fierbinte îl blochează.',
          'Adu încet la fierbere și spumează cu grijă primele 10 minute.',
          'Adaugă morcov, păstârnac, ceapă întreagă, țelină, 5 boabe piper.',
          'Fierbe la foc foarte mic, aproape fără clocot, 90–120 de minute.',
          'Strecoară, sare la final, adaugă pătrunjel și leuștean.',
          'Carnea de pe gâturi se desprinde ușor — folosește-o la o salată de pui sau la orez.'
        ],
        yieldNote: '1 kg gâturi ≈ 250 g carne curată + 2,5 l supă concentrată'
      },
      taste: {
        profile: 'Gustul de supă de duminică, dulceag și gelatinos',
        intensity: 3,
        sweetness: 1,
        saltiness: 1,
        umami: 5,
        richness: 4,
        texture: 'Carnea e fragedă și filamentoasă; zeama se face gelatină la frigider — semn bun',
        notes: 'Ca sursă de proteină e mediocru (mult os, multă piele). Ca bază de supă e neîntrecut și costă nimic.'
      },
      stats: { taste: 48, satiety: 65, convenience: 20, versatility: 45 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 2 },
      timingNote: 'Supa de gâturi e mâncare de iarnă și de mahmureală, nu de plan de proteină.',
      tags: ['budget', 'cheap-protein', 'whole-food', 'winter', 'hangover', 'romanian-classic', 'batch-cook'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Tăiței de casă', 'Leuștean', 'Smântână', 'Ardei iute', 'Morcov'],
      tips: [
        'Dacă zeama se închegă la frigider, ai extras colagenul corect. Dacă rămâne apă, ai fiert prea tare sau prea puțin.',
        'Adună gâturi, aripi și carcase într-o pungă la congelator până strângi 1,5 kg, apoi fă 4 litri de supă odată.',
        'Nutriția e pentru gât cu piele; dacă scoți pielea, grăsimea scade la ~8 g/100 g.'
      ],
      warnings: ['60% din greutate e os și piele necomestibile.', 'Grăsime mare (22 g/100 g) dacă mănânci și pielea.'],
      storage: 'Frigider 0–2 °C sau direct la congelator.',
      shelfLife: '1–2 zile în frigider; 6 luni congelat',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05031', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-carne-tocata-pui',
      name: 'Ground Chicken',
      nameRo: 'Carne tocată de pui',
      brand: 'K-Purland (Kaufland) / generic',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne tocată, caserole cu folie', priceRon: 13.95, packGrams: 500, packLabel: 'caserolă 500 g', note: 'Se tocă și la cerere din pieptul ales de tine.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina de carne tocată', priceRon: 11.96, packGrams: 400, packLabel: 'caserolă 400 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, tocare la cerere', priceRon: 26.5, packGrams: 1000, packLabel: 'caserolă 1 kg', note: 'Cere tocare din pulpă dezosată — iese mai bună.' }
      ],
      sibiuNote: 'Trucul din Sibiu: la carmangeria Kaufland sau Selgros ceri să-ți toace pulpe dezosate la 27 lei/kg în loc să iei tocătura ambalată. Știi exact ce conține și e mai gustoasă. Durează 3 minute.',
      per100g: { kcal: 143, protein: 17.4, carbs: 0, sugars: 0, fat: 8.1, satFat: 2.3, fiber: 0, salt: 0.16 },
      micros: { ironMg: 0.9, zincMg: 1.4, b12Ug: 0.5, potassiumMg: 280, cholesterolMg: 80 },
      serving: { grams: 150, label: '3 chiftele medii (150 g crud)' },
      effort: 3,
      timeMin: 30,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['bol', 'tigaie', 'răzătoare'],
        steps: [
          'Amestecă 500 g tocătură cu 1 ou, 1 ceapă rasă și stoarsă, 2 linguri pesmet, usturoi, mărar, sare, piper.',
          'Frământă 2 minute — proteinele trebuie să lege, altfel chiftelele se sfărâmă.',
          'Odihnește compoziția 20 de minute la frigider; se modelează mult mai ușor.',
          'Formează chiftele de 50 g, aplatizează-le ușor.',
          'Tigaie cu 2 linguri ulei, foc mediu, 4 minute pe fiecare parte.',
          'Verifică 74 °C în centru — tocătura de pui nu se mănâncă în sânge.'
        ],
        yieldNote: '500 g tocătură crudă ≈ 380 g chiftele gătite'
      },
      taste: {
        profile: 'Mai blând și mai dulceag decât tocătura de porc, fără nota de grăsime',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 3,
        richness: 2,
        texture: 'Poate ieși uscată și sfărâmicioasă dacă nu adaugi ceapă rasă sau puțin iaurt',
        notes: 'Nu se compară cu tocătura de porc la gust, dar are jumătate din grăsime. Cu ceapă rasă și mărar devine o chiftea onestă.'
      },
      stats: { taste: 60, satiety: 80, convenience: 50, versatility: 88 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Bază bună de meal prep — chiftele, sos bolognese ușor, umplutură pentru ardei.',
      tags: ['high-protein', 'meal-prep', 'batch-cook', 'cheap-protein', 'kid-friendly', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de roșii', 'Paste integrale', 'Iaurt grecesc', 'Mărar', 'Ardei copt'],
      tips: [
        'Tocătura de pui e cel mai perisabil tip de carne — folosește-o în 24 de ore sau congeleaz-o imediat.',
        'Adaugă 2 linguri de iaurt grecesc la 500 g: rămâne suculentă și crește proteina.',
        'Cere tocare din pulpă, nu din piept — 4 g grăsime în plus salvează textura complet.'
      ],
      warnings: [
        'Tocarea multiplică suprafața expusă bacteriilor: 74 °C obligatoriu, fără compromis.',
        'Nu gusta compoziția crudă ca să verifici sarea — prăjește o bucățică mică.'
      ],
      storage: 'Frigider 0–2 °C, cel mai rece raft, maximum 24 h.',
      shelfLife: '1 zi în frigider; 3 luni congelată',
      dataConfidence: 'high',
      sources: ['Eticheta K-Purland carne tocată pui', 'USDA FDC 171477']
    },

    {
      id: 'm-piept-pui-marinat',
      name: 'Marinated Chicken Breast, Ready to Cook',
      nameRo: 'Piept de pui marinat, gata de gătit',
      brand: 'K-Purland (Kaufland) / Fragedo Deli',
      category: 'fresh-meat',
      subcategory: 'Pui — carne albă',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne marinată, lângă mici și frigărui', priceRon: 21.5, packGrams: 500, packLabel: 'caserolă 500 g', note: 'Variante: usturoi, curry, mediteranean.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina carne pregătită pentru grătar', priceRon: 22.9, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, zona marinate', priceRon: 39.9, packGrams: 1000, packLabel: 'tavă 1 kg', note: '' }
      ],
      sibiuNote: 'Plătești 7–9 lei/kg în plus față de pieptul simplu pentru ulei, sare și boia. Din punct de vedere financiar e o prostie; din punct de vedere al serilor în care nu ai chef de nimic, e salvarea. Kaufland-ul de pe Șoseaua Alba Iulia are cel mai mare raft de marinate.',
      per100g: { kcal: 126, protein: 20, carbs: 2.5, sugars: 1.5, fat: 4, satFat: 0.8, fiber: 0.2, salt: 1.1 },
      micros: { ironMg: 0.5, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 320, cholesterolMg: 58 },
      serving: { grams: 200, label: '1 porție (200 g crud)' },
      effort: 2,
      timeMin: 14,
      activeTimeMin: 6,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie grill sau grătar'],
        steps: [
          'Scoate din caserolă și lasă 10 minute la temperatura camerei.',
          'Tigaie grill bine încinsă, FĂRĂ ulei suplimentar — marinada are deja ulei.',
          'Prăjește 4 minute pe fiecare parte pentru bucăți de 1,5 cm.',
          'Atenție la zahărul din marinadă: se arde repede, ține focul mediu-mare, nu maxim.',
          'Verifică 74 °C, apoi odihnește 4 minute.'
        ],
        yieldNote: '1 kg marinat crud ≈ 690 g gătit'
      },
      taste: {
        profile: 'Condimentat corect dar generic, cu sare mai multă decât ai pune tu',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Mai fragedă decât pieptul simplu — marinada acidă a înmuiat fibrele',
        notes: 'Gustul e onest, nu spectaculos. Marinada mediteraneană e cea mai reușită; cea de curry e cel mai des prea dulce.'
      },
      stats: { taste: 66, satiety: 84, convenience: 78, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Cina de marți seara când ai ajuns acasă la 19:30 — 14 minute și e gata.',
      tags: ['high-protein', 'grab-and-go', 'processed', 'mid-price', 'post-workout', 'summer'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Salată verde', 'Lipie', 'Iaurt cu usturoi', 'Cartofi la cuptor', 'Legume la grătar'],
      tips: [
        'Marinada adaugă ~1 g sare la 100 g — o porție de 200 g îți dă 2,2 g sare, o treime din maximul zilnic.',
        'Poți face acasă exact același lucru cu 3 lei: iaurt, boia, usturoi, ulei, sare, 2 ore la frigider.',
        'Verifică lista de ingrediente: unele conțin sirop de glucoză și amidon adăugat, care diluează proteina.'
      ],
      warnings: ['Sare 1,1 g/100 g — de 7 ori mai mult decât pieptul simplu.', 'Marinada maschează mirosul de carne veche; verifică data cu atenție dublă.'],
      storage: 'Frigider 0–4 °C în ambalajul original.',
      shelfLife: '3–5 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta K-Purland piept marinat', 'kaufland.ro']
    },

    {
      id: 'm-snitele-pui-pane',
      name: 'Breaded Chicken Schnitzel, Raw',
      nameRo: 'Șnițele de pui pane, crude',
      brand: 'K-Purland (Kaufland) / generic',
      category: 'fresh-meat',
      subcategory: 'Pui — carne albă',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne pregătită, lângă marinate', priceRon: 19.9, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina carne pregătită', priceRon: 21.5, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Profi', availability: 'occasional', aisle: 'Vitrina refrigerată', priceRon: 12.9, packGrams: 300, packLabel: 'caserolă 300 g', note: '' }
      ],
      sibiuNote: 'Șnițelele pane gata împanate sunt capcana clasică: plătești 40 lei/kg pentru un produs care e 30% pesmet. Dacă tot vrei șnițel, cumpără piept la 33 lei/kg și împanează singur — costă 36 lei/kg total și controlezi grosimea crustei.',
      per100g: { kcal: 192, protein: 15, carbs: 14, sugars: 1, fat: 8.5, satFat: 1.5, fiber: 0.8, salt: 1.2 },
      serving: { grams: 180, label: '2 șnițele (180 g crud)' },
      effort: 3,
      timeMin: 18,
      activeTimeMin: 15,
      cooking: {
        method: 'fry',
        difficulty: 'easy',
        equipment: ['tigaie adâncă', 'clește', 'prosop de hârtie'],
        steps: [
          'Încinge 1 cm de ulei în tigaie la 175 °C — o firimitură de pesmet trebuie să sfârâie imediat.',
          'Pune maximum 2 șnițele odată; aglomerarea scade temperatura uleiului și crusta se îmbibă.',
          'Prăjește 3–4 minute pe fiecare parte, până e auriu-închis.',
          'Scoate pe grătar, nu pe prosop de hârtie — pe hârtie se înmoaie crusta dedesubt.',
          'Sare imediat, cât e fierbinte.',
          'La airfryer: pulverizează ulei, 190 °C, 12 minute, întorci la 7 minute.'
        ],
        yieldNote: '1 kg șnițele crude ≈ 800 g prăjite (absorb ulei, pierd apă)'
      },
      taste: {
        profile: 'Crocant, sărat, cu gust de pesmet mai mult decât de pui',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Crustă crocantă peste carne care de obicei e prea subțire și uscată',
        notes: 'Copiii le adoră. Adulții care numără proteina ar trebui să observe că 100 g au doar 15 g proteină și 14 g carbohidrați din pesmet.'
      },
      stats: { taste: 72, satiety: 62, convenience: 62, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Masă de confort, nu masă de performanță — grăsimea din prăjire dublează caloriile.',
      tags: ['high-protein', 'processed', 'kid-friendly', 'mid-price', 'high-kcal'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Cartofi piure', 'Lămâie', 'Salată de varză', 'Muștar', 'Murături'],
      tips: [
        'Prăjit, un șnițel ajunge la ~260 kcal/100 g. Proteina rămâne 18 g. Randament slab.',
        'Împanează singur cu făină de migdale sau pesmet integral și scazi carbohidrații la 6 g.',
        'Uleiul trebuie să fie la 175 °C. Sub 160 °C șnițelul devine burete de ulei.'
      ],
      warnings: [
        'Conține gluten din pesmet.',
        'Prăjirea în ulei reutilizat de mai multe ori produce aldehide — schimbă uleiul.',
        'Sare 1,2 g/100 g deja înainte de a-l mai săra tu.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 3 luni congelat crud',
      dataConfidence: 'medium',
      sources: ['Eticheta K-Purland șnițele pui', 'CIQUAL 36002']
    },

    {
      id: 'm-fasii-piept-pui',
      name: 'Chicken Breast Strips, Stir-fry Cut',
      nameRo: 'Fâșii de piept de pui (pentru stir-fry)',
      brand: 'Fragedo Deli (Transavia)',
      category: 'fresh-meat',
      subcategory: 'Pui — carne albă',
      emoji: '🐔',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft autoservire pasăre, caserole Fragedo Deli', priceRon: 22.5, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina pasăre', priceRon: 23.9, packGrams: 450, packLabel: 'caserolă 450 g', note: '' },
        { name: 'Mega Image', availability: 'occasional', aisle: 'Raft carne refrigerată', priceRon: 24.9, packGrams: 400, packLabel: 'caserolă 400 g', note: '' }
      ],
      sibiuNote: 'Plătești ~10 lei/kg în plus pentru ca cineva să taie pieptul în fâșii. Merită doar dacă gătești seara târziu și fiecare minut contează. Altfel, un cuțit ascuțit face treaba în 90 de secunde.',
      per100g: { kcal: 110, protein: 23, carbs: 0, sugars: 0, fat: 1.8, satFat: 0.5, fiber: 0, salt: 0.15 },
      micros: { ironMg: 0.4, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 350, cholesterolMg: 65 },
      serving: { grams: 180, label: '1 porție stir-fry (180 g crud)' },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 12,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['wok sau tigaie mare', 'spatulă'],
        steps: [
          'Amestecă fâșiile cu 1 lingură sos de soia și 1 linguriță amidon — tehnica velveting, ține carnea suculentă.',
          'Încinge wokul la maxim, adaugă ulei cu punct de fum ridicat.',
          'Aruncă fâșiile într-un singur strat, nu le mișca 60 de secunde.',
          'Amestecă energic încă 2–3 minute, până nu mai e roz nicăieri.',
          'Scoate carnea, gătește legumele, apoi combină la final 30 de secunde.'
        ],
        yieldNote: '500 g fâșii crude ≈ 350 g gătite'
      },
      taste: {
        profile: 'Identic cu pieptul întreg — neutru, curat, dependent de sos',
        intensity: 1,
        sweetness: 1,
        saltiness: 0,
        umami: 2,
        richness: 1,
        texture: 'Se usucă și mai repede decât bucata întreagă din cauza suprafeței mari',
        notes: 'Comoditate pură. Gustul nu e cu nimic mai bun, iar riscul de a-l usca e mai mare.'
      },
      stats: { taste: 46, satiety: 86, convenience: 72, versatility: 90 },
      timing: { breakfast: 1, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Cea mai rapidă masă cu proteină reală: 12 minute din frigider în farfurie.',
      tags: ['low-fat', 'protein-dense', 'grab-and-go', 'mid-price', 'post-workout', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Legume asiatice congelate', 'Sos de soia', 'Orez', 'Ghimbir', 'Susan'],
      tips: [
        'Velveting cu amidon și soia e diferența dintre fâșii suculente și fâșii de carton. Costă 20 de secunde.',
        'Fâșiile se gătesc în 3–4 minute totale. Peste 5 minute sunt distruse.',
        'Congelează-le întinse pe o tavă, apoi mută-le în pungă: se dezlipesc una câte una.'
      ],
      warnings: ['74 °C, ca la orice pui.', 'Suprafața mare de tăiere = degradare mai rapidă; folosește în 24–48 h.'],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '2 zile în frigider; 4 luni congelate',
      dataConfidence: 'medium',
      sources: ['transavia.ro/fragedo', 'USDA SR Legacy 05062']
    },

    {
      id: 'm-carcase-pui-supa',
      name: 'Chicken Backs and Carcasses',
      nameRo: 'Carcase și spinări de pui (pentru supă)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — organe',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne, măcelăriile de pasăre', priceRon: 7, packGrams: 1000, packLabel: '1 kg', note: 'Uneori le primești gratis dacă cumperi un pui întreg.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, caserole mari', priceRon: 13, packGrams: 2000, packLabel: 'caserolă 2 kg', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie, la cerere', priceRon: 8.5, packGrams: 1000, packLabel: '1 kg', note: 'Cere la tejghea, rar sunt pe raft.' }
      ],
      sibiuNote: 'Cea mai ieftină calorie animală din Sibiu, 6–8 lei/kg. La halele din Piața Cibin, măcelarii de pasăre le dau adesea aproape pe degeaba dimineața. Nu sunt o sursă serioasă de proteină, dar transformă apa în zeamă adevărată.',
      per100g: { kcal: 200, protein: 14, carbs: 0, sugars: 0, fat: 16, satFat: 4.5, fiber: 0, salt: 0.13 },
      serving: { grams: 300, label: '1 carcasă (300 g crud, cu os)' },
      effort: 3,
      timeMin: 150,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['oală mare de 5 l', 'spumieră', 'strecurătoare'],
        steps: [
          'Opțional, pentru zeamă închisă la culoare: rumenește carcasele 25 de minute la 220 °C în cuptor.',
          'Pune-le în apă rece, 3 litri la 1 kg.',
          'Adu la fierbere foarte încet și spumează fără milă primele 15 minute.',
          'Adaugă morcov, ceapă, țelină, păstârnac, dafin, boabe de piper.',
          'Fierbe 2–2,5 ore la foc minim, fără clocot puternic.',
          'Strecoară prin sită fină, răcește rapid, pune la frigider peste noapte și scoate grăsimea solidificată de deasupra.'
        ],
        yieldNote: '1 kg carcase ≈ 150 g carne recuperabilă + 2,5 l supă gelatinoasă'
      },
      taste: {
        profile: 'Zeamă profundă, dulce-sărată, gustul de bază al oricărei supe românești',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 5,
        richness: 3,
        texture: 'Lichidă, cu corp; se gelifică la rece dacă ai făcut-o corect',
        notes: 'Ca aliment în sine, aproape zero. Ca ingredient care ridică orice supă, orez sau sos — indispensabil și practic gratuit.'
      },
      stats: { taste: 40, satiety: 45, convenience: 15, versatility: 70 },
      timing: { breakfast: 3, preWorkout: 1, postWorkout: 2, lunch: 3, snack: 2, dinner: 3, beforeBed: 2 },
      timingNote: 'Bază pentru supe și sosuri; supa clară în sine are doar 2–4 g proteină la 250 ml.',
      tags: ['budget', 'cheap-protein', 'whole-food', 'batch-cook', 'winter', 'hangover', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Legume rădăcinoase', 'Leuștean', 'Tăiței', 'Găluște de griș', 'Ardei iute'],
      tips: [
        'Supa strecurată are doar 2–4 g proteină la 250 ml — nu confunda gustul bogat cu valoarea nutrițională.',
        'Congelează supa în cuburi de gheață și folosește 2–3 cuburi în loc de apă la orez sau sos.',
        'Grăsimea scoasă de deasupra e schmaltz — perfectă pentru cartofi prăjiți, nu o arunca.'
      ],
      warnings: ['Sursă proastă de proteină per kilogram cumpărat — 85% e os.', 'Supa concentrată e bogată în purine.'],
      storage: 'Frigider 0–2 °C maximum 24 h, sau direct congelator.',
      shelfLife: '1 zi crud; supa 4 zile la frigider, 6 luni congelată',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'USDA SR Legacy 05010']
    },

    {
      id: 'm-pui-de-tara',
      name: 'Free-range Farm Chicken',
      nameRo: 'Pui de țară (crescut în gospodărie)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Pui — întreg',
      emoji: '🐓',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne + producători locali în piața de afară', priceRon: 57.6, packGrams: 1800, packLabel: 'pui 1,5–2,2 kg', note: 'Sâmbăta dimineața e cea mai bună zi.' },
        { name: 'Măcelărie locală', availability: 'occasional', aisle: 'Măcelării din Sibiu cu furnizori din Mărginimea Sibiului', priceRon: 61.2, packGrams: 1800, packLabel: '1,8 kg', note: 'Comandă cu 2–3 zile înainte.' }
      ],
      sibiuNote: 'În Piața Cibin, sâmbăta dimineața, producătorii din zona Săliște–Rășinari aduc pui crescuți 3–4 luni. Costă dublu față de Lidl, dar carnea e complet altceva: mai fermă, mai galbenă, cu grăsime aromată. Pentru supă e singura variantă care merită.',
      per100g: { kcal: 180, protein: 20, carbs: 0, sugars: 0, fat: 11, satFat: 3.1, fiber: 0, salt: 0.13 },
      micros: { ironMg: 1.2, zincMg: 1.8, b12Ug: 0.5, omega3Mg: 120, potassiumMg: 260, cholesterolMg: 85 },
      serving: { grams: 350, label: '1/4 de pui (350 g crud, cu os)' },
      effort: 4,
      timeMin: 180,
      activeTimeMin: 25,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['oală mare', 'spumieră', 'cuțit de tranșat'],
        steps: [
          'Puiul de țară are mușchi mult mai dezvoltați — la cuptor iese tare. Fierbe-l sau înăbușă-l.',
          'Tranșează-l în 8 bucăți; pune pieptul deoparte pentru o tigaie rapidă.',
          'Restul, în apă rece cu legume rădăcinoase, adu încet la fierbere, spumează 15 minute.',
          'Fierbe 2–2,5 ore la foc mic. Un pui de fermă are nevoie de dublul timpului față de unul industrial.',
          'Verifică cu furculița: carnea trebuie să se desprindă singură de pe os.',
          'Sare la final, plus leuștean, tarhon și smântână dacă vrei ciorbă.'
        ],
        yieldNote: '1 pui de țară de 1,8 kg ≈ 900 g carne fiartă + 3 l zeamă foarte gelatinoasă'
      },
      taste: {
        profile: 'Intens, aproape de vânat, cu grăsime galbenă parfumată',
        intensity: 5,
        sweetness: 2,
        saltiness: 1,
        umami: 5,
        richness: 4,
        texture: 'Fibre groase și ferme; devine fragedă doar după 2 ore de fierbere',
        notes: 'Prima oară e un șoc: gustul e de 3 ori mai puternic decât puiul de supermarket. Nu e potrivit pentru orice rețetă — la stir-fry e prea tare, la ciorbă e regele.'
      },
      stats: { taste: 88, satiety: 85, convenience: 18, versatility: 55 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 2, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Proiect de duminică. Ciorba rezultată e mâncarea de luni și marți.',
      tags: ['high-protein', 'whole-food', 'premium', 'local-sibiu', 'winter', 'batch-cook', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Tăiței de casă', 'Leuștean', 'Smântână', 'Ardei iute', 'Mămăligă'],
      tips: [
        'Nu-l coace la cuptor ca pe unul industrial — mușchii lucrați au nevoie de căldură umedă și timp.',
        'Cere să vezi ficatul și pipota: la puiul de țară sunt mai mari și mai închise la culoare.',
        'Grăsimea galbenă e semn de porumb în hrană și de creștere lentă, nu un defect.'
      ],
      warnings: [
        'Fără trasabilitate industrială — cumpără doar de la producători cunoscuți din piață.',
        'Necesită 2–2,5 ore de gătit; nu e o opțiune de zi de lucru.',
        'Prețul dublu nu se traduce în proteină dublă — plătești pentru gust.'
      ],
      storage: 'Frigider 0–2 °C; ideal gătit în ziua cumpărării.',
      shelfLife: '1–2 zile în frigider; 6 luni congelat',
      dataConfidence: 'medium',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'CIQUAL 36104 (poulet fermier)']
    },

    {
      id: 'm-piept-curcan',
      name: 'Turkey Breast, Boneless Skinless',
      nameRo: 'Piept de curcan dezosat, fără piele',
      brand: 'Peneș Curcanul (Agricola) / generic',
      category: 'fresh-meat',
      subcategory: 'Curcan',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, secțiunea curcan', priceRon: 42.9, packGrams: 1000, packLabel: 'tavă ~800 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole mari de curcan', priceRon: 77.8, packGrams: 2000, packLabel: 'caserolă ~2 kg', note: 'Cel mai bun preț pe kg din oraș.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina pasăre', priceRon: 31.43, packGrams: 700, packLabel: 'tavă ~700 g', note: '' },
        { name: 'Penny', availability: 'occasional', aisle: 'Vitrina refrigerată', priceRon: 25.14, packGrams: 600, packLabel: 'tavă ~600 g', note: 'Stoc inconstant.' }
      ],
      sibiuNote: 'Curcanul e mai slab decât puiul (23,5 g proteină, 1,2 g grăsime) dar costă cu 25% mai mult și e mai greu de găsit în Sibiu. Selgros are cel mai constant stoc; supermarketurile mici îl au doar în preajma sărbătorilor.',
      per100g: { kcal: 105, protein: 23.5, carbs: 0, sugars: 0, fat: 1.2, satFat: 0.4, fiber: 0, salt: 0.13 },
      micros: { ironMg: 0.7, zincMg: 1.2, b12Ug: 0.9, potassiumMg: 320, cholesterolMg: 60 },
      serving: { grams: 180, label: '1 porție (180 g crud)' },
      effort: 2,
      timeMin: 18,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie', 'termometru de carne', 'ciocan de șnițele'],
        steps: [
          'Taie felii de 1,5 cm perpendicular pe fibră; curcanul are fibre mai lungi decât puiul.',
          'Bate ușor feliile la 1 cm ca să se gătească în același timp.',
          'Sare, piper, salvie sau cimbru — curcanul suportă ierburi puternice.',
          'Tigaie mediu-fierbinte cu unt și ulei, 3 minute pe fiecare parte.',
          'Scoate la 72 °C: se ridică la 74 °C în odihnă. Curcanul se usucă și mai brutal decât puiul.',
          'Odihnește 5 minute obligatoriu.'
        ],
        yieldNote: '1 kg piept de curcan crud ≈ 690 g gătit; proteina urcă la ~34 g/100 g'
      },
      taste: {
        profile: 'Sec, ușor dulceag, cu o notă mai profundă decât puiul',
        intensity: 2,
        sweetness: 2,
        saltiness: 0,
        umami: 3,
        richness: 1,
        texture: 'Foarte slabă, cu tendință puternică de a deveni făinoasă la supragătire',
        notes: 'Sincer, are mai puțină indulgență decât pieptul de pui: fereastra de gătire e de 2 minute. Dar dacă îl prinzi bine, are mai mult gust.'
      },
      stats: { taste: 50, satiety: 90, convenience: 45, versatility: 80 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Cea mai slabă carne obișnuită din raft — 90% din calorii vin din proteină. Ideal pe deficit caloric strict.',
      tags: ['low-fat', 'protein-dense', 'cutting', 'meal-prep', 'whole-food', 'complete-protein', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de merișoare', 'Salvie', 'Piure de cartofi', 'Sparanghel', 'Orez sălbatic'],
      tips: [
        'Cel mai mare procent de calorii din proteină dintre toate cărnurile din acest ghid: ~89%.',
        'Saramura e practic obligatorie: 1 l apă + 50 g sare + 2 linguri zahăr, 1 oră. Fără ea iese uscat.',
        'Nutriția e pentru carne crudă; 100 g gătit ajung la ~34 g proteină.'
      ],
      warnings: ['74 °C, ca la orice pasăre.', 'Fereastră de gătire foarte îngustă — un termometru costă 40 de lei și îți salvează carnea de 43 lei/kg.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 05165', 'agricola.ro']
    },

    {
      id: 'm-pulpa-curcan',
      name: 'Turkey Thigh, Boneless',
      nameRo: 'Pulpă de curcan dezosată',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Curcan',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, secțiunea curcan', priceRon: 59.8, packGrams: 2000, packLabel: 'caserolă ~2 kg', note: '' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie', priceRon: 32.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona carne refrigerată', priceRon: 72.25, packGrams: 2500, packLabel: 'caserolă 2,5 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Pulpa de curcan e cea mai bună afacere din raftul de curcan: 19,5 g proteină la 30 lei/kg, imposibil de uscat, gust apropiat de vită slabă. În Sibiu o găsești constant doar la Selgros și Metro.',
      per100g: { kcal: 128, protein: 19.5, carbs: 0, sugars: 0, fat: 5.5, satFat: 1.8, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.4, zincMg: 3, b12Ug: 1.6, potassiumMg: 290, cholesterolMg: 78 },
      serving: { grams: 200, label: '1 porție (200 g crud)' },
      effort: 3,
      timeMin: 75,
      activeTimeMin: 15,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['vas de yena cu capac', 'termometru'],
        steps: [
          'Rulează pulpa dezosată și leag-o cu sfoară, sau las-o întinsă dacă vrei felii.',
          'Freacă cu sare, piper, boia afumată, usturoi și cimbru.',
          'Rumenește 4 minute pe fiecare parte într-o tigaie foarte încinsă.',
          'Mută în vas, adaugă 150 ml supă sau vin alb, acoperă.',
          'Cuptor 170 °C, 55–65 de minute, până la 78–80 °C în centru.',
          'Odihnește 10 minute, apoi taie felii subțiri împotriva fibrei.'
        ],
        yieldNote: '1 kg pulpă crudă ≈ 700 g gătită'
      },
      taste: {
        profile: 'Mai închisă la culoare și mai gustoasă decât pieptul, cu o notă ușor sălbatică',
        intensity: 3,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 2,
        texture: 'Fibre mai groase, dar suculentă și iertătoare la temperatură',
        notes: 'Compromisul corect: aproape la fel de slabă ca pieptul, dar cu de trei ori mai mult gust și fără riscul de a o rata.'
      },
      stats: { taste: 70, satiety: 87, convenience: 40, versatility: 78 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Meal prep de duminică — se feliază rece excelent pentru sandvișuri de birou.',
      tags: ['high-protein', 'meal-prep', 'batch-cook', 'whole-food', 'mid-price', 'iron-rich', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi dulci', 'Varză roșie călită', 'Muștar cu miere', 'Ciuperci', 'Orez brun'],
      tips: [
        'Feliată subțire după răcire completă, înlocuiește șunca din sandviș la o treime din prețul mezelurilor bune.',
        'Rulată și legată, arată ca o ruladă de restaurant și se taie perfect.',
        'Merge excelent la slow cooker: 6 ore pe low cu ceapă și boia.'
      ],
      warnings: ['74 °C minim; pentru textură optimă mergi la 78 °C.', 'Verifică să nu fi rămas tendoane albe — se taie greu după gătit.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05167', 'selgros.ro carne curcan']
    },

    {
      id: 'm-snitel-curcan',
      name: 'Turkey Escalope, Thin Cut',
      nameRo: 'Șnițel de curcan (felii subțiri, neîmpanate)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Curcan',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, tăvi cu felii de curcan', priceRon: 22.95, packGrams: 500, packLabel: 'tavă 500 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Vitrina pasăre', priceRon: 21.56, packGrams: 450, packLabel: 'tavă 450 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, feliere la cerere', priceRon: 41.9, packGrams: 1000, packLabel: '1 kg', note: 'Cere să-ți felieze pieptul întreg — costă mai puțin.' }
      ],
      sibiuNote: 'Feliile gata tăiate costă cu 3–5 lei/kg mai mult decât pieptul întreg. La carmangeria Selgros ți-l feliază gratis dacă ceri — 2 minute de așteptare, 5 lei economisiți la kilogram.',
      per100g: { kcal: 106, protein: 23.5, carbs: 0, sugars: 0, fat: 1.3, satFat: 0.4, fiber: 0, salt: 0.13 },
      micros: { ironMg: 0.7, zincMg: 1.2, b12Ug: 0.9, potassiumMg: 320, cholesterolMg: 60 },
      serving: { grams: 160, label: '2 felii subțiri (160 g crud)' },
      effort: 2,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'clește'],
        steps: [
          'Feliile de 8 mm nu au nevoie de bătut. Sare, piper, un praf de nucșoară.',
          'Tigaie foarte încinsă cu unt clarifiat sau ulei.',
          'Doar 90 de secunde pe fiecare parte. Serios, atât.',
          'Stinge cu o lingură de vin alb și una de suc de lămâie, direct peste carne.',
          'Servește imediat — la felii atât de subțiri odihna nu ajută, se răcesc.'
        ],
        yieldNote: '1 kg felii crude ≈ 660 g gătite (suprafață mare, pierdere mai mare)'
      },
      taste: {
        profile: 'Delicat, ușor dulce, dominat de ce pui peste el',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 3,
        richness: 1,
        texture: 'Subțire și fragedă dacă respecți cele 3 minute; hârtie dacă nu',
        notes: 'Cea mai rapidă proteină reală din întreg ghidul, dar cu marja de eroare cea mai mică. Cronometru, nu ochiometru.'
      },
      stats: { taste: 55, satiety: 88, convenience: 62, versatility: 72 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Când ai 10 minute și vrei 38 g proteină, asta e opțiunea.',
      tags: ['low-fat', 'protein-dense', 'cutting', 'post-workout', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Lămâie', 'Capere', 'Salată rucola', 'Piure de mazăre', 'Unt cu ierburi'],
      tips: [
        'Piccata de curcan: după ce scoți carnea, pune în tigaie unt, lămâie și capere — 40 de secunde și ai sos de restaurant.',
        'Feliile congelate individual se decongelează în 15 minute la temperatura camerei.',
        '160 g crud = ~38 g proteină pentru 170 kcal. Densitate greu de bătut.'
      ],
      warnings: ['Se usucă în 30 de secunde de neatenție.', '74 °C se atinge aproape instantaneu la 8 mm grosime.'],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '2 zile în frigider; 4 luni congelat',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05165', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-carne-tocata-curcan',
      name: 'Ground Turkey Breast',
      nameRo: 'Carne tocată din piept de curcan',
      brand: 'Lili Gri / generic',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft carne tocată refrigerată', priceRon: 24, packGrams: 650, packLabel: 'caserolă 650 g', note: 'Lili Gri, tocătură din piept.' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Vitrina carne tocată', priceRon: 18.9, packGrams: 450, packLabel: 'caserolă 450 g', note: '' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, tocare la cerere', priceRon: 36.9, packGrams: 1000, packLabel: '1 kg', note: 'Cere tocare din pulpă pentru mai mult gust.' }
      ],
      sibiuNote: 'Tocătura de curcan e nișă în Sibiu — o găsești la Kaufland și ocazional la Carrefour. Merită doar dacă vrei maximum de proteină cu minimum de grăsime; la gust pierde clar în fața celei de porc.',
      per100g: { kcal: 112, protein: 21.5, carbs: 0, sugars: 0, fat: 3, satFat: 0.9, fiber: 0, salt: 0.15 },
      micros: { ironMg: 0.9, zincMg: 1.5, b12Ug: 1, potassiumMg: 310, cholesterolMg: 62 },
      serving: { grams: 150, label: '3 chiftele (150 g crud)' },
      effort: 3,
      timeMin: 28,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['bol', 'tigaie', 'răzătoare'],
        steps: [
          'Tocătura de curcan din piept are 3 g grăsime — fără adaos, iese uscată garantat.',
          'La 500 g adaugă: 1 ou, 1 ceapă rasă, 2 linguri iaurt grecesc, 2 linguri ovăz măcinat, sare, piper, mărar.',
          'Frământă 2 minute și lasă 20 de minute la frigider.',
          'Formează chiftele de 50 g, apasă un mic adânc în mijloc ca să nu se bombeze.',
          'Tigaie cu 1 lingură ulei, foc mediu, 4 minute pe parte.',
          'Verifică 74 °C. Scoate imediat — fiecare minut în plus le usucă.'
        ],
        yieldNote: '500 g tocătură crudă ≈ 390 g chiftele gătite'
      },
      taste: {
        profile: 'Foarte discret, aproape neutru, cere condimente agresive',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 3,
        richness: 1,
        texture: 'Uscată și granuloasă fără liant; acceptabilă cu iaurt și ceapă rasă',
        notes: 'Nutrițional e superbă (21,5 g proteină, 3 g grăsime). Gastronomic e cea mai plictisitoare tocătură de pe raft. Ambele afirmații sunt adevărate.'
      },
      stats: { taste: 48, satiety: 88, convenience: 48, versatility: 82 },
      timing: { breakfast: 2, preWorkout: 2, postWorkout: 5, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Alegerea de deficit caloric — 150 g crud dau 32 g proteină pentru 168 kcal.',
      tags: ['low-fat', 'protein-dense', 'cutting', 'meal-prep', 'batch-cook', 'mid-price'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de roșii picant', 'Iaurt grecesc', 'Ardei copt', 'Ovăz măcinat', 'Chimen'],
      tips: [
        'Fără un liant gras (iaurt, ou, ulei de măsline) chiftelele ies ca nisipul. Nu sări peste asta.',
        'Amestec 50/50 cu tocătură de porc: obții gust decent și rămâi la ~17 g proteină și 11 g grăsime.',
        'Excelentă în sos bolognese — sosul îi dă umezeala care îi lipsește.'
      ],
      warnings: ['74 °C, tocătura de pasăre nu se mănâncă roz.', 'Foarte perisabilă: 24 de ore la frigider, maximum.'],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '1–2 zile în frigider; 3 luni congelată',
      dataConfidence: 'medium',
      sources: ['Eticheta Lili Gri carne tocată piept curcan', 'freshful.ro']
    },

    {
      id: 'm-aripi-curcan',
      name: 'Turkey Wings',
      nameRo: 'Aripi de curcan',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Curcan',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, secțiunea curcan', priceRon: 37.8, packGrams: 2000, packLabel: 'caserolă ~2 kg', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie', priceRon: 21.9, packGrams: 1000, packLabel: '1 kg', note: 'Apar mai ales toamna-iarna.' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona carne refrigerată', priceRon: 44.75, packGrams: 2500, packLabel: 'caserolă 2,5 kg', note: '' }
      ],
      sibiuNote: 'Aripa de curcan e o bucată uriașă și ieftină pe care aproape nimeni nu o cumpără. La 18 lei/kg, înăbușită 2 ore, dă o tocană de iarnă cu gust de vânat, la un preț de pui.',
      per100g: { kcal: 193, protein: 19.5, carbs: 0, sugars: 0, fat: 12.8, satFat: 3.5, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1.3, zincMg: 2.5, b12Ug: 0.6, potassiumMg: 230, cholesterolMg: 82 },
      serving: { grams: 300, label: '1 aripă mare (300 g crud, cu os)' },
      effort: 3,
      timeMin: 140,
      activeTimeMin: 20,
      cooking: {
        method: 'slow',
        difficulty: 'easy',
        equipment: ['oală de fontă cu capac', 'tigaie'],
        steps: [
          'Taie aripa în trei bucăți la articulații — altfel nu încape în oală.',
          'Rumenește bine în ulei, 5 minute pe fiecare parte, până se face crustă maro-închis.',
          'Scoate carnea, călește ceapă, morcov și țelină 8 minute în aceeași grăsime.',
          'Pune carnea înapoi, adaugă 400 ml supă, 2 linguri bulion, dafin, boabe de ienibahar.',
          'Capac, cuptor 160 °C, 2 ore. Sau aragaz, foc minim, 2 ore.',
          'Carnea trebuie să cadă de pe os. Sare abia la final.'
        ],
        yieldNote: '1 kg aripi de curcan ≈ 520 g carne curată gătită'
      },
      taste: {
        profile: 'Adânc, aproape de vânat, cu zeamă groasă din colagen',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 5,
        richness: 4,
        texture: 'După 2 ore, carne care se desface în fâșii lungi; înainte de asta, cauciuc',
        notes: 'Cea mai bună tocană ieftină de iarnă din Sibiu. Are nevoie de timp, dar timpul e pasiv.'
      },
      stats: { taste: 74, satiety: 84, convenience: 20, versatility: 50 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de duminică rece, se reîncălzește mai bine a doua zi.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'whole-food', 'batch-cook', 'winter', 'slow-digesting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Mămăligă', 'Cartofi', 'Varză murată', 'Bulion', 'Ienibahar'],
      tips: [
        'Are mult colagen — zeama se închegă la frigider și e excelentă peste orez a doua zi.',
        'Sub 90 de minute de gătit e imposibil de mestecat. Nu grăbi procesul.',
        'Oala sub presiune: 45 de minute în loc de 2 ore, aceeași textură.'
      ],
      warnings: ['Osul e mare și dur; taie la articulații cu un cuțit greu, nu forța.', 'Aproximativ 45% din greutate e os și piele.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile în frigider; 6 luni congelate',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05179', 'selgros.ro carne curcan']
    },

    {
      id: 'm-curcan-intreg',
      name: 'Whole Turkey',
      nameRo: 'Curcan întreg',
      brand: 'Peneș Curcanul (Agricola) / generic',
      category: 'fresh-meat',
      subcategory: 'Curcan',
      emoji: '🦃',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Congelator mare + carmangerie în decembrie', priceRon: 174.5, packGrams: 5000, packLabel: 'curcan 4–7 kg', note: 'Noiembrie–decembrie, apoi dispare.' },
        { name: 'Selgros', availability: 'seasonal', aisle: 'Zona congelate mari, sezon sărbători', priceRon: 197.4, packGrams: 6000, packLabel: 'curcan 5–8 kg', note: '' },
        { name: 'Carrefour', availability: 'seasonal', aisle: 'Vitrina de sărbători', priceRon: 184.5, packGrams: 5000, packLabel: 'curcan 4–6 kg', note: '' }
      ],
      sibiuNote: 'În Sibiu curcanul întreg apare pe raft din a doua jumătate a lui noiembrie și dispare pe 27 decembrie. Dacă vrei unul, comandă din timp la carmangeria Selgros — se epuizează. Un curcan de 5 kg hrănește 10–12 oameni și lasă carcasă pentru 4 litri de supă.',
      per100g: { kcal: 159, protein: 20.5, carbs: 0, sugars: 0, fat: 8.5, satFat: 2.4, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1.2, zincMg: 2.3, b12Ug: 1.1, potassiumMg: 280, cholesterolMg: 75 },
      serving: { grams: 350, label: '1 porție cu os (350 g crud)' },
      effort: 5,
      timeMin: 260,
      activeTimeMin: 45,
      cooking: {
        method: 'oven',
        difficulty: 'hard',
        equipment: ['tavă mare de cuptor', 'termometru de carne', 'folie de aluminiu', 'găleată pentru saramură'],
        steps: [
          'Saramură cu 24 de ore înainte: 6 litri apă, 300 g sare, 150 g zahăr, dafin, boabe de piper. Fără asta pieptul iese uscat, garantat.',
          'Scoate din saramură, clătește, usucă bine și lasă descoperit în frigider 6 ore ca să se usuce pielea.',
          'Unge cu unt moale sub piele, pe piept — bariera de grăsime protejează carnea albă.',
          'Cuptor 180 °C. Regula: 40 de minute pe kilogram plus 30 de minute. Un curcan de 5 kg = ~3 ore 30.',
          'Acoperă pieptul cu folie primele 2 ore, apoi descoperă pentru rumenire.',
          'Verifică în partea groasă a pulpei: 80 °C. Pieptul trebuie să fie la 72–74 °C.',
          'Odihnește 30–40 de minute acoperit. Un curcan mare chiar are nevoie de atâta.',
          'Tranșează începând cu pulpele, apoi feliază pieptul perpendicular pe fibră.'
        ],
        yieldNote: '1 curcan de 5 kg crud ≈ 2,8 kg carne gătită fără os + carcasă pentru 4 l supă'
      },
      taste: {
        profile: 'Carne albă delicată lângă carne roșie intensă — două mâncăruri în aceeași pasăre',
        intensity: 3,
        sweetness: 2,
        saltiness: 2,
        umami: 4,
        richness: 3,
        texture: 'Pieptul e ferm și poate fi sec; pulpele sunt suculente și fibroase',
        notes: 'Un curcan prost făcut e cea mai mare dezamăgire culinară posibilă. Unul cu saramură și termometru e spectaculos. Diferența e complet în tehnică.'
      },
      stats: { taste: 72, satiety: 88, convenience: 10, versatility: 65 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Proiect de sărbătoare; resturile devin sandvișuri și supă pentru 4 zile.',
      tags: ['high-protein', 'batch-cook', 'winter', 'whole-food', 'mid-price', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de merișoare', 'Castane', 'Cartofi la cuptor', 'Varză roșie', 'Salvie'],
      tips: [
        'Fără saramură, pieptul unui curcan de 5 kg va fi uscat. Este singurul sfat care contează cu adevărat.',
        'Decongelarea unui curcan de 5 kg durează 36–48 de ore în frigider. Planifică.',
        'Resturile de piept feliate subțire, ținute în puțină supă, rezistă 4 zile fără să se usuce.'
      ],
      warnings: [
        'Decongelare doar în frigider, niciodată pe blat — 5 kg de carne la temperatura camerei e un pericol real.',
        '80 °C la pulpă și 74 °C la piept; un termometru e obligatoriu la păsări mari.',
        'Disponibil doar sezonier în Sibiu (noiembrie–decembrie).'
      ],
      storage: 'Frigider 0–4 °C maximum 2 zile crud; congelator −18 °C.',
      shelfLife: '2 zile crud refrigerat; 12 luni congelat întreg',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05192', 'agricola.ro', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-muschiulet-porc',
      name: 'Pork Tenderloin',
      nameRo: 'Mușchiuleț de porc',
      brand: 'K-Purland (Kaufland) / generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, vitrina de porc, bucăți lungi vidate', priceRon: 21.45, packGrams: 500, packLabel: 'mușchiuleț 400–600 g', note: 'K-Purland, porc născut și crescut în România.' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 38.9, packGrams: 1000, packLabel: 'vidat 2 bucăți ~1 kg', note: 'Cel mai bun preț la vid dublu.' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft carne refrigerată', priceRon: 21.95, packGrams: 500, packLabel: 'vidat ~500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrina porc', priceRon: 20.66, packGrams: 450, packLabel: 'tavă ~450 g', note: '' }
      ],
      sibiuNote: 'Mușchiulețul e pieptul de pui al porcului: la fel de slab (3,5 g grăsime), dar cu gust real. La Selgros, vidul dublu la 39 lei/kg e cea mai bună achiziție de carne slabă din Sibiu după piept de pui.',
      per100g: { kcal: 118, protein: 21.5, carbs: 0, sugars: 0, fat: 3.5, satFat: 1.2, fiber: 0, salt: 0.14 },
      micros: { ironMg: 0.9, zincMg: 2.1, b12Ug: 0.5, potassiumMg: 400, cholesterolMg: 65 },
      serving: { grams: 180, label: '1 porție (180 g crud)' },
      effort: 3,
      timeMin: 30,
      activeTimeMin: 12,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tigaie', 'tavă de cuptor', 'termometru de carne'],
        steps: [
          'Îndepărtează membrana argintie de pe mușchiuleț — nu se înmoaie niciodată la gătit și strânge carnea.',
          'Sare, piper, cimbru; lasă 15 minute la temperatura camerei.',
          'Rumenește în tigaie foarte încinsă 2 minute pe fiecare din cele 4 laturi.',
          'Mută în cuptor la 200 °C pentru 10–14 minute.',
          'Scoate la 62 °C în centru — porcul modern se mănâncă roz și e sigur la 63 °C.',
          'Odihnește 8 minute; temperatura mai urcă 3–4 grade. Taie felii de 2 cm.'
        ],
        yieldNote: '1 kg mușchiuleț crud ≈ 720 g gătit; proteina urcă la ~29 g/100 g'
      },
      taste: {
        profile: 'Dulceag, delicat, cu gust curat de porc fără nota grasă',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 4,
        richness: 2,
        texture: 'Extrem de fragedă, aproape untoasă la 63 °C; uscată și făinoasă la 75 °C',
        notes: 'Cea mai bună carne slabă din raft ca gust. Singurul motiv pentru care oamenii o ratează e frica veche de porcul roz.'
      },
      stats: { taste: 82, satiety: 86, convenience: 45, versatility: 85 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Proteină slabă cu gust — cina ideală când vrei să mănânci bine fără să depășești caloriile.',
      tags: ['protein-dense', 'meal-prep', 'whole-food', 'mid-price', 'cutting', 'complete-protein'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Piure de cartofi', 'Sos de muștar', 'Mere caramelizate', 'Varză călită', 'Cimbru'],
      tips: [
        'Standardul internațional pentru porc întreg este 63 °C plus 3 minute odihnă, nu 75 °C. Trichineloza a dispărut practic din porcul de fermă industrială.',
        'Membrana argintie trebuie scoasă obligatoriu — altfel mușchiulețul se curbează în tigaie.',
        'Valorile sunt pentru carne crudă; gătit ajunge la ~29 g proteină/100 g.'
      ],
      warnings: [
        'Porcul din surse necontrolate (sacrificat în gospodărie, nefiind analizat) trebuie gătit la 71 °C din cauza riscului de trichinella.',
        'Se usucă foarte repede peste 68 °C — folosește termometru.'
      ],
      storage: 'Frigider 0–4 °C; vidat rezistă mai mult.',
      shelfLife: '3–4 zile refrigerat, 10–14 zile vidat; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10093', 'kaufland.ro K-Purland']
    },

    {
      id: 'm-cotlet-porc',
      name: 'Pork Loin Chop',
      nameRo: 'Cotlet de porc',
      brand: 'K-Purland (Kaufland) / generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, felii cu sau fără os', priceRon: 26.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: 'Cotlet fără os feliat, frecvent la 21,99 în ofertă.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 22.32, packGrams: 800, packLabel: 'tavă ~800 g', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, bucată întreagă', priceRon: 74.7, packGrams: 3000, packLabel: 'cotlet întreg 3 kg', note: 'Îl feliezi singur, economisești 3 lei/kg.' },
        { name: 'Penny', availability: 'always', aisle: 'Vitrina refrigerată', priceRon: 21.2, packGrams: 800, packLabel: 'tavă ~800 g', note: '' }
      ],
      sibiuNote: 'Cotletul e cea mai vândută bucată de porc din Sibiu după ceafă. La Selgros iei bucata întreagă de 3 kg, o feliezi acasă la grosimea pe care o vrei (3 cm, nu 1,5 cm) și mănânci mult mai bine.',
      per100g: { kcal: 163, protein: 21, carbs: 0, sugars: 0, fat: 8.8, satFat: 3.1, fiber: 0, salt: 0.14 },
      micros: { ironMg: 0.8, zincMg: 2, b12Ug: 0.7, potassiumMg: 370, cholesterolMg: 70 },
      serving: { grams: 200, label: '1 cotlet gros (200 g crud)' },
      effort: 3,
      timeMin: 22,
      activeTimeMin: 14,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie grea', 'clește', 'termometru de carne'],
        steps: [
          'Cere sau taie felii de 3 cm. Cotletul de 1,5 cm e imposibil de gătit fără să-l usuci.',
          'Saramură rapidă 30 de minute (1 l apă, 50 g sare) dacă ai timp — face diferența.',
          'Usucă, sare, piper. Crestează grăsimea de pe margine în 3 locuri ca să nu se curbeze.',
          'Tigaie foarte încinsă, 3 minute pe o parte, întoarce, adaugă unt, usturoi și cimbru.',
          'Stropește cu untul spumat 2–3 minute, apoi ține cotletul pe muchia grasă 1 minut ca să se rumenească.',
          'Scoate la 62 °C, odihnește 6 minute pe o farfurie caldă.'
        ],
        yieldNote: '1 kg cotlet crud ≈ 730 g gătit'
      },
      taste: {
        profile: 'Porc clasic: dulceag, cu inelul de grăsime care dă tot gustul',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 4,
        richness: 3,
        texture: 'Fermă dar suculentă la 63 °C; peste 70 °C devine sfoară',
        notes: 'Bucata pe care majoritatea românilor o gătesc greșit, prea subțire și prea mult. Făcut gros și scos la 62 °C e o mâncare foarte bună.'
      },
      stats: { taste: 78, satiety: 84, convenience: 45, versatility: 75 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină clasică; grăsimea moderată încetinește digestia, deci ține de foame până dimineața.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'whole-food', 'romanian-classic', 'summer'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Cartofi la cuptor', 'Varză murată', 'Muștar', 'Mere', 'Mujdei'],
      tips: [
        'Cotletul cu os are mai mult gust și se usucă mai greu — osul e izolator termic.',
        'Un cotlet de 3 cm la 27 lei/kg dă 21 g proteină la 100 g — un raport mai bun decât la ceafă.',
        'Cel mai frecvent la ofertă marți și miercuri la Kaufland Sibiu.'
      ],
      warnings: [
        'Porcul din surse necontrolate necesită 71 °C (trichinella). Cel din supermarket, controlat sanitar-veterinar, e sigur la 63 °C.',
        'Cotletul feliat subțire industrial e o capcană — se usucă înainte să se rumenească.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerat; 6 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10062', 'kaufland.ro/enciclopedia-alimentelor cotlet de porc']
    },

    {
      id: 'm-ceafa-porc',
      name: 'Pork Neck / Collar',
      nameRo: 'Ceafă de porc',
      brand: 'K-Purland (Kaufland) / generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, vitrina de porc — cea mai mare tavă', priceRon: 28.9, packGrams: 1000, packLabel: 'tavă ~1,2 kg', note: 'Vara scade la 24,99 în campaniile de grătar.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 29.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, bucată întreagă', priceRon: 79.5, packGrams: 3000, packLabel: 'ceafă întreagă ~3 kg', note: 'Cea mai bună variantă pentru grătar cu prietenii.' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne', priceRon: 32, packGrams: 1000, packLabel: '1 kg', note: 'Mai grasă, mai gustoasă, mai scumpă.' }
      ],
      sibiuNote: 'Ceafa e regele grătarului sibian. De 1 Mai și în weekendurile de vară, Kaufland și Lidl o scot la 22–25 lei/kg. Atenție: 20 g grăsime la 100 g înseamnă că o porție de 250 g are 625 kcal.',
      per100g: { kcal: 250, protein: 17.5, carbs: 0, sugars: 0, fat: 20, satFat: 7.2, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1, zincMg: 2.6, b12Ug: 0.8, potassiumMg: 300, cholesterolMg: 72 },
      serving: { grams: 250, label: '1 felie mare de grătar (250 g crud)' },
      effort: 2,
      timeMin: 25,
      activeTimeMin: 15,
      cooking: {
        method: 'grill',
        difficulty: 'easy',
        equipment: ['grătar sau tigaie grill', 'clește'],
        steps: [
          'Felii de 2–2,5 cm. Ceafa are grăsime intramusculară, deci iartă mult mai mult decât cotletul.',
          'Sare, piper, boia. Nu marina în oțet — ceafa nu are nevoie și oțetul o întărește.',
          'Grătar cu jar potolit (nu flacără), 6–7 minute pe fiecare parte.',
          'Dacă grăsimea picură și se aprinde, mută carnea pe zona rece 30 de secunde.',
          'Ținta e 68–70 °C — ceafa are colagen care se topește mai bine puțin peste 63 °C.',
          'Odihnește 5 minute. Sare grunjoasă la final.'
        ],
        yieldNote: '1 kg ceafă crudă ≈ 680 g gătită (pierde și grăsime topită)'
      },
      taste: {
        profile: 'Suculent, gras, aromat — gustul de grătar românesc',
        intensity: 4,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Moale, cu vinișoare de grăsime care se topesc; foarte iertătoare',
        notes: 'Nutrițional e mediocră (doar 28% din calorii din proteină), gastronomic e imbatabilă. Nu pretinde că e mâncare de dietă.'
      },
      stats: { taste: 90, satiety: 72, convenience: 48, versatility: 60 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Cină de weekend sau grătar; grăsimea o face nepotrivită în jurul antrenamentului.',
      tags: ['high-protein', 'high-kcal', 'budget', 'romanian-classic', 'summer', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Mujdei de usturoi', 'Murături', 'Cartofi copți', 'Pâine de casă', 'Ardei iute'],
      tips: [
        'O porție de 250 g de ceafă = 44 g proteină dar și 50 g grăsime și 625 kcal. Contabilizează sincer.',
        'Nu o tăia mai subțire de 2 cm; ceafa subțire se usucă exact ca și cotletul.',
        'Rămășițele reci, tăiate cuburi, sunt excelente în tocană de fasole a doua zi.'
      ],
      warnings: [
        'Grăsime saturată 7,2 g/100 g — o porție acoperă o treime din maximul zilnic recomandat.',
        'Carne roșie procesată la grătar peste flacără directă produce HAP; evită arderea și flacăra deschisă.',
        'Consumul total de carne roșie recomandat: sub 500 g gătit pe săptămână.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerat; 6 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10077', 'kaufland.ro/enciclopedia-alimentelor ceafa de porc']
    },

    {
      id: 'm-pulpa-porc',
      name: 'Pork Leg / Ham Cut',
      nameRo: 'Pulpă de porc, fără os',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, bucăți mari de 3–5 kg', priceRon: 87.6, packGrams: 4000, packLabel: 'pulpă întreagă 3–5 kg', note: 'Cel mai ieftin porc slab din Sibiu.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie', priceRon: 24.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Zona carne refrigerată', priceRon: 107.5, packGrams: 5000, packLabel: 'pulpă 5 kg', note: 'Card Metro necesar.' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft carne refrigerată', priceRon: 23.31, packGrams: 900, packLabel: 'tavă ~900 g', note: '' }
      ],
      sibiuNote: 'Pulpa de porc întreagă de la Selgros sau Metro, la 21 lei/kg, e cea mai subestimată sursă de proteină din Sibiu: 20,5 g proteină, 7 g grăsime, la două treimi din prețul pieptului de pui. Tranșezi acasă în friptură, gulaș și tocătură.',
      per100g: { kcal: 145, protein: 20.5, carbs: 0, sugars: 0, fat: 7, satFat: 2.5, fiber: 0, salt: 0.14 },
      micros: { ironMg: 0.9, zincMg: 2.4, b12Ug: 0.7, potassiumMg: 360, cholesterolMg: 68 },
      serving: { grams: 200, label: '1 porție (200 g crud)' },
      effort: 4,
      timeMin: 110,
      activeTimeMin: 20,
      cooking: {
        method: 'oven',
        difficulty: 'medium',
        equipment: ['tavă adâncă', 'termometru', 'folie de aluminiu'],
        steps: [
          'Pentru friptură: freacă bucata de 1,5 kg cu sare, usturoi, boia și muștar cu 12 ore înainte.',
          'Rumenește pe toate părțile într-o tigaie foarte încinsă, 8 minute total.',
          'Așază în tavă pe un pat de ceapă și morcov, toarnă 200 ml supă sau bere.',
          'Acoperă cu folie, cuptor 160 °C, 75 de minute.',
          'Descoperă, urcă la 200 °C, mai lasă 15–20 de minute pentru crustă.',
          'Verifică 68–70 °C în centru pentru felii ferme, sau 85 °C dacă vrei carne care se destramă.',
          'Odihnește 15 minute, taie perpendicular pe fibră.'
        ],
        yieldNote: '1 kg pulpă crudă ≈ 700 g friptură; la 85 °C, ~650 g carne destrămată'
      },
      taste: {
        profile: 'Curat, echilibrat, gust de porc fără excesul de grăsime al cefei',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 4,
        richness: 2,
        texture: 'Fibre relativ groase; excelentă feliată subțire, medie la cuburi',
        notes: 'Bucata cea mai versatilă și cel mai bine raportată la preț din tot porcul. Nu are romantismul cefei, dar are matematica de partea ei.'
      },
      stats: { taste: 72, satiety: 86, convenience: 30, versatility: 92 },
      timing: { breakfast: 2, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 3 },
      timingNote: 'Friptură de duminică feliată devine 4 prânzuri de birou. Cel mai bun meal prep de carne roșie.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'batch-cook', 'meal-prep', 'whole-food', 'bulk-buy', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Cartofi', 'Muștar', 'Varză călită', 'Hrean', 'Pâine de secară'],
      tips: [
        'Raport imbatabil: 20,5 g proteină la 22 lei/kg = 9,3 g proteină per leu. Bate pieptul de pui (6,9 g/leu).',
        'Feliată subțire după răcire completă, înlocuiește șunca de sandviș la o cincime din preț.',
        'Tranșează bucata mare în trei: o friptură, cuburi pentru tocană, restul la tocat.'
      ],
      warnings: [
        'Carne roșie — limitează totalul la sub 500 g gătit pe săptămână.',
        'Porcul necontrolat sanitar necesită 71 °C (trichinella).'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerată; 6 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10023', 'selgros.ro carne porc']
    },

    {
      id: 'm-spata-porc',
      name: 'Pork Shoulder',
      nameRo: 'Spată de porc',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, bucăți de 2–4 kg', priceRon: 62.7, packGrams: 3000, packLabel: 'spată întreagă 2–4 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie', priceRon: 22.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Vitrina refrigerată', priceRon: 22.5, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' }
      ],
      sibiuNote: 'Spata e bucata pe care o cumperi când vrei pulled pork sau tocană. La 21 lei/kg la Selgros, o bucată de 3 kg gătită 8 ore îți dă 2 kg de carne destrămată — mâncare pentru o săptămână la 30 de lei de persoană.',
      per100g: { kcal: 188, protein: 19, carbs: 0, sugars: 0, fat: 12.5, satFat: 4.4, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1, zincMg: 2.8, b12Ug: 0.8, potassiumMg: 330, cholesterolMg: 72 },
      serving: { grams: 220, label: '1 porție (220 g crud)' },
      effort: 5,
      timeMin: 480,
      activeTimeMin: 25,
      cooking: {
        method: 'slow',
        difficulty: 'easy',
        equipment: ['slow cooker sau oală de fontă cu capac', 'două furculițe'],
        steps: [
          'Freacă bucata cu un rub: 2 linguri boia afumată, 1 lingură sare, 1 lingură zahăr brun, chimen, usturoi granulat, piper. Lasă la frigider peste noapte.',
          'Rumenește-o bine pe toate părțile în tigaie, 10 minute total.',
          'Pune în slow cooker cu 1 ceapă mare tăiată și 150 ml lichid (bere, supă sau suc de mere).',
          'Low, 8 ore. Sau cuptor 140 °C, capac, 5–6 ore.',
          'E gata când o furculiță intră fără rezistență și carnea se destramă singură — în jur de 92–95 °C intern.',
          'Destramă cu două furculițe, amestecă înapoi în sucul din vas ca să nu se usuce.'
        ],
        yieldNote: '3 kg spată crudă ≈ 1,9–2 kg carne destrămată'
      },
      taste: {
        profile: 'Profund, dulce-afumat, cu grăsime topită care intră în fiecare fibră',
        intensity: 5,
        sweetness: 3,
        saltiness: 3,
        umami: 5,
        richness: 4,
        texture: 'Se destramă la atingere; umedă, moale, fără fibre tari',
        notes: 'Una dintre puținele bucăți unde timpul lung face totul și tehnica aproape nimic. Greu de ratat, ușor de iubit.'
      },
      stats: { taste: 88, satiety: 82, convenience: 22, versatility: 80 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Batch cook de weekend; se congelează perfect în porții de 200 g.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'batch-cook', 'meal-prep', 'bulk-buy', 'winter', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Chifle', 'Salată coleslaw', 'Sos barbecue', 'Cartofi dulci', 'Castraveți murați'],
      tips: [
        'Carnea destrămată congelată în sucul ei se reîncălzește perfect la microunde — cel mai bun meal prep de carne roșie.',
        'Nu arunca grăsimea topită; separă-o, e untură curată pentru cartofi.',
        'La 21 lei/kg, un kilogram de carne destrămată finală costă ~32 de lei. Sub 2 lei per 30 g proteină.'
      ],
      warnings: [
        'Timp foarte lung — nu e mâncare de zi de lucru decât dacă folosești slow cooker cu temporizator.',
        'Carne roșie și grasă; porționează la 200 g, nu la ochi.'
      ],
      storage: 'Frigider 0–4 °C crud; carnea gătită 4 zile la frigider.',
      shelfLife: '3–4 zile crudă; 6 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10041', 'selgros.ro carne porc']
    },

    {
      id: 'm-piept-porc-panceta',
      name: 'Pork Belly',
      nameRo: 'Piept de porc (panceta, cu șorici)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🥓',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, bucăți dreptunghiulare cu straturi', priceRon: 24.9, packGrams: 1000, packLabel: 'bucată ~1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 45.8, packGrams: 2000, packLabel: 'bucată ~2 kg', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne, măcelării', priceRon: 26, packGrams: 1000, packLabel: '1 kg', note: 'Poți alege raportul carne/grăsime.' }
      ],
      sibiuNote: 'Pieptul de porc e ingredientul din care se fac slănina, kaizerul și cea mai bună mâncare de fasole din Sibiu. La Piața Cibin poți alege bucata cu mai multă carne — cere una cu minimum 4 straturi vizibile.',
      per100g: { kcal: 341, protein: 15.5, carbs: 0, sugars: 0, fat: 31, satFat: 11.5, fiber: 0, salt: 0.13 },
      micros: { ironMg: 0.7, zincMg: 1.8, b12Ug: 0.6, potassiumMg: 240, cholesterolMg: 72 },
      serving: { grams: 120, label: '1 porție mică (120 g crud)' },
      effort: 4,
      timeMin: 150,
      activeTimeMin: 20,
      cooking: {
        method: 'oven',
        difficulty: 'medium',
        equipment: ['tavă de cuptor', 'cuțit foarte ascuțit', 'grătar de tavă'],
        steps: [
          'Crestează șoriciul în romburi, tăind doar pielea, nu carnea de dedesubt.',
          'Freacă sare grunjoasă în crestături și lasă descoperit în frigider 12 ore — pielea uscată e singura care se face crocantă.',
          'Cuptor 220 °C primele 30 de minute, pe grătar peste tavă cu apă.',
          'Coboară la 160 °C și mai lasă 90 de minute.',
          'Ultimele 10 minute, grill maxim pentru șorici sticlos — stai lângă cuptor, se arde în 60 de secunde.',
          'Odihnește 15 minute și taie cu un cuțit greu, apăsând, nu tăind.'
        ],
        yieldNote: '1 kg piept crud ≈ 600 g gătit (pierde ~30% grăsime topită)'
      },
      taste: {
        profile: 'Bogat până la limită, dulce-sărat, cu șorici crocant peste grăsime topită',
        intensity: 5,
        sweetness: 2,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Trei texturi simultan: crocant, moale-gelatinos, cărnos',
        notes: 'Delicios fără discuție. Dar la 31 g grăsime și 341 kcal la 100 g, e mâncare de sărbătoare, nu de fiecare zi. 120 g e o porție onestă.'
      },
      stats: { taste: 92, satiety: 65, convenience: 25, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 1, lunch: 3, snack: 1, dinner: 4, beforeBed: 1 },
      timingNote: 'Masă festivă; ca sursă de proteină e cea mai proastă din raftul de porc — doar 18% din calorii vin din proteină.',
      tags: ['high-kcal', 'romanian-classic', 'budget', 'winter', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Varză călită', 'Fasole bătută', 'Mămăligă', 'Murături', 'Hrean'],
      tips: [
        'Cea mai importantă regulă: pielea trebuie să fie complet uscată. 12 ore descoperită în frigider, fără excepții.',
        'Tăiat cuburi și prăjit încet, devine baza pentru fasole cu ciolan sau varză a la Cluj.',
        'Grăsimea topită scursă în tavă e untură pură — strecoar-o și păstreaz-o la frigider 3 luni.'
      ],
      warnings: [
        'Grăsime saturată 11,5 g/100 g — o porție de 120 g atinge practic limita zilnică recomandată.',
        'Doar 15,5 g proteină la 341 kcal: cel mai slab raport din tot ghidul de carne.',
        'Porc necontrolat: 71 °C obligatoriu.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–5 zile refrigerat; 4 luni congelat (grăsimea râncezește)',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 10009', 'CIQUAL 28002']
    },

    {
      id: 'm-coaste-porc',
      name: 'Pork Ribs',
      nameRo: 'Coaste de porc',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tăvi lungi de coaste', priceRon: 22.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, rastel întreg', priceRon: 41.8, packGrams: 2000, packLabel: 'rastel ~2 kg', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft carne refrigerată', priceRon: 21.51, packGrams: 900, packLabel: 'tavă ~900 g', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Zona carne refrigerată', priceRon: 79.6, packGrams: 4000, packLabel: 'bax 4 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Coastele de porc sunt cea mai bună mâncare de grătar din Sibiu raportat la efort: le bagi 3 ore în cuptor la 150 °C și ies perfecte. Metro are cel mai bun preț la bax, dar oasele reprezintă 40% din greutate.',
      per100g: { kcal: 275, protein: 17, carbs: 0, sugars: 0, fat: 23, satFat: 8.5, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1, zincMg: 2.5, b12Ug: 0.7, potassiumMg: 270, cholesterolMg: 78 },
      serving: { grams: 250, label: '5–6 coaste (~250 g carne, fără os)' },
      effort: 4,
      timeMin: 210,
      activeTimeMin: 25,
      cooking: {
        method: 'oven',
        difficulty: 'medium',
        equipment: ['tavă de cuptor', 'folie de aluminiu', 'pensulă'],
        steps: [
          'Scoate membrana argintie de pe partea cu oase — prinde-o cu un prosop de hârtie și trage. Obligatoriu.',
          'Freacă cu rub: boia afumată, zahăr brun, sare, chimen, usturoi granulat, piper, muștar praf.',
          'Împachetează strâns în folie de aluminiu cu 3 linguri de suc de mere sau bere.',
          'Cuptor 150 °C, 2 ore și 30 de minute — coacere lentă, ambalată.',
          'Desface folia, unge cu sos barbecue, urcă la 200 °C, 15–20 de minute, ungând din 7 în 7 minute.',
          'Testul de coacere: ridici rastelul cu un clește la mijloc și trebuie să se îndoaie și să crape ușor la suprafață.',
          'Odihnește 10 minute înainte de a tăia între oase.'
        ],
        yieldNote: '1 kg coaste crude ≈ 480 g carne comestibilă gătită'
      },
      taste: {
        profile: 'Dulce-afumat, gras, lipicios de la sos, cu carne care cade de pe os',
        intensity: 5,
        sweetness: 4,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Moale, umedă, cu crustă caramelizată la exterior',
        notes: 'Mâncare de mare plăcere și de macro prost. O porție de 250 g de carne de pe coaste = ~43 g proteină, 58 g grăsime, ~690 kcal.'
      },
      stats: { taste: 91, satiety: 62, convenience: 25, versatility: 40 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 3, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Mâncare de weekend; sosul barbecue adaugă 10–20 g zahăr la porție.',
      tags: ['high-protein', 'high-kcal', 'budget', 'summer', 'romanian-classic', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Sos barbecue', 'Porumb la grătar', 'Coleslaw', 'Cartofi wedges', 'Bere'],
      tips: [
        'Membrana de pe spate e diferența dintre coaste bune și coaste care se mestecă greu. 30 de secunde de muncă.',
        'Coastele intercostale (baby back) au mai multă carne decât cele de la piept, dar costă cu 5 lei/kg mai mult.',
        'Sosul barbecue comercial are 30–50 g zahăr la 100 ml — pune-l doar la final, într-un strat subțire.'
      ],
      warnings: [
        '40% din greutatea cumpărată e os.',
        'Grăsime saturată ridicată; sosul adaugă zahăr semnificativ.',
        'Nu unge cu sos de la început — zahărul se arde la peste 160 °C.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerate; 6 luni congelate',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10036', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-sorici-porc',
      name: 'Pork Rind / Skin, Raw',
      nameRo: 'Șorici de porc crud',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne, la măcelari — cere direct', priceRon: 12, packGrams: 1000, packLabel: '1 kg', note: 'Nu e mereu expus; se cere la tejghea.' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'La cerere', priceRon: 14, packGrams: 1000, packLabel: '1 kg', note: '' },
        { name: 'Selgros', availability: 'occasional', aisle: 'Carmangerie', priceRon: 11.9, packGrams: 1000, packLabel: '1 kg', note: 'Apare mai ales în sezonul de Crăciun.' }
      ],
      sibiuNote: 'Șoriciul e un produs de piață, nu de supermarket. La Piața Cibin îl găsești la 12 lei/kg, mai ales iarna. E tradiție românească, dar nutrițional e colagen, nu proteină completă.',
      per100g: { kcal: 219, protein: 21, carbs: 0, sugars: 0, fat: 15, satFat: 5.4, fiber: 0, salt: 0.12 },
      micros: { ironMg: 0.6, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 90, cholesterolMg: 65 },
      serving: { grams: 80, label: '1 porție mică (80 g crud)' },
      effort: 3,
      timeMin: 100,
      activeTimeMin: 15,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['oală', 'tavă de cuptor', 'cuțit greu'],
        steps: [
          'Curăță foarte bine șoriciul, rade-l cu un cuțit și pârlește-l dacă mai are peri.',
          'Fierbe 60–75 de minute în apă cu sare, foaie de dafin și boabe de piper, până intră furculița ușor.',
          'Scurge, usucă foarte bine și lasă la frigider descoperit câteva ore.',
          'Pentru variantă crocantă: taie fâșii, cuptor 200 °C pe grătar, 25–30 de minute până se umflă și pocnește.',
          'Pentru variantă tradițională: taie cuburi și adaugă-le în piftie sau în fasole.'
        ],
        yieldNote: '1 kg șorici crud ≈ 550 g fiert; uscat și prăjit, ~250 g'
      },
      taste: {
        profile: 'Neutru-gras, cu gustul dominat de sare și de textură',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 4,
        texture: 'Gelatinos și lipicios fiert; sticlos și aerat prăjit',
        notes: 'Un aliment despre textură. Cine a crescut cu piftie îl apreciază; ceilalți îl găsesc respingător. Proteina lui e colagen, care nu conține triptofan — nu înlocuiește carnea.'
      },
      stats: { taste: 38, satiety: 55, convenience: 18, versatility: 30 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 1, lunch: 2, snack: 3, dinner: 2, beforeBed: 1 },
      timingNote: 'Gustare tradițională de iarnă; nu contează în calculul proteinei zilnice.',
      tags: ['budget', 'romanian-classic', 'winter', 'low-carb', 'high-kcal'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Muștar', 'Hrean', 'Piftie', 'Fasole bătută', 'Ceapă roșie'],
      tips: [
        'Proteina din șorici e ~100% colagen, deficitară în triptofan și metionină. Nu o socoti la aportul de proteină completă.',
        'Fiert bine, apoi tăiat mărunt, e liantul natural care face piftia să se închege.',
        'Prăjit la 200 °C se umflă ca floricelele — snack keto la 12 lei/kg.'
      ],
      warnings: [
        'Nu e proteină completă — lipsesc aminoacizi esențiali.',
        'Grăsime saturată ridicată raportat la valoarea nutrițională.',
        'Verifică să fie complet pârlit; perii rămași sunt inevitabil neplăcuți.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '2–3 zile crud; 4 luni congelat',
      dataConfidence: 'low',
      sources: ['USDA SR Legacy 10195', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-ficat-porc',
      name: 'Pork Liver',
      nameRo: 'Ficat de porc',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, tăviță lângă organe', priceRon: 6.45, packGrams: 500, packLabel: 'tăviță ~500 g', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne', priceRon: 15, packGrams: 1000, packLabel: '1 kg', note: 'Mai proaspăt, culoare mai deschisă.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie', priceRon: 11.9, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Cel mai ieftin gram de proteină din tot ghidul: 21,4 g proteină la 12 lei/kg înseamnă ~17 g proteină per leu. Problema e că foarte puțini oameni pot mânca ficat de porc de mai multe ori pe lună.',
      per100g: { kcal: 130, protein: 21.4, carbs: 2.5, sugars: 0, fat: 3.6, satFat: 1.2, fiber: 0, salt: 0.2 },
      micros: { ironMg: 23, zincMg: 6.6, b12Ug: 18.7, vitDUg: 1.1, potassiumMg: 273, cholesterolMg: 301 },
      serving: { grams: 120, label: '1 porție mică (120 g crud)' },
      effort: 3,
      timeMin: 45,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie', 'castron pentru lapte'],
        steps: [
          'Curăță membrana exterioară și canalele; taie felii de 1 cm.',
          'Ține 30–60 de minute în lapte — la ficatul de porc pasul ăsta nu e opțional, gustul e mult mai puternic decât la pui.',
          'Scurge, usucă foarte bine, dă prin puțină făină dacă vrei crustă.',
          'Foc mare, ulei, 2 minute pe fiecare parte, într-un singur strat.',
          'Sare doar la final, altfel se întărește instantaneu.',
          'Interiorul trebuie să rămână ușor roz. Ficatul gri e ficat ratat.'
        ],
        yieldNote: '1 kg ficat crud ≈ 680 g gătit'
      },
      taste: {
        profile: 'Puternic mineral, amărui, mai agresiv decât ficatul de pui',
        intensity: 5,
        sweetness: 1,
        saltiness: 1,
        umami: 5,
        richness: 3,
        texture: 'Fermă și ușor cauciucată; se face nisipoasă imediat ce e supragătită',
        notes: 'Din toate organele din acest ghid, ficatul de porc e cel mai greu de iubit. Nutrițional e extraordinar. Gustativ: 22/100 și rămân la părerea asta.'
      },
      stats: { taste: 22, satiety: 80, convenience: 35, versatility: 32 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 3, snack: 1, dinner: 3, beforeBed: 1 },
      timingNote: 'O dată la două săptămâni e suficient — vitamina A și cuprul se acumulează.',
      tags: ['protein-dense', 'iron-rich', 'b12', 'budget', 'cheap-protein', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Ceapă caramelizată', 'Mămăligă', 'Muștar', 'Oțet balsamic', 'Vin roșu'],
      tips: [
        '100 g de ficat de porc conțin 23 mg fier — mai mult decât necesarul zilnic complet al unui bărbat de trei ori.',
        'Măcinat și amestecat 1:5 în carne tocată pentru chiftele, e imperceptibil și crește dramatic fierul.',
        'Baza pentru pateul de casă: ficat, ceapă, unt, coniac, blender. Costă o cincime din pateul comercial.'
      ],
      warnings: [
        'Vitamina A extrem de ridicată (~6500 µg/100 g). Interzis femeilor însărcinate.',
        'Colesterol 301 mg/100 g și purine foarte ridicate — evită dacă ai gută.',
        'Maximum 100–150 g o dată la 1–2 săptămâni pentru un adult sănătos.'
      ],
      storage: 'Frigider 0–2 °C, cel mai rece raft.',
      shelfLife: '1–2 zile în frigider; 3 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 10110', 'CIQUAL 28100']
    },

    {
      id: 'm-carne-tocata-porc',
      name: 'Ground Pork',
      nameRo: 'Carne tocată de porc',
      brand: 'K-Purland (Kaufland) / Selgros',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole mari + tocare la cerere', priceRon: 25.9, packGrams: 1000, packLabel: 'caserolă 1 kg', note: 'Cere tocare din spată pentru raport bun carne/grăsime.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne tocată refrigerată', priceRon: 13.95, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 14.45, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Profi', availability: 'usual', aisle: 'Vitrina refrigerată', priceRon: 12.76, packGrams: 400, packLabel: 'caserolă 400 g', note: '' }
      ],
      sibiuNote: 'Tocătura ambalată are între 18 și 25% grăsime, iar eticheta nu spune mereu cât. Trucul: la carmangeria Selgros ceri tocare din pulpă (ajungi la ~10% grăsime, 20 g proteină) sau din spată (~15%). Durează 3 minute și știi exact ce cumperi.',
      per100g: { kcal: 250, protein: 17.5, carbs: 0, sugars: 0, fat: 20, satFat: 7.2, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1, zincMg: 2.5, b12Ug: 0.7, potassiumMg: 290, cholesterolMg: 72 },
      serving: { grams: 150, label: '3 chiftele (150 g crud)' },
      effort: 3,
      timeMin: 35,
      activeTimeMin: 22,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['bol', 'tigaie', 'răzătoare'],
        steps: [
          'La 500 g: 1 ou, 1 ceapă rasă și stoarsă bine, 3 linguri pesmet, 3 căței usturoi, mărar, sare, piper.',
          'Frământă energic 3 minute — proteina miofibrilară trebuie să se lege, altfel chiftelele se desfac.',
          'Odihnește compoziția 30 de minute la frigider.',
          'Formează chiftele de 50 g cu mâinile ude.',
          'Prăjește în ulei la foc mediu, 4–5 minute pe fiecare parte.',
          'Verifică 71 °C în centru dacă porcul e din sursă necontrolată, 63 °C dacă e din supermarket.',
          'Scurge pe grătar, nu pe hârtie.'
        ],
        yieldNote: '500 g tocătură crudă ≈ 340 g chiftele gătite (pierde apă și grăsime)'
      },
      taste: {
        profile: 'Bogat, sărat, gustul de chiftea de duminică',
        intensity: 4,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Suculentă, cu grăsime care ține totul umed; iertătoare la gătit',
        notes: 'Cea mai gustoasă tocătură din raft, dar și cea mai grasă. 20 g grăsime la 100 g e mult mai mult decât crede lumea.'
      },
      stats: { taste: 84, satiety: 74, convenience: 52, versatility: 92 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Bază pentru sarmale, chiftele, ardei umpluți — mâncare de familie, nu de deficit caloric.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'romanian-classic', 'batch-cook', 'high-kcal', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Sos de roșii', 'Varză murată', 'Orez', 'Mămăligă', 'Smântână'],
      tips: [
        'Cere procentul de grăsime la carmangerie. 20% vs 10% înseamnă 90 kcal diferență la 100 g.',
        'Prăjită și scursă, tocătura pierde 4–6 g grăsime la 100 g — clătește-o cu apă fierbinte dacă vrei să scazi și mai mult.',
        'Nu o amesteca prea mult dacă vrei burger; amestecul lung e bun pentru chiftele, rău pentru burgeri.'
      ],
      warnings: [
        'Tocarea multiplică suprafața expusă bacteriilor — gătește complet, nu roz.',
        'Foarte perisabilă: 24 de ore la frigider.',
        'Carne roșie grasă — 20 g grăsime la 100 g, din care 7,2 g saturate.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 h.',
      shelfLife: '1 zi refrigerată; 3 luni congelată',
      dataConfidence: 'high',
      sources: ['Eticheta K-Purland carne tocată porc', 'USDA SR Legacy 10219']
    },

    {
      id: 'm-carne-tocata-amestec',
      name: 'Mixed Ground Meat (Pork and Beef)',
      nameRo: 'Carne tocată amestec (porc și vită)',
      brand: 'Selgros / K-Purland (Kaufland)',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole 1 kg', priceRon: 28.9, packGrams: 1000, packLabel: 'caserolă 1 kg', note: 'Amestec clasic 60% porc / 40% vită.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne tocată', priceRon: 15.45, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 15.95, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Carrefour', availability: 'always', aisle: 'Vitrina carne tocată', priceRon: 15.26, packGrams: 450, packLabel: 'caserolă 450 g', note: '' }
      ],
      sibiuNote: 'Amestecul e standardul pentru sarmale și bolognese în orice bucătărie din Sibiu. Selgros la 29 lei/kg în caserolă de 1 kg e cea mai bună variantă; Carrefour la 34 lei/kg pentru 450 g e cel mai prost raport.',
      per100g: { kcal: 220, protein: 18, carbs: 0, sugars: 0, fat: 16.5, satFat: 6.3, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.8, zincMg: 3.5, b12Ug: 1.4, potassiumMg: 300, cholesterolMg: 70 },
      serving: { grams: 150, label: '1 porție bolognese (150 g crud)' },
      effort: 3,
      timeMin: 60,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie adâncă sau oală', 'lingură de lemn'],
        steps: [
          'Călește ceapă tocată mărunt și morcov ras, 8 minute, până se înmoaie complet.',
          'Adaugă carnea și rumenește-o la foc mare, desfăcând cocoloașele — vrei bucăți rumenite, nu carne fiartă în suc.',
          'Adaugă 2 linguri bulion, 400 g roșii în suc propriu, 1 pahar de vin roșu, dafin, cimbru.',
          'Fierbe la foc mic, fără capac, 40–45 de minute, până scade și se îngroașă.',
          'Sare, piper, o linguriță de zahăr dacă roșiile sunt acre.'
        ],
        yieldNote: '500 g tocătură crudă ≈ 360 g carne gătită în sos'
      },
      taste: {
        profile: 'Echilibru între dulceața porcului și mineralitatea vitei',
        intensity: 4,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Suculentă și cu structură mai bună decât tocătura pură de porc',
        notes: 'Cel mai bun compromis din raftul de tocături: mai mult gust decât porcul singur, mai ieftină decât vita pură.'
      },
      stats: { taste: 82, satiety: 78, convenience: 52, versatility: 95 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Cea mai versatilă carne din bucătărie — sarmale, bolognese, musaca, ardei umpluți.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'romanian-classic', 'batch-cook', 'meal-prep', 'iron-rich', 'kid-friendly'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Paste', 'Foi de varză murată', 'Vinete', 'Bulion', 'Parmezan'],
      tips: [
        'Rumenește carnea în două tranșe. Dacă pui tot odată, tigaia se răcește și carnea fierbe în loc să se rumenească.',
        'Bolognese-ul e mai bun a doua zi — fă porție dublă, congelează jumătate.',
        'Verifică raportul: unele amestecuri au doar 20% vită și restul porc gras. Selgros e cel mai transparent.'
      ],
      warnings: [
        'Conține porc — nu e potrivit pentru cine evită carnea de porc.',
        'Perisabilă: 24 de ore la frigider.',
        '71 °C dacă porcul e din sursă necontrolată.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 h.',
      shelfLife: '1 zi refrigerată; 3 luni congelată',
      dataConfidence: 'medium',
      sources: ['Eticheta Selgros carne tocată amestec', 'USDA SR Legacy 10219 + 13020']
    },

    {
      id: 'm-jambon-crud-porc',
      name: 'Raw Ham Muscle (Pork Leg, Trimmed)',
      nameRo: 'Jambon crud de porc (pulpă fasonată)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🐖',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, mușchi de pulpă fasonat și vidat', priceRon: 59.8, packGrams: 2000, packLabel: 'bucată vidată ~2 kg', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona carne vidată', priceRon: 72.25, packGrams: 2500, packLabel: 'bucată vidată ~2,5 kg', note: 'Card Metro necesar.' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'La cerere, fasonat pe loc', priceRon: 49.5, packGrams: 1500, packLabel: '1,5 kg', note: 'Cere mușchiul mare de pulpă (fricandou).' }
      ],
      sibiuNote: 'Jambonul crud fasonat e materia primă pentru șuncă de casă. O bucată de 2 kg la 30 lei/kg, sărată și gătită sous-vide sau la cuptor la temperatură joasă, îți dă 1,5 kg de șuncă la 40 lei/kg — jumătate din prețul unei șunci decente de la raft.',
      per100g: { kcal: 134, protein: 21, carbs: 0, sugars: 0, fat: 5.5, satFat: 1.9, fiber: 0, salt: 0.14 },
      micros: { ironMg: 0.9, zincMg: 2.3, b12Ug: 0.7, potassiumMg: 370, cholesterolMg: 66 },
      serving: { grams: 150, label: '1 porție (150 g crud)' },
      effort: 5,
      timeMin: 2900,
      activeTimeMin: 35,
      cooking: {
        method: 'oven',
        difficulty: 'hard',
        equipment: ['recipient mare', 'termometru de carne', 'sfoară de bucătărie', 'cuptor cu control bun'],
        steps: [
          'Saramură 48 de ore: 3 l apă, 200 g sare, 60 g zahăr, dafin, ienibahar, usturoi. Ține la frigider, cu carnea complet scufundată.',
          'Scoate, clătește, usucă și leagă strâns cu sfoară pentru o formă cilindrică.',
          'Lasă descoperit în frigider 12 ore ca să se formeze pelicula uscată.',
          'Cuptor la 120 °C, cu un vas cu apă pe raftul de jos.',
          'Coace până la 68 °C în centru — aproximativ 2,5–3 ore pentru 2 kg. Verifică des după 2 ore.',
          'Răcește complet în frigider peste noapte, sub greutate, apoi feliază foarte subțire.'
        ],
        yieldNote: '2 kg jambon crud ≈ 1,5 kg șuncă gătită, feliabilă'
      },
      taste: {
        profile: 'Curat și sărat, cu gust real de carne, fără aromele artificiale ale mezelurilor',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 2,
        texture: 'Fermă, elastică, se feliază subțire fără să se rupă',
        notes: 'Rezultatul e mai bun decât 90% din șuncile de la raft și are 21 g proteină reală, nu 12 g plus apă și amidon.'
      },
      stats: { taste: 80, satiety: 86, convenience: 12, versatility: 78 },
      timing: { breakfast: 5, preWorkout: 2, postWorkout: 3, lunch: 5, snack: 4, dinner: 4, beforeBed: 3 },
      timingNote: 'Odată făcut, e cel mai bun mic dejun cu proteină din frigider — 150 g feliate dau 30 g proteină.',
      tags: ['high-protein', 'meal-prep', 'batch-cook', 'whole-food', 'bulk-buy', 'office-lunch', 'breakfast'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Pâine de secară', 'Muștar', 'Brânză', 'Castraveți murați', 'Ouă'],
      tips: [
        'Fără nitriți, șunca ta va fi gri, nu roz. E normal și e mai sănătos; gustul nu are de suferit.',
        'Sous-vide la 65 °C, 8 ore, dă un rezultat mult mai bun decât cuptorul dacă ai aparat.',
        'Feliată subțire și vidată, rezistă 10 zile la frigider.'
      ],
      warnings: [
        'Saramura trebuie ținută obligatoriu la frigider, sub 4 °C, tot timpul.',
        'Carnea trebuie complet scufundată; orice porțiune expusă la aer se poate altera.',
        'Fără nitriți, produsul finit se păstrează mai puțin — consumă în 7–10 zile.'
      ],
      storage: 'Frigider 0–4 °C, vidat pentru saramurare.',
      shelfLife: '5–7 zile crud vidat; produsul finit 7–10 zile',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 10023', 'selgros.ro carne porc']
    },

    {
      id: 'm-rasol-porc',
      name: 'Pork Hock / Shank',
      nameRo: 'Rasol (ciolan) de porc',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Porc',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, ciolane întregi', priceRon: 20.28, packGrams: 1200, packLabel: 'ciolan ~1,2 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 29.8, packGrams: 2000, packLabel: '2 ciolane ~2 kg', note: '' },
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne', priceRon: 21.6, packGrams: 1200, packLabel: '1,2 kg', note: 'Poți cere ciolan afumat sau proaspăt.' }
      ],
      sibiuNote: 'Ciolanul cu fasole e mâncarea de iarnă a Sibiului. La 15–17 lei/kg e ieftin, dar 45% e os și piele. Ce câștigi e colagenul care transformă fasolea într-o mâncare cremoasă fără să adaugi nimic.',
      per100g: { kcal: 209, protein: 18.5, carbs: 0, sugars: 0, fat: 15, satFat: 5.4, fiber: 0, salt: 0.14 },
      micros: { ironMg: 1.1, zincMg: 2.8, b12Ug: 0.7, potassiumMg: 280, cholesterolMg: 80 },
      serving: { grams: 300, label: '1/2 ciolan (300 g crud, cu os)' },
      effort: 4,
      timeMin: 195,
      activeTimeMin: 20,
      cooking: {
        method: 'slow',
        difficulty: 'easy',
        equipment: ['oală mare cu capac', 'spumieră'],
        steps: [
          'Dacă e afumat, ține-l 4 ore în apă rece schimbată de două ori ca să scadă sarea.',
          'Pune în apă rece cu ceapă, morcov, dafin, boabe de piper.',
          'Adu la fierbere, spumează, apoi foc minim 2,5–3 ore, cu capac întredeschis.',
          'Adaugă fasolea înmuiată peste noapte în ultimele 60 de minute.',
          'Când carnea cade de pe os, scoate ciolanul, dezosează-l și pune carnea înapoi.',
          'La final: ceapă călită cu boia, mărar, oțet după gust.'
        ],
        yieldNote: '1 kg ciolan ≈ 500 g carne dezosată gătită + zeamă foarte gelatinoasă'
      },
      taste: {
        profile: 'Profund, sărat, cu gelatină care îmbracă tot',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 5,
        richness: 4,
        texture: 'Carne care se destramă, șorici moale, zeamă groasă',
        notes: 'Comfort food românesc de manual. Nutrițional e mediu — mult os, multă grăsime — dar sațietatea e enormă.'
      },
      stats: { taste: 82, satiety: 88, convenience: 20, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 2, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de iarnă, de duminică; se reîncălzește mai bine a doua zi.',
      tags: ['high-protein', 'budget', 'cheap-protein', 'romanian-classic', 'winter', 'batch-cook', 'slow-digesting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Fasole albă', 'Varză murată', 'Ceapă roșie', 'Hrean', 'Mămăligă'],
      tips: [
        'Ciolanul afumat sărează singur mâncarea — nu pune sare până la final, riști să fie necomestibil.',
        'Zeama rămasă, strecurată și răcită, devine gelatină pură; folosește-o la piftie sau la sosuri.',
        '45% din greutate e os și șorici; calculează 500 g carne la 1 kg cumpărat.'
      ],
      warnings: [
        'Varianta afumată poate avea peste 2 g sare la 100 g — desărează obligatoriu.',
        'Timp de gătit 3 ore; nu e mâncare de zi de lucru.',
        'Bogat în purine — atenție dacă ai gută.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile proaspăt; 6 luni congelat',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 10046', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-muschi-vita',
      name: 'Beef Tenderloin',
      nameRo: 'Mușchi de vită (file)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, vitrina de vită maturată', priceRon: 119, packGrams: 1000, packLabel: 'bucată vidată 1–2 kg', note: 'Cel mai bun raport din Sibiu la vită premium.' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona vită, origine România sau import', priceRon: 187.5, packGrams: 1500, packLabel: 'file întreg ~1,5 kg', note: 'Card Metro necesar.' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie, vitrina premium', priceRon: 55.6, packGrams: 400, packLabel: 'porție vidată ~400 g', note: '' },
        { name: 'Măcelărie locală', availability: 'occasional', aisle: 'Comandă cu 2–3 zile înainte', priceRon: 72.5, packGrams: 500, packLabel: '500 g', note: '' }
      ],
      sibiuNote: 'Mușchiul de vită e cea mai scumpă proteină din tot ghidul: 129 lei/kg pentru 21 g proteină înseamnă 6 lei per 10 g proteină, de 20 de ori mai scump decât ficatul de porc. Îl cumperi pentru ocazie, nu pentru macro. Selgros are cel mai constant stoc din Sibiu.',
      per100g: { kcal: 142, protein: 21, carbs: 0, sugars: 0, fat: 6.5, satFat: 2.5, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2.4, zincMg: 4.2, b12Ug: 2.1, potassiumMg: 360, cholesterolMg: 62 },
      serving: { grams: 200, label: '1 medalion gros (200 g crud)' },
      effort: 3,
      timeMin: 25,
      activeTimeMin: 15,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie de fontă', 'termometru de carne', 'clește'],
        steps: [
          'Scoate carnea din frigider cu 45 de minute înainte. O bucată rece în centru se gătește inegal.',
          'Usuc-o perfect și sar-o generos cu 40 de minute înainte sau chiar înainte de a o pune în tigaie — niciodată la 10 minute.',
          'Tigaie de fontă fumegândă, ulei cu punct de fum ridicat.',
          'Câte 2 minute pe fiecare parte pentru o bucată de 4 cm; la final adaugă unt, usturoi și cimbru și stropește 60 de secunde.',
          'Temperaturi: 52 °C medium-rare, 57 °C medium, 63 °C medium-well. Peste asta strici o carne de 130 de lei.',
          'Odihnește 8 minute pe grătar, nu pe farfurie plată.'
        ],
        yieldNote: '1 kg mușchi crud ≈ 750 g gătit medium-rare'
      },
      taste: {
        profile: 'Fin, delicat, cu gust de vită discret — plătești pentru textură, nu pentru aromă',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 4,
        richness: 3,
        texture: 'Cea mai fragedă bucată de vită; se taie cu furculița',
        notes: 'Paradox: e cea mai scumpă bucată și are mai puțin gust decât antricotul de 90 de lei. Cumperi frăgezime absolută. Merită o dată pe lună, nu săptămânal.'
      },
      stats: { taste: 90, satiety: 82, convenience: 30, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină de ocazie. Nutrițional e o carne foarte bună; economic e o extravaganță.',
      tags: ['premium', 'iron-rich', 'b12', 'complete-protein', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de piper verde', 'Cartofi gratinați', 'Sparanghel', 'Vin roșu', 'Unt cu ierburi'],
      tips: [
        'Costul proteinei: ~62 lei per 100 g proteină. Pentru comparație, pieptul de pui e la ~14 lei. Știi ce cumperi.',
        'Capătul subțire al fileului (vârful) e mai ieftin cu 20 lei/kg și perfect pentru stroganoff.',
        'Nu-l găti niciodată peste medium. La 6,5 g grăsime nu are ce să-l țină umed.'
      ],
      warnings: [
        'Carne roșie — recomandarea e sub 500 g carne roșie gătită pe săptămână.',
        'Vita gătită rar (rare) e sigură doar dacă bucata e întreagă, nu tocată sau fragezită mecanic.'
      ],
      storage: 'Frigider 0–2 °C, vidat.',
      shelfLife: '4–5 zile refrigerat, 14 zile vidat; 8 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13148', 'selgros.ro carne vita']
    },

    {
      id: 'm-antricot-vita',
      name: 'Beef Ribeye',
      nameRo: 'Antricot de vită (ribeye)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, vitrina de vită', priceRon: 84.9, packGrams: 1000, packLabel: 'antricot întreg sau felii', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona vită origine România', priceRon: 159.8, packGrams: 2000, packLabel: 'bucată ~2 kg', note: 'Card Metro necesar.' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie premium', priceRon: 33.22, packGrams: 350, packLabel: 'steak vidat ~350 g', note: '' },
        { name: 'Carrefour', availability: 'occasional', aisle: 'Vitrina de vită', priceRon: 29.7, packGrams: 300, packLabel: 'steak ~300 g', note: '' }
      ],
      sibiuNote: 'Antricotul e alegerea rațională dacă vrei steak în Sibiu: costă cu 40 de lei/kg mai puțin decât mușchiul și are de trei ori mai mult gust. Metro, la bucată întreagă, e cel mai bun preț — feliezi acasă la 3 cm.',
      per100g: { kcal: 247, protein: 19, carbs: 0, sugars: 0, fat: 19, satFat: 7.8, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2, zincMg: 4.5, b12Ug: 2.3, potassiumMg: 320, cholesterolMg: 68 },
      serving: { grams: 250, label: '1 steak (250 g crud)' },
      effort: 3,
      timeMin: 30,
      activeTimeMin: 18,
      cooking: {
        method: 'grill',
        difficulty: 'medium',
        equipment: ['tigaie de fontă sau grătar', 'termometru', 'clește'],
        steps: [
          'Temperatura camerei 45 de minute, apoi usucă foarte bine.',
          'Sare grunjoasă din belșug pe ambele fețe. Piperul se pune după gătit, altfel se arde.',
          'Fontă fumegândă sau jar puternic. 3 minute pe o parte, 3 pe cealaltă pentru 3 cm grosime.',
          'Ține steakul pe muchia de grăsime 60 de secunde ca să se topească și să se rumenească.',
          'Scoate la 52 °C pentru medium-rare; temperatura urcă la 55–56 °C în odihnă.',
          'Odihnește 8–10 minute. Taie perpendicular pe fibră, felii de 1 cm.'
        ],
        yieldNote: '1 kg antricot crud ≈ 720 g gătit medium-rare'
      },
      taste: {
        profile: 'Intens, unt topit, cu marmorare care se dizolvă în gură',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Fragedă cu structură; vinișoarele de grăsime dau suculență permanentă',
        notes: 'Cel mai bun raport gust/preț din raftul de vită. Nu e la fel de fragedă ca mușchiul, dar are de trei ori aroma.'
      },
      stats: { taste: 95, satiety: 78, convenience: 32, versatility: 50 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină de sâmbătă. 250 g crud = 48 g proteină, dar și 618 kcal.',
      tags: ['high-protein', 'premium', 'high-kcal', 'iron-rich', 'b12', 'complete-protein', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Unt cu usturoi', 'Cartofi prăjiți', 'Salată verde', 'Sare grunjoasă', 'Vin roșu'],
      tips: [
        'Feliile de 3 cm sunt minimul. Sub 2 cm nu poți face crustă fără să treci carnea de medium.',
        'Vita maturată uscat (dry aged) costă cu 30–40% mai mult și pierde 20% din greutate la maturare — plătești pentru aromă concentrată.',
        'Costul proteinei: ~47 lei per 100 g proteină, față de 14 lei la pieptul de pui.'
      ],
      warnings: [
        'Grăsime saturată 7,8 g/100 g; o porție de 250 g depășește jumătate din maximul zilnic.',
        'Carne roșie — sub 500 g gătit pe săptămână total.',
        'Fumul de la grăsimea arsă pe jar conține HAP; evită flacăra directă.'
      ],
      storage: 'Frigider 0–2 °C, vidat sau pe grătar descoperit dacă vrei crustă uscată.',
      shelfLife: '4–5 zile refrigerat; 8 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13138', 'produse.metro.ro vita origine Romania']
    },

    {
      id: 'm-vrabioara-vita',
      name: 'Beef Striploin / Sirloin',
      nameRo: 'Vrăbioară de vită (striploin)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🥩',
      unit: 'g',
      stores: [
        { name: 'Metro', availability: 'usual', aisle: 'Zona vită, bucăți întregi vidate', priceRon: 187.25, packGrams: 2500, packLabel: 'vrăbioară întreagă ~2,5 kg', note: 'Card Metro necesar.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, vitrina de vită', priceRon: 79.9, packGrams: 1000, packLabel: 'bucată sau felii', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie premium', priceRon: 31.47, packGrams: 350, packLabel: 'steak ~350 g', note: '' }
      ],
      sibiuNote: 'Vrăbioara e compromisul inteligent între mușchi și antricot: mai fragedă decât antricotul, mai gustoasă decât mușchiul, cu 40 de lei/kg mai ieftină decât fileul. La Metro, bucata întreagă de 2,5 kg îți dă 8 steakuri la 75 lei/kg.',
      per100g: { kcal: 192, protein: 21, carbs: 0, sugars: 0, fat: 12, satFat: 4.8, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2.1, zincMg: 4.3, b12Ug: 2.2, potassiumMg: 340, cholesterolMg: 65 },
      serving: { grams: 220, label: '1 steak (220 g crud)' },
      effort: 3,
      timeMin: 28,
      activeTimeMin: 16,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie de fontă', 'termometru', 'clește'],
        steps: [
          'Temperatura camerei 40 de minute, uscare completă cu prosop de hârtie.',
          'Crestează banda de grăsime de pe margine în 4–5 locuri, ca să nu se curbeze.',
          'Fontă foarte încinsă, 2 minute 30 pe fiecare parte pentru 2,5 cm.',
          'Muchia grasă 60 de secunde, ținută cu clește.',
          'Unt, cimbru, usturoi, stropit 45 de secunde. Scoate la 52 °C.',
          'Odihnește 8 minute și feliază perpendicular pe fibră.'
        ],
        yieldNote: '1 kg vrăbioară crudă ≈ 730 g gătită medium-rare'
      },
      taste: {
        profile: 'Vită clasică — ferm, sărat, cu banda de grăsime care dă tot caracterul',
        intensity: 4,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Mai densă și mai cu mușcătură decât antricotul, dar tot fragedă',
        notes: 'Steakul pe care îl comanzi când vrei să mesteci ceva, nu doar să topești în gură. Pentru mine, cel mai echilibrat din tot raftul de vită.'
      },
      stats: { taste: 90, satiety: 84, convenience: 32, versatility: 62 },
      timing: { breakfast: 0, preWorkout: 2, postWorkout: 4, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: '220 g crud = 46 g proteină la 422 kcal. Cel mai bun steak pentru cine numără macro.',
      tags: ['premium', 'iron-rich', 'b12', 'complete-protein', 'whole-food', 'bulk-buy'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Piure de cartofi', 'Ciuperci sotate', 'Sos chimichurri', 'Rucola', 'Sare Maldon'],
      tips: [
        'Cumpără bucata întreagă la Metro sau Selgros și feliaz-o singur — economisești 15–20 lei/kg față de steakurile porționate.',
        'Bucata întreagă se congelează perfect feliată, cu hârtie între felii.',
        'Costul proteinei: ~38 lei per 100 g proteină — cel mai bun raport din vita premium.'
      ],
      warnings: ['Carne roșie — limita de 500 g gătit pe săptămână.', 'Grăsime saturată 4,8 g/100 g.'],
      storage: 'Frigider 0–2 °C, vidat.',
      shelfLife: '4–5 zile refrigerată, 14 zile vidată; 8 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13456', 'produse.metro.ro vita origine Romania']
    },

    {
      id: 'm-rasol-vita',
      name: 'Beef Shank',
      nameRo: 'Rasol de vită (cu os și măduvă)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, felii groase cu os rotund', priceRon: 39.9, packGrams: 1000, packLabel: 'felii ~1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie', priceRon: 71.8, packGrams: 2000, packLabel: 'rasol întreg ~2 kg', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne', priceRon: 42, packGrams: 1000, packLabel: '1 kg', note: 'Cere felii groase de 4 cm pentru osso buco.' }
      ],
      sibiuNote: 'Rasolul e cea mai ieftină vită reală din Sibiu — 36–40 lei/kg — și, gătit 3 ore, e mai bun decât un steak prost făcut. Osul cu măduvă din mijloc e bonus. Selgros are cel mai bun preț la bucată întreagă.',
      per100g: { kcal: 134, protein: 21.5, carbs: 0, sugars: 0, fat: 5.3, satFat: 2, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2.6, zincMg: 5.5, b12Ug: 2.5, potassiumMg: 330, cholesterolMg: 68 },
      serving: { grams: 300, label: '1 felie groasă (300 g crud, cu os)' },
      effort: 4,
      timeMin: 220,
      activeTimeMin: 30,
      cooking: {
        method: 'slow',
        difficulty: 'medium',
        equipment: ['oală de fontă cu capac', 'tigaie', 'sfoară de bucătărie'],
        steps: [
          'Leagă fiecare felie cu sfoară pe circumferință ca să nu se desfacă la fiert.',
          'Dă prin făină, rumenește puternic 4 minute pe fiecare parte în ulei.',
          'Scoate, călește ceapă, morcov, țelină 10 minute în aceeași oală.',
          'Adaugă 200 ml vin alb, lasă să scadă la jumătate, apoi 400 ml supă și roșii.',
          'Pune carnea înapoi, capac, cuptor 150 °C, 3 ore.',
          'E gata când carnea se desprinde singură și măduva din os s-a topit în sos.',
          'Gremolata la final: coajă de lămâie, usturoi, pătrunjel — taie grăsimea perfect.'
        ],
        yieldNote: '1 kg rasol ≈ 600 g carne gătită fără os'
      },
      taste: {
        profile: 'Adânc, gelatinos, cu măduvă care îmbogățește tot sosul',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Fibre lungi care se desfac; textură untoasă din colagenul topit',
        notes: 'Cea mai bună mâncare de vită pe care o poți face cu 40 de lei. Necesită 3 ore, dar 2 ore și 40 sunt complet pasive.'
      },
      stats: { taste: 86, satiety: 90, convenience: 20, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de duminică cu resturi excelente; sosul se gelifică la frigider.',
      tags: ['budget', 'cheap-protein', 'iron-rich', 'b12', 'batch-cook', 'winter', 'slow-digesting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Piure de cartofi', 'Risotto', 'Gremolata', 'Mămăligă', 'Vin roșu'],
      tips: [
        'Măduva din os e cea mai bună parte — scoate-o cu o linguriță și întinde-o pe pâine prăjită.',
        'Sub 2 ore și 30 rămâne tare. Colagenul are nevoie de timp la 85–90 °C ca să devină gelatină.',
        'Cea mai slabă bucată de vită din raft (5,3 g grăsime) și una dintre cele mai ieftine.'
      ],
      warnings: ['Timp lung de gătit; nu funcționează la foc mare și rapid.', 'Osul e mare — 35–40% din greutatea cumpărată.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerat; 8 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13418', 'selgros.ro carne vita']
    },

    {
      id: 'm-gulas-vita',
      name: 'Beef Chuck, Stewing Cubes',
      nameRo: 'Carne de vită pentru gulaș (cuburi)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserole cu cuburi', priceRon: 41.9, packGrams: 1000, packLabel: 'caserolă 1 kg', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Carmangerie, tăvi de gulaș', priceRon: 31.43, packGrams: 700, packLabel: 'tavă ~700 g', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Zona vită', priceRon: 79.8, packGrams: 2000, packLabel: 'caserolă 2 kg', note: 'Card Metro necesar.' },
        { name: 'Carrefour', availability: 'usual', aisle: 'Vitrina de vită', priceRon: 23.95, packGrams: 500, packLabel: 'caserolă 500 g', note: '' }
      ],
      sibiuNote: 'Gulașul de vită e mâncarea de iarnă a Transilvaniei și în Sibiu se face cu boia dulce de bună calitate, nu cu bulion. La 40–42 lei/kg la Selgros sau Metro, 1 kg de cuburi hrănește 5 oameni.',
      per100g: { kcal: 173, protein: 19.5, carbs: 0, sugars: 0, fat: 10.5, satFat: 4.2, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2.3, zincMg: 5.8, b12Ug: 2.4, potassiumMg: 315, cholesterolMg: 70 },
      serving: { grams: 200, label: '1 porție de gulaș (200 g crud)' },
      effort: 4,
      timeMin: 165,
      activeTimeMin: 25,
      cooking: {
        method: 'slow',
        difficulty: 'easy',
        equipment: ['oală de fontă cu capac', 'lingură de lemn'],
        steps: [
          'Usucă cuburile foarte bine și rumenește-le în două-trei tranșe, la foc mare. Aglomerarea le fierbe și pierzi crusta.',
          'Scoate carnea, călește 3 cepe mari tocate în aceeași grăsime, 12 minute, până devin aurii.',
          'Ia oala de pe foc și adaugă 2 linguri de boia dulce — boia arsă devine amară în 20 de secunde.',
          'Pune carnea înapoi, chimen, usturoi, foaie de dafin, 500 ml supă sau apă.',
          'Capac, foc minim sau cuptor 150 °C, 2 ore și 30 de minute.',
          'Adaugă cartofi cuburi în ultimele 30 de minute dacă vrei o mâncare completă.',
          'Sare la final; gulașul redus concentrează sarea.'
        ],
        yieldNote: '1 kg cuburi crude ≈ 650 g carne gătită în sos'
      },
      taste: {
        profile: 'Dulce de la boia și ceapă, adânc, cu sos care se lipește de lingură',
        intensity: 5,
        sweetness: 3,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Cuburi care se rup cu furculița, în sos gros și onctuos',
        notes: 'Un gulaș bun e mai satisfăcător decât un steak mediocru. Și costă o treime.'
      },
      stats: { taste: 87, satiety: 90, convenience: 25, versatility: 60 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de iarnă care se face mai bună a doua și a treia zi.',
      tags: ['high-protein', 'iron-rich', 'b12', 'batch-cook', 'meal-prep', 'winter', 'romanian-classic', 'mid-price', 'slow-digesting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Găluște de făină', 'Mămăligă', 'Smântână', 'Boia dulce', 'Castraveți murați'],
      tips: [
        'Boia se pune întotdeauna cu oala luată de pe foc. E singura greșeală care distruge complet gulașul.',
        'Cuburile din spată (chuck) sunt mai bune decât cele din pulpă — au mai mult colagen, deci sos mai bogat.',
        'Congelează în porții de 300 g; gulașul decongelat e practic identic cu cel proaspăt.'
      ],
      warnings: ['Necesită minimum 2 ore de fiert; sub atât, carnea e tare.', 'Carne roșie — limita săptămânală de 500 g gătit.'],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile crudă; mâncarea gătită 4 zile, 4 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 13364', 'selgros.ro carne vita']
    },

    {
      id: 'm-carne-tocata-vita',
      name: 'Ground Beef',
      nameRo: 'Carne tocată de vită',
      brand: 'Selgros / K-Purland (Kaufland)',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, caserolă 1 kg + tocare la cerere', priceRon: 46.9, packGrams: 1000, packLabel: 'caserolă 1 kg', note: 'Cere tocare din rasol pentru varianta slabă.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne tocată', priceRon: 24.95, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Lidl', availability: 'usual', aisle: 'Raft carne refrigerată', priceRon: 20.76, packGrams: 400, packLabel: 'caserolă 400 g', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Zona carne tocată', priceRon: 89.8, packGrams: 2000, packLabel: 'caserolă 2 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Tocătura de vită e de două ori mai scumpă decât cea de porc și are mai puțină grăsime. Pentru burgeri, cere la carmangeria Selgros tocare din spată cu 20% grăsime; tocătura slabă de 5% face burgeri uscați, indiferent ce faci.',
      per100g: { kcal: 214, protein: 18.5, carbs: 0, sugars: 0, fat: 15.5, satFat: 6.2, fiber: 0, salt: 0.13 },
      micros: { ironMg: 2.2, zincMg: 4.6, b12Ug: 2.1, potassiumMg: 290, cholesterolMg: 70 },
      serving: { grams: 150, label: '1 burger mediu (150 g crud)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 14,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie de fontă', 'spatulă lată'],
        steps: [
          'Pentru burger: NU frământa. Modelează lejer bile de 150 g, apasă un adânc în centru cu degetul mare.',
          'Sare doar la exterior, chiar înainte de gătit. Sarea în compoziție face textură de cârnat.',
          'Fontă fumegândă, apasă bila cu spatula 10 secunde ca să se lipească de tigaie (smash burger) sau las-o rotundă.',
          'Trei minute pe o parte, întoarce o singură dată, încă 2–3 minute.',
          'Pentru siguranță, tocătura de vită se gătește la 71 °C în centru — spre deosebire de steak, nu se mănâncă în sânge.',
          'Odihnește 3 minute, apoi asamblează.'
        ],
        yieldNote: '150 g tocătură crudă ≈ 110 g burger gătit'
      },
      taste: {
        profile: 'Mineral, sărat, cu gust de vită concentrat de crusta Maillard',
        intensity: 4,
        sweetness: 1,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Depinde complet de procentul de grăsime: 20% e suculentă, 5% e nisipoasă',
        notes: 'Cea mai bună tocătură pentru burger, chili și lasagna. Ca preț, aproape dublul celei de porc pentru puțin mai multă proteină.'
      },
      stats: { taste: 85, satiety: 80, convenience: 55, versatility: 90 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Bogată în fier și B12 — utilă în perioadele de antrenament greu.',
      tags: ['high-protein', 'iron-rich', 'b12', 'mid-price', 'batch-cook', 'meal-prep', 'complete-protein', 'bulking'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Chifle brioche', 'Cheddar', 'Ceapă caramelizată', 'Castraveți murați', 'Paste'],
      tips: [
        'Tocătura de vită se oxidează la suprafață și devine maro-gri în ambalaj. Nu e stricată — e doar mioglobina expusă la aer.',
        'Pentru burger, 20% grăsime e minimul. Pentru bolognese sau chili, 10% e mai bună.',
        'Toată tocătura, indiferent de specie, trebuie gătită complet: bacteriile de la suprafață ajung în interior la tocare.'
      ],
      warnings: [
        '71 °C obligatoriu pentru orice carne tocată de vită — riscul de E. coli O157 e real.',
        'Foarte perisabilă: 24 de ore la frigider.',
        'Carne roșie — respectă limita săptămânală.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 h.',
      shelfLife: '1 zi refrigerată; 3–4 luni congelată',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13020', 'selgros.ro carne tocata']
    },

    {
      id: 'm-ficat-vita',
      name: 'Beef Liver',
      nameRo: 'Ficat de vită',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'usual', aisle: 'Carmangerie, tăviță de organe', priceRon: 12.45, packGrams: 500, packLabel: 'tăviță ~500 g', note: '' },
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne', priceRon: 28, packGrams: 1000, packLabel: '1 kg', note: 'Cere felii subțiri, tăiate pe loc.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie', priceRon: 22.9, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Ficatul de vită e mai intens și mai închis la culoare decât cel de porc, dar cu textură mai fină. La 23–25 lei/kg e o sursă extraordinară de fier și B12 pentru cine îl suportă. Îl găsești mai constant la Kaufland decât la Lidl.',
      per100g: { kcal: 133, protein: 20.4, carbs: 3.9, sugars: 0, fat: 3.6, satFat: 1.2, fiber: 0, salt: 0.19 },
      micros: { ironMg: 4.9, zincMg: 4, b12Ug: 59.3, vitDUg: 1.2, potassiumMg: 313, cholesterolMg: 275 },
      serving: { grams: 120, label: '1 felie (120 g crud)' },
      effort: 3,
      timeMin: 45,
      activeTimeMin: 18,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie', 'castron pentru lapte', 'cuțit ascuțit'],
        steps: [
          'Îndepărtează membrana exterioară transparentă — se strânge la căldură și deformează felia.',
          'Taie felii de 8–10 mm, apoi ține-le 30 de minute în lapte.',
          'Usucă-le foarte bine și dă-le prin făină condimentată.',
          'Tigaie foarte încinsă cu unt și ulei, 90 de secunde pe fiecare parte. Atât.',
          'Scoate ficatul, călește ceapă felii în aceeași tigaie 8 minute, deglasează cu oțet balsamic.',
          'Pune ficatul înapoi 20 de secunde, sare, piper, servește imediat.'
        ],
        yieldNote: '1 kg ficat crud ≈ 700 g gătit'
      },
      taste: {
        profile: 'Puternic mineral, ușor dulceag, mai fin decât ficatul de porc',
        intensity: 5,
        sweetness: 2,
        saltiness: 1,
        umami: 5,
        richness: 3,
        texture: 'Mătăsoasă la 3 minute; granuloasă și seacă la 5',
        notes: 'Cel mai bun dintre ficați ca textură. Rămâne totuși un aliment care împarte lumea în două tabere. Nota 30 la gust e realistă.'
      },
      stats: { taste: 30, satiety: 82, convenience: 38, versatility: 35 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 4, snack: 1, dinner: 4, beforeBed: 1 },
      timingNote: 'O porție de 120 g o dată la 1–2 săptămâni acoperă B12 pentru mult timp.',
      tags: ['protein-dense', 'iron-rich', 'b12', 'budget', 'cheap-protein', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Ceapă caramelizată', 'Oțet balsamic', 'Piure de cartofi', 'Slănină', 'Salvie'],
      tips: [
        '100 g de ficat de vită conțin 59 µg de B12 — de 24 de ori necesarul zilnic. O porție acoperă aproape o lună.',
        'Fierul din ficat e fier hemic, absorbit de 3–4 ori mai bine decât cel din plante.',
        'Congelat feliat și adăugat ras (încă înghețat) în tocătură e cel mai bun mod de a-l consuma dacă îl detești.'
      ],
      warnings: [
        'Vitamina A ~5000 µg/100 g. Femeile însărcinate trebuie să îl evite complet.',
        'Colesterol 275 mg/100 g și purine ridicate.',
        'Nu depăși 1 porție de 100–150 g pe săptămână.'
      ],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '1–2 zile refrigerat; 3 luni congelat',
      dataConfidence: 'high',
      sources: ['USDA SR Legacy 13325', 'CIQUAL 28001']
    },

    {
      id: 'm-limba-vita',
      name: 'Beef Tongue',
      nameRo: 'Limbă de vită',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'usual', aisle: 'Halele de carne, la măcelari — cere din timp', priceRon: 55.2, packGrams: 1200, packLabel: 'limbă întreagă ~1,2 kg', note: 'Comandă cu o zi înainte.' },
        { name: 'Selgros', availability: 'occasional', aisle: 'Carmangerie, vitrina de organe', priceRon: 64.35, packGrams: 1500, packLabel: 'limbă ~1,5 kg', note: '' },
        { name: 'Metro', availability: 'occasional', aisle: 'Zona vită', priceRon: 62.85, packGrams: 1500, packLabel: '1,5 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Limba de vită e o delicatesă subestimată: 3 ore de fiert și obții cea mai fină carne posibilă, la 42–46 lei/kg. În Sibiu o comanzi la măcelarii din Piața Cibin; în supermarket apare rar.',
      per100g: { kcal: 220, protein: 15, carbs: 0, sugars: 0, fat: 17.7, satFat: 6.9, fiber: 0, salt: 0.19 },
      micros: { ironMg: 2.9, zincMg: 3.2, b12Ug: 3.8, potassiumMg: 315, cholesterolMg: 87 },
      serving: { grams: 150, label: '1 porție (150 g crud)' },
      effort: 4,
      timeMin: 210,
      activeTimeMin: 30,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['oală mare', 'cuțit mic ascuțit', 'castron cu apă rece'],
        steps: [
          'Spală limba bine sub jet și freac-o cu sare grunjoasă.',
          'Fierbe în apă cu ceapă, morcov, dafin, boabe de piper, 2 ore și 30 – 3 ore.',
          'E gata când o furculiță intră fără rezistență în partea groasă.',
          'Scoate-o și pune-o imediat în apă rece 3 minute — pielea albă se desprinde ușor doar cât e caldă.',
          'Curăță complet pielea și cartilajele de la bază.',
          'Feliază subțire, perpendicular, și servește cu sos de hrean sau de smântână cu usturoi.'
        ],
        yieldNote: '1 kg limbă crudă ≈ 600 g carne curățată și fiartă'
      },
      taste: {
        profile: 'Bogat, untos, cu gust de vită concentrat și fără nicio urmă de organ',
        intensity: 4,
        sweetness: 2,
        saltiness: 1,
        umami: 5,
        richness: 5,
        texture: 'Uluitor de fină și untoasă, complet fără fibre tari',
        notes: 'Cel mai puțin înfricoșător organ. Cine o mănâncă fără să știe ce e, crede că e cea mai bună carne de vită gustată vreodată.'
      },
      stats: { taste: 78, satiety: 84, convenience: 15, versatility: 50 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 2, lunch: 4, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Preparat de sărbătoare sau de duminică; feliată rece e un excelent aperitiv proteic.',
      tags: ['high-protein', 'iron-rich', 'b12', 'mid-price', 'whole-food', 'high-kcal', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de hrean', 'Smântână cu usturoi', 'Cartofi fierți', 'Muștar', 'Pâine de secară'],
      tips: [
        'Curățarea pielii se face doar cât limba e fierbinte. Dacă se răcește, devine aproape imposibil.',
        'Feliată subțire și prăjită scurt în unt, devine taco de lengua — mult peste orice mezel.',
        'Zeama de fiert e o supă de vită excelentă; strecoar-o și păstreaz-o.'
      ],
      warnings: [
        'Grăsime 17,7 g/100 g și doar 15 g proteină — raportul e mai slab decât pare.',
        'Colesterol ridicat.',
        'Necesită 3 ore și o etapă de curățare care cere puțină îndemânare.'
      ],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '2 zile crudă; 6 luni congelată; fiartă și feliată, 4 zile',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 13324', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-inima-vita',
      name: 'Beef Heart',
      nameRo: 'Inimă de vită',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🫀',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'occasional', aisle: 'Halele de carne, la cerere', priceRon: 42, packGrams: 1500, packLabel: 'inimă întreagă ~1,5 kg', note: 'Comandă din timp.' },
        { name: 'Selgros', availability: 'occasional', aisle: 'Carmangerie, vitrina de organe', priceRon: 38.85, packGrams: 1500, packLabel: '1,5 kg', note: '' },
        { name: 'Măcelărie locală', availability: 'occasional', aisle: 'La comandă', priceRon: 45, packGrams: 1500, packLabel: '1,5 kg', note: '' }
      ],
      sibiuNote: 'Inima de vită e cel mai bine păstrat secret nutrițional din Sibiu: 17,7 g proteină, doar 3,9 g grăsime, plin de CoQ10, la 26–30 lei/kg. E un mușchi, nu un organ filtrant, deci gustul e de carne roșie normală.',
      per100g: { kcal: 108, protein: 17.7, carbs: 0.1, sugars: 0, fat: 3.9, satFat: 1.4, fiber: 0, salt: 0.24 },
      micros: { ironMg: 4.3, zincMg: 1.7, b12Ug: 8.5, potassiumMg: 287, cholesterolMg: 124 },
      serving: { grams: 180, label: '1 porție (180 g crud)' },
      effort: 3,
      timeMin: 40,
      activeTimeMin: 25,
      cooking: {
        method: 'grill',
        difficulty: 'medium',
        equipment: ['cuțit ascuțit', 'grătar sau tigaie grill', 'bol pentru marinat'],
        steps: [
          'Curăță complet: taie grăsimea de la bază, valvele albe și orice țesut conjunctiv tare. Rămâne doar mușchiul roșu.',
          'Taie fâșii de 2 cm sau cuburi pentru frigărui.',
          'Marinează 2 ore în ulei de măsline, oțet de vin roșu, usturoi, chimen, oregano — rețeta de anticucho.',
          'Grătar foarte încins sau tigaie grill: 2 minute pe fiecare parte, atât.',
          'Trebuie servită medium-rare. Supragătită devine ficat de gumă.',
          'Sare grunjoasă și lămâie la final.'
        ],
        yieldNote: '1 kg inimă crudă ≈ 700 g curățată, ≈ 500 g gătită'
      },
      taste: {
        profile: 'Carne roșie densă, ușor mineral, mult mai apropiată de un steak decât de un organ',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 5,
        richness: 2,
        texture: 'Densă și cu mușcătură fermă; niciodată moale ca un file',
        notes: 'Dacă îți e frică de organe, începe cu inima. Gustul e 90% carne de vită și 10% notă minerală. La 26 lei/kg e un chilipir nutrițional.'
      },
      stats: { taste: 62, satiety: 86, convenience: 28, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 2, postWorkout: 4, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Proteină slabă și densă, bogată în fier și CoQ10 — foarte bună în perioade de volum mare de antrenament.',
      tags: ['protein-dense', 'iron-rich', 'b12', 'budget', 'cheap-protein', 'whole-food', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Chimichurri', 'Cartofi la cuptor', 'Lămâie', 'Ardei iute', 'Oregano'],
      tips: [
        'Inima e mușchi, nu organ filtrant — nu acumulează toxine și nu are gustul de ficat.',
        '65% din calorii vin din proteină, cu doar 3,9 g grăsime. Raport comparabil cu pieptul de curcan la un sfert din preț.',
        'Curățarea durează 10 minute prima dată, 4 minute a doua oară. Merită efortul.'
      ],
      warnings: [
        'Trebuie servită medium-rare sau după fierbere lungă; între cele două extreme e cauciuc.',
        'Colesterol 124 mg/100 g.',
        'Disponibilitate inconstantă în Sibiu — comandă din timp.'
      ],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '1–2 zile crudă; 4 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 13321', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-oase-maduva-vita',
      name: 'Beef Marrow Bones',
      nameRo: 'Oase cu măduvă de vită',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🍖',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'always', aisle: 'Halele de carne — cere oase tăiate transversal', priceRon: 14, packGrams: 1000, packLabel: '1 kg', note: 'Cere-le tăiate la 6–8 cm, cu ferăstrăul.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, tăvi de oase', priceRon: 12.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Kaufland', availability: 'occasional', aisle: 'Carmangerie, la cerere', priceRon: 15.9, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Oasele cu măduvă sunt cel mai ieftin lucru din carmangerie și au două utilizări: măduva coaptă pe pâine prăjită și supa de oase. Ca sursă de proteină sunt aproape inutile — e important să spun asta clar.',
      per100g: { kcal: 181, protein: 6, carbs: 0, sugars: 0, fat: 17.5, satFat: 8, fiber: 0, salt: 0.1 },
      micros: { ironMg: 1, zincMg: 1, b12Ug: 0.5, potassiumMg: 80, cholesterolMg: 60 },
      serving: { grams: 200, label: '2 oase (200 g cu tot cu os)' },
      effort: 3,
      timeMin: 40,
      activeTimeMin: 10,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă de cuptor', 'lingurițe lungi', 'pâine bună'],
        steps: [
          'Ține oasele 12 ore în apă rece cu sare, schimbând apa de 2 ori — scoate sângele și albește osul.',
          'Așază-le în picioare, cu măduva în sus, într-o tavă cu hârtie de copt.',
          'Cuptor 220 °C, 20–25 de minute. Măduva trebuie să bolborosească dar să nu se topească complet și să curgă.',
          'Presară sare grunjoasă și pătrunjel tocat cu ceapă roșie și puțină lămâie.',
          'Servește imediat, cu pâine prăjită și lingurițe lungi.',
          'Pentru supă de oase: rumenește oasele 30 de minute la 220 °C, apoi fierbe 8–12 ore la foc minim cu oțet de mere.'
        ],
        yieldNote: '1 kg oase ≈ 150–200 g măduvă comestibilă'
      },
      taste: {
        profile: 'Untos, dulce, cu gust profund de vită — practic unt de vită',
        intensity: 4,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Se topește complet pe limbă, ca untul cald',
        notes: 'Delicios, dar nu e mâncare de proteină: 6 g proteină și 17,5 g grăsime la 100 g. E un aperitiv-plăcere, iar supa de oase are doar 2–5 g proteină la 250 ml.'
      },
      stats: { taste: 80, satiety: 40, convenience: 25, versatility: 35 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 1, lunch: 2, snack: 3, dinner: 3, beforeBed: 1 },
      timingNote: 'Aperitiv sau bază de supă; nu contribuie semnificativ la aportul zilnic de proteină.',
      tags: ['budget', 'high-kcal', 'whole-food', 'winter', 'romanian-classic', 'low-carb'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Pâine prăjită', 'Sare Maldon', 'Pătrunjel cu ceapă roșie', 'Lămâie', 'Hrean'],
      tips: [
        'Marketing-ul cu supa de oase bogată în proteină e exagerat: 250 ml conțin 2–5 g proteină, majoritar colagen incomplet.',
        'Măduva topită și strecurată e un grăsime de gătit fantastică pentru cartofi și legume.',
        'Cere oasele tăiate transversal (rondele) pentru copt și longitudinal (canoe) pentru servit la masă.'
      ],
      warnings: [
        'Nu e o sursă de proteină — 6 g/100 g, cu 17,5 g grăsime.',
        'Colagenul din supă nu e proteină completă (fără triptofan).',
        'Foarte caloric raportat la sațietate.'
      ],
      storage: 'Frigider 0–4 °C sau congelator.',
      shelfLife: '2–3 zile refrigerate; 6 luni congelate',
      dataConfidence: 'low',
      sources: ['USDA FDC 174733 (bone marrow)', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-piept-vita-brisket',
      name: 'Beef Brisket',
      nameRo: 'Piept de vită (brisket)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Vită',
      emoji: '🐄',
      unit: 'g',
      stores: [
        { name: 'Metro', availability: 'usual', aisle: 'Zona vită, bucăți mari vidate', priceRon: 125.7, packGrams: 3000, packLabel: 'brisket ~3 kg', note: 'Card Metro necesar.' },
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, piept de vită', priceRon: 89.8, packGrams: 2000, packLabel: 'bucată ~2 kg', note: '' },
        { name: 'Măcelărie locală', availability: 'occasional', aisle: 'La comandă', priceRon: 98, packGrams: 2000, packLabel: '2 kg', note: 'Cere bucata cu stratul de grăsime intact.' }
      ],
      sibiuNote: 'Bricketul e bucata care a devenit celebră prin barbecue-ul texan, dar în România se folosea dintotdeauna la rasol și la pastramă. La Metro, 3 kg la 42 lei/kg e cea mai bună afacere de vită pentru gătit lung.',
      per100g: { kcal: 206, protein: 19, carbs: 0, sugars: 0, fat: 14.5, satFat: 5.6, fiber: 0, salt: 0.12 },
      micros: { ironMg: 2, zincMg: 4.4, b12Ug: 2.2, potassiumMg: 300, cholesterolMg: 68 },
      serving: { grams: 250, label: '1 porție (250 g crud)' },
      effort: 5,
      timeMin: 540,
      activeTimeMin: 30,
      cooking: {
        method: 'slow',
        difficulty: 'hard',
        equipment: ['cuptor cu control bun sau afumătoare', 'termometru cu sondă', 'hârtie de măcelar sau folie'],
        steps: [
          'Fasonează stratul de grăsime la 6–8 mm. Prea gros nu se topește, prea subțire nu protejează.',
          'Rub simplu: sare grunjoasă și piper măcinat gros, în părți egale, cu 12 ore înainte.',
          'Cuptor la 110–120 °C, cu grăsimea în sus, sondă în partea groasă.',
          'La 70–75 °C temperatura se blochează ore întregi (the stall) — e normal, e evaporare.',
          'Ambalează strâns în hârtie de măcelar sau folie și continuă până la 95–96 °C intern.',
          'Total: 8–10 ore pentru 3 kg. Odihnă obligatorie 1–2 ore, ambalat, într-o ladă frigorifică.',
          'Feliază perpendicular pe fibră, felii de 1 cm; fibra își schimbă direcția între point și flat.'
        ],
        yieldNote: '3 kg brisket crud ≈ 1,7–1,8 kg carne finită (pierdere 40%)'
      },
      taste: {
        profile: 'Adânc, sărat-afumat, cu inel roz de fum și grăsime topită în fibre',
        intensity: 5,
        sweetness: 2,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Feliile se țin abia-abia și se destramă la apăsare — semnul unui brisket reușit',
        notes: 'Cel mai greu lucru de gătit din tot ghidul și cel mai spectaculos când iese. Primele două încercări vor fi mediocre; a treia te va face să înțelegi de ce oamenii stau 10 ore lângă cuptor.'
      },
      stats: { taste: 93, satiety: 88, convenience: 8, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 2, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Proiect de weekend întreg. Resturile feliate sunt cel mai bun sandviș posibil.',
      tags: ['high-protein', 'batch-cook', 'bulk-buy', 'iron-rich', 'b12', 'mid-price', 'high-kcal', 'slow-digesting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Pâine albă simplă', 'Castraveți murați', 'Ceapă crudă', 'Sos barbecue', 'Coleslaw'],
      tips: [
        'Odihna de 1–2 ore nu e opțională. Un brisket tăiat imediat pierde tot sucul și pare uscat.',
        'Pierderea de 40% e normală — 3 kg cumpărat înseamnă 1,75 kg în farfurie, deci costul real e ~72 lei/kg.',
        'Fără termometru cu sondă e imposibil. Nu încerca la ochi.'
      ],
      warnings: [
        'Timp de gătit 8–10 ore plus odihnă. Nu subestima.',
        'Pierdere mare la gătit — calculează 40%.',
        'Carne roșie grasă; porție rezonabilă 200–250 g crud.'
      ],
      storage: 'Frigider 0–2 °C, vidat.',
      shelfLife: '4–5 zile crud, 14 zile vidat; carnea gătită 4 zile',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 13026', 'produse.metro.ro vita origine Romania']
    },

    {
      id: 'm-pulpa-miel',
      name: 'Lamb Leg',
      nameRo: 'Pulpă de miel',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Miel & berbecuț',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Carmangerie, vitrina specială de Paște', priceRon: 129.8, packGrams: 2000, packLabel: 'pulpă ~1,8–2,5 kg', note: 'Martie–aprilie, apoi dispare complet.' },
        { name: 'Selgros', availability: 'seasonal', aisle: 'Carmangerie, sezon pascal', priceRon: 149.75, packGrams: 2500, packLabel: 'pulpă ~2,5 kg', note: '' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Piața de afară, producători din Mărginime', priceRon: 104, packGrams: 2000, packLabel: '2 kg', note: 'Cel mai bun preț și cea mai bună calitate, dar doar de Paște.' },
        { name: 'Carrefour', availability: 'seasonal', aisle: 'Vitrina de sărbători', priceRon: 122.4, packGrams: 1800, packLabel: 'pulpă ~1,8 kg', note: '' }
      ],
      sibiuNote: 'Sibiul e înconjurat de Mărginimea Sibiului, zona cu cea mai veche tradiție pastorală din țară. De Paște, în Piața Cibin, mielul de la producători costă 50–55 lei/kg față de 65–68 în supermarket, și e sensibil mai bun. În restul anului, mielul practic dispare de pe rafturile din Sibiu.',
      per100g: { kcal: 195, protein: 18.5, carbs: 0, sugars: 0, fat: 13.5, satFat: 5.8, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.8, zincMg: 3.8, b12Ug: 2.6, potassiumMg: 310, cholesterolMg: 70 },
      serving: { grams: 250, label: '1 porție (250 g crud, cu os)' },
      effort: 4,
      timeMin: 150,
      activeTimeMin: 25,
      cooking: {
        method: 'oven',
        difficulty: 'medium',
        equipment: ['tavă adâncă', 'termometru de carne', 'cuțit mic'],
        steps: [
          'Fă 15–20 de crestături în carne și înfige în fiecare o jumătate de cățel de usturoi și o crenguță de rozmarin.',
          'Freacă cu sare, piper, ulei de măsline și lasă 2 ore la temperatura camerei.',
          'Cuptor 220 °C primele 20 de minute, pentru crustă.',
          'Coboară la 170 °C și continuă: aproximativ 25 de minute pe kilogram pentru medium.',
          'Ținta: 58–60 °C pentru roz în mijloc, 68 °C pentru bine făcut. Mielul la 75 °C e ratat.',
          'Odihnește 20 de minute acoperit lejer. O pulpă mare chiar are nevoie de atât.',
          'Feliază perpendicular pe fibră, plecând de la partea groasă.'
        ],
        yieldNote: '1 kg pulpă cu os ≈ 620 g carne gătită'
      },
      taste: {
        profile: 'Puternic, dulce-sălbatic, cu nota inconfundabilă de grăsime de oaie',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Fragedă și suculentă la 60 °C; se strânge și devine seacă peste 70 °C',
        notes: 'Nu e o carne neutră — mirosul de miel place sau nu, nu există mijloc. Rozmarinul, usturoiul și lămâia sunt aliații care o îmblânzesc.'
      },
      stats: { taste: 82, satiety: 86, convenience: 20, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Masă de Paște; în restul anului aproape imposibil de găsit proaspăt în Sibiu.',
      tags: ['high-protein', 'premium', 'iron-rich', 'b12', 'whole-food', 'romanian-classic', 'local-sibiu'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Rozmarin', 'Usturoi', 'Cartofi noi', 'Sos de mentă', 'Salată de ceapă verde'],
      tips: [
        'Sezonalitatea e brutală: mielul apare la Sibiu cu 3 săptămâni înainte de Paște și dispare la o săptămână după.',
        'Mielul din Mărginimea Sibiului, cumpărat direct de la cioban, e la 40–45 lei/kg carcasă întreagă — jumătate din prețul de supermarket.',
        'Grăsimea de miel se solidifică repede la răcire — servește pe farfurii calde.'
      ],
      warnings: [
        'Preț ridicat și disponibilitate strict sezonieră.',
        'Grăsime saturată 5,8 g/100 g.',
        'Mielul cumpărat viu și sacrificat acasă nu are control sanitar-veterinar.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile refrigerată; 8 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 17224', 'economedia.ro preț miel Paște 2026']
    },

    {
      id: 'm-cotlete-miel',
      name: 'Lamb Chops',
      nameRo: 'Cotlete de miel',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Miel & berbecuț',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Carmangerie, vitrina de Paște', priceRon: 59.92, packGrams: 800, packLabel: 'tavă ~800 g', note: '' },
        { name: 'Selgros', availability: 'seasonal', aisle: 'Carmangerie', priceRon: 69.9, packGrams: 1000, packLabel: 'cotlet întreg ~1 kg', note: '' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Producători din Mărginime, sezon pascal', priceRon: 62, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Cotletele de miel sunt cea mai scumpă bucată de miel din Sibiu și cea mai rapidă de gătit — 6 minute totale la tigaie. Se găsesc doar în sezonul pascal; în afara lui, doar congelate din import la Metro.',
      per100g: { kcal: 261, protein: 17, carbs: 0, sugars: 0, fat: 21.5, satFat: 9.3, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.6, zincMg: 3.4, b12Ug: 2.4, potassiumMg: 280, cholesterolMg: 74 },
      serving: { grams: 250, label: '3 cotlete (250 g crud, cu os)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 12,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie de fontă', 'clește', 'termometru'],
        steps: [
          'Temperatura camerei 30 de minute; usucă bine cotletele.',
          'Sare, piper, un pic de rozmarin tocat mărunt.',
          'Fontă foarte încinsă, fără ulei la început — grăsimea de pe cotlet se topește singură.',
          'Ține cotletele pe muchia grasă 90 de secunde ca să se topească și să se rumenească.',
          'Apoi 2 minute pe fiecare parte plată. Ținta: 58 °C, medium-rare.',
          'Odihnește 5 minute. Servește cu lămâie sau sos de mentă.'
        ],
        yieldNote: '1 kg cotlete cu os ≈ 560 g carne gătită'
      },
      taste: {
        profile: 'Intens, gras, dulce, cu marginea de grăsime rumenită care e cea mai bună parte',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Fragedă și suculentă; se mănâncă ideal cu mâna, ținând de os',
        notes: 'Gust superb, macro dezastruos: 21,5 g grăsime la 17 g proteină. Iar 40% din greutatea cumpărată e os.'
      },
      stats: { taste: 88, satiety: 70, convenience: 42, versatility: 40 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Masă de sărbătoare; nu are cum să intre într-un plan de proteină eficient la 75 lei/kg.',
      tags: ['high-protein', 'premium', 'high-kcal', 'iron-rich', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de mentă', 'Rozmarin', 'Cartofi noi', 'Sparanghel', 'Vin roșu'],
      tips: [
        'Costul proteinei: ~440 lei per kilogram de proteină pură. Cea mai scumpă din tot ghidul după mușchiul de vită.',
        'Marginea de grăsime rumenită bine e diferența dintre un cotlet bun și unul obișnuit — nu o sări.',
        'Cotletele de berbecuț, mai ieftine, au gust mai puternic dar sunt mai tari.'
      ],
      warnings: [
        'Grăsime saturată 9,3 g/100 g — foarte ridicată.',
        '40% os din greutatea cumpărată.',
        'Disponibilitate sezonieră strictă în Sibiu.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3 zile refrigerate; 8 luni congelate',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 17012', 'wall-street.ro preț carne miel supermarket']
    },

    {
      id: 'm-carne-tocata-miel',
      name: 'Ground Lamb',
      nameRo: 'Carne tocată de miel',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Carne tocată',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'seasonal', aisle: 'Carmangerie, tocare la cerere în sezon pascal', priceRon: 54.9, packGrams: 1000, packLabel: '1 kg', note: 'Cere tocare din spată sau gât.' },
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Carmangerie de Paște', priceRon: 29.95, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Producători locali, tocare la cerere', priceRon: 50, packGrams: 1000, packLabel: '1 kg', note: '' }
      ],
      sibiuNote: 'Tocătura de miel se face în Sibiu mai ales pentru drob de Paște, dar merită pentru kofte și burgeri de miel tot anul — dacă o găsești. În afara sezonului, cere la măcelar să toace gât sau spată de berbecuț.',
      per100g: { kcal: 279, protein: 17, carbs: 0, sugars: 0, fat: 23.5, satFat: 10, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.6, zincMg: 3.4, b12Ug: 2.3, potassiumMg: 270, cholesterolMg: 73 },
      serving: { grams: 150, label: '3 kofte (150 g crud)' },
      effort: 3,
      timeMin: 35,
      activeTimeMin: 22,
      cooking: {
        method: 'grill',
        difficulty: 'easy',
        equipment: ['bol', 'grătar sau tigaie grill', 'frigărui'],
        steps: [
          'Amestecă 500 g tocătură cu 1 ceapă rasă și stoarsă, 3 căței usturoi, 1 linguriță chimen, 1 linguriță coriandru, ardei iute, pătrunjel și mentă tocate, sare.',
          'Frământă 4 minute — la kofte vrei o pastă lipicioasă, nu o compoziție afânată.',
          'Odihnește 1 oră la frigider ca să se lege.',
          'Modelează cârnăciori pe frigărui, cu mâinile ude.',
          'Grătar cu jar mediu, 4 minute pe fiecare parte, întorcând o dată.',
          'Servește cu iaurt cu usturoi și lipie caldă.'
        ],
        yieldNote: '500 g tocătură crudă ≈ 350 g kofte gătite'
      },
      taste: {
        profile: 'Foarte aromat, cu grăsime de miel care poartă condimentele',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Suculentă și densă; grăsimea mare o face imposibil de uscat',
        notes: 'Cel mai bun vehicul pentru chimen și mentă din întreaga bucătărie. Dar 23,5 g grăsime la 100 g e o cifră serioasă.'
      },
      stats: { taste: 85, satiety: 76, convenience: 45, versatility: 60 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de grătar; caloriile mari o fac nepotrivită pe deficit.',
      tags: ['high-protein', 'high-kcal', 'iron-rich', 'premium', 'summer', 'romanian-classic'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Iaurt cu usturoi', 'Lipie', 'Mentă', 'Chimen', 'Salată de roșii cu ceapă'],
      tips: [
        'Pentru drob de Paște, amestecul clasic e organe de miel plus tocătură, cu multă verdeață și 4–5 ouă.',
        'Frământatul lung e obligatoriu la kofte, spre deosebire de burgeri unde e interzis.',
        'Amestecul 50/50 cu tocătură de vită slabă scade grăsimea la ~19 g și păstrează aroma.'
      ],
      warnings: [
        'Grăsime saturată 10 g/100 g — o porție de 150 g atinge limita zilnică.',
        'Tocătura se gătește complet, 71 °C.',
        'Disponibilitate sezonieră în Sibiu.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 h.',
      shelfLife: '1 zi refrigerată; 3 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 17224', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-stufat-miel',
      name: 'Lamb Shoulder / Stewing Meat',
      nameRo: 'Carne de miel pentru stufat (spată și gât)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Miel & berbecuț',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Producători din Mărginime, sezon pascal', priceRon: 63, packGrams: 1500, packLabel: '1,5 kg', note: 'Se vinde adesea ca sfert de miel.' },
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Carmangerie de Paște', priceRon: 47.9, packGrams: 1000, packLabel: 'tavă ~1 kg', note: '' },
        { name: 'Selgros', availability: 'seasonal', aisle: 'Carmangerie', priceRon: 89.8, packGrams: 2000, packLabel: 'sfert de miel', note: '' }
      ],
      sibiuNote: 'Stufatul de miel cu usturoi verde și ceapă verde e mâncarea de Paște a Ardealului. Carnea de spată și gât e cu 20 de lei/kg mai ieftină decât pulpa și mult mai potrivită pentru gătit lung.',
      per100g: { kcal: 228, protein: 17.5, carbs: 0, sugars: 0, fat: 17.5, satFat: 7.5, fiber: 0, salt: 0.15 },
      micros: { ironMg: 1.7, zincMg: 4.2, b12Ug: 2.5, potassiumMg: 290, cholesterolMg: 74 },
      serving: { grams: 250, label: '1 porție de stufat (250 g crud)' },
      effort: 4,
      timeMin: 130,
      activeTimeMin: 30,
      cooking: {
        method: 'slow',
        difficulty: 'medium',
        equipment: ['oală de fontă cu capac', 'tigaie'],
        steps: [
          'Taie carnea bucăți de 4 cm, usucă și rumenește-le în două tranșe, 5 minute fiecare.',
          'Scoate carnea, călește 3 legături de ceapă verde și 2 de usturoi verde tocate, 6 minute.',
          'Pune carnea înapoi, adaugă 200 ml vin alb, lasă să scadă.',
          'Adaugă 300 ml supă, capac, foc mic, 90 de minute.',
          'În ultimele 15 minute pune o lingură de bulion și verdeața rezervată.',
          'Sare, piper și un strop de oțet la final ca să taie grăsimea.'
        ],
        yieldNote: '1 kg carne crudă ≈ 640 g stufat gătit'
      },
      taste: {
        profile: 'Puternic, dulce de la usturoiul verde, cu sos gras și aromat',
        intensity: 5,
        sweetness: 3,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Bucăți care se rup cu lingura după 90 de minute',
        notes: 'Cea mai bună utilizare a mielului dacă nu vrei să plătești pentru pulpă sau cotlete. Usturoiul verde e ingredientul care face rețeta, nu carnea.'
      },
      stats: { taste: 84, satiety: 84, convenience: 22, versatility: 40 },
      timing: { breakfast: 1, preWorkout: 0, postWorkout: 2, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Masa de Paște; se reîncălzește excelent a doua zi.',
      tags: ['high-protein', 'iron-rich', 'b12', 'romanian-classic', 'batch-cook', 'premium', 'high-kcal'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Usturoi verde', 'Ceapă verde', 'Mămăligă', 'Vin alb sec', 'Bulion'],
      tips: [
        'Sfertul de miel cumpărat întreg (45–55 lei/kg) îți dă și stufat, și ciorbă, și drob — cea mai economică variantă.',
        'Usturoiul verde se pune în două etape: jumătate la început pentru bază, jumătate la final pentru prospețime.',
        'Grăsimea de miel se solidifică la rece — degresează sosul a doua zi dacă vrei să scazi caloriile.'
      ],
      warnings: [
        'Grăsime ridicată (17,5 g/100 g), din care 7,5 g saturate.',
        'Strict sezonier în Sibiu.',
        'Mielul de la producători nu are întotdeauna control sanitar-veterinar — cumpără de la vânzători cu act.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3 zile crudă; 8 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 17017', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-berbecut-oaie',
      name: 'Mutton / Hogget',
      nameRo: 'Carne de berbecuț sau de oaie',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Miel & berbecuț',
      emoji: '🐑',
      unit: 'g',
      stores: [
        { name: 'Piața Cibin', availability: 'occasional', aisle: 'Producători din Mărginimea Sibiului', priceRon: 68, packGrams: 2000, packLabel: '2 kg', note: 'Toamna, după coborârea de la munte, e cea mai bună perioadă.' },
        { name: 'Măcelărie locală', availability: 'occasional', aisle: 'La comandă', priceRon: 76, packGrams: 2000, packLabel: '2 kg', note: '' },
        { name: 'Selgros', availability: 'occasional', aisle: 'Carmangerie', priceRon: 73.8, packGrams: 2000, packLabel: '2 kg', note: 'Apare sporadic, mai ales toamna.' }
      ],
      sibiuNote: 'Sibiul are avantajul Mărginimii: toamna, când turmele coboară de la munte, carnea de berbecuț și de oaie apare în Piața Cibin la 32–36 lei/kg. E jumătate din prețul mielului și are de două ori gustul — dacă suporți aroma puternică.',
      per100g: { kcal: 234, protein: 18, carbs: 0, sugars: 0, fat: 18, satFat: 8, fiber: 0, salt: 0.15 },
      micros: { ironMg: 2.2, zincMg: 4.5, b12Ug: 2.8, potassiumMg: 280, cholesterolMg: 78 },
      serving: { grams: 250, label: '1 porție (250 g crud)' },
      effort: 4,
      timeMin: 200,
      activeTimeMin: 30,
      cooking: {
        method: 'slow',
        difficulty: 'medium',
        equipment: ['oală de fontă cu capac', 'tigaie'],
        steps: [
          'Îndepărtează cât mai multă grăsime vizibilă — aroma puternică de oaie stă în grăsime, nu în mușchi.',
          'Marinează 12 ore în vin roșu, ceapă, ienibahar, cimbru și 2 linguri de oțet.',
          'Scurge, usucă, rumenește bine bucățile în două tranșe.',
          'Călește ceapă și usturoi, adaugă marinada strecurată și supă.',
          'Capac, cuptor 150 °C, 3 ore. Berbecuțul are nevoie de mai mult decât mielul.',
          'Sare la final, plus boia dulce și puțină mentă uscată.'
        ],
        yieldNote: '1 kg carne de berbecuț ≈ 620 g gătită'
      },
      taste: {
        profile: 'Foarte puternic, sălbatic, cu aroma clasică de oaie care nu se poate ascunde',
        intensity: 5,
        sweetness: 1,
        saltiness: 2,
        umami: 5,
        richness: 4,
        texture: 'Fibre groase, ferme; devine acceptabilă doar după 3 ore de gătit lent',
        notes: 'Carne pentru cine a crescut cu ea. Marinada cu vin și eliminarea grăsimii sunt singurele metode reale de a-i tempera aroma.'
      },
      stats: { taste: 58, satiety: 88, convenience: 15, versatility: 35 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de toamnă și iarnă; sațietate foarte mare.',
      tags: ['high-protein', 'iron-rich', 'b12', 'budget', 'local-sibiu', 'winter', 'whole-food', 'batch-cook'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Vin roșu', 'Ienibahar', 'Varză', 'Mămăligă', 'Mentă uscată'],
      tips: [
        'Grăsimea e sursa aromei puternice. Cu cât o îndepărtezi mai mult, cu atât carnea e mai acceptabilă pentru neinițiați.',
        'Pastrama de oaie e produsul tradițional din această carne în Mărginimea Sibiului — sărată, condimentată și uscată.',
        'La 34 lei/kg cu 18 g proteină, e o carne roșie ieftină pentru cine îi suportă gustul.'
      ],
      warnings: [
        'Aromă foarte puternică — nu o servi invitaților fără să îi previi.',
        'Necesită 3 ore de gătit lent.',
        'Grăsime saturată 8 g/100 g.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3 zile refrigerată; 8 luni congelată',
      dataConfidence: 'low',
      sources: ['USDA SR Legacy 17224 (adaptat pentru mutton)', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-iepure',
      name: 'Rabbit',
      nameRo: 'Iepure (de crescătorie)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Păsări & vânat',
      emoji: '🐰',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'occasional', aisle: 'Congelator sau carmangerie, iepure întreg', priceRon: 71.37, packGrams: 1300, packLabel: 'iepure întreg ~1,3 kg', note: 'Adesea congelat.' },
        { name: 'Piața Cibin', availability: 'occasional', aisle: 'Producători locali, în special primăvara', priceRon: 72, packGrams: 1500, packLabel: '1,5 kg', note: 'Comandă din timp.' },
        { name: 'Metro', availability: 'occasional', aisle: 'Zona carne specială', priceRon: 63.48, packGrams: 1200, packLabel: '1,2 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Iepurele e cea mai slabă carne din tot ghidul: 21,8 g proteină și 5,2 g grăsime. În Sibiu îl găsești inconstant — Selgros are variantă congelată, iar în Piața Cibin apare la producători primăvara și toamna.',
      per100g: { kcal: 134, protein: 21.8, carbs: 0, sugars: 0, fat: 5.2, satFat: 1.6, fiber: 0, salt: 0.14 },
      micros: { ironMg: 3.3, zincMg: 1.9, b12Ug: 7.2, potassiumMg: 335, cholesterolMg: 57 },
      serving: { grams: 250, label: '1 porție (250 g crud, cu os)' },
      effort: 4,
      timeMin: 110,
      activeTimeMin: 30,
      cooking: {
        method: 'slow',
        difficulty: 'medium',
        equipment: ['oală de fontă cu capac', 'tigaie', 'cuțit de tranșat'],
        steps: [
          'Tranșează iepurele în 6 bucăți: 2 pulpe posterioare, 2 anterioare, șaua tăiată în două.',
          'Marinează 4 ore în vin alb, ceapă, dafin, ienibahar, cimbru.',
          'Scurge, usucă, dă prin făină și rumenește bine, 4 minute pe fiecare parte.',
          'Călește ceapă, morcov și slănină afumată tăiată cubulețe, 8 minute.',
          'Pune carnea înapoi, toarnă marinada strecurată plus 200 ml supă, capac.',
          'Foc mic sau cuptor 160 °C, 75–90 de minute. Șaua se scoate cu 20 de minute mai devreme, e mai fragedă.',
          'Sare, piper și 2 linguri de smântână la final.'
        ],
        yieldNote: '1 iepure de 1,3 kg ≈ 700 g carne gătită fără os'
      },
      taste: {
        profile: 'Delicat, între pui și vânat, cu o notă dulceagă distinctă',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 4,
        richness: 2,
        texture: 'Foarte slabă, se usucă imediat; are nevoie de grăsime adăugată și de căldură umedă',
        notes: 'O carne excelentă nutrițional pe care puțini o gătesc corect. Fără slănină, unt sau smântână, iese seacă indiferent de metodă.'
      },
      stats: { taste: 72, satiety: 88, convenience: 20, versatility: 45 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 4, lunch: 5, snack: 1, dinner: 5, beforeBed: 3 },
      timingNote: 'Cea mai slabă carne cu os din ghid — 65% din calorii vin din proteină.',
      tags: ['protein-dense', 'iron-rich', 'b12', 'premium', 'whole-food', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Smântână', 'Muștar', 'Slănină afumată', 'Ciuperci', 'Vin alb sec'],
      tips: [
        'Șaua (partea de mijloc) e cea mai fragedă și se gătește în jumătate din timpul pulpelor — separă-le.',
        'Fără o sursă de grăsime adăugată, iepurele e imposibil de gătit suculent. Slănina e soluția tradițională.',
        'Nutrițional bate pieptul de pui: mai multă proteină, mai mult fier, mai mult B12.'
      ],
      warnings: [
        'Extrem de slab — fără grăsime adăugată iese uscat garantat.',
        'Disponibilitate inconstantă în Sibiu.',
        'Oasele sunt subțiri și se sparg în așchii; atenție la copii.'
      ],
      storage: 'Frigider 0–4 °C sau congelator.',
      shelfLife: '2–3 zile refrigerat; 6 luni congelat',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 17181', 'CIQUAL 36301']
    },

    {
      id: 'm-piept-rata',
      name: 'Duck Breast (Magret)',
      nameRo: 'Piept de rață cu piele',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Păsări & vânat',
      emoji: '🦆',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie sau congelator, piept vidat', priceRon: 31.96, packGrams: 400, packLabel: 'piept vidat ~350–450 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona pasăre premium', priceRon: 59.92, packGrams: 800, packLabel: '2 piepturi vidate', note: 'Card Metro necesar.' },
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Vitrina de sărbători, noiembrie–decembrie', priceRon: 33.96, packGrams: 400, packLabel: 'piept ~400 g', note: '' }
      ],
      sibiuNote: 'Pieptul de rață e cea mai bună mâncare de restaurant pe care o poți face acasă în 20 de minute. La Metro, 75 lei/kg pentru 2 piepturi vidate e cel mai bun preț din Sibiu. Atenție: cu piele are 30 g grăsime la 100 g.',
      per100g: { kcal: 336, protein: 15.5, carbs: 0, sugars: 0, fat: 30.5, satFat: 10, fiber: 0, salt: 0.15 },
      micros: { ironMg: 2.4, zincMg: 1.6, b12Ug: 0.3, potassiumMg: 210, cholesterolMg: 76 },
      serving: { grams: 200, label: '1 piept mediu (200 g crud)' },
      effort: 3,
      timeMin: 30,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie', 'cuțit foarte ascuțit', 'termometru'],
        steps: [
          'Crestează pielea în romburi de 1 cm, tăind DOAR pielea, fără să atingi carnea.',
          'Sare bine pielea și pune pieptul cu pielea în jos în tigaia RECE. Fără ulei.',
          'Pornește focul la mediu-mic. Grăsimea se topește lent, 12–15 minute, până pielea e subțire și aurie.',
          'Scurge grăsimea din tigaie de 2–3 ori pe parcurs — păstreaz-o, e cea mai bună grăsime pentru cartofi.',
          'Întoarce și mai lasă 3–4 minute pe partea de carne.',
          'Scoate la 54–56 °C pentru medium-rare. Pieptul de rață se mănâncă roz, ca vita.',
          'Odihnește 8 minute, apoi feliază subțire perpendicular pe fibră.'
        ],
        yieldNote: '1 kg piept crud ≈ 620 g gătit + ~150 ml grăsime de rață recuperată'
      },
      taste: {
        profile: 'Bogat, aproape de vânat, cu piele crocantă și carne roșie fină',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Contrast perfect: piele crocantă subțire peste carne fragedă și roz',
        notes: 'Cel mai impresionant fel de mâncare cu efort mic din ghid. Singurul truc care contează e tigaia rece la început.'
      },
      stats: { taste: 93, satiety: 74, convenience: 38, versatility: 50 },
      timing: { breakfast: 0, preWorkout: 1, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Cină specială. Grăsimea mare o face nepotrivită pentru un plan de slăbit.',
      tags: ['high-protein', 'premium', 'high-kcal', 'iron-rich', 'whole-food', 'winter'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Sos de portocale', 'Varză roșie', 'Cartofi în grăsime de rață', 'Vișine', 'Vin roșu'],
      tips: [
        'Fără piele, pieptul de rață are doar ~125 kcal și 18,3 g proteină la 100 g — o carne complet diferită.',
        'Grăsimea de rață recuperată e cea mai bună grăsime pentru cartofi prăjiți din lume și se ține 6 luni la frigider.',
        'Tigaia rece la început e regula absolută. Tigaie încinsă = piele arsă și grăsime netopită.'
      ],
      warnings: [
        'Grăsime 30,5 g/100 g cu piele — o porție de 200 g are ~670 kcal.',
        'Se servește roz (54–56 °C); rața nu are riscul de Salmonella al puiului la bucata întreagă, dar nu e recomandat pentru gravide sau imunodeprimați.'
      ],
      storage: 'Frigider 0–4 °C, vidat.',
      shelfLife: '4–5 zile vidat; 6 luni congelat',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05140', 'CIQUAL 36012']
    },

    {
      id: 'm-pulpa-rata',
      name: 'Duck Leg',
      nameRo: 'Pulpă de rață',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Păsări & vânat',
      emoji: '🦆',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie sau congelator', priceRon: 44.9, packGrams: 1000, packLabel: '2–3 pulpe ~1 kg', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona pasăre', priceRon: 83.8, packGrams: 2000, packLabel: 'caserolă 2 kg', note: 'Card Metro necesar.' },
        { name: 'Kaufland', availability: 'seasonal', aisle: 'Vitrina de sărbători', priceRon: 39.92, packGrams: 800, packLabel: 'tavă ~800 g', note: '' }
      ],
      sibiuNote: 'Pulpa de rață e jumătate din prețul pieptului și, gătită confit sau lent la cuptor, e la fel de bună. La Metro, 42 lei/kg în caserolă de 2 kg, e cel mai bun deal de pasăre premium din Sibiu.',
      per100g: { kcal: 273, protein: 16.5, carbs: 0, sugars: 0, fat: 23, satFat: 7.8, fiber: 0, salt: 0.15 },
      micros: { ironMg: 2.7, zincMg: 1.9, b12Ug: 0.4, potassiumMg: 220, cholesterolMg: 84 },
      serving: { grams: 250, label: '1 pulpă (250 g crud, cu os)' },
      effort: 4,
      timeMin: 165,
      activeTimeMin: 15,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['vas de yena', 'termometru', 'sare grunjoasă'],
        steps: [
          'Freacă pulpele cu sare grunjoasă, usturoi zdrobit, cimbru și boabe de piper. Lasă 12–24 de ore la frigider.',
          'Șterge sarea în exces și așază pulpele într-un vas, cu pielea în sus.',
          'Cuptor 150 °C, 2 ore și 30 de minute. Grăsimea se topește și pulpele practic se confiază în ea.',
          'Ultimele 15 minute, urcă la 200 °C pentru piele crocantă.',
          'Scurge și păstrează grăsimea topită — 1 kg de pulpe dă ~200 ml.',
          'Carnea trebuie să se desprindă de pe os la cea mai mică atingere.'
        ],
        yieldNote: '1 kg pulpe crude ≈ 550 g carne gătită + 200 ml grăsime de rață'
      },
      taste: {
        profile: 'Adânc, sărat, cu carne închisă la culoare și piele crocantă',
        intensity: 5,
        sweetness: 1,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Carne moale care cade de pe os, sub o piele subțire și crocantă',
        notes: 'Confit-ul de rață e una dintre puținele preparate unde timpul lung nu cere absolut nicio tehnică. Bagi în cuptor și pleci.'
      },
      stats: { taste: 90, satiety: 80, convenience: 25, versatility: 55 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Cină de weekend; se păstrează 2 săptămâni acoperită în propria grăsime.',
      tags: ['high-protein', 'high-kcal', 'premium', 'batch-cook', 'winter', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Varză roșie', 'Cartofi sote', 'Linte', 'Portocale', 'Vin roșu'],
      tips: [
        'Confit-ul păstrat complet acoperit în propria grăsime, la frigider, rezistă 2–3 săptămâni și se îmbunătățește.',
        'Grăsimea de rață e valoroasă în sine — 200 ml recuperați valorează ~25 de lei dacă i-ai cumpăra.',
        'Pulpele congelate sunt la fel de bune pentru confit ca cele proaspete.'
      ],
      warnings: [
        'Grăsime 23 g/100 g și 40% os la pulpa întreagă.',
        'Sararea de 24 de ore e importantă; sub 12 ore rezultatul e fad.',
        'Timp de gătit 2,5 ore.'
      ],
      storage: 'Frigider 0–4 °C; confit-ul în grăsime, 2–3 săptămâni.',
      shelfLife: '3 zile crudă; 6 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05141', 'CIQUAL 36013']
    },

    {
      id: 'm-gasca-intreaga',
      name: 'Whole Goose',
      nameRo: 'Gâscă întreagă',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Păsări & vânat',
      emoji: '🦢',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'seasonal', aisle: 'Congelator mare, noiembrie–decembrie', priceRon: 231.6, packGrams: 4000, packLabel: 'gâscă 3,5–5 kg', note: 'Sezon de Sfântul Martin și Crăciun.' },
        { name: 'Metro', availability: 'seasonal', aisle: 'Zona pasăre de sărbători', priceRon: 247.05, packGrams: 4500, packLabel: 'gâscă ~4,5 kg', note: 'Card Metro necesar.' },
        { name: 'Piața Cibin', availability: 'seasonal', aisle: 'Producători locali, toamna târziu', priceRon: 200, packGrams: 4000, packLabel: '4 kg', note: 'Comandă cu 1–2 săptămâni înainte.' }
      ],
      sibiuNote: 'Gâsca e tradiție de Sfântul Martin în zona săsească din jurul Sibiului, iar în noiembrie apare atât în Piața Cibin, cât și la Selgros. E o pasăre grasă și scumpă: 55 lei/kg pentru o carne cu 33,6 g grăsime la 100 g.',
      per100g: { kcal: 368, protein: 15.9, carbs: 0, sugars: 0, fat: 33.6, satFat: 9.8, fiber: 0, salt: 0.14 },
      micros: { ironMg: 2.5, zincMg: 1.7, b12Ug: 0.4, potassiumMg: 300, cholesterolMg: 80 },
      serving: { grams: 200, label: '1 porție (200 g carne cu piele, crud)' },
      effort: 5,
      timeMin: 250,
      activeTimeMin: 45,
      cooking: {
        method: 'oven',
        difficulty: 'hard',
        equipment: ['tavă mare cu grătar', 'termometru', 'furculiță pentru înțepat pielea'],
        steps: [
          'Înțeapă pielea des cu o furculiță, doar pielea, fără să atingi carnea. Grăsimea trebuie să aibă pe unde ieși.',
          'Freacă cu sare pe dinăuntru și pe dinafară, umple cavitatea cu mere tăiate și maghiran.',
          'Așază pe un grătar peste tavă, cu 500 ml apă în tavă.',
          'Cuptor 160 °C, aproximativ 45 de minute pe kilogram. O gâscă de 4 kg = ~3 ore.',
          'Scurge grăsimea din tavă la fiecare 45 de minute — o gâscă de 4 kg dă peste 600 ml.',
          'Ultimele 20 de minute la 200 °C pentru piele crocantă.',
          'Verifică 80 °C la pulpă. Odihnește 30 de minute înainte de tranșare.'
        ],
        yieldNote: '1 gâscă de 4 kg ≈ 1,8 kg carne gătită + 600 ml grăsime de gâscă'
      },
      taste: {
        profile: 'Foarte bogat, cu carne roșie închisă și grăsime cu aromă puternică',
        intensity: 5,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 5,
        texture: 'Carne densă și fibroasă, cu piele groasă care devine crocantă doar dacă e degresată corect',
        notes: 'O gâscă bine făcută e memorabilă. Una prost făcută e o baie de grăsime cu carne tare. Randamentul de carne e slab pentru preț.'
      },
      stats: { taste: 82, satiety: 78, convenience: 8, versatility: 35 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 1, lunch: 4, snack: 1, dinner: 5, beforeBed: 1 },
      timingNote: 'Masă de Sfântul Martin sau Crăciun. Nutrițional e cea mai grasă pasăre din ghid.',
      tags: ['high-kcal', 'premium', 'winter', 'romanian-classic', 'local-sibiu', 'whole-food'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Varză roșie', 'Găluște de cartofi', 'Mere coapte', 'Maghiran', 'Vin roșu'],
      tips: [
        'Grăsimea de gâscă recuperată (600 ml de la o pasăre) valorează peste 100 de lei și e cea mai bună grăsime de gătit existentă.',
        'Randamentul e slab: o gâscă de 4 kg la 55 lei/kg costă 220 de lei și dă 1,8 kg carne, adică 122 lei/kg de carne finită.',
        'Înțeparea pielii e obligatorie; fără ea grăsimea rămâne sub piele și carnea fierbe în loc să se rumenească.'
      ],
      warnings: [
        'Foarte grasă: 33,6 g grăsime la 100 g și doar 15,9 g proteină.',
        'Randament de carne slab raportat la preț.',
        'Necesită atenție pe tot parcursul celor 3 ore (scurgerea grăsimii).'
      ],
      storage: 'Frigider 0–4 °C sau congelator −18 °C.',
      shelfLife: '2 zile refrigerată; 6 luni congelată',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05147', 'CIQUAL 36007']
    },

    {
      id: 'm-mici-cruzi',
      name: 'Raw Mici (Romanian Skinless Sausages)',
      nameRo: 'Mici cruzi (mititei)',
      brand: 'Selgros / K-Purland (Kaufland)',
      category: 'fresh-meat',
      subcategory: 'Crud pentru grătar',
      emoji: '🌭',
      unit: 'g',
      stores: [
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne pregătită pentru grătar', priceRon: 14.99, packGrams: 500, packLabel: 'caserolă 500 g', note: 'Vara, oferte agresive înainte de 1 Mai.' },
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, mici gastro la kilogram', priceRon: 28.9, packGrams: 1000, packLabel: 'tavă mare', note: 'Micii gastro Selgros sunt cei mai apreciați din oraș.' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 13.99, packGrams: 450, packLabel: 'caserolă 450 g', note: '' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'Măcelării din Sibiu, compoziție proprie', priceRon: 36, packGrams: 1000, packLabel: '1 kg', note: 'Mai scumpi, dar cu mult mai multă carne.' }
      ],
      sibiuNote: 'Micii de la Selgros (mici gastro, la kilogram, din carmangerie) sunt standardul local pentru grătarele din Sibiu. Cei ambalați la 14 lei/500 g sunt mai ieftini pentru că au mai multă apă, grăsime și amidon — se vede la gătit, se strâng vizibil.',
      per100g: { kcal: 266, protein: 15, carbs: 2, sugars: 0.5, fat: 22, satFat: 8.5, fiber: 0.2, salt: 1.8 },
      micros: { ironMg: 1.5, zincMg: 3, b12Ug: 1.2, potassiumMg: 260, cholesterolMg: 70 },
      serving: { grams: 250, label: '5 mici (250 g crud)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 15,
      cooking: {
        method: 'grill',
        difficulty: 'easy',
        equipment: ['grătar cu jar', 'clește', 'pensulă'],
        steps: [
          'Scoate micii din frigider cu 20 de minute înainte, altfel se ard afară și rămân cruzi înăuntru.',
          'Jar potolit, fără flacără. Grătarul uns cu puțină grăsime.',
          'Pune micii perpendicular pe bare și nu-i atinge 3 minute.',
          'Întoarce și rotește la fiecare 2–3 minute, în total 10–12 minute.',
          'Unge cu saramură (apă cu sare și usturoi) de 2–3 ori — asta e tehnica tradițională, nu bere.',
          'Verifică 71 °C în centru — micii conțin porc și vită tocate, se gătesc complet.'
        ],
        yieldNote: '1 kg mici cruzi ≈ 720 g gătiți (pierd apă și grăsime)'
      },
      taste: {
        profile: 'Condimentat puternic cu usturoi, cimbru și ienibahar, sărat, gras',
        intensity: 5,
        sweetness: 1,
        saltiness: 4,
        umami: 5,
        richness: 5,
        texture: 'Elastică și suculentă la micii buni; sfărâmicioasă și apoasă la cei ieftini',
        notes: 'Instituție națională. Nutrițional sunt mediocri: 15 g proteină, 22 g grăsime, 1,8 g sare la 100 g. O porție de 5 mici înseamnă 4,5 g sare, aproape maximul zilnic.'
      },
      stats: { taste: 90, satiety: 68, convenience: 60, versatility: 30 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 4, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Mâncare socială de vară; sarea și grăsimea îi fac nepotriviți ca rutină.',
      tags: ['high-protein', 'processed', 'high-sodium', 'high-kcal', 'budget', 'romanian-classic', 'summer'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Muștar', 'Pâine albă', 'Bere rece', 'Murături', 'Ardei iute'],
      tips: [
        'Micii buni conțin bicarbonat de sodiu, nu drojdie de bere — bicarbonatul dă textura elastică specifică.',
        'Cei de 14 lei/500 g au adesea sub 60% carne. Citește lista de ingrediente: dacă apar proteină vegetală sau amidon, e semn clar.',
        'Ungerea cu saramură, nu cu bere, e tehnica corectă — berea doar aburește carnea.'
      ],
      warnings: [
        'Sare 1,8 g/100 g. O porție de 250 g = 4,5 g sare, aproape maximul zilnic OMS de 5 g.',
        'Conțin porc și, de regulă, aditivi (E450, E451, E621 la unele mărci).',
        'Se gătesc complet la 71 °C — sunt carne tocată.'
      ],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '2–3 zile refrigerați; 3 luni congelați',
      dataConfidence: 'medium',
      sources: ['Eticheta mici Kaufland', 'selgros.ro mici gastro']
    },

    {
      id: 'm-carnati-proaspeti-gratar',
      name: 'Fresh Grilling Sausages',
      nameRo: 'Cârnați proaspeți pentru grătar',
      brand: 'Carmangeria Selgros / K-Purland (Kaufland)',
      category: 'fresh-meat',
      subcategory: 'Crud pentru grătar',
      emoji: '🌭',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Carmangerie, cârnați proaspeți la kilogram', priceRon: 32.9, packGrams: 1000, packLabel: '1 kg', note: 'Variante: de casă, picanți, ca la Moldova.' },
        { name: 'Kaufland', availability: 'always', aisle: 'Raft carne pregătită', priceRon: 10.99, packGrams: 500, packLabel: 'pachet 500 g', note: '' },
        { name: 'Lidl', availability: 'always', aisle: 'Raft carne refrigerată', priceRon: 10.99, packGrams: 500, packLabel: 'pachet 500 g', note: 'Cârnați subțiri cu usturoi.' },
        { name: 'Măcelărie locală', availability: 'usual', aisle: 'Măcelării din Sibiu', priceRon: 42, packGrams: 1000, packLabel: '1 kg', note: 'Compoziție cu 85–90% carne.' }
      ],
      sibiuNote: 'Diferența dintre cârnații de 22 lei/kg din supermarket și cei de 42 lei/kg de la măcelărie e enormă: primii au 55–65% carne, restul fiind apă, grăsime și emulsii; ceilalți au 85–90%. La grătar se vede imediat — cârnații ieftini se strâng și scad la jumătate.',
      per100g: { kcal: 291, protein: 15, carbs: 1.5, sugars: 0.5, fat: 25, satFat: 9.5, fiber: 0.2, salt: 1.7 },
      micros: { ironMg: 1.2, zincMg: 2.4, b12Ug: 0.9, potassiumMg: 250, cholesterolMg: 72 },
      serving: { grams: 200, label: '2 cârnați (200 g crud)' },
      effort: 2,
      timeMin: 22,
      activeTimeMin: 12,
      cooking: {
        method: 'grill',
        difficulty: 'trivial',
        equipment: ['grătar sau tigaie', 'clește'],
        steps: [
          'NU înțepa cârnații. Înțepatul lasă să iasă grăsimea și sucul, iar rezultatul e uscat.',
          'Jar potolit sau tigaie la foc mediu-mic. Cârnații au nevoie de timp, nu de temperatură mare.',
          'Rotește-i la fiecare 3 minute, în total 15–18 minute.',
          'Dacă membrana crapă, ai avut focul prea mare.',
          'Verifică 71 °C în centru.',
          'La tigaie: pornește cu 3 linguri de apă și capac, 8 minute, apoi descoperă și rumenește 6 minute.'
        ],
        yieldNote: '1 kg cârnați cruzi ≈ 750 g gătiți'
      },
      taste: {
        profile: 'Sărat, usturoiat, gras, cu membrana care pocnește la mușcătură',
        intensity: 5,
        sweetness: 1,
        saltiness: 4,
        umami: 5,
        richness: 5,
        texture: 'Membrana crocantă peste umplutură suculentă — la cei buni; pastă apoasă la cei ieftini',
        notes: 'Mâncare de plăcere pură. Nutrițional: 15 g proteină, 25 g grăsime și 1,7 g sare la 100 g. Nu e o sursă serioasă de proteină.'
      },
      stats: { taste: 84, satiety: 66, convenience: 62, versatility: 45 },
      timing: { breakfast: 2, preWorkout: 0, postWorkout: 1, lunch: 3, snack: 2, dinner: 4, beforeBed: 1 },
      timingNote: 'Mic dejun copios sau grătar; grăsimea și sarea limitează frecvența.',
      tags: ['high-protein', 'processed', 'high-sodium', 'high-kcal', 'budget', 'romanian-classic', 'summer'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: false },
      pairings: ['Muștar', 'Varză călită', 'Cartofi prăjiți', 'Murături', 'Hrean'],
      tips: [
        'Regula procentului de carne: citește eticheta. Sub 70% carne, cârnatul e practic o emulsie.',
        'Cârnații de casă de la carmangerie, deși costă dublu, dau la gătit cu 25% mai multă masă finită.',
        'Metoda apă-plus-capac la tigaie e cea mai sigură: se gătesc uniform și nu crapă.'
      ],
      warnings: [
        'Sare 1,7 g/100 g — 2 cârnați înseamnă 3,4 g sare.',
        'Conțin porc și, de regulă, aditivi de emulsionare.',
        'Membrana naturală se poate rupe dacă focul e prea mare.'
      ],
      storage: 'Frigider 0–2 °C.',
      shelfLife: '3–4 zile refrigerați; 3 luni congelați',
      dataConfidence: 'medium',
      sources: ['Eticheta cârnați proaspeți Kaufland', 'selgros.ro carmangerie']
    },

    {
      id: 'm-kebab-crud',
      name: 'Raw Kebab / Gyros Meat',
      nameRo: 'Carne crudă pentru kebab (fâșii marinate)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Crud pentru grătar',
      emoji: '🥙',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'usual', aisle: 'Carmangerie, zona marinate', priceRon: 34.9, packGrams: 1000, packLabel: '1 kg', note: 'Din pulpă de pui sau amestec pui-curcan.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Raft carne marinată', priceRon: 18.9, packGrams: 500, packLabel: 'caserolă 500 g', note: '' },
        { name: 'Metro', availability: 'usual', aisle: 'Zona carne pregătită, format horeca', priceRon: 63.8, packGrams: 2000, packLabel: 'caserolă 2 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Kebabul crud marinat e o scurtătură decentă pentru cine vrea shaorma de casă. La Metro, formatul horeca de 2 kg la 32 lei/kg e cel mai bun preț. Atenție la sare: marinatele comerciale ajung la 1,4 g/100 g.',
      per100g: { kcal: 201, protein: 17, carbs: 3, sugars: 1.5, fat: 13.5, satFat: 4, fiber: 0.4, salt: 1.4 },
      micros: { ironMg: 1.2, zincMg: 2, b12Ug: 0.7, potassiumMg: 270, cholesterolMg: 70 },
      serving: { grams: 200, label: '1 porție de shaorma (200 g crud)' },
      effort: 2,
      timeMin: 18,
      activeTimeMin: 14,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie mare', 'spatulă'],
        steps: [
          'Scurge lichidul din caserolă — altfel carnea fierbe în loc să se rumenească.',
          'Tigaie foarte încinsă, fără ulei suplimentar, carnea într-un singur strat.',
          'Lasă 3 minute fără să miști, ca să se formeze crusta.',
          'Amestecă și mai gătește 5–6 minute, până marginile se caramelizează.',
          'Verifică 74 °C dacă e din pui, 71 °C dacă e amestec cu porc.',
          'Servește în lipie cu iaurt, varză și roșii.'
        ],
        yieldNote: '1 kg carne marinată crudă ≈ 700 g gătită'
      },
      taste: {
        profile: 'Condimentat oriental — chimen, coriandru, boia, usturoi — cu note dulci',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Fâșii suculente cu margini caramelizate dacă tigaia e destul de încinsă',
        notes: 'Mai bun decât shaorma de la colț ca ingrediente, dar tot un produs procesat cu multă sare. Marinada acoperă calitatea cărnii de dedesubt.'
      },
      stats: { taste: 76, satiety: 76, convenience: 70, versatility: 55 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Cină rapidă de zi de lucru; sarea ridicată o face nepotrivită zilnic.',
      tags: ['high-protein', 'processed', 'high-sodium', 'grab-and-go', 'mid-price', 'office-lunch'],
      diet: { vegan: false, vegetarian: false, glutenFree: false, lactoseFree: true, keto: false, halal: false, porkFree: true },
      pairings: ['Lipie', 'Iaurt cu usturoi', 'Varză tocată', 'Roșii', 'Ardei iute'],
      tips: [
        'Poți face exact același lucru cu pulpe dezosate la 27 lei/kg plus condimente: iaurt, chimen, boia, coriandru, usturoi, 4 ore.',
        'Sarea de 1,4 g/100 g înseamnă 2,8 g la o porție de 200 g. Nu mai săra deloc.',
        'Nu supraîncărca tigaia; în două tranșe obții caramelizare, într-una singură obții carne fiartă.'
      ],
      warnings: [
        'Sare ridicată (1,4 g/100 g).',
        'Marinada poate ascunde carne de calitate slabă sau aproape de expirare — verifică data.',
        'Unele variante conțin gluten din condimente compuse.'
      ],
      storage: 'Frigider 0–4 °C.',
      shelfLife: '3–4 zile în ambalaj sigilat',
      dataConfidence: 'low',
      sources: ['Eticheta carne kebab Kaufland', 'Estimare pe baza produselor horeca Metro']
    },

    {
      id: 'm-mistret-vanat',
      name: 'Wild Boar',
      nameRo: 'Carne de mistreț (vânat)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Păsări & vânat',
      emoji: '🐗',
      unit: 'g',
      stores: [
        { name: 'Măcelărie locală', availability: 'seasonal', aisle: 'Măcelării specializate, sezon de vânătoare', priceRon: 98, packGrams: 2000, packLabel: '2 kg', note: 'Septembrie–februarie, doar cu documente de proveniență.' },
        { name: 'Online RO', availability: 'seasonal', aisle: 'Magazine online de vânat, livrare congelat', priceRon: 65, packGrams: 1000, packLabel: '1 kg', note: 'Carneproaspata.ro și similare.' },
        { name: 'Piața Cibin', availability: 'occasional', aisle: 'Rar, la măcelari cu relații în fondurile de vânătoare', priceRon: 90, packGrams: 2000, packLabel: '2 kg', note: 'Cere certificatul de examen trichineloscopic.' }
      ],
      sibiuNote: 'Județul Sibiu are fonduri de vânătoare importante în Munții Cindrel și Făgăraș, iar carnea de mistreț circulă în sezon prin măcelăriile locale. Regula absolută: fără buletin de analiză pentru trichinella, nu cumperi. Punct.',
      per100g: { kcal: 118, protein: 21.5, carbs: 0, sugars: 0, fat: 3.3, satFat: 1, fiber: 0, salt: 0.12 },
      micros: { ironMg: 3, zincMg: 3.5, b12Ug: 1.5, potassiumMg: 350, cholesterolMg: 65 },
      serving: { grams: 250, label: '1 porție (250 g crud)' },
      effort: 5,
      timeMin: 260,
      activeTimeMin: 40,
      cooking: {
        method: 'slow',
        difficulty: 'hard',
        equipment: ['oală de fontă cu capac', 'recipient pentru marinat', 'termometru'],
        steps: [
          'Marinare obligatorie 24–48 de ore: vin roșu, oțet, ceapă, morcov, ienupăr, ienibahar, dafin, cimbru.',
          'Scurge, usucă foarte bine, rumenește bucățile în două-trei tranșe.',
          'Călește legumele din marinadă, adaugă 2 linguri de făină și amestecă 2 minute.',
          'Toarnă marinada strecurată și supă, pune carnea înapoi.',
          'Capac, cuptor 150 °C, 3 ore. Mistrețul e mult mai tare decât porcul domestic.',
          'Verifică minimum 71 °C în centru — obligatoriu la vânat, din cauza trichinellei.',
          'La final: 2 linguri de gem de afine sau merișoare și un strop de oțet.'
        ],
        yieldNote: '1 kg carne de mistreț ≈ 600 g gătită'
      },
      taste: {
        profile: 'Intens, sălbatic, cu note de pădure — mult mai puternic decât porcul domestic',
        intensity: 5,
        sweetness: 1,
        saltiness: 2,
        umami: 5,
        richness: 2,
        texture: 'Fibre foarte dense și tari; cere marinare și 3 ore de gătit lent',
        notes: 'Foarte slabă (3,3 g grăsime) și foarte gustoasă, dar cere efort real. Marinada nu e opțională, e parte din rețetă.'
      },
      stats: { taste: 76, satiety: 90, convenience: 8, versatility: 30 },
      timing: { breakfast: 0, preWorkout: 0, postWorkout: 2, lunch: 4, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Mâncare de toamnă-iarnă, de sărbătoare vânătorească.',
      tags: ['protein-dense', 'iron-rich', 'premium', 'winter', 'whole-food', 'local-sibiu'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Gem de afine', 'Ienupăr', 'Mămăligă', 'Varză roșie', 'Vin roșu tanic'],
      tips: [
        'Mistrețul e mult mai slab decât porcul domestic: 3,3 g grăsime față de 20 g la ceafă.',
        'Ienupărul zdrobit în marinadă e condimentul clasic care leagă gustul de vânat.',
        'Carnea de la exemplarele tinere (sub 2 ani) e sensibil mai fragedă — întreabă măcelarul.'
      ],
      warnings: [
        'RISC DE TRICHINELLA. Nu consuma niciodată carne de mistreț fără buletin de examen trichineloscopic. Gătește obligatoriu la minimum 71 °C în toată masa.',
        'Congelarea NU distruge trichinella la mistreț (spre deosebire de porcul domestic).',
        'Poate conține alice de plumb — verifică bucățile înainte de gătit.'
      ],
      storage: 'Frigider 0–2 °C sau congelator −18 °C.',
      shelfLife: '2–3 zile refrigerată; 8 luni congelată',
      dataConfidence: 'low',
      sources: ['USDA SR Legacy 17165 (game meat, boar)', 'ANSVSA — reglementări examen trichineloscopic']
    },

    {
      id: 'm-piept-pui-congelat',
      name: 'Frozen Chicken Breast Fillets',
      nameRo: 'File de piept de pui congelat',
      brand: 'generic / marcă proprie',
      category: 'fresh-meat',
      subcategory: 'Congelate',
      emoji: '🧊',
      unit: 'g',
      stores: [
        { name: 'Lidl', availability: 'always', aisle: 'Congelator, zona carne — pungi de 1 kg', priceRon: 27.9, packGrams: 1000, packLabel: 'pungă 1 kg, bucăți separate (IQF)', note: '' },
        { name: 'Kaufland', availability: 'always', aisle: 'Congelator carne, pungi mari', priceRon: 28.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Selgros', availability: 'always', aisle: 'Congelator, saci de 2,5 kg', priceRon: 64.75, packGrams: 2500, packLabel: 'sac 2,5 kg', note: 'Cel mai mic preț pe kg din Sibiu.' },
        { name: 'Penny', availability: 'usual', aisle: 'Congelator', priceRon: 29.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' }
      ],
      sibiuNote: 'Comparația care contează: piept proaspăt 33 lei/kg vs congelat 27 lei/kg. Dar congelatul e adesea glazurat cu 5–10% apă, deci proteina reală pe kilogram plătit e cam aceeași. Avantajul real e că nu se strică în frigider — dispare presiunea de a-l găti în 2 zile.',
      per100g: { kcal: 106, protein: 21.5, carbs: 0, sugars: 0, fat: 1.8, satFat: 0.5, fiber: 0, salt: 0.3 },
      micros: { ironMg: 0.4, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 330, cholesterolMg: 62 },
      serving: { grams: 180, label: '1 file (180 g congelat)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'prosop de hârtie', 'clește'],
        steps: [
          'Decongelează peste noapte în frigider, pe o farfurie. Niciodată la temperatura camerei.',
          'Dacă te grăbește timpul: pungă etanșă în apă rece, 30–40 de minute, cu apa schimbată o dată.',
          'Tamponează foarte bine — pieptul decongelat lasă mult mai multă apă decât cel proaspăt.',
          'Condimentează și prăjește 4 minute pe fiecare parte în tigaie bine încinsă.',
          'Verifică 74 °C. Odihnește 5 minute.'
        ],
        yieldNote: '1 kg congelat ≈ 930 g după decongelare ≈ 660 g gătit'
      },
      taste: {
        profile: 'Identic cu pieptul proaspăt, dar mai apos și puțin mai fad',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Mai moale și mai burete decât proaspătul, din cauza cristalelor de gheață care rup fibrele',
        notes: 'Diferența față de proaspăt e reală dar mică. La sos, curry sau tocat mărunt, nu se observă deloc.'
      },
      stats: { taste: 40, satiety: 86, convenience: 68, versatility: 92 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Rezerva din congelator care salvează orice seară fără plan.',
      tags: ['low-fat', 'protein-dense', 'frozen', 'meal-prep', 'shelf-stable', 'cheap-protein', 'bulk-buy'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Orez', 'Legume congelate', 'Sos de soia', 'Curry', 'Iaurt'],
      tips: [
        'Verifică lista de ingrediente: dacă apare apă sau glazură de protecție peste 5%, plătești apă la preț de carne.',
        'Pungile IQF (bucăți separate) sunt mult mai practice decât blocul solid — scoți exact cât ai nevoie.',
        'Nu recongela carnea decongelată. Dacă ai scos prea mult, gătește tot și congelează gătit.'
      ],
      warnings: [
        'Decongelare doar în frigider sau în apă rece, niciodată pe blat.',
        'Glazura de apă (până la 10% legal) diluează prețul real pe kilogram de carne.',
        '74 °C după decongelare, ca la orice pui.'
      ],
      storage: 'Congelator −18 °C constant. După decongelare, frigider maximum 24 h.',
      shelfLife: '9–12 luni la −18 °C',
      dataConfidence: 'medium',
      sources: ['Eticheta file de pui congelat Lidl', 'USDA SR Legacy 05062']
    },

    {
      id: 'm-pulpe-pui-congelate',
      name: 'Frozen Chicken Leg Quarters',
      nameRo: 'Pulpe (sferturi) de pui congelate',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Congelate',
      emoji: '🧊',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Congelator, saci de 5–10 kg', priceRon: 59.5, packGrams: 5000, packLabel: 'sac 5 kg', note: 'Cel mai ieftin kilogram de carne din tot orașul.' },
        { name: 'Metro', availability: 'always', aisle: 'Congelator horeca', priceRon: 115, packGrams: 10000, packLabel: 'sac 10 kg', note: 'Card Metro necesar.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Congelator carne', priceRon: 14.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' },
        { name: 'Penny', availability: 'usual', aisle: 'Congelator', priceRon: 13.9, packGrams: 1000, packLabel: 'pungă 1 kg', note: '' }
      ],
      sibiuNote: 'La 11,5–12 lei/kg în sac de 5–10 kg, pulpele congelate de la Selgros și Metro sunt cea mai ieftină carne cumpărabilă în Sibiu. Dacă ai congelator mare și gătești pentru familie, e imbatabil: un sac de 5 kg costă 60 de lei și dă ~2,8 kg carne gătită.',
      per100g: { kcal: 180, protein: 18, carbs: 0, sugars: 0, fat: 12, satFat: 3.4, fiber: 0, salt: 0.2 },
      micros: { ironMg: 1, zincMg: 1.9, b12Ug: 0.5, potassiumMg: 240, cholesterolMg: 90 },
      serving: { grams: 300, label: '1 sfert de pui (300 g congelat, cu os)' },
      effort: 2,
      timeMin: 55,
      activeTimeMin: 10,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă de cuptor', 'hârtie de copt'],
        steps: [
          'Decongelează 12 ore în frigider, într-un vas care să prindă lichidul.',
          'Scurge complet lichidul și usucă pielea cu prosop de hârtie — e pasul care decide dacă pielea se rumenește.',
          'Sare, piper, boia, usturoi granulat, o lingură de ulei.',
          'Cuptor 200 °C, tavă cu hârtie de copt, 45–50 de minute.',
          'Verifică 80 °C lângă os.',
          'Grăsimea scursă în tavă se poate păstra pentru cartofi.'
        ],
        yieldNote: '1 kg sferturi congelate ≈ 560 g carne gătită fără os'
      },
      taste: {
        profile: 'Gust bun de pui, dar cu o notă apoasă tipică produsului congelat industrial',
        intensity: 3,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 4,
        texture: 'Carne moale, dar pielea se rumenește mai greu decât la proaspăt',
        notes: 'Nu vei impresiona pe nimeni, dar hrănești 5 oameni cu 25 de lei. Prioritatea aici e economia, nu gastronomia.'
      },
      stats: { taste: 62, satiety: 76, convenience: 45, versatility: 65 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 1, dinner: 5, beforeBed: 2 },
      timingNote: 'Bază de mese ieftine pentru familie; nu e o carne de performanță.',
      tags: ['high-protein', 'frozen', 'budget', 'cheap-protein', 'bulk-buy', 'batch-cook', 'shelf-stable'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Cartofi', 'Orez', 'Varză călită', 'Bulion', 'Mujdei'],
      tips: [
        'Cost real: 12 lei/kg cumpărat înseamnă ~21 lei per kilogram de carne gătită fără os. Tot cel mai ieftin din Sibiu.',
        'Verifică sacul: dacă are cristale mari de gheață pe interior, produsul a fost decongelat și recongelat. Nu-l lua.',
        'Porționează sacul mare în pungi de 1 kg imediat ce ajungi acasă, cât e încă înghețat bocnă.'
      ],
      warnings: [
        'Sacii mari cer spațiu real de congelator (5 kg ocupă un sertar întreg).',
        'Nu recongela după decongelare.',
        '80 °C lângă os pentru carne cu os.'
      ],
      storage: 'Congelator −18 °C.',
      shelfLife: '9–12 luni la −18 °C',
      dataConfidence: 'medium',
      sources: ['USDA SR Legacy 05098', 'estimare de preț 2026 — neconfirmată la raft']
    },

    {
      id: 'm-carne-tocata-congelata',
      name: 'Frozen Ground Meat',
      nameRo: 'Carne tocată congelată (brichetă)',
      brand: 'generic',
      category: 'fresh-meat',
      subcategory: 'Congelate',
      emoji: '🧊',
      unit: 'g',
      stores: [
        { name: 'Selgros', availability: 'always', aisle: 'Congelator, brichete de 1–2,5 kg', priceRon: 67.25, packGrams: 2500, packLabel: 'brichetă 2,5 kg', note: 'Amestec porc-vită.' },
        { name: 'Kaufland', availability: 'usual', aisle: 'Congelator carne', priceRon: 29.9, packGrams: 1000, packLabel: 'brichetă 1 kg', note: '' },
        { name: 'Metro', availability: 'always', aisle: 'Congelator horeca', priceRon: 129.5, packGrams: 5000, packLabel: 'bax 5 kg', note: 'Card Metro necesar.' }
      ],
      sibiuNote: 'Tocătura congelată costă cu 3–5 lei/kg mai puțin decât cea proaspătă și rezolvă cea mai mare problemă a tocăturii: perisabilitatea de 24 de ore. Dezavantajul e că nu poți vedea culoarea și textura înainte de cumpărare.',
      per100g: { kcal: 220, protein: 18, carbs: 0, sugars: 0, fat: 16.5, satFat: 6.3, fiber: 0, salt: 0.16 },
      micros: { ironMg: 1.8, zincMg: 3.4, b12Ug: 1.3, potassiumMg: 290, cholesterolMg: 70 },
      serving: { grams: 150, label: '1 porție (150 g congelat)' },
      effort: 3,
      timeMin: 50,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie adâncă', 'lingură de lemn', 'strecurătoare'],
        steps: [
          'Decongelează 12 ore în frigider, într-un vas — o brichetă de 1 kg lasă 80–100 ml lichid.',
          'Scurge lichidul complet. Dacă îl lași, carnea fierbe în loc să se rumenească.',
          'Tigaie foarte încinsă, carnea în două tranșe, desfăcută cu lingura.',
          'Rumenește 8–10 minute până se colorează bine.',
          'Adaugă ceapă, usturoi, bulion și continuă rețeta dorită.',
          '71 °C în centru pentru orice carne tocată.'
        ],
        yieldNote: '1 kg tocătură congelată ≈ 900 g după decongelare ≈ 620 g gătită'
      },
      taste: {
        profile: 'Similar cu tocătura proaspătă, cu o pierdere mică de aromă și de suculență',
        intensity: 3,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 4,
        texture: 'Mai fărâmicioasă și mai apoasă decât proaspăta; slabă pentru burgeri, bună pentru sosuri',
        notes: 'Pentru bolognese, chili sau musaca e perfect acceptabilă. Pentru burgeri sau chiftele, diferența se simte.'
      },
      stats: { taste: 62, satiety: 78, convenience: 58, versatility: 85 },
      timing: { breakfast: 1, preWorkout: 1, postWorkout: 3, lunch: 5, snack: 2, dinner: 5, beforeBed: 2 },
      timingNote: 'Rezerva de bază din congelator pentru mesele de zi de lucru.',
      tags: ['high-protein', 'frozen', 'budget', 'cheap-protein', 'bulk-buy', 'batch-cook', 'shelf-stable', 'meal-prep'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: false },
      pairings: ['Paste', 'Bulion', 'Cartofi', 'Vinete', 'Fasole'],
      tips: [
        'Brichetele plate se decongelează mult mai repede decât cuburile — cumpără format plat dacă ai de ales.',
        'Poți găti tocătura direct din congelat, la foc mic cu capac, răzuind straturile pe măsură ce se dezgheață. Durează 25 de minute.',
        'Alternativa mai bună: cumpără proaspăt, porționează în pungi plate de 250 g și congelează tu. Costă la fel și știi ce ai.'
      ],
      warnings: [
        'Nu poți evalua vizual calitatea înainte de cumpărare.',
        'Nu recongela după decongelare.',
        '71 °C obligatoriu pentru carne tocată.'
      ],
      storage: 'Congelator −18 °C.',
      shelfLife: '3–4 luni la −18 °C (grăsimea râncezește mai repede decât carnea întreagă)',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'USDA SR Legacy 10219 + 13020']
    },

    {
      id: 'm-file-pui-bulk-horeca',
      name: 'Bulk Frozen Chicken Breast (Horeca Pack)',
      nameRo: 'File de piept de pui congelat, format horeca (2,5–5 kg)',
      brand: 'generic / marcă horeca',
      category: 'fresh-meat',
      subcategory: 'Congelate',
      emoji: '🧊',
      unit: 'g',
      stores: [
        { name: 'Metro', availability: 'always', aisle: 'Congelator horeca, saci de 5 kg', priceRon: 124.5, packGrams: 5000, packLabel: 'sac 5 kg', note: 'Card Metro obligatoriu; se eliberează și pe PFA.' },
        { name: 'Selgros', availability: 'always', aisle: 'Congelator, saci de 2,5 kg', priceRon: 64.75, packGrams: 2500, packLabel: 'sac 2,5 kg', note: '' }
      ],
      sibiuNote: 'Aici e economia reală: 25 lei/kg la Metro față de 33–36 lei/kg proaspăt în supermarket. Pentru cine mănâncă 1 kg de piept pe săptămână, un sac de 5 kg înseamnă ~50 de lei economisiți la fiecare cumpărare și 5 săptămâni fără grija cărnii.',
      per100g: { kcal: 106, protein: 21.5, carbs: 0, sugars: 0, fat: 1.8, satFat: 0.5, fiber: 0, salt: 0.3 },
      micros: { ironMg: 0.4, zincMg: 0.8, b12Ug: 0.3, potassiumMg: 330, cholesterolMg: 62 },
      serving: { grams: 180, label: '1 file (180 g congelat)' },
      effort: 2,
      timeMin: 20,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'prosop de hârtie'],
        steps: [
          'Scoate seara 2–3 file din sac și pune-le într-un vas în frigider.',
          'A doua zi, tamponează foarte bine — fileurile horeca lasă mai multă apă decât cele retail.',
          'Taie pe orizontală în felii de 1,5 cm pentru gătire uniformă.',
          'Tigaie bine încinsă, 4 minute pe fiecare parte.',
          'Verifică 74 °C și odihnește 5 minute.'
        ],
        yieldNote: '1 kg congelat ≈ 920 g decongelat ≈ 650 g gătit'
      },
      taste: {
        profile: 'Neutru și ușor apos, cu variabilitate mai mare de la bucată la bucată decât la retail',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Variabilă — unele bucăți sunt ferme, altele buretoase',
        notes: 'Calitatea e sub cea a pieptului proaspăt de brand, dar diferența de preț de 8–11 lei/kg e greu de ignorat dacă mănânci mult pui.'
      },
      stats: { taste: 38, satiety: 86, convenience: 62, versatility: 92 },
      timing: { breakfast: 2, preWorkout: 3, postWorkout: 5, lunch: 5, snack: 3, dinner: 5, beforeBed: 3 },
      timingNote: 'Coloana vertebrală a oricărui meal prep serios pe buget în Sibiu.',
      tags: ['low-fat', 'protein-dense', 'frozen', 'bulk-buy', 'cheap-protein', 'meal-prep', 'batch-cook', 'cutting'],
      diet: { vegan: false, vegetarian: false, glutenFree: true, lactoseFree: true, keto: true, halal: false, porkFree: true },
      pairings: ['Orez', 'Broccoli', 'Sos de iaurt', 'Legume congelate', 'Cartofi dulci'],
      tips: [
        'Matematica: 5 kg la 25 lei/kg = 125 de lei pentru ~1075 g de proteină pură. Adică ~11,6 lei per 100 g proteină — printre cele mai bune raporturi din tot ghidul.',
        'Cardul Metro se obține gratuit pe firmă sau PFA; Selgros vinde și persoanelor fizice fără card.',
        'Verifică procentul de glazură pe ambalaj. Peste 7% înseamnă că plătești apă la 25 de lei kilogramul.'
      ],
      warnings: [
        'Necesită spațiu de congelator (5 kg = un sertar întreg).',
        'Glazura de apă poate ajunge la 10% în produsele horeca ieftine.',
        'Metro cere card de client; Selgros nu.'
      ],
      storage: 'Congelator −18 °C constant, sacul închis etanș după fiecare deschidere.',
      shelfLife: '9–12 luni la −18 °C',
      dataConfidence: 'low',
      sources: ['produse.metro.ro carne congelata', 'Estimare preț horeca Sibiu 2026']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
