// 'use'

// import { motion } from "framer-motion";

// export default function FlipText({ children }: { children: string }) {
//   return (
//     <motion.span
//       className="inline-block relative z-50 overflow-hidden"
//       initial="initial"
//       whileHover="hovered"
//       style={{ lineHeight: '1.2' }}
//     >
//       {/* Visible text layer */}
//       <div className="relative z-10">
//         {children.split("").map((l, i) => (
//           <motion.span
//             key={i}
//             className="inline-block"
//             variants={{
//               initial: { y: "0%" },
//               hovered: { y: "-100%" },
//             }}
//             transition={{
//               delay: i * 0.02,
//               type: "spring",
//               bounce: 0.3,
//               duration: 0.4
//             }}
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>

//       {/* Hidden overflow layer */}
//       <div className="absolute inset-0 z-20 overflow-hidden">
//         <div className="relative">
//           {children.split("").map((l, i) => (
//             <motion.span
//               key={i}
//               className="absolute inline-block left-0"
//               variants={{
//                 initial: { y: "100%" },
//                 hovered: { y: "0%" },
//               }}
//               transition={{
//                 delay: i * 0.02,
//                 type: "spring",
//                 bounce: 0.3,
//                 duration: 0.4
//               }}
//               style={{ top: `${i * 100}%` }}
//             >
//               {l}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </motion.span>
//   );
// }



// "use client"

// import { useState, useCallback, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import clsx from "clsx"
// // import { clsx } from "@/lib/utils" // Assuming you have a utility function for class names

// // Define more specific types
// type AnimatedTextProps = {
//   children: string | string[] // Restrict to strings only for better type safety
//   className?: string
//   scatterDistance?: number // Allow customization of scatter distance
//   duration?: number // Allow customization of animation duration
//   staggerChildren?: number // Allow stagger effect between letters
// }

// export const AnimatedText = ({
//   children,
//   className = "",
//   scatterDistance = 50,
//   duration = 0.3,
//   staggerChildren = 0.02,
// }: AnimatedTextProps) => {
//   const [isHovered, setIsHovered] = useState(false)

//   // Memoize the random position generator
//   const getRandomPosition = useCallback(() => {
//     return {
//       x: (Math.random() - 0.5) * scatterDistance * 2,
//       y: (Math.random() - 0.5) * scatterDistance * 2,
//       rotate: Math.random() * 360,
//     }
//   }, [scatterDistance])

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     scattered: () => ({
//       ...getRandomPosition(),
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     }),
//     default: {
//       x: 0,
//       y: 0,
//       rotate: 0,
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//   }

//   // Memoize the text processing
//   const processedText = useMemo(() => {
//     const text = Array.isArray(children) ? children.join("") : children
//     return text.split("")
//   }, [children])

//   return (
//     <motion.div
//       className={clsx("inline-block select-none cursor-pointer", className)}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         {processedText.map((char, index) => (
//           <motion.span
//             key={`${char}-${index}`}
//             custom={index}
//             variants={letterVariants}
//             animate={isHovered ? "scattered" : "default"}
//             className={clsx(
//               "inline-block",
//               "transition-colors duration-200",
//               isHovered && "text-primary" // Assuming you have a primary color in your Tailwind config
//             )}
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default AnimatedText


// "use client"

// import { useState, useMemo, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import clsx from "clsx"

// type AnimatedTextProps = {
//   children: string | string[]
//   className?: string
//   scatterDistance?: number
//   duration?: number
//   staggerChildren?: number
// }

// export const AnimatedText = ({
//   children,
//   className = "",
//   scatterDistance = 50,
//   duration = 0.3,
//   staggerChildren = 0.02,
// }: AnimatedTextProps) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)
//   const [randomPositions, setRandomPositions] = useState<Array<{ x: number; y: number; rotate: number }>>([])

//   // Handle mounting state
//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   // Generate random positions when hover state changes
//   useEffect(() => {
//     if (isHovered) {
//       const newPositions = Array.from({ length: processedText.length }, () => ({
//         x: (Math.random() - 0.5) * scatterDistance * 2,
//         y: (Math.random() - 0.5) * scatterDistance * 2,
//         rotate: Math.random() * 360,
//       }))
//       setRandomPositions(newPositions)
//     }
//   }, [isHovered])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     scattered: (index: number) => ({
//       ...(randomPositions[index] || { x: 0, y: 0, rotate: 0 }),
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     }),
//     default: {
//       x: 0,
//       y: 0,
//       rotate: 0,
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//   }

//   const processedText = useMemo(() => {
//     const text = Array.isArray(children) ? children.join("") : children
//     return text.split("")
//   }, [children])

//   // Prevent hydration issues by not rendering until mounted
//   if (!isMounted) {
//     return null
//   }

//   return (
//     <motion.div
//       className={clsx("inline-block select-none cursor-pointer", className)}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         {processedText.map((char, index) => (
//           <motion.span
//             key={`${char}-${index}`}
//             custom={index}
//             variants={letterVariants}
//             animate={isHovered ? "scattered" : "default"}
//             className={clsx(
//               "inline-block",
//               "transition-colors duration-200",
//               isHovered && "text-primary"
//             )}
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default AnimatedText


// "use client"

// import { useState, useMemo, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// // import { clsx } from "@/lib/utils"
// import clsx from "clsx"

// type AnimatedTextProps = {
//   children: string | string[]
//   className?: string
//   scatterDistance?: number
//   duration?: number
//   staggerChildren?: number
// }

// export const AnimatedText = ({
//   children,
//   className = "",
//   scatterDistance = 50,
//   duration = 0.3,
//   staggerChildren = 0.02,
// }: AnimatedTextProps) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)
//   const [positions, setPositions] = useState<{ x: number; y: number; rotate: number }[]>([])

//   // Process text once on mount
//   const processedText = useMemo(() => {
//     const text = Array.isArray(children) ? children.join("") : children
//     return text.split("")
//   }, [children])

//   // Handle mounting
//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   // Generate positions when hover state changes
//   useEffect(() => {
//     if (isHovered) {
//       const newPositions = processedText.map(() => ({
//         x: (Math.random() - 0.5) * scatterDistance * 2,
//         y: (Math.random() - 0.5) * scatterDistance * 2,
//         rotate: Math.random() * 360,
//       }))
//       setPositions(newPositions)
//     } else {
//       setPositions(processedText.map(() => ({ x: 0, y: 0, rotate: 0 })))
//     }
//   }, [isHovered, scatterDistance, processedText.length, processedText])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     scattered: (index: number) => ({
//       x: positions[index]?.x || 0,
//       y: positions[index]?.y || 0,
//       rotate: positions[index]?.rotate || 0,
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     }),
//     default: {
//       x: 0,
//       y: 0,
//       rotate: 0,
//       transition: {
//         duration,
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//   }

//   if (!isMounted) return null

//   return (
//     <motion.div
//       className={clsx("inline-block select-none cursor-pointer", className)}
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         {processedText.map((char, index) => (
//           <motion.span
//             key={`${char}-${index}`}
//             custom={index}
//             variants={letterVariants}
//             animate={isHovered ? "scattered" : "default"}
//             className={clsx(
//               "inline-block",
//               "transition-colors duration-200",
//               isHovered && "text-primary"
//             )}
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default AnimatedText



// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import clsx from "clsx"


// type AnimatedTextProps = {
//   children: string | string[]
//   className?: string
// }

// export const AnimatedText = ({
//   children,
//   className = "",
// }: AnimatedTextProps) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   const text = Array.isArray(children) ? children.join("") : children
//   const letters = text.split("")

//   // Animation configuration
//   const getRandomScatter = () => ({
//     x: Math.random() * 100 - 50, // Random value between -50 and 50
//     y: Math.random() * 100 - 50, // Random value between -50 and 50
//     rotate: Math.random() * 360, // Random rotation
//     scale: 1 + Math.random() * 0.5, // Random scale between 1 and 1.5
//   })

//   if (!isMounted) return null

//   return (
//     <div
//       className={clsx("inline-block cursor-pointer", className, className='bg-yellow-500')}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {letters.map((letter, index) => (
//         <motion.span
//           key={index}
//           animate={
//             isHovered
//               ? {
//                   ...getRandomScatter(),
//                   transition: {
//                     type: "spring",
//                     damping: 10,
//                     stiffness: 100,
//                   },
//                 }
//               : {
//                   x: 0,
//                   y: 0,
//                   rotate: 0,
//                   scale: 1,
//                   transition: {
//                     type: "spring",
//                     damping: 15,
//                     stiffness: 150,
//                   },
//                 }
//           }
//           className="inline-block"
//           style={{ display: 'inline-block' }}
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </motion.span>
//       ))}
//     </div>
//   )
// }

// export default AnimatedText


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

type AnimatedTextProps = {
  children: string | string[]
  className?: string
}

export const AnimatedText = ({
  children,
  className = "",
}: AnimatedTextProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const text = Array.isArray(children) ? children.join("") : children
  const letters = text.split("")

  // Animation configuration
  const getRandomScatter = () => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 360,
    scale: 1 + Math.random() * 0.5,
  })

  if (!isMounted) return null

  return (
    <motion.div
      className={clsx("inline-block relative", className)}
      initial={false}
      whileHover="hover"
      animate="rest"
    >
      <div 
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hover: getRandomScatter(),
              rest: {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }
            }}
            transition={{
              type: "spring",
              damping: isHovered ? 10 : 15,
              stiffness: isHovered ? 100 : 150,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default AnimatedText
