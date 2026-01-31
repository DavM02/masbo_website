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
          At the heart of our approach is innovation and precision. We don’t just deliver engineering solutions—we craft strategies that are tailored to the unique challenges and goals of each client. Every decision we make, every design we implement, is focused on driving tangible results and creating measurable impact. Our work is a fusion of creativity, technical expertise, and a result-oriented mindset, ensuring that every project not only meets expectations but pushes boundaries. Engineering, for us, is more than calculations and plans—it’s a dynamic strategy in action, transforming ideas into real-world achievements and turning challenges into opportunities for success.        </p>
      </div>
    </section>
  );
}


