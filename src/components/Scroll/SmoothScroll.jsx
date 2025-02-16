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

  const q = useMediaQ("(min-width: 1025px)")
 
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

        scrollbarAccess.current.addListener(({ offset }) => {
          if (offset.y > 3) {
            scrollbarAccess.current.containerEl.previousElementSibling.style.backgroundColor = "#151517"
          } else {
            scrollbarAccess.current.containerEl.previousElementSibling.style.backgroundColor = "transparent"
          }
        })
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
      if (q) {
       
        let scrollTween = gsap.to("#home-scroll > .row", {
          x: "-600vw",
          ease: "none",
          scrollTrigger: {
            trigger: "#home-scroll",
            start: "top top",
            end: () => "+=" + window.innerHeight,
            pin: true,
            scrub: true,

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

    initScrollbar();
    createAnimation();

    return () => {
 
      if (scrollbar) {
        scrollbar.destroy();
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
 
    };
  },  {dependencies: [ q ], scope: scrollRef, revertOnUpdate: true});

  return (
    <div
      id="scroll-wrapper"
      style={{
        position: "fixed",
        height: "100%"
      }}
      ref={scrollRef}>
      {children}
    </div>
  );
}