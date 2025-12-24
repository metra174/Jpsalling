
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { Product, CartItem } from './types';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  }, []);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  
  const totalPrice = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  const handleCheckout = () => {
    const message = cart
      .map(item => `- ${item.name} (${item.brand}) x${item.quantity}: ${item.price.toLocaleString()} Akz`)
      .join('%0A');
    const totalStr = `%0A%0A*Total: ${totalPrice.toLocaleString()} Akz*`;
    const finalMessage = `Olá Jpsalling! Gostaria de encomendar os seguintes produtos:%0A%0A${message}${totalStr}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`, '_blank');
  };

  const filteredProducts = (category: string) => 
    PRODUCTS.filter(p => p.category === category || category === 'Todas');

  return (
    <div className="min-h-screen bg-white selection:bg-amber-600 selection:text-white">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero onPreviewImage={setPreviewImage} />
        
        <section id="novidades" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Premium Catalog</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">Coleção Exclusiva</h2>
              <p className="text-gray-500 mt-4 max-w-md">Descubra peças de curadoria internacional selecionadas para o seu estilo de vida em Angola.</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-4 py-2 border border-gray-100 rounded-full">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
              Mais de 10k Seguidores
            </div>
          </div>
          
          <div id="masculino" className="mb-20">
             <h3 className="text-xl font-bold font-serif mb-8 border-l-4 border-amber-600 pl-4">Moda Masculina</h3>
             <ProductGrid products={filteredProducts('Masculino')} onAddToCart={addToCart} onPreview={setPreviewImage} />
          </div>

          <div id="feminino" className="mb-20">
             <h3 className="text-xl font-bold font-serif mb-8 border-l-4 border-amber-600 pl-4">Moda Feminina</h3>
             <ProductGrid products={filteredProducts('Feminino')} onAddToCart={addToCart} onPreview={setPreviewImage} />
          </div>

          <div id="perfumaria" className="mb-20">
             <h3 className="text-xl font-bold font-serif mb-8 border-l-4 border-amber-600 pl-4">Perfumaria & Fragrâncias</h3>
             <ProductGrid products={filteredProducts('Perfumaria')} onAddToCart={addToCart} onPreview={setPreviewImage} />
          </div>
        </section>

        <About onPreview={setPreviewImage} />
        <Gallery onPreview={setPreviewImage} />
        <Location />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onCheckout={handleCheckout}
        total={totalPrice}
      />

      <ImageModal 
        imageUrl={previewImage} 
        onClose={() => setPreviewImage(null)} 
      />
    </div>
  );
};

export default App;
