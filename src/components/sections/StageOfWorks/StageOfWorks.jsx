import './stageOfWorks.scss';
import { useRef } from 'preact/hooks';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useMediaQ from '@hooks/useMediaQ';
import useAnimation from '@hooks/useAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function StageOfWorks() {
  const containerRef = useRef(null);

 
  const isVertical = useMediaQ('(max-width: 600px)');
 
  const isNarrow = useMediaQ('(max-height: 600px)');
  const isTooSmall = useMediaQ('(max-width: 320px)');
 
  const disableTrigger = (isVertical && isNarrow) || isTooSmall  

 
 
  const { scroller, width, height } = useAnimation();

  useGSAP(() => {



    requestAnimationFrame(() => {

      ScrollTrigger.getById("stageOfWorks")?.kill();


      const circles = containerRef.current.querySelectorAll('.circle')
      const lines = containerRef.current.querySelectorAll('.line')

      if (disableTrigger) {
        gsap.set([ circles, lines ], {
          clearProps: 'all',
        });
        return
      } 

   
      gsap.set(lines, {
        scaleX: 1,
        scaleY: 1,
        // clearProps: 'transform'
      });


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
 
      const circleFrom = isVertical
        ? { clipPath: 'inset(0% 0% 100% 0%)' }   
        : { clipPath: 'inset(0% 100% 0% 0%)' }   

      const circleTo = {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5,
        ease: 'power1.out'
      }

      const lineFrom = isVertical
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

      const lineTo = isVertical
        ? { scaleY: 1, duration: 0.5, ease: 'power1.out' }
        : { scaleX: 1, duration: 0.5, ease: 'power1.out' };

      tl.fromTo(circles[0], circleFrom, circleTo)
      tl.fromTo(lines[0], lineFrom, lineTo)
      tl.fromTo(circles[1], circleFrom, circleTo)
      tl.fromTo(lines[1], lineFrom, lineTo)
      tl.fromTo(circles[2], circleFrom, circleTo)

    })

    return (() => {
      ScrollTrigger.clearScrollMemory()
    })
 

  }, {
    dependencies: [ width,
      height,
      isVertical,
      isNarrow,
      isTooSmall
    ], } )

  return (
    <section
      ref={containerRef}
      id="stage-of-works">
      <div
        className="container">
        <h5
          className="text-black capitalize">Stage  <br /> of works</h5>
      </div>

      <div
        className={`${!isVertical ? 'row' : 'column'} center-y gap-25`}>
        <div
          className="circle center-flex">
          <h5
            className="text-black text-center capitalize">idea <br /> & start</h5>
        </div>

        <div
          className="line"></div>

        <div
          className="circle center-flex">
          <h5
            className="text-black text-center capitalize">Design  <br /> & Create</h5>
        </div>

        <div
          className="line"></div>

        <div
          className="circle center-flex">
          <h5
            className="text-black text-center capitalize">Build  <br /> & Finish</h5>
        </div>
      </div>

      <div
        className="container">
        <h5
          className="text-black capitalize">Team Goal:</h5>

        <p
          className="to-middle text-black capitalize">
          We offer innovative engineering solutions that ensure the successful
          achievement of the client's goals. Because engineering is a
          result-oriented strategy in action.
        </p>
      </div>
    </section>
  );
}
