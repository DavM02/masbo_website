import './achievements.scss'
import useAnimation from "@hooks/useAnimation"
import { gsap } from "gsap";
import { useRef } from 'preact/hooks';
import bg from "@assets/bg-3.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Numbers from '@components/shared/Numbers/Numbers';
export default function Achievements() {
 
  const containerRef = useRef(null)
    

  useAnimation((options) => {
 
    let image = containerRef.current.querySelector("span");
  
    gsap.to(image, {
      y: () => image.offsetHeight - containerRef.current.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        pin: false,
        ...options
      },
    }); 
  })

  return (
    <section
      id='achievements'>
      <div
       
        className='container'>
        <div
          ref={containerRef}
          className='bg placeholder-3'>
          <LazyLoadImage
            src={bg}
            width="100%"
            height="150%"
            effect="opacity"
            alt={"bg"} />
        </div>  

        <Numbers
          trigger={"#achievements .container"} />
      </div>


    </section>
  )
}
