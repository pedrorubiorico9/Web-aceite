
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ES</span>
              </div>
              <span className="text-3xl font-bold tracking-tighter">Esencia del Sur</span>
            </div>
            <p className="text-stone-400 text-lg max-w-sm mb-8 leading-relaxed">
              Rescatando la tradición familiar para llevar el mejor aceite del sur directamente a tu hogar.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'YT'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-emerald-400">Navegación</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
              <li><a href="#familia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#envíos" className="hover:text-white transition-colors">Envíos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-emerald-400">Contacto</h4>
            <ul className="space-y-4 text-stone-400">
              <li>hola@esenciadelsur.es</li>
              <li>+34 900 123 456</li>
              <li>Jaén, Andalucía, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm">
          <p>© 2024 Esencia del Sur. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
