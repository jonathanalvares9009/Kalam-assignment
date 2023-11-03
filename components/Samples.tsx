import { SAMPLES } from "@/constants"
import Sample from "./Sample"

const Samples = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex justify-between">
        <p className="font-bold">More by Nailul Izah</p>
        <p className="font-light">View profile</p>
      </div>

      <div className="flex flex-col gap-8">
        {
          SAMPLES.map((sample, index) => (
            <Sample key={index} alt={sample.key} src={sample.src} />
          ))
        }
      </div>
    </section>
  )
}

export default Samples