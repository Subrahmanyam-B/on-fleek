import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "/public/assets/hero.svg";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="text-white px-7 lg:px-20">
      <div className="relative text-white bg-black h-[21rem] lg:h-[40rem]">
        <div className="flex justify-center absolute w-full">
          <Image src={Hero} alt="hero" className="h-[20rem] w-[15rem] lg:h-[40rem] lg:w-auto" />
        </div>
        <div className="h-[20rem] lg:h-[40rem] flex flex-col justify-center items-center absolute w-full gap-2 lg:gap-6">
          <div className="text-[1.25rem] font-bold tracking-widest lg:text-7xl">Fashion Made Effortless</div>
          <div className="text-xs lg:text-xl font-light text-center leading-tight px-6 max-w-[50rem] text-[#ffffff80]">Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
          <button className="uppercase bg-primary px-7 py-3 mt-3 lg:mt-6 lg:px-10 lg:py-5">Shop Now</button>
        </div>
      </div>
      <div>
        <Categories/>
        <Categories/>
        <Categories/>
        <Categories/>
      </div>
      <Testimonials/>
    </main>
  );
}
