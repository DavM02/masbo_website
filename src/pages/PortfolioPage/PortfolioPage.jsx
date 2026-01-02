import PageTransition from "@components/PageTransition/PageTransition";
import PortfolioHeading from "@components/sections/PortfolioHeading/PortfolioHeading";

import { Outlet } from "react-router-dom";


function PortfolioPage() {
  return (
    <div
      id="portfolio-page">
      <PortfolioHeading />

      <Outlet />
    </div>
  )
}

export default  PageTransition(PortfolioPage)
