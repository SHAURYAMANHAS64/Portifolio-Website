import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function AnimatedText() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [showAltText, setShowAltText] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAltText(true);
    }, 3000); // Change text after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-transparent"
    >
      <AnimatePresence mode="wait">
        {showAltText ? (
          <motion.div
            key="alt"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
         
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-semibold">I'm Shaurya</h2>
            <p className="text-lg">Frontend Developer | React Enthusiast</p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
  
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-semibold">Welcome To My </h2>
            <p className="text-lg">Portfolio Website</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedText;