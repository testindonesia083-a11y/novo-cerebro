import activitiesImage from '@assets/0d2512b3-201e-4436-908d-6ecbbc8bd946_1762389388301.png';

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cerebro-green mb-12" data-testid="text-features-title">
          Um Material Completo Didático e Prático
        </h2>
        <div className="flex justify-center">
          <img 
            src={activitiesImage} 
            alt="Material Completo de Atividades" 
            className="max-w-2xl w-full h-auto rounded-[15px] shadow-lg"
            data-testid="img-activities-preview"
          />
        </div>
      </div>
    </section>
  );
}
