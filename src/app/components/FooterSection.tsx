import logoSorocaba from "../../../public/logomarca-sorocaba.png";
import logoEtapa from "../../../public/logo-etapa.png";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="max-w-300 w-4/5 mx-auto flex flex-col">
      <div className="flex justify-between items-center py-10">
        <div className="flex flex-col items-center gap-7 md:flex-row">
          <a href="https://www.colegiosorocaba.com.br/" target="_blank">
            <Image src={logoSorocaba} alt='Colégio Sorocaba' />
          </a>

          <a href="https://www.sistemaetapa.com.br/" target="_blank">
            <Image src={logoEtapa} width={120} alt='Sistema Etapa' />
          </a>
        </div>

        <div className="flex flex-col w-2/5 gap-2 text-[#3B3B3B] md:w-1/5 md:gap-5 ">
          <address className="">
            R. Atanázio Soares, 3700 - Jardim Maria Eugênia, Sorocaba - SP, 18074-3
          </address>
          <p><strong>Telefone</strong> (15) 3226-3025</p>
        </div>
      </div>

      <div className="border-t-2 border-[#3B3B3B] text-[#3B3B3B] text-center py-5">
        Etapa Educacional © 2025. Todos os direitos reservados.
      </div>

    </footer>
  );
}