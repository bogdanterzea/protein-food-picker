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
    otet:           { name: 'Oțet (de mere sau de vin)', kcal: 21, protein: 0.1,  carbs: 0.9, fat: 0,    fiber: 0,   salt: 0.01, ronKg: 6 },
    telina:         { name: 'Țelină rădăcină',          kcal: 42,  protein: 1.5,  carbs: 9.2, fat: 0.3,  fiber: 1.8, salt: 0.25, ronKg: 9 },
    bors:           { name: 'Borș de tărâțe',           kcal: 10,  protein: 0.4,  carbs: 1.8, fat: 0.1,  fiber: 0.1, salt: 0.05, ronKg: 5 },
    'porumb-conserva': { name: 'Porumb dulce boabe (conservă, scurs)', kcal: 81, protein: 2.9, carbs: 18, fat: 1.0, fiber: 2.1, salt: 0.55, ronKg: 13 },
    'fructe-padure': { name: 'Fructe de pădure congelate', kcal: 45, protein: 0.8, carbs: 9.0, fat: 0.4, fiber: 3.5, salt: 0.01, ronKg: 24 },
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
        { id: 'd-oua-gaina-l', g: 330 },
        { p: 'rosii-cutie', g: 400 },
        { p: 'ardei', g: 150 },
        { p: 'ceapa', g: 100 },
        { p: 'usturoi', g: 12 },
        { id: 'd-telemea-vaca', g: 90 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Călește ceapa și ardeiul 6–7 minute, până se înmoaie de tot.',
        'Usturoi, chimion, boia — 30 de secunde, pe foc mic.',
        'Roșiile, sare, piper. Fierbe 8 minute până sosul se îngroașă. Dacă e prea apos, ouăle vor pluti.',
        'Fă șase adâncituri cu lingura și sparge câte un ou în fiecare — trei de persoană, altfel nu e masă, e garnitură.',
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
        { id: 'v-linte-rosie-uscata', g: 300 },
        { p: 'orez-alb', g: 120 },
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

    /* ===================== GRĂTAR ===================== */
    {
      id: 'rc-cotlet-porc-gratar-mamaliga',
      name: 'Cotlet de porc la grătar cu mămăligă și salată de varză',
      emoji: '🔥', base: 'porc', method: 'grill', mealType: 'pranz',
      servings: 3, timeMin: 40, activeTimeMin: 25, effort: 2, difficulty: 'easy',
      equipment: ['grătar sau tigaie-grill', 'ceaun sau oală cu fund gros', 'tel', 'castron'],
      ing: [
        { id: 'm-cotlet-porc', g: 600 },
        { p: 'malai', g: 150 },
        { p: 'varza', g: 300 },
        { p: 'ulei-masline', g: 15 },
        { p: 'otet', g: 15 },
        { p: 'usturoi', g: 10 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Scoate cotletele din frigider cu 30 de minute înainte și șterge-le cu un șervet. Carnea rece și udă nu face crustă, oricât de tare ar fi grătarul.',
        'Salata de varză se face prima: taie varza cât mai subțire, presar-o cu sare și freac-o cu mâna un minut, până lasă apă. Apoi oțet, ulei, piper. Stă și se înmoaie cât gătești restul.',
        'Mămăliga: 600 ml apă cu sare la clocot, torni mălaiul în ploaie amestecând cu telul, apoi 10–12 minute pe foc mic, amestecând des. E gata când se desprinde de pe pereții vasului.',
        'Încinge grătarul până o picătură de apă sare de pe el. Unge carnea cu ulei, nu grătarul — uleiul pe grătar fumegă și dă gust amar.',
        'Cotletele 4 minute pe o parte, fără să le miști, apoi 3–4 minute pe cealaltă. Grăsimea de pe margine o ții 30 de secunde direct pe grătar, pusă pe muchie.',
        'Gata la 63 °C în centru, cu miezul ușor roz. Fără termometru: apăsat cu degetul, cotletul e ferm dar încă cedează puțin.',
        'Odihnă 5 minute pe un tocător cald, cu usturoiul tocat și un strop de ulei peste. Abia apoi tai.'
      ],
      tips: [
        'Cotletul e a doua cea mai slabă bucată de porc după mușchiuleț: 21 g proteină la 100 g, față de 17,5 g la ceafă, și cu o treime din grăsime.',
        'Grătarul trebuie să fie fierbinte ÎNAINTE de carne. Pe un grătar călduț, carnea lasă apă, se fierbe în ea și rămâne cenușie.',
        'Varza frecată cu sare pierde apa care altfel ar dilua dressingul. Un minut de frecat schimbă complet textura salatei.'
      ],
      swaps: [
        { label: 'Fără grătar', text: 'Tigaie-grill din fontă bine încinsă, aceiași timpi. Pornește hota înainte, nu după.' },
        { label: 'Mai ieftin', text: 'Ceafă de porc: gust mai bun și preț mai mic, dar 250 kcal la 100 g față de 163 și cu 3,5 g mai puțină proteină.' },
        { label: 'Fără mămăligă', text: 'Cartofi copți în coajă direct pe jarul de la margine, 35 de minute. Zero vase în plus.' }
      ],
      why: 'Grătarul de duminică făcut cu bucata slabă, nu cu ceafa. Aceeași masă, cu 40 % mai puține calorii și mai multă proteină.'
    },

    {
      id: 'rc-frigarui-vita-gratar-bulgur',
      name: 'Frigărui de vită la grătar cu bulgur și legume',
      emoji: '🍢', base: 'vita', method: 'grill', mealType: 'cina',
      servings: 3, timeMin: 50, activeTimeMin: 25, effort: 3, difficulty: 'medium',
      equipment: ['grătar', 'frigărui de metal sau de lemn', 'oală mică', 'castron'],
      ing: [
        { id: 'm-gulas-vita', g: 600 },
        { p: 'bulgur', g: 150 },
        { p: 'ardei', g: 200 },
        { p: 'ceapa', g: 100 },
        { p: 'dovlecel', g: 150 },
        { p: 'ulei-masline', g: 20 },
        { p: 'lamaie', g: 20 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Taie carnea cuburi de 3 cm, toate la fel de mari. Bucățile inegale sunt motivul pentru care o frigăruie iese și crudă, și arsă.',
        'Marinează 30 de minute în ulei, zeamă de lămâie, usturoi, boia afumată și piper. Sarea o pui doar înainte de grătar.',
        'Dacă folosești frigărui de lemn, ține-le 20 de minute în apă, altfel ard pe grătar.',
        'Înșiră alternând carne și legume, dar lasă un milimetru între bucăți. Înghesuite, laturile lipite rămân crude.',
        'Bulgurul: 1 parte bulgur la 2 părți apă clocotită cu sare, capac, foc oprit, 12 minute. Nu se amestecă, se desface cu furculița la final.',
        'Grătar bine încins, frigăruile 3 minute pe fiecare din cele 4 laturi. Vita de gulaș e o bucată cu tendon — la 12 minute total e fragedă, la 20 devine tare.',
        'Odihnă 5 minute sub o folie, apoi peste bulgur, cu zeama din tavă turnată deasupra.'
      ],
      tips: [
        'Carnea de gulaș costă jumătate cât mușchiul și are aproape aceeași proteină (19,5 vs 21 g la 100 g). La cuburi mici și foc scurt, diferența de frăgezime aproape dispare.',
        'Bulgurul are 12,3 g proteină la 100 g, aproape dublu față de orezul alb, și nu are nevoie de foc — doar de apă clocotită și răbdare.',
        'Nu înțepa carnea cu furculița ca s-o întorci. Fiecare gaură scoate zeamă. Folosește un clește.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Spată de porc în loc de vită: se pretează la fel la frigărui și costă mult mai puțin.' },
        { label: 'Fără grătar', text: 'Tavă la cuptor, 220 °C cu grill-ul pornit, 15 minute, întorcând o dată. Pune frigăruile pe un grătar așezat peste tavă, ca aerul să circule.' },
        { label: 'Cu iaurt', text: 'Un sos de iaurt grecesc cu usturoi și mărar alături: +8 g proteină pe porție și taie din uscăciunea vitei.' }
      ],
      why: 'Vită la grătar fără prețul mușchiului, pe o garnitură care aduce ea singură 18 g de proteină pe oală.'
    },

    {
      id: 'rc-pastrav-gratar-cartofi',
      name: 'Păstrăv la grătar cu cartofi și mujdei',
      emoji: '🐟', base: 'peste', method: 'grill', mealType: 'cina',
      servings: 2, timeMin: 40, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['grătar', 'oală', 'mojar sau furculiță'],
      ing: [
        { id: 'f-pastrav-file-proaspat-local', g: 400 },
        { p: 'cartofi', g: 500 },
        { p: 'usturoi', g: 20 },
        { p: 'ulei-masline', g: 18 },
        { p: 'lamaie', g: 25 },
        { p: 'salata', g: 80 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Fierbe cartofii întregi, în coajă, în apă sărată, 25 de minute. În coajă rămân cu gust de cartof, nu de apă.',
        'Usucă fileurile cu un șervet și unge-le cu ulei, sare și piper. Peștele umed se lipește de grătar — asta e singura cauză reală a fileurilor rupte.',
        'Grătar curat și încins, fileurile cu pielea în jos. Nu le atinge 4 minute.',
        'Întoarce-le o singură dată, cu o spatulă lată, și mai dă-le 2 minute. Peștele e gata când carnea trece din translucid în opac și se desface în fulgi.',
        'Mujdei: usturoiul pisat cu sare grunjoasă până devine pastă, apoi subțiat cu 2–3 linguri din apa în care au fiert cartofii și un strop de ulei.',
        'Cartofii se sparg cu podul palmei, nu se taie — suprafața zdrențuită ține sosul.',
        'Zeamă de lămâie peste pește la final, niciodată înainte: acidul „gătește” carnea și o face sfărâmicioasă pe grătar.'
      ],
      tips: [
        'Păstrăvul e cel mai ieftin pește gras din zonă și are 20,8 g proteină la doar 128 kcal — mai slab decât somonul, cu aceeași familie de grăsimi.',
        'Grătarul trebuie uns și curat înainte de pește. O jumătate de ceapă înfiptă în furculiță, trecută peste barele încinse, curăță și unge într-o singură mișcare.',
        'Apa de la cartofi e sărată și amidonoasă — leagă mujdeiul mult mai bine decât apa simplă.'
      ],
      swaps: [
        { label: 'Păstrăv întreg', text: 'Doi păstrăvi întregi, 6–7 minute pe parte. Gust mai bun, dar din 100 g de pește întreg mănânci cam 55 g de carne — pune cam dublu față de fileuri.' },
        { label: 'Mai ieftin', text: 'File de macrou proaspăt sau de crap: aceeași tehnică, jumătate din preț.' },
        { label: 'Fără grătar', text: 'Tigaie antiaderentă bine încinsă, cu pielea în jos, apăsat cu o spatulă primele 20 de secunde ca să nu se curbeze.' }
      ],
      why: 'Peștele local, gătit în cea mai simplă formă posibilă, cu o garnitură care costă cât nimic.'
    },

    {
      id: 'rc-burger-curcan-gratar',
      name: 'Burger de curcan la grătar cu chiflă proteică',
      emoji: '🍔', base: 'curcan', method: 'grill', mealType: 'cina',
      servings: 3, timeMin: 35, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['grătar', 'castron', 'hârtie de copt'],
      ing: [
        { id: 'm-carne-tocata-curcan', g: 450 },
        { id: 'b-chifle-proteice', g: 210 },
        { id: 'd-cascaval-dalia', g: 45 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'ceapa', g: 60 },
        { p: 'rosii', g: 120 },
        { p: 'salata', g: 60 },
        { p: 'mustar', g: 15 },
        { p: 'ulei-masline', g: 10 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Amestecă tocătura de curcan cu oul, ceapa dată pe răzătoarea mică, muștar, sare și piper. Oul e obligatoriu: curcanul e prea slab ca să se lege singur.',
        'Fă trei chiftele mai late decât chifla și apasă cu degetul o adâncitură în mijlocul fiecăreia. Fără adâncitură, burgerul se bombează pe grătar și devine minge.',
        'Ține-le 15 minute la frigider pe o hârtie de copt. Reci, își țin forma; calde, se rup la întors.',
        'Grătar încins, ungi chiftelele cu ulei. 5 minute pe o parte, întorci o dată, încă 4 minute.',
        'Curcanul se gătește complet, la 74 °C — nu e vită, nu se mănâncă roz. Zeama care iese trebuie să fie limpede.',
        'Pune cașcavalul peste burger în ultimul minut și acoperă cu un capac sau un bol, ca să se topească din aburi.',
        'Prăjește chiflele tăiate, cu partea tăiată pe grătar, 30 de secunde. Un strat rumenit nu se îmbibă cu zeamă.'
      ],
      tips: [
        'Chiflele proteice au 17 g proteină la 100 g față de ~8 g la o chiflă albă. Pe un burger, asta înseamnă 12 g de proteină în plus, fără să schimbi nimic altceva.',
        'Nu apăsa burgerul cu spatula pe grătar. Sfârâitul pe care îl auzi e zeama care pleacă definitiv.',
        'Tocătura din piept de curcan are 21,5 g proteină și 112 kcal la 100 g — jumătate din caloriile tocăturii de vită, la mai multă proteină.'
      ],
      swaps: [
        { label: 'Fără chiflă', text: 'Burgerul între două frunze mari de salată, cu o porție de cartofi copți alături. Scazi ~180 kcal de porție.' },
        { label: 'La tigaie', text: 'Tigaie-grill sau tigaie obișnuită, foc mediu, aceiași timpi. Capac în ultimele 2 minute.' },
        { label: 'Mai suculent', text: 'O lingură de iaurt grecesc gros în compoziție, sau 100 g de ciuperci tocate mărunt și călite. Ambele adaugă umiditate fără grăsime.' }
      ],
      why: 'Un burger care are peste 50 g de proteină pe porție și mai puține calorii decât o farfurie de paste.'
    },

    {
      id: 'rc-creveti-gratar-orez',
      name: 'Frigărui de creveți la grătar cu orez și salată',
      emoji: '🍤', base: 'peste', method: 'grill', mealType: 'cina',
      servings: 2, timeMin: 30, activeTimeMin: 18, effort: 2, difficulty: 'easy',
      equipment: ['grătar sau tigaie-grill', 'oală mică', 'frigărui'],
      ing: [
        { id: 'f-creveti-cruzi-congelati', g: 400 },
        { p: 'orez-alb', g: 130 },
        { p: 'usturoi', g: 12 },
        { p: 'lamaie', g: 30 },
        { p: 'ulei-masline', g: 15 },
        { p: 'salata', g: 100 },
        { p: 'rosii', g: 150 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Dezgheață creveții în frigider peste noapte sau 15 minute într-un castron cu apă rece. Nu la microunde — se gătesc pe margini și rămân cruzi în mijloc.',
        'Usucă-i foarte bine. Creveții dezghețați țin multă apă, iar apa aia îi fierbe pe grătar în loc să-i rumenească.',
        'Amestecă-i cu ulei, usturoi tocat, boia, piper și coajă de lămâie. Maximum 15 minute de marinare — mai mult și lămâia îi face făinoși.',
        'Orezul la fiert: 1 la 2 cu apă, capac, 15 minute foc mic, apoi 5 minute fără foc.',
        'Înșiră creveții pe frigărui, câte 4–5, îndoiți în formă de C. Așa stau drept și se întorc toți odată.',
        'Grătar foarte încins: 2 minute pe o parte, 1–2 pe cealaltă. Sunt gata exact când s-au făcut portocalii și s-au curbat în formă de C. Dacă ajung la O, sunt deja tari.',
        'Zeamă de lămâie peste, direct pe grătar, și servești imediat pe orez, cu salata de roșii alături.'
      ],
      tips: [
        'Creveții sunt printre puținele proteine care se strică din prea mult, nu din prea puțin. Trei minute totale, nu mai mult.',
        'Forma spune totul: C = gata, O = gătit prea mult. E cel mai fiabil indiciu vizual din bucătărie.',
        'Creveții cruzi congelați au 17 g proteină la doar 74 kcal — cea mai slabă proteină animală din tot atlasul, după fileul de cod.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Mix de fructe de mare congelat, aruncat direct în tigaia încinsă în loc de frigărui. Proteină ceva mai mică, preț mult mai mic.' },
        { label: 'Cu orez brun', text: 'Orez brun în loc de alb: 7,5 g proteină la 100 g și mult mai multe fibre, dar 35 de minute de fiert.' },
        { label: 'Fără grătar', text: 'Tigaie fără ulei, foarte încinsă, creveții într-un singur strat, 90 de secunde pe parte.' }
      ],
      why: 'Cea mai rapidă proteină de pe grătar: trei minute, foarte puține calorii și o farfurie care arată a restaurant.'
    },

    /* ===================== AIR FRYER ===================== */
    {
      id: 'rc-somon-airfryer-cartofi-dulci',
      name: 'Somon la air fryer cu cartofi dulci și broccoli',
      emoji: '🌀', base: 'peste', method: 'airfryer', mealType: 'cina',
      servings: 2, timeMin: 30, activeTimeMin: 10, effort: 1, difficulty: 'trivial',
      equipment: ['air fryer', 'castron'],
      ing: [
        { id: 'f-somon-file-congelat', g: 320 },
        { p: 'cartofi-dulci', g: 400 },
        { id: 'v-broccoli', g: 200 },
        { p: 'ulei-masline', g: 15 },
        { p: 'lamaie', g: 25 },
        { p: 'condimente', g: 5, free: true }
      ],
      steps: [
        'Dezgheață somonul complet în frigider. Din congelator direct în air fryer iese gătit pe dinafară și rece la mijloc.',
        'Taie cartofii dulci bastonașe de 1 cm și amestecă-i cu jumătate din ulei, sare, piper și boia afumată.',
        'Air fryer la 200 °C, doar cartofii, 12 minute, cu o scuturare la mijloc. Cartoful dulce are mai mult zahăr decât cel alb și se rumenește mai repede — nu-l lăsa nesupravegheat la final.',
        'Usucă somonul cu un șervet, unge-l cu restul de ulei, sare, piper și felii subțiri de lămâie deasupra.',
        'Dă temperatura la 180 °C, împinge cartofii într-o parte și pune somonul cu pielea în jos, alături — nu peste.',
        'Încă 8–9 minute. Broccoliul, uns cu un strop de ulei, intră în ultimele 6 minute.',
        'Somonul e gata când se desface în fulgi la apăsare ușoară. Dacă vezi puncte albe de albumină la suprafață, l-ai depășit cu 2 minute.'
      ],
      tips: [
        'Air fryerul e practic un cuptor mic cu ventilator puternic. Regula de conversie: minus 20 °C și minus o treime din timpul de cuptor.',
        'Somonul congelat porționat costă cu 30–40 % mai puțin decât cel de la tejghea și, la air fryer, diferența nu se simte.',
        'Coșul se umple maximum pe jumătate. Aglomerat, aerul nu circulă și tot ce iese e abur, nu crustă.'
      ],
      swaps: [
        { label: 'Mult mai ieftin', text: 'File de polac sau de cod congelat: 17,5 g proteină la 76–82 kcal. Timp mai scurt cu 2 minute, fiind mai subțire.' },
        { label: 'Cu cartofi obișnuiți', text: 'Cartofi albi, tăiați la fel, +3 minute. Mai puțin dulci și mai ieftini.' },
        { label: 'La cuptor', text: '200 °C, cartofii 25 de minute, somonul ultimele 13.' }
      ],
      why: 'Zece minute de muncă pentru o masă cu omega-3, fibre din cartoful dulce și zero vase de spălat în afară de coș.'
    },

    {
      id: 'rc-falafel-airfryer-humus',
      name: 'Falafel la air fryer cu humus, lipie și salată',
      emoji: '🧆', base: 'leguminoase', method: 'airfryer', mealType: 'pranz',
      servings: 2, timeMin: 25, activeTimeMin: 12, effort: 1, difficulty: 'trivial',
      equipment: ['air fryer', 'castron'],
      ing: [
        { id: 'v-falafel-congelat', g: 240 },
        { id: 'b-humus', g: 80 },
        { id: 'b-lipie-integrala', g: 120 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 200 },
        { p: 'rosii', g: 150 },
        { p: 'castraveti', g: 120 },
        { p: 'salata', g: 60 },
        { p: 'ceapa', g: 40 },
        { p: 'lamaie', g: 20 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Falafelul congelat intră direct în coș, fără dezghețare. Un strop de ulei pulverizat peste ajută la crustă, dar nu e obligatoriu.',
        'Air fryer la 190 °C, 12–14 minute, cu o scuturare la jumătate. E gata când exteriorul e maro-închis și crocant la ciocănit cu lingura.',
        'Cât se face, taie roșiile, castraveții și ceapa cubulețe mici și amestecă-le cu zeamă de lămâie, sare și pătrunjel tocat.',
        'Sosul: iaurt grecesc cu usturoi, sare, piper și o linguriță de zeamă de lămâie. Bate-l bine — cu cât e mai neted, cu atât se întinde mai ușor.',
        'Lipia se încălzește 1 minut în air fryer la final, cât e încă cald. Rece, se rupe la îndoit.',
        'Asamblează: humus întins pe lipie, falafel sfărâmat cu degetul, salata, sosul de iaurt deasupra.'
      ],
      tips: [
        'Falafelul are doar 11 g proteină la 100 g — singur nu e o masă. Iaurtul grecesc de aici aduce mai multă proteină decât falafelul însuși și e ce transformă farfuria într-un prânz real.',
        'Falafelul prăjit în ulei absoarbe 8–10 g de grăsime la porție. La air fryer, aproape nimic — e diferența dintre 250 și 150 kcal.',
        'Sfărâmă falafelul, nu-l lăsa bilă. Pe suprafață mai mare, sosul ajunge peste tot și fiecare îmbucătură are gust.'
      ],
      swaps: [
        { label: 'Făcut în casă', text: 'Năut înmuiat 12 ore (nu fiert!), tocat în robot cu ceapă, usturoi, pătrunjel și chimion. Iese la jumătate de preț și cu ~20 g proteină la 100 g.' },
        { label: 'Mai multă proteină', text: 'Adaugă 100 g de telemea sfărâmată sau înlocuiește lipia cu o tortilla proteică: +10–12 g pe porție.' },
        { label: 'Fără air fryer', text: 'Cuptor la 220 °C, 20 de minute, întors o dată. Iese aproape la fel.' }
      ],
      why: 'Prânz vegetarian gata în 25 de minute, din congelator și frigider, care chiar trece de 30 g de proteină pe porție.'
    },

    {
      id: 'rc-curcan-airfryer-radacinoase',
      name: 'Piept de curcan la air fryer cu legume rădăcinoase',
      emoji: '🌀', base: 'curcan', method: 'airfryer', mealType: 'pranz',
      servings: 2, timeMin: 35, activeTimeMin: 12, effort: 1, difficulty: 'easy',
      equipment: ['air fryer', 'castron', 'cuțit mare'],
      ing: [
        { id: 'm-piept-curcan', g: 380 },
        { p: 'cartofi', g: 300 },
        { p: 'morcov', g: 200 },
        { p: 'telina', g: 150 },
        { p: 'ulei-masline', g: 18 },
        { p: 'mustar', g: 15 },
        { p: 'usturoi', g: 10 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Taie pieptul de curcan în două bucăți egale, de aceeași grosime. O bucată groasă și una subțire în același coș înseamnă una uscată garantat.',
        'Unge carnea cu muștar, usturoi tocat, cimbru, sare și piper, și las-o 10 minute la temperatura camerei.',
        'Taie cartofii, morcovul și țelina cuburi de 2 cm și amestecă-le cu uleiul și sare. Țelina se taie ultima și se dă imediat prin ulei — altfel se înnegrește.',
        'Air fryer la 190 °C, doar legumele, 10 minute.',
        'Scutură coșul, așază curcanul peste legume și mai dă 14–16 minute, întorcând carnea o dată.',
        'Curcanul e gata la 74 °C în centru. Fără termometru: tai cea mai groasă bucată, carnea trebuie să fie albă peste tot, fără urmă de roz.',
        'Odihnă 5 minute înainte de feliat. Feliile se taie contra fibrei, oblic, ca să iasă mai scurte și mai fragede.'
      ],
      tips: [
        'Pieptul de curcan are 23,5 g proteină la 105 kcal — cea mai bună densitate proteică din raionul de carne proaspătă. E și cea mai puțin iertătoare la supragătit.',
        'Muștarul face două lucruri: ține condimentele lipite și formează crustă. Gustul de muștar dispare complet la 190 °C.',
        'Țelina rădăcină e sub 10 lei kilogramul, are gust puternic și înlocuiește jumătate din cartofi la o treime din carbohidrați.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Pulpă de curcan dezosată: 19,5 g proteină la 100 g, dar mult mai greu de uscat și cu mai mult gust.' },
        { label: 'Fără air fryer', text: 'Tavă la cuptor, 200 °C: legumele 20 de minute singure, curcanul ultimele 22.' },
        { label: 'Cu sos', text: 'Două linguri de iaurt grecesc amestecate cu zeama rămasă în coș și un vârf de muștar — sos în 30 de secunde, fără smântână.' }
      ],
      why: 'Cea mai slabă carne de pe raft, o singură tavă și legume care costă sub 10 lei kilogramul.'
    },

    {
      id: 'rc-chiftele-vita-airfryer-tzatziki',
      name: 'Chiftele de vită la air fryer cu cartofi și tzatziki',
      emoji: '🧆', base: 'vita', method: 'airfryer', mealType: 'cina',
      servings: 3, timeMin: 40, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['air fryer', 'castron', 'răzătoare'],
      ing: [
        { id: 'm-carne-tocata-vita', g: 500 },
        { id: 'd-oua-gaina-l', g: 55 },
        { id: 'b-tzatziki', g: 150 },
        { p: 'pesmet', g: 40 },
        { p: 'cartofi', g: 500 },
        { p: 'ceapa', g: 80 },
        { p: 'usturoi', g: 10 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 6, free: true }
      ],
      steps: [
        'Amestecă tocătura cu oul, pesmetul, ceapa dată pe răzătoarea mică, usturoi, sare, piper, chimion și mult mărar. Amestecă până se leagă, nu mai mult — frământată prea mult, carnea devine cauciucoasă.',
        'Lasă compoziția 15 minute la frigider. Pesmetul absoarbe umezeala și chiftelele nu se mai turtesc în coș.',
        'Taie cartofii felii groase de 1 cm, amestecă-i cu uleiul și sare, și pune-i primii: 190 °C, 12 minute.',
        'Formează chiftele cât o nucă mare, cu mâinile ude. Umede, aluatul nu se lipește de palme.',
        'Împinge cartofii într-o parte, pune chiftelele într-un singur strat și mai dă 12–14 minute la 190 °C, scuturând o dată.',
        'Sunt gata când sunt maro pe dinafară și zeama care iese la înțepare e limpede. Vita tocată se gătește complet, nu roz.',
        'Tzatziki rece alături, direct din frigider. Contrastul cald–rece e jumătate din farmecul farfuriei.'
      ],
      tips: [
        'La air fryer, chiftelele pierd o parte din grăsime în coș. Aceeași compoziție prăjită în tigaie absoarbe ulei în loc să-l lase — diferența e de ~100 kcal pe porție.',
        'Vita tocată are 18,5 g proteină și 214 kcal la 100 g. E o proteină bună, dar densă caloric: 500 g pentru trei porții e limita rezonabilă.',
        'Pune un strat subțire de hârtie de copt perforată sub chiftele dacă air fryerul tău are grătar cu ochiuri mari — altfel jumătate din crustă rămâne pe grătar.'
      ],
      swaps: [
        { label: 'Mai slab', text: 'Jumătate vită, jumătate tocătură din piept de curcan: scazi ~90 kcal pe porție și crești proteina.' },
        { label: 'Fără air fryer', text: 'Tavă la cuptor, 200 °C, 20 de minute, întors o dată. Cartofii intră cu 15 minute înainte.' },
        { label: 'Tzatziki de casă', text: 'Iaurt grecesc 0 %, castravete ras și stors bine, usturoi, mărar, sare. Costă jumătate și are dublu proteină față de cel cumpărat.' }
      ],
      why: 'Chiftele care nu înoată în ulei, gata în 40 de minute, cu o proteină pe porție cât o porție de friptură.'
    },

    /* ===================== GĂTIT LENT ===================== */
    {
      id: 'rc-gulas-vita-cartofi-lent',
      name: 'Gulaș de vită cu cartofi, gătit lent',
      emoji: '🍲', base: 'vita', method: 'slow', mealType: 'pranz',
      servings: 4, timeMin: 165, activeTimeMin: 25, effort: 3, difficulty: 'easy',
      equipment: ['oală cu fund gros și capac', 'tigaie', 'lingură de lemn'],
      ing: [
        { id: 'm-gulas-vita', g: 800 },
        { p: 'cartofi', g: 700 },
        { p: 'ceapa', g: 250 },
        { p: 'ardei', g: 200 },
        { p: 'morcov', g: 150 },
        { p: 'bulion', g: 60 },
        { p: 'ulei-floarea', g: 20 },
        { p: 'condimente', g: 10, free: true }
      ],
      steps: [
        'Taie carnea cuburi de 4 cm — mai mari decât ai crede că trebuie. La 2 ore de fiert, se micșorează cu o treime.',
        'Rumenește-o în trei tranșe, la foc mare, câte 3 minute per tranșă. Toată deodată înseamnă apă în oală și carne fiartă cenușiu. Crusta maro de pe fundul oalei e baza gustului.',
        'Scoate carnea, pune ceapa tocată în aceeași oală și las-o 8 minute până devine sticloasă și desprinde tot ce s-a lipit pe fund.',
        'Ia oala de pe foc și abia atunci pune boiaua dulce, o linguriță plină. Boiaua arsă amărăște ireversibil toată mâncarea — ăsta e singurul pas care nu se poate repara.',
        'Carnea înapoi, apă fierbinte cât să o acopere la limită, capac întredeschis, foc cât mai mic. 90 de minute, fără să amesteci mai des de o dată la 20.',
        'Adaugă cartofii tăiați mari, morcovul și ardeiul. Încă 30–35 de minute, până cartoful se lasă străpuns de furculiță fără să se sfărâme.',
        'Bulionul și sarea abia la final. Sarea pusă la început se concentrează pe măsură ce scade apa și te trezești cu o oală prea sărată.',
        'Lasă 15 minute pe aragazul stins înainte de servit. Sosul se leagă singur în timpul ăsta.'
      ],
      tips: [
        'Carnea de gulaș e plină de colagen. Sub 90 de minute e tare, peste 90 devine gelatinoasă și moale — nu există scurtătură, doar timp.',
        'Un clocot puternic strânge fibrele și usucă carnea chiar dacă stă în apă. Sosul trebuie doar să tremure, cu o bulă la câteva secunde.',
        'A doua zi e mai bun: amidonul din cartofi îngroașă sosul peste noapte, iar carnea absoarbe gustul. Fă porție dublă din start.'
      ],
      swaps: [
        { label: 'La slow cooker', text: 'Rumenirea tot în tigaie, apoi 7 ore pe treapta mică. Pune cartofii de la început, la temperatura aia nu se sfărâmă.' },
        { label: 'La oala sub presiune', text: '35 de minute sub presiune pentru carne, apoi cartofii încă 8. Câștigi o oră.' },
        { label: 'Cu fasole', text: 'Înlocuiește jumătate din cartofi cu 150 g fasole albă înmuiată peste noapte: mai multe fibre și proteină vegetală în plus.' }
      ],
      why: 'Bucata ieftină de vită devine mai bună decât mușchiul, cu 25 de minute de muncă împărțite pe patru porții.'
    },

    {
      id: 'rc-iahnie-fasole-afumatura',
      name: 'Iahnie de fasole cu afumătură',
      emoji: '🫘', base: 'leguminoase', method: 'slow', mealType: 'pranz',
      servings: 4, timeMin: 150, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['oală mare', 'strecurătoare', 'lingură de lemn'],
      ing: [
        { id: 'v-fasole-alba-uscata', g: 350 },
        { id: 'p-ceafa-afumata-porc', g: 250 },
        { p: 'ceapa', g: 250 },
        { p: 'morcov', g: 150 },
        { p: 'ardei', g: 100 },
        { p: 'bulion', g: 60 },
        { p: 'ulei-floarea', g: 20 },
        { p: 'condimente', g: 10, free: true }
      ],
      steps: [
        'Fasolea se pune la înmuiat de seara, în apă rece, cel puțin 10 ore. Fără înmuiere fierbe și 3 ore și tot rămâne tare la mijloc.',
        'Aruncă apa de înmuiere, pune fasolea în apă rece proaspătă și fierbe-o 10 minute. Aruncă și apa asta. Repetă o dată. Cele două schimburi de apă sunt tot secretul împotriva balonării.',
        'A treia apă e cea bună: fasolea, apă cât s-o acopere cu trei degete, foc mic, 60–75 de minute, fără sare.',
        'Între timp călește ceapa tocată mărunt în ulei, 10 minute la foc mic, până e aurie și dulce. Ceapa grăbită lasă iahnia fadă.',
        'Adaugă morcovul ras, ardeiul, și afumătura tăiată cubulețe. Încă 5 minute, cât să-și lase grăsimea.',
        'Toarnă totul peste fasolea fiartă, cu o parte din apa ei. Foc mic, capac, încă 30 de minute.',
        'Bulionul, o foaie de dafin și sarea intră în ultimele 10 minute. Sarea pusă devreme întărește coaja boabelor și fasolea nu se mai înmoaie niciodată.',
        'Zdrobește cu lingura vreo 20 de boabe pe marginea oalei. Amidonul eliberat îngroașă zeama fără făină.'
      ],
      tips: [
        '350 g de fasole uscată costă sub 8 lei și dau 73 g de proteină. E cea mai ieftină proteină din tot atlasul, iar afumătura e acolo pentru gust, nu pentru cantitate.',
        'Fasolea + carnea afumată se completează: leguminoasa e săracă în metionină, carnea o aduce. Împreună au profilul complet de aminoacizi.',
        'Se congelează perfect în porții. Dezghețată, e la fel de bună — spre deosebire de aproape orice mâncare cu cartofi.'
      ],
      swaps: [
        { label: 'Complet vegetal', text: 'Fără afumătură, cu o linguriță de boia afumată și 100 g de ciuperci călite. Scade cu ~12 g proteina pe oală, dar rămâne peste 25 g pe porție.' },
        { label: 'Rapid', text: 'Trei conserve de fasole albă, clătite bine: 40 de minute cap-coadă în loc de 2,5 ore, la un preț dublu.' },
        { label: 'Cu ciolan', text: 'Rasol de porc afumat, fiert odată cu fasolea și dezosat la final. Varianta de duminică.' }
      ],
      why: 'Patru porții pentru cât costă o pizza, cu peste 30 g de proteină și 15 g de fibre pe farfurie.'
    },

    {
      id: 'rc-porc-destramat-varza-lent',
      name: 'Porc destrămat cu varză călită, gătit lent',
      emoji: '🍲', base: 'porc', method: 'slow', mealType: 'pranz',
      servings: 4, timeMin: 180, activeTimeMin: 25, effort: 3, difficulty: 'easy',
      equipment: ['oală de fontă cu capac sau tavă adâncă cu folie', 'două furculițe'],
      ing: [
        { id: 'm-spata-porc', g: 800 },
        { p: 'varza', g: 700 },
        { p: 'ceapa', g: 200 },
        { p: 'bulion', g: 50 },
        { p: 'ulei-floarea', g: 20 },
        { p: 'otet', g: 20 },
        { p: 'condimente', g: 10, free: true }
      ],
      steps: [
        'Freacă bucata întreagă de spată cu sare, piper, boia afumată, cimbru și usturoi granulat. Nu o tăia — se gătește întreagă și se destramă la final.',
        'Rumenește-o în oală, pe toate fețele, câte 2–3 minute. E singurul moment în care se formează gustul de fript.',
        'Pune ceapa tăiată felii sub carne, toarnă 150 ml de apă fierbinte și oțetul, capac etanș, cuptor la 150 °C — sau foc foarte mic pe aragaz.',
        'Două ore și jumătate, fără să deschizi capacul mai mult de o dată. De fiecare dată când ridici capacul, pierzi 15 minute de temperatură.',
        'Carnea e gata când două furculițe o desfac fără efort. Dacă opune rezistență, nu e „prea gătită” — e insuficient gătită. Mai dă-i 30 de minute.',
        'Scoate carnea, destram-o cu furculițele și pune-o deoparte cu puțin din sosul din oală.',
        'În aceeași oală, cu grăsimea rămasă, călește varza tăiată subțire, 20 de minute la foc mediu, amestecând rar. Bulionul, piper și mărar la final.',
        'Amestecă porcul destrămat în varză, pe foc oprit, și lasă 10 minute cu capacul pus.'
      ],
      tips: [
        'Spata are 19 g proteină și 188 kcal la 100 g — suficientă grăsime intramusculară cât să nu se usuce la 3 ore, dar mult mai slabă decât ceafa sau pieptul.',
        'Oțetul nu se simte la final. Rolul lui e să taie grăsimea și să ajute țesutul conjunctiv să se descompună mai repede.',
        'Varza nu se sărează la început. Sarea o face să lase apă și, în loc să se rumenească, se fierbe.'
      ],
      swaps: [
        { label: 'La slow cooker', text: '8 ore pe treapta mică. Rumenirea în tigaie rămâne obligatorie — fără ea, carnea e fadă.' },
        { label: 'Cu varză murată', text: 'Varză murată clătită și stoarsă în loc de cea dulce, fără sare deloc. Varianta de iarnă, mai acră și mai bogată în probiotice.' },
        { label: 'În tortilla', text: 'Porcul destrămat în tortilla proteică, cu iaurt și ceapă roșie. Din aceeași oală ies două mese complet diferite.' }
      ],
      why: 'O bucată de 25 de lei devine mâncare pentru patru zile, iar tot efortul stă în primele 25 de minute.'
    },

    {
      id: 'rc-pui-destramat-lent-tortilla',
      name: 'Pui destrămat gătit lent, în tortilla proteică',
      emoji: '🌯', base: 'pui', method: 'slow', mealType: 'cina',
      servings: 4, timeMin: 120, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['oală cu capac', 'două furculițe', 'tigaie pentru tortilla'],
      ing: [
        { id: 'm-pulpe-pui-dezosate', g: 700 },
        { id: 'b-tortilla-proteica-lidl', g: 240 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 150 },
        { p: 'rosii-cutie', g: 200 },
        { p: 'ceapa', g: 150 },
        { p: 'ardei', g: 150 },
        { p: 'usturoi', g: 12 },
        { p: 'ulei-masline', g: 15 },
        { p: 'lamaie', g: 20 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Rumenește pulpele întregi în ulei, 3 minute pe fiecare parte. Pulpa dezosată rezistă la gătit lung mult mai bine decât pieptul, care se usucă și se destramă în ață.',
        'Scoate carnea, călește ceapa și ardeiul 6 minute, apoi usturoiul, chimionul și boia afumată, 30 de secunde.',
        'Carnea înapoi, roșiile, 100 ml apă, capac, foc foarte mic. 75–90 de minute.',
        'Verifică la 75 de minute: carnea trebuie să se desfacă singură când o apeși cu lingura. Dacă nu, mai dă-i 20 de minute — nu se poate strica.',
        'Destram-o cu două furculițe direct în oală și las-o 10 minute fără capac, ca sosul să scadă și să se lipească de carne.',
        'Zeamă de lămâie peste, la final. Acidul ridică tot gustul după atâtea ore de fiert.',
        'Încălzește tortillele câte 20 de secunde pe parte, în tigaie uscată. Umple-le cu carne, iaurt grecesc și ce legume crude ai.'
      ],
      tips: [
        'Tortilla proteică are 16 g proteină la 100 g față de 9 g la cea integrală obișnuită. La patru porții, asta e diferența dintre o gustare și o cină.',
        'Iaurtul grecesc 0 % ține loc de smântână: aceeași cremozitate, de patru ori mai multă proteină și un sfert din calorii.',
        'Carnea destrămată ține 4 zile la frigider și e mai bună a doua zi. Congelează-o cu tot cu sos, nu uscată.'
      ],
      swaps: [
        { label: 'Peste orez', text: 'Fără tortilla, peste orez sau bulgur, cu iaurt deasupra. Mai ieftin și mai sățios.' },
        { label: 'Mai slab', text: 'Piept de pui în loc de pulpe, dar redu timpul la 45 de minute și verifică des — pieptul trece rapid de la fraged la sfoară.' },
        { label: 'Mai iute', text: 'O linguriță de sriracha sau ardei iute tocat în sos, la final. Nu în timpul fierberii — iuțeala se estompează la foc lung.' }
      ],
      why: 'O oală care merge singură o oră și jumătate și scoate patru cine cu peste 45 g de proteină fiecare.'
    },

    /* ===================== FIERT / SUPĂ ===================== */
    {
      id: 'rc-ciorba-perisoare-vita',
      name: 'Ciorbă de perișoare din vită, cu borș',
      emoji: '🥣', base: 'vita', method: 'boil', mealType: 'pranz',
      servings: 4, timeMin: 70, activeTimeMin: 25, effort: 3, difficulty: 'medium',
      equipment: ['oală mare', 'castron', 'spumieră'],
      ing: [
        { id: 'm-carne-tocata-vita', g: 600 },
        { id: 'd-oua-gaina-l', g: 55 },
        { id: 'd-smantana-20', g: 100 },
        { p: 'orez-alb', g: 60 },
        { p: 'morcov', g: 200 },
        { p: 'telina', g: 150 },
        { p: 'ceapa', g: 150 },
        { p: 'ardei', g: 100 },
        { p: 'bors', g: 400 },
        { p: 'condimente', g: 10, free: true }
      ],
      steps: [
        'Amestecă tocătura cu orezul crud, oul, ceapa rasă, sare, piper și pătrunjel tocat. Orezul se pune crud — se fierbe în ciorbă și leagă perișoara din interior.',
        'Pune compoziția 20 de minute la frigider. Rece, se rulează în bile care nu se destramă în apă clocotită.',
        'Pune 2,5 litri de apă la fiert cu morcovul, țelina, ceapa și ardeiul tăiate cubulețe. 15 minute, până legumele sunt aproape moi.',
        'Formează perișoare cât o nucă, cu mâinile ude, și lasă-le una câte una în apa care fierbe încet. Nu în clocot puternic — se sparg.',
        'Nu amesteca 5 minute. Perișoarele au nevoie să se întărească la exterior înainte să le atingi.',
        'Ia spuma pe măsură ce urcă, apoi fierbe 20 de minute la foc mic.',
        'Fierbe borșul separat 2 minute, într-un ibric, și abia apoi toarnă-l în ciorbă. Borșul turnat crud dă gust de mucegai.',
        'Foc oprit, leuștean tocat, sare la gust. Smântâna se pune în farfurie, nu în oală — altfel se taie la reîncălzire.'
      ],
      tips: [
        'Perișoarele fierte în apă, nu prăjite, sunt motivul pentru care ciorba asta are 33 g de proteină la sub 520 kcal pe porție.',
        'Leușteanul se pune întotdeauna pe foc oprit. Fiert, își pierde complet aroma și rămâne doar amăreala.',
        'Dacă vrei ciorba mai limpede, spală orezul înainte. Amidonul de pe boabe e ce o tulbură.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Carne tocată amestec (porc și vită): gust mai bogat, preț mai mic, aproape aceeași proteină.' },
        { label: 'Fără borș', text: 'Zeamă de varză murată sau suc de lămâie la final. Zeama de varză e mai sărată — nu mai adăuga sare deloc.' },
        { label: 'Mai multă proteină', text: 'Smântâna înlocuită cu iaurt grecesc 0 %: +6 g proteină pe oală și 150 kcal mai puțin.' }
      ],
      why: 'Ciorba de duminică, cu proteina unei fripturi și caloriile unei supe. Face patru porții dintr-o singură oală.'
    },

    {
      id: 'rc-supa-mazare-carnati-pui',
      name: 'Supă groasă de mazăre despicată cu cârnați de pui',
      emoji: '🥣', base: 'leguminoase', method: 'boil', mealType: 'pranz',
      servings: 4, timeMin: 75, activeTimeMin: 15, effort: 2, difficulty: 'easy',
      equipment: ['oală mare', 'blender vertical (opțional)', 'tigaie mică'],
      ing: [
        { id: 'v-mazare-despicata-uscata', g: 350 },
        { id: 'p-crenvursti-piept-pui-cristim', g: 300 },
        { p: 'morcov', g: 200 },
        { p: 'ceapa', g: 150 },
        { p: 'telina', g: 100 },
        { p: 'usturoi', g: 12 },
        { p: 'ulei-masline', g: 15 },
        { p: 'condimente', g: 8, free: true }
      ],
      steps: [
        'Clătește mazărea despicată sub jet de apă. Nu are nevoie de înmuiere — e decorticată și se face în mai puțin de o oră.',
        'Călește ceapa, morcovul și țelina tăiate mărunt în ulei, 8 minute, până ceapa e translucidă.',
        'Adaugă mazărea și 1,8 litri de apă rece. Dă în clocot, ia spuma o dată, apoi foc mic și capac întredeschis.',
        '45–55 de minute. E gata când boabele s-au desfăcut complet și supa a devenit groasă ca o smântână subțire. Amestecă din 10 în 10 minute — mazărea se lipește de fund mai ceva ca lintea.',
        'Dacă vrei textura fină, dă 10 secunde cu blenderul vertical. Dacă îți place rustic, las-o așa.',
        'Rumenește crenvurștii tăiați rondele într-o tigaie fără ulei, până au margini crocante. Aruncați direct în supă, rămân moi și fără gust.',
        'Sare abia acum, cu crenvurștii deja înăuntru — ei aduc singuri destulă. Usturoi tocat crud și piper la final.'
      ],
      tips: [
        'Mazărea despicată are 24,5 g proteină la 100 g și costă sub 10 lei kilogramul. Trei sute cincizeci de grame acoperă singure 85 g de proteină.',
        'Supa se îngroașă mult la răcire. Dacă a doua zi e pastă, subțiaz-o cu apă fierbinte, nu cu apă rece — altfel se separă.',
        'Rumenirea cârnaților separat nu e un moft: caramelizarea de pe margini e singura sursă de gust „fript” din toată oala.'
      ],
      swaps: [
        { label: 'Complet vegetal', text: 'Fără cârnați, cu o linguriță de boia afumată și cuburi de pâine proteică prăjită. Rămâne peste 25 g de proteină pe porție.' },
        { label: 'Cu afumătură', text: 'Ceafă afumată de porc, cubulețe, fiartă odată cu mazărea. Varianta clasică germană.' },
        { label: 'Cu linte', text: 'Linte verde în loc de mazăre: 25 g proteină la 100 g, se fierbe în 30 de minute și își ține forma.' }
      ],
      why: 'O oală de 15 lei care ține patru mese, cu peste 30 g de proteină și un munte de fibre pe porție.'
    },

    {
      id: 'rc-ciorba-peste-mamaliga',
      name: 'Ciorbă de pește cu legume și mămăligă',
      emoji: '🐟', base: 'peste', method: 'boil', mealType: 'pranz',
      servings: 4, timeMin: 60, activeTimeMin: 25, effort: 3, difficulty: 'medium',
      equipment: ['oală mare', 'ceaun sau oală cu fund gros', 'tel', 'spumieră'],
      ing: [
        { id: 'f-cod-file-congelat', g: 700 },
        { p: 'malai', g: 120 },
        { p: 'cartofi', g: 400 },
        { p: 'morcov', g: 200 },
        { p: 'ardei', g: 150 },
        { p: 'ceapa', g: 150 },
        { p: 'telina', g: 100 },
        { p: 'bors', g: 400 },
        { p: 'ulei-floarea', g: 15 },
        { p: 'condimente', g: 10, free: true }
      ],
      steps: [
        'Dezgheață fileurile în frigider și taie-le bucăți de 4 cm. Mai mici se destramă complet în ciorbă.',
        'Fierbe legumele tăiate cubulețe în 2 litri de apă cu sare puțină: cartof, morcov, ceapă, ardei, țelină. 20 de minute, până cartoful e aproape moale.',
        'Peștele intră ULTIMUL și fierbe doar 8 minute. Ăsta e tot secretul unei ciorbe de pește: legumele au nevoie de 20 de minute, peștele de 8. Fierte împreună de la început, peștele se face zdrențe.',
        'Nu amesteca după ce ai pus peștele. Clatină oala de mâner dacă trebuie.',
        'Fierbe borșul separat 2 minute și toarnă-l peste, cu focul dat mic.',
        'Mămăliga: 500 ml apă cu sare la clocot, mălaiul în ploaie cu telul, 10–12 minute la foc mic, amestecând. E gata când se desprinde de pe pereți.',
        'Foc oprit, leuștean și pătrunjel tocate, un praf de ardei iute. Se lasă 5 minute cu capacul pus înainte de servit.'
      ],
      tips: [
        'Fileul de cod congelat are 17,5 g proteină la doar 76 kcal — mai slab decât pieptul de pui, la un preț comparabil cu pieptul de curcan.',
        'Ciorba de pește nu se reîncălzește bine. Fă-o pentru ziua respectivă sau, dacă vrei rezerve, fierbe zeama separat și adaugă peștele porție cu porție.',
        'Mămăliga nu e opțională aici: fără ea, ciorba are sub 300 kcal pe porție și te lasă flămând în două ore.'
      ],
      swaps: [
        { label: 'Cu pește local', text: 'Crap sau caras, curățați și tăiați bucăți cu tot cu os. Gust mult mai bun, dar ai grijă la oase.' },
        { label: 'Mai rapid', text: 'File de polac sau merluciu, tăiat direct din congelator în bucăți mari: intră înghețat, fierbe 11 minute.' },
        { label: 'Fără borș', text: 'Zeamă de lămâie sau zeamă de varză la final. Pune-o treptat și gustă — e mai concentrată decât borșul.' }
      ],
      why: 'Cea mai slabă proteină din atlas, într-o ciorbă care cere 25 de minute de muncă și scoate patru porții.'
    },

    {
      id: 'rc-macaroane-branza-ou',
      name: 'Macaroane cu brânză de vaci și ou',
      emoji: '🧀', base: 'lactate', method: 'boil', mealType: 'cina',
      servings: 3, timeMin: 30, activeTimeMin: 20, effort: 2, difficulty: 'easy',
      equipment: ['oală mare', 'strecurătoare', 'vas de copt (opțional)'],
      ing: [
        { id: 'v-paste-integrale', g: 210 },
        { id: 'd-branza-vaci-covalact-05', g: 400 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 'd-smantana-20', g: 100 },
        { p: 'unt', g: 20 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Pune apa la fiert, bine sărată. Pastele integrale au nevoie de apă mai multă decât cele albe — lasă mai mult amidon.',
        'Cât fierbe apa, freacă brânza de vaci cu ouăle și smântâna, până devine o cremă fără cocoloașe. Cocoloașele nu se mai desfac după ce dai căldură.',
        'Fierbe pastele cu un minut mai puțin decât scrie pe pungă. Scurge-le, dar oprește o cană din apa de fierbere.',
        'Pune untul peste pastele fierbinți, în oală, și amestecă până se topește complet. Grăsimea îmbracă pastele și împiedică oul să se coaguleze în grunji.',
        'Ia oala de pe foc, numără până la zece, apoi toarnă crema de brânză. Peste 70 °C, oul se face omletă — trebuie doar căldura reziduală.',
        'Amestecă rapid, cu 2–3 linguri din apa de paste, până sosul devine cremos și lucios.',
        'Opțional, la cuptor: totul într-un vas uns, 15 minute la 190 °C, până se rumenește deasupra.'
      ],
      tips: [
        'Brânza de vaci slabă are 17 g proteină la 81 kcal. Patru sute de grame aduc 68 g de proteină pentru sub 15 lei — mai ieftin decât orice carne.',
        'Oala trebuie luată de pe foc înainte de ou. Ăsta e singurul pas în care rețeta chiar se poate strica, și se strică în 5 secunde.',
        'Se face și dulce, cu 20 g de miere sau zahăr în loc de sare, și rămâne exact la fel de bogată în proteină. Varianta clasică românească.'
      ],
      swaps: [
        { label: 'Mai multă proteină', text: 'Paste din linte roșie în loc de integrale: masa urcă cu ~24 g de proteină pe oală, la aceleași calorii.' },
        { label: 'Mai cremos', text: 'Iaurt grecesc 0 % în loc de smântână: mai puține calorii și mai multă proteină, dar amestecă-l doar pe foc oprit.' },
        { label: 'Cu telemea', text: '100 g de telemea rasă amestecată la final, sare deloc. Devine sărat-acrișor, ca o versiune românească de mac and cheese.' }
      ],
      why: 'Mâncarea de copilărie care se dovedește a fi una dintre cele mai ieftine surse de proteină din bucătărie.'
    },

    /* ===================== FĂRĂ GĂTIT ===================== */
    {
      id: 'rc-bol-iaurt-granola-fructe',
      name: 'Bol de iaurt grecesc cu granola proteică și fructe',
      emoji: '🫐', base: 'lactate', method: 'nocook', mealType: 'mic-dejun',
      servings: 1, timeMin: 5, activeTimeMin: 5, effort: 0, difficulty: 'none',
      equipment: ['bol', 'lingură'],
      ing: [
        { id: 'd-iaurt-grecesc-olympus-0', g: 300 },
        { id: 'b-granola-proteica', g: 50 },
        { id: 'v-unt-arahide-100', g: 15 },
        { p: 'fructe-padure', g: 100 }
      ],
      steps: [
        'Scoate fructele congelate din congelator cu 10 minute înainte. Semi-dezghețate lasă un sirop violet care colorează tot iaurtul — exact ce vrei.',
        'Pune iaurtul în bol și fă o adâncitură cu dosul lingurii.',
        'Untul de arahide se încălzește 15 secunde la microunde ca să curgă, apoi se toarnă în fir. Rece, rămâne un bulgăre pe care îl mănânci dintr-o îmbucătură.',
        'Granola deasupra, la sfârșit de tot. Pusă prima, se înmoaie în două minute și pierzi singura textură crocantă din bol.',
        'Fructele peste, cu tot cu zeama lăsată.'
      ],
      tips: [
        'Iaurtul grecesc 0 % are 10 g proteină la 100 g. Trei sute de grame înseamnă 30 g de proteină înainte să adaugi orice altceva.',
        'Granola „normală” are 8 g proteină și 460 kcal la 100 g; cea proteică are 22 g la 420. La 50 g, diferența e de 7 g de proteină pentru aceleași calorii.',
        'Untul de arahide 100 % arahide, fără zahăr și fără ulei de palmier, e singura variantă care merită. Citește lista de ingrediente: trebuie să aibă un rând.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Iaurt clasic 3,5 % + 15 g lapte praf degresat amestecat în el: aceeași proteină, jumătate din preț.' },
        { label: 'Fără granola', text: '40 g fulgi de ovăz mari și 10 g semințe de dovleac. Mai puțină proteină, dar și mult mai puțin zahăr.' },
        { label: 'Seara', text: 'Amestecă ovăzul în iaurt și lasă peste noapte la frigider. Dimineața e budincă, fără niciun minut de muncă.' }
      ],
      why: 'Cinci minute, zero vase, peste 45 g de proteină. Cel mai simplu mic dejun care chiar mută acul.'
    },

    {
      id: 'rc-wrap-pastrama-curcan',
      name: 'Wrap cu pastramă de curcan, telemea și legume',
      emoji: '🌯', base: 'curcan', method: 'nocook', mealType: 'pranz',
      servings: 2, timeMin: 12, activeTimeMin: 12, effort: 1, difficulty: 'trivial',
      equipment: ['tocător', 'cuțit', 'bol mic'],
      ing: [
        { id: 'p-pastrama-curcan-caroli', g: 200 },
        { id: 'b-tortilla-proteica-lidl', g: 120 },
        { id: 'd-telemea-vaca', g: 80 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 80 },
        { p: 'salata', g: 60 },
        { p: 'rosii', g: 120 },
        { p: 'castraveti', g: 100 },
        { p: 'ceapa', g: 30 },
        { p: 'mustar', g: 10 },
        { p: 'condimente', g: 3, free: true }
      ],
      steps: [
        'Sosul: iaurt grecesc cu muștar, piper, mărar tocat și o pișcătură de sare. Amestecă până e complet neted.',
        'Taie roșiile felii și scoate miezul apos cu lingura. Miezul e ce udă tortilla și o rupe la a doua îmbucătură.',
        'Întinde sosul pe tortilla, dar lasă 3 cm liberi pe margini — altfel iese pe la capete când rulezi.',
        'Așază salata prima, ca strat izolator între sos și legumele umede. Apoi pastrama, telemeaua sfărâmată, castraveții și ceapa.',
        'Pune umplutura pe treimea de jos, nu în mijloc. Îndoaie laturile spre interior, apoi rulează strâns de jos în sus.',
        'Taie oblic în două și înfășoară fiecare jumătate în hârtie de copt dacă o iei la pachet. Ține forma până seara.'
      ],
      tips: [
        'Pastrama de curcan are 22 g proteină la 121 kcal — de trei ori mai bună decât salamul, la aceeași felie.',
        'Telemeaua e deja sărată, pastrama la fel. Aici nu mai adaugi sare aproape deloc, altfel iese o masă cu peste 4 g de sare.',
        'Rulat strâns și înfășurat în hârtie, wrapul rezistă 8 ore la temperatura camerei fără să se destrame. E singura masă din listă care nu are nevoie de frigider la birou.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Piept de pui fiert și feliat de acasă în loc de pastramă: jumătate din preț, mai multă proteină, dar 15 minute de gătit.' },
        { label: 'Fără tortilla', text: 'Aceleași ingrediente peste o salată mare, cu sosul de iaurt drept dressing. Scazi ~180 kcal de porție.' },
        { label: 'Cu humus', text: 'Humus în loc de iaurt, dacă vrei varianta fără lactate. Mai multe calorii, mai puțină proteină.' }
      ],
      why: 'Prânzul de la birou care se face în 12 minute dimineața și are mai multă proteină decât orice de la raftul cald.'
    },

    {
      id: 'rc-salata-fasole-telemea-ou',
      name: 'Salată de fasole roșie cu telemea, ou și porumb',
      emoji: '🥗', base: 'leguminoase', method: 'nocook', mealType: 'pranz',
      servings: 2, timeMin: 15, activeTimeMin: 15, effort: 1, difficulty: 'trivial',
      equipment: ['castron mare', 'strecurătoare', 'oală mică pentru ouă'],
      ing: [
        { id: 'v-fasole-rosie-conserva', g: 400 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 'd-telemea-vaca', g: 80 },
        { p: 'porumb-conserva', g: 150 },
        { p: 'rosii', g: 200 },
        { p: 'ardei', g: 100 },
        { p: 'ceapa', g: 50 },
        { p: 'ulei-masline', g: 12 },
        { p: 'otet', g: 12 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Clătește fasolea și porumbul sub jet de apă rece, un minut fiecare, până apa iese limpede. Lichidul din conservă are gust metalic și multă sare.',
        'Lasă-le să se scurgă complet în strecurătoare, 5 minute. Salata cu boabe ude e salată apoasă.',
        'Ouăle fierte tari, 9 minute, apoi imediat în apă cu gheață. (Fierbe-le de seara sau folosește-le pe cele de la începutul săptămânii.)',
        'Ceapa tăiată subțire se ține 5 minute în oțet, apoi se scurge. Pierde iuțeala și rămâne doar dulceața — pasul ăsta face diferența între o salată bună și una pe care o eviți.',
        'Amestecă fasolea, porumbul, roșiile, ardeiul și ceapa cu uleiul, restul de oțet, sare, piper și mult pătrunjel.',
        'Telemeaua sfărâmată și ouăle tăiate în sferturi se pun deasupra, nu se amestecă. Amestecate, telemeaua se face pastă și ouăle se sfărâmă.',
        'Lasă 10 minute înainte de servit. Fasolea absoarbe dressingul și salata devine mai bună.'
      ],
      tips: [
        'Fasolea la conservă are doar 7 g proteină la 100 g — a fost fiartă și a absorbit apă. Cea uscată are 22,5 g. Aici plătești comoditatea, și e în regulă atât timp cât știi asta.',
        'Telemeaua și fasolea din conservă aduc împreună multă sare. Nu mai săra până nu guști la final.',
        'Ține 3 zile la frigider și e mai bună a doua zi. Adaugă ouăle abia când o mănânci — se strică textura la păstrare.'
      ],
      swaps: [
        { label: 'Mai ieftin și mai proteic', text: '150 g fasole uscată, înmuiată peste noapte și fiartă 60 de minute: aceeași cantitate finală, cu ~20 g mai multă proteină și la o treime din preț.' },
        { label: 'Cu ton', text: 'O conservă de ton scurs în plus: +26 g proteină pe castron, fără calorii semnificative.' },
        { label: 'Fără lactate', text: 'Avocado sau 30 g de semințe de dovleac în loc de telemea. Mai puțină proteină, mai multe grăsimi bune.' }
      ],
      why: 'Cincisprezece minute, fără foc, din conserve care stau în dulap — și tot iese peste 30 g de proteină pe porție.'
    },

    {
      id: 'rc-sandvis-branza-ou-paine-proteica',
      name: 'Sandviș proteic cu brânză de vaci și ou',
      emoji: '🥪', base: 'oua', method: 'nocook', mealType: 'mic-dejun',
      servings: 1, timeMin: 8, activeTimeMin: 8, effort: 1, difficulty: 'trivial',
      equipment: ['cuțit', 'furculiță', 'bol mic'],
      ing: [
        { id: 'b-paine-proteica-lidl', g: 90 },
        { id: 'd-branza-vaci-covalact-05', g: 120 },
        { id: 'd-oua-gaina-l', g: 110 },
        { p: 'castraveti', g: 60 },
        { p: 'rosii', g: 80 },
        { p: 'salata', g: 20 },
        { p: 'mustar', g: 8 },
        { p: 'condimente', g: 2, free: true }
      ],
      steps: [
        'Fierbe ouăle dinainte — 9 minute pentru gălbenuș tare — și ține-le necurățate la frigider. Se păstrează 5 zile și transformă micul dejun în asamblare pură.',
        'Zdrobește brânza de vaci cu furculița împreună cu muștarul, sare, piper și mărar sau ceapă verde tocată. Nu o lăsa granulată; frecată, se întinde ca o cremă.',
        'Prăjește feliile de pâine proteică în prăjitor sau în tigaie uscată. Pâinea proteică e mai densă și mai umedă decât cea albă — neprăjită, sandvișul e greu de mâncat.',
        'Întinde crema de brânză pe ambele felii, generos. Ea e „lipiciul” care ține totul.',
        'Ouăle tăiate rondele deasupra, apoi castravetele, roșia și salata. Sare doar peste roșie.',
        'Taie sandvișul în diagonală. Nu e estetică — pe diagonală, prima îmbucătură prinde toate straturile.'
      ],
      tips: [
        'Pâinea proteică are 20,4 g proteină la 100 g față de 8,8 g la pâinea albă toast. Două felii aduc 18 g — cât trei albușuri.',
        'Micul dejun clasic românesc (pâine, unt, gem) are sub 8 g de proteină. Ăsta are peste 50, la aproximativ aceleași calorii.',
        'Brânza de vaci ține de foame mult mai mult decât untul sau crema de brânză: are cazeină, care se digeră lent.'
      ],
      swaps: [
        { label: 'Mai ieftin', text: 'Pâine integrală obișnuită și 30 g de lapte praf degresat amestecat în brânză: recuperezi aproape toată proteina pierdută.' },
        { label: 'La pachet', text: 'Crema de brânză într-un borcănel, pâinea prăjită separat, asamblat la birou. Altfel se înmoaie până la ora 10.' },
        { label: 'Fără ouă', text: '60 g de piept de pui la grătar feliat sau pastramă de curcan. Rămâne peste 45 g de proteină.' }
      ],
      why: 'Opt minute și un mic dejun care are mai multă proteină decât prânzul mediu al majorității oamenilor.'
    },

    /* ===================== TOFU & SOIA ===================== */
    {
      id: 'rc-tempeh-cuptor-cartofi-dulci',
      name: 'Tempeh la cuptor cu cartofi dulci și broccoli',
      emoji: '🌿', base: 'tofu', method: 'oven', mealType: 'cina',
      servings: 2, timeMin: 45, activeTimeMin: 15, effort: 2, difficulty: 'easy',
      equipment: ['tavă de cuptor', 'hârtie de copt', 'castron'],
      ing: [
        { id: 'v-tempeh', g: 300 },
        { p: 'cartofi-dulci', g: 350 },
        { id: 'v-broccoli', g: 250 },
        { p: 'sos-soia', g: 25 },
        { p: 'ulei-masline', g: 18 },
        { p: 'usturoi', g: 10 },
        { p: 'miere', g: 10 },
        { p: 'lamaie', g: 20 },
        { p: 'condimente', g: 4, free: true }
      ],
      steps: [
        'Taie tempehul felii de 1 cm și ține-le 10 minute în abur sau 2 minute în apă clocotită. Aburirea scoate amăreala pe care mulți o pun greșit pe seama sortimentului.',
        'Marinada: sos de soia, miere, usturoi tocat, zeamă de lămâie, ulei și piper. Lasă tempehul în ea 15 minute — spre deosebire de tofu, absoarbe repede.',
        'Cuptor la 200 °C. Cartofii dulci tăiați cuburi de 2 cm, amestecați cu ulei și sare, intră primii, 20 de minute.',
        'Adaugă feliile de tempeh într-un singur strat, cu marinada rămasă turnată peste, și mai dă 12 minute.',
        'Broccoliul, uns cu un strop de ulei, intră în ultimele 8 minute. Peste 10 minute la 200 °C devine moale și își pierde culoarea.',
        'Tempehul e gata când marginile s-au închis la culoare și marinada s-a lipit de el ca o glazură. Nu trebuie să fie moale — are textură fermă prin natura lui.'
      ],
      tips: [
        'Tempehul are 19 g proteină la 100 g, față de 12,5–13 g la tofu, pentru că e boabă întreagă fermentată, nu coagulat de lapte de soia.',
        'Aburirea de 10 minute e pasul pe care aproape toată lumea îl sare și e motivul pentru care „nu-mi place tempehul”.',
        'Ca soia, are profilul complet de aminoacizi — nu are nevoie de combinat cu cereale ca lintea sau fasolea.'
      ],
      swaps: [
        { label: 'Cu tofu', text: 'Tofu afumat, stors bine 10 minute între șervete. Mai ieftin și mai ușor de găsit, cu ~6 g mai puțină proteină la 100 g.' },
        { label: 'La air fryer', text: '180 °C: cartofii 12 minute, tempehul încă 10. Iese mai crocant decât la cuptor.' },
        { label: 'Fără miere', text: 'O linguriță de bulion și un vârf de boia afumată. Varianta vegană și fără zahăr adăugat.' }
      ],
      why: 'Cea mai concentrată proteină vegetală pe care o poți pune într-o tavă, cu 15 minute de muncă și fără carne.'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_RECIPES = RECIPES;
  window.PF_PANTRY = PANTRY;
  window.PF_METHODS = METHODS;
})();
