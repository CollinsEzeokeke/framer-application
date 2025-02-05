"use client";

import FeatureCard from "@/components/Featurecard";
import TextGradientScroll from "./ui/scrollGradient";
import { motion } from "framer-motion";
import ParticleBurst from "./particleBurst";

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
];

export default function FeaturesSection() {
  return (
    <>
        <ParticleBurst/>

      <div className="overflow-hidden h-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-[40%] -left-[40%] w-[80vw] h-[80vh] bg-gradient-conic from-cyan-500 via-transparent to-transparent rounded-full animate-pulse mix-blend-screen" />
        </div>

        <div className="relative h-[40vh] flex items-center justify-center flex-col px-4 md:px-8">
          <h2 className="font-bold text-6xl mb-6 text-transparent bg-clip-text text-white tracking-tighter">
            <TextGradientScroll
              text="Features"
              textOpacity="soft"
              type="letter"
            />
          </h2>
          <h3 className="text-lg text-center opacity-70 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <TextGradientScroll
              text="With ground breaking and renovative approach..."
              textOpacity="soft"
              type="letter"
              className="font-medium"
            />
          </h3>
        </div>
        <motion.div className="h-full absolute">
          <FeatureCard features={features} />
        </motion.div>
      </div>
      <div className="mb-[5000px]" />
    </>
  );
}
