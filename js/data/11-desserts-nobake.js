/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI FĂRĂ CUPTOR ȘI DIN CONGELATOR
 * File: js/data/11-desserts-nobake.js
 *
 * 10 × `no-bake` (se amestecă și se răcește) + 6 × `frozen`.
 * Contractul e în docs/DESSERT-SCHEMA.md. Trei lucruri se repetă aici și
 * merită spuse o dată, în capul fișierului:
 *
 * 1. MACRO-URILE NU SUNT SCRISE DE MÂNĂ. Fiecare rând din `ing` trimite fie
 *    către un `id` din atlas, fie către o cheie din `js/data/10-dessert-pantry.js`.
 *    Nicio intrare nu are `kcal`, `protein`, `carbs` sau `fat` la nivel de rețetă.
 *
 * 2. TEXTURA E PROBLEMA, NU MACRO-URILE. Un desert proteic ratat e aproape
 *    întotdeauna ratat la textură, nu la cifre. Regulile pe care le folosesc
 *    rețetele de mai jos:
 *      - pudra e IZOLAT DE SOIA (~88% proteină, fără lactoză). Leagă apa și
 *        îngroașă în lichid rece: o parte pudră la 5-6 părți lichid și 5
 *        minute de așteptare dau o cremă de lingură. Se face întâi pastă cu
 *        puțin lichid rece, altfel rămân cocoloașe;
 *      - are un gust ușor „de fasole", pe care cacao, cafeaua, vanilia,
 *        fructele și un vârf de sare îl acoperă bine;
 *      - face spumă, dar mai puțină și mai instabilă decât izolatul de zer;
 *        la frig și la congelare se poartă fără probleme;
 *      - brânza de vaci trecută prin sită și skyr-ul bat orice pudră la textură,
 *        pentru că aduc proteină deja hidratată, nu praf care trebuie umflat;
 *      - laptele praf degresat aduce solide non-grase de lapte, exact ce
 *        folosește industria ca să nu iasă înghețata cu cristale.
 *
 * 3. ÎNGHEȚATA PROTEICĂ SE FACE PIATRĂ. Motivul e mecanic: grăsimea și zahărul
 *    din înghețata normală țin apa în picături mici și coboară punctul de
 *    îngheț. Scoase amândouă, rămâne apă curată care se face un bloc de gheață.
 *    Fiecare rețetă `frozen` de mai jos declară explicit ce folosește contra:
 *    grăsime adăugată, miere (zahăr invertit: glucoză și fructoză separate,
 *    deci pe gram coboară punctul de îngheț mai mult decât zahărul obișnuit),
 *    solide de lapte, amestecare la intervale, strat subțire și temperare
 *    înainte de servit.
 *
 * 4. DULCELE VINE DOAR DIN MIERE, FRUCTE ȘI CURMALE. Nimic sintetic, nimic
 *    „zero". Pagina le numără pe toate la zahăr adăugat, iar deserturile sunt
 *    mai puțin dulci decât varianta de cofetărie — intenționat.
 *
 * Prețurile din tot proiectul sunt ESTIMĂRI neconfirmate. Nimic de aici nu e
 * o afirmație de sănătate: sunt deserturi, cu cifrele lor lângă cifrele
 * lucrului pe care îl înlocuiesc.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    /* =====================================================================
     * 1 — CHEESECAKE LA BORCAN CU ZMEURĂ
     * ================================================================== */
    {
      id: 'ds-cheesecake-borcan-zmeura',
      name: 'Cheesecake la borcan cu zmeură, fără coacere',
      emoji: '🍰',

      family: 'no-bake',
      craving: 'cremos',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 250 },
        { id: 'd-skyr-natural-pilos', g: 150 },
        { p: 'miere', g: 14 },
        { p: 'lamaie', g: 12 },
        { p: 'zmeura', g: 120 },
        { id: 'v-fulgi-ovaz-mari', g: 30 },
        { id: 'v-unt-arahide-100', g: 15 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 200, active: 12, chill: 180 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['2 borcane de 300 ml', 'sită deasă', 'bol', 'furculiță', 'spatulă'],

      steps: [
        'Trece brânza de vaci prin sita deasă, direct în bol. Pasul ăsta durează două minute și e singura diferență între „cremă de cheesecake" și „brânză cu granule".',
        'Amestecă mierea cu zeama de lămâie, apoi cu brânza cernută, skyr-ul, coaja de lămâie, vanilia și vârful de sare. Bate cu furculița 60-90 de secunde, până crema e uniformă.',
        'Baza: freacă fulgii de ovăz cu untul de arahide între degete până se fac firimituri umede. Apasă-le cu dosul lingurii pe fundul celor două borcane.',
        'Toarnă crema peste bază, bate borcanul de două ori de blatul mesei ca să iasă bulele de aer, și netezește.',
        'Zdrobește jumătate din zmeură cu furculița și întinde-o deasupra; pune restul întreagă peste ea.',
        'Frigider minimum 3 ore, ideal peste noapte. Crema se strânge, baza se umezește exact cât trebuie și acreala de lămâie se rotunjește.'
      ],

      tips: [
        'Sita e ingredientul secret, nu pudra. Brânza de vaci trecută prin sită are proteina deja hidratată — dă o cremă mai netedă decât orice pudră amestecată cu iaurt, fără gustul de pudră.',
        'Rețeta nu are pudră intenționat. Izolatul de soia ar aduce proteină în plus, dar și gustul lui ușor „de fasole", pe care lămâia și zmeura nu-l acoperă la fel de bine ca cacaoa.',
        'Mierea pusă direct în brânza rece rămâne ațe lipicioase pe fundul bolului. Dizolvată întâi în zeama de lămâie, intră uniform în cremă.',
        'Zmeura zdrobită dedesubt și întreagă deasupra nu e estetică: stratul zdrobit dă zeamă care se infiltrează în cremă, cel întreg dă aciditate în mușcătură.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Aceeași cantitate de tahini sau de unt de migdale. Tahini schimbă baza spre amărui, ceea ce merge surprinzător de bine cu zmeura.' },
        { label: 'Mai cremos', text: 'Înlocuiește 50 g de skyr cu 50 g de cremă de brânză light. Adaugă ~40 kcal pe porție și taie complet senzația de „brânză".' },
        { label: 'Alte fructe', text: 'Vișine congelate dezghețate și scurse. Sunt mai ieftine și mai acre — cel mai bun raport preț/efect din tot rândul de fructe.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, skyr) și arahide (untul de arahide din bază).',
        'Conține ovăz: dacă eviți glutenul, ia fulgi certificați fără gluten — ovăzul obișnuit e contaminat la moară.',
        '7 g de miere pe porție, adică ~6 g de zahăr adăugat. E mai puțin dulce decât un cheesecake de cofetărie, intenționat — zmeura și lămâia fac restul.'
      ],

      taste: { sweetness: 62, richness: 58, texture: 84, authenticity: 72 },

      vs: {
        name: 'Cheesecake de cofetărie',
        grams: 120, kcal: 380, protein: 7, carbs: 34, sugars: 27, fat: 24
      },
      vsSource: 'Valori tipice de etichetă pentru cheesecake ambalat / porție de cofetărie, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 7 },

      storage: 'Frigider, 3 zile, cu capacul pus. Baza se înmoaie de la o zi la alta — a doua zi e mai bună, a treia e moale. Nu se congelează: la dezghețare brânza se separă și lasă apă.',

      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 2 — MOUSSE DE CIOCOLATĂ PROTEIC CU ALBUȘ
     * ================================================================== */
    {
      id: 'ds-mousse-ciocolata-cazeina',
      name: 'Mousse de ciocolată proteic, cu albuș bătut',
      emoji: '🍫',

      family: 'no-bake',
      craving: 'ciocolata',
      servings: 2,

      ing: [
        { id: 's-soy-protein-isolate', g: 40 },
        { id: 'd-lapte-15', g: 180 },
        { p: 'cacao', g: 14 },
        { id: 'd-albus-lichid', g: 100 },
        { p: 'miere', g: 10 },
        { p: 'ciocolata-neagra', g: 10 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 130, active: 10, chill: 120 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['mixer de mână', 'două boluri', 'spatulă', 'răzătoare'],

      steps: [
        'Cerne cacaoa peste izolatul de soia, într-un bol. Cacaoa are cocoloașe care nu se mai desfac niciodată dacă intră direct în lichid.',
        'Toarnă întâi doar 40 ml de lapte rece și freacă o pastă groasă, fără cocoloașe. Apoi adaugă restul laptelui în două reprize. Lasă 5 minute: soia leagă apa și amestecul se îngroașă. Dacă după 5 minute e tot curgător, bate 1 g de gumă xantan.',
        'În al doilea bol, bate albușul pasteurizat până face vârfuri moi, apoi toarnă jumătate din miere în fir subțire, cu mixerul pornit, și bate până vârfurile se îndoaie la scoaterea telului — 3-4 minute în total. Restul mierii merge în crema de cacao.',
        'Încorporează albușul în crema de cacao în trei tranșe, cu mișcări de jos în sus. Prima tranșă o amesteci brutal, ca să subțiezi crema; ultimele două delicat, ca să nu scoți aerul.',
        'Împarte în două pahare, rade ciocolata neagră deasupra și dă la frigider 2 ore. Mousse-ul se mai strânge la rece, pe măsură ce pudra leagă apă.'
      ],

      tips: [
        'Raportul care funcționează e 1 parte izolat de soia la 4-5 părți lichid. La 1:8 rămâne shake, la 1:3 se face chit. Soia îngroașă mai puțin decât cazeina din rețetele americane, de aceea aici raportul e ceva mai strâns.',
        'Albușul bătut aduce volum fără nicio calorie și e ceea ce transformă o budincă densă în mousse. Folosește albuș lichid pasteurizat de la raft — e tratat termic, deci se poate consuma nefiert.',
        'Nu bate albușul până la vârfuri tari: la mousse rece, vârfurile tari se rup în bucăți albe care rămân vizibile în cremă. Vârfuri moi înseamnă că se topesc în amestec.',
        'Cele 14 g de cacao aduc și ~2,7 g de proteină, dar mai ales acoperă gustul ușor „de fasole" al soiei și fac ca 5 g de miere pe porție să pară suficiente.'
      ],

      swaps: [
        { label: 'Fără ou', text: 'Sari peste albuș și pune 40 g de iaurt grecesc 0%. Iese budincă, nu mousse — mai densă, cu ~15% mai puțin volum în pahar.' },
        { label: 'Mai intens', text: 'O linguriță rasă de cafea instant dizolvată în lapte. Nu se simte a cafea, se simte a ciocolată mai neagră.' },
        { label: 'Fără lactate', text: 'Băutură de soia neîndulcită în locul laptelui. Pudra e deja vegetală, deci mousse-ul devine complet fără lactate, cu ~1 g mai puțină proteină pe porție.' }
      ],

      warnings: [
        'Conține soia (izolat proteic), lactate (lapte) și ou (albuș pasteurizat).',
        'Albușul se consumă necoagulat: folosește numai albuș lichid PASTEURIZAT, nu ouă crude sparte în casă.',
        'Are cacao și ciocolată neagră: ~10-15 mg de cofeină pe porție plus teobromină. Puțin, dar dacă ești sensibil, nu e desertul de la 23:00.'
      ],

      taste: { sweetness: 60, richness: 62, texture: 88, authenticity: 78 },

      vs: {
        name: 'Mousse de ciocolată de cofetărie',
        grams: 120, kcal: 330, protein: 5, carbs: 28, sugars: 26, fat: 22
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru mousse de ciocolată, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 5 },

      storage: 'Frigider, 2 zile, acoperit cu folie lipită de suprafață. După 48 de ore albușul începe să lase apă pe fund și mousse-ul se lasă cu vreo doi centimetri.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 3, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 3 — BUDINCĂ DE CHIA CU VIȘINE
     * ================================================================== */
    {
      id: 'ds-budinca-chia-visine',
      name: 'Budincă de chia cu vișine și strat de skyr',
      emoji: '🍒',

      family: 'no-bake',
      craving: 'fructat',
      servings: 2,

      ing: [
        { p: 'chia', g: 40 },
        { id: 'd-lapte-15', g: 220 },
        { id: 's-soy-protein-isolate', g: 20 },
        { id: 'd-skyr-natural-pilos', g: 150 },
        { p: 'visine-congelate', g: 120 },
        { p: 'miere', g: 8 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 490, active: 5, chill: 480 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['două borcane', 'lingură'],

      steps: [
        'Freacă izolatul de soia cu 40 ml de lapte până e o pastă fără cocoloașe. Pune-o în borcane cu chia, restul laptelui, jumătate din miere și vanilia. Pune capacul și scutură 15 secunde.',
        'Așteaptă 10 minute și mai scutură o dată. Primul amestec nu e opțional: chia se lipește în cocoloașe pe fundul borcanului dacă o lași nemișcată în primele minute.',
        'Frigider peste noapte, minimum 6 ore. Semințele absorb de aproximativ zece ori greutatea lor în lichid — de asta raportul e 40 g chia la 220 g lapte, nu mai puțin.',
        'Dimineața, scoate vișinele din congelator și lasă-le 15 minute să se dezghețe parțial; zdrobește-le grosier cu furculița împreună cu restul de miere.',
        'Amestecă skyr-ul până devine cremos și pune-l ca strat peste budincă, apoi vișinele deasupra.'
      ],

      tips: [
        'Pudra în budinca de chia nu e doar pentru proteină în plus, e pentru gura de senzație: chia singură dă o textură de „ochi de broască", iar izolatul de soia îngroașă lichidul dintre semințe și o face să pară budincă.',
        'Vișinele congelate bat orice fruct proaspăt aici, pentru că zeama pe care o lasă la dezghețare e acidă și intră în budincă. Cireșele sunt prea dulci și dispar.',
        'Dacă dimineața e prea groasă, o lingură de lapte și 20 de secunde de amestec o readuc. Prea subțire nu se repară — chia nu mai absoarbe după ce s-a hidratat.',
        '40 g de chia înseamnă ~13,5 g de fibre în total, ~7 g pe porție. Dacă nu mănânci de obicei atât, prima dată fă rețeta cu 30 g.'
      ],

      swaps: [
        { label: 'Fără pudră', text: '80 g de skyr în plus în locul izolatului de soia. Proteina scade cu ~7 g pe porție, dar rețeta nu mai are niciun ingredient de magazin de suplimente.' },
        { label: 'Ciocolată', text: '10 g de cacao odată cu pudrele și vișinele înlocuite cu zmeură. Iese o budincă tip „black forest".' },
        { label: 'Fără lactate', text: 'Băutură de soia în locul laptelui și iaurt de soia în locul skyr-ului; pudra e deja vegetală. Rămâne o budincă bună, dar cu ~7 g mai puțină proteină pe porție.' }
      ],

      warnings: [
        'Conține soia (izolat proteic) și lactate (lapte, skyr).',
        'Aport mare de fibre: ~7 g pe porție doar din chia. Bea apă și nu o combina în aceeași zi cu alte două deserturi bogate în fibre.'
      ],

      taste: { sweetness: 55, richness: 45, texture: 70, authenticity: 60 },

      vs: {
        name: 'Budincă la pahar cu fructe (ambalată)',
        grams: 150, kcal: 195, protein: 4, carbs: 30, sugars: 24, fat: 6
      },
      vsSource: 'Valori tipice de etichetă pentru budincă/desert lactat la pahar cu fructe, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 4 },

      storage: 'Frigider, 4 zile, dar pune stratul de skyr și vișinele abia în ziua în care mănânci. Budinca de chia simplă e cel mai stabil desert din listă.',

      mealFit: { desert: 4, gustare: 5, micDejun: 5, postAntrenament: 2, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 4 — TIRAMISU DECONSTRUIT LA PAHAR
     * ================================================================== */
    {
      id: 'ds-tiramisu-deconstruit',
      name: 'Tiramisu deconstruit la pahar',
      emoji: '☕',

      family: 'no-bake',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 200 },
        { id: 'd-mascarpone', g: 30 },
        { id: 's-soy-protein-isolate', g: 15 },
        { p: 'miere', g: 10 },
        { p: 'piscoturi', g: 30 },
        { p: 'cacao', g: 4 },
        { p: 'cafea-instant', g: 4, free: true },
        { p: 'apa', g: 70, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 135, active: 12, chill: 120 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['două pahare late', 'sită deasă', 'bol', 'spatulă', 'sită mică pentru cacao'],

      steps: [
        'Fă cafeaua: 4 g de cafea instant în 70 ml de apă clocotită, apoi las-o să se răcească complet. Cafea caldă peste pișcoturi înseamnă terci.',
        'Trece brânza de vaci prin sită, apoi freac-o cu mascarponele până dispare orice granulă. Mascarponele e doar 30 g, dar el dă grăsimea care face crema să se simtă a tiramisu, nu a brânză îndulcită.',
        'Adaugă izolatul de soia, mierea și vanilia. Amestecă 60 de secunde; crema trebuie să cadă de pe spatulă în panglică, nu în picături.',
        'Rupe pișcoturile în două. Înmoaie-le în cafeaua rece o secundă pe fiecare parte — mai mult și se desfac.',
        'Alternează în pahare: pișcoturi, cremă, pișcoturi, cremă. Termină cu cremă și netezește.',
        'Frigider 2 ore, apoi cerne cacaoa deasupra cu sita mică, chiar înainte de servit. Cacaoa pusă din timp absoarbe umezeală și se face pastă.'
      ],

      tips: [
        'Raportul care contează e brânză de vaci cernută 200 : mascarpone 30. Sub 30 g de mascarpone crema devine acră și „de dietă"; peste 60 g nu mai are rost rețeta, ajungi la macro-urile tiramisului obișnuit.',
        'Izolatul de soia aici lucrează ca stabilizator, nu ca sursă de proteină: leagă apa pe care brânza de vaci o lasă în pahar după câteva ore. Fără el, a doua zi găsești o baltă gălbuie pe fund. Cafeaua și cacaoa îi acoperă complet gustul.',
        'Nu bate crema cu mixerul. Brânza de vaci bătută mecanic se subțiază — proteina se rearanjează și eliberează zer. Spatula și răbdarea dau o cremă mai densă.',
        'Cacaoa se cerne, nu se presară. Un strat de 1 mm cernut acoperă uniform; aceeași cantitate presărată face pete amare.'
      ],

      swaps: [
        { label: 'Fără gluten', text: 'Bucăți de clătită proteică rece în loc de pișcoturi, sau fulgi de ovăz certificați fără gluten înmuiați în cafea 30 de secunde.' },
        { label: 'Fără cofeină', text: 'Cicoare solubilă sau cacao dizolvată în apă caldă. Aroma se schimbă spre „ciocolată cu lapte", dar structura rămâne.' },
        { label: 'Mai puține calorii', text: 'Scoate mascarponele și pune 30 g de iaurt grecesc 10%. Scazi ~35 kcal pe porție și pierzi cam o treime din senzația de bogat.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, mascarpone), soia (izolat proteic) gluten și ou (pișcoturi).',
        'Conține cofeină: ~50-70 mg pe porție din cafeaua instant, plus cacao. Nu e un desert de seară târziu.'
      ],

      taste: { sweetness: 58, richness: 66, texture: 80, authenticity: 74 },

      vs: {
        name: 'Tiramisu, porție de restaurant',
        grams: 150, kcal: 430, protein: 6, carbs: 36, sugars: 28, fat: 28
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tiramisu porționat, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 5 },

      storage: 'Frigider, 2 zile, acoperit. Pișcoturile se înmoaie complet până a doua zi — dacă îi vrei cu structură, mănâncă-l în primele 4 ore.',

      mealFit: { desert: 5, gustare: 3, micDejun: 2, postAntrenament: 3, seara: 1 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 5 — BILE ENERGIZANTE CU ARAHIDE, CACAO ȘI OREZ EXPANDAT
     * ================================================================== */
    {
      id: 'ds-bile-energizante-arahide',
      name: 'Bile energizante cu arahide, cacao și orez expandat',
      emoji: '⚫',

      family: 'no-bake',
      craving: 'crocant',
      servings: 4,

      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 80 },
        { id: 'v-unt-arahide-100', g: 60 },
        { id: 's-soy-protein-isolate', g: 50 },
        { p: 'curmale', g: 60 },
        { p: 'orez-expandat', g: 20 },
        { p: 'cacao', g: 10 },
        { id: 'd-lapte-15', g: 40 },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 60, active: 15, chill: 45 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['robot de bucătărie sau tocător', 'bol', 'tavă', 'hârtie de copt'],

      steps: [
        'Scoate sâmburii din curmale și ține-le 10 minute în apă fierbinte dacă sunt uscate. Curmalele tari nu se leagă, se sfărâmă.',
        'Toacă în robot curmalele cu untul de arahide până se face o pastă lipicioasă, 30-40 de secunde.',
        'Adaugă fulgii de ovăz, izolatul de soia, cacaoa, sarea și vanilia. Pornește robotul în impulsuri scurte — dacă îl ții pornit, se încălzește și pasta devine unsuroasă.',
        'Toarnă laptele o lingură pe rând, cu robotul pornit, până compoziția se strânge într-o bilă mare pe pereți. Poate să nu-ți trebuiască tot laptele: umiditatea curmalelor variază enorm.',
        'Mută în bol și amestecă orezul expandat cu mâna, nu în robot. În robot se face praf și pierzi exact crocanțele pentru care e în rețetă.',
        'Formează 12 bile (aproximativ 28-30 g fiecare), pune-le pe hârtie de copt și dă-le 45 de minute la frigider ca să se întărească. O porție = 3 bile.'
      ],

      tips: [
        'Izolatul de soia absoarbe multă apă și usucă pasta. E singura rețetă din listă unde asta e un avantaj: pasta de curmale e prea lipicioasă fără el. Dacă bilele se crapă când le formezi, mai adaugă o lingură de lapte.',
        'Orezul expandat adăugat manual la final e diferența între „bilă de ovăz" și ceva ce chiar scrâșnește. Se înmoaie în 3-4 zile, deci bilele sunt cel mai bune în primele 48 de ore.',
        'Dacă amestecul ți se lipește de palme, umezește-ți mâinile cu apă rece înainte de fiecare bilă. Nu adăuga ovăz — vei ajunge la ceva uscat și făinos.',
        'Curmalele aduc ~10 g de zahăr pe porție. Nu e o rețetă „fără zahăr", e o rețetă cu zahăr din fruct: curmalele îndulcesc și leagă, fără miere sau zahăr în plus.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Tahini în aceeași cantitate, plus 3 g de cacao în plus ca să echilibreze amăreala susanului.' },
        { label: 'Fără pudră proteică', text: '60 g de semințe de dovleac măcinate în locul izolatului de soia. Proteina scade cu ~4 g pe porție, dar textura devine mai interesantă.' },
        { label: 'Fără curmale', text: '40 g de gem fără zahăr adăugat plus 10 g de făină de cocos pentru absorbție. Iese mai puțin dulce și mai fragil.' }
      ],

      warnings: [
        'Conține arahide, soia (izolat proteic), lactate (lapte) și ovăz — dacă eviți glutenul, cere fulgi certificați.',
        'N-are miere sau zahăr, dar are ~10 g de zahăr pe porție din curmale. „Fără zahăr adăugat" nu înseamnă fără zahăr.'
      ],

      taste: { sweetness: 65, richness: 70, texture: 78, authenticity: 80 },

      vs: {
        name: 'Bomboane energizante ambalate (energy balls de raft)',
        grams: 80, kcal: 360, protein: 7, carbs: 45, sugars: 30, fat: 16
      },
      vsSource: 'Valori tipice de etichetă pentru energy balls / praline cu fructe uscate, 2026 — nu un produs anume.',

      sweetener: { kind: 'curmale', gPerServing: 15 },

      storage: 'Frigider, cutie închisă, 7 zile. Congelator 2 luni — se mănâncă direct din congelator, e singurul desert din listă la care asta funcționează fără temperare, pentru că grăsimea din arahide nu se face gheață.',

      mealFit: { desert: 4, gustare: 5, micDejun: 3, postAntrenament: 5, seara: 2 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 6 — TRIFLE CU VIȘINE ȘI PIȘCOTURI
     * ================================================================== */
    {
      id: 'ds-trifle-visine-biscuiti',
      name: 'Trifle în straturi cu vișine și pișcoturi',
      emoji: '🥃',

      family: 'no-bake',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-iaurt-grecesc-olympus-0', g: 200 },
        { id: 's-soy-protein-isolate', g: 25 },
        { p: 'visine-congelate', g: 150 },
        { p: 'piscoturi', g: 30 },
        { p: 'miere', g: 8 },
        { p: 'amidon-porumb', g: 5 },
        { p: 'scortisoara', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 100, active: 10, chill: 90 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['două pahare înalte', 'crăticioară mică', 'bol', 'spatulă'],

      steps: [
        'Pune vișinele congelate în crăticioară cu jumătate din miere și 2 linguri de apă. Foc mic, 6-8 minute, până lasă zeamă.',
        'Amestecă amidonul cu o lingură de apă rece și toarnă-l peste vișine, amestecând continuu 30 de secunde. Se leagă imediat într-un sos gros. Lasă-l să se răcească complet — sos cald peste iaurt înseamnă iaurt tăiat.',
        'Freacă izolatul de soia cu 3 linguri de iaurt până e o pastă fără cocoloașe, apoi bate restul iaurtului, restul mierii și vanilia. Lasă 5 minute: amestecul se îngroașă; dacă rămâne curgător, mai lasă-l 5 minute la frigider.',
        'Rupe pișcoturile, dar nu de tot: vrei bucăți de mărimea unui bob de porumb, nu pesmet.',
        'Straturi în pahar: pișcoturi, cremă, sos de vișine, pișcoturi, cremă, sos. Termină cu vișine și un praf de scorțișoară.',
        'Frigider 90 de minute. Sub o oră, straturile încă nu s-au așezat și trifle-ul se amestecă la prima lingură.'
      ],

      tips: [
        'Amidonul e ce transformă vișinele congelate din „fructe cu apă" în sos care stă în strat. 5 g la 150 g de fructe e raportul: cu 10 g iese gelatinos și mat.',
        'Iaurtul grecesc 0% singur e prea lichid pentru straturi. Izolatul de soia leagă apa și îl transformă în cremă care ține un strat de sos deasupra fără să-l lase să se scufunde — asta e toată treaba lui aici. Vișinele și scorțișoara îi acoperă gustul.',
        'Pune pișcoturile în ultimele 15 minute dacă le vrei cu structură. Dacă le vrei înmuiate, ca într-un trifle englezesc adevărat, pune-le de la început și lasă-l peste noapte.',
        'O linguriță de amidon în plus și un sos de vișine cald peste iaurt sunt cele două moduri clasice de a rata rețeta asta.'
      ],

      swaps: [
        { label: 'Cu skyr', text: '200 g de skyr în locul iaurtului grecesc. Mai acru, mai dens, cu ~2 g mai multă proteină pe porție.' },
        { label: 'Fără gluten', text: 'Fulgi de ovăz certificați fără gluten, prăjiți 3 minute în tigaie uscată, în locul pișcoturilor.' },
        { label: 'Alt fruct', text: 'Zmeură sau afine, aceeași cantitate. Zmeura cere o linguriță de miere în plus, afinele una mai puțin.' }
      ],

      warnings: [
        'Conține lactate (iaurt grecesc), soia (izolat proteic) gluten și ou (pișcoturi).'
      ],

      taste: { sweetness: 60, richness: 52, texture: 82, authenticity: 76 },

      vs: {
        name: 'Prăjitură cu vișine și frișcă, porție de cofetărie',
        grams: 150, kcal: 350, protein: 4, carbs: 38, sugars: 30, fat: 20
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tort sau trifle cu fructe și frișcă, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 4 },

      storage: 'Frigider, 3 zile. Sosul de vișine se poate face separat și ține 5 zile într-un borcan; asta e partea care ia timp.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 7 — CREMĂ DE LĂMÂIE CU AFINE
     * ================================================================== */
    {
      id: 'ds-crema-lamaie-afine',
      name: 'Cremă rece de lămâie cu afine, fără pudră proteică',
      emoji: '🍋',

      family: 'no-bake',
      craving: 'fructat',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 200 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 100 },
        { id: 'd-lapte-praf-degresat', g: 15 },
        { p: 'lamaie', g: 30 },
        { p: 'miere', g: 14 },
        { p: 'afine', g: 80 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 66, active: 6, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['sită deasă', 'bol', 'răzătoare fină', 'două cupe'],

      steps: [
        'Rade coaja de la o jumătate de lămâie ÎNAINTE să o storci. Coaja are uleiurile aromate; zeama are doar acidul.',
        'Trece brânza de vaci prin sită, apoi amestec-o cu iaurtul grecesc și laptele praf degresat până e complet netedă.',
        'Amestecă mierea în zeama de lămâie, apoi adaug-o cu coaja în două reprize, amestecând bine între ele. Turnat tot odată, acidul „șochează" proteina și crema se face granulată.',
        'Frigider o oră. Laptele praf are nevoie de timp să se hidrateze complet — asta e diferența dintre o cremă cu gust de praf și una netedă.',
        'Servește cu afinele deasupra, zdrobind câteva cu furculița ca să lase culoare.'
      ],

      tips: [
        'Rețeta asta există ca să arate că nu ai nevoie de pudră: 15 g de lapte praf degresat aduc ~5,4 g de proteină și, mai important, solidele de lapte care dau crema. Costă o fracțiune din pudra proteică și nu are gust de aromă artificială.',
        'Nici izolatul de soia nu-și are locul aici: lămâia nu-i acoperă gustul „de fasole" cum o face cacaoa, iar crema ar ieși cu iz de pudră.',
        'Acidul se adaugă întotdeauna la final și în reprize. Aceeași cantitate de lămâie turnată dintr-o dată peste brânză rece face o cremă cu granule pe care nu o mai repari.',
        'Sub 170 kcal pe porție cu 25 g de proteină: e cel mai „ieftin" desert din listă ca și calorii, tocmai pentru că nu are nici grăsime adăugată, nici bază de biscuiți.'
      ],

      swaps: [
        { label: 'Mai bogat', text: '30 g de cremă de brânză light în plus. Adaugă ~22 kcal pe porție și duce textura spre lemon cheesecake.' },
        { label: 'Cu portocală', text: 'Coajă de portocală și 20 g zeamă în locul lămâii, plus 4 g de miere mai puțin — portocala e deja dulce.' },
        { label: 'Mai puțin dulce', text: '8 g de miere în loc de 14. Scazi ~9 kcal pe porție; lămâia iese ascuțită, ca la o tartă franțuzească.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, iaurt grecesc, lapte praf).',
        '7 g de miere pe porție, ~6 g de zahăr adăugat. Cu lămâie multă, tentația e să mai pui — gustă după o oră la rece, aciditatea se îmblânzește.'
      ],

      taste: { sweetness: 58, richness: 40, texture: 80, authenticity: 68 },

      vs: {
        name: 'Tartă cu lămâie, porție de cofetărie',
        grams: 120, kcal: 370, protein: 4, carbs: 42, sugars: 30, fat: 20
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tartă sau cremă de lămâie de cofetărie, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 7 },

      storage: 'Frigider, 3 zile. Peste 3 zile aciditatea continuă să lucreze și crema începe să lase zer pe fund — se amestecă și se mănâncă, dar nu mai arată bine.',

      mealFit: { desert: 4, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 8 — „FLUFF" DE ZMEURĂ
     * ================================================================== */
    {
      id: 'ds-fluff-zmeura',
      name: '„Fluff" de zmeură — spumă de proteină de soia bătută',
      emoji: '☁️',

      family: 'no-bake',
      craving: 'cremos',
      servings: 2,

      ing: [
        { id: 's-soy-protein-isolate', g: 40 },
        { p: 'zmeura', g: 150 },
        { id: 'd-lapte-15', g: 150 },
        { p: 'guma-xantan', g: 1 },
        { p: 'miere', g: 8 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 8, active: 8, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['mixer de mână cu palete', 'bol înalt și îngust', 'spatulă'],

      steps: [
        'Scoate zmeura din congelator și las-o exact 5 minute. Trebuie să fie tare, dar nu betonată — dacă e complet dezghețată, spuma nu se ridică.',
        'Pune zmeura, izolatul de soia, guma xantan, mierea și vanilia în bolul înalt. Toarnă doar jumătate din lapte.',
        'Bate la viteză mică 30 de secunde, apoi la viteză maximă. Adaugă restul de lapte într-un fir subțire, pe marginea bolului.',
        'Bate 6-8 minute fără pauză. În primele 3 minute nu se întâmplă mare lucru, apoi volumul crește — cu soia, cam de 2 ori, nu de 3-4 ori ca la izolatul de zer din rețetele originale. Nu te opri la minutul 3.',
        'E gata când paletele lasă dâre care rămân vizibile 5 secunde. Toarnă imediat în două cupe și mănâncă imediat.'
      ],

      tips: [
        'Spus cinstit: rețeta originală de fluff e făcută pentru izolat de zer. Izolatul de soia face spumă mai bine decât mazărea sau orezul, dar mai puțină și mai instabilă decât zerul. Guma xantan e acolo ca să țină aerul cât de cât; fără ea, spuma se lasă în câteva minute.',
        'Bolul înalt și îngust nu e un moft: paletele trebuie să lovească același volum de amestec în mod repetat. Într-un bol lat, amestecul stă pe fund și nu prinde aer.',
        'Fluff-ul e singurul desert din listă care nu se păstrează. Cu soia, aerul iese în 10-20 de minute și rămâi cu o cremă roz. Se face și se mănâncă pe loc.',
        'Zmeura acră acoperă bine gustul ușor „de fasole" al soiei. Dacă tot îl simți, un vârf de sare și mai multă vanilie.'
      ],

      swaps: [
        { label: 'Cu căpșuni', text: 'Căpșuni congelate, aceeași cantitate. Fac o spumă puțin mai densă și mai dulce; zmeura rămâne mai bună pentru că aciditatea taie gustul de pudră.' },
        { label: 'Mai stabil', text: 'Adaugă 30 g de iaurt grecesc 0% după ce s-a ridicat spuma, amestecând delicat. Pierzi o parte din volum, dar spuma ține mai mult.' },
        { label: 'Fără lactate', text: 'Băutură de soia neîndulcită în locul laptelui; pudra e deja vegetală. Nu încerca cu proteină de mazăre sau orez — acelea aproape nu fac spumă.' }
      ],

      warnings: [
        'Conține soia (izolat proteic) și lactate (lapte).',
        '4 g de miere pe porție — cea mai mică doză din listă, pentru că fructele congelate bătute par mai dulci decât sunt.'
      ],

      taste: { sweetness: 62, richness: 30, texture: 86, authenticity: 55 },

      vs: {
        name: 'Mousse/spumă de fructe cu frișcă, la pahar',
        grams: 150, kcal: 280, protein: 3, carbs: 28, sugars: 25, fat: 17
      },
      vsSource: 'Valori tipice de etichetă pentru mousse de fructe cu frișcă, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 4 },

      storage: 'Nu se păstrează. 20-30 de minute la frigider e maximul; după aceea se lasă și devine iaurt de fructe. Congelat 40 de minute se transformă într-un semifreddo decent, dar nu mai e fluff.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 4, seara: 4 },

      dataConfidence: 'low'
    },

    /* =====================================================================
     * 9 — PAPANAȘI RECI, DECONSTRUIȚI
     * ================================================================== */
    {
      id: 'ds-papanasi-reci',
      name: 'Papanași reci, deconstruiți la pahar',
      emoji: '🍮',

      family: 'no-bake',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-vrac-cibin', g: 200 },
        { id: 'd-smantana-20', g: 40 },
        { id: 's-soy-protein-isolate', g: 15 },
        { id: 'v-fulgi-ovaz-mari', g: 20 },
        { p: 'gem-fara-zahar', g: 40 },
        { p: 'lamaie', g: 8 },
        { p: 'miere', g: 8 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 68, active: 8, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['sită deasă', 'bol', 'două cupe late', 'lingură'],

      steps: [
        'Trece brânza de vaci de la vrac prin sită. Brânza presată de la Cibin e cea mai potrivită pentru rețeta asta pentru că e uscată — dar exact de asta trebuie cernută, altfel rămâne cu bulgări.',
        'Amestecă brânza cu izolatul de soia, mierea, coaja rasă de lămâie, vanilia și sarea. Freacă 2 minute cu lingura, până crema devine lucioasă.',
        'Împarte crema în două cupe și apasă-o ușor cu dosul lingurii, ca să nu rămână goluri de aer.',
        'Toarnă smântâna deasupra — nu amestecată în cremă, ci ca un strat separat. Papanașul are smântână pe deasupra, nu în aluat, și asta e tot ce imită rețeta.',
        'Pune gemul peste smântână și presară deasupra fulgii de ovăz prăjiți 3 minute în tigaia uscată, cu un vârf de scorțișoară.',
        'Frigider o oră. Fulgii se pun abia la servit dacă îi vrei crocanți; puși de la început, se înmoaie în stratul de gem.'
      ],

      tips: [
        'Cele 40 g de smântână 20% sunt aproape jumătate din grăsimea rețetei și sunt de neînlocuit. Papanașul se recunoaște după stratul gras de deasupra care se amestecă cu dulceața — cu iaurt degresat iese altceva, care nu mai are legătură cu papanașul.',
        'Brânza de vaci de la vrac (18-19 g proteină la 100 g) bate orice caserolă de supermarket la rețeta asta: are mai puțină apă, deci crema stă și nu se lasă în cupă.',
        'Izolatul de soia e aici ca burete: absoarbe zerul pe care brânza îl lasă în prima oră la frigider. Fără el, găsești o baltă sub cremă. Lămâia, vanilia și gemul îi acoperă gustul.',
        'Nu prăji nimic. Rețeta se numește „reci" tocmai pentru că partea prăjită a papanașilor e și partea cu cele mai multe calorii — un papanaș de restaurant de 250 g trece de 600 kcal, aproape tot din aluat prăjit.'
      ],

      swaps: [
        { label: 'Cu dulceață adevărată', text: '30 g de dulceață de vișine în locul gemului fără zahăr adăugat. Adaugă ~5 g de zahăr pe porție și, sincer, are gust mai bun.' },
        { label: 'Mai puține calorii', text: 'Iaurt grecesc 10% în locul smântânii 20%. Scazi ~15 kcal pe porție și pierzi puțin din senzația de gras.' },
        { label: 'Cu nucă', text: 'Nucă tocată grosier, 15 g, în locul fulgilor. Mai scump, dar mai aproape de gustul românesc al desertului.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, smântână), soia (izolat proteic) și ovăz (poate conține gluten).'
      ],

      taste: { sweetness: 62, richness: 70, texture: 78, authenticity: 66 },

      vs: {
        name: 'Papanași cu smântână și dulceață, porție de restaurant',
        grams: 250, kcal: 660, protein: 20, carbs: 70, sugars: 35, fat: 33
      },
      vsSource: 'Valori tipice de meniu pentru papanași prăjiți cu smântână și dulceață, 2026 — nu un local anume.',

      sweetener: { kind: 'miere', gPerServing: 4 },

      storage: 'Frigider, 2 zile, dar fără fulgii de ovăz. Puși, se înmoaie complet în 3-4 ore.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 3, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 10 — BUDINCĂ PROTEICĂ CU CARAMEL DE CURMALE
     * ================================================================== */
    {
      id: 'ds-budinca-cazeina-caramel',
      name: 'Budincă proteică cu caramel de curmale și arahide',
      emoji: '🍯',

      family: 'no-bake',
      craving: 'caramel',
      servings: 2,

      ing: [
        { id: 's-soy-protein-isolate', g: 45 },
        { id: 'd-lapte-15', g: 250 },
        { p: 'guma-xantan', g: 1 },
        { p: 'curmale', g: 40 },
        { id: 'v-unt-arahide-100', g: 15 },
        { p: 'apa', g: 40, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 40, active: 6, chill: 30 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender de mână', 'două pahare', 'bol', 'tel mic'],

      steps: [
        'Caramelul: pune curmalele fără sâmburi în 40 ml de apă foarte fierbinte, 10 minute. Blendează-le cu untul de arahide, un vârf mare de sare și vanilia până se face o pastă lucioasă, ca un caramel gros.',
        'Sarea nu e opțională în caramel. Fără ea, pasta de curmale rămâne „pastă de curmale"; cu ea, creierul o citește ca sos de caramel sărat.',
        'Budinca: amestecă izolatul de soia cu guma xantan, uscate, în bol. Toarnă întâi 50 ml de lapte rece și freacă o pastă fără cocoloașe, apoi restul laptelui în două reprize, cu telul mic. Nu invers — pudra turnată peste lichid face cocoloașe care nu se mai desfac.',
        'Lasă amestecul 5 minute nemișcat. Soia leagă apa și budinca se îngroașă; consistența finală se decide în minutele astea, nu la amestecat.',
        'Toarnă budinca în pahare, pune caramelul deasupra și trage o dată cu lingura prin el ca să se marmoreze.',
        'Frigider 30 de minute. Peste 3-4 ore devine atât de densă încât lingura stă în picioare — dacă preferi așa, mai adaugă 30 g de lapte de la început.'
      ],

      tips: [
        'Raportul pudră:lichid decide totul. 45 g de izolat de soia la 250 g de lapte (1:5,5) dă budincă de lingură. 1:8 rămâne shake gros, 1:4 se face chit pe care nu-l poți mesteca.',
        'Soia îngroașă singură, dar mai puțin decât cazeina din rețetele americane după care e făcută budinca asta. Gramul de gumă xantan acoperă diferența; fără el, după 30 de minute ai o cremă moale, nu budincă. Caramelul de curmale acoperă complet gustul soiei.',
        'Caramelul de curmale se face o dată pentru toată săptămâna: triplează cantitatea, ține-l la borcan în frigider 7 zile și ai desertul gata în 4 minute.',
        'Fără miere sau zahăr în plus, dar nu fără zahăr: cele 40 g de curmale aduc ~26 g de zahăr, adică ~13 g pe porție, la care se adaugă ~6 g de lactoză din lapte. Total ~20 g pe porție — sub o cremă caramel de comerț, dar departe de zero.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Tahini, aceeași cantitate. Caramelul devine mai amărui, mai apropiat de halva.' },
        { label: 'Mai gros', text: '200 g de lapte în loc de 250 g și 15 minute în plus la frigider. Iese o cremă tip cheesecake, de mâncat cu lingurița.' },
        { label: 'Fără lactate', text: 'Băutură de soia neîndulcită în locul laptelui; pudra e deja vegetală. Budinca iese ceva mai subțire — lasă-o 10 minute în loc de 5.' }
      ],

      warnings: [
        'Conține soia (izolat proteic), lactate (lapte) și arahide.',
        'N-are miere sau zahăr, dar are ~20 g de zahăr pe porție: ~13 g din curmale și ~6 g lactoză din lapte.'
      ],

      taste: { sweetness: 68, richness: 62, texture: 88, authenticity: 70 },

      vs: {
        name: 'Cremă caramel / budincă de caramel la pahar',
        grams: 150, kcal: 230, protein: 5, carbs: 33, sugars: 30, fat: 8
      },
      vsSource: 'Valori tipice de etichetă pentru cremă caramel sau budincă de caramel ambalată, 2026 — nu un produs anume.',

      sweetener: { kind: 'curmale', gPerServing: 20 },

      storage: 'Frigider, 3 zile, acoperit. Se îngroașă în fiecare zi; în ziua a treia amestecă o lingură de lapte înainte de a o mânca.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 4, seara: 5 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 11 — ÎNGHEȚATĂ DE SKYR CU VIȘINE
     * ================================================================== */
    {
      id: 'ds-inghetata-skyr-visine',
      name: 'Înghețată de skyr cu vișine, fără mașină',
      emoji: '🍨',

      family: 'frozen',
      craving: 'inghetata',
      servings: 3,

      ing: [
        { id: 'd-skyr-natural-pilos', g: 400 },
        { id: 'd-iaurt-grecesc-olympus-10', g: 120 },
        { p: 'visine-congelate', g: 150 },
        { p: 'miere', g: 50 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 260, active: 10, chill: 250 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['bol', 'tel', 'cutie plată de plastic sau tavă de metal', 'furculiță'],

      steps: [
        'Dizolvă mierea în skyr, amestecând cu telul 2 minute. Dacă e cristalizată, încălzește borcanul 20 de secunde în apă caldă — dâmburile de miere rămase îngheață separat și se simt ca bomboane tari.',
        'Adaugă iaurtul grecesc 10% și sarea. Nu sări peste iaurtul gras: e singura grăsime din rețetă și fără ea îngheață bloc.',
        'Dezgheață pe jumătate vișinele, taie-le în două și amestecă-le în compoziție cu zeama lor cu tot.',
        'Toarnă într-o cutie plată, în strat de maximum 3 cm. Un strat subțire îngheață repede și formează cristale mici; o cutie adâncă îngheață lent, cu cristale mari, exact ce nu vrei.',
        'Congelator. La 40, 80 și 120 de minute, scoate cutia și zgârie tot conținutul energic cu furculița, 30 de secunde de fiecare dată. Astea sunt cele trei intervenții care înlocuiesc mașina de înghețată: rup cristalele înainte să crească.',
        'După a treia amestecare, mai lasă 2 ore. Scoate din congelator cu 10-15 minute înainte de servit și zgârie din nou cu furculița.'
      ],

      tips: [
        'Mierea e aici pentru fizică, nu doar pentru gust. Fără zahăr dizolvat, apa din skyr îngheață bloc; cei ~17 g de miere pe porție coboară punctul de îngheț cât să rămână ceva de zgâriat cu lingura. Cu mai puțină, iese gheață cu gust de vișine.',
        'Mierea e zahăr invertit (glucoză plus fructoză, molecule separate), deci pe gram coboară punctul de îngheț mai mult decât zahărul obișnuit. De asta e miere, nu zahăr din pungă.',
        'Grăsimea din iaurtul 10% învelește cristalele de gheață și le împiedică să se lipească între ele. E motivul pentru care înghețata din comerț are 8-12% grăsime, iar cea „fitness" din skyr simplu e piatră.',
        'Dacă tot iese prea tare a doua zi: 20 de secunde la microunde la putere mică, apoi amestecă. Nu o lăsa să se topească și să o recongelezi — a doua îngheț face cristale de două ori mai mari.'
      ],

      swaps: [
        { label: 'Mai puțin dulce', text: '30 g de miere în loc de 50. Scazi ~20 kcal pe porție, dar iese vizibil mai tare — scoate cutia cu 25 de minute înainte, nu 15.' },
        { label: 'Mai cremoasă', text: '40 g de mascarpone în loc de 40 g din skyr. Sare la ~250 kcal pe porție, dar ajunge la o textură de gelaterie.' },
        { label: 'Cu ciocolată', text: '15 g de cacao dizolvată în 30 g de lapte cald, răcită, adăugată la pasul 2. Vișinele rămân, iese o variantă tip „black forest".' }
      ],

      warnings: [
        '~14 g de zahăr adăugat pe porție, din miere. E prețul texturii: fără el, înghețata de skyr e un cub de gheață.',
        'Conține lactate (skyr, iaurt grecesc).'
      ],

      taste: { sweetness: 72, richness: 50, texture: 74, authenticity: 70 },

      vs: {
        name: 'Înghețată de vanilie/fructe, 2 cupe',
        grams: 130, kcal: 280, protein: 4, carbs: 32, sugars: 28, fat: 15
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru înghețată de lapte cu fructe, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 17 },

      storage: 'Congelator, 3 săptămâni, într-o cutie închisă etanș. După o săptămână apar cristale mari indiferent ce faci — cel mai bună e în primele 48 de ore. Se scoate mereu cu 10-15 minute înainte.',

      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 4, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 12 — BATOANE ÎNGHEȚATE CU IAURT ȘI CĂPȘUNI
     * ================================================================== */
    {
      id: 'ds-batoane-inghetate-capsuni',
      name: 'Batoane înghețate cu iaurt grecesc și căpșuni',
      emoji: '🍡',

      family: 'frozen',
      craving: 'fructat',
      servings: 4,

      ing: [
        { id: 'd-iaurt-grecesc-olympus-2', g: 300 },
        { id: 's-soy-protein-isolate', g: 50 },
        { id: 'd-lapte-praf-degresat', g: 20 },
        { p: 'capsuni', g: 200 },
        { p: 'miere', g: 30 },
        { id: 's-gelatin-powder', g: 4 },
        { p: 'ulei-cocos', g: 8 },
        { p: 'lamaie', g: 10 },
        { p: 'apa', g: 30, free: true }
      ],

      time: { total: 320, active: 12, chill: 300 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['formă de batoane pe băț (4 locașuri)', 'blender', 'cană mică', 'bol'],

      steps: [
        'Presară gelatina peste 30 ml de apă rece și las-o 5 minute să se umfle. Apoi ține cana 20 de secunde în apă fierbinte, până se limpezește complet. Gelatina nedizolvată se depune ca un cocoloș de cauciuc pe fundul batonului.',
        'Topește uleiul de cocos în aceeași apă fierbinte — se lichefiază la 24°C, deci nu are nevoie de foc.',
        'Blendează căpșunile cu mierea și zeama de lămâie, 20 de secunde. Păstrează două căpșuni tăiate felii pentru bucăți vizibile în baton.',
        'Freacă izolatul de soia și laptele praf cu 4 linguri de iaurt până e o pastă fără cocoloașe, apoi adaugă restul iaurtului, apoi toarnă gelatina dizolvată și uleiul de cocos în fir subțire, amestecând continuu.',
        'Combină cu piureul de căpșuni, adaugă feliile păstrate și toarnă în formă. Bate forma de masă de câteva ori ca să iasă aerul din colțuri.',
        'Congelator minimum 5 ore. Scoaterea: ține forma 10 secunde sub apă caldă de la robinet, nu trage de băț dintr-o dată.'
      ],

      tips: [
        'Trei lucruri diferite lucrează aici împotriva cristalelor de gheață și fiecare rezolvă altceva: uleiul de cocos aduce grăsimea, mierea (zahăr invertit) coboară punctul de îngheț, iar laptele praf degresat aduce solidele non-grase de lapte — exact ingredientul pe care industria îl folosește ca să nu iasă înghețata nisipoasă.',
        'Gelatina leagă apa liberă și e cel mai eficient truc anti-cristale dintr-un baton pe băț. ATENȚIE la contabilitate: din cele 4 g de gelatină ies ~3,4 g de proteină, adică ~0,8 g pe baton, iar aceștia NU se pun la ținta zilnică de proteină.',
        'Izolatul de soia nu se simte aici: căpșunile, mierea și lămâia îi acoperă gustul ușor „de fasole". Ca bonus, soia leagă apă și ajută și ea contra cristalelor de gheață.',
        'Un baton scos direct din congelator e prea tare pentru dinți. Un minut la temperatura camerei și devine ceea ce trebuie — dacă îl lași cinci, curge.'
      ],

      swaps: [
        { label: 'Fără gelatină', text: 'Sari peste ea și mai pune 5 g de ulei de cocos. Batoanele ies puțin mai cristaline, dar toată proteina rămâne proteină completă.' },
        { label: 'Alte fructe', text: 'Zmeură sau vișine congelate, aceeași cantitate. Vișinele au nevoie de 5 g de miere în plus.' },
        { label: 'Fără pudră', text: '100 g de skyr în plus în locul izolatului de soia. Proteina scade cu ~8 g pe baton și amestecul devine mai gros — subțiază-l cu 30 g de lapte.' }
      ],

      warnings: [
        'GELATINĂ: proteina din gelatină e incompletă (fără triptofan) și nu se pune la ținta zilnică de proteină. Aici sunt ~0,8 g pe baton din ~19 g totale — restul vin din lactate și soia și sunt proteină completă.',
        'Conține lactate (iaurt grecesc, lapte praf) și soia (izolat proteic).',
        'Gelatina e de origine animală: rețeta nu e vegetariană. Cu agar în loc de gelatină devine vegetariană, dar agarul trebuie fiert 2 minute ca să se activeze.'
      ],

      taste: { sweetness: 68, richness: 42, texture: 76, authenticity: 78 },

      vs: {
        name: 'Baton de înghețată pe băț cu fructe',
        grams: 90, kcal: 190, protein: 2, carbs: 24, sugars: 22, fat: 9
      },
      vsSource: 'Valori tipice de etichetă pentru batoane de înghețată cu iaurt și fructe, 2026 — nu un produs anume.',

      sweetener: null,

      storage: 'Congelator, 6 săptămâni, înfășurate individual în folie după scoaterea din formă. Sunt cel mai stabil desert congelat din listă, tocmai pentru că au și grăsime, și zahăr invertit, și gelatină.',

      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 13 — „NICE CREAM" DE BANANĂ CU ARAHIDE
     * ================================================================== */
    {
      id: 'ds-nice-cream-banana-arahide',
      name: '„Nice cream" de banană cu arahide și sare',
      emoji: '🍌',

      family: 'frozen',
      craving: 'caramel',
      servings: 2,

      ing: [
        { p: 'banane', g: 250 },
        { id: 's-soy-protein-isolate', g: 30 },
        { id: 'v-unt-arahide-100', g: 25 },
        { id: 'd-lapte-15', g: 60 },
        { p: 'sare', g: 1, free: true },
        { p: 'scortisoara', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 246, active: 6, chill: 240 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['robot de bucătărie sau blender puternic', 'tavă', 'hârtie de copt', 'spatulă'],

      steps: [
        'Alege banane foarte coapte, cu pete maro pe coajă. Nu e o chestiune de risipă: la coacere, amidonul se transformă în zaharuri simple, iar zaharurile simple coboară punctul de îngheț. O banană verde congelată se face piatră, una pătată rămâne cremoasă.',
        'Taie bananele felii de 1 cm și întinde-le într-un singur strat pe hârtie de copt. Un bloc de banane congelate blochează orice robot; feliile separate se mărunțesc în 30 de secunde.',
        'Congelator minimum 4 ore, ideal peste noapte.',
        'Pune feliile congelate în robot cu izolatul de soia, untul de arahide, sarea, scorțișoara și vanilia. Pornește în impulsuri scurte. Va trece prin trei faze: firimituri, bulgări, apoi brusc cremă lucioasă — nu te opri la faza de bulgări.',
        'Toarnă laptele o lingură pe rând, doar dacă robotul se blochează. Fiecare lingură în plus înmoaie rezultatul, deci mai bine puțin decât mult.',
        'Servește imediat, în consistență de soft-serve. Dacă o congelezi din nou, scoate-o cu 15 minute înainte și amestecă bine.'
      ],

      tips: [
        'Banana e singurul fruct care face asta și motivul e pectina plus zaharurile ei: la mixare, celulele se sparg și eliberează un piure care se comportă ca o emulsie. De asta „nice cream" iese cremos fără grăsime adăugată, spre deosebire de orice altă înghețată din congelator.',
        'Untul de arahide face două lucruri: dă gustul de caramel sărat (cu sarea, obligatorie) și aduce grăsimea care ține crema moale dacă o pui înapoi în congelator.',
        'Pudra se adaugă la mixare, nu înainte de congelare. Amestecată în piure înainte, leagă apa și transformă blocul într-o cărămidă pe care robotul nu o mai poate rupe. Banana și untul de arahide îi acoperă complet gustul.',
        'Rețeta asta e cea mai iertătoare din secțiunea `frozen`, dar și cea mai perisabilă ca textură. Recongelată, e bună; recongelată de două ori, e gheață.'
      ],

      swaps: [
        { label: 'Ciocolată', text: '12 g de cacao odată cu pudra. Cacaoa absoarbe umezeală, deci mai adaugă o lingură de lapte.' },
        { label: 'Fără arahide', text: 'Tahini sau unt de migdale, aceeași cantitate. Cu tahini, sarea devine și mai importantă.' },
        { label: 'Fără pudră', text: '80 g de skyr adăugat la mixare. Proteina scade cu ~5 g pe porție, dar rezultatul e mai apropiat de o înghețată de iaurt.' }
      ],

      warnings: [
        'Conține arahide, soia (izolat proteic) și lactate (lapte).',
        '~18 g de zahăr pe porție, aproape tot din banane. E cel mai „dulce natural" desert din listă, fără miere sau zahăr în plus.'
      ],

      taste: { sweetness: 78, richness: 60, texture: 82, authenticity: 72 },

      vs: {
        name: 'Înghețată de banană-caramel cu arahide, 2 cupe',
        grams: 130, kcal: 330, protein: 5, carbs: 34, sugars: 30, fat: 19
      },
      vsSource: 'Valori tipice de etichetă pentru înghețată cu caramel și arahide, 2026 — nu un produs anume.',

      sweetener: null,

      storage: 'Se mănâncă pe loc. Feliile de banană congelate se țin însă 3 luni în congelator, deci partea care ia timp se face o dată pe lună. Nice cream-ul recongelat: maximum 2 săptămâni, scos cu 15 minute înainte.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 14 — BOMBE DE CIOCOLATĂ DIN CONGELATOR
     * ================================================================== */
    {
      id: 'ds-bombe-ciocolata-congelator',
      name: 'Bombe de ciocolată cu arahide, din congelator',
      emoji: '🍫',

      family: 'frozen',
      craving: 'ciocolata',
      servings: 4,

      ing: [
        { id: 's-soy-protein-isolate', g: 55 },
        { id: 'v-unt-arahide-100', g: 60 },
        { p: 'ulei-cocos', g: 25 },
        { p: 'cacao', g: 20 },
        { p: 'miere', g: 12 },
        { id: 'd-lapte-15', g: 50 },
        { p: 'ciocolata-neagra', g: 20 },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 60, active: 15, chill: 45 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['bol', 'formă de silicon cu 8 locașuri sau tavă mică', 'lingură', 'crăticioară'],

      steps: [
        'Topește uleiul de cocos și ciocolata neagră împreună, la foc foarte mic sau în bol pus peste apă caldă. Uleiul de cocos e lichid deja la 24°C, deci nu are nevoie de căldură mare.',
        'Amestecă într-un bol izolatul de soia, cacaoa cernută și sarea; mierea intră odată cu untul de arahide, la pasul următor. Cernerea cacaoi contează: cocoloașele de cacao într-o bombă rece se simt ca nisip.',
        'Toarnă untul de arahide și amestecul de ulei-ciocolată topit peste pudre. Amestecă până se face o pastă groasă, mată.',
        'Adaugă laptele lingură cu lingură. Pasta trebuie să ajungă la consistență de aluat de trufe: se rulează între palme fără să se lipească. Prea mult lapte și nu se mai întărește.',
        'Împarte în 8 bombe (aproximativ 30 g fiecare) în forma de silicon sau rulate cu mâna. O porție = 2 bombe.',
        'Congelator 45 de minute. Se mănâncă direct din congelator, dar dacă le-ai ținut peste noapte, lasă-le 5 minute pe farfurie.'
      ],

      tips: [
        'Bombele sunt singura rețetă congelată din listă care nu are problema cristalelor de gheață, și merită înțeles de ce: aproape nu au apă liberă. Ce îngheață într-o înghețată e apa, iar aici totul e grăsime, pudră și 60 g de lapte legat de pudră. Ele nu se fac gheață, se fac tari — și asta se rezolvă în 5 minute pe blat.',
        'Uleiul de cocos e ce le ține solide: se topește la 24°C. Pe o masă de vară, în 20 de minute ai o baltă. Nu sunt un desert de dus la birou fără pungă frigorifică.',
        'Izolatul de soia absoarbe lichidul și grăsimea și împiedică bombele să fie unsuroase la atingere. Dacă pasta iese sfărâmicioasă, mai adaugă o lingură de lapte. Cacaoa și ciocolata îi acoperă gustul.',
        'Sunt cel mai dens desert din listă ca și calorii pe gram (~30 g pe bombă, ~120 kcal). De asta porția e două bombe, nu opt — și de asta sunt în formă de silicon, nu într-o cutie din care mănânci cu mâna.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Unt de migdale sau tahini. Tahini-ul cu cacao și sare dă un rezultat mai apropiat de halva glazurată.' },
        { label: 'Mai puțină grăsime', text: 'Scoate uleiul de cocos și pune 25 g de lapte în plus. Scazi ~55 kcal pe porție, dar bombele nu se mai întăresc — devin trufe moi, de mâncat cu lingurița.' },
        { label: 'Crocante', text: '15 g de orez expandat amestecat la final. Se înmoaie în congelator după o săptămână, deci merită doar dacă le mănânci repede.' }
      ],

      warnings: [
        'Conține arahide, soia (izolat proteic) și lactate (lapte).',
        'Desert dens: ~240 kcal și ~17 g de grăsime pe porție de două bombe. Rămâne sub pragul de 350 kcal, dar e cel mai concentrat din listă — cântărește-le, nu le număra din ochi.',
        'Conține cacao și ciocolată neagră: ~20 mg de cofeină pe porție, plus teobromină.'
      ],

      taste: { sweetness: 58, richness: 88, texture: 80, authenticity: 76 },

      vs: {
        name: 'Praline de ciocolată umplute, 2 bucăți',
        grams: 40, kcal: 220, protein: 3, carbs: 22, sugars: 20, fat: 13
      },
      vsSource: 'Valori tipice de etichetă pentru bomboane de ciocolată umplute, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 3 },

      storage: 'Congelator, 2 luni, în cutie închisă. La frigider țin 10 zile dar sunt mai moi. La temperatura camerei se topesc în 20-30 de minute — uleiul de cocos e lichid peste 24°C.',

      mealFit: { desert: 5, gustare: 4, micDejun: 1, postAntrenament: 3, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 15 — SANDVIȘ ÎNGHEȚAT CU COOKIE PROTEIC
     * ================================================================== */
    {
      id: 'ds-sandvis-inghetat-cookie',
      name: 'Sandviș înghețat între doi biscuiți',
      emoji: '🥪',

      family: 'frozen',
      craving: 'crocant',
      servings: 4,

      ing: [
        { p: 'biscuiti-simpli', g: 120 },
        { id: 'd-skyr-natural-pilos', g: 250 },
        { id: 's-soy-protein-isolate', g: 30 },
        { id: 'd-iaurt-grecesc-olympus-10', g: 80 },
        { p: 'miere', g: 20 },
        { p: 'cacao', g: 6 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 200, active: 20, chill: 180 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['cuțit lung cu lamă subțire', 'bol', 'spatulă', 'folie de plastic', 'tavă mică'],

      steps: [
        'Folosește 16 biscuiți simpli dreptunghiulari, tip Petit Beurre (~7,5 g fiecare): 8 jos, 8 sus, câte doi alăturați pe fiecare parte — ies 4 sandvișuri.',
        'Bate skyr-ul cu izolatul de soia, iaurtul grecesc 10%, mierea, cacaoa și vanilia. Amestecul trebuie să fie gros ca o cremă de tort, nu curgător — dacă e moale, mai lasă-l 10 minute la frigider.',
        'Pune o lingură bună de cremă (aproximativ 90 g) pe biscuiții de jos și acoperă cu cei de sus, apăsând ușor până crema ajunge la margine.',
        'Înfășoară fiecare sandviș strâns în folie și pune-le pe o tavă, într-un singur strat.',
        'Congelator 3 ore. Se mănâncă direct, fără temperare — de asta rețeta are miere și iaurt gras.'
      ],

      tips: [
        'Biscuiții simpli au ~13% grăsime și ~22% zahăr — destul cât să nu devină piatră la congelator, iar după 5 minute pe masă se înmoaie exact cât trebuie. Un biscuit complet uscat, degresat, ar fi periculos pentru dinți direct din congelator.',
        'Mierea din cremă e acolo ca zahăr invertit — coboară punctul de îngheț, deci umplutura rămâne mușcabilă direct din congelator. Fără ea, crema îngheață tare, sandvișul trebuie temperat 15 minute și atunci cookie-ul se umezește.',
        'Iaurtul grecesc 10% aduce grăsimea care oprește cristalele. Skyr-ul singur, la -18°C, se face un strat de gheață dulce între două biscuiți.',
        'Înfășurarea individuală în folie nu e pentru estetică: aerul din congelator usucă suprafața cremei și în trei zile ai o pojghiță albă de brumă între biscuit și umplutură.'
      ],

      swaps: [
        { label: 'Cu cookie de casă', text: 'Cookies-urile proteice din rețeta de la cuptor, tăiate în două pe orizontală, în loc de biscuiți. Mai multă proteină, dar se fac în avans.' },
        { label: 'Fructat', text: 'Scoate cacaoa și pune 40 g de zmeură zdrobită în cremă. Adaugă apă, deci și 5 g de lapte praf degresat ca să compensezi.' },
        { label: 'Fără pudră', text: '60 g de skyr în plus în locul izolatului de soia. Crema devine mai lichidă și se scurge pe margini la asamblare — ține-o 30 de minute la congelator înainte de a o pune pe cookie.' }
      ],

      warnings: [
        'Conține lactate (skyr, iaurt grecesc, biscuiți), soia (izolat proteic) și gluten (biscuiți).'
      ],

      taste: { sweetness: 66, richness: 64, texture: 84, authenticity: 82 },

      vs: {
        name: 'Sandviș de înghețată clasic',
        grams: 90, kcal: 260, protein: 4, carbs: 34, sugars: 24, fat: 12
      },
      vsSource: 'Valori tipice de etichetă pentru sandviș de înghețată ambalat, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 5 },

      storage: 'Congelator, 3 săptămâni, fiecare înfășurat separat în folie. După 3 săptămâni biscuitul absoarbe umezeală din cremă și își pierde complet textura.',

      mealFit: { desert: 5, gustare: 4, micDejun: 1, postAntrenament: 4, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 16 — CUBURI DE PROTEINĂ ÎNGHEȚATĂ
     * ================================================================== */
    {
      id: 'ds-cuburi-proteina-inghetate',
      name: 'Cuburi de proteină înghețată, pentru soft-serve instant',
      emoji: '🧊',

      family: 'frozen',
      craving: 'cremos',
      servings: 4,

      ing: [
        { id: 'd-lapte-15', g: 400 },
        { id: 's-soy-protein-isolate', g: 50 },
        { id: 'd-lapte-praf-degresat', g: 30 },
        { id: 'd-smantana-20', g: 40 },
        { p: 'cacao', g: 10 },
        { p: 'miere', g: 10 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 245, active: 5, chill: 240 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['forme de cuburi de gheață (2 tăvi mici)', 'bol', 'tel', 'blender'],

      steps: [
        'Amestecă în bol izolatul de soia, laptele praf degresat, cacaoa cernută. Toarnă întâi 60 ml de lapte rece cu mierea dizolvată în el și freacă o pastă, apoi restul laptelui în două reprize, bătând cu telul după fiecare.',
        'Adaugă smântâna și sarea și amestecă până e complet omogen. Compoziția va fi groasă ca o smântână subțire — asta e normal, soia a început deja să lege apa.',
        'Toarnă în formele de cuburi MICI. Mărimea contează mai mult decât orice altceva: un cub de 2 cm se sparge în blender, unul de 4 cm blochează cuțitele sau le îndoaie.',
        'Congelator minimum 4 ore. Scoate cuburile din forme și ține-le într-o pungă — nu se lipesc între ele pentru că au grăsime.',
        'La servire: 8-10 cuburi (o porție) în blender cu 50 ml de lapte rece. Mixează 30-45 de secunde, oprind o dată să razi pereții. Iese soft-serve, se mănâncă imediat.'
      ],

      tips: [
        'Rețeta asta rezolvă problema înghețatei proteice prin ocolire, nu prin chimie: cuburile CHIAR sunt piatră, dar nu le mănânci așa — le spargi în blender în momentul în care ai poftă. Zero temperare, zero cristale mari, zero amestecat la fiecare 40 de minute.',
        'Smântâna 20% e obligatorie chiar și aici. Fără ea, blenderul scoate granita, nu soft-serve: grăsimea e ce leagă particulele sparte de gheață într-o cremă.',
        'Laptele praf degresat aduce solide non-grase de lapte — proteine și lactoză care ocupă spațiul dintre cristale. E cel mai ieftin ingredient de textură din tot fișierul, cu mult sub un plic de pudră proteică.',
        'Cuburile ținute în pungă, la congelator, sunt și baza celui mai rapid shake gros din lume: 5 cuburi plus 150 ml de lapte, 20 de secunde de blender.'
      ],

      swaps: [
        { label: 'Cu cafea', text: 'O linguriță de cafea instant dizolvată în 20 g de lapte cald, răcită, adăugată la pasul 2. Iese un frappé gros.' },
        { label: 'Fructat', text: 'Fără cacao, cu 100 g de zmeură blendată în compoziție. Cuburile ies mai tari — fructele aduc apă — deci fă-le și mai mici.' },
        { label: 'Fără smântână', text: '40 g de iaurt grecesc 10%. Aproape la fel de bine, cu ~10 kcal mai puțin pe porție și un pic mai acru.' }
      ],

      warnings: [
        'Conține soia (izolat proteic) și lactate (lapte, lapte praf, smântână).',
        'Cuburile sunt tari ca gheața: nu le da copiilor să le sugă direct și nu încerca să le mesteci. Sunt făcute pentru blender, nu pentru gură.',
        'Un blender slab (sub ~500 W) nu le sparge. Verifică înainte de a face două tăvi, sau fă cuburile de 1,5 cm.'
      ],

      taste: { sweetness: 60, richness: 55, texture: 78, authenticity: 68 },

      vs: {
        name: 'Soft-serve de fast-food',
        grams: 150, kcal: 250, protein: 5, carbs: 38, sugars: 32, fat: 8
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru soft-serve cu lapte, 2026 — nu un produs anume.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },

      storage: 'Congelator, 2 luni, în pungă închisă. Cuburile nu se degradează la textură pentru că nu le mănânci înghețate — cristalele lor mari se sparg oricum în blender.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
