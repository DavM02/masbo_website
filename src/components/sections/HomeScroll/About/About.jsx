import Numbers from "@components/shared/Numbers/Numbers"
import useAnimation from '@hooks/useAnimation'
import play from "@assets/icons/play.svg"
import Socials from "@components/shared/Socials/Socials"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
 
export default function About() {

  const { match } = useAnimation()

  useGSAP(() => {

     
    requestAnimationFrame(() => {
 
      if (match) {
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


    })
 
  }, {dependencies: [  match ]});



  return (
    <section
      className="about">
      <div
        className='container column end-x'>
        <div
          className='row center-y'>
          <div
            className='text-wrapper  center-y row gap-50'>
                    
            <h1
              className='capitalize'>
             From Vision 
              <br /> to Form
            </h1>
      
      
            <p
              className='to-small text-white capitalize'>
              Architecture shaped by technology and purpose.
              MasBo is an architectural studio specializing in urban planning and contemporary design.
              We are trusted by clients for our precision, responsibility, and consistently high standards, bringing complex ideas to life through a clear process and thoughtful execution.
            </p>
          </div>
      
          <div
            className='play self-center-y center-gr'>
            <img
              className='icon'
              src={play}
              alt='arrow' />
          </div>
        </div>
      
        <Numbers />
                
        {match && <Socials />}
      </div>
    </section>
  )
}
