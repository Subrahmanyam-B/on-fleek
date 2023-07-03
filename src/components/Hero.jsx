import Image from "next/image";
import HeroImage from "/public/assets/hero.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import MusicPlayer from "@/components/MusicPlayer";

import { useState } from "react";
import SongsPortal from "./SongsPortal";
import { getAssetsURl } from "@/lib";
import Link from "next/link";

const Hero = ({ data }) => {
  const [swiper, setSwiper] = useState(null);

  const [active, setActive] = useState(0);

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative text-white bg-black h-[21rem] lg:h-[40rem]">
                <div className="flex justify-center absolute w-full bg-transparent">
                  <Image
                    src={getAssetsURl(item?.media)}
                    alt="hero"
                    className="h-[20rem] w-[15rem] lg:h-[40rem] lg:w-auto"
                    width={240}
                    height={350}
                  />
                  {/* <Testimonials/> */}
                </div>
                <div className="h-[20rem] lg:h-[40rem] flex flex-col justify-center items-center absolute w-full gap-2 lg:gap-6 ">
                  <div className="text-[1.25rem] font-bold tracking-widest lg:text-7xl">
                    {item?.headline}
                  </div>
                  <div className="text-xs lg:text-xl font-light text-center leading-tight px-6 max-w-[50rem] text-[#ffffff80]">
                    {item?.body}
                  </div>
                  <Link
                    className="uppercase bg-primary px-7 py-3 mt-3 lg:mt-6 lg:px-10 lg:py-5"
                    href={`/product/${item?.buy_now_product.id}`}
                  >
                    Shop Now
                  </Link>
                </div>
                <MusicPlayer
                  active={active === index}
                  setOpen={setIsPortalOpen}
                  data={item?.song}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SongsPortal isOpen={isPortalOpen} setOpen={setIsPortalOpen} />
    </>
  );
};

export default Hero;
