
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">ES</span>
          </div>
          <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
            Esencia del Sur
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Productos', 'Familia', 'Envíos', 'Opiniones', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-stone-100'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Tienda
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className={`w-6 h-6 ${isScrolled ? 'text-emerald-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
