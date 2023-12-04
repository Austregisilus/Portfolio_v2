"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Props {
  id: number;
  image: string;
  name: string;
  description: string;
}

const Card = ({ id, image, name, description }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1,
        delay: id * 0.5,
        ease: [0.45, 0, 0.55, 1],
        type: "spring",
      }}
      key={id}
      className="rounded-[16px] border-[0.5px] border-white/50 bg-zinc-900 p-4"
    >
      <figure className="flex justify-center py-10">
        <Image src={image} alt="Skill type" className="h-[140px] w-[140px]" />
      </figure>
      <figcaption>
        <h6 className="py-4 text-center text-title">{name}</h6>

        <p className="py-4 text-center text-p leading-[2.4rem] text-white/70">
          {description}
        </p>
      </figcaption>
    </motion.article>
  );
};

export default Card;
