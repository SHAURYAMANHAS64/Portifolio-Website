// src/components/AnimatedHeader.jsx
import { useEffect } from "react";

function AnimatedHeader(){
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-200 p-6 rounded-xl shadow-lg text-center"
    >
      <h2 className="text-2xl font-semibold">Scroll to Fade In!</h2>
      <p>This box will animate when it appears on screen.</p>
    </motion.div>
  );
}

export default AnimatedHeader;
