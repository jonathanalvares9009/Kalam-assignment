import { FOOTER_LINKS, LINKS, SOCIALS } from "@/constants"
import Image from "next/image"

const Footer = () => {
  return (
    <section className='flex flex-col gap-20 pt-48 pb-6 px-8 items-center'>
      <div className="flex flex-col gap-4">
        <div className='flex flex-col items-center'>
          <Image src="/dribble-logo.svg" width={76} height={30} alt="Dribble Logo" />
        </div>

        <ul className="flex flex-wrap justify-center gap-y-1 gap-x-4">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap justify-center gap-y-1 gap-x-4">
          {SOCIALS.map((social, index) => (
            <li key={index}>
              <a href={social.href} className="font-medium">
                <Image src={social.icon} width={20} height={20} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>


      <ul className="flex flex-wrap-reverse justify-center gap-y-1 gap-x-4">
        {FOOTER_LINKS.map((link, index) => (
          <li key={index}>
            {
              link.href ? 
                <a href={link.href} className="font-light">
                  {link.label}
                </a> : 
                <p className="font-light">
                  {link.label}
                </p>
            }
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Footer