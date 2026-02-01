
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { generateBlogArticle } from '../services/geminiService';

const BlogSection: React.FC = () => {
  const [aiLoading, setAiLoading] = useState(false);
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [currentTopic, setCurrentTopic] = useState('');

  const handleGenerateAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTopic.trim()) return;
    setAiLoading(true);
    setAiContent(null);
    const result = await generateBlogArticle(currentTopic);
    setAiContent(result || "Error");
    setAiLoading(false);
  };

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Cultura del Aceite</h2>
            <p className="text-stone-600 max-w-xl text-lg">
              Descubre historias, curiosidades y consejos sobre el mundo del AOVE.
            </p>
          </div>
          <a href="#" className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Ver todo el blog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-emerald-800">
                  {post.category}
                </div>
              </div>
              <p className="text-stone-400 text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700 transition-colors">{post.title}</h3>
              <p className="text-stone-600 line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>

        {/* AI Interaction Section */}
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 italic serif">¿Quieres saber algo específico?</h3>
            <p className="text-stone-600 mb-8">Nuestra IA experta te redactará un artículo personalizado al instante sobre cualquier tema del aceite de oliva.</p>
            
            <form onSubmit={handleGenerateAI} className="flex flex-col sm:flex-row gap-4 mb-10">
              <input 
                type="text" 
                placeholder="Ej: ¿Cómo conservar el aceite en casa?"
                className="flex-1 px-6 py-4 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={currentTopic}
                onChange={(e) => setCurrentTopic(e.target.value)}
              />
              <button 
                type="submit"
                disabled={aiLoading}
                className="bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-900 transition-colors disabled:opacity-50"
              >
                {aiLoading ? 'Redactando...' : 'Generar Artículo'}
              </button>
            </form>

            {aiContent && (
              <div className="bg-white p-8 rounded-2xl text-left border border-emerald-100 shadow-inner animate-fade-in whitespace-pre-wrap leading-relaxed text-stone-700">
                {aiContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
