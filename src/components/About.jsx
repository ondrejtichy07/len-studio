import aboutPhoto from '../assets/about-photo.jpg'
import './About.css'

const concerns = ['Pigmentace', 'Dehydratace', 'Povadlá a unavená pleť', 'Vrásky', 'Strie']

export default function About() {
  return (
    <section id="o-mne" className="about">
      <div className="about__visual">
        <div className="about__frame">
          <img src={aboutPhoto} alt="Kristýna Lenkerová" className="about__photo" />
        </div>
        <div className="about__badge">
          <span className="about__badge-title">GREEN PEEL</span>
          <span className="about__badge-text">moje nejoblíbenější ošetření</span>
        </div>
      </div>

      <div className="about__content">
        <p className="section-label">Kdo jsem</p>
        <h2 className="section-title">Kristýna Lenkerová</h2>

        <p className="about__text">
          9 let praxe, 6 let s německou kosmetikou <strong>DR. MED. CHRISTINE SCHRAMMEK</strong>{' '}
          (<a href="https://www.instagram.com/schrammekczech/" target="_blank" rel="noopener noreferrer">@schrammekczech</a>).
          Je pro mě důležité, aby kosmetika dokázala obsáhnout a vyřešit veškeré problémy pleti
          a byla příjemná i Vám během domácí péče, která je nedílnou součástí, pokud se rozhodnete
          zlepšit její stav.
        </p>

        <p className="about__text">
          Během ošetření je mým cílem, aby si každá z vás odpočinula a uvědomila si, že věnovat si
          čas pro sebe je v dnešní době luxus, ale také nutnost. Proto si vážím toho, že se ke mně
          po letech stále vracíte a dáváte mi zpět spoustu energie k tomu, abych i v této době mohla
          dělat to, co mě opravdu baví.
        </p>

        <p className="about__label">Společně řešíme</p>
        <div className="about__tags">
          {concerns.map((c) => (
            <span key={c} className="about__tag">{c}</span>
          ))}
        </div>

        <p className="about__text about__text--last">
          Mimo kosmetického ošetření nabízím i <strong>mezoterapii</strong>, <strong>bukální masáž</strong>,{' '}
          <strong>depilace</strong> celého těla včetně brazilské a <strong>laminaci obočí a řas</strong>{' '}
          (Brow Lamination / Lash Filler). A moje nejoblíbenější ošetření - <strong>GREEN PEEL</strong>,
          biologické, přírodní peelingové ošetření k okamžité obnově pleti.
        </p>
      </div>
    </section>
  )
}
