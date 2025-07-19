import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mi' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'faq', label: 'Preguntas Frecuentes' },
];

const FloatingOpportunityButton: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Botón pill flotante */}
      {!open && (
        <button
          className="fixed top-6 left-1/2 -translate-x-1/2 flex items-center bg-slate-900/90 rounded-full px-4 py-2 shadow-lg z-[101] border border-slate-700/50 backdrop-blur-xl focus:outline-none"
          style={{ minWidth: 220 }}
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-lime-400 mr-2">
            <img
              src="/profile.jpg"
              alt="Benítez Marcos"
              className="w-full h-full object-cover"
              width={32}
              height={32}
              loading="eager"
            />
          </div>
          <span className="text-white text-base font-medium mr-2">Abierto a oportunidades</span>
          <span className="w-3 h-3 bg-lime-400 rounded-full inline-block mr-2" aria-label="Disponible" />
          <span className="bg-lime-400 rounded-full p-2 flex items-center justify-center">
            <Menu size={24} className="text-slate-900" />
          </span>
        </button>
      )}
      {/* Menú lateral animado */}
      {open && (
        <div className="fixed left-1/2 top-[72px] -translate-x-1/2 z-[102] flex flex-col items-center w-full max-w-[90vw]">
          <div className="relative bg-slate-900/95 rounded-2xl shadow-2xl w-80 max-w-full flex flex-col items-center p-6 animate-scale-in">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400 absolute -top-7 left-1/2 -translate-x-1/2">
              <img
                src="/profile.jpg"
                alt="Benítez Marcos"
                className="w-full h-full object-cover"
                width={56}
                height={56}
                loading="eager"
              />
            </div>
            <button
              className="absolute top-4 right-4 bg-lime-400 rounded-full p-2 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={28} className="text-slate-900" />
            </button>
            <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-white text-lg font-medium focus:outline-none focus:underline"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contacto')}
                className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full text-lg font-semibold mt-2 focus:outline-none hover:bg-lime-300 transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingOpportunityButton; 