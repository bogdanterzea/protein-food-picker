/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI RAPIDE
 * File: js/data/13-desserts-fast.js
 *
 * Cele trei familii care se fac fără să planifici nimic:
 *   `mug`   — o cană, microunde, o porție, sub 5 minute.
 *   `drink` — se bea. Shaker sau blender, atât.
 *   `batch` — se face o dată duminica și ține toată săptămâna.
 *
 * Criteriul după care a fost construit fiecare rețetă din fișierul ăsta nu e
 * „cât de bună iese", ci „se face la 22:00, obosit, fără chef de spălat".
 * De asta: puține ingrediente, un singur vas, fără cântărire la gram.
 *
 * MACRO-URILE NU SUNT SCRISE DE MÂNĂ. Fiecare linie din `ing` trimite fie la
 * un `id` din atlas, fie la o cheie din `js/data/10-dessert-pantry.js`.
 * Totalurile se calculează la încărcare. Vezi `docs/DESSERT-SCHEMA.md`.
 *
 * `free: true` scoate ingredientul din calculul de macro-uri. Se pune DOAR
 * pe lucruri pe care nimeni nu le cântărește: vanilie, sare, praf de copt,
 * apă, gheață.
 *
 * TREI LUCRURI ÎNVĂȚATE PE PIELEA NOASTRĂ, care explică de ce rețetele arată
 * cum arată:
 *
 * 1. MICROUNDELE GĂTESC DIN INTERIOR. Proteinele din zer se strâng brutal și
 *    dau textura aia de burete de vase. Trei contramăsuri, toate obligatorii:
 *    cazeină în loc de zer, un ingredient umed (iaurt, albuș, banană) și
 *    OPRIT CU 20-30 DE SECUNDE MAI DEVREME decât pare corect. Un mug cake
 *    lucios în mijloc când îl scoți e un mug cake bun; unul uscat e ratat.
 *    De asta toate timpurile de aici sunt în SECUNDE, la 700-800 W.
 *
 * 2. CANA MAXIM PE JUMĂTATE. Aluatul crește de 2-2,5 ori în microunde și
 *    apoi se lasă. Dacă se revarsă, ai pierdut jumătate din porție și ai
 *    câștigat de spălat cuptorul — exact lucrurile care te fac să nu mai
 *    faci rețeta a doua oară.
 *
 * 3. PUDRA DE ZER SE TAIE ÎN LICHID FIERBINTE. Peste ~70°C zerul coagulează
 *    și rămâi cu grunji. Ori faci pastă cu lichid RECE și încălzești pe urmă,
 *    ori folosești cazeină, care rezistă. Ciocolata caldă de aici face ambele.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    /* =====================================================================
     * FAMILIA `mug` — o cană, microunde, o porție
     * ================================================================== */

    {
      id: 'ds-mug-cake-ciocolata',
      name: 'Mug cake de ciocolată',
      emoji: '🍫',

      family: 'mug',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 's-casein-micellar-ostrovit', g: 25 },
        { p: 'cacao', g: 10 },
        { p: 'faina-ovaz', g: 15 },
        { id: 'd-albus-lichid', g: 60 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 40 },
        { p: 'eritritol', g: 12 },
        { p: 'praf-copt', g: 2, free: true },
        { p: 'sare', g: 0.3, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 4, active: 3, chill: 1 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'furculita'],

      steps: [
        'Pune în cană, în ordinea asta, toate pudrele: cazeina, cacaoa, făina de ovăz, eritritolul, praful de copt și sarea. Amestecă-le uscate cu furculița 10 secunde — altfel rămân cocoloașe de cacao.',
        'Toarnă albușul, iaurtul și vanilia. Amestecă până nu mai vezi pudră uscată pe pereți, maximum 30 de secunde. Nu bate mult, nu e prăjitură de cofetărie.',
        'Verifică: aluatul trebuie să ajungă cel mult la jumătatea cănii. Dacă e mai sus, mută jumătate în altă cană.',
        'Microunde 50 de secunde la putere maximă (700-800 W). Deschide și uită-te.',
        'Dacă marginile s-au prins și mijlocul e încă lucios, ESTE GATA. Dacă mijlocul e lichid, mai dă 15 secunde și oprește-te acolo.',
        'Lasă cana pe blat 60 de secunde. Se termină de gătit din căldura proprie și se dezlipește de pereți.'
      ],
      tips: [
        'Cazeină, nu zer. Zerul se strânge în microunde și dă textură de cauciuc; cazeina leagă apa și rămâne umedă. Dacă ai doar zer, taie 10 secunde din timp și pune încă 15 g de iaurt.',
        'Cele 50 de secunde sunt pentru un microunde de 800 W. La 700 W pune 60, la 900 W pune 40. Prima dată cronometrează, a doua oară o să știi.',
        'Cacao naturală (nu alcalinizată) reacționează cu praful de copt și crește mai bine. Dacă folosești Dutch, creșterea e mai mică — nu e o problemă, doar arată altfel.'
      ],
      swaps: [
        { label: 'Fără albuș lichid', text: 'Albușurile de la 2 ouă mari = ~66 g. Aceeași treabă, doar că ai două gălbenușuri de folosit.' },
        { label: 'Mai bogat', text: 'Înlocuiește iaurtul cu 40 g brânză de vaci 6,5%. Iese mai dens, mai aproape de un chec.' }
      ],
      warnings: [
        'Conține lactate (cazeină, iaurt), ou (albuș) și ovăz — ovăzul e contaminat frecvent cu gluten dacă nu scrie explicit „fără gluten" pe pungă.',
        'Are 12 g de eritritol. E sub pragul la care majoritatea oamenilor simt ceva, dar dacă mai mănânci și altceva îndulcit în aceeași zi, se adună.'
      ],

      taste: {
        sweetness: 65,
        richness: 60,
        texture: 72,
        authenticity: 68
      },

      vs: {
        name: 'Muffin de ciocolată ambalat, de la benzinărie',
        grams: 90, kcal: 360, protein: 5, carbs: 45, sugars: 28, fat: 18
      },
      vsSource: 'Valori tipice de etichetă pentru muffin industrial ambalat, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 12 },

      storage: 'Se mănâncă din cană, în 5 minute. Rece a doua zi devine tare și cauciucat — nu are sens să îl păstrezi.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-mug-cake-vanilie',
      name: 'Mug cake de vanilie',
      emoji: '🧁',

      family: 'mug',
      craving: 'patiserie',
      servings: 1,

      ing: [
        { id: 's-casein-micellar-ostrovit', g: 25 },
        { p: 'faina-migdale', g: 15 },
        { id: 'd-albus-lichid', g: 55 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 45 },
        { p: 'eritritol', g: 12 },
        { p: 'praf-copt', g: 2, free: true },
        { p: 'vanilie', g: 3, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 4, active: 3, chill: 1 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'furculita'],

      steps: [
        'Amestecă în cană cazeina, făina de migdale, eritritolul, praful de copt și sarea.',
        'Adaugă albușul, iaurtul și vanilia (fii generos cu vanilia — ea face diferența într-un desert fără cacao care să acopere gustul de pudră).',
        'Amestecă până se omogenizează. Aluatul trebuie să fie gros, cam ca o smântână care curge greu, și să stea la jumătatea cănii.',
        'Microunde 45 de secunde la putere maximă (700-800 W).',
        'Dacă suprafața e umflată dar încă umedă la atingere, oprește-te. Mai dă 10 secunde doar dacă vezi aluat lichid la mijloc.',
        'Lasă 60 de secunde pe blat înainte să bagi lingura.'
      ],
      tips: [
        'Vanilia e singura care duce rețeta asta. Fără cacao nu ai unde să ascunzi gustul de pudră proteică, deci pune 3 g de extract, nu două picături.',
        'Făina de migdale ține umezeala mai bine decât cea de ovăz, tocmai pentru că e grasă și nu absoarbe apă. De asta e aici, nu din alt motiv.',
        'Un vârf de sare într-un desert de vanilie nu se simte, dar lipsa lui se simte: fără sare, gustul e plat.'
      ],
      swaps: [
        { label: 'Cu fructe', text: '30 g de zmeură pusă deasupra înainte de microunde. Se coace în aluat și taie dulceața.' },
        { label: 'Fără migdale', text: '15 g făină de ovăz în loc de făină de migdale. Mai puține calorii, dar iese mai uscat — scade timpul cu 10 secunde.' }
      ],
      warnings: [
        'Conține lactate (cazeină, iaurt), ou (albuș) și migdale — alergen pentru fructe cu coajă.',
        'Are 12 g de eritritol pe porție.'
      ],

      taste: {
        sweetness: 68,
        richness: 55,
        texture: 74,
        authenticity: 62
      },

      vs: {
        name: 'Chec cu vanilie ambalat, felie',
        grams: 80, kcal: 320, protein: 4, carbs: 42, sugars: 24, fat: 15
      },
      vsSource: 'Valori tipice de etichetă pentru chec industrial ambalat, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 12 },

      storage: 'Se mănâncă imediat. Nu se păstrează.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-mug-brownie',
      name: 'Brownie la cană, lipicios la mijloc',
      emoji: '🟫',

      family: 'mug',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 80 },
        { id: 's-casein-micellar-ostrovit', g: 15 },
        { id: 'd-oua-gaina-l', g: 50 },
        { p: 'cacao', g: 12 },
        { p: 'unt-arahide', g: 10 },
        { p: 'eritritol', g: 12 },
        { p: 'sare', g: 0.3, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 4, active: 4, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'furculita'],

      steps: [
        'Sparge oul direct în cană și bate-l 15 secunde cu furculița.',
        'Adaugă brânza de vaci și amestecă bine — brânza slabă are grunji, iar dacă nu îi desfaci acum îi vei simți în brownie.',
        'Pune cazeina, cacaoa, eritritolul, sarea și vanilia. Amestecă până e uniform.',
        'Bagă untul de arahide la mijloc, ca pe un dop, fără să îl amesteci. Se topește în timpul gătirii și face un miez mai gras.',
        'Microunde 60 de secunde la putere maximă (700-800 W). Fără praf de copt, aluatul nu crește mult, deci nu se revarsă.',
        'Mijlocul trebuie să rămână evident umed și lucios. Ăsta e brownie, nu prăjitură — dacă e uscat, l-ai gătit prea mult.'
      ],
      tips: [
        'Nu are praf de copt intenționat. Un brownie bun e dens, nu pufos. Dacă adaugi praf de copt îți iese un mug cake, care e altă rețetă, mai sus.',
        'Fără făină deloc. Brânza de vaci și oul dau toată structura, iar rezultatul e mult mai apropiat de un brownie de cofetărie decât variantele cu făină de ovăz.',
        'La 278 kcal e cea mai calorică rețetă `mug` din listă, din cauza oului și a untului de arahide. Sunt exact cele două lucruri care o fac să semene cu un brownie, deci le-am păstrat.'
      ],
      swaps: [
        { label: 'Fără arahide', text: '10 g tahini în loc de unt de arahide. Amăreala lui merge surprinzător de bine cu cacaoa.' },
        { label: 'Mai puține calorii', text: 'Scoate untul de arahide. Cobori la ~220 kcal, dar pierzi senzația de gras care face brownie-ul să fie brownie.' }
      ],
      warnings: [
        'Conține lactate (brânză de vaci, cazeină), ou și arahide.',
        'Are 12 g de eritritol pe porție.'
      ],

      taste: {
        sweetness: 58,
        richness: 78,
        texture: 82,
        authenticity: 80
      },

      vs: {
        name: 'Brownie de cofetărie',
        grams: 90, kcal: 390, protein: 5, carbs: 46, sugars: 34, fat: 21
      },
      vsSource: 'Valori tipice pentru brownie de cofetărie, porție de vitrină, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 12 },

      storage: 'Se mănâncă din cană. Rece se întărește ca o cărămidă.',

      mealFit: { desert: 5, gustare: 3, micDejun: 2, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-mug-lava-cake',
      name: 'Lava cake cu miez curgător',
      emoji: '🌋',

      family: 'mug',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 's-casein-micellar-ostrovit', g: 22 },
        { p: 'cacao', g: 8 },
        { p: 'faina-ovaz', g: 12 },
        { id: 'd-albus-lichid', g: 50 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 40 },
        { id: 'b-ciocolata-proteica', g: 15 },
        { p: 'eritritol', g: 10 },
        { p: 'praf-copt', g: 1.5, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 3, active: 3, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'furculita'],

      steps: [
        'Amestecă în cană cazeina, cacaoa, făina de ovăz, eritritolul, praful de copt și sarea.',
        'Toarnă albușul și iaurtul, amestecă până se omogenizează.',
        'Rupe pătrățelul de ciocolată proteică în două-trei bucăți și înfige-le în mijlocul aluatului, până dispar sub suprafață. Nu le amesteca — ele sunt lava.',
        'Microunde 40 de secunde la putere maximă (700-800 W). Atât. Nu 50, nu 60.',
        'Marginile trebuie să fie prinse, mijlocul moale. Bagă lingura imediat — ciocolata din centru e topită acum și se întărește la loc în 3-4 minute.'
      ],
      tips: [
        'Toată rețeta stă în cele 40 de secunde. Un lava cake e un mug cake sub-copt intenționat, cu ciocolată topită la mijloc. Dacă îl gătești până e „gata", ai făcut un mug cake obișnuit cu un cocoloș de ciocolată în el.',
        'Ciocolata proteică se topește mai încet decât cea obișnuită, pentru că are mai puțină grăsime de cacao. De asta o rupem în bucăți mici, nu o punem întreagă.',
        'Se mănâncă în picioare, direct din cană, în primele 3 minute. E singura rețetă din fișier unde întârzierea chiar strică rezultatul.'
      ],
      swaps: [
        { label: 'Fără ciocolată proteică', text: '12 g ciocolată neagră 85% la mijloc. Curge mai bine, adaugă ~70 kcal și scade proteina cu ~3 g.' },
        { label: 'Miez de arahide', text: '15 g unt de arahide în loc de ciocolată. Nu se întărește deloc la loc, deci ai fereastră mai mare.' }
      ],
      warnings: [
        'Conține lactate (cazeină, iaurt, ciocolată proteică), ou (albuș) și ovăz.',
        'Are 10 g de eritritol, plus poliolii din ciocolata proteică.',
        'Miezul e foarte fierbinte când iese din microunde. Ciocolata topită trece de 90°C și arde limba mai rău decât aluatul din jur.'
      ],

      taste: {
        sweetness: 66,
        richness: 82,
        texture: 85,
        authenticity: 78
      },

      vs: {
        name: 'Lava cake congelat, gata de încălzit',
        grams: 100, kcal: 420, protein: 5.5, carbs: 44, sugars: 32, fat: 25
      },
      vsSource: 'Valori tipice de etichetă pentru moelleux au chocolat congelat, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 10 },

      storage: 'Nu se păstrează. Lava se solidifică și rămâi cu un mug cake mediocru.',

      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-mug-budinca-ovaz',
      name: 'Budincă de ovăz la cană',
      emoji: '🥣',

      family: 'mug',
      craving: 'cremos',
      servings: 1,

      ing: [
        { id: 'v-fulgi-ovaz-instant', g: 30 },
        { id: 'd-lapte-15', g: 120 },
        { id: 's-casein-micellar-ostrovit', g: 20 },
        { p: 'banane', g: 40 },
        { p: 'scortisoara', g: 1, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 5, active: 3, chill: 2 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'lingura'],

      steps: [
        'Pune ovăzul, laptele, sarea și scorțișoara în cană. Amestecă o dată.',
        'Microunde 90 de secunde la putere maximă (700-800 W). Cana trebuie să fie umplută cel mult pe jumătate — laptele dă în foc exact ca pe aragaz.',
        'Scoate cana și AȘTEAPTĂ un minut, până nu mai e fierbinte, doar caldă. Ăsta e pasul pe care toată lumea îl sare.',
        'Abia acum pune cazeina și amestecă viguros 20 de secunde. Dacă o pui în lapte clocotit se strânge și rămâi cu grunji.',
        'Feliază banana deasupra și presară încă puțină scorțișoară. Nu mai are nevoie de îndulcitor — banana coaptă și scorțișoara fac toată treaba.'
      ],
      tips: [
        'Nu are niciun îndulcitor adăugat. Banana are 12 g de zahăr la 100 g, iar scorțișoara e trucul cel mai ieftin din bucătărie: creierul o citește ca dulceață. Dacă tot îți trebuie mai dulce, 4-5 g de eritritol în pasul 1.',
        'Ovăzul instant, nu fulgii mari. Fulgii mari au nevoie de 3-4 minute în microunde și rămân tari; instantul se face în 90 de secunde. Diferența de macro-uri e neglijabilă.',
        'Dacă vrei textura de budincă și nu de terci, lasă cana 2 minute după ce ai amestecat cazeina. Cazeina continuă să lege apa și se îngroașă vizibil.'
      ],
      swaps: [
        { label: 'Fără lactate', text: 'Băutură de soia neîndulcită în loc de lapte. Pierzi ~1 g de proteină la 100 ml, dar textura rămâne.' },
        { label: 'Cu cacao', text: '6 g de cacao în pasul 1. Devine budincă de ciocolată, plus ~1 g proteină și ~14 kcal.' }
      ],
      warnings: [
        'Conține lactate (lapte, cazeină) și ovăz.',
        'Laptele fierbe și dă pe dinafară în microunde fără avertisment. Cana pe jumătate, nu mai mult.'
      ],

      taste: {
        sweetness: 52,
        richness: 58,
        texture: 76,
        authenticity: 72
      },

      vs: {
        name: 'Orez cu lapte la borcan, comercial',
        grams: 200, kcal: 250, protein: 6, carbs: 42, sugars: 24, fat: 6
      },
      vsSource: 'Valori tipice de etichetă pentru desert lactat cu orez, borcan 200 g, 2026',

      sweetener: null,

      storage: 'Se mănâncă cald. La frigider se poate ține 24 h și se mănâncă rece, ca overnight oats — dar se îngroașă mult, mai pune 30 ml lapte.',

      mealFit: { desert: 4, gustare: 4, micDejun: 5, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-mug-clatita',
      name: 'Clătită la cană cu zmeură',
      emoji: '🥞',

      family: 'mug',
      craving: 'patiserie',
      servings: 1,

      ing: [
        { p: 'faina-ovaz', g: 25 },
        { id: 'd-albus-lichid', g: 70 },
        { id: 's-whey-concentrate-ostrovit', g: 15 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 40 },
        { p: 'zmeura', g: 40 },
        { p: 'eritritol', g: 8 },
        { p: 'praf-copt', g: 2, free: true },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 4, active: 3, chill: 1 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'furculita'],

      steps: [
        'Amestecă în cană făina de ovăz, pudra de zer, eritritolul, praful de copt și sarea.',
        'Adaugă albușul, iaurtul și vanilia. Amestecă până dispar cocoloașele — aluatul iese subțire, ca de clătite, și așa trebuie să fie.',
        'Presară zmeura deasupra. Nu o amesteca, se lasă la fund și lipește aluatul de cană.',
        'Microunde 55 de secunde la putere maximă (700-800 W).',
        'Suprafața trebuie să fie umflată și mată, cu urme umede în jurul zmeurei. Lasă 30 de secunde și mănâncă din cană.'
      ],
      tips: [
        'Singura rețetă `mug` din listă cu zer și nu cazeină, pentru că o clătită are voie să fie puțin mai elastică — chiar așa e și clătita adevărată. Chiar și așa, nu depăși 55 de secunde.',
        'Zmeura congelată merge la fel de bine, dar adaugă 10 secunde și lasă un pic mai mult după. Nu o dezgheța: se face terci.',
        'Dacă vrei senzația reală de clătită, răstoarnă cana pe o farfurie după ce s-a răcit 1 minut. Iese un disc gros, care se taie cu furculița.'
      ],
      swaps: [
        { label: 'Cu vișine', text: '40 g vișine congelate în loc de zmeură. Mai acre, taie și mai bine dulceața.' },
        { label: 'Fără ovăz', text: '15 g făină de migdale + 10 g amidon de porumb. Iese mai fină, fără gust de cereale.' }
      ],
      warnings: [
        'Conține lactate (zer, iaurt), ou (albuș) și ovăz.',
        'Are 8 g de eritritol pe porție.'
      ],

      taste: {
        sweetness: 62,
        richness: 45,
        texture: 70,
        authenticity: 66
      },

      vs: {
        name: 'Două clătite cu gem, de casă',
        grams: 150, kcal: 380, protein: 8, carbs: 55, sugars: 24, fat: 13
      },
      vsSource: 'Valori tipice pentru clătite din făină albă cu gem, calculate din ingrediente, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 8 },

      storage: 'Se mănâncă imediat. Rece devine gumoasă.',

      mealFit: { desert: 4, gustare: 4, micDejun: 5, postAntrenament: 4, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * FAMILIA `drink` — se bea, deci nu ai nici măcar de spălat o farfurie
     *
     * Diferența dintre un shake apos și unul care chiar înlocuiește un desert
     * e o singură decizie: cât lichid pui. Toate rețetele de mai jos folosesc
     * cel puțin unul din cele patru trucuri de textură, și fiecare spune care:
     *   (a) banană congelată — cel mai bun, îngroașă ȘI îndulcește;
     *   (b) fructe congelate în loc de gheață — răcesc fără să dilueze;
     *   (c) gheață măcinată în blender — volum de milkshake, zero calorii;
     *   (d) mai puțin lichid + iaurt gros — cel mai simplu, merge la shaker.
     * ================================================================== */

    {
      id: 'ds-shake-milkshake-banana',
      name: 'Shake gros ca un milkshake',
      emoji: '🥤',

      family: 'drink',
      craving: 'inghetata',
      servings: 1,

      ing: [
        { p: 'banane', g: 90 },
        { id: 's-whey-concentrate-ostrovit', g: 25 },
        { id: 'd-skyr-natural-pilos', g: 80 },
        { id: 'd-lapte-15', g: 80 },
        { p: 'gheata', g: 80, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 3, active: 3, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender'],

      steps: [
        'Banana trebuie să fie congelată. Feliaz-o când e coaptă și ține feliile într-o pungă la congelator — asta e singura muncă de anticipare din toată rețeta și se face o dată la două săptămâni.',
        'Pune în blender, în ordinea asta: laptele, skyrul, pudra de zer, banana congelată, gheața, vanilia. Lichidul jos, solidele sus — altfel lamele se învârt în gol.',
        'Blenduiește 40-50 de secunde, până gheața nu se mai aude scârțâind.',
        'Verifică cu paiul: dacă paiul stă drept în pahar, e cum trebuie. Dacă se lasă pe o parte, mai pune 30 g de gheață și încă 15 secunde.'
      ],
      tips: [
        'Trucul e banana CONGELATĂ, nu banana rece. O banană congelată se comportă exact ca înghețata în blender: cristalele de apă din ea se sparg în particule fine și dau corp. Banană proaspătă + gheață dă un shake apos cu gust de banană.',
        'Doar 80 ml de lapte pentru 25 g de pudră. Toată lumea pune 250-300 ml pentru că așa scrie pe borcan, și de aia iese apos. Skyrul aduce lichidul care lipsește, dar gros.',
        'Dacă ai gumă xantan în casă, un vârf de cuțit (sub un gram, nu merită cântărit) face shake-ul să rămână gros și după 10 minute. Fără ea, se separă puțin — bea-l în primele 5 minute.'
      ],
      swaps: [
        { label: 'Fără banană', text: '90 g căpșuni congelate. Iese mai acru și mai puțin cremos, dar cu ~60 kcal mai puțin. Pune 5 g de eritritol.' },
        { label: 'La shaker, fără blender', text: 'Scoate gheața și banana congelată, pune 60 g banană proaspătă pasată cu furculița. Nu iese milkshake, iese shake — dar se face în 90 de secunde.' }
      ],
      warnings: [
        'Conține lactate (zer, skyr, lapte).'
      ],

      taste: {
        sweetness: 72,
        richness: 68,
        texture: 88,
        authenticity: 76
      },

      vs: {
        name: 'Milkshake de vanilie, fast-food, pahar mediu',
        grams: 300, kcal: 430, protein: 9, carbs: 66, sugars: 58, fat: 13
      },
      vsSource: 'Valori tipice publicate de lanțurile de fast-food pentru milkshake 300 ml, 2026',

      sweetener: null,

      storage: 'Se bea în 5-10 minute. La frigider se separă; la congelator, 30 de minute, devine o înghețată moale acceptabilă.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-ciocolata-calda-proteica',
      name: 'Ciocolată caldă proteică, fără grunji',
      emoji: '☕',

      family: 'drink',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 'd-lapte-15', g: 250 },
        { id: 's-casein-micellar-ostrovit', g: 25 },
        { p: 'cacao', g: 8 },
        { p: 'amidon-porumb', g: 3 },
        { p: 'eritritol', g: 10 },
        { p: 'sare', g: 0.3, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 5, active: 4, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cana', 'tel mic'],

      steps: [
        'Pune în cană cazeina, cacaoa, amidonul, eritritolul și sarea. Amestecă-le uscate.',
        'Toarnă peste ele DOAR 50 ml din laptele rece, direct de la frigider. Freacă cu telul până obții o pastă groasă și lucioasă, fără niciun cocoloș. Ăsta e pasul care decide totul.',
        'Adaugă restul de lapte rece, tot amestecând.',
        'Microunde 80-90 de secunde. Oprește la 60 de secunde, amestecă o dată, apoi mai dă 30.',
        'Scoate când e fierbinte dar NU clocotită — dacă vezi bule la margine, e deja prea mult. Amestecă vanilia la final.'
      ],
      tips: [
        'Nu turna niciodată pudra proteică în lichid deja fierbinte. Peste ~70°C proteinele se desfac și se agață una de alta, iar ce obții e o supă cu fulgi. Pasta cu lichid rece rezolvă problema definitiv, indiferent de pudră.',
        'Cazeina rezistă la căldură mult mai bine decât zerul — se îngroașă, nu se brânzește. Dacă ai doar zer, fă pasta rece la fel, dar oprește microundele la 60 de secunde: caldă, nu fierbinte.',
        'Cele 3 g de amidon par o nimica toată, dar sunt diferența între o ciocolată caldă care se bea și una care „îmbracă" lingura. Fără el, gustul e acolo, dar senzația de cofetărie nu.'
      ],
      swaps: [
        { label: 'Pe aragaz', text: 'Aceeași pastă rece, apoi într-un ibric la foc mic, amestecând continuu 3 minute. Control mai bun decât la microunde.' },
        { label: 'Mai intens', text: 'Adaugă 1 g de cafea instant. Nu se simte a cafea, doar adâncește ciocolata. Adaugă însă și cofeină.' }
      ],
      warnings: [
        'Conține lactate (lapte, cazeină).',
        'Cele 8 g de cacao aduc aproximativ 15-20 mg de cofeină și teobromină — puțin, cam cât un sfert de espresso, dar dacă ești sensibil și o bei la 23:00, e bine să știi.'
      ],

      taste: {
        sweetness: 64,
        richness: 74,
        texture: 82,
        authenticity: 84
      },

      vs: {
        name: 'Ciocolată caldă la plic (25 g) preparată cu 250 ml lapte 3,5%',
        grams: 275, kcal: 270, protein: 9.5, carbs: 38, sugars: 30, fat: 9
      },
      vsSource: 'Valori tipice de etichetă pentru plic de ciocolată caldă instant plus lapte integral, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 10 },

      storage: 'Se bea caldă. Reîncălzită se îngroașă și mai tare — mai pune 40 ml lapte și amestecă.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 3, seara: 5 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-smoothie-fructe-rosii',
      name: 'Smoothie de fructe roșii',
      emoji: '🍓',

      family: 'drink',
      craving: 'fructat',
      servings: 1,

      ing: [
        { p: 'visine-congelate', g: 100 },
        { p: 'capsuni', g: 80 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 120 },
        { id: 's-clear-whey-isolate-ostrovit', g: 20 },
        { p: 'apa', g: 60, free: true }
      ],

      time: { total: 4, active: 4, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender'],

      steps: [
        'Pune apa și iaurtul în blender primele.',
        'Adaugă izolatul clear, apoi vișinele congelate și căpșunile.',
        'Blenduiește 30-40 de secunde. Vișinele congelate au sâmburele scos, dar verifică punga — unele mărci nu îl scot și îți distrugi lamele.',
        'Gustă. Vișinele sunt acre; dacă îți trebuie mai dulce, 5 g de eritritol și încă 5 secunde de blender.'
      ],
      tips: [
        'Fructele congelate ÎN LOC de gheață. Gheața răcește și diluează; fructele congelate răcesc și concentrează. E singurul motiv pentru care aici nu apare gheață deloc.',
        'Izolat „clear", nu zer clasic. Zerul clasic cu fructe acre are tendința să se lege în cocoloașe și dă un gust lăptos care se bate cu fructul. Clear whey e făcut exact pentru asta și rămâne limpede.',
        'Vișinele bat orice alt fruct roșu aici: aciditatea lor face smoothie-ul să pară de fructe adevărate, nu de aromă. Zmeura merge, căpșunile singure ies fade.'
      ],
      swaps: [
        { label: 'Fără pudră', text: '200 g iaurt grecesc 0% în loc de 120 g plus pudră. Cobori la ~21 g proteină și pierzi aroma de fruct, dar e o rețetă din trei ingrediente.' },
        { label: 'Mai gros', text: '8 g de semințe de chia, blenduite odată cu restul, apoi 10 minute de așteptare. Se îngroașă până la consistență de smoothie bowl.' }
      ],
      warnings: [
        'Conține lactate (iaurt, izolat din zer).'
      ],

      taste: {
        sweetness: 58,
        richness: 40,
        texture: 74,
        authenticity: 80
      },

      vs: {
        name: 'Smoothie de fructe la pahar, cafenea, 400 ml',
        grams: 400, kcal: 320, protein: 4, carbs: 72, sugars: 60, fat: 1
      },
      vsSource: 'Valori tipice afișate de lanțurile de cafenele pentru smoothie de fructe 400 ml, 2026',

      sweetener: null,

      storage: 'Se bea imediat. După 20 de minute se separă în două straturi — se poate reamesteca, dar textura nu revine.',

      mealFit: { desert: 4, gustare: 5, micDejun: 4, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-cafea-proteica-rece',
      name: 'Cafea proteică rece, tip frappé',
      emoji: '🧋',

      family: 'drink',
      craving: 'cremos',
      servings: 1,

      ing: [
        { p: 'cafea-instant', g: 4, free: true },
        { id: 'd-lapte-15', g: 200 },
        { id: 's-whey-concentrate-ostrovit', g: 25 },
        { p: 'eritritol', g: 6 },
        { p: 'gheata', g: 100, free: true },
        { p: 'apa', g: 30, free: true }
      ],

      time: { total: 3, active: 3, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender'],

      steps: [
        'Dizolvă cafeaua instant în 30 ml de apă RECE, într-un pahar. Cafeaua instant se dizolvă și la rece, doar mai încet — amestecă 20 de secunde. Nu folosi apă fierbinte, ar tăia pudra la pasul următor.',
        'Toarnă cafeaua în blender peste lapte, pudra de zer și eritritol.',
        'Adaugă gheața la final, deasupra.',
        'Blenduiește 40 de secunde, până se face spumă groasă la suprafață. Spuma e semnul că gheața s-a măcinat, nu doar s-a spart.',
        'Toarnă în paharul cel mai mare pe care îl ai — își dublează volumul.'
      ],
      tips: [
        'Gheața măcinată e trucul aici, nu îngroșătorul. 100 g de gheață bătută 40 de secunde dublează volumul fără să adauge nimic, și dă exact senzația de frappé de la terasă.',
        'Cei 4 g de cafea instant sunt cam 140 mg de cofeină — echivalentul a două espresso. Nu e o rețetă de seară, oricât de bine ar suna ca desert.',
        'Apa rece la pasul 1 nu e o excentricitate: dacă dizolvi cafeaua în apă fiartă și torni peste pudră, zerul se strânge instantaneu și rămâi cu fulgi în pahar.'
      ],
      swaps: [
        { label: 'Cu espresso', text: 'Un espresso dublu răcit (60 ml) în loc de cafea instant plus apă. Gust net mai bun, dar trebuie să îl faci înainte și să îl lași să se răcească.' },
        { label: 'Fără cofeină', text: 'Cafea instant decofeinizată, aceeași cantitate. Se comportă identic.' }
      ],
      warnings: [
        'Conține aproximativ 140 mg de cofeină, cât două espresso. Nu se bea seara.',
        'Conține lactate (lapte, zer).'
      ],

      taste: {
        sweetness: 55,
        richness: 58,
        texture: 84,
        authenticity: 82
      },

      vs: {
        name: 'Frappuccino / cafea cu lapte și frișcă, 350 ml, cafenea',
        grams: 350, kcal: 330, protein: 6, carbs: 48, sugars: 45, fat: 12
      },
      vsSource: 'Valori tipice afișate de lanțurile de cafenele pentru băutură de cafea rece cu frișcă, 350 ml, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 6 },

      storage: 'Se bea în 10 minute, cât timp gheața nu s-a topit. Nu se păstrează.',

      mealFit: { desert: 4, gustare: 4, micDejun: 4, postAntrenament: 4, seara: 0 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-cacao-cu-lapte-adulti',
      name: 'Cacao cu lapte, versiunea pentru adulți',
      emoji: '🐰',

      family: 'drink',
      craving: 'ciocolata',
      servings: 1,

      ing: [
        { id: 'd-lapte-15', g: 250 },
        { id: 's-whey-concentrate-ostrovit', g: 25 },
        { p: 'cacao', g: 6 },
        { p: 'eritritol', g: 8 },
        { p: 'apa', g: 20, free: true },
        { p: 'sare', g: 0.2, free: true }
      ],

      time: { total: 3, active: 2, chill: 0 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['shaker'],

      steps: [
        'Pune cacaoa, eritritolul și sarea într-un pahar cu 20 ml de apă CALDĂ (nu fiartă — de la robinet, cât suporți degetul). Freacă 20 de secunde până se face o pastă neagră, lucioasă.',
        'Toarnă pasta în shaker peste laptele rece.',
        'Adaugă pudra de zer, închide și agită energic 20 de secunde.',
        'Bea rece, direct din shaker. Nu se răstoarnă nimic, nu se spală nimic.'
      ],
      tips: [
        'Pasul cu pasta de cacao e ce fac și producătorii de pudre instant, doar că ei o rezolvă cu lecitină. Cacao uscată aruncată direct în lapte rece plutește la suprafață în grunji și nu se lasă înmuiată nici după un minut de agitat.',
        'Aici nu câștigi la calorii: 230 kcal față de 237 la varianta cu pudră comercială. Câștigi la proteină (29 g față de 8,5) și la zahăr (12 g de lactoză față de 30 g, din care 18 adăugat). Dacă îți numeri caloriile, cele două sunt echivalente — dacă îți numeri proteina, nu sunt.',
        'Sarea. Un vârf de cuțit într-o cacao cu lapte scoate gustul de ciocolată în față. Se face în toate cofetăriile și nu se simte ca sare.'
      ],
      swaps: [
        { label: 'Cu pudră neutră', text: 'Dacă zerul tău e cu vanilie sau neutru, mărește cacaoa la 10 g. Adaugă ~1 g proteină și ~9 kcal.' },
        { label: 'Mai gros', text: 'Înlocuiește 100 g din lapte cu 100 g de skyr și agită mai lung. Devine aproape de un shake.' }
      ],
      warnings: [
        'Conține lactate (lapte, zer).'
      ],

      taste: {
        sweetness: 66,
        richness: 52,
        texture: 70,
        authenticity: 86
      },

      vs: {
        name: 'Lapte integral 250 ml cu 20 g pudră de cacao instant zaharată',
        grams: 270, kcal: 237, protein: 8.5, carbs: 32, sugars: 30, fat: 9
      },
      vsSource: 'Valori tipice de etichetă pentru pudră de cacao instant pentru copii plus lapte 3,5%, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 8 },

      storage: 'Frigider, 24 h în shaker închis. Se agită din nou înainte de băut.',

      mealFit: { desert: 4, gustare: 5, micDejun: 4, postAntrenament: 5, seara: 4 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-iaurt-baut-fructe',
      name: 'Iaurt de băut cu fructe, patru ingrediente',
      emoji: '🫐',

      family: 'drink',
      craving: 'fructat',
      servings: 1,

      ing: [
        { id: 'd-skyr-bautura-milbona', g: 250 },
        { p: 'zmeura', g: 70 },
        { p: 'capsuni', g: 60 },
        { p: 'eritritol', g: 5 }
      ],

      time: { total: 2, active: 2, chill: 0 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['pahar', 'furculita'],

      steps: [
        'Pune zmeura și căpșunile într-un pahar înalt și strivește-le cu furculița, 20 de secunde. Nu ai nevoie de blender pentru fructe moi.',
        'Adaugă eritritolul peste fructele strivite și mai amestecă o dată — se dizolvă în zeama lor.',
        'Toarnă sticla de skyr de băut peste ele și amestecă de trei ori. Atât.'
      ],
      tips: [
        'Cea mai leneșă rețetă din tot fișierul, și de asta e cea care se face cel mai des. Băutura de skyr vine deja groasă și cu 7,4 g de proteină la 100 ml — nu trebuie îngroșată, nu trebuie completată cu pudră.',
        'Fructele strivite, nu blenduite. Blenderul le face suc și pierzi bucățile, care sunt jumătate din plăcere. Plus că ai de spălat blenderul, ceea ce anulează tot rostul rețetei.',
        'Cu nici 20 g de proteină e cea mai slabă din listă la capitolul densitate, dar e și singura care se face în două minute fără niciun aparat. Dacă vrei mai mult, 10 g de izolat clear agitat în sticlă o duc la ~28 g.'
      ],
      swaps: [
        { label: 'Iarna', text: '100 g vișine congelate dezghețate la microunde 40 de secunde, în loc de fructele proaspete. Aceeași treabă, disponibile tot anul.' },
        { label: 'Cu chia', text: '8 g de semințe de chia amestecate și lăsate 15 minute la frigider. Devine un iaurt de băut gros, aproape de budincă.' }
      ],
      warnings: [
        'Conține lactate (băutură de skyr).'
      ],

      taste: {
        sweetness: 60,
        richness: 42,
        texture: 72,
        authenticity: 84
      },

      vs: {
        name: 'Iaurt de băut cu fructe, comercial, 250 ml',
        grams: 250, kcal: 190, protein: 6, carbs: 34, sugars: 30, fat: 3
      },
      vsSource: 'Valori tipice de etichetă pentru iaurt de băut cu fructe, sticlă 250 ml, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 5 },

      storage: 'Frigider, 24 h. Fructele strivite lasă zeamă și se separă — se amestecă din nou.',

      mealFit: { desert: 4, gustare: 5, micDejun: 5, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * FAMILIA `batch` — o dată duminica, ține toată săptămâna
     *
     * „Ține toată săptămâna" e o promisiune, nu o figură de stil. Fiecare
     * rețetă de aici spune exact câte zile ține și unde stă, iar unde
     * răspunsul e „patru zile, nu șapte", scrie patru.
     *
     * Regula care strică cel mai des un batch: umiditatea. Orice se închide
     * în borcan sau cutie înainte să fie COMPLET rece face condens, iar
     * condensul înmoaie ce trebuia să fie crocant și hrănește ce nu trebuie
     * hrănit. Zece minute de răbdare în plus valorează o săptămână de raft.
     * ================================================================== */

    {
      id: 'ds-batch-batoane-arahide',
      name: 'Batoane cu arahide și ciocolată, fără coacere',
      emoji: '🍬',

      family: 'batch',
      craving: 'caramel',
      servings: 8,

      ing: [
        { p: 'unt-arahide', g: 120 },
        { id: 's-whey-concentrate-ostrovit', g: 110 },
        { id: 'v-fulgi-ovaz-instant', g: 70 },
        { p: 'miere', g: 60 },
        { id: 'd-lapte-15', g: 80 },
        { p: 'fulgi-ciocolata', g: 40 },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],

      time: { total: 15, active: 12, chill: 120 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['bol mare', 'tava mica 15x20', 'hartie de copt'],

      steps: [
        'Încălzește untul de arahide cu mierea 30 de secunde la microunde, într-un bol mare. Devin lichide și se amestecă singure.',
        'Adaugă vanilia, sarea și laptele. Amestecă.',
        'Toarnă peste ele pudra de zer și ovăzul, tot deodată. Amestecă întâi cu lingura, apoi cu mâna — la 110 g de pudră lingura nu mai face față.',
        'Verifică textura: trebuie să fie un aluat care se strânge în palmă și nu se sfărâmă. Dacă e nisipos, mai pune lapte câte 10 g. Dacă se lipește de degete, mai pune 10 g de ovăz.',
        'Amestecă fulgii de ciocolată la final, când aluatul e călduț — dacă e fierbinte se topesc și îl fac maro.',
        'Presează tot aluatul într-o tavă mică tapetată cu hârtie de copt, într-un strat de aproximativ 2 cm. Apasă tare cu dosul unei linguri: batoanele care se sfărâmă sunt batoane pe care nu le-ai presat destul.',
        'Frigider 2 ore, apoi taie 8 batoane. Se taie mult mai curat rece decât cald.'
      ],
      tips: [
        'Nu conțin niciun ingredient proaspăt: fără fructe, fără ouă, fără brânză. De asta țin. Un baton cu banană sau curmale înmuiate mucegăiește în 3-4 zile pentru că are apă liberă în el; ăsta nu are.',
        'Zer, nu cazeină, aici. Cazeina absoarbe atât de multă apă încât batonul iese ca guma de mestecat. E singurul loc din fișier unde zerul e alegerea mai bună.',
        'Sunt cea mai bună afacere pe leu din tot fișierul, pentru că pudra e diluată în ovăz și unt de arahide ieftine. Un baton comercial cu 16 g de proteină costă, estimativ, 10-14 lei în Sibiu.'
      ],
      swaps: [
        { label: 'Fără arahide', text: '120 g tahini. Iese mai amar și mai adult; pune 10 g de miere în plus.' },
        { label: 'Mai ieftin', text: 'Scoate fulgii de ciocolată (sunt cel mai scump ingredient pe gram) și pune 15 g de cacao în aluat. Cobori cu ~20 kcal pe baton.' }
      ],
      warnings: [
        'Conține arahide, lactate (zer, lapte) și ovăz.',
        'Fulgii de ciocolată fără zahăr aduc aproximativ 2 g de polioli pe baton. Puțin la unul, dar dacă mănânci trei pe zi ajungi la 6 g doar de aici.',
        'Are 7,5 g de miere pe baton, adică zahăr adevărat. Nu sunt batoane „fără zahăr".'
      ],

      taste: {
        sweetness: 62,
        richness: 70,
        texture: 74,
        authenticity: 72
      },

      vs: {
        name: 'Baton de ciocolată cu arahide și caramel, tip Snickers',
        grams: 50, kcal: 245, protein: 4, carbs: 30, sugars: 25, fat: 12
      },
      vsSource: 'Valori tipice de etichetă pentru baton de ciocolată cu arahide, 50 g, 2026',

      sweetener: { kind: 'miere', gPerServing: 7.5 },

      storage: 'Cutie etanșă la frigider, 2 săptămâni — se întăresc, dar nu se strică. La temperatura camerei doar 3-4 zile, și nu vara. La congelator 3 luni, cu hârtie între ele; se dezgheață în 15 minute pe blat.',

      mealFit: { desert: 4, gustare: 5, micDejun: 3, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-batch-granola-proteica',
      name: 'Granola proteică cu bulgări',
      emoji: '🥜',

      family: 'batch',
      craving: 'crocant',
      servings: 10,

      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 240 },
        { id: 'v-migdale', g: 70 },
        { p: 'seminte-dovleac', g: 60 },
        { id: 's-whey-isolate-ostrovit', g: 60 },
        { id: 'd-praf-albus', g: 50 },
        { p: 'sirop-artar', g: 70 },
        { p: 'ulei-cocos', g: 28 },
        { p: 'cocos-fulgi', g: 30 },
        { p: 'apa', g: 80, free: true },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 40, active: 12, chill: 40 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['bol mare', 'tava de cuptor', 'hartie de copt'],

      steps: [
        'Încinge cuptorul la 150°C. Nu mai mult — vezi primul sfat.',
        'Bate praful de albuș cu cei 80 ml de apă într-un bol mare, până se face o spumă subțire. Adaugă siropul de arțar, uleiul de cocos topit, scorțișoara și sarea.',
        'Amestecă izolatul de zer DIRECT ÎN LICHID, nu peste fulgi. Trebuie să se dizolve complet în amestecul umed, ca să îmbrace fiecare fulg în loc să rămână praf pe fundul tăvii.',
        'Toarnă peste ovăz, migdalele tăiate grosier, semințele de dovleac și fulgii de cocos. Amestecă până totul e umed, uniform.',
        'Întinde pe tavă și PRESEAZĂ cu spatula într-un strat compact de 1,5 cm. Bulgării se formează din presiune, nu din noroc.',
        'Coace 25 de minute. La minutul 15 rotește tava, dar NU amesteca — dacă amesteci, spargi bulgării și obții fulgi.',
        'Scoate și lasă tava pe blat 40 de minute, până e complet rece. Granola e moale caldă și devine crocantă la răcire; dacă o guști la 10 minute și ți se pare ratată, mai așteaptă.',
        'Rupe placa în bulgări cu mâna și pune-o în borcan.'
      ],
      tips: [
        '150°C, nu 180°C. Zerul se rumenește mult mai repede decât ovăzul și trece direct în amar. La 150°C ai 25 de minute de fereastră; la 180°C ai șapte, și îi ratezi.',
        'Praful de albuș e liantul, nu decorul. Albușul bătut e trucul standard din granola de patiserie: se coagulează în jurul fulgilor și îi lipește în bulgări. Aici face și proteină.',
        'REGULA CARE STRICĂ TOTUL: nu închide borcanul cât granola e cât de cât caldă. Un pic de abur închis în borcan condensează pe pereți, se întoarce în granola și în două zile ai fulgi moi în loc de bulgări. Complet rece înseamnă rece la atingere, nu „aproape".',
        'O porție e 55 g, adică două lingurițe mari — arată puțin într-un bol pentru că e densă. Cântărește-o o dată, ca să știi cum arată, apoi nu mai cântări niciodată.'
      ],
      swaps: [
        { label: 'Fără nuci', text: '70 g semințe de floarea-soarelui sau încă 60 g de semințe de dovleac în loc de migdale.' },
        { label: 'Mai puțin dulce', text: '45 g sirop de arțar plus 15 g de eritritol. Bulgării ies mai fragili — siropul e și el liant, nu doar îndulcitor.' }
      ],
      warnings: [
        'Conține migdale, lactate (izolat din zer), ou (praf de albuș) și ovăz.',
        'Are 7 g de sirop de arțar pe porție, adică ~4 g de zahăr adevărat. Mai puțin decât granola comercială, dar nu zero.'
      ],

      taste: {
        sweetness: 55,
        richness: 62,
        texture: 86,
        authenticity: 82
      },

      vs: {
        name: 'Granola comercială cu miere și fructe, porție',
        grams: 55, kcal: 240, protein: 5, carbs: 35, sugars: 12, fat: 9
      },
      vsSource: 'Valori tipice de etichetă pentru granola crocantă ambalată, la 55 g, 2026',

      sweetener: { kind: 'sirop-artar', gPerServing: 7 },

      storage: 'Borcan cu capac etanș, la temperatura camerei, 3 săptămâni — dar numai dacă a fost complet rece când ai închis capacul. Dacă se înmoaie, 8 minute la 150°C o readuc.',

      mealFit: { desert: 3, gustare: 5, micDejun: 5, postAntrenament: 3, seara: 2 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-batch-borcane-ovaz-cazeina',
      name: 'Cinci borcane pregătite duminică',
      emoji: '🫙',

      family: 'batch',
      craving: 'cremos',
      servings: 5,

      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 130 },
        { p: 'chia', g: 40 },
        { id: 's-casein-micellar-ostrovit', g: 90 },
        { id: 'd-lapte-15', g: 700 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 250 },
        { p: 'gem-fara-zahar', g: 100 },
        { p: 'eritritol', g: 25 },
        { p: 'vanilie', g: 5, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 15, active: 15, chill: 480 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['bol mare', '5 borcane cu capac', 'lingura'],

      steps: [
        'Într-un bol mare, amestecă întâi cazeina cu laptele RECE, puțin câte puțin. Toarnă 150 ml, freacă până e pastă, apoi restul. Dacă torni tot laptele deodată peste 90 g de cazeină, faci cocoloașe pe care nu le mai desfaci.',
        'Adaugă iaurtul, eritritolul, vanilia și sarea. Amestecă.',
        'Pune ovăzul și chia. Amestecă 30 de secunde — chia se așează la fund dacă nu insiști.',
        'Împarte în 5 borcane, aproximativ 270 g în fiecare. Nu le umple până sus: amestecul se umflă peste noapte.',
        'Pune 20 g de gem deasupra fiecăruia, fără să amesteci. Rămâne un strat separat și fiecare borcan arată a desert, nu a terci.',
        'Capac, frigider, minimum 8 ore. Dimineața sunt gata.'
      ],
      tips: [
        'Patru zile, nu șapte, și nu ne prefacem altfel. În ziua a cincea ovăzul devine mucilaginos și chia amară. Dacă vrei acoperire pe toată săptămâna, fă trei borcane duminica și trei miercurea — tot 15 minute de fiecare dată.',
        'Cazeina e obligatorie aici, nu preferință. Zerul lăsat 8 ore în lapte se separă și dimineața găsești zeamă deasupra și un strat lipicios dedesubt. Cazeina leagă apa și se îngroașă exact ca o budincă.',
        'La 319 kcal e cea mai calorică porție din fișier, dar e și singura de mărimea unui mic dejun întreg: 270 g și 29 g de proteină. Ca desert e prea mult; ca masă e corect.',
        'Gemul deasupra, nu amestecat. E o chestiune de moral: un borcan cu un strat roșu deasupra se mănâncă, o pastă maro uniformă rămâne în frigider.'
      ],
      swaps: [
        { label: 'Fără lactate', text: 'Băutură de soia neîndulcită în loc de lapte și iaurt de soia în loc de cel grecesc. Cobori la ~22 g proteină pe borcan.' },
        { label: 'Cu ciocolată', text: '25 g de cacao în amestecul de bază și fără gem. Devin borcane de budincă de ciocolată.' }
      ],
      warnings: [
        'Conține lactate (lapte, iaurt, cazeină) și ovăz.',
        'Are 5 g de eritritol pe borcan, plus zahărul din fructele gemului.',
        'Cele 8 g de chia pe borcan aduc mult balast. Dacă nu mănânci de obicei fibre, începe cu jumătate de borcan — altfel o simți.'
      ],

      taste: {
        sweetness: 58,
        richness: 66,
        texture: 78,
        authenticity: 70
      },

      vs: {
        name: 'Iaurt cu cereale și fructe la borcan, comercial',
        grams: 250, kcal: 280, protein: 8, carbs: 42, sugars: 28, fat: 8
      },
      vsSource: 'Valori tipice de etichetă pentru desert lactat cu cereale la borcan, 250 g, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 5 },

      storage: 'Frigider, 4 zile, cu capacul pus. Ziua a cincea nu mai e bună — ovăzul se face cleios. Nu se congelează: se separă la dezghețare.',

      mealFit: { desert: 3, gustare: 4, micDejun: 5, postAntrenament: 4, seara: 3 },

      dataConfidence: 'medium'
    },

    {
      id: 'ds-batch-prajitura-ciocolata-tava',
      name: 'Prăjitură de ciocolată la tavă, nouă porții',
      emoji: '🍰',

      family: 'batch',
      craving: 'ciocolata',
      servings: 9,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 400 },
        { id: 'd-oua-gaina-l', g: 150 },
        { id: 's-casein-micellar-ostrovit', g: 90 },
        { p: 'cacao', g: 45 },
        { p: 'faina-ovaz', g: 80 },
        { p: 'unt-arahide', g: 50 },
        { p: 'eritritol', g: 80 },
        { p: 'fulgi-ciocolata', g: 45 },
        { p: 'praf-copt', g: 6, free: true },
        { p: 'vanilie', g: 5, free: true },
        { p: 'sare', g: 1.5, free: true }
      ],

      time: { total: 45, active: 15, chill: 60 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['bol mare', 'blender vertical', 'tava 20x20', 'hartie de copt'],

      steps: [
        'Cuptor la 165°C. Tapetează o tavă de 20x20 cm cu hârtie de copt, lăsând margini care ies afară — de ele o să tragi prăjitura din tavă.',
        'Pasează brânza de vaci cu blenderul vertical, 20 de secunde, până nu mai are niciun grunj. Nu sări peste pasul ăsta: grunjii de brânză rămân grunji și după coacere.',
        'Adaugă ouăle, untul de arahide și vanilia. Blenduiește încă 15 secunde.',
        'Într-un alt vas amestecă uscatele: cazeina, cacaoa, făina de ovăz, eritritolul, praful de copt și sarea. Apoi toarnă-le peste amestecul umed și amestecă CU LINGURA, nu cu blenderul — nu vrei să bați aer în el.',
        'Amestecă fulgii de ciocolată. Toarnă în tavă și nivelează.',
        'Coace 28-32 de minute la 165°C. Scobitoarea trebuie să iasă cu firimituri umede lipite de ea, nu curată. Curată înseamnă că ai copt-o prea mult și mâine va fi uscată.',
        'Lasă în tavă până e complet rece — cel puțin o oră. Caldă se rupe la tăiere.',
        'Trage-o afară de hârtie și taie 9 pătrate. Se taie cel mai curat cu un cuțit lung, șters între tăieturi.'
      ],
      tips: [
        'Brânza de vaci slabă face aici munca pe care în rețeta clasică o fac untul și zahărul: dă volum, umezeală și structură, cu 81 kcal la 100 g în loc de 740. Din cele 400 g de brânză vine mai mult de o treime din proteina totală.',
        '165°C și nu mai mult, plus scoaterea cu firimituri pe scobitoare. O prăjitură cu cazeină scoasă la momentul „perfect" e o prăjitură uscată a doua zi, pentru că se mai gătește 5 minute din căldura proprie a tăvii.',
        'La ~11 g de polioli pe porție e cea mai încărcată din fișier. E sub pragul de 15 g la care apar de obicei probleme, dar dacă mănânci două pătrate la rând ai trecut de 20 g — asta e limita practică, nu foamea.',
        'Cele 200 kcal pe porție de ~105 g o fac cea mai eficientă rețetă din fișier. Motivul e simplu și nu e magie: brânză slabă în loc de unt, eritritol în loc de zahăr.'
      ],
      swaps: [
        { label: 'Fără arahide', text: '50 g iaurt grecesc în loc de unt de arahide. Cobori cu ~28 kcal pe porție, dar iese mai puțin fragedă.' },
        { label: 'Fără ovăz', text: '60 g făină de migdale în loc de făină de ovăz. Textura e mai densă și mai umedă, aproape de brownie.' }
      ],
      warnings: [
        'Conține lactate (brânză de vaci, cazeină), ou, arahide și ovăz.',
        'Are aproximativ 11 g de polioli pe porție (80 g de eritritol plus poliolii din fulgii de ciocolată, împărțiți la 9). O porție e în regulă pentru majoritatea oamenilor; două la rând, mai puțin.'
      ],

      taste: {
        sweetness: 64,
        richness: 72,
        texture: 78,
        authenticity: 76
      },

      vs: {
        name: 'Prăjitură cu ciocolată de cofetărie, felie',
        grams: 100, kcal: 400, protein: 5, carbs: 45, sugars: 35, fat: 22
      },
      vsSource: 'Valori tipice pentru felie de tort/prăjitură cu ciocolată din vitrina de cofetărie, 2026',

      sweetener: { kind: 'eritritol', gPerServing: 8.9 },

      storage: 'Cutie etanșă la frigider, 5 zile — brânza de vaci e limita, nu prăjitura. La congelator 2 luni, tăiată în pătrate, cu hârtie de copt între ele; se dezgheață în 20 de minute pe blat sau 25 de secunde la microunde.',

      mealFit: { desert: 5, gustare: 5, micDejun: 3, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
    }

  ];

  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
