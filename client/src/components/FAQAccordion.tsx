import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems, type FAQItem } from "@/data/faq";

export default function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Geral", "Serviços", "Precificação", "Implementação"];
  
  const filteredItems = selectedCategory === "Todos" 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Filtros de Categoria */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredItems.map((item: FAQItem) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-medium transition-shadow"
          >
            <button
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-left text-gray-900">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform ${
                  expandedId === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedId === item.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
