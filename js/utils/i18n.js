/* =========================================================================
 * PROTEIN ATLAS SIBIU — I18N
 * Romanian is the primary language (the shelves are Romanian).
 * English is a full second locale for every UI string.
 *
 * Two ways to reach the dictionary:
 *   - PF.i18n.t('key') / PF.i18n.tf('key', params) from JavaScript;
 *   - data-i18n / data-i18n-html / data-i18n-attr attributes on static
 *     markup, resolved by PF.i18n.applyDom(). The full contract is
 *     documented above applyDom() further down this file.
 * Product data (names, descriptions, sources) is deliberately Romanian only.
 *
 * Attaches to window.PF.i18n
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});

  const DICT = {
    ro: {
      /* --- shell ---------------------------------------------------- */
      'app.title': 'Atlasul Proteinelor',
      'app.heroLead':
        'O bază de date cu alimente bogate în proteine găsibile în Lidl, Kaufland, ' +
        'Carrefour, Profi, Penny, Auchan, Selgros, Metro și în Piața Cibin. ' +
        'Fiecare produs are macro-urile complete, efortul de gătit, gustul, prețul ' +
        'pe gram de proteină și momentul din zi în care merită mâncat.',

      /* --- hero eyebrow + KPI strip ---------------------------------- */
      /* {n} produse, {c} categorii, {s} magazine — see PF.i18n.tf() */
      'hero.eyebrow': 'Sibiu · {n} produse · {c} categorii · {s} magazine',
      'kpi.protein': 'max proteină/100g',
      'kpi.ready': 'gata de mâncat',
      'kpi.value': 'lei/100g proteină min',
      'kpi.stores': 'magazine',
      'kpi.tier': 'produse rang S+A',

      'search.placeholder': 'Caută: piept de pui, skyr, ton, linte…',
      'search.clear': 'Șterge căutarea',

      /* --- accessible names for the static chrome in index.html ------ */
      'a11y.skip': 'Sari la conținut',
      'a11y.brand': 'Atlasul Proteinelor Sibiu',
      'a11y.search': 'Caută în atlas',
      'a11y.viewSwitch': 'Vizualizare',
      'a11y.shortcuts': 'Scurtături (?)',

      /* --- nav / views ---------------------------------------------- */
      'view.grid': 'Carduri',
      'view.table': 'Tabel',
      'view.boards': 'Clasamente',
      'view.compare': 'Comparație',
      'view.chart': 'Hartă',
      'view.recipes': 'Rețete',
      'view.shop': 'Listă',

      /* --- filters --------------------------------------------------- */
      'filter.title': 'Filtre',
      'filter.reset': 'Resetează tot',
      'filter.category': 'Categorie',
      'filter.store': 'Magazin',
      'filter.diet': 'Dietă',
      'filter.timing': 'Moment al zilei',
      'filter.tags': 'Etichete',
      'filter.nutrition': 'Nutriție',
      'filter.effort': 'Efort & timp',
      'filter.price': 'Preț',
      'filter.minProtein': 'Proteină minimă / 100 g',
      'filter.minPurity': '% minim din calorii din proteină',
      'filter.maxKcal': 'Calorii maxime / 100 g',
      'filter.maxCarbs': 'Carbohidrați maximi / 100 g',
      'filter.maxFat': 'Grăsimi maxime / 100 g',
      'filter.maxTime': 'Timp maxim de preparare',
      'filter.maxEffort': 'Efort maxim',
      'filter.maxCost': 'Cost maxim / 100 g proteină',
      'filter.readyOnly': 'Doar gata de mâncat',
      'filter.favOnly': 'Doar favorite',
      'filter.pricedOnly': 'Doar cu preț cunoscut',
      'filter.hideOnline': 'Ascunde produsele doar-online',
      'filter.tier': 'Rang',

      /* --- sorting ---------------------------------------------------- */
      'sort.label': 'Sortează',
      'sort.score': 'Scor general',
      'sort.protein': 'Proteină / 100 g',
      'sort.purity': '% calorii din proteină',
      'sort.proteinServing': 'Proteină / porție',
      'sort.value': 'Cel mai ieftin protein',
      'sort.kcal': 'Cele mai puține calorii',
      'sort.time': 'Cel mai rapid',
      'sort.taste': 'Cel mai bun gust',
      'sort.satiety': 'Cea mai mare sațietate',
      'sort.name': 'Alfabetic',
      'sort.flip': 'Inversează ordinea',

      /* --- card ------------------------------------------------------- */
      'card.per100': 'la 100 g',
      'card.per100ml': 'la 100 ml',
      'card.perServing': 'porție',
      'card.protein': 'Proteină',
      'card.carbs': 'Carbo',
      'card.fat': 'Grăsimi',
      'card.kcal': 'kcal',
      'card.fiber': 'Fibre',
      'card.salt': 'Sare',
      'card.sugars': 'Zaharuri',
      'card.details': 'Detalii',
      'card.add': 'Adaugă',
      'card.fav': 'Favorit',
      'card.compare': 'Compară',
      'card.ready': 'Gata de mâncat',
      'card.cheapest': 'Preț bun',
      'card.local': 'Local Sibiu',

      /* --- stat bars --------------------------------------------------- */
      'stat.protein': 'Proteină',
      'stat.purity': 'Puritate',
      'stat.value': 'Preț',
      'stat.speed': 'Viteză',
      'stat.taste': 'Gust',
      'stat.satiety': 'Sațietate',
      'stat.convenience': 'Comoditate',
      'stat.versatility': 'Versatilitate',
      'stat.leanness': 'Slăbiciune',

      'stat.protein.tip': 'Câte grame de proteină are la 100 g. Bara e plină la 30 g.',
      'stat.purity.tip':
        'Ce procent din calorii vine din proteină. 80% e practic maximul real (albuș, izolat de zer).',
      'stat.value.tip': 'Cât costă 100 g de proteină pură din acest produs, la cel mai bun preț găsit.',
      'stat.speed.tip': 'Cât de repede ajunge în tine. Bara e plină la 0 minute.',
      'stat.taste.tip': 'Cât de plăcut e de mâncat simplu, fără să-l „salvezi” cu sosuri.',
      'stat.satiety.tip': 'Cât de mult îți taie foamea raportat la calorii.',
      'stat.convenience.tip': 'Cât de ușor e de găsit, de transportat și de mâncat oriunde.',
      'stat.versatility.tip': 'În câte feluri de mâncare diferite îl poți băga.',
      'stat.leanness.tip': 'Procentul de calorii care NU vine din grăsime.',

      /* --- timing ------------------------------------------------------ */
      'timing.breakfast': 'Mic dejun',
      'timing.preWorkout': 'Pre-antren.',
      'timing.postWorkout': 'Post-antren.',
      'timing.lunch': 'Prânz',
      'timing.snack': 'Gustare',
      'timing.dinner': 'Cină',
      'timing.beforeBed': 'Înainte de culcare',

      /* --- effort ------------------------------------------------------- */
      'effort.0': 'Zero efort',
      'effort.1': 'Aproape nimic',
      'effort.2': 'O tigaie',
      'effort.3': 'Gătit real',
      'effort.4': 'Mai multe etape',
      'effort.5': 'Proiect',

      /* --- modal tabs ---------------------------------------------------- */
      'tab.overview': 'Prezentare',
      'tab.nutrition': 'Nutriție',
      'tab.cooking': 'Preparare',
      'tab.taste': 'Gust',
      'tab.buy': 'Unde cumperi',
      'tab.timing': 'Când mănânci',

      /* --- modal sections -------------------------------------------------- */
      'sec.stats': 'Statistici',
      'sec.energy': 'Distribuția caloriilor',
      'sec.steps': 'Cum îl faci',
      'sec.equipment': 'De ce ai nevoie',
      'sec.tips': 'Sfaturi',
      'sec.warnings': 'Atenție',
      'sec.pairings': 'Merge bine cu',
      'sec.storage': 'Păstrare',
      'sec.stores': 'Prețuri și disponibilitate',
      'sec.similar': 'Produse similare',
      'sec.upgrade': 'Alternativă mai bună',
      'sec.tasteProfile': 'Profil de gust',
      'sec.micros': 'Micronutrienți',

      /* --- tray ------------------------------------------------------------- */
      'tray.title': 'Masa mea',
      'tray.empty': 'Adaugă produse ca să vezi totalurile.',
      'tray.clear': 'Golește',
      'tray.export': 'Exportă',
      'tray.print': 'Tipărește',
      'tray.target': 'Ținta zilnică',
      'tray.remaining': 'Rămas',
      'tray.over': 'Depășit',
      'tray.cost': 'Cost',

      /* --- calculator --------------------------------------------------------- */
      'calc.title': 'De câtă proteină ai nevoie',
      'calc.weight': 'Greutate (kg)',
      'calc.goal': 'Obiectiv',
      'calc.goal.sedentary': 'Sedentar',
      'calc.goal.active': 'Activ / sport recreativ',
      'calc.goal.muscle': 'Creștere musculară',
      'calc.goal.cutting': 'Definire / deficit caloric',
      'calc.goal.senior': 'Peste 65 de ani',
      'calc.perDay': 'g de proteină pe zi',
      'calc.perMeal': 'pe masă (4 mese)',
      'calc.targetShort': 'țintă',

      /* --- oracle -------------------------------------------------------------- */
      'oracle.title': 'Ce mănânc acum?',
      'oracle.sub': 'Alege pentru mine, în funcție de oră și de filtrele active.',
      'oracle.btn': 'Alege pentru mine',
      'oracle.now': 'Acum e momentul pentru',

      /* --- boards ---------------------------------------------------------------- */
      /* Each board has three strings: title, unit (printed next to the title)
       * and desc (the paragraph under the header). */
      'board.protein': 'Cea mai multă proteină',
      'board.protein.unit': 'g / 100 g',
      'board.protein.desc':
        'Cea mai mare concentrație de proteină pe 100 g, indiferent de preț sau de efort. ' +
        'Colagenul și gelatina sunt excluse — au cifre mari, dar proteină inutilizabilă.',

      'board.purity': 'Cea mai pură proteină',
      'board.purity.unit': '% din kcal',
      'board.purity.desc':
        'Ce procent din calorii vine din proteină. Filtrat la minim 8 g/100 g, ' +
        'altfel salata verde ar câștiga cu 0,9 g de proteină. Colagenul e exclus: ' +
        'ajunge la 100%, dar fără triptofan nu contează.',

      'board.value': 'Cea mai ieftină proteină',
      'board.value.unit': 'lei / 100 g P',
      'board.value.desc':
        'Cât te costă 100 g de proteină pură. ATENȚIE: toate prețurile sunt ' +
        'estimări (±20–30%), nu prețuri de raft. Ordinea e aproape sigur corectă — ' +
        'diferența dintre linte și un baton proteic e de 20×, nu de 5%.',

      'board.serving': 'Cea mai multă proteină pe porție',
      'board.serving.unit': 'g / porție',
      'board.serving.desc': 'Proteina dintr-o porție realistă — nu din 100 g teoretice.',

      'board.instant': 'Zero efort, multă proteină',
      'board.instant.unit': 'g / 100 g',
      'board.instant.desc': 'Zero gătit, zero încălzit. Deschizi și mănânci.',

      'board.taste': 'Cel mai bun gust',
      'board.taste.unit': 'scor gust',
      'board.taste.desc':
        'Cele mai plăcute surse de proteină. Filtrate la minim 12 g/100 g, ' +
        'ca să nu câștige ciocolata.',

      'board.lean': 'Cele mai slabe (fără grăsime)',
      'board.lean.unit': '% kcal fără grăsime',
      'board.lean.desc': 'Cele mai slabe surse de proteină din atlas.',

      'board.lowkcal': 'Multă proteină, puține calorii',
      'board.lowkcal.unit': 'g P / 100 kcal',
      'board.lowkcal.desc':
        'Cea mai multă proteină pentru fiecare 100 de calorii. Regele deficitului caloric.',

      'board.satiety': 'Cea mai mare sațietate',
      'board.satiety.unit': 'scor sațietate',
      'board.satiety.desc': 'Ce îți taie foamea cel mai mult, raportat la calorii.',

      'board.local': 'Produse locale de Sibiu',
      'board.local.unit': 'g / 100 g',
      'board.local.desc':
        'Ce poți lua din Piața Cibin, de la măcelării și de la producătorii locali.',

      'board.histo': 'Distribuția proteinei',

      /* --- results -------------------------------------------------------------- */
      'res.showing': 'produse',
      'res.none': 'Niciun produs nu trece de filtre',
      'res.noneHelp': 'Relaxează un filtru — de obicei „proteină minimă” sau „cost maxim” e vinovatul.',
      'res.resetFilters': 'Resetează filtrele',
      'res.loadMore': 'Încarcă încă {n} produse',
      'res.remaining': '({n} rămase)',

      /* --- misc ----------------------------------------------------------------- */
      'misc.confidence': 'Încredere în date',
      'misc.confidence.high': 'ridicată — citit de pe etichetă',
      'misc.confidence.medium': 'medie — valori tipice pentru tipul de produs',
      'misc.confidence.low': 'scăzută — estimare',
      'misc.close': 'Închide',
      'misc.prev': 'Anterior',
      'misc.next': 'Următor',
      'misc.theme': 'Temă',
      'misc.language': 'Limbă',
      'misc.help': 'Ajutor',
      'misc.shortcuts': 'Scurtături',
      'misc.dataTable': 'Vezi ca tabel',
      'misc.dataChart': 'Vezi ca grafic',
      'misc.copied': 'Copiat în clipboard',
      'misc.added': 'Adăugat la masă',
      'misc.removed': 'Șters',
      'misc.total': 'Total',
      'misc.availability': 'Disponibilitate',
      'misc.price': 'Preț',
      'misc.perKg': '/kg',
      'misc.per100gProtein': '/100 g proteină',
      'misc.aisle': 'Unde îl găsești',
      'misc.products': 'produse',
      'misc.categories': 'categorii',
      'misc.stores': 'magazine',
      /* Currency symbol. format.js still hard-codes "lei"; see the note there. */
      'misc.currency': 'lei',

      /* --- footer (static markup in index.html) ---------------------------------- */
      'foot.what': 'Ce este asta',
      'foot.what1':
        'O bază de date cu alimente bogate în proteine pe care le poți cumpăra ' +
        'efectiv în Sibiu.',
      'foot.what2':
        'Fiecare produs are macro-uri complete, preț pe gram de proteină, efort ' +
        'de gătit, gust și momentul potrivit din zi.',
      'foot.what3': 'Funcționează complet offline. Nu trimite nimic nicăieri.',

      'foot.bars': 'Cum se citesc barele',
      'foot.bars1': '<b>Proteină</b> — grame la 100 g. Bara e plină la 30 g.',
      'foot.bars2': '<b>Puritate</b> — ce procent din calorii vine din proteină.',
      'foot.bars3': '<b>Preț</b> — cât costă 100 g de proteină pură.',
      'foot.bars4': '<b>Gust, sațietate, comoditate</b> — evaluări subiective, asumate.',

      'foot.docs': 'Documentație',
      'foot.docsMethod': 'Metodologie și scoruri',
      'foot.docsSchema': 'Schema datelor',
      'foot.docsGuide': 'Ghid de proteină',
      'foot.docsStores': 'Magazinele din Sibiu',

      'foot.warn': 'Avertismente',
      'foot.warn1':
        '<b>Prețurile sunt estimări neverificate.</b> Niciunul nu a fost citit ' +
        'dintr-un magazin și nu există un API public de prețuri pentru retailul ' +
        'alimentar din România. Sunt afișate cu „≈” și au o marjă de ±20–30%. ' +
        'Folosește-le ca să compari produse între ele, nu ca preț de raft.',
      'foot.warn2':
        'Valorile nutriționale variază între loturi și producători. Eticheta din ' +
        'mână bate întotdeauna baza de date.',
      'foot.warn3':
        'Nu este sfat medical. Dacă ai probleme renale, hepatice sau o afecțiune ' +
        'metabolică, întreabă un medic înainte să-ți crești aportul de proteină.',

      'foot.legal':
        'Atlasul Proteinelor Sibiu · date colectate în august 2026 · toate mărcile ' +
        'aparțin proprietarilor lor. Proiect personal, fără afiliere cu niciun ' +
        'retailer. Datele tale (favorite, masa curentă, comparația) rămân în ' +
        'browserul tău.'
    },

    en: {
      'app.title': 'Protein Atlas',
      'app.heroLead':
        'A database of high-protein foods you can actually find in Lidl, Kaufland, ' +
        'Carrefour, Profi, Penny, Auchan, Selgros, Metro and the Cibin market. ' +
        'Every product carries full macros, cooking effort, taste, cost per gram of ' +
        'protein and the time of day it makes sense to eat it.',

      'hero.eyebrow': 'Sibiu · {n} products · {c} categories · {s} stores',
      'kpi.protein': 'max protein/100g',
      'kpi.ready': 'ready to eat',
      'kpi.value': 'cheapest 100g of protein',
      'kpi.stores': 'stores',
      'kpi.tier': 'S+A tier products',

      'search.placeholder': 'Search: chicken breast, skyr, tuna, lentils…',
      'search.clear': 'Clear search',

      'a11y.skip': 'Skip to content',
      'a11y.brand': 'Protein Atlas Sibiu',
      'a11y.search': 'Search the atlas',
      'a11y.viewSwitch': 'View',
      'a11y.shortcuts': 'Shortcuts (?)',

      'view.grid': 'Cards',
      'view.table': 'Table',
      'view.boards': 'Leaderboards',
      'view.compare': 'Compare',
      'view.chart': 'Map',
      'view.recipes': 'Recipes',
      'view.shop': 'List',

      'filter.title': 'Filters',
      'filter.reset': 'Reset all',
      'filter.category': 'Category',
      'filter.store': 'Store',
      'filter.diet': 'Diet',
      'filter.timing': 'Time of day',
      'filter.tags': 'Tags',
      'filter.nutrition': 'Nutrition',
      'filter.effort': 'Effort & time',
      'filter.price': 'Price',
      'filter.minProtein': 'Min protein / 100 g',
      'filter.minPurity': 'Min % of calories from protein',
      'filter.maxKcal': 'Max calories / 100 g',
      'filter.maxCarbs': 'Max carbs / 100 g',
      'filter.maxFat': 'Max fat / 100 g',
      'filter.maxTime': 'Max prep time',
      'filter.maxEffort': 'Max effort',
      'filter.maxCost': 'Max cost / 100 g protein',
      'filter.readyOnly': 'Ready to eat only',
      'filter.favOnly': 'Favourites only',
      'filter.pricedOnly': 'Only items with a known price',
      'filter.hideOnline': 'Hide online-only items',
      'filter.tier': 'Tier',

      'sort.label': 'Sort',
      'sort.score': 'Overall score',
      'sort.protein': 'Protein / 100 g',
      'sort.purity': '% calories from protein',
      'sort.proteinServing': 'Protein / serving',
      'sort.value': 'Cheapest protein',
      'sort.kcal': 'Fewest calories',
      'sort.time': 'Fastest',
      'sort.taste': 'Best tasting',
      'sort.satiety': 'Most filling',
      'sort.name': 'Alphabetical',
      'sort.flip': 'Reverse the order',

      'card.per100': 'per 100 g',
      'card.per100ml': 'per 100 ml',
      'card.perServing': 'serving',
      'card.protein': 'Protein',
      'card.carbs': 'Carbs',
      'card.fat': 'Fat',
      'card.kcal': 'kcal',
      'card.fiber': 'Fibre',
      'card.salt': 'Salt',
      'card.sugars': 'Sugars',
      'card.details': 'Details',
      'card.add': 'Add',
      'card.fav': 'Favourite',
      'card.compare': 'Compare',
      'card.ready': 'Ready to eat',
      'card.cheapest': 'Good value',
      'card.local': 'Sibiu local',

      'stat.protein': 'Protein',
      'stat.purity': 'Purity',
      'stat.value': 'Value',
      'stat.speed': 'Speed',
      'stat.taste': 'Taste',
      'stat.satiety': 'Satiety',
      'stat.convenience': 'Convenience',
      'stat.versatility': 'Versatility',
      'stat.leanness': 'Leanness',

      'stat.protein.tip': 'Grams of protein per 100 g. The bar fills at 30 g.',
      'stat.purity.tip':
        'Share of calories coming from protein. 80% is the practical real-world ceiling (egg white, whey isolate).',
      'stat.value.tip': 'What 100 g of pure protein costs from this product at the best price found.',
      'stat.speed.tip': 'How fast it reaches you. The bar fills at 0 minutes.',
      'stat.taste.tip': 'How pleasant it is to eat plain, with no sauce rescuing it.',
      'stat.satiety.tip': 'How much it kills hunger relative to its calories.',
      'stat.convenience.tip': 'How easy it is to find, carry and eat anywhere.',
      'stat.versatility.tip': 'How many different meals it slots into.',
      'stat.leanness.tip': 'Share of calories that does NOT come from fat.',

      'timing.breakfast': 'Breakfast',
      'timing.preWorkout': 'Pre-workout',
      'timing.postWorkout': 'Post-workout',
      'timing.lunch': 'Lunch',
      'timing.snack': 'Snack',
      'timing.dinner': 'Dinner',
      'timing.beforeBed': 'Before bed',

      'effort.0': 'Zero effort',
      'effort.1': 'Almost nothing',
      'effort.2': 'One pan',
      'effort.3': 'Real cooking',
      'effort.4': 'Several stages',
      'effort.5': 'A project',

      'tab.overview': 'Overview',
      'tab.nutrition': 'Nutrition',
      'tab.cooking': 'Cooking',
      'tab.taste': 'Taste',
      'tab.buy': 'Where to buy',
      'tab.timing': 'When to eat',

      'sec.stats': 'Stats',
      'sec.energy': 'Calorie split',
      'sec.steps': 'How to make it',
      'sec.equipment': 'What you need',
      'sec.tips': 'Tips',
      'sec.warnings': 'Watch out',
      'sec.pairings': 'Goes well with',
      'sec.storage': 'Storage',
      'sec.stores': 'Prices & availability',
      'sec.similar': 'Similar products',
      'sec.upgrade': 'A better alternative',
      'sec.tasteProfile': 'Taste profile',
      'sec.micros': 'Micronutrients',

      'tray.title': 'My meal',
      'tray.empty': 'Add products to see the totals.',
      'tray.clear': 'Clear',
      'tray.export': 'Export',
      'tray.print': 'Print',
      'tray.target': 'Daily target',
      'tray.remaining': 'Remaining',
      'tray.over': 'Over',
      'tray.cost': 'Cost',

      'calc.title': 'How much protein you need',
      'calc.weight': 'Bodyweight (kg)',
      'calc.goal': 'Goal',
      'calc.goal.sedentary': 'Sedentary',
      'calc.goal.active': 'Active / recreational sport',
      'calc.goal.muscle': 'Muscle gain',
      'calc.goal.cutting': 'Cutting / calorie deficit',
      'calc.goal.senior': 'Over 65',
      'calc.perDay': 'g of protein per day',
      'calc.perMeal': 'per meal (4 meals)',
      'calc.targetShort': 'target',

      'oracle.title': 'What do I eat right now?',
      'oracle.sub': 'Pick for me, based on the time of day and the active filters.',
      'oracle.btn': 'Pick for me',
      'oracle.now': 'Right now is the moment for',

      'board.protein': 'Most protein',
      'board.protein.unit': 'g / 100 g',
      'board.protein.desc':
        'The densest protein per 100 g, whatever it costs and however long it takes ' +
        'to make. Collagen and gelatin are excluded — big numbers on the label, ' +
        'protein your muscles cannot use.',

      'board.purity': 'Purest protein',
      'board.purity.unit': '% of kcal',
      'board.purity.desc':
        'How much of the calories come from protein. Filtered at 8 g/100 g minimum, ' +
        'or lettuce would win the board with 0.9 g of protein. Collagen is excluded: ' +
        'it hits 100%, but with no tryptophan the number is meaningless.',

      'board.value': 'Cheapest protein',
      'board.value.unit': 'RON / 100 g P',
      'board.value.desc':
        'What 100 g of pure protein costs you. HEADS UP: every price here is an ' +
        'estimate (±20–30%), not a shelf price. The ordering is almost certainly ' +
        'right — lentils and a protein bar are 20× apart, not 5%.',

      'board.serving': 'Most protein per serving',
      'board.serving.unit': 'g / serving',
      'board.serving.desc': 'Protein in a portion you would actually eat — not in a theoretical 100 g.',

      'board.instant': 'Zero effort, lots of protein',
      'board.instant.unit': 'g / 100 g',
      'board.instant.desc': 'No cooking, no reheating. Open it and eat.',

      'board.taste': 'Best tasting',
      'board.taste.unit': 'taste score',
      'board.taste.desc':
        'The protein sources that are genuinely nice to eat. Filtered at 12 g/100 g ' +
        'minimum, so chocolate does not walk away with it.',

      'board.lean': 'Leanest',
      'board.lean.unit': '% non-fat kcal',
      'board.lean.desc': 'The leanest protein sources in the atlas.',

      'board.lowkcal': 'High protein, low calorie',
      'board.lowkcal.unit': 'g P / 100 kcal',
      'board.lowkcal.desc':
        'The most protein for every 100 calories. King of the calorie deficit.',

      'board.satiety': 'Most filling',
      'board.satiety.unit': 'satiety score',
      'board.satiety.desc': 'What kills hunger hardest for the calories it costs you.',

      'board.local': 'Sibiu local products',
      'board.local.unit': 'g / 100 g',
      'board.local.desc':
        'What you can pick up at the Cibin market, from local butchers and local producers.',

      'board.histo': 'Protein distribution',

      'res.showing': 'products',
      'res.none': 'No product passes the filters',
      'res.noneHelp': 'Relax a filter — usually "min protein" or "max cost" is the culprit.',
      'res.resetFilters': 'Reset filters',
      'res.loadMore': 'Load {n} more products',
      'res.remaining': '({n} left)',

      'misc.confidence': 'Data confidence',
      'misc.confidence.high': 'high — read off the label',
      'misc.confidence.medium': 'medium — typical values for the product type',
      'misc.confidence.low': 'low — estimate',
      'misc.close': 'Close',
      'misc.prev': 'Previous',
      'misc.next': 'Next',
      'misc.theme': 'Theme',
      'misc.language': 'Language',
      'misc.help': 'Help',
      'misc.shortcuts': 'Shortcuts',
      'misc.dataTable': 'View as table',
      'misc.dataChart': 'View as chart',
      'misc.copied': 'Copied to clipboard',
      'misc.added': 'Added to the meal',
      'misc.removed': 'Removed',
      'misc.total': 'Total',
      'misc.availability': 'Availability',
      'misc.price': 'Price',
      'misc.perKg': '/kg',
      'misc.per100gProtein': '/100 g protein',
      'misc.aisle': 'Where to find it',
      'misc.products': 'products',
      'misc.categories': 'categories',
      'misc.stores': 'stores',
      'misc.currency': 'RON',

      'foot.what': 'What this is',
      'foot.what1':
        'A database of high-protein foods you can actually walk into a shop in ' +
        'Sibiu and buy.',
      'foot.what2':
        'Every product carries full macros, cost per gram of protein, cooking ' +
        'effort, taste and the time of day it fits.',
      'foot.what3': 'Runs entirely offline. Nothing is sent anywhere.',

      'foot.bars': 'How to read the bars',
      'foot.bars1': '<b>Protein</b> — grams per 100 g. The bar fills at 30 g.',
      'foot.bars2': '<b>Purity</b> — how much of the calories come from protein.',
      'foot.bars3': '<b>Value</b> — what 100 g of pure protein costs.',
      'foot.bars4': '<b>Taste, satiety, convenience</b> — subjective calls, openly so.',

      'foot.docs': 'Documentation',
      'foot.docsMethod': 'Methodology & scores',
      'foot.docsSchema': 'Data schema',
      'foot.docsGuide': 'Protein guide',
      'foot.docsStores': 'The shops in Sibiu',

      'foot.warn': 'Caveats',
      'foot.warn1':
        '<b>Prices are unverified estimates.</b> Not one was read off a shelf, and ' +
        'Romanian food retail has no public price API. They are shown with “≈” and ' +
        'carry a ±20–30% margin. Use them to compare products against each other, ' +
        'not as shelf prices.',
      'foot.warn2':
        'Nutrition values vary between batches and manufacturers. The label in your ' +
        'hand always beats the database.',
      'foot.warn3':
        'This is not medical advice. If you have kidney or liver trouble or a ' +
        'metabolic condition, talk to a doctor before pushing your protein intake up.',

      'foot.legal':
        'Protein Atlas Sibiu · data collected in August 2026 · all trademarks belong ' +
        'to their owners. A personal project, unaffiliated with any retailer. Your ' +
        'data (favourites, current meal, comparison) stays in your browser.'
    }
  };

  let LANG = 'ro';

  function t(key, fallback) {
    const table = DICT[LANG] || DICT.ro;
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (Object.prototype.hasOwnProperty.call(DICT.ro, key)) return DICT.ro[key];
    return fallback !== undefined ? fallback : key;
  }

  /** True when the key exists in the active locale or in the Romanian base. */
  function has(key) {
    const table = DICT[LANG] || DICT.ro;
    return (
      Object.prototype.hasOwnProperty.call(table, key) ||
      Object.prototype.hasOwnProperty.call(DICT.ro, key)
    );
  }

  /**
   * Translate a string that carries {placeholders}:
   *     tf('hero.eyebrow', { n: 505, c: 8, s: 18 })
   *     -> "Sibiu · 505 produse · 8 categorii · 18 magazine"
   * A placeholder with no matching parameter is left as-is, so a wiring
   * mistake shows up as "{n}" in the UI instead of a silent "undefined".
   */
  function tf(key, params) {
    const s = t(key);
    if (!params) return s;
    return s.replace(/\{(\w+)\}/g, function (whole, name) {
      return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : whole;
    });
  }

  /* =========================================================================
   * DECLARATIVE DOM TRANSLATION — the data-i18n contract
   *
   * Static markup (index.html) cannot call t(). Instead it declares which
   * dictionary key each node carries, and applyDom() writes the active
   * language into it. Three attributes, all optional, all combinable on the
   * same element:
   *
   *   data-i18n="key"
   *       Replaces the element's textContent.
   *       <a class="pf-skip-link" href="#pf-main" data-i18n="a11y.skip">Sari la conținut</a>
   *
   *   data-i18n-html="key"
   *       Replaces the element's innerHTML. Use it only when the translation
   *       itself contains markup (the footer <li> items wrap a word in <b>).
   *       The value comes from the dictionary in this file and from nowhere
   *       else — never point it at user or product data.
   *       <li data-i18n-html="foot.bars1"><b>Proteină</b> — grame la 100 g.</li>
   *
   *   data-i18n-attr="attr:key;attr2:key2"
   *       Sets one or more attributes. Pairs are separated by ";", the
   *       attribute name and the key by the first ":". Whitespace around the
   *       parts is ignored.
   *       <button data-i18n-attr="aria-label:misc.help;title:a11y.shortcuts">?</button>
   *       <input id="pf-search" data-i18n-attr="placeholder:search.placeholder;aria-label:a11y.search">
   *
   * Rules:
   *   - Write the Romanian text into the markup as usual. It is the fallback
   *     that shows before the first applyDom() pass and in any browser where
   *     scripting is off, and it keeps the file readable.
   *   - An unknown key leaves the node untouched, so a typo degrades to the
   *     Romanian already in the markup rather than printing "foo.bar".
   *   - applyDom() runs automatically at the end of setLang(), which app.js
   *     already calls on boot and on every RO/EN toggle. Marking up index.html
   *     is therefore the only thing needed — no extra wiring.
   *   - Call it yourself only after injecting new *static* markup:
   *     PF.i18n.applyDom(myNewlyInsertedElement). Components that build their
   *     HTML in JS should keep calling t() directly instead.
   *   - root defaults to document, and the root element itself is translated
   *     if it carries the attributes.
   *
   * Returns the number of nodes/attributes it wrote, which is handy in tests.
   * ====================================================================== */
  function applyDom(root) {
    const scope = root || (typeof document !== 'undefined' ? document : null);
    if (!scope || typeof scope.querySelectorAll !== 'function') return 0;
    let written = 0;

    function each(selector, fn) {
      if (typeof scope.matches === 'function' && scope.matches(selector)) fn(scope);
      const found = scope.querySelectorAll(selector);
      for (let i = 0; i < found.length; i++) fn(found[i]);
    }

    each('[data-i18n]', function (el) {
      const key = el.getAttribute('data-i18n');
      if (!key || !has(key)) return;
      el.textContent = t(key);
      written++;
    });

    each('[data-i18n-html]', function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (!key || !has(key)) return;
      el.innerHTML = t(key);
      written++;
    });

    each('[data-i18n-attr]', function (el) {
      (el.getAttribute('data-i18n-attr') || '').split(';').forEach(function (pair) {
        const cut = pair.indexOf(':');
        if (cut < 1) return;
        const attr = pair.slice(0, cut).trim();
        const key = pair.slice(cut + 1).trim();
        if (!attr || !key || !has(key)) return;
        el.setAttribute(attr, t(key));
        written++;
      });
    });

    return written;
  }

  function setLang(l) {
    LANG = DICT[l] ? l : 'ro';
    if (PF.fmt) PF.fmt.setLocale(LANG);
    try {
      document.documentElement.setAttribute('lang', LANG);
      /* Re-translate the static markup. Keeps index.html in sync with the
       * toggle without app.js having to know which nodes exist. */
      applyDom(document);
    } catch (e) {
      /* ignore */
    }
    return LANG;
  }

  function lang() {
    return LANG;
  }

  /** Category display names — data-driven, so they live here too. */
  const CATEGORIES = {
    'dairy-eggs': { ro: 'Lactate & ouă', en: 'Dairy & eggs', emoji: '🥛' },
    'fresh-meat': { ro: 'Carne proaspătă', en: 'Fresh meat', emoji: '🥩' },
    'deli-processed': { ro: 'Mezeluri & conserve', en: 'Deli & canned', emoji: '🥓' },
    'fish-seafood': { ro: 'Pește & fructe de mare', en: 'Fish & seafood', emoji: '🐟' },
    'plant-protein': { ro: 'Proteine vegetale', en: 'Plant protein', emoji: '🌱' },
    'supplements-snacks': { ro: 'Suplimente & snackuri', en: 'Supplements & snacks', emoji: '💪' },
    'ready-meals': { ro: 'Mâncare gata', en: 'Ready meals', emoji: '🍱' },
    'bakery-drinks-sweets': { ro: 'Panificație, băuturi & dulciuri', en: 'Bakery, drinks & sweets', emoji: '🍞' }
  };

  function catName(slug) {
    const c = CATEGORIES[slug];
    if (!c) return PF.fmt ? PF.fmt.titleize(slug) : slug;
    return c[LANG] || c.ro;
  }

  function catEmoji(slug) {
    const c = CATEGORIES[slug];
    return c ? c.emoji : '🍽️';
  }

  /** Diet labels. */
  const DIETS = {
    vegan: { ro: 'Vegan', en: 'Vegan', emoji: '🌿' },
    vegetarian: { ro: 'Vegetarian', en: 'Vegetarian', emoji: '🥗' },
    glutenFree: { ro: 'Fără gluten', en: 'Gluten free', emoji: '🌾' },
    lactoseFree: { ro: 'Fără lactoză', en: 'Lactose free', emoji: '🥛' },
    keto: { ro: 'Keto', en: 'Keto', emoji: '🥑' },
    halal: { ro: 'Halal', en: 'Halal', emoji: '☪️' },
    porkFree: { ro: 'Fără porc', en: 'Pork free', emoji: '🚫' }
  };

  function dietName(key) {
    const d = DIETS[key];
    return d ? d[LANG] || d.ro : key;
  }

  /** Timing slot metadata: icon + the hours it covers. */
  const SLOTS = [
    { key: 'breakfast', emoji: '🌅', hours: [6, 7, 8, 9, 10] },
    { key: 'preWorkout', emoji: '⚡', hours: [16, 17] },
    { key: 'postWorkout', emoji: '🏋️', hours: [18, 19] },
    { key: 'lunch', emoji: '🍽️', hours: [12, 13, 14] },
    { key: 'snack', emoji: '🍎', hours: [11, 15, 16] },
    { key: 'dinner', emoji: '🌆', hours: [19, 20, 21] },
    { key: 'beforeBed', emoji: '🌙', hours: [22, 23, 0] }
  ];

  function slotName(key) {
    return t('timing.' + key, key);
  }

  function slotForHour(h) {
    if (h >= 5 && h < 11) return 'breakfast';
    if (h >= 11 && h < 12) return 'snack';
    if (h >= 12 && h < 15) return 'lunch';
    if (h >= 15 && h < 18) return 'snack';
    if (h >= 18 && h < 21) return 'dinner';
    if (h >= 21 && h < 24) return 'beforeBed';
    return 'snack';
  }

  /** Tag display names — Romanian labels for the controlled tag list. */
  const TAGS = {
    'ready-to-eat': 'Gata de mâncat',
    'grab-and-go': 'Iei și pleci',
    microwave: 'La microunde',
    'no-cook': 'Fără gătit',
    'meal-prep': 'Meal prep',
    portable: 'Portabil',
    'shelf-stable': 'Se ține la raft',
    frozen: 'Congelat',
    'batch-cook': 'Gătit în cantitate',
    'high-protein': 'Bogat în proteine',
    'very-high-protein': 'Foarte bogat în proteine',
    'protein-dense': 'Proteină densă',
    'low-fat': 'Slab în grăsimi',
    'low-carb': 'Puțini carbohidrați',
    'high-fiber': 'Bogat în fibre',
    'low-kcal': 'Puține calorii',
    'high-kcal': 'Multe calorii',
    omega3: 'Omega-3',
    'iron-rich': 'Bogat în fier',
    'calcium-rich': 'Bogat în calciu',
    b12: 'Vitamina B12',
    'complete-protein': 'Proteină completă',
    'slow-digesting': 'Digestie lentă',
    'fast-digesting': 'Digestie rapidă',
    'high-sodium': 'Multă sare',
    processed: 'Procesat',
    'whole-food': 'Aliment integral',
    budget: 'Ieftin',
    'cheap-protein': 'Proteină ieftină',
    'mid-price': 'Preț mediu',
    premium: 'Premium',
    'bulk-buy': 'Cumperi în vrac',
    breakfast: 'Mic dejun',
    'post-workout': 'Post-antrenament',
    'pre-workout': 'Pre-antrenament',
    'night-snack': 'Gustare de seară',
    'office-lunch': 'Prânz la birou',
    bulking: 'Masă musculară',
    cutting: 'Definire',
    'kid-friendly': 'Bun pentru copii',
    hangover: 'Mahmureală',
    summer: 'Vară',
    winter: 'Iarnă',
    'romanian-classic': 'Clasic românesc',
    'local-sibiu': 'Local Sibiu',
    imported: 'Import'
  };

  function tagName(slug) {
    if (LANG === 'en') return PF.fmt ? PF.fmt.titleize(slug) : slug;
    return TAGS[slug] || (PF.fmt ? PF.fmt.titleize(slug) : slug);
  }

  PF.i18n = {
    t: t,
    tf: tf,
    has: has,
    applyDom: applyDom,
    setLang: setLang,
    lang: lang,
    catName: catName,
    catEmoji: catEmoji,
    CATEGORIES: CATEGORIES,
    dietName: dietName,
    DIETS: DIETS,
    slotName: slotName,
    slotForHour: slotForHour,
    SLOTS: SLOTS,
    tagName: tagName,
    TAGS: TAGS
  };
})();
