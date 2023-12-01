"use client";
import React, { useRef } from "react";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  id: number;
  name: string;
  description: string;
  image?: string;
}

const ProjectCard = ({ id, name, description, image }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
      key={id}
      className="my-10 flex flex-row rounded-[16px] bg-zinc-900"
    >
      <div className="grid grid-cols-1 place-content-center place-items-center gap-10 md:grid-cols-2">
        <figure className="flex w-full items-center justify-center">
          <div className="m-5 h-[30rem] w-full rounded-[16px] bg-slate-600 lg:h-[20rem] lg:w-[40rem]"></div>
        </figure>
        <article className="my-10 px-10">
          <h6 className="py-6 text-title">{name}</h6>
          <p className="py-4 text-p text-white/70">{description}</p>
          <div className="mt-12">
            <Button title="View Project" />
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
