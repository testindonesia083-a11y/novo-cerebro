import { Brain, Lightbulb, Puzzle, Smile } from 'lucide-react';

export default function BenefitsWithPhone() {
  const benefits = [
    { icon: Brain, text: 'Melhora da atenção e concentração' },
    { icon: Puzzle, text: 'Melhora o desempenho escolar, com atividades alinhadas às habilidades da educação infantil e anos iniciais.' },
    { icon: Lightbulb, text: 'Ideal para crianças com diferentes perfis de aprendizado, inclusive com TDAH ou autismo leve.' },
    { icon: Smile, text: 'Aprendizado divertido e prazeroso' }
  ];

  return (
    <section className="py-16 px-4 pb-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center" data-testid="text-benefits-phone-title">
            Benefícios Comprovados do Cérebro em Jogo
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={`benefit-phone-${index}`}
                >
                  <div className="bg-cerebro-blue/10 rounded-full p-3 shrink-0">
                    <Icon className="w-6 h-6 text-cerebro-blue" />
                  </div>
                  <p className="text-lg text-foreground pt-2">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
