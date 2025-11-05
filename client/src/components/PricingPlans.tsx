import { Check } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      name: 'Pack Básico',
      price: 'R$ 47',
      features: [
        'Acesso a 1.000 atividades',
        'Livro de colorir bônus',
        'Suporte por email',
        'Atualizações por 6 meses'
      ],
      highlighted: false
    },
    {
      name: 'Super Pack',
      price: 'R$ 97',
      features: [
        'Acesso a todas as 2.000+ atividades',
        'Todos os 3 bônus incluídos',
        'Suporte prioritário',
        'Atualizações vitalícias',
        'Novos materiais mensais',
        'Garantia estendida de 30 dias'
      ],
      highlighted: true
    }
  ];

  const handleSelectPlan = (planName: string) => {
    console.log(`${planName} selected`);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4" data-testid="text-pricing-title">
          Escolha seu plano
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Investimento único - sem mensalidades
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-[15px] p-8 ${
                plan.highlighted 
                  ? 'bg-cerebro-blue text-white shadow-xl scale-105' 
                  : 'bg-card shadow-md'
              }`}
              data-testid={`card-plan-${index}`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-cerebro-yellow text-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-cerebro-blue'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {' '}/único
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-cerebro-yellow' : 'text-cerebro-green'}`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-cerebro-yellow text-foreground hover:bg-cerebro-yellow/90'
                    : 'bg-cerebro-green text-white hover:bg-cerebro-green/90'
                }`}
                data-testid={`button-select-plan-${index}`}
              >
                Escolher {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
