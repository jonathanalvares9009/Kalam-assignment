"use client"
import { ACTIONS } from "@/constants"
import Image from "next/image"
import { useState } from "react"
import SignUpComponent from "./SignUpComponent"
import ShotDetailsModal from "./ShotDetailsModal"
import ShareModal from "./ShareModal"
import { useFeedbackModalStore } from "@/store/zustand"

const Profile = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isShotDetailsModalOpen, setIsShotDetailsModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const { setClose } = useFeedbackModalStore()

  return (
    <section className="flex flex-col gap-8 px-4 sm:px-32 justify-center selection:bg-yellow-50">
      <div className="flex flex-col gap-8 text-xl font-normal lg:pl-56 lg:pb-20">
        <p>Hello folks!</p>
        <p>Wemsc is a music streaming platform to accompany you every time.</p>
        <p>What do you think? Give me feedback, thank you!</p>
        <div>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
        <div>
          <p>Connect with me</p>
          <p>nailulizah13@gmail.com | <a href="https://www.linkedin.com/in/nailulizah01" className="border-pink-500 border-b-2 py-0.5 cursor-pointer">Instagram</a> | <a href="https://www.linkedin.com/in/nailulizah01" className="border-pink-500 border-b-2 py-0.5 cursor-pointer">LinkedIn</a></p>
        </div>
      </div>

      <div className="flex flex-col py-12 gap-8">
        <div className="flex gap-2 justify-center sm:hidden select-none">
          {ACTIONS.map((action, index) => (
            <div key={index} className="p-2 rounded-full border-2 border-gray-50 cursor-pointer transition-all duration-150 cubic-bezier[0.32 0 0.59 0.03]"
              onClick={() => {
                if (action.key === "heart" || action.key === "bookmark") setIsSignUpModalOpen(true)
                if (action.key === "info") setIsShotDetailsModalOpen(true)
                if (action.key === "share") setIsShareModalOpen(true)
                if (action.key === "feedback") setClose(true)
              }}
            >
              <Image src={action.src} width={16} height={16} alt={action.key} key={action.key} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex gap-4 w-full items-center select-none">
            <span className="border border-gray-50 w-full"></span>
            <a href="https://dribbble.com/nailulizah" className="flex justify-center items-center w-2/5 sm:w-1/4 md:w-1/6">
              <Image src="/profile.webp" width={20} height={20} alt="Profile" className="hover:animate-pulse rounded-full h-12 w-12" />
            </a>
            <span className="border border-gray-50 w-full"></span>
          </div>
          <a href="https://dribbble.com/nailulizah" className="font-bold text-xl">Nailul Izah</a>
        </div>
      </div>

      {isSignUpModalOpen && <SignUpComponent setCloseSignUp={setIsSignUpModalOpen} />}
      {isShotDetailsModalOpen && <ShotDetailsModal setClose={setIsShotDetailsModalOpen} />}
      {isShareModalOpen && <ShareModal setClose={setIsShareModalOpen} />}
    </section>
  )
}

export default Profile