import { useRef, useEffect } from "react";
import './draggableSlider.scss';
import { getScrollBar } from "../Scroll/ScrollAccess";

export default function DraggableSlider({ width = 'max(500px, calc(100vw/4))', height = "max(500px, calc(100vw/4))", images }) {
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const dragStyle = useRef({ transform: 'translateX(0px)' });

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;

    getScrollBar()?.updatePluginOptions('overflow', { open: true });
    sliderRef.current.classList.add("is-grabbing");
    sliderRef.current.style.transition = 'cubic-bezier(0.215, 0.610, 0.355, 1) 0.5s transform';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    let newTranslate = prevTranslate.current + delta;

    const wrapperWidth = wrapperRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.scrollWidth;

    const maxTranslate = 0;
    const minTranslate = wrapperWidth - sliderWidth;

    newTranslate = clamp(newTranslate, minTranslate, maxTranslate);

    currentTranslate.current = newTranslate;
    dragStyle.current = { transform: `translateX(${newTranslate}px)` };
    sliderRef.current.style.transform = dragStyle.current.transform;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    getScrollBar()?.updatePluginOptions('overflow', { open: false });
    isDragging.current = false;
    sliderRef.current.classList.remove("is-grabbing");
    prevTranslate.current = currentTranslate.current;
  };

  const handleTouchStart = (e) => {
    e.preventDefault() 
    handleMouseDown(e.touches[0]);
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const accelerationFactor = 3;  
    const touch = e.touches[0];
    const delta = (touch.clientX - startX.current) * accelerationFactor;

    const wrapperWidth = wrapperRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.scrollWidth;

    const maxTranslate = 0;
    const minTranslate = wrapperWidth - sliderWidth;

    let newTranslate = prevTranslate.current + delta;
    newTranslate = clamp(newTranslate, minTranslate, maxTranslate);

    currentTranslate.current = newTranslate;
    dragStyle.current = { transform: `translateX(${newTranslate}px)` };
    sliderRef.current.style.transform = dragStyle.current.transform;
  };

  const handleTouchEnd = () => handleMouseUp();

  const handleResize = () => {
    const wrapperWidth = wrapperRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.scrollWidth;

    const maxTranslate = 0;
    const minTranslate = wrapperWidth - sliderWidth;

    currentTranslate.current = Math.max(Math.min(currentTranslate.current, maxTranslate), minTranslate);
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", handleResize);
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      wrapper.removeEventListener('touchstart', handleTouchStart);

    };
  }, []);

  return (
    <div
      className="slider">
      <div
        className="slider-wrapper"
        ref={wrapperRef}
        style={{ height }}
        onMouseDown={handleMouseDown}>
        <ul
          ref={sliderRef}
          className="slider-content row"
          style={{ height }}
          onTransitionEnd={() => {
            sliderRef.current.style.transition = '';
          }}>
          {images.map((el, i) => (
            <li
              style={{ width, height }}
              key={i}>
              <img
                src={el}
                alt={`slider-img-${i + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
