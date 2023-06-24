import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="uppercase font-medium text-center">OUR Happy customers</div>
      <div>
        <TestimonialCard/>
      </div>
    </div>
  )
}

export default Testimonials