import React from 'react';

const faqs = [
  {
    question: '¿QUÉ SERVICIOS OFRECES?',
    answer:
      'Estoy empezando a trabajar en diseño UI/UX, branding, diseño web y desarrollo. Ya sea que necesites un sitio web completo, una identidad visual o una consulta de diseño, estoy aquí para ayudarte a hacer realidad tus ideas.',
  },
  {
    question: '¿CÓMO FUNCIONA EL PROCESO DE DISEÑO?',
    answer:
      'El proceso inicia con una reunión para entender tus necesidades, luego presento propuestas y, tras tu feedback, desarrollo la solución final. Todo el proceso es colaborativo y transparente.',
  },
  {
    question: '¿CUÁNTO TIEMPO SUELE DURAR UN PROYECTO?',
    answer:
      'Depende del alcance, pero un proyecto web típico puede durar entre 2 y 6 semanas. Siempre acordamos plazos realistas y te mantengo informado del progreso.',
  },
  {
    question: '¿QUÉ NECESITO PROPORCIONAR ANTES DE INICIAR UN PROYECTO?',
    answer:
      'Necesito tus objetivos, referencias visuales si tienes, y cualquier contenido relevante (textos, imágenes, etc). Si no tienes todo, te ayudo a definirlo.',
  },
  {
    question: '¿OFRECES REVISIONES?',
    answer:
      'Sí, incluyo revisiones en todos los proyectos para asegurarme de que el resultado final cumpla tus expectativas.',
  },
  {
    question: '¿CÓMO EMPIEZO?',
    answer:
      'Simplemente contáctame a través del formulario o por email y agendamos una llamada para conocernos y hablar de tu proyecto.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Título grande a la izquierda */}
        <div className="md:w-1/3 flex-shrink-0">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight text-left md:text-left mb-4 md:mb-0 leading-tight">
            Preguntas<br />Frecuentes
          </h2>
        </div>
        {/* Preguntas a la derecha */}
        <div className="md:w-2/3 w-full">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-600 py-4">
              <button
                className={`flex items-center w-full text-left group focus:outline-none transition-colors ${openIndex === idx ? 'text-lime-400' : 'text-white'}`}
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-bold text-lg md:text-xl mr-4 select-none">
                  {idx + 1}. {faq.question}
                </span>
                <span className={`ml-auto transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                aria-hidden={openIndex !== idx}
              >
                <p className="text-slate-300 text-base md:text-lg mt-2 border-l-4 border-lime-400 pl-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 