import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'DISEÑO DE UI/UX',
    content: 'Prototipado, wireframes, diseño visual y experiencia de usuario usando Figma, Framer y herramientas modernas.'
  },
  {
    title: 'GRAPHIC DESIGN',
    content: 'Creación de identidades visuales, branding, piezas gráficas y recursos para web y redes sociales.'
  },
  {
    title: 'DISEÑO WEB',
    content: 'Desarrollo de sitios web modernos, responsivos y optimizados usando React, Next.js, WordPress y Webflow.'
  }
];

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto py-20 px-4">
      {/* Sección Sobre mí */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight text-left mb-6 leading-tight">
          Sobre mí
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl">
          ¡Hola! Soy Marcos Benítez, desarrollador web con experiencia en HTML, CSS y JavaScript. Aunque soy junior y estoy empezando a trabajar con librerías modernas como React y TailwindCSS, tengo muchas ganas de aprender y crecer en el mundo del desarrollo. Me gusta crear sitios web que no solo se vean bien, sino que también funcionen de verdad y aporten valor a las personas.
        </p>
      </div>
      {/* Sección Cosas que se hacer */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Columna izquierda */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight text-left mb-6 leading-tight">
            Habilidades
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8">
            Como desarrollador web freelance. Me apasiona crear sitios modernos que no solo se vean bien, sino que también funcionen de verdad.  Uso herramientas como Figma, Webflow, Framer, WordPress y algo de magia con IA para llevar tus ideas al siguiente nivel.
          </p>
          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="border-b border-slate-600 py-2">
                <button
                  className={`flex items-center w-full text-left group focus:outline-none transition-colors ${openIndex === idx ? 'text-emerald-400' : 'text-white'} font-extrabold text-lg md:text-2xl tracking-wide`}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`skill-panel-${idx}`}
                >
                  <span className="mr-4 select-none">{idx + 1}. {skill.title}</span>
                  <span className={`ml-auto transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </button>
                <div
                  id={`skill-panel-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                  aria-hidden={openIndex !== idx}
                >
                  <p className="text-slate-300 text-base md:text-lg mt-2 border-l-4 border-emerald-400 pl-4">
                    {skill.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Columna derecha: Imagen */}
        <div className="md:w-1/2 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-400/30 w-72 h-96 md:w-96 md:h-[420px] rotate-6"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img
              src="/Portfolio/pc.jpg"
              alt="Cosas que se hacer"
              className="object-cover w-full h-full"
              width={384}
              height={420}
              loading="eager"
            />
            {/* Floating accent */}
            <div className="absolute top-1/2 -right-4 w-5 h-5 bg-emerald-400 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;