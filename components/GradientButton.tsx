import type React from "react"
import { motion } from "framer-motion"

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      className="relative px-6 py-3 font-bold text-white rounded-full group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span className="relative">{children}</span>
    </motion.button>
  )
}

export default GradientButton

