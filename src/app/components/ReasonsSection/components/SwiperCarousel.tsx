'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SwiperCarousel() {
  const images = [
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/3e2fb17e-3364-4bc8-a459-31fbc5d9a6b8.jpg',
      alt: 'Duas meninas pequenas usando uniforme escolar do Colégio Sorocaba observam um objeto colorido com curiosidade em sala de aula.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/d1db4ec2-c5df-41fd-8ee1-d315ad7fb1a1.jpg',
      alt: 'Criança com cabelos cacheados loiros olha pela janela de uma casinha de brinquedo amarela em um parquinho, com outras crianças brincando ao fundo.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/17bf5943-5019-4c0d-9c9f-a64502dcff3f.jpg',
      alt: 'Crianças pequenas em sala de aula montam estruturas com blocos de madeira, acompanhadas por uma professora.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/174fd3b9-8399-4442-9d17-f23886b40ba5.jpg',
      alt: 'Duas crianças brincam na casinha de brinquedo amarela; um menino toca levemente o rosto da menina, que sorri e pisca um olho.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/a9cc4eac-1ff0-4de5-9715-d1a0a8e89d26.jpg',
      alt: 'Menino segura e observa atentamente um ábaco colorido em sala de aula decorada com desenhos de crianças e notas musicais.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/5b5b23f0-8c98-439f-8738-6cafafab4875.jpg',
      alt: 'Criança de cabelos cacheados escreve com lápis azul em sala de aula, acompanhada por uma professora.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/5f3e4f8b-692a-469d-884f-933e37afd903.jpg',
      alt: 'Crianças sentadas em roda participam de atividade musical, enquanto uma delas segura um pandeiro e a professora bate palmas.',
    },
    {
      src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/b8c3af7b-381d-4fe0-8ea6-5fc743bb1110.jpg',
      alt: 'Menino sentado no chão sorri enquanto bate palmas durante atividade em grupo com outras crianças na sala de aula.',
    },
  ]

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="w-full xl:h-full"
    >
      {images.map((image) => (
        <SwiperSlide className="xl:h-full" key={image.src}>
          <img src={image.src} alt="" className="xl:h-full object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}