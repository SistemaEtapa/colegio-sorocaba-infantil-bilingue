import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from '../../../public/logo-sorocaba-branco.png'

export function TestemonialsSection() {
  return (
    <section id="depoimentos" className="relative max-w-300 w-4/5 mx-auto flex flex-col gap-10 py-12 items-center">
      <h2 className="font-bold text-4xl text-[#008f5b]">O que dizem sobre o Colégio Sorocaba</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="space-y-5">
            <p className="text-[#71717A]">
              Muito bom Colégio! Particularmente, meu filho ama o método de ensino deles. Os professores são super comprometidos com o aprendizado dos alunos, muito bem qualificados. A diretora, então, um amor de pessoa! Estou muito satisfeita.
            </p>
            <div className="flex flex-col">
              <span className="text-[#005596] text-lg font-semibold">— Vanelma Alves</span>
              <span className="text-[#3B3B3B] pl-6">mãe de aluno</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-5">
            <p className="text-[#71717A]">
              A escola é ótima! Os professores são super atenciosos, sempre nos ajudam com alguma dúvida. A direção sempre nos atende com qualquer coisa que precisamos. O ensino da escola é bem avançado, com ótimas apostilas. Minha experiência está sendo maravilhosa!
            </p>
            <div className="flex flex-col">
              <span className="text-[#005596] text-lg font-semibold">— Gabriel Montino</span>
              <span className="text-[#3B3B3B] pl-6">aluno do Ensino Médio</span>
            </div>
          </CardContent>
        </Card>
      </div>


      <Image
        className="absolute -top-20 -right-25 -z-10"
        src={Logo}
        alt=""
      />
    </section>
  )
}