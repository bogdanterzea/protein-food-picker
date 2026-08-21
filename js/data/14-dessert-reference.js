/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — REGISTRUL DESERTURILOR REALE
 * File: js/data/14-dessert-reference.js
 * Intrări: 40
 * ID prefix: ref-
 * Ultima documentare: 2026-08
 *
 * DE CE EXISTĂ FIȘIERUL ĂSTA
 * --------------------------
 * Secțiunea de deserturi proteice nu are sens fără termenul de comparație.
 * Un „brownie proteic" cu 240 kcal nu înseamnă nimic până nu știi că
 * amandina de la cofetărie are 400 și că un Snickers are 245. Uneori
 * comparația e în favoarea rețetei proteice, alteori nu — de exemplu un
 * baton de ciocolată de 50 g are mai puține calorii decât multe „prăjituri
 * fitness" de 150 g. Registrul ăsta e acolo ca să putem spune ambele lucruri
 * cu cifre, nu cu adjective.
 *
 * CE NU E fișierul ăsta: o listă de „alimente rele". Nu există aici niciun
 * cuvânt de tipul „bombă calorică", „otravă" sau „gol nutrițional", și nu
 * trebuie să apară. Un Snickers are 245 kcal și 25 g de zahăr. Atât spunem.
 * Cititorul decide singur ce face cu informația.
 *
 * CONVENȚII
 * ---------
 * • `per` este PE PORȚIA DECLARATĂ în `serving`, nu la 100 g. Am ales asta
 *   pentru că nimeni nu mănâncă 100 g de Snickers și nimeni nu mănâncă doar
 *   100 g de papanași. Comparațiile din interfață se fac porție la porție.
 * • `priceRon` este costul estimat AL PORȚIEI descrise, nu al pachetului.
 *   Când porția e o fracțiune dintr-un pachet (un rând de Milka dintr-o
 *   tabletă de 100 g), prețul e proporțional, iar `note` spune prețul real
 *   al pachetului. Ca peste tot în proiect: NICIUN PREȚ NU E CONFIRMAT.
 * • `confidence` se referă la VALORILE NUTRIȚIONALE, nu la preț:
 *     high   — valoare de tabel nutrițional al producătorului, produs
 *              standardizat industrial, aceeași rețetă în toată Europa.
 *     medium — produs de raft cu rețetă variabilă între branduri, sau
 *              valoare oficială parțială (energia e publicată, repartiția
 *              pe macro-uri e reconstruită de mine).
 *     low    — preparat artizanal. Papanașii de la două cofetării din Sibiu
 *              pot diferi cu 300 de kcal la aceeași denumire. Cifra e un
 *              ordin de mărime, nu o măsurătoare.
 * • `source` spune concret de unde vine cifra. Unde scrie „valori tipice"
 *   sau „estimare din ingrediente", chiar aia e: o reconstrucție, nu o
 *   etichetă citită. Nu inventăm site-uri pe care nu le-am deschis.
 *
 * DESPRE COERENȚA ENERGETICĂ
 * --------------------------
 * Verificarea `kcal ≈ P*4 + C*4 + F*9` (Atwater) trece pe toate intrările în
 * ±15%. Singurele care se apropie de limită sunt produsele cu polioli și
 * fibră multă (batonul proteic), unde legea nici nu se aplică: eritritolul
 * și maltitolul se declară la carbohidrați dar nu dau 4 kcal/g. Abaterea e
 * documentată în `note`, nu ascunsă.
 * ========================================================================= */
(function () {
  'use strict';

  const REF = [

    /* ================= BATOANE ========================================== */

    {
      id: 'ref-snickers',
      name: 'Snickers, baton clasic',
      category: 'baton',
      serving: { grams: 50, label: '1 baton (50 g)' },
      per: { kcal: 245, protein: 4.3, carbs: 29.5, sugars: 25.5, fat: 12.3, satFat: 4.6 },
      priceRon: 4.5,
      source: 'Tabel nutrițional producător (Mars), recalculat pe batonul de 50 g',
      confidence: 'high',
      note: 'Cel mai „proteic" baton clasic de pe raft, cu 4,3 g — din arahide. Rămâne un raport de 1 g de proteină la 57 kcal.'
    },
    {
      id: 'ref-mars',
      name: 'Mars, baton clasic',
      category: 'baton',
      serving: { grams: 51, label: '1 baton (51 g)' },
      per: { kcal: 229, protein: 2.1, carbs: 35.5, sugars: 30.4, fat: 8.6, satFat: 4.3 },
      priceRon: 4.5,
      source: 'Tabel nutrițional producător (Mars), recalculat pe batonul de 51 g',
      confidence: 'high',
      note: 'Mai puțină grăsime decât Snickers, dar 5 g de zahăr în plus: nugatul și caramelul sunt aproape numai zahăr.'
    },
    {
      id: 'ref-bounty',
      name: 'Bounty, baton dublu',
      category: 'baton',
      serving: { grams: 57, label: '1 pachet cu 2 batoane (57 g)' },
      per: { kcal: 278, protein: 2.3, carbs: 33, sugars: 27, fat: 14.8, satFat: 12.5 },
      priceRon: 4.5,
      source: 'Tabel nutrițional producător (Mars), recalculat pe pachetul de 57 g',
      confidence: 'high',
      note: 'Din 14,8 g de grăsime, 12,5 g sunt saturate — cocosul e aproape integral grăsime saturată. Cea mai mare pondere din listă.'
    },
    {
      id: 'ref-twix',
      name: 'Twix, 2 batoane',
      category: 'baton',
      serving: { grams: 50, label: '1 pachet cu 2 batoane (50 g)' },
      per: { kcal: 248, protein: 2.3, carbs: 32.3, sugars: 24.3, fat: 12, satFat: 7.2 },
      priceRon: 4.5,
      source: 'Tabel nutrițional producător (Mars), recalculat pe pachetul de 50 g',
      confidence: 'high',
      note: 'Biscuitul aduce amidon, deci raportul zahăr/carbohidrați e mai mic decât la Mars. Caloriile sunt aceleași.'
    },
    {
      id: 'ref-kitkat',
      name: 'KitKat, 4 degete',
      category: 'baton',
      serving: { grams: 41.5, label: '1 baton cu 4 degete (41,5 g)' },
      per: { kcal: 211, protein: 2.5, carbs: 24.6, sugars: 19.8, fat: 11.1, satFat: 6.7 },
      priceRon: 4.5,
      source: 'Tabel nutrițional producător (Nestlé), recalculat pe batonul de 41,5 g',
      confidence: 'high',
      note: 'Cel mai mic baton „clasic" ca gramaj, deci și cel mai mic la calorii. Varianta cu 2 degete are jumătate.'
    },
    {
      id: 'ref-lion',
      name: 'Lion, baton clasic',
      category: 'baton',
      serving: { grams: 42, label: '1 baton (42 g)' },
      per: { kcal: 208, protein: 1.9, carbs: 26.5, sugars: 19.7, fat: 10, satFat: 6.1 },
      priceRon: 4.5,
      source: 'Valori tipice de etichetă pentru batonul standard Nestlé; gramajul din RO variază între 40 și 45 g',
      confidence: 'medium',
      note: 'Cerealele crocante fac batonul să pară mai „ușor" decât e. Diferența față de KitKat e în zecimale.'
    },
    {
      id: 'ref-kinder-bueno',
      name: 'Kinder Bueno, pachet cu 2 batoane',
      category: 'baton',
      serving: { grams: 43, label: '1 pachet cu 2 batoane (43 g)' },
      per: { kcal: 243, protein: 3.8, carbs: 21.3, sugars: 17.9, fat: 16, satFat: 7.9 },
      priceRon: 6,
      source: 'Tabel nutrițional producător (Ferrero), recalculat pe pachetul de 43 g',
      confidence: 'high',
      note: 'Singurul din grupa batoanelor unde grăsimea, nu zahărul, e sursa principală de energie: 16 g la 43 g de produs.'
    },
    {
      id: 'ref-rom',
      name: 'ROM Autentic, baton cu cremă de rom',
      category: 'baton',
      serving: { grams: 30, label: '1 baton mic (30 g)' },
      per: { kcal: 144, protein: 0.7, carbs: 19.5, sugars: 18, fat: 6.9, satFat: 4.2 },
      priceRon: 3,
      source: 'Tabel nutrițional Kandia Dulce (481 kcal / 100 g), recalculat pe batonul de 30 g',
      confidence: 'high',
      note: 'Cel mai mic baton din listă ca energie, pentru că e și cel mai mic ca gramaj. Conține sorbitol (poliol) ca umectant și grăsime vegetală de palmier — de aceea 14 g din 23 g de grăsime la 100 g sunt saturate.'
    },

    /* ================= CIOCOLATĂ DE RAFT ================================ */

    {
      id: 'ref-milka-lapte',
      name: 'Milka lapte alpin, un rând din tabletă',
      category: 'ciocolata',
      serving: { grams: 25, label: '4 pătrățele / un rând (25 g)' },
      per: { kcal: 134, protein: 1.6, carbs: 14.7, sugars: 14.1, fat: 7.5, satFat: 4.6 },
      priceRon: 3,
      source: 'Tabel nutrițional producător (Mondelez), 534 kcal / 100 g, recalculat pe 25 g',
      confidence: 'high',
      note: 'Tableta întreagă de 100 g are 534 kcal. Porția de 25 g e o convenție de etichetă — în practică se mănâncă jumătate de tabletă, adică 267 kcal. Tableta costă aproximativ 12 RON.'
    },
    {
      id: 'ref-africana',
      name: 'Africana, ciocolată cu lapte, un rând',
      category: 'ciocolata',
      serving: { grams: 25, label: '4 pătrățele / un rând (25 g)' },
      per: { kcal: 135, protein: 1.6, carbs: 14.5, sugars: 14, fat: 7.6, satFat: 4.5 },
      priceRon: 2.2,
      source: 'Valori tipice pentru ciocolată cu lapte de raft; nu am citit eticheta Kandia pentru acest sortiment',
      confidence: 'medium',
      note: 'Practic identică nutrițional cu Milka, la aproximativ două treimi din preț. Tableta de 80–90 g costă în jur de 8 RON.'
    },
    {
      id: 'ref-ciocolata-neagra-70',
      name: 'Ciocolată neagră 70%, un rând',
      category: 'ciocolata',
      serving: { grams: 25, label: '4 pătrățele / un rând (25 g)' },
      per: { kcal: 143, protein: 1.9, carbs: 11.3, sugars: 6.8, fat: 10.3, satFat: 6.2 },
      priceRon: 3.5,
      source: 'Valori tipice de etichetă pentru ciocolată neagră 70% cacao',
      confidence: 'medium',
      note: 'Are MAI multe calorii decât ciocolata cu lapte, nu mai puține — mai multă grăsime de cacao, mai puțin zahăr. Diferența reală e că 25 g de ciocolată neagră satură pofta, iar 25 g de ciocolată cu lapte de obicei nu.'
    },

    /* ================= COFETĂRIE ======================================== */

    {
      id: 'ref-papanasi',
      name: 'Papanași cu smântână și dulceață, porție de restaurant',
      category: 'cofetarie',
      serving: { grams: 350, label: '1 porție de restaurant (350 g)' },
      per: { kcal: 928, protein: 28, carbs: 98, sugars: 49, fat: 45.5, satFat: 21 },
      priceRon: 32,
      source: 'Estimare din ingrediente (brânză de vaci, ou, făină, prăjire, smântână, dulceață); aliniată cu intrarea `b-papanasi` din atlas',
      confidence: 'low',
      note: 'Cea mai mare variație din tot registrul. Porția diferă între 250 și 450 g de la o bucătărie la alta, iar cantitatea de smântână și dulceață poate muta rezultatul cu 250 kcal în orice direcție. Cei 28 g de proteină sunt reali — brânza de vaci — dar vin la pachet cu 45 g de grăsime.'
    },
    {
      id: 'ref-ecler',
      name: 'Ecler cu cremă de vanilie și glazură',
      category: 'cofetarie',
      serving: { grams: 90, label: '1 bucată (90 g)' },
      per: { kcal: 300, protein: 5, carbs: 30, sugars: 18, fat: 18, satFat: 11 },
      priceRon: 9,
      source: 'Estimare din ingrediente pentru rețeta clasică (aluat opărit, cremă de patiserie, glazură)',
      confidence: 'low',
      note: 'Aluatul opărit e sărac în zahăr; aproape tot zahărul vine din cremă și glazură. Cofetăriile din Sibiu vând ecleruri între 70 și 120 g.'
    },
    {
      id: 'ref-savarina',
      name: 'Savarină cu sirop și frișcă',
      category: 'cofetarie',
      serving: { grams: 150, label: '1 bucată (150 g)' },
      per: { kcal: 400, protein: 5, carbs: 55, sugars: 40, fat: 18, satFat: 11 },
      priceRon: 10,
      source: 'Estimare din ingrediente; siropul de însiropare e sursa dominantă de zahăr',
      confidence: 'low',
      note: 'Cel mai mare conținut de zahăr din grupa cofetăriei raportat la calorii. Un aluat de cozonac scufundat în sirop nu are cum să iasă altfel.'
    },
    {
      id: 'ref-amandina',
      name: 'Amandină',
      category: 'cofetarie',
      serving: { grams: 100, label: '1 bucată (100 g)' },
      per: { kcal: 400, protein: 5, carbs: 48, sugars: 35, fat: 21, satFat: 12 },
      priceRon: 11,
      source: 'Estimare din ingrediente pentru rețeta clasică (blat însiropat cu cacao, cremă de unt, glazură de ciocolată)',
      confidence: 'low',
      note: 'Crema de unt e diferența față de un simplu blat cu cacao: adaugă circa 15 g de grăsime la porție.'
    },
    {
      id: 'ref-tort-diplomat',
      name: 'Tort diplomat, o felie',
      category: 'cofetarie',
      serving: { grams: 130, label: '1 felie (130 g)' },
      per: { kcal: 330, protein: 4.5, carbs: 36, sugars: 28, fat: 19, satFat: 12 },
      priceRon: 14,
      source: 'Estimare din ingrediente (pișcoturi, cremă cu frișcă și gelatină, fructe din compot)',
      confidence: 'low',
      note: 'Fructele din compot sunt și ele o sursă de zahăr adăugat, nu doar „fructe". Feliile de cofetărie variază între 100 și 160 g.'
    },
    {
      id: 'ref-cremsnit',
      name: 'Cremșnit',
      category: 'cofetarie',
      serving: { grams: 150, label: '1 bucată (150 g)' },
      per: { kcal: 420, protein: 6, carbs: 42, sugars: 26, fat: 26, satFat: 15 },
      priceRon: 12,
      source: 'Estimare din ingrediente (foietaj, cremă de vanilie, frișcă, zahăr pudră)',
      confidence: 'low',
      note: 'Foietajul e jumătate unt sau margarină — de aici cele 26 g de grăsime. Zahărul e mai mic decât ai crede pentru un desert atât de dulce la gust.'
    },
    {
      id: 'ref-tiramisu',
      name: 'Tiramisu, porție de restaurant',
      category: 'cofetarie',
      serving: { grams: 120, label: '1 porție (120 g)' },
      per: { kcal: 350, protein: 5.5, carbs: 30, sugars: 24, fat: 23, satFat: 13 },
      priceRon: 18,
      source: 'Valori tipice pentru rețeta clasică cu mascarpone; variază puternic cu proporția de frișcă',
      confidence: 'low',
      note: 'Mascarpone are 42 g de grăsime la 100 g. Versiunile „ușoare" din restaurante înlocuiesc o parte cu frișcă vegetală, ceea ce scade grăsimea și crește zahărul.'
    },
    {
      id: 'ref-cheesecake',
      name: 'Cheesecake, o felie',
      category: 'cofetarie',
      serving: { grams: 120, label: '1 felie (120 g)' },
      per: { kcal: 384, protein: 7.2, carbs: 33.6, sugars: 26.4, fat: 24, satFat: 14.4 },
      priceRon: 18,
      source: 'Valori de etichetă pentru cheesecake ambalat; aliniate cu intrarea `b-cheesecake` din atlas',
      confidence: 'medium',
      note: 'Referința cea mai des imitată de rețetele proteice, pentru că e și cea mai ușor de imitat: brânza proaspătă face oricum treaba, iar blatul e opțional.'
    },

    /* ================= PATISERIE ======================================== */

    {
      id: 'ref-cozonac',
      name: 'Cozonac cu nucă, o felie',
      category: 'patiserie',
      serving: { grams: 80, label: '1 felie (80 g)' },
      per: { kcal: 290, protein: 6.5, carbs: 40, sugars: 18, fat: 11.5, satFat: 5 },
      priceRon: 6,
      source: 'Valori tipice de etichetă pentru cozonac ambalat de fabrică; cel de casă e mai gras',
      confidence: 'medium',
      note: 'Cel mai bun raport proteină/calorii din grupa patiseriei (6,5 g), din făină, ouă și nucă. Rămâne 1 g de proteină la 45 kcal.'
    },
    {
      id: 'ref-gogoasa-ciocolata',
      name: 'Gogoașă umplută cu ciocolată',
      category: 'patiserie',
      serving: { grams: 80, label: '1 gogoașă (80 g)' },
      per: { kcal: 330, protein: 5, carbs: 38, sugars: 16, fat: 17, satFat: 8 },
      priceRon: 7,
      source: 'Estimare din ingrediente; absorbția de ulei la prăjire e cea mai imprecisă variabilă',
      confidence: 'low',
      note: 'O gogoașă absoarbe între 8 și 15 g de ulei, în funcție de temperatura băii. Aceeași rețetă poate ieși cu 280 sau cu 380 kcal.'
    },
    {
      id: 'ref-covrig-ciocolata',
      name: 'Covrig cu ciocolată, de la covrigărie',
      category: 'patiserie',
      serving: { grams: 100, label: '1 covrig (100 g)' },
      per: { kcal: 360, protein: 8, carbs: 52, sugars: 18, fat: 13, satFat: 7 },
      priceRon: 6,
      source: 'Estimare din ingrediente, pornind de la covrigul simplu documentat în atlas (`b-covrig-sibiu`) plus umplutura de cremă de cacao',
      confidence: 'low',
      note: 'Covrigul simplu are aproximativ 320 kcal la 100 g și aproape zero zahăr. Crema de cacao adaugă zahărul și jumătate din grăsime.'
    },
    {
      id: 'ref-placinta-branza',
      name: 'Plăcintă cu brânză dulce',
      category: 'patiserie',
      serving: { grams: 150, label: '1 bucată (150 g)' },
      per: { kcal: 420, protein: 10, carbs: 42, sugars: 12, fat: 23, satFat: 11 },
      priceRon: 10,
      source: 'Estimare din ingrediente (foi de plăcintă, brânză de vaci, ou, zahăr, ulei sau unt)',
      confidence: 'low',
      note: '10 g de proteină la porție, cel mai mult din grupă, pentru că brânza de vaci e ingredient principal, nu decor. Grăsimea vine din foi și din ce se unge între ele.'
    },
    {
      id: 'ref-clatite-nutella',
      name: 'Clătite cu cremă de ciocolată și alune',
      category: 'patiserie',
      serving: { grams: 180, label: '2 clătite umplute (180 g)' },
      per: { kcal: 510, protein: 9, carbs: 60, sugars: 35, fat: 26, satFat: 10 },
      priceRon: 22,
      source: 'Estimare din ingrediente: 2 clătite de aproximativ 65 g fiecare plus 50 g de cremă de ciocolată',
      confidence: 'low',
      note: 'Crema singură aduce 270 din cele 510 kcal. Cine pune 30 g în loc de 50 g scade porția la 400 kcal fără să schimbe rețeta clătitelor.'
    },

    /* ================= ÎNGHEȚATĂ ======================================== */

    {
      id: 'ref-cornet-clasic',
      name: 'Cornet de înghețată, tip clasic cu ciocolată',
      category: 'inghetata',
      serving: { grams: 66, label: '1 cornet (66 g / 90 ml)' },
      per: { kcal: 199, protein: 2.4, carbs: 23, sugars: 17, fat: 10.8, satFat: 8.5 },
      priceRon: 7,
      source: 'Valori tipice de etichetă pentru cornetul industrial standard (tip Cornetto Classico)',
      confidence: 'medium',
      note: 'Grăsimea saturată e 8,5 g din 10,8 — glazura de cocos și grăsimea vegetală din vafă. Cornetul e cel mai ieftin desert la kcal din grupă.'
    },
    {
      id: 'ref-magnum-classic',
      name: 'Magnum Classic, înghețată pe băț',
      category: 'inghetata',
      serving: { grams: 79, label: '1 baton (79 g / 100 ml)' },
      per: { kcal: 244, protein: 3.1, carbs: 22.6, sugars: 21.6, fat: 15.6, satFat: 11.1 },
      priceRon: 10,
      source: 'Tabel nutrițional producător (Unilever), valoare pe baton',
      confidence: 'high',
      note: 'Practic același număr de calorii ca un Snickers, dar cu 6 grame de zahăr mai puține și 3 grame de grăsime în plus. Ciocolata de acoperire e aproape jumătate din grăsimea totală.'
    },
    {
      id: 'ref-mcflurry',
      name: 'McFlurry cu Oreo și topping de caramel',
      category: 'inghetata',
      serving: { grams: 205, label: '1 porție standard (205 g)' },
      per: { kcal: 442, protein: 9, carbs: 68, sugars: 55, fat: 14, satFat: 9 },
      priceRon: 16,
      source: 'mcdonalds.ro — 442 kcal pe porția de 205 g pentru varianta cu topping de caramel; repartiția pe macro-uri e reconstruită de mine din compoziție',
      confidence: 'medium',
      note: 'Cel mai mult zahăr pe porție din tot registrul după savarină: 55 g, adică peste dublul unui Snickers. Varianta fără topping de caramel scade cu aproximativ 60 kcal.'
    },
    {
      id: 'ref-inghetata-cutie',
      name: 'Înghețată de vanilie la cutie, 2 cupe',
      category: 'inghetata',
      serving: { grams: 100, label: '2 cupe (100 g)' },
      per: { kcal: 199, protein: 3, carbs: 22, sugars: 20, fat: 11, satFat: 8 },
      priceRon: 4,
      source: 'Valori tipice de etichetă pentru înghețată de vanilie la cutie de 1 litru, gama medie',
      confidence: 'medium',
      note: 'Cea mai ieftină porție de desert din tot registrul. Problema nu e porția de 100 g, ci că se servește din cutia de 1 litru și nimeni nu cântărește.'
    },
    {
      id: 'ref-kinder-ice',
      name: 'Kinder înghețată pe băț',
      category: 'inghetata',
      serving: { grams: 42.5, label: '1 baton (42,5 g)' },
      per: { kcal: 177, protein: 2.8, carbs: 15.5, sugars: 14, fat: 11.6, satFat: 8.9 },
      priceRon: 6,
      source: 'Valori tipice de etichetă pentru batoanele de înghețată din gama Kinder; formatele diferă între ani',
      confidence: 'medium',
      note: 'Format mic, deci total mic. Pe 100 g e mai densă energetic decât Magnum — 416 kcal față de 309.'
    },

    /* ================= RAFT DE SUPERMARKET ============================== */

    {
      id: 'ref-nutella-lingura',
      name: 'Cremă de ciocolată cu alune, direct din borcan',
      category: 'raft',
      serving: { grams: 30, label: '2 linguri (30 g)' },
      per: { kcal: 162, protein: 1.9, carbs: 17.3, sugars: 16.9, fat: 9.3, satFat: 3.2 },
      priceRon: 3,
      source: 'Tabel nutrițional producător (Ferrero), 539 kcal / 100 g, recalculat pe 30 g',
      confidence: 'high',
      note: 'Din 17,3 g de carbohidrați, 16,9 g sunt zahăr — practic tot. Borcanul de 350 g are 1 886 kcal și costă în jur de 30 RON.'
    },
    {
      id: 'ref-biscuiti-crema',
      name: 'Biscuiți cu cremă, tip sandviș cu cacao',
      category: 'raft',
      serving: { grams: 33, label: '3 biscuiți (33 g)' },
      per: { kcal: 158, protein: 1.6, carbs: 22.6, sugars: 12.7, fat: 6.6, satFat: 3.2 },
      priceRon: 2.5,
      source: 'Valori tipice de etichetă pentru biscuiții sandviș cu cacao din gama standard',
      confidence: 'medium',
      note: 'Porția declarată pe pachet e de 2–3 biscuiți. Pachetul întreg de 154 g are aproximativ 740 kcal, iar biscuiții se mănâncă din pachet, nu din farfurie.'
    },
    {
      id: 'ref-croissant-ciocolata',
      name: 'Croissant cu cremă de ciocolată, ambalat',
      category: 'raft',
      serving: { grams: 80, label: '1 croissant (80 g)' },
      per: { kcal: 340, protein: 5.5, carbs: 40, sugars: 20, fat: 17.5, satFat: 9 },
      priceRon: 5,
      source: 'Valori tipice de etichetă pentru croissantul ambalat de raft (gama 7Days / Chipicao)',
      confidence: 'medium',
      note: 'Se vinde ca gustare de dimineață, dar are profilul unui desert: 20 g de zahăr și 9 g de grăsime saturată.'
    },
    {
      id: 'ref-budinca-pahar',
      name: 'Budincă de ciocolată la pahar',
      category: 'raft',
      serving: { grams: 125, label: '1 pahar (125 g)' },
      per: { kcal: 145, protein: 3.5, carbs: 22, sugars: 19, fat: 4.5, satFat: 3 },
      priceRon: 3.5,
      source: 'Valori tipice de etichetă pentru budinca de ciocolată la pahar din gama standard',
      confidence: 'medium',
      note: 'Termenul de comparație direct pentru budincile proteice: acelea au 3–5 ori mai multă proteină la calorii asemănătoare, iar diferența de preț e de circa 4 RON pe pahar.'
    },
    {
      id: 'ref-iaurt-fructe-indulcit',
      name: 'Iaurt cu fructe, îndulcit',
      category: 'raft',
      serving: { grams: 150, label: '1 pahar (150 g)' },
      per: { kcal: 132, protein: 4.5, carbs: 20, sugars: 18, fat: 3.8, satFat: 2.4 },
      priceRon: 3,
      source: 'Valori tipice de etichetă pentru iaurtul cu fructe din gama standard',
      confidence: 'medium',
      note: 'Comparația onestă: un skyr natural de 150 g are aproximativ 15 g de proteină și 6 g de zahăr, la aceleași calorii sau mai puține. Aici, 18 din 20 g de carbohidrați sunt zahăr.'
    },
    {
      id: 'ref-prajitura-ambalata',
      name: 'Prăjitură ambalată, tip ruladă cu cacao',
      category: 'raft',
      serving: { grams: 60, label: '1 bucată ambalată individual (60 g)' },
      per: { kcal: 252, protein: 3, carbs: 33, sugars: 20, fat: 12, satFat: 6 },
      priceRon: 4,
      source: 'Valori tipice de etichetă pentru prăjiturile ambalate individual din gama de raft',
      confidence: 'medium',
      note: 'Se vinde la bucată lângă casă și în pachete de 6. Grăsimea e aproape integral vegetală (palmier), de unde cele 6 g de saturate.'
    },
    {
      id: 'ref-baton-proteic-comercial',
      name: 'Baton proteic comercial, gamă medie',
      category: 'raft',
      serving: { grams: 55, label: '1 baton (55 g)' },
      per: { kcal: 210, protein: 20, carbs: 20, sugars: 2, fat: 7, satFat: 4 },
      priceRon: 9,
      source: 'Valori tipice de etichetă pentru batoanele proteice cu 35–40% proteină din magazinele online din RO',
      confidence: 'medium',
      note: 'Aici verificarea Atwater NU se aplică: din cei 20 g de carbohidrați, 10–14 g sunt polioli (maltitol, eritritol), care se declară la carbohidrați dar dau 2,4 kcal/g sau mai puțin. Calculul teoretic dă 223 kcal, eticheta declară în jur de 210. Diferența de 6% e reală, nu o eroare de transcriere. Peste 15 g de polioli pe porție înseamnă probleme digestive pentru majoritatea oamenilor.'
    },

    /* ================= LANȚURI ȘI CAFENELE ============================== */

    {
      id: 'ref-mcd-placinta',
      name: 'Plăcintă McDonald\'s',
      category: 'lant',
      serving: { grams: 78, label: '1 bucată (78 g)' },
      per: { kcal: 241, protein: 2.2, carbs: 30, sugars: 13, fat: 12.5, satFat: 6 },
      priceRon: 7,
      source: 'Valori tipice pentru plăcinta prăjită din meniul McDonald\'s Europa; umplutura variază pe sezon (mere, vișine, afine)',
      confidence: 'medium',
      note: 'Cel mai mic conținut de zahăr dintre deserturile de lanț, pentru că jumătate din carbohidrați vin din aluat. Grăsimea vine din prăjire.'
    },
    {
      id: 'ref-mcd-sundae',
      name: 'McSundae cu topping de caramel',
      category: 'lant',
      serving: { grams: 150, label: '1 porție (150 g)' },
      per: { kcal: 288, protein: 4.8, carbs: 53, sugars: 45, fat: 6.3, satFat: 4 },
      priceRon: 9,
      source: 'mcdonalds.ro — 288 kcal, 53 g carbohidrați, 4,8 g proteină pe porție; grăsimea e dedusă din diferența energetică',
      confidence: 'medium',
      note: 'Desertul cu cea mai mică grăsime din registrul de lanțuri și, în același timp, cu al treilea cel mai mult zahăr: 45 g dintr-o porție de 150 g.'
    },
    {
      id: 'ref-placinta-brutarie',
      name: 'Plăcintă de brutărie, cu brânză dulce',
      category: 'lant',
      serving: { grams: 180, label: '1 bucată de la tejghea (180 g)' },
      per: { kcal: 470, protein: 9, carbs: 55, sugars: 14, fat: 23, satFat: 11 },
      priceRon: 9,
      source: 'Estimare din ingrediente pentru plăcinta de brutărie de cartier; gramajul măsurat variază între 150 și 220 g',
      confidence: 'low',
      note: 'Cea mai ieftină porție de peste 400 kcal din registru. Brutăriile din Sibiu nu afișează valori nutriționale, deci cifra e un ordin de mărime.'
    },
    {
      id: 'ref-frappe-frisca',
      name: 'Frappé cu frișcă, de cafenea',
      category: 'lant',
      serving: { grams: 300, label: '1 pahar mediu (300 ml)' },
      per: { kcal: 314, protein: 5, carbs: 42, sugars: 38, fat: 14, satFat: 9 },
      priceRon: 18,
      source: 'Estimare din ingrediente (lapte, sirop aromat, frișcă, sos de topping); cafenelele din RO nu publică valori nutriționale',
      confidence: 'low',
      note: 'Se comandă ca băutură, nu ca desert, dar are mai mult zahăr decât un Snickers și un ROM la un loc. Varianta fără frișcă și cu jumătate de sirop coboară sub 200 kcal.'
    }

  ];

  window.PF_DESSERT_REF = REF;
})();
