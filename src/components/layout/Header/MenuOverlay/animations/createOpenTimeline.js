import { gsap } from "gsap";
import { enableOverlay } from "./overlaySideEffects";
import { openStart } from "./paths";

export function createOpenTimeline({ openTl }) {
  openTl.current = gsap
    .timeline({ paused: true })
    .to(".transition path", {
      duration: 1,
      ease: "power3.in",
      attr: { d: openStart },
      onStart: () => {
        enableOverlay()
      },
    })
    .to(".transition path", {
      duration: 0.4,
      ease: "power3.out",
      attr: { d: openStart },

    })
    .from(
      [
        ".menu-overlay .logo",
        ".menu-overlay .close-overlay",
        ".lang",
        ".menu-overlay p",
        ".mobile-footer h5",
      ],
      { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 },
      "-=0.5"
    )
    .from(
      ".menu-overlay ul li",
      {
        opacity: 0,
        x: -30,
        duration: 0.4,
        stagger: 0.05,
        onComplete: () => {
          gsap.set([ ".menu-overlay .close-overlay",
            ".row.s-between.gap-50",
            ".logo" ], { pointerEvents: "all" });
        },
      },
      "-=1.2"
    );
}
