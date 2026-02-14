import { createPortal } from "preact/compat";
import Logo from '@assets/icons/main-logo.svg?react'
import { useEffect } from 'preact/hooks';
import { getScrollBar } from '../Scroll/ScrollAccess';
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import { document } from "postcss";

export default function PageLoading({ setShow}) {

  const pathname = useLocation().pathname
 
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });

   
    getScrollBar()?.updatePluginOptions("overflow", { open: true });
    document.body.style.overflow = 'hidden'

   
    tl.fromTo(
      ".page-loading svg path",
      { drawSVG: "0% 0%", opacity: 1 },
      {
        drawSVG: "0% 100%",
        duration: 3,
        ease: "sine.out",
      }
    )

      .to(".page-loading svg path", {
        opacity: 0,
        duration: 0.5,
        ease: "sine.out",
      })

      .to(
        ".page-loading .strips div",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.9,
          ease: "sine.inOut",
          stagger: 0.05,  
          onComplete: () => 
          {
            sessionStorage.setItem('animationCompleted', true)
            setShow('hide')
            document.body.style.overflow = 'initial'
            getScrollBar()?.updatePluginOptions("overflow", { open: false });
          }
        },
        "-=0.3" 
      );

  }, []);


  return (
    createPortal(<div
      className={`page-loading ${pathname === "/" ? "index" : "_"}`}>
      <div
        className='center-flex'>
        <Logo
          height={'150px'}
          width={'150px'} />
      </div>

      <div
        className='strips row'>
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}></div>
        ))}

      </div>
    </div>, document.querySelector("#transition-root"))

  )
}
