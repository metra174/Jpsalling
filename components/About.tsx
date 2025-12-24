
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><circle cx="10" cy="18" r="2"/><circle cx="21" cy="18" r="2"/><path d="M13 18h-1"/><path d="M10 6v12"/><path d="m14 6 5 12"/><path d="M3 6h12"/></svg>,
      title: "Entrega Express",
      desc: "Serviço de entrega em toda a cidade de Luanda (taxa adicional)."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
      title: "Pronta Entrega",
      desc: "Trabalhamos com estoque real para envio imediato."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"/><path d="M6 10V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><rect width="20" height="8" x="2" y="10" rx="2"/></svg>,
      title: "Concept Stores",
      desc: "Duas localizações premium para sua conveniência."
    }
  ];

  return (
    <section className="bg-black text-white py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Sobre a Jpsalling</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              Sofisticação Casual & <br />
              <span className="text-amber-500 italic">Modernidade</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light max-w-lg">
              A Jpsalling é o destino definitivo para quem busca o equilíbrio perfeito entre o luxo e o cotidiano. Com marcas icônicas como Zara, Mango e Moschino, oferecemos uma experiência de compra única em Luanda, seja online ou em nossas lojas físicas.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="text-amber-500 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-amber-600 group-hover:text-black transition-all duration-300">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-widest">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-16">
              <div className="relative overflow-hidden group">
                <img src="https://i.imgur.com/mfJoeQu.jpg" alt="Fashion 1" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative overflow-hidden group">
                <img src="https://i.imgur.com/H4kSqN2.jpg" alt="Fashion 2" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden group">
                <img src="https://i.imgur.com/ZQd8QST.jpg" alt="Fashion 3" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              </div>
              <div className="relative overflow-hidden group">
                <img src="https://i.imgur.com/p6UX77r.jpg" alt="Fashion 4" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
