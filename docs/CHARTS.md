# Graficele — decizii de design

Toate graficele din atlas sunt **SVG scris de mână**, fără nicio bibliotecă și
fără niciun request de rețea. Acest document explică deciziile care nu se văd din
cod și de ce unele lucruri evidente au fost respinse.

Cod: `js/components/charts.js` și `css/09-charts.css`.

---

## 1. Regulile care se aplică peste tot

1. **O singură axă per grafic.** Nu există nicăieri un grafic cu două scale
   verticale. Două măsuri de mărimi diferite înseamnă două grafice.
2. **Culoarea categorică urmează entitatea, niciodată rangul.** Proteina e
   verde-teal în fiecare grafic, în fiecare tabel, în fiecare bară. Un filtru
   care schimbă numărul de serii nu recolorează supraviețuitorii.
3. **Culoarea nu e niciodată singurul purtător de identitate.** Fiecare grafic
   are legendă cu valorile scrise, etichete directe, sau ambele.
4. **Spațiu de 2 px între segmente alăturate**, în culoarea suprafeței, ca
   macro-urile vecine să rămână separabile fără să depindă de contrastul de
   nuanță.
5. **Marcaje subțiri, grilă și axe discrete.** Datele sunt cele care trebuie să
   iasă în evidență.
6. **Textul poartă culorile textului**, niciodată culoarea seriei.
7. **Fiecare grafic are o alternativă în tabel.**

---

## 2. Paleta a fost validată, nu aleasă din ochi

Cele patru culori de macronutrienți sunt singurele care codifică identitate în
grafice. Au fost trecute printr-un validator care verifică șase lucruri: banda de
luminozitate OKLCH, pragul de cromă, separarea perechilor alăturate pentru
daltonism (protanopie, deuteranopie, tritanopie), pragul pentru vederea normală
și contrastul față de suprafață.

| Slot | Temă întunecată | Temă deschisă |
|---|---|---|
| Proteină | `#0ea885` | `#0a7d63` |
| Carbohidrați | `#e56a12` | `#b5510c` |
| Grăsimi | `#e0429c` | `#b32b77` |
| Fibre | `#5b86e8` | `#3f63b8` |

**Ambele seturi trec toate cele șase verificări.** Cea mai slabă pereche alăturată
e carbohidrați↔proteină, la ΔE 13,1 (deuteranopie) — mult peste pragul de 8.

Prima variantă încercată (verdele `#4ade80` cu ambra `#fbbf24`) a picat: verde și
ambră sunt perechea clasică de confuzie pentru daltonismul roșu-verde, la ΔE 2,9.
Soluția a fost mutarea proteinei spre verde-teal, care are suficient albastru cât
să se separe de portocaliu.

Setul pentru tema deschisă **nu e o inversare automată** a celui întunecat — sunt
trepte separate din aceleași rampe, validate independent față de o suprafață
aproape albă.

### De ce categoriile NU sunt o paletă de date

Atlasul are opt categorii, și fiecare are o culoare. **Acele opt culori nu sunt o
paletă categorică de date** și nu sunt folosite ca atare în niciun grafic.

Motivul e măsurat: opt nuanțe nu pot trece pragul de separare pentru daltonism.
Oricum ar fi așezate, validatorul pică perechea roșu↔ambră la ΔE 2,9. Recomandarea
standard pentru acest caz e să reduci numărul de serii sau să faci grafice
separate — nu să livrezi culori pe care o parte din utilizatori nu le pot
distinge.

Așa că în atlas culoarea de categorie **colorează doar dunga din stânga a unui
card și pătratul cu emoji**, întotdeauna lângă numele categoriei scris cu litere.
Niciun grafic nu codifică categoria prin nuanță.

---

## 3. Donutul de macronutrienți

**Întrebarea:** de unde vin caloriile acestui produs?

- Patru sloturi fixe, întotdeauna în aceeași ordine: proteină → carbohidrați →
  grăsimi → fibre. Sloturile sub 0,4% sunt omise, nu comprimate.
- Spațiu de 3 px între arce, aplicat prin `stroke-dasharray`.
- În centru stă numărul care contează: **procentul din calorii din proteină**.
- Legenda de lângă scrie, pentru fiecare macro, **și gramele, și procentul**.
  Graficul e complet lizibil fără nicio percepție a culorii.
- Fiecare arc are un `<title>`, deci și cititoarele de ecran, și hover-ul nativ
  funcționează.

**De ce donut și nu bare?** Pentru că întrebarea e o parte-din-întreg cu patru
componente care însumează 100%. E exact cazul în care inelul e potrivit, și e
însoțit oricum de bara de macronutrienți și de tabelul complet.

---

## 4. Radarul de statistici

**Întrebarea:** care e forma acestui produs, pe cele șase axe?

- **O singură serie**, deci nu are legendă — titlul o numește.
- Fiecare dintre cele șase axe e **etichetată direct cu numele și valoarea ei**.
  Nu trebuie să numeri inele.
- Inele la 25 / 50 / 75 / 100.
- `aria-label` conține toate cele șase valori în text.

**Avertismentul onest despre radare:** forma depinde de ordinea axelor, iar aria
nu are semnificație reală. Radarul e aici pentru recunoașterea rapidă a unui
tipar („înalt peste tot în stânga, prăbușit la preț”), nu pentru citirea valorilor
exacte — pentru asta există barele, care sunt sursa de adevăr.

---

## 5. Graficul de dispersie proteină vs. calorii

**Cel mai util grafic din atlas.** Colțul din stânga-sus e „multă proteină,
puține calorii” — adică exact unde vrei să cumperi.

- Axa X: kcal la 100 g. Axa Y: g proteină la 100 g. O singură scală pe fiecare.
- Două linii de ghidaj diagonale, etichetate: **40% din calorii = proteină** și
  **20%**. Un produs deasupra liniei de 40% e dens în proteină, indiferent de
  cifra absolută. Astea transformă un nor de puncte într-o hartă cu regiuni.
- **Punctele NU sunt colorate pe categorie.** Folosesc o **rampă secvențială cu o
  singură nuanță** (teal), în care luminozitatea codifică puritatea proteinei —
  adică exact întrebarea graficului. Categoria vine din tooltip și din chips-urile
  de filtrare.
- Inel de 2 px în culoarea suprafeței în jurul fiecărui punct, ca punctele
  suprapuse să rămână numărabile.
- Fiecare punct are `<title>` cu numele, proteina, caloriile și puritatea.
- Un buton comută pe un tabel cu primele 40 de produse după puritate.

Graficul apare și în dosarul fiecărui produs, restrâns la categoria lui, ca să
vezi unde stă produsul față de concurenții lui direcți.

---

## 6. Histograma distribuției

O bandă de 26–30 de coloane care arată cum se distribuie conținutul de proteină
în selecția curentă. Coloanele au 2 px între ele. Fiecare are un tooltip cu
intervalul și numărul de produse.

Utilitatea reală: după ce aplici filtre, îți spune imediat dacă ai mai rămas cu
un set variat sau cu un grup îngust.

---

## 7. Barele de statistici — de ce arată ca într-un joc

Barele nu sunt o alegere estetică gratuită. Un `<progress>` obișnuit comunică
„procent completat”. Barele astea comunică „valoarea acestei caracteristici pe o
scală comparabilă” — o distincție care se citește mai bine cu segmente decât cu o
umplere continuă.

- Zece segmente, delimitate cu o crestătură în culoarea fundalului
- Umplere cu gradient, plus o reflexie care baleiază lent
- Eticheta și valoarea numerică sunt întotdeauna afișate lângă bară
- Tooltip pe fiecare bară, care explică ce măsoară și unde e plină

Cu `prefers-reduced-motion` toate animațiile dispar și barele apar direct în
starea finală. Cu `data-fx="off"` dispar doar efectele decorative.

### Insignele de rang

S / A / B / C / D / E, cu culori care se încălzesc pe măsură ce rangul urcă.
Rangul S are o margine animată — trebuie să pară un premiu, și e: trei produse
din 505.

Litera nu e niciodată singurul indiciu: tooltip-ul scrie scorul numeric și
componentele din care e calculat.

---

## 8. Accesibilitate

| Situație | Ce se întâmplă |
|---|---|
| `prefers-reduced-motion` | Toate animațiile devin instantanee |
| `prefers-contrast: more` | Marginile și textul secundar se întăresc |
| `forced-colors` | Segmentele de macro primesc **texturi diferite** (45°, 135°, orizontal, vertical), ca să rămână distinse fără culoare |
| Cititor de ecran | Fiecare grafic are `role="img"` și un `aria-label` cu toate valorile în text |
| Tipărire | Barele forțează `print-color-adjust: exact`, ca să nu iasă albe pe hârtie |

---

## 9. Ce a fost respins

**Grafice cu două axe verticale.** Sunt cea mai frecventă eroare din vizualizarea
de date: relația aparentă dintre cele două serii depinde complet de scalele alese
arbitrar. Nicăieri în atlas.

**Colorarea punctelor pe categorie în dispersie.** Explicat la §2 — opt nuanțe nu
pot fi separate corect.

**Curcubeu pentru date secvențiale.** Rampa de puritate e o singură nuanță,
deschis → închis. Un curcubeu ar sugera categorii acolo unde există o mărime
continuă.

**Etichete pe fiecare punct.** 505 etichete înseamnă zero etichete lizibile.
Identificarea se face prin hover și prin tabelul alternativ.

**O bibliotecă de grafice.** Ar fi însemnat un fișier extern, deci fie un CDN
(rețea, contrar principiului de a funcționa offline), fie ~200 KB de cod pentru
patru grafice pe care le scrii în 300 de linii.
