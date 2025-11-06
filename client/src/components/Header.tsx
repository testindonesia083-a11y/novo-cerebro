export default function Header() {
  return (
    <header className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold" data-testid="text-logo">
          <span className="text-cerebro-yellow">Cére</span>
          <span className="text-cerebro-blue">bro em </span>
          <span className="text-orange-500">Jogo</span>
        </h1>
      </div>
    </header>
  );
}
