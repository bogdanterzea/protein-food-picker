/* =========================================================================
 * PROTEIN ATLAS SIBIU — READY MEALS, FROZEN & EATING OUT
 * File: js/data/07-ready-meals.js
 * Items: 60
 * Category slug: ready-meals
 * ID prefix: r-
 * Last researched: 2026-08
 *
 * Regula de aur a categoriei: aici NU contează proteina la 100 g, ci
 * proteina pe pachet / pe porție reală. Mâncarea gata e apoasă și grasă:
 * 8 g/100 g pare jalnic, dar 400 g de caserolă înseamnă 32 g proteină.
 * În schimb, raportul proteină/calorie e aproape întotdeauna prost, iar
 * prețul per gram de proteină e al doilea cel mai rău din tot atlasul,
 * după suplimente. Fii sincer cu tine când cumperi de aici.
 * ========================================================================= */
(function () {
  'use strict';

  const ITEMS = [

    {
      id: 'r-salata-boeuf-pui-chef-select',
      name: 'Chicken Russian Salad Tub',
      nameRo: 'Salată de boeuf cu carne de pui',
      brand: 'Chef Select (Lidl)',
      category: 'ready-meals',
      subcategory: 'Salate reci la caserolă',
      emoji: '🥗',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Raft refrigerat Chef Select, lângă sandvișuri și wrapuri',
          priceRon: 14.99,
          packGrams: 400,
          packLabel: 'caserolă 400 g',
          note: 'Vezi eticheta galbenă — se reduce cu 30% în ultima zi.'
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Vitrina refrigerată de la intrarea în raionul de mezeluri',
          priceRon: 16.9,
          packGrams: 400,
          packLabel: 'caserolă 400 g',
          note: 'Marca proprie, valori foarte apropiate.'
        }
      ],
      sibiuNote: 'Toate cele patru magazine Lidl din Sibiu (Vasile Aaron, Turnișor, Șelimbăr, Hipodrom) o au permanent; în Șelimbăr rafturile se golesc după ora 18.',
      per100g: {
        kcal: 191,
        protein: 4.9,
        carbs: 7.6,
        sugars: 1.8,
        fat: 15.2,
        satFat: 2.1,
        fiber: 1.5,
        salt: 1.1
      },
      serving: {
        grams: 200,
        label: 'jumătate de caserolă (200 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Cremoasă, dulceagă de la maioneză și morcov, cu gust vag de murături',
        intensity: 2,
        sweetness: 2,
        saltiness: 3,
        umami: 2,
        richness: 5,
        texture: 'Moale, pastoasă, aproape fără nimic de mestecat',
        notes: 'Gust de nostalgie de Crăciun, dar nutrițional este maioneză cu decor. Nu o cumpăra pentru proteină.'
      },
      stats: {
        taste: 58,
        satiety: 40,
        convenience: 96,
        versatility: 22
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
      timingNote: 'Prea grasă și prea săracă în proteină pentru orice legat de antrenament.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'processed', 'high-kcal', 'mid-price', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Ouă fierte', 'Piept de pui feliat', 'Roșii', 'Pâine integrală'],
      tips: [
        'Toată caserola de 400 g are doar ~20 g proteină și 760 kcal — adaugă 2 ouă fierte sau 100 g piept de pui ca să ajungi la ceva decent.',
        'Dacă vrei totuși gustul, ia jumătate de porție și completează cu iaurt grecesc simplu peste — scazi grăsimea și urci proteina.',
        'Consum-o în maxim 24 h de la deschidere: maioneza industrială cu ou pasteurizat nu iartă.'
      ],
      warnings: ['Conține ou și muștar. 15 g grăsime/100 g — cea mai proastă densitate proteică din raftul refrigerat.'],
      storage: 'Frigider 2–5 °C, se consumă în 24 h după deschidere.',
      shelfLife: '~7 zile sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Chef Select Lidl', 'eatntrack.ro']
    },

    {
      id: 'r-salata-ton-caserola',
      name: 'Tuna Salad Tub',
      nameRo: 'Salată cu ton la caserolă',
      brand: 'Chef Select (Lidl)',
      category: 'ready-meals',
      subcategory: 'Salate reci la caserolă',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Raft refrigerat Chef Select, rândul de jos',
          priceRon: 11.99,
          packGrams: 200,
          packLabel: 'caserolă 200 g',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'occasional',
          aisle: 'Vitrina de gustări reci de lângă case',
          priceRon: 13.5,
          packGrams: 200,
          packLabel: 'caserolă 200 g',
          note: 'Mai scumpă, dar deschis până seara târziu.'
        }
      ],
      sibiuNote: 'În Sibiu o găsești constant la Lidl Vasile Aaron și Turnișor; la Promenada nu există Lidl, deci pentru mall alternativa e Mega Image sau Kaufland.',
      per100g: {
        kcal: 178,
        protein: 8.5,
        carbs: 6.5,
        sugars: 2,
        fat: 13.5,
        satFat: 2,
        fiber: 1.2,
        salt: 1
      },
      micros: {
        b12Ug: 1.2,
        omega3Mg: 180,
        cholesterolMg: 30
      },
      serving: {
        grams: 200,
        label: '1 caserolă întreagă (200 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Sărat-marin, cu maioneză și ceapă, ușor acrișor de la castraveți',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 4,
        texture: 'Moale, umedă, cu bucăți mici de legume',
        notes: 'Mai onestă decât salata de boeuf, dar tot maioneza duce caloriile.'
      },
      stats: {
        taste: 60,
        satiety: 55,
        convenience: 97,
        versatility: 40
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 3,
        beforeBed: 2
      },
      timingNote: 'Prânz de birou rapid, dar completeaz-o cu legume ca să nu rămâi flămând peste o oră.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'office-lunch', 'omega3', 'processed', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lipie integrală', 'Castraveți', 'Ou fiert', 'Roșii cherry'],
      tips: [
        'Caserola de 200 g = ~17 g proteină și ~356 kcal. Un borcan de ton la conservă de 8 lei îți dă 24 g proteină la 130 kcal — comparația e brutală.',
        'Pune-o pe două felii de pâine integrală și ai un prânz de 25 g proteină pentru ~20 lei.',
        'Verifică pe etichetă procentul de ton: sub 25% e practic salată de maioneză.'
      ],
      warnings: ['Conține pește și ou. Sodiu ridicat: 2 g sare per caserolă.'],
      storage: 'Frigider 2–5 °C, se consumă imediat după deschidere.',
      shelfLife: '~6 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Eticheta Chef Select Lidl', 'calo.ro']
    },

    {
      id: 'r-bol-salata-caesar-pui',
      name: 'Caesar Chicken Salad Bowl',
      nameRo: 'Bol de salată Caesar cu pui',
      brand: 'generic (Carrefour / Lidl)',
      category: 'ready-meals',
      subcategory: 'Boluri de salată gata făcute',
      emoji: '🥬',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Vitrina de salate proaspete de lângă raionul de legume',
          priceRon: 19.9,
          packGrams: 250,
          packLabel: 'bol 250 g cu dressing separat',
          note: 'Shopping City Sibiu are stoc mare la prânz.'
        },
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Raft refrigerat Chef Select',
          priceRon: 16.99,
          packGrams: 240,
          packLabel: 'bol 240 g',
          note: 'Ceva mai ieftin, cu mai puțin pui.'
        },
        {
          name: 'Mega Image',
          availability: 'usual',
          aisle: 'Vitrina Gusturi Proaspete',
          priceRon: 21.5,
          packGrams: 250,
          packLabel: 'bol 250 g',
          note: ''
        }
      ],
      sibiuNote: 'Cel mai bun stoc în Sibiu e la Carrefour din Shopping City între 11:00 și 14:00; după ora 19 rămân doar bolurile vegetariene.',
      per100g: {
        kcal: 145,
        protein: 9.5,
        carbs: 8,
        sugars: 1.6,
        fat: 8,
        satFat: 1.8,
        fiber: 1.5,
        salt: 0.9
      },
      serving: {
        grams: 250,
        label: '1 bol întreg (250 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['furculiță'],
        steps: [
          'Scoate plicul de dressing și crutoanele.',
          'Toarnă dressingul, închide capacul și scutură bolul.',
          'Adaugă crutoanele la final ca să rămână crocante.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Verde, crocant, cu dressing cremos de parmezan și note de anșoa',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Frunze crocante, cuburi de pui uscățele, crutoane',
        notes: 'Puiul e mereu prea puțin și prea uscat; dressingul salvează totul.'
      },
      stats: {
        taste: 66,
        satiety: 62,
        convenience: 94,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Prânz bun în zilele de cutting, dar prea sărac în calorii pentru un post-workout serios.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'office-lunch', 'cutting', 'low-kcal', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Ouă fierte ambalate', 'Iaurt grecesc', 'Pâine integrală', 'Ton la conservă'],
      tips: [
        'Bolul întreg = ~24 g proteină la 363 kcal. E unul dintre puținele produse din raftul de gata-făcute cu raport proteină/calorie decent.',
        'Folosește doar jumătate din dressing: scazi 60–80 kcal fără să pierzi gustul.',
        'Dacă vrei să-l transformi în masă completă, aruncă peste el o conservă de ton scursă — ajungi la 45 g proteină cu 8 lei în plus.'
      ],
      warnings: ['Conține lapte, ou, gluten și pește (anșoa în dressing).'],
      storage: 'Frigider 2–5 °C, se consumă în ziua deschiderii.',
      shelfLife: '3–5 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete Carrefour Classic / Chef Select', 'valori tipice pentru salate Caesar ambalate']
    },

    {
      id: 'r-bol-salata-ton-fasole',
      name: 'Tuna and Bean Salad Bowl',
      nameRo: 'Bol de salată cu ton și fasole',
      brand: 'generic (Carrefour / Mega Image)',
      category: 'ready-meals',
      subcategory: 'Boluri de salată gata făcute',
      emoji: '🫘',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Vitrina de salate proaspete, lângă bolurile Caesar',
          priceRon: 18.9,
          packGrams: 250,
          packLabel: 'bol 250 g',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'occasional',
          aisle: 'Vitrina Gusturi Proaspete',
          priceRon: 20.9,
          packGrams: 250,
          packLabel: 'bol 250 g',
          note: 'Rotație mică, verifică data.'
        }
      ],
      sibiuNote: 'Se găsește mai rar decât Caesar; la Carrefour Shopping City apare de obicei marțea și vinerea, la livrarea de proaspete.',
      per100g: {
        kcal: 120,
        protein: 9,
        carbs: 9,
        sugars: 1.5,
        fat: 4.5,
        satFat: 0.8,
        fiber: 3,
        salt: 0.8
      },
      micros: {
        ironMg: 1.4,
        b12Ug: 0.9,
        omega3Mg: 220,
        potassiumMg: 280
      },
      serving: {
        grams: 250,
        label: '1 bol întreg (250 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['furculiță'],
        steps: [
          'Toarnă dressingul de lămâie peste bol.',
          'Amestecă bine ca fasolea să prindă gust.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Proaspăt, lămâios, cu fasole care dă corp și ton sărat',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Fasole moale, ton fibros, frunze crocante',
        notes: 'Cel mai sățios bol din vitrină datorită fibrelor din fasole.'
      },
      stats: {
        taste: 62,
        satiety: 78,
        convenience: 93,
        versatility: 48
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Fibrele + proteina îl fac cel mai bun prânz de birou din categoria asta.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'office-lunch', 'high-fiber', 'omega3', 'cutting', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine de secară', 'Ou fiert', 'Ulei de măsline', 'Ardei iute murat'],
      tips: [
        'Bolul de 250 g = ~22,5 g proteină la doar 300 kcal — cel mai bun raport proteină/calorie din tot raftul refrigerat.',
        'Fibrele din fasole (7,5 g pe bol) prelungesc sațietatea cu 2–3 ore față de un sandviș cu aceleași calorii.',
        'Dacă îl mănânci la birou, ține plicul de dressing separat până la masă — altfel frunzele se înmoaie.'
      ],
      warnings: ['Conține pește. Fasolea poate da balonare dacă nu ești obișnuit.'],
      storage: 'Frigider 2–5 °C, se consumă în ziua deschiderii.',
      shelfLife: '3–5 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete Carrefour Classic', 'valori tipice salate ton-fasole ambalate']
    },

    {
      id: 'r-sandvici-pui-supermarket',
      name: 'Packaged Chicken Sandwich',
      nameRo: 'Sandviș triunghi cu piept de pui',
      brand: 'Chef Select (Lidl) / Carrefour',
      category: 'ready-meals',
      subcategory: 'Sandvișuri & wrapuri ambalate',
      emoji: '🥪',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Frigiderul de la intrare, lângă case',
          priceRon: 10.99,
          packGrams: 160,
          packLabel: 'sandviș triunghi 160 g',
          note: 'Cel mai ieftin din oraș.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Vitrina K-to-go de lângă bistro',
          priceRon: 12.9,
          packGrams: 170,
          packLabel: 'sandviș 170 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Frigider mic lângă zona de pâine',
          priceRon: 9.99,
          packGrams: 150,
          packLabel: 'sandviș 150 g',
          note: 'Mai puțin pui, mai multă maioneză.'
        }
      ],
      sibiuNote: 'Kaufland Sibiu (Șos. Alba Iulia) și Kaufland Șelimbăr au vitrina K-to-go chiar la intrare — cea mai rapidă opțiune dacă ai 3 minute între două ședințe.',
      per100g: {
        kcal: 215,
        protein: 11,
        carbs: 24,
        sugars: 2.5,
        fat: 8,
        satFat: 2,
        fiber: 1.8,
        salt: 1.1
      },
      serving: {
        grams: 160,
        label: '1 sandviș întreg (160 g)'
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
        profile: 'Pâine moale, maioneză, felii subțiri de pui, salată ofilită',
        intensity: 2,
        sweetness: 2,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Moale peste tot, fără niciun contrast',
        notes: 'Îți ține de foame, dar nu-l va lăuda nimeni vreodată.'
      },
      stats: {
        taste: 48,
        satiety: 55,
        convenience: 100,
        versatility: 20
      },
      timing: {
        breakfast: 3,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Bun ca gustare de urgență între ședințe; slab ca masă principală.',
      tags: ['ready-to-eat', 'grab-and-go', 'portable', 'no-cook', 'office-lunch', 'processed', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Iaurt grecesc', 'Ouă fierte ambalate', 'Lapte cu proteină', 'Măr'],
      tips: [
        'Un sandviș = ~17,6 g proteină și 344 kcal. Două sandvișuri costă 22 lei pentru 35 g proteină — un iaurt grecesc de 6 lei îți dă 20 g.',
        'Dacă îl iei ca prânz, adaugă un iaurt grecesc de 150 g: ajungi la 33 g proteină pentru 17 lei.',
        'Feliile de pui sunt de obicei pui format (cu apă și amidon) — nu te aștepta la piept de pui întreg.'
      ],
      warnings: ['Conține gluten, ou, lapte și muștar.'],
      storage: 'Frigider 2–7 °C.',
      shelfLife: '2–4 zile de la producție',
      dataConfidence: 'medium',
      sources: ['Etichete Chef Select / K-to-go', 'valori tipice sandvișuri ambalate RO']
    },

    {
      id: 'r-wrap-tortilla-pui',
      name: 'Packaged Chicken Tortilla Wrap',
      nameRo: 'Wrap tortilla cu pui',
      brand: 'Chef Select (Lidl) / K-to-go (Kaufland)',
      category: 'ready-meals',
      subcategory: 'Sandvișuri & wrapuri ambalate',
      emoji: '🌯',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Frigiderul de lângă case, raftul de sus',
          priceRon: 12.99,
          packGrams: 180,
          packLabel: 'wrap 180 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Vitrina K-to-go',
          priceRon: 13.9,
          packGrams: 180,
          packLabel: 'wrap 180 g',
          note: 'Varianta picantă are mai mult pui.'
        }
      ],
      sibiuNote: 'Wrapurile se epuizează la Lidl până în jurul orei 17; la Kaufland Șelimbăr se reaprovizionează și după-amiaza.',
      per100g: {
        kcal: 200,
        protein: 10.5,
        carbs: 22,
        sugars: 2,
        fat: 7.5,
        satFat: 2.2,
        fiber: 1.6,
        salt: 1
      },
      serving: {
        grams: 180,
        label: '1 wrap întreg (180 g)'
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
        profile: 'Lipie moale, sos alb, pui condimentat, ardei și porumb',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Moale, ușor cauciucată la capete',
        notes: 'Mai gustos decât sandvișul triunghi și se mănâncă mai curat în mașină.'
      },
      stats: {
        taste: 56,
        satiety: 58,
        convenience: 100,
        versatility: 25
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 3,
        beforeBed: 1
      },
      timingNote: 'Carbohidrați + proteină moderată: acceptabil cu 60–90 de minute înainte de sală.',
      tags: ['ready-to-eat', 'grab-and-go', 'portable', 'no-cook', 'office-lunch', 'processed', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Iaurt grecesc', 'Băutură proteică', 'Roșii cherry', 'Ardei iute'],
      tips: [
        'Un wrap = ~19 g proteină la 360 kcal. Două wrapuri (26 lei) = 38 g proteină — încă mai scump decât 300 g piept de pui gătit acasă (12 lei).',
        'Încălzește-l 40 de secunde la microunde dacă ai la birou: tortilla rece e cauciucată.',
        'Varianta cu pui la grătar bate întotdeauna varianta cu pui crispy: aceeași proteină, cu 80–100 kcal mai puțin.'
      ],
      warnings: ['Conține gluten, lapte, ou și muștar.'],
      storage: 'Frigider 2–7 °C.',
      shelfLife: '2–4 zile de la producție',
      dataConfidence: 'medium',
      sources: ['Etichete Chef Select / K-to-go', 'valori tipice wrapuri ambalate RO']
    },

    {
      id: 'r-oua-fierte-ambalate',
      name: 'Packaged Peeled Boiled Eggs',
      nameRo: 'Ouă fierte decojite ambalate',
      brand: 'generic (Kaufland / Carrefour)',
      category: 'ready-meals',
      subcategory: 'Proteină rece gata de mâncat',
      emoji: '🥚',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raft refrigerat de ouă, lângă ouăle crude',
          priceRon: 9.99,
          packGrams: 220,
          packLabel: 'pachet 4 ouă fierte (~220 g)',
          note: 'Uneori în zona K-to-go.'
        },
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Vitrina refrigerată de lângă salate',
          priceRon: 11.9,
          packGrams: 220,
          packLabel: 'pachet 4 ouă fierte',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'occasional',
          aisle: 'Frigiderul de snacksuri',
          priceRon: 8.5,
          packGrams: 110,
          packLabel: 'pachet 2 ouă fierte',
          note: 'Formatul de 2 ouă e ideal pentru geantă.'
        }
      ],
      sibiuNote: 'Nu e un produs garantat în Sibiu — Kaufland de pe Șos. Alba Iulia îl are cel mai des. Alternativa sigură: fierbi 10 ouă duminică seara.',
      per100g: {
        kcal: 143,
        protein: 12.6,
        carbs: 0.7,
        sugars: 0.7,
        fat: 9.9,
        satFat: 3.1,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        b12Ug: 1.1,
        vitDUg: 2,
        ironMg: 1.2,
        zincMg: 1.3,
        cholesterolMg: 370
      },
      serving: {
        grams: 110,
        label: '2 ouă fierte (110 g)'
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
        profile: 'Neutru, ușor sulfuros, gălbenușul cremos dacă sunt bine fierte',
        intensity: 2,
        sweetness: 0,
        saltiness: 1,
        umami: 2,
        richness: 3,
        texture: 'Albuș ferm, ușor cauciucat de la conservare în saramură',
        notes: 'Cele ambalate au aproape mereu albușul mai tare decât cele fierte acasă.'
      },
      stats: {
        taste: 55,
        satiety: 82,
        convenience: 98,
        versatility: 85
      },
      timing: {
        breakfast: 5,
        preWorkout: 3,
        postWorkout: 4,
        lunch: 4,
        snack: 5,
        dinner: 3,
        beforeBed: 4
      },
      timingNote: 'Gustarea perfectă de birou: 14 g proteină, zero zahăr, zero mizerie.',
      tags: ['ready-to-eat', 'grab-and-go', 'portable', 'no-cook', 'low-carb', 'complete-protein', 'b12', 'office-lunch', 'cutting'],
      diet: {
        vegan: false,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Sare cu ardei iute', 'Bol de salată', 'Pâine de secară', 'Hummus'],
      tips: [
        '2 ouă = 14 g proteină la 157 kcal. Aceeași proteină, fiartă acasă, costă 3 lei în loc de 8,50.',
        'Ține un pachet în geantă doar în zilele de birou cu frigider — la temperatura camerei rezistă maxim 2 ore.',
        'Combinația ou fiert + bol de salată gata făcut e cel mai bun "prânz asamblat în 3 minute" din supermarket.'
      ],
      warnings: ['Conține ou. Colesterol ridicat — irelevant pentru majoritatea, dar de știut.'],
      storage: 'Frigider 2–5 °C, se consumă în 2 zile după deschidere.',
      shelfLife: '~3 săptămâni sigilat în saramură',
      dataConfidence: 'medium',
      sources: ['Valori standard ou fiert USDA', 'etichete produse ambalate RO']
    },

    {
      id: 'r-piept-pui-feliat-gata-gatit',
      name: 'Ready-Cooked Sliced Chicken Breast',
      nameRo: 'Piept de pui feliat, gata gătit',
      brand: 'generic (Carrefour / Kaufland)',
      category: 'ready-meals',
      subcategory: 'Proteină rece gata de mâncat',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raft refrigerat de mezeluri feliate, lângă șuncă',
          priceRon: 11.99,
          packGrams: 100,
          packLabel: 'pachet feliat 100 g',
          note: 'Caută varianta cu peste 90% carne.'
        },
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Raft mezeluri feliate',
          priceRon: 10.99,
          packGrams: 100,
          packLabel: 'pachet feliat 100 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Vitrina de mezeluri preambalate',
          priceRon: 12.9,
          packGrams: 100,
          packLabel: 'pachet feliat 100 g',
          note: ''
        }
      ],
      sibiuNote: 'Toate hipermarketurile din Sibiu îl au. La Selgros și Metro găsești formate de 200–500 g cu preț pe kg mai mic dacă gătești pentru toată săptămâna.',
      per100g: {
        kcal: 110,
        protein: 21,
        carbs: 1.5,
        sugars: 0.6,
        fat: 2.2,
        satFat: 0.7,
        fiber: 0,
        salt: 1.6
      },
      micros: {
        b12Ug: 0.4,
        zincMg: 0.8,
        potassiumMg: 260,
        cholesterolMg: 55
      },
      serving: {
        grams: 100,
        label: '1 pachet (100 g, ~5 felii)'
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
        profile: 'Sărat, fad, cu gust ușor afumat sau de bulion de pui',
        intensity: 2,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 1,
        texture: 'Umed, ușor elastic, felii subțiri care se lipesc între ele',
        notes: 'Plictisitor de unul singur, dar este cea mai curată proteină din raftul refrigerat.'
      },
      stats: {
        taste: 45,
        satiety: 80,
        convenience: 99,
        versatility: 88
      },
      timing: {
        breakfast: 4,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 5,
        dinner: 4,
        beforeBed: 4
      },
      timingNote: 'Cea mai rapidă cale de a adăuga 20 g proteină curată la orice masă gata făcută.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'high-protein', 'protein-dense', 'low-fat', 'cutting', 'office-lunch', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Bol de salată gata făcut', 'Lipie integrală', 'Hummus', 'Iaurt grecesc cu usturoi'],
      tips: [
        '76% din calorii vin din proteină — cel mai bun raport din toată categoria de gata-făcute.',
        'Este "reparația" universală: arunci un pachet peste orice salată sau paste gata făcute și transformi masa dintr-una slabă în una decentă.',
        'Atenție la sare: 1,6 g/100 g. Dacă mănânci două pachete pe zi, ai deja jumătate din limita zilnică.'
      ],
      warnings: ['Sodiu ridicat. Unele mărci conțin până la 15% apă adăugată și amidon — citește lista de ingrediente.'],
      storage: 'Frigider 2–5 °C, se consumă în 2 zile după deschidere.',
      shelfLife: '~14 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete piept de pui feliat Kaufland / Carrefour', 'valori tipice RO 2026']
    },

    {
      id: 'r-platou-branzeturi',
      name: 'Ready Cheese Platter',
      nameRo: 'Platou cu brânzeturi asortate',
      brand: 'generic (Carrefour / Kaufland)',
      category: 'ready-meals',
      subcategory: 'Platouri & gustări reci',
      emoji: '🧀',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Vitrina de brânzeturi fine, lângă delicatese',
          priceRon: 34.9,
          packGrams: 200,
          packLabel: 'platou 200 g',
          note: 'Mai ieftin în ultimele 2 zile de valabilitate.'
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raion brânzeturi, vitrina refrigerată',
          priceRon: 29.9,
          packGrams: 200,
          packLabel: 'platou 200 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Zona de delicatese, format mare',
          priceRon: 49.9,
          packGrams: 400,
          packLabel: 'platou 400 g',
          note: 'Cel mai bun preț pe kg dacă ai invitați.'
        }
      ],
      sibiuNote: 'Sibiul are și varianta mai bună: la Piața Cibin cumperi telemea, cașcaval afumat de Săliște și brânză de burduf la jumătate de preț și tai singur.',
      per100g: {
        kcal: 330,
        protein: 21,
        carbs: 2,
        sugars: 1.5,
        fat: 26,
        satFat: 16,
        fiber: 0,
        salt: 1.8
      },
      micros: {
        calciumMg: 620,
        b12Ug: 1.4,
        zincMg: 3,
        cholesterolMg: 80
      },
      serving: {
        grams: 100,
        label: 'jumătate de platou (100 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Bogat, sărat, cu note de mucegai nobil și afumătură',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'De la cremos la sfărâmicios, în funcție de sortiment',
        notes: 'Cel mai plăcut lucru din categoria asta, dar și cel mai ușor de mâncat în exces.'
      },
      stats: {
        taste: 84,
        satiety: 60,
        convenience: 92,
        versatility: 50
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 3,
        snack: 4,
        dinner: 3,
        beforeBed: 3
      },
      timingNote: 'Cazeina din brânzeturile maturate se digeră lent — acceptabil seara, dezastruos ca pre-workout.',
      tags: ['ready-to-eat', 'no-cook', 'high-protein', 'calcium-rich', 'high-kcal', 'premium', 'slow-digesting'],
      diet: {
        vegan: false,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: false,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Nuci', 'Struguri', 'Pâine de secară', 'Miere'],
      tips: [
        '100 g = 21 g proteină, dar și 330 kcal și 16 g grăsimi saturate. E proteină "scumpă" caloric.',
        'La Piața Cibin, 100 g de telemea de oaie costă ~4 lei față de ~17 lei porția din platou. Diferența e doar în ambalaj.',
        'Pune platoul pe o farfurie și pune restul înapoi în frigider imediat — altfel dispar 200 g fără să realizezi.'
      ],
      warnings: ['Conține lapte. Grăsimi saturate foarte mari și sodiu ridicat.'],
      storage: 'Frigider 2–6 °C, se consumă în 3 zile după deschidere.',
      shelfLife: '~10 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete platouri brânzeturi Carrefour / Kaufland', 'valori medii brânzeturi maturate']
    },

    {
      id: 'r-hummus-crudites-pack',
      name: 'Hummus and Crudites Pack',
      nameRo: 'Pachet hummus cu crudități',
      brand: 'generic (Lidl / Mega Image)',
      category: 'ready-meals',
      subcategory: 'Platouri & gustări reci',
      emoji: '🥕',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Frigiderul de snacksuri de lângă case',
          priceRon: 11.99,
          packGrams: 180,
          packLabel: 'pachet 180 g (hummus 100 g + legume 80 g)',
          note: ''
        },
        {
          name: 'Mega Image',
          availability: 'usual',
          aisle: 'Vitrina de gustări reci',
          priceRon: 14.9,
          packGrams: 170,
          packLabel: 'pachet 170 g',
          note: ''
        }
      ],
      sibiuNote: 'Formatul combo apare neregulat în Sibiu. Varianta stabilă: borcan de hummus (Lidl, 8 lei) + o pungă de morcovi baby, o faci acasă în 30 de secunde.',
      per100g: {
        kcal: 152,
        protein: 4.5,
        carbs: 9,
        sugars: 2.5,
        fat: 10,
        satFat: 1.3,
        fiber: 4,
        salt: 0.9
      },
      micros: {
        ironMg: 1.5,
        potassiumMg: 250
      },
      serving: {
        grams: 180,
        label: '1 pachet întreg (180 g)'
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
        profile: 'Cremos, cu tahini amărui, usturoi și lămâie, legume crocante alături',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 3,
        texture: 'Pastă fină cu morcov și țelină crocante',
        notes: 'Gustare corectă, dar nu o confunda cu o sursă de proteină.'
      },
      stats: {
        taste: 68,
        satiety: 58,
        convenience: 95,
        versatility: 55
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 1,
        lunch: 3,
        snack: 5,
        dinner: 2,
        beforeBed: 2
      },
      timingNote: 'Gustare de după-amiază bună pentru fibre, nu pentru proteină.',
      tags: ['ready-to-eat', 'grab-and-go', 'no-cook', 'high-fiber', 'portable', 'mid-price', 'processed'],
      diet: {
        vegan: true,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Ouă fierte', 'Piept de pui feliat', 'Lipie integrală', 'Măsline'],
      tips: [
        'Pachetul întreg are doar ~8 g proteină la 274 kcal. Nu e o gustare proteică, este o gustare cu fibre.',
        'Adaugă 100 g piept de pui feliat și ajungi la 29 g proteină — atunci devine o masă.',
        'Hummusul din borcan (Lidl / Kaufland) costă jumătate pe gram față de pachetul combo.'
      ],
      warnings: ['Conține susan (tahini). Densitate proteică foarte mică pentru preț.'],
      storage: 'Frigider 2–5 °C, se consumă în 2 zile după deschidere.',
      shelfLife: '~7 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete hummus Lidl / Mega Image', 'valori tipice pachete crudités']
    },

    {
      id: 'r-salata-vinete-caserola',
      name: 'Aubergine Spread Tub',
      nameRo: 'Salată de vinete la caserolă',
      brand: 'generic (Kaufland / Carrefour)',
      category: 'ready-meals',
      subcategory: 'Salate reci la caserolă',
      emoji: '🍆',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Vitrina refrigerată de salate tradiționale',
          priceRon: 12.9,
          packGrams: 300,
          packLabel: 'caserolă 300 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Frigiderul de lângă mezeluri',
          priceRon: 11.5,
          packGrams: 250,
          packLabel: 'caserolă 250 g',
          note: ''
        }
      ],
      sibiuNote: 'În sezon (august–septembrie) la Piața Cibin găsești vinete coapte la kg, mult mai bune și mai ieftine decât orice caserolă.',
      per100g: {
        kcal: 235,
        protein: 1.4,
        carbs: 4,
        sugars: 2.5,
        fat: 23,
        satFat: 2.6,
        fiber: 2.5,
        salt: 1.1
      },
      serving: {
        grams: 100,
        label: '2–3 linguri (100 g)'
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
        profile: 'Afumat, uleios, cu ceapă crudă și acrișor de la lămâie',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 2,
        richness: 5,
        texture: 'Pastă fină, uneori fibroasă',
        notes: 'Delicioasă pe pâine, dar din punct de vedere proteic este pur și simplu ulei cu aromă de vinete.'
      },
      stats: {
        taste: 72,
        satiety: 30,
        convenience: 95,
        versatility: 40
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 1,
        lunch: 2,
        snack: 3,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Fără rol în strategia ta de proteină — o iei doar pentru gust.',
      tags: ['ready-to-eat', 'no-cook', 'high-kcal', 'romanian-classic', 'processed', 'budget'],
      diet: {
        vegan: true,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine de casă', 'Roșii', 'Ceapă roșie', 'Brânză telemea'],
      tips: [
        'Onestitate brutală: 100 g = 1,4 g proteină și 235 kcal. Este cea mai proastă densitate proteică din tot atlasul.',
        'Dacă tot o mănânci, pune peste ea 60 g telemea sfărâmată: adaugi 10 g proteină și transformi gustarea într-un fel de masă.',
        'Verifică eticheta: multe mărci folosesc ulei de floarea-soarelui 60%+ și vinete abia 30%.'
      ],
      warnings: ['23 g grăsime la 100 g. Poate conține muștar sau ou (variantele cu maioneză).'],
      storage: 'Frigider 2–5 °C, se consumă în 3 zile după deschidere.',
      shelfLife: '~14 zile sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete salată de vinete Kaufland / Profi', 'valori tipice RO']
    },

    {
      id: 'r-pui-rotisor-intreg',
      name: 'Whole Rotisserie Chicken',
      nameRo: 'Pui întreg la rotisor',
      brand: 'Kaufland Grill / Carrefour bistro',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill, chiar lângă intrare',
          priceRon: 39.9,
          packGrams: 1100,
          packLabel: 'pui întreg gătit ~1,1 kg',
          note: 'Cel mai bun raport proteină/leu din toată categoria.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Rotiseria de lângă raionul de carne',
          priceRon: 42.9,
          packGrams: 1100,
          packLabel: 'pui întreg gătit',
          note: 'La Shopping City Sibiu, scoate șarje la 12:00 și la 18:00.'
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Zona de preparate calde',
          priceRon: 41.9,
          packGrams: 1100,
          packLabel: 'pui întreg gătit',
          note: ''
        }
      ],
      sibiuNote: 'În Sibiu ai rotisor la Kaufland Șos. Alba Iulia, Kaufland Șelimbăr, Kaufland din Promenada și la Carrefour Shopping City. Cere unul din șarja proaspătă — întreabă la ce oră iese următoarea.',
      per100g: {
        kcal: 210,
        protein: 25,
        carbs: 0.5,
        sugars: 0.3,
        fat: 12,
        satFat: 3.5,
        fiber: 0,
        salt: 1.3
      },
      micros: {
        b12Ug: 0.4,
        zincMg: 1.8,
        ironMg: 1,
        potassiumMg: 280,
        cholesterolMg: 95
      },
      serving: {
        grams: 250,
        label: 'un sfert de pui, carne cu piele (250 g)'
      },
      effort: 0,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['furculiță', 'foarfecă de bucătărie'],
        steps: [
          'Taie puiul în sferturi cu foarfeca, direct în caserolă.',
          'Dacă vrei mai puține calorii, scoate pielea înainte de a mânca.'
        ],
        yieldNote: 'Pui gătit de 1,1 kg = ~750 g carne comestibilă, din care ~600 g fără piele.'
      },
      taste: {
        profile: 'Sărat, condimentat cu boia și usturoi, piele crocantă și suculentă',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Carne fragedă, piele crocantă când e proaspăt, cauciucată după 2 ore',
        notes: 'Cel mai bun lucru din tot raftul de mâncare gata. Gustos, ieftin, proteic.'
      },
      stats: {
        taste: 86,
        satiety: 90,
        convenience: 88,
        versatility: 92
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 4,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: 'Post-workout excelent dacă scoți pielea: 25 g proteină la 100 g de carne.',
      tags: ['ready-to-eat', 'high-protein', 'cheap-protein', 'budget', 'meal-prep', 'batch-cook', 'complete-protein', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Pungă de salată mixtă', 'Orez la plic', 'Iaurt cu usturoi', 'Murături'],
      tips: [
        'Un pui de 39,90 lei îți dă ~185 g proteină totală. Asta înseamnă 0,22 lei per gram de proteină — de 5–10 ori mai ieftin decât orice altceva din categoria "mâncare gata".',
        'Scoate pielea și scazi caloriile de la ~210 la ~165 kcal/100 g, cu proteina aproape neschimbată (27 g).',
        'Dezosează-l cald, în 5 minute, cât e încă moale. Carnea desprinsă se păstrează 3 zile la frigider și îți face 3 prânzuri.',
        'Nu lua puiul care stă de 3 ore sub lampă: pielea e cauciucată și carnea uscată. Întreabă când iese următoarea șarjă.'
      ],
      warnings: ['Sodiu ridicat de la saramura de injectare (1,3 g sare/100 g). Riscul principal e cel de siguranță alimentară: puiul ținut sub 60 °C ore în șir.'],
      storage: 'Consumă în 2 ore de la cumpărare sau răcește rapid și ține la frigider maxim 3 zile.',
      shelfLife: '3 zile la frigider după dezosare',
      dataConfidence: 'medium',
      sources: ['Kaufland Grill meniu 2026', 'valori USDA pui la rotisor cu piele']
    },

    {
      id: 'r-jumatate-pui-rotisor',
      name: 'Half Rotisserie Chicken',
      nameRo: 'Jumătate de pui la rotisor',
      brand: 'Kaufland Grill',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🐔',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill, vitrina caldă de la intrare',
          priceRon: 22,
          packGrams: 550,
          packLabel: 'jumătate de pui ~550 g',
          note: 'Formatul potrivit pentru o persoană singură.'
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Zona de preparate calde',
          priceRon: 23.9,
          packGrams: 550,
          packLabel: 'jumătate de pui',
          note: ''
        }
      ],
      sibiuNote: 'La Kaufland Șelimbăr jumătățile se termină primele, pentru că sunt formatul preferat al navetiștilor. Du-te înainte de 17:30.',
      per100g: {
        kcal: 210,
        protein: 25,
        carbs: 0.5,
        sugars: 0.3,
        fat: 12,
        satFat: 3.5,
        fiber: 0,
        salt: 1.3
      },
      micros: {
        b12Ug: 0.4,
        zincMg: 1.8,
        potassiumMg: 280,
        cholesterolMg: 95
      },
      serving: {
        grams: 300,
        label: 'jumătate de pui, carne comestibilă (~300 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: 'Jumătate de pui de 550 g = ~330 g carne comestibilă cu piele.'
      },
      taste: {
        profile: 'Identic cu puiul întreg: sărat, condimentat, cu piele rumenită',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Fragedă, cu piele crocantă dacă e proaspăt scos',
        notes: 'Aceeași calitate ca puiul întreg, dar plătești cu ~10% mai mult pe kg.'
      },
      stats: {
        taste: 85,
        satiety: 88,
        convenience: 92,
        versatility: 85
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 4
      },
      timingNote: 'Cea mai rapidă masă cu 70+ g proteină pe care o poți cumpăra în Sibiu.',
      tags: ['ready-to-eat', 'high-protein', 'cheap-protein', 'budget', 'complete-protein', 'post-workout', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată verde la pungă', 'Cartofi la cuptor', 'Iaurt cu usturoi', 'Castraveți murați'],
      tips: [
        'Jumătate de pui = ~75 g proteină pentru 22 lei, adică 0,29 lei/g proteină. Doar puiul întreg bate cifra asta.',
        'Împarte-o în două: jumătate acum, jumătate mâine în salată. Ai două mese cu 35 g proteină fiecare.',
        'Dacă vrei cutting, ia doar pieptul și pulpa fără piele — cobori de la 630 kcal la ~420 kcal păstrând 72 g proteină.'
      ],
      warnings: ['Sodiu ridicat. Nu o lăsa în mașină vara — carnea caldă în caserolă închisă e un incubator.'],
      storage: 'Frigider maxim 3 zile după răcire rapidă.',
      shelfLife: 'Se mănâncă în ziua cumpărării, ideal',
      dataConfidence: 'medium',
      sources: ['Kaufland Grill meniu 2026', 'valori USDA pui la rotisor']
    },

    {
      id: 'r-aripioare-bistro',
      name: 'Bistro Grilled Chicken Wings',
      nameRo: 'Aripioare de pui la grătar (bistro)',
      brand: 'Kaufland Grill / Selgros',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🍖',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill, vitrina caldă',
          priceRon: 22,
          packGrams: 300,
          packLabel: 'porție ~300 g cu os',
          note: 'Se cântărește la vitrină.'
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Zona de preparate calde de lângă case',
          priceRon: 20,
          packGrams: 300,
          packLabel: 'porție ~300 g',
          note: 'Selgros Sibiu are cea mai bună rotație la ora prânzului.'
        }
      ],
      sibiuNote: 'Selgros Sibiu (Șos. Alba Iulia) și Kaufland au vitrine calde permanente; aripioarele stau uneori mult, așa că cere-le pe cele din tavă abia scoasă.',
      per100g: {
        kcal: 262,
        protein: 24,
        carbs: 1,
        sugars: 0.5,
        fat: 18,
        satFat: 5,
        fiber: 0,
        salt: 1.5
      },
      micros: {
        b12Ug: 0.4,
        zincMg: 1.9,
        cholesterolMg: 110
      },
      serving: {
        grams: 180,
        label: 'porție 300 g cu os = ~180 g carne'
      },
      effort: 0,
      timeMin: 3,
      activeTimeMin: 3,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['șervețele'],
        steps: [],
        yieldNote: '300 g aripioare cu os = ~180 g parte comestibilă.'
      },
      taste: {
        profile: 'Sărat, condimentat, cu piele afumată și grăsime care curge',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Piele crocantă, carne fragedă lipită de os',
        notes: 'Extrem de plăcute, dar 40% din greutate e os și piele grasă.'
      },
      stats: {
        taste: 82,
        satiety: 68,
        convenience: 82,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Prea grase pentru pre-workout; bune la cină când ai calorii de umplut.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'mid-price', 'bulking', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Murături', 'Salată de varză', 'Sos de usturoi', 'Pâine'],
      tips: [
        'Porția de 300 g cu os îți dă doar ~43 g proteină la 470 kcal — pieptul de pui de la rotisor e mult mai eficient.',
        'Prețul real: ~0,51 lei per gram de proteină, de peste două ori mai scump decât puiul întreg la rotisor.',
        'Dacă tot le iei, mănâncă-le calde. Reci, grăsimea din piele se solidifică și devin neplăcute.'
      ],
      warnings: ['Grăsime și sodiu ridicate. Aripioarele stau frecvent ore întregi sub lampă — risc de deshidratare și de bacterii dacă temperatura scade sub 63 °C.'],
      storage: 'Se mănâncă în 2 ore. Reîncălzire doar la airfryer/cuptor, nu la microunde.',
      shelfLife: 'Maxim 24 h la frigider',
      dataConfidence: 'low',
      sources: ['Kaufland Grill meniu 2026', 'valori estimate pentru aripioare la grătar']
    },

    {
      id: 'r-ceafa-gratar-bistro',
      name: 'Bistro Grilled Pork Neck',
      nameRo: 'Ceafă de porc la grătar (bistro)',
      brand: 'Kaufland Grill / Carrefour bistro',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🥩',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill, vitrina caldă',
          priceRon: 28,
          packGrams: 200,
          packLabel: 'porție 200 g (~14 lei/100 g)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Bistroul de lângă rotiserie',
          priceRon: 30,
          packGrams: 200,
          packLabel: 'porție 200 g',
          note: ''
        }
      ],
      sibiuNote: 'La Kaufland din Promenada Mall Sibiu grătarul funcționează și seara — util dacă ieși de la film și vrei proteină reală, nu shaorma.',
      per100g: {
        kcal: 284,
        protein: 26,
        carbs: 0,
        sugars: 0,
        fat: 20,
        satFat: 7,
        fiber: 0,
        salt: 1.4
      },
      micros: {
        b12Ug: 0.7,
        zincMg: 2.6,
        ironMg: 1,
        potassiumMg: 320,
        cholesterolMg: 90
      },
      serving: {
        grams: 200,
        label: '1 bucată de ceafă (200 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['cuțit', 'furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Puternic, sărat, cu marmorare grasă și aromă de fum de grătar',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Suculentă când e proaspătă, cauciucată dacă a stat',
        notes: 'Satisfacție maximă, dar jumătate din calorii vin din grăsime.'
      },
      stats: {
        taste: 84,
        satiety: 80,
        convenience: 85,
        versatility: 60
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Digestie lentă din cauza grăsimii — evită cu 2 ore înainte de antrenament.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'bulking', 'romanian-classic', 'mid-price', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: false
      },
      pairings: ['Murături asortate', 'Mămăligă', 'Muștar', 'Salată de varză'],
      tips: [
        'Porția de 200 g = 52 g proteină și 568 kcal, la 28 lei. Adică 0,54 lei/g proteină — de două ori mai scump decât puiul la rotisor.',
        'Cere bucata din mijlocul tăvii, nu de la margine: marginile stau cel mai mult și se usucă.',
        'Dacă vrei aceleași 52 g proteină cu 200 kcal mai puțin, ia pulpe de pui dezosate de la aceeași vitrină.'
      ],
      warnings: ['Grăsimi saturate ridicate. Carne de porc — nu e halal.'],
      storage: 'Se mănâncă imediat. La frigider maxim 2 zile.',
      shelfLife: 'Aceeași zi',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate ceafă de porc la grătar']
    },

    {
      id: 'r-mici-bistro',
      name: 'Bistro Mici (Romanian Grilled Rolls)',
      nameRo: 'Mici la grătar (bistro)',
      brand: 'Kaufland Grill / Selgros',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🌭',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill',
          priceRon: 18,
          packGrams: 200,
          packLabel: '4 mici (~200 g) cu muștar și pâine',
          note: '~4,50 lei bucata.'
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Grătarul de lângă intrare, în weekend',
          priceRon: 16,
          packGrams: 200,
          packLabel: '4 mici',
          note: 'Cei mai buni mici din oraș după mulți sibieni.'
        }
      ],
      sibiuNote: 'Vara, Selgros Sibiu scoate grătarul afară în weekend. La Piața Cibin găsești mici cruzi de la măcelării locale, mult mai ieftini pe kg.',
      per100g: {
        kcal: 292,
        protein: 17,
        carbs: 2,
        sugars: 0.5,
        fat: 24,
        satFat: 9,
        fiber: 0.3,
        salt: 2
      },
      micros: {
        b12Ug: 1.5,
        ironMg: 2,
        zincMg: 3.2,
        cholesterolMg: 75
      },
      serving: {
        grams: 200,
        label: '4 mici (200 g), fără pâine'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['scobitoare'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Usturoi, cimbru, piper și bicarbonat — gustul verii românești',
        intensity: 5,
        sweetness: 0,
        saltiness: 5,
        umami: 5,
        richness: 5,
        texture: 'Elastică, suculentă, cu crustă rumenită',
        notes: 'Delicioși, dar nutrițional sunt grăsime cu aromă de carne.'
      },
      stats: {
        taste: 88,
        satiety: 65,
        convenience: 88,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Masă de plăcere, nu de performanță — raportul proteină/calorie e slab.',
      tags: ['high-protein', 'ready-to-eat', 'high-kcal', 'high-sodium', 'romanian-classic', 'processed', 'budget', 'summer'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: false
      },
      pairings: ['Muștar', 'Pâine albă', 'Bere fără alcool', 'Castraveți murați'],
      tips: [
        '4 mici = 34 g proteină, dar și 584 kcal. Doar 23% din calorii vin din proteină — printre cele mai slabe raporturi din atlas.',
        'Dacă vrei același gust cu jumătate din calorii: 2 mici + 150 g piept de pui de la rotisor.',
        'Sarea: 4 g per porție, adică 2/3 din doza zilnică recomandată. Nu mânca și cârnați în aceeași zi.'
      ],
      warnings: ['Foarte sărați (2 g sare/100 g). Conțin carne de porc și de vită. Grăsimi saturate mari.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași zi',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate mici comerciali']
    },

    {
      id: 'r-snitel-pui-bistro',
      name: 'Bistro Chicken Schnitzel',
      nameRo: 'Șnițel de pui (bistro)',
      brand: 'Kaufland Grill / Auchan',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🍤',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Vitrina caldă de la Kaufland Grill',
          priceRon: 18,
          packGrams: 180,
          packLabel: 'porție 180 g (2 bucăți)',
          note: ''
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Zona de preparate calde',
          priceRon: 19.9,
          packGrams: 180,
          packLabel: 'porție 180 g',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai populară opțiune la prânz în Kaufland Sibiu; între 12:00 și 13:30 coada e reală, dar șnițelele sunt cele mai proaspete.',
      per100g: {
        kcal: 255,
        protein: 18,
        carbs: 16,
        sugars: 1,
        fat: 13,
        satFat: 2.5,
        fiber: 1,
        salt: 1.4
      },
      serving: {
        grams: 180,
        label: 'porție de 2 șnițele (180 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Pane crocant, pui fad în interior, gust de ulei de prăjire',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 4,
        texture: 'Crocant la exterior, moale la interior — dacă e proaspăt',
        notes: 'După o oră sub lampă crusta se înmoaie și devine leșioasă.'
      },
      stats: {
        taste: 70,
        satiety: 70,
        convenience: 90,
        versatility: 60
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Carbohidrați din pane + proteină: prânz decent, dar nu îl lua înainte de sală.',
      tags: ['ready-to-eat', 'high-protein', 'processed', 'kid-friendly', 'mid-price', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată de varză', 'Lămâie', 'Cartofi natur', 'Sos de usturoi'],
      tips: [
        'Porția de 180 g = 32 g proteină la 459 kcal. Decent, dar 100 g din greutate e crustă și ulei.',
        'Stoarce lămâie peste el: acidul taie senzația de ulei vechi de la vitrina caldă.',
        'Dacă îl iei acasă, reîncălzește-l 6 minute la airfryer 180 °C — revine complet. Microundele îl transformă în burete.'
      ],
      warnings: ['Conține gluten, ou și lapte. Uleiul din vitrinele de supermarket e reutilizat de multe ori.'],
      storage: 'Frigider maxim 24 h.',
      shelfLife: 'Aceeași zi, ideal',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate șnițel de pui pane']
    },

    {
      id: 'r-chiftele-bistro',
      name: 'Bistro Meatballs',
      nameRo: 'Chiftele de casă (bistro)',
      brand: 'Kaufland Grill / Carrefour bistro',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🧆',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Vitrina caldă, tava de lângă șnițele',
          priceRon: 16,
          packGrams: 200,
          packLabel: 'porție 200 g (4–5 chiftele)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Bistro, tava de preparate tradiționale',
          priceRon: 17.5,
          packGrams: 200,
          packLabel: 'porție 200 g',
          note: ''
        }
      ],
      sibiuNote: 'La Carrefour Shopping City tava de chiftele iese pe la 11:30 și e goală până la 13:00 — e cel mai vândut preparat de acolo.',
      per100g: {
        kcal: 267,
        protein: 15,
        carbs: 12,
        sugars: 1.5,
        fat: 17.5,
        satFat: 5.5,
        fiber: 1,
        salt: 1.5
      },
      serving: {
        grams: 200,
        label: 'porție 200 g (4–5 chiftele)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Carne tocată cu mărar, usturoi și pâine înmuiată, prăjite în ulei',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 4,
        texture: 'Moale, sfărâmicioasă, cu crustă subțire',
        notes: 'Gust de acasă, dar cu mult mai multă pâine decât ar recunoaște cineva.'
      },
      stats: {
        taste: 74,
        satiety: 66,
        convenience: 90,
        versatility: 55
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Mai mult confort decât nutriție — 22% din calorii din proteină.',
      tags: ['high-protein', 'ready-to-eat', 'processed', 'romanian-classic', 'kid-friendly', 'high-kcal', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Piure de cartofi', 'Muștar', 'Salată de varză murată', 'Iaurt cu usturoi'],
      tips: [
        'Porția de 200 g = 30 g proteină la 534 kcal. Aproape la fel de multă proteină ca șnițelul, dar cu 80 kcal în plus.',
        'Chiftelele de bistro conțin de regulă 20–30% pâine și cartof — de aceea proteina cade la 15 g/100 g față de 19 g la carnea tocată simplă.',
        'Reci sunt surprinzător de bune într-o lipie cu iaurt și castraveți — masă de birou improvizată.'
      ],
      warnings: ['Conțin gluten, ou și de obicei carne de porc.'],
      storage: 'Frigider maxim 2 zile.',
      shelfLife: 'Aceeași zi, ideal',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate chiftele tradiționale']
    },

    {
      id: 'r-pilaf-pui-bistro',
      name: 'Bistro Chicken Pilaf',
      nameRo: 'Pilaf cu pui (bistro)',
      brand: 'Kaufland Grill / Auchan',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🍚',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Vitrina caldă cu garnituri',
          priceRon: 15,
          packGrams: 350,
          packLabel: 'caserolă 350 g',
          note: ''
        },
        {
          name: 'Auchan',
          availability: 'usual',
          aisle: 'Preparate calde la caserolă',
          priceRon: 16.9,
          packGrams: 350,
          packLabel: 'caserolă 350 g',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai ieftină masă caldă completă din supermarketurile Sibiului — dar și cea mai dezechilibrată: mult orez, puțin pui.',
      per100g: {
        kcal: 146,
        protein: 8,
        carbs: 18,
        sugars: 1,
        fat: 4.5,
        satFat: 1.2,
        fiber: 0.8,
        salt: 0.9
      },
      serving: {
        grams: 350,
        label: '1 caserolă întreagă (350 g)'
      },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 1,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['microunde'],
        steps: [
          'Scoate capacul sau perforează folia.',
          'Încălzește 2–3 minute la 800 W.',
          'Amestecă și mai lasă 30 de secunde.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Orez moale cu bulion, morcov și bucăți mici de pui',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Orez lipicios, pui fibros',
        notes: 'Gust de cantină, dar cald și sățios. Fără pretenții.'
      },
      stats: {
        taste: 55,
        satiety: 70,
        convenience: 88,
        versatility: 45
      },
      timing: {
        breakfast: 1,
        preWorkout: 4,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Carbohidrați + ceva proteină: una dintre puținele opțiuni pre-workout decente din categorie.',
      tags: ['ready-to-eat', 'microwave', 'office-lunch', 'budget', 'cheap-protein', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Piept de pui feliat', 'Iaurt grecesc', 'Ardei iute', 'Salată verde'],
      tips: [
        'Caserola de 350 g = 28 g proteină la 511 kcal, pentru 15 lei. Raport de preț bun, raport proteină/calorie mediocru.',
        'Adaugă un pachet de 100 g piept de pui feliat (12 lei) și urci la 49 g proteină — devine cea mai bună masă caldă rapidă din supermarket.',
        'Verifică temperatura la mijloc după microunde: orezul reîncălzit incomplet e principala cauză de toxiinfecție cu Bacillus cereus.'
      ],
      warnings: ['Orezul gătit ținut la temperatura camerei dezvoltă Bacillus cereus. Reîncălzește complet, o singură dată.'],
      storage: 'Frigider maxim 24 h, reîncălzire o singură dată.',
      shelfLife: 'Aceeași zi',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate pilaf comercial']
    },

    {
      id: 'r-varza-ciolan-bistro',
      name: 'Bistro Cabbage with Pork Knuckle',
      nameRo: 'Varză călită cu ciolan (bistro)',
      brand: 'Kaufland Grill / Carrefour bistro',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🥬',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Vitrina caldă de preparate tradiționale',
          priceRon: 17,
          packGrams: 400,
          packLabel: 'caserolă 400 g',
          note: 'Apare mai des toamna și iarna.'
        },
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Bistro tradițional',
          priceRon: 18.9,
          packGrams: 400,
          packLabel: 'caserolă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Preparat de sezon rece în Sibiu: apare masiv din octombrie, când începe și varza murată la Piața Cibin.',
      per100g: {
        kcal: 133,
        protein: 8.5,
        carbs: 5,
        sugars: 2,
        fat: 8.5,
        satFat: 3,
        fiber: 2.5,
        salt: 1.2
      },
      micros: {
        potassiumMg: 230,
        ironMg: 0.9
      },
      serving: {
        grams: 400,
        label: '1 caserolă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 1,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['microunde'],
        steps: [
          'Perforează folia sau treci conținutul într-un bol.',
          'Încălzește 3 minute la 800 W, amestecă, încă 1 minut.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Acrișor de varză murată, afumat de la ciolan, dulceag de la ceapă călită',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Varză moale, fibre de carne care se desfac',
        notes: 'Una dintre puținele mâncăruri gata care chiar au gust de mâncare de casă.'
      },
      stats: {
        taste: 76,
        satiety: 82,
        convenience: 84,
        versatility: 40
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Fibrele din varză + grăsimea din ciolan țin de foame 4–5 ore.',
      tags: ['ready-to-eat', 'microwave', 'high-fiber', 'romanian-classic', 'winter', 'budget', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Mămăligă', 'Ardei iute', 'Smântână', 'Pâine de secară'],
      tips: [
        'Caserola de 400 g = 34 g proteină la 532 kcal, pentru 17 lei. Surprinzător de bună pentru o mâncare tradițională.',
        'Fibra din varză (10 g pe caserolă) e cel mai mare aport de fibre din toată categoria de mâncare gata.',
        'Dacă vrei să urci proteina fără calorii, pune deasupra 100 g piept de pui de la rotisor, nu încă un ciolan.'
      ],
      warnings: ['Sodiu foarte ridicat (4,8 g sare pe caserolă). Conține carne de porc.'],
      storage: 'Frigider 2 zile.',
      shelfLife: 'Aceeași zi, ideal',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate varză cu ciolan']
    },

    {
      id: 'r-pulpe-pui-dezosate-grill',
      name: 'Bistro Boneless Grilled Chicken Thighs',
      nameRo: 'Pulpe de pui dezosate la grătar (bistro)',
      brand: 'Kaufland Grill',
      category: 'ready-meals',
      subcategory: 'Bistro & rotiserie din supermarket',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill, vitrina caldă',
          priceRon: 24,
          packGrams: 200,
          packLabel: 'porție 200 g (~12 lei/100 g)',
          note: 'Cea mai bună alegere din vitrina caldă.'
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Zona de grătar',
          priceRon: 22,
          packGrams: 200,
          packLabel: 'porție 200 g',
          note: ''
        }
      ],
      sibiuNote: 'Dacă vitrina Kaufland din Sibiu are și pulpe dezosate și ceafă, ia pulpele: aceeași proteină, cu ~90 kcal mai puțin la porție.',
      per100g: {
        kcal: 194,
        protein: 24,
        carbs: 0.8,
        sugars: 0.3,
        fat: 10.5,
        satFat: 3,
        fiber: 0,
        salt: 1.3
      },
      micros: {
        b12Ug: 0.5,
        zincMg: 2,
        ironMg: 1.1,
        potassiumMg: 290,
        cholesterolMg: 100
      },
      serving: {
        grams: 200,
        label: 'porție de 200 g'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Suculent, condimentat cu boia și usturoi, ușor afumat',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Fibre moi, mai grasă și mai iertătoare decât pieptul',
        notes: 'Cel mai bun compromis gust/proteină din toată vitrina caldă.'
      },
      stats: {
        taste: 80,
        satiety: 84,
        convenience: 90,
        versatility: 80
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 5,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Post-workout foarte bun: 48 g proteină la 388 kcal.',
      tags: ['ready-to-eat', 'high-protein', 'post-workout', 'meal-prep', 'complete-protein', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Orez la plic', 'Salată la pungă', 'Iaurt cu usturoi', 'Legume la grătar'],
      tips: [
        'Porția de 200 g = 48 g proteină la 388 kcal, adică 0,50 lei/g proteină. Cea mai bună opțiune din vitrina caldă după puiul întreg.',
        'Ia două porții și una o pui la frigider — a doua zi merge perfect tăiată în salată.',
        'Comparativ cu ceafa de porc: aceeași proteină, cu 180 kcal mai puțin și 10 g mai puțină grăsime.'
      ],
      warnings: ['Sodiu ridicat de la marinată.'],
      storage: 'Frigider maxim 2 zile.',
      shelfLife: 'Aceeași zi, ideal',
      dataConfidence: 'low',
      sources: ['estimare de preț 2026 — neconfirmată la raft', 'valori estimate pulpe de pui dezosate la grătar']
    },

    {
      id: 'r-scandia-fasole-ciolan',
      name: 'Smoked Pork Knuckle on Beans (Canned)',
      nameRo: 'Ciolan afumat așternut pe fasole',
      brand: 'Scandia Sibiu',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raft conserve de carne, rândul cu Scandia',
          priceRon: 16.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: 'Produs fabricat în Sibiu.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Raion conserve, secțiunea mâncare gătită',
          priceRon: 17.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'always',
          aisle: 'Conserve, bax de 6 bucăți',
          priceRon: 15.5,
          packGrams: 400,
          packLabel: 'conservă 400 g (la bax)',
          note: 'Cel mai bun preț dacă iei bax.'
        }
      ],
      sibiuNote: 'Produs 100% sibian: fabrica Scandia este pe Șoseaua Alba Iulia. Se găsește în absolut orice magazin din oraș, inclusiv la magazinul de fabrică Scandia.',
      per100g: {
        kcal: 130,
        protein: 9.5,
        carbs: 11,
        sugars: 0.4,
        fat: 4.5,
        satFat: 1.6,
        fiber: 3.6,
        salt: 1.3
      },
      micros: {
        ironMg: 1.8,
        potassiumMg: 320,
        zincMg: 1.4,
        b12Ug: 0.5
      },
      serving: {
        grams: 400,
        label: '1 conservă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['deschizător', 'cratiță sau bol de microunde'],
        steps: [
          'Deschide conserva și golește conținutul într-un bol.',
          'Încălzește 3–4 minute la microunde, amestecând o dată la mijloc.',
          'Adaugă ceapă roșie tocată și ardei iute peste, la final.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Afumat puternic, fasole cremoasă în sos de roșii, sărat',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Fasole moale, bucăți de ciolan fibroase',
        notes: 'Cea mai bună conservă românească pentru proteină pe leu. Gust onest, deloc rafinat.'
      },
      stats: {
        taste: 72,
        satiety: 88,
        convenience: 92,
        versatility: 50
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Fibre + proteină + amidon lent: cea mai sățioasă conservă din raft.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'high-fiber', 'cheap-protein', 'budget', 'romanian-classic', 'local-sibiu', 'winter'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Ceapă roșie', 'Ardei iute', 'Pâine de secară', 'Murături'],
      tips: [
        'O conservă întreagă = 38 g proteină la doar 520 kcal, pentru 16,90 lei. Este 0,44 lei/g proteină — cea mai bună conservă cu mâncare gătită din România.',
        'Ține două conserve în sertarul de la birou: sunt mâncarea de urgență cu cel mai bun profil din tot atlasul de shelf-stable.',
        'Fibra (14,4 g pe conservă) e mai mare decât în orice alt produs din categoria mâncare gata.',
        'Nu o mânca direct din conservă rece — grăsimea de ciolan solidificată strică complet impresia.'
      ],
      warnings: ['Sodiu foarte ridicat: 5,2 g sare per conservă, aproape întreaga doză zilnică. Conține carne de porc.'],
      storage: 'Loc uscat, 4–25 °C. După deschidere, frigider, maxim 48 h.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'high',
      sources: ['Eticheta Scandia Sibiu 400 g', 'shop.scandia.ro']
    },

    {
      id: 'r-scandia-ciolan-varza',
      name: 'Pork Knuckle on Cabbage (Canned)',
      nameRo: 'Ciolan răsfățat pe varză',
      brand: 'Scandia Sibiu',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raft conserve de carne, lângă fasolea cu ciolan',
          priceRon: 16.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Raion conserve',
          priceRon: 18.5,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: 'Util pentru Profi-urile de cartier din Sibiu.'
        }
      ],
      sibiuNote: 'Alternativa sibiană la varza cu ciolan de la bistro: aceeași mâncare, jumătate de preț, dar mai puțină carne.',
      per100g: {
        kcal: 125,
        protein: 8.5,
        carbs: 5,
        sugars: 2,
        fat: 7.5,
        satFat: 2.7,
        fiber: 2.5,
        salt: 1.3
      },
      micros: {
        potassiumMg: 260,
        ironMg: 1.1
      },
      serving: {
        grams: 400,
        label: '1 conservă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['deschizător', 'cratiță'],
        steps: [
          'Golește conserva într-o cratiță.',
          'Încălzește 5 minute la foc mic, amestecând.',
          'Servește cu mămăligă sau pâine.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Varză călită acrișoară, afumătură de ciolan, boia dulce',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Varză moale, fâșii de carne afumată',
        notes: 'Mai puțin sățioasă decât fasolea, dar mai apropiată de gustul de casă.'
      },
      stats: {
        taste: 70,
        satiety: 76,
        convenience: 92,
        versatility: 42
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Cină de iarnă rapidă; prea sărată ca să o mănânci des.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'high-fiber', 'budget', 'romanian-classic', 'local-sibiu', 'winter', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Mămăligă', 'Ardei iute', 'Smântână', 'Pâine neagră'],
      tips: [
        'Conserva întreagă = 34 g proteină la 500 kcal. Cu 4 g proteină mai puțin decât varianta cu fasole și fără amidonul lent al fasolei.',
        'Adaugă un ou ochi deasupra: +6 g proteină și transformă conserva într-o cină reală.',
        'Dacă alegi între fasole și varză pentru proteină, alege fasolea. Pentru gust, varza.'
      ],
      warnings: ['5,2 g sare per conservă. Conține carne de porc.'],
      storage: 'Loc uscat 4–25 °C. După deschidere, frigider, maxim 48 h.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['shop.scandia.ro', 'eticheta Scandia Sibiu']
    },

    {
      id: 'r-sadu-fasole-ciolan',
      name: 'Budget Beans with Pork Knuckle (Canned)',
      nameRo: 'Fasole cu ciolan Sadu',
      brand: 'Sadu (Scandia Sibiu)',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🫘',
      unit: 'g',
      stores: [
        {
          name: 'Penny',
          availability: 'always',
          aisle: 'Raion conserve, raftul de jos',
          priceRon: 11.5,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: 'Cea mai ieftină variantă din oraș.'
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve de carne',
          priceRon: 12.5,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Lângă gama Scandia',
          priceRon: 12.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Sadu este linia economică a fabricii Scandia din Sibiu — același producător, mai puțină carne, preț cu 30% mai mic.',
      per100g: {
        kcal: 119,
        protein: 7,
        carbs: 12,
        sugars: 0.5,
        fat: 4,
        satFat: 1.4,
        fiber: 3.5,
        salt: 1.2
      },
      micros: {
        ironMg: 1.6,
        potassiumMg: 300
      },
      serving: {
        grams: 400,
        label: '1 conservă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['deschizător', 'bol de microunde'],
        steps: [
          'Golește conserva într-un bol.',
          'Încălzește 3 minute la microunde.',
          'Amestecă și mai lasă 1 minut.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Fasole în sos de roșii cu urme de afumătură',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 2,
        texture: 'Fasole moale, bucățile de carne rare și mici',
        notes: 'Se simte imediat că are mai puțină carne decât varianta Scandia Sibiu.'
      },
      stats: {
        taste: 60,
        satiety: 84,
        convenience: 92,
        versatility: 55
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Cea mai ieftină masă caldă cu 28 g proteină pe care o poți cumpăra în Sibiu.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'high-fiber', 'cheap-protein', 'budget', 'local-sibiu', 'romanian-classic'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Ceapă', 'Pâine', 'Ardei iute', 'Ou fiert'],
      tips: [
        'Conserva de 11,50 lei = 28 g proteină. La 0,41 lei/g proteină bate chiar și varianta Scandia Sibiu la preț.',
        'Pune un ou fiert tăiat deasupra: 34 g proteină pentru 13 lei, masă completă.',
        'Marca albă de la Kaufland (K-Classic) și Penny au valori foarte apropiate — compară doar procentul de carne de pe etichetă.'
      ],
      warnings: ['Sodiu ridicat. Conține carne de porc. Procentul de carne e vizibil mai mic decât la gama Scandia Sibiu.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 48 h.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['shop.scandia.ro (gama Sadu)', 'valori tipice conserve fasole cu ciolan RO']
    },

    {
      id: 'r-tocana-porc-conserva',
      name: 'Canned Pork Stew',
      nameRo: 'Tocană de porc la conservă',
      brand: 'Ardealul / Bucegi',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🍲',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion conserve de carne',
          priceRon: 14.9,
          packGrams: 300,
          packLabel: 'conservă 300 g',
          note: ''
        },
        {
          name: 'Penny',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 13.5,
          packGrams: 300,
          packLabel: 'conservă 300 g',
          note: ''
        }
      ],
      sibiuNote: 'Alegere de rezervă în cămara oricărui sibian care urcă pe munte — merge mâncată și rece în Făgăraș.',
      per100g: {
        kcal: 157,
        protein: 10,
        carbs: 4,
        sugars: 1,
        fat: 11,
        satFat: 4,
        fiber: 0.8,
        salt: 1.3
      },
      micros: {
        b12Ug: 0.8,
        zincMg: 1.7,
        ironMg: 1.2
      },
      serving: {
        grams: 300,
        label: '1 conservă întreagă (300 g)'
      },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['deschizător', 'cratiță'],
        steps: [
          'Golește conserva într-o cratiță.',
          'Încălzește 4 minute la foc mediu.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Sos gras de roșii cu ceapă, bucăți de porc bine fierte',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Carne care se desface, sos uleios',
        notes: 'Bun cald cu mămăligă, mediocru rece.'
      },
      stats: {
        taste: 62,
        satiety: 74,
        convenience: 94,
        versatility: 55
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Mâncare de munte și de urgență, nu de recuperare post-antrenament.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'portable', 'romanian-classic', 'budget', 'high-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: false
      },
      pairings: ['Mămăligă', 'Pâine', 'Murături', 'Ardei iute'],
      tips: [
        'Conserva de 300 g = 30 g proteină la 471 kcal. Raport slab: doar 25% din calorii vin din proteină.',
        'Scurge o parte din grăsimea de la suprafață înainte de încălzire — scazi 50–80 kcal fără să pierzi carne.',
        'Pentru drumeții pe Făgăraș e imbatabilă: nu are nevoie de frigider și se poate mânca și rece.'
      ],
      warnings: ['Grăsime ridicată, sodiu ridicat. Conține carne de porc.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 48 h.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete conserve Ardealul / Bucegi', 'valori tipice tocană de porc la conservă']
    },

    {
      id: 'r-gulas-conserva',
      name: 'Canned Beef Goulash',
      nameRo: 'Gulaș de vită la conservă',
      brand: 'Ardealul / Sun Food',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🍛',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raion conserve, secțiunea mâncare gătită',
          priceRon: 17.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve de carne',
          priceRon: 18.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Gulașul la conservă e produsul de bază al zonei săsești; în Sibiu apare și în variantă cu găluște de făină la magazinele mai mari.',
      per100g: {
        kcal: 128,
        protein: 11,
        carbs: 5,
        sugars: 1.2,
        fat: 7,
        satFat: 2.8,
        fiber: 0.8,
        salt: 1.4
      },
      micros: {
        ironMg: 2,
        zincMg: 2.4,
        b12Ug: 1.2,
        potassiumMg: 280
      },
      serving: {
        grams: 400,
        label: '1 conservă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['deschizător', 'cratiță'],
        steps: [
          'Golește conserva într-o cratiță.',
          'Încălzește 5 minute la foc mediu, amestecând.',
          'Adaugă boia afumată dacă vrei mai mult gust.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Boia dulce, ceapă, chimen, carne de vită fibroasă',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Bucăți de vită care se desfac, sos gros',
        notes: 'Cea mai bogată în fier conservă din raft.'
      },
      stats: {
        taste: 68,
        satiety: 80,
        convenience: 92,
        versatility: 60
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Fier hemic + B12: bună după antrenamente grele, mai ales pentru femei.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'iron-rich', 'b12', 'romanian-classic', 'mid-price', 'winter'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Găluște de griș', 'Mămăligă', 'Smântână', 'Paste late'],
      tips: [
        'Conserva de 400 g = 44 g proteină la 512 kcal. Cea mai multă proteină per conservă din tot raftul.',
        'Toarn-o peste 150 g paste fierte și ai o masă de 55 g proteină pentru sub 22 lei.',
        'Verifică procentul de carne pe etichetă: sub 40% și devine practic sos de boia.'
      ],
      warnings: ['5,6 g sare per conservă. Unele variante conțin făină de grâu ca îngroșător.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 48 h.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete conserve gulaș RO', 'valori tipice gulaș de vită la conservă']
    },

    {
      id: 'r-sarmale-borcan',
      name: 'Jarred Cabbage Rolls',
      nameRo: 'Sarmale la borcan',
      brand: 'Bucătăria Noastră / Gustos',
      category: 'ready-meals',
      subcategory: 'Conserve & borcane cu mâncare gătită',
      emoji: '🍃',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion conserve, raftul de borcane cu mâncare gătită',
          priceRon: 26.9,
          packGrams: 700,
          packLabel: 'borcan 700 g (~8 sarmale)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve tradiționale',
          priceRon: 28.9,
          packGrams: 700,
          packLabel: 'borcan 700 g',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'usual',
          aisle: 'Zona HoReCa, borcane mari',
          priceRon: 45,
          packGrams: 1500,
          packLabel: 'borcan 1,5 kg',
          note: 'Doar dacă gătești pentru mai mulți.'
        }
      ],
      sibiuNote: 'În Sibiu, sarmalele de casă de la Piața Cibin (de la producători locali, în perioada sărbătorilor) sunt și mai bune și adesea mai ieftine pe kg.',
      per100g: {
        kcal: 148,
        protein: 7,
        carbs: 8,
        sugars: 1.5,
        fat: 9.5,
        satFat: 3.5,
        fiber: 1.8,
        salt: 1.2
      },
      serving: {
        grams: 350,
        label: '4 sarmale (~350 g)'
      },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['cratiță sau bol de microunde'],
        steps: [
          'Scoate sarmalele din borcan cu tot cu sos.',
          'Încălzește 5–6 minute la microunde sau 10 minute la foc mic.',
          'Servește cu smântână și ardei iute.'
        ],
        yieldNote: 'Borcan de 700 g = ~8 sarmale medii.'
      },
      taste: {
        profile: 'Acrișor de varză murată, carne tocată cu orez, afumătură discretă',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Foaie moale, umplutură densă cu orez',
        notes: 'Nu ating sarmalele de casă, dar sunt cea mai bună mâncare tradițională la borcan.'
      },
      stats: {
        taste: 72,
        satiety: 78,
        convenience: 86,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Masă grea de iarnă — orezul din umplutură scade densitatea proteică.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'romanian-classic', 'winter', 'mid-price', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Smântână', 'Mămăligă', 'Ardei iute', 'Pâine de casă'],
      tips: [
        '4 sarmale (350 g) = 24,5 g proteină la 518 kcal. Doar 19% din calorii vin din proteină — orezul face diferența.',
        'Adaugă 150 g iaurt grecesc în loc de smântână: +15 g proteină, cu 100 kcal mai puțin.',
        'Borcanul întreg are 49 g proteină, dar și 1036 kcal și 8,4 g sare. Nu-l mânca dintr-o dată.'
      ],
      warnings: ['Sodiu foarte ridicat. Conțin carne de porc. Verifică dacă foile de varză sunt din varză murată (sare mult mai multă).'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 3 zile.',
      shelfLife: '~2 ani sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete sarmale la borcan RO', 'valori tipice sarmale comerciale']
    },

    {
      id: 'r-ciorba-burta-conserva',
      name: 'Canned Tripe Soup',
      nameRo: 'Ciorbă de burtă la conservă',
      brand: 'Ardealul',
      category: 'ready-meals',
      subcategory: 'Supe & ciorbe gata făcute',
      emoji: '🍜',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raion conserve, secțiunea supe',
          priceRon: 15.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve, raftul de ciorbe',
          priceRon: 16.9,
          packGrams: 410,
          packLabel: 'conservă 410 g',
          note: 'Există și marcă proprie Carrefour.'
        }
      ],
      sibiuNote: 'Remediul clasic de mahmureală în Sibiu. Alternativa: ciorbă de burtă proaspătă la caserolă de la restaurantele din centru, la 25–30 lei.',
      per100g: {
        kcal: 79,
        protein: 4.9,
        carbs: 2.3,
        sugars: 0.8,
        fat: 5.6,
        satFat: 2.2,
        fiber: 0.4,
        salt: 1
      },
      micros: {
        b12Ug: 0.6,
        zincMg: 1.1,
        potassiumMg: 150
      },
      serving: {
        grams: 400,
        label: '1 conservă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['cratiță'],
        steps: [
          'Golește conserva într-o cratiță.',
          'Încălzește la foc mic 5 minute, fără să fiarbă.',
          'Adaugă usturoi pisat, oțet și smântână după gust.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Grasă, acrișoară de la oțet, cu usturoi puternic',
        intensity: 4,
        sweetness: 0,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Fâșii de burtă elastice în supă cremoasă',
        notes: 'Ori o iubești, ori nu o atingi. Nutrițional e slabă în proteină pentru câte calorii are.'
      },
      stats: {
        taste: 58,
        satiety: 55,
        convenience: 90,
        versatility: 25
      },
      timing: {
        breakfast: 3,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 2,
        dinner: 3,
        beforeBed: 2
      },
      timingNote: 'Mâncare de mahmureală, nu de antrenament.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'romanian-classic', 'hangover', 'budget', 'high-sodium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: false,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Usturoi pisat', 'Oțet', 'Ardei iute', 'Pâine'],
      tips: [
        'Conserva întreagă = doar 19,6 g proteină la 316 kcal. Este apă, grăsime și colagen — nu proteină de calitate pentru mușchi.',
        'Colagenul din burtă are un profil de aminoacizi incomplet (fără triptofan) — nu contează la fel ca proteina din carne.',
        'Dacă vrei ciorbă cu proteină reală, ia ciorbă de perișoare sau supă de pui cu carne multă și adaugă piept de pui feliat.'
      ],
      warnings: ['4 g sare per conservă. Grăsime ridicată. Conține lapte (smântână).'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 48 h.',
      shelfLife: '~2 ani sigilat',
      dataConfidence: 'medium',
      sources: ['eatntrack.ro — Conservă ciorbă de burtă Ardealul', 'etichete conserve RO']
    },

    {
      id: 'r-supa-pui-taitei-borcan',
      name: 'Ready Chicken Noodle Soup',
      nameRo: 'Supă de pui cu tăiței, gata făcută',
      brand: 'Gustos / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Supe & ciorbe gata făcute',
      emoji: '🍲',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion conserve, raftul de supe',
          priceRon: 11.9,
          packGrams: 400,
          packLabel: 'conservă/borcan 400 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 12.9,
          packGrams: 400,
          packLabel: 'borcan 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Bună de ținut în birou pentru zilele reci sibiene, dar tratează-o ca pe o băutură caldă, nu ca pe o masă.',
      per100g: {
        kcal: 45,
        protein: 3,
        carbs: 5,
        sugars: 0.6,
        fat: 1.4,
        satFat: 0.4,
        fiber: 0.3,
        salt: 0.9
      },
      serving: {
        grams: 400,
        label: '1 porție întreagă (400 g)'
      },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 1,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['bol de microunde'],
        steps: [
          'Golește în bol.',
          'Încălzește 3 minute la 800 W.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Bulion sărat de pui, tăiței moi, morcov dulceag',
        intensity: 2,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 1,
        texture: 'Lichidă, cu tăiței care se dezintegrează',
        notes: 'Reconfortantă, dar practic apă sărată cu paste.'
      },
      stats: {
        taste: 52,
        satiety: 45,
        convenience: 93,
        versatility: 40
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 1,
        lunch: 3,
        snack: 4,
        dinner: 3,
        beforeBed: 3
      },
      timingNote: 'Umple stomacul cu puține calorii — utilă în cutting, inutilă pentru proteină.',
      tags: ['ready-to-eat', 'shelf-stable', 'microwave', 'low-kcal', 'budget', 'winter', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Piept de pui feliat', 'Ou bătut', 'Pâine prăjită', 'Lămâie'],
      tips: [
        'Toată porția de 400 g = 12 g proteină la 180 kcal. Ca masă e insuficientă, ca supă de început e ok.',
        'Bate un ou și toarnă-l în supa clocotită: +6 g proteină pentru 70 kcal, în 30 de secunde.',
        'Sau adaugă 100 g piept de pui feliat: ajungi la 33 g proteină și devine masă adevărată.'
      ],
      warnings: ['3,6 g sare per porție. Conține gluten (tăiței) și țelină.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 48 h.',
      shelfLife: '~18 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete supe gata făcute RO', 'valori tipice supă de pui la conservă']
    },

    {
      id: 'r-naut-condimentat-borcan',
      name: 'Seasoned Ready Chickpeas',
      nameRo: 'Năut gătit condimentat, la borcan',
      brand: 'Bonduelle / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Leguminoase gata gătite',
      emoji: '🫛',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Raion conserve de legume, lângă fasole',
          priceRon: 7.99,
          packGrams: 400,
          packLabel: 'conservă 400 g (240 g scurs)',
          note: 'Varianta simplă e și mai ieftină.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Conserve de legume',
          priceRon: 8.9,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve bio & legume',
          priceRon: 10.9,
          packGrams: 400,
          packLabel: 'borcan 400 g condimentat',
          note: 'Varianta cu condimente e gata de mâncat.'
        }
      ],
      sibiuNote: 'Cea mai ieftină proteină shelf-stable din orice magazin sibian. Ține 3 conserve în birou și nu mai ajungi niciodată la automatul de snacksuri.',
      per100g: {
        kcal: 122,
        protein: 6.5,
        carbs: 14,
        sugars: 1.2,
        fat: 3.5,
        satFat: 0.5,
        fiber: 5,
        salt: 0.8
      },
      micros: {
        ironMg: 1.9,
        potassiumMg: 240,
        zincMg: 1.1
      },
      serving: {
        grams: 240,
        label: '1 conservă scursă (240 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['strecurătoare'],
        steps: [
          'Scurge și clătește năutul.',
          'Mănâncă rece sau încălzește 90 de secunde la microunde.'
        ],
        yieldNote: 'Conservă 400 g = 240 g năut scurs.'
      },
      taste: {
        profile: 'Nucos, ușor făinos, cu chimion și boia dacă e varianta condimentată',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 2,
        texture: 'Bob ferm la exterior, făinos în interior',
        notes: 'Fad singur, excelent ca bază peste care pui orice.'
      },
      stats: {
        taste: 55,
        satiety: 85,
        convenience: 92,
        versatility: 88
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Carbohidrați lenți + fibre: cel mai bun prânz vegetal shelf-stable.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'high-fiber', 'cheap-protein', 'budget', 'iron-rich', 'office-lunch'],
      diet: {
        vegan: true,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Ton la conservă', 'Ulei de măsline', 'Lămâie', 'Roșii cherry'],
      tips: [
        'Conserva scursă (240 g) = 15,6 g proteină la 293 kcal, pentru 8 lei. 0,51 lei/g proteină — bun pentru o sursă vegetală.',
        'Proteina din năut e incompletă (metionină scăzută). Combină-l cu ton, ou sau iaurt și problema dispare.',
        'Clătește-l bine: elimini până la 40% din sodiu și reduci balonarea.'
      ],
      warnings: ['Fibre multe — dacă nu ești obișnuit, începe cu jumătate de conservă.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 3 zile într-un recipient închis.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'high',
      sources: ['Etichete năut la conservă Lidl / Bonduelle', 'CIQUAL năut fiert']
    },

    {
      id: 'r-linte-gatita-borcan',
      name: 'Ready-Cooked Lentils',
      nameRo: 'Linte gătită, la conservă',
      brand: 'Bonduelle / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Leguminoase gata gătite',
      emoji: '🥣',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Conserve de legume, lângă năut',
          priceRon: 8.9,
          packGrams: 400,
          packLabel: 'conservă 400 g (250 g scurs)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Conserve, secțiunea bio',
          priceRon: 10.5,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'occasional',
          aisle: 'Raft conserve, apare la promoții tematice',
          priceRon: 7.99,
          packGrams: 400,
          packLabel: 'conservă 400 g',
          note: 'Doar în săptămânile cu temă mediteraneană.'
        }
      ],
      sibiuNote: 'Se găsește mai greu decât năutul în Sibiu — Kaufland Șos. Alba Iulia și Carrefour Shopping City au stocul cel mai constant.',
      per100g: {
        kcal: 107,
        protein: 7.5,
        carbs: 12,
        sugars: 1,
        fat: 2.2,
        satFat: 0.4,
        fiber: 4.5,
        salt: 0.7
      },
      micros: {
        ironMg: 2.4,
        potassiumMg: 280,
        zincMg: 1.2
      },
      serving: {
        grams: 250,
        label: '1 conservă scursă (250 g)'
      },
      effort: 0,
      timeMin: 2,
      activeTimeMin: 2,
      cooking: {
        method: 'none',
        difficulty: 'trivial',
        equipment: ['strecurătoare'],
        steps: [
          'Scurge și clătește lintea.',
          'Mănâncă rece în salată sau încălzește 90 de secunde.'
        ],
        yieldNote: 'Conservă 400 g = ~250 g linte scursă.'
      },
      taste: {
        profile: 'Pământoasă, ușor dulceagă, discretă',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 1,
        texture: 'Boabe moi care se sfărâmă ușor',
        notes: 'Mai fadă decât năutul, dar și mai slabă în grăsime.'
      },
      stats: {
        taste: 50,
        satiety: 86,
        convenience: 90,
        versatility: 85
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Indice glicemic mic — energie stabilă câteva ore.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'high-fiber', 'cheap-protein', 'iron-rich', 'budget', 'low-fat'],
      diet: {
        vegan: true,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Ou fiert', 'Iaurt grecesc', 'Oțet balsamic', 'Ceapă roșie'],
      tips: [
        'Conserva scursă (250 g) = 18,8 g proteină la 268 kcal. Cel mai bun raport proteină/calorie dintre leguminoasele gata gătite.',
        '6 mg fier per conservă — jumătate din necesarul zilnic al unei femei. Mănânc-o cu ceva acid (lămâie) ca să absorbi mai bine fierul.',
        'Amestecă lintea rece cu 150 g iaurt grecesc și muștar: gustare de 34 g proteină în 2 minute.'
      ],
      warnings: ['Fibre multe. Fierul non-hemic se absoarbe slab fără vitamina C.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 3 zile.',
      shelfLife: '2–3 ani sigilat',
      dataConfidence: 'high',
      sources: ['Etichete linte la conservă Bonduelle', 'CIQUAL linte fiartă']
    },

    {
      id: 'r-pizza-salami-congelata',
      name: 'Frozen Salami Pizza',
      nameRo: 'Pizza congelată cu salam',
      brand: 'Edenia',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🍕',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, culoarul de pizza',
          priceRon: 17.9,
          packGrams: 331,
          packLabel: 'pizza congelată 331 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Congelate, raftul de pizza',
          priceRon: 18.9,
          packGrams: 331,
          packLabel: 'pizza 331 g',
          note: 'Frecvent la 2+1 gratis.'
        },
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator, lângă cartofi prăjiți',
          priceRon: 13.9,
          packGrams: 350,
          packLabel: 'pizza marcă proprie 350 g',
          note: 'Marca proprie e cu 25% mai ieftină.'
        }
      ],
      sibiuNote: 'Toate hipermarketurile din Sibiu au gama Edenia (producător românesc, Macromex). La Selgros găsești baxuri de 6 pizza cu preț unitar mai mic.',
      per100g: {
        kcal: 256,
        protein: 11.6,
        carbs: 28.2,
        sugars: 3.7,
        fat: 10.3,
        satFat: 4.4,
        fiber: 2,
        salt: 1.3
      },
      micros: {
        calciumMg: 180
      },
      serving: {
        grams: 331,
        label: '1 pizza întreagă (331 g)'
      },
      effort: 1,
      timeMin: 20,
      activeTimeMin: 2,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['cuptor', 'tavă'],
        steps: [
          'Preîncălzește cuptorul la 220 °C.',
          'Scoate pizza din folie și pune-o direct pe grătarul cuptorului.',
          'Coace 12–14 minute, până se rumenește brânza.',
          'Lasă 2 minute înainte de a tăia.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Blat subțire crocant, sos de roșii dulceag, salam sărat și gras',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Crocantă pe margini, moale la mijloc',
        notes: 'Onest bună pentru un produs congelat, dar nutrițional e pâine cu grăsime.'
      },
      stats: {
        taste: 76,
        satiety: 58,
        convenience: 78,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 3,
        snack: 2,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Carbohidrați mulți, proteină moderată — cină de vineri, nu masă de progres.',
      tags: ['frozen', 'microwave', 'processed', 'high-kcal', 'budget', 'kid-friendly', 'imported'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Salată verde', 'Ardei iute', 'Ton la conservă', 'Iaurt grecesc cu usturoi'],
      tips: [
        'Pizza întreagă = 38 g proteină la 847 kcal. O felie (1/4) = 9,5 g proteină la 212 kcal. Sună bine până realizezi că mănânci toată pizza.',
        'Truc real: pune peste ea 80 g piept de pui feliat sau o conservă de ton scursă înainte de coacere. Urci la 55–60 g proteină cu doar 100–130 kcal în plus.',
        'Coace-o pe grătarul cuptorului, nu pe tavă — altfel blatul rămâne moale dedesubt.'
      ],
      warnings: ['Conține gluten și lapte. 4,3 g sare per pizza. Doar 18% din calorii vin din proteină.'],
      storage: 'Congelator -18 °C. Nu recongela după decongelare.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'high',
      sources: ['Eticheta Edenia Pizza Salami 331 g', 'edenia-foods.ro']
    },

    {
      id: 'r-lasagna-congelata',
      name: 'Frozen Lasagna',
      nameRo: 'Lasagna congelată bolognese',
      brand: 'Edenia / K-Classic (Kaufland)',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🍝',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, raftul de mâncăruri gata',
          priceRon: 19.9,
          packGrams: 400,
          packLabel: 'caserolă congelată 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Congelate, preparate italiene',
          priceRon: 22.9,
          packGrams: 400,
          packLabel: 'caserolă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Bună de ținut în congelator pentru serile de iarnă din Sibiu când nu vrei să ieși — dar tratează-o ca pe paste, nu ca pe carne.',
      per100g: {
        kcal: 143,
        protein: 7.5,
        carbs: 13,
        sugars: 2.5,
        fat: 6.5,
        satFat: 3,
        fiber: 1,
        salt: 0.8
      },
      micros: {
        calciumMg: 120,
        ironMg: 0.9
      },
      serving: {
        grams: 400,
        label: '1 caserolă întreagă (400 g)'
      },
      effort: 1,
      timeMin: 45,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['cuptor'],
        steps: [
          'Preîncălzește cuptorul la 200 °C.',
          'Scoate capacul de carton, lasă folia perforată.',
          'Coace 40 de minute din stare congelată.',
          'Scoate folia în ultimele 8 minute ca să se rumenească.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Sos bolognese dulceag, bechamel cremos, foi moi',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 4,
        texture: 'Moale peste tot, cu crustă de brânză deasupra',
        notes: 'Confortabilă, dar carnea e mult mai puțină decât sugerează poza de pe cutie.'
      },
      stats: {
        taste: 70,
        satiety: 65,
        convenience: 60,
        versatility: 25
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 2,
        lunch: 4,
        snack: 1,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: '40 de minute de cuptor — planific-o, nu o improviza când ești deja flămând.',
      tags: ['frozen', 'processed', 'high-kcal', 'mid-price', 'winter', 'kid-friendly'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Salată verde cu oțet', 'Parmezan ras', 'Ardei iute', 'Iaurt grecesc'],
      tips: [
        'Caserola întreagă = 30 g proteină la 572 kcal. Doar 21% din calorii din proteină — mediocru.',
        'Rade 30 g parmezan deasupra în ultimele minute: +10 g proteină pentru 120 kcal.',
        'Timpul real e 45 de minute cu preîncălzire. Dacă ai nevoie de mâncare în 5 minute, nu asta e alegerea.'
      ],
      warnings: ['Conține gluten, lapte, ou și de obicei carne de porc în amestecul bolognese.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete lasagna congelată Edenia / K-Classic', 'valori tipice lasagna comercială']
    },

    {
      id: 'r-cordon-bleu-congelat',
      name: 'Frozen Chicken Cordon Bleu',
      nameRo: 'Cordon bleu de pui congelat',
      brand: 'Edenia',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, secțiunea semipreparate din carne',
          priceRon: 21.9,
          packGrams: 250,
          packLabel: 'pachet 250 g (2 bucăți)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Congelate, semipreparate',
          priceRon: 22.9,
          packGrams: 250,
          packLabel: 'pachet 250 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelate, format mare',
          priceRon: 62,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: 'Format HoReCa, cel mai bun preț pe kg.'
        }
      ],
      sibiuNote: 'Edenia este marcă a Macromex, distribuită în tot Sibiul. Selgros și Metro au formatele de 1 kg care coboară prețul la ~62 lei/kg.',
      per100g: {
        kcal: 201,
        protein: 18.3,
        carbs: 12,
        sugars: 1,
        fat: 8.7,
        satFat: 2.5,
        fiber: 1,
        salt: 1.2
      },
      micros: {
        calciumMg: 90,
        zincMg: 1,
        b12Ug: 0.4
      },
      serving: {
        grams: 125,
        label: '1 bucată (125 g)'
      },
      effort: 1,
      timeMin: 25,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['cuptor sau airfryer', 'tavă'],
        steps: [
          'Preîncălzește cuptorul la 200 °C (sau airfryer la 190 °C).',
          'Pune bucățile congelate pe hârtie de copt, fără să se atingă.',
          'Coace 22–25 de minute, întorcând o dată la jumătate.',
          'Verifică să fie fierbinte la mijloc înainte de a mânca.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pane crocant, pui fraged, cu șuncă și cașcaval topit în mijloc',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Crustă crocantă, interior moale și filant',
        notes: 'Cel mai bun raport gust/proteină din congelator.'
      },
      stats: {
        taste: 80,
        satiety: 75,
        convenience: 68,
        versatility: 55
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Proteină decentă, dar 25 de minute de cuptor — pregătește-l când ai timp.',
      tags: ['frozen', 'high-protein', 'processed', 'kid-friendly', 'mid-price', 'meal-prep'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Salată de varză', 'Cartofi la cuptor', 'Lămâie', 'Muștar'],
      tips: [
        '2 bucăți (250 g) = 46 g proteină la 503 kcal. Cel mai bun produs proteic din tot congelatorul de semipreparate.',
        'La airfryer 190 °C timp de 18 minute iese mai crocant și fără ulei adăugat.',
        'Nu-l prăji în ulei: adaugi 100–150 kcal fără niciun beneficiu de gust față de cuptor.'
      ],
      warnings: ['Conține gluten, lapte, ou și carne de porc (șuncă). Nu-l mânca dacă mijlocul nu e complet fierbinte.'],
      storage: 'Congelator -18 °C. Se gătește direct din congelat.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'high',
      sources: ['Eticheta Edenia Cordon Bleu de pui 250 g', 'edenia-foods.ro']
    },

    {
      id: 'r-nuggets-pui-congelate',
      name: 'Frozen Chicken Nuggets',
      nameRo: 'Nuggets de pui congelate',
      brand: 'Edenia / K-Classic (Kaufland)',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, semipreparate din pui',
          priceRon: 24.9,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator, lângă cartofi',
          priceRon: 21.9,
          packGrams: 500,
          packLabel: 'pungă 500 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Congelate format mare',
          priceRon: 39.9,
          packGrams: 1000,
          packLabel: 'pungă 1 kg',
          note: ''
        }
      ],
      sibiuNote: 'Alegere de familie în Sibiu. Verifică pe pungă procentul de carne: variantele bune au peste 60% piept de pui, cele slabe coboară la 45%.',
      per100g: {
        kcal: 250,
        protein: 14,
        carbs: 18,
        sugars: 1,
        fat: 13,
        satFat: 1.8,
        fiber: 1.2,
        salt: 1.3
      },
      serving: {
        grams: 150,
        label: 'porție de ~8 nuggets (150 g)'
      },
      effort: 1,
      timeMin: 18,
      activeTimeMin: 3,
      cooking: {
        method: 'airfryer',
        difficulty: 'trivial',
        equipment: ['airfryer sau cuptor'],
        steps: [
          'Preîncălzește airfryerul la 190 °C.',
          'Pune nuggets într-un singur strat, fără să se atingă.',
          'Gătește 12–14 minute, scuturând coșul o dată.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pane crocant, interior moale și fad, gust puternic de condiment industrial',
        intensity: 3,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 3,
        texture: 'Crocant afară, spongios înăuntru',
        notes: 'Copiii îi adoră; adulții îi mănâncă și se prefac că nu s-a întâmplat.'
      },
      stats: {
        taste: 68,
        satiety: 60,
        convenience: 74,
        versatility: 50
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
      timingNote: 'Proteină mediocră pentru caloriile pe care le aduce.',
      tags: ['frozen', 'processed', 'kid-friendly', 'budget', 'high-kcal', 'meal-prep'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Sos de iaurt cu usturoi', 'Salată verde', 'Muștar cu miere', 'Cartofi la airfryer'],
      tips: [
        '150 g (8 buc) = 21 g proteină la 375 kcal. Doar 22% din calorii din proteină.',
        'La airfryer nu ai nevoie de ulei deloc — economisești 80–100 kcal față de prăjire.',
        'Alternativă cu profil dublu mai bun: aceleași 375 kcal în cordon bleu îți dau 34 g proteină.'
      ],
      warnings: ['Conțin gluten. Procent de carne variabil (45–65%) — citește eticheta.'],
      storage: 'Congelator -18 °C.',
      shelfLife: '~18 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete nuggets Edenia / K-Classic', 'valori tipice nuggets congelate RO']
    },

    {
      id: 'r-snitel-pui-congelat',
      name: 'Frozen Breaded Chicken Schnitzel',
      nameRo: 'Șnițel de pui congelat',
      brand: 'Edenia / La Provincia',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🍤',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, semipreparate din carne',
          priceRon: 26.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Congelate, semipreparate',
          priceRon: 27.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'La Metro Sibiu găsești formate de 2 kg pentru HoReCa, utile dacă ai congelator mare și familie numeroasă.',
      per100g: {
        kcal: 238,
        protein: 15,
        carbs: 19,
        sugars: 1.2,
        fat: 11,
        satFat: 1.5,
        fiber: 1.5,
        salt: 1.2
      },
      serving: {
        grams: 200,
        label: '2 șnițele (200 g)'
      },
      effort: 1,
      timeMin: 20,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['cuptor sau airfryer'],
        steps: [
          'Preîncălzește la 200 °C.',
          'Coace 18–20 de minute din stare congelată, întorcând la jumătate.',
          'Stoarce lămâie înainte de a servi.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pesmet auriu, pui fad, condimente discrete',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Crustă crocantă, carne uneori uscată',
        notes: 'Preferabil nuggets: bucată întreagă de carne, nu pastă formată.'
      },
      stats: {
        taste: 66,
        satiety: 70,
        convenience: 70,
        versatility: 62
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 1
      },
      timingNote: 'Bun ca bază de masă, mai ales dacă adaugi o salată mare.',
      tags: ['frozen', 'high-protein', 'processed', 'kid-friendly', 'mid-price', 'meal-prep'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Lămâie', 'Salată de varză', 'Piure de cartofi', 'Sos de usturoi'],
      tips: [
        '200 g (2 bucăți) = 30 g proteină la 476 kcal. Similar cu șnițelul de la bistro, dar la jumătate de preț.',
        'Caută pe pungă "din piept de pui întreg" — variantele din carne formată au 3–4 g mai puțină proteină la 100 g.',
        'Airfryer 190 °C, 15 minute: cel mai bun rezultat, fără ulei.'
      ],
      warnings: ['Conține gluten și ou. Nu-l mânca dacă interiorul nu e complet fierbinte.'],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete șnițel congelat Edenia / La Provincia', 'valori tipice RO']
    },

    {
      id: 'r-burger-vita-congelat',
      name: 'Frozen Beef Burger Patty',
      nameRo: 'Burger de vită congelat',
      brand: 'K-Classic (Kaufland) / Carrefour',
      category: 'ready-meals',
      subcategory: 'Congelate gata de tigaie',
      emoji: '🍔',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, carne tocată și burgeri',
          priceRon: 32.9,
          packGrams: 452,
          packLabel: 'pachet 4 burgeri x 113 g',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'usual',
          aisle: 'Congelator, secțiunea de carne',
          priceRon: 29.9,
          packGrams: 440,
          packLabel: 'pachet 4 burgeri',
          note: ''
        },
        {
          name: 'Metro',
          availability: 'always',
          aisle: 'Congelate HoReCa',
          priceRon: 89,
          packGrams: 1500,
          packLabel: 'cutie 1,5 kg',
          note: 'Cel mai ieftin pe kg.'
        }
      ],
      sibiuNote: 'Metro Sibiu are formatele mari; pentru 2 persoane, pachetul de 4 de la Kaufland e mai practic.',
      per100g: {
        kcal: 252,
        protein: 17,
        carbs: 1,
        sugars: 0.5,
        fat: 20,
        satFat: 8,
        fiber: 0,
        salt: 0.9
      },
      micros: {
        ironMg: 2.2,
        zincMg: 4,
        b12Ug: 2.1,
        cholesterolMg: 70
      },
      serving: {
        grams: 113,
        label: '1 burger (113 g)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Încinge tigaia bine, fără ulei.',
          'Pune burgerii congelați și lasă 5 minute pe o parte.',
          'Întoarce și mai lasă 5 minute; presează ușor o singură dată.',
          'Sare și piper la final.'
        ],
        yieldNote: '113 g crud = ~85 g gătit.'
      },
      taste: {
        profile: 'Carne de vită cu crustă rumenită, gras și sărat',
        intensity: 4,
        sweetness: 0,
        saltiness: 3,
        umami: 5,
        richness: 5,
        texture: 'Suculent dacă nu îl gătești excesiv',
        notes: 'Bun, dar 71% din calorii vin din grăsime.'
      },
      stats: {
        taste: 78,
        satiety: 72,
        convenience: 66,
        versatility: 65
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 4,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Grăsimea încetinește digestia — nu e o alegere bună imediat după antrenament.',
      tags: ['frozen', 'high-protein', 'iron-rich', 'b12', 'high-kcal', 'bulking', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: false,
        porkFree: true
      },
      pairings: ['Chiflă integrală', 'Cașcaval', 'Ceapă caramelizată', 'Muștar'],
      tips: [
        '1 burger = 19 g proteină la 285 kcal. Doi burgeri într-o chiflă = 38 g proteină, dar și 800 kcal cu tot cu chiflă și sos.',
        'Caută variantele cu 15–17% grăsime; cele "premium" cu 20%+ îți dau doar calorii în plus.',
        'Nu presa burgerul de mai multe ori în tigaie — scoți sucul și rămâi cu o rondelă uscată.'
      ],
      warnings: ['Grăsimi saturate ridicate. Gătește complet — carnea tocată nu se mănâncă în sânge din produse congelate.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete burgeri congelați K-Classic / Carrefour', 'valori tipice burger de vită 15% grăsime']
    },

    {
      id: 'r-peste-pane-congelat',
      name: 'Frozen Breaded Fish Fillets',
      nameRo: 'File de pește pane congelat',
      brand: 'Iglo / Edenia',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🐟',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, secțiunea de pește',
          priceRon: 27.9,
          packGrams: 450,
          packLabel: 'cutie 450 g (6 bucăți)',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Congelator, lângă pește',
          priceRon: 22.9,
          packGrams: 400,
          packLabel: 'cutie 400 g',
          note: 'Marca proprie e mai ieftină.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Congelate, pește',
          priceRon: 29.9,
          packGrams: 450,
          packLabel: 'cutie 450 g',
          note: ''
        }
      ],
      sibiuNote: 'Sibiul nu are tradiție de pescărie, așa că peștele congelat pane e cea mai accesibilă formă de pește pentru majoritatea. Pescăria din Piața Cibin are alternative proaspete.',
      per100g: {
        kcal: 208,
        protein: 12,
        carbs: 16,
        sugars: 1,
        fat: 10.5,
        satFat: 1.2,
        fiber: 1,
        salt: 0.9
      },
      micros: {
        omega3Mg: 180,
        b12Ug: 1,
        vitDUg: 1.5,
        potassiumMg: 200
      },
      serving: {
        grams: 150,
        label: '2 bucăți (150 g)'
      },
      effort: 1,
      timeMin: 22,
      activeTimeMin: 3,
      cooking: {
        method: 'oven',
        difficulty: 'trivial',
        equipment: ['cuptor sau airfryer'],
        steps: [
          'Preîncălzește la 220 °C.',
          'Coace 20 de minute din stare congelată, întorcând la jumătate.',
          'Servește cu lămâie și sos tartar.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pane crocant, pește alb fad, gust marin discret',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 3,
        texture: 'Crustă crocantă, carne care se desface în fulgi',
        notes: 'Foarte iertător la gătit, dar crusta cântărește aproape cât peștele.'
      },
      stats: {
        taste: 68,
        satiety: 66,
        convenience: 70,
        versatility: 55
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Sursă de omega-3 și vitamina D, dar diluată de panificație.',
      tags: ['frozen', 'omega3', 'processed', 'kid-friendly', 'mid-price', 'b12'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Sos tartar', 'Mazăre', 'Cartofi la cuptor'],
      tips: [
        '150 g (2 bucăți) = 18 g proteină la 312 kcal. Crusta consumă jumătate din calorii fără să aducă proteină.',
        'Verifică pe cutie procentul de pește: variantele bune au peste 65%, cele slabe coboară la 50%.',
        'File de merluciu simplu congelat (fără pane) îți dă 17 g proteină la doar 80 kcal per 100 g — de trei ori mai eficient.'
      ],
      warnings: ['Conține gluten și pește. Verifică prezența oaselor la variantele ieftine.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete Iglo / Edenia pește pane', 'valori tipice file pane RO']
    },

    {
      id: 'r-paella-fructe-mare-congelata',
      name: 'Frozen Seafood Paella',
      nameRo: 'Paella cu fructe de mare, congelată',
      brand: 'Edenia / Carrefour',
      category: 'ready-meals',
      subcategory: 'Congelate gata de tigaie',
      emoji: '🦐',
      unit: 'g',
      stores: [
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Congelator, secțiunea de fructe de mare',
          priceRon: 34.9,
          packGrams: 750,
          packLabel: 'pungă 750 g (2 porții)',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'occasional',
          aisle: 'Congelate, mâncăruri gata',
          priceRon: 32.9,
          packGrams: 750,
          packLabel: 'pungă 750 g',
          note: 'Apare în campaniile tematice spaniole.'
        }
      ],
      sibiuNote: 'Se găsește neregulat în Sibiu; Carrefour din Shopping City e cel mai probabil să o aibă pe stoc.',
      per100g: {
        kcal: 115,
        protein: 5.5,
        carbs: 17,
        sugars: 1.5,
        fat: 2.5,
        satFat: 0.5,
        fiber: 1,
        salt: 0.9
      },
      micros: {
        omega3Mg: 120,
        zincMg: 0.8,
        b12Ug: 1.5,
        ironMg: 1
      },
      serving: {
        grams: 375,
        label: 'jumătate de pungă (375 g)'
      },
      effort: 2,
      timeMin: 15,
      activeTimeMin: 10,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie mare', 'spatulă'],
        steps: [
          'Încinge o lingură de ulei în tigaie.',
          'Adaugă conținutul congelat și acoperă.',
          'Gătește 10–12 minute la foc mediu, amestecând des.',
          'Stoarce lămâie la final.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Orez cu șofran, fructe de mare discrete, ardei și mazăre',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Orez ușor lipicios, calamar elastic',
        notes: 'Arată exotic, dar e în mare parte orez cu decor marin.'
      },
      stats: {
        taste: 62,
        satiety: 60,
        convenience: 62,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 4,
        snack: 1,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Multe carbohidrați, puțină proteină — util pre-workout, slab ca masă principală.',
      tags: ['frozen', 'omega3', 'processed', 'premium', 'summer', 'b12'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lămâie', 'Pătrunjel', 'Salată verde', 'Creveți congelați în plus'],
      tips: [
        'Jumătate de pungă (375 g) = doar 20,6 g proteină la 431 kcal. Este orez, nu fructe de mare.',
        'Aruncă 150 g creveți congelați în tigaie odată cu paella: +18 g proteină pentru 100 kcal, și devine masa pe care ți-o promitea ambalajul.',
        'Verifică pe pungă procentul total de fructe de mare — rareori depășește 15%.'
      ],
      warnings: ['Conține crustacee și moluște. Densitate proteică slabă pentru preț.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'low',
      sources: ['Etichete paella congelată Carrefour / Edenia', 'valori estimate paella comercială']
    },

    {
      id: 'r-orez-cu-pui-congelat',
      name: 'Frozen Chicken and Rice Meal',
      nameRo: 'Orez cu pui congelat',
      brand: 'Edenia / K-Classic (Kaufland)',
      category: 'ready-meals',
      subcategory: 'Congelate gata de tigaie',
      emoji: '🍛',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator, mâncăruri gata',
          priceRon: 19.9,
          packGrams: 400,
          packLabel: 'pungă 400 g (1 porție mare)',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Congelate, preparate gata',
          priceRon: 21.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai simplă masă congelată completă din supermarketurile sibiene: o tigaie, 10 minute, zero decizii.',
      per100g: {
        kcal: 120,
        protein: 7,
        carbs: 16,
        sugars: 1.5,
        fat: 2.8,
        satFat: 0.6,
        fiber: 1.2,
        salt: 0.8
      },
      serving: {
        grams: 400,
        label: '1 pungă întreagă (400 g)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 8,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie', 'spatulă'],
        steps: [
          'Încinge tigaia cu o linguriță de ulei.',
          'Adaugă conținutul congelat, acoperă 4 minute.',
          'Amestecă și mai gătește 5–6 minute descoperit.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Orez cu legume și cuburi mici de pui, condimentat asiatic sau mediteranean',
        intensity: 2,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Orez ferm, pui fibros, legume ușor moi',
        notes: 'Corect, previzibil, fără personalitate.'
      },
      stats: {
        taste: 58,
        satiety: 72,
        convenience: 70,
        versatility: 55
      },
      timing: {
        breakfast: 1,
        preWorkout: 4,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Carbohidrați + proteină: masă pre- sau post-antrenament rezonabilă dacă adaugi carne.',
      tags: ['frozen', 'processed', 'budget', 'meal-prep', 'office-lunch', 'kid-friendly'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Piept de pui feliat', 'Sos de soia', 'Ou prăjit', 'Ardei iute'],
      tips: [
        'Punga întreagă = 28 g proteină la 480 kcal. Ok, dar nu grozav — 23% din calorii din proteină.',
        'Sparge un ou în tigaie în ultimul minut: +6 g proteină, textură mult mai bună.',
        'Cu 100 g piept de pui feliat adăugat ajungi la 49 g proteină pentru 32 lei — cea mai bună masă congelată completă.'
      ],
      warnings: ['Poate conține soia și gluten (sosuri). Sodiu moderat-ridicat.'],
      storage: 'Congelator -18 °C.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete mâncăruri congelate Edenia / K-Classic', 'valori tipice orez cu pui congelat']
    },

    {
      id: 'r-wok-pui-legume-congelat',
      name: 'Frozen Chicken and Vegetable Wok',
      nameRo: 'Wok cu pui și legume, congelat',
      brand: 'Edenia / Iglo',
      category: 'ready-meals',
      subcategory: 'Congelate gata de tigaie',
      emoji: '🥘',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Congelator, mâncăruri gata',
          priceRon: 22.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Lidl',
          availability: 'occasional',
          aisle: 'Congelator, campanii asiatice',
          priceRon: 18.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: 'Apare în săptămânile cu temă asiatică.'
        }
      ],
      sibiuNote: 'Una dintre puținele mâncăruri congelate cu profil nutrițional decent găsibile în Sibiu — merită căutată.',
      per100g: {
        kcal: 96,
        protein: 8,
        carbs: 6,
        sugars: 2.5,
        fat: 4,
        satFat: 0.8,
        fiber: 2,
        salt: 0.9
      },
      micros: {
        potassiumMg: 260,
        ironMg: 0.9
      },
      serving: {
        grams: 400,
        label: '1 pungă întreagă (400 g)'
      },
      effort: 2,
      timeMin: 12,
      activeTimeMin: 9,
      cooking: {
        method: 'pan',
        difficulty: 'easy',
        equipment: ['tigaie mare sau wok'],
        steps: [
          'Încinge wokul foarte tare, cu o linguriță de ulei.',
          'Adaugă conținutul congelat și amestecă permanent 8–10 minute.',
          'Nu acoperi — vrei să evapori apa, nu să fierbi legumele.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Legume crocante, pui condimentat, sos de soia și ghimbir',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 4,
        richness: 2,
        texture: 'Legume care rămân crocante dacă nu le fierbi',
        notes: 'Cea mai bună mâncare congelată din perspectiva proteină/calorie.'
      },
      stats: {
        taste: 66,
        satiety: 78,
        convenience: 68,
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
      timingNote: 'Puține calorii, multă proteină relativ: excelent în perioade de cutting.',
      tags: ['frozen', 'high-fiber', 'low-kcal', 'cutting', 'meal-prep', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Orez la plic', 'Sos de soia', 'Ou', 'Susan prăjit'],
      tips: [
        'Punga întreagă = 32 g proteină la doar 384 kcal. Este cel mai bun raport proteină/calorie din tot congelatorul.',
        'Adaugă un plic de orez la microunde și ai o masă de 500 kcal cu 38 g proteină, gata în 12 minute.',
        'Nu adăuga apă și nu acoperi tigaia: legumele congelate lasă destulă apă singure.'
      ],
      warnings: ['Conține soia și de obicei gluten (sos de soia). Verifică procentul de pui — variantele slabe au sub 15%.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete wok congelat Edenia / Iglo', 'valori tipice amestecuri wok cu pui']
    },

    {
      id: 'r-cascaval-pane-congelat',
      name: 'Frozen Breaded Cheese',
      nameRo: 'Cașcaval pane congelat',
      brand: 'Edenia / K-Classic (Kaufland)',
      category: 'ready-meals',
      subcategory: 'Congelate gata de cuptor',
      emoji: '🧀',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Congelator, semipreparate',
          priceRon: 24.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'usual',
          aisle: 'Congelate, semipreparate',
          priceRon: 26.9,
          packGrams: 400,
          packLabel: 'pungă 400 g',
          note: ''
        }
      ],
      sibiuNote: 'Singura opțiune vegetariană cu proteină reală din congelatorul de semipreparate al magazinelor sibiene.',
      per100g: {
        kcal: 299,
        protein: 18,
        carbs: 18,
        sugars: 1.5,
        fat: 17,
        satFat: 9,
        fiber: 1,
        salt: 1.6
      },
      micros: {
        calciumMg: 420,
        b12Ug: 0.8,
        zincMg: 2
      },
      serving: {
        grams: 150,
        label: '2 bucăți (150 g)'
      },
      effort: 1,
      timeMin: 18,
      activeTimeMin: 3,
      cooking: {
        method: 'airfryer',
        difficulty: 'trivial',
        equipment: ['airfryer sau cuptor'],
        steps: [
          'Preîncălzește airfryerul la 180 °C.',
          'Gătește 10–12 minute din stare congelată.',
          'Nu depăși timpul — cașcavalul curge afară.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Crustă crocantă cu cașcaval topit, sărat și filant',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Crocant afară, complet lichid înăuntru',
        notes: 'Extrem de satisfăcător, extrem de caloric.'
      },
      stats: {
        taste: 82,
        satiety: 64,
        convenience: 72,
        versatility: 45
      },
      timing: {
        breakfast: 2,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 2
      },
      timingNote: 'Cazeină cu digestie lentă, dar cu multă grăsime saturată la pachet.',
      tags: ['frozen', 'high-protein', 'calcium-rich', 'high-kcal', 'processed', 'slow-digesting', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: true,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Sos tartar', 'Salată verde', 'Dulceață de afine', 'Lămâie'],
      tips: [
        '150 g (2 bucăți) = 27 g proteină la 449 kcal. Proteină bună, dar 13,5 g grăsimi saturate.',
        'Airfryer, nu ulei: prăjit în baie de ulei ajunge la peste 380 kcal la 100 g.',
        'Ca variantă vegetariană cu jumătate de calorii: 200 g brânză de vaci degresată dă aceleași 27 g proteină la 180 kcal.'
      ],
      warnings: ['Conține lapte, gluten și ou. Grăsimi saturate foarte mari.'],
      storage: 'Congelator -18 °C. Nu recongela.',
      shelfLife: '~12 luni la -18 °C',
      dataConfidence: 'medium',
      sources: ['Etichete cașcaval pane congelat RO', 'valori tipice produs pane cu brânză']
    },

    {
      id: 'r-supa-crema-instant-plic',
      name: 'Instant Cream Soup Sachet',
      nameRo: 'Supă cremă instant la plic',
      brand: 'Knorr / Maggi',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🥣',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion supe & condimente',
          priceRon: 5.5,
          packGrams: 60,
          packLabel: 'plic 60 g (2 porții)',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'always',
          aisle: 'Raft supe instant',
          priceRon: 6.2,
          packGrams: 60,
          packLabel: 'plic 60 g',
          note: 'Disponibil în toate Profi-urile de cartier din Sibiu.'
        }
      ],
      sibiuNote: 'Se găsește peste tot în Sibiu, inclusiv în magazinele mici de cartier. Din păcate, e mai mult sare decât mâncare.',
      per100g: {
        kcal: 380,
        protein: 7,
        carbs: 58,
        sugars: 8,
        fat: 12,
        satFat: 6,
        fiber: 4,
        salt: 12
      },
      serving: {
        grams: 30,
        label: '1 porție pudră (30 g) = 250 ml supă'
      },
      effort: 1,
      timeMin: 6,
      activeTimeMin: 3,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['cană', 'ibric'],
        steps: [
          'Pune pudra în cană.',
          'Toarnă 250 ml apă clocotită, amestecând continuu.',
          'Lasă 2 minute să se îngroașe.'
        ],
        yieldNote: '30 g pudră = 250 ml supă gata.'
      },
      taste: {
        profile: 'Sărat industrial, cu aromă vagă de legume și amidon',
        intensity: 3,
        sweetness: 2,
        saltiness: 5,
        umami: 3,
        richness: 2,
        texture: 'Cremoasă artificial, cu cocoloașe dacă nu amesteci',
        notes: 'Caldă și reconfortantă, dar nutrițional aproape goală.'
      },
      stats: {
        taste: 45,
        satiety: 30,
        convenience: 97,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 1,
        lunch: 2,
        snack: 3,
        dinner: 2,
        beforeBed: 2
      },
      timingNote: 'Nu contează în bugetul tău de proteină. Este apă caldă cu sare.',
      tags: ['shelf-stable', 'low-kcal', 'budget', 'processed', 'high-sodium', 'winter'],
      diet: {
        vegan: false,
        vegetarian: true,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Piept de pui feliat', 'Ou bătut', 'Iaurt grecesc', 'Pâine prăjită'],
      tips: [
        'O porție = 2,1 g proteină la 114 kcal. Nu o considera masă sub nicio formă.',
        'Bate un ou și toarnă-l în supa fierbinte: +6 g proteină pentru 70 kcal, gustul se îmbunătățește vizibil.',
        '3,6 g sare într-o singură cană — mai mult decât într-o porție de mici.'
      ],
      warnings: ['Sodiu extrem (12 g sare la 100 g pudră). Conține gluten și lapte.'],
      storage: 'Loc uscat, în ambalajul original.',
      shelfLife: '~18 luni',
      dataConfidence: 'medium',
      sources: ['Etichete supe instant Knorr / Maggi', 'valori tipice supe cremă la plic']
    },

    {
      id: 'r-terci-instant-proteic',
      name: 'Instant Protein Porridge Sachet',
      nameRo: 'Terci instant de ovăz cu proteină',
      brand: 'Verival / Nutrend / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🥣',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'usual',
          aisle: 'Raion cereale, secțiunea bio & sport',
          priceRon: 6.9,
          packGrams: 60,
          packLabel: 'plic 60 g',
          note: ''
        },
        {
          name: 'Online RO',
          availability: 'online',
          aisle: 'Livrare 24–48 h',
          priceRon: 89,
          packGrams: 900,
          packLabel: 'cutie 900 g',
          note: 'Ex. iafarmacie.ro, nutrishop.ro — mult mai ieftin pe kg.'
        },
        {
          name: 'Carrefour',
          availability: 'occasional',
          aisle: 'Raion cereale, raftul de sus',
          priceRon: 7.9,
          packGrams: 60,
          packLabel: 'plic 60 g',
          note: ''
        }
      ],
      sibiuNote: 'În Sibiu găsești variante cu proteină la Kaufland și în magazinele de suplimente din Shopping City; formatele mari se comandă online.',
      per100g: {
        kcal: 368,
        protein: 20,
        carbs: 50,
        sugars: 12,
        fat: 8,
        satFat: 1.5,
        fiber: 8,
        salt: 0.3
      },
      micros: {
        ironMg: 3.2,
        calciumMg: 180,
        potassiumMg: 320
      },
      serving: {
        grams: 60,
        label: '1 plic (60 g)'
      },
      effort: 1,
      timeMin: 4,
      activeTimeMin: 2,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['bol', 'ibric'],
        steps: [
          'Pune conținutul plicului în bol.',
          'Toarnă 150 ml apă clocotită sau lapte fierbinte.',
          'Amestecă și lasă 2 minute să se umfle.'
        ],
        yieldNote: '60 g pudră + 150 ml lichid = ~210 g terci.'
      },
      taste: {
        profile: 'Ovăz cremos, dulceag, cu aromă de ciocolată sau fructe',
        intensity: 2,
        sweetness: 3,
        saltiness: 0,
        umami: 1,
        richness: 2,
        texture: 'Cremos, ușor lipicios',
        notes: 'Mai bun cu lapte decât cu apă — merită cele 60 kcal în plus.'
      },
      stats: {
        taste: 62,
        satiety: 80,
        convenience: 92,
        versatility: 50
      },
      timing: {
        breakfast: 5,
        preWorkout: 4,
        postWorkout: 4,
        lunch: 3,
        snack: 4,
        dinner: 2,
        beforeBed: 3
      },
      timingNote: 'Micul dejun cel mai rapid cu proteină și fibre; excelent pre-workout dimineața.',
      tags: ['high-protein', 'shelf-stable', 'microwave', 'breakfast', 'high-fiber', 'portable', 'office-lunch', 'pre-workout', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: true,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Lapte', 'Iaurt grecesc', 'Unt de arahide', 'Fructe de pădure congelate'],
      tips: [
        '1 plic = 12 g proteină la 221 kcal. Adaugă 200 ml lapte în loc de apă și ajungi la 19 g proteină.',
        'Cu o lingură de pudră proteică amestecată la final ajungi la 32 g proteină pentru un mic dejun de 5 minute.',
        'Plicurile individuale costă de 2–3 ori mai mult pe kg decât cutiile mari. Dacă îl mănânci des, cumpără format mare online.'
      ],
      warnings: ['Conține gluten (ovăz) și de obicei lapte. Verifică zahărul: unele variante au 20 g/100 g.'],
      storage: 'Loc uscat, ambalaj închis.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['Etichete terci proteic Verival / Nutrend', 'valori tipice porridge cu proteină']
    },

    {
      id: 'r-orez-plic-microunde',
      name: 'Microwave Rice Pouch',
      nameRo: 'Orez la plic pentru microunde',
      brand: 'Uncle Ben\'s / Vitasia (Lidl)',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🍚',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Raion orez & paste, gama Vitasia',
          priceRon: 6.99,
          packGrams: 250,
          packLabel: 'plic 250 g gata gătit',
          note: 'Cel mai ieftin din oraș.'
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion orez, lângă paste',
          priceRon: 9.9,
          packGrams: 250,
          packLabel: 'plic 250 g',
          note: ''
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Raion orez',
          priceRon: 10.5,
          packGrams: 250,
          packLabel: 'plic 250 g',
          note: ''
        }
      ],
      sibiuNote: 'Piesa de bază pentru "asamblez masa în 3 minute": plic de orez + pui de la rotisor + salată la pungă. Toate se găsesc într-un singur drum la Kaufland.',
      per100g: {
        kcal: 150,
        protein: 3,
        carbs: 30,
        sugars: 0.5,
        fat: 1.8,
        satFat: 0.3,
        fiber: 1,
        salt: 0.5
      },
      serving: {
        grams: 250,
        label: '1 plic întreg (250 g)'
      },
      effort: 1,
      timeMin: 3,
      activeTimeMin: 1,
      cooking: {
        method: 'reheat',
        difficulty: 'trivial',
        equipment: ['microunde'],
        steps: [
          'Rupe colțul plicului.',
          'Pune plicul în microunde 2 minute la 800 W.',
          'Golește în farfurie și amestecă.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Orez ușor condimentat, cu ulei și eventual legume deshidratate',
        intensity: 2,
        sweetness: 1,
        saltiness: 2,
        umami: 2,
        richness: 1,
        texture: 'Boabe separate, ferme — mai bune decât orezul fiert prost acasă',
        notes: 'Foarte practic, dar proteina e practic zero.'
      },
      stats: {
        taste: 58,
        satiety: 52,
        convenience: 96,
        versatility: 90
      },
      timing: {
        breakfast: 1,
        preWorkout: 5,
        postWorkout: 4,
        lunch: 4,
        snack: 1,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Carbohidrat curat — folosește-l ca bază, nu ca masă.',
      tags: ['shelf-stable', 'microwave', 'no-cook', 'budget', 'meal-prep', 'pre-workout'],
      diet: {
        vegan: true,
        vegetarian: true,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pui la rotisor', 'Ton la conservă', 'Wok cu pui congelat', 'Ou prăjit'],
      tips: [
        'Plicul întreg = doar 7,5 g proteină la 375 kcal. Nu îl număra niciodată ca sursă de proteină.',
        'Combinația câștigătoare: 1 plic orez + 200 g pui de la rotisor = 57 g proteină, 900 kcal, 5 minute, ~20 lei.',
        'Vitasia de la Lidl costă 6,99 lei față de ~10 lei la concurență, cu aceleași valori.'
      ],
      warnings: ['Orezul reîncălzit incomplet e risc de Bacillus cereus. Încălzește-l complet și o singură dată.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 24 h.',
      shelfLife: '~12 luni sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete orez la plic Vitasia / Uncle Ben\'s', 'valori tipice orez gata gătit']
    },

    {
      id: 'r-conserva-ton-legume-meal',
      name: 'Tuna and Vegetable Meal Tin',
      nameRo: 'Conservă ton cu legume (masă completă)',
      brand: 'Rio Mare / Eugenia / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🥫',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion conserve de pește, secțiunea de salate cu ton',
          priceRon: 13.9,
          packGrams: 160,
          packLabel: 'conservă 160 g cu inel',
          note: 'Vine cu furculiță de plastic în capac.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Conserve de pește',
          priceRon: 14.9,
          packGrams: 160,
          packLabel: 'conservă 160 g',
          note: ''
        },
        {
          name: 'Profi',
          availability: 'usual',
          aisle: 'Conserve',
          priceRon: 12.9,
          packGrams: 160,
          packLabel: 'conservă 160 g',
          note: ''
        }
      ],
      sibiuNote: 'Cea mai bună mâncare de sertar pentru birourile din Sibiu: nu are nevoie de frigider, microunde sau farfurie.',
      per100g: {
        kcal: 111,
        protein: 10,
        carbs: 8,
        sugars: 2,
        fat: 4,
        satFat: 0.8,
        fiber: 1.5,
        salt: 1
      },
      micros: {
        omega3Mg: 300,
        b12Ug: 1.8,
        vitDUg: 1.2,
        potassiumMg: 200
      },
      serving: {
        grams: 160,
        label: '1 conservă întreagă (160 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculița din capac'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Ton în ulei sau sos, cu porumb, fasole sau paste mici',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 2,
        texture: 'Ton fibros cu legume moi',
        notes: 'Surprinzător de bună pentru ceva care stă un an în sertar.'
      },
      stats: {
        taste: 60,
        satiety: 70,
        convenience: 100,
        versatility: 60
      },
      timing: {
        breakfast: 2,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 3,
        beforeBed: 3
      },
      timingNote: 'Prânz de urgență cu proteină reală — se mănâncă în 2 minute, fără încălzire.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'portable', 'grab-and-go', 'omega3', 'office-lunch', 'b12', 'mid-price'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine de secară', 'Lămâie', 'Ardei iute', 'Bol de salată'],
      tips: [
        'Conserva de 160 g = 16 g proteină la 178 kcal. 36% din calorii vin din proteină — foarte bun pentru un produs shelf-stable.',
        'Tonul simplu la conservă (fără legume) e și mai eficient: 24 g proteină la 130 kcal, pentru 8 lei.',
        'Ține 3 conserve la birou. E singura mâncare din categoria asta care nu are niciun compromis serios.'
      ],
      warnings: ['Conține pește. Ton mare: nu depăși 2–3 conserve/săptămână din cauza mercurului.'],
      storage: 'Loc uscat. Consumă imediat după deschidere.',
      shelfLife: '2–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete conserve ton cu legume RO', 'valori tipice salate cu ton la conservă']
    },

    {
      id: 'r-conserva-macrou-tomat',
      name: 'Canned Mackerel in Tomato Sauce',
      nameRo: 'Macrou în sos tomat, la conservă',
      brand: 'Ocean Fish / marcă proprie',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🐠',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion conserve de pește',
          priceRon: 9.9,
          packGrams: 170,
          packLabel: 'conservă 170 g',
          note: 'Cea mai ieftină proteină cu omega-3 din raft.'
        },
        {
          name: 'Penny',
          availability: 'always',
          aisle: 'Conserve',
          priceRon: 8.5,
          packGrams: 170,
          packLabel: 'conservă 170 g',
          note: ''
        },
        {
          name: 'Selgros',
          availability: 'usual',
          aisle: 'Conserve, bax',
          priceRon: 7.9,
          packGrams: 170,
          packLabel: 'conservă 170 g (la bax de 12)',
          note: ''
        }
      ],
      sibiuNote: 'Subestimată masiv în Sibiu — stă pe raft lângă ton la jumătate de preț și cu de trei ori mai mult omega-3.',
      per100g: {
        kcal: 185,
        protein: 16,
        carbs: 3,
        sugars: 2,
        fat: 12,
        satFat: 3,
        fiber: 0.5,
        salt: 1.1
      },
      micros: {
        omega3Mg: 1800,
        b12Ug: 8,
        vitDUg: 6,
        calciumMg: 180,
        potassiumMg: 300
      },
      serving: {
        grams: 170,
        label: '1 conservă întreagă (170 g)'
      },
      effort: 0,
      timeMin: 1,
      activeTimeMin: 1,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Pește gras, puternic, în sos de roșii ușor dulceag',
        intensity: 5,
        sweetness: 2,
        saltiness: 4,
        umami: 5,
        richness: 4,
        texture: 'Carne moale care se desface, oase mici comestibile',
        notes: 'Gust intens de pește — ori îl adori, ori nu-l suporți. Nutrițional e o bijuterie.'
      },
      stats: {
        taste: 55,
        satiety: 80,
        convenience: 98,
        versatility: 55
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
      timingNote: 'Cea mai densă sursă de omega-3 și vitamina D din tot raftul de conserve.',
      tags: ['ready-to-eat', 'shelf-stable', 'no-cook', 'high-protein', 'omega3', 'b12', 'cheap-protein', 'budget', 'calcium-rich'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: true,
        halal: true,
        porkFree: true
      },
      pairings: ['Pâine de secară', 'Ceapă roșie', 'Lămâie', 'Roșii'],
      tips: [
        'Conserva de 170 g = 27 g proteină la 315 kcal, pentru 9,90 lei. 0,37 lei/g proteină — bate orice altceva din raftul shelf-stable.',
        '3 g omega-3 EPA+DHA per conservă: mai mult decât în 3 capsule de ulei de pește de la farmacie, la o zecime din preț.',
        'Oasele mici sunt complet moi și comestibile — de acolo vin cei 300 mg de calciu.'
      ],
      warnings: ['Conține pește. Gust foarte intens. Sodiu moderat-ridicat.'],
      storage: 'Loc uscat. După deschidere, frigider, maxim 24 h.',
      shelfLife: '2–4 ani sigilat',
      dataConfidence: 'medium',
      sources: ['Etichete conserve macrou RO', 'USDA macrou în sos tomat']
    },

    {
      id: 'r-noodles-instant-pahar',
      name: 'Instant Noodle Cup',
      nameRo: 'Tăiței instant la pahar',
      brand: 'Vitasia (Lidl) / Samyang',
      category: 'ready-meals',
      subcategory: 'Instant & shelf-stable',
      emoji: '🍜',
      unit: 'g',
      stores: [
        {
          name: 'Lidl',
          availability: 'always',
          aisle: 'Raion asiatic Vitasia',
          priceRon: 4.99,
          packGrams: 65,
          packLabel: 'pahar 65 g',
          note: ''
        },
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Raion produse asiatice',
          priceRon: 6.5,
          packGrams: 70,
          packLabel: 'pahar 70 g',
          note: ''
        }
      ],
      sibiuNote: 'Mâncarea de urgență a studenților de la ULBS. Ieftină, caldă și nutrițional aproape inutilă.',
      per100g: {
        kcal: 448,
        protein: 9,
        carbs: 60,
        sugars: 3,
        fat: 18,
        satFat: 8,
        fiber: 2,
        salt: 5
      },
      serving: {
        grams: 65,
        label: '1 pahar (65 g uscat)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 2,
      cooking: {
        method: 'boil',
        difficulty: 'trivial',
        equipment: ['ibric'],
        steps: [
          'Deschide capacul până la linia marcată.',
          'Toarnă apă clocotită până la semn.',
          'Închide capacul și așteaptă 3–4 minute.'
        ],
        yieldNote: '65 g uscat = ~250 g gata.'
      },
      taste: {
        profile: 'Sărat, gras, cu aromă puternică de bulion artificial',
        intensity: 4,
        sweetness: 1,
        saltiness: 5,
        umami: 4,
        richness: 3,
        texture: 'Tăiței moi, uneori încă tari la mijloc',
        notes: 'Satisfăcător pe moment, regretabil o oră mai târziu.'
      },
      stats: {
        taste: 58,
        satiety: 32,
        convenience: 98,
        versatility: 40
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 1,
        lunch: 2,
        snack: 3,
        dinner: 2,
        beforeBed: 1
      },
      timingNote: 'Calorii goale — nu are ce căuta într-un plan de proteină.',
      tags: ['shelf-stable', 'budget', 'processed', 'high-sodium', 'high-kcal', 'low-kcal'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: false
      },
      pairings: ['Ou fiert', 'Piept de pui feliat', 'Ceapă verde', 'Kimchi'],
      tips: [
        '1 pahar = 5,9 g proteină la 291 kcal. Doar 8% din calorii vin din proteină — cea mai proastă cifră din tot atlasul.',
        'Repar-o: 2 ouă fierte + 100 g piept de pui feliat transformă paharul într-o masă de 32 g proteină pentru 17 lei total.',
        'Folosește doar jumătate din plicul de condimente: tai 1,5 g de sare fără să pierzi mult gust.'
      ],
      warnings: ['3,3 g sare per pahar. Conține gluten, soia, adesea și carne de porc în aromă. Grăsimi saturate din ulei de palmier.'],
      storage: 'Loc uscat.',
      shelfLife: '~12 luni',
      dataConfidence: 'medium',
      sources: ['Etichete tăiței instant Vitasia / Samyang', 'valori tipice ramen instant']
    },

    {
      id: 'r-kfc-hot-wings-5',
      name: 'KFC Hot Wings (5 pieces)',
      nameRo: 'KFC Hot Wings, 5 bucăți',
      brand: 'KFC',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🔥',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'KFC Shopping City Sibiu (food court + drive-thru) și KFC Promenada Sibiu',
          priceRon: 28,
          packGrams: 125,
          packLabel: 'porție 5 bucăți (125 g)',
          note: 'Preț estimat 2026, variază cu promoțiile din aplicație.'
        }
      ],
      sibiuNote: 'Sibiul are trei puncte KFC: două în Shopping City (food court și drive-thru) și unul în Promenada Mall. Drive-thru-ul din Șelimbăr e cel mai rapid la orele de vârf.',
      per100g: {
        kcal: 299,
        protein: 20.25,
        carbs: 10.67,
        sugars: 0.1,
        fat: 19.5,
        satFat: 3.58,
        fiber: 0.1,
        salt: 1.44
      },
      micros: {
        zincMg: 1.6,
        b12Ug: 0.4,
        cholesterolMg: 100
      },
      serving: {
        grams: 125,
        label: 'porție de 5 bucăți (125 g)'
      },
      effort: 0,
      timeMin: 8,
      activeTimeMin: 8,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['șervețele'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Picant, sărat, crocant, cu aromă de cayenne și usturoi',
        intensity: 5,
        sweetness: 1,
        saltiness: 5,
        umami: 5,
        richness: 5,
        texture: 'Crustă foarte crocantă, carne suculentă lângă os',
        notes: 'Cel mai bun gust din meniul KFC. Și cel mai gras.'
      },
      stats: {
        taste: 88,
        satiety: 62,
        convenience: 80,
        versatility: 20
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: '59% din calorii vin din grăsime — nu e o masă de recuperare.',
      tags: ['ready-to-eat', 'high-protein', 'high-kcal', 'high-sodium', 'processed', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată cu Zinger', 'Apă plată', 'Porumb fiert', 'Sos de iaurt'],
      tips: [
        '5 bucăți = 25,3 g proteină la 374 kcal, pentru ~28 lei. Adică 1,11 lei/g proteină — de cinci ori mai scump decât puiul de la rotisor.',
        'Dacă vrei proteină la KFC, ia Crispy Strips în loc de Hot Wings: 21 g proteină la doar 255 kcal.',
        'Sari peste meniul cu cartofi și suc: adaugă 500 kcal și doar 4 g proteină.'
      ],
      warnings: ['Conține gluten. 1,8 g sare per porție. Grăsime foarte ridicată.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['kfc.ro — Informații produse, ediția 12.09.2024', 'preț estimat 2026']
    },

    {
      id: 'r-kfc-crispy-strips-5',
      name: 'KFC Crispy Strips (5 pieces)',
      nameRo: 'KFC Crispy Strips, 5 bucăți',
      brand: 'KFC',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'KFC Shopping City Sibiu și KFC Promenada Sibiu',
          priceRon: 30,
          packGrams: 150,
          packLabel: 'porție 5 bucăți (150 g)',
          note: 'Preț estimat 2026.'
        }
      ],
      sibiuNote: 'Cea mai bună alegere din meniul KFC dacă urmărești proteina. Cere-le fără cartofi și cu apă.',
      per100g: {
        kcal: 170,
        protein: 14.21,
        carbs: 12.59,
        sugars: 0.12,
        fat: 6.68,
        satFat: 0.75,
        fiber: 1.46,
        salt: 1.4
      },
      micros: {
        zincMg: 1,
        b12Ug: 0.3,
        cholesterolMg: 55
      },
      serving: {
        grams: 150,
        label: 'porție de 5 bucăți (150 g)'
      },
      effort: 0,
      timeMin: 8,
      activeTimeMin: 8,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Picant moderat, crustă crocantă, piept de pui fibros',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 3,
        texture: 'Crocantă afară, fibroasă înăuntru',
        notes: 'Fără os, fără grăsime de piele — surprinzător de curate pentru fast-food.'
      },
      stats: {
        taste: 78,
        satiety: 72,
        convenience: 82,
        versatility: 35
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 4,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Singurul produs KFC cu profil acceptabil post-antrenament.',
      tags: ['ready-to-eat', 'processed', 'high-sodium', 'post-workout', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată cu Zinger', 'Porumb fiert', 'Apă plată', 'Sos de iaurt'],
      tips: [
        '5 bucăți = 21,3 g proteină la doar 255 kcal. 33% din calorii vin din proteină — cel mai bun raport din tot meniul KFC.',
        '8 bucăți (240 g) = 34 g proteină la 408 kcal. Combinat cu o salată cu Zinger ajungi la 49 g proteină sub 560 kcal.',
        'Costul: ~1,41 lei/g proteină. Gustos, dar plătești de șase ori mai mult decât pentru pui la rotisor.'
      ],
      warnings: ['Conține gluten. 2,1 g sare per porție.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['kfc.ro — Informații produse, ediția 12.09.2024', 'preț estimat 2026']
    },

    {
      id: 'r-kfc-pui-kentucky-2buc',
      name: 'KFC Original Recipe Chicken (2 pieces)',
      nameRo: 'KFC Pui Kentucky, 2 bucăți',
      brand: 'KFC',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'KFC Shopping City Sibiu și KFC Promenada Sibiu',
          priceRon: 26,
          packGrams: 150,
          packLabel: '2 bucăți asortate (150 g)',
          note: 'Preț estimat 2026. Cere piept, nu pulpă.'
        }
      ],
      sibiuNote: 'Truc de comandă la KFC Sibiu: cere explicit "piept" — are 22,6 g proteină/100 g față de 14,9 g la pulpă, la calorii mai mici.',
      per100g: {
        kcal: 234,
        protein: 22.59,
        carbs: 8.96,
        sugars: 0.12,
        fat: 12,
        satFat: 2.84,
        fiber: 0.1,
        salt: 1.85
      },
      micros: {
        zincMg: 1.3,
        b12Ug: 0.4,
        cholesterolMg: 85
      },
      serving: {
        grams: 150,
        label: '2 bucăți de piept (150 g)'
      },
      effort: 0,
      timeMin: 8,
      activeTimeMin: 8,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['șervețele'],
        steps: [],
        yieldNote: '1 bucată = 75 g cu tot cu os.'
      },
      taste: {
        profile: 'Crustă condimentată cu 11 ierburi, carne suculentă, sărat puternic',
        intensity: 4,
        sweetness: 1,
        saltiness: 5,
        umami: 5,
        richness: 4,
        texture: 'Crustă moale-crocantă, carne foarte fragedă',
        notes: 'Rețeta originală e mai puțin grasă decât Hot Wings și cu mai multă proteină.'
      },
      stats: {
        taste: 84,
        satiety: 74,
        convenience: 80,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Cea mai densă proteină din meniul KFC per 100 g.',
      tags: ['ready-to-eat', 'high-protein', 'high-sodium', 'processed', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată Veggie', 'Porumb fiert', 'Apă plată', 'Salată cu Fillet'],
      tips: [
        '2 bucăți de piept = 33,9 g proteină la 351 kcal, pentru ~26 lei. Cea mai eficientă comandă de la KFC.',
        'Pieptul are 22,6 g proteină/100 g, pulpa doar 14,9 g și cu 34 kcal mai mult. Diferența e enormă — cere piept.',
        'Sarea: 2,8 g per porție de 2 bucăți. Bea apă, nu suc.'
      ],
      warnings: ['Conține gluten, ou și lapte. Sodiu foarte ridicat (1,85 g sare/100 g).'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['kfc.ro — Informații produse, ediția 12.09.2024', 'preț estimat 2026']
    },

    {
      id: 'r-kfc-salata-zinger',
      name: 'KFC Zinger Salad',
      nameRo: 'KFC Salată cu Zinger',
      brand: 'KFC',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🥗',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'usual',
          aisle: 'KFC Shopping City Sibiu și KFC Promenada Sibiu',
          priceRon: 22,
          packGrams: 240,
          packLabel: 'salată 240 g',
          note: 'Nu apare mereu pe ecrane — întreabă la casă.'
        }
      ],
      sibiuNote: 'Cel mai bine păstrat secret al KFC-urilor din Sibiu: salata cu Zinger are 15 g proteină la 151 kcal, adică mai bine decât orice altceva din food court.',
      per100g: {
        kcal: 63,
        protein: 6.32,
        carbs: 5.12,
        sugars: 0.03,
        fat: 1.83,
        satFat: 0.3,
        fiber: 0.17,
        salt: 0.43
      },
      serving: {
        grams: 240,
        label: '1 salată întreagă (240 g)'
      },
      effort: 0,
      timeMin: 6,
      activeTimeMin: 6,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['furculiță de plastic'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Frunze reci și crocante cu bucată de Zinger picant deasupra',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Contrast bun între salată rece și pane cald',
        notes: 'Mult mai bună decât se așteaptă majoritatea de la o salată de fast-food.'
      },
      stats: {
        taste: 68,
        satiety: 66,
        convenience: 82,
        versatility: 30
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 4,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Cea mai bună opțiune de cutting din tot food court-ul sibian.',
      tags: ['ready-to-eat', 'low-kcal', 'cutting', 'office-lunch', 'processed', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Crispy Strips', 'Apă plată', 'Sos de iaurt', 'Porumb fiert'],
      tips: [
        'Salata întreagă = 15,2 g proteină la doar 151 kcal. 40% din calorii vin din proteină — de departe cel mai bun raport din meniul KFC.',
        'Combinația optimă la KFC: salată cu Zinger + 5 Crispy Strips = 36 g proteină la 406 kcal, ~52 lei.',
        'Cere sosul separat: dressingurile adaugă 80–150 kcal fără proteină.'
      ],
      warnings: ['Conține gluten. Disponibilitate variabilă în funcție de restaurant.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['kfc.ro — Informații produse, ediția 12.09.2024', 'preț estimat 2026']
    },

    {
      id: 'r-kfc-zinger-burger',
      name: 'KFC Zinger Burger',
      nameRo: 'KFC Zinger Burger',
      brand: 'KFC',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🍔',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'KFC Shopping City Sibiu (inclusiv drive-thru) și KFC Promenada',
          priceRon: 24,
          packGrams: 150,
          packLabel: 'burger 150 g',
          note: 'Preț estimat 2026, doar sandvișul.'
        }
      ],
      sibiuNote: 'La drive-thru-ul din Șelimbăr e produsul cel mai comandat; e și cel mai echilibrat sandviș din meniu.',
      per100g: {
        kcal: 269,
        protein: 15.68,
        carbs: 23.63,
        sugars: 1.02,
        fat: 12.36,
        satFat: 1.51,
        fiber: 0.24,
        salt: 0.71
      },
      serving: {
        grams: 150,
        label: '1 burger (150 g)'
      },
      effort: 0,
      timeMin: 6,
      activeTimeMin: 6,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Piept de pui picant pane, maioneză, salată, chiflă cu susan',
        intensity: 4,
        sweetness: 2,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Crocant peste moale, cu sos care înmoaie chifla',
        notes: 'Sandvișul cel mai bine construit din meniul KFC.'
      },
      stats: {
        taste: 82,
        satiety: 66,
        convenience: 88,
        versatility: 20
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 5,
        snack: 3,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Carbohidrați + proteină decentă, dar cu multă grăsime din sos.',
      tags: ['high-protein', 'ready-to-eat', 'grab-and-go', 'high-kcal', 'processed', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată cu Zinger', 'Apă plată', 'Porumb fiert', 'Cafea neagră'],
      tips: [
        'Un Zinger = 23,5 g proteină la 404 kcal, pentru 24 lei. Raport ok pentru fast-food: 23% din calorii din proteină.',
        'Cere-l fără maioneză: scazi ~90 kcal și 10 g grăsime, păstrezi toată proteina.',
        'Meniul (cartofi + suc) adaugă ~500 kcal și doar 5 g proteină. Ia doar burgerul și apă.'
      ],
      warnings: ['Conține gluten, ou, muștar și susan.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['kfc.ro — Informații produse, ediția 12.09.2024', 'preț estimat 2026']
    },

    {
      id: 'r-mcd-big-mac',
      name: 'McDonald\'s Big Mac',
      nameRo: 'Big Mac',
      brand: "McDonald's",
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🍔',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: "McDonald's Shopping City Sibiu (Șelimbăr) și McDonald's Promenada Mall",
          priceRon: 29,
          packGrams: 204,
          packLabel: 'sandviș 204 g',
          note: 'Preț estimat 2026, doar sandvișul.'
        }
      ],
      sibiuNote: 'Sibiul are McDonald\'s la Shopping City (cu drive-thru) și în Promenada Mall. Ambele sunt deschise până târziu.',
      per100g: {
        kcal: 247,
        protein: 13.2,
        carbs: 20.6,
        sugars: 4.2,
        fat: 12.3,
        satFat: 4.8,
        fiber: 1.5,
        salt: 1.08
      },
      micros: {
        ironMg: 2,
        calciumMg: 100,
        b12Ug: 1.1
      },
      serving: {
        grams: 204,
        label: '1 Big Mac (204 g)'
      },
      effort: 0,
      timeMin: 5,
      activeTimeMin: 5,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Sos dulce-acrișor, castraveți murați, două felii subțiri de vită',
        intensity: 4,
        sweetness: 3,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Moale în întregime, cu castraveți crocanți',
        notes: 'Gustul e mai mult sos decât carne — și cifrele o confirmă.'
      },
      stats: {
        taste: 78,
        satiety: 60,
        convenience: 90,
        versatility: 15
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 2,
        lunch: 4,
        snack: 2,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Sațietate mică pentru 503 kcal — te lasă flămând peste două ore.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-kcal', 'processed', 'high-sodium', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată cu pui', 'Apă plată', 'Cafea neagră', 'Măr feliat'],
      tips: [
        'Un Big Mac = 27 g proteină la 503 kcal, pentru ~29 lei. Doar 21% din calorii din proteină.',
        'Dublu Cheeseburger (165 g) are aceeași proteină (27 g) la 448 kcal și costă mai puțin — comandă mai eficientă.',
        'Meniul mediu adaugă ~570 kcal (cartofi + suc) și doar 5 g proteină. Este cea mai proastă decizie din food court.'
      ],
      warnings: ['Conține gluten, ou, lapte, muștar și susan. 2,2 g sare per sandviș.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'high',
      sources: ['mcdonalds.ro — Gramaje, ingrediente, alergeni, nutriție (martie 2026)', 'preț estimat 2026']
    },

    {
      id: 'r-mcd-mcnuggets-9',
      name: 'McDonald\'s Chicken McNuggets (9 pieces)',
      nameRo: 'Chicken McNuggets, 9 bucăți',
      brand: "McDonald's",
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🍗',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: "McDonald's Shopping City Sibiu și Promenada Mall",
          priceRon: 30,
          packGrams: 161,
          packLabel: 'cutie 9 bucăți (161 g)',
          note: 'Preț estimat 2026, fără sos suplimentar.'
        }
      ],
      sibiuNote: 'Comanda cea mai frecventă la food court-ul din Promenada. Sosurile dulci adaugă 50–70 kcal fiecare.',
      per100g: {
        kcal: 241,
        protein: 13.7,
        carbs: 15.5,
        sugars: 0.6,
        fat: 13.7,
        satFat: 1.4,
        fiber: 1,
        salt: 1.2
      },
      serving: {
        grams: 161,
        label: '9 bucăți (161 g)'
      },
      effort: 0,
      timeMin: 5,
      activeTimeMin: 5,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Crustă fină aurie, carne de pui uniformă, gust neutru și sărat',
        intensity: 2,
        sweetness: 1,
        saltiness: 4,
        umami: 3,
        richness: 3,
        texture: 'Crocant afară, spongios înăuntru',
        notes: 'Consistență identică de fiecare dată, oriunde în lume. Asta e și punctul forte, și cel slab.'
      },
      stats: {
        taste: 72,
        satiety: 58,
        convenience: 90,
        versatility: 25
      },
      timing: {
        breakfast: 1,
        preWorkout: 2,
        postWorkout: 3,
        lunch: 4,
        snack: 4,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Proteină moderată, grăsime mare — nu e cea mai bună alegere din food court.',
      tags: ['ready-to-eat', 'grab-and-go', 'processed', 'kid-friendly', 'high-kcal', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Salată cu pui', 'Sos de muștar cu miere', 'Apă plată', 'Morcovi baby'],
      tips: [
        '9 bucăți = ~22 g proteină la ~388 kcal, pentru 30 lei. 1,36 lei/g proteină.',
        'Sosurile dulci (BBQ, curry) adaugă 50–70 kcal fiecare, aproape numai din zahăr.',
        'Cu aceiași 30 de lei, 5 Crispy Strips de la KFC îți dau aceeași proteină la 130 kcal mai puțin.'
      ],
      warnings: ['Conține gluten. Grăsime egală cu proteina în grame.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'medium',
      sources: ['mcdonalds.ro — Gramaje și nutriție 2026', 'valori standard McNuggets']
    },

    {
      id: 'r-mcd-salata-pui',
      name: 'McDonald\'s Chicken Salad',
      nameRo: 'Salată cu pui (McDonald\'s)',
      brand: "McDonald's",
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🥗',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'usual',
          aisle: "McDonald's Shopping City Sibiu și Promenada Mall",
          priceRon: 27,
          packGrams: 250,
          packLabel: 'salată 250 g',
          note: 'Disponibilitate variabilă; dressingul vine separat.'
        }
      ],
      sibiuNote: 'Singura opțiune sub 250 kcal din meniul McDonald\'s Sibiu care are și proteină reală.',
      per100g: {
        kcal: 88,
        protein: 6.28,
        carbs: 7.6,
        sugars: 2.26,
        fat: 3.8,
        satFat: 0.47,
        fiber: 1.16,
        salt: 0.38
      },
      serving: {
        grams: 250,
        label: '1 salată întreagă (250 g)'
      },
      effort: 0,
      timeMin: 5,
      activeTimeMin: 5,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['furculiță de plastic'],
        steps: [
          'Toarnă dressingul (sau doar jumătate).',
          'Amestecă bine.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Mix de salată cu pui la grătar, roșii cherry și dressing de iaurt',
        intensity: 2,
        sweetness: 2,
        saltiness: 2,
        umami: 2,
        richness: 2,
        texture: 'Frunze crocante, pui uneori uscat',
        notes: 'Onestă, dar cantitatea de pui e mică pentru preț.'
      },
      stats: {
        taste: 60,
        satiety: 62,
        convenience: 84,
        versatility: 30
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 3,
        lunch: 5,
        snack: 4,
        dinner: 4,
        beforeBed: 3
      },
      timingNote: 'Cel mai bun compromis din meniul McDonald\'s dacă ești în deficit caloric.',
      tags: ['ready-to-eat', 'low-kcal', 'cutting', 'office-lunch', 'processed', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Chicken McNuggets', 'Apă plată', 'Cafea neagră', 'Ou fiert de acasă'],
      tips: [
        'Salata întreagă = 15,7 g proteină la 214 kcal. 29% din calorii din proteină — cel mai bun din meniu.',
        'Nu e o masă completă. Combină-o cu 6 McNuggets și ajungi la 30 g proteină sub 480 kcal.',
        'Folosește doar jumătate din dressing: scazi 40–60 kcal.'
      ],
      warnings: ['Conține gluten și lapte. Disponibilitate inconstantă în restaurantele din Sibiu.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'medium',
      sources: ['mcdonalds.ro — Gramaje și nutriție 2026 (secțiunea Salate)', 'preț estimat 2026']
    },

    {
      id: 'r-subway-sub-pui-30cm',
      name: 'Subway 30cm Grilled Chicken Sub',
      nameRo: 'Subway 30 cm cu pui la grătar',
      brand: 'Subway',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🥖',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'usual',
          aisle: 'Subway, Șoseaua Alba Iulia nr. 42D (zona Shopping City)',
          priceRon: 42,
          packGrams: 400,
          packLabel: 'sandviș 30 cm (~400 g)',
          note: 'Preț estimat 2026 pentru varianta cu pui la grătar.'
        }
      ],
      sibiuNote: 'Singurul loc din Sibiu unde poți dicta compoziția mesei: cere pui dublu, fără brânză, cu legume multe și sos de iaurt.',
      per100g: {
        kcal: 167,
        protein: 11.8,
        carbs: 20,
        sugars: 3,
        fat: 4,
        satFat: 1.2,
        fiber: 1.8,
        salt: 1.2
      },
      serving: {
        grams: 400,
        label: '1 sandviș de 30 cm (~400 g)'
      },
      effort: 0,
      timeMin: 8,
      activeTimeMin: 8,
      cooking: {
        method: 'assemble',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Pâine proaspăt coaptă, pui la grătar, legume crocante, sos ales de tine',
        intensity: 3,
        sweetness: 2,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Pâine moale, legume crocante, contrast bun',
        notes: 'Cel mai controlabil fast-food din oraș — poți urca proteina și scădea grăsimea la comandă.'
      },
      stats: {
        taste: 74,
        satiety: 76,
        convenience: 78,
        versatility: 60
      },
      timing: {
        breakfast: 2,
        preWorkout: 4,
        postWorkout: 4,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Carbohidrați + proteină: bun ca masă înainte sau după antrenament.',
      tags: ['ready-to-eat', 'office-lunch', 'grab-and-go', 'premium', 'post-workout'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Apă plată', 'Iaurt grecesc', 'Ardei iute', 'Salată suplimentară'],
      tips: [
        'Un sub de 30 cm cu pui = ~47 g proteină la ~668 kcal. Cea mai mare proteină pe masă din tot fast-food-ul sibian.',
        'Cere "dublu pui" (+15–18 g proteină pentru ~12 lei) și renunță la brânză și maioneză. Ajungi la 62 g proteină sub 750 kcal.',
        'Pâinea integrală (Hearty Italian / grâu integral) adaugă 4–5 g fibre față de cea albă, la același preț.'
      ],
      warnings: ['Conține gluten. Sosurile cremoase pot adăuga 150–250 kcal fără proteină. Valorile depind complet de ce ceri.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'low',
      sources: ['Meniu Subway România 2026', 'valori estimate pentru configurația standard cu pui la grătar']
    },

    {
      id: 'r-spartan-gyros-grecia-farfurie',
      name: 'Spartan Greek Chicken Gyros Plate',
      nameRo: 'Spartan Gyros Grecia la farfurie',
      brand: 'Spartan',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🇬🇷',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'Spartan, food court Promenada Mall Sibiu',
          priceRon: 45,
          packGrams: 430,
          packLabel: 'farfurie ~430 g',
          note: 'Preț estimat 2026. Cere varianta cu orez în loc de cartofi.'
        }
      ],
      sibiuNote: 'Spartan din Promenada Mall e cea mai bună sursă de proteină din food court-urile Sibiului — dar numai dacă alegi varianta cu piept de pui la grătar, nu gyros de porc.',
      per100g: {
        kcal: 199,
        protein: 9.84,
        carbs: 21.89,
        sugars: 1.43,
        fat: 7.81,
        satFat: 1.68,
        fiber: 1.43,
        salt: 0.54
      },
      micros: {
        potassiumMg: 300,
        zincMg: 1
      },
      serving: {
        grams: 430,
        label: '1 farfurie (430 g)'
      },
      effort: 0,
      timeMin: 12,
      activeTimeMin: 12,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Piept de pui condimentat grecește, cartofi sau orez, tzatziki și legume',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Carne fragedă, garnitură caldă, sos cremos',
        notes: 'Porție uriașă, gust bun, dar jumătate e garnitură cu amidon.'
      },
      stats: {
        taste: 80,
        satiety: 86,
        convenience: 72,
        versatility: 25
      },
      timing: {
        breakfast: 1,
        preWorkout: 3,
        postWorkout: 5,
        lunch: 5,
        snack: 1,
        dinner: 5,
        beforeBed: 2
      },
      timingNote: 'Cea mai bună masă post-antrenament pe care o poți comanda în Sibiu fără să gătești.',
      tags: ['ready-to-eat', 'high-kcal', 'post-workout', 'bulking', 'premium', 'office-lunch'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Apă plată', 'Salată grecească', 'Sos tzatziki', 'Ardei iute'],
      tips: [
        'Farfuria de 430 g = ~42 g proteină la ~854 kcal. Cea mai multă proteină per comandă din food court-ul sibian.',
        'Cere varianta cu orez în loc de cartofi: scazi ~60 kcal și crești ușor proteina la 100 g.',
        'Evită gyros-ul de purcel: are 7,2 g proteină/100 g față de 9,8 g la varianta Grecia cu pui, și cu 4 g mai multă grăsime.',
        'Sarea e surprinzător de mică pentru fast-food (2,3 g pe farfurie) — mai puțin decât un pachet de mici.'
      ],
      warnings: ['Conține gluten (lipie/sosuri) și lapte (tzatziki). Porție foarte mare — dacă ești în deficit, împarte-o.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'medium',
      sources: ['spartan.ro — Listă gramaje, ingrediente și valori nutriționale', 'preț estimat 2026']
    },

    {
      id: 'r-spartan-chicken-box',
      name: 'Spartan Chicken Box',
      nameRo: 'Spartan Chicken Box',
      brand: 'Spartan',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '📦',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'Spartan, food court Promenada Mall Sibiu',
          priceRon: 60,
          packGrams: 402,
          packLabel: 'box 402 g + 2 sosuri',
          note: 'Preț estimat 2026.'
        }
      ],
      sibiuNote: 'Comanda de "bulking" din Promenada: peste 1000 de calorii și aproape 60 g proteină într-o singură cutie.',
      per100g: {
        kcal: 275,
        protein: 14.41,
        carbs: 20.84,
        sugars: 0.95,
        fat: 14.63,
        satFat: 2.66,
        fiber: 1.62,
        salt: 1.07
      },
      serving: {
        grams: 402,
        label: '1 box întreg (402 g)'
      },
      effort: 0,
      timeMin: 12,
      activeTimeMin: 12,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Piept de pui crispy, cartofi, sosuri cremoase, condimente puternice',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 4,
        texture: 'Crocant peste tot, cu sos care înmoaie',
        notes: 'Delicios, dar 1100 de calorii într-o singură cutie.'
      },
      stats: {
        taste: 84,
        satiety: 84,
        convenience: 72,
        versatility: 20
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 4,
        lunch: 4,
        snack: 1,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Doar dacă ești în surplus caloric. Altfel, jumătate din box e suficientă.',
      tags: ['ready-to-eat', 'high-kcal', 'bulking', 'premium', 'processed'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Apă plată', 'Salată verde', 'Ardei iute', 'Castraveți murați'],
      tips: [
        'Boxul întreg = ~58 g proteină la ~1107 kcal, pentru 60 lei. Multă proteină, dar la 1,03 lei/g și cu un munte de calorii.',
        'Dacă vrei doar proteina: Gyros Grecia la farfurie îți dă 42 g la 854 kcal, cu 15 lei mai puțin.',
        'Împarte-l în două mese: 29 g proteină și 550 kcal pe rând.'
      ],
      warnings: ['Conține gluten, ou, lapte și susan. Peste 4 g sare per box.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'medium',
      sources: ['spartan.ro — Listă gramaje și valori nutriționale', 'preț estimat 2026']
    },

    {
      id: 'r-salad-box-bol-pui',
      name: 'Salad Box Grilled Chicken Bowl',
      nameRo: 'Salad Box, bol cu pui la grătar',
      brand: 'Salad Box',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🥙',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'usual',
          aisle: 'Salad Box, food court Promenada Mall Sibiu',
          priceRon: 38,
          packGrams: 400,
          packLabel: 'bol mare ~400 g',
          note: 'Preț estimat 2026 pentru bol cu pui și bază de quinoa/orez.'
        }
      ],
      sibiuNote: 'Cea mai flexibilă opțiune din Promenada: îți compui bolul și poți cere porție dublă de pui pentru câțiva lei în plus.',
      per100g: {
        kcal: 121,
        protein: 9,
        carbs: 9,
        sugars: 2,
        fat: 5,
        satFat: 1.2,
        fiber: 2,
        salt: 0.8
      },
      micros: {
        potassiumMg: 280,
        ironMg: 1.2
      },
      serving: {
        grams: 400,
        label: '1 bol mare (400 g)'
      },
      effort: 0,
      timeMin: 8,
      activeTimeMin: 8,
      cooking: {
        method: 'assemble',
        difficulty: 'none',
        equipment: ['—'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Legume proaspete, pui la grătar, dressing la alegere',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 3,
        richness: 2,
        texture: 'Crocantă, cu contrast între cald și rece',
        notes: 'Gustul depinde complet de ce alegi — și de dressing.'
      },
      stats: {
        taste: 70,
        satiety: 78,
        convenience: 76,
        versatility: 70
      },
      timing: {
        breakfast: 2,
        preWorkout: 3,
        postWorkout: 4,
        lunch: 5,
        snack: 3,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Cel mai bun raport proteină/calorie din food court dacă alegi dressing pe bază de iaurt.',
      tags: ['ready-to-eat', 'high-fiber', 'cutting', 'office-lunch', 'post-workout', 'premium'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: false,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Apă plată', 'Dressing de iaurt', 'Avocado', 'Porție suplimentară de pui'],
      tips: [
        'Bolul de 400 g = ~36 g proteină la ~484 kcal. 30% din calorii vin din proteină — foarte bun pentru mâncare la restaurant.',
        'Dressingurile cremoase (Caesar, ranch) adaugă 150–250 kcal. Alege iaurt, lămâie sau balsamic.',
        'Porția dublă de pui costă ~10 lei și adaugă 20–25 g proteină. Este cel mai eficient upgrade din tot food court-ul.'
      ],
      warnings: ['Valorile depind complet de compoziția aleasă — cifrele de aici sunt pentru un bol cu pui, bază de orez și dressing ușor.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'low',
      sources: ['Meniu Salad Box România 2026', 'valori estimate pentru configurație cu pui la grătar']
    },

    {
      id: 'r-shaorma-mare-pui',
      name: 'Large Chicken Shawarma',
      nameRo: 'Shaorma mare cu pui, în lipie',
      brand: 'generic (chioșcuri Sibiu)',
      category: 'ready-meals',
      subcategory: 'Fast-food în Sibiu',
      emoji: '🌯',
      unit: 'g',
      stores: [
        {
          name: 'Restaurant Sibiu',
          availability: 'always',
          aisle: 'Chioșcuri de shaorma: zona Piața Mare, Bd. Victoriei, Vasile Aaron, Terezian',
          priceRon: 30,
          packGrams: 600,
          packLabel: 'shaorma mare ~600 g',
          note: 'Preț estimat 2026 în Sibiu.'
        }
      ],
      sibiuNote: 'Sibiul are shaorma la orice colț, deschisă până noaptea târziu. Cere-o "fără maioneză, cu iaurt" și cu carne dublă — schimbi complet profilul nutrițional.',
      per100g: {
        kcal: 199,
        protein: 7.5,
        carbs: 20,
        sugars: 1.5,
        fat: 9.5,
        satFat: 2.5,
        fiber: 1.5,
        salt: 1.1
      },
      serving: {
        grams: 600,
        label: '1 shaorma mare (600 g)'
      },
      effort: 0,
      timeMin: 10,
      activeTimeMin: 10,
      cooking: {
        method: 'none',
        difficulty: 'none',
        equipment: ['șervețele multe'],
        steps: [],
        yieldNote: ''
      },
      taste: {
        profile: 'Carne de pui condimentată, cartofi prăjiți, varză, sosuri de usturoi și maioneză',
        intensity: 4,
        sweetness: 1,
        saltiness: 4,
        umami: 4,
        richness: 5,
        texture: 'Amestec de moale și crocant, îmbibat în sos',
        notes: 'Cea mai mare masă pe care o poți cumpăra cu 30 de lei în Sibiu. Și una dintre cele mai dezechilibrate.'
      },
      stats: {
        taste: 84,
        satiety: 80,
        convenience: 86,
        versatility: 15
      },
      timing: {
        breakfast: 1,
        preWorkout: 1,
        postWorkout: 3,
        lunch: 4,
        snack: 2,
        dinner: 4,
        beforeBed: 1
      },
      timingNote: 'Peste 1100 kcal — o masă de weekend, nu de rutină.',
      tags: ['ready-to-eat', 'grab-and-go', 'high-kcal', 'bulking', 'budget', 'processed', 'hangover'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        lactoseFree: false,
        keto: false,
        halal: true,
        porkFree: true
      },
      pairings: ['Ardei iute', 'Apă plată', 'Castraveți murați', 'Sos de iaurt'],
      tips: [
        'O shaorma mare = ~45 g proteină la ~1194 kcal. Proteina e ok; problema sunt cartofii și sosurile care aduc 700 din calorii.',
        'Comanda optimizată: "carne dublă, fără cartofi, cu iaurt în loc de maioneză" — ajungi la ~55 g proteină sub 750 kcal, la același preț sau +5 lei.',
        'Varianta la farfurie (fără lipie) taie 300 kcal de carbohidrați dintr-o singură mișcare.',
        'Valorile variază enorm de la un chioșc la altul — tratează-le ca pe o estimare, nu ca pe o etichetă.'
      ],
      warnings: ['Conține gluten, ou, lapte și muștar. Igiena variază mult între chioșcuri — alege unele cu rotație mare a carnei.'],
      storage: 'Se mănâncă imediat.',
      shelfLife: 'Aceeași masă',
      dataConfidence: 'low',
      sources: ['Valori medii shaorma de pui RO (doner-house.ro, eatntrack.ro)', 'preț estimat Sibiu 2026']
    },

    {
      id: 'r-combo-pui-rotisor-salata-orez',
      name: 'Assembled Rotisserie Chicken Meal',
      nameRo: 'Masă asamblată: pui la rotisor + orez la plic + salată',
      brand: 'generic (Kaufland, într-un singur drum)',
      category: 'ready-meals',
      subcategory: 'Mese asamblate în 5 minute',
      emoji: '🍽️',
      unit: 'g',
      stores: [
        {
          name: 'Kaufland',
          availability: 'always',
          aisle: 'Kaufland Grill (pui) + raion orez (plic) + raion legume (pungă salată)',
          priceRon: 32,
          packGrams: 550,
          packLabel: '200 g pui + 250 g orez + 100 g salată',
          note: 'Toate cele trei componente sunt în același magazin.'
        },
        {
          name: 'Carrefour',
          availability: 'always',
          aisle: 'Rotiserie + raion orez + vitrina de salate spălate',
          priceRon: 35,
          packGrams: 550,
          packLabel: 'aceleași trei componente',
          note: 'Shopping City Sibiu.'
        }
      ],
      sibiuNote: 'Cea mai bună decizie pe care o poți lua într-un supermarket sibian când ai 5 minute și ești flămând. Un singur drum, trei rafturi, 59 g proteină.',
      per100g: {
        kcal: 148,
        protein: 10.7,
        carbs: 14.5,
        sugars: 1,
        fat: 5.2,
        satFat: 1.5,
        fiber: 1.2,
        salt: 0.9
      },
      micros: {
        b12Ug: 0.4,
        zincMg: 1.5,
        potassiumMg: 300,
        ironMg: 1.1
      },
      serving: {
        grams: 550,
        label: 'masa completă (550 g)'
      },
      effort: 1,
      timeMin: 5,
      activeTimeMin: 4,
      cooking: {
        method: 'assemble',
        difficulty: 'trivial',
        equipment: ['microunde', 'farfurie', 'foarfecă'],
        steps: [
          'Bagă plicul de orez 2 minute la microunde.',
          'Dezosează 200 g de pui de la rotisor cu mâna sau cu foarfeca.',
          'Golește punga de salată în farfurie, adaugă orezul și puiul.',
          'Stropește cu ulei de măsline, lămâie și sare.'
        ],
        yieldNote: ''
      },
      taste: {
        profile: 'Pui condimentat cald peste orez și salată rece, cu lămâie',
        intensity: 3,
        sweetness: 1,
        saltiness: 3,
        umami: 4,
        richness: 3,
        texture: 'Contrast bun între cald, rece, moale și crocant',
        notes: 'Bate orice mâncare gata din caserolă la gust, preț și nutriție simultan.'
      },
      stats: {
        taste: 78,
        satiety: 90,
        convenience: 84,
        versatility: 85
      },
      timing: {
        breakfast: 2,
        preWorkout: 4,
        postWorkout: 5,
        lunch: 5,
        snack: 2,
        dinner: 5,
        beforeBed: 3
      },
      timingNote: 'Masă completă post-antrenament: proteină rapidă, carbohidrați și volum.',
      tags: ['ready-to-eat', 'no-cook', 'cheap-protein', 'meal-prep', 'post-workout', 'office-lunch', 'budget'],
      diet: {
        vegan: false,
        vegetarian: false,
        glutenFree: true,
        lactoseFree: true,
        keto: false,
        halal: false,
        porkFree: true
      },
      pairings: ['Ulei de măsline', 'Lămâie', 'Iaurt grecesc cu usturoi', 'Ardei iute'],
      tips: [
        'Total: ~59 g proteină la ~815 kcal pentru 32 de lei. 0,54 lei/g proteină, cu legume și carbohidrați incluși — nimic din categoria "mâncare gata" nu se apropie.',
        'Cu restul puiului (încă ~550 g de la un pui întreg) mai faci două mese identice a doua zi.',
        'Dacă vrei mai puține calorii, scoate pielea puiului și folosește jumătate de plic de orez: 55 g proteină la 560 kcal.'
      ],
      warnings: ['Sodiu moderat-ridicat de la puiul injectat. Dezosează puiul cât e cald, altfel e mult mai greu.'],
      storage: 'Componentele separate: puiul maxim 3 zile la frigider, salata în ziua deschiderii.',
      shelfLife: 'Se asamblează la momentul mesei',
      dataConfidence: 'medium',
      sources: ['Calcul pe baza valorilor din acest atlas', 'estimare de preț 2026 — neconfirmată la raft']
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_FOODS = (window.PF_FOODS || []).concat(ITEMS);
})();
