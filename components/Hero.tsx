
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464961305746-4b24f832813a?auto=format&fit=crop&q=80&w=2000" 
          alt="Olivares del Sur" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            El Corazón del Sur en cada <span className="italic text-emerald-400">gota</span>.
          </h1>
          <p className="text-xl mb-10 text-stone-200 leading-relaxed">
            Directo desde nuestros olivares familiares hasta tu mesa. Un Aceite de Oliva Virgen Extra (AOVE) de cosecha temprana, recolectado con pasión en el sur de España.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#productos" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold text-center transition-all">
              Ver Cosecha
            </a>
            <a href="#familia" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full text-lg font-semibold text-center transition-all">
              Nuestra Historia
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <a href="#productos">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
