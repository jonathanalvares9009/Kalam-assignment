'use client'
import FeedbackModal from "@/components/FeedbackModal";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Samples from "@/components/Samples";
import { useFeedbackModalStore } from "@/store/zustand";

export default function Home() {
  const { isFeedbackModalOpen, setClose } = useFeedbackModalStore()
  return (
    <div className={`${isFeedbackModalOpen ? 'relative': ''}`}>
      <div className={`${isFeedbackModalOpen ? 'w-3/4' : 'w-full'}`}>
        <Hero />
        <Profile />
        <Samples />
      </div>
      {isFeedbackModalOpen && <FeedbackModal setClose={setClose}  />}
    </div>
  )
}
