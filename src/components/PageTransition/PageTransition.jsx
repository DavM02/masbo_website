import { useEffect } from "preact/hooks"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
 
import { getScrollBar } from "../Scroll/ScrollAccess"
export default function PageTransition({children, ...props}) {

  
  useEffect(() => {
  
    return () => {
      if (getScrollBar()) {
        getScrollBar()?.scrollTo(0, 0, 0)
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

      }
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...props}>
      {children}
    </motion.div>
  )
}
