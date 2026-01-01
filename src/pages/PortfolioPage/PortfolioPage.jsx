import PageTransition from "@components/PageTransition/PageTransition";
import PortfolioHeading from "@components/sections/PortfolioHeading/PortfolioHeading";
import Portfolio from "@components/sections/Portfolio/Portfolio";


function PortfolioPage() {
  return (
    <div
      id="portfolio-page">
      <PortfolioHeading />

      <Portfolio />
    </div>
  )
}

export default  PageTransition(PortfolioPage)
