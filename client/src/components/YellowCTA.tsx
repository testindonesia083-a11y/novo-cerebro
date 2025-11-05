export default function YellowCTA() {
  const handleClick = () => {
    console.log('Receber agora clicked');
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFD600' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-cta-title">
          Comece agora a transformar o aprendizado!
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          Acesso imediato a todo o material educativo
        </p>
        <button
          onClick={handleClick}
          className="text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{ backgroundColor: '#00B050' }}
          data-testid="button-cta-main"
        >
          Receber agora
        </button>
      </div>
    </section>
  );
}
