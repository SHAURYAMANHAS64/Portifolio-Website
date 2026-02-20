import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Languages() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const languages = [
    {
      name: "C",
      img: "/C_Programming_Language.svg.png",
      color: "#5C6BC0",
      imgClass: "w-16 h-16",
    },
    {
      name: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00",
      imgClass: "w-16 h-16",
    },
  ];

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-12 mx-10 mb-10"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {languages.map((lang) => (
        <motion.div
          key={lang.name}
          variants={cardVariants}
          whileHover={{ scale: 1.08, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className="relative drop-shadow-xl w-52 h-72 overflow-hidden rounded-2xl cursor-pointer"
          style={{ background: lang.color }}
        >
          <div className="absolute flex flex-col items-center justify-center z-[1] rounded-2xl inset-0.5 bg-[#0a0a0af0] hover:bg-[#0a0a0ad0] transition-colors duration-300">
            <div className="p-4 rounded-full bg-white/5 mb-4">
              <img
                src={lang.img}
                alt={`${lang.name} Logo`}
                className={lang.imgClass}
              />
            </div>
            <p className="text-white text-lg font-semibold tracking-wide">
              {lang.name}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Languages;
