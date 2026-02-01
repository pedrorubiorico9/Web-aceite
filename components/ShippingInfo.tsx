
import React from 'react';
import { SHIPPING_STEPS } from '../constants';

const IconWrapper = ({ name }: { name: string }) => {
  switch (name) {
    case 'Leaf':
      return <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3c-1.1 0-2.1.8-2.5 1.8L8.1 8.5C7.2 10.3 6 12 6 12s1.8 1.2 3.5 2.1l3.7 1.4c1 .3 2-.2 2.3-1.2.3-1-.2-2.1-1.2-2.4l-3.5-1.3C10.5 10.4 10 10 10 10s.4-.5.6-1.3l1.3-3.7c.3-1-.2-2.1-1.2-2.4-.1-.1-.1-.1-.2-.1z"/></svg>;
    case 'Package':
      return <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case 'Truck':
      return <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>;
    default:
      return null;
  }
};

const ShippingInfo: React.FC = () => {
  return (
    <section id="envíos" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
        <svg className="w-[800px] h-[800px]" fill="currentColor" viewBox="0 0 200 200">
           <path d="M100 0c55.23 0 100 44.77 100 100s-44.77 100-100 100S0 155.23 0 100 44.77 0 100 0zm0 40a60 60 0 1 0 0 120 60 60 0 0 0 0-120z"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Logística de Excelencia</h2>
          <p className="text-emerald-100/70 text-lg">
            Cuidamos el transporte tanto como el cultivo. Queremos que la experiencia de abrir una botella de Esencia del Sur sea perfecta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SHIPPING_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <IconWrapper name={step.icon} />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-emerald-50/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-emerald-900/50 rounded-2xl border border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">¿Tienes dudas sobre tu pedido?</h4>
            <p className="text-emerald-100/60">Estamos aquí para ayudarte en todo el proceso.</p>
          </div>
          <button className="bg-white text-emerald-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
            Contactar Soporte
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
