"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  subtitle: string;
  title: string;
}

const SectionIntro = ({ subtitle, title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.45, 0, 0.55, 1], type: "spring" }}
      viewport={{ once: true }}
      className="mx-auto my-6 text-center"
    >
      <p className="text-p text-white/70">{subtitle}</p>
      <h2 className="bg-gradient-to-b from-white via-slate-200 to-black bg-clip-text text-subheading text-transparent">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionIntro;
