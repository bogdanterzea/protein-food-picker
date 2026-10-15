# Știința deserturilor proteice

Documentul din spatele secțiunii de deserturi „cheat". Nu conține rețete.
Conține motivele pentru care rețetele arată așa cum arată: de ce un blat cu
whey iese cauciucat, de ce înghețata „fără zahăr" se face piatră, câte grame
de eritritol sunt prea multe și de ce gelatina nu se pune la ținta zilnică.

> **Actualizare, octombrie 2026.** Rețetele de pe `deserturi.html` nu mai
> folosesc **niciun îndulcitor fără zahăr** (eritritol, xilitol, stevie,
> sucraloză) și **nicio pudră din lapte** (zer/whey, cazeină). Dulcele vine
> din fructe, miere, curmale sau zahăr, iar pudra proteică e izolat din soia.
> Capitolele de mai jos despre îndulcitori, zer și cazeină rămân ca
> referință — sunt utile când citești etichete în magazin — dar nu mai
> descriu ce e în rețete. Regulile curente: [DESSERT-LIGHT.md](DESSERT-LIGHT.md).

Aceleași reguli ca peste tot în proiect: **cifre, nu adjective**. Unde dovada e
solidă, se spune. Unde e slabă sau contestată, se spune că e slabă — nu se
alege o tabără ca să sune documentul mai hotărât.

Contractul de date pentru rețete e în [DESSERT-SCHEMA.md](DESSERT-SCHEMA.md).
Corecția de calitate a proteinei care stă la baza §5 e descrisă în
[METHODOLOGY.md §4](METHODOLOGY.md).

---

## 0. Cum se citește documentul

### 0.1 Etichetele de dovadă

Fiecare afirmație despre siguranță sau efect fiziologic poartă o etichetă.
Nu sunt decorative — schimbă ce ai voie să faci cu informația.

| Etichetă | Ce înseamnă | Ce poți face cu ea |
|---|---|---|
| **[REG]** | Poziția unei autorități de reglementare (EFSA, FDA, JECFA/OMS) | E baza legală și cea mai bună sinteză disponibilă. Se citează ca atare. |
| **[RCT]** | Studiu controlat randomizat pe oameni, cu rezultat clinic | Cea mai tare dovadă de cauzalitate. Rar în domeniul ăsta. |
| **[MEC]** | Studiu mecanistic: in vitro, pe animale, sau pe oameni cu marker surogat | Arată *cum s-ar putea* întâmpla ceva. Nu arată că se întâmplă. |
| **[OBS]** | Studiu observațional pe oameni (cohortă, caz-control) | Arată asociere. **Nu poate arăta cauzalitate**, oricât de mare e cohorta. |
| **[EST]** | Estimare de bucătărie, valoare tipică, sau convenție de industrie | Bună pentru dozare. Nu se citează ca știință. |
| **[JUD]** | O judecată luată de acest proiect | E o alegere, nu o măsurătoare. Poți fi în dezacord. |

### 0.2 Ce nu face documentul

- **Nu dă sfat medical.** Praguri digestive, ADI-uri și avertismente sunt
  valori de populație. Un om cu sindrom de intestin iritabil reacționează la
  o zecime din dozele de aici.
- **Nu declară niciun îndulcitor „sănătos" sau „periculos".** Declară ce
  arată dovada și cât de tare e dovada.
- **Nu are prețuri confirmate.** Ca tot proiectul. Unde apar lei, sunt
  estimări din `js/data/10-dessert-pantry.js`, cu aceeași marjă ca restul.
- **Nu presupune ingrediente de import.** Dacă un ingredient nu se găsește
  realist în Sibiu, scrie asta explicit (vezi allulose, §1.11).

---

## 1. Îndulcitorii, unul câte unul

### 1.1 Tabelul de ansamblu

Toate valorile pe gram de produs pur, nu de amestec comercial. Amestecurile
„1:1 ca zahărul" din raft sunt aproape întotdeauna eritritol sau maltodextrină
cu 1-2% îndulcitor intens — vezi §1.13.

| Îndulcitor | E-number | kcal/g | Dulceață (zahăr = 1) | Stabil la căldură | Punct slab |
|---|---|---:|---:|---|---|
| Zahăr (zaharoză) | — | 4,0 | 1,00 | Da, până la caramelizare (~160 °C) | E zahăr |
| Miere | — | 3,0 | 1,1–1,3 | Da, dar se rumenește repede | Tot zahăr, cu aromă |
| Eritritol | E 968 | 0–0,2 | 0,60–0,70 | Da (topire 121 °C) | Răcorește; cristalizează la rece |
| Xilitol | E 967 | 2,4 | 0,95–1,00 | Da (topire 92–96 °C) | **Toxic pentru câini**; prag digestiv |
| Maltitol | E 965 | 2,4 | 0,80–0,90 | Da | Cel mai prost tolerat digestiv la doze de desert |
| Sorbitol | E 420 | 2,4 | 0,50–0,60 | Da | Prag digestiv foarte jos (~10 g) |
| Glicozide de steviol | E 960 | 0 | 200–350 | Da, până la ~200 °C | Amăreală și „coadă" metalică |
| Sucraloză | E 955 | 0 | ~600 | **Nu peste 120 °C** | Se descompune la coacere |
| Zaharină | E 954 | 0 | 300–400 | Da | Gust metalic la doze mari |
| Aspartam | E 951 | 4 (dar în mg) | 180–200 | **Nu** — se hidrolizează | Inutilizabil la copt; fenilalanină |
| Allulose | — | 0,2–0,4 | 0,70 | Da, se rumenește ca zahărul | **Neautorizat în UE** |

> **Cifra de 0 kcal/g pentru eritritol nu e o rotunjire de marketing, e o
> regulă.** Regulamentul (UE) 1169/2011 alocă poliolilor 2,4 kcal/g, cu o
> excepție explicită: eritritolul se declară cu **0 kcal/g** pe eticheta
> europeană. Realitatea metabolică e ~0,2 kcal/g (valoarea folosită de FDA în
> SUA), pentru că ~90% din eritritol se absoarbe în intestinul subțire și se
> excretă nemodificat prin urină. Cămara acestui proiect folosește 0,2 kcal/g
> (20 kcal/100 g), deci **calculele noastre vor arăta cu câteva kcal mai mult
> decât eticheta produsului**. Diferența e sub 5 kcal la orice porție reală și
> preferăm cifra fiziologică celei legale.

### 1.2 Zahăr alb — referința

- **4,0 kcal/g**, dulceață 1,00 prin definiție. Indice glicemic ~65.
- **Ce face pe lângă dulceață**, și de ce e greu de înlocuit:
  1. **Volum.** 100 g de zahăr ocupă loc într-un aluat. Un îndulcitor intens
     folosit în miligrame lasă o gaură în rețetă.
  2. **Higroscopicitate.** Zahărul leagă apă și o ține acolo. De asta un
     chec cu zahăr rămâne umed 3 zile, iar unul „fără zahăr" e uscat a doua zi.
  3. **Ridică temperatura de coagulare a proteinelor** cu ~5–10 °C. Ouăle
     dintr-o cremă cu zahăr se brânzesc mai greu. Într-un desert proteic fără
     zahăr, ai pierdut exact protecția asta.
  4. **Coboară punctul de îngheț** (§3) — motivul principal pentru care
     înghețata fără zahăr e o cărămidă.
  5. **Maillard și caramelizare.** Culoarea și 80% din aroma unui produs copt.
  6. **Hrană pentru drojdie**, irelevant la deserturi fără gluten.
- **Concluzie onestă:** niciun îndulcitor nu face toate cele șase. De asta o
  rețetă „fără zahăr" bună nu înlocuiește zahărul cu un singur lucru, ci cu
  trei: un bulk agent, un îndulcitor intens și un umectant.

### 1.3 Miere

- **3,04 kcal/g** (are ~17% apă), dulceață 1,1–1,3 față de zahăr, pentru că
  ~38% din ea e fructoză, care e mai dulce decât zaharoza.
- **Nu e „mai sănătoasă" decât zahărul.** 82 g zaharuri la 100 g. Diferența
  nutrițională față de zahăr alb, la o porție de 15 g, e sub pragul de
  detecție al oricărei metode. Diferența de gust e reală și e singurul motiv
  pentru care apare în rețete.
- **Comportament la căldură:** conține fructoză liberă și aminoacizi, deci
  face Maillard mult mai repede decât zahărul. Regula: la înlocuire, **scade
  temperatura cuptorului cu 10–15 °C** și verifică cu 5 minute mai devreme.
- **Substituție:** 100 g zahăr → **75–80 g miere** și **−20 ml lichid** din
  restul rețetei.
- Peste 25 g zaharuri pe porție, `DESSERT-SCHEMA §4` cere avertisment. O
  lingură de miere = ~21 g, din care ~17 g zaharuri. Două linguri într-o
  porție trec pragul.

### 1.4 Eritritol

**Cifrele.**

| Parametru | Valoare |
|---|---|
| Energie | 0 kcal/g pe eticheta UE, ~0,2 kcal/g real |
| Dulceață | 0,60–0,70 × zahăr |
| Indice glicemic | 0 |
| Absorbție intestinală | ~90%, excretat nemodificat în urină |
| Punct de topire | 121 °C |
| Solubilitate în apă (25 °C) | ~37 g / 100 g apă — **mică** |
| Căldură de dizolvare | −180 J/g (endotermă) |
| ADI (EFSA 2023) | **0,5 g / kg corp / zi** |
| ADI pentru 70 kg | **35 g / zi** |

**Ce face bine.** Nu ridică glicemia, nu hrănește bacteriile cariogene, are
volum (spre deosebire de îndulcitorii intenși), e stabil la copt și e cel mai
ieftin poliol „curat" de pe raftul din Sibiu (~45 lei/kg, estimat).

**Cele două defecte de textură, ambele explicabile fizic:**

1. **Răcorirea.** Dizolvarea eritritolului absoarbe **−180 J/g** din mediu.
   Pe limbă, mediul e limba ta. Efectul e proporțional cu cantitatea de
   cristale nedizolvate care ajung în gură: o glazură cu eritritol pudră
   răcorește puternic, aceeași cantitate dizolvată complet într-o cremă
   fiartă și răcită aproape deloc. **Truc care chiar funcționează:** macină
   eritritolul la pudră fină și dizolvă-l în partea lichidă caldă a rețetei
   (50–60 °C) înainte să-l amesteci cu restul. Al doilea truc: combină-l cu
   glicozide de steviol, ca să folosești 30–40% mai puțin eritritol pentru
   aceeași dulceață.
2. **Recristalizarea la rece.** Solubilitatea de ~37 g/100 g apă la 25 °C
   scade sub ~25 g/100 g la 4 °C. O cremă cu 15% eritritol care e limpede
   la temperatura camerei devine nisipoasă în frigider peste noapte, pentru
   că surplusul iese din soluție. La congelator e și mai rău (§3.2).
   **Prag practic: sub 10 g eritritol la 100 g de fază apoasă** pentru un
   desert care stă la frigider peste 12 ore.

**Prag digestiv.** Cel mai bine tolerat poliol dintre toate, tocmai pentru că
se absoarbe înainte de colon. NOEL-ul pentru diaree, măsurat cu doză unică în
apă pe stomacul gol: **0,66 g/kg la bărbați și 0,80 g/kg la femei**. EFSA a
folosit cel mai mic NOAEL, **0,5 g/kg corp/zi**, ca bază pentru ADI — adică
**35 g/zi la 70 kg**, **30 g/zi la 60 kg**, **45 g/zi la 90 kg**. Într-o
matrice solidă, cu mâncare, toleranța e mai mare decât în băutură pe stomacul
gol. Nu conta pe asta când scrii o rețetă.

#### Starea dovezilor: semnalul cardiovascular din 2023

Asta e singura secțiune din document unde dovada e activ contestată, deci
merită redată exact.

**Ce s-a publicat.**

- **Februarie 2023, Nature Medicine** (Witkowski și colab., laboratorul
  Hazen, Cleveland Clinic). Metabolomică netargetată pe o cohortă de
  descoperire, apoi **două cohorte de validare: SUA (n = 2 149) și Europa
  (n = 833)**, toate formate din pacienți trimiși la evaluare cardiacă.
  Rezultat: pacienții din cvartila superioară de **eritritol plasmatic** au
  avut de aproximativ **două ori** mai multe evenimente cardiovasculare majore
  (infarct, AVC, deces) la 3 ani față de cvartila inferioară. **[OBS]**
  În aceeași lucrare: eritritol adăugat in vitro în sânge, la concentrațiile
  văzute la pacienți, a crescut agregarea și aderența plachetară; și un model
  de tromboză la șoarece a arătat același lucru. **[MEC]**
- **August 2024, Arteriosclerosis, Thrombosis and Vascular Biology.** Studiu
  intervențional mic: voluntari sănătoși, **n = 10 pe braț**, au băut o
  soluție cu **30 g eritritol** sau 30 g glucoză. Eritritolul a crescut
  eritritolul plasmatic de peste 1 000 de ori și a crescut reactivitatea
  plachetară la stimul; glucoza nu. **[MEC]**
- **Iunie 2024, European Heart Journal.** Același grup, aceeași structură,
  pentru **xilitol**: asociere între xilitol plasmatic ridicat și evenimente
  la 3 ani, plus creșterea reactivității plachetare după **30 g xilitol**
  băut. **[OBS] + [MEC]**

**Ce NU poate arăta un studiu observațional, oricât de curat e făcut.**

1. **Direcția.** Eritritolul plasmatic nu vine în principal din alimentație.
   Corpul îl produce singur, din glucoză, prin **calea pentozo-fosfaților**,
   iar producția endogenă crește în hiperglicemie și stres oxidativ. Deci un
   eritritol plasmatic mare poate fi **un marker al unui metabolism bolnav**,
   nu o consecință a îndulcitorului. Asta nu e o obiecție de complezență: e
   exact mecanismul biochimic prin care asocierea s-ar putea inversa.
2. **Expunerea nu a fost măsurată.** În cohortele din 2023 **nimeni nu a
   întrebat participanții cât eritritol mănâncă.** S-a măsurat molecula din
   sânge, nu ingredientul din farfurie.
3. **Populația.** Pacienți trimiși la evaluare cardiacă, nu populație
   generală. Nu se poate extrapola la un om de 30 de ani care pune 8 g de
   eritritol în budinca de seară.
4. **Confuzia reziduală.** Consumul de îndulcitori e corelat cu obezitatea,
   diabetul și dieta — adică exact cu factorii de risc cardiovascular.

**Și ce nu poate arăta nici studiul mecanistic din 2024:** 10 oameni pe braț,
o singură doză mare, un **marker surogat** (agregometrie plachetară), zero
evenimente clinice. O creștere de reactivitate plachetară măsurată în
laborator nu e un infarct.

**Ce spun autoritățile acum. [REG]**

- **EFSA**, re-evaluarea eritritolului (E 968) din 2023: îl menține autorizat,
  stabilește ADI **0,5 g/kg corp/zi** ca protecție împotriva efectului laxativ,
  și scrie explicit că *dovezile actuale nu arată o legătură de tip cauză-efect
  între consumul de alimente cu eritritol și riscul cardiovascular*, adăugând
  că *cercetări suplimentare ar fi utile pentru clarificarea naturii asocierii
  observate*. EFSA notează și incertitudinea de fond: nu e clar dacă nivelurile
  circulante din studiile epidemiologice reflectă expunerea alimentară.
- **FDA**: a evaluat lucrarea din 2023 în urma unei petiții publice și a
  concluzionat că studiile observaționale citate **nu stabilesc o legătură
  cauzală**. Eritritolul rămâne GRAS. FDA declară că monitorizează în
  continuare.

**Poziția acestui document.** Semnalul e real ca semnal: s-a reprodus în două
cohorte, are un mecanism plauzibil, și acum are și un studiu intervențional pe
oameni pe marker surogat. Dar designul nu poate separa „eritritolul mâncat" de
„eritritolul fabricat de un metabolism deteriorat", și nu există niciun studiu
randomizat cu rezultate clinice. Deci:

> **Nu scriem „eritritolul e periculos". Nu scriem nici „s-a demontat".**
> Scriem că la 5–10 g pe porție, ocazional, dovada actuală nu susține panica —
> și că la 30–50 g pe zi, zilnic, ani la rând, dovada nu e suficientă nici ca
> să spunem „sigur". Cine vrea marja maximă de siguranță are o opțiune ieftină:
> mai puțin îndulcitor total, prin combinație cu un îndulcitor intens.

### 1.5 Xilitol

**Cifrele.**

| Parametru | Valoare |
|---|---|
| Energie | 2,4 kcal/g (valoarea UE pentru polioli) |
| Dulceață | 0,95–1,00 × zahăr — cea mai apropiată de zahăr din tot grupul |
| Indice glicemic | ~7–13 |
| Punct de topire | 92–96 °C |
| Căldură de dizolvare | −153 J/g (răcorește, dar mai puțin ca eritritolul) |
| Solubilitate | ~64 g / 100 g apă la 25 °C — mult mai bună decât eritritolul |
| Prag digestiv adulți | ~20–40 g/zi, cu adaptare în 2–3 săptămâni |

**De ce e cel mai bun tehnic și totuși nu e prima alegere.** Dulceață 1:1,
nu cristalizează la frigider ca eritritolul, coboară punctul de îngheț mai
mult decât zahărul (§3.2), se comportă previzibil la copt. Dacă ar fi doar
despre bucătărie, xilitolul ar câștiga. Are însă 2,4 kcal/g — adică **60% din
caloriile zahărului**, nu zero — un prag digestiv real, și problema de mai jos.

> ### ⚠️ Xilitolul e toxic pentru câini. Nu e o precauție teoretică.
>
> - **Peste 0,1 g / kg de greutate corporală** → risc de hipoglicemie severă.
>   Xilitolul declanșează la câine o eliberare masivă de insulină, lucru pe
>   care nu îl face la om. Semnele apar în **30–60 de minute**: vărsături,
>   slăbiciune, tremur, convulsii, comă.
> - **Peste 0,5 g / kg** → risc de **insuficiență hepatică acută**. Enzimele
>   hepatice cresc în 4–12 ore; semnele clinice pot apărea abia la 24–48 de ore,
>   adică după ce pare că a trecut.
> - **Ce înseamnă în grame reale:**
>
> | Greutatea câinelui | Doza cu risc de hipoglicemie | Doza cu risc hepatic |
> |---:|---:|---:|
> | 5 kg (pisicuță de câine) | **0,5 g** | 2,5 g |
> | 10 kg | 1 g | 5 g |
> | 20 kg | 2 g | 10 g |
> | 35 kg (ciobănesc) | 3,5 g | 17,5 g |
>
> Un singur cub de fudge proteic cu 8 g de xilitol e peste pragul hepatic
> pentru un câine de 15 kg. O linguriță rasă de xilitol pur cântărește ~4 g.
> **Un covrigel scăpat pe jos e o urgență veterinară.**
>
> Regula proiectului: orice rețetă cu xilitol primește `warnings` cu textul
> ăsta, iar `tips` spune unde se depozitează. Xilitolul e toxic și pentru
> **dihori**. La pisici nu există dovezi de toxicitate comparabilă, dar nici
> motiv să testezi.

**Practic:** dacă în casă e un câine, folosește eritritol. Nu e o preferință
culinară, e o decizie de siguranță cu un cost de gust mic.

### 1.6 Maltitol

- **2,4 kcal/g** pe eticheta UE (valoarea fiziologică măsurată e ~2,1–3,0
  kcal/g, în funcție de studiu). **Nu e un îndulcitor „fără calorii".**
- **Dulceață 0,80–0,90**, cea mai apropiată de zahăr după xilitol.
- **Indice glicemic ~35.** Maltitolul **ridică glicemia** — jumătate cât
  zahărul, dar o ridică. Un „ciocolată keto" cu 20 g maltitol pe tabletă nu e
  neutru glicemic, indiferent ce scrie pe ambalaj.
- **Comportamentul e cel mai apropiat de zahăr** dintre toți poliolii:
  se topește, dă corp, nu răcorește, nu cristalizează. De asta industria îl
  folosește în ciocolata „fără zahăr" și în fulgii de ciocolată din cămară
  (`fulgi-ciocolata`, 40 g polioli la 100 g).
- **Prețul:** e cel mai prost tolerat digestiv la dozele de desert. Se absoarbe
  parțial în intestinul subțire, restul fermentează în colon. Literatura
  citează toleranță de **30–50 g/zi**, dar pragul de *confort* la doză unică
  e mult mai jos: **20–25 g** dintr-o singură șezare produc frecvent balonare
  și crampe la oameni neobișnuiți.
- **Regula pentru rețete:** dacă rețeta folosește fulgi de ciocolată fără
  zahăr, 15 g pe porție înseamnă deja ~6 g de polioli înainte să pui
  îndulcitorul propriu-zis. Se adună.

### 1.7 Sorbitol

- **2,4 kcal/g**, dulceață **0,50–0,60** — trebuie de două ori mai mult pentru
  aceeași dulceață, deci de două ori mai mulți polioli.
- **Cel mai jos prag digestiv din grup:** ~**10 g/zi** produce simptome ușoare
  la majoritatea oamenilor sănătoși, iar **20 g/zi** produce dureri abdominale
  și diaree la o parte semnificativă dintre ei.
- **Nu se folosește ca îndulcitor principal.** Apare accidental: în gumă de
  mestecat, în bomboane fără zahăr, în siropuri, și **natural în fructe** —
  prunele uscate (~15 g/100 g), perele (~2 g/100 g), merele (~0,5 g/100 g),
  cireșele. Un desert cu prune uscate și eritritol poate să treacă pragul de
  polioli fără ca cineva să fi pus vreun poliol în el.
- Sorbitolul e higroscopic și **nu cristalizează** — de asta e bun ca umectant
  în batoane, la 3–5 g pe baton, exact sub pragul care supără.

### 1.8 Glicozide de steviol (stevie)

- **0 kcal.** Dulceață **200–350 ×** zahărul, în funcție de glicozidă:
  stevioside ~150–300 ×, rebaudiosidă A ~200–300 ×, rebaudiosidă M ~250–350 ×
  și cu cel mai curat gust.
- **[REG] ADI: 4 mg / kg corp / zi**, exprimat ca **echivalenți de steviol**
  (EFSA, în acord cu JECFA). Pentru 70 kg = **280 mg steviol/zi**. Cum
  glicozidele au ~30–40% masă de steviol, asta înseamnă practic **700–900 mg
  de glicozide pure pe zi** — o cantitate pe care e greu să o atingi cu
  bucătăria de casă, dar ușor cu 3–4 litri de băutură îndulcită.
- **Defectul: amăreala.** Glicozidele de steviol se leagă și de receptorii de
  amar (TAS2R4 și TAS2R14), nu doar de cei de dulce. Efectul e
  **supraliniar**: sub pragul de percepție e curat, peste el amăreala crește
  brusc. De asta un desert „cu puțină stevie" e bun, iar același desert cu
  dublu e necomestibil.
  - **Rebaudiosida M** are cea mai mică amăreală, dar e cea mai scumpă.
  - **Amăreala se maschează** cu: sare (un vârf de cuțit), acid (zeamă de
    lămâie), grăsime, vanilie, și — cel mai eficient — cu eritritol.
- **Comportament la căldură:** stabil până la ~200 °C, deci merge la copt. Dar
  nu dă **niciun volum**, deci nu poate înlocui zahărul singur.
- **Ce cumperi de fapt în Sibiu:** produsele etichetate „stevie 1:1" sunt
  **97–99% eritritol** cu 1–3% glicozide. Cămara le tratează corect:
  `stevie-pudra` are `polyol: 96`. Când calculezi poliolii pe porție, **stevia
  pudră se pune la polioli, nu la zero.** Stevia lichidă (`stevie-lichida`)
  e singura cu adevărat fără polioli — și singura care nu dă volum deloc.

### 1.9 Sucraloză

- **0 kcal** ca ingredient. Dulceață **~600 ×** zahărul. Se absoarbe 11–27%,
  nu se metabolizează pentru energie.
- **[REG]** ADI: **15 mg/kg corp/zi** în UE (EFSA), **5 mg/kg/zi** la FDA.
  Pentru 70 kg, limita europeană = 1 050 mg/zi. La dulceață 600 ×, 1 mg de
  sucraloză îndulcește cât 0,6 g de zahăr — practic imposibil de atins acasă.
- **[REG] Re-evaluarea EFSA (2026)**: sucraloza rămâne **sigură pentru
  utilizările actuale autorizate**. Dar în aceeași opinie, EFSA a **refuzat
  extinderea autorizării la produse fine de panificație**, tocmai din cauza
  posibilei formări de compuși clorurați la coacere.
- **De aici vine singura regulă practică importantă:**

> **Nu coace cu sucraloză.** Sucraloza e stabilă sub ~119 °C. De la ~120 °C
> începe să piardă apă, iar în jur de 130 °C elimină HCl; la temperaturi de
> cuptor (170–200 °C), mai ales în prezență de grăsime și glicerol, se pot
> forma cloropropanoli și compuși organoclorurați. Institutul german BfR a
> emis o notificare specifică pe tema asta, iar EFSA a folosit exact acest
> argument ca să blocheze extinderea la panificație fină.
>
> Cât de mare e riscul real la o tavă de brownie făcută o dată pe lună?
> **Nu se știe** — nu există date de expunere umană care să răspundă.
> Dar costul evitării e zero: eritritolul, xilitolul și stevia sunt stabile la
> cuptor. Când alternativa e gratuită, nu se face pariul.

- Unde e potrivită: **băuturi reci, creme necoapte, glazuri, înghețată,
  cheesecake fără coacere.** Adică exact familia `no-bake`, `drink`, `frozen`.
- **Capcană de etichetă:** „Sucraloză pudră 1:1" din raft e **maltodextrină**
  cu 0,5–1% sucraloză. Maltodextrina are ~4 kcal/g și **indice glicemic
  85–105 — mai mare decât al zahărului**. Un desert îndulcit cu 60 g de
  „sucraloză 1:1" are ~240 kcal de carbohidrați rapizi în el. Se citește
  eticheta.

### 1.10 Zaharină

- **0 kcal.** Dulceață **300–400 ×**. Cel mai vechi îndulcitor sintetic
  (1879) și cel mai bine studiat pe termen lung.
- **[REG]** EFSA a re-evaluat zaharina și sărurile ei (E 954) în **noiembrie
  2024** și a **crescut ADI de la 5 la 9 mg/kg corp/zi**, exprimat ca imidă
  liberă. Motivul: tumorile de vezică urinară observate istoric la șobolanul
  mascul au un mecanism specific speciei (cristalurie de proteine urinare
  proprii rozătoarelor), **nerelevant pentru om**. Aceeași opinie notează că
  doar procesul de fabricație R&F nu ridică probleme de impurități.
- **Defect de gust:** „coadă" metalică și amară la doze mari, mai pronunțată
  decât la sucraloză. Se maschează bine în combinație cu ciclamat (raport
  clasic 1:10) — dar ciclamatul nu e ușor de găsit la raft în România.
- **Stabilă la căldură**, deci teoretic bună la copt. Practic e rar folosită
  acasă pentru că gustul e mai greu de ascuns decât al sucralozei.

### 1.11 Aspartam

- **4 kcal/g** nominal (e un dipeptid, se digeră ca proteina), dar la
  180–200 × dulceață se folosesc miligrame, deci contribuția calorică e ~0.
- **[REG]** **ADI 40 mg/kg corp/zi** (EFSA 2013, reconfirmat de JECFA în
  2023). Pentru 70 kg = 2 800 mg/zi, echivalentul a ~14 doze de băutură
  răcoritoare dietetică.
- **[REG] Iulie 2023 — cele două verdicte care se citează greșit împreună:**
  - **IARC** a clasificat aspartamul **Grupa 2B, „posibil cancerigen pentru
    om"**, pe baza unor dovezi *limitate* epidemiologic, *limitate* pe animale
    și *limitate* mecanistic. Grupa 2B e o clasificare de **pericol** (poate
    face rău în vreo circumstanță), nu de **risc** (face rău la dozele reale).
    În aceeași grupă stau extractul de aloe vera și legumele murate.
  - **JECFA**, în aceeași zi, a **reconfirmat ADI de 40 mg/kg**, a concluzionat
    că nu există îngrijorare de carcinogenitate la animale prin expunere orală
    și că dovada asocierii cu cancerul la om **nu e convingătoare**.
  - Cele două nu se contrazic: IARC răspunde la „poate?", JECFA la „la cât?".
- **Nerezistent la căldură.** Se hidrolizează și se ciclizează în
  dicetopiperazină; peste ~80–90 °C, sau după ore la pH extrem, **își pierde
  dulceața**. Nu e o problemă de siguranță, e o problemă de rezultat: un
  desert copt cu aspartam iese nedulce.
- **Fenilcetonurie:** conține fenilalanină. În UE, produsele cu aspartam
  poartă obligatoriu mențiunea „conține o sursă de fenilalanină". Dacă o
  rețetă îl folosește, textul trebuie să existe și în `warnings`.
- **Verdict pentru deserturi:** rareori merită. Nu se coace, nu dă volum,
  are un istoric de controversă care sperie cititorul, și există alternative
  echivalente ca gust.

### 1.12 Allulose — și de ce nu apare în rețetele noastre

**Ce este.** D-allulose (D-psicoză) e un monozaharid rar, epimerul C-3 al
fructozei. **0,2–0,4 kcal/g** (FDA folosește 0,4), dulceață **0,70 × zahăr**,
indice glicemic ~0, **se caramelizează și face Maillard ca zahărul**, și — cel
mai important pentru §3 — **nu cristalizează și coboară punctul de îngheț**
aproape ca fructoza. Pe hârtie e cel mai bun îndulcitor pentru deserturi
inventat până acum.

**[REG] Statutul în UE.** Allulose e **aliment nou (novel food)** și **nu e
autorizat în Uniunea Europeană**. O cerere depusă în august 2018 de Petiva
Europe SA a fost evaluată de EFSA, iar în **opinia adoptată la 6 mai 2025**
Panelul a concluzionat că **siguranța D-allulozei nu poate fi stabilită** —
nu pentru că ar fi găsit un pericol, ci din cauza unor **lacune de date**:
lipsea un studiu combinat de toxicitate cronică și carcinogenitate și datele
umane pe consum de lungă durată erau insuficiente. Solicitantul, contactat de
mai multe ori, nu a răspuns cererilor de date suplimentare.

> **Formularea contează.** „EFSA nu a putut stabili siguranța" **nu** înseamnă
> „EFSA a găsit că e periculos". Înseamnă că dosarul era incomplet. Ușa rămâne
> deschisă pentru o cerere nouă, cu date complete. Până atunci, în UE nu se
> poate vinde legal ca aliment.

**Se găsește realist în România?** **Nu.** Nu în Kaufland, Lidl, Auchan,
Carrefour, Profi, Mega Image, nu în Plafar, nu în farmacii. Ce apare ocazional
pe marketplace-uri online sunt **importuri gri**, din SUA sau Asia, unde
allulose e permis — vândute deseori ca „ingredient de cofetărie" fără să
declare statutul. Preț tipic la import: 150–300 lei/kg, plus riscul ca
transportul să fie oprit.

**Consecința pentru proiect.** [DESSERT-SCHEMA §5](DESSERT-SCHEMA.md) interzice
explicit rețetele cu allulose, și are dreptate. Menționăm allulose în document
dintr-un singur motiv: **jumătate din rețetele de „înghețată proteică cremoasă"
de pe internetul american funcționează pentru că folosesc allulose.** Dacă
încerci una dintre ele cu eritritol, îți iese o cărămidă și crezi că ai greșit
tu. Nu ai greșit tu — ai schimbat singurul ingredient care făcea treaba.

### 1.13 Pragurile digestive, toate într-un loc

| Poliol | Prag confortabil / porție | Prag / zi | Ce se întâmplă peste |
|---|---:|---:|---|
| **Eritritol** | 20–25 g | ~35 g (ADI la 70 kg) | Borborisme, greață; diaree peste ~0,66 g/kg doză unică |
| **Xilitol** | 15–20 g | 20–40 g (cu adaptare) | Balonare, diaree osmotică |
| **Maltitol** | 10–15 g | 30–50 g | Balonare și crampe, cel mai frecvent reclamat |
| **Sorbitol** | 5 g | ~10 g | Simptome la 10 g, dureri la 20 g |
| **Izomalt** | 10–15 g | 30–40 g | Ca maltitolul |
| **Manitol** | 5 g | ~10 g | Ca sorbitolul |

**Trei lucruri care nu apar în tabel și care contează mai mult decât tabelul:**

1. **Poliolii se adună, iar malabsorbția crește când sunt combinați.**
   8 g eritritol + 6 g maltitol din fulgii de ciocolată + 3 g sorbitol din
   prunele uscate = 17 g de polioli amestecați, care supără mai tare decât
   17 g dintr-unul singur. `DESSERT-SCHEMA §4` cere `warnings` peste **15 g
   polioli pe porție** — pragul e pe **total**, nu pe ingredient.
2. **Lichidul e mai rău decât solidul.** Aceeași cantitate într-un shake, pe
   stomacul gol, ajunge în colon mai repede și mai concentrat decât într-un
   brownie mâncat după masă. Pragurile de mai sus sunt măsurate în condiții
   de laborator, adică în cel mai rău caz.
3. **Sindromul de intestin iritabil schimbă complet scara.** Poliolii sunt
   „P"-ul din FODMAP. Pentru cineva cu SII, pragurile de toleranță din
   protocoalele low-FODMAP sunt de ordinul **0,15–0,4 g pe porție** pentru
   sorbitol și manitol — de zeci de ori mai mici. Un desert cu 12 g de
   eritritol, care pentru majoritatea e inofensiv, poate fi o seară pierdută.
   Rețetele nu pot compensa asta; avertismentul poate.

### 1.14 De ce amestecurile bat îndulcitorul unic

Trei motive, toate măsurabile:

1. **Sinergie de dulceață.** Amestecurile de îndulcitori intenși dau o
   dulceață percepută **mai mare decât suma părților** — de obicei cu 10–30%
   pentru perechi ca stevie + sucraloză sau zaharină + ciclamat. Practic:
   folosești mai puțin din fiecare, deci mai puțină amăreală de la fiecare.
2. **Anularea defectelor de gust.** Amăreala steviei apare la capătul
   percepției; răcorirea eritritolului apare la început. Un amestec de
   eritritol + stevie folosește **30–40% mai puțin eritritol** (deci mai puțină
   răcorire și mai puțin poliol) și **puțină stevie** (deci sub pragul de
   amar). Ăsta e motivul pentru care produsul comercial „stevie 1:1" există.
3. **Volum fără polioli.** Un desert care are nevoie de corp poate lua volumul
   din altceva decât dintr-un poliol: **fibră de cicoare (inulină)**, **fibră
   de porumb solubilă**, sau chiar **pudră de lapte degresat**. Atenție:
   inulina e tot un FODMAP și își are propriul prag (~10 g/zi la mulți oameni).

**Rețeta de amestec care funcționează cel mai des în bucătăria de casă [EST]:**
pentru dulceața a 100 g de zahăr, folosește **100–110 g eritritol pudră** plus
**stevie lichidă până la gust (de obicei 6–12 picături)**. Ai volumul
eritritolului, dar cu 25% mai puțin poliol decât dacă mergeai pe eritritol
singur, și fără amăreală.

### Surse — §1

- [EFSA — Re-evaluarea eritritolului (E 968) ca aditiv alimentar, rezumat în limbaj simplu](https://www.efsa.europa.eu/en/plain-language-summary/re-evaluation-erythritol-e-968-food-additive)
- [EFSA Journal — Re-evaluation of erythritol (E 968) as a food additive (2023)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10731997/)
- [Witkowski et al., „The artificial sweetener erythritol and cardiovascular event risk", Nature Medicine, 2023](https://www.nature.com/articles/s41591-023-02223-9)
- [NIH Research Matters — Erythritol and cardiovascular events](https://www.nih.gov/news-events/nih-research-matters/erythritol-cardiovascular-events)
- [FDA — Evaluarea articolului „The artificial sweetener erythritol and cardiovascular event risk" (răspuns la petiție)](https://www.fda.gov/media/182122/download)
- [„Ingestion of the Non-Nutritive Sweetener Erythritol… Enhances Platelet Reactivity", ATVB, 2024](https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.321019)
- [„Erythritol and xylitol and cardiovascular disease risk: a growing concern", European Heart Journal, 2024](https://academic.oup.com/eurheartj/article/46/29/2931/7905370)
- [„Sweeteners: erythritol, xylitol and cardiovascular risk — friend or foe?", Cardiovascular Research](https://academic.oup.com/cardiovascres/article/121/9/1319/8153562)
- [„Plasma erythritol and cardiovascular risk: is there evidence for an association with dietary intake?"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10242034/)
- [Oku & Noda — Laxative threshold of sugar alcohol erythritol in human subjects](https://www.sciencedirect.com/science/article/abs/pii/027153179600036X)
- [„A Systematic Review of the Effects of Polyols on Gastrointestinal Health and Irritable Bowel Syndrome"](https://www.sciencedirect.com/science/article/pii/S2161831322006901)
- [Merck Veterinary Manual — Xylitol Toxicosis in Dogs](https://www.merckvetmanual.com/toxicology/food-hazards/xylitol-toxicosis-in-dogs)
- [Cornell University College of Veterinary Medicine — Xylitol toxicities](https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/xylitol-toxicities)
- [EFSA Journal — Re-evaluation of sucralose (E 955) and the fine bakery wares application (2026)](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2026.9854)
- [BfR — Sucralose: heating above 120 °C can produce substances that are harmful to health](https://www.bfr.bund.de/assets/01_Ver%C3%B6ffentlichungen/Mitteilungen_englisch/sucralose-heating-above-120-degrees-can-produce-substances-that-are-harmful-to-health.pdf)
- [EFSA Journal — Re-evaluation of saccharin and its salts (E 954), noiembrie 2024](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2024.9044)
- [EFSA Journal — Steviol glycosides (E 960a–d): extinderea autorizării și ADI (2024)](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2024.9045)
- [OMS — Aspartame hazard and risk assessment results released (14 iulie 2023)](https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released)
- [IARC — Summary of findings: Aspartame](https://www.iarc.who.int/wp-content/uploads/2023/07/Summary_of_findings_Aspartame.pdf)
- [JECFA — Summary of findings, aspartame](https://cdn.who.int/media/docs/default-source/nutrition-and-food-safety/jecfa-summary-of-findings-aspartame.pdf)
- [EFSA Journal — Safety of D-allulose as a novel food (opinie adoptată 6 mai 2025)](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468)
- [FDA — Aspartame and Other Sweeteners in Food](https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food)

---

## 2. Cum se poartă proteina pudră

### 2.1 Ce sunt, de fapt, cele cinci pudre

Toate pornesc de la lapte, soia sau mazăre, dar diferă prin **cât de mult au
fost prelucrate** și prin **structura moleculară care rămâne**. Structura
decide comportamentul în bucătărie, nu procentul de pe cutie.

| Pudră | Proteină / 100 g | Lactoză | Grăsime | Structura care rămâne |
|---|---:|---:|---:|---|
| **Whey concentrat (WPC 80)** | 70–80 g | 4–8 g | 4–8 g | Proteine globulare intacte, plus lactoză și fosfolipide |
| **Whey izolat (WPI 90)** | 88–92 g | < 1 g | < 1 g | Aproape numai proteine globulare |
| **Whey hidrolizat (WPH)** | 80–90 g | < 2 g | < 2 g | Peptide scurte, tăiate enzimatic |
| **Cazeină micelară** | 78–85 g | 3–6 g | 1–2 g | Micele intacte, structură cvasi-dezordonată |
| **Proteină vegetală (mazăre/soia/orez)** | 75–85 g | 0 | 2–9 g | Globuline mari (legumină, vicilină, glicinină) |

### 2.2 Whey concentrat (WPC)

- **Cea mai iertătoare pudră la copt din tot grupul**, și asta e
  contraintuitiv: are cel mai *puțin* protein pe gram, deci exact restul —
  cele 4–8 g de lactoză și 4–8 g de grăsime la 100 g — face treaba.
  **Lactoza e un zahăr**: reține apă, participă la Maillard, dă culoare și
  ridică ușor temperatura de coagulare. **Grăsimea scurtează** rețeaua de
  proteină și împiedică contracția.
- **Consecință practică:** dacă un blat cu izolat iese ca o burete de vase,
  primul lucru de încercat nu e mai mult lichid, ci **schimbarea izolatului pe
  concentrat**. Diferența e vizibilă la același gramaj.
- Punct slab: lactoza. Pentru cine e intolerant, 30 g de WPC înseamnă ~2 g de
  lactoză — sub pragul de simptome al majorității, dar nu al tuturor.

### 2.3 Whey izolat (WPI)

- 88–92 g proteină, sub 1 g lactoză, sub 1 g grăsime. **Cea mai curată pe
  macro-uri și cea mai dificilă în aluat.** Nu are niciunul dintre
  amortizoarele concentratului.
- Se dizolvă limpede în apă rece, deci e prima alegere pentru
  **jeleuri, băuturi limpezi și glazuri**.
- **Gelifiere:** izolatul formează gelul cel mai tare la aceeași concentrație,
  pentru că are cea mai mare densitate de grupări tiol libere care fac punți
  disulfurice la încălzire. Gel tare = textură cauciucată. Ce e o virtute
  într-un jeleu e un defect într-un chec.

### 2.4 Whey hidrolizat (WPH)

- Proteina e deja tăiată enzimatic în peptide de 2–20 aminoacizi. Gradul de
  hidroliză (DH) e între 5% și 30%.
- **Nu gelifiază** — nu mai are structură terțiară de desfăcut. Deci ca agent
  de structură într-un desert e **inutil**. Nu strică textura, dar nici nu
  aduce nimic.
- **Se rumenește mult mai repede.** Hidroliza eliberează grupări amino libere,
  care sunt exact reactanții reacției Maillard. Un blat cu hidrolizat se
  închide la culoare cu 3–5 minute mai devreme decât același blat cu izolat.
  Scade temperatura cu 10 °C.
- **E amar.** Hidroliza expune resturi hidrofobe care se leagă de receptorii de
  amar. La 25–30% DH, amăreala e greu de mascat cu altceva decât cacao.
- E și cea mai scumpă. Într-un desert nu are ce căuta; e o pudră pentru shake
  post-antrenament, unde viteza de absorbție e argumentul.

### 2.5 Cazeină micelară

Pudra cea mai prost înțeleasă și cea mai utilă la deserturi.

- **Nu se denaturează ca whey-ul.** Cazeinele (αs1, αs2, β, κ) sunt proteine
  cvasi-dezordonate: nu au o structură terțiară compactă pe care s-o piardă.
  De asta **micelele de cazeină supraviețuiesc tratamentului UHT** (140 °C,
  câteva secunde) fără să coaguleze. Poți fierbe cazeina; nu poți fierbe
  whey-ul.
- **Leagă enorm de multă apă.** O micelă de cazeină hidratată ține în jur de
  **3,7 g de apă pe gram de proteină** în interiorul structurii. Asta e
  motivul fizic pentru care:
  - budinca de cazeină se face singură, fără gelatină și fără fiert;
  - un blat cu 30% cazeină rămâne umed a doua zi, iar unul cu 30% whey nu;
  - „protein fluff"-ul cu cazeină ține volumul, iar cel cu izolat se lasă.
- **Gelifiază la acid, nu la căldură.** Punctul izoelectric al cazeinei e
  **pH 4,6**. Sub el, micelele se agregă — exact ce se întâmplă în iaurt și
  în brânza proaspătă. Într-un desert, asta înseamnă: **cazeină + zeamă de
  lămâie = îngroșare instantanee**, uneori nedorită.
- **Absoarbe apa lent, dar continuu.** Un aluat cu cazeină care pare corect la
  amestecare va fi vizibil mai gros după 10 minute. Se lasă 10 minute înainte
  de a decide dacă mai are nevoie de lichid — altfel adaugi lichid degeaba și
  obții un blat lipicios.
- **Regula de aur pentru copt:** amestecul **50% whey + 50% cazeină** dă
  aproape întotdeauna un rezultat mai bun decât oricare dintre ele singură.
  Whey-ul construiește structura devreme, cazeina ține apa până la final.

### 2.6 Proteine vegetale

- **Mazăre:** proteinele majore sunt legumina (11S) și vicilina (7S), cu
  temperaturi de denaturare de **~75–90 °C**, deci mai sus decât whey-ul. Nu
  gelifiază fin; **absoarbe** 1,5–3 × greutatea ei în apă și rămâne cu o
  senzație ușor nisipoasă. Gust de mazăre, care se ascunde bine în cacao și
  rău în vanilie.
- **Soia:** glicinină (11S) denaturează la **~90 °C**, β-conglicinina (7S) la
  **~75 °C**. Soia gelifiază mai bine decât mazărea. **Singura proteină
  vegetală comună cu profil complet de aminoacizi** — de asta
  `METHODOLOGY §4` îi dă factor 1,00 în loc de 0,88.
- **Orez:** cea mai granuloasă. Lizina e aminoacidul limitant. Merge doar în
  combinație (clasic: 70% orez + 30% mazăre, care se completează reciproc).
- **Cânepă:** 50% proteină în cel mai bun caz, restul fibră și grăsime. Textură
  grosieră, gust puternic.
- **Comportamentul comun:** absorb mult, nu construiesc rețea elastică, se
  usucă la copt. Un desert vegan cu proteină de mazăre are aproape întotdeauna
  nevoie de **un liant separat** (chia, psyllium, in) — proteina nu-l ține.

### 2.7 Temperaturile de denaturare, într-un tabel

| Proteină | Temperatură de denaturare | Ce se întâmplă |
|---|---:|---|
| Lactoferină | ~60–65 °C | Prima care cedează, dar e în urme |
| Albumină serică bovină (BSA) | ~64 °C | Începe agregarea |
| α-lactalbumină | ~62–68 °C | Se desface, dar se poate replia |
| β-lactoglobulină (~50% din whey) | **~72–78 °C** | **Punctul critic**: expune tiolii, face punți disulfurice, agregă ireversibil |
| Imunoglobuline | ~72 °C | Agregare |
| Ovalbumină (albuș) | coagulează de la 62 °C | Setează structura |
| Gălbenuș | coagulează 65–70 °C | Îngroașă cremele |
| **Cazeină micelară** | **nu are punct de denaturare util** | Rezistă la 140 °C în UHT |
| β-conglicinină (soia) | ~75 °C | |
| Glicinină (soia) | ~90 °C | |
| Legumină (mazăre) | ~75–90 °C | |

**Cifra care contează practic: 70–75 °C.** Sub ea, whey-ul e o soluție. Peste
ea, e o rețea care se strânge. Toate regulile din §2.8 și §2.10 decurg din
această singură temperatură.

### 2.8 De ce iese uscat și cauciucat — mecanismul, pas cu pas

Nu e „prea multă proteină". Sunt patru lucruri care se întâmplă simultan.

1. **Rețeaua se face prea devreme.** Într-un blat obișnuit, amidonul din făină
   gelatinizează la 52–85 °C și absoarbe apă, iar structura se fixează spre
   sfârșitul coacerii. Într-un blat cu whey, β-lactoglobulina se desface la
   72 °C — adesea **înainte** ca aluatul să-și fi terminat expansiunea. Blatul
   se „închide" din interior și nu mai crește.
2. **Rețeaua se contractă și stoarce apa.** Legăturile disulfurice continuă
   să se formeze cât timp temperatura crește. Gelul se strânge (sinereză) și
   **împinge apa afară** din matrice, unde se evaporă imediat. Apa care era
   legată în aluat înainte de coacere nu mai e legată după. De aici senzația
   de „uscat" — nu ai pus prea puțin lichid, l-ai pierdut la 80 °C.
3. **Gelul de whey e scurt și tare, nu extensibil.** Glutenul e viscoelastic:
   se întinde și revine. Gelul de β-lactoglobulină e **fragil și rigid** — se
   rupe la deformare mică. La mușcătură asta se citește exact ca „cauciucat".
4. **Lipsesc toate substanțele care înmoaie.** Într-un desert proteic tipic ai
   scos zahărul (care ținea apă și ridica temperatura de coagulare) și ai
   scos grăsimea (care scurta rețeaua). Ai lăsat proteina singură, într-un
   mediu fără niciun amortizor.

**Cele cinci contramăsuri, în ordinea eficienței [EST]:**

| Măsură | Cât | De ce funcționează |
|---|---|---|
| Scade proporția de pudră | vezi §2.9 | Sub pragul de rețea continuă |
| Înlocuiește jumătate din whey cu cazeină | 50/50 | Cazeina ține apa până la final |
| Adaugă grăsime | 8–15 g / porție (unt de arahide, gălbenuș, iaurt gras) | Întrerupe rețeaua |
| Adaugă un umectant | 20–40 g iaurt grecesc, brânză de vaci, dovleac, banană, mere rase | Apă legată care nu se stoarce |
| Scade temperatura și timpul | 160–170 °C în loc de 180–190 °C, și scoate-l cu 2 minute mai devreme | Mai puțină contracție |

> **Regula cea mai importantă la coacerea cu whey: scoate-l când pare
> insuficient copt.** Un blat obișnuit se mai „așază" în cuptor; unul cu whey
> se usucă în ultimele 3 minute. Scobitoarea trebuie să iasă cu câteva
> firimituri umede, nu curată.

### 2.9 Cât whey e prea mult

Trei praguri diferite, pentru trei tipuri de produs. Toate exprimate ca
**procent din masa uscată totală** (făinuri + pudre + cacao + îndulcitor
solid), nu din masa totală a aluatului.

| Tip de produs | Pudră proteică din masa uscată | Note |
|---|---:|---|
| Chec, muffin, blat pufos | **20–25%** | Peste 30% începe cauciucul. Peste 40% e nemâncabil. |
| Brownie, blat dens, prăjitură umedă | **25–33%** | Grăsimea și cacaua compensează |
| Fursec, biscuit crocant | **15–20%** | Vrei sfărâmicios, nu elastic; whey-ul face invers |
| Clătită, gogoașă la tigaie | **30–40%** | Timp scurt la temperatură joasă, mai iertător |
| Mug cake | **30–35%** | Microundele încălzesc din interior; ies uscate ușor |
| No-bake (bile, batoane, creme) | **până la 60%** | Fără căldură nu există problema; limita e gustul |
| Băutură | oricât | Limita e solubilitatea |

**Regula de lichid care merge cu tabelul [EST]:** pentru fiecare **30 g de
pudră** care înlocuiește făină, adaugă **15–25 ml de lichid** în plus. Whey-ul
absoarbe mai puțin decât făina înainte de coacere, dar pierde mai mult în
timpul ei. Pentru cazeină, cifra e mai mare: **30–40 ml la 30 g**.

### 2.10 Ce se întâmplă când torni whey în lichid fierbinte

Se face zeamă cu cocoloașe. Motivul e la §2.7: peste 72–78 °C,
β-lactoglobulina se desface și agregă **instantaneu** la suprafața de contact.
Particula de pudră care atinge prima lichidul fierbinte formează o cochilie de
proteină denaturată în jurul unui miez de pudră uscată. Nu se mai dizolvă
niciodată.

**Trei factori care înrăutățesc totul:**

1. **Temperatura.** Peste 75 °C e garantat. La 60–65 °C e în regulă.
2. **pH-ul.** Whey-ul e cel mai puțin solubil în jurul punctului izoelectric
   al β-lactoglobulinei, **pH ~5,2**. O ciocolată caldă cu cacao naturală
   (acidă) sau un lichid cu zeamă de lămâie se apropie de zona aia.
   **Acid + fierbinte = brânzeală sigură.**
3. **Sarea și mineralele.** Calciul din lapte accelerează agregarea. Whey-ul
   se brânzește mai repede în lapte fierbinte decât în apă fierbinte.

**Cum se face corect o ciocolată caldă proteică [EST]:**

1. Fă mai întâi o **pastă rece**: pudra + 2–3 linguri de lichid **rece**,
   amestecate până e complet omogenă. Pasul ăsta e obligatoriu, nu opțional.
2. Încălzește restul lichidului separat și **ia-l de pe foc**.
3. Lasă-l 1–2 minute să coboare sub **70 °C** (nu mai scoate abur vizibil).
4. Toarnă lichidul cald **peste pastă**, în fir subțire, amestecând.
5. **Nu-l mai pune înapoi pe foc.** Dacă vrei mai cald de atât, folosește
   **cazeină sau lapte praf degresat** în loc de whey — cazeina rezistă la
   fierbere.

**Alternativele care nu se brânzesc deloc:** cazeină micelară, lapte praf
degresat, colagen hidrolizat (dar vezi §5 — nu se pune la ținta zilnică).

### 2.11 Cum se poartă fiecare la congelare

Congelarea nu denaturează proteina direct; **concentrează** ce rămâne în apa
nesolidificată. Pe măsură ce apa îngheață, proteina, sarea și zahărul se
înghesuie în tot mai puțin lichid — o creștere de tărie ionică de câteva ori,
care poate declanșa agregare fără nicio căldură.

| Pudră | La congelare | La decongelare |
|---|---|---|
| **Whey izolat** | Agregă la concentrare; gelul făcut cu whey pierde apă | Sinereză vizibilă: apă limpede în fundul recipientului |
| **Whey concentrat** | Ceva mai bine, grăsimea și lactoza ajută | Sinereză mai mică |
| **Cazeină micelară** | Cea mai bună: leagă apa și lasă mai puțină liberă să înghețe | Textură aproape neschimbată |
| **Proteine vegetale** | Nisipozitatea se accentuează, cristalele o amplifică | Textură granuloasă |
| **Gelatină** (§5) | Gelurile de gelatină **nu suportă congelarea** — cristalele rup rețeaua | Se rupe, lasă apă |
| **Agar** | La fel, și mai rău: gel fragil, se sfărâmă | Se destramă |

**Consecințe pentru rețete:**

- **Un jeleu nu se congelează.** Nici cu gelatină, nici cu agar. Se scrie în
  `storage`.
- **Un cheesecake fără coacere cu bază de whey se congelează prost.** Cu bază
  de brânză grasă și cazeină, acceptabil.
- **Pentru orice desert `frozen`, cazeina și produsele lactate cu cazeină
  (skyr, brânză de vaci, iaurt grecesc) sunt alegerea corectă**, nu izolatul.
  Vezi §3.
- **Decongelarea lentă, în frigider, e mai bună decât cea rapidă**, la orice
  produs cu proteină de lapte: cristale mai mici, mai puțină sinereză.

### Surse — §2

- [„Thermal Stability of Whey Proteins — A Calorimetric Study", Journal of Dairy Science](https://www.sciencedirect.com/science/article/pii/S0022030285811772)
- [„Effect of Heat Treatment on the Property, Structure, and Aggregation of Skim Milk Proteins", Frontiers in Nutrition, 2021](https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2021.714869/full)
- [„Effect of high-temperature treatment of milk and whey protein denaturation on the properties of rennet-curd cheese: A review"](https://www.sciencedirect.com/science/article/abs/pii/S0958694621001230)
- [„Effect of milk pasteurization temperature and in situ whey protein denaturation on composition, texture and heat-induced functionality"](https://www.researchgate.net/publication/223304029_Effect_of_milk_pasteurization_temperature_and_in_situ_whey_protein_denaturation_on_the_composition_texture_and_heat-induced_functionality_of_half-fat_Cheddar_cheese)
- [Ghid practic de coacere cu whey — intervalul de înlocuire 25–33%](https://bellsproteinpantry.com/blogs/news/bake-with-whey-protein)
- [PROTEIN-GUIDE.md — profilurile pudrelor din atlas](PROTEIN-GUIDE.md)

---

## 3. De ce înghețata proteică se face piatră

### 3.1 Fizica: nu e o problemă de rețetă, e o problemă de moli

Înghețata nu e „înghețată" pentru că e sub 0 °C. E cremoasă pentru că **o
parte din apa din ea nu a înghețat niciodată**. Cristalele mici de gheață
plutesc într-un sirop concentrat care rămâne lichid, iar acel sirop e ce
lingura poate să taie.

Cât din apă rămâne lichidă depinde de **depresia punctului de îngheț**, o
proprietate **coligativă**: contează **numărul de molecule dizolvate**, nu masa
lor. Cu cât molecula e mai mică, cu atât mai multe molecule intră într-un gram,
cu atât coboară mai mult punctul de îngheț.

De aici rezultă cifra care explică tot:

> **Îndulcitorii intenși contribuie exact zero la depresia punctului de îngheț.**
>
> Stevia, sucraloza, zaharina și aspartamul se folosesc în **miligrame**. Un
> litru de bază de înghețată îndulcită cu 0,2 g de sucraloză are în el 0,2 g
> de substanță dizolvată, față de 150 g de zahăr în varianta clasică. Ai
> înlocuit dulceața și **ai șters antigelul**. De asta „înghețata fără zahăr"
> nu e cremoasă și nu poate fi făcută cremoasă doar prin mai multă răbdare.

### 3.2 Puterea de antigel a fiecărui îndulcitor

Factorul de depresie a punctului de îngheț e invers proporțional cu masa
molară. Cu zahărul (342 g/mol) ca referință = 100:

| Substanță | Masă molară (g/mol) | Antigel relativ (zahăr = 100) | Se poate folosi realist? |
|---|---:|---:|---|
| Etanol | 46 | **740** | Da, 15–20 ml vodcă / litru. Nu în deserturi pentru copii. |
| Glicerol | 92 | **370** | Greu de găsit alimentar în Sibiu; dulceață 0,6; 4 kcal/g |
| **Eritritol** | 122 | **280** — pe hârtie | **Nu, vezi capcana de mai jos** |
| **Xilitol** | 152 | **225** | **Da. Cel mai bun poliol pentru înghețată.** |
| Fructoză | 180 | 190 | Da, dar e zahăr |
| Glucoză / dextroză | 180 | 190 | Da, dar e zahăr |
| Sorbitol | 182 | 188 | Tehnic da, digestiv nu (prag ~10 g) |
| Allulose | 180 | 190 | **Neautorizat în UE** (§1.12) |
| **Zaharoză (referință)** | 342 | **100** | Da |
| Maltitol | 344 | 99 | Da, dar prag digestiv |
| Lactoză | 342 | 100 | Vine din lapte; cristalizează → nisip |
| Inulină | ~1 000–5 000 | 7–35 | Aproape zero antigel; e doar corp |
| Proteină (whey, cazeină) | 14 000–25 000 | **~1** | **Zero antigel.** Proteina nu ajută deloc aici. |
| Stevie / sucraloză / zaharină / aspartam | — | **0** | Zero, prin construcție |

> ### Capcana eritritolului la congelator
>
> Eritritolul are cel mai bun antigel teoretic dintre poliolii uzuali — 2,8 ×
> zahărul, la aceeași masă. **Și totuși nu funcționează în înghețată.**
>
> Motivul e solubilitatea. Eritritolul se dizolvă ~37 g / 100 g apă la 25 °C,
> ~25 g la 4 °C, și mult mai puțin la temperaturi de congelator. Pe măsură ce
> baza se răcește și apa începe să înghețe, siropul rămas se concentrează —
> iar eritritolul **iese din soluție și cristalizează**. Din momentul în care
> a cristalizat:
> 1. **nu mai contribuie deloc la depresia punctului de îngheț** (numai ce e
>    dizolvat contează);
> 2. adaugă **cristale proprii**, care se simt ca nisip sau ca zahăr granulat
>    nedizolvat;
> 3. **răcorește** puternic, pentru că acum ajung cristale întregi pe limbă.
>
> Rezultatul: o înghețată care e simultan **tare, nisipoasă și mentolată**.
> Dacă ai simțit vreodată exact combinația asta ciudată, ăsta e mecanismul.
>
> **Ce se face:** eritritolul rămâne pentru dulceață (5–8% din masă),
> dar antigelul trebuie să vină din altceva: xilitol, ceva zahăr real, sau
> alcool.

### 3.3 Ce mai ține cristalele mici, în afară de îndulcitor

**Grăsimea.** Nu contribuie la depresia punctului de îngheț — nu e dizolvată.
Face trei alte lucruri: (1) globulele parțial coalescente formează o rețea care
**blochează fizic creșterea cristalelor**; (2) stabilizează celulele de aer;
(3) topește în gură și dă senzația de cremos. Înghețata comercială premium are
**10–16% grăsime**. O înghețată proteică din skyr 0% și izolat are **0–2%**.
Asta e a doua jumătate a problemei, după zahăr.

**Substanța uscată totală.** O bază bună de înghețată are **36–42% substanță
uscată**. O bază din 400 g skyr + 30 g izolat + îndulcitor intens are **22–26%**
— adică prea multă apă liberă, care nu are ce altceva să facă decât să înghețe.

**Aerul (overrun).** Bulele de aer întrerup masa de gheață și scad conducția
termică. Înghețata industrială ieftină are până la **100% overrun** (jumătate
aer). Cea premium, 20–50%. O bază turnată în cutie și băgată la congelator are
**0%**. Un aparat de casă adaugă 20–30%.

**Stabilizatorii.** Guma xantan, guar, caruba, gelatina. **Nu împiedică
formarea gheții** — asta e o neînțelegere frecventă. Ele cresc vâscozitatea
fazei nesolidificate, ceea ce **încetinește recristalizarea** (creșterea
cristalelor mari pe seama celor mici) în timpul depozitării. Doze:

| Stabilizator | Doză | Note |
|---|---:|---|
| Xantan | 1–2 g / kg bază (0,1–0,2%) | Peste 3 g/kg devine mucilaginos |
| Guar | 1,5–2,5 g / kg | Mai ieftin, gust neutru |
| Gelatină | 2–4 g / litru | Dă și corp; dar §2.11 — nu suportă cicluri de îngheț |
| Amidon de porumb (fiert) | 10–15 g / litru | Cel mai la îndemână; se fierbe și se răcește complet |

### 3.4 Ce se poate face realist acasă, în ordinea impactului

| # | Măsură | Efect | Cost |
|---|---|---|---|
| 1 | **Porționează în recipiente de 100–150 ml** | Elimină complet ciclurile de reîngheț (§3.5). Cea mai mare îmbunătățire per efort din toată lista. | Zero |
| 2 | **Păstrează 25–40 g de zahăr real sau miere per litru** | Recuperezi 25–40% din antigelul pierdut, la ~100–160 kcal pe litru, adică ~15–25 kcal pe porție | Câteva calorii |
| 3 | **Urcă grăsimea la 8–12%** — mascarpone, cremă de brânză, smântână, gălbenuș, unt de arahide | Structură și cremozitate. Al doilea cel mai mare efect. | Calorii reale |
| 4 | **Folosește bază de cazeină, nu de izolat** — skyr, brânză de vaci fină, iaurt grecesc, cazeină micelară | Leagă apa liberă, mai puțină gheață (§2.11) | Zero |
| 5 | **Schimbă eritritolul pe xilitol** pentru partea de antigel | 2,25 × antigelul zahărului, fără cristalizare | **Atenție la câini (§1.5)** și la pragul digestiv |
| 6 | **Adaugă 15–20 ml de vodcă la litru** | Etanolul are cel mai puternic antigel pe gram din tot ce ai în casă | Alcool; ~10 kcal/porție |
| 7 | **Xantan 1–2 g / kg** | Încetinește recristalizarea la depozitare | Zero |
| 8 | **Amestecă la 30 de minute, de 4 ori, în primele 2 ore** (metoda fără aparat) | Rupe mecanic cristalele cât încă sunt mici; adaugă și puțin aer | 2 ore de atenție |
| 9 | **Mănânc-o în 24–48 de ore** | Recristalizarea e cumulativă și ireversibilă | Nu poți face stoc |
| 10 | **Container lat și puțin adânc (max 3–4 cm), folie lipită pe suprafață** | Îngheață mai repede (cristale mai mici) și nu face brumă | Zero |

**Despre aparatele cu re-spin (tip Ninja Creami).** Merită menționate pentru
că schimbă natura problemei: nu previn chimic formarea cristalelor, ci
**mărunțesc mecanic un bloc deja înghețat** cu o lamă la turație mare. Adică
rezolvă exact defectul pe care rețeta proteică nu-l poate rezolva. E singura
cale prin care o bază cu foarte puțin zahăr iese cu adevărat cremoasă. Costă
cât 30–60 de kilograme de proteină pudră, deci nu e o recomandare — e o
explicație pentru de ce rețetele filmate cu un astfel de aparat nu se reproduc
într-un congelator normal.

### 3.5 De ce „scoate-o cu 15 minute înainte" e jumătate de soluție

**Prima jumătate e adevărată.** Înghețata comercială se extrage din
freezer la −5…−6 °C, se călește la −18 °C, dar e **proiectată să fie servită
la −12…−14 °C**. Congelatorul de acasă merge la −18…−20 °C. La −18 °C, într-o
bază cu zahăr normal, ~72–80% din apă e înghețată; într-o bază proteică fără
zahăr, **peste 90%**. Temperarea e reală și e necesară.

**A doua jumătate e problema, și are două părți.**

**1. Nu se încălzește uniform.** Căldura intră prin suprafață și se propagă
lent — difuzivitatea termică a înghețatei e de ordinul 1 × 10⁻⁷ m²/s. Într-o
cutie de 1 litru, centrul e la ~5 cm de suprafață. În 15 minute la 20 °C:

| Zonă | Temperatură după 15 min [EST] | Stare |
|---|---|---|
| Primii 10–15 mm de la suprafață | −2…0 °C | Topită, apoasă |
| Zona intermediară | −8…−5 °C | Aproape bună |
| Miezul (la 5 cm) | −15…−13 °C | Încă piatră |

Ca miezul unei cutii de 1 litru să ajungă la −12 °C îți trebuie **45–60 de
minute**, timp în care marginea e deja lichidă. Asta nu e o problemă de
răbdare, e o problemă de geometrie.

**2. Fiecare temperare urmată de reîngheț înrăutățește ireversibil textura.**
Se numește **șoc termic**. Când temperatura crește, cristalele mici de gheață
se topesc primele (raport suprafață/volum mai mare, energie de suprafață mai
mare — maturare Ostwald). Când o pui înapoi, apa aceea nu reface cristale mici:
**se depune pe cristalele mari care au supraviețuit**. Rezultat net: după
fiecare ciclu, ai mai puține cristale și mai mari. Sub ~50 µm limba nu simte
cristale; peste ~100 µm simte nisip. Trei-patru cicluri de „scot cutia, mănânc
două linguri, o bag înapoi" sunt suficiente ca să treci pragul.

De asta **măsura #1 din §3.4 e porționarea**, nu temperarea. O cutie de 120 ml:
- se temperează uniform în **8–10 minute**, fără margine topită;
- **se termină**, deci nu se reîngheață niciodată;
- iar restul stocului stă neatins la −18 °C, unde recristalizarea e cea mai
  lentă.

**Formularea onestă pentru interfață:** *„Se temperează 10 minute. Se face în
porții mici tocmai ca să nu fie nevoie de mai mult — o cutie mare se topește
la margine înainte să se înmoaie la mijloc, iar fiecare reîngheț o face mai
nisipoasă."*

### Surse — §3

- Depresia punctului de îngheț e o proprietate coligativă standard; valorile
  din tabelul §3.2 sunt calculate din masele molare (zaharoză 342,3;
  eritritol 122,1; xilitol 152,2; sorbitol 182,2; maltitol 344,3;
  glucoză/fructoză/allulose 180,2; glicerol 92,1; etanol 46,1) — **[EST]**,
  verificabile cu un tabel de mase molare.
- [EFSA — Re-evaluarea eritritolului (E 968): proprietăți fizico-chimice și solubilitate](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10731997/)
- [EFSA Journal — Safety of D-allulose as a novel food (de ce lipsește din rețete)](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2025.9468)
- [CHARTS.md — cum se citesc barele și axele din aplicație](CHARTS.md)

---

## 4. Structura fără făină

### 4.1 Ce face glutenul, de fapt

Glutenul nu e un ingredient — e o rețea care se **formează** când două proteine
din grâu se hidratează și sunt lucrate mecanic:

- **Glutenina** — polimeri mari, legați prin punți disulfurice. Dă
  **elasticitatea**: aluatul se întinde și revine.
- **Gliadina** — monomeri mici. Dă **extensibilitatea și vâscozitatea**:
  aluatul curge și se lasă întins.

Împreună fac o rețea **viscoelastică** — singura din bucătărie care e simultan
elastică și extensibilă. Ea face trei lucruri pe care trebuie să le înlocuiești
separat:

| Funcția glutenului | Ce se întâmplă fără el | Cu ce se înlocuiește |
|---|---|---|
| **Reține gazul** (CO₂ din praf de copt, abur) | Aluatul crește și se lasă imediat | Psyllium, xantan, albuș bătut |
| **Extensibilitate** — se întinde fără să se rupă | Aluatul se sfărâmă, nu se poate întinde | **Numai psyllium** se apropie |
| **Se fixează la 70–80 °C** și ține forma | Structura nu se „prinde", miezul rămâne umed | Ou, amidon, proteină de whey |

Făina de grâu are 9–13 g proteină la 100 g. Nici proteina din whey, nici cea
din migdale nu formează gluten — nu au aminoacizii și nici arhitectura
necesară. **Nu există „făină proteică fără gluten care se comportă ca făina."**

### 4.2 Psyllium

**Cel mai bun înlocuitor de gluten existent, cu diferență.** Coaja de semințe
de *Plantago ovata* e ~80% fibră, majoritar arabinoxilan solubil, care în apă
formează un **mucilagiu viscoelastic** — nu doar vâscos, ci și cu memorie
elastică. E singurul ingredient obișnuit care imită *extensibilitatea*
glutenului, nu doar capacitatea de a lega.

| Parametru | Valoare |
|---|---|
| Absorbție de apă | **8–15 × greutatea proprie** |
| Timp de hidratare | 10–15 minute, obligatoriu |
| Doză pentru un blat / chec | **3–5 g la 100 g de masă uscată** |
| Doză pentru textură de pâine | 5–8 g la 250–300 g masă uscată |
| Lichid suplimentar necesar | **+60–80 ml pentru fiecare 5 g de psyllium** |
| Carbohidrați digerabili | ~0 |
| Cămara proiectului | `psyllium`, 200 kcal, 80 g fibră / 100 g |

**Trei lucruri de știut:**

1. **Coajă întreagă vs pudră.** Pudra e mai fină, absoarbe cu ~25% mai mult și
   dă un rezultat mai omogen. Conversie: **10 g coajă întreagă ≈ 7 g pudră.**
   Rețetele nu specifică aproape niciodată care, ceea ce explică jumătate din
   eșecuri.
2. **Supradozarea e imediat vizibilă.** Peste ~6–7% din masa uscată, textura
   devine gumoasă și cauciucată, într-un mod diferit de cauciucul de whey:
   lipicios și elastic, ca guma de mestecat udă. Nu se poate corecta.
3. **Culoarea.** Psyllium-ul reacționează cu bicarbonatul și dă blaturilor o
   nuanță **gri-violet**. Nu e stricat. Se maschează cu cacao. Dacă vrei un
   blat deschis la culoare, folosește praf de copt fără bicarbonat liber sau
   scade doza.

### 4.3 Chia și in

Ambele funcționează prin **mucilagiu de fibră solubilă**, ambele înlocuiesc
oul **doar ca liant** — nu ca agent de creștere, nu ca emulgator, nu ca
structură într-o pandișpan.

| | Chia | In măcinat |
|---|---|---|
| Absorbție | **10–12 ×** greutatea proprie | 4–6 × |
| „Un ou" | **12 g chia + 45 ml apă** | **7 g in + 45 ml apă** |
| Timp de odihnă | 10–15 min | 5–10 min |
| Legare | Bună, gel elastic | **Mai bună în copt** |
| Gust | Aproape neutru | Nucos, se simte |
| Culoare | Puncte vizibile (întregi) | Închide culoarea |
| Cămara | `chia`, 486 kcal, 17 g proteină, 34 g fibră | `in-macinat`, 534 kcal, 18 g proteină, 27 g fibră |

**Reguli care contează:**

- **Maxim 2 „ouă" de in sau chia pe rețetă.** Peste asta, aluatul devine dens
  și gumos, iar produsul nu crește deloc. Dacă rețeta cere 4 ouă, nu se poate
  face fără ouă — se caută altă rețetă.
- **Chia măcinată leagă mult mai bine decât întreagă.** Întreagă e pentru
  budincă (unde vrei să vezi bobițele), măcinată e pentru aluat.
- **Inul măcinat râncezește.** Are 42 g grăsime la 100 g, aproape toată
  polinesaturată. Se ține la frigider, maxim 6 săptămâni după măcinare. Un in
  vechi dă un gust de vopsea care strică tot desertul.
- **Budinca de chia:** raportul care funcționează e **1:6 până la 1:8**
  (chia : lichid) — adică **25 g chia la 200 ml lapte** pentru o consistență
  de budincă fermă. La 1:10 iese o băutură cu bobițe.

### 4.4 Ou

Ingredientul cel mai subestimat într-un desert proteic, pentru că oamenii se
uită la macro-uri și văd 70 kcal pentru 6,3 g proteină. Ce văd greșit e că
**oul face simultan cinci lucruri pe care altfel le-ar trebui cinci
ingrediente.**

Un ou M ≈ **50 g fără coajă**: ~33 g albuș, ~17 g gălbenuș, 6,3 g proteină,
4,8 g grăsime, ~70 kcal.

| Componentă | Ce face | Temperatura la care o face |
|---|---|---|
| **Albuș** | Structură, gelifiere, spumă | Începe să coaguleze la **62 °C**, ferm la 65 °C |
| **Gălbenuș** | Emulsionare (~1,5 g lecitină), îmbogățire, culoare | Îngroașă la **65–70 °C**, se brânzește peste 73 °C |
| **Albuș bătut** | **Singurul agent de creștere gratuit** dintr-un desert fără făină | Volum 6–8 × |

**Despre albușul bătut**, pentru că e trucul cu cel mai mare raport
efect/calorii din tot documentul:

- **Zero grăsime în bol.** O urmă de gălbenuș sau de grăsime pe pereți
  împiedică formarea spumei. Bol de metal sau sticlă, niciodată plastic
  (reține film gras).
- **Un vârf de sare de lămâie sau câteva picături de zeamă de lămâie**
  stabilizează spuma (coboară pH-ul spre zona unde ovalbumina denaturează
  parțial mai ușor).
- **Îndulcitorul se adaugă la sfârșit**, în ploaie, după ce spuma a prins
  vârfuri moi. Adăugat la început, întârzie formarea spumei.
- **Eritritolul stabilizează spuma mai prost decât zahărul**, pentru că nu are
  aceeași higroscopicitate. O bezea de eritritol se lasă mai repede și **plânge**
  (picături de sirop) la umiditate.
- Se încorporează cu spatula, **în trei tranșe**, prin mișcări de jos în sus.
  Prima tranșă se poate amesteca brutal — sacrifici o treime din aer ca să
  subțiezi baza, apoi restul se încorporează delicat.

### 4.5 Gelatină și agar

| | Gelatină | Agar-agar |
|---|---|---|
| Origine | Colagen hidrolizat parțial (porc / vită) | Alge roșii |
| Se dizolvă la | 50–60 °C | Trebuie **fiert 2 minute** |
| Se întărește la | 15–20 °C (frigider) | **32–40 °C** — se prinde pe blat |
| Se topește la | **27–35 °C** — sub temperatura corpului | 85–90 °C |
| Senzație | **Se topește în gură.** Elastic, „bouncy". | Nu se topește. Ferm, casant, se rupe scurt. |
| Doză moale | 12–15 g / litru (1,2–1,5%) | 5 g / litru |
| Doză fermă | 20–30 g / litru (2–3%) | 8–10 g / litru |
| O foaie | ~1,7 g (foaie „gold" UE); 6 foi ≈ 1 plic de 10 g | — |
| Vegan | Nu | Da |
| Proteină utilizabilă | **Zero** (§5) | Neglijabilă (6 g/100 g, dar se folosesc 5 g) |
| Cămara | `gelatina-foi`, 84 g proteină/100 g | `agar`, 306 kcal |

**Ce trebuie știut despre gelatină, pe scurt:**

- **Se hidratează („înflorește") în apă rece 5 minute** înainte de dizolvare.
  Turnată direct în lichid cald, face cocoloașe.
- **Nu se fierbe.** Peste 100 °C, și mai ales la fierbere prelungită, lanțurile
  se degradează și puterea de gelifiere scade vizibil.
- **Nu gelifiază cu fructe crude care conțin proteaze**: ananas (bromelaină),
  kiwi (actinidină), papaya (papaină), smochine (ficină), ghimbir (zingibaină),
  mango (în măsură mai mică). Fructul fiert 5 minute sau din conservă e în
  regulă — enzimele se denaturează.
- **Nu suportă congelarea** (§2.11). Se scrie în `storage`.
- **Aciditatea slăbește gelul.** Un jeleu foarte acru are nevoie de ~20% mai
  multă gelatină.

**Ce trebuie știut despre agar:**

- **Obligatoriu fiert**, altfel nu se hidratează și rămâne granulat pe fundul
  vasului. Ăsta e motivul #1 pentru care „nu mi s-a prins cu agar".
- Se prinde la 32–40 °C, deci ai foarte puțin timp de lucru după ce iei vasul
  de pe foc.
- **Gelul e casant, nu elastic.** Pentru un jeleu care imită unul comercial,
  agarul dă o textură recognoscibil diferită. Pentru straturi ferme într-un
  tort, e mai bun decât gelatina.
- **Se poate reface:** dacă un gel de agar s-a prins strâmb, se reîncălzește
  peste 90 °C și se toarnă din nou. Gelatina se poate și ea, dar pierde
  fermitate.
- În cămară e la 400 lei/kg estimat — dar la 5–8 g pe litru, costul pe porție
  e sub cel al gelatinei.

### 4.6 Xantan și guar

**Nu sunt înlocuitori de gluten.** Sunt agenți de vâscozitate. Dau rețelei
capacitatea de a reține gaz, dar **nu dau extensibilitate** — un aluat cu
xantan nu se poate întinde cu sucitorul așa cum se poate unul cu psyllium.

| | Xantan | Guar |
|---|---|---|
| Sursă | Fermentație (*Xanthomonas campestris*) | Semințe de guar |
| Doză în copt | **2–3 g la 150 g făină** (chec) | 1,5–2 × doza de xantan |
| Doză într-o cremă / bază de înghețată | **1–2 g la litru** | 1,5–2,5 g / litru |
| Doză maximă totală | **0,5% din masa totală** | 0,8% |
| Peste doză | Textură mucilaginoasă, „bale" | Similar, plus balonare |
| Rezistă la acid și căldură | Da, foarte bine | Mai puțin |
| FODMAP | Nu semnificativ | Da, e o galactomanană fermentescibilă |

**Regula:** xantanul se cântărește, nu se măsoară cu lingurița. O linguriță
rasă are 2,5–3,5 g în funcție de cât e tasat, iar diferența dintre 2 g și 3,5 g
într-o rețetă mică e diferența dintre bun și slimos. Dacă nu ai cântar de
0,1 g, amestecă xantanul cu restul pudrelor uscate înainte — dispersat, iartă
mai mult.

### 4.7 Făina de cocos

**Cea mai capricioasă făină fără gluten și cea mai des greșită.**

- Cămara: `faina-cocos`, **400 kcal, 18 g proteină, 24 g carbohidrați, 39 g
  fibră, 14 g grăsime** la 100 g. Aproape 40% fibră — de acolo vine totul.
- **Absoarbe ~4 × greutatea ei în lichid** (unele loturi merg la 5–6 ×). Pentru
  comparație, făina de grâu absoarbe ~0,6 ×.
- **Regula de substituție:** **25 g făină de cocos înlocuiesc 100 g făină de
  grâu**, adică raportul **1:4**. Și, pentru fiecare 25–30 g de făină de cocos,
  ai nevoie de:
  - **+1 ou** (structura pe care fibra nu o dă), și
  - **+60–80 ml lichid** peste ce cere rețeta originală.
- **Absoarbe lent.** Un aluat cu făină de cocos care pare corect imediat va fi
  uscat după 10 minute. **Se lasă 10 minute și abia apoi se corectează.**
- **Iartă foarte puțin.** 5 g în plus la o rețetă de 4 porții e diferența
  dintre „umed" și „rumeguș".
- **Efect digestiv:** 25 g de făină de cocos aduc ~10 g de fibră. Într-o porție,
  asta e mult. Merită menționat în `tips` la rețetele care o folosesc din greu.

### 4.8 Făina de migdale

Opusul complet al făinii de cocos.

- Cămara: `faina-migdale`, **610 kcal, 21 g proteină, 8 g carbohidrați, 53 g
  grăsime, 11 g fibră** la 100 g.
- **Nu absoarbe practic nimic.** E 53% grăsime — se comportă ca o grăsime
  măcinată, nu ca o făină. Nu se hidratează, nu gelatinizează, nu formează
  rețea.
- **Substituție:** ~**1:1 după greutate** cu făina de grâu, dar cu **20–25%
  mai puțin lichid** și cu **un liant obligatoriu**: 1 ou sau 3 g psyllium la
  100 g de făină de migdale. Fără liant, rezultatul e sfărâmicios și cade la
  tăiere.
- **Contribuie umezeală și fragezime**, nu structură. De asta e partenerul
  natural al whey-ului: whey-ul dă rețea (prea multă), migdalele o scurtează.
- **Blanșată vs cu coajă:** cea cu coajă absoarbe puțin mai mult și dă un
  produs mai închis și mai grăunțos. Blanșată (fină, „almond flour") e pentru
  prăjituri delicate; cu coajă (`almond meal`) e pentru brownie și biscuiți.
- **Se rumenește repede** (grăsime + proteină). Scade temperatura cu 10 °C
  față de o rețetă cu grâu.
- **Râncezește.** La frigider sau congelator, nu în dulap.

### 4.9 Amestecul care funcționează cel mai des

Nicio făină fără gluten nu merge singură. Amestecul de bază care rezolvă
majoritatea blaturilor proteice **[EST]**:

```
Masa uscată = 100%
  55–60%  făină de migdale       → fragezime, grăsime, gust
  10–15%  făină de cocos         → absorbție, corp, fibră
  20–25%  pudră proteică         → proteina (whey + cazeină, 50/50)
   3–5%   psyllium (pudră)       → extensibilitate și reținere de gaz
   1–2%   praf de copt           → creștere
   +      1 ou la fiecare 25 g de făină de cocos
   +      lichid: pornește de la 1,2 × masa uscată și corectează după 10 min
```

Cu 200 g masă uscată totală asta înseamnă aproximativ: 115 g migdale, 25 g
cocos, 45 g pudră proteică, 8 g psyllium, 3 g praf de copt, 1 ou, ~240 ml
lichid. Trei corecții posibile după prima încercare: **prea uscat** → mai
puțină cocos; **prea gumos** → mai puțin psyllium; **prea cauciucat** → mai
puțin whey, mai multă cazeină.

### Surse — §4

- [`js/data/10-dessert-pantry.js`](../js/data/10-dessert-pantry.js) — valorile
  nutriționale ale tuturor ingredientelor de structură folosite mai sus
- [DESSERT-SCHEMA.md §3 — regulile de ingrediente](DESSERT-SCHEMA.md)
- [DATA-SCHEMA.md — convențiile de valori la 100 g](DATA-SCHEMA.md)
- Dozele de psyllium, xantan, gelatină și agar sunt **[EST]** — intervale de
  practică de bucătărie și de industrie, nu rezultate de studiu. Se verifică
  prin încercare, nu prin citare.

---

## 5. Proteina incompletă în deserturi

### 5.1 De ce eticheta nu minte, dar induce în eroare

Proteina de pe orice etichetă din lume se măsoară **indirect**: se determină
azotul total (metoda Kjeldahl sau Dumas) și se înmulțește cu un factor de
conversie. Factorul generic e **6,25**, adică se presupune că proteina medie
conține 16% azot.

Colagenul are un profil de aminoacizi complet atipic — o treime glicină, mult
prolină și hidroxiprolină — și **conține mai mult azot pe gram de proteină
decât media**. Factorul corect pentru gelatină și colagen e **5,55**, nu 6,25.

> **Consecința:** o pudră de colagen etichetată cu factorul generic 6,25
> declară cu **~13% mai multă proteină decât are**, chiar înainte să discutăm
> despre calitatea acelei proteine. Eroarea e legală, standardizată și
> universală. Nu e o fraudă; e o convenție care nu a fost gândită pentru
> colagen.

Și asta e doar problema mică.

### 5.2 Problema mare: zero triptofan

Un aminoacid esențial e unul pe care corpul nu îl poate fabrica. Sunt nouă.
Sinteza unei proteine noi are nevoie de **toți nouă, simultan** — dacă unul
lipsește, ribozomul se oprește acolo. De aceea calitatea unei proteine e
determinată de **aminoacidul limitant**, nu de medie.

**Profilul gelatinei / colagenului (aproximativ, % din reziduuri):**

| Aminoacid | În colagen | Comentariu |
|---|---:|---|
| Glicină | **~33%** | Fiecare al treilea reziduu. Neesențial. |
| Prolină | ~13% | Neesențial |
| Hidroxiprolină | ~10% | **Nu există în alte proteine**; nu se reîncorporează direct |
| Alanină | ~11% | Neesențial |
| **Triptofan** | **0%** | **Aminoacid esențial. Absent complet.** |
| Cisteină | ~0% | Practic absentă |
| Metionină | ~0,9% | Foarte jos |
| Izoleucină | ~1,4% | Foarte jos |
| Treonină | ~1,9% | Jos |

**DIAAS** (Digestible Indispensable Amino Acid Score) e raportul dintre
aminoacidul cel mai deficitar din proteina testată și cerința pentru acel
aminoacid. Dacă triptofanul e **zero**, raportul e **zero**, indiferent cât de
bine stă restul. Nu e o rotunjire; e o proprietate a definiției.

| Sursă | DIAAS (adult) |
|---|---:|
| Concentrat/izolat de zer | 1,09–1,25 |
| Concentrat de proteină din lapte | ~1,18 |
| Ou întreg | ~1,13 |
| Cazeină | ~1,09 |
| Izolat de soia | ~0,90 |
| Proteină de mazăre | 0,62–0,82 |
| Grâu | ~0,45 |
| Proteină din orez | ~0,37–0,47 |
| **Gelatină / colagen** | **~0** |

### 5.3 Ce fac totuși gelatina și colagenul — corect încadrat

Nu e un ingredient inutil. E un ingredient care nu e ce spune eticheta.

**Ce face bine, sigur:**
- **Textură pe care nimic altceva nu o dă.** Punctul de topire 27–35 °C, adică
  sub temperatura corpului, e motivul pentru care un jeleu cu gelatină se
  topește în gură iar unul cu agar nu. Într-un desert, asta e o valoare reală.
- **Sațietate și volum** la cost caloric mic: 12 g de gelatină într-un litru
  de jeleu = 40 kcal.
- **Aport de glicină.** Un desert cu 12 g gelatină aduce ~3,3 g de glicină.

**Ce e susținut de dovezi slabe și nu se vinde ca fapt:**
- **Sinteza de colagen tendinos.** Există un studiu mic (Shaw et al., 2017) în
  care 15 g de gelatină cu vitamina C, luate cu o oră înainte de efort, au
  crescut markerii serici de sinteză a colagenului. **[MEC]** — marker surogat
  (propeptida P1NP), lot mic, fără rezultat clinic (fără date pe rate de
  accidentare sau vindecare). E o ipoteză interesantă, nu o indicație.
- **Piele, unghii, articulații.** Literatura e dominată de studii finanțate de
  producători, cu rezultate raportate ca diferențe mici pe scale subiective.
  **Nu se pune în textul unei rețete.** `DESSERT-SCHEMA §0` interzice oricum
  afirmațiile de sănătate.
- **Glicina ca aminoacid „condiționat esențial".** Există o estimare că
  sinteza endogenă de glicină ar fi sub necesar cu ~10 g/zi. E o estimare de
  bilanț metabolic, contestată, fără rezultate clinice. **[JUD]** — nu e un
  motiv să numeri colagenul ca proteină.

**Ce e demonstrabil greșit:**
- Că gelatina „contribuie la ținta zilnică de proteină". Nu contribuie la
  sinteza proteică musculară.
- Că e „proteină, doar de altă calitate". Diferența dintre DIAAS 0,9 și
  DIAAS 1,1 e „de altă calitate". Diferența dintre 1,1 și 0 e categorială.

**Riscul real nu e că mănânci gelatină. E că gelatina o înlocuiește pe
cealaltă.** Dacă un desert declară 16 g de proteină și 5 g din ele sunt din
gelatină, iar tu îl treci în jurnal ca 16 g, ai un deficit de 5 g pe care nu
îl vezi. Făcut zilnic, e diferența dintre 1,6 g/kg și 1,5 g/kg.

### 5.4 Mecanismul din cod: `collagenShare`

Corecția trăiește în [`js/utils/compute.js`](../js/utils/compute.js) și e
descrisă la nivel de politică în [METHODOLOGY.md §4](METHODOLOGY.md). Aici
descriem **cum funcționează efectiv**, pentru că e exact mecanismul care
rezolvă cazul deserturilor mixte.

**Constantele:**

```js
const COLLAGEN_FACTOR = 0.25;
const COLLAGEN_RE     = /colagen|collagen|gelatin|piftie|r[ăa]cituri|aspic/i;
const COLLAGEN_CUT_RE = /burt[ăa]|tripe|tendon|[șs]orici/i;
const PARENTHETICAL_RE = /\([^)]*\)/g;
```

**Funcția `collagenShareOf(f)`** întoarce fracțiunea din proteina declarată
care e colagen, între 0 și 1, în trei pași, în ordine:

1. **Câmpul explicit câștigă întotdeauna.** Dacă intrarea are
   `collagenShare: 0.15`, aceea e valoarea (limitată la [0, 1]). Nimic altceva
   nu se mai verifică.
2. **Altfel, o regulă pe nume.** Se construiește un `haystack` din
   `id + name + nameRo` și se testează `COLLAGEN_RE`. Potrivire → **1**
   (adică „tot ce declară e colagen").
3. **Altfel, o regulă pe tăietură.** `COLLAGEN_CUT_RE` prinde burta, tendonul
   și șoriciul — bucăți care *sunt* structural colagen, deși numele nu spune.
   Se testează pe numele cu **parantezele scoase**, pentru că în setul ăsta de
   date o paranteză e o clarificare, nu identitatea produsului: „Piept de porc
   (panceta, cu șorici)" e o bucată de piept, nu șorici, iar penalizarea
   întregii tăieturi ar repeta invers exact greșeala pe care corecția o repară.
4. Nicio potrivire → **0**.

**Funcția `proteinQuality(f)`** combină rezultatul cu factorul de categorie:

```js
factor = share × 0.25 + (1 − share) × base
```

unde `base` e factorul de categorie din `QUALITY_BY_CATEGORY` (1,08 lactate și
ouă, 1,05 carne și pește, 1,00 mezeluri și suplimente, 0,95 mâncare gata, 0,92
panificație/băuturi/dulciuri, 0,88 vegetale — ridicat la 1,00 dacă intrarea are
eticheta `complete-protein`).

Trei proprietăți ale formulei merită observate:

- **La `share = 1` reproduce exact vechiul comportament** (factor 0,25), deci
  nicio intrare existentă nu s-a mișcat când s-a introdus câmpul.
- **La `share = 0` factorul e curat cel de categorie** — nu se aplică nicio
  penalizare de colagen.
- **`reason` rămâne `'collagen'` pentru ORICE `share > 0`**, chiar și 0,05.
  De asta atârnă trei lucruri: avertismentul roșu din dosar, filtrul „fără
  colagen", și excluderea din clasamentele de proteină. Un produs care conține
  gelatină continuă să declare asta, chiar dacă doar o cincime din proteina lui
  e gelatină. **Penalizarea e graduală; declarația nu e.**

**Unde se aplică factorul:**

```js
d.bars.protein = clamp(proteinBar(d.protein100) * q.factor, 0, 100);
d.bars.purity  = clamp(purityBar(d.purityPct)  * q.factor, 0, 100);
d.bars.proteinRaw = proteinBar(d.protein100);   // nescalat, pentru afișare
d.bars.purityRaw  = purityBar(d.purityPct);     // nescalat
```

**Gramele afișate pe card nu se schimbă niciodată.** Se scalează doar cele două
bare care intră în scorul compozit, cu ponderile 0,28 și 0,24 — adică **52% din
scor**. În plus, `d.flags` primește `'collagen-protein'`, iar `NON_DATA_FLAGS`
îl exclude din raportul de erori de date: e o corecție deliberată de scor, nu o
greșeală de transcriere.

### 5.5 Cazul „jeleu proteic din whey + gelatină", numeric

Exact cazul pentru care câmpul explicit a fost introdus. Luăm o rețetă reală
plauzibilă, 4 porții:

| Ingredient | Cantitate | Proteină / 100 g | Proteină totală |
|---|---:|---:|---:|
| Izolat de zer WPI 90 | 60 g | 90 g | **54,0 g** |
| Gelatină foi | 12 g | 84 g | **10,1 g** |
| Zmeură | 200 g | 1,2 g | 2,4 g |
| Eritritol | 24 g | 0 | 0 |
| Apă / ceai | 500 ml | 0 | 0 |
| **Total** | **796 g** | | **66,5 g** |

Per porție (199 g): **16,6 g proteină declarată**, din care **2,5 g gelatină**.

```
collagenShare = proteină_din_gelatină / proteină_totală
              = 10,1 / 66,5
              = 0,152  →  se scrie 0.15
```

La 100 g: 8,35 g proteină, 46,6 kcal, puritate 71,7%.
Barele brute: `proteinBar = 27,8`, `purityBar = 89,6`.

**Cele trei scenarii posibile, cu cifrele reale:**

| Scenariu | `share` | `factor` | Bară proteină | Bară puritate | Contribuție la scor (0,28 + 0,24) |
|---|---:|---:|---:|---:|---:|
| **A.** Fără câmp, numele nu conține „gelatină" | 0 | 0,92 | 25,6 | 82,4 | **26,9** |
| **B.** Fără câmp, numele conține „gelatină" | 1 | **0,25** | 7,0 | 22,4 | **7,3** |
| **C.** Cu `collagenShare: 0.15` | 0,15 | 0,82 | 22,8 | 73,4 | **24,0** |

- **Scenariul B e nedreptatea** pe care o descrie comentariul din cod: o rețetă
  în care 85% din proteină e izolat de zer coboară la factorul unei pudre de
  colagen, doar pentru că un cuvânt apare în nume. Față de scenariul corect (C)
  pierde **16,7 puncte** de scor compozit — mai mult de un rang.
- **Scenariul A e nedreptatea inversă, și e cea mai probabilă la deserturi.**
  `COLLAGEN_RE` testează **numele intrării**, nu lista de ingrediente. Un
  desert numit „Jeleu proteic de zmeură" **nu conține niciun cuvânt din regex**
  — deci primește factor 0,92, adică **zero penalizare**, deși o gelatină reală
  stă în el. Regula automată nu are cum să vadă ingredientele.
- **Scenariul C e răspunsul corect**, și e singurul care se obține prin
  scrierea explicită a cifrei.

> **Regula operațională:** la deserturi, **regex-ul nu te salvează în niciun
> sens**. Pe nume greșite penalizează total; pe nume corecte nu penalizează
> deloc. Singurul mecanism care funcționează e câmpul explicit, calculat din
> ingrediente.

**Și partea care contează pentru cititor, nu pentru scor:**

```
Proteină declarată / porție :  16,6 g
Din care gelatină           :   2,5 g   (nu se pune la ținta zilnică)
Proteină care contează      :  14,1 g
```

[DESSERT-SCHEMA §5](DESSERT-SCHEMA.md) cere **minimum 15 g de proteină pe
porție**. Jeleul de mai sus **trece pragul pe hârtie și îl ratează în
realitate.** Ăsta e exact tipul de rezultat pentru care există documentul.
Soluția nu e să ascunzi cifra, e să crești whey-ul cu 5 g și să scrii ambele
numere.

### 5.6 Ce scrie autorul de rețete, concret

1. **Calculează fracțiunea**, cu proteina din cămară:
   `collagenShare = (g_gelatină × 0,84) / proteina_totală_a_rețetei`.
   Pentru gelatină granule și foi, 0,84 e valoarea din
   `js/data/10-dessert-pantry.js` (`gelatina-foi`, 84 g/100 g).
   Pentru colagen hidrolizat pudră, folosește valoarea de pe eticheta reală
   (de obicei 0,88–0,95).
2. **`warnings` e obligatoriu**, indiferent de cât de mică e fracțiunea —
   [DESSERT-SCHEMA §4](DESSERT-SCHEMA.md) o cere explicit. Textul recomandat,
   cu cifre, nu cu generalități:

   > „Din cele 16,6 g de proteină pe porție, 2,5 g vin din gelatină. Gelatina
   > nu conține triptofan, deci nu se pune la ținta zilnică de proteină.
   > Contează 14,1 g."

3. **Nu inventa câmpuri în schema deserturilor.** `DESSERT-SCHEMA §3.2` e clar:
   dacă îți lipsește o cheie, **o raportezi, nu o adaugi**. Câmpul
   `collagenShare` există azi pe intrările din atlas (`js/data/0*.js`);
   dacă intrările de desert trebuie să-l poarte și ele, e o decizie a
   proprietarului schemei, nu a autorului de rețetă.
4. **Agar în loc de gelatină** rezolvă problema de calitate a proteinei complet
   (agarul aduce ~0,3 g proteină la 5 g doză, adică nimic — deci nu diluează
   nimic), cu prețul unei texturi casante în loc de una care se topește în
   gură. E un compromis real, de scris în `swaps`, nu o „variantă mai bună".

### Surse — §5

- [METHODOLOGY.md §4 — corecția de calitate a proteinei, politica](METHODOLOGY.md)
- [`js/utils/compute.js`](../js/utils/compute.js) — `COLLAGEN_FACTOR`, `collagenShareOf()`, `proteinQuality()`
- [DESSERT-SCHEMA.md §4 — avertismentele obligatorii](DESSERT-SCHEMA.md)
- [PROTEIN-GUIDE.md — de ce contează aminoacidul limitant](PROTEIN-GUIDE.md)
- Valorile DIAAS sunt cele din raportul FAO 2013 și din literatura ulterioară
  pe surse individuale; profilul de aminoacizi al gelatinei și factorul
  Kjeldahl 5,55 sunt convenții analitice standard pentru colagen. **[EST]**
  pentru cifrele exacte, care variază între loturi și metode.
- Shaw et al., „Vitamin C-enriched gelatin supplementation before intermittent
  activity augments collagen synthesis", *Am J Clin Nutr*, 2017 — citat aici
  **ca exemplu de dovadă slabă**, nu ca susținere.

---

## 6. Tabel de referință rapidă

Secțiunea asta e făcută ca să fie deschisă cu o mână murdară de aluat. Fără
explicații — explicațiile sunt mai sus, la secțiunea corespunzătoare.

### 6.1 Îndulcitori: cât înlocuiește cât

Pornind de la **100 g de zahăr alb** din rețeta originală.

| Înlocuitor | Cantitate pentru aceeași dulceață | Corecție de rețetă | Volum rezultat |
|---|---:|---|---|
| **Eritritol** | 145–165 g | Prea mult volum; vezi rândul următor | Prea mare |
| **Eritritol + stevie** ✅ | **100–120 g eritritol + 6–12 picături stevie lichidă** | Nimic | **Corect** |
| **Xilitol** | 100–105 g | Nimic | Corect |
| **Maltitol** | 110–125 g | Nimic | Corect |
| **Sorbitol** | 170–200 g | Nu se folosește ca îndulcitor principal | Prea mare |
| **„Stevie 1:1" din raft** | 100 g | E 96–99% eritritol — **se pune la polioli** | Corect |
| **Stevie lichidă singură** | 40–80 picături (variază enorm) | **Lipsesc 100 g de volum.** Adaugă 60–80 g fibră de cicoare, lapte praf degresat sau făină de migdale | Prea mic |
| **Sucraloză pură** | ~0,17 g | Idem — lipsește volumul. **Nu la copt (§1.9).** | Prea mic |
| **Zaharină pură** | ~0,29 g | Idem | Prea mic |
| **Aspartam pur** | ~0,55 g | Idem. **Își pierde dulceața la copt.** | Prea mic |
| **Miere** | 75–80 g | **−20 ml lichid**, **−10…15 °C** la cuptor | Corect |
| **Sirop de arțar** | 80–85 g | **−30 ml lichid**, **−10 °C** | Corect |
| **Curmale (piure)** | 130–150 g | **−40 ml lichid**; adaugă și fibră și liant | Mai mare |

**Măsuri de bucătărie [EST]** (rase, nu cu vârf):

| | 1 linguriță | 1 lingură |
|---|---:|---:|
| Zahăr alb | 4 g | 12 g |
| Eritritol cristale | 4 g | 12 g |
| Eritritol pudră | 2,5 g | 8 g |
| Xilitol | 4 g | 12 g |
| Miere | 7 g | 21 g |
| Cacao pudră | 2,5 g | 7 g |
| Pudră proteică | 3,5 g | 10 g |
| Psyllium (coajă întreagă) | 2 g | 6 g |
| Xantan | 2,5–3,5 g | — (**se cântărește**) |
| Chia | 4 g | 12 g |
| In măcinat | 2,5 g | 7 g |

### 6.2 Structură: cât din ce

| Ce vrei | Ingredient | Doză | Lichid suplimentar | Odihnă |
|---|---|---:|---:|---:|
| Blat care nu se sfărâmă | Psyllium pudră | **3–5 g / 100 g masă uscată** | +60–80 ml per 5 g | 10–15 min |
| Textură de pâine | Psyllium pudră | 5–8 g / 250–300 g | +100 ml per 8 g | 15 min |
| Reținere de gaz într-un chec | Xantan | **2–3 g / 150 g făină** | — | — |
| Îngroșare cremă / bază înghețată | Xantan | **1–2 g / litru** | — | 10 min |
| Jeleu moale | Gelatină | **12–15 g / litru** | — | 4 h frigider |
| Jeleu ferm / straturi | Gelatină | **20–30 g / litru** | — | 4 h frigider |
| Jeleu vegan moale | Agar | **5 g / litru**, fiert 2 min | — | 40 min |
| Jeleu vegan ferm | Agar | **8–10 g / litru**, fiert 2 min | — | 40 min |
| Budincă de chia | Chia întreagă | **1 : 6 până la 1 : 8** (25 g / 200 ml) | — | peste noapte |
| Liant fără ou | In măcinat | 7 g + 45 ml apă = 1 ou | — | 5–10 min |
| Liant fără ou | Chia măcinată | 12 g + 45 ml apă = 1 ou | — | 10–15 min |

**Conversii utile:**
- 1 foaie de gelatină „gold" (UE) = **1,7 g**; 6 foi ≈ 1 plic de 10 g
- 1 plic de gelatină granule = **10 g** → gelifiază ferm ~400–500 ml
- 10 g coajă de psyllium întreagă ≈ **7 g** psyllium pudră
- **Maxim 2 „ouă" de in sau chia per rețetă.** Peste, aluatul devine gumos.

### 6.3 Făinuri: raportul de înlocuire

Pornind de la **100 g de făină de grâu**.

| Făină | Cantitate | Lichid | Liant obligatoriu | Note |
|---|---:|---|---|---|
| **Făină de migdale** | 100 g | **−20…25%** | 1 ou **sau** 3 g psyllium | 610 kcal, 21 g proteină, 53 g grăsime / 100 g |
| **Făină de cocos** | **25 g** (raport 1:4) | **+60–80 ml** | **1 ou la fiecare 25–30 g** | 400 kcal, 39 g fibră / 100 g. Se lasă 10 min. |
| **Făină de ovăz** | 100 g | +10% | recomandat | Cea mai apropiată de grâu; are gluten de contaminare |
| **Pudră proteică** | **maxim 25–33%** din masa uscată | +15–25 ml per 30 g | — | Vezi §2.9 pentru pragul pe tip de produs |
| **Cazeină** | idem | **+30–40 ml per 30 g** | — | Absoarbe lent; se lasă 10 min |

**Amestecul de bază care merge la majoritatea blaturilor (§4.9):**
55–60% migdale · 10–15% cocos · 20–25% pudră proteică · 3–5% psyllium ·
1–2% praf de copt · 1 ou la fiecare 25 g de cocos · lichid ≈ 1,2 × masa uscată.

### 6.4 Temperaturi, într-un singur loc

| Situație | Temperatura | Ce se întâmplă dacă o depășești |
|---|---:|---|
| Whey adăugat în lichid cald | **max 70 °C** | Cocoloașe, textură granuloasă, ireversibil |
| Cazeină în lichid cald | 100 °C | Nimic. Rezistă. |
| Dizolvarea gelatinei | 50–60 °C | Peste 100 °C își pierde puterea de gelifiere |
| Hidratarea agarului | **fiert ≥ 2 min** | Sub asta nu se prinde deloc |
| Sucraloză | **niciodată peste 120 °C** | Compuși clorurați (§1.9) |
| Aspartam | max 80–90 °C | Își pierde dulceața |
| Copt cu whey | **160–170 °C** | Uscat și cauciucat (§2.8) |
| Copt cu făină de migdale sau hidrolizat | **−10 °C** față de rețetă | Se rumenește prea repede |
| Copt cu miere | **−10…15 °C** | Maillard accelerat, arde |
| Albuș | coagulează de la **62 °C** | — |
| Gălbenuș | îngroașă la **65–70 °C** | Peste 73 °C se brânzește |
| Gelatină: se prinde / se topește | 15–20 °C / **27–35 °C** | Se topește în mână |
| Agar: se prinde / se topește | 32–40 °C / 85–90 °C | Se prinde pe blat |
| Ulei de cocos | solid sub **24 °C** | Glazura curge vara |
| Congelator de casă | −18…−20 °C | — |
| Înghețată, temperatura de servire | **−12…−14 °C** | Vezi §3.5 |

### 6.5 Pragurile care declanșează `warnings`

Mapate direct pe [DESSERT-SCHEMA §4](DESSERT-SCHEMA.md). Cifra se scrie mereu
în text, nu doar categoria.

| Declanșator | Prag | Ce se scrie |
|---|---:|---|
| **Polioli, total pe porție** | **> 15 g** | Cifra exactă, care poliol, și efectul digestiv. Se însumează eritritol + xilitol + maltitol + sorbitol, inclusiv cel ascuns în „stevie 1:1" și în fulgii de ciocolată fără zahăr. |
| **Xilitol prezent** | **orice cantitate** | Toxic pentru câini: risc de hipoglicemie peste 0,1 g/kg, risc hepatic peste 0,5 g/kg. Se scrie **întotdeauna**. |
| **Gelatină sau colagen** | **orice cantitate** | Câte grame din proteina pe porție sunt colagen și câte contează efectiv (§5.6). |
| **Zaharuri pe porție** | **> 25 g** | „E un desert cu zahăr." Cifra. |
| **Sorbitol (inclusiv din prune uscate)** | **> 5 g** | Prag mult mai jos decât la ceilalți polioli. |
| **Alergeni** | prezenți | Arahide, nuci, lactate, ou, gluten, susan, soia. |
| **Cofeină** | cacao multă sau cafea, propus seara | mg estimați și mențiunea „seara". |
| **Aspartam** | prezent | „Conține o sursă de fenilalanină." |
| **Sucraloză într-o rețetă coaptă** | prezentă | Nu se folosește la copt (§1.9). Se schimbă îndulcitorul. |
| **Fibră pe porție** | **> 12 g** | Făina de cocos și psyllium ajung acolo repede. |

### 6.6 Diagnostic rapid: ce a mers prost

| Simptom | Cauza cea mai probabilă | Prima corecție |
|---|---|---|
| Blat uscat și cauciucat | Prea mult whey, prea mult timp în cuptor | Scade whey-ul la 25% din masa uscată; jumătate cazeină; −10 °C; scoate-l cu 2 min mai devreme |
| Blat sfărâmicios, cade la tăiere | Nu are liant | +3 g psyllium sau +1 ou la 100 g făină de migdale |
| Blat gumos, lipicios, elastic | Prea mult psyllium sau xantan | Scade psyllium sub 5% din masa uscată |
| Blat gri-violet | Psyllium + bicarbonat | Normal. Cacao maschează. Sau praf de copt fără bicarbonat liber. |
| Rumeguș după 10 minute | Făină de cocos supradozată | Raport 1:4 față de grâu, +1 ou, +70 ml lichid |
| Cremă nisipoasă la frigider | Eritritol recristalizat | Sub 10 g eritritol la 100 g fază apoasă; macină-l pudră; dizolvă-l cald |
| Gust „mentolat" nedorit | Cristale de eritritol nedizolvate | Idem |
| Amăreală metalică | Prea multă stevie | Scade stevia, crește eritritolul, adaugă sare și vanilie |
| Shake cu cocoloașe | Whey în lichid peste 70 °C | Pastă rece întâi; sau treci pe cazeină |
| Jeleul nu s-a prins | Gelatină fiartă, sau fruct crud cu protează | Nu depăși 60 °C; fierbe ananasul/kiwi-ul/ghimbirul 5 min |
| Agarul nu s-a prins | Nu a fost fiert 2 minute | Reîncălzește peste 90 °C și toarnă din nou |
| Înghețată piatră | Zero antigel: îndulcitor intens fără masă dizolvată | §3.4, măsurile 1–3 |
| Înghețată nisipoasă și rece pe limbă | Eritritol cristalizat în congelator | Xilitol sau puțin zahăr pentru partea de antigel |
| Jeleu care a lăsat apă | A fost congelat | Gelurile nu se congelează (§2.11) |
| Bezea care „plânge" | Eritritol în loc de zahăr, plus umiditate | Zahăr real pentru bezea, sau renunță la bezea |

---

## 7. Unde dovezile sunt prea slabe ca să dăm o recomandare

Lista asta e la fel de importantă ca restul documentului. Sunt locurile unde
un ghid obișnuit ar inventa o poziție.

**1. Eritritolul și riscul cardiovascular.**
Nu putem spune „e sigur" și nu putem spune „e periculos" (§1.4). Ce știm:
o asociere reproductibilă în două cohorte de pacienți cardiaci, un mecanism
plachetar plauzibil, un studiu intervențional cu 10 oameni pe braț și marker
surogat, și un confuzor major nerezolvat — eritritolul plasmatic e în mare
parte produs endogen. Nu există niciun studiu randomizat cu rezultate clinice.
**Ce facem în practică:** declarăm gramele, nu emitem verdict, și preferăm
formulările care folosesc mai puțin poliol total.

**2. Îndulcitorii non-nutritivi și greutatea / metabolismul pe termen lung.**
OMS a emis în 2023 o recomandare de a nu folosi îndulcitori non-nutritivi
pentru controlul greutății. E o **recomandare condiționată, pe dovezi de
certitudine scăzută**, bazată în mare parte pe studii observaționale cu
cauzalitate inversă evidentă (oamenii care se îngrașă trec la băuturi
dietetice, nu invers). În același timp, studiile randomizate de înlocuire a
zahărului cu îndulcitori arată în general o scădere mică de greutate. **Cele
două corpuri de dovezi nu s-au împăcat.** Nu avem o poziție.

**3. Îndulcitorii și microbiomul intestinal.**
Există semnale in vitro și pe rozătoare pentru mai mulți îndulcitori, și un
număr mic de studii pe oameni cu rezultate inconsistente. Nu se știe dacă
schimbările măsurate au vreo consecință clinică. **Nu e un motiv de
recomandare în nicio direcție.**

**4. Compușii clorurați din sucraloza încălzită.**
Chimia e stabilită: peste ~120 °C, sucraloza se descompune și pot apărea
cloropropanoli și organoclorurați. **Nu există date de expunere umană** care
să spună cât înseamnă asta la o tavă de prăjitură. EFSA a refuzat totuși
extinderea la panificație fină pe baza acestei incertitudini. **Poziția
noastră e o decizie de cost, nu una de risc:** evitarea e gratuită, deci nu
coacem cu sucraloză (§1.9).

**5. Factorul 0,25 pentru colagen.**
DIAAS-ul colagenului e ~0. Factorul din cod e 0,25, nu 0. Diferența e o
**judecată [JUD]**, nu o măsurătoare: colagenul contribuie azot, glicină și
sațietate, iar un 0 curat ar transforma o penalizare într-un verdict binar.
Cine crede că ar trebui să fie 0,1 sau 0,4 are un argument legitim. Numărul
stă într-un singur loc în `js/utils/compute.js` și se poate schimba.

**6. Gelatina pentru tendoane, piele și articulații.**
Un studiu mic cu marker surogat, plus o literatură comercială. Nu e suficient
pentru o afirmație într-o rețetă, iar `DESSERT-SCHEMA §0` interzice oricum
afirmațiile de sănătate.

**7. Adaptarea digestivă la polioli.**
Se citește frecvent că toleranța la xilitol crește în 2–3 săptămâni de consum
regulat. Dovada e limitată și inconstantă între polioli. Nu construi o rețetă
pe presupunerea că cititorul „se obișnuiește".

**8. Pragurile de polioli pentru sindromul de intestin iritabil.**
Cifrele din protocoalele low-FODMAP (ordinul a 0,15–0,4 g pe porție pentru
sorbitol și manitol) vin din testare individuală, nu din studii de populație.
Sunt utile ca ordin de mărime, nu ca prag universal. **Singurul lucru corect
de scris e că scara e complet diferită.**

**9. Prețurile.** Ca peste tot în proiect: **niciunul nu e confirmat.**
Estimările din `js/data/10-dessert-pantry.js` poartă aceeași marjă ca restul
atlasului și sunt afișate cu `≈`.

---

## 8. Cele trei lucruri care ar trebui să ajungă în interfață

Din tot documentul, astea sunt afirmațiile care schimbă o decizie și pe care
un cititor nu le poate ghici.

**1. „Fără zahăr" nu înseamnă „fără calorii", și cu atât mai puțin „fără
efect".** Xilitolul are **2,4 kcal/g** — 60% din zahăr. Maltitolul are 2,4
kcal/g și **indice glicemic ~35**. „Stevia 1:1" e **96–99% eritritol**, deci
tot ce e etichetat drept stevie contează la pragul de polioli. Un card de
desert ar trebui să afișeze **gramele de polioli pe porție** la fel de vizibil
ca proteina.

**2. Îndulcitorii intenși nu au antigel — de asta înghețata e piatră.**
Nu e o problemă de rețetă sau de răbdare, e o proprietate coligativă: 0,2 g de
sucraloză nu pot face ce fac 150 g de zahăr. Și, contraintuitiv, **eritritolul
are cel mai bun antigel teoretic din grup (2,8 × zahărul) și nu livrează
aproape nimic**, pentru că iese din soluție și cristalizează la temperaturi de
congelator. Orice desert `frozen` din atlas ar trebui să poarte o notă despre
temperare și porționare.

**3. Regula automată de colagen nu vede ingredientele.** `COLLAGEN_RE`
testează numele intrării. Un desert numit „Jeleu proteic de zmeură" primește
**zero penalizare** deși are gelatină în el, iar unul numit „…cu gelatină"
primește **penalizarea maximă** deși 85% din proteina lui e izolat de zer. La
deserturi, câmpul `collagenShare` nu e o rafinare — e singurul mecanism care
funcționează. Iar cifra pe care o vede cititorul ar trebui să fie **„16,6 g
declarate, 14,1 g care contează"**, nu una singură.

---

## 9. Ce ar trebui verificat mai departe

Lista onestă de goluri, ca să nu se piardă:

- **Disponibilitatea reală în Sibiu** a xilitolului, a psylliumului pudră și a
  cazeinei micelare la bucată — documentul presupune că se găsesc, dar
  [STORES-SIBIU.md](STORES-SIBIU.md) nu le acoperă încă pe toate.
- **Valorile de polioli de pe etichetele reale** ale produselor „stevie 1:1"
  vândute în România. Cămara folosește 96 g/100 g ca valoare tipică **[EST]**;
  nu a fost citită nicio etichetă.
- **Dacă intrările de desert trebuie să poarte `collagenShare`** sau dacă
  fracțiunea se calculează la încărcare din lista de ingrediente. E o decizie
  de schemă, nu de conținut (§5.6, punctul 3).
- **Un test de bucătărie** pentru amestecul de bază din §4.9. Toate raporturile
  de acolo sunt **[EST]** — practică documentată, nu rezultat măsurat în
  bucătăria noastră.
- **Reevaluarea §1.4** dacă apare un studiu randomizat pe eritritol cu
  rezultate clinice. E singura secțiune din document care poate deveni greșită
  peste noapte.
