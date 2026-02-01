
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Nuestros Formatos</h2>
          <p className="text-stone-600 text-lg">
            Seleccionamos cuidadosamente el envase perfecto para cada necesidad, asegurando que nuestro AOVE mantenga sus propiedades intactas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-stone-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-stone-100">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-bold text-emerald-800 shadow-sm">
                  {product.size}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-emerald-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-emerald-700">{product.price.toFixed(2)}€</span>
                </div>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
