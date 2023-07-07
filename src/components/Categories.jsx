import Image from "next/image";
import ViewMOre from "/public/assets/arrow-right.svg";
import Product from "./Product";
import Link from "next/link";

const Categories = ({ data }) => {
  return (
    <div>
      <div className="uppercase text-sm flex justify-between mb-6 lg:mb-12">
        <div className="lg:text-lg">{data?.title}</div>
        <Link
          className="flex text-primary gap-2 lg:text-lg items-center"
          href={`/section/${data?.id}`}
        >
          View More
          <Image src={ViewMOre} alt="" className="lg:h-[2rem] lg:w-auto" />
        </Link>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-12">
        {data?.products.map((product, i) => (
          <Product key={i} data={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
