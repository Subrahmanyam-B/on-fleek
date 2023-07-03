import Image from "next/image";
import React from "react";
import Cover from "/public/assets/product.svg";
import Link from "next/link";
import { getAssetsURl } from "@/lib";

const Product = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Link href={`/product/${data.id}`} className="flex flex-col gap-4">
      <div className="relative flex justify-center w-full md:h-96 h-72">
        <Image
          src={getAssetsURl(data?.images[0].directus_files_id)}
          alt="cover-image"
          className="h-full w-full"
          fill
        />
      </div>
      <div className="text-xs lg:text-sm uppercase flex flex-col gap-2">
        <div className="">{data?.title}</div>
        <div className="font-bold">{formatter.format(data.price)}</div>
      </div>
    </Link>
  );
};

export default Product;
