# Proteina ieftină — clasamentul complet

Toate cifrele sunt **lei per 100 g de proteină pură**, calculate din prețul
estimat al pachetului și conținutul real de proteină.

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

Colagenul și gelatina sunt excluse (vezi `METHODOLOGY.md` §4).

**Intervalul din atlas merge de la 3,69 lei la peste 1800 lei.** E o diferență de
500 de ori pentru același nutrient. Aici e harta.

---

## 1. Top 22 — cea mai ieftină proteină din Sibiu

| # | Produs | lei/100 g P | Categorie |
|---:|---|---:|---|
| 1 | Fulgi de ovăz integrali | 3,69 | Panificație |
| 2 | Soia boabe, uscată | 3,89 | Vegetal |
| 3 | Mazăre despicată uscată | 4,49 | Vegetal |
| 4 | Carcase și spinări de pui (pentru supă) | 4,64 | Carne |
| 5 | Gluten de grâu vital | 4,65 | Panificație |
| 6 | Granule de soia (TVP), uscate | 5,20 | Vegetal |
| 7 | Linte verde / brună, uscată | 5,44 | Vegetal |
| 8 | Ficat de porc | 5,56 | Carne |
| 9 | Șorici de porc crud | 5,67 | Carne |
| 10 | Gluten de grâu vital (făină de gluten) | 6,00 | Vegetal |
| 11 | Gât de pui | 6,14 | Carne |
| 12 | Pulpe (sferturi) de pui congelate | 6,39 | Carne |
| 13 | Linte roșie decorticată, uscată | 6,67 | Vegetal |
| 14 | Fasole albă boabe, uscată | 6,67 | Vegetal |
| 15 | Fulgi de ovăz (fulgi mari) | 6,67 | Vegetal |
| 16 | Bob uscat | 6,92 | Vegetal |
| 17 | Fasole roșie (kidney), uscată | 7,11 | Vegetal |
| 18 | Bulgur uscat | 7,15 | Vegetal |
| 19 | Paste integrale | 7,39 | Vegetal |
| 20 | Năut uscat | 7,50 | Vegetal |
| 21 | Ficat de pui | 7,94 | Carne |
| 22 | Rasol (ciolan) de porc | 8,05 | Carne |

### Citește tabelul cu atenție

**Trei dintre primele cinci sunt incomplete.** Ovăzul și glutenul de grâu sunt
sărace în lizină; glutenul are un PDCAAS de ~0,25 în ciuda celor 75 g de proteină
la 100 g. Sunt ieftine și utile, dar **nu sunt o bază** — combină-le cu
leguminoase, lactate sau ouă în aceeași zi.

**Soia e excepția.** Locul 2 la preț **și** proteină completă. E singura
leguminoasă cu profil complet de aminoacizi. Granulele de soia (locul 6) sunt
aceeași proteină, mai comodă.

**Carcasele, gâtul și șoriciul sunt reale, dar nu sunt mese.** Fac o supă
excelentă și sunt aproape gratis, dar 60–85% din masa lor e os sau colagen. Nu
poți construi ziua pe ele.

**Ficatul e cel mai subestimat aliment din atlas.** 5,56 lei per 100 g de
proteină, proteină completă, plus fier și B12 la un nivel pe care nimic altceva
nu îl atinge. Costul real e gustul: scor 22 din 100.

---

## 2. Mediana pe categorie — de unde vine banii

| Categorie | Median | Cel mai ieftin |
|---|---:|---:|
| 🥩 Carne proaspătă | **16,0 lei** | 4,6 |
| 🌱 Proteine vegetale | **19,2 lei** | 3,9 |
| 🍞 Panificație, băuturi & dulciuri | 21,7 lei | 3,7 |
| 🥛 Lactate & ouă | 23,5 lei | 11,1 |
| 💪 Suplimente & snackuri | 27,8 lei | 9,9 |
| 🥓 Mezeluri & conserve | 37,8 lei | 12,0 |
| 🐟 Pește & fructe de mare | 46,8 lei | 10,3 |
| 🍱 Mâncare gata | **54,4 lei** | 14,5 |

**Concluzia în două cifre:** mâncarea gata costă de **3,4 ori** mai mult per gram
de proteină decât carnea proaspătă. Asta e prețul comodității, măsurat.

Observația contraintuitivă: **suplimentele (27,8) sunt mai ieftine decât
mezelurile (37,8) și decât peștele (46,8).** Whey-ul cumpărat online nu e o
extravaganță — e la mijlocul clasamentului. Extravaganța e salamul.

---

## 3. Cele mai scumpe 12 — unde se scurg banii

| # | Produs | lei/100 g P |
|---:|---|---:|
| 1 | Sushi la caserolă | 227 |
| 2 | Salată cu pui (McDonald's) | 172 |
| 3 | KFC Salată cu Zinger | 145 |
| 4 | Icre de știucă (tarama) | 143 |
| 5 | KFC Crispy Strips, 5 buc | 141 |
| 6 | Chicken McNuggets, 9 buc | 136 |
| 7 | Supă cremă instant la plic | 131 |
| 8 | Ton cu cuscus la pahar | 125 |
| 9 | Cremă de brânză tip Philadelphia | 125 |
| 10 | Baton de cereale clasic | 121 |
| 11 | Somon în saramură (gravlax) | 115 |
| 12 | KFC Hot Wings, 5 buc | 111 |

**Philadelphia la 125 lei per 100 g de proteină** e de **11 ori** mai scump decât
ouăle din Piața Cibin. Nu pentru că e un produs rău, ci pentru că e în esență
grăsime: 5–6 g de proteină la 100 g. Când cumperi cremă de brânză, cumperi
grăsime cu aromă de brânză.

**Salata cu pui de la McDonald's la 172 lei** e cazul cel mai instructiv: e o
alegere „sănătoasă”, chiar are un profil decent de calorii, și totuși costă de
**30 de ori** mai mult per gram de proteină decât pulpele de pui congelate.

---

## 4. Trucul cel mai bun: laptele praf degresat

**36 g de proteină la 100 g. ~11–13 lei per 100 g de proteină. Proteină completă,
DIAAS ~1,1.**

Adică: mai ieftin decât pieptul de pui, de aproape două ori mai ieftin decât
whey-ul, complet, și stabil la raft luni de zile.

Stă pe **raftul de patiserie** de la Kaufland și Selgros, nu la lactate. De asta
nu-l găsește nimeni.

**Cum se folosește:** o lingură plină (~15 g) adăugată în iaurt, în terci, în
cafea sau într-un shake adaugă ~5,5 g de proteină fără să schimbe textura.
Trei linguri pe zi = 16 g de proteină pentru ~2 lei.

**Capcana:** 52 g de lactoză la 100 g. Dacă ai intoleranță, nu e pentru tine.

---

## 5. Bugete concrete

### 15 lei/zi — ~140 g proteină

| Ce | Cantitate | Proteină | Cost |
|---|---|---:|---:|
| Fulgi de ovăz | 100 g | 13 g | ~1,5 lei |
| Lapte praf degresat | 40 g | 14 g | ~1,7 lei |
| Linte uscată | 120 g | 30 g | ~2,2 lei |
| Ouă | 4 buc | 25 g | ~6 lei |
| Pulpe de pui congelate | 300 g | 55 g | ~4 lei |
| **Total** | | **~137 g** | **~15 lei** |

Necesită gătit. Ovăzul + lintea + puiul acoperă complementaritatea aminoacizilor.

### 30 lei/zi — ~145 g proteină, gătit minim

| Ce | Proteină | Cost |
|---|---:|---:|
| 200 g skyr | 22 g | ~6 lei |
| 1 cutie ton în suc propriu | 27 g | ~7 lei |
| 3 ouă | 19 g | ~4,5 lei |
| 150 g piept de pui | 35 g | ~5,5 lei |
| 150 g brânză de vaci | 18 g | ~4 lei |
| 30 g lapte praf în cafea | 11 g | ~1,3 lei |
| **Total** | **~132 g** | **~28 lei** |

### 60 lei/zi — zero gătit

| Ce | Proteină | Cost |
|---|---:|---:|
| Jumătate de pui la rotisor | 75 g | ~20 lei |
| 150 g piept de pui la grătar feliat | 50 g | ~18 lei |
| 200 g skyr | 22 g | ~6 lei |
| 1 baton proteic | 20 g | ~9 lei |
| **Total** | **~167 g** | **~53 lei** |

Nici o tigaie. Costă de 3,5 ori mai mult decât varianta gătită, pentru aceeași
proteină. Asta e prețul exact al comodității, în lei.

---

## 6. Reguli de economisire, în ordinea impactului

1. **Cumpără leguminoase uscate, nu la conservă.** Diferența e de 2–3 ori. Costul
   e o oră de fiert, aproape complet pasivă.
2. **Ia carnea la promoție și congeleaz-o.** Reducerile de 30–50% pe carnea din
   ultima zi de la Kaufland sunt reale și carnea e perfect bună.
3. **Adaugă lapte praf degresat oriunde intră.** Cel mai bun raport
   efort/proteină din tot atlasul.
4. **Nu cumpăra suplimente din farmacie.** Aceleași produse costă jumătate
   online.
5. **Vrac de la Selgros/Metro** — dar numai dacă ai congelator.
6. **Evită „proteic” ca argument de cumpărare.** Produsele cu „Protein” pe
   ambalaj ocupă pozițiile 32–44 din 56 în clasamentul de preț pe lactate.
7. **Ouăle din piață**, dacă ai unde. 9 g de proteină pe leu, cel mai bun raport
   din atlas.
8. **Puiul la rotisor** e singura mâncare gata care e competitivă cu gătitul
   acasă: 0,21 lei/g, față de 0,15 pentru pieptul crud și 0,41–1,72 pentru orice
   altceva din categoria „mâncare gata”.

---

## 7. Cum reproduci clasamentul în aplicație

Deschide vizualizarea **Clasamente** (tasta `3`) → tabelul „Cea mai ieftină
proteină”. Respectă filtrele active, deci poți restrânge la magazinele la care
ajungi efectiv, sau la produse fără gătit, și clasamentul se recalculează.

Sau, în vizualizarea **Tabel** (tasta `2`), sortează după coloana `lei/100gP`.
