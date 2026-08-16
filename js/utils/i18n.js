/* =========================================================================
 * PROTEIN ATLAS SIBIU — I18N
 * Romanian is the primary language (the shelves are Romanian).
 * English is a full second locale for every UI string.
 * Attaches to window.PF.i18n
 * ========================================================================= */
(function () {
  'use strict';

  const PF = (window.PF = window.PF || {});

  const DICT = {
    ro: {
      /* --- shell ---------------------------------------------------- */
      'app.title': 'Atlasul Proteinelor',
      'app.subtitle': 'Sibiu',
      'app.tagline': 'Fiecare gram de proteină pe care îl poți cumpăra în Sibiu.',
      'app.heroLead':
        'O bază de date cu alimente bogate în proteine găsibile în Lidl, Kaufland, ' +
        'Carrefour, Profi, Penny, Auchan, Selgros, Metro și în Piața Cibin. ' +
        'Fiecare produs are macro-urile complete, efortul de gătit, gustul, prețul ' +
        'pe gram de proteină și momentul din zi în care merită mâncat.',
      'search.placeholder': 'Caută: piept de pui, skyr, ton, linte…',
      'search.clear': 'Șterge căutarea',

      /* --- nav / views ---------------------------------------------- */
      'view.grid': 'Carduri',
      'view.table': 'Tabel',
      'view.boards': 'Clasamente',
      'view.compare': 'Comparație',
      'view.chart': 'Hartă',
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
      'sec.macros': 'Macronutrienți',
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
      'sec.sources': 'Surse',
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
      'calc.range': 'interval rezonabil',

      /* --- oracle -------------------------------------------------------------- */
      'oracle.title': 'Ce mănânc acum?',
      'oracle.sub': 'Alege pentru mine, în funcție de oră și de filtrele active.',
      'oracle.btn': 'Alege pentru mine',
      'oracle.now': 'Acum e momentul pentru',

      /* --- boards ---------------------------------------------------------------- */
      'board.protein': 'Cea mai multă proteină',
      'board.purity': 'Cea mai pură proteină',
      'board.value': 'Cea mai ieftină proteină',
      'board.serving': 'Cea mai multă proteină pe porție',
      'board.instant': 'Zero efort, multă proteină',
      'board.taste': 'Cel mai bun gust',
      'board.lean': 'Cele mai slabe (fără grăsime)',
      'board.lowkcal': 'Multă proteină, puține calorii',
      'board.satiety': 'Cea mai mare sațietate',
      'board.local': 'Produse locale de Sibiu',

      /* --- results -------------------------------------------------------------- */
      'res.showing': 'produse',
      'res.of': 'din',
      'res.none': 'Niciun produs nu trece de filtre',
      'res.noneHelp': 'Relaxează un filtru — de obicei „proteină minimă” sau „cost maxim” e vinovatul.',
      'res.resetFilters': 'Resetează filtrele',

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
      'misc.per': 'pe',
      'misc.each': 'buc',
      'misc.total': 'Total',
      'misc.pack': 'ambalaj',
      'misc.availability': 'Disponibilitate',
      'misc.price': 'Preț',
      'misc.perKg': '/kg',
      'misc.per100gProtein': '/100 g proteină',
      'misc.aisle': 'Unde îl găsești'
    },

    en: {
      'app.title': 'Protein Atlas',
      'app.subtitle': 'Sibiu',
      'app.tagline': 'Every gram of protein you can buy in Sibiu.',
      'app.heroLead':
        'A database of high-protein foods you can actually find in Lidl, Kaufland, ' +
        'Carrefour, Profi, Penny, Auchan, Selgros, Metro and the Cibin market. ' +
        'Every product carries full macros, cooking effort, taste, cost per gram of ' +
        'protein and the time of day it makes sense to eat it.',
      'search.placeholder': 'Search: chicken breast, skyr, tuna, lentils…',
      'search.clear': 'Clear search',

      'view.grid': 'Cards',
      'view.table': 'Table',
      'view.boards': 'Leaderboards',
      'view.compare': 'Compare',
      'view.chart': 'Map',
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

      'sec.macros': 'Macronutrients',
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
      'sec.sources': 'Sources',
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
      'calc.range': 'reasonable range',

      'oracle.title': 'What do I eat right now?',
      'oracle.sub': 'Pick for me, based on the time of day and the active filters.',
      'oracle.btn': 'Pick for me',
      'oracle.now': 'Right now is the moment for',

      'board.protein': 'Most protein',
      'board.purity': 'Purest protein',
      'board.value': 'Cheapest protein',
      'board.serving': 'Most protein per serving',
      'board.instant': 'Zero effort, lots of protein',
      'board.taste': 'Best tasting',
      'board.lean': 'Leanest',
      'board.lowkcal': 'High protein, low calorie',
      'board.satiety': 'Most filling',
      'board.local': 'Sibiu local products',

      'res.showing': 'products',
      'res.of': 'of',
      'res.none': 'No product passes the filters',
      'res.noneHelp': 'Relax a filter — usually "min protein" or "max cost" is the culprit.',
      'res.resetFilters': 'Reset filters',

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
      'misc.per': 'per',
      'misc.each': 'ea',
      'misc.total': 'Total',
      'misc.pack': 'pack',
      'misc.availability': 'Availability',
      'misc.price': 'Price',
      'misc.perKg': '/kg',
      'misc.per100gProtein': '/100 g protein',
      'misc.aisle': 'Where to find it'
    }
  };

  let LANG = 'ro';

  function t(key, fallback) {
    const table = DICT[LANG] || DICT.ro;
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (Object.prototype.hasOwnProperty.call(DICT.ro, key)) return DICT.ro[key];
    return fallback !== undefined ? fallback : key;
  }

  function setLang(l) {
    LANG = DICT[l] ? l : 'ro';
    if (PF.fmt) PF.fmt.setLocale(LANG);
    try {
      document.documentElement.setAttribute('lang', LANG);
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
