
import React from 'react';
import { GALLERY_IMAGES, INSTAGRAM_URL } from '../constants';

interface GalleryProps {
  onPreview: (url: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onPreview }) => {
  return (
    <section className="py-32 bg-white overflow-hidden" id="lookbook">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Galeria Premium Jpsalling</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight">Sofisticação <br /> sem Limites</h2>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-amber-600 pl-6 md:pl-0 md:pr-6">
            <p className="text-gray-400 text-sm max-w-[280px]">
              Explore o universo da Jpsalling através de nossa curadoria visual exclusiva.
            </p>
          </div>
        </div>

        {/* Masonry-style Grid Layout for all lifestyle images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden group cursor-zoom-in transition-all duration-700
                ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2 aspect-video md:aspect-auto' : 'aspect-square md:aspect-[3/4]'}
              `}
              onClick={() => onPreview(img)}
            >
              <img 
                src={img} 
                alt={`Lifestyle ${index}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border border-white/30 px-6 py-2">Ver Detalhes</span>
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-px h-20 bg-gray-100 mb-8"></div>
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            className="group flex flex-col items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-black hover:text-amber-600 transition-colors"
          >
            <span>Acompanhe as tendências no Instagram</span>
            <span className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-black group-hover:bg-amber-600 transition-all group-hover:w-20"></span>
              @jpsalling
              <span className="w-12 h-[1px] bg-black group-hover:bg-amber-600 transition-all group-hover:w-20"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
