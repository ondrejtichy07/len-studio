import logo from '../assets/logo.png'
import { contact } from '../content/contact.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-badge">
            <img src={logo} alt="LEN studio" className="footer__logo" />
          </span>
        </div>        
        <p className="footer__copy">© {year} LEN studio – Kristýna Lenkerová. Všechna práva vyhrazena.</p>
        <p className="footer__dev">Web vytvořil <a href="mailto:ondrejtichy07@gmail.com" className="footer__dev-link">Ondřej Tichý</a></p>
      </div>
    </footer>
  )
}
