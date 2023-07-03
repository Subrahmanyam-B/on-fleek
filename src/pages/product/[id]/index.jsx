import Categories from "@/components/Categories";
import ImageViewer from "@/components/ImageViewer";
import { getFetcchURL } from "@/lib";
import React, { useEffect } from "react";

const Index = ({ data, sectionData }) => {
  const [content, setContent] = React.useState();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    if (data?.summary) {
      setContent({ __html: data?.summary });
    }
  }, [data?.summary]);

  return (
    <div className="text-white px-8">
      <div className="pt-10 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex">
          <ImageViewer images={data?.images} />
        </div>
        <div className="lg:px-20">
          <div className="mb-5 text-sm text-white/50">
            <span className="underline underline-offset-8">Main page </span> /{" "}
            <span className="underline underline-offset-8">Catalog</span> /{" "}
            <span className="underline underline-offset-8">Coat & Jackets</span>
          </div>
          <div className="font-bold ">
            <div className="tracking-widest">{data?.title}</div>
            <div className="py-4">{formatter.format(data?.price)}</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-sm uppercase font-medium text-[#ffffff40] tracking-widest">
                description
              </div>
              <div className="text-xs">{data?.description}</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-sm uppercase font-medium text-[#ffffff40] tracking-widest">
                summary
              </div>
              <div className="text-xs" dangerouslySetInnerHTML={content}></div>
            </div>
          </div>
          <button className="bg-primary text-center py-4 w-full mt-9 font-medium">
            Buy Now
          </button>
        </div>
      </div>
      <div>
        <Categories data={sectionData} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const sectionIdRes = await fetch(
    getFetcchURL(
      `/items/section?fields=*,products.product_id.*,products.product_id.images.*&deep[products][_filter][product_id][_eq]=${id}`
    )
  );

  const sectionIdData = await sectionIdRes.json();

  const sectionID = sectionIdData.data[0].id;

  const sectionRes = await fetch(
    getFetcchURL(
      `/items/section/${sectionID}?fields=*,products.product_id.*,products.product_id.images.*&deep[products][_filter][product_id][_neq]=${id}`
    )
  );

  const data = sectionIdData.data[0].products[0].product_id;
  const sectionData = await sectionRes.json();
  return {
    props: {
      data: data,
      sectionData: sectionData.data,
    },
  };
}

export default Index;
