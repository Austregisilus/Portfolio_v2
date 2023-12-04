"use client";
import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1], type: "spring" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
