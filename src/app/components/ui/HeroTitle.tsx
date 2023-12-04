"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

const HeroTitle: React.FC<Props> = ({ title }: Props) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerDelay = 0.5;

  return (
    <div>
      <h1 className="sr-only">{title}</h1>
      {title.split(" ").map((word, index) => (
        <motion.h1
          key={index}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{
            duration: 1,
            delay: index * staggerDelay,
            type: "spring",
            ease: [0.45, 0, 0.55, 1],
          }}
          className="xs:text-[8rem] bg-gradient-to-b from-white via-slate-200 to-black bg-clip-text text-[7rem] -tracking-[0.8rem] text-transparent sm:text-[9rem] lg:text-heading"
          aria-hidden="true"
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

export default HeroTitle;
