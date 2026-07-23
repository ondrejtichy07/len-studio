import { Leaf, Sparkles, Droplet, Smile, Eye, Flower2 } from 'lucide-react'
import './Services.css'

const services = [
  {
    Icon: Leaf,
    title: 'GREEN PEEL',
    desc: 'Biologické, přírodní peelingové ošetření k okamžité obnově pleti.',
    bg: '#e0ebe7',
    fg: '#337c60',
    dash: '#ad1470',
    badge: 'oblíbené',
  },
  {
    Icon: Sparkles,
    title: 'Kosmetika se Schrammek',
    desc: 'Pigmentace, dehydratace, vrásky, strie - s německou kosmetikou Dr. med. Christine Schrammek.',
    bg: '#efe8e5',
    fg: '#956552',
    dash: '#337c60',
  },
  {
    Icon: Droplet,
    title: 'Mezoterapie',
    desc: 'Výživa a regenerace pleti pomocí aktivních látek zavedených mikroinjekcemi.',
    bg: '#f9e5f3',
    fg: '#d12799',
    dash: '#0d402c',
  },
  {
    Icon: Smile,
    title: 'Bukální masáž',
    desc: 'Masáž obličeje zevnitř i zvenku pro přirozený liftingový efekt.',
    bg: '#f7e6ea',
    fg: '#ae0a30',
    dash: '#337c60',
  },
  {
    Icon: Eye,
    title: 'Laminace řas & obočí',
    desc: 'Brow lamination a lash filler pro výraznější, upravený pohled.',
    bg: '#f5e3ef',
    fg: '#bd4492',
    dash: '#0d402c',
  },
  {
    Icon: Flower2,
    title: 'Depilace, vč. brazilky',
    desc: 'Depilace celého těla včetně brazilské - hladká pokožka nadlouho.',
    bg: '#f8e4f1',
    fg: '#ad1470',
    dash: '#337c60',
  },
]

export default function Services() {
  return (
    <section id="sluzby">
      <p className="section-label">Co nabízím</p>
      <h2 className="section-title">Mé služby</h2>
      <p className="section-subtitle">
        Kompletní ošetření pleti od konzultace po domácí péči - přizpůsobené vašim potřebám.
      </p>

      <div className="services__grid">
        {services.map(({ Icon, title, desc, bg, fg, dash, badge }) => (
          <div key={title} className="service-card" style={{ background: bg }}>
            {badge && <span className="service-card__badge">{badge}</span>}
            <span className="service-card__icon" style={{ color: fg }} aria-hidden="true">
              <Icon strokeWidth={1.5} />
            </span>
            <span className="service-card__dash" style={{ background: dash }} aria-hidden="true" />
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
