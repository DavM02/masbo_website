import { useLayoutEffect, useRef, useContext } from "preact/hooks";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { MainContext } from "@context/MainContext";
import useMediaQ from "@hooks/useMediaQ";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
export default function SmoothScroll({ children }) {
  const { scrollbarAccess } =
    useContext(MainContext);
  const scrollRef = useRef(null);
  // const query = useMediaQ("(min-width: 767px)");
   const query = true

  useLayoutEffect(() => {
    let scrollbar;
    let resizeObserver;

    gsap.registerPlugin(ScrollTrigger);

    // if (query) {
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
              scrollbar.f = value;
            }
            return scrollbar.scrollTop;
          }
        });


        scrollbarAccess.current.addListener(ScrollTrigger.update)

        ScrollTrigger.defaults({ scroller: scrollRef.current });

        gsap.to('section.grey .text', { 
          rotation: 360,
          scrollTrigger: {
            trigger: "section.grey",
            start: "top top", 
            end: () => "+=" + innerHeight,
            pin: true,
            scrub: true,
          }
        });




      }
    };

    const handleResize = () => {
      if (scrollRef.current) {
        initScrollbar();
      }
    };

    resizeObserver = new ResizeObserver(handleResize);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      setHeaderHeight.current("30px");
      if (scrollbar) {
        scrollbar.destroy();
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
    // }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

  }, [ query, scrollbarAccess ]);

  return (
    <div
      id="scroll-wrapper"
      style={{
        position: query ? "fixed" : "unset",
        height: query ? "unset" : "100%",
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
