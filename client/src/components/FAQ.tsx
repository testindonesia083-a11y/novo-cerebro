import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o acesso ao material?',
      answer: 'Após a compra, você receberá um email com o link para download imediato. Todo o material está em formato PDF, pronto para imprimir.'
    },
    {
      question: 'Para qual idade é recomendado?',
      answer: 'Nosso material é adequado para crianças de 2 a 10 anos, com atividades organizadas por faixa etária e nível de desenvolvimento.'
    },
    {
      question: 'Posso imprimir quantas vezes quiser?',
      answer: 'Sim! Você pode imprimir todas as atividades quantas vezes precisar, para uso pessoal ou familiar.'
    },
    {
      question: 'Tem garantia?',
      answer: 'Sim, oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.'
    },
    {
      question: 'Recebo atualizações?',
      answer: 'Sim! Dependendo do plano escolhido, você receberá atualizações e novos materiais por 6 meses ou vitalício.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-faq-title">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-[15px] shadow-sm overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover-elevate"
                data-testid={`button-faq-${index}`}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
