/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — CĂMARA DE DESERTURI
 * File: js/data/10-dessert-pantry.js
 *
 * Ingredientele de bază pentru deserturi care NU sunt produse din atlas.
 *
 * REGULA CARE NU SE ÎNCALCĂ: dacă ingredientul există în atlas, rețeta îl
 * referă prin `id`, nu prin cămară. Cămara e pentru lucrurile pe care nimeni
 * nu le cumpără ca „sursă de proteină" și care deci n-au ce căuta în atlas:
 * cacao, îndulcitori, arome, praf de copt, fructe la kilogram.
 *
 * Valorile sunt la 100 g de produs așa cum se cumpără (uscat pentru pudre,
 * proaspăt pentru fructe). `ronKg` e o ESTIMARE, ca peste tot în proiect —
 * niciun preț din acest proiect nu e confirmat.
 *
 * `polyol` marchează gramele de polioli la 100 g. Contează: peste ~20-30 g de
 * polioli pe zi, majoritatea oamenilor au probleme digestive, iar un desert
 * „fără zahăr" poate livra atât dintr-o singură porție generoasă.
 * ========================================================================= */
(function () {
  'use strict';

  const P = {
    /* ---- îndulcitori --------------------------------------------------- */
    'eritritol':        { name: 'Eritritol',                    kcal: 20,  protein: 0,   carbs: 100, sugars: 0,  fat: 0,   fiber: 0,  polyol: 100, ronKg: 45,  note: 'Aproape zero calorii, dar răcorește pe limbă și cristalizează la rece.' },
    'xilitol':          { name: 'Xilitol',                      kcal: 240, protein: 0,   carbs: 100, sugars: 0,  fat: 0,   fiber: 0,  polyol: 100, ronKg: 55,  note: 'Gust cel mai apropiat de zahăr. TOXIC pentru câini.' },
    'stevie-pudra':     { name: 'Stevie (pudră, cu eritritol)',  kcal: 20,  protein: 0,   carbs: 98,  sugars: 0,  fat: 0,   fiber: 0,  polyol: 96,  ronKg: 70,  note: 'Amăreală la doze mari; se combină bine cu eritritol.' },
    'stevie-lichida':   { name: 'Stevie lichidă',               kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 400, note: 'Câteva picături. Nu dă volum, deci nu înlocuiește zahărul în coacere.' },
    'zahar':            { name: 'Zahăr alb',                    kcal: 400, protein: 0,   carbs: 100, sugars: 100, fat: 0,  fiber: 0,  polyol: 0,   ronKg: 5,   note: 'Referința. Apare în rețete unde chiar e nevoie de el.' },
    'miere':            { name: 'Miere',                        kcal: 304, protein: 0.3, carbs: 82,  sugars: 82, fat: 0,   fiber: 0.2, polyol: 0,  ronKg: 35,  note: 'Zahăr cu aromă. Nu e „mai sănătos", e mai gustos.' },
    'sirop-artar':      { name: 'Sirop de arțar',               kcal: 260, protein: 0,   carbs: 67,  sugars: 60, fat: 0,   fiber: 0,  polyol: 0,   ronKg: 90,  note: 'Idem mierea, cu altă aromă.' },
    'curmale':          { name: 'Curmale uscate (Medjool)',     kcal: 277, protein: 1.8, carbs: 75,  sugars: 66, fat: 0.2, fiber: 6.7, polyol: 0,  ronKg: 40,  note: 'Îndulcesc ȘI leagă. Baza oricărei bile energizante.' },

    /* ---- cacao și ciocolată -------------------------------------------- */
    'cacao':            { name: 'Cacao pudră neîndulcită',      kcal: 228, protein: 19.6, carbs: 58, sugars: 1.8, fat: 13.7, fiber: 37, polyol: 0, ronKg: 60,  note: '20 g de proteină la 100 g — cacao chiar contribuie.' },
    'cacao-alcalina':   { name: 'Cacao alcalinizată (Dutch)',   kcal: 220, protein: 18,  carbs: 55,  sugars: 1.5, fat: 13,  fiber: 33, polyol: 0,  ronKg: 75,  note: 'Mai închisă și mai puțin acră. NU reacționează cu bicarbonatul.' },
    'ciocolata-neagra': { name: 'Ciocolată neagră 85%',         kcal: 592, protein: 10.3, carbs: 22, sugars: 14, fat: 46,  fiber: 11, polyol: 0,   ronKg: 90,  note: 'Cea mai onestă indulgență din listă: puțin zahăr, multă grăsime.' },
    'fulgi-ciocolata':  { name: 'Fulgi de ciocolată fără zahăr', kcal: 500, protein: 6,  carbs: 55,  sugars: 1,  fat: 38,  fiber: 12, polyol: 40,  ronKg: 160, note: 'Scumpi și plini de polioli. 15 g pe porție e maximul rezonabil.' },

    /* ---- făinuri și structură ------------------------------------------ */
    'faina-migdale':    { name: 'Făină de migdale',             kcal: 610, protein: 21,  carbs: 8,   sugars: 4,  fat: 53,  fiber: 11, polyol: 0,   ronKg: 90,  note: 'Umezeală și structură. Nu are gluten, deci nu se întărește.' },
    'faina-ovaz':       { name: 'Făină de ovăz',                kcal: 380, protein: 13,  carbs: 60,  sugars: 1,  fat: 7,   fiber: 10, polyol: 0,   ronKg: 14,  note: 'Se face acasă: fulgi de ovăz dați prin râșniță. Jumătate din preț.' },
    'faina-cocos':      { name: 'Făină de cocos',               kcal: 400, protein: 18,  carbs: 24,  sugars: 8,  fat: 14,  fiber: 39, polyol: 0,   ronKg: 60,  note: 'Absoarbe de 4 ori greutatea ei în lichid. Se dozează cu grijă.' },
    'amidon-porumb':    { name: 'Amidon de porumb',             kcal: 381, protein: 0.3, carbs: 91,  sugars: 0,  fat: 0.1, fiber: 0.9, polyol: 0,  ronKg: 12,  note: 'Îngroașă cremele. O linguriță schimbă totul.' },
    'psyllium':         { name: 'Coajă de psyllium',            kcal: 200, protein: 2,   carbs: 85,  sugars: 0,  fat: 0.5, fiber: 80, polyol: 0,   ronKg: 90,  note: 'Imită glutenul. 3-5 g salvează un blat sfărâmicios.' },
    'praf-copt':        { name: 'Praf de copt',                 kcal: 53,  protein: 0,   carbs: 28,  sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 40,  note: '', free: true },
    'bicarbonat':       { name: 'Bicarbonat de sodiu',          kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 12,  note: 'Are nevoie de un acid ca să lucreze: iaurt, cacao naturală, lămâie.', free: true },
    'gelatina-foi':     { name: 'Gelatină foi',                 kcal: 335, protein: 84,  carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 120, note: 'Proteina ei NU se pune la ținta zilnică — zero triptofan.' },
    'agar':             { name: 'Agar-agar',                    kcal: 306, protein: 6,   carbs: 81,  sugars: 0,  fat: 0.3, fiber: 74, polyol: 0,   ronKg: 400, note: 'Varianta vegetală a gelatinei. Se fierbe, altfel nu se leagă.' },

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
    'gem-fara-zahar':   { name: 'Gem fără zahăr adăugat',       kcal: 130, protein: 0.5, carbs: 30,  sugars: 25, fat: 0.2, fiber: 1.5, polyol: 0,  ronKg: 30,  note: '„Fără zahăr adăugat" nu înseamnă fără zahăr — fructele îl au deja.' },

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
    'gheata':           { name: 'Gheață',                       kcal: 0,   protein: 0,   carbs: 0,   sugars: 0,  fat: 0,   fiber: 0,  polyol: 0,   ronKg: 0,   note: '', free: true }
  };

  Object.keys(P).forEach(function (k) { P[k].key = k; });
  window.PF_DESSERT_PANTRY = P;
})();
