"use client";
import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import ProfileTooltip from "./ProfileTooltip";
import { useState } from "react";
import ShowDemoModal from "./ShowDemoModal";
import { shimmer, toBase64 } from "@/utility/facade";

const Hero = () => {
  const [isShowDemoModalOpen, setIsShowDemoModalOpen] = useState(false);

  return (
    <section className="flex flex-col gap-10 py-8 lg:items-center pb-16 selection:bg-yellow-50 sm:items-center">
      <div className="flex flex-col gap-2 px-4 lg:hidden">
        <h1 className="text-blue-100 text-2xl font-semibold">
          Wemsc - Music Streaming Desktop App (Dark Mode)
        </h1>
        <div className="flex gap-4">
          <Image
            src="/profile.webp"
            width={40}
            height={40}
            alt="Profile"
            className="hover:animate-pulse rounded-full h-12 w-12 select-none"
          />
          <div className="flex flex-col h-full text-sm justify-items-center gap-2 text-blue-100 font-semibold">
            <p>Nailul Izah</p>
            <p className="text-[#6e6d7a] font-medium text-xs">Follow</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex gap-4 px-4 items-center">
        <ProfileTooltip needsFollowButton={true} placement="bottom">
          <Image
            src="/profile.webp"
            width={40}
            height={40}
            alt="Profile"
            className="hover:animate-pulse rounded-full h-12 w-12 select-none"
          />
        </ProfileTooltip>
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-100 text-2xl font-semibold">
            Wemsc - Music Streaming Desktop App (Dark Mode)
          </h1>
          <div className="flex h-full text-sm justify-items-center items-center gap-2 text-blue-100 font-semibold">
            <ProfileTooltip needsFollowButton={true} placement="bottom">
              <p>Nailul Izah</p>
            </ProfileTooltip>
            <span className="inline-block w-1 h-1 border-2 border-black rounded-full"></span>
            <Tooltip content="Follow Nailul Izah" placement="top">
              <p className="text-[#6e6d7a] font-medium text-xs">Follow</p>
            </Tooltip>
          </div>
        </div>
      </div>

      <Image
        src="/work.webp"
        height={300}
        width={400}
        alt="Hero"
        className="w-full select-none cursor-pointer sm:w-3/5"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 300))}`}
        unoptimized={true}
        onClick={() => setIsShowDemoModalOpen(true)}
      />

      {isShowDemoModalOpen && (
        <ShowDemoModal setClose={setIsShowDemoModalOpen} />
      )}
    </section>
  );
};

export default Hero;
