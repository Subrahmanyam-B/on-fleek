import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-20 text-white px-20 pb-20 space-y-5">
        <div className="text-primary uppercase text-center text-xl">
          About Us
        </div>
        <div className="flex">
          <div className="w-1/2 flex flex-col items-center gap-5">
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
