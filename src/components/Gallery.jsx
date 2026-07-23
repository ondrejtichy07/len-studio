import { useState } from 'react'
import './Gallery.css'

// Automaticky načte všechny fotky ze složky assets/gallery (gallery-01.jpg, gallery-02.jpg, ...)
const modules = import.meta.glob('../assets/gallery/*.jpg', { eager: true, import: 'default' })
const images = Object.keys(modules).sort().map((path) => modules[path])

const altTexts = [
  'Kosmetické ošetření pleti', 'Bukální masáž', 'Atmosféra LEN studia', 'Interiér ošetřovny LEN studio',
  'GreenPeel odměrky', 'Detail ošetřovny', 'Příprava ošetření GreenPeel', 'Aplikace ošetření GreenPeel',
  'Chladicí masáž obličeje', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Produkty Dr. med. Christine Schrammek',
  'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti',
  'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kristýna Lenkerová u vchodu do LEN studia',
  'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti', 'Kosmetické ošetření pleti',
  'Atmosféra LEN studia', 'Produkty Dr. med. Christine Schrammek', 'GreenPeel odměrky', 'Atmosféra LEN studia',
  'LEN studio Domažlice', 'LEN studio Domažlice', 'LEN studio Domažlice', 'LEN studio Domažlice',
  'LEN studio Domažlice', 'Ošetření v LEN studiu Domažlice', 'LEN studio Domažlice', 'LEN studio Domažlice',
  'LEN studio Domažlice', 'LEN studio Domažlice', 'LEN studio Domažlice', 'LEN studio Domažlice',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Kosmetické ošetření pleti', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Produkty Dr. med. Christine Schrammek',
  'GreenPeel odměrky', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
  'Ošetření v LEN studiu', 'Ošetření v LEN studiu', 'Ošetření v LEN studiu',
]

const photos = images.map((src, i) => ({ src, alt: altTexts[i] || 'Fotka z LEN studia' }))

const PAGE_SIZE = 12

export default function Gallery() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(photos.length / PAGE_SIZE)
  const current = photos.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goToPage = (p) => {
    setPage(p)
    document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="galerie">
      <h2 className="section-title">Galerie</h2>

      <div className="gallery__grid">
        {current.map((item, i) => (
          <div key={`${page}-${i}`} className="gallery__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="gallery__pagination">
          <button
            className="gallery__page-btn gallery__page-btn--nav"
            onClick={() => goToPage(Math.max(0, page - 1))}
            disabled={page === 0}
            aria-label="Předchozí strana"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`gallery__page-btn ${i === page ? 'gallery__page-btn--active' : ''}`}
              onClick={() => goToPage(i)}
              aria-current={i === page ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="gallery__page-btn gallery__page-btn--nav"
            onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            aria-label="Další strana"
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
