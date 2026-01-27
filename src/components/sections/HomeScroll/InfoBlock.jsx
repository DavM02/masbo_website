import { gsap } from "gsap";
import { useRef } from "preact/hooks";
import Observer from "@components/shared/Observer/Observer";

function InfoBlock({ icon, title, text, percentage }) {
  const blockRef = useRef(null);

  const initStyles = () => {
    const path = blockRef.current?.querySelector("svg path");
    if (!path) return;

    gsap.killTweensOf(path);
    gsap.set(path, { drawSVG: "0% 0%" });
  };

  const gsapAnimation = () => {
    const path = blockRef.current?.querySelector("svg path");
    if (!path) return;

    gsap.to(path, {
      drawSVG: `0% ${percentage ?? "100%"}`,
      delay: 0.3,
      duration: 3,
      ease: "power2.out",
    });
  };

  return (
 
    <Observer
      ref={blockRef}
      initStyles={initStyles}
      gsapAnimation={gsapAnimation}
      threshold={0.4}
      className="column center-y center-x gap-10">
      {icon}

      <h5
        className="capitalize">{title}</h5>

      <p
        className="to-middle text-center text-white capitalize"
        dangerouslySetInnerHTML={{ __html: text }} />
    </Observer>

  );
}

export default InfoBlock;
