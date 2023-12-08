"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const NormalCard = ({ className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: "left" }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
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
