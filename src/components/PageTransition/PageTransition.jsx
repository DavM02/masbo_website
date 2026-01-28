import {  useState, useContext, useEffect } from "preact/hooks";

import { createPortal } from "preact/compat";
import { useBlocker } from "react-router-dom";
import "./pageTransition.scss";
import { MainContext } from "@context/MainContext";

import SlideIn from "./SlideIn";
import SlideOut from "./SlideOut";
import { resetOverlayAndScroll } from "./resetOverlayAndScroll";

function PageTransition(Component) {
  return function WrappedComponent(props) {
    
    const [ isAnimating, setIsAnimating ] = useState(false);
    
    const {closeTl} = useContext(MainContext)

    useBlocker(({ currentLocation, nextLocation }) => {
      return isAnimating && currentLocation.pathname !== nextLocation.pathname;
    }); 
 

    useEffect(() => {
      return () => {
        resetOverlayAndScroll(closeTl)
      }
    }, [])

    return (
      <>
        <Component
          {...props} />

        {createPortal(
          <div
            className="page-transition"
            style={{ pointerEvents: isAnimating ? "all" : "none" }}>
   

            <SlideIn
              setIsAnimating={setIsAnimating} />

            <SlideOut
              setIsAnimating={setIsAnimating} />

          </div>,
          document.querySelector("#modal-root")
        )}
      </>
    );
  };
}

export default PageTransition;

  