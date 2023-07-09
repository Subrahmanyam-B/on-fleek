import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getAssetsURl } from "@/utils/lib";

const Product = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Link href={`/product/${data?.id}`} className="flex flex-col gap-4 product">
      <div className="relative flex justify-center w-full md:h-96 h-60">
        <Image
          src={getAssetsURl(data?.images[0].directus_files_id)}
          alt="cover-image"
          className="object-cover object-top"
          fill
          quality={100}
        />
      </div>
      <div className="text-xs lg:text-sm uppercase flex justify-between flex-col gap-1">
        <div className=" line-clamp-2">{data?.title}</div>
        <div className="font-bold">{formatter.format(data?.price)}</div>
      </div>
    </Link>
  );
};

export default Product;
