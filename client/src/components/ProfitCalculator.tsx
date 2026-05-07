import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfitCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [currentMargin, setCurrentMargin] = useState(15);
  const [improvementPercentage, setImprovementPercentage] = useState(25);

  const currentProfit = (monthlyRevenue * currentMargin) / 100;
  const projectedMargin = currentMargin + (currentMargin * improvementPercentage) / 100;
  const projectedProfit = (monthlyRevenue * projectedMargin) / 100;
  const monthlyGain = projectedProfit - currentProfit;
  const annualGain = monthlyGain * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-2xl md:text-3xl text-gray-900" style={{fontFamily: "'Poppins', sans-serif"}}>
            Calculadora de Lucro
          </h3>
        </div>

        <p className="text-gray-600 mb-8">
          Veja quanto voce pode ganhar otimizando sua gestao financeira com a MJ Gestao.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Faturamento Mensal: <span className="text-blue-700">{formatCurrency(monthlyRevenue)}</span>
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="10000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>R$ 10.000</span>
              <span>R$ 500.000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Margem de Lucro Atual: <span className="text-blue-700">{currentMargin}%</span>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={currentMargin}
              onChange={(e) => setCurrentMargin(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5%</span>
              <span>50%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Melhoria Esperada: <span className="text-emerald-600">{improvementPercentage}%</span>
            </label>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={improvementPercentage}
              onChange={(e) => setImprovementPercentage(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">Lucro Mensal Atual</p>
              <p className="font-bold text-2xl text-gray-900">{formatCurrency(currentProfit)}</p>
              <p className="text-xs text-gray-500 mt-1">{currentMargin}% de margem</p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">Lucro Mensal Projetado</p>
              <p className="font-bold text-2xl text-emerald-600">{formatCurrency(projectedProfit)}</p>
              <p className="text-xs text-gray-500 mt-1">{projectedMargin.toFixed(1)}% de margem</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">Ganho Mensal</p>
              <p className="font-bold text-3xl text-blue-700">{formatCurrency(monthlyGain)}</p>
              <p className="text-xs text-gray-500 mt-2">Ganho Anual: {formatCurrency(annualGain)}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Quer alcancar esses resultados? Agende seu diagnostico financeiro gratuito.
          </p>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-lg font-semibold">
            Agendar Diagnostico Gratuito
          </Button>
        </div>
      </div>
    </div>
  );
}
