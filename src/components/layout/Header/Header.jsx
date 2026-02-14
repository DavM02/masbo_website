import "./header.scss";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import useAnimation from "@hooks/useAnimation";
import MenuBars from "./MenuBars";
import Menu from "./Menu";
import Logo from "./Logo";
import OrderProject from "./OrderProject";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Header() {

  
  const { match,  scroller } = useAnimation()
  
  useGSAP(() => {

     
    requestAnimationFrame(() => {
 
      gsap.to("header", {
        scrollTrigger: {
          id: 'header_trigger_1',
          scroller:scroller,
          trigger: "main",
          invalidateOnRefresh: false,  
          start: "3px top",
          onEnter: () =>
            gsap.set("header", { className: "scrolled", clearProps: "backgroundColor" }),
          onLeaveBack: () =>
            gsap.set("header", { className: "static", clearProps: "backgroundColor" }),
        },
      });

      

    })
 
  }, {dependencies: [  match ]});



  return (
    <header>
      <div
        className="container">
        <div
          className="row s-between">
          <div
            className="row center-y">
            <Logo />

            <Menu />
          </div>

          <div
            className="row center-y">

            <OrderProject />

            <MenuBars />
          </div>
        </div>
      </div>


    </header>
  );
}