import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flex justify-between relative z-30 py-5 px-8">
      <div className="flex items-center gap-4">
        <div className="flex flex-col h-4 w-4 justify-between lg:hidden">
          <span className="w-full h-0.5 bg-black"></span>
          <span className="w-full h-0.5 bg-black"></span>
          <span className="w-2/3 h-0.5 bg-black"></span>
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
        <div className="items-center border border-gray-300 rounded-full bg-transparent px-4 hidden h-full gap-6 xl:flex">
          <Image src="/search-icon.svg" width={16} height={16} alt="Search Icon" />
          <input type="text" className="outline-none px-2 w-full" placeholder="Search..." />
        </div>
        <Image src="/search-icon.svg" width={20} height={20} alt="Search Icon" className="block xl:hidden mx-4" />
        <Button type="button" title="Log in" variant="btn_transparent hidden lg:flex" />
        <Button type="button" title="Sign up" variant="btn_dark_blue" />
      </div>
    </nav>
  )
}

export default Navbar