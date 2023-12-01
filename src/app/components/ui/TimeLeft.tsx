import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  Heading: string;
  Pic: string;
  Content: string;
  Year: string;
  className?: string;
}

const TimeLeft = ({ Heading, Pic, Content, Year, className }: Props) => {
  return (
    <div>
      {/* Timeline left side */}
      <div className="flex justify-start">
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
        <div
          className={twMerge(
            "relative hidden justify-center text-center before:absolute before:z-0 before:h-full before:border-[0.5px] before:border-white/50 after:absolute after:left-0 after:top-[20px] after:w-1/2 after:border-[0.5px] after:border-white/50 md:flex md:w-2/12",
            className,
          )}
        >
          <div className="z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black p-4 text-p ring-1 ring-white">
            <p className="text-p">{Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLeft;
