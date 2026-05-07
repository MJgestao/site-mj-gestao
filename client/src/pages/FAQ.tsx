import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>MJ</span>
            </div>
            <span className="font-bold text-xl text-gray-900" style={{fontFamily: "'Poppins', sans-serif"}}>MJ Gestão</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-blue-700 transition-colors">
              Home
            </a>
            <a href="/blog" className="text-gray-600 hover:text-blue-700 transition-colors">
              Blog
            </a>
            <Button
              onClick={() => setLocation("/diagnostico")}
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Diagnóstico Financeiro
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="container text-center">
          <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços de gestão financeira para clínicas.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico financeiro gratuito e converse diretamente com nossos especialistas.
          </p>
          <Button
            onClick={() => setLocation("/diagnostico")}
            className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-10 py-6 rounded-lg font-semibold inline-flex items-center gap-2"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center">
          <p className="text-gray-400">© 2024 MJ Gestão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
