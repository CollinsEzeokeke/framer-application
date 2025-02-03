import { motion, useMotionTemplate, useMotionValue, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

interface FeatureCardProps {
  feature: {
    title: string
    description: string
    image: string
    color: string
  }
  currentFeature: number
  index: number
}

export default function FeatureCard({ feature, currentFeature, index }: FeatureCardProps) {
  const isActive = index === currentFeature
  const hasAppeared = index <= currentFeature

  const yOffset = `${(currentFeature - index) * 10}vh`
  const scale = 1 - Math.max(0, (currentFeature - index) * 0.05)
  const opacity = Math.max(0.5, 1 - (currentFeature - index) * 0.2)

  const gradientProgress = useMotionValue(0)
  const gradient = useMotionTemplate`radial-gradient(125% 125% at 100% 0%, #020617 50%, ${feature.color})`

  const borderControls = useAnimationControls()

  useEffect(() => {
    if (isActive) {
      borderControls.start({
        pathLength: [0, 0.5, 1],
        pathOffset: [0, 0.5, 1],
        transition: {
          duration: 4,
          times: [0, 0.8, 1],
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    } else {
      borderControls.stop()
    }
  }, [isActive, borderControls])

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{
        opacity: hasAppeared ? opacity : 0,
        y: hasAppeared ? yOffset : "100%",
        scale,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      style={{ zIndex: index }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl w-4/5 h-3/4 p-8 flex items-center overflow-hidden relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, ${feature.color}00 0deg, ${feature.color} 360deg)`,
            opacity: 0.1,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: gradient,
            opacity: gradientProgress,
          }}
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
            stroke={feature.color}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={borderControls}
            filter="url(#glow)"
          />
        </svg>
        {index % 2 === 0 ? (
          <>
            <motion.div
              className="w-1/2 pr-8 z-10"
              initial={{ x: "100%" }}
              animate={{ x: isActive ? 0 : "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
            <motion.div
              className="w-1/2 z-10"
              initial={{ x: "100%" }}
              animate={{ x: isActive ? 0 : "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className="w-1/2 z-10"
              initial={{ x: "-100%" }}
              animate={{ x: isActive ? 0 : "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              className="w-1/2 pl-8 z-10"
              initial={{ x: "-100%" }}
              animate={{ x: isActive ? 0 : "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

