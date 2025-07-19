import React from 'react';
import { motion } from 'framer-motion';
import FloatingOpportunityButton from './FloatingOpportunityButton';

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);
  const [showPill, setShowPill] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 60) {
        setShowNav(true);
        setShowPill(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(false);
        setShowPill(true);
      } else {
        setShowNav(false);
        setShowPill(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar visible solo en el inicio */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="z-[100] fixed top-0 left-0 right-0 flex justify-center px-2 mb-8"
      >
        <div className="flex items-center bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-2 sm:px-6 py-2 sm:py-3 mt-4 shadow-lg w-full max-w-2xl overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
          {/* Profile Image */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-lime-400 flex-shrink-0">
              <img 
                src="./profile.jpg" 
                alt="Benítez Marcos" 
                className="w-full h-full object-cover"
                width="40"
                height="40"
                loading="eager"
              />
            </div>
          </div>
          {/* Navigation Menu */}
          <div className="flex items-center space-x-4 sm:space-x-8 ml-2 sm:ml-6 text-xs sm:text-sm min-w-0">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Contacto
            </button>
          </div>
        </div>
      </motion.nav>
      {/* Pill flotante solo cuando showPill es true */}
      {showPill && <FloatingOpportunityButton />}
    </>
  );
};

export default Navbar;