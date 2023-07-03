import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import PrevIcon from "/public/assets/previous.svg";
import NextIcon from "/public/assets/next.svg";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import CardPagination from "./CardPagination";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(swiper?.activeIndex);
  }, [swiper]);

  return (
    <div className="flex flex-col gap-6 pb-12 ">
      <div className="uppercase font-medium text-center">
        OUR Happy customers
      </div>
      <div className="w-[125%] -translate-x-[10%] xl:px-none px-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            720: { slidesPerView: 3, spaceBetween: 50 },
          }}
          centeredSlides={true}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        >
          <SwiperSlide>
            {({ isActive }) => <TestimonialCard isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <TestimonialCard isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <TestimonialCard isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <TestimonialCard isActive={isActive} />}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center gap-16 items-center">
        <button onClick={() => swiper.slidePrev()}>
          <Image src={PrevIcon} alt="prev" className="h-5 w-5" />
        </button>
        <CardPagination pages={4} active={active} />
        <button onClick={() => swiper.slideNext()}>
          <Image src={NextIcon} alt="next" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
