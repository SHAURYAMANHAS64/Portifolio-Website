import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    "Thumbnails",
    "Posters",
    "Banners",
    "Social Media",
    "React Sites",
    "Landing Pages",
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-4 sm:mx-10 mb-10"
    >
      <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-white">About Me</h3>
          <span className="flex items-center gap-2 text-sm text-[#1bffc2] font-medium">
            <span className="w-2 h-2 bg-[#1bffc2] rounded-full animate-pulse"></span>
            Open to freelance
          </span>
        </div>

        {/* Bio */}
        <div className="space-y-4 mb-6">
          <p className="text-xl sm:text-2xl font-light text-white/90 leading-relaxed">
            I'm <span className="font-semibold text-[#a78bfa]">Shaurya Manhas</span> — 
            a frontend developer and graphic designer who loves building clean interfaces 
            with React and crafting visuals in Photoshop.
          </p>
          <p className="text-base text-white/60 leading-relaxed">
            I create eye-catching thumbnails, posters, and social media graphics alongside 
            responsive websites that bring ideas to life.
          </p>
        </div>

        {/* Freelance */}
        <div className="pt-5 border-t border-white/10">
          <p className="text-sm text-white/50 mb-3 uppercase tracking-wider">Available for</p>
          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-sm text-white/80 bg-[#7159d9]/20 rounded-full border border-[#7159d9]/30 
                           hover:bg-[#7159d9]/30 hover:border-[#7159d9]/50 transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPreview;
