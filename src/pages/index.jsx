import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { client } from "@/utils/axios";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home({ categories, banner, count }) {
  const [showCategories, setShowCategories] = useState(categories);
  const observe = useRef(null);
  const getMoreCategories = useCallback(async () => {
    try {
      if (showCategories.length >= count) return;
      const { data } = await client.get(
        `/items/section?sort=rank&fields=*,products.product_id.*,products.product_id.images.*&deep[products][_limit]=4&limit=1&offset=${showCategories.length}`
      );
      setShowCategories((prev) => [...prev, ...data.data]);
    } catch (e) {
      console.log(e.response.data);
    }
  }, [count, showCategories.length]);

  const lastSection = useCallback(
    (node) => {
      if (!node) return;
      if (observe.current) observe.current.disconnect();
      observe.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getMoreCategories();
        }
      });
      observe.current.observe(node);
    },
    [getMoreCategories]
  );

  return (
    <main className="text-white  overflow-x-hidden h-full">
      <Hero data={banner} />
      <div className="px-5 lg:px-20">
        <div className="mt-10">
          {showCategories?.map((item, i) => (
            <Categories
              key={item.id}
              data={item}
              ref={i === showCategories.length - 1 ? lastSection : null}
            />
          ))}
        </div>
        <Testimonials />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const { data: categoriesData } = await client.get(
    `/items/section?sort=rank&fields=*,products.product_id.*,products.product_id.images.*&deep[products][_limit]=4&limit=1&meta=total_count`
  );

  const { data: bannerData } = await client.get(
    "/items/banner?fields=*,song.*,song.artists.*,song.artists.artists_id.*,song.artists.artists_id.songs.*,song.artists.artists_id.songs.song_id.*,buy_now_product.*,buy_now_product.images.*"
  );

  return {
    props: {
      categories: categoriesData.data,
      banner: bannerData.data,
      count: categoriesData.meta.total_count,
    },
  };
};
