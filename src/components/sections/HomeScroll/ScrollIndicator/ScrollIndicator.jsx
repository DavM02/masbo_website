import { createPortal } from "preact/compat"
import useAnimation from "@hooks/useAnimation"
import {gsap} from "gsap"
 
export default function ScrollIndicator() {
 
  const { width, height, isLargeScreen } = useAnimation((options) => {
    if ((width && height) || isLargeScreen) {
      gsap.set(".scroll-indicator div", {width: "0%"})
      gsap.to(".scroll-indicator div", {
        ease: "power1.out",
        width: "100%",  
        scrollTrigger: {
          scroller: options.scroller,
          trigger: "#home-scroll",
          start: "top top",
          end: () => "+=" + window.innerHeight,
          scrub: true,
        }
      });
    }
    
  })
 

  return (width && height &&
    createPortal(<div
      className="scroll-indicator">
      <div></div>
    </div>, document.getElementById("modal-root"))
  )
}
