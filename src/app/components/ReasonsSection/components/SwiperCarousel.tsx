'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SwiperCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="w-full h-full"
    >
      <SwiperSlide className="h-full">
        <img src="https://placehold.co/472x539" alt="" />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <img src="https://placehold.co/472x539" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}