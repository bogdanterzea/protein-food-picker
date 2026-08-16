# Metodologie — cum sunt calculate scorurile

Acest document explică fiecare număr pe care aplicația îl folosește ca să
ordoneze, să coloreze sau să eticheteze un produs. Ideea de bază: **dacă un scor
îți schimbă decizia, trebuie să poți vedea cum a fost calculat și să fii de
acord sau nu cu el.**

Tot ce e descris aici trăiește într-un singur fișier: `js/utils/compute.js`.
Nicio altă parte a aplicației nu are voie să-și inventeze propriul scor.

---

## 1. Problema: „bogat în proteine” nu e un singur număr

Patru produse reale din atlas, toate „bogate în proteine”:

| Produs | Proteină/100 g | % din kcal | lei/100 g proteină | Timp |
|---|---:|---:|---:|---:|
| Izolat proteic din zer WPI 90 | 88 g | 95% | ~20 lei | 2 min |
| Piept de pui la grătar feliat (Cris-Tim) | 33 g | 81% | ~30 lei | 1 min |
| Linte verde uscată | 25 g | 30% | ~5,4 lei | 35 min |
| Jumătate de pui la rotisor | 25 g | 48% | ~12 lei | 0 min |

Care e „cel mai bun”? Depinde complet de ce te doare: banii, timpul, caloriile
sau efortul. Un singur clasament ar minți pe cineva.

De aceea atlasul calculează **șase axe independente**, le arată pe toate ca bare,
și abia apoi le comprimă într-o singură literă de rang — cu ponderile scrise pe
față, ca să poți fi în dezacord informat.

---

## 2. Cele trei axe calculate din date

### 2.1 Proteină — cantitatea brută

```
bara = min(100, proteină_la_100g / 30 × 100)
```

**De ce 30 g?** E pragul la care se așază alimentele întregi bune: piept de pui
gătit (~31 g), cașcaval (~26 g), ton scurs (~26 g), telemea de oaie. Pudrele
(70–90 g) trec de prag și se opresc la 100 — nu vrem ca bara să fie proiectată
pentru zer, altfel toate alimentele reale ar arăta anemic.

Bara nu spune nimic despre calorii. Pentru asta există puritatea.

### 2.2 Puritate — cât din calorii vine din proteină

```
puritate% = (proteină × 4) / kcal_declarate × 100
bara = min(100, puritate% / 80 × 100)
```

Asta e metrica pe care majoritatea oamenilor n-o calculează și care schimbă cele
mai multe decizii. Exemple din atlas:

| Produs | Proteină/100 g | Puritate |
|---|---:|---:|
| Albuș de ou lichid | 11 g | 92% |
| Iaurt grecesc 0% | 10 g | 70% |
| Ouă întregi | 12,6 g | 35% |
| Iaurt grecesc 10% grăsime | 5 g | 16% |

Ouăle și iaurtul grecesc 0% au aproape aceeași proteină pe 100 g. Nu au deloc
aceeași densitate calorică. Într-un deficit, diferența contează enorm.

**80% e plafonul practic.** Albușul, izolatul de zer și codul ajung acolo.
Nimic real nu trece.

Împărțim la caloriile **declarate**, nu la cele reconstruite din macro-uri,
pentru că asta e cifra pe care o citește un om pe etichetă.

### 2.3 Preț — cât costă proteina, nu produsul

```
proteină_în_pachet = proteină_la_100g × (grame_pachet / 100)
lei_per_100g_proteină = preț_pachet / proteină_în_pachet × 100
```

Aplicația calculează asta pentru **fiecare magazin** din intrare și păstrează cel
mai bun preț găsit.

> **Prețurile sunt estimări, nu date.** Niciunul nu a fost verificat într-un
> magazin, iar pentru retailul alimentar din România nu există un API public de
> prețuri. Fiecare preț poartă o marjă (±20% la lanțuri, ±30% la piață și
> restaurant) și e afișat cu `≈`. Bara de preț și clasamentul de cost sunt deci
> ordonări relative, corecte ca ierarhie, aproximative ca valoare absolută.

Bara e logaritmică, pentru că distribuția e brutal asimetrică:

```
bara = 100 × (1 − (ln(cost) − ln(2,5)) / (ln(80) − ln(2,5)))
```

- **2,5 lei / 100 g proteină** = bara plină (leguminoase uscate, lapte praf, ouă la promoție)
- **80 lei / 100 g proteină** = bara goală (mâncare la restaurant, suplimente din farmacie)

Scala logaritmică e obligatorie: intervalul real din atlas merge de la **3,69 lei**
la peste **1800 lei**. Pe o scală liniară, 95% din produse s-ar înghesui în
primul procent al barei.

Produsele fără preț cunoscut primesc 50 (neutru), nu 0 — altfel lipsa datelor ar
arăta ca o condamnare.

---

## 3. Cele trei axe subiective

**Gust**, **sațietate**, **comoditate** și **versatilitate** sunt evaluate manual,
de la 10 la 100, în timpul cercetării fiecărei categorii. Instrucțiunea dată a
fost explicită: *fii un critic dur și folosește tot intervalul.*

| Produs | Gust | De ce |
|---|---:|---|
| Antricot de vită | 95 | Nu e nevoie de argument |
| Baton proteic Barebells | 84 | Chiar e bun |
| Piept de pui fiert | 45 | Îl mănânci pentru proteină, nu pentru plăcere |
| Granule de soia hidratate | 45 | Textura e o problemă reală |
| Ficat de porc | 22 | Nutrițional excelent, gustul nu |

Sațietatea e evaluată **raportat la calorii**, nu absolut. De asta pudrele
proteice au scoruri mici (18–40): 100 de calorii de shake nu-ți taie foamea cât
100 de calorii de ouă. Asta e o observație reală, nu o părere despre suplimente.

---

## 4. Corecția de calitate a proteinei

Aceasta e cea mai importantă corecție din tot sistemul, și fără ea atlasul ar
recomanda prostii.

**Problema.** Eticheta calculează proteina măsurând azotul total. Colagenul și
gelatina sunt pline de azot și complet lipsite de **triptofan**, un aminoacid
esențial. DIAAS-ul lor pentru sinteză proteică e practic 0. Dar o pudră de
colagen declară 90 g de proteină la 100 g și 100% din calorii din proteină —
adică scoruri perfecte pe primele două axe.

Fără corecție, colagenul ieșea **pe locul 1 la „cea mai multă proteină”, pe locul
1 la „cea mai pură proteină” și în top 10 general.**

**Soluția.** Un factor de calitate care înmulțește cele două axe de proteină:

| Categorie | Factor | Motiv |
|---|---:|---|
| Colagen / gelatină / piftie / răcituri | **0,25** | Fără triptofan; nu contează în ținta zilnică |
| Lactate & ouă | 1,08 | Proteina de referință, DIAAS peste 1 |
| Carne proaspătă, pește | 1,05 | Profil complet de aminoacizi |
| Mezeluri, suplimente | 1,00 | Variază mult |
| Mâncare gata | 0,95 | Amestecuri |
| Panificație, băuturi, dulciuri | 0,92 | Domină cerealele |
| Proteine vegetale | 0,88 | Aminoacid limitant |
| …dar vegetale complete | **1,00** | Soia, quinoa, cânepă, amarant, hrișcă |

**Gramele afișate nu se schimbă niciodată.** 90 g rămâne 90 g pe card. Doar
scorul e ajustat, iar cardul explică de ce, cu un avertisment roșu.

În plus, produsele de tip colagen sunt **excluse din clasamentele de proteină** —
rămân găsibile prin căutare și filtre, dar nu au voie să câștige un top.

**Rezultatul:** colagenul a coborât de la rang A (75) la rang D (36). Ouăle au
urcat de la C la B, ceea ce e corect — sunt una dintre cele mai bune surse de
proteină existente, doar că nu una concentrată.

---

## 5. Scorul general și rangul

```
scor = 0,28 × proteină      (ajustată cu calitatea)
     + 0,24 × puritate      (ajustată cu calitatea)
     + 0,15 × preț
     + 0,13 × comoditate
     + 0,10 × sațietate
     + 0,10 × gust
```

| Rang | Scor | Produse | % din atlas |
|:---:|---:|---:|---:|
| **S** | ≥ 80 | 3 | 0,6% |
| **A** | ≥ 68 | 75 | 14,9% |
| **B** | ≥ 56 | 161 | 31,9% |
| **C** | ≥ 44 | 148 | 29,3% |
| **D** | ≥ 30 | 102 | 20,2% |
| **E** | < 30 | 16 | 3,2% |

**Rangul S e rar intenționat.** Trei produse din 505. Dacă jumătate din atlas ar
fi rang S, litera n-ar comunica nimic.

### De ce aceste ponderi

Ponderile presupun că folosești atlasul ca să **mănânci mai multă proteină, cu
efort și bani rezonabili**. Peste jumătate din scor (0,52) stă pe cât de multă și
cât de curată e proteina — pentru că asta e întrebarea. Prețul urmează, pentru că
proteina scumpă e proteina pe care n-o cumperi de două ori. Gustul are doar 0,10
nu pentru că n-ar conta, ci pentru că e cea mai personală axă din toate — dacă nu
ești de acord, ai toate cele șase bare în față ca să judeci singur.

Dacă alte ponderi ți se par mai bune, sunt un singur obiect în
`js/utils/compute.js → CAL.weights`. Schimbă-le și tot atlasul se reordonează.

---

## 6. Axe suplimentare (afișate, dar nu în scorul general)

| Axă | Formulă | Unde apare |
|---|---|---|
| **Viteză** | `100 × (1 − timp/75)`, minim 3 | Bara extinsă din dosar |
| **Slăbiciune** | `100 × (1 − grăsimi×9/kcal)` | Dosar + clasamentul „cele mai slabe” |
| **g proteină / 100 kcal** | `proteină/kcal × 100` | Clasamentul „multă proteină, puține calorii” |
| **g proteină / leu** | inversul costului | Fila „unde cumperi” |

---

## 7. Verificarea coerenței datelor

Fiecare intrare e verificată automat la încărcare:

**Verificarea Atwater.** Caloriile ar trebui să poată fi reconstruite din
macro-uri:

```
kcal_prezise = proteină×4 + carbohidrați×4 + grăsimi×9 + fibre×2
```

Dacă diferența față de valoarea declarată depășește **±18%**, intrarea primește
un steag `energy-mismatch`, iar dosarul afișează explicația (poate fi rotunjire
de etichetă, polioli, sau o eroare de transcriere).

Se mai verifică `zaharuri ≤ carbohidrați` și `grăsimi saturate ≤ grăsimi`.

**Rezultat curent: 0 intrări cu steaguri de coerență din 505.**

### Nivelurile de încredere

| Nivel | Produse | Ce înseamnă |
|---|---:|---|
| Ridicată | 167 | Citit de pe etichetă / site oficial |
| Medie | 260 | Valori tipice pentru tipul de produs |
| Scăzută | 78 | Estimare: raion cald, restaurant, tarabă din piață |

Nivelul e afișat în subsolul fiecărui dosar, împreună cu sursele.

---

## 8. Îmbinarea duplicatelor

Datele au fost cercetate de opt pași independenți, câte unul per categorie, iar
teritoriile lor se suprapun la margini: laptele praf degresat e și lactat, și
truc de panificație; tahini e și pastă de semințe, și condiment.

Aplicația detectează automat intrările cu același nume normalizat și le îmbină:
câștigă cea cu mai multe magazine (mai multe date de preț), iar rândurile de
magazin ale celeilalte sunt adăugate la ea. Nicio cercetare nu se pierde, iar
ID-urile vechi rămân valide, deci link-urile partajate nu se rup.

**7 perechi îmbinate**, din 512 intrări brute → 505 produse afișate.

---

## 9. Ce nu face metodologia

- **Nu modelează biodisponibilitatea individuală.** Digestia, microbiomul și
  toleranțele diferă de la om la om.
- **Nu ține cont de gătit.** O intrare „carne crudă” are valorile cărnii crude;
  `cooking.yieldNote` spune cât se pierde la gătit, dar scorul nu recalculează.
  Pentru leguminoase există intrări separate uscate și fierte, tocmai pentru că
  diferența e uriașă (linte: 25 g uscată → 9 g fiartă).
- **Nu evaluează sănătatea generală.** Un salam uscat poate avea rang bun la
  proteină și rămâne un mezel procesat, cu sare multă și nitriți. De aceea
  avertismentele sunt afișate separat, nu topite în scor.
- **Nu urmărește prețurile în timp real.** Prețurile sunt fotografii din august
  2026.

---

## 10. Reproducerea calculelor

Totul e verificabil fără browser:

```bash
node -e "
global.window={location:{hash:''}};
global.document={documentElement:{setAttribute(){},style:{setProperty(){}}}};
['js/data/00-stores.js','js/data/01-dairy-eggs.js','js/utils/format.js',
 'js/utils/i18n.js','js/utils/compute.js'].forEach(f=>require('./'+f));
const PF=window.PF, f=window.PF_FOODS[0];
f._d=PF.compute.enrich(f);
console.log(f.nameRo, f._d.tier, Math.round(f._d.score), f._d.bars);
"
```
