import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import FunSection from './components/FunSection';
import Travel from './components/Travel';
import Stay from './components/Stay';
import ThingsToDo from './components/ThingsToDo';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <main className="lg:pr-32">
        <Hero />
        <Schedule />
        <FunSection />
        <Travel />
        <Stay />
        <ThingsToDo />
        <FAQ />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;
