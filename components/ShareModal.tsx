 // @ts-nocheck
import Image from 'next/image';
import React from 'react';
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

type ShareModalProps = {
    setClose: (desiredState: boolean) => void
}

const TailwindToaster = () => {
  return (
    <Toaster position="bottom">
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-2">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  );
};

const ShareModal = ({setClose}: ShareModalProps) => {
    const copyToClipboard = () => {
        const textToCopy = document.getElementById('text-to-copy')?.innerText;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
            toast.success("A link to this page has been copied to your clipboard")
        }
    };

    return (
        <section className='fixed inset-0 flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-30 z-[1]' onClick={() => setClose(false)}>
        <div className='flex flex-col fixed bg-white rounded-lg p-8 gap-6 text-center w-4/5 lg:w-2/5 sm:text-left'>
            <Image src="/work.webp" width={300} height={300} alt="Shot to share" className='absolute left-1/2 transform -translate-x-1/2 top-negative-40 rounded-xl' />
            <h1 className='text-blue-100 font-bold text-2xl pt-52 text-center'>Share this with your social Community</h1>
            <div className='flex gap-4 justify-center'>
                <a href="https://dribbble.com/shots/21514221-Wemsc-Music-Streaming-Desktop-App-Dark-Mode#" className='bg-pink-50 w-16 h-16 flex justify-center items-center rounded-full'>
                    <Image src="/pinterest.svg" width={40} height={40} alt="Pinterest" className='inline-block cursor-pointer' />
                </a>
                <a href="https://dribbble.com/shots/21514221-Wemsc-Music-Streaming-Desktop-App-Dark-Mode#" className='bg-blue-50 w-16 h-16 flex justify-center items-center rounded-full'>
                    <Image src="/twitter.svg" width={40} height={40} alt="Pinterest" className='inline-block cursor-pointer' />
                </a>
            </div>
            <p className='text-sm font-light'>or copy link</p>
            <div className='flex w-full justify-between py-2 px-4 bg-gray-100 rounded-xl'>
                <p className='font-light truncate' id="text-to-copy">https://dribbble.com/shots/21514221-Wemsc-Music-Streaming-Desktop-App-Dark-Mode?utm_source=Clipboard_Shot&utm_campaign=nailulizah&utm_content=Wemsc%20-%20Music%20Streaming%20Desktop%20App%20(Dark%20Mode)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nailulizah&utm_content=Wemsc%20-%20Music%20Streaming%20Desktop%20App%20(Dark%20Mode)&utm_medium=Social_Share</p>
                <p className='font-normal cursor-pointer' onClick={copyToClipboard}>Copy</p>
            </div>
            <Image src="/close_without_bg.svg" width={20} height={20} alt="Close" className='absolute top-8 right-8 cursor-pointer' onClick={() => setClose(false)} />
        </div>
        <TailwindToaster />
        </section>
    );
};

export default ShareModal;
