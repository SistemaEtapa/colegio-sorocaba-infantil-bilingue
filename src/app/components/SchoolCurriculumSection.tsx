"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Paintbrush, Music, Utensils, Puzzle, BookOpen, UserCheck, Type, Calculator, FlaskConical, Dumbbell, Languages, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SchoolCurriculumSection() {

  const cards = [
    {
      title: 'Arte',
      icon: <Paintbrush size={48} />
    },
    {
      title: 'Música',
      icon: <Music size={48} />
    },
    {
      title: 'Culinária',
      icon: <Utensils size={48} />
    },
    {
      title: 'Lógica e Raciocínio',
      icon: <Puzzle size={48} />
    },
    {
      title: 'Contação de Histórias',
      icon: <BookOpen size={48} />
    },
    {
      title: 'Independência e Autonomia',
      icon: <UserCheck size={48} />
    },
    {
      title: 'Linguagem e Letramento',
      icon: <Type size={48} />
    },
    {
      title: 'Matemática',
      icon: <Calculator size={48} />
    },
    {
      title: 'Laboratórios REDS',
      icon: <FlaskConical size={48} />
    },
    {
      title: 'Educação Física',
      icon: <Dumbbell size={48} />
    },
    {
      title: 'Inglês',
      icon: <Languages size={48} />
    },
    {
      title: 'Fique Esperto (a partir do Infantil IV)',
      icon: <Globe2 size={48} />
    }
  ];


  return (
    <section id="grade-curricular" className="w-4/5 max-w-300 mx-auto bg-[#008F5B] p-12 rounded-2xl">
      <div className="flex flex-col gap-15 justify-center">
        <h2 className="text-center font-bold text-4xl text-white">Conheça a grade curricular para a Educação Infantil</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-full md:!pb-15"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1050: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.title}>
              <Card className="py-10">
                <CardContent className="flex flex-col gap-5 justify-center items-center text-[#005596]">
                  {card.icon}
                  <span className="text-lg">{card.title}</span>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section >
  )
}