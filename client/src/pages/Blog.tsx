import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { blogArticles } from "@/data/blog";

/**
 * MJ Gestão - Blog Page
 * Design: Modern Minimalist + Data-Driven
 * Objetivo: Página de listagem de artigos sobre gestão financeira
 */

export default function Blog() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogArticles.map((article) => article.category)));

  const filteredArticles = selectedCategory
    ? blogArticles.filter((article) => article.category === selectedCategory)
    : blogArticles;

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ</span>
            </div>
            <span className="font-bold text-xl text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ Gestão</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#servicos" className="text-gray-600 hover:text-blue-700 transition-colors">
              Serviços
            </a>
            <a href="/#diferenciais" className="text-gray-600 hover:text-blue-700 transition-colors">
              Por que MJ
            </a>
            <a href="/blog" className="text-blue-700 font-semibold">
              Blog
            </a>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              Diagnóstico
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Blog de Gestão Financeira para Clínicas
            </h1>
            <p className="text-xl text-gray-600">
              Artigos, estratégias e insights para otimizar a gestão financeira da sua clínica e aumentar o lucro.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos os artigos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setLocation(`/blog/${article.slug}`)}
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta informações */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Nenhum artigo encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Pronto para transformar sua clínica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Combine o conhecimento dos nossos artigos com um diagnóstico financeiro personalizado.
          </p>
          <Button
            onClick={() => setLocation("/diagnostico")}
            className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-6 rounded-lg font-semibold inline-flex items-center gap-2"
          >
            Agendar diagnóstico
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ</span>
                </div>
                <span className="font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ Gestão</span>
              </div>
              <p className="text-sm">BPO Financeiro para Clínicas Médicas</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#servicos" className="hover:text-white transition-colors">BPO Financeiro</a></li>
                <li><a href="/#servicos" className="hover:text-white transition-colors">Consultoria</a></li>
                <li><a href="/#servicos" className="hover:text-white transition-colors">Controladoria</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 MJ Gestão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
