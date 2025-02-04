import Hero from './components/Hero'
import NewHereSection from './components/NewHereSection'
import YoungSection from './components/YoungSection'
import PastorsBlogSection from './components/PastorsBlogSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <NewHereSection />
      <YoungSection />
      <PastorsBlogSection />
      <Footer />
    </main>
  );
}
