import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="w-full bg-lime-300 text-slate-900 pt-8 pb-4 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Email */}
        <div className="flex-1 mb-4 md:mb-0">
          <span className="font-semibold">Email :</span>
          <span className="ml-2 font-bold">marcosbportfolio@gmail.com</span>
        </div>
        {/* Teléfono */}
        <div className="flex-1 mb-4 md:mb-0 text-left md:text-center">
          <span className="font-semibold">Celular :</span>
          <span className="ml-2 font-bold">+54 3743419408</span>
        </div>
        {/* Social */}
        <div className="flex-1 flex items-center gap-2 justify-start md:justify-end">
          <span className="font-semibold">Social :</span>
          <a href="https://github.com/Marcos-Bntz" target="_blank" rel="noopener noreferrer" className="hover:text-black" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/marcosdavidbenitez/" target="_blank" rel="noopener noreferrer" className="hover:text-black" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <hr className="my-4 border-slate-400/40" />
      <div className="flex flex-col md:flex-row items-center justify-between text-slate-800 text-xs">
        <div className="mb-2 md:mb-0">© Copyright 2025. All Rights Reserved by Marcos Benítez</div>
      </div>
    </div>
  </footer>
);

export default Footer;