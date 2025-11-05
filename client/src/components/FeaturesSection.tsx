import { BookOpen, Sparkles, Target } from 'lucide-react';
import activitiesPreview from '@assets/generated_images/Educational_activities_preview_eaad00d4.png';

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-features-title">
          O que você vai encontrar
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="bg-card rounded-[15px] p-6 shadow-md flex flex-col"
            data-testid="card-feature-1"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={activitiesPreview} 
                alt="Atividades educativas" 
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">
              Atividades Variadas
            </h3>
            <p className="text-muted-foreground">
              Materiais pensados para diferentes faixas etárias e níveis de desenvolvimento.
            </p>
          </div>

          <div 
            className="bg-card rounded-[15px] p-6 shadow-md flex flex-col items-center justify-center text-center"
            data-testid="card-feature-2"
          >
            <div className="mb-4">
              <Sparkles className="w-20 h-20 text-cerebro-yellow" />
            </div>
            <h3 className="text-4xl font-bold text-cerebro-blue mb-2">
              +2.000
            </h3>
            <p className="text-2xl font-semibold text-foreground">
              Atividades
            </p>
          </div>

          <div 
            className="bg-card rounded-[15px] p-6 shadow-md flex flex-col"
            data-testid="card-feature-3"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-cerebro-blue shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Material pronto para imprimir e usar imediatamente
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-cerebro-green shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Atividades organizadas por área de desenvolvimento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cerebro-yellow shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Conteúdo atualizado constantemente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
