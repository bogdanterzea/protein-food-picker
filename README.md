# Atlasul Proteinelor Sibiu

**505 alimente bogate în proteine pe care le poți cumpăra efectiv în Sibiu**, cu
macro-uri complete, preț pe gram de proteină, efort de gătit, gust evaluat onest
și momentul din zi în care merită mâncate — afișate cu bare de statistici ca
într-un joc video.

Deschide `index.html` în orice browser. Nu are nevoie de server, de instalare, de
internet și de niciun build step.

---

## Ce este

O bază de date construită pe o singură întrebare practică: *„ce mănânc acum, ca
să iau proteină, din ce se găsește în Sibiu?”*

Fiecare produs din atlas are:

| Ce | De ce contează |
|---|---|
| Macro-uri complete la 100 g **și** pe porție reală | „25 g proteină la 100 g” nu ajută dacă porția e de 30 g |
| Preț **estimat** pe 100 g de proteină pură (`≈`, ±20–30%) | Singura comparație corectă între un baton proteic și un piept de pui — dar vezi nota de mai jos |
| Efort (0–5) și timp total vs. timp activ | 45 de minute la cuptor nu e același lucru cu 45 de minute de tăiat |
| Gust, sațietate, comoditate, versatilitate (0–100) | Evaluări subiective, dar asumate și consistente |
| Magazine din Sibiu + raionul + prețul pachetului | Ca să știi unde te duci, nu doar ce cauți |
| Momentul din zi (7 sloturi, 0–5) | Cazeina seara, zerul după antrenament |
| Pași de gătit, sfaturi, avertismente, păstrare | Ca să nu cauți rețeta în altă parte |

---

## Cum se folosește

```
proteinFood/
└── index.html      ← deschide asta
```

Serios, atât. Dublu-click pe `index.html`.

### Cele șapte vizualizări

| Tastă | Vizualizare | La ce e bună |
|:---:|---|---|
| `1` | **Carduri** | Răsfoire vizuală, barele de statistici una lângă alta |
| `2` | **Tabel** | Comparație densă, sortare pe orice coloană |
| `3` | **Clasamente** | 10 topuri: cea mai multă / cea mai pură / cea mai ieftină proteină etc. |
| `4` | **Comparație** | Până la 5 produse cap la cap, cu cea mai bună valoare evidențiată |
| `5` | **Hartă** | Grafic proteină vs. calorii — colțul stânga-sus e unde vrei să cumperi |
| `6` | **Rețete** | Mese complete: proteină + garnitură + legume, pe metodă de gătit |
| `7` | **Listă** | Lista de cumpărături, grupată pe magazinul unde produsul e cel mai ieftin |

### Scurtături

| Tastă | Acțiune |
|:---:|---|
| `/` | Caută |
| `R` | „Ce mănânc acum?” — alege în funcție de oră |
| `M` | Deschide/închide masa |
| `T` | Temă deschisă / întunecată |
| `L` | Limbă RO / EN |
| `X` | Resetează filtrele |
| `?` | Lista completă de scurtături |
| `←` `→` | Produsul anterior / următor, când e deschisă fereastra de detalii |

### Ce reține browserul

Favoritele, masa curentă, comparația, tema, limba și profilul (greutate +
obiectiv) se salvează local, în `localStorage`. Nu pleacă nimic nicăieri —
aplicația nu face niciun request de rețea. Starea filtrelor se scrie în URL, deci
poți trimite un link cu exact ce vezi pe ecran.

---

## Ce e în atlas

**505 produse · 8 categorii · 89 subcategorii · 18 locuri de cumpărat**

| Categorie | Produse |
|---|---:|
| 🌱 Proteine vegetale | 71 |
| 🥛 Lactate & ouă | 67 |
| 🥩 Carne proaspătă | 64 |
| 🥓 Mezeluri & conserve | 64 |
| 🐟 Pește & fructe de mare | 60 |
| 🍱 Mâncare gata | 61 |
| 💪 Suplimente & snackuri | 59 |
| 🍞 Panificație, băuturi & dulciuri | 59 |

**262 de produse (52%) au efort zero** — le deschizi și le mănânci.
**47 sunt gata de mâncat în 0 minute**, fără nici măcar încălzit.


> ## ⚠️ Despre prețuri — citește asta întâi
>
> **Niciun preț din acest proiect nu este verificat.** Sunt estimări pentru
> 2026, calibrate pe intervale realiste — nu au fost citite de pe un raft și
> nu vin dintr-un API.
>
> Nu există un API public de prețuri pentru retailul alimentar din România.
> Singurul deschis (Open Prices / Open Food Facts) conținea, în august 2026,
> **84 de prețuri în RON pentru toată țara**, aproape toate dulciuri și
> băuturi — practic nicio suprapunere cu un atlas de proteine.
> `tools/verify-prices.js` interoghează acel API și raportează potrivirile;
> astăzi nu găsește niciuna suficient de sigură.
>
> De aceea aplicația afișează peste tot `≈` și o marjă de **±20%** (lanțuri de
> retail și online) sau **±30%** (piață, măcelărie, pescărie, restaurant,
> farmacie). Un preț apare fără `≈` doar dacă are `verified: true` — momentan
> niciunul nu are.
>
> **Ce poți face cu ele:** să compari produse între ele. Ordinea clasamentelor
> e aproape sigur corectă, pentru că diferențele sunt de ordinul zecilor de
> ori, nu de procente.
> **Ce NU poți face:** să-ți faci bugetul, sau să te aștepți la prețul ăsta la casă.

Media pe atlas e de **19,8 g proteină / 100 g**. Prețul median al proteinei e de
**29,5 lei / 100 g de proteină pură**; cel mai ieftin produs coboară la
**3,69 lei**, iar cel mai scump urcă la peste 1800 (da, există — vezi
`docs/BUDGET.md`).

### Unde se cumpără

| Magazin | Produse | Magazin | Produse |
|---|---:|---|---:|
| Kaufland | 374 | Auchan | 48 |
| Carrefour | 187 | Mega Image | 35 |
| Lidl | 180 | Decathlon | 17 |
| Selgros | 104 | Restaurant Sibiu | 17 |
| Online RO | 95 | Farmacie | 15 |
| Piața Cibin | 83 | Măcelărie locală | 13 |
| Profi | 67 | Pescărie | 11 |
| Penny | 55 | La Doi Pași | 4 |
| Metro | 52 | Carrefour Market | 2 |

---

## Mese complete (Rețete)

Atlasul îți spune *ce* să cumperi. Fila **Rețete** îți spune *ce faci din el* —
o masă întreagă, nu un ingredient.

- **21 de mese**, filtrabile după **metodă** (la cuptor, la tigaie, la grătar,
  air fryer, fiert/supă, gătit lent, fără gătit) și după **ingredientul
  principal** (pui, curcan, porc, vită, pește, ouă, lactate, leguminoase, tofu).
- Fiecare rețetă are proteina, garnitura și legumele în aceeași listă, cu pași
  scriși pentru cineva care nu gătește des, plus sfaturi și **variante**
  („cu paste în loc de cartofi”, „mai ieftin”, „fără cuptor”).
- **Macro-urile nu sunt scrise de mână.** Fiecare ingredient trimite fie către
  un produs din atlas, fie către cămara din `js/data/09-recipes.js`, iar
  totalurile — proteină, calorii, cost pe porție — se calculează la încărcare.
  Dacă se corectează eticheta unui produs, se corectează și toate mesele care
  îl folosesc.
- Costul e real: fiecare ingredient are prețul lui, deci vezi câți lei costă
  porția, nu doar câte grame de proteină are.
- În dosarul fiecărui produs, fila **Preparare** listează mesele care îl
  folosesc — puntea de la „am piept de pui în frigider” la „ce gătesc diseară”.

Intervalul actual: de la **23 g proteină / porție la 2,54 lei** (linte cu orez)
până la **63 g / porție** (șnițel de curcan cu piure).

## Structura proiectului

```
proteinFood/
├── index.html                  Aplicația. Un singur fișier de deschis.
├── css/                        13 fișiere, în ordinea cascadei
│   ├── 00-reset.css            reset minimal
│   ├── 01-tokens.css           TOATE culorile și dimensiunile trăiesc aici
│   ├── 02-base.css             tipografie, panouri, badge-uri, tooltip-uri
│   ├── 03-layout.css           bara de sus, coloana de filtre, scena
│   ├── 04-controls.css         butoane, chips, slidere, comutatoare
│   ├── 05-statbars.css         barele de joc, insignele de rang, macro-barele
│   ├── 06-cards.css            cardul de produs
│   ├── 07-modal.css            dosarul complet al unui produs
│   ├── 08-panels.css           hero, calculator, masă, clasamente, listă
│   ├── 09-charts.css           donut, radar, scatter, histogramă
│   ├── 10-animations.css       toate keyframe-urile
│   ├── 11-responsive.css       5 praguri + suport touch
│   └── 12-print.css            lista de cumpărături pe hârtie
├── js/
│   ├── data/                   35 138 de linii de date cercetate
│   │   ├── 00-stores.js        registrul magazinelor din Sibiu
│   │   ├── 01..08-*.js         câte un fișier per categorie
│   │   └── 09-recipes.js       21 de mese complete + cămara
│   ├── utils/
│   │   ├── format.js           numere, lei, minute, diacritice, highlight
│   │   ├── i18n.js             dicționar RO/EN complet
│   │   ├── compute.js          TOATE metricile derivate și scorurile
│   │   └── storage.js          localStorage + starea din URL
│   ├── components/
│   │   ├── ui.js               bare, insigne, pips, pastile de magazin
│   │   ├── charts.js           SVG scris de mână, fără biblioteci
│   │   ├── card.js             cardul + rândul de tabel
│   │   ├── modal.js            dosarul, în 6 file
│   │   ├── filters.js          motorul de filtrare + coloana de filtre
│   │   ├── tray.js             masa + lista de cumpărături
│   │   ├── recipes.js          mesele complete, calculate din atlas
│   │   ├── tooltip.js          tooltip flotant, nu pseudo-element
│   │   ├── boards.js           cele 10 clasamente
│   │   └── compare.js          comparația cap la cap
│   └── app.js                  boot, evenimente, vizualizări, scurtături
└── docs/
    ├── DATA-SCHEMA.md          contractul de date (citește-l înainte să adaugi ceva)
    ├── METHODOLOGY.md          cum se calculează scorurile și de ce
    ├── PROTEIN-GUIDE.md        de câtă proteină ai nevoie și de unde
    ├── STORES-SIBIU.md         ghid magazin cu magazin
    ├── MEAL-TIMING.md          distribuția proteinei pe parcursul zilei
    ├── BUDGET.md               proteină ieftină, ordonată de la cea mai bună
    ├── CHARTS.md               deciziile de design ale graficelor
    ├── CHANGELOG.md            istoricul proiectului
    └── categories/             8 ghiduri de cumpărare, unul per categorie
```

---

## Cum se citesc barele

Fiecare card arată șase bare. Trei sunt **calculate din date**, trei sunt
**evaluări subiective asumate**.

### Calculate

| Bară | Ce măsoară | Bara e plină la |
|---|---|---|
| **Proteină** | grame la 100 g | 30 g (≈ piept de pui gătit, cașcaval, ton) |
| **Puritate** | ce procent din calorii vine din proteină | 80% (albuș, izolat de zer — maximul real) |
| **Preț** | cât costă 100 g de proteină pură | scală logaritmică, 2,5 lei = plin, 80 lei = gol |

### Subiective

**Gust**, **sațietate**, **comoditate**, **versatilitate** — evaluate de la 10 la
100, cu intenția de a folosi tot intervalul. Pieptul de pui fiert are gust 45.
Ficatul de porc are 22. Dacă totul ar fi 90, barele n-ar spune nimic.

### Rangul (S / A / B / C / D / E)

Un singur scor compus, cu ponderile scrise pe față în `docs/METHODOLOGY.md`.
**Doar 3 produse din 505 ajung la rang S.** Asta e intenționat: dacă rangul S ar
fi ieftin, n-ar însemna nimic.

---

## Corecția care schimbă clasamentele: calitatea proteinei

Eticheta numără proteina măsurând azotul. Nu e același lucru cu proteina pe care
corpul o poate folosi. Două corecții contează suficient ca să schimbe un top:

1. **Colagenul și gelatina nu conțin triptofan.** Valoarea lor biologică pentru
   sinteza musculară e practic zero, dar o pudră de colagen declară 90 g de
   proteină la 100 g. Fără corecție, colagenul ar fi câștigat *fiecare* clasament
   din atlas. Scorul lui e înmulțit cu **0,25** și e exclus din clasamentele de
   proteină — rămâne găsibil, cu explicația la vedere pe card.
2. **Sursele vegetale simple sunt limitate într-un aminoacid** (lizina la
   cereale, metionina la leguminoase). Penalizare blândă (×0,88), anulată pentru
   sursele complete — soia, quinoa, cânepa, amarantul, hrișca.

Gramele afișate nu sunt niciodată modificate. Doar scorul e ajustat, iar motivul
e scris pe card.

---

## Onestitatea datelor

Fiecare produs are un nivel de încredere declarat:

| Nivel | Produse | Ce înseamnă |
|---|---:|---|
| **Ridicată** | 167 | Valori citite de pe o etichetă reală sau de pe site-ul oficial |
| **Medie** | 260 | Valori tipice pentru tipul de produs; marca variază |
| **Scăzută** | 78 | Estimare — raion cald, restaurant, produs fără etichetă |

Toate cele 505 intrări trec o verificare automată de coerență energetică
(`kcal ≈ proteină×4 + carbo×4 + grăsimi×9 + fibre×2`, toleranță ±15%), plus
`zaharuri ≤ carbohidrați` și `grăsimi saturate ≤ grăsimi`.

### Ce NU este acest proiect

- **Nu e sfat medical.** Dacă ai probleme renale, hepatice sau o afecțiune
  metabolică, întreabă un medic înainte să-ți crești aportul de proteină.
- **Nu e o listă de prețuri.** Prețurile sunt estimări pentru 2026, colectate în
  august 2026. Se schimbă săptămânal. Folosește-le ca să compari produse între
  ele, nu ca să-ți faci bugetul la leu.
- **Nu e afiliat cu niciun retailer.** Toate mărcile aparțin proprietarilor lor.
- **Eticheta din mână bate baza de date.** Rețetele se schimbă, producătorii
  reformulează, loturile variază.

---

## Cum adaugi un produs

1. Citește `docs/DATA-SCHEMA.md`. E contractul, și e verificat automat.
2. Adaugă intrarea în fișierul categoriei potrivite din `js/data/`, deasupra
   liniei `// ---INSERT-NEW-ITEMS-ABOVE---`.
3. Rulează `node --check js/data/<fișier>.js`.
4. Reîncarcă `index.html`. Consola îți spune dacă intrarea a fost respinsă sau
   dacă are steaguri de calitate a datelor.

Aplicația nu se sparge dacă o intrare e incompletă: câmpurile lipsă primesc
valori implicite, intrările fără `id`, `nume` sau `proteină` sunt respinse și
raportate în consolă, iar duplicatele dintre categorii sunt îmbinate automat
(prețurile din ambele surse se păstrează).

---

## Compatibilitate

Chrome, Edge, Firefox și Safari recente. Folosește `color-mix()`, `:has()`,
`dialog` și `content-visibility` — toate cu degradare grațioasă: pe un browser
mai vechi pierzi câteva accente vizuale, nu funcționalitate.

Respectă `prefers-reduced-motion` (oprește toate animațiile),
`prefers-contrast: more` și `forced-colors` (barele primesc texturi diferite, ca
să rămână distinse fără culoare).
