import { getScrollBar } from "../Scroll/ScrollAccess";
import { motion } from "framer-motion";

 
export default function SlideIn({setIsAnimating}) {

  
  return (
    <div
      className="slide-in row">
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(100%)' }}
          exit={{ transform: 'translateY(0)' }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: [ 0.65,
            0,
            0.35,
            1 ]
            ,
          }}
          onAnimationStart={() => {
               
            if (i === 0) {
              if (!document.body.classList.contains("overlay-opened")) {
                document.body.style.overflow = 'hidden'
                document.body.querySelector("#scroll-wrapper").style.overflow = 'hidden'
              }
      
              setIsAnimating(true);
              getScrollBar()?.updatePluginOptions("overflow", {
                open: true,
              });
            }

          }} />
      ))}
    </div>
  )
}

 
 
 