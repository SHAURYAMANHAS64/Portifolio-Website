import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Bouncypic(){
  const Ball = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundImage: "url('/shaurya.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    // position: "absolute",
    top: "47%",
    // left: "47%",
    transform: "translate(50%, 50%)",

  }
  return (
    <motion.div
      style={Ball}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.3 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
}

export default Bouncypic
    