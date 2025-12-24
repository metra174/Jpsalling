
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

interface AboutProps {
  onPreview: (url: string) => void;
}

const About: React.FC<AboutProps> = ({ onPreview }) => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><circle cx="10" cy="18" r="2"/><circle cx="21" cy="18" r="2"/><path d="M13 18h-1"/><path d="M10 6v12"/><path d="m14 6 5 12"/><path d="M3 6h12"/></svg>,
      title: "Entrega Express",
      desc: "Serviço de entrega em toda a cidade de Luanda."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
      title: "Pronta Entrega",
      desc: "Estoque real para envio imediato no mesmo dia."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"/><path d="M6 10V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><rect width="20" height="8" x="2" y="10" rx="2"/></svg>,
      title: "Espaço Físico",
      desc: "Venha sentir a qualidade das nossas peças premium."
    }
  ];

  return (
    <section className="bg-black text-white py-32 overflow-hidden relative" id="sobre">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-amber-600/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[6])}>
                  <img src={GALLERY_IMAGES[6]} alt="Fashion Detail" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="relative overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[7])}>
                  <img src={GALLERY_IMAGES[7]} alt="Lifestyle" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[8])}>
                  <img src={GALLERY_IMAGES[8]} alt="Premium Item" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="relative overflow-hidden group cursor-zoom-in" onClick={() => onPreview(GALLERY_IMAGES[1])}>
                  <img src={GALLERY_IMAGES[1]} alt="Modern Cut" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Nossa Essência</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
              Onde o Luxo <br /> encontra o <br /> <span className="text-amber-500 italic">Cotidiano.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light max-w-lg">
              A Jpsalling nasceu do desejo de trazer a moda premium internacional para o coração de Luanda. 
              Somos especialistas em marcas que definem gerações, garantindo que você esteja sempre à frente das tendências.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-amber-500">{f.icon}</div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest">{f.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-wider">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
