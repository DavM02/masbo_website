import { useState, useRef} from 'preact/hooks'

import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial'

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
 
export function App() {
 
  const location = useLocation()

  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    { scope: main }
  );

  return (
    <>
      <Header />

      <div
        id='smooth-wrapper'
        ref={main}>
        <div
          id="smooth-content">
        
          <main>

            <AnimatePresence
              mode="wait"
              initial={false}>
              <Routes
                location={location}
                key={location.pathname}>
                <Route
                  path="/"
                  element={<HomePage />} />

              </Routes>

            </AnimatePresence>
    
          </main>
        </div>
      </div>
    </>
  )
}
