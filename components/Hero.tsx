import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 py-8">
        <div className="flex flex-col gap-2 px-4">
            <h1 className="text-blue-100 font text-xl font-medium">Wemsc - Music Streaming Desktop App (Dark Mode)</h1>
            <div className="flex gap-4">
                <Image src="/profile.png" width={40} height={40} alt="Profile" className="rounded-full h-12 w-12" />
                <div className="flex flex-col h-full text-sm justify-items-center gap-2">
                    <p>Nailul Izah</p>
                    <p>Follow</p>
                </div>
            </div>
        </div>
        <Image src="/work.png" height={300} width={400} alt="Hero" className="w-full lg:w-4/5" />
    </section>
  )
}

export default Hero