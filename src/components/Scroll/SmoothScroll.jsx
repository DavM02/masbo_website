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

const isSafari = () => {
  const ua = navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(ua);
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

      window.addEventListener("resize", resize);
 

      if (match) {
        initScrollbar();
      } else if (isSafari()) {
        ScrollTrigger.config({
          ignoreMobileResize: true,
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
        });
      }

      if (document.body.classList.contains('overlay-opened') || !!document.body.querySelector('.modal')) {
        getScrollBar()?.updatePluginOptions('overflow', { open: true })
      }

      return () => {
        ScrollTrigger.killAll()
        clearScrollBar();
        window.removeEventListener("resize", resize);
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




