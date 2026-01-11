import { gsap } from "gsap";
import { createPortal } from "preact/compat";
import CloseOverlay from "@ui/CloseOverlay/CloseOverlay";
import "./menuOverlay.scss";
import Logo from "../Logo";

import { useGSAP } from "@gsap/react";

import { getScrollBar } from "../../../Scroll/ScrollAccess";

import useMediaQ from "@hooks/useMediaQ";
import MobileFooter from "./MobileFooter";
import ExtraLinks from "./ExtraLinks";
import MenuLinks from "./MenuLinks";
import SchemeList from "./SchemeList";
import Path from "./Path";

const openStart =
  "M0 4069V-8C2516.76 -7.99976 1409.21 -8.00024 3990 -5.49619V4069C3990 4069 3091.05 3187.25 2004 3187.25C916.96 3187.25 0 4069 0 4069Z";
const openEnd =
  "M0 2015.3V-2054C1307.5 -3053.78 2532 -3088.78 3988 -2051.5V2015.3C3988 2015.3 3089.5 1135.22 2003 1135.22C916.5 1135.22 0 2015.3 0 2015.3Z";
const closeStart =
  "M0 0.0825195V-3665.86C1499.5 -3667 2271 -3665.86 3989 -3667V0.0825195C3989 0.0825195 2773.81 0.0825195 1979 0.0825195C1129 0.0825195 0 0.0825195 0 0.0825195Z";
const closeEnd =
  "M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z";

function MenuOverlay({ openTl, closeTl }) {
  const isMobile = useMediaQ("(max-width: 600px)");

  const createTimelines = () => {
    openTl.current = gsap
      .timeline({ paused: true })
      .to(".transition path", {
        duration: 1,
        ease: "power3.in",
        attr: { d: openStart },
        onStart: () => {
          document.body.classList.add("overlay-opened");
          getScrollBar()?.updatePluginOptions("overflow", { open: true });
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
        isMobile ? "-=0.6" : "-=0.4"
      )
      .to(".transition path", {
        duration: 0.3,
        ease: "power3.out",
        attr: { d: closeStart },
        onComplete: () => {
          gsap.set(".transition path", {
            attr: { d: closeEnd },
          });
          gsap.set([ ".menu-overlay .close-overlay",
            ".row.s-between.gap-50",
            ".logo" ], { clearProps: "pointerEvents" });
          getScrollBar()?.updatePluginOptions("overflow", { open: false });
          document.body.removeAttribute('class')
        },
      });
  };

  useGSAP(
    () => {
      createTimelines();

      return () => {
        openTl.current?.kill();
        closeTl.current?.kill();
        gsap.set(".transition path", {
          attr: { d: closeEnd},
        });
        gsap.set([ ".menu-overlay .close-overlay",
          ".row.s-between.gap-50",
          ".logo" ], { clearProps: "pointerEvents" });
        getScrollBar()?.updatePluginOptions("overflow", { open: false });
        document.body.removeAttribute("class");
      };
    },
    { dependencies: [ isMobile ], revertOnUpdate: true }
  );

  return createPortal(
    <div
      className="menu-overlay row center-y">
      <Path />

      <Logo
        onClick={() => closeTl.current.restart()} />

      <div
        className="row s-between gap-50">
        <MenuLinks
          onClick={() => closeTl.current.restart()}
          isMobile={isMobile} />

        {!isMobile && <ExtraLinks />}

        <div
          className="column s-between">
          <SchemeList />

          {!isMobile && (
            <p
              className="to-middle text-white capitalize">
              We offer a full range of services from interior design, individual
              cottages to the design and construction of residential complexes.
              For our customers, we are known as a reliable partner with high
              standards of quality and responsibility.
            </p>
          )}
        </div>

        {isMobile && <MobileFooter />}
      </div>

      <CloseOverlay
        onClick={() => closeTl.current.restart()} />
    </div>,
    document.querySelector("#transition-root")
  );
}

export default MenuOverlay;
