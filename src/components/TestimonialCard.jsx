import Image from "next/image";
import Testimonial from "/public/assets/testimonial.svg";

const TestimonialCard = ({ isActive }) => {
  return (
    <div
      className={`bg-white text-black rounded-lg p-3 lg:p-5 lg:rounded-xl flex gap-3 max-h-[22.5rem] max-w-[45rem] ${
        isActive ? "opacity-100 " : "opacity-50"
      }`}
    >
      <div className="relative w-[40%]">
        <Image src={Testimonial} alt="image" className="w-full" />
      </div>
      <div className="w-1/2">
        <div className="text-[9px] leading-tight lg:text-xs">
          Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum
          id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad
          magnam blanditiis excepturi expedita aut. Aut repellat{" "}
        </div>
        <div className="uppercase text-[10px] pt-2 lg:pt-4 lg:text-sm">
          Description
        </div>
        <div className="text-[8px] lg:text-xs">Co-Owner</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
