import { SAMPLES } from "@/constants"
import Sample from "./Sample"
import Image from "next/image"
import SignUpComponent from "./SignUpComponent"

const Samples = () => {
  return (
    <section className="flex flex-col gap-4 px-4 font-base sm:px-32 sm:gap-16">
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

      <div className="flex gap-4 justify-center pt-6 items-center">
        <Image src="/l.svg" width={28} height={28} alt="L" />
        <Image src="/f.svg" width={28} height={28} alt="F" />
        <p>Like</p>
      </div>

      <SignUpComponent />
    </section>
  )
}

export default Samples