import { useRef } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAnimation from "@hooks/useAnimation";
import { useGSAP } from '@gsap/react';
import { setScrollTween, setScrollBar, clearScrollBar, clearScrollTween } from "./ScrollAccess";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SmoothScroll({ children }) {

  const scrollRef = useRef(null);

  const { width, height, isLargeScreen} = useAnimation()


  useGSAP(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

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

 
        setScrollBar(scrollbar)
 
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
          x: isLargeScreen ? "-700vw" : () => -(1762 + 3271 + window.innerWidth * 4 + (window.innerWidth / 3)), 
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

        setScrollTween(scrollTween)
      };

    }

    const handleResize = () => {
      ScrollTrigger.refresh();

    };

    resizeObserver = new ResizeObserver(handleResize);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    if((width && height) || isLargeScreen) {
      initScrollbar();
    } 
    createAnimation();
 
    return () => {
 
      clearScrollBar()
      clearScrollTween()
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
 
    };
  },  
  {dependencies: [ width,
    height,
    isLargeScreen ], scope: scrollRef, revertOnUpdate: true});

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