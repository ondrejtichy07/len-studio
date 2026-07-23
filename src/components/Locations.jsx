import { locations, contact } from '../content/contact.js'
import berounPhoto from '../assets/beroun.jpg'
import zahoranyPhoto from '../assets/zahorany.jpeg'
import './Locations.css'

const photos = {
  beroun: berounPhoto,
  domazlice: zahoranyPhoto,
}

export default function Locations() {
  return (
    <section id="lokace">
      <p className="section-label">Kde mne najdete</p>
      <h2 className="section-title">Provozovny</h2>
      <p className="section-subtitle">
        Ošetřuji na dvou místech - v Berouně a na Domažlicku. Termín si vyberte podle toho,
        co vám vyhovuje víc.
      </p>
      <br/>
      <p className="section-subtitle">
        Provoz na objednání - přesný čas rezervujte přes Reservio nebo napište na WhatsApp.
      </p>

      <div className="locations__grid">
        {locations.map((loc) => (
          <div key={loc.key} className="location-card">
            {photos[loc.key] && (
              <div className={`location-card__photo location-card__photo--${loc.key}`}>
                <img src={photos[loc.key]} alt={loc.name} loading="lazy" />
              </div>
            )}

            <div className="location-card__header">
              <h3 className="location-card__title">{loc.name}</h3>
              <p className="location-card__address">{loc.address}</p>
            </div>

            <div className="location-card__days">
              <p className="location-card__days-label">Dny provozu</p>
              <ul className="location-card__days-list">
                {loc.days.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            {loc.hasFullAddress ? (
              <div className="location-card__map">
                <iframe
                  title={`Mapa - ${loc.name}`}
                  src={
                    loc.coords
                      ? `https://maps.google.com/maps?q=${loc.coords.lat},${loc.coords.lng}&z=16&output=embed`
                      : `https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <p className="location-card__note">
                Přesnou adresu upřesníme při rezervaci termínu.
              </p>
            )}

            {loc.mapsUrl && (
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-card__maps-link"
              >
                Otevřít v Google Mapách →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
