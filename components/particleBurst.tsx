"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTruth } from "@/hooks/store"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export default function ParticleBurst() {
  const {isChanged } = useTruth()
  const [particles, setParticles] = useState<Particle[]>([])
  useEffect(() => {
    if (isChanged) {
      const newParticles = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      }))
      setParticles(newParticles)
    }
  }, [isChanged])

  if (!isChanged) return null

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{ x: 0, y: 0, scale: 0 }}
          animate={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 1,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  )
}

