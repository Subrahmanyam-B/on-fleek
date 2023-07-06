import Categories from "@/components/Categories";
import ImageViewer from "@/components/ImageViewer";
import { client } from "@/utils/axios";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = ({ data, sectionData }) => {
  const [content, setContent] = React.useState();

  const router = useRouter();

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
          {/* <div className="mb-5 text-sm text-white/50">
            <span className="underline underline-offset-8">Main page </span> /{" "}
            <span className="underline underline-offset-8">Catalog</span> /{" "}
            <span className="underline underline-offset-8">Coat & Jackets</span>
          </div> */}
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
          <button
            className="bg-primary text-center py-4 w-full mt-9 font-medium"
            onClick={() => router.push(process.env.NEXT_PUBLIC_REDIRECT_URL)}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div>
        {sectionData?.map((item, i) => (
          <Categories key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;

    const { data: products } = await client.get(
      `/items/product/${id}?fields=*,images.*,sections.*,sections.section_id.*`
    );

    const sections = products.data.sections.map((item) => item.section_id.id);

    console.log(sections.join(","));

    const { data: sectionData } = await client.get(`/items/section`, {
      params: {
        fields: "*,products.product_id.*,products.product_id.images.*",
        "filter[id][_in]": sections.join(","),
        "deep[products][_filter][product_id][_neq]": id,
        "deep[products][_limit]": 4,
      },
    });

    return {
      props: {
        data: products.data,
        sectionData: sectionData.data,
      },
    };
  } catch (e) {
    console.log(e.response.data);
    return { props: {} };
  }
}

export default Index;
