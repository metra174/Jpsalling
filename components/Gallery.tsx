
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
            <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Lookbook Jpsalling</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight">Inspirações Reais para <br /> o seu Dia a Dia</h2>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-amber-600 pl-6 md:pl-0 md:pr-6">
            <p className="text-gray-400 text-sm max-w-[280px]">
              Cada peça é selecionada pensando na modernidade e no conforto da elite de Luanda.
            </p>
          </div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          {/* Item 1 */}
          <div className="col-span-1 row-span-2 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[1])}>
            <img src={GALLERY_IMAGES[1]} alt="Modern Look" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          {/* Item 2 */}
          <div className="col-span-2 row-span-1 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[2])}>
            <img src={GALLERY_IMAGES[2]} alt="Premium Detail" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>
          
          {/* Item 3 */}
          <div className="col-span-1 row-span-1 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[3])}>
            <img src={GALLERY_IMAGES[3]} alt="Urban Style" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>

          {/* Item 4 */}
          <div className="col-span-1 row-span-1 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[4])}>
            <img src={GALLERY_IMAGES[4]} alt="Luxury Fashion" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>

          {/* Item 5 */}
          <div className="col-span-1 row-span-1 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[5])}>
            <img src={GALLERY_IMAGES[5]} alt="Casual Chic" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>
          
          {/* Item 6 */}
          <div className="col-span-2 row-span-1 overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[9])}>
            <img src={GALLERY_IMAGES[9]} alt="Store Experience" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-black hover:text-amber-600 transition-colors"
          >
            Ver feed completo 
            <span className="w-12 h-[1px] bg-black group-hover:bg-amber-600 transition-all group-hover:w-20"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
