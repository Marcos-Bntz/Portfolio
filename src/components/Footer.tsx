import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="w-full bg-slate-900 text-white pt-8 pb-4 px-4 rounded-t-2xl mt-8">
    <div className="max-w-md mx-auto flex flex-col items-center">
      {/* Contacto */}
      <div className="w-full flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span className="font-semibold">marcosbportfolio@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span className="font-semibold">+54 3743419408</span>
        </div>
      </div>
      {/* Redes sociales */}
      <div className="flex justify-center gap-8 mt-4">
        <a href="https://github.com/Marcos-Bntz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" tabIndex={0} className="hover:text-lime-400 focus:text-lime-400 transition">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/marcosdavidbenitez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" tabIndex={0} className="hover:text-lime-400 focus:text-lime-400 transition">
          <Linkedin size={28} />
        </a>
      </div>
      {/* Copyright */}
      <div className="text-xs text-slate-400 text-center mt-4">
        © Copyright 2025. All Rights Reserved by Marcos Benítez
      </div>
    </div>
  </footer>
);

export default Footer;