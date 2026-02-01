import PortfolioHeader from './PortfolioHeader'
import PortfolioHero from './PortfolioHero'
import PortfolioOverview from './PortfolioOverview'
import PortfolioDetails from './PortfolioDetails'
import PortfolioDescription from './PortfolioDescription'
import './portfolioInside.scss'

export default function PortfolioInside({ project }) {
  return (
    <>
      <section
        id="portfolio-inside">
        <div
          className="container">
          <PortfolioHeader
            id={project.id} />

          <PortfolioHero
            image={project.mainImage} />

          <PortfolioOverview
            title={project.title}
            intro={project.intro} />

          <PortfolioDetails
            details={project.details} />

          <PortfolioDescription
            description={project.description} />
        </div>
      </section>
    </>
  )
}
