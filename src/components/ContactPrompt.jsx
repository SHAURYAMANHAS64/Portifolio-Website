import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

function ContactPrompt() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex items-center justify-center mx-10 mb-10"
    >
      <section className="relative overflow-hidden text-center py-20 px-12 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a2e] rounded-3xl w-full max-w-3xl shadow-2xl border border-white/5">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#7159d9] opacity-15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#7159d9] opacity-10 rounded-full blur-3xl pointer-events-none" />

        <motion.div variants={childVariants} className="flex justify-center mb-6">
          <div className="bg-[#7159d9]/20 p-4 rounded-full">
            <FaEnvelope className="text-[#7159d9] text-3xl" />
          </div>
        </motion.div>

        <motion.h2
          variants={childVariants}
          className="text-4xl font-extrabold text-white mb-3 tracking-tight"
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-gray-400 mb-8 max-w-md mx-auto text-lg leading-relaxed"
        >
          Have an idea, opportunity, or just want to say hi? I'd love to hear
          from you.
        </motion.p>

        <motion.div variants={childVariants}>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="group relative inline-flex items-center gap-2 bg-[#7159d9] text-white px-8 py-3.5 rounded-xl font-semibold text-lg
              hover:bg-[#8a70f0] hover:shadow-lg hover:shadow-[#7159d9]/30
              active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Contact Me
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default ContactPrompt;
