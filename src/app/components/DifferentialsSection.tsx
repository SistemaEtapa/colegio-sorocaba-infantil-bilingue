import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Logo from '../../../public/logo-sorocaba-branco.png'

export function DifferentialsSection() {

  const cards = [
    {
      title: 'Ambiente seguro, confortável e acolhedor',
      description: 'Com mais de 1.800 m², nossa estrutura conta com espaços pensados para a infância, com mobiliário adequado, áreas lúdicas e recursos que promovem o bem-estar físico e emocional.'
    },
    {
      title: 'Metodologia que prepara para a vida escolar desde cedo',
      description: 'Com o Sistema Etapa como base, nossas crianças aprendem de forma envolvente, progressiva e alinhada à BNCC. A metodologia da Espiral Crescente garante uma construção sólida do conhecimento, respeitando o tempo e as descobertas de cada fase.'
    },
    {
      title: 'Educação bilíngue para formar cidadãos do mundo',
      description: 'A partir do Infantil I, nossos alunos têm aulas de inglês que despertam o interesse pela nova língua de forma lúdica e natural. Com atividades práticas e vivências significativas, o ensino bilíngue amplia o repertório cultural e prepara as crianças para um mundo cada vez mais conectado.'
    },
    {
      title: 'Equipe pedagógica qualificada e atenciosa',
      description: 'Nossos professores atuam com sensibilidade, respeitando as particularidades de cada criança e promovendo um acompanhamento individualizado. Estão sempre atentos às descobertas, conquistas e necessidades dos pequenos, criando um ambiente seguro, acolhedor e estimulante.'
    },
  ]

  return (
    <section id="diferenciais" className="max-w-300 w-4/5 mx-auto flex flex-col items-center gap-8 pb-12 relative">
      <h2 className="text-[#008F5B] text-center text-4xl font-bold md:w-3/5 leading-12">
        Diferenciais da Educação Infantil Bilíngue
        do Colégio Sorocaba
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardContent className="space-y-5">
              <CardTitle className="text-[#008F5B]">
                {card.title}
              </CardTitle>
              <CardDescription>
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <Image
        className="absolute -top-40 -left-40 -z-10"
        src={Logo}
        alt=""
      />
    </section>
  )
}