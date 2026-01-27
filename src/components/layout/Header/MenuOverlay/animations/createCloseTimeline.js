import { gsap } from "gsap";
import { disableOverlay } from "./overlaySideEffects";
import { closeStart, openEnd } from "./paths";

export function createCloseTimeline({ closeTl, isMobile }) {
  closeTl.current = gsap
    .timeline({ paused: true })
    .to(
      ".menu-overlay ul li",
      {
        opacity: 0,
        x: 30,
        duration: 0.3,
        stagger: 0.05,
        onStart: () => {
          gsap.set([ ".menu-overlay .close-overlay",
            ".row.s-between.gap-50",
            ".logo" ], { pointerEvents: "none" });
        },
      },
      "-=0,7"
    )
    .to(
      [
        ".menu-overlay  .logo",
        ".menu-overlay .close-overlay",
        ".lang",
        ".menu-overlay p",
        ".mobile-footer h5",
      ],
      { opacity: 0, y: -20, duration: 0.3, stagger: 0.1 },
      "-=0.4"
    )
    .to(
      ".transition path",
      {
        duration: 0.5,
        ease: "power3.in",
        attr: { d: openEnd },
 
      },
      isMobile ? "-=0.5" : "-=0.4"
    )
    .to(".transition path", {
      duration: 0.3,
      ease: "power3.out",
      attr: { d: closeStart },
      onComplete: () => {
        disableOverlay()
      },
    });
}
