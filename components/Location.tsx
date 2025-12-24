
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em]">Onde Estamos</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">Visite Nossa Loja</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="group relative overflow-hidden bg-gray-50 p-8 md:p-12 transition-all hover:bg-black hover:text-white cursor-default">
            <div className="absolute top-0 right-0 p-8 text-gray-200 group-hover:text-amber-600/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Ponto 1</h3>
              <p className="text-lg mb-2 group-hover:text-amber-400 transition-colors">Av. Revolução de Outubro</p>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-6 font-light">
                Antigo Prédio da Panela de Barro, Luanda, Angola.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver no Mapa 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gray-50 p-8 md:p-12 transition-all hover:bg-black hover:text-white cursor-default">
            <div className="absolute top-0 right-0 p-8 text-gray-200 group-hover:text-amber-600/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Ponto 2</h3>
              <p className="text-lg mb-2 group-hover:text-amber-400 transition-colors">Av. Brasil</p>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors mb-6 font-light">
                Prédio da Samirana, Luanda, Angola.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver no Mapa 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
