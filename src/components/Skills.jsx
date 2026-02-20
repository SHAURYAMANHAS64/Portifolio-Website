import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const frontendSkills = [
  { name: "React.JS", icon: "/react.svg", color: "#61DAFB" },
  { name: "Vite", icon: "/vite.svg", color: "#646CFF" },
  { name: "Node.JS", icon: "/Node.js_logo.svg.png", color: "#68A063" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#38BDF8" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
];

const designSkills = [
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", color: "#31A8FF" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#A259FF" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.1,
        y: -8,
        boxShadow: `0 0 35px ${skill.color}44`,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.97 }}
      className="relative w-48 h-64 overflow-hidden rounded-xl cursor-pointer group"
      style={{ boxShadow: `0 4px 15px ${skill.color}22` }}
    >
      {/* Animated glowing border */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${skill.color}, #7159d9, ${skill.color})`,
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner card */}
      <div className="absolute flex flex-col items-center justify-center z-[1] rounded-xl inset-[2px] bg-[#0d0d0d] group-hover:bg-[#111111] transition-colors duration-300">
        {/* Background glow effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}33 0%, transparent 70%)`,
          }}
        />

        {/* Icon with hover animation */}
        <motion.img
          src={skill.icon}
          alt={`${skill.name} Logo`}
          className="w-16 h-16 object-contain relative z-10 drop-shadow-lg"
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        />

        {/* Skill name */}
        <p className="text-white mt-4 font-semibold text-sm tracking-wide relative z-10">
          {skill.name}
        </p>

        {/* Animated glow dot */}
        <motion.div
          className="absolute bottom-4 w-2 h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top corner accent */}
        <div
          className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
}

function SkillSection({ title, skills }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="mb-20">
      <motion.h3
        className="text-2xl font-bold text-white text-center mb-10 tracking-wide"
        variants={titleVariants}
        initial="hidden"
        animate={controls}
      >
        <span className="relative inline-block">
          {title}
          <motion.span
            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </span>
      </motion.h3>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 mx-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

function Skill() {
  return (
    <div className="mb-10 py-8">
      <SkillSection title="Frontend Development" skills={frontendSkills} />
      <SkillSection title="Graphic Design" skills={designSkills} />
    </div>
  );
}

export default Skill;
