import { gsap } from "gsap";
import { closeEnd } from "@components/layout/Header/MenuOverlay/animations/paths";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollBar } from "@components/Scroll/ScrollAccess";

export function resetOverlayAndScroll(closeTl) {
 
  closeTl.current?.pause(0);

  gsap.set(".menu-overlay ul li", { opacity: 0, x: 30 });
  gsap.set(
    [
      ".menu-overlay .logo",
      ".menu-overlay .close-overlay",
      ".lang",
      ".menu-overlay p",
      ".mobile-footer h5",
    ],
    { opacity: 0, y: -20 }
  );

  gsap.set(".transition path", {
    attr: { d: closeEnd },
  });

  gsap.set(
    [ ".menu-overlay .close-overlay",
      ".row.s-between.gap-50",
      ".logo" ],
    { clearProps: "pointerEvents" }
  );

  if (getScrollBar()) {
    getScrollBar().scrollTo(0, 0, 0);
  }
  else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  ScrollTrigger.getAll().forEach(trigger => {
    if (
      trigger.vars.id !== "header_trigger_1" 
    ) {
      trigger.kill();
    }
  });

}