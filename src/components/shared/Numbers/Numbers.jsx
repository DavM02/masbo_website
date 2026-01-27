import { gsap } from "gsap";
import { useRef } from "preact/hooks";
import Observer from "@components/shared/Observer/Observer";
import "./numbers.css";

const numbers = [
  { num: 123, title: "successful projects" },
  { num: 1235, title: "people who work with us" },
  { num: 23, title: "urban planning projects" },
  { num: 1012, title: "Modern interiors" },
];

export default function Numbers() {
  const listRef = useRef(null);

  const initStyles = () => {
    const counters = listRef.current?.querySelectorAll("h2");
    if (!counters) return;

    counters.forEach((el) => {
      gsap.killTweensOf(el);
      gsap.set(el, { innerText: 0 });
    });
  };

  const gsapAnimation = () => {
    const counters = listRef.current?.querySelectorAll("h2");
    if (!counters) return;

    counters.forEach((counter, i) => {
      gsap.to(counter, {
        innerText: numbers[i].num,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
      });
    });
  };

  return (
    <Observer
      initStyles={initStyles}
      gsapAnimation={gsapAnimation}
      threshold={0.5}
      ref={listRef}
      className="numbers row s-between wrap gap-40">
      {numbers.map((el, i) => (
        <li
          key={i}>
          <h2>0</h2>

          <span
            className="fs-14 text-white capitalize">{el.title}</span>
        </li>
      ))}
    </Observer>
  );
}
