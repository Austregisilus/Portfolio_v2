"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
};

const NormalCard = ({ className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1,
        ease: [0.45, 0, 0.55, 1],
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default NormalCard;
