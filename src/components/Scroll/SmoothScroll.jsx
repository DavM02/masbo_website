import {  useRef } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAnimation from "@hooks/useAnimation";
import { useGSAP } from "@gsap/react";
import {  setScrollBar, clearScrollBar, getScrollBar } from "./ScrollAccess";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
 
// registerin' plugins

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

const supportsRealResize = () => {
  // iOS Safari и мобильные Safari часто меняют innerHeight при панели — это не ресайз
  const ua = navigator.userAgent;

  const isIOS = /iP(ad|hone|od)/.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

  // если desktop или не Safari iOS — ресайз нормальный
  if (!isIOS || !isSafari) return true;

  // на iOS лучше реагировать только на visualViewport
  return !!window.visualViewport;
};


export default function SmoothScroll({ children }) {
 
  const scrollRef = useRef(null);

  const { match } = useAnimation();

  useGSAP(
    () => {
    


      let scrollbar;
      const initScrollbar = () => {
        if (scrollRef.current) {
          scrollbar = Scrollbar.init(scrollRef.current, {
            damping: 0.06,
            alwaysShowTrack: true,
            renderByPixels: true,
            delegateTo: document,
          });

          setScrollBar(scrollbar);

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
                height: window.innerHeight,
              };
            },
          });

          scrollbar.addListener(ScrollTrigger.update);
          ScrollTrigger.defaults({ scroller: scrollRef.current });

          ScrollTrigger.refresh();
        }
      };

      const resize = () => {
 
        ScrollTrigger.refresh();
      }

 
      if (supportsRealResize()) {
        alert('supports real resize')
        window.addEventListener("resize", resize);
      }  

      window.addEventListener("resize", resize);
 

      if (match) {
        initScrollbar();
      }
      
 
     

      if (document.body.classList.contains('overlay-opened') || !!document.body.querySelector('.modal')) {
        getScrollBar()?.updatePluginOptions('overflow', { open: true })
      }

      return () => {
        ScrollTrigger.killAll()
        clearScrollBar();
        if (supportsRealResize()) {
          window.removeEventListener("resize", resize);
        }
     
      };
    },
    {
      dependencies: [ match ],
      scope: scrollRef,
      revertOnUpdate: true,
    }
  );


  return (
    <div
      id="scroll-wrapper"
      style={{
        position: match ? "fixed" : "static",
        height: "100%",
      }}
      ref={scrollRef}>
      {children}
    </div>
  );
}




