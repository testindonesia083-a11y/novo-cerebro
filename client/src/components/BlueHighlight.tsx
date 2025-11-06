export default function BlueHighlight() {
  const benefits = [
    'Materiais testados e aprovados por educadores',
    'Atividades para todas as idades',
    'Fácil de usar - basta imprimir',
    'Acesso 100% digital, imediato após a compra',
    'Garantia de 7 dias - satisfação total',
    'Suporte dedicado para dúvidas'
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#009FE3' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10" data-testid="text-benefits-title">
          Por que escolher nosso material?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 text-white"
              data-testid={`benefit-item-${index}`}
            >
              <span className="text-2xl shrink-0">✅</span>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
