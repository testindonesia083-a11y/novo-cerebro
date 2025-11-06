import { Star } from 'lucide-react';
import mariaSantosImg from '@assets/stock_images/professional_woman_s_ad2dbd7b.jpg';
import anaPaulaCostaImg from '@assets/stock_images/professional_female__79fe13c5.jpg';
import carlosAlmeidaImg from '@assets/stock_images/professional_man_smi_2aba5f94.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Mãe de 2 crianças',
      text: 'Meu filho de 5 anos adorou! As atividades são criativas e educativas. Vi uma melhora significativa na concentração dele em apenas 2 semanas.',
      rating: 5,
      image: mariaSantosImg
    },
    {
      name: 'Ana Paula Costa',
      role: 'Professora de Educação Infantil',
      text: 'Material excepcional! Uso em sala de aula e os alunos se divertem enquanto aprendem. Super recomendo para pais e educadores.',
      rating: 5,
      image: anaPaulaCostaImg
    },
    {
      name: 'Carlos Almeida',
      role: 'Pai e Pedagogo',
      text: 'Comprei para minha filha que tem TDAH e os resultados foram incríveis. As atividades são perfeitas para manter ela focada e engajada.',
      rating: 5,
      image: carlosAlmeidaImg
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-testimonials-title">
          O que dizem os pais e educadores
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-[15px] p-6 shadow-md hover:shadow-lg transition-shadow"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cerebro-yellow text-cerebro-yellow" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
