# Atlasul Proteinelor Sibiu

**503 alimente bogate în proteine pe care le poți cumpăra efectiv în Sibiu**, cu
macro-uri complete, preț pe gram de proteină, efort de gătit, gust evaluat onest
și momentul din zi în care merită mâncate — afișate cu bare de statistici ca
într-un joc video.

Plus **43 de mese complete**, **109 deserturi „cheat"** pe o pagină separată, și
un **ghid al celor 18 locuri de cumpărat** din oraș.

Deschide `index.html` în orice browser. Nu are nevoie de server, de instalare, de
internet și de niciun build step. Servit peste http, se și **instalează pe telefon
și funcționează offline** — pentru că se folosește în magazin, unde semnalul e
prost.

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
├── index.html      ← atlasul: ce cumpăr
└── deserturi.html  ← deserturi cheat: e 22:00 și vreau ceva dulce
```

Serios, atât. Dublu-click pe `index.html`.

### Cele patru moduri de a intra

| Vrei să… | Unde |
|---|---|
| Vezi repede ce merită | Pastilele **„Ce cauți?"** din capul paginii — ieftin și bogat, fără gătit, sub 20 de minute, slab, cele mai bune. Fiecare arată câte produse rămân **înainte** să apeși. |
| Gătești o masă întreagă | Fila **Rețete**. Bifează în **„Ce am în frigider"** ce ai în casă și îți arată ce poți găti acum și exact ce-ți lipsește. |
| Știi unde să te duci | Fila **Hartă**, jos: fișă per magazin, cu indice de preț, program și cea mai ieftină proteină de acolo. |
| Ceva dulce | **`deserturi.html`**. Fiecare rețetă arată cu ce se compară: desertul real pe care îl înlocuiește, cu cifrele lui. |

### Instalare pe telefon

Deschide aplicația servită peste http(s), apoi „Adaugă pe ecranul principal".
După prima încărcare merge complet offline — toate cele 503 produse, rețetele și
deserturile sunt în cache. Din `file://` service workerii sunt interziși de
browser, dar aplicația funcționează oricum, doar fără instalare.

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

**503 produse · 8 categorii · 89 subcategorii · 18 locuri de cumpărat**

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

- **43 de mese**, filtrabile după **metodă** (la cuptor, la tigaie, la grătar,
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

## Deserturi cheat (`deserturi.html`)

**109 deserturi** din ingrediente găsibile în Sibiu, pe două file:

- **Ușoare** — 47 de rețete sub ~150 kcal, din ou, gelatină, fructe de sezon
  și lactate slabe. Scorul lor măsoară caloriile și zahărul **adăugat**
  economisite și câte calorii are un gram de desert.
- **Proteice** — 62 de rețete cu minimum 15 g de proteină, de la brownie la
  lapte de pasăre, cremșnit și cozonac refăcute pe skyr, brânză, albuș și
  izolat proteic din soia. Nicio rețetă nu folosește zer (whey) sau cazeină.

Fără coacere, la cuptor și air fryer, la congelator, la cană în trei minute,
de băut, sau pentru toată săptămâna. Cercetarea liniei ușoare, cu surse:
`docs/DESSERT-LIGHT.md`.

Un desert proteic **nu e mâncare sănătoasă**. E o variantă care rezolvă aceeași
poftă la alt cost nutrițional, iar singurul mod onest de a spune asta e să pui
cifrele una lângă alta. De aceea fiecare rețetă declară **cu ce se compară** —
desertul real pe care îl înlocuiește, cu proteina, zahărul și caloriile lui — și
pagina nu afișează niciodată o rețetă fără comparația ei.

Barele de comparație stau pe aceeași scară: dacă diferența e mică, arată aproape
la fel. O comparație care exagerează vizual diferența ar fi o minciună cu grafice.

| | |
|---|---|
| Proteină pe porție | 15,6–36,5 g (median 21) |
| Calorii pe porție | 146–332 (median 233) |
| Registru de referință | 40 de dulciuri reale, cu încrederea declarată: doar 10 au valori de producător |

**Onestitatea e pe card, nu în subsol.** Nicio rețetă nu folosește îndulcitori
fără zahăr — dulcele vine din fructe, miere sau zahăr, iar zahărul adăugat apare
pe card în grame, lângă cel total. Proteina
din gelatină e scăzută din cea utilizabilă, iar poarta măsoară pragul de 15 g pe
proteina utilizabilă, nu pe cea de pe etichetă.

Ca peste tot, macro-urile nu sunt scrise de mână: se calculează din ingrediente,
care trimit la produse reale din atlas sau la cămara de deserturi. Poarta respinge
orice câmp `kcal`/`protein`/`carbs`/`fat` scris la nivel de rețetă.

Detaliile în [`docs/DESSERT-SCIENCE.md`](docs/DESSERT-SCIENCE.md) (îndulcitori,
proteina la căldură, de ce înghețata proteică se face piatră) și
[`docs/DESSERT-SHOPPING.md`](docs/DESSERT-SHOPPING.md) (de unde cumperi, cu prețuri
estimate).

---

## Structura proiectului

```
proteinFood/
├── index.html                  Atlasul. Un singur fișier de deschis.
├── deserturi.html              Deserturile cheat. Pagină separată, aceleași tokene.
├── manifest.webmanifest        Instalare pe telefon
├── sw.js                       GENERAT de tools/build-sw.js — nu se editează
├── icons/                      GENERATE de tools/make-icons.js
├── css/                        17 fișiere, în ordinea cascadei
│   ├── 00-reset  01-tokens     TOATE culorile și dimensiunile trăiesc în 01
│   ├── 02-base   03-layout     tipografie · bara de sus, filtre, scena
│   ├── 04-controls 05-statbars butoane, chips · barele de joc, insignele
│   ├── 06-cards  07-modal      cardul · dosarul complet
│   ├── 08-panels 09-charts     hero, masă, clasamente · donut, radar, scatter
│   ├── 10-animations           toate keyframe-urile
│   ├── 11-responsive           5 praguri + suport touch
│   ├── 13-fridge 14-stores     „Ce am în frigider" · ghidul magazinelor
│   ├── 15-docs   16-desserts   paginile de documentație · deserturile
│   └── 12-print                ULTIMA în index.html, ca să bată restul
├── js/
│   ├── data/                   40641 de linii de date cercetate
│   │   ├── 00-stores           registrul celor 18 locuri din Sibiu
│   │   ├── 01..08              câte un fișier per categorie · 503 produse
│   │   ├── 09-recipes          43 de mese complete + cămara
│   │   ├── 10-dessert-pantry   77 de ingrediente de desert
│   │   ├── 11..13-desserts     48 de deserturi proteice: fără coacere, coapte, rapide
│   │   ├── 14-dessert-reference 40 de dulciuri reale, cu ce se compară
│   │   ├── 15..16-desserts-light 47 de deserturi ușoare: creme și jeleuri, fructe
│   │   └── 17-desserts-protein-classics 14 clasice refăcute pe proteină
│   ├── utils/                  format · i18n · compute · storage
│   ├── components/             ui, charts, card, modal, filters, tray,
│   │                           recipes, stores, boards, compare, tooltip,
│   │                           desserts
│   └── app.js                  starea, vizualizările, evenimentele
├── tools/                      node, zero dependențe
│   ├── check.js                POARTA. Rulează asta după orice modificare.
│   ├── test-compute.js         174 de teste pe scoruri și formatare
│   ├── build-docs.js           .md → pagini HTML stilizate
│   ├── build-sw.js             regenerează sw.js din ce încarcă paginile
│   ├── make-icons.js           iconițele PWA, desenate în cod
│   └── verify-prices.js        singura cale prin care un preț devine confirmat
└── docs/                       metodologie, scheme, ghiduri, changelog
```

### După orice modificare

```sh
node tools/check.js          # poarta: date, vocabulare, prețuri, PWA, deserturi
node tools/test-compute.js   # 174 de teste pe scoruri și formatare
```

Dacă ai atins CSS sau JS, `sw.js` devine învechit și poarta ți-o spune —
`node tools/build-sw.js`. Dacă ai atins un `.md` din `docs/`,
`node tools/build-docs.js`.


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
**Doar 3 produse din 503 ajung la rang S.** Asta e intenționat: dacă rangul S ar
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
| **Ridicată** | 168 | Valori citite de pe o etichetă reală sau de pe site-ul oficial |
| **Medie** | 259 | Valori tipice pentru tipul de produs; marca variază |
| **Scăzută** | 76 | Estimare — raion cald, restaurant, produs fără etichetă |

Toate cele 503 intrări trec o verificare automată de coerență energetică
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
