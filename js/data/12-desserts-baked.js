/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — DESERTURI „CHEAT": FAMILIA `baked`
 * File: js/data/12-desserts-baked.js
 * Items: 16
 * Family: baked (cuptor sau air fryer)
 * Contract: docs/DESSERT-SCHEMA.md
 *
 * PUDRA: IZOLAT DE SOIA (octombrie 2026). Rețetele foloseau cazeină și
 * whey; le-am mutat pe izolat de soia pentru cine nu tolerează lactoza sau
 * nu are cazeină. Restul lactatelor (brânză, iaurt, lapte) au rămas.
 *
 * CUM SE POARTĂ SOIA LA COPT (context pentru cine editează fișierul):
 * izolatul are ~88% proteină și zero lactoză. E proteina din care se face
 * tofu: leagă apă mult și se închegă la căldură. În aluat iese mai umed
 * decât cu whey, dar mai dens; prea mult face prăjitura grea și „pâinoasă".
 * Are un gust ușor de fasole, pe care cacao, scorțișoara, vanilia, fructele
 * și un praf de sare îl acoperă. Regulile pe care le respectă TOATE intrările:
 *   1. Pudra nu trece de ~1/4 din masa uscată a rețetei.
 *   2. Soia trage lichid: lasă aluatul 5 minute înainte să judeci cât e de
 *      gros, și adaugă 1-2 linguri de lapte sau iaurt dacă s-a îngroșat prea
 *      tare.
 *   3. Fiecare rețetă are un ingredient umed (brânză de vaci, iaurt, banană,
 *      măr, albuș) ȘI o grăsime. Fără amândouă, iese cărămidă.
 *   4. Se rumenește ceva mai repede decât un aluat cu făină: urmărește
 *      ultimele minute sau acoperă cu folie.
 *
 * DULCELE (octombrie 2026): vine doar din miere, fructe, curmale și — la
 * biscuiți și cookies, unde trebuie să fie crocanți — puțin zahăr. Toate se
 * numără ca zahăr adăugat și apar pe card. Mierea aduce umezeală și se
 * rumenește mai repede decât zahărul: cuptorul e cu ~10 °C mai jos decât în
 * rețetele clasice, iar unde e cazul, folie în ultimele minute.
 *
 * Macro-urile NU sunt scrise nicăieri de mână: se calculează din `ing`.
 * Prețurile din tot proiectul sunt ESTIMĂRI neconfirmate.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    /* ------------------------------------------------------------------ 1 */
    {
      id: 'ds-brownie-cazeina-tava',
      name: 'Brownie proteic la tavă',
      emoji: '🍫',
      family: 'baked',
      craving: 'ciocolata',
      servings: 6,
      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 200 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 's-soy-protein-isolate', g: 55 },
        { p: 'cacao', g: 35 },
        { p: 'faina-ovaz', g: 50 },
        { p: 'unt-arahide', g: 40 },
        { p: 'miere', g: 30 },
        { p: 'ciocolata-neagra', g: 30 },
        { p: 'praf-copt', g: 4, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 35, active: 15, chill: 60 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['bol', 'tel', 'tavă 20×15 cm', 'hârtie de copt', 'cuptor'],
      steps: [
        'Încinge cuptorul la 165 °C. Tapetează o tavă de 20×15 cm cu hârtie de copt.',
        'Bate brânza de vaci cu ouăle, untul de arahide și mierea până nu mai vezi cocoloașe de brânză — dacă rămân, se văd ca pete albe în brownie.',
        'Amestecă separat, uscat: izolatul de soia, cacaoa, făina de ovăz, praful de copt și sarea.',
        'Toarnă uscatele peste umede și amestecă doar până se încorporează. 20 de secunde în plus dezvoltă gluten din ovăz și întărește miezul.',
        'Întinde compoziția în tavă, presară ciocolata neagră tocată deasupra.',
        'Coace 20-24 de minute. Scoate-l când mijlocul încă tremură ușor și scobitoarea iese cu firimituri umede — NU curat.',
        'Lasă-l în tavă până se răcește complet, minimum o oră. Abia atunci se taie; cald se sfărâmă.'
      ],
      tips: [
        'Izolatul de soia leagă apa din brânza de vaci și se închegă la căldură — brownie-ul rămâne umed, dar mai dens decât unul cu făină. Dacă după 5 minute compoziția e ca o pastă tare, adaugă 1-2 linguri de lapte. Cacaoa multă acoperă complet gustul de soia.',
        'Cele 200 g de brânză de vaci nu sunt „pentru proteină", sunt apa rețetei. Dacă o înlocuiești cu lapte, pierzi vâscozitatea și compoziția se așază — iese o clătită groasă.',
        'Mierea face miezul mai fudgy și se rumenește mai repede decât zahărul — de aici cei 165 °C în loc de 175. Dacă marginea se închide la culoare înainte de minutul 15, pune o folie peste tavă.',
        '30 g de miere la 6 porții înseamnă 5 g de zahăr adăugat pe pătrat, față de ~30 g într-un brownie de cofetărie. E mai puțin dulce decât originalul, intenționat: cacaoa și ciocolata neagră duc gustul. Crusta lucioasă a brownie-ului clasic vine din mult zahăr bătut cu ouă — aici n-o ai, ciocolata presărată deasupra rezolvă partea vizuală.'
      ],
      swaps: [
        { label: 'Fără arahide', text: 'Înlocuiește untul de arahide cu 35 g tahini. Amăreala lui merge surprinzător de bine cu cacaoa.' },
        { label: 'Mai fudgy', text: 'Scoate 15 g din făina de ovăz și pune 10 g amidon de porumb. Miezul rămâne mai cremos, dar se taie mai greu.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, arahide și ovăz (posibile urme de gluten).',
        'Cacao — 35 g pe toată tava înseamnă puțină teobromină și cofeină pe porție, dar dacă ești sensibil, nu e desertul de la 23:00.'
      ],
      taste: { sweetness: 55, richness: 72, texture: 76, authenticity: 70 },
      vs: { name: 'Brownie de cofetărie', grams: 80, kcal: 340, protein: 4, carbs: 40, sugars: 30, fat: 18 },
      vsSource: 'Valori tipice de etichetă pentru brownie ambalat / de cofetărie, porție 80 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Temperatura camerei, sub folie, 2 zile; la frigider 4 zile. Se congelează bine tăiat felii.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 4, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'ds-cookies-xilitol-air-fryer',
      name: 'Cookies cu ciocolată, la air fryer',
      emoji: '🍪',
      family: 'baked',
      craving: 'ciocolata',
      servings: 4,
      ing: [
        { p: 'faina-ovaz', g: 50 },
        { p: 'faina-migdale', g: 40 },
        { id: 's-soy-protein-isolate', g: 30 },
        { p: 'unt-arahide', g: 45 },
        { id: 'd-oua-gaina-l', g: 55 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 40 },
        { p: 'zahar', g: 25 },
        { p: 'ciocolata-neagra', g: 30 },
        { p: 'praf-copt', g: 3, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 22, active: 10, chill: 15 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'air fryer', 'hârtie de copt'],
      steps: [
        'Amestecă untul de arahide cu oul, iaurtul, zahărul și vanilia până devine o pastă omogenă.',
        'Adaugă făina de ovăz, făina de migdale, izolatul de soia, praful de copt și sarea. Amestecă scurt, apoi încorporează ciocolata neagră tocată mărunt.',
        'Ține aluatul 15 minute la frigider — soia trage din umezeală și aluatul se întărește; la rece se modelează fără să ți se lipească de mâini.',
        'Formează 8 bile de ~35 g, așază-le pe hârtie de copt în coșul air fryerului, cu spațiu între ele, și turtește-le cu podul palmei la ~1 cm.',
        'Air fryer 160 °C, 8-9 minute. Marginile trebuie să fie ferme, mijlocul încă moale la atingere.',
        'Lasă-le 10 minute pe hârtie fără să le miști. Cald, un cookie proteic e moale ca aluatul; se leagă la răcire.'
      ],
      tips: [
        '30 g de izolat de soia la 90 g de făinuri înseamnă un sfert din masa uscată — pragul. Peste atât, cookie-ul devine dens și „pâinos" în loc de fraged.',
        'Zahăr, nu miere, și intenționat: zahărul se topește și curge la căldură, deci cookie-ul se lățește și capătă marginea crocantă. Cu miere rămâne bombat și moale, ca o prăjiturică. 25 g la 4 porții înseamnă ~6 g de zahăr adăugat pe porție, de trei ori mai puțin decât în două cookies de patiserie.',
        'Ciocolata neagră 85% tocată mărunt, nu fulgi „fără zahăr" — aceia sunt făcuți cu maltitol. 85% are puțin zahăr și destulă amăreală cât să nu-ți lipsească dulceața.',
        'Untul de arahide și iaurtul grecesc nu sunt opționale — sunt grăsimea și apa pe care soia le trage. Scoate iaurtul și obții exact „cookie-ul proteic uscat" din reclamațiile de pe forumuri.',
        'Air fryerul suflă aer, deci usucă mai repede decât cuptorul: 8 minute la 160 °C în air fryer ≈ 11-12 minute la 170 °C în cuptor. Nu transfera timpii unu la unu.'
      ],
      swaps: [
        { label: 'Moi, cu miere', text: '20 g miere în loc de zahăr. Ies bombate și moi, ca niște prăjiturele; scade un minut din timp, mierea se rumenește repede.' },
        { label: 'Fără arahide', text: '45 g unt de migdale sau 40 g unt 82%. Cu unt ies mai fragede și mai apropiate de cookie-ul clasic.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, arahide, migdale și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 68, richness: 66, texture: 78, authenticity: 76 },
      vs: { name: 'Cookies cu ciocolată de patiserie (2 buc.)', grams: 50, kcal: 240, protein: 3, carbs: 32, sugars: 18, fat: 11 },
      vsSource: 'Valori tipice de etichetă pentru cookies ambalate cu fulgi de ciocolată, 2 bucăți / 50 g, 2026',
      sweetener: { kind: 'zahar', gPerServing: 6.25 },
      storage: 'Cutie închisă, temperatura camerei, 3 zile. Se înmoaie a doua zi — 2 minute în air fryer la 160 °C le readuc.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'ds-negresa-ramekin-air-fryer',
      name: 'Negresă la ramekin, air fryer',
      emoji: '🍫',
      family: 'baked',
      craving: 'ciocolata',
      servings: 2,
      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 100 },
        { id: 'd-oua-gaina-l', g: 55 },
        { id: 's-soy-protein-isolate', g: 22 },
        { p: 'cacao', g: 15 },
        { p: 'faina-ovaz', g: 25 },
        { p: 'miere', g: 12 },
        { p: 'unt', g: 8 },
        { p: 'ciocolata-neagra', g: 20 },
        { p: 'praf-copt', g: 2, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 2, free: true }
      ],
      time: { total: 24, active: 8, chill: 20 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'furculiță', 'ramekin 12 cm sau formă mică', 'air fryer'],
      steps: [
        'Topește untul, amestecă-l cu brânza de vaci, oul, mierea și vanilia până e complet omogen.',
        'Presară deasupra izolatul de soia, cacaoa, făina de ovăz, praful de copt și sarea; amestecă până dispare praful, nu mai mult.',
        'Toarnă în ramekin uns. Compoziția trebuie să fie groasă, dar să curgă lent de pe lingură; dacă e ca o pastă, adaugă o lingură de apă.',
        'Air fryer 160 °C, 14-16 minute. La 14 minute verifică: marginea trebuie să fie desprinsă, centrul umflat și încă moale.',
        'Presară ciocolata neagră tocată peste negresa fierbinte și întinde-o cu dosul lingurii — se topește singură și îți face glazura.',
        'Așteaptă 20 de minute. Glazura se prinde, miezul se leagă și abia atunci gustul de cacao iese complet.'
      ],
      tips: [
        'Negresa clasică își ia culoarea și crusta din mult zahăr caramelizat. Cele 12 g de miere (6 g pe porție) sunt prea puține pentru asta, deci compensez cu 15 g cacao și cu glazura de ciocolată neagră — altfel iese un ciocolatiu spălăcit, corect la gust, dezamăgitor la privit.',
        'Într-un vas mic și adânc căldura ajunge greu la centru, deci compoziția stă mult la 70-80 °C. Izolatul de soia se închegă acolo ca un tofu moale și ține apa brânzei — nu la fel de uniform ca o cremă cu făină, de aceea lasă compoziția 5 minute înainte s-o torni.',
        'Cele 8 g de unt par nimic la 2 porții, dar sunt diferența dintre „umed" și „burete". Într-o rețetă cu brânză degresată și pudră, grăsimea e singurul lucru care îmbracă proteina coagulată.',
        'Air fryerul coace de sus în jos mult mai agresiv decât cuptorul. Dacă suprafața se închide la culoare înainte de minutul 10, pune o folie de aluminiu peste ramekin.'
      ],
      swaps: [
        { label: 'La cuptor', text: '175 °C, 20-22 de minute, fără folie. Aceeași compoziție, doar că se coace mai uniform.' },
        { label: 'Cu proteină de mazăre', text: 'Un blend vegetal mazăre + orez în loc de soia, aceeași cantitate. Gust mai pământos și textură puțin mai granuloasă; cacaoa îl acoperă.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și ovăz (posibile urme de gluten).',
        'Cacao plus ciocolată neagră: cea mai „încărcată" rețetă cu cacao din set. Dacă ești sensibil la cofeină, mut-o la ora 17:00.'
      ],
      taste: { sweetness: 56, richness: 78, texture: 80, authenticity: 74 },
      vs: { name: 'Negresă cu glazură, felie de cofetărie', grams: 90, kcal: 360, protein: 4, carbs: 44, sugars: 32, fat: 19 },
      vsSource: 'Valori tipice de etichetă pentru prăjitură tip negresă cu glazură, felie 90 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 6 },
      storage: 'Se mănâncă în ziua respectivă. La frigider peste noapte glazura albăstrește și miezul se usucă.',
      mealFit: { desert: 5, gustare: 4, micDejun: 1, postAntrenament: 4, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'ds-muffins-afine-cazeina',
      name: 'Muffins cu afine',
      emoji: '🫐',
      family: 'baked',
      craving: 'fructat',
      servings: 6,
      ing: [
        { p: 'faina-ovaz', g: 90 },
        { p: 'faina-migdale', g: 40 },
        { id: 's-soy-protein-isolate', g: 55 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 180 },
        { id: 'd-oua-gaina-l', g: 110 },
        { p: 'afine', g: 120 },
        { p: 'ulei-cocos', g: 15 },
        { p: 'miere', g: 28 },
        { p: 'praf-copt', g: 6, free: true },
        { p: 'bicarbonat', g: 2, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 32, active: 12, chill: 15 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['două boluri', 'tel', 'formă de muffins (6)', 'cupe de hârtie', 'cuptor'],
      steps: [
        'Încinge cuptorul la 165 °C și pune cupele de hârtie în formă.',
        'Bate ouăle cu iaurtul, uleiul de cocos topit, mierea și vanilia.',
        'Amestecă într-un al doilea bol făina de ovăz, făina de migdale, izolatul de soia, praful de copt, bicarbonatul și sarea.',
        'Toarnă umedele peste uscate și amestecă din 10-12 mișcări. Compoziția trebuie să rămână cu urme de făină vizibile — se omogenizează la copt.',
        'Încorporează afinele din două mișcări, apoi împarte în cele 6 cupe; se umplu până la 3/4.',
        'Coace 20-22 de minute. Sunt gata când vârful revine la apăsare, chiar dacă scobitoarea iese ușor umedă.',
        'Scoate-le din formă după 5 minute, altfel aburul de jos le înmoaie baza.'
      ],
      tips: [
        'Cele 55 g de izolat de soia sunt sub un sfert din masa uscată de 240 g. Ăsta e pragul: dacă înlocuiești și restul făinii cu pudră, muffinul nu mai crește și iese dens, ca o pâine.',
        'Iaurtul grecesc 0% face două lucruri deodată: dă apa pe care soia o trage și dă aciditatea de care are nevoie bicarbonatul ca să ridice. Cu lapte în loc de iaurt, muffinii ies plați.',
        'Afinele congelate merg direct din congelator, nedecongelate, tăvălite prin puțină făină de ovăz. Decongelate, colorează compoziția în gri-verzui și lasă apă care întârzie coacerea cu 4-5 minute.',
        'Nu depăși 22 de minute „ca să fie siguri". Soia și mierea se rumenesc amândouă mai repede decât un aluat cu făină albă și zahăr — de aici 165 °C, nu 175 — iar muffinul trece de la umed la uscat în câteva minute.',
        '28 g de miere la 6 muffini: ~5 g de zahăr adăugat pe bucată, față de ~26 g într-unul de cofetărie. Afinele fac restul; sunt mai puțin dulci decât originalul și ar trebui să fie.'
      ],
      swaps: [
        { label: 'Cu zmeură', text: '120 g zmeură în loc de afine. Mai acru, scoate în evidență mierea, dar lasă mai multă apă — mai adaugă 2 minute de copt.' },
        { label: 'Fără migdale', text: 'Înlocuiește făina de migdale cu 30 g fulgi de cocos măcinați + 10 g făină de ovăz. Grăsimea rămâne, aroma se schimbă.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, migdale și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 54, richness: 52, texture: 78, authenticity: 72 },
      vs: { name: 'Muffin cu afine de cofetărie', grams: 95, kcal: 360, protein: 5, carbs: 48, sugars: 26, fat: 17 },
      vsSource: 'Valori tipice de etichetă pentru muffin cu afine ambalat, bucată 95 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 4.7 },
      storage: 'Cutie închisă, 2 zile la temperatura camerei sau 4 la frigider. Se congelează individual și se reîncălzesc 30 de secunde la microunde.',
      mealFit: { desert: 4, gustare: 5, micDejun: 5, postAntrenament: 4, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'ds-chec-banane-nuci',
      name: 'Chec cu banane și nuci',
      emoji: '🍌',
      family: 'baked',
      craving: 'patiserie',
      servings: 8,
      ing: [
        { p: 'banane', g: 250 },
        { id: 'd-oua-gaina-l', g: 165 },
        { p: 'faina-ovaz', g: 120 },
        { id: 's-soy-protein-isolate', g: 75 },
        { id: 'd-branza-vaci-proteica-milbona', g: 150 },
        { id: 'v-nuci', g: 50 },
        { p: 'miere', g: 15 },
        { p: 'ulei-cocos', g: 15 },
        { p: 'praf-copt', g: 8, free: true },
        { p: 'bicarbonat', g: 3, free: true },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'sare', g: 2, free: true },
        { p: 'vanilie', g: 4, free: true }
      ],
      time: { total: 65, active: 15, chill: 60 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['bol mare', 'furculiță', 'formă de chec 22 cm', 'hârtie de copt', 'folie de aluminiu', 'cuptor'],
      steps: [
        'Încinge cuptorul la 170 °C. Tapetează o formă de chec de 22 cm.',
        'Zdrobește bananele cu furculița — cu cât sunt mai pătate, cu atât mai dulce iese checul și cu atât mai puțină miere îți trebuie. Cu banane cu pete negre, poți sări peste miere de tot.',
        'Adaugă ouăle, brânza de vaci, uleiul de cocos topit, mierea și vanilia; amestecă până e o compoziție uniformă, fără bucăți de brânză.',
        'Într-un bol separat amestecă făina de ovăz, izolatul de soia, praful de copt, bicarbonatul, scorțișoara și sarea.',
        'Combină cele două, adaugă nucile tocate mare și toarnă în formă. Nivelează suprafața.',
        'Coace 45-50 de minute la 170 °C. După primele 30 de minute acoperă cu folie de aluminiu: suprafața se închide la culoare mult înaintea miezului.',
        'Testează cu o scobitoare la 45 de minute — trebuie să iasă cu firimituri, nu curată. Lasă checul în formă 15 minute, apoi pe grătar încă 45.'
      ],
      tips: [
        'Un chec are cel mai lung drum până la centru din tot setul ăsta. Soia ține umezeala mai bine decât whey-ul, dar mai mult de 75 g de izolat la 120 g de ovăz face miezul greu și „pâinos". Lasă compoziția 5 minute înainte s-o torni: dacă s-a îngroșat ca un aluat de pâine, adaugă 2 linguri de lapte.',
        '170 °C, nu 180 °C, și 50 de minute, nu 35. Un chec proteic la temperatura clasică face crustă groasă și rămâne crud la mijloc; la 170 °C căldura ajunge la centru înainte ca marginea să se usuce.',
        'Bananele foarte coapte plus brânza de vaci acoperă și dulceața, și umezeala. Dacă folosești banane verzui, checul iese fad și amidonos, iar tentația e să adaugi mai multă miere — care nu rezolvă lipsa de aromă, doar o îndulcește.',
        'Se taie abia rece de tot. Cald, glutenul slab din ovăz și proteina încă neașezată nu țin felia — se rupe. Ziua a doua e chiar mai bun: umezeala se redistribuie.'
      ],
      swaps: [
        { label: 'Fără nuci', text: '50 g semințe de dovleac. Aceeași crocanță, mai multă proteină, aromă mai neutră.' },
        { label: 'Cu ciocolată', text: 'Înlocuiește 20 g din făina de ovăz cu 20 g cacao și adaugă 30 g fulgi de ciocolată. Devine chec de cacao cu banane.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, nuci și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 58, richness: 60, texture: 78, authenticity: 80 },
      vs: { name: 'Chec cu banane (banana bread) de cofetărie', grams: 90, kcal: 330, protein: 4.5, carbs: 42, sugars: 24, fat: 16 },
      vsSource: 'Valori tipice de etichetă pentru banana bread ambalat, felie 90 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 1.9 },
      storage: 'Înfășurat în folie, 3 zile la temperatura camerei; 5 la frigider. Feliile se congelează foarte bine.',
      mealFit: { desert: 4, gustare: 5, micDejun: 5, postAntrenament: 4, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'ds-clatite-cuptor-zmeura',
      name: 'Clătită la cuptor cu zmeură (Dutch baby)',
      emoji: '🥞',
      family: 'baked',
      craving: 'fructat',
      servings: 2,
      ing: [
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 'd-albus-lichid', g: 100 },
        { p: 'faina-ovaz', g: 40 },
        { id: 's-soy-protein-isolate', g: 18 },
        { id: 'd-lapte-15', g: 100 },
        { p: 'zmeura', g: 100 },
        { p: 'unt', g: 10 },
        { p: 'miere', g: 8 },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 28, active: 8, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender sau tel', 'tigaie de fontă 22 cm sau tavă mică', 'cuptor'],
      steps: [
        'Pune tigaia goală în cuptor și încinge tot la 200 °C. Tigaia trebuie să fie fierbinte când torni — de asta depinde umflarea.',
        'Blenduiește ouăle, albușul, laptele, făina de ovăz, izolatul de soia, mierea, vanilia și sarea până e un aluat complet lichid, ca smântâna subțire.',
        'Lasă aluatul 5 minute pe blat: făina de ovăz și soia absorb, iar clătita se umflă mai uniform. Dacă s-a îngroșat peste smântână subțire, o lingură de lapte.',
        'Scoate tigaia, pune untul, rotește-o până se topește și acoperă fundul, apoi toarnă aluatul dintr-o mișcare.',
        'Bagă imediat la cuptor, 18-20 de minute la 200 °C. Nu deschide ușa în primele 12 minute — se dezumflă și nu mai revine.',
        'Presară zmeura peste clătita fierbinte și servește în 2 minute: se lasă vizibil pe măsură ce se răcește, exact ca un Dutch baby clasic.'
      ],
      tips: [
        'Pudra e aici în cantitate mică: 18 g la 8 ouă-echivalent de lichid. Structura o dau ouăle și aburul, nu pudra; soia e aici doar ca să urce proteina. Mai mult de atât îngreunează aluatul și clătita nu se mai umflă.',
        'Temperatura mare merge pentru că aluatul e foarte lichid: centrul se coace repede, înainte ca soia să apuce să-l îngroașe și să-l facă dens.',
        'Fără cele 10 g de unt în tigaia încinsă nu ai nici marginea rumenă, nici desprinderea. Cele 8 g de miere sunt prea puține ca să rumenească, deci culoarea vine de la gălbenuș și de la untul care se prăjește.',
        'Zmeura se pune DUPĂ coacere. Băgată în aluat, apa ei împiedică umflarea și clătita rămâne plată la mijloc.'
      ],
      swaps: [
        { label: 'Fără lactoză', text: '100 g băutură de soia neîndulcită în loc de lapte, și ulei de cocos în loc de unt. Se umflă la fel.' },
        { label: 'Cu vișine', text: '100 g vișine congelate, scurse bine și încălzite separat cu o linguriță de miere. Aciditatea lor e și mai potrivită.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 48, richness: 55, texture: 82, authenticity: 84 },
      vs: { name: 'Clătite cu gem (2 bucăți)', grams: 160, kcal: 400, protein: 9, carbs: 55, sugars: 22, fat: 15 },
      vsSource: 'Valori tipice pentru 2 clătite de patiserie cu gem, porție ~160 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 4 },
      storage: 'Nu se păstrează. Se mănâncă în 10 minute de la scoaterea din cuptor, altfel devine o omletă groasă.',
      mealFit: { desert: 4, gustare: 3, micDejun: 5, postAntrenament: 4, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'ds-cheesecake-copt-quark',
      name: 'Cheesecake copt cu brânză de vaci',
      emoji: '🍰',
      family: 'baked',
      craving: 'cremos',
      servings: 6,
      ing: [
        { p: 'faina-migdale', g: 60 },
        { p: 'unt', g: 20 },
        { id: 'd-branza-vaci-proteica-milbona', g: 400 },
        { id: 'd-crema-branza-light', g: 100 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 's-soy-protein-isolate', g: 25 },
        { p: 'amidon-porumb', g: 20 },
        { p: 'miere', g: 35 },
        { p: 'lamaie', g: 15 },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 4, free: true }
      ],
      time: { total: 80, active: 20, chill: 270 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['formă cu inel detașabil 18 cm', 'mixer sau tel', 'hârtie de copt', 'cuptor'],
      steps: [
        'Amestecă făina de migdale cu untul topit și 5 g din miere, presează în fundul formei de 18 cm și coace 10 minute la 170 °C. Lasă blatul să se răcească.',
        'Scade cuptorul la 160 °C.',
        'Bate brânza de vaci cu crema de brânză până e complet netedă. Ăsta e pasul care decide textura: orice bob rămas se simte în cheesecake-ul copt.',
        'Adaugă ouăle unul câte unul, la viteză mică, apoi izolatul de soia, amidonul, restul de miere, zeama și coaja de lămâie și vanilia. Nu bate mult după ce au intrat ouăle — aerul încorporat crapă suprafața.',
        'Toarnă peste blat și coace 45-50 de minute la 160 °C. Marginea trebuie să fie prinsă, iar mijlocul, pe o zonă de ~6 cm, să tremure ca o piftie când miști forma.',
        'Oprește cuptorul și lasă cheesecake-ul înăuntru cu ușa întredeschisă 30 de minute. Șocul termic e principala cauză a crăpăturii.',
        'Frigider minimum 4 ore, ideal peste noapte. Abia atunci se taie curat și abia atunci gustul e complet.'
      ],
      tips: [
        'Cheesecake-ul copt e singurul desert din set unde temperatura joasă nu e o adaptare pentru proteină, ci regula clasică — doar că aici contează dublu: cu 400 g de brânză degresată în compoziție, la 180 °C proteina se strânge, stoarce zerul și obții o baltă de lichid pe felie a doua zi.',
        'Cele 25 g de izolat de soia leagă o parte din apa brânzei degresate și se închegă odată cu ouăle. Nu o fac la fel de uniform ca smântâna grasă din rețeta clasică — de aceea amidonul a crescut la 20 g. Bate soia bine în cremă: cocoloașele de pudră se simt după copt.',
        'Amidonul de porumb, 20 g, nu e opțional într-un cheesecake cu brânză slabă. E plasa de siguranță care ține apa în compoziție dacă îl uiți 5 minute în plus în cuptor.',
        'Mierea merge cu lămâia și dă o notă florală, dar se rumenește mai repede decât zahărul: dacă suprafața prinde culoare înainte de minutul 35, acoperă forma cu folie. 35 g la 6 felii înseamnă ~6 g de zahăr adăugat pe felie, față de ~28 g într-un cheesecake de cofetărie — e mai puțin dulce, iar lămâia acoperă diferența.'
      ],
      swaps: [
        { label: 'Fără blat', text: 'Coace doar crema, în forma tapetată. Pierzi 60 g de făină de migdale și ~80 kcal pe porție, dar și partea care ține felia.' },
        { label: 'Cu vișine', text: '150 g vișine congelate, fierte separat cu 10 g miere până se leagă, turnate rece peste cheesecake-ul rece.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și migdale.'
      ],
      taste: { sweetness: 54, richness: 74, texture: 86, authenticity: 80 },
      vs: { name: 'Cheesecake copt de cofetărie', grams: 120, kcal: 380, protein: 6, carbs: 34, sugars: 28, fat: 24 },
      vsSource: 'Valori tipice de etichetă pentru cheesecake copt ambalat, felie 120 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 5.8 },
      storage: 'Frigider, 4 zile, acoperit. Nu se congelează întreg — la decongelare lasă apă și devine granulos.',
      mealFit: { desert: 5, gustare: 3, micDejun: 2, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: 'ds-placinta-turnata-branza',
      name: 'Plăcintă turnată cu brânză dulce',
      emoji: '🥧',
      family: 'baked',
      craving: 'patiserie',
      servings: 6,
      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 350 },
        { id: 'd-oua-gaina-l', g: 165 },
        { id: 's-soy-protein-isolate', g: 30 },
        { p: 'faina-ovaz', g: 70 },
        { p: 'amidon-porumb', g: 15 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 100 },
        { p: 'miere', g: 25 },
        { p: 'lamaie', g: 10 },
        { p: 'praf-copt', g: 5, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 4, free: true }
      ],
      time: { total: 52, active: 12, chill: 30 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol mare', 'tel', 'tavă ceramică 20×25 cm', 'cuptor'],
      steps: [
        'Încinge cuptorul la 170 °C și unge o tavă ceramică de 20×25 cm.',
        'Bate ouăle cu iaurtul, coaja și zeama de lămâie, vanilia și mierea până mierea se dizolvă complet.',
        'Adaugă brânza de vaci și amestecă energic cu telul — vrei o compoziție cu bucăți mici de brânză, nu o cremă perfect netedă; aici e diferența față de cheesecake.',
        'Presară izolatul de soia, făina de ovăz, amidonul, praful de copt și sarea peste compoziție și încorporează-le.',
        'Toarnă în tavă; stratul trebuie să aibă 3-4 cm. Mai gros de atât, centrul nu se coace până marginea se usucă.',
        'Coace 38-42 de minute la 170 °C, până marginile sunt aurii și centrul e prins dar tremură ușor. Dacă se rumenește prea repede deasupra, folie în ultimele 10 minute — mierea prinde culoare mai repede decât zahărul.',
        'Lasă 30 de minute înainte de tăiere. Fierbinte, plăcinta turnată e lichidă la mijloc.'
      ],
      tips: [
        'Varianta „turnată" (fără foi) nu e un compromis, e o rețetă moldovenească reală — și rezolvă problema că foile de plăcintă din comerț ar adăuga 20 g de făină albă pe porție fără nicio proteină.',
        'Nu bate brânza până devine cremă. Plăcinta cu brânză trăiește din contrastul dintre bucățile de brânză și compoziția din jur; omogenizată complet, obții un flan.',
        'Compoziția e 60% brânză degresată, adică deja pe muchia „proteină multă, grăsime puțină". Izolatul de soia trage apa brânzei și se închegă la cuptor; amidonul face restul. Dacă tava lasă totuși apă la răcire, data viitoare pune încă 5 g de amidon.',
        'E cea mai slabă caloric rețetă din set (sub 180 kcal pe porție) fiindcă are aproape zero grăsime adăugată. Dacă textura ți se pare seacă, 15 g de unt topit în compoziție rezolvă la un cost de ~18 kcal pe porție.'
      ],
      swaps: [
        { label: 'Cu stafide sau vișine', text: '80 g vișine congelate scurse, presărate deasupra înainte de copt. Mai adaugă 3-4 minute de coacere.' },
        { label: 'Mai bogată', text: 'Înlocuiește iaurtul 2% cu 100 g smântână de gătit sau iaurt grecesc 10%. Crește la ~215 kcal pe porție, dar textura se apropie mult mai mult de plăcinta clasică.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 55, richness: 48, texture: 74, authenticity: 78 },
      vs: { name: 'Plăcintă cu brânză dulce, de cofetărie', grams: 150, kcal: 390, protein: 9, carbs: 42, sugars: 18, fat: 20 },
      vsSource: 'Valori tipice pentru plăcintă cu brânză dulce de cofetărie, porție 150 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 4.2 },
      storage: 'Frigider, 3 zile. Se reîncălzește 3-4 minute în air fryer la 160 °C, nu la microunde — acolo devine cauciucată.',
      mealFit: { desert: 4, gustare: 4, micDejun: 4, postAntrenament: 4, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ------------------------------------------------------------------ 9 */
    {
      id: 'ds-mere-crumble-air-fryer',
      name: 'Prăjitură cu mere și crumble de ovăz, air fryer',
      emoji: '🍎',
      family: 'baked',
      craving: 'fructat',
      servings: 2,
      ing: [
        { p: 'mere', g: 250 },
        { id: 'v-fulgi-ovaz-mari', g: 40 },
        { p: 'faina-migdale', g: 25 },
        { id: 's-soy-protein-isolate', g: 22 },
        { p: 'unt', g: 10 },
        { p: 'miere', g: 12 },
        { id: 'd-iaurt-grecesc-olympus-0', g: 100 },
        { p: 'lamaie', g: 8 },
        { p: 'scortisoara', g: 3, free: true },
        { p: 'sare', g: 1, free: true }
      ],
      time: { total: 30, active: 10, chill: 5 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['două ramekine sau o tăviță de air fryer', 'bol', 'folie de aluminiu', 'air fryer'],
      steps: [
        'Taie merele cubulețe de 1 cm (cu coajă), amestecă-le cu zeama de lămâie, scorțișoara și 5 g din miere și împarte-le în două ramekine.',
        'Freacă între degete fulgii de ovăz, făina de migdale, izolatul de soia, sarea și untul rece, apoi stropește cu restul de miere și mai freacă o dată, până obții firimituri neregulate — nu o pastă.',
        'Presară crumble-ul peste mere, fără să-l presezi.',
        'Acoperă ramekinele cu folie de aluminiu și dă-le 15 minute la 170 °C în air fryer: merele se înmoaie în abur, crumble-ul nu se arde.',
        'Scoate folia și mai lasă 5 minute la 180 °C, până crumble-ul e auriu și crocant.',
        'Lasă 5 minute să se așeze, apoi pune iaurtul grecesc rece deasupra. Contrastul cald-rece e jumătate din desert.'
      ],
      tips: [
        'Pudra merge în crumble, nu în mere. Soia absoarbe untul topit și se leagă în firimituri; scorțișoara acoperă gustul ei. Se rumenește repede în air fryer — de aici folia din primele 15 minute.',
        'Folia în primele 15 minute e obligatorie în air fryer. Fără ea, ventilatorul rumenește crumble-ul în 6 minute, iar merele rămân crude — greșeala numărul unu la orice desert cu fructe în air fryer.',
        'Iaurtul de deasupra nu e garnitură, e sursa a jumătate din proteina porției și singurul lucru care compensează faptul că merele și ovăzul aduc aproape numai carbohidrați.',
        'Merele acrișoare (Idared, Granny Smith, oricare din piața Cibin) sunt mai bune decât cele dulci: aciditatea face ca 6 g de miere pe porție să pară mai mult decât sunt. Merele dulci plus miere ar da un desert dulce-plat.'
      ],
      swaps: [
        { label: 'La cuptor', text: '190 °C, 25-28 de minute, acoperit primele 18. Merge la fel, dar consumi de 4 ori mai multă energie pentru două ramekine.' },
        { label: 'Cu pere sau vișine', text: '250 g pere tari, sau 200 g vișine congelate scurse plus 15 g amidon de porumb ca să lege sucul.' }
      ],
      warnings: [
        'Conține soia, lactate, migdale și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 58, richness: 50, texture: 80, authenticity: 78 },
      vs: { name: 'Prăjitură cu mere / apple crumble de cofetărie', grams: 150, kcal: 340, protein: 3, carbs: 50, sugars: 30, fat: 14 },
      vsSource: 'Valori tipice pentru prăjitură cu mere / crumble de cofetărie, porție 150 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 6 },
      storage: 'Se mănâncă imediat. Crumble-ul se înmoaie în 2 ore; dacă îl faci în avans, ține merele și crumble-ul separat.',
      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 3, seara: 4 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 10 */
    {
      id: 'ds-blat-ovaz-arahide-tava',
      name: 'Blat cu ovăz și unt de arahide, la tavă',
      emoji: '🥜',
      family: 'baked',
      craving: 'caramel',
      servings: 8,
      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 160 },
        { id: 's-soy-protein-isolate', g: 68 },
        { p: 'unt-arahide', g: 90 },
        { p: 'curmale', g: 80 },
        { id: 'd-oua-gaina-l', g: 55 },
        { id: 'd-albus-lichid', g: 80 },
        { id: 'd-lapte-15', g: 40 },
        { p: 'sare', g: 2, free: true },
        { p: 'vanilie', g: 4, free: true }
      ],
      time: { total: 40, active: 15, chill: 90 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['blender sau robot mic', 'bol mare', 'tavă 20×20 cm', 'hârtie de copt', 'cuptor'],
      steps: [
        'Înmoaie curmalele 10 minute în apă fierbinte, scurge-le și blenduiește-le cu untul de arahide, laptele și vanilia până obții o pastă de caramel.',
        'Încinge cuptorul la 180 °C și tapetează o tavă de 20×20 cm.',
        'Amestecă în bol fulgii de ovăz, izolatul de soia și sarea.',
        'Adaugă pasta de curmale, oul și albușul. Compoziția va fi groasă și greu de amestecat — asta e corect; dacă e curgătoare, batoanele nu se vor ține.',
        'Presează compoziția în tavă cu dosul unei linguri umezite, într-un strat uniform de ~1,5 cm.',
        'Coace 22-25 de minute la 180 °C, până marginile sunt aurii și centrul e prins la atingere.',
        'Răcește COMPLET în tavă, minimum 90 de minute, apoi taie 8 batoane. Tăiate calde, se sfărâmă garantat.'
      ],
      tips: [
        'Rețeta clasică de baton cu ovăz se ține cu sirop de glucoză sau miere multă. Aici lipiciul îl dau curmalele plus albușul, care coagulează și cimentează fulgii — motiv pentru care albușul lichid nu se poate scoate din listă.',
        'Cele 68 g de izolat de soia sunt un sfert din masa uscată de ~250 g — pragul. Peste atât, batonul devine dens și „prăfos" în gură, un defect pe care nicio cantitate de unt de arahide nu-l repară. Soia trage din pasta de curmale: dacă compoziția nu se mai poate amesteca, o lingură de lapte.',
        'Untul de arahide, 90 g, e grăsimea structurală. Un baton proteic degresat e o barieră de piatră: grăsimea îmbracă proteina denaturată și dă senzația de moale chiar și rece.',
        'Nu depăși 25 de minute. Batonul iese din cuptor părând insuficient copt la mijloc și se leagă în timpul răcirii — dacă îl coci până e ferm în cuptor, a doua zi e uscat.'
      ],
      swaps: [
        { label: 'Fără arahide', text: '90 g tahini sau unt de migdale. Cu tahini iese mai amărui și merge mai bine cu 10 g cacao în compoziție.' },
        { label: 'Fără curmale', text: '50 g miere în loc de curmale. Leagă la fel, dar batoanele ies mai lipicioase și cu ~3 g de zahăr adăugat în plus pe bucată; mai adaugă 15 g fulgi de ovăz.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, arahide și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 56, richness: 68, texture: 76, authenticity: 74 },
      vs: { name: 'Baton de cereale cu ciocolată, din comerț', grams: 45, kcal: 200, protein: 2.5, carbs: 27, sugars: 14, fat: 9 },
      vsSource: 'Valori tipice de etichetă pentru baton de cereale cu ciocolată, bucată 45 g, 2026',
      sweetener: { kind: 'curmale', gPerServing: 10 },
      storage: 'Cutie închisă, 4 zile la temperatura camerei, o săptămână la frigider. Se congelează individual, învelite.',
      mealFit: { desert: 4, gustare: 5, micDejun: 4, postAntrenament: 5, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 11 */
    {
      id: 'ds-tarta-caramel-curmale-arahide',
      name: 'Tartă cu caramel de curmale și arahide',
      emoji: '🥧',
      family: 'baked',
      craving: 'caramel',
      servings: 6,
      ing: [
        { p: 'faina-migdale', g: 70 },
        { p: 'faina-ovaz', g: 35 },
        { p: 'unt', g: 22 },
        { id: 'd-oua-gaina-l', g: 30 },
        { p: 'curmale', g: 90 },
        { p: 'unt-arahide', g: 50 },
        { id: 's-soy-protein-isolate', g: 45 },
        { id: 'd-branza-vaci-proteica-milbona', g: 250 },
        { p: 'miere', g: 15 },
        { p: 'ciocolata-neagra', g: 20 },
        { id: 'v-arahide-crude', g: 15 },
        { p: 'apa', g: 50, free: true },
        { p: 'sare', g: 2, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 50, active: 25, chill: 180 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['formă de tartă 20 cm', 'blender mic', 'mixer', 'cuptor'],
      steps: [
        'Freacă făina de migdale, făina de ovăz, untul rece, oul, 5 g de miere și sarea până se leagă un aluat. Presează-l în formă, pe fund și pe pereți, și înțeapă-l cu furculița.',
        'Coace blatul gol 14 minute la 175 °C, până e auriu la margine. Lasă-l să se răcească 10 minute.',
        'Blenduiește curmalele înmuiate cu untul de arahide, apa, un vârf de sare și 25 g din izolatul de soia, până obții un caramel gros și lucios.',
        'Întinde caramelul peste blatul cald și mai dă tarta 8 minute la 160 °C: caramelul se prinde și nu mai curge la tăiere.',
        'Cât se răcește, bate brânza de vaci cu restul de 20 g izolat de soia, 10 g de miere și vanilia, până devine o cremă groasă care se ține pe tel. Las-o 5 minute: soia continuă să tragă apă și crema se îngroașă.',
        'Întinde crema peste tarta complet rece, presară ciocolata neagră rasă și arahidele tocate.',
        'Frigider 3 ore. Tăiată mai devreme, crema curge peste caramel.'
      ],
      tips: [
        'Soia apare de două ori: în caramel absoarbe apa curmalelor și îl împiedică să curgă la tăiere, iar în cremă o îngroașă la rece. Gustul de nucă al curmalelor și al arahidelor acoperă complet gustul de soia. Dacă crema rămâne totuși moale, 3 g de gelatină dizolvată o fixează.',
        'Blatul se coace gol, înainte. Un aluat cu făină de migdale nu are gluten și nu se contractă, dar are multă grăsime, iar dacă torni umplutura peste un blat crud obții un fund îmbibat.',
        'Cele 90 g de curmale aduc ~10 g de zahăr pe porție, iar mierea încă ~2 g. E o alegere conștientă: caramelul e reacția Maillard plus zahăr caramelizat, iar fără zahăr real n-ai nici aromă de caramel, nici culoare — ai doar dulce.',
        'La ~315 kcal pe porție e cel mai caloric desert din setul de copt, din cauza făinii de migdale și a untului de arahide. Rămâne sub 350, dar e o felie serioasă, nu o gustare.'
      ],
      swaps: [
        { label: 'Fără blat copt', text: 'Presează aluatul necopt, dă-i 20 de minute la congelator și tratează tarta ca pe una „no-bake". Pierzi crocanța, câștigi 15 minute.' },
        { label: 'Fără arahide', text: 'Unt de migdale în caramel și migdale tocate deasupra. Caramelul iese mai fin și mai puțin sărat.' }
      ],
      warnings: [
        'Conține soia, lactate, ou, arahide și migdale.',
        'Curmalele și mierea aduc ~12 g de zahăr pe porție — nu e un desert „fără zahăr", e unul cu zahăr din fruct și puțină miere.'
      ],
      taste: { sweetness: 72, richness: 80, texture: 82, authenticity: 80 },
      vs: { name: 'Tartă cu caramel și arahide, de cofetărie', grams: 110, kcal: 430, protein: 6, carbs: 44, sugars: 32, fat: 25 },
      vsSource: 'Valori tipice pentru tartă cu caramel și arahide de cofetărie, felie 110 g, 2026',
      sweetener: { kind: 'curmale', gPerServing: 15 },
      storage: 'Frigider, 3 zile, acoperită. Nu se congelează — crema de brânză de vaci se separă.',
      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 3, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 12 */
    {
      id: 'ds-granola-bar-copt',
      name: 'Baton de granola copt',
      emoji: '🌾',
      family: 'baked',
      craving: 'crocant',
      servings: 8,
      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 120 },
        { id: 'v-migdale', g: 50 },
        { p: 'seminte-dovleac', g: 30 },
        { id: 's-soy-protein-isolate', g: 60 },
        { p: 'unt-arahide', g: 60 },
        { p: 'miere', g: 40 },
        { id: 'd-albus-lichid', g: 140 },
        { p: 'cocos-fulgi', g: 20 },
        { p: 'sare', g: 2, free: true },
        { p: 'scortisoara', g: 3, free: true }
      ],
      time: { total: 43, active: 15, chill: 120 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['tavă 20×20 cm', 'hârtie de copt', 'bol mare', 'cuptor'],
      steps: [
        'Încinge cuptorul la 160 °C. Toacă grosier migdalele — bucățile mari sunt cele care se simt crocante.',
        'Amestecă uscatele: ovăz, migdale, semințe de dovleac, fulgi de cocos, izolatul de soia, sare și scorțișoară.',
        'Încălzește untul de arahide cu mierea 30 de secunde la microunde, ca să curgă, și toarnă-le peste uscate.',
        'Adaugă albușul lichid și amestecă până fiecare fulg e umed. Compoziția trebuie să stea grămadă când o strângi în pumn.',
        'Presează-o TARE în tava tapetată — un strat de 1,5 cm, îndesat cu fundul unui pahar. Compactarea, nu rețeta, decide dacă batoanele se sfărâmă.',
        'Coace 25-28 de minute la 160 °C, până marginile sunt bine rumenite iar centrul e ferm la apăsare.',
        'Răcește complet în tavă, apoi 30 de minute la frigider înainte de tăiat. Două ore în total, dar taie curat.'
      ],
      tips: [
        'La un baton vrei crocant, iar soia, coaptă lent la 160 °C, se întărește odată cu albușul și leagă fulgii. Nu trece de 60 g: peste atât, batonul trece de la „crocant" la „ca piatra" și gustul de soia începe să se simtă prin scorțișoară.',
        '160 °C și 28 de minute, nu 180 °C și 18: la temperatură joasă apa iese lent și batonul se usucă uniform. La 180 °C mierea de la suprafață se arde înainte ca interiorul să se închege.',
        'Albușul lichid, 140 g, e liantul care înlocuiește siropul de glucoză din batoanele comerciale. Coagulează în jurul fulgilor și îi ține — de aceea batonul ăsta rezistă în rucsac, spre deosebire de variantele no-bake cu unt de cocos, care se topesc.',
        'Cele 40 g de miere (~4 g de zahăr pe porție) sunt și dulceața, și lipiciul: se caramelizează la cuptor și cimentează fulgii alături de albuș. Fără ea, batonul rămâne o grămadă de fulgi.'
      ],
      swaps: [
        { label: 'Cu fructe uscate', text: 'Adaugă 40 g vișine sau afine deshidratate după coacere, presate în batonul cald. În compoziție se ard.' },
        { label: 'Fără miere', text: '50 g curmale blenduite cu 20 g apă. Leagă la fel de bine, aduc mai multă fibră, dar batonul iese mai moale.' }
      ],
      warnings: [
        'Conține soia, ou, arahide, migdale și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 52, richness: 62, texture: 84, authenticity: 82 },
      vs: { name: 'Baton de granola din comerț', grams: 40, kcal: 180, protein: 3, carbs: 25, sugars: 12, fat: 7 },
      vsSource: 'Valori tipice de etichetă pentru baton de granola ambalat, bucată 40 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Cutie ermetică, o săptămână la temperatura camerei. Nu în pungă — se înmoaie de la propria umezeală.',
      mealFit: { desert: 3, gustare: 5, micDejun: 5, postAntrenament: 5, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 13 */
    {
      id: 'ds-gogosi-air-fryer-quark',
      name: 'Gogoși cu scorțișoară, la air fryer',
      emoji: '🍩',
      family: 'baked',
      craving: 'patiserie',
      servings: 4,
      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 200 },
        { p: 'faina-ovaz', g: 100 },
        { id: 's-soy-protein-isolate', g: 30 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'miere', g: 15 },
        { p: 'zahar', g: 12 },
        { p: 'unt', g: 10 },
        { p: 'praf-copt', g: 6, free: true },
        { p: 'scortisoara', g: 4, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 24, active: 12, chill: 0 },
      effort: 2,
      difficulty: 'usor',
      equipment: ['bol', 'air fryer', 'hârtie de copt', 'pensulă'],
      steps: [
        'Amestecă brânza de vaci cu oul, vanilia, mierea și un vârf de sare.',
        'Adaugă făina de ovăz, izolatul de soia și praful de copt. Frământă 1-2 minute în bol și lasă-l 5 minute: soia trage din umezeala brânzei. Dacă s-a făcut prea tare ca să-l rulezi, o lingură de lapte.',
        'Împarte în 8 bucăți, rulează fiecare într-un cârnăcior de 12 cm și unește capetele; sau fă bile turtite dacă nu ai răbdare cu inelul.',
        'Unge-le cu untul topit — fără el, aerul air fryerului le usucă suprafața în crustă mată.',
        'Air fryer 165 °C, 11-13 minute, întoarse la minutul 6 — mierea din aluat le rumenește repede. Sunt gata când sună a gol la bătaie și sunt aurii pe ambele fețe.',
        'Cât sunt fierbinți, tăvălește-le prin zahărul (12 g) amestecat cu scorțișoara.'
      ],
      tips: [
        'Gogoașa reală e prăjită și dospită cu drojdie. Asta nu e nici una, nici alta — e un aluat de brânză de vaci cu praf de copt, care în air fryer dă cea mai apropiată textură posibilă fără baie de ulei. Fii onest cu tine: seamănă ~70%, nu 100%.',
        'Cele 12 g de zahăr din tăvălit se lipesc de gogoașa fierbinte și se topesc parțial în crustă — 3 g pe porție, pentru gustul de gogoașă de bâlci. Cu mierea din aluat, o porție are ~7 g de zahăr adăugat, față de ~18 g la două gogoși de patiserie.',
        'Soia e la 30 g din ~190 g masă uscată, adică sub o cincime, iar aluatul are 200 g de brânză de vaci lângă el. Cu dublul de pudră și fără brânză, ai un aluat dens care în air fryer se usucă la exterior în 8 minute. Scorțișoara din tăvălit acoperă gustul de soia.',
        'Air fryer, nu cuptor, și nu din lene: 8 gogoși mici într-un cuptor de 40 de litri se usucă la exterior înainte să se coacă la interior. Volumul mic al air fryerului le ține umede.'
      ],
      swaps: [
        { label: 'Cu umplutură', text: 'Fă bile, coace-le, apoi injectează cu o seringă de patiserie 10 g de gem fără zahăr adăugat în fiecare. Adaugă ~13 kcal și 2,5 g zahăr pe porție.' },
        { label: 'Fără tăvălit', text: 'Doar scorțișoară, presărată pe untul topit. Pierzi crusta dulce și 3 g de zahăr pe porție.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 60, richness: 54, texture: 76, authenticity: 66 },
      vs: { name: 'Gogoși cu zahăr, de patiserie (2 bucăți)', grams: 100, kcal: 400, protein: 6, carbs: 48, sugars: 18, fat: 20 },
      vsSource: 'Valori tipice pentru gogoși prăjite cu zahăr, 2 bucăți / ~100 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 3.75 },
      storage: 'Se mănâncă în aceeași zi, ideal calde. A doua zi: 3 minute la 170 °C în air fryer, altfel sunt tari.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 3, seara: 2 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 14 */
    {
      id: 'ds-budinca-orez-coapta',
      name: 'Budincă de orez coaptă, cu vanilie și scorțișoară',
      emoji: '🍮',
      family: 'baked',
      craving: 'cremos',
      servings: 3,
      ing: [
        { id: 's-rice-pudding-milbona-protein', g: 400 },
        { id: 'd-oua-gaina-l', g: 110 },
        { id: 'd-albus-lichid', g: 120 },
        { id: 'd-lapte-15', g: 80 },
        { p: 'miere', g: 9 },
        { p: 'lamaie', g: 8 },
        { p: 'scortisoara', g: 2, free: true },
        { p: 'vanilie', g: 3, free: true },
        { p: 'sare', g: 1, free: true }
      ],
      time: { total: 52, active: 7, chill: 25 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'tel', 'vas ceramic 1 l', 'tavă mai mare pentru baie de apă', 'cuptor'],
      steps: [
        'Încinge cuptorul la 160 °C și pune un ibric de apă la fiert pentru baia de apă.',
        'Bate ouăle cu albușul lichid, laptele, mierea, coaja de lămâie, vanilia și sarea, până e complet omogen și fără spumă.',
        'Amestecă ușor, cu telul, orezul cu lapte proteic în compoziția de ouă — nu-l zdrobi, boabele întregi sunt textura desertului.',
        'Toarnă în vasul ceramic, presară scorțișoară deasupra și așază vasul într-o tavă mai mare; toarnă apă fiartă în tavă până la jumătatea vasului.',
        'Coace 40-45 de minute la 160 °C. E gata când marginile sunt prinse și centrul tremură ca o piftie la o zgâlțâială ușoară.',
        'Lasă 25 de minute afară din cuptor. Se mănâncă și caldă, și rece a doua zi.'
      ],
      tips: [
        'Singura rețetă din setul ăsta fără niciun gram de pudră de proteină — și tot are peste 20 g pe porție. Orezul cu lapte proteic (Lidl) plus ouă plus albuș fac toată treaba. Merită reținut: la budincile coapte, pudra nu aduce nimic ce ouăle nu aduc deja, în schimb aduce riscul de textură granuloasă.',
        'Baia de apă nu e fițe de cofetar. Compoziția e practic o cremă de ouă; peste 85 °C în masă, oul se brânzește și budinca lasă apă. Apa din tavă îi ține temperatura sub prag oricât ai ține-o în cuptor.',
        '160 °C și 45 de minute, niciodată 180 °C și 25. Repede și tare înseamnă crustă de omletă deasupra și lichid dedesubt.',
        'Cele 9 g de miere pe toată rețeta (3 g pe porție) sunt puține intenționat: orezul cu lapte proteic e deja îndulcit din fabrică. Gustă compoziția crudă înainte să torni — dacă e destul de dulce, sari peste miere.'
      ],
      swaps: [
        { label: 'Cu vișine', text: 'Presară 100 g vișine congelate peste compoziție înainte de coacere. Adaugă ~17 kcal pe porție și taie foarte bine dulceața.' },
        { label: 'Fără baie de apă', text: 'Coace la 150 °C, 55-60 de minute, în vasul pus direct pe grătar. Merge, dar marginile ies mai ferme.' }
      ],
      warnings: [
        'Conține lactate și ou.'
      ],
      taste: { sweetness: 58, richness: 62, texture: 84, authenticity: 86 },
      vs: { name: 'Orez cu lapte / budincă de orez coaptă, clasică', grams: 200, kcal: 260, protein: 6, carbs: 40, sugars: 24, fat: 8 },
      vsSource: 'Valori tipice de etichetă pentru orez cu lapte ambalat, porție 200 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 3 },
      storage: 'Frigider, 3 zile, acoperită. Rece se întărește ușor; o lingură de lapte amestecată înainte o readuce cremoasă.',
      mealFit: { desert: 5, gustare: 4, micDejun: 5, postAntrenament: 3, seara: 5 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 15 */
    {
      id: 'ds-coltunasi-copti-branza-visine',
      name: 'Colțunași copți cu brânză și vișine, air fryer',
      emoji: '🥟',
      family: 'baked',
      craving: 'patiserie',
      servings: 4,
      ing: [
        { id: 'd-branza-vaci-proteica-milbona', g: 330 },
        { p: 'faina-ovaz', g: 110 },
        { id: 's-soy-protein-isolate', g: 22 },
        { id: 'd-oua-gaina-l', g: 55 },
        { p: 'miere', g: 15 },
        { p: 'amidon-porumb', g: 8 },
        { p: 'visine-congelate', g: 80 },
        { p: 'lamaie', g: 6 },
        { p: 'praf-copt', g: 5, free: true },
        { p: 'vanilie', g: 3, free: true },
        { p: 'sare', g: 1, free: true }
      ],
      time: { total: 34, active: 20, chill: 10 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['bol', 'sucitor', 'air fryer', 'hârtie de copt', 'pensulă'],
      steps: [
        'Aluat: frământă 150 g din brânza de vaci cu făina de ovăz, izolatul de soia, praful de copt, sarea și 3 g de miere, până se leagă o bilă. Lasă-l 10 minute acoperit — făina de ovăz și soia au nevoie de timp să absoarbă.',
        'Umplutură: amestecă restul de 180 g brânză cu 30 g din ou, amidonul, restul de miere, coaja și zeama de lămâie și vanilia. Amidonul e obligatoriu: fără el, brânza lasă apă și sparge colțunașii.',
        'Întinde aluatul între două foi de hârtie de copt, la 3 mm, și taie 8 cercuri de ~9 cm.',
        'Pune în fiecare o linguriță de umplutură și 2-3 vișine încă congelate, apoi lipește marginile apăsând cu furculița.',
        'Unge-i cu restul de ou bătut — gălbenușul le dă culoarea; mierea din aluat e prea puțină ca s-o facă singură.',
        'Air fryer 180 °C, 12-14 minute, fără să-i întorci. Sunt gata când marginile sunt aurii și baza e fermă.',
        'Lasă-i 10 minute: umplutura fierbinte e lichidă și te arzi, iar la răcire se leagă.'
      ],
      tips: [
        'Colțunașul clasic se fierbe sau se prăjește; ambele variante adaugă apă sau ulei. La air fryer câștigi textura de plăcintă, dar pierzi moliciunea — de asta aluatul are 150 g de brânză de vaci în el, ca să nu iasă o coajă de biscuit.',
        'Soia e doar 22 g din ~170 g masă uscată (13%), cea mai mică proporție din set. Într-un aluat întins subțire și expus la aer fierbinte, pudra se usucă prima; peste ~20% obții colțunași care crapă la îndoit.',
        'Vișinele se pun congelate, nu decongelate. Decongelate lasă suc care înmoaie aluatul din interior și colțunașii se deschid în air fryer.',
        'Dacă aluatul se lipește, nu adăuga făină de ovăz — adaugă 5 minute la frigider. Soia continuă să absoarbă la rece, iar mai multă făină îi usucă definitiv.'
      ],
      swaps: [
        { label: 'Cu mere', text: '120 g mere rase, stoarse bine, cu scorțișoară, în loc de vișine. Umplutura devine mai dulce și mai puțin acră.' },
        { label: 'La cuptor', text: '190 °C, 18-20 de minute, pe hârtie de copt. Se rumenesc mai uniform, dar durează mai mult.' }
      ],
      warnings: [
        'Conține soia, lactate, ou și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 54, richness: 56, texture: 74, authenticity: 72 },
      vs: { name: 'Colțunași cu brânză, prăjiți (2 bucăți)', grams: 120, kcal: 380, protein: 11, carbs: 44, sugars: 12, fat: 17 },
      vsSource: 'Valori tipice pentru colțunași cu brânză dulce prăjiți, 2 bucăți / ~120 g, 2026',
      sweetener: { kind: 'miere', gPerServing: 3.75 },
      storage: 'Frigider, 2 zile. Reîncălziți 4 minute la 170 °C în air fryer redevin aproape ca proaspeți; la microunde devin cauciucați.',
      mealFit: { desert: 5, gustare: 4, micDejun: 4, postAntrenament: 3, seara: 3 },
      dataConfidence: 'medium'
    },

    /* ----------------------------------------------------------------- 16 */
    {
      id: 'ds-biscuiti-proteici-scortisoara',
      name: 'Biscuiți proteici cu scorțișoară',
      emoji: '🍘',
      family: 'baked',
      craving: 'crocant',
      servings: 5,
      ing: [
        { p: 'faina-migdale', g: 80 },
        { p: 'faina-ovaz', g: 60 },
        { id: 's-soy-protein-isolate', g: 40 },
        { id: 'd-albus-lichid', g: 90 },
        { p: 'unt', g: 25 },
        { p: 'zahar', g: 25 },
        { p: 'seminte-dovleac', g: 20 },
        { p: 'scortisoara', g: 4, free: true },
        { p: 'sare', g: 1, free: true },
        { p: 'vanilie', g: 3, free: true }
      ],
      time: { total: 37, active: 10, chill: 20 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'sucitor', 'tavă de cuptor', 'hârtie de copt', 'cuptor'],
      steps: [
        'Încinge cuptorul la 150 °C. Da, 150 — biscuitul nu se coace, se usucă.',
        'Amestecă făina de migdale, făina de ovăz, izolatul de soia, zahărul, scorțișoara și sarea.',
        'Adaugă untul topit, albușul lichid și vanilia; frământă scurt până se leagă un aluat dens. Încorporează semințele de dovleac tocate grosier.',
        'Întinde aluatul între două foi de hârtie de copt, la 4 mm grosime, și taie pătrate de ~4 cm. Grosimea uniformă contează mai mult decât forma: 1 mm în plus înseamnă 4 minute în plus.',
        'Coace 22-25 de minute la 150 °C, până marginile sunt bej-auriu.',
        'Oprește cuptorul și lasă-i înăuntru încă 10 minute, cu ușa întredeschisă. Ies din cuptor moi și se întăresc pe măsură ce pierd aburul.',
        'Răcește-i complet pe grătar înainte de a-i pune în cutie, altfel se aburesc între ei.'
      ],
      tips: [
        'La un biscuit vrei uscat, deci aici soia lucrează pentru tine: se întărește cu albușul și, uscată lent la 150 °C, dă crănțănitul. Ține-o la 40 g — mai mult face biscuitul tare și cu gust de soia, nu crocant.',
        '150 °C, nu 180 °C. Peste 160 °C, proteina de la suprafață se strânge și formează o crustă care închide aburul înăuntru; biscuitul rămâne moale la mijloc și nu se mai usucă niciodată, oricât l-ai ține.',
        'Făina de migdale, 80 g, e cea mai mare pondere din masa uscată și e acolo pentru grăsime. Un biscuit din făină de ovăz plus pudră, fără grăsime, e uscat în sensul rău: se sfărâmă în praf, nu se rupe cu zgomot.',
        'Zahăr, nu miere: zahărul se usucă în biscuit și îl face casant; mierea trage umezeală din aer și biscuitul se înmoaie a doua zi. 25 g la 5 porții = 5 g de zahăr adăugat pe porție, cam jumătate cât într-un petit beurre.',
        'Testează crocanța abia după ce s-au răcit complet. Un biscuit proteic cald pare mereu insuficient copt, iar dacă îl mai bagi 5 minute „pentru siguranță", a doua zi e imposibil de mușcat.'
      ],
      swaps: [
        { label: 'Cu cacao', text: 'Înlocuiește 15 g din făina de ovăz cu 15 g cacao și scoate scorțișoara. Culoarea e mai frumoasă și aroma acoperă mai bine gustul de pudră.' },
        { label: 'Fără migdale', text: '80 g făină de ovăz în plus și 20 g unt în plus. Mai ieftin, dar biscuiții ies mai tari și mai puțin friabili.' }
      ],
      warnings: [
        'Conține soia, lactate (unt), ou, migdale și ovăz (posibile urme de gluten).'
      ],
      taste: { sweetness: 50, richness: 48, texture: 82, authenticity: 80 },
      vs: { name: 'Biscuiți cu unt (tip petit beurre)', grams: 40, kcal: 190, protein: 2.5, carbs: 27, sugars: 10, fat: 8 },
      vsSource: 'Valori tipice de etichetă pentru biscuiți cu unt ambalați, porție 40 g, 2026',
      sweetener: { kind: 'zahar', gPerServing: 5 },
      storage: 'Cutie ermetică, 10 zile. Dacă se înmoaie, 5 minute la 150 °C îi readuc complet.',
      mealFit: { desert: 3, gustare: 5, micDejun: 3, postAntrenament: 2, seara: 3 },
      dataConfidence: 'medium'
    }

  ];

  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
