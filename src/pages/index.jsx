import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { client } from "@/utils/axios";

export default function Home({ categories, banner }) {
  return (
    <main className="text-white  overflow-x-hidden h-full">
      <Hero data={banner} />
      <div className="px-5 lg:px-20">
        <div className="mt-10">
          {categories?.map((item) => (
            <Categories key={item.id} data={item} />
          ))}
        </div>
        <Testimonials />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const { data: categoriesData } = await client.get(
    `/items/section?sort=rank&fields=*,products.product_id.*,products.product_id.images.*&deep[products][_limit]=4`
  );

  console.log(categoriesData);
  const { data: bannerData } = await client.get(
    "/items/banner?fields=*,song.*,song.artists.*,song.artists.artists_id.*,song.artists.artists_id.songs.*,song.artists.artists_id.songs.song_id.*,buy_now_product.*,buy_now_product.images.*"
  );

  return {
    props: {
      categories: categoriesData.data,
      banner: bannerData.data,
    },
  };
};
