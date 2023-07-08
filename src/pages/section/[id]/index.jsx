import Product from "@/components/Product";
import { client } from "@/utils/axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Pagination = ({ count, limit, offset }) => {
  const router = useRouter();

  const total = Math.ceil(count / limit);
  const current = Math.ceil(offset / limit);

  console.log(total, current);

  const [currpage, setCurrPage] = useState(1);

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const page = [...Array(total).keys()];

  return (
    <>
      <div className="mt-5 flex items-center gap-5">
        <button
          className=" disabled:text-white/50"
          disabled={currpage === 1}
          onClick={() => setCurrPage((prev) => prev - 1)}
        >
          PREV
        </button>
        <div className=" flex text-sm gap-2">
          {paginate(page, 3, currpage).map((item, i) => (
            <button
              key={i}
              className={`w-5 h-6 grid place-items-center ${
                current === item ? "bg-primary" : ""
              }`}
              onClick={() => {
                router.push(
                  `/section/${router.query.id}?offset=${item * limit}`
                );
              }}
            >
              {item + 1}
            </button>
          ))}
        </div>
        <button
          className=" disabled:text-white/50"
          disabled={currpage === page.length || !(page.length > 3)}
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

const limit = 2;

export default function Page({ data, products, count }) {
  const router = useRouter();

  const { offset } = router.query;

  return (
    <>
      <div className="w-full h-full text-white md:p-10 p-8 px-5 mt-20">
        <div className="lg:text-xl uppercase text-center">{data?.title}</div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 mt-5">
          {data ? (
            <>
              {products?.map((item, i) => (
                <Product key={i} data={item} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <Pagination count={count} limit={limit} offset={offset ? offset : 0} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query }) {
  try {
    const { id } = params;
    const { offset } = query;
    const { data: section } = await client.get(`/items/section/${id}`);
    const { data: products } = await client.get("/items/product", {
      params: {
        fields: "*,images.*,sections.*,sections.section_id",
        "filter[sections][section_id][_eq]": id,
        limit: limit,
        offset: offset ? offset : 0,
        meta: "filter_count",
      },
    });
    return {
      props: {
        data: section.data,
        products: products.data,
        count: products.meta.filter_count,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
