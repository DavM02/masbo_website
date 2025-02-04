import { useLayoutEffect, useRef, useContext } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { MainContext } from "@context/MainContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const { scrollbarAccess } = useContext(MainContext);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);  

  useLayoutEffect(() => {
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
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to("#home-scroll > .row", {
        x: "-200vw",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home-scroll",
          start: "top top",
          end: () => "+=" + window.innerHeight,
          pin: true,
          scrub: true
        }
      });

      ScrollTrigger.refresh();
    };

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
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [ scrollbarAccess ]);

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
