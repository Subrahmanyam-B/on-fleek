import Image from "next/image";
import React from "react";
import Product from "/public/assets/image1.png";

const ImageViewer = () => {
  return (
    <div className="relative flex">
      <Image src={Product} alt="image" className="lg:h-[60rem] h-[27.5rem] w-auto pr-10" />
      <div className="flex flex-col gap-4 absolute -right-[10%] justify-center lg:h-[60rem] h-[27.5rem] pr-10">
        <Image src={Product} alt="image" className="lg:h-[13rem] h-[5rem] w-auto" />
        <Image src={Product} alt="image" className="lg:h-[13rem] h-[5rem] w-auto" />
        <Image src={Product} alt="image" className="lg:h-[13rem] h-[5rem] w-auto" />
        <Image src={Product} alt="image" className="lg:h-[13rem] h-[5rem] w-auto" />
      </div>
    </div>
  );
};

export default ImageViewer;
