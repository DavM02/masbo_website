import { useRef } from "preact/hooks";
import useAnimation from "@hooks/useAnimation";
import { teamImages } from "./TeamImages";
import { gsap } from "gsap";

export default function SplitAnimation() {
  const titleRef = useRef(null);

  const titleText = "Meeting our team"
  .split("")
  .map((letter, i) => (
    <span key={i}>{letter === " " ? "\u00A0" : letter}</span>
  ));

  useAnimation((options) => {
    const items = gsap.utils.toArray(".team li");
    const spans = titleRef.current.querySelectorAll("span");

    gsap.set(spans, { opacity: 0, y: 20 });
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 3,
      stagger: 0.05,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".team",
        start: "left 40%",
        toggleActions: "play none none none",
        ...options,
      },
    });

    gsap.set(items, { opacity: 0, y: 25 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 3,
      stagger: 0.09,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".team",
        start: "left 40%",
        toggleActions: "play none none none",
        ...options,
      },
    });
  });

  return <>
  <h1 ref={titleRef}>{titleText}</h1> 
  <ul className="row">
      {teamImages.map((el, i) => (
        <li key={i}>
          <img src={el} alt={`team-img-${i + 1}`} />
        </li>
      ))}
    </ul>
    </>    
}
