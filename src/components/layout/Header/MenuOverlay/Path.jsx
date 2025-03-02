import useAnimation from "@hooks/useAnimation";
import { useEffect } from "preact/hooks";
import { getScrollBar } from "../../../Scroll/ScrollAccess";
export default function Path() {
  const { width, height, isLargeScreen } = useAnimation();

  useEffect(() => {
    if (document.body.classList.contains('overlay-opened')) {
      getScrollBar()?.updatePluginOptions('overflow', { open: true })
    }
 
  }, [width, height, isLargeScreen]);

  return (
    <svg
      className="transition"
      viewBox="0 0 3988 3185"
      preserveAspectRatio="none"
    >
      <path
        className="path"
        fill="#E9E9E9"
        d="M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
