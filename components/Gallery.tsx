
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">Galeria Jpsalling</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black">Acompanhe nossas <br /> tendências diariamente</h2>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm max-w-xs ml-auto">
              Peças exclusivas e pronta entrega. Siga-nos no Instagram para não perder as novidades.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 h-[600px]">
          <div className="col-span-1 row-span-2">
            <img src={GALLERY_IMAGES[0]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
          <div className="col-span-2 row-span-1">
            <img src={GALLERY_IMAGES[1]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src={GALLERY_IMAGES[2]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={GALLERY_IMAGES[3]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={GALLERY_IMAGES[4]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
          <div className="col-span-2 row-span-1">
            <img src={GALLERY_IMAGES[5]} alt="Lifestyle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
          </div>
        </div>
        
        {/* Mobile secondary row */}
        <div className="grid grid-cols-2 gap-2 mt-2 md:hidden">
          <img src={GALLERY_IMAGES[6]} alt="Lifestyle" className="w-full h-40 object-cover" />
          <img src={GALLERY_IMAGES[7]} alt="Lifestyle" className="w-full h-40 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
