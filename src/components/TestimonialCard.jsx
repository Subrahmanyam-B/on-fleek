import Image from "next/image"
import Testimonial from "/public/assets/testimonial.svg"

const TestimonialCard = () => {
  return (
    <div className="bg-white text-black rounded-lg p-3 flex gap-3">
      <div className="relative w-[40%]"><Image src={Testimonial} alt="image" className="w-full"/></div>
      <div className="w-1/2">
         <div className="text-[9px] leading-tight">Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat </div>
         <div className="uppercase text-[10px] pt-2">Description</div>
         <div className="text-[8px]">Co-Owner</div>
      </div>
    </div>
  )
}

export default TestimonialCard