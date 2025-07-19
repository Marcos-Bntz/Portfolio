import React from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xqalazkp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-transparent">
        {/* Imagen y círculo Hola! */}
        <div className="md:w-1/2 w-full flex flex-col items-center relative mb-8 md:mb-0">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Marcos Benítez"
              className="w-64 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-2xl border-4 border-slate-700"
              width={320}
              height={384}
              loading="eager"
            />
            <div className="absolute -left-16 bottom-8 md:-left-20 md:bottom-10">
              <div className="bg-lime-300 text-slate-900 font-semibold rounded-full w-24 h-24 flex items-center justify-center text-xl shadow-lg border-4 border-lime-400 select-none">
                ¡Hola!
              </div>
            </div>
          </div>
        </div>
        {/* Formulario */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-2 text-left">Trabajemos juntos</h2>
          <p className="text-slate-300 mb-8 text-left">Construyamos algo impactante juntos, ya sea su marca, su sitio web o su próxima gran idea.</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lime-400 font-semibold mb-1" htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 rounded-full bg-slate-800 text-white border-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div>
                <label className="block text-lime-400 font-semibold mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Tu correo"
                  className="w-full px-4 py-2 rounded-full bg-slate-800 text-white border-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-lime-400 font-semibold mb-1" htmlFor="service">¿Necesita servicio?</label>
              <select
                name="service"
                id="service"
                required
                className="w-full px-4 py-2 rounded-full bg-slate-800 text-white border-none focus:ring-2 focus:ring-lime-400"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Diseño UI/UX">Diseño UI/UX</option>
                <option value="Consultoría">Consultoría</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-lime-400 font-semibold mb-1" htmlFor="message">¿En qué puedo ayudarte?</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Hola me gustaría preguntar sobre..."
                className="w-full px-4 py-2 rounded-2xl bg-slate-800 text-white border-none focus:ring-2 focus:ring-lime-400"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-transparent border-2 border-lime-400 text-lime-300 font-bold py-3 rounded-full text-xl hover:bg-lime-400 hover:text-slate-900 transition-colors"
            >
              ENVIAR
            </button>
            {status === 'success' && (
              <div className="text-green-400 font-medium mt-2">¡Mensaje enviado con éxito!</div>
            )}
            {status === 'error' && (
              <div className="text-red-400 font-medium mt-2">Hubo un error al enviar el mensaje. Intenta nuevamente.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;