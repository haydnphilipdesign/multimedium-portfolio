import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Featured from './sections/Featured';
import Gallery from './sections/Gallery';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import MemphisShapes from './components/MemphisShapes';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Memphis Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0 memphis-bg" />
      
      {/* Floating Memphis Shapes */}
      <MemphisShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Featured />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
