
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutSection from './components/AboutSection';
import ShippingInfo from './components/ShippingInfo';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <AboutSection />
        <ShippingInfo />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-emerald-800 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all z-40 hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
