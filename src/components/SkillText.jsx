import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillText({ name }) {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white font-bold text-4xl text-center "
    >
      {name}
    </motion.div>
  );
}

export default SkillText;
