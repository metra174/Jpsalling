
import React from 'react';
import { INSTAGRAM_URL, GALLERY_IMAGES } from '../constants';

interface HeroProps {
  onPreviewImage: (url: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPreviewImage }) => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 cursor-zoom-in"
        onClick={() => onPreviewImage(GALLERY_IMAGES[0])}
      >
        <img 
          src={GALLERY_IMAGES[0]} 
          alt="Jpsalling Luxury Collection" 
          className="w-full h-full object-cover brightness-[0.6] scale-100 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 w-full text-white pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="h-[1px] w-12 bg-amber-500"></span>
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.4em]">Estilo Global em Luanda</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
            Estilo, <br />
            Presença & <br />
            <span className="text-amber-500 italic">Sofisticação.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-12 font-light max-w-2xl leading-relaxed drop-shadow-md">
            Explore nossa curadoria premium de marcas internacionais. 
            Zara, Mango e Moschino prontas para você brilhar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#novidades"
              className="bg-amber-600 text-white px-14 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center shadow-2xl active:scale-95"
            >
              Explorar Coleção
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-14 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center active:scale-95"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 right-10 hidden lg:block text-right">
        <div className="flex flex-col items-end border-r-4 border-amber-600 pr-6">
          <span className="text-4xl font-serif font-bold text-white leading-none">+10K</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2">Seguidores Fiel</span>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
