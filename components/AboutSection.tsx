
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="familia" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598282381014-a95726214152?auto=format&fit=crop&q=80&w=1000" 
                alt="Familia en el olivar" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-100 rounded-2xl -z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-emerald-800 rounded-full -z-0 opacity-20"></div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Herencia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-900 leading-tight">Generaciones cuidando de la tierra del Sur.</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Nuestra historia comienza hace más de un siglo en las colinas de Andalucía. No somos una gran corporación; somos una familia que entiende que el mejor aceite no se fabrica, se cultiva.
              </p>
              <p>
                Cada otoño, mis padres, mis hermanos y yo nos reunimos bajo los mismos olivos que cuidaron nuestros abuelos. Respetamos los tiempos de la naturaleza, recolectando la aceituna en su punto óptimo de maduración para obtener ese color verde esmeralda tan característico.
              </p>
              <p className="italic font-serif text-emerald-800 text-xl border-l-4 border-emerald-600 pl-6 py-2">
                "No vendemos aceite, compartimos el alma de nuestra tierra."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
