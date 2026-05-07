import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * MJ Gestão - Diagnóstico Financeiro Page
 * Design: Modern Minimalist + Data-Driven
 * Objetivo: Página de venda para diagnóstico financeiro personalizado
 */

export default function Diagnostico() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    especialidade: "",
    faturamento: "",
    principalDesafio: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Diagnóstico solicitado:", formData);
    alert("Perfeito! Você receberá em breve um email com instruções para agendar seu diagnóstico financeiro.");
    setFormData({ nome: "", email: "", telefone: "", especialidade: "", faturamento: "", principalDesafio: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>MJ</span>
            </div>
            <span className="font-bold text-xl text-gray-900" style={{fontFamily: "'Poppins', sans-serif"}}>MJ Gestão</span>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 leading-tight" style={{fontFamily: "'Poppins', sans-serif"}}>
              Descubra em 45 minutos por que sua clínica não está lucrando como deveria
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Um diagnóstico financeiro direto e personalizado para identificar erros e melhorar seus resultados.
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold text-emerald-600 mb-4">✓ Sem compromisso</p>
              <p className="text-sm font-semibold text-emerald-600">✓ Análise profunda e honesta</p>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg-soft">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344076272/k54SQbNSkb4ScMVTVTtX8h/clinic-management-success-brquC4NksSGJQA9eXgNcHx.webp"
              alt="Gestão de clínica com sucesso"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ENTREGAS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-16 text-center" style={{fontFamily: "'Poppins', sans-serif"}}>
            O que você vai receber no diagnóstico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Análise do faturamento e despesas",
                description: "Mapeamento completo de toda a entrada e saída de recursos da sua clínica.",
              },
              {
                number: "02",
                title: "Identificação de falhas",
                description: "Descobrimento dos pontos críticos que estão comendo seu lucro.",
              },
              {
                number: "03",
                title: "Avaliação da precificação",
                description: "Análise se seus preços estão alinhados com o mercado e sua realidade.",
              },
              {
                number: "04",
                title: "3 ajustes práticos",
                description: "Recomendações concretas que você pode implementar imediatamente.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-medium transition-all">
                <div className="text-4xl font-bold text-blue-700 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>{item.number}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg-soft order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344076272/k54SQbNSkb4ScMVTVTtX8h/financial-clarity-visual-FD5nPZjcfCd5dgzxraZXew.webp"
                alt="Clareza financeira"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900" style={{fontFamily: "'Poppins', sans-serif"}}>
                Você vai sair do diagnóstico sabendo exatamente o que fazer
              </h2>
              <p className="text-lg text-gray-600">
                Nosso objetivo não é apenas apontar problemas, mas oferecer soluções reais e viáveis que você pode começar a implementar imediatamente.
              </p>

              <ul className="space-y-4">
                {[
                  "Compreender sua real situação financeira",
                  "Identificar oportunidades de crescimento",
                  "Receber um plano de ação personalizado",
                  "Conhecer nossa metodologia de trabalho",
                  "Decidir se quer continuar conosco (sem pressão)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROCESSO */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-16 text-center" style={{fontFamily: "'Poppins', sans-serif"}}>
            Como funciona o diagnóstico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Agendamento",
                description: "Escolha um horário que funcione melhor para você. Levará apenas 45 minutos.",
              },
              {
                step: 2,
                title: "Análise",
                description: "Nossos especialistas analisam seus números em detalhes e identificam oportunidades.",
              },
              {
                step: 3,
                title: "Apresentação",
                description: "Você recebe um relatório completo com recomendações práticas e viáveis.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {item.step}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-blue-700 text-3xl font-light">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROVA SOCIAL */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-12" style={{fontFamily: "'Poppins', sans-serif"}}>
            Clínicas que já transformaram seus resultados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dra. Marina",
                especialidade: "Dermatologia",
                resultado: "Aumentou lucro em 35% em 6 meses",
              },
              {
                name: "Dr. Carlos",
                especialidade: "Ginecologia",
                resultado: "Reduziu custos operacionais em 22%",
              },
              {
                name: "Dra. Patricia",
                especialidade: "Estética",
                resultado: "Estruturou precificação estratégica",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 bg-white/10 backdrop-blur border border-white/20 text-left">
                <p className="text-blue-100 mb-4 italic">"{testimonial.resultado}"</p>
                <p className="font-bold text-white" style={{fontFamily: "'Poppins', sans-serif"}}>{testimonial.name}</p>
                <p className="text-blue-200 text-sm">{testimonial.especialidade}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FORMULÁRIO */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4 text-center" style={{fontFamily: "'Poppins', sans-serif"}}>
              Agende seu diagnóstico financeiro
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Preencha os dados abaixo e escolha o melhor horário para sua análise. Sem compromisso!
            </p>

            <Card className="p-8 md:p-12 bg-white border border-gray-200 shadow-medium">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Nome completo *
                    </label>
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
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Especialidade *
                    </label>
                    <select
                      name="especialidade"
                      value={formData.especialidade}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="dermatologia">Dermatologia</option>
                      <option value="ginecologia">Ginecologia</option>
                      <option value="pediatria">Pediatria</option>
                      <option value="estetica">Estética</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Faturamento mensal aproximado *
                  </label>
                  <select
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="ate-10k">Até R$ 10.000</option>
                    <option value="10k-30k">R$ 10.000 - R$ 30.000</option>
                    <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                    <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                    <option value="acima-100k">Acima de R$ 100.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Qual é seu principal desafio financeiro? *
                  </label>
                  <textarea
                    name="principalDesafio"
                    value={formData.principalDesafio}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
                    placeholder="Descreva seu maior desafio financeiro..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    ✓ Você receberá um email com disponibilidades de horários para agendar sua sessão de diagnóstico.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Quero meu diagnóstico financeiro
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Sem compromisso. Análise profunda e honesta.
                </p>
              </form>
            </Card>
          </div>
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
