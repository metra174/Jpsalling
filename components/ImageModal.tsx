
import React from 'react';

interface ImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 transition-all animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <div className="relative max-w-full max-h-full">
        <img 
          src={imageUrl} 
          alt="Visualização" 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-[zoomIn_0.3s_ease]"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-4 text-center">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Jpsalling Premium Concept | Luanda</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ImageModal;
