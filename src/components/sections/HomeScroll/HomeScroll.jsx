import './homeScrol.scss'
import ScrollIndicator from './ScrollIndicator/ScrollIndicator'
import ProjectsList from './ProjectsList/ProjectsList'
import Services from './Services/Services'
import InvestmentProjects from './Investment/InvestmentProjects'
import About from './About/About'
import ArchitectureEngineering from './Architecture/ArchitectureEngineering'
import ConstructionInterior from './Construction/ConstructionInterior'
import Team from './Team/Team'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setScrollTween } from '../../Scroll/ScrollAccess'
import useAnimation from "@hooks/useAnimation"
import { useContext } from "preact/hooks";
import { MainContext } from "@context/MainContext";
export default function HomeScroll() { 
  const {width, height, isLargeScreen} = useAnimation()
  const { setTriggerInit } = useContext(MainContext)
 
  useGSAP(() => {
    const createAnimation = () => {
    
      if (width && height) {
        let scrollTween = gsap.to("#home-scroll > .row", {
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
        setScrollTween(scrollTween);
      }
    };
   
    requestAnimationFrame(() => {
      ScrollTrigger.getById("home_trigger")?.kill()
      createAnimation()
     

      setTriggerInit(true)
 
    }
    )

    return () => {
      setTriggerInit(false)
    }
 
  }, {dependencies: [ width,
    height,
    isLargeScreen ], revertOnUpdate: true})
   
  return (
    <section
      id="home-scroll">
      <div
        className='row'>
        
        <About />

        <ArchitectureEngineering />

        <ConstructionInterior />

        <ProjectsList />

        <Services />

        <InvestmentProjects /> 

        <Team />
      </div>

      <ScrollIndicator />
    </section>
  );
}
