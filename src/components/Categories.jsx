import Image from "next/image";
import ViewMOre from "/public/assets/arrow-right.svg";
import Product from "./Product";
import Link from "next/link";
import { forwardRef } from "react";

const Categories = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <div className=" text-sm flex justify-between mb-6">
        <div className="lg:text-lg uppercase">{data?.title}</div>
        <Link
          className="flex text-primary gap-2 md:text-base items-center"
          href={`/section/${data?.id}`}
        >
          View More
          <Image src={ViewMOre} alt="" className="lg:h-5 lg:w-auto" />
        </Link>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-12 products ">
        {data?.products.map((product, i) => (
          <Product key={i} data={product.product_id} />
        ))}
      </div>
    </div>
  );
});

Categories.displayName = "Categories";

export default Categories;
