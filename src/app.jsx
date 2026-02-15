import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import SmoothScroll from '@components/Scroll/SmoothScroll'
import Footer from '@components/layout/Footer/Footer'
import ServicesPage from '@pages/ServicesPage/ServicesPage'
import MainContextProvider from '@context/MainContext'
import TeamPage from '@pages/TeamPage/TeamPage'
import AboutPage from '@pages/AboutPage/AboutPage'
import PageLoading from '@components/PageLoading/PageLoading'
import { useState } from 'preact/hooks'
import BlogPage from '@pages/BlogPage/BlogPage'
import BlogInsidePage from './pages/BlogPage/BlogInsidePage/BlogInsidePage'
import ContactsPage from '@pages/ContactsPage/ContactsPage'
import PortfolioRoute from '@pages/PortfolioPage/PortfolioRoute'
import NotFound from '@pages/NotFound/NotFound'

export function App() {
 
  const location = useLocation()

  const [ show, setShow ] = useState(
    !!sessionStorage.getItem('animationCompleted') ||
  document.referrer.includes('masbo')
  );


  return (
    <>
      <MainContextProvider>

        <Header />

        {/* <SmoothScroll> */}
        <main>
          <div style={{ height: '500px', backgroundColor: 'red' }}> </div>
          <div style={{ height: '500px', backgroundColor: 'blue' }}> </div>
           <div style={{height: '500px', backgroundColor: 'pink'}}> </div>
          {/* <AnimatePresence
            mode="wait"
            initial={false}>
            <Routes
              location={location}
              key={location.pathname === "/news" ? location.pathname : location.pathname.split('/')[1]}>
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
                
              <Route
                path="news"
                element={<BlogPage />} />
                
              <Route
                path="news">
                <Route
                  index
                  element={<BlogPage />} />

                <Route
                  path=":blogId"
                  element={<BlogInsidePage />} />
              </Route>

              <Route
                path="contact"
                element={<ContactsPage />} />
              
              <Route
                path="portfolio/*"
                element={<PortfolioRoute />} />
                
              <Route
                path="*"
                element={<NotFound />} />

            </Routes>
          </AnimatePresence> */}
        </main>

        <Footer />

        {/* </SmoothScroll> */}

 
      </MainContextProvider>

      {(show === false) && <PageLoading

        setShow={setShow} />}

    </>
  )
}
