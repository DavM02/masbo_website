import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import SmoothScroll from '@components/Scroll/SmoothScroll'
import Footer from '@components/layout/Footer/Footer'
import AboutPage from '@pages/AboutPage/AboutPage'
import ServicesPage from '@pages/ServicesPage/ServicesPage'
import MainContextProvider from '@context/MainContext'
import TeamPage from '@pages/TeamPage/TeamPage'
export function App() {
 
  const location = useLocation()
 
  return (
    <>
      <MainContextProvider>

        <Header />

        <SmoothScroll>
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

                <Route
                  path="about"
                  element={<AboutPage />} />
                
                <Route
                  path="services"
                  element={<ServicesPage />} />
                
                <Route
                  path="team"
                  element={<TeamPage />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />

        </SmoothScroll>
      </MainContextProvider>
    </>
  )
}
