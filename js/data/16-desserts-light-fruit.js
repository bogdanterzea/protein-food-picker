/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI UȘOARE (2/2): FRUCTE ȘI ÎNGHEȚATE
 * File: js/data/16-desserts-light-fruit.js
 * ID prefix: ds-l-
 * Ultima documentare: 2026-10
 *
 * Fructul copt, poșat sau congelat e cel mai vechi „desert ușor" și cel mai
 * bine documentat. Trei lucruri pe care le spune cercetarea și pe care
 * rețetele de aici le respectă:
 *
 * 1. FRUCTUL ÎNTREG BATE PIUREUL, iar piureul bate sucul. Flood-Obbagy &
 *    Rolls (Appetite, 2009): un măr întreg mâncat înainte de prânz a scăzut
 *    prânzul cu 187 kcal; piureul cu 96; sucul deloc — nici cu fibre
 *    adăugate. Contează structura și mestecatul, nu doar gramele de fibre.
 *
 * 2. ZAHĂRUL DIN FRUCTUL ÎNTREG NU E „ZAHĂR ADĂUGAT". După OMS (2015),
 *    zahărul liber e cel adăugat plus cel din miere, siropuri și sucuri.
 *    De aceea cardurile arată două cifre: zahărul total, care e real, și
 *    cât din el e adăugat. Un măr copt are 20 g de zahăr și 0 g adăugat.
 *
 * 3. SORBETUL FĂRĂ ZAHĂR SE FACE PIATRĂ. Sorbetul clasic are 20–30% zahăr,
 *    fructul are 5–15%. Soluțiile de aici: granita (unde cristalele mari sunt
 *    scopul), fructe congelate blenduite și mâncate imediat, iaurt sau
 *    banană pentru corp. Fiecare rețetă `frozen` spune pe care o folosește.
 *
 * `season` = lunile în care fructul e ieftin și bun în Sibiu (piață,
 * Kaufland, Lidl). Fructele congelate n-au sezon și nici rețetele cu ele.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    /* =================== FRUCTE COAPTE ȘI POȘATE ======================== */

    {
      id: 'ds-l-mere-coapte',
      name: 'Mere coapte cu scorțișoară și nucă',
      emoji: '🍎',
      family: 'baked',
      craving: 'patiserie',
      servings: 4,
      season: [9, 10, 11, 12, 1, 2, 3],

      ing: [
        { p: 'mere', g: 640 },
        { id: 'v-nuci', g: 20 },
        { p: 'stafide', g: 15 },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'apa', g: 60 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 120 }
      ],

      time: { total: 50, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cuptor', 'vas mic de copt', 'folie de aluminiu'],

      steps: [
        'Încălzește cuptorul la 180 °C. Scoate cotorul merelor de sus, cu o linguriță, lăsând fundul închis.',
        'Crestează coaja de jur împrejur, la mijloc — așa nu plesnesc.',
        'Amestecă nuca tocată, stafidele, scorțișoara și un vârf de nucșoară și umple merele.',
        'Pune merele în vas, toarnă apa în jur, acoperă cu folie și coace 25 de minute. Apoi încă 10–15 minute fără folie, până intră cuțitul ușor.',
        'Servește calde, cu 30 g de iaurt rece și zeama din tavă turnată deasupra.'
      ],

      tips: [
        'Ionatan, Idared, Florina — merele acrișoare își țin forma și au gust de desert. Golden se face terci.',
        'Fără apă pe fundul tăvii, zeama se arde. Cu suc de portocale în loc de apă, +6 kcal pe porție și miros de Crăciun.',
        'E singurul desert din pagină pe care nimeni nu-l consideră „versiunea de dietă" a altceva. Autenticitatea maximă nu e o greșeală.'
      ],

      swaps: [
        { label: 'Fără stafide', text: '~116 kcal pe porție. Nuca rămâne, ea face diferența de textură.' }
      ],

      warnings: ['Conține nuci și lactate (iaurtul se poate omite).'],

      taste: { sweetness: 60, richness: 40, texture: 80, authenticity: 95 },

      vs: {
        name: 'Plăcintă cu mere, felie de cofetărie',
        grams: 130, kcal: 340, protein: 4, carbs: 45, sugars: 22, fat: 16
      },
      vsSource: 'După evz.ro și savoriurbane.com (mere coapte), fără zahărul și untul din original. Plăcinta: valori tipice pentru 130 g, cercetare 2026-10.',

      sweetener: null,
      storage: 'Frigider, 3 zile. Se încălzesc 1 minut la microunde.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-gutui-coapte',
      name: 'Gutui coapte cu lămâie și cuișoare',
      emoji: '🍐',
      family: 'baked',
      craving: 'fructat',
      servings: 4,
      season: [10, 11, 12],

      ing: [
        { p: 'gutui', g: 480 },
        { p: 'lamaie', g: 20 },
        { p: 'apa', g: 250 },
        { p: 'miere', g: 20 },
        { p: 'condimente', g: 3, free: true },
        { id: 'd-iaurt-grecesc-olympus-2', g: 160 }
      ],

      time: { total: 100, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['cuptor', 'vas de copt', 'folie', 'cuțit bun și linguriță pentru miez'],

      steps: [
        'Freacă puful de pe gutui cu un prosop și spală-le. Taie-le în jumătăți pe lungime și scoate tot miezul tare.',
        'Unge fețele tăiate cu lămâie și așază-le cu fața în sus într-un vas.',
        'Adaugă apa, mierea dizolvată în ea, restul de lămâie, un baton de scorțișoară și două cuișoare.',
        'Acoperă strâns cu folie și coace o oră la 170 °C. Descoperă, stropește-le cu zeamă și mai lasă-le 20–30 de minute, până devin fragede și rozalii.',
        'Lasă-le 10 minute: zeama se îngroașă singură într-un sirop ușor, din pectina gutuii. Servește cu iaurt.'
      ],

      tips: [
        'Gutuia necoaptă destul e astringentă și granuloasă. Ora întreagă nu e opțională.',
        'Culoarea trece de la crem la roz cu cât stă mai mult — un semn bun că e gata.',
        'Mierea e singurul zahăr adăugat: 5 g pe porție. Fără ea, pectina gutuii tot face un sirop, doar mai acrișor.'
      ],

      swaps: [
        { label: 'Fără miere', text: 'Coace-le doar cu apă și condimente: ~68 kcal fără iaurt, 0 g de zahăr adăugat. Mai acre, dar gustul de gutuie iese mai tare.' }
      ],

      warnings: ['Conține lactate (iaurtul).'],

      taste: { sweetness: 55, richness: 35, texture: 80, authenticity: 90 },

      vs: {
        name: 'Dulceață de gutui, 3 linguri (60 g)',
        grams: 60, kcal: 160, protein: 0.2, carbs: 40, sugars: 38, fat: 0
      },
      vsSource: 'Tehnica după alba24.ro („Gutuile — cum le gătești") și lauralaurentiu.ro (compot de gutui). Dulceața: ~270 kcal la 100 g, valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Frigider, 4 zile, în sirop.',
      mealFit: { desert: 5, gustare: 5, micDejun: 3, postAntrenament: 2, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-pere-vin',
      name: 'Pere poșate în vin roșu cu condimente',
      emoji: '🍷',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,
      season: [9, 10, 11, 12, 1, 2],

      ing: [
        { p: 'pere', g: 560 },
        { p: 'vin-rosu', g: 150 },
        { p: 'apa', g: 200 },
        { p: 'miere', g: 15 },
        { p: 'suc-portocale', g: 50 },
        { p: 'condimente', g: 5, free: true }
      ],

      time: { total: 60, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['cratiță îngustă și înaltă, cu capac', 'curățător de legume'],

      steps: [
        'Adu la fiert vinul, apa, mierea, sucul și coaja de portocală, un baton de scorțișoară, două steluțe de anason și două cuișoare. Lasă 5 minute.',
        'Curăță perele păstrând codița și taie o felie subțire de jos, ca să stea în picioare.',
        'Pune-le în lichid, acoperă și fierbe încet 20–35 de minute, întorcându-le la 5 minute, până intră o scobitoare ușor.',
        'Scoate perele. Fierbe lichidul tare până scade la jumătate și devine siropos.',
        'Lasă perele să se răcească în sirop — peste noapte iau culoarea vinului până la miez.'
      ],

      tips: [
        'Perele coapte se fac terci. Tari, ca Williams sau Conference.',
        'Alcoolul nu se evaporă complet la poșat; o parte rămâne. Pentru copii, varianta cu ceai.',
        'Arată ca un desert de restaurant și costă mai puțin decât o prăjitură.'
      ],

      swaps: [
        { label: 'Cu ceai, fără alcool', text: '350 ml de ceai negru tare sau de măceșe în loc de vin și apă, aceleași condimente: ~95 kcal pe porție.' }
      ],

      warnings: ['Conține alcool — nu pentru copii, gravide sau șoferi; folosește varianta cu ceai.'],

      taste: { sweetness: 55, richness: 35, texture: 85, authenticity: 90 },

      vs: {
        name: 'Tartă cu pere, felie de cofetărie',
        grams: 120, kcal: 330, protein: 4, carbs: 42, sugars: 24, fat: 16
      },
      vsSource: 'După Irish Heart Foundation („Spiced poached pears with red wine and yoghurt", 109 kcal). Tarta: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3.8 },
      storage: 'Frigider, 4 zile, în sirop. Sunt mai bune a doua zi.',
      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 1, seara: 3 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-prune-coapte',
      name: 'Prune coapte cu portocală, peste iaurt rece',
      emoji: '🫐',
      family: 'baked',
      craving: 'fructat',
      servings: 4,
      season: [8, 9, 10],

      ing: [
        { p: 'prune', g: 600 },
        { p: 'suc-portocale', g: 50 },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'vanilie', g: 5, free: true },
        { id: 'd-iaurt-grecesc-olympus-2', g: 200 }
      ],

      time: { total: 30, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cuptor', 'vas de copt'],

      steps: [
        'Încălzește cuptorul la 200 °C. Pune prunele înjumătățite, cu fața tăiată în sus, într-un singur strat.',
        'Presară scorțișoară și coajă de portocală, toarnă sucul și vanilia, pune o steluță de anason printre ele.',
        'Coace 15–20 de minute, până sunt moi și încep să facă bășici.',
        'Lasă 5 minute și pune-le peste câte 50 g de iaurt rece, cu zeama din tavă.'
      ],

      tips: [
        'Gust de magiun, fără cele 5–6 ore de mestecat la ceaun. Contrastul cald-rece face jumătate din desert.',
        'Brumăriile sau Stanley se desprind de sâmbure. Prunele necoapte rămân foarte acre — gustă și pune o linguriță de miere dacă e nevoie (+8 kcal pe porție).'
      ],

      swaps: [
        { label: 'Cu gălușca în minte', text: 'Pune deasupra o lingură de pesmet prăjit uscat cu scorțișoară (5 g): +18 kcal și gust de găluște cu prune.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 55, richness: 40, texture: 75, authenticity: 80 },

      vs: {
        name: 'Prăjitură cu prune, felie',
        grams: 120, kcal: 320, protein: 4.5, carbs: 44, sugars: 25, fat: 14
      },
      vsSource: 'Concept după NHS Healthier Families („Plum and peach grills"); înlocuiește jamilacuisine.ro „Prăjitură germană cu prune". Felia: valori tipice, 2026.',

      sweetener: null,
      storage: 'Prunele: frigider, 4 zile. Iaurtul se pune la servire.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-piersici-gratar',
      name: 'Piersici la grătar cu iaurt, lime și mentă',
      emoji: '🍑',
      family: 'baked',
      craving: 'fructat',
      servings: 4,
      season: [7, 8, 9],

      ing: [
        { p: 'piersici', g: 600 },
        { p: 'ulei-cocos', g: 4 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 200 },
        { p: 'lamaie', g: 15 },
        { p: 'miere', g: 8 },
        { p: 'menta', g: 4, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 15, active: 15, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['tigaie-grătar, grătar sau grill de cuptor'],

      steps: [
        'Încinge tigaia-grătar tare.',
        'Taie piersicile în jumătăți, scoate sâmburii și unge foarte ușor fețele tăiate cu ulei.',
        'Pune-le cu fața tăiată în jos, 3–4 minute fără să le miști, până se marchează. Întoarce-le pentru încă un minut.',
        'Amestecă iaurtul cu vanilia și coaja de lime sau lămâie.',
        'Două jumătăți și 50 g de iaurt pe farfurie, un fir subțire de miere, mentă.'
      ],

      tips: [
        'Piersicile foarte coapte se desfac. Nectarinele sau piersicile „cu sâmbure liber" se taie ușor.',
        'Marginile caramelizate vin din zahărul fructului, nu din cel adăugat.'
      ],

      swaps: [
        { label: 'Cu caise', text: '8 caise în loc de 4 piersici: ~10 kcal în plus pe porție.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 60, richness: 40, texture: 80, authenticity: 85 },

      vs: {
        name: 'Cupă de înghețată cu piersici și frișcă',
        grams: 180, kcal: 340, protein: 5, carbs: 42, sugars: 36, fat: 16
      },
      vsSource: 'După NHS Healthier Families („Plum and peach grills", „Chargrilled pineapple"). Cupa: estimare din ingrediente, 2026.',

      sweetener: { kind: 'miere', gPerServing: 2 },
      storage: 'Se mănâncă pe loc.',
      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-dovleac-copt',
      name: 'Dovleac copt cu scorțișoară și iaurt cu vanilie',
      emoji: '🎃',
      family: 'baked',
      craving: 'patiserie',
      servings: 4,
      season: [9, 10, 11, 12, 1],

      ing: [
        { p: 'piure-dovleac', g: 800 },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'miere', g: 12 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 160 },
        { p: 'seminte-dovleac', g: 8 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 60, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cuptor', 'tavă', 'cuțit greu'],

      steps: [
        'Încălzește cuptorul la 190 °C. Taie dovleacul plăcintar felii groase de 3 cm, cu coajă, și așază-le pe hârtie de copt.',
        'Presară scorțișoară, ghimbir și un vârf de nucșoară.',
        'Coace 40–50 de minute, până e moale și caramelizat pe margini.',
        'Scoate miezul de pe coajă (~200 g de porție), stropește cu puțină miere și servește cu iaurt rece cu vanilie și semințe de dovleac prăjite.'
      ],

      tips: [
        'Gustul e de umplutură de plăcintă cu dovleac — fără plăcintă.',
        'Dovleacul de Halloween e apos și fad. Plăcintar sau butternut.',
        'Coaja e greu de tăiat crudă. Trei minute la microunde o înmoaie.'
      ],

      swaps: [
        { label: 'Fără miere', text: 'Dovleacul copt e dulce singur. Fără miere: −9 kcal și 0 g de zahăr adăugat.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 55, richness: 45, texture: 75, authenticity: 85 },

      vs: {
        name: 'Plăcintă cu dovleac, felie de cofetărie',
        grams: 130, kcal: 320, protein: 5, carbs: 40, sugars: 20, fat: 15
      },
      vsSource: 'Dovleacul copt, desert românesc de toamnă, fără zahărul presărat de obicei. Plăcinta: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 4 zile, fără iaurt.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-compot',
      name: 'Compot de mere și pere fără zahăr',
      emoji: '🫙',
      family: 'drink',
      craving: 'fructat',
      servings: 4,

      ing: [
        { p: 'mere', g: 300 },
        { p: 'pere', g: 300 },
        { p: 'apa', g: 1000 },
        { p: 'lamaie', g: 5 },
        { p: 'condimente', g: 4, free: true },
        { p: 'menta', g: 2, free: true }
      ],

      time: { total: 25, active: 10, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['oală'],

      steps: [
        'Adu la fiert apa cu un baton de scorțișoară, trei cuișoare și coaja de lămâie.',
        'Adaugă fructele tăiate în opt, cu coajă, și fierbe 8–12 minute, până se înmoaie dar nu se desfac.',
        'Ia de pe foc și pune menta. Merele și perele coapte îl îndulcesc singure; gustă înainte să adaugi ceva.',
        'Răcește și ține la frigider. Se servește rece, cu fructe și zeamă, în bol.'
      ],

      tips: [
        'Compotul din cămară are ~1 kg de zahăr la 5 kg de fructe: 30–40 g de zahăr în plus în fiecare bol.',
        'Compotul fără zahăr NU se ține în cămară ca cel cu sirop. Frigider, sau sterilizare serioasă.',
        'Un vârf de sare și coaja de lămâie îl fac să nu pară „apă cu fructe".'
      ],

      swaps: [
        { label: 'Vara', text: '450 g de vișine sau caise, 8 minute: ~60 kcal pe bol.' }
      ],

      warnings: [],

      taste: { sweetness: 40, richness: 15, texture: 75, authenticity: 80 },

      vs: {
        name: 'Compot de casă cu zahăr, bol de 300 ml',
        grams: 300, kcal: 190, protein: 0.6, carbs: 47, sugars: 44, fat: 0.2
      },
      vsSource: 'După bzi.ro („Compot de pere fără zahăr"); compotul clasic după evz.ro și fanatik.ro (raport 1:5 zahăr la fructe). Cercetare 2026-10.',

      sweetener: null,
      storage: 'Frigider, 4–5 zile.',
      mealFit: { desert: 4, gustare: 5, micDejun: 3, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-supa-visine',
      name: 'Supă rece de vișine, ca în Ardeal',
      emoji: '🍒',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,
      season: [6, 7],

      ing: [
        { p: 'visine-congelate', g: 400 },
        { p: 'apa', g: 600 },
        { p: 'amidon-porumb', g: 10 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 150 },
        { p: 'miere', g: 15 },
        { p: 'condimente', g: 3, free: true },
        { p: 'lamaie', g: 3 }
      ],

      time: { total: 20, active: 15, chill: 180 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['oală', 'tel'],

      steps: [
        'Fierbe vișinele cu apa, scorțișoara, cuișoarele și coaja de lămâie, 8 minute.',
        'Bate amidonul cu iaurtul și cu 100 ml din lichidul fierbinte, ca să-l temperezi.',
        'Toarnă amestecul înapoi în oală și ține un minut, până abia dă în clocot și se îngroașă. Nu-l lăsa să fiarbă tare — iaurtul se taie.',
        'Îndulcește, scoate condimentele și răcește cel puțin 3 ore. Se servește rece.'
      ],

      tips: [
        'Supa de vișine maghiară-ardelenească se face cu zahăr și smântână 20%: ~200 kcal pe bol. Iaurtul păstrează acreala și catifeaua.',
        'Vișinele congelate merg tot anul; în iulie, de la piață, sunt cele mai bune.',
        'Rețetă reconstruită de noi din varianta clasică — n-am găsit o sursă testată pentru versiunea ușoară.'
      ],

      swaps: [
        { label: 'Cu cireșe', text: 'Cireșe fără sâmburi și fără miere — sunt destul de dulci singure.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 45, richness: 40, texture: 75, authenticity: 75 },

      vs: {
        name: 'Supă de vișine clasică, cu zahăr și smântână',
        grams: 250, kcal: 210, protein: 2.5, carbs: 32, sugars: 28, fat: 8
      },
      vsSource: 'Supa clasică (hideg meggyleves): estimare din ingrediente, 2026-10. Varianta ușoară e adaptarea noastră.',

      sweetener: { kind: 'miere', gPerServing: 3.8 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 2, seara: 5 },
      dataConfidence: 'low'
    },

    {
      id: 'ds-l-iaurt-gem-chia',
      name: 'Iaurt cu gem de prune din chia, gata în 20 de minute',
      emoji: '🫙',
      family: 'batch',
      craving: 'fructat',
      servings: 8,
      season: [8, 9, 10],

      ing: [
        { p: 'prune', g: 300 },
        { p: 'chia', g: 20 },
        { p: 'lamaie', g: 15 },
        { p: 'scortisoara', g: 2, free: true },
        { id: 'd-iaurt-grecesc-olympus-0', g: 1200 },
        { id: 'v-migdale', g: 24 }
      ],

      time: { total: 20, active: 10, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță mică', 'zdrobitor', 'borcane'],

      steps: [
        'Fierbe prunele tocate cu lămâia și scorțișoara 8–10 minute, apoi zdrobește-le.',
        'Ia de pe foc și amestecă semințele de chia. Lasă 15 minute, apoi o oră la frigider — se îngroașă ca un gem.',
        'Pune în pahar 150 g de iaurt, 40 g de gem și câteva migdale tocate.'
      ],

      tips: [
        '40 g de gem de chia au ~30 kcal. Aceeași lingură de gem din comerț are ~110.',
        'Magiunul de Topoloveni e tot fără zahăr adăugat, dar fierbe 6 ore. Chia face aceeași treabă în 15 minute.',
        'Gemul ține o săptămână la frigider — nu în cămară.'
      ],

      swaps: [
        { label: 'Iarna', text: 'Fructe de pădure congelate în loc de prune.' }
      ],

      warnings: ['Conține lactate și migdale.'],

      taste: { sweetness: 45, richness: 40, texture: 70, authenticity: 70 },

      vs: {
        name: 'Iaurt cu dulceață și granola, la pahar',
        grams: 200, kcal: 280, protein: 7, carbs: 40, sugars: 30, fat: 9
      },
      vsSource: 'Magiun fără zahăr: observatornews.ro, bzi.ro; magiunul de Topoloveni (IGP 2011). Paharul de comparație: estimare din ingrediente, 2026.',

      sweetener: null,
      storage: 'Gemul: frigider, 7 zile. Paharul se asamblează pe loc.',
      mealFit: { desert: 4, gustare: 5, micDejun: 5, postAntrenament: 4, seara: 4 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-rubarba-capsuni',
      name: 'Compot gros de rubarbă și căpșuni, cu iaurt',
      emoji: '🌱',
      family: 'no-bake',
      craving: 'fructat',
      servings: 4,
      season: [4, 5, 6],

      ing: [
        { p: 'rubarba', g: 400 },
        { p: 'capsuni', g: 200 },
        { p: 'apa', g: 40 },
        { p: 'miere', g: 25 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 200 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 15, active: 10, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță (nu de aluminiu)'],

      steps: [
        'Taie tulpinile de rubarbă în bucăți de 2 cm. Frunzele se aruncă.',
        'Fierbe rubarba cu apa, coaja de portocală și mierea, acoperit, 6–8 minute, până abia începe să se desfacă.',
        'Adaugă căpșunile înjumătățite și mai fierbe 2 minute.',
        'Răcește și servește peste câte 50 g de iaurt.'
      ],

      tips: [
        'Rubarba e foarte acră. E singurul fruct de aici care chiar are nevoie de miere — 6 g pe porție, iar căpșunile fac restul.',
        'O găsești primăvara la piața din Sibiu sau în grădinile săsești; în supermarket, rar.',
        'Oala de aluminiu se înnegrește de la acid.'
      ],

      swaps: [
        { label: 'Crumble', text: '10 g de fulgi de ovăz prăjiți uscat deasupra: +37 kcal și ai un crumble fără unt.' }
      ],

      warnings: ['Frunzele de rubarbă sunt toxice (acid oxalic). Doar tulpinile.', 'Conține lactate.'],

      taste: { sweetness: 50, richness: 30, texture: 70, authenticity: 75 },

      vs: {
        name: 'Plăcintă cu fructe, felie de cofetărie',
        grams: 120, kcal: 330, protein: 4.5, carbs: 44, sugars: 22, fat: 15
      },
      vsSource: 'Asocierea rubarbă-căpșuni, tradițională în grădinile săsești din Transilvania; sezonul după datele Freshful. Plăcinta: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 6.3 },
      storage: 'Frigider, 4 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-l-carpaccio-portocale',
      name: 'Carpaccio de portocale cu scorțișoară și fistic',
      emoji: '🍊',
      family: 'no-bake',
      craving: 'fructat',
      servings: 2,
      season: [11, 12, 1, 2, 3],

      ing: [
        { p: 'portocale', g: 300 },
        { id: 'v-fistic', g: 6 },
        { p: 'scortisoara', g: 1, free: true },
        { p: 'menta', g: 2, free: true }
      ],

      time: { total: 20, active: 10, chill: 10 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cuțit foarte ascuțit'],

      steps: [
        'Curăță portocalele de coajă și de pielița albă, cu cuțitul.',
        'Taie-le felii cât mai subțiri, de 2–3 mm.',
        'Așază-le în evantai pe farfurii reci, presară scorțișoară, mentă tăiată fâșii și fistic pisat.',
        '10 minute la frigider înainte de servire.'
      ],

      tips: [
        'Varianta marocană pune câteva picături de apă de flori de portocal. O găsești la magazinele turcești sau la raionul internațional.',
        'Vara: pepene galben tăiat la fel, cu lime și ghimbir.',
        'Se mănâncă încet, cu furculița. Pare mult mai mult decât e.'
      ],

      swaps: [
        { label: 'Cu rodie', text: '40 g de boabe de rodie printre felii: +17 kcal, arată de sărbătoare.' }
      ],

      warnings: ['Conține fistic.'],

      taste: { sweetness: 55, richness: 20, texture: 80, authenticity: 85 },

      vs: {
        name: 'Salată de fructe cu frișcă și zahăr, cupă',
        grams: 220, kcal: 290, protein: 3, carbs: 40, sugars: 36, fat: 14
      },
      vsSource: 'După NHS Healthier Families (salate de fructe) și varianta marocană a salatei de portocale cu scorțișoară. Cupa: estimare din ingrediente, 2026.',

      sweetener: null,
      storage: 'Se mănâncă în aceeași zi.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    /* =================== ÎNGHEȚATE, GRANITE, BATOANE ==================== */

    {
      id: 'ds-l-granita-pepene',
      name: 'Granita de pepene roșu cu lime și mentă',
      emoji: '🍉',
      family: 'frozen',
      craving: 'inghetata',
      servings: 4,
      season: [7, 8],

      ing: [
        { p: 'pepene-rosu', g: 800 },
        { p: 'lamaie', g: 30 },
        { p: 'menta', g: 3, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 200, active: 15, chill: 180 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['blender', 'tavă de metal sau sticlă, puțin adâncă', 'furculiță'],

      steps: [
        'Blenduiește pepenele cu zeama de lime, menta și sarea. Fără apă — pepenele are 92%.',
        'Toarnă într-o tavă, un strat de 2–3 cm, și congelează o oră.',
        'Răzuiește marginile spre mijloc cu furculița. Repetă la fiecare 30 de minute, 2–3 ore, până e numai fulgi.',
        'Mai răzuiește o dată înainte de servire, în pahare reci.'
      ],

      tips: [
        'Granita e formatul în care lipsa zahărului e un avantaj: cristalele mari sunt chiar ce vrei. De aceea pepenele copt n-are nevoie de nimic adăugat.',
        'Înghețul tocește gustul. Baza trebuie să pară puțin prea acră și prea aromată înainte de congelator.',
        '~0,3 kcal pe gram: 200 g de granita au caloriile a 25 g de plăcintă.'
      ],

      swaps: [
        { label: 'De cafea', text: '500 ml de cafea tare cu 20 g de miere, același procedeu: ~20 kcal pe porție. Cu o lingură de iaurt deasupra.' }
      ],

      warnings: [],

      taste: { sweetness: 50, richness: 10, texture: 70, authenticity: 85 },

      vs: {
        name: 'Înghețată de fructe, 2 cupe',
        grams: 100, kcal: 210, protein: 3, carbs: 28, sugars: 24, fat: 9
      },
      vsSource: 'Tehnica după America\'s Test Kitchen („Granita is the easiest frozen dessert"). Înghețata: valori de etichetă tipice, 2026.',

      sweetener: null,
      storage: 'Congelator, o săptămână. Dacă s-a făcut bloc, lasă-o 10 minute și răzuiește din nou.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-sorbet-fructe-padure',
      name: 'Sorbet instant de fructe de pădure, fără banană',
      emoji: '🍧',
      family: 'frozen',
      craving: 'inghetata',
      servings: 4,

      ing: [
        { p: 'fructe-padure', g: 400 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 100 },
        { p: 'lamaie', g: 15 },
        { p: 'miere', g: 12 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 10, active: 5, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['robot de bucătărie sau blender puternic'],

      steps: [
        'Lasă fructele congelate 5 minute pe masă — ca să nu strici blenderul.',
        'Pune iaurtul, lămâia, vanilia și mierea la fund, fructele deasupra.',
        'Pulsează, dă jos de pe pereți, pulsează iar — 1–2 minute, până e neted și gros. Doar o lingură de apă dacă se blochează.',
        'Mănâncă-l imediat, ca soft-serve, sau după 20 de minute la congelator, ca înghețată.'
      ],

      tips: [
        'Merge pentru că fructele sunt deja congelate: blenderul face cristalele mici mecanic. Pus înapoi la congelator, peste o oră se face piatră.',
        'Iaurtul dă corp. Fără el iese mai „de gheață", ca un granita fin.'
      ],

      swaps: [
        { label: 'Vegan', text: '60 ml apă rece în loc de iaurt: ~50 kcal, mai acrișor.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 50, richness: 30, texture: 75, authenticity: 70 },

      vs: {
        name: 'Înghețată de fructe, 2 cupe',
        grams: 100, kcal: 210, protein: 3, carbs: 28, sugars: 24, fat: 9
      },
      vsSource: 'După newsweek.ro (sorbet instant cu trei ingrediente) și hotnews.ro (sorbet Lidl), fără zahărul din original. Înghețata: valori tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Nu se păstrează bine. Resturile se re-blenduiesc după 15 minute pe masă.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-inghetata-banana-cacao',
      name: 'Înghețată de banană cu cacao',
      emoji: '🍌',
      family: 'frozen',
      craving: 'ciocolata',
      servings: 4,

      ing: [
        { p: 'banane', g: 400 },
        { p: 'cacao', g: 10 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 60 },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 10, active: 5, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['robot de bucătărie'],

      steps: [
        'Curăță bananele foarte coapte, taie-le rondele de 1 cm și congelează-le pe o tavă cel puțin 2 ore.',
        'Blenduiește-le cu cacao, iaurtul și sarea, dând des jos de pe pereți.',
        'Servește ca soft-serve sau după 30 de minute la congelator.'
      ],

      tips: [
        'De toate bazele de fructe, banana se apropie cel mai mult de înghețata adevărată: pectina și puțina apă o fac cremoasă.',
        'Bananele cu vârf verde au gust de amidon. Cu pete maro, nu galbene.',
        'Pe linia proteică e „nice cream" cu arahide, la 2x calorii și 3x proteină. Asta e varianta simplă.'
      ],

      swaps: [
        { label: 'Fără cacao', text: 'Cu scorțișoară și vanilie: ~95 kcal.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 65, richness: 45, texture: 80, authenticity: 70 },

      vs: {
        name: 'Înghețată de ciocolată, 2 cupe',
        grams: 100, kcal: 230, protein: 3.8, carbs: 28, sugars: 25, fat: 12
      },
      vsSource: 'După NHS Healthier Families („Easy banana ice cream", 65 kcal cu banane mici). Înghețata: valori de etichetă tipice, 2026.',

      sweetener: null,
      storage: 'Bananele congelate țin 2 luni. Înghețata gata se mănâncă pe loc.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 4 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-inghetata-bat-capsuni',
      name: 'Înghețată pe băț cu căpșuni și iaurt',
      emoji: '🍡',
      family: 'frozen',
      craving: 'inghetata',
      servings: 6,
      season: [5, 6],

      ing: [
        { p: 'capsuni', g: 300 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 250 },
        { p: 'miere', g: 10 },
        { p: 'lamaie', g: 10 },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 15, chill: 360 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender', '6 forme de înghețată pe băț (sau pahare de hârtie și bețe)'],

      steps: [
        'Blenduiește 200 g de căpșuni cu mierea și lămâia. Taie restul cubulețe.',
        'Bate iaurtul cu vanilia.',
        'Pune în forme straturi de iaurt, piure și cubulețe, amestecând ușor cu un băț ca să iasă marmorate.',
        'Bețele, apoi congelator cel puțin 6 ore. Ca să le scoți, ține forma 10 secunde sub apă caldă.'
      ],

      tips: [
        'Ies mai „de gheață" decât cele din comerț — fără zahăr mult și fără stabilizatori. Lasă-le 3–5 minute pe masă.',
        'Cu iaurt 0% ies și mai tari. 2% e compromisul; 10% e cremos, dar +30 kcal.',
        'Formele: Pepco, Kaufland, eMAG, 20–40 lei.'
      ],

      swaps: [
        { label: 'Iarna', text: 'Căpșuni congelate, decongelate și scurse.' }
      ],

      warnings: ['Conține lactate.'],

      taste: { sweetness: 50, richness: 35, texture: 65, authenticity: 70 },

      vs: {
        name: 'Înghețată pe băț cu înveliș de ciocolată',
        grams: 75, kcal: 240, protein: 3, carbs: 22, sugars: 21, fat: 15
      },
      vsSource: 'Concept după NHS Healthier Families („Greek yoghurt and raspberry chill") și PeaceHealth. Comparația: valori de etichetă tipice (Magnum clasic ~240 kcal), 2026.',

      sweetener: { kind: 'miere', gPerServing: 1.7 },
      storage: 'Congelator, o lună, în pungă închisă.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-bark-iaurt',
      name: 'Scoarță de iaurt înghețat cu fructe de pădure',
      emoji: '🧊',
      family: 'frozen',
      craving: 'inghetata',
      servings: 8,

      ing: [
        { id: 'd-iaurt-grecesc-olympus-2', g: 500 },
        { p: 'miere', g: 15 },
        { p: 'fructe-padure', g: 200 },
        { id: 'v-nuci', g: 10 },
        { p: 'vanilie', g: 3, free: true },
        { p: 'lamaie', g: 3 }
      ],

      time: { total: 10, active: 10, chill: 180 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['tavă de 25×30 cm', 'hârtie de copt'],

      steps: [
        'Amestecă iaurtul cu mierea, vanilia și coaja de lămâie.',
        'Întinde-l pe hârtie de copt într-un strat de 1 cm.',
        'Presară fructele bine scurse, apasă-le ușor, apoi nucile tocate.',
        'Congelează 2–3 ore și rupe în 8 bucăți. Lasă-le 5 minute pe masă înainte.'
      ],

      tips: [
        'Criticii au dreptate pe un punct: se topește în mână în câteva minute. Se mănâncă direct din congelator, nu se pune pe platou.',
        'Fructele mari și ude fac cristale de gheață. Afinele și zmeura merg cel mai bine.',
        'Iaurtul 0% iese mai „de gheață" decât cel de 2%.'
      ],

      swaps: [
        { label: 'Cu ciocolată', text: '10 g de ciocolată 85% rasă deasupra: +7 kcal pe bucată.' }
      ],

      warnings: ['Conține lactate și nuci.'],

      taste: { sweetness: 45, richness: 40, texture: 60, authenticity: 55 },

      vs: {
        name: 'Ciocolată cu lapte și fructe, 2 rânduri (35 g)',
        grams: 35, kcal: 185, protein: 2.5, carbs: 20, sugars: 19, fat: 10.5
      },
      vsSource: 'După PeaceHealth („Mixed berry frozen yogurt bark", 50 kcal) și Foodess; critica după Dissapore. Comparația: valori de etichetă tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 1.9 },
      storage: 'Congelator, 2 săptămâni, în cutie închisă.',
      mealFit: { desert: 4, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-struguri-congelati',
      name: 'Struguri congelați',
      emoji: '🍇',
      family: 'frozen',
      craving: 'fructat',
      servings: 1,
      season: [8, 9, 10],

      ing: [
        { p: 'struguri', g: 130 },
        { p: 'lamaie', g: 3 }
      ],

      time: { total: 180, active: 5, chill: 180 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['tavă'],

      steps: [
        'Spală strugurii și usucă-i foarte bine. Apa de pe ei face gheață.',
        'Opțional, stropește-i cu zeamă de lime și un vârf de sare.',
        'Pune-i într-un singur strat pe tavă și congelează cel puțin 3 ore. Lasă-i 2 minute pe masă înainte.'
      ],

      tips: [
        'Au gust de bomboane de sorbet și se mănâncă încet, câte unul — exact ce vrei la film.',
        'Sunt cel mai dulce fruct de pe pagina asta: 20 g de zahăr în porție. Din struguri, nu adăugat — dar tot zahăr. Porția se cântărește.',
        'Pe TikTok îi îmbracă în bomboane topite. Asta anulează tot.'
      ],

      swaps: [],

      warnings: ['Pentru copii sub 4 ani, strugurii se taie în sferturi — risc de înecare.'],

      taste: { sweetness: 75, richness: 10, texture: 80, authenticity: 90 },

      vs: {
        name: 'Jeleuri gumate, 50 g',
        grams: 50, kcal: 172, protein: 3.4, carbs: 39, sugars: 23, fat: 0.3
      },
      vsSource: 'Trendul documentat de Food Institute (2024) și Know Your Produce. Jeleurile: Haribo Goldbären, tabel nutrițional producător, 2026.',

      sweetener: null,
      storage: 'Congelator, o lună, în pungă.',
      mealFit: { desert: 4, gustare: 5, micDejun: 1, postAntrenament: 3, seara: 5 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-l-chipsuri-mere',
      name: 'Chipsuri de mere la cuptor',
      emoji: '🍏',
      family: 'batch',
      craving: 'crocant',
      servings: 2,
      season: [9, 10, 11, 12, 1, 2, 3],
      /* 360 g de măr crud ies ~50 g de chipsuri: ~85% din greutate e apă care pleacă. */
      yieldG: 50,

      ing: [
        { p: 'mere', g: 360 },
        { p: 'scortisoara', g: 2, free: true },
        { p: 'lamaie', g: 5 }
      ],

      time: { total: 170, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['cuptor', 'mandolină sau cuțit foarte ascuțit', '2 tăvi'],

      steps: [
        'Încălzește cuptorul la 100 °C (90 °C cu ventilator).',
        'Taie merele în felii de 1,5–2 mm, pe lat. Cotorul poate rămâne — face o steluță — dar scoate semințele.',
        'Așază-le într-un singur strat, presară scorțișoară.',
        'Coace o oră, întoarce-le, apoi încă 45–75 de minute, până se încovoaie marginile.',
        'Oprește cuptorul și lasă-le 30 de minute cu ușa întredeschisă. Se fac crocante abia când se răcesc.'
      ],

      tips: [
        'Cinstit: e desertul cu cea mai mare densitate energetică de pe linia ușoară. Uscat, mărul are ~3 kcal pe gram, iar un măr întreg dispare în câteva înghițituri.',
        'E aici pentru pofta de crocant, nu pentru sațietate. Pentru sațietate, mărul copt.',
        'Feliile inegale se ard. Mandolina face diferența.'
      ],

      swaps: [],

      warnings: [],

      taste: { sweetness: 60, richness: 10, texture: 80, authenticity: 70 },

      vs: {
        name: 'Chipsuri de cartofi, punguță de 40 g',
        grams: 40, kcal: 215, protein: 2.6, carbs: 21, sugars: 0.3, fat: 13.5
      },
      vsSource: 'Metodă generală de deshidratare la temperatură joasă. Chipsurile: valori de etichetă tipice, 2026.',

      sweetener: null,
      storage: 'Borcan închis, o săptămână. Pe vreme umedă se înmoaie — 10 minute la 100 °C.',
      mealFit: { desert: 3, gustare: 5, micDejun: 1, postAntrenament: 2, seara: 4 },
      dataConfidence: 'medium'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  DESSERTS.forEach(d => { d.line = 'light'; });
  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
