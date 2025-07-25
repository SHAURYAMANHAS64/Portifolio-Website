import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card( { link, name,desc,pic }){
  
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

    return(
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, 
                    ease: "easeOut",
                    }}  
      className="relative flex w-80 flex-col rounded-xl bg-[#000000c2] bg-clip-border text-white shadow-md"
    >
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg">
        <img src={pic} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h5 className="mb-2 block  text-xl font-semibold  tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
          {desc}
         
        </p>
      </div>

      <div className="p-6 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="select-none rounded-lg bg-[#7159d9] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
            disabled:pointer-events-none 
            disabled:opacity-50 
            disabled:shadow-none
            cursor-pointer
            "
            
          >
            View Project
          </button>
        </a>
      </div>
    </motion.div>
    );
}
export default Card                                                                                                                                                                                                                                                                                 