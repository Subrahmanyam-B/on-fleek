import Product from "@/components/Product";
import { client } from "@/utils/axios";

export default function Page({ data }) {
  return (
    <>
      <div className="w-full h-full text-white md:p-10 p-8 px-5">
        <div className="lg:text-xl uppercase text-center">{data?.title}</div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 mt-5">
          {data ? (
            <>
              {data.products.map((item, i) => (
                <Product key={i} data={item.product_id} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const { data: section } = await client.get(`/items/section/${id}`, {
      params: {
        fields:
          "*,products.*,products.product_id.*,products.product_id.images.*",
      },
    });
    return {
      props: {
        data: section.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
