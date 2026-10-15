/* =========================================================================
 * ATLASUL PROTEINELOR SIBIU — CLASICE REFĂCUTE PE PROTEINĂ
 * File: js/data/17-desserts-protein-classics.js
 * ID prefix: ds-
 * Ultima documentare: 2026-10
 *
 * Linia proteică avea deja 48 de deserturi, dar puține erau prăjiturile pe
 * care le-ar recunoaște o bunică din Sibiu. Fișierul ăsta adaugă clasicele:
 * lapte de pasăre, salam de biscuiți, cremșnit, tort diplomat, Albă ca
 * Zăpada, cozonac, griș cu lapte, găluște cu brânză — plus vecinii lor din
 * Austria, Ungaria și Ucraina, și patru rețete internaționale bine cotate.
 *
 * CE AM AFLAT CĂUTÂND
 * -------------------
 * Aproape nu există rețete românești „proteice" online. Există multe „fără
 * zahăr" (cozonacul lui Alex Cîrțu, laptele de pasăre al Biancăi Iordan),
 * dar proteina rămâne cea din original. Așa că rețetele de aici combină
 * structura unei rețete clasice citate cu tehnica unei rețete proteice
 * citate (Danone, Bulk Nutrients, Matt's Fit Chef, Hungry Hobby, Hayl's
 * Kitchen). Unde n-am găsit o sursă proteică testată, `dataConfidence` e
 * `low` și `tips` o spun.
 *
 * TREI REGULI DIN CERCETARE
 * -------------------------
 * 1. IZOLAT DE SOIA, NU WHEY ȘI NU CAZEINĂ. Utilizatorul e intolerant la
 *    lactoză și nu folosește pudre din lapte. Izolatul de soia are ~88%
 *    proteină și zero lactoză; leagă multă apă și se închegă la căldură
 *    (e proteina din tofu). În copt iese mai umed, dar mai dens decât
 *    whey-ul; în creme calde se adaugă ca pastă, sub 60 °C, altfel face
 *    granule. Are un gust ușor „de boabe", pe care cacao, citricele, romul,
 *    vanilia și un praf de sare îl ascund bine.
 * 2. PROTEINA PUDRĂ ≤ 25% DIN GREUTATEA FĂINII. Peste asta, aluatul iese
 *    cauciucat — e pragul pe care îl respectă toate rețetele de aici.
 * 3. NICIODATĂ PUDRĂ ÎN ALUATUL OPĂRIT (ecler) SAU ÎN FOIETAJ. Nu crește.
 *    Proteina vine din cremă, iar crema trebuie să fie mai multă.
 * ========================================================================= */
(function () {
  'use strict';

  const DESSERTS = [

    {
      id: 'ds-lapte-pasare-proteic',
      name: 'Lapte de pasăre proteic',
      emoji: '☁️',
      family: 'no-bake',
      craving: 'cremos',
      servings: 3,

      ing: [
        { id: 'd-lapte-15', g: 412 },
        { p: 'galbenus', g: 34 },
        { p: 'amidon-porumb', g: 10 },
        { id: 's-soy-protein-isolate', g: 40 },
        { p: 'miere', g: 12 },
        { p: 'zahar', g: 15 },
        { id: 'd-albus-lichid', g: 132 },
        { p: 'vanilie', g: 4, free: true },
        { p: 'scortisoara', g: 1, free: true }
      ],

      time: { total: 30, active: 25, chill: 60 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['cratiță', 'mixer', 'termometru (recomandat)', 'microunde'],

      steps: [
        'Încălzește 300 ml de lapte cu vanilia.',
        'Bate cele două gălbenușuri cu amidonul și restul de lapte rece. Toarnă peste ele laptele fierbinte, amestecând.',
        'Gătește la foc mic, amestecând, la 75–80 °C, până crema îmbracă lingura. Nu fierbe.',
        'Las-o să scadă sub 60 °C și amestecă mierea. Freacă izolatul de soia cu 3–4 linguri din cremă până faci o pastă, apoi bate pasta în toată crema 10 secunde, cu blenderul vertical. Pune la rece.',
        'Bate albușurile cu un praf de sare spumă moale, adaugă zahărul câte o linguriță și bate până se întăresc și lucesc.',
        'Pune câte o lingură de albuș într-o cană și dă-o 4–6 secunde la microunde, sau poșează găluștele 30 de secunde pe fiecare parte în apă care abia fierbe. Pune-le pe crema rece, cu scorțișoară.'
      ],

      tips: [
        'Laptele de pasăre clasic are deja ~14 g de proteină pe porție — dar și ~45 g de zahăr. Aici proteina crește la peste 20 g, iar zahărul adăugat scade la ~9 g: mierea din cremă și zahărul din albușuri.',
        'Zahărul din albușuri nu e doar pentru gust: ține spuma ca găluștele să nu se strângă la poșat. 15 g la patru albușuri e minimul care încă face asta.',
        'Proteina de soia se închegă la căldură, ca tofu: pusă în cremă peste 60 °C face granule. Răbdare cu răcirea, și întâi pasta.',
        'E unul dintre cele mai fidele remake-uri din pagină, pentru că desertul e oricum ou și lapte.'
      ],

      swaps: [
        { label: 'Varianta ușoară', text: 'Fără pudră, cu 3 ouă întregi: e „Lapte de pasăre light" de pe fila Ușoare, ~127 kcal și 9 g de proteină.' }
      ],

      warnings: ['Conține lactate, ou și soia.'],

      taste: { sweetness: 60, richness: 50, texture: 80, authenticity: 85 },

      vs: {
        name: 'Lapte de pasăre clasic, porție de casă',
        grams: 250, kcal: 370, protein: 14, carbs: 50, sugars: 45, fat: 10
      },
      vsSource: 'Clasicul calculat din savoriurbane.com („Lapte de pasăre": 1 L lapte, 8 gălbenușuri, 250 g zahăr, 6 porții). Trucul cu microundele: Bianca Iordan, nutriționist. Cercetare 2026-10.',

      sweetener: { kind: 'zahar', gPerServing: 9 },
      storage: 'Frigider, 2 zile. Găluștele se fac în ziua în care servești.',
      mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 4, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-salam-biscuiti-proteic',
      name: 'Salam de biscuiți proteic',
      emoji: '🍫',
      family: 'batch',
      craving: 'ciocolata',
      servings: 6,

      ing: [
        { p: 'biscuiti-simpli', g: 150 },
        { id: 's-soy-protein-isolate', g: 90 },
        { id: 'd-skyr-natural-pilos', g: 150 },
        { p: 'cacao', g: 20 },
        { p: 'miere', g: 15 },
        { p: 'stafide', g: 40 },
        { p: 'cocos-fulgi', g: 10 },
        { p: 'sare', g: 0.3, free: true }
      ],

      time: { total: 15, active: 15, chill: 240 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['bol', 'folie alimentară'],

      steps: [
        'Rupe biscuiții în bucăți de ~1 cm. Nu-i face pe toți pesmet — bucățile se văd la tăiere.',
        'Bate skyr-ul cu cacao, mierea, câteva picături de esență de rom și izolatul de soia, până ai o „ganache" groasă și netedă. Soia îngroașă mult: dacă se face chit, mai pune lapte, câte o lingură.',
        'Amestecă biscuiții și stafidele și lasă 10 minute, ca biscuiții să se înmoaie.',
        'Formează un sul pe folie alimentară și rostogolește-l prin fulgii de cocos.',
        '30 de minute la congelator, apoi cel puțin 4 ore la frigider. Se taie rece.'
      ],

      tips: [
        'La tăiere arată identic cu cel din copilărie. E mai puțin „fudgy" și mai aproape de un cheesecake de ciocolată — 15 g de unt în cremă îl apropie (+20 kcal pe porție).',
        'Cacao și romul acoperă gustul ușor „de boabe" al soiei; un praf de sare face restul. E rețeta în care soia se simte cel mai puțin.',
        'Biscuiții sunt singura sursă serioasă de zahăr adăugat. Câți pui decide cât de „cheat" e.'
      ],

      swaps: [
        { label: 'Cu rahat', text: '40 g de rahat tăiat cubulețe în loc de stafide, ca în rețeta Jamilei. Zahărul crește cu ~5 g pe porție.' }
      ],

      warnings: ['Conține lactate, soia și gluten.', 'Esența de rom are urme de alcool.'],

      taste: { sweetness: 65, richness: 55, texture: 70, authenticity: 80 },

      vs: {
        name: 'Salam de biscuiți clasic, 2 felii groase',
        grams: 85, kcal: 396, protein: 3.7, carbs: 54, sugars: 35, fat: 18
      },
      vsSource: 'Clasicul după Jamila Cuisine („Salam de biscuiți", 313 kcal la ~95 g); valorile la 100 g după FatSecret („salame di cioccolato", 466 kcal). Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 2.5 },
      storage: 'Frigider, 3 zile — apoi biscuiții se înmoaie prea tare. Congelat, 3 luni.',
      mealFit: { desert: 5, gustare: 5, micDejun: 1, postAntrenament: 4, seara: 3 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-cremsnit-proteic',
      name: 'Cremșnit proteic',
      emoji: '🍰',
      family: 'batch',
      craving: 'patiserie',
      servings: 9,

      ing: [
        { p: 'foietaj', g: 320 },
        { id: 'd-lapte-15', g: 618 },
        { p: 'galbenus', g: 51 },
        { p: 'amidon-porumb', g: 40 },
        { id: 's-soy-protein-isolate', g: 80 },
        { id: 'd-skyr-natural-pilos', g: 300 },
        { id: 's-gelatin-powder', g: 20 },
        { id: 'd-albus-lichid', g: 165 },
        { p: 'miere', g: 25 },
        { p: 'zahar', g: 35 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 60, active: 45, chill: 240 },
      effort: 4,
      difficulty: 'greu',
      equipment: ['tavă de 20×20 cm', 'cratiță', 'mixer'],

      steps: [
        'Coace cele două foi de foietaj înțepate cu furculița, cu o tavă pusă peste ele, 15–18 minute la 200 °C. Așa rămân plate. Răcește-le și taie foaia de sus în 9 pătrate.',
        'Hidratează gelatina în 100 ml de apă rece.',
        'Fă o cremă groasă din lapte, cele 3 gălbenușuri și amidon. De pe foc, topește în ea gelatina și mierea.',
        'Răcește crema la 50 °C. Freacă izolatul de soia cu skyr-ul până e o pastă netedă și bate-o în cremă.',
        'Bate albușurile cu 30 g de zahăr, adăugat treptat, spumă tare și încorporează-le în crema caldă, nu fierbinte.',
        'Foaie, cremă, pătratele de deasupra. Cel puțin 4 ore la frigider, apoi pudrează cu 5 g de zahăr pudră, cât să se vadă.'
      ],

      tips: [
        'Aproape toată grăsimea vine din foietaj, nu din cremă. Cu o singură foaie jos și biscuiți deasupra scazi ~70 kcal pe pătrat.',
        'Pătratele de sus tăiate înainte de asamblare sunt singurul mod de a tăia un cremșnit fără să-l strivești.',
        'Bulk Nutrients publică un „vanilla slice" proteic aproape identic — 265 kcal, 16,5 g proteină. Rețeta asta e în aceeași zonă.'
      ],

      swaps: [
        { label: 'Fără foietaj sus', text: 'Doar foaia de jos și cremă, pudrată cu cacao: ~210 kcal pe porție.' }
      ],

      warnings: [
        'Conține lactate, ou, soia și gluten.',
        '~2 g din proteina unei porții vin din gelatină.',
        'Foietajul se înmoaie după 24 de ore — se asamblează în ziua servirii.'
      ],

      taste: { sweetness: 60, richness: 60, texture: 75, authenticity: 78 },

      vs: {
        name: 'Cremșnit de cofetărie, pătrat',
        grams: 170, kcal: 436, protein: 5, carbs: 35, sugars: 25, fat: 30
      },
      vsSource: 'Clasicul după fișele de rețetă „Cremeschnitte" (whereismyspoon.co, mission-food.com, 436 kcal); tehnica proteică după Bulk Nutrients („High protein vanilla slice"). Zahărul e estimat.',

      sweetener: { kind: 'zahar', gPerServing: 6.5 },
      storage: 'Frigider, 2 zile. Crema ține, foietajul nu.',
      mealFit: { desert: 5, gustare: 3, micDejun: 1, postAntrenament: 3, seara: 3 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-tort-diplomat-skyr',
      name: 'Tort diplomat cu skyr și fructe',
      emoji: '🎂',
      family: 'batch',
      craving: 'fructat',
      servings: 10,

      ing: [
        { p: 'piscoturi', g: 150 },
        { p: 'suc-portocale', g: 80 },
        { id: 'd-skyr-natural-pilos', g: 800 },
        { id: 'd-branza-vaci-covalact-05', g: 300 },
        { id: 's-soy-protein-isolate', g: 55 },
        { id: 's-gelatin-powder', g: 20 },
        { p: 'miere', g: 35 },
        { p: 'capsuni', g: 400 },
        { p: 'lamaie', g: 5 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 30, active: 30, chill: 360 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['formă cu pereți detașabili de 22 cm', 'blender vertical'],

      steps: [
        'Tapetează forma cu folie. Atinge pișcoturile de suc — doar atât — și fă din ele baza.',
        'Hidratează gelatina în 100 ml de apă rece, apoi topește-o încet, fără să fiarbă.',
        'Blenduiește brânza până e netedă și bate-o cu skyr-ul, izolatul de soia, mierea, vanilia și coaja de lămâie. Soia îngroașă crema; dacă e prea densă, puțin suc de portocale.',
        'Amestecă trei linguri de cremă în gelatină, ca s-o temperezi, apoi toarn-o în toată crema.',
        'Încorporează jumătate din căpșuni, toarnă peste pișcoturi și pune restul deasupra.',
        'Cel puțin 6 ore la frigider, ideal peste noapte.'
      ],

      tips: [
        'Nu kiwi și nici ananas proaspăt în cremă — enzimele lor nu lasă gelatina să se închege. Ananasul din conservă e în regulă.',
        'Gelatina turnată direct în cremă rece face fire. Temperarea durează 30 de secunde și salvează tortul.',
        'Rudă cu trifle-ul cu vișine de pe pagină, dar ăsta e tortul întreg, de felie, pentru ziua cuiva.'
      ],

      swaps: [
        { label: 'Mai pufos', text: '100 ml de frișcă 30% bătută, încorporată la sfârșit: +27 kcal pe felie și textura clasică de mousse.' }
      ],

      warnings: ['Conține lactate, ou, soia și gluten.', '~2 g din proteina unei felii vin din gelatină.'],

      taste: { sweetness: 60, richness: 50, texture: 80, authenticity: 78 },

      vs: {
        name: 'Tort diplomat clasic, felie',
        grams: 170, kcal: 430, protein: 9, carbs: 57, sugars: 35, fat: 18
      },
      vsSource: 'Clasicul calculat din bzi.ro („Tort diplomat simplu": 500 g pișcoturi, 500 ml frișcă, 200 g zahăr, 12 felii); sfaturile despre gelatină din evz.ro. Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 3.5 },
      storage: 'Frigider, 3 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 5, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-alba-ca-zapada-proteica',
      name: 'Albă ca Zăpada proteică',
      emoji: '🤍',
      family: 'batch',
      craving: 'patiserie',
      servings: 9,

      ing: [
        { p: 'faina-alba', g: 120 },
        { id: 's-soy-protein-isolate', g: 30 },
        { p: 'miere', g: 30 },
        { id: 'd-oua-gaina-l', g: 60 },
        { p: 'unt', g: 20 },
        { id: 'd-skyr-natural-pilos', g: 430 },
        { p: 'bicarbonat', g: 2, free: true },
        { id: 'd-lapte-15', g: 515 },
        { p: 'gris', g: 50 },
        { id: 's-soy-protein-isolate', g: 40 },
        { p: 'miere', g: 30 },
        { p: 'lamaie', g: 35 }
      ],

      time: { total: 70, active: 45, chill: 720 },
      effort: 4,
      difficulty: 'greu',
      equipment: ['tavă de 20×20 cm', 'mixer', 'cratiță'],

      steps: [
        'Încălzește mierea cu untul pe baie de aburi, adaugă oul și bicarbonatul, apoi făina, 30 g de izolat de soia și 30 g de skyr. Frământă un aluat moale, împarte-l în două și lasă-l 15 minute.',
        'Întinde fiecare jumătate la 20×20 cm și coace foile pe dosul tăvii, 7–8 minute la 180 °C.',
        'Fierbe grișul în lapte 8–10 minute, până e un terci gros. Răcește-l complet, cu folie pe suprafață.',
        'Bate grișul rece cu restul de skyr, 40 g de izolat de soia, 30 g de miere, coaja și zeama de lămâie, până devine pufos.',
        'Foaie, cremă, foaie. Pune ceva ușor deasupra.',
        'Cel puțin 12 ore la frigider — foile trebuie să se înmoaie.'
      ],

      tips: [
        'Mierea e singurul îndulcit, în foi și în cremă: ~5,5 g de zahăr adăugat pe porție, față de ~30 g la cofetărie. Lămâia face crema să pară mai dulce decât e.',
        'Soia pusă în grișul cald se închegă în granule. Doar în grișul complet rece.',
        'În foi, soia e un sfert din greutatea făinii — pragul peste care aluatul devine dens. Foile ies mai moi decât cele clasice, ceea ce aici e un avantaj.',
        'Fără noaptea la frigider, foile rămân tari. Nu e opțional.'
      ],

      swaps: [],

      warnings: ['Conține lactate, ou, soia și gluten.'],

      taste: { sweetness: 60, richness: 50, texture: 75, authenticity: 78 },

      vs: {
        name: 'Albă ca Zăpada, felie de cofetărie',
        grams: 110, kcal: 350, protein: 6, carbs: 50, sugars: 30, fat: 14
      },
      vsSource: 'Structura clasică (foi cu miere și cremă de griș cu lămâie); comparația e o estimare din ingrediente — n-am găsit valori publicate. N-am găsit nici o variantă proteică testată.',

      sweetener: { kind: 'miere', gPerServing: 6.5 },
      storage: 'Frigider, 4 zile. A doua zi e mai bună decât prima.',
      mealFit: { desert: 5, gustare: 4, micDejun: 2, postAntrenament: 4, seara: 4 },
      dataConfidence: 'low'
    },

    {
      id: 'ds-cozonac-cazeina',
      name: 'Cozonac proteic cu nucă și cacao',
      emoji: '🍞',
      family: 'batch',
      craving: 'patiserie',
      servings: 8,

      ing: [
        { p: 'faina-alba', g: 250 },
        { id: 's-soy-protein-isolate', g: 90 },
        { p: 'drojdie-uscata', g: 7 },
        { p: 'miere', g: 10 },
        { id: 'd-branza-vaci-covalact-05', g: 200 },
        { id: 'd-oua-gaina-l', g: 75 },
        { id: 'd-lapte-15', g: 120 },
        { p: 'unt', g: 25 },
        { p: 'miere', g: 35 },
        { id: 'v-nuci', g: 80 },
        { p: 'cacao', g: 10 },
        { id: 'd-albus-lichid', g: 60 },
        { p: 'lamaie', g: 10 },
        { p: 'vanilie', g: 5, free: true }
      ],

      time: { total: 200, active: 40, chill: 0 },
      effort: 5,
      difficulty: 'greu',
      equipment: ['mixer cu cârlig sau robot', 'tavă de chec de 25 cm', 'termometru (opțional)'],

      steps: [
        'Activează drojdia în laptele călduț (100 ml) cu mierea, 10 minute.',
        'Blenduiește brânza cu oul și 20 g de miere. Adaugă făina, 60 g de izolat de soia, coaja de lămâie și portocală, esența de rom, un praf de sare și drojdia. Frământă 8–10 minute, iar la sfârșit untul moale. Soia trage apă: dacă aluatul e tare, încă 1–2 linguri de lapte.',
        'Lasă la crescut, acoperit, 60–75 de minute. Crește de vreo 1,5 ori, nu de 2 — proteina adăugată îl încetinește.',
        'Pentru umplutură, bate nuca măcinată cu 30 g de izolat de soia, cacao, albușul, 15 g de miere și 20 ml de lapte.',
        'Întinde aluatul la 30×40 cm, unge umplutura, rulează-l, taie sulul în două pe lungime și împletește-l. Pune-l în tavă, încă 30 de minute la crescut, apoi unge-l cu ou.',
        'Coace 35–40 de minute la 170 °C, acoperit cu folie după 15. Răcește-l învelit într-un prosop, ca să se înmoaie coaja.'
      ],

      tips: [
        'În aluat, soia e 24% din greutatea făinii, chiar sub pragul de 25%; restul de 30 g stă în umplutură, unde nu încurcă. Miezul iese tot mai strâns decât la bunica, fără firele lungi — gustul de citrice, rom și nucă e cel corect și acoperă soia.',
        'Mierea din aluat hrănește și drojdia, nu doar gustul. Tot ea face coaja să se rumenească mai repede — de aici folia după 15 minute.',
        'Copt prea mult se usucă repede. Scoate-l la 92–95 °C în miez.'
      ],

      swaps: [
        { label: 'Mai pufos', text: '45 g de soia în aluat în loc de 60 și 20 g de făină în plus: miez mai aerat, ~1,5 g de proteină în minus pe felie.' }
      ],

      warnings: ['Conține lactate, ou, soia, gluten și nuci.'],

      taste: { sweetness: 55, richness: 55, texture: 65, authenticity: 70 },

      vs: {
        name: 'Cozonac cu nucă, felie groasă',
        grams: 110, kcal: 400, protein: 8.5, carbs: 50, sugars: 18, fat: 19
      },
      vsSource: 'Clasicul după cristinaskitchen.com („My perfect cozonac", 362 kcal la 90 g) și folositor.ro; varianta fără zahăr după Alex Cîrțu (Freshful). Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 5.5 },
      storage: 'Învelit, 3 zile. Feliat și congelat, 2 luni.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 4, seara: 3 },
      dataConfidence: 'low'
    },

    {
      id: 'ds-gris-cazeina',
      name: 'Griș cu lapte proteic, gata în 10 minute',
      emoji: '🥣',
      family: 'mug',
      craving: 'cremos',
      servings: 2,

      ing: [
        { id: 'd-lapte-15', g: 412 },
        { p: 'gris', g: 40 },
        { id: 's-soy-protein-isolate', g: 30 },
        { p: 'miere', g: 8 },
        { p: 'lamaie', g: 3 },
        { p: 'gem-fara-zahar', g: 40 },
        { p: 'scortisoara', g: 1, free: true }
      ],

      time: { total: 10, active: 10, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['cratiță', 'tel'],

      steps: [
        'Adu laptele la fiert cu coaja de lămâie și un praf de sare.',
        'Adaugă grișul în ploaie, amestecând, și fierbe 5–6 minute, până se îngroașă.',
        'Ia de pe foc și lasă 3–4 minute. Fă o pastă din izolatul de soia, miere și 3 linguri de lapte rece, apoi bate-o în griș. Dacă s-a îngroșat prea tare, un strop de lapte.',
        'Servește cald sau rece, cu gem și scorțișoară.'
      ],

      tips: [
        'Cel mai rapid desert proteic cald din pagină. Pasta e tot secretul: soia pusă ca pudră în grișul fierbinte se închegă în cocoloașe.',
        'Lămâia și scorțișoara acoperă gustul de soia. Fără ele se simte.',
        'Gemul „fără zahăr adăugat" tot are zahăr — din fructe. 5 g pe porție.'
      ],

      swaps: [
        { label: 'Ușor', text: 'Fără pudră e grișul de pe fila Ușoare, ~116 kcal și 6 g de proteină.' }
      ],

      warnings: ['Conține lactate, soia și gluten.'],

      taste: { sweetness: 55, richness: 50, texture: 75, authenticity: 85 },

      vs: {
        name: 'Griș cu lapte integral, zahăr și gem, bol',
        grams: 250, kcal: 330, protein: 10, carbs: 52, sugars: 30, fat: 8
      },
      vsSource: 'Estimare din ingrediente pentru varianta de casă (200 ml lapte integral, 30 g griș, 20 g zahăr, gem). Tehnica cu proteina adăugată de pe foc: worldclass.ro. Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 4 },
      storage: 'Frigider, 2 zile.',
      mealFit: { desert: 5, gustare: 4, micDejun: 5, postAntrenament: 5, seara: 5 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-syrniki',
      name: 'Syrniki — chiftele dulci de brânză, la tigaie',
      emoji: '🥞',
      family: 'baked',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 360 },
        { id: 'd-oua-gaina-l', g: 60 },
        { p: 'faina-ovaz', g: 25 },
        { id: 's-soy-protein-isolate', g: 15 },
        { p: 'miere', g: 4 },
        { p: 'faina-alba', g: 10 },
        { p: 'ulei-cocos', g: 5 },
        { p: 'fructe-padure', g: 100 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 40 },
        { p: 'lamaie', g: 3 }
      ],

      time: { total: 70, active: 20, chill: 40 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['tifon', 'tigaie antiaderentă sau air fryer'],

      steps: [
        'Pune brânza în tifon și presează-o 30 de minute. Apoi zdrobește-o cu furculița — nu cu blenderul.',
        'Amestecă oul, făina de ovăz, izolatul de soia, mierea și coaja de lămâie. 30 de minute la frigider.',
        'Formează 8 chiftele groase de 2 cm, dă-le prin făină și ține-le 10 minute la congelator.',
        'Prăjește-le în tigaia abia unsă, la foc mediu-mic, 4 minute pe fiecare parte. Sau 10 minute în air fryer la 180 °C.',
        'Servește câte 4 cu fructe și iaurt.'
      ],

      tips: [
        'Brânza udă cere mai multă făină și chiftelele se lățesc. Presatul nu e opțional.',
        'Brânza 0% și mierea se rumenesc repede; de aici focul mediu-mic. În air fryer, 170 °C, nu 180.',
        'Pentru cine le vede prima dată: sunt papanași fără gaură și fără smântână.'
      ],

      swaps: [
        { label: 'Ca papanașii', text: 'Cu 30 g de smântână 20% și 20 g de gem de afine în loc de iaurt și fructe: +50 kcal.' }
      ],

      warnings: ['Conține lactate, ou, soia și ovăz.'],

      taste: { sweetness: 50, richness: 55, texture: 80, authenticity: 85 },

      vs: {
        name: 'Syrniki prăjiți cu smântână și gem, 4 bucăți',
        grams: 220, kcal: 450, protein: 20, carbs: 40, sugars: 20, fat: 22
      },
      vsSource: 'După Matt\'s Fit Chef („Healthy syrniki", 338 kcal / 33 g proteină) și Havoc in the Kitchen (tehnica). Varianta clasică: estimare din ingrediente.',

      sweetener: { kind: 'miere', gPerServing: 2 },
      storage: 'Frigider, 2 zile; se reîncălzesc în tigaie sau air fryer. Crude, congelate, o lună.',
      mealFit: { desert: 5, gustare: 3, micDejun: 5, postAntrenament: 5, seara: 3 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-kaiserschmarrn',
      name: 'Kaiserschmarrn cu skyr și piure de mere',
      emoji: '🥞',
      family: 'baked',
      craving: 'patiserie',
      servings: 2,

      ing: [
        { id: 'd-oua-gaina-l', g: 120 },
        { id: 'd-albus-lichid', g: 100 },
        { id: 'd-skyr-natural-pilos', g: 160 },
        { p: 'faina-alba', g: 50 },
        { id: 's-soy-protein-isolate', g: 15 },
        { p: 'praf-copt', g: 3, free: true },
        { p: 'zahar', g: 6 },
        { p: 'unt', g: 5 },
        { p: 'mere', g: 130 },
        { p: 'scortisoara', g: 1, free: true }
      ],

      time: { total: 20, active: 15, chill: 0 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['tigaie de 26 cm care merge la cuptor', 'mixer'],

      steps: [
        'Separă ouăle. Bate gălbenușurile cu skyr-ul, făina, izolatul de soia și praful de copt.',
        'Bate toate albușurile cu zahărul spumă tare și încorporează-le ușor.',
        'Topește untul în tigaie, toarnă aluatul și gătește 4 minute la foc mediu.',
        'Termină 8 minute la cuptor, la 190 °C, sau întoarce-l.',
        'Rupe-l în bucăți cu două furculițe, mai ține-l un minut pe foc și servește-l cu piure de mere cu scorțișoară.'
      ],

      tips: [
        'Zahărul din albușuri e cel care face crusta caramelizată de la cabana din Alpi. Încă 5 g presărate în tigaie la final o întăresc, pentru 20 kcal.',
        'Albușurile amestecate prea mult se dezumflă și iese o omletă. Puțin și de jos în sus.'
      ],

      swaps: [
        { label: 'Cu prune', text: 'Prune fierte fără zahăr, ca „Zwetschgenröster" austriac, în loc de mere.' }
      ],

      warnings: ['Conține ou, lactate, soia și gluten.'],

      taste: { sweetness: 50, richness: 55, texture: 80, authenticity: 85 },

      vs: {
        name: 'Kaiserschmarrn cu compot de prune, porție de restaurant',
        grams: 300, kcal: 570, protein: 19, carbs: 80, sugars: 45, fat: 18
      },
      vsSource: 'După Danone Deutschland („HP Kaiserschmarrn" cu skyr) și tirol.at („Quark-Kaiserschmarrn", varianta clasică). Cercetare 2026-10.',

      sweetener: { kind: 'zahar', gPerServing: 3 },
      storage: 'Se mănâncă pe loc.',
      mealFit: { desert: 5, gustare: 3, micDejun: 5, postAntrenament: 5, seara: 3 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-galuste-branza',
      name: 'Găluște cu brânză, cu pesmet și vișine',
      emoji: '⚪',
      family: 'baked',
      craving: 'patiserie',
      servings: 3,

      ing: [
        { id: 'd-branza-vaci-covalact-05', g: 400 },
        { id: 'd-oua-gaina-l', g: 60 },
        { id: 'd-albus-lichid', g: 50 },
        { p: 'gris', g: 50 },
        { id: 's-soy-protein-isolate', g: 15 },
        { p: 'miere', g: 6 },
        { p: 'zahar', g: 5 },
        { p: 'pesmet', g: 20 },
        { p: 'unt', g: 5 },
        { id: 'd-iaurt-grecesc-olympus-2', g: 60 },
        { p: 'visine-congelate', g: 90 },
        { p: 'lamaie', g: 3 }
      ],

      time: { total: 155, active: 25, chill: 120 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['oală mare', 'spumieră', 'tigaie'],

      steps: [
        'Amestecă brânza scursă, oul, albușul, grișul, izolatul de soia, mierea și coaja de lămâie. Cel puțin 2 ore la frigider, ca grișul să se umfle.',
        'Prăjește pesmetul în unt până se rumenește, apoi adaugă scorțișoară și zahărul.',
        'Fă o găluscă de probă: dacă se desface, mai pune o lingură de griș; dacă e tare, o lingură de brânză.',
        'Cu mâinile ude, formează 9 găluște și pune-le în apă cu sare care abia fierbe. Fierbe-le 3 minute după ce ies la suprafață.',
        'Rostogolește-le prin pesmet și servește-le cu iaurt și vișine.'
      ],

      tips: [
        'Porția de restaurant (Topfenknödel, túrógombóc) are 760–860 kcal, aproape toate din pesmetul prăjit în mult unt. Aici pesmetul rămâne, untul nu.',
        'Apa trebuie doar să freamăte. În clocot, găluștele se desfac.',
        'Găluștele cu brânză sunt la ele acasă în Ardeal și Banat — rețeta asta e mai aproape de bucătăria locală decât orice brownie.'
      ],

      swaps: [
        { label: 'Cu caise', text: 'Caise fierte fără zahăr în loc de vișine.' }
      ],

      warnings: ['Conține lactate, ou, soia și gluten.'],

      taste: { sweetness: 45, richness: 50, texture: 80, authenticity: 80 },

      vs: {
        name: 'Găluște cu brânză și pesmet cu unt, porție de restaurant',
        grams: 280, kcal: 800, protein: 33, carbs: 75, sugars: 25, fat: 34
      },
      vsSource: 'Clasicul după telex.hu („túrógombóc") și Offbeat Budapest; porția de restaurant după lecker.de (860 kcal) și Cookidoo (764 kcal). Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 3.5 },
      storage: 'Frigider, 2 zile, fără pesmet. Se reîncălzesc în apă fierbinte.',
      mealFit: { desert: 5, gustare: 3, micDejun: 4, postAntrenament: 5, seara: 3 },
      dataConfidence: 'medium'
    },

    /* =================== INTERNAȚIONALE, BINE COTATE ==================== */

    {
      id: 'ds-placinta-dovleac-proteica',
      name: 'Plăcintă americană de dovleac, cu blat de ovăz',
      emoji: '🥧',
      family: 'batch',
      craving: 'patiserie',
      servings: 6,
      season: [9, 10, 11, 12],

      ing: [
        { id: 'v-fulgi-ovaz-mari', g: 120 },
        { p: 'unt', g: 20 },
        { id: 'd-albus-lichid', g: 33 },
        { p: 'miere', g: 10 },
        { p: 'piure-dovleac', g: 400 },
        { id: 'd-lapte-15', g: 206 },
        { id: 'd-skyr-natural-pilos', g: 150 },
        { id: 's-soy-protein-isolate', g: 55 },
        { id: 'd-oua-gaina-l', g: 120 },
        { id: 'd-albus-lichid', g: 33 },
        { p: 'miere', g: 15 },
        { p: 'scortisoara', g: 5, free: true }
      ],

      time: { total: 80, active: 20, chill: 120 },
      effort: 3,
      difficulty: 'mediu',
      equipment: ['tavă de plăcintă de 22–23 cm', 'blender'],

      steps: [
        'Macină fulgii de ovăz, amestecă-i cu untul topit, albușul, mierea și un praf de sare, presează-i în tavă și coace 10 minute la 180 °C.',
        'Blenduiește dovleacul copt cu laptele, skyr-ul, izolatul de soia, ouăle, albușul, 15 g de miere și condimentele (scorțișoară, ghimbir, nucșoară, un vârf de cuișoare). Nu mixa mult după ce pui ouăle.',
        'Toarnă peste blat și coace 45–50 de minute la 175 °C, acoperită cu folie după 25. E gata când mijlocul încă tremură ușor.',
        'Răcește 2 ore, apoi peste noapte la frigider.'
      ],

      tips: [
        'Originalul e oricum o cremă de ouă și dovleac — de aceea proteina se ascunde atât de bine sub condimente.',
        'Piureul de dovleac apos se scurge sau se scade la tigaie. Conservele americane sunt rare aici; dovleacul plăcintar copt e mai bun oricum.',
        'Coaptă prea mult crapă la mijloc. Mierea o rumenește mai repede decât zahărul — folia după 25 de minute nu e opțională.'
      ],

      swaps: [
        { label: 'Cu blat de biscuiți', text: '100 g de biscuiți simpli cu 20 g de unt în loc de ovăz: +30 kcal pe felie, gust mai aproape de original.' }
      ],

      warnings: ['Conține lactate, ou, soia și ovăz.'],

      taste: { sweetness: 55, richness: 55, texture: 80, authenticity: 82 },

      vs: {
        name: 'Plăcintă cu dovleac (pumpkin pie), 1/8 de tavă',
        grams: 155, kcal: 320, protein: 6, carbs: 42, sugars: 24, fat: 14
      },
      vsSource: 'După Hayl\'s Kitchen („Protein pumpkin pie", 4,4★); originalul după USDA (~243 kcal / 4,5 g proteină la 100 g). Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 4 },
      storage: 'Frigider, 4 zile.',
      mealFit: { desert: 5, gustare: 5, micDejun: 4, postAntrenament: 5, seara: 4 },
      dataConfidence: 'medium'
    },

    {
      id: 'ds-rulouri-scortisoara',
      name: 'Rulouri cu scorțișoară, fără drojdie',
      emoji: '🌀',
      family: 'baked',
      craving: 'patiserie',
      servings: 6,

      ing: [
        { p: 'faina-alba', g: 190 },
        { id: 's-soy-protein-isolate', g: 45 },
        { p: 'miere', g: 10 },
        { p: 'zahar', g: 15 },
        { p: 'praf-copt', g: 6, free: true },
        { id: 'd-iaurt-grecesc-olympus-2', g: 240 },
        { p: 'unt', g: 25 },
        { p: 'scortisoara', g: 6, free: true },
        { id: 'd-skyr-natural-pilos', g: 80 },
        { id: 's-soy-protein-isolate', g: 25 },
        { id: 'd-lapte-15', g: 20 }
      ],

      time: { total: 40, active: 15, chill: 0 },
      effort: 2,
      difficulty: 'mediu',
      equipment: ['cuptor sau air fryer', 'tavă mică'],

      steps: [
        'Încălzește cuptorul la 170 °C. Amestecă făina, 45 g de izolat de soia, praful de copt și un praf de sare.',
        'Adaugă iaurtul amestecat cu mierea și frământă 2 minute. Dacă se lipește, puțină făină.',
        'Întinde un dreptunghi de 0,5 cm, unge-l cu untul topit și presară zahărul amestecat cu scorțișoara.',
        'Taie 6 fâșii late, rulează-le și așază-le în tavă.',
        'Coace 20–24 de minute, până se rumenesc. Amestecă skyr-ul cu 25 g de izolat de soia și laptele, adăugat câte o lingură, și unge rulourile călduțe, chiar înainte de servire.'
      ],

      tips: [
        'Aluatul e de tip „biscuit", fără drojdie — mai dens decât cel dospit, dar gata în 40 de minute.',
        'Soia ține aluatul umed, dar îl face mai dens: 45 g la 190 g de făină e chiar sub pragul de 25%. Mai mult și rulourile ies ca niște chifle grele.',
        'În glazură soia se îngroașă repede — laptele se pune treptat, iar vanilia și scorțișoara acoperă gustul.',
        'Scoate-le la primul semn de auriu. Încă două minute și se usucă. Cu miere în aluat se rumenesc mai repede, de aceea 170 °C și nu 180.',
        'Zahărul cu scorțișoară din rulou e singurul loc unde rețeta păstrează zahăr: topit, el face dâra lipicioasă din mijloc. Sunt 2,5 g pe rulou.'
      ],

      swaps: [
        { label: 'Air fryer', text: '160 °C, 12–14 minute, într-o tavă mică.' }
      ],

      warnings: ['Conține lactate, soia și gluten.'],

      taste: { sweetness: 60, richness: 55, texture: 70, authenticity: 72 },

      vs: {
        name: 'Rulou cu scorțișoară și glazură, de cafenea',
        grams: 100, kcal: 452, protein: 4.4, carbs: 56, sugars: 26, fat: 22
      },
      vsSource: 'După Matt\'s Fit Chef („Protein cinnamon rolls", 5★) și Basics with Bails; originalul după USDA („Roll, sweet, cinnamon bun, frosted"). Cercetare 2026-10.',

      sweetener: { kind: 'zahar', gPerServing: 4 },
      storage: 'Cutie închisă, 2 zile, fără glazură. Se încălzesc 15 secunde la microunde.',
      mealFit: { desert: 5, gustare: 4, micDejun: 5, postAntrenament: 4, seara: 3 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-aluat-cookie-branza',
      name: 'Aluat de cookie din brânză, de mâncat cu lingura',
      emoji: '🍪',
      family: 'no-bake',
      craving: 'crocant',
      servings: 2,

      ing: [
        { id: 'd-branza-vaci-pilos-65', g: 200 },
        { id: 's-soy-protein-isolate', g: 28 },
        { p: 'faina-migdale', g: 25 },
        { p: 'miere', g: 10 },
        { p: 'ciocolata-neagra', g: 15 },
        { p: 'vanilie', g: 4, free: true },
        { p: 'sare', g: 0.5, free: true }
      ],

      time: { total: 40, active: 8, chill: 30 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender sau tocător vertical'],

      steps: [
        'Blenduiește brânza cu mierea și vanilia până e perfect netedă.',
        'Amestecă izolatul de soia, făina de migdale și sarea. Dacă aluatul iese prea tare, o lingură de lapte.',
        'Încorporează ciocolata tocată.',
        '30 de minute la frigider, ca să se întărească. Se mănâncă cu lingura sau ca bile din congelator.'
      ],

      tips: [
        'Cea mai votată rețetă din toată cercetarea: varianta virală de pe TikTok, cu sute de note de 5 stele pe bloguri.',
        'Brânza slabă face aluatul apos; 6,5% e minimul. Și scurge-o bine.',
        'Varianta originală e cu whey; cu soia aluatul iese mai dens și mai „de pastă". Vanilia multă și ciocolata acoperă gustul.',
        'Cu făină de ovăz în loc de migdale, făina trebuie încălzită 2 minute în tigaie — făina crudă poate avea E. coli.'
      ],

      swaps: [
        { label: 'Cu ovăz', text: '25 g de făină de ovăz încălzită în tigaie: −50 kcal pe porție, gust mai „de biscuit".' }
      ],

      warnings: ['Conține lactate, soia și migdale.'],

      taste: { sweetness: 55, richness: 60, texture: 70, authenticity: 70 },

      vs: {
        name: 'Aluat de cookie comestibil, cumpărat, 100 g',
        grams: 100, kcal: 450, protein: 4.5, carbs: 60, sugars: 38, fat: 21
      },
      vsSource: 'După The Healthy Maven și Basics with Bails („Cottage cheese cookie dough", 4,5★ din 79) și Chocolate Covered Katie (5★ din 294). Comparația: estimare din etichete tipice, 2026.',

      sweetener: { kind: 'miere', gPerServing: 5 },
      storage: 'Frigider, 3 zile. Bilele congelate, o lună.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 4, seara: 4 },
      dataConfidence: 'high'
    },

    {
      id: 'ds-inghetata-anabolica',
      name: 'Înghețată „anabolică" la blender, un castron întreg',
      emoji: '🍨',
      family: 'frozen',
      craving: 'inghetata',
      servings: 1,

      ing: [
        { id: 's-soy-protein-isolate', g: 28 },
        { p: 'capsuni', g: 150 },
        { id: 'd-lapte-15', g: 120 },
        { p: 'gheata', g: 130 },
        { p: 'guma-xantan', g: 1.5 },
        { p: 'miere', g: 8 }
      ],

      time: { total: 7, active: 5, chill: 0 },
      effort: 1,
      difficulty: 'usor',
      equipment: ['blender puternic'],

      steps: [
        'Pune laptele în blender, apoi izolatul de soia, xantanul și mierea.',
        'Adaugă căpșunile congelate și gheața.',
        'Mixează 1–3 minute, la început cu impulsuri, oprindu-te să dai jos de pe pereți, până se îngroașă și nu mai curge când înclini vasul.',
        'Mănânc-o imediat, ca soft-serve.'
      ],

      tips: [
        'E desertul-semnătură al lui Greg Doucette: ~500 ml de „înghețată" pentru sub 200 kcal. E mai degrabă un sorbet proteic cu volum foarte mare decât o înghețată cu smântână — și tocmai volumul e motivul pentru care îl fac oamenii.',
        'Prea mult xantan o face mucilaginoasă. O jumătate de linguriță e plafonul.',
        'Se topește în 10–15 minute. Nu e un desert de făcut dinainte.',
        'O linguriță de miere e tot îndulcitul. Căpșunile coapte fac restul; dacă sunt acre, încă 5 g de miere.',
        'Cu soia iese ceva mai densă decât cu whey-ul din rețeta originală. Căpșunile și vanilia acoperă gustul.'
      ],

      swaps: [
        { label: 'Ciocolată', text: '10 g de cacao și o banană congelată în loc de jumătate din căpșuni: gust de înghețată de ciocolată, +60 kcal.' }
      ],

      warnings: ['Conține lactate și soia.'],

      taste: { sweetness: 55, richness: 35, texture: 70, authenticity: 55 },

      vs: {
        name: 'Înghețată de vanilie, 3 cupe (150 g)',
        grams: 150, kcal: 312, protein: 5, carbs: 36, sugars: 32, fat: 17
      },
      vsSource: 'După Greg Doucette (Ultimate Anabolic Cookbook), reprodusă de myconsciouseating.com și grazewithme.com; originalul după USDA („Ice creams, vanilla"). Cercetare 2026-10.',

      sweetener: { kind: 'miere', gPerServing: 8 },
      storage: 'Nu se păstrează.',
      mealFit: { desert: 5, gustare: 5, micDejun: 2, postAntrenament: 5, seara: 4 },
      dataConfidence: 'high'
    },

    // ---INSERT-NEW-ITEMS-ABOVE---
  ];

  window.PF_DESSERTS = (window.PF_DESSERTS || []).concat(DESSERTS);
})();
