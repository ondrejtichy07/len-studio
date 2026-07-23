import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricelist from './components/Pricelist.jsx'
import Gallery from './components/Gallery.jsx'
import Locations from './components/Locations.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricelist />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
