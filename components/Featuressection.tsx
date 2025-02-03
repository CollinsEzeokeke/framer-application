// "use client"

// import { useRef, useState, useEffect } from "react"
// import { useScroll, useSpring } from "framer-motion"
// import FeatureCard from "@/components/Featurecard"

// const features = [
//   {
//     title: "Feature 1",
//     description:
//       "Description for feature 1. This innovative feature enhances user experience by providing intuitive navigation and seamless interaction.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     title: "Feature 2",
//     description:
//       "Description for feature 2. Our advanced algorithms ensure optimal performance and efficiency, setting new standards in the industry.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     title: "Feature 3",
//     description:
//       "Description for feature 3. With cutting-edge security measures, your data is protected at all times, giving you peace of mind.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     title: "Feature 4",
//     description:
//       "Description for feature 4. Experience unparalleled customization options, tailoring the application to your specific needs and preferences.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function FeaturesSection() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [currentFeature, setCurrentFeature] = useState(0)

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   })

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   })

//   useEffect(() => {
//     const unsubscribe = smoothProgress.onChange((latest) => {
//       const newFeature = Math.min(features.length - 1, Math.floor(latest * features.length))
//       setCurrentFeature(newFeature)
//     })

//     return () => unsubscribe()
//   }, [smoothProgress])

//   return (
//     <div ref={containerRef} className="relative min-h-screen">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         {features.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             feature={feature}
//             isActive={index === currentFeature}
//             index={index}
//             total={features.length}
//           />
//         ))}
//       </div>
//       <div style={{ height: `${features.length * 100}vh` }} />
//     </div>
//   )
// }




"use client"

import { useRef, useState, useEffect } from "react"
import { useScroll, useSpring } from "framer-motion"
import FeatureCard from "@/components/Featurecard"

const features = [
  {
    title: "Feature 1",
    description:
      "Description for feature 1. This innovative feature enhances user experience by providing intuitive navigation and seamless interaction.",
    image: "/placeholder.svg?height=300&width=400",
    color: "#3B82F6", // blue-500
  },
  {
    title: "Feature 2",
    description:
      "Description for feature 2. Our advanced algorithms ensure optimal performance and efficiency, setting new standards in the industry.",
    image: "/placeholder.svg?height=300&width=400",
    color: "#10B981", // emerald-500
  },
  {
    title: "Feature 3",
    description:
      "Description for feature 3. With cutting-edge security measures, your data is protected at all times, giving you peace of mind.",
    image: "/placeholder.svg?height=300&width=400",
    color: "#F59E0B", // amber-500
  },
  {
    title: "Feature 4",
    description:
      "Description for feature 4. Experience unparalleled customization options, tailoring the application to your specific needs and preferences.",
    image: "/placeholder.svg?height=300&width=400",
    color: "#EF4444", // red-500
  },
]

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFeature, setCurrentFeature] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      const newFeature = Math.min(features.length - 1, Math.floor(latest * features.length))
      setCurrentFeature(newFeature)
    })

    return () => unsubscribe()
  }, [smoothProgress])

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            currentFeature={currentFeature}
            index={index}
          />
        ))}
      </div>
      <div style={{ height: `${features.length * 100}vh` }} />
    </div>
  )
}

