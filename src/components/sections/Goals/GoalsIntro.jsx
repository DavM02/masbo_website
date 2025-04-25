import { useRef } from "preact/hooks";
import { gsap } from "gsap";
import useAnimation from "@hooks/useAnimation";

export default function GoalsIntro() {
  const titleRef = useRef(null);

  const lines = [
    "Arhitecture modern technology",
    "MasBo is an architectural group",
    "working in the field",
  ];

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
        start: "top 75%",
        toggleActions: "play none none none",
        ...options,
      },
    });
  });

  return (
    <div>
      <h3
        ref={titleRef}
        className="text-gray">
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

      <p
        className="static text-gray capitalize">
        We offer innovative engineering solutions that ensure the successful achievement of the client's goals.
        Because engineering is a result-oriented strategy in action. An individual approach and
        attention to detail in the development of engineering systems allows us to obtain reliable,
        verified solutions. Simply put, we think over the operation of facilities based on practical
        experience and scientific knowledge.
      </p>
    </div>
  );
}
