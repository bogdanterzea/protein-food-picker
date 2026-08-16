/* =========================================================================
 * PROTEIN ATLAS SIBIU — STORE REGISTRY
 * File: js/data/00-stores.js
 *
 * Metadata about every retailer referenced by the food database.
 * The `name` field here must match `stores[].name` inside food entries
 * exactly (see docs/DATA-SCHEMA.md, section 3).
 *
 * NOTE ON ADDRESSES: chains open and close locations constantly. This file
 * deliberately describes the *character* of each retailer in Sibiu rather
 * than pinning exact street addresses that would rot within months. Use the
 * chain's own store locator for current addresses.
 * ========================================================================= */
(function () {
  'use strict';

  const STORES = [
    {
      name: 'Lidl',
      slug: 'lidl',
      color: '#0050aa',
      accent: '#ffd200',
      emoji: '🟦',
      kind: 'discounter',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Mai multe magazine în Sibiu și în Șelimbăr. Cel mai bun raport ' +
        'calitate/preț pentru lactate proteice (gama Pilos / Milbona), ' +
        'ton Nixe și gama vegană Vemondo.',
      strengths: [
        'Iaurturi și brânzeturi proteice la preț mic',
        'Conserve de pește (Nixe) foarte ieftine',
        'Gama Vemondo (tofu, paste din leguminoase, unt de arahide)',
        'Oferte săptămânale pe carne proaspătă',
        'Reduceri 30–50% pe produse aproape de expirare, seara'
      ],
      weaknesses: [
        'Sortiment fix și îngust — dacă un produs dispare, dispare de tot',
        'Fără raion cald / rotiserie în toate magazinele',
        'Cozile de sâmbătă sunt un sport de contact'
      ],
      bestFor: ['dairy-eggs', 'fish-seafood', 'plant-protein'],
      priceIndex: 88,
      hoursTypical: '07:00–22:00',
      openSunday: true,
      loyalty: 'Lidl Plus (cupoane digitale, merită instalat)',
      onlineOrder: false
    },
    {
      name: 'Kaufland',
      slug: 'kaufland',
      color: '#e10915',
      accent: '#ffffff',
      emoji: '🟥',
      kind: 'hypermarket',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Hipermarketuri mari în Sibiu și zona Șelimbăr. Cel mai complet ' +
        'raion de carne proaspătă și pește la tejghea din oraș, plus ' +
        'rotiserie și bistro cald.',
      strengths: [
        'Raion de carne la tejghea, tai cum vrei',
        'Tejghea de pește proaspăt (rar în Sibiu)',
        'Pui la rotisor — proteină gata gătită la preț bun',
        'Gama K-Classic ieftină și K-Purland pentru carne',
        'Reduceri mari joia și pe carnea din ultima zi'
      ],
      weaknesses: [
        'Magazin uriaș — pierzi 40 de minute dacă nu ai listă',
        'Prețurile la mezeluri premium sunt mari',
        'Raionul cald se golește după ora 19'
      ],
      bestFor: ['fresh-meat', 'fish-seafood', 'deli-processed', 'ready-meals'],
      priceIndex: 95,
      hoursTypical: '07:00–22:00',
      openSunday: true,
      loyalty: 'Cardul Kaufland (oferte personalizate în aplicație)',
      onlineOrder: false
    },
    {
      name: 'Carrefour',
      slug: 'carrefour',
      color: '#004e9f',
      accent: '#e30613',
      emoji: '🔵',
      kind: 'hypermarket',
      sibiuPresence: 'yes',
      sibiuNote:
        'Hipermarketul din Shopping City Sibiu (Șelimbăr). Sortiment larg ' +
        'de import, brânzeturi maturate, produse bio și raion cald.',
      strengths: [
        'Cel mai larg sortiment de brânzeturi și produse de import',
        'Gama Carrefour Classic / Bio la preț decent',
        'Raion cald și rotiserie',
        'Livrare online în Sibiu (util pentru cumpărături grele)'
      ],
      weaknesses: [
        'Prețuri peste Lidl/Kaufland la bazice',
        'E în mall — parcare aglomerată în weekend'
      ],
      bestFor: ['dairy-eggs', 'deli-processed', 'ready-meals', 'supplements-snacks'],
      priceIndex: 104,
      hoursTypical: '08:00–22:00',
      openSunday: true,
      loyalty: 'Card Carrefour + aplicație (cupoane)',
      onlineOrder: true
    },
    {
      name: 'Carrefour Market',
      slug: 'carrefour-market',
      color: '#004e9f',
      accent: '#00a3e0',
      emoji: '🔷',
      kind: 'supermarket',
      sibiuPresence: 'yes',
      sibiuNote:
        'Format mic, în oraș. Bun pentru completări rapide, nu pentru ' +
        'cumpărături mari de proteină.',
      strengths: ['Aproape de casă', 'Sortiment decent de lactate și mezeluri'],
      weaknesses: ['Preț mai mare decât hipermarketul', 'Sortiment redus de carne'],
      bestFor: ['dairy-eggs', 'deli-processed'],
      priceIndex: 110,
      hoursTypical: '07:00–22:00',
      openSunday: true,
      loyalty: 'Card Carrefour',
      onlineOrder: false
    },
    {
      name: 'Profi',
      slug: 'profi',
      color: '#e30613',
      accent: '#f7a600',
      emoji: '🅿️',
      kind: 'proximity',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Foarte multe locații mici în Sibiu, inclusiv în cartiere. ' +
        'Salvarea când ai nevoie de ouă sau iaurt la 21:30.',
      strengths: ['Peste tot', 'Program lung', 'Oferte bune la mezeluri românești'],
      weaknesses: [
        'Sortiment mic de proteină de calitate',
        'Prețuri mai mari la carne proaspătă',
        'Rar au gamă proteică specializată'
      ],
      bestFor: ['dairy-eggs', 'deli-processed'],
      priceIndex: 108,
      hoursTypical: '06:30–23:00',
      openSunday: true,
      loyalty: 'Profi Card',
      onlineOrder: false
    },
    {
      name: 'Penny',
      slug: 'penny',
      color: '#d51130',
      accent: '#ffe500',
      emoji: '🔴',
      kind: 'discounter',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Discounter cu accent pe produse românești. Bun la carne de pui ' +
        'la promoție și la mezeluri autohtone.',
      strengths: [
        'Promoții agresive la piept de pui',
        'Multe produse românești (Cris-Tim, Elit, Covalact)',
        'Pui la rotisor în unele locații'
      ],
      weaknesses: ['Sortiment proteic specializat aproape inexistent', 'Lactate proteice limitate'],
      bestFor: ['fresh-meat', 'deli-processed'],
      priceIndex: 92,
      hoursTypical: '07:00–22:00',
      openSunday: true,
      loyalty: 'Aplicația Penny',
      onlineOrder: false
    },
    {
      name: 'Mega Image',
      slug: 'mega-image',
      color: '#003da5',
      accent: '#e4002b',
      emoji: '🦁',
      kind: 'supermarket',
      sibiuPresence: 'yes',
      sibiuNote:
        'Prezență mai slabă în Sibiu decât în București, dar există. ' +
        'Sortiment bun de lactate premium și produse de import.',
      strengths: ['Lactate premium', 'Gama Gusturi Românești', 'Produse de import'],
      weaknesses: ['Scump la bazice', 'Carne proaspătă limitată'],
      bestFor: ['dairy-eggs', 'bakery-drinks-sweets'],
      priceIndex: 115,
      hoursTypical: '07:00–23:00',
      openSunday: true,
      loyalty: 'Card Mega / Shop&Go',
      onlineOrder: true
    },
    {
      name: 'Auchan',
      slug: 'auchan',
      color: '#e2001a',
      accent: '#00a0e3',
      emoji: '🐦',
      kind: 'hypermarket',
      sibiuPresence: 'yes',
      sibiuNote:
        'Hipermarket cu raion de carne și pește bun și cu gamă largă de ' +
        'produse proteice specializate pe raftul de nutriție sportivă.',
      strengths: [
        'Raion cald și rotiserie',
        'Sortiment mare de brânzeturi',
        'Raft dedicat de produse proteice / sport'
      ],
      weaknesses: ['Prețuri medii-mari', 'Aglomerat în weekend'],
      bestFor: ['fresh-meat', 'deli-processed', 'supplements-snacks', 'ready-meals'],
      priceIndex: 102,
      hoursTypical: '08:00–22:00',
      openSunday: true,
      loyalty: 'Card Auchan',
      onlineOrder: true
    },
    {
      name: 'Selgros',
      slug: 'selgros',
      color: '#e2001a',
      accent: '#004b93',
      emoji: '📦',
      kind: 'cash-and-carry',
      sibiuPresence: 'yes',
      sibiuNote:
        'Cash & carry. AICI cumperi proteină în vrac: cutii de 5–10 kg de ' +
        'piept de pui, bax de conserve de ton, roți de cașcaval. Prețul pe ' +
        'kilogram bate orice supermarket dacă ai congelator.',
      strengths: [
        'Cel mai mic preț pe kilogram la carne, în volum',
        'Baxuri de conserve — protein per RON imbatabil',
        'Calitate profesională la carne și pește',
        'Accesibil și persoanelor fizice'
      ],
      weaknesses: [
        'Cantități mari — ai nevoie de congelator',
        'Nu are sens pentru o persoană fără planificare',
        'Program mai scurt'
      ],
      bestFor: ['fresh-meat', 'fish-seafood', 'deli-processed'],
      priceIndex: 78,
      hoursTypical: '06:00–22:00',
      openSunday: true,
      loyalty: 'Card Selgros (gratuit)',
      onlineOrder: true
    },
    {
      name: 'Metro',
      slug: 'metro',
      color: '#003c78',
      accent: '#ffcc00',
      emoji: '🏗️',
      kind: 'cash-and-carry',
      sibiuPresence: 'yes',
      sibiuNote:
        'Al doilea cash & carry din Sibiu. Similar cu Selgros: vrac, ' +
        'calitate HoReCa, preț pe kilogram foarte bun.',
      strengths: [
        'Carne și pește de calitate HoReCa',
        'Vrac ieftin',
        'Brânzeturi mari (roți de parmezan, blocuri de mozzarella)'
      ],
      weaknesses: ['Necesită card', 'Cantități mari', 'Departe de centru'],
      bestFor: ['fresh-meat', 'fish-seafood', 'dairy-eggs'],
      priceIndex: 80,
      hoursTypical: '06:00–22:00',
      openSunday: true,
      loyalty: 'Card Metro',
      onlineOrder: true
    },
    {
      name: 'La Doi Pași',
      slug: 'la-doi-pasi',
      color: '#f39200',
      accent: '#e30613',
      emoji: '🏪',
      kind: 'proximity',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Magazine de cartier franșizate. Utile la ore imposibile, dar ' +
        'sortimentul proteic e minim.',
      strengths: ['Deschis târziu', 'În orice cartier'],
      weaknesses: ['Preț mare', 'Sortiment mic', 'Rar au lactate proteice'],
      bestFor: ['dairy-eggs'],
      priceIndex: 118,
      hoursTypical: '06:00–24:00',
      openSunday: true,
      loyalty: '—',
      onlineOrder: false
    },
    {
      name: 'Decathlon',
      slug: 'decathlon',
      color: '#0082c3',
      accent: '#ffffff',
      emoji: '🏃',
      kind: 'sports',
      sibiuPresence: 'yes',
      sibiuNote:
        'În Shopping City Sibiu. Raft de nutriție sportivă cu whey, batoane ' +
        'și shake-uri Aptonia — preț corect, calitate onestă, fără hype.',
      strengths: [
        'Whey Aptonia la preț rezonabil',
        'Poți vedea produsul fizic înainte să-l cumperi',
        'Retur simplu'
      ],
      weaknesses: ['Sortiment mic față de magazinele online', 'Doar branduri proprii'],
      bestFor: ['supplements-snacks'],
      priceIndex: 100,
      hoursTypical: '10:00–21:00',
      openSunday: true,
      loyalty: 'Card Decathlon',
      onlineOrder: true
    },
    {
      name: 'Farmacie',
      slug: 'farmacie',
      color: '#00a651',
      accent: '#ffffff',
      emoji: '💊',
      kind: 'pharmacy',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Catena, Sensiblu, Dona, Help Net — multe în Sibiu. Au proteine, ' +
        'colagen și shake-uri, dar de obicei la preț dublu față de online.',
      strengths: ['Disponibile peste tot', 'Consiliere farmacist'],
      weaknesses: [
        'Cel mai prost raport preț/proteină din tot atlasul',
        'Sortiment orientat spre suplimente medicale, nu spre sport'
      ],
      bestFor: ['supplements-snacks'],
      priceIndex: 140,
      hoursTypical: '08:00–21:00',
      openSunday: true,
      loyalty: 'Carduri de fidelitate proprii',
      onlineOrder: true
    },
    {
      name: 'Piața Cibin',
      slug: 'piata-cibin',
      color: '#7a5c2e',
      accent: '#c9a227',
      emoji: '🧺',
      kind: 'market',
      sibiuPresence: 'yes',
      sibiuNote:
        'Piața centrală a Sibiului. Ouă de țară, brânzeturi de la producători ' +
        'din Mărginimea Sibiului, telemea de oaie, carne de la măcelari, ' +
        'leguminoase uscate în vrac. Mergi dimineața devreme, sâmbăta.',
      strengths: [
        'Ouă de țară cu gălbenuș adevărat',
        'Brânzeturi de oaie locale, imposibil de găsit în supermarket',
        'Leguminoase uscate în vrac, foarte ieftine',
        'Poți negocia la volum'
      ],
      weaknesses: [
        'Fără etichetă nutrițională — valorile sunt estimative',
        'Calitate variabilă de la tarabă la tarabă',
        'Numerar, program de dimineață',
        'Igiena variază — evită lactatele nerefrigerate vara'
      ],
      bestFor: ['dairy-eggs', 'fresh-meat', 'plant-protein'],
      priceIndex: 90,
      hoursTypical: '06:00–15:00 (cel mai bine 07:00–10:00)',
      openSunday: false,
      loyalty: '—',
      onlineOrder: false
    },
    {
      name: 'Măcelărie locală',
      slug: 'macelarie',
      color: '#8b1a1a',
      accent: '#e5533d',
      emoji: '🔪',
      kind: 'butcher',
      sibiuPresence: 'multiple',
      sibiuNote:
        'Măcelării de cartier și din piețe. Poți cere tranșarea exact cum ' +
        'vrei, iar carnea e adesea mai proaspătă decât la raft.',
      strengths: [
        'Tranșare la cerere (piept fără piele, mușchiuleț curățat)',
        'Organe proaspete — ficat, inimă, rinichi, cel mai ieftin protein',
        'Sfaturi reale de gătit'
      ],
      weaknesses: ['Preț variabil', 'Fără etichetă nutrițională', 'Program scurt'],
      bestFor: ['fresh-meat'],
      priceIndex: 98,
      hoursTypical: '07:00–18:00',
      openSunday: false,
      loyalty: '—',
      onlineOrder: false
    },
    {
      name: 'Pescărie',
      slug: 'pescarie',
      color: '#0e7490',
      accent: '#67e8f9',
      emoji: '🐟',
      kind: 'fishmonger',
      sibiuPresence: 'limited',
      sibiuNote:
        'Sibiul e la 250 km de mare — pescăriile specializate sunt puține. ' +
        'Tejgheaua de pește de la Kaufland/Auchan/Selgros e adesea cea mai ' +
        'bună opțiune reală, plus păstrăvăriile din Mărginime.',
      strengths: ['Pește proaspăt real', 'Păstrăv local de crescătorie'],
      weaknesses: [
        'Puține locații în Sibiu',
        'Preț mare pentru pește marin',
        'Prospețimea variază — miroase înainte să cumperi'
      ],
      bestFor: ['fish-seafood'],
      priceIndex: 112,
      hoursTypical: '08:00–18:00',
      openSunday: false,
      loyalty: '—',
      onlineOrder: false
    },
    {
      name: 'Online RO',
      slug: 'online-ro',
      color: '#6d28d9',
      accent: '#c4b5fd',
      emoji: '📦',
      kind: 'online',
      sibiuPresence: 'delivery',
      sibiuNote:
        'eMAG, Ostrovit.ro, magazinele de suplimente românești, Myprotein. ' +
        'Livrare în Sibiu în 1–3 zile. Aici e cel mai mic preț pe gram de ' +
        'proteină pentru pudre și batoane — diferența față de farmacie e brutală.',
      strengths: [
        'Cel mai bun preț la pudre proteice și batoane',
        'Sortiment infinit',
        'Recenzii și liste de ingrediente complete înainte de cumpărare',
        'Reduceri mari la volum (pungi de 2–5 kg)'
      ],
      weaknesses: [
        'Aștepți livrarea — nu rezolvă foamea de acum',
        'Cost de transport la comenzi mici',
        'Risc de produse contrafăcute la vânzători terți'
      ],
      bestFor: ['supplements-snacks'],
      priceIndex: 72,
      hoursTypical: '24/7',
      openSunday: true,
      loyalty: 'eMAG Genius etc.',
      onlineOrder: true
    },
    {
      name: 'Restaurant Sibiu',
      slug: 'restaurant-sibiu',
      color: '#b45309',
      accent: '#fbbf24',
      emoji: '🍽️',
      kind: 'foodservice',
      sibiuPresence: 'yes',
      sibiuNote:
        'Lanțuri și localuri din Sibiu — food court-ul din Shopping City și ' +
        'Promenada, grill-uri, shaormerii, rotiserii. Valorile nutriționale ' +
        'sunt ESTIMĂRI; porțiile variază enorm de la local la local.',
      strengths: [
        'Zero efort, mănânci acum',
        'Câteva opțiuni chiar bune la proteină (grill bowls, rotiserie)'
      ],
      weaknesses: [
        'Cel mai scump gram de proteină din atlas',
        'Sare și grăsime necontrolate',
        'Valorile nutriționale sunt aproximative'
      ],
      bestFor: ['ready-meals'],
      priceIndex: 175,
      hoursTypical: '10:00–22:00',
      openSunday: true,
      loyalty: 'Variabil',
      onlineOrder: true
    }
  ];

  window.PF_STORES = STORES;
})();
