import { gsap } from "gsap";
import { getScrollBar } from "@components/Scroll/ScrollAccess";
import { closeEnd } from "./paths";


export const enableOverlay = () => {
  document.body.classList.add("overlay-opened");
  getScrollBar()?.updatePluginOptions("overflow", { open: true });
};

export const disableOverlay = () => {
  gsap.set(".transition path", { attr: { d: closeEnd } });
  gsap.set(
    [ ".menu-overlay .close-overlay",
      ".row.s-between.gap-50",
      ".logo" ],
    { clearProps: "pointerEvents" }
  );
  getScrollBar()?.updatePluginOptions("overflow", { open: false });
  document.body.removeAttribute("class");
};
