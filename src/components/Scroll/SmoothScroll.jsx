import { gsap } from "gsap-trial";
import { useRef } from "preact/hooks";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
 
  
export default function SmoothScroll({ children }) {
  const container = useRef()
  const smoother = useRef()
  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,  
      effects: true, 
    });
  },  { scope: container })
    
  return (
    <div
      ref={container}
      id="smooth-wrapper">
      <div
        id="smooth-content">
        {children}
      </div>
    </div>
  )
}
