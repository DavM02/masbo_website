import { useRef } from "preact/hooks";
import { teamImages } from "./TeamImages";
import { gsap } from "gsap";
import Observer from "@components/shared/Observer/Observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const titleText = "Meeting our team"
  .split("")
  .map((letter, i) => (
    <span
      key={i}>{letter === " " ? "\u00A0" : letter}</span>
  ));


export default function SplitAnimation() {

  const titleRef = useRef(null);

  const initStyles = () => {
    gsap.killTweensOf(".team li");
    gsap.killTweensOf("h1 span");
    const items = gsap.utils.toArray(".team li");
    const spans = titleRef.current.querySelectorAll("span");

    gsap.set(spans, { opacity: 0, y: 20 });
    gsap.set(items, { opacity: 0, y: 25 });
  }

  const gsapAnimation = () => {
 
    const items = gsap.utils.toArray(".team li");
    const spans = titleRef.current.querySelectorAll("span");

    gsap.to(items, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 3,
      stagger: 0.09,
      ease: "expo.out",
    });

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 3,
      stagger: 0.05,
      ease: "expo.out",
    });
  }


  return (<Observer
    initStyles={() => initStyles()}
    gsapAnimation={() => gsapAnimation()}
    className={"column center-y gap-25"}
    threshold={0.2}>
    <h1
      ref={titleRef}>{titleText}</h1> 

    <ul
      className="row">
      {teamImages.map((el, i) => (
        <li
          className="placeholder-1"
          key={i}>
          <LazyLoadImage
            width="100%"
            height="100%"
            effect="opacity"
            src={el} />
        </li>
      ))}
    </ul>
  </Observer>)    
}

