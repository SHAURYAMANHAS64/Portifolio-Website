import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const textVariants = [
  {
    heading: "Welcome To My",
    subtext: "Portfolio Website",
  },
  {
    heading: "I'm Shaurya",
    subtext: "Frontend Developer | Graphics designer",
  },
  {
    heading: "I Build",
    subtext: "Designs & Responsive Web Experience",
  },
  {
    heading: "Let's Connect",
    subtext: "Scroll down to explore my work",
  },
];

const textAnimation = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -40, filter: "blur(8px)" },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

function AnimatedText() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textVariants.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentText = textVariants[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-transparent"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={textAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl font-semibold">
            {currentText.heading.split("").map((char, i) => (
              <motion.span
                key={`${index}-${i}`}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            {currentText.subtext}
          </motion.p>
          <motion.div
            className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedText;