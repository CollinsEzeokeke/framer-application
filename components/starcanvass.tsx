"use client";

import { motion, type MotionValue } from "framer-motion";
import { Star } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface StarCanvasProps {
  color: MotionValue<string>;
}

export default function StarCanvas({ color }: StarCanvasProps) {
  return (
    <div className="absolute inset-0 h-full w-full">
      {[...Array(48)].map((_, i) => (
        <AnimatedStar key={i} color={color} />
      ))}
    </div>
  );
}

function AnimatedStar({ color }: { color: MotionValue<string> }) {
  const [randomValues, setRandomValues] = useState({
    x: 0,
    y: 0,
    delay: 0,
    duration: 3,
    floatRange: 10,
    size: 16,
    rotation: -15,
  });

  useEffect(() => {
    setRandomValues({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
      floatRange: 10 + Math.random() * 20,
      size: 16 + Math.floor(Math.random() * 24),
      rotation: -15 + Math.floor(Math.random() * 30)
    })
  }, [])

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${randomValues.x}%`,
        top: `${randomValues.y}%`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        y: [0, randomValues.floatRange, 0],
        opacity: 0.2,
        scale: 1,
      }}
      transition={{
        y: {
          duration: randomValues.duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: randomValues.delay,
        },
        opacity: { duration: 1, delay: randomValues.delay },
        scale: { duration: 1, delay: randomValues.delay },
      }}
    >
      <motion.div
        drag
        dragElastic={0.2}
        className="cursor-grab active:cursor-grabbing"
        whileDrag={{ scale: 1.2, zIndex: 50 }}
      >
        <Star
          size={randomValues.size}
          className={clsx(
            "transform hover:opacity-50 transition-opacity duration-300",
            `rotate-[${randomValues.rotation}deg]`
          )}
          style={{
            color: color.get(),
            position: "relative",
            transform: `rotate(${randomValues.rotation}deg)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
