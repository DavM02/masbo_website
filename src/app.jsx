import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import SmoothScroll from '@components/Scroll/SmoothScroll'
import MainContextProvider from '@context/MainContext'

export function App() {
 
  const location = useLocation()

  return (
    <>
      <Header />

      <MainContextProvider>
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
              </Routes>

            </AnimatePresence>
    
          </main>

          {/* <footer
            style={{height: '400px', backgroundColor: 'red', width: '100%'}}></footer> */}
        </SmoothScroll>
      </MainContextProvider>
    </>
  )
}
