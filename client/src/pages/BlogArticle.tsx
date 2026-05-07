import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { blogArticles } from "@/data/blog";

/**
 * MJ Gestão - Blog Article Page
 * Design: Modern Minimalist + Data-Driven
 * Objetivo: Página individual de artigo do blog
 */

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();

  const article = blogArticles.find((a) => a.slug === params?.slug);

  if (!match || !article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Artigo não encontrado
          </h1>
          <p className="text-gray-600 mb-8">O artigo que você está procurando não existe.</p>
          <Button
            onClick={() => setLocation("/blog")}
            className="bg-blue-700 hover:bg-blue-800 text-white"
          >
            Voltar ao blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/blog")}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Blog
          </button>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ</span>
            </div>
            <span className="font-bold text-xl text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>MJ Gestão</span>
          </button>
          <div className="w-20"></div>
        </div>
      </header>

      {/* HERO COM IMAGEM */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} minutos de leitura
              </div>
              <div>Por {article.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO DO ARTIGO */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={idx} className="text-4xl font-bold text-gray-900 mt-12 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith("| ")) {
                  // Tabela simples
                  const lines = paragraph.split("\n");
                  const headers = lines[0].split("|").map((h) => h.trim()).filter(Boolean);
                  const rows = lines.slice(2).map((line) =>
                    line.split("|").map((cell) => cell.trim()).filter(Boolean)
                  );
                  return (
                    <div key={idx} className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            {headers.map((header, i) => (
                              <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              {row.map((cell, j) => (
                                <td key={j} className="border border-gray-300 px-4 py-2 text-gray-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (paragraph.startsWith("✓ ") || paragraph.startsWith("❌ ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("✓ ") || line.startsWith("❌ "));
                  return (
                    <ul key={idx} className="space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-xl mt-0.5">{item.substring(0, 1)}</span>
                          <span className="text-gray-700">{item.substring(2)}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* AUTOR E COMPARTILHAMENTO */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Escrito por</p>
                  <p className="font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {article.author}
                  </p>
                </div>
                <Button
                  onClick={() => setLocation("/diagnostico")}
                  className="bg-blue-700 hover:bg-blue-800 text-white inline-flex items-center gap-2"
                >
                  Agendar diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS RELACIONADOS */}
      {relatedArticles.length > 0 && (
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-16 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Artigos Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setLocation(`/blog/${relatedArticle.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedArticle.readTime} min
                      </div>
                      <span className="text-blue-700 font-semibold">Ler →</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

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
        <div className="container text-center">
          <p>&copy; 2024 MJ Gestão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
