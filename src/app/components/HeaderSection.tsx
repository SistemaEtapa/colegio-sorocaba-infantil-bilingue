"use client";

import Image from "next/image";
import Logo from "../../../public/logomarca-sorocaba.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function HeaderSection() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="max-w-300 w-4/5 mx-auto flex items-center justify-between py-5">

      <a href="https://www.colegiosorocaba.com.br" target="_blank">
        <Image src={Logo} alt="Colégo Sorocaba" />
      </a>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Abrir menu">
              <Menu size={28} />
            </button>
          </SheetTrigger>

          <SheetContent side="right">
            <nav className="text-[#005596] mt-6 space-y-4 pl-5">
              <Link href="#ensino-bilingue" className="block font-semibold" onClick={handleClose}>
                Ensino Bilíngue
              </Link>
              <Link href="#etapa-idiomas" className="block font-semibold" onClick={handleClose}>
                Etapa Idiomas
              </Link>
              <Link href="#diferenciais" className="block font-semibold" onClick={handleClose}>
                Diferenciais
              </Link>
              <Link href="#grade-curricular" className="block font-semibold" onClick={handleClose}>
                Grade Curricular
              </Link>
              <Link href="#depoimentos" className="block font-semibold" onClick={handleClose}>
                Depoimentos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden md:block">
        <ul className="text-[#005596] flex gap-8 font-semibold">
          <li>
            <Link href="#ensino-bilingue">Ensino Bilíngue</Link>
          </li>
          <li>
            <Link href="#etapa-idiomas">Etapa Idiomas</Link>
          </li>
          <li>
            <Link href="#diferenciais">Diferenciais</Link>
          </li>
          <li>
            <Link href="#grade-curricular">Grade Curricular</Link>
          </li>
          <li>
            <Link href="#depoimentos">Depoimentos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
