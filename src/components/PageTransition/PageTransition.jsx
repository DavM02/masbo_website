import {  useState, useContext } from "preact/hooks";
import { MainContext } from "@context/MainContext";
import { getScrollBar } from "../Scroll/ScrollAccess";
import { motion } from "framer-motion";
import { createPortal } from "preact/compat";
import { useBlocker } from "react-router-dom";
import "./pageTransition.scss";

import { resetOverlayAndScroll } from "./resetOverlayAndScroll";

import { BLOCKS, containerVariants, slideInItem, slideOutItem} from "./pageTransitionConfig";


function PageTransition(Component) {
  return function WrappedComponent(props) {
    const [ isAnimating, setIsAnimating ] = useState(false);

    useBlocker(({ currentLocation, nextLocation }) => {
      return isAnimating && currentLocation.pathname !== nextLocation.pathname;
    });
    
    const {closeTl} = useContext(MainContext)

    return (
      <>
        <Component
          {...props} />

        {createPortal(
          <div
            className="page-transition"
            style={{ pointerEvents: isAnimating ? "all" : "none" }}>
   
            <motion.div
              className="slide-in row"
              variants={containerVariants}
              initial="hidden"
              animate="hidden"
              exit="show"
              onAnimationStart={() => {
               
                if (!document.body.classList.contains("overlay-opened")) {
                  document.body.style.overflow = 'hidden'
                }

                setIsAnimating(true);
                getScrollBar()?.updatePluginOptions("overflow", {
                  open: true,
                });

              }}>
              {Array.from({ length: BLOCKS }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={slideInItem}
                  onAnimationComplete={
                    i === BLOCKS - 1 ? () => {
                      resetOverlayAndScroll(closeTl)
                    } : undefined
                  } />
              ))}
            </motion.div>

 
            <motion.div
              className="slide-out row"
              variants={containerVariants}
              initial="hidden"
              animate="show">
              {Array.from({ length: BLOCKS }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={slideOutItem}
                  onAnimationComplete={
                    i === BLOCKS - 1
                      ? () => {
                        setIsAnimating(false);

                        document.body.removeAttribute("class");

                        if (!document.body.classList.contains("overlay-opened")) {
                          document.body.removeAttribute("style")
                        }

                        requestAnimationFrame(() => {
                          getScrollBar()?.update();
                          getScrollBar()?.updatePluginOptions("overflow", {
                            open: false,
                          });
                        });

                      }
                      : undefined
                  } />
              ))}
            </motion.div>
          </div>,
          document.querySelector("#modal-root")
        )}
      </>
    );
  };
}

export default PageTransition;
