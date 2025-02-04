import { useState } from 'preact/hooks'
import HomePage from '@pages/HomePage/HomePage'
import Header from '@components/layout/Header/Header'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation} from 'react-router-dom'
export function App() {
 
  const location = useLocation()

  return (
    <>
      <Header />

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
    </>
  )
}
