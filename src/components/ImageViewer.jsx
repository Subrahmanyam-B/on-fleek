import Image from "next/image";
import React from "react";
import { getAssetsURl } from "@/utils/lib";

const ImageViewer = ({ images }) => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="relative flex w-full h-max">
      <div className="relative lg:h-[45rem] h-[27.5rem] w-full pr-10">
        <Image
          src={getAssetsURl(images?.[active].directus_files_id)}
          alt="image"
          className="w-full h-full object-contain"
          fill
        />
      </div>
      <div className="flex flex-col gap-4 absolute -right-[10%] justify-center lg:h-full h-full pr-10">
        {images?.map((image, i) => (
          <button
            key={i}
            className="w-full shadow-lg"
            onClick={() => setActive(i)}
          >
            <Image
              src={getAssetsURl(image.directus_files_id)}
              alt="image"
              className="lg:h-[10rem] sm:h-[8rem] h-[5rem] w-full"
              width={1440}
              height={960}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
