# Changelog

## v1.1 — august 2026

O rundă de audit și consolidare, rulată de zece agenți în paralel pe fișiere
cu proprietar exclusiv, plus integrarea făcută în sesiunea principală.

### Funcționalități noi

**„Ce am în frigider"** (`js/components/recipes.js`, `css/13-fridge.css`).
Bifezi ingredientele pe care le ai în casă; fiecare masă îți arată câte
ingrediente ai din câte îi trebuie și exact ce-ți lipsește. Se poate ordona
după cât de aproape ești de a putea găti, iar în dosarul rețetei apare un buton
care adaugă în listă **doar ce lipsește** — lista de cumpărături devine ce mai
ai de cumpărat, nu o copie a rețetei. Cele 83 de ingrediente sunt grupate după
ce contribuie efectiv, nu după raionul din atlas: broccoli și spanacul stau la
legume, deși în atlas sunt „proteine vegetale”; laptele praf degresat stă la
proteine, deși în magazin e pe raftul de patiserie.

**Ghidul magazinelor** (`js/components/stores.js`, `css/14-stores.css`).
`00-stores.js` descria de la început 18 retaileri din Sibiu cu puncte tari,
puncte slabe, indice de preț, program, deschidere duminica și card de
fidelitate — și **nimic din toate astea nu ajungea pe ecran**. Aplicația citea
doar `name` și `color`; zece câmpuri cercetate erau greutate moartă în bundle.
Acum sunt o fișă per magazin, cu bara de preț ancorată la media orașului, iar
numărul de produse și cea mai ieftină proteină de la fiecare magazin se
calculează din atlas la randare, deci nu pot să se desincronizeze.

**`collagenShare`** (`js/utils/compute.js`). Penalizarea pentru colagen era
totul-sau-nimic, aplicată după numele produsului. Jeleul proteic, care e ~1/3
gelatină și 2/3 whey, lua factorul 0,25 pe toată intrarea și cădea la rang E.
Acum câmpul dă o medie ponderată: jeleul urcă la D cu factorul 0,699. În sens
invers, ciorba de burtă și șoriciul crud — colagen curat pe care regexul nu-l
prindea — coboară la factorul corect. Exact 3 produse din 510 și-au schimbat
scorul; restul atlasului e bit-identic.

**Documentația se poate citi.** Subsolul trimitea la fișiere `.md` brute, pe
care browserul le afișa ca text nedecorat, cu tabelele reduse la șiruri de bare
verticale. `tools/build-docs.js` generează acum din fiecare document o pagină
HTML cu aceleași tokene de culoare și tipografie ca aplicația, cu cuprins
lateral, tabele stilizate și același comutator de temă. Markdown-ul rămâne
sursa; HTML-ul e generat și poarta refuză să treacă dacă o pagină a rămas în
urma sursei ei sau dacă vreo legătură mai trimite la Markdown brut.

### Corecții de date — 187 de intrări modificate

- **Etichete peste praguri: ~100 de eliminări.** `very-high-protein` pe băuturi
  cu 8 g proteină, `high-protein` pe iaurturi cu 10 g, `low-fat` pe mușchi de
  vită cu 6,5 g, `high-fiber` pe spanac cu 2,2 g, `low-kcal` pe supe de 448 kcal.
  Aplicația derivă singură etichetele astea din numere, deci una lipsă e
  inofensivă — dar una scrisă greșit intra în filtre și le polua.
- **O inversare fizică:** tonul în ulei avea `omega3Mg` mai *mare* decât cel în
  suc propriu. E invers — la sterilizare grăsimile migrează în uleiul care se
  scurge la consum. 400 → 130.
- **Avertismente de mercur** adăugate la somn, șalău, biban și la produsele cu
  ton care nu aveau niciunul, cu limite săptămânale concrete.
- **Porții imposibile:** gâsca și coastele de porc aveau porții „cu os” dar
  macro-uri pentru carne, deci 1104 și 963 kcal pe porție.
- **8 duplicate unificate**, printre care puiul la rotisor, care exista în trei
  locuri cu aceleași macro-uri.
- 29 de avertismente noi: polioli în batoane, sare pe porție (cel mai grav un
  sandviș cu ~4,8 g), grăsimi saturate, vitamina A din pate de ficat.

### Rețete: 21 → 43

Toate cele șapte metode au acum 5–9 mese. Nicio masă sub 25 g proteină pe
porție (două preexistente au fost corectate). Mediana: 41,4 g proteină la
≈ 8,85 lei porția. Macro-urile rămân calculate din ingrediente, niciodată
scrise de mână.

### Interfață și corectitudine

- **Legenda de macro dădea 99% sau 101% la 125 din 512 de produse** — cele
  patru procente erau rotunjite independent. Acum rotunjire prin cel mai mare
  rest, partajată între legendă și donut, ca inelul și textul de lângă el să nu
  se poată contrazice.
- **Dosarul de produs:** scatterul depășea coloana cu 163px pe desktop, tabelul
  de magazine cerea derulare laterală pe toate produsele testate, subsolul mânca
  139px pe telefon, iar săgețile furau tastele când focusul era pe o filă. Plus
  comparație cu mediana categoriei și un indicator vizibil pentru datele cu
  încredere scăzută.
- **Traducerea în engleză:** 68 de scurgeri de română măsurate în browser,
  reduse la 1 — și aceea e conținut de date, care rămâne în română intenționat.
  Dicționarul a crescut de la 180 la 230 de chei, cu paritate RO/EN completă.
- Textul „scorul e ajustat cu factorul 0,25” era scris de mână și contrazicea
  bara de calitate afișată lângă el; acum citește valoarea reală.

### Unelte

- `tools/test-compute.js` — **154 de teste** pe scoruri și formatare, zero
  dependențe. A prins șase bug-uri reale, printre care `enrich()` care crăpa pe
  o intrare fără `per100g` (adică o singură intrare pe jumătate scrisă dobora
  tot atlasul la boot) și `fmt.normalize` care putea decala `<mark>`-urile din
  căutare.
- `tools/check.js` — două secțiuni noi: fiecare tip de magazin trebuie să aibă
  etichetă în ghid, iar emoji-urile din date trebuie să fie sigure pentru
  injectare în DOM.

### Cifre curente

510 intrări brute, 7 perechi îmbinate, **503 produse afișate** · 8 categorii ·
18 magazine · 43 de mese · 35 de ingrediente de cămară.
Ranguri: S 3 · A 73 · B 161 · C 148 · D 102 · E 16.
Încredere: 168 ridicată · 259 medie · 76 scăzută.

---

## v1.0 — august 2026

Prima versiune completă a Atlasului Proteinelor Sibiu.

### Date

- **505 produse** în 8 categorii și 89 de subcategorii, cercetate în opt pași
  independenți, câte unul per categorie.
- **18 locuri de cumpărat** documentate, de la Kaufland la Piața Cibin.
- Fiecare intrare are macro-uri complete, micronutrienți acolo unde contează,
  1–5 magazine cu preț și raion, pași de gătit, profil de gust pe cinci axe,
  potrivire pe șapte momente ale zilei, sfaturi, avertismente și surse.
- **167 de intrări cu încredere ridicată** (valori citite de pe etichete reale),
  260 medii, 78 estimări declarate ca atare.
- Toate cele 505 intrări trec verificarea de coerență energetică Atwater (±15%),
  `zaharuri ≤ carbohidrați` și `grăsimi saturate ≤ grăsimi`. **Zero steaguri de
  coerență.**

### Aplicație

- Șase vizualizări: carduri, tabel, clasamente, comparație, hartă, listă de
  cumpărături.
- Motor de filtrare cu 9 fațete și 8 intervale numerice, cu numărători live pe
  fiecare chip.
- Bare de statistici în stil joc video, insigne de rang S–E, donut de
  macronutrienți, radar pe șase axe, grafic de dispersie proteină/calorii,
  histogramă.
- Dosar complet pentru fiecare produs, în șase file.
- Calculator de necesar de proteină, constructor de mese cu totaluri live față de
  țintă, listă de cumpărături grupată pe magazinul cel mai ieftin, tipăribilă.
- Interfață completă în română și engleză.
- Teme întunecată și deschisă, ambele cu paletă validată.
- Stare persistentă local, stare de filtre partajabilă prin URL.
- Funcționează din `file://`, fără server, fără build step, fără rețea.

### Decizii de proiectare care au schimbat rezultatele

**Corecția de calitate a proteinei.** Fără ea, pudra de colagen ieșea pe locul 1
la „cea mai multă proteină”, pe locul 1 la „cea mai pură proteină” și în top 10
general — pentru că declară 90 g de proteină la 100 g și 100% din calorii din
proteină. Colagenul și gelatina nu conțin triptofan și au valoare biologică
aproape nulă pentru sinteza musculară. Scorul lor e înmulțit cu 0,25 și sunt
excluse din clasamentele de proteină. Colagenul a coborât de la rang A (75) la
rang D (36); ouăle au urcat de la C la B, ceea ce e corect.

**Paleta a fost validată, nu aleasă.** Prima variantă (verde + ambră pentru
proteină și carbohidrați) a picat verificarea de daltonism la ΔE 2,9 — verdele și
ambra sunt perechea clasică de confuzie roșu-verde. Proteina a fost mutată spre
verde-teal, iar setul final trece toate cele șase verificări în ambele teme.

**Culorile de categorie nu sunt o paletă de date.** Opt nuanțe nu pot trece
pragul de separare pentru daltonism, indiferent cum sunt așezate. Prin urmare
niciun grafic nu codifică categoria prin culoare; graficul de dispersie folosește
o rampă secvențială pe puritatea proteinei.

**Scala de timp e discretă, nu liniară.** Un slider liniar de 0–240 de minute
ascundea 13 produse (fasole și năut cu înmuiere peste noapte, un jambon crud de
48 de ore, brisket, curcan întreg) și înghesuia toate alegerile reale în primul
centimetru. Sliderul merge acum pe trepte, iar treapta de sus înseamnă „fără
limită”, deci niciun produs nu e ascuns de un filtru pe care utilizatorul nu l-a
atins.

**Îmbinarea automată a duplicatelor.** Cele opt cercetări paralele s-au suprapus
la margini — laptele praf degresat e și lactat, și truc de patiserie; tahini e și
pastă de semințe, și condiment. Aplicația detectează intrările cu același nume,
păstrează varianta cu mai multe date de preț și îi adaugă rândurile de magazin
ale celeilalte. 512 intrări brute → 505 produse, fără să se piardă cercetare.

### Corecții de conținut găsite în cercetare

- **Salamul de Sibiu nu se face în Sibiu.** IGP-ul trimite la fabrica lui Filippo
  Dozzi din Sinaia; numele vine de la ruta de expediere. Semnalat în datele
  produsului.
- **Scandia Sibiu chiar e din Sibiu**, și conservele ei sunt cea mai bună mâncare
  gătită la borcan din retailul românesc: fasole cu ciolan 400 g = 38 g proteină.
- **„Aviland” nu a putut fi confirmat** ca producător real de carne de pasăre din
  România și a fost eliminat; s-au folosit mărci verificate.
- **Greutatea scursă la conserve** — o cutie de ton de 160 g are ~104 g de ton.
  Tonul în ulei declară adesea valorile *cu tot cu ulei* (403 kcal/100 g față de
  ~192 scurs). Toate conservele din atlas folosesc valorile scurse.
- **Produsele cu „Protein” pe ambalaj** ocupă pozițiile 32–44 din 56 în
  clasamentul de preț pe lactate. Un iaurt „Protein” cu 8 g/100 g e sub un skyr
  obișnuit cu 11 g/100 g.
- **Laptele praf degresat** — 36 g proteină/100 g, ~11–13 lei per 100 g de
  proteină, complet, stă pe raftul de patiserie unde nu-l caută nimeni.
- **Datele de nutriție KFC și McDonald's România** au fost extrase din documentele
  oficiale, nu estimate.

### Bug-uri prinse înainte de livrare

- `.pf-rail-scrim` era copil direct al grilei principale și, pe desktop, ocupa a
  doua coloană — împingea toată scena pe rândul următor, la lățimea coloanei de
  filtre. Pagina se încărca corect și era complet invizibilă. Prins printr-o
  măsurare de geometrie în Chrome headless, nu prin citirea codului.
- Filtrele implicite ascundeau 13 produse (vezi scala de timp mai sus).
- Un agent de cercetare a raportat singur că a codificat inițial `priceRon` ca
  preț pe kilogram în loc de preț pe pachet, pe 189 de rânduri de magazin — ceea
  ce ar fi denaturat bara de preț de până la 10 ori — și a corectat toate
  rândurile.

### Verificare

- Toate cele 505 produse trec fiecare cale de randare: card, rând de tabel, cele
  șase file ale dosarului, donut, radar, dispersie, cele zece clasamente, coloana
  de filtre, toate cele zece sortări și comparația. **Zero erori.**
- Toate fișierele JS trec `node --check`.
- Randare verificată vizual în Chrome headless, în vizualizările carduri,
  clasamente și hartă.

---

## Idei pentru versiuni viitoare

- Urmărirea prețurilor în timp, ca să se vadă inflația pe gram de proteină
- Import/export al meselor salvate ca fișier
- Mai multe intrări „gătite” pentru leguminoase și cereale, ca perechea
  uscat/fiert să fie completă peste tot
- Sezonalitate pentru produsele din piață
- Un mod „ce am în frigider” care compune mese din ce bifezi
