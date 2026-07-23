import { pricelist } from '../content/pricelist.js'
import { contact } from '../content/contact.js'
import './Pricelist.css'

export default function Pricelist() {
  return (
    <section id="cenik" className="pricelist-section">
      <h2 className="section-title">Ceník</h2>
      <p className="section-subtitle">
        Aktuální ceník. Přesný výběr ošetření a termín si zarezervujete online přes Reservio.
      </p>

      <div className="pricelist__wrap">
        {pricelist.map((cat) => (
          <div key={cat.title} className="pricelist__category">
            <h3 className="pricelist__cat-title">{cat.title}</h3>
            <ul className="pricelist__list">
              {cat.items.map((item) => (
                <li key={item.name} className="pricelist__item">
                  <span className="pricelist__item-name">{item.name}</span>
                  <span className="pricelist__item-dots" aria-hidden="true" />
                  <span className="pricelist__item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="pricelist__note">
        Ceny jsou orientační a mohou se lišit dle rozsahu ošetření - přesnou cenu vždy potvrdíme
        před zahájením. Aktuální nabídku a volné termíny najdete na Reservio.
      </p>
    </section>
  )
}
