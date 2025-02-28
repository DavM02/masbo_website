import { useRef } from "preact/hooks";
import MenuOverlay from "./MenuOverlay/MenuOverlay";

export default function MenuBars() {
  const openTl = useRef(null);
  const closeTl = useRef(null);


  return (
    <div
      className="menu-bars column gap-5 end-y"
      onClick={() => {
 
        openTl.current.restart();
      }}>
      <div></div>

      <div></div>

      <div></div>

      <MenuOverlay
        openTl={openTl}
        closeTl={closeTl} />

    </div>
  );
}
