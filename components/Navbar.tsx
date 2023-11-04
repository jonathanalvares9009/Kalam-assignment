"use client"
import { ACTIONS, NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState, useEffect, useRef } from "react"


const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if(!navRef.current) return
      const rect = navRef.current.getBoundingClientRect();
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      setIsVisible(isVisible)
      console.log(isVisible)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible])

  return (
    <nav ref={navRef} className="flex justify-between relative z-1 py-5 px-4 h-24">
      <div className="flex items-center gap-4">
        <div className="flex flex-col h-4 w-5 justify-between bg-transparent lg:hidden">
          <span className="w-full h-0.5 bg-blue-100"></span>
          <span className="w-full h-0.5 bg-blue-100"></span>
          <span className="w-2/3 h-0.5 bg-blue-100"></span>
        </div>


        <Image src="/dribble-logo.svg" width={76} height={30} alt="Dribble Logo" className="block xl:hidden" />
        <ul className="hidden h-full gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-blue-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <Image src="/dribble-logo.svg" width={76} height={30} alt="Dribble Logo" className="hidden xl:block" />

      <div className="flex">
        <div className="items-center border border-gray-300 bg-gray-300 rounded-full bg-transparent px-4 hidden h-full gap-6 xl:flex">
          <Image src="/search-icon.svg" width={16} height={16} alt="Search Icon" />
          <input type="text" className="outline-none bg-gray-300  px-2 w-full" placeholder="Search..." />
        </div>
        <Image src="/search-icon.svg" width={20} height={20} alt="Search Icon" className="block xl:hidden mx-4" />
        <Button type="button" title="Log in" variant="btn_transparent hidden lg:flex" />
        <Button type="button" title="Sign up" variant="btn_dark_blue" />
      </div>

      <div className="hidden flex-col fixed top-36 right-8 gap-4 justify-center sm:flex">
          <Image src="/profile.webp" width={20} height={20} alt="Profile" className="rounded-full h-10 w-10" />
          {ACTIONS.map((action, index) => (
            <div key={index} className="p-2.5 rounded-full border-2 border-gray-50 w-10 h-10">
              <Image src={action.src} width={16} height={16} alt={action.key} key={action.key} />
            </div>
          ))}
        </div>
    </nav>
  )
}

export default Navbar