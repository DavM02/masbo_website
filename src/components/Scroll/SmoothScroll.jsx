import { useRef, useContext } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { MainContext } from "@context/MainContext";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQ from "@hooks/useMediaQ"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SmoothScroll({ children }) {
  const { scrollbarAccess, scrollTweenAccess } = useContext(MainContext);
  const scrollRef = useRef(null);

  const width = useMediaQ("(min-width: 1025px)")
  const height = useMediaQ("(min-height: 695px)")

  const isLargeScreen = useMediaQ("(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)");
  useGSAP(() => {

    let scrollbar;
    let resizeObserver;
  
    const initScrollbar = () => {
      if (scrollRef.current) {
        scrollbar = Scrollbar.init(scrollRef.current, {
          damping: 0.06,
          alwaysShowTrack: true,
          renderByPixels: true,
          delegateTo: document
        });

        scrollbarAccess.current = scrollbar;

 
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            if (arguments.length) {
              scrollbar.scrollTop = value;
            }
            return scrollbar.scrollTop;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          }
        });

        scrollbar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scrollRef.current });

        ScrollTrigger.refresh();
      }
    };
    
    const createAnimation = () => {
      if (width && height) {
 
        let scrollTween = gsap.to("#home-scroll > .row", {
          x: isLargeScreen ? "-600vw" : () => -(1762 + 3271 + window.innerWidth * 3 + (window.innerWidth / 3)), 
          ease: "none",
          scrollTrigger: {
            trigger: "#home-scroll",
            start: "top top",
            end: () => "+=" + window.innerHeight,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true
          }
        });

        scrollTweenAccess.current = scrollTween
   
      };

    }

    const handleResize = () => {
      ScrollTrigger.refresh();
 
    };

    resizeObserver = new ResizeObserver(handleResize);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }


    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if(width && height) {
      initScrollbar();
    }
    createAnimation();

    return () => {
 
      if (scrollbar) {
        scrollbar.destroy();
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
 
    };
  },  {dependencies: [ width, height, isLargeScreen ], scope: scrollRef, revertOnUpdate: true});

  return (
    <div
      id="scroll-wrapper"
      style={{
        position: width && height ? "fixed" : "static",
        height: "100%"
      }}
      ref={scrollRef}>
      {children}
    </div>
  );
}