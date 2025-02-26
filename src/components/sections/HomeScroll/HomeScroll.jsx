import './homeScrol.scss'
import ScrollIndicator from './ScrollIndicator/ScrollIndicator'
import ProjectsList from './ProjectsList/ProjectsList'
import Services from './Services/Services'
import InvestmentProjects from './Investment/InvestmentProjects'
import About from './About/About'
import ArchitectureEngineering from './Architecture/ArchitectureEngineering'
import ConstructionInterior from './Construction/ConstructionInterior'
import Team from './Team/Team'

export default function HomeScroll() { 

   
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
