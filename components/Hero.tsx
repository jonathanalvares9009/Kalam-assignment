import { ACTIONS } from "@/constants"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 py-8 lg:items-center pb-16 selection:bg-yellow-50">
        <div className="flex flex-col gap-2 px-4 lg:hidden">
            <h1 className="text-blue-100 font text-xl font-medium">Wemsc - Music Streaming Desktop App (Dark Mode)</h1>
            <div className="flex gap-4">
                <Image src="/profile.webp" width={40} height={40} alt="Profile" className="rounded-full h-12 w-12 select-none" />
                <div className="flex flex-col h-full text-sm justify-items-center gap-2">
                    <p>Nailul Izah</p>
                    <p>Follow</p>
                </div>
            </div>
        </div>

        <div className="hidden lg:flex gap-4 px-4 items-center">
          <Image src="/profile.webp" width={40} height={40} alt="Profile" className="rounded-full h-12 w-12 select-none" />
          <div className="flex flex-col gap-2">
            <h1 className="text-blue-100 font text-xl font-medium">Wemsc - Music Streaming Desktop App (Dark Mode)</h1>
            <div className="flex h-full text-sm justify-items-center items-center gap-2">
                <p>Nailul Izah</p>
                <span className="inline-block w-1 h-1 border-2 border-black rounded-full"></span>
                <p>Follow</p>
            </div>
          </div>
        </div>

        <Image src="/work.webp" height={300} width={400} alt="Hero" className="w-full select-none lg:w-3/5" unoptimized={true} />
    </section>
  )
}

export default Hero