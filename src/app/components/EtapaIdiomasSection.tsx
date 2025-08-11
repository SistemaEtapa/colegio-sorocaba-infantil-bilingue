import Image from 'next/image'
import ImageEtapaIdiomas from '../../../public/etapa-idiomas.png'

export function EtapaIdiomasSection() {
  return (
    <div id='etapa-idiomas' className="max-w-300 w-4/5 mx-auto pb-12">
      <section className="grid grid-cols-2">
        <div className="p-15 text-white rounded-l-3xl rounded-bl-3xl bg-[#005596] space-y-8">
          <h2 className='font-bold text-4xl leading-12'>Etapa Idiomas: educação bilíngue em uma jornada prazerosa</h2>
          <p className='text-lg'>
            No Colégio Sorocaba, utilizamos o programa Etapa Idiomas, que vai além do vocabulário. Com ele, o inglês se torna parte do dia a dia dos alunos por meio de:
          </p>
          <ul className="list-disc pl-15 space-y-2">
            <li>Música, contação de histórias e brincadeiras;</li>
            <li>Atividades que estimulam a oralidade e a escuta;</li>
            <li>Abordagem afetiva, respeitando o ritmo de cada criança;</li>
            <li>Desenvolvimento cognitivo aliado à linguagem.</li>
          </ul>
        </div>

        <Image src={ImageEtapaIdiomas} alt="Ilustração colorida com rostos de crianças e animais desenhados em estilo cartoon, acompanhada da frase ‘Somos cidadãos do mundo, somos bilíngues! Uma nova forma de aprender.’ em destaque no centro." />
      </section>
    </div>
  )
}