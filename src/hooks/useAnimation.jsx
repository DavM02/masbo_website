import { useGSAP } from "@gsap/react";
import useMediaQ from "./useMediaQ";
import { getScrollBar, getScrollTween } from "../components/Scroll/ScrollAccess";
import { MainContext } from "@context/MainContext";
import { useContext } from "preact/hooks";
export default function useAnimation(gsapAnimation = () => {}, scope, returnFn = () => {}) {
 

  const width = useMediaQ("(min-width: 1025px)");
  const height = useMediaQ("(min-height: 695px)");
  const isLargeScreen = useMediaQ(
    "(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"
  );

  const {triggerInit} = useContext(MainContext)

  const match = (width && height) || isLargeScreen;

  function scrollTo(selector, options) {
    if (match) {
      getScrollBar()?.scrollIntoView(
        document.getElementById(selector),
        options
      );
    } else {
      document.getElementById(selector)?.scrollIntoView({ behavior: "smooth" });
    }
  }
 
  useGSAP(
    () => {
      const isFirstPage = window.location.pathname.split('/')[2] === ""
      if (!isFirstPage ?  gsapAnimation : (gsapAnimation && triggerInit)) {
        requestAnimationFrame(() => {
 
          const options = {
            scroller: match ? "#scroll-wrapper" : window,
          };
          
          
          if (match && isFirstPage) {
           
            options.containerAnimation = getScrollTween()
 
          } 
      
          gsapAnimation(options); 
    
        })
      }
      return () => {
        if (returnFn) {

          returnFn()
 
        }
       
      }


    },
    {
      dependencies: [ width,
        height,
        isLargeScreen,
        triggerInit ],
      revertOnUpdate: true,
      ...scope,
    }
  );

  return {
    isLargeScreen,
    width,
    height,
    scrollTo,
  };
}
