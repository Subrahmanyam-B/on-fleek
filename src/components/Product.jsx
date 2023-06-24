import Image from "next/image";
import React from "react";
import Cover from "/public/assets/product.svg";
import Link from "next/link";

const Product = () => {
  return (
    <Link href={'/product/1'} className="flex flex-col gap-4">
      <div className="relative flex justify-center">
        <Image src={Cover} alt="cover-image" className="h-full w-full" />
      </div>
      <div className="text-xs lg:text-sm uppercase flex flex-col gap-2">
         <div className="">WAISTCOAT WITH CONTRAST PIPING</div>
         <div className="font-bold">₹5,990.00</div>
      </div>
    </Link>
  );
};

export default Product;
