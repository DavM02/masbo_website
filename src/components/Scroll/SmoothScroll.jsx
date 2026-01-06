import {  useRef } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAnimation from "@hooks/useAnimation";
import { useGSAP } from "@gsap/react";
import {  setScrollBar, clearScrollBar, getScrollBar } from "./ScrollAccess";
import { ScrollbarPlugin } from "smooth-scrollbar";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);
 
export default function SmoothScroll({ children }) {
 
  const scrollRef = useRef(null);

  const { width, height, isLargeScreen } = useAnimation();

  useGSAP(
    () => {

      let scrollbar;
      let resizeObserver;

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


      const handleResize = () => {
        ScrollTrigger.refresh();

      };

      resizeObserver = new ResizeObserver(handleResize);
      if (scrollRef.current) {
        resizeObserver.observe(scrollRef.current);
      }

      if (width && height) {
        initScrollbar();
        
      }

      if (document.body.classList.contains('overlay-opened')) {
        getScrollBar()?.updatePluginOptions('overflow', { open: true })
      }

      return () => {
        ScrollTrigger.killAll()
        clearScrollBar();
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    },
    {
      dependencies: [ width,
        height,
        isLargeScreen, ],
      scope: scrollRef,
      revertOnUpdate: true,
    }
  );




  return (
    <div
      id="scroll-wrapper"
      style={{
        position: width && height ? "fixed" : "static",
        height: "100%",
      }}
      ref={scrollRef}>
      {children}
    </div>
  );
}

class OverflowPlugin extends ScrollbarPlugin {
  static pluginName = "overflow";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(OverflowPlugin);
