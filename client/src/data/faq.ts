export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Geral" | "Serviços" | "Precificação" | "Implementação";
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Qual é o diferencial da MJ Gestão?",
    answer: "Somos especializados em gestão financeira para clínicas médicas. Combinamos expertise em precificação, controle financeiro e estratégia de crescimento, tudo adaptado à realidade do setor de saúde.",
    category: "Geral",
  },
  {
    id: "2",
    question: "Como funciona o BPO Financeiro?",
    answer: "Assumimos a gestão completa do seu financeiro: contas a pagar e receber, conciliação bancária, emissão de relatórios e análises mensais. Você recebe relatórios claros e acionáveis todo mês.",
    category: "Serviços",
  },
  {
    id: "3",
    question: "Vocês fazem precificação de consultas e procedimentos?",
    answer: "Sim! A precificação é uma de nossas especialidades. Analisamos seus custos, margens desejadas e mercado para definir preços que sejam justos para você e competitivos para seus pacientes.",
    category: "Precificação",
  },
  {
    id: "4",
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados aparecem em 30-60 dias. Você começará a ter clareza sobre seus números imediatamente, e as melhorias financeiras aparecem conforme implementamos as recomendações.",
    category: "Implementação",
  },
  {
    id: "5",
    question: "Qual é o valor dos serviços?",
    answer: "Os valores variam conforme o tamanho da clínica e os serviços contratados. Oferecemos um diagnóstico financeiro gratuito para avaliar sua situação e apresentar uma proposta personalizada.",
    category: "Geral",
  },
  {
    id: "6",
    question: "Vocês trabalham com clínicas de qual especialidade?",
    answer: "Trabalhamos com clínicas de todas as especialidades: odontologia, oftalmologia, dermatologia, fisioterapia, psicologia, entre outras. Nossa metodologia é adaptável a qualquer tipo de clínica.",
    category: "Serviços",
  },
  {
    id: "7",
    question: "Como é o processo de diagnóstico financeiro?",
    answer: "Analisamos seus últimos 12 meses de faturamento, custos, despesas e margens. Identificamos problemas, oportunidades de melhoria e apresentamos um plano de ação estratégico personalizado.",
    category: "Implementação",
  },
  {
    id: "8",
    question: "Posso contratar apenas a Consultoria?",
    answer: "Sim! Você pode contratar apenas a Consultoria Financeira para receber análises e recomendações, ou o BPO para que assumamos a execução. Também oferecemos pacotes combinados.",
    category: "Serviços",
  },
  {
    id: "9",
    question: "Como vocês lidam com informações confidenciais?",
    answer: "Assinamos acordos de confidencialidade com todos os clientes. Seus dados financeiros são tratados com máxima segurança e sigilo profissional.",
    category: "Geral",
  },
  {
    id: "10",
    question: "Qual é o melhor primeiro passo?",
    answer: "O melhor primeiro passo é agendar um diagnóstico financeiro gratuito. Conversaremos sobre sua clínica, desafios e objetivos, e apresentaremos como podemos ajudar.",
    category: "Geral",
  },
];
