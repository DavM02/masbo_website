import { useLayoutEffect, useRef, useContext } from "preact/hooks";
import Scrollbar from "smooth-scrollbar";
import { MainContext } from "@context/MainContext";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQ from "@hooks/useMediaQ"

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const { scrollbarAccess } = useContext(MainContext);
  const scrollRef = useRef(null);

  const q = useMediaQ("(min-width: 1025px)")
 
  useLayoutEffect(() => {
    let scrollbar;
    let resizeObserver;
    const ctx = gsap.context(() => {});  

    const initScrollbar = () => {
      if (scrollRef.current) {
        scrollbar = Scrollbar.init(scrollRef.current, {
          damping: 0.08,
          alwaysShowTrack: true,
          renderByPixels: true,
          delegateTo: document
        });

        scrollbarAccess.current = scrollbar;

        scrollbarAccess.current.addListener(({offset}) => {
          if (offset.y > 1) {
            scrollbarAccess.current.containerEl.previousElementSibling.style.backgroundColor = "#151517"
            scrollbarAccess.current.containerEl.previousElementSibling.style.borderBottom = "0.5px solid transparent"
          } else {
            scrollbarAccess.current.containerEl.previousElementSibling.style.backgroundColor = "transparent"
            scrollbarAccess.current.containerEl.previousElementSibling.style.borderBottom = "0.5px solid rgb(255, 255, 255, 45%)"
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
      ctx.revert();  

      if (q) {
        ctx.add(() => {
          gsap.to("#home-scroll > .row", {
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
        });

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

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    initScrollbar();
    createAnimation();

    return () => {
      ctx.revert();  
      if (scrollbar) {
        scrollbar.destroy();
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [ q, scrollbarAccess ]);

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