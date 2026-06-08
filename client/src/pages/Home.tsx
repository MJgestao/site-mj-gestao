import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, BarChart3, DollarSign, Target, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { blogArticles } from "@/data/blog";
import ProfitCalculator from "@/components/ProfitCalculator";

export default function Home() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "",
    faturamento: "",
    dificuldade: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiagnosticoClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "diagnostico_click", {
        event_category: "Lead",
        event_label: label,
      });
    }

    setLocation("/diagnostico");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        event_category: "Lead",
        event_label: "Formulário Home",
        especialidade: formData.especialidade,
        faturamento: formData.faturamento,
      });
    }

    console.log("Lead capturado:", formData);

    alert("Obrigado! Em breve entraremos em contato para agendar seu diagnóstico financeiro.");

    setFormData({
      nome: "",
      especialidade: "",
      faturamento: "",
      dificuldade: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                MJ
              </span>
            </div>
            <span className="font-bold text-xl text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
              MJ Gestão
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-gray-600 hover:text-blue-700 transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="text-gray-600 hover:text-blue-700 transition-colors">
              Por que MJ
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-blue-700 transition-colors">
              Como Funciona
            </a>
            <a href="/blog" className="text-gray-600 hover:text-blue-700 transition-colors">
              Blog
            </a>
            <Button
              onClick={() => handleDiagnosticoClick("Menu - Diagnóstico Financeiro")}
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Diagnóstico Financeiro
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Transforme o faturamento da sua clínica em <span className="gradient-blue-green-text">lucro real</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Organizamos, estruturamos e otimizamos o financeiro da sua clínica com estratégia, controle e precificação inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => handleDiagnosticoClick("Hero - Quero meu diagnóstico financeiro")}
                className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold flex items-center gap-2"
              >
                Quero meu diagnóstico financeiro
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => handleDiagnosticoClick("Hero - Falar com especialista")}
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-lg font-semibold"
              >
                Falar com especialista
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg-soft">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344076272/k54SQbNSkb4ScMVTVTtX8h/hero-clinica-crescimento-G4EvmXZyvzm5V3jEWfbTLB.webp"
              alt="Médica com gráficos financeiros"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Sua clínica poderia ser mais lucrativa — mas algo está travando isso
            </h2>
            <p className="text-lg text-gray-600">
              Se você se identificar com alguma dessas situações, o problema não é o faturamento — é a gestão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "💰", title: "Você fatura bem, mas não sabe quanto realmente sobra?" },
              { icon: "📊", title: "O dinheiro entra, mas parece que nunca acumula?" },
              { icon: "🔍", title: "Você não tem clareza sobre seus custos e margens?" },
              { icon: "❓", title: "Sua precificação foi definida no 'achismo'?" },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-white border border-gray-200 hover:shadow-medium transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-lg font-semibold text-gray-900">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              A gestão financeira que sua clínica precisa para crescer com segurança
            </h2>
            <p className="text-lg text-gray-600">
              Na MJ Gestão, você deixa de operar no escuro e passa a tomar decisões com base em números reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoria Financeira",
                icon: Target,
                items: ["Diagnóstico financeiro", "Identificação de falhas", "Plano de ação estratégico", "Acompanhamento"],
              },
              {
                title: "Controladoria & Precificação",
                icon: BarChart3,
                items: ["Estruturação de lucro", "Precificação de consultas e procedimentos", "Análise de margens", "Decisão baseada em dados"],
              },
              {
                title: "BPO Financeiro",
                icon: DollarSign,
                items: ["Gestão completa do financeiro", "Contas a pagar e receber", "Conciliação bancária", "Relatórios mensais"],
              },
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-medium transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-16 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Por que clínicas escolhem a MJ Gestão?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {["Especialização em clínicas médicas", "Expertise em precificação", "Atendimento personalizado", "Visão estratégica", "Clareza total dos números"].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg-soft">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344076272/k54SQbNSkb4ScMVTVTtX8h/financial-analysis-abstract-BHJniRME6Rxsddkd3nsJin.webp"
                alt="Análise financeira"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Simples, rápido e estratégico
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Nosso processo foi desenvolvido para ser eficiente e gerar resultados reais para sua clínica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Você agenda seu diagnóstico", desc: "Escolha o melhor horário para conversar com nossos especialistas" },
              { step: 2, title: "Analisamos seus números", desc: "Fazemos uma análise profunda da saúde financeira da sua clínica" },
              { step: 3, title: "Você recebe um plano claro", desc: "Apresentamos estratégias práticas e viáveis para seu crescimento" },
              { step: 4, title: "Acompanhamos sua evolução", desc: "Continuamos ao seu lado para garantir os resultados" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-6 -right-3 text-blue-700 text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-500 text-white">
        <div className="container text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Experiência que gera resultado
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Com mais de 8 anos de atuação, ajudamos clínicas a organizar o financeiro, aumentar o lucro e tomar decisões com segurança.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "100+", label: "Clínicas atendidas" },
              { number: "8 anos", label: "De experiência" },
              { number: "R$ 50M+", label: "Em lucro gerado" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-count-up">
                <p className="font-bold text-4xl md:text-5xl mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {stat.number}
                </p>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Sua clínica pode ser muito mais lucrativa com organização
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              Você não precisa faturar mais para lucrar mais.
              <br />
              <span className="font-semibold">Você precisa de gestão.</span>
            </p>

            <Button
              onClick={() => handleDiagnosticoClick("CTA Final - Quero organizar minha clínica agora")}
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-10 py-6 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Quero organizar minha clínica agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Gere seu diagnóstico financeiro
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Preencha os dados abaixo e receba uma análise personalizada da saúde financeira da sua clínica.
            </p>

            <Card className="p-8 md:p-12 bg-white border border-gray-200">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Nome completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Especialidade *</label>
                  <select
                    name="especialidade"
                    value={formData.especialidade}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  >
                    <option value="">Selecione sua especialidade</option>
                    <option value="dermatologia">Dermatologia</option>
                    <option value="ginecologia">Ginecologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="estetica">Estética</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Faturamento mensal aproximado *</label>
                  <select
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  >
                    <option value="">Selecione o faturamento</option>
                    <option value="ate-10k">Até R$ 10.000</option>
                    <option value="10k-30k">R$ 10.000 - R$ 30.000</option>
                    <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                    <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                    <option value="acima-100k">Acima de R$ 100.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Principal dificuldade financeira *</label>
                  <textarea
                    name="dificuldade"
                    value={formData.dificuldade}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
                    placeholder="Descreva seu maior desafio financeiro..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3 rounded-lg font-semibold"
                >
                  Enviar e receber diagnóstico
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Insights sobre Gestão Financeira
            </h2>
            <p className="text-lg text-gray-600">
              Artigos, estratégias e dicas práticas para otimizar a gestão financeira da sua clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogArticles.slice(0, 3).map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setLocation(`/blog/${article.slug}`)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min
                    </div>
                    <span className="text-blue-700 font-semibold">Ler →</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/blog")}
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Ver todos os artigos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <ProfitCalculator />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Respostas rápidas para as perguntas mais comuns sobre nossos serviços.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4">
              {[
                {
                  question: "Qual é o diferencial da MJ Gestão?",
                  answer: "Somos especializados em gestão financeira para clínicas médicas. Combinamos expertise em precificação, controle financeiro e estratégia de crescimento.",
                },
                {
                  question: "Como funciona o BPO Financeiro?",
                  answer: "Assumimos a gestão completa do seu financeiro: contas a pagar e receber, conciliação bancária, emissão de relatórios e análises mensais.",
                },
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer: "Os primeiros resultados aparecem em 30-60 dias. Você começará a ter clareza sobre seus números imediatamente.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-medium transition-shadow">
                  <p className="font-semibold text-gray-900 mb-2">{item.question}</p>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/faq")}
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Ver todas as perguntas
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm">MJ</span>
                </div>
                <span className="font-display font-bold text-white">MJ Gestão</span>
              </div>
              <p className="text-sm">BPO Financeiro para Clínicas Médicas</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">BPO Financeiro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Controladoria</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
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
