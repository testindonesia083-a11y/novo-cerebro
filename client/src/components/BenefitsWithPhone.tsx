import { Brain, Lightbulb, Puzzle, Smile } from 'lucide-react';
import phoneMockup from '@assets/generated_images/Mobile_app_mockup_display_e323eccd.png';

export default function BenefitsWithPhone() {
  const benefits = [
    { icon: Brain, text: 'Melhora da atenção e concentração' },
    { icon: Puzzle, text: 'Desenvolvimento do raciocínio lógico' },
    { icon: Lightbulb, text: 'Estímulo à criatividade' },
    { icon: Smile, text: 'Aprendizado divertido e prazeroso' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={phoneMockup} 
              alt="Aplicativo Cérebro em Jogo" 
              className="max-w-sm w-full h-auto"
              data-testid="img-phone-mockup"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="text-benefits-phone-title">
              Benefícios comprovados
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
      </div>
    </section>
  );
}
