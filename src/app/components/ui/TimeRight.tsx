import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import NormalCard from "./NormalCard";

interface Props {
  Heading: string;
  Pic: string;
  Content: string;
  Year: string;
  className?: string;
}

const TimeRight = ({ Heading, Pic, Content, Year, className }: Props) => {
  return (
    <NormalCard>
      {/* Timeline right side */}
      <div className="flex justify-end">
        <div
          className={twMerge(
            "relative hidden w-2/12 justify-center text-center before:absolute before:z-0 before:h-full before:border-[0.5px] before:border-white/50 after:absolute after:right-0 after:top-[20px] after:w-1/2 after:border-[0.5px] after:border-white/50 last:before:hidden last:after:hidden md:flex",
            className,
          )}
        >
          <div className="z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black p-4 text-p ring-1 ring-white">
            <p className="text-p">{Year}</p>
          </div>
        </div>
        <div className="mt-[20px] w-full rounded-[16px] border-[0.5px] border-white/50 bg-black p-4 md:w-5/12 md:p-8">
          <p className="block py-3 text-p md:hidden">Year : {Year}</p>
          <Image
            src={Pic}
            alt="timeline-left"
            width={50}
            height={50}
            className="py-4"
          />
          <h6 className="pb-4 text-title">{Heading}</h6>
          <p className="text-p leading-[2.4rem] text-white/70">{Content}</p>
        </div>
      </div>
    </NormalCard>
  );
};

export default TimeRight;
