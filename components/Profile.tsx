import { ACTIONS } from "@/constants"
import Image from "next/image"

const Profile = () => {
  return (
    <section className="flex flex-col gap-8 px-4 sm:px-32 justify-center">
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
          <p>nailulizah13@gmail.com | <span className="border-pink-500 border-b-2 py-0.5">Instagram</span> | <span className="border-pink-500 border-b-2 py-0.5">LinkedIn</span></p>
        </div>
      </div>

      <div className="flex flex-col py-12 gap-8">
        <div className="flex gap-2 justify-center sm:hidden">
          {ACTIONS.map((action, index) => (
            <div key={index} className="p-2 rounded-full border-2 border-gray-50">
              <Image src={action.src} width={16} height={16} alt={action.key} key={action.key} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 items-center w-full">
          <div className="flex gap-4 w-full items-center">
            <span className="border border-gray-50 w-full"></span>
            <Image src="/profile.png" width={20} height={20} alt="Profile" className="rounded-full h-16 w-16" />
            <span className="border border-gray-50 w-full"></span>
          </div>
          <p>Nailul Izah</p>
        </div>
      </div>
    </section>
  )
}

export default Profile