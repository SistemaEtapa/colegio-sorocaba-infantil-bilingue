import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Fachada from '../../../public/fachada-sorocaba.png'

export function CtaSection() {
  return (
    <section className="max-w-300 w-4/5 mx-auto">
      <Card className="bg-[#0083CB]">
        <CardContent className="grid grid-cols-2 gap-12">
          <Image
            src={Fachada}
            alt=""
            className="rounded-2xl"
          />

          <div className="text-white space-y-15 py-5">
            <h2 className="text-4xl font-bold">
              Agende sua visita e conheça a Educação Infantil do Colégio Sorocaba
            </h2>
            <p className="text-lg">
              Se você busca uma escola em Sorocaba que ofereça educação bilíngue desde os primeiros anos, ensino de qualidade, afeto e uma proposta pedagógica que respeita o tempo e o potencial de cada criança, nosso colégio é o lugar certo! <br /><br />

              Preencha o formulário e agende uma visita. Será um prazer receber sua família e mostrar de perto como construímos uma base forte para a vida escolar!
            </p>
            <Button className="cursor-pointer bg-[#FCAF17] text-[#00650E] font-semibold text-lg">
              Quero conhecer
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}