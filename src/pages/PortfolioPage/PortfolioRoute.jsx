import SmoothAppearance from '@ui/SmoothAppearance';
import PageTransition from "@components/PageTransition/PageTransition";
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";
import { getScrollBar } from "@components/Scroll/ScrollAccess";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioHeading from "@components/sections/PortfolioHeading/PortfolioHeading"
import PortfolioInsidePage from './PortfolioInsidePage/PortfolioInsidePage';
import PortfolioPage from './PortfolioPage';

function PortfolioRoute() {


  const location = useLocation();

  const subKey = location.pathname.replace('/portfolio', '') || 'index';

  
  return (
    <div
      id="portfolio-page">
      <PortfolioHeading />

      <AnimatePresence
      
        
        onExitComplete={() => {

        
          ScrollTrigger.getAll().forEach(trigger => {
            if (
              trigger.vars.id !== "header_trigger_1" 
            ) {
              trigger.kill();
            }
          });

          if (!window.location.hash.includes('portfolio')) return;

          const scrollbar = getScrollBar();

          if (scrollbar) {
            scrollbar.scrollTo(0, 375, 0);
          } else {
            window.scrollTo({
              top: 375,
              left: 0,
              behavior: 'auto',
            });

          }
 
        }}


        mode="wait">
        <SmoothAppearance
          onAnimationStart={(e) => {
            if (e.opacity !== 0) return
 
            getScrollBar()?.updatePluginOptions("overflow", {
              open: true,
            });
 
          }}
          onAnimationComplete={(e) => {
            if (e.opacity !== 1) return
       
            getScrollBar()?.updatePluginOptions("overflow", {
              open: false,
            });

          }}

          id="portfolio-page-transition"
          updateLayout={true}
          style={{position: 'relative', zIndex: 509}}
          key={subKey}>
          <Routes
            location={location}
            key={subKey}>
            <Route
              index
              element={ <PortfolioPage />} />

            <Route
              path=":slug"
              element={<PortfolioInsidePage />} />
          </Routes>
        </SmoothAppearance>
      </AnimatePresence>
    </div>
  );
}

export default PageTransition(PortfolioRoute);