import { Users, TrendingUp, Star, School } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '15.000+',
      label: 'Pessoas Ativas',
      color: 'text-cerebro-blue'
    },
    {
      icon: TrendingUp,
      value: '97%',
      label: 'Recomendam',
      color: 'text-cerebro-green'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Avaliação Média',
      color: 'text-cerebro-yellow'
    },
    {
      icon: School,
      value: '200+',
      label: 'Escolas Usando',
      color: 'text-cerebro-blue'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="flex justify-center mb-3">
                  <Icon className={`w-12 h-12 ${stat.color}`} />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
