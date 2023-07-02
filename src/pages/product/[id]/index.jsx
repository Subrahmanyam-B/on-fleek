import Categories from "@/components/Categories";
import ImageViewer from "@/components/ImageViewer";
import React from "react";

const Index = () => {
  return (
    <div className="text-white px-8">
      <div className="">
        <span className="underline underline-offset-8">Main page </span> /{" "}
        <span className="underline underline-offset-8">Catalog</span> /{" "}
        <span className="underline underline-offset-8">Coat & Jackets</span>
      </div>
      <div className="pt-10 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex">
          <ImageViewer />
        </div>
        <div className="lg:px-20">
          <div className="font-bold ">
            <div className="tracking-widest">
              WAISTCOAT WITH CONTRAST PIPING
            </div>
            <div className="py-4">₹5,990.00</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-sm uppercase font-medium text-[#ffffff40] tracking-widest">
                description
              </div>
              <div className="text-xs">
                Round neck waistcoat featuring front welt pockets, contrast
                trims, a pleat in the back and metal appliqué fastening in the
                front.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-sm uppercase font-medium text-[#ffffff40] tracking-widest">
                summary
              </div>
              <div className="text-xs">
                Color: Navy Blue <br /> Height of model: 177 cm. / <br /> 5′ 9″
                2388/749
              </div>
            </div>
          </div>
          <button className="bg-primary text-center py-4 w-full mt-9 font-medium">
            Buy Now
          </button>
        </div>
      </div>
      <div>
        <Categories />
        <Categories />
      </div>
    </div>
  );
};

export default Index;
