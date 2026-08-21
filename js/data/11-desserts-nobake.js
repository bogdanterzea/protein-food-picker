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
 *      - cazeina micelară leagă apa și se îngroașă singură (1 parte pudră la
 *        5-6 părți lichid); whey-ul nu face asta niciodată;
 *      - whey-ul CONCENTRAT are lactoză și grăsime de lapte: gust lăptos, iar
 *        în contact cu acid (lămâie, fructe acre) se poate tăia;
 *      - izolatul e neutru și stabil, dar „subțire" — bun la spume, slab la creme;
 *      - brânza de vaci trecută prin sită și skyr-ul bat orice pudră la textură,
 *        pentru că aduc proteină deja hidratată, nu praf care trebuie umflat;
 *      - laptele praf degresat aduce solide non-grase de lapte, exact ce
 *        folosește industria ca să nu iasă înghețata cu cristale.
 *
 * 3. ÎNGHEȚATA PROTEICĂ SE FACE PIATRĂ. Motivul e mecanic: grăsimea și zahărul
 *    din înghețata normală țin apa în picături mici și coboară punctul de
 *    îngheț. Scoase amândouă, rămâne apă curată care se face un bloc de gheață.
 *    Fiecare rețetă `frozen` de mai jos declară explicit ce folosește contra:
 *    grăsime adăugată, zahăr invertit (miere), xilitol (depresie de punct de
 *    îngheț de ~2 ori mai mare decât zahărul, la gram), solide de lapte,
 *    amestecare la intervale, strat subțire și temperare înainte de servit.
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
        { p: 'eritritol', g: 24 },
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
        'Amestecă brânza cernută cu skyr-ul, eritritolul, zeama și coaja de lămâie, vanilia și vârful de sare. Bate cu furculița 60-90 de secunde, până nu mai vezi dungi albe de îndulcitor.',
        'Baza: freacă fulgii de ovăz cu untul de arahide între degete până se fac firimituri umede. Apasă-le cu dosul lingurii pe fundul celor două borcane.',
        'Toarnă crema peste bază, bate borcanul de două ori de blatul mesei ca să iasă bulele de aer, și netezește.',
        'Zdrobește jumătate din zmeură cu furculița și întinde-o deasupra; pune restul întreagă peste ea.',
        'Frigider minimum 3 ore, ideal peste noapte. Crema se strânge, baza se umezește exact cât trebuie și acreala de lămâie se rotunjește.'
      ],

      tips: [
        'Sita e ingredientul secret, nu pudra. Brânza de vaci trecută prin sită are proteina deja hidratată — dă o cremă mai netedă decât orice combinație de whey și iaurt, fără gustul de pudră.',
        'Nu pune whey concentrat aici: zeama de lămâie plus lactoza din whey dau exact gustul acru-lăptos pe care lumea îl descrie ca „gust de proteină".',
        'Eritritolul cristalizează la rece și scrâșnește ușor pe limbă a doua zi. Dacă mănânci desertul peste 24 de ore, scoate borcanul cu 15 minute înainte — cristalele se topesc la temperatura camerei.',
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
        '12 g de eritritol pe porție. E sub pragul la care majoritatea oamenilor simt ceva, dar dacă mai mănânci și altceva îndulcit cu polioli în aceeași zi, se adună.'
      ],

      taste: { sweetness: 62, richness: 58, texture: 84, authenticity: 72 },

      vs: {
        name: 'Cheesecake de cofetărie',
        grams: 120, kcal: 380, protein: 7, carbs: 34, sugars: 27, fat: 24
      },
      vsSource: 'Valori tipice de etichetă pentru cheesecake ambalat / porție de cofetărie, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 12 },

      storage: 'Frigider, 3 zile, cu capacul pus. Baza se înmoaie de la o zi la alta — a doua zi e mai bună, a treia e moale. Nu se congelează: la dezghețare brânza se separă și lasă apă.',

      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 2 — MOUSSE DE CIOCOLATĂ CU CAZEINĂ ȘI ALBUȘ
     * ================================================================== */
    {
      id: 'ds-mousse-ciocolata-cazeina',
      name: 'Mousse de ciocolată cu cazeină și albuș bătut',
      emoji: '🍫',

      family: 'no-bake',
      craving: 'ciocolata',
      servings: 2,

      ing: [
        { id: 's-casein-micellar-ostrovit', g: 40 },
        { id: 'd-lapte-15', g: 180 },
        { p: 'cacao', g: 14 },
        { id: 'd-albus-lichid', g: 100 },
        { p: 'eritritol', g: 20 },
        { p: 'ciocolata-neagra', g: 10 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 130, active: 10, chill: 120 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['mixer de mână', 'două boluri', 'spatulă', 'răzătoare'],

      steps: [
        'Cerne cacaoa peste cazeină, într-un bol. Cacaoa are cocoloașe care nu se mai desfac niciodată dacă intră direct în lichid.',
        'Toarnă laptele rece peste pudre în trei reprize, amestecând cu spatula după fiecare. Va părea prea lichid; în 2-3 minute cazeina absoarbe și se face cremă groasă. Nu adăuga pudră între timp.',
        'În al doilea bol, bate albușul pasteurizat cu jumătate din eritritol până face vârfuri moi care se îndoaie la scoaterea telului — 3-4 minute cu mixerul de mână.',
        'Încorporează albușul în crema de cazeină în trei tranșe, cu mișcări de jos în sus. Prima tranșă o amesteci brutal, ca să subțiezi crema; ultimele două delicat, ca să nu scoți aerul.',
        'Împarte în două pahare, rade ciocolata neagră deasupra și dă la frigider 2 ore. Mousse-ul se strânge pe măsură ce cazeina continuă să lege apă.'
      ],

      tips: [
        'Cazeina micelară e singura pudră care se îngroașă singură în lichid rece: raportul care funcționează e 1 parte pudră la 5-6 părți lichid. La 1:8 rămâne shake, la 1:4 se face chit.',
        'Albușul bătut aduce volum fără nicio calorie și e ceea ce transformă o budincă densă în mousse. Folosește albuș lichid pasteurizat de la raft — e tratat termic, deci se poate consuma nefiert.',
        'Nu bate albușul până la vârfuri tari: la mousse rece, vârfurile tari se rup în bucăți albe care rămân vizibile în cremă. Vârfuri moi înseamnă că se topesc în amestec.',
        'Cele 14 g de cacao aduc și ~2,7 g de proteină, dar mai ales taie senzația de dulce-plat pe care o dă eritritolul singur.'
      ],

      swaps: [
        { label: 'Fără ou', text: 'Sari peste albuș și pune 40 g de iaurt grecesc 0%. Iese budincă, nu mousse — mai densă, cu ~15% mai puțin volum în pahar.' },
        { label: 'Mai intens', text: 'O linguriță rasă de cafea instant dizolvată în lapte. Nu se simte a cafea, se simte a ciocolată mai neagră.' },
        { label: 'Fără lactate', text: 'Băutură de soia în locul laptelui. Cazeina rămâne lactat, deci pentru o variantă complet fără lactate trebuie schimbată și pudra — și atunci mousse-ul nu se mai leagă la fel.' }
      ],

      warnings: [
        'Conține lactate (cazeină, lapte) și ou (albuș pasteurizat).',
        'Albușul se consumă necoagulat: folosește numai albuș lichid PASTEURIZAT, nu ouă crude sparte în casă.',
        'Are cacao și ciocolată neagră: ~10-15 mg de cofeină pe porție plus teobromină. Puțin, dar dacă ești sensibil, nu e desertul de la 23:00.'
      ],

      taste: { sweetness: 60, richness: 62, texture: 88, authenticity: 78 },

      vs: {
        name: 'Mousse de ciocolată de cofetărie',
        grams: 120, kcal: 330, protein: 5, carbs: 28, sugars: 26, fat: 22
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru mousse de ciocolată, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 10 },

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
        { id: 's-casein-micellar-ostrovit', g: 20 },
        { id: 'd-skyr-natural-pilos', g: 150 },
        { p: 'visine-congelate', g: 120 },
        { p: 'eritritol', g: 16 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 490, active: 5, chill: 480 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['două borcane', 'lingură'],

      steps: [
        'Amestecă chia, cazeina, laptele, jumătate din eritritol și vanilia direct în borcane. Pune capacul și scutură 15 secunde.',
        'Așteaptă 10 minute și mai scutură o dată. Primul amestec nu e opțional: chia se lipește în cocoloașe pe fundul borcanului dacă o lași nemișcată în primele minute.',
        'Frigider peste noapte, minimum 6 ore. Semințele absorb de aproximativ zece ori greutatea lor în lichid — de asta raportul e 40 g chia la 220 g lapte, nu mai puțin.',
        'Dimineața, scoate vișinele din congelator și lasă-le 15 minute să se dezghețe parțial; zdrobește-le grosier cu furculița împreună cu restul de eritritol.',
        'Amestecă skyr-ul până devine cremos și pune-l ca strat peste budincă, apoi vișinele deasupra.'
      ],

      tips: [
        'Cazeina în budinca de chia nu e pentru proteină în plus, e pentru gura de senzație: chia singură dă o textură de „ochi de broască", iar cazeina umple spațiile dintre semințe și o face să pară budincă.',
        'Vișinele congelate bat orice fruct proaspăt aici, pentru că zeama pe care o lasă la dezghețare e acidă și intră în budincă. Cireșele sunt prea dulci și dispar.',
        'Dacă dimineața e prea groasă, o lingură de lapte și 20 de secunde de amestec o readuc. Prea subțire nu se repară — chia nu mai absoarbe după ce s-a hidratat.',
        '40 g de chia înseamnă ~13,5 g de fibre în total, ~7 g pe porție. Dacă nu mănânci de obicei atât, prima dată fă rețeta cu 30 g.'
      ],

      swaps: [
        { label: 'Fără pudră', text: '80 g de skyr în plus în locul cazeinei. Proteina scade cu ~7 g pe porție, dar rețeta nu mai are niciun ingredient de magazin de suplimente.' },
        { label: 'Ciocolată', text: '10 g de cacao odată cu pudrele și vișinele înlocuite cu zmeură. Iese o budincă tip „black forest".' },
        { label: 'Fără lactate', text: 'Băutură de soia în locul laptelui și iaurt de soia în locul skyr-ului; renunță la cazeină. Rămâne o budincă bună, dar cu ~10 g mai puțină proteină pe porție.' }
      ],

      warnings: [
        'Conține lactate (lapte, cazeină, skyr).',
        'Aport mare de fibre: ~7 g pe porție doar din chia. Bea apă și nu o combina în aceeași zi cu alte două deserturi bogate în fibre.'
      ],

      taste: { sweetness: 55, richness: 45, texture: 70, authenticity: 60 },

      vs: {
        name: 'Budincă la pahar cu fructe (ambalată)',
        grams: 150, kcal: 195, protein: 4, carbs: 30, sugars: 24, fat: 6
      },
      vsSource: 'Valori tipice de etichetă pentru budincă/desert lactat la pahar cu fructe, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 8 },

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
        { id: 's-casein-micellar-ostrovit', g: 15 },
        { p: 'eritritol', g: 18 },
        { id: 's-protein-biscuits', g: 40 },
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
        'Fă cafeaua: 4 g de cafea instant în 70 ml de apă clocotită, apoi las-o să se răcească complet. Cafea caldă peste biscuiți înseamnă terci.',
        'Trece brânza de vaci prin sită, apoi freac-o cu mascarponele până dispare orice granulă. Mascarponele e doar 30 g, dar el dă grăsimea care face crema să se simtă a tiramisu, nu a brânză îndulcită.',
        'Adaugă cazeina, eritritolul și vanilia. Amestecă 60 de secunde; crema trebuie să cadă de pe spatulă în panglică, nu în picături.',
        'Rupe biscuiții proteici în bucăți de 2 cm. Înmoaie-i în cafeaua rece o secundă pe fiecare parte — ei sunt mai poroși decât pișcoturile clasice și se îmbibă mult mai repede.',
        'Alternează în pahare: biscuiți, cremă, biscuiți, cremă. Termină cu cremă și netezește.',
        'Frigider 2 ore, apoi cerne cacaoa deasupra cu sita mică, chiar înainte de servit. Cacaoa pusă din timp absoarbe umezeală și se face pastă.'
      ],

      tips: [
        'Raportul care contează e brânză de vaci cernută 200 : mascarpone 30. Sub 30 g de mascarpone crema devine acră și „de dietă"; peste 60 g nu mai are rost rețeta, ajungi la macro-urile tiramisului obișnuit.',
        'Cazeina aici lucrează ca stabilizator, nu ca sursă de proteină: leagă apa pe care brânza de vaci o lasă în pahar după câteva ore. Fără ea, a doua zi găsești o baltă gălbuie pe fund.',
        'Nu bate crema cu mixerul. Brânza de vaci bătută mecanic se subțiază — proteina se rearanjează și eliberează zer. Spatula și răbdarea dau o cremă mai densă.',
        'Cacaoa se cerne, nu se presară. Un strat de 1 mm cernut acoperă uniform; aceeași cantitate presărată face pete amare.'
      ],

      swaps: [
        { label: 'Fără gluten', text: 'Bucăți de clătită proteică rece în loc de biscuiți, sau fulgi de ovăz certificați fără gluten înmuiați în cafea 30 de secunde.' },
        { label: 'Fără cofeină', text: 'Cicoare solubilă sau cacao dizolvată în apă caldă. Aroma se schimbă spre „ciocolată cu lapte", dar structura rămâne.' },
        { label: 'Mai puține calorii', text: 'Scoate mascarponele și pune 30 g de iaurt grecesc 10%. Scazi ~35 kcal pe porție și pierzi cam o treime din senzația de bogat.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, mascarpone, cazeină) și gluten (biscuiți proteici).',
        'Conține cofeină: ~50-70 mg pe porție din cafeaua instant, plus cacao. Nu e un desert de seară târziu.',
        'Verifică eticheta biscuiților proteici: multe sortimente conțin polioli, care se adaugă peste eritritolul din cremă.'
      ],

      taste: { sweetness: 58, richness: 66, texture: 80, authenticity: 74 },

      vs: {
        name: 'Tiramisu, porție de restaurant',
        grams: 150, kcal: 430, protein: 6, carbs: 36, sugars: 28, fat: 28
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tiramisu porționat, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 9 },

      storage: 'Frigider, 2 zile, acoperit. Biscuiții se înmoaie complet până a doua zi — dacă îi vrei cu structură, mănâncă-l în primele 4 ore.',

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
        { id: 's-whey-concentrate-ostrovit', g: 50 },
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
        'Adaugă fulgii de ovăz, whey-ul, cacaoa, sarea și vanilia. Pornește robotul în impulsuri scurte — dacă îl ții pornit, se încălzește și pasta devine unsuroasă.',
        'Toarnă laptele o lingură pe rând, cu robotul pornit, până compoziția se strânge într-o bilă mare pe pereți. Poate să nu-ți trebuiască tot laptele: umiditatea curmalelor variază enorm.',
        'Mută în bol și amestecă orezul expandat cu mâna, nu în robot. În robot se face praf și pierzi exact crocanțele pentru care e în rețetă.',
        'Formează 12 bile (aproximativ 28-30 g fiecare), pune-le pe hârtie de copt și dă-le 45 de minute la frigider ca să se întărească. O porție = 3 bile.'
      ],

      tips: [
        'Whey-ul concentrat usucă. E singura rețetă din listă unde asta e un avantaj: pasta de curmale e prea lipicioasă fără el. Dacă folosești izolat în loc de concentrat, mai adaugă 10 g de lapte.',
        'Orezul expandat adăugat manual la final e diferența între „bilă de ovăz" și ceva ce chiar scrâșnește. Se înmoaie în 3-4 zile, deci bilele sunt cel mai bune în primele 48 de ore.',
        'Dacă amestecul ți se lipește de palme, umezește-ți mâinile cu apă rece înainte de fiecare bilă. Nu adăuga ovăz — vei ajunge la ceva uscat și făinos.',
        'Curmalele aduc ~10 g de zahăr pe porție. Nu e o rețetă „fără zahăr", e o rețetă cu zahăr din fruct, și de asta n-are îndulcitor deloc.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Tahini în aceeași cantitate, plus 3 g de cacao în plus ca să echilibreze amăreala susanului.' },
        { label: 'Fără pudră proteică', text: '60 g de semințe de dovleac măcinate în locul whey-ului. Proteina scade cu ~4 g pe porție, dar textura devine mai interesantă.' },
        { label: 'Fără curmale', text: '40 g de gem fără zahăr adăugat plus 10 g de făină de cocos pentru absorbție. Iese mai puțin dulce și mai fragil.' }
      ],

      warnings: [
        'Conține arahide, lactate (whey, lapte) și ovăz — dacă eviți glutenul, cere fulgi certificați.',
        'Nu are îndulcitor, dar are ~10 g de zahăr pe porție din curmale. „Fără zahăr adăugat" nu înseamnă fără zahăr.'
      ],

      taste: { sweetness: 65, richness: 70, texture: 78, authenticity: 80 },

      vs: {
        name: 'Bomboane energizante ambalate (energy balls de raft)',
        grams: 80, kcal: 360, protein: 7, carbs: 45, sugars: 30, fat: 16
      },
      vsSource: 'Valori tipice de etichetă pentru energy balls / praline cu fructe uscate, 2026 — nu un produs anume.',

      sweetener: null,

      storage: 'Frigider, cutie închisă, 7 zile. Congelator 2 luni — se mănâncă direct din congelator, e singurul desert din listă la care asta funcționează fără temperare, pentru că grăsimea din arahide nu se face gheață.',

      mealFit: { desert: 4, gustare: 5, micDejun: 3, postAntrenament: 5, seara: 2 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 6 — TRIFLE CU VIȘINE ȘI BISCUIȚI PROTEICI
     * ================================================================== */
    {
      id: 'ds-trifle-visine-biscuiti',
      name: 'Trifle în straturi cu vișine și biscuiți proteici',
      emoji: '🥃',

      family: 'no-bake',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-iaurt-grecesc-olympus-0', g: 200 },
        { id: 's-casein-micellar-ostrovit', g: 25 },
        { p: 'visine-congelate', g: 150 },
        { id: 's-protein-biscuits', g: 35 },
        { p: 'eritritol', g: 16 },
        { p: 'amidon-porumb', g: 5 },
        { p: 'scortisoara', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 100, active: 10, chill: 90 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['două pahare înalte', 'crăticioară mică', 'bol', 'spatulă'],

      steps: [
        'Pune vișinele congelate în crăticioară cu jumătate din eritritol și 2 linguri de apă. Foc mic, 6-8 minute, până lasă zeamă.',
        'Amestecă amidonul cu o lingură de apă rece și toarnă-l peste vișine, amestecând continuu 30 de secunde. Se leagă imediat într-un sos gros. Lasă-l să se răcească complet — sos cald peste iaurt înseamnă iaurt tăiat.',
        'Bate iaurtul grecesc cu cazeina, restul de eritritol și vanilia. Amestecul se îngroașă vizibil în 2 minute; dacă rămâne curgător, mai lasă-l 5 minute la frigider.',
        'Sfărâmă biscuiții proteici, dar nu de tot: vrei bucăți de mărimea unui bob de porumb, nu pesmet.',
        'Straturi în pahar: biscuiți, cremă, sos de vișine, biscuiți, cremă, sos. Termină cu vișine și un praf de scorțișoară.',
        'Frigider 90 de minute. Sub o oră, straturile încă nu s-au așezat și trifle-ul se amestecă la prima lingură.'
      ],

      tips: [
        'Amidonul e ce transformă vișinele congelate din „fructe cu apă" în sos care stă în strat. 5 g la 150 g de fructe e raportul: cu 10 g iese gelatinos și mat.',
        'Iaurtul grecesc 0% singur e prea lichid pentru straturi. Cazeina îl transformă în cremă care ține un strat de sos deasupra fără să-l lase să se scufunde — asta e toată treaba ei aici.',
        'Pune biscuiții în ultimele 15 minute dacă îi vrei crocanți. Dacă îi vrei înmuiați, ca într-un trifle englezesc adevărat, pune-i de la început și lasă-l peste noapte.',
        'O linguriță de amidon în plus și un sos de vișine cald peste iaurt sunt cele două moduri clasice de a rata rețeta asta.'
      ],

      swaps: [
        { label: 'Cu skyr', text: '200 g de skyr în locul iaurtului grecesc. Mai acru, mai dens, cu ~2 g mai multă proteină pe porție.' },
        { label: 'Fără gluten', text: 'Fulgi de ovăz certificați fără gluten, prăjiți 3 minute în tigaie uscată, în locul biscuiților.' },
        { label: 'Alt fruct', text: 'Zmeură sau afine, aceeași cantitate. Zmeura are nevoie de puțin mai mult îndulcitor, afinele de puțin mai puțin.' }
      ],

      warnings: [
        'Conține lactate (iaurt grecesc, cazeină) și gluten (biscuiți proteici).',
        'Verifică eticheta biscuiților: mulți biscuiți proteici sunt îndulciți cu maltitol, care se adaugă peste cele 8 g de eritritol pe porție din cremă.'
      ],

      taste: { sweetness: 60, richness: 52, texture: 82, authenticity: 76 },

      vs: {
        name: 'Prăjitură cu vișine și frișcă, porție de cofetărie',
        grams: 150, kcal: 350, protein: 4, carbs: 38, sugars: 30, fat: 20
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tort sau trifle cu fructe și frișcă, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 8 },

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
        { p: 'eritritol', g: 24 },
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
        'Adaugă eritritolul, coaja și zeama de lămâie în două reprize, amestecând bine între ele. Turnat tot odată, acidul „șochează" proteina și crema se face granulată.',
        'Frigider o oră. Laptele praf are nevoie de timp să se hidrateze complet — asta e diferența dintre o cremă cu gust de praf și una netedă.',
        'Servește cu afinele deasupra, zdrobind câteva cu furculița ca să lase culoare.'
      ],

      tips: [
        'Rețeta asta există ca să arate că nu ai nevoie de pudră: 15 g de lapte praf degresat aduc ~5,4 g de proteină și, mai important, solidele de lapte care dau crema. Costă o fracțiune din whey și nu are gust de aromă artificială.',
        'Whey-ul concentrat e exact ce NU pui aici. Lactoza plus acidul din lămâie dau gustul acru-lăptos și, la 30 g de zeamă, proteina din whey chiar se poate tăia în fulgi vizibili.',
        'Acidul se adaugă întotdeauna la final și în reprize. Aceeași cantitate de lămâie turnată dintr-o dată peste brânză rece face o cremă cu granule pe care nu o mai repari.',
        'Sub 170 kcal pe porție cu 25 g de proteină: e cel mai „ieftin" desert din listă ca și calorii, tocmai pentru că nu are nici grăsime adăugată, nici bază de biscuiți.'
      ],

      swaps: [
        { label: 'Mai bogat', text: '30 g de cremă de brânză light în plus. Adaugă ~22 kcal pe porție și duce textura spre lemon cheesecake.' },
        { label: 'Cu portocală', text: 'Coajă de portocală și 20 g zeamă în locul lămâii, plus 4 g de eritritol mai puțin — portocala e deja dulce.' },
        { label: 'Fără îndulcitor', text: '15 g de miere. Adaugă ~23 kcal pe porție și rotunjește aciditatea mai bine decât eritritolul, care lasă lămâia ascuțită.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, iaurt grecesc, lapte praf).',
        '12 g de eritritol pe porție. Cu lămâie multă, tentația e să mai adaugi — nu trece de 15 g pe porție, de acolo încep problemele digestive.'
      ],

      taste: { sweetness: 58, richness: 40, texture: 80, authenticity: 68 },

      vs: {
        name: 'Tartă cu lămâie, porție de cofetărie',
        grams: 120, kcal: 370, protein: 4, carbs: 42, sugars: 30, fat: 20
      },
      vsSource: 'Valori tipice de meniu / etichetă pentru tartă sau cremă de lămâie de cofetărie, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 12 },

      storage: 'Frigider, 3 zile. Peste 3 zile aciditatea continuă să lucreze și crema începe să lase zer pe fund — se amestecă și se mănâncă, dar nu mai arată bine.',

      mealFit: { desert: 4, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 4 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 8 — „FLUFF" DE ZMEURĂ
     * ================================================================== */
    {
      id: 'ds-fluff-zmeura',
      name: '„Fluff" de zmeură — spumă de proteină bătută',
      emoji: '☁️',

      family: 'no-bake',
      craving: 'cremos',
      servings: 2,

      ing: [
        { id: 's-whey-isolate-ostrovit', g: 40 },
        { p: 'zmeura', g: 150 },
        { id: 'd-lapte-15', g: 150 },
        { p: 'eritritol', g: 12 },
        { p: 'vanilie', g: 2, free: true }
      ],

      time: { total: 8, active: 8, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['mixer de mână cu palete', 'bol înalt și îngust', 'spatulă'],

      steps: [
        'Scoate zmeura din congelator și las-o exact 5 minute. Trebuie să fie tare, dar nu betonată — dacă e complet dezghețată, spuma nu se ridică.',
        'Pune zmeura, izolatul, eritritolul și vanilia în bolul înalt. Toarnă doar jumătate din lapte.',
        'Bate la viteză mică 30 de secunde, apoi la viteză maximă. Adaugă restul de lapte într-un fir subțire, pe marginea bolului.',
        'Bate 6-8 minute fără pauză. Nu se întâmplă nimic în primele 3, apoi volumul crește brusc de 3-4 ori și amestecul urcă pe pereți. Aici e tot secretul: oamenii se opresc la minutul 3 și cred că rețeta nu merge.',
        'E gata când paletele lasă dâre care rămân vizibile 5 secunde. Toarnă imediat în două cupe și mănâncă imediat.'
      ],

      tips: [
        'Izolatul e obligatoriu aici, nu o preferință. Are cea mai mare proporție de proteină și cea mai mică de grăsime, iar grăsimea distruge spuma — whey-ul concentrat face jumătate din volum, cazeina nu face deloc, se îngroașă și rămâne budincă.',
        'Bolul înalt și îngust nu e un moft: paletele trebuie să lovească același volum de amestec în mod repetat. Într-un bol lat, amestecul stă pe fund și nu prinde aer.',
        'Fluff-ul e singurul desert din listă care nu se păstrează. Aerul iese în 20-30 de minute și rămâi cu un iaurt roz. Se face pentru diseară, nu pentru mâine.',
        '~150 kcal pe porție pentru un bol de 250 ml: e cel mai bun raport volum/calorii din întreaga secțiune, exact pentru că jumătate din porție e aer.'
      ],

      swaps: [
        { label: 'Cu căpșuni', text: 'Căpșuni congelate, aceeași cantitate. Fac o spumă puțin mai densă și mai dulce; zmeura rămâne mai bună pentru că aciditatea taie gustul de pudră.' },
        { label: 'Mai stabil', text: 'Adaugă 30 g de iaurt grecesc 0% după ce s-a ridicat spuma, amestecând delicat. Pierzi ~15% din volum, dar rezistă o oră în loc de 20 de minute.' },
        { label: 'Fără lactate', text: 'Nu funcționează cu proteină vegetală — mazărea și orezul nu formează spumă stabilă. Rămâi la izolat de zer sau alege altă rețetă.' }
      ],

      warnings: [
        'Conține lactate (izolat din zer, lapte).',
        '6 g de eritritol pe porție — cea mai mică doză din listă, pentru că fructele congelate bătute par mai dulci decât sunt.'
      ],

      taste: { sweetness: 62, richness: 30, texture: 86, authenticity: 55 },

      vs: {
        name: 'Mousse/spumă de fructe cu frișcă, la pahar',
        grams: 150, kcal: 280, protein: 3, carbs: 28, sugars: 25, fat: 17
      },
      vsSource: 'Valori tipice de etichetă pentru mousse de fructe cu frișcă, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 6 },

      storage: 'Nu se păstrează. 20-30 de minute la frigider e maximul; după aceea se lasă și devine iaurt de fructe. Congelat 40 de minute se transformă într-un semifreddo decent, dar nu mai e fluff.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 4, seara: 4 },

      dataConfidence: 'medium'
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
        { id: 's-casein-micellar-ostrovit', g: 15 },
        { id: 's-protein-granola', g: 25 },
        { p: 'gem-fara-zahar', g: 40 },
        { p: 'lamaie', g: 8 },
        { p: 'eritritol', g: 14 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 68, active: 8, chill: 60 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['sită deasă', 'bol', 'două cupe late', 'lingură'],

      steps: [
        'Trece brânza de vaci de la vrac prin sită. Brânza presată de la Cibin e cea mai potrivită pentru rețeta asta pentru că e uscată — dar exact de asta trebuie cernută, altfel rămâne cu bulgări.',
        'Amestecă brânza cu cazeina, eritritolul, coaja rasă de lămâie, vanilia și sarea. Freacă 2 minute cu lingura, până crema devine lucioasă.',
        'Împarte crema în două cupe și apasă-o ușor cu dosul lingurii, ca să nu rămână goluri de aer.',
        'Toarnă smântâna deasupra — nu amestecată în cremă, ci ca un strat separat. Papanașul are smântână pe deasupra, nu în aluat, și asta e tot ce imită rețeta.',
        'Pune gemul peste smântână și presară granola proteică la final.',
        'Frigider o oră. Granola se pune abia la servit dacă o vrei crocantă; pusă de la început, se înmoaie în stratul de gem.'
      ],

      tips: [
        'Cele 40 g de smântână 20% sunt aproape jumătate din grăsimea rețetei și sunt de neînlocuit. Papanașul se recunoaște după stratul gras de deasupra care se amestecă cu dulceața — cu iaurt degresat iese altceva, care nu mai are legătură cu papanașul.',
        'Brânza de vaci de la vrac (18-19 g proteină la 100 g) bate orice caserolă de supermarket la rețeta asta: are mai puțină apă, deci crema stă și nu se lasă în cupă.',
        'Cazeina e aici ca burete: absoarbe zerul pe care brânza îl lasă în prima oră la frigider. Fără ea, găsești o baltă sub cremă.',
        'Nu prăji nimic. Rețeta se numește „reci" tocmai pentru că partea prăjită a papanașilor e și partea cu cele mai multe calorii — un papanaș de restaurant de 250 g trece de 600 kcal, aproape tot din aluat prăjit.'
      ],

      swaps: [
        { label: 'Cu dulceață adevărată', text: '30 g de dulceață de vișine în locul gemului fără zahăr adăugat. Adaugă ~5 g de zahăr pe porție și, sincer, are gust mai bun.' },
        { label: 'Mai puține calorii', text: 'Iaurt grecesc 10% în locul smântânii 20%. Scazi ~15 kcal pe porție și pierzi puțin din senzația de gras.' },
        { label: 'Fără granola', text: 'Nucă tocată grosier, 15 g. Mai scump, dar mai aproape de gustul românesc al desertului.' }
      ],

      warnings: [
        'Conține lactate (brânză de vaci, smântână, cazeină) și cereale cu gluten (granola proteică).',
        'Verifică granola: multe sortimente „proteice" au 15-20 g de zahăr la 100 g și polioli pe deasupra.'
      ],

      taste: { sweetness: 62, richness: 70, texture: 78, authenticity: 66 },

      vs: {
        name: 'Papanași cu smântână și dulceață, porție de restaurant',
        grams: 250, kcal: 660, protein: 20, carbs: 70, sugars: 35, fat: 33
      },
      vsSource: 'Valori tipice de meniu pentru papanași prăjiți cu smântână și dulceață, 2026 — nu un local anume.',

      sweetener: { kind: 'eritritol', gPerServing: 7 },

      storage: 'Frigider, 2 zile, dar fără granola. Cu granola pusă, textura se pierde complet în 3-4 ore.',

      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 3, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 10 — BUDINCĂ DE CAZEINĂ CU CARAMEL DE CURMALE
     * ================================================================== */
    {
      id: 'ds-budinca-cazeina-caramel',
      name: 'Budincă de cazeină cu caramel de curmale și arahide',
      emoji: '🍯',

      family: 'no-bake',
      craving: 'caramel',
      servings: 2,

      ing: [
        { id: 's-casein-micellar-ostrovit', g: 45 },
        { id: 'd-lapte-15', g: 250 },
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
        'Budinca: pune cazeina în bol și toarnă laptele rece în trei reprize, amestecând cu telul mic după fiecare. Nu invers — pudra turnată peste lichid face cocoloașe care nu se mai desfac.',
        'Lasă amestecul 3-5 minute nemișcat. Cazeina absoarbe și se îngroașă singură; consistența finală se decide în minutele astea, nu la amestecat.',
        'Toarnă budinca în pahare, pune caramelul deasupra și trage o dată cu lingura prin el ca să se marmoreze.',
        'Frigider 30 de minute. Peste 3-4 ore devine atât de densă încât lingura stă în picioare — dacă preferi așa, mai adaugă 30 g de lapte de la început.'
      ],

      tips: [
        'Raportul cazeină:lichid decide totul. 45 g de pudră la 250 g de lapte (1:5,5) dă budincă de lingură. 1:8 rămâne shake gros, 1:4 se face chit pe care nu-l poți mesteca.',
        'Whey-ul nu funcționează aici deloc: nu leagă apa, deci rămâne lapte cu aromă indiferent cât aștepți. Dacă ai doar whey, adaugă 5 g de amidon de porumb și un pahar de răbdare — dar nu va fi la fel.',
        'Caramelul de curmale se face o dată pentru toată săptămâna: triplează cantitatea, ține-l la borcan în frigider 7 zile și ai desertul gata în 4 minute.',
        'Fără îndulcitor adăugat, dar nu fără zahăr: cele 40 g de curmale aduc ~26 g de zahăr, adică ~13 g pe porție, la care se adaugă ~6 g de lactoză din lapte. Total ~20 g pe porție — sub o cremă caramel de comerț, dar departe de zero.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Tahini, aceeași cantitate. Caramelul devine mai amărui, mai apropiat de halva.' },
        { label: 'Mai gros', text: '200 g de lapte în loc de 250 g și 15 minute în plus la frigider. Iese o cremă tip cheesecake, de mâncat cu lingurița.' },
        { label: 'Fără lactate', text: 'Nu se poate face — cazeina e proteina din lapte și e singurul lucru care dă textura asta. Pentru o variantă vegetală, uită-te la budinca de chia.' }
      ],

      warnings: [
        'Conține lactate (cazeină, lapte) și arahide.',
        'Nu are îndulcitor adăugat, dar are ~20 g de zahăr pe porție: ~13 g din curmale și ~6 g lactoză din lapte.'
      ],

      taste: { sweetness: 68, richness: 62, texture: 88, authenticity: 70 },

      vs: {
        name: 'Cremă caramel / budincă de caramel la pahar',
        grams: 150, kcal: 230, protein: 5, carbs: 33, sugars: 30, fat: 8
      },
      vsSource: 'Valori tipice de etichetă pentru cremă caramel sau budincă de caramel ambalată, 2026 — nu un produs anume.',

      sweetener: null,

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
        { p: 'xilitol', g: 42 },
        { p: 'visine-congelate', g: 150 },
        { p: 'miere', g: 20 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 260, active: 10, chill: 250 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['bol', 'tel', 'cutie plată de plastic sau tavă de metal', 'furculiță'],

      steps: [
        'Dizolvă xilitolul și mierea în skyr, amestecând cu telul 2 minute. Xilitolul trebuie să dispară complet — cristalele rămase nedizolvate devin grăunțe în înghețată.',
        'Adaugă iaurtul grecesc 10% și sarea. Nu sări peste iaurtul gras: e singura grăsime din rețetă și fără ea îngheață bloc.',
        'Dezgheață pe jumătate vișinele, taie-le în două și amestecă-le în compoziție cu zeama lor cu tot.',
        'Toarnă într-o cutie plată, în strat de maximum 3 cm. Un strat subțire îngheață repede și formează cristale mici; o cutie adâncă îngheață lent, cu cristale mari, exact ce nu vrei.',
        'Congelator. La 40, 80 și 120 de minute, scoate cutia și zgârie tot conținutul energic cu furculița, 30 de secunde de fiecare dată. Astea sunt cele trei intervenții care înlocuiesc mașina de înghețată: rup cristalele înainte să crească.',
        'După a treia amestecare, mai lasă 2 ore. Scoate din congelator cu 10-15 minute înainte de servit și zgârie din nou cu furculița.'
      ],

      tips: [
        'Xilitolul e aici pentru fizică, nu pentru gust. Molecula lui e de peste două ori mai mică decât a zahărului, deci la aceeași greutate coboară punctul de îngheț de circa două ori mai mult — asta face diferența dintre înghețată și cub de gheață. Eritritolul NU face asta la fel de bine și în plus recristalizează la rece.',
        'Mierea e zahăr invertit (glucoză plus fructoză, molecule separate), deci pe gram coboară punctul de îngheț mai mult decât zahărul obișnuit. 20 g fac o diferență pe care o simți cu lingura.',
        'Grăsimea din iaurtul 10% învelește cristalele de gheață și le împiedică să se lipească între ele. E motivul pentru care înghețata din comerț are 8-12% grăsime, iar cea „fitness" din skyr simplu e piatră.',
        'Dacă tot iese prea tare a doua zi: 20 de secunde la microunde la putere mică, apoi amestecă. Nu o lăsa să se topească și să o recongelezi — a doua îngheț face cristale de două ori mai mari.'
      ],

      swaps: [
        { label: 'Fără xilitol', text: '35 g de zahăr obișnuit. Adaugă ~47 kcal pe porție, dar e cea mai fiabilă variantă din punct de vedere al texturii și nu are niciun risc digestiv.' },
        { label: 'Mai cremoasă', text: '40 g de mascarpone în loc de 40 g din skyr. Sare la ~250 kcal pe porție, dar ajunge la o textură de gelaterie.' },
        { label: 'Cu ciocolată', text: '15 g de cacao dizolvată în 30 g de lapte cald, răcită, adăugată la pasul 2. Vișinele rămân, iese o variantă tip „black forest".' }
      ],

      warnings: [
        'XILITOLUL E TOXIC PENTRU CÂINI, chiar și în cantități mici. Dacă ai câine în casă, nu lăsa cutia la îndemână și nu-i da nici măcar o linguriță.',
        'Conține 14 g de polioli (xilitol) pe porție. E aproape de pragul la care apar balonare și scaune moi. Prima dată mănâncă o jumătate de porție și vezi cum reacționezi.',
        'Conține lactate (skyr, iaurt grecesc).'
      ],

      taste: { sweetness: 72, richness: 50, texture: 74, authenticity: 70 },

      vs: {
        name: 'Înghețată de vanilie/fructe, 2 cupe',
        grams: 130, kcal: 280, protein: 4, carbs: 32, sugars: 28, fat: 15
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru înghețată de lapte cu fructe, 2026 — nu un produs anume.',

      sweetener: { kind: 'xilitol', gPerServing: 14 },

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
        { id: 's-clear-whey-isolate-ostrovit', g: 50 },
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
        'Amestecă iaurtul grecesc cu clear whey-ul și laptele praf degresat până nu mai sunt cocoloașe, apoi toarnă gelatina dizolvată și uleiul de cocos în fir subțire, amestecând continuu.',
        'Combină cu piureul de căpșuni, adaugă feliile păstrate și toarnă în formă. Bate forma de masă de câteva ori ca să iasă aerul din colțuri.',
        'Congelator minimum 5 ore. Scoaterea: ține forma 10 secunde sub apă caldă de la robinet, nu trage de băț dintr-o dată.'
      ],

      tips: [
        'Trei lucruri diferite lucrează aici împotriva cristalelor de gheață și fiecare rezolvă altceva: uleiul de cocos aduce grăsimea, mierea (zahăr invertit) coboară punctul de îngheț, iar laptele praf degresat aduce solidele non-grase de lapte — exact ingredientul pe care industria îl folosește ca să nu iasă înghețata nisipoasă.',
        'Gelatina leagă apa liberă și e cel mai eficient truc anti-cristale dintr-un baton pe băț. ATENȚIE la contabilitate: din cele 4 g de gelatină ies ~3,4 g de proteină, adică ~0,8 g pe baton, iar aceștia NU se pun la ținta zilnică de proteină.',
        'Clear whey isolate, nu whey concentrat. Concentratul cu căpșuni și lămâie dă un baton cu gust lăptos-acru; clear whey-ul e făcut exact pentru arome de fruct și rămâne curat.',
        'Un baton scos direct din congelator e prea tare pentru dinți. Un minut la temperatura camerei și devine ceea ce trebuie — dacă îl lași cinci, curge.'
      ],

      swaps: [
        { label: 'Fără gelatină', text: 'Sari peste ea și mai pune 5 g de ulei de cocos. Batoanele ies puțin mai cristaline, dar toată proteina rămâne proteină completă.' },
        { label: 'Alte fructe', text: 'Zmeură sau vișine congelate, aceeași cantitate. Vișinele au nevoie de 5 g de miere în plus.' },
        { label: 'Fără pudră', text: '100 g de skyr în plus în locul clear whey-ului. Proteina scade cu ~8 g pe baton și amestecul devine mai gros — subțiază-l cu 30 g de lapte.' }
      ],

      warnings: [
        'GELATINĂ: proteina din gelatină e incompletă (fără triptofan) și nu se pune la ținta zilnică de proteină. Aici sunt ~0,8 g pe baton din ~19 g totale — restul vin din lactate și sunt proteină completă.',
        'Conține lactate (iaurt grecesc, clear whey, lapte praf).',
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
        { id: 's-casein-micellar-ostrovit', g: 30 },
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
        'Pune feliile congelate în robot cu cazeina, untul de arahide, sarea, scorțișoara și vanilia. Pornește în impulsuri scurte. Va trece prin trei faze: firimituri, bulgări, apoi brusc cremă lucioasă — nu te opri la faza de bulgări.',
        'Toarnă laptele o lingură pe rând, doar dacă robotul se blochează. Fiecare lingură în plus înmoaie rezultatul, deci mai bine puțin decât mult.',
        'Servește imediat, în consistență de soft-serve. Dacă o congelezi din nou, scoate-o cu 15 minute înainte și amestecă bine.'
      ],

      tips: [
        'Banana e singurul fruct care face asta și motivul e pectina plus zaharurile ei: la mixare, celulele se sparg și eliberează un piure care se comportă ca o emulsie. De asta „nice cream" iese cremos fără grăsime adăugată, spre deosebire de orice altă înghețată din congelator.',
        'Untul de arahide face două lucruri: dă gustul de caramel sărat (cu sarea, obligatorie) și aduce grăsimea care ține crema moale dacă o pui înapoi în congelator.',
        'Cazeina se adaugă la mixare, nu înainte de congelare. Amestecată în piure înainte, leagă apa și transformă blocul într-o cărămidă pe care robotul nu o mai poate rupe.',
        'Rețeta asta e cea mai iertătoare din secțiunea `frozen`, dar și cea mai perisabilă ca textură. Recongelată, e bună; recongelată de două ori, e gheață.'
      ],

      swaps: [
        { label: 'Ciocolată', text: '12 g de cacao odată cu cazeina. Cacaoa absoarbe umezeală, deci mai adaugă o lingură de lapte.' },
        { label: 'Fără arahide', text: 'Tahini sau unt de migdale, aceeași cantitate. Cu tahini, sarea devine și mai importantă.' },
        { label: 'Fără pudră', text: '80 g de skyr adăugat la mixare. Proteina scade cu ~5 g pe porție, dar rezultatul e mai apropiat de o înghețată de iaurt.' }
      ],

      warnings: [
        'Conține arahide și lactate (cazeină, lapte).',
        '~18 g de zahăr pe porție, aproape tot din banane. E cel mai „dulce natural" desert din listă și nu are niciun îndulcitor adăugat.'
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
        { id: 's-casein-micellar-ostrovit', g: 55 },
        { id: 'v-unt-arahide-100', g: 60 },
        { p: 'ulei-cocos', g: 25 },
        { p: 'cacao', g: 20 },
        { p: 'eritritol', g: 25 },
        { id: 'd-lapte-15', g: 60 },
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
        'Amestecă într-un bol cazeina, cacaoa cernută, eritritolul și sarea. Cernerea cacaoi contează: cocoloașele de cacao într-o bombă rece se simt ca nisip.',
        'Toarnă untul de arahide și amestecul de ulei-ciocolată topit peste pudre. Amestecă până se face o pastă groasă, mată.',
        'Adaugă laptele lingură cu lingură. Pasta trebuie să ajungă la consistență de aluat de trufe: se rulează între palme fără să se lipească. Prea mult lapte și nu se mai întărește.',
        'Împarte în 8 bombe (aproximativ 30 g fiecare) în forma de silicon sau rulate cu mâna. O porție = 2 bombe.',
        'Congelator 45 de minute. Se mănâncă direct din congelator, dar dacă le-ai ținut peste noapte, lasă-le 5 minute pe farfurie.'
      ],

      tips: [
        'Bombele sunt singura rețetă congelată din listă care nu are problema cristalelor de gheață, și merită înțeles de ce: aproape nu au apă liberă. Ce îngheață într-o înghețată e apa, iar aici totul e grăsime, pudră și 60 g de lapte legat de cazeină. Ele nu se fac gheață, se fac tari — și asta se rezolvă în 5 minute pe blat.',
        'Uleiul de cocos e ce le ține solide: se topește la 24°C. Pe o masă de vară, în 20 de minute ai o baltă. Nu sunt un desert de dus la birou fără pungă frigorifică.',
        'Cazeina absoarbe grăsimea și împiedică bombele să fie unsuroase la atingere. Cu whey în loc de cazeină ies sfărâmicioase și lasă urme pe degete.',
        'Sunt cel mai dens desert din listă ca și calorii pe gram (~30 g pe bombă, ~120 kcal). De asta porția e două bombe, nu opt — și de asta sunt în formă de silicon, nu într-o cutie din care mănânci cu mâna.'
      ],

      swaps: [
        { label: 'Fără arahide', text: 'Unt de migdale sau tahini. Tahini-ul cu cacao și sare dă un rezultat mai apropiat de halva glazurată.' },
        { label: 'Mai puțină grăsime', text: 'Scoate uleiul de cocos și pune 25 g de lapte în plus. Scazi ~55 kcal pe porție, dar bombele nu se mai întăresc — devin trufe moi, de mâncat cu lingurița.' },
        { label: 'Crocante', text: '15 g de orez expandat amestecat la final. Se înmoaie în congelator după o săptămână, deci merită doar dacă le mănânci repede.' }
      ],

      warnings: [
        'Conține arahide și lactate (cazeină, lapte).',
        'Desert dens: ~240 kcal și ~17 g de grăsime pe porție de două bombe. Rămâne sub pragul de 350 kcal, dar e cel mai concentrat din listă — cântărește-le, nu le număra din ochi.',
        'Conține cacao și ciocolată neagră: ~20 mg de cofeină pe porție, plus teobromină.'
      ],

      taste: { sweetness: 58, richness: 88, texture: 80, authenticity: 76 },

      vs: {
        name: 'Praline de ciocolată umplute, 2 bucăți',
        grams: 40, kcal: 220, protein: 3, carbs: 22, sugars: 20, fat: 13
      },
      vsSource: 'Valori tipice de etichetă pentru bomboane de ciocolată umplute, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 6.25 },

      storage: 'Congelator, 2 luni, în cutie închisă. La frigider țin 10 zile dar sunt mai moi. La temperatura camerei se topesc în 20-30 de minute — uleiul de cocos e lichid peste 24°C.',

      mealFit: { desert: 5, gustare: 4, micDejun: 1, postAntrenament: 3, seara: 3 },

      dataConfidence: 'medium'
    },

    /* =====================================================================
     * 15 — SANDVIȘ ÎNGHEȚAT CU COOKIE PROTEIC
     * ================================================================== */
    {
      id: 'ds-sandvis-inghetat-cookie',
      name: 'Sandviș înghețat între două cookie-uri proteice',
      emoji: '🥪',

      family: 'frozen',
      craving: 'crocant',
      servings: 4,

      ing: [
        { id: 's-protein-cookie', g: 120 },
        { id: 'd-skyr-natural-pilos', g: 250 },
        { id: 's-casein-micellar-ostrovit', g: 20 },
        { id: 'd-iaurt-grecesc-olympus-10', g: 80 },
        { p: 'miere', g: 20 },
        { p: 'eritritol', g: 12 },
        { p: 'cacao', g: 6 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 200, active: 20, chill: 180 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['cuțit lung cu lamă subțire', 'bol', 'spatulă', 'folie de plastic', 'tavă mică'],

      steps: [
        'Taie fiecare cookie proteic în două pe orizontală, cu cuțitul lung, ținând palma pe deasupra. Din 4 cookie-uri de ~30 g ies 8 discuri, adică 4 sandvișuri.',
        'Bate skyr-ul cu cazeina, iaurtul grecesc 10%, mierea, eritritolul, cacaoa și vanilia. Amestecul trebuie să fie gros ca o cremă de tort, nu curgător — dacă e moale, mai lasă-l 10 minute la frigider.',
        'Pune o lingură bună de cremă (aproximativ 90 g) pe jumătatea de jos a fiecărui cookie și acoperă cu jumătatea de sus, apăsând ușor până crema ajunge la margine.',
        'Înfășoară fiecare sandviș strâns în folie și pune-le pe o tavă, într-un singur strat.',
        'Congelator 3 ore. Se mănâncă direct, fără temperare — de asta rețeta are miere și iaurt gras.'
      ],

      tips: [
        'Cookie-ul proteic e ales, nu întâmplător: are ~15% grăsime și zahăr, iar grăsimea și zahărul nu îngheață. Un biscuit uscat, degresat, în congelator devine periculos pentru dinți. Regula generală: dacă ceva e crocant-uscat la temperatura camerei, va fi piatră la -18°C.',
        'Mierea din cremă e acolo ca zahăr invertit — coboară punctul de îngheț, deci umplutura rămâne mușcabilă direct din congelator. Cu îndulcitor pur, sandvișul trebuie temperat 15 minute și atunci cookie-ul se umezește.',
        'Iaurtul grecesc 10% aduce grăsimea care oprește cristalele. Skyr-ul singur, la -18°C, se face un strat de gheață dulce între două biscuiți.',
        'Înfășurarea individuală în folie nu e pentru estetică: aerul din congelator usucă suprafața cremei și în trei zile ai o pojghiță albă de brumă între cookie și umplutură.'
      ],

      swaps: [
        { label: 'Cu biscuiți', text: 'Biscuiți proteici în loc de cookie-uri. Sunt mai ieftini, dar trebuie temperați 10 minute — sunt uscați, deci îngheață tare.' },
        { label: 'Fructat', text: 'Scoate cacaoa și pune 40 g de zmeură zdrobită în cremă. Adaugă apă, deci și 5 g de lapte praf degresat ca să compensezi.' },
        { label: 'Fără pudră', text: '60 g de skyr în plus în locul cazeinei. Crema devine mai lichidă și se scurge pe margini la asamblare — ține-o 30 de minute la congelator înainte de a o pune pe cookie.' }
      ],

      warnings: [
        'Conține lactate (skyr, iaurt grecesc, cazeină) și, în funcție de cookie, gluten, ou și fructe cu coajă. Citește eticheta cookie-ului.',
        'Verifică poliolii din cookie: multe cookie-uri proteice au 10-15 g de maltitol la 100 g, care se adaugă peste cele 3 g de eritritol pe porție din cremă.'
      ],

      taste: { sweetness: 66, richness: 64, texture: 84, authenticity: 82 },

      vs: {
        name: 'Sandviș de înghețată clasic',
        grams: 90, kcal: 260, protein: 4, carbs: 34, sugars: 24, fat: 12
      },
      vsSource: 'Valori tipice de etichetă pentru sandviș de înghețată ambalat, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 3 },

      storage: 'Congelator, 3 săptămâni, fiecare înfășurat separat în folie. După 3 săptămâni cookie-ul absoarbe umezeală din cremă și își pierde complet textura.',

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
        { id: 's-casein-micellar-ostrovit', g: 50 },
        { id: 'd-lapte-praf-degresat', g: 30 },
        { id: 'd-smantana-20', g: 40 },
        { p: 'cacao', g: 10 },
        { p: 'eritritol', g: 20 },
        { p: 'vanilie', g: 2, free: true },
        { p: 'sare', g: 1, free: true }
      ],

      time: { total: 245, active: 5, chill: 240 },
      effort: 0,
      difficulty: 'usor',
      equipment: ['forme de cuburi de gheață (2 tăvi mici)', 'bol', 'tel', 'blender'],

      steps: [
        'Amestecă în bol cazeina, laptele praf degresat, cacaoa cernută și eritritolul. Toarnă laptele rece în trei reprize, bătând cu telul după fiecare.',
        'Adaugă smântâna și sarea și amestecă până e complet omogen. Compoziția va fi groasă ca o smântână subțire — asta e normal, cazeina a început deja să lege.',
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
        'Conține lactate (lapte, cazeină, lapte praf, smântână).',
        'Cuburile sunt tari ca gheața: nu le da copiilor să le sugă direct și nu încerca să le mesteci. Sunt făcute pentru blender, nu pentru gură.',
        'Un blender slab (sub ~500 W) nu le sparge. Verifică înainte de a face două tăvi, sau fă cuburile de 1,5 cm.'
      ],

      taste: { sweetness: 60, richness: 55, texture: 78, authenticity: 68 },

      vs: {
        name: 'Soft-serve de fast-food',
        grams: 150, kcal: 250, protein: 5, carbs: 38, sugars: 32, fat: 8
      },
      vsSource: 'Valori tipice de etichetă / meniu pentru soft-serve cu lapte, 2026 — nu un produs anume.',

      sweetener: { kind: 'eritritol', gPerServing: 5 },

      storage: 'Congelator, 2 luni, în pungă închisă. Cuburile nu se degradează la textură pentru că nu le mănânci înghețate — cristalele lor mari se sparg oricum în blender.',

      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 5, seara: 3 },

      dataConfidence: 'medium'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
