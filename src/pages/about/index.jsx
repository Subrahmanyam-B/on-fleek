import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-20 text-white md:px-20 px-5 pb-20 space-y-5">
        <div className="text-primary uppercase text-center text-xl">
          About Us
        </div>
        <div className="md:px-52 px-5 pb-10">
          Our e-commerce site is more than just an online store. It&apos;s a
          fashion destination that combines convenience, variety, and
          exceptional customer service. We strive to provide a memorable
          shopping experience that keeps you coming back for more. So, start
          exploring our collection today and let us help you express your unique
          style through our carefully curated clothing options.
        </div>
        <div className="flex">
          <div className="w-full flex flex-col items-center gap-5">
            <div className="bg-white/30 rounded-full w-28 h-28"></div>
            <div className="space-y-0.5 text-center text-sm">
              <div className="text-base">Shaik Zeeshan</div>
              <div>Founder</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
