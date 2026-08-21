# Ghid de cumpărături pentru deserturile proteice — Sibiu

Documentul ăsta răspunde la o singură întrebare: **de unde iei, concret, în
Sibiu, ingredientele care nu se găsesc la raftul de lactate.**

Rețetele din secțiunea de deserturi presupun că ai în casă cinci-șase lucruri
pe care un om normal nu le are: pudră proteică, un îndulcitor care nu e zahăr,
cacao neîndulcită adevărată, unt de arahide fără zahăr, și de obicei ceva care
îngroașă. Ghidul ăsta îți spune care sunt, cât costă aproximativ, la ce raion
stau și unde te înșală eticheta.

## Ce nu e documentul ăsta

**Nu e o listă de prețuri confirmate.** Ca peste tot în Atlasul Proteinelor,
fiecare cifră în RON de aici este o **estimare**. Nimeni nu a intrat în
magazine cu un caiet să le verifice pe toate. Prețurile la suplimente se mișcă
cu 20–30% între promoții, iar cele la îndulcitori depind de format și de
importator. Folosește cifrele ca ordin de mărime, nu ca ofertă.

**Nu e o listă de magazine noi.** Toate magazinele numite aici există deja în
`js/data/00-stores.js`, cu punctele lor tari și slabe. Dacă un tip de magazin
nu apare în atlas — de exemplu magazinele naturiste din centru — nu îl
inventez aici doar ca să pară ghidul complet. Unde atlasul nu știe, scrie că
nu știe.

**Nu e o listă de recomandări de sănătate.** Cumperi ingrediente pentru un
desert. Un desert proteic rămâne un desert.

---

## 1. Regula de bază: nu există magazinul care le are pe toate

Cea mai frecventă greșeală e să pleci într-un singur magazin cu lista întreagă
și să te întorci cu jumătate din ea. Cele șase categorii de ingrediente stau,
în Sibiu, în locuri diferite:

| Categoria | Unde chiar se găsește | Unde NU pierde vremea |
|---|---|---|
| Pudră proteică | **Online RO**, **Decathlon** | **Profi**, **Penny**, **La Doi Pași** |
| Îndulcitori (eritritol, xilitol, stevie) | **Auchan**, **Carrefour**, **Kaufland**, **Online RO** | **Lidl** (doar în săptămâni tematice), **Penny** |
| Lactate proteice | **Lidl**, **Kaufland**, **Carrefour**, **Auchan** | **La Doi Pași** |
| Cacao și făinuri speciale | **Carrefour**, **Auchan**, **Kaufland**, **Online RO** | **Penny**, **Profi** |
| Unt de arahide 100% | **Lidl**, **Kaufland**, **Auchan**, **Online RO** | **Piața Cibin** |
| Volum (ovăz, lapte praf, albuș lichid) | **Selgros**, **Metro**, **Lidl** | oriunde altundeva la preț bun |

Concluzia practică: **o comandă online la două-trei luni + un drum lunar la un
hipermarket + cumpărăturile săptămânale de lactate.** Trei traseuri, nu unul.

---

## 2. Proteina pudră — partea care costă cel mai mult

Atlasul are 13 sortimente de pudră din zer plus cazeină, colagen și o variantă
vegetală. Rulează `grep "id: 's-whey" js/data/06-supplements-snacks.js` ca să
le vezi pe toate. Mai jos e doar ce contează pentru deserturi.

### 2.1 Prețul real, ordonat

Coloana care contează nu e prețul pungii, ci **RON per 100 g de proteină
pură**. O pungă de 115 RON cu 73% proteină e mai scumpă decât pare, iar una de
289 RON cu 78% e mai ieftină decât pare.

| Produs (id în atlas) | Format | Preț estimat | RON / 100 g proteină | Unde |
|---|---|---|---|---|
| `s-whey-redis-protwhey` ProtWhey-R | 900 g | 115 | **~17,5** | Online RO |
| `s-whey-concentrate-ostrovit` WPC 80 | 2 kg | 289 | **~18,5** | Online RO |
| `s-whey-myprotein-impact` Impact Whey | 2,5 kg | 379 | ~18,9 | Online RO |
| `s-whey-decathlon-aptonia` Whey Aptonia | 900 g | 130 | **~19,5** | **Decathlon** |
| `s-whey-concentrate-ostrovit` WPC 80 | 700 g | 119 | ~21,8 | Online RO |
| `s-protein-decathlon-plant` proteină vegetală | 750 g | 119 | ~22,0 | Decathlon |
| `s-whey-myprotein-impact` Impact Whey | 1 kg | 185 | ~23,1 | Online RO |
| `s-whey-pure-nutrition-ro` | 908 g | 159 | ~23,3 | Online RO |
| `s-whey-isolate-ostrovit` WPI 90 | 1,8 kg | 389 | ~24,6 | Online RO |
| `s-protein-blend-multicomponent` | 900 g | 165 | ~25,5 | Online RO |
| `s-whey-nutrend-100` | 900 g | 175 | ~25,6 | Online RO |
| `s-whey-biotech-pure` | 1 kg | 189 | ~26,4 | Online RO |
| `s-whey-on-gold-standard` | 908 g | 190 | ~26,5 | **Decathlon** |
| `s-casein-micellar-ostrovit` cazeină | 700 g | 149 | ~27,3 | Online RO |
| `s-whey-scitec-100` | 920 g | 179 | ~27,8 | Online RO |
| `s-whey-isolate-ostrovit` WPI 90 | 700 g | 175 | ~28,4 | Online RO |
| `s-whey-concentrate-ostrovit` WPC 80 | 700 g | 155 | ~28,4 | **Farmacie** |
| `s-whey-genius-nutrition` izolat | 900 g | 219 | ~29,0 | Online RO |
| `s-whey-hydrolysate` hidrolizat | 900 g | 249 | ~32,5 | Online RO |
| `s-clear-whey-isolate-ostrovit` Clear Whey | 400 g | 119 | ~36,3 | Online RO |
| `s-whey-sachet-single` plic monodoză | 30 g | 9 | ~40,0 | Farmacie |

### 2.2 Verdictul preț/calitate, cu argumentul

**Pentru cine comandă online: `s-whey-concentrate-ostrovit`, punga de 2 kg.**
~18,5 RON / 100 g proteină, 78% proteină reală, etichetă publicată complet, și
un profil de macro-uri care nu strică rețetele (6,5 g carbohidrați la 100 g).
ProtWhey-R e cu un leu mai ieftin, dar are 73% proteină, 12 g carbohidrați și o
textură granuloasă care se simte într-un desert cremos. La shake e indiferent.
Într-o budincă, nu.

**Pentru cine vrea produsul azi, în Sibiu: `s-whey-decathlon-aptonia`, de la
Decathlon din Shopping City.** ~19,5 RON / 100 g proteină — practic la fel de
bine ca cea mai bună ofertă online, fără să aștepți curierul, cu retur simplu
dacă aroma nu îți place. Are 8 g de zahăr la 100 g de pudră, deci într-un
desert cu 40 g de pudră adaugi ~3 g de zahăr. Nu e o problemă; e o cifră pe
care trebuie s-o știi.

**Ce să nu faci: să o cumperi din farmacie.** Atlasul are deja concluzia asta
documentată la nivel de magazin: `Farmacie` are `priceIndex` 140 și e descrisă
ca „cel mai prost raport preț/proteină din tot atlasul". Cifrele confirmă:
aceeași pungă de OstroVit WPC 80 costă 119 RON online și 155 RON în farmacie,
iar plicul monodoză ajunge la 40 RON / 100 g proteină — de peste două ori
prețul pungii mari. Farmacia are un singur avantaj real: e deschisă, e aproape,
și îți dă pudra acum.

### 2.3 Izolat vs concentrat — ce contează CHIAR pentru deserturi

Pentru un shake, diferența dintre concentrat și izolat e aproape zero. Pentru
un desert, nu e. Contează trei lucruri, în ordinea importanței:

**1. Grăsimea și lactoza reziduală fac cremozitatea.** Concentratul are ~6,5 g
grăsime și 3–6 g lactoză la 100 g. Izolatul are ~1 g grăsime și sub 1 g
lactoză. Grăsimea aia e exact ce dă senzația de „bogat" într-o cremă. Un
cheesecake fără coacere făcut cu izolat iese mai subțire și mai „apos" decât
același cheesecake cu concentrat, la aceeași cantitate de pudră.

**2. La copt, izolatul se usucă mai repede.** Proteina din zer se denaturează
și se strânge la căldură; fără grăsimea din concentrat, un brownie sau un mug
cake cu izolat iese cauciucat la 2 minute în microunde, în loc de 90 de
secunde. Regula practică: **cu izolat scazi timpul cu 20–25% și adaugi o
lingură de iaurt sau de lapte.**

**3. Lactoza chiar contează pentru unii oameni.** Ăsta e singurul motiv serios
de a plăti în plus pentru izolat — nu performanța, ci digestia. Un desert cu
40 g de concentrat livrează 1,5–2,5 g de lactoză; e puțin, dar dacă îl mănânci
seara peste 300 g de skyr, se adună.

**Ce alegi, pe scurt:**

| Tipul de desert | Pudra potrivită | De ce |
|---|---|---|
| Copt (brownie, mug cake, chec) | **Concentrat** | Grăsimea ține umezeala; iartă supracoacerea |
| Cremos, fără coacere (mousse, cheesecake) | **Cazeină** sau cazeină + concentrat | Cazeina absoarbe apă și îngroașă la rece, fără gelatină |
| Înghețată, batoane de congelator | **Cazeină** | Rămâne cremoasă; whey-ul singur face cristale de gheață |
| Jeleuri, deserturi cu fructe acre | **Izolat** | Nu se taie la aciditate ridicată, gust curat |
| Băuturi calde (ciocolată caldă proteică) | **Concentrat**, adăugat de pe foc | Peste ~75 °C orice zer coagulează și face grunji |

### 2.4 Cazeina — ingredientul pe care nimeni nu îl cumpără și de care ai nevoie

`s-casein-micellar-ostrovit`, ~149 RON / 700 g, ~27,3 RON / 100 g proteină.
E cu 45% mai scumpă la gramul de proteină decât concentratul și **nu e o
alternativă la whey, e un ingredient diferit.** Cazeina absoarbe de câteva ori
greutatea ei în lichid și se îngroașă la frigider fără gelatină, fără agar și
fără amidon. Practic, e singura pudră care transformă 200 ml de lapte într-o
budincă de consistență reală.

Dacă faci un singur tip de desert proteic, cumperi whey. Dacă faci deserturi
cremoase și înghețate, a doua pungă e de cazeină, nu de încă un whey.

### 2.5 Aroma — variabila pe care o ignoră toată lumea și care strică rețeta

O pudră de ciocolată bună salvează un desert mediocru; una proastă îl distruge
și nu ai ce să faci. Trei reguli învățate scump:

- **Vanilia e cea mai versatilă.** Merge în orice; ciocolata merge doar în
  deserturi cu cacao. Dacă iei o singură pungă, ia vanilie.
- **Nu cumperi 2 kg dintr-o aromă pe care n-ai gustat-o.** Decathlon e util
  exact aici: cumperi o pungă de 900 g, o testezi, apoi comanzi formatul mare
  online din brandul care ți-a plăcut.
- **Aromele „exotice" (unt de arahide, cookies, banană) sunt loterie.** Pudra
  de „unt de arahide" nu are unt de arahide; are aromă. Pune 15 g de unt de
  arahide adevărat într-o pudră de vanilie și obții rezultatul bun.

---

## 3. Îndulcitorii — unde stau și cât costă

### 3.1 La ce raion

Nu la raionul de zahăr. În hipermarketurile din Sibiu, îndulcitorii stau la
**raionul dietetic / bio**, de obicei lângă făinurile speciale, semințele și
produsele fără gluten. La **Auchan** și **Carrefour** raionul ăsta e cel mai
bine aprovizionat din oraș. La **Kaufland** există, dar e mai mic. La **Lidl**
apar doar în săptămânile tematice („Săptămâna bio", „Fit"), deci nu se poate
conta pe el. La **Penny**, **Profi** și **La Doi Pași** nu ai ce căuta.

Cel mai constant furnizor rămâne **Online RO** — și, la formatul de 1 kg, și
cel mai ieftin. Atlasul îi dă `priceIndex` 72, cel mai mic din listă.

### 3.2 Ce cumperi, în ce format, la ce preț estimat

| Îndulcitor | Cheie în cămară | Formate uzuale | Preț estimat | Putere de îndulcire |
|---|---|---|---|---|
| Eritritol | `eritritol` | 500 g, 1 kg | ~25 RON / 500 g, ~45 RON / kg | **0,7×** zahărul |
| Xilitol | `xilitol` | 500 g, 1 kg | ~30 RON / 500 g, ~55 RON / kg | **1,0×** zahărul |
| Stevie pudră (cu eritritol) | `stevie-pudra` | 75–250 g | ~18–25 RON / 200 g | ~1,5–2× amestecul |
| Stevie lichidă | `stevie-lichida` | flacon 50 ml | ~20 RON / 50 ml | picături, fără volum |

Cifrele sunt **estimări**, aliniate cu valorile `ronKg` din
`js/data/10-dessert-pantry.js`. Intervalul real în magazin poate fi cu 30% mai
mare sau mai mic, în funcție de importator și de promoție.

### 3.3 Ce trebuie să știi înainte să cumperi

**Eritritolul e alegerea implicită, dar are două defecte.** Primul: e cu 30%
mai puțin dulce decât zahărul, deci ca să înlocuiești 100 g de zahăr îți
trebuie ~140 g de eritritol. Exact așa ajunge un desert „fără zahăr" să aibă
35 g de polioli pe porție. Al doilea: **răcorește pe limbă** — senzația de
mentol pe care o simți în ciocolata fără zahăr. Se atenuează în deserturi
grase și reci; se simte cel mai tare în glazuri și în lucruri uscate.

**Xilitolul rezolvă ambele probleme și adaugă una gravă.** Are gustul cel mai
apropiat de zahăr, nu răcorește, se dozează 1:1. Dar are 240 kcal la 100 g
(eritritolul are 20) și **este toxic pentru câini la doze mici**. Dacă în casă
există un câine, nu îl cumperi. Nu e o precauție exagerată; o prăjitură căzută
pe jos e suficientă.

**Combinația e răspunsul.** ~90% eritritol pentru volum plus 3–5 picături de
stevie lichidă pentru intensitate. Steviolul acoperă golul de putere al
eritritolului, iar eritritolul acoperă amăreala metalică a steviei la doze
mari. Vei folosi cu ~25% mai puțin eritritol decât dacă îl folosești singur,
ceea ce înseamnă și mai puțini polioli pe porție.

**Zahărul rămâne o opțiune onestă.** Există în cămară ca `zahar`, la 5 RON /
kg. Într-un desert cu 30 g de proteină, 8 g de zahăr adevărat costă 32 kcal și
zero probleme digestive. Uneori e răspunsul corect.

---

## 4. Lactatele care contează — și ce face grăsimea pentru textură

Astea sunt deja documentate în `js/data/01-dairy-eggs.js`. Nu le redocumentez;
îți spun doar care contează pentru deserturi și de ce.

| Produs | id în atlas | P / 100 g | Grăsime | Preț estimat | Unde |
|---|---|---|---|---|---|
| Skyr natural | `d-skyr-natural-pilos` | 11 g | 0,2 g | 10,49 / 450 g | **Lidl** |
| Brânză de vaci proteică (quark) | `d-branza-vaci-proteica-milbona` | 12 g | 0,3 g | 8,99 / 500 g | **Lidl** |
| Iaurt grecesc 0% | `d-iaurt-grecesc-olympus-0` | 10 g | 0 g | 12,99 / 900 g | Kaufland |
| Iaurt grecesc 2% | `d-iaurt-grecesc-olympus-2` | 8 g | 2 g | 13,49 / 900 g | Kaufland |
| Iaurt grecesc 10% | `d-iaurt-grecesc-olympus-10` | 5 g | 10 g | 6,29 / 350 g | Kaufland |
| Brânză de vaci slabă 0,5% | `d-branza-vaci-covalact-05` | 17 g | 0,5 g | 7,29 / 200 g | Kaufland |
| Brânză de vaci 6,5% | `d-branza-vaci-pilos-65` | 13 g | 6,5 g | 6,49 / 250 g | Lidl |
| Cremă de brânză light | `d-crema-branza-light` | 9 g | 11 g | 11,99 / 175 g | Kaufland |
| Ricotta | `d-ricotta` | 11 g | 13 g | 11,99 / 250 g | Kaufland |
| Mascarpone | `d-mascarpone` | 4,5 g | 45 g | 9,99 / 250 g | Lidl |
| Lapte praf degresat | `d-lapte-praf-degresat` | 36 g | 1 g | 24,99 / 500 g | Kaufland |
| Brânză de vaci vrac, de la producător | `d-branza-vaci-vrac-cibin` | 19 g | 1 g | ~22 / kg | **Piața Cibin** |
| Cazeină micelară | `s-casein-micellar-ostrovit` | 78 g | 2 g | 149 / 700 g | Online RO |

### 4.1 Ce face grăsimea, concret

Asta e partea pe care majoritatea rețetelor „fit" o ascund, și de asta ies
uscate.

**Grăsimea din lactat face trei lucruri simultan:** îmbracă limba (senzația de
„cremos"), transportă aromele solubile în grăsime (vanilia, cacao, coaja de
lămâie se simt mult mai puternic), și împiedică formarea cristalelor mari de
gheață la congelare. Un iaurt 0% n-are niciunul din cele trei.

**Reguli practice:**

- **Cremă rece necoaptă** (mousse, cheesecake fără coacere): îți trebuie
  minimum 4–5 g de grăsime la 100 g de produs final. Dacă bazele sunt skyr și
  quark degresat, adaugi grăsimea din altă parte — 10 g de unt de arahide sau
  15 g de cremă de brânză la porție.
- **Înghețată**: sub ~6% grăsime iese un bloc de gheață pe care nu îl poți
  tăia. Aici combinația câștigătoare e iaurt grecesc 10% + cazeină, nu skyr 0%.
- **Copt**: grăsimea contează mai puțin, pentru că umezeala vine din ou și din
  lichid. Quark-ul degresat funcționează foarte bine în brownie.
- **Aciditatea taie zahărul**. Skyr-ul și quark-ul sunt mai acre decât iaurtul
  grecesc, deci ai nevoie de mai mult îndulcitor cu ele. Nu e un defect, e un
  cost pe care îl plătești în grame de eritritol.

**Cea mai bună afacere din tabel:** brânza de vaci vrac din **Piața Cibin**, la
~22 RON/kg și 19 g proteină la 100 g — de aproape trei ori mai ieftină pe gramul
de proteină decât quark-ul ambalat. Prețul e că nu are etichetă nutrițională
(valorile din atlas sunt estimative), variază de la tarabă la tarabă, și trebuie
să mergi sâmbătă dimineața. Pentru deserturi coapte, unde textura oricum se
schimbă, e alegerea evidentă.

**Laptele praf degresat** (`d-lapte-praf-degresat`) e trucul ieftin al listei:
36 g de proteină la 100 g, la ~50 RON/kg, adică ~14 RON / 100 g proteină — mai
ieftin decât orice pudră din secțiunea 2. Nu are aromă de desert și adaugă 52 g
de lactoză la 100 g, deci nu înlocuiește whey-ul. Dar 20 g într-un iaurt îl fac
mai gros, mai dulce natural, și adaugă 7 g de proteină pe aproape nimic.

---

## 5. Cacao, făinuri speciale, unt de arahide

### 5.1 Cacao

**Ce cumperi:** cacao pudră neîndulcită, la raionul de patiserie (lângă
zahărul vanilat și praful de copt), nu la raionul de băuturi. Se găsește la
**Kaufland**, **Carrefour**, **Auchan**, **Mega Image**. Preț estimat 12–18 RON
pentru 100–250 g, adică în jurul valorii de 60 RON/kg din cămară (`cacao`).

**Capcana:** produsele de la raionul de băuturi calde care se numesc tot
„cacao". Alea sunt 70–80% zahăr cu 15–20% cacao. Testul de etichetă durează
trei secunde:

- **Cacao adevărată:** ~228 kcal, ~20 g proteină, 1–2 g zaharuri la 100 g.
  Ingrediente: „cacao pudră". Punct.
- **Pudră pentru băuturi:** ~380 kcal, 4 g proteină, 75 g zaharuri la 100 g.

Cacao neîndulcită chiar contribuie la proteina rețetei: 15 g de cacao într-un
brownie aduc 3 g de proteină, nu zero.

**Alcalinizată (Dutch) vs naturală:** cea alcalinizată (`cacao-alcalina`) e mai
închisă la culoare și mai puțin acră, dar **nu reacționează cu bicarbonatul**.
Dacă rețeta se bazează pe bicarbonat ca să crească, folosești cacao naturală
sau schimbi pe praf de copt.

### 5.2 Făinuri speciale

| Făină | Cheie | Unde | Preț estimat | Ce trebuie știut |
|---|---|---|---|---|
| Făină de ovăz | `faina-ovaz` | oriunde (o faci singur) | ~14 RON/kg | **Nu o cumperi.** Dai fulgi de ovăz prin râșniță sau blender: jumătate din preț, același rezultat |
| Făină de migdale | `faina-migdale` | Auchan, Carrefour, Online RO | ~90 RON/kg | Cea mai scumpă din listă. 250 g ajung pentru 4–5 rețete |
| Făină de cocos | `faina-cocos` | Auchan, Carrefour, Online RO | ~60 RON/kg | Absoarbe de 4× greutatea ei în lichid. 20 g înlocuiesc 80 g de făină normală |
| Coajă de psyllium | `psyllium` | Farmacie, Online RO | ~90 RON/kg | Se vinde în farmacie ca fibră; formatul mic e scump pe kilogram |
| Amidon de porumb | `amidon-porumb` | orice supermarket | ~12 RON/kg | Cel mai ieftin mod de a îngroșa o cremă |

**Făina de migdale e locul unde se pierd cei mai mulți bani.** La 90 RON/kg,
o rețetă cu 100 g de făină de migdale costă 9 RON doar din făină. Alternativa
onestă: cumperi migdale întregi din **Piața Cibin** sau **Selgros** și le dai
prin râșniță. Iese mai grosier și mai uleios — ceea ce în brownie e chiar mai
bine — la aproximativ jumătate de preț.

### 5.3 Unt de arahide 100% — capcana cea mai frecventă de pe raft

**Ce cauți:** un borcan pe care scrie, la ingrediente, **„arahide 100%"** sau
„arahide 99,5%, sare". Atât. Se găsește la **Lidl** (gama Vemondo),
**Kaufland**, **Auchan**, **Carrefour** și **Online RO**. Preț estimat 20–28
RON pentru 500 g, adică în jurul valorii de 45 RON/kg din cămară
(`unt-arahide`).

**Ce eviți:** borcanele care se numesc tot „unt de arahide" sau „cremă de
arahide" și au, în ordinea de pe etichetă, arahide, **zahăr**, **ulei de
palmier**, sare, emulsifiant. Diferența nu e cosmetică:

| | Unt de arahide 100% | Cremă de arahide îndulcită |
|---|---|---|
| Proteină / 100 g | ~25 g | ~18 g |
| Zaharuri / 100 g | ~6 g (naturale, din arahide) | 15–25 g |
| Grăsime | ~50 g, din arahide | ~45 g, parțial palmier |
| Ingrediente | 1–2 | 5–7 |

**Semnul care te ajută:** stratul de ulei separat la suprafață. Ăla e semnul
că produsul e real — untul de arahide fără emulsifiant se separă întotdeauna.
Îl amesteci cu un cuțit și îl ții în frigider după aceea. Un borcan care nu se
separă niciodată conține ceva care îl ține împreună.

Aceeași verificare se aplică la `unt-migdale` și la `tahini`: la tahini,
lista corectă are un singur ingredient — semințe de susan.

---

## 6. Bugetul de pornire

Ce cumperi **o singură dată** ca să poți face aproximativ 80% din rețetele
secțiunii. Cumpărăturile săptămânale (lactate, fructe, ouă) nu sunt aici.

### 6.1 Varianta minimă — acoperă în jur de 60% din rețete

| Ingredient | Cantitate | Unde | Cost estimat |
|---|---|---|---|
| Whey concentrat, vanilie | 900 g | Decathlon | 130 RON |
| Eritritol | 1 kg | Auchan / Carrefour / Online RO | 45 RON |
| Cacao pudră neîndulcită | 250 g | Kaufland / Carrefour | 15 RON |
| Unt de arahide 100% | 500 g | Lidl / Kaufland | 23 RON |
| Fulgi de ovăz (pentru făină de ovăz) | 1 kg | Lidl / Penny | 9 RON |
| **Total** | | | **~222 RON** |

Cu asta faci: mug cakes, brownie, bile energizante, budinci de ovăz, shake-uri
groase, glazuri simple.

### 6.2 Varianta completă — acoperă în jur de 80% din rețete

| Ingredient | Cantitate | Unde | Cost estimat |
|---|---|---|---|
| *Tot ce e mai sus* | | | 222 RON |
| Cazeină micelară | 700 g | Online RO | 149 RON |
| Stevie lichidă | 50 ml | Auchan / Online RO | 20 RON |
| Gelatină (foi sau granule) | 100 g | Kaufland / Carrefour | 12 RON |
| Semințe de chia | 250 g | Lidl / Auchan | 12 RON |
| Ulei de cocos | 250 g | Kaufland / Carrefour | 15 RON |
| Praf de copt, bicarbonat, esență de vanilie | set | orice supermarket | 15 RON |
| **Total** | | | **~445 RON** |

Cu adaosurile astea intri în: mousse, cheesecake fără coacere, înghețată,
batoane de congelator, jeleuri, budinci de chia, glazuri care se întăresc.

### 6.3 Ce NU cumperi la început

- **Făină de migdale** (~90 RON/kg) — o cumperi când ai o rețetă anume care o
  cere, nu „ca să ai".
- **Fulgi de ciocolată fără zahăr** (`fulgi-ciocolata`, ~160 RON/kg) — cel mai
  scump ingredient din cămară și 40% polioli. Ciocolata neagră 85% tăiată
  mărunt face aceeași treabă la jumătate de preț.
- **Agar-agar** (~400 RON/kg) — are sens doar dacă eviți gelatina din motive
  alimentare.
- **Al doilea sortiment de whey.** Termină punga pe care o ai.

### 6.4 Cât te ține

Punga de 900 g de whey înseamnă ~25–30 de porții de desert la 30–35 g de pudră.
Kilogramul de eritritol înseamnă ~50 de porții la 20 g. La două-trei deserturi
pe săptămână, bugetul de pornire ține **trei-patru luni**. Amortizat, un desert
proteic făcut acasă costă între 4 și 9 RON porția — comparabil cu un baton de
ciocolată din registrul de referință și de 2–3 ori mai ieftin decât o felie de
cofetărie.

---

## 7. Capcane de etichetă

Cinci lucruri care apar pe ambalaje și înseamnă altceva decât crezi.

### 7.1 „Fără zahăr" ≠ „fără zahăr adăugat"

- **„Fără zahăr"** e o mențiune reglementată: sub 0,5 g de zaharuri la 100 g.
- **„Fără zahăr adăugat"** înseamnă doar că nu s-a turnat zahăr în plus.
  Zahărul din fructe, din suc concentrat, din lapte rămâne integral.

Exemplul din propria noastră cămară: `gem-fara-zahar` are **25 g de zaharuri la
100 g**. E gem fără zahăr adăugat, și e corect etichetat. Are tot atâta zahăr
cât o lingură rasă de zahăr la fiecare 30 g de gem.

### 7.2 Poliolii nu apar la „din care zaharuri"

Ăsta e cel mai important punct din secțiune. În etichetarea europeană,
poliolii (eritritol, xilitol, maltitol, sorbitol) se declară la
**carbohidrați**, dar **nu** la „din care zaharuri". Consecința:

> Un baton poate afișa legal **„0 g zaharuri"** și să aibă **30 g de
> carbohidrați**, toți maltitol.

Ce înseamnă practic:
- Maltitolul dă ~2,4 kcal/g și **ridică glicemia** (index glicemic ~35), spre
  deosebire de eritritol, care trece nemetabolizat.
- Peste ~15 g de polioli într-o singură porție, majoritatea oamenilor au
  balonare și crampe. Peste 25–30 g pe zi, aproape toți.
- **Cum îi găsești:** te uiți la diferența dintre „carbohidrați" și „din care
  zaharuri", apoi cauți în lista de ingrediente cuvintele terminate în „-itol".
  Diferența mare + un „-itol" în ingrediente = ai găsit poliolii.

Din același motiv, **calculul caloric nu se închide** la produsele cu polioli.
Intrarea `ref-baton-proteic-comercial` din registrul de referință e exact
exemplul: formula Atwater dă 223 kcal, eticheta declară ~210. Nu e o eroare de
transcriere; e felul în care se contabilizează poliolii.

### 7.3 Proteina pe porție vs pe 100 g

Cea mai veche păcăleală de pe raftul de suplimente.

> „**23 g de proteină per porție!**" — porția fiind de 40 g de pudră.

23 / 40 = **57% proteină**. Aceeași reclamă, pe o pudră de 40 g cu 23 g
proteină, ascunde faptul că restul de 17 g sunt maltodextrină, aromă și
îndulcitor. Un whey serios are 70–80% proteină, un izolat 85–90%.

**Verificarea, în cinci secunde:** ignori complet coloana „per porție" și te
uiți la coloana „la 100 g". Sub 70% la o pudră vândută ca „whey" înseamnă că
plătești umplutură. Aceeași regulă se aplică batoanelor: un baton de 60 g cu
„20 g proteină" are 33% proteină, ceea ce e onest pentru un baton; unul cu
„12 g proteină" pe 60 g are 20%, adică e o prăjitură.

### 7.4 Colagenul umflă cifra de pe față

Colagenul hidrolizat (`s-collagen-hydrolyzed`, `b-colagen-pudra`) are 90 g de
proteină la 100 g, e ieftin, și **nu conține triptofan**. Ca proteină pentru
sinteza musculară, e incompletă; nu se pune la ținta zilnică. Multe batoane
ieftine îl folosesc tocmai ca să scrie un număr mare pe ambalaj — atlasul are
deja intrarea `s-bar-collagen-trap` pentru situația asta.

**Cum îl prinzi:** citești lista de ingrediente, nu tabelul. Dacă apare
„colagen hidrolizat" sau „peptide de colagen" în primele trei poziții la un
produs vândut ca proteic, scazi mental acea porție din proteina declarată.

### 7.5 „Per 100 ml" la înghețată

Înghețata se declară frecvent la 100 ml, nu la 100 g. Cum 100 ml de înghețată
cântăresc 55–65 g (aerul încorporat e jumătate din volum), valorile „per
100 ml" arată cu 35–45% mai mici decât cele reale pe gram. Nu e ilegal și nu e
ascuns — e doar ușor de citit greșit. Când compari două înghețate, verifică
întâi dacă vorbesc în aceeași unitate.

**Bonus, mențiunea „High protein":** în UE, „bogat în proteine" înseamnă că
minimum 20% din energia produsului vine din proteină. Un produs cu 500 kcal și
25 g de proteină se califică. Mențiunea spune ceva despre proporție, nimic
despre calorii sau zahăr.

---

## 8. Traseul, pe scurt

**O dată la 2–3 luni — Online RO** (comandă de 250–400 RON, transport gratuit
peste prag): whey format mare, cazeină, eritritol 1 kg, stevie lichidă,
psyllium dacă îți trebuie.

**O dată pe lună — Shopping City Sibiu**: **Decathlon** pentru whey dacă ai
rămas fără și nu vrei să aștepți, **Carrefour** pentru raionul dietetic (făini
speciale, cacao, ulei de cocos, semințe).

**Alternativ, o dată pe lună — Auchan**: are, conform atlasului, „raft dedicat
de produse proteice / sport" plus raionul dietetic, deci rezolvă îndulcitorii
și făinurile într-un singur drum.

**Săptămânal — Lidl** pentru skyr, quark și unt de arahide; **Kaufland** pentru
brânză de vaci, cacao, gelatină și lapte praf.

**Sâmbătă dimineața, ocazional — Piața Cibin**: brânză de vaci vrac la ~22
RON/kg, ouă de țară, nuci și migdale la kilogram pentru făinuri făcute acasă.

**Niciodată planificat — Farmacie**: doar ca soluție de avarie, la un preț cu
25–30% mai mare.

---

## 9. Ce e cel mai greu de găsit în Sibiu

În ordinea dificultății reale:

1. **Cazeina micelară.** Nu există pe niciun raft fizic din oraș. Decathlon are
   whey, batoane și shake-uri Aptonia, dar nu cazeină. Farmaciile au colagen și
   proteine „medicale", nu cazeină micelară. Rămâne exclusiv **Online RO**, cu
   2–4 zile de așteptare. E și ingredientul de care depind cele mai multe
   rețete cremoase, deci merită să nu îl lași să se termine.
2. **Eritritol în format de 1 kg, pe raft fizic.** Formatele de 250–500 g apar
   constant la Auchan și Carrefour; kilogramul e inconstant. Online e sigur și
   mai ieftin pe gram.
3. **Făina de migdale la preț rezonabil.** Există, dar la ~90 RON/kg în orice
   variantă ambalată. Soluția locală e râșnița de cafea și migdale din Piața
   Cibin sau Selgros.
4. **Aromele de pudră proteică, altele decât ciocolată și vanilie.** Decathlon
   ține un sortiment mic — atlasul îi notează explicit slăbiciunea „sortiment
   mic față de magazinele online, doar branduri proprii".
5. **Alulóza.** Nu o căuta. Nu e aprobată ca îndulcitor în UE și nu se găsește
   în comerțul din România. Orice rețetă care o cere trebuie rescrisă cu
   eritritol plus stevie, cu ajustarea de dulceață de rigoare.

---

## 10. De reținut

- Costul care contează la pudră e **RON per 100 g de proteină**, nu prețul
  pungii. Diferența dintre cea mai bună și cea mai proastă alegere din atlas e
  de la ~17,5 la ~40 RON — mai mult decât dublu, pentru același efect.
- **Farmacia e cea mai scumpă opțiune și atlasul o spunea deja.** Are un singur
  avantaj: e deschisă acum.
- **Decathlon e cea mai bună opțiune fizică din Sibiu** și e la doar 1 RON /
  100 g proteină distanță de cea mai bună ofertă online.
- **Concentratul pentru copt, cazeina pentru rece, izolatul doar dacă te
  balonează lactoza.**
- **Grăsimea din lactate nu e un defect** — e ce face diferența între o cremă
  și un iaurt îndulcit.
- **Poliolii nu apar la „zaharuri".** Diferența dintre carbohidrați și zaharuri
  îți spune cât ai de digerat.
- Toate prețurile din acest document sunt **estimări neconfirmate**.
