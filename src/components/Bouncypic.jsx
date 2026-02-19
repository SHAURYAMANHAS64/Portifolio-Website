import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

function Bouncypic() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        height: 180,
      }}
    >
      {/* Glowing ring behind the image */}
      <motion.div
        style={{
          position: "absolute",
          width: 170,
          height: 170,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
          filter: isHovered ? "blur(12px)" : "blur(8px)",
          zIndex: 0,
        }}
        animate={{
          rotate: 360,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Main image */}
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundImage: "url('/shaurya123.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          cursor: "pointer",
          zIndex: 1,
        }}
        initial={{ opacity: 0, scale: 0, filter: "blur(20px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.15 },
        }}
      />

      {/* Subtle floating particles on hover */}
      <AnimatePresence>
        {isHovered &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "rgba(168, 85, 247, 0.8)",
                zIndex: 2,
                pointerEvents: "none",
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos((i * 60 * Math.PI) / 180) * 100,
                y: Math.sin((i * 60 * Math.PI) / 180) * 100,
                opacity: 0,
                scale: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}

export default Bouncypic;