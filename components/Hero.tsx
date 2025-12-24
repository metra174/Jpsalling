
import React from 'react';
import { INSTAGRAM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] md:h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/yHBWTmv.jpg" 
          alt="Jpsalling Hero" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 w-full text-white mt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 backdrop-blur-md text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 mb-8 rounded-full">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
            Marcas Premium Originais
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.05] drop-shadow-2xl">
            Estilo, Presença e <br />
            <span className="text-amber-500 italic">Sofisticação</span> <br />
            em Luanda.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-xl leading-relaxed">
            Explore nossa coleção exclusiva de roupas, calçados e fragrâncias premium das marcas mais desejadas do mundo. Zara, Mango e Moschino ao seu alcance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#novidades"
              className="bg-white text-black px-12 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-amber-600 hover:text-white transition-all text-center shadow-xl hover:shadow-amber-600/20"
            >
              Ver Coleção
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/80 backdrop-blur-sm text-white px-12 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all text-center"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="absolute bottom-12 left-4 md:left-10 z-10 hidden sm:flex items-center gap-6">
        <div className="flex -space-x-4">
          {[1,2,3,4,5].map(i => (
            <img 
              key={i} 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 123}`} 
              className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 p-0.5" 
              alt="User"
            />
          ))}
        </div>
        <div className="text-white">
          <p className="text-sm font-bold leading-tight">Mais de 10.000</p>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">Seguidores no Instagram</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
