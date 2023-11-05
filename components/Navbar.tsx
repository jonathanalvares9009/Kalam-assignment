"use client"
import { ACTIONS, NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { Tooltip } from "@material-tailwind/react";
import Button from "./Button"

import { useState } from "react"
import ProfileTooltip from "./ProfileTooltip";
import SignUpComponent from "./SignUpComponent";
import ShotDetailsModal from "./ShotDetailsModal";
import ShareModal from "./ShareModal";
import { useFeedbackModalStore } from "@/store/zustand";


const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isShotDetailsModalOpen, setIsShotDetailsModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const { isFeedbackModalOpen, setClose } = useFeedbackModalStore()
  
  return (
    <nav className="flex justify-between relative z-1 py-5 px-4 h-24 selection:bg-yellow-50">
      <div className="flex items-center gap-4">
        <div className={`flex flex-col h-4 w-5 justify-between normal bg-transparent lg:hidden ${isMenuOpen ? 'x-open' : ''}`} onClick={() => setMenuIsOpen(!isMenuOpen)}>
          <span className="w-full h-0.5 bg-blue-100"></span>
          <span className="w-full h-0.5 bg-blue-100"></span>
          <span className="w-2/3 h-0.5 bg-blue-100"></span>
        </div>


        <a href="https://dribbble.com/" className="cursor-pointer"><Image src="/dribble-logo.svg" width={76} height={30} alt="Dribble Logo" className="block select-none xl:hidden lg:w-28" /></a>
        <ul className="hidden h-full gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-blue-100 font-bold flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <a href="https://dribbble.com/" className="cursor-pointer"><Image src="/dribble-logo.svg" width={124} height={30} alt="Dribble Logo" className="hidden select-none xl:block" /></a>

      <div className="flex">
        <div className="items-center border border-gray-300 bg-gray-300 rounded-full px-4 hidden h-full gap-6 xl:flex">
          <Image src="/search-icon.svg" width={16} height={16} alt="Search Icon" className="select-none" />
          <input type="text" className="outline-none bg-gray-300  px-2 w-full" placeholder="Search..." />
        </div>
        <a href="https://dribbble.com/search" className="flex xl:hidden">
          <Image src="/search-icon.svg" width={20} height={20} alt="Search Icon" className="block select-none cursor-pointer mx-4" />
        </a>
        <a href="https://dribbble.com/session/new">
          <Button type="button" title="Log in" variant="btn_transparent hidden lg:flex" />
        </a>
        <a href="https://dribbble.com/signup/new">
          <Button type="button" title="Sign up" variant="btn_dark_blue" />
        </a>
      </div>

      {!isFeedbackModalOpen &&      
        <div className="hidden flex-col fixed top-36 right-8 gap-4 justify-center select-none sm:flex">
          <ProfileTooltip needsFollowButton={false} placement="left">
            <Image src="/profile.webp" width={20} height={20} alt="Profile" className="hover:animate-pulse rounded-full cursor-pointer select-none h-10 w-10" />
          </ProfileTooltip>
          {ACTIONS.map((action, index) => (
            <Tooltip content={action.label} placement="left" key={index}>
            <div key={index} className="p-2.5 rounded-full border-2 cursor-pointer border-gray-50 w-10 h-10 transition-all duration-150 cubic-bezier[0.32 0 0.59 0.03]"
              onClick={() => {
                if (action.key === "heart" || action.key === "bookmark") setIsSignUpModalOpen(true)
                if (action.key === "info") setIsShotDetailsModalOpen(true)
                if (action.key === "share") setIsShareModalOpen(true)
                if (action.key === "feedback") setClose(true)
              }}
            >
              <Image src={action.src} width={16} height={16} alt={action.key} key={action.key} />
            </div>
            </Tooltip>
          ))}
        </div>
      }

      {isMenuOpen && (
            <div id="menu-links" className="fixed w-full top-24 left-0 opacity-1 visible border-t-2 border-blue-100 bg-white lg:hidden">
                <ul className="flex flex-col gap-2 justify-center px-6 py-6 bg-slate">
                  {NAV_LINKS.map((link) => (
                      <li key={link.key} className="mx-2">
                          <Link href={link.href} className="bold-16 text-blue-100 font-bold hover:text-gray-800">
                              {link.label}
                          </Link>
                      </li>
                  ))}
                  <hr />
                  <li className="mx-2">
                      <Link href={""} className="bold-16 text-blue-100 font-bold hover:text-gray-800">
                          Log in
                      </Link>
                  </li>
                </ul>
            </div>
        )}

        {isSignUpModalOpen && <SignUpComponent setCloseSignUp={setIsSignUpModalOpen} />}
        {isShotDetailsModalOpen && <ShotDetailsModal setClose={setIsShotDetailsModalOpen} />}
        {isShareModalOpen && <ShareModal setClose={setIsShareModalOpen} />}
    </nav>
  )
}

export default Navbar