"use client"
import Image from "next/image"
import { useState } from "react"

type SampleProps = {
  src: string
  alt: string
  label: string
  href: string
}

const Sample = ({src, alt, label, href}: SampleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }
  
  return (
    <a href={href} className="w-full relative text-base md:w-47 lg:w-1/4 lg:rounded-xl" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Image src={src} alt={alt} width={80} height={80} className="w-full rounded-lg" unoptimized={true} />
      { isHovered && 
        <div className="w-full h-full absolute bottom-0 left-0 flex flex-col-reverse py-6 px-4 bg-transparent/50">
          <div className="flex justify-between items-center">
            <p className="truncate font-medium text-white w-4/5">{label}</p>
            <div className="flex gap-2">
              <div className="p-2 rounded-full border-2 border-white bg-white">
                <Image src="/bookmark.svg" width={20} height={20} alt="Feedback button" />
              </div>
              <div className="p-2 rounded-full border-2 border-white bg-white">
                <Image src="/heart.svg" width={20} height={20} alt="Like button" />
              </div>
            </div>
          </div>
        </div>
      }
    </a>
  )
}

export default Sample