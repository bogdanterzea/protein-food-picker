/* =========================================================================
 * PROTEIN ATLAS SIBIU — MESE COMPLETE (REȚETE)
 * File: js/data/09-recipes.js
 *
 * O masă întreagă, nu un ingredient: proteină + garnitură + legume, cu
 * metoda de gătit aleasă (cuptor / tigaie / grătar / air fryer / fiert /
 * gătit lent) și cu pașii scriși ca pentru cineva care nu gătește des.
 *
 * MACRO-URILE NU SUNT SCRISE DE MÂNĂ.
 * Fiecare ingredient trimite fie către un `id` din atlas (cele 505 produse),
 * fie către o intrare din CĂMARĂ de mai jos. Totalurile se calculează la
 * încărcare, din aceleași cifre pe care le vezi pe cardul produsului. Dacă
 * se corectează eticheta unui produs, se corectează automat și rețeta.
 *
 * Structura unui ingredient:
 *   { id: 'm-piept-pui-dezosat', g: 400 }   → produs din atlas
 *   { p: 'cartofi', g: 500 }                → din cămara de mai jos
 *   { p: 'condimente', g: 5, free: true }   → nu intră în calcul (mirodenii)
 * ========================================================================= */
(function () {
  'use strict';

  /* =======================================================================
   * CĂMARA — ingrediente de bază care nu sunt produse „de raft proteic”
   * și deci nu au intrare proprie în atlas. Valori la 100 g, crud.
   * ==================================================================== */
  const PANTRY = {
    cartofi:        { name: 'Cartofi',                  kcal: 77,  protein: 2.0,  carbs: 17,  fat: 0.1,  fiber: 2.2, salt: 0.01, ronKg: 4.5 },
    'cartofi-dulci':{ name: 'Cartofi dulci',            kcal: 86,  protein: 1.6,  carbs: 20,  fat: 0.1,  fiber: 3.0, salt: 0.02, ronKg: 9 },
    ceapa:          { name: 'Ceapă',                    kcal: 40,  protein: 1.1,  carbs: 9.3, fat: 0.1,  fiber: 1.7, salt: 0.01, ronKg: 3.5 },
    usturoi:        { name: 'Usturoi',                  kcal: 149, protein: 6.4,  carbs: 33,  fat: 0.5,  fiber: 2.1, salt: 0.04, ronKg: 25 },
    'ulei-masline': { name: 'Ulei de măsline',          kcal: 884, protein: 0,    carbs: 0,   fat: 100,  fiber: 0,   salt: 0, ronKg: 42 },
    'ulei-floarea': { name: 'Ulei de floarea-soarelui', kcal: 884, protein: 0,    carbs: 0,   fat: 100,  fiber: 0,   salt: 0, ronKg: 9 },
    unt:            { name: 'Unt',                      kcal: 717, protein: 0.9,  carbs: 0.6, fat: 81,   fiber: 0,   salt: 0.02, ronKg: 48 },
    rosii:          { name: 'Roșii proaspete',          kcal: 18,  protein: 0.9,  carbs: 3.9, fat: 0.2,  fiber: 1.2, salt: 0.01, ronKg: 9 },
    'rosii-cutie':  { name: 'Roșii în bulion (cutie)',  kcal: 32,  protein: 1.6,  carbs: 7.0, fat: 0.3,  fiber: 1.5, salt: 0.3, ronKg: 8 },
    'bulion':       { name: 'Bulion / pastă de roșii',  kcal: 82,  protein: 4.3,  carbs: 19,  fat: 0.5,  fiber: 4.1, salt: 0.6, ronKg: 14 },
    ardei:          { name: 'Ardei gras',               kcal: 31,  protein: 1.0,  carbs: 6.0, fat: 0.3,  fiber: 2.1, salt: 0.01, ronKg: 12 },
    morcov:         { name: 'Morcov',                   kcal: 41,  protein: 0.9,  carbs: 9.6, fat: 0.2,  fiber: 2.8, salt: 0.07, ronKg: 4 },
    dovlecel:       { name: 'Dovlecel',                 kcal: 17,  protein: 1.2,  carbs: 3.1, fat: 0.3,  fiber: 1.0, salt: 0.01, ronKg: 7 },
    vinete:         { name: 'Vinete',                   kcal: 25,  protein: 1.0,  carbs: 5.9, fat: 0.2,  fiber: 3.0, salt: 0.01, ronKg: 8 },
    varza:          { name: 'Varză albă',               kcal: 25,  protein: 1.3,  carbs: 5.8, fat: 0.1,  fiber: 2.5, salt: 0.02, ronKg: 3 },
    castraveti:     { name: 'Castraveți',               kcal: 15,  protein: 0.7,  carbs: 3.6, fat: 0.1,  fiber: 0.5, salt: 0.01, ronKg: 8 },
    salata:         { name: 'Salată verde',             kcal: 15,  protein: 1.4,  carbs: 2.9, fat: 0.2,  fiber: 1.3, salt: 0.03, ronKg: 16 },
    lamaie:         { name: 'Lămâie (zeamă)',           kcal: 22,  protein: 0.4,  carbs: 6.9, fat: 0.2,  fiber: 0.3, salt: 0, ronKg: 10 },
    'orez-alb':     { name: 'Orez alb, uscat',          kcal: 360, protein: 7.0,  carbs: 79,  fat: 0.7,  fiber: 1.3, salt: 0.01, ronKg: 7 },
    bulgur:         { name: 'Bulgur, uscat',            kcal: 342, protein: 12.0, carbs: 63,  fat: 1.3,  fiber: 18,  salt: 0.02, ronKg: 11 },
    cuscus:         { name: 'Cuș-cuș, uscat',           kcal: 376, protein: 13.0, carbs: 72,  fat: 0.6,  fiber: 5.0, salt: 0.02, ronKg: 12 },
    malai:          { name: 'Mălai (pentru mămăligă)',  kcal: 362, protein: 8.1,  carbs: 76,  fat: 3.6,  fiber: 7.3, salt: 0.02, ronKg: 5 },
    faina:          { name: 'Făină albă',               kcal: 364, protein: 10.0, carbs: 76,  fat: 1.0,  fiber: 2.7, salt: 0.01, ronKg: 4 },
    pesmet:         { name: 'Pesmet',                   kcal: 395, protein: 13.0, carbs: 72,  fat: 5.0,  fiber: 4.0, salt: 1.2, ronKg: 11 },
    'lapte-15':     { name: 'Lapte 1,5 %',              kcal: 47,  protein: 3.4,  carbs: 4.8, fat: 1.5,  fiber: 0,   salt: 0.1, ronKg: 6.5 },
    'smantana-gatit': { name: 'Smântână pentru gătit 12 %', kcal: 130, protein: 2.8, carbs: 3.8, fat: 12, fiber: 0, salt: 0.1, ronKg: 18 },
    mustar:         { name: 'Muștar',                   kcal: 66,  protein: 4.0,  carbs: 5.0, fat: 3.5,  fiber: 3.3, salt: 3.0, ronKg: 13 },
    'sos-soia':     { name: 'Sos de soia',              kcal: 53,  protein: 8.0,  carbs: 4.9, fat: 0.1,  fiber: 0.8, salt: 16.0, ronKg: 26 },
    miere:          { name: 'Miere',                    kcal: 304, protein: 0.3,  carbs: 82,  fat: 0,    fiber: 0.2, salt: 0, ronKg: 36 },
    condimente:     { name: 'Sare, piper, boia, ierburi', kcal: 0, protein: 0,    carbs: 0,   fat: 0,    fiber: 0,   salt: 0, ronKg: 0 }
  };

  /* =======================================================================
   * METODELE DE GĂTIT
   * ==================================================================== */
  const METHODS = {
    oven:     { ro: 'La cuptor',    emoji: '🔥', desc: 'Bagi tava și pleci. Cel mai puțin efort activ per gram de proteină.' },
    pan:      { ro: 'La tigaie',    emoji: '🍳', desc: 'Cel mai rapid. Ai nevoie să stai lângă ea.' },
    grill:    { ro: 'La grătar',    emoji: '🔥', desc: 'Cel mai bun gust, cea mai puțină grăsime adăugată.' },
    airfryer: { ro: 'Air fryer',    emoji: '🌀', desc: 'Crocant fără ulei, în jumătate din timpul cuptorului.' },
    boil:     { ro: 'Fiert / supă', emoji: '🥣', desc: 'Ieftin, sățios, se face în cantitate mare.' },
    slow:     { ro: 'Gătit lent',   emoji: '🍲', desc: 'Bucăți ieftine de carne devin fragede. Timp mult, efort mic.' },
    nocook:   { ro: 'Fără gătit',   emoji: '🥗', desc: 'Asamblezi și mănânci.' }
  };

  const RECIPES = [

    /* ===================== PUI ===================== */
    {
      id: 'rc-pui-cuptor-cartofi-broccoli',
      name: 'Piept de pui la cuptor cu cartofi și broccoli',
      emoji: '🍗', base: 'pui', method: 'oven', mealType: 'pranz',
      servings: 2, timeMin: 45, activeTimeMin: 12, effort: 2, difficulty: 'easy',
      equipment: ['tavă de cuptor', 'hârtie de copt', 'cuțit', 'castron'],
      ing: [
        { id: 'm-piept-pui-dezosat', g: 400 },
        { p: 'cartofi', g: 500 },
        { id: 'v-broccoli', g: 250 },
        { p: 'ulei-masline', g: 20 },
        { p: 'usturoi', g: 10 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Pornește cuptorul la 200 °C. Nu îl încălzi în gol mai mult de 10 minute — pierdere de curent degeaba.',
        'Taie cartofii cuburi de ~2 cm. Cu cât sunt mai mari, cu atât stau mai mult; 2 cm e punctul dulce.',
        'Amestecă în castron cartofii cu jumătate din ulei, usturoi tocat, sare, piper și boia. Întinde-i pe tavă.',
        'Bagă tava 15 minute doar cu cartofii — au nevoie de avans față de carne.',
        'Între timp bate pieptul de pui la grosime egală (~2 cm) și unge-l cu restul de ulei și condimente.',
        'Adaugă puiul peste cartofi și mai dă 18–20 de minute.',
        'În ultimele 8 minute pune broccoliul în tavă. Mai mult de atât și se face terci.',
        'Verifică puiul: la 74 °C în centru e gata. Fără termometru — tai cel mai gros loc, zeama trebuie să fie limpede.'
      ],
      tips: [
        'Bate pieptul la grosime egală: altfel vârful subțire e uscat când mijlocul e abia gata.',
        'Lasă carnea 5 minute după cuptor înainte s-o tai — altfel toată zeama rămâne pe tocător.',
        'Fă tavă dublă. A doua zi ai prânz gata, iar cartofii se reîncălzesc bine în air fryer.'
      ],
      swaps: [
        { label: 'Cu paste în loc de cartofi', text: 'Scoate cartofii, fierbe 160 g paste integrale și amestecă-le la final cu puiul tăiat fâșii și cu zeama din tavă. Câștigi ~10 g proteină în plus pe masă.' },
        { label: 'Mai ieftin', text: 'Pulpe dezosate în loc de piept: gust mai bun, preț la jumătate, ~4 g mai puțină proteină la 100 g.' },
        { label: 'Fără cuptor', text: 'Cartofii la microunde 8 minute, puiul la tigaie 6 minute pe parte.' }
      ],
      why: 'O singură tavă, 12 minute de muncă reală și restul e timp în care nu faci nimic. Cel mai bun raport efort/proteină din toată lista.'
    },

    {
      id: 'rc-pui-tigaie-paste-rosii',
      name: 'Paste integrale cu piept de pui și roșii',
      emoji: '🍝', base: 'pui', method: 'pan', mealType: 'pranz',
      servings: 2, timeMin: 25, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['oală', 'tigaie mare', 'strecurătoare'],
      ing: [
        { id: 'm-piept-pui-dezosat', g: 350 },
        { id: 'v-paste-integrale', g: 160 },
        { p: 'rosii-cutie', g: 400 },
        { p: 'ceapa', g: 80 },
        { p: 'usturoi', g: 12 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Pune apa de paste la fiert. Sare bine — e singurul moment în care condimentezi pastele pe dinăuntru.',
        'Taie puiul cuburi de 2 cm. Uscă-l cu un șervet: carnea udă se fierbe în tigaie, nu se rumenește.',
        'Încinge tigaia tare, pune uleiul și prăjește puiul 4–5 minute fără să-l amesteci prea des. Scoate-l.',
        'În aceeași tigaie călește ceapa 3 minute, apoi usturoiul 30 de secunde.',
        'Toarnă roșiile, dă în clocot și lasă 8 minute să scadă.',
        'Fierbe pastele cu 1 minut mai puțin decât scrie pe pungă.',
        'Pune pastele și puiul în sos, cu 2–3 linguri din apa de paste. Amestecă 1 minut — amidonul din apă leagă sosul.'
      ],
      tips: [
        'Apa de paste e ingredient, nu deșeu. O cană pusă deoparte salvează orice sos prea gros.',
        'Pastele integrale au ~13,5 g proteină la 100 g, cu 4 g mai mult decât cele albe — la aceeași porție e o diferență reală.',
        'Dacă vrei mult mai multă proteină, folosește paste din linte roșie: 25 g la 100 g.'
      ],
      swaps: [
        { label: 'Versiunea cu maximum de proteină', text: 'Paste din linte roșie în loc de integrale: masa urcă cu ~18 g proteină și rămâne la aceleași calorii.' },
        { label: 'Cu legume', text: 'Un dovlecel tăiat cuburi, călit cu ceapa. Adaugă volum și fibre aproape fără calorii.' }
      ],
      why: 'Masa clasică de zi de lucru. 25 de minute, o oală și o tigaie, și iese o farfurie pe care o mănâncă și cineva care nu ține dietă.'
    },

    {
      id: 'rc-pui-gratar-orez-legume',
      name: 'Pui la grătar cu orez și legume la tigaie',
      emoji: '🔥', base: 'pui', method: 'grill', mealType: 'pranz',
      servings: 2, timeMin: 35, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['grătar sau tigaie-grill', 'oală mică', 'tigaie'],
      ing: [
        { id: 'm-piept-pui-dezosat', g: 400 },
        { p: 'orez-alb', g: 140 },
        { p: 'ardei', g: 150 },
        { p: 'dovlecel', g: 150 },
        { p: 'ulei-masline', g: 15 },
        { p: 'lamaie', g: 20 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Marinează puiul 15 minute în zeamă de lămâie, jumătate din ulei, usturoi, boia și piper. Sarea o pui la final.',
        'Pune orezul la fiert: 1 parte orez la 2 părți apă, foc mic, capac, 15 minute, apoi 5 minute fără foc, fără să ridici capacul.',
        'Încinge grătarul foarte tare. Un grătar călduț fierbe carnea în loc s-o rumenească.',
        'Pune puiul și NU îl mișca 4 minute. Întoarce-l o singură dată și mai dă 4 minute.',
        'Între timp călește ardeiul și dovlecelul 5 minute la foc mare, în restul de ulei.',
        'Lasă carnea 5 minute pe un tocător înainte s-o feliezi.'
      ],
      tips: [
        'Sarea pusă înainte de marinare scoate apa din carne. Sare la final, sau cu minimum 40 de minute înainte (atunci se reabsoarbe).',
        'O singură întoarcere. De fiecare dată când muți carnea, o răcești.',
        'Grătarul e metoda care adaugă cele mai puține calorii: nu ai nevoie de mai mult de o linguriță de ulei.'
      ],
      swaps: [
        { label: 'Cu bulgur', text: 'Bulgur în loc de orez: 12 g proteină la 100 g față de 7, plus mult mai multe fibre. Se face în 12 minute.' },
        { label: 'Iarna, fără grătar', text: 'Tigaie-grill din fontă, aceeași tehnică. Deschide geamul.' }
      ],
      why: 'Cea mai curată metodă: gustul vine din rumenire și lămâie, nu din grăsime adăugată.'
    },

    {
      id: 'rc-ciocanele-airfryer-cartofi',
      name: 'Ciocănele la air fryer cu cartofi și salată',
      emoji: '🌀', base: 'pui', method: 'airfryer', mealType: 'cina',
      servings: 2, timeMin: 30, activeTimeMin: 8, effort: 1, difficulty: 'trivial',
      equipment: ['air fryer', 'castron'],
      ing: [
        { id: 'm-pulpe-pui-inferioare', g: 500 },
        { p: 'cartofi', g: 400 },
        { p: 'salata', g: 100 },
        { p: 'castraveti', g: 100 },
        { p: 'ulei-masline', g: 12 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Usucă ciocănelele cu un șervet și dă-le prin ulei, boia, usturoi granulat, sare și piper.',
        'Air fryer la 190 °C, 12 minute.',
        'Taie cartofii bastonașe, amestecă-i cu un strop de ulei și pune-i peste carne.',
        'Încă 12–14 minute la 190 °C, scuturând coșul o dată la mijloc.',
        'Fă salata simplu: verdeață, castraveți, ulei, oțet sau lămâie, sare.',
        'Verifică pielea: dacă nu e crocantă, mai dă 3 minute la 200 °C.'
      ],
      tips: [
        'Nu umple coșul. Aerul trebuie să circule — două ture separate ies mai bine decât una înghesuită.',
        'Ciocănelele sunt printre cele mai ieftine surse de proteină animală și au gust mult mai bun decât pieptul.',
        'Pielea are aproape toată grăsimea. Dacă o dai jos după gătit, păstrezi gustul și pierzi caloriile.'
      ],
      swaps: [
        { label: 'La cuptor', text: 'Același lucru la 200 °C, 35–40 de minute, întorcând o dată.' },
        { label: 'Mai slab', text: 'Pulpe dezosate fără piele: ~18,5 g proteină la 100 g și mult mai puțină grăsime.' }
      ],
      why: 'Opt minute de muncă. Air fryerul face restul, iar carnea cu os are gust pe care pieptul nu îl are.'
    },

    {
      id: 'rc-supa-pui-legume',
      name: 'Supă de pui cu legume și tăiței',
      emoji: '🥣', base: 'pui', method: 'boil', mealType: 'pranz',
      servings: 4, timeMin: 70, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['oală mare', 'spumieră'],
      ing: [
        { id: 'm-pulpe-pui-superioare', g: 700 },
        { p: 'morcov', g: 200 },
        { p: 'ceapa', g: 120 },
        { p: 'ardei', g: 100 },
        { id: 'v-paste-integrale', g: 100 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Pune carnea în apă rece, nu fiartă. Așa iese gustul în supă.',
        'Când dă în clocot, ia spuma cu spumiera 2–3 minute. De asta depinde dacă supa e limpede sau tulbure.',
        'Dă focul mic. O supă bună nu clocotește niciodată tare — doar tremură.',
        'După 30 de minute adaugă morcovul, ceapa și ardeiul întregi sau în bucăți mari.',
        'Mai fierbe 25 de minute. Scoate carnea, dezosează-o și pune-o înapoi.',
        'Adaugă tăițeii în ultimele 8 minute, direct în supă.',
        'Potrivește de sare abia la final, când toată apa a scăzut cât are să scadă.'
      ],
      tips: [
        'Fă porție dublă. Supa e mai bună a doua zi și se congelează perfect (fără tăiței — pe aceia îi fierbi la reîncălzire).',
        'Carcasele și gâturile de pui costă aproape nimic și fac o supă mai gustoasă decât pieptul.',
        'O lingură de bulion la final dă culoare fără să schimbe gustul.'
      ],
      swaps: [
        { label: 'Ciorbă acră', text: 'Borș sau zeamă de varză la final, plus leuștean. Nu fierbe borșul mult, își pierde aroma.' },
        { label: 'Mai multă proteină', text: 'Dreșeală cu 2 ouă bătute cu iaurt, turnată la final pe foc oprit: +12 g proteină pe oală.' }
      ],
      why: 'Patru porții dintr-o oală, din cea mai ieftină carne care există. Se reîncălzește fără să se strice.'
    },

    {
      id: 'rc-pui-naut-cuptor',
      name: 'Tavă de pui cu năut și ardei',
      emoji: '🍲', base: 'pui', method: 'oven', mealType: 'pranz',
      servings: 3, timeMin: 50, activeTimeMin: 15, effort: 2, difficulty: 'easy',
      equipment: ['tavă de cuptor', 'strecurătoare'],
      ing: [
        { id: 'm-pulpe-pui-dezosate', g: 500 },
        { id: 'v-naut-uscat', g: 150 },
        { p: 'ardei', g: 200 },
        { p: 'ceapa', g: 100 },
        { p: 'rosii-cutie', g: 200 },
        { p: 'ulei-masline', g: 20 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Năutul uscat se pune la înmuiat de seara, în apă rece, cel puțin 8 ore. Apoi se fierbe 45 de minute.',
        'Dacă nu ai timp: o cutie de năut la conservă, clătit bine. Mai scump, dar gata.',
        'Cuptor la 200 °C. Amestecă în tavă năutul fiert, ardeiul, ceapa și roșiile cu ulei și condimente.',
        'Așază deasupra pulpele condimentate, cu partea frumoasă în sus.',
        'Cuptor 35 de minute. Nu acoperi tava — vrei ca lichidul să scadă.',
        'Dacă la final e prea zemos, mai dă 5 minute cu grill-ul pornit.'
      ],
      tips: [
        '100 g de năut uscat devin ~230 g fiert. Dacă îți notezi mâncarea, folosește greutatea uscată sau te înșeli cu peste 100 %.',
        'Năutul aduce fibre și proteină vegetală, iar carnea completează profilul de aminoacizi. Combinația e mai bună decât fiecare separat.',
        'Apa în care fierbi năutul se aruncă — acolo ajung compușii care dau balonare.'
      ],
      swaps: [
        { label: 'Cu fasole albă', text: 'Aceeași rețetă, gust mai blând, se fierbe la fel de mult.' },
        { label: 'Rapid', text: 'Năut la conservă + pulpe: 35 de minute cap-coadă.' }
      ],
      why: 'Carne și leguminoase în aceeași tavă. Iese ieftin, sățios, și are mai multe fibre decât aproape orice altă masă cu carne.'
    },

    {
      id: 'rc-stirfry-pui-orez',
      name: 'Stir-fry de pui cu legume și orez',
      emoji: '🥢', base: 'pui', method: 'pan', mealType: 'cina',
      servings: 2, timeMin: 25, activeTimeMin: 18, effort: 2, difficulty: 'easy',
      equipment: ['wok sau tigaie mare', 'oală mică'],
      ing: [
        { id: 'm-piept-pui-dezosat', g: 350 },
        { p: 'orez-alb', g: 130 },
        { p: 'ardei', g: 150 },
        { id: 'v-broccoli', g: 150 },
        { p: 'morcov', g: 100 },
        { p: 'sos-soia', g: 25 },
        { p: 'usturoi', g: 10 },
        { p: 'ulei-floarea', g: 12 }
      ],
      steps: [
        'Pune orezul la fiert întâi — el durează cel mai mult.',
        'Taie totul înainte să pornești focul. La stir-fry nu ai timp să tai în timp ce gătești.',
        'Taie puiul fâșii subțiri, contra fibrei.',
        'Foc maxim. Pui în tigaie 3 minute, scoate-l.',
        'Legumele tari (morcov, broccoli) 3 minute, apoi ardeiul încă 2.',
        'Pune puiul înapoi, usturoiul și sosul de soia. Amestecă 1 minut și oprește focul.',
        'Legumele trebuie să rămână crocante. Dacă s-au înmuiat, ai gătit prea mult.'
      ],
      tips: [
        'Sosul de soia are 16 g de sare la 100 g. 25 g înseamnă deja 4 g de sare pe toată tigaia — nu mai săra nimic.',
        'Tigaia trebuie să fie încinsă înainte să pui uleiul, iar uleiul înainte să pui carnea.',
        'Nu înghesui tigaia. Carnea prea deasă lasă apă și se fierbe.'
      ],
      swaps: [
        { label: 'Cu tofu', text: 'Tofu afumat tăiat cuburi, prăjit primul până se rumenește. Varianta vegetariană cu ~13 g proteină la 100 g.' },
        { label: 'Fără orez', text: 'Tăiței de orez sau doar legume dublate, dacă ești în deficit caloric.' }
      ],
      why: '18 minute de la frigider la farfurie, cu legume care încă au textură.'
    },

    /* ===================== CURCAN ===================== */
    {
      id: 'rc-snitel-curcan-piure',
      name: 'Șnițel de curcan cu piure și salată de varză',
      emoji: '🍽️', base: 'curcan', method: 'pan', mealType: 'pranz',
      servings: 2, timeMin: 35, activeTimeMin: 25, effort: 3, difficulty: 'medium',
      equipment: ['tigaie', 'oală', 'trei farfurii adânci', 'pasator'],
      ing: [
        { id: 'm-snitel-curcan', g: 400 },
        { p: 'cartofi', g: 500 },
        { p: 'varza', g: 200 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'pesmet', g: 50 },
        { p: 'faina', g: 25 },
        { p: 'lapte-15', g: 80 },
        { p: 'ulei-floarea', g: 25 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Pune cartofii la fiert în apă cu sare, tăiați în sferturi. 20 de minute.',
        'Bate feliile de curcan până ajung la ~1 cm. Sare și piper pe ambele părți.',
        'Trei farfurii: făină, ou bătut, pesmet. În ordinea asta, fără să sari niciuna.',
        'Trece carnea prin făină (scutur-o), apoi prin ou, apoi prin pesmet, apăsând ușor.',
        'Ulei de un deget în tigaie, încins. Prăjește 3 minute pe parte, până e auriu.',
        'Scoate pe grătar sau pe hârtie absorbantă, nu pe farfurie — altfel crusta se înmoaie.',
        'Pasează cartofii cu laptele cald și puțin unt. Cartofii se pasează calzi, niciodată reci.',
        'Salata de varză: tăiată subțire, sare, frecată cu mâna 1 minut, apoi oțet și ulei.'
      ],
      tips: [
        'Pesmetul absoarbe ulei. Un șnițel prăjit corect, în ulei bine încins, absoarbe mult mai puțin decât unul pus în ulei călduț.',
        'Varianta la cuptor: aceeași panare, 200 °C, 20 de minute, întors o dată. Economisești ~150 kcal de porție.',
        'Curcanul are 23,5 g proteină la 100 g — cel mai slab dintre cărnurile obișnuite.'
      ],
      swaps: [
        { label: 'Fără panare', text: 'Curcan simplu la tigaie: pierzi crusta, câștigi ~10 g grăsime mai puțin pe porție.' },
        { label: 'Panare mai bună', text: 'Jumătate pesmet, jumătate fulgi de ovăz măcinați: mai multe fibre, crustă la fel de crocantă.' }
      ],
      why: 'Mâncarea de duminică făcută cu carnea cea mai slabă de pe raft. Cu varianta la cuptor devine masă de zi cu zi.'
    },

    {
      id: 'rc-chiftele-curcan-cuscus',
      name: 'Chiftele de curcan la cuptor cu cuș-cuș',
      emoji: '🧆', base: 'curcan', method: 'oven', mealType: 'pranz',
      servings: 3, timeMin: 40, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['tavă', 'castron', 'oală mică'],
      ing: [
        { id: 'm-carne-tocata-curcan', g: 500 },
        { p: 'cuscus', g: 150 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'ceapa', g: 80 },
        { p: 'usturoi', g: 10 },
        { p: 'rosii', g: 200 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Cuptor la 200 °C.',
        'Amestecă tocătura cu ceapa dată pe răzătoare mică, usturoi, ou, sare, piper și mult pătrunjel.',
        'Ceapa rasă, nu tocată: se topește în carne și ține chiftelele moi.',
        'Formează bile de mărimea unei nuci mari, cu mâinile ude ca să nu se lipească.',
        'Tavă cu hârtie de copt, un strop de ulei peste, 20–22 de minute.',
        'Cuș-cușul: apă clocotită cât cuș-cușul plus un deget, capac, 5 minute, apoi desfaci cu furculița.',
        'Roșii tăiate cubulețe cu ulei, sare și busuioc, peste cuș-cuș.'
      ],
      tips: [
        'Tocătura de curcan e slabă, deci se usucă ușor. Ceapa rasă și oul rezolvă asta fără să adaugi grăsime.',
        'Cuș-cușul se face în 5 minute și are 13 g proteină la 100 g — mai mult decât orezul alb.',
        'Chiftelele coapte se congelează crude, pe tavă, apoi se mută în pungă. Se coc direct din congelator, +5 minute.'
      ],
      swaps: [
        { label: 'Cu sos', text: 'Toarnă peste chiftele o cutie de roșii în ultimele 10 minute și ai chiftele marinate.' },
        { label: 'Mai ieftin', text: 'Carne tocată de pui: ~4 g proteină mai puțin la 100 g, dar și preț mai mic.' }
      ],
      why: 'Se face în cantitate, se congelează, și e una dintre puținele mâncăruri cu tocătură care rămâne slabă.'
    },

    /* ===================== PORC ===================== */
    {
      id: 'rc-muschiulet-porc-cuptor',
      name: 'Mușchiuleț de porc la cuptor cu cartofi noi',
      emoji: '🥩', base: 'porc', method: 'oven', mealType: 'pranz',
      servings: 3, timeMin: 45, activeTimeMin: 12, effort: 2, difficulty: 'easy',
      equipment: ['tavă', 'tigaie', 'folie de aluminiu'],
      ing: [
        { id: 'm-muschiulet-porc', g: 600 },
        { p: 'cartofi', g: 600 },
        { p: 'usturoi', g: 15 },
        { p: 'ulei-masline', g: 20 },
        { p: 'mustar', g: 20 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Scoate carnea din frigider cu 20 de minute înainte. Carnea rece se gătește inegal.',
        'Unge mușchiulețul cu muștar, usturoi, sare, piper și cimbru.',
        'Rumenește-l în tigaie foarte încinsă, 2 minute pe fiecare parte. Pasul ăsta face gustul.',
        'Mută-l în tavă peste cartofii tăiați în sferturi și unși cu ulei.',
        'Cuptor 200 °C, 25–30 de minute. La 63 °C în centru e gata și rămâne roz — e sigur și corect pentru porc.',
        'Acoperă cu folie și lasă 10 minute. Fără pasul ăsta pierzi jumătate din zeamă la tăiere.'
      ],
      tips: [
        'Mușchiulețul e cea mai slabă bucată de porc: 21,5 g proteină și doar ~3 g grăsime la 100 g.',
        'Porcul gătit până devine gri e porc stricat. 63 °C și odihnă — atât.',
        'Muștarul nu se simte ca muștar la final; formează crusta.'
      ],
      swaps: [
        { label: 'Cu ceafă', text: 'Mai gustoasă și mai ieftină, dar ~250 kcal la 100 g față de 118. Bună când nu ești în deficit.' },
        { label: 'Cu legume rădăcinoase', text: 'Morcov și păstârnac în loc de jumătate din cartofi: mai puține calorii, mai multe fibre.' }
      ],
      why: 'Arată a mâncare de sărbătoare, are macro-uri de zi de lucru și cere 12 minute de atenție.'
    },

    {
      id: 'rc-tocana-porc-cartofi',
      name: 'Tocană de porc cu cartofi',
      emoji: '🍲', base: 'porc', method: 'slow', mealType: 'pranz',
      servings: 4, timeMin: 90, activeTimeMin: 20, effort: 3, difficulty: 'easy',
      equipment: ['oală cu fund gros'],
      ing: [
        { id: 'm-ceafa-porc', g: 700 },
        { p: 'cartofi', g: 700 },
        { p: 'ceapa', g: 200 },
        { p: 'bulion', g: 60 },
        { p: 'ardei', g: 150 },
        { p: 'ulei-floarea', g: 20 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Taie carnea cuburi de 3 cm. Rumenește-o în tranșe, la foc mare, fără s-o înghesui.',
        'Scoate carnea, călește ceapa în aceeași oală până devine sticloasă.',
        'Pune boiaua pe focul oprit — dacă o arzi, amărăște toată oala.',
        'Carnea înapoi, apă cât s-o acopere, capac, foc mic, 50 de minute.',
        'Adaugă cartofii și ardeiul, mai fierbe 25 de minute.',
        'Bulionul la final, 5 minute. Potrivește de sare abia acum.'
      ],
      tips: [
        'Ceafa e o bucată grasă și tocmai de asta rezistă la fiert lung fără să se usuce.',
        'Tocana e mai bună a doua zi. Face porții pentru patru mese la un singur efort.',
        'Dacă vrei mai slab: pulpă de porc în loc de ceafă, dar fierbe cu 15 minute mai mult.'
      ],
      swaps: [
        { label: 'La slow cooker', text: '4 ore pe mare sau 7 pe mic. Rumenirea cărnii tot în tigaie, înainte.' },
        { label: 'Cu fasole', text: 'Fasole albă înmuiată în loc de jumătate din cartofi — mai multe fibre și proteină vegetală.' }
      ],
      why: 'Bucata ieftină de carne devine fragedă doar prin timp. 20 de minute de muncă pentru patru porții.'
    },

    /* ===================== VITĂ ===================== */
    {
      id: 'rc-chiftele-vita-paste',
      name: 'Chiftele de vită în sos de roșii cu paste',
      emoji: '🍝', base: 'vita', method: 'pan', mealType: 'pranz',
      servings: 3, timeMin: 45, activeTimeMin: 25, effort: 3, difficulty: 'medium',
      equipment: ['tigaie adâncă', 'oală', 'castron'],
      ing: [
        { id: 'm-carne-tocata-vita', g: 500 },
        { id: 'v-paste-integrale', g: 210 },
        { p: 'rosii-cutie', g: 500 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'ceapa', g: 100 },
        { p: 'usturoi', g: 15 },
        { p: 'ulei-masline', g: 20 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Amestecă tocătura cu oul, ceapa rasă, usturoiul, sare, piper și oregano. Nu frământa mult — chiftelele devin tari.',
        'Formează bile mici, cât o nucă. Mici se gătesc uniform și intră mai bine în sos.',
        'Rumenește-le în ulei pe toate părțile, 5 minute. Nu trebuie să fie gătite complet.',
        'Scoate-le, călește usturoiul 30 de secunde, toarnă roșiile.',
        'Pune chiftelele înapoi în sos, foc mic, capac, 20 de minute.',
        'Fierbe pastele al dente și amestecă-le direct în tigaie, cu puțină apă de paste.'
      ],
      tips: [
        'Chiftelele se termină de gătit ÎN sos. Așa rămân moi și dau gust sosului.',
        'Vita tocată are 18,5 g proteină la 100 g, dar și 214 kcal — porționează conștient.',
        'Un vârf de zahăr sau un morcov ras în sos taie aciditatea roșiilor mai bine decât orice altceva.'
      ],
      swaps: [
        { label: 'Mai slab', text: 'Jumătate vită, jumătate piept de curcan tocat: scazi ~80 kcal pe porție.' },
        { label: 'Fără paste', text: 'Peste piure de conopidă sau dovlecel spiralat, dacă ții carbohidrații jos.' }
      ],
      why: 'Mâncarea pe care o mănâncă toată casa, cu 40+ g de proteină pe porție.'
    },

    /* ===================== PEȘTE ===================== */
    {
      id: 'rc-somon-cuptor-cartofi',
      name: 'Somon la cuptor cu cartofi și broccoli',
      emoji: '🐟', base: 'peste', method: 'oven', mealType: 'cina',
      servings: 2, timeMin: 40, activeTimeMin: 10, effort: 1, difficulty: 'trivial',
      equipment: ['tavă', 'hârtie de copt'],
      ing: [
        { id: 'f-somon-file-proaspat', g: 300 },
        { p: 'cartofi', g: 400 },
        { id: 'v-broccoli', g: 200 },
        { p: 'lamaie', g: 30 },
        { p: 'ulei-masline', g: 18 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Cuptor 200 °C. Cartofii tăiați subțire, cu ulei și sare, 20 de minute singuri.',
        'Somonul cu pielea în jos, peste cartofi. Ulei, sare, piper, felii de lămâie deasupra.',
        '12–14 minute. Peștele e gata când se desface în fulgi la apăsare ușoară cu furculița.',
        'Broccoliul intră în ultimele 8 minute.',
        'Nu îl mai ține „ca să fie sigur”. Somonul trecut e uscat și lasă albumina albă la suprafață.'
      ],
      tips: [
        'Somonul e scump per gram de proteină, dar e printre puținele surse reale de omega-3 EPA/DHA.',
        'Congelat porționat e cu 30–40 % mai ieftin decât proaspăt la tejghea și la fel de bun la cuptor.',
        'Pielea lăsată dedesubt protejează carnea de căldura directă.'
      ],
      swaps: [
        { label: 'Mult mai ieftin', text: 'File de cod congelat: 17,5 g proteină la doar 76 kcal la 100 g. Cea mai slabă proteină din atlas.' },
        { label: 'Local', text: 'Păstrăv din Mărginimea Sibiului, întreg, 20 de minute la 190 °C.' }
      ],
      why: 'Zece minute de muncă, o singură tavă, și singura masă de aici care aduce omega-3 în cantitate care contează.'
    },

    {
      id: 'rc-paste-ton-rosii',
      name: 'Paste cu ton și roșii, în 15 minute',
      emoji: '🥫', base: 'peste', method: 'pan', mealType: 'cina',
      servings: 2, timeMin: 15, activeTimeMin: 12, effort: 1, difficulty: 'trivial',
      equipment: ['oală', 'tigaie'],
      ing: [
        { id: 'f-ton-bucati-suc-propriu-nixe', g: 208 },
        { id: 'v-paste-integrale', g: 160 },
        { p: 'rosii-cutie', g: 300 },
        { p: 'usturoi', g: 12 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Apa de paste la fiert, bine sărată.',
        'Usturoi feliat în ulei, la foc mic, 1 minut. Să nu se ardă.',
        'Roșiile, sare, piper, un praf de chili. Fierbe 6–7 minute.',
        'Tonul scurs, la final, amestecat ușor — nu îl fărâmița complet.',
        'Pastele al dente, direct în sos, cu 2 linguri de apă de paste.'
      ],
      tips: [
        'Două conserve de ton scurs înseamnă ~54 g de proteină pe toată tigaia, pentru sub 15 lei.',
        'Ton în suc propriu, nu în ulei: aceeași proteină, jumătate din calorii.',
        'O cutie de 160 g are doar ~104 g de ton scurs. Cifrele de aici sunt pe greutatea scursă.'
      ],
      swaps: [
        { label: 'Cu măsline și capere', text: 'Varianta puttanesca. Atenție la sare — nu mai adaugi deloc.' },
        { label: 'Fără paste', text: 'Peste orez sau doar cu o salată mare, dacă ții caloriile jos.' }
      ],
      why: 'Cincisprezece minute, ingrediente care stau în dulap luni de zile, și 40+ g de proteină pe porție.'
    },

    {
      id: 'rc-salata-ton-naut',
      name: 'Salată completă cu ton, năut și ou',
      emoji: '🥗', base: 'peste', method: 'nocook', mealType: 'pranz',
      servings: 2, timeMin: 12, activeTimeMin: 12, effort: 1, difficulty: 'trivial',
      equipment: ['castron', 'oală mică pentru ouă'],
      ing: [
        { id: 'f-ton-bucati-suc-propriu-nixe', g: 104 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 'v-naut-uscat', g: 60 },
        { p: 'castraveti', g: 150 },
        { p: 'rosii', g: 200 },
        { p: 'salata', g: 80 },
        { p: 'ceapa', g: 40 },
        { p: 'ulei-masline', g: 15 },
        { p: 'lamaie', g: 20 }
      ],
      steps: [
        'Ouăle: în apă clocotită 8 minute, apoi imediat în apă rece. Se curăță ușor și gălbenușul rămâne cremos.',
        'Năutul fiert dinainte (sau la conservă, clătit bine).',
        'Taie legumele mari, nu mărunt — o salată de prânz trebuie să aibă textură.',
        'Dressing simplu: ulei, lămâie, sare, piper, muștar dacă vrei.',
        'Amestecă totul cu tonul scurs și ouăle tăiate în sferturi.'
      ],
      tips: [
        'Fierbe 6 ouă odată la începutul săptămânii. Se țin 5 zile în frigider, necurățate.',
        'Năutul face diferența între „salată” și „masă”. Fără el, te vei sătura în două ore.',
        'Dressingul se pune la final, altfel salata lasă apă.'
      ],
      swaps: [
        { label: 'La birou', text: 'Totul în borcan, dressingul la fund, verdeața deasupra. Se răstoarnă la masă.' },
        { label: 'Fără pește', text: 'Telemea sau brânză de vaci în loc de ton — rămâne peste 30 g de proteină.' }
      ],
      why: 'Zero gătit, se face din dulap și frigider, și e una dintre puținele salate care chiar te satură.'
    },

    /* ===================== OUĂ ===================== */
    {
      id: 'rc-omleta-legume-paine',
      name: 'Omletă cu legume și pâine proteică',
      emoji: '🍳', base: 'oua', method: 'pan', mealType: 'mic-dejun',
      servings: 1, timeMin: 12, activeTimeMin: 10, effort: 1, difficulty: 'trivial',
      equipment: ['tigaie antiaderentă', 'bol'],
      ing: [
        { id: 'd-oua-gaina-l', g: 165 },
        { id: 'v-spanac', g: 60 },
        { p: 'rosii', g: 80 },
        { p: 'ceapa', g: 30 },
        { id: 'd-cascaval-dalia', g: 25 },
        { p: 'ulei-masline', g: 6 },
        { p: 'condimente', g: 2, free: true }
      ],
      steps: [
        'Bate ouăle cu sare și piper până sunt complet uniforme — fără dungi de albuș.',
        'Călește ceapa și roșiile 2 minute, apoi spanacul 30 de secunde până cade.',
        'Foc MIC. Toarnă ouăle. Omleta se face la foc mic; la foc mare devine cauciuc.',
        'Când marginile s-au prins dar mijlocul e încă moale, presară cașcavalul și pliaz-o în două.',
        'Încă 30 de secunde și scoate-o. Se termină de gătit în farfurie.',
        'Servește cu o felie de pâine proteică prăjită.'
      ],
      tips: [
        'Trei ouă = ~19 g proteină. Cu cașcaval și pâine proteică, micul dejun trece de 30 g.',
        'Cel mai bun câștig al zilei: micul dejun tipic românesc are sub 8 g proteină. Ăsta are peste 30.',
        'Tigaia antiaderentă nu are nevoie de mult ulei; 6 g sunt suficiente.'
      ],
      swaps: [
        { label: 'Mai slab', text: '2 ouă întregi + 100 g albuș lichid: aceeași proteină, jumătate din grăsime.' },
        { label: 'Fără tigaie', text: 'Toate ingredientele într-o cană, 2 minute la microunde, amestecat la mijloc.' }
      ],
      why: 'Zece minute care mută 30 de grame de proteină în cea mai prost gestionată masă a zilei.'
    },

    {
      id: 'rc-shakshuka',
      name: 'Ouă în sos de roșii (shakshuka) cu pâine',
      emoji: '🍅', base: 'oua', method: 'pan', mealType: 'mic-dejun',
      servings: 2, timeMin: 25, activeTimeMin: 15, effort: 2, difficulty: 'easy',
      equipment: ['tigaie cu capac'],
      ing: [
        { id: 'd-oua-gaina-l', g: 220 },
        { p: 'rosii-cutie', g: 400 },
        { p: 'ardei', g: 150 },
        { p: 'ceapa', g: 100 },
        { p: 'usturoi', g: 12 },
        { id: 'd-telemea-vaca', g: 60 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Călește ceapa și ardeiul 6–7 minute, până se înmoaie de tot.',
        'Usturoi, chimion, boia — 30 de secunde, pe foc mic.',
        'Roșiile, sare, piper. Fierbe 8 minute până sosul se îngroașă. Dacă e prea apos, ouăle vor pluti.',
        'Fă adâncituri cu lingura și sparge câte un ou în fiecare.',
        'Capac, foc mic, 5–7 minute. Albușul închegat, gălbenușul încă moale.',
        'Telemea sfărâmată deasupra și pătrunjel. Se mănâncă direct din tigaie, cu pâine.'
      ],
      tips: [
        'Sosul trebuie să fie gros ÎNAINTE să pui ouăle. Ăsta e singurul pas care poate strica rețeta.',
        'Merge la fel de bine seara ca dimineața.',
        'Se face într-o singură tigaie și nu are nevoie de garnitură separată.'
      ],
      swaps: [
        { label: 'Cu cârnați', text: 'Cârnați de pui rumeniți la început: +10 g proteină pe porție.' },
        { label: 'Cu năut', text: 'O cutie de năut în sos: mai multe fibre, masă și mai sățioasă.' }
      ],
      why: 'O tigaie, ingrediente ieftine, și o masă care arată mult mai bine decât efortul cerut.'
    },

    /* ===================== LACTATE ===================== */
    {
      id: 'rc-bol-branza-ovaz',
      name: 'Bol de brânză de vaci cu ovăz și fructe',
      emoji: '🥣', base: 'lactate', method: 'nocook', mealType: 'mic-dejun',
      servings: 1, timeMin: 5, activeTimeMin: 5, effort: 0, difficulty: 'none',
      equipment: ['bol', 'lingură'],
      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 250 },
        { id: 'v-fulgi-ovaz-mari', g: 50 },
        { id: 'b-lapte-praf-degresat', g: 15 },
        { p: 'miere', g: 12 },
        { id: 'v-nuci', g: 15 }
      ],
      steps: [
        'Pune brânza de vaci în bol.',
        'Amestecă laptele praf direct în ea — se topește și adaugă ~5 g de proteină fără să schimbe gustul.',
        'Fulgii de ovăz deasupra, nefierți. Se înmoaie singuri în 2 minute.',
        'Miere și nuci la final.',
        'Dacă ai timp seara: amestecă tot și lasă la frigider peste noapte. Dimineața e cremos.'
      ],
      tips: [
        'Laptele praf degresat e trucul cel mai ieftin din tot atlasul: 36 g proteină la 100 g, ~12 lei per 100 g de proteină. Stă pe raftul de patiserie, nu la lactate.',
        'Brânza de vaci slabă are 17 g proteină la 100 g și digestie lentă — ține de foame până la prânz.',
        'Fără gătit, fără vase murdare, cinci minute.'
      ],
      swaps: [
        { label: 'Seara, nu dimineața', text: 'Aceeași combinație e ideală înainte de culcare — cazeina se digeră lent.' },
        { label: 'Cu iaurt grecesc', text: 'Mai cremos, ceva mai puțină proteină la aceeași cantitate.' }
      ],
      why: 'Cinci minute și peste 50 g de proteină, din trei lucruri care stau oricum în casă.'
    },

    /* ===================== VEGETAL ===================== */
    {
      id: 'rc-linte-orez-dal',
      name: 'Linte roșie cu orez și legume (dal)',
      emoji: '🌱', base: 'leguminoase', method: 'boil', mealType: 'pranz',
      servings: 3, timeMin: 35, activeTimeMin: 15, effort: 2, difficulty: 'easy',
      equipment: ['oală', 'oală mică'],
      ing: [
        { id: 'v-linte-rosie-uscata', g: 220 },
        { p: 'orez-alb', g: 150 },
        { p: 'ceapa', g: 120 },
        { p: 'morcov', g: 120 },
        { p: 'usturoi', g: 15 },
        { p: 'rosii-cutie', g: 200 },
        { p: 'ulei-floarea', g: 18 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Clătește lintea până apa iese limpede. Nu are nevoie de înmuiere — de asta e cea mai practică leguminoasă.',
        'Călește ceapa și morcovul 5 minute, apoi usturoiul și condimentele (chimion, turmeric, boia) 30 de secunde.',
        'Lintea, roșiile și apă cât să acopere cu două degete.',
        'Foc mic, 20 de minute, amestecând din când în când. Lintea roșie se face terci — asta și vrei.',
        'Orezul se fierbe separat, în paralel.',
        'Sare la final. Sarea pusă devreme întărește coaja leguminoaselor.'
      ],
      tips: [
        'Linte + orez în aceeași masă acoperă profilul complet de aminoacizi. Nici una singură nu îl are.',
        '100 g linte uscată → ~230 g fiartă. Cifrele de aici sunt pe cantitatea uscată, cum se cumpără.',
        'Costă sub 6 lei per 100 g de proteină — printre cele mai ieftine mese din atlas.'
      ],
      swaps: [
        { label: 'Cu iaurt', text: 'O lingură de iaurt grecesc pe farfurie: +proteină completă și taie din picant.' },
        { label: 'Mai consistent', text: 'Un ou ochi deasupra. Clasic și corect nutrițional.' }
      ],
      why: 'Cea mai ieftină masă completă din tot proiectul, și una dintre puținele vegetariene care chiar satură.'
    },

    {
      id: 'rc-tofu-tigaie-orez',
      name: 'Tofu afumat la tigaie cu orez și legume',
      emoji: '🌿', base: 'tofu', method: 'pan', mealType: 'cina',
      servings: 2, timeMin: 30, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['tigaie', 'oală mică', 'șervete de bucătărie'],
      ing: [
        { id: 'v-tofu-afumat-vemondo', g: 400 },
        { p: 'orez-alb', g: 130 },
        { id: 'v-broccoli', g: 200 },
        { p: 'morcov', g: 100 },
        { p: 'sos-soia', g: 25 },
        { p: 'usturoi', g: 10 },
        { p: 'ulei-floarea', g: 15 }
      ],
      steps: [
        'Stoarce tofu între două șervete, cu o greutate deasupra, 10 minute. Pasul ăsta decide dacă se rumenește sau se fărâmă.',
        'Taie-l cuburi de 2 cm.',
        'Tigaie foarte încinsă, ulei, tofu. NU îl mișca 3 minute — lasă-l să facă crustă.',
        'Întoarce cuburile și mai rumenește 3 minute. Scoate-le.',
        'Legumele 4 minute la foc mare, apoi usturoiul.',
        'Tofu înapoi, sos de soia, 1 minut, gata. Peste orezul fiert separat.'
      ],
      tips: [
        'Tofu ud nu se rumenește niciodată. Storsul e obligatoriu, nu opțional.',
        'Soia e singura leguminoasă cu proteină completă — nu are nevoie de combinare cu cereale.',
        'Tofu afumat are deja gust; cel natur are nevoie de marinare.'
      ],
      swaps: [
        { label: 'Cu granule de soia', text: 'Hidratate în apă fierbinte 10 minute: 50 g proteină la 100 g uscat, la un preț mult mai mic.' },
        { label: 'Cu ou', text: 'Un ou amestecat în orez la final, dacă nu ești vegan.' }
      ],
      why: 'Varianta vegetariană care nu e o compromisă: proteină completă, textură reală, 20 de minute.'
    },

    {
      id: 'rc-bolognese-soia-paste',
      name: 'Bolognese din granule de soia cu paste',
      emoji: '🍝', base: 'leguminoase', method: 'pan', mealType: 'pranz',
      servings: 3, timeMin: 35, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['tigaie adâncă', 'oală', 'bol'],
      ing: [
        { id: 'v-granule-soia', g: 120 },
        { id: 'v-paste-integrale', g: 210 },
        { p: 'rosii-cutie', g: 500 },
        { p: 'ceapa', g: 120 },
        { p: 'morcov', g: 100 },
        { p: 'usturoi', g: 15 },
        { p: 'bulion', g: 30 },
        { p: 'ulei-masline', g: 20 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Hidratează granulele în apă fierbinte cu puțină sare, 10 minute. Apoi stoarce-le bine.',
        'Călește ceapa și morcovul ras 6 minute — baza dulce a oricărui bolognese.',
        'Usturoi 30 de secunde, apoi granulele stoarse, 3 minute, ca să prindă puțină culoare.',
        'Roșii, bulion, oregano, o frunză de dafin. Foc mic, 15 minute.',
        'Pastele al dente, amestecate în sos cu puțină apă de fierbere.'
      ],
      tips: [
        'Granulele de soia au 50 g proteină la 100 g uscate și costă ~5 lei per 100 g de proteină. Nimic din raionul de carne nu se apropie.',
        'Stoarse bine, au textura tocăturii. Neestoarse, fac sosul apos.',
        'Se găsesc la raionul bio sau la Kaufland/Profi, la pungi de 200–500 g.'
      ],
      swaps: [
        { label: 'Jumate-jumate', text: 'Jumătate granule, jumătate carne tocată: dacă nu ești convins, e tranziția.' },
        { label: 'Cu linte', text: 'Linte verde fiartă în loc de granule — textură mai bună, proteină ceva mai mică.' }
      ],
      why: 'Are gust de bolognese, costă cât o garnitură și aduce peste 30 g de proteină pe porție.'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_RECIPES = RECIPES;
  window.PF_PANTRY = PANTRY;
  window.PF_METHODS = METHODS;
})();
