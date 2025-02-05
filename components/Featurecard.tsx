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

import { motion } from "framer-motion";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  image: string;
  color: string;
};

interface FeatureCardProps {
  feature: Feature[];
  className?: string;
}

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  console.log(feature);
  return (
    <>
      <div>
        {feature.map((feature, index) => (
          <motion.div key={index} className="bg-red-500">
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <motion.div
              className="w-1/2 pl-8 z-10"
              initial={{ x: "-100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
