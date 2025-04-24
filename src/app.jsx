import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import SmoothScroll from '@components/Scroll/SmoothScroll'
import Footer from '@components/layout/Footer/Footer'
import AboutPage from '@pages/AboutPage/AboutPage'
import MainContextProvider from '@context/MainContext'
export function App() {
 
  const location = useLocation()
 
  return (
    <>
      <MainContextProvider>

        <Header />

        <SmoothScroll>
          <main
            data-mode={location.pathname === "/" ? "dark" : "light"}>
            <AnimatePresence
              mode="wait"
              initial={false}>
              <Routes
                location={location}
                key={location.pathname}>
                <Route
                  path="/"
                  element={<HomePage />} />

                <Route
                  path='about'
                  element={<AboutPage />}>

                </Route>
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />

        </SmoothScroll>
      </MainContextProvider>
    </>
  )
}
