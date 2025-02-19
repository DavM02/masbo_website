import { createPortal } from "preact/compat"
import { useGSAP } from "@gsap/react"
import {gsap} from "gsap"
export default function ScrollIndicator() {
 
     
  useGSAP(() => {

    requestAnimationFrame(() => {
      gsap.set(".scroll-indicator div", {width: "0%"})
      gsap.to(".scroll-indicator div", {
        ease: "power1.out",
        width: "100%",  
        scrollTrigger: {
          trigger: "#home-scroll",
          scroller: "#scroll-wrapper",  
          start: "top top",
          end: () => "+=" + window.innerHeight,
          scrub: true,
        }
      });
    })

  })

  return (
    createPortal(<div
 
      className="scroll-indicator">
      <div></div>
    </div>, document.getElementById("modal-root"))
  )
}
