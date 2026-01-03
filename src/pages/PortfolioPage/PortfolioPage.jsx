import PortfolioHeading from "@components/sections/PortfolioHeading/PortfolioHeading";
import Portfolio from "@components/sections/Portfolio/Portfolio";
import PortfolioInsidePage from '@pages/PortfolioPage/PortfolioInsidePage/PortfolioInsidePage';
import SmoothAppearance from '@ui/SmoothAppearance';
import PageTransition from "@components/PageTransition/PageTransition";
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";

function PortfolioPage() {
  const location = useLocation();

  const subKey = location.pathname.replace('/portfolio', '') || 'index';

  return (
    <div
      id="portfolio-page">
      <PortfolioHeading />

      <AnimatePresence
        mode="wait">
        <SmoothAppearance
          blur={false}
          style={{position: 'relative', zIndex: 509}}
          key={subKey}>
          <Routes
            location={location}
            key={subKey}>
            <Route
              index
              element={<Portfolio />} />

            <Route
              path=":slug"
              element={<PortfolioInsidePage />} />
          </Routes>
        </SmoothAppearance>
      </AnimatePresence>
    </div>
  );
}

export default PageTransition(PortfolioPage);
