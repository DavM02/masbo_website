import './stageOfWorks.scss'
import { useRef } from 'preact/hooks'
import { gsap } from 'gsap'
import useMediaQ from "@hooks/useMediaQ";
import { useGSAP } from '@gsap/react';
import useAnimation from '@hooks/useAnimation';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function StageOfWorks() {
  const containerRef = useRef(null)
  const isMobile = useMediaQ('(max-width: 760px)')

 
  const {scroller, width, height} = useAnimation()
 
 
  useGSAP(() => {
    requestAnimationFrame(() => {
      const circles = containerRef.current.querySelectorAll('.circle')
      const lines = containerRef.current.querySelectorAll('.line')
   
      gsap.set(lines, {
        scaleX: 1,
        scaleY: 1,
        clearProps: 'transform'
      });

      ScrollTrigger.getById("stageOfWorks")?.kill();



      const tl = gsap.timeline({
        scrollTrigger: {
          id: "stageOfWorks",
          trigger: containerRef.current,
          start: 'top top',
          end: () => "+=" + window.innerHeight,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          scroller,
        }
      })
 
      const circleFrom = isMobile
        ? { clipPath: 'inset(0% 0% 100% 0%)' }   
        : { clipPath: 'inset(0% 100% 0% 0%)' }   

      const circleTo = {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5,
        ease: 'power1.out'
      }

      const lineFrom = isMobile
        ? {
          scaleY: 0,
          scaleX: 1,
          transformOrigin: 'center top'
        }
        : {
          scaleX: 0,
          scaleY: 1,
          transformOrigin: 'left center'
        };

      const lineTo = isMobile
        ? { scaleY: 1, duration: 0.5, ease: 'power1.out' }
        : { scaleX: 1, duration: 0.5, ease: 'power1.out' };

      tl.fromTo(circles[0], circleFrom, circleTo)
      tl.fromTo(lines[0], lineFrom, lineTo)
      tl.fromTo(circles[1], circleFrom, circleTo)
      tl.fromTo(lines[1], lineFrom, lineTo)
      tl.fromTo(circles[2], circleFrom, circleTo)

    })

 
  }, {
    dependencies: [ width,
      height,
      isMobile,
    ], } )
 

  return (
    <section
      ref={containerRef}
      id='stage-of-works'>
      <div
        className={`${!isMobile ? 'row' : 'column'} center-y gap-25 `}>
        <div
          className="circle center-flex">
          <h5
            className="text-black capitalize">
            idea & start
          </h5>
        </div>

        <div
          className="line"></div>

        <div
          className="circle center-flex">
          <h5
            className="text-black capitalize">
            Design & Create 
          </h5>
        </div>

        <div
          className="line"></div>

        <div
          className="circle center-flex">
          <h5
            className="text-black capitalize">
            Build & Finish
          </h5>
        </div>
      </div>


    </section>
  )
}
