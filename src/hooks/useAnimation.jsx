import { useGSAP } from "@gsap/react";
import useMediaQ from "./useMediaQ";
 

export default function useAnimation(gsapAnimation = () => {}, scope, returnFn = () => {}) {
 
 
  const width = useMediaQ("(min-width: 1025px)");
  const height = useMediaQ("(min-height: 695px)");


  const isLargeScreen = useMediaQ(
    "(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"
  )  


  const isIOSSafari = () => {
    const ua = navigator.userAgent;

    const isIOS = /iP(ad|hone|od)/.test(ua);
    const isWebkit = /WebKit/.test(ua);
    const isChrome = /CriOS/.test(ua);

    return isIOS && isWebkit && !isChrome;
  };


  const match = (width && height) || isIOSSafari()
 
  useGSAP(
    () => {

      if (gsapAnimation) {
        requestAnimationFrame(() => {
 
          const options = {
            scroller: match ? "#scroll-wrapper" : window,
          };
          
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
      dependencies: [ match ],
      revertOnUpdate: true,
      ...scope,
    }
  );

  return {
    scroller: match ? "#scroll-wrapper" : window,
    match,
    isLargeScreen,
    width, height
 
  };
}
