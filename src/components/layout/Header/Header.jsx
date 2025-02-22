import "./header.scss";

import { gsap } from "gsap";
import useAnimation from "@hooks/useAnimation";
import MenuBars from "./MenuBars";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  const { width, height, isLargeScreen } = useAnimation((options) => {
    gsap.to("header", {
      scrollTrigger: {
        scroller: options.scroller,
        trigger: "main",
        start: "3px top",
        onEnter: () =>
          gsap.set("header", { className: "scrolled", clearProps: "backgroundColor" }),
        onLeaveBack: () =>
          gsap.set("header", { className: "static", clearProps: "backgroundColor" }),
      },
    });

    if ((width && height) || isLargeScreen) {
      gsap.to("#home-scroll", {
        scrollTrigger: {
          trigger: "#home-scroll",
          start: "top top",
          end: "bottom bottom",
          onEnter: () => {
            gsap.set("header", { backgroundColor: "transparent" });
          },
          onEnterBack: () => {
            gsap.set("header", { clearProps: "backgroundColor" });
          },
        },
      });
    }
  },);

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