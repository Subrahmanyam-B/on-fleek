import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PrevIcon from "/public/assets/previous.svg";
import NextIcon from "/public/assets/next.svg";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import CardPagination from "./CardPagination";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6 pb-12 ">
      <div className="uppercase font-medium text-center">
        OUR Happy customers
      </div>
      <div className="w-[125%] -translate-x-[10%]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>{({ isActive }) => <TestimonialCard isActive={isActive}/>}</SwiperSlide>
          <SwiperSlide>{({ isActive }) => <TestimonialCard isActive={isActive}/>}</SwiperSlide>
          <SwiperSlide>{({ isActive }) => <TestimonialCard isActive={isActive}/>}</SwiperSlide>
          <SwiperSlide>{({ isActive }) => <TestimonialCard isActive={isActive}/>}</SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center gap-16 items-center">
        <button><Image src={PrevIcon} alt="prev" className="h-5 w-5"/></button>
        <CardPagination pages={4}/>
        <button><Image src={NextIcon} alt="next" className="h-5 w-5"/></button>
      </div>
    </div>
  );
};

export default Testimonials;
