# Deserturile ușoare: știința și sursele

Al doilea fel de desert de pe `deserturi.html`. Linia proteică întreabă „cât
câștig față de desertul real"; linia ușoară întreabă „cât de puțin mă costă
pofta". Documentul spune de unde vin cele 47 de rețete, cum se calculează
scorul lor și ce afirmații științifice stau în spatele textelor din pagină —
fiecare cu sursa și cu cât de solidă e.

Cercetat în octombrie 2026, de nouă agenți în paralel. Ce n-au putut verifica
e scris la final, în §7, nu ascuns.

---

## 1. Ce intră pe linia ușoară

- **Sub ~150 kcal pe porție.** `tools/check.js` avertizează peste prag.
- **Din ce mănânci oricum:** lapte, iaurt, ouă, gelatină, fructe. Fără pudră
  proteică — dacă o rețetă are nevoie de ea, e pe linia cealaltă.
- **Porții reale.** Un desert de 30 kcal care cântărește 40 g câștigă toate
  rapoartele și nu satură pe nimeni; cardul spune „porție mică" sub 60 g și
  50 kcal.
- **Proteina nu e obligatorie.** Unde apare, e bonus. Proteina din gelatină
  e afișată separat, ca peste tot în proiect.

Rețetele sunt în două fișiere:

| Fișier | Ce conține | Câte |
|---|---|---|
| `js/data/15-desserts-light.js` | jeleuri, creme cu gelatină, budinci de casă, deserturi din albuș, creme coapte | 29 |
| `js/data/16-desserts-light-fruit.js` | fructe coapte și poșate, compot, granita, sorbet, înghețată pe băț | 18 |

Linia proteică a primit în același timp 14 rețete noi, în
`js/data/17-desserts-protein-classics.js`: clasicele românești și
central-europene care lipseau (lapte de pasăre, salam de biscuiți, cremșnit,
tort diplomat, Albă ca Zăpada, cozonac, găluște cu brânză, syrniki,
Kaiserschmarrn) și patru rețete internaționale bine cotate.

---

## 2. Scorul liniei ușoare

Propus de agentul care a citit literatura despre densitatea energetică și
adoptat aproape neschimbat.

| Componentă | Formula | Pondere | De ce |
|---|---|---|---|
| Calorii economisite | `(kcal real − kcal ușor) / kcal real`, între 0 și 1 | 0,30 | Scopul secțiunii. Relativ, nu absolut: 100 kcal economisite dintr-un desert de 140 contează mai mult decât dintr-unul de 500. |
| Zahăr **adăugat** economisit | `(zahăr real − zahăr adăugat) / zahăr real` | 0,30 | OMS limitează zahărul liber, nu pe cel din fructul întreg. Vezi §3.5. Mierea și zahărul din rețete intră aici, gram cu gram. |
| Densitate energetică | `(2,0 − kcal/g) / 1,4`, între 0 și 1 | 0,20 | Sub 0,6 kcal/g primește tot; peste 2 kcal/g, nimic. Vezi §3.1. |
| Proteină | `(proteină − ½ gelatină) / 15 g` | 0,10 | Gelatina sătură, dar nu construiește; primește jumătate. |
| Fibre | `fibre / 5 g` | 0,10 | 5 g = o cincime din ținta zilnică EFSA. |

Totul se înmulțește cu factorul de autenticitate, **același ca pe linia
proteică**: `0,6 + 0,4 × autenticitate`. Agentul propusese înmulțirea directă
cu autenticitatea; am păstrat plafonul ca benzile de culoare de pe carduri
(75 / 55) să însemne același lucru pe ambele file.

La final, poliolii scad puncte: 0 g → 0, până la 10 g → −2, până la
20 g → −6, peste → −15. Rețetele nu mai folosesc polioli; penalizarea a
rămas pentru produsele din atlas care îi au pe etichetă.

### Fără îndulcitori fără zahăr

Prima versiune a liniei folosea eritritol și stevie, iar scorul avea o
componentă de 5% pentru „fără îndulcitori". Din octombrie 2026 regula e mai
simplă și mai strictă: **nicio rețetă nu folosește eritritol, xilitol,
stevie, sucraloză sau alt îndulcitor fără zahăr**. Dulcele vine din fructe,
miere, curmale sau zahăr, iar `tools/check.js` respinge orice îndulcitor
care ar reapărea în cămară. Componenta de 5% a dispărut, iar ponderea ei a
trecut la zahărul adăugat — care acum chiar se schimbă de la o rețetă la
alta.

Prețul e cinstit și vizibil: deserturile au câteva grame de zahăr adăugat
pe porție în loc de zero, și cardul le arată.

**Exemple reale** din datele curente: mere coapte 77, granita de pepene 69,
lapte de pasăre light 60, budincă de vanilie 45 (pierde pentru că budinca
din comerț e deja ușoară — 140 kcal), chipsuri de mere 50 (pierd la
densitate: uscat, mărul are ~4 kcal pe gram), bezele cu cacao 32 (cu zahăr
adevărat, 16,5 g adăugat pe porție — sunt bezele, iar scorul o spune).

### `yieldG`: greutatea după cuptor

Densitatea se calculează din greutatea porției, iar porția e de obicei suma
ingredientelor. Unde cuptorul scoate apa, greutatea reală e alta: 360 g de
măr ies 50 g de chipsuri. Câmpul opțional `yieldG` declară greutatea finală
a șarjei. E folosit doar la chipsurile de mere și la bezele.

---

## 3. Afirmațiile, una câte una

Fiecare are o sursă și o frază despre cât de solidă e. Textele din pagină
nu spun mai mult decât spune aici.

### 3.1 Densitatea energetică conduce cât mănânci

Când scade densitatea energetică a mâncării (mai multă apă, fructe,
legume; mai puțină grăsime), oamenii mănâncă spontan mai puține calorii.
Într-un studiu controlat de două zile, ~30% densitate mai mică a dus la
~30% calorii mai puține, la aceeași greutate de mâncare.
— Rolls, *Physiology & Behavior* 2009;97:609 · Rolls, *Nutrition Bulletin*
2017;42:290 (PMID 29151813)

Pragurile lui Rolls: foarte joasă < 0,6 kcal/g, joasă 0,6–1,5, medie
1,5–4, mare > 4. **Dovadă solidă**, replicată.

### 3.2 Aerul adaugă volum la aceleași calorii

28 de bărbați au băut un shake cu aceeași energie, bătut la 300, 450 și
600 ml. După cel de 600 ml au mâncat cu 12% mai puțin la prânz.
— Rolls, Bell, Waugh, *AJCN* 2000;72:361 (PMID 10919928)

Un singur studiu, efect mic. Pe pagină apare doar ca motiv pentru spumele
bătute, nu ca promisiune.

### 3.3 Fructul întreg bate piureul, piureul bate sucul

58 de adulți, 125 kcal înainte de prânz: mărul întreg a scăzut prânzul cu
187 kcal (−15%), piureul cu 96, sucul deloc. Fibrele adăugate în suc n-au
schimbat nimic — contează structura și mestecatul.
— Flood-Obbagy & Rolls, *Appetite* 2009;52:416 (PMID 19110020)

**Dovadă bună.** De aceea mărul copt are scor mai bun decât piureul de mere.

### 3.4 Dieta cu densitate mică slăbește, cu mai puțină foame

97 de femei, un an: grupul cu mai puține grăsimi și mai multe fructe și
legume a slăbit 7,9 kg, față de 6,4 kg cu mai puține grăsimi doar, mâncând
mai mult ca greutate și raportând mai puțină foame.
— Ello-Martin et al., *AJCN* 2007;85:1465 (PMID 17556681)

Dovada vine din fructe și legume, nu din spume proteice. Un desert ușor
ajută doar dacă **înlocuiește** ceva mai caloric.

### 3.5 Zahărul „liber" și zahărul din fruct

OMS numără ca zahăr liber zahărul adăugat de producător sau de bucătar,
plus zahărul din miere, siropuri și sucuri. Zahărul din fructul întreg și
lactoza nu intră. Recomandare: sub 10% din calorii, ideal sub 5% (~25 g/zi).
— WHO, *Guideline: Sugars intake for adults and children*, 2015

De aici cele două cifre de pe card: zahăr total și cât din el e adăugat. În
pantry, cheile cu `freeSugar: true` sunt zahărul, mierea, siropul de arțar,
gemul, sucurile și pișcoturile. Zahărul total rămâne vizibil: un măr copt
are 20 g, și asta se vede.

### 3.6 Eritritolul și inima: de ce nu îl mai folosim

Dovezile de mai jos nu demonstrează că eritritolul face rău. Dar nici nu-l
recomandă, și pentru un desert de 80 kcal câteva grame de miere costă
15–25 kcal — un preț mic pentru a scoate întrebarea din discuție.


- Witkowski et al., *Nature Medicine* 2023;29:710: pacienți evaluați
  cardiac, nivel plasmatic de eritritol din cuartila de sus → risc de
  evenimente cardiovasculare în 3 ani HR 1,80 (SUA) și 2,21 (UE). Pe
  trombocite, in vitro și la șoareci, crește reactivitatea.
- Witkowski et al., *ATVB* 2024: 10 voluntari, 30 g eritritol → agregare
  plachetară crescută la toți. Marker, nu infarcte.
- **Limite:** pacienți cu risc mare, fără date despre ce mâncau, eritritolul
  plasmatic e produs și de corp. EFSA (2023): dovezile „nu demonstrează o
  relație cauzală".

Studiile au fost citite prin rezumatele din Europe PMC, nu în text
integral.

### 3.7 Pragul digestiv al poliolilor

EFSA (2023) a stabilit pentru eritritol o doză zilnică acceptabilă de
0,5 g/kg corp — 35 g pentru 70 kg — pe baza efectului laxativ. Praguri
pentru o singură doză: eritritol ~0,66–0,8 g/kg, xilitol ~0,3 g/kg,
sorbitol ~0,17–0,24 g/kg. Copiii tolerează cam jumătate.
— EFSA Journal 2023;21:e08430 · Mäkinen, *Int J Dent* 2016

Pragul de 15 g pe porție din pagină rămâne pentru produsele din atlas cu
polioli; rețetele nu mai au.

### 3.8 OMS și îndulcitorii fără zahăr (2023)

OMS recomandă **condiționat** să nu fie folosiți pentru controlul greutății
pe termen lung. Se aplică steviei, sucralozei, zaharinei, ciclamatului; nu
se aplică poliolilor. O meta-analiză de studii controlate (Rogers et al.,
*Int J Obes* 2016) găsește efectul opus, pe termen scurt.

Încă un motiv pentru regula de mai sus: îndulcitorii fără zahăr nu au o
dovadă bună că ajută la slăbit, iar un desert mic cu puțină miere e mai
aproape de ce recomandă OMS decât unul „zero" cu stevie.

### 3.9 Gelatina sătură, dar nu construiește

Zero triptofan, deci scor de calitate proteică 0. Totuși, un mic dejun cu
gelatină a fost cu ~40% mai sățios decât unul cu cazeină sau zer, iar
prânzul a fost cu ~20% mai mic.
— Veldhorst et al., *Clinical Nutrition* 2009;28:147

De aici jumătatea de credit din scor și nota mai blândă de pe linia ușoară:
acolo nimeni n-a promis proteină.

### 3.10 Dieta flexibilă e mai ușor de ținut

54.517 participanți la un program de slăbire: controlul flexibil („totul,
în cantități rezonabile") s-a asociat cu IMC mai mic și mai puține
episoade de mâncat compulsiv decât controlul rigid („totul sau nimic").
— Westenhoefer, Stunkard, Pudel, *Int J Eat Disord* 1999

Corelație. E motivul pentru care secțiunea există, nu o promisiune.

### 3.11 Ce n-am pus pe pagină

- **Jeleurile cu konjac de pe TikTok** — interzise în UE din 2003 (Directiva
  2003/52/CE) după decese prin sufocare.
- **„Desertul la micul dejun" (Jakubowicz, *Steroids* 2012)** — studiul
  amestecă mărimea micului dejun, proteina și ora mesei. Desertul n-a fost
  testat separat.
- **Alluloza** — EFSA a dat aviz negativ în iunie 2025; nu e autorizată în UE.

---

## 4. Tehnică, în cifre

Numerele de mai jos stau în `tips` la rețete. Sursele complete sunt în
rapoartele de cercetare.

### Gelatină

| Textură | g la 100 ml |
|---|---|
| Moale, de lingură | 0,5–0,8 |
| Panna cotta | 0,8–1,2 (1,5 ca să se răstoarne sigur) |
| Feliabilă, terină | 1,2–1,8 |
| Jeleu ferm (eticheta Dr. Oetker: 10 g la 500 ml) | 1,8–3 |
| Bomboane gumate fără zahăr | 10–12 |

- Plicul Dr. Oetker din România are **10 g** și o cutie de foi are 6 foi =
  10 g. Plicul american are 7 g; rețetele traduse greșesc des aici.
- Se hidratează în de 4–6 ori greutatea ei de apă rece, se dizolvă la
  50–60 °C, **nu fierbe**. Lichidele acide cer cu 10–20% mai mult.
- Ananasul, kiwi, papaya, mango și smochinele proaspete nu lasă gelatina
  să se lege. Mai multă gelatină nu ajută — enzima nu se consumă.
- Se topește la 30–35 °C: nu stă vara pe masă.

### Agar

0,2–0,45 g la 100 ml pentru cremos, 0,6–0,9 pentru jeleu, 1,2 pentru
feliabil. **Trebuie să fiarbă 1–5 minute** — sub fierbere nu se dizolvă,
cauza nr. 1 de eșec. Se leagă singur la 35–40 °C, se topește abia la
85 °C, lasă apă după 2–3 zile și nu suportă congelarea. 1 g de agar ține
locul a 3–4 g de gelatină.

### Bezele cu mai puțin zahăr

Bezeaua clasică are 50–60 g de zahăr la un albuș. Merge și cu mult mai
puțin — ~1 parte zahăr la 1 parte albuș, la greutate — dacă se usucă
încet: 80–100 °C, 75–120 de minute, apoi o oră în cuptorul oprit. ⅛
linguriță de cremor tartru la albuș. Zahărul nu poate fi înlocuit cu miere
aici: el ține spuma. Albușul pasteurizat la cutie poate face spumă și de 3
ori mai greu decât cel proaspăt.

### Budinci

Amidon de porumb ~5% din greutatea laptelui: 32–38 g la 500 ml pentru
budincă de pahar, 40–45 g ca să se răstoarne. Cu lapte degresat, 3–5 g în
plus. **Cu gălbenuș, budinca trebuie să clocotească un minut** — amilaza din
gălbenuș altfel o subțiază peste noapte. Kisiel: 40–50 g de amidon din
cartofi la litru, fără fierbere după ce s-a îngroșat.

### Înghețate fără zahăr

Sorbetul clasic are 20–30% zahăr; fructele au 5–15%. Fără zahăr, fructul
congelat se face bloc. Ce funcționează acasă: granita (unde cristalele mari
sunt scopul), fructe congelate blenduite și mâncate imediat, iaurt sau
banană pentru corp. Puțină miere ajută: coboară punctul de îngheț și ține
înghețata mai moale — dar e zahăr și se numără.

---

## 5. Ingredientele în Sibiu

Verificat 12–13 octombrie 2026, prețuri naționale de lanț (nu din
magazinele din Sibiu).

| Ce | Unde | Preț orientativ |
|---|---|---|
| Gelatină, plic de 10 g | toate lanțurile | 0,59–1,49 lei |
| Albuș lichid pasteurizat | Lidl (500 g), Auchan (1 kg) | 11,19 / 22,39 lei |
| Skyr natur 500 g | Lidl Pilos, Kaufland K-Classic | 8,79 lei |
| Fructe de pădure congelate | Lidl Freshona, Auchan, Kaufland | ~20 lei / 500 g |
| Miere de salcâm (cea mai neutră la gust) | toate lanțurile, piață | ~35 lei / kg |
| Agar | Carrefour (Biovegan 30 g), eMAG | ~27 lei / 30 g |
| Izolat proteic din soia | online (Ostrovit, eMAG) | ~70 lei / 390 g |

**Ce nu există în supermarketurile românești:** plicuri de jeleu fără zahăr
(ce se vinde ca „jeleu fără zahăr" sunt bomboane), quark degresat, monk
fruit. De aceea rețetele construiesc jeleul din gelatină simplă și folosesc
skyr sau brânză de vaci în loc de quark.

**Dacă vezi „fără zahăr" pe raft:** cercetarea a găsit că multe produse
„zero" nu sunt zero — Sly „Îndulcitor fără zahăr" e sorbitol cu sucraloză
(240 kcal la 100 g), xilitolul are tot 240 kcal, iar Gelfix cu stevie e în
mare parte dextroză. Rețetele de aici nu folosesc niciunul.

**De cumpărat în loc de făcut:** budinca proteică Milbona de la Lidl (200 g,
~4 lei, ~150 kcal și 20 g de proteină) e reperul cinstit pentru orice
budincă de casă de pe linia proteică.

---

## 6. Sezonul

Câmpul opțional `season` listează lunile în care fructul e ieftin și bun la
piață și în supermarket. Pagina arată insigna „🍂 în sezon" și filtrul
„De sezon în <luna curentă>". Rețetele cu fructe congelate, lapte sau ouă
n-au sezon și nu primesc niciodată insigna.

| Anotimp | Pe pagină |
|---|---|
| Primăvară | rubarbă cu căpșuni, înghețată pe băț cu căpșuni |
| Vară | granita de pepene, piersici la grătar, supă rece de vișine |
| Toamnă | mere și gutui coapte, prune coapte, struguri congelați, dovleac copt, clafoutis cu pere |
| Iarnă | pere poșate, carpaccio de portocale, jeleu de portocale, kanten cu mandarine |

---

## 7. Ce n-am putut verifica

Spus direct, ca peste tot în proiect:

- **Bugetul comun de căutări web s-a epuizat** la toți cei nouă agenți, pe
  la jumătatea cercetării. Reddit n-a putut fi citit deloc, deci nu există
  aici voturi de pe r/volumeeating — popularitatea vine din notele de pe
  bloguri și din presă.
- **Blocate:** BBC Good Food, EatingWell, Serious Eats, Healthline,
  Chefkoch. Rețetele „după" aceste surse au fost reconstruite din fragmente
  de căutare și sunt marcate `dataConfidence: 'medium'` sau `'low'`.
- **Toate valorile `vs` sunt valori tipice**, nu etichete citite, cu
  excepția batoanelor și a jeleurilor Haribo. Pentru deserturile de
  cofetărie românești, cifrele publicate aproape nu există.
- **Rețete reconstruite de noi, fără sursă testată:** supa rece de vișine,
  Albă ca Zăpada proteică, cozonacul proteic, prăjitura la cană de sub
  100 kcal. Toate au `dataConfidence: 'low'`.
- **Prețurile fructelor proaspete** din calendarul de sezon al cercetării
  erau estimările agentului. Nu le-am pus în cămară; `ronKg` din cămară
  rămâne estimarea proiectului.

Rapoartele brute ale celor nouă agenți (≈6.000 de rânduri, cu toate URL-urile)
nu sunt în repo. Sursele care susțin o cifră din pagină sunt citate în
`vsSource` la fiecare rețetă.
