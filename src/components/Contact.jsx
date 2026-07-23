import { contact } from '../content/contact.js'
import { IconWhatsApp, IconInstagram, IconFacebook } from './icons.jsx'
import './Contact.css'

const items = [
  {
    Icon: IconWhatsApp,
    label: 'WhatsApp / Telefon',
    value: contact.phoneDisplay,
    href: contact.whatsappUrl,
    modifier: 'whatsapp',
  },
  {
    Icon: IconInstagram,
    label: 'Instagram',
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    modifier: 'instagram',
  },
  {
    Icon: IconFacebook,
    label: 'Facebook',
    value: 'LEN studio',
    href: contact.facebookUrl,
    modifier: 'facebook',
  },
]

export default function Contact() {
  return (
    <section id="kontakt" className="contact-section">
      <h2 className="section-title">Kontakt</h2>

      <div className="contact__wrap">
        <div className="contact__items">
          {items.map(({ Icon, label, value, href, modifier }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact__item contact__item--${modifier}`}
            >
              <span className="contact__item-icon"><Icon /></span>
              <span className="contact__item-text">
                <span className="contact__item-label">{label}</span>
                <span className="contact__item-value">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="contact__reservio">
          <p className="contact__reservio-title">Rezervace online</p>
          <a href={contact.reservioUrl} target="_blank" rel="noopener noreferrer" className="btn btn--rose">
            Otevřít Reservio →
          </a>
        </div>
      </div>
    </section>
  )
}
