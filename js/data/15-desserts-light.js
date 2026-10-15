/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI UȘOARE (1/2): CREME, JELEURI, OU
 * File: js/data/15-desserts-light.js
 * ID prefix: ds-l-
 * Ultima documentare: 2026-10
 *
 * CE E LINIA UȘOARĂ
 * -----------------
 * Linia proteică întreabă „cât câștig față de desertul real". Linia asta
 * întreabă altceva: „cât de puțin mă costă pofta". Ținta e sub ~150 kcal pe
 * porție, din ingrediente pe care le mănânci oricum: lapte, iaurt, ouă,
 * gelatină, fructe. Proteina e binevenită, dar nu e motivul.
 *
 * Fișierul ăsta are deserturile de lingură — jeleuri, budinci, spume,
 * sufleuri, bezele. Fructele coapte și înghețatele sunt în
 * `16-desserts-light-fruit.js`.
 *
 * DE UNDE VIN REȚETELE
 * --------------------
 * Cercetare din octombrie 2026, cinci direcții în paralel: gelatină și agar,
 * deserturi din albuș, budinci și creme light (inclusiv Germania, Polonia,
 * Japonia, Orientul Mijlociu), fructe de sezon, „volume eating". Sursele
 * concrete sunt în `vsSource` și în `docs/DESSERT-LIGHT.md`. Unde o rețetă e
 * adaptarea noastră și nu are o sursă testată, `dataConfidence` e `low`.
 *
 * REGULI CARE CONTEAZĂ AICI MAI MULT DECÂT LA LINIA PROTEICĂ
 * ----------------------------------------------------------
 * 1. GELATINA NU FIERBE. Se hidratează în de 5 ori greutatea ei de apă rece,
 *    se dizolvă la 50–60 °C. Un plic Dr. Oetker = 10 g = 500 ml jeleu ferm.
 * 2. AGARUL TREBUIE SĂ FIARBĂ 2 minute. Altfel nu se leagă — e cauza nr. 1
 *    de eșec. Se închegă la temperatura camerei și nu se topește vara.
 * 3. ANANASUL, KIWI ȘI PAPAYA PROASPETE NU LASĂ GELATINA SĂ SE ÎNCHEGE.
 *    Mai multă gelatină nu ajută: enzima nu se consumă. Din conservă, da.
 * 4. DULCELE E MIERE, FRUCT SAU ZAHĂR — NIMIC DE SINTEZĂ. Mierea în creme,
 *    jeleuri și budinci, adăugată de pe foc; zahărul doar unde structura îl
 *    cere (bezele, pavlova, chec înger, suflé, caramel). Toate se socotesc
 *    zahăr adăugat și apar pe card, gram cu gram.
 * 5. ALBUȘUL CRUD din spume (lămâie, mousse) e un risc de salmonella pentru
 *    gravide, copii mici, vârstnici. Fiecare rețetă cu albuș crud o spune.
 * 6. PROTEINA DIN GELATINĂ se afișează separat. Pentru sațietate ajută; pentru
 *    mușchi nu se pune — îi lipsește triptofanul.
 *
 * Laptele din atlas e de 1,5%. Cu lapte 0,1% scazi încă ~6 kcal la 100 ml;
 * nu l-am pus implicit pentru că nu e în toate magazinele.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    /* =================== JELEURI ȘI CREME CU GELATINĂ =================== */

    {
      id: 'ds-l-panna-cotta-iaurt',
      name: 'Panna cotta cu iaurt și fructe de pădure',
      emoji: '🍮',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 200 },
        { id: 's-gelatin-powder', g: 6 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 250 },
        { p: 'miere', g: 10 },
        { p: 'fructe-padure', g: 200 },
        { p: 'lamaie', g: 5 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 15, chill: 300 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['cratiță mică', 'tel', '4 ramekine sau pahare'],

      steps: [
        'Presară gelatina peste 40 ml din lapte, rece. Las-o 10 minute să se umfle.',
        'Încălzește restul laptelui până scoate aburi, la ~60 °C. Nu-l lăsa să fiarbă.',
        'Ia cratița de pe foc și dizolvă gelatina umflată, amestecând un minut până nu mai vezi granule.',
        'Lasă laptele 5–10 minute să devină călduț, apoi bate-l cu telul în iaurt, cu mierea, vanilia și coaja de lămâie. Iaurtul pus în lapte fierbinte se taie.',
        'Toarnă în ramekine clătite cu apă rece și ține-le la frigider cel puțin 4 ore, ideal peste noapte.',
        'Răstoarnă fiecare ramekin după 5 secunde în apă fierbinte și pune fructele deasupra.'
      ],

      tips: [
        '6 g de gelatină la ~450 g de lichid înseamnă ~1,3% — destul ca să se răstoarne. Dacă o servești în pahar, 5 g dau o textură mai moale, mai aproape de restaurant.',
        'E mai acrișoară decât cea cu smântână. Vanilia multă și coaja de lămâie mută gustul de la „iaurt" spre „desert".',
        'Iaurtul de 2% nu e un capriciu: cu 0% textura iese mai „gumată".'
      ],

      swaps: [
        { label: 'Cu agar', text: '1,5 g de agar fiert 2 minute în lapte, în loc de gelatină. Iese vegetariană și mai fermă, mai puțin tremurată.' },
        { label: 'Mai puțin dulce', text: 'Fără miere: −8 kcal pe porție. Fructele de deasupra sunt destul de dulci pentru mulți.' }
      ],

      warnings: [
        'Conține lactate.'
      ],

      taste: { sweetness: 55, richness: 50, texture: 80, authenticity: 72 },

      vs: {
        name: 'Panna cotta de restaurant, cu smântână și sos de fructe',
        grams: 130, kcal: 420, protein: 3.5, carbs: 28, sugars: 26, fat: 33
      },
      vsSource: 'Reconstruită din rețeta clasică Jamila Cuisine (600 ml smântână 30% + ~100 g zahăr la 4 porții ≈ 530 kcal); o porție de restaurant e mai mică. Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },
      storage: 'Frigider, 3 zile, acoperită. Nu se congelează — gelatina lasă apă la dezgheț.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-panna-cotta-dovleac',
      name: 'Cremă de dovleac copt, cu condimente de plăcintă',
      emoji: '🎃',
      family: 'no-bake',
      craving: 'cremos',
      servings: 8,
      season: [9, 10, 11, 12],

      ing: [
        { id: 'd-lapte-15', g: 240 },
        { id: 'd-kefir', g: 120 },
        { id: 's-gelatin-powder', g: 7 },
        { p: 'miere', g: 20 },
        { id: 'd-skyr-natural-pilos', g: 120 },
        { p: 'piure-dovleac', g: 425 },
        { p: 'scortisoara', g: 4, free: true }
      ],

      time: { total: 20, active: 20, chill: 180 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['cratiță', 'tel sau blender vertical', '8 pahare'],

      steps: [
        'Coace dovleacul plăcintar felii, 40 de minute la 200 °C, apoi pasează-l. Fiert în apă iese apos și crema nu se mai leagă.',
        'În cratiță, la rece: laptele, chefirul și gelatina. Lasă 5 minute.',
        'Într-un bol, amestecă skyr-ul cu piureul, mierea și condimentele (scorțișoară, ghimbir, nucșoară, un vârf de cuișoare).',
        'Încălzește amestecul de lapte, amestecând, până aproape de clocot. Să nu fiarbă — chefirul se taie.',
        'Toarnă-l fierbinte peste dovleac și bate până e omogen. Porționează în pahare și ține la frigider cel puțin 2 ore.'
      ],

      tips: [
        'Gelatina e doar ~0,7% aici: crema se ține în pahar, dar nu se răstoarnă. E intenționat — e mai cremoasă așa.',
        'Dovleacul plăcintar sau Hokkaido. Cel de Halloween e apos și fad.',
        'O lingură de frișcă spray pe deasupra adaugă ~15 kcal și face cât jumătate din desert.'
      ],

      swaps: [
        { label: 'Din conservă', text: 'Piureul de dovleac la conservă e rar în Sibiu, dar dacă îl găsești, merge 1:1 și sari peste cuptor.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 55, richness: 50, texture: 75, authenticity: 70 },

      vs: {
        name: 'Plăcintă cu dovleac, felie de cofetărie',
        grams: 130, kcal: 320, protein: 5, carbs: 40, sugars: 20, fat: 15
      },
      vsSource: 'Adaptat după Diabetes Food Hub, „Low-fat pumpkin panna cotta" (60 kcal pe porție). Plăcinta: valori tipice pentru o felie de 130 g, cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },
      storage: 'Frigider, 4 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 3, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-spuma-ciocolata-lapte',
      name: 'Spumă de ciocolată din lapte bătut cu gelatină',
      emoji: '🍫',
      family: 'no-bake',
      craving: 'ciocolata',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 400 },
        { p: 'cacao', g: 15 },
        { id: 's-gelatin-powder', g: 6 },
        { p: 'miere', g: 12 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 0.5, free: true }
      ],

      time: { total: 30, active: 25, chill: 90 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['cratiță', 'tel', 'mixer', 'bol mare cu gheață'],

      steps: [
        'Hidratează gelatina în 40 ml lapte rece, 10 minute.',
        'Amestecă cacao și sarea cu 100 ml lapte rece până nu mai sunt cocoloașe, adaugă restul laptelui și încălzește la ~70 °C.',
        'Ia de pe foc, dizolvă gelatina, adaugă mierea și vanilia.',
        'Pune cratița într-un bol cu apă și gheață și amestecă 20–30 de minute, până se îngroașă ca un sirop gros — consistența albușului crud.',
        'Bate cu mixerul 4–6 minute: se deschide la culoare și crește de ~1,7–2 ori. Toarnă imediat în cupe și ține la frigider 1–2 ore.'
      ],

      tips: [
        'Tot trucul e momentul în care bați. Prea lichidă — nu prinde aer. Prea închegată — face cocoloașe; atunci încălzește 10 secunde la microunde și reia.',
        'O linguriță de cafea instant în lapte face gustul de ciocolată mai adânc, fără calorii.',
        'Iese aerată, ca interiorul unui baton Milky Way, nu grea ca un mousse cu frișcă. Dublul volumului pentru aceleași calorii e exact ideea.'
      ],

      swaps: [
        { label: 'Fără batere', text: 'Dacă sari peste pasul cu mixerul, ai o budincă-jeleu de cacao la ~65 kcal. La fel de bună, doar mai densă.' }
      ],

      warnings: ['Conține lactate.', 'Cacao: puțină cofeină, cam cât un sfert de cafea.'],

      taste: { sweetness: 55, richness: 45, texture: 75, authenticity: 60 },

      vs: {
        name: 'Mousse de ciocolată de cofetărie',
        grams: 100, kcal: 330, protein: 5, carbs: 26, sugars: 24, fat: 23
      },
      vsSource: 'Tehnica de batere a gelatinei din rețetele „snow pudding" și „Jell-O whip" (New England Today, SparkPeople). Mousse: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 2 zile. Aerul se pierde încet după prima zi.',
      mealFit: { desert: 5, gustare: 4, micDejun: 1, postAntrenament: 2, seara: 3 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-jeleu-cafea',
      name: 'Jeleu de cafea japonez, cu lapte rece',
      emoji: '☕',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { p: 'cafea-preparata', g: 500 },
        { id: 's-gelatin-powder', g: 8 },
        { p: 'miere', g: 12 },
        { id: 'd-lapte-15', g: 120 }
      ],

      time: { total: 10, active: 10, chill: 240 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță mică', 'tavă de ~15×20 cm'],

      steps: [
        'Hidratează gelatina în 40 ml apă rece, 5–10 minute.',
        'Dizolvă mierea în cafeaua fierbinte (~70 °C, nu clocotită), apoi gelatina, amestecând un minut.',
        'Toarnă într-o tavă și ține la frigider 4 ore.',
        'Taie cuburi de 1,5 cm, pune-le în pahare și toarnă 30 ml de lapte rece peste fiecare.'
      ],

      tips: [
        'E un desert care se ține pe amărăciune, nu pe dulce. Pentru cine bea cafea fără zahăr e cel mai convingător lucru de pe pagina asta.',
        'Cu 3 g de agar fiert 2 minute în loc de gelatină, cuburile ies ferme și „crocante" și nu se topesc vara.',
        'Varianta de cafenea din Japonia pune lapte condensat. Două lingurițe (10 g) adaugă ~16 kcal și 5 g de zahăr pe porție.'
      ],

      swaps: [
        { label: 'Seara', text: 'Cu cafea decofeinizată. Gustul rămâne aproape la fel.' }
      ],

      warnings: ['Cofeină: ~60 mg pe porție, cât jumătate de espresso dublu.'],

      taste: { sweetness: 35, richness: 25, texture: 75, authenticity: 85 },

      vs: {
        name: 'Frappé cu frișcă, cafenea, 350 ml',
        grams: 350, kcal: 290, protein: 5, carbs: 42, sugars: 40, fat: 11
      },
      vsSource: 'Rețeta după Just One Cookbook și Pickled Plum („Coffee jelly"). Frappé: valori tipice de lanț de cafenele, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 4–5 zile, acoperit. Laptele se pune doar la servire.',
      mealFit: { desert: 4, gustare: 4, micDejun: 3, postAntrenament: 1, seara: 1 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-jeleu-fructe-hibiscus',
      name: 'Jeleu de fructe de pădure cu suc de mere și hibiscus',
      emoji: '🍇',
      family: 'no-bake',
      craving: 'fructat',
      servings: 5,

      ing: [
        { p: 'suc-mere', g: 300 },
        { p: 'ceai-fructe', g: 200 },
        { id: 's-gelatin-powder', g: 10 },
        { p: 'fructe-padure', g: 250 },
        { p: 'lamaie', g: 15 }
      ],

      time: { total: 15, active: 15, chill: 300 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', '5 pahare'],

      steps: [
        'Fă un ceai tare de hibiscus (două pliculețe la 200 ml) și lasă-l să se răcească.',
        'Hidratează gelatina în 100 ml din ceaiul rece, 10 minute.',
        'Încălzește sucul de mere cu restul de ceai la 50–60 °C și dizolvă gelatina. Adaugă zeama de lămâie.',
        'Împarte fructele în pahare, toarnă câte două degete de lichid și ține 20 de minute la frigider, ca fructele să nu plutească.',
        'Toarnă restul lichidului și lasă la frigider 4 ore sau peste noapte.'
      ],

      tips: [
        'Sucul e singura sursă de zahăr adăugat și e ~6 g pe porție — după OMS, zahărul din suc se socotește la fel ca zahărul din pungă. Cine vrea mai puțin poate înlocui jumătate din suc cu ceai de fructe — iese mai acrișor.',
        'Fructele congelate decongelate se scurg bine. Zeama lor în plus diluează jeleul.',
        'Nu kiwi, ananas sau papaya proaspete: enzimele lor nu lasă gelatina să se închege, oricâtă ai pune.'
      ],

      swaps: [
        { label: 'Fără suc', text: '500 ml de ceai de fructe de pădure în loc de suc, cu 20 g de miere: ~40 kcal pe porție și ~3 g de zahăr adăugat, cu gust mai „subțire".' }
      ],

      warnings: [],

      taste: { sweetness: 55, richness: 15, texture: 80, authenticity: 85 },

      vs: {
        name: 'Jeleu de cofetărie cu fructe, la pahar',
        grams: 150, kcal: 160, protein: 2, carbs: 38, sugars: 35, fat: 0.2
      },
      vsSource: 'După Sarah Raven, „Summer berry jelly", și aronia-charlottenburg.ro (jeleuri cu suc natural). Jeleul de comparație: valori tipice pentru jeleu cu zahăr, 2026.',

      sweetener: null,
      storage: 'Frigider, 4 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-jeleu-portocale',
      name: 'Jeleu de portocale în coaja portocalei',
      emoji: '🍊',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,
      season: [11, 12, 1, 2, 3],

      ing: [
        { p: 'suc-portocale', g: 400 },
        { id: 's-gelatin-powder', g: 9 },
        { p: 'lamaie', g: 15 }
      ],

      time: { total: 30, active: 25, chill: 240 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['storcător', 'lingură', 'formă de brioșe'],

      steps: [
        'Taie 4 portocale mari în jumătăți, stoarce-le și scoate pulpa cu o lingură, cu grijă să rămână cojile întregi.',
        'Strecoară sucul. Dacă nu ajunge la 400 ml, completează cu suc 100% din cutie.',
        'Hidratează gelatina în 60 ml de suc rece, 10 minute.',
        'Încălzește 100 ml de suc la 60 °C, dizolvă gelatina, apoi amestecă cu restul de suc rece și cu zeama de lămâie.',
        'Așază cojile în forma de brioșe, ca să stea drept, și umple-le. Frigider 4 ore.',
        'Taie fiecare jumătate în 2–3 felii cu un cuțit ud.'
      ],

      tips: [
        'Arată ca jeleurile „felii de portocală" din comerț, care sunt ~80% zahăr. Aici zahărul e doar al portocalei — dar fiind suc, nu fruct întreg, OMS îl socotește zahăr liber.',
        'Sucul proaspăt e acid; de aceea 9 g de gelatină în loc de 8. Nu fierbe sucul: prinde gust de „fiert".'
      ],

      swaps: [
        { label: 'Mai puțin zahăr', text: 'Jumătate suc, jumătate ceai de portocale-scorțișoară: ~30 kcal pe porție.' }
      ],

      warnings: [],

      taste: { sweetness: 60, richness: 10, texture: 80, authenticity: 85 },

      vs: {
        name: 'Jeleuri „felii de portocală", 50 g',
        grams: 50, kcal: 165, protein: 0, carbs: 41, sugars: 33, fat: 0
      },
      vsSource: 'Tehnică după aronia-charlottenburg.ro și eticheta Dr. Oetker (10 g la 500 ml). Jeleurile: valori de etichetă tipice, 2026.',

      sweetener: null,
      storage: 'Frigider, 3 zile, acoperite cu folie.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-bomboane-gumate',
      name: 'Bomboane gumate din suc natural',
      emoji: '🐻',
      family: 'batch',
      craving: 'fructat',
      servings: 6,

      ing: [
        { p: 'suc-mere', g: 240 },
        { id: 's-gelatin-powder', g: 25 },
        { p: 'lamaie', g: 10 },
        { p: 'miere', g: 10 }
      ],

      time: { total: 25, active: 20, chill: 180 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['cratiță mică', 'forme de silicon (ursuleți) sau tavă de 15×15 cm', 'pipetă'],

      steps: [
        'Toarnă 120 ml de suc rece într-un bol, presară gelatina deasupra și las-o 10 minute. Se face un bloc.',
        'Încălzește restul de suc la ~60 °C, adaugă blocul de gelatină și amestecă la foc mic până e complet limpede. Nu-l lăsa să fiarbă.',
        'Adaugă lămâia și mierea, apoi ia spuma de deasupra cu o lingură.',
        'Toarnă cu pipeta în forme sau într-o tavă tapetată. Frigider 2–4 ore, apoi taie cuburi.'
      ],

      tips: [
        'Gelatina e ~10% din lichid — de 5 ori mai mult decât la un jeleu. Doar așa se fac gumate fără siropul de glucoză din Haribo.',
        'Ies elastice, nu „chewy": siropul de glucoză e cel care le face lipicioase. Asta e diferența care rămâne.',
        'Cu suc de struguri roșii sau piure de zmeură strecurat ies colorate fără coloranți.'
      ],

      swaps: [
        { label: 'Mai dulci', text: '20 g de miere în loc de 10: +5 kcal pe porție, gust mai rotund.' }
      ],

      warnings: [
        'Nu cu kiwi, ananas, papaya sau mango proaspete — nu se închegă.'
      ],

      taste: { sweetness: 50, richness: 10, texture: 65, authenticity: 55 },

      vs: {
        name: 'Ursuleți gumați Haribo, 50 g',
        grams: 50, kcal: 172, protein: 3.4, carbs: 39, sugars: 23, fat: 0.3
      },
      vsSource: 'După magicianafit.ro și Bigger Bolder Baking (gumate din suc). Haribo Goldbären: tabel nutrițional producător, 2026.',

      sweetener: { kind: 'miere', gPerServing: 1.7 },
      storage: 'Frigider, 5–7 zile, în cutie închisă. La cald se înmoaie.',
      mealFit: { desert: 3, gustare: 5, micDejun: 0, postAntrenament: 2, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-spuma-capsuni',
      name: 'Spumă de căpșuni cu iaurt, bătută',
      emoji: '🍓',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,

      ing: [
        { p: 'capsuni', g: 300 },
        { p: 'apa', g: 150 },
        { id: 's-gelatin-powder', g: 8 },
        { p: 'miere', g: 12 },
        { p: 'lamaie', g: 15 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 200 }
      ],

      time: { total: 30, active: 20, chill: 120 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['blender', 'mixer', 'bol cu gheață'],

      steps: [
        'Hidratează gelatina în 50 ml de apă rece.',
        'Pasează căpșunile, încălzește piureul cu restul de apă la 60 °C, apoi dizolvă gelatina și mierea.',
        'Răcește în baie de gheață, amestecând, până devine siropos — 20–30 de minute.',
        'Bate cu mixerul 3–5 minute: se deschide la culoare și se dublează.',
        'Adaugă iaurtul bătând scurt, porționează în cupe mari și ține la frigider 2 ore.'
      ],

      tips: [
        'Un bol de ~180 ml pentru ~60 kcal. E cel mai bun raport volum/calorii din toată secțiunea cremoasă.',
        'Căpșuni congelate fără sirop merg la fel de bine.',
        'Varianta leneșă: lași jeleul să se închege complet, apoi îl blenduiești 30 de secunde cu iaurtul. Iese o cremă aerată, mai densă.'
      ],

      swaps: [
        { label: 'Fără iaurt', text: 'Doar jeleul bătut: ~30 kcal, o spumă roz ca un „Jell-O whip".' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 55, richness: 30, texture: 80, authenticity: 65 },

      vs: {
        name: 'Mousse/spumă de fructe cu frișcă, la pahar',
        grams: 150, kcal: 280, protein: 3, carbs: 28, sugars: 25, fat: 17
      },
      vsSource: 'După Resolution Eats („sugar-free Jello whips") și iFoodReal („protein fluffy jello"), cu gelatină simplă în loc de plicul american. Comparația: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 2 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 3, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-kanten-mandarine',
      name: 'Jeleu de lapte cu agar și mandarine (kanten)',
      emoji: '🍊',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,
      season: [11, 12, 1, 2],

      ing: [
        { p: 'apa', g: 200 },
        { p: 'agar', g: 3 },
        { p: 'miere', g: 10 },
        { id: 'd-lapte-15', g: 300 },
        { p: 'mandarine', g: 160 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 15, active: 15, chill: 90 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'formă sau pahare'],

      steps: [
        'Amestecă agarul în apa rece, adu la fiert și fierbe 2 minute amestecând continuu.',
        'Adaugă mierea, apoi laptele, și încălzește până aproape de clocot.',
        'Strecoară într-o formă clătită cu apă și așază segmentele de mandarină.',
        'Se închegă singur la temperatura camerei în 30–45 de minute. Apoi 1 oră la frigider și taie romburi.'
      ],

      tips: [
        'Agarul se fierbe în apă, nu direct în lapte: laptele fiert puternic se prinde și dă în foc.',
        'Cu agar, fructele proaspete sunt în regulă, inclusiv kiwi — enzima care strică gelatina nu atinge agarul.',
        'Textura e fermă și casantă, nu tremurată. Se taie curat și nu se topește pe masă vara.'
      ],

      swaps: [
        { label: 'Cu matcha', text: '3 g de matcha cernut, dizolvat separat în 30 ml apă caldă și adăugat la sfârșit (nu fiert — devine amar).' }
      ],

      warnings: ['Conține lactate.', 'Lasă apă după 2–3 zile — mănâncă-l repede.'],

      taste: { sweetness: 50, richness: 30, texture: 70, authenticity: 75 },

      vs: {
        name: 'Budincă de vanilie la pahar, comercială',
        grams: 125, kcal: 140, protein: 3.5, carbs: 22, sugars: 18, fat: 4
      },
      vsSource: 'După ryukoch.com și Cookpad („milk kanten"); raportul de agar după Just One Cookbook (4 g la 600 ml). Budinca: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },
      storage: 'Frigider, 2 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 1, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-tofu-migdale',
      name: 'Jeleu de lapte cu aromă de migdale (annin dofu)',
      emoji: '🤍',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 450 },
        { id: 's-gelatin-powder', g: 5 },
        { p: 'miere', g: 10 },
        { p: 'aroma-migdale', g: 2, free: true },
        { p: 'zmeura', g: 150 }
      ],

      time: { total: 15, active: 15, chill: 150 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'bol cu gheață', '4 pahare'],

      steps: [
        'Hidratează gelatina în 30 ml lapte rece.',
        'Încălzește restul laptelui până aproape de clocot. Ia de pe foc și dizolvă gelatina și mierea.',
        'Adaugă aroma de migdale picătură cu picătură, gustând.',
        'Răcește în baie de gheață, amestecând, până se îngroașă ușor — așa nu face pieliță.',
        'Toarnă în pahare, 2–3 ore la frigider, apoi zmeura deasupra.'
      ],

      tips: [
        'Aroma de migdale amare dă gustul de marțipan și amaretto fără niciun gram de migdale. E puternică: 5–6 picături, nu o linguriță.',
        'Cu 2 g de agar în loc de gelatină se face varianta chinezească, tăiată cubulețe într-un castron cu fructe.'
      ],

      swaps: [
        { label: 'Cu piersici', text: 'Piersici din conservă în suc propriu, scurse, în loc de zmeură.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 50, richness: 40, texture: 80, authenticity: 70 },

      vs: {
        name: 'Panna cotta de restaurant, cu smântână și sos de fructe',
        grams: 130, kcal: 420, protein: 3.5, carbs: 28, sugars: 26, fat: 33
      },
      vsSource: 'După Japanese Cooking 101 și Honest Food Talks („almond tofu"), cu lapte 1,5% în loc de smântână. Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-spuma-lamaie',
      name: 'Spumă de lămâie cu albuș și sos de vanilie',
      emoji: '🍋',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 's-gelatin-powder', g: 8 },
        { p: 'apa', g: 260 },
        { p: 'lamaie', g: 100 },
        { p: 'zahar', g: 40 },
        { p: 'miere', g: 8 },
        { id: 'd-albus-lichid', g: 99 },
        { id: 'd-lapte-15', g: 250 },
        { p: 'galbenus', g: 17 },
        { p: 'amidon-porumb', g: 5 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 50, active: 25, chill: 180 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['mixer', 'bol cu gheață', 'cratiță', 'cupe'],

      steps: [
        'Hidratează gelatina în 60 ml apă rece, 5 minute. Adaugă 200 ml apă fierbinte, zahărul, zeama și coaja de la două lămâi.',
        'Răcește în baie de gheață 30–45 de minute, până are consistența albușului crud.',
        'Bate albușurile spumă moale, toarnă amestecul de gelatină și bate la viteză mare ~5 minute, până triplează volumul.',
        'Toarnă în cupe clătite cu apă rece și ține la frigider 3 ore.',
        'Sosul: lapte, un gălbenuș și amidon, la foc mic, până se îngroașă — fără să fiarbă. Ia de pe foc, adaugă mierea și vanilia, răcește și toarnă-l lângă spumă.'
      ],

      tips: [
        'Rețeta americană veche („snow pudding") pune 400 g de zahăr la 12 porții. Aici sunt 40 g la 4 porții — destul cât spuma să țină și să nu fie acră ca zeama goală.',
        'Gelatina prea caldă dezumflă albușurile. Așteaptă momentul „siropos", nu sări peste el.',
        'Volumul triplu e ce face din 73 kcal un desert care umple o cupă mare.'
      ],

      swaps: [
        { label: 'Fără sos', text: 'Doar spuma: ~30 kcal pe porție. Acrișoară și foarte aerată.' }
      ],

      warnings: [
        'Albuș crud: nu pentru gravide, copii mici, vârstnici sau persoane imunodeprimate. Albușul pasteurizat la cutie elimină riscul.',
        'Conține ou și lactate.'
      ],

      taste: { sweetness: 55, richness: 30, texture: 85, authenticity: 70 },

      vs: {
        name: 'Tartă cu lămâie, porție de cofetărie',
        grams: 110, kcal: 380, protein: 5, carbs: 48, sugars: 30, fat: 19
      },
      vsSource: 'După New England Today („Snow pudding") și Boulder Locavore; sosul după Bianca Iordan, nutriționist. Tarta: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 12 },
      storage: 'Frigider, 2 zile. Sosul separat.',
      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 2, seara: 4 },
      dataConfidence: 'medium'
    },

    /* =================== BUDINCI DE CASĂ ================================ */

    {
      id: 'ds-l-budinca-vanilie',
      name: 'Budincă de vanilie de casă, cu un singur gălbenuș',
      emoji: '🍮',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 515 },
        { p: 'amidon-porumb', g: 35 },
        { p: 'galbenus', g: 17 },
        { p: 'miere', g: 16 },
        { p: 'vanilie', g: 5, free: true },
        { p: 'sare', g: 0.5, free: true }
      ],

      time: { total: 15, active: 10, chill: 120 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță cu fund gros', 'tel', '4 boluri'],

      steps: [
        'Dizolvă amidonul și gălbenușul în 100 ml lapte rece, până nu mai e niciun cocoloș.',
        'Încălzește restul laptelui cu vanilia și sarea până aproape de fierbere.',
        'Toarnă amidonul în fir subțire, amestecând continuu cu telul.',
        'Lasă să dea un clocot complet și fierbe la foc mic 1–2 minute. Cu gălbenuș, clocotul e obligatoriu. Apoi ia de pe foc și amestecă mierea.',
        'Toarnă în boluri, acoperă cu folie lipită de suprafață și ține la frigider 2 ore.'
      ],

      tips: [
        'De ce clocotul: gălbenușul are o enzimă (amilază) care „mănâncă" amidonul peste noapte și budinca se face lichidă. Un minut de fierbere o oprește.',
        'Fără gălbenuș iese ~74 kcal, dar mai palidă și mai puțin catifelată. Un vârf de turmeric rezolvă culoarea.',
        'Amestecă tot timpul — laptele slab se prinde ușor de fund.'
      ],

      swaps: [
        { label: 'Lapte 0,1%', text: 'Cu lapte degresat scazi ~8 kcal pe porție. Adaugă 3–5 g de amidon în plus: grăsimea lipsă se simte.' }
      ],

      warnings: ['Conține lactate și ou.'],

      taste: { sweetness: 55, richness: 45, texture: 75, authenticity: 80 },

      vs: {
        name: 'Budincă de vanilie la pahar, comercială',
        grams: 125, kcal: 140, protein: 3.5, carbs: 22, sugars: 18, fat: 4
      },
      vsSource: 'Proporții după Cookidoo („Vanillepudding") și bzi.ro (cremă de vanilie); tehnica după Polish Foodies („budyń"). Budinca: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 4 },
      storage: 'Frigider, 3 zile, cu folie pe suprafață.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-budinca-ciocolata',
      name: 'Budincă de ciocolată de casă',
      emoji: '🍫',
      family: 'no-bake',
      craving: 'ciocolata',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 515 },
        { p: 'amidon-porumb', g: 30 },
        { p: 'cacao', g: 20 },
        { p: 'ciocolata-neagra', g: 10 },
        { p: 'miere', g: 20 },
        { p: 'sare', g: 0.5, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 10, chill: 210 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'tel', 'sită (opțional)'],

      steps: [
        'Amestecă uscat, direct în cratiță, cacao, amidonul și sarea.',
        'Adaugă laptele rece treptat, cu telul, până e omogen. Pune și ciocolata tocată.',
        'Adu la fiert la foc mediu, amestecând continuu, apoi fierbe 2–3 minute la foc mic până devine groasă și lucioasă.',
        'Ia de pe foc, adaugă mierea și vanilia și, pentru textură fină, trece-o prin sită.',
        'Porționează, folie pe suprafață, 3–4 ore la frigider.'
      ],

      tips: [
        'Cei 10 g de ciocolată adaugă doar ~15 kcal pe porție și fac diferența dintre „cacao cu lapte" și „budincă de ciocolată".',
        'Nu trece de 32 g de amidon: cacaoa îngroașă și ea, iar fără grăsime budinca iese gumată.',
        'Cacao alcalinizată și un praf de sare. Cea naturală poate ieși acrișoară.'
      ],

      swaps: [
        { label: 'Fără ciocolată', text: 'Doar cacao: ~88 kcal pe porție, gust ceva mai plat.' }
      ],

      warnings: ['Conține lactate.', 'Cacao: puțină cofeină.'],

      taste: { sweetness: 55, richness: 55, texture: 75, authenticity: 78 },

      vs: {
        name: 'Budincă de ciocolată la pahar, comercială (tip Danette)',
        grams: 125, kcal: 160, protein: 3.6, carbs: 25, sugars: 21, fat: 4.5
      },
      vsSource: 'După America\'s Test Kitchen („Low-fat chocolate pudding") și Polish Foodies, cu mai puțină miere în loc de zahăr. Comparația: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 3 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-gris-cu-lapte',
      name: 'Griș cu lapte cu fructe de pădure fierte',
      emoji: '🥣',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 515 },
        { p: 'gris', g: 40 },
        { p: 'miere', g: 12 },
        { p: 'lamaie', g: 5 },
        { p: 'fructe-padure', g: 150 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 15, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'tel'],

      steps: [
        'Încălzește laptele cu un praf de sare și coaja de lămâie.',
        'Când dă în clocot, adaugă grișul în ploaie, amestecând continuu.',
        'Fierbe la foc mic 8–10 minute, amestecând, până se îngroașă. Ia-l de pe foc când e puțin mai subțire decât vrei — se îngroașă la răcire.',
        'Ia de pe foc și adaugă mierea și vanilia.',
        'Separat, fierbe fructele 3–4 minute cu o lingură de apă și pune-le deasupra, pe post de dulceață.'
      ],

      tips: [
        'Varianta din copilărie, cu unt și dulceață, ajunge pe la 400 kcal. Diferența vine din unt și din dulceață, nu din griș.',
        'Grișul turnat în lapte rece face cocoloașe. Doar în lapte care fierbe.'
      ],

      swaps: [
        { label: 'Rece, din formă', text: 'Toarnă grișul fierbinte în forme clătite cu apă și răstoarnă-l după o oră la frigider.' }
      ],

      warnings: ['Conține lactate și gluten.'],

      taste: { sweetness: 50, richness: 45, texture: 75, authenticity: 80 },

      vs: {
        name: 'Griș cu lapte cu unt și dulceață, porție de casă',
        grams: 250, kcal: 400, protein: 10, carbs: 58, sugars: 35, fat: 14
      },
      vsSource: 'Proporții după bzi.ro și newsweek.ro (griș cu lapte clasic), Jamila Cuisine (budincă de griș). Varianta clasică: estimare din ingrediente, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 2 zile. Se îngroașă mult; se subțiază cu o lingură de lapte.',
      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-orez-cu-lapte',
      name: 'Orez cu lapte, cu jumătate din orez',
      emoji: '🍚',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { p: 'orez-rotund', g: 50 },
        { id: 'd-lapte-15', g: 600 },
        { p: 'miere', g: 12 },
        { p: 'lamaie', g: 5 },
        { p: 'scortisoara', g: 2, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 45, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță cu fund gros'],

      steps: [
        'Pune orezul nespălat la fiert cu laptele, un praf de sare, scorțișoara și coaja de lămâie, la foc foarte mic, cu capacul întredeschis.',
        'Fierbe 35–40 de minute, amestecând des, până boabele sunt moi și laptele s-a îngroșat.',
        'Ia de pe foc și adaugă mierea și vanilia.',
        'Servește călduț sau rece, cu scorțișoară deasupra. Se îngroașă mult la răcire.'
      ],

      tips: [
        'Orezul se fierbe în lapte fără nimic dulce; mierea vine la sfârșit. E regula lui Jamila și are dreptate: altfel se prinde de fund.',
        'Cantitatea mică de orez arată „puțin". Servește-l în pahare mici, nu în farfurii.',
        'E cel mai „consistent" desert din linia ușoară — peste 120 kcal, dar aproape de originalul de 237.'
      ],

      swaps: [
        { label: 'Lapte 0,1%', text: 'Scade la ~104 kcal pe porție, mai puțin cremos. Jumătate-jumătate e compromisul bun.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 50, richness: 50, texture: 75, authenticity: 82 },

      vs: {
        name: 'Orez cu lapte de casă, cu zahăr, ouă și unt',
        grams: 200, kcal: 237, protein: 7, carbs: 35, sugars: 20, fat: 7.5
      },
      vsSource: 'Varianta clasică după Jamila Cuisine („Budincă de orez cu lapte", 237 kcal pe porție). Varianta ușoară: cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-kisiel-visine',
      name: 'Kisiel de vișine (jeleu polonez de lingură)',
      emoji: '🍒',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,

      ing: [
        { p: 'visine-congelate', g: 400 },
        { p: 'apa', g: 600 },
        { p: 'amidon-cartofi', g: 35 },
        { p: 'miere', g: 20 },
        { p: 'condimente', g: 2, free: true }
      ],

      time: { total: 20, active: 10, chill: 90 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'tel'],

      steps: [
        'Fierbe vișinele în 500 ml de apă, cu un baton de scorțișoară, 10 minute.',
        'Adaugă mierea.',
        'Dizolvă amidonul complet în 100 ml de apă rece.',
        'Toarnă amidonul în fir subțire în compotul care fierbe încet, amestecând. Imediat ce devine translucid — ~30 de secunde — ia-l de pe foc.',
        'Servește-l cald, ca în Polonia, sau toarnă-l în pahare și răcește-l 1–2 ore.'
      ],

      tips: [
        'Amidonul de cartofi dă un jeleu limpede și lucios. Cel de porumb merge, dar iese tulbure.',
        'După ce s-a îngroșat, nu-l mai fierbe și nu-l mai bate: amidonul de cartofi se subțiază.',
        'Cu 15–20 g de amidon iese varianta de băut, caldă, ca o ciocolată caldă de fructe.'
      ],

      swaps: [
        { label: 'Fructe de pădure', text: 'Același raport cu fructe de pădure congelate.' }
      ],

      warnings: [],

      taste: { sweetness: 50, richness: 20, texture: 70, authenticity: 85 },

      vs: {
        name: 'Budincă de fructe la pahar, comercială',
        grams: 125, kcal: 150, protein: 2.5, carbs: 28, sugars: 22, fat: 3
      },
      vsSource: 'După Polish Foodies („Kisiel", 113 kcal pe porție cu zahăr) și Cookidoo. Comparația: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-rodgrod-skyr',
      name: 'Budincă daneză de fructe roșii, cu skyr în loc de frișcă',
      emoji: '🍓',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,

      ing: [
        { p: 'fructe-padure', g: 500 },
        { p: 'apa', g: 300 },
        { p: 'amidon-cartofi', g: 20 },
        { p: 'miere', g: 22 },
        { id: 'd-skyr-natural-pilos', g: 160 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 25, active: 15, chill: 120 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță'],

      steps: [
        'Pune fructele, 250 ml de apă, mierea și vanilia la fiert și fierbe 8 minute.',
        'Redu focul. Dizolvă amidonul în restul de apă rece și toarnă-l, amestecând. Ține 2–3 minute la foc mic, fără să clocotească.',
        'Toarnă în boluri și răcește 2 ore. Folia lipită de suprafață împiedică pojghița.',
        'Servește cu o lingură mare de skyr deasupra.'
      ],

      tips: [
        'Originalul danez se servește cu frișcă lichidă. Skyr-ul imită acreala ei la o zecime din calorii.',
        'Coacăzele sunt foarte acre. Gustă înainte de amidon și potrivește mierea.'
      ],

      swaps: [
        { label: 'Cu iaurt grecesc', text: '0% sau 2%, aceeași cantitate.' }
      ],

      warnings: [
        'Conține lactate.'
      ],

      taste: { sweetness: 55, richness: 30, texture: 70, authenticity: 70 },

      vs: {
        name: 'Tartă cu fructe de pădure, porție de cofetărie',
        grams: 120, kcal: 330, protein: 4, carbs: 42, sugars: 26, fat: 16
      },
      vsSource: 'După Nordic Food Living („Rødgrød med fløde") și Fooby.ch. Tarta: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5.5 },
      storage: 'Frigider, 3 zile, fără skyr.',
      mealFit: { desert: 5, gustare: 5, micDejun: 3, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-quarkspeise',
      name: 'Cremă de brânză bătută cu apă minerală și fructe (Quarkspeise)',
      emoji: '🫐',
      family: 'no-bake',
      craving: 'cremos',
      servings: 3,

      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 250 },
        { p: 'apa', g: 60 },
        { p: 'miere', g: 10 },
        { p: 'lamaie', g: 5 },
        { p: 'fructe-padure', g: 200 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 5, active: 5, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'tel sau mixer'],

      steps: [
        'Bate brânza cu apa minerală carbogazoasă rece până devine pufoasă și lucioasă.',
        'Adaugă mierea, vanilia și coaja de lămâie.',
        'Zdrobește jumătate din fructe și trage-le prin cremă cu 2–3 mișcări, ca să rămână marmorată.',
        'Porționează și pune restul de fructe deasupra.'
      ],

      tips: [
        'Apa minerală e trucul nemțesc: bulele aerează brânza și o fac să pară cu frișcă. Cu apă plată iese doar mai moale.',
        'Brânza de vaci românească slabă e granulată. Brânza tip quark de la Lidl (Milbona) iese netedă; altfel, blender vertical un minut.',
        'Gata în 5 minute, fără gelatină, fără foc — cea mai rapidă rețetă din linia ușoară.'
      ],

      swaps: [
        { label: 'Shrikhand (India)', text: 'În loc de fructe: câteva fire de șofran înmuiate în lapte cald, un vârf de cardamom și 5 g de fistic pisat.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 50, richness: 40, texture: 75, authenticity: 70 },

      vs: {
        name: 'Cremă de mascarpone cu fructe de pădure, la pahar',
        grams: 150, kcal: 390, protein: 5, carbs: 22, sugars: 20, fat: 31
      },
      vsSource: 'După lecker.de („Quarkspeise", cu sfatul apei minerale) și Weight Watchers DE („Beerenknuspercreme"). Comparația: estimare din ingrediente, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3.3 },
      storage: 'Se mănâncă pe loc. La frigider, 1 zi — aerul iese.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 4, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-tiramisu-iaurt',
      name: 'Tiramisu cu iaurt grecesc, la pahar',
      emoji: '☕',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-iaurt-grecesc-olympus-0', g: 400 },
        { p: 'piscoturi', g: 50 },
        { p: 'cafea-preparata', g: 150 },
        { p: 'miere', g: 12 },
        { p: 'cacao', g: 6 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 15, chill: 240 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['4 pahare', 'sită pentru cacao'],

      steps: [
        'Amestecă iaurtul cu mierea și vanilia (și, dacă vrei, câteva picături de esență de rom).',
        'Rupe pișcoturile în două și înmoaie-le o secundă-două în cafea — nu mai mult, se desfac.',
        'Pune pișcoturi pe fundul paharelor, un strat de cremă, încă un rând de pișcoturi, apoi cremă.',
        'Lasă la frigider cel puțin 4 ore, ideal peste noapte. Pudrează cu cacao chiar înainte de servire.'
      ],

      tips: [
        'Pișcoturile sunt jumătate zahăr — ~5 g de zahăr adăugat pe porție vin doar din ele. Numărul de pișcoturi e butonul de calorii, nu mierea.',
        'E mai acrișor decât originalul cu mascarpone, dar după o noapte la rece iaurtul se „așază" și devine convingător.'
      ],

      swaps: [
        { label: 'Mai dens', text: 'Jumătate iaurt, jumătate brânză tip quark. Mai aproape de mascarpone, +2 g de proteină pe porție.' }
      ],

      warnings: ['Conține lactate, gluten și ou (din pișcoturi).', 'Cofeină din cafea — nu e un desert de seară.'],

      taste: { sweetness: 55, richness: 45, texture: 75, authenticity: 70 },

      vs: {
        name: 'Tiramisu, porție de restaurant',
        grams: 150, kcal: 450, protein: 7, carbs: 40, sugars: 28, fat: 29
      },
      vsSource: 'După GialloZafferano („Tiramisù allo yogurt greco", ~170 kcal) și Delicious Magazine („Low calorie tiramisu"), cu mai puține pișcoturi. Tiramisu: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 2 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 3, seara: 2 },
      dataConfidence: 'high'
    },

    /* =================== DIN OU: BEZELE, SUFLEURI, CREME COAPTE ========== */

    {
      id: 'ds-l-lapte-de-pasare',
      name: 'Lapte de pasăre light',
      emoji: '☁️',
      family: 'no-bake',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 515 },
        { id: 'd-oua-gaina-l', g: 150 },
        { p: 'zahar', g: 10 },
        { p: 'miere', g: 15 },
        { p: 'amidon-porumb', g: 8 },
        { p: 'lamaie', g: 3 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 45, active: 30, chill: 120 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['cratiță', 'mixer', 'spumieră', 'termometru (opțional)'],

      steps: [
        'Încălzește laptele cu vanilia și coaja de lămâie până abia fierbe.',
        'Separă cele 3 ouă. Bate albușurile cu un praf de sare; când fac spumă, adaugă zahărul și bate până se întăresc.',
        'Fă găluște cu două linguri ude și poșează-le în laptele care abia fierbe, 1–2 minute pe fiecare parte. Scoate-le pe o sită.',
        'Freacă gălbenușurile cu amidonul. Toarnă peste ele laptele fierbinte, strecurat, amestecând.',
        'Întoarce totul în cratiță și gătește la foc mic, amestecând continuu, fără să treci de ~80 °C, până crema îmbracă lingura. Ia de pe foc și amestecă mierea.',
        'Toarnă în boluri, pune găluștele deasupra, răcește și ține 2 ore la frigider. Scorțișoară la servire.'
      ],

      tips: [
        'Clasicul lui Laura Laurențiu: 1 L lapte integral, 6 ouă, 180 g zahăr — ~313 kcal porția. Aici sunt 10 g de zahăr în albușuri și 15 g de miere în cremă, pentru 4 porții: sub jumătate din calorii.',
        'Laptele în care fierbi găluștele nu trebuie să clocotească: în clocot se umflă și apoi se strâng ca un burete.',
        'Cu mai puține gălbenușuri, crema se taie mai ușor. Foc mic și răbdare; amidonul ajută la siguranță.'
      ],

      swaps: [
        { label: 'Găluște la microunde', text: 'Varianta Biancăi Iordan: câte o găluscă într-o cană, 3–4 secunde la microunde, până se umflă. Mai mult nu — se strânge.' }
      ],

      warnings: [
        'Conține ou și lactate.'
      ],

      taste: { sweetness: 60, richness: 50, texture: 80, authenticity: 85 },

      vs: {
        name: 'Lapte de pasăre clasic, porție de casă',
        grams: 250, kcal: 313, protein: 11, carbs: 38, sugars: 33, fat: 13
      },
      vsSource: 'Clasicul după Laura Laurențiu (1 L lapte 3,5%, 6 ouă, 180 g zahăr, 6 porții ≈ 313 kcal). Varianta ușoară după Bianca Iordan, nutriționist, și France Today („Île flottante légère").',

      sweetener: { kind: 'miere', gPerServing: 6.3 },
      storage: 'Frigider, 2 zile. Găluștele lasă puțină apă după prima zi.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-crema-caramel',
      name: 'Cremă de zahăr ars cu lapte slab',
      emoji: '🍮',
      family: 'baked',
      craving: 'caramel',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 412 },
        { id: 'd-oua-gaina-l', g: 120 },
        { id: 'd-albus-lichid', g: 66 },
        { p: 'miere', g: 15 },
        { p: 'zahar', g: 30 },
        { p: 'lamaie', g: 3 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 65, active: 20, chill: 240 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['4 ramekine', 'tavă pentru baie de apă', 'cratiță mică'],

      steps: [
        'Topește zahărul cu o lingură de apă până devine caramel chihlimbariu și împarte-l repede în ramekine.',
        'Încălzește laptele cu vanilia și coaja de lămâie.',
        'Bate ouăle, albușurile și mierea fără să faci spumă, toarnă laptele cald și strecoară.',
        'Umple ramekinele, acoperă-le cu folie și coace-le în baie de apă fierbinte, la 150 °C, 35–45 de minute, până se închegă cu o ușoară tremurare la mijloc.',
        'Răcește, apoi frigider cel puțin 4 ore, ideal peste noapte. Răstoarnă.'
      ],

      tips: [
        'Caramelul e din zahăr adevărat, iar crema are doar puțină miere — ~11 g de zahăr adăugat pe porție, toate pe card. Cu un sfert din zahărul clasicului, rămâne desertul care pretinde că e.',
        'Doar din albușuri iese cauciucată. Păstrează cel puțin un ou întreg la 200 ml de lapte.',
        'Peste 160 °C sau fără baie de apă apar bule și crema se brânzește.'
      ],

      swaps: [
        { label: 'Fără caramel', text: 'Cu 50 g de coulis de fructe de pădure deasupra în loc de caramel: ~100 kcal și ~3 g de zahăr adăugat, doar din miere.' }
      ],

      warnings: ['Conține ou și lactate.'],

      taste: { sweetness: 60, richness: 50, texture: 75, authenticity: 82 },

      vs: {
        name: 'Cremă de zahăr ars, porție de cofetărie',
        grams: 130, kcal: 260, protein: 6.5, carbs: 34, sugars: 33, fat: 11
      },
      vsSource: 'După Delicious UK („Low-fat crème caramel", 122 kcal) și eatright.org („Creamy flan"). Comparația: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 11.3 },
      storage: 'Frigider, 3 zile, în ramekin.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-crema-ou-cuptor',
      name: 'Cremă de ou la cuptor, cu nucșoară',
      emoji: '🥚',
      family: 'baked',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 412 },
        { id: 'd-oua-gaina-l', g: 120 },
        { id: 'd-albus-lichid', g: 33 },
        { p: 'miere', g: 15 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 45, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['4 căni sau ramekine', 'tavă pentru baie de apă'],

      steps: [
        'Încălzește cuptorul la 150 °C.',
        'Încălzește laptele și dizolvă mierea în el.',
        'Bate ouăle și albușul, toarnă laptele cald peste ele și strecoară în căni. Rade nucșoară deasupra.',
        'Coace în baie de apă 30–35 de minute, până se închegă.',
        'Servește caldă sau rece, eventual cu 50 g de măr copt sau fructe de pădure deasupra.'
      ],

      tips: [
        'E cea mai ieftină și mai simplă rețetă din secțiune: lapte, ouă, cuptor.',
        'Varianta de cafea: o linguriță de cafea instant și 5 g de cacao dizolvate în lapte.'
      ],

      swaps: [
        { label: 'Cu fructe', text: 'Pune 40 g de fructe de pădure pe fundul cănii înainte de cremă: +15 kcal.' }
      ],

      warnings: ['Conține ou și lactate.'],

      taste: { sweetness: 50, richness: 50, texture: 75, authenticity: 80 },

      vs: {
        name: 'Budincă de vanilie la pahar, comercială',
        grams: 125, kcal: 140, protein: 3.5, carbs: 22, sugars: 18, fat: 4
      },
      vsSource: 'Tehnica după eatright.org (cremă coaptă în baie de apă) și American Egg Board (cremă la 71 °C). Comparația: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3.8 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 4, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-sufle-ciocolata',
      name: 'Suflé de ciocolată din două albușuri',
      emoji: '🍫',
      family: 'baked',
      craving: 'ciocolata',
      servings: 2,

      ing: [
        { p: 'cacao', g: 8 },
        { p: 'faina-alba', g: 8 },
        { id: 'd-lapte-15', g: 30 },
        { p: 'zahar', g: 24 },
        { id: 'd-albus-lichid', g: 66 },
        { p: 'unt', g: 2 },
        { p: 'cremor-tartru', g: 0.5, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 35, active: 15, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['2 ramekine de 150–180 ml', 'cratiță mică', 'mixer'],

      steps: [
        'Încălzește cuptorul la 180 °C. Unge ramekinele cu unt și tapetează-le cu puțin zahăr (2 g).',
        'Bate cacao, făina, laptele și 10 g de zahăr într-o cratiță, la foc mediu, ~2 minute, până se îngroașă. Lasă 4 minute și adaugă vanilia.',
        'Bate albușurile cu cremorul tartru spumă moale, apoi adaugă 12 g de zahăr și bate până fac vârfuri tari.',
        'Încorporează un sfert din albușuri în ciocolată, apoi restul, cu spatula, de jos în sus.',
        'Umple ramekinele și coace 12–15 minute. Servește imediat — se lasă în 2–3 minute.'
      ],

      tips: [
        'Varianta Cooking Light are 152 kcal porția, cu 4,5 linguri de zahăr la două porții. Aici e cam o treime din zahăr: crește la fel, iese doar mai puțin dulce, cu gust de cacao mai apăsat.',
        'Baza de cacao prea groasă nu se mai încorporează. Dacă s-a închegat, adaugă o lingură de lapte.',
        'Pentru suflé, albușurile proaspete se bat mult mai bine decât cele pasteurizate la cutie.'
      ],

      swaps: [
        { label: 'Cu zmeură', text: '30 g de zmeură pe fundul ramekinului: +16 kcal și o surpriză acrișoară.' }
      ],

      warnings: ['Conține ou, lactate și gluten.'],

      taste: { sweetness: 50, richness: 45, texture: 80, authenticity: 70 },

      vs: {
        name: 'Lava cake / suflé de ciocolată de restaurant',
        grams: 110, kcal: 420, protein: 6, carbs: 42, sugars: 32, fat: 26
      },
      vsSource: 'După Cooking Light („Individual chocolate soufflé cakes", 152 kcal) și Oxygen Mag („Mini chocolate soufflés"). Comparația: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 12 },
      storage: 'Nu se păstrează. Se mănâncă în primele 3 minute.',
      mealFit: { desert: 5, gustare: 2, micDejun: 1, postAntrenament: 2, seara: 3 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-sufle-zmeura',
      name: 'Suflé de zmeură fără gălbenușuri',
      emoji: '🍓',
      family: 'baked',
      craving: 'fructat',
      servings: 6,

      ing: [
        { p: 'zmeura', g: 170 },
        { p: 'zahar', g: 42 },
        { p: 'amidon-porumb', g: 3 },
        { id: 'd-albus-lichid', g: 132 },
        { p: 'unt', g: 3 },
        { p: 'cremor-tartru', g: 0.8, free: true }
      ],

      time: { total: 30, active: 20, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['6 ramekine de 120 ml', 'blender', 'mixer'],

      steps: [
        'Încălzește cuptorul la 200 °C, cu grătarul în treimea de jos. Unge ramekinele și tapetează-le cu 6 g de zahăr.',
        'Pasează zmeura cu 6 g de zahăr. Opțional, fierbe piureul un minut cu amidonul, răcește și strecoară semințele.',
        'Bate albușurile cu cremorul tartru, adăugând 30 g de zahăr, până fac vârfuri tari și lucioase.',
        'Încorporează o treime din albușuri în piure, apoi restul.',
        'Umple ramekinele, netezește și trage degetul mare pe margine. Coace 8–10 minute și servește imediat.'
      ],

      tips: [
        '~60 kcal pentru un ramekin plin — printre cele mai ușoare deserturi calde din pagină.',
        'Cu atât de puțin zahăr abia se rumenește, așa că nu aștepta culoarea: e gata când a crescut ~1 cm peste margine.',
        'Zmeura singură poate fi foarte acră. Jumătate zmeură, jumătate căpșuni e mai prietenos.'
      ],

      swaps: [
        { label: 'Cu lămâie', text: '60 ml zeamă de lămâie fiartă cu 50 ml apă, 40 g de zahăr și 10 g de făină, răcită, în loc de piureul de zmeură. 180 °C, 12–15 minute.' }
      ],

      warnings: ['Conține ou.'],

      taste: { sweetness: 50, richness: 20, texture: 80, authenticity: 70 },

      vs: {
        name: 'Prăjitură cu fructe de pădure și cremă, felie',
        grams: 120, kcal: 330, protein: 4.5, carbs: 40, sugars: 26, fat: 17
      },
      vsSource: 'După Kirbie\'s Cravings („Raspberry soufflé") și Burnbrae Farms (suflé fără gălbenuș, 67 kcal). Comparația: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 7 },
      storage: 'Nu se păstrează.',
      mealFit: { desert: 5, gustare: 2, micDejun: 1, postAntrenament: 2, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-bezele-cacao',
      name: 'Bezele cu cacao și zmeură',
      emoji: '🍪',
      family: 'baked',
      craving: 'crocant',
      servings: 4,
      /* 66 g albuș + 66 g zahăr ies ~85 g de bezele uscate; plus 320 g de zmeură. */
      yieldG: 405,

      ing: [
        { id: 'd-albus-lichid', g: 66 },
        { p: 'zahar', g: 66 },
        { p: 'cacao', g: 10 },
        { p: 'zmeura', g: 320 },
        { p: 'cremor-tartru', g: 0.8, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 180, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['mixer', 'sită', 'tavă cu hârtie de copt'],

      steps: [
        'Folosește zahăr tos fin. Dacă e grunjos, dă-l 20 de secunde prin blender — se topește mai repede în albuș.',
        'Încălzește cuptorul la 95 °C. Bate albușurile cu cremorul tartru și sarea până fac spumă, apoi adaugă zahărul câte o lingură, la 20–30 de secunde.',
        'Bate până nu mai simți granule de zahăr între degete și ai vârfuri tari și lucioase.',
        'Cerne cacao deasupra și încorporează cu 8–10 mișcări de spatulă. Dungile sunt în regulă — cacao bătută dezumflă spuma.',
        'Fă 20 de bezele și coace-le 90 de minute, apoi lasă-le încă o oră în cuptorul oprit, cu ușa întredeschisă.',
        'Servește câte 5 bezele cu 80 g de zmeură.'
      ],

      tips: [
        'Zahăr cât albuș, la greutate, e minimul care încă face o bezea crocantă; cea de cofetărie are de două ori mai mult. Cu mai puțin zahăr, cuptorul trebuie mai rece și coacerea mai lungă.',
        'Ies crocante afară și puțin elastice la mijloc, ca cele de cofetărie, doar mai puțin dulci. Cacaoa le face să pară mai bogate decât sunt.',
        'Umezeala le strică. Cutie închisă, niciodată frigider. Dacă s-au înmuiat, 10 minute la 95 °C.'
      ],

      swaps: [
        { label: 'Mai puțin dulci', text: '50 g de zahăr în loc de 66: −16 kcal pe porție, dar bezelele ies mai fragile și se înmoaie mai repede.' },
        { label: 'Cu inulină', text: 'Rețeta Slăbești Mâncând: 15 g de inulină de cicoare la fiecare albuș dă bezele uscate mai repede, cu miezul cremos.' }
      ],

      warnings: ['Conține ou.'],

      taste: { sweetness: 65, richness: 20, texture: 80, authenticity: 80 },

      vs: {
        name: 'Bezele de cofetărie, 30 g',
        grams: 30, kcal: 117, protein: 1.5, carbs: 28, sugars: 27, fat: 0.1
      },
      vsSource: 'Tehnica după Wholesome Yum („Meringue cookies") și CooksInfo (raportul zahăr:albuș), cu jumătate din zahărul clasic. Bezelele: ~390 kcal la 100 g, valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 16.5 },
      storage: 'Bezelele: 2 săptămâni în cutie închisă, la temperatura camerei. Zmeura se pune doar la servire.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 1, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-mini-pavlova',
      name: 'Mini pavlova cu iaurt și fructe de pădure',
      emoji: '🤍',
      family: 'baked',
      craving: 'crocant',
      servings: 6,

      ing: [
        { id: 'd-albus-lichid', g: 132 },
        { p: 'zahar', g: 100 },
        { p: 'miere', g: 10 },
        { p: 'amidon-porumb', g: 8 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 300 },
        { p: 'capsuni', g: 150 },
        { p: 'zmeura', g: 150 },
        { p: 'cremor-tartru', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 160, active: 25, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['mixer', 'tavă cu hârtie de copt'],

      steps: [
        'Încălzește cuptorul la 110 °C. Bate albușurile cu cremorul tartru până fac vârfuri moi.',
        'Adaugă zahărul câte o lingură, până se întăresc și nu mai simți granule.',
        'Încorporează amidonul și o linguriță de oțet de vin alb — ele fac miezul moale de „marshmallow".',
        'Fă 6 cuiburi de ~9 cm, cu o adâncitură în mijloc. Coace 60–80 de minute, apoi lasă-le o oră în cuptorul închis.',
        'Bate iaurtul cu mierea și vanilia. Umple cuiburile și pune fructele chiar înainte de servire.'
      ],

      tips: [
        'Pavlova clasică are de două ori mai mult zahăr decât albuș; aici e mai puțin decât albușul, așa că cuiburile crapă mai ușor. Amidonul și oțetul țin miezul moale.',
        'Se înmoaie în ~30 de minute după ce pui iaurtul. Asamblează-le la masă, nu dinainte.'
      ],

      swaps: [
        { label: 'Eton mess', text: 'Sfărâmă cuiburile într-un pahar cu iaurtul și căpșunile zdrobite. Arată intenționat, nu ca un accident.' }
      ],

      warnings: ['Conține ou și lactate.'],

      taste: { sweetness: 60, richness: 35, texture: 70, authenticity: 65 },

      vs: {
        name: 'Pavlova cu frișcă și fructe, felie',
        grams: 120, kcal: 300, protein: 3.5, carbs: 38, sugars: 35, fat: 15
      },
      vsSource: 'După Heart Foundation Australia („Mini berry and yoghurt pavlova") și Diabetes UK („Summer berry pavlova", 86 kcal). Pavlova: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 18 },
      storage: 'Cuiburile: o săptămână în cutie închisă. Umplute: se mănâncă pe loc.',
      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-angel-food',
      name: 'Chec înger (angel food), cu jumătate din zahăr',
      emoji: '🍰',
      family: 'batch',
      craving: 'patiserie',
      servings: 12,

      ing: [
        { id: 'd-albus-lichid', g: 360 },
        { p: 'faina-alba', g: 70 },
        { p: 'amidon-porumb', g: 15 },
        { p: 'zahar', g: 140 },
        { p: 'lamaie', g: 10 },
        { p: 'cremor-tartru', g: 5, free: true },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 200, active: 30, chill: 0 },
      effort: 4,
      difficulty: 'greu',
      equipment: ['formă cu gaură la mijloc, neunsă (sau 2 forme de chec din aluminiu)', 'mixer', 'sită'],

      steps: [
        'Încălzește cuptorul la 160–165 °C. Cerne de 3 ori făina, amidonul și jumătate din zahăr.',
        'Bate albușurile până fac spumă, adaugă cremorul tartru și un praf de sare, apoi restul de zahăr câte o lingură, până la vârfuri moi-medii, lucioase. Nu tari.',
        'Adaugă vanilia și zeama de lămâie, apoi încorporează amestecul uscat în 4 tranșe, cu spatula.',
        'Toarnă în forma NEUNSĂ. Checul trebuie să se „cațere" pe pereți; pe antiaderent sau uns nu crește.',
        'Coace 40–45 de minute, până e auriu și elastic.',
        'Răcește-l cu forma întoarsă cu gura în jos cel puțin o oră, apoi desprinde-l cu un cuțit subțire.'
      ],

      tips: [
        'Rețeta clasică are 300 g de zahăr; aici sunt 140. Mai jos de atât checul se lasă și iese ca o budincă de pâine — zahărul aici e structură, nu doar gust.',
        'Orice urmă de grăsime sau gălbenuș omoară creșterea. Bolul se șterge cu lămâie.',
        'O felie cu 80 g de căpșuni și 30 g de skyr ajunge pe la 100 kcal și arată ca o prăjitură adevărată.'
      ],

      swaps: [
        { label: 'Albușuri proaspete', text: 'Albușul pasteurizat la cutie poate face spumă de 3 ori mai greu. Pentru checul ăsta, ouă proaspete — și gălbenușurile într-o cremă de ou la cuptor.' }
      ],

      warnings: ['Conține ou și gluten.'],

      taste: { sweetness: 60, richness: 25, texture: 75, authenticity: 72 },

      vs: {
        name: 'Chec de casă cu unt, felie',
        grams: 70, kcal: 280, protein: 4.5, carbs: 34, sugars: 20, fat: 14
      },
      vsSource: 'După Handle the Heat (angel food clasic, ~169 kcal felia) și The Picky Eater (varianta fără zahăr, 61 kcal). Checul: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 11.7 },
      storage: 'Cutie închisă, 3 zile. Se congelează felii, 2 luni.',
      mealFit: { desert: 5, gustare: 5, micDejun: 3, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-clafoutis-pere',
      name: 'Clafoutis cu pere',
      emoji: '🍐',
      family: 'baked',
      craving: 'patiserie',
      servings: 7,
      season: [8, 9, 10, 11, 12],

      ing: [
        { p: 'pere', g: 500 },
        { id: 'd-oua-gaina-l', g: 150 },
        { p: 'faina-alba', g: 60 },
        { id: 'd-lapte-15', g: 258 },
        { p: 'zahar', g: 20 },
        { p: 'miere', g: 15 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 55, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['vas termorezistent de ~22 cm', 'tel'],

      steps: [
        'Încălzește cuptorul la 180 °C. Unge ușor vasul și așază perele curățate, feliate. Ies 7 porții.',
        'Bate ouăle cu zahărul și mierea până fac spumă. Cerne făina și amestecă.',
        'Adaugă laptele, vanilia și un praf de sare, până ai un aluat lichid, neted.',
        'Toarnă peste pere și coace 35–40 de minute, până e auriu și închegat la mijloc. Servește călduț.'
      ],

      tips: [
        'Zahărul și mierea rumenesc împreună. Mierea se colorează repede: dacă marginile se închid la culoare înainte de minutul 30, acoperă vasul cu folie.',
        'Se lasă după ce iese din cuptor. E normal; e între clătită și budincă.',
        'Cu vișine fără sâmburi în loc de pere e varianta clasică. Presară o linguriță de amidon pe vișine, că lasă zeamă.'
      ],

      swaps: [
        { label: 'Cu vișine', text: '500 g de vișine fără sâmburi în loc de pere, aceleași calorii.' }
      ],

      warnings: ['Conține ou, lactate și gluten.'],

      taste: { sweetness: 55, richness: 45, texture: 75, authenticity: 78 },

      vs: {
        name: 'Plăcintă cu fructe, felie de cofetărie',
        grams: 120, kcal: 330, protein: 4.5, carbs: 44, sugars: 22, fat: 15
      },
      vsSource: 'După Croq-Kilos („Clafoutis léger aux poires", ~150 kcal) și Weight Watchers Franța (clafoutis de cireșe). Plăcinta: valori tipice, 2026.',

      sweetener: { kind: 'zahar', gPerServing: 5 },
      storage: 'Frigider, 2 zile. Se încălzește 30 de secunde la microunde.',
      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-mug-cake',
      name: 'Prăjitură de ciocolată la cană, sub 100 kcal',
      emoji: '☕',
      family: 'mug',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 'd-albus-lichid', g: 33 },
        { p: 'faina-ovaz', g: 10 },
        { p: 'cacao', g: 8 },
        { p: 'mere', g: 30 },
        { p: 'praf-copt', g: 2, free: true },
        { p: 'miere', g: 5 },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 3, active: 3, chill: 0 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['cană mare', 'microunde'],

      steps: [
        'Rade mărul fin sau folosește 30 g de piure de mere neîndulcit.',
        'Bate totul cu o furculiță direct în cană.',
        'Microunde la 800 W, 60–75 de secunde. Oprește când vârful abia s-a închegat.'
      ],

      tips: [
        'Zece secunde în plus și iese cauciucată — e plângerea cea mai des întâlnită la prăjiturile la cană din albuș. Mai bine scoți una puțin umedă.',
        'Piureul de mere ține locul uleiului. Fără el iese uscată.',
        'Comparată cu mug cake-ul proteic din pagina cealaltă, are jumătate din calorii și un sfert din proteină. Depinde ce cauți.'
      ],

      swaps: [
        { label: 'Cu piure din borcan', text: 'Piure de mere pentru bebeluși, fără zahăr — aceeași cantitate.' }
      ],

      warnings: ['Conține ou și ovăz (poate conține gluten).'],

      taste: { sweetness: 45, richness: 30, texture: 55, authenticity: 50 },

      vs: {
        name: 'Felie de prăjitură de ciocolată',
        grams: 100, kcal: 350, protein: 5, carbs: 45, sugars: 30, fat: 17
      },
      vsSource: 'După ohclary.com („100 calorie chocolate mug cake", 101 kcal); formularea cu albuș și ovăz e a noastră. Felia: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Nu se păstrează.',
      mealFit: { desert: 4, gustare: 4, micDejun: 2, postAntrenament: 2, seara: 3 },
      dataConfidence: 'low'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  DESSERTS.forEach(d => { d.line = 'light'; });
  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
