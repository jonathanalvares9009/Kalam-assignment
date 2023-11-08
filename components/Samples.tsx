import { SAMPLES } from "@/constants";
import Sample from "./Sample";
import Image from "next/image";

const Samples = () => {
  return (
    <section className="flex flex-col gap-4 px-4 font-base sm:px-20 xl:px-32 sm:gap-16">
      <div className="flex justify-between selection:bg-yellow-50">
        <p className="font-bold">More by Nailul Izah</p>
        <a
          href="https://dribbble.com/nailulizah"
          className="font-normal text-sm text-blue-100 cursor-pointer"
        >
          View profile
        </a>
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-4 sm:grid-rows-2 lg:grid-rows-1">
        {SAMPLES.map((sample, index) => (
          <Sample
            key={index}
            alt={sample.key}
            src={sample.src}
            label={sample.label}
            href={sample.href}
          />
        ))}
      </div>

      <div className="hidden lg:flex gap-4 justify-center pt-6 items-center">
        <Image src="/l.svg" width={28} height={28} alt="L" />
        <Image src="/f.svg" width={28} height={28} alt="F" />
        <p>Like</p>
      </div>
    </section>
  );
};

export default Samples;
