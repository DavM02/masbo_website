import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
import SmoothScroll from '@components/Scroll/SmoothScroll'
 import Footer from '@components/layout/Footer/Footer'

export function App() {
 
  const location = useLocation()

  return (
    <>
   

 
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
              </Routes>

            </AnimatePresence>
    
          </main>
 <Footer/>
        </SmoothScroll>
 
    </>
  )
}
