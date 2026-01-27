import {   useContext } from "preact/hooks";
import MenuOverlay from "./MenuOverlay/MenuOverlay";
import { MainContext } from "@context/MainContext";
export default function MenuBars() {
   

  const { openTl, closeTl } = useContext(MainContext)
  
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
