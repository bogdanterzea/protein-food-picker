# Schema deserturilor „cheat"

Contractul pe care îl respectă fiecare intrare din `js/data/1*-desserts-*.js`.
Scris înainte de cercetare, exact ca `DATA-SCHEMA.md`, ca patru oameni care
lucrează în paralel să producă un set coerent, nu patru seturi diferite.

---

## 0. Ce înseamnă „cheat" aici, și ce nu

Un desert proteic **rămâne un desert**. Nu e mâncare sănătoasă cu care poți să
te îndopi, e o variantă care satisface aceeași poftă la un cost nutrițional mai
mic. Atât.

Trei reguli de onestitate, la fel de obligatorii ca la prețuri:

1. **Nicio afirmație de sănătate.** Nu scrie „sănătos", „curat", „detox",
   „arde grăsimi". Scrie cifre și lasă cititorul să compare.
2. **Fiecare desert declară ce înlocuiește**, cu macro-urile reale ale
   lucrului înlocuit. Dacă un „brownie proteic" are 280 kcal și cel de
   cofetărie are 310, spune-o — poate concluzia e că nu merită efortul.
3. **Fără îndulcitori fără zahăr.** Niciun eritritol, xilitol, stevie sau
   sucraloză. Dulcele vine din fructe, miere, curmale sau zahăr, și se
   declară în grame în `sweetener`. `tools/check.js` respinge restul.

O rețetă care nu are gust bun e o rețetă eșuată, oricât de bune sunt macro-urile.
De asta există axa `authenticity`: cât de aproape e de lucrul real.

---

## 1. Forma unei intrări

```js
{
  id: 'ds-cheesecake-borcan',          // 'ds-' + slug, unic în tot proiectul
  name: 'Cheesecake la borcan, fără coacere',
  emoji: '🍰',                          // exact unul, fără text

  family: 'no-bake',                    // vezi §2
  craving: 'cremos',                    // vezi §2 — ce poftă rezolvă
  servings: 2,

  /* Ingredientele. Macro-urile NU se scriu de mână niciodată — se calculează
     din astea la încărcare. O rețetă cu macro-uri scrise de mână va fi
     respinsă de poartă. */
  ing: [
    { id: 'd-skyr-natural-pilos', g: 300 },   // produs din atlas
    { p: 'cacao', g: 12 },                     // cheie din cămara de deserturi
    { p: 'miere', g: 10 },
    { p: 'vanilie', g: 2, free: true }         // free = nu se pune la cost
  ],

  time: { total: 15, active: 10, chill: 240 }, // minute; chill = doar așteptare
  effort: 1,                                    // 0-5, cât de mult muncești
  difficulty: 'usor',                           // usor | mediu | greu
  equipment: ['bol', 'tel'],

  steps: [ 'Text imperativ, un pas pe element.', /* 3-8 pași */ ],
  tips:  [ /* 2-4, concrete, nu generalități */ ],
  swaps: [ { label: 'Fără lactate', text: '...' } ],   // 1-3
  warnings: [ /* obligatoriu unde e cazul, vezi §4 */ ],

  taste: {
    sweetness: 70,      // 0-100, cât de dulce iese
    richness: 55,       // cât de bogat/cremos
    texture: 80,        // cât de plăcută e textura (uscat/cauciucat = mic)
    authenticity: 75    // cât de aproape de desertul real pe care îl imită
  },

  /* Lucrul pe care îl înlocuiește, cu valorile lui reale, per porție
     comparabilă. Sursa se trece în `vsSource`. */
  vs: {
    name: 'Cheesecake de cofetărie',
    grams: 120, kcal: 380, protein: 6, carbs: 34, sugars: 28, fat: 24
  },
  vsSource: 'Valori tipice de etichetă pentru cheesecake ambalat, 2026',

  sweetener: { kind: 'miere', gPerServing: 5 },   // miere | zahar | curmale | sirop-artar | null

  storage: 'Frigider, 3 zile. Nu se congelează — se brânzește.',

  /* Când merită mâncat. Aceeași scară 0-5 ca la atlas. */
  mealFit: { desert: 5, gustare: 4, micDejun: 3, postAntrenament: 4, seara: 3 },

  dataConfidence: 'medium'   // high | medium | low, ca în atlas
}
```

---

## 2. Vocabulare controlate

**`family`** — cum se face, adică ce fel de efort ceri:

| valoare | ce înseamnă |
|---|---|
| `no-bake` | Se amestecă și se răcește. Zero căldură. |
| `baked` | Cuptor sau air fryer. |
| `frozen` | Congelator: înghețată, batoane, bombe. |
| `drink` | Se bea: shake, smoothie, ciocolată caldă. |
| `mug` | O cană, microunde, sub 5 minute, o porție. |
| `batch` | Se face o dată, ține toată săptămâna. |

**`craving`** — ce poftă rezolvă. Asta e axa după care caută omul la 22:00:

`ciocolata` · `cremos` · `crocant` · `fructat` · `patiserie` · `inghetata` · `caramel`

**`difficulty`**: `usor` | `mediu` | `greu`
**`dataConfidence`**: `high` (făcut și verificat) | `medium` (rețetă standard, valori tipice) | `low` (estimare)

---

## 3. Ingrediente: reguli

1. **Dacă există în atlas, se referă prin `id`.** Skyr, brânză de vaci, iaurt
   grecesc, whey, cazeină, gelatină, albuș, ovăz, arahide, nuci, migdale,
   ciocolată proteică — toate sunt deja acolo. Rulează
   `grep "id: 'x-" js/data/*.js` înainte să inventezi o cheie de cămară.
2. **Restul vine din `js/data/10-dessert-pantry.js`** (77 de chei). Dacă
   îți lipsește una, **nu o adăuga singur** — raportează și o adaug eu, ca să
   nu apară trei variante de „cacao" scrise de trei agenți.
3. **Gramele sunt reale.** 300 g de skyr pentru 2 porții, nu „un pahar".
4. `free: true` doar pentru lucruri pe care nimeni nu le cântărește: vanilie,
   scorțișoară, sare, praf de copt.

---

## 4. Avertismente obligatorii

Se pune `warnings` când:

- **Polioli peste 15 g pe porție** — doar din produse de atlas care îi au pe
  etichetă (ciocolată proteică, biscuiți „fără zahăr"). Spune cifra.
- **Proteina din gelatină sau colagen** — nu se pune la ținta zilnică, e
  incompletă. Aplicația penalizează deja scorul, dar textul trebuie să existe.
- **Peste 25 g de zahăr pe porție** — e un desert cu zahăr, spune-o.
- **Alergeni evidenți** — arahide, nuci, lactate, ou, gluten.
- **Cofeină**, dacă rețeta are cacao multă sau cafea și e propusă seara.

---

## 5. Calitatea, nu doar cantitatea

Ținte pentru setul tău de rețete:

- **Minimum 15 g proteină pe porție.** Sub atât nu e un desert proteic, e un
  desert.
- **Sub 350 kcal pe porție**, cu excepții justificate în `tips`.
- **Fiecare rețetă trebuie să funcționeze cu ingrediente din Sibiu.** Fără
  allulose, fără „protein fluff powder", fără lucruri comandate din altă țară.
- **Diversitate de efort**: cel puțin o treime din setul tău sub 10 minute
  active.
- **`authenticity` sub 50 e un semnal de alarmă.** Dacă rețeta nu seamănă cu
  ce imită, întreabă-te de ce e în listă.

---

## 5b. Linia ușoară (din octombrie 2026)

Pagina are două linii. Câmpul `line` le separă; lipsa lui înseamnă `protein`,
așa că cele 48 de rețete vechi n-au trebuit atinse.

| câmp | valori | ce face |
|---|---|---|
| `line` | `'light'` \| `'protein'` | Fila pe care apare și scorul cu care se măsoară. Fișierele `15-` și `16-` îl setează singure pentru toate intrările lor. |
| `season` | luni, `[9, 10, 11]` | Opțional. Lunile în care fructul e ieftin și bun în Sibiu. Dă insigna „🍂 în sezon" și filtrul de sezon. |
| `yieldG` | grame | Opțional. Greutatea finală a șarjei, unde cuptorul scoate apa (chipsuri, bezele). Fără el, porția e suma ingredientelor. |

Ținte pentru linia ușoară, în locul celor din §5:

- **Sub ~150 kcal pe porție.** Nu există minim de proteină.
- **Porție de cel puțin ~60 g**, altfel cardul spune „porție mică".
- **Id-ul începe cu `ds-l-`.**
- Fără pudră proteică. Dacă rețeta are nevoie de ea, aparține liniei proteice.

Cămara are două marcaje noi, citite de motor, nu de om:

- `freeSugar: true` — zahărul acestui ingredient se socotește **adăugat**
  (zahăr, miere, sirop, gem, sucuri, pișcoturi, biscuiți), după definiția
  OMS. Zahărul din fructul întreg și lactoza nu.
- Cămara nu conține îndulcitori fără zahăr. `tools/check.js` respinge orice
  cheie al cărei nume sau id seamănă cu eritritol, xilitol, stevie,
  sucraloză, aspartam, maltitol, sorbitol, ciclamat sau zaharină.

Scorul ușor și sursele lui: `docs/DESSERT-LIGHT.md`.

---

## 6. Ce se verifică automat

`node tools/check.js` va respinge:

- id duplicat, `emoji` cu mai mult de 3 caractere sau cu markup
- un `ing[].id` care nu există în atlas, sau un `ing[].p` care nu e în cămară
- `family`, `craving`, `difficulty`, `dataConfidence`, `line` în afara vocabularului
- macro-uri scrise de mână în intrare (câmpurile `kcal`, `protein`, `carbs`,
  `fat` la nivel de rețetă sunt INTERZISE — se calculează)
- lipsa lui `vs` sau a lui `vsSource`
- polioli peste 15 g pe porție fără `warnings`
- orice îndulcitor fără zahăr, în cămară sau într-o rețetă

Și avertizează, fără să respingă: linia proteică sub 15 g de proteină
utilizabilă sau peste 350 kcal, linia ușoară peste 150 kcal.
- mai puțin de 3 pași
