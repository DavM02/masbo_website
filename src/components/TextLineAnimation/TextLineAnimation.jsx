import { useRef } from "preact/hooks";
import { gsap } from "gsap";
import useAnimation from "@hooks/useAnimation";
import './textLineAnimation.scss'
export default function TextLineAnimation({lines}) {
  const titleRef = useRef(null);


  useAnimation((options) => {
    const spans = titleRef.current.querySelectorAll("span");
 
    gsap.set(spans, { y: 50 });
    gsap.to(spans, {
      y: 0,
      delay: 0.2,
      duration: 1.5,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        ...options,
      },
    });
  });

  return (
    <h3
      ref={titleRef}
      className="text-line-animation text-gray">
      {lines.map((line, lineIndex) => (
        <span
          style={{ overflow: "hidden", display: "block"}}
          key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", marginRight: "0.5ch" }}>
              {word}
            </span>
          ))}
        </span>
      ))}
    </h3>
  );
}
