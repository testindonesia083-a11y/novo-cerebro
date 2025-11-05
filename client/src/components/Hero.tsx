export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          data-testid="text-hero-title"
        >
          Desenvolvimento Intelectual das Crianças
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-description">
          Materiais educativos completos para estimular o raciocínio lógico, 
          atenção e criatividade dos pequenos de forma divertida e eficaz.
        </p>
      </div>
    </section>
  );
}
