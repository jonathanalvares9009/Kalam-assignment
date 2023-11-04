"use client"
import Image from "next/image"
import { useState } from "react"

type SampleProps = {
  src: string
  alt: string
  label: string
  href: string
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const Sample = ({src, alt, label, href}: SampleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }
  
  return (
    <a href={href} className=" w-full relative text-base md:w-47 lg:w-1/4 lg:rounded-xl" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Image src={src} alt={alt} width={80} height={80} className="w-full rounded-lg" placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} unoptimized={true} />
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