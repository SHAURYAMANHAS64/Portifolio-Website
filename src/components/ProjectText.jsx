import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectText() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em]"
      >
        My Work
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-white font-extrabold text-5xl md:text-6xl text-center bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        className="text-gray-400 text-base md:text-lg text-center max-w-md mt-2"
      >
        A curated collection of projects that showcase my skills and passion for development.
      </motion.p>
    </div>
  );
}

export default ProjectText;
