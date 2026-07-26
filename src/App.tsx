import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

import BackgroundLines from './components/layout/BackgroundLines';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-black/50 relative">
      {/* Contoured SVG Lines Background */}
      <BackgroundLines />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
