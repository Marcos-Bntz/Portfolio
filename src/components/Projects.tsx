import React from 'react';

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

const projects = [
  {
    title: 'Tienda Online',
    image: '/Portfolio/tienda-online.png',
    description: 'E-commerce moderno con carrito de compras, gestión de productos y panel de administración. Ideal para negocios que quieren vender online de forma profesional.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Marcos-Bntz/Tienda-Online',
    demo: 'https://marcos-bntz.github.io/Tienda-Online/'
  },
  {
    title: 'Florería Página Web',
    image: '/Portfolio/floreria.png',
    description: 'Sitio web profesional para una florería, con catálogo de productos, formulario de contacto y diseño atractivo para captar clientes.',
    tech: ['Next.js', 'TailwindCSS'],
    github: 'https://github.com/Marcos-Bntz/floreria-paginaWeb',
    demo: '' // Agregar la url cuando esté disponible
  },
  {
    title: 'Aula Virtual',
    image: '/Portfolio/aula-virtual.png',
    description: 'Plataforma educativa para clases online, recursos, seguimiento de estudiantes y comunicación entre profesores y alumnos.',
    tech: ['React', 'Firebase'],
    github: 'https://github.com/Marcos-Bntz/Aula-Virtual/tree/main/project',
    demo: '' // Agregar la url cuando esté disponible
  }
];

const Projects: React.FC = () => (
  <section id="proyectos" className="max-w-6xl mx-auto py-20 px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-12 text-center">Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-lime-400 mb-2">{project.title}</h3>
            <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="bg-slate-700 text-lime-300 px-3 py-1 rounded-full text-xs">{t}</span>
                    ))}
                  </div>
            <div className="flex gap-3 mt-auto">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-lime-500 text-slate-900 font-semibold rounded-lg shadow hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300 transition-colors text-sm md:text-base"
                  aria-label={`Ver demo de ${project.title}`}
                  tabIndex={0}
                >
                  Ver Demo...
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-slate-700 text-lime-400 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-300 transition-colors"
                aria-label={`Ver código en GitHub de ${project.title}`}
                tabIndex={0}
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
                </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );

export default Projects;