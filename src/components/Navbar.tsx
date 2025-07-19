import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, HelpCircle, Mail, Menu, X } from 'lucide-react';
import FloatingOpportunityButton from './FloatingOpportunityButton';

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);
  const [showPill, setShowPill] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
    <motion.nav
      initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="z-[100] fixed top-0 left-0 right-0 flex justify-center px-2 mb-8"
    >
        <div className="flex items-center bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 sm:px-8 py-3 sm:py-4 mt-4 shadow-lg w-full max-w-3xl">
        {/* Profile Image */}
        <div className="flex items-center space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-lime-400 flex-shrink-0">
            <img 
                src="/Portfolio/profile.jpg" 
              alt="Benítez Marcos" 
              className="w-full h-full object-cover"
                width="48"
                height="48"
                loading="eager"
            />
          </div>
        </div>
        
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-6 text-base">
          <button 
            onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-700/50"
          >
              <Home size={18} />
              <span>Inicio</span>
          </button>
          <button 
            onClick={() => scrollToSection('sobre-mi')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-700/50"
          >
              <User size={18} />
              <span>Sobre mí</span>
          </button>
          <button 
            onClick={() => scrollToSection('proyectos')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-700/50"
          >
              <FolderOpen size={18} />
              <span>Proyectos</span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-700/50"
            >
              <HelpCircle size={18} />
              <span>FAQ</span>
          </button>
            <button
            onClick={() => scrollToSection('contacto')}
              className="flex items-center space-x-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-medium hover:bg-slate-100 transition-colors"
          >
              <Mail size={18} />
              <span>Contacto</span>
            </button>
        </div>

          {/* Mobile Navigation Icons */}
          <div className="md:hidden flex items-center space-x-3 ml-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="p-2.5 text-slate-300 hover:text-white transition-colors hover:bg-slate-700/50 rounded-lg"
              aria-label="Inicio"
            >
              <Home size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="p-2.5 text-slate-300 hover:text-white transition-colors hover:bg-slate-700/50 rounded-lg"
              aria-label="Sobre mí"
            >
              <User size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="p-2.5 text-slate-300 hover:text-white transition-colors hover:bg-slate-700/50 rounded-lg"
              aria-label="Proyectos"
            >
              <FolderOpen size={20} />
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="p-2.5 text-slate-300 hover:text-white transition-colors hover:bg-slate-700/50 rounded-lg"
              aria-label="FAQ"
            >
              <HelpCircle size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="p-2.5 bg-lime-400 text-slate-900 rounded-full hover:bg-lime-300 transition-colors"
              aria-label="Contacto"
            >
              <Mail size={20} />
            </button>
            
            {/* Mobile Menu Button */}
        <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white transition-colors hover:bg-slate-700/50 rounded-lg ml-2"
        >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-20 left-4 right-4 z-[99] bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-lg p-4"
        >
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors py-2"
            >
              <Home size={18} />
              <span>Inicio</span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors py-2"
            >
              <User size={18} />
              <span>Sobre mí</span>
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors py-2"
            >
              <FolderOpen size={18} />
              <span>Proyectos</span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors py-2"
            >
              <HelpCircle size={18} />
              <span>Preguntas Frecuentes</span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="flex items-center space-x-3 bg-lime-400 text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-lime-300 transition-colors"
            >
              <Mail size={18} />
              <span>Contacto</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Pill flotante solo cuando showPill es true */}
      {showPill && <FloatingOpportunityButton />}
    </>
  );
};

export default Navbar;