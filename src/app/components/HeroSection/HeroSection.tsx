"use client";

import { Form } from "./components/Form";

export function HeroSection() {
  return (
    <div id="form" className="bg-[#F5F5F5] py-10">
      <section
        className="relative z-1 w-4/5 max-w-300 mx-auto flex flex-col md:flex-row justify-between gap-5"
      >
        <div className="w-full flex flex-col gap-5 text-center md:pl-10 md:w-3/5 md:text-start">
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-15 text-[#008F5B]">
            Colégio Sorocaba: <br />
            <span className="text-[#005596]">
              Educação Infantil <br /> bilíngue
            </span> para formar cidadãos do mundo
          </h1>

          <h2 className="italic text-xl md:text-3xl text-[#008F5B] font-semibold">
            Base forte, carinho no acolhimento e inglês <br /> desde o Infantil I com o Etapa Idiomas
          </h2>

          <p className="text-[#3b3b3b] md:font-medium leading-7 md:w-4/5">
            No Colégio Sorocaba, acreditamos que aprender inglês desde cedo é mais do que um diferencial — é um investimento no futuro. Com o programa Etapa Idiomas, nossos alunos vivem uma imersão lúdica e significativa no idioma, com atividades que respeitam o tempo e despertam o interesse natural pela nova língua.
          </p>
        </div>

        <Form />
      </section>
    </div>
  );
}