import { getScrollBar } from "../Scroll/ScrollAccess";
import { motion } from "framer-motion";
 
const COUNT = 4;
const STAGGER = 0.12;
 
export default function SlideOut({setIsAnimating}) {
  return (
    <div
      className="slide-out row">
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ transform: 'translateY(0)' }}
          animate={{ transform: 'translateY(-100%)' }}
          transition={{ delay: STAGGER * (COUNT - 1 - i), duration: 0.5, ease: [ 0.65,
            0,
            0.35,
            1 ]
            , }}
          onAnimationComplete={() => {
            if (i === 0) {

              setIsAnimating(false);
              document.body.querySelector("#scroll-wrapper").style.overflow = 'initial'
              document.body.removeAttribute("class");

              if (!document.body.classList.contains("overlay-opened")) {
                document.body.removeAttribute("style")
              }

              requestAnimationFrame(() => {
                getScrollBar()?.update();
                getScrollBar()?.updatePluginOptions("overflow", {
                  open: false,
                });
              })
            }
          }} />
      ))}
    </div>
  )
}


 
