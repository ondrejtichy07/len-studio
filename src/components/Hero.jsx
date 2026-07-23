import heroPhoto from '../assets/gallery/gallery-06.jpg'
import { contact } from '../content/contact.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="uvod">
      <div className="hero__content">
        <p className="section-label">LEN studio · Kristýna Lenkerová</p>
        <h1 className="hero__title">
          Dělám takovou kosmetiku,<br />
          na kterou bych si <em>sama ráda zašla</em>.
        </h1>
        <p className="hero__text">
          GreenPeel, mezoterapie, laminace řas a obočí, bukální masáž i depilace -
          ošetření s německou kosmetikou Dr. med. Christine Schrammek, se kterou
          řešíme pigmentace, dehydrataci, vrásky i strie. V Berouně i na Domažlicku.
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">9+</span>
            <span className="hero__stat-label">let praxe</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">6</span>
            <span className="hero__stat-label">let se Schrammek kosmetikou</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2</span>
            <span className="hero__stat-label">provozovny - Beroun a Domažlice</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__blob hero__blob--green" />
        <div className="hero__blob hero__blob--rose" />
        <div className="hero__image-wrap">
          <img src={heroPhoto} alt="Kristýna Lenkerová při kosmetickém ošetření" className="hero__image" />
        </div>
      </div>
    </section>
  )
}
