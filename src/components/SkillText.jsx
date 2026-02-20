import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillText({ name }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 30, scale: 0.9, filter: "blur(8px)" }
      }
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-extrabold text-5xl md:text-6xl text-center tracking-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-default"
    >
      {name}
    </motion.div>
  );
}

export default SkillText;
