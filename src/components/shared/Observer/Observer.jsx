import { forwardRef, useRef } from "preact/compat";
import { useGSAP } from "@gsap/react";
import useAnimation from "@hooks/useAnimation";

const Observer = forwardRef((props, forwardedRef) => {
  const { match } = useAnimation();
  const localRef = useRef(null);

  const elementRef = forwardedRef ?? localRef;

  useGSAP(() => {
    props.initStyles();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          props.gsapAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: props.threshold });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, { dependencies: [ match ] });

  return (
    <div
      ref={elementRef}
      {...props}>
      {props.children}
    </div>
  );
});

export default Observer;
