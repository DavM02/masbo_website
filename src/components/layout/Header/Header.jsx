import { Link } from "react-router-dom";
import logo from "@assets/icons/MASBO_Logo 2.svg";
import useMediaQ from "@hooks/useMediaQ";
import "./header.scss";
 
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
 

export default function Header() {
  
  const query = useMediaQ("(min-width: 920px)");
  const width = useMediaQ("(min-width: 1025px)");
  const height = useMediaQ("(min-height: 695px)");

  const isLargeScreen = useMediaQ("(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)");
  useGSAP(
    () => {

      const createAnimation = () => {
        
        gsap.to("header", {
          scrollTrigger: {
              trigger: "main",
              scroller: ((width && height) || isLargeScreen) ? "#scroll-wrapper" : window,
              start: "3px top",
              onEnter: () =>  gsap.set("header", { className: "scrolled" }),
              onLeaveBack: () =>  gsap.set("header", { className: "static",  clearProps: "backgroundColor" })
          }
      });

        if (width && height) {
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
        } else {
          gsap.set("header", { clearProps: "backgroundColor" });
        }
      };

      requestAnimationFrame(() => {
        createAnimation();
      });

   
    },
    {dependencies: [ width, height, isLargeScreen ], revertOnUpdate: true}
  );

  return (
    <header>
      <div className="container">
        <div className="row s-between">
          <div className="row center-y">
            <Link className="logo" to={"/"}>
              <img className="icon" src={logo} alt="logo" />
            </Link>

            {query && (
              <nav>
                <ul className="row">
                  <li>
                    <Link className="text-white fs-14 capitalize">
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white fs-14 capitalize">
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white fs-14 capitalize">Team</Link>
                  </li>

                  <li>
                    <Link className="text-white fs-14 capitalize">
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white fs-14 capitalize">News</Link>
                  </li>

                  <li>
                    <Link className="text-white fs-14 capitalize">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <div className="row center-y">
            <div className="order-project">
              <span className="fs-14 text-white capitalize">
                Order the project
              </span>
            </div>

            <div className="menu-bars column gap-5 end-y">
              <div></div>

              <div></div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
