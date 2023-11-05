"use client"
import { ACTIONS } from '@/constants';
import { useShowDemoModalStore, useShowDetailsModalStore, useSignUpModalStore } from '@/store/zustand';
import Image from 'next/image';

type FeedbackModalProps = {
    setClose: (argument: boolean) => void
}

const FeedbackModal = ({setClose}: FeedbackModalProps) => {
    const { setClose: setIsSignUpModalOpen } = useSignUpModalStore()
    const { setClose:  setIsShotDetailsModalOpen} = useShowDemoModalStore()
    const { setClose:  setIsShareModalOpen} = useShowDetailsModalStore()

  return (
    <section className='flex flex-col gap-20 sticky top-0 right-0 px-4 h-screen bg-white border border-t-transparent border-b-transparent transition transform duration-[800ms] ease-in-out delay-0 border-l-gray-300 w-4/5 md:w-1/2 lg:w-1/4'>
      <div className="flex gap-2 justify-center select-none">
          {ACTIONS.map((action, index) => {
            if (action.key === "feedback") {
                return <div key={action.key} className='w-12 h-4'></div>
            }
            return <div key={action.key} className="p-2 rounded-full border-2 border-gray-50 cursor-pointer transition-all duration-150 cubic-bezier[0.32 0 0.59 0.03]"
              onClick={() => {
                if (action.key === "heart" || action.key === "bookmark") setIsSignUpModalOpen(true)
                if (action.key === "info") setIsShotDetailsModalOpen(true)
                if (action.key === "share") setIsShareModalOpen(true)
              }}
            >   
              <Image src={action.src} width={16} height={16} alt={action.key} key={action.key} />
            </div>
            })}
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <Image src="/comments-signup-avatars.webp" width={100} height={100} alt="Profile" className="rounded-full w-2/5 mx-auto" />
            <h1 className='text-center text-xl font-bold text-black'>Start the discussion</h1>
            <p className='text-center text-sm font-medium text-gray-10'>Looking to share your feedback and start the conversation?</p>
            <button className='bg-black rounded-full w-3/5 py-1 text-white text-md'>Sign up to Dribble</button>
        </div>
        <button className='absolute h-8 w-8 left-[-16px] top-2 bg-white border border-gray-300 rounded-full' onClick={() => setClose(false)}>
            <Image src="/close_without_bg.svg" width={10} height={10} alt="Profile" className="rounded-full w-2/5 mx-auto" />
        </button>
    </section>
  );
};

export default FeedbackModal;
