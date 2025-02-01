"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";
import FlipText from "./scramnling";

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
      <StarCanvass color={color} />
      <motion.div
        className="flex items-center justify-center h-screen bg-transparent flex-col  "
        // layout
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
        <section className="justify-center flex items-center h-[30vh] relative z-[100]">
          <motion.div className="font-bold h-20 flex-wrap text-2xl pointer-events-auto">
            <FlipText>
              {`Welcome to Cryptoverse your gateway to the crypto universe. 
    Track real-time prices, analyze market trends, and explore thousands 
    of digital currencies all in one place. Stay ahead with live updates 
    and make informed decisions in the ever-evolving world of cryptocurrency.`}
            </FlipText>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}

function StarCanvass({ color }: { color: MotionValue<string> }) {
  return (
    <div className="inset-0 h-screen w-screen fixed bg-transparent">
      {[...Array(48)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 4;
        const randomDuration = 3 + Math.random() * 3;
        const randomFloatRange = 10 + Math.random() * 20;
        const randomSize = 16 + Math.floor(Math.random() * 24);
        const randomRotation = -15 + Math.floor(Math.random() * 30);

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              y: [0, randomFloatRange, 0],
              opacity: 0.2,
              scale: 1,
            }}
            transition={{
              y: {
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: randomDelay,
              },
              opacity: { duration: 1, delay: randomDelay },
              scale: { duration: 1, delay: randomDelay },
            }}
          >
            <motion.div
              drag
              dragElastic={0.2}
              className="cursor-grab active:cursor-grabbing"
              whileDrag={{ scale: 1.2, zIndex: 50 }}
            >
              <Star
                size={randomSize}
                className={clsx(
                  "transform hover:opacity-50 transition-opacity duration-300",
                  `rotate-[${randomRotation}deg]`
                )}
                style={{
                  color: color.get(),
                  position: "relative",
                  transform: `rotate(${randomRotation}deg)`,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
