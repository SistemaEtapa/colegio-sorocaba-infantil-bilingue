'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export function SwiperCarousel() {
  const images = [
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/3e2fb17e-3364-4bc8-a459-31fbc5d9a6b8.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/30d76c99-8b56-430e-bc5e-3fb16a0b5176.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/d1db4ec2-c5df-41fd-8ee1-d315ad7fb1a1.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/17bf5943-5019-4c0d-9c9f-a64502dcff3f.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/174fd3b9-8399-4442-9d17-f23886b40ba5.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/a9cc4eac-1ff0-4de5-9715-d1a0a8e89d26.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/5b5b23f0-8c98-439f-8738-6cafafab4875.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/5f3e4f8b-692a-469d-884f-933e37afd903.jpg' },
    { src: 'https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/b8c3af7b-381d-4fe0-8ea6-5fc743bb1110.jpg' },
  ]

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="w-full h-full"
    >
      {images.map((image) => (
        <SwiperSlide className="h-full" key={image.src}>
          <img src={image.src} alt="" className="h-full object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}