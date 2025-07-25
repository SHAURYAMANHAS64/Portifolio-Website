import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContactPrompt() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center  mr-10 ml-10 mb-10 "
      >
        <section className="text-center py-16 bg-[#000000c2] bg-opacity-50 backdrop-blur-md rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect!</h2>
          <p className="text-gray-400 mb-6">
            Have an idea, opportunity, or just want to say hi? I'd love to hear
            from you.
          </p>

          <button onClick={() => window.location.href = "/contact"} className="bg-[#7159d9] text-white px-6 py-3 rounded-lg hover:bg-[#7a5ed9]  cursor-pointer" >
            Contact Me
          </button>
        </section>
      </motion.div>
    </>
  );
}

export default ContactPrompt;
