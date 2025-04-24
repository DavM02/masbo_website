import {  useEffect, useState } from "preact/hooks"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { getScrollBar } from "../Scroll/ScrollAccess"
import { motion } from "framer-motion";
import { createPortal } from "preact/compat";
// import { useBlocker } from "react-router-dom";
import "./pageTransition.scss";

function PageTransition(Component) {
  return function WrappedComponent(props) {

    const [ isAnimating, setIsAnimating ] = useState(false);
 
    // useBlocker(({ currentLocation: current, nextLocation: next }) => {
    //   return isAnimating && current.pathname !== next.pathname;
    //   // || currentLocation.pathname === nextLocation.pathname
    // });


 
    useEffect(() => {

      return () => {
        if (getScrollBar()) {
         
          getScrollBar()?.scrollTo(0, 0, 0)
 
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        }
        ScrollTrigger.killAll()
      }

    }, []);

    return (
      <>
 
        <Component
          {...props} />
      
        {createPortal(
          <>
            <motion.div
              onAnimationStart={() => {
                setIsAnimating(true);
              }}
              initial={{ transform:  'translateY(100%)' }}
              animate={{ transform: 'translateY(100%)' }}
              exit={{ transform: 'translateY(0)' }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [ 0.645,
                  0.045,
                  0.355,
                  1 ],
              }}
              className="slide-in">
            </motion.div>

            <motion.div
              initial={{ transform:  'translateY(100%)' }}
              animate={{ transform: 'translateY(100%)' }}
              exit={{ transform: 'translateY(0)' }}

              transition={{
      
                duration: 1,
                ease: [ 0.645,
                  0.045,
                  0.355,
                  1 ],
              }}
              className="slide-in delayed">
            </motion.div>

            

            <motion.div
 
              onAnimationComplete={() => {
                setIsAnimating(false);

              }}
              initial={{ transform: 'translateY(0)' }}
              animate={{ transform: 'translateY(-100%)' }}
              exit={{
                transform: 'translateY(-100%)',
                transition: {
                  delay:  1.2,
                },
              }}
              transition={{ 
                duration: 1,
                ease: [ 0.645,
                  0.045,
                  0.355,
                  1 ],
              }}
              className="slide-out"></motion.div>
            
            <motion.div
              initial={{ transform: 'translateY(0)' }}
              animate={{ transform: 'translateY(-100%)' }}
              onAnimationStart={(e) => {
                if (e.transform !== "translateY(0)") {
               
                  getScrollBar()?.updatePluginOptions('overflow', { open: true })
                }
                
              }}
 
              onAnimationComplete={(e) => {
                if (!e.transition) {

   
                  getScrollBar()?.updatePluginOptions('overflow', { open: false })
              
                }
              
              }}
              exit={{
                transform: 'translateY(-100%)',
                transition: {
                  delay: 1.2,
                },
              }}
              transition={{ 
                delay: 0.2,
                duration: 1,
                ease: [ 0.645,
                  0.045,
                  0.355,
                  1 ],
              }}
              className="slide-out delayed"></motion.div>
          </>,
          document.querySelector("#modal-root")
        )}
      </>
    );
  };
}

export default PageTransition;