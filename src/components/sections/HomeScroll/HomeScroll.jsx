import './homeScrol.scss'
import ScrollIndicator from './ScrollIndicator/ScrollIndicator'
import Projects from './Projects/Projects'
import Services from './Services/Services'
import InvestmentProjects from './Investment/InvestmentProjects'
import About from './About/About'
import ArchitectureEngineering from './Architecture/ArchitectureEngineering'
import ConstructionInterior from './Construction/ConstructionInterior'
import Team from './Team/Team'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAnimation from "@hooks/useAnimation"
import { getScrollBar } from '@components/Scroll/ScrollAccess'
import useMediaQ from '@hooks/useMediaQ'


export default function HomeScroll() { 
  const { match } = useAnimation()
  
 
  const isLargeScreen = useMediaQ(
    "(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"
  );
 
  useGSAP(() => {
    const createAnimation = () => {
    
      if (match) {
        gsap.to("#home-scroll > .row", {
          x: isLargeScreen
            ? "-700vw"
            : () =>
              -(
                1762 +
                    3271 +
                    window.innerWidth * 4 +
                    (window.innerWidth / 3) * 2
              ),
          ease: "none",
          scrollTrigger: {
            id: 'home_trigger',
            trigger: "#home-scroll",
            start: "top top",
            end: () => "+=" + window.innerHeight,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            force3D: true,
          },
        });

        getScrollBar()?.update()
      }
    };
   
    requestAnimationFrame(() => {
      ScrollTrigger.getById("home_trigger")?.kill()
      createAnimation()
    }
    )
 
 
  }, {dependencies: [ match, isLargeScreen ], revertOnUpdate: true})
   
  return (
    <section
      id="home-scroll">
      <div
        className='row'>
        
        <About />

        <ArchitectureEngineering />

        <ConstructionInterior />

        <Projects />

        <Services />

        <InvestmentProjects /> 

        <Team />
      </div>

      <ScrollIndicator />
    </section>
  );
}
