import React from 'react';

const projects = [
  {
    title: 'Tienda Online',
    image: '/Portfolio/tienda-online.png',
    description: 'E-commerce moderno con carrito de compras, gestión de productos y panel de administración. Ideal para negocios que quieren vender online de forma profesional.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Marcos-Bntz/Tienda-Online'
  },
  {
    title: 'Florería Página Web',
    image: '/Portfolio/floreria.png',
    description: 'Sitio web profesional para una florería, con catálogo de productos, formulario de contacto y diseño atractivo para captar clientes.',
    tech: ['Next.js', 'TailwindCSS'],
    github: 'https://github.com/Marcos-Bntz/floreria-paginaWeb'
  },
  {
    title: 'Aula Virtual',
    image: '/Portfolio/aula-virtual.png',
    description: 'Plataforma educativa para clases online, recursos, seguimiento de estudiantes y comunicación entre profesores y alumnos.',
    tech: ['React', 'Firebase'],
    github: 'https://github.com/Marcos-Bntz/Aula-Virtual/tree/main/project'
  }
];

const Projects: React.FC = () => (
  <section id="proyectos" className="max-w-6xl mx-auto py-20 px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-12 text-center">Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
            <h3 className="text-2xl font-bold text-lime-400 mb-2">{project.title}</h3>
            <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="bg-slate-700 text-lime-300 px-3 py-1 rounded-full text-xs">{t}</span>
                    ))}
                  </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline">GitHub</a>
                </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );

export default Projects;