
import React from 'react';
import { INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-serif font-bold tracking-tighter text-white">JPSALLING</span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-amber-500 mt-1">Premium Concept</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Especialistas em moda premium e fragrâncias exclusivas em Luanda. Estilo que define quem você é.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="p-2 border border-white/10 hover:border-amber-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-amber-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-amber-500">Menu</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#novidades" className="hover:text-white transition-colors">Novidades</a></li>
              <li><a href="#masculino" className="hover:text-white transition-colors">Masculino</a></li>
              <li><a href="#feminino" className="hover:text-white transition-colors">Feminino</a></li>
              <li><a href="#perfumaria" className="hover:text-white transition-colors">Perfumaria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-amber-500">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z"/></svg>
                </span>
                +244 945 329 335
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z"/></svg>
                </span>
                +244 951 963 740
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-amber-500">Horário</h4>
            <div className="space-y-2 text-sm text-gray-400 font-light">
              <p>Segunda - Sábado</p>
              <p className="text-white font-semibold">09:00 - 19:00</p>
              <p className="pt-2">Domingo</p>
              <p className="text-white font-semibold">10:00 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2024 JPSALLING. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Envios</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
