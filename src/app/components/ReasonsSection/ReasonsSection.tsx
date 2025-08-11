import Image from "next/image";
import { SwiperCarousel } from "./components/SwiperCarousel";
import Logo from '../../../../public/logo-sorocaba-branco.png'

export function ReasonSection() {

  return (
    <div id="ensino-bilingue" className="max-w-300 w-4/5 mx-auto py-12 grid grid-cols-2 relative z-10">
      <section className="px-5">
        <SwiperCarousel />
      </section>

      <section className="w-4/5 space-y-8">
        <h2 className="text-4xl text-[#008F5B] font-bold leading-12">
          Por que aprender inglês durante a Educação Infantil?
        </h2>
        <p className="font-medium leading-8 text-[#71717A]">
          Ter aulas de inglês desde a primeira infância contribui para que as crianças desenvolvam familiaridade com o idioma.
          Isso porque, nessa fase da vida, o cérebro está mais receptivo à aquisição de novas línguas. Desta forma, ela aprende de forma intuitiva, assim como aprendeu sua língua materna:
          por meio da escuta, repetição e associação com o cotidiano.
          <br /><br />
          Além disso, ter um ensino bilíngue durante a Educação Infantil permite que a criança entre em contato com diferentes culturas, ampliando sua visão de mundo desde cedo e contribuindo para a formação de uma identidade
          mais aberta, empática e curiosa.
        </p>
      </section>
      <Image
        className="absolute top-15 right-0 -z-10"
        src={Logo}
        alt=""
      />
    </div>
  )
}