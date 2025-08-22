import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'

export function Form() {
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numeros = (value.match(/\d+/g) || []).join("");
    setPhoneNumber(numeros);

    setIsPhoneInputValid(numeros.length >= 10 && numeros.length <= 11);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      primeiroNome: formData.get("first_name"),
      sobrenome: formData.get("last_name"),
      telefone: phoneNumber,
      email: formData.get("email"),
      estudante: formData.get("00N4W00000CeUXJ"),
      serie: formData.get("00NV2000001P6OD"),
    };

    try {
      await axios.post(`https://ose-backend-e07eb856ad27.herokuapp.com/sorocaba/create`, data)
      
      window.location.href = 'https://cloud.conteudo.sistemaetapa.com.br/obrigado-sorocaba'
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Card className="bg-[#008F5B] text-white md:w-2/5">
      <form
        className="w-4/5 mx-auto space-y-7 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold">Saiba mais</h3>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col text-xs">
            <Label htmlFor="first_name" className="mb-2">
              Primeiro nome do responsável*
            </Label>
            <Input className="bg-white text-black" type="text" name="first_name" id="first_name" required />
          </div>
          <div className="flex flex-col text-xs">
            <Label htmlFor="last_name" className="mb-2">
              Sobrenome do responsável*
            </Label>
            <Input className="bg-white text-black" type="text" id="last_name" name="last_name" required />
          </div>
          <div className="flex flex-col text-xs">
            <Label htmlFor="mobile" className="mb-2">
              Telefone para contato*
            </Label>
            <Input className="bg-white text-black" value={phoneNumber} type="tel" id="mobile" name="mobile" onChange={(e) => handlePhoneInput(e)} required />
            <span className="text-red-600 ">
              {!isPhoneInputValid && "Insira um telefone válido (entre 10 e 11 caracteres)"}
            </span>
          </div>
          <div className="flex flex-col text-xs">
            <Label htmlFor="email" className="mb-2">
              E-mail*
            </Label>
            <Input className="bg-white text-black" type="email" name="email" id="email" required />
          </div>
          <div className="flex flex-col text-xs">
            <Label htmlFor="00N4W00000CeUXJ" className="mb-2">
              Nome do estudante*
            </Label>
            <Input className="bg-white text-black" type="text" id="00N4W00000CeUXJ" name="00N4W00000CeUXJ" required />
          </div>
          <div className="flex flex-col text-xs">
            <Label htmlFor="00NV2000001P6OD" className="mb-2">
              Série/ano de interesse*
            </Label>
            <select
              id="00NV2000001P6OD"
              name="00NV2000001P6OD"
              title="Série de interesse"
              className="border border-gray-200 p-2 rounded shadow bg-white text-black"
              required
            >
              <option value="">-- Nenhum --</option>
              <option value="Educação Infantil I">Educação Infantil I</option>
              <option value="Educação Infantil II">Educação Infantil II</option>
              <option value="Educação Infantil III">
                Educação Infantil III
              </option>
              <option value="Educação Infantil IV">Educação Infantil IV</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          name="submit"
          className="cursor-pointer bg-[#FCAF17] text-[#00650E] font-semibold px-5 py-3 rounded  transition disabled:!cursor-not-allowed disabled:bg-gray-300"
          disabled={!isPhoneInputValid}
        >
          Quero agendar minha visita
        </button>
      </form>
    </Card>
  );
}
