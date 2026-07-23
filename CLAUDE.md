# LEN studio – CLAUDE.md

## O projektu
Web pro kosmetický salon LEN studio (Kristýna Lenkerová). React + Vite, čisté CSS (žádný framework).
Vzniklo podle vzoru sourozeneckého projektu `../kadernictvi`. Plán nasazení: GitHub → Cloudflare Pages / WebGlobe.

## Stack
- React 18, Vite 8, @vitejs/plugin-react 6
- Čisté CSS moduly (jeden `.css` soubor per komponenta)
- Ikony: lucide-react
- Fonty: Playfair Display (nadpisy), Inter (text) – Google Fonts

## Struktura
```
src/
  App.jsx                  – sestavení stránek z komponent
  index.css                – globální proměnné a základní styly
  content/
    contact.js              – kontakty, odkazy (WhatsApp, IG, FB, Reservio), provozovny
    pricelist.js             – ceník (ručně přepsáno z Reservio, viz níže)
  components/
    Navbar                  – fixed navigace, scroll-aware, hamburger menu
    Hero                    – úvodní sekce se sloganem a statistikami
    About                   – "O mně" – bio Kristýny Lenkerové, GreenPeel badge
    Services                – 6 klíčových ošetření (karty s ikonami)
    Pricelist               – kompletní ceník dle kategorií
    Gallery                 – mřížka reálných fotek z provozu
    Locations               – dvě provozovny (Beroun, Domažlice/Zahořany) + mapa
    Contact                 – WhatsApp/telefon, Instagram, Facebook, Reservio CTA
    Footer                  – adresy, sociální sítě
  assets/
    logo.png                 – wordmark logo (dodáno klientkou)
    hero-photo.jpg            – fotka v Hero (Kristýna při ošetření)
    about-photo.jpg           – portrét v sekci "O mně"
    gallery/                  – 10 fotek z provozu (zmenšeno na max. 1200 px přes sips)
public/
  robots.txt, sitemap.xml
  favicon.png               – vygenerováno z wordmark loga (na bílém podkladu)
design-reference/           – moodboard fotky poslané uživatelem (NENÍ součástí buildu, jen inspirace)
```

## Provozní informace

### Provozovny
- **Lékařský dům Beroun** – Plzeňská 1880, 266 01 Beroun 1 – Út, St, Čt
- **Domažlice (Zahořany)** – Masarykova, Zahořany, Domažlice (bez č.p., doplnit až bude známé) – Po, Pá

### Kontakt
- Telefon / WhatsApp: +420 735 003 992
- Instagram: https://www.instagram.com/len.studio__/
- Facebook: https://www.facebook.com/people/LENstudio/100068406761064/
- Rezervace (Reservio): https://lenstudio.reservio.com/len-studio/services

### Logo
`src/assets/logo.png` – wordmark „LEN. studio" dodaný klientkou (bílé pozadí, bez průhlednosti).
V Navbaru se zobrazuje v přirozeném poměru stran (výška ~40px), ve Footeru (tmavé pozadí) je
obalený bílou kartičkou `.footer__logo-badge`, protože obrázek nemá průhledné pozadí.
Pokud dorazí verze s průhledným pozadím (ideálně SVG), badge ve Footeru půjde zjednodušit/odstranit.
Favicon (`public/favicon.png`) je logo dořezané na čtverec s bílým podkladem.

## Barevná paleta (`src/index.css`)
Zadaná klientkou (9 hex hodnot), aplikovaná napříč celou appkou přes CSS proměnné:
- `--green` (#337c60), `--green-dark` (#0d402c) – primární zelená, CTA/odkazy/akcenty
- `--rose` (#bd4492), `--rose-dark` (#ad1470) – primární růžová/magenta, sekundární CTA
- `--magenta` (#d12799), `--crimson` (#ae0a30), `--brown` (#956552), `--pink-soft` (#db77b9) – doplňkové akcenty (např. barevné karty v `Services.jsx`, badge „oblíbené")
- `--dark` (#332519) – základní barva textu (přímo z palety)
- `--gray` (#956552) – sekundární text (brown tón z palety)
- `--green-light`, `--rose-light`, `--border` – světlé odvozené odstíny (namíchané s bílou) pro pozadí sekcí a jemné okraje, protože paleta neobsahuje pastelové tóny
- `--cream` (#faf8f5) – zůstává jako neutrální podklad stránky (mimo zadanou paletu, nutné pro čitelnost)
- Brand ikony (WhatsApp zelená, Instagram gradient, Facebook modrá v `Contact.jsx`/`icons.jsx`) záměrně NEJSOU napojené na paletu – jde o rozpoznatelné barvy třetích stran

## Ceník
Reálná data stažená z Reservio (`src/content/pricelist.js`) ke dni vytvoření projektu.
**Ceny se můžou měnit** – Reservio nemá veřejné API pro automatický fetch (na rozdíl od Google Sheets
řešení v `../kadernictvi`), takže ceník je zatím nutné upravovat ručně v `pricelist.js`.
Pokud bude potřeba automatická synchronizace, zvážit stejný vzor jako v kadernictví (Google Sheet + fetch skript).

## Časté úpravy

### Přidat fotku do galerie
1. Ulož fotku do `src/assets/gallery/` (doporučeno zmenšit delší hranu na ~1200 px, např. `sips -Z 1200 in.jpg --out out.jpg`)
2. V `Gallery.jsx` přidej import a záznam do pole `photos`

### Vyměnit fotku v Hero / About
V `Hero.jsx` (`heroPhoto`) nebo `About.jsx` (`aboutPhoto`) over import a nahraď soubor v `src/assets/`.

### Doplnit číslo popisné k adrese Domažlice/Zahořany
Zatím je uvedena jen ulice (Masarykova, Zahořany, Domažlice) bez č.p. V `src/content/contact.js`
uprav `address`/`mapQuery` u klíče `domazlice`, jakmile bude znám přesný dům – mapa v sekci
Lokace se automaticky zpřesní. Nezapomeň doplnit i druhý `BeautySalon` blok v `index.html`
(structured data, `streetAddress`).

### Změnit ceny
Edituj pole v `src/content/pricelist.js`.

## CSS konvence
- Barvy přes CSS proměnné v `src/index.css`
- BEM pojmenování tříd (`.component__element--modifier`)
- Breakpoint pro mobil: `max-width: 768px`

## Nasazení
- Repo: `github.com/ondrejtichy07/len-studio` (SSH remote), push na `main` → automatický deploy
- Cloudflare Pages: build command `npm run build`, output `dist`, žádné env proměnné nejsou potřeba
- Doména: `len-studio.cz` (registrace WebGlobe, DNS/nameservery směřují na Cloudflare)

## TODO
- [ ] Doplnit číslo popisné k adrese Domažlice/Zahořany (Masarykova, zatím bez č.p.)
- [ ] Ověřit, že custom domain `len-studio.cz` je aktivní v Cloudflare Pages a má vystavené SSL
- [ ] Vytvořit `og-image.png` (1200×630) pro sdílení na sociálních sítích
- [ ] Zvážit napojení Google Business Profile / recenze (až budou k dispozici)
