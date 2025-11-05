import coloringBookImg from '@assets/generated_images/Coloring_book_preview_fd6502bf.png';
import activitiesImg from '@assets/generated_images/Activity_sheets_bundle_7ccfa4e4.png';
import autismGuideImg from '@assets/generated_images/Autism_guide_cover_6a47b603.png';

export default function BonusCards() {
  const bonuses = [
    {
      image: coloringBookImg,
      title: 'Livro de Colorir',
      description: 'Mais de 50 páginas para desenvolver coordenação motora',
      originalPrice: 'R$ 29,90'
    },
    {
      image: activitiesImg,
      title: '50 Atividades Extras',
      description: 'Seleção especial de exercícios complementares',
      originalPrice: 'R$ 39,90'
    },
    {
      image: autismGuideImg,
      title: 'Guia do Autismo',
      description: 'Material especializado para crianças no espectro',
      originalPrice: 'R$ 49,90'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4" data-testid="text-bonus-title">
          Bônus Exclusivos
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Incluídos gratuitamente na sua compra
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white rounded-[15px] p-6 shadow-md hover:shadow-lg transition-shadow"
              data-testid={`card-bonus-${index}`}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={bonus.image} 
                  alt={bonus.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {bonus.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  {bonus.originalPrice}
                </span>
                <span className="text-lg font-bold text-cerebro-green">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
