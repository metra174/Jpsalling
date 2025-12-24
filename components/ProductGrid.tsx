
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onPreview: (url: string) => void;
}

const ProductCard: React.FC<{ product: Product, onAdd: (p: Product) => void, onPreview: (url: string) => void }> = ({ product, onAdd, onPreview }) => {
  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500">
      <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-gray-50 border border-gray-100 cursor-zoom-in" onClick={() => onPreview(product.image)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Pronta Entrega Badge */}
        {product.stock && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-black text-[8px] font-black uppercase px-3 py-1.5 flex items-center gap-2 shadow-lg border border-gray-100">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Disponível em Estoque
          </div>
        )}

        {/* Brand Tag */}
        <div className="absolute top-4 right-4 bg-black/90 text-amber-500 text-[8px] font-black uppercase px-3 py-1.5 tracking-widest">
          {product.brand}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
            className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 hover:bg-amber-600 active:bg-amber-700 pointer-events-auto"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">{product.category}</p>
        </div>
        <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{product.name}</h3>
        <p className="text-gray-400 text-[11px] my-2 font-light leading-relaxed">{product.description}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <p className="text-lg font-black text-black font-serif">
            {product.price.toLocaleString()}
          </p>
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Akz</p>
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onPreview }) => {
  if (products.length === 0) return null;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-16">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAdd={onAddToCart} onPreview={onPreview} />
      ))}
    </div>
  );
};

export default ProductGrid;
