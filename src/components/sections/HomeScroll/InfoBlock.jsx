import useAnimation from "@hooks/useAnimation";
import { gsap } from "gsap";
import { useRef } from "preact/hooks";
function InfoBlock({ icon, title, text, percentage }) {

  const blockRef = useRef(null)
 
  useAnimation((options) => {

 
    gsap.fromTo(blockRef.current.querySelector("svg path"), {
      drawSVG: "0% 0%"
    },{
      drawSVG: `0% ${percentage ?? '100%'}`,
      delay: 0.3,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: blockRef.current.closest(".section-block"),
        start: "left 70%",
        toggleActions: "play none none none",
        ...options
      },
    });
 
    
  }, blockRef)
 
  return (<>
    <div
      ref={blockRef}
      className="column center-y center-x gap-10">
      {/* <img
      className="icon"
      alt="icon"
      src={icon} /> */}
      {icon}

      <h5>{title}</h5>

      <p
        className="to-middle text-center text-white capitalize"
        dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  </>)
}

export default InfoBlock