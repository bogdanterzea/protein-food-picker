/* =========================================================================
 * PROTEIN ATLAS SIBIU — PEȘTE & FRUCTE DE MARE
 * File: js/data/04-fish-seafood.js
 * Items: 60
 * Category slug: fish-seafood
 * ID prefix: f-
 * Last researched: 2026-08
 *
 * NOTĂ METODOLOGICĂ: pentru conserve, per100g este pentru produsul SCURS
 * (fără ulei / fără sos), pentru că așa se mănâncă. Eticheta de pe cutie
 * declară de multe ori valorile pentru conținutul TOTAL (pește + ulei),
 * ceea ce face proteina să pară mai mică decât e în realitate.
 * serving.grams = greutatea scursă reală a pachetului.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'f-ton-bucati-suc-propriu-nixe',
      name: 'Canned Tuna Chunks in Brine',
      nameRo: 'Ton bucăți în suc propriu',
      brand: 'Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Raft conserve pește, lângă sardine, culoar central',
          priceRon: 7.49,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Uneori la 3 lei reducere în catalogul de luni.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, raft K-Classic',
          priceRon: 8.29,
          packGrams: 130,
          packLabel: 'cutie 185 g (130 g scurs)',
          note: 'Echivalentul K-Classic, cutie mai mare.'
        }
      ],
      sibiuNote: 'Toate cele patru Lidl-uri din Sibiu (Ștrandului, Rahovei, Calea Poplăcii, Șelimbăr) au raft permanent. Când e la promoție, se ia cutie cu cutie — se ține 3 ani.',
      per100g: {
        kcal: 111,
        protein: 26,
        carbs: 0,
        sugars: 0,
        fat: 0.7,
        satFat: 0.2,
        fiber: 0,
        salt: 1
      },
      micros: {
        b12Ug: 2.5,
        omega3Mg: 150,
        potassiumMg: 260,
        cholesterolMg: 40,
        ironMg: 1.1
      },
      serving: {
        grams: 104,
        label: '1 cutie scursă (104 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~104 g pește scurs. Plătești 160, mănânci 104.'
      },
      taste: {
        profile: 'Sec, sărat, ușor metalic, gust curat de ton fără grăsime',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 3,
        richness: 1,
        texture: 'Fibros, uscat, se sfărâmă cu furculița',
        notes: 'Simplu din cutie e sec și plictisitor. Cu o linguriță de ulei de măsline și lămâie devine mâncare adevărată.'
      },
      stats: {
        taste: 48,
        satiety: 82,
        convenience: 98,
        versatility: 88
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Proteină rapidă, aproape zero grăsime — ideal post-antrenament sau la birou.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'office-lunch', 'cutting', 'portable'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ulei de măsline', 'Lămâie', 'Ceapă roșie', 'Fasole albă la conservă', 'Orez', 'Ardei copt'],
      tips: [
        'Scurge lichidul dar păstrează cutia 30 de secunde răsturnată — mai iese ~10 g de saramură care e doar sare.',
        'Amestecă cu iaurt grecesc în loc de maioneză: salată de ton cu 20 g proteină și 3 g grăsime.',
        'Cutia de 160 g are doar ~104 g pește. Când compari prețuri între mărci, împarte la greutatea scursă, nu la cea totală.'
      ],
      warnings: [
        'Mercur: tonul dungat (skipjack) e cel mai sigur ton, dar tot limitează-te la maximum 3–4 cutii pe săptămână.',
        'Sare 1 g/100 g — o cutie îți dă ~1 g din cei 5 g recomandați zilnic.'
      ],
      storage: 'Cămară, la temperatura camerei. După deschidere, mută în recipient de plastic sau sticlă, frigider, maximum 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Nixe ton în suc propriu', 'lidl.ro']
    },

    {
      id: 'f-ton-fileuri-suc-propriu-nixe',
      name: 'Whole Tuna Fillets in Brine, 3-pack',
      nameRo: 'Fileuri de ton dungat în suc propriu, 3 bucăți',
      brand: 'Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Conserve pește, pachetul de 3 legat cu folie',
          priceRon: 15.99,
          packGrams: 168,
          packLabel: '3 × 80 g (3 × 56 g scurs)',
          note: 'File întreg, nu bucăți mărunțite — textura e clar mai bună.'
        }
      ],
      sibiuNote: 'Pachetul de 3 e cel mai bun raport din Sibiu pentru ton file. Lidl-ul de pe Calea Poplăcii îl are aproape mereu în stoc.',
      per100g: {
        kcal: 108,
        protein: 25,
        carbs: 0,
        sugars: 0,
        fat: 0.8,
        satFat: 0.2,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        b12Ug: 2.4,
        omega3Mg: 160,
        potassiumMg: 250,
        cholesterolMg: 38
      },
      serving: {
        grams: 56,
        label: '1 cutie mică scursă (56 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 80 g → ~56 g pește scurs.'
      },
      taste: {
        profile: 'Mai delicat decât tonul mărunțit, mai puțin sărat, textura de file întreg',
        intensity: 3,
        sweetness: 0,
        saltiness: 2,
        umami: 3,
        richness: 1,
        texture: 'Bucăți mari care se desfac în lamele, nu în pastă',
        notes: 'Diferența față de bucățile mărunțite e reală: aici mănânci pește, nu resturi presate.'
      },
      stats: {
        taste: 58,
        satiety: 78,
        convenience: 100,
        versatility: 82
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 5,
        dinner: 3,
        beforeBed: 3
      },
      timingNote: 'Cutia mică de 80 g e porția perfectă de gustare — 14 g proteină și încape în buzunar.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'very-high-protein', 'protein-dense', 'low-fat', 'portable', 'office-lunch', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Salată verde', 'Roșii cherry', 'Pâine integrală', 'Capere', 'Ou fiert'],
      tips: [
        'Cutia mică de 80 g dă doar 14 g proteină — dacă o iei ca masă, ia două.',
        'Preț pe gram de proteină e mai prost decât la cutia mare; plătești pentru textura de file.',
        'Deschide-o cu inelul deasupra chiuvetei — saramura sare.'
      ],
      warnings: [
        'Mercur: ton dungat, deci risc scăzut, dar tot maximum 3–4 cutii pe săptămână.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile în alt recipient.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Nixe fileuri de ton dungat', 'lidl.ro']
    },

    {
      id: 'f-ton-ulei-masline-rio-mare',
      name: 'Tuna in Olive Oil',
      nameRo: 'Ton în ulei de măsline',
      brand: 'Rio Mare (Carrefour / Auchan / Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🫒',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve pește, raft de sus, cutia galben-albastră',
          priceRon: 18.99,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Cel mai des la promoție 2+1 sau -30%.'
        },
        {
          name: 'Auchan',
          availability: 'always',
          aisle: 'Conserve pește',
          priceRon: 19.49,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'always',
          aisle: 'Conserve, pachete de 3 sau 6',
          priceRon: 52.9,
          packGrams: 312,
          packLabel: '3 × 160 g (3 × 104 g scurs)',
          note: 'Bax de 3 — cel mai bun preț pe gram din Sibiu.'
        }
      ],
      sibiuNote: 'La Carrefour din Shopping City Sibiu apare la promoție aproape lunar; la Metro Șelimbăr merită doar baxul de 3 sau 6.',
      per100g: {
        kcal: 192,
        protein: 25.5,
        carbs: 0,
        sugars: 0,
        fat: 10,
        satFat: 1.6,
        fiber: 0,
        salt: 1
      },
      micros: {
        b12Ug: 2.6,
        omega3Mg: 400,
        potassiumMg: 250,
        cholesterolMg: 45,
        vitDUg: 2
      },
      serving: {
        grams: 104,
        label: '1 cutie scursă (104 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~104 g pește scurs + ~50 g ulei de măsline.'
      },
      taste: {
        profile: 'Bogat, untos, gust rotund de măsline peste ton, clar superior variantelor ieftine',
        intensity: 4,
        sweetness: 0,
        saltiness: 2,
        umami: 4,
        richness: 4,
        texture: 'Umed, moale, se desface în bucăți mari lucioase',
        notes: 'Singurul ton la conservă pe care îl mănânci cu plăcere direct din cutie. De asta costă dublu.'
      },
      stats: {
        taste: 80,
        satiety: 80,
        convenience: 98,
        versatility: 85
      },
      timing: {
        breakfast: 3,
        preWorkout: 3,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Grăsimea încetinește digestia — bun la prânz sau seara, mai puțin ideal imediat post-antrenament.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'protein-dense', 'mid-price', 'imported', 'office-lunch'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Paste', 'Roșii uscate', 'Măsline Kalamata', 'Ceapă roșie', 'Pâine de casă', 'Rucola'],
      tips: [
        'Eticheta declară 403 kcal și 17,5 g proteină la 100 g — dar aia e pentru conținutul TOTAL, cu tot uleiul. Scurs, ajungi la ~192 kcal și ~25 g proteină.',
        'Nu arunca uleiul: e ulei de măsline cu aromă de ton, perfect pentru dressing de salată sau pentru a călii ceapă.',
        'Dacă scurgi tot uleiul, produsul are aproape aceleași macro-uri ca tonul în suc propriu, dar ai plătit dublu.'
      ],
      warnings: [
        'Mercur: verifică specia pe etichetă. Rio Mare folosește în general ton dungat sau galben — limitează la 3 cutii pe săptămână.'
      ],
      storage: 'Cămară. După deschidere, transferă cu tot cu ulei într-un borcan, frigider 2–3 zile.',
      shelfLife: '4–5 ani sigilat',
      dataConfidence: 'high',
      sources: ['riomare.ro', 'carrefour.ro', 'valori scurse estimate din raportul pește/ulei declarat 65%/33,5%']
    },

    {
      id: 'f-ton-natural-rio-mare',
      name: 'Tuna in Own Juice, Premium',
      nameRo: 'Ton natural în suc propriu',
      brand: 'Rio Mare (Carrefour / Auchan)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🐠',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve pește, cutia albastru deschis',
          priceRon: 16.99,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'usual',
          aisle: 'Conserve pește',
          priceRon: 18.49,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Mai scump decât în hipermarket.'
        }
      ],
      sibiuNote: 'Prețul e cu 8–10 lei peste Nixe pentru practic aceleași macro-uri. Îl iei doar dacă simți diferența de textură.',
      per100g: {
        kcal: 105,
        protein: 24,
        carbs: 0,
        sugars: 0,
        fat: 1.2,
        satFat: 0.3,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        b12Ug: 2.5,
        omega3Mg: 200,
        potassiumMg: 255,
        cholesterolMg: 42
      },
      serving: {
        grams: 104,
        label: '1 cutie scursă (104 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~104 g scurs.'
      },
      taste: {
        profile: 'Curat, delicat, mai puțin sărat decât mărcile proprii, fără gust metalic',
        intensity: 3,
        sweetness: 0,
        saltiness: 2,
        umami: 3,
        richness: 1,
        texture: 'Bucăți compacte, mai puțin fibroase decât la mărcile ieftine',
        notes: 'E ton bun. Dar diferența față de Nixe nu justifică 9 lei în plus pentru majoritatea oamenilor.'
      },
      stats: {
        taste: 62,
        satiety: 82,
        convenience: 98,
        versatility: 88
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Practic identic nutrițional cu variantele ieftine — folosește-l la fel.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'low-fat', 'premium', 'imported', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Salată de fasole', 'Ou fiert', 'Avocado', 'Muștar', 'Pâine prăjită'],
      tips: [
        'Compară cu Nixe la raftul de alături: aceleași macro-uri, jumătate de preț. Aici plătești brandul.',
        'Sucul propriu conține proteine solubile — dacă îl folosești într-o pastă sau într-un sos, nu-l arunca.'
      ],
      warnings: [
        'Mercur: maximum 3–4 cutii de ton pe săptămână, indiferent de marcă.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile.',
      shelfLife: '4–5 ani sigilat',
      dataConfidence: 'medium',
      sources: ['riomare.ro', 'carrefour.ro']
    },

    {
      id: 'f-ton-k-classic-suc-propriu',
      name: 'Tuna Chunks in Brine, Store Brand',
      nameRo: 'Ton bucăți în suc propriu K-Classic',
      brand: 'K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, raft K-Classic, cutie de 185 g',
          priceRon: 8.99,
          packGrams: 130,
          packLabel: 'cutie 185 g (130 g scurs)',
          note: 'Cutia mai mare = mai multă proteină pe leu decât cutia de 160 g.'
        }
      ],
      sibiuNote: 'Kaufland Șos. Alba Iulia și Kaufland Vasile Aaron îl au permanent. Intră frecvent în promoția „Eticheta Galbenă".',
      per100g: {
        kcal: 105,
        protein: 24,
        carbs: 0,
        sugars: 0,
        fat: 1,
        satFat: 0.3,
        fiber: 0,
        salt: 1.1
      },
      micros: {
        b12Ug: 2.4,
        omega3Mg: 150,
        potassiumMg: 250,
        cholesterolMg: 40
      },
      serving: {
        grams: 130,
        label: '1 cutie scursă (130 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 185 g → ~130 g scurs.'
      },
      taste: {
        profile: 'Sărat, sec, gust standard de ton la conservă fără pretenții',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 3,
        richness: 1,
        texture: 'Bucăți mici, ușor sfărâmicioase, uneori apoase',
        notes: 'Nu e bun simplu. E bun în salate, în paste, în sandvișuri cu mult muștar.'
      },
      stats: {
        taste: 44,
        satiety: 84,
        convenience: 98,
        versatility: 88
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: '31 g proteină pe cutie pentru sub 9 lei — cel mai bun raport din raftul de conserve.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'budget', 'bulk-buy', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Paste', 'Porumb dulce', 'Maioneză light', 'Ceapă verde', 'Orez fiert', 'Castraveți murați'],
      tips: [
        'Cutia de 185 g scoate ~31 g proteină. La 8,99 lei asta înseamnă ~0,29 lei pe gram de proteină — printre cele mai ieftine surse animale din Sibiu.',
        'Când e la Eticheta Galbenă, ia 6–8 cutii. Termenul de valabilitate e de ani.',
        'Presează capacul peste conținut și ține cutia răsturnată 1 minut — scoate mult mai multă saramură decât o scurgere rapidă.'
      ],
      warnings: [
        'Mercur: limitează-te la 3–4 cutii pe săptămână.',
        'Sare 1,1 g/100 g — o cutie întreagă înseamnă ~1,4 g de sare.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile în recipient închis.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'valori tipice pentru ton dungat în saramură']
    },

    {
      id: 'f-ton-ulei-floarea-soarelui-kclassic',
      name: 'Tuna in Sunflower Oil',
      nameRo: 'Ton în ulei de floarea-soarelui',
      brand: 'K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🌻',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, lângă varianta în suc propriu',
          priceRon: 8.49,
          packGrams: 130,
          packLabel: 'cutie 185 g (130 g scurs)',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Conserve, raft mic de pește',
          priceRon: 7.99,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Marca proprie Penny, cutie mai mică.'
        }
      ],
      sibiuNote: 'E cel mai ieftin ton „gustos" din Sibiu, dar uleiul de floarea-soarelui e omega-6, nu omega-3. Scurge-l bine.',
      per100g: {
        kcal: 198,
        protein: 24.5,
        carbs: 0,
        sugars: 0,
        fat: 11,
        satFat: 1.3,
        fiber: 0,
        salt: 1.1
      },
      micros: {
        b12Ug: 2.4,
        omega3Mg: 180,
        potassiumMg: 240,
        cholesterolMg: 42
      },
      serving: {
        grams: 130,
        label: '1 cutie scursă (130 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 185 g → ~130 g scurs.'
      },
      taste: {
        profile: 'Mai moale și mai plăcut decât cel în saramură, dar uleiul are gust neutru-gras, nu aromat',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Umed, alunecos, se face pastă ușor',
        notes: 'Compromisul ieftin: mai bun la gust decât în apă, dar uleiul nu-ți aduce nimic nutrițional.'
      },
      stats: {
        taste: 58,
        satiety: 76,
        convenience: 98,
        versatility: 84
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Dacă ești în deficit caloric, scurge uleiul cu presiune — economisești 40–60 kcal pe cutie.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'cheap-protein', 'budget', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine cu unt', 'Ceapă', 'Roșii', 'Muștar', 'Ouă fierte'],
      tips: [
        'Uleiul de floarea-soarelui din cutie e omega-6 pur. Aruncă-l — nu are nicio valoare, spre deosebire de uleiul de măsline.',
        'Presează pește cu capacul și lasă cutia în chiuvetă 2 minute: scoți încă ~15 kcal de ulei.',
        'Dacă vrei omega-3, ia macrou sau sardine, nu ton. Tonul la conservă are de 10 ori mai puțin.'
      ],
      warnings: [
        'Mercur: maximum 3–4 cutii pe săptămână.',
        'Uleiul rămas în cutie adaugă rapid 80–120 kcal dacă nu-l scurgi.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'valori tipice ton în ulei, scurs']
    },

    {
      id: 'f-ton-calvo-apa',
      name: 'Tuna in Water, Spanish',
      nameRo: 'Ton în apă Calvo',
      brand: 'Calvo (Carrefour / Auchan)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '💧',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve pește, raft de sus, pachet de 3 cutii mici',
          priceRon: 16.99,
          packGrams: 156,
          packLabel: '3 × 80 g (3 × 52 g scurs)',
          note: 'Frecvent la promoție 3+1.'
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Conserve pește',
          priceRon: 17.49,
          packGrams: 156,
          packLabel: '3 × 80 g (3 × 52 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Se găsește constant la Carrefour Shopping City; la Auchan Sibiu apare intermitent. Nu îl caută la Lidl sau Penny.',
      per100g: {
        kcal: 100,
        protein: 23.5,
        carbs: 0,
        sugars: 0,
        fat: 0.8,
        satFat: 0.2,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        b12Ug: 2.3,
        omega3Mg: 140,
        potassiumMg: 245,
        cholesterolMg: 38
      },
      serving: {
        grams: 52,
        label: '1 cutie mică scursă (52 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 80 g → ~52 g scurs.'
      },
      taste: {
        profile: 'Neutru, foarte puțin sărat, gust curat dar plictisitor',
        intensity: 2,
        sweetness: 0,
        saltiness: 2,
        umami: 3,
        richness: 1,
        texture: 'Bucăți medii, ușor apoase',
        notes: 'Tonul în apă e cel mai sec dintre toate. Fără sos e greu de mâncat singur.'
      },
      stats: {
        taste: 42,
        satiety: 80,
        convenience: 96,
        versatility: 86
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 3,
        beforeBed: 3
      },
      timingNote: 'Cea mai slabă opțiune calorică din raft — bun în cut agresiv.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'imported', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Salată verde', 'Iaurt grecesc', 'Lămâie', 'Mărar', 'Castraveți'],
      tips: [
        'Diferența „în apă" vs. „în suc propriu" e mai mult marketing — ambele sunt saramură ușoară.',
        'Cutia mică de 80 g dă doar ~12 g proteină. Nu e o masă, e un topping.',
        'Fiind foarte sec, are nevoie de grăsime adăugată: o linguriță de ulei de măsline sau jumătate de avocado.'
      ],
      warnings: [
        'Mercur: limitează consumul total de ton la 3–4 porții pe săptămână.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['carrefour.ro', 'valori tipice ton în apă, scurs']
    },

    {
      id: 'f-ton-isabel-ulei-masline',
      name: 'Tuna in Olive Oil, Spanish',
      nameRo: 'Ton în ulei de măsline Isabel',
      brand: 'Isabel (Carrefour / Metro)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🫗',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Conserve pește, raft produse importate',
          priceRon: 21.99,
          packGrams: 156,
          packLabel: '3 × 80 g (3 × 52 g scurs)',
          note: 'Nu e mereu pe raft — apare în valuri.'
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Conserve, zona produse spaniole',
          priceRon: 19.9,
          packGrams: 156,
          packLabel: '3 × 80 g (3 × 52 g scurs)',
          note: 'Necesită card Metro.'
        }
      ],
      sibiuNote: 'E o conservă bună dar inconsecvent disponibilă în Sibiu. Dacă vrei ton în ulei de măsline sigur pe raft, ia Rio Mare.',
      per100g: {
        kcal: 190,
        protein: 25,
        carbs: 0,
        sugars: 0,
        fat: 9.8,
        satFat: 1.5,
        fiber: 0,
        salt: 1
      },
      micros: {
        b12Ug: 2.5,
        omega3Mg: 380,
        potassiumMg: 250,
        cholesterolMg: 44
      },
      serving: {
        grams: 52,
        label: '1 cutie mică scursă (52 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 80 g → ~52 g scurs.'
      },
      taste: {
        profile: 'Untos, aromat, ușor mai sărat decât Rio Mare, cu note de măsline verzi',
        intensity: 4,
        sweetness: 0,
        saltiness: 3,
        umami: 4,
        richness: 4,
        texture: 'Bucăți mari, lucioase, moi',
        notes: 'Foarte bun pe pâine cu roșie și puțin usturoi — stil spaniol.'
      },
      stats: {
        taste: 76,
        satiety: 78,
        convenience: 96,
        versatility: 80
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Conservă de „mâncat cu plăcere", nu de bifat proteina.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'protein-dense', 'premium', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită cu roșii', 'Ardei roșu copt', 'Ou fiert', 'Măsline', 'Vin alb sec'],
      tips: [
        'Uleiul de măsline din cutie e bun — pune-l peste salată în loc să-l arunci.',
        'Verifică pe etichetă dacă e „ton alb" (bonito del norte) — acela are mai mult mercur decât tonul dungat.',
        'La 22 lei pentru 156 g scurs, e cea mai scumpă proteină din categoria conservelor. Cumpără-l pentru gust, nu pentru macro-uri.'
      ],
      warnings: [
        'Mercur: dacă e bonito/ton alb, limitează la 2 porții pe săptămână.',
        'Preț per gram de proteină foarte prost față de mărcile proprii.'
      ],
      storage: 'Cămară. După deschidere, frigider 2–3 zile în borcan, acoperit cu uleiul propriu.',
      shelfLife: '4–5 ani sigilat',
      dataConfidence: 'medium',
      sources: ['carrefour.ro', 'valori tipice ton în ulei de măsline, scurs']
    },

    {
      id: 'f-ton-fulgi-carrefour',
      name: 'Flaked Tuna in Brine, Discount',
      nameRo: 'Ton fulgi în suc propriu',
      brand: 'Carrefour Classic / Simpl',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve pește, raft de jos, marca proprie',
          priceRon: 6.49,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Cea mai ieftină conservă de ton din Sibiu.'
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve, raft mic',
          priceRon: 6.99,
          packGrams: 104,
          packLabel: 'cutie 160 g (104 g scurs)',
          note: 'Marca proprie Profi.'
        }
      ],
      sibiuNote: 'Când vrei doar proteină ieftină pentru salată sau paste, asta e alegerea. Nu o mânca simplă din cutie.',
      per100g: {
        kcal: 100,
        protein: 23,
        carbs: 0,
        sugars: 0,
        fat: 1,
        satFat: 0.3,
        fiber: 0,
        salt: 1.2
      },
      micros: {
        b12Ug: 2.2,
        omega3Mg: 130,
        potassiumMg: 230,
        cholesterolMg: 38
      },
      serving: {
        grams: 104,
        label: '1 cutie scursă (104 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~104 g scurs, dar fulgii pierd mai mult lichid decât bucățile.'
      },
      taste: {
        profile: 'Sărat, apos, textura de fulgi mărunți fără personalitate',
        intensity: 3,
        sweetness: 0,
        saltiness: 4,
        umami: 2,
        richness: 1,
        texture: 'Fulgi mici, cvasi-pastă, se face mush când amesteci',
        notes: 'Onest: e ton de umplutură. Ascunde-l în ceva cu gust puternic.'
      },
      stats: {
        taste: 32,
        satiety: 78,
        convenience: 98,
        versatility: 82
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Proteină de bază, ieftină, pentru mese gătite — nu pentru gustări.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'low-fat', 'cheap-protein', 'budget', 'bulk-buy'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Paste cu roșii', 'Orez', 'Cartofi fierți', 'Ceapă călită', 'Maioneză', 'Boia'],
      tips: [
        'La 6,49 lei pentru ~24 g proteină, e sub 0,28 lei pe gram de proteină — foarte greu de bătut.',
        '„Fulgi" înseamnă bucăți mici rezultate din procesare — nu e o calitate inferioară de pește, doar o formă inferioară.',
        'Merge perfect în chiftele de ton cu ou și pesmet, unde textura oricum se pierde.'
      ],
      warnings: [
        'Sare 1,2 g/100 g — mai sărat decât mărcile premium.',
        'Mercur: aceleași limite, 3–4 cutii pe săptămână.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile.',
      shelfLife: '3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['carrefour.ro', 'valori tipice ton fulgi în saramură']
    },

    {
      id: 'f-ton-insalatissime-legume',
      name: 'Tuna Salad with Vegetables, Canned',
      nameRo: 'Salată de ton cu legume la cutie',
      brand: 'Rio Mare Insalatissime / Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🥗',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve pește, cutii plate cu furculiță în capac',
          priceRon: 15.99,
          packGrams: 160,
          packLabel: 'cutie 160 g, se mănâncă integral',
          note: 'Vine cu furculiță de plastic.'
        },
        {
          name: 'Lidl',
          availability: 'occasional',
          aisle: 'Conserve pește, versiunea Nixe',
          priceRon: 9.99,
          packGrams: 160,
          packLabel: 'cutie 160 g',
          note: 'Apare periodic în oferta săptămânii.'
        }
      ],
      sibiuNote: 'Bună la birou când nu ai frigider și nici microunde. Dar citește eticheta: proteina scade la o treime față de tonul simplu.',
      per100g: {
        kcal: 130,
        protein: 9.5,
        carbs: 8,
        sugars: 2,
        fat: 6,
        satFat: 1,
        fiber: 2.5,
        salt: 0.9
      },
      micros: {
        b12Ug: 0.9,
        omega3Mg: 120,
        potassiumMg: 220,
        ironMg: 1
      },
      serving: {
        grams: 160,
        label: '1 cutie întreagă (160 g)'
      },
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
        profile: 'Dulceag-acrișor de la porumb și legume, tonul e discret, uleiul leagă totul',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Amestecat, moale, cu bucăți crocante de porumb și fasole',
        notes: 'Se mănâncă surprinzător de bine reci. Problema e că plătești 16 lei pentru 15 g proteină.'
      },
      stats: {
        taste: 66,
        satiety: 60,
        convenience: 100,
        versatility: 30
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 3,
        beforeBed: 2
      },
      timingNote: 'Masă de urgență la birou sau în tren; nu e o sursă serioasă de proteină.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'portable', 'office-lunch', 'processed', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine crocantă', 'Lămâie', 'Piper proaspăt măcinat'],
      tips: [
        'Cutia întreagă dă doar ~15 g proteină. O cutie simplă de ton la 8 lei dă 26 g. Aici plătești conveniența.',
        'Ține una în geantă sau în sertarul de la birou pentru zilele în care sari peste prânz.',
        'Dacă vrei versiunea ieftină: cutie de ton + jumătate de conservă de fasole + porumb, la 12 lei și 35 g proteină.'
      ],
      warnings: [
        'Proteina e sub 10 g/100 g — nu îl trece la „sursă de proteină" în jurnal fără să verifici.'
      ],
      storage: 'Cămară. Se consumă integral la deschidere.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['riomare.ro', 'carrefour.ro', 'lidl.ro']
    },

    {
      id: 'f-ton-cuscus-pahar',
      name: 'Tuna & Couscous Cup',
      nameRo: 'Ton cu cuscus la pahar',
      brand: 'Rio Mare / marcă proprie',
      category: 'fish-seafood',
      subcategory: 'Conserve de ton',
      emoji: '🍲',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Conserve pește sau raftul de mese rapide',
          priceRon: 16.99,
          packGrams: 160,
          packLabel: 'pahar 160 g',
          note: 'Se găsește intermitent.'
        },
        {
          name: 'Auchan',
          availability: 'occasional',
          aisle: 'Raft mese rapide / conserve',
          priceRon: 17.49,
          packGrams: 160,
          packLabel: 'pahar 160 g',
          note: ''
        }
      ],
      sibiuNote: 'Produs de nișă, nu conta pe el. Dacă îl vezi, e util pentru drumuri lungi — dar e scump pe gram de proteină.',
      per100g: {
        kcal: 160,
        protein: 8.5,
        carbs: 17,
        sugars: 1.5,
        fat: 6,
        satFat: 0.9,
        fiber: 1.5,
        salt: 0.8
      },
      micros: {
        b12Ug: 0.8,
        omega3Mg: 100,
        potassiumMg: 180
      },
      serving: {
        grams: 160,
        label: '1 pahar (160 g)'
      },
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
        profile: 'Cuscus moale ușor condimentat, ton discret, condimente mediteraneene',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Granulos și umed, poate deveni pastos dacă a stat mult',
        notes: 'E mâncare de avion transformată în produs de raft. Sățioasă, dar tonul e figurativ.'
      },
      stats: {
        taste: 58,
        satiety: 58,
        convenience: 100,
        versatility: 20
      },
      timing: {
        breakfast: 2,
        preWorkout: 4,
        postWorkout: 3,
        lunch: 4,
        snack: 3,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Carbohidrați + puțină proteină — mai degrabă pre-workout decât post.',
      tags: ['ready-to-eat', 'grab-and-go', 'shelf-stable', 'portable', 'office-lunch', 'processed', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Ardei iute', 'Iaurt grecesc'],
      tips: [
        'Conține grâu (cuscus) — nu e fără gluten, spre deosebire de restul conservelor de ton.',
        '14 g proteină la 17 lei: cel mai prost raport din tot raftul de conserve de pește.',
        'Alternativă de casă: cuscus instant (2 lei) + o cutie de ton (8 lei) = 30 g proteină la 10 lei.'
      ],
      warnings: [
        'Conține gluten.',
        'Densitate proteică mică raportat la preț — evită dacă urmărești macro-uri.'
      ],
      storage: 'Cămară.',
      shelfLife: '1–2 ani sigilat',
      dataConfidence: 'low',
      sources: ['riomare.ro', 'estimare din produse similare din raft']
    },

    {
      id: 'f-sardine-ulei-masline',
      name: 'Sardines in Olive Oil',
      nameRo: 'Sardine în ulei de măsline',
      brand: 'Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Conserve pește, cutii dreptunghiulare plate',
          priceRon: 6.99,
          packGrams: 90,
          packLabel: 'cutie 120 g (90 g scurs)',
          note: 'Cea mai bună afacere nutrițională din raftul de conserve.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește',
          priceRon: 7.49,
          packGrams: 90,
          packLabel: 'cutie 125 g (90 g scurs)',
          note: 'Versiunea K-Classic.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve pește',
          priceRon: 8.99,
          packGrams: 90,
          packLabel: 'cutie 120 g (90 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Cel mai subestimat produs din supermarketurile din Sibiu: 22 g proteină, 1,3 g omega-3 și calciu cât un pahar de lapte, pentru 7 lei.',
      per100g: {
        kcal: 208,
        protein: 24,
        carbs: 0,
        sugars: 0,
        fat: 12,
        satFat: 3,
        fiber: 0,
        salt: 1.2
      },
      micros: {
        calciumMg: 350,
        ironMg: 2.5,
        zincMg: 1.3,
        b12Ug: 8.9,
        vitDUg: 5,
        omega3Mg: 1400,
        potassiumMg: 400,
        cholesterolMg: 80
      },
      serving: {
        grams: 90,
        label: '1 cutie scursă (90 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Cutie 120 g → ~90 g scurs. Oasele sunt moi și se mănâncă — acolo e calciul.'
      },
      taste: {
        profile: 'Intens, gras, sărat, gust puternic de pește care nu se poate ascunde',
        intensity: 5,
        sweetness: 0,
        saltiness: 3,
        umami: 5,
        richness: 4,
        texture: 'Moale, untoasă, cu oase fine care se topesc',
        notes: 'Ori le iubești, ori le urăști. Cu lămâie și pâine prăjită cu usturoi devin serios de bune.'
      },
      stats: {
        taste: 55,
        satiety: 88,
        convenience: 96,
        versatility: 52
      },
      timing: {
        breakfast: 4,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Grăsimile omega-3 se absorb mai bine cu o masă — mănâncă-le cu pâine sau salată, nu singure în fugă.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'calcium-rich', 'b12', 'iron-rich', 'cheap-protein', 'budget', 'whole-food'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită cu usturoi', 'Lămâie', 'Ceapă roșie', 'Roșii', 'Muștar', 'Ardei iute'],
      tips: [
        'Mănâncă oasele — sunt sterilizate, moi, și îți dau ~315 mg calciu pe cutie, cât un iaurt mare.',
        'Sardinele sunt pește mic, cu viață scurtă: practic zero mercur. Poți mânca zilnic, spre deosebire de ton.',
        'Strivește-le cu furculița, adaugă muștar, lămâie și ceapă tocată: pastă de sardine în 90 de secunde, 22 g proteină.',
        'Cutia de 120 g are ~90 g pește. Restul e ulei — pe care merită să-l păstrezi dacă e ulei de măsline.'
      ],
      warnings: [
        'Purine ridicate — atenție dacă ai gută.',
        'Sare 1,2 g/100 g.'
      ],
      storage: 'Cămară. După deschidere, transferă în borcan cu uleiul propriu, frigider 2 zile.',
      shelfLife: '4–5 ani sigilat (se îmbunătățesc cu timpul, ca vinul)',
      dataConfidence: 'high',
      sources: ['Eticheta Nixe sardine în ulei de măsline', 'lidl.ro', 'USDA pentru micronutrienți']
    },

    {
      id: 'f-sardine-sos-tomat',
      name: 'Sardines in Tomato Sauce',
      nameRo: 'Sardine în sos tomat',
      brand: 'K-Classic (Kaufland) / Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🍅',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, cutii plate cu etichetă roșie',
          priceRon: 5.49,
          packGrams: 125,
          packLabel: 'cutie 125 g, se mănâncă integral cu sos',
          note: 'Sosul se consumă, deci nu ai pierdere la scurgere.'
        },
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Conserve pește',
          priceRon: 5.99,
          packGrams: 125,
          packLabel: 'cutie 125 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 4.99,
          packGrams: 125,
          packLabel: 'cutie 125 g',
          note: 'Cea mai ieftină variantă din Sibiu.'
        }
      ],
      sibiuNote: 'Sub 6 lei, cutia întreagă dă ~22 g proteină și 1,5 g omega-3. E cea mai ieftină sursă de omega-3 din orice magazin din Sibiu.',
      per100g: {
        kcal: 165,
        protein: 18,
        carbs: 2.5,
        sugars: 1.8,
        fat: 9,
        satFat: 2.4,
        fiber: 0.5,
        salt: 1.1
      },
      micros: {
        calciumMg: 300,
        ironMg: 2.2,
        b12Ug: 8,
        vitDUg: 4.5,
        omega3Mg: 1200,
        potassiumMg: 380,
        cholesterolMg: 70
      },
      serving: {
        grams: 125,
        label: '1 cutie întreagă cu sos (125 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Se mănâncă tot, inclusiv sosul — nu se scurge nimic.'
      },
      taste: {
        profile: 'Peștos-acrișor, sosul de roșii domolește intensitatea sardinelor',
        intensity: 4,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Pește moale în sos gros, oase care se topesc',
        notes: 'Mai accesibil la gust decât sardinele în ulei. Bun punct de intrare dacă nu suporți peștele gras.'
      },
      stats: {
        taste: 60,
        satiety: 84,
        convenience: 96,
        versatility: 48
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Masă completă cu o felie de pâine — 22 g proteină pentru 5 lei.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'calcium-rich', 'b12', 'cheap-protein', 'budget', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine de secară', 'Mămăligă', 'Ceapă verde', 'Ardei iute', 'Ou fiert'],
      tips: [
        'Toarnă peste o mămăligă caldă și ai o masă românească de 25 de minute în 5 minute.',
        'Sosul conține licopen din roșii, care se absoarbe mai bine cu grăsimea din pește — combinație bună, nu întâmplătoare.',
        'Diferența față de sardinele în ulei: mai puține calorii (165 vs. 208), dar și mai puțină proteină pe 100 g, pentru că sosul e greutate în plus.'
      ],
      warnings: [
        'Purine ridicate — atenție la gută.'
      ],
      storage: 'Cămară. După deschidere, mută în recipient, frigider 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'lidl.ro', 'valori tipice sardine în sos tomat']
    },

    {
      id: 'f-sardine-fara-oase',
      name: 'Skinless Boneless Sardines in Oil',
      nameRo: 'Sardine fără piele și oase în ulei',
      brand: 'Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🐡',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Conserve pește, cutie mică plată',
          priceRon: 7.49,
          packGrams: 65,
          packLabel: 'cutie 90 g (65 g scurs)',
          note: 'Cutie mai mică decât sardinele obișnuite.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve pește',
          priceRon: 8.49,
          packGrams: 65,
          packLabel: 'cutie 90 g (65 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Varianta „pentru cei care nu suportă oasele". Merită doar dacă altfel nu ai mânca deloc sardine.',
      per100g: {
        kcal: 215,
        protein: 24,
        carbs: 0,
        sugars: 0,
        fat: 13,
        satFat: 2.8,
        fiber: 0,
        salt: 1.1
      },
      micros: {
        calciumMg: 60,
        ironMg: 1.5,
        b12Ug: 8,
        vitDUg: 4,
        omega3Mg: 1300,
        potassiumMg: 350,
        cholesterolMg: 75
      },
      serving: {
        grams: 65,
        label: '1 cutie scursă (65 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 90 g → ~65 g scurs.'
      },
      taste: {
        profile: 'Mai blând decât sardinele întregi, fără crocantul oaselor, gust mai curat',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 4,
        richness: 4,
        texture: 'Fileuri fine, moi, uniforme',
        notes: 'Mai elegante, dar ai pierdut exact partea cea mai valoroasă: calciul din oase.'
      },
      stats: {
        taste: 66,
        satiety: 78,
        convenience: 98,
        versatility: 58
      },
      timing: {
        breakfast: 4,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 4,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Cutie mică — doar ~16 g proteină. Combină cu ou sau brânză.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'b12', 'mid-price', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită', 'Unt', 'Lămâie', 'Mărar', 'Ridichi'],
      tips: [
        'Fără oase înseamnă fără calciu: 60 mg în loc de 350 mg la 100 g. Diferența e uriașă.',
        'Cutia de 90 g conține doar 65 g pește — verifică pe etichetă „greutate netă scursă".',
        'Dacă vrei sardine „ușor de mâncat" dar cu calciu, ia sardinele în sos tomat: oasele sunt și mai moi acolo.'
      ],
      warnings: [
        'Nu are avantajul de calciu al sardinelor normale — nu o considera echivalentă.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'valori tipice sardine dezosate în ulei, scurse']
    },

    {
      id: 'f-macrou-file-natur',
      name: 'Mackerel Fillets, Plain Canned',
      nameRo: 'File de macrou natur la conservă',
      brand: 'Ocean Fish / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, cutii ovale',
          priceRon: 8.99,
          packGrams: 120,
          packLabel: 'cutie 170 g (120 g scurs)',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Conserve, bax de 6',
          priceRon: 47.9,
          packGrams: 720,
          packLabel: '6 × 170 g (6 × 120 g scurs)',
          note: 'Cel mai bun preț pe gram — necesită card Selgros.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve pește',
          priceRon: 9.99,
          packGrams: 120,
          packLabel: 'cutie 170 g (120 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Macroul e regele omega-3 la conservă și e mult mai ieftin decât somonul. Kaufland Șos. Alba Iulia are cel mai bun sortiment.',
      per100g: {
        kcal: 200,
        protein: 21,
        carbs: 0,
        sugars: 0,
        fat: 13,
        satFat: 3,
        fiber: 0,
        salt: 1
      },
      micros: {
        calciumMg: 40,
        ironMg: 1.2,
        b12Ug: 8,
        vitDUg: 12,
        omega3Mg: 2500,
        potassiumMg: 420,
        cholesterolMg: 70,
        zincMg: 0.8
      },
      serving: {
        grams: 120,
        label: '1 cutie scursă (120 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Cutie 170 g → ~120 g scurs.'
      },
      taste: {
        profile: 'Puternic, gras, ușor dulceag, cu acel gust „albastru" caracteristic peștelui gras',
        intensity: 5,
        sweetness: 1,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Fileuri mari, cărnoase, care se desfac în lamele grase',
        notes: 'Mult mai intens decât tonul. Cu ceapă roșie și oțet devine remarcabil.'
      },
      stats: {
        taste: 58,
        satiety: 90,
        convenience: 96,
        versatility: 50
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'O cutie acoperă necesarul de omega-3 și vitamina D pe 2–3 zile.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'b12', 'cheap-protein', 'budget', 'whole-food'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ceapă roșie', 'Oțet balsamic', 'Mămăligă', 'Cartofi fierți', 'Hrean', 'Pâine neagră'],
      tips: [
        'Macroul are de 15 ori mai mult omega-3 decât tonul la conservă, la același preț. Dacă iei conserve pentru sănătate, ia macrou.',
        'Fiind pește gras dar cu viață scurtă, mercurul e foarte scăzut — poți mânca de 3–4 ori pe săptămână fără grijă.',
        'Amestecă cu iaurt grecesc, muștar și hrean: pastă de macrou care ține 3 zile la frigider.'
      ],
      warnings: [
        'Purine ridicate — atenție la gută.',
        'Foarte gras: 200 kcal/100 g, ușor de supra-consumat.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['oceanfish.ro', 'kaufland.ro', 'USDA macrou Atlantic conservat']
    },

    {
      id: 'f-macrou-sos-tomat',
      name: 'Mackerel Fillets in Tomato Sauce',
      nameRo: 'File de macrou în sos tomat',
      brand: 'Ocean Fish / Năvodul Plin',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește, etichetă roșie',
          priceRon: 6.99,
          packGrams: 170,
          packLabel: 'cutie 170 g, se mănâncă integral',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 7.49,
          packGrams: 170,
          packLabel: 'cutie 170 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 6.49,
          packGrams: 170,
          packLabel: 'cutie 170 g',
          note: ''
        }
      ],
      sibiuNote: 'Clasic românesc de cămară. La 7 lei cutia, e mâncare de urgență cu 26 g proteină și 3 g omega-3.',
      per100g: {
        kcal: 155,
        protein: 15.5,
        carbs: 3.5,
        sugars: 2.2,
        fat: 9,
        satFat: 2.2,
        fiber: 0.5,
        salt: 1
      },
      micros: {
        calciumMg: 60,
        ironMg: 1.4,
        b12Ug: 6,
        vitDUg: 9,
        omega3Mg: 1800,
        potassiumMg: 380,
        cholesterolMg: 55
      },
      serving: {
        grams: 170,
        label: '1 cutie întreagă cu sos (170 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Se mănâncă tot.'
      },
      taste: {
        profile: 'Sos de roșii dulce-acrișor peste pește gras, gust de conservă românească de altădată',
        intensity: 4,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Fileuri moi în sos gros, uneori sfărâmicioase',
        notes: 'Nostalgie pură pentru mulți români. Bun rece direct din cutie, mai bun încălzit cu ceapă.'
      },
      stats: {
        taste: 62,
        satiety: 84,
        convenience: 96,
        versatility: 55
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Cutia întreagă = ~26 g proteină și 3 g omega-3. Masă completă cu mămăligă.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'b12', 'cheap-protein', 'budget', 'romanian-classic', 'winter'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Ceapă roșie', 'Pâine de casă', 'Murături', 'Ardei iute'],
      tips: [
        'Încălzește într-o tigaie cu ceapă călită și un vârf de boia: devine mâncare de duminică din 7 lei.',
        'Studiile APC din România au arătat că unele mărci ieftine au sub 50% pește în cutie — citește procentul de pește de pe etichetă, ideal peste 60%.',
        'Sosul de roșii diluează proteina la 15,5 g/100 g, dar cutia e mare (170 g), deci pe porție tot iese bine.'
      ],
      warnings: [
        'Verifică procentul de pește pe etichetă — variază mult între mărci.',
        'Purine ridicate.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['oceanfish.ro', 'shop.scandia.ro', 'apc-romania.ro studiu conserve macrou']
    },

    {
      id: 'f-macrou-afumat-ulei',
      name: 'Smoked Mackerel Fillets in Oil',
      nameRo: 'File de macrou afumat în ulei',
      brand: 'Nixe (Lidl) / Ocean Fish',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '💨',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Conserve pește, cutie ovală cu etichetă maro',
          priceRon: 9.99,
          packGrams: 110,
          packLabel: 'cutie 160 g (110 g scurs)',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Conserve pește',
          priceRon: 10.99,
          packGrams: 110,
          packLabel: 'cutie 160 g (110 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai gustoasă conservă de pește din raft, dar și cea mai sărată. Nu o mânca zilnic.',
      per100g: {
        kcal: 245,
        protein: 20,
        carbs: 0,
        sugars: 0,
        fat: 18.5,
        satFat: 4,
        fiber: 0,
        salt: 1.4
      },
      micros: {
        b12Ug: 7,
        vitDUg: 10,
        omega3Mg: 2300,
        potassiumMg: 400,
        cholesterolMg: 75,
        ironMg: 1.1
      },
      serving: {
        grams: 110,
        label: '1 cutie scursă (110 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~110 g scurs.'
      },
      taste: {
        profile: 'Afumat puternic, gras, sărat, umami masiv — cel mai „adult" gust din raft',
        intensity: 5,
        sweetness: 0,
        saltiness: 4,
        umami: 5,
        richness: 5,
        texture: 'Fileuri ferme, untoase, cu piele afumată elastică',
        notes: 'Cea mai bună conservă de pește pentru cine îi place gustul intens. Cu hrean și pâine neagră e desăvârșită.'
      },
      stats: {
        taste: 76,
        satiety: 88,
        convenience: 96,
        versatility: 55
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Bogat și sărat — nu îl mânca înainte de culcare dacă ești sensibil la retenție de apă.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'omega3', 'b12', 'high-sodium', 'mid-price', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine neagră', 'Hrean', 'Ceapă roșie', 'Cartofi fierți', 'Sfeclă roșie', 'Iaurt grecesc'],
      tips: [
        'Amestecă cu brânză proaspătă și hrean: pate de macrou afumat cu 18 g proteină la 100 g, mult mai bun decât pateul din comerț.',
        'Afumarea adaugă sare — 1,4 g/100 g. O cutie întreagă îți dă 1,5 g de sare.',
        'Uleiul din cutie e afumat și aromat — bun pentru un dressing de salată de cartofi.'
      ],
      warnings: [
        'Sodiu ridicat — atenție dacă ai hipertensiune.',
        'Afumatul, în special cel tradițional, aduce urme de hidrocarburi policiclice; nu e o problemă ocazional, dar nu zilnic.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'valori tipice macrou afumat în ulei, scurs']
    },

    {
      id: 'f-hering-file-sos',
      name: 'Herring Fillets in Sauce',
      nameRo: 'File de hering în sos (smântână / muștar)',
      brand: 'Nixe (Lidl) / Rügen Fisch',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🫙',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Frigider delicatese sau raft conserve, borcan de sticlă',
          priceRon: 14.99,
          packGrams: 250,
          packLabel: 'borcan 250 g, se mănâncă cu sos',
          note: 'Apare des în săptămânile tematice germane.'
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Raft delicatese refrigerate',
          priceRon: 16.99,
          packGrams: 250,
          packLabel: 'borcan 250 g',
          note: ''
        }
      ],
      sibiuNote: 'Se găsește mai ales la Lidl, în valuri, legat de săptămânile germane. Sibiul, cu istoria lui săsească, are cerere pentru el.',
      per100g: {
        kcal: 210,
        protein: 12,
        carbs: 5,
        sugars: 4,
        fat: 16,
        satFat: 3.5,
        fiber: 0.3,
        salt: 1.6
      },
      micros: {
        b12Ug: 6,
        vitDUg: 8,
        omega3Mg: 1500,
        potassiumMg: 250,
        cholesterolMg: 60
      },
      serving: {
        grams: 125,
        label: 'jumătate de borcan (125 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Sosul e ~35% din masa borcanului.'
      },
      taste: {
        profile: 'Acrișor-cremos, hering marinat cu sos gras de smântână sau muștar, ceapă crocantă',
        intensity: 4,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 5,
        texture: 'Bucăți moi de pește marinat în sos gros',
        notes: 'Delicios pe pâine cu unt. Dar sosul e maioneză/smântână, deci grăsimea urcă rapid.'
      },
      stats: {
        taste: 72,
        satiety: 70,
        convenience: 96,
        versatility: 38
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Densitate proteică joasă pentru un pește gras — sosul e de vină.',
      tags: ['ready-to-eat', 'omega3', 'b12', 'high-sodium', 'processed', 'mid-price', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine neagră cu unt', 'Cartofi fierți', 'Ceapă roșie', 'Mere verzi', 'Sfeclă'],
      tips: [
        'Doar 12 g proteină la 100 g — sosul cântărește. Dacă vrei heringul „curat", caută file de hering în ulei sau marinat simplu.',
        'Verifică eticheta pentru lactoză (sos de smântână) și gluten (unele sosuri conțin amidon de grâu).',
        'Se ține doar 3–4 zile după deschidere, spre deosebire de conservele metalice.'
      ],
      warnings: [
        'Poate conține lactoză și gluten în funcție de sos.',
        'Sare 1,6 g/100 g — ridicat.'
      ],
      storage: 'Frigider, chiar și nedeschis la unele variante. După deschidere, maximum 4 zile.',
      shelfLife: '3–6 luni sigilat, refrigerat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'valori tipice hering în sos de smântână']
    },

    {
      id: 'f-sprot-afumat-ulei',
      name: 'Smoked Sprats in Oil',
      nameRo: 'Șprot afumat în ulei',
      brand: 'Riga Gold / marcă baltică',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Conserve pește, cutii mici plate cu etichetă aurie',
          priceRon: 8.99,
          packGrams: 110,
          packLabel: 'cutie 160 g (110 g scurs)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Conserve pește, zona est-europeană',
          priceRon: 7.99,
          packGrams: 110,
          packLabel: 'cutie 160 g (110 g scurs)',
          note: 'Card Metro necesar.'
        }
      ],
      sibiuNote: 'Se găsește constant la Kaufland. Pește foarte mic, deci fără mercur, cu oase moi comestibile.',
      per100g: {
        kcal: 265,
        protein: 18,
        carbs: 0,
        sugars: 0,
        fat: 21,
        satFat: 4.5,
        fiber: 0,
        salt: 1.3
      },
      micros: {
        calciumMg: 250,
        ironMg: 2,
        b12Ug: 10,
        vitDUg: 6,
        omega3Mg: 1500,
        potassiumMg: 320,
        cholesterolMg: 85
      },
      serving: {
        grams: 110,
        label: '1 cutie scursă (110 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 160 g → ~110 g scurs.'
      },
      taste: {
        profile: 'Afumat intens, sărat, gras, gust concentrat de pește mic afumat',
        intensity: 5,
        sweetness: 0,
        saltiness: 4,
        umami: 5,
        richness: 5,
        texture: 'Peștișori întregi, moi, cu piele aurie și oase invizibile',
        notes: 'Pe pâine cu unt și ou fiert e un clasic baltic. Foarte gras — o cutie are ~290 kcal.'
      },
      stats: {
        taste: 68,
        satiety: 82,
        convenience: 96,
        versatility: 42
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Densitate calorică mare — bun la bulk, prost la cut.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'omega3', 'calcium-rich', 'b12', 'high-kcal', 'high-sodium', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine neagră cu unt', 'Ou fiert', 'Castraveți murați', 'Ceapă verde', 'Lămâie'],
      tips: [
        'Raport proteină/grăsime mai slab decât la sardine (18/21 vs. 24/12) — dacă urmărești macro-uri, ia sardine.',
        'Oasele sunt complet comestibile și aduc ~275 mg calciu pe cutie.',
        'Scurge-le pe un șervețel 2 minute înainte de servit — elimini 30–40 kcal de ulei fără să pierzi gust.'
      ],
      warnings: [
        'Foarte caloric: o cutie scursă are ~290 kcal.',
        'Purine ridicate.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'valori tipice șprot afumat în ulei, scurs']
    },

    {
      id: 'f-ansoa-file-ulei',
      name: 'Anchovy Fillets in Oil',
      nameRo: 'Fileuri de anșoa (hamsii) în ulei',
      brand: 'Rio Mare / marcă italiană',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🧂',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Raft produse italiene sau conserve pește, cutie foarte mică',
          priceRon: 12.99,
          packGrams: 30,
          packLabel: 'cutie 50 g (30 g scurs)',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Conserve pește, lângă măsline',
          priceRon: 11.99,
          packGrams: 30,
          packLabel: 'cutie 50 g (30 g scurs)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'always',
          aisle: 'Zona horeca, borcane mari',
          priceRon: 44.9,
          packGrams: 300,
          packLabel: 'borcan 500 g (300 g scurs)',
          note: 'Doar dacă gătești mult — se ține luni întregi la frigider.'
        }
      ],
      sibiuNote: 'Nu e o sursă de proteină, e un condiment. Dar e cel mai puternic amplificator de umami pe care îl poți cumpăra din Sibiu.',
      per100g: {
        kcal: 210,
        protein: 25,
        carbs: 0,
        sugars: 0,
        fat: 12,
        satFat: 2.5,
        fiber: 0,
        salt: 8
      },
      micros: {
        calciumMg: 230,
        ironMg: 3,
        b12Ug: 9,
        omega3Mg: 1500,
        potassiumMg: 300,
        cholesterolMg: 85
      },
      serving: {
        grams: 10,
        label: '2–3 fileuri (10 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Cutie 50 g → ~30 g fileuri scurse.'
      },
      taste: {
        profile: 'Extrem de sărat, umami pur, gust de pește concentrat care se topește',
        intensity: 5,
        sweetness: 0,
        saltiness: 5,
        umami: 5,
        richness: 4,
        texture: 'Fileuri subțiri care se dizolvă la căldură',
        notes: 'Nu se mănâncă la lingură. Se topesc într-o tigaie cu usturoi și transformă orice sos.'
      },
      stats: {
        taste: 50,
        satiety: 30,
        convenience: 92,
        versatility: 70
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 1,
        lunch: 3,
        snack: 2,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Ingredient, nu masă. Se folosește 10–20 g o dată.',
      tags: ['ready-to-eat', 'shelf-stable', 'very-high-protein', 'protein-dense', 'omega3', 'high-sodium', 'imported', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Usturoi', 'Paste', 'Broccoli călit', 'Pizza', 'Sos Caesar', 'Roșii'],
      tips: [
        'Două fileuri topite în ulei cu usturoi transformă orice fel de legume gătite — costul: 1 leu.',
        '8 g sare la 100 g: o porție de 10 g îți dă 0,8 g de sare. Nu adăuga sare în plus în mâncare.',
        'Dacă ți se par prea sărate, ține-le 10 minute în lapte rece înainte de folosire — extrage sarea fără să piardă umami.'
      ],
      warnings: [
        'Conținut extrem de sodiu — nu e o sursă de proteină, e un condiment.',
        'Alergen: pește. Adesea folosit „invizibil" în sosuri (Worcestershire, Caesar).'
      ],
      storage: 'Cămară până la deschidere. După, la frigider acoperite cu ulei, 2–3 săptămâni.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['carrefour.ro', 'USDA anchovy canned in oil']
    },

    {
      id: 'f-somon-roz-conserva',
      name: 'Canned Pink Salmon with Bones',
      nameRo: 'Somon roz la conservă, cu oase',
      brand: 'marcă importată (Selgros / Metro)',
      category: 'fish-seafood',
      subcategory: 'Conserve de pește gras',
      emoji: '🍥',
      unit: 'g',
      stores: [
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Conserve pește, cutie rotundă mare',
          priceRon: 24.99,
          packGrams: 155,
          packLabel: 'cutie 213 g (155 g scurs)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'occasional',
          aisle: 'Conserve pește import',
          priceRon: 26.9,
          packGrams: 155,
          packLabel: 'cutie 213 g (155 g scurs)',
          note: ''
        },
        {
          name: 'Online RO',
          availability: 'online',
          aisle: '—',
          priceRon: 27.9,
          packGrams: 155,
          packLabel: 'cutie 213 g (155 g scurs)',
          note: 'Magazine de delicatese online, ex. Fishtodoor.'
        }
      ],
      sibiuNote: 'Greu de găsit la hipermarketurile clasice din Sibiu; Selgros Șelimbăr e cea mai sigură variantă.',
      per100g: {
        kcal: 145,
        protein: 21.5,
        carbs: 0,
        sugars: 0,
        fat: 6.5,
        satFat: 1.5,
        fiber: 0,
        salt: 1
      },
      micros: {
        calciumMg: 210,
        ironMg: 0.8,
        b12Ug: 4.4,
        vitDUg: 12,
        omega3Mg: 1300,
        potassiumMg: 320,
        cholesterolMg: 60
      },
      serving: {
        grams: 155,
        label: '1 cutie scursă (155 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Cutie 213 g → ~155 g scurs, cu tot cu piele și oase moi.'
      },
      taste: {
        profile: 'Mai blând decât somonul afumat, ușor sărat, cu gust de somon fiert',
        intensity: 3,
        sweetness: 0,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Bucăți mari care se sfărâmă, cu piele și vertebre moi',
        notes: 'Textura piele-oase deranjează pe mulți. Se pot scoate, dar pierzi calciul.'
      },
      stats: {
        taste: 56,
        satiety: 86,
        convenience: 94,
        versatility: 70
      },
      timing: {
        breakfast: 3,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'O cutie dă 33 g proteină, 2 g omega-3 și 325 mg calciu — una dintre cele mai complete conserve.',
      tags: ['ready-to-eat', 'shelf-stable', 'high-protein', 'protein-dense', 'omega3', 'calcium-rich', 'b12', 'mid-price', 'imported', 'whole-food'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ceapă roșie', 'Mărar', 'Lămâie', 'Cartofi', 'Iaurt grecesc', 'Pâine integrală'],
      tips: [
        'Somonul roz sălbatic de Pacific la conservă e de 4–5 ori mai ieftin pe gram de proteină decât somonul afumat.',
        'Strivește oasele cu furculița în amestec — nu se simt și îți dau ~325 mg calciu pe cutie.',
        'Perfect pentru chiftele de somon: 1 cutie + 1 ou + 3 linguri de ovăz = 4 chiftele cu 12 g proteină fiecare.'
      ],
      warnings: [
        'Nu îl confunda cu „somon" crescut la conservă — cel sălbatic de Pacific are mai puțină grăsime și mai puțini contaminanți.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '3–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['selgros.ro', 'USDA pink salmon canned with bone']
    },

    {
      id: 'f-scrumbie-afumata',
      name: 'Smoked Danube Shad',
      nameRo: 'Scrumbie de Dunăre afumată',
      brand: 'producători locali (Pescărie / Piața Cibin)',
      category: 'fish-seafood',
      subcategory: 'Pește afumat',
      emoji: '🔥',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'seasonal',
          aisle: 'Hala de pește, tarabele cu afumături',
          priceRon: 44.5,
          packGrams: 500,
          packLabel: '~500 g, 1–2 bucăți',
          note: 'Primăvara (aprilie–iunie) e sezonul real. Restul anului, congelată.'
        },
        {
          name: 'Pescărie',
          availability: 'seasonal',
          aisle: 'Vitrina de afumături',
          priceRon: 49,
          packGrams: 500,
          packLabel: '~500 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'occasional',
          aisle: 'Vitrina de pește afumat',
          priceRon: 52,
          packGrams: 500,
          packLabel: 'ambalat vidat ~500 g',
          note: ''
        }
      ],
      sibiuNote: 'Sibiul e departe de Dunăre, deci scrumbia ajunge aici afumată sau congelată, la preț mai mare decât la Tulcea. În Piața Cibin apare în aprilie–mai.',
      per100g: {
        kcal: 245,
        protein: 21,
        carbs: 0,
        sugars: 0,
        fat: 18,
        satFat: 4,
        fiber: 0,
        salt: 3.5
      },
      micros: {
        b12Ug: 8,
        vitDUg: 14,
        omega3Mg: 2600,
        potassiumMg: 380,
        cholesterolMg: 75,
        ironMg: 1.3
      },
      serving: {
        grams: 120,
        label: '1 porție (120 g, ~1/4 pește)'
      },
      effort: 0,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['cuțit'],
        steps: [
          'Scoate din ambalaj și lasă 15 minute la temperatura camerei.',
          'Îndepărtează pielea și oasele mari.',
          'Servește cu ceapă roșie și lămâie.'
        ],
        yieldNote: '1 kg pește afumat întreg → ~600 g carne fără oase și piele.'
      },
      taste: {
        profile: 'Afumat profund, foarte gras, sărat, gust intens de pește de apă dulce',
        intensity: 5,
        sweetness: 0,
        saltiness: 4,
        umami: 5,
        richness: 5,
        texture: 'Carne grasă, densă, se desface în felii lucioase',
        notes: 'Una dintre cele mai bune mâncăruri românești. Dar plină de oase mici — necesită răbdare.'
      },
      stats: {
        taste: 82,
        satiety: 86,
        convenience: 60,
        versatility: 40
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 5,
        beforeBed: 1
      },
      timingNote: 'Foarte sărată și grasă — o mâncare de sărbătoare, nu de rutină.',
      tags: ['ready-to-eat', 'high-protein', 'omega3', 'b12', 'high-sodium', 'high-kcal', 'romanian-classic', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ceapă roșie', 'Lămâie', 'Pâine de casă', 'Mămăligă', 'Vin alb sec', 'Hrean'],
      tips: [
        'Scrumbia de Dunăre are printre cele mai mari conținuturi de omega-3 din peștii disponibili în România — peste somonul de crescătorie.',
        '3,5 g sare la 100 g: o porție de 120 g înseamnă 4 g de sare, aproape norma zilnică. Nu mânca mai mult de o porție.',
        'Cumpără primăvara, când e proaspăt afumată. Iarna găsești doar congelată-decongelată, cu textura compromisă.'
      ],
      warnings: [
        'Sodiu foarte ridicat (3,5 g sare/100 g).',
        'Multe oase mici — nu e pentru copii mici.',
        'Sezon strict — evită „scrumbia" vândută vara la preț de sezon.'
      ],
      storage: 'Frigider 2–6 °C, ambalată în hârtie apoi pungă. 5–7 zile.',
      shelfLife: '~1 săptămână la frigider, 3 luni congelată',
      dataConfidence: 'low',
      sources: ['Piața Cibin, observație directă', 'valori tipice Alosa immaculata afumată']
    },

    {
      id: 'f-somon-file-proaspat',
      name: 'Fresh Atlantic Salmon Fillet',
      nameRo: 'File de somon proaspăt',
      brand: 'generic (ghișeu pește)',
      category: 'fish-seafood',
      subcategory: 'Somon',
      emoji: '🍣',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Ghișeul de pește cu gheață, în fața raionului de carne',
          priceRon: 35.7,
          packGrams: 300,
          packLabel: 'porție ~300 g, la 119 lei/kg',
          note: 'Cel mai bun ghișeu de pește proaspăt din Sibiu.'
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Vitrina de pește proaspăt, se taie la comandă',
          priceRon: 32.9,
          packGrams: 300,
          packLabel: 'porție ~300 g, la ~110 lei/kg',
          note: 'File întreg mai ieftin pe kg dacă iei 1,5–2 kg.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Vitrină pește refrigerat, caserole ambalate',
          priceRon: 39.9,
          packGrams: 300,
          packLabel: 'caserolă 2 × 150 g',
          note: 'Ambalat, nu la ghișeu.'
        }
      ],
      sibiuNote: 'Sibiul e la 300 km de mare, deci „proaspăt" înseamnă livrat cu camionul refrigerat din Norvegia via București. Kaufland Șos. Alba Iulia primește marfă marți și vineri — atunci e cel mai bun.',
      per100g: {
        kcal: 208,
        protein: 20,
        carbs: 0,
        sugars: 0,
        fat: 13.5,
        satFat: 3,
        fiber: 0,
        salt: 0.15
      },
      micros: {
        b12Ug: 3.2,
        vitDUg: 10,
        omega3Mg: 2300,
        potassiumMg: 380,
        cholesterolMg: 55
      },
      serving: {
        grams: 150,
        label: '1 file mediu (150 g)'
      },
      effort: 2,
      timeMin: 14,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă', 'șervețele de bucătărie'],
        steps: [
          'Scoate peștele din frigider cu 15 minute înainte și usucă-l bine cu șervețel.',
          'Sărează pe ambele părți.',
          'Încinge tigaia la foc mediu-mare, fără ulei dacă e tigaie antiaderentă.',
          'Pune fileul cu pielea în jos și apasă 10 secunde cu spatula.',
          'Prăjește 5–6 minute pe piele, fără să miști.',
          'Întoarce și mai lasă 2 minute. Scoate când centrul e încă ușor translucid.'
        ],
        yieldNote: '150 g file crud → ~120 g gătit.'
      },
      taste: {
        profile: 'Bogat, untos, ușor dulceag, cu pielea crocantă gust de bacon marin',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 5,
        texture: 'Lamele mari, moi, care se desfac; pielea devine crocantă',
        notes: 'Cel mai ușor pește de gătit bine. Aproape imposibil de stricat, în afară de a-l face prea mult.'
      },
      stats: {
        taste: 90,
        satiety: 88,
        convenience: 55,
        versatility: 78
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Masa de seară ideală: grăsimile omega-3 și proteina te țin sătul până dimineața.',
      tags: ['high-protein', 'omega3', 'b12', 'whole-food', 'premium', 'high-kcal', 'post-workout'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Mărar', 'Cartofi noi', 'Sparanghel', 'Sos de iaurt cu usturoi', 'Orez basmati'],
      tips: [
        'La 119 lei/kg și 20 g proteină/100 g, ieși cu ~5,95 lei per 10 g proteină — de 4 ori mai scump decât pieptul de pui. Somonul îl mănânci pentru omega-3, nu pentru proteină ieftină.',
        'Apasă cu degetul pe file la ghișeu: dacă rămâne urma, peștele nu e proaspăt.',
        'Nu-l face prea mult. La 52 °C în centru e perfect; la 65 °C e uscat și alb-lăptos pe margini.',
        'Cere la ghișeu bucata din partea groasă (loin), nu coada — se gătește uniform.'
      ],
      warnings: [
        'Somonul de crescătorie are mai multă grăsime și un profil de omega-3 ușor mai slab decât cel sălbatic, dar rămâne o sursă excelentă.',
        'Preț mare per gram de proteină — nu e o strategie de bulking accesibilă.'
      ],
      storage: 'Frigider 0–2 °C, pe gheață dacă poți. Se gătește în maximum 24 de ore de la cumpărare.',
      shelfLife: '1–2 zile la frigider, 3 luni congelat',
      dataConfidence: 'high',
      sources: ['Ghișeu pește Kaufland Sibiu', 'USDA Atlantic salmon farmed raw']
    },

    {
      id: 'f-somon-file-congelat',
      name: 'Frozen Salmon Fillet Portions',
      nameRo: 'File de somon congelat, porții',
      brand: 'Nixe (Lidl) / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Somon',
      emoji: '🧊',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator pește, cutie de carton cu 2 porții vidate',
          priceRon: 32.99,
          packGrams: 250,
          packLabel: 'cutie 250 g (2 × 125 g)',
          note: 'Cel mai constant preț pe somon din Sibiu.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește',
          priceRon: 34.99,
          packGrams: 250,
          packLabel: 'cutie 250 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare, pungi mari de 1 kg',
          priceRon: 109,
          packGrams: 1000,
          packLabel: 'pungă 1 kg, porții individuale',
          note: 'Cel mai bun preț pe kg dacă ai congelator.'
        }
      ],
      sibiuNote: 'Pentru cine gătește somon o dată pe săptămână, varianta congelată e mai practică și mai ieftină decât ghișeul. Diferența de gust e mică dacă îl dezgheți lent la frigider.',
      per100g: {
        kcal: 190,
        protein: 19.5,
        carbs: 0,
        sugars: 0,
        fat: 12.5,
        satFat: 2.8,
        fiber: 0,
        salt: 0.2
      },
      micros: {
        b12Ug: 3,
        vitDUg: 9,
        omega3Mg: 2000,
        potassiumMg: 360,
        cholesterolMg: 52
      },
      serving: {
        grams: 125,
        label: '1 porție (125 g)'
      },
      effort: 2,
      timeMin: 16,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Dezgheață peste noapte la frigider, în ambalaj, pe o farfurie.',
          'Usucă bine cu șervețel — peștele congelat lasă multă apă.',
          'Sărează și piperează.',
          'Prăjește 5 minute pe piele la foc mediu-mare, apoi 2 minute pe partea cealaltă.'
        ],
        yieldNote: '125 g congelat → ~100 g gătit (pierde apă din glazură).'
      },
      taste: {
        profile: 'Aproape identic cu cel proaspăt dacă e dezghețat corect, ușor mai puțin ferm',
        intensity: 4,
        sweetness: 1,
        saltiness: 1,
        umami: 4,
        richness: 5,
        texture: 'Puțin mai moale decât proaspătul; dacă îl dezgheți la microunde devine făinos',
        notes: 'Diferența față de proaspăt e vizibilă doar dacă îl mănânci lângă cel proaspăt.'
      },
      stats: {
        taste: 80,
        satiety: 88,
        convenience: 68,
        versatility: 78
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Trebuie planificat cu o zi înainte pentru dezghețare — nu e mâncare de impuls.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'omega3', 'b12', 'meal-prep', 'mid-price', 'batch-cook'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Broccoli', 'Cartofi dulci', 'Sos teriyaki', 'Orez', 'Mărar'],
      tips: [
        'Nu dezgheța la microunde. Peste noapte la frigider sau 30 de minute în apă rece, în punga sigilată.',
        'Verifică pe etichetă „glazură" — unele produse au 10–20% gheață inclusă în greutatea declarată, deci plătești apă.',
        'Congelat la -18 °C se ține 3 luni fără pierdere sensibilă de calitate. După 6 luni, grăsimile încep să râncezească.'
      ],
      warnings: [
        'Atenție la procentul de glazură (apă congelată) declarat pe ambalaj.',
        'Odată dezghețat, nu recongela.'
      ],
      storage: 'Congelator -18 °C. După dezghețare, frigider maximum 24 de ore.',
      shelfLife: '~12 luni congelat (calitate optimă 3–6 luni)',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'kaufland.ro', 'USDA Atlantic salmon farmed']
    },

    {
      id: 'f-somon-afumat-nautica',
      name: 'Sliced Smoked Salmon',
      nameRo: 'Somon de Atlantic afumat, feliat',
      brand: 'Nautica (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Pește afumat',
      emoji: '🎀',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Frigider delicatese, lângă mezeluri, pachete plate vidate',
          priceRon: 16.99,
          packGrams: 100,
          packLabel: 'pachet 100 g, ~5 felii',
          note: 'În decembrie apare la 12–13 lei.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Frigider delicatese',
          priceRon: 17.99,
          packGrams: 100,
          packLabel: 'pachet 100 g',
          note: 'Versiunea K-Classic.'
        }
      ],
      sibiuNote: 'E în toate Lidl-urile din Sibiu permanent. Prețul scade sensibil în perioada sărbătorilor, când merită să iei 3–4 pachete și să le congelezi.',
      per100g: {
        kcal: 168,
        protein: 19.6,
        carbs: 0,
        sugars: 0,
        fat: 10,
        satFat: 2,
        fiber: 0,
        salt: 3.5
      },
      micros: {
        b12Ug: 3,
        vitDUg: 8,
        omega3Mg: 1800,
        potassiumMg: 300,
        cholesterolMg: 45
      },
      serving: {
        grams: 50,
        label: '2–3 felii (50 g)'
      },
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
        profile: 'Sărat, afumat delicat, gras, se topește în gură',
        intensity: 4,
        sweetness: 0,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Felii subțiri, mătăsoase, ușor lipicioase',
        notes: 'Delicios, dar te oprești greu — și 100 g înseamnă 3,5 g de sare.'
      },
      stats: {
        taste: 88,
        satiety: 62,
        convenience: 98,
        versatility: 72
      },
      timing: {
        breakfast: 5,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Mic dejun de weekend cu ou și avocado — dar sarea îl face prost înainte de culcare.',
      tags: ['ready-to-eat', 'no-cook', 'high-protein', 'protein-dense', 'omega3', 'b12', 'high-sodium', 'premium', 'breakfast'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ouă jumări', 'Avocado', 'Cremă de brânză', 'Capere', 'Lămâie', 'Pâine de secară'],
      tips: [
        'La 170 lei/kg și 19,6 g proteină/100 g, e cea mai scumpă proteină din categorie — ~8,7 lei per 10 g proteină. Îl mănânci pentru gust.',
        'Se congelează foarte bine în ambalajul vidat. Ia la promoție și pune la congelator.',
        '3,5 g sare la 100 g — un pachet întreg e 70% din norma zilnică de sare. Porția realistă e 50 g.',
        'Peștele afumat la rece nu e gătit termic. Femeile însărcinate și persoanele imunodeprimate ar trebui să-l evite sau să-l gătească.'
      ],
      warnings: [
        'Sodiu foarte ridicat.',
        'Afumat la rece = risc de Listeria. Nerecomandat în sarcină.',
        'Preț per gram de proteină foarte prost.'
      ],
      storage: 'Frigider 0–4 °C. După deschidere, maximum 2 zile.',
      shelfLife: '~3 săptămâni sigilat, refrigerat',
      dataConfidence: 'high',
      sources: ['Eticheta Nautica somon afumat', 'lidl.ro']
    },

    {
      id: 'f-somon-afumat-k-classic',
      name: 'Norwegian Smoked Salmon, Large Pack',
      nameRo: 'Somon norvegian afumat, pachet mare',
      brand: 'K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Pește afumat',
      emoji: '🧡',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Frigider delicatese, pachet vidat de 200 g',
          priceRon: 29.99,
          packGrams: 200,
          packLabel: 'pachet 200 g',
          note: 'Preț pe gram mai bun decât pachetul de 100 g.'
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Frigider delicatese',
          priceRon: 33.99,
          packGrams: 200,
          packLabel: 'pachet 200 g',
          note: ''
        }
      ],
      sibiuNote: 'Dacă mănânci somon afumat regulat, pachetul de 200 g de la Kaufland e cea mai bună matematică din Sibiu.',
      per100g: {
        kcal: 175,
        protein: 19,
        carbs: 0,
        sugars: 0,
        fat: 11,
        satFat: 2.2,
        fiber: 0,
        salt: 3.2
      },
      micros: {
        b12Ug: 3,
        vitDUg: 8,
        omega3Mg: 1700,
        potassiumMg: 300,
        cholesterolMg: 48
      },
      serving: {
        grams: 50,
        label: '2–3 felii (50 g)'
      },
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
        profile: 'Afumat mai apăsat decât varianta Lidl, ușor mai gras',
        intensity: 4,
        sweetness: 0,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Felii mai groase, mai ferme',
        notes: 'Feliile mai groase se pretează mai bine la gătit (paste cu somon afumat) decât la platou.'
      },
      stats: {
        taste: 84,
        satiety: 64,
        convenience: 96,
        versatility: 74
      },
      timing: {
        breakfast: 5,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Pachetul de 200 g e 38 g proteină — o masă serioasă dacă îl împarți în două.',
      tags: ['ready-to-eat', 'no-cook', 'high-protein', 'protein-dense', 'omega3', 'b12', 'high-sodium', 'premium', 'breakfast', 'bulk-buy'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Paste cu smântână', 'Ouă', 'Cremă de brânză', 'Mărar', 'Ceapă roșie', 'Lămâie'],
      tips: [
        'Feliile de la capătul pachetului sunt mai subțiri și se rup — folosește-le în paste sau omletă, nu pe platou.',
        'După deschidere, pune feliile rămase între folii de hârtie de copt și înapoi în pungă — nu se lipesc.',
        'La 150 lei/kg e mai ieftin decât pachetul mic, dar tot de 4 ori mai scump ca proteină decât conserva de somon.'
      ],
      warnings: [
        'Sodiu ridicat (3,2 g sare/100 g).',
        'Afumat la rece — nerecomandat în sarcină.'
      ],
      storage: 'Frigider 0–4 °C. După deschidere, maximum 2 zile.',
      shelfLife: '~3 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta K-Classic somon norvegian afumat', 'kaufland.ro']
    },

    {
      id: 'f-somon-gravlax-saramura',
      name: 'Gravlax / Brined Salmon',
      nameRo: 'Somon în saramură cu mărar (gravlax)',
      brand: 'Deluxe (Lidl) / delicatese',
      category: 'fish-seafood',
      subcategory: 'Pește afumat',
      emoji: '🌿',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'seasonal',
          aisle: 'Frigider delicatese, gama Deluxe, mai ales în decembrie',
          priceRon: 22.99,
          packGrams: 100,
          packLabel: 'pachet 100 g',
          note: 'Apare la sărbători și de Paște.'
        },
        {
          name: 'Selgros',
          availability: 'occasional',
          aisle: 'Vitrina delicatese pește',
          priceRon: 25.9,
          packGrams: 100,
          packLabel: 'pachet 100 g',
          note: ''
        }
      ],
      sibiuNote: 'Produs de sezon. Îl faci mult mai ieftin acasă: 400 g file de somon proaspăt + sare + zahăr + mărar, 48 de ore la frigider.',
      per100g: {
        kcal: 190,
        protein: 20,
        carbs: 2,
        sugars: 2,
        fat: 11.5,
        satFat: 2.3,
        fiber: 0,
        salt: 3
      },
      micros: {
        b12Ug: 3,
        vitDUg: 9,
        omega3Mg: 1900,
        potassiumMg: 320,
        cholesterolMg: 50
      },
      serving: {
        grams: 50,
        label: '2–3 felii (50 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Dacă îl faci acasă: 400 g somon crud → ~340 g gravlax (pierde apă).'
      },
      taste: {
        profile: 'Nefumat, dulce-sărat, cu aromă puternică de mărar și uneori sfeclă sau gin',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 3,
        richness: 5,
        texture: 'Mai ferm decât somonul afumat, se taie curat',
        notes: 'Mai delicat decât afumatul — se simte mai mult peștele. Cu sos de muștar și mărar e superb.'
      },
      stats: {
        taste: 86,
        satiety: 64,
        convenience: 94,
        versatility: 60
      },
      timing: {
        breakfast: 5,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Mâncare de sărbătoare — nu construi macro-uri pe ea.',
      tags: ['ready-to-eat', 'no-cook', 'high-protein', 'protein-dense', 'omega3', 'high-sodium', 'premium', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Sos de muștar cu miere', 'Pâine de secară', 'Cartofi fierți', 'Sfeclă', 'Ouă fierte'],
      tips: [
        'Rețeta de casă: 3 părți sare la 2 părți zahăr, acoperi fileul, pui greutate deasupra, 48 de ore la frigider, întorci o dată. Costă jumătate.',
        'Gravlaxul nu e afumat, deci nu are hidrocarburi din fum — dar tot e pește crud sărat, cu aceleași riscuri de Listeria.',
        'Se taie cu cuțit lung, subțire, în unghi ascuțit față de file, ca să obții felii mari.'
      ],
      warnings: [
        'Pește crud sărat — nerecomandat în sarcină și pentru imunodeprimați.',
        'Sodiu ridicat.'
      ],
      storage: 'Frigider 0–4 °C. Deschis, maximum 3 zile.',
      shelfLife: '~2 săptămâni sigilat',
      dataConfidence: 'low',
      sources: ['lidl.ro gama Deluxe', 'valori tipice gravlax']
    },

    {
      id: 'f-pastrav-intreg-proaspat',
      name: 'Fresh Whole Rainbow Trout',
      nameRo: 'Păstrăv curcubeu întreg, proaspăt',
      brand: 'păstrăvării locale (Mărginimea Sibiului)',
      category: 'fish-seafood',
      subcategory: 'Păstrăv',
      emoji: '🎣',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'usual',
          aisle: 'Hala de pește, bazinele cu apă / lădițe cu gheață',
          priceRon: 39,
          packGrams: 1000,
          packLabel: '1 kg, 3–4 pești eviscerați',
          note: 'Cel mai proaspăt păstrăv din oraș, adus de la păstrăvăriile din zonă.'
        },
        {
          name: 'Pescărie',
          availability: 'always',
          aisle: 'Vitrina cu gheață',
          priceRon: 45,
          packGrams: 1000,
          packLabel: '1 kg eviscerat',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Ghișeul de pește',
          priceRon: 49.9,
          packGrams: 1000,
          packLabel: '1 kg, calibru 250–300 g/buc',
          note: 'Uneori viu în bazin.'
        }
      ],
      sibiuNote: 'Acesta e avantajul local al Sibiului. Păstrăvăriile din Gura Râului, Sadu, Săliște și Rășinari alimentează Piața Cibin. Mergi sâmbătă dimineața devreme — la 9 s-a terminat ce era bun.',
      per100g: {
        kcal: 130,
        protein: 20,
        carbs: 0,
        sugars: 0,
        fat: 5.5,
        satFat: 1.2,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 4.4,
        vitDUg: 12,
        omega3Mg: 900,
        potassiumMg: 400,
        cholesterolMg: 59,
        ironMg: 0.3
      },
      serving: {
        grams: 250,
        label: '1 păstrăv întreg (250 g, ~140 g carne)'
      },
      effort: 2,
      timeMin: 22,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie mare', 'spatulă', 'șervețele'],
        steps: [
          'Spală păstrăvul, usucă-l foarte bine, inclusiv în interior.',
          'Sărează generos înăuntru și pe piele; pune în burtă felii de lămâie și mărar.',
          'Tăvălește ușor prin mălai sau făină pentru crustă.',
          'Prăjește 6–7 minute pe o parte la foc mediu, în ulei încins.',
          'Întoarce cu grijă și mai lasă 5–6 minute.',
          'Scoate pe grătar, nu pe hârtie, ca să rămână crocant.'
        ],
        yieldNote: '1 kg păstrăv eviscerat → ~550 g carne fără cap și oase.'
      },
      taste: {
        profile: 'Delicat, ușor dulceag, gust curat de apă de munte, fără note tari de pește',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 3,
        richness: 3,
        texture: 'Carne albă-roz, fină, care se desface în fâșii',
        notes: 'Cel mai accesibil pește pentru cine „nu îi place peștele". Cu mălai și mujdei e mâncare de Mărginime.'
      },
      stats: {
        taste: 82,
        satiety: 82,
        convenience: 38,
        versatility: 58
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Masă de prânz sau cină; necesită gătit, deci nu e opțiune rapidă.',
      tags: ['high-protein', 'protein-dense', 'omega3', 'b12', 'whole-food', 'local-sibiu', 'romanian-classic', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Mujdei de usturoi', 'Lămâie', 'Mărar', 'Cartofi la cuptor', 'Smântână'],
      tips: [
        'Atenție la randament: 1 kg de păstrăv întreg eviscerat dă ~550 g carne. Prețul real pe kg de carne e aproape dublu față de cel de pe etichetă.',
        'Verifică ochii și branhiile: ochii bombați și limpezi, branhiile roșu-viu. Ochii înfundați = pește de ieri.',
        'Păstrăvul de crescătorie are mai puțin omega-3 decât somonul (~0,9 g vs. 2,3 g la 100 g), dar și jumătate din calorii.',
        'La cuptor în folie, cu lămâie și usturoi, 20 de minute la 200 °C — zero efort, zero miros de prăjeală în casă.'
      ],
      warnings: [
        'Oase mici pe linia laterală — atenție la copii.',
        'Se strică rapid; gătește-l în ziua în care l-ai cumpărat.'
      ],
      storage: 'Frigider 0–2 °C, pe gheață, maximum 24 de ore. Congelat, până la 3 luni.',
      shelfLife: '1 zi proaspăt',
      dataConfidence: 'medium',
      sources: ['Piața Cibin, observație de piață', 'pastravariasfaras.ro', 'USDA rainbow trout farmed']
    },

    {
      id: 'f-pastrav-file-proaspat-local',
      name: 'Fresh Trout Fillet',
      nameRo: 'File de păstrăv proaspăt',
      brand: 'păstrăvării locale (Sibiu)',
      category: 'fish-seafood',
      subcategory: 'Păstrăv',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Pescărie',
          availability: 'usual',
          aisle: 'Vitrina cu gheață, fileuri gata curățate',
          priceRon: 38,
          packGrams: 500,
          packLabel: '500 g, 2–3 fileuri, la ~76 lei/kg',
          note: 'Se poate comanda la comandă.'
        },
        {
          name: 'Online RO',
          availability: 'online',
          aisle: '—',
          priceRon: 76,
          packGrams: 1000,
          packLabel: '1 kg file',
          note: 'Băcănii locale cu livrare în Sibiu (ex. Băcănia Albota).'
        },
        {
          name: 'Piața Cibin',
          availability: 'occasional',
          aisle: 'Hala de pește — cere să-ți fileteze peștele întreg',
          priceRon: 0,
          packGrams: 0,
          packLabel: 'la cerere',
          note: 'Mulți vânzători filetează gratuit dacă cumperi 1 kg.'
        }
      ],
      sibiuNote: 'Cere în Piața Cibin să-ți fileteze peștele: plătești prețul peștelui întreg (39 lei/kg) și primești fileuri, în loc să dai 76 lei/kg.',
      per100g: {
        kcal: 128,
        protein: 20.8,
        carbs: 0,
        sugars: 0,
        fat: 4.8,
        satFat: 1.1,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 4.4,
        vitDUg: 12,
        omega3Mg: 950,
        potassiumMg: 410,
        cholesterolMg: 58
      },
      serving: {
        grams: 160,
        label: '1 file (160 g)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Usucă fileul cu șervețel și sărează.',
          'Încinge tigaia cu puțin ulei.',
          'Pune fileul cu pielea în jos, apasă 10 secunde.',
          'Prăjește 4 minute pe piele, apoi 90 de secunde pe cealaltă parte.',
          'Stoarce lămâie deasupra imediat.'
        ],
        yieldNote: '160 g crud → ~130 g gătit.'
      },
      taste: {
        profile: 'Fin, dulceag, mai puțin gras decât somonul, gust curat',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 3,
        richness: 3,
        texture: 'Fulgi mari, moi, piele care devine crocantă',
        notes: 'Un somon mai slab și mai delicat, la jumătate de preț. Sub-apreciat.'
      },
      stats: {
        taste: 80,
        satiety: 84,
        convenience: 52,
        versatility: 68
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Raport proteină/calorii excelent — 20,8 g proteină la doar 128 kcal.',
      tags: ['high-protein', 'protein-dense', 'omega3', 'b12', 'whole-food', 'local-sibiu', 'cutting', 'post-workout'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Migdale prăjite', 'Cartofi noi', 'Fasole verde', 'Unt cu pătrunjel'],
      tips: [
        'Pentru cine ține dietă: păstrăvul are 65% din caloriile somonului la aceeași cantitate de proteină.',
        'Fileul are oase mici pe linia mediană — trage-le cu penseta înainte de gătit, durează 60 de secunde.',
        'Verifică dacă e „file cu piele" — pielea de păstrăv devine crocantă și e partea cea mai bună.'
      ],
      warnings: [
        'Se strică rapid — gătește în 24 de ore.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 de ore.',
      shelfLife: '1 zi proaspăt, 3 luni congelat',
      dataConfidence: 'medium',
      sources: ['bacaniaalbota.ro', 'pastravariasfaras.ro', 'USDA rainbow trout']
    },

    {
      id: 'f-pastrav-file-congelat',
      name: 'Frozen Trout Fillet, Bulk',
      nameRo: 'File de păstrăv congelat, pungă mare',
      brand: 'generic (Selgros / Metro)',
      category: 'fish-seafood',
      subcategory: 'Păstrăv',
      emoji: '🧊',
      unit: 'g',
      stores: [
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare, pungi de 1 kg, calibru 70–100 g/buc',
          priceRon: 69.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: 'Card Selgros necesar. Cel mai bun preț pe kg din Sibiu.'
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Congelatoare pește',
          priceRon: 74.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Punga de 1 kg de la Selgros Șelimbăr e cea mai eficientă sursă de pește gras pentru meal prep în Sibiu.',
      per100g: {
        kcal: 125,
        protein: 20.5,
        carbs: 0,
        sugars: 0,
        fat: 4.8,
        satFat: 1.1,
        fiber: 0,
        salt: 0.15
      },
      micros: {
        b12Ug: 4.2,
        vitDUg: 11,
        omega3Mg: 900,
        potassiumMg: 400,
        cholesterolMg: 57
      },
      serving: {
        grams: 150,
        label: '2 fileuri mici (150 g)'
      },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 8,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Dezgheață peste noapte la frigider.',
          'Usucă, sărează, pune pe hârtie de copt.',
          'Stropește cu ulei de măsline și lămâie.',
          'Coace 10–12 minute la 200 °C.'
        ],
        yieldNote: '1 kg congelat → ~800 g gătit.'
      },
      taste: {
        profile: 'Neutru-delicat, mai puțin expresiv decât păstrăvul proaspăt',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 3,
        texture: 'Ușor mai apoasă decât proaspătul, dar acceptabilă',
        notes: 'Nu are magia păstrăvului de la pescărie, dar pentru meal prep cu sos e perfect.'
      },
      stats: {
        taste: 62,
        satiety: 84,
        convenience: 62,
        versatility: 74
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Ideal pentru batch cooking de duminică — 1 kg = 6 porții de 34 g proteină.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'omega3', 'b12', 'meal-prep', 'batch-cook', 'bulk-buy', 'cheap-protein'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Orez', 'Broccoli', 'Sos de iaurt cu mărar', 'Cartofi', 'Lămâie'],
      tips: [
        'La 70 lei/kg și 20,5 g proteină/100 g, iese ~3,4 lei per 10 g proteină — de două ori mai bun decât somonul.',
        'Dezgheață doar câte ai nevoie: pungile mari au fileuri separate, nu blocate într-un bloc de gheață.',
        'Se coace direct din congelat dacă adaugi 6–8 minute, dar textura suferă.'
      ],
      warnings: [
        'Verifică procentul de glazură pe ambalaj.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'medium',
      sources: ['selgros.ro', 'USDA rainbow trout farmed']
    },

    {
      id: 'f-pastrav-afumat',
      name: 'Hot-Smoked Trout',
      nameRo: 'Păstrăv afumat',
      brand: 'afumători locale (Mărginimea Sibiului)',
      category: 'fish-seafood',
      subcategory: 'Pește afumat',
      emoji: '💨',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'usual',
          aisle: 'Hala de pește, tarabele cu afumături, lângă păstrăvul proaspăt',
          priceRon: 24,
          packGrams: 200,
          packLabel: '1 păstrăv afumat ~200 g, la ~120 lei/kg',
          note: 'Vine de la afumătorile din zona Sadu / Gura Râului.'
        },
        {
          name: 'Pescărie',
          availability: 'usual',
          aisle: 'Vitrina de afumături',
          priceRon: 27,
          packGrams: 200,
          packLabel: '1 bucată ~200 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Frigider delicatese, file de păstrăv afumat vidat',
          priceRon: 21.99,
          packGrams: 125,
          packLabel: 'pachet 125 g file',
          note: 'Versiunea industrială, mai puțin aromată.'
        }
      ],
      sibiuNote: 'Produs local emblematic. Cel din Piața Cibin, afumat cu lemn de fag, e clar superior variantei vidate din supermarket.',
      per100g: {
        kcal: 190,
        protein: 24,
        carbs: 0,
        sugars: 0,
        fat: 10.5,
        satFat: 2.4,
        fiber: 0,
        salt: 2.2
      },
      micros: {
        b12Ug: 5,
        vitDUg: 13,
        omega3Mg: 1000,
        potassiumMg: 380,
        cholesterolMg: 70
      },
      serving: {
        grams: 120,
        label: '1/2 păstrăv afumat (120 g)'
      },
      effort: 0,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['furculiță'],
        steps: [
          'Scoate pielea și desprinde carnea de pe oase cu furculița.',
          'Servește rece sau la temperatura camerei, cu lămâie.'
        ],
        yieldNote: '1 păstrăv afumat de 200 g → ~120 g carne.'
      },
      taste: {
        profile: 'Afumat blând de fag, sărat moderat, carne fermă cu gust concentrat',
        intensity: 4,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 4,
        texture: 'Carne fermă, uscată la exterior, umedă în interior',
        notes: 'Cel mai bun raport gust-preț din categoria peștelui afumat. Bate somonul afumat de supermarket la orice capitol în afară de comoditate.'
      },
      stats: {
        taste: 86,
        satiety: 84,
        convenience: 72,
        versatility: 62
      },
      timing: {
        breakfast: 4,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: '24 g proteină la 100 g și afumat gata de mâncat — foarte eficient pentru cât efort cere.',
      tags: ['ready-to-eat', 'high-protein', 'protein-dense', 'omega3', 'b12', 'local-sibiu', 'romanian-classic', 'mid-price', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Hrean', 'Lămâie', 'Pâine de casă', 'Cremă de brânză', 'Ceapă verde', 'Cartofi fierți'],
      tips: [
        'Afumat la cald înseamnă că peștele e gătit termic — spre deosebire de somonul afumat la rece, e sigur în sarcină.',
        'Amestecă 100 g carne de păstrăv afumat cu 100 g brânză proaspătă și hrean: pate cu 17 g proteină la 100 g, pentru 15 lei.',
        'Întreabă la tarabă când a fost afumat. Cel de azi are pielea lucioasă și elastică; cel de acum 4 zile e uscat și mat.'
      ],
      warnings: [
        'Sare ~2,2 g/100 g.',
        'Produs artizanal — variabilitate mare de la o afumătoare la alta.'
      ],
      storage: 'Frigider 0–4 °C, în hârtie apoi pungă. 4–5 zile.',
      shelfLife: '~5 zile refrigerat, 2 luni congelat',
      dataConfidence: 'low',
      sources: ['Piața Cibin, observație directă', 'valori tipice păstrăv afumat la cald']
    },

    {
      id: 'f-crap-proaspat',
      name: 'Fresh Carp',
      nameRo: 'Crap proaspăt',
      brand: 'generic (Piața Cibin)',
      category: 'fish-seafood',
      subcategory: 'Pește de apă dulce',
      emoji: '🐠',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'always',
          aisle: 'Hala de pește, bazine cu pește viu și lădițe cu gheață',
          priceRon: 28,
          packGrams: 1000,
          packLabel: '1 kg, pește întreg viu sau proaspăt',
          note: 'Se curăță și se eviscerează pe loc, gratuit.'
        },
        {
          name: 'Kaufland',
          availability: 'seasonal',
          aisle: 'Ghișeu pește / bazin viu în decembrie',
          priceRon: 32.9,
          packGrams: 1000,
          packLabel: '1 kg',
          note: 'Bazinul cu crap viu apare în perioada Crăciunului.'
        },
        {
          name: 'Pescărie',
          availability: 'always',
          aisle: 'Vitrina cu gheață',
          priceRon: 34,
          packGrams: 1000,
          packLabel: '1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Crapul e cel mai ieftin pește proaspăt din Sibiu. Piața Cibin, sâmbătă dimineața, ai crap viu la 28 lei/kg — mai ieftin decât pieptul de pui pe kg de carne? Nu, din cauza randamentului. Citește tips-urile.',
      per100g: {
        kcal: 127,
        protein: 18,
        carbs: 0,
        sugars: 0,
        fat: 5.6,
        satFat: 1.1,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 1.5,
        vitDUg: 6,
        omega3Mg: 500,
        potassiumMg: 330,
        cholesterolMg: 66,
        ironMg: 1.2,
        zincMg: 1.5
      },
      serving: {
        grams: 200,
        label: '1 porție (200 g pește curățat)'
      },
      effort: 3,
      timeMin: 35,
      activeTimeMin: 20,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie mare', 'cuțit ascuțit', 'farfurie cu mălai'],
        steps: [
          'Cere la piață să-l cureţe de solzi și să-l evisceze.',
          'Acasă, taie-l în felii de 2–3 cm grosime (saramură) sau fileuri.',
          'Crestează carnea în romburi la 3–4 mm ca să se taie oasele mici.',
          'Sărează și lasă 20 de minute.',
          'Tăvălește prin mălai.',
          'Prăjește 6–7 minute pe fiecare parte în ulei încins, la foc mediu.',
          'Servește cu mujdei și mămăligă.'
        ],
        yieldNote: '1 kg crap întreg → ~450–500 g carne comestibilă. Randament slab.'
      },
      taste: {
        profile: 'Dulceag, cu note de nămol dacă peștele nu e din apă curată, carne albă densă',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 3,
        richness: 3,
        texture: 'Carne densă, ușor sfărâmicioasă, cu multe oase mici în Y',
        notes: 'Gustul de nămol e problema reală. Un crap bun e excelent; unul din baltă murdară e imposibil de mâncat.'
      },
      stats: {
        taste: 58,
        satiety: 80,
        convenience: 22,
        versatility: 48
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Mâncare de weekend — necesită curățat, tăiat și prăjit.',
      tags: ['high-protein', 'protein-dense', 'whole-food', 'romanian-classic', 'budget', 'cheap-protein', 'winter'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Mujdei de usturoi', 'Mălai', 'Murături', 'Lămâie', 'Vin alb'],
      tips: [
        'Randamentul e trădător: 28 lei/kg pește întreg înseamnă ~58 lei/kg de carne curată. Tot ieftin, dar nu cât pare.',
        'Împotriva gustului de nămol: ține feliile 30 de minute în lapte rece sau apă cu lămâie înainte de gătit.',
        'Crestează carnea în romburi fine — tehnică românească clasică pentru a mărunți oasele mici în Y ale crapului.',
        'Crapul de iarnă (noiembrie–ianuarie) e mai gras și mai gustos decât cel de vară.'
      ],
      warnings: [
        'Foarte multe oase mici în Y — nu e recomandat copiilor mici.',
        'Gustul de nămol e frecvent la crapul de baltă; întreabă de unde provine.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24–48 de ore. Feliile se pot congela 3 luni.',
      shelfLife: '1–2 zile proaspăt',
      dataConfidence: 'medium',
      sources: ['Piața Cibin, observație de piață', 'USDA carp raw']
    },

    {
      id: 'f-salau-file',
      name: 'Zander (Pike-Perch) Fillet',
      nameRo: 'File de șalău',
      brand: 'generic (Piața Cibin / pescărie)',
      category: 'fish-seafood',
      subcategory: 'Pește de apă dulce',
      emoji: '👑',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'occasional',
          aisle: 'Hala de pește, la tarabele mari, adesea doar la comandă',
          priceRon: 45,
          packGrams: 500,
          packLabel: '500 g file, la ~90 lei/kg',
          note: 'Cel mai scump pește de apă dulce românesc.'
        },
        {
          name: 'Pescărie',
          availability: 'usual',
          aisle: 'Vitrina cu gheață sau congelator',
          priceRon: 49,
          packGrams: 500,
          packLabel: '500 g file',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'occasional',
          aisle: 'Congelator pește, fileuri vidate',
          priceRon: 89,
          packGrams: 1000,
          packLabel: 'pungă 1 kg congelat',
          note: ''
        }
      ],
      sibiuNote: 'Nu îl găsești în hipermarket. Îl comanzi la o pescărie din Sibiu sau îl prinzi la Piața Cibin când vine marfă din Delta sau din bălțile din sud.',
      per100g: {
        kcal: 84,
        protein: 19,
        carbs: 0,
        sugars: 0,
        fat: 0.7,
        satFat: 0.15,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 1.8,
        potassiumMg: 350,
        cholesterolMg: 60,
        ironMg: 0.5,
        omega3Mg: 200
      },
      serving: {
        grams: 180,
        label: '1 file (180 g)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 9,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Usucă fileul foarte bine, sărează.',
          'Tăvălește ușor prin făină doar pe partea cu piele.',
          'Prăjește 4 minute pe piele în unt clarifiat, apoi 90 de secunde pe cealaltă parte.',
          'Servește imediat cu lămâie.'
        ],
        yieldNote: '1 kg șalău întreg → ~400 g file. De aceea fileul costă dublu.'
      },
      taste: {
        profile: 'Cel mai fin pește de apă dulce din România: dulceag, curat, complet fără gust de nămol',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 3,
        richness: 1,
        texture: 'Carne albă, fermă, în fulgi mari, se desface elegant',
        notes: 'Peștele de restaurant al României. Merită prețul dacă îl gătești simplu.'
      },
      stats: {
        taste: 88,
        satiety: 76,
        convenience: 32,
        versatility: 62
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: '19 g proteină la 84 kcal — cel mai bun raport proteină/calorii din toată categoria.',
      tags: ['high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'whole-food', 'premium', 'romanian-classic', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Unt cu lămâie', 'Sparanghel', 'Cartofi noi', 'Sos de capere', 'Vin alb sec', 'Spanac'],
      tips: [
        'Cel mai slab pește din listă: 0,7 g grăsime la 100 g. În deficit caloric, e proteină aproape pură.',
        'Nu îl găti mult — la 3 minute peste e sfărâmicios și sec. Scoate-l când centrul e opac dar încă lucios.',
        'Aproape fără oase în file — de asta e peștele preferat în restaurante și pentru copii.'
      ],
      warnings: [
        'Preț mare (~90 lei/kg file), disponibilitate incertă în Sibiu.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 de ore. Congelat, 4 luni.',
      shelfLife: '1 zi proaspăt',
      dataConfidence: 'medium',
      sources: ['Piața Cibin, observație de piață', 'USDA walleye/pike-perch raw']
    },

    {
      id: 'f-biban-proaspat',
      name: 'Fresh Perch',
      nameRo: 'Biban proaspăt',
      brand: 'generic (Piața Cibin)',
      category: 'fish-seafood',
      subcategory: 'Pește de apă dulce',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'occasional',
          aisle: 'Hala de pește, lădițe cu gheață, pește mic cu dungi',
          priceRon: 42,
          packGrams: 1000,
          packLabel: '1 kg, pești de 150–250 g',
          note: 'Apare neregulat, în funcție de captură.'
        },
        {
          name: 'Pescărie',
          availability: 'occasional',
          aisle: 'Vitrina cu gheață',
          priceRon: 48,
          packGrams: 1000,
          packLabel: '1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Pește de captură, nu de crescătorie, deci apare când apare. Merită căutat: carnea e excelentă, dar solzii sunt un chin de curățat.',
      per100g: {
        kcal: 91,
        protein: 19.5,
        carbs: 0,
        sugars: 0,
        fat: 1.2,
        satFat: 0.25,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 1.9,
        potassiumMg: 340,
        cholesterolMg: 80,
        ironMg: 0.9,
        omega3Mg: 250
      },
      serving: {
        grams: 180,
        label: '2 bibani mici curățați (180 g)'
      },
      effort: 3,
      timeMin: 30,
      activeTimeMin: 22,
      cooking: {
        method: 'fry',
        difficulty: 'medium',
        equipment: ['cuțit', 'tigaie', 'farfurie cu mălai'],
        steps: [
          'Curăță solzii cu dosul cuțitului, de la coadă spre cap — bibanul are solzi foarte aderenți.',
          'Eviscerează și spală bine.',
          'Sărează și lasă 15 minute.',
          'Tăvălește prin mălai.',
          'Prăjește 5 minute pe fiecare parte în ulei încins.',
          'Servește cu mujdei și mămăligă.'
        ],
        yieldNote: '1 kg biban întreg → ~400 g carne. Randament slab, cap mare.'
      },
      taste: {
        profile: 'Dulce, fin, fără urmă de nămol, unul dintre cele mai bune gusturi de apă dulce',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 3,
        richness: 1,
        texture: 'Carne albă fermă, în fulgi, se desprinde curat de os',
        notes: 'Gustul e superb, dar munca de curățare descurajează. De aceea rar în meniuri.'
      },
      stats: {
        taste: 82,
        satiety: 76,
        convenience: 18,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Proiect de weekend, nu masă rapidă.',
      tags: ['high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'whole-food', 'romanian-classic', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Mujdei', 'Mălai', 'Lămâie', 'Salată de varză'],
      tips: [
        'Truc pentru solzi: opărește bibanul 10 secunde în apă fierbinte — solzii se desprind mult mai ușor.',
        'Bibanii mici (sub 150 g) se prăjesc întregi și se mănâncă cu tot cu oase mici, ca peștișorii.',
        'Cere la piață să ți-i curețe. Costă 3–5 lei/kg și îți salvează 30 de minute.'
      ],
      warnings: [
        'Înotătoare dorsale foarte țepoase — atenție la mâini când îl cureți.',
        'Randament comestibil foarte mic (~40%).'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 de ore.',
      shelfLife: '1 zi proaspăt',
      dataConfidence: 'medium',
      sources: ['Piața Cibin, observație de piață', 'USDA perch raw']
    },

    {
      id: 'f-somn-file',
      name: 'Catfish Fillet',
      nameRo: 'File de somn',
      brand: 'generic (Piața Cibin / pescărie)',
      category: 'fish-seafood',
      subcategory: 'Pește de apă dulce',
      emoji: '🐋',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'usual',
          aisle: 'Hala de pește, bucăți mari de file fără piele',
          priceRon: 20,
          packGrams: 500,
          packLabel: '500 g file, la ~40 lei/kg',
          note: 'Somn african de crescătorie, disponibil constant.'
        },
        {
          name: 'Pescărie',
          availability: 'always',
          aisle: 'Vitrina cu gheață',
          priceRon: 23,
          packGrams: 500,
          packLabel: '500 g file',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Ghișeu pește',
          priceRon: 26,
          packGrams: 500,
          packLabel: '500 g file',
          note: ''
        }
      ],
      sibiuNote: 'Cel mai bun pește de apă dulce fără oase, la preț mic, disponibil constant în Sibiu. Extrem de subestimat.',
      per100g: {
        kcal: 105,
        protein: 17,
        carbs: 0,
        sugars: 0,
        fat: 4,
        satFat: 1,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 2.2,
        potassiumMg: 350,
        cholesterolMg: 58,
        omega3Mg: 300,
        vitDUg: 5
      },
      serving: {
        grams: 200,
        label: '1 porție de file (200 g)'
      },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Taie fileul în bucăți de ~150 g.',
          'Usucă, sărează, condimentează cu boia și usturoi granulat.',
          'Prăjește 5 minute pe fiecare parte la foc mediu.',
          'Stinge cu puțină lămâie la final.'
        ],
        yieldNote: '200 g file crud → ~160 g gătit.'
      },
      taste: {
        profile: 'Blând, ușor gras, fără gust puternic de pește; poate avea note de mâl dacă e din baltă',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 3,
        texture: 'Carne fermă, grasă, aproape ca de pui, complet fără oase',
        notes: 'Peștele pentru cine urăște oasele. Textura densă îl face bun la grătar și în ciorbe.'
      },
      stats: {
        taste: 66,
        satiety: 78,
        convenience: 55,
        versatility: 76
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'File fără oase, gata în 10 minute — cel mai practic pește de apă dulce.',
      tags: ['high-protein', 'protein-dense', 'whole-food', 'cheap-protein', 'budget', 'romanian-classic', 'meal-prep'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Mujdei', 'Sos de roșii', 'Cartofi', 'Boia afumată', 'Ciorbă de pește'],
      tips: [
        'La 40 lei/kg de file (nu de pește întreg!) și 17 g proteină, iese ~2,35 lei per 10 g proteină — cel mai bun raport dintre peștii proaspeți din Sibiu.',
        'Somnul african de crescătorie e crescut în sisteme închise, fără gust de nămol. Cel de baltă poate avea.',
        'Textura fermă îl face singurul pește de apă dulce care rezistă bine la grătar fără să se destrame.'
      ],
      warnings: [
        'Mai gras decât șalăul sau bibanul.',
        'Verifică proveniența dacă ești sensibil la gustul de mâl.'
      ],
      storage: 'Frigider 0–2 °C, maximum 48 de ore. Congelat, 4 luni.',
      shelfLife: '1–2 zile proaspăt',
      dataConfidence: 'medium',
      sources: ['Piața Cibin, observație de piață', 'USDA catfish farmed raw']
    },

    {
      id: 'f-caras-proaspat',
      name: 'Fresh Crucian Carp',
      nameRo: 'Caras proaspăt',
      brand: 'generic (Piața Cibin)',
      category: 'fish-seafood',
      subcategory: 'Pește de apă dulce',
      emoji: '🪙',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'usual',
          aisle: 'Hala de pește, lădițe cu pește mic auriu',
          priceRon: 18,
          packGrams: 1000,
          packLabel: '1 kg, 6–10 pești mici',
          note: 'Cel mai ieftin pește proaspăt din tot Sibiul.'
        },
        {
          name: 'Pescărie',
          availability: 'usual',
          aisle: 'Vitrina cu gheață',
          priceRon: 22,
          packGrams: 1000,
          packLabel: '1 kg',
          note: ''
        }
      ],
      sibiuNote: 'La 18 lei/kg e cea mai ieftină proteină animală proaspătă din Sibiu. Prețul e mic pentru că sunt oase peste tot.',
      per100g: {
        kcal: 97,
        protein: 17.5,
        carbs: 0,
        sugars: 0,
        fat: 3,
        satFat: 0.7,
        fiber: 0,
        salt: 0.1
      },
      micros: {
        b12Ug: 1.4,
        potassiumMg: 320,
        cholesterolMg: 65,
        ironMg: 1,
        omega3Mg: 350,
        calciumMg: 90
      },
      serving: {
        grams: 250,
        label: '2–3 pești prăjiți (250 g)'
      },
      effort: 3,
      timeMin: 40,
      activeTimeMin: 25,
      cooking: {
        method: 'fry',
        difficulty: 'medium',
        equipment: ['cuțit', 'tigaie adâncă', 'mălai'],
        steps: [
          'Curăță solzii și eviscerează (sau cere la piață).',
          'Crestează carnea în romburi dese, la 3 mm, pe ambele părți — esențial pentru oase.',
          'Sărează bine și lasă 20 de minute.',
          'Tăvălește prin mălai.',
          'Prăjește în ulei mult, 5–6 minute pe parte, până e crocant.',
          'Scurge pe grătar și servește cu mujdei.'
        ],
        yieldNote: '1 kg caras → ~450 g comestibil, dar mulți mănâncă și oasele mici prăjite crocant.'
      },
      taste: {
        profile: 'Dulceag, cu gust marcat de baltă, foarte bun când e prăjit crocant',
        intensity: 3,
        sweetness: 2,
        saltiness: 1,
        umami: 3,
        richness: 2,
        texture: 'Carne albă fină înecată în oase mici; prăjit bine, oasele devin crocante',
        notes: 'Mâncare de copilărie pentru mulți români. Ori îl mănânci cu răbdare, ori te enervează.'
      },
      stats: {
        taste: 60,
        satiety: 78,
        convenience: 15,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 1,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Cea mai ieftină proteină din piață, dar cu cel mai mare cost în timp și răbdare.',
      tags: ['high-protein', 'protein-dense', 'whole-food', 'budget', 'cheap-protein', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Mămăligă', 'Mujdei de usturoi', 'Mălai', 'Salată de varză murată', 'Lămâie'],
      tips: [
        'Crestarea în romburi la 3 mm e obligatorie — taie oasele în Y și le face invizibile după prăjire.',
        'Prăjit bine, la ulei încins, oasele mici devin crocante și comestibile, aducând și calciu.',
        'La 18 lei/kg și ~45% randament, ieși cu ~40 lei/kg carne — comparabil cu pieptul de pui, dar cu 40 de minute de muncă în plus.'
      ],
      warnings: [
        'Extrem de multe oase mici — nu îl da copiilor sub 8 ani.',
        'Prăjirea în ulei mult adaugă 40–60 kcal la 100 g.'
      ],
      storage: 'Frigider 0–2 °C, maximum 24 de ore.',
      shelfLife: '1 zi proaspăt',
      dataConfidence: 'low',
      sources: ['Piața Cibin, observație de piață', 'valori tipice Carassius gibelio']
    },

    {
      id: 'f-cod-file-congelat',
      name: 'Frozen Cod Fillet',
      nameRo: 'File de cod congelat',
      brand: 'Nixe (Lidl) / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '⚪',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator pește, cutie cu sigla MSC',
          priceRon: 42.99,
          packGrams: 400,
          packLabel: 'cutie 400 g, fileuri vidate individual',
          note: 'Caută sigla MSC pentru pescuit sustenabil.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește',
          priceRon: 44.99,
          packGrams: 400,
          packLabel: 'cutie 400 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelatoare, pungă 1 kg',
          priceRon: 99,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Codul e cel mai bun pește alb din congelatoarele din Sibiu, dar și cel mai scump. Pentru rețete cu sos, merluciul sau polacul fac aceeași treabă la jumătate de preț.',
      per100g: {
        kcal: 76,
        protein: 17.5,
        carbs: 0,
        sugars: 0,
        fat: 0.7,
        satFat: 0.15,
        fiber: 0,
        salt: 0.3
      },
      micros: {
        b12Ug: 1,
        potassiumMg: 380,
        cholesterolMg: 43,
        omega3Mg: 200,
        ironMg: 0.3
      },
      serving: {
        grams: 150,
        label: '1 file (150 g)'
      },
      effort: 2,
      timeMin: 18,
      activeTimeMin: 8,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Dezgheață peste noapte la frigider sau 30 de minute în apă rece, în pungă.',
          'Usucă foarte bine — codul lasă multă apă.',
          'Sărează, unge cu ulei de măsline, pune felii de lămâie deasupra.',
          'Coace 12–14 minute la 200 °C, până se desface în fulgi mari.'
        ],
        yieldNote: '150 g crud → ~115 g gătit (pierde multă apă).'
      },
      taste: {
        profile: 'Foarte blând, ușor dulceag, aproape neutru — un fundal, nu un protagonist',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Fulgi mari, albi, care se desprind singuri — textura clasică de fish and chips',
        notes: 'Fără sos e fad. Cu un sos de roșii, unt cu capere sau curry devine excelent.'
      },
      stats: {
        taste: 62,
        satiety: 74,
        convenience: 58,
        versatility: 88
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: '17,5 g proteină la doar 76 kcal — regele deficitului caloric.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'meal-prep', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Sos de roșii cu măsline', 'Cartofi', 'Unt cu capere', 'Praz', 'Curry cu lapte de cocos', 'Mazăre'],
      tips: [
        'Codul pierde 20–25% din greutate la gătit. Cântărește crud dacă îți numeri macro-urile.',
        'Verifică sigla MSC pe cutie — stocurile de cod din Atlanticul de Nord sunt sub presiune, iar certificarea contează.',
        'Sarea de 0,3 g/100 g vine din procesul de congelare cu saramură, e normală.',
        'Nu îl găti mai mult de 14 minute. Codul supra-gătit devine cauciucos și apos.'
      ],
      warnings: [
        'Preț mare pentru un pește alb — ~110 lei/kg.',
        'Verifică procentul de glazură pe ambalaj.'
      ],
      storage: 'Congelator -18 °C. După dezghețare, gătește în 24 de ore.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'kaufland.ro', 'USDA Atlantic cod raw']
    },

    {
      id: 'f-merluciu-file-congelat',
      name: 'Frozen Hake Fillet',
      nameRo: 'File de merluciu congelat',
      brand: 'generic (Kaufland / Selgros)',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește, pungi de 500 g–1 kg',
          priceRon: 34.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare, pungi mari',
          priceRon: 59.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: 'Cel mai bun preț pe kg.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Congelator pește',
          priceRon: 37.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        }
      ],
      sibiuNote: 'Alternativa rezonabilă la cod: 60% din preț, 90% din utilitate. Foarte bun în ciorbe și la cuptor.',
      per100g: {
        kcal: 80,
        protein: 17,
        carbs: 0,
        sugars: 0,
        fat: 1.3,
        satFat: 0.25,
        fiber: 0,
        salt: 0.3
      },
      micros: {
        b12Ug: 1.2,
        potassiumMg: 350,
        cholesterolMg: 45,
        omega3Mg: 250
      },
      serving: {
        grams: 160,
        label: '1 file (160 g)'
      },
      effort: 2,
      timeMin: 18,
      activeTimeMin: 8,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Dezgheață la frigider peste noapte.',
          'Usucă bine, sărează, condimentează.',
          'Coace 12 minute la 200 °C, pe pat de roșii și ceapă.'
        ],
        yieldNote: '160 g crud → ~125 g gătit.'
      },
      taste: {
        profile: 'Blând, ușor mai moale decât codul, cu textură mai fină și mai fragilă',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Mai moale și mai umedă decât codul, se destramă ușor',
        notes: 'Se destramă dacă îl întorci în tigaie. Mai bun la cuptor sau în ciorbă.'
      },
      stats: {
        taste: 55,
        satiety: 72,
        convenience: 60,
        versatility: 82
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: 'Aceleași avantaje ca la cod, la un preț cu 40% mai mic.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'meal-prep', 'budget', 'cheap-protein'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Roșii', 'Usturoi', 'Pătrunjel', 'Cartofi', 'Ciorbă de pește', 'Mazăre verde'],
      tips: [
        'Merluciul e alegerea rațională dacă gătești pește alb săptămânal: aceeași proteină ca la cod, cu 40% mai puțini bani.',
        'Fiind mai fragil, gătește-l pe hârtie de copt sau în folie ca să nu se lipească și să se destrame.',
        'Perfect pentru ciorbă de pește: se fierbe în 6–8 minute și dă un bulion curat.'
      ],
      warnings: [
        'Verifică procentul de glazură — la merluciu poate ajunge la 15–20%.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'selgros.ro', 'USDA hake raw']
    },

    {
      id: 'f-pangasius-file-congelat',
      name: 'Frozen Pangasius Fillet',
      nameRo: 'File de pangasius congelat',
      brand: 'generic (Selgros / Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '⚠️',
      unit: 'g',
      stores: [
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare, pungi de 800 g–1 kg',
          priceRon: 29.99,
          packGrams: 800,
          packLabel: 'pungă 800 g, fileuri 90–120 g',
          note: 'Cel mai ieftin pește din orice magazin din Sibiu.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește',
          priceRon: 24.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'always',
          aisle: 'Congelatoare horeca, cutii de 5 kg',
          priceRon: 139,
          packGrams: 5000,
          packLabel: 'cutie 5 kg',
          note: 'Doar dacă gătești pentru mulți.'
        }
      ],
      sibiuNote: 'E ieftin dintr-un motiv. Dacă e singura variantă care îți intră în buget, e tot mai bine decât nimic — dar știi ce cumperi.',
      per100g: {
        kcal: 90,
        protein: 15,
        carbs: 0,
        sugars: 0,
        fat: 3.5,
        satFat: 1.3,
        fiber: 0,
        salt: 0.4
      },
      micros: {
        b12Ug: 0.8,
        potassiumMg: 250,
        cholesterolMg: 45,
        omega3Mg: 60
      },
      serving: {
        grams: 150,
        label: '1 file (150 g)'
      },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'șervețele de bucătărie'],
        steps: [
          'Dezgheață complet și stoarce apa cu șervețele — pangasiusul e plin de apă.',
          'Sărează, condimentează puternic (boia, usturoi, coriandru).',
          'Prăjește 4 minute pe fiecare parte în tigaie foarte încinsă, ca apa să se evapore.',
          'Nu-l fierbe în propria apă — dacă tigaia nu e încinsă, iese moale și fad.'
        ],
        yieldNote: '150 g crud → ~110 g gătit. Pierde 25–30% din greutate, în mare parte apă adăugată.'
      },
      taste: {
        profile: 'Fad, apos, aproape fără gust propriu; textura moale îl trădează',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 1,
        richness: 2,
        texture: 'Moale, apoasă, uneori cauciucoasă; nu formează fulgi ca peștii adevărați',
        notes: 'Onest: e cel mai slab pește din listă. Îl salvează doar prețul și marinatele agresive.'
      },
      stats: {
        taste: 30,
        satiety: 62,
        convenience: 62,
        versatility: 70
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 4,
        snack: 1,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Proteină ieftină de umplutură. Nu construi o dietă în jurul lui.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'budget', 'cheap-protein', 'processed', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Marinată cu usturoi și boia', 'Sos de soia', 'Ghimbir', 'Lămâie verde', 'Orez'],
      tips: [
        'Nota onestă: pangasiusul e crescut intensiv în Delta Mekongului. Are aproape zero omega-3 (60 mg vs. 2300 mg la somon) și cea mai slabă densitate proteică din categorie.',
        'Multe fileuri sunt tratate cu polifosfați ca să rețină apă — de asta pierd 25–30% la gătit. Citește lista de ingrediente: dacă apare E451 sau E452, plătești apă.',
        'Caută certificare ASC pe ambalaj dacă îl cumperi oricum — indică fermă auditată.',
        'Dacă vrei pește alb ieftin cu profil onest, ia merluciu sau polac în locul lui: aceeași bani, dar 17 g proteină în loc de 15 și fără tratamente.'
      ],
      warnings: [
        'Densitate proteică slabă (15 g/100 g) pentru un pește alb.',
        'Aproape fără omega-3.',
        'Frecvent tratat cu polifosfați care rețin apă — plătești greutate de apă.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['selgros.ro', 'kaufland.ro', 'USDA pangasius raw']
    },

    {
      id: 'f-tilapia-file-congelat',
      name: 'Frozen Tilapia Fillet',
      nameRo: 'File de tilapia congelat',
      brand: 'generic (Kaufland / Selgros)',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '🐡',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator pește, pungi de 800 g',
          priceRon: 42.99,
          packGrams: 800,
          packLabel: 'pungă 800 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelatoare',
          priceRon: 49.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Un pas clar peste pangasius la aproape același preț. Dacă alegi între cele două, ia tilapia.',
      per100g: {
        kcal: 96,
        protein: 20,
        carbs: 0,
        sugars: 0,
        fat: 1.7,
        satFat: 0.6,
        fiber: 0,
        salt: 0.3
      },
      micros: {
        b12Ug: 1.6,
        potassiumMg: 300,
        cholesterolMg: 50,
        omega3Mg: 150
      },
      serving: {
        grams: 150,
        label: '1 file (150 g)'
      },
      effort: 2,
      timeMin: 14,
      activeTimeMin: 9,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Dezgheață și usucă bine.',
          'Sărează, presară boia și usturoi granulat.',
          'Prăjește 3–4 minute pe fiecare parte la foc mediu-mare.',
          'Stoarce lămâie verde la final.'
        ],
        yieldNote: '150 g crud → ~120 g gătit.'
      },
      taste: {
        profile: 'Blând, ușor dulceag, mai curat decât pangasiusul, dar tot fără personalitate',
        intensity: 2,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Fermă, în fulgi medii, ține bine la tigaie',
        notes: 'Peștele „de zi cu zi" pentru cine vrea proteină slabă și ieftină, fără drama gustului.'
      },
      stats: {
        taste: 48,
        satiety: 74,
        convenience: 62,
        versatility: 80
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: '20 g proteină la 96 kcal — foarte eficient pentru cut.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'meal-prep', 'cheap-protein', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie verde', 'Coriandru', 'Orez', 'Salsa de roșii', 'Avocado', 'Tortilla'],
      tips: [
        'Tilapia are 20 g proteină/100 g față de 15 g la pangasius, la un preț apropiat. Matematica e clară.',
        'Are foarte puțin omega-3 și un raport omega-6/omega-3 slab — nu o considera „pește pentru inimă".',
        'Perfectă pentru tacos de pește: condimentează cu chili și cumin, prăjește 3 minute pe parte, servește în tortilla cu varză și lime.'
      ],
      warnings: [
        'Profil de grăsimi slab (omega-6 dominant).',
        'Verifică proveniența și certificarea ASC.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'USDA tilapia raw']
    },

    {
      id: 'f-polac-file-congelat',
      name: 'Frozen Alaska Pollock Fillet',
      nameRo: 'File de polac (cod de Alaska) congelat',
      brand: 'Nixe (Lidl) / generic',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '❄️',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator pește, cutie cu sigla MSC',
          priceRon: 29.99,
          packGrams: 500,
          packLabel: 'cutie 500 g',
          note: 'Aproape mereu certificat MSC.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește',
          priceRon: 32.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Congelator',
          priceRon: 27.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Cel mai bun compromis din congelatoarele din Sibiu: preț mic, proteină bună, pescuit certificat sustenabil.',
      per100g: {
        kcal: 82,
        protein: 17.5,
        carbs: 0,
        sugars: 0,
        fat: 1,
        satFat: 0.2,
        fiber: 0,
        salt: 0.3
      },
      micros: {
        b12Ug: 3.2,
        potassiumMg: 350,
        cholesterolMg: 70,
        omega3Mg: 350
      },
      serving: {
        grams: 150,
        label: '1 file (150 g)'
      },
      effort: 2,
      timeMin: 16,
      activeTimeMin: 8,
      cooking: {
        method: 'oven',
        difficulty: 'easy',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Dezgheață la frigider peste noapte.',
          'Usucă bine și sărează.',
          'Coace 12 minute la 200 °C cu ulei de măsline și lămâie.'
        ],
        yieldNote: '150 g crud → ~115 g gătit.'
      },
      taste: {
        profile: 'Blând, ușor dulceag, aproape identic cu codul dar mai puțin ferm',
        intensity: 1,
        sweetness: 1,
        saltiness: 1,
        umami: 2,
        richness: 1,
        texture: 'Fulgi medii, mai umedă decât codul',
        notes: 'Nimeni nu ar ghici diferența față de cod într-un sos. De asta se folosește la fish and chips și la surimi.'
      },
      stats: {
        taste: 55,
        satiety: 74,
        convenience: 62,
        versatility: 86
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: 'Proteină slabă, ieftină, gata în 12 minute la cuptor.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'meal-prep', 'budget', 'cheap-protein', 'b12'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Cartofi', 'Sos tartar cu iaurt', 'Mazăre', 'Lămâie', 'Pesmet cu ierburi'],
      tips: [
        'Polacul de Alaska e una dintre cele mai bine gestionate pescuituri din lume — sigla MSC de pe cutie e reală, nu marketing.',
        'La 60 lei/kg și 17,5 g proteină, iese ~3,4 lei per 10 g proteină, jumătate față de cod.',
        'E peștele din care se face surimi. Cumpărat direct, are 17,5 g proteină; transformat în batoane de crab, ajunge la 7.'
      ],
      warnings: [
        'Verifică glazura pe ambalaj.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'USDA Alaska pollock raw']
    },

    {
      id: 'f-limba-de-mare-file',
      name: 'Sole / Plaice Fillet',
      nameRo: 'File de limbă de mare (cambulă)',
      brand: 'generic (Kaufland / Selgros)',
      category: 'fish-seafood',
      subcategory: 'Pește alb',
      emoji: '🍃',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator pește, fileuri subțiri ovale',
          priceRon: 39.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelatoare',
          priceRon: 74.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Vitrină pește refrigerat, fileuri proaspete',
          priceRon: 24.99,
          packGrams: 250,
          packLabel: 'caserolă 250 g proaspăt',
          note: 'Rar, dar mai bun decât congelatul.'
        }
      ],
      sibiuNote: 'Fileuri subțiri care se gătesc în 4 minute total. Cel mai rapid pește de gătit din Sibiu.',
      per100g: {
        kcal: 86,
        protein: 17,
        carbs: 0,
        sugars: 0,
        fat: 1.8,
        satFat: 0.4,
        fiber: 0,
        salt: 0.3
      },
      micros: {
        b12Ug: 1.4,
        potassiumMg: 330,
        cholesterolMg: 48,
        omega3Mg: 400,
        vitDUg: 2
      },
      serving: {
        grams: 160,
        label: '2 fileuri subțiri (160 g)'
      },
      effort: 2,
      timeMin: 10,
      activeTimeMin: 7,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă subțire'],
        steps: [
          'Dezgheață și usucă foarte bine.',
          'Trece fileurile prin făină condimentată.',
          'Prăjește 2 minute pe o parte în unt cu ulei, 1 minut pe cealaltă.',
          'Stoarce lămâie și presară pătrunjel.'
        ],
        yieldNote: '160 g crud → ~130 g gătit.'
      },
      taste: {
        profile: 'Delicat, dulceag, fin — cel mai elegant pește alb accesibil',
        intensity: 2,
        sweetness: 2,
        saltiness: 1,
        umami: 2,
        richness: 2,
        texture: 'Fileuri subțiri, foarte fine, se destramă la cea mai mică forțare',
        notes: 'Clasicul sole meunière se face în 4 minute. Cu unt, lămâie și pătrunjel e restaurant, nu bucătărie.'
      },
      stats: {
        taste: 76,
        satiety: 70,
        convenience: 68,
        versatility: 62
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: 'Gata în 4 minute de tigaie — cel mai rapid pește proaspăt gătit.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Unt', 'Lămâie', 'Pătrunjel', 'Capere', 'Migdale', 'Cartofi noi'],
      tips: [
        'Fileurile sunt subțiri — 2 minute pe o parte, 1 pe cealaltă. Mai mult și devin cârpe.',
        'Folosește o spatulă lată și subțire, altfel se rup la întors.',
        'Multe produse etichetate „limbă de mare" în România sunt de fapt cambulă sau pangasius reformat. Citește denumirea științifică de pe ambalaj.'
      ],
      warnings: [
        'Atenție la etichetare: „limbă de mare" e folosit comercial pentru mai multe specii.'
      ],
      storage: 'Congelator -18 °C sau frigider 24 de ore dacă e proaspăt.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'USDA flatfish (flounder and sole) raw']
    },

    {
      id: 'f-file-peste-pane',
      name: 'Breaded Fish Fillets, Frozen',
      nameRo: 'File de pește pane congelat',
      brand: 'Nixe (Lidl) / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Pește panat & procesat',
      emoji: '🍞',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator, cutie de carton cu 4–6 fileuri',
          priceRon: 24.99,
          packGrams: 450,
          packLabel: 'cutie 450 g, ~4 fileuri',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește panat',
          priceRon: 26.99,
          packGrams: 450,
          packLabel: 'cutie 450 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Congelator',
          priceRon: 22.99,
          packGrams: 400,
          packLabel: 'cutie 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Comod, dar citește procentul de pește: bun peste 60%, suspect sub 50%. Panarea diluează totul.',
      per100g: {
        kcal: 210,
        protein: 11.5,
        carbs: 17,
        sugars: 1,
        fat: 10.5,
        satFat: 1.2,
        fiber: 1,
        salt: 0.9
      },
      micros: {
        b12Ug: 0.7,
        potassiumMg: 200,
        cholesterolMg: 30,
        omega3Mg: 120
      },
      serving: {
        grams: 225,
        label: '2 fileuri (225 g)'
      },
      effort: 1,
      timeMin: 22,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă', 'hârtie de copt'],
        steps: [
          'Preîncălzește cuptorul la 220 °C.',
          'Pune fileurile congelate pe hârtie de copt, fără să se atingă.',
          'Coace 18–20 de minute, întorcând o dată la jumătate.',
          'Servește imediat, altfel panarea se înmoaie.'
        ],
        yieldNote: 'Nu pierde greutate semnificativ la cuptor.'
      },
      taste: {
        profile: 'Crocant la exterior, moale la interior, gust de pesmet mai puternic decât gustul de pește',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Crustă crocantă peste pește moale — dacă îl scoți la timp',
        notes: 'Mâncare de confort, nu strategie nutrițională. Copiii îl adoră.'
      },
      stats: {
        taste: 68,
        satiety: 58,
        convenience: 84,
        versatility: 40
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 4,
        snack: 2,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Mai mult carbohidrați decât proteină pe porție — nu e o masă post-antrenament.',
      tags: ['frozen', 'microwave', 'processed', 'kid-friendly', 'mid-price', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Sos tartar cu iaurt', 'Cartofi la cuptor', 'Lămâie', 'Salată de varză', 'Mazăre'],
      tips: [
        'Onest: 11,5 g proteină la 100 g, față de 17,5 la fileul simplu de polac. Panarea taie proteina aproape la jumătate și adaugă 130 kcal.',
        'La airfryer, 12 minute la 200 °C, iese mai crocant decât la cuptor și fără ulei suplimentar.',
        'Nu îl prăji în ulei. Absoarbe 30–40 g de ulei per cutie și ajungi la 300 kcal/100 g.',
        'Verifică procentul de pește de pe cutie: sub 55% înseamnă că plătești pesmet la preț de pește.'
      ],
      warnings: [
        'Conține gluten (pesmet) și adesea ou.',
        'Densitate proteică slabă raportat la calorii.'
      ],
      storage: 'Congelator -18 °C. Nu recongela după dezghețare.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'kaufland.ro', 'valori tipice file de pește pane']
    },

    {
      id: 'f-batoane-peste-crocante',
      name: 'Fish Fingers',
      nameRo: 'Batoane de pește crocante',
      brand: 'Nixe (Lidl) / Iglo',
      category: 'fish-seafood',
      subcategory: 'Pește panat & procesat',
      emoji: '🍟',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator, cutie cu 10–15 batoane',
          priceRon: 19.99,
          packGrams: 300,
          packLabel: 'cutie 300 g, 10 batoane',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator pește panat',
          priceRon: 24.99,
          packGrams: 450,
          packLabel: 'cutie 450 g, 15 batoane',
          note: 'Marca Iglo e mai scumpă, dar cu procent de pește mai mare.'
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Congelator',
          priceRon: 18.99,
          packGrams: 300,
          packLabel: 'cutie 300 g',
          note: ''
        }
      ],
      sibiuNote: 'Alimentul de urgență al părinților. Nutrițional e mediocru, dar e pește, nu nuggets de pui reconstituit.',
      per100g: {
        kcal: 200,
        protein: 12,
        carbs: 18,
        sugars: 1,
        fat: 8.5,
        satFat: 1,
        fiber: 1.2,
        salt: 0.8
      },
      micros: {
        b12Ug: 0.8,
        potassiumMg: 190,
        cholesterolMg: 28,
        omega3Mg: 130
      },
      serving: {
        grams: 150,
        label: '5 batoane (150 g)'
      },
      effort: 1,
      timeMin: 18,
      activeTimeMin: 2,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['tavă'],
        steps: [
          'Preîncălzește la 220 °C.',
          'Așază batoanele congelate pe tavă.',
          'Coace 15 minute, întorcând la jumătate.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Crocant, sărat, gust de pesmet cu urme de pește alb',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Crustă crocantă, interior moale uniform',
        notes: 'Nu pretinde că e altceva. Cu sos tartar și cartofi, e o cină de vineri fără vinovăție majoră.'
      },
      stats: {
        taste: 66,
        satiety: 55,
        convenience: 88,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Porție de 5 batoane = 18 g proteină și 300 kcal. Nu e o afacere bună.',
      tags: ['frozen', 'processed', 'kid-friendly', 'budget', 'microwave', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Sos tartar', 'Ketchup', 'Cartofi la cuptor', 'Mazăre', 'Salată verde'],
      tips: [
        'Compară procentul de pește pe cutie: variantele de 65% pește au 13–14 g proteină, cele de 45% au 10.',
        'Trucul pentru copii care nu mănâncă pește: batoanele sunt o poartă de intrare — dar treci treptat la file simplu la cuptor.',
        'Airfryer 10 minute la 200 °C: mai crocant, fără ulei.'
      ],
      warnings: [
        'Conține gluten.',
        'Proteină diluată de panare — nu o socoti ca pește simplu.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'valori tipice fish fingers']
    },

    {
      id: 'f-burger-peste',
      name: 'Frozen Fish Burger',
      nameRo: 'Burger de pește congelat',
      brand: 'generic (Kaufland / Lidl)',
      category: 'fish-seafood',
      subcategory: 'Pește panat & procesat',
      emoji: '🍔',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator pește panat',
          priceRon: 21.99,
          packGrams: 300,
          packLabel: 'cutie 300 g, 3 burgeri',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'occasional',
          aisle: 'Congelator',
          priceRon: 19.99,
          packGrams: 300,
          packLabel: 'cutie 300 g',
          note: 'Apare în oferta săptămânii.'
        }
      ],
      sibiuNote: 'Produsul cel mai procesat din categorie. Dacă vrei burger de pește bun, fă-l din conservă de somon și un ou.',
      per100g: {
        kcal: 215,
        protein: 12.5,
        carbs: 16,
        sugars: 1.2,
        fat: 11,
        satFat: 1.3,
        fiber: 1,
        salt: 1
      },
      micros: {
        b12Ug: 0.7,
        potassiumMg: 190,
        cholesterolMg: 32,
        omega3Mg: 150
      },
      serving: {
        grams: 100,
        label: '1 burger (100 g)'
      },
      effort: 1,
      timeMin: 16,
      activeTimeMin: 4,
      cooking: {
        method: 'pan',
        difficulty: 'trivial',
        equipment: ['tigaie'],
        steps: [
          'Prăjește direct din congelat, 6 minute pe fiecare parte, la foc mediu, cu puțin ulei.',
          'Sau la cuptor 18 minute la 200 °C.',
          'Servește în chiflă cu salată și sos de iaurt.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Crocant afară, pastă de pește uniformă înăuntru, condimentat discret',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Interior omogen, fără fibre de pește vizibile',
        notes: 'Textura de pastă e semnul procesării. Nu se compară cu un file.'
      },
      stats: {
        taste: 58,
        satiety: 55,
        convenience: 86,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 4,
        snack: 2,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Un burger = 12,5 g proteină și 215 kcal. Ai nevoie de doi pentru o masă.',
      tags: ['frozen', 'processed', 'kid-friendly', 'mid-price', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Chiflă integrală', 'Sos de iaurt cu mărar', 'Salată verde', 'Roșii', 'Ceapă roșie'],
      tips: [
        'Varianta de casă: 1 conservă de somon roz + 1 ou + 3 linguri de fulgi de ovăz + mărar = 4 burgeri cu 15 g proteină fiecare, la 30 lei totul.',
        'Verifică lista de ingrediente: multe conțin surimi sau pește reconstituit, nu file.',
        'Se gătește direct din congelat — nu îl dezgheța, se destramă.'
      ],
      warnings: [
        'Conține gluten.',
        'Produs foarte procesat; verifică procentul de pește.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'valori tipice burger de pește congelat']
    },

    {
      id: 'f-calamar-inele-pane',
      name: 'Breaded Calamari Rings, Frozen',
      nameRo: 'Inele de calamar pane congelate',
      brand: 'Nixe (Lidl) / generic',
      category: 'fish-seafood',
      subcategory: 'Pește panat & procesat',
      emoji: '🍩',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'seasonal',
          aisle: 'Congelator, apare în săptămânile tematice mediteraneene',
          priceRon: 24.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator fructe de mare',
          priceRon: 27.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare horeca',
          priceRon: 54.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Sibiu e inland — calamarul pane congelat e mai realist decât cel proaspăt. La airfryer iese decent.',
      per100g: {
        kcal: 230,
        protein: 10,
        carbs: 22,
        sugars: 1.5,
        fat: 11,
        satFat: 1.2,
        fiber: 1.2,
        salt: 1.1
      },
      micros: {
        b12Ug: 0.8,
        potassiumMg: 180,
        cholesterolMg: 90,
        omega3Mg: 100
      },
      serving: {
        grams: 150,
        label: '1 porție (150 g)'
      },
      effort: 1,
      timeMin: 14,
      activeTimeMin: 3,
      cooking: {
        method: 'airfryer',
        difficulty: 'trivial',
        equipment: ['airfryer sau cuptor'],
        steps: [
          'Airfryer: 10–12 minute la 200 °C, scuturând coșul o dată.',
          'Cuptor: 14 minute la 220 °C.',
          'Servește imediat cu lămâie și maioneză cu usturoi.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Crocant, sărat, cu textura elastică specifică a calamarului sub panare',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Crustă crocantă, interior elastic; devine cauciucos dacă e gătit prea mult',
        notes: 'Gustare de terasă. Nutrițional e slab, dar e o plăcere legitimă.'
      },
      stats: {
        taste: 72,
        satiety: 50,
        convenience: 82,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 4,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Gustare, nu masă. 10 g proteină la 230 kcal e un raport slab.',
      tags: ['frozen', 'processed', 'high-kcal', 'summer', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Maioneză cu usturoi', 'Sos marinara', 'Bere rece', 'Salată verde'],
      tips: [
        'Nu depăși timpul de gătire — calamarul trece de la fraged la cauciuc în 2 minute.',
        'Panarea reprezintă ~40% din greutate. Calamarul simplu congelat are 16 g proteină; panat, doar 10.',
        'La airfryer nu ai nevoie de ulei suplimentar — panarea are deja destul.'
      ],
      warnings: [
        'Conține gluten și moluște (alergeni).',
        'Colesterol ridicat (~90 mg/100 g).'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'low',
      sources: ['lidl.ro', 'valori tipice calamari pane congelați']
    },

    {
      id: 'f-creveti-cruzi-congelati',
      name: 'Raw Peeled Shrimp, Frozen',
      nameRo: 'Creveți cruzi decorticați, congelați',
      brand: 'Nixe (Lidl) / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🦐',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Congelator fructe de mare, pungi de 400 g',
          priceRon: 34.99,
          packGrams: 400,
          packLabel: 'pungă 400 g (greutate netă, glazură separată)',
          note: 'Frecvent la ofertă în jur de 29,99 lei.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator fructe de mare',
          priceRon: 39.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare, cutii de 1 kg, calibru 16/20',
          priceRon: 89,
          packGrams: 1000,
          packLabel: 'cutie 1 kg',
          note: 'Cel mai bun preț pe kg din Sibiu.'
        }
      ],
      sibiuNote: 'Cea mai bună formă de fructe de mare din Sibiu. Sibiul fiind inland, creveții congelați cruzi sunt de fapt mai proaspeți decât orice „proaspăt" din vitrină — au fost congelați pe vas.',
      per100g: {
        kcal: 74,
        protein: 17,
        carbs: 0.3,
        sugars: 0,
        fat: 0.6,
        satFat: 0.15,
        fiber: 0,
        salt: 0.8
      },
      micros: {
        b12Ug: 1.3,
        potassiumMg: 260,
        cholesterolMg: 150,
        ironMg: 0.5,
        zincMg: 1.3,
        calciumMg: 55,
        omega3Mg: 300
      },
      serving: {
        grams: 150,
        label: '1 porție (150 g, ~12 creveți)'
      },
      effort: 2,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'strecurătoare'],
        steps: [
          'Dezgheață 10 minute în strecurătoare, sub apă rece.',
          'Usucă foarte bine cu șervețele — creveții uzi se fierb, nu se rumenesc.',
          'Încinge tigaia cu ulei de măsline și usturoi zdrobit.',
          'Aruncă creveții și gătește 90 de secunde pe o parte, 60 pe cealaltă.',
          'Scoate imediat ce s-au făcut roz și au forma literei C. Dacă ajung la forma de O, sunt cauciuc.'
        ],
        yieldNote: '400 g pungă → ~330 g creveți după scurgerea glazurii.'
      },
      taste: {
        profile: 'Dulceag, marin, delicat; ia foarte bine aromele de usturoi, unt și chili',
        intensity: 3,
        sweetness: 3,
        saltiness: 2,
        umami: 4,
        richness: 2,
        texture: 'Fermă, elastică, crocantă când e gătită corect',
        notes: 'Cea mai iertătoare mâncare de lux. 3 minute de tigaie și pare că ai gătit ceva serios.'
      },
      stats: {
        taste: 86,
        satiety: 72,
        convenience: 66,
        versatility: 88
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: '17 g proteină la 74 kcal — printre cele mai bune rapoarte proteină/calorii din tot atlasul.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'meal-prep', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Usturoi', 'Unt', 'Chili', 'Paste', 'Lămâie', 'Pătrunjel'],
      tips: [
        'Regula C și O: crevete în formă de C = gătit perfect; în formă de O = supra-gătit și cauciucos.',
        'Verifică pe pungă „greutate netă" vs. „greutate netă scursă". Glazura de gheață poate fi 10–20% din masă.',
        'Calibrul (16/20, 26/30) înseamnă câți creveți intră într-o livră. Cifră mică = creveți mari.',
        'Nu îi dezgheța la microunde niciodată. Se gătesc parțial și devin făinoși.'
      ],
      warnings: [
        'Colesterol ridicat (150 mg/100 g) — irelevant pentru majoritatea, dar de știut.',
        'Alergen major: crustacee.',
        'Creveții de acvacultură din Asia de Sud-Est au impact ecologic mare; caută certificare ASC.'
      ],
      storage: 'Congelator -18 °C. Odată dezghețați, gătește-i în aceeași zi.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'kaufland.ro', 'USDA shrimp raw']
    },

    {
      id: 'f-creveti-fierti-congelati',
      name: 'Cooked Peeled Shrimp, Frozen',
      nameRo: 'Creveți fierți decorticați, congelați',
      brand: 'K-Classic (Kaufland) / Nixe (Lidl)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🍤',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator fructe de mare, pungi mici roz',
          priceRon: 29.99,
          packGrams: 250,
          packLabel: 'pungă 250 g',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Congelator fructe de mare',
          priceRon: 27.99,
          packGrams: 250,
          packLabel: 'pungă 250 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Vitrină refrigerată sau congelator',
          priceRon: 32.99,
          packGrams: 250,
          packLabel: 'pungă 250 g',
          note: ''
        }
      ],
      sibiuNote: 'Perfect pentru salate: dezgheți 10 minute și ai gata 42 g proteină. Zero gătit.',
      per100g: {
        kcal: 85,
        protein: 19,
        carbs: 0.5,
        sugars: 0,
        fat: 0.7,
        satFat: 0.2,
        fiber: 0,
        salt: 1.2
      },
      micros: {
        b12Ug: 1.5,
        potassiumMg: 220,
        cholesterolMg: 190,
        ironMg: 0.6,
        zincMg: 1.4,
        calciumMg: 60
      },
      serving: {
        grams: 125,
        label: '1/2 pungă (125 g)'
      },
      effort: 0,
      timeMin: 10,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['strecurătoare'],
        steps: [
          'Pune într-o strecurătoare sub apă rece 5–10 minute.',
          'Scurge bine și tamponează cu șervețel.',
          'Servește direct în salată sau cu sos cocktail.'
        ],
        yieldNote: '250 g pungă → ~210 g după scurgere.'
      },
      taste: {
        profile: 'Dulceag, sărat, mai puțin intens decât creveții gătiți proaspăt',
        intensity: 3,
        sweetness: 3,
        saltiness: 3,
        umami: 3,
        richness: 1,
        texture: 'Fermă dar uneori spongioasă din cauza fierberii industriale',
        notes: 'Nu îi mai găti — sunt deja fierți. Orice căldură îi transformă în gumă.'
      },
      stats: {
        taste: 72,
        satiety: 74,
        convenience: 88,
        versatility: 76
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 4
      },
      timingNote: '19 g proteină la 85 kcal, fără gătit — cea mai eficientă proteină rece după iaurtul grecesc.',
      tags: ['frozen', 'ready-to-eat', 'no-cook', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'summer'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Avocado', 'Salată verde', 'Sos cocktail', 'Lămâie', 'Iaurt cu mărar', 'Roșii cherry'],
      tips: [
        'Nu îi mai găti. Sunt fierți. Dacă îi pui în tigaie, în 60 de secunde devin cauciuc.',
        'Sunt mai sărați decât cei cruzi (1,2 g vs. 0,8 g sare) pentru că fierberea se face în saramură.',
        'Pentru salată de creveți: 125 g creveți + jumătate de avocado + iaurt grecesc + lămâie = 30 g proteină, 280 kcal.'
      ],
      warnings: [
        'Alergen major: crustacee.',
        'Colesterol ridicat.',
        'Sodiu mai mare decât la creveții cruzi.'
      ],
      storage: 'Congelator -18 °C. După dezghețare, frigider maximum 24 de ore.',
      shelfLife: '~12 luni congelat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'lidl.ro', 'USDA shrimp cooked']
    },

    {
      id: 'f-midii-carne-congelata',
      name: 'Frozen Mussel Meat',
      nameRo: 'Carne de midii congelată',
      brand: 'generic (Kaufland / Selgros)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🦪',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator fructe de mare, pungi de 500 g',
          priceRon: 24.99,
          packGrams: 500,
          packLabel: 'pungă 500 g carne de midii',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare fructe de mare',
          priceRon: 39.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'occasional',
          aisle: 'Congelator, midii în cochilie cu sos',
          priceRon: 22.99,
          packGrams: 800,
          packLabel: 'pungă 800 g în cochilie (~250 g carne)',
          note: 'Atenție: greutatea include cochiliile.'
        }
      ],
      sibiuNote: 'Cea mai ieftină sursă de fier și B12 din tot atlasul. 100 g de midii îți dau de 8 ori doza zilnică de B12.',
      per100g: {
        kcal: 86,
        protein: 14,
        carbs: 3.5,
        sugars: 0,
        fat: 2,
        satFat: 0.4,
        fiber: 0,
        salt: 0.6
      },
      micros: {
        b12Ug: 20,
        ironMg: 4.5,
        zincMg: 2.7,
        potassiumMg: 320,
        cholesterolMg: 40,
        omega3Mg: 600,
        calciumMg: 30
      },
      serving: {
        grams: 200,
        label: '1 porție (200 g carne)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie adâncă sau oală', 'capac'],
        steps: [
          'Dezgheață 15 minute în strecurătoare.',
          'Călește ceapă și usturoi în ulei de măsline.',
          'Adaugă roșii tocate sau vin alb și lasă 3 minute.',
          'Pune midiile și acoperă 4–5 minute.',
          'Presară pătrunjel și stoarce lămâie.'
        ],
        yieldNote: '1 kg midii în cochilie → ~250–300 g carne. Cumpără carnea, nu cochiliile, dacă vrei valoare.'
      },
      taste: {
        profile: 'Iodat, marin, ușor metalic, cu dulceață de fond; gust puternic de mare',
        intensity: 4,
        sweetness: 2,
        saltiness: 3,
        umami: 5,
        richness: 2,
        texture: 'Fermă, ușor elastică, cu o mușcătură distinctă',
        notes: 'Gustul e mult mai intens decât al creveților. Cu sos de roșii și usturoi e mâncare mediteraneană autentică.'
      },
      stats: {
        taste: 66,
        satiety: 70,
        convenience: 58,
        versatility: 62
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Sursă excepțională de fier și B12 — utilă mai ales dacă mănânci puțină carne roșie.',
      tags: ['protein-dense', 'frozen', 'low-fat', 'low-kcal', 'iron-rich', 'b12', 'omega3', 'cheap-protein', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Roșii', 'Usturoi', 'Vin alb', 'Pătrunjel', 'Paste', 'Pâine pentru sos'],
      tips: [
        '20 µg de B12 la 100 g — de 8 ori doza zilnică. Cea mai densă sursă de B12 din tot atlasul, peste ficat.',
        'Când cumperi midii în cochilie, doar 25–30% din greutate e comestibilă. Punga de 800 g dă ~250 g carne.',
        'Midiile sunt printre cele mai sustenabile proteine animale: se hrănesc filtrând apa, nu consumă furaje.',
        'Nu le găti mai mult de 5 minute — se strâng și devin cauciuc.'
      ],
      warnings: [
        'Alergen major: moluște.',
        'Purine ridicate — atenție la gută.',
        'Aruncă orice midie în cochilie care nu s-a deschis la gătit.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'selgros.ro', 'USDA blue mussel cooked']
    },

    {
      id: 'f-midii-marinate',
      name: 'Marinated Mussels in Jar',
      nameRo: 'Midii marinate la borcan',
      brand: 'generic (Kaufland / Metro)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🫙',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raft conserve pește / delicatese, borcane mici',
          priceRon: 16.99,
          packGrams: 120,
          packLabel: 'borcan 200 g (120 g scurs)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Conserve, zona delicatese',
          priceRon: 19.9,
          packGrams: 150,
          packLabel: 'borcan 250 g (150 g scurs)',
          note: ''
        }
      ],
      sibiuNote: 'Gustare de aperitiv, nu masă. Bună de ținut în cămară pentru o salată rapidă.',
      per100g: {
        kcal: 145,
        protein: 14,
        carbs: 3,
        sugars: 1,
        fat: 8.5,
        satFat: 1.5,
        fiber: 0,
        salt: 1.5
      },
      micros: {
        b12Ug: 15,
        ironMg: 4,
        zincMg: 2.2,
        potassiumMg: 280,
        cholesterolMg: 45,
        omega3Mg: 500
      },
      serving: {
        grams: 120,
        label: '1 borcan scurs (120 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: 'Borcan 200 g → ~120 g midii scurse.'
      },
      taste: {
        profile: 'Acrișor de la oțet, iodat, uleios, cu note de usturoi și ierburi',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 5,
        richness: 4,
        texture: 'Fermă, ușor cauciucoasă din marinare',
        notes: 'Aperitiv bun cu pâine și vin alb. Textura e mai tare decât la midiile proaspete.'
      },
      stats: {
        taste: 62,
        satiety: 58,
        convenience: 96,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 4,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Aperitiv sau topping de salată; nu o sursă principală de proteină.',
      tags: ['ready-to-eat', 'shelf-stable', 'iron-rich', 'b12', 'high-sodium', 'mid-price', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită', 'Lămâie', 'Ceapă roșie', 'Roșii', 'Vin alb', 'Salată verde'],
      tips: [
        'Uleiul din borcan adaugă ~6 g grăsime la 100 g față de midiile simple. Scurge-le bine.',
        'Pun în orice salată un strat de umami — 4–5 midii sunt suficiente.',
        'Verifică proveniența; midiile marinate ieftine pot fi de calibru foarte mic și textură nisipoasă.'
      ],
      warnings: [
        'Alergen major: moluște.',
        'Sodiu ridicat.'
      ],
      storage: 'Cămară. După deschidere, frigider maximum 4 zile.',
      shelfLife: '~2 ani sigilat',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'valori tipice midii marinate în ulei, scurse']
    },

    {
      id: 'f-calamar-inele-congelate',
      name: 'Raw Squid Rings, Frozen',
      nameRo: 'Inele de calamar crude, congelate',
      brand: 'generic (Kaufland / Selgros)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🦑',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator fructe de mare',
          priceRon: 34.99,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare fructe de mare, pungi de 1 kg',
          priceRon: 62.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'always',
          aisle: 'Congelatoare horeca',
          priceRon: 59.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Mult mai bun raport decât calamarul pane: 16 g proteină în loc de 10, și controlezi tu grăsimea.',
      per100g: {
        kcal: 82,
        protein: 16,
        carbs: 1.5,
        sugars: 0,
        fat: 1.2,
        satFat: 0.3,
        fiber: 0,
        salt: 0.6
      },
      micros: {
        b12Ug: 1.3,
        potassiumMg: 250,
        cholesterolMg: 230,
        ironMg: 0.7,
        zincMg: 1.5,
        omega3Mg: 400
      },
      serving: {
        grams: 180,
        label: '1 porție (180 g)'
      },
      effort: 2,
      timeMin: 10,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'medium',
        equipment: ['tigaie foarte încinsă', 'șervețele'],
        steps: [
          'Dezgheață complet și usucă foarte bine.',
          'Încinge tigaia la maxim cu puțin ulei.',
          'Aruncă inelele și gătește 90 de secunde total, amestecând.',
          'Scoate imediat, adaugă usturoi, pătrunjel și lămâie în afara focului.'
        ],
        yieldNote: '180 g crud → ~140 g gătit.'
      },
      taste: {
        profile: 'Dulceag, marin, delicat, mai blând decât midiile',
        intensity: 3,
        sweetness: 2,
        saltiness: 2,
        umami: 4,
        richness: 1,
        texture: 'Fermă și elastică; ori 90 de secunde, ori 45 de minute — între ele e cauciuc',
        notes: 'Regula calamarului: foarte scurt sau foarte lung. Orice între cele două e o greșeală.'
      },
      stats: {
        taste: 72,
        satiety: 70,
        convenience: 55,
        versatility: 70
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: '16 g proteină la 82 kcal — foarte bun pentru deficit caloric.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'cutting', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Usturoi', 'Pătrunjel', 'Lămâie', 'Chili', 'Paste cu roșii', 'Orez'],
      tips: [
        'Regula 90 de secunde / 45 de minute: fie îl arunci în tigaie foarte încinsă un minut și jumătate, fie îl fierbi lent în sos de roșii trei sferturi de oră. Nimic între.',
        'Colesterol 230 mg/100 g — cel mai mare din categorie. Pentru majoritatea oamenilor nu contează, dar merită știut.',
        'Uscarea e crucială: calamarul ud fierbe în propria apă și iese elastic.'
      ],
      warnings: [
        'Alergen major: moluște.',
        'Colesterol foarte ridicat.'
      ],
      storage: 'Congelator -18 °C.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'medium',
      sources: ['kaufland.ro', 'selgros.ro', 'USDA squid raw']
    },

    {
      id: 'f-caracatita-congelata',
      name: 'Frozen Octopus',
      nameRo: 'Caracatiță congelată',
      brand: 'generic (Selgros / Metro)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🐙',
      unit: 'g',
      stores: [
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelatoare fructe de mare, caracatiță întreagă sau tentacule',
          priceRon: 64.9,
          packGrams: 500,
          packLabel: 'pungă 500 g (~130 lei/kg)',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Congelatoare horeca',
          priceRon: 119,
          packGrams: 1000,
          packLabel: 'caracatiță întreagă ~1 kg',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Congelator fructe de mare',
          priceRon: 74.9,
          packGrams: 500,
          packLabel: 'tentacule 500 g',
          note: 'Rar, apare la sărbători.'
        }
      ],
      sibiuNote: 'Produs de nișă în Sibiu. Selgros Șelimbăr e singurul loc unde îl găsești cu oarecare constanță. Congelarea îl frăgezește, deci nu e un dezavantaj.',
      per100g: {
        kcal: 82,
        protein: 15,
        carbs: 2,
        sugars: 0,
        fat: 1,
        satFat: 0.25,
        fiber: 0,
        salt: 0.7
      },
      micros: {
        b12Ug: 20,
        ironMg: 5.3,
        zincMg: 1.7,
        potassiumMg: 350,
        cholesterolMg: 48,
        omega3Mg: 250
      },
      serving: {
        grams: 180,
        label: '1 porție (180 g crud)'
      },
      effort: 4,
      timeMin: 75,
      activeTimeMin: 20,
      cooking: {
        method: 'boil',
        difficulty: 'medium',
        equipment: ['oală mare', 'furculiță', 'grătar sau tigaie'],
        steps: [
          'Dezgheață peste noapte la frigider.',
          'Pune într-o oală cu apă, o ceapă, foi de dafin și boabe de piper. Fără sare la început.',
          'Fierbe la foc mic 45–60 de minute, până intră furculița ușor în partea groasă a tentaculului.',
          'Lasă să se răcească în propria apă 20 de minute.',
          'Taie tentaculele și rumenește-le 2 minute pe grătar sau în tigaie cu ulei de măsline.',
          'Servește cu ulei de măsline, lămâie și boia afumată.'
        ],
        yieldNote: '1 kg caracatiță crudă → ~600 g după fierbere (pierde mult din apă).'
      },
      taste: {
        profile: 'Dulceag-marin, delicat, cu note de nucă; foarte diferit de calamar',
        intensity: 3,
        sweetness: 2,
        saltiness: 2,
        umami: 5,
        richness: 2,
        texture: 'Când e făcută bine: fragedă și mătăsoasă. Când nu: cauciuc pur.',
        notes: 'Cel mai mare risc de eșec din categorie, dar și cea mai mare răsplată. Congelarea prealabilă chiar ajută la frăgezire.'
      },
      stats: {
        taste: 80,
        satiety: 74,
        convenience: 18,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 4,
        snack: 1,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Proiect de weekend. Fierbe o dată, folosește în 3 mese.',
      tags: ['frozen', 'high-protein', 'protein-dense', 'low-fat', 'low-kcal', 'iron-rich', 'b12', 'premium', 'batch-cook'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Ulei de măsline', 'Boia afumată', 'Cartofi fierți', 'Lămâie', 'Măsline', 'Vin alb'],
      tips: [
        'Nu săra apa de fierbere de la început — sarea întărește proteinele. Sărează după ce e fiartă.',
        'Testul furculiței: dacă intră fără rezistență în partea cea mai groasă a tentaculului, e gata.',
        'Caracatița congelată e mai fragedă decât cea proaspătă — cristalele de gheață rup fibrele musculare.',
        'Fierbe 1 kg o dată. Rece, în salată cu cartofi și ulei de măsline, ține 3 zile la frigider.'
      ],
      warnings: [
        'Alergen major: moluște.',
        'Preț mare și disponibilitate incertă în Sibiu.'
      ],
      storage: 'Congelator -18 °C. Fiartă, frigider 3 zile.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'low',
      sources: ['selgros.ro', 'USDA octopus raw']
    },

    {
      id: 'f-fructe-mare-mix-congelat',
      name: 'Frozen Seafood Mix',
      nameRo: 'Mix de fructe de mare congelat',
      brand: 'Nixe (Lidl) / K-Classic (Kaufland)',
      category: 'fish-seafood',
      subcategory: 'Fructe de mare',
      emoji: '🌊',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Congelator fructe de mare, pungă cu mix colorat',
          priceRon: 24.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: 'Creveți, calamar, midii, uneori scoici.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator fructe de mare',
          priceRon: 27.99,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Congelatoare',
          priceRon: 54.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai simplă cale de a face paste cu fructe de mare într-un oraș fără mare. 15 minute de la congelator la farfurie.',
      per100g: {
        kcal: 78,
        protein: 13,
        carbs: 2.5,
        sugars: 0,
        fat: 1.2,
        satFat: 0.3,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        b12Ug: 8,
        ironMg: 2.5,
        zincMg: 1.6,
        potassiumMg: 260,
        cholesterolMg: 110,
        omega3Mg: 400
      },
      serving: {
        grams: 200,
        label: '1/2 pungă (200 g)'
      },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 12,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'strecurătoare'],
        steps: [
          'Dezgheață 15 minute în strecurătoare și scurge foarte bine.',
          'Călește usturoi și chili în ulei de măsline.',
          'Adaugă mixul și gătește 3–4 minute la foc mare, amestecând.',
          'Stinge cu vin alb sau suc de lămâie și adaugă pătrunjel.',
          'Amestecă imediat cu paste fierte.'
        ],
        yieldNote: '400 g pungă → ~320 g după scurgerea glazurii și a apei.'
      },
      taste: {
        profile: 'Marin, sărat, cu texturi mixte; calitatea variază mult între mărci',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 1,
        texture: 'Amestecat: creveți fermi, calamar elastic, midii mici moi',
        notes: 'Nu e la nivelul ingredientelor separate, dar e practic și dă gust de mare unei farfurii de paste.'
      },
      stats: {
        taste: 66,
        satiety: 68,
        convenience: 72,
        versatility: 72
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: '13 g proteină la 78 kcal — bun, dar mai slab decât creveții simpli.',
      tags: ['protein-dense', 'frozen', 'low-fat', 'low-kcal', 'b12', 'iron-rich', 'meal-prep', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Paste', 'Usturoi', 'Vin alb', 'Roșii cherry', 'Pătrunjel', 'Chili'],
      tips: [
        'Scurge-l foarte bine. Mixurile congelate lasă multă apă și îți transformă tigaia într-o oală de fiert.',
        'Gătește-l ultimul: pune-l în sosul deja gata, 3 minute, și oprește focul.',
        'Verifică pe pungă compoziția procentuală. Mixurile ieftine sunt 70% calamar, care e cel mai ieftin ingredient.'
      ],
      warnings: [
        'Alergeni majori: crustacee și moluște.',
        'Glazura de gheață poate fi 15–20% din greutatea declarată.'
      ],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~9 luni congelat',
      dataConfidence: 'medium',
      sources: ['lidl.ro', 'kaufland.ro', 'valori medii pentru mix creveți/calamar/midii']
    },

    {
      id: 'f-surimi-batoane-crab',
      name: 'Surimi Crab Sticks',
      nameRo: 'Batoane surimi cu aromă de crab',
      brand: 'Vici / Carrefour / K-Classic',
      category: 'fish-seafood',
      subcategory: 'Produse din surimi',
      emoji: '🚩',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Frigider delicatese, lângă mezeluri, pachete roșu-alb',
          priceRon: 12.99,
          packGrams: 250,
          packLabel: 'pachet 250 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Frigider pește, marca proprie',
          priceRon: 17.99,
          packGrams: 400,
          packLabel: 'pachet 400 g',
          note: 'Există și pachet de 1 kg.'
        },
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Frigider delicatese',
          priceRon: 11.99,
          packGrams: 250,
          packLabel: 'pachet 250 g',
          note: ''
        }
      ],
      sibiuNote: 'Capcana clasică de proteină. Arată a fructe de mare, costă puțin, dar e mai aproape de o pâine decât de pește.',
      per100g: {
        kcal: 130,
        protein: 7,
        carbs: 16,
        sugars: 5,
        fat: 4,
        satFat: 0.4,
        fiber: 0.5,
        salt: 2
      },
      micros: {
        b12Ug: 0.3,
        potassiumMg: 90,
        cholesterolMg: 20,
        omega3Mg: 30,
        calciumMg: 20
      },
      serving: {
        grams: 100,
        label: '4 batoane (100 g)'
      },
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
        profile: 'Dulceag, ușor sărat, aromă artificială de crab peste o bază neutră de amidon',
        intensity: 2,
        sweetness: 3,
        saltiness: 3,
        umami: 2,
        richness: 1,
        texture: 'Fibroasă artificial, elastică, se desface în fâșii',
        notes: 'Copiii îl adoră, adulții îl folosesc în salate. Nu are nimic de-a face cu crabul.'
      },
      stats: {
        taste: 55,
        satiety: 35,
        convenience: 98,
        versatility: 58
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 1,
        lunch: 3,
        snack: 3,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Mai mult carbohidrat decât proteină. Nu îl folosi ca sursă de proteină.',
      tags: ['ready-to-eat', 'grab-and-go', 'processed', 'kid-friendly', 'budget', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Porumb dulce', 'Maioneză', 'Ou fiert', 'Salată de varză', 'Orez pentru sushi'],
      tips: [
        'CAPCANA: 7 g proteină și 16 g carbohidrați la 100 g. Un baton are ~1,4 g proteină. Ca să faci 30 g proteină ai nevoie de peste 400 g de surimi — și 64 g de carbohidrați pe deasupra.',
        'Ingredientul principal după apă e surimi (pastă de polac spălată), în proporție de doar 20–35%. Restul e amidon, albuș, ulei, zahăr și arome.',
        'Alternativa cinstită la același preț: o cutie de ton la 8 lei îți dă 26 g proteină și 0 g carbohidrați.',
        'Conține gluten (amidon de grâu) la majoritatea mărcilor — verifică dacă ești sensibil.'
      ],
      warnings: [
        'CAPCANĂ DE PROTEINĂ: doar 7 g proteină la 100 g, cu 16 g carbohidrați.',
        'Conține gluten și adesea ou și soia.',
        'Sodiu ridicat (2 g sare/100 g).'
      ],
      storage: 'Frigider 0–4 °C. După deschidere, 3 zile.',
      shelfLife: '~4 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Etichete Vici și Carrefour batoane surimi', 'openfoodfacts.org', 'carrefour.ro']
    },

    {
      id: 'f-icre-crap-sarate',
      name: 'Salted Carp Roe',
      nameRo: 'Icre de crap sărate',
      brand: 'generic (Piața Cibin / pescărie)',
      category: 'fish-seafood',
      subcategory: 'Icre & paste de pește',
      emoji: '🟠',
      unit: 'g',
      stores: [
        {
          name: 'Piața Cibin',
          availability: 'seasonal',
          aisle: 'Hala de pește, borcănele mici la tarabele de pește',
          priceRon: 25,
          packGrams: 100,
          packLabel: 'borcănel 100 g',
          note: 'Sezon: primăvara, când se pescuiește crapul cu icre.'
        },
        {
          name: 'Pescărie',
          availability: 'occasional',
          aisle: 'Vitrina refrigerată',
          priceRon: 29,
          packGrams: 100,
          packLabel: 'borcănel 100 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Frigider delicatese, borcănele',
          priceRon: 32.99,
          packGrams: 100,
          packLabel: 'borcan 100 g',
          note: 'Rar, mai ales înainte de Paște.'
        }
      ],
      sibiuNote: 'Nu confunda icrele sărate (materie primă, 24 g proteină) cu salata de icre (produs finit, 3 g proteină și 60 g grăsime).',
      per100g: {
        kcal: 210,
        protein: 24,
        carbs: 2,
        sugars: 0,
        fat: 12,
        satFat: 2.8,
        fiber: 0,
        salt: 5
      },
      micros: {
        b12Ug: 10,
        vitDUg: 5,
        omega3Mg: 1500,
        potassiumMg: 220,
        cholesterolMg: 350,
        ironMg: 1.5
      },
      serving: {
        grams: 30,
        label: '2 linguri (30 g)'
      },
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
        profile: 'Foarte sărat, iodat, cu textură granulată care pocnește ușor între dinți',
        intensity: 5,
        sweetness: 0,
        saltiness: 5,
        umami: 5,
        richness: 4,
        texture: 'Boabe mici care se sparg, ușor lipicioase',
        notes: 'Se mănâncă în cantități mici. Direct pe pâine cu unt e mai bun decât bătut cu ulei.'
      },
      stats: {
        taste: 62,
        satiety: 45,
        convenience: 90,
        versatility: 32
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 3,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Se consumă 20–40 g o dată — sarea nu permite mai mult.',
      tags: ['ready-to-eat', 'high-protein', 'protein-dense', 'omega3', 'b12', 'high-sodium', 'romanian-classic', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine cu unt', 'Ceapă verde', 'Lămâie', 'Măsline', 'Ou fiert'],
      tips: [
        'Icrele brute au 24 g proteină la 100 g. Odată bătute cu ulei pentru salată, proteina scade la 3–4 g pentru că 60% din produs devine ulei.',
        'Dacă vrei salată de icre cu proteină decentă, bate 100 g de icre cu 150 g de iaurt grecesc gros în loc de 200 ml ulei. Iese 10 g proteină la 100 g în loc de 3.',
        '5 g sare la 100 g — o porție de 30 g e deja 1,5 g de sare.'
      ],
      warnings: [
        'Sodiu foarte ridicat.',
        'Colesterol foarte ridicat (350 mg/100 g).',
        'Produs crud sărat — nerecomandat în sarcină.'
      ],
      storage: 'Frigider 0–4 °C, în borcan închis. 2 săptămâni.',
      shelfLife: '~2–3 săptămâni refrigerat',
      dataConfidence: 'low',
      sources: ['Piața Cibin, observație de piață', 'valori tipice icre de crap sărate']
    },

    {
      id: 'f-salata-icre-crap',
      name: 'Carp Roe Salad (Whipped)',
      nameRo: 'Salată de icre de crap',
      brand: 'Negro 2000 / Gastronatura',
      category: 'fish-seafood',
      subcategory: 'Icre & paste de pește',
      emoji: '🥄',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Frigider delicatese, caserole albe mici',
          priceRon: 12.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Frigider delicatese / salate',
          priceRon: 13.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Frigider salate',
          priceRon: 11.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai mare capcană nutrițională din raftul de pește. Sună a proteină de lux, e de fapt ulei bătut.',
      per100g: {
        kcal: 560,
        protein: 3,
        carbs: 3,
        sugars: 0.5,
        fat: 59,
        satFat: 5.5,
        fiber: 0.3,
        salt: 1.5
      },
      micros: {
        b12Ug: 0.5,
        cholesterolMg: 45,
        omega3Mg: 150,
        potassiumMg: 60
      },
      serving: {
        grams: 50,
        label: '2–3 linguri (50 g)'
      },
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
        profile: 'Cremos, gras, ușor sărat, cu aromă discretă de icre peste o bază de ulei',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 5,
        texture: 'Spumă densă, untoasă, uniformă',
        notes: 'Delicioasă pe pâine prăjită. Doar nu te amăgi că mănânci pește.'
      },
      stats: {
        taste: 74,
        satiety: 30,
        convenience: 98,
        versatility: 25
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 1,
        lunch: 2,
        snack: 2,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Sursă de grăsime, nu de proteină. Tratează-o ca pe maioneză.',
      tags: ['ready-to-eat', 'no-cook', 'high-kcal', 'high-sodium', 'processed', 'romanian-classic', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită', 'Ceapă roșie', 'Măsline', 'Lămâie', 'Roșii'],
      tips: [
        'CAPCANA: 3 g proteină și 59 g grăsime la 100 g. O lingură (25 g) are 140 kcal și 0,75 g proteină. E maioneză cu aromă de icre.',
        'Icrele reale reprezintă adesea sub 10% din compoziție — restul e ulei de floarea-soarelui, apă și griș.',
        'Versiunea de casă cu iaurt grecesc: 100 g icre + 200 g iaurt grecesc + lămâie + ceapă = 9 g proteină/100 g și 120 kcal în loc de 560.',
        'Verifică eticheta: unele produse au sub 4% icre. Cele artizanale ajung la 20–25%.'
      ],
      warnings: [
        'CAPCANĂ DE PROTEINĂ: 560 kcal și doar 3 g proteină la 100 g.',
        'Ultra-densă caloric — ușor de mâncat 300 kcal fără să observi.'
      ],
      storage: 'Frigider 0–4 °C. După deschidere, 3–4 zile.',
      shelfLife: '~3 săptămâni sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Negro 2000 salată de icre', 'eatntrack.ro', 'openfoodfacts.org']
    },

    {
      id: 'f-icre-stiuca-tarama',
      name: 'Pike Roe / Tarama',
      nameRo: 'Icre de știucă (tarama)',
      brand: 'generic (pescărie / delicatese)',
      category: 'fish-seafood',
      subcategory: 'Icre & paste de pește',
      emoji: '🟡',
      unit: 'g',
      stores: [
        {
          name: 'Pescărie',
          availability: 'seasonal',
          aisle: 'Vitrina refrigerată, borcănele mici',
          priceRon: 45,
          packGrams: 100,
          packLabel: 'borcănel 100 g',
          note: 'Sezon strict: martie–aprilie.'
        },
        {
          name: 'Piața Cibin',
          availability: 'seasonal',
          aisle: 'Hala de pește, la tarabele mari',
          priceRon: 40,
          packGrams: 100,
          packLabel: 'borcănel 100 g',
          note: 'Cere să guști înainte — calitatea variază mult.'
        },
        {
          name: 'Online RO',
          availability: 'online',
          aisle: '—',
          priceRon: 55,
          packGrams: 100,
          packLabel: 'borcan 100 g',
          note: 'Magazine de delicatese cu livrare.'
        }
      ],
      sibiuNote: 'Delicatesă românească de sezon, foarte greu de găsit în Sibiu în afara lunilor martie–aprilie. Icrele de știucă autentice sunt scumpe și rare.',
      per100g: {
        kcal: 190,
        protein: 28,
        carbs: 1,
        sugars: 0,
        fat: 8,
        satFat: 1.8,
        fiber: 0,
        salt: 3.5
      },
      micros: {
        b12Ug: 12,
        vitDUg: 6,
        omega3Mg: 1800,
        potassiumMg: 230,
        cholesterolMg: 400,
        ironMg: 1.8
      },
      serving: {
        grams: 30,
        label: '2 linguri (30 g)'
      },
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
        profile: 'Sărat, iodat, cu boabe mari galben-portocalii care pocnesc; gust mai fin decât icrele de crap',
        intensity: 5,
        sweetness: 0,
        saltiness: 5,
        umami: 5,
        richness: 3,
        texture: 'Boabe mari, ferme, care se sparg net',
        notes: 'Cea mai bună icra românească. Se mănâncă simplu, pe pâine cu unt, cu ceapă verde.'
      },
      stats: {
        taste: 74,
        satiety: 45,
        convenience: 88,
        versatility: 25
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 3,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Delicatesă, nu strategie nutrițională. 30 g o dată e maximul rezonabil.',
      tags: ['ready-to-eat', 'very-high-protein', 'protein-dense', 'omega3', 'b12', 'high-sodium', 'premium', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine cu unt', 'Ceapă verde', 'Lămâie', 'Smântână', 'Ou fiert'],
      tips: [
        '28 g proteină la 100 g — cea mai densă proteină din categorie. Dar sarea limitează porția la 30 g.',
        'Multe produse etichetate „tarama" în comerț sunt de fapt icre de cod sau de hering colorate. Icrele de știucă adevărate au boabe mari, galben-portocalii, și sunt scumpe.',
        'Nu le bate cu ulei — ai distruge exact lucrul pentru care ai plătit. Se mănâncă simple.'
      ],
      warnings: [
        'Sodiu foarte ridicat (3,5 g sare/100 g).',
        'Colesterol foarte ridicat (400 mg/100 g).',
        'Produs crud sărat — nerecomandat în sarcină.',
        'Etichetare frecvent înșelătoare — verifică specia.'
      ],
      storage: 'Frigider 0–4 °C. 2 săptămâni în borcan închis.',
      shelfLife: '~2 săptămâni refrigerat',
      dataConfidence: 'low',
      sources: ['Piața Cibin, observație de piață', 'valori tipice icre de știucă sărate']
    },

    {
      id: 'f-pasta-ton-conserva',
      name: 'Tuna Pâté / Spread',
      nameRo: 'Pastă de ton (pate de pește)',
      brand: 'generic (Kaufland / Carrefour)',
      category: 'fish-seafood',
      subcategory: 'Icre & paste de pește',
      emoji: '🧈',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve pește / raft pateuri',
          priceRon: 8.99,
          packGrams: 100,
          packLabel: 'cutie 100 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Raft pateuri și paste tartinabile',
          priceRon: 9.49,
          packGrams: 100,
          packLabel: 'cutie 100 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 7.99,
          packGrams: 100,
          packLabel: 'cutie 100 g',
          note: ''
        }
      ],
      sibiuNote: 'Convenabil pentru sandvișuri, dar cu jumătate din proteina unei conserve simple de ton, la același preț.',
      per100g: {
        kcal: 230,
        protein: 14,
        carbs: 3,
        sugars: 1,
        fat: 18,
        satFat: 4,
        fiber: 0.4,
        salt: 1.6
      },
      micros: {
        b12Ug: 1.5,
        potassiumMg: 180,
        cholesterolMg: 45,
        omega3Mg: 200
      },
      serving: {
        grams: 50,
        label: '1/2 cutie (50 g)'
      },
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
        profile: 'Cremos, sărat, gust de ton peste o bază grasă cu condimente',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 4,
        texture: 'Pastă fină, uniformă, se întinde ușor',
        notes: 'Practic pentru micul dejun rapid. Dar e ton diluat cu grăsime.'
      },
      stats: {
        taste: 60,
        satiety: 52,
        convenience: 98,
        versatility: 45
      },
      timing: {
        breakfast: 4,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 3,
        snack: 3,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Sandviș rapid; verifică grăsimea dacă ești în deficit.',
      tags: ['ready-to-eat', 'shelf-stable', 'processed', 'budget', 'high-sodium', 'breakfast'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită', 'Castraveți', 'Ceapă verde', 'Ou fiert', 'Roșii'],
      tips: [
        'Compară: pasta de ton are 14 g proteină și 18 g grăsime; conserva simplă de ton are 26 g proteină și 0,7 g grăsime, la același preț.',
        'Fă-o singur: 1 cutie de ton scurs + 2 linguri de iaurt grecesc + muștar + lămâie = 22 g proteină la 100 g și 90 kcal.',
        'Verifică ingredientele — multe „paste de pește" au ulei ca prim ingredient după pește.'
      ],
      warnings: [
        'Grăsime ridicată, proteină diluată.',
        'Sodiu ridicat.'
      ],
      storage: 'Cămară. După deschidere, frigider 2 zile.',
      shelfLife: '~2 ani sigilat',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'valori tipice pate de pește']
    },

    {
      id: 'f-salata-ton-gata',
      name: 'Ready-Made Tuna Salad',
      nameRo: 'Salată de ton gata preparată',
      brand: 'generic (Kaufland / Carrefour, raft salate)',
      category: 'fish-seafood',
      subcategory: 'Produse gata preparate',
      emoji: '🥣',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Frigider salate, lângă salata de boeuf și cea de vinete',
          priceRon: 11.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Frigider salate preparate',
          priceRon: 12.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'usual',
          aisle: 'Frigider salate',
          priceRon: 13.99,
          packGrams: 150,
          packLabel: 'caserolă 150 g',
          note: ''
        }
      ],
      sibiuNote: 'Arată bine în vitrină, dar maioneza domină. Verifică eticheta înainte să o consideri masă cu proteină.',
      per100g: {
        kcal: 245,
        protein: 11,
        carbs: 5,
        sugars: 2,
        fat: 20,
        satFat: 2.5,
        fiber: 0.5,
        salt: 1.2
      },
      micros: {
        b12Ug: 1.2,
        potassiumMg: 150,
        cholesterolMg: 40,
        omega3Mg: 150
      },
      serving: {
        grams: 150,
        label: '1 caserolă (150 g)'
      },
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
        profile: 'Cremos, sărat, dominat de maioneză, cu bucăți de ton și porumb',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 3,
        richness: 5,
        texture: 'Cremoasă și moale, cu bucăți crocante de porumb sau castraveți murați',
        notes: 'Gustoasă, dar 150 g înseamnă 370 kcal pentru 16 g proteină. Un raport slab.'
      },
      stats: {
        taste: 68,
        satiety: 48,
        convenience: 98,
        versatility: 25
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 3,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Prânz rapid, dar cu 2/3 din calorii venind din grăsime.',
      tags: ['ready-to-eat', 'grab-and-go', 'office-lunch', 'processed', 'high-kcal', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine prăjită', 'Salată verde', 'Roșii', 'Castraveți', 'Ardei'],
      tips: [
        'Alternativa de 3 minute: 1 cutie de ton scurs + 3 linguri de iaurt grecesc + muștar + porumb = 32 g proteină, 250 kcal, 12 lei.',
        'Verifică pe etichetă procentul de ton — la variantele ieftine e sub 30%, restul fiind maioneză și legume.',
        'Se strică repede: are maioneză și e ținută la vitrină. Verifică data și nu o lăsa la temperatura camerei.'
      ],
      warnings: [
        'Conține ou (maioneză) și adesea muștar — alergeni.',
        'Densitate calorică mare pentru proteina livrată.'
      ],
      storage: 'Frigider 0–4 °C. Se consumă în 24 de ore de la deschidere.',
      shelfLife: '~5–7 zile sigilat',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'valori tipice salate de ton cu maioneză din comerț']
    },

    {
      id: 'f-sushi-caserola',
      name: 'Supermarket Sushi Box',
      nameRo: 'Sushi la caserolă',
      brand: 'Kaufland / Carrefour (raion sushi)',
      category: 'fish-seafood',
      subcategory: 'Produse gata preparate',
      emoji: '🍱',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Standul de sushi de lângă raionul de pește, caserole refrigerate',
          priceRon: 34.99,
          packGrams: 220,
          packLabel: 'caserolă 220 g, 8–10 bucăți',
          note: 'Reducere 30–50% cu 2 ore înainte de închidere.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Stand sushi în hipermarket',
          priceRon: 37.99,
          packGrams: 220,
          packLabel: 'caserolă 220 g',
          note: ''
        },
        {
          name: 'Auchan',
          availability: 'occasional',
          aisle: 'Raion preparate refrigerate',
          priceRon: 36.99,
          packGrams: 220,
          packLabel: 'caserolă 220 g',
          note: ''
        }
      ],
      sibiuNote: 'Kaufland din Shopping City și cel de pe Șos. Alba Iulia au stand de sushi. Se face dimineața; după ora 18 e deja obosit — dar și cu 40% mai ieftin.',
      per100g: {
        kcal: 150,
        protein: 7,
        carbs: 26,
        sugars: 3,
        fat: 2,
        satFat: 0.4,
        fiber: 1,
        salt: 1.2
      },
      micros: {
        b12Ug: 0.8,
        potassiumMg: 120,
        cholesterolMg: 15,
        omega3Mg: 250,
        ironMg: 0.5
      },
      serving: {
        grams: 220,
        label: '1 caserolă (220 g, 8–10 bucăți)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['bețișoare'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Orez dulce-acrișor cu alge și puțin pește; calitatea variază enorm de la o zi la alta',
        intensity: 2,
        sweetness: 2,
        saltiness: 2,
        umami: 3,
        richness: 2,
        texture: 'Orez uneori tare la frigider, pește moale, alge elastice',
        notes: 'Nu e sushi de restaurant. Dacă orezul a stat la frigider, textura e compromisă. Cumpără-l dimineața.'
      },
      stats: {
        taste: 58,
        satiety: 50,
        convenience: 96,
        versatility: 20
      },
      timing: {
        breakfast: 1,
        preWorkout: 4,
        postWorkout: 3,
        lunch: 4,
        snack: 3,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Predominant carbohidrați — mai potrivit înainte de antrenament decât după.',
      tags: ['ready-to-eat', 'grab-and-go', 'office-lunch', 'processed', 'mid-price', 'pre-workout'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Sos de soia', 'Wasabi', 'Ghimbir murat', 'Supă miso', 'Edamame'],
      tips: [
        'CAPCANA: o caserolă de 220 g are doar ~15 g proteină și 57 g carbohidrați, pentru 35 lei. Este orez scump.',
        'Multe caserole de supermarket folosesc surimi în loc de crab și somon afumat în loc de crud — verifică ingredientele.',
        'Reducerea de seară (30–50%) e cea mai bună afacere, dar orezul deja s-a întărit la frigider. Lasă caserola 20 de minute la temperatura camerei înainte să mănânci.',
        'Dacă vrei proteină de la sushi, cere sashimi sau nigiri — nu maki cu castravete și avocado.'
      ],
      warnings: [
        'Conține gluten (sos de soia, surimi) și adesea soia și ou.',
        'Pește crud — nerecomandat în sarcină.',
        'Densitate proteică mică raportat la preț.'
      ],
      storage: 'Frigider 0–4 °C. Se consumă în ziua cumpărării.',
      shelfLife: '24 de ore',
      dataConfidence: 'low',
      sources: ['kaufland.ro', 'observație stand sushi Sibiu', 'valori tipice mix maki/nigiri']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
