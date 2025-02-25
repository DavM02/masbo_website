import './homeScrol.scss'
import ScrollIndicator from './ScrollIndicator/ScrollIndicator'
import ProjectsList from './ProjectsList/ProjectsList'
import Services from './Services/Services'
import InvestmentProjects from './Investment/InvestmentProjects'
import About from './About/About'
import ArchitectureEngineering from './Architecture/ArchitectureEngineering'
import ConstructionInterior from './Construction/ConstructionInterior'
import Team from './Team/Team'
import useAnimation from '@hooks/useAnimation'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { setScrollTween } from '../../Scroll/ScrollAccess'
export default function HomeScroll() { 

  const { width, height, isLargeScreen} = useAnimation()
 
  useAnimation(() => {
   
    const createAnimation = () => {
 
      let scrollTween = gsap.to("#home-scroll > .row", {
        x: isLargeScreen ? "-700vw" : () => -(1762 + 3271 + window.innerWidth * 4 + (window.innerWidth / 3 * 2)), 
        ease: "none",
        scrollTrigger: {
          id: '_home-scroll',
          scroller: "#scroll-wrapper",
          trigger: "#home-scroll",
          start: "top top",
          end: () => "+=" + window.innerHeight,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        }
      });

      setScrollTween(scrollTween)
      // ScrollTrigger.refresh()
    }

    if((width && height) || isLargeScreen) {
      createAnimation();
    } 
    
 
  }, );
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
