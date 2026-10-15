/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — CĂMARA DE DESERTURI
 * File: js/data/10-dessert-pantry.js
 *
 * Ingredientele de bază pentru deserturi care NU sunt produse din atlas.
 *
 * REGULA CARE NU SE ÎNCALCĂ: dacă ingredientul există în atlas, rețeta îl
 * referă prin `id`, nu prin cămară. Cămara e pentru lucrurile pe care nimeni
 * nu le cumpără ca „sursă de proteină" și care deci n-au ce căuta în atlas:
 * cacao, miere, arome, praf de copt, fructe la kilogram.
 *
 * Valorile sunt la 100 g de produs așa cum se cumpără (uscat pentru pudre,
 * proaspăt pentru fructe). `ronKg` e o ESTIMARE, ca peste tot în proiect —
 * niciun preț din acest proiect nu e confirmat.
 *
 * FĂRĂ ÎNDULCITORI FĂRĂ ZAHĂR. Cămara nu conține eritritol, xilitol, stevie
 * sau sucraloză — e o regulă a proiectului, iar `tools/check.js` respinge orice
 * cheie care seamănă cu ele. Dulcele vine din miere, zahăr, curmale și fructe.
 * `freeSugar: true` marchează ingredientele al căror zahăr se numără ca ADĂUGAT
 * (după OMS): zahăr, miere, siropuri, gem, sucuri, pișcoturi, biscuiți.
 *
 * `polyol` rămâne în schemă pentru simetrie cu atlasul; aici e peste tot 0.
 * ========================================================================= */
(function () {
  'use strict';

  const P = {
    /* ---- dulce: doar zahăr adevărat ------------------------------------ */
    'zahar':            { name: 'Zahăr alb',                    kcal: 400, protein: 0,   carbs: 100, sugars: 100, fat: 0,  fiber: 0,  polyol: 0,   ronKg: 5,   note: 'Referința. Apare în rețete unde chiar e nevoie de el.', freeSugar: true },
    'miere':            { name: 'Miere',                        kcal: 304, protein: 0.3, carbs: 82,  sugars: 82, fat: 0,   fiber: 0.2, polyol: 0,  ronKg: 35,  note: 'Zahăr cu aromă. Nu e „mai sănătos", e mai gustos.', freeSugar: true },
    'sirop-artar':      { name: 'Sirop de arțar',               kcal: 260, protein: 0,   carbs: 67,  sugars: 60, fat: 0,   fiber: 0,  polyol: 0,   ronKg: 90,  note: 'Idem mierea, cu altă aromă.', freeSugar: true },
    'curmale':          { name: 'Curmale uscate (Medjool)',     kcal: 277, protein: 1.8, carbs: 75,  sugars: 66, fat: 0.2, fiber: 6.7, polyol: 0,  ronKg: 40,  note: 'Îndulcesc ȘI leagă. Baza oricărei bile energizante.' },

    /* ---- cacao și ciocolată -------------------------------------------- */
    'cacao':            { name: 'Cacao pudră neîndulcită',      kcal: 228, protein: 19.6, carbs: 58, sugars: 1.8, fat: 13.7, fiber: 37, polyol: 0, ronKg: 60,  note: '20 g de proteină la 100 g — cacao chiar contribuie.' },
    'cacao-alcalina':   { name: 'Cacao alcalinizată (Dutch)',   kcal: 220, protein: 18,  carbs: 55,  sugars: 1.5, fat: 13,  fiber: 33, polyol: 0,  ronKg: 75,  note: 'Mai închisă și mai puțin acră. NU reacționează cu bicarbonatul.' },
    'ciocolata-neagra': { name: 'Ciocolată neagră 85%',         kcal: 592, protein: 10.3, carbs: 22, sugars: 14, fat: 46,  fiber: 11, polyol: 0,   ronKg: 90,  note: 'Cea mai onestă indulgență din listă: puțin zahăr, multă grăsime.' },

    /* ---- făinuri și structură ------------------------------------------ */
    'faina-migdale':    { name: 'Făină de migdale',             kcal: 610, protein: 21,  carbs: 8,   sugars: 4,  fat: 53,  fiber: 11, polyol: 0,   ronKg: 90,  note: 'Umezeală și structură. Nu are gluten, deci nu se întărește.' },
    'faina-ovaz':       { name: 'Făină de ovăz',                kcal: 380, protein: 13,  carbs: 60,  sugars: 1,  fat: 7,   fiber: 10, polyol: 0,   ronKg: 14,  note: 'Se face acasă: fulgi de ovăz dați prin râșniță. Jumătate din preț.' },
    'faina-cocos':      { name: 'Făină de cocos',               kcal: 400, protein: 18,  carbs: 24,  sugars: 8,  fat: 14,  fiber: 39, polyol: 0,   ronKg: 60,  note: 'Absoarbe de 4 ori greutatea ei în lichid. Se dozează cu grijă.' },
    'amidon-porumb':    { name: 'Amidon de porumb',             kcal: 381, protein: 0.3, carbs: 91,  sugars: 0,  fat: 0.1, fiber: 0.9, polyol: 0,  ronKg: 12,  note: 'Îngroașă cremele. O linguriță schimbă totul.' },
    'psyllium':         { name: 'Coajă de psyllium',            kcal: 200, protein: 2,   carbs: 85,  sugars: 0,  fat: 0.5, fiber: 80, polyol: 0,   ronKg: 90,  note: 'Imită glutenul. 3-5 g salvează un blat sfărâmicios.' },
    'praf-copt':        { name: 'Praf de copt',                 kcal: 53,  protein: 0,   carbs: 28,  sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 40,  note: '', free: true },
    'bicarbonat':       { name: 'Bicarbonat de sodiu',          kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 12,  note: 'Are nevoie de un acid ca să lucreze: iaurt, cacao naturală, lămâie.', free: true },
    'gelatina-foi':     { name: 'Gelatină foi',                 kcal: 335, protein: 84,  carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 120, note: 'Proteina ei NU se pune la ținta zilnică — zero triptofan.' },
    'agar':             { name: 'Agar-agar',                    kcal: 306, protein: 6,   carbs: 81,  sugars: 0,  fat: 0.3, fiber: 74, polyol: 0,   ronKg: 900, note: 'Varianta vegetală a gelatinei. Se fierbe, altfel nu se leagă.' },

    /* ---- grăsimi și paste ---------------------------------------------- */
    'unt-arahide':      { name: 'Unt de arahide 100%',          kcal: 588, protein: 25,  carbs: 20,  sugars: 6,  fat: 50,  fiber: 8,  polyol: 0,   ronKg: 45,  note: 'Verifică eticheta: „100% arahide", fără zahăr și ulei de palmier.' },
    'unt-migdale':      { name: 'Unt de migdale',               kcal: 614, protein: 21,  carbs: 19,  sugars: 4,  fat: 56,  fiber: 10, polyol: 0,   ronKg: 110, note: '' },
    'tahini':           { name: 'Tahini (pastă de susan)',      kcal: 595, protein: 17,  carbs: 21,  sugars: 0.5, fat: 54, fiber: 9,  polyol: 0,   ronKg: 55,  note: 'Amăreală care taie dulceața. Merge surprinzător în brownie.' },
    'unt':              { name: 'Unt 82%',                      kcal: 740, protein: 0.7, carbs: 0.6, sugars: 0.6, fat: 82, fiber: 0, polyol: 0,   ronKg: 60,  note: '' },
    'ulei-cocos':       { name: 'Ulei de cocos',                kcal: 890, protein: 0,   carbs: 0,   sugars: 0,  fat: 100, fiber: 0,  polyol: 0,   ronKg: 60,  note: 'Solid sub 24°C — de asta se întărește glazura la frigider.' },

    /* ---- fructe --------------------------------------------------------- */
    'banane':           { name: 'Banane',                       kcal: 89,  protein: 1.1, carbs: 23,  sugars: 12, fat: 0.3, fiber: 2.6, polyol: 0,  ronKg: 7,   note: 'Cu cât mai coaptă, cu atât mai dulce și mai puțin amidon.' },
    'capsuni':          { name: 'Căpșuni',                      kcal: 32,  protein: 0.7, carbs: 7.7, sugars: 4.9, fat: 0.3, fiber: 2, polyol: 0,   ronKg: 20,  note: '' },
    'zmeura':           { name: 'Zmeură',                       kcal: 52,  protein: 1.2, carbs: 12,  sugars: 4.4, fat: 0.7, fiber: 6.5, polyol: 0,  ronKg: 45,  note: 'Cea mai acră, deci cea care taie cel mai bine dulceața.' },
    'afine':            { name: 'Afine',                        kcal: 57,  protein: 0.7, carbs: 14,  sugars: 10, fat: 0.3, fiber: 2.4, polyol: 0,  ronKg: 45,  note: '' },
    'visine-congelate': { name: 'Vișine congelate',             kcal: 50,  protein: 1,   carbs: 12,  sugars: 8,  fat: 0.3, fiber: 1.6, polyol: 0,  ronKg: 18,  note: 'Vișinele bat cireșele la orice desert: aciditatea face treaba.' },
    'mere':             { name: 'Mere',                         kcal: 52,  protein: 0.3, carbs: 14,  sugars: 10, fat: 0.2, fiber: 2.4, polyol: 0,  ronKg: 5,   note: '' },
    'lamaie':           { name: 'Lămâie (zeamă și coajă)',      kcal: 22,  protein: 0.4, carbs: 6.9, sugars: 2.5, fat: 0.2, fiber: 0.3, polyol: 0, ronKg: 12,  note: '' },
    'gem-fara-zahar':   { name: 'Gem fără zahăr adăugat',       kcal: 130, protein: 0.5, carbs: 30,  sugars: 25, fat: 0.2, fiber: 1.5, polyol: 0,  ronKg: 30,  note: '„Fără zahăr adăugat" nu înseamnă fără zahăr — fructele îl au deja.', freeSugar: true },

    /* ---- semințe, cereale, crocant -------------------------------------- */
    'chia':             { name: 'Semințe de chia',              kcal: 486, protein: 17,  carbs: 42,  sugars: 0,  fat: 31,  fiber: 34, polyol: 0,   ronKg: 45,  note: 'Absorb de 10 ori greutatea lor. Budinca se face singură peste noapte.' },
    'in-macinat':       { name: 'In măcinat',                   kcal: 534, protein: 18,  carbs: 29,  sugars: 1.6, fat: 42, fiber: 27, polyol: 0,   ronKg: 25,  note: '1 lingură + 3 apă = un înlocuitor de ou care chiar leagă.' },
    'cocos-fulgi':      { name: 'Fulgi de cocos neîndulciți',   kcal: 660, protein: 7,   carbs: 24,  sugars: 7,  fat: 64,  fiber: 16, polyol: 0,   ronKg: 40,  note: '' },
    'orez-expandat':    { name: 'Orez expandat',                kcal: 390, protein: 6,   carbs: 87,  sugars: 0.5, fat: 1,  fiber: 1,  polyol: 0,   ronKg: 35,  note: 'Crocanul cel mai ieftin. 10 g schimbă textura unui baton.' },
    'seminte-dovleac':  { name: 'Semințe de dovleac',           kcal: 559, protein: 30,  carbs: 11,  sugars: 1.4, fat: 49, fiber: 6,  polyol: 0,   ronKg: 40,  note: '' },

    /* ---- ce blocau rețete clasice românești ------------------------------ */
    'orez-rotund':      { name: 'Orez cu bob rotund',           kcal: 355, protein: 6.8, carbs: 79,  sugars: 0.1, fat: 0.6, fiber: 1.4, polyol: 0, ronKg: 9,   note: 'Bobul rotund lasă amidon și leagă budinca. Cel lung nu.' },
    'drojdie-uscata':   { name: 'Drojdie uscată',               kcal: 325, protein: 40,  carbs: 41,  sugars: 0,  fat: 7.6, fiber: 27, polyol: 0,   ronKg: 120, note: 'Fără ea nu există gogoașă dospită sau cozonac. 7 g = un plic.' },
    'stafide':          { name: 'Stafide',                      kcal: 299, protein: 3.1, carbs: 79,  sugars: 65, fat: 0.5, fiber: 3.7, polyol: 0,  ronKg: 22,  note: 'Zahăr concentrat cu coajă. 15 g pe porție e deja mult.' },

    /* ---- texturanți ------------------------------------------------------ */
    'guma-xantan':      { name: 'Gumă xantan',                  kcal: 333, protein: 0,   carbs: 78,  sugars: 0,  fat: 0,   fiber: 78, polyol: 0,   ronKg: 300, note: 'Un vârf de cuțit (0,5 g) îngroașă un shake întreg. Mai mult = mucos.' },
    'piure-dovleac':    { name: 'Piure de dovleac',             kcal: 34,  protein: 1,   carbs: 8,   sugars: 3.2, fat: 0.1, fiber: 2.1, polyol: 0,  ronKg: 12,  note: 'Ingredientul umed cel mai ieftin pentru copt. Aproape fără gust propriu.' },

    /* ---- arome și restul ------------------------------------------------ */
    'vanilie':          { name: 'Extract de vanilie',           kcal: 288, protein: 0.1, carbs: 13,  sugars: 13, fat: 0.1, fiber: 0, polyol: 0,   ronKg: 900, note: 'Câteva picături. Face un desert cu îndulcitor să pară mai dulce.', free: true },
    'scortisoara':      { name: 'Scorțișoară',                  kcal: 247, protein: 4,   carbs: 81,  sugars: 2.2, fat: 1.2, fiber: 53, polyol: 0,  ronKg: 80,  note: 'Trucul cel mai ieftin: creierul citește scorțișoara ca dulceață.', free: true },
    'sare':             { name: 'Sare',                         kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 2,   note: 'Un vârf de cuțit într-un desert dulce nu se simte, dar se observă lipsa.', free: true },
    'cafea-instant':    { name: 'Cafea instant',                kcal: 353, protein: 12,  carbs: 41,  sugars: 0,  fat: 0.5, fiber: 0, polyol: 0,    ronKg: 200, note: 'O linguriță în orice desert cu cacao adâncește ciocolata.', free: true },
    'apa':              { name: 'Apă',                          kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 0,   note: '', free: true },
    'gheata':           { name: 'Gheață',                       kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 0,   note: '', free: true },

    /* ---- linia ușoară: fructe întregi (USDA FoodData Central, rotunjit) -- */
    'pere':             { name: 'Pere',                          kcal: 57, protein: 0.4, carbs: 15.2, sugars: 9.8, fat: 0.1, fiber: 3.1, polyol: 0, ronKg: 9, note: 'Pentru copt și poșat: tari, nu coapte — Williams, Conference.' },
    'gutui':            { name: 'Gutui',                         kcal: 57, protein: 0.4, carbs: 15.3, sugars: 12, fat: 0.1, fiber: 1.9, polyol: 0, ronKg: 8, note: 'Crude sunt astringente. Au nevoie de o oră de cuptor.' },
    'prune':            { name: 'Prune',                         kcal: 46, protein: 0.7, carbs: 11.4, sugars: 9.9, fat: 0.3, fiber: 1.4, polyol: 0, ronKg: 6, note: 'Brumării sau Stanley: se desprind de sâmbure.' },
    'piersici':         { name: 'Piersici / nectarine',          kcal: 39, protein: 0.9, carbs: 9.5, sugars: 8.4, fat: 0.3, fiber: 1.5, polyol: 0, ronKg: 10, note: '' },
    'pepene-rosu':      { name: 'Pepene roșu (miez)',            kcal: 30, protein: 0.6, carbs: 7.6, sugars: 6.2, fat: 0.2, fiber: 0.4, polyol: 0, ronKg: 3, note: '92% apă — cel mai mic număr de calorii pe gram din cămară.' },
    'struguri':         { name: 'Struguri fără sâmburi',         kcal: 69, protein: 0.7, carbs: 18.1, sugars: 15.5, fat: 0.2, fiber: 0.9, polyol: 0, ronKg: 9, note: 'Cel mai dulce fruct de aici, gram la gram.' },
    'portocale':        { name: 'Portocale (pulpă)',             kcal: 47, protein: 0.9, carbs: 11.8, sugars: 9.4, fat: 0.1, fiber: 2.4, polyol: 0, ronKg: 7, note: '' },
    'mandarine':        { name: 'Mandarine (pulpă)',             kcal: 53, protein: 0.8, carbs: 13.3, sugars: 10.6, fat: 0.3, fiber: 1.8, polyol: 0, ronKg: 8, note: '' },
    'fructe-padure':    { name: 'Fructe de pădure congelate (mix)', kcal: 45, protein: 0.9, carbs: 10, sugars: 6, fat: 0.3, fiber: 4, polyol: 0, ronKg: 30, note: 'Pungile de 450 g de la Lidl/Kaufland. Ieftine iarna, la fel de bune ca proaspete pentru gătit.' },
    'rubarba':          { name: 'Rubarbă (tulpini)',             kcal: 21, protein: 0.9, carbs: 4.5, sugars: 1.1, fat: 0.2, fiber: 1.8, polyol: 0, ronKg: 15, note: 'Doar tulpinile. Frunzele au acid oxalic și nu se mănâncă.' },

    /* ---- linia ușoară: lichide ------------------------------------------ */
    'suc-mere':         { name: 'Suc de mere 100%',              kcal: 46, protein: 0.1, carbs: 11.3, sugars: 10, fat: 0.1, fiber: 0.2, polyol: 0, ronKg: 6, note: 'Fără zahăr adăugat pe etichetă, dar după OMS zahărul din suc e zahăr liber.', freeSugar: true },
    'suc-portocale':    { name: 'Suc de portocale 100%',         kcal: 45, protein: 0.7, carbs: 10.4, sugars: 8.4, fat: 0.2, fiber: 0.2, polyol: 0, ronKg: 8, note: 'Idem sucul de mere: se socotește zahăr adăugat.', freeSugar: true },
    'ceai-fructe':      { name: 'Ceai de fructe / hibiscus (infuzie)', kcal: 1, protein: 0, carbs: 0.2, sugars: 0, fat: 0, fiber: 0, polyol: 0, ronKg: 4, note: 'Aromă și culoare fără calorii. Infuzie dublă, ca să nu iasă „apos".' },
    'cafea-preparata':  { name: 'Cafea preparată (filtru / espresso)', kcal: 2, protein: 0.1, carbs: 0, sugars: 0, fat: 0, fiber: 0, polyol: 0, ronKg: 15, note: '' },
    'vin-rosu':         { name: 'Vin roșu sec',                  kcal: 85, protein: 0.1, carbs: 2.6, sugars: 0.6, fat: 0, fiber: 0, polyol: 0, ronKg: 25, note: 'Caloriile vin din alcool. La poșat se evaporă doar o parte — nu e pentru copii.' },

    /* ---- linia ușoară: amidonuri și făinuri ----------------------------- */
    'amidon-cartofi':   { name: 'Amidon din cartofi',            kcal: 333, protein: 0.1, carbs: 83, sugars: 0, fat: 0.1, fiber: 0, polyol: 0, ronKg: 12, note: 'Pentru kisiel: dă un jeleu limpede. Dacă fierbe după ce s-a îngroșat, se subțiază.' },
    'gris':             { name: 'Griș',                          kcal: 360, protein: 10.3, carbs: 73, sugars: 0.4, fat: 1, fiber: 3.9, polyol: 0, ronKg: 6, note: '' },
    'faina-alba':       { name: 'Făină albă 000',                kcal: 364, protein: 10, carbs: 76, sugars: 0.3, fat: 1, fiber: 2.7, polyol: 0, ronKg: 4, note: '' },
    'piscoturi':        { name: 'Pișcoturi',                     kcal: 390, protein: 8, carbs: 78, sugars: 40, fat: 4, fiber: 1, polyol: 0, ronKg: 25, note: 'Jumătate din greutate e zahăr. Câte bucăți pui contează mai mult decât orice îndulcitor.', freeSugar: true },

    /* ---- pentru clasicele refăcute pe linia proteică -------------------- */
    'biscuiti-simpli':  { name: 'Biscuiți simpli (tip Petit Beurre)', kcal: 445, protein: 7.5, carbs: 73, sugars: 22, fat: 13, fiber: 2.5, polyol: 0, ronKg: 18, note: 'Baza salamului de biscuiți. Un sfert din greutate e zahăr.', freeSugar: true },
    'foietaj':          { name: 'Aluat foietaj congelat',       kcal: 400, protein: 6,   carbs: 37,  sugars: 2,  fat: 25,  fiber: 1.5, polyol: 0, ronKg: 20,  note: 'Aproape toată grăsimea unui cremșnit stă aici, nu în cremă.' },
    'galbenus':         { name: 'Gălbenuș de ou (L ≈ 17 g)',    kcal: 322, protein: 15.9, carbs: 3.6, sugars: 0.6, fat: 26.5, fiber: 0, polyol: 0, ronKg: 50,  note: 'Atlasul are oul întreg și albușul; gălbenușul singur are alt profil — de 3 ori mai multă grăsime decât oul.' },
    'pesmet':           { name: 'Pesmet',                       kcal: 395, protein: 13,  carbs: 72,  sugars: 6,  fat: 5,   fiber: 4.5, polyol: 0,   ronKg: 12,  note: '' },

    /* ---- arome fără calorii de numărat ------------------------------------- */
    'condimente':       { name: 'Condimente întregi (cuișoare, anason, baton de scorțișoară)', kcal: 0, protein: 0, carbs: 0, sugars: 0, fat: 0, fiber: 0, polyol: 0, ronKg: 0, note: '', free: true },
    'menta':            { name: 'Mentă proaspătă',              kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 0,   note: '', free: true },
    'aroma-migdale':    { name: 'Aromă de migdale amare',       kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 0,   note: 'Câteva picături. Dr. Oetker, Haas sau Kotányi, la raftul de arome.', free: true },
    'cremor-tartru':    { name: 'Cremor tartru (sau zeamă de lămâie)', kcal: 0, protein: 0, carbs: 0, sugars: 0, fat: 0, fiber: 0, polyol: 0, ronKg: 0, note: 'Stabilizează albușul bătut. ⅛ linguriță la un albuș.', free: true },
  };

  Object.keys(P).forEach(function (k) { P[k].key = k; });
  window.PF_DESSERT_PANTRY = P;
})();
