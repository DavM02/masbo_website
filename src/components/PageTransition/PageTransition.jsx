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
    const [ pathname, setPathname ] = useState(null);
    // useBlocker(({ currentLocation: current, nextLocation: next }) => {
    //   return isAnimating && current.pathname !== next.pathname;
    //   // || currentLocation.pathname === nextLocation.pathname
    // });
console.log(pathname)
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
        <div
          data-mode={pathname ? "light" : "dark"}>
          <Component
            {...props} />
        </div>
 
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
                const getPath = window.location.pathname.split('/')
                setPathname(getPath[2])
                setIsAnimating(false);
              }}
              initial={{ transform: 'translateY(0)' }}
              animate={{ transform: 'translateY(-100%)' }}
              exit={{
                transform: 'translateY(-100%)',
                transition: {
                  delay:  1.1,
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
              exit={{
                transform: 'translateY(-100%)',
                transition: {
                  delay: 1.1,
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