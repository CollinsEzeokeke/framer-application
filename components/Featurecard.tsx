"use client";

import { useTruth } from "@/hooks/store";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
  color: string;
};

interface FeatureCardProps {
  features: Feature[];
  className?: string;
}

export default function FeatureCard({ features }: FeatureCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stickyIndex, setStickyIndex] = useState(0);
  const borderControls = useAnimationControls();
  const { setIsChanged, isChanged } = useTruth();
  const firstItemRef = useRef<HTMLDivElement>(null);

  // Add this useEffect for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChanged(entry.isIntersecting);
      },
      {
        root: null, // uses viewport
        threshold: 0.5, // 50% visibility
      }
    );

    if (firstItemRef.current) {
      observer.observe(firstItemRef.current);
    }

    return () => {
      if (firstItemRef.current) {
        observer.unobserve(firstItemRef.current);
      }
    };
  }, [setIsChanged]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        const containerHeight = bottom - top;
        const scrollPosition = window.scrollY - top;
        const newIndex = Math.floor(
          scrollPosition / (containerHeight / features.length)
        );
        const stickyIndex = Math.max(
          0,
          Math.min(newIndex, features.length - 1)
        );

        if (firstItemRef.current) {
          const { top: firstItemTop } =
            firstItemRef.current.getBoundingClientRect();
          setIsChanged(
            firstItemTop <= window.innerHeight * 0.8 && firstItemTop >= 0
          );
        }

        setStickyIndex(stickyIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [features.length]);

  useEffect(() => {
    if (stickyIndex) {
      borderControls.start({
        pathLength: [0, 0.5, 1],
        pathOffset: [0, 0.5, 1],
        transition: {
          duration: 4,
          times: [0, 0.8, 1],
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        },
      });
    } else {
      borderControls.stop();
    }
  }, [stickyIndex, borderControls]);

  console.log(isChanged)
  return (
    <div
      className="max-h-[300vh] flex flex-col justify-start items-center w-screen"
      ref={containerRef}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          className="h-[80vh] sticky top-0 flex items-center justify-center w-[80vw] rounded-lg"
          style={{
            top: `${index * 2}rem`,
            background: `radial-gradient(125% 125% at 100% 0%, #020617 50%, ${item.color})`,
          }}
          animate={{
            opacity: 1,
            scale: index === stickyIndex ? 1 : 0.98,
          }}
          transition={{ duration: 0.5 }}
          ref={index === 0 ? firstItemRef : null}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              fill="none"
              stroke={item.color}
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={borderControls}
              filter="url(#glow)"
            />
          </svg>

          {index % 2 === 0 ? (
            <motion.div
              className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 transition-all duration-300 h-full pr-8`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                <p className="text-xl text-white/80">{item.description}</p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-contain max-w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 transition-all duration-300 h-full`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-contain max-w-full h-auto"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                <p className="text-xl text-white/80">{item.description}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
