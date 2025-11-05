export default function Header() {
  return (
    <header className="bg-white py-6 px-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-logo">
            Cérebro em Jogo
          </h1>
          <p className="text-sm md:text-base mt-1">
            <span className="text-cerebro-blue font-semibold">Aprender</span>{" "}
            <span className="text-cerebro-yellow font-semibold">brincando</span>{" "}
            <span className="text-cerebro-green font-semibold">é mais divertido!</span>
          </p>
        </div>
      </div>
    </header>
  );
}
