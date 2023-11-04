import { SAMPLES } from "@/constants"
import Sample from "./Sample"

const Samples = () => {
  return (
    <section className="flex flex-col gap-4 px-4 font-base sm:px-20 sm:gap-16">
      <div className="flex justify-between selection:bg-yellow-50">
        <p className="font-bold">More by Nailul Izah</p>
        <a href="https://dribbble.com/nailulizah" className="font-normal text-sm text-blue-100 cursor-pointer">View profile</a>
      </div>

      <div className="flex flex-col gap-8 flex-wrap md:flex-row lg:flex-nowrap">
        {
          SAMPLES.map((sample, index) => (
            <Sample key={index} alt={sample.key} src={sample.src} label={sample.label} href={sample.href} />
          ))
        }
      </div>
    </section>
  )
}

export default Samples