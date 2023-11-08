"use client";
import Image from "next/image";
import { Tooltip } from "@material-tailwind/react";
import { SHOTS } from "@/constants";

type ProfileTooltipProps = {
  needsFollowButton: boolean;
  placement: string;
  children: React.ReactNode;
};

const ProfileTooltip = ({
  needsFollowButton,
  placement,
  children,
}: ProfileTooltipProps) => {
  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-4 p-2">
          <div className="flex text-blue-100 justify-between">
            <div className="flex gap-2">
              <Image
                src="/profile.webp"
                width={40}
                height={40}
                alt="Profile"
                className="hover:animate-pulse rounded-full h-12 w-12 select-none"
              />
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-lg">Nailul Izah</p>
                <p className="text-gray-10 font-normal">Indonesia</p>
              </div>
            </div>
            {needsFollowButton && (
              <button className="text-blue-100 border-2 rounded-full border-gray-10 py-1 px-6">
                Follow
              </button>
            )}
          </div>
          <div className="flex gap-2">
            {SHOTS.map((shot) => (
              <a
                href={shot.href}
                key={shot.key}
                className="flex flex-col gap-1"
              >
                <Image
                  src={shot.src}
                  width={100}
                  height={100}
                  alt={shot.alt}
                  className="rounded-md"
                />
              </a>
            ))}
          </div>
        </div>
      }
      className="border border-blue-gray-50 bg-white p-2 shadow-xl shadow-black/10"
      placement={placement}
    >
      {children}
    </Tooltip>
  );
};

export default ProfileTooltip;
