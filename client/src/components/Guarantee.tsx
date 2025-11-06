import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[15px] p-8 md:p-12 shadow-lg border-2 border-cerebro-green">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="bg-cerebro-green/10 rounded-full p-6">
                <Shield className="w-20 h-20 text-cerebro-green" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-guarantee-title">
                Garantia de Satisfação 100%
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Experimente o Cérebro em Jogo por 7 dias sem risco!
              </p>
              <p className="text-foreground">
                Se por qualquer motivo você não gostar do material, devolvemos <span className="font-bold text-cerebro-green">100% do seu dinheiro</span> na hora. Sem perguntas, sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
