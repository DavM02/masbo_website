import { useGSAP } from "@gsap/react";
import useMediaQ from "./useMediaQ";
import { getScrollBar } from "../components/Scroll/ScrollAccess";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export default function useAnimation(gsapAnimation = () => {}, scope, returnFn = () => {}) {
 

  const width = useMediaQ("(min-width: 1025px)");
  const height = useMediaQ("(min-height: 695px)");
  const isLargeScreen = useMediaQ(
    "(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"
  );

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

      if (gsapAnimation) {
        requestAnimationFrame(() => {
        
          const options = {
            scroller: match ? "#scroll-wrapper" : window,
          };
          
          if (match) {
           
            options.containerAnimation = ScrollTrigger.getById("_home-scroll");
        
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
        isLargeScreen ],
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
