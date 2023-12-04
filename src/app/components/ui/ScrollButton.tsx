"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const triggerPosition = 200;

  const handleScroll = () => {
    if (window.scrollY > triggerPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-[20px] right-[50px] rounded-full bg-zinc-500 p-10"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp className="h-10 w-10" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollButton;
