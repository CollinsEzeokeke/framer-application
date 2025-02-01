"use client";

import clsx from "clsx";
import { motion, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingCounterProps {
  onComplete?: () => void;
}

const LoadingCounter = ({ onComplete }: LoadingCounterProps) => {
  const [order, setOrder] = useState(initialOrder);
  const [displayCount, setDisplayCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const count = animate(0, 100, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
      onComplete: () => {
        setIsComplete(true);
        onComplete?.();
      },
    });

    return () => {
      count.stop();
    };
  }, [onComplete]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrder(shuffle([...order]));
    }, 200);

    return () => {
      clearTimeout(timeout);
    }; 

  }, [order]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="loading-container flex items-center justify-center text-6xl font-bold mb-8"
        id="loading"
        layout
        layoutId="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.span>{displayCount}</motion.span>
        <span>%</span>
      </motion.div>

      <ul className="list-none p-10 m-0 absolute flex flex-wrap w-[400px] flex-row h-[430px] justify-center items-center grid-cols-4 gap-20">
        <AnimatePresence>
          {!isComplete &&
            order.map((color) => (
              <motion.li
                key={color}
                style={{ backgroundColor: color }}
                className={clsx(
                  "w-[100px] h-[100px] rounded shadow-lg",
                  "transition-transform hover:scale-105"
                )}
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  damping: 20,
                  stiffness: 150,
                  duration: 1.5,
                  type: "spring",
                }}
              />
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

const initialOrder = [
  "#E41B17", // Bright Red
  "#7D0541", // Deep Purple
  "#CA226B", // Pink
  "#E2F516", // Yellow
];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

export default LoadingCounter;





// "use client";

// import clsx from "clsx";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   AnimatePresence,
// } from "framer-motion";
// import { useEffect, useState } from "react";

// interface LoadingCounterProps {
//   onComplete?: () => void;
// }

// const LoadingCounter = ({ onComplete }: LoadingCounterProps) => {
//   const [order, setOrder] = useState(initialOrder);
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayCount, setDisplayCount] = useState(0);
//   const count = useMotionValue(0);

//   useEffect(() => {
//     setIsVisible(false);
//     const timeout = setTimeout(() => {
//       setOrder(shuffle(order));
//     }, 200);

//     const controls = animate(count, 100, {
//       duration: 1,
//       onUpdate: (latest) => {
//         setDisplayCount(Math.round(latest));
//       },
//       onComplete: () => {
//         setIsVisible(true);
//       },
//     });

//     return () => {
//       controls.stop();
//       clearTimeout(timeout);
//     };
//   }, [count, onComplete, order]);

// console.log(isVisible)
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <motion.div
//         className="loading-container flex items-center justify-center text-6xl font-bold mb-8"
//         id="loading"
//         layout
//         layoutId="loading"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <motion.span>{displayCount}</motion.span>
//         <span>%</span>
//       </motion.div>

//       <ul className="list-none p-10 m-0 absolute flex flex-wrap w-[400px] flex-row h-[430px] justify-center items-center grid-cols-4 gap-20">
//         <AnimatePresence>
//           {isVisible === true || order.map((color) => (
//               <motion.li
//                 key={color}
//                 style={{ backgroundColor: color }}
//                 className={clsx(
//                   "w-[100px] h-[100px] rounded shadow-lg",
//                   "transition-transform hover:scale-105"
//                 )}
//                 layout
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 0.5 }}
//                 transition={{
//                   damping: 20,
//                   stiffness: 300,
//                   duration: 1.5,
//                   type: "spring",
//                 }}
//                 exit={{ opacity: 0 }}
//               />
//             ))}
//         </AnimatePresence>
//       </ul>
//     </div>
//   );
// };

// const initialOrder = [
//   "#E41B17", // Bright Red
//   "#7D0541", // Deep Purple
//   "#CA226B", // Pink
//   "#E2F516", // Yellow
// ];

// function shuffle([...array]: string[]) {
//   return array.sort(() => Math.random() - 0.5);
// }

// export default LoadingCounter;
