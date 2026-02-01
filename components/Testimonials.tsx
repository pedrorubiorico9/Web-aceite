
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 text-center">
        <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4 block">Experiencias Realmente Frescas</span>
        <h2 className="text-4xl font-bold mb-16 text-emerald-900">Lo que dicen de nosotros</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm relative text-left">
              <div className="absolute -top-4 left-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-stone-600 mb-8 italic text-lg leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-emerald-900">{t.author}</h4>
                <p className="text-stone-400 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
