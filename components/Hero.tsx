"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 100% 0%, #020617 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  });
  return (
    <>
      <motion.div
        className="flex items-center justify-center h-screen bg-transparent"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        exit={{ opacity: 0 }}
        style={{ backgroundImage }}
      >
        <motion.h1
          className="text-6xl text-white font-bold"
          initial={{ scale: 0, opacity: 0, y: -4 }}
          animate={{ opacity: 1, scale: 1, height: 2, rotateY: 360, y: 0 }}
          transition={{
            type: "spring",
            bounce: 2,
            visualDuration: 0.5,
            velocity: 2,
          }}
        >
          CryptoVerse
        </motion.h1>
      </motion.div>
    </>
  );
}
