import Image from "next/image";
import ViewMOre from "/public/assets/arrow-right.svg";
import Product from "./Product";

const Categories = () => {
  return (
    <div>
      <div className="uppercase text-sm font-medium flex justify-between mb-6 lg:mb-12">
        <div className="lg:text-3xl">Limited Time Deals</div>
        <div className="flex text-primary gap-2 lg:text-2xl items-center">View More <Image src={ViewMOre} alt="" className="lg:h-[2rem] lg:w-auto"/></div>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-12">
         <Product/>
         <Product/>
         <Product/>
         <Product/>
      </div>
    </div>
  );
};

export default Categories;
