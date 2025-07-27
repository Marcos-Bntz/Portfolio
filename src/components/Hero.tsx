import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32 md:pb-0 pt-20 md:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Título grande a la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 flex flex-col items-center md:items-end"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase text-white text-center md:text-right leading-tight tracking-tight">
            Benitez<br />Marcos
          </h1>
        </motion.div>
        {/* Imagen centrada */}
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 flex flex-col items-center"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src="/Portfolio/profile.jpg"
            alt="Benítez Marcos"
            className="w-64 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-2xl border-4 border-slate-700"
            width={320}
            height={384}
            loading="eager"
          />
        </motion.div>
        {/* Subtítulo grande a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0"
          >
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-white text-center md:text-left leading-tight tracking-tight">
            Desarrollador<br />Web
          </h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <ArrowDown className="text-slate-400 mt-2" size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;