import gallery01 from '../assets/gallery/gallery-01.jpg'
import gallery02 from '../assets/gallery/gallery-02.jpg'
import gallery03 from '../assets/gallery/gallery-03.jpg'
import gallery04 from '../assets/gallery/gallery-04.jpg'
import gallery05 from '../assets/gallery/gallery-05.jpg'
import gallery06 from '../assets/hero-photo.jpg'
import gallery07 from '../assets/gallery/gallery-07.jpg'
import gallery08 from '../assets/gallery/gallery-08.jpg'
import gallery09 from '../assets/gallery/gallery-09.jpg'
import gallery10 from '../assets/gallery/gallery-10.jpg'
import './Gallery.css'

const photos = [
  { src: gallery06, alt: 'Aplikace ošetření GreenPeel' },
  { src: gallery09, alt: 'Kosmetické ošetření pleti' },
  { src: gallery03, alt: 'GreenPeel odměrky' },
  { src: gallery07, alt: 'Chladicí masáž obličeje' },
  { src: gallery02, alt: 'Interiér ošetřovny LEN studio' },
  { src: gallery10, alt: 'Produkty Dr. med. Christine Schrammek' },
  { src: gallery05, alt: 'Příprava ošetření GreenPeel' },
  { src: gallery08, alt: 'Kosmetické ošetření pleti' },
  { src: gallery01, alt: 'Atmosféra LEN studia' },
  { src: gallery04, alt: 'Detail ošetřovny' },
]

export default function Gallery() {
  return (
    <section id="galerie">
      <p className="section-label">Má práce</p>
      <h2 className="section-title">Galerie</h2>

      <div className="gallery__grid">
        {photos.map((item, i) => (
          <div key={i} className="gallery__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
