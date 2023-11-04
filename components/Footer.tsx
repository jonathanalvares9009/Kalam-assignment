import { FOOTER_LINKS_ONE, FOOTER_LINKS_TWO, LINKS, SOCIALS } from "@/constants"
import Image from "next/image"

const Footer = () => {
  return (
    <section className='flex flex-col gap-20 pt-56 pb-8 px-8 items-center xl:px-40 text-base'>
      <div className="flex flex-col gap-5 items-center w-full lg:flex-row md:justify-between">
        <div className='flex flex-col items-center select-none'>
          <Image src="/dribble-logo.svg" width={104} height={30} alt="Dribble Logo" />
        </div>

        <ul className="flex flex-wrap justify-center gap-y-1 gap-x-4 selection:bg-yellow-50 text-sm text-blue-100 font-normal xl:gap-x-10">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap justify-center gap-y-1 gap-x-4 select-none">
          {SOCIALS.map((social, index) => (
            <li key={index}>
              <a href={social.href} className="font-medium">
                <Image src={social.icon} width={20} height={20} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>


      <div className="flex flex-col gap-1 w-full md:flex-row md:justify-between text-gray-10 text-sm font-normal selection:bg-yellow-50 selection:text-blue-100">
        <ul className="flex justify-center gap-4">
          <p className="cursor-text">© 2023 Dribbble</p>
          {FOOTER_LINKS_ONE.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="cursor-pointer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-4">
          {FOOTER_LINKS_TWO.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="cursor-pointer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Footer