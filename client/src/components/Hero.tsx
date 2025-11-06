import heroImage from '@assets/image_1762387320798.png';

export default function Hero() {
  const scrollToOffers = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cerebro-blue"
          data-testid="text-hero-title"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          Descubra 170 Atividades Criativas para o seu Filho!
        </h1>
        
        <p 
          className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed"
          data-testid="text-hero-description"
        >
          O <span className="text-cerebro-yellow">Cérebro em Jogo</span> é um{' '}
          <span className="text-cerebro-blue">kit digital</span> com mais de{' '}
          <span className="text-cerebro-green font-bold">170 atividades</span>{' '}
          lúdicas e inteligentes, para estimular o{' '}
          <span className="text-cerebro-blue">foco</span>,{' '}
          <span className="text-cerebro-yellow">memória</span>,{' '}
          <span className="text-orange-500">criatividade</span> e{' '}
          <span className="text-cerebro-green">raciocínio</span> do seu filho de uma forma divertida com brincadeiras.
        </p>
        
        <div className="mb-8">
          <img 
            src={heroImage} 
            alt="Cérebro em Jogo - +170 Atividades Infantis Educativas" 
            className="w-full max-w-2xl mx-auto rounded-[15px] shadow-lg"
            data-testid="img-hero-banner"
          />
        </div>
        
        <button
          onClick={scrollToOffers}
          className="text-white font-bold text-xl md:text-2xl px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{ backgroundColor: '#009FE3' }}
          data-testid="button-hero-cta"
        >
          Quero Acessar Agora
        </button>
      </div>
    </section>
  );
}
