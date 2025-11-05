import { CreditCard, Download, Mail } from 'lucide-react';
import downloadIllustration from '@assets/generated_images/Digital_download_illustration_cc834ccf.png';

export default function HowToReceive() {
  const steps = [
    { 
      icon: CreditCard, 
      title: '1. Faça seu pedido', 
      description: 'Escolha o plano ideal para você' 
    },
    { 
      icon: Mail, 
      title: '2. Receba por email', 
      description: 'Link de acesso enviado instantaneamente' 
    },
    { 
      icon: Download, 
      title: '3. Baixe e use', 
      description: 'Imprima e comece a usar hoje mesmo' 
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-how-to-title">
          Como vou receber meu material?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="text-center"
                data-testid={`step-${index}`}
              >
                <div className="bg-cerebro-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-cerebro-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <img 
            src={downloadIllustration} 
            alt="Download digital" 
            className="max-w-md w-full h-auto"
            data-testid="img-download-illustration"
          />
        </div>
      </div>
    </section>
  );
}
