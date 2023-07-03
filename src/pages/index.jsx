import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { getFetcchURL } from "@/lib";

export default function Home({ categories, banner }) {
  return (
    <main className="text-white px-7 lg:px-20 overflow-x-hidden">
      <Hero data={banner} />
      <div className="mt-10">
        {categories?.map((item) => (
          <Categories key={item.id} data={item} />
        ))}
      </div>
      <Testimonials />
    </main>
  );
}

export const getServerSideProps = async () => {
  const categoriesRes = await fetch(
    getFetcchURL(
      "/items/section?fields=*,products.product_id.*,products.product_id.images.*"
    )
  );
  const bannerRes = await fetch(
    getFetcchURL(
      "/items/banner?fields=*,song.*,buy_now_product.*,buy_now_product.images.*"
    )
  );

  const categoriesData = await categoriesRes.json();
  const bannerData = await bannerRes.json();

  return {
    props: {
      categories: categoriesData.data,
      banner: bannerData.data,
    },
  };
};
