"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href?: string;
}

const Button = ({ title, href }: Props) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative z-[1] cursor-pointer overflow-hidden rounded-lg px-8 py-4 text-a font-bold text-white/90 ring-[0.5px] ring-white/90 before:absolute before:inset-0 before:-z-[1] before:origin-bottom-left before:scale-x-0 before:rounded-lg before:bg-white before:transition before:duration-300 focus-within:text-black before:focus-within:scale-x-100 hover:border-white hover:text-black before:hover:scale-x-100"
    >
      {title}
    </motion.a>
  );
};

export default Button;
