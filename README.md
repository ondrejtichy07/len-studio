# LEN studio – web

Web pro kosmetický salon LEN studio (Kristýna Lenkerová) – Beroun a Domažlice (Zahořany).

## Stack

- **React 18 + Vite** – frontend, čisté CSS moduly (žádný framework)
- Plán nasazení: GitHub → **Cloudflare Pages** a/nebo **WebGlobe**

## Vývoj

```bash
npm install
npm run dev        # dev server na localhost:5173
npm run build      # produkční build → dist/
npm run preview    # náhled produkčního buildu
```

## Struktura projektu

```
├── src/
│   ├── content/
│   │   ├── contact.js        # kontakty, odkazy, provozovny
│   │   └── pricelist.js      # ceník (ručně dle Reservio)
│   ├── components/
│   │   ├── Navbar, Hero, About, Services, Pricelist,
│   │   │   Gallery, Locations, Contact, Footer
│   ├── App.jsx
│   └── index.css
├── public/
│   ├── robots.txt, sitemap.xml, favicon.png
├── design-reference/          # moodboard obrázky od klientky (jen inspirace, mimo build)
└── CLAUDE.md                  # detailní poznámky k projektu
```

## Provozní informace

| | Lékařský dům Beroun | Domažlice (Zahořany) |
|---|---|---|
| **Adresa** | Plzeňská 1880, 266 01 Beroun 1 | Masarykova, Zahořany, Domažlice |
| **Dny** | Út, St, Čt | Po, Pá |
| **Kontakt** | +420 735 003 992 (WhatsApp) | stejný |
| **Rezervace** | [Reservio](https://lenstudio.reservio.com/len-studio/services) | stejný |
| **Instagram** | [@len.studio__](https://www.instagram.com/len.studio__/) | |
| **Facebook** | [LEN studio](https://www.facebook.com/people/LENstudio/100068406761064/) | |

Viz `CLAUDE.md` pro TODO a poznámky k budoucím úpravám (logo, fotky, doména).
