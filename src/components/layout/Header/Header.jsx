import "./header.scss";
 
import { gsap } from "gsap";
import useAnimation from "@hooks/useAnimation";
import MenuBars from "./MenuBars";
import Menu from "./Menu";
import Logo from "./Logo";
 
export default function Header() {
  const { width, height, isLargeScreen, isFirstPage } = useAnimation((options) => {

    if (isFirstPage) {
      gsap.to("header", {
        scrollTrigger: {
          id: 'header_trigger_1',
          scroller: options.scroller,
          trigger: "main",
          start: "3px top",
          onEnter: () =>
            gsap.set("header", { className: "scrolled", clearProps: "backgroundColor" }),
          onLeaveBack: () =>
            gsap.set("header", { className: "static", clearProps: "backgroundColor" }),
        },
      });
    }

    if (isFirstPage && ((width && height) || isLargeScreen)) {
      gsap.to("header", {
        scrollTrigger: {
          id: 'header_trigger_2',
          trigger: ".about",
          start: "left 0%",
          end: "right 0%",
          onEnter: () => {
            gsap.set("header", { backgroundColor: "transparent" });
          },
          onEnterBack: () => {
            gsap.set("header", { backgroundColor: "transparent" });
          },
          onLeaveBack: () => {
            gsap.set("header", { clearProps: "backgroundColor" });
          },
          onLeave: () => {
            gsap.set("header", { clearProps: "backgroundColor" });
          }
        },
      });
    }
  });



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
            <div
              className="order-project">
              <span
                className="fs-14 text-white capitalize">Order the project</span>
            </div>

            <MenuBars />
          </div>
        </div>
      </div>


    </header>
  );
}