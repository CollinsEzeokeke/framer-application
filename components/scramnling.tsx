import { motion } from "framer-motion";

export default function FlipText({ children }: { children: string }) {
  return (
    <motion.span
      className="inline-block relative z-50 overflow-hidden"
      initial="initial"
      whileHover="hovered"
      style={{ lineHeight: '1.2' }}
    >
      {/* Visible text layer */}
      <div className="relative z-10">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "0%" },
              hovered: { y: "-100%" },
            }}
            transition={{
              delay: i * 0.02,
              type: "spring",
              bounce: 0.3,
              duration: 0.4
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Hidden overflow layer */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <div className="relative">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              className="absolute inline-block left-0"
              variants={{
                initial: { y: "100%" },
                hovered: { y: "0%" },
              }}
              transition={{
                delay: i * 0.02,
                type: "spring",
                bounce: 0.3,
                duration: 0.4
              }}
              style={{ top: `${i * 100}%` }}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.span>
  );
}
