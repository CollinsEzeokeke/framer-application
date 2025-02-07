// import { motion, useMotionTemplate, useMotionValue, useAnimationControls } from "framer-motion"
// import Image from "next/image"
// import { useEffect, useRef } from "react"

// interface FeatureCardProps {
//   feature: {
//     title: string
//     description: string
//     image: string
//     color: string
//   }
//   currentFeature: number
//   index: number
//   className?: string;
// }

// declare module "react" {
//   interface CSSProperties {
//     "--index"?: number
//   }
// }

// export default function FeatureCard({ feature, currentFeature, index, className }: FeatureCardProps) {
//   const isActive = index === currentFeature
//   const gradientProgress = useMotionValue(0)
//   const gradient = useMotionTemplate`radial-gradient(125% 125% at 100% 0%, #020617 50%, ${feature.color})`
//   const borderControls = useAnimationControls()

//   useEffect(() => {
//     if (isActive) {
//       borderControls.start({
//         pathLength: [0, 0.5, 1],
//         pathOffset: [0, 0.5, 1],
//         transition: {
//           duration: 4,
//           times: [0, 0.8, 1],
//           ease: "easeInOut",
//           repeat: Number.POSITIVE_INFINITY,
//         },
//       })
//     } else {
//       borderControls.stop()
//     }
//   }, [isActive, borderControls])

//   return (
//     // <motion.div
//     //   initial={{ opacity: 0, y: "100%" }}
//     //   animate={{
//     //     opacity: hasAppeared ? opacity : 0,
//     //     y: hasAppeared ? yOffset : "100%",
//     //     scale,
//     //     transition: { duration: 0.5, ease: "easeInOut" },
//     //   }}
//     //   className={`left-0 w-screen h-[80vh] flex items-center justify-center bg-green-500 ${className}`}
//     //   style={{ zIndex: index, "--index": index }}
//     // >

//     // </motion.div>
//     <>
//     <div className="bg-red-500 flex justify-center w-screen sticky top-[calc(var(--index) * 2rem)] items-center"
//     style={{"--index": index}}
//     >
//      <motion.div
//         className="bg-gray-500 rounded-lg shadow-xl w-4/5 h-3/4 p-8 flex items-center overflow-hidden "
//         // initial={{ scale: 0.8 }}
//         // animate={{ scale: isActive ? 1 : 0.95 }}
//         // transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <motion.div
//           className="absolute inset-0 rounded-lg overflow-hidden"
//           style={{
//             background: `conic-gradient(from 0deg at 50% 50%, ${feature.color}00 0deg, ${feature.color} 360deg)`,
//             opacity: 0.1,
//           }}
//           // animate={{
//           //   rotate: [0, 360],
//           // }}
//           // transition={{
//           //   duration: 10,
//           //   ease: "linear",
//           //   repeat: Number.POSITIVE_INFINITY,
//           // }}
//         />
//         <motion.div
//           className="absolute inset-0 rounded-lg"
//           style={{
//             background: gradient,
//             opacity: gradientProgress,
//           }}
//           animate={{
//             opacity: isActive ? 1 : 0,
//           }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         />
//         {/* My Container for the animated svgs */}
//         <svg
//           className="absolute inset-0 w-screen h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>
//           <motion.rect
//             x="2"
//             y="2"
//             width="calc(100% - 4px)"
//             height="calc(100% - 4px)"
//             fill="none"
//             stroke={feature.color}
//             strokeWidth="8"
//             strokeLinecap="round"
//             initial={{ pathLength: 0, pathOffset: 0 }}
//             animate={borderControls}
//             filter="url(#glow)"
//           />
//         </svg>
//         {/* {index % 2 === 0 ? (
//           <>
//            {/* <div className="sticky hidden"> */}
//             <motion.div
//               className="w-1/2 pr-8 z-10"
//               initial={{ x: "100%" }}
//               animate={{ x: isActive ? 0 : "100%" }}
//               transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
//             >
//               <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
//               <p className="text-lg">{feature.description}</p>
//             </motion.div>
//             <motion.div
//               className="w-1/2 z-10"
//               initial={{ x: "100%" }}
//               animate={{ x: isActive ? 0 : "100%" }}
//               transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
//             >
//               <Image
//                 src={feature.image || "/placeholder.svg"}
//                 alt={feature.title}
//                 width={400}
//                 height={300}
//                 className="rounded-lg"
//               />
//             </motion.div>
//           {/* </div> */}
//           {/* </>
//           */}
//         {/* ) : (
//           // <>
//           //   <motion.div
//           //     className="w-1/2 z-10"
//           //     initial={{ x: "-100%" }}
//           //     animate={{ x: isActive ? 0 : "-100%" }}
//           //     transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
//           //   >
//           //     <Image
//           //       src={feature.image || "/placeholder.svg"}
//           //       alt={feature.title}
//           //       width={400}
//           //       height={300}
//           //       className="rounded-lg"
//           //     />
//           //   </motion.div>
//           //   <motion.div
//           //     className="w-1/2 pl-8 z-10"
//           //     initial={{ x: "-100%" }}
//           //     animate={{ x: isActive ? 0 : "-100%" }}
//           //     transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
//           //   >
//           //     <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
//           //     <p className="text-lg">{feature.description}</p>
//           //   </motion.div>
//           // </>
//         // )}  */}
//       </motion.div>
//     </div>
//     </>
//   );
// }

// import { motion } from "framer-motion";
// import Image from "next/image";

// type Feature = {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// };

// interface FeatureCardProps {
//   feature: Feature[];
//   className?: string;
// }

// declare module "react" {
//   interface CSSProperties {
//     "--index"?: number;
//   }
// }

// export default function FeatureCard({ feature }: FeatureCardProps) {
//   console.log(feature);
//   return (
//     <>
//       <div className="bg-green-500 h-screen w-screen sticky top-0">
//         {feature.map((feature, index) => (
//           <motion.section key={index} className="bg-red-500 h-[20vh]">
//             <motion.div>
//               <h2>{feature.title}</h2>
//               <p>{feature.description}</p>
//             </motion.div>
//             <Image src={feature.image} alt="" width={'200'} height={'500'}/>
//           </motion.section>
//         ))}
//       </div>
//     </>
//   );
// }

// v3
// import { motion } from "framer-motion";
// import Image from "next/image";

// type Feature = {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// };

// interface FeatureCardProps {
//   feature: Feature[];
//   className?: string;
// }

// declare module "react" {
//   interface CSSProperties {
//     "--index"?: number;
//   }
// }

// export default function FeatureCard({ feature }: FeatureCardProps) {
//   return (
//     <div className="relative h-[400vh]"> {/* Adjust height based on content */}
//       <div className="bg-green-500 w-screen">
//         {feature.map((item, index) => (
//           <motion.section
//             key={index}
//             className="sticky w-full bg-red-500 p-6 rounded-lg"
//             style={{
//               top: `${index * 2}rem`,
//               zIndex: feature.length - index, // Higher index items appear below
//             }}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
//               <motion.div
//                 className="flex-1 space-y-4"
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <h2 className="text-2xl font-bold text-white">{item.title}</h2>
//                 <p className="text-white/80">{item.description}</p>
//               </motion.div>

//               <motion.div
//                 className="flex-1"
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={200}
//                   height={500}
//                   className="rounded-lg object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.section>
//         ))}
//       </div>
//     </div>
//   );
// }

// v4
// import { motion } from "framer-motion";
// import Image from "next/image";

// type Feature = {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// };

// interface FeatureCardProps {
//   feature: Feature[];
//   className?: string;
// }

// declare module "react" {
//   interface CSSProperties {
//     "--index"?: number;
//   }
// }

// export default function FeatureCard({ feature }: FeatureCardProps) {
//   return (
//     <div className="relative min-h-screen">
//       <div className="sticky top-0 h-screen w-screen bg-green-500">
//         {feature.map((item, index) => (
//           <motion.section
//             key={index}
//             className="absolute w-full bg-red-500 p-6 rounded-lg top-[calc(var(--index)*2rem)]"
//             style={{
//               "--index": index,
//               zIndex: feature.length - index
//             } as React.CSSProperties}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
//               <motion.div
//                 className="flex-1 space-y-4"
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <h2 className="text-2xl font-bold text-white">{item.title}</h2>
//                 <p className="text-white/80">{item.description}</p>
//               </motion.div>

//               <motion.div
//                 className="flex-1"
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={200}
//                   height={500}
//                   className="rounded-lg object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.section>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// type Feature = {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// };

// interface FeatureCardProps {
//   features: Feature[];
//   className?: string;
// }

// declare module "react" {
//   interface CSSProperties {
//     "--index"?: number;
//   }
// }

// export default function FeatureCard({ features }: FeatureCardProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [stickyIndex, setStickyIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { top, bottom } = containerRef.current.getBoundingClientRect();
//         const containerHeight = bottom - top;
//         const scrollPosition = window.scrollY - top;
//         const newIndex = Math.floor(
//           scrollPosition / (containerHeight / features.length)
//         );
//         const stickyIndex = Math.max(
//           0,
//           Math.min(newIndex, features.length - 1)
//         );
//         setStickyIndex(stickyIndex);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="h-[70vh] relative" ref={containerRef}>
//       {features.map((item, index) => (
//         <div
//           key={index}
//           className=" sticky top-0 flex items-center justify-center w-full rounded-lg h-1/2"
//           style={{ top: `${index * 2}rem`, backgroundColor: item.color }}
//         >
//           <motion.div
//             className={`w-full md:w-1/2 space-y-6 p-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between transition-all duration-300 ${
//               index === stickyIndex
//                 ? "scale-100 opacity-100"
//                 : "scale-95 opacity-50"
//             } `}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="w-full md:w-1/2 space-y-6">
//               <h2 className="text-4xl font-bold text-white">{item.title}</h2>
//               <p className="text-xl text-white/80">{item.description}</p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="w-full md:w-1/2 flex justify-center items-center p-8"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={400}
//               height={300}
//               className="object-contain max-w-full h-auto"
//               priority
//             />
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// }

// "use client"

// import {  motion, useMotionTemplate, useMotionValue } from "framer-motion"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

// type Feature = {
//   title: string
//   description: string
//   image: string
//   color: string
// }

// interface FeatureCardProps {
//   features: Feature[]
//   className?: string
// }

// export default function FeatureCard({ features }: FeatureCardProps) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [stickyIndex, setStickyIndex] = useState(0)
//   const activeColor = useMotionValue(features[0].color)
//   const gradient = useMotionTemplate`radial-gradient(125% 125% at 100% 0%, #020617 50%, ${activeColor})`

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { top, bottom } = containerRef.current.getBoundingClientRect()
//         const containerHeight = bottom - top
//         const scrollPosition = window.scrollY - top
//         const newIndex = Math.floor(scrollPosition / (containerHeight / features.length))
//         const stickyIndex = Math.max(0, Math.min(newIndex, features.length - 1))
//         setStickyIndex(stickyIndex)
//       }
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [features.length])

// useEffect(() => {
//   activeColor.set(features[stickyIndex].color)
// }, [stickyIndex, features])

//   return (
//     <div className="h-[400vh] relative" ref={containerRef}>
//       {features.map((item, index) => (
//         <div
//           key={index}
//           className="h-[70vh] sticky top-0 flex items-center justify-center w-full rounded-lg"
//           style={{ top: `${index * 2}rem`, gradient}}
//         >
//           <motion.div
//             className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 transition-all duration-300 h-full ${
//               index === stickyIndex ? "scale-100 opacity-100" : "scale-95 opacity-50"
//             }`}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="w-full md:w-1/2 space-y-6">
//               <h2 className="text-4xl font-bold text-white">{item.title}</h2>
//               <p className="text-xl text-white/80">{item.description}</p>
//             </div>

//             <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
//               <Image
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.title}
//                 width={400}
//                 height={300}
//                 className="object-contain max-w-full h-auto"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   )
// }

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
      className="h-[400vh] flex flex-col justify-start items-center w-screen"
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
