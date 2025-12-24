
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-serif font-bold tracking-tighter text-black">JPSALLING</span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-gray-400 mt-1">Premium Concept</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-700">
          <a href="#novidades" className="hover:text-amber-600 transition-colors">Novidades</a>
          <a href="#masculino" className="hover:text-amber-600 transition-colors">Masculino</a>
          <a href="#feminino" className="hover:text-amber-600 transition-colors">Feminino</a>
          <a href="#perfumaria" className="hover:text-amber-600 transition-colors">Perfumaria</a>
          <a href="#localizacao" className="hover:text-amber-600 transition-colors">Localização</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-gray-800 hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          <a 
            href="https://wa.me/244945329335"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-all active:scale-95"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
