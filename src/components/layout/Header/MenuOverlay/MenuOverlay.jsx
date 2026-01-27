import { createPortal } from "preact/compat";
import CloseOverlay from "@ui/CloseOverlay/CloseOverlay";
import "./menuOverlay.scss";
import Logo from "../Logo";
 
import { useGSAP } from "@gsap/react";
import { createOpenTimeline } from "./animations/createOpenTimeline";
import { createCloseTimeline } from "./animations/createCloseTimeline";
import { disableOverlay } from "./animations/overlaySideEffects";

import useMediaQ from "@hooks/useMediaQ";
import MobileFooter from "./MobileFooter";
import ExtraLinks from "./ExtraLinks";
import MenuLinks from "./MenuLinks";
import SchemeList from "./SchemeList";
import Path from "./Path";
 

  
function MenuOverlay({ openTl, closeTl }) {

  const isMobile = useMediaQ("(max-width: 600px)");
 
 
  useGSAP(
    () => {
      createOpenTimeline({ openTl });
      createCloseTimeline({ closeTl, isMobile });

      return () => {
        openTl.current?.kill();
        closeTl.current?.kill();
        disableOverlay();
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
