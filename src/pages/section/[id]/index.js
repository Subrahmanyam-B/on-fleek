import Product from "@/components/Product";
import { client } from "@/utils/axios";

export default function Page({ data }) {
  return (
    <>
      <div className="w-full h-full text-white md:p-10 p-8 ">
        <div className="lg:text-2xl uppercase font-medium">{data?.title}</div>
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
    // /items/section/e76436ff-0c0b-48ac-9c34-5e723e0298e0?fields=*,products.product_id.*&deep[products]
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
