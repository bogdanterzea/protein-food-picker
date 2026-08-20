# Ce urmează și de ce

Documentul ăsta nu e o listă de dorințe. Fiecare punct are ori o măsurătoare
în spate, ori o sursă, ori amândouă. La fel de important, are și o secțiune cu
**ce am decis să NU facem** — pentru o aplicație care are deja 7 vizualizări și
26 de fațete de filtrare, lucrurile respinse contează mai mult decât cele
adăugate.

---

## 1. Constatarea care schimbă direcția

Cercetarea pe aplicații de nutriție spune același lucru din mai multe direcții:
**oamenii nu abandonează pentru că le lipsesc funcții, ci pentru că funcțiile
costă timp.** Aproximativ 60% dintre cei care instalează o aplicație de
urmărire alimentară o abandonează în 14 zile, iar motivul numărat cel mai des
în sondaje e efortul zilnic de introducere a datelor. Ce se măsoară ca fiind
fatal e combinația dintre cost zilnic mare, recompensă imediată mică și o
interfață care pedepsește imperfecțiunea.

Atlasul are un avantaj structural aici și **nu trebuie să-l piardă**: nu cere
nimic zilnic. Răspunde o dată la „ce cumpăr" și „ce gătesc", apoi te lasă în
pace. Momentul în care i se adaugă un jurnal alimentar, o serie de zile
consecutive sau o bară de progres zilnică, intră în aceeași categorie de
aplicații din care oamenii pleacă în două săptămâni.

**De aceea jurnalul alimentar, „streak"-urile și notificările sunt respinse
explicit mai jos, deși erau primele pe lista de „lipsuri".**

---

## 2. Făcut în runda asta

### Instalabilă și funcțională offline

Atlasul se folosește în magazin, pe telefon, unde semnalul e prost. Datele erau
deja locale, dar browserul cerea fiecare fișier de la rețea la fiecare
deschidere.

Acum are `manifest.webmanifest`, `sw.js` generat din ce încarcă efectiv
`index.html`, și trei iconițe PNG desenate programatic (`tools/make-icons.js`,
fără dependențe — patru bare de statistici în paleta de macro deja validată).

Verificat cu serverul **oprit efectiv**, nu emulat: aplicația pornește cu toate
cele 503 produse, o cerere necache-uită primește 504 de la service worker, una
cache-uită returnează fișierul real. Numele cache-ului conține un hash al
conținutului, deci orice modificare invalidează automat versiunea veche, iar
`tools/check.js` pică dacă `sw.js` a rămas în urmă.

Înregistrarea e sărită pe `file://`, unde service workerii sunt interziși —
promisiunea „merge fără server" rămâne întreagă.

### Puncte de intrare orientate pe sarcină

Aplicația se deschidea pe 503 produse în spatele a 26 de fațete. Asta e
cantitatea potrivită de putere și cantitatea greșită de primă impresie.

Cinci întrebări cu care oamenii chiar ajung aici — *ieftin și bogat, fără
gătit, sub 20 de minute, slab, cele mai bune* — sunt acum presetări de filtru,
fiecare cu **numărul de rezultate afișat pe pastilă**. Regula de căutare
fațetată care contează cel mai mult e să nu lași pe nimeni să intre într-un set
gol; numărătoarea prezisă se potrivește exact cu rezultatul (verificat: „Slab"
prezice 144, livrează 144, toate cu puritate ≥45%).

Presetările nu sunt un subsistem nou: mută aceleași chei de stare pe care le
mută rail-ul, deci nu pot ajunge să-l contrazică. Numărătoarea împrumută starea
live și o pune la loc, în loc să reimplementeze `matches()` — două copii ale
regulilor de filtrare ar diverge într-o săptămână.

### Împărțirea zilei pe pragul de leucină

Calculatorul împărțea ținta zilnică la patru, mereu. Sinteza proteică
musculară e însă un proces cu prag, nu liniar: o masă are nevoie de ~2,5–3 g
leucină ca să activeze mTORC1, adică ~25–30 g de proteină de calitate; sub
atât, masa contribuie mult mai puțin decât sugerează gramele. Peste ~40 g
proteina se folosește, dar nu mai adaugă semnal — 3–4 „pulsuri" pe zi bat o
masă enormă.

Împărțirea la patru rata fereastra la ambele capete: 50 g pe masă la o țintă de
200 g, 19 g pe masă la 75 g. Acum numărul de mese e derivat din țintă, ochind
~35 g pe masă, plafonat între 3 și 6. Trei teste noi fixează **fereastra**, nu
aritmetica.

---

## 3. Recomandat, în ordinea câștigului măsurat

| # | Ce | De ce, cu cifre |
|---|---|---|
| 1 | **Actualizare chirurgicală a cardului** la favorit/comparație | Cu grila extinsă la 503 carduri, orice interacțiune costă **44 ms** — trei cadre pierdute — pentru că se reconstruiește tot. Un card actualizat la fața locului ar duce asta sub 1 ms. |
| 2 | **Un singur registru de metrici** `PF.metrics` | Aceeași metrică e definită independent în 5 locuri (`filters.SORTS`, `card.TABLE_COLUMNS`, `boards.BOARDS`, `compare.ROWS`, `ui`/`modal`). Se vede deja în cod: trei tratări diferite ale valorii lipsă pentru același preț. |
| 3 | **`stores.js` să citească `f._d.prices`** | Recalculează de mână formula preț/100 g proteină. Identică algebric azi, dar pierde `verified` și `band`, deci nu poate distinge un preț confirmat de o estimare — exact distincția pe care aplicația o apără peste tot. |
| 4 | **Golirea panourilor inactive** | DOM-ul fiecărei vizualizări rămâne pe viață: 12.595 noduri în loc de ~6.000. Revenirea costă oricum o re-randare, care se face deja. |
| 5 | **`_d.usableProtein` calculat o dată** | Predicatul „e colagen" e scris în 6 locuri. |
| 6 | **`getKcalTarget()` mutat lângă `proteinTarget()`** | Ținta calorică e `weight * 31` scris dur în `app.js`, în timp ce ținta de proteină trăiește în `compute.js` cu `GOALS`. Aceeași noțiune, două straturi. |
| 7 | **Actualizarea doar a numărătorilor din rail** | `refresh()` reconstruiește tot rail-ul, ~2 ms din 8,7, și distruge `<input>`-urile — motivul pentru care există deja cârja `railFrozen`. |

### Funcționalități care merită, dincolo de performanță

- **Exportul listei de cumpărături** ca text simplu, de copiat într-o notă sau
  un mesaj. Lista se ia la magazin; momentan nu poate ieși din aplicație decât
  tipărită.
- **Sezonalitate.** Atlasul știe `availability: 'seasonal'`, dar nu spune
  *când*. Un câmp cu lunile ar face diferența între „uneori" și „acum".
- **Culorile axelor de gust în tema deschisă** au fost reparate în runda asta
  (picau la 1,44–2,72:1, sub pragul de 3:1 chiar și pentru o umplutură), dar
  restul paletei ar merita o trecere sistematică, nu una punctuală.

---

## 4. Respins deliberat

| Ce | De ce nu |
|---|---|
| **Jurnal alimentar, serii de zile, notificări** | Vezi secțiunea 1. Ar transforma o unealtă care nu cere nimic zilnic în una din care se pleacă în 14 zile. |
| **Bundling și `defer` pentru încărcare** | Măsurat, nu presupus: 5 variante rulate. FCP rămâne 148–156 ms în toate, sub nivelul de zgomot. Inline-ul CSS taie `domInteractive` de la 81 la 30 ms, dar FCP nu se mișcă, fiindcă nimic nu se pictează până nu termină `boot()`. Ar costa un build step pe care proiectul îl refuză, pentru zero câștig. |
| **Scoaterea `content-visibility: auto`** | La 503 carduri: **38,7 ms cu, 676–713 ms fără**. Raport de 18×. Browserul pictează efectiv 9 carduri din 503. Regula din `css/06-cards.css` nu se atinge. |
| **Scanare de coduri de bare / fotografie** | Ar cere rețea și un serviciu extern. Aplicația nu face niciun request în afara propriilor fișiere, iar asta e o proprietate, nu o lipsă. |
| **Mutarea media queries într-un singur fișier** | `index.html` încarcă 15 foi, iar `12-print.css` e ultima, după 13 și 14. Fridge și stores se încarcă *după* `11-responsive`, deci câștigă prin ordinea sursei. Consolidarea ar inversa tăcut cascada. |

---

## 5. Surse

- [Impacts of protein quantity and distribution on body composition](https://pubmed.ncbi.nlm.nih.gov/38765819/)
- [How much protein can the body use in a single meal](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5828430/)
- [Incorporating Consumers' Needs in Nutrition Apps (JMIR)](https://mhealth.jmir.org/2023/1/e39515)
- [Information density and progressive disclosure in search UX](https://www.algolia.com/blog/ux/information-density-and-progressive-disclosure-search-ux)
- [Design Patterns: Faceted Navigation – A List Apart](https://alistapart.com/article/design-patterns-faceted-navigation/)
