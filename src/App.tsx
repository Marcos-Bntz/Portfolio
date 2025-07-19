import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingOpportunityButton from './components/FloatingOpportunityButton';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <div className="tv-static-bg" aria-hidden="true" />
      <div className="bg-slate-900 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Faq />
        <Contact />
        <Footer />
        <FloatingOpportunityButton />
      </div>
    </>
  );
}

export default App;