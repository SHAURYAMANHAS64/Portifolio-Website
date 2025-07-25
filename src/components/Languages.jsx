import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Languages(){
 const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y:  50 });
    }
  }, [inView, controls]);
    return (
      <>
        <motion.div className="flex flex-wrap items-center justify-center gap-10 mr-10 ml-10 mb-10 "
        ref={ref} 
        initial={{ opacity: 0, y: 50 }} 
        animate={controls} 
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#7159d9]">
          <div class="absolute flex flex-col items-center justify-center text-black z-[1]  rounded-xl inset-0.5 bg-[#000000c2]">
             <img src="\C_Programming_Language.svg.png" alt="React Logo" className="w-16 h-16" />
                <p className="text-white mt-2">C</p>

          </div>
          
        </div>

        <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#7159d9]">
          <div class="absolute flex flex-col items-center justify-center text-white z-[1]  rounded-xl inset-0.5 bg-[#000000c2]">
           <img src="\C++_Logo.png" alt="Vite Logo" className="w-16 h-16" />
                <p className="text-white mt-2">C++</p>


          </div>
          
        </div>
        <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#7159d9]">
          <div class="absolute flex flex-col items-center justify-center text-white z-[1]  rounded-xl inset-0.5 bg-[#000000c2]">
            <img src="\Python.svg.png" alt="Node.js Logo" className="w-20 h-16" />
                <p className="text-white mt-2">Python</p>
          </div>

        
        </div>
      
        </motion.div>
      </>
    );  
}
export default Languages;
