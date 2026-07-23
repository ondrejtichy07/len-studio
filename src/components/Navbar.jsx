import { useState, useEffect } from 'react'
import logo from '../assets/logo-white.jpg'
import { contact } from '../content/contact.js'
import { IconWhatsApp, IconInstagram, IconFacebook } from './icons.jsx'
import './Navbar.css'

const links = [
  { href: '#o-mne', label: 'O mně' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#cenik', label: 'Ceník' },
  { href: '#lokace', label: 'Lokace' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">
        <span className="navbar__logo-badge">
          <img src={logo} alt="LEN studio" className="navbar__logo-img" />
        </span>
        <span className="navbar__logo-line2">LEN STUDIO · Kristýna Lenkerová</span>
      </a>

      <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="navbar__socials navbar__socials--mobile">
          <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="navbar__social navbar__social--whatsapp">
            <IconWhatsApp />
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="navbar__social navbar__social--instagram">
            <IconInstagram />
          </a>
          <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="navbar__social navbar__social--facebook">
            <IconFacebook />
          </a>
        </div>
        <a
          href={contact.reservioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta navbar__cta--mobile"
          onClick={() => setOpen(false)}
        >
          Rezervovat
        </a>
      </nav>

      <div className="navbar__right">
        <div className="navbar__socials navbar__socials--desktop">
          <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="navbar__social navbar__social--whatsapp">
            <IconWhatsApp />
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="navbar__social navbar__social--instagram">
            <IconInstagram />
          </a>
          <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="navbar__social navbar__social--facebook">
            <IconFacebook />
          </a>
        </div>
        <a
          href={contact.reservioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta navbar__cta--desktop"
        >
          Rezervovat
        </a>
        <button
          className="navbar__burger"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
